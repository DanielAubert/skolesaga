import type { QuizQuestion } from './quiz-data';

const quizData_fil1001: Record<string, QuizQuestion[]> = {
  'fil1001-0-1': [
    {
      question: "Hvilken vurderingsform har FIL1001?",
      options: ["Én 4-timers digital skoleeksamen uten hjelpemidler, karakter A–F", "Én 4-timers skoleeksamen med alle hjelpemidler, karakter A–F", "En mappevurdering av to innleveringer, karakter A–F", "En 6-timers hjemmeeksamen med kildebruk, bestått/ikke bestått"],
      explanation: "Vurderingen er én digital skoleeksamen på fire timer i Inspera, uten hjelpemidler, med karakterskala A–F. De obligatoriske arbeidskravene må godkjennes, men teller ikke på karakteren, så mappevurdering er feil. Hjelpemiddelfriheten er verdt å merke seg: alt du skal bruke, må sitte i hodet.",
    },
    {
      question: "Hva sier bestått-per-oppgave-regelen?",
      options: ["Hver enkelt oppgave må kunne vurderes til bestått for samlet ståkarakter", "Gjennomsnittet av de fire oppgavene må ligge over bestått-terskelen", "Minst tre av de fire oppgavene må kunne vurderes til bestått ved sensur", "Den beste av de fire oppgavene avgjør om besvarelsen er bestått"],
      explanation: "Regelen krever at hvert enkelt svar står på egne bein: ett svar under terskelen truer hele ståkarakteren. Gjennomsnittstenkning og «tre av fire holder» er nettopp de misforståelsene regelen utelukker, og de er farlige fordi de gjør spisskompetanse mer fristende enn bredde.",
    },
    {
      question: "Hva er den viktigste strategiske konsekvensen av bestått-per-oppgave-regelen?",
      options: ["Temabredde slår spisskompetanse — jevne svar slår ett tynt", "Spisskompetanse slår bredde — to strålende svar kan bære de to øvrige", "Rekkefølgen på svarene avgjør, så det beste svaret bør stå først", "Lengden avgjør, så det lønner seg å skrive mest mulig på hvert svar"],
      explanation: "Fordi ett svakt svar ikke kan bæres av de andre, gir bredde fire uavhengige sjanser til å passere terskelen. Verken rekkefølge eller lengde påvirker vurderingen; det er drøftingskvaliteten i hvert enkelt svar som teller.",
    },
    {
      question: "Hva kjennetegner settformatet «fire av N, fritt valg», som er brukt fra våren 2017?",
      options: ["Én blandet liste der fire oppgaver velges fritt av kandidaten", "To adskilte lister der to av oppgavene må velges fra hver av listene", "En fast liste på fire oppgaver som alle kandidater må besvare", "Én liste der de fire første oppgavene er obligatoriske for alle"],
      explanation: "I dagens format står alle oppgavene i én blandet liste på sju eller åtte, og kandidaten velger fritt fire. Formatet med to adskilte lister er det eldre delte settet, der begge delene må besvares — en forskjell som avgjør hvordan du planlegger valget ditt.",
    },
    {
      question: "Hva krever det eldre «delte» settformatet, som fortsatt brukes i utsatte prøver?",
      options: ["At både Del I Metafysikk og Del II Bevissthetsfilosofi besvares", "At kandidaten velger den ene av de to delene og svarer grundig der", "At alle oppgavene i begge deler besvares kort", "At Del I Metafysikk besvares skriftlig og Del II som flervalgsoppgaver"],
      explanation: "I delte sett er begge delene obligatoriske, og man velger et fåtall oppgaver innenfor hver del. Å samle alle svarene i den ene delen er ikke tillatt, og er en av de dyreste feilene i faget fordi den koster poeng uavhengig av kunnskapsnivå.",
    },
    {
      question: "Hva innebærer overlapp-forbudet?",
      options: ["Samme poeng eller eksempel gjenbrukt i to svar gir ikke dobbel uttelling", "Man kan ikke velge to oppgaver fra samme tema innenfor det samme settet", "Man kan ikke nevne samme filosof i mer enn ett av de fire svarene", "Man kan ikke bruke det samme instruksjonsverbet i to svar"],
      explanation: "Forbudet gjelder gjenbruk av selve innholdet: skriver du det samme argumentet to ganger, betales det bare én gang. Å velge to oppgaver fra samme tema er derimot tillatt, og å nevne en filosof flere steder er helt greit så lenge hvert svar står på egne argumenter.",
    },
    {
      question: "Hvilken sjanger er grunnformen som ligger under så godt som hvert spørsmål i FIL1001?",
      options: ["S1 — redegjør for X, diskuter kritisk, ta stilling", "S2 — sammenlign to posisjoner langs flere dimensjoner", "S3 — rekonstruer og vurder et navngitt tankeeksperiment", "S5 — åpen problemstilling forankret i pensumtekstene"],
      explanation: "Grunnformen er tredelt: redegjørelse, kritisk drøfting og begrunnet standpunkt. De øvrige sjangrene er varianter som legger til et krav (sammenligning, eksperimentanalyse, egen mobilisering av posisjoner), men tredelingen ligger under dem alle.",
    },
    {
      question: "En oppgave lyder: «To metallkuler er kvalitativt helt like i et ellers tomt univers. Er de én ting eller to?» Hvilken sjanger er dette?",
      options: ["S3 — argument- og tankeeksperimentanalyse", "S1 — redegjør, diskuter kritisk og ta stilling", "S2 — sammenlign to posisjoner langs flere dimensjoner", "S4 — flerdelt trinn-oppgave med deloppgaver a, b, c og d"],
      explanation: "Oppgaven er formulert som selve eksperimentet, uten redegjørelsesverb og uten to navngitte posisjoner — det er kjennetegnet på tankeeksperimentanalysen. Svaret må finne det springende premisset og prøve det, ikke bare gjengi hva eksperimentet går ut på.",
    },
    {
      question: "Hva kjennetegner sjanger S5, den åpne pensumforankrede problemstillingen?",
      options: ["Kandidaten må selv mobilisere de mest relevante posisjonene fra pensum", "Oppgaven navngir posisjonene som skal drøftes, og ber om en sammenligning", "Oppgaven er delt i deloppgaver som fører kandidaten trinnvis gjennom problemet", "Oppgaven ber om en ren redegjørelse uten noe krav om egen kritisk stillingtaken"],
      explanation: "I S5 er spørsmålet vidt («har mennesker fri vilje?»), og selve prøven er om du finner fram til de to–tre posisjonene som faktisk er relevante. At oppgaven navngir posisjonene, er derimot typisk for sammenligningssjangeren, og trinnvis føring er den flerdelte oppgavens kjennetegn.",
    },
    {
      question: "Hvilket tema har flest sett-treff i bevissthetsfilosofidelen?",
      options: ["Bevisste sanseopplevelser — qualia-komplekset, 12 av 21 sett", "Behaviorisme, 13 av 21 sett", "Mental kausalitet og eksklusjonsargumentet, 13 av 21 sett", "Intensjonalitet og mental representasjon, 11 av 21 sett"],
      explanation: "Qualia-komplekset ligger øverst med 12 av 21 sett, tett fulgt av dualisme og funksjonalisme med 13 hver. Behaviorisme er derimot et lavfrekvent kontrasttema med 4 treff, og intensjonalitet er blant de laveste med 2 — tallene i distraktorene er hentet fra helt andre temaer.",
    },
    {
      question: "Hvilken lærebok eier uttrykkene «soft determinism», «the Space-Time Theory of Time» og «the psychological continuity view»?",
      options: ["Conee og Siders «Riddles of Existence», emnets metafysikkanker", "Kims «Philosophy of Mind», emnets bevissthetsanker", "Descartes' «Meditasjoner over filosofiens grunnlag», emnets klassiske primærtekst", "Berkeleys «Three Dialogues», emnets viktigste primærtekst om idealisme"],
      explanation: "De tre uttrykkene er Conee og Siders, og oppgavene siterer dem direkte, så terminologien deres må brukes ordrett når den etterspørres. Kim eier de tilsvarende uttrykkene i bevissthetsfilosofien — minimal fysikalisme, reduksjonsmodellene og eksklusjonsargumentet — mens de to andre er primærtekster, ikke lærebøker.",
    },
    {
      question: "Hvor mange unike eksamenssett er frekvenstallene i denne boka telt over?",
      options: ["21 unike sett fra H2005 til H2024", "22 unike sett fra H2005 til H2024", "19 unike sett fra H2010 til H2024", "30 unike sett fra H2000 til H2024"],
      explanation: "Nevneren i alle frekvenspåstander er de 21 unike settene: 18 ordinære og 3 utsatte prøver. Tallet 22 er antall filer — våren 2017 finnes i både bokmåls- og nynorskversjon og telles som ett sett — og settene mangler for 2007, 2020, 2021 ordinær og 2025.",
    },
  ],
  'fil1001-0-2': [
    {
      question: "Hva er de tre leddene i den faste tredelingen som ligger under så godt som hvert spørsmål?",
      options: ["Redegjør for posisjonen, diskuter den kritisk, ta begrunnet stilling", "Definer begrepene, gjengi pensum, oppsummer debatten kort", "Presenter din mening, finn støtte for den, avvis motstanderne", "Beskriv problemet, ramse opp posisjonene, la spørsmålet stå åpent"],
      explanation: "Tredelingen er redegjørelse, kritisk drøfting og begrunnet stillingtaken, og alle tre må være til stede. Å ramse opp posisjoner uten å veie dem, eller å starte i egen mening uten redegjørelse, er nettopp de to måtene svaret kan mislykkes på selv med korrekt kunnskap.",
    },
    {
      question: "Hva vil det si å rekonstruere et argument, i motsetning til å referere det?",
      options: ["Å sette det opp som premisser som fører fram til en konklusjon", "Å gjengi tenkerens egne formuleringer så ordrett som overhodet mulig", "Å oppsummere hva tenkeren mener, i én kort setning", "Å plassere tenkeren i sin historiske og faglige sammenheng i tiden"],
      explanation: "Rekonstruksjon betyr å vise argumentets ledd: premiss, premiss, konklusjon. Ordrett gjengivelse og historisk plassering kan være riktig og relevant, men viser ikke hva argumentet hviler på — og det er nettopp den innsikten som gjør drøftingen etterpå mulig.",
    },
    {
      question: "Hvilket av de fem kjennetegnene i sensorveiledningen for høsten 2018 kaller boka «A-aksen»?",
      options: ["At svaret påviser sammenhenger mellom argumentene rundt ett tema", "At svaret er klart skrevet og ryddig strukturert", "At svaret viser god kunnskap om de filosofiske teoriene i pensum", "At svaret argumenterer effektivt for et eget standpunkt"],
      explanation: "Kjennetegn 3 — påviste sammenhenger — er det grepet som oftest skiller A fra C, og det er det flest kandidater lar ligge. De tre andre kjennetegnene er selvsagt også krav, men de er som regel oppfylt i et jevnt C-svar.",
    },
    {
      question: "Hva kreves minst for at ett enkelt svar skal passere bestått-terskelen?",
      options: ["Korrekt og relevant redegjørelse pluss minst ett reelt forsøk på kritisk drøfting", "Korrekt og relevant redegjørelse for posisjonen oppgaven spør om", "En navngitt innvending, posisjonens eget svar på den og en begrunnet konklusjon", "Minst to posisjoner sammenlignet langs to eller flere dimensjoner"],
      explanation: "Terskelen krever både redegjørelse og et reelt drøftingsforsøk — en ren redegjørelse er ikke nok, siden oppgaven eksplisitt ber om diskusjon. Kravene om posisjonens eget svar og påviste sammenhenger ligger derimot høyere, på C- og A-nivå.",
    },
    {
      question: "Hvordan beskriver boka C-karakteren i FIL1001?",
      options: ["Som en god og vanlig karakter: jevnt god kunnskap og drøfting i alle fire svar", "Som et faresignal om at drøftingen er fraværende i flere av svarene", "Som resultatet av å ha svart korrekt, men bare på tre av fire oppgaver", "Som en karakter som først og fremst skyldes for lite stoff i selve besvarelsen"],
      explanation: "C betyr jevnt god kunnskap og kritisk drøfting i alle fire svar, med veide innvendinger, og er en god og vanlig karakter i et innføringsemne. Manglende drøfting ligger under terskelen, og mengden stoff er ikke det som skiller nivåene.",
    },
    {
      question: "Hva skiller ifølge boka først og fremst et A-svar fra et C-svar?",
      options: ["Drøftingskvaliteten og de påviste sammenhengene, ikke mengden stoff", "Antall posisjoner og navngitte filosofer som blir nevnt i løpet av svaret", "Lengden på besvarelsen og antall fagtermer som brukes", "Om kandidaten lander på den konklusjonen sensor selv mener er riktig"],
      explanation: "A-nivået kjennetegnes av at kandidaten behandler stoffet: rekonstruerer, veier og kobler argumenter på tvers. Standpunktet er fritt — alle utfall kan gi toppkarakter med stringent begrunnelse — og et A-svar kan dekke færre posisjoner enn et C-svar.",
    },
    {
      question: "Hva innebærer steelman-regelen om at posisjonen skal gjengis i sin sterkeste form?",
      options: ["Posisjonen presenteres med sin beste grunn før den kritiseres", "Posisjonen presenteres sammen med den innvendingen som rammer den hardest", "Posisjonen presenteres bare hvis kandidaten selv mener den er riktig", "Posisjonen presenteres i tenkerens egne ord for å unngå feiltolkning"],
      explanation: "Regelen krever at du sier hvilket problem posisjonen løser, og hvorfor kloke folk har holdt den, før du angriper. Å innføre en posisjon gjennom innvendingen mot den er stråmannsfeilen, og den koster dobbelt: både på kunnskapskravet og fordi drøftingen da felles noe ingen har hevdet.",
    },
    {
      question: "Hva menes med å «veie» innvendinger, slik boka bruker uttrykket?",
      options: ["Å si hvilket argument som står sterkest, og begrunne hvorfor", "Å presentere like mange argumenter for som imot posisjonen", "Å ramse opp alle innvendingene som finnes mot posisjonen", "Å avvise innvendingene som ikke passer med eget standpunkt"],
      explanation: "Veiing er en vurdering med grunner, ikke en opptelling. Å liste flest mulig innvendinger, eller å balansere antallet på hver side, er ikke det samme som å si hvem som vinner og hvorfor — og «det står uavgjort» er bare gyldig hvis grunnene til balansen oppgis.",
    },
    {
      question: "En besvarelse avsluttes med «jeg mener Lewis har rett». Hvilken av de ti feilene er dette?",
      options: ["Feil #4 — påstand uten argument i ta-stilling-delen", "Feil #1 — referat uten noen drøfting av posisjonen som gjengis", "Feil #9 — ensidig drøfting uten innvendinger", "Feil #10 — manglende sammenhenger mellom argumentene"],
      explanation: "Et standpunkt er en konklusjon, og konklusjoner må hvile på premisser fra drøftingen foran. Referat uten drøfting gjelder svar som stopper etter redegjørelsen, ensidig drøfting gjelder svar som aldri møter motstand, og manglende sammenhenger gjelder svar som behandler argumentene isolert.",
    },
    {
      question: "Hva er dialektikk i bokas forstand?",
      options: ["At innvendingen får posisjonens eget svar før du vurderer hvem som vinner", "At du legger fram flere ulike innvendinger etter hverandre mot samme posisjon", "At du veksler fram og tilbake mellom to posisjoner uten å konkludere til slutt", "At du gjengir debatten slik den historisk har utviklet seg"],
      explanation: "Dialektikk er bevegelsen innvending, forsvar, vurdering — det er den som viser kritiske ferdigheter. Én innvending med svar og vurdering er sterkere enn tre innvendinger som står ubesvarte, og historisk framstilling er noe annet enn argumentativ behandling.",
    },
    {
      question: "Hvordan fordeler bokas tidsbudsjett de 240 minuttene på eksamen?",
      options: ["15 min settlesing og disponering, 4 × 45 min skriving, 45 min buffer", "10 min settlesing, 4 × 55 min skriving, 10 min gjennomlesing", "30 min settlesing og disponering, 4 × 50 min skriving, ingen buffer", "20 min settlesing, 4 × 40 min skriving, 60 min til renskriving"],
      explanation: "Modellen er 15 minutter til å lese settet og disponere, 180 minutter skriving fordelt på fire svar, og 45 minutter buffer til kladd og gjennomlesing. Når boka sier «ca. 45 minutter per oppgave», er det skrivetid — differansen opp til 240 er lesing, disponering og retting.",
    },
    {
      question: "Oppgaven lyder: «Gjør rede for X, forklar hvordan X motiveres, drøft innvendinger, og ta stilling.» Hva er det første grepet?",
      options: ["Telle instruksjonsverbene og planlegge én del av svaret for hvert av dem", "Begynne på redegjørelsen med én gang for å sikre grunnpoengene tidlig i svaret", "Bestemme standpunktet først, slik at drøftingen kan bygge opp mot nettopp det", "Skrive ned alt du husker om temaet, og rydde i det etterpå"],
      explanation: "Verbtellingen avgjør hvor mange deler svaret skal ha, og er den billigste forsikringen mot å levere et halvt svar. Å skrive alt du husker gir dessuten ingen uttelling i seg selv — det er behandlingen av stoffet, ikke mengden, som vurderes.",
    },
    {
      question: "Hva krever instruksjonsverbet «sammenlign X og Y» ifølge instruksjonsverb-tabellen?",
      options: ["Begge posisjonene redegjort for, deretter eksplisitte sammenligningspunkter og vurdering", "En redegjørelse for hver av de to posisjonene, presentert etter hverandre i hver sin bolk", "En vurdering av hvilken av de to posisjonene som i dag er mest utbredt blant fagfilosofer", "En rekonstruksjon av det springende premisset i den sterkeste av de to"],
      explanation: "Sammenligningen må skje langs to til fire navngitte dimensjoner med en kort vurdering på hver akse. To referater etter hverandre er den vanligste måten å tape poeng i denne sjangeren, og springende premiss hører hjemme i tankeeksperimentanalysen.",
    },
    {
      question: "Hvordan bør en egen intuisjon brukes i en besvarelse?",
      options: ["Som et premiss eller moteksempel som selv må begrunnes og forsvares", "Som den avsluttende begrunnelsen for standpunktet du lander på", "Den bør holdes utenfor, siden bare pensumposisjoner teller på eksamen", "Som en innledning som viser leseren hvor engasjert du er i temaet"],
      explanation: "Intuisjoner er råstoffet tankeeksperimentene er laget av, men de må konverteres: start i tenkerens begrep, bruk intuisjonen som premiss eller moteksempel, og koble den til drøftingsaksen. Ukonvertert intuisjon som eneste begrunnelse er påstand uten argument.",
    },
    {
      question: "Hvilket punkt i den binære selvrettingsrubrikken mister flest kandidater?",
      options: ["Punktet om å påvise minst én eksplisitt sammenheng til et annet argument", "Punktet om å plassere posisjonen i én setning før rekonstruksjonen begynner", "Punktet om å besvare alle ledd i oppgaveformuleringen", "Punktet om å bruke den navngitte teksten der oppgaven navngir den"],
      explanation: "Sammenhengspunktet svarer til kjennetegn 3 og er det som oftest står ukrysset i ellers gode svar. De andre punktene er lettere å oppfylle mekanisk — de krever oppmerksomhet, ikke det ekstra grepet med å koble argumentene til hverandre.",
    },
  ],
  'fil1001-1-1': [
    {
      question: "Hva er en primær substans hos Aristoteles?",
      options: ["Det konkrete enkeltindividet, som dette mennesket eller denne hesten", "Arten eller slekten det enkelte individet tilhører, som menneske eller dyr", "Egenskapen som gjør at vi kan gjenkjenne en ting som nettopp den den er", "Materien tingen består av, uavhengig av formen den har fått"],
      explanation: "Primær substans er enkeltindividet — det som verken er i et subjekt eller sies om et subjekt. Arten er derimot sekundær substans, og materien er én av to sider ved enkelttinget i den videre analysen, ikke det primære i kategorilæren.",
    },
    {
      question: "Hva er en sekundær substans hos Aristoteles?",
      options: ["Arten og slekten et enkeltindivid tilhører, som menneske og dyr", "En egenskap som en substans ikke kan miste uten å opphøre", "Det konkrete enkeltindividet av materie og form", "En relasjon mellom to enkeltindivider, som «større enn»"],
      explanation: "Sekundære substanser er arter og slekter, og de kalles substanser fordi de svarer på hva noe er. De er sekundære fordi de sies om de primære substansene og ikke omvendt — avhengigheten går bare én vei.",
    },
    {
      question: "Hva menes med at en egenskap er «i et subjekt» hos Aristoteles?",
      options: ["At den ikke kan eksistere atskilt fra det den er i", "At den er en fysisk del av tingen, slik en gren er del av et tre", "At den sier hva tingen er, og inngår i definisjonen av den", "At den kan sies om mange ulike enkeltting av det samme slaget"],
      explanation: "Inherens betyr avhengig eksistens, ikke deltilhørighet: Sokrates' blekhet kan ikke flyttes ut og eksistere alene. Å si hva tingen er, hører til predikasjon av sekundære substanser, og en fysisk del er nettopp ikke det Aristoteles mener med å være i et subjekt.",
    },
    {
      question: "Hvilken kombinasjon kjennetegner en primær substans i Aristoteles' firdeling?",
      options: ["Verken i et subjekt eller sagt om et subjekt", "Sagt om et subjekt, men ikke i et subjekt", "I et subjekt, men ikke sagt om et subjekt", "Både i et subjekt og sagt om et subjekt"],
      explanation: "Den primære substansen er det eneste som verken finnes i noe annet eller sies om noe annet — derfor er den grunnleggende. De tre andre kombinasjonene beskriver henholdsvis sekundære substanser, enkeltegenskaper og allmenne egenskaper.",
    },
    {
      question: "Hvor mange kategorier lister Aristoteles, og hvilken er den første?",
      options: ["Ti kategorier, med substansen som den første", "Fire kategorier, med materien som den første", "Ti kategorier, med kvaliteten som den første", "Tolv kategorier, med relasjonen som den første"],
      explanation: "Kategoriene er ti, og substansen står først fordi de ni andre bare finnes ved en substans. Tallet fire hører til de fire årsakene, som er en annen lære, og verken kvalitet eller relasjon kan stå først, siden begge forutsetter noe de tilhører.",
    },
    {
      question: "Hva er hovedpoenget i kategorilæren, ifølge det oppgavene faktisk spør etter?",
      options: ["At de ni øvrige kategoriene bare finnes ved en substans", "At kategoriene til sammen dekker alt som kan sies om et emne", "At de ti kategoriene kan læres utenat i en fast rekkefølge", "At kategoriene svarer til grammatiske ledd i en setning"],
      explanation: "Det som gir uttelling, er avhengigheten: ingen kvalitet uten noe som er slik, ingen relasjon uten noe som står i den. En ren oppregning av de ti navnene er navnedropping uten innhold, selv om oppregningen i seg selv er korrekt.",
    },
    {
      question: "«Nord for huset» tilhører hvilken kategori, og hva kjennetegner den?",
      options: ["Relasjon — den krever minst to substanser for å finnes", "Sted — den angir hvor substansen befinner seg i rommet", "Kvalitet — den beskriver hvordan substansen er", "Kvantitet — den angir avstanden mellom to substanser"],
      explanation: "Uttrykket setter to ting i forhold til hverandre og er derfor en relasjon, som er dobbelt avhengig. Kategorien sted svarer på «hvor» uten å kreve et annet individ — «på jordet» — og verken kvalitet eller kvantitet handler om forhold mellom ting.",
    },
    {
      question: "Hva sier selvstendighetskriteriet?",
      options: ["X er mer grunnleggende enn Y hvis Y ikke kan finnes uten X, men X uten Y", "X er mer grunnleggende enn Y hvis X varer lenger i tid enn Y gjør", "X er mer grunnleggende enn Y hvis X kan observeres og Y ikke kan det", "X er mer grunnleggende enn Y hvis X kan deles i flere deler enn Y"],
      explanation: "Kriteriet handler om ensidig eksistensavhengighet: fargen trenger den fargede tingen, men ikke omvendt. Varighet, observerbarhet og delelighet er andre egenskaper som ikke avgjør hva som bærer hva.",
    },
    {
      question: "Hva er en essensiell egenskap hos Aristoteles?",
      options: ["En egenskap tingen ikke kan miste uten å slutte å være den tingen", "En egenskap som er særlig viktig for hvordan tingen brukes", "En egenskap alle ting av samme slag tilfeldigvis deler", "En egenskap som kan sanses direkte og derfor er sikkert kjent"],
      explanation: "Testen er kontrafaktisk: kunne tingen mistet egenskapen og likevel vært den samme? Viktighet i praktisk forstand er noe annet — Sokrates' visdom er teknisk sett aksidentell, men neppe uviktig — og sansbarhet er irrelevant for skillet.",
    },
    {
      question: "Hva er en aksidens?",
      options: ["En egenskap tingen kunne vært foruten og likevel bestått", "En egenskap som oppstår ved et uhell eller en tilfeldighet", "En egenskap som bare finnes hos noen få av artens medlemmer", "En egenskap som hører til tingens definisjon ved slekt og art"],
      explanation: "Aksidenser er egenskaper tingen kan miste uten å opphøre: blekhet, høyde, oppholdssted. Ordet betyr ikke «uhell» i dagligtalens forstand, og det som hører til definisjonen, er nettopp essensielt og ikke aksidentelt.",
    },
    {
      question: "Hva er essensialisme som posisjon?",
      options: ["At ting har essenser objektivt, uavhengig av vår klassifisering", "At vi bør definere begrepene våre presist før vi diskuterer dem", "At alle egenskaper ved en ting er like nødvendige for den", "At artsinndelingen bestemmes av hvilke formål vi har med den"],
      explanation: "Essensialismen hevder at naturen er delt i slag før vi navngir dem. Motposisjonen — at inndelingen følger våre interesser — er nettopp innvendingen essensialisten må svare på, og spørsmålet er reelt omstridt.",
    },
    {
      question: "Hva er en definisjon ved slekt og artsforskjell?",
      options: ["Å angi slekten og legge til trekket som skiller arten fra de andre", "Å angi alle de kjennetegnene som tilfeldigvis passer på nettopp den tingen", "Å angi hva tingen består av og hva den brukes til", "Å angi et eksempel som alle er enige om at faller inn under begrepet"],
      explanation: "Oppskriften er slekt pluss artsforskjell, som i «mennesket er et fornuftig dyr», og kravet er at definisjonen fanger essensen. Et kjennetegn som tilfeldigvis passer — «det eneste dyret som lager verktøy» — kan være sant og likevel være en dårlig definisjon.",
    },
    {
      question: "Treet felles og skjæres opp til plank. Hva slags endring er dette?",
      options: ["Substansiell endring — substansen opphører, mens materien består", "Aksidentell endring — substansen består, egenskapen skifter", "Substansiell endring — materien opphører, mens formen består", "Aksidentell endring — både materien og formen består uendret"],
      explanation: "Formen som gjorde materien til dette treet, er borte, mens veden består som materie — derfor opphører substansen. Ved aksidentell endring er det motsatt: bæreren består mens en egenskap som farge eller høyde skifter.",
    },
    {
      question: "Hva er materie (hyle) hos Aristoteles?",
      options: ["Det en ting er laget av, alltid som materie for en form", "Den fysiske grunnsubstansen alle ting til slutt kan reduseres til", "Summen av de sansbare egenskapene en ting har", "Det som gjør at en ting hører til en bestemt art og ikke en annen"],
      explanation: "Materien er alltid materie for en form: en haug bronse er ikke en statue før den er formet. Å lese begrepet som moderne fysikalsk grunnstoff er å bytte ut Aristoteles' posisjon, og det som gir arten, er formen.",
    },
    {
      question: "Hva er form (morfé) hos Aristoteles?",
      options: ["Organiseringen som gjør materien til denne typen ting", "Den ytre fasongen eller omrisset en ting har", "Den kategorien av kvalitet som gjelder utseende", "Idéen om tingen slik den framstår i bevisstheten"],
      explanation: "Formen er et organiserende prinsipp, ikke et ytre omriss lagt oppå materien — den forklarer hvorfor treet vokser og setter blader. Den er heller ikke en kvalitet blant andre, og den finnes i tingen, ikke bare i vår tanke om den.",
    },
    {
      question: "Hva er hylemorfisme?",
      options: ["Læren om at en konkret ting er en enhet av materie og form", "Læren om at bare materien er virkelig, og formen er noe vi legger til", "Læren om at formen eksisterer atskilt fra de tingene den gir form", "Læren om at alle ting består av de samme fire grunnstoffene"],
      explanation: "Materie og form er to sider ved én ting, som bare kan skilles i analysen, og nettopp dette gjør forandring forståelig. En lære der formen eksisterer atskilt fra tingene, er en annen posisjon enn Aristoteles', og grunnstofflæren er et helt annet spørsmål.",
    },
    {
      question: "Hvilken av de fire årsakene svarer på spørsmålet om hva noe er?",
      options: ["Formalårsaken — formen eller vesenet tingen har", "Materialårsaken — det materialet tingen er laget av", "Den virkende årsaken — det som frambrakte tingen", "Formålsårsaken — det tingen er til for"],
      explanation: "Formalårsaken knytter formen til essensen og dermed til definisjonen, og er derfor den viktigste for substanslæren. De tre andre svarer på hva tingen består av, hvem som lagde den, og hva den er til for.",
    },
    {
      question: "Hva er problemet med å oversette Aristoteles' «aitia» med det moderne årsaksbegrepet?",
      options: ["Aitia er enhver forklaringsgrunn, ikke bare en utløsende begivenhet", "Aitia gjelder bare levende vesener, mens vi bruker årsak om alt", "Aitia betegner virkningen, mens vi bruker årsak om det forutgående", "Aitia er et rent språklig begrep uten noen metafysisk betydning"],
      explanation: "Aitia dekker alt som svarer på et hvorfor-spørsmål, blant annet formen og formålet, og er derfor videre enn en forutgående begivenhet som utløser en annen. Å legge det moderne begrepet i munnen på Aristoteles er å bomme på den navngitte tenkeren.",
    },
    {
      question: "Hva er Lockes «substratum»?",
      options: ["Det antatte underlaget som bærer en tings sansbare egenskaper", "Den indre konstitusjonen vitenskapen etter hvert vil avdekke", "Samlingen av egenskaper vi knytter til et artsbegrep", "Det materielle stoffet en ting fysisk er bygget opp av"],
      explanation: "Substratet er det bærende «noe» vi forutsetter fordi vi ikke kan tenke egenskaper som svever fritt. Den indre konstitusjonen er derimot den reelle essensen, og egenskapssamlingen vi navngir, er den nominelle essensen.",
    },
    {
      question: "Hva er Lockes konklusjon om substansen?",
      options: ["At vår idé om den er tom, siden erfaringen bare gir oss egenskaper", "At substanser ikke finnes, og at bare egenskaper er virkelige", "At substansen er kjennbar gjennom nøye vitenskapelig undersøkelse", "At substansen er identisk med tingens observerbare egenskaper"],
      explanation: "Konklusjonen er epistemisk, ikke ontologisk: Locke benekter ikke at substanser finnes, men at vi har noen innholdsrik idé om dem. Lesningen der han benekter substanser, er den vanligste feilframstillingen av ham i besvarelser.",
    },
    {
      question: "Hva er en nominell essens hos Locke?",
      options: ["Samlingen observerbare egenskaper vi knytter til et artsbegrep", "Den indre konstitusjonen som frambringer egenskapene", "Navnet vi gir tingen, uavhengig av hvilke egenskaper den har", "Den delen av essensen som er felles for alle levende vesener"],
      explanation: "Den nominelle essensen er egenskapssamlingen vi selv har trukket grensen rundt — gult, tungt, smibart for gull. Den indre konstitusjonen er den reelle essensen, som Locke mener finnes, men som vi ikke kjenner.",
    },
    {
      question: "Hva er en reell essens hos Locke?",
      options: ["Den indre konstitusjonen som frambringer tingens egenskaper", "Den samlingen egenskaper vi bruker når vi klassifiserer tingen", "Den definisjonen som fanger tingens vesen ved slekt og artsforskjell", "Det underlaget som bærer alle egenskapene uten selv å ha noen av dem"],
      explanation: "Den reelle essensen er tingens indre konstitusjon, som forklarer hvorfor gullet oppfører seg som gull — men den ligger utenfor vår rekkevidde. Definisjon ved slekt og artsforskjell er Aristoteles' oppskrift, og det bærende underlaget er substratet.",
    },
    {
      question: "På hvilken akse er forskjellen mellom Aristoteles og Locke om substans størst?",
      options: ["Om substansen kan kjennes, og dermed om essensene er tilgjengelige", "Om substansen finnes i det hele tatt, eller bare er et ord", "Om substansen består av materie, eller er noe helt uten stofflighet", "Om substansen kan forandre seg over tid, eller alltid forblir helt uendret"],
      explanation: "Aristoteles mener essensen er tilgjengelig og gjør vitenskap mulig; Locke mener idéen om substratet er tom og de reelle essensene utilgjengelige. Begge mener at substanser finnes, og begge kan forklare forandring — så de to andre aksene skiller dem ikke.",
    },
    {
      question: "Hvorfor hviler artsinndelingen på nominelle essenser hos Locke?",
      options: ["Fordi vi ikke kjenner de reelle essensene og må gruppere etter det vi ser", "Fordi han mener at artene ikke finnes utenfor språket vårt", "Fordi han mener at alle egenskaper ved en ting er like grunnleggende for oss", "Fordi han mener at naturen selv ikke har noen indre struktur vi kan inndele etter"],
      explanation: "Locke antar at det finnes indre konstitusjoner, men at vi ikke har tilgang til dem, så inndelingen må hvile på observerbare egenskapssamlinger. Han benekter altså ikke at naturen har struktur — bare at vi kjenner den.",
    },
    {
      question: "En kandidat skriver at «menneske» er primær substans og «Sokrates» sekundær. Hva er feilen?",
      options: ["Avhengighetsforholdet snus: arten sies om individet, ikke omvendt", "Ingenting — Aristoteles bruker begge rekkefølgene om hverandre", "Bare terminologien er feil; poenget om avhengighet er likevel riktig", "Feilen ligger i at «menneske» er en kvalitet og ikke en substans i det hele tatt"],
      explanation: "Individet er primært fordi arten sies om det, mens det selv ikke sies om noe — snus dette, kollapser hele argumentet for at enkelttingene er grunnleggende. «Menneske» er dessuten en sekundær substans, ikke en kvalitet.",
    },
    {
      question: "Hvilken spenning finnes mellom kategorilæren og materie–form-analysen?",
      options: ["Kategorilæren gjør enkelttinget primært, mens formen får forrang i analysen", "Kategorilæren regner form som en kvalitet, mens analysen gjør den til materie", "Kategorilæren har ti kategorier, mens analysen bare opererer med fire", "Kategorilæren gjelder levende vesener, mens analysen gjelder de livløse gjenstandene"],
      explanation: "I kategorilæren er enkeltindividet den primære substansen, mens Aristoteles i den videre analysen argumenterer for at formen har best krav på å være substans i mest egentlig forstand. Hvordan de henger sammen, er et levende tolkningsspørsmål som en god besvarelse nevner i stedet for å skjule.",
    },
    {
      question: "Hva er det springende premisset i slutningen «materien består gjennom endring, altså er materien den egentlige substansen»?",
      options: ["At det som består gjennom endring, er det mest egentlig virkelige", "At materien kan eksistere for seg selv, uten noen form i det hele tatt", "At all endring i naturen er substansiell endring og ikke aksidentell", "At formen er noe vi tillegger tingene, ikke noe de har"],
      explanation: "Slutningen står og faller med antakelsen om at varighet gir grunnleggendehet, og det er nettopp den Aristoteles avviser: ren materie uten form er ikke noen bestemt ting å telle eller definere. De øvrige alternativene er påstander som ikke kreves for at slutningen skal gå gjennom.",
    },
    {
      question: "Hvorfor holder Aristoteles' formkriterium bare et stykke på vei i skipet som får byttet alle plankene?",
      options: ["Det sier ikke hvor mye utskifting formen tåler, og er stumt ved to kandidater", "Det forutsetter at materien er viktigere enn formen når identitet skal avgjøres", "Det gjelder bare levende vesener, og ikke sammensatte gjenstander som skip og hus", "Det gjør enhver reparasjon til en substansiell endring"],
      explanation: "Kriteriet gir et prinsipielt svar — identitet følger formen — men er underbestemt både om graden av utskifting og om tilfellet der de gamle plankene settes sammen igjen. Å si dette ærlig er sterkere enn å tillegge Aristoteles et svar han ikke ga.",
    },
    {
      question: "Hvilken sammenheng kan løfte en besvarelse om sekundære substanser mot toppkarakter?",
      options: ["At striden om sekundære substanser fortsetter i spørsmålet om allmennbegreper", "At Aristoteles levde lenge før Locke og derfor ikke kunne kjenne den britiske empirismen", "At kategoriene kan telles opp i en bestemt rekkefølge", "At substansbegrepet også brukes i dagligtalen om stoffer, væsker og materialer"],
      explanation: "Å vise at spørsmålet om arter er den samme striden som spørsmålet om allmennbegreper finnes som virkelige entiteter, er å påvise en sammenheng — sensorveiledningens punkt 3. Kronologi og dagligtale gir ingen argumentativ kobling.",
    },
    {
      question: "Hvilken av disse formuleringene gjengir Locke korrekt?",
      options: ["Han hevder at idéen vår om substansen er et «noe-jeg-vet-ikke-hva»", "Han hevder at substanser er innbilninger uten noe motstykke i verden", "Han hevder at reelle essenser er kjent gjennom nøye observasjon", "Han hevder at artene er naturens egne ledd, uavhengig av oss"],
      explanation: "Formuleringen om et «noe-jeg-vet-ikke-hva» gjelder ideens tomhet, ikke substansens ikke-eksistens. At reelle essenser skulle være kjente, og at artene er naturens egne ledd, er begge posisjoner Locke avviser — den siste er Aristoteles'.",
    },
  ],
  'fil1001-1-2': [
    {
      question: "Hva kjennetegner et universale?",
      options: ["Det kan være helt til stede i mange ting samtidig", "Det finnes bare ett sted om gangen, som andre gjenstander", "Det er navnet vi bruker om en gruppe av like gjenstander", "Det er den fysiske delen som er felles for flere gjenstander"],
      explanation: "Gjentakbarheten er hele poenget: det samme universalet kan opptre i mange enkeltting uten å deles opp. At det bare skulle være et navn, er nominalistens påstand, ikke definisjonen av begrepet, og et universale er ikke en fysisk del av tingene.",
    },
    {
      question: "Hva kjennetegner et partikular?",
      options: ["Det finnes ett sted om gangen og kan ikke gjentas", "Det kan instansieres av mange ulike ting på én og samme tid", "Det er en egenskap som deles av flere gjenstander", "Det eksisterer utenfor tid og rom, som tall og mengder"],
      explanation: "Partikularier — denne skruen, Sokrates — er ikke gjentakbare, i motsetning til universalier. Å eksistere utenfor tid og rom er kjennetegnet på abstrakte entiteter, som den platonske realisten regner universaliene blant.",
    },
    {
      question: "Hvilket premiss i argumentet om det ene over de mange angriper nominalisten?",
      options: ["At fellestrekk må forklares ved at det er én og samme ting tingene har", "At flere ting faktisk kan ligne hverandre i farge eller form", "At vi grupperer ting i klasser når vi snakker om dem", "At universalier ville eksistert selv i et univers uten noen røde ting"],
      explanation: "Striden står om premisset som krever én felles entitet; nominalisten godtar gjerne at ting ligner hverandre og at vi grupperer dem. Påstanden om uinstansierte universalier er en intern uenighet blant realister, ikke nominalistens angrepspunkt.",
    },
    {
      question: "Hva skiller platonsk fra aristotelisk realisme om universalier?",
      options: ["Om universalier finnes uavhengig av at noe instansierer dem", "Om universalier i det hele tatt finnes som virkelige entiteter", "Om universalier er navn vi bruker eller egenskaper vi sanser", "Om universalier kan inngå i årsaksforhold med konkrete ting"],
      explanation: "Den platonske varianten sier at rødhet ville finnes selv uten røde ting, mens den aristoteliske plasserer universaliene i tingene som instansierer dem. Begge er realister, så spørsmålet om universaliene i det hele tatt finnes, skiller dem ikke.",
    },
    {
      question: "Hva er kostnaden ved aristotelisk realisme om universalier?",
      options: ["Uinstansierte egenskaper blir uforklarte", "Den krever et eget eksistensområde utenfor tid og rom", "Den kan ikke forklare at grupperingene våre er ikke-vilkårlige", "Den må ta likhet mellom enkeltting som uforklart grunnbegrep"],
      explanation: "Finnes rødhet bare der den er instansiert, blir det uklart hva som gjør det sant at noe kunne vært rødt i et univers uten røde ting. Det egne eksistensområdet er den platonske variantens kostnad, og likhet som grunnbegrep er nominalistens.",
    },
    {
      question: "Hva er instansiering?",
      options: ["Forholdet mellom et universale og tingen som har det", "Forholdet mellom to enkeltting som ligner hverandre", "Forholdet mellom en klasse og medlemmene i den", "Forholdet mellom en trope og tropen den ligner"],
      explanation: "Instansiering er realistens grunnrelasjon: eplet instansierer rødhet. En kjent innvending er at relasjonen selv er uforklart, mens likhet mellom enkeltting og mellom tropes er nominalistens og tropeteoretikerens tilsvarende grunnbegreper.",
    },
    {
      question: "Hva hevder nominalismen?",
      options: ["At bare partikularier finnes, og at likhet forklares uten universalier", "At egenskaper finnes, men som partikulære og ikke gjentakbare", "At grupperingene våre er vilkårlige og kunne vært helt annerledes", "At universalier finnes, men bare der de er instansiert"],
      explanation: "Nominalisten stryker egenskaper som egne entiteter fra inventarlista. At egenskaper finnes, men er partikulære, er tropeteoriens posisjon, og moderne nominalister mener sjelden at grupperingene er vilkårlige — de mener at de er forankret uten en ekstra entitet.",
    },
    {
      question: "Hva er hovedinnvendingen mot predikatnominalismen?",
      options: ["Den snur forklaringsretningen mellom språk og verden", "Den krever at klasser eksisterer i tillegg til tingene", "Den tar likhet mellom enkeltting som et uforklart grunnbegrep", "Den gjør egenskapene til partikulære enkeltforekomster"],
      explanation: "Vi kaller eplet rødt fordi det er rødt, ikke omvendt — og farger fantes før noen hadde ord for dem. Klasser hører til klassenominalismen, likhet som grunnbegrep til likhetsnominalismen, og partikulære egenskaper til tropeteorien.",
    },
    {
      question: "Hva er innvendingen om sammenfallende klasser mot klassenominalismen?",
      options: ["To ulike egenskaper med nøyaktig samme medlemmer blir én egenskap", "Klasser kan ikke inneholde uendelig mange medlemmer", "Klasser finnes bare i språket og ikke i verden selv", "Klasser kan ikke forklare grader av likhet mellom ting"],
      explanation: "Har alle og bare vesener med hjerte også nyrer, blir de to egenskapene identiske på denne teorien, noe de åpenbart ikke er. Innvendingen handler altså om ekstensjonen, ikke om klassers størrelse eller om hvor de befinner seg.",
    },
    {
      question: "Hvorfor regnes likhetsnominalismen som nominalismens sterkeste variant?",
      options: ["Den forankrer grupperingen i tingene selv uten å innføre universalier", "Den forklarer likhet uten å ta noe begrep som uforklart", "Den kan gjøre rede for uinstansierte egenskaper", "Den gjør egenskaper til virkelige, men partikulære bestanddeler"],
      explanation: "Likhetsvarianten unngår både språkavhengigheten og klasseproblemet ved å forankre grupperingen i hvordan tingene faktisk er. Den slipper likevel ikke unna et uforklart grunnbegrep, nemlig likheten selv — og partikulære egenskaper er tropeteoriens grep, ikke nominalistens.",
    },
    {
      question: "Hva er en trope?",
      options: ["En partikulær egenskap — denne rødheten i dette eplet", "En gjentakbar egenskap som finnes i alle røde ting", "En klasse av ting som ligner hverandre tilstrekkelig", "Et navn vi bruker om ting med lignende utseende"],
      explanation: "Tropes er egenskaper som er like partikulære som tingene: to røde epler har to rødheter som ligner hverandre. En gjentakbar egenskap er et universale, mens klasser og navn tilhører nominalismens varianter.",
    },
    {
      question: "Hvorfor er det en presisjonsfeil å kalle tropeteorien «bare en form for nominalisme»?",
      options: ["Tropeteorien regner egenskaper som virkelige bestanddeler i verden", "Tropeteorien hevder at egenskaper er fullt gjentakbare på tvers av ulike ting", "Tropeteorien benekter at enkeltting finnes uavhengig av egenskapene", "Tropeteorien forklarer likhet uten å bruke noe grunnbegrep"],
      explanation: "Tropeteoretikeren er enig med realisten i at egenskaper finnes, og med nominalisten i at ingenting er gjentakbart — det er en tredje posisjon. Den bruker dessuten likhet som grunnbegrep, i tillegg til samlokalisering.",
    },
    {
      question: "Hva sier knippeteorien om ting?",
      options: ["At en ting er et knippe egenskaper som opptrer sammen", "At en ting er et substratum som bærer egenskapene sine", "At en ting er en klasse av alle sine mulige tilstander", "At en ting er formen som organiserer materien den består av"],
      explanation: "Knippeteorien avviser at det trengs en bærer under egenskapene — tingen er ikke noe mer enn egenskapene i samlet forekomst. Substratum-svaret er Lockes, og form som organiserende prinsipp er Aristoteles' hylemorfisme.",
    },
    {
      question: "Hvordan bør sparsommelighetsprinsippet brukes i universaliestriden?",
      options: ["Som avgjørende bare når to teorier forklarer like mye", "Som et selvstendig argument for den teorien med færrest entiteter", "Som et krav om at alle grunnbegreper må kunne forklares videre", "Som et argument for at bare det observerbare kan antas å finnes"],
      explanation: "Prinsippet skiller mellom teorier som ellers står likt; er forklaringskraften ulik, må den veies mot ontologiske kostnader. Å skrive «nominalismen er enklere, altså riktig» hopper over nettopp den avveiningen oppgaven ber om.",
    },
    {
      question: "Hva er numerisk identitet?",
      options: ["Å være én og samme ting", "Å være helt lik i alle egenskaper", "Å tilhøre den samme arten eller slekten", "Å ha samme antall deler som noe annet"],
      explanation: "Numerisk identitet er relasjonen noe har til seg selv: morgenstjernen og aftenstjernen er én planet. Å være helt lik er kvalitativ identitet, og den krever nettopp to ting — å blande de to ødelegger enhver drøfting av Blacks eksperiment.",
    },
    {
      question: "Hva sier det identiskes uskjelnbarhet — den ukontroversielle retningen av Leibniz' lov?",
      options: ["Er x og y én og samme ting, har de nøyaktig de samme egenskapene", "Har x og y nøyaktig de samme egenskapene, er de én og samme ting", "To ting kan aldri ha nøyaktig de samme egenskapene", "Ting med samme egenskaper hører til samme art"],
      explanation: "Denne retningen brukes flittig i argumenter: finner du én egenskap den ene har og den andre mangler, kan de ikke være samme ting. Den motsatte retningen — at kvalitativ likhet gir numerisk identitet — er den omstridte, og det er den Black angriper.",
    },
    {
      question: "Hvilket prinsipp angriper Max Blacks tankeeksperiment?",
      options: ["De uskjelnbares identitet", "Det identiskes uskjelnbarhet", "Prinsippet om tilstrekkelig grunn", "Prinsippet om at egenskaper krever en bærer"],
      explanation: "Black retter seg mot påstanden om at ting med de samme kvalitative egenskapene er én og samme ting. Å skrive at han «motbeviser Leibniz' lov» uten å skille retningene, er upresist, siden den andre retningen står uberørt.",
    },
    {
      question: "Hvordan er Blacks univers stipulert?",
      options: ["Det inneholder bare to kvalitativt like kuler, symmetrisk plassert", "Det inneholder to kuler som skiller seg litt i atomstruktur", "Det inneholder to kuler og en observatør som ikke kan skille dem", "Det inneholder én kule som fremstår som to for en observatør"],
      explanation: "Stipulasjonene er totale: ingenting annet finnes, likheten er fullstendig, symmetrien perfekt. Å legge til en liten forskjell eller en observatør er å endre eksperimentet i stedet for å svare på det.",
    },
    {
      question: "Hva er det springende premisset i Blacks argument?",
      options: ["At scenarioet virkelig beskriver to kuler og ikke én", "At kulene er laget av metall og ikke av et annet materiale", "At universet er endelig i utstrekning", "At ingen observatør noen gang befinner seg inne i universet"],
      explanation: "Kan motstanderen omtolke situasjonen til ett objekt, uteblir moteksempelet — hele argumentet hviler på tellingen. Materialet, universets størrelse og fraværet av observatør er detaljer som ikke bærer slutningen.",
    },
    {
      question: "Hva er den beste innvendingen mot Blacks tankeeksperiment?",
      options: ["At beskrivelsen med to kuler ikke lar seg begrunne innenfra scenarioet", "At helt like gjenstander aldri forekommer i den virkelige verden vi kjenner", "At et univers som bare inneholder to gjenstander, er fysisk umulig å tenke seg", "At vi ikke kan vite hvilken kule som er hvilken"],
      explanation: "Den sterke innvendingen angriper beskrivelsen, ikke stipulasjonene: alt som kan sies kvalitativt om den ene, gjelder også den andre, så tellingen kan være noe vi legger til utenfra. Innvendingene om at helt like gjenstander aldri forekommer i virkeligheten, og at et univers med bare to gjenstander er fysisk umulig, omgår premissene, mens svaret om at vi ikke kan vite hvilken kule som er hvilken, blander epistemisk uskjelnbarhet med antallet ting.",
    },
    {
      question: "Hva er Blacks svar til den som sier at scenarioet like gjerne beskriver én kule?",
      options: ["Massen er dobbel, og en avstand krever to endepunkter", "Vi kan i prinsippet observere begge kulene samtidig", "Kulene ble laget på to ulike tidspunkter", "De to kulene har hver sin plass i en romlig koordinat"],
      explanation: "Svaret peker på tellbare kjensgjerninger som forutsetter to gjenstander, uten å bryte stipulasjonene. Observatør, ulike opprinnelsestidspunkter og uavhengige koordinater er alle ting scenarioet nettopp ikke inneholder.",
    },
    {
      question: "Hva vil det si å lese premissene i et tankeeksperiment som stipulasjoner?",
      options: ["Å ta dem som fastsatte vilkår, ikke som påstander om faktiske forhold", "Å behandle dem som empiriske hypoteser som kan testes", "Å godta konklusjonen så lenge premissene virker rimelige ved første øyekast", "Å erstatte urealistiske premisser med mer sannsynlige og realistiske varianter"],
      explanation: "Stipulasjonene definerer hva vi skal tenke oss, og et svar som endrer dem, har byttet ut oppgaven. Vil du angripe eksperimentet, må du bestride at situasjonen er mulig, eller at den viser det den skal vise.",
    },
    {
      question: "Hva er individuasjonsproblemet?",
      options: ["Spørsmålet om hva som gjør et enkeltting til det individet det er", "Spørsmålet om hvordan vi kjenner igjen ting vi har sett før", "Spørsmålet om hvilke egenskaper som hører til en tings essens", "Spørsmålet om hvordan universalier kan finnes i mange ting"],
      explanation: "Problemet har en metafysisk og en epistemisk lesning — hva gjør dem til to, og hvordan vet vi hvilken som er hvilken — og Blacks eksperiment er interessant fordi det skiller dem. Essens og gjentakbarhet er andre spørsmål.",
    },
    {
      question: "Hva er Lowes innvending mot rom-tid-individuasjon?",
      options: ["Posisjoner må selv identifiseres ved tingene som opptar dem", "To ting kan aldri befinne seg på samme sted samtidig", "Rom og tid er relasjoner mellom ting og ikke selvstendige størrelser", "Posisjon er en aksidentell egenskap og kan derfor endres over tid"],
      explanation: "Sirkularitetsfaren er kjernen: i et ellers tomt univers finnes ingen uavhengige koordinater, så individuasjon ved posisjon forutsetter de individene den skulle forklare. Spørsmålet om rommets natur hører til Newton-og-Leibniz-debatten, som er et annet tema.",
    },
    {
      question: "Hva rammer Blacks moteksempel ikke?",
      options: ["Det identiskes uskjelnbarhet, som brukes ellers i emnet", "De uskjelnbares identitet, altså prinsippet i kvalitativ form", "Forslaget om at posisjon alene individuerer partikularier", "Tanken om at et partikular er mer enn summen av kvalitetene sine"],
      explanation: "Den ukontroversielle retningen av Leibniz' lov står uberørt, og det er nettopp den som bærer argumentene i bevissthetsfilosofien senere i boka. De tre andre er ting eksperimentet enten angriper eller taler for.",
    },
    {
      question: "Hvilket uforklart grunnbegrep sitter realisten igjen med?",
      options: ["Instansiering — forholdet mellom universale og ting", "Likhet mellom enkeltting, tatt som et primitivt grunnbegrep", "Samlokalisering av partikulære egenskaper", "Klassemedlemskap for grupper av innbyrdes like gjenstander"],
      explanation: "Realisten forklarer likhet ved instansiering, men instansieringen selv forblir en grunnrelasjon. Likhet er nominalistens primitiv, samlokalisering tropeteoretikerens, og klassemedlemskap hører til klassenominalismen.",
    },
  ],
  'fil1001-1-3': [
    {
      question: "Hva er naturlig teologi?",
      options: ["Å begrunne påstander om Gud med fornuft og erfaring alene", "Å begrunne påstander om Gud med hellige tekster og åpenbaring", "Å studere religioners historiske utvikling i ulike kulturer", "Å undersøke hvilken rolle naturen spiller i religiøse ritualer"],
      explanation: "Naturlig teologi bruker ikke åpenbaring, men argumenter alle i prinsippet kan vurdere — gudsbevisene hører hjemme her. Å begrunne med hellige tekster er nettopp det naturlig teologi avstår fra, og religionshistorie er et helt annet fag.",
    },
    {
      question: "Hva tar Aquinas' første vei utgangspunkt i?",
      options: ["At noe er i bevegelse eller endring", "At noe eksisterer kontingent og kunne manglet", "At ting har egenskaper i større og mindre grad", "At ting uten forstand oppfører seg målrettet"],
      explanation: "Den første veien går fra bevegelse til en første beveger. Kontingens er den tredje veien, grader den fjerde og målrettethet den femte — de fem veiene skiller seg nettopp ved hvilket trekk ved verden de starter fra.",
    },
    {
      question: "Hvilke av de fem veiene kalles kosmologiske argumenter?",
      options: ["De tre første — bevegelse, virkende årsak og kontingens", "De to første — bevegelse og virkende årsak", "Den fjerde og femte — grader og styring", "Alle fem, siden de alle handler om verden som helhet"],
      explanation: "De tre første slutter fra verdens avhengighet til noe uavhengig og kalles derfor kosmologiske. Den femte er teleologisk, og den fjerde faller utenfor begge merkelappene siden den hviler på at grader forutsetter et maksimum.",
    },
    {
      question: "Hva slags rekke avviser Aquinas som uendelig i argumentet fra virkende årsak?",
      options: ["En rekke av samtidige avhengigheter, der hvert ledd bare formidler", "En rekke av hendelser bakover i tid, som fedre og bestefedre", "En rekke av logiske slutninger fra premiss til konklusjon", "En rekke av formål der hvert mål tjener et høyere mål"],
      explanation: "Argumentet gjelder rekker der hvert ledd virker bare i kraft av det foregående, som hånden, staven og steinen. Aquinas mente at fornuften alene ikke kan avgjøre om verden har en begynnelse i tid, så innvendinger om uendelige tidsrekker treffer ikke argumentet slik det er ment.",
    },
    {
      question: "Hva er det springende premisset i argumentet fra virkende årsak?",
      options: ["At en rekke av avhengige årsaker ikke kan være uendelig", "At ingenting kan være årsak til seg selv", "At det finnes årsaker og virkninger i verden", "At den første årsaken selv må være allmektig og god"],
      explanation: "De to første premissene er lite kontroversielle, mens hele slutningen hviler på at avhengighetsrekken må ha et første ledd. Påstanden om at første årsak er allmektig og god, er ikke et premiss i argumentet — det er en ekstra påstand argumentet ikke leverer.",
    },
    {
      question: "Hva betyr det at noe eksisterer kontingent?",
      options: ["At det kunne ha latt være å eksistere", "At det ikke kunne ha latt være å eksistere", "At det avhenger av en observatør for å eksistere", "At det eksisterer bare i en begrenset tidsperiode"],
      explanation: "Kontingent eksistens står i motsetning til nødvendig eksistens, som er den tredje veiens konklusjon. Å vare en kort stund er noe annet enn å kunne mangle, og observatøravhengighet hører til idealismedebatten.",
    },
    {
      question: "Hvilken feil begår den som skriver at Aquinas beviser at universet må ha en begynnelse i tid?",
      options: ["Han tillegges en konklusjon han ikke trakk", "Han forveksles med Leibniz og prinsippet om tilstrekkelig grunn", "Han gjøres til tilhenger av fine-tuning-argumentet", "Hans femte vei forveksles med hans fjerde vei"],
      explanation: "Aquinas mente at fornuften alene ikke kan avgjøre om verden har en begynnelse, og argumentene hans gjelder samtidige avhengighetsrekker. Å tillegge en tenker en konklusjon han ikke trakk, er blant de tyngste dokumenterte feilene i faget.",
    },
    {
      question: "Hva er grunnformen i designargumentet?",
      options: ["Naturens orden forklares best av en intelligens", "Verdens eksistens krever en første, uforårsaket årsak", "Grader av godhet forutsetter noe fullkomment godt", "Kontingente ting krever noe som eksisterer nødvendig"],
      explanation: "Designargumentet slutter fra orden og formålsmessighet til en intelligent designer, som en slutning til beste forklaring. De tre andre alternativene er de kosmologiske veiene og den fjerde veien — beslektede argumenter med helt andre utgangspunkt.",
    },
    {
      question: "Hva slags slutning er den klassiske urverkversjonen av designargumentet?",
      options: ["En analogislutning fra likhet i virkning til likhet i årsak", "En deduktiv slutning der konklusjonen følger med nødvendighet", "En induktiv generalisering fra mange observerte tilfeller av univers", "En slutning fra begrepet om Gud til Guds eksistens"],
      explanation: "Analogien er bare så sterk som likheten den hviler på, og det er nettopp der Hume angriper. Vi har ikke observert mange univers, argumentet er ikke deduktivt gyldig, og slutning fra begrep til eksistens er en helt annen argumenttype.",
    },
    {
      question: "Hvilket av Humes punkter mot designargumentet lar argumentet stå, men begrenser rekkevidden?",
      options: ["At konklusjonen bare gir en designer stor nok til oppgaven", "At universet like gjerne ligner en organisme som en maskin", "At vi ikke har erfart at univers blir laget", "At naturens orden kan forklares uten noen designer"],
      explanation: "Dette punktet aksepterer analogien for argumentets skyld og viser at den ikke gir teismens allmektige, allvitende og gode Gud — den utelukker heller ikke flere eller udyktige designere. Punktene om at universet like gjerne ligner en organisme, og at vi ikke har erfart at univers blir laget, angriper selve analogien, ikke rekkevidden.",
    },
    {
      question: "Hva er fine-tuning-argumentet?",
      options: ["At livstillatende verdier på naturkonstantene best forklares av design", "At naturens organer er tilpasset sine formål som et urverk", "At universet må ha en første årsak som ikke selv er forårsaket av noe annet", "At moralske verdier bare kan forankres i en guddommelig lovgivers vilje"],
      explanation: "Fine-tuning er en slutning til beste forklaring om konstantenes verdier, ikke en analogi mellom naturen og et apparat. Derfor rammer Humes analogikritikk den ikke direkte, men poenget om at konklusjonen er større enn premissene bærer, gjelder fortsatt.",
    },
    {
      question: "Hva sier det antropiske prinsipp?",
      options: ["Vi kan bare observere et univers som tillater observatører", "Det finnes svært mange universer med ulike konstantverdier", "Universet er innrettet med mennesket som sitt formål", "Naturkonstantene kunne ikke hatt andre verdier enn de har"],
      explanation: "Prinsippet er et poeng om utvalgsskjevhet, ikke en forklaring på hvorfor livstillatende verdier finnes. Multiversantakelsen er en egen påstand om hva som eksisterer, og teleologisk innretning er designargumentets konklusjon, ikke prinsippet selv.",
    },
    {
      question: "Hvorfor trengs multivers-svaret i tillegg til det antropiske prinsipp?",
      options: ["Prinsippet forklarer ikke hvorfor et livstillatende univers finnes", "Prinsippet er avhengig av at naturkonstantene er nøyaktig kjent", "Prinsippet forutsetter at det finnes en designer bak seleksjonen", "Prinsippet gjelder bare for biologiske og ikke for fysiske forhold"],
      explanation: "Utvalgsskjevheten forklarer hvorfor vi ser slike verdier, mens multiverset forklarer hvorfor slike verdier i det hele tatt forekommer. Sammen dekker de begge spørsmålene, og det er derfor de vanligvis brukes i par.",
    },
    {
      question: "Hva er den viktigste kostnaden ved multivers-svaret?",
      options: ["Det postulerer et enormt antall uobserverbare universer", "Det bryter med prinsippet om tilstrekkelig grunn", "Det forutsetter at naturkonstantene er nødvendige og ikke kunne vært annerledes", "Det gjør det umulig å forklare at vi finnes i det hele tatt"],
      explanation: "Prisen er ontologisk: svært mange entiteter vi ikke kan observere. Om det er dyrere enn å postulere én aktør, er nettopp den avveiningen en drøfting bør ta stilling til, og her er litteraturen delt.",
    },
    {
      question: "Hva er innvendingen «hvem designet designeren?» rettet mot?",
      options: ["Prinsippet om at kompleks orden krever en forklaring utenfra", "Premisset om at naturkonstantene like gjerne kunne hatt andre verdier", "Analogien mellom naturens organer og menneskeskapte apparater", "Påstanden om at Gud er allmektig, allvitende og fullkomment god"],
      explanation: "Innvendingen tar designargumentets eget prinsipp og vender det mot konklusjonen. Designerens svar må gjøre et unntak for Gud, og det unntaket koster noe, siden argumentet startet med å behandle orden som noe som krever forklaring.",
    },
    {
      question: "Hva kjennetegner den logiske formen av det ondes problem?",
      options: ["Den påstår at Guds egenskaper og ondskapens eksistens er uforenlige", "Den påstår at lidelsens fordeling er evidens mot Guds eksistens", "Den påstår at ondskap ikke kan defineres uten en guddommelig norm", "Den påstår at bare naturlig onde er et problem for teismen"],
      explanation: "Den logiske formen hevder en direkte motsigelse, og derfor holder det for teisten å vise at premissene kan være sanne samtidig. Evidenspåstanden hører til den evidensielle formen, som er vanskeligere å avvise nettopp av den grunn.",
    },
    {
      question: "Hvorfor er den evidensielle formen av det ondes problem vanskeligere å avvise?",
      options: ["Den krever at forklaringen er rimelig, ikke bare logisk mulig", "Den bygger på premisser som ingen teist med rimelighet kan bestride", "Den handler bare om det moralsk onde, som ingen kan bestride finnes", "Den påstår en motsigelse som må oppløses logisk"],
      explanation: "Et forsvar som viser at Gud og ondskap er logisk forenlige, er nok mot den logiske formen, men ikke mot den evidensielle — der må teisten gjøre forklaringen troverdig. Motsigelsespåstanden hører til den logiske formen.",
    },
    {
      question: "Hvilken type onde dekker fri vilje-forsvaret?",
      options: ["Moralsk onde — lidelse som følger av frie handlinger", "Naturlig onde — lidelse som ikke skyldes menneskelige valg", "Både moralsk og naturlig onde, uten behov for tilleggsargument", "Verken moralsk eller naturlig onde, bare dyrs lidelse"],
      explanation: "Forsvaret begrunner hvorfor Gud lar mennesker velge galt, men ingen fri handling forklarer en flodbølge. Å utvide det til naturlig onde krever et tilleggsargument om at stabile naturlover er nødvendige — og det er da et annet argument.",
    },
    {
      question: "Hva er den sjelsbyggende teodicéens fortrinn framfor fri vilje-forsvaret?",
      options: ["Den kan også dekke naturlig onde", "Den forplikter teisten til færre påstander", "Den forutsetter ikke at Gud er fullkomment god", "Den er logisk gyldig og trenger ingen tilleggspremisser"],
      explanation: "Sykdom og katastrofer kan i prinsippet gi anledning til moralsk utvikling, og dermed rekker teodicéen lenger enn fri vilje-forsvaret. Innvendingene er likevel tunge: mye lidelse bygger ingen sjel, og noen dør før de kan utvikle noe.",
    },
    {
      question: "Hva er den hardeste innvendingen mot den sjelsbyggende teodicéen?",
      options: ["Mye lidelse rammer vesener som ikke kan utvikle noe av den", "Den forutsetter at mennesker har fri vilje", "Den kan ikke forklare hvorfor mennesker gjør onde handlinger", "Den strider mot prinsippet om tilstrekkelig grunn slik Leibniz formulerte det"],
      explanation: "Spedbarn som dør i søvne og dyr som lider uten tilskuere, bygger ingen sjel — og forsvares lidelsen ved at andre utvikler dyder, brukes de rammede som midler. Fri vilje er ikke et krav i denne teodicéen, som nettopp er laget for å dekke mer enn de frie handlingene.",
    },
    {
      question: "Hva sier prinsippet om tilstrekkelig grunn?",
      options: ["Ingenting er tilfelle uten en grunn til at det er slik og ikke annerledes", "Enhver hendelse har en forutgående årsak et sted tilbake i tiden", "Enhver påstand må kunne bevises før den kan tros", "Ingen forklaringsrekke kan fortsette i det uendelige uten et første ledd"],
      explanation: "Prinsippet er Leibniz' og krever en grunn for at noe er slik framfor annerledes, ikke bare en forutgående årsak. Det er derfor det står i direkte motsetning til å godta grunnfakta, som per definisjon er uten forklaring.",
    },
    {
      question: "Hva hevder Leibniz med «den beste av alle mulige verdener»?",
      options: ["At helheten er den beste tilgjengelige kombinasjonen, tross lidelse", "At alt som skjer i verden er godt, når man bare ser det på den riktige måten", "At Gud kunne valgt helt fritt, men tilfeldigvis valgte en god verden", "At lidelse ikke egentlig finnes, men bare oppleves slik"],
      explanation: "Påstanden gjelder den samlede kombinasjonen, ikke hver enkelt hendelse isolert, og den følger av Guds egenskaper pluss prinsippet om tilstrekkelig grunn. Å framstille den som naiv optimisme eller som benektelse av lidelse er en stråmann.",
    },
    {
      question: "Hva går Adams' innvending mot Leibniz ut på?",
      options: ["Godhet krever ikke maksimering, og en beste verden finnes kanskje ikke", "Gud kan ikke være både allmektig og fullkomment god", "Verden er åpenbart ikke den beste, gitt hvor mye lidelse den rommer", "Prinsippet om tilstrekkelig grunn gjelder ikke for Guds egne valg"],
      explanation: "Innvendingen benekter ikke Guds godhet, men koblingen mellom godhet og å velge det maksimalt beste — og peker dessuten på at verdensrekken kanskje er uten øvre grense. Svaret om at verden åpenbart ikke er den beste gitt lidelsen, er en direkte observasjonspåstand — ikke Adams' argument.",
    },
    {
      question: "Hvorfor er det for raskt å avvise Leibniz' posisjon som «uangripelig og derfor verdiløs»?",
      options: ["Den følger av premisser som kan angripes, og utelukker unødvendig lidelse", "Den er en observasjonspåstand som lar seg teste direkte mot erfaring", "Den er nøytral med hensyn til om Gud finnes", "Den gjelder bare det moralske onde og ikke det naturlige onde"],
      explanation: "Posisjonen er en konklusjon fra Guds egenskaper og prinsippet om tilstrekkelig grunn, så den felles ved å angripe premissene. Den forplikter dessuten til at ingen lidelse er fullstendig unødvendig, og der møter den den evidensielle formen av det ondes problem.",
    },
    {
      question: "Hvordan omformulerer Parfit spørsmålet om hvorfor det finnes noe?",
      options: ["Som et spørsmål om hvorfor én kosmisk mulighet er realisert", "Som et spørsmål om hva som var universets første årsak i tid", "Som et spørsmål om hvorvidt Gud kunne latt være å skape noe som helst", "Som et spørsmål om hvorvidt ingenting er logisk mulig"],
      explanation: "Omformuleringen flytter problemet fra årsak i tid til utvalg blant muligheter: ingenting i det hele tatt, alle verdener, akkurat én. Det er denne rammen selektor-begrepet gir mening innenfor.",
    },
    {
      question: "Hva er en selektor hos Parfit?",
      options: ["Et trekk som gjør at en bestemt kosmisk mulighet er realisert", "En aktør som velger hvilken verden som skal bli virkelig", "Et naturvitenskapelig prinsipp for hvordan nye universer oppstår av intet", "En egenskap ved oss som gjør at vi bare kan observere ett univers"],
      explanation: "En selektor er ikke en aktør — det er ikke noen som velger. Kandidatene inkluderer at virkeligheten er den beste, den enkleste eller den fyldigste, eller at det ikke finnes noen selektor i det hele tatt.",
    },
    {
      question: "Hva sier den aksiarkiske hypotesen?",
      options: ["At godhet er selektoren — virkeligheten er slik fordi det er best", "At en god Gud valgte den beste av alle mulige verdener", "At moralske verdier er de eneste virkelig eksisterende ting", "At virkeligheten er den enkleste av alle kosmiske muligheter"],
      explanation: "Hypotesen postulerer ingen skaper: godhet virker som et upersonlig prinsipp, ikke gjennom en aktørs valg. Nettopp derfor er det en feil å behandle den som Parfits versjon av et gudsbevis, og enkelhet er en annen kandidat til selektor.",
    },
    {
      question: "Hva er den mest presise måten å omtale Parfits forhold til den aksiarkiske hypotesen?",
      options: ["Han framsetter og undersøker den som én kandidat blant flere", "Han forsvarer den som den eneste holdbare forklaringen vi har", "Han avviser den til fordel for en teistisk forklaring av universet", "Han bruker den som et argument for at Gud finnes"],
      explanation: "Hypotesen presenteres innenfor en systematisk undersøkelse av mulige selektorer, ved siden av enkelhet, fylde og fravær av selektor. Å skrive at han mener godhet skapte universet, er en tilskrivning man ikke bør gjøre.",
    },
    {
      question: "Hva er et grunnfaktum, og hvilken posisjon står det i motsetning til?",
      options: ["Et faktum uten forklaring — i motsetning til prinsippet om tilstrekkelig grunn", "Et faktum vi ennå ikke har forklart — i motsetning til vitenskapelig framgang", "Et faktum som er logisk nødvendig — i motsetning til kontingente fakta", "Et faktum bare Gud kjenner — i motsetning til menneskelig kunnskap"],
      explanation: "Et grunnfaktum er bare slik, uten videre forklaring, og å godta slike er å forkaste prinsippet om at ingenting er tilfelle uten en grunn. Det er ikke det samme som noe vi ennå ikke har forklart, og heller ikke det samme som logisk nødvendighet.",
    },
    {
      question: "Hvilken sammenheng mellom to argumenter er verdt å påvise i en oppgave om gudsbevisene?",
      options: ["Teistens forsvar mot det ondes problem svekker designargumentet", "Aquinas' fem veier bygger alle på prinsippet om tilstrekkelig grunn", "Fine-tuning-argumentet forutsetter den sjelsbyggende teodicéen for å virke", "Multivers-svaret følger av Parfits aksiarkiske hypotese"],
      explanation: "Sier teisten at vi ikke kan bedømme Guds grunner, kan vi heller ikke lese hensikt ut av naturens orden — de to argumentene kan ikke kjøres på fullt trykk samtidig. Å påvise en slik spenning er nettopp det sensorveiledningens punkt om sammenhenger etterspør.",
    },
  ],
  'fil1001-1-4': [
    {
      question: "Hva benekter Berkeley?",
      options: ["Materiell substans — et underlag som finnes uavhengig av persepsjon", "At trær, steiner og andre hverdagsting i det hele tatt finnes i verden", "At vi i det hele tatt kan ha sikker kunnskap om de tingene som omgir oss", "At naturen følger faste og forutsigbare mønstre"],
      explanation: "Posisjonen kalles immaterialisme fordi det er materien som selvstendig bærer som avvises, ikke de persiperte tingene. Berkeley mener tvert imot at vi har sikker kunnskap om tingene, nettopp fordi de er idéene våre og ikke noe skjult bakenfor.",
    },
    {
      question: "Hva sier tesen «esse est percipi»?",
      options: ["For sansbare ting er det å eksistere det samme som å bli persipert", "Alt som eksisterer, må kunne erfares av minst ett menneskelig sinn", "Sanseinntrykk gir sikrere kunnskap enn fornuftsslutninger", "Bare det som kan måles objektivt, kan sies å eksistere"],
      explanation: "Tesen identifiserer eksistens med å bli persipert for sansbare ting, mens sinn eksisterer ved å persipere. Den handler ikke om menneskelig erfaring spesielt — Guds vedvarende persepsjon er nettopp det som gjør at ting ikke forsvinner når vi snur ryggen til.",
    },
    {
      question: "Hva er master-argumentet?",
      options: ["At du ikke kan forestille deg en ting uten dermed å tenke på den", "At sekundære kvaliteter er sinnsavhengige på samme måte som primære", "At Gud må persipere tingene for at de skal bestå når ingen andre ser dem", "At vi ikke kan sammenligne idéene våre med tingene selv"],
      explanation: "Master-argumentet skal vise at begrepet om en upersipert ting ikke lar seg tenke. De andre alternativene er Berkeleys øvrige argumenter og Lockes problem — de virker sammen, men er tre ulike ledd.",
    },
    {
      question: "Hva er den klassiske innvendingen mot master-argumentet?",
      options: ["Det forveksler tanken om tingen med tingen selv", "Det forutsetter at Gud finnes uten å bevise det", "Det bygger på en empirisk påstand om sansefysiologi", "Det gjelder bare sekundære og ikke primære kvaliteter"],
      explanation: "At jeg har en tanke om et usett tre, gjør ikke innholdet i tanken til noe sett — ellers kunne man like gjerne bevise at ingenting kan være ubeskrevet. Berkeley kan svare at forestillingen alltid inneholder sansekvaliteter, men da blir argumentet avhengig av et annet argument.",
    },
    {
      question: "Hva er primære kvaliteter hos Locke?",
      options: ["Egenskaper som tilhører tingen selv, som utstrekning og form", "Egenskaper som er tingens evne til å gi oss opplevelser, som farge", "Egenskaper vi bare kan slutte oss til, aldri observere direkte", "Egenskaper som varierer med observatørens posisjon og tilstand"],
      explanation: "Primære kvaliteter er utstrekning, form, bevegelse, antall og fasthet, og idéene våre av dem skal ligne egenskapene i tingen. Farge, lyd og varme er sekundære kvaliteter — evner i tingen til å frambringe opplevelser i oss.",
    },
    {
      question: "Hvordan angriper Berkeley skillet mellom primære og sekundære kvaliteter?",
      options: ["Han viser at Lockes egne argumenter rammer de primære like hardt", "Han hevder at bare de primære kvalitetene er virkelige", "Han hevder at ingen av kvalitetene i det hele tatt lar seg sanse direkte", "Han viser at skillet forutsetter at Gud ikke finnes i det hele tatt"],
      explanation: "Angrepet er internt: relativitet og uatskillelighet gjelder også form, størrelse og bevegelse, så enten er begge slags kvaliteter sinnsavhengige eller ingen. Det er nettopp fordi kritikken bruker motpartens premisser at den veier tungt.",
    },
    {
      question: "Hva er representasjonalismen (den kausale persepsjonsteorien)?",
      options: ["At vi persiperer idéer forårsaket av ting, ikke tingene direkte", "At tingene er identiske med idéene vi har av dem", "At all kunnskap om verden stammer fra fornuften alene og ikke fra sansene", "At sanseinntrykk aldri kan gi kunnskap om noe som er utenfor oss"],
      explanation: "Lockes posisjon plasserer idéene mellom oss og tingene, og det er dette som skaper sløret av persepsjoner. At tingene er idéene, er Berkeleys svar på problemet, ikke Lockes utgangspunkt.",
    },
    {
      question: "Hva er «sløret av persepsjoner»?",
      options: ["At vi bare har tilgang til idéene og ikke kan sjekke dem mot verden", "At sansene våre er upålitelige og ofte gir feilaktige inntrykk", "At Gud skjuler tingenes sanne natur for menneskelig erkjennelse", "At vitenskapen beskriver verden i termer vi selv ikke kan observere"],
      explanation: "Problemet er strukturelt, ikke et spørsmål om upålitelige sanser: enhver sammenligning mellom idé og ting måtte selv foregå gjennom idéer. Berkeley bruker dette som argument for idealismen, siden det ikke er noe bakenfor å nå fram til hos ham.",
    },
    {
      question: "Hvilke to oppgaver har Gud hos Berkeley?",
      options: ["Å opprettholde tingenes eksistens og å gi idéene deres faste orden", "Å garantere at sansene våre ikke bedrar oss systematisk", "Å skape materien og deretter overlate den til naturlovenes gang", "Å gi oss evnen til å danne abstrakte og allmenne idéer om ting"],
      explanation: "Kontinuitet og orden er de to jobbene: tingene persiperes alltid av Gud, og naturens regelmessighet er mønsteret Gud frambringer idéene i. Gudsgarantien mot systematisk bedrag er derimot Descartes' bruk av Gud, i motsatt ærend.",
    },
    {
      question: "Hvorfor er det for raskt å si at «idealismen er enklere, altså bedre»?",
      options: ["Berkeley legger en tung forklaringsbyrde på Gud i stedet for på materien", "Berkeley postulerer flere typer entiteter enn realisten faktisk gjør i sin teori", "Sparsommelighet er et prinsipp som ikke gjelder i metafysikken", "Berkeley benekter at naturen har noen orden som må forklares i det hele tatt"],
      explanation: "Prinsippet avgjør bare når to teorier forklarer like mye, og hos Berkeley må all regelmessighet i naturen skyldes direkte guddommelig virksomhet. Berkeley antar riktignok færre typer ting, men det er nettopp det som ikke er nok til å avgjøre saken.",
    },
    {
      question: "Hvordan begrunner Descartes at den materielle verden finnes?",
      options: ["En fullkommen Gud ville ikke latt oss være systematisk bedratt", "Sanseinntrykkene er så livaktige at de må ha en ytre årsak", "Utstrekning er en egenskap vi kan erkjenne direkte med sansene", "Materien er nødvendig for å forklare at vi har kropper"],
      explanation: "Veien går gjennom gudsbeviset: vår sterke tilbøyelighet til å tro at inntrykkene kommer utenfra, ville vært et bedrag om ingen ytre verden fantes. Det gjør realismen hans avhengig av teologien — faller gudsbeviset, gjenstår tvilen.",
    },
    {
      question: "Hva er den mest instruktive likheten mellom Descartes og Berkeley?",
      options: ["Begge trenger Gud, men til motsatte oppgaver", "Begge benekter at sanseinntrykk gir kunnskap om verden", "Begge mener at materien er en abstrakt idé uten innhold", "Begge starter fra at vi har direkte tilgang til de ytre tingene"],
      explanation: "Descartes bruker Gud til å redde materien, Berkeley til å gjøre den overflødig — å påvise dette er nettopp den typen sammenheng som løfter en sammenligningsoppgave. Begge starter dessuten fra at vi bare har umiddelbar tilgang til egne forestillinger, ikke til tingene.",
    },
    {
      question: "Hva er Kants transcendentale idealisme?",
      options: ["At vi ikke kjenner tingene slik de er uavhengig av våre erkjennelsesformer", "At det ikke finnes noe utenfor sinnet og dets idéer", "At hverdagsgjenstander slutter å eksistere i det øyeblikket ingen lenger sanser dem", "At all kunnskap om verden stammer fra sanseerfaringen alene og ikke fra fornuften"],
      explanation: "Kant benekter ikke at noe finnes uavhengig av oss — han benekter at vi kan kjenne det slik det er i seg selv. Å gjøre ham til Berkeley er den vanligste feilen når dette randtemaet dukker opp.",
    },
    {
      question: "Hva menes med Kants empiriske realisme?",
      options: ["Innenfor erfaringen er gjenstandene fullt virkelige og observatøruavhengige", "Erfaringen gir oss tingene slik de er i seg selv", "Bare det vi faktisk har observert, kan sies å eksistere", "Naturvitenskapen kan i prinsippet nå fram til tingene slik de er i seg selv"],
      explanation: "Kombinasjonen transcendental idealisme og empirisk realisme er poenget: huset står der enten du ser det eller ikke, men det er huset som fenomen, ikke som ting i seg selv. Tilgang til tingen i seg selv er nettopp det Kant benekter.",
    },
    {
      question: "Hva er en «ting i seg selv» hos Kant?",
      options: ["Tingen slik den er uavhengig av våre erkjennelsesformer", "Tingen slik den framtrer for oss i den sanselige erfaringen vår", "Tingens essens, fanget i en definisjon ved slekt og artsforskjell", "Den delen av tingen som sansene ikke rekker, men fornuften når"],
      explanation: "Tingen i seg selv står i motsetning til fenomenet, som er tingen slik den framtrer. At fornuften skulle nå den, er nettopp det Kant avviser — og kritikere har spurt hvordan han da kan vite at den finnes.",
    },
    {
      question: "Hvorfor avviser Berkeley abstrakte allmenne idéer?",
      options: ["Alt vi faktisk forestiller oss, er bestemt — og materiebegrepet er en abstraksjon", "Abstrakte idéer forutsetter at universalier finnes utenfor tid og rom som egne entiteter", "Abstrakte idéer kan ikke uttrykkes i språket vårt", "Abstrakte idéer stammer fra fornuften alene og ikke fra sansene, som Berkeley bygger på"],
      explanation: "Poenget inngår i hovedargumentet: begrepet om materie er nettopp noe utstrakt uten farge, tekstur eller annen sansbar bestemmelse. Innvendingen er at Berkeley forveksler å forestille seg noe med å begripe noe — vi kan tenke om trekanter i sin alminnelighet uten et bilde som passer på alle.",
    },
    {
      question: "Hva er moralsk realisme?",
      options: ["At det finnes objektive moralske fakta, uavhengig av hva noen mener", "At moralske påstander er sanne i forhold til hver enkelt kultur", "At moralske påstander uttrykker følelser og ikke påstander", "At moralske påstander alle er usanne, siden verdier ikke finnes"],
      explanation: "Realismen hevder objektive moralske fakta. Kulturrelativisering er relativisme, og påstanden om at alle moralske påstander er usanne, er Mackies error theory — som nettopp er en avvisning av realismen, ikke en variant av den.",
    },
    {
      question: "Hva hevder Mackies error theory?",
      options: ["Moralske påstander sikter mot objektive verdier som ikke finnes, og er derfor usanne", "Moralske påstander er sanne i forhold til den kulturen de framsettes i", "Moralske påstander er verken sanne eller usanne, siden de ikke er påstander", "Moralske påstander er sanne, men bare når de gjelder ens egne handlinger og valg"],
      explanation: "Teorien har to ledd: et begrepslig, om at moralsk språk gir seg ut for å beskrive objektive egenskaper, og et ontologisk, om at slike egenskaper ikke finnes. Alternativet om at moralske utsagn ikke er påstander, er en helt annen metaetisk posisjon.",
    },
    {
      question: "Hva går Mackies relativitetsargument ut på?",
      options: ["Moralsk variasjon forklares best av ulike levemåter, ikke av ulik innsikt", "Moralske påstander er sanne bare i forhold til den som framsetter dem", "Uenighet om et spørsmål beviser at det ikke finnes noe svar", "Moralske regler endrer seg fordi samfunn blir mer opplyste over tid"],
      explanation: "Argumentet er en slutning til beste forklaring, ikke en slutning fra uenighet til usannhet — Mackie vet at folk er uenige om fysikk også. Standardinnvendingen er at mye moralsk uenighet egentlig er uenighet om fakta.",
    },
    {
      question: "Hva går queerness-argumentet ut på?",
      options: ["Objektive verdier måtte både beskrive og motivere, og krevde en egen evne", "Objektive verdier ville vært helt umulige å uttrykke i vanlig dagligdags språk", "Objektive verdier ville gjort dyp moralsk uenighet mellom kulturer umulig", "Objektive verdier ville krevd at det finnes en guddommelig lovgiver bak dem"],
      explanation: "Argumentet peker på to underligheter: en metafysisk, at verdien i seg selv skulle motivere, og en epistemisk, at vi måtte ha en særegen evne til å oppfatte den. Realistens beste svar er at matematisk erkjennelse har samme problem uten at vi avviser matematikken.",
    },
    {
      question: "Hvilket av Mackies to argumenter regnes som det sterkeste, og hvorfor?",
      options: ["Queerness-argumentet, fordi det ikke hviler på empiriske generaliseringer", "Relativitetsargumentet, fordi kulturell variasjon er lett å dokumentere", "Queerness-argumentet, fordi det viser at moralsk uenighet er uløselig", "Relativitetsargumentet, fordi det gjelder alle fagområder likt"],
      explanation: "Queerness peker på en spenning i selve begrepet om en objektiv verdi, mens relativitetsargumentet er sårbart for at mye uenighet skyldes uenighet om fakta. At uenighet finnes i alle fag, er nettopp en innvending mot relativitetsargumentet, ikke en styrke ved det.",
    },
    {
      question: "Hva er forskjellen på error theory og moralsk relativisme?",
      options: ["Relativisten beholder sannhet i relativisert form, Mackie fjerner den", "Relativisten mener alle moralske påstander er usanne, Mackie at de er sanne", "Relativisten benekter at moralen finnes i det hele tatt, Mackie at den er objektiv", "Relativisten er antirealist, mens Mackie er moralsk realist"],
      explanation: "Relativisten sier at påstandene er sanne i forhold til en kultur eller et individ; Mackie sier at de er usanne, alle sammen. Å kalle Mackie relativist er å bomme på den navngitte tenkeren — begge er antirealister, men på ulik måte.",
    },
    {
      question: "Trakk Mackie den konsekvens at moralen bør oppgis?",
      options: ["Nei — han mente vi fortsatt har grunn til å opprettholde en moral", "Ja — han mente at moralsk praksis er meningsløs og derfor bør avvikles", "Ja — men bare for de moralske reglene som varierer fra kultur til kultur", "Nei — han mente at moralen er objektiv i praksis, om ikke i teorien"],
      explanation: "Error theory er en påstand om moralens metafysiske status, ikke en oppfordring til å slutte å moralisere. Å tillegge Mackie den praktiske konklusjonen er en tilskrivning teksten hans ikke bærer.",
    },
    {
      question: "Hvilken feil ødelegger oftest en besvarelse om Berkeley?",
      options: ["Å gjøre ham til skeptiker som benekter at tingene finnes", "Å nevne at han bruker Gud til å forklare naturens orden", "Å knytte posisjonen hans til Lockes empiristiske utgangspunkt", "Å kalle posisjonen hans immaterialisme"],
      explanation: "Stråmannen gjør posisjonen absurd i stedet for interessant, og da blir hele drøftingen verdiløs — Berkeley mener seg tvert imot å redde hverdagsvirkeligheten fra skeptisismen. De tre andre alternativene er korrekte grep i en redegjørelse.",
    },
  ],
  'fil1001-2-1': [
    {
      question: "Hva hevder absolutismen (substantivalismen) om rommet?",
      options: ["At rommet er en selvstendig entitet som ville eksistert også uten ting i seg", "At rommet er systemet av avstander og retninger mellom legemer", "At rommet ikke er noe i seg selv, men systemet av avstander og retninger mellom legemer", "At rommet er identisk med den samlede materien universet til enhver tid består av"],
      explanation: "Absolutismen sier at rommet er en selvstendig eksisterende beholder, uavhengig av innholdet. Å definere rommet som systemet av avstander er relasjonismen, altså motposisjonen. De to øvrige forslagene er andre teorier om rom som ikke er Newtons.",
    },
    {
      question: "Hva hevder relasjonismen om et univers helt uten legemer?",
      options: ["At det heller ikke har noe rom, siden det ikke finnes relasjoner igjen", "At det har et rom som står tomt, men som er like fullt til stede som før", "At det har et rom hvis og bare hvis det har en tidsdimensjon", "At det har et rom vi ikke kan observere, men som vi likevel kan slutte oss til"],
      explanation: "For relasjonisten er rom ikke annet enn relasjoner mellom legemer, så uten legemer er det ingenting igjen å kalle rom. At beholderen står tom igjen, er absolutistens svar. De to andre forslagene tilskriver relasjonisten en beholder han nettopp benekter.",
    },
    {
      question: "I hvilken av bøttas faser er vannoverflaten krum samtidig som den relative bevegelsen mellom vann og bøtte er null?",
      options: ["Når vannet er dratt med og roterer i takt med bøtta", "Når bøtta akkurat er sluppet og vannet ennå henger etter", "Når både bøtta og vannet står helt i ro før forsøket starter", "Når bøtta er stoppet og vannet fortsatt roterer videre"],
      explanation: "Det er i fasen der vannet roterer i takt med bøtta at den relative bevegelsen er null og overflaten likevel er krum. Når bøtta akkurat er sluppet, er den relative bevegelsen stor og overflaten flat. Sammenligningen av disse to fasene er hele argumentets motor.",
    },
    {
      question: "Hva er bøtteargumentets konklusjon?",
      options: ["At vannet roterer i forhold til rommet selv, som dermed må finnes", "At vannet roterer i forhold til bøtta, som dermed er referansen", "At rotasjon ikke gir treghetseffekter uten en ytre observatør", "At all bevegelse er relativ og valget av referanse er vilkårlig"],
      explanation: "Newton slutter fra treghetseffektene til at rotasjonen må være rotasjon i forhold til rommet selv, altså at absolutt rom finnes. At bøtta er referansen, er nettopp det argumentet utelukker. At all bevegelse er relativ, er relasjonistens tese, ikke Newtons konklusjon.",
    },
    {
      question: "Hvilket premiss i bøtteargumentet angriper det Machianske svaret?",
      options: ["Premisset om at det ikke finnes flere kandidater til å forklare krumningen", "Premisset om at krumningen er en observerbar fysisk virkning", "Premisset om at krumningen ikke følger vannets bevegelse mot bøtta", "Premisset om at treghetseffekter finnes i en roterende beholder"],
      explanation: "Det Machianske svaret legger til en tredje kandidat — universets øvrige materie — og rammer dermed påstanden om at lista over forklaringer er uttømmende. De øvrige premissene er nesten rene observasjonspåstander som ingen av partene bestrider.",
    },
    {
      question: "Hva sier det Machianske svaret at treghetseffektene skyldes?",
      options: ["Rotasjon i forhold til all den øvrige materien i universet", "Rotasjon i forhold til rommet selv, uavhengig av materie", "Vannets indre friksjon mot veggene i den roterende bøtta", "En fast retning i universet som ingen legemer kan påvirke"],
      explanation: "Det Machianske svaret forklarer treghetseffektene relasjonelt, som rotasjon i forhold til fiksstjernene og resten av materien. Rotasjon i forhold til rommet selv er nettopp Newtons svar, som innvendingen skal erstatte. Prisen relasjonisten betaler, er at han skylder oss en mekanisme.",
    },
    {
      question: "Hva sier prinsippet om tilstrekkelig grunn hos Leibniz?",
      options: ["At ingenting er tilfelle uten en grunn til at det er slik og ikke annerledes", "At ingenting i verden kan observeres uten en relasjon til noe annet", "At enhver bevegelse må ha en årsak i en tidligere bevegelse", "At enhver egenskap ved en ting må kunne måles av en observatør"],
      explanation: "Prinsippet krever at det finnes en grunn til at noe er slik og ikke annerledes, og Leibniz bruker det mot absolutt rom fordi plasseringen av universet ville vært et valg uten mulig grunn. De øvrige forslagene beskriver andre prinsipper som ikke er det Leibniz påberoper seg her.",
    },
    {
      question: "Hva er det statiske skiftet i Leibniz' argument?",
      options: ["At hele universet tenkes forskjøvet i det absolutte rommet uten indre endring", "At én enkelt gjenstand tenkes flyttet mens alle de andre blir liggende i ro der de var", "At universet tenkes å bevege seg med en jevn hastighet gjennom det absolutte rommet", "At rommet tenkes forskjøvet mens universet blir liggende i ro"],
      explanation: "Det statiske skiftet forskyver hele det materielle universet uten å endre noen innbyrdes avstand, slik at forskjellen blir prinsipielt uobserverbar. Varianten med jevn hastighet er det kinematiske skiftet, en beslektet men annen figur. Å flytte én gjenstand ville endret avstandene og gitt en observerbar forskjell.",
    },
    {
      question: "Hva sier de uskjelnbares identitet?",
      options: ["At ting som deler alle egenskaper er én og samme ting, ikke to", "At én og samme ting deler alle egenskaper med seg selv", "At ting som ligner hverandre sterkt tilhører samme art", "At egenskaper bare finnes i kraft av tingene som har dem"],
      explanation: "De uskjelnbares identitet går fra likhet i alle egenskaper til identitet, og er den sterke og omstridte retningen. At en ting deler alle egenskaper med seg selv, er den ukontroversielle retningen som kalles Leibniz' lov. Å bytte om de to retningene er en vanlig presisjonsfeil.",
    },
    {
      question: "Hva skal Kants inkongruente motstykker vise?",
      options: ["At en romlig forskjell ikke alltid kan reduseres til indre relasjoner", "At speilbilder alltid har ulike indre avstander mellom delene", "At rommet må ha nøyaktig tre dimensjoner for å romme hender", "At relasjonismen forklarer kiralitet langt bedre enn absolutismen gjør"],
      explanation: "Venstre og høyre hånd har identiske indre mål, men kan ikke bringes til dekning, og forskjellen ser dermed ut til å ligge i forholdet til rommet selv. Argumentet er rettet mot relasjonismen, ikke til støtte for den. At de indre avstandene skulle være ulike, er nettopp det som ikke er tilfelle.",
    },
    {
      question: "Hva er relasjonistens reneste svar på Kants ensomme hånd?",
      options: ["At spørsmålet om venstre eller høyre er ubestemt i et ett-gjenstands-univers", "At hånden må være venstre, siden de aller fleste hender i verden er venstrehender", "At hånden endrer kiralitet avhengig av hvem som betrakter den", "At hånden må ha et motstykke for i det hele tatt å kunne eksistere"],
      explanation: "Relasjonisten avviser ikke kiralitet som fenomen, men benekter at spørsmålet får svar når det ikke finnes andre ting å relatere hånden til. Han betaler for svaret med en sterk intuisjon, og det er den prisen en drøfting bør veie. De øvrige svarene forsvarer ikke relasjonismen mot argumentet.",
    },
    {
      question: "Hvilken lærebok bruker termen «the Space-Time Theory of Time»?",
      options: ["Conee og Sider, «Riddles of Existence»", "Kim, «Philosophy of Mind»", "Newton, «Principia»", "Kant, skriftet om områdene i rommet"],
      explanation: "Termen er Conee og Siders, og den er navngitt i oppgavesettene. Kims bok er bevissthetsfilosofiens ankertekst i emnet og bruker ikke denne termen. Å skrive generelt om moderne fysikk der oppgaven navngir teksten, er å svare på en annen oppgave.",
    },
    {
      question: "Hva er forskjellen på absolutt rom og tomt rom?",
      options: ["Absolutt rom gjelder rommets selvstendighet, tomt rom om det finnes materie der", "Absolutt rom er rom helt uten materie, mens tomt rom er rom uten noen relasjoner", "Absolutt rom finnes bare i fysikken, tomt rom bare i metafysikken", "Det er to navn på samme påstand, hentet fra to ulike tradisjoner"],
      explanation: "De to spørsmålene er uavhengige: en relasjonist kan godta tomrom mellom legemene, og en absolutist kan mene at rommet overalt er fylt av materie. Å slå dem sammen er stråmann, fordi man da kritiserer en posisjon ingen har forsvart.",
    },
    {
      question: "Hvem argumenterer for at rom og tid er systemer av relasjoner, ikke selvstendige beholdere?",
      options: ["Leibniz", "Newton", "Kant", "Conee og Sider"],
      explanation: "Relasjonismen om både rom og tid er Leibniz' posisjon, forsvart blant annet i brevvekslingen med Clarke. Newton forsvarer motposisjonen med absolutt rom og absolutt tid. Kant angriper relasjonismen med de inkongruente motstykkene.",
    },
    {
      question: "Hva kreves for at et svar skal telle som en sammenligning og ikke som to referater?",
      options: ["Eksplisitte dimensjoner posisjonene sammenlignes langs, med vurdering per dimensjon", "Like mye plass til hver posisjon, målt i antall avsnitt i besvarelsen", "At begge posisjoner presenteres i kronologisk rekkefølge etter tenkernes levetid", "At det avsluttes med en konklusjon om hvem av de to tenkerne som var mest innflytelsesrik"],
      explanation: "Sammenligningssjangeren krever at du velger to til fire dimensjoner og vurderer hver av dem underveis. To fullstendige framstillinger etter hverandre er parallelle monologer, uansett hvor jevnt plassen er fordelt. Innflytelse er en idéhistorisk opplysning, ikke en sammenligningsdimensjon.",
    },
    {
      question: "Hva er kjernen i feilen «navnedropping uten innhold» i dette temaet?",
      options: ["Å skrive at Leibniz var relasjonist uten å gjengi argumentene hans", "Å bruke Leibniz' navn i stedet for å skrive relasjonisme", "Å nevne flere tenkere enn oppgaven eksplisitt ber om", "Å bruke moderne termer der tenkeren selv brukte andre ord"],
      explanation: "Feilen består i å nevne posisjonen eller navnet uten å levere argumentet, for eksempel prinsippet om tilstrekkelig grunn eller det statiske skiftet. Å bruke moderne termer er tvert imot ofte klargjørende, så lenge innholdet er presist. Å trekke inn flere tenkere er tillatt når de er relevante.",
    },
    {
      question: "Hva er treghetseffekter i denne debatten?",
      options: ["Målbare virkninger av akselerasjon og rotasjon, som krum vannoverflate", "Forsinkelsen mellom en årsak og virkningen den etter hvert gir", "Motstanden en gjenstand møter når den beveger seg gjennom luft", "Avviket mellom en beregnet og en faktisk observert posisjon målt over tid"],
      explanation: "Treghetseffekter er virkninger som følger av akselerasjon og rotasjon, og de er det empiriske råstoffet i Newtons argument. Luftmotstand og måleavvik er andre fenomener uten rolle i debatten. Striden gjelder hva slike effekter er effekter av.",
    },
    {
      question: "Hva skylder relasjonisten debatten for å vinne den?",
      options: ["En forklaring på treghetseffektene som ikke bruker rommet selv", "Et bevis for at rommet er uendelig i alle retninger", "En redegjørelse for hvorfor tomrom mellom legemer er umulig", "En påvisning av at Newtons observasjoner av bøtta var uriktige"],
      explanation: "Det Machianske svaret peker ut en kandidat, men skisserer ingen mekanisme, og det er nettopp denne gjelden en veiing bør nevne. Newtons observasjoner er ikke omstridt, og spørsmålet om tomrom er uavhengig av striden om rommets selvstendighet.",
    },
    {
      question: "Hva er Newtons absolutte tid?",
      options: ["Tiden som flyter jevnt av seg selv, uavhengig av hendelser og klokker", "Tiden slik den måles av den mest nøyaktige klokken vi noensinne har laget", "Ordenen mellom hendelser, avledet av hva som skjer før hva", "Den tiden en observatør faktisk opplever i sitt eget system"],
      explanation: "Newtons absolutte tid er en selvstendig bakgrunn som flyter uavhengig av alt som skjer, parallelt med det absolutte rommet. At tid er ordenen mellom hendelser, er Leibniz' relasjonisme om tid. De øvrige forslagene handler om måling og opplevelse, ikke om tidens natur.",
    },
    {
      question: "Hvorfor er Leibniz' teologiske premiss ikke nødvendig for argumentet hans?",
      options: ["Fordi kravet kan gjenformuleres rent metodisk, uten henvisning til Guds valg", "Fordi Leibniz senere trakk tilbake henvisningen til Guds valg", "Fordi absolutisten uansett aksepterer prinsippet om tilstrekkelig grunn i full styrke", "Fordi argumentet bare gjelder tid og ikke rom i den teologiske versjonen"],
      explanation: "Prinsippet om tilstrekkelig grunn kan formuleres rent metodisk, som et krav om at forskjeller i teorien skal svare til forskjeller i verden, og en moderne besvarelse bør bruke den formen. Absolutisten aksepterer ikke prinsippet i den styrken Leibniz trenger — det er nettopp der han forsvarer seg.",
    },
    {
      question: "Hva er kiralitet?",
      options: ["At en gjenstands speilbilde ikke kan bringes til dekning med gjenstanden selv", "At en gjenstand har samme form uansett hvordan den roteres i rommet", "At en gjenstand og speilbildet har ulike indre avstander mellom delene", "At en gjenstand bare kan beskrives i forhold til en på forhånd valgt referanseramme"],
      explanation: "Kiralitet er egenskapen ved at speilbildet ikke kan legges over originalen, slik som for venstre og høyre hånd. De indre avstandene er tvert imot identiske — det er nettopp derfor fenomenet er et problem for relasjonisten. Fenomenet er velkjent i kjemi og biologi og er ikke bare en språklig kuriositet.",
    },
    {
      question: "Hvilket tankeeksperiment hører til hvilken konklusjon?",
      options: ["Bøtta skal vise at absolutt rom finnes; den ensomme hånden at relasjonismen mangler noe", "Bøtta skal vise at all bevegelse er relativ; den ensomme hånden at rommet er tomt", "Bøtta skal vise at treghet er en ren illusjon; den ensomme hånden at kiralitet er relativ", "Bøtta skal vise at rommet er endelig; den ensomme hånden at rommet er uendelig"],
      explanation: "Newtons bøtte er absolutistens positive argument, mens Kants ensomme hånd er et angrep på relasjonismen fra en helt annen kant. Å koble riktig eksperiment til riktig konklusjon er en av de tingene sensor måler direkte. Verken endelighet eller illusjon står på spill i noen av dem.",
    },
    {
      question: "Hvorfor gjør et ett-gjenstands-univers bøttedebatten hardere for relasjonisten?",
      options: ["Fordi han ikke lenger kan peke på fiksstjernene som referanse", "Fordi treghetseffekter er sterkere når det finnes lite materie", "Fordi rotasjon uten friksjon ikke kan måles av noen observatør", "Fordi absolutisten da slipper å forutsette at fysikkens lover gjelder"],
      explanation: "Scenarioet fjerner nettopp den utveien det Machianske svaret bygger på, og isolerer dermed Newtons omstridte premiss. Absolutisten slipper ikke unna noen forutsetning — han må selv anta at fysikkens lover gjelder i et tomt univers, og det er hans pris i denne runden.",
    },
    {
      question: "Hvordan endrer den firedimensjonale rom-tid-rammen den klassiske romdebatten?",
      options: ["Den gjør at valget mellom beholder og relasjoner må formuleres på nytt", "Den avgjør debatten til Newtons fordel ved å gjøre rommet til en substans", "Den avgjør debatten til Leibniz' fordel ved å fjerne alle absolutte størrelser", "Den gjør spørsmålet om rommets natur til et rent språklig valg av beskrivelse"],
      explanation: "Når rom og tid behandles som én firedimensjonal helhet, er det ikke lenger opplagt at alternativene er Newtons beholder eller Leibniz' rene relasjoner, og spørsmålet må stilles på nytt. Å hevde at rammen avgjør debatten den ene eller andre veien, er å bruke fysikken som autoritet i stedet for som argument.",
    },
    {
      question: "Hva er den vanligste sammenhengsfeilen i dette temaet?",
      options: ["Å behandle bøtta og de inkongruente motstykkene som atskilte kuriositeter", "Å nevne både Newton og Leibniz i samme avsnitt uten å skille klart mellom dem", "Å bruke moderne fysikk til å belyse en klassisk metafysisk strid", "Å gjengi begge posisjoner før man begynner å drøfte dem"],
      explanation: "De to argumentene er trekk i samme parti, og å vise mønsteret — at relasjonisten svarer Kant med samme manøver som han brukte mot bøtta — er det tredje av de fem kjennetegnene. Å gjengi begge posisjoner først er tvert imot god disponering, og moderne fysikk er velkommen som argument.",
    },
    {
      question: "Hvilken landing på romdebatten er faglig forsvarlig?",
      options: ["Begge, så lenge standpunktet hviler på premisser fra din egen drøfting", "Bare relasjonismen, siden den er den mest sparsommelige teorien", "Bare absolutismen, siden den alene forklarer treghetseffektene", "Ingen av dem, siden metafysiske spørsmål ikke kan besvares"],
      explanation: "Standpunktet er fritt i dette faget: det er begrunnelseskvaliteten som premieres, aldri konklusjonens retning. Både sparsommelighet og forklaringskraft er reelle dyder, og en besvarelse må si hvilken den vekter tyngst og hvorfor. Å avvise spørsmålet uten argument er ikke en drøfting.",
    },
  ],
  'fil1001-2-2': [
    {
      question: "Hva ordner A-serien hendelser etter?",
      options: ["Fortid, nåtid og fremtid", "Tidligere enn, samtidig med og senere enn", "Årsak, mellomledd og virkning i en kausal kjede", "Rekkefølge uten noen retning, som perler på en snor"],
      explanation: "A-serien ordner hendelser som fortidige, nåtidige og fremtidige, og den er i bevegelse. Ordningen etter tidligere og senere er B-serien, som til forskjell er permanent. Rekkefølge uten retning er det McTaggart kaller C-serien.",
    },
    {
      question: "Hvilken av seriene forandrer seg over tid?",
      options: ["A-serien, fordi en hendelse går fra fremtidig til nåtidig til fortidig", "B-serien, fordi rekkefølgen justeres etter hvert som nye hendelser kommer til", "Ingen av dem, siden begge beskriver den samme faste tidslinjen fullstendig", "Begge, men A-serien forandrer seg raskere enn B-serien gjør"],
      explanation: "Bare A-serien forandrer seg: én og samme hendelse skifter A-egenskaper etter hvert som nået passerer den. B-relasjonene er permanente — er én hendelse tidligere enn en annen, er den det for alltid. Det er nettopp derfor McTaggart mener forandring krever A-serien.",
    },
    {
      question: "Hvilket av disse utsagnene uttrykker et B-faktum?",
      options: ["Møtet er 14. mars", "Møtet er i morgen", "Møtet var nettopp", "Møtet nærmer seg"],
      explanation: "En datofesting plasserer hendelsen i den faste rekkefølgen og forblir sann for alltid, og er derfor B-tale. De øvrige utsagnene plasserer møtet i forhold til et bevegelig nå og blir usanne av seg selv, uten at noe i verden endrer seg.",
    },
    {
      question: "Hva er McTaggarts andre premiss?",
      options: ["At reell forandring krever A-serien, siden B-relasjonene er permanente", "At reell forandring krever B-serien, siden A-egenskapene er uforenlige med hverandre", "At tid og forandring er to helt uavhengige størrelser som ikke griper inn i hverandre", "At all forandring er tilsynelatende og skyldes hvordan vi oppfatter hendelsene"],
      explanation: "McTaggart hevder at det bare er A-egenskapene som endrer seg, og at det derfor ikke finnes forandring uten A-serien. Dette premisset er det B-teoretikeren angriper ved å tilby et forandringsbegrep uten bevegelig nåtid. Å bytte om A og B her snur hele argumentet på hodet.",
    },
    {
      question: "Hva er selvmotsigelsen McTaggart mener å finne i A-serien?",
      options: ["At hver hendelse har alle de tre uforenlige A-egenskapene", "At hver hendelse mangler minst én av de tre A-egenskapene den trenger", "At to hendelser aldri kan ha den samme A-egenskapen samtidig", "At A-egenskapene ikke kan uttrykkes i et språk uten tempus"],
      explanation: "Fortid, nåtid og fremtid er innbyrdes uforenlige, men hver hendelse har alle tre i løpet av sin karriere. Det opplagte motsvaret er at den har dem etter hverandre, og McTaggarts poeng er at dette motsvaret starter en regress. Det er ikke mangel på A-egenskaper som er problemet, men overfloden.",
    },
    {
      question: "Hva går regresstrinnet i McTaggarts argument ut på?",
      options: ["At redningen «etter hverandre» krever en ny tidsorden med samme problem", "At hver hendelse må forklares ved en tidligere hendelse i det uendelige", "At A-serien må deles i uendelig mange stadig kortere øyeblikk", "At hver A-egenskap må defineres ved hjelp av en annen A-egenskap"],
      explanation: "Å si at hendelsen har A-egenskapene etter hverandre, er å plassere den i en ny tidsorden, og skal den romme forandring, må også den være en A-serie med samme problem. Regressen har ingen naturlig stopp. Dette er trinnet A-teoretikeren angriper ved å hevde at regressen er uskyldig.",
    },
    {
      question: "Hvordan svarer B-teoretikeren på McTaggarts argument?",
      options: ["Ved å benekte at forandring krever A-serien", "Ved å benekte at A-egenskapene er innbyrdes uforenlige", "Ved å benekte at hendelser har A-egenskaper i det hele tatt", "Ved å benekte at tid krever forandring for å være virkelig"],
      explanation: "B-teoretikeren angriper det andre premisset: forandring er at en gjenstand har én egenskap på ett tidspunkt og en annen på et senere, og B-serien beskriver dette fullstendig. Å benekte at A-egenskapene er uforenlige, ville vært en helt annen strategi, og den forsvares ikke i denne debatten.",
    },
    {
      question: "Hva er McTaggarts motsvar til B-teoretikerens forandringsbegrep?",
      options: ["At det bare beskriver variasjon langs en akse, ikke reell forandring", "At det forutsetter en absolutt tid som ingen lenger forsvarer i dag", "At det ikke kan uttrykkes uten å bruke ordene fortid og fremtid", "At det gjør forandring til noe subjektivt hos den som iakttar"],
      explanation: "McTaggart sammenligner B-teoretikerens forandring med en pinne som er tykk i den ene enden og tynn i den andre: variasjon, ikke forandring. B-teoretikerens svar tilbake er at kravet om noe mer smugler inn A-serien i definisjonen, og dermed forutsetter det som skulle vises.",
    },
    {
      question: "Hva er personlig tid hos Lewis?",
      options: ["Tiden slik den forløper langs den reisendes eget liv", "Tiden slik den oppleves subjektivt som lang eller kort", "Tiden mellom to hendelser målt av en observatør i ro", "Tiden som gjenstår av et livsløp regnet fra nåtiden"],
      explanation: "Personlig tid måles av kroppens aldring, minnenes rekkefølge og klokka den reisende bærer, og den er ikke et spørsmål om opplevd lengde. For alle andre enn tidsreisende løper personlig og ekstern tid i takt. Skillet er det som gjør tidsreise sammenhengende å beskrive.",
    },
    {
      question: "Hva er Lewis' oppløsning av bestefar-paradokset?",
      options: ["Hun kan ikke drepe ham, og grunnen er at hun ikke gjorde det", "Hun kan drepe ham, men da forgrener virkeligheten seg i to atskilte løp", "Hun kan ikke drepe ham, fordi en fysisk lov aktivt hindrer ethvert forsøk", "Hun kan drepe ham, og motsigelsen viser at tidsreise er umulig"],
      explanation: "Lewis holder fast på at fortiden er som den er og ikke inneholder noe drap, og at «kan» må vurderes i forhold til hva vi holder fast. Ingen egen kraft griper inn — hun mislykkes rett og slett, på en av mange mulige måter. Det følger ikke at scenarioet er logisk selvmotsigende.",
    },
    {
      question: "Hvilken påstand argumenterer Lewis faktisk for?",
      options: ["At tidsreise er logisk mulig, altså fri for selvmotsigelse", "At tidsreise er fysisk mulig og forenlig med naturlovene", "At tidsreise faktisk forekommer et sted i vårt eget univers", "At tidsreise er umulig, men interessant som tankeeksperiment"],
      explanation: "Lewis' konklusjon gjelder logisk mulighet: beskrivelsen inneholder ingen selvmotsigelse. Å lese ham som om han hevdet at tidsreise er fysisk mulig eller faktisk skjer, er å tilskrive ham en konklusjon han ikke trakk. Skillet mellom de to mulighetstypene brukes igjen senere i emnet.",
    },
    {
      question: "Hva innrømmer Lewis som en reell kostnad ved tidsreisehypotesen?",
      options: ["At et univers med tidsreisende må romme mange uforklarte sammentreff", "At tidsreise ville krevd at fortiden kunne endres i ettertid", "At personlig tid ville måtte løpe baklengs for den reisende selv", "At den reisende ville miste alle minner fra tiden før avreisen"],
      explanation: "Forsøk på å endre fortiden må mislykkes, og i et univers med mange tidsreisende ville det gi påfallende mange sammentreff som ingenting forklarer. Lewis regner dette som en kostnad ved hypotesen, ikke som en motbevisning. Personlig tid løper alltid fremover for den reisende.",
    },
    {
      question: "Hva sier den termodynamiske forklaringen på tidens retning?",
      options: ["At «senere» er den retningen entropien øker i", "At «senere» er den retningen årsakene virker i", "At «senere» er den retningen minnene peker bort fra", "At «senere» er den retningen universet utvider seg i"],
      explanation: "Den termodynamiske pilen identifiserer tidens retning med retningen entropien øker i, slik at irreversible prosesser som knusing og blanding definerer før og etter. Årsaksretningen og minneretningen er de to andre kjente pilene, og et sentralt spørsmål er om de kan reduseres til denne.",
    },
    {
      question: "Hva er hovedinnvendingen mot entropiforklaringen?",
      options: ["At den forutsetter at universet startet i en usedvanlig ordnet tilstand", "At entropien i praksis viser seg å synke i mange lukkede systemer", "At entropi bare kan måles i systemer som allerede har en fastlagt tidsretning", "At den ikke kan anvendes på prosesser som er fullt reversible"],
      explanation: "Den statistiske begrunnelsen gir høyere entropi i begge tidsretninger fra et gitt punkt, med mindre man legger til en laventropisk startbetingelse. Denne antakelsen følger ikke av termodynamikkens lov, og kritikere spør derfor om forklaringen leverer retningen eller arver den. At entropien synker i lukkede systemer, er ikke en del av innvendingen.",
    },
    {
      question: "Hvilken type prosess avslører at en filmsnutt spilles baklengs?",
      options: ["Den entropiøkende, som røyk som sprer seg", "Den entropinøytrale, som en pendel som svinger", "Den periodiske, som en planet i sin bane", "Den akselererende, som en kule som ruller nedover"],
      explanation: "Det er de entropiøkende prosessene som ser feil ut baklengs, og det er nettopp dette som gir den termodynamiske forklaringen støtte. Pendelen og planetbanen endrer ikke entropien nevneverdig og ser like riktige ut begge veier. Akselerasjon i seg selv avslører ingen retning.",
    },
    {
      question: "Hva er kjernen i Zenons dikotomi?",
      options: ["At enhver strekning inneholder uendelig mange delstrekninger som må gjennomløpes", "At enhver strekning kan deles i to like store deler av nøyaktig samme lengde og form", "At to gjenstander aldri kan befinne seg på samme sted til samme tid", "At bevegelse krever et tomrom å bevege seg gjennom, og tomrom finnes ikke"],
      explanation: "Dikotomien bygger på at man først må tilbakelegge halve strekningen, så halvparten av resten, i det uendelige, og at en uendelig oppgaverekke ikke kan fullføres. At en strekning kan halveres, er en triviell sannhet ingen bestrider, og er ikke selve argumentet.",
    },
    {
      question: "Hva går det matematiske svaret på Zenon ut på?",
      options: ["At en uendelig rekke ledd kan ha en endelig sum", "At delstrekningene i praksis blir så små at de kan ignoreres", "At antallet delstrekninger er endelig fordi rommet er kornet", "At bevegelse skjer i sprang og ikke gjennom alle mellomliggende punkter"],
      explanation: "Halvpartene summerer seg mot 1 uten å overskride det, og tidene for delstrekningene summerer seg tilsvarende til en endelig tid. Svaret er ikke at små ledd kan ignoreres — hvert ledd teller med i summen. Innvendingen mot svaret er at det gjelder summen, ikke fullførelsen.",
    },
    {
      question: "Hva er det aristoteliske svaret på Zenon?",
      options: ["At strekningen bare er uendelig delbar, ikke faktisk uendelig delt", "At strekningen har en minste udelelig lengde som ikke kan halveres", "At bevegelse er en illusjon og Zenons konklusjon derfor er korrekt", "At tiden er uendelig delbar mens strekningen er endelig delbar"],
      explanation: "Aristoteles skiller potensiell fra aktuell uendelighet: delingen er en mulighet, ikke en gjennomført handling, så bevegelse krever ikke at uendelig mange separate oppgaver utføres. Svaret rammer et annet premiss enn det matematiske svaret, og de to kan derfor brukes sammen.",
    },
    {
      question: "Hvordan bestemmer Aristoteles tiden?",
      options: ["Som tallet på bevegelse med hensyn til før og etter", "Som den bevegelige nåtidens gang gjennom hendelsene", "Som en selvstendig beholder hendelsene forløper inne i", "Som den fjerde dimensjonen ved siden av de tre romlige"],
      explanation: "Aristoteles bestemmer tid som målet på forandring — det vi teller når vi teller bevegelse. Beholdersynet er Newtons, og den firedimensjonale framstillingen er Conee og Siders. Aristoteles gjør altså tiden avhengig av at noe faktisk endrer seg.",
    },
    {
      question: "Hva er hovedpoenget i en sammenligning av Aristoteles og McTaggart?",
      options: ["At de svarer på ulike spørsmål — analyse av tid mot angrep på forandring", "At de gir motstridende svar på nøyaktig det samme spørsmålet om tid", "At McTaggart bygger sitt argument direkte videre på Aristoteles' definisjon", "At begge konkluderer med at tiden er uvirkelig, men med ulike begrunnelser"],
      explanation: "Aristoteles gir en analyse av hva tid er, forutsatt at det finnes forandring; McTaggart angriper nettopp muligheten av forandring. Å si dette eksplisitt er det som løfter en sammenligning over gjennomsnittet. Aristoteles konkluderer ikke med at tiden er uvirkelig.",
    },
    {
      question: "Hvilken lærebok bruker termen «the Space-Time Theory of Time»?",
      options: ["Conee og Sider, «Riddles of Existence»", "Kim, «Philosophy of Mind»", "Aristoteles, «Fysikken»", "McTaggart, avhandlingen om tidens uvirkelighet"],
      explanation: "Termen er Conee og Siders og er navngitt i settene, blant annet i V2016. Ber oppgaven om den, er det ikke nok å skrive generelt om moderne fysikks syn på tid — det er å svare på en annen oppgave. Kims bok er emnets ankertekst i bevissthetsfilosofi.",
    },
    {
      question: "Hva innebærer Space-Time-framstillingen om nåtiden?",
      options: ["At «nå» ikke er mer objektivt utmerket enn «her»", "At «nå» er det eneste tidspunktet som virkelig eksisterer", "At «nå» beveger seg gjennom en ellers fast firedimensjonal helhet", "At «nå» er avhengig av at det finnes noen til å telle forandringen"],
      explanation: "I den firedimensjonale framstillingen er alle tider like virkelige, og nåets forrang er et trekk ved perspektivet vårt, ikke ved verden. Synet at bare nåtiden eksisterer, er en helt annen posisjon. At tid krever noen til å telle, er Aristoteles' åpne spørsmål.",
    },
    {
      question: "Hva skiller A-teorien fra B-teorien?",
      options: ["Om A-egenskapene er objektive trekk ved virkeligheten eller ikke", "Om hendelser kan ordnes i en bestemt rekkefølge eller ikke", "Om tiden har en retning fra fortid mot fremtid eller ikke", "Om tiden kan måles med klokker på en pålitelig måte eller ikke"],
      explanation: "A-teorien hevder at fortid, nåtid og fremtid er objektive trekk ved verden og at nået har en særstilling; B-teorien hevder at bare relasjonene tidligere og senere er objektive. Begge leirer godtar at hendelser står i en bestemt rekkefølge, og begge kan gjøre rede for målbar tid.",
    },
    {
      question: "Hva er den vanligste presisjonsfeilen i dette temaet?",
      options: ["Å forveksle A-serien og B-serien", "Å skrive McTaggarts navn med feil initialer", "Å bruke ordet entropi uten å definere det", "Å nevne Zenon uten å nevne Aristoteles' svar"],
      explanation: "Bytter man om de to seriene, blir hele argumentet uforståelig, og feilen er synlig for sensor i første avsnitt. Huskeregelen er at A har det bevegelige A-nået, mens B har den bestandige rekkefølgen. De øvrige svakhetene er reelle, men langt mindre alvorlige.",
    },
    {
      question: "Hva er feilen i å svare «men i virkeligheten kan man ikke reise i tid»?",
      options: ["Det omgår premissene i stedet for å ta dem som stipulasjoner", "Det er faktisk uriktig, siden tidsreise er fysisk godt dokumentert", "Det blander sammen ekstern tid og personlig tid i besvarelsen", "Det svarer på et B-teoretisk spørsmål med et A-teoretisk argument"],
      explanation: "Premissene i et tankeeksperiment leses som stipulasjoner, ikke som empiriske påstander, og å avvise dem er å avvise oppgaven i stedet for å besvare den. Dette er stråmannsfeilen i sin tankeeksperiment-variant. Ingenting i kapitlet hevder at tidsreise er dokumentert.",
    },
    {
      question: "Hva lar McTaggart bli igjen når han erklærer tiden uvirkelig?",
      options: ["Rekkefølgen hendelsene står i, men uten retning", "Den bevegelige nåtiden, men uten fortid og fremtid", "Ingenting — han benekter at noe som helst skjer", "B-relasjonene i full styrke, men uten A-egenskaper"],
      explanation: "Det McTaggart lar stå igjen, er C-serien: ordningen uten retning. Han benekter ikke at hendelsene står i en bestemt rekkefølge, men at rekkefølgen er rettet og at et nå beveger seg gjennom den. Å si at han mente ingenting skjer, er en upresis gjengivelse.",
    },
    {
      question: "Hvorfor er tidsreise en test på skillet mellom mulighetstyper?",
      options: ["Fordi konklusjonen gjelder logisk mulighet, ikke fysisk", "Fordi tidsreise er fysisk mulig, men logisk selvmotsigende", "Fordi paradokset bare oppstår når naturlovene holdes faste", "Fordi skillet mellom mulighetstypene ble oppfunnet for denne saken"],
      explanation: "Lewis viser at beskrivelsen er fri for selvmotsigelse, og det er en langt svakere påstand enn at fysikken tillater tidsreise. Å blande de to er den vanligste feilen i tidsreiseoppgaver. Skillet brukes bredt i emnet, ikke minst i behandlingen av zombier og tenkelighet.",
    },
    {
      question: "Hvilken sammenheng bør en god besvarelse om tid påvise?",
      options: ["At skillet mellom A- og B-serien avgjør hva tidsreise er en reise gjennom", "At Zenons paradokser motbeviser McTaggarts argument om A-serien", "At entropiforklaringen følger direkte av Aristoteles' definisjon av tid", "At Lewis' analyse forutsetter at A-teorien er den korrekte posisjonen"],
      explanation: "Emnene i kapitlet henger sammen, og å vise det er det tredje av de fem kjennetegnene. Zenon utfordrer den kontinuerlige tiden begge leirene forutsetter, men motbeviser ikke McTaggart. Lewis' analyse forutsetter ikke en bestemt posisjon i A- og B-striden.",
    },
  ],
  'fil1001-2-3': [
    {
      question: "Hva betyr numerisk identitet?",
      options: ["Å være én og samme ting, ikke to", "Å være helt lik i alle kvalitative egenskaper uten videre", "Å tilhøre samme art eller kategori av gjenstander", "Å ha samme antall deler som en annen gjenstand har"],
      explanation: "Numerisk identitet er å være én ting og ikke to, og det er dette Theseus-spørsmål handler om. Å være helt lik er kvalitativ identitet, som er forenlig med å være to forskjellige ting. Å blande de to er den vanligste presisjonsfeilen i temaet.",
    },
    {
      question: "To skruer fra samme produksjonsform er et eksempel på hva?",
      options: ["Kvalitativ identitet uten numerisk identitet", "Numerisk identitet uten kvalitativ identitet", "Både numerisk og kvalitativ identitet samtidig", "Verken numerisk eller kvalitativ identitet i det hele tatt"],
      explanation: "Skruene er helt like, altså kvalitativt identiske, men de er to skruer og dermed ikke numerisk identiske. Et tilfelle av numerisk uten kvalitativ identitet ville vært én ting beskrevet på to måter på ulike tidspunkter.",
    },
    {
      question: "Hva sier Leibniz' lov i den ukontroversielle retningen?",
      options: ["Er x og y én og samme ting, deler de alle egenskaper", "Deler x og y alle egenskaper, er de én og samme ting", "Ting som ligner hverandre tilstrekkelig, er samme slags ting", "Ingen ting kan ha to uforenlige egenskaper på samme tidspunkt"],
      explanation: "Retningen fra identitet til likhet i alle egenskaper er ukontroversiell og er verktøyet i dette kapitlet. Den motsatte retningen — fra likhet til identitet — er de uskjelnbares identitet, som er langt sterkere og omstridt. Å bytte om dem er en klassisk feil.",
    },
    {
      question: "Hva er utvidelsen som gjør Theseus-casen til et filosofisk problem?",
      options: ["At de gamle plankene tas vare på og settes sammen til et skip nummer to", "At skipet males i en helt annen farge samtidig som plankene skiftes ut", "At skipet flyttes til en annen havn i løpet av utskiftningsperioden", "At plankene skiftes ut på én dag i stedet for over mange år"],
      explanation: "Med det gjenoppbygde skipet får vi to kandidater som begge har et sterkt krav, og siden begge ikke kan være det opprinnelige, tvinges det fram et valg av kriterium. Uten utvidelsen ville de fleste svart ja uten å nøle. Maling og flytting endrer ingenting prinsipielt.",
    },
    {
      question: "Hvorfor kan ikke begge Theseus-kandidatene være det opprinnelige skipet?",
      options: ["Fordi identitet er transitiv, og de to står synlig på hvert sitt sted", "Fordi bare det ene av dem er bygget av tre fra det opprinnelige treslaget", "Fordi det ene av dem har vært ute av bruk i en periode av tiden", "Fordi et skip per definisjon bare kan ha én eier om gangen"],
      explanation: "Er begge identiske med det opprinnelige, må de ved transitivitet være identiske med hverandre, og ved Leibniz' lov er det umulig når de har ulik plassering. Resultatet gjelder uansett hvilket kriterium man til slutt velger, og det er derfor casen tvinger fram et valg.",
    },
    {
      question: "Hvilket svar gir seieren til det kontinuerlig reparerte skipet?",
      options: ["Kontinuitetssvaret", "Materiesvaret", "Konvensjonssvaret", "Presentismen"],
      explanation: "Kontinuitetssvaret gjør uavbrutt bane gjennom rom og tid til kriteriet, og det reparerte skipet opphørte aldri å eksistere. Materiesvaret gir seieren til det gjenoppbygde, og konvensjonssvaret sier at spørsmålet ikke har noe svar utover navnebruken.",
    },
    {
      question: "Hva er den kjente svakheten ved kontinuitetssvaret?",
      options: ["Det gir feil svar når en gjenstand demonteres og settes sammen igjen", "Det gjør alle organismer til nye gjenstander hver gang materialet skiftes", "Det forutsetter at gjenstander har temporale deler i tillegg til romlige", "Det kan bare anvendes på artefakter, aldri på naturlige gjenstander som trær"],
      explanation: "En klokke som tas fra hverandre for reparasjon, har brutt bane gjennom rom og tid, men er åpenbart samme klokke etterpå. At organismer stadig skifter materiale, er derimot innvendingen mot materiesvaret, ikke mot kontinuitetssvaret.",
    },
    {
      question: "Hva hevder konvensjonssvaret på Theseus?",
      options: ["At alle fysiske fakta er kjent, og at resten er et spørsmål om navnebruk", "At begge skipene er identiske med det opprinnelige skipet på hver sin måte", "At spørsmålet er meningsløst fordi skip ikke er ekte gjenstander", "At svaret avhenger av hvilket skip eieren mener er det opprinnelige"],
      explanation: "Konvensjonssvaret sier at det ikke finnes noe mer å oppdage, bare noe å bestemme. Det hevder ikke at begge er identiske med originalen — det ville brutt transitiviteten — og heller ikke at spørsmålet er meningsløst, bare at det avgjøres av hvordan navnet brukes.",
    },
    {
      question: "Hva er problemet med iboende forandring?",
      options: ["At én ting ser ut til å ha uforenlige egenskaper, i strid med Leibniz' lov", "At en ting ser ut til å miste alle sine deler i løpet av sin levetid", "At vi ikke kan observere en gjenstand kontinuerlig gjennom hele dens levetid", "At egenskaper ser ut til å eksistere uavhengig av tingene som har dem"],
      explanation: "En stang er rett klokka ti og bøyd klokka elleve, og ved Leibniz' lov skulle én ting dele alle egenskaper med seg selv. Problemet handler ikke om deler eller utskiftning — det rammer helt vanlige gjenstander som bare endrer seg.",
    },
    {
      question: "Hva innebærer tidsindeksering som løsning på forandringsproblemet?",
      options: ["At egenskapene gjøres relative til tidspunkt, som «rett-klokka-ti»", "At gjenstanden deles i temporale deler som har hver sin egenskap for seg", "At bare det som er nå eksisterer, så det finnes ingenting å sammenligne med", "At Leibniz' lov begrenses til å gjelde bare på ett og samme tidspunkt"],
      explanation: "Indekseringen gjør at egenskapene ikke lenger er uforenlige, og Leibniz' lov er reddet. Oppdeling i temporale deler er perdurantistens løsning, og at bare nåtiden finnes, er presentistens. De tre er tre ulike svar på samme problem.",
    },
    {
      question: "Hva går Lewis' innvending mot tidsindeksering ut på?",
      options: ["At den gjør iboende egenskaper som form om til relasjoner", "At den bryter med Leibniz' lov i den ukontroversielle retningen", "At den forutsetter at gjenstander har temporale deler likevel", "At den ikke kan anvendes på gjenstander som ikke forandrer seg"],
      explanation: "På den indekserte analysen har ikke kula egenskapen «rund», men relasjonen «rund-i-forhold-til-tirsdag», og en tings form er ikke et forhold til en dato. Innvendingen viser at løsningen har en pris, ikke at den er umulig — forsvareren kan svare at det er besittelsen som er tidsrelativ.",
    },
    {
      question: "Hva sier presentismen?",
      options: ["At bare det som er nå eksisterer", "At alle tider eksisterer like fullt som nåtiden gjør", "At tiden er en fjerde dimensjon på linje med de romlige", "At gjenstander er utstrakt i tid slik de er utstrakt i rom"],
      explanation: "Presentismen holder at fortiden ikke lenger er og fremtiden ennå ikke er, slik at det ikke finnes noe fortidig tidspunkt å sammenligne med. Synet at alle tider finnes, er eternalismen, og de to øvrige forslagene beskriver den firedimensjonale rammen.",
    },
    {
      question: "Hva hevder endurantismen om gjenstander?",
      options: ["At en gjenstand er helt til stede på hvert tidspunkt den finnes", "At en gjenstand består av temporale deler i tillegg til de romlige", "At en gjenstand er en tynn skive av en firedimensjonal helhet", "At en gjenstand bare finnes så lenge den observeres av noen"],
      explanation: "Endurantismen er det tredimensjonale synet: hele bordet er her nå, og ingen del av bordet ligger i fjor. Temporale deler og skiver av en firedimensjonal helhet hører til perdurantismen, som er den konkurrerende posisjonen.",
    },
    {
      question: "Hvordan løser perdurantisten problemet med iboende forandring?",
      options: ["Ved at ulike temporale deler har de uforenlige egenskapene", "Ved at egenskapene gjøres relative til tidspunkt de gjelder på", "Ved at bare den egenskapen gjenstanden har nå, faktisk eksisterer", "Ved å begrense Leibniz' lov til gjenstander som ikke endrer seg"],
      explanation: "Formiddagsdelen er rett og ettermiddagsdelen er bøyd, så ingen enkelt ting har uforenlige egenskaper — akkurat som en vei kan være smal ett sted og bred et annet. Tidsindeksering er endurantistens løsning, ikke perdurantistens.",
    },
    {
      question: "Hva er temporale deler?",
      options: ["De tidsutstrakte delene en gjenstand består av, som tirsdagsdelen", "De delene av en gjenstand som blir skiftet ut i løpet av dens levetid", "De stadiene i en prosess som må gjennomløpes i fast rekkefølge", "De egenskapene ved en gjenstand som endrer seg over tid"],
      explanation: "Temporale deler forholder seg til gjenstanden som helhet slik romlige deler gjør: bordplaten er en romlig del, tirsdagsbordet en temporal. Å nevne termen uten å vise hvordan den løser forandringsproblemet, er navnedropping uten innhold.",
    },
    {
      question: "Hva er perdurantismens viktigste kostnad?",
      options: ["At ingen gjenstand noensinne er helt til stede", "At Leibniz' lov må oppgis i den ukontroversielle retningen", "At gjenstander ikke kan ha iboende egenskaper i det hele tatt", "At forandring blir umulig å beskrive uten en bevegelig nåtid"],
      explanation: "På perdurantismen er det som er her nå bare en tynn temporal skive av deg, og endurantisten mener dette er dyrere enn problemet det løser. Perdurantismen bevarer nettopp at egenskapene er iboende — det er dens fremste fordel, ikke dens kostnad.",
    },
    {
      question: "Hva er den faglig korrekte beskrivelsen av striden mellom endurantisme og perdurantisme?",
      options: ["Den er levende og uavgjort, med reelle kostnader på begge sider", "Den er avgjort til perdurantismens fordel i moderne metafysikk", "Den er avgjort til endurantismens fordel av intuisjonsgrunner", "Den er en terminologisk uenighet uten konsekvenser for hva som finnes"],
      explanation: "Litteraturen er reelt delt, og en besvarelse som framstiller saken som avgjort, skjuler en levende uenighet bak en falsk konsensus. Uenigheten er heller ikke terminologisk: de to gir ulike svar på om hele bordet er her nå.",
    },
    {
      question: "Hva sier tesen om nødvendig identitet?",
      options: ["Er x identisk med y, er x nødvendigvis identisk med y", "Er x identisk med y, må vi kunne vite det på forhånd", "Er x nødvendig, må alt x er identisk med være nødvendig", "Er x identisk med y, kan de likevel skilles i tanken"],
      explanation: "Identitet er ikke noe som kunne vært annerledes: én ting kunne ikke vært to. At vi oppdaget identiteten, er en kjensgjerning om vår kunnskap, ikke om tingen. Tesen får full behandling i kapitlet om modalitet.",
    },
    {
      question: "Hvordan er nødvendig identitet relevant for Theseus-casen?",
      options: ["Den utelukker at begge kandidatene er skipet på hver sin måte", "Den viser at det reparerte skipet nødvendigvis er det opprinnelige", "Den viser at materialet er det eneste nødvendige ved en gjenstand", "Den gjør spørsmålet om identitet over tid til et empirisk spørsmål"],
      explanation: "Er begge identiske med originalen, må de være nødvendigvis identiske med hverandre, og de står to steder samtidig. Casen tvinger derfor fram et valg mellom kandidatene. Tesen sier ingenting om hvilken kandidat som vinner.",
    },
    {
      question: "Hva viser statue-og-bronse-tilfellet?",
      options: ["At to gjenstander ser ut til å oppta samme sted med samme materiale", "At materialet i en gjenstand alltid er eldre enn gjenstanden selv", "At kunstverk følger andre identitetskriterier enn andre gjenstander", "At Leibniz' lov ikke gjelder for gjenstander laget av metall"],
      explanation: "Bronsen fantes før statuen, så de har ulike egenskaper og er ved Leibniz' lov to ting — men de opptar samme sted og består av samme atomer. Perdurantisten forklarer det som at den ene utstrekningen er en del av den andre.",
    },
    {
      question: "Hva skiller en iboende fra en relasjonell egenskap?",
      options: ["Den iboende har en ting i kraft av seg selv, den relasjonelle i kraft av noe annet", "Den iboende kan ikke endres, mens den relasjonelle kan endres fritt", "Den iboende kan observeres direkte, mens den relasjonelle alltid må sluttes til", "Den iboende gjelder bare fysiske ting, den relasjonelle også abstrakte"],
      explanation: "Form og masse er iboende; å være til venstre for eller eldre enn er relasjonelt. Skillet bærer hele Lewis' innvending, siden forandring i iboende egenskaper er problematisk på en måte forandring i relasjoner ikke er. Iboende egenskaper kan utmerket godt endres.",
    },
    {
      question: "Hvorfor er det viktig at Theseus-plankene skiftes ut én om gangen?",
      options: ["Fordi ingen enkelt utskiftning virker avgjørende, og likevel er alt til slutt skiftet", "Fordi skipet ellers ville sunket midt under det pågående reparasjonsarbeidet", "Fordi materiesvaret bare kan anvendes ved gradvis utskiftning", "Fordi kontinuitetssvaret krever at arbeidet tar mer enn ett år"],
      explanation: "Graden av gradvishet er nettopp det som gjør at intuisjonen vår ikke får tak: skiftet man alt på én gang, ville de fleste sagt at det er et nytt skip. Å peke på at bare tempoet skiller de to tilfellene, er et effektivt trekk i drøftingen.",
    },
    {
      question: "Hvilken feil begår en besvarelse som nevner «temporale deler» uten mer?",
      options: ["Navnedropping uten innhold", "Stråmann og feilframstilling av en posisjon", "Referat uten drøfting av noe slag", "Å bomme på den navngitte pensumteksten"],
      explanation: "Termen alene gir ingen uttelling; det er oppdelingen som løser problemet og som må vises. Stråmann ville vært å gjengi perdurantismen svakere enn den er, og referat uten drøfting er å gjengi uten å vurdere i det hele tatt.",
    },
    {
      question: "Hva er eternalisme?",
      options: ["Synet at fortid, nåtid og fremtid alle finnes", "Synet at bare den nåværende tilstanden finnes", "Synet at tiden er uendelig i begge retninger", "Synet at gjenstander finnes uavhengig av tid"],
      explanation: "Eternalismen er motposisjonen til presentismen og den naturlige følgesvennen til den firedimensjonale framstillingen av tid. Perdurantismen forutsetter eternalisme, siden temporale deler må finnes for å ha egenskaper. Spørsmålet om tidens utstrekning er en annen sak.",
    },
    {
      question: "Hva menes med konstitusjon uten identitet?",
      options: ["At én ting består av en annen uten å være identisk med den", "At én ting kan bli til en annen ting over tid uten avbrudd", "At to ting kan ha samme form uten å ha samme materiale", "At en ting kan miste alle sine deler uten å opphøre å finnes"],
      explanation: "Statuen består av bronsen, men bronsen fantes før statuen, så de kan ikke være identiske. Å skille konstitusjon fra identitet er én måte å håndtere sammenfallende gjenstander på uten å bryte Leibniz' lov, men da må man forklare hva konstitusjon er.",
    },
    {
      question: "Hva er den typiske sammenhengsfeilen i dette temaet?",
      options: ["Å svare på Theseus uten å koble til Leibniz' lov eller forandringsproblemet", "Å nevne både kontinuitetssvaret og materiesvaret i én og samme besvarelse", "Å bruke et nyskrevet eksempel i stedet for skipet fra antikken", "Å gjøre rede for begge posisjoner før man begynner å drøfte dem"],
      explanation: "Theseus er ikke en gåte for seg, men en illustrasjon av at Leibniz' lov og våre identitetsvaner kolliderer, og å vise det er det tredje av de fem kjennetegnene. Å bruke et eget eksempel er tvert imot ofte en styrke, og å gjøre rede for begge posisjoner først er god disponering.",
    },
    {
      question: "Hva forutsetter perdurantismen om tidens natur?",
      options: ["Eternalisme — at alle tider finnes, ikke bare nåtiden", "Presentisme — at bare nåtiden virkelig finnes", "At tiden har en objektivt utmerket nåtid som beveger seg", "At tiden er uvirkelig, slik McTaggart konkluderte med"],
      explanation: "Temporale deler må finnes for å kunne ha egenskaper, og det krever at også fortidige og fremtidige tider finnes. Dette er grunnen til at valget mellom persistenssynene henger sammen med hva man mener om tid. Presentismen er derimot endurantistens vei.",
    },
    {
      question: "Hvorfor tar kapitlet konvensjonssvaret alvorlig?",
      options: ["Fordi vi vekter kriteriene ulikt for ulike typer ting, som band og smykker", "Fordi de to andre svarene viser seg å være logisk selvmotsigende hver for seg", "Fordi identitetsspørsmål alltid handler om språk og aldri om verden", "Fordi ingen har klart å formulere de to andre svarene presist nok"],
      explanation: "For et band vekter vi kontinuitet, for et smykke materialet — det tyder på at kriteriet velges snarere enn oppdages. De to andre svarene er ikke selvmotsigende, men har hver sine moteksempler, og konvensjonssvaret har sin egen betydelige kostnad.",
    },
  ],
  'fil1001-2-4': [
    {
      question: "Hva består personlig identitet i ifølge Locke?",
      options: ["Bevissthetskontinuitet — hvor langt minnet kan strekkes tilbake", "Kroppslig kontinuitet — at det er den samme levende organismen hele veien", "Kontinuitet i en immateriell sjelssubstans som varer gjennom livet", "Sammenheng i karaktertrekk og verdier gjennom hele personens liv"],
      explanation: "Locke gjør bevissthetens rekkevidde til kriteriet: så langt bevisstheten kan strekkes tilbake, så langt strekker personen seg. Kroppskriteriet og sjelskriteriet er de to kandidatene han avviser. Karaktertrekk alene ville vært et kvalitativt kriterium, ikke et numerisk.",
    },
    {
      question: "Hvorfor avviser Locke sjelskriteriet?",
      options: ["Fordi en utskiftet sjel ikke ville merkes av noen, heller ikke personen selv", "Fordi han benekter at immaterielle sjeler kan eksistere", "Fordi sjelen forandrer seg for mye i løpet av et menneskeliv", "Fordi sjelen tilhører teologien og ikke filosofien som fagfelt"],
      explanation: "Lockes poeng er at kriteriet er ubrukelig: alt vi bryr oss om ved en person ville fulgt bevisstheten og ikke sjelen. Han benekter ikke at sjeler finnes — han benekter at de gjør jobben. Innvendingen er altså funksjonell, ikke ontologisk.",
    },
    {
      question: "Hvem er personen som våkner i skomakerens kropp, ifølge Locke?",
      options: ["Prinsen, siden personen følger bevisstheten", "Skomakeren, siden personen følger den levende kroppen", "Verken prinsen eller skomakeren, men en helt ny person", "Både prinsen og skomakeren, i hver sin forstand av ordet"],
      explanation: "Locke svarer at personen er prinsen, mens mennesket — den biologiske organismen — fortsatt er skomakeren. Skillet mellom person og menneske er nettopp det som gjør svaret mulig. Å si at begge er det i hver sin forstand, ville brutt med at identitet er transitiv.",
    },
    {
      question: "Hvilke tre begreper holder Locke fra hverandre?",
      options: ["Person, menneske og substans", "Sjelen, kroppen og bevisstheten", "Minne, intensjon og karakter", "Identitet, likhet og kontinuitet"],
      explanation: "Locke skiller person (ansvarsbæreren), menneske (den biologiske organismen) og substans (det underliggende stoffet). Skillet er grunnen til at han kan la personen følge bevisstheten mens mennesket følger kroppen. De øvrige trippelene er ikke Lockes inndeling.",
    },
    {
      question: "Hva viser Reids offiserparadoks?",
      options: ["At minnerelasjonen ikke er transitiv, mens identitet må være det", "At minner om barndommen er systematisk upålitelige hos voksne", "At kroppslig kontinuitet er et bedre kriterium enn bevissthet", "At en person kan ha to bevisstheter samtidig uten motsigelse"],
      explanation: "Offiseren husker gutten og generalen husker offiseren, men generalen husker ikke gutten — og da bryter minneteorien mot at identitet er transitiv. Innvendingen handler ikke om minnenes pålitelighet, men om relasjonens logiske form.",
    },
    {
      question: "Hva er sirkularitetsinnvendingen mot minneteorien?",
      options: ["At ekte erindring allerede forutsetter at det var jeg som gjorde det", "At minneteorien forklarer identitet ved hjelp av kroppslig kontinuitet", "At minner om minner fører til en uendelig regress uten stoppested", "At teorien forutsetter at alle mennesker har like god hukommelse"],
      explanation: "Å huske å ha gjort noe man ikke gjorde, er ikke å huske, men å ta feil — så identiteten ligger allerede i begrepet «minne». Innvendingen rammer teoriens form, ikke bare dens konsekvenser, og kan derfor ikke besvares ved å justere hvilke minner som kreves.",
    },
    {
      question: "Hvorfor er sirkularitetsinnvendingen dypere enn offiserparadokset?",
      options: ["Fordi den rammer forklaringsformen og ikke bare et enkelt moteksempel", "Fordi den ble formulert tidligere i filosofihistorien enn paradokset", "Fordi den også rammer kroppskriteriet og ikke bare minneteorien", "Fordi den viser at minneteorien gir feil svar i flere ulike tilfeller"],
      explanation: "Offiserparadokset kan besvares ved å bytte direkte minne med overlappende kjeder, men sirkulariteten forblir uansett hvor lang kjeden er, siden hvert ledd fortsatt er et minne. Innvendingen rammer altså ikke et resultat, men selve forklaringen.",
    },
    {
      question: "Hva er minnekjede-forsvaret mot Reid?",
      options: ["At det kreves en ubrutt kjede av overlappende minneforbindelser, ikke direkte minne", "At generalen egentlig husker piskingen, men bare ikke er klar over at han gjør det", "At kroppslig kontinuitet supplerer minnet der minnet svikter helt", "At identitet ikke behøver å være transitiv når det gjelder personer"],
      explanation: "En kjede er transitiv selv om leddene ikke er det, slik «forfar til» er transitiv selv om «far til» ikke er det, og selvmotsigelsen forsvinner. Å oppgi transitiviteten ville vært å oppgi identitetsbegrepet selv, og forsvaret gjør ingenting med sirkulariteten.",
    },
    {
      question: "Hva er kvasi-hukommelse hos Parfit?",
      options: ["Et minne der kravet om at det var jeg som hadde erfaringen, er utelatt", "Et minne som er svakere og mer utydelig enn en vanlig erindring", "Et minne som er skapt kunstig og derfor ikke svarer til noe som skjedde", "Et minne om en erfaring man selv hadde, men i en tidligere livsfase"],
      explanation: "Kvasi-hukommelse krever et tilsynelatende minne, at noen faktisk hadde erfaringen, og riktig årsakssammenheng — men ikke at det var jeg. Nettopp derfor kan begrepet defineres uten å nevne identitet og brukes til å forklare identitet uten sirkel. Styrken på minnet er irrelevant.",
    },
    {
      question: "Hvilket vilkår i definisjonen av kvasi-hukommelse er mest omstridt?",
      options: ["Kravet om at minnet er forårsaket av erfaringen på riktig måte", "Kravet om at det finnes et tilsynelatende minne hos personen", "Kravet om at noen faktisk hadde erfaringen det gjelder", "Kravet om at minnet lar seg gjenkalle uten ytre hjelpemidler"],
      explanation: "Skal årsaksvilkåret utelukke implanterte og tilfeldige minner, må «riktig måte» spesifiseres — og den vanlige spesifiseringen viser til hvordan minner om ens egne erfaringer normalt oppstår, hvilket smugler identiteten inn igjen. De to første vilkårene er uproblematiske.",
    },
    {
      question: "Hva er psykologisk forbindelse hos Parfit?",
      options: ["De direkte båndene, som å q-huske en bestemt hendelse", "Kjeder av overlappende bånd fra tidspunkt til tidspunkt", "Den samlede likheten i personlighet mellom to livsfaser", "Båndet mellom en person og den kroppen personen til enhver tid har"],
      explanation: "Forbindelse er de direkte båndene, og de svekkes over tid — du har svært få direkte bånd til deg selv som femåring. Kjeder av overlappende forbindelser er derimot kontinuitet, som er noe annet. Å blande de to er den vanligste feilen i temaet.",
    },
    {
      question: "Hvorfor er skillet mellom forbindelse og kontinuitet nødvendig?",
      options: ["Fordi kontinuitet er transitiv mens forbindelse ikke er det", "Fordi forbindelse gjelder minner mens kontinuitet gjelder kroppen", "Fordi kontinuitet kan måles objektivt mens forbindelse ikke kan", "Fordi forbindelse gjelder fortiden mens kontinuitet gjelder fremtiden"],
      explanation: "Identitet er transitiv, og en teori bygget på den direkte forbindelsen ville arvet nøyaktig det problemet Reid påviste. Kontinuiteten er transitiv fordi kjeder kan settes sammen, og bare derfor kan den bære identitet. Begge begreper gjelder psykologiske bånd, ikke kroppen.",
    },
    {
      question: "Hva innebærer Parfits reduksjonisme?",
      options: ["At personers eksistens består i upersonlige fysiske og psykologiske fakta", "At personer ikke finnes i det hele tatt, og at all tale om dem bør avskaffes", "At personer kan reduseres til sine kroppslige bestanddeler alene", "At personer finnes, men bare så lenge de er bevisste og våkne"],
      explanation: "Reduksjonismen sier at det ikke finnes noe ytterligere faktum utover de fysiske og psykologiske kjensgjerningene — men personer finnes, slik nasjoner finnes uten at det er noe ved dem utover borgerne og organiseringen. Å tillegge Parfit at personer ikke finnes, er en av de tyngste feiltilskrivningene i temaet.",
    },
    {
      question: "Hva viser delingstilfellet med hjernehalvdelene?",
      options: ["At identiteten blir ubestemt mens den psykologiske kontinuiteten er intakt", "At bare den ene av de to nye personene kan være psykologisk kontinuerlig", "At kroppslig kontinuitet er det eneste kriteriet som gir svar i alle tilfeller", "At begge de nye personene er identiske med den opprinnelige personen"],
      explanation: "Begge kan ikke være deg, bare den ene kan ikke begrunnes, og ingen av dem strider mot at du ville overlevd med bare én halvdel. Parfits konklusjon er at identiteten er ubestemt, men at det ikke gjør noe siden kontinuiteten er der. At begge er identiske med deg, ville brutt transitiviteten.",
    },
    {
      question: "Hva mener Parfit med at identitet ikke er det som betyr noe?",
      options: ["At det vi bryr oss om ved overlevelse, er kontinuiteten, ikke identiteten", "At spørsmålet om personlig identitet er helt uten noen filosofisk interesse", "At vi ikke har noen grunn til å bry oss om vår egen fremtid", "At personlig identitet er en illusjon skapt av hukommelsen"],
      explanation: "I delingstilfeller har vi alt vi rimeligvis bryr oss om — noen fortsetter livet innenfra — selv om identiteten er ubestemt. Konklusjonen er reelt omstridt og skal framstilles som omstridt. Den innebærer verken at spørsmålet er uinteressant eller at vi ikke bør bry oss om fremtiden.",
    },
    {
      question: "Hva er den skarpeste innvendingen mot Parfits konklusjon?",
      options: ["At kontinuitet kan bety noe for overlevelse uten å gjøre det for ansvar", "At psykologisk kontinuitet ikke lar seg beskrive uten å nevne kroppen", "At delingstilfellet strider mot alt vi vet om hjernens oppbygning", "At Parfit selv trakk konklusjonen tilbake i sitt senere forfatterskap"],
      explanation: "To personer som begge er kontinuerlige med gjerningspersonen, kan ikke begge sone dommen, og her ser Lockes spørsmål ut til å overleve Parfits svar. Å avvise delingstilfellet som nevrologisk urealistisk er derimot å omgå premissene i stedet for å ta dem som stipulasjoner.",
    },
    {
      question: "Hvilken lærebok bruker termen «the psychological continuity view»?",
      options: ["Conee og Sider, «Riddles of Existence»", "Kim, «Philosophy of Mind»", "Parfit, «Reasons and Persons»", "Locke, «An Essay Concerning Human Understanding»"],
      explanation: "Termen er Conee og Siders og er navngitt i settene, blant annet i V2016. Ber oppgaven om den, holder det ikke å skrive generelt om psykologisk kontinuitet — det er å bomme på den navngitte teksten. Parfit og Locke eier innholdet, men ikke denne betegnelsen.",
    },
    {
      question: "Hva sier kroppskriteriet om kopieringsstasjonen som destruerer originalen?",
      options: ["At du dør, og at kopien er kvalitativt lik uten å være numerisk deg", "At du overlever, siden kopien er bygget av nøyaktig samme slags atomer", "At spørsmålet ikke har noe svar, siden alle fakta allerede er kjent", "At du overlever bare dersom kopien bygges før originalen destrueres"],
      explanation: "Kroppen ble destruert, og den som våkner har en annen kropp — altså kvalitativ identitet uten numerisk. Dommen er ubehagelig, men konsekvent. At alle fakta er kjent og spørsmålet likevel åpent, er Parfits reduksjonistiske svar, ikke kroppskriteriets.",
    },
    {
      question: "Hva ville Locke sagt om personen som våkner etter kopieringen?",
      options: ["At personen overlever, men at mennesket ikke gjør det", "At både personen og mennesket overlever uendret", "At verken personen eller mennesket overlever prosessen", "At mennesket overlever, men at personen ikke gjør det"],
      explanation: "Bevisstheten kan strekkes bakover til alt du har gjort, og for Locke avgjør bevissthetens rekkevidde hvem personen er. Den biologiske organismen er derimot destruert, og Locke er nøye med å skille de to begrepene. Det er nettopp dette skillet prinsen og skomakeren er laget for å vise.",
    },
    {
      question: "Hva er doblingsargumentet mot de psykologiske kriteriene?",
      options: ["At to like kontinuerlige kopier gjør at kriteriet ikke kan velge mellom dem", "At både personen og mennesket overlever prosessen fullstendig uendret", "At psykologiske kriterier ikke kan skille mellom ekte minner og rene innbilninger", "At to kopier ville hatt ulike kroppslige egenskaper fra første stund"],
      explanation: "Begge kopier er like kontinuerlige med deg, og kriteriet gir da ingen dom, mens kroppskriteriet uanfektet sier at ingen av dem er deg. Dette er samme struktur som i delingstilfellet, og det er de psykologiske kriterienes hardeste utfordring.",
    },
    {
      question: "Hva er funksjonen til prinsen og skomakeren som tankeeksperiment?",
      options: ["Å bryte det vanlige sammenfallet mellom kroppskriteriet og bevissthetskriteriet", "At en kopi alltid vil ha svakere psykologiske bånd bakover enn originalen hadde", "Å bevise at bevissthet kan overføres mellom kropper i praksis", "Å illustrere at sosial status ikke har betydning for personlig identitet"],
      explanation: "I hverdagen peker de to kriteriene alltid samme vei, så vi merker ikke at vi bruker to. Eksperimentet tvinger dem fra hverandre og viser hvilket intuisjonen følger. Det er ikke ment å bevise noe om hva som er teknisk gjennomførbart.",
    },
    {
      question: "Hva er vanlig erindring på Parfits analyse?",
      options: ["Det spesialtilfellet av kvasi-hukommelse der personen er den samme", "Å vise at kroppslig kontinuitet er det kriteriet som folk flest faktisk bruker", "En relasjon som ikke lar seg analysere i enklere bestanddeler", "Det tilfellet av kvasi-hukommelse der årsaksveien er ukjent"],
      explanation: "Den videre relasjonen defineres først, og identiteten kommer inn etterpå som et spesialtilfelle i stedet for som en forutsetning. Det er nettopp denne rekkefølgen som gjør analysen ikke-sirkulær. Styrken på minnet spiller ingen rolle for klassifiseringen.",
    },
    {
      question: "Hva menes med et «ytterligere faktum» i denne debatten?",
      options: ["Et faktum om hvem du er, utover alle fysiske og psykologiske kjensgjerninger", "Et faktum om fremtiden som ennå ikke er blitt bestemt av noe som helst", "Et faktum som bare den aktuelle personen selv kan ha tilgang til", "Et faktum som følger logisk av de fysiske kjensgjerningene alene"],
      explanation: "Det er nettopp et slikt faktum Parfit benekter finnes: er alt annet kjent og spørsmålet fortsatt åpent, er det fordi det ikke er mer å vite. Å forstå uttrykket er nøkkelen til reduksjonismen, og til hvorfor den ikke er det samme som å benekte at personer finnes.",
    },
    {
      question: "Hva er Lockes sterkeste fortrinn framfor kroppskriteriet?",
      options: ["At teorien forklarer hvorfor personlig identitet betyr noe for oss", "At teorien er lettere å etterprøve offentlig i konkrete tilfeller", "At teorien gir et entydig svar også i doblingstilfeller", "At teorien er forenlig med at sjeler finnes som selvstendige substanser"],
      explanation: "Det vi bryr oss om — at det er meg som skal opereres, at det var meg som lovte — handler om at erfaringen er tilgjengelig innenfra, og Locke knytter kriteriet og betydningen sammen. Kroppskriteriet er derimot det som er lettest å etterprøve og det som håndterer dobling best.",
    },
    {
      question: "På hvilke punkter viderefører Parfit Locke?",
      options: ["I at identiteten er psykologisk, og i at teorien må gjøres transitiv", "I at identiteten bærer ansvar, og i at den er et ytterligere faktum", "I at kroppen er irrelevant, og i at identiteten alltid er bestemt", "I at minnet er ufeilbarlig, og i at sjelen kan avvises som kriterium"],
      explanation: "Parfit beholder det psykologiske sporet og reparerer transitivitetsproblemet med kjeder og kvasi-hukommelse. Bruddet kommer på de to andre punktene: han benekter at identitet er et ytterligere faktum, og at den er det som betyr noe. Å sortere videreføring fra brudd er kjernen i en sammenligning.",
    },
    {
      question: "Hvilken feil begår en besvarelse som skriver at Parfit mener personer ikke finnes?",
      options: ["Den forveksler reduksjonisme med eliminativisme", "Den forveksler psykologisk forbindelse med kontinuitet", "Den forveksler kvasi-hukommelse med vanlig erindring", "Den forveksler numerisk identitet med kvalitativ likhet"],
      explanation: "Reduksjonisme sier at personers eksistens består i upersonlige fakta; eliminativisme sier at personer ikke finnes. Parfit forsvarer det første, og analogien hans er nasjoner, som finnes uten noe ytterligere ved dem. De øvrige forvekslingene er andre og separate feil.",
    },
    {
      question: "Hva er den korrekte beskrivelsen av striden om Parfits konklusjon?",
      options: ["Den er levende, med gode grunner på begge sider", "Den er avgjort til Parfits fordel i moderne filosofi", "Den er avgjort mot Parfit av rettslige og praktiske grunner", "Den er en terminologisk uenighet uten reell substans"],
      explanation: "Om identitet er det som betyr noe, er reelt omstridt, og en besvarelse som framstiller saken som avklart, skjuler en levende uenighet bak en falsk konsensus. Uenigheten er heller ikke terminologisk: partene er uenige om hva vi har grunn til å bry oss om.",
    },
    {
      question: "Hvilket skille er det nyttigste grepet i en drøfting av personlig identitet?",
      options: ["Skillet mellom hvem en person er og hvem vi bør behandle som personen", "Skillet mellom minner fra tidlig barndom og minner fra voksen alder", "Skillet mellom kroppens celler og hjernens nervebaner", "Skillet mellom det å huske og det å kunne fortelle om noe"],
      explanation: "Locke slår de to spørsmålene sammen ved å gjøre «person» til et ansvarsbegrep, mens Parfit trekker dem fra hverandre — og hele uenigheten mellom dem kan leses ut av det grepet. Å påpeke skillet er ofte det som løfter en besvarelse fra jevnt godt til godt.",
    },
  ],
  'fil1001-3-1': [
    {
      question: "Hva består kausalitet i ifølge Humes regularitetsteori?",
      options: ["Nærhet i rom og tid, temporal suksesjon og konstant konjunksjon mellom hendelsestypene", "Nærhet i rom og tid, en observerbar nødvendig forbindelse og konstant konjunksjon mellom hendelsene", "Kontrafaktisk avhengighet mellom to hendelser som begge faktisk inntraff i den aktuelle verden", "En kraft som overføres fra den ene hendelsen til den andre ved direkte berøring mellom dem"],
      explanation: "Humes analyse består av tre observerbare vilkår: nærhet, suksesjon og konstant konjunksjon. Forslaget med en observerbar nødvendig forbindelse snur analysen på hodet — nettopp den mener Hume at vi ikke ser. Kontrafaktisk avhengighet er Lewis' analyse, ikke Humes.",
    },
    {
      question: "Hva er det Hume benekter når det gjelder kausalitet?",
      options: ["At vi observerer en nødvendig forbindelse mellom årsak og virkning", "At det finnes årsaksforhold mellom hendelser i den fysiske verden omkring oss", "At vi i det hele tatt har noen idé om nødvendig forbindelse mellom hendelser", "At årsaken kommer før virkningen i tid"],
      explanation: "Hume analyserer kausalitet og benekter at nødvendigheten er noe vi observerer. Han benekter ikke at det finnes årsaker — det er den tyngste feillesningen i temaet — og han benekter heller ikke at vi har ideen om nødvendighet; hele prosjektet hans er å forklare hvor den kommer fra.",
    },
    {
      question: "Hvor kommer ideen om nødvendig forbindelse fra ifølge Hume?",
      options: ["Fra vanen: sinnet går av seg selv fra det ene til det andre etter gjentatt erfaring", "Fra en direkte sansning av den kraften som virker mellom hendelsene når de berører hverandre", "Fra en slutning vi trekker ut fra de naturlovene vi allerede kjenner fra tidligere erfaring", "Fra en medfødt kategori som strukturerer all vår erfaring"],
      explanation: "Hume forklarer ideen psykologisk: gjentakelse skaper en vane, og inntrykket av sinnets egen overgang projiseres ut på verden. En direkte sansning av kraften er nettopp det han benekter at vi har, og forklaringene med naturlover eller medfødte kategorier hører andre posisjoner til.",
    },
    {
      question: "Hva er konstant konjunksjon?",
      options: ["At hendelser av én type i all vår erfaring har vært fulgt av hendelser av en annen type", "At to hendelser inntreffer på nøyaktig samme tidspunkt og på nøyaktig samme sted i rommet", "At virkningen ville uteblitt dersom årsaken ikke hadde inntruffet", "At to hendelser har en felles bakenforliggende årsak som forklarer samvariasjonen mellom dem"],
      explanation: "Konstant konjunksjon er et mønster mellom hendelsestyper: hver gang det ene, så det andre. Formuleringen om hva som ville uteblitt, er Lewis' kontrafaktiske test, og felles årsak er nettopp det som skaper samvariasjon uten årsaksforhold.",
    },
    {
      question: "Hva er problemet med tilfeldige regulariteter for Humes analyse?",
      options: ["De oppfyller alle tre vilkårene uten at det foreligger et årsaksforhold", "De bryter kravet om konstant konjunksjon ved å ha sjeldne, men fullt reelle unntak", "De gjelder bare enkelttilfeller og gir derfor ingen regularitet å bygge på", "De forutsetter en nødvendig forbindelse Hume ikke kan godta"],
      explanation: "Fabrikkfløyta i én by og arbeidsslutt i nabobyen oppfyller nærhet, suksesjon og konstant konjunksjon uten at det ene forårsaker det andre. Poenget er at vilkårene ikke er tilstrekkelige; det er ikke at regulariteten er ufullstendig eller mangler gjentakelse.",
    },
    {
      question: "Hva er en felles årsak?",
      options: ["En tredje faktor som frambringer to hendelser og dermed får dem til å samvariere", "En årsak som deles av to virkninger fordi den ene forårsaker den andre", "En årsak som er nødvendig, men ikke tilstrekkelig, for at virkningen skal inntreffe", "En årsak som virker på flere ulike tidspunkter gjennom en lang kjede av mellomliggende ledd"],
      explanation: "Lufttrykket frambringer både barometerfallet og uværet, og det er derfor de to samvarierer uten at det ene forårsaker det andre. Forslaget om at den ene virkningen forårsaker den andre, er nettopp det felles årsak skal forklare bort.",
    },
    {
      question: "Hvorfor har regularitetsteorien et retningsproblem?",
      options: ["Konstant konjunksjon er symmetrisk, så rekkefølgen må legges inn som en egen regel", "Konstant konjunksjon utelukker at årsaken kan komme før virkningen", "Konstant konjunksjon gjelder bare i de tilfellene der virkningen kommer først i rekkefølgen", "Konstant konjunksjon kan ikke observeres uten at retningen allerede er kjent på forhånd"],
      explanation: "Et mønster mellom A og B består like fullt lest baklengs, så Hume må stipulere at årsaken kommer først. Kritikken er at retningen dermed postuleres i stedet for å forklares — ikke at regulariteten utelukker eller snur rekkefølgen.",
    },
    {
      question: "Hva gjelder Humes induksjonsskepsis?",
      options: ["Vår kunnskap om årsaksforhold, ikke spørsmålet om årsaker finnes", "Spørsmålet om kausale forhold overhodet eksisterer ute i naturen selv", "Om nærhet i rom og tid virkelig er et nødvendig krav for at noe skal kalles en årsak", "Om konstant konjunksjon i det hele tatt kan observeres i enkelttilfeller"],
      explanation: "Induksjonsskepsisen sier at slutningen fra observerte mønstre til framtiden ikke lar seg begrunne uten sirkularitet. Det er et epistemisk poeng om hva vi kan vite, og å gjøre det om til en påstand om at årsaker ikke finnes, er en presisjonsfeil.",
    },
    {
      question: "Hva er Humes andre definisjon av årsak, og hvorfor er den viktig?",
      options: ["Den er kontrafaktisk, og Lewis bygger analysen sin på nettopp den", "Den er regularitetsbasert, og Lewis forkaster nettopp den", "Den er psykologisk, og den forklarer hvorfor vi tror på nødvendighet", "Den er teologisk, og den knytter kausalitet til en gudgitt orden i naturen"],
      explanation: "Humes andre formulering sier at hadde den første hendelsen ikke vært, ville den andre aldri eksistert. Den er kontrafaktisk, og det er den Lewis gjør til hele analysen sin — derfor er Lewis Humes arvtaker og ikke bare hans motstander.",
    },
    {
      question: "Hva vil det si at e er kausalt avhengig av c hos Lewis?",
      options: ["At begge inntraff, og at e ville uteblitt dersom c ikke hadde inntruffet", "At hendelser av c-typen alltid har vært fulgt av hendelser av e-typen", "At c gjør e vesentlig mer sannsynlig enn e ellers ville vært", "At c og e begge inntreffer i alle mulige verdener der den ene inntreffer"],
      explanation: "Kausal avhengighet krever både at hendelsene faktisk inntraff og at den kontrafaktiske testen slår ut. Forslaget om hendelsestyper er Humes regularitetsanalyse, og sannsynlighetsforslaget er en helt annen teori om kausalitet.",
    },
    {
      question: "Hvorfor definerer Lewis kausalitet som kjeder av kausal avhengighet?",
      options: ["Fordi virkningen ikke alltid avhenger direkte av årsaken", "Fordi kausalrelasjonen må være symmetrisk for å kunne analyseres", "Fordi enhver hendelse i praksis har flere enn én årsak bak seg i tid", "Fordi kontrafaktiske setninger mangler bestemte sannhetsverdier"],
      explanation: "Kjedegrepet er innført for tilfeller der den direkte avhengigheten mangler, slik som ved foregripelse. Det er ikke motivert av symmetri eller av at hendelser har mange årsaker, og Lewis mener nettopp at kontrafaktiske setninger har bestemte sannhetsverdier.",
    },
    {
      question: "Hvordan vurderes en kontrafaktisk setning i Lewis' analyse?",
      options: ["Ved å se på de verdenene som ligner mest på vår blant dem der årsaken uteblir", "Ved å se på alle mulige verdener der årsaken uteblir", "Ved å se på hvor ofte virkningen har uteblitt i vår egen erfaring", "Ved å se på hvilke naturlover som gjelder i den aktuelle verden alene"],
      explanation: "Setningen er sann dersom virkningen uteblir i de nærmeste verdenene der årsaken uteblir. Å se på alle verdener uten utvalg ville gjort nesten alle slike setninger usanne, og å telle erfaringer er regularitetsteoriens metode.",
    },
    {
      question: "Hvilket fortrinn har den kontrafaktiske analysen framfor regularitetsteorien når det gjelder barometeret?",
      options: ["Den gir riktig svar av seg selv, siden stormen ville kommet uansett", "Den krever flere observasjoner før den avgjør om det er et årsaksforhold", "Den legger til en regel om felles årsaker som utelukker slike tilfeller", "Den nekter å behandle instrumenter som mulige årsaker i det hele tatt"],
      explanation: "Testen «hadde nåla stått stille, ville stormen kommet likevel» avslører at det ikke er noe årsaksforhold, uten at teorien trenger noen tilleggsregel. At den skulle kreve flere observasjoner eller innføre en egen regel om felles årsaker, er nettopp det som gjør analysen bedre at den ikke gjør.",
    },
    {
      question: "Hva er asymmetrien i kontrafaktisk avhengighet?",
      options: ["Virkninger avhenger av sine årsaker, men årsaker avhenger ikke av sine virkninger", "Årsaker avhenger av sine virkninger, men ikke omvendt", "Både årsak og virkning avhenger gjensidig av hverandre", "Avhengigheten forsvinner når årsak og virkning er nære hverandre i tid"],
      explanation: "Hadde brannen uteblitt, hadde det ikke vært røyk, mens en verden uten røyk ikke er en verden uten brann. Denne skjevheten lar Lewis utlede kausalitetens retning i stedet for å postulere den, slik regularitetsteorien må.",
    },
    {
      question: "Hva kjennetegner foregripelse (preemption)?",
      options: ["Bare den ene av to potensielle årsaker gjør jobben; den andre står i reserve", "Begge årsakene virker, og hver av dem er alene tilstrekkelig", "Ingen av de to årsakene er alene tilstrekkelig for virkningen", "Virkningen inntreffer tidligere enn den årsaken som faktisk frambringer den"],
      explanation: "Ved foregripelse trer reserveårsaken aldri i funksjon — som når den ene skarpskytteren holder igjen. Beskrivelsen der begge faktisk virker, er overdeterminering, og det å bytte om de to er den hyppigste feilen i kausalitetsoppgaver.",
    },
    {
      question: "Hva kjennetegner overdeterminering?",
      options: ["To årsaker virker faktisk, og hver av dem er alene tilstrekkelig for virkningen", "To potensielle årsaker foreligger, men bare den ene rekker å virke før virkningen inntreffer", "Virkningen inntreffer uten at noen av årsakene faktisk virker", "Den ene årsaken hindrer den andre i å kunne virke i det hele tatt"],
      explanation: "Ved overdeterminering gjør begge årsakene jobben samtidig, slik som to kuler som treffer dødelig i samme øyeblikk. At bare den ene rekker å virke, er foregripelse — der står den andre i reserve.",
    },
    {
      question: "Hvorfor rammer foregripelse den kontrafaktiske analysen?",
      options: ["Virkningen ville inntruffet uansett, så den er ikke kausalt avhengig av den faktiske årsaken", "Virkningen ville uteblitt uansett, så ingen av årsakene kan ha frambrakt den", "De to årsakene inntreffer samtidig, og analysen kan ikke skille dem fra hverandre verken i tid eller i styrke", "Årsaken kommer etter virkningen, og analysen krever at årsaken kommer først"],
      explanation: "Reserveårsaken sikrer at virkningen kommer uansett, så den kontrafaktiske testen frikjenner den årsaken som faktisk virket. Samtidighet er kjennetegnet på overdeterminering, ikke på foregripelse.",
    },
    {
      question: "Hva er forskjellen på tidlig og sen foregripelse?",
      options: ["Ved sen foregripelse er reserveårsaken aktiv helt fram til virkningen inntreffer", "Ved sen foregripelse settes reserveårsaken i gang først etter at virkningen har inntruffet", "Ved sen foregripelse er det ingen reserveårsak, bare én faktisk årsak", "Ved sen foregripelse er de to årsakene av samme type, ved tidlig av ulik type"],
      explanation: "Skillet gjelder om reserveårsaken ble slått ut på forhånd eller først ble overflødig i det øyeblikket virkningen inntraff. Det er avgjørende fordi Lewis' kjedeløsning bare virker i det første tilfellet.",
    },
    {
      question: "Hva går Lewis' kjedeløsning på foregripelse ut på?",
      options: ["En mellomhendelse settes inn, og virkningen avhenger av den, som avhenger av årsaken", "Kravet om kausal avhengighet svekkes til et krav om høy sannsynlighet for virkningen", "Reserveårsaken regnes som en medårsak sammen med den faktiske årsaken", "Kausalitetens retning utledes på nytt fra rekkefølgen i tid"],
      explanation: "Løsningen utnytter at Lewis definerte kausalitet som en kjede: kula halvveis i luften er mellomleddet som gjenoppretter avhengigheten. Den svekker ikke kravet til sannsynlighet og gjør ikke reserveårsaken til medårsak.",
    },
    {
      question: "Hvorfor svikter kjedeløsningen ved sen foregripelse?",
      options: ["Det finnes ingen mellomhendelse hvis bortfall ville hindret virkningen", "Reserveårsaken er allerede slått ut på forhånd, slik at hele kjeden blir overflødig", "Kjeden blir for lang til at avhengigheten kan overføres gjennom den", "Virkningen er i slike tilfeller ikke en hendelse i Lewis' forstand"],
      explanation: "Er reserveårsaken aktiv helt fram, tar den over uansett hvilket mellomledd du fjerner, og kjeden kan ikke bygges. At reserveårsaken er slått ut på forhånd, er nettopp kjennetegnet på tidlig foregripelse, der løsningen virker.",
    },
    {
      question: "Hva er et transitivitetsbrudd?",
      options: ["A forårsaker B og B forårsaker C, men A forårsaker likevel ikke C", "A forårsaker B, men B forårsaker ingenting videre i den kjeden som følger etter", "A og B forårsaker C sammen, uten at noen av dem gjør det alene", "C inntreffer før A, slik at kjeden går i motsatt retning av tiden"],
      explanation: "Steinspranget utløser bremsingen, bremsingen redder syklisten, men steinspranget forårsaket ikke redningen. Slike tilfeller rammer Lewis særlig hardt, fordi kjedeløsningen på foregripelse forutsetter at kausalitet er transitiv.",
    },
    {
      question: "Hva går Lewis' senere påvirkningsanalyse ut på?",
      options: ["Variasjoner i årsakens tidspunkt, sted og måte svarer til variasjoner i virkningen", "Årsaken må gjøre virkningen mer sannsynlig enn den ellers ville vært", "Årsaken må være både nødvendig og tilstrekkelig for virkningen", "Årsaken må stå i konstant konjunksjon med virkningen over et stort antall tilfeller"],
      explanation: "I påvirkningsanalysen er det mønsteret av små variasjoner som avgjør, og det håndterer sen foregripelse: bare den faktisk virkende årsaken påvirker detaljene i virkningen. Sannsynlighetskravet og konstant konjunksjon tilhører andre teorier.",
    },
    {
      question: "Hva betyr premissdisiplin i analysen av et moteksempel?",
      options: ["Premissene leses som stipulasjoner og ikke som antakelser om hva som pleier å skje", "Premissene må testes mot statistikk og alminnelig erfaring før de kan brukes i analysen", "Premissene kan endres dersom de gjør analysen unødig komplisert", "Premissene må formuleres i ikke-modale termer for å kunne analyseres"],
      explanation: "Er det stipulert at den andre skytteren ville truffet, kan du ikke svare at han sannsynligvis ville bommet. Å omgå premissene i stedet for å analysere dem er den vanligste måten å miste poeng på i tankeeksperimentoppgaver.",
    },
    {
      question: "Hva mener Davidson at årsaker er?",
      options: ["Begivenheter, altså hendelser med tidspunkt og sted", "Aktører som selv bringer fram sine egne handlinger uten noen mellomliggende hendelse", "Egenskaper ved gjenstander på et bestemt tidspunkt og sted", "Sanne beskrivelser av det som faktisk fant sted på stedet"],
      explanation: "For Davidson holder kausalrelasjonen mellom hendelser: kortslutningen, ikke elektrikeren, forårsaket brannen. At aktører kan være årsaker, er nettopp aktørkausaliteten han skriver imot, og beskrivelser hører til forklaringssiden.",
    },
    {
      question: "Hva vil det si at kausalrelasjonen er ekstensjonell?",
      options: ["Den er ufølsom for hvilken sann beskrivelse vi gir de to hendelsene", "Den holder mellom hendelsestyper og ikke mellom enkeltstående tilfeller", "Den strekker seg utover i tid gjennom lange kjeder av mellomledd", "Den gjelder bare mellom hendelser som er rent fysiske"],
      explanation: "Er det sant at kortslutningen forårsaket brannen, forblir det sant uansett hvilket sant navn vi gir hendelsen. Det er nettopp fordi relasjonen holder mellom hendelsene selv og ikke mellom beskrivelsene av dem.",
    },
    {
      question: "Hva er forskjellen på kausalrelasjon og kausal forklaring hos Davidson?",
      options: ["Forklaringen er følsom for beskrivelse; relasjonen er det ikke", "Relasjonen er følsom for beskrivelse; forklaringen er det ikke", "Begge er følsomme for hvordan hendelsene beskrives, men på hver sin måte og i ulik grad", "Ingen av dem er følsomme for beskrivelse, bare for tidsrekkefølge"],
      explanation: "«Hendelsen granskeren nevner først» er en sann beskrivelse av årsaken, men den forklarer ingenting. Skillet lar Davidson holde fast på at kausalforholdet er objektivt, samtidig som bare noen beskrivelser er opplysende.",
    },
    {
      question: "Hva er aktørkausalitet?",
      options: ["Synet at en vedvarende ting, og ikke en hendelse, kan være årsak til en handling", "Synet at handlinger forårsakes av personens egne ønsker og oppfatninger om situasjonen", "Synet at bare menneskelige handlinger kan telle som ekte årsaker", "Synet at handlinger ikke har årsaker i det hele tatt"],
      explanation: "Aktørkausalitet lar personen selv, ikke en hendelse i henne, være årsaksleddet. At handlinger forårsakes av ønsker og oppfatninger, er derimot Davidsons egen tese om at grunner er årsaker, altså en form for begivenhetskausalitet.",
    },
    {
      question: "Hva sier Davidsons tese om at grunner er årsaker?",
      options: ["Å handle av en grunn er å ha ønsker og oppfatninger som forårsaker handlingen", "Grunner er noe helt annet enn årsaker og hører til en egen, ikke-kausal forklaringsform", "Grunner forårsaker handlinger bare når aktøren er bevisst dem", "Grunner er de eneste årsakene som finnes i naturen"],
      explanation: "Tesen gjør handlingsforklaringer til kausalforklaringer og fjerner behovet for aktørkausalitet. Synet om at grunner tilhører en egen, ikke-kausal forklaringsform, er nettopp det Davidson argumenterer imot.",
    },
    {
      question: "Hva er anomalisk monisme?",
      options: ["Hver mentale hendelse er en fysisk hendelse, men det finnes ingen strenge psyko-fysiske lover", "Mentale hendelser lar seg redusere til fysiske ved hjelp av broprinsipper som knytter nivåene sammen", "Mentale og fysiske hendelser tilhører to atskilte substanser som ikke overlapper med hverandre", "Mentale hendelser finnes, men har ingen fysiske virkninger i det hele tatt, verken på atferd eller kropp"],
      explanation: "Anomalisk monisme er en ikke-reduktiv fysikalisme: identitet på enkelthendelsesnivå uten strenge lover som knytter det mentale til det fysiske. Reduksjon ved broprinsipper er nettopp det posisjonen avviser, og derfor er det galt å kalle Davidson reduksjonist.",
    },
    {
      question: "Hvor bygger Lewis videre på Hume, og hvor bryter han med ham?",
      options: ["Han viderefører den kontrafaktiske definisjonen og bryter med regularitetsdefinisjonen", "Han viderefører regularitetsdefinisjonen og bryter med den kontrafaktiske formuleringen", "Han bryter med begge definisjonene og starter analysen på nytt", "Han viderefører begge definisjonene og gjør dem ekvivalente"],
      explanation: "Hume gir to definisjoner som ikke er ekvivalente, og Lewis gjør den andre, kontrafaktiske til hele analysen sin. Å framstille de to som rene motstandere er en vanlig feil i sammenligningsoppgaven, og H2024 ber nettopp om koblingen.",
    },
    {
      question: "Hvilken ontologisk pris betaler den kontrafaktiske analysen som regularitetsteorien slipper?",
      options: ["En forpliktelse på mulige verdener og en nærhetsordning mellom dem", "En forpliktelse på observerbare krefter som virker mellom hendelsene i naturen selv", "En forpliktelse på at alle årsaksforhold er transitive uten unntak", "En forpliktelse på at hver virkning har nøyaktig én årsak"],
      explanation: "For å vurdere kontrafaktiske setninger trenger Lewis mulige verdener og en ordning etter likhet, og den ordningen må kunne beskrives uten å bruke kausalitet. Regularitetsteorien bruker bare erfaring og vane og slipper hele apparatet.",
    },
    {
      question: "Hvilken lærebok er pensumets faste framstilling av kausalitet og fri vilje i dette emnet?",
      options: ["Conee og Sider, «Riddles of Existence»", "Kim, «Philosophy of Mind»", "Hume, «Undersøkelse om menneskelig forstand»", "Lewis, «On the Plurality of Worlds»"],
      explanation: "Conee og Siders lærebok er metafysikkdelens ryggrad, og termene deres er sitert direkte i oppgavesettene. Kims lærebok dekker bevissthetsfilosofien, mens Hume og Lewis er primærkilder og ikke lærebøker.",
    },
  ],
  'fil1001-3-2': [
    {
      question: "Hva vil det si at en påstand er nødvendig, analysert med mulige verdener?",
      options: ["At den er sann i alle mulige verdener, uten et eneste unntak", "At den er sann i minst én mulig verden ved siden av vår egen verden", "At den er sann i den aktuelle verden og i alle verdener som ligner den", "At den er sann uansett hva vi måtte komme til å oppdage om verden"],
      explanation: "Nødvendighet analyseres som sannhet i alle mulige verdener. Sannhet i minst én verden er analysen av mulighet, og innskrenkningen til verdener som ligner vår, hører hjemme i vurderingen av kontrafaktiske setninger, ikke i analysen av nødvendighet.",
    },
    {
      question: "Hva vil det si at en påstand er mulig, analysert med mulige verdener?",
      options: ["At den er sann i minst én mulig verden, uansett hvilken", "At den er sann i alle verdener der emnet i det hele tatt finnes", "At vi ikke vet noe som utelukker at den er sann i den aktuelle verden", "At den er forenlig med naturlovene slik de faktisk er i vår verden"],
      explanation: "Mulighet er sannhet i minst én verden. Å si at vi ikke vet noe som utelukker den, er epistemisk mulighet — en påstand om kunnskapen vår — og forenlighet med naturlovene er fysisk mulighet, som er snevrere enn den metafysiske.",
    },
    {
      question: "Hvorfor sier «nødvendigvis p» og «ikke mulig at ikke-p» det samme?",
      options: ["Er p sann overalt, finnes det ingen verden der p er usann", "Er p sann et sted, er p også sann alle andre steder", "Er p mulig, er p også nødvendig så lenge p faktisk er sann hos oss", "Er p usann et sted, er p likevel nødvendig i alle de øvrige verdenene"],
      explanation: "De to operatorene er hverandres speilbilder gjennom negasjon: full utbredelse utelukker ethvert unntak. De øvrige forslagene ville gjort mulighet og nødvendighet til det samme begrepet, og da forsvant hele skillet analysen er laget for.",
    },
    {
      question: "Hva er en kontingent påstand?",
      options: ["En påstand som er sann, men som kunne ha vært usann", "En påstand som er usann, men som kunne ha vært sann", "En påstand som verken er sann eller usann før vi har undersøkt saken nærmere", "En påstand som er sann i alle verdener som ligner vår"],
      explanation: "Kontingens er sannhet uten nødvendighet: sant her, usant i minst én annen verden. At du tok toget 07.42, er kontingent. Skillet mellom nødvendig og kontingent er det grunnleggende modale skillet.",
    },
    {
      question: "Hva er en analytisk sannhet?",
      options: ["En påstand som er sann i kraft av hva ordene betyr", "En påstand som er sann i kraft av hvordan verden faktisk er", "En påstand som følger av naturlovene slik de gjelder i den aktuelle verden", "En påstand som bare kan bekreftes gjennom erfaring og forsøk"],
      explanation: "«Ingen ungkar er gift» er sann fordi ordene betyr det de betyr. At påstanden skulle hvile på verdens innretning eller på naturlovene, ville gjort den til henholdsvis en empirisk sannhet og en fysisk nødvendighet.",
    },
    {
      question: "Hva kjennetegner metafysisk nødvendighet?",
      options: ["Det som ikke kunne vært annerledes, men som ikke uten videre kan avgjøres på forhånd", "Det som følger av logikkens form alene og derfor ikke krever noen kunnskap om verden", "Det som følger av naturlovene slik de faktisk er i den verdenen vi befinner oss i", "Det som er sant i kraft av hva ordene i påstanden allerede betyr for oss"],
      explanation: "At vann er H₂O regnes som metafysisk nødvendig, men ble oppdaget gjennom kjemi. Kategorien skiller seg dermed fra den logiske, den fysiske og den analytiske, og den er nettopp det H2019-oppgaven spør om.",
    },
    {
      question: "Hvorfor er fysisk nødvendighet svakere enn metafysisk nødvendighet?",
      options: ["Vi kan beskrive verdener med andre naturlover uten å motsi oss selv", "Vi kan ikke observere naturlovene direkte, bare virkningene av dem omkring oss", "Naturlovene endrer seg over tid, mens metafysiske sannheter står fast for alltid", "Fysiske sannheter er statistiske, metafysiske er unntaksfrie"],
      explanation: "Det fysisk nødvendige holder i alle verdener med våre naturlover, men ikke i alle mulige verdener — en verden med andre lover er beskrivbar uten selvmotsigelse. Poenget gjelder utbredelse, ikke hvor godt vi kan observere eller måle lovene.",
    },
    {
      question: "Hva er epistemisk mulighet?",
      options: ["At vi ikke vet noe som utelukker at påstanden er sann", "At påstanden er sann i minst én mulig verden", "At påstanden er forenlig med naturlovene slik de faktisk gjelder hos oss", "At påstanden er sann, men bare kan bekreftes gjennom erfaring og undersøkelse"],
      explanation: "«Nøklene kan ligge i bilen» sier noe om kunnskapstilstanden min, ikke om verden. Før vi visste hva vann er, var det epistemisk mulig at vann ikke var H₂O, uten at det noen gang var metafysisk mulig — og det er nettopp denne forvekslingen som er fellen.",
    },
    {
      question: "Hva vil det si at en sannhet er a posteriori?",
      options: ["At den bare kan kjennes gjennom erfaring og undersøkelse", "At den kan kjennes uavhengig av all erfaring", "At den er sann i alle mulige verdener uten et eneste unntak noe sted", "At den er sann i den aktuelle verden, men usann i minst én annen verden"],
      explanation: "A posteriori er et epistemisk begrep om hvordan vi får vite noe, ikke et modalt begrep om utbredelse. Poenget i modalitetskapitlet er nettopp at de to skillene krysser hverandre: noen nødvendige sannheter kjennes bare a posteriori.",
    },
    {
      question: "Hva hevder Lewis' modale realisme om mulige verdener?",
      options: ["De er konkrete og like virkelige som vår, bare kausalt og romlig isolerte", "De er abstrakte representasjoner av måter ting kunne ha vært på hos oss", "De er fjerne deler av vårt eget univers som vi ennå ikke har observert", "De er tenkte konstruksjoner uten noen form for eksistens utenfor tanken"],
      explanation: "Konkretheten er hele poenget hos Lewis, og å kalle verdenene abstrakte er den hyppigste feiltilskrivningen i temaet — det er nettopp ersatzistens syn. Verdenene er heller ikke fjerne steder i vårt univers; de er kausalt isolerte fra oss.",
    },
    {
      question: "Hva er Lewis' egen begrunnelse for modal realisme?",
      options: ["Teoretisk nytte: postulatet lar oss analysere modalitet i ikke-modale termer", "Intuisjon: det virker umiddelbart innlysende at slike verdener må finnes et sted", "Erfaring: vi observerer indirekte virkninger av de andre verdenene i vår egen", "Autoritet: analysen følger av hvordan modallogikken allerede er bygget opp"],
      explanation: "Lewis argumenterer som man argumenterer for mengder i matematikken: postuler det som gir best samlet teori. Argumentet er uttrykkelig ikke intuitivt — han vet at postulatet strider mot intuisjonen, og det er nettopp poenget i «incredulous stare»-innvendingen.",
    },
    {
      question: "Hva betyr det at «aktuell» er et indeksikalsk ord hos Lewis?",
      options: ["Det plukker ut talerens egen verden, slik «her» plukker ut talerens sted", "Det utpeker den ene verdenen som er mer virkelig enn alle de andre verdenene", "Det betegner den verdenen som inneholder flest ting av dem som kunne finnes", "Det brukes bare om verdener som ligner tilstrekkelig mye på vår egen verden"],
      explanation: "Hver verden er aktuell for sine egne innbyggere, akkurat som hvert sted er «her» for den som står der. Grepet er nødvendig for Lewis: han benekter nettopp at vår verden har noen særstilling framfor de andre.",
    },
    {
      question: "Hva sier motstykketeorien?",
      options: ["Ingen ting finnes i mer enn én verden; det som representerer deg, ligner deg", "Hver ting finnes i alle de verdenene der den overhodet kunne ha eksistert", "Hver ting har nøyaktig ett motstykke i hver eneste av de mulige verdenene", "Ting i andre verdener er identiske med tingene her, bare med andre egenskaper"],
      explanation: "Gitt konkrete, isolerte verdener kan ikke én og samme ting befinne seg i flere av dem, så «du kunne handlet annerledes» gjøres sann av et motstykke. Nettopp derfor rammer innvendingen om at motstykket strengt tatt ikke er deg.",
    },
    {
      question: "Hva er «incredulous stare»-innvendingen mot Lewis?",
      options: ["Det vantro blikket: prisen i form av uendelig mange universer føles uakseptabel", "En påvisning av at Lewis' analyse av modalitet inneholder en logisk selvmotsigelse", "En påvisning av at modal realisme gjør alle kontrafaktiske setninger usanne", "Et argument for at mulige verdener må være abstrakte for å kunne brukes i analyser"],
      explanation: "Innvendingen er en registrering av ontologisk kostnad, ikke en påvist selvmotsigelse — og Lewis svarte selv at et blikk ikke er et argument. Det er nettopp derfor en god besvarelse også tar med en hardere innvending.",
    },
    {
      question: "Hva er den hardeste innvendingen mot motstykketeorien?",
      options: ["Motstykket ditt er ikke deg, så teorien ser ut til å ha byttet emne", "Motstykker kan ikke identifiseres uten at vi allerede vet hva som er mulig", "Motstykker finnes bare i verdener som ligner vår, og det er for få verdener", "Motstykker er abstrakte objekter, og abstrakte objekter kan ikke handle"],
      explanation: "Når vi sier at du kunne handlet annerledes, mener vi noe om deg, ikke om en fremmed i et utilgjengelig univers. Innvendingen er tyngre enn prisinnvendingen fordi den gjelder innholdet i analysen og ikke bare kostnaden.",
    },
    {
      question: "Hva hevder aktualismen?",
      options: ["Bare den aktuelle verden er konkret; alt som finnes, finnes i den", "Alle mulige verdener er like konkrete, men bare vår er tilgjengelig for oss", "Modale påstander er verken sanne eller usanne, siden de ikke beskriver noe", "Bare den aktuelle verden finnes, og modale påstander er derfor alltid usanne"],
      explanation: "Aktualisten benekter ikke at modale påstander kan være sanne; han benekter at sannheten deres krever andre konkrete universer. Forslaget om at modale påstander alltid er usanne, ville gjort hele analysen umulig og er ingen aktualistisk posisjon.",
    },
    {
      question: "Hva er ersatzisme?",
      options: ["Mulige verdener er abstrakte representasjoner, typisk maksimalt konsistente beskrivelser", "Mulige verdener er konkrete universer som er kausalt isolerte fra hverandre", "Mulige verdener er de delene av vårt eget univers vi ennå ikke har utforsket", "Mulige verdener er framtidige tilstander den aktuelle verden ennå kan komme i"],
      explanation: "Navnet kommer av det tyske ordet for erstatning: verdenene erstattes med abstrakte objekter. Beskrivelsen med konkrete, isolerte universer er Lewis' modale realisme, altså motposisjonen.",
    },
    {
      question: "Hva går sirkularitetsinnvendingen mot ersatzismen ut på?",
      options: ["«Konsistent» ser ut til å bety «kunne vært sann», altså mulig", "«Abstrakt» ser ut til å bety «ikke-eksisterende», altså ingenting i det hele tatt", "«Maksimal» ser ut til å bety «uendelig», og uendelige beskrivelser er umulige", "«Representasjon» forutsetter et sinn, og sinn finnes ikke i alle verdener"],
      explanation: "Ersatzisten forklarer mulighet ved hjelp av konsistente beskrivelser, men konsistens ser ut til å måtte forstås modalt — og da er modalitet brukt i analysen av modalitet. Utveien er å definere konsistens rent logisk, men da blir begrepet for vidt.",
    },
    {
      question: "Hva er kostnaden ved å definere konsistens rent logisk?",
      options: ["Begrepet blir for vidt: «helt rød og helt grønn samtidig» er ingen formell selvmotsigelse", "Begrepet blir for snevert: bare matematiske sannheter vil telle som konsistente da", "Begrepet blir umulig å anvende, siden logisk form ikke kan avgjøres for beskrivelser", "Begrepet blir avhengig av hvilket språk beskrivelsen tilfeldigvis er formulert i"],
      explanation: "Rent logisk konsistens slipper gjennom beskrivelser som ikke svarer til noen mulig situasjon, og da forklarer ersatzismen for mye. Skal han stramme inn, må han tilbake til noe som ser modalt ut, og sirkulariteten er tilbake.",
    },
    {
      question: "Hva sier tesen om nødvendig identitet?",
      options: ["Er x identisk med y, er x nødvendigvis identisk med y", "Er x nødvendigvis identisk med y, må identiteten være kjent på forhånd", "Er x kvalitativt lik y, er x også numerisk identisk med y i alle verdener", "Er x identisk med y i vår verden, kan x likevel være noe annet i andre verdener"],
      explanation: "Argumentet går via at alt er nødvendigvis identisk med seg selv, pluss Leibniz' lov. At identiteten ble oppdaget, er en kjensgjerning om vår kunnskap og ikke om tingen — og forslaget om at x kunne vært noe annet, er nettopp det tesen benekter.",
    },
    {
      question: "Hva er en rigid designator?",
      options: ["En betegnelse som betegner det samme i alle verdener der gjenstanden finnes", "En betegnelse som brukes på nøyaktig samme måte av alle språkbrukere i et samfunn", "En betegnelse som beskriver gjenstandens essensielle egenskaper på en presis måte", "En betegnelse som bare kan brukes om gjenstander som finnes i den aktuelle verden"],
      explanation: "Egennavn er rigide, mens de fleste beskrivelser ikke er det: «den lyseste planeten på morgenhimmelen» kunne betegnet en annen planet. Skillet forklarer hvorfor tesen om nødvendig identitet ikke gjør slike beskrivelser til nødvendige sannheter.",
    },
    {
      question: "Hvilket premiss i argumentet for nødvendig identitet er mest naturlig å angripe?",
      options: ["At «å være nødvendigvis identisk med x» er en ekte egenskap Leibniz' lov gjelder for", "At alt er nødvendigvis identisk med seg selv, altså at x nødvendigvis er x", "At identiske ting deler alle egenskaper, altså Leibniz' lov i vanlig retning", "At identitet i det hele tatt er en relasjon som kan uttrykkes i modale termer"],
      explanation: "Kritikken går på at modale uttrykk ikke oppfører seg som vanlige predikater, og at slutningen glir mellom nødvendighet tilskrevet en ting og nødvendighet tilskrevet en påstand. De to andre premissene regnes som langt vanskeligere å bestride.",
    },
    {
      question: "Hvorfor er steget fra tenkelighet til mulighet omstridt?",
      options: ["Tenkelighet er et faktum om vår forestillingsevne, mulighet et faktum om verden", "Tenkelighet gjelder bare påstander, mens mulighet bare gjelder enkeltgjenstander", "Tenkelighet forutsetter mulige verdener, mens mulighet kan analyseres uten dem", "Tenkelighet er alltid usikker, mens mulighet alltid kan avgjøres ved observasjon"],
      explanation: "Vi har forestilt oss ting som viste seg umulige, og oversett muligheter vi ikke klarte å forestille oss. Nettopp derfor er dette steget angrepspunktet i både Kripkes argument og zombieargumentet senere i boka.",
    },
    {
      question: "Hvilken lærebok gir pensumets faste framstilling av modalitetsdebatten i dette emnet?",
      options: ["Conee og Sider, «Riddles of Existence»", "Kim, «Philosophy of Mind», som er bevissthetsfilosofiens lærebok i emnet", "Kripke, «Naming and Necessity», som er en primærtekst og ikke en lærebok", "Lewis, «On the Plurality of Worlds», som er en primærtekst og ikke en lærebok"],
      explanation: "Conee og Siders lærebok er metafysikkdelens ryggrad, og termene deres siteres direkte i oppgavesettene. Kripke og Lewis leses som primærtekster, og Kims lærebok hører til bevissthetsfilosofien.",
    },
  ],
  'fil1001-3-3': [
    {
      question: "Hva hevder determinismen?",
      options: ["Verdens tilstand pluss naturlovene fastlegger nøyaktig én mulig fortsettelse", "Alt som skjer, skjer uansett hva vi måtte foreta oss for å hindre eller fremme det", "Alt som skjer, er forutsigbart for den som kjenner nok av naturlovene", "Alt som skjer, har en årsak som selv er en fri handling fra en aktør"],
      explanation: "Determinismen er en tese om hva som følger av tilstand og lover. At utfallet kommer uansett hva vi gjør, er fatalisme — en helt annen påstand — og forutsigbarhet er et spørsmål om hva noen kan vite, ikke om hva som følger.",
    },
    {
      question: "Hva er forskjellen på determinisme og fatalisme?",
      options: ["Determinismen sier at utfallet kommer gjennom det du gjør, fatalismen uansett hva du gjør", "Determinismen sier at utfallet er tilfeldig, mens fatalismen sier at det er fastlagt på forhånd", "Determinismen gjelder bare fysiske hendelser, mens fatalismen gjelder alle hendelser", "Determinismen gjelder framtiden, mens fatalismen bare gjelder fortiden og nåtiden"],
      explanation: "van Inwagens skille er at handlingene dine er ledd i kjeden under determinismen, ikke omgått av den. Derfor følger det ikke av determinismen at det er meningsløst å anstrenge seg — den slutningen er en ren feilslutning.",
    },
    {
      question: "Hva slags nødvendighet er determinismen en tese om?",
      options: ["Fysisk nødvendighet, altså det som følger av naturlovene slik de faktisk er", "Metafysisk nødvendighet, altså det som holder i alle mulige verdener overhodet", "Logisk nødvendighet, altså det som følger av logikkens form helt uavhengig av verden", "Analytisk nødvendighet, altså det som er sant i kraft av hva ordene våre betyr"],
      explanation: "Determinismen sier at fortsettelsen følger av lovene slik de faktisk er, og fysisk nødvendighet er svakere enn metafysisk. En verden med andre naturlover er beskrivbar uten selvmotsigelse, og determinismen sier ingenting om slike verdener.",
    },
    {
      question: "Hva er inkompatibilisme?",
      options: ["Synet at fri vilje og determinisme ikke kan være sanne samtidig", "Synet at fri vilje og determinisme begge er sanne og fullt forenlige med hverandre", "Synet at determinismen er sann, og at vi derfor ikke har noen fri vilje", "Synet at vi har fri vilje, og at determinismen derfor må være usann"],
      explanation: "Inkompatibilismen er en betinget påstand om forholdet mellom to teser, og den sier ikke hvilken av dem som er sann. De to siste forslagene er hard determinisme og libertarianisme, altså de to måtene å være inkompatibilist på.",
    },
    {
      question: "Hvilke to påstander utgjør hard determinisme?",
      options: ["At determinismen er sann, og at fri vilje er uforenlig med determinisme", "At determinismen er usann, og at fri vilje er uforenlig med determinisme", "At determinismen er sann, og at fri vilje likevel er forenlig med den", "At determinismen er usann, og at fri vilje derfor er mulig i vår verden"],
      explanation: "Den harde deterministen beholder determinismen og gir opp friheten. Byttes påstandene om, får man libertarianisme eller kompatibilisme — og skillet mellom de tre posisjonene ligger nøyaktig i hvilken tese som beholdes.",
    },
    {
      question: "Hva er den beste grunnen som taler for hard determinisme?",
      options: ["Ingen har valgt den karakteren og de ønskene handlingene springer ut av", "Ingen kan i praksis forutsi hva et menneske kommer til å gjøre i en gitt situasjon", "Ingen fysisk teori har til nå klart å vise at naturen inneholder tilfeldigheter", "Ingen har noen gang observert en handling som ikke hadde en ytre årsak bak seg"],
      explanation: "Argumentet er at gener, oppvekst og hjernekjemi var på plass før du kunne velge noe, og at valget derfor ikke er genuint ditt. Argumentet handler om opphavet til karakteren, ikke om hva vi kan forutsi eller observere.",
    },
    {
      question: "Hvordan begrunner den harde deterministen straff og klander?",
      options: ["Framoverskuende, i beskyttelse og endring av oppførsel, ikke i fortjeneste", "Bakoverskuende, i det personen fortjener for det hun faktisk har gjort tidligere", "Hun mener at all straff og klander må avskaffes fordi ingen kan holdes ansvarlig", "Hun mener at straff bare kan begrunnes dersom determinismen viser seg å være usann"],
      explanation: "Posisjonen beholder reaksjonene, men gir dem en annen begrunnelse: de skal beskytte og endre, ikke gi noen det de fortjener. At all reaksjon må avskaffes, er en vanlig overtolkning av posisjonen.",
    },
    {
      question: "Hva hevder libertarianeren om fri vilje?",
      options: ["Vi har fri vilje, og siden frihet er uforenlig med determinisme, er determinismen usann", "Vi har fri vilje, og den er fullt forenlig med at determinismen skulle vise seg å være sann", "Vi har ikke fri vilje, siden determinismen er sann og utelukker enhver frihet", "Vi har fri vilje bare i den grad handlingene våre er upåvirket av egne ønsker"],
      explanation: "Libertarianeren er inkompatibilist og beholder friheten. Merkelappen er rent metafysisk og har ingen forbindelse til politisk libertarianisme. Forslaget om forenlighet beskriver kompatibilismen.",
    },
    {
      question: "Hva er libertarianerens deliberasjonsargument?",
      options: ["Når vi overveier, behandler vi framtiden som åpen, og vi kjenner deliberasjonen direkte", "Når vi overveier, oppdager vi at ønskene våre er årsaker til handlingene våre", "Når vi overveier, viser det seg at vi likevel alltid ender med å velge det vi ønsker mest", "Når vi overveier, er det fordi vi ikke kjenner alle årsakene som virker på oss"],
      explanation: "Argumentet er at vi har bedre grunn til å stole på deliberasjonen enn på en teoretisk tese fysikken ikke har avgjort. Innvendingen er at det at noe framstår åpent for oss, ikke viser at det er åpent.",
    },
    {
      question: "Hva går tilfeldighetsinnvendingen mot libertarianismen ut på?",
      options: ["Er valget ikke fastlagt av noe, ser det ut til å være tilfeldig — og det gir ikke frihet", "Er valget fastlagt av noe, kan det ikke være tilfeldig — og da er det heller ikke fritt valgt", "Er valget tilfeldig, må det likevel ha en årsak et sted lenger tilbake i kjeden", "Er valget fritt, må det være forutsigbart for den som kjenner personen godt nok"],
      explanation: "Innvendingen viser at indeterminisme ikke er nok for frihet: å bytte ut en årsakskjede med et terningkast gjør ingen mer ansvarlig. Den er grunnen til at libertarianeren må postulere en tredje kategori, typisk aktørkausalitet.",
    },
    {
      question: "Hva er libertarianerens standardsvar på tilfeldighetsinnvendingen?",
      options: ["Aktørkausalitet: aktøren selv, ikke en hendelse, frambringer valget", "Begivenhetskausalitet: ønsker og oppfatninger frambringer valget på riktig måte", "Sannsynlighet: valget er ikke tilfeldig fordi noen utfall er mer sannsynlige", "Kompatibilisme: valget er fritt så lenge det ikke foreligger noen ytre tvang"],
      explanation: "Aktørkausalitet skal gi en tredje kategori mellom determinert og tilfeldig. Begivenhetskausalitet er derimot Davidsons posisjon, som kompatibilisten lener seg på, og innvendingen mot aktørkausalitet er at den mangler tidspunkt og mekanisme.",
    },
    {
      question: "Hva er kompatibilistens grunnleggende poeng?",
      options: ["Motsetningen til frihet er tvang, ikke årsak", "Motsetningen til frihet er årsak, ikke tvang, siden årsaker fjerner alternativene", "Motsetningen til frihet er uvitenhet om hva som faktisk driver våre egne handlinger", "Motsetningen til frihet er tilfeldighet, siden tilfeldige valg ikke er våre egne"],
      explanation: "Vi kaller en handling ufri når personen ble truet, bundet eller drevet av en avhengighet hun kjempet mot — ikke når vi får vite at ønsket hadde årsaker. Poenget er substansielt og ikke en språklig snarvei.",
    },
    {
      question: "Hva kaller Conee og Sider den kompatibilistiske posisjonen?",
      options: ["Soft determinism", "Hard determinism, i motsetning til libertarianismens indeterminisme", "The psychological continuity view, som de bruker om personlig identitet", "The Space-Time Theory of Time, som de bruker om tidens natur"],
      explanation: "«Soft determinism» er Conee og Siders term, og den er sitert direkte i oppgavesettene. De to andre termene er deres, men gjelder helt andre temaer — personlig identitet og tid.",
    },
    {
      question: "Hvorfor er det en feil å skrive generelt om kompatibilisme når oppgaven ber om Conee og Siders soft determinism?",
      options: ["Oppgaven spør etter deres bestemte framstilling, ikke etter temaet i sin alminnelighet", "Kompatibilisme og soft determinism er to helt ulike posisjoner med ulike konklusjoner", "Conee og Sider forkaster kompatibilismen og forsvarer en annen løsning på problemet", "Generell omtale av kompatibilisme regnes som en form for navnedropping uten innhold"],
      explanation: "Å bomme på den navngitte teksten er en egen og dokumentert feil i dette emnet. Soft determinism er ikke en annen posisjon enn kompatibilisme, men Conee og Siders bestemte framstilling av den, og det er den oppgaven etterspør.",
    },
    {
      question: "Hva går manipulasjonsinnvendingen mot kompatibilismen ut på?",
      options: ["En person med skjult plantede ønsker oppfyller definisjonen, men virker ikke fri", "En person under ytre tvang oppfyller definisjonen, men virker likevel ikke fri", "En person som handler tilfeldig oppfyller definisjonen, men virker ikke ansvarlig", "En person som angrer i etterkant oppfyller definisjonen, men virker ikke fri"],
      explanation: "Hun handler etter egne ønsker uten ytre tvang, og analysen sier derfor at hun er fri. Personen under ytre tvang oppfyller nettopp ikke definisjonen, så det tilfellet er ikke noe problem for kompatibilisten.",
    },
    {
      question: "Hva er kompatibilistens svar på manipulasjonsinnvendingen?",
      options: ["Ønskene må være dannet gjennom prosesser som svarer på grunner og lar seg korrigere", "Ønskene må være uforårsakede, slik at ingen ytre påvirkning har nådd fram til dem", "Ønskene må stemme med det personen faktisk gjør, uansett hvordan de er dannet", "Ønskene må være bevisste for personen selv i det øyeblikket hun handler"],
      explanation: "Innstrammingen utelukker den skjulte kampanjen, som nettopp omgår korrigeringen. Kravet om uforårsakede ønsker ville gjort svaret inkompatibilistisk, og motsvaret er at innstrammingen er innført for anledningen.",
    },
    {
      question: "Hva er den betingede analysen av «kunne ha gjort annerledes»?",
      options: ["At du ville handlet annerledes dersom du hadde villet det", "At det fantes en mulig verden med samme fortid der du handlet annerledes", "At ingenting i fortiden eller lovene bestemte hva du kom til å gjøre", "At du ikke visste på forhånd hva du kom til å ende opp med å gjøre"],
      explanation: "Analysen gjør kravet om alternativer forenlig med determinisme. Standardinnvendingen er at spørsmålet bare flyttes ett hakk: kunne du ha villet annerledes? Det er nettopp denne gjentakelsen konsekvensargumentet utnytter.",
    },
    {
      question: "Hva er premissene i van Inwagens konsekvensargument?",
      options: ["Handlinger følger av fortid og lover; fortiden og lovene er utenfor vår makt; maktesløsheten overføres", "Handlinger er tilfeldige hendelser; tilfeldigheter er utenfor vår makt; altså er handlingene våre utenfor vår makt", "Handlinger er årsaker; årsaker er hendelser; altså er handlinger hendelser uten aktør", "Handlinger er frie; frihet krever alternativer; altså er determinismen usann i vår verden"],
      explanation: "Argumentet lener seg på at fortiden og naturlovene ikke er noe vi kan gjøre noe med, og at dette overføres til alt som følger av dem. Det bygger ikke på tilfeldighet, og det forutsetter ikke friheten det skal si noe om.",
    },
    {
      question: "Hva er overføringsprinsippet i konsekvensargumentet?",
      options: ["Er A utenfor vår makt, og følger B av A, er også B utenfor vår makt", "Er A utenfor vår makt, kan B likevel være innenfor den dersom B kommer senere", "Er A innenfor vår makt, er alt som følger av A også innenfor vår makt", "Er A og B begge utenfor vår makt, følger det at A må ha forårsaket B"],
      explanation: "Prinsippet flytter maktesløsheten fra fortiden og lovene over på handlingene, og det er dette steget hele argumentet lever av. Nettopp derfor er det her kompatibilisten angriper.",
    },
    {
      question: "Hva er kompatibilistens hovedangrep på konsekvensargumentet?",
      options: ["At «kan gjøre noe med» brukes tvetydig, og at prinsippet bare er plausibelt på én lesning", "At premisset om at fortiden er utenfor vår makt, er usant slik det er formulert", "At argumentet er ugyldig, siden konklusjonen ikke følger av premissene i det hele tatt", "At argumentet forutsetter at determinismen er sann, noe fysikken ikke har vist"],
      explanation: "Diagnosen er at prinsippet er plausibelt når «kan» betyr å endre fortiden eller lovene, mens argumentet trenger det med «kan» i betydningen handlingsevne her og nå. Kompatibilisten bestrider verken premisset om fortiden eller argumentets gyldighet.",
    },
    {
      question: "Hva er prinsippet om alternative muligheter?",
      options: ["En person er bare ansvarlig for en handling dersom hun kunne ha handlet annerledes", "En person er bare ansvarlig for en handling dersom hun visste hva hun gjorde da hun gjorde det", "En person er ansvarlig for alle følger av handlingen, også dem hun ikke forutså", "En person er ansvarlig bare dersom handlingen ikke hadde noen ytre årsaker"],
      explanation: "Prinsippet forutsettes stilltiende i konsekvensargumentet, og Frankfurt-casene er konstruert nettopp for å vise at det er usant. Kravet om kunnskap er et annet og uavhengig ansvarsvilkår.",
    },
    {
      question: "Hvordan er et Frankfurt-case bygget opp?",
      options: ["En potensiell inngriper står klar, men griper aldri inn fordi personen velger slik selv", "En inngriper griper faktisk inn og tvinger personen til å handle mot sin egen vilje", "En person handler tilfeldig, uten at noen inngriper er involvert i det hele tatt", "En person handler av plantede ønsker uten å vite at de er plantet i henne"],
      explanation: "Poenget er nettopp at inngriperen forblir passiv: personen kunne ikke ha handlet annerledes, men handlingen ble frambrakt av hennes egne grunner. Griper han faktisk inn, er det et helt vanlig tvangstilfelle uten filosofisk interesse her.",
    },
    {
      question: "Hva viser Frankfurt-casene?",
      options: ["At ansvar ikke krever alternative muligheter, bare at handlingen ble frambrakt riktig", "At determinismen er forenlig med fri vilje, og at kompatibilismen dermed må regnes som bevist", "At ingen er ansvarlig for handlinger som er fastlagt av tidligere hendelser", "At alternative muligheter alltid finnes, om man ser nøye nok etter dem"],
      explanation: "Casene fjerner ett premiss inkompatibilisten lener seg på, men de beviser ikke kompatibilismen — den overtolkningen er en vanlig feil. Det de peker mot, er kilde-frihet framfor alternativ-frihet.",
    },
    {
      question: "Hva går glimt av frihet-innvendingen mot Frankfurt-casene ut på?",
      options: ["Personen kunne ha begynt å vakle, så et lite alternativ gjensto tross alt", "Personen visste ikke om inngriperen, og uvitenhet fjerner ansvaret hennes", "Personen handlet ikke av egne grunner, siden inngriperen var til stede hele tiden", "Personen kunne ikke ha handlet annerledes, og derfor er hun ikke ansvarlig"],
      explanation: "Innvendingen redder prinsippet om alternative muligheter i svekket form. Svaret er at et så tynt alternativ ikke kan bære ansvaret vi faktisk tilskriver — ingen klandrer henne i kraft av at hun kunne ha nølt et halvt sekund.",
    },
    {
      question: "Hva er forskjellen på kilde-frihet og alternativ-frihet?",
      options: ["Kilde-frihet krever at handlingen springer ut av deg, alternativ-frihet at det fantes åpne veier", "Kilde-frihet krever at det fantes åpne veier, alternativ-frihet at handlingen er din", "Kilde-frihet gjelder handlinger, mens alternativ-frihet bare gjelder ønsker og valg", "Kilde-frihet gjelder determinerte verdener, alternativ-frihet indeterministiske verdener"],
      explanation: "Skillet er kapitlets viktigste sorteringsverktøy: Frankfurt-casene angriper alternativ-kravet uten å røre kilde-kravet. Å bytte om de to gjør hele drøftingen uklar.",
    },
    {
      question: "Hva er Frankfurts hierarkiske analyse av frihet?",
      options: ["Et ønske er ditt eget når det stemmer med de ønskene du vil skal styre deg", "Et ønske er ditt eget når det er sterkere enn alle konkurrerende ønsker du har", "Et ønske er ditt eget når det ikke har noen årsak utenfor deg selv", "Et ønske er ditt eget når du er bevisst det i det øyeblikket du handler"],
      explanation: "Analysen bruker andreordens ønsker — ønsker om hvilke ønsker som skal styre deg — og forklarer hvorfor den avhengige som vil være fri fra trangen, handler ufritt. Den er kompatibilistisk og krever ikke at ønsket er uforårsaket.",
    },
    {
      question: "Hvorfor er fri vilje-debatten i stor grad betinget?",
      options: ["Fysikken har ikke avgjort om determinismen er sann, så vi drøfter hva som ville følge", "Filosofene er uenige om hva ordet «frihet» betyr, så ingen konklusjon er mulig", "Determinismen er bevist sann, så bare konsekvensene av den gjenstår å drøfte", "Determinismen er bevist usann, så bare libertarianismen står igjen som posisjon"],
      explanation: "Spørsmålet om determinismens sannhet er åpent, og debatten handler derfor hovedsakelig om hva som ville følge dersom den var sann. Å si dette eksplisitt koster én setning og hindrer at besvarelsen bygger på en fysisk påstand den ikke kan begrunne.",
    },
  ],
  'fil1001-4-1': [
    {
      question: "Hva er res cogitans hos Descartes?",
      options: ["En tenkende, uutstrakt substans som har tenkning som sin hele natur", "En utstrakt, ikke-tenkende substans som har utstrekning som sin natur", "Den delen av hjernen der sinnet og kroppen møter og påvirker hverandre", "En egenskap ved fysiske systemer som ikke lar seg redusere til fysikk"],
      explanation: "Res cogitans er sinnet: en substans hvis hele natur er å tenke, og som ikke er utstrakt. Den utstrakte, ikke-tenkende substansen er res extensa, altså motstykket. Å gjøre res cogitans til en hjernedel eller til en egenskap er å bytte ut substansdualismen med en annen posisjon.",
    },
    {
      question: "Hva er res extensa hos Descartes?",
      options: ["En utstrakt, ikke-tenkende substans der alt er form, størrelse og bevegelse", "En uutstrakt substans der alt er tvil, vilje, forestilling og annen bevisst aktivitet", "Den delen av mennesket der tanken og nervesystemet møtes og påvirker hverandre", "En beskrivelsesmåte vi velger å bruke på kroppen når vi driver naturvitenskap om den"],
      explanation: "Res extensa er legemet forstått som ren geometri og bevegelse — utstrakt og uten tenkning. Beskrivelsen med tvil og vilje passer på res cogitans. Merk at res extensa er en påstand om hva kroppen er, ikke om hvordan vi velger å beskrive den.",
    },
    {
      question: "Hvor hører hjernen hjemme i Descartes' inndeling?",
      options: ["Helt på res extensa-siden, som en utstrakt del av kroppsmaskinen", "Helt på res cogitans-siden, siden det er i hjernen tenkningen foregår", "På begge sider samtidig, siden den har både utstrekning og tenkning", "Utenfor inndelingen, som en tredje substans mellom de to andre"],
      explanation: "Hjernen er utstrakt og hører derfor fullt og helt til res extensa. Dualismen setter ikke sinn mot kropp med hjernen som noe midt imellom, og ingen del av kroppen kan ha to prinsipalattributter. Å plassere hjernen på sinnets side gjør posisjonen uforståelig.",
    },
    {
      question: "Hva er et prinsipalattributt hos Descartes?",
      options: ["Den ene egenskapen som utgjør en substans' natur, og som alle dens øvrige egenskaper er måter å være på", "Den viktigste av de egenskapene en substans tilfeldigvis har i et gitt tidsrom, og som den kan miste igjen", "En egenskap som to ulike substanser kan dele med hverandre så lenge de er nært forbundet i én og samme enhet", "Den egenskapen ved en ting som vi kan observere klarest med sansene og beskrive mest presist"],
      explanation: "Prinsipalattributtet konstituerer substansens natur: utstrekning for kroppen, tenkning for sinnet, og alt annet er måter å være utstrakt eller tenkende på. Det er ikke bare den mest framtredende egenskapen, og det er ikke noe to substanser kan dele — deling ville opphevet skillet mellom dem.",
    },
    {
      question: "Hva er en modus i Descartes' terminologi?",
      options: ["En bestemt måte prinsipalattributtet opptrer på, som en bestemt form eller et bestemt ønske", "En substans som er avhengig av en annen substans for i det hele tatt å kunne eksistere selvstendig", "En egenskap en ting kan miste uten dermed å slutte å være det slaget ting den er, slik farge er for en kropp", "Overgangen fra én tilstand til en annen i én og samme utstrakte kropp, slik bevegelse er overgang mellom steder"],
      explanation: "En modus er en bestemt måte å være utstrakt eller tenkende på — en form er en modus av utstrekning, et ønske en modus av tenkning. Begrepet forklarer hvorfor Descartes mener at ingen tanke kan være en tilstand i noe utstrakt: den måtte da være modus av to uforenlige attributter.",
    },
    {
      question: "Hva menes med at «tenkning» hos Descartes skal leses vidt?",
      options: ["At det dekker alt som foregår bevisst — tvil, vilje, forestilling og det å ha en sanseopplevelse", "At det dekker all informasjonsbehandling, også den ubevisste i nervesystemet og i kroppens øvrige organer", "At det dekker både menneskers og dyrs mentale liv, og at de to skiller seg fra hverandre bare i grad", "At det dekker resonnering, men bare i de tilfellene der den følger logikkens regler for gyldig slutning"],
      explanation: "Tenkning i Descartes' forstand er alt bevisst: tvil, bekreftelse, vilje, forestilling og sanseopplevelse. Å lese det snevert som resonnering gjør posisjonen langt mer sårbar enn den er, og er derfor en stråmann. Ubevisst informasjonsbehandling er ikke tenkning i denne forstand.",
    },
    {
      question: "Hva er substansdualisme?",
      options: ["Synet at det finnes to grunnleggende slag skapt substans, og at mennesket består av én av hvert slag", "Synet at det finnes bare én slags substans, men to grunnleggende og ureduserbare slag egenskaper ved den", "Synet at ordene for det mentale og ordene for det fysiske ikke lar seg oversette til hverandre uten tap av mening", "Synet at psykologi og nevrologi beskriver samme virkelighet på to nivåer"],
      explanation: "Substansdualismen er en påstand om hva som finnes: to selvstendige slag ting. Posisjonen med én substans og to slag egenskaper er egenskapsdualisme, og påstandene om ord og fagnivåer er langt svakere teser som dualismen ikke uttømmes av. Å forveksle dem er den vanligste kategorifeilen i temaet.",
    },
    {
      question: "Hva er den beste grunnen Descartes gir for at sinn og kropp har ulike essenser?",
      options: ["At alt vi sier om legemer bruker utstrekning, mens alt vi sier om tanker bruker en helt annen begrepsfamilie", "At vi aldri har klart å observere en tanke med noe vitenskapelig måleinstrument, uansett hvor følsomt det er", "At religionen krever en udødelig sjel som kan overleve kroppens død", "At hjernen er for enkelt bygget til å frambringe menneskets tankeliv"],
      explanation: "Motivasjonen er begrepslig: spørsmål om formen på et ønske er ikke vanskelige, de er ikke anvendelige, og motsatt for spørsmål om hvordan nervevev føles innenfra. Argumentet hviler verken på måleteknologi, på teologi eller på en påstand om hjernens kompleksitet.",
    },
    {
      question: "Hva er den metodiske tvilen hos Descartes?",
      options: ["En framgangsmåte der alt som kan betviles forkastes midlertidig, for å se om noe blir stående", "En posisjon der man hevder at sikker kunnskap om den ytre verden er umulig å oppnå for mennesker", "En regel om at man aldri bør stole på andres vitnesbyrd i filosofi", "En metode for å teste hypoteser ved systematisk å lete etter moteksempler til hver enkelt av dem"],
      explanation: "Tvilen er et verktøy i jakten på et fundament, ikke en skeptisk posisjon: Descartes tviler for å finne noe som ikke lar seg betvile. Å lese den som skepsis gjør hele prosjektet uforståelig, siden han bruker resultatet til å bygge opp kunnskap igjen.",
    },
    {
      question: "Hva etablerer cogito i seg selv?",
      options: ["At noe tenkende finnes, siden selve tvilen er en tanke", "At sinnet er en annen substans enn den utstrakte kroppen", "At kroppen ikke finnes, siden den uten videre lar seg betvile", "At alt jeg oppfatter klart og tydelig er sant"],
      explanation: "Cogito viser bare at noe tenkende finnes så lenge tvilen pågår. Dualismen kommer først når Descartes spør hva dette tenkende er, og kriteriet om klare og tydelige oppfatninger er et senere trinn. At kroppen kan betviles, betyr ikke at den ikke finnes.",
    },
    {
      question: "Hva er kravet om en «klar og tydelig» forestilling?",
      options: ["At innholdet ligger åpent for oppmerksomheten og er skarpt avgrenset fra alt annet", "At forestillingen er så levende at den kan beskrives i detalj for andre mennesker i ord", "At forestillingen er delt av alle som tenker grundig over saken", "At forestillingen kan bekreftes ved en observasjon vi kan gjenta så mange ganger vi vil"],
      explanation: "«Klart» betyr at innholdet ligger åpent for oppmerksomheten, «tydelig» at det er skarpt avgrenset fra alt annet. Kravet er strengere enn at noe bare lar seg tenke, og svakere enn et krav om observasjon eller enighet — det er derfor angrepene på argumentet ofte settes inn nettopp her.",
    },
    {
      question: "Hva er kløargumentets tredje premiss?",
      options: ["At det jeg klart og tydelig kan forestille meg som atskilt, også kan eksistere atskilt", "At det som kan eksistere hver for seg og uavhengig av hverandre, er to ting og ikke én og samme", "At jeg har en klar og tydelig forestilling av meg selv som en ren tenkende ting uten utstrekning", "At enhver kropp er delbar i deler, mens sinnet ikke lar seg dele på noen måte"],
      explanation: "Premisset som bærer argumentet, er broen fra klar og tydelig forestilling til mulighet. At det atskilt eksisterende er to ting, er argumentets neste og nesten definitoriske trinn; forestillingen om et rent tenkende jeg er utgangspunktet; og delbarheten hører til Descartes' andre, selvstendige argument.",
    },
    {
      question: "Hvorfor er det tredje premisset i kløargumentet det springende?",
      options: ["Fordi det bygger bro fra hva vi kan forestille oss til hva verden tillater, og den broen er ikke selvsagt", "Fordi det forutsetter Guds eksistens og allmakt, noe som ikke er bevist på dette punktet i framstillingen", "Fordi det bruker Leibniz' lov i den omstridte retningen fra likhet til identitet", "Fordi det handler om kroppen, som Descartes allerede har betvilt eksistensen av"],
      explanation: "Broen fra tenkelighet til mulighet er stedet nesten all kritikk settes inn: forestillingsevnen er ikke uten videre et pålitelig kart over det mulige. Argumentet bruker Leibniz' lov i den ukontroversielle retningen, og premisset gjelder ikke kroppens eksistens, men hva som kan tenkes atskilt.",
    },
    {
      question: "Hva er kjeden «tenkelighet → mulighet → atskilthet»?",
      options: ["Argumentkjeden fra at noe kan tenkes klart, til at det er mulig, til at de tenkte tingene er to", "Kjeden fra at noe er mulig, til at det finnes en verden der det er aktuelt, til at det er nødvendig", "Kjeden fra at noe er tvilbart, til at det er usikkert, til at det bør forkastes", "Kjeden fra at noe er begrepslig sant, til at det også er empirisk sant, til at det dermed er bevist"],
      explanation: "Kjeden går fra hva som lar seg tenke, via hva som er mulig, til hva som faktisk er to ting. Hvert av de to skrittene er omstridt, og det første er det springende premisset i så godt som all dualisme-diskusjon — det går igjen både hos Kripke og i zombie-argumentet.",
    },
    {
      question: "Hva sier udelelighetsargumentet?",
      options: ["At kroppen alltid kan tenkes delt, mens sinnet ikke kan det, og at de derfor er to ting", "At sinnet ikke kan deles fordi det verken har noen plassering eller noen utstrekning i rommet", "At kroppen består av deler som hver for seg kunne hatt et eget sinn", "At sinnet er enkelt og derfor udødelig, siden bare sammensatte ting kan gå til grunne ved oppløsning"],
      explanation: "Argumentet peker på en egenskapsforskjell — delbarhet mot udelelighet — og bruker Leibniz' lov til å slutte at de er to. Konklusjonen om udødelighet er en helt annen, senere påstand, og at sinnet mangler plassering, er en del av utgangspunktet snarere enn argumentets poeng.",
    },
    {
      question: "Hva er standardsvaret på udelelighetsargumentet?",
      options: ["Å bestride at sinnet er udelelig, med henvisning til delt oppmerksomhet og til hjerneskade", "Å bestride at kroppen er delelig, siden materiens minste deler ikke kan deles videre", "Å påpeke at Leibniz' lov ikke gjelder for fysiske gjenstander", "Å påpeke at Descartes forveksler numerisk og kvalitativ identitet"],
      explanation: "Innvendingen angriper premisset om sinnets udelelighet: mentalt liv ser ut til å kunne komme i deler. Kroppens delbarhet er ukontroversiell i denne sammenhengen, Leibniz' lov gjelder for alle ting, og identitetsskillet er ikke det argumentet hviler på.",
    },
    {
      question: "Hva går det maskerte manns-innvendingen ut på?",
      options: ["At «noe jeg kan tvile på» beskriver min kunnskapstilstand og ikke tingen, så Leibniz' lov ikke gjelder for det", "At tvil om ens egen eksistens er selvmotsigende, siden selve tvilen er en tanke", "At vi ikke kan vite om andre mennesker har et sinn bak sin ytre atferd", "At forestillingen om en ren tenkende ting ikke er klar og tydelig nok"],
      explanation: "Innvendingen viser at man kan tvile på at den maskerte mannen er faren min uten at de dermed er to. Slike egenskaper beskriver mitt forhold til tingen, ikke tingen selv, og Leibniz' lov gjelder ikke for dem. Innvendingen om at forestillingen er utilstrekkelig klar, rammer den modne versjonen, ikke tvilsversjonen.",
    },
    {
      question: "Hvilken versjon av Descartes' argument rammes hardest av det maskerte manns-innvendingen?",
      options: ["Tvilsversjonen, som bygger på hva Descartes kan og ikke kan betvile", "Den modne versjonen, som bygger på klare og tydelige forestillinger om tingenes natur", "Udelelighetsargumentet, som bygger på at kroppen alltid kan tenkes delt", "Ingen av dem, siden innvendingen bare gjelder språket og ikke metafysikken"],
      explanation: "Innvendingen treffer tvilsversjonen, fordi den bruker tvilbarhet som om det var en egenskap ved tingen. Den modne versjonen unngår problemet ved å hevde noe om tingenes natur i stedet, og det er nettopp derfor Descartes går over til den.",
    },
    {
      question: "Hva er interaksjonsproblemet?",
      options: ["At Descartes ikke gjør rede for hvordan en uutstrakt substans kan påvirke og påvirkes av en utstrakt kropp", "At Descartes ikke gjør rede for hvordan to mennesker kan vite noe som helst om hverandres indre liv og tanker", "At Descartes ikke gjør rede for hvordan kroppens deler henger sammen til én maskin", "At Descartes ikke gjør rede for hvordan tanker kan handle om ting utenfor sinnet"],
      explanation: "Problemet gjelder kausal påvirkning mellom to substanser med uforenlige naturer, og det går begge veier: viljen som løfter armen, og skaden som gjør vondt. Spørsmålene om andres sinn og om tankers rettethet er andre problemer i faget, ikke dette.",
    },
    {
      question: "Hvilken antakelse gjør interaksjonsproblemet særlig skarpt?",
      options: ["Kontaktmodellen: at kausal påvirkning skjer ved berøring og overføring av bevegelse mellom utstrakte deler", "Antakelsen om at all kausalitet går fra fortid til fremtid og aldri den motsatte veien i tid, uansett system", "Antakelsen om at like årsaker alltid gir like virkninger under like forhold", "Antakelsen om at ingen virkning kan ha mer enn én tilstrekkelig årsak"],
      explanation: "Kontaktmodellen gjør uutstrakthet til en hindring, siden en ting uten overflate ikke har noe å støte med. Modellen er en teori om kausalitet, ikke en observasjon, og det er nettopp der dualisten kan angripe. De øvrige antakelsene tilhører andre debatter i kausalitetslæren.",
    },
    {
      question: "Hva er den moderne formen av interaksjonsproblemet?",
      options: ["Energibevaringsinnvendingen: en ikke-fysisk årsak ser ut til å tilføre et fysisk system energi utenfra", "Målingsinnvendingen: en ikke-fysisk årsak ville vist seg som avvik i nevrologiske eksperimenter", "Evolusjonsinnvendingen: en ikke-fysisk substans kunne ikke oppstått ved naturlig utvalg", "Statistikkinnvendingen: sammenhengen mellom beslutning og handling er for upålitelig til å være kausal"],
      explanation: "Den moderne formen bygger på bevaringslovene og ikke på et bilde av berøring, og er derfor vanskeligere å avvise enn den klassiske. Dualistens vanlige svar er enten at påvirkningen omfordeler energi uten å tilføre den, eller at spørsmålet nettopp er om kroppen er et lukket system.",
    },
    {
      question: "Hva var Descartes' anatomiske svar på hvor sinn og kropp møtes?",
      options: ["Konglekjertelen, blant annet fordi den ligger sentralt og ikke er delt i to halvdeler", "Hjernebarken, fordi det er der de mest sammensatte prosessene i nervesystemet foregår samtidig", "Nervebanene i ryggmargen, fordi all påvirkning må passere gjennom dem", "Hjertet, fordi det er kroppens varmekilde og bevegelsens utgangspunkt"],
      explanation: "Descartes pekte ut konglekjertelen fordi den er uparet og sentralt plassert. Svaret er anatomisk og ikke filosofisk: det sier hvor møtet skjer, ikke hvordan det er mulig, og en besvarelse som presenterer det som løsningen på interaksjonsproblemet, har misforstått problemet.",
    },
    {
      question: "Hva er Descartes' filosofiske svar på interaksjonsproblemet?",
      options: ["At sinn og kropp utgjør en union, en egen grunnleggende kjensgjerning kjent gjennom å leve", "At Gud griper inn ved hver enkelt anledning og skaper samsvar mellom de to", "At påvirkningen skjer gjennom svært små bevegelser som ennå ikke lar seg måle", "At spørsmålet er meningsløst, siden kausalitet bare gjelder innenfor én og samme substans av gangen"],
      explanation: "Descartes hevder at jeg ikke er i kroppen min slik en los er i et skip, men forent med den, og at unionen er en tredje grunnleggende innsikt. Svakheten er at den navngir forbindelsen uten å forklare den — men det er noe annet enn å avvise spørsmålet eller å vise til umålelige bevegelser.",
    },
    {
      question: "Hva er poenget med Descartes' bilde av losen i skipet?",
      options: ["Å avvise et bilde: jeg oppfatter ikke skaden på avstand, men kjenner den som min", "Å illustrere hvordan sinnet styrer kroppen fra ett bestemt punkt inne i hjernen, som en fører", "Å vise at kroppen fungerer helt mekanisk også uten et sinn til stede", "Å forklare hvorfor sansene bedrar oss om kroppens tilstand"],
      explanation: "Bildet brukes negativt: forholdet mellom sinn og kropp er nettopp ikke som en los som inspiserer et fartøy utenfra. Descartes vil ha fram at unionen er intim, at smerten kjennes som min — og det taler mot, ikke for, en styrmann plassert et bestemt sted.",
    },
    {
      question: "Hva viser interaksjonsproblemet, presist sagt?",
      options: ["At Descartes' variant har en uforklart forbindelse — ikke at det mentale er fysisk", "At det mentale nødvendigvis må være fysisk, siden ingen annen forklaring er mulig i det hele tatt", "At sinnet ikke kan påvirke kroppen, men godt kan påvirkes av den", "At kausal lukkethet av det fysiske er bevist av naturvitenskapen"],
      explanation: "Innvendingen etablerer en gjeld hos Descartes, ikke fysikalismens sannhet: egenskapsdualisme og epifenomenalisme overlever den. Skal man komme videre til fysikalismen, må premisset om kausal lukkethet legges til, og det premisset er selv omstridt.",
    },
    {
      question: "Hva er egenskapsdualisme?",
      options: ["Synet at det finnes én slags substans, men to grunnleggende slag egenskaper ved den", "Synet at det finnes to slags substans, men bare ett grunnleggende slag egenskaper ved hver av dem", "Synet at mentale egenskaper er identiske med bestemte fysiske egenskaper", "Synet at mentale egenskaper bare er måter å beskrive atferd på"],
      explanation: "Egenskapsdualismen beholder én substans og hevder at noen fysiske systemer i tillegg har bevisste egenskaper som ikke lar seg redusere. Identitet mellom mentale og fysiske egenskaper er identitetsteoriens påstand, og reduksjon til atferd er behaviorismens — begge er posisjoner egenskapsdualisten avviser.",
    },
    {
      question: "Hvilken posisjon forsvarer Chalmers?",
      options: ["Egenskapsdualisme, som han kaller naturalistisk dualisme", "Substansdualisme, i en modernisert utgave av Descartes' posisjon", "Reduktiv fysikalisme, der bevissthet forklares fullt ut av nevrovitenskapen", "Epifenomenalisme, der bevisste tilstander ikke har noen årsaker"],
      explanation: "Chalmers forsvarer egenskapsdualisme og kaller den naturalistisk dualisme — å skrive at han er substansdualist, er en dokumentert feil. Han er heller ikke reduktiv fysikalist, og epifenomenalisme er noe annet: der har bevisste tilstander årsaker, men ingen virkninger.",
    },
    {
      question: "Hva er epifenomenalisme?",
      options: ["Synet at mentale tilstander er virkninger av fysiske prosesser, men selv ikke virker på noe", "Synet at mentale tilstander verken har årsaker eller virkninger", "Synet at mentale tilstander er de egentlige årsakene til all atferd", "Synet at mentale tilstander er identiske med de fysiske tilstandene i hjernen som frambringer dem"],
      explanation: "Epifenomenalismen beholder at det mentale er noe eget, men gir opp at det virker — som røyk over en maskin. Den slipper unna halve interaksjonsproblemet, men til den prisen at ingen beslutning noen gang har fått en kropp til å gjøre noe.",
    },
    {
      question: "Hva sier prinsippet om kausal lukkethet av det fysiske?",
      options: ["At enhver fysisk hendelse som har en årsak, har en tilstrekkelig fysisk årsak", "At ingen fysisk hendelse kan ha mer enn én årsak i det hele tatt", "At det fysiske universet verken mottar eller avgir energi utenfra", "At enhver fysisk hendelse er fullstendig bestemt av naturlovene og av fortidens samlede tilstand"],
      explanation: "Prinsippet sier at det fysiske ikke trenger å gå utenfor seg selv for å bli forklart. Det utelukker ikke flere årsaker per hendelse, det er ikke det samme som energibevaring, og det er heller ikke determinisme — sistnevnte er en påstand om at fortiden fastlegger fremtiden entydig.",
    },
    {
      question: "Hva slags argument er Descartes' argument for dualismen, i argumenttype?",
      options: ["Begrepslig og epistemisk: premissene handler om hva vi kan betvile og forestille oss klart", "Modal-semantisk: premissene handler om hvordan uttrykk betegner ting i mulige situasjoner og verdener", "Empirisk: premissene bygger på observasjoner av hva som skjer i hjernen", "Pragmatisk: premissene bygger på hvilken teori som er nyttigst å legge til grunn"],
      explanation: "Descartes går fra hva som lar seg betvile og forestille klart og tydelig, til hva som finnes. Det modal-semantiske apparatet er Kripkes, og argumentet hviler verken på hjerneobservasjoner eller på nytteovervejelser — å blande de to argumenttypene er den tyngste presisjonsfeilen i temaet.",
    },
    {
      question: "Hva er hovedforskjellen mellom Descartes' og Kripkes konklusjon?",
      options: ["Descartes slutter til to substanser, mens Kripke avviser en bestemt identitetspåstand", "Descartes avviser en identitetspåstand, mens Kripke slutter til to substanser", "Descartes slutter til to slag egenskaper ved ett menneske, mens Kripke slutter til to substanser", "Begge slutter til to substanser, men med ulike premisser om Guds allmakt"],
      explanation: "Descartes konkluderer med at mennesket består av to substanser; Kripke konkluderer med at en foreslått identitet mellom smerte og en hjernetilstand ikke kan være sann. Man kan godta hele Kripkes argument og likevel avvise at det finnes en tenkende substans — derfor er han ikke substansdualist.",
    },
    {
      question: "Hvorfor er det en feil å framstille dualismen som en påstand om ord eller om fagdisipliner?",
      options: ["Fordi dualismen er en påstand om hva som finnes, nemlig to substanser", "Fordi ord og fagdisipliner ikke har noe med metafysikk å gjøre", "Fordi Descartes uttrykkelig benekter at psykologi og nevrologi er ulike fag", "Fordi den svakere påstanden allerede er motbevist av nevrovitenskapen"],
      explanation: "Dualismen hevder at det finnes to selvstendige slag ting; påstander om ordbruk og fagnivåer er langt svakere teser som nesten alle kan godta. Angriper eller forsvarer du den svakere påstanden, har du byttet ut oppgaven med en enklere — og det er en kategorifeil, ikke bare en unøyaktighet.",
    },
    {
      question: "Hvilken innvending brukes ofte mot dualisten som svarer at kravet om berøring bare er en teori om kausalitet?",
      options: ["At svaret ikke hjelper mot energibevaringsinnvendingen, som ikke hviler på noe kontaktbilde", "At svaret forutsetter at Hume tok feil om nødvendige forbindelser", "At svaret gjør sinnet til noe utstrakt, i strid med res cogitans", "At svaret innebærer at kroppen ikke lenger kan påvirke sinnet i det hele tatt, men bare omvendt"],
      explanation: "Trekket redder dualisten fra den klassiske formen av innvendingen, men bevaringslovene bygger på en målbar lov og ikke på et bilde av biljardkuler. Trekket bygger dessuten på Hume snarere enn mot ham, og det gjør verken sinnet utstrakt eller kroppen kausalt maktesløs.",
    },
  ],
  'fil1001-4-2': [
    {
      question: "Hva er en rigid designator?",
      options: ["Et uttrykk som betegner det samme objektet i alle mulige verdener der objektet finnes", "Et uttrykk som betegner samme objekt så lenge objektet ikke forandrer sine egenskaper", "Et uttrykk som plukker ut sin gjenstand ved hjelp av en beskrivelse alle er enige om", "Et uttrykk som har samme betydning i alle språk det lar seg oversette til på en god måte"],
      explanation: "Rigiditet handler om hvilke objekter uttrykket peker på i ulike mulige verdener, ikke om forandring over tid, om enighet eller om oversettelse. Egennavn er standardeksemplet, og Kripke hevder at naturslagstermer oppfører seg på samme måte.",
    },
    {
      question: "Hvilket av disse uttrykkene er ikke-rigid?",
      options: ["«Den lengste elva i Europa», siden en annen elv kunne vært den lengste", "«Aristoteles», siden han kunne hatt en helt annen livshistorie enn han faktisk fikk", "«Vann», siden man kan forestille seg å finne en klar væske som ikke er H₂O", "«Hesperus», siden det tok astronomene lang tid å finne ut hva navnet betegner"],
      explanation: "Beskrivelsen plukker ut den som fyller en rolle, og rollen kunne vært fylt av noe annet — det er testen på ikke-rigiditet. At Aristoteles kunne hatt en annen livshistorie, endrer ikke hvem navnet peker på, og vanskelighetene med å oppdage hva «Hesperus» betegner, gjelder kunnskap og ikke rigiditet.",
    },
    {
      question: "Hva er testen på om et uttrykk er rigid?",
      options: ["Om det er uforståelig å si at uttrykket kunne pekt på noe annet enn det faktisk peker på", "Om uttrykket brukes på samme måte av alle kompetente språkbrukere i et samfunn", "Om uttrykket kan defineres uttømmende ved hjelp av andre uttrykk i samme språk", "Om uttrykket viser til noe som eksisterer uavhengig av at noen tenker på det eller ikke"],
      explanation: "Testen gjelder hva uttrykket kunne pekt på i andre mulige verdener: «Erna Solberg kunne vært en annen person» er uforståelig, mens «Norges statsminister kunne vært en annen person» er udramatisk sant. Enighet blant språkbrukere, definerbarhet og uavhengig eksistens er andre spørsmål.",
    },
    {
      question: "Hvorfor er det viktig for Kripke at naturslagstermer er rigide?",
      options: ["Fordi det gjør at vitenskapelig oppdagede identiteter som «vann er H₂O» blir nødvendige", "Fordi det gjør at vitenskapelige teorier kan omformuleres uten å endre innhold", "Fordi det gjør at hverdagsspråket og fagspråket kan brukes om hverandre uten tap", "Fordi det gjør at vi kan lære betydningen av slike ord uten å ha sett tingene selv"],
      explanation: "Er begge sider av en sann identitet rigide, gjelder identiteten i alle mulige verdener — også når den ble oppdaget empirisk. Uten rigiditeten ville «vann er H₂O» bare vært en tilfeldig opplysning om vår verden, og hele apparatet Kripke retter mot smerte ville falt sammen.",
    },
    {
      question: "Hva sier tesen om nødvendig identitet?",
      options: ["At dersom x og y er én og samme ting, så er de nødvendigvis én og samme ting", "At dersom x og y er nødvendigvis like, så er de nødvendigvis én og samme ting", "At dersom x og y har samme navn, så viser navnene nødvendigvis til det samme", "At dersom x og y ikke kan skjelnes fra hverandre, så er de nødvendigvis identiske"],
      explanation: "Tesen går fra faktisk identitet til nødvendig identitet, og begrunnes med at alt nødvendigvis er identisk med seg selv pluss Leibniz' lov. Den handler om ting, ikke om navn — og den er noe annet enn prinsippet om de uskjelnbares identitet, som slutter fra fullstendig likhet til identitet.",
    },
    {
      question: "Hvordan begrunnes tesen om nødvendig identitet?",
      options: ["Alt er nødvendigvis identisk med seg selv, og er x = y, deler y alle egenskaper med x", "All identitet er analytisk, og analytiske sannheter kan ikke være annerledes enn de er", "Ingen ting kan forandre seg til å bli en annen ting, siden forandring krever at noe består", "Erfaringen viser at ting som først er funnet identiske, aldri senere har vist seg å være to"],
      explanation: "Begrunnelsen kombinerer selvidentitetens nødvendighet med Leibniz' lov: er x = y, har y også egenskapen å være nødvendigvis identisk med x. Argumentet er verken analytisk, empirisk eller hentet fra læren om forandring — det er en ren anvendelse av to prinsipper.",
    },
    {
      question: "Hva er en a posteriori nødvendighet?",
      options: ["En sannhet som ikke kunne vært annerledes, men som bare kunne oppdages empirisk", "En sannhet som kunne vært annerledes, men som vi kan kjenne til uavhengig av erfaring", "En sannhet som følger av ordenes betydning, og som derfor ikke krever noen undersøkelse", "En sannhet som gjelder i vår verden, men som ikke behøver å gjelde i andre mulige verdener"],
      explanation: "«Vann er H₂O» og «Hesperus er Fosforos» er nødvendige uten å være kjennbare på forhånd. Kategorien som kunne vært annerledes, men vites på forhånd, er a priori kontingens, og en sannhet som følger av betydningen, er analytisk — Kripkes poeng er nettopp at disse skillene er uavhengige.",
    },
    {
      question: "Hva viser eksemplet «Hesperus er Fosforos»?",
      options: ["At en identitet kan være nødvendig og likevel måtte oppdages av astronomer", "At to navn på samme ting alltid har samme betydning for den som bruker dem", "At vår tro på identiteter er usikker og kan omstøtes av nye observasjoner", "At det er umulig å ha to ulike navn for én og samme gjenstand uten forvirring"],
      explanation: "Aftenstjernen og morgenstjernen er samme planet, identiteten er nødvendig fordi begge navn er rigide, og likevel måtte den oppdages. Eksemplet handler ikke om navns betydning, om kunnskapens usikkerhet eller om faren for forvirring.",
    },
    {
      question: "Hva er illusjonsforklaringen hos Kripke?",
      options: ["At det vi forestiller oss, er en kvalitativt lik situasjon der noe annet framstår slik det ekte gjør", "At det vi forestiller oss, er umulig, og at forestillingen faller fra hverandre ved nærmere ettersyn", "At det vi forestiller oss, er mulig, men uten noen betydning for hva som faktisk er tilfelle i verden", "At det vi forestiller oss, er noe vi har lært å forestille oss gjennom språket og ikke gjennom erfaring"],
      explanation: "Manøveren omtolker forestillingen i stedet for å avvise den: du forestilte deg en verden der en klar væske består av XYZ, ikke en verden der vann ikke er H₂O. Den avviser altså ikke muligheten av det forestilte, og den handler ikke om språklæring.",
    },
    {
      question: "Hva krever illusjonsforklaringen for å virke?",
      options: ["Et skille mellom hvordan fenomenet framstår for oss og hva fenomenet er", "Et skille mellom hva vitenskapen har bevist og hva den bare har sannsynliggjort", "Et skille mellom det som er logisk mulig og det som er fysisk gjennomførbart", "Et skille mellom egennavn og de beskrivelsene vi bruker for å forklare navnene"],
      explanation: "Manøveren sier at du tok framtredenen for tingen, og den krever derfor at det finnes en framtreden å ta feil av. Uten to slike lag er det ingen forveksling å påvise — og det er nettopp der smertetilfellet skiller seg fra vann og varme.",
    },
    {
      question: "Hva er forskjellen på epistemisk og metafysisk mulighet?",
      options: ["Epistemisk mulighet er forenlighet med det vi vet; metafysisk mulighet er sannhet i en mulig verden", "Epistemisk mulighet gjelder framtiden, mens metafysisk mulighet gjelder fortiden og nåtiden", "Epistemisk mulighet gjelder påstander, mens metafysisk mulighet gjelder handlinger vi kan utføre", "Epistemisk mulighet er mulighet for oss mennesker; metafysisk mulighet er mulighet for enhver tenker"],
      explanation: "For alt babylonerne visste, kunne Hesperus vært en annen planet enn Fosforos — det er en åpen kunnskapstilstand, ikke en mulig verden. Skillet gjelder ikke tidsretning, ikke handlinger, og ikke hvem som er i stand til å tenke tanken.",
    },
    {
      question: "Hva er identitetsteoriens påstand, slik den brukes i Kripkes argument?",
      options: ["At mentale tilstander er numerisk identiske med hjernetilstander, oppdaget empirisk", "At mentale tilstander er systematisk korrelert med hjernetilstander uten å være dem", "At uttrykkene «smerte» og «C-fiber-fyring» har den samme betydningen i norsk språk", "At mentale tilstander er de rollene visse hjernetilstander spiller i et større system"],
      explanation: "Identitetsteorien hevder numerisk identitet, ikke bare korrelasjon, og identiteten er ment som en vitenskapelig oppdagelse og ikke som en betydningslikhet. Å definere mentale tilstander ved rolle er funksjonalismens grep, som er en annen posisjon.",
    },
    {
      question: "Hva er premiss 2 i Kripkes argument mot identitetsteorien?",
      options: ["At «smerte» og «C-fiber-fyring» begge er rigide designatorer", "At vi tydelig kan tenke oss smerte uten C-fiber-fyring og motsatt", "At sanne identiteter mellom rigide designatorer alltid er nødvendige", "At smerte plukkes ut ved sin følte kvalitet og ikke ved en virkning"],
      explanation: "Rigiditeten for begge sider er det som gjør at tesen om nødvendig identitet kan anvendes på setningen. Tenkeligheten kommer senere i argumentet, nødvendigheten av identiteter er første premiss, og poenget om den følte kvaliteten er begrunnelsen for at illusjonsforklaringen ikke virker.",
    },
    {
      question: "Hva er kjernen i Kripkes argument mot identitetsteorien?",
      options: ["Disanalogien: fysikalistens vanlige bortforklaring av tenkeligheten virker ikke på smerte", "Analogien: smerte er en vitenskapelig oppdaget identitet på linje med vann og varme", "Korrelasjonen: hjerneforskningen har aldri funnet en fullstendig sammenheng smerte og fibre", "Introspeksjonen: vi kjenner vårt eget sinn bedre enn vi kjenner noen fysisk tilstand"],
      explanation: "Argumentets nyskaping er at illusjonsforklaringen ikke er tilgjengelig i smertetilfellet, siden det ikke finnes et skille mellom framtreden og ting. Vann og varme er kontrasten og ikke parallellen, og argumentet hviler verken på hjerneforskningens funn eller på introspeksjonens sikkerhet.",
    },
    {
      question: "Hvorfor virker ikke illusjonsforklaringen på smerte, ifølge Kripke?",
      options: ["Fordi smerte plukkes ut ved sin følte kvalitet, så det som føles som smerte, er smerte", "Fordi smerte er en tilstand vi bare har tilgang til gjennom vårt eget førstepersonsperspektiv", "Fordi smerte varierer så mye fra menneske til menneske at ingen felles beskrivelse finnes", "Fordi smerte er en tilstand vi ikke kan gjøre til gjenstand for vitenskapelig undersøkelse"],
      explanation: "Poenget er at smerten ikke har to lag: det er ingen framtreden bak eller foran den følte kvaliteten som vi kunne ha forvekslet med tilstanden selv. Argumentet hviler verken på variasjon mellom mennesker eller på en påstand om at smerte ikke kan undersøkes vitenskapelig.",
    },
    {
      question: "Hva er Kripkes konklusjon i argumentet mot identitetsteorien?",
      options: ["At identitetspåstanden ikke er nødvendig, og dermed ikke sann", "At det finnes en tenkende substans atskilt fra den utstrakte kroppen", "At mentale tilstander må være funksjonelle roller og ikke fysiske tilstander", "At vitenskapen aldri kan finne noen sammenheng mellom smerte og hjernetilstander"],
      explanation: "Konklusjonen er at én bestemt identitetspåstand feiler. Kripke slutter ikke til en tenkende substans, erstatter den ikke med funksjonalisme, og benekter ikke at det finnes sammenhenger mellom smerte og hjernen — han sier at materialisten har en bevisbyrde han ikke har innfridd.",
    },
    {
      question: "Hva er Kripkes egen beskrivelse av hva argumentet oppnår?",
      options: ["At han ikke har bevist dualismen, men vist at materialisten har en bevisbyrde han ikke har innfridd", "At han har gitt et fullstendig og endelig bevis for at sinnet er en substans atskilt fra kroppen som sådan", "At han har vist at spørsmålet ikke lar seg avgjøre, siden begge sider hviler på sine egne intuisjoner", "At han har vist at identitetsteorien er selvmotsigende og derfor kan avvises uten videre undersøkelse"],
      explanation: "Kripke formulerer seg forsiktig: bevisbyrden er flyttet, ikke saken avgjort. Han hevder verken å ha bevist dualismen, å ha vist at spørsmålet er uavgjørbart, eller at teorien er selvmotsigende — den er ikke selvmotsigende, den er usann om identiteten ikke kan være nødvendig.",
    },
    {
      question: "Hva innebærer fysikalistens vei ut som benekter at «smerte» er rigid?",
      options: ["At smerte plukkes ut ved en rolle som kan fylles av ulike tilstander, altså funksjonalisme", "At smerte ikke finnes som noen egen tilstand, men bare som en måte å snakke om atferd", "At smerte er identisk med C-fiber-fyring, men bare i den verdenen vi tilfeldigvis lever i", "At smerte er en tilstand vi ikke har noe pålitelig begrep om i det hele tatt"],
      explanation: "Gjør man «smerte» til en rollebeskrivelse, faller premisset om rigiditet — men da har man byttet ut identitetsteorien med funksjonalismen. Trekket er verken en form for behaviorisme, en verdensrelativ identitet eller en benektelse av at vi har begreper om smerte.",
    },
    {
      question: "Hva går fysikalistens mest brukte moderne motsvar til Kripke ut på?",
      options: ["Å godta tenkeligheten, men forklare den med at vi har to helt ulike slags begreper om samme tilstand", "Å godta tenkeligheten og godta at det følger en mulighet, men benekte at det rammer fysikalismen", "Å benekte at det finnes noen tenkelighet, siden forestillingen bryter sammen ved nærmere undersøkelse", "Å benekte at nødvendig identitet gjelder, siden identitet mellom ulike slag ting er noe annet"],
      explanation: "Motsvaret godtar tenkeligheten og benekter slutningen til mulighet: to begreper med helt ulikt opphav — ett dannet innenfra, ett utenfra — vil alltid kunne holdes fra hverandre i tanken. Å benekte tenkeligheten er en annen og lite brukt vei, og tesen om nødvendig identitet blir sjelden angrepet.",
    },
    {
      question: "Hva er Kripkes svar på at fysikalisten viser til to ulike slags begreper?",
      options: ["At svaret navngir gapet uten å lukke det, siden det ikke sier hva forvekslingen består i", "At svaret er selvmotsigende, siden ett og samme begrep ikke kan ha to opphav", "At svaret er unødvendig, siden fysikalisten allerede har innrømmet at smerte er noe eget", "At svaret er uinteressant, siden begreper hører til psykologien og ikke til metafysikken"],
      explanation: "Kripke innvender at fysikalisten ikke kan si hva vi tok feil av, slik han kunne for varme, og at spørsmålet om hvorfor en ordinær fysisk tilstand kan gripes innenfra, blir stående. Han hevder verken at motsvaret er selvmotsigende eller at det er irrelevant fordi det handler om begreper.",
    },
    {
      question: "Hva er den viktigste forskjellen mellom Descartes' og Kripkes prosjekt?",
      options: ["Descartes bygger en posisjon om to substanser; Kripke river en bestemt identitetsteori", "Descartes river en bestemt identitetsteori; Kripke bygger en posisjon om to substanser", "Descartes bruker mulige verdener; Kripke bruker klare og tydelige forestillinger", "Descartes bygger på empiriske funn; Kripke bygger utelukkende på begrepslige forhold"],
      explanation: "Descartes slutter til at mennesket består av to substanser, mens Kripke viser at én foreslått identitet ikke kan være sann. Apparatene er dessuten byttet om i de øvrige forslagene, og Descartes bygger ikke på empiri i det hele tatt.",
    },
    {
      question: "Hva deler Descartes og Kripke?",
      options: ["Skrittet fra hva som lar seg forestille, til hva som er metafysisk mulig", "Antakelsen om at sinnet er en substans som kan eksistere helt uten kroppen sin", "Bruken av rigide designatorer og skillet mellom epistemisk og metafysisk mulighet", "Overbevisningen om at naturvitenskapen aldri kan si noe om bevissthetens natur"],
      explanation: "Begge trenger broen fra tenkelighet til mulighet, og en god sammenligning nevner den før den skiller dem. Substanspåstanden er bare Descartes', det modal-semantiske apparatet bare Kripkes, og ingen av dem hevder at naturvitenskapen er irrelevant.",
    },
    {
      question: "Hvorfor er det en feil å kalle Kripke substansdualist?",
      options: ["Fordi man kan godta hele argumentet hans og likevel avvise at det finnes en tenkende substans", "Fordi han uttrykkelig forsvarer identitetsteorien i sine senere arbeider om bevissthet", "Fordi substansdualisme forutsetter et gudsbegrep som ikke finnes i argumentet hans", "Fordi han bruker mulige verdener, og mulige verdener er uforenlige med substanser"],
      explanation: "Konklusjonen hans er at en identitetspåstand feiler, ikke at det finnes to slag ting — man kan avvise identitetsteorien og fortsatt mene at alt er fysisk. Han forsvarer ikke identitetsteorien noe sted, og mulige verdener er nøytrale i forhold til substansspørsmålet.",
    },
    {
      question: "Hvorfor brukes «C-fiber-fyring» i denne litteraturen?",
      options: ["Som et stand-in for hvilken som helst nevral tilstand vitenskapen måtte komme til å finne", "Fordi nevrofysiologien har vist at nettopp disse fibrene er hele grunnlaget for smerte", "Fordi disse fibrene er de eneste som finnes hos alle dyrearter som kan kjenne smerte", "Fordi Kripke selv gjorde eksperimenter på disse fibrene før han formulerte argumentet"],
      explanation: "Uttrykket er et plassholdereksempel: argumentet ville gått like godt med en hvilken som helst annen fysisk tilstand på høyresiden av likhetstegnet. Innvendinger om at den faktiske smertefysiologien er mer sammensatt, er sanne, men uten betydning for argumentet.",
    },
    {
      question: "Hva er a priori kontingens?",
      options: ["En sannhet som kan vites på forhånd, men som likevel kunne vært annerledes enn den er", "En sannhet som må vites gjennom erfaring, men som ikke kunne vært annerledes enn den er", "En sannhet som ikke kan vites i det hele tatt, verken på forhånd eller ved undersøkelse", "En sannhet som er nødvendig i én mulig verden, men tilfeldig i alle de øvrige verdenene"],
      explanation: "Standardeksemplet er en lengde definert ved en bestemt målestokk: den som fastsetter definisjonen, vet uten å måle, men stokken kunne vært lengre. Kategorien er motstykket til a posteriori nødvendighet og viser samme poeng fra motsatt kant — hvordan vi vet noe og om det kunne vært annerledes, er uavhengige spørsmål.",
    },
    {
      question: "Rammer Kripkes argument bare typeidentitet, eller også tokenidentitet?",
      options: ["Også tokenidentitet, siden nødvendig identitet gjelder for enkeltting like fullt som for slag", "Bare typeidentitet, siden enkelttilfeller ikke betegnes av noen rigid designator", "Bare tokenidentitet, siden argumentet handler om en bestemt smerte i et bestemt øyeblikk", "Ingen av dem, siden argumentet gjelder betydningen av ord og ikke forholdet mellom ting"],
      explanation: "Tesen om nødvendig identitet gjelder for enhver identitet, også mellom enkelthendelser: er denne smerten denne nevrale hendelsen, kunne de ikke vært to. Argumentet handler om ting og ikke om ordbetydning, og skillet mellom type og token utdypes i kapitlet om identitetsteorien.",
    },
  ],
  'fil1001-4-3': [
    {
      question: "Hva hevder identitetsteorien om mentale tilstander?",
      options: ["At de er numerisk identiske med hjernetilstander — det er én tilstand og ikke to", "At de er systematisk korrelert med hjernetilstander uten å være de samme tilstandene", "At de er forårsaket av hjernetilstander, men eksisterer som en annen sorts tilstand", "At de er navn vi bruker på atferdsmønstre som lar seg observere utenfra hos andre"],
      explanation: "Identitetsteorien hevder numerisk identitet: smerte er ikke bare knyttet til C-fiber-fyring, den er den samme tilstanden. Korrelasjon og årsakssammenheng er forenlige med dualisme, og å redusere det mentale til atferd er behaviorismens grep, ikke identitetsteoriens.",
    },
    {
      question: "Hva er poenget med lyn-analogien?",
      options: ["At «lyn» og «elektrisk utladning» betyr ulike ting, men likevel viser til samme fenomen", "At lyn og utladning er to atskilte fenomener som alltid opptrer sammen i naturen", "At vi lærte hva lyn er ved å analysere betydningen av ordet grundig nok på forhånd", "At vitenskapen kan omtale det samme fenomenet på flere måter uten å ta stilling til hva det er"],
      explanation: "Analogien svarer på innvendingen om at ordene «smerte» og «C-fiber-fyring» åpenbart ikke betyr det samme. Det gjorde ikke «lyn» og «utladning» heller, og likevel er lynet utladningen — identiteten er a posteriori og oppdaget, ikke analytisk.",
    },
    {
      question: "Hvorfor er det viktig at identitetsteorien ikke er en betydningsteori?",
      options: ["Fordi den ellers ville vært motbevist av at barn bruker ordet «vondt» uten å kjenne til nervefibre", "Fordi betydningsteorier om ord for indre tilstander alltid viser seg å være usanne ved nærmere prøving", "Fordi den ellers ville forutsatt at alle språkbrukere kjenner den samme vitenskapelige teorien", "Fordi den ellers ikke ville kunne forklare hvorfor mennesker snakker om sinnet i det hele tatt"],
      explanation: "Var identiteten en påstand om ordbetydninger, ville den vært motbevist umiddelbart av hvordan ordene læres. Ved å gjøre den til en vitenskapelig oppdagelse blir teorien immun mot språklige innvendinger — men samtidig sårbar for Kripkes argument om at oppdagede identiteter må være nødvendige.",
    },
    {
      question: "Hvorfor beviser ikke perfekte korrelasjonsdata identitetsteorien?",
      options: ["Fordi en dualist kan godta alle dataene og si at det nevrale forårsaker det mentale", "Fordi korrelasjonsdata alltid har målefeil som gjør konklusjoner om identitet usikre", "Fordi identitet er et begrepslig og ikke et empirisk spørsmål i det hele tatt", "Fordi korrelasjonene bare gjelder for de forsøkspersonene som faktisk er undersøkt"],
      explanation: "Data om samvariasjon er forenlige både med identitet og med årsakssammenheng, og skiller derfor ikke mellom hypotesene. Identitetsteoretikerens argument er en betraktning om beste forklaring — ikke et bevis fra dataene, og heller ikke et rent begrepslig argument.",
    },
    {
      question: "Hva er forskjellen på type og token?",
      options: ["En type er et slag, en token er et enkelttilfelle av det slaget", "En type er et enkelttilfelle, en token er det slaget tilfellet hører til", "En type er en fysisk tilstand, en token er den mentale tilstanden som svarer til den", "En type er en egenskap vi kan observere, en token er en egenskap vi må slutte oss til"],
      explanation: "Skillet er mellom slag og forekomst: ordet «hun» er én type med mange tokens i en tekst. Det har ingenting med skillet mellom fysisk og mentalt å gjøre, og heller ikke med hva vi kan observere.",
    },
    {
      question: "Hva sier typeidentitet?",
      options: ["At slaget smerte er slaget C-fiber-fyring, hos enhver skapning som har vondt", "At hver enkelt smerte er en eller annen fysisk hendelse, uten krav om samme slag", "At smerte og C-fiber-fyring alltid opptrer sammen hos mennesker, men ikke hos dyr", "At ordene «smerte» og «C-fiber-fyring» viser til samme slag i vårt eget språk"],
      explanation: "Typeidentitet er den universelle påstanden om slag: samme mentale slag er samme fysiske slag overalt. Påstanden om enkelthendelser er tokenidentitet, og påstanden om at de opptrer sammen, er ren korrelasjon.",
    },
    {
      question: "Hvorfor er typeidentitet en sterkere påstand enn tokenidentitet?",
      options: ["Fordi den medfører tokenidentitet, mens tokenidentitet ikke medfører typeidentitet", "Fordi den gjelder for flere arter samtidig, mens tokenidentiteten bare gjelder for mennesker som oss", "Fordi den er empirisk testbar, mens tokenidentitet bare kan avgjøres begrepslig", "Fordi den ble formulert først, og senere posisjoner alltid svekker de tidligere"],
      explanation: "Er slagene identiske, er også hvert enkelttilfelle det — men ikke omvendt. Derfor gir typeidentitet mer forklaringskraft og er lettere å motbevise: ett moteksempel er nok. Rekkefølgen i historien avgjør ingenting om styrke.",
    },
    {
      question: "Hva er en kausalrolle?",
      options: ["Mønsteret av årsaker og virkninger en tilstand står i, altså hva som gir den og hva den gir", "Den evnen en tilstand har til å frambringe atferd uten at noen indre prosess er involvert", "Den funksjonen en tilstand har i vår forklaring av andres handlinger og beslutninger", "Den plassen en tilstand har i den kausale kjeden mellom to fysiske hendelser i hjernen"],
      explanation: "Kausalrollen er mønsteret: smerte frambringes typisk av vevsskade og gir unnvikelse og ønske om lindring. Begrepet forutsetter ikke at indre tilstander utelates — det er nettopp forskjellen fra behaviorismen — og det gjelder tilstanden selv, ikke bare vår forklaring av andre.",
    },
    {
      question: "Hvordan er Lewis' argument for at sinnet er hjernen bygget opp?",
      options: ["Ett begrepslig trinn om hva «smerte» betyr, og ett empirisk trinn om hva som fyller rollen", "To empiriske trinn: først korrelasjonsdata, deretter en statistisk slutning til identitet", "To begrepslige trinn: først en definisjon av smerte, deretter en analyse av identitetsbegrepet", "Ett metafysisk trinn om substansenes natur og ett trinn om hva vitenskapen kan måle"],
      explanation: "Argumentet kombinerer en begrepsanalyse — smerte er det som spiller smerterollen — med et empirisk funn om hvilken nevral tilstand som faktisk spiller den. Identiteten utledes dermed i stedet for å postuleres, og ingen av trinnene er statistisk eller metafysisk i seg selv.",
    },
    {
      question: "Hvilken fordel gir Lewis' rollebeskrivelse mot Kripkes argument?",
      options: ["Den gjør «smerte» ikke-rigid, og dermed faller Kripkes premiss om rigiditet", "Den gjør «smerte» rigid, og dermed blir identiteten nødvendig slik Kripke krever", "Den gjør identiteten analytisk, og dermed er den ikke lenger a posteriori", "Den gjør identiteten artsspesifikk, og dermed rammer ikke Kripkes eksempel"],
      explanation: "En rollebeskrivelse peker på den som fyller rollen, og rollen kunne vært fylt av noe annet — altså er uttrykket ikke-rigid, og Kripkes andre premiss faller. Grepet gjør ikke identiteten analytisk, og artsspesifisering er et annet og senere trekk.",
    },
    {
      question: "Hvilken kostnad har Lewis' rollebeskrivelse for identitetsteorien?",
      options: ["Roller kan fylles av ulike tilstander, så typeidentiteten kan ikke være universell", "Roller kan ikke observeres, så teorien mister enhver kontakt med nevrovitenskapen", "Roller er språklige konstruksjoner, så teorien blir en påstand om ord og ikke om ting", "Roller endrer seg over tid, så identiteten ville bare gjelde i et bestemt tidsrom"],
      explanation: "Åpner man for at smerte er «det som fyller smerterollen», åpner man for at ulike tilstander fyller den i ulike skapninger — altså for multippel realiserbarhet. Roller er både observerbare gjennom sine virkninger og fullt reelle; problemet er variasjonen i hvem som fyller dem.",
    },
    {
      question: "Hva er multippel realiserbarhet?",
      options: ["At samme mentale tilstand kan realiseres av helt ulike fysiske tilstander i ulike vesener", "At samme fysiske tilstand kan gi opphav til helt ulike mentale tilstander hos ulike vesener", "At samme mentale tilstand kan opptre mange ganger hos den samme personen i løpet av et helt liv", "At samme mentale tilstand kan beskrives på flere ulike måter avhengig av hvilket fag man bruker"],
      explanation: "Innvendingen gjelder ulike fysiske realiserere av samme mentale tilstand — blekksprut, menneske, kanskje maskin. Den motsatte påstanden ville brutt med supervenience, og innvendingen handler verken om gjentakelse over tid eller om beskrivelsesnivåer.",
    },
    {
      question: "Hvilken form for identitet rammer multippel realiserbarhet?",
      options: ["Typeidentitet, siden den hevder at samme mentale slag er samme fysiske slag overalt", "Tokenidentitet, siden den hevder at hver enkelt hendelse er en bestemt fysisk hendelse", "Begge like hardt, siden begge hevder en fast kobling mellom det mentale og det fysiske", "Ingen av dem, siden innvendingen bare gjelder funksjonalismen og ikke identitetsteorien"],
      explanation: "Innvendingen felles ved ett moteksempel den universelle påstanden om slag. Tokenidentiteten er upåvirket: hver enkelt smerte kan godt være en eller annen fysisk hendelse uten at det er samme slag hendelse hver gang.",
    },
    {
      question: "Hva er det beste svaret identitetsteoretikeren har på multippel realiserbarhet?",
      options: ["Å gjøre identiteten artsspesifikk: smerte-hos-mennesker er én tilstand, smerte-hos-blekksprut en annen", "Å avvise at nervesystemer kan være bygget på fundamentalt ulike måter hos ulike arter", "Å hevde at all smerte til slutt vil vise seg å hvile på de samme molekylære prosessene", "Ingen av dem, siden innvendingen bare gjelder funksjonalismen og ikke identitetsteorien i noen form"],
      explanation: "Artsspesifikk identitet beholder typeidentitet i en snevrere form. Svaret som benekter biologisk variasjon, er empirisk uholdbart, og å erklære spørsmålet uavgjørbart er å gi opp posisjonen i stedet for å forsvare den.",
    },
    {
      question: "Hva koster artsspesifikk identitet?",
      options: ["At «smerte» ikke lenger navngir én egenskap på tvers av arter, så artsuavhengige lover mister sin gjenstand", "At identitetsteorien blir uforenlig med at det fysiske er kausalt lukket i vår egen art", "At teorien ikke lenger kan forklare hvorfor smerte oppleves som ubehagelig for oss selv", "At teorien må gi opp at identiteten er a posteriori og gjøre den til en betydningslikhet"],
      explanation: "Prisen er at psykologiske generaliseringer som «smerte gir unnvikelse» mister en felles gjenstand på tvers av arter. Manøveren berører verken kausal lukkethet, spørsmålet om ubehag eller identitetens a posteriori-status.",
    },
    {
      question: "Hva sier supervenience om forholdet mellom det mentale og det fysiske?",
      options: ["At det ikke kan være noen mental forskjell uten en fysisk forskjell", "At det ikke kan være noen fysisk forskjell uten en mental forskjell", "At enhver mental egenskap er identisk med en eller annen fysisk egenskap", "At enhver mental egenskap er forårsaket av en eller annen fysisk egenskap"],
      explanation: "Retningen er ensidig: fysisk like vesener må være mentalt like, men ikke omvendt. Å snu retningen gjør påstanden usann, og supervenience er verken identitet eller årsakssammenheng — det er en avhengighetsrelasjon.",
    },
    {
      question: "Hvorfor er supervenience ikke det samme som identitet?",
      options: ["Fordi supervenience bare sier at det ene bestemmer det andre, ikke at de er én ting", "Fordi supervenience gjelder egenskaper, mens identitet bare gjelder konkrete gjenstander", "Fordi supervenience er en empirisk hypotese, mens identitet er en begrepslig sannhet", "Fordi supervenience gjelder mellom teorier, mens identitet gjelder mellom tilstander"],
      explanation: "Supervenience er den svakere relasjonen: B bestemmer A uten at A er B. Det er nettopp derfor den er attraktiv for den som vil være fysikalist uten å hevde identitet — og nettopp derfor Kims problem med mental kausalitet oppstår.",
    },
    {
      question: "Hva er Kims minimale fysikalisme?",
      options: ["Tesen om at det mentale supervenierer på det fysiske, og ikke mer enn det", "Tesen om at alle mentale egenskaper lar seg redusere til fysiske egenskaper", "Tesen om at bare fysiske egenskaper har kausal kraft i den fysiske verden", "Tesen om at det mentale er identisk med det fysiske på enkelthendelsesnivå"],
      explanation: "Minimal fysikalisme er den svakeste posisjonen som fortsatt fortjener navnet: mind-body-supervenience, uten krav om identitet eller reduksjon. Reduksjonstesen og tokenidentiteten er sterkere posisjoner, og tesen om kausal kraft er et eget prinsipp om kausal lukkethet.",
    },
    {
      question: "Hva er ikke-reduktiv fysikalisme?",
      options: ["At alt er fysisk og det mentale supervenierer, men at mentale egenskaper ikke lar seg redusere", "At alt er fysisk og alle mentale egenskaper lar seg redusere til fysiske egenskaper", "At det mentale ikke er fysisk, men likevel er fullstendig bestemt av det fysiske", "At det mentale er fysisk, men at vi aldri kommer til å oppdage hvilke tilstander det gjelder"],
      explanation: "Posisjonen kombinerer fysikalisme og supervenience med en benektelse av reduserbarhet. Den er ikke reduksjonisme, den er ikke en form for dualisme, og den handler om hva som er tilfelle og ikke om hva vi kan komme til å oppdage.",
    },
    {
      question: "Hvorfor er ikke-reduktiv fysikalisme attraktiv?",
      options: ["Den gir fysikalismens sparsommelighet uten å rammes av multippel realiserbarhet", "Den gir fysikalismens sparsommelighet og forklarer i tillegg qualia fullstendig", "Den unngår kravet om kausal lukkethet og gir dermed rom for fri vilje i naturen", "Den unngår å ta stilling til om det finnes mentale egenskaper i det hele tatt"],
      explanation: "Attraktiviteten ligger i at posisjonen ikke hevder noen kobling mellom mentale og fysiske slag, og derfor ikke rammes av multippel realiserbarhet. Den løser ikke qualia-problemet, den benekter ikke kausal lukkethet, og den hevder tvert imot at mentale egenskaper finnes.",
    },
    {
      question: "Hva er Kims hovedinnvending mot ikke-reduktiv fysikalisme?",
      options: ["At en ureduserbar mental egenskap ikke har noe kausalt arbeid igjen å gjøre", "At supervenience er en altfor sterk tese til at noen fysikalist kan godta den fullt ut", "At posisjonen ikke kan gjøre rede for hvorfor to arter kan ha samme opplevelse", "At posisjonen forutsetter at det finnes strenge psyko-fysiske lover i naturen"],
      explanation: "Er det fysiske kausalt lukket, har enhver fysisk virkning allerede en tilstrekkelig fysisk årsak, og den ureduserbare mentale egenskapen står igjen uten oppgave. Innvendingen gjelder kausalitet, ikke supervenience i seg selv, og den forutsetter ikke psyko-fysiske lover.",
    },
    {
      question: "Hva kalles Kims argument mot ikke-reduktiv fysikalisme?",
      options: ["Eksklusjonsargumentet", "At supervenience er en altfor sterk tese til at noen fysikalist med rimelighet kan godta den", "Konsekvensargumentet", "Bøtteargumentet"],
      explanation: "Eksklusjonsargumentet hevder at den fysiske årsaken ekskluderer den mentale. Kunnskapsargumentet hører til qualia-debatten, konsekvensargumentet til fri vilje-debatten, og bøtteargumentet til striden om rommets natur.",
    },
    {
      question: "Hva er problemet med broprinsipp- eller lovreduksjon, ifølge Kim?",
      options: ["Broprinsippene er selv uforklarte korrelasjoner — det som skulle forklares, tas som utgangspunkt", "Kunnskapsargumentet om Mary og hennes nye viten", "Broprinsippene gjør reduksjonen sirkulær, siden de forutsetter at identiteten allerede er vist", "Broprinsippene krever at begge teoriene bruker nøyaktig de samme grunnbegrepene"],
      explanation: "Modellen gir en utledning, men ikke en forklaring: koblingene mellom teorienes termer står igjen som brute fakta. Kim hevder ikke at prinsippene er usanne eller sirkulære, og modellen krever tvert imot at teoriene har ulike begreper.",
    },
    {
      question: "Hva kjennetegner identitetsreduksjon i Kims oppstilling?",
      options: ["Broprinsippene skjerpes til identiteter, så koblingen ikke lenger trenger forklaring", "Broprinsippene svekkes til statistiske sammenhenger som gjelder de fleste tilfeller", "Den reduserte teorien forkastes helt til fordel for den underliggende teorien", "Den mentale egenskapen defineres ved sin kausalrolle og realisereren finnes deretter"],
      explanation: "Ved å gjøre broene til identiteter forsvinner problemet med uforklarte koblinger — det er én ting og ikke to. Å definere ved kausalrolle er den funksjonelle reduksjonen, altså modell 3, og fullstendig forkastelse av teorien er eliminasjon og ikke reduksjon.",
    },
    {
      question: "Hva er de tre trinnene i funksjonell reduksjon?",
      options: ["Funksjonaliser egenskapen ved dens rolle, finn realisereren, forklar hvordan den fyller rollen", "Broprinsippene er alltid usanne, siden ingen psyko-fysiske korrelasjoner viser seg å være unntaksfrie", "Definer egenskapen, vis at den er identisk med en fysisk egenskap, avvis moteksempler", "Beskriv atferden, finn den nevrale årsaken til atferden, identifiser tilstanden med årsaken"],
      explanation: "Kims modell 3 går fra funksjonalisering via realisererfunn til en forklaring av rollefyllingen. Broprinsipper og utledning tilhører modell 1, og direkte identifikasjon tilhører modell 2.",
    },
    {
      question: "Hvorfor tåler funksjonell reduksjon multippel realiserbarhet?",
      options: ["Fordi rollen kan ha ulike realiserere i ulike systemer uten at modellen bryter sammen", "Fordi modellen benekter at ulike arter kan ha de samme mentale tilstandene", "Fordi modellen erstatter mentale egenskaper med atferd, som er lik på tvers av arter", "Fordi modellen bare anvendes på mennesker, der realisereren er den samme hos alle"],
      explanation: "Modellen identifiserer ikke egenskapen med én bestemt fysisk tilstand, men funksjonaliserer den og lar realisereren variere fra system til system. Den benekter verken felles mentale tilstander på tvers av arter eller erstatter dem med atferd.",
    },
    {
      question: "Hva er qualia-residuet i Kims framstilling?",
      options: ["At den følte kvaliteten ved opplevelser later til å ikke være uttømt av noen kausalrolle", "At vi mangler nevrovitenskapelige data om hvilke hjerneområder som gir bevisste opplevelser", "At ordet «qualia» brukes så ulikt i litteraturen at det ikke lar seg definere presist", "At qualia bare finnes hos mennesker og derfor ikke kan inngå i generelle lover om sinnet"],
      explanation: "Residuet er en prinsipiell begrensning: to tilstander kan spille samme rolle og likevel føles ulikt, så funksjonalisering fanger dem ikke. Problemet er verken mangel på data, uklar terminologi eller en påstand om at bare mennesker har opplevelser.",
    },
    {
      question: "Hvilken konklusjon lander Kim selv på i sin modne framstilling?",
      options: ["At reduksjonsprosjektet lykkes for kognitive tilstander, mens et residuum av qualia motstår det", "At vi fortsatt mangler nevrovitenskapelige data om hvilke hjerneområder som gir bevisste opplevelser", "At reduksjonsprosjektet feiler helt, slik at en form for egenskapsdualisme er uunngåelig", "At reduksjonsprosjektet er meningsløst, siden mentale egenskaper ikke finnes i det hele tatt"],
      explanation: "Kim lander på en fysikalisme som dekker nesten alt: tro, ønske og hukommelse lar seg funksjonalisere, mens qualia står igjen. Han er verken en enkel reduksjonist, en egenskapsdualist eller en eliminativist om det mentale.",
    },
    {
      question: "Hva er identitetsteoriens sterkeste kort mot dualismen?",
      options: ["At den oppløser interaksjonsproblemet, siden det ikke er to ting som skal møtes", "At den er bekreftet av nevrovitenskapelige funn som dualismen ikke kan forklare", "At den forklarer bedre hvorfor det mentale og det fysiske later til å være så ulike", "At den er den eldste posisjonen i debatten og derfor best gjennomprøvd i litteraturen"],
      explanation: "Interaksjonsproblemet oppstår bare hvis to ulike slag ting skal påvirke hverandre; er tilstanden én, forsvinner problemet. Nevrovitenskapens funn er forenlige med begge posisjoner, og på spørsmålet om den begrepslige kløften står identitetsteorien snarere svakt.",
    },
    {
      question: "Hvordan skiller identitetsteorien seg fra funksjonalismen?",
      options: ["Identitetsteorien identifiserer tilstanden med rollens fyller, funksjonalismen med rollen selv", "Identitetsteorien identifiserer tilstanden med rollen selv, funksjonalismen med rollens fyller", "Identitetsteorien er en form for dualisme, mens funksjonalismen er en form for fysikalisme", "Identitetsteorien gjelder bare smerte, mens funksjonalismen gjelder alle mentale tilstander"],
      explanation: "Skillet ligger i hva tilstanden identifiseres med: fylleren eller rollen. Derfor rammes identitetsteorien av multippel realiserbarhet og funksjonalismen ikke. Begge er fysikalistiske posisjoner, og begge er ment å gjelde generelt.",
    },
  ],
  'fil1001-4-4': [
    {
      question: "Hva er problemet med mental kausalitet?",
      options: ["At den fysiske årsakskjeden ser ut til å være tilstrekkelig, så det mentale står uten arbeid", "At vi ikke kan observere mentale tilstander direkte og derfor ikke kan måle deres virkninger", "At mentale tilstander varierer så mye mellom mennesker at ingen generell lov kan formuleres", "At mentale tilstander alltid kommer etter handlingen de skal ha forårsaket, ifølge forsøk"],
      explanation: "Problemet er strukturelt: har den fysiske virkningen allerede en tilstrekkelig fysisk årsak, er det uklart hva den mentale bidrar med. Det er verken et måleproblem, et problem om variasjon mellom individer eller et spørsmål om rekkefølge i tid.",
    },
    {
      question: "Hvorfor rammer problemet med mental kausalitet også fysikalister?",
      options: ["Fordi en mental egenskap som bare supervenierer, fortsatt er noe annet enn den fysiske", "Fordi fysikalister må benekte at det finnes mentale tilstander eller egenskaper i det hele tatt", "Fordi fysikalister ikke kan godta premisset om at det fysiske er kausalt lukket i naturen", "Fordi fysikalister mangler et begrep om årsak som kan brukes på hjernen"],
      explanation: "Så lenge den mentale egenskapen ikke er identisk med den fysiske, er den en kandidat til å konkurrere med den. Bare den som hevder identitet eller reduksjon, slipper unna. Fysikalister benekter ikke at mentale tilstander finnes, og de godtar tvert imot kausal lukkethet.",
    },
    {
      question: "Hva er selvkunnskapsargumentet for mental kausalitet?",
      options: ["At ytringen «jeg har vondt» er en fysisk hendelse som må handle om smerten for å være sann", "At vi kjenner vårt eget sinn langt bedre enn vi kjenner noen annen del av virkeligheten omkring oss", "At vi umulig kan ta feil om våre egne opplevelser, slik vi kan ta feil om verden utenfor oss", "At vi lærer ordene for mentale tilstander ved å observere vår egen atferd innenfra"],
      explanation: "Argumentet er at det blir uforklarlig hvordan ytringen kan handle om nettopp min smerte, hvis smerten som sådan ikke gjør noe kausalt. Det handler ikke om innsiktens sikkerhet eller om hvordan vi lærer ordene, men om hva som skal til for at ytringen skal ha rett gjenstand.",
    },
    {
      question: "Hva er premiss 2 i Kims eksklusjonsargument?",
      options: ["At den fysiske virkningen har en tilstrekkelig fysisk årsak (kausal lukkethet)", "At den mentale hendelsen forårsaker den fysiske virkningen (mental kausalitet)", "At den mentale hendelsen ikke er identisk med den fysiske (ikke-reduktiv)", "At virkningen ikke er systematisk overdeterminert av to tilstrekkelige årsaker"],
      explanation: "Premiss 2 er kausal lukkethet av det fysiske. De øvrige er premiss 1, 3 og 4 i argumentet — å blande rekkefølgen gjør det vanskelig å si hvilket premiss en innvending rammer, og det er nettopp det oppgavene spør etter.",
    },
    {
      question: "Hva er konklusjonen i eksklusjonsargumentet?",
      options: ["At den mentale årsaken ekskluderes, slik at man må gi opp minst ett av de fire premissene", "At det ikke finnes mentale tilstander overhodet, siden bare fysiske tilstander har noen kausal kraft", "At det fysiske ikke kan være kausalt lukket, siden vi vet at tankene våre påvirker handlingene", "At mentale og fysiske årsaker samvirker i et parti der begge bidrar med hver sin del"],
      explanation: "Argumentet viser at de fire premissene ikke kan holdes sammen, slik at minst ett må gis opp. Det konkluderer verken med at mentale tilstander ikke finnes, med at lukketheten er usann, eller med noen samvirke-modell — hvilket premiss man ofrer, er nettopp det som skal drøftes.",
    },
    {
      question: "Hvilken utvei foretrekker Kim selv?",
      options: ["Å gi opp ikke-identiteten, altså å redusere det mentale til det fysiske", "Å gi opp mental kausalitet og godta en full epifenomenalisme om alt det mentale", "Å gi opp kausal lukkethet og godta at det fysiske kan påvirkes fra noe ikke-fysisk", "Å gi opp forbudet mot systematisk overdeterminering av mentale årsaker"],
      explanation: "Kim foretrekker reduksjon, helst funksjonell reduksjon: er den mentale egenskapen redusert, er den ikke lenger en konkurrent til den fysiske. De tre andre utveiene er dem han argumenterer imot — særlig epifenomenalismen, som han ser som prisen ikke-reduktiv fysikalisme risikerer å måtte betale.",
    },
    {
      question: "Hva sier eksklusjonsprinsippet?",
      options: ["At én virkning ikke kan ha to uavhengige, hver for seg tilstrekkelige årsaker", "At én årsak ikke kan ha to virkninger som hver for seg er tilstrekkelig forklart", "At mentale årsaker alltid utelukkes av fysiske årsaker i ethvert tenkelig tilfelle", "At en tilstrekkelig årsak alltid utelukker at virkningen kunne uteblitt likevel"],
      explanation: "Prinsippet handler om to uavhengige tilstrekkelige årsaker til én virkning, og det er en alminnelig antakelse i all årsaksforklaring, ikke noe spesielt for sinnsfilosofi. Ordet **uavhengige** er avgjørende — det er der den viktigste motinnvendingen setter inn.",
    },
    {
      question: "Hvorfor er ordet «systematisk» viktig i premiss 4?",
      options: ["Fordi premisset ikke benekter at overdeterminering finnes, bare at den kan være gjennomgående", "Fordi premisset bare gjelder for handlinger som gjentas ofte hos den samme personen over tid i sitt eget liv", "Fordi premisset krever at overdetermineringen kan formuleres som en streng naturlov", "Fordi premisset bare gjelder for virkninger som lar seg måle presist med naturvitenskapelige metoder"],
      explanation: "Overdeterminering finnes, men er sjelden og tilfeldig — som når to snikskyttere skyter samtidig. Kims premiss utelukker at hver eneste handling hos hvert eneste menneske skulle være overdeterminert, siden et sammentreff som gjentas milliarder av ganger, selv krever forklaring.",
    },
    {
      question: "Hva er kausal lukkethet av det fysiske?",
      options: ["At enhver fysisk hendelse som har en årsak, har en tilstrekkelig fysisk årsak", "At enhver fysisk hendelse er entydig fastlagt av naturlovene og fortidens tilstand", "At det fysiske universet verken mottar eller avgir energi fra noe utenfor seg selv", "At alle hendelser som overhodet finnes, er fysiske hendelser og ikke noe annet enn det"],
      explanation: "Prinsippet gjelder tilstrekkelige fysiske årsaker til fysiske virkninger. Det er ikke determinisme — en indeterministisk fysikk kan være like lukket — og det er heller ikke i seg selv tesen om at alt er fysisk.",
    },
    {
      question: "Hva er den beste begrunnelsen for kausal lukkethet?",
      options: ["At fysikken har lett etter hull i den fysiske årsakskjeden i hundrevis av år uten å finne noen", "At det er logisk selvmotsigende å tenke seg en fysisk virkning uten noen fysisk årsak bak seg i noen som helst forstand", "At begrepet «fysisk» allerede er definert slik at bare fysiske ting kan påvirke fysiske ting i verden", "At vi har målt hjernen presist nok til å utelukke enhver påvirkning fra noe ikke-fysisk"],
      explanation: "Begrunnelsen er en induksjon fra vitenskapelig praksis, støttet av bevaringslovene. Den er verken en logisk sannhet eller en definisjon, og det er nettopp poenget at målingen som ville avgjort saken, ikke er utført.",
    },
    {
      question: "Hva er den skarpeste innvendingen mot kausal lukkethet som premiss?",
      options: ["At et metodologisk prinsipp om alltid å lete etter fysiske årsaker er gjort om til en metafysisk påstand", "At prinsippet motsies av forsøk som viser at beslutninger kommer etter den nevrale aktiviteten de skal styre", "At prinsippet er uforenlig med at fysikken selv beskriver noen hendelser som rent tilfeldige og uten årsak", "At prinsippet ikke lar seg formulere presist nok til å kunne prøves i det hele tatt"],
      explanation: "Glidningen fra en god forskningsregel til en påstand om hva som alltid finnes, er den mest presise innvendingen. Prinsippet er forenlig med indeterminisme, det lar seg formulere presist, og eksperimentene om beslutningers timing er et annet spørsmål.",
    },
    {
      question: "Hva er Davidsons tre prinsipper i anomalisk monisme?",
      options: ["Kausal interaksjon, kausalitetens lovmessighet og det mentales anomalisme", "Kausal lukkethet, supervenience og forbudet mot systematisk overdeterminering", "Token-identitet, typeidentitet og reduksjon av det mentale til det fysiske", "Ekstensjonalitet, rasjonalitetsnormer og fravær av mentale årsaker i naturen"],
      explanation: "De tre er at mentale og fysiske hendelser påvirker hverandre, at kausalitet krever strenge lover, og at det ikke finnes strenge psyko-fysiske lover. De øvrige forslagene blander inn Kims premisser eller identitetsteoriens begreper.",
    },
    {
      question: "Hva er Davidsons løsning på spenningen mellom de tre prinsippene?",
      options: ["Kausalitet gjelder mellom hendelser, og én hendelse kan beskrives både mentalt og fysisk", "Kausalitet gjelder mellom beskrivelser, og de mentale beskrivelsene har sine egne strenge lover", "Kausalitet krever ikke lover, så det tredje prinsippet skaper ikke noe problem", "Kausalitet mellom mentalt og fysisk er tilsynelatende og skyldes en forhåndsbestemt harmoni"],
      explanation: "Løsningen er ekstensjonalitet: relasjonen holder mellom hendelser uansett beskrivelse, og under den fysiske beskrivelsen faller hendelsen under strenge lover. Davidson gir verken opp lovkravet, innfører mentale lover eller postulerer noen harmoni.",
    },
    {
      question: "Hva er resultatet av Davidsons løsning?",
      options: ["Token-identitet uten typeidentitet — en ikke-reduktiv fysikalisme", "Typeidentitet uten token-identitet — en reduktiv fysikalisme", "Både type- og token-identitet — den klassiske identitetsteorien om sinnet", "Verken type- eller token-identitet — en form for egenskapsdualisme"],
      explanation: "Hver enkelt mental hendelse er en fysisk hendelse, men det finnes ingen lovmessig kobling mellom mentale og fysiske slag. Det er derfor posisjonen er ikke-reduktiv — og derfor Kim angriper den. Typeidentitet uten token-identitet er dessuten umulig.",
    },
    {
      question: "Er Davidson reduksjonist?",
      options: ["Nei — anomalisk monisme er token-identitet uten strenge psyko-fysiske lover, altså ikke-reduktiv", "Ja — token-identitet mellom enkelthendelser er nettopp det reduksjon av det mentale betyr, ifølge de fleste framstillinger", "Ja — han identifiserer de mentale egenskapene med fysiske egenskaper i hvert eneste enkelttilfelle", "Nei — han benekter at mentale hendelser er fysiske hendelser i det hele tatt"],
      explanation: "Å skrive at Davidson er reduksjonist er en dokumentert feil: uten strenge psyko-fysiske lover er det ingen reduksjon, og det er nettopp derfor Kim angriper ham. Han identifiserer hendelser, ikke egenskaper, og han benekter ikke at mentale hendelser er fysiske.",
    },
    {
      question: "Hva er det mentales anomalisme hos Davidson?",
      options: ["At det ikke finnes strenge, unntaksfrie lover som knytter mentale beskrivelser til fysiske", "At mentale tilstander opptrer uregelmessig og uforutsigbart hos den enkelte person over tid", "At mentale tilstander ikke kan beskrives presist nok til å inngå i vitenskapelige teorier", "At mentale tilstander står utenfor årsakskjeden og derfor ikke kan forårsake noe fysisk"],
      explanation: "Anomalismen gjelder fravær av strenge psyko-fysiske lover, ikke uforutsigbarhet i praksis eller mangel på presisjon. Og den innebærer ikke at det mentale står utenfor kausaliteten — hele poenget hos Davidson er at det ikke gjør det.",
    },
    {
      question: "Hva er Kims kritikk av anomalisk monisme?",
      options: ["At hendelsen virker i kraft av sine fysiske egenskaper, så de mentale gjør ikke noe arbeid", "At token-identitet er uforenlig med at det ikke finnes strenge psyko-fysiske lover i naturen", "At posisjonen forutsetter kausal lukkethet, som Davidson ikke har begrunnet noe sted", "At posisjonen ikke kan forklare hvorfor to ulike arter kan ha samme mentale tilstand"],
      explanation: "Kritikken treffer på egenskapsnivå: bare de fysiske egenskapene faller under strenge lover, så bare de kan bære kausalitet, og posisjonen kollapser til epifenomenalisme om det mentale. Innvendingen gjelder verken koherens, lukkethetens begrunnelse eller artsforskjeller.",
    },
    {
      question: "Hva er egenskaps-epifenomenalisme?",
      options: ["At mentale hendelser virker, men at deres mentale egenskaper ikke gjør noe kausalt arbeid", "At mentale hendelser ikke virker i det hele tatt, verken som hendelser eller som egenskaper", "At fysiske egenskaper er uvirksomme, mens mentale egenskaper bærer all kausalitet", "At mentale egenskaper virker, men bare på andre mentale egenskaper og aldri på kroppen"],
      explanation: "Distinksjonen er presis: hendelsen virker, som fysisk hendelse, men at den også var en tanke om vann, spilte ingen rolle for utfallet. Det er dette Kim mener anomalisk monisme ender i, og det er noe annet enn full epifenomenalisme om hendelser.",
    },
    {
      question: "Hva er anomalisk monistens beste svar på Kims kritikk?",
      options: ["At spørsmålet «i kraft av hvilke egenskaper?» forutsetter en annen teori om kausalitet enn Davidsons", "At mentale hendelser ikke virker i det hele tatt, verken som hendelser eller som egenskaper ved dem hos personen det gjelder", "At kausal lukkethet er usann, slik at det mentale har rom til å virke selvstendig", "At mentale og fysiske egenskaper er identiske, slik at spørsmålet ikke oppstår"],
      explanation: "Davidson holder at kausalitet er ekstensjonell — en relasjon mellom hendelser, uansett beskrivelse. Krever Kim en relasjon mellom egenskaper, har han skiftet ut premisset. De øvrige svarene er posisjoner Davidson uttrykkelig avviser.",
    },
    {
      question: "Hva koster det anomaliske monisten å si at kausalitet er helt ekstensjonell?",
      options: ["At vi mister retten til å si at glasset knuste i kraft av skjørheten snarere enn av kjøpsprisen", "At mentale egenskaper faller under strenge lover så snart de beskrives tilstrekkelig presist nok i vitenskapelige termer", "At vi mister retten til å bruke strenge lover i forklaringer av fysiske hendelser", "At vi mister retten til å skille mellom årsaker og virkninger i en kausal kjede"],
      explanation: "Forskjellen mellom relevante og irrelevante egenskaper ved en årsak bruker vi hele tiden, og en helt ekstensjonell kausalitet gjør den vanskelig å forklare. Token-identiteten, lovbruken og årsak-virkning-skillet berøres derimot ikke.",
    },
    {
      question: "Hva går «i kraft av»-svaret på eksklusjonsargumentet ut på?",
      options: ["At den mentale og den fysiske årsaken ikke er uavhengige, siden den ene supervenierer på den andre", "At vi mister retten til å si at mentale hendelser er identiske med bestemte fysiske hendelser i hvert enkelt tilfelle", "At den fysiske årsaken ikke er tilstrekkelig, siden den mentale må komme i tillegg", "At virkningen er overdeterminert, men at overdeterminering er langt vanligere enn Kim tror"],
      explanation: "Svaret angriper ordet «uavhengige» i eksklusjonsprinsippet: ønsket og den nevrale tilstanden er ikke to konkurrenter, siden den ene foreligger i kraft av den andre. Svaret benekter verken at den fysiske årsaken er tilstrekkelig eller premisset om overdeterminering.",
    },
    {
      question: "Hva er skjørhetsanalogien ment å vise?",
      options: ["At vi uten problemer sier at glasset knuste fordi det var skjørt, selv om mikrostrukturen holdt", "At den mentale årsaken er sterkere enn den fysiske og derfor vinner konkurransen mellom de to om hva som skjer", "At egenskaper på høyere nivå alltid er uvirksomme, akkurat som mentale egenskaper er det", "At glass og hjerner er tilstrekkelig like til at samme forklaringsmodell må gjelde for begge"],
      explanation: "Analogien skal gjøre «i kraft av»-svaret intuitivt: den høyere egenskapen er ikke en konkurrent til sin basis. Den hevder verken at skjørhet er uforklarlig, at høyere nivåer er uvirksomme, eller at glass og hjerner er like i seg selv.",
    },
    {
      question: "Hva er Kims motsvar på skjørhetsanalogien?",
      options: ["At skjørhet nettopp lar seg funksjonelt redusere, så eksemplet støtter hans egen løsning", "At skjørhet ikke er en ekte egenskap, men bare en måte å beskrive glass på", "At glass ikke har mentale egenskaper, så analogien er irrelevant for sinnsfilosofi", "At skjørhet er en fysisk egenskap, mens mentale egenskaper ikke er fysiske i det hele tatt"],
      explanation: "Kim svarer at analogien enten hjelper for mye eller for lite: er skjørhet reduserbar, er eksemplet et argument for reduksjon; er den ikke reduserbar, står samme spørsmål igjen. Han benekter verken at skjørhet er en ekte egenskap eller at analogier på tvers av felt kan brukes.",
    },
    {
      question: "Hva er generaliseringsinnvendingen mot eksklusjonsargumentet?",
      options: ["At argumentet konsekvent anvendt ekskluderer alle høyere nivåer, ikke bare det mentale", "At argumentet bare gjelder for mennesker og ikke kan generaliseres til andre arter", "At argumentet forutsetter at alle fysiske hendelser har nøyaktig én årsak hver", "At argumentet bygger på et enkelttilfelle og derfor ikke kan generaliseres i det hele tatt"],
      explanation: "Innvendingen er at biologi, økonomi og til og med skjørhet ville blitt kausalt uvirksomme, og at et prinsipp med så vid virkning sannsynligvis er for sterkt. Kims svar er at de øvrige nivåene lar seg funksjonelt redusere, og at innvendingen derfor bekrefter ham.",
    },
    {
      question: "Hvorfor rammer eksklusjonsargumentet substansdualismen hardere enn ikke-reduktiv fysikalisme?",
      options: ["Fordi dualisten ikke engang kan påberope seg supervenience for å hevde at årsakene ikke er uavhengige", "Fordi dualisten hevder at det fysiske ikke er kausalt lukket, og dermed motsier seg selv på et punkt han selv holder fast ved", "Fordi dualisten godtar systematisk overdeterminering og bryter dermed premiss fire", "Fordi dualisten benekter at mentale tilstander har noen virkning på kroppen i det hele tatt"],
      explanation: "Ikke-reduktiv fysikalisme kan i det minste si at den mentale egenskapen foreligger i kraft av den fysiske. Dualisten har ingen slik relasjon å påberope seg og må derfor benekte kausal lukkethet — og står da igjen med interaksjonsproblemet.",
    },
    {
      question: "Hva er Kims samlede konklusjon om mental kausalitet?",
      options: ["At det som lar seg funksjonelt redusere er reddet, mens qualia står igjen uten kausal rolle", "At all mental kausalitet er en illusjon som vi burde slutte å bygge våre forklaringer på av menneskelig handling", "At mental kausalitet er uproblematisk så snart man godtar supervenience-relasjonen", "At spørsmålet ikke lar seg avgjøre med de begrepene filosofien har til rådighet i dag"],
      explanation: "Kim lander på en delt konklusjon: tro, ønske og hukommelse lar seg funksjonalisere og beholder kausal kraft, mens qualia motstår funksjonalisering. Han avviser altså verken all mental kausalitet, og han mener nettopp at supervenience alene ikke er nok.",
    },
  ],
  'fil1001-5-1': [
    {
      question: "Hva er en mental tilstand ifølge funksjonalismen?",
      options: ["Den tilstanden som fyller en bestemt kausalrolle, uansett hva den er laget av", "Den bestemte nevrale tilstanden som frambringer den typiske atferden hos mennesker", "En disposisjon til å oppføre seg på bestemte måter under bestemte ytre betingelser", "En ikke-fysisk tilstand som samvirker med kroppen gjennom sansene"],
      explanation: "Funksjonalismen identifiserer den mentale tilstanden med rollen, ikke med det som fyller den. Svaret om den nevrale tilstanden er identitetsteorien, og svaret om disposisjoner er behaviorismen — de to posisjonene funksjonalismen ble utformet for å skille seg fra.",
    },
    {
      question: "Hvilke tre ledd inngår i en kausalrolle slik funksjonalismen spesifiserer den?",
      options: ["Sanseinput, indre forbindelser til andre mentale tilstander og atferdsoutput", "Sanseinput, nevral realisering i hjernen og atferdsoutput i det aktuelle systemet", "Atferdsdisposisjon, verbal rapport og observerbar kroppslig reaksjon på stimulus", "Tro, ønske og hensikt slik de opptrer i en vanlig handlingsforklaring"],
      explanation: "Rollen har input, indre forbindelser og output. Forslaget med nevral realisering bytter ut midtleddet med realisereren, og forslaget om atferdsdisposisjoner beskriver behaviorismen — begge stryker nettopp det leddet som er funksjonalismens særpreg.",
    },
    {
      question: "Hvilket ledd i kausalrollen er den viktigste avgrensningen mot behaviorismen?",
      options: ["De indre forbindelsene mellom mentale tilstander", "Sanseinput fra omgivelsene og fra kroppens indre", "Den observerbare atferdsoutputen tilstanden gir opphav til", "Den nevrale realisereren som fyller rollen hos mennesker"],
      explanation: "Behaviorismen tillater bare input og atferd; funksjonalismen legger til indre tilstander som samvirker med hverandre. Realisereren er ikke et ledd i rollen i det hele tatt, men det som fyller den.",
    },
    {
      question: "Hva sier multippel realiserbarhet?",
      options: ["At samme mentale tilstand kan realiseres av ulike fysiske tilstander", "At samme fysiske tilstand kan gi opphav til ulike mentale tilstander over tid", "At en mental tilstand kan opptre uten noen fysisk realisering overhodet", "At mentale tilstander kan beskrives på flere nivåer samtidig"],
      explanation: "Poenget er én rolle med mange mulige realiserere, ikke én realiserer med mange roller. Forslaget om beskrivelse på to nivåer er sant om mye, men er ikke selve påstanden, og forslaget om realisering uten noe fysisk ville gjort funksjonalismen til en dualisme.",
    },
    {
      question: "Hvilken posisjon er multippel realiserbarhet først og fremst en innvending mot?",
      options: ["Typeidentitetsteorien", "Tokenidentitetsteorien", "Den logiske behaviorismen", "Descartes' substansdualisme"],
      explanation: "Innvendingen rammer påstanden om at hvert slag mental tilstand er ett slag fysisk tilstand. Tokenidentitet står urørt, siden den ikke krever at slagene svarer til hverandre, og behaviorismen felles av helt andre problemer.",
    },
    {
      question: "Hva er det springende premisset i argumentet fra multippel realiserbarhet?",
      options: ["Påstanden om at ulikt bygde vesener kan ha samme mentale tilstand", "Påstanden om at to identiske ting deler alle sine egenskaper med hverandre", "Påstanden om at typeidentitetsteorien identifiserer slag med slag", "Påstanden om at nevrovitenskapen finner ulike realiserere i ulike arter"],
      explanation: "Det springende premisset er muligheten, ikke logikken. Leddet om at identiske ting deler egenskaper er Leibniz' lov og er ubestridt, og leddet om hva typeidentitet sier er bare en definisjon.",
    },
    {
      question: "Hva er identitetsteoretikerens beste svar på multippel realiserbarhet?",
      options: ["Artsspesifikk identitet: én smertetype hos mennesker, en annen hos blekksprut", "Å gi opp typeidentiteten helt og gå over til ren tokenidentitet i stedet", "Å benekte at blekkspruter og andre dyr har mentale tilstander i det hele tatt", "Å hevde at rollen og realisereren er én og samme ting beskrevet på to nivåer"],
      explanation: "Artsspesifikk identitet redder typeidentiteten ved å snevre den inn. Å gå over til tokenidentitet er å oppgi teorien det spørres om, og å nekte dyr mentale tilstander er nettopp den sjåvinismen innvendingen anklager teorien for.",
    },
    {
      question: "Hva koster artsspesifikk identitet?",
      options: ["At «smerte» ikke lenger navngir én egenskap på tvers av arter", "At identitetsteorien blir uforenlig med fysikalismen som sådan", "At mentale tilstander ikke lenger kan ha kausale virkninger", "At teorien må godta at noen mentale tilstander er ikke-fysiske"],
      explanation: "Prisen er artsuavhengige generaliseringer: vi kan ikke lenger si noe sant om smerte som sådan. Teorien forblir fullt ut fysikalistisk og beholder mental kausalitet — det er nettopp derfor manøveren er attraktiv for identitetsteoretikeren.",
    },
    {
      question: "Hvorfor rammer ikke multippel realiserbarhet tokenidentitet?",
      options: ["Fordi tokenidentitet bare gjelder enkelttilfeller, ikke slag av tilstander", "Fordi tokenidentitet bare gjelder mennesker og ikke andre arter av tenkende vesener", "Fordi tokenidentitet er en påstand om språket og ikke om verden selv", "Fordi tokenidentitet allerede forutsetter at rollene kan fylles på ulike måter"],
      explanation: "Tokenidentitet sier ingenting om at samme slag mental tilstand må ha samme slag realiserer, og innvendingen handler nettopp om slag. Den er heller ikke begrenset til mennesker og er en påstand om hva hendelser er, ikke om ord.",
    },
    {
      question: "Hva er sirkularitetsproblemet i en funksjonell definisjon?",
      options: ["At en mental tilstand bare kan spesifiseres ved hjelp av andre mentale tilstander", "At kausalrollen viser til atferd som selv må forklares ved kausalroller", "At definisjonen forutsetter at nevrovitenskapen allerede har funnet realisereren", "At folkepsykologien inneholder plattityder som motsier hverandre"],
      explanation: "Sirkelen oppstår fordi smerte spesifiseres via ønske og tro, som selv er mentale. Forslaget om at plattitydene motsier hverandre er en annen innvending, og forslaget om nevrovitenskapen er ikke noe funksjonalismen forutsetter.",
    },
    {
      question: "Hva gjør man i det avgjørende trinnet i Ramsey-Lewis-metoden?",
      options: ["Erstatter hver mental term i teorien med en variabel", "Erstatter hver mental term med navnet på sin nevrale realiserer", "Fjerner alle plattityder som ikke er empirisk bekreftet", "Oversetter hver mental term til et utsagn om atferdsdisposisjoner"],
      explanation: "Grepet er å bytte ut de mentale termene med variabler, slik at setningen bare sier at det finnes tilstander med de forbindelsene. Oversettelse til atferdsdisposisjoner er behaviorismens program, og innsetting av realiserere ville gjort metoden artsspesifikk.",
    },
    {
      question: "Hva er en Ramsey-setning?",
      options: ["En setning som sier at det finnes tilstander med de og de forbindelsene", "En setning som lister opp alle plattitydene i folkepsykologien i rekkefølge", "En setning som identifiserer hver mental term med en bestemt nevral tilstand", "En setning som fastslår at mentale termer ikke har noen betydning i det hele tatt"],
      explanation: "Ramsey-setningen er teoriens innhold uten teoriens vokabular, og det er derfor den bryter sirkelen. Den avskaffer ikke betydning og sier ingenting om hvilke nevrale tilstander som fyller rollene.",
    },
    {
      question: "Hvorfor må mentale termer defineres samtidig i Ramsey-Lewis-metoden?",
      options: ["Fordi hver av dem bare har innhold i kraft av sin plass i hele nettet", "Fordi folkepsykologien er for kort til å definere dem én etter én", "Fordi nevrovitenskapen ennå ikke har funnet realisererne for dem", "Fordi de ellers ville blitt definert ved atferd i stedet for ved rolle"],
      explanation: "Definisjonene er holistiske: ingen term kommer først. Det handler ikke om teoriens lengde eller om nevrovitenskapens framgang, og heller ikke om faren for å havne i behaviorismen.",
    },
    {
      question: "Hva krever unikhetskravet i Ramsey-Lewis-metoden?",
      options: ["At det finnes nøyaktig én måte å fylle rollene på i systemet", "At hver mental term har nøyaktig én nevral realiserer i alle arter", "At folkepsykologien består av nøyaktig de plattitydene alle er enige om", "At hvert system kan ha nøyaktig én mental tilstand om gangen"],
      explanation: "Kravet gjelder oppsettet som gjør Ramsey-setningen sann: fylles rollene på flere måter, sier teorien ikke hvilket oppsett som er sinnet. Kravet handler verken om arter, om enighet eller om hvor mange tilstander noen kan ha samtidig.",
    },
    {
      question: "Hvor henter common sense functionalism kausalrollene fra?",
      options: ["Fra folkepsykologien — hverdagsforståelsen av hvordan sinnet virker", "Fra den ferdig utviklede vitenskapelige psykologien og nevrovitenskapen", "Fra en analyse av hva de mentale ordene betyr slik ordboken angir det", "Fra en kartlegging av hvilken atferd folk faktisk viser i eksperimenter"],
      explanation: "Rollene hentes fra nettet av selvfølgeligheter vi alle bruker om tro, ønske og smerte. Å hente dem fra ferdig vitenskap er den konkurrerende varianten, og posisjonen er ikke en ordbokanalyse av enkeltord.",
    },
    {
      question: "Hva er den sterkeste innvendingen mot common sense functionalism?",
      options: ["At hverdagsteorien kan være delvis feil, slik at ingenting fyller rollene", "At hverdagsteorien er så detaljert at multippel realiserbarhet blir umulig", "At hverdagsteorien ikke sier noe om forholdet mellom sinn og atferd", "At hverdagsteorien forutsetter at mentale tilstander er ikke-fysiske"],
      explanation: "Er plattitydene usanne, gjør Ramsey-setningen krav på noe som ikke finnes, og da har ingen tro og ønsker. Innvendingen om for stor detaljrikdom rammer tvert imot den vitenskapelige varianten.",
    },
    {
      question: "Hvilken pris betaler den vitenskapelige varianten av funksjonalismen?",
      options: ["Rollene blir så finmaskede at multippel realiserbarhet blir mindre plausibel", "Rollene blir så grove at teorien ikke lenger lar seg skille fra behaviorismen", "Teorien mister ethvert forhold til hvordan vi faktisk forklarer hverandre", "Teorien kan ikke lenger godta at mentale tilstander er fysisk realisert"],
      explanation: "Jo mer detaljert rollen er, desto færre systemer kan fylle den — og desto nærmere kommer man artsspesifikk identitet. Varianten er fullt ut fysikalistisk, og finmaskede roller er det motsatte av grove.",
    },
    {
      question: "Hva er Turing-testen?",
      options: ["En prøve der en dommer skal skille en maskin fra et menneske i en samtale", "En prøve som avgjør om et system har indre tilstander med riktige kausalroller", "En prøve der en maskin skal løse oppgaver raskere enn et voksent menneske", "En prøve som avgjør om et system har fenomenal bevissthet"],
      explanation: "Testen gjelder om maskinen kan framstå som et menneske i tekst. Den inspiserer ikke indre tilstander og sier ingenting om fenomenal bevissthet — nettopp derfor kan den ikke være funksjonalismens definisjon.",
    },
    {
      question: "Hvorfor kan en funksjonalist avvise Turing-testen som utilstrekkelig?",
      options: ["Fordi testen bare inspiserer output, mens rollen også krever indre forbindelser", "Fordi testen bare inspiserer input, mens rollen også krever atferd", "Fordi testen krever fenomenal bevissthet, som funksjonalismen ikke kan gi", "Fordi testen er artsspesifikk og derfor helt uforenlig med multippel realiserbarhet"],
      explanation: "Testen er et rent atferdskriterium og fanger bare den ene enden av rollen. Den krever ikke fenomenal bevissthet, og den er ikke artsspesifikk — den er tvert imot blind for hva systemet er laget av.",
    },
    {
      question: "Hva viser eksempelet med et program som svarer ved oppslag i en gigantisk tabell?",
      options: ["At Turing-testen og funksjonalismen kan gi ulike svar om det samme systemet", "At funksjonalismen tilkjenner mentale tilstander til alle systemer som svarer riktig", "At behaviorismen og funksjonalismen faller sammen når atferden er lik", "At multippel realiserbarhet gjelder også for rene oppslagssystemer"],
      explanation: "Tabellen kan bestå testen uten å ha noen indre forbindelser, og funksjonalismen nekter den derfor mentale tilstander. Nettopp derfor faller ikke funksjonalismen sammen med behaviorismen når atferden er lik.",
    },
    {
      question: "Hva er forskjellen på sterk og svak kunstig intelligens?",
      options: ["Sterk KI sier at systemet har mentale tilstander, svak KI at det simulerer dem", "Sterk KI gjelder systemer som overgår mennesket, svak KI systemer som ikke gjør det", "Sterk KI gjelder maskiner med sanser, svak KI maskiner som bare behandler tekst", "Sterk KI er en teori om bevissthet, svak KI en teori om intelligens"],
      explanation: "Skillet gjelder om systemet har eller bare etterligner mentale tilstander. Det handler verken om ytelsesnivå, om sansing eller om et skille mellom bevissthet og intelligens.",
    },
    {
      question: "Hva er hovedforskjellen mellom funksjonalismen og behaviorismen?",
      options: ["Funksjonalismen tillater indre tilstander definert ved rolle, behaviorismen ikke", "Funksjonalismen er fysikalistisk, mens behaviorismen er en form for dualisme", "Funksjonalismen gjelder bare mennesker, mens behaviorismen gjelder alle organismer", "Funksjonalismen bygger på nevrovitenskap, mens behaviorismen bygger på folkepsykologi"],
      explanation: "Det avgjørende er midtleddet: funksjonalismen har indre tilstander som samvirker. Behaviorismen er ikke en dualisme, og ingen av posisjonene er artsbegrenset eller definert ved hvilken vitenskap de bygger på.",
    },
    {
      question: "Hva er hovedforskjellen mellom funksjonalismen og identitetsteorien?",
      options: ["Funksjonalismen identifiserer tilstanden med rollen, identitetsteorien med realisereren", "Funksjonalismen identifiserer den mentale tilstanden med atferden, identitetsteorien med rollen", "Funksjonalismen er ikke-fysikalistisk, mens identitetsteorien er fysikalistisk", "Funksjonalismen gjelder qualia, mens identitetsteorien gjelder intensjonale tilstander"],
      explanation: "Hele forskjellen ligger i valget mellom rolle og realiserer, og alt annet følger av det. Begge posisjoner er fysikalistiske, og ingen av dem er avgrenset til én type mentale tilstander.",
    },
    {
      question: "Hvorfor har funksjonalismen ingen problemer med interaksjonsproblemet?",
      options: ["Fordi mentale tilstander er roller i et fysisk system og virker gjennom sine realiserere", "Fordi funksjonalismen benekter at mentale tilstander har kausale virkninger", "Fordi funksjonalismen identifiserer mentale tilstander med bestemte hjernetilstander", "Fordi funksjonalismen hevder at det fysiske og det mentale er to sider av samme substans"],
      explanation: "Rollen realiseres fysisk, og den fysiske realisereren virker som fysiske ting gjør. Funksjonalismen benekter ikke mental kausalitet, og den identifiserer ikke tilstanden med hjernetilstanden — det er identitetsteoriens grep.",
    },
    {
      question: "Hva vil det si at en teori om sinnet er for liberal?",
      options: ["At den tilkjenner mentale tilstander til systemer som ikke har dem", "At den nekter mentale tilstander til vesener som åpenbart har dem", "At den tillater at noen mentale tilstander er helt ikke-fysiske", "At den godtar både typeidentitet og tokenidentitet på én gang"],
      explanation: "Liberalisme er å slippe inn for mye; å nekte for mye er sjåvinisme. Anklagen retter seg mot funksjonalismen, mens identitetsteorien typisk anklages for det motsatte.",
    },
    {
      question: "Hvilken anklage rettes typisk mot identitetsteorien i dette begrepsparet?",
      options: ["Sjåvinisme, fordi den utelukker vesener med annen oppbygning", "Liberalisme, fordi den slipper inn systemer helt uten opplevelse", "Sirkularitet, fordi den definerer mentale termer ved hverandre", "Dualisme, fordi den skiller det mentale fra det fysiske"],
      explanation: "Identitetsteorien nekter mentale tilstander til alt som mangler den bestemte nevrale typen. Liberalisme er den motsatte anklagen og rammer funksjonalismen, mens sirkularitet er behaviorismens problem.",
    },
    {
      question: "Hva er absent qualia som innvending?",
      options: ["At et system kan fylle rollene uten at det er noe det er som å være det", "At to systemer kan fylle samme rolle og likevel ha ombyttede fargeopplevelser", "At qualia kan endre seg uten at noen kausalrolle endrer seg", "At et system kan ha opplevelser uten å fylle noen kausalrolle overhodet"],
      explanation: "Innvendingen gjelder fravær av opplevelse i en funksjonell duplikat. Ombytting av fargeopplevelser er invertert spektrum, som er en beslektet, men annen, innvending.",
    },
    {
      question: "Hva er invertert spektrum som innvending?",
      options: ["At to funksjonelt like personer kan ha ombyttede fargeopplevelser", "At en person kan miste alle fargeopplevelser uten at atferden endres", "At fargeopplevelser varierer mellom arter med ulike synssystemer", "At fargebegrepene betyr ulike ting i ulike språk og kulturer"],
      explanation: "Poenget er at qualia kan variere mens rollen holdes fast. Fullstendig fravær av opplevelse er absent qualia, og innvendingen handler verken om artsforskjeller eller om språklig variasjon.",
    },
    {
      question: "Hva er funksjonalisering slik Kim bruker begrepet?",
      options: ["Å gi en mental egenskap en spesifikasjon i rene kausalrolletermer", "Å finne den fysiske realisereren av en mental egenskap i et gitt system", "Å vise at en mental egenskap supervenierer på en fysisk egenskap", "Å oversette mentale utsagn til utsagn om observerbar atferd"],
      explanation: "Funksjonalisering er å si hva egenskapen gjør. Å finne realisereren er neste trinn i Kims funksjonelle reduksjon, og oversettelse til atferd er behaviorismens program.",
    },
    {
      question: "Hvorfor er program-analogien ikke et argument for funksjonalismen?",
      options: ["Fordi den forutsetter at det mentale hører hjemme på programnivået", "Fordi programmer i praksis ikke kan kjøre på ulike maskiner", "Fordi analogien bare gjelder maskiner og ikke biologiske systemer", "Fordi funksjonalismen ikke godtar at mentale tilstander realiseres fysisk"],
      explanation: "Analogien illustrerer skillet mellom nivåer, men å bruke den som bevis er å forutsette konklusjonen. At programmer kan kjøre på ulike maskiner er sant, og funksjonalismen godtar fysisk realisering uten videre.",
    },
    {
      question: "Hvilken bok forbindes med termen «common sense functionalism» i dette emnet?",
      options: ["Braddon-Mitchell & Jackson, «Philosophy of Mind and Cognition»", "Jaegwon Kim, «Philosophy of Mind» (bevissthetsfilosofi)", "Earl Conee og Theodore Sider, «Riddles of Existence» (metafysikk)", "Alan Turing, «Computing Machinery and Intelligence»"],
      explanation: "Framstillingen av common sense functionalism hører til Braddon-Mitchell og Jacksons innføring. Kim eier den minimale fysikalismen og reduksjonsmodellene, Conee og Sider metafysikkstoffet, og Turing selve testen.",
    },
    {
      question: "Hvilket forhold har funksjonalismen til fysikalismen?",
      options: ["Den godtar normalt tokenidentitet og er dermed en form for fysikalisme", "Den er uforenlig med fysikalismen fordi den benekter typeidentitet", "Den er identisk med minimal fysikalisme slik Kim definerer den", "Den er en form for egenskapsdualisme fordi rollen ikke er en fysisk egenskap"],
      explanation: "Funksjonalisten benekter typeidentitet, men beholder normalt tokenidentitet, og er derfor fysikalist. Minimal fysikalisme er Kims superveniens-tese og en annen påstand, og å kalle funksjonalismen en dualisme er en feilframstilling.",
    },
  ],
  'fil1001-5-2': [
    {
      question: "Hva hevder logisk behaviorisme?",
      options: ["At mentale utsagn kan oversettes til utsagn om atferd og disposisjoner", "At psykologien som vitenskap bare bør bruke observerbare data om atferd", "At mentale tilstander er indre tilstander definert ved sin kausalrolle i systemet", "At mentale tilstander er identiske med bestemte tilstander i sentralnervesystemet"],
      explanation: "Logisk behaviorisme er en tese om betydning: oversettelsen skal kunne fullføres. Kravet om bare observerbare data er metodologisk behaviorisme, mens de to andre forslagene beskriver funksjonalismen og identitetsteorien.",
    },
    {
      question: "Hva er metodologisk behaviorisme?",
      options: ["Et forskningsprogram om at psykologien bare skal bruke observerbare data", "En tese om at mentale ord betyr det samme som ord om atferdsdisposisjoner", "En tese om at det ikke finnes indre opplevelser i det hele tatt noe sted", "Et program for å redusere psykologiske lover til nevrologiske lover om hjernen"],
      explanation: "Metodologisk behaviorisme sier noe om vitenskapelig metode, ikke om hva sinnet er, og en tilhenger kan godt mene at indre opplevelser finnes. Tesen om betydning er den logiske varianten.",
    },
    {
      question: "Hva er en atferdsdisposisjon?",
      options: ["En tilbøyelighet til å oppføre seg på en bestemt måte under gitte betingelser", "En atferd som faktisk vises i det øyeblikket tilstanden foreligger hos personen", "En indre tilstand som samvirker med andre indre tilstander i systemet", "En nevral prosess i hjernen som frambringer den observerbare atferden hos personen"],
      explanation: "En disposisjon er et mønster av «hvis, så», og det er derfor behavioristen kan si at du har vondt mens du sitter stille. Indre tilstander som samvirker, er nettopp det behaviorismen ikke tillater.",
    },
    {
      question: "Hva skal skjørhetsanalogien vise?",
      options: ["At en disposisjon ikke er noen skjult indre gjenstand, bare betingede sannheter", "At mentale tilstander er svake og lett kan forstyrres av ytre påvirkning", "At disposisjoner alltid må realiseres av en bestemt fysisk struktur i gjenstanden", "At en gjenstand kan ha egenskaper den aldri i sin levetid får anledning til å vise fram"],
      explanation: "Analogien skal gjøre disposisjonsbegrepet ufarlig: skjørhet er ikke en skjult ingrediens, men et mønster av hva som ville skjedd. Den handler verken om sårbarhet eller om hvilken struktur som ligger under.",
    },
    {
      question: "Hva er sirkularitetsproblemet for logisk behaviorisme?",
      options: ["At en disposisjon ikke kan spesifiseres uten å nevne andre mentale tilstander", "At behaviorismen definerer atferd ved hjelp av annen atferd i en uendelig lang kjede", "At mentale tilstander forklares ved nevrale tilstander som selv må forklares videre", "At atferdsbeskrivelser forutsetter at vi allerede har observert atferden"],
      explanation: "Tro gir bare atferd sammen med ønske, og ønske bare sammen med tro, så oversettelsen kan aldri fullføres uten mentale termer. Funksjonalismen unngår problemet ved å definere alle termene samtidig.",
    },
    {
      question: "Hva viser stoiker-tilfellet, der noen har vondt uten noen disposisjon til smerteatferd?",
      options: ["At atferdsdisposisjoner ikke er nødvendige for å ha en mental tilstand", "At atferdsdisposisjoner ikke er tilstrekkelige for å ha en mental tilstand", "At mentale tilstander alltid gir seg utslag i en eller annen form for atferd", "At førstepersonskunnskap er mer pålitelig enn tredjepersonsobservasjon"],
      explanation: "Tilfellet gir mental tilstand uten disposisjon, og rammer altså nødvendigheten. Speilbildet — skuespilleren med disposisjon uten tilstand — er det som rammer tilstrekkeligheten.",
    },
    {
      question: "Hva viser skuespiller-tilfellet, der noen har alle disposisjonene uten å ha vondt?",
      options: ["At atferdsdisposisjoner ikke er tilstrekkelige for å ha en mental tilstand", "At atferdsdisposisjoner ikke er nødvendige for en mental tilstand", "At mentale tilstander kan skjules helt for andre observatører", "At behaviorismen bare gjelder for uerfarne og utrente personer"],
      explanation: "Her er disposisjonene til stede uten tilstanden, og det rammer tilstrekkeligheten. Nødvendigheten rammes av det motsatte tilfellet, der tilstanden foreligger uten disposisjonene.",
    },
    {
      question: "Hvordan løser funksjonalismen stoiker-tilfellet?",
      options: ["Ved å tillate indre tilstander som kan foreligge uten at output utløses", "Ved å benekte at personen virkelig mangler disposisjonene til smerteatferd", "Ved å identifisere smerten med den nevrale tilstanden som ligger under i hjernen", "Ved å hevde at smerte uten atferd er en logisk umulig situasjon"],
      explanation: "Funksjonalismens midtledd gjør at rollen kan være fylt uten at atferden utløses. Å benekte premisset ville vært å omgå tilfellet, og å peke på nevrale tilstander er identitetsteoriens grep.",
    },
    {
      question: "Hvilket av behaviorismens problemer arver funksjonalismen i modifisert form?",
      options: ["Førstepersonsproblemet — hvorfor du kjenner din egen tilstand umiddelbart", "Sirkularitetsproblemet, som funksjonalismen ikke har redskap mot", "Problemet med indre tilstander uten tilhørende observerbar atferd", "Problemet med atferd uten noen tilsvarende indre mental tilstand"],
      explanation: "Funksjonalismen løser sirkulariteten med Ramsey-Lewis-metoden og begge atferdstilfellene med midtleddet. Det som blir igjen, er den følte, umiddelbare siden — og det er nettopp der Block setter inn.",
    },
    {
      question: "Hva er oppsettet i Searles kinesiske rom?",
      options: ["En person uten kinesiskkunnskaper følger formelle regler og gir perfekte svar", "En person som kan kinesisk oversetter svar for en maskin uten å forstå dem", "En maskin lærer seg kinesisk ved å knytte tegn til gjenstander gjennom kameraer", "En gruppe personer deler på å svare på kinesisk uten å kjenne hverandre"],
      explanation: "Poenget er at all syntaks er på plass hos en person som ikke forstår noe av innholdet. En person som allerede kan kinesisk, ville ødelagt eksperimentet, og kobling til verden er robotsvaret.",
    },
    {
      question: "Hva er konklusjonen i Searles argument?",
      options: ["At det å kjøre et program ikke er tilstrekkelig for å ha mentale tilstander", "At ingen maskin noensinne kan komme til å ha mentale tilstander av noe slag", "At fysikalismen om det mentale er usann og må erstattes av en dualisme", "At Turing-testen er det eneste holdbare kriteriet på maskinell tenkning"],
      explanation: "Konklusjonen gjelder programmer, ikke maskiner: Searle mener selv at hjernen er en biologisk maskin som tenker i kraft av sine kausale krefter. Han er verken dualist eller tilhenger av Turing-testen.",
    },
    {
      question: "Hvilket premiss bærer mest vekt i Searles argument?",
      options: ["At syntaks ikke i seg selv er tilstrekkelig for semantikk", "At et dataprogram er definert ved formelle regler og altså ved syntaks", "At mentale tilstander har semantisk innhold og handler om noe", "At personen i rommet ikke kan et eneste ord kinesisk fra før"],
      explanation: "De to første leddene er nærmest definisjoner som få bestrider. Striden gjelder om rommet virkelig viser at syntaks ikke kan gi semantikk — og det er der systemsvaret setter inn.",
    },
    {
      question: "Hva er Searles egen positive posisjon om hva som frambringer bevissthet?",
      options: ["Hjernens biologiske kausale krefter, ikke den formelle strukturen i et program", "Den funksjonelle organisasjonen i systemet, uansett hva den måtte være realisert i", "En ikke-fysisk substans som samvirker med hjernen gjennom sanseorganene", "Den semantiske koblingen mellom språklige symboler og deres referanser"],
      explanation: "Searle er ikke dualist: han mener at bevissthet frambringes av hjernen slik fordøyelse frambringes av magesekken. At organisasjonen alene holder, er nettopp funksjonalismens syn, som han avviser.",
    },
    {
      question: "Hva går systemsvaret mot det kinesiske rommet ut på?",
      options: ["At det er systemet som helhet, ikke mannen alene, som eventuelt forstår", "At mannen faktisk forstår kinesisk uten selv å være klar over det", "At regelboken må kobles til verden gjennom sensorer og egen bevegelighet", "At programmet må simulere nevronene i en kinesisktalendes hjerne"],
      explanation: "Systemsvaret sier at Searle spør feil bærer: mannen, regelboken og arkivet utgjør sammen kandidaten til å forstå. Kobling til verden er robotsvaret, og simulering av nevroner er hjernesimulator-svaret.",
    },
    {
      question: "Hva er Searles svar på systemsvaret?",
      options: ["La mannen lære regelboken utenat, så er han systemet og forstår ikke", "Peke på at et system ikke kan ha egenskaper delene mangler helt", "Vise at regelboken må være uendelig stor for å kunne fungere i praksis", "Hevde at systemet mangler de rette sansene til å knytte tegnene til verden"],
      explanation: "Internaliseringssvaret fjerner skillet mellom mannen og systemet. Searle hevder ikke at helheter aldri kan ha nye egenskaper, og manglende sanser er robotsvarets tema, ikke systemsvarets.",
    },
    {
      question: "Hva går robotsvaret ut på?",
      options: ["At symbolene får innhold hvis systemet settes i en kropp med sanser", "At en robot ville bestått Turing-testen lettere enn et rent tekstprogram", "At mannen i rommet må kunne bevege seg fritt mens han følger reglene", "At regelboken må skrives om til et språk maskinen selv kan forstå"],
      explanation: "Robotsvaret angriper det Searle sier mangler, nemlig koblingen til verden. Searle svarer at sensorene bare sender flere symboler inn, som mannen fortsatt bare ser som krusseduller.",
    },
    {
      question: "Hva er Searles simulasjonsargument mot hjernesimulator-svaret?",
      options: ["At en simulering av en prosess ikke er selve den prosessen den simulerer", "At ingen datamaskin har regnekraft nok til å simulere en hel hjerne", "At en simulering av nevroner ville kreve at vi allerede visste alt om hjernen", "At simuleringen ville hatt de samme kausale kreftene som originalen"],
      explanation: "Poenget er at formell etterligning ikke gir de kausale kreftene. Innvendinger om regnekraft eller manglende kunnskap er praktiske, mens Searles poeng er prinsipielt.",
    },
    {
      question: "Hva er oppsettet i Blocks Chinese Nation?",
      options: ["Hele Kinas befolkning realiserer med radioer organisasjonen i en hjerne", "Hele Kinas befolkning følger regler for å oversette kinesiske tegn til svar", "En datamaskin simulerer et helt lands kommunikasjon i sanntid", "En person lærer utenat instruksene til en hel befolkning av nevroner"],
      explanation: "Block lar en befolkning realisere en persons funksjonelle organisasjon signal for signal. Oversettelse av tegn er Searles oppsett, og det er nettopp de to som ikke må slås sammen.",
    },
    {
      question: "Hva er absent qualia?",
      options: ["At en fullstendig funksjonell duplikat kan mangle all fenomenal bevissthet", "At to funksjonelle duplikater kan ha ombyttede fargeopplevelser seg imellom", "At en person kan miste opplevelsen av farger etter en hjerneskade", "At mentale tilstander kan mangle enhver kobling til systemets atferd"],
      explanation: "Innvendingen gjelder fravær av opplevelse i et system som fyller rollen fullstendig. Ombyttede opplevelser er invertert spektrum, som er en beslektet, men annen, innvending.",
    },
    {
      question: "Hva er hovedforskjellen mellom Searles og Blocks tankeeksperimenter?",
      options: ["Searle angriper forståelse og semantikk, Block angriper opplevelse og qualia", "Searle angriper funksjonalismen, mens Block angriper identitetsteorien", "Searle bruker en enkeltperson, mens Block bruker en gruppe personer", "Searle argumenterer for en dualisme, mens Block argumenterer for fysikalismen"],
      explanation: "Sorteringen går på hva systemet mangler: semantikk hos Searle, qualia hos Block. At den ene bruker én person og den andre mange, er en overflatisk forskjell som ikke fanger poenget.",
    },
    {
      question: "Hvorfor hjelper ikke systemsvaret mot Chinese Nation?",
      options: ["Fordi Block fra første stund spør om systemet som helhet har opplevelser", "Fordi systemet i Blocks eksempel er altfor stort til å kunne fungere i praksis", "Fordi Block benekter at systemer kan ha egenskaper delene mangler", "Fordi Blocks eksempel ikke inneholder noen regelbok å vise til"],
      explanation: "Systemsvaret virker mot Searle fordi han spør om mannen; Block spør fra første stund om helheten. Nettopp derfor er systemsvaret et sterkt trekk i det ene tilfellet og virkningsløst i det andre.",
    },
    {
      question: "Hvilken anklage samler Block mot funksjonalismen?",
      options: ["Liberalisme — at teorien tilkjenner mentale tilstander til for mye", "Sjåvinisme — at teorien nekter mentale tilstander til for mye", "Sirkularitet — at teorien definerer mentale termer ved hjelp av hverandre", "Reduksjonisme — at teorien fjerner det mentale fra beskrivelsen"],
      explanation: "Absent qualia viser at rollen slipper inn systemer uten opplevelse, altså for mye. Sjåvinisme er den motsatte anklagen og rammer identitetsteorien.",
    },
    {
      question: "Hva er funksjonalistens beste svar på absent qualia?",
      options: ["At intuisjonen sporer skala og det uvante, ikke fraværet av opplevelse", "At systemet i eksemplet ikke oppfører seg som personen det etterligner", "At qualia ikke finnes og derfor ikke kan mangle i noe system", "At bare biologiske systemer kan realisere mentale kausalroller"],
      explanation: "Svaret er å bestride at intuisjonen er pålitelig. Å kreve biologisk realisering ville forlatt funksjonalismen, og å benekte qualia er en langt mer radikal posisjon enn svaret krever.",
    },
    {
      question: "Hva koster det funksjonalisten å avvise intuisjonen bak absent qualia?",
      options: ["At han også svekker intuisjonen om at ulikt bygde vesener har smerte", "At han må godta at atferd alene er tilstrekkelig for mentale tilstander", "At han må gi opp Ramsey-Lewis-metoden som definisjonsredskap", "At han må godta at funksjonalismen er en form for dualisme"],
      explanation: "Multippel realiserbarhet hviler selv på en intuisjon om hva som er mulig, så en generell mistillit til slike intuisjoner rammer funksjonalismens eget hovedargument. Metoden og posisjonens fysikalisme berøres ikke.",
    },
    {
      question: "Hva angriper Wittgenstein i bildet av mentale ord?",
      options: ["At ordet får sin betydning ved å navngi en privat indre gjenstand", "At ordet i det hele tatt kan brukes om andre menneskers tilstander", "At det finnes indre opplevelser som bare den enkelte har tilgang til", "At mentale ord kan læres av barn før de har lært å beskrive atferd"],
      explanation: "Han avviser en modell av hvordan ordene får mening, ikke at indre opplevelser finnes. Å tilskrive ham benektelsen av det indre er en av de vanligste feillesningene.",
    },
    {
      question: "Hva skal billen i esken illustrere?",
      options: ["At det som er i esken ikke spiller noen rolle for hvordan ordet brukes", "At alle mennesker har det samme innholdet i sine private opplevelser", "At vi aldri kan vite om andre mennesker har opplevelser i det hele tatt", "At mentale ord bør erstattes med ord om observerbar atferd"],
      explanation: "Poenget er at betydningen ligger i bruken, ikke i den private gjenstanden. Illustrasjonen er verken et skeptisk argument om andres sinn eller et krav om å avskaffe mentale ord.",
    },
    {
      question: "Hvordan bør spørsmålet om Wittgenstein var logisk behaviorist framstilles?",
      options: ["Som et tolkningsspørsmål der litteraturen er delt", "Som avklart: han var logisk behaviorist i alt vesentlig", "Som avklart: han hadde ingenting med behaviorismen å gjøre", "Som et empirisk spørsmål som kan avgjøres ved tekstanalyse"],
      explanation: "Framstillingen skal vise striden: han benekter ikke indre opplevelser, men legger betydningen i offentlig kontrollerbar bruk. Å hevde noen av de to ytterpunktene skråsikkert er en feil du unngår med én setning.",
    },
    {
      question: "Hva er den mest presise måten å beskrive funksjonalismens forhold til behaviorismen på?",
      options: ["Som behaviorismens reparerte etterfølger uten oversettelseskravet", "Som behaviorismens rake motsetning på alle de vesentlige punktene", "Som en variant av behaviorismen med et nytt navn på det samme", "Som en dualistisk reaksjon mot behaviorismens fysikalisme"],
      explanation: "Funksjonalismen beholder ideen om at det mentale kjennes på hva det gjør, men gir slipp på kravet om at mentale utsagn skal kunne oversettes bort. Å kalle den en ren motsetning eller et nytt navn er begge upresist.",
    },
  ],
  'fil1001-6-1': [
    {
      question: "Hva er qualia?",
      options: ["Den følte kvaliteten ved en opplevelse, slik den er for den som har den", "Den kausalrollen en mental tilstand spiller i systemet den tilhører", "Innholdet i en mental tilstand, altså det tilstanden handler om i verden", "Den nevrale prosessen som ligger til grunn for en bevisst opplevelse"],
      explanation: "Qualia er hvordan noe kjennes eller ser ut innenfra. Kausalrollen er funksjonalismens begrep, og det en tilstand handler om, er dens intensjonale innhold — begge er noe annet enn den følte kvaliteten.",
    },
    {
      question: "Hva er forskjellen på en fenomenal og en intensjonal tilstand?",
      options: ["Fenomenale tilstander er noe det er som å ha, intensjonale handler om noe", "Fenomenale tilstander er bevisste, mens intensjonale alltid er ubevisste hos personen", "Fenomenale tilstander er fysiske, mens intensjonale tilstander ikke er det", "Fenomenale tilstander gjelder sansene, mens intensjonale gjelder språklig tenkning"],
      explanation: "Skillet går på om tilstanden er noe det er som å ha, eller om den er rettet mot noe. Intensjonale tilstander kan godt være bevisste, og skillet handler verken om fysikalitet eller om sanser mot språk.",
    },
    {
      question: "Hva er premiss P1 i kunnskapsargumentet?",
      options: ["At Mary kjenner alle fysiske fakta om farge og fargesyn før hun slippes ut", "At Mary aldri har hatt noen visuell opplevelse av noe slag før hun slippes ut", "At Mary lærer noe helt nytt i det øyeblikket hun ser den modne tomaten", "At all kunnskap om verden i prinsippet kan formidles gjennom språket alene"],
      explanation: "P1 er stipulasjonen om fullstendig fysisk kunnskap. At hun lærer noe nytt, er P2, og Mary har hatt visuelle opplevelser hele tiden — rommet er svart-hvitt, ikke mørkt.",
    },
    {
      question: "Hvilket premiss i kunnskapsargumentet angriper standardsvarene?",
      options: ["Premisset om at det å lære noe nytt innebærer at det fantes et ukjent faktum", "Premisset om at Mary kjenner alle fysiske fakta før hun slippes ut av rommet", "Premisset om at Mary faktisk lærer noe når hun ser tomaten for første gang", "Konklusjonen om at fysikalismen dermed er en ufullstendig posisjon om sinnet"],
      explanation: "Både ability-svaret og begrepsstrategien angriper overgangen fra «lærer noe» til «lærer et faktum». Premisset om fullstendig fysisk kunnskap er stipulert, og de færreste vil benekte at hun lærer noe.",
    },
    {
      question: "Hva går ability-svaret på kunnskapsargumentet ut på?",
      options: ["At Mary tilegner seg ferdigheter som å gjenkjenne og forestille seg rødt", "At Mary allerede visste hvordan rødt ser ut, men hadde glemt det underveis", "At Mary får et nytt begrep om en egenskap hun allerede kjente fra før", "At Mary ikke lærer noe som helst når hun ser den modne tomaten"],
      explanation: "Ability-svaret sier at det hun får, er evner og ikke fakta. At hun får et nytt begrep om en gammel egenskap, er begrepsstrategien, som er et beslektet, men annet svar.",
    },
    {
      question: "Hvem er den mest kjente forsvareren av ability-svaret i dette pensumet?",
      options: ["David Lewis", "Jaegwon Kim", "Thomas Nagel", "John Searle"],
      explanation: "Ability-svaret forbindes med Lewis' behandling av hva erfaring lærer oss. Kim eier den minimale fysikalismen, Nagel flaggermus-argumentet og Searle det kinesiske rommet.",
    },
    {
      question: "Hva er den sterkeste innvendingen mot ability-svaret?",
      options: ["At Mary kan ta feil om det hun lærer, og feilbarlighet peker mot fakta", "At Mary faktisk ikke får noen nye ferdigheter når hun ser tomaten", "At ferdigheter ikke kan læres uten at man først kjenner de fysiske faktaene", "At skillet mellom å vite at og å vite hvordan ikke finnes i det hele tatt"],
      explanation: "Man kan ta feil om fakta, men ikke om ferdigheter på samme måte, og Mary kunne oppdaget at hun hadde gjettet galt. Å benekte at hun får ferdigheter, eller at skillet finnes, er langt svakere trekk.",
    },
    {
      question: "Hva går begrepsstrategien ut på?",
      options: ["At Mary lærer et gammelt faktum under et nytt, fenomenalt begrep", "At Mary lærer et nytt faktum som ikke lar seg uttrykke i fysiske termer", "At Marys nye kunnskap er en ferdighet og ikke noen form for faktakunnskap", "At Mary bare blir kjent med noe hun visste alt om fra beskrivelser før"],
      explanation: "Strategien sier at det finnes ett sett egenskaper og to slags begreper om dem. Ferdighetssvaret og bekjentskapssvaret er de to andre standardsvarene, og de sier noe annet.",
    },
    {
      question: "Hvilket eksempel er modellen for begrepsstrategien?",
      options: ["Hesperos og Fosforos — én planet plukket ut på to måter", "Lyn og elektrisk utladning — en vitenskapelig oppdaget identitet", "Vann og H₂O — en nødvendig identitet oppdaget a posteriori", "Smerte og C-fiber-fyring — identitetsteoriens standardeksempel"],
      explanation: "Hesperos-tilfellet viser at man kan lære noe ved å oppdage en identitet uten at det finnes to gjenstander. De andre er også a posteriori-identiteter, men det er poenget om to måter å plukke ut samme gjenstand på som er modellen her.",
    },
    {
      question: "Hva var Jacksons opprinnelige posisjon om qualia?",
      options: ["Epifenomenalisme — at qualia finnes, men ikke har fysiske virkninger", "Funksjonalisme — at qualia er kausalroller i et fysisk system", "Substansdualisme — at sinnet er en egen substans ved siden av kroppen", "Eliminativisme — at qualia ikke finnes og bør fjernes fra beskrivelsen"],
      explanation: "Jackson forsvarte epifenomenale qualia, som holdt argumentet forenlig med at fysikken er kausalt lukket. Han var verken substansdualist eller eliminativist, og funksjonalismen var nettopp det han angrep.",
    },
    {
      question: "Hvordan bør Jacksons senere utvikling gjengis?",
      options: ["Han argumenterte slik, men skiftet senere til en fysikalistisk posisjon", "Han holdt fast ved kunnskapsargumentet gjennom hele forfatterskapet sitt", "Han forlot filosofien om sinnet og arbeidet videre med helt andre spørsmål", "Han gikk fra epifenomenalisme til en substansdualistisk posisjon om sinnet"],
      explanation: "Jackson forlot kunnskapsargumentet og ble fysikalist, i hovedsak fordi epifenomenalismen ikke kan forklare at vi snakker om qualia. Å skrive at han mener fysikalismen er usann, i presens, er en feiltilskrivning.",
    },
    {
      question: "Hva var Jacksons egen hovedgrunn til å forlate argumentet?",
      options: ["At epifenomenale qualia ikke kan forklare at vi snakker om qualia", "At Mary-historien viste seg å være helt fysisk umulig å gjennomføre", "At ability-svaret gjorde hele tankeeksperimentet overflødig", "At nevrovitenskapen fant realisereren for fargeopplevelser"],
      explanation: "Har qualia ingen fysiske virkninger, kan de ikke påvirke det vi sier, og da undergraver posisjonen sitt eget vitnesbyrd. De andre forslagene er verken hans begrunnelse eller riktige som saksforhold.",
    },
    {
      question: "Hva er Nagels kriterium på at en organisme har bevisste mentale tilstander?",
      options: ["At det er noe det er som å være den organismen, for organismen selv", "At organismen kan rapportere om sine egne indre tilstander til andre", "At organismen har et nervesystem av tilstrekkelig kompleksitet og størrelse", "At organismen reagerer på omgivelsene på en fleksibel og målrettet måte"],
      explanation: "Kriteriet er at det finnes et perspektiv, en måte verden framtrer på innenfra. Rapportering, kompleksitet og fleksibel atferd er ytre kjennetegn som ikke fanger poenget.",
    },
    {
      question: "Hvorfor velger Nagel nettopp flaggermusen som eksempel?",
      options: ["Fordi den utvilsomt er bevisst, men har en sans vi ikke kan forestille oss", "Fordi den er et grensetilfelle der det er uklart om den er bevisst i det hele tatt", "Fordi den har et nervesystem som ligner vårt så mye som overhodet mulig", "Fordi den er det eneste pattedyret som ikke bruker synet til å orientere seg"],
      explanation: "Kombinasjonen av sikker bevissthet og en fremmed sans er det argumentet trenger. Et grensetilfelle ville svekket eksempelet, og poenget er nettopp at ekkolokalisering ikke ligner våre sanser.",
    },
    {
      question: "Hva hevder Nagel at den fysiske beskrivelsen ikke fanger?",
      options: ["Bevissthetens subjektive karakter, altså at opplevelsen har et synspunkt", "De kausale forbindelsene mellom mentale tilstander og observerbar atferd", "Innholdet i mentale tilstander, altså hva de handler om i verden utenfor", "Forskjellen mellom bevisste og ubevisste prosesser i et gitt nervesystem"],
      explanation: "Det som unnslipper, er perspektivet — at opplevelsen er slik for noen. Kausale forbindelser og intensjonalt innhold er andre spørsmål, og skillet bevisst mot ubevisst er ikke poenget.",
    },
    {
      question: "Hva er Nagels faktiske konklusjon om fysikalismen?",
      options: ["At vi mangler begrepene for å forstå hvordan den kunne være sann", "At den er usann, siden det subjektive perspektivet ikke er fysisk", "At den er sann, men bare for de intensjonale mentale tilstandene", "At den er en tom påstand uten noe bestemt innhold i det hele tatt"],
      explanation: "Nagel sier uttrykkelig at det ville være en feil å slutte at fysikalismen er usann; den er uforståelig for oss nå, ikke motbevist. Å tilskrive ham konklusjonen om usannhet er den tyngst dokumenterte feilen i temaet.",
    },
    {
      question: "Hva skal Nagels sammenligning med setningen «materie er energi» vise?",
      options: ["At en påstand kan være sann selv om den som sier den, ikke forstår hvorfor", "At fysikken stadig endrer seg og at dagens teorier snart blir foreldet", "At mentale og fysiske begreper hører til to helt uforenlige vokabularer", "At vitenskapelige identiteter alltid oppdages a posteriori og ikke a priori"],
      explanation: "Poenget er at man kan uttale en sann setning uten å ha noen forestilling om hva som gjør den sann. Sammenligningen er nøkkelen til at Nagels konklusjon er epistemisk og ikke metafysisk.",
    },
    {
      question: "Hva er objektiv fenomenologi i Nagels forstand?",
      options: ["Et begrepsapparat som kunne beskrive opplevelse også for den som mangler den", "En metode for å måle bevisste opplevelser med nevrovitenskapelige instrumenter", "En påstand om at all fenomenologi egentlig er objektiv og ikke subjektiv", "Et program for å avskaffe førstepersonsperspektivet fra vitenskapelig psykologi"],
      explanation: "Nagel foreslår nye begreper som kunne gjøre opplevelsens karakter tilgjengelig utenfra, uten å avgjøre om det lar seg gjøre. Programmet handler verken om måling eller om å avskaffe førstepersonsperspektivet.",
    },
    {
      question: "Hva er marsboer-varianten hos Nagel til for?",
      options: ["Å vise at argumentet ikke hviler på noe eksotisk ved flaggermus spesielt", "Å vise at romvesener trolig har helt andre sanser enn dem vi kjenner", "Å vise at fysisk kunnskap alltid er ufullstendig i praksis for enhver forsker", "Å vise at vi ikke kan vite om andre mennesker har opplevelser i det hele tatt"],
      explanation: "Poenget er at en marsboer med fullstendig kunnskap om vår nevrofysiologi likevel ikke ville vite hvordan det er å se rødt for oss. Argumentet gjelder ethvert forhold mellom en beskrivelse og en opplevelse.",
    },
    {
      question: "Hva er hovedforskjellen mellom Jacksons og Nagels konklusjoner?",
      options: ["Jacksons er metafysisk og handler om hva som finnes, Nagels er epistemisk", "Jacksons er epistemisk og handler om hva vi kan vite, mens Nagels er metafysisk", "Jacksons gjelder bare fargesyn, mens Nagels gjelder alle sanser hos alle dyr", "Jacksons er rettet mot funksjonalismen, mens Nagels er rettet mot dualismen"],
      explanation: "Jackson slutter til at det finnes ikke-fysiske fakta; Nagel til at vi mangler begrepene for å forstå fysikalismen. Begge er rettet mot fysikalismen, ikke mot funksjonalismen eller dualismen.",
    },
    {
      question: "Hva mangler ifølge Jackson, og hva mangler ifølge Nagel?",
      options: ["Et faktum hos Jackson, et perspektiv hos Nagel", "Et perspektiv hos Jackson, et faktum hos Nagel", "En ferdighet hos Jackson, et begrep hos Nagel", "Et begrep hos Jackson, en ferdighet hos Nagel"],
      explanation: "Jackson hevder at Mary manglet et faktum; Nagel at vi mangler tilgang til et synspunkt. Ferdighetstapet er ability-svarets diagnose, ikke Jacksons egen.",
    },
    {
      question: "Hvilket motsvar treffer både Jacksons og Nagels argument?",
      options: ["Begrepsstrategien, som griper samme egenskaper med to slags begreper", "Ability-svaret, som sier at det som tilegnes, bare er ferdigheter", "Systemsvaret, som sier at det er helheten og ikke delen som forstår", "Artsspesifikk identitet, som knytter mentale typer til hver enkelt art"],
      explanation: "Begge argumentene hviler på at noe bare er tilgjengelig fra ett synspunkt, og begrepsstrategien forklarer nettopp det uten ikke-fysiske fakta. Systemsvaret hører til det kinesiske rommet, og artsspesifikk identitet til multippel realiserbarhet.",
    },
    {
      question: "Hva er et forklaringsgap?",
      options: ["Inntrykket av at en fullstendig fysisk forklaring lar spørsmålet stå åpent", "Avstanden mellom det nevrovitenskapen vet i dag og det den vil vite senere", "Forskjellen mellom en kausal forklaring og en forklaring ved hjelp av grunner", "Manglende kunnskap om hvilke dyrearter som har bevisste opplevelser"],
      explanation: "Gapet gjelder at forklaringen ikke ser ut til å gjøre opplevelsen forståelig, selv når den er fullstendig. Det er i første omgang epistemisk, og om det svarer til et gap i verden, er nettopp det omstridte.",
    },
    {
      question: "Hvorfor er det viktig å skille et epistemisk fra et metafysisk krav i qualia-debatten?",
      options: ["Fordi en påstand om hva vi kan forstå ikke gir en påstand om hva som finnes", "Fordi epistemiske påstander alltid er svakere og derfor kan settes til side", "Fordi metafysiske påstander ikke kan diskuteres uten en ferdig vitenskap", "Fordi bare metafysiske påstander kan brukes i en filosofisk drøfting"],
      explanation: "Å gli fra et forklaringsgap til et gap i verden er den vanligste tankefeilen i debatten. Epistemiske påstander er ikke uinteressante — Nagels konklusjon er nettopp epistemisk og likevel vanskelig å bli ferdig med.",
    },
    {
      question: "Hva innebærer det at premissene i Mary-historien er stipulasjoner?",
      options: ["At de skal tas som gitt, ikke som påstander om hva som er praktisk mulig", "At de er hypoteser som kan bekreftes eller avkreftes av nevrovitenskapen", "At de bare gjelder i den mulige verdenen tankeeksperimentet beskriver", "At de kan endres underveis dersom drøftingen krever det av deg"],
      explanation: "Å svare at ingen kunne vite alt fysisk om farge, er å bytte ut eksperimentet med et annet. Premissdisiplin er å ta stipulasjonene på ordet og svare på spørsmålet som faktisk er stilt.",
    },
    {
      question: "Hva er acquaintance-svaret?",
      options: ["At Mary kommer i en ny slags kontakt med noe hun allerede visste alt om", "At bekjentskap forutsetter at man allerede har hatt opplevelsen en gang før", "At Mary lærer et nytt faktum som fysikken ikke kunne uttrykke", "At Mary hadde ufullstendig fysisk kunnskap før hun ble sluppet ut"],
      explanation: "Bekjentskap er en egen kunnskapsform, som å gå gjennom gatene i en by man har lest alt om. Ferdighetssvaret er ability-svaret, som er beslektet, men ikke det samme.",
    },
    {
      question: "Hva er den vanligste innvendingen mot acquaintance-svaret?",
      options: ["At bekjentskap er vanskelig å skille rent fra faktakunnskap i praksis", "At bekjentskap forutsetter at man allerede har hatt opplevelsen fra før", "At bekjentskap ikke er noen form for kunnskap i det hele tatt", "At bekjentskap bare gjelder personer og steder, aldri egenskaper"],
      explanation: "Å gå gjennom gatene i en by ser jo ut til å gi en mengde nye fakta om den, og da har svaret ikke unngått faktakunnskapen. De andre forslagene er ikke innvendinger som står i debatten.",
    },
    {
      question: "Hvilken forutsetning i kunnskapsargumentet angriper begrepsstrategien indirekte?",
      options: ["At man enten kjenner et faktum eller ikke, uansett hvilket begrep man har", "At Mary virkelig har alle fysiske fakta om farge før hun slippes ut", "At fargeopplevelser er de mest typiske eksemplene på qualia", "At epifenomenalisme er den eneste riktige posisjonen om qualias kausale kraft"],
      explanation: "Strategien sier at man kan kjenne samme faktum under ett begrep og ikke under et annet, og dermed faller alt-eller-ingenting-forutsetningen. Premisset om fullstendig kunnskap godtas, det er ikke der striden ligger.",
    },
    {
      question: "Hvilken påstand er sann om hva Nagel mener vi kan vite om flaggermus?",
      options: ["Vi kan vite svært mye om dem, men ikke hvordan verden framtrer for dem", "Vi kan ikke vite noe som helst om flaggermus og deres indre liv", "Vi kan vite hvordan det er å være dem gjennom nøye analogislutninger fra oss selv", "Vi kan vite alt om dem så snart nevrovitenskapen er ferdig utviklet"],
      explanation: "Nagel benekter ikke at vi har omfattende kunnskap om flaggermus; han hevder at all denne kunnskapen er kunnskap fra utsiden. Å lese ham som en generell skeptiker er en klassisk feillesning.",
    },
    {
      question: "Hvilket krav er sterkest av de tre qualia-argumentene du møter i denne delen?",
      options: ["Zombie-argumentet, som hevder at fysikalismen er usann", "Kunnskapsargumentet, som hevder at fysikalismen er ufullstendig", "Flaggermus-argumentet, som hevder at fysikalismen er uforståelig for oss", "Ability-svaret, som hevder at Mary bare tilegner seg nye ferdigheter"],
      explanation: "Zombie-argumentet går rett på superveniensen og konkluderer med usannhet, mens Jackson konkluderer med ufullstendighet og Nagel med uforståelighet. Ability-svaret er ikke et argument mot fysikalismen, men et forsvar for den.",
    },
    {
      question: "Hva er Kims qualia-residuum, og hvordan henger det sammen med dette kapitlet?",
      options: ["At funksjonell reduksjon stanser ved qualia — samme grense som Jackson og Nagel peker på", "At funksjonell reduksjon også lykkes helt for qualia, i motsetning til det Jackson hevder", "At superveniensen bryter sammen for qualia og bare gjelder intensjonale tilstander", "At qualia er de eneste mentale tilstandene som har ekte kausale virkninger"],
      explanation: "Kim erkjenner selv at modellen hans dekker tro og ønske langt bedre enn den følte kvaliteten. At to helt ulike innfallsvinkler lander på samme skillelinje, er en påvist sammenheng verdt poeng.",
    },
    {
      question: "Hva er det tredje av de fem kjennetegnene på et godt svar, brukt på dette kapitlet?",
      options: ["Å påvise sammenhenger — her mellom Jacksons og Nagels argumenter", "Å skrive klart og strukturert, med tydelig avsnittsinndeling underveis", "Å vise god kunnskap om de filosofiske teoriene som står i pensum", "Å formulere og argumentere effektivt for et eget standpunkt til slutt"],
      explanation: "Kjennetegn tre gjelder påviste sammenhenger mellom argumentene rundt ett tema. De andre er kjennetegn én, to og fem, og alle er reelle krav — men det er tredje som er dette kapitlets akse.",
    },
  ],
  'fil1001-6-2': [
    {
      question: "Hva kjennetegner de lette problemene i Chalmers' forstand?",
      options: ["Det er spørsmål om funksjoner, der svaret må bestå i en mekanisme", "Det er spørsmål nevrovitenskapen allerede har besvart i sin helhet", "Det er spørsmål som er enkle å løse sammenlignet med de øvrige", "Det er spørsmål om hvorfor bestemte prosesser kjennes som noe"],
      explanation: "De lette problemene gjelder funksjoner som å diskriminere sanseinntrykk, integrere informasjon, styre atferd og rapportere om egne tilstander, og de kalles lette fordi vi kjenner formen på løsningen — en mekanisme. De er ikke enkle; flere av dem er blant vitenskapens tyngste. Spørsmålet om hvorfor prosesser kjennes som noe, er det vanskelige problemet.",
    },
    {
      question: "Hva spør det vanskelige problemet om?",
      options: ["Hvorfor utførelsen av de kognitive funksjonene er ledsaget av opplevelse", "Hvordan hjernen klarer å integrere inntrykk fra flere sanser samtidig", "Hvorfor nevrovitenskapen ennå ikke har kartlagt alle prosessene i hjernen", "Hvordan vi kan vite at andre mennesker har opplevelser slik vi selv har"],
      explanation: "Problemet er hvorfor det i det hele tatt er noe det er som å være i tilstandene, ikke at kartleggingen er uferdig. Den vanligste feiltolkningen gjør det til et lett problem som bare mangler mer forskning; integrasjon av sanseinntrykk er nettopp et slikt funksjonsspørsmål, og andres bevissthet er et eget problem.",
    },
    {
      question: "Hvorfor er skillet mellom de lette og det vanskelige problemet en artsforskjell?",
      options: ["Fordi det vanskelige blir stående etter enhver fullstendig mekanismebeskrivelse", "Fordi det vanskelige krever langt mer presise målemetoder enn de lette gjør", "Fordi de lette problemene gjelder atferd, mens det vanskelige gjelder språket", "Fordi de lette problemene alt er løst, mens det vanskelige fortsatt står åpent"],
      explanation: "Et lett problem er borte når mekanismen er beskrevet; det vanskelige er det ikke, for man kan alltid spørre videre hvorfor akkurat den mekanismen skulle føles som noe. Å framstille forskjellen som en gradsforskjell — at det bare er tyngre, mer uløst eller mer krevende å måle — utsletter hele poenget, og det er en av de vanligste feilene i temaet.",
    },
    {
      question: "Hva er fysikalistens sentrale motstand mot Chalmers' skille?",
      options: ["At skillet kan ligge i vår nåværende forståelse og ikke i naturen selv", "At de lette problemene i virkeligheten er langt vanskeligere enn antatt", "At opplevelse ikke finnes, og at spørsmålet derfor er feilstilt fra start", "At det vanskelige problemet allerede er løst av moderne nevrovitenskap"],
      explanation: "Er skillet et skille i vår forståelse, har vi et forklaringsgap og ikke et gap i verden, og da følger ingen antifysikalistisk konklusjon — sorteringen epistemisk mot metafysisk er nøkkelen til hele kapitlet. Å benekte at opplevelse finnes, er en helt annen strategi enn å holde gapet for epistemisk.",
    },
    {
      question: "Hva er en filosofisk zombie?",
      options: ["En fysisk og funksjonell duplikat av en person uten fenomenal bevissthet", "Et vesen som oppfører seg som en person, men er bygd av andre materialer", "En person som har mistet evnen til å reagere følelsesmessig på omverdenen", "Et system som mangler intensjonalt innhold, men har fenomenal opplevelse"],
      explanation: "Definisjonen krever fysisk identitet, ikke bare funksjonell likhet: en duplikat av andre materialer er Blocks funksjonelle tilfelle og rammer bare funksjonalismen. Den vanligste feiltolkningen gjør zombien merkbart annerledes utenfra, men den er nettopp ikke til å skille fra originalen.",
    },
    {
      question: "Hvilken beskrivelse av zombien er i tråd med Chalmers' stipulasjoner?",
      options: ["Den sier at den ser noe rødt, av nøyaktig de samme fysiske grunnene som du", "Den virker fraværende og sløv for dem som møter den over litt tid", "Den nekter for å ha opplevelser, siden den faktisk ikke har noen", "Den oppfører seg likt, men røper forskjellen under nøyaktige tester"],
      explanation: "Zombien rapporterer om sine opplevelser og er utenfra ikke til å skille fra originalen; det er en kostnad ved posisjonen, ikke et brudd på den. Å beskrive den som sløv, som benektende eller som avslørbar ved test er å bytte ut tankeeksperimentet med et annet.",
    },
    {
      question: "Hva er det zombie-argumentet spør om?",
      options: ["Om zombier er metafysisk mulige, altså om det finnes en verden med dem", "Om zombier lar seg framstille med den teknologien vi rår over i dag", "Om det finnes zombier blant menneskene vi faktisk omgås til daglig", "Om zombier er forenlige med naturlovene slik de faktisk viser seg"],
      explanation: "Argumentet trenger bare at en zombie-verden er metafysisk mulig, altså at det finnes en mulig verden der de er til. Å innvende at en slik skapning aldri kunne bygges, eller at naturlovene forbyr den, er å omgå premissene — metafysisk mulighet er videre enn fysisk mulighet, og noe helt annet enn epistemisk mulighet.",
    },
    {
      question: "Hva sier premiss P2 i zombie-argumentet?",
      options: ["At det som er tenkelig på denne måten, også er metafysisk mulig", "At beskrivelsen av en zombie ikke inneholder noen motsigelse", "At det fenomenale ikke supervenierer på det fysiske i vår verden", "At det finnes en verden fysisk lik vår, men uten noen opplevelser"],
      explanation: "P2 er den modale broen fra tenkelighet til mulighet, og det er der argumentet gjør sitt omstridte arbeid. At beskrivelsen er koherent, er P1, og at det finnes en slik verden, er P3 — å blande sammen slutningsleddet med leddene på hver side av det er den vanligste rekonstruksjonsfeilen.",
    },
    {
      question: "Hva skjer i premiss P4 i zombie-argumentet?",
      options: ["Superveniensen brytes — en mental forskjell uten en fysisk forskjell", "Identitetsteorien avvises, siden smerte ikke kan være C-fiber-fyring", "Funksjonalismen avvises, siden kausalrollen ikke fastlegger kvaliteten", "Interaksjonsproblemet oppstår, siden sjelen må påvirke kroppen fysisk"],
      explanation: "P4 sier at det fenomenale ikke supervenierer på det fysiske, og dermed faller Kims minimale fysikalisme — den svakeste posisjonen som fortsatt fortjener navnet fysikalisme. Funksjonalismen er invertert spektrums mål, og interaksjonsproblemet hører til Descartes' substansdualisme.",
    },
    {
      question: "Hvorfor rammer zombie-argumentet fysikalismen hardere enn kunnskapsargumentet?",
      options: ["Fordi det konkluderer med at fysikalismen er usann, ikke bare ufullstendig", "Fordi det bygger på færre og mindre omstridte premisser enn Mary-historien", "Fordi det gjelder alle mentale tilstander og ikke bare fargeopplevelser", "Fordi det er formulert senere og tar hensyn til svarene på Mary-historien"],
      explanation: "Kunnskapsargumentet handler om hva noen vet, zombie-argumentet om hva som er mulig, og bare det siste bryter superveniensen. Den vanlige feilen er å tro at den sterkere konklusjonen kommer gratis: prisen er et ekstra og omstridt premiss om at tenkelighet gir mulighet, som kunnskapsargumentet ikke trenger.",
    },
    {
      question: "Hvilket premiss i zombie-argumentet står striden om?",
      options: ["P2, om at tenkelighet gir metafysisk mulighet", "P3, om hva metafysisk mulighet innebærer her", "P4, om hva supervenienstesen går ut på", "K, om hva fysikalismen faktisk påstår om sinnet"],
      explanation: "P3 og P4 er nesten rene definisjoner av mulighet og superveniens, så strid om dem blir strid om ord. P1 bestrides riktignok av dem som mener zombie-beskrivelsen er skjult selvmotsigende, men det er den modale slutningen som er kapitlets viktigste enkeltspørsmål.",
    },
    {
      question: "Hva menes med at zombier er tenkelige?",
      options: ["At beskrivelsen ikke bryter sammen i en motsigelse ved gjennomtenkning", "At vi kan danne oss et tydelig indre bilde av hvordan en zombie ser ut", "At det er forenlig med naturlovene at det finnes slike skapninger", "At vi ikke vet om det finnes zombier, og at det derfor kan være tilfelle"],
      explanation: "Tenkelighet er fravær av motsigelse ved gjennomtenkning, ikke evne til å se noe for seg som et bilde. Å lese tenkelighet som forenlighet med naturlovene gjør det til fysisk mulighet, og å lese det som at vi ikke vet, gjør det til epistemisk mulighet — begge glidningene svekker argumentet uten å ramme det.",
    },
    {
      question: "Hva skal vann-tilfellet vise i diskusjonen om P2?",
      options: ["At noe kan være tenkelig og likevel metafysisk umulig", "At vitenskapelige identiteter oppdages ved undersøkelse", "At naturslagsord viser til ulike ting i ulike mulige verdener", "At vi kan ta feil om hvilket stoff vann faktisk består av"],
      explanation: "«Vann er ikke H₂O» virker tenkelig, men er umulig fordi identiteter mellom naturslag er nødvendige — altså et moteksempel mot den generelle slutningen fra tenkelighet til mulighet. At identiteten er oppdaget a posteriori, er sant nok i seg selv, men det er ikke det tilfellet brukes til her.",
    },
    {
      question: "Hva går illusjonsforklaringen ut på?",
      options: ["At vi egentlig tenkte oss noe som framtrer slik tinget gjør, uten dets natur", "At vi ikke klarer å tenke oss situasjonen i det hele tatt, bare later som", "At tenkelighet aldri gir noen som helst opplysning om hva som er mulig", "At vi forveksler det vi vet med det vi ønsker skulle være tilfelle"],
      explanation: "Forklaringen redegjør for hvorfor det umulige kan virke tenkelig: vi tenkte oss noe klart og drikkbart som ikke er H₂O, ikke vann som ikke er H₂O. Den hevder ikke at tenkelighet er verdiløs generelt — bare at slutningen svikter der framtreden og natur kan forveksles.",
    },
    {
      question: "Hva er Chalmers' svar på illusjonsforklaringen?",
      options: ["At bevissthet ikke har noen framtreden forskjellig fra sin egen natur", "At vann-tilfellet hviler på en feillesning av Kripkes navneteori", "At vi ikke kan ta feil om hva som er metafysisk mulig i noe tilfelle", "At zombie-beskrivelsen er en definisjon og derfor ikke kan bestrides"],
      explanation: "Manøveren krever et skille mellom framtreden og natur, og for smerte er framtredenen smerten — derfor finnes det ingen alternativ, mer uskyldig tanke vi kan ha forvekslet zombie-tanken med. Chalmers benekter verken vann-tilfellet eller at vi kan ta feil om modale spørsmål; han bestrider at parallellen holder.",
    },
    {
      question: "Hva går begrepsstrategien ut på når den brukes på zombier?",
      options: ["At tenkeligheten viser to slags begreper om samme egenskap, ikke to egenskaper", "At zombie-beskrivelsen er skjult selvmotsigende og derfor ikke er tenkelig", "At vi bare tilegner oss en ny ferdighet når vi tenker oss en zombie-verden", "At begrepet zombie er for uklart til å brukes i et filosofisk argument"],
      explanation: "Strategien godtar at zombier er tenkelige og gjør tenkeligheten til et vindu mot vår begrepsutrustning i stedet for mot verden. Å benekte at beskrivelsen er koherent, er en annen og strengere fysikalistisk vei, og ferdighetssvaret hører til Mary-tilfellet — det er ikke begrepsstrategien.",
    },
    {
      question: "Hva slags dualist er Chalmers?",
      options: ["Egenskapsdualist — én slags substans med to slags egenskaper", "Substansdualist — to slags ting, en kropp og et tenkende sinn", "Anomalisk monist — token-identitet uten strenge psykofysiske lover", "Eliminativist — bare de fysiske egenskapene finnes i det hele tatt"],
      explanation: "Chalmers kaller posisjonen naturalistisk dualisme: fenomenale egenskaper er grunnleggende, men naturlige, og knyttes til de fysiske ved psykofysiske lover. Å kalle ham substansdualist er en dokumentert feiltilskrivning — han hevder ikke at det finnes en sjel ved siden av kroppen slik Descartes gjør.",
    },
    {
      question: "Hva er psykofysiske lover i Chalmers' forslag?",
      options: ["Grunnleggende naturlover som knytter fysiske tilstander til fenomenale", "Strenge lover som lar mentale tilstander reduseres til fysiske tilstander", "Statistiske regelmessigheter nevrovitenskapen kartlegger i laboratoriet", "Lover som lar sinnet gripe inn i den fysiske årsakskjeden utenfra"],
      explanation: "Lovene står ved siden av fysikkens lover og er ikke i strid med dem, og det er nettopp dette som gjør posisjonen naturalistisk i stedet for overnaturlig. Den vanligste feiltolkningen gjør dem til et redskap for at sinnet skal skyve på kroppen, men da ville Descartes' interaksjonsproblem være tilbake.",
    },
    {
      question: "Hva er en riktig forskjell mellom Descartes' og Chalmers' dualisme?",
      options: ["Descartes har et interaksjonsproblem, mens Chalmers ikke krever påvirkning", "Descartes bruker et modalt argument, mens Chalmers bruker et begrepslig", "Descartes er forenlig med kausal lukkethet, mens Chalmers er i spenning med den", "Descartes hevder to slags egenskaper, mens Chalmers hevder to slags substanser"],
      explanation: "Chalmers postulerer lovmessige sammenhenger mellom egenskaper og trenger ingen substans som skyver på kroppen, og posisjonen er derfor lettere å forene med kausal lukkethet. De øvrige påstandene snur forholdet: Descartes argumenterer begrepslig og epistemisk om to substanser, Chalmers modalt om to slags egenskaper.",
    },
    {
      question: "Hva er kostnaden ved Chalmers' posisjon?",
      options: ["Den ligger nær epifenomenalismen og arver problemet med å snakke om qualia", "Den bryter med prinsippet om at fysikken er kausalt lukket i vår verden", "Den gjør det umulig å forklare hvordan hjernen styrer atferd i det hele tatt", "Den forutsetter to slags substanser i tillegg til de to slagene egenskaper"],
      explanation: "Gjør de fenomenale egenskapene intet fysisk arbeid, kan de heller ikke forklare at vi snakker om dem — det var nettopp dette som fikk Jackson til å forlate sin egen posisjon. Posisjonen bryter ikke med kausal lukkethet; den er tvert imot forenlig med den, og det er derfor kostnaden oppstår.",
    },
    {
      question: "Hvorfor må zombien være fysisk identisk og ikke bare funksjonelt lik?",
      options: ["Fordi fysikalisten ellers kan svare at duplikaten mangler noe fysisk", "Fordi funksjonell likhet er umulig å oppnå mellom to ulike vesener", "Fordi fysisk identitet gjør tankeeksperimentet lettere å forestille seg", "Fordi funksjonell likhet ville gjort zombien merkbart annerledes utenfra"],
      explanation: "En bare funksjonelt lik skapning er Blocks tilfelle og rammer funksjonalismen, ikke fysikalismen — hele slagkraften ligger i ordet «fysisk». Skjerpelsen gjør for øvrig eksperimentet vanskeligere, ikke lettere, og zombien er per definisjon ikke merkbart annerledes utenfra.",
    },
    {
      question: "Hva er invertert spektrum rettet mot, og hva hevder argumentet?",
      options: ["Mot funksjonalismen: kausalrollen fastlegger ikke opplevelsens kvalitet", "Mot fysikalismen: det fysiske fastlegger ikke opplevelsens kvalitet", "Mot behaviorismen: atferden fastlegger ikke hvilke tilstander man har", "Mot representasjonalismen: innholdet fastlegger ikke opplevelsens kvalitet"],
      explanation: "To personer med samme kausalroller kan ifølge argumentet ha ombyttede fargeopplevelser, og da er den fenomenale karakteren ikke fastlagt av rollen. Den vanligste feilen er å rette det mot fysikalismen: de to kan godt være fysisk forskjellige, og da er superveniensen urørt.",
    },
    {
      question: "Hva skiller invertert spektrum fra absent qualia?",
      options: ["I det ene er qualia byttet om, i det andre mangler de helt", "I det ene er qualia til stede, i det andre er de bare svakere", "Det ene er rettet mot funksjonalismen, det andre mot fysikalismen", "Det ene bygger på tenkelighet, det andre på faktiske eksperimenter"],
      explanation: "Blocks Chinese Nation gjelder en funksjonell duplikat helt uten qualia, mens invertert spektrum gjelder qualia som er til stede, men ombyttet. Begge er rettet mot funksjonalismen og sier at rollen ikke fastlegger kvaliteten, men de er ulike argumenter, og å bytte det ene ut med det andre er en presisjonsfeil.",
    },
    {
      question: "Hvilket premiss angriper innvendingen fra fargerommets struktur?",
      options: ["P2 — at de to personene virkelig har samme kausalroller", "P1 — at funksjonalismen fastlegger den fenomenale karakteren", "P3 — at de to personene har ombyttede fargeopplevelser", "K — at funksjonalismen er ufullstendig som teori om qualia"],
      explanation: "Fargerommet er ikke symmetrisk — gult ser lysere ut enn blått, og avstandene mellom farger er ulike — så en ombytting ville gi målbare atferdsforskjeller, og da er personene ikke funksjonelt like likevel. Innvendingen benekter altså ikke at ombyttede opplevelser er tenkelige, bare at de kan være funksjonelt uoppdagbare.",
    },
    {
      question: "Hvordan bør du framstille spørsmålet om invertert spektrum er koherent?",
      options: ["Som et åpent spørsmål der argumentene fortsatt står mot hverandre", "Som avgjort i favør av at tankeeksperimentet er fullt ut koherent", "Som avgjort mot koherens, siden fargerommet er påvist asymmetrisk", "Som et rent empirisk spørsmål for fargeforskningen å avgjøre alene"],
      explanation: "Fargerommets asymmetri taler mot, og motsvaret om en strukturbevarende inversjon eller et vesen med symmetrisk fargerom taler for — striden er levende. En besvarelse som skriver at argumentet «viser» at funksjonalismen er usann, eller at det er tilbakevist, har hoppet over hele diskusjonen.",
    },
    {
      question: "Hvorfor rammer invertert spektrum ikke uten videre fysikalismen?",
      options: ["Fordi de to personene godt kan være fysisk forskjellige", "Fordi fargeopplevelser ikke regnes som fenomenale tilstander", "Fordi fysikalismen ikke sier noe om kvaliteten på opplevelser", "Fordi argumentet bare gjelder synet og ikke de andre sansene"],
      explanation: "Argumentet krever bare funksjonell likhet, og to funksjonelt like personer kan ha ulike hjerner — da foreligger ingen mental forskjell uten fysisk forskjell. Skal det ramme fysikalismen, må inversjonen skjerpes til fysisk identiske personer, og da er man over i zombie-argumentets modale byrde.",
    },
    {
      question: "Hvilke av qualia-argumentene er rettet mot funksjonalismen og ikke mot fysikalismen?",
      options: ["Absent qualia og invertert spektrum", "Zombie-argumentet og invertert spektrum", "Kunnskapsargumentet og flaggermus-argumentet", "Flaggermus-argumentet og absent qualia"],
      explanation: "Mary, flaggermusen og zombien er rettet mot fysikalismen, med kravene ufullstendig, uforståelig og usann; Blocks absent qualia og invertert spektrum er rettet mot funksjonalismen og sier at rollen ikke fastlegger opplevelsen. Å behandle de fem som urelaterte innvendinger er feil #10 — de er trekk i én og samme strategi.",
    },
    {
      question: "Hva hevder qualia-representasjonalismen?",
      options: ["At en opplevelses fenomenale karakter er dens representasjonelle innhold", "At fenomenale tilstander er noe helt annet enn representasjonelle tilstander", "At all representasjon i sinnet er ledsaget av en fenomenal opplevelse", "At representasjoner er nevrale tilstander uten noen fenomenal karakter"],
      explanation: "Tesen er en identifisering: hvordan noe framtrer for deg, er ikke noe i tillegg til hva opplevelsen representerer verden som. Den vanligste feiltolkningen gjør posisjonen til en påstand om at de to slagene tilstander opptrer sammen — men da ville det fenomenale fortsatt være noe eget, og fysikalisten ville ikke ha vunnet noe.",
    },
    {
      question: "Hva går gjennomsiktighetsargumentet ut på?",
      options: ["At du alltid ender med å legge merke til noe du opplever tingen som", "At bevisste opplevelser er umiddelbart tilgjengelige for introspeksjon", "At vi kan avlese hvilke nevrale prosesser som ligger bak en opplevelse", "At fargeordene våre viser til overflater og ikke til våre opplevelser"],
      explanation: "Forsøker du å rette oppmerksomheten mot selve synsopplevelsen i stedet for mot tomaten, later opplevelsen til å være gjennomsiktig — du ser gjennom den til verden, og da er det ingenting der utover det representerte. Argumentet gjelder ikke introspeksjonens pålitelighet generelt, og det er et argument om opplevelsen, ikke om ordene.",
    },
    {
      question: "Hvordan svarer representasjonalismen på invertert spektrum, og hva koster svaret?",
      options: ["Den benekter at de to representerer det samme — men én må da feilrepresentere", "Den godtar argumentet og oppgir tanken om at fenomenal karakter er innhold", "Den benekter at de to er funksjonelt like — men da faller tankeeksperimentet", "Den benekter at fargeopplevelser har innhold — men da mister tesen anvendelse"],
      explanation: "Svaret rammer premisset om lik fenomenal rolle med ulik kvalitet: den ene representerer overflaten som rød, den andre som grønn, så det er to ulike representasjoner og ikke én representasjon med to kvaliteter. Kostnaden er at minst én av dem systematisk feilrepresenterer alle farger hele livet uten noe utslag. Å benekte funksjonell likhet er innvendingen fra fargerommets struktur, altså et annet trekk.",
    },
  ],
  'fil1001-6-3': [
    {
      question: "Hva er intensjonalitet?",
      options: ["Mentale tilstanders rettethet mot objekter eller saksforhold", "Mentale tilstanders egenskap av å være villet av personen selv", "Den følte kvaliteten ved en opplevelse, slik den er innenfra", "Evnen til å danne langsiktige planer og handle etter dem over tid"],
      explanation: "Intensjonalitet er om-het: at en tro, et ønske eller en frykt alltid er om noe. Hensikt heter intensjon uten t-en foran, og er bare én av mange intensjonale tilstander. Den følte kvaliteten er qualia, som er et annet trekk ved det mentale.",
    },
    {
      question: "Hva er forskjellen på intensjonalitet og intensjon?",
      options: ["Intensjonalitet er rettethet mot noe, intensjon er hensikt", "Intensjonalitet er hensikt, intensjon er rettethet mot noe", "Intensjonalitet er bevisst, mens en intensjon alltid er ubevisst", "Intensjonalitet gjelder handlinger, intensjon gjelder persepsjon"],
      explanation: "Skillet er at rettethet dekker tro, ønske, frykt og persepsjon, mens hensikt bare er én type slik tilstand. Å bytte om de to er den vanligste feilen i temaet, og skillet handler verken om bevissthetsgrad eller om handling mot persepsjon.",
    },
    {
      question: "Hvorfor er det intensjonale objektet et problem for en fysisk analyse av rettethet?",
      options: ["Fordi det ikke behøver å finnes, mens fysiske relasjoner krever to virkelige ledd", "Fordi det alltid er noe fysisk, mens tanken om det er noe ikke-fysisk", "Fordi det bare kan beskrives av den som selv har tilstanden, og ikke av andre observatører", "Fordi det skifter fra person til person, slik at ingen tenker på nøyaktig det samme"],
      explanation: "Du kan frykte et monster som ikke finnes, men ingenting kan stå til venstre for et monster som ikke finnes. En vanlig fysisk relasjon krever at begge leddene er der, og det er dette kravet rettethet bryter — ikke noe krav om at objektet skal være privat eller skiftende.",
    },
    {
      question: "Hva sier den kausal-informasjonelle teorien om mental representasjon?",
      options: ["At en tilstand handler om noe fordi den lovmessig frambringes av det", "At en tilstand handler om noe fordi personen tolker den slik bevisst", "At en tilstand handler om noe fordi den ligner på det den handler om", "At en tilstand handler om noe fordi språket tilordner den innhold"],
      explanation: "Modellen er røyk som indikerer ild og årringer som indikerer alder: en pålitelig kausal korrelasjon. Teorien er attraktiv nettopp fordi den ikke låner noe mentalt, slik en analyse via tolkning eller via språklig tilordning ville gjort.",
    },
    {
      question: "Hva er feilrepresentasjonsproblemet?",
      options: ["At representasjoner kan være usanne, mens korrelasjoner ikke kan være det", "At vi ofte husker feil hva vi selv trodde og mente på et tidligere tidspunkt i livet", "At to personer kan representere den samme tingen på ulike måter", "At en representasjon kan mangle den fenomenale kvaliteten den egentlig burde hatt"],
      explanation: "En tanke kan bomme, men røyk indikerer ild bare når det faktisk brenner. En ren korrelasjonsanalyse mister dermed selve muligheten for feil. Problemet gjelder ikke hukommelsessvikt, perspektivforskjeller eller qualia.",
    },
    {
      question: "Hva er disjunksjonsproblemet?",
      options: ["At korrelasjonen ikke skiller «ku, av og til feil» fra «ku eller hest, alltid rett»", "At en tilstand kan handle om flere ting samtidig og dermed bli tvetydig", "At en teori om innhold må velge mellom å forklare troen og å forklare ønsket hos personen", "At samme fysiske tilstand kan realiseres på flere ulike måter i ulike vesener og systemer"],
      explanation: "Problemet er at to beskrivelser av innholdet passer like godt til den samme korrelasjonen, og at det derfor ikke finnes noen feil å gjøre. Svaret om at samme tilstand kan realiseres på flere måter i ulike systemer, beskriver multippel realiserbarhet — et annet problem.",
    },
    {
      question: "Hva er standardsvaret på disjunksjonsproblemet, og hva koster det?",
      options: ["Å legge til hva tilstanden er der for; prisen er et funksjonsbegrep som selv må analyseres", "Å legge til at tilstanden må være bevisst; prisen er at dyr mister alt innhold", "Å legge til at korrelasjonen må være unntaksfri; prisen er at ingen tanker består den testen", "Å legge til at innholdet fastsettes av språket vårt; prisen er at spedbarn og dyr ikke kan tenke"],
      explanation: "Svaret er at systemet er formet for å registrere kuer, slik at tåketilfellene er sammenbrudd. Det er ikke ad hoc, siden funksjonsbegrepet alt brukes i biologien, men naturaliseringen hviler nå på et begrep om normal funksjon som er vanskelig å gjøre presist.",
    },
    {
      question: "Hva er skillet mellom original og avledet intensjonalitet hos Searle?",
      options: ["Original rettethet har en tilstand av seg selv, avledet fordi noen tolker den", "Original rettethet gjelder persepsjon og sansning, avledet gjelder tro og ønske", "Original rettethet er medfødt, mens avledet rettethet er tilegnet gjennom språklæring", "Original rettethet er bevisst, avledet er lagret utenfor bevisstheten"],
      explanation: "Tanken din om melk handler om melk av seg selv; ordet «melk» gjør det bare fordi vi leser det slik. Skillet er ikke et skille mellom sansning og tanke, og heller ikke mellom medfødt og lært.",
    },
    {
      question: "Hvilken retning går Searles kobling mellom bevissthet og rettethet?",
      options: ["Ekte rettethet forutsetter bevissthet", "Bevissthet forutsetter ekte rettethet", "De to er uavhengige av hverandre i alle henseender", "Begge er avledet av systemets funksjonelle organisasjon"],
      explanation: "Searle hevder at bare tilstander som er eller kan bli bevisste, egentlig handler om noe. Retningen er stikk motsatt av representasjonalismens, som forklarer det fenomenale ved det intensjonale.",
    },
    {
      question: "Hvordan henger det kinesiske rommet sammen med intensjonalitet?",
      options: ["Konklusjonen at syntaks ikke gir semantikk, er en påstand om symbolenes rettethet", "Rommet viser at systemet mangler qualia, altså at det ikke føles noe å være det systemet", "Rommet viser at funksjonell organisasjon ikke kan realiseres i papir og regelbøker", "Rommet viser at forståelse krever et biologisk substrat med nevroner av rett type"],
      explanation: "Searles poeng er semantisk: symbolene betyr ikke noe for rommet. Blocks Chinese Nation er argumentet som handler om manglende qualia, og Searle benekter ikke at ikke-biologiske systemer i prinsippet kunne hatt de rette kausale kreftene.",
    },
    {
      question: "Hva hevder tesen om det utvidede sinnet?",
      options: ["At kognitive prosesser kan ha bestanddeler utenfor kroppen", "At fenomenal bevissthet kan strekke seg ut i verktøy og omgivelser", "At mentale tilstander bestemmes av det språklige fellesskapet man tilhører", "At hjernen alene ikke kan forklares uten å nevne kroppens bevegelser"],
      explanation: "Clark og Chalmers hevder at tro, hukommelse og problemløsning kan strekke seg ut i omgivelsene. De er uttrykkelig tilbakeholdne med å utvide påstanden til opplevelse, og tesen er verken en påstand om språksamfunn eller om kroppens rolle.",
    },
    {
      question: "Hva er Clark og Chalmers uttrykkelig forsiktige med å hevde?",
      options: ["At fenomenal bevissthet strekker seg ut i verktøyene på samme måte som kognisjon", "At tro kan ha bestanddeler utenfor hodeskallen hos en person med svekket hukommelse", "At hukommelse kan realiseres av noe annet enn biologisk vev i et levende system", "At hodeskallen ikke i seg selv utgjør noen filosofisk relevant grense for prosesser"],
      explanation: "Tesen gjelder kognisjon, og forfatterne holder spørsmålet om utvidet opplevelse åpent. De øvrige punktene er derimot ting de nettopp hevder, og å tilskrive dem en påstand om utvidede qualia er å tilskrive dem en konklusjon de ikke trakk.",
    },
    {
      question: "Hva sier paritetsprinsippet?",
      options: ["Fyller en ytre del en rolle vi ville kalt kognitiv om den var i hodet, er den del av prosessen", "Fyller to systemer samme kausalrolle, har de nødvendigvis de samme opplevelsene", "Er to personer funksjonelt like, er de også fenomenalt like i alle henseender", "Er en ytre prosess kausalt nødvendig for kognisjonen, er den dermed en del av den kognisjonen"],
      explanation: "Prinsippet er et krav om likebehandling som forbyr å avvise en prosess bare fordi den ligger utenfor kraniet. Svaret om at kausal nødvendighet gir medlemskap, er nettopp den slutningen kobling–konstitusjon-innvendingen anklager tesen for å gjøre, ikke prinsippets egen ordlyd.",
    },
    {
      question: "Hva er poenget med Otto og Inga?",
      options: ["At notatboka fyller samme rolle for Otto som hukommelsen for Inga, og skal behandles likt", "At Otto mangler kunnskap Inga har, siden han må slå opp mens hun bare vet det", "At Otto har en opplevelse av å huske som Inga ikke har, siden hun bare vet", "At Otto og Inga representerer to ulike måter å bruke det samme biologiske minnesystemet på"],
      explanation: "Clark og Chalmers hevder at Otto trodde at museet lå der, allerede før han slo opp. Poenget er nettopp likheten i rolle, ikke en forskjell i kunnskap eller i opplevelse.",
    },
    {
      question: "Hva er limkriteriene i tesen om det utvidede sinnet?",
      options: ["Krav om at ressursen er konstant tilgjengelig, hentbar og automatisk godtatt", "Krav om at ressursen er skapt av personen selv og bare brukes av henne", "Krav om at ressursen har fenomenal karakter for den som bruker den", "Krav om at ressursen kan fjernes uten at personens atferd endrer seg merkbart"],
      explanation: "Kriteriene er posisjonens egen avgrensning mot at hva som helst blir en del av sinnet. De sier ingenting om hvem som har laget ressursen, og de krever verken opplevelse eller at ressursen skal være uvesentlig for atferden.",
    },
    {
      question: "Hva går kobling–konstitusjon-innvendingen ut på?",
      options: ["At noe kan være kausalt koblet til en prosess uten å utgjøre en del av den", "At koblingen mellom hjerne og verktøy er for svak til å overføre informasjon", "At sinnet ville blitt grenseløst dersom alle koblinger var like sterke", "At verktøyet ikke kan konstituere noe, siden det mangler egen kausal kraft"],
      explanation: "Teleskopet er uunnværlig for astronomens observasjon uten å være en del av synet hennes. Innvendingen sier at paritetsprinsippet forveksler en årsaksrolle med et medlemskap, ikke at koblingen er for svak eller at verktøy mangler kausal kraft.",
    },
    {
      question: "Hva er panpsykisme?",
      options: ["Synet at erfaringsmessig karakter er fundamental og utbredt i den fysiske virkeligheten", "Synet at alle ting i naturen har sjeler, ønsker og hensikter av eget slag", "Synet at bevissthet oppstår når fysiske systemer når en tilstrekkelig grad av kompleksitet", "Synet at alt som finnes, i siste instans er mentalt og ingenting er materielt"],
      explanation: "Påstanden gjelder de enkleste bestanddelene og gjelder erfaringsmessig karakter, ikke tanker eller hensikter — derfor er posisjonen ikke animisme. Den er heller ikke en emergensteori, og den er noe annet enn Berkeleys idealisme.",
    },
    {
      question: "Hvorfor kaller Strawson panpsykismen en fysikalistisk posisjon?",
      options: ["Fordi den utvider hva vi regner som fysisk, i stedet for å legge noe ikke-fysisk til", "Fordi den benekter at det finnes erfaring utover det fysikken alt beskriver", "Fordi den reduserer alle mentale egenskaper til målbare fysiske størrelser", "Fordi den holder fast ved at erfaring oppstår av rent fysiske prosesser i hjerner alene"],
      explanation: "Strawsons grep er å si at det fysiske grunnplanet har mer ved seg enn fysikken beskriver, ikke at noe ikke-fysisk kommer i tillegg. Han benekter altså verken at erfaring finnes eller at alt er fysisk — han bestrider at emergens kan gjøres forståelig.",
    },
    {
      question: "Hva er det springende premisset i Strawsons emergensargument?",
      options: ["At radikal emergens er uforståelig, ikke bare uforklart så langt", "At erfaring finnes, siden det er det sikreste vi vet noe om", "At alt som finnes, er fysisk og følger fysikkens lover", "At mikroskopiske erfaringer lar seg kombinere til én samlet opplevelse"],
      explanation: "Premisset om at erfaring ikke kan bli begripelig ut fra et grunnlag helt uten erfaring, er det som bærer argumentet. At erfaring finnes og at alt er fysisk, godtas av de fleste motparter, mens kombinasjon er innvendingen mot posisjonen og ikke et premiss i den.",
    },
    {
      question: "Hva er kombinasjonsproblemet?",
      options: ["Hvordan mange bittesmå erfaringer skulle bli til den ene, enhetlige opplevelsen du har", "Hvordan fysiske og mentale egenskaper skulle kunne opptre i samme gjenstand", "Hvordan en teori kan kombinere emergens og reduksjon uten å motsi seg selv", "Hvordan to personer med ombyttede fargeopplevelser likevel kan bruke fargeordene helt likt"],
      explanation: "Innvendingen mot panpsykismen er at mikro-subjekter ikke uten videre gir ett makro-subjekt, og at kombinasjonen er like uforståelig som spranget den skulle erstatte. Svaret om to personer med ombyttede fargeopplevelser beskriver invertert spektrum.",
    },
    {
      question: "Hva er tilstandsbevissthet, i motsetning til skapningsbevissthet?",
      options: ["En egenskap ved en enkelt mental tilstand, nemlig at personen er bevisst den", "En egenskap ved et vesen, nemlig at det er våkent og mottakelig for inntrykk", "En egenskap ved en tilstand, nemlig at det er noe det er som å være i den", "En egenskap ved et vesen, nemlig at det kan rapportere om egne tilstander"],
      explanation: "En irritasjon kan påvirke atferden i en time før du legger merke til den: du er skapningsbevisst hele tiden, mens irritasjonen blir tilstandsbevisst til slutt. At det er noe det er som å være i tilstanden, er derimot fenomenal bevissthet.",
    },
    {
      question: "Hva sier higher-order-teorier at gjør en mental tilstand bevisst?",
      options: ["At den er gjenstand for en høyereordens tilstand rettet mot den", "At den er tilgjengelig for språklig rapportering til andre personer", "At den har en fenomenal karakter som ikke lar seg redusere videre", "At den spiller en kausalrolle mellom sanseinput og atferdsoutput"],
      explanation: "Ideen er at en tilstand blir bevisst ved å bli lagt merke til av en tilstand over den, enten en indre sansning eller en tanke. Kausalrolle-svaret er funksjonalismens, og ureduserbar fenomenal karakter er nettopp det teorien ikke postulerer.",
    },
    {
      question: "Hva er forskjellen mellom HOP og HOT?",
      options: ["HOP gjør den høyereordens tilstanden til en indre sansning, HOT til en tanke", "HOP gjelder persepsjon av verden, HOT gjelder tenkning om verden", "HOP forklarer den fenomenale bevisstheten, HOT forklarer tilgangsbevisstheten", "HOP krever språk hos den som har tilstanden, HOT krever bare sansing"],
      explanation: "Begge er høyereordens teorier om hva som gjør en tilstand bevisst; de skiller seg i hva den overordnede tilstanden er. At en tanke krever begreper om egne tilstander, gjør det vanskeligere å tilkjenne spedbarn og dyr bevissthet på HOT-varianten.",
    },
    {
      question: "Hva blir higher-order-teorier typisk anklaget for ikke å forklare?",
      options: ["Den fenomenale karakteren — hvorfor tilstanden kjennes slik den gjør", "Hvordan en tilstand i det hele tatt kan handle om noe utenfor personen selv", "Hvorfor mennesker kan rapportere om sine egne mentale tilstander", "Hvordan mentale tilstander kan forårsake fysisk atferd i verden"],
      explanation: "Anklagen er at teorien forklarer bevissthet om en tilstand og dermed løser et av de lette problemene, mens det vanskelige står igjen. Rapportering er nettopp noe teorien håndterer, og mental kausalitet er et annet problem, behandlet hos Kim.",
    },
    {
      question: "Hva er Blocks skille mellom tilgangsbevissthet og fenomenal bevissthet?",
      options: ["Tilgjengelighet for resonnering og rapportering mot at det er noe det er som å være i den", "Bevissthet om omverdenen mot bevissthet om ens egne indre tilstander", "Bevissthet hos våkne vesener mot bevissthet hos vesener i drømmesøvn", "Bevissthet som lar seg måle utenfra mot bevissthet som bare kan huskes i ettertid av personen"],
      explanation: "Skillet er nyttig fordi higher-order-teoriene naturlig forklarer tilgangssiden, mens qualia-argumentene til Jackson, Nagel og Chalmers alle handler om den fenomenale siden. Det er verken et skille mellom ytre og indre eller mellom våken og sovende.",
    },
    {
      question: "Hva går innvendingen fra feilaktige høyereordens tilstander ut på?",
      options: ["At teorien får problemer om jeg tenker at jeg har vondt uten å ha det", "At den høyereordens tilstanden selv må gjøres bevisst av en tredje tilstand", "At vi ofte tar feil av hvilken følelse vi har, og derfor ikke kan stole på introspeksjon", "At en tanke om en tilstand alltid kommer for sent til å gjøre tilstanden bevisst"],
      explanation: "Innvendingen er et dilemma: sier teorien at jeg da har en bevisst smerte, tilkjenner den opplevelse uten noen tilstand å oppleve; sier den nei, er det ikke lenger den høyereordens tilstanden som gjør arbeidet. Regressproblemet er en annen innvending.",
    },
    {
      question: "Hva sier den summative analysen av vi-intensjoner?",
      options: ["At en vi-intensjon er jeg-intensjoner om egen del pluss gjensidig tro", "At en vi-intensjon er en egen grunnform som ikke lar seg bygge av jeg-intensjoner", "At en vi-intensjon bæres av gruppen selv og ikke av de enkelte medlemmene", "At en vi-intensjon oppstår først når deltakerne har snakket sammen om målet"],
      explanation: "Analysen er sparsommelig: ingen nye slag tilstander, bare individer og deres tro om hverandre. Den ikke-reduserende analysen er Searles motposisjon, og ingen av dem postulerer et gruppesinn eller krever forutgående samtale.",
    },
    {
      question: "Hvor plasserer Searle vi-intensjonen?",
      options: ["I hvert enkelt individs hode, som en egen form for intensjon", "I gruppen som helhet, som en kollektiv bevissthet over individene", "I de sosiale institusjonene som regulerer samhandlingen", "I atferdsmønsteret gruppen viser, uavhengig av indre tilstander"],
      explanation: "Poenget er at formen «vi gjør X, og jeg gjør min del i det» kan finnes i ett hode. Searle postulerer altså ikke noe gruppesinn, og posisjonen er verken institusjonell eller behavioristisk.",
    },
    {
      question: "Hva er standardinnvendingen mot den summative analysen?",
      options: ["Moteksempler med koordinering uten fellesskap, der alle vilkårene er oppfylt", "At den forutsetter et gruppesinn som ingen noensinne har observert noe sted i naturen", "At den ikke kan forklare hvordan to personer kan tro det samme samtidig", "At den gjør vi-intensjoner til noe bare språkbrukere kan ha"],
      explanation: "To konkurrenter kan hver ha til hensikt å gjøre sin del og tro at den andre gjør sin, uten å samarbeide. Er moteksemplene gode, mangler analysen nettopp det den skulle fange — og innvendingen handler ikke om gruppesinn, som analysen tvert imot unngår.",
    },
    {
      question: "Hva er prioritetsklassen for stoffet i dette kapitlet?",
      options: ["Bør kjenne til — intensjonalitet er tema i 2 av 21 sett og randtemaene enda sjeldnere", "Høyeste prioritet — intensjonalitet er tema i over halvparten av settene", "Kunne — stoffet ligger midt på treet i frekvens og bør sitte helt presist", "Bør kjenne til — men bare fordi stoffet er teknisk vanskelig, ikke fordi det er sjeldent"],
      explanation: "Klassen er bør kjenne til, og begrunnelsen er frekvensen: intensjonalitet står i to sett, randtemaene i ett eller to hver. Til sammenligning er qualia-komplekset tema i 12 av 21 sett.",
    },
  ],
  'fil1001-7-1': [
    {
      question: "Hva er de tre leddene grunnformen S1 krever av et svar?",
      options: ["Presis redegjørelse, kritisk drøfting, begrunnet stillingtaken", "Innledning med problemstilling, hoveddel med teori, avslutning", "Definisjon av begrepene, historisk bakgrunn, oppsummering til slutt", "Egen mening først, deretter støtte fra pensum, deretter motargument"],
      explanation: "Grunnformen er redegjørelse, kritisk drøfting og begrunnet standpunkt. Den vanlige essaymalen med innledning, hoveddel og avslutning sier noe om formen, men ikke om hva de tre leddene skal gjøre — og et svar som åpner med egen mening, mangler redegjørelsen drøftingen skal hvile på.",
    },
    {
      question: "Hva skal en plasseringssetning gjøre?",
      options: ["Si hva posisjonen påstår, og hvilket problem den er et svar på", "Slå fast hvilket standpunkt du kommer til å lande på til slutt", "Gi tenkerens levetid og plassering i filosofihistorien kort", "Definere alle fagbegrepene som brukes senere i besvarelsen"],
      explanation: "Plasseringssetningen gjør to ting i én setning: den sier hva posisjonen påstår, og hvilket problem den løser. Å varsle konklusjonen er lov, men er ikke det setningen er til for, og en definisjonsliste eller en biografisk plassering gir leseren ingen inngang til argumentet.",
    },
    {
      question: "Hva er forskjellen på å referere og å rekonstruere et argument?",
      options: ["Rekonstruksjonen viser hvilke premisser konklusjonen hviler på", "Rekonstruksjonen gjengir tenkerens egne formuleringer mest mulig ordrett", "Rekonstruksjonen er lengre og dekker flere sider ved posisjonen", "Rekonstruksjonen setter argumentet inn i sin historiske sammenheng"],
      explanation: "Å rekonstruere er å sette opp premissene som fører fram til konklusjonen. Ordrett gjengivelse og historisk plassering kan begge være riktige og relevante, men de viser ikke hva argumentet hviler på — og det er nettopp den innsikten drøftingen trenger.",
    },
    {
      question: "Hvor mange av de 45 skriveminuttene bør etter bokas modell gå til drøftingen?",
      options: ["Rundt 17 minutter, altså den største enkeltposten", "Rundt 8 minutter, siden redegjørelsen er den tyngste delen", "Rundt 25 minutter, altså mer enn halvparten av tiden", "Rundt 12 minutter, altså like mye som redegjørelsen"],
      explanation: "Modellen er ca. 3 minutter disposisjon, 12 til redegjørelse, 17 til drøfting, 8 til landing og 5 til gjennomlesing. Drøftingen får mest fordi både bestått-terskelen og forskjellen opp mot A avgjøres der.",
    },
    {
      question: "Hva består et innvendingspar av?",
      options: ["Innvendingen i sterkeste form pluss posisjonens eget svar på den", "To ulike innvendinger som rammer samme premiss i argumentet", "En innvending og et eksempel som illustrerer den nærmere", "En innvending og din egen vurdering av hvor sterk den er"],
      explanation: "Paret er innvending pluss posisjonens eget svar; først deretter kommer din vurdering. To løse innvendinger, eller en innvending med illustrasjon, gir ikke den dialektikken kjennetegn 4 etterspør.",
    },
    {
      question: "Hva er en veiesetning?",
      options: ["Setningen som sier hvem som står sterkest, og hvorfor", "Setningen som slår fast at begge sider har gode argumenter", "Setningen som oppsummerer alle innvendingene som er nevnt", "Setningen som viser hvor mye plass hvert argument har fått"],
      explanation: "Å veie er å si hvilket argument som står sterkest og av hvilken grunn. Å konstatere at det finnes argumenter på begge sider, er nettopp det uveide alternativet — og en oppsummering av innvendinger er ikke en vurdering av dem.",
    },
    {
      question: "Hvilken av disse setningene er en bro i bokas forstand?",
      options: ["«Funksjonalismen er utformet som et svar på multippel realiserbarhet.»", "«Multippel realiserbarhet er en viktig innvending mot identitetsteorien.»", "«Både funksjonalismen og identitetsteorien er fysikalistiske posisjoner.»", "«Funksjonalismen ble utviklet noe senere enn identitetsteorien.»"],
      explanation: "En bro påviser at ett argument er et svar på et annet, at to er varianter av samme strategi, eller at ett fjerner et premiss et annet hviler på. Å konstatere at to posisjoner deler et kjennetegn, eller kom i en bestemt rekkefølge, er en opplysning, ikke en påvist sammenheng.",
    },
    {
      question: "Hvilke tre deler skal landingen ha?",
      options: ["Standpunkt, grunn hentet fra drøftingen, og prisen standpunktet koster", "Standpunkt, oppsummering av besvarelsen, og et åpent sluttspørsmål", "Standpunkt, et nytt argument til støtte, og en henvisning til pensum", "Standpunkt, forbehold om egen usikkerhet, og forslag til videre lesing"],
      explanation: "Landingen sier hva du mener, begrunner det med noe du allerede har veid, og innrømmer hva standpunktet koster. Et nytt argument som dukker opp først i siste avsnitt, er ikke hentet fra drøftingen, og en oppsummering er ikke en begrunnelse.",
    },
    {
      question: "Hva skal du kutte først dersom du ligger etter på tid i en S1-besvarelse?",
      options: ["Redegjørelsen, som er den billigste delen å komprimere", "Landingen, siden den bare gjentar det du allerede har vist", "Innvendingens innhold, og heller bare nevne navnet på den", "Rekonstruksjonen, og heller skrive argumentet som løpende prosa"],
      explanation: "Redegjørelsen kuttes først, deretter en eventuell andre innvending, deretter illustrasjoner. Landingen kuttes aldri — et svar uten stillingtaking mangler et helt ledd oppgaven ba om, og en innvending redusert til et navn er navnedropping.",
    },
    {
      question: "En oppgave sier: «Gjør rede for X, forklar hvordan X motiveres, drøft innvendinger og ta stilling.» Hvor mange deler skal svaret ha?",
      options: ["Fire, én per instruksjonsverb", "Tre, siden redegjørelse og motivasjon hører sammen", "To, siden alt før «drøft» er redegjørelse", "Fem, siden stillingtakingen krever både standpunkt og forbehold"],
      explanation: "Tell instruksjonsverbene: fire verb gir fire deler. Motivasjonsleddet ligner på redegjørelsen og er derfor det som oftest glemmes, men det spør om noe annet — hvilket problem posisjonen løser.",
    },
    {
      question: "Hvorfor bør broen føres opp som egen linje i kladdedisposisjonen?",
      options: ["Fordi sammenhengen er det første som ryker når tiden blir knapp", "Fordi sensor krever at sammenhengen står i et eget avsnitt", "Fordi broen alltid skal plasseres helt til slutt i besvarelsen", "Fordi den erstatter behovet for en innvending i drøftingen"],
      explanation: "Broen er det grepet som oftest forsvinner under tidspress, og derfor føres den opp som egen linje i disposisjonen. Den har ingen fast plassering i teksten, og den erstatter ikke innvendingen — den kommer i tillegg.",
    },
    {
      question: "En besvarelse avslutter med «jeg heller mot at teorien er riktig». Hvilken feil er dette et eksempel på?",
      options: ["Påstand uten argument i ta-stilling-delen", "Ensidig drøfting uten innvendinger", "Navnedropping uten innhold i redegjørelsen", "Å bomme på den navngitte teksten oppgaven ber om"],
      explanation: "Feilen er en konklusjon uten premisser under. Ensidig drøfting handler om at bare den ene siden bygges ut, navnedropping om begreper som nevnes uten innhold, og termbommen om at oppgaven navngir en bestemt framstilling som ikke brukes.",
    },
    {
      question: "Hva er hovedgrunnen til at grunnformen S1 er verdt å øve mest på?",
      options: ["Den ligger under så godt som hvert spørsmål på eksamen", "Den er den eneste sjangeren som gir mulighet for toppkarakter", "Den er den korteste sjangeren og krever minst forberedelse", "Den brukes bare i bevissthetsfilosofi, som er den største delen"],
      explanation: "S1 er grunnformen i så godt som hvert spørsmål, i begge halvdeler av faget. De øvrige sjangrene legger krav til den, men erstatter den ikke — og ingen sjanger er reservert for bestemte karakterer.",
    },
    {
      question: "Hva er riktig om standpunktet i en S1-besvarelse?",
      options: ["Retningen er fri; det er begrunnelsen som vurderes", "Det bør følge det synet pensumboka selv forsvarer", "Det bør alltid være et kompromiss mellom de to sidene", "Det bør holdes åpent, siden spørsmålene er omstridte"],
      explanation: "Alle utfall kan gi toppkarakter når begrunnelsen er stringent. Å kopiere lærebokas syn, å velge kompromisset av vane eller å la spørsmålet stå åpent uten grunner, er alle måter å unngå selve leddet oppgaven ba om.",
    },
  ],
  'fil1001-7-2': [
    {
      question: "Hva kjennetegner en ekte analyseakse i en sammenligningsoppgave?",
      options: ["Det er et spørsmål begge posisjonene kan gi et svar på", "Det er en påstand som skiller de to posisjonene fra hverandre", "Det er et tema som begge tenkerne har skrevet mye om", "Det er et punkt der den ene posisjonen er klart sterkest"],
      explanation: "Testen er om begge kan svare på spørsmålet. «Hvorfor er den ene teorien nyere?» kan bare den ene svare på, og et punkt der den ene er klart sterkest, er en vurdering — ikke selve aksen.",
    },
    {
      question: "Hva er blokkstruktur i et sammenligningssvar?",
      options: ["Alt om den ene posisjonen først, deretter alt om den andre", "En struktur der hver akse behandles i en egen blokk", "En struktur der redegjørelsene er kortet ned til stikkord", "En struktur der vurderingen kommer først og begrunnes etterpå"],
      explanation: "Blokkstruktur er alt-om-A fulgt av alt-om-B, altså to parallelle framstillinger. Å behandle hver akse for seg er nettopp aksestrukturen, som er alternativet — og rekkefølgen på vurderingen har ingenting med saken å gjøre.",
    },
    {
      question: "Hvilken av de ti typiske feilene rammer sammenligningsoppgaven hardest?",
      options: ["Manglende sammenhenger — argumentene behandles isolert", "Referat uten drøfting — svaret stopper etter redegjørelsen", "Å bomme på den navngitte teksten oppgaven ber om", "Overlapp mellom svar — samme poeng brukt i to besvarelser"],
      explanation: "Sjangerens hovedfeil er å behandle posisjonene isolert der oppgaven ba om koblingen. Referatfeilen rammer alle sjangre likt, termbommen gjelder navngitte pensumtermer, og overlapp handler om forholdet mellom fire ulike svar.",
    },
    {
      question: "Hvordan bør de 45 skriveminuttene fordeles i en S2-besvarelse?",
      options: ["Mest tid til aksene, mindre til de to redegjørelsene til sammen", "Like mye tid til hver av de to redegjørelsene som til aksene samlet", "Mest tid til redegjørelsene, siden de må dekke to posisjoner", "Mest tid til den samlede vurderingen helt til slutt"],
      explanation: "Modellen er ca. 12 minutter på begge redegjørelsene til sammen, ca. 20 på aksene og ca. 8 på vurderingen. Grundige redegjørelser som spiser opp tiden, er den vanligste måten å levere et halvt svar i denne sjangeren.",
    },
    {
      question: "Hva er fellesgrunnen i en sammenligning?",
      options: ["Det de to posisjonene er enige om", "Det området begge tenkerne har arbeidet innenfor", "Den innvendingen som rammer begge posisjonene", "Det spørsmålet oppgaveteksten ber deg besvare"],
      explanation: "Fellesgrunnen er enigheten som gjør uenigheten skarp — for eksempel at både Hume og Lewis avviser en observerbar nødvendig forbindelse. En felles innvending kan være verdt å nevne, men det er noe annet enn enighet mellom posisjonene.",
    },
    {
      question: "Hva sier kravet om vurdering per akse?",
      options: ["Hver akse skal ende med hvem som står sterkest på nettopp den", "Hver akse skal veies mot de andre aksene før konklusjonen", "Hver akse skal ha like mange argumenter for hver posisjon", "Hver akse skal knyttes til ett av de fem kjennetegnene"],
      explanation: "Poenget er at dommen skal falle akse for akse, slik at sammenligningen blir differensiert. En samlet dom uten aksevise vurderinger gir bare to mulige utfall, og symmetri i antall argumenter er ikke noe krav.",
    },
    {
      question: "Hva slags slektskap har Hume og Lewis om kausalitet?",
      options: ["Lewis er etterfølger — analysen svarer på problemer Hume etterlot", "De er rene rivaler som utviklet teoriene sine uavhengig av hverandre", "De bruker samme grep mot to ulike målskiver", "Lewis forsvarer Humes analyse mot moteksemplene mot den"],
      explanation: "Lewis viderefører Humes andre, kontrafaktiske definisjon og forsøker å lukke hullene den første etterlot — retningsproblemet og felles årsaker. Han forsvarer altså ikke regularitetsteorien, og de er heller ikke uavhengige rivaler slik Newton og Leibniz er.",
    },
    {
      question: "Hva slags slektskap har Descartes og Kripke?",
      options: ["Samme grep mot ulik målskive — én bygger, én river", "Etterfølgerforhold der Kripke reparerer Descartes' argument", "Rene rivaler som forsvarer motsatte syn på det mentale", "Samme målskive, men med hvert sitt ulike apparat"],
      explanation: "Begge går fra hva vi kan tenke oss til hva som er mulig, men Descartes bygger en posisjon om to substanser, mens Kripke river ned én bestemt identitetspåstand. Kripke er ikke substansdualist, og han reparerer ikke Descartes' argument.",
    },
    {
      question: "Hvorfor er Blocks Chinese Nation farligere for funksjonalismen enn Searles kinesiske rom?",
      options: ["Fordi caset stipulerer en fullstendig funksjonell duplikat", "Fordi caset er mer omfattende og involverer langt flere personer", "Fordi Searles argument er blitt tilbakevist av systemsvaret", "Fordi Block retter seg mot forståelse og ikke mot opplevelse"],
      explanation: "Chinese Nation stipulerer identisk funksjonell organisasjon, så funksjonalisten kan ikke svare at en relevant rolle mangler. Searles case handler nettopp om forståelse, ikke opplevelse, og systemsvaret er en innvending mot ham, ikke en avgjort tilbakevisning.",
    },
    {
      question: "Hva er en aksetabell?",
      options: ["En kladdetabell med kolonnene akse, A sier og B sier", "En tabell som viser hvilke kapitler hver posisjon står i", "En oversikt over hvor mange minutter hver akse skal ta", "En liste over innvendinger sortert etter hvor sterke de er"],
      explanation: "Aksetabellen er disposisjonsformen for sjangeren: tre kolonner og tre til fire rader med stikkord. Fordelen er at en tom celle avslører at raden ikke er en akse, men en opplysning om bare den ene posisjonen.",
    },
    {
      question: "Hva er et krysspar?",
      options: ["Et par der én posisjon er metafysisk og én hører til bevissthetsfilosofien", "Et par der de to posisjonene motsier hverandre direkte på alle punkter", "Et par som opptrer i begge de to settformatene", "Et par der begge posisjonene forsvares av samme tenker"],
      explanation: "Kryssparet setter sammen en posisjon fra hver av fagets to halvdeler, for eksempel Kripkes modale argument og Chalmers' zombie-argument. Direkte motsetning er vanlig i alle par, og har ingenting med kryssingen å gjøre.",
    },
    {
      question: "Hva er uenighetssetningen?",
      options: ["Setningen som sier hva striden dreier seg om, som ett spørsmål", "Setningen som slår fast at de to posisjonene er uforenlige", "Setningen der du sier hvilken posisjon du selv støtter", "Setningen som lister opp alle punktene de er uenige om"],
      explanation: "Uenighetssetningen samler striden til ett spørsmål eller ett stridspunkt og plasseres rett etter fellesgrunnen. Ditt eget standpunkt hører hjemme i vurderingen, og en oppramsing av uenigheter er nettopp det setningen skal erstatte.",
    },
    {
      question: "Alle aksene i besvarelsen din faller ut i favør av samme posisjon. Hva bør du sjekke?",
      options: ["Om aksene er valgt etter konklusjonen du ville fram til", "Om du har brukt for få akser til å dekke temaet", "Om du har skrevet redegjørelsene i feil rekkefølge", "Om du har husket å oppgi hvilket kapittel stoffet står i"],
      explanation: "En ensidig aksefordeling er varsellampen for at aksene er valgt for å bekrefte konklusjonen, og det er ensidig drøfting. Antall akser og rekkefølgen på redegjørelsene endrer ikke den skjevheten.",
    },
    {
      question: "Hva er de tre leddene enhver S2-oppgave krever?",
      options: ["De to redegjørelsene, sammenligningen langs akser, og vurderingen", "Innledning med fellesgrunn, én redegjørelse, og en konklusjon", "Definisjon av begrepene, historisk plassering, og en samlet vurdering", "Rekonstruksjon av begge argumentene og en samlet oppsummering"],
      explanation: "Sjangeren krever begge posisjonene, selve sammenligningen og en vurdering. Å levere de to første leddene er å levere to tredeler av oppgaven, og en oppsummering er ikke en vurdering.",
    },
  ],
  'fil1001-7-3': [
    {
      question: "Hva vil det si å lese premissene i et tankeeksperiment som stipulasjoner?",
      options: ["Å ta oppsettet som fastsatt av forfatteren og svare på det som stilles", "Å kontrollere om oppsettet er forenlig med det vi ellers vet om den virkelige verden", "Å gjengi oppsettet så nær forfatterens egne ord som mulig", "Å anta at oppsettet er sant, men bare innenfor rammene av den aktuelle teorien"],
      explanation: "Stipulasjoner er vilkår forfatteren har fastsatt: Mary vet alt fysisk, zombien er fysisk identisk. Å måle oppsettet mot hva vi vet om verden er nettopp å omgå eksperimentet, og ordrett gjengivelse har ingenting med premissenes status å gjøre.",
    },
    {
      question: "Hvilken av disse reaksjonene omgår premissene i et tankeeksperiment?",
      options: ["«En slik maskin kunne aldri bygges i praksis.»", "«Jeg bestrider at et perfekt symmetrisk, tomt univers er mulig.»", "«Jeg mener intuisjonen skyldes at scenarioet er så uvant.»", "«Jeg godtar oppsettet, men det viser mindre enn det påstås.»"],
      explanation: "Praktisk gjennomførbarhet er ikke det eksperimentet spør om. De tre andre er lovlige: å bestride mulighet, å bestride intuisjonens pålitelighet, og å bestride slutningen.",
    },
    {
      question: "Hva er det springende premisset i zombie-argumentet?",
      options: ["At det som er tenkelig på denne måten, er metafysisk mulig", "At zombien er fysisk og funksjonelt identisk med en person", "At fysikalismen krever supervenience på det fysiske", "At zombien rapporterer om opplevelser den ikke har"],
      explanation: "Argumentet står og faller med broen fra tenkelighet til metafysisk mulighet. De øvrige leddene er enten stipulasjoner om zombien eller nærmest definisjoner av hva fysikalismen innebærer.",
    },
    {
      question: "Hva er det springende premisset i Jacksons argument om Mary?",
      options: ["At det hun lærer, er et faktum og ikke en ferdighet", "At hun kjenner alle fysiske kjensgjerninger om farge på forhånd", "At hun aldri har sett en farge før hun forlater rommet", "At fysikalismen hevder at alle fakta er fysiske fakta"],
      explanation: "Nesten alle innrømmer at noe skjer når Mary ser rødt; striden gjelder om det hun tilegner seg, er et nytt faktum. At hun vet alt fysisk og aldri har sett farger, er stipulasjoner, og fysikalismens innhold er argumentets forutsetning.",
    },
    {
      question: "Hvilken posisjon er Searles kinesiske rom rettet mot?",
      options: ["Sterk kunstig intelligens — at riktig program er nok for et sinn", "Funksjonalismen — at kausalrollen alene er nok for bevisst opplevelse", "Identitetsteorien — at mentale tilstander er identiske med hjernetilstander", "Behaviorismen — at mentale utsagn handler om atferd"],
      explanation: "Målskiven er sterk kunstig intelligens og påstanden om at syntaks er tilstrekkelig for semantikk. Det er Blocks Chinese Nation som er rettet mot funksjonalismen og opplevelse, og hverken identitetsteorien eller behaviorismen er temaet.",
    },
    {
      question: "Hva er standardinnvendingen mot det kinesiske rommet?",
      options: ["Systemsvaret — det er systemet, ikke personen, som forstår", "At ingen regelbok kunne holdt en samtale gående i praksis", "At personen ville lært kinesisk av å arbeide der lenge nok", "At forståelse uansett ikke er nødvendig for å ha et sinn"],
      explanation: "Systemsvaret peker på at Searle spør feil bærer: et enkelt nevron forstår heller ikke noe. Innvendingen om praktisk umulighet omgår premissene, og de to øvrige endrer eller forlater eksperimentet.",
    },
    {
      question: "Hva er standardinnvendingen mot Blocks Chinese Nation?",
      options: ["At intuisjonen om manglende opplevelse ikke tåler press", "At systemet ikke er en fullstendig funksjonell duplikat", "At radiokommunikasjon er for langsom til å realisere en hjerne", "At systemet mangler forståelse, ikke bevisste opplevelser"],
      explanation: "Funksjonalisten svarer at vi ikke klarer å forestille oss noe funksjonelt komplett, og at vi reagerer på størrelsen og det uvante. At duplikaten ikke er komplett, eller at signalene er for trege, er å endre oppsettet — det er stipulert at organisasjonen er identisk.",
    },
    {
      question: "Hva er de to navngitte standardsvarene på kunnskapsargumentet?",
      options: ["Ability-svaret og acquaintance-svaret", "Systemsvaret og robotsvaret", "Illusjonsforklaringen og motstykketeorien", "Det Machianske svaret og kjedeløsningen"],
      explanation: "Ability-svaret sier at Mary tilegner seg ferdigheter, acquaintance-svaret at hun blir kjent med noe hun allerede visste alt om. Systemsvaret og robotsvaret hører til det kinesiske rommet, og de øvrige til helt andre argumenter.",
    },
    {
      question: "Hva er Nagels faktiske konklusjon om fysikalismen?",
      options: ["At den er umoden — vi mangler begrepene for å forstå den", "At den er usann, siden qualia ikke kan være fysiske", "At den er sann, men bare for de lette problemene", "At den er uavgjørbar og derfor ikke verdt å diskutere"],
      explanation: "Nagel hevder at vi mangler begrepene for å forstå hvordan fysikalismen kunne være sann, ikke at den er motbevist. Skillet mellom umoden og usann er en epistemisk mot metafysisk konklusjon, og å skrive at han viser fysikalismen usann, er en av de tyngste feiltilskrivningene i emnet.",
    },
    {
      question: "Hva viser Frankfurt-casene, og hva viser de ikke?",
      options: ["De viser at ansvar ikke krever alternativer, ikke at kompatibilismen er sann", "De viser at kompatibilismen er sann, ikke at determinismen er sann", "De viser at determinismen er forenlig med frihet, ikke med ansvar", "De viser at prinsippet om alternative muligheter må styrkes i stedet for svekkes"],
      explanation: "Casene fjerner ett av inkompatibilistens premisser ved å vise at ansvar ikke krever alternative muligheter. De sier ingenting om hvorvidt determinismen er forenlig med frihet — å hevde det er å overtolke rekkevidden.",
    },
    {
      question: "Hva er de tre lovlige måtene å angripe et tankeeksperiment på?",
      options: ["Bestride muligheten, bestride slutningen, bestride intuisjonen", "Bestride premissene, endre oppsettet, bestride konklusjonen", "Bestride tenkerens motiv, bestride analogien, bestride relevansen", "Bestride oppsettet, bestride kilden, bestride formuleringen"],
      explanation: "Du kan bestride at situasjonen er mulig, at den etablerer konklusjonen, eller at intuisjonen den vekker er pålitelig. Å endre oppsettet er ikke en fjerde kategori, men å forlate oppgaven.",
    },
    {
      question: "Hva er varianttesten?",
      options: ["Å endre ett trekk ved eksperimentet og se om konklusjonen holder", "Å prøve eksperimentet på en annen posisjon enn den opprinnelige", "Å sammenligne eksperimentet med et annet eksperiment i samme tema", "Å gjengi eksperimentet i en enklere form for leseren"],
      explanation: "Varianttesten endrer ett trekk for å finne ut hva som driver intuisjonen — for eksempel om Theseus-dommen avhenger av at utskiftningen skjer gradvis. Den brukes som verktøy i drøftingen, ikke som erstatning for oppgaven du har fått.",
    },
    {
      question: "Hvorfor er det viktig å skille en epistemisk fra en metafysisk konklusjon?",
      options: ["Fordi et argument om hva vi kan vite, ikke uten videre sier hva som finnes", "Fordi det bare er metafysiske konklusjoner som er relevante på denne eksamen", "Fordi epistemiske konklusjoner alltid er svakere begrunnet", "Fordi tankeeksperimenter bare kan gi epistemiske konklusjoner"],
      explanation: "Skillet gjelder om eksperimentet viser noe om våre begreper og vår kunnskap, eller om verden. Begge slags konklusjoner forekommer og begge er relevante — Nagel trekker en epistemisk, Chalmers en metafysisk.",
    },
    {
      question: "Hva innebærer det å snu et argument?",
      options: ["Å slutte fra at konklusjonen er usann, til at et premiss er usant", "Å bytte om rekkefølgen på premissene for å teste gyldigheten", "Å bruke argumentet mot den posisjonen det opprinnelig forsvarte", "Å vise at argumentet også fungerer i motsatt retning"],
      explanation: "Grepet godtar at argumentet er gyldig, men bruker det baklengs: er man sikrere på at konklusjonen er usann enn på et av premissene, avviser man premisset. Det krever en uavhengig grunn til den sikkerheten, ellers er det bare en nektelse.",
    },
    {
      question: "Hvor mye av de 45 skriveminuttene bør gå til å gjengi selve eksperimentet?",
      options: ["Rundt 8 minutter — gjengivelsen er forutsetningen, ikke oppgaven", "Rundt 20 minutter, siden en presis gjengivelse er det aller viktigste", "Rundt 2 minutter, siden sensor kjenner eksperimentet fra før", "Rundt halvparten, fordelt på oppsett og premisser"],
      explanation: "Modellen er ca. 8 minutter på gjengivelsen, 12 på rekonstruksjonen, 15 på det springende premisset og innvendingen, og 7 på svaret. Gjengivelsen er den delen kandidater bruker mest tid på og som gir minst uttelling — men den kan ikke sløyfes helt, siden det er stipulasjonene som bærer analysen.",
    },
    {
      question: "Hva rammer Blacks tankeeksperiment med de to kulene?",
      options: ["De uskjelnbares identitet — at kvalitativ likhet gir numerisk identitet", "Det identiskes uskjelnbarhet — at identiske ting har alle egenskaper felles", "Realismen om universalier — at allmennbegreper finnes som entiteter", "Prinsippet om tilstrekkelig grunn — at alt har en forklaring"],
      explanation: "Eksperimentet rammer den omstridte retningen av Leibniz' lov, altså de uskjelnbares identitet. Den andre retningen er ukontroversiell og brukes flittig ellers i emnet, og realismen om universalier kan uten videre godta at kulene er to.",
    },
  ],
  'fil1001-7-4': [
    {
      question: "Hva er den typiske trappen i en flerdelt oppgave?",
      options: ["Definer, still opp problemet, gi løsningen, gi innvendingen", "Innledning, historisk bakgrunn, hoveddel, oppsummering til slutt", "Definer, gi eksempler, sammenlign posisjoner, konkluder", "Still opp problemet, gi to løsninger, velg én, begrunn valget"],
      explanation: "Deloppgavene fører trinnvis gjennom ett problem: begrep, problem, løsning, innvending. Det er den samme bevegelsen som grunnformen, bare uttrykt som arbeidsordre — og den skiller seg fra en vanlig essaymal ved at hvert trinn er et eget svar.",
    },
    {
      question: "Hva er kostnaden ved å hoppe over én deloppgave?",
      options: ["Et helt ledd står ubesvart, og leddet etter mister gjenstanden sin", "Svaret blir noe kortere, men de øvrige deloppgavene vurderes normalt", "Bare den siste deloppgaven regnes, siden den veier mest", "Sensor vurderer de øvrige deloppgavene strengere"],
      explanation: "Deloppgavene har hver sin vekt, så et tomt punkt er et manglende svar, ikke et kortere. I tillegg ødelegger et hull i midten av trappen leddet etter — punkt d) kan ikke drøfte en løsning som aldri ble gjengitt.",
    },
    {
      question: "Hva sier progresjonskravet i en flerdelt oppgave?",
      options: ["Punkt c) skal løse problemet fra b), og d) skal ramme løsningen fra c)", "Deloppgavene skal ha omtrent like mange ord hver", "Deloppgavene skal besvares i den rekkefølgen de står", "Hver deloppgave skal avsluttes med en egen konklusjon før du går videre"],
      explanation: "Kravet gjelder sammenhengen: fire riktige, men løsrevne svar treffer ikke kjennetegn 3. Lik lengde er ikke noe krav — deloppgavene har ulik vekt — og rekkefølgen er selvsagt, men ikke det progresjonen handler om.",
    },
    {
      question: "Hvordan bør 45 skriveminutter fordeles på fire deloppgaver?",
      options: ["Skjevt, med mest tid til den deloppgaven som ber om drøfting", "Helt likt, med drøyt 11 minutter på hver", "Mest tid til punkt a), siden alt senere hviler på definisjonen", "Mest tid til de to første, som utgjør redegjørelsen"],
      explanation: "Utgangspunktet er lik fordeling, men den justeres etter verb og vekt, og deloppgaven som drøfter, får mest. Punkt a) må være presist, men er kort — og redegjørelsen er den billigste delen å komprimere.",
    },
    {
      question: "Hva er en overgangssetning i en flerdelt besvarelse?",
      options: ["Setningen som knytter en deloppgave til den forrige", "Setningen som oppsummerer deloppgaven du nettopp avsluttet", "Setningen som varsler hvilket standpunkt du vil lande på", "Setningen som gjentar oppgaveteksten før du besvarer den"],
      explanation: "Overgangssetningen begynner hver deloppgave etter den første og binder den til den forrige: «Nettopp dette begrepet skaper et problem …». Uten den leses svaret som fire tekster som tilfeldigvis står under hverandre.",
    },
    {
      question: "Hva er hovedkravet i en åpen problemstilling?",
      options: ["Du må selv mobilisere de mest relevante pensumposisjonene", "Du må dekke alle posisjonene pensum har om temaet", "Du må unngå å ta stilling, siden spørsmålet er åpent", "Du må begrunne svaret uten å støtte deg på pensum"],
      explanation: "Sjangeren tester om du kan velge. Å dekke alt gir navnedropping, å svare uten pensum er påstand uten argument, og et åpent spørsmål krever like fullt en begrunnet landing.",
    },
    {
      question: "Hva består innrammingen av i et åpent svar?",
      options: ["Presisering av spørsmålet, avgrensning med begrunnelse, varsling av posisjoner", "En kort historisk oversikt over hvordan spørsmålet har vært behandlet i faget", "En definisjon av alle fagbegrepene som skal brukes i svaret", "En påstand om hva du vil konkludere med, og hvorfor"],
      explanation: "Innrammingen gjør det store spørsmålet besvarbart på 45 minutter: den presiserer, sier hva som lates ligge og hvorfor, og varsler posisjonene. Den er et faglig grep, ikke en skolestil-innledning.",
    },
    {
      question: "Hvor mange pensumposisjoner bør et åpent svar bygge på?",
      options: ["To til tre, unntaksvis fire", "Fem til seks, for å vise bredden i pensum", "Én, grundig behandlet fra alle sider", "Så mange som mulig innenfor tidsrammen"],
      explanation: "Med 45 minutter og krav om rekonstruksjon, innvending, veiing og landing får to til tre posisjoner rundt ti minutter hver. Flere gir navnedropping; bare én gir sjelden nok motstand til en reell drøfting.",
    },
    {
      question: "Hva er relevanskriteriet for å beholde en posisjon i et åpent svar?",
      options: ["At den gir et svar, den beste innvendingen, eller endrer spørsmålet", "At den er hyppig representert i tidligere eksamenssett", "At den er den nyeste posisjonen innenfor temaet", "At den er den du kan best fra pensumlesingen"],
      explanation: "Testen er hva som ville manglet om posisjonen ble strøket: et svar, den beste innvendingen, eller en omformulering av spørsmålet. Frekvens og egen fortrolighet er grunner til å velge oppgave, ikke til å beholde en posisjon inne i et svar.",
    },
    {
      question: "Hvorfor er det å endre spørsmålet en god grunn til å ta med en posisjon?",
      options: ["Fordi det viser at spørsmålet var upresist stilt", "Fordi det gjør svaret kortere og lettere å disponere", "Fordi sensor forventer at kandidaten omformulerer oppgaven", "Fordi det erstatter behovet for å ta stilling til slutt"],
      explanation: "En posisjon som viser at spørsmålet hvilte på en tvilsom forutsetning — slik Frankfurt-casene gjør med kravet om alternative muligheter — demonstrerer nettopp de kritiske ferdighetene kjennetegn 4 etterspør. Den erstatter ikke landingen.",
    },
    {
      question: "Hva er poenget med å bruke deloppgavemalen på en oppgave uten struktur?",
      options: ["Den gir en ferdig disposisjon som sikrer at alle leddene er med", "Den gjør at svaret kan leveres som fire helt atskilte korttekster", "Den fjerner behovet for å telle instruksjonsverbene", "Den gjør redegjørelsen lengre og drøftingen kortere"],
      explanation: "Malen definer, problem, løsning, innvending er grunnformen uttrykt som arbeidsordre, og den gir en disposisjon på to minutter. Verbtellingen står ved lag, og svaret skrives fortsatt som sammenhengende tekst.",
    },
    {
      question: "Hvor hører stillingtakingen hjemme i en flerdelt oppgave?",
      options: ["I den deloppgaven som ber om den", "I et eget avsnitt til slutt, etter alle deloppgavene", "Fordelt likt utover alle deloppgavene", "I innledningen, slik at leseren vet hvor svaret bærer"],
      explanation: "Ber punkt d) om en vurdering, skal vurderingen stå der. Å spare den til en samlet avslutning etterlater den deloppgaven halvtom — og det er den som veier mest.",
    },
  ],
  'fil1001-7-5': [
    {
      question: "Hvilken feil kan faktisk koste bestått på en enkeltoppgave?",
      options: ["Referat uten drøfting, når oppgaven ba om diskusjon", "Manglende sammenhenger mellom argumentene i svaret", "Overlapp mellom to av de fire svarene i settet", "Navnedropping av fagbegreper uten forklaring"],
      explanation: "Bestått-terskelen krever korrekt redegjørelse pluss minst ett reelt forsøk på kritisk drøfting, så et rent referat kan falle under. Manglende sammenhenger stopper svaret på C, og overlapp og navnedropping koster uttelling uten i seg selv å true bestått.",
    },
    {
      question: "Hva er varsellampen for påstand uten argument?",
      options: ["Siste avsnitt kan byttes med motsatt standpunkt uten andre endringer", "Siste avsnitt er merkbart kortere enn de øvrige avsnittene i besvarelsen", "Siste avsnitt inneholder ordet «jeg» flere ganger", "Siste avsnitt gjentar det som allerede er sagt tidligere i besvarelsen"],
      explanation: "Testen er om konklusjonen henger sammen med teksten foran: kan den snus uten at noe annet må endres, hviler den ikke på drøftingen. Lengde og bruk av «jeg» sier ingenting om begrunnelsen.",
    },
    {
      question: "Hvorfor koster stråmannsfeilen dobbelt?",
      options: ["Du taper på kunnskapskravet, og drøftingen feller noe ingen har hevdet", "Du taper tid, og du får dermed mindre plass til de andre argumentene dine", "Du taper på strukturkravet, og hele svaret blir vanskelig for sensor å følge", "Du taper på språkkravet, og framstillingen blir upresis"],
      explanation: "En feilframstilt posisjon rammer både kjennetegnet om kunnskap og selve drøftingen, siden innvendingen treffer noe posisjonen ikke hevder. Tids- og strukturproblemer kan følge med, men er ikke det som gjør feilen dyr.",
    },
    {
      question: "Hvilken av disse er en riktig framstilling av Kripkes posisjon?",
      options: ["Han angriper identitetspåstanden med modal-semantiske midler", "Han forsvarer substansdualismen med modallogiske midler", "Han hevder at sinnet og kroppen er to atskilte substanser", "Han viderefører Descartes' tvilsargument i en oppdatert form"],
      explanation: "Kripke angriper påstanden om at smerte er identisk med en hjernetilstand, ved hjelp av rigide betegnelser og nødvendig identitet. Han slutter ikke derfra til to substanser, og argumentet hans er ikke en oppdatering av tvilsargumentet, men et annet slags argument.",
    },
    {
      question: "Hva er Nagels faktiske konklusjon om fysikalismen?",
      options: ["At den er umoden — vi mangler begrepene for å forstå den", "At den er usann, siden qualia ikke lar seg beskrive fysisk", "At den er sann, men uten forklaringskraft for opplevelser", "At den er en ren språkstrid uten metafysisk innhold"],
      explanation: "Nagel hevder at posisjonen er uforståelig for oss nå, ikke at den er motbevist. Skillet er mellom en epistemisk og en metafysisk konklusjon, og å skrive at han viser fysikalismen usann, er en av de tyngst dokumenterte feiltilskrivningene i emnet.",
    },
    {
      question: "Oppgaven ber om Conee og Siders «soft determinism», og svaret handler generelt om kompatibilisme. Hvilken feil er dette?",
      options: ["Å bomme på den navngitte teksten", "Navnedropping uten innhold", "Ensidig drøfting uten innvendinger", "Å bryte settets struktur"],
      explanation: "Når oppgaven navngir en term fra et pensumanker, spør den etter den framstillingen. Generell omtale av posisjonsfamilien er ikke feil i seg selv, men den besvarer ikke oppgaven — og det er noe annet enn å nevne begreper uten innhold.",
    },
    {
      question: "Hva er den eneste varsellampen som virker mot ubalanse mellom de fire svarene?",
      options: ["Fire klokkeslett notert øverst på kladdearket før du begynner", "Å telle antall ord i hvert svar underveis i skrivingen", "Å skrive svarene i den rekkefølgen oppgavene er satt opp i settet", "Å begynne med den oppgaven du kan minst om"],
      explanation: "Feilen handler om tidsbruk, og den løses ved å bestemme starttidspunktene på forhånd. Ordtelling underveis kommer for sent, og rekkefølgen på svarene styrer ikke hvor mye tid hvert av dem får.",
    },
    {
      question: "Hvorfor kan et glimrende svar ikke kompensere for et tynt svar?",
      options: ["Fordi hver enkelt oppgave må kunne vurderes til bestått", "Fordi sensor vurderer bare de to svakeste av de fire svarene", "Fordi lange svar trekkes ned for manglende presisjon", "Fordi de fire oppgavene vektes ulikt i den samlede karakteren"],
      explanation: "Bestått-per-oppgave-regelen gjør at overskuddet i ett svar ikke er overførbart. Sensor vurderer alle fire, og lengde i seg selv gir hverken uttelling eller trekk.",
    },
    {
      question: "Hva er den riktige måten å håndtere overlapp mellom to svar på?",
      options: ["Bygg det andre svaret på en annen motor, og henvis kort til det første", "Gjenta argumentet, men med andre formuleringer og eksempler", "Utelat argumentet helt fra det andre svaret uten å nevne det", "Skriv det ene svaret kortere, slik at gjentakelsen blir mindre synlig"],
      explanation: "En eksplisitt henvisning er ryddig, men svaret må stå på egne bein med et annet argument. Å omformulere den samme motoren er fortsatt gjentakelse, og å korte ned løser ikke at ingen ny kunnskap vises.",
    },
    {
      question: "Hva kjennetegner feil #10, manglende sammenhenger?",
      options: ["Alt som står der er riktig, men argumentene gjør ingenting med hverandre", "Argumentene er gjengitt upresist, slik at koblingene mellom dem blir umulige", "Svaret bygger bare den ene siden av drøftingen", "Svaret bruker fagbegreper som ikke er forklart"],
      explanation: "Feilen er usynlig for den som gjør den, nettopp fordi innholdet er korrekt — det som mangler, er koblingssetningene. Upresis gjengivelse, ensidighet og uforklarte begreper er tre andre feil i registeret.",
    },
    {
      question: "Hvilken av disse setningene retter feil #10?",
      options: ["«Frankfurt-casene fjerner et premiss konsekvensargumentet hviler på.»", "«Både Frankfurt og van Inwagen skriver om fri vilje og ansvar.»", "«Frankfurt-casene er et viktig og mye omtalt bidrag til debatten om fri vilje.»", "«van Inwagen og Frankfurt kom med sine bidrag omtrent samtidig.»"],
      explanation: "En kobling må vise at det ene argumentet gjør noe med det andre — er et svar på det, er samme strategi, eller fjerner et premiss. At to tenkere skriver om samme tema, er en opplysning, ikke en påvist sammenheng.",
    },
    {
      question: "Hva er en varsellampe i bokas forstand?",
      options: ["Et mekanisk kjennetegn du kan lete etter uten å bruke skjønn", "En vurdering av hvor godt du behersker temaet i oppgaven", "En regel for hvor lange avsnittene i besvarelsen bør være", "En påminnelse om hvilke temaer som går oftest igjen"],
      explanation: "Poenget er at kontrollen skal kunne utføres når du er sliten og har fem minutter igjen: står ordet der eller ikke? Skjønnet er allerede brukt opp på innholdet.",
    },
    {
      question: "En kandidat frykter referatfeilen så mye at redegjørelsen blir svært knapp. Hva er problemet?",
      options: ["Drøftingen henger i løse luften, og kunnskapskravet rammes", "Svaret blir for kort til å vurderes som bestått", "Sensor oppfatter det som at temaet er ukjent for kandidaten", "Innvendingene blir automatisk ensidige når redegjørelsen er kort"],
      explanation: "Overkorrigering rammer kjennetegnet om god kunnskap: en innvending mot en posisjon som knapt er gjengitt, har lite å angripe. Lengde i seg selv avgjør ikke bestått, og ensidighet er en uavhengig feil.",
    },
    {
      question: "Hvilke feil bør du rette først dersom du har fem minutter igjen?",
      options: ["Strukturbruddet først, deretter ubalanse, landing og kobling", "Navnedropping først, siden begreper er raskest å forklare", "Stråmann først, siden feilframstilling er den tyngste feilen", "Manglende sammenhenger først, siden det løfter mot toppkarakter"],
      explanation: "Rekkefølgen følger hvor mye som står på spill og hva som er raskt: et strukturbrudd kan ugyldiggjøre et helt svar, ubalanse truer bestått, en grunn i landingen tar to setninger, og en koblingssetning tar én. Å rette en feilframstilling krever mer tid enn du har.",
    },
  ],
  'fil1001-7-6': [
    {
      question: "Hvordan henger Lewis' analyse sammen med Humes?",
      options: ["Lewis utvikler Humes andre definisjon, den kontrafaktiske, og bryter med den første", "Lewis forkaster Humes prosjekt og postulerer en nødvendig forbindelse i tingene selv", "Lewis gjentar Humes regularitetsteori, men med en mer presis og matematisk formulering", "Lewis er uavhengig av Hume og kom fram til analysen ut fra et helt annet utgangspunkt i logikken"],
      explanation: "Hume gir årsaksbegrepet to formuleringer, og den andre er kontrafaktisk i formen. Lewis tar den på alvor og bryter bare med regularitetsdefinisjonen; begge er humeanere i den forstand at ingen av dem postulerer en observerbar nødvendig forbindelse. Å skrive at Lewis forkaster Hume er stråmann, og å kalle analysen en presisering av regularitetsteorien blander de to.",
    },
    {
      question: "Hva skiller sen foregripelse fra tidlig foregripelse?",
      options: ["Reserveprosessen løper helt fram og blir først avbrutt av at virkningen selv inntreffer", "Reserveprosessen kommer aldri i gang, slik at ingen av leddene i kjeden får noen konkurrent", "Begge årsakene virker faktisk samtidig, slik at ingen av dem er nødvendig for virkningen", "Årsak og virkning bytter plass i tid, slik at analysen ikke kan avgjøre retningen"],
      explanation: "Ved tidlig foregripelse slås reserven ut på forhånd, og da finnes det mellomledd i den faktiske kjeden som virkningen avhenger av — Lewis' kjedeløsning virker. Ved sen foregripelse har hvert mellomledd sin egen reserve rett bak seg, og løsningen har ingenting å gripe fatt i. At begge årsaker virker samtidig, er overdeterminering, som er et annet moteksempel.",
    },
    {
      question: "Hva innebærer det at Lewis' mulige verdener er konkrete?",
      options: ["De er like virkelige som vår verden, bare kausalt og romlig isolerte fra den", "De er abstrakte representasjoner av hvordan verden kunne vært, uten egen eksistens", "De er tenkte modeller vi bruker som regneredskap, uten metafysisk forpliktelse", "De er framtidige tilstander vår egen verden kan komme til å befinne seg i"],
      explanation: "Riktig svar er at verdenene hos Lewis er like virkelige som vår, bare isolerte fra den — det er hele hans posisjon, og det er den ontologiske prisen ved analysen. Å kalle dem abstrakte representasjoner er ersatzismen, altså den konkurrerende posisjonen, og å kalle dem regneredskap fjerner nettopp den forpliktelsen Lewis tar på seg.",
    },
    {
      question: "Hva kjennetegner den skarpe konklusjonen som modellbesvarelsen i kapitlet lander med?",
      options: ["Den tar klart parti og sier hva standpunktet koster, i stedet for å ende i et forbehold", "Den unngår å ta stilling, siden begge posisjonene har fordeler som veier omtrent like tungt i sum", "Den setter fram et standpunkt uten å nevne hva motparten eventuelt har rett i", "Den lander alltid på den posisjonen som har færrest moteksempler mot seg"],
      explanation: "Riktig svar er at konklusjonen tar parti og sier hva standpunktet koster. Et forbehold er et verktøy, ikke obligatorisk garnityr. Å avslutte med at det står likt er tillatt, men bare når grunnene til balansen skrives ut — ellers er det påstand uten argument, altså feil #4.",
    },
    {
      question: "Hva er det Hume benekter i sin analyse av kausalitet?",
      options: ["At vi observerer en nødvendig forbindelse mellom årsak og virkning", "At det i det hele tatt finnes årsaksforhold ute i verden selv", "At regelmessighetene vi observerer, er virkelige og til å stole på", "At vi kan snakke meningsfullt om årsaker i dagligtale og vitenskap"],
      explanation: "Riktig svar er at Hume benekter at nødvendigheten er noe vi får et inntrykk av; han forklarer ideen om den som en projeksjon av vane. Han benekter verken at det finnes årsaker, at regelmessighetene er virkelige, eller at ordet er brukbart. Å skrive at Hume benekter kausalitet er en av de tyngst dokumenterte feiltilskrivningene i emnet.",
    },
    {
      question: "En besvarelse skriver: «Et problem for Lewis er preemption. Dette er mye diskutert.» Hvilken feil er dette?",
      options: ["Feil #3 — navnedropping uten innhold: begrepet nevnes uten case og uten Lewis' svar", "Feil #5 — å bomme på den navngitte teksten: oppgaven ba om en bestemt lærebokframstilling", "Feil #6 — ubalanse mellom svarene: dette svaret er kortere enn de tre andre i settet", "Feil #8 — overlapp mellom svar: samme moteksempel er allerede brukt i en annen oppgave"],
      explanation: "Prøven er å stryke fagordet og se om noe av argumentet forsvinner. Her forsvinner ingenting, altså var det pynt — det er navnedropping uten innhold. De tre andre kodene finnes i registeret, men handler om henholdsvis navngitt tekst, disponering av hele settet og gjenbruk av poeng mellom svar.",
    },
  ],
  'fil1001-7-7': [
    {
      question: "Hvorfor må den filosofiske zombien være fysisk identisk med en person, og ikke bare funksjonelt lik?",
      options: ["Fordi bare fysisk identitet rammer superveniensen, og dermed fysikalismen selv", "Fordi funksjonell likhet ville gjort scenarioet teknisk umulig å beskrive presist", "Fordi Chalmers ellers ikke kunne hevdet at zombien rapporterer om egne opplevelser", "Fordi fysisk identitet er det eneste som gjør at zombien oppfører seg som oss"],
      explanation: "Riktig svar er at slagkraften ligger i ordet «fysisk»: bare da er det en mental forskjell uten en fysisk forskjell, og bare da faller Kims minimale fysikalisme. Et bare funksjonelt likt vesen er Blocks absent qualia og rammer funksjonalismen, ikke fysikalismen. Zombien oppfører seg som oss i kraft av den funksjonelle identiteten, som følger med, men som ikke er det avgjørende.",
    },
    {
      question: "Hvilket premiss i zombie-argumentet er det som striden gjelder?",
      options: ["At det som er tenkelig på denne måten, også er metafysisk mulig", "At beskrivelsen av en zombie ikke inneholder noen skjult motsigelse", "At fysikalismen krever at det mentale supervenierer på det fysiske", "At en zombie ville rapportert om opplevelser den ikke faktisk har"],
      explanation: "Riktig svar er broen fra tenkelighet til metafysisk mulighet. Tenkelighetspåstanden bestrides også, men det er den overgangen som bærer hele argumentet og som vann-tilfellet angriper. At fysikalismen krever supervenience, og at zombien rapporterer om opplevelser, er nesten rene definisjoner — henholdsvis av supervenience og av selve stipulasjonen — og der er det ingen strid.",
    },
    {
      question: "Hvordan skiller Jacksons og Chalmers' krav mot fysikalismen seg?",
      options: ["Jackson argumenterte for at den er ufullstendig, Chalmers for at den er usann", "Jackson argumenterte for at den er usann, Chalmers for at den er umoden", "Jackson argumenterte for at den er uforståelig, Chalmers for at den er ufullstendig", "Begge argumenterte for det samme, men Chalmers bruker et mer teknisk apparat"],
      explanation: "Riktig svar er at Jackson krever at noen fakta står utenfor det fysiske, mens Chalmers krever at fysikalismen er usann. At den er umoden eller uforståelig for oss nå, er Nagels konklusjon, og han sier uttrykkelig at det ville være en feil å slutte at den er usann. Jo sterkere kravet er, desto tyngre premiss må bære det.",
    },
    {
      question: "Hva går Chalmers' svar på illusjonsforklaringen ut på?",
      options: ["At manøveren krever et skille mellom framtreden og natur, som ikke finnes for bevissthet", "At vann-tilfellet ikke er relevant, siden identiteter mellom naturslag ikke er nødvendige", "At vi kan forestille oss zombier langt tydeligere enn vi kan forestille oss vann uten H₂O", "At illusjonsforklaringen forutsetter en fysikalisme den skulle ha begrunnet"],
      explanation: "Riktig svar er at manøveren virker for vann fordi vannet framtrer på én måte og har en annen natur — mens smertens framtreden er smerten, så det er ingen alternativ tanke å ha forvekslet zombie-tanken med. Chalmers benekter ikke at identiteter mellom naturslag er nødvendige; det er nettopp den premissen han godtar. Og styrken i svaret ligger ikke i hvor levende forestillingen er.",
    },
    {
      question: "Hva er poenget med at boka viser en midtnivå-besvarelse i dette kapitlet?",
      options: ["Å gi et realistisk sammenligningspunkt, og vise hvor terskelen for «bra nok» ligger", "Å vise et svar som ikke passerer bestått-porten, slik at feilene blir tydelige for leseren", "Å demonstrere at karakteren avgjøres av hvor mye pensumstoff som får plass", "Å illustrere at et rotete språk alene er nok til å senke et faglig godt svar"],
      explanation: "Riktig svar er at leseren trenger noe annet enn polert toppnivå og karikert bunnivå å måle seg mot. Midtnivå-besvarelsen ligger godt over bestått-porten, og margnotatene sier både hva som er bra nok og hvilke få grep som mangler. Karakteren avgjøres av behandlingen av stoffet, ikke av mengden, og språket alene er ikke det som skiller.",
    },
    {
      question: "Hva hevder begrepsstrategien om zombie-tenkeligheten?",
      options: ["At den viser at vi har to slags begreper om samme egenskap, ikke to slags egenskaper", "At den viser at zombie-beskrivelsen inneholder en motsigelse vi ennå ikke har funnet", "At den viser at fenomenale egenskaper er identiske med representasjonelt innhold", "At den viser at bevisstheten er kausalt uvirksom og derfor ikke lar seg beskrive"],
      explanation: "Riktig svar er at tenkeligheten da er et vindu mot vår begrepsutrustning og ikke mot verden: ett begrep er dannet innenfra ved å ha tilstanden, det andre utenfra ved å måle den. Å hevde at beskrivelsen er selvmotsigende, er å angripe det første premisset i stedet. Identifikasjonen av fenomenal karakter med representasjonelt innhold er representasjonalismen, som er en annen posisjon.",
    },
  ],
  'fil1001-7-8': [
    {
      question: "Hva forplikter Kripkes konklusjon ham til?",
      options: ["Bare til at én bestemt identitetspåstand er usann, ikke til to substanser", "Til substansdualisme, i en modernisert utgave av Descartes' posisjon", "Til egenskapsdualisme med psykofysiske lover mellom det fysiske og det mentale", "Til at alle identitetspåstander om det mentale er usanne uansett formulering"],
      explanation: "Riktig svar er at Kripke angriper identitetspåstanden med modal-semantiske midler og sier selv at han ikke har gitt et bevis for dualismen, bare vist at materialisten har en bevisbyrde. Man kan godta hele argumentet og likevel avvise en tenkende substans. Egenskapsdualisme med psykofysiske lover er Chalmers' posisjon, ikke Kripkes.",
    },
    {
      question: "Hvilket premiss bærer vekten i Descartes' kløargument?",
      options: ["At det jeg klart og tydelig kan forestille meg som atskilt, kan eksistere atskilt", "At jeg kan tvile på at kroppen min finnes, men ikke på at jeg tenker", "At to ting som kan eksistere hver for seg, er to ting og ikke én", "At kroppen er delbar mens sinnet ikke lar seg dele i to"],
      explanation: "Riktig svar er broen fra hva jeg kan forestille meg til hva som kan være tilfelle. Tvilspremisset hører til den tidligere versjonen av argumentet, den som er sårbar for det maskerte manns-innvendingen. At to atskillbare ting er to, er nesten en definisjon, og delbarheten er et eget tilleggsargument.",
    },
    {
      question: "Hva består disanalogien mellom vann-tilfellet og smerte-tilfellet i?",
      options: ["Vann har en framtreden forskjellig fra sin natur, mens smertens framtreden er smerten selv", "Vann er et naturslag mens smerte er en enkelthendelse, så nødvendig identitet gjelder bare det første", "Vann er kjent gjennom vitenskapen mens smerte bare er kjent gjennom introspeksjon og rapport", "Vann kan analyseres kjemisk mens smerte ennå ikke er fullstendig kartlagt nevrologisk"],
      explanation: "Riktig svar er at illusjonsforklaringen trenger et gap mellom framtreden og natur, og at det gapet mangler for smerte: å forestille seg noe som føles akkurat som smerte, er å forestille seg smerte. Nødvendig identitet gjelder også enkeltting, og poenget er ikke at nevrologien er ufullstendig — det ville vært å omgå argumentet i stedet for å møte det.",
    },
    {
      question: "Hva er forskjellen på aksestruktur og blokkstruktur i en sammenligning?",
      options: ["Aksestrukturen stiller ett spørsmål til begge om gangen; blokkstrukturen tar én av gangen", "Aksestrukturen krever flere posisjoner enn to, mens blokkstrukturen bare håndterer par", "Aksestrukturen plasserer vurderingen til slutt, mens blokkstrukturen vurderer underveis", "Aksestrukturen er en muntlig framstillingsform, mens blokkstrukturen hører til skriftlige svar"],
      explanation: "Riktig svar er at en akse er ett spørsmål begge posisjonene må svare på, mens blokkstrukturen gir to framstillinger etter hverandre. Det er blokkstrukturen som er sjangerens hovedfeil, fordi den gjør sammenligningssetningene valgfrie. Aksestrukturen vurderer nettopp underveis, med én vurdering per akse.",
    },
    {
      question: "Hva rammer det maskerte manns-innvendingen?",
      options: ["Descartes' tvilsargument, siden «noe jeg kan tvile på» beskriver mitt forhold til tingen", "Kripkes argument, siden rigide betegnelser kan vise til ulike ting under ulike beskrivelser", "Descartes' kløargument, siden klare og tydelige forestillinger kan være systematisk villedende", "Identitetsteorien, siden «smerte» og «C-fiber-fyring» plukker ut tilstanden på ulike måter"],
      explanation: "Riktig svar er tvilsversjonen: Leibniz' lov gjelder for tingenes egne egenskaper, ikke for egenskaper av formen «noe jeg kan tvile på». Innvendingen er nettopp grunnen til at det modne argumentet bruker forestillinger om tingenes natur i stedet. Kripkes rigide betegnelser er konstruert for å unngå akkurat dette problemet.",
    },
    {
      question: "Hva er det Descartes og Kripke deler, og som bør sies tidlig i en sammenligning?",
      options: ["At begge går fra hva som lar seg forestille, til hva som er metafysisk mulig", "At begge slutter fra det mentales natur til at det finnes to substanser", "At begge angriper identitetsteorien, men med hvert sitt begrepsapparat", "At begge bygger konklusjonen på at Gud ikke kan bedra oss om tingenes egen natur"],
      explanation: "Riktig svar er det felles grepet fra tenkelighet til mulighet — uten det skrittet har ingen av dem et argument. Bare Descartes slutter til to substanser, og bare Kripke angriper identitetsteorien, som ikke fantes på Descartes' tid. Gudsgarantien er Descartes' alene.",
    },
  ],
};

export default quizData_fil1001;
