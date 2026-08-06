import type { QuizQuestion } from './quiz-data';

const quizData_exfac03spr: Record<string, QuizQuestion[]> = {
  'exfac03-spr-0-1': [
    {
      question: "Hvor mange eksamensterminer er dokumentert i grunnlaget for denne boka?",
      options: ["Seks terminer, alle om høsten, i spennet fra 2011 til og med 2025", "Sju terminer, altså én for hvert av de sju dokumentene UiO har publisert for emnet", "Femten terminer i spennet fra 2011 til 2025", "Elleve terminer, jevnt fordelt utover perioden"],
      explanation: "Grunnlaget er seks dokumenterte terminer, og alle seks er høstterminer. Tallet sju er et filtall — tre oppgavesett og fire sensorveiledninger — og aldri et terminantall; brukt som nevner ville det overdrevet dekningen. Femten er antall høstterminer i selve spennet, og av dem mangler ni helt.",
    },
    {
      question: "Hvilken nevner skal brukes når boka sier noe om hva sensor belønner eller trekker for?",
      options: ["4 sensorveiledninger, siden bare fire av terminene har en veiledning", "6 terminer, siden hver av de seks terminene i arkivet har sin egen veiledning fra sensor", "45 spørsmål", "2 terminer, siden bare de to har oppgitt karakterskala"],
      explanation: "Bare fire av de seks terminene har sensorveiledning, så enhver påstand om hva sensor belønner, har nevner fire. To terminer har oppgavesett uten veiledning, og ingen sensorpåstand kan bygge på dem. Nevneren 2 terminer gjelder karakterskala og terskler, ikke sensorkrav.",
    },
    {
      question: "Hvor stor del av poengene ligger i strukturfagene fonetikk og fonologi, morfologi og syntaks?",
      options: ["80 av 114 poeng, altså 70,2 prosent", "45 av 114 poeng, som er litt under halvparten av poengene i de to poengsatte terminene", "29 av 114 poeng, som er det saksområdet som alene har flest poeng", "114 av 114 poeng"],
      explanation: "De tre strukturfagene er 29, 26 og 25 av 114 poeng, til sammen 80 av 114 poeng. Tallet 45 er antall spørsmål i arkivet og ikke en poengsum, og 29 av 114 poeng er bare fonetikk og fonologi alene. Andelen er praktisk talt uendret over to helt ulike sett.",
    },
    {
      question: "Hva kreves for karakteren C i den nyeste dokumenterte skalaen?",
      options: ["45,5 til 51,5 av 65 poeng, altså 70 til 79 prosent av settet", "30,0 til 38,5 av 65 poeng, som er det intervallet der besvarelsen så vidt kommer gjennom", "52,0 til 58,0 av 65 poeng", "20 av 49 poeng, terskelen i den todelte skalaen"],
      explanation: "C ligger på 45,5 til 51,5 av 65 poeng og er en god og vanlig karakter. Intervallet 30,0 til 38,5 av 65 poeng er E, og 52,0 til 58,0 av 65 poeng er B. Terskelen på 20 av 49 poeng hører til den todelte skalaen i den eldste poengsatte terminen.",
    },
    {
      question: "Hva har UiO publisert av løsninger for dette emnet?",
      options: ["Ingenting — verken løsningsforslag eller fasitark finnes for emnet", "Fire løsningsforslag, ett for hver av de terminene som også har en sensorveiledning", "Tre fasitark, ett per oppgavesett", "Ett samlet fasitark for alle seks terminene"],
      explanation: "Det finnes null løsningsforslag og null fasitark for emnet. Det som finnes, er fire sensorveiledninger, og tre av dem inneholder utskrevne modellsvar — men en sensorveiledning er skrevet for den som retter, ikke for studenten. Alle løsninger i denne boka er derfor skrevet av oss.",
    },
    {
      question: "Hvordan skal de to hjemmeeksamenene i materialet forstås?",
      options: ["Som et unntak under korona, ikke som en varig reform av eksamensformen", "Som en varig omlegging av eksamensformen som gjelder fram til i dag i dette emnet", "Som et forsøk emnet gjentok annethvert år", "Som den formen boka kalibreres mot"],
      explanation: "Veiledningen fra den ene hjemmeterminen skriver at studentene «denne gangen» satt hjemme med lærebok og pdf-er, og ordet er hele belegget for at det var et unntak. Terminen etter er tilbakevendingen til campus uten hjelpemidler. Den nyeste terminen er dokumentert digital, men verken varighet eller hjelpemidler er oppgitt for den.",
    },
    {
      question: "Hva sier materialet om hvor mye av settet som må besvares?",
      options: ["Den nyeste terminen med uttrykt regel krever at alt besvares, mens tre eldre terminer sa det motsatte", "Alle seks terminene krever at hvert eneste spørsmål besvares fullt ut, uten unntak av noe slag", "Kandidaten kan alltid velge bort ett spørsmål", "Regelen er ikke oppgitt noe sted i materialet"],
      explanation: "Terminen fra 2022 skriver uttrykkelig at alle oppgavene skal besvares, på begge målformer, mens tre eldre terminer uttrykkelig sa at man kunne bestå uten å svare på alt. Boka formidler den strengeste, nyeste regelen som gjeldende. En kandidat som trener på et eldre sett, tar derfor lett med seg en mildere regel enn den som gjelder.",
    },
    {
      question: "Hva er feil nummer 5 i bokas feilregister?",
      options: ["Å hoppe over ett av oppgavens ledd", "Å skrive et svar som er mye lengre enn poengsummen på oppgaven skulle tilsi", "Å bruke et eksempel fra læreboka i stedet for å finne på et helt eget eksempel", "Å gi en konklusjon uten å skrive ut begrunnelsen som fører fram til den"],
      explanation: "Feil nummer 5 er å svare på deler av et spørsmål og la resten stå. Å gjengi lærebokas eksempler er feil nummer 15, og manglende begrunnelse i et klassifiseringsspørsmål er feil nummer 8 — begge er ekte feil i registeret, men de er ikke nummer 5. Motgiften mot nummer 5 er mekanisk: stryk under hvert verb i bestillingen.",
    },
    {
      question: "Hvilket saksområde har flest spørsmål i arkivet?",
      options: ["Syntaks, med 10 av 45 spørsmål", "Fonetikk og fonologi, som både har flest spørsmål og flest poeng av alle saksområdene", "Morfologi, som er saksområdet segmenteringsoppgaven hører til", "Semantikk, siden begrepsparene der går igjen"],
      explanation: "Syntaks har 10 av 45 spørsmål, flere enn noe annet saksområde. Fonetikk og fonologi har flest poeng, 29 av 114, men bare 8 av 45 spørsmål — antall spørsmål og poengvekt er to ulike mål, og de rangerer ikke likt. Morfologi har også 8 av 45 spørsmål.",
    },
    {
      question: "Hva er ærlighetsforbeholdet som alltid følger med feilregisteret?",
      options: ["Veiledningene uttrykker sensors forventninger på forhånd, ikke observerte studentfeil", "Registeret er satt sammen av forfatterne uten hjemmel i noen av de fire veiledningene", "Feilene er talt opp fra innleverte besvarelser", "Registeret gjelder bare de eldste terminene"],
      explanation: "Alle seksten feilene er hjemlet i minst én av de fire sensorveiledningene, men ikke ett sted rapporterer en veiledning hva kandidatene faktisk gjorde galt. Registeret er derfor hva veiledningene sier skal trekke. Å lese det som en observasjon av et kull ville gitt feilene en autoritet de ikke har.",
    },
    {
      question: "Hva er faren ved å lese kapitlene i LING1100 i stedet for kapitlene i dette emnet?",
      options: ["LING1100 dekker bare 22 prosent av poengene her, og går dypere enn dette emnet prøver", "LING1100 dekker de samme temaene, men er skrevet for et lavere nivå enn dette emnet", "LING1100 dekker strukturfagene, men mangler semantikken", "LING1100 er ikke ferdig bygget ennå"],
      explanation: "Overlappet treffer bare semantikk og pragmatikk, til sammen 25 av 114 poeng, altså 22 prosent — og det er de letteste delene her. Strukturfagene, som er 80 av 114 poeng, dekkes ikke der i det hele tatt. LING1100 går dessuten dypere enn dette emnet prøver, så tiden gir dårlig avkastning.",
    },
    {
      question: "Hva betyr mantraet om at ordene er nye hver gang?",
      options: ["Ordene som skal transkriberes og segmenteres, skifter fra termin til termin, mens fenomenene er de samme", "Oppgavetypene skifter fra termin til termin, så det er ingen vits i å trene på en fast prosedyre i det hele tatt", "Trening på gamle sett gjør at du kjenner igjen ordene", "Ordene er hentet fra ulike dialekter hver gang"],
      explanation: "Fenomenene ordene er konstruert for å tvinge fram, gjentar seg, men selve ordene er forskjellige i hver eneste termin. Derfor gir det null å pugge ferdige transkripsjoner, og alt å kunne prosedyren. Mantraet lover uttrykkelig ikke gjenkjennelse av ordene — bare at oppgavetypen er stabil.",
    },
    {
      question: "Hva skal du gjøre med de første ti minuttene av eksamenstiden?",
      options: ["Lese hele settet og fordele tiden etter poengene på hvert spørsmål", "Begynne på det første spørsmålet med en gang, så du ikke mister skrivetid på planlegging", "Skrive ut alle definisjonene du husker", "Ta den best betalte oppgaven først"],
      explanation: "Ti minutter på å lese settet og skrive poengtallet i margen gir en tidsplan på rundt tre minutter per poeng. Den dyreste enkeltfeilen i et bredt sett er å bruke en halvtime ekstra på en oppgave verdt 2 poeng og så levere tomt på en verdt 10 av 65 poeng. En oppgave uten tidsgrense sluker nettopp den tiden.",
    },
    {
      question: "Hva gjelder tidsanslagene i kapitteloverskriftene i denne boka?",
      options: ["Lesetid, altså tiden det tar å lese kapitlet og gjøre oppgavene i det", "Den tiden tilsvarende oppgave ville fått under selve eksamen med fire timers ramme", "Skrivetid for hånd", "Samlet tid inkludert prøvekapitler og øvingseksamener"],
      explanation: "Anslagene er lesetid, altså tiden det tar å lese kapitlet og gjøre oppgavene i det. Skriver du besvarelser for hånd, ganger du med omtrent 1,5. Tidsbudsjettene i sjangerkapitlene er noe annet: de er regnet i skrivetid under eksamen og ser derfor mye strengere ut.",
    },
  ],
  'exfac03-spr-0-2': [
    {
      question: "Hvordan fordeles poengene i en klassifiseringsoppgave i den nyeste terminen?",
      options: ["1 poeng for riktig svar og 3 poeng for forklaringen", "3 poeng for riktig svar og 1 poeng for forklaringen, siden svaret er det oppgaven spør etter", "2 poeng for hver av delene, altså likt fordelt mellom konklusjon og begrunnelse", "4 poeng for svaret, uten egne poeng for begrunnelsen"],
      explanation: "Forklaringen er verdt tre ganger så mye som konklusjonen, og veiledningen begrunner det uttrykkelig med at det er femti prosent sjanse for å gjette riktig. Fordelingen er hele hjemmelen for mantraet om begrunnelsen før konklusjonen. En jevn fordeling ville gjort gjetting til en holdbar strategi, og det er nettopp det oppgaven er konstruert for å hindre.",
    },
    {
      question: "Hva er de tre trinnene i et begrunnet svar, i riktig rekkefølge?",
      options: ["Begrunnelsen, konklusjonen som følger av den, og termen som gjør begrunnelsen faglig", "Konklusjonen, begrunnelsen som støtter den, og til slutt et eksempel som viser at det stemmer", "Termen, definisjonen av termen, og deretter konklusjonen", "Eksempelet, konklusjonen og en kort oppsummering"],
      explanation: "Rekkefølgen er begrunnelse, konklusjon, term. Den er ikke bare stil: går du tom for tid etter trinn 1, står det dyreste elementet igjen, mens den motsatte rekkefølgen etterlater det billigste. Termen kommer sist fordi den skal navngi et resonnement som allerede står der.",
    },
    {
      question: "Hvilken av disse er en av de seks obligatoriske termene?",
      options: ["Talerens autorisasjon, altså kravet om myndighet til å utføre handlingen", "Komplementær distribusjon, som brukes når to lydvarianter aldri opptrer i samme omgivelse", "Sonoritetsprinsippet, som styrer rekkefølgen av lyder i en stavelse", "Minimalt par, altså to ord som skiller seg i nøyaktig én lyd"],
      explanation: "Talerens autorisasjon er en av de seks termene som må stå i svaret for full uttelling, og den hører til språkhandlingsoppgaven. De tre andre er ekte og viktige fagtermer, men de er ikke obligatoriske i den forstand at et svar uten dem er ufullstendig. Å blande sammen «viktig term» og «obligatorisk term» gjør huskelista lengre enn den trenger å være.",
    },
    {
      question: "I hvilket saksområde hører termen betinga lydendringer hjemme?",
      options: ["Språkendring, altså den delen av faget som ser på utvikling over tid", "Fonologi, siden termen handler om hvordan lydene fordeler seg i systemet på et gitt tidspunkt", "Morfologi, siden endringene rammer bøyningsendelsene i et paradigme", "Pragmatikk, siden betingelsene gjelder situasjonen ytringen står i"],
      explanation: "Termen er fellesbetegnelsen for lydendringer som bare skjer i bestemte lydlige omgivelser, og den hører til språkendring, altså den diakrone siden av faget. Å utelate fellesbetegnelsen i en språkendringsoppgave er feil nummer 10. Fonologi beskriver systemet på ett tidspunkt og bruker ikke denne termen.",
    },
    {
      question: "Hva er feil nummer 3?",
      options: ["Å svare generelt der oppgaven ber om konkrete tegn, selv om det generelle svaret er riktig", "Å bruke en fagterm uten å forklare den", "Å gi færre eksempler enn oppgaven uttrykkelig ber om", "Å konkludere i et klassifiseringsspørsmål uten å begrunne konklusjonen"],
      explanation: "Feil nummer 3 er å forklare en nivåforskjell med en generell frase i stedet for å peke på konkrete tegn. Den er den farligste av de fire fordi svaret er faglig riktig og likevel gir null. Term uten forklaring er nummer 4, for få eksempler er nummer 7, og klassifisering uten begrunnelse er nummer 8.",
    },
    {
      question: "Hvilke to trinn i firetrinnsformen for et eget eksempel er det som faktisk skiller besvarelser?",
      options: ["Trinn 3 og 4 — bindingen til definisjonen og setningen om hva som ville ødelagt eksempelet", "Trinn 1 og 2 — å navngi fenomenet og å gi selve eksempelet, siden det er der innholdet ligger", "Trinn 2 og 3 — å gi eksempelet og å binde det til definisjonen med en egen setning", "Trinn 1 og 4 — navngivingen og avslutningen"],
      explanation: "Å navngi fenomenet og gi et eksempel klarer nesten alle, så de to første trinnene skiller lite. Bindingen mellom eksempel og definisjon er beviset for at eksempelet passer, og setningen om hva som ville ødelagt det, viser at valget er prøvd. Uten trinn 3 har du overlatt koblingen til sensor.",
    },
    {
      question: "Hva sier en av veiledningene om begrunnede egne eksempler?",
      options: ["De teller litt mer selv når begrunnelse ikke er bedt om", "De teller bare når oppgaveteksten uttrykkelig ber om en begrunnelse for eksempelet", "De teller likt med ubegrunnede eksempler, siden det er eksempelet som er bestilt", "De trekker ned hvis begrunnelsen gjør svaret lengre enn poengsummen tilsier"],
      explanation: "Begrunnede egne eksempler teller litt mer selv når begrunnelse ikke er bedt om, fordi et begrunnet eksempel viser at stoffet er tilegnet. Det er en gratis oppgradering du kan legge til på eget initiativ. Lengdeadvarselen er reell, men den gjelder svar som sprenger poengrammen, ikke én forklarende setning.",
    },
    {
      question: "Hva betyr det at systematikken skal være forklart og ikke bare gjengitt?",
      options: ["Du skal vise hva termsystemet gjør, ikke bare ramse opp hvilke termer det består av", "Du skal bruke det systemet læreboka bruker, og ikke ditt eget oppsett av aksene", "Du skal skrive termene i den faste rekkefølgen systemet krever", "Du skal oppgi hvilket kapittel systemet er hentet fra"],
      explanation: "Kravet er hjemlet i en veiledning som ber om at både systematikken i konsonanttermene og systemet for vokalbeskrivelse forklares for full uttelling. En oppramsing av akser er en liste; en forklaring sier hva hver akse skiller. Fast rekkefølge er et eget krav i beskrivelsesrubrikken og løser ikke dette.",
    },
    {
      question: "Hvor lang tid skal et spørsmål verdt 2 poeng ha etter bokas tidsmodell?",
      options: ["Rundt seks minutter, altså tre minutter per poeng", "Rundt tjue minutter, siden korte spørsmål ofte krever mest presisjon i formuleringen", "Så lang tid du trenger, så lenge du rekker resten av settet innen tiden er ute", "Rundt tolv minutter"],
      explanation: "Modellen er rundt tre minutter per poeng, så 2 poeng gir rundt seks minutter. Å bruke tjuefem minutter på en slik oppgave gir bort rundt seks poeng et annet sted i settet, uten at oppgaven kan gi mer enn 2 poeng. Ordet «kort» i en oppgavetekst er en instruks om lengde, ikke en høflighetsfrase.",
    },
    {
      question: "Hva er kravet til termen performativ i språkhandlingsoppgaven?",
      options: ["Den skal være både brukt og forklart", "Den skal stå i første setning av svaret, slik at sensor finner den raskt", "Den skal brukes bare hvis oppgaven selv bruker ordet performativ først", "Den skal erstattes med en omskriving hvis du er usikker på definisjonen"],
      explanation: "Kravet er at termen brukes og forklares; en term som bare er strødd inn, rammes av feil nummer 4. Å beskrive en performativ setning uten term og uten talerens autorisasjon er feil nummer 14. En omskriving hjelper ikke, for sensor leter etter ordet.",
    },
    {
      question: "Hva er hovedforskjellen på en performativ og en konstativ ytring?",
      options: ["En performativ utfører handlingen i det den sies, mens en konstativ beskriver noe og kan være sann eller usann", "En performativ er alltid en setning i første person entall, mens en konstativ kan ha hvilket som helst subjekt", "En performativ er alltid vellykket, mens en konstativ kan mislykkes hvis den er usann", "En performativ krever tilhørere, mens en konstativ ikke gjør det"],
      explanation: "Skillet går på hva ytringen gjør: den performative utfører handlingen, den konstative beskriver. Derfor kan bare den konstative være sann eller usann, mens den performative i stedet kan lykkes eller mislykkes. Formen i første person er vanlig, men den er ikke definisjonen, og en performativ som mangler talerens autorisasjon mislykkes.",
    },
    {
      question: "Hva er kontroll, som fagterm?",
      options: ["Mekanismen som avgjør hvem det underforståtte subjektet i en infinitivssetning viser til", "Kontrollrunden du gjør til slutt i en transkripsjon for å sjekke at den er konsistent", "Kravet om at hvert ledd i et analysetre skal være merket med funksjon", "Sensors skjønnsmessige justering av poengsummen ut fra helhetsinntrykket"],
      explanation: "Kontroll er termen for at det usynlige subjektet henter identiteten sin fra subjektet eller objektet i den overordnede setningen. Å observere at subjektet mangler, er ikke en analyse; kontroll er navnet på mekanismen, og å begrunne uten den er feil nummer 12. De andre svarene beskriver ekte ting i emnet, men ingen av dem bærer denne termen.",
    },
    {
      question: "Hvorfor er treoppgaven en av de mest lønnsomme å forsøke seg på?",
      options: ["Et tre som er nær korrekt, gir full uttelling, og en begrunnet avvikende analyse kan være et pluss", "Treoppgaven er den eneste oppgaven i settet uten trekk for feil, så du kan gjette fritt", "Treoppgaven kan besvares i ord hvis du ikke rekker å tegne den ferdig i tide", "Treoppgaven er alltid den siste oppgaven, så den kan tas med det som er igjen av tid"],
      explanation: "Den nyeste veiledningen gir full uttelling for et tre som er nær korrekt, og en tidligere veiledning åpner for at en avvikende tilhekting kan telle positivt når kandidaten argumenterer for den med erstatning og flytting. Det gjør oppgaven verdt å begynne på selv når du er usikker. Merk likevel at leddanalysen har trekk på 0,5 poeng per feilanalysert ledd, og at et tre som er beskrevet i ord, ikke er et svar.",
    },
    {
      question: "Hva er det siste trinnet i alle de tre tunge prosedyrene?",
      options: ["En kontroll av at ingenting står umerket eller inkonsistent", "En begrunnelse av de valgene som avviker fra hovedmønsteret i analysen", "En oppsummering av hva analysen har vist, skrevet i to eller tre setninger", "En henvisning til den fagtermen oppgaven krever"],
      explanation: "Transkripsjonen, segmenteringen og trebyggingen ender alle med en kontrollrunde. Det er ikke tilfeldig: alle tre har trekk på 0,5 poeng per feil i den nyeste terminen, og to minutters kontroll er den billigste forsikringen i settet. Begrunnelseslinjer og termkrav hører hjemme underveis, ikke som siste trinn.",
    },
    {
      question: "Hva gjør setningen om den alternative lesningen med svaret ditt?",
      options: ["Den styrker svaret, fordi den viser at alternativet er prøvd og forkastet på et grunnlag", "Den svekker svaret, fordi den røper at du ikke er trygg på konklusjonen din", "Den er nøytral, siden sensor bare gir poeng for den konklusjonen du faktisk lander på", "Den erstatter behovet for å konkludere skarpt i klassifiseringsoppgaver"],
      explanation: "Å skrive hva som ville endret konklusjonen, er ikke et forbehold, men en begrunnelse — og den nyeste veiledningen sier uttrykkelig at flere konklusjoner godtas når de er godt begrunnet. Konklusjonen skal fortsatt være skarp; setningen kommer i tillegg, ikke i stedet for.",
    },
    {
      question: "Hva er feil nummer 7?",
      options: ["Å gi færre eksempler enn oppgaven uttrykkelig ber om, altså ren telling", "Å gi et eksempel uten begrunnelse", "Å bruke lærebokas eksempler i stedet for å lage sine egne fra bunnen", "Å gi eksempler som er riktige, men som ikke oppfyller spesifikasjonen i oppgaven"],
      explanation: "Feil nummer 7 er ren telling: ber oppgaven om tre ord, skal det stå tre ord. Eksempel uten begrunnelse er nummer 6, og lærebokas eksempler er nummer 15. Et eksempel som bryter spesifikasjonen — for eksempel for få stavelser — er en nær slektning av nummer 7, og motgiften er den samme: les bestillingen på nytt og tell det den ber deg telle.",
    },
  ],
  'exfac03-spr-1-1': [
    {
      question: "Hva beskriver aksen stemthet?",
      options: ["Om stemmebåndene vibrerer mens lyden lages", "Hvor kraftig lyden høres ut når den uttales i en trykksterk stavelse", "Om luftstrømmen slippes ut gjennom munnen eller gjennom nesen", "Hvor trang passasjen mellom artikulatorene er"],
      explanation: "Stemthet gjelder bare stemmebåndene: vibrerer de, er lyden stemt. Lydstyrke er noe helt annet — en ustemt s kan hveses svært kraftig. Om luften går gjennom nesen, er artikulasjonsmåte, og hvor trang passasjen er, er også måte.",
    },
    {
      question: "Hvilken gruppe består bare av ustemte norske konsonanter?",
      options: ["p, t, k, f, s og h", "b, d, g, m, n og l, som alle lages med full eller delvis stenging i munnen", "m, n og ŋ, siden nasaler lages uten at luften slipper ut gjennom munnen", "v, j, l og r"],
      explanation: "De ustemte norske konsonantene er en mindretallsgruppe: p, t, k, f, s, ʃ, ç og h. Alle nasaler er stemte, og det samme er v, j, l og r-lydene. Å ha den korte ustemt-lista i hodet gir deg stemthetsaksen gratis for resten av emnet.",
    },
    {
      question: "Hva sier artikulasjonssted?",
      options: ["Hvor i taleapparatet hindringen lages", "Hva slags hindring luftstrømmen møter når den passerer", "Om lyden står først eller sist i stavelsen den hører til", "Hvilken del av tungen som er aktiv, uten å si hva den beveger seg mot"],
      explanation: "Stedet er en posisjon: hvor leppene eller tungen tar. Hva slags hindring det er, er artikulasjonsmåte, og de to aksene kan ikke erstatte hverandre. Den aktive artikulatoren alene er bare halve stedsangivelsen — den andre halvparten er det passive målet.",
    },
    {
      question: "Hva er den aktive artikulatoren i lyden f?",
      options: ["Underleppen", "De øvre fortennene, som luftstrømmen presses mot når lyden lages", "Tungebladet rett bak tungespissen", "Den myke ganen bakerst i munntaket"],
      explanation: "Ved f er det underleppen som beveger seg, og de øvre fortennene er det passive målet. Tennene er altså med i beskrivelsen, men som passiv artikulator. Tungebladet og den myke ganen er ikke i nærheten av denne lyden i det hele tatt.",
    },
    {
      question: "Hva betyr forleddet lamino- i en sammensatt stedsangivelse?",
      options: ["Tungebladet rett bak tungespissen er den aktive artikulatoren", "Tungespissen er bøyd bakover mot området like bak alveolarkanten", "Tungeryggen er den aktive artikulatoren i lyden", "Lyden lages med begge leppene mot hverandre"],
      explanation: "Forleddene navngir hvilken del av tungen som gjør jobben: apiko- er spissen, lamino- er bladet, dorso- er ryggen. Bøyd tungespiss beskriver en retrofleks artikulasjon, og begge leppene er bilabialt — ingen av delene er lamino-. Forleddet er nødvendig fordi ulike deler av tungen mot samme punkt gir hørbart ulike lyder.",
    },
    {
      question: "Hvilken akse skiller p fra k?",
      options: ["Artikulasjonssted", "Artikulasjonsmåte, siden den ene har full stenging og den andre en trang passasje", "Stemthet, siden den ene er stemt og den andre ustemt", "Ingen — de to lydene er varianter av samme fonem"],
      explanation: "Begge er ustemte plosiver, så stemthet og måte er felles; det som skiller, er at p er bilabial og k velar. En trang passasje ville gjort lyden til en frikativ, og ingen av de to er det. At de skulle være varianter av samme enhet, avkreftes av at ordpar skiller seg i betydning ved nettopp denne lyden.",
    },
    {
      question: "Hva er forskjellen på en plosiv og en nasal?",
      options: ["Begge har full stenging i munnen, men nasalen slipper luften ut gjennom nesen", "Plosiven har full stenging, mens nasalen bare har en trang passasje luften freser gjennom", "Plosiven er alltid ustemt, mens nasalen alltid er stemt", "Plosiven kan holdes ut, mens nasalen ikke kan det"],
      explanation: "Stengingen i munnen er den samme; det som skiller, er om den myke ganen er senket så nesepassasjen åpnes. Derfor kan en nasal holdes ut, mens en plosiv ikke kan — det er slippet som er lyden. At alle norske nasaler er stemte, er sant, men det er ikke definisjonen på nasal.",
    },
    {
      question: "Hva kjennetegner en frikativ?",
      options: ["Passasjen er trang nok til at luftstrømmen blir turbulent og lager hørbart støy", "Luftstrømmen stenges helt og slippes deretter brått ut i et lite smell", "Artikulatorene nærmer seg hverandre uten at det oppstår friksjonsstøy i det hele tatt", "Luften ledes ut langs den ene eller begge sidene av tungen"],
      explanation: "Friksjonsstøyet er selve lyden i en frikativ. Full stenging med brått slipp er en plosiv, tilnærming uten støy er en approksimant, og luft langs tungesidene er en lateral. Grensen mellom frikativ og approksimant er glidende, og den norske v-en ligger nettopp der.",
    },
    {
      question: "Hvilken lyd er en stemt velar nasal?",
      options: ["ŋ", "n, som er den nasalen de fleste forbinder med bokstaven n i skrift", "g, som deler både sted og stemthet med den lyden spørsmålet gjelder", "m, som lages med begge leppene"],
      explanation: "ŋ er stemt, velar og nasal, som i sang. n er stemt nasal, men alveolar; g er stemt og velar, men plosiv; m er stemt nasal, men bilabial. Hver av de tre faller altså på hver sin akse, og det er nettopp den kontrollen som gjør beskrivelsen entydig.",
    },
    {
      question: "Hvilken lyd er en ustemt postalveolar frikativ?",
      options: ["ʃ", "s, som lages litt lenger fram, mot selve alveolarkanten bak fortennene", "ç, som lages med tungeryggen mot den harde ganen lenger bak", "h, som lages nede i strupehodet"],
      explanation: "ʃ er den postalveolare frikativen, som i sjø. s er alveolar, ç er palatal og h er glottal — alle tre er ustemte frikativer, så det er bare stedet som skiller de fire. Nettopp derfor gir en beskrivelse uten sted ikke poeng her.",
    },
    {
      question: "Hva er den faste rekkefølgen i en konsonantbeskrivelse?",
      options: ["Stemthet, artikulasjonssted, artikulasjonsmåte", "Artikulasjonssted, artikulasjonsmåte, stemthet, altså fra det ytre til det indre", "Artikulasjonsmåte, stemthet, artikulasjonssted", "Tungehøyde, plassering, rundethet, lengde"],
      explanation: "Konsonanter beskrives som stemthet, sted, måte — «ustemt alveolar frikativ». Den siste rekkefølgen i lista hører til vokaler, som har fire akser og sin egen faste orden; de to systemene skal ikke blandes. Fast rekkefølge er ikke pedanteri: den gjør at sensor finner opplysningene uten å lete.",
    },
    {
      question: "Hvorfor er beskrivelsen «ustemt frikativ» ikke god nok?",
      options: ["Den passer på flere norske lyder samtidig og peker derfor ikke ut noen bestemt lyd", "Den er faktisk feil, siden ingen norsk frikativ er ustemt", "Den mangler et eksempelord, som er det fjerde trinnet i beskrivelsesprosedyren", "Den bruker termer fra vokalsystemet på en konsonant"],
      explanation: "Beskrivelsen passer samtidig på f, s, ʃ, ç og h, og skiller altså ingen av dem. Dette er feil nummer 16, og fordi beskrivelsesoppgaven i den nyeste terminen gir 1 poeng per lyd uten delpoeng, koster den manglende aksen hele poenget. Eksempelordet mangler også, men det er ikke det som gjør beskrivelsen uklar.",
    },
    {
      question: "Hva er feil nummer 4?",
      options: ["Å nevne fagtermer uten å forklare systematikken bak dem", "Å beskrive en lyd så løst at beskrivelsen passer på flere lyder samtidig", "Å bytte om på den aktive og den passive artikulatoren i et sammensatt stedsnavn", "Å gi færre eksempler enn oppgaven ber om"],
      explanation: "Feil nummer 4 er å ramse opp termer uten å si hva de gjør, og dette kapitlet er feilens hovedhjem — en veiledning krever uttrykkelig at systematikken forklares for full uttelling. For løs beskrivelse er feil nummer 16, og for få eksempler er nummer 7. Å bytte om artikulatorene er en ekte feil, men den har ingen egen kode.",
    },
    {
      question: "Hva er forskjellen på en alveolar tapp og en alveolar plosiv?",
      options: ["Tappen har ingen holdefase, så det bygges ikke opp trykk bak kontakten", "Tappen lages lenger bak i munnen enn plosiven, nærmere den harde ganen", "Tappen er ustemt, mens den alveolare plosiven alltid er stemt", "Tappen slipper luften ut gjennom nesen"],
      explanation: "Kontakten i en tapp er så kort at det ikke rekker å bygge seg opp trykk, og det er derfor en tapp høres helt annerledes ut enn en d selv om stedet er det samme. Stedet er det samme for begge, tappen er stemt, og luft gjennom nesen ville gjort lyden til en nasal.",
    },
    {
      question: "Hvilken konsekvens har det om du har skarre-r i stedet for rulle-r?",
      options: ["Du får som regel ikke retroflekser, siden retrofleksene forutsetter en alveolar r", "Du får ikke aspirasjon på plosivene i trykksterk stavelse", "Du får ingen forskjell mellom den palatale og den postalveolare frikativen", "Du må bruke andre vokaltegn i transkripsjonen enn en taler med rulle-r"],
      explanation: "Retroflekser oppstår når en alveolar r smelter sammen med en etterfølgende alveolar lyd, og en uvular r kan ikke gjøre det. Dette er den enkeltopplysningen om egen uttale som låser flest andre valg i en transkripsjon. Aspirasjon, frikativsammenfall og vokaltegn er egne spørsmål og styres ikke av r-typen.",
    },
    {
      question: "Hva er en approksimant?",
      options: ["En lyd der artikulatorene nærmer seg hverandre uten å gi friksjonsstøy", "En lyd der artikulatorene lager en så trang passasje at det oppstår turbulens", "En lyd der stengingen er total og luften går ut gjennom nesen i stedet", "En lyd som er en plosiv i første fase og en frikativ i andre"],
      explanation: "Approksimanten har tilnærming, men åpningen er for vid til å gi støy — j er den tydeligste norske. Turbulens gir frikativ, stenging med neseluft gir nasal, og den todelte lyden er en affrikat. Approksimanten ligner akustisk på en vokal, og skillet mot vokalen er funksjonelt: den står i randen av stavelsen, ikke i kjernen.",
    },
    {
      question: "Hvilket sted lages lyden h på?",
      options: ["Glottalt, altså i selve strupehodet mellom stemmebåndene", "Velart, med tungeryggen mot den myke ganen bakerst i munnen", "Uvulart, helt bakerst ved drøvelen", "Palatalt, mot den harde ganen"],
      explanation: "h er den eneste norske lyden der hindringen ligger under munnhulen, i strupehodet selv. Nettopp derfor har h ingen egen form i munnen, men tar formen av vokalen som følger — det er grunnen til at hi og hu høres så ulike ut i starten. De tre andre stedene ligger alle i munnhulen.",
    },
    {
      question: "Hva skiller ʃ fra ç?",
      options: ["Artikulasjonsstedet — den ene er postalveolar, den andre palatal", "Stemtheten — den ene er stemt og den andre ustemt", "Artikulasjonsmåten — den ene er frikativ og den andre approksimant", "Ingenting i norsk, siden alle talere uttaler dem likt"],
      explanation: "Begge er ustemte frikativer, så bare stedet skiller: ʃ ligger like bak alveolarkanten, ç mot den harde ganen. Mange norske talere har falt sammen om den ene av dem, men sammenfallet er en variantregel du må oppgi, ikke et bevis på at forskjellen ikke finnes i språket.",
    },
    {
      question: "Hvorfor ligger nasalradene og plosivradene over hverandre i konsonantkartet?",
      options: ["Fordi de deler artikulasjonssted parvis: m med b, n med d og ŋ med g", "Fordi de deler stemthet, slik at hver nasal har en ustemt partner i plosivraden", "Fordi de er varianter av de samme fonemene i norsk", "Fordi de alle lages med full stenging og luft ut gjennom nesen"],
      explanation: "Parene deler sted og stemthet og skilles bare av om nesepassasjen er åpen. Sammenfallet i sted er ikke tilfeldig — det er mekanismen bak nasalassimilasjonen. Nasalene er alle stemte, så noen ustemt partner i plosivraden er de ikke, og luft ut gjennom nesen gjelder bare nasalene.",
    },
    {
      question: "Hvilken beskrivelse passer på lyden l?",
      options: ["Stemt alveolar lateral", "Stemt alveolar nasal, siden luften slipper ut på siden av stengingen", "Ustemt alveolar frikativ, siden det oppstår friksjon langs tungekanten", "Stemt palatal approksimant"],
      explanation: "l er stemt, lages på alveolarkanten, og luften går ut langs siden av tungen — det er nettopp det lateral betyr. Luft gjennom nesen ville gjort lyden til en nasal, friksjon langs kanten er ikke det som kjennetegner den norske l-en, og den palatale approksimanten er j.",
    },
    {
      question: "Hva er den siste kontrollen du skal gjøre når en beskrivelse er ferdig?",
      options: ["Prøve beskrivelsen mot nabolydene og se at ingen av dem også passer", "Sjekke at termene står i alfabetisk rekkefølge i svaret ditt", "Telle at du har brukt minst tre fagtermer i beskrivelsen", "Kontrollere at eksempelordet er hentet fra læreboka"],
      explanation: "Nabolydskontrollen er det som gjør beskrivelsen entydig, og det er samtidig det eneste stedet du kan vise systematikken en sensorveiledning etterspør. Rekkefølgen skal være fast, ikke alfabetisk, og antall termer er ikke et mål i seg selv. Eksempelordet skal derimot være ditt eget: å bruke lærebokas eksempler er feil nummer 15.",
    },
    {
      question: "Hva er forskjellen på bilabial og labiodental?",
      options: ["Ved bilabial møtes de to leppene, ved labiodental møter underleppen overtennene", "Ved bilabial er tungen aktiv, ved labiodental er leppen aktiv", "Bilabial er en artikulasjonsmåte, labiodental er et artikulasjonssted", "Bilabiale lyder er alltid nasale, labiodentale alltid plosive"],
      explanation: "Begge er artikulasjonssteder, og i begge er underleppen den aktive artikulatoren — det er målet som er ulikt. Tungen er ikke involvert i noen av dem. Bilabialt finner vi både plosiver og en nasal, så noen kobling til bestemte måter finnes ikke.",
    },
    {
      question: "En kandidat skriver bare «alveolar» der oppgaven ber om en finkornet stedsangivelse. Hva mangler?",
      options: ["Den aktive artikulatoren, altså forleddet apiko-, lamino- eller dorso-", "Den passive artikulatoren, altså hva tungen beveger seg mot", "Artikulasjonsmåten, som er den viktigste av de tre aksene", "Stemtheten, som alltid skal stå først i beskrivelsen"],
      explanation: "«Alveolar» navngir bare den passive artikulatoren; forleddet som sier hvilken del av tungen som gjør jobben, mangler. Det er feil nummer 4 i praksis, for kandidaten har ikke skrevet noe galt — hun har bare levert halve systematikken. Måte og stemthet er egne akser og hører ikke inn i stedsleddet.",
    },
    {
      question: "Hvorfor er det viktig å legge ved et norsk eksempelord i en beskrivelsesoppgave?",
      options: ["Det er et eget trinn i beskrivelsesprosedyren, og det viser at du kjenner lyden i bruk", "Det er den eneste måten sensor kan avgjøre om beskrivelsen er riktig på", "Det erstatter kravet om å oppgi alle akseverdiene i beskrivelsen", "Det gir uttelling bare når oppgaven uttrykkelig ber om et eksempel"],
      explanation: "Eksempelordet er ett av fire trinn i prosedyren, det tar tre sekunder, og det er den delen kandidater oftest hopper over fordi den føles selvsagt. Det erstatter ingenting: akseverdiene skal stå uansett. Og et begrunnet eget eksempel teller litt mer selv når begrunnelse ikke er bedt om.",
    },
  ],
  'exfac03-spr-1-2': [
    {
      question: "Hvor mange akser beskrives en vokal på?",
      options: ["Fire akser — tungehøyde, horisontal plassering, rundethet og lengde", "Tre, akkurat som konsonantene, siden lengde regnes som en egenskap ved stavelsen", "To, altså tungehøyde og plassering, siden de to alene gir hele vokalfirkanten", "Fem, siden også trykk hører med"],
      explanation: "Vokalene har fire akser, altså én mer enn konsonantene. Lengde er en egen akse og er betydningsskillende i norsk, som i tak mot takk. Trykk gjelder stavelsen og ikke vokalen, og hører derfor ikke inn i beskrivelsen av selve vokalen.",
    },
    {
      question: "Hvilken akse skiller i fra y?",
      options: ["Rundethet, altså om leppene formes til en ring", "Tungehøyde, siden den ene lyden lages med tungen høyere enn den andre", "Horisontal plassering, siden den ene er fremre og den andre midtre", "Lengde, siden bare den ene kan være lang i norsk"],
      explanation: "Tungen står i samme posisjon i begge; det eneste som skjer, er at leppene rundes. Begge er trange og fremre, og begge kan være lange. Nettopp fordi rundethet alene skiller dem, er den aksen norsk trenger mest — språket har tre slike par.",
    },
    {
      question: "Hvor mange rundede fremre vokaler har norsk?",
      options: ["Tre stykker — y, ø og œ", "Én, nemlig y, siden de to andre regnes som midtre vokaler i vokalfirkanten", "Ingen, siden alle rundede vokaler i norsk lages bakerst i munnen", "To, altså y og ø"],
      explanation: "Norsk har tre rundede fremre vokaler, og hver av dem har en urundet partner med nesten samme tungeposisjon: y mot i, ø mot e og œ mot ɛ. Mange språk har ingen. Det er derfor rundethet ikke er en detalj her, men den aksen som holder tre vokalpar fra hverandre.",
    },
    {
      question: "Hvilken vokal er trang, midtre og rundet?",
      options: ["ʉ, den midtre trange rundede vokalen", "y, som er trang og rundet, men lages lenger fram i munnen", "u, som er trang og rundet, men lages lenger bak i munnen", "ø, som er fremre og rundet"],
      explanation: "ʉ er den midtre trange rundede vokalen, som i hus. y er fremre og u er bakre, og alle tre er trange og rundede — det er altså bare plasseringen som skiller de tre fra hverandre. En beskrivelse uten plassering peker derfor ikke på noen av dem.",
    },
    {
      question: "Hvilken vokal svarer til beskrivelsen «rundet, trang-midtre, fremre»?",
      options: ["ø, den fremre rundede vokalen i rad to", "y, som er rundet og fremre, men ett trinn høyere i vokalfirkanten", "œ, som er rundet og fremre, men ett trinn lavere", "o, som er rundet og trang-midtre, men bakre"],
      explanation: "De tre akseverdiene treffer nøyaktig én rute i firkanten, og der bor ø. y ligger over, œ ligger under, og o ligger i samme rad men i den bakre kolonnen. Denne oppgaveformen — fra beskrivelse til symbol — er belagt i materialet og løses raskest ved å stryke ut én akse om gangen.",
    },
    {
      question: "Hva er skillekravet i beskrivelsesoppgaven?",
      options: ["Beskrivelsen skal skille fonemet fra alle andre fonemer i språket, ikke bare være sann om det", "Beskrivelsen skal skille mellom den fonetiske og den fonemiske formen av lyden", "Beskrivelsen skal skille mellom lang og kort variant av vokalen", "Beskrivelsen skal skille vokaler fra konsonanter"],
      explanation: "En sann beskrivelse er ikke nødvendigvis en skillende beskrivelse: «fremre urundet vokal» er sant om i, men også om e, ɛ og æ. Kravet er oppfylt først når ingen nabo i firkanten passer. Og siden det ikke gis delpoeng, er en beskrivelse med tre av fire akser verdt null.",
    },
    {
      question: "Hva er den faste rekkefølgen i en vokalbeskrivelse?",
      options: ["Tungehøyde, horisontal plassering, rundethet, lengde", "Stemthet, artikulasjonssted, artikulasjonsmåte, altså den samme som for konsonanter", "Lengde, rundethet, plassering, tungehøyde", "Rundethet, lengde, tungehøyde, plassering"],
      explanation: "Vokaler skrives i rekkefølgen høyde, plassering, rundethet, lengde — «trang fremre urundet lang vokal». Rekkefølgen stemthet, sted, måte hører til konsonantene, og å blande de to systemene er et tydelig tegn på at systematikken ikke sitter. Noen framstillinger setter rundetheten først; det viktigste er å være konsekvent og få med alle fire.",
    },
    {
      question: "Hvorfor kan en vokal ikke beskrives med et artikulasjonssted?",
      options: ["Fordi vokalen ikke har noen hindring luften møter, og sted navngir hvor hindringen ligger", "Fordi vokaler alltid lages i midten av munnen, så stedet ville vært det samme for alle", "Fordi vokalene skifter sted underveis i uttalen på en måte konsonantene ikke gjør", "Fordi artikulasjonssted er forbeholdt stemte lyder"],
      explanation: "Vokalen får sin karakter av formen på hulrommet, ikke av et hinder, og uten hindring finnes det ikke noe sted å navngi. Vokaler lages heller ikke alle på samme sted — tungen flytter seg tydelig mellom i og ɑ. Det er bare diftongene som skifter posisjon underveis.",
    },
    {
      question: "Hva er en diftong?",
      options: ["En bevegelse mellom to vokalposisjoner innenfor samme stavelse", "To vokaler etter hverandre i hver sin stavelse, som i to påfølgende stavelseskjerner", "En vokal som holdes ekstra lenge og markeres med lengdetegn", "En vokal som får sin kvalitet av konsonanten rundt"],
      explanation: "Diftongen er én vokal i systemet, skrevet med to tegn: det første viser utgangspunktet, det andre målet. Det avgjørende er at begge hører til samme stavelseskjerne — to vokaler i hver sin stavelse er to kjerner og dermed to stavelser. Testen er å telle stavelser.",
    },
    {
      question: "Hva kjennetegner reduksjonsvokalen ə?",
      options: ["Den finnes bare i trykksvake stavelser og har nesten ingen egen kvalitet", "Den finnes bare i trykksterke stavelser og er alltid lang", "Den er en fremre rundet vokal som opptrer i endelser", "Den kan skille to ord fra hverandre i samme posisjon"],
      explanation: "Reduksjonsvokalen er midtre og urundet, tungen ligger i hvilestilling, og den bærer aldri trykk. Fordi den er en følge av at stavelsen er trykksvak og ikke et valg i systemet, kan den ikke skille ord i samme posisjon — og nettopp derfor behandles den ulikt på de to transkripsjonsnivåene.",
    },
    {
      question: "Hva markerer tegnet ː?",
      options: ["At vokalen foran er lang", "At stavelsen foran har hovedtrykk i ordet den står i", "At vokalen foran er rundet", "At de to vokaltegnene rundt hører til samme diftong"],
      explanation: "Lengdetegnet står etter vokalen og sier at den holdes lenge. Trykk markeres med helt andre tegn, foran stavelsen, og rundethet har ikke noe eget diakritisk tegn — den ligger i selve vokalsymbolet. Merk at lengdetegnet ikke er et vanlig kolon, selv om de to ligner i enkelte skrifttyper.",
    },
    {
      question: "Hvilken vokal er åpen, bakre og urundet?",
      options: ["ɑ, som er alene i sitt hjørne av firkanten", "æ, som også er åpen og urundet, men som lages lenger fram i munnen", "ɔ, som er bakre, men både rundet og ett trinn høyere i firkanten", "o, som er bakre og rundet"],
      explanation: "ɑ er alene i sitt hjørne av firkanten og derfor en av de letteste vokalene å beskrive entydig. æ er åpen og urundet, men fremre. Legg merke til at ɑ bryter mønsteret blant de bakre vokalene: u, o og ɔ er alle rundede, mens ɑ ikke er det.",
    },
    {
      question: "En kandidat beskriver iː som «en trang fremre vokal». Hva er problemet?",
      options: ["Beskrivelsen passer også på y, siden rundetheten mangler", "Beskrivelsen er direkte usann, siden iː verken er trang eller fremre", "Beskrivelsen bruker konsonantaksene på en vokal", "Beskrivelsen mangler bare eksempelordet"],
      explanation: "Beskrivelsen er sann, men den skiller ikke: y er også trang og fremre, og bare rundetheten holder de to fra hverandre. Dette er feil nummer 16, og uten delpoeng koster den manglende aksen hele poenget. Eksempelordet mangler også, men det er ikke det som gjør beskrivelsen uklar.",
    },
    {
      question: "Hva står bokstaven o oftest for i norsk uttale?",
      options: ["Lyden u, altså den trange bakre rundede vokalen", "Lyden o, altså den trang-midtre bakre rundede vokalen, i de aller fleste ord", "Lyden ɔ, altså den åpen-midtre bakre rundede vokalen", "Lyden ʉ, den midtre trange"],
      explanation: "I ord som sol og bok står bokstaven o for lyden u, mens lyden o oftest skrives med bokstaven å. Skriftbildet er ikke lydskrift, og å transkribere etter rettskrivingen i stedet for etter uttalen er en feilkilde som slår ut i hele transkripsjonsdelen.",
    },
    {
      question: "Hvilke to vokaler skilles bare av tungehøyde?",
      options: ["o og ɔ, som begge er bakre og rundede", "i og y, som ligger i samme rute i firkanten men skiller seg i lepperunding", "y og ʉ, som begge er trange og rundede men lages på ulikt sted", "æ og ɑ"],
      explanation: "o og ɔ er begge bakre og rundede, og det er bare høydetrinnet som skiller dem. i og y skilles av rundethet, mens y og ʉ og likeså æ og ɑ skilles av horisontal plassering. Å kunne si hvilken akse som skiller to naboer, er samtidig å vite hvilken akseverdi som må stå i beskrivelsen.",
    },
    {
      question: "Hva er trinn 3 i prosedyren for å oppfylle skillekravet?",
      options: ["Å prøve beskrivelsen mot naboene i vokalfirkanten", "Å skrive beskrivelsen i fast rekkefølge og legge ved et eksempelord", "Å plassere vokalen i riktig rute i firkanten før du leser av aksene", "Å oppgi lengden, siden den er betydningsskillende i norsk"],
      explanation: "Nabokontrollen er trinn 3, og den er hele forskjellen mellom en sann beskrivelse og en som gir poeng. Å plassere vokalen er trinn 1, og fast rekkefølge med eksempelord er trinn 5. Lengden er én av akseverdiene du leser av i trinn 2.",
    },
    {
      question: "Hvorfor er ɛ en av de vanskeligste vokalene å beskrive entydig?",
      options: ["Den har tre nære naboer i firkanten, så alle fire akseverdiene trengs", "Den ligger i et hjørne av firkanten der ingen andre vokaler bor", "Den kan ikke være lang i norsk, så lengdeaksen er uanvendelig", "Den skrives med samme bokstav som en annen vokal i norsk"],
      explanation: "œ deler høyde og plassering med ɛ men er rundet, e ligger ett trinn over og æ ett trinn under. Med tre naboer er det ingen akseverdi du kan droppe. Vokalen i et tomt hjørne er derimot ɑ, som er den letteste å beskrive.",
    },
    {
      question: "Hva er forskjellen på trykk og lengde?",
      options: ["Trykk gjelder hvilken stavelse som framheves, lengde gjelder hvor lenge vokalen varer", "Trykk gjelder vokalen, lengde gjelder hele stavelsen den står i", "De to er navn på det samme fenomenet i norsk, siden trykksterke stavelser alltid har lang vokal", "Trykk markeres etter stavelsen, lengde foran vokalen"],
      explanation: "Trykk er en egenskap ved stavelsen, lengde en egenskap ved vokalen, og de markeres med hvert sitt tegn. En trykksterk stavelse kan godt ha kort vokal, som i takk, så de to følger ikke automatisk hverandre. Trykkmarkøren står foran stavelsen, lengdetegnet etter vokalen.",
    },
    {
      question: "Hvilken vokal er den eneste midtre som bærer trykk i norsk?",
      options: ["ʉ, den midtre trange rundede vokalen", "ə, altså reduksjonsvokalen som står i trykksvake endelser i ord som hage", "y, som ligger i den fremre kolonnen rett ved siden av den midtre", "u, som ligger i den bakre kolonnen"],
      explanation: "ʉ er midtre, trang og rundet, og den bærer trykk i ord som hus. Reduksjonsvokalen er også midtre, men den bærer aldri trykk. y er fremre og u er bakre, så ingen av dem er midtre i det hele tatt.",
    },
    {
      question: "Hva kreves i tillegg til å bruke vokalaksene, etter kravet fra 2018?",
      options: ["At selve systemet for vokalbeskrivelse er forklart, ikke bare brukt", "At beskrivelsen oppgis både fonetisk og fonemisk for hver vokal", "At hver vokal illustreres med minst tre norske eksempelord", "At vokalfirkanten tegnes opp i besvarelsen"],
      explanation: "Kravet er at systematikken forklares: hva hver akse skiller, ikke bare hvilke verdier vokalen har. Å skrive «trang fremre urundet» er å bruke systemet; å si hva hver akse utelukker, er å forklare det. Å nevne uten å forklare er feil nummer 4.",
    },
    {
      question: "Hva skjer om du utelater rundetheten i en beskrivelse av ø?",
      options: ["Beskrivelsen passer også på e, som bare skiller seg i rundethet", "Beskrivelsen passer også på o, siden de to ligger i samme rad i vokalfirkanten", "Beskrivelsen passer også på y, som ligger ett trinn over i den samme kolonnen", "Ingenting — rundetheten er underforstått for fremre vokaler"],
      explanation: "e er trang-midtre og fremre akkurat som ø, og bare rundetheten skiller dem. o ville falt bort på plasseringen og y på høyden, så de to utelukkes av andre akseverdier. Og rundethet er aldri underforstått i norsk: språket har både rundede og urundede fremre vokaler i tre høydetrinn.",
    },
    {
      question: "Hvorfor er vokalbeskrivelse alltid litt mer omtrentlig enn konsonantbeskrivelse?",
      options: ["Vokalfirkanten er kontinuerlig, mens konsonanttabellen har diskrete celler", "Vokaler er kortere enn konsonanter og derfor vanskeligere å høre", "Vokaler har færre akser enn konsonanter, så beskrivelsen blir grovere", "Vokaler er alltid stemte, så én akse faller bort"],
      explanation: "Mellom to høydetrinn finnes uendelig mange mellomposisjoner, og hvor grensene går, varierer mellom talere og dialekter. En konsonant er derimot enten alveolar eller postalveolar. Vokalene har flere akser enn konsonantene, ikke færre, og at de er stemte, fjerner ingen akse fra vokalsystemet.",
    },
  ],
  'exfac03-spr-1-3': [
    {
      question: "Hvilken omgivelse utløser retrofleksjon i norsk?",
      options: ["En alveolar r rett foran n, t, d, l eller s", "En hvilken som helst r rett foran en hvilken som helst konsonant i samme ord", "En alveolar r rett etter en av de alveolare lydene i ordet", "En r i slutten av et ord, uansett hva som følger"],
      explanation: "Regelen krever både at r-en er alveolar og at lyden etter er alveolar. Rekkefølgen er avgjørende: r-en må stå foran, ikke etter. Og møter r-en en vokal, en velar eller en av de fremre frikativene, skjer det ingenting i det hele tatt.",
    },
    {
      question: "Hva blir resultatet av r pluss s for en taler med alveolar r?",
      options: ["ʂ", "ʃ, altså den samme lyden som i sjø og skje", "s, siden r-en faller bort uten å sette spor etter seg", "ç, den palatale frikativen"],
      explanation: "r pluss s gir ʂ, en ustemt retrofleks frikativ som i en finkornet beskrivelse er apiko-postalveolar. ʃ ligger svært nær, men lages med tungebladet og har ingen r i forhistorien. Å si at r-en bare faller bort, overser at stedet faktisk endrer seg.",
    },
    {
      question: "Hva er det som IKKE endrer seg når en lyd blir retrofleks?",
      options: ["Stemtheten og artikulasjonsmåten", "Artikulasjonsstedet, som holdes alveolart gjennom hele prosessen", "Stavelsesgrensen, som alltid går rett før den retroflekse lyden", "Trykkmønsteret i ordet"],
      explanation: "t er ustemt plosiv både før og etter, n er stemt nasal både før og etter; det eneste som endres, er stedet — fra alveolar til retrofleks. Nettopp derfor kan hele retroflekstabellen utledes fra konsonantkartet i stedet for å pugges.",
    },
    {
      question: "Virker retrofleksregelen over ordgrensen i en sammensetning?",
      options: ["Ja — regelen krysser både morfemgrenser og ordgrensen i en sammensetning", "Nei, siden de to leddene er selvstendige ord med hver sin egen lydstruktur og sitt eget trykk", "Bare når det første leddet er enstavet og hovedtrykket ligger på det leddet", "Bare i skrift, ikke i uttale"],
      explanation: "Regelen virker på lydstrømmen, og lydstrømmen kjenner ikke skriftens ordgrenser. Dette er den dyreste fella i kapitlet, fordi eksamensordet nesten alltid er sammensatt og fugen ofte ligger nettopp der r møter en alveolar lyd. Antall stavelser i første ledd spiller ingen rolle.",
    },
    {
      question: "Hvorfor får en taler med skarre-r som regel ikke retroflekser?",
      options: ["Skarre-r-en lages uvulart og har ingen kontakt med alveolarområdet i det hele tatt", "Skarre-r-en er ustemt, og bare stemte lyder kan smelte sammen med andre lyder", "Skarre-r-en står alltid sist i stavelsen, så det kommer aldri en alveolar lyd etter", "Skarre-r-en faller bort før alveolare lyder"],
      explanation: "Sammensmeltingen forutsetter at r-en lages i samme område som lyden den møter, og en uvular r lages ved drøvelen. Skarre-r-en er stemt, og den kan godt stå foran en alveolar lyd — det er stedet som er avgjørende. Dette er den enkeltopplysningen om egen uttale som låser flest andre valg.",
    },
    {
      question: "Hva skiller ç fra ʃ?",
      options: ["Artikulasjonsstedet — ç er palatal, ʃ er postalveolar", "Stemtheten — den ene er stemt og den andre ustemt", "Artikulasjonsmåten — den ene er frikativ og den andre approksimant", "Forhistorien — bare den ene kan oppstå av en r"],
      explanation: "Begge er ustemte frikativer, så det er bare stedet som skiller: ç lages med tungeryggen mot den harde ganen, ʃ med tungebladet like bak alveolarkanten. Den lyden som kan oppstå av en r, er ʂ, som er retrofleks og ikke må forveksles med ʃ.",
    },
    {
      question: "Hvordan skal du behandle sammenfallet mellom lydene i kjole og sjø?",
      options: ["Som en ekte variantregel du oppgir og deretter følger konsekvent", "Som en uttalefeil du bør rette opp før du transkriberer besvarelsen din", "Som en regel som gjelder alle norske talere uansett hvilken dialektbakgrunn de har", "Som noe som ikke trenger å nevnes, siden sensor kjenner fenomenet"],
      explanation: "Sammenfallet er en utbredt og fullt gyldig norsk uttale, og en transkripsjon som konsekvent bruker den ene lyden begge steder, teller fullt så lenge bakgrunnen er oppgitt. Det som straffes, er å veksle uten system — da er transkripsjonen ikke konsistent med noen oppgitt bakgrunn, og det er feil nummer 2.",
    },
    {
      question: "I hvilken omgivelse aspireres en ustemt plosiv i norsk?",
      options: ["I starten av en trykksterk stavelse", "I slutten av en trykksterk stavelse, rett før stavelsesgrensen", "I alle posisjoner, siden aspirasjon er en egenskap ved selve lyden", "I trykksvake stavelser, der plosiven ellers ville blitt for svak"],
      explanation: "Aspirasjonen kommer i starten av en trykksterk stavelse, som i tak og kort. Den blokkeres etter s og i trykksvake stavelser. At den er bundet til en bestemt posisjon og ikke er en egenskap ved lyden i seg selv, er nettopp det som gjør den forutsigbar.",
    },
    {
      question: "Hva skjer med aspirasjonen når en plosiv står rett etter s?",
      options: ["Den blokkeres helt, som i skole og spill", "Den forsterkes, siden s-en gir ekstra luft inn i plosiven", "Den er uendret, siden s-en tilhører en annen stavelse enn plosiven", "Den erstattes av stemthet"],
      explanation: "Etter s er plosiven uaspirert, og regelen er helt regelmessig. Sammenlign pil med spill, eller tak med stakk, og kjenn etter med håndflaten foran munnen. Nettopp fordi regelen er så konkret, gir den en av de sikreste forklaringssetningene i en transkripsjonsoppgave.",
    },
    {
      question: "Kan aspirasjon skille to norske ord fra hverandre?",
      options: ["Nei — aspirasjonen er helt forutsigbar av omgivelsen og bærer derfor ingen kontrast", "Ja, på nøyaktig samme måte som lengde skiller ordet tak fra ordet takk i norsk uttale", "Ja, men bare i importord med trykk på siste stavelse", "Bare for talere som har alveolar r"],
      explanation: "En lydforskjell som kan regnes ut fra omgivelsen, kan ikke bære et valg, og et valg er nettopp det som trengs for å skille to ord. Det finnes ikke noe norsk ordpar der aspirasjon er den eneste forskjellen. Lengde kan derimot skille ord, og det er akkurat der de to fenomenene er ulike.",
    },
    {
      question: "Hva blir n foran f og v i norsk uttale?",
      options: ["ɱ, altså en stemt labiodental nasal", "ŋ, altså en stemt velar nasal laget bakerst i munnen", "m, altså en stemt bilabial nasal laget med begge leppene", "ɳ, altså en stemt retrofleks nasal"],
      explanation: "Nasalen tar over stedet til lyden som følger, og siden f og v er labiodentale, blir nasalen ɱ. Det er n foran k og g som blir ŋ. m er bilabial og ikke labiodental, og ɳ oppstår av r pluss n i en helt annen omgivelse.",
    },
    {
      question: "Hva er forskjellen på nasalassimilasjon og retrofleksjon?",
      options: ["I assimilasjonen blir begge lydene stående, i retrofleksjonen smelter to lyder til én", "I assimilasjonen smelter to lyder sammen til én, mens det i retrofleksjonen bare er den ene som endrer sted", "Assimilasjonen gjelder bare inne i ord, retrofleksjonen bare over ordgrenser", "Assimilasjonen er en variantregel, retrofleksjonen en absolutt regel"],
      explanation: "I nasalassimilasjonen tilpasser nasalen stedet sitt, men antallet lyder er uendret. I retrofleksjonen forsvinner r-en som selvstendig lyd, og to lyder blir til én. Begge kan virke over grenser, og det er retrofleksjonen som er variantregelen av de to — den forutsetter alveolar r.",
    },
    {
      question: "Hva er en stavelsesbærende konsonant?",
      options: ["En konsonant som fyller kjernen i stavelsen alene, uten vokal", "En konsonant som står aller først i en trykksterk stavelse og derfor bærer trykket i ordet", "En konsonant som gjentas over en stavelsesgrense og hører til begge stavelsene", "En konsonant som uttales lengre enn vanlig"],
      explanation: "Rollen som normalt fylles av en vokal, er overtatt av konsonanten — som i den trykksvake endelsen i sykkel for mange talere. Stavelsen har altså like mange deler som ellers. Konsonanten som står først i stavelsen, står i randen og ikke i kjernen.",
    },
    {
      question: "Hvordan skrives en stavelsesbærende n?",
      options: ["Som grunntegnet n med et lite loddrett merke under", "Som to n-er etter hverandre, siden lyden i denne posisjonen holdes lenger enn vanlig", "Som n med lengdetegn etter, altså på samme måte som en lang vokal", "Som n med aspirasjonstegn"],
      explanation: "Tegnet er grunntegnet pluss et kombinerende merke under, altså to skrifttegn som til sammen viser én lyd. Lengdetegnet gjelder varighet og ikke stavelsesrolle, og aspirasjonstegnet hører til ustemte plosiver. Merket må alltid skrives sammen med grunntegnet — står det alene etter et mellomrom, forsvinner det visuelt.",
    },
    {
      question: "Hva er alternativet til en stavelsesbærende konsonant i en trykksvak endelse?",
      options: ["En reduksjonsvokal foran konsonanten", "En full vokal med samme kvalitet som i den trykksterke stavelsen foran", "En lang vokal, siden endelsen da må bære sin egen tyngde", "En diftong"],
      explanation: "Endelsen kan enten ha reduksjonsvokal pluss konsonant, eller konsonanten alene som kjerne. Begge er ekte norske uttalevarianter, og valget mellom dem er noe du oppgir og deretter følger. En full eller lang vokal i en trykksvak endelse ville brutt med at bare trykksterke stavelser har full vokalkvalitet.",
    },
    {
      question: "Hva er forskjellen på ɭ og ɽ?",
      options: ["ɭ oppstår av r pluss l, mens ɽ er en selvstendig dialektlyd uten r i forhistorien", "ɭ er en selvstendig dialektlyd, mens ɽ oppstår av r pluss l i selve uttaleøyeblikket", "De to er ulike skrivemåter for samme lyd i norsk uttale", "ɭ er ustemt, mens ɽ er stemt"],
      explanation: "ɭ er en retrofleks lateral som oppstår når r møter l. Tjukk l finnes uavhengig av noen r og er et dialekttrekk du enten har eller ikke har. Begge er stemte, og de er to ulike lyder — å blande dem er en vanlig feil i transkripsjoner.",
    },
    {
      question: "Hva markerer tegnet ˌ i en transkripsjon?",
      options: ["Bitrykk, og det står foran stavelsen som bærer det", "Hovedtrykk, og det står foran stavelsen som bærer det", "En stavelsesgrense inne i et sammensatt ord", "At vokalen i stavelsen er redusert"],
      explanation: "Bitrykket er svakere enn hovedtrykket og markeres med sitt eget tegn foran stavelsen. Hovedtrykket har et annet tegn og forekommer bare én gang per ord. Stavelsesgrenser og vokalreduksjon markeres ikke med trykktegn i det hele tatt.",
    },
    {
      question: "Hva røper bitrykket i et norsk ord?",
      options: ["At ordet er sammensatt, og omtrent hvor fugen mellom leddene går", "At ordet er et importord med fremmed trykkplassering", "At vokalen i stavelsen er lang", "At stavelsen har en stavelsesbærende konsonant"],
      explanation: "Et enkelt norsk ord har ett trykk; et sammensatt ord har hovedtrykk på første ledd og bitrykk på det neste. Derfor kan du høre hvor fugen går, og det er ofte lettere enn å se det i skrift. Lang vokal og stavelsesbærende konsonant markeres med helt andre tegn.",
    },
    {
      question: "Hvorfor skal du bruke ˈ og ikke en apostrof for hovedtrykk?",
      options: ["Det er to ulike tegn, og en transkripsjon med apostrof må sensor gjette seg til", "Apostrofen står for stavelsesgrense og ville derfor betydd noe annet", "Apostrofen kan bare brukes i fonemiske transkripsjoner, ikke i fonetiske", "Det er ingen reell forskjell, men apostrofen er tyngre å skrive på tastatur"],
      explanation: "Tegnene ligner, men de er ulike tegn med hver sin betydning i systemet, og det samme gjelder lengdetegnet mot kolon. En transkripsjon som blander dem, er ikke lenger entydig. Forskjellen er altså reell og ikke bare et spørsmål om hva som er lett å skrive.",
    },
    {
      question: "Hvilket fenomen står i veien når en r møter en ç?",
      options: ["Ingenting skjer — ç er ikke alveolar, så retrofleksregelen utløses ikke", "Det oppstår en retrofleks frikativ, siden alle frikativer etter r blir retroflekse", "R-en faller bort uten å sette spor, slik den gjør foran alle frikativer", "Det oppstår nasalassimilasjon i stedet"],
      explanation: "Regelen krever at lyden etter r-en er alveolar, og ç er palatal. Fella er å se en r og automatisk skrive retrofleks. Nasalassimilasjon gjelder nasaler foran labiodentale og velare lyder og har ingenting med dette å gjøre.",
    },
    {
      question: "Hva er det viktigste å lære av at eksamensordene alltid er lange og sammensatte?",
      options: ["At ordene er nye hver gang, men fenomenene de er konstruert for å vise, er de samme", "At det lønner seg å pugge de ordene som har vært brukt tidligere i emnet", "At bare sammensatte ord kan transkriberes fonetisk på en meningsfull måte", "At ordene alltid inneholder alle sju fenomenene på én gang"],
      explanation: "Ordtypen er stabil selv om ordet skifter: langt, sammensatt, norsk og valgt for å tvinge fram flere fenomener samtidig. Derfor gir det null å pugge ferdige transkripsjoner og alt å kunne prosedyren. Et enkelt ord kan også transkriberes, og få ord inneholder alle sju fenomenene.",
    },
    {
      question: "Hva bør en forklaringssetning i transkripsjonsoppgaven inneholde?",
      options: ["Ett konkret tegn og den konkrete omgivelsen tegnet står i", "En generell formulering av regelen, siden en slik formulering viser at du kjenner hele systemet", "En henvisning til hvilket kapittel i pensum regelen er hentet fra", "En vurdering av om uttalen din er normal eller avvikende"],
      explanation: "Malen er ett tegn, én omgivelse, én setning. Den nyeste veiledningen avviser uttrykkelig et generelt utsagn i denne oppgavetypen — det er riktig, og det gir null poeng. Å svare generelt der oppgaven ber om konkret er feil nummer 3.",
    },
    {
      question: "Hvilken feilkode rammer et svar som gir ett eksempel der oppgaven ber om to?",
      options: ["Feil nummer 7", "Feil nummer 6, altså å gi et eksempel uten å begrunne hvorfor det passer", "Feil nummer 16, altså å beskrive en lyd for løst til å skille den fra andre", "Feil nummer 2, altså å transkribere inkonsistent"],
      explanation: "Feil nummer 7 er ren telling: ber oppgaven om to, skal det stå to. Feil nummer 6 gjelder manglende begrunnelse og nummer 16 for løs beskrivelse — begge er ekte feil, men de rammer noe annet. Egeneksempel-oppgavene i dette stoffet kommer ofte som punktlister med et bestemt antall per punkt.",
    },
    {
      question: "Hva er forskjellen på en variantregel og en absolutt regel?",
      options: ["En absolutt regel gjelder alle talere, mens en variantregel gjelder noen og må oppgis", "En absolutt regel gjelder i skriftspråket, mens en variantregel bare gjelder i talespråket", "En absolutt regel har unntak, mens en variantregel ikke har det", "En absolutt regel gjelder konsonanter, mens en variantregel gjelder vokaler"],
      explanation: "Aspirasjonsblokkering etter s er absolutt: den gjelder uansett hvem som snakker. Retroflekser, tjukk l og frikativsammenfall er varianter: de avhenger av hvilken varietet du har, og de skal oppgis og deretter følges konsekvent. Å behandle en variantregel som absolutt får deg til å rette din egen korrekte uttale mot en annens.",
    },
  ],
  'exfac03-spr-1-4': [
    {
      question: "Hva er grunnprinsippet i lydskrift?",
      options: ["Ett tegn står for én lyd, uansett hvordan lyden skrives i rettskrivingen", "Ett tegn står for én bokstav i rettskrivingen, slik at transkripsjonen kan leses tilbake", "Hvert språk har sitt eget sett med tegn, tilpasset det språkets skrifttradisjon", "Hvert tegn står for en stavelse"],
      explanation: "Lydskriften er et måleredskap, ikke en avtale om skrivemåte. Derfor kan ett bokstavtegn stå for flere lyder i norsk, mens ett lydtegn aldri gjør det. Og nettopp fordi tegnene er språkuavhengige, betyr samme tegn samme lyd på tvers av språk.",
    },
    {
      question: "Hvordan er konsonanttabellen bygget opp?",
      options: ["Sted løper vannrett fra leppene til strupehodet, måte løper loddrett", "Måte løper vannrett og sted loddrett, med stemthet som egen rad nederst i tabellen", "Tegnene står alfabetisk, slik at du raskt kan slå opp et symbol du allerede kjenner", "Stemthet løper vannrett og sted loddrett"],
      explanation: "Kolonnene er artikulasjonssteder i rekkefølge innover i munnen, radene er artikulasjonsmåter, og stemtheten leses av på plasseringen inne i cellen. Oppsettet gjør at du kan gå begge veier — fra tegn til beskrivelse og fra beskrivelse til tegn — som er de to retningene beskrivelsesoppgaven prøves i.",
    },
    {
      question: "Hva betyr det at en celle i konsonantkartet er tom?",
      options: ["At norsk ikke har noen lyd med den kombinasjonen av sted og måte", "At lyden finnes, men bare i importord og derfor ikke regnes med i kjerneinventaret", "At lyden er umulig å lage med menneskelig taleapparat i det hele tatt", "At lyden mangler et eget tegn i lydskriften"],
      explanation: "Kartet viser det norske inventaret, ikke alt som finnes i verdens språk. En tom celle sier derfor bare at norsk ikke bruker den kombinasjonen; andre språk kan godt gjøre det. Alle lyder som finnes, har dessuten sitt eget tegn i lydskriften.",
    },
    {
      question: "Hvor mange celler i den norske frikativraden har både en ustemt og en stemt lyd?",
      options: ["Én — den labiodentale, med f og v", "Tre, altså den labiodentale, den alveolare og den postalveolare cellen i tabellen", "Alle, siden hver frikativ i norsk har en stemt eller ustemt partner", "Ingen"],
      explanation: "Bare f og v danner et stemthetspar blant frikativene. s, ʃ, ʂ, ç og h står alene som ustemte, og ʁ står alene som stemt. Det betyr at «ustemt» ofte gir lite informasjon i en frikativbeskrivelse — men verdien skal likevel stå, siden det ikke gis delpoeng.",
    },
    {
      question: "Hvor står hovedtrykkstegnet?",
      options: ["Foran stavelsen som bærer trykket", "Rett over vokalen i den stavelsen som bærer trykket i ordet", "Etter stavelsen som bærer trykket, som en avslutningsmarkør", "Først i ordet, uansett hvilken stavelse som har trykk"],
      explanation: "Trykk er en egenskap ved stavelsen, ikke ved vokalen, og tegnet står derfor foran hele stavelsen. Plasseringen bærer i tillegg en opplysning om hvor stavelsen begynner, og den går tapt om tegnet settes over vokalen. I et ord der trykket ikke ligger først, står tegnet inne i ordet.",
    },
    {
      question: "Hvor står lengdetegnet?",
      options: ["Rett etter vokalen det gjelder", "Rett foran vokalen det gjelder, på samme måte som trykktegnene står foran", "Etter hele stavelsen, siden lengde er en egenskap ved stavelsen og ikke ved vokalen", "Over vokalen"],
      explanation: "Lengde er en egenskap ved vokalen, og tegnet følger den umiddelbart. Trykktegnene står derimot foran stavelsen, fordi trykk er en egenskap ved stavelsen. De to plasseringsreglene er lette å blande, og forskjellen er hele grunnen til at de finnes.",
    },
    {
      question: "Hvor står aspirasjonstegnet?",
      options: ["Etter plosiven, som et lite hevet tegn", "Foran plosiven, siden luften bygges opp før stengingen slippes", "Etter vokalen som følger plosiven, der pusten faktisk høres", "Under plosiven, som et kombinerende merke"],
      explanation: "Pusten kommer etter slippet av plosiven, og tegnet står der pusten kommer. At trykket bygges opp under stengingen, er sant, men aspirasjonen er selve luftstrømmen etterpå. De kombinerende merkene under grunntegnet brukes til helt andre opplysninger.",
    },
    {
      question: "Hva skjer om du setter et mellomrom mellom grunntegnet og et kombinerende merke?",
      options: ["Merket fester seg på mellomrommet og forsvinner visuelt", "Merket blir stående tydeligere, og transkripsjonen blir lettere å lese for sensor", "Merket flytter seg automatisk til neste tegn i strengen", "Ingenting — mellomrom har ingen betydning i en transkripsjon"],
      explanation: "Et kombinerende merke fester seg alltid på tegnet rett foran. Er det et mellomrom der, havner merket på mellomrommet, og du har skrevet noe annet enn du trodde. Merket skal derfor alltid stå umiddelbart etter grunntegnet.",
    },
    {
      question: "Hva viser klammer i en transkripsjon?",
      options: ["Den fonetiske formen, altså hva som faktisk uttales", "Den fonemiske formen, altså enhetene i lydsystemet uten forutsigbare detaljer", "Den ortografiske formen, altså hvordan ordet skrives i vanlig rettskriving", "Betydningen til ordet"],
      explanation: "Klammer rammer inn observasjonen: aspirasjon, retroflekser, reduksjonsvokal og trykk hører hjemme der. Skråstreker rammer inn analysen, altså systemenhetene. Ortografi skrives i kursiv og betydning i enkle anførselstegn — fire skrivemåter for fire ulike spørsmål om samme ord.",
    },
    {
      question: "Hvorfor er en form i skråstreker med aspirasjonstegn i en selvmotsigelse?",
      options: ["Skråstrekene sier at dette er et valg i systemet, mens aspirasjonen er forutsigbar av omgivelsen", "Skråstrekene brukes bare om enkeltlyder, aldri om hele ord med flere stavelser", "Aspirasjonstegnet kan bare stå sammen med stemte lyder, og skråstreker brukes om ustemte", "Skråstreker og aspirasjonstegn kan ikke kombineres teknisk i lydskrift"],
      explanation: "De to sier motsatte ting om samme lyd: skråstrekene påstår at dette er noe språkbrukeren velger, aspirasjonstegnet at det er noe hun ikke velger. Sensor kan ikke gjette hvilken av delene du mente, og i en oppgave med trekk per feil er tvetydighet dyrt.",
    },
    {
      question: "Hva markerer kursiv i denne boka?",
      options: ["Den ortografiske formen, altså hvordan ordet skrives", "Den fonetiske formen, altså hvordan ordet faktisk uttales av taleren", "At ordet er et fremmedord eller et importord i norsk", "At ordet er en fagterm som skal forklares"],
      explanation: "Kursiv viser skriften, klammer viser uttalen, skråstreker viser systemenhetene og enkle anførselstegn viser betydningen. Et ord uten markering leses som løpende tekst, og da vet ikke leseren hvilket av de fire du snakker om.",
    },
    {
      question: "Hvorfor bruker boka vanlig g og ikke lydskriftens egen g-form?",
      options: ["De står for samme lyd, og vanlig g er tegnet studenten har på tastaturet", "De står for to ulike lyder, og norsk har bare den ene av dem i sitt inventar", "Lydskriftens g-form brukes bare i transkripsjon av fremmedspråk", "Vanlig g er den eneste av de to som kan kombineres med diakritika"],
      explanation: "De to formene er visuelt nesten identiske og står for nøyaktig samme lyd. En framstilling som blander dem, lærer bort en forskjell som ikke finnes i faget. Bruk derfor den g-en du har — ingen sensor kan skille dem, og ingen av dem er feil.",
    },
    {
      question: "Hva gjelder for tonelagsmarkering i denne boka?",
      options: ["Den er valgfri, men skal være konsekvent hvis du først velger å markere", "Den er obligatorisk i alle fonetiske transkripsjoner av norske ord", "Den er forbudt, siden materialet ikke dokumenterer at tonelag prøves", "Den brukes bare i fonemiske transkripsjoner"],
      explanation: "Materialet dokumenterer ikke at tonelag kreves, og boka påstår derfor ikke at det gjør det. Velger du å markere, må du gjøre det i alle ord: en halvveis gjennomført markering er verre enn ingen, fordi leseren ikke kan vite om et umarkert ord mangler tonelag eller mangler markering.",
    },
    {
      question: "Hvor mange tegn i norsk transkripsjon mangler på et vanlig norsk tastatur?",
      options: ["Over tjue, medregnet alle diakritikaene", "Under fem, siden de fleste lydene skrives med vanlige bokstaver i norsk transkripsjon", "Ingen — hele inventaret finnes hvis du bruker riktig tastaturoppsett i systemet", "Nøyaktig ti"],
      explanation: "Tastaturet dekker de vanlige bokstavene pluss æ, ø og å, men mangler retrofleksene, de fremre frikativene, de fleste vokaltegnene og samtlige diakritika. Til sammen er det over tjue tegn, og de mangler i nettopp de gruppene du bruker oftest.",
    },
    {
      question: "Hva er det beste grepet for å spare tid når tegn må limes inn?",
      options: ["Skriv hele transkripsjonen med vanlige bokstaver først og sett inn spesialtegnene i én omgang", "Skriv bare de tegnene du har på tastaturet, og forklar i en merknad hva som mangler", "Begynn med de vanskeligste tegnene, så du er sikker på å rekke dem", "Lim inn hvert tegn straks du trenger det, så du ikke mister oversikten"],
      explanation: "Å samle innlimingene i én arbeidsøkt sparer deg for tjue separate søk i det vedlagte dokumentet. Å utelate tegn er ikke et alternativ — hvert manglende tegn er en feil på 0,5 poeng. Rekkefølgen mellom tegnene spiller mindre rolle enn at søkingen samles.",
    },
    {
      question: "Hvilket ledd av transkripsjonsoppgaven bør skrives før du perfeksjonerer selve transkripsjonen?",
      options: ["Forklaringsleddet, siden det ikke krever spesialtegn i det hele tatt", "Den fonemiske formen, siden den er kortest og raskest å skrive ferdig", "Den fonetiske formen, siden den er den som teller mest i poengregnskapet", "Oppgitt språklig bakgrunn, siden den skal stå aller først i besvarelsen"],
      explanation: "Den dyreste enkeltfeilen i oppgaven er å bruke all tiden på transkripsjonen og aldri komme til forklaringen. Transkripsjonen har trekk på 0,5 poeng per feil, mens et ubesvart forklaringsledd står helt tomt. Bakgrunnen skal riktignok stå først, men den tar bare én setning.",
    },
    {
      question: "Hva vet materialet om hvordan analysetrær leveres på en digital eksamen?",
      options: ["Ingenting — leveranseformen for trær står ikke i noen av dokumentene", "At de skal tegnes for hånd og lastes opp som bilde i besvarelsen", "At de skal skrives med innrykk i tekstfeltet, på samme måte som i denne boka", "At de kan utelates hvis kandidaten beskriver strukturen i ord i stedet"],
      explanation: "At den nyeste terminen er digital og at lydtegn limes inn, er dokumentert; leveranseformen for trær er det ikke. Boka påstår derfor ingenting om det. Det du kan gjøre, er å øve på en form som er lesbar uansett — og et tre beskrevet i ord er uansett ikke et svar.",
    },
    {
      question: "Hvilket tegn står i krysset mellom nasalraden og retrofleks-kolonnen?",
      options: ["ɳ", "ŋ, altså den nasalen som lages med tungeryggen mot den myke ganen bakerst", "ɱ, altså den nasalen som lages med underleppen mot overtennene", "n, altså den vanlige alveolare nasalen"],
      explanation: "ɳ er den retroflekse nasalen, og den oppstår av r pluss n. ŋ er velar, ɱ er labiodental og n er alveolar — alle tre er nasaler, men de står i hver sin kolonne. Å finne raden først og så gå bortover til kolonnen er den raskeste måten å bruke kartet på.",
    },
    {
      question: "Hva er systematikken bak retroflekskolonnen i kartet?",
      options: ["Stemthet og måte holdes fra den alveolare kolonnen, bare stedet flyttes", "Stedet holdes fra den alveolare kolonnen, mens stemtheten snus om for hver lyd", "Hver retrofleks lyd er en helt selvstendig enhet uten noen alveolar partner", "Retrofleksene er alle ustemte, i motsetning til sine alveolare partnere"],
      explanation: "ʈ er ustemt plosiv akkurat som t, ɳ er stemt nasal akkurat som n. Bare stedet er flyttet, og derfor kan hele kolonnen leses av fra den alveolare i stedet for å pugges. Retrofleksene har både stemte og ustemte medlemmer, som partnerne sine.",
    },
    {
      question: "Hva viser lengdetegnet i motsetning til merket for stavelsesbærende konsonant?",
      options: ["Lengdetegnet viser varighet, merket viser hvilken rolle lyden har i stavelsen", "Lengdetegnet viser hvilken rolle lyden har i stavelsen, merket viser varighet", "Begge viser varighet, men lengdetegnet brukes om vokaler og merket om konsonanter", "Begge viser stavelsesrolle, men på hvert sitt nivå i transkripsjonen"],
      explanation: "Lengde gjelder hvor lenge lyden varer; stavelsesbærende gjelder at konsonanten fyller kjernen i stavelsen alene. En stavelsesbærende konsonant er ikke nødvendigvis lang, og en lang lyd er ikke nødvendigvis stavelsesbærende. De to opplysningene er uavhengige.",
    },
    {
      question: "Hvorfor er vokalfirkanten mer omtrentlig enn konsonanttabellen?",
      options: ["Firkanten er kontinuerlig, mens tabellen har diskrete celler", "Firkanten har færre akser enn tabellen, så beskrivelsen blir grovere av seg selv", "Vokalene varierer mindre mellom talere enn konsonantene gjør", "Firkanten mangler en akse for stemthet"],
      explanation: "Mellom to høydetrinn finnes uendelig mange mellomposisjoner, og hvor grensene går, varierer mellom talere og dialekter. En konsonant er derimot enten alveolar eller postalveolar. Vokalene har flere akser enn konsonantene, ikke færre, og de varierer mer mellom talere.",
    },
    {
      question: "Hva bør kontrollrunden etter en transkripsjon se etter?",
      options: ["At trykktegn står foran stavelser, lengdetegn etter riktige vokaler, aspirasjonstegn bare der de skal, og at de to formene har hver sin klammetype", "At transkripsjonen ligner mest mulig på en normaluttale av ordet", "At alle tegn i inventaret er brukt minst én gang i besvarelsen", "At skriftbildet og transkripsjonen har like mange tegn"],
      explanation: "De fire kontrollene tar halvannet minutt og fanger feiltyper som ikke krever at du hører noe som helst. Å sikte mot en normaluttale er direkte galt: transkripsjonen skal være konsistent med din egen oppgitte bakgrunn. Og skrift og lydskrift har sjelden like mange tegn.",
    },
    {
      question: "Hvilken lyd ligger i frikativraden i uvularkolonnen?",
      options: ["ʁ", "h, som lages nede i strupehodet og derfor ligger helt til høyre i kartet", "ç, som lages med tungeryggen mot den harde ganen", "ʂ, som lages med tungespissen bøyd bakover"],
      explanation: "ʁ er skarre-r-en, en stemt uvular frikativ. h ligger i glottalkolonnen, ç i palatalkolonnen og ʂ i retroflekskolonnen. Alle fire er frikativer, så det er stedet som plasserer dem — og ʁ er den eneste stemte av dem.",
    },
    {
      question: "Hvorfor er notasjonsfeil den feiltypen det lønner seg mest å trene bort?",
      options: ["De er helt gratis å unngå, siden de ikke krever at du hører noe riktig i det hele tatt", "De trekker mer per feil enn andre feil i transkripsjonsoppgaven gjør", "De er de eneste feilene sensor har lov til å trekke for i denne oppgavetypen", "De rammer bare kandidater som skriver for hånd"],
      explanation: "En notasjonsfeil handler om plassering av et tegn, ikke om hva du hører, og kan derfor rettes med en fast kontrollrunde. Trekket er det samme som for andre feil, 0,5 poeng, men muligheten til å unngå dem er langt større. Feilene rammer særlig kandidater som skriver på maskin under tidspress.",
    },
  ],
  'exfac03-spr-1-5': [
    {
      question: "Hva er trinn 2 i beskrivelsesprosedyren?",
      options: ["Å prøve beskrivelsen mot nabolydene og legge til akseverdier til ingen nabo passer", "Å skrive beskrivelsen i fast rekkefølge, med stemthet først for konsonanter", "Å legge ved et norsk eksempelord der lyden faktisk forekommer", "Å plassere lyden på alle aksene"],
      explanation: "Nabolydskontrollen er trinn 2, og det er trinnet som gjør en sann beskrivelse til en skillende beskrivelse. Plassering på aksene er trinn 1, fast rekkefølge er trinn 3 og eksempelordet trinn 4. Uten trinn 2 leverer du en beskrivelse som er sann og som likevel ikke peker på noen bestemt lyd.",
    },
    {
      question: "Hvor mange poeng gir en vokalbeskrivelse med tre av fire riktige akser?",
      options: ["Null", "Tre firedels poeng, altså en forholdsmessig andel av det hele poenget", "Et halvt poeng, siden hoveddelen av beskrivelsen er riktig", "Ett poeng, siden alt som står, er sant"],
      explanation: "Beskrivelsesoppgaven gir 1 poeng per lyd og ingen delpoeng, så regnestykket er binært: beskrivelsen skiller, eller den gjør det ikke. En manglende akse gjør at beskrivelsen passer på flere lyder, og da er den verdt null. Det er derfor nabolydskontrollen ikke er kvalitetssikring, men selve avgjørelsen.",
    },
    {
      question: "Hvilken akse skiller flest av parene i variantkatalogen?",
      options: ["Artikulasjonssted", "Stemthet, siden de fleste norske konsonanter har en partner med motsatt stemthet", "Artikulasjonsmåte, siden måten er den aksen med flest verdier å velge mellom", "Lengde"],
      explanation: "Halvparten av parene i katalogen skilles av sted alene. Det gjør stedet til den akseverdien som koster mest å utelate — og samtidig den som er lettest å glemme, fordi den føles selvsagt når du har lyden i munnen. Lengde gjelder bare vokaler og skiller ingen av konsonantparene.",
    },
    {
      question: "Hvilken lyd er en ustemt retrofleks plosiv?",
      options: ["ʈ", "ɖ, som deler både sted og måte med lyden spørsmålet gjelder", "t, som deler både stemthet og måte, men lages på alveolarkanten", "ʂ, som er retrofleks og ustemt"],
      explanation: "ʈ er ustemt, retrofleks og plosiv, som i kart for en taler med alveolar r. ɖ er den stemte partneren, t er den alveolare, og ʂ er frikativ. Hver av de tre faller altså på hver sin akse, og det er nettopp den kontrollen som gjør beskrivelsen entydig.",
    },
    {
      question: "Hvorfor er beskrivelsen «retrofleks lyd» spesielt svak?",
      options: ["Den oppgir bare sted, og passer derfor på seks ulike norske lyder", "Den oppgir bare måte, og passer derfor på flere lyder i samme rad", "Den er direkte usann, siden norsk ikke har retroflekse lyder", "Den mangler bare eksempelordet"],
      explanation: "Hele retroflekskolonnen deler sted, så stedet alene skiller ingenting der. Både stemthet og måte mangler, og beskrivelsen passer på ʈ, ɖ, ɳ, ɭ, ʂ og ɽ. Merk dessuten at ordet «lyd» ikke er en akseverdi i det hele tatt.",
    },
    {
      question: "Hva skiller ɭ fra ɽ?",
      options: ["Artikulasjonsmåten — den ene er lateral, den andre en tapp", "Artikulasjonsstedet — den ene er alveolar, den andre retrofleks i uttalen", "Stemtheten — den ene er stemt og den andre ustemt i norsk", "Ingenting — de to er skrivemåter for samme lyd"],
      explanation: "Begge er retroflekse og stemte, og de ligger i samme kolonne i kartet. Det er måten som skiller: ɭ er en lateral som oppstår av r pluss l, ɽ er en tapp som er et selvstendig dialekttrekk uten noen r i forhistorien.",
    },
    {
      question: "Hva er den faste rekkefølgen for en konsonantbeskrivelse?",
      options: ["Stemthet, sted, måte", "Tungehøyde, plassering, rundethet, lengde, som er den samme rekkefølgen vokalene bruker", "Sted, måte, stemthet, altså fra det ytre mot det indre i taleapparatet", "Måte, sted, stemthet"],
      explanation: "Konsonanter beskrives som stemthet, sted, måte. Den firedelte rekkefølgen hører til vokalene, og en vokalbeskrivelse som begynner med stemthet, er et tegn på at systemet ikke sitter — alle norske vokaler er stemte, så opplysningen skiller ingenting.",
    },
    {
      question: "Hvorfor bør beskrivelsesoppgaven tas tidlig i settet?",
      options: ["Den gir de raskeste poengene i settet, og forspranget kan brukes på de tunge oppgavene", "Den er alltid den første oppgaven i settet, så rekkefølgen er uansett gitt", "Den har trekk per feil, og trekket blir mindre jo tidligere svaret leveres", "Den er den best betalte enkeltoppgaven i settet"],
      explanation: "Fem poeng på under fem minutter er langt bedre avkastning enn transkripsjonsoppgaven, som gir 10 av 65 poeng på rundt tretti minutter. Beskrivelsesoppgaven har ikke trekk per feil, men mangler delpoeng, og den er ikke den best betalte — bare den raskeste.",
    },
    {
      question: "Hvilken lyd passer på beskrivelsen «ustemt lamino-alveolar frikativ»?",
      options: ["s", "ʃ, som er ustemt frikativ, men lages like bak alveolarkanten i stedet", "ʂ, som er ustemt frikativ laget med tungespissen bøyd bakover", "t, som er ustemt og alveolar"],
      explanation: "Etterleddet navngir alveolarkanten som passiv artikulator, forleddet tungebladet som aktiv, og måten er frikativ — det peker på s. ʃ og ʂ er begge ustemte frikativer på andre steder, og t er plosiv. Forleddet er nødvendig fordi tungespiss og tungeblad mot samme område gir ulike lyder.",
    },
    {
      question: "Hvorfor er det ikke nok å skrive at en beskrivelse «består av stemthet, sted og måte»?",
      options: ["Det er en oppramsing av formen, ikke en forklaring av hva hver akse utelukker", "Det er en påstand som ikke stemmer, siden en beskrivelse også må ha eksempelord", "Det bruker konsonantaksene der oppgaven gjelder en vokal", "Det er for langt for en oppgave verdt 1 poeng"],
      explanation: "Å gjengi formen på beskrivelsen sier ingenting om hva den gjør. Systematikken er forklart først når hvert ledd har en setning om hva det skiller mot. Å nevne uten å forklare er feil nummer 4, og en sensorveiledning krever uttrykkelig det siste for full uttelling.",
    },
    {
      question: "Hva bør du svare hvis en oppgave ber om tre norske ord som begynner med ʂ?",
      options: ["Forklare hvorfor lyden ikke kan stå først i et norsk ord", "Finne tre ord der lyden står inne i ordet, og merke at posisjonen er en annen", "Hoppe over deloppgaven og bruke tiden på de andre leddene i settet", "Skrive tre ord som begynner med bokstaven s"],
      explanation: "Lyden oppstår av r pluss s, og en r kan ikke stå foran s i ordstart, så oppgaven lar seg ikke besvare som stilt. Å forklare hvorfor er et bedre svar enn tre gale ord, og det viser at du kjenner fordelingen. Å hoppe over leddet ville vært feil nummer 5.",
    },
    {
      question: "Hva er nabolydskontrollen for en vokal?",
      options: ["Å prøve beskrivelsen mot rutene over, under og på hver side i vokalfirkanten", "Å prøve beskrivelsen mot alle vokalene i språket, én for én i alfabetisk rekkefølge", "Å sjekke at vokalen finnes i minst tre norske ord", "Å sammenligne den lange og den korte varianten av vokalen"],
      explanation: "Naboene er rutene rundt i firkanten, siden det er de vokalene som ligger nærmest i lyd og derfor forveksles. Å gå gjennom hele inventaret ville tatt mye lengre tid uten å gi mer. Sammenligning av lang og kort variant gjelder bare lengdeaksen.",
    },
    {
      question: "Hva skiller o fra ɔ?",
      options: ["Tungehøyden — den ene er trang-midtre, den andre åpen-midtre", "Rundetheten — den ene er rundet og den andre urundet i norsk uttale", "Horisontal plassering — den ene er bakre og den andre midtre i firkanten", "Lengden — den ene er alltid lang og den andre alltid kort"],
      explanation: "Begge er bakre og rundede, så bare høydetrinnet skiller dem. I norsk opptrer ɔ typisk som kort og o typisk som lang, men lengden er en egen akse og kan ikke erstatte høydeangivelsen i beskrivelsen.",
    },
    {
      question: "Hvilken feil rammer et svar som gir to eksempelord der oppgaven ber om tre?",
      options: ["Feil nummer 7", "Feil nummer 16, altså å beskrive en lyd så løst at den ikke skilles fra andre lyder", "Feil nummer 4, altså å nevne en fagterm uten å forklare systematikken bak den", "Feil nummer 5, altså å hoppe over ett av oppgavens ledd helt"],
      explanation: "Feil nummer 7 er ren telling og handler ikke om kunnskap i det hele tatt. Feil nummer 5 gjelder et ledd som står helt ubesvart, ikke et ledd som er halvveis besvart. De to andre gjelder kvaliteten på beskrivelsen, ikke antallet eksempler.",
    },
    {
      question: "Hvorfor er beskrivelsesprosedyren bedre enn å pugge ferdige beskrivelser?",
      options: ["Prosedyren virker også på lyder du aldri har sett, fordi den utleder fra kartet", "Prosedyren er raskere for de lydene du allerede kan utenat fra før av", "Prosedyren gir uttelling selv når konklusjonen er gal", "Prosedyren gjør eksempelordet overflødig"],
      explanation: "En pugget beskrivelse er like god helt til du møter en lyd du ikke har pugget. Prosedyren henter svaret fra kartet i stedet for fra hukommelsen, og den er derfor robust under press. Eksempelordet er fortsatt trinn 4 og faller ikke bort.",
    },
    {
      question: "Hva kjennetegner en kald bank i denne boka?",
      options: ["Oppgavene kommer uten hint, og fasiten er en ren momentliste", "Oppgavene er merket som ekstra vanskelige og teller dobbelt i poengregnskapet", "Oppgavene er hentet fra tidligere eksamenssett i emnet uten endringer", "Oppgavene har fasit, men ingen begrunnelse"],
      explanation: "Poenget med en kald bank er å trene gjenkjenning uten oppvarming, akkurat som på eksamen, og derfor står den uten hint. Alle oppgaver i boka er nyskrevne, og fasiten har fortsatt begrunnelse — den er bare kortere og strammere.",
    },
    {
      question: "Hva er den mest presise opplysningen om reduksjonsvokalen ə?",
      options: ["Den bærer aldri trykk, og er den eneste norske vokalen som ikke kan gjøre det", "Den er midtre og urundet, akkurat som den andre midtre vokalen i norsk", "Den er alltid kort, i motsetning til de fulle vokalene som kan være lange", "Den skrives med samme bokstav som e i norsk rettskriving"],
      explanation: "At vokalen aldri bærer trykk, skiller den fra alle andre norske vokaler, også fra ʉ som deler kolonne med den. At den er kort og at den ofte skrives med e, er sant, men ingen av delene utelukker noen annen vokal på samme måte.",
    },
    {
      question: "Hva er det siste du bør kontrollere i en beskrivelsesoppgave?",
      options: ["At ingen nabolyd passer på beskrivelsen, og at eksempelordet står der", "At beskrivelsen er formulert med de samme ordene som læreboka bruker", "At du har brukt flest mulig fagtermer i hvert enkelt svar", "At beskrivelsene er omtrent like lange"],
      explanation: "De to kontrollene tar ti sekunder per lyd og avgjør om svaret er verdt 1 poeng eller null. Å gjengi lærebokas formuleringer er dessuten feil vei å gå: egne formuleringer teller, og å gjengi lærebokas eksempler er feil nummer 15.",
    },
  ],
  'exfac03-spr-10-1': [
    {
      question: "Hva består bestillingen i transkripsjonsoppgaven av?",
      options: ["Fonetisk og fonemisk transkripsjon, en opplysning om kandidatens egen språklige bakgrunn, og en forklaring på hva som skiller de to formene", "Fonetisk transkripsjon og en artikulatorisk beskrivelse av hver enkelt lyd i ordet, med norsk eksempelord", "Fonemisk transkripsjon med stavelsesgrenser markert, og en vurdering av om stavelsene er åpne eller lukkede", "En transkripsjon av normaluttalen og en sammenlikning med den dialekten kandidaten selv snakker til daglig"],
      explanation: "Bestillingen har tre ledd i alle fire terminene med denne oppgaven: begge nivåer, egen språklig bakgrunn og en forklaring på hva som skiller formene. Stavelsesgrenser og artikulatoriske beskrivelser hører til andre oppgavetyper, og ingen termin ber om en sammenlikning med en normaluttale — det er kandidatens egen uttale som skal transkriberes.",
    },
    {
      question: "Hva er vurderingskriteriet i transkripsjonsoppgaven?",
      options: ["Intern konsistens med den bakgrunnen kandidaten selv har oppgitt", "Likhet med den østnorske normaluttalen, siden det er den varianten sensorveiledningene bruker som utgangspunkt for sine egne forslag", "At transkripsjonen kan leses av en sensor uten kjennskap til kandidatens dialekt eller talemålsbakgrunn", "Flest mulig diakritiske tegn i formen"],
      explanation: "Siden kandidaten skal transkribere sin egen uttale, godtas ulike varianter så lenge de er en mulig uttale gitt den oppgitte bakgrunnen. Den østnorske transkripsjonen som finnes i materialet, kalles uttrykkelig et forslag og er ikke en norm. Detaljnivå i seg selv gir ikke poeng — presisjonen måles mot bakgrunnen.",
    },
    {
      question: "En kandidat skriver: «Fonemisk transkripsjon utelater allofonisk variasjon.» Hva er problemet?",
      options: ["Utsagnet er riktig, men generelt, og forklaringen skal navngi konkrete tegn og omgivelser", "Utsagnet er galt, fordi den fonemiske formen er den som inneholder de allofoniske detaljene i en transkripsjon", "Utsagnet blander sammen fonemisk transkripsjon med ortografisk gjengivelse av ordet slik det staves", "Utsagnet mangler henvisning til hvilken termin regelen står i"],
      explanation: "Formuleringen er faglig riktig, og den er likevel avvist som svar: den nyeste sensorveiledningen krever at forklaringen tar for seg konkrete tegn i den konkrete omgivelsen de oppstår i. Det er den fonetiske formen, ikke den fonemiske, som bærer de allofoniske detaljene.",
    },
    {
      question: "Hvor mange poeng gir transkripsjonsoppgaven i den nyeste poengsatte terminen, og hva er trekket?",
      options: ["10 av 65 poeng i den nyeste poengsatte terminen, med et trekk på 0,5 poeng for hver feil i selve transkripsjonen", "14 av 49 poeng, med trekk på et halvt poeng for hvert feilanalyserte setningsledd i besvarelsen", "5 av 49 poeng, uten trekk, siden ingen av terminene oppgir trekk for transkripsjonsoppgaver", "8 av 65 poeng, med et trekk som først slår inn når kandidaten har mer enn fire feil i formen"],
      explanation: "Transkripsjonsoppgaven gir 10 av 65 poeng i H2025, og trekket er 0,5 poeng per feil. Tallet 14 av 49 poeng hører til fonologioppgaven i H2022, og trekket per feilanalysert setningsledd hører til de syntaktiske analyseoppgavene.",
    },
    {
      question: "Hva bør et bakgrunnsledd faktisk inneholde?",
      options: ["Hvilken varietet du transkriberer, og hvilke uttalevalg det låser", "Fødested, oppvekststed og hvor lenge du har bodd på hvert av dem, slik at sensor kan vurdere dialektbakgrunnen selv", "En liste over alle IPA-tegnene du kommer til å bruke i besvarelsen, med artikulatorisk beskrivelse av hvert", "Hvor nær uttalen din ligger en norm"],
      explanation: "Poenget er ikke biografien, men hvilke valg bakgrunnen forplikter deg til: r-typen, retroflekser og skillet mellom de to frikativene. Sensor skal kunne måle transkripsjonen mot noe. En symbolliste er ikke en bakgrunn, og en sammenlikning med en norm er ikke bestilt.",
    },
    {
      question: "En taler oppgir skarre-r. Hva følger av det for retroflekser?",
      options: ["Taleren får ingen retroflekser, fordi uvular r ikke lages med tungespissen", "Taleren får retroflekser bare når r står foran n, siden nasalen er den eneste dentalen som tåler en uvular r foran seg", "Taleren får retroflekser bare i sammensetninger, ikke inne i enkle ord", "Taleren får retroflekser som vanlig, siden retroflektering er en regel i det fonemiske systemet og ikke i uttalen"],
      explanation: "Retroflektering forutsetter at r lages med tungespissen, slik at den kan trekke den følgende dentalen bakover. Med uvular r står r og dental som to atskilte segmenter. Retroflekteringen hører hjemme i den fonetiske formen, ikke i den fonemiske.",
    },
    {
      question: "Hvorfor slår et sammenfall mellom to frikativer inn på begge transkripsjonsnivåer?",
      options: ["Fordi taleren mangler skillet i systemet, ikke bare i uttalen av enkeltord", "Fordi sammenfall regnes som en uttalefeil, og feil skal markeres på begge nivåer for at sensor skal se dem", "Fordi den fonemiske formen alltid gjengir den fonetiske formen tegn for tegn når to lyder ligner hverandre", "Fordi sammenfallet er betinget av omgivelsen, slik aspirasjon er det"],
      explanation: "Når to fonemer er blitt ett, finnes ikke skillet i talerens system, og da står den samme lyden både i klammer og mellom skråstreker. Aspirasjon og nasalassimilasjon er derimot betinget av omgivelsen og hører bare hjemme i klammer.",
    },
    {
      question: "Hva sier rekkefølgeregelen om forklaringsleddet?",
      options: ["Det skal skrives selv om transkripsjonen ikke er ferdig", "Det skal skrives helt til slutt, etter at hvert enkelt tegn i begge transkripsjonene er kontrollert to ganger", "Det kan sløyfes når transkripsjonen er så detaljert at forskjellene mellom nivåene er synlige for sensor", "Det skal stå før bakgrunnsleddet"],
      explanation: "Den dyreste disponeringsfeilen i oppgaven er å gi opp forklaringen fordi tegnene tok all tiden, og derfor skal forklaringen skrives uansett. Bakgrunnen kommer først, fordi den er kort og fordi resten måles mot den.",
    },
    {
      question: "Hva koster fire feiltegn i transkripsjonen, med trekkregelen fra den nyeste terminen?",
      options: ["2 poeng, siden hvert enkelt feiltegn koster et halvt poeng i denne oppgaven", "0,5 poeng, siden trekket gjelder besvarelsen som helhet og ikke det enkelte tegnet i transkripsjonen", "4 poeng, siden hvert feiltegn koster ett poeng i oppgaver der trekk er oppgitt av sensorveiledningen", "Ingenting, når leddene er på plass"],
      explanation: "Trekket er 0,5 poeng per feil, og fire feil gir dermed 2 poeng i trekk. Trekket er knyttet til det enkelte tegnet, og et godt bakgrunnsledd fjerner ikke trekket — men det avgjør hvilke tegn som i det hele tatt regnes som feil.",
    },
    {
      question: "Hvilken av disse setningene er en brukbar forklaringssetning?",
      options: ["Her står velar nasal i klammer og dental nasal mellom skråstreker, fordi nasalen står foran k", "Her har jeg brukt de riktige IPA-tegnene og markert både trykk, bitrykk og lengde slik konvensjonen krever", "Her viser den fonetiske formen flere detaljer enn den fonemiske, slik den alltid gjør i norsk", "Her er transkripsjonen gjort etter min egen uttale, og den avviker derfor fra den uttalen ordbøkene oppgir"],
      explanation: "En forklaringssetning navngir ett tegn og den omgivelsen som utløser det. De tre andre sier noe om arbeidet eller om transkripsjon generelt, og ingen av dem peker på et tegn i ordet.",
    },
    {
      question: "Hvorfor skriver denne boka fasit for to bakgrunner i hver transkripsjonsoppgave?",
      options: ["Fordi en fasit med bare ett svar ville lært leseren at oppgaven har ett riktig svar, stikk i strid med vurderingsregelen i emnet", "Fordi sensorveiledningene krever at kandidaten selv leverer to transkripsjoner av det samme ordet på eksamen", "Fordi østnorsk og vestnorsk er de to variantene som er dokumentert i alle de seks terminene i arkivet", "Fordi den fonemiske formen alltid blir ulik når to talere har ulik dialektbakgrunn og ulik r-type"],
      explanation: "Kriteriet er konsistens med egen oppgitt bakgrunn, og en fasit med ett svar ville fått en leser til å rette sin egen korrekte transkripsjon mot bokas. Eksamen ber om én transkripsjon, ikke to, og den fonemiske formen er ofte den samme for de to talerne.",
    },
    {
      question: "Hva er en fornuftig tidsbruk på en oppgave verdt 10 av 65 poeng?",
      options: ["Rundt en halvtime, etter modellen med omtrent tre minutter per poeng", "Rundt en time, siden transkripsjonsoppgaver krever at hvert tegn kontrolleres mot konsonanttabellen underveis", "Rundt ti minutter, siden selve transkripsjonen er den eneste delen som gir poeng i denne oppgavetypen", "Så lang tid som trengs, siden oppgaven har trekk for feil"],
      explanation: "Modellen er omtrent tre minutter per poeng, altså en halvtime for ti poeng, med lesing og kontroll regnet med. Å bruke en time betyr at en annen oppgave blir stående halvferdig, og trekket på 0,5 poeng per feil er for lite til å forsvare det.",
    },
    {
      question: "Hva er den vanligste konsekvensen av å hoppe over bakgrunnsleddet?",
      options: ["Sensor kan ikke avgjøre om transkripsjonen er en sannsynlig uttale, og kriteriet faller bort", "Transkripsjonen blir automatisk vurdert mot østnorsk uttale, slik at alle avvik fra den regnes som feil", "Kandidaten mister alle poengene i oppgaven, siden bakgrunnen er nevnt først i alle bestillingene", "Forklaringsleddet blir umulig å skrive uten en oppgitt omgivelse"],
      explanation: "Uten bakgrunnen har sensor ikke noe å måle transkripsjonen mot, og hele vurderingsregelen faller bort. Det er ikke slik at besvarelsen automatisk måles mot en norm, og forklaringsleddet kan fortsatt skrives — men oppgavens eget kriterium er borte.",
    },
    {
      question: "En kandidat oppgir tungespiss-r og skriver likevel uvular r i transkripsjonen. Hva er dette et eksempel på?",
      options: ["Inkonsistens med egen oppgitt bakgrunn: transkripsjonen motsier den uttalen kandidaten selv sa at hun skulle transkribere", "En generell forklaring der oppgaven ber om konkrete tegn, altså den feilen sensorveiledningen avviser i klartekst", "Manglende bakgrunnsledd, siden r-typen ikke lenger kan leses ut av besvarelsen som helhet", "En akseptabel variasjon, siden begge r-typer forekommer i norsk og begge er mulige uttaler"],
      explanation: "Feilen er at transkripsjonen motsier den bakgrunnen kandidaten selv oppga. At begge r-typer finnes i norsk, hjelper ikke: kriteriet er konsistens med egen bakgrunn, og her er kontrakten brutt av besvarelsen selv.",
    },
  ],
  'exfac03-spr-10-2': [
    {
      question: "Hva er skillekravet i beskrivelsesoppgaven?",
      options: ["At beskrivelsen skiller fonemet fra alle andre fonemer i norsk, slik at ingen annen lyd i systemet passer på den", "At beskrivelsen inneholder alle opplysninger som er sanne om lyden, også dem som ikke skiller den fra andre", "At beskrivelsen skiller mellom den fonetiske og den fonemiske formen av lyden i to atskilte ledd", "At beskrivelsen bruker de samme termene som konsonanttabellen bruker, i den rekkefølgen tabellen har"],
      explanation: "Kravet er at ingen annen norsk lyd skal passe på beskrivelsen din. Det er ikke et krav om fullstendighet, og det handler ikke om transkripsjonsnivåer. Terminologien skal være riktig, men det er skillet mot naboene som avgjør poenget.",
    },
    {
      question: "Hvilken rekkefølge skal akseverdiene stå i for en konsonant?",
      options: ["Stemthet, artikulasjonssted, artikulasjonsmåte", "Artikulasjonsmåte, artikulasjonssted og til slutt stemthet, slik at måten står først i setningen", "Sted, stemthet, måte", "Rekkefølgen er fri, så lenge alle tre aksene er nevnt et sted i beskrivelsen"],
      explanation: "Boka bruker stemthet, sted, måte for konsonanter og høyde, plassering, rundethet, lengde for vokaler. Rekkefølgen er ikke bare konvensjon: den virker som en sjekkliste, slik at du selv oppdager en manglende akse.",
    },
    {
      question: "Hvor mange poeng gir en halvferdig fonembeskrivelse i den nyeste poengsatte terminen?",
      options: ["Null, siden det ikke gis delpoeng", "Et halvt poeng, siden delpoeng gis når minst to av de tre aksene er riktig oppgitt av kandidaten", "Ett poeng, siden poenget knyttes til lyden og ikke til hvor presis beskrivelsen av den er", "Det avhenger av eksempelordet"],
      explanation: "Terminen oppgir 1 poeng per riktig beskrivelse og ingen delpoeng. En beskrivelse som passer på to lyder, er ikke halvveis riktig — den er ikke riktig. Eksempelordet styrker svaret, men redder ikke en beskrivelse som mangler en akse.",
    },
    {
      question: "Hva betyr leddet «apiko-» i en sammensatt stedsterm?",
      options: ["At tungespissen er den aktive artikulatoren", "At lyden lages ved tannvollen, altså den harde flaten rett bak fortennene i overkjeven", "At tungebladet er den aktive artikulatoren", "At lyden er retrofleks, siden retroflekser alltid beskrives med et sammensatt stedsledd"],
      explanation: "Førsteleddet i en sammensatt stedsterm navngir den aktive artikulatoren: apiko- er tungespissen, lamino- tungebladet og dorso- tungeryggen. Andreleddet navngir den passive flaten, for eksempel alveolar. Retrofleks er en egen stedsbetegnelse, ikke det samme som apiko-.",
    },
    {
      question: "Hvilken lyd svarer til beskrivelsen «trang, midtre, rundet, lang»?",
      options: ["Den lange vokalen i hus", "Den lange vokalen i ny", "Den korte vokalen i sønn", "Den lange vokalen i bok"],
      explanation: "Beskrivelsen svarer til den trange, midtre, rundede lange vokalen, som i hus. Vokalen i ny er fremre, vokalen i sønn er lavere og fremre, og vokalen i bok er bakre.",
    },
    {
      question: "Hva er nabolydkontrollen?",
      options: ["At du prøver beskrivelsen mot de lydene som deler alle akser bortsett fra én, og legger til verdier til ingen av dem passer", "At du sammenlikner din egen uttale av lyden med den uttalen som er oppgitt i en ordbok eller i en tabell", "At du kontrollerer at eksempelordet ditt inneholder lyden i ansatsen av en trykksterk stavelse", "At du sjekker om lyden finnes i nabospråkene, siden typologisk sammenlikning styrker beskrivelsen"],
      explanation: "Kontrollen består i å finne de nærmeste lydene i systemet og sjekke at beskrivelsen din utelukker dem. Eksempelordet er et eget trinn, og hverken ordbøker eller nabospråk er en del av kriteriet.",
    },
    {
      question: "Hva krever sensorveiledningen når en sammensatt term skal forklares?",
      options: ["At systematikken bak termen er forklart, ikke bare nevnt", "At kandidaten oppgir hvilket kapittel i pensum termen er hentet fra, og hvordan den er definert der", "At termen oversettes til norsk med et hverdagslig uttrykk som en leser uten fagbakgrunn forstår", "Minst fem eksempelord per lyd"],
      explanation: "Kravet er at kandidaten viser hva leddene i termen gjør, ikke bare at hun kan gjengi dem. En oversettelse til hverdagsspråk er ikke det samme som å forklare systemet, og antallet eksempler bestemmes av bestillingen i den enkelte oppgaven.",
    },
    {
      question: "Hva skiller lyden i sjø fra lyden i kjede hos en taler som har begge?",
      options: ["Artikulasjonsstedet", "Stemtheten, siden den ene lages med svingende stemmebånd og den andre uten dem", "Artikulasjonsmåten, siden den ene er en frikativ og den andre en approksimant uten friksjonsstøy", "Lengden"],
      explanation: "Begge er ustemte frikativer, og det er stedet som skiller dem: postalveolar mot palatal. Hos talere der de to har falt sammen, finnes skillet ikke i systemet i det hele tatt.",
    },
    {
      question: "En kandidat skriver «k er en ustemt velar plosiv» og stopper der. Hva mangler for full uttelling i den formen som ber om systematikken?",
      options: ["En forklaring av hva hvert ledd i termen betyr", "En fonemisk transkripsjon av eksempelordet, slik at sensor kan se lyden i sin naturlige omgivelse", "En opplysning om kandidatens språklige bakgrunn, siden lyden varierer mellom talemålene", "En henvisning til veiledningen"],
      explanation: "Beskrivelsen er riktig, men den er gjengitt og ikke forklart. Bakgrunnsleddet hører til transkripsjonsoppgaven, og en fonemisk transkripsjon er ikke bestilt her.",
    },
    {
      question: "Hvorfor lønner det seg å legge ved et eksempelord?",
      options: ["Fordi ordet gjør beskrivelsen etterprøvbar for sensor, og fordi det koster deg noen få sekunder å skrive det ned", "Fordi eksempelordet erstatter nabolydkontrollen når du er usikker på hvilken akse som skiller to lyder fra hverandre", "Fordi bestillingen alltid ber om minst tre ord per lyd i alle terminene med denne oppgavetypen", "Fordi et eksempelord gir delpoeng når selve beskrivelsen ikke oppfyller skillekravet"],
      explanation: "Ordet viser at lyden finnes i den uttalen du beskriver, og det tar sekunder å skrive. Det erstatter ingen kontroll, antallet varierer med bestillingen, og delpoeng finnes ikke i denne oppgavetypen.",
    },
    {
      question: "Bestillingen ber om tre ord som begynner med en gitt lyd. Kandidaten leverer to. Hva skjer?",
      options: ["Leddet regnes som ufullstendig, og det er den billigste feilen i emnet å unngå", "Ingenting, så lenge de to ordene er riktige og hentet fra kandidatens egen uttale av lyden", "Hele oppgaven regnes som ubesvart, siden antallet eksempler er en del av selve bestillingen", "Kandidaten får trekk på et halvt poeng"],
      explanation: "Å gi færre eksempler enn bestilt er hjemlet som en egen feil, og den koster sin andel av oppgaven — verken mer eller mindre. Trekk på et halvt poeng gjelder transkripsjon, segmentering og setningsledd, ikke antall eksempler.",
    },
    {
      question: "Hvilken beskrivelse oppfyller skillekravet?",
      options: ["Stemt retrofleks nasal, altså en nasal laget med tungespissen bøyd bakover", "Ustemt frikativ, laget med tungen et sted i den fremre delen av munnen, med tydelig friksjonsstøy", "Bakre, rundet vokal, med tungen trukket bakover og leppene tydelig avrundet under hele lyden", "Plosiv laget med tungespissen, altså med et fullstendig lukke som slippes brått"],
      explanation: "Bare den første oppgir alle tre aksene og lander på én lyd. De to neste passer på flere lyder hver, og den siste mangler stemthet og passiv artikulator, slik at både den stemte og den ustemte retroflekse plosiven passer.",
    },
    {
      question: "Hva er den vanligste grunnen til at skillekravet ikke er oppfylt?",
      options: ["At en av aksene mangler, oftest stedet for konsonanter og rundetheten for vokalenes vedkommende", "At kandidaten har brukt en engelsk term i stedet for den norske, slik at sensor må gjette hva som menes", "At kandidaten har beskrevet lyden slik den uttales i sin egen dialekt og ikke slik den står i tabellen", "For mange akseverdier i beskrivelsen"],
      explanation: "En manglende akse er den typiske årsaken, og oftest er det stedet for konsonanter og rundetheten for vokaler. For mange akseverdier er ikke et problem i seg selv — det er for få som koster poenget.",
    },
    {
      question: "Hvor mange av de seks dokumenterte terminene har beskrivelsesoppgaven?",
      options: ["3 av 6 terminer, altså halvparten av de dokumenterte terminene", "6 av 6 terminer, siden fonetikk og fonologi som saksområde er prøvd i samtlige dokumenterte terminer", "4 av 6 terminer, samme antall som transkripsjonsoppgaven og treoppgaven har i det samme materialet", "2 av 6 terminer"],
      explanation: "Beskrivelsesoppgaven står i 3 av 6 terminer. Saksområdet fonetikk og fonologi står riktignok i 6 av 6, men nevneren for et saksområde er ikke nevneren for en enkelt oppgavetype.",
    },
  ],
  'exfac03-spr-10-3': [
    {
      question: "Hvordan skiller du en fugemorf fra en genitivsendelse?",
      options: ["Fugemorfen har en rot etter seg, mens genitivs-s står ytterst i ordet", "Fugemorfen er alltid en e, mens genitivsendelsen alltid er en s i norske sammensetninger", "Fugemorfen uttales med bitrykk, mens genitivsendelsen alltid er trykklett i uttalen", "Det er ingen forskjell"],
      explanation: "Testen er hva som kommer etter: kommer det en ny rot, er s-en en fuge. Både -s- og -e- forekommer som fuge, og trykk avgjør ingenting her. De to har helt ulik funksjon, så det siste svaret er galt.",
    },
    {
      question: "Hva er trekket per feil i segmenteringsoppgaven, og hva er hvert ord verdt?",
      options: ["Trekk 0,5 poeng per feil, og 2 poeng per ord", "Trekk 1 poeng per feil, og 2 poeng per ord, slik at to feil tømmer uttellingen for det ordet", "Trekk 0,5 poeng per feil, og 5 poeng per ord, siden oppgaven er den tyngste i morfologidelen", "Ingen trekk i denne oppgavetypen"],
      explanation: "Den nyeste poengsatte terminen oppgir 2 poeng per ord og trekk 0,5 poeng per feil i segmenteringen. Trekk er oppgitt for tre ulike oppgavetyper i den terminen, ikke bare for transkripsjonen.",
    },
    {
      question: "Hva sier sensorveiledningene om oppsettet i segmenteringen?",
      options: ["Oppsettet er fritt så lenge analysen er forståelig, men merkingen må være fullstendig hele veien, morf for morf", "Oppsettet skal følge en fast tabellform med én rad per morf og egne kolonner for merkelapp og begrunnelse", "Oppsettet skal være lineært med bindestreker, siden en tabell ikke lar seg skrive inn i et digitalt svarfelt", "Oppsettet vurderes som en egen del av besvarelsen, med egne poeng for ryddighet og lesbarhet"],
      explanation: "Friheten gjelder formen, ikke innholdet: hver morf skal ha en lapp, men du velger selv om du fører lineært eller i tabell. Ryddighet gir ingen egne poeng.",
    },
    {
      question: "Hvilken merkelapp har -het i uvennligheten?",
      options: ["Avledningsformativ", "Bøyningsformativ, siden det står inne i ordet like foran den bestemte artikkelen og uttrykker en grammatisk kategori", "Sammensetningsformativ, siden det binder adjektivstammen til den bestemte formen av substantivet", "Rot"],
      explanation: "-het lager et nytt substantiv av et adjektiv, og resultatet er et eget oppslagsord. Det er testen på en avledning. Et bøyningsformativ ville gitt en ny form av samme ord, og en fuge binder to røtter.",
    },
    {
      question: "En kandidat lar to fugemorfer stå umerket i et ord på 2 poeng. Hva koster det?",
      options: ["1 poeng, altså halvparten av det ordet var verdt", "Ingenting, så lenge selve delingen av ordet i morfer er riktig gjennomført", "2 poeng, siden merkingen må være fullstendig for at analysen skal telle i det hele tatt", "0,5 poeng per ord"],
      explanation: "Trekket er 0,5 poeng per feil, og en umerket morf regnes som en feil. To umerkede morfer koster altså 1 poeng av 2. Trekket regnes per feil, ikke per ord, og hele ordet går ikke tapt.",
    },
    {
      question: "Hva er forskjellen på rot og stamme?",
      options: ["Rota er den leksikalske kjernen, stammen er det bøyningsformativet fester seg til", "Rota er den første morfen i ordet, mens stammen er den siste morfen før den bestemte artikkelen kommer", "Rota finnes bare i sammensatte ord, mens stammen er den formen enkle ord har når de står ubøyd", "De to termene betyr det samme"],
      explanation: "Stammen kan bestå av rot pluss avledninger, slik at rota i uvennligheten er venn mens stammen er uvennlighet. Plasseringen i ordet avgjør ingenting, og termene er ikke synonyme.",
    },
    {
      question: "Hva godtar den nyeste sensorveiledningen i grensetilfeller?",
      options: ["Alternative analyser, når analysen er begrunnet", "Bare den analysen som er brukt i undervisningen, siden en eksamensbesvarelse skal gjenspeile det som er gjennomgått i emnet", "At kandidaten hopper over grensetilfellet og analyserer de øvrige morfene i ordet fullstendig", "At begge føres opp uten valg"],
      explanation: "Veiledningen godtar uttrykkelig at det samme segmentet analyseres på to måter når kandidaten begrunner. Å hoppe over segmentet er derimot en umerket morf, og å unnlate å velge er svakere enn å velge og begrunne.",
    },
    {
      question: "Hva er -er i lærerne?",
      options: ["Et avledningsformativ som lager et substantiv om den som utfører handlingen", "Et bøyningsformativ som uttrykker flertall, slik -er gjør i de fleste norske substantiver", "En fugemorf mellom verbstammen og den bestemte flertallsendelsen i ordet", "En del av rota"],
      explanation: "Formen lærer er et eget oppslagsord, og det er testen på avledning. Flertallet uttrykkes av -ne ytterst. En fuge ville hatt en rot etter seg.",
    },
    {
      question: "I hvor mange av de seks dokumenterte terminene står segmenteringsoppgaven?",
      options: ["3 av 6 terminer", "6 av 6 terminer, siden morfologi som saksområde er prøvd i samtlige seks dokumenterte terminer", "4 av 6 terminer, like mange som transkripsjonsoppgaven har i det samme materialet", "2 av 6 terminer"],
      explanation: "Segmenteringsoppgaven står i 3 av 6 terminer. Morfologi som saksområde står i 6 av 6, men nevneren for et saksområde er ikke nevneren for en enkelt oppgavetype.",
    },
    {
      question: "Hva bør du gjøre først når tiden er i ferd med å gå ut i en segmenteringsoppgave?",
      options: ["Merke alle morfene, og kutte begrunnelseslinjene, siden en umerket morf koster et halvt poeng mens en manglende begrunnelse ikke gjør det", "Skrive begrunnelseslinjene først, siden de er det eneste sensorveiledningene uttrykkelig ber om å se i et svar", "Sette opp tabellen ferdig, slik at analysen er forståelig selv om ikke alle morfene rekker å bli merket", "Hoppe over det siste ordet og bruke tiden på å kontrollere de foregående ordene en gang til"],
      explanation: "En umerket morf koster et halvt poeng, mens en manglende begrunnelse bare gjør et grensetilfelle sårbart. Merkingen er derfor det siste du kutter, og et ubesvart ord gir null av de to poengene det var verdt.",
    },
    {
      question: "Hvilket av disse ordene har to fugemorfer?",
      options: ["arbeidsledighetstrygden", "matvareprisene", "uforglemmelige", "beskyttelsen"],
      explanation: "I arbeidsledighetstrygden binder -s- to ganger: etter arbeid og etter -het. Matvareprisene setter tre røtter rett mot hverandre uten fuge, og de to siste ordene er avledninger uten sammensetning.",
    },
    {
      question: "Hva er den vanligste grunnen til at en riktig segmentering likevel taper poeng?",
      options: ["At merkingen er ufullstendig", "At kandidaten har brukt lineær føring i stedet for tabell, slik at analysen blir vanskeligere å lese for sensor", "At kandidaten har valgt den analysen av et grensetilfelle som sensorveiledningen ikke selv bruker i sitt eget svar", "For mange morfer i analysen"],
      explanation: "Tapene kommer nesten alltid fra manglende eller feil merkelapper, ikke fra selve delingen. Føringsformen er fri, og en begrunnet alternativ analyse godtas uttrykkelig.",
    },
  ],
  'exfac03-spr-10-4': [
    {
      question: "Hva sier den nyeste sensorveiledningen om trær som ikke er helt korrekte?",
      options: ["At et tre som er nær korrekt får full uttelling, med trekk et halvt poeng per feilanalysert ledd", "At treet må være fullstendig riktig for å telle", "At trær vurderes samlet med de øvrige syntaksoppgavene, slik at feil ett sted kan veies opp et annet sted", "At kandidaten bør levere leddanalyse i stedet når hun er usikker på strukturen i setningen"],
      explanation: "Veiledningen slår fast at perfekte trær er sjeldne og at et nær korrekt tre gir full uttelling, med trekk 0,5 poeng per feilanalysert ledd. Det er nettopp derfor oppgaven er lønnsom å forsøke seg på.",
    },
    {
      question: "Hvor mye trekkes per feilanalysert setningsledd?",
      options: ["0,5 poeng", "1 poeng for hvert ledd som er merket med feil funksjon, og et halvt poeng for ledd som mangler", "2 poeng, siden hvert ledd i en analyseoppgave vurderes som en egen deloppgave med egen uttelling", "Ingen trekk"],
      explanation: "Trekket er et halvt poeng per feilanalysert ledd, og et ledd som ikke er analysert i det hele tatt, teller som feilanalysert. Trekk er dokumentert for tre ulike oppgavetyper i den nyeste terminen, deriblant de syntaktiske.",
    },
    {
      question: "Hvordan finner du ut hvor mange setninger en periode består av?",
      options: ["Ved å telle finitte verbal", "Ved å telle kommaene, siden hver leddsetning i norsk skal skilles fra oversetningen med komma", "Ved å telle subjunksjonalene, siden hver leddsetning innledes av et slikt ord i norsk", "Ved å telle alle verbformene"],
      explanation: "Hver finitt verbform svarer til én setning. Kommaer er ortografi, infinitte former hører til en setning de ikke selv konstituerer, og enkelte leddsetninger mangler subjunksjonal.",
    },
    {
      question: "Hvor i treet henger en relativsetning som beskriver subjektet?",
      options: ["Inne i SUBJEKT, som en del av subjektsfrasen, fordi den sier noe om substantivet der", "Under helsetningen, som eget ledd ved siden av subjektet", "Under FINITT VERBAL, siden den utdyper handlingen som subjektet utfører i setningen", "Som ADVERBIAL, siden relativsetninger tilfører opplysninger på samme måte som adverbialer gjør"],
      explanation: "Relativsetningen sier noe om substantivet i subjektet og er en del av den frasen. Erstatningstesten viser det: byttes subjektet med ett pronomen, følger relativsetningen med.",
    },
    {
      question: "Hva er forskjellen på funksjon og frasekategori i treet?",
      options: ["Funksjonen er rollen leddet spiller, frasekategorien er hva leddet er bygd av", "Funksjonen bestemmes av hodet i frasen, mens frasekategorien bestemmes av hvilken plass leddet har i setningsskjemaet", "Funksjonen skrives nederst i treet ved siden av ordklassen, mens frasekategorien står øverst under helsetningen", "De er to navn på det samme"],
      explanation: "Funksjonen står over, frasekategorien under, og ordklassen nederst. Det er hodet som bestemmer frasekategorien, ikke funksjonen — og å skrive NP der SUBJEKT skulle stått, er den vanligste enkeltfeilen i oppgaven.",
    },
    {
      question: "En kandidat hekter en preposisjonsfrase på verbet i stedet for på objektet, og skriver én setning om hvorfor. Hva sier materialet om det?",
      options: ["At en alternativ tilhekting kan telle positivt når den er argumentert for", "At avvikende tilhekting alltid trekker et halvt poeng, uansett om kandidaten begrunner valget sitt eller ikke", "At sensor skal se bort fra argumentet og bare vurdere om treet stemmer med den analysen veiledningen selv bruker", "At kandidaten bør tegne begge trærne uten å velge mellom dem"],
      explanation: "En avvikende tilhekting er hjemlet som noe som til og med kan være et pluss når kandidaten argumenterer for den med erstatning og flytting. Uten argumentet er den bare et avvik.",
    },
    {
      question: "Hvilke to tester bruker du i et tilhektingsargument?",
      options: ["Erstatningstesten og flyttetesten", "Samsvarstesten og passiveringstesten, som begge viser hvilket ledd som er subjekt i setningen", "Spørsmålstesten og strykningstesten, som viser om leddet er nødvendig for at setningen skal være grammatisk", "Sonoritetstesten"],
      explanation: "Erstatningstesten viser om preposisjonsfrasen følger med når hele frasen byttes med ett pronomen, og flyttetesten viser om den kan stå fremst alene. De øvrige testene hører til subjektsidentifisering, argumentanalyse og fonologi.",
    },
    {
      question: "Hva er den dyreste feilen i treoppgaven?",
      options: ["Å hoppe over hele oppgaven, siden et nær korrekt tre gir full uttelling og et blankt svar gir null", "Å merke feil frasekategori nederst i treet", "Å tegne treet ovenfra og ned i stedet for nedenfra og opp, slik at strukturen ikke får plass på arket", "Å bruke etiketten leddsetning uten å oppgi hvilken type leddsetning det er"],
      explanation: "Oppgaven er verdt 10 av 65 poeng, og et nær korrekt tre gir full uttelling — så et blankt svar er det eneste som garantert gir null. De øvrige feilene koster et halvt poeng hver, eller ingenting.",
    },
    {
      question: "Hva skiller leddanalysen uten tre fra treoppgaven?",
      options: ["Leddanalysen viser bare det øverste laget, med innleiringene som ett ledd hver", "Leddanalysen krever at kandidaten oppgir frasekategori for hvert ledd, mens treet bare krever funksjonsetiketter på leddene", "Leddanalysen har ikke trekk for feil, siden den er en billigere oppgave enn treoppgaven i den samme terminen", "Leddanalysen gjelder bare setninger uten leddsetninger"],
      explanation: "Leddanalysen merker leddene på helsetningsnivå, og en innleiring nevnes som ett ledd med sin funksjon i stedet for å brettes ut. Trekket er det samme, og setninger med innleiring kan godt analyseres på denne måten.",
    },
    {
      question: "Hvilken etikett får ordet at i en at-setning som er direkte objekt?",
      options: ["SUBJUNKSJONAL", "DIREKTE OBJEKT, siden det er dette ordet som innleder leddsetningen som fyller objektsfunksjonen i setningen", "ADVERBIAL, siden ordet knytter leddsetningen til oversetningen på samme måte som et adverbial gjør", "Ordet får ingen etikett"],
      explanation: "Subjunksjonalen får sin egen etikett i treet, og funksjonen DIREKTE OBJEKT hører til hele leddsetningen, ikke til innledningsordet. Alle ord skal henge et sted i treet.",
    },
    {
      question: "Hva bør du gjøre først hvis du er i tvil om du rekker hele treet?",
      options: ["Skrive leddanalysen på helsetningsnivå, og bygge treet utover fra den", "Tegne så mye av treet du rekker ovenfra og ned, og markere tydelig hvor analysen stopper opp i setningen", "Hoppe over oppgaven og bruke tiden på de redegjørende oppgavene, som er raskere å skrive ferdig", "Beskrive strukturen i ord i stedet for å tegne den"],
      explanation: "Med leddanalysen på plass har du et fullstendig svar på det øverste laget etter et par minutter, og alt du rekker etterpå er gevinst. En strukturbeskrivelse i ord er ikke et svar der et tre er bestilt.",
    },
    {
      question: "I hvor mange av de seks dokumenterte terminene står treoppgaven?",
      options: ["4 av 6 terminer", "6 av 6 terminer, siden syntaks som saksområde er prøvd i samtlige seks dokumenterte terminer", "3 av 6 terminer, like mange som segmenteringsoppgaven har i det samme materialet", "2 av 6 terminer"],
      explanation: "Treoppgaven står i 4 av 6 terminer. Syntaks som saksområde står i 6 av 6 og er 10 av 45 spørsmål, men nevneren for et saksområde er ikke nevneren for en enkelt oppgavetype.",
    },
    {
      question: "Hvordan skiller du et subjektspredikativ fra et direkte objekt?",
      options: ["Predikativet sier noe om subjektet og kan ikke passiveres", "Predikativet står alltid sist i setningen, mens det direkte objektet står umiddelbart etter det finitte verbalet", "Predikativet er alltid en adjektivfrase, mens det direkte objektet alltid er en nominalfrase i setningen", "Predikativet kan flyttes fremst i setningen"],
      explanation: "Testen er passivering og hva leddet sier noe om. Både predikativ og objekt kan være nominalfraser, rekkefølgen varierer, og et ledd som fritt kan flyttes fremst, er typisk et adverbial.",
    },
    {
      question: "Hva vet vi om hvordan analysetrær leveres på en digital eksamen?",
      options: ["Ingenting — leveranseformen for trær står ikke noe sted i arkivet, heller ikke i den digitale terminen", "At kandidaten laster opp et fotografi av et håndtegnet tre", "At treet skal skrives som innrykket tekst i svarfeltet, slik denne boka gjør det i sine egne fasiter", "At treet kan erstattes med en leddanalyse når eksamen er digital"],
      explanation: "Den nyeste terminen er dokumentert digital, men hvordan trær leveres, står ingen steder. At veiledningens eget modellsvar er håndtegnet, sier noe om sensorens arbeidsdokument, ikke om kandidatens leveranse.",
    },
  ],
  'exfac03-spr-10-5': [
    {
      question: "I hvor mange av de dokumenterte terminene står redegjørelsesoppgaven?",
      options: ["6 av 6 terminer, altså i samtlige dokumenterte terminer, som gjør den til emnets vanligste byggekloss", "4 av 6 terminer", "3 av 6 terminer", "2 av 6 terminer"],
      explanation: "Redegjørelsesoppgaven finnes i alle seks dokumenterte terminene, i formene «hva betyr begrepene», «forklar hva som skiller» og «gjør kort greie for». De lavere tallene hører til transkripsjon, segmentering og beskrivelse.",
    },
    {
      question: "Hva betyr det at «kort» er en instruks?",
      options: ["At poengsummen forteller hvor langt svaret skal være", "At sensor trekker for lange svar, siden en oppgave som besvares utover det oppgaveteksten ber om, regnes som utenfor bestillingen", "At kandidaten skal skrive stikkord i stedet for hele setninger når oppgaven er billig", "At oppgaven skal besvares uten egne eksempler, siden eksempler alltid gjør svaret lengre enn nødvendig"],
      explanation: "Ordet er en opplysning om vekting: en to-poengs oppgave er besvart med fem linjer. Det trekkes ikke for lengde i seg selv — kostnaden kommer et annet sted i settet, i den oppgaven du ikke rakk. Stikkordsstil og eksempelfrie svar er noe annet.",
    },
    {
      question: "Hvilken term kreves for full uttelling i språkendringsoppgaven?",
      options: ["Betinga lydendringer", "Assimilasjon, som er den vanligste av lydendringstypene og den som oftest forekommer i materialet", "Diakroni, siden oppgaven handler om utviklingen av språket over tid og ikke om ett tidspunkt", "Omlyd"],
      explanation: "Fellesbetegnelsen betinga lydendringer er hjemlet som et krav for full uttelling. De andre er navn på enkelttyper eller på beskrivelsesmåten, og de kan ikke erstatte fellesbetegnelsen.",
    },
    {
      question: "Hvilke to termer må stå i svaret om norsk ordstilling i fortellende helsetninger?",
      options: ["Temaposisjon og finittposisjon", "Subjekt og finitt verbal, siden det er disse to leddene som bytter plass når et annet ledd står først i setningen", "Helsetning og leddsetning, siden ordstillingen er ulik i de to setningstypene og skillet må være tydelig", "Argument og adjunkt"],
      explanation: "Uttellingen avhenger uttrykkelig av at posisjonstermene brukes, og av at kandidaten sier hvilken flytting som er obligatorisk. Leddnavn og setningstyper er riktige begreper i andre oppgaver, men de er ikke kravet her.",
    },
    {
      question: "Hvilken av de to flyttingene i norsk setningsskjema er obligatorisk?",
      options: ["Flyttingen til finittposisjonen", "Flyttingen til temaposisjonen, siden den første plassen i en fortellende helsetning alltid må fylles av et ledd", "Begge er obligatoriske, siden begge posisjonene alltid er fylt i en fortellende helsetning på norsk", "Ingen av dem"],
      explanation: "Det finitte verbalet må stå i finittposisjon. Temaposisjonen skal riktignok fylles, men hvilket ledd som havner der, er et valg — og å bytte om på dette er den vanligste feilen i oppgaven.",
    },
    {
      question: "En besvarelse forklarer performativer godt, men nevner aldri talerens autorisasjon. Hva skjer?",
      options: ["Omtrent halve uttellingen faller bort, siden oppgaven har to halvdeler med hver sin obligatoriske komponent", "Ingenting, så lenge termen performativ er brukt og forklart med egne eksempler underveis", "Hele oppgaven regnes som ubesvart", "Det trekkes 0,5 poeng, slik trekkregelen fungerer i de andre oppgavetypene i den samme terminen"],
      explanation: "Uttellingen er delt i to halvdeler med hvert sitt krav, og en manglende komponent koster sin halvdel. Trekk på et halvt poeng gjelder transkripsjon, segmentering og setningsledd, ikke manglende termer.",
    },
    {
      question: "Hva er kontrastbegrepet til en performativ ytring?",
      options: ["Den konstative ytringen", "Den implisitte performativen, altså den ytringen som utfører handlingen uten å nevne den med et eget verb", "Den deiktiske ytringen, som ikke kan tolkes uten opplysninger om hvem som snakker, hvor og når", "Ytringen som bryter en av maksimene i samarbeidsprinsippet, og dermed skaper en implikatur"],
      explanation: "Konstativen beskriver noe som kan være sant eller usant, og det er nettopp den kontrasten som gjør definisjonen av performativ presis. Implisitte performativer er en undertype, ikke en kontrast.",
    },
    {
      question: "Hva er det tredje trinnet i firetrinnsformen?",
      options: ["Å sette definisjonen opp mot kontrastbegrepet", "Å gi minst tre egne eksempler på begrepet, slik at sensor ser at kandidaten kan bruke det selv", "Å oppgi hvilket kapittel i emnet begrepet hører hjemme i, slik at avgrensningen blir tydelig", "Å konkludere"],
      explanation: "Trinnene er avgrens, definer, sett opp mot kontrastbegrepet, presiser ett grensetilfelle. Egne eksempler hører til egeneksempel-sjangeren, og en redegjørelse har ingen konklusjon å ta feil av.",
    },
    {
      question: "Hvor mange poeng gir den korteste redegjørelsen i materialet, og hvilken er det?",
      options: ["2 av 49 poeng, for forskjellen mellom synkroni og diakroni", "5 av 49 poeng, for redegjørelsen om samarbeidsprinsippet og de fire maksimene, med ett poeng per maksime", "8 av 65 poeng, for spørsmålet om språkhandlinger og de betingelsene som må være oppfylt", "1 poeng, for hver enkelt fonembeskrivelse"],
      explanation: "Synkroni mot diakroni er den korteste og gir 2 av 49 poeng. Maksimene gir 5 av 49 poeng, pragmatikkoppgaven 8 av 65, og fonembeskrivelsene hører til beskrivelsessjangeren.",
    },
    {
      question: "Hva er hjemmelen for at begrunnelsen skal stå før konklusjonen?",
      options: ["Poengfordelingen selv, som gir mer for forklaringen enn for svaret", "En anbefaling om akademisk skrivestil som står i innledningen til alle de fire sensorveiledningene i materialet", "At sensor leser besvarelsene i tilfeldig rekkefølge og trenger konklusjonen sist for å huske den", "At oppgavetekstene formulerer seg slik"],
      explanation: "I den nyeste terminen fordeles 1 poeng for svaret og 3 for forklaringen i typologioppgaven, og flere konklusjoner godtas når de er godt begrunnet. Det er en vektingsregel, ikke en stilanbefaling.",
    },
    {
      question: "Hvilken term kreves i oppgaven om det usynlige subjektet i infinitivssetninger?",
      options: ["Kontroll", "Subjunksjonal, siden infinitivssetninger innledes av et eget ord som binder dem til oversetningen", "Infinitt verbal, siden det er verbformen i infinitivssetningen som gjør subjektet usynlig", "Argumentstruktur"],
      explanation: "Termen kontroll må stå, og kandidaten må vise hvem som kontrollerer det usynlige subjektet i hver enkelt setning, og at kontrolløren skifter med verbet. De andre termene er riktige begreper i andre sammenhenger.",
    },
    {
      question: "Hvor mange obligatoriske termer har materialet, og hva er nevneren for sensorkrav?",
      options: ["Seks termer, og nevneren er 4 sensorveiledninger", "Seks termer, og nevneren er 6 terminer, siden hver termin har sin egen obligatoriske term i settet", "Fire termer, én per sensorveiledning i materialet, slik at hver veiledning bidrar med nøyaktig én", "Seksten termer"],
      explanation: "De seks termene er hjemlet i navngitte sensorveiledninger, og nevneren for alt som gjelder hva sensor belønner eller straffer, er de 4 veiledningene. Tallet seksten er antallet feilkoder, ikke termer.",
    },
    {
      question: "Hva er det beste grepet når du oppdager at du har skrevet en side på en to-poengs oppgave?",
      options: ["Gå videre umiddelbart, og bruk minuttene på den dyreste ubesvarte oppgaven", "Stryk halvparten av teksten, slik at svaret får den lengden poengsummen tilsier, og skriv det om på nytt", "Fortsett i samme lengde på de øvrige oppgavene, slik at besvarelsen blir jevn i formen hele veien", "Legg til en konklusjon"],
      explanation: "Tiden er allerede brukt, og den henter du ikke inn ved å redigere. Kostnaden ligger i oppgaven du ennå ikke har skrevet, og den er ofte verdt fem ganger så mye.",
    },
    {
      question: "Hva menes med at en term skal brukes OG forklares?",
      options: ["At termen må stå i teksten, og at svaret må vise hva den betyr", "At termen må stå både i innledningen og i konklusjonen, slik at sensor ser at kandidaten har den med seg hele veien", "At termen må oversettes til hverdagsspråk i en parentes rett etter at den er brukt første gang", "At termen må defineres med de samme ordene som i pensum"],
      explanation: "Kravet er hjemlet i pragmatikkoppgaven: ordet skal stå der, og svaret skal vise at kandidaten vet hva det dekker. Gjentakelse, oversettelse og ordrett definisjon er ikke det samme som forklaring.",
    },
  ],
  'exfac03-spr-10-6': [
    {
      question: "Hva er trinn 3 i egeneksempel-formen?",
      options: ["Å si eksplisitt hvilken del av eksempelet som svarer til hvilken del av definisjonen", "Å gi minst to eksempler på hvert punkt, siden bestillingene i materialet nesten alltid ber om flere enn ett", "Å oppgi hvilket saksområde eksempelet er hentet fra, slik at sensor ser at kandidaten dekker bredden", "Å konkludere"],
      explanation: "Trinnene er navngi, gi, koble og motprøve, og koblingssetningen er trinn 3. Antall eksempler styres av bestillingen, ikke av formen, og en egeneksempel-oppgave har ingen konklusjon å trekke.",
    },
    {
      question: "Hva sier en av de fire sensorveiledningene om begrunnelse av egne eksempler?",
      options: ["At begrunnede eksempler teller litt mer, også når begrunnelse ikke er bedt om", "At begrunnelse bare teller når oppgaveteksten uttrykkelig ber om den, siden kandidaten ellers svarer på noe annet enn bestillingen", "At begrunnelser bør holdes korte, siden eksempelet i seg selv viser om kandidaten har forstått fenomenet", "At egne eksempler teller mindre enn eksempler fra undervisningen"],
      explanation: "Veiledningen sier at svar med begrunnelse av egne eksempler teller litt mer selv når begrunnelse ikke er bedt om, fordi kandidaten da viser sin forståelse. Egne eksempler er dessuten det bestillingen etterspør, ikke det motsatte.",
    },
    {
      question: "Hva er konversjon?",
      options: ["Ordklasseskifte uten formativ", "Ordklasseskifte ved hjelp av et avledningsformativ som legges til stammen, som når -er lager et substantiv av et verb", "Sammensmelting av to ord til ett, der bare deler av hvert av de to opprinnelige ordene er med", "Nedkorting av et langt ord"],
      explanation: "Ved konversjon skifter ordklassen uten at noe legges til, som i et hopp av å hoppe. Legges det til et formativ, er det avledning. Sammensmelting av to ord er sammentrekning, og nedkorting av et langt ord er forkorting.",
    },
    {
      question: "En oppgave ber om to eksempler på hver av fem orddanningsmåter. Hvor mange eksempler skal svaret ha?",
      options: ["Ti", "Fem, siden ett godt begrunnet eksempel per måte viser den samme forståelsen som to gjør", "Så mange som kandidaten rekker, siden antallet er en anbefaling og ikke et krav i bestillingen", "To"],
      explanation: "Antallet er en del av bestillingen: to ganger fem er ti. Å levere færre eksempler enn bestilt er hjemlet som en egen feil, og den koster sin andel av oppgaven.",
    },
    {
      question: "Hva er motprøven?",
      options: ["Setningen som sier hva som ville gjort eksempelet til et dårlig eksempel", "Kontrollen der du prøver eksempelet mot hvert enkelt krav i spesifikasjonen før du skriver det inn i besvarelsen", "Et ekstra eksempel som viser det motsatte fenomenet, slik at kontrasten mellom de to blir tydelig for sensor", "Testen som avgjør om to ord utgjør et minimalt par"],
      explanation: "Motprøven er trinn 4 og viser at du kjenner grensen for begrepet. Kontrollen mot spesifikasjonen er noe annet, og et kontrasteksempel er et pluss, men ikke det motprøven er.",
    },
    {
      question: "Hvorfor er det risikabelt å bruke eksemplene fra undervisningen?",
      options: ["Fordi bestillingen ofte ber om et ord du velger selv, og en veiledning ber om egne formuleringer", "Fordi eksemplene fra undervisningen som regel er konstruert for et annet formål enn det oppgaven spør etter, og derfor sjelden passer", "Fordi sensor kjenner igjen eksemplene og trekker for manglende originalitet i besvarelsen som helhet", "Fordi de er for enkle"],
      explanation: "Bestillingen «et ord du velger selv» går igjen i fem av de seks terminene, og en av veiledningene ber uttrykkelig om egne formuleringer. Det handler om bestillingen, ikke om at eksemplene er dårlige.",
    },
    {
      question: "Hva bør du gjøre først i en punktlisteoppgave med fem punkter?",
      options: ["Skrive ett kort svar med én begrunnelseslinje på hvert punkt, og forbedre etterpå", "Skrive det beste mulige svaret på det første punktet, slik at sensor får et godt inntrykk av besvarelsen med en gang", "Velge ut de tre punktene du kan best, og bruke tiden på dem i stedet for å spre den tynt utover", "Lese hele settet på nytt"],
      explanation: "Et ubesvart punkt koster hele sin andel, mens et kort svar henter det meste av den. Å velge bort punkter er den dyreste varianten av å levere færre svar enn bestilt.",
    },
    {
      question: "Hvilket av disse er et minimalt par?",
      options: ["takk og tikk", "hus og huset", "løpe og løper", "bar i betydningen skjenkested og bar som verbform i fortid"],
      explanation: "I takk og tikk er alt likt bortsett fra vokalen, og ordene betyr ulike ting. De to neste skiller seg ved et helt morfem, og det siste paret er ett og samme ordbilde med to betydninger.",
    },
    {
      question: "Hva viser et ord med to ulike allofoner av samme fonem?",
      options: ["At den samme betydningsskillende enheten realiseres ulikt i ulike omgivelser", "At ordet inneholder to fonemer som ligner hverandre så mye at de er vanskelige å skille i vanlig tale", "At kandidaten kan transkribere ordet på to ulike måter, avhengig av hvilken bakgrunn hun oppgir", "At ordet er sammensatt"],
      explanation: "Poenget er at én enhet i systemet har flere realiseringer, hver bundet til sin omgivelse. To lyder som ligner hverandre, kan godt være to ulike fonemer, og sammensetning er en morfologisk egenskap.",
    },
    {
      question: "Hva er det vanligste problemet med et eksempel som «ser riktig ut»?",
      options: ["At det oppfyller noen av kravene i spesifikasjonen, men ikke alle", "At det er hentet fra et annet saksområde enn det oppgaven gjelder, slik at koblingen til definisjonen blir umulig å skrive", "At det er for kort til at sensor kan se hvilken del av ordet som skal svare til hvilken del av definisjonen", "At det mangler kilde"],
      explanation: "En spesifikasjon med tre krav er tre ting eksempelet må klare samtidig, og det er lett å finne noe som klarer to. Derfor lønner det seg å stryke under kravene og kontrollere ett om gangen.",
    },
    {
      question: "Hva er forskjellen på homofoni og homografi?",
      options: ["Homofoni er lik uttale og ulik skrivemåte, homografi er lik skrivemåte og ulik uttale", "Homofoni gjelder ord med samme opprinnelse, mens homografi gjelder ord som tilfeldigvis er blitt like i skrift over tid", "Homofoni gjelder to betydninger av samme ord, mens homografi gjelder to ord som har smeltet sammen til én form", "De to termene betyr det samme"],
      explanation: "Skillet går på hvilket medium likheten gjelder. Opprinnelse er kriteriet som skiller homonymi fra polysemi, og de to termene er ikke synonyme.",
    },
    {
      question: "Hva bør du gjøre når du forkaster et eksempel underveis?",
      options: ["Skrive ned det forkastede eksempelet og hvorfor det ikke holdt", "Stryke det helt, siden en besvarelse med forkastede eksempler virker uryddig og trekker ned helhetsinntrykket", "La det stå uten kommentar, slik at sensor selv kan vurdere om det likevel oppfyller spesifikasjonen", "Bytte til et enklere punkt"],
      explanation: "Et forkastet eksempel med begrunnelse viser testen i arbeid og er et argument, ikke en feil. Et eksempel som står uten kommentar, leses derimot som et forsøk på å oppfylle spesifikasjonen.",
    },
  ],
  'exfac03-spr-10-7': [
    {
      question: "Hvordan fordeles poengene i den typologiske klassifiseringsoppgaven i den nyeste terminen?",
      options: ["1 poeng for riktig svar og 3 for forklaringen", "2 poeng for riktig svar og 2 for forklaringen, slik at de to delene av oppgaven veier like tungt", "4 poeng for riktig svar, siden konklusjonen er det eneste som kan kontrolleres objektivt av sensor", "1 poeng for hver datalinje kandidaten tester hypotesen sin mot i besvarelsen"],
      explanation: "Fordelingen er 1 og 3, og begrunnelsen som oppgis, er at det er femti femti sjanse for å gjette riktig. Det er altså forklaringen som bærer oppgaven.",
    },
    {
      question: "Hva sier den nyeste sensorveiledningen om ulike konklusjoner i synonymioppgaven?",
      options: ["At flere ulike svar kan aksepteres når de er godt begrunnet", "At bare den konklusjonen som veiledningen selv oppgir, gir full uttelling, siden oppgaven ellers ikke ville vært mulig å vurdere likt", "At kandidaten bør unngå å konkludere, og heller sette opp argumentene for hvert alternativ ved siden av hverandre", "At konklusjonen teller mer enn diskusjonen"],
      explanation: "Veiledningen sier at diskusjonen er viktigere enn hvilken konklusjon kandidaten lander på. Det er likevel ikke en invitasjon til å la være å konkludere — kravet er at konklusjonen er en av de forsvarlige.",
    },
    {
      question: "Hva er første trinn i femtrinnsformen?",
      options: ["Å sette opp kandidatkategoriene", "Å lese dataene grundig gjennom minst to ganger før du begynner å skrive noe som helst i besvarelsen", "Å konkludere, slik at resten av svaret kan bygges opp som en systematisk begrunnelse for konklusjonen", "Å skrive falsifiseringssetningen"],
      explanation: "Kategoriene settes opp først, fordi en kategori du ikke har nevnt, heller ikke kan være utelukket. Falsifiseringssetningen er trinn 5, og å konkludere først gjør resten av svaret til et forsvar.",
    },
    {
      question: "Hva er falsifiseringssetningen?",
      options: ["Setningen som sier hva som ville fått deg til å konkludere motsatt", "Setningen der du avviser den kategorien som er lettest å forveksle med den du har valgt, med en test som viser hvorfor", "Setningen der du oppgir hvor sikker du er på konklusjonen din, slik at sensor kan vekte svaret ditt riktig", "Setningen som innleder svaret"],
      explanation: "Den sier hva som ville endret konklusjonen, og viser dermed at konklusjonen henger på et kriterium. Å avvise en nabokategori er noe annet — det hører til trinn 2 og 3.",
    },
    {
      question: "En kandidat svarer «Dette er homonymi» og ingenting mer. Hva er dette et eksempel på?",
      options: ["Feil #8, å svare på et klassifiseringsspørsmål uten begrunnelse", "Feil #9, å tro at et klassifiseringsspørsmål har ett riktig svar, som er den vanligste feilen i denne sjangeren", "Feil #5, å hoppe over ett av oppgavens ledd, siden bestillingen har flere deler enn kandidaten har besvart", "En akseptabel besvarelse når konklusjonen er riktig"],
      explanation: "Feilen er den manglende begrunnelsen, og med 1 poeng for svaret og 3 for forklaringen koster den tre firedeler av oppgaven. Feil #9 handler om å tro at bare ett svar godtas, ikke om å svare kort.",
    },
    {
      question: "Hvorfor lønner det seg å skrive argumentet for den kategorien du forkaster?",
      options: ["Fordi diskusjonen er det som vurderes, og den viser at du kjente begge sidene", "Fordi sensor da kan gi delvis uttelling for den andre kategorien dersom konklusjonen din viser seg å være feil", "Fordi et svar med to kategorier alltid regnes som mer fullstendig enn et svar med bare én kategori", "Fordi det fyller ut svaret"],
      explanation: "Veiledningen sier at diskusjonen er viktigere enn konklusjonen, og en gjennomgang av begge kategoriene er nettopp diskusjonen. Det er ikke en forsikringsordning mot feil svar.",
    },
    {
      question: "I hvor mange terminer står klassifiseringsoppgaven, og hvor mange belegg har den?",
      options: ["3 av 6 terminer, med fire belegg, siden den nyeste terminen har to av dem", "4 av 6 terminer, med fire belegg, ett i hver av de fire terminene som har oppgavetypen dokumentert", "6 av 6 terminer, siden klassifisering inngår i de fleste saksområdene i materialet på en eller annen måte", "2 av 6 terminer"],
      explanation: "Nevneren er terminer, og en termin med to forekomster teller én gang. Derfor er det riktige tallet 3 av 6 terminer, med fire belegg — og det er en feil å skrive fire av seks terminer om denne oppgaven.",
    },
    {
      question: "Hva skiller «testen skrevet ut» fra «testen nevnt»?",
      options: ["Den utskrevne testen viser hva testen gir når den kjøres på dataene", "Den utskrevne testen er formulert som en generell regel, mens den nevnte testen bare peker på hvilket kapittel regelen står i", "Den utskrevne testen står før konklusjonen, mens den nevnte testen står etter den i besvarelsen", "Det er ingen forskjell"],
      explanation: "«Jeg har brukt strykningstesten» er en opplysning om metode; resultatet av å kjøre den på setningen er begrunnelsen. Det er resultatet som bærer poengene.",
    },
    {
      question: "Hvilken test skiller argument fra adjunkt?",
      options: ["Strykningstesten", "Passiveringstesten, som viser hvilket ledd som blir subjekt når setningen settes om til passiv form", "Flyttetesten, som viser om leddet kan stå fremst i setningen uten at den blir ugrammatisk", "Betydningstesten"],
      explanation: "Stryk leddet og vurder om setningen fortsatt er hel: da ser du om verbet krever leddet. Passivering identifiserer direkte objekt, flytting identifiserer adverbialer, og betydningstesten hører til semantikken.",
    },
    {
      question: "Hva bør et svar på en typologioppgave med fem glosserte datalinjer alltid inneholde?",
      options: ["En test av hypotesen mot hver enkelt datalinje", "En sammenlikning med norsk, slik at leseren ser hvilken av de to språkene som følger hovedmønsteret i typologien", "En opplysning om hvilket språk dataene er hentet fra, siden konklusjonen ellers ikke kan etterprøves av sensor", "Minst tre kandidatkategorier"],
      explanation: "Det er testen mot hver linje som er verdt de tre poengene i modellen med 1 og 3. Datasettene i denne boka er dessuten konstruerte, og antallet kategorier styres av konstruksjonen som undersøkes.",
    },
    {
      question: "Hva er riktig å si om korrelasjonen mellom hodeplassering i ulike konstruksjoner?",
      options: ["At den er en tendens med unntak", "At den er en lov, siden språk som setter hodet først i én konstruksjon, alltid gjør det i alle de andre også", "At den bare gjelder forholdet mellom verb og objekt, og ikke for nominalfraser eller adposisjoner", "At den er tilfeldig"],
      explanation: "Korrelasjonene presenteres som tendenser med unntak, aldri som lover — og norsk er selv et språk som ikke oppfører seg konsekvent i alle konstruksjoner.",
    },
    {
      question: "Hvorfor står boksen om at flere svar kan være riktige, etter de første oppgavene i dette kapitlet?",
      options: ["Fordi den lest først kunne blitt en invitasjon til vaghet", "Fordi rekkefølgen i kapitlet følger rekkefølgen i sensorveiledningen, der regelen omtales til slutt i vurderingen", "Fordi den bare gjelder de oppgavetypene som er behandlet i de to første oppgavene i kapitlet", "Fordi den er mindre viktig enn oppgavene"],
      explanation: "Regelen skal leses av en som allerede har ført to klassifiseringer selv, slik at den blir en presisering og ikke en unnskyldning. Kravet om å konkludere skarpt står ved lag.",
    },
  ],
  'exfac03-spr-10-8': [
    {
      question: "Hva uttrykker de fire sensorveiledningene om feil?",
      options: ["Sensors forhåndsforventninger, ikke observerte studentfeil", "Erfaringer fra tidligere sensur, samlet opp over flere terminer og gjengitt som en oversikt over hva kandidatene pleier å gjøre galt", "En statistisk oversikt over hvilke feil som forekom oftest i den terminen veiledningen gjelder for", "Krav som må være oppfylt for å bestå"],
      explanation: "Ikke ett sted i materialet rapporterer en sensor hva kandidatene faktisk gjorde. Registeret er hva veiledningene sier skal trekke. Det finnes heller ingen statistikk i materialet, og kodene er ikke beståkrav.",
    },
    {
      question: "Hvor mange koder har feilregisteret, og hva er nevneren for hjemlene?",
      options: ["Seksten koder, hjemlet i 4 sensorveiledninger", "Seksten koder, hjemlet i 6 terminer, siden hver av de dokumenterte terminene bidrar med minst én kode til registeret", "Fjorten koder, hjemlet i de to terminene som oppgir poeng og karakterskala i materialet", "Seks koder"],
      explanation: "Registeret er lukket på seksten, og nevneren for alt om hva sensor trekker for, er de fire veiledningene. To terminer har oppgavesett uten veiledning, og ingen sensorpåstand kan bygge på dem.",
    },
    {
      question: "Hvilken kode begår en kandidat som skriver «den fonemiske formen utelater det som ikke er betydningsskillende» som hele forklaringen?",
      options: ["#3", "#16, siden beskrivelsen ikke skiller de aktuelle lydene fra hverandre og derfor er for løs til å gi poeng", "#5, siden kandidaten har hoppet over ett av leddene i bestillingen ved å svare så kort på dette punktet", "#1"],
      explanation: "Utsagnet er en generell frase der forklaringen skulle navngitt konkrete tegn og omgivelser, og det er kode #3. Kode #16 gjelder fonembeskrivelser, #5 manglende ledd og #1 manglende bakgrunn.",
    },
    {
      question: "Hva er den enkleste varsellampen for kode #7?",
      options: ["Skriv tallet oppgaven ber om i margen, og tell eksemplene dine", "Les gjennom eksemplene og vurder om hvert av dem er hentet fra din egen erfaring eller fra undervisningen i emnet", "Sjekk om hvert eksempel har en begrunnelseslinje under seg, slik at sensor ser hvorfor det passer", "Tell tegnene i forklaringen"],
      explanation: "Kode #7 gjelder antall eksempler, og telling er hele kontrollen. Egne eksempler er kode #15, begrunnelseslinjer er #6, og tegntelling hører til #3.",
    },
    {
      question: "Hvilke fire koder handler om en manglende obligatorisk term?",
      options: ["#10, #11, #12 og #14", "#1, #2, #3 og #4, altså de fire første kodene i registeret, som alle gjelder transkripsjonsoppgaven i en eller annen form", "#5, #6, #7 og #8, som alle gjelder mengde og fullstendighet i besvarelsen framfor presisjon i formuleringene", "#13, #14, #15 og #16"],
      explanation: "De fire termfeilene er fellesbetegnelsen i språkendringsoppgaven, posisjonstermene, kontroll og performativ med talerens autorisasjon. Kodene #1 til #3 gjelder transkripsjon, og #5 til #8 gjelder fullstendighet og begrunnelse.",
    },
    {
      question: "En kandidat oppgir skarre-r og skriver en retrofleks nasal i transkripsjonen. Hvilken kode er det?",
      options: ["#2", "#1, siden bakgrunnsleddet ikke er detaljert nok til at sensor kan vurdere transkripsjonen mot det kandidaten faktisk har oppgitt", "#3, siden kandidaten forklarer forskjellen mellom nivåene med en generell frase i stedet for å navngi tegnene", "Ingen kode — begge deler forekommer i norsk"],
      explanation: "Bakgrunnen er oppgitt, så #1 er ikke aktuell. Feilen er at transkripsjonen motsier den bakgrunnen kandidaten selv oppga, og at begge deler finnes i norsk, er nettopp derfor kriteriet er konsistens.",
    },
    {
      question: "Hva er metafeilen kapitlet advarer mot?",
      options: ["Å lese registeret som en liste over ting andre gjør galt", "Å lære seg kodene utenat i stedet for å forstå det faglige innholdet som ligger bak hver av dem i emnet", "Å bruke for mye tid på feilregisteret i stedet for på de tunge strukturfagene, som bærer sytti prosent av poengene", "Å tro at registeret er fullstendig"],
      explanation: "De fleste kodene rammer besvarelser der fagkunnskapen er på plass — det er derfor de er dyre. Registeret er dessuten lukket på seksten koder, så det er ikke en feil å tro at registeret er fullstendig.",
    },
    {
      question: "Hvilken kontroll fanger flest koder på kortest tid?",
      options: ["Å telle leddene i oppgaveteksten mot avsnittene i svaret", "Å lese hele besvarelsen høyt for seg selv til slutt, slik at formuleringer som henger dårlig sammen, blir hørbare", "Å kontrollere at alle IPA-tegnene er riktig limt inn fra det vedlagte dokumentet før innlevering", "Å telle ordene i hvert svar"],
      explanation: "Tellingen tar et par minutter og fanger både manglende oppgaveledd og for få eksempler. Høytlesing og tegnkontroll er nyttige, men de fanger ingen bestemt kode; ordtelling fanger ingenting.",
    },
    {
      question: "Hva er kode #9?",
      options: ["Å tro at et klassifiseringsspørsmål har ett riktig svar", "Å svare på et klassifiseringsspørsmål uten begrunnelse, slik at bare det ene av de fire poengene i oppgaven kan hentes", "Å konkludere skarpt i stedet for å veie de to kategoriene mot hverandre i en drøfting", "Å gjengi lærebokas eksempler"],
      explanation: "Kode #9 er troen på at bare ett svar godtas; den nyeste veiledningen godtar flere konklusjoner når de er begrunnet. Manglende begrunnelse er #8, og en skarp begrunnet konklusjon er et fullgodt toppsvar.",
    },
    {
      question: "Hvilken kode rammer en beskrivelse som passer på flere lyder samtidig?",
      options: ["#16", "#4, siden kandidaten har brukt fagtermene uten å forklare den systematikken de bygger på", "#13, siden definisjonen er for vid og derfor ikke skiller begrepet fra nabobegrepet i systemet", "#8"],
      explanation: "Kode #16 er skillekravet: beskrivelsen skal skille fonemet fra alle andre fonemer i norsk, og det gis ingen delpoeng. Kode #4 gjelder uforklart systematikk, #13 synonymi og #8 klassifisering.",
    },
    {
      question: "Hva kjennetegner utdragene i den kalde banken til slutt i kapitlet?",
      options: ["De fleste av dem er faglig riktige, og det er nettopp derfor de er farlige", "De inneholder faglige feil som er vanskelige å oppdage uten at man kjenner det aktuelle saksområdet svært godt", "De er hentet fra ekte besvarelser, slik at leseren møter formuleringer som faktisk er skrevet på eksamen", "De bryter to koder hver"],
      explanation: "Poenget er at svarhåndverket svikter selv om fagkunnskapen er på plass. Alle utdrag i denne boka er skrevet av oss, og i den kalde banken bryter hvert utdrag én kode.",
    },
    {
      question: "Hvilken kode begår en kandidat som lar en fugemorf stå umerket i en segmentering?",
      options: ["#5", "#9, siden kandidaten behandler et grensetilfelle som om det bare fantes én mulig analyse av segmentet", "#7, siden antallet merkede morfer er lavere enn det antallet oppgaven faktisk ber om å få merket", "#16"],
      explanation: "En umerket morf er et oppgaveledd som ikke er levert, altså kode #5, og trekket er et halvt poeng. Kode #7 gjelder antall eksempler, ikke antall merkelapper.",
    },
    {
      question: "Hva er det minste grepet som retter kode #10?",
      options: ["Å sette fellesbetegnelsen inn i den siste setningen i svaret", "Å omtale hver av lydendringene med både typenavn og omgivelse, slik at forklaringen blir fullstendig for hver av dem", "Å legge til et eget eksempel på hver av de fire endringstypene som er nevnt i oppgaveteksten", "Å bytte ut typenavnene"],
      explanation: "Kode #10 er den manglende fellesbetegnelsen, og botemiddelet er to ord i siste setning. Omgivelser og egne eksempler styrker svaret, men de erstatter ikke termen.",
    },
    {
      question: "Hvorfor er termfeilene beskrevet som de mest irriterende i registeret?",
      options: ["Fordi innholdet ofte er riktig, og uttellingen likevel reduseres", "Fordi de rammer de dyreste oppgavene i settet, og derfor koster flere poeng enn noen av de andre kodene gjør", "Fordi de er umulige å oppdage i egen tekst uten at man har lest sensorveiledningene selv", "Fordi de forekommer oftest"],
      explanation: "En kandidat kan beskrive ordstillingen helt korrekt og likevel miste uttelling fordi to ord ikke står der. De kan dessuten oppdages på fem sekunder med en understrekingskontroll, og hvor ofte de forekommer, vet vi ingenting om.",
    },
    {
      question: "Hva er kode #15, og hva er botemiddelet?",
      options: ["Å gjengi lærebokas eksempler i stedet for egne, og botemiddelet er forberedelse", "Å bruke for mange egne eksempler i stedet for de standardeksemplene som er gjennomgått i undervisningen i emnet", "Å gi eksempler uten begrunnelse, og botemiddelet er å legge til én linje under hvert eksempel i svaret", "Å levere færre eksempler enn bestilt"],
      explanation: "Bestillingen «et ord du velger selv» går igjen i fem av de seks terminene. Botemiddelet er å ha to eller tre egne eksempler klare per saksområde før eksamen, siden det er de gjennomgåtte som sitter løsest under press.",
    },
    {
      question: "Hva er hensikten med omskrivingsøvelsen?",
      options: ["Å vise hvor lite som skal til for å rette feilen", "Å gi leseren en ferdig formulering som kan brukes ordrett i besvarelsen når den samme oppgavetypen dukker opp", "Å teste om leseren kan gjenkjenne hvilken sensorveiledning kravet i hver enkelt passasje er hentet fra", "Å øve inn de seksten kodenes numre"],
      explanation: "Den sterke versjonen er den samme besvarelsen med ett grep lagt til, ikke en fasit å kopiere. Poenget er at rettelsene er små, ikke at formuleringene skal gjenbrukes.",
    },
  ],
  'exfac03-spr-10-9': [
    {
      question: "Hva er poenggrensen for E i den nyeste dokumenterte terminen?",
      options: ["30 av 65 poeng", "20 av 49 poeng, som var grensen for bestått i den terminen der skalaen fortsatt var todelt i to nivåer", "45,5 av 65 poeng, som er den nedre grensen for det sjiktet der de fleste besvarelsene lander", "39 av 65 poeng"],
      explanation: "E begynner på 30 av 65 poeng. Grensen på 20 av 49 hørte til den todelte skalaen i H2022, 45,5 er nedre grense for C, og 39 for D.",
    },
    {
      question: "Hvorfor er nivåene i dette kapitlet definert av poengsum og ikke av prosa?",
      options: ["Fordi ingen av de fire sensorveiledningene har en kvalitativ karakterbeskrivelse", "Fordi poengsummer er lettere å sammenlikne mellom besvarelser enn beskrivelser av hva en besvarelse viser", "Fordi de to nyeste terminene bruker samme poengskala, slik at grensene kan overføres direkte mellom dem", "Fordi boka er kalibrert mot seks terminer"],
      explanation: "Materialet skiller karakterer med poeng, ikke med prosa, og en kvalitativ skala boka ikke har belegg for, kan den ikke oppfinne. De to poengsatte terminene har dessuten ulike skalaer.",
    },
    {
      question: "Hva kostet mest i besvarelsen i C-sjiktet?",
      options: ["Den manglende obligatoriske termen i pragmatikkoppgaven", "De to fonembeskrivelsene som ikke skilte lyden fra nabolydene, siden det ikke gis delpoeng i den oppgavetypen", "Det feilanalyserte leddet i leddanalysen, der relativsetningen ble ført opp som et eget ledd", "De tre umerkede fugemorfene i segmenteringen"],
      explanation: "Talerens autorisasjon kostet 4 poeng, fordi uttellingen i den oppgavetypen er delt i to halvdeler med hver sin obligatoriske komponent. De øvrige tapene kostet mellom et halvt og halvannet poeng hver.",
    },
    {
      question: "Hva gjorde at besvarelsen på marginen kom over terskelen?",
      options: ["At den forsøkte treoppgaven, der et nær korrekt tre gir full uttelling", "At den svarte kort men fullstendig på alle ni spørsmålene i settet, slik at ingen deloppgave sto helt tom", "At den prioriterte de redegjørende oppgavene, som er raskere å skrive enn analyseoppgavene i settet", "At den brukte alle de obligatoriske termene"],
      explanation: "Den hentet 5 poeng av ti mulige på et grovt tre, på fem minutters arbeid. Den lot to segmenteringsord stå ubesvart, hoppet over forklaringsleddet i transkripsjonen og manglet en obligatorisk term.",
    },
    {
      question: "Hva er en oppgraderingsmeny?",
      options: ["En liste over hva som skiller en besvarelse fra den over, med poengverdi på hvert punkt", "En oversikt over de temaene kandidaten bør lese mer om før neste eksamen, sortert etter hvor mye de er verdt i settet", "Sensors kommentarkolonne, der det står hva poengene i hvert delspørsmål faktisk er gitt for", "En liste over feilkodene i besvarelsen"],
      explanation: "Menyen viser hvilke grep som er tilgjengelige og hva hvert av dem er verdt, og rammes inn som valg framfor mangler. I begge de to menyene i kapitlet er hvert eneste punkt svarhåndverk, ikke nytt fagstoff.",
    },
    {
      question: "Hvor stor andel av poengene i øvingssettet ligger i strukturfagene?",
      options: ["45 av 65 poeng, altså rundt sytti prosent", "35 av 49 poeng, som er den andelen den eldste av de to poengsatte terminene i materialet hadde", "26 av 114 poeng, som er den andelen syntaks alene har i det samlede materialet fra begge terminene", "Halvparten"],
      explanation: "Settet er konstruert med 45 av 65 poeng i fonetikk, fonologi, morfologi og syntaks, slik at det speiler den dokumenterte vektingen på rundt sytti prosent.",
    },
    {
      question: "Hva er den viktigste forskjellen mellom A-besvarelsens svar på spørsmål 1 og spørsmål 4?",
      options: ["Konklusjonen er skarp i klassifiseringen, mens transkripsjonen viser at to ulike svar begge er riktige", "Klassifiseringen er begrunnet, mens transkripsjonen er ført uten begrunnelse fordi tegnene taler for seg selv", "Klassifiseringen bruker en obligatorisk term, mens transkripsjonsoppgaven ikke har noen slik term knyttet til seg", "Den ene er lengre enn den andre"],
      explanation: "Klassifiseringsoppgaven belønner en skarp, begrunnet konklusjon, mens transkripsjonsoppgaven vurderes på konsistens med egen oppgitt bakgrunn — og der er nettopp poenget at flere svar er fullt tellende.",
    },
    {
      question: "Hva sier den nyeste terminen om poenggrensene for karakterene?",
      options: ["At de er veiledende, fordi helhetsinntrykket av besvarelsen også teller", "At de er absolutte, slik at et halvt poeng under grensen alltid gir den lavere karakteren uansett hvordan besvarelsen ellers ser ut", "At de bare gjelder for den terminen de er oppgitt i, og må regnes om for hvert nytt sett med ny poengsum", "At de gjelder for begge de poengsatte terminene"],
      explanation: "Terminen presiserer at helhetsinntrykket teller og at sensors skjønn kan gi justeringer. Den andre poengsatte terminen hadde dessuten en helt annen skala, med bestått fra 20 av 49 poeng.",
    },
  ],
  'exfac03-spr-2-1': [
    {
      question: "Hva er en fon?",
      options: ["En fysisk talelyd: én konkret lyd slik den faktisk ble uttalt, uavhengig av om den skiller ord fra hverandre eller ikke", "Den minste enheten som kan byttes ut i et ord og gi et annet ord med en annen betydning", "En variant av en betydningsskillende enhet, bundet til en bestemt omgivelse i ordet", "En bokstav i skriftbildet, altså det tegnet som representerer lyden på papiret"],
      explanation: "Riktig svar er at fonen er den fysiske talelyden, det klammer omslutter. Distraktoren om den minste utbyttbare enheten beskriver fonemet, og den om en bunden variant beskriver allofonen; begge er riktige definisjoner av noe annet. Fonen hører til fonetikken og kan høres, mens fonemet må sluttes til.",
    },
    {
      question: "Hva er kriteriet som gjør to lyder til ulike fonemer i en varietet?",
      options: ["At byttet mellom dem kan skille to ord fra hverandre", "At de høres tydelig forskjellige ut for en som lytter oppmerksomt på uttalen", "At de lages med ulik artikulasjonsmåte, altså på ulik måte i munnhulen", "At de begge finnes i det internasjonale fonetiske alfabetet med hvert sitt tegn"],
      explanation: "Riktig svar er at kriteriet er distinktiv opposisjon: byttet må kunne gi et annet ord. Hørbarhet er et fonetisk spørsmål og avgjør ingenting — en norsktalende hører fint forskjellen på den aspirerte og den uaspirerte t-en, men de er allofoner av samme fonem. At lydene har egne tegn i alfabetet, sier bare at noe språk et sted skiller dem.",
    },
    {
      question: "Hvilken notasjon skal en allofon stå i?",
      options: ["I klammer, fordi en allofon er en fon og ikke et fonem", "Mellom skråstreker, fordi en allofon hører til fonemsystemet i språket", "I kursiv, som den ortografiske formen av ordet", "I enkle anførselstegn, slik betydningen av et ord skrives i faglitteraturen"],
      explanation: "Riktig svar er at allofoner skrives i klammer. En allofon er en fysisk variant, altså en fon, og skråstreker er reservert for fonemer. Skriver du aspirasjon inne i skråstreker, har du påstått at aspirasjonen er betydningsskillende i norsk. Kursiv er ortografi og enkle anførselstegn er betydning.",
    },
    {
      question: "Hvorfor er *hage* og *hakke* ikke et minimalt par?",
      options: ["Fordi ordene skiller seg i mer enn ett forhold, blant annet i lengdeforholdet", "Fordi begge ordene inneholder den samme konsonanten i midten av ordet og derfor ikke kan kontrastere", "Fordi ordene tilhører ulike ordklasser, og et minimalt par må bestå av to ord i samme ordklasse", "Fordi bokstaven g og bokstaven k er to forskjellige bokstaver, og et minimalt par må ha samme skrivemåte"],
      explanation: "Riktig svar er at paret skiller seg i mer enn ett forhold: både i konsonantens stemthet og i fordelingen av lengde mellom vokal og konsonant. Ordklasse og skrivemåte er uten betydning for testen — det er ikke bokstaver, men lyder, som byttes, og et minimalt par kan godt bestå av ord i ulike ordklasser.",
    },
    {
      question: "Hva viser paret *tak* og *takk*?",
      options: ["At lengde alene kan skille to ord i norsk, uten at noe segment er byttet", "At de to ordene har helt ulike segmenter", "At skriftbildet med dobbel konsonant alltid svarer til en lang konsonant i uttalen av ordet", "At vokalkvaliteten er den eneste egenskapen som kan bære en betydningsforskjell i norsk"],
      explanation: "Riktig svar er at paret viser at lengde er distinktiv i norsk: ingen segmenter er byttet ut, bare fordelingen av lengde mellom vokal og konsonant. Distraktoren om skriftbildet blander ortografi og uttale, og distraktoren om vokalkvalitet utelukker nettopp det paret beviser.",
    },
    {
      question: "Du finner ikke noe minimalt par for to lyder. Hva kan du slutte?",
      options: ["Ingenting sikkert: testen kan bevise at to lyder er ulike fonemer, men fraværet av et par beviser ikke at de er varianter av samme fonem", "At de to lydene med sikkerhet er allofoner av ett og samme fonem", "At minst én av lydene ikke forekommer i språket i det hele tatt", "At de to lydene må stå i fri variasjon med hverandre i alle omgivelser"],
      explanation: "Riktig svar er at slutningen ikke kan trekkes: fonemtesten er ensrettet. Et manglende par kan skyldes at ordforrådet tilfeldigvis har en luke. For å vise at to lyder er varianter av samme fonem, trengs en distribusjonsanalyse der omgivelsene settes opp mot hverandre.",
    },
    {
      question: "Hva er et allofonforhold mellom to lyder?",
      options: ["At de er to varianter av samme fonem og aldri kan skille to ord", "At de begge kan brukes til å skille ord fra hverandre i minst én posisjon i ordet", "At de uttales med nøyaktig samme artikulasjonssted, men med ulik stemthet og lengde", "At de veksler helt fritt, slik at valget mellom dem alltid er opp til den enkelte taleren"],
      explanation: "Riktig svar er at allofoner er varianter av samme fonem uten betydningsskillende kraft. Distraktoren om å skille ord beskriver tvert imot to ulike fonemer. Fri veksling er bare én av flere måter allofoner kan fordele seg på, og den vanligste er at omgivelsen bestemmer hvilken variant som kommer.",
    },
    {
      question: "Hva betyr det at *kjære* og *skjære* kan være et minimalt par for én taler og ikke for en annen?",
      options: ["At fonemsystemet hører til en varietet, ikke til norsk som helhet", "At den ene av de to talerne uttaler minst ett av ordene feil i forhold til rettskrivingen", "At minimale par bare gjelder i skriftspråket, mens talespråket varierer fritt fra person til person", "At de to ordene ikke har ulik betydning, og at et minimalt par derfor ikke kan settes opp for dem"],
      explanation: "Riktig svar er at fonemsystemet hører til en varietet. Den som skiller de to frikativene, har et minimalt par; den som har latt dem falle sammen, har to homofone ord. Ingen av delene er en uttalefeil, og forskjellen har ingenting med skriftspråket å gjøre — ordene har ulik betydning i begge varietetene.",
    },
    {
      question: "Hvorfor er *sal* og *las* ikke et minimalt par?",
      options: ["Fordi lydene står i ulik rekkefølge i stedet for at én lyd er byttet i én posisjon", "Fordi de to ordene inneholder nøyaktig de samme lydene og derfor må være homofone", "Fordi det ene ordet er et substantiv og det andre kan brukes som en verbform i tillegg", "Fordi vokalen i de to ordene ikke har nøyaktig samme lengde når ordene sies etter hverandre"],
      explanation: "Riktig svar er at rekkefølgen er endret, ikke ett segment i én posisjon. Kravet i et minimalt par er at byttet står på samme plass i begge ordene. Ordene er ikke homofone — de uttales tydelig ulikt — og ordklasse er irrelevant for testen.",
    },
    {
      question: "Hva er forholdet mellom den aspirerte og den uaspirerte t-en i norsk?",
      options: ["De er to allofoner av samme fonem, fordelt etter posisjon i ordet", "De er to ulike fonemer, siden en norsktalende uten videre hører forskjell på dem", "De er samme fon, men skrives med ulike tegn", "De er to ulike segmenter som begge må skrives inn i den fonemiske formen av ordet"],
      explanation: "Riktig svar er at de er allofoner av samme fonem: ingen norske ord skilles av bare den forskjellen. At forskjellen er hørbar når den påpekes, avgjør ingenting, og aspirasjonen er forutsigbar fra omgivelsen og skal derfor ikke stå mellom skråstreker.",
    },
    {
      question: "Hva er den avgjørende kontrollen når du har satt opp et kandidatpar?",
      options: ["At nøyaktig én lyd er byttet, at byttet står i samme posisjon i begge ordene, og at alt annet — også lengde — er likt", "At begge ordene har samme antall bokstaver i skriftbildet", "At de to ordene brukes omtrent like ofte i vanlig norsk språkbruk", "At begge ordene kan uttales av en taler som har den samme dialekten"],
      explanation: "Riktig svar er den tredelte kontrollen: ett bytte, samme posisjon, alt annet likt. Lengde må kontrolleres eksplisitt, fordi den er distinktiv i norsk og lett å overse. Antall bokstaver og ordfrekvens har ingenting med saken å gjøre.",
    },
    {
      question: "En besvarelse skriver bare «*fin* og *vin*» som svar på hva et minimalt par er. Hvilken typisk feil er dette?",
      options: ["Å gi et eksempel uten å begrunne hvorfor det er et minimalt par", "Å gi færre eksempler enn oppgaven uttrykkelig ber om i punktlisten sin", "Å nevne en fagterm uten å forklare den", "Å transkribere uten å ha oppgitt hvilken språklig bakgrunn transkripsjonen bygger på"],
      explanation: "Riktig svar er at eksempelet er gitt uten begrunnelse — feil #6. Paret er korrekt, men ingenting er sagt om hva det viser, og det er nettopp koblingen mellom eksempel og definisjon som betales. De andre alternativene er reelle feil i emnet, men de gjelder andre situasjoner enn denne.",
    },
    {
      question: "Hva er homofone ord?",
      options: ["Ord som uttales likt, men har ulik betydning, som *hjul* og *jul*", "Ord som skrives likt, men uttales forskjellig", "Ord som skiller seg i nøyaktig én lyd i én posisjon, mens alt annet i ordene er likt", "Ord som har samme betydning, men som tilhører hvert sitt talemål innenfor det samme språket"],
      explanation: "Riktig svar er at homofone ord uttales likt og betyr ulike ting. Distraktoren om ett byttet segment beskriver et minimalt par, som er homofoniens motstykke: lik betydningsforskjell, men ulik uttale. Ord som skrives likt og uttales ulikt, er et annet fenomen.",
    },
    {
      question: "Hva skiller fonetikk fra fonologi?",
      options: ["Fonetikken studerer talelyder som fysiske hendelser, mens fonologien studerer hvordan et språk organiserer lyder i et system", "Fonetikken handler om konsonanter, mens fonologien handler om vokaler og stavelser", "Fonetikken bruker klammer, mens fonologien er den delen av faget som ikke bruker notasjon", "Fonetikken beskriver eldre språktrinn, mens fonologien beskriver språket slik det er i dag"],
      explanation: "Riktig svar er skillet mellom lyd som fysisk hendelse og lyd som systemenhet. Testen er spørsmålet du stiller: «hva gjør tunga her?» er fonetisk, «blir dette et annet ord?» er fonologisk. Fordelingen på konsonanter og vokaler, og skillet mellom eldre og nyere språk, er noe helt annet.",
    },
    {
      question: "Hva menes med en varietet?",
      options: ["En bestemt språkbruk med sitt eget lydsystem, som en dialekt eller en enkelt talers uttale", "En skriftlig norm som er fastsatt for et språk av et offentlig organ med myndighet til det", "En bestemt uttalevariant av én enkelt lyd, altså det samme som en allofon av et fonem", "Et sett av ord som brukes i én bestemt sammenheng, som fagspråk eller ungdomsspråk"],
      explanation: "Riktig svar er at en varietet er en språkbruk med sitt eget lydsystem. Det er varieteten fonemene hører til, og derfor må en fonologisk konklusjon bindes til den varieteten den gjelder for. En allofon er en variant av en lyd, ikke en variant av et språk.",
    },
    {
      question: "Hvordan beskrives lyden i *sjal* korrekt?",
      options: ["Ustemt postalveolar frikativ, altså den lyden som står i skriftbildets sj og skj", "Ustemt palatal frikativ, altså den lyden som står i skriftbildets kj og ki", "Ustemt retrofleks frikativ, den lyden som oppstår der en r møter en s i norsk", "Ustemt alveolar frikativ, laget med tungespissen rett mot alveolarkanten bak fortennene"],
      explanation: "Riktig svar er ustemt postalveolar frikativ. De tre distraktorene er nabolydene: den palatale frikativen står i kj og ki, retrofleksen oppstår etter r, og den alveolare er den vanlige s-en. Alle fire er ustemte frikativer, så bare artikulasjonsstedet skiller dem.",
    },
    {
      question: "Hva er en posisjon i et minimalt par?",
      options: ["Plassen i ordet der byttet skjer, som må være den samme i begge ordene", "Hvilken av de to lydene som er den mest vanlige i språket sett under ett", "Om lyden står i den trykksterke eller i den trykksvake delen av ordet", "Rekkefølgen de to ordene settes opp i når paret skrives ned i besvarelsen"],
      explanation: "Riktig svar er at posisjonen er plassen i ordet der byttet skjer, og at den må være den samme i begge ordene. Uten det kravet ville ord med samme lyder i ulik rekkefølge telt som minimale par, og de beviser ingenting om opposisjonen mellom lydene.",
    },
    {
      question: "Hvilket av disse er et minimalt par som viser at to vokaler er ulike fonemer?",
      options: ["*lys* og *lus*, der bare vokalen er byttet og alt annet er likt", "*sol* og *solen*, der den ene formen har fått en endelse i tillegg til stammen", "*bok* og *bøker*, der både vokalen og endelsen skiller de to ordformene fra hverandre", "*hus* og *huset*, der det ene ordet er en stavelse lengre"],
      explanation: "Riktig svar er *lys* og *lus*, der bare vokalen er byttet og alt annet er likt. De tre andre parene har fått lagt til materiale, og et tillegg er ikke et bytte — da varierer mer enn én ting, og paret kan ikke isolere vokalforskjellen.",
    },
    {
      question: "Hvilken rekkefølge gir best uttelling i et fonologisk klassifiseringssvar?",
      options: ["Kontrollen først, konklusjonen sist, slik at svaret viser hvordan du kom fram", "Konklusjonen først, slik at sensor raskt ser hva kandidaten har landet på i oppgaven", "Eksempelet først og alene, siden et godt valgt ordpar taler for seg selv uten kommentar", "Definisjonen av alle tre grunnbegrepene først"],
      explanation: "Riktig svar er begrunnelsen før konklusjonen. Poengfordelingen i emnet betaler for veien til svaret: i den nyeste poengsatte terminen gir en klassifiseringsoppgave 1 poeng for svaret og 3 for forklaringen. Et ordpar uten kommentar er feil #6, og en full begrepsgjennomgang som ikke ble bedt om, koster tid uten å gi noe.",
    },
    {
      question: "Hvilket par viser at de to labiodentale frikativene er ulike fonemer i norsk?",
      options: ["*fin* og *vin*, der bare stemtheten i den første lyden er byttet", "*fem* og *femte*, der det ene ordet har en ekstra stavelse", "*fatt* og *fat*, der bare fordelingen av lengde mellom vokal og konsonant er endret", "*vase* og *fase*, som skiller seg både i første lyd og i trykkplasseringen inne i ordet"],
      explanation: "Riktig svar er *fin* og *vin*: ulik betydning, ett bytte i første posisjon, alt annet likt. Distraktoren med den ekstra stavelsen er et tillegg og ikke et bytte, og lengdeparet viser noe annet enn en opposisjon mellom to konsonanter.",
    },
    {
      question: "Hva er feilen i begrunnelsen «man hører jo forskjell på de to lydene»?",
      options: ["Den bruker et fonetisk argument på et fonologisk spørsmål: hørbarhet avgjør ikke om noe er et eget fonem", "Den er for kort til å gi uttelling i en oppgave som er poengsatt", "Den bruker en talemålsform i stedet for en skriftmålsform i besvarelsen", "Den nevner ikke hvilken av de to lydene som er den vanligste i norsk"],
      explanation: "Riktig svar er at hørbarhet er et fonetisk kriterium og ikke avgjør fonemstatus. En norsktalende hører fint forskjellen på aspirert og uaspirert t når den påpekes, og de er likevel allofoner av samme fonem. Kriteriet er om byttet kan gi et annet ord.",
    },
    {
      question: "Hva er et segment?",
      options: ["Én enkelt lyd i rekka, betraktet enten som fon eller som fonem", "En gruppe lyder som til sammen utgjør en stavelse med kjerne og eventuell koda", "Den minste delen av et ord som bærer en selvstendig betydning i språksystemet", "En avgrenset del av et lydopptak, målt i millisekunder fra begynnelse til slutt"],
      explanation: "Riktig svar er at et segment er én enkelt lyd i rekka. Ordet brukes når du vil snakke om plassene i ordet uten å ta stilling til nivå. Stavelsen er en større enhet, og den minste betydningsbærende delen av et ord er et morfem, som hører til morfologien.",
    },
  ],
  'exfac03-spr-2-2': [
    {
      question: "Hva betyr det at to lyder står i komplementær distribusjon?",
      options: ["At de aldri opptrer i samme omgivelse: der den ene kan stå, kan den andre ikke", "At de aldri opptrer i samme ord, uansett hvor i ordet de to lydene måtte stå", "At de begge kan stå i samme omgivelse uten at ordet blir et annet ord med annen betydning", "At de forekommer omtrent like ofte i vanlig norsk tekst og tale, altså med samme frekvens"],
      explanation: "Riktig svar er at fordelingene ikke overlapper: der den ene kan stå, kan den andre ikke. Kravet gjelder omgivelsen, ikke ordet — to allofoner kan godt stå i samme ord, som den aspirerte og den uaspirerte t-en gjør i uttalen av *tastatur*. Der begge kan stå i samme omgivelse uten betydningsforskjell, er det fri variasjon, som er noe annet.",
    },
    {
      question: "Hva er en omgivelse i fonologisk forstand?",
      options: ["Det som står rundt lyden og kan styre uttalen: lyden foran, lyden etter og trykkforholdet", "Den situasjonen ytringen blir sagt i, altså hvem som snakker med hvem, om hva og med hvilket formål", "Plassen i ordet der to ord skiller seg fra hverandre i et minimalt par", "Den dialekten eller det talemålet som lyden hører hjemme i hos en bestemt taler"],
      explanation: "Riktig svar er naboene og trykkforholdet. Distraktoren om situasjonen beskriver en pragmatisk kontekst, som hører til et annet saksområde. Plassen der to ord skiller lag, er posisjonen i et minimalt par, og det er et annet begrep med en annen bruk.",
    },
    {
      question: "Hva er det første trinnet i en distribusjonsanalyse?",
      options: ["Å liste alle omgivelsene hver av lydene opptrer i", "Å slå fast om de to lydene er allofoner eller ulike fonemer i den varieteten som beskrives", "Å lete etter et minimalt par der de to lydene er byttet mot hverandre i samme posisjon", "Å navngi hovedallofonen med én gang"],
      explanation: "Riktig svar er at listene settes opp først. Konklusjonen om allofoni og utpekingen av hovedallofonen er trinn i analysen, ikke inngangen til den. Leter du etter et minimalt par, driver du fonemtesten, som svarer på det motsatte spørsmålet.",
    },
    {
      question: "Hva kjennetegner hovedallofonen?",
      options: ["At den opptrer der ingen særskilt betingelse gjelder, altså har den videste distribusjonen", "At den er den lyden en lytter lettest legger merke til når ordet blir sagt høyt", "At den forekommer i flest ord i ordboka når man teller opp alle forekomstene", "At den er den varianten som står oppført først i den fonetiske tabellen for språket, altså øverst i oppslagsverket"],
      explanation: "Riktig svar er distribusjonens bredde. Hørbarhet, frekvens i ordboka og plassering i en tabell er alle irrelevante kriterier, og de to første er de vanligste feilsvarene: retrofleksen er iøynefallende, men den er en biallofon, fordi den bare kan komme etter en r.",
    },
    {
      question: "Hva er den praktiske testen på at du har pekt ut riktig variant som biallofon?",
      options: ["At du klarer å skrive betingelsen for den i én setning", "At den forekommer sjeldnere enn den andre varianten når du teller opp forekomstene i en tekst", "At den skrives med et diakritisk tegn i stedet for med et eget grunntegn i alfabetet", "At den bare finnes i én av de to hovedmålformene"],
      explanation: "Riktig svar er at betingelsen skal kunne skrives i én setning. Klarer du det ikke, har du sannsynligvis byttet om på de to variantene. Frekvens er ikke kriteriet, og hvordan lyden skrives i alfabetet, sier ingenting om hvor den kan stå.",
    },
    {
      question: "To lyder kan begge stå i samme omgivelse, men byttet gir ikke et annet ord. Hva er forholdet mellom dem?",
      options: ["Fri variasjon, siden begge lydene kan stå i samme omgivelse uten at byttet gir et annet ord", "Komplementær distribusjon, siden ingen av lydene kan skille to ord", "Distinktiv opposisjon, siden begge lydene forekommer i den samme omgivelsen i språket", "Ingen fonologisk sammenheng i det hele tatt, siden det ikke finnes noen betingelse å skrive"],
      explanation: "Riktig svar er fri variasjon: lydene er allofoner av samme fonem, men omgivelsen styrer ikke valget. Komplementær distribusjon krever at listene ikke overlapper, og distinktiv opposisjon krever at byttet gir et annet ord. Fravær av betingelse betyr ikke fravær av sammenheng.",
    },
    {
      question: "Hvorfor er det ikke nok å skrive «allofonisk variasjon tas ikke med i en fonemisk transkripsjon»?",
      options: ["Fordi utsagnet er riktig og likevel gir null poeng: forklaringen skal navngi de konkrete tegnene og den konkrete omgivelsen", "Fordi utsagnet er faglig galt, siden allofonisk variasjon nettopp skal skrives inn i den fonemiske formen", "Fordi utsagnet bruker en fagterm som ikke hører hjemme i emnet i det hele tatt", "Fordi utsagnet er for langt til at det passer inn i en oppgave med knapt tidsbudsjett"],
      explanation: "Riktig svar er at utsagnet er sant og generelt, og at det er nettopp generaliteten som gjør det verdiløst her. Den nyeste poengsatte terminen avviser denne formen uttrykkelig. Det som betales, er én setning per tegn som skiller formene, med omgivelsen navngitt.",
    },
    {
      question: "Hvilken betingelse styrer den labiodentale nasalen i norsk?",
      options: ["Den kommer når nasalen står rett foran f eller v, altså foran en labiodental konsonant", "Den kommer når nasalen står rett foran k eller g, altså foran en velar konsonant", "Den kommer når nasalen står sist i ordet, etter en lang og trykksterk vokal", "Den kommer når nasalen står rett etter en r, på samme måte som retroflekser oppstår"],
      explanation: "Riktig svar er at nasalen tar labiodentalt sted foran f og v. Foran k og g blir den velar i stedet, og etter r blir den retrofleks. Alle tre er nasalassimilasjon, men de har hver sin utløsende omgivelse, og å bytte om på dem er en klassisk feil.",
    },
    {
      question: "Hvorfor er retrofleksregelen særlig verdt å merke seg i sammensatte ord?",
      options: ["Fordi regelen virker over ordgrensen, slik at r i førsteleddet påvirker dentalen i andreleddet", "Fordi sammensatte ord alltid har bitrykk på andreleddet, og bitrykket er i seg selv det som utløser retrofleksen", "Fordi retrofleksen bare kan oppstå i den andre halvdelen av et sammensatt ord", "Fordi sammensatte ord er lengre og derfor gir flere anledninger til å telle opp lyder"],
      explanation: "Riktig svar er at regelen krysser ordgrensen: en r sist i førsteleddet gjør en dental først i andreleddet retrofleks. Det er derfor eksamensordene er lange og sammensatte. Bitrykket markerer sammensetningen, men utløser ikke retrofleksen, og retrofleksen kan godt oppstå inne i førsteleddet også.",
    },
    {
      question: "En taler har skarre-r. Hva følger av det for retroflekser?",
      options: ["Hun har ingen retroflekser i det hele tatt", "Hun har retroflekser bare der r-en står inne i et enkelt ord, og ikke over en sammensetningsfuge", "Hun har retroflekser, men bare i trykksterk stavelse", "Hun har de samme retrofleksene som andre talere, men uttaler dem med litt kortere varighet"],
      explanation: "Riktig svar er at retroflekser forutsetter en r som lages med tungespissen. En uvular r kan ikke smelte sammen med en følgende dental, og da finnes fenomenet ikke hos taleren. Det er derfor en analyse av retroflekser alltid må si hvilken uttale den beskriver.",
    },
    {
      question: "Hva er forskjellen på assimilasjon og bortfall?",
      options: ["I en assimilasjon er lyden fortsatt der, men endret; i et bortfall er den borte", "Assimilasjon skjer bare inne i et ord, mens bortfall bare skjer på grensen mellom to ord", "Assimilasjon gjelder konsonanter, mens bortfall bare gjelder vokaler i trykksvake stavelser", "Assimilasjon er en historisk endring, mens bortfall er noe som skjer i uttalen her og nå"],
      explanation: "Riktig svar er at assimilasjon endrer lyden, mens bortfall fjerner den. I uttalen av *sandkasse* skjer begge: d-en faller bort, og n-en tar velart sted etter k-en. Begge fenomenene finnes både inne i ord og over grenser, og begge gjelder både vokaler og konsonanter.",
    },
    {
      question: "Hva viser det hvis listene over omgivelser overlapper og byttet gir et annet ord?",
      options: ["At lydene står i distinktiv opposisjon og er to ulike fonemer", "At lydene er allofoner av samme fonem, siden begge kan stå på det samme stedet i ordet", "At analysen er feil satt opp, siden to lyder aldri kan stå i samme omgivelse", "At den ene lyden er hovedallofon og den andre biallofon i den varieteten som undersøkes"],
      explanation: "Riktig svar er distinktiv opposisjon: overlapp pluss betydningsforskjell er nettopp definisjonen på to ulike fonemer. Overlapp uten betydningsforskjell er fri variasjon, og hoved- og biallofon gir bare mening der fordelingen er komplementær.",
    },
    {
      question: "Hvorfor kan den fonemiske formen utelate aspirasjonen?",
      options: ["Fordi aspirasjonen er forutsigbar fra omgivelsen og derfor kan regnes ut av den som kjenner regelen", "Fordi aspirasjonen er så svak at den ikke lar seg høre uten teknisk utstyr", "Fordi aspirasjonen bare finnes i enkelte norske dialekter og ikke i andre", "Fordi aspirasjonen skrives med et diakritisk tegn, og diakritika hører ikke hjemme i transkripsjon"],
      explanation: "Riktig svar er forutsigbarheten: alt som følger av omgivelsen, trenger ikke stå i den fonemiske formen. Aspirasjonen er godt hørbar, den finnes i vanlig norsk uttale bredt, og diakritika brukes fritt i fonetisk transkripsjon — det er nivået, ikke tegntypen, som avgjør.",
    },
    {
      question: "Hva er distribusjonen til en lyd?",
      options: ["Hele listen over omgivelser der lyden faktisk forekommer", "Antall ganger lyden forekommer i en tekst av en gitt lengde, målt per tusen ord", "Den geografiske utbredelsen av lyden i de ulike dialektområdene i landet", "Rekkefølgen lydene i et ord kommer i, fra første til siste segment i uttalen"],
      explanation: "Riktig svar er listen over omgivelser: distribusjon handler om hvor en lyd kan stå. Frekvens er noe annet, og en lyd kan ha vid distribusjon og likevel være sjelden. Geografisk utbredelse og segmentrekkefølge er helt andre spørsmål.",
    },
    {
      question: "En besvarelse skriver «disse to er allofoner» uten å sette opp omgivelsene. Hva er problemet?",
      options: ["Konklusjonen mangler belegg, og det er nettopp den formen for svar som trekker", "Ordet allofon er feil brukt, siden det bare kan brukes om vokaler i trykksvake stavelser", "Svaret er for langt i forhold til poengverdien på oppgaven det besvarer", "Konklusjonen er faglig gal, siden to lyder aldri kan være allofoner av samme fonem"],
      explanation: "Riktig svar er at belegget mangler. Å påstå komplementær distribusjon uten å ha listet omgivelsene er å bruke termen uten å vise noe, og det er feil #8 i praksis: å svare på et klassifiseringsspørsmål uten begrunnelse.",
    },
    {
      question: "Hvilket av disse er en korrekt formulert betingelse for en biallofon?",
      options: ["Retrofleksen kommer når en dental står rett etter en r, også over en sammensetningsfuge", "Retrofleksen kommer i ord som er lange og sammensatte og har mange stavelser i seg", "Retrofleksen kommer når taleren ønsker å legge trykk på nettopp den delen av ordet", "Retrofleksen kommer i alle omgivelser der den vanlige dentalen ikke kan stå av andre grunner"],
      explanation: "Riktig svar navngir den utløsende omgivelsen presist og kort. En betingelse skal kunne skrives i én setning og skal peke på noe i lydomgivelsen. Ordlengde og talerens vilje er ikke fonologiske betingelser, og en betingelse formulert som «alle andre steder» beskriver en hovedallofon, ikke en biallofon.",
    },
    {
      question: "Hva er reduksjonsvokalen?",
      options: ["Den korte, kvalitetssvake vokalen som står i trykksvake stavelser", "Den korteste av de lange vokalene i systemet, brukt når ordet sies raskt", "En vokal som er falt helt bort, slik at stavelsen bæres av en konsonant i stedet", "En vokal som er blitt kortere gjennom historien og nå uttales med mindre lengde enn før"],
      explanation: "Riktig svar er vokalen i trykksvake stavelser. Den kan aldri bære trykk, og den fonemiske formen skriver den underliggende fulle vokalen fordi reduksjonen følger av trykkforholdet. En stavelse båret av en konsonant er et annet fenomen, og historisk forkorting hører til språkendring.",
    },
    {
      question: "Hva skiller fonemtesten fra distribusjonsanalysen?",
      options: ["Fonemtesten viser at to lyder er ulike fonemer, mens distribusjonsanalysen kan vise at de hører sammen", "Fonemtesten gjelder konsonanter, mens distribusjonsanalysen bare kan brukes på vokaler", "Fonemtesten brukes i fonetikken, mens distribusjonsanalysen hører til fonologien", "Fonemtesten krever et helt ord, mens distribusjonsanalysen kan gjøres på en enkelt stavelse"],
      explanation: "Riktig svar er hva de kan vise. Fonemtesten er ensrettet og beviser bare forskjell; distribusjonsanalysen kan vise samhørighet, og også motsetning der listene overlapper. Begge er fonologiske framgangsmåter og gjelder alle segmenter.",
    },
    {
      question: "Hvorfor må en analyse av retroflekser si hvilken uttale den beskriver?",
      options: ["Fordi fenomenet ikke finnes hos alle talere, og analysen da ville mangle premissen sin", "Fordi retroflekser skrives med ulike tegn i ulike lærebøker", "Fordi retroflekser bare finnes i skriftspråket og må oversettes til talespråk først", "Fordi retroflekser krever at leseren kjenner hele det fonetiske alfabetet fra før"],
      explanation: "Riktig svar er at fenomenet forutsetter en r laget med tungespissen. En analyse av retroflekser hos en taler uten retroflekser er en analyse av ingenting, og derfor bærer premissen om oppgitt uttale hele svaret.",
    },
    {
      question: "Hva er den velare nasalens omgivelse i nasalassimilasjonen?",
      options: ["Rett foran k eller g, altså foran en velar konsonant", "Rett foran f eller v, altså foran en konsonant laget med underleppa mot fortennene", "Rett etter en r, på samme måte som de øvrige retroflekse konsonantene oppstår", "Sist i ordet, etter en kort vokal"],
      explanation: "Riktig svar er stillingen foran velar konsonant. Foran f og v blir nasalen labiodental i stedet, og etter r blir den retrofleks. At den velare nasalen også finnes sist i ord som *lang*, er en egen sak — og nettopp derfor er analysen av den omdiskutert.",
    },
    {
      question: "Hva er det viktigste å skrive ut når du forklarer hvorfor to transkripsjonsnivåer skiller lag?",
      options: ["Den konkrete omgivelsen som utløser det konkrete tegnet", "Den generelle regelen om at fonetisk transkripsjon er mer detaljert enn fonemisk", "Hvilken lærebok regelen er hentet fra", "Hvor mange tegn de to formene til sammen består av, slik at forskjellen kan telles"],
      explanation: "Riktig svar er den konkrete omgivelsen. Den generelle regelen er sann, men den er nettopp den formen den nyeste poengsatte terminen avviser. Kildehenvisning og opptelling av tegn svarer ikke på spørsmålet oppgaven stiller.",
    },
    {
      question: "Hvorfor kan to allofoner godt stå i samme ord?",
      options: ["Fordi kravet i komplementær distribusjon gjelder omgivelsen, ikke ordet", "Fordi et ord kan inneholde flere stavelser, og hver stavelse har sitt eget lydsystem", "Fordi allofoner alltid opptrer i par, slik at den ene forutsetter den andre i samme ord", "Fordi lange ord er unntatt fra kravet om komplementær fordeling mellom variantene"],
      explanation: "Riktig svar er at kravet gjelder omgivelsen. I uttalen av *tastatur* står den aspirerte varianten i trykksterk ansats og den uaspirerte etter s — to ulike omgivelser i ett og samme ord. Å lese kravet som «aldri i samme ord» får deg til å forkaste riktige analyser.",
    },
  ],
  'exfac03-spr-2-3': [
    {
      question: "Hvilken av stavelsens tre plasser er obligatorisk?",
      options: ["Kjernen, siden en stavelse ikke kan uttales uten et sonoritetstoppunkt", "Ansatsen, siden en stavelse må begynne på en konsonant", "Kodaen, siden en stavelse må avsluttes for at neste stavelse skal kunne begynne", "Både ansatsen og kjernen, siden en stavelse må ha både en begynnelse og et toppunkt"],
      explanation: "Riktig svar er kjernen: den er stavelsens toppunkt av åpning, og uten et toppunkt er det ingen stavelse. Ansats og koda kan begge stå tomme, og ordet *å* viser at begge kan være tomme samtidig.",
    },
    {
      question: "Hva skiller en åpen fra en lukket stavelse?",
      options: ["Om stavelsen har koda eller ikke: åpen ender på vokal, lukket på konsonant", "Om ansatsen er fylt med én eller med flere konsonanter foran kjernen i stavelsen", "Om kjernen består av en lang vokal eller av en kort vokal med etterfølgende konsonant", "Om stavelsen bærer hovedtrykket i ordet eller ikke"],
      explanation: "Riktig svar er kodaen: åpen stavelse har ingen, lukket har. Ansatsens innhold er et annet spørsmål og påvirker ikke saken — en stavelse med tre konsonanter i ansats og ingen koda er åpen. Trykk og vokallengde er egne akser.",
    },
    {
      question: "Hva er en stavelsesbærende konsonant?",
      options: ["En konsonant som fungerer som kjerne i en stavelse, uten vokal", "En konsonant som står først i en trykksterk stavelse og derfor uttales med ekstra kraft", "En konsonant som er lang og derfor deles mellom to stavelser i uttalen av ordet", "En konsonant som må være til stede for at ordet skal kunne uttales i det hele tatt"],
      explanation: "Riktig svar er at konsonanten er kjerne. I norsk skjer det i trykksvake endelser, med nasalen eller lateralen, og tegnet er grunntegnet med en liten strek under. En lang konsonant som deles mellom to stavelser, er noe annet: den er koda i den ene og ansats i den neste.",
    },
    {
      question: "Hvor mange stavelser har *strikk*?",
      options: ["Én, siden ordet har bare ett sonoritetstoppunkt", "To, siden ordet har to konsonantgrupper", "Tre, siden ordet har tre konsonanter foran vokalen som hver danner sitt eget toppunkt", "Det avhenger av hvor raskt ordet blir sagt, siden stavelser er et spørsmål om taletempo"],
      explanation: "Riktig svar er én. Antall stavelser er antall toppunkter av åpning, ikke antall lyder eller konsonantgrupper. Ordet har fire konsonanter og ett toppunkt, og haka faller én gang uansett taletempo.",
    },
    {
      question: "Hva sier sonoritetsprinsippet?",
      options: ["At sonoriteten stiger jevnt gjennom ansatsen mot kjernen og faller jevnt gjennom kodaen", "At den mest sonore lyden i et ord alltid må stå først", "At alle stavelser i et ord må ha omtrent den samme graden av åpning i kjernene sine", "At en stavelse ikke kan inneholde flere enn to konsonanter på hver side av kjernen sin"],
      explanation: "Riktig svar er stigning mot kjernen og fall etter den, altså én sonoritetstopp per stavelse. De andre alternativene er oppdiktede begrensninger — norsk har både ansatser med tre konsonanter og stavelser med svært ulike kjerner i samme ord.",
    },
    {
      question: "Hvilken rekkefølge har sonoritetshierarkiet, fra minst til mest sonor?",
      options: ["Plosiv, frikativ, nasal, likvid, approksimant, vokal — luften slipper stadig friere ut", "Vokal, approksimant, likvid, nasal, frikativ, plosiv, altså motsatt vei", "Nasal, plosiv, frikativ, vokal, likvid, approksimant, i innlæringsrekkefølge", "Frikativ, plosiv, likvid, nasal, vokal, approksimant, etter artikulasjonssted"],
      explanation: "Riktig svar er rekkefølgen fra plosiv nederst til vokal øverst. Distraktoren som snur rekkefølgen, oppgir samme hierarki fra motsatt ende og svarer derfor ikke på spørsmålet slik det er stilt. Rekkefølgene som begynner på nasal og på frikativ, blander kategoriene og bygger på et kriterium som ikke er sonoritet.",
    },
    {
      question: "Hvor ligger bruddet på sonoritetsprinsippet i *spurt*?",
      options: ["I overgangen fra s til p i ansatsen, der sonoriteten faller i stedet for å stige", "I overgangen fra kjernen til r, siden r er en likvid og ligger høyere enn en vokal", "I overgangen fra r til t i kodaen, der sonoriteten stiger i stedet for å falle", "Det finnes ikke noe brudd i dette ordet, siden alle lydene står i lovlig rekkefølge"],
      explanation: "Riktig svar er overgangen fra frikativ til plosiv i ansatsen. Kodaen er uproblematisk: fra vokal til likvid til plosiv faller sonoriteten som den skal. Likvider ligger lavere enn vokaler, ikke høyere.",
    },
    {
      question: "Hvorfor er *strikk* likevel et velformet norsk ord, selv om sonoritetsprinsippet er brutt?",
      options: ["Fordi norsk tillater s foran plosiv i ansats som et systematisk unntak", "Fordi bruddet er så lite at det ikke lar seg høre uten teknisk måling av lydbølgene", "Fordi prinsippet bare gjelder ord med mer enn én stavelse i seg", "Fordi ordet er lånt inn fra et annet språk og derfor ikke følger norske regler"],
      explanation: "Riktig svar er at s foran plosiv er et systematisk unntak, som i *ski*, *stein* og *spade*. Sonoritetsprinsippet er en sterk tendens, ikke en lov uten unntak. Prinsippet gjelder alle stavelser, uavhengig av ordlengde og opphav.",
    },
    {
      question: "En oppgave ber deg kommentere et brudd på sonoritetsprinsippet. Hva er den vanligste måten å svare på feil spørsmål?",
      options: ["Å gjengi prinsippet i stedet for å peke ut den konkrete overgangen der det ryker", "Å bruke fonemisk transkripsjon der oppgaven ba om fonetisk transkripsjon av ordet", "Å oppgi hvilken språklig bakgrunn du beskriver, siden det ikke er relevant her", "Å dele ordet i morfemer i stedet for å dele det i stavelser med ansats og koda"],
      explanation: "Riktig svar er å gjengi prinsippet. Det er en riktig setning som ikke besvarer bestillingen, og det er feil #5 i praksis: å hoppe over ett av oppgavens ledd. Å oppgi språklig bakgrunn er aldri feil — det er tvert imot påkrevd i transkripsjonsoppgaver.",
    },
    {
      question: "Hva er ansatsen i *klang*?",
      options: ["kl, siden ansatsen er alt som står foran kjernen", "kla, siden ansatsen omfatter alt fram til og med den lyden som bærer stavelsen", "ŋ, siden ansatsen avslutter stavelsen", "k, siden ansatsen aldri kan bestå av mer enn én konsonant i norske stavelser"],
      explanation: "Riktig svar er hele konsonantgruppen foran kjernen. Kjernen er vokalen, og alt før den er ansats. Konsonanten etter kjernen er koda, og ansatsen kan godt bestå av flere konsonanter — i *strikk* er den tre.",
    },
    {
      question: "Hvordan markeres en stavelsesgrense i en transkripsjon?",
      options: ["Med et punktum mellom stavelsene i den fonetiske formen", "Med en loddrett strek mellom stavelsene", "Med et bindestrek på samme måte som ved orddeling ved linjeskift i en tekst", "Med et mellomrom, slik at hver stavelse står som en egen enhet i transkripsjonen"],
      explanation: "Riktig svar er punktum. Bindestrek hører til orddeling i skrift, som er en skriftkonvensjon og et annet spørsmål enn stavelsesgrensen i uttalen. Mellomrom brukes ikke, fordi det ville løsrevet stavelsene fra hverandre som ord.",
    },
    {
      question: "Hvor går stavelsesgrensen i et sammensatt ord?",
      options: ["Der leddene møtes, altså ved fugen, uansett hva sonoritetsprinsippet tilsier", "Der den lengste konsonantgruppen kan deles i to omtrent like store deler", "Midt i ordet, uansett hvor mange stavelser hvert av de to leddene har", "Der ortografien tillater orddeling ved linjeskift"],
      explanation: "Riktig svar er ved fugen: morfologien vinner over rene lydregler i sammensetninger. Det er også derfor fugen er stedet der retrofleksjon og bitrykk opptrer, og hvorfor eksamensordene er lange og sammensatte. Ortografiens orddelingsregler avgjør ingenting her.",
    },
    {
      question: "Hva er kodaen i *vekst*?",
      options: ["kst, siden hele konsonantgruppen etter kjernen hører til kodaen", "st, siden kodaen bare kan bestå av de to siste lydene i en norsk stavelse", "ɛ, siden kodaen er den delen som bærer klangen", "v, siden kodaen er den konsonanten som står lengst fra kjernen i stavelsen"],
      explanation: "Riktig svar er hele konsonantgruppen etter kjernen. Kjernen er vokalen, og alt etter den er koda. Konsonanten før kjernen er ansats, uansett hvor langt fra kjernen den står.",
    },
    {
      question: "Hva er sonoritet?",
      options: ["Graden av åpning og klang i en lyd: hvor fritt luften slipper ut", "Hvor høyt en lyd blir sagt, altså styrken taleren legger i den når hun snakker", "Hvor lang en lyd er i tid, målt fra begynnelsen til slutten av segmentet", "Hvor langt fram eller bak i munnen en lyd lages av tunga og leppene"],
      explanation: "Riktig svar er graden av åpning og klang. Sonoritet er ikke det samme som lydstyrke: du kan rope en plosiv og hviske en vokal uten at sonoritetsforholdet mellom dem endres. Lengde og artikulasjonssted er egne akser.",
    },
    {
      question: "En oppgave ber om en lukket stavelse med velar lukkelyd og likvid i ansatsen. Hvilket ord oppfyller alle tre kravene?",
      options: ["*klang*, som har k som velar lukkelyd, l som likvid og ŋ som koda", "*bre*, som har plosiv og likvid i ansatsen, men ingen koda", "*strikk*, som har en lukket stavelse, men en frikativ først i den tredelte ansatsen", "*natt*, som er en lukket stavelse med en nasal foran kjernen og en plosiv etter den"],
      explanation: "Riktig svar er *klang*: den velare lukkelyden og likviden står i ansatsen, og kodaen lukker stavelsen. *Bre* har riktig ansats, men er åpen. *Strikk* har riktig lukking, men frikativ først. *Natt* mangler både velar og likvid.",
    },
    {
      question: "Hva viser ordet *å* om stavelsens struktur?",
      options: ["At bare kjernen er obligatorisk, siden både ansats og koda er tomme", "At en stavelse alltid må inneholde minst to lyder for å kunne uttales alene", "At en åpen stavelse må ha en lang vokal i kjernen for å kunne stå som eget ord", "At ansatsen kan være tom bare når stavelsen samtidig er lukket av en koda"],
      explanation: "Riktig svar er at bare kjernen er obligatorisk. Ordet består av én lyd og er en fullgod stavelse. Kravet om minst to lyder finnes ikke, og en åpen stavelse kan godt ha kort vokal i andre sammenhenger.",
    },
    {
      question: "Hva er den praktiske testen på at du har med en stavelsesbærende konsonant å gjøre?",
      options: ["At du hører en stavelse der du ikke hører noen vokal", "At konsonanten står sist i ordet og uttales med lengre varighet enn vanlig", "At konsonanten skrives med en bokstav som også kan brukes om en vokal i skriftbildet", "At konsonanten står i den trykksterke stavelsen og bærer hovedtrykket i ordet"],
      explanation: "Riktig svar er stavelsen uten vokal. Det er nettopp det som gjør konsonanten til kjerne. En vanlig sluttkonsonant bærer ingen stavelse, og stavelsesbærende konsonanter opptrer i norsk i trykksvake endelser, ikke i trykksterke stavelser.",
    },
    {
      question: "Hvorfor er egne eksempler etter spesifikasjon en typisk poengfelle?",
      options: ["Fordi hvert krav i spesifikasjonen er et eget ledd, og et ord som oppfyller to av tre er et feilsvar som ser riktig ut", "Fordi det ikke finnes norske ord som oppfyller den typen spesifikasjon som brukes", "Fordi eksempler alltid teller mindre enn definisjoner i en fonologioppgave", "Fordi det ikke er tillatt å bruke ord fra dagligtalen i en slik oppgave"],
      explanation: "Riktig svar er at kravene teller hver for seg. Feilen har to former: å oppfylle noen av kravene og å levere færre eksempler enn bestilt, som er feil #7. Motmiddelet er å lese spesifikasjonen som en huskeliste og krysse av ledd for ledd.",
    },
    {
      question: "Hvor ligger bruddet på sonoritetsprinsippet i *klaps*?",
      options: ["I overgangen fra p til s i kodaen, der sonoriteten stiger i stedet for å falle", "I overgangen fra k til l i ansatsen, der sonoriteten stiger for raskt før kjernen", "I overgangen fra kjernen til p, siden en plosiv ikke kan følge rett etter en vokal", "Det finnes ikke noe brudd, siden alle konsonantene i ordet er lovlige i norsk"],
      explanation: "Riktig svar er kodaen: fra plosiv opp til frikativ går sonoriteten feil vei etter kjernen. Ansatsen er derimot mønstergyldig — fra plosiv til likvid stiger sonoriteten, akkurat som prinsippet krever. En plosiv rett etter en vokal er helt vanlig.",
    },
    {
      question: "Hva er hovedregelen for hvor en enkelt konsonant mellom to vokaler hører hjemme?",
      options: ["Den går til ansatsen i den neste stavelsen", "Den går til kodaen i den foregående stavelsen, som dermed blir lukket i uttalen", "Den deles i to like deler mellom de to stavelsene på hver side av seg", "Den utgjør en egen stavelse mellom de to vokalene i ordet"],
      explanation: "Riktig svar er ansatsen i den neste stavelsen: språk fyller ansatsen før de fyller kodaen. Er konsonanten lang, deles den, slik at den både lukker den ene stavelsen og åpner den neste. En enkelt konsonant kan ikke utgjøre en stavelse med mindre den er kjerne.",
    },
  ],
  'exfac03-spr-2-4': [
    {
      question: "Hva er førstegrepet i en oppgave om minimale par?",
      options: ["Å skrive begge ordene fonemisk under hverandre, posisjon for posisjon", "Å slå fast om de to lydene i utgangspunktet er allofoner eller ulike fonemer i språket", "Å telle antall bokstaver i hvert av de to ordene", "Å avgjøre hvilket av de to ordene som er mest vanlig i norsk språkbruk i dag"],
      explanation: "Riktig svar er å sette opp formene. Sammenligningen posisjon for posisjon blir da mekanisk, og lengdeforskjeller blir synlige. Konklusjonen om fonemstatus er resultatet av kontrollen, ikke inngangen til den.",
    },
    {
      question: "Hva er førstegrepet i en oppgave om distribusjon?",
      options: ["Å skrive tre ekte ord per lyd og notere omgivelsen rundt hver forekomst", "Å avgjøre hvilken av de to lydene som er hovedallofonen i den varieteten som beskrives", "Å lete etter et minimalt par der de to lydene byttes mot hverandre", "Å slå opp lydene i en fonetisk tabell og notere artikulasjonssted for hver av dem"],
      explanation: "Riktig svar er å skaffe materialet: listene over omgivelser kan ikke settes opp uten ord å hente dem fra. Utpekingen av hovedallofonen kommer senere i prosedyren, og et minimalt par hører til den andre framgangsmåten, som svarer på det motsatte spørsmålet.",
    },
    {
      question: "En besvarelse svarer «ja, det er et minimalt par» uten oppsett. Hva er levert?",
      options: ["Konklusjonen, men ikke kontrollen posisjon for posisjon, som er belegget", "Både konklusjonen og begrunnelsen, siden ja-svaret forutsetter at kontrollen er gjort", "Begrunnelsen, men ikke konklusjonen, som må formuleres mer bestemt", "Et fullstendig svar, siden oppgaven bare ba om en avgjørelse mellom to muligheter"],
      explanation: "Riktig svar er at bare konklusjonen er levert. Kontrollen posisjon for posisjon er det som viser at du kan noe, og den er ikke underforstått. Dette er feil #8 i praksis: å svare på et klassifiseringsspørsmål uten begrunnelse.",
    },
    {
      question: "Hvorfor er *hage* og *hakke* ikke et minimalt par?",
      options: ["Fordi lengdeforholdet er byttet i tillegg til konsonantens stemthet", "Fordi de to ordene har ulikt antall stavelser når de uttales i vanlig tempo", "Fordi begge ordene inneholder den samme vokalen først i ordet og derfor ikke kontrasterer", "Fordi det ene ordet er et verb og det andre et substantiv i grunnform"],
      explanation: "Riktig svar er at to forhold varierer samtidig: stemtheten og fordelingen av lengde mellom vokal og konsonant. Da kan ingen enkelt opposisjon isoleres. Begge ordene har to stavelser, og ordklasse er irrelevant for testen.",
    },
    {
      question: "Hva er den praktiske testen på hvilken variant som er biallofon?",
      options: ["At betingelsen for forekomsten kan skrives som én hel setning uten unntak", "At den forekommer i færre ord enn den andre varianten når man teller opp i en ordbok", "At den skrives med et eget grunntegn i alfabetet i stedet for med et diakritisk tegn", "At den er lettest å høre for en lytter som ikke kjenner språket fra før"],
      explanation: "Riktig svar er at betingelsen skal kunne skrives i én setning. Går det ikke, har du enten byttet om på variantene eller så er fordelingen ikke komplementær. Frekvens, skrivemåte og hørbarhet er alle irrelevante kriterier.",
    },
    {
      question: "Hva slags forhold står den palatale og den postalveolare frikativen i, for en taler som skiller dem?",
      options: ["Distinktiv opposisjon, siden minimale par som «kjære» og «skjære» skiller betydning", "Komplementær distribusjon, siden den ene står i kj-ord og den andre i sj-ord", "Fri variasjon, siden taleren selv kan velge hvilken hun bruker", "Ingen fonologisk sammenheng, siden lydene lages på ulike steder"],
      explanation: "Riktig svar er distinktiv opposisjon: lydene står i samme omgivelse, og byttet gir et annet ord, som i *kjære* mot *skjære*. Distraktoren om kj-ord og sj-ord formulerer betingelsen i bokstaver i stedet for i lyder, og det er nettopp den fella som gjør påstanden om komplementær distribusjon feil.",
    },
    {
      question: "Hva er den vanligste måten å svare på feil spørsmål i en sonoritetsoppgave?",
      options: ["Å gjengi prinsippet i stedet for å peke ut overgangen der det brytes", "Å bruke fonetisk transkripsjon der oppgaven ba om en fonemisk form av ordet", "Å dele ordet i stavelser før man har delt det i ansats, kjerne og koda", "Å oppgi hvilken uttale man beskriver, siden det ikke er nødvendig i denne oppgavetypen"],
      explanation: "Riktig svar er å gjengi prinsippet. Setningen er riktig og besvarer ikke bestillingen, og det er feil #5: å hoppe over ett av oppgavens ledd. Å oppgi hvilken uttale du beskriver, er aldri feil — i flere oppgavetyper er det påkrevd.",
    },
    {
      question: "Hvorfor er *lang* og *ring* ubrukelig som bevis for at to konsonanter er ulike fonemer?",
      options: ["Fordi både første konsonant og vokalen er byttet, slik at to variabler endres samtidig", "Fordi de to ordene tilhører ulike ordklasser og derfor ikke kan sammenlignes", "Fordi begge ordene ender på den samme nasalen og dermed er for like til å skilles", "Fordi ingen av de to ordene finnes i en fonemisk transkripsjon med markert stavelsesgrense"],
      explanation: "Riktig svar er at to forhold varierer samtidig. Ordene er forskjellige, men du kan ikke vite hvilken av forskjellene som gjorde det. Vil du prøve de to likvidene mot hverandre, er *lang* mot *rang* det rene paret.",
    },
    {
      question: "Hva viser det at listene over omgivelser ikke overlapper?",
      options: ["At fordelingen er komplementær, og at lydene derfor er allofoner av samme fonem", "At de to lydene er ulike fonemer, siden de aldri kan opptre på samme sted i ordet", "At analysen er ufullstendig, siden alle lyder må kunne stå i minst én felles omgivelse", "At den ene av de to lydene er en fon og den andre et fonem i språksystemet"],
      explanation: "Riktig svar er komplementær distribusjon og dermed allofoni: der lydene aldri møtes, kan de heller aldri skille to ord. Overlappende lister peker mot enten opposisjon eller fri variasjon, avhengig av om byttet gir et annet ord.",
    },
    {
      question: "Hvilken variant er hovedallofon av nasalfonemet i norsk?",
      options: ["Den alveolare nasalen, siden den opptrer i alle posisjoner uten betingelse", "Den velare nasalen, siden den er den mest iøynefallende varianten", "Den retroflekse nasalen, siden den bare kommer etter /r/", "Den labiodentale nasalen, siden den står foran /f/ og /v/"],
      explanation: "Riktig svar er den alveolare: den krever ingen betingelse og opptrer der ingen av de andre gjelder. De tre andre har hver sin skrivbare betingelse — etter r, foran velar, foran labiodental — og er dermed biallofoner. Hørbarhet er ikke kriteriet.",
    },
    {
      question: "Hva betyr merkingen «omstridt — begge forsvarlige» i en fasit?",
      options: ["At to konklusjoner er fullt tellende når de er begrunnet, og at kriteriet avgjør, ikke svaret", "At faglitteraturen ennå ikke har undersøkt spørsmålet grundig nok til å gi noe svar", "At oppgaven er formulert uklart og derfor bør hoppes over på en eksamen", "At begge konklusjonene er delvis gale, slik at ingen av dem gir full uttelling"],
      explanation: "Riktig svar er at begge lesningene teller. Merkingen finnes fordi det motsatte inntrykket er feil #9: å tro at et klassifiseringsspørsmål har ett riktig svar. Det som avgjør uttellingen, er om kriteriet er skrevet ut og brukt konsekvent.",
    },
    {
      question: "Hva skjer fonetisk med nasalen i uttalen av *sandkasse*?",
      options: ["Den tar velart artikulasjonssted etter den følgende lukkelyden", "Den faller bort sammen med dentalen etter seg", "Den blir stavelsesbærende, siden vokalen foran den er kort og trykksvak", "Den blir retrofleks, siden den står i grensen mellom to ledd i et sammensatt ord"],
      explanation: "Riktig svar er nasalassimilasjon: nasalen tar sted etter den følgende velaren. Det er dentalen som faller bort, ikke nasalen — to forskjellige fenomener i samme ord. Retroflekser krever en r, som ikke finnes her.",
    },
    {
      question: "Hva er forskjellen på et bortfall og en assimilasjon?",
      options: ["I et bortfall er lyden borte; i en assimilasjon er den der, men endret", "Et bortfall skjer bare over en ordgrense, mens en assimilasjon bare skjer inne i et ord", "Bortfall gjelder konsonanter, mens assimilasjon gjelder vokaler", "Et bortfall skrives i den fonemiske formen, mens en assimilasjon bare skrives fonetisk"],
      explanation: "Riktig svar er om lyden er borte eller endret. I uttalen av *sandkasse* skjer begge deler samtidig. Begge fenomenene finnes både inne i ord og over grenser, gjelder både vokaler og konsonanter, og begge er forutsigbare og skrives derfor ikke i den fonemiske formen.",
    },
    {
      question: "Hvorfor er «rekk over alt» dårlig råd i en fonologioppgave?",
      options: ["Fordi omtrent halve verdien av hvert delsvar ligger i begrunnelsen, som er det første som ryker", "Fordi oppgavene alltid er så lange at ingen kandidat rekker gjennom dem uansett", "Fordi det gis trekk for hvert delsvar man forsøker seg på uten å være sikker", "Fordi sensor bare retter de tre første delsvarene i en oppgave med mange punkter"],
      explanation: "Riktig svar er at ubegrunnede konklusjoner er systematisk underbetalte. Fem riktige konklusjoner uten oppsett er verdt omtrent det samme som to og en halv fullstendig besvart deloppgave. Det finnes ingen regel om trekk for forsøk eller om at bare de første delsvarene rettes.",
    },
    {
      question: "Hva er den riktige måten å formulere en fonologisk betingelse på?",
      options: ["I lyder, trykk og posisjon i ordet, slik at betingelsen kan etterprøves", "I bokstaver og skrivemåter, slik ordene står i teksten", "I ordklasser, siden det er ordets grammatiske type som avgjør uttalen av det", "I betydninger, siden det er betydningsforskjellen som er det avgjørende kriteriet"],
      explanation: "Riktig svar er lyder, trykk og posisjon. En betingelse formulert i bokstaver er en påstand om ortografi, og den fanger ikke det som faktisk styrer uttalen. Betydning avgjør fonemstatus, men ikke hvilken variant som kommer i en gitt omgivelse.",
    },
    {
      question: "Hvorfor er det lurt å skrive det som er likt før det som er ulikt i et minimalt par?",
      options: ["Fordi likhetene er belegget: de viser at bare én ting varierer", "Fordi sensor leser den første setningen i hvert delsvar og hopper over resten", "Fordi forskjellen mellom ordene alltid er den samme uansett hvilket par man velger", "Fordi rekkefølgen er fastsatt i retningslinjene for hvordan en transkripsjon skal settes opp"],
      explanation: "Riktig svar er at likhetene er belegget. Forskjellen er det oppgaven allerede har pekt på; det du skal vise, er at ingenting annet varierer. Rekkefølgen er en arbeidsvane, ikke en formregel, og den lønner seg fordi den fanger lengdefeil.",
    },
    {
      question: "Hva er en kald bank?",
      options: ["En oppgavesamling uten hint, der du selv må finne framgangsmåten", "En samling oppgaver som er for vanskelige til å høre hjemme i pensum for emnet", "En oppgavesamling der fasiten er utelatt, slik at du må søke svaret andre steder", "En samling oppgaver som bare skal leses, ikke løses, fordi de er ment som illustrasjoner"],
      explanation: "Riktig svar er at hintene er utelatt. Fasiten finnes, som momentliste, men den kommer etter at du har prøvd. Poenget er å trene det som faktisk skjer på eksamen: at ingen forteller deg hvilken oppskrift du skal hente.",
    },
    {
      question: "Hva er den beste enkeltvanen når du åpner en fonologioppgave under tidspress?",
      options: ["Å skrive én linje om hvilken av de fem oppgavetypene det er", "Å begynne å skrive umiddelbart, siden hvert sekund brukt på planlegging er tapt skrivetid", "Å lese hele oppgavesettet på nytt for å lete etter hint", "Å skrive ned alle definisjonene fra kapitlet før du ser på hva som blir spurt om"],
      explanation: "Riktig svar er å typebestemme oppgaven. Da har du hentet oppskriften i samme bevegelse, og du har unngått den eneste feilen som koster hele delsvaret: å svare på en annen type enn den som ble stilt. En full definisjonsgjennomgang som ikke er bestilt, koster tid uten å gi uttelling.",
    },
  ],
  'exfac03-spr-3-1': [
    {
      question: "Hva registrerer den fonetiske transkripsjonen?",
      options: ["Hva munnen faktisk gjorde i en bestemt uttale", "Hvilke betydningsskillende enheter ordet er bygd av i språksystemet", "Hvordan ordet skrives etter gjeldende rettskriving i den valgte målformen", "Hvilken betydning ordet har, slik den ville stått i et ordboksoppslag"],
      explanation: "Riktig svar er at den fonetiske formen beskriver en hendelse i munnen. De betydningsskillende enhetene hører til den fonemiske formen, og skrivemåten er den ortografiske formen, som er verken det ene eller det andre.",
    },
    {
      question: "Hva utelates i den fonemiske formen?",
      options: ["Alt som er forutsigbart fra omgivelsen", "Alt som ikke finnes som eget tegn på et vanlig norsk tastatur", "Alle konsonanter som ikke bærer trykk i den stavelsen de står i", "Alle lyder som ikke også finnes i skriftbildet som egne bokstaver"],
      explanation: "Riktig svar er det forutsigbare: aspirasjon, retroflekser, assimilasjoner og reduksjonsvokaler kan regnes ut av omgivelsen og trenger derfor ikke stå. Tastaturet og skriftbildet har ingenting med saken å gjøre, og trykk er ikke kriteriet.",
    },
    {
      question: "Hvorfor gir den generelle setningen om at allofonisk variasjon ikke tas med i den fonemiske formen, null poeng?",
      options: ["Fordi den ikke navngir ett eneste tegn og ingen konkret omgivelse i det ordet oppgaven gjelder", "Fordi den er faglig gal: allofonisk variasjon skal nettopp skrives inn mellom skråstreker og ikke i klammer", "Fordi den bruker en fagterm som ikke hører hjemme i emnet i det hele tatt", "Fordi den er skrevet i passiv form i stedet for i aktiv form"],
      explanation: "Riktig svar er mangelen på konkresjon. Setningen er faglig riktig, og den er nettopp derfor så fristende — men den kunne stått i en besvarelse om et hvilket som helst ord, og bestillingen er å forklare hva forskjellene i dette ordet skyldes.",
    },
    {
      question: "Hva er den riktige formen på en forklaringssetning?",
      options: ["Her står X i klammer og Y mellom skråstreker, fordi Z", "Den fonetiske formen er mer detaljert enn den fonemiske formen av det samme ordet", "Slik uttaler jeg ordet, og derfor skriver jeg det slik i den fonetiske formen", "De to formene skiller seg fordi de tilhører to ulike beskrivelsesnivåer i faget"],
      explanation: "Riktig svar er malen med tegn, motstykke og navngitt omgivelse. De tre andre er alle sanne setninger som ikke sier hvilket tegn det gjelder eller hvilken omgivelse som utløste det, og de kunne stått uendret i en besvarelse om et annet ord.",
    },
    {
      question: "Hvilket av disse tegnene står i BEGGE transkripsjonsnivåene?",
      options: ["Lengdetegnet, som er betydningsskillende i norsk og derfor hører hjemme i begge formene", "Tegnet for retrofleks nasal, som oppstår der en r møter en dental i uttalen", "Aspirasjonstegnet, som markerer luftpustet etter en trykksterk lukkelyd", "Reduksjonsvokalen, som står i alle trykksvake stavelser i norske ord"],
      explanation: "Riktig svar er lengdetegnet: lengde er betydningsskillende i norsk, som *tak* mot *takk* viser, og kan derfor ikke regnes ut av omgivelsen. De tre andre er alle forutsigbare fra omgivelsen og hører bare hjemme i klammer.",
    },
    {
      question: "Hva utløser retrofleksjon i norsk?",
      options: ["En dental rett etter en r, hos en taler som har tungespiss-r", "En dental rett foran en r, uansett hvordan taleren uttaler r-en sin", "En trykksterk stavelse der lukkelyden står først i ordet", "En sammensetningsfuge, uavhengig av hvilke lyder som møtes der"],
      explanation: "Riktig svar er dentalen etter r-en, og forutsetningen om tungespiss-r er ikke en detalj: en uvular r kan ikke smelte sammen med en følgende dental. Rekkefølgen er avgjørende, og fugen i seg selv utløser ingenting — den er bare et sted der slike møter ofte oppstår.",
    },
    {
      question: "Hvorfor er det verdt å nevne fugen eksplisitt i forklaringsleddet?",
      options: ["Fordi det viser at regelen virker over ordgrensen i en sammensetning", "Fordi fugen alltid er stedet der hovedtrykket i ordet faller", "Fordi ordet ellers ville blitt lest som to selvstendige ord av sensor", "Fordi fugen er den eneste plassen i ordet der reduksjonsvokal kan stå"],
      explanation: "Riktig svar er at regelen krysser ordgrensen, og det er nettopp derfor eksamensordene er lange og sammensatte. Hovedtrykket ligger normalt i førsteleddet, ikke i fugen, og reduksjonsvokalen kan stå i enhver trykksvak stavelse.",
    },
    {
      question: "En kandidat skriver de to formene helt likt, bortsett fra klammene og skråstrekene. Hva er problemet?",
      options: ["Da er det ingen forskjell å forklare, og et helt ledd av bestillingen faller bort", "Da har kandidaten brukt for mye tid på den fonetiske formen og for lite på den fonemiske", "Da har kandidaten glemt å oppgi sin språklige bakgrunn før transkripsjonen", "Da er den fonemiske formen for detaljert til å kunne kalles fonemisk i det hele tatt"],
      explanation: "Riktig svar er at forklaringsleddet blir umulig å skrive. Oppgaven ber om hva forskjellene skyldes, og finnes det ingen forskjeller, er det heller ingenting å forklare. Det er et selvstendig problem uavhengig av tidsbruk og bakgrunn.",
    },
    {
      question: "Hva står mellom skråstreker der den fonetiske formen har den retroflekse nasalen?",
      options: ["Både r-en og n-en, altså to segmenter", "Bare n-en, siden r-en er blitt borte i uttalen av ordet", "Bare r-en, siden det er den som utløser hele fenomenet i første omgang", "Et eget tegn for retrofleks nasal, siden lyden finnes i uttalen"],
      explanation: "Riktig svar er at begge segmentene står igjen. Retrofleksen er en sammensmelting som er forutsigbar fra rekkefølgen, og de to enhetene er der selv om de realiseres som én lyd. Et retrofleks tegn mellom skråstreker ville påstått at retrofleksen er betydningsskillende.",
    },
    {
      question: "Hva er den ortografiske formen?",
      options: ["Skrivemåten etter rettskrivinga, skrevet i kursiv og ikke i klammer", "Den formen som står mellom skråstreker og viser ordets enheter", "Den formen som står i klammer og viser hva munnen gjorde", "En transkripsjon som bruker bokstaver i stedet for lydtegn"],
      explanation: "Riktig svar er skrivemåten. Den er verken fonetisk eller fonemisk, og skriftbildet har stumme bokstaver, doble konsonanter som markerer vokallengde og bokstavgrupper som svarer til én lyd — ingenting av det hører hjemme i en transkripsjon.",
    },
    {
      question: "Hvor mange forklaringssetninger skal du skrive?",
      options: ["Like mange som det er plasser der de to formene ikke har det samme", "Én, som dekker hele forholdet mellom de to nivåene på en gang", "To, uansett ord: én om konsonantene og én om vokalene i ordet", "Så mange du rekker innenfor tidsbudsjettet du har satt av til hele oppgaven"],
      explanation: "Riktig svar er at antallet følger av ordet: tell forskjellene og skriv én setning per forskjell. Den ene samlesetningen er nesten alltid den generelle frasen, og en fast oppdeling i konsonanter og vokaler treffer ikke fenomenene.",
    },
    {
      question: "Hva skjer med nasalen foran en labiodental konsonant?",
      options: ["Den tar labiodentalt artikulasjonssted, altså samme sted som f og v", "Den blir stavelsesbærende og overtar kjernen i stavelsen", "Den faller bort helt, slik at bare den følgende konsonanten står igjen", "Den blir retrofleks, på samme måte som en dental etter en r blir det"],
      explanation: "Riktig svar er assimilasjonen: nasalen tar sted etter konsonanten som følger. Bortfall er et annet fenomen, stavelsesbærende nasal krever en trykksvak endelse, og retrofleksjon krever en r foran.",
    },
    {
      question: "Hvorfor står bitrykksmarkøren i begge transkripsjonsnivåene?",
      options: ["Fordi den signaliserer at ordet er sammensatt, og det følger av ordets bygning og ikke av omgivelsen", "Fordi den er et diakritisk tegn, og alle diakritiske tegn står på begge transkripsjonsnivåene", "Fordi den er nødvendig for at leseren skal kunne uttale ordet riktig", "Fordi den erstatter stavelsesgrensen, som ellers måtte markeres med punktum"],
      explanation: "Riktig svar er at bitrykket hører til ordets bygning. Det kan ikke regnes ut av naboene, og derfor er det ikke en nivåforskjell. At noe er et diakritisk tegn, avgjør ingenting — aspirasjonstegnet er også diakritisk og hører bare hjemme i klammer.",
    },
    {
      question: "Hva er den praktiske testen på om forklaringssetningen din er for generell?",
      options: ["Om setningen kunne flyttes uendret over til et helt annet ord", "Om setningen er lengre enn to linjer når den skrives ned", "Om setningen inneholder ordet allofon eller ordet fonem", "Om setningen er skrevet før eller etter selve transkripsjonen"],
      explanation: "Riktig svar er flyttetesten: en forklaring som passer på alt, forklarer ingenting. Lengde er ikke kriteriet, og fagtermene er helt legitime så lenge de står sammen med et konkret tegn og en konkret omgivelse.",
    },
    {
      question: "En taler har latt den palatale frikativen falle sammen med den postalveolare. Hva står i hennes fonemiske form?",
      options: ["Den postalveolare frikativen begge steder, siden den palatale ikke er et eget fonem hos henne", "Den palatale frikativen der skriftbildet har kj, siden rettskrivingen bestemmer den fonemiske formen", "Begge frikativene, siden den fonemiske formen skal vise hele det norske lydsystemet", "Ingen av dem, siden en frikativ som ikke skilles fra en annen, utelates helt"],
      explanation: "Riktig svar er at hennes fonemiske form bare har den lyden hun faktisk har som eget fonem. Den fonemiske formen registrerer talerens eget system, ikke rettskrivingen og ikke summen av alle norske varieteter.",
    },
    {
      question: "Hva er en nivåforskjell?",
      options: ["En plass der den fonetiske og den fonemiske formen av samme ord ikke har det samme", "En forskjell mellom to talere som transkriberer det samme ordet ulikt", "En feil i transkripsjonen som gir trekk på et halvt poeng i den nyeste poengsatte terminen", "En forskjell mellom skrivemåten og uttalen av et og samme ord"],
      explanation: "Riktig svar er forskjellen mellom de to formene av samme ord. Den skal være der og krever én forklaringssetning. En feil er noe annet, og forskjellen mellom skrift og tale er et tredje forhold.",
    },
    {
      question: "Hvorfor er aspirasjonen borte i lukkelyden i *skole*?",
      options: ["Fordi lukkelyden står rett etter s, som blokkerer aspirasjonen", "Fordi ordet har to stavelser og aspirasjon bare finnes i enstavelsesord", "Fordi lukkelyden er stemt og stemte lukkelyder aldri aspireres i norsk", "Fordi stavelsen er trykksvak og aspirasjon krever trykk"],
      explanation: "Riktig svar er stillingen etter s. Aspirasjonen kommer i trykksterk ansats uten s foran, og her er nettopp den betingelsen ikke oppfylt. Stavelsen bærer faktisk hovedtrykket, så trykk er ikke forklaringen, og lukkelyden er ustemt.",
    },
    {
      question: "Hva er det tredje leddet i bestillingen i en transkripsjonsoppgave?",
      options: ["Å forklare hva forskjellene mellom formene skyldes", "Å markere stavelsesgrensene i den fonemiske formen med punktum", "Å oppgi hvilke lærebøker og oppslagsverk du har brukt i arbeidet", "Å sammenligne din egen uttale med en normert standarduttale av ordet"],
      explanation: "Riktig svar er forklaringsleddet. Bestillingen har tre ledd: begge transkripsjonsnivåene, din oppgitte språklige bakgrunn, og forklaringen. Stavelsesgrenser bes det om i andre oppgaver, og en sammenligning med en standarduttale er ikke bestilt noe sted.",
    },
    {
      question: "Hva bør du gjøre hvis du er usikker på ett tegn i transkripsjonen?",
      options: ["Skrive det du mener er riktig, og bruke én forklaringssetning på å begrunne valget", "La plassen stå tom, siden et manglende tegn ikke gir trekk", "Skrive begge de mulige tegnene ved siden av hverandre og la sensor velge det som passer", "Bytte til et annet ord som du behersker bedre, og forklare hvorfor"],
      explanation: "Riktig svar er å skrive og begrunne. Et manglende tegn koster like mye som et feil tegn der trekk er oppgitt, og begrunnelsen kan gi uttelling som den tomme plassen ikke kan. Å skrive to alternativer uten å velge, er ikke en transkripsjon.",
    },
    {
      question: "Hva betyr det at kort ø skrives med et annet tegn enn lang ø i den fonetiske formen?",
      options: ["At vokalkvaliteten følger av lengden, og at kvalitetsforskjellen derfor er forutsigbar", "At de to vokalene er to ulike fonemer som kan skille ord fra hverandre i norsk", "At skriftbildet skiller de to vokalene med ulike bokstaver i rettskrivingen", "At den korte vokalen alltid står i en trykksvak stavelse og den lange i en trykksterk"],
      explanation: "Riktig svar er at kvaliteten følger av lengden. Den fonemiske formen kan derfor bruke ett tegn, mens lengden selv står i begge formene fordi den er betydningsskillende. Skriftbildet bruker samme bokstav, og korte vokaler står ofte i trykksterke stavelser.",
    },
  ],
  'exfac03-spr-3-2': [
    {
      question: "Hva er vurderingskriteriet i en transkripsjonsoppgave?",
      options: ["Intern konsistens med den bakgrunnen kandidaten selv har oppgitt", "Likhet med en normert standarduttale slik den er beskrevet i faglitteraturen om norsk", "At transkripsjonen er den mest utbredte varianten blant norsktalende i dag", "At kandidaten bruker flest mulig av de tegnene som finnes i det fonetiske alfabetet"],
      explanation: "Riktig svar er intern konsistens. Siden kandidatene skal transkribere sin egen uttale, godtas ulike varianter så lenge de er en mulig uttale gitt den oppgitte bakgrunnen. Utbredelse og antall tegn er ikke kriterier, og det finnes ikke noe fasitsvar å måles mot.",
    },
    {
      question: "Hva er det første trinnet i uttalekontrakten?",
      options: ["Å oppgi bakgrunnen, altså hvilken uttale transkripsjonen skal måles mot", "Å skrive den fonetiske formen av ordet, siden det er den som er mest detaljert av de to", "Å skrive den fonemiske formen, siden den er kortest og derfor raskest å komme i gang med", "Å forsvare de valgene som avviker fra normaluttalen"],
      explanation: "Riktig svar er bakgrunnsleddet. Det er premissen de to andre trinnene hviler på: uten en oppgitt bakgrunn er transkripsjonen umulig å vurdere, og forsvaret i trinn tre har ingenting å forsvare seg mot.",
    },
    {
      question: "Hvilket valgpunkt låser flest tegn senere i transkripsjonen?",
      options: ["R-typen, siden den avgjør om følgende dentaler blir retroflekse", "Reduksjonsvokalens kvalitet i de trykksvake endelsene i ordet", "Trykkplasseringen i innlånte ord som kandidaten måtte komme til å bruke", "Om kandidaten velger å markere tonelag eller å la det være"],
      explanation: "Riktig svar er r-typen: tungespiss-r åpner for hele retrofleksrekka, mens skarre-r stenger den helt. De øvrige valgpunktene låser tegn de også, men ingen av dem påvirker like mange steder i et langt sammensatt ord.",
    },
    {
      question: "En kandidat oppgir skarre-r og skriver likevel en retrofleks nasal. Hva er problemet?",
      options: ["Tegnet er umulig gitt den oppgitte bakgrunnen, siden en uvular r ikke smelter sammen med en følgende dental", "Tegnet er galt i seg selv, siden retroflekse nasaler ikke finnes i norsk", "Tegnet hører hjemme mellom skråstreker og ikke i klammer", "Tegnet er riktig, men kandidaten har glemt å markere lengden på det"],
      explanation: "Riktig svar er at tegnet strider mot kontrakten. Retroflekse nasaler finnes i norsk og er helt korrekte for en taler med tungespiss-r — det er forholdet mellom bakgrunn og tegn som svikter, og det er feil #2.",
    },
    {
      question: "Hva menes med at konsistens slår normaluttale?",
      options: ["En gjennomført transkripsjon av en mindre utbredt variant er et bedre svar enn en halvveis transkripsjon av en vanlig", "At den mest utbredte uttalen alltid er den tryggeste å velge på eksamen", "At kandidaten bør bytte til en standarduttale hvis hun er usikker på sin egen", "At normaluttalen er den eneste som gir full uttelling i denne oppgavetypen"],
      explanation: "Riktig svar er at gjennomføringen teller mer enn variantvalget. Det følger direkte av vurderingsregelen: varianter godtas så lenge de er mulige gitt den oppgitte bakgrunnen. Å bytte uttale for anledningen gir tvert imot flere feil.",
    },
    {
      question: "Hva er svakheten ved bakgrunnsleddet «jeg er fra Østlandet»?",
      options: ["Det låser ingen tegn, og gir derfor ikke noe å måle transkripsjonen mot", "Det er for langt, og bakgrunnsleddet skal være på under fem ord", "Det oppgir en landsdel i stedet for en kommune, og bør være mer nøyaktig geografisk", "Det bruker første person, og en besvarelse skal skrives i tredje person"],
      explanation: "Riktig svar er at opplysningen ikke er operativ. Et bakgrunnsledd skal si hva valget låser: r-type, frikativene, tjukk l, endelsesvokal. Geografisk presisjon uten lydopplysninger hjelper ikke, og førsteperson er helt på sin plass her.",
    },
    {
      question: "Hvor regnes trekket i en transkripsjonsoppgave?",
      options: ["Innenfor den bakgrunnen kandidaten selv oppga, ikke mot en normaluttale", "På tvers av alle mulige bakgrunner, slik at det tegnet flest talere ville brukt, er fasit", "Bare i den fonetiske formen, siden den fonemiske er feilfri", "Bare der kandidaten avviker fra den transkripsjonen som står i sensorveiledningen"],
      explanation: "Riktig svar er innenfor bakgrunnen. Et tegn er ikke en feil fordi det avviker fra en annen kandidats svar, bare hvis det avviker fra kontrakten det står i. Begge transkripsjonsnivåene kan inneholde feil.",
    },
    {
      question: "Hva skiller et brudd på et valgpunkt fra et brudd på en allmenn regel?",
      options: ["Et valgpunktbrudd er inkonsistens med egen kontrakt, mens et regelbrudd er galt uansett bakgrunn", "Et valgpunktbrudd gir trekk, mens et regelbrudd bare gir en merknad uten poengkonsekvens", "Et valgpunktbrudd gjelder konsonanter, mens et regelbrudd bare gjelder vokaler", "Et valgpunktbrudd finnes bare i den fonetiske formen og aldri i den fonemiske"],
      explanation: "Riktig svar er skillet mellom kontrakt og allmenn regel. Aspirasjon i koda er galt for alle talere; en retrofleks etter oppgitt skarre-r er galt bare for den kandidaten. Begge trekker, men de er ulike ting.",
    },
    {
      question: "Hva bør et bakgrunnsavsnitt si om tjukk l?",
      options: ["Hvilke ordtyper lyden opptrer i hos deg", "Hvor mange talere i landet som har lyden i dagligtalen sin", "Når lyden oppsto i norske dialekter", "Om lyden regnes som korrekt i den skriftlige standarden"],
      explanation: "Riktig svar er ordtypene. Fordelingen er ikke den samme hos alle som har lyden, og en presisering som «i ord som *sol* og *dal*» fjerner et helt grensetilfelle fra besvarelsen. Historikk og skriftnorm har ingenting med transkripsjonen å gjøre.",
    },
    {
      question: "Hvorfor kan to helt ulike transkripsjoner av samme ord begge få full uttelling?",
      options: ["Fordi hver av dem er konsistent med den bakgrunnen den selv oppgir", "Fordi sensor ikke har anledning til å avgjøre hvilken uttale som er den riktige", "Fordi transkripsjonsoppgaven vurderes samlet og ikke tegn for tegn", "Fordi begge kandidatene har levert like mange tegn i besvarelsene sine"],
      explanation: "Riktig svar er konsistenskriteriet. Det er ikke to alternativer der ett er riktigst, men to besvarelser som hver oppfyller kriteriet. Oppgaven vurderes tvert imot tegn for tegn, med trekk per feil.",
    },
    {
      question: "Hva står i den fonemiske formen hos en taler som har sammenfall mellom de to frikativene?",
      options: ["Den postalveolare frikativen også i kj-ord, siden fonemene har falt sammen", "Den palatale frikativen i kj-ord, siden skriftbildet bestemmer den fonemiske formen", "Begge frikativene, slik at systemet blir fullstendig beskrevet", "En egen tegnkombinasjon som viser at lydene har falt sammen hos taleren"],
      explanation: "Riktig svar er at bare den lyden taleren faktisk har som eget fonem, står mellom hennes skråstreker. Den fonemiske formen registrerer talerens eget system, ikke rettskrivingen og ikke summen av alle norske varieteter.",
    },
    {
      question: "Hva er status for tonelagsmarkering i denne oppgavetypen?",
      options: ["Den er valgfri, men den som markerer, må være konsekvent", "Den er obligatorisk i alle transkripsjoner av flerstavelsesord", "Den er forbudt, siden tonelag ikke hører til det fonetiske alfabetet", "Den kreves bare i den fonemiske formen og aldri i den fonetiske"],
      explanation: "Riktig svar er at markeringen er valgfri. Arkivet dokumenterer ikke at den kreves, og boka påstår ikke at den gjør det — men velger du å markere, låses du til å gjøre det overalt der du markerer trykk.",
    },
    {
      question: "Hva er den vanligste årsaken til at et tilfelle blir et grensetilfelle i gyldighetsvurderingen?",
      options: ["At bakgrunnsavsnittet er for upresist til å avgjøre saken", "At kandidaten har brukt et tegn som ikke finnes i det fonetiske alfabetet", "At de to transkripsjonsnivåene er skrevet i feil rekkefølge i besvarelsen", "At ordet er for langt til at alle tegnene lar seg vurdere hver for seg"],
      explanation: "Riktig svar er upresisheten i bakgrunnen. Et grensetilfelle er ofte ikke kandidatens feil i transkripsjonen, men et symptom på et bakgrunnsavsnitt som ikke låste nok — og motmiddelet er å nevne ordtypene.",
    },
    {
      question: "Hvorfor er det dyrt å bruke to r-systemer i samme besvarelse?",
      options: ["Fordi inkonsistensen rammer flere oppgaver på samme sett samtidig", "Fordi de to systemene bruker tegn som ikke kan stå i samme transkripsjon rent teknisk", "Fordi sensor da må velge hvilket av systemene som skal legges til grunn, og velger det strengeste", "Fordi kandidaten da har oppgitt to bakgrunner"],
      explanation: "Riktig svar er rekkevidden: kontrakten gjelder hele besvarelsen, også senere oppgaver på samme sett. En glipp i r-systemet i én oppgave gjør besvarelsen inkonsistent med seg selv på tvers av oppgaver.",
    },
    {
      question: "Hva låser valget av trykkplassering i et importord?",
      options: ["Hvor aspirasjonen kommer og hvor reduksjonsvokalen står", "Hvilken av de to frikativene som brukes i ordet", "Om ordet får retroflekser eller ikke i uttalen", "Hvilken målform besvarelsen skrives på"],
      explanation: "Riktig svar er at trykket styrer to andre fenomener: aspirasjon krever trykksterk ansats, og reduksjonsvokal krever trykksvak stavelse. Ett trykkvalg kan derfor endre flere tegn lenger ute i ordet. Frikativvalg og retroflekser henger ikke sammen med trykket.",
    },
    {
      question: "Hva er det billigste grepet for å kontrollere egen konsistens før innlevering?",
      options: ["Å lese transkripsjonen med bakgrunnsavsnittet dekket over, og se om du kan rekonstruere det fra tegnene", "Å telle antall tegn i de to formene og kontrollere at de er like mange", "Å sammenligne transkripsjonen med den mest utbredte uttalen av ordet", "Å skrive om bakgrunnsavsnittet slik at det passer til transkripsjonen du endte opp med"],
      explanation: "Riktig svar er rekonstruksjonstesten. Kan du lese kontrakten ut av tegnene, er du konsistent. Å telle tegn sier ingenting, og å tilpasse bakgrunnen i etterkant er å skrive kontrakten for å slippe unna den.",
    },
    {
      question: "Hva er feil nummer 1 i denne oppgavetypen?",
      options: ["Å transkribere uten å oppgi hvilken språklig bakgrunn du har", "Å transkribere ortografien i stedet for uttalen av ordet", "Å forklare nivåforskjellen med en generell frase i stedet for med konkrete tegn", "Å bruke reduksjonsvokal der uttalen har en stavelsesbærende konsonant"],
      explanation: "Riktig svar er den manglende bakgrunnen. De tre andre er reelle feil i emnet, men de rammer utførelsen; denne rammer premissen, og uten den kan ingen av de andre leddene vurderes i det hele tatt.",
    },
    {
      question: "Hva gir uttalekontrakten IKKE frihet til?",
      options: ["Å plassere aspirasjon andre steder enn i trykksterk ansats", "Å velge om du har tungespiss-r eller skarre-r i din egen uttale", "Å velge om du skiller de to frikativene eller har sammenfall", "Å velge om trykksvake endelser uttales med vokal eller uten"],
      explanation: "Riktig svar er aspirasjonens plassering: den følger en regel som gjelder alle talere. De tre andre er ekte valgpunkter der ulike talere gjør systematisk ulike ting, og der begge valg er fullt tellende når de følges.",
    },
  ],
  'exfac03-spr-3-3': [
    {
      question: "Hva er det første trinnet i transkripsjonsprosedyren?",
      options: ["Å høre etter sammensetningsfugen", "Å skrive ned alle lydtegnene ordet kan tenkes å inneholde, før du velger mellom dem", "Å slå opp ordet for å kontrollere hvordan det uttales i en normert standarduttale", "Å bestemme hvilke av tegnene som skal med i den fonemiske formen av ordet"],
      explanation: "Riktig svar er fugen. Den finner du ved å høre etter bitrykket, og den er stedet der flertallet av fenomenene i et langt sammensatt ord oppstår. Kandidater som begynner fra venstre og transkriberer lyd for lyd, finner fugen sist — hvis de finner den.",
    },
    {
      question: "Hvorfor lønner det seg å sette bitrykket før du transkriberer?",
      options: ["Fordi bitrykket peker på fugen, og fugen er der de fleste fenomenene oppstår", "Fordi bitrykket er det eneste tegnet som gir trekk hvis det mangler i besvarelsen", "Fordi bitrykket bestemmer hvilken av de to bakgrunnene du skal beskrive", "Fordi bitrykket må stå før hovedtrykket i rekkefølgen tegnene skrives i"],
      explanation: "Riktig svar er at bitrykket lokaliserer fugen. Alle manglende tegn gir trekk, ikke bare dette, og bakgrunnsvalget er kandidatens eget og uavhengig av ordet. Hovedtrykket står normalt før bitrykket i ordet.",
    },
    {
      question: "Hva er den dyreste enkeltdisponeringsfeilen i transkripsjonsoppgaven?",
      options: ["Å gi opp forklaringsleddet fordi transkripsjonen tok all tiden", "Å bruke for mye tid på å velge hvilken språklig bakgrunn du skal oppgi", "Å skrive den fonemiske formen før den fonetiske i besvarelsen", "Å markere stavelsesgrenser som ingen har bedt om i oppgaveteksten"],
      explanation: "Riktig svar er det uskrevne forklaringsleddet. Grunnen er regnskapet: transkripsjonen har trekk per feil, mens forklaringsleddet bare har uttelling. Et halvferdig forklaringsledd er derfor verdt mer enn de siste tegnene i en transkripsjon.",
    },
    {
      question: "Ser retrofleksregelen framover eller bakover i ordet?",
      options: ["Bakover: dentalen blir retrofleks fordi det står en r foran den", "Framover: r-en blir retrofleks fordi det står en dental etter den", "Begge veier, siden både r-en og dentalen endres i prosessen", "Verken eller: regelen gjelder hele stavelsen under ett"],
      explanation: "Riktig svar er bakover. En r foran en vokal utløser ingenting, og en dental foran en r utløser ingenting. Praktisk bruk: let etter dentaler og sjekk hva som står rett foran hver av dem.",
    },
    {
      question: "Hvorfor blir retrofleksen lang i uttalen av *kortstokk*?",
      options: ["Fordi vokalen foran er kort, og norsk har enten lang vokal og kort konsonant eller omvendt", "Fordi ordet er sammensatt, og sammensetninger har alltid lange konsonanter i selve fugen", "Fordi to segmenter smelter sammen, og lengden er summen av de to", "Fordi retroflekser alltid er lange i norsk, uansett hva som står rundt dem"],
      explanation: "Riktig svar er lengdefordelingen i stavelsen. Det nye segmentet arver lengden fra stavelsen det står i. At to segmenter smelter sammen, forklarer at det blir én lyd, men ikke at den blir lang.",
    },
    {
      question: "Hvilket fenomen er det ene som gjør de to bakgrunnenes FONEMISKE former forskjellige?",
      options: ["Valget mellom den palatale og den postalveolare frikativen", "Valget mellom tungespiss-r og skarre-r, og dermed retrofleksene", "Valget mellom reduksjonsvokal og stavelsesbærende konsonant i endelsen", "Nasalassimilasjonen foran labiodentale og velare konsonanter"],
      explanation: "Riktig svar er frikativvalget: en taler med sammenfall har ikke den palatale frikativen som eget fonem, og skriver derfor den postalveolare også mellom skråstrekene. De øvrige gjelder bare realiseringen og endrer ikke den fonemiske formen.",
    },
    {
      question: "Hva bør du gjøre når et ord inneholder en r som IKKE utløser retrofleks?",
      options: ["Skrive det ut eksplisitt, med begrunnelsen for at betingelsen ikke er oppfylt", "La være å nevne det, siden en fasit bare gjelder de fenomenene som faktisk inntreffer", "Sette inn retrofleksen likevel, siden ordet inneholder en r", "Bytte ordet ut med et der regelen faktisk virker"],
      explanation: "Riktig svar er å skrive det ut. En setning som «regelen utløses ikke her, fordi lyden etter r-en er en labiodental og ikke en dental» viser at du prøver betingelsen i stedet for å gjenkjenne ordtypen, og den er umulig å skrive for en som har pugget ferdige transkripsjoner.",
    },
    {
      question: "Hvorfor er nasalassimilasjonen ikke et valgpunkt?",
      options: ["Fordi den følger av hvilken konsonant som kommer etter, og gjelder alle talere", "Fordi den bare forekommer i sammensatte ord med bitrykk på det andre leddet i ordet", "Fordi den ikke lar seg høre uten teknisk måling av lydbølgene", "Fordi den bare gjelder den ene av de to nasalene i norsk"],
      explanation: "Riktig svar er at fenomenet er regelstyrt og likt for alle. Det gjør nasalbolken til en nyttig kontroll: finner du en forskjell mellom de to bakgrunnenes kolonner der, har du gjort en feil et sted.",
    },
    {
      question: "Hva skjer i uttalen av *sandkasse*?",
      options: ["Dentalen faller bort, og nasalen tar sted etter den følgende lukkelyden", "Nasalen faller bort, og dentalen blir lang for å kompensere for det som er tapt", "Dentalen blir retrofleks, siden den står mellom to andre konsonanter", "Ingenting: ordet uttales med alle segmentene slik de står i skrift"],
      explanation: "Riktig svar er at to ting skjer samtidig, og at de er ulike: et bortfall og en assimilasjon. Fonemisk står begge segmentene igjen, fordi begge fenomenene er forutsigbare fra omgivelsen. Retroflekser krever en r, som ikke finnes her.",
    },
    {
      question: "Hva er forskjellen mellom et bortfall og en assimilasjon?",
      options: ["I et bortfall er lyden borte; i en assimilasjon er den der, men endret", "Et bortfall skjer i skrift, mens en assimilasjon bare skjer i tale", "Et bortfall gir trekk i transkripsjonen, mens en assimilasjon ikke gjør det", "Et bortfall gjelder vokaler, mens en assimilasjon bare gjelder konsonanter"],
      explanation: "Riktig svar er om lyden er borte eller endret. Begge er fonologiske fenomener i tale, begge er forutsigbare fra omgivelsen, og begge gjelder både vokaler og konsonanter. Ingen av dem gir trekk når de er riktig transkribert.",
    },
    {
      question: "Hvorfor skal bitrykket ikke forklares i forklaringsleddet?",
      options: ["Fordi det står i begge formene og derfor ikke er en nivåforskjell", "Fordi det er et diakritisk tegn, og diakritika forklares aldri", "Fordi det bare finnes i den fonetiske formen og er selvforklarende der", "Fordi sensor uansett vet hvor bitrykket faller i et sammensatt ord"],
      explanation: "Riktig svar er at bitrykket ikke skiller de to formene. Det følger av ordets bygning og ikke av lydomgivelsen, og forklaringsleddet gjelder tegn som skiller formene. Det er likevel verdt å nevne som en observasjon.",
    },
    {
      question: "Hva er den vanligste feilen i en kald bank med transkripsjonsord?",
      options: ["Å bruke fenomenet man nettopp har drillet, i stedet for å prøve betingelsen", "Å bruke for lang tid på det første ordet og altfor kort tid på de siste ordene", "Å skrive den fonemiske formen før den fonetiske i besvarelsen", "Å oppgi en annen språklig bakgrunn enn i de foregående bolkene"],
      explanation: "Riktig svar er å overføre fenomenet uten å teste betingelsen. Et ord med en r i seg har ikke nødvendigvis en retrofleks: står det en labiodental etter r-en, utløses regelen ikke. Poenget med en kald bank er nettopp at ingen forteller deg hvilket fenomen ordet er konstruert for.",
    },
    {
      question: "Hva skal du gjøre med et tegn du er usikker på?",
      options: ["Skrive det du mener er riktig, og begrunne valget i forklaringsleddet", "La plassen stå tom, siden en tom plass ikke regnes som en feil", "Skrive begge de mulige tegnene ved siden av hverandre i formen", "Hoppe over hele ordet og bruke tiden på de andre oppgavene i settet i stedet"],
      explanation: "Riktig svar er å skrive og begrunne. Et utelatt tegn teller som en feil på samme måte som et galt tegn, men et begrunnet valg kan gi uttelling i forklaringsleddet. Den tomme plassen kan ikke gi noe.",
    },
    {
      question: "Hvorfor er ordene i transkripsjonsoppgaven alltid lange og sammensatte?",
      options: ["Fordi fugen er stedet der flest av fenomenene oppstår samtidig", "Fordi lange ord er vanskeligere og derfor gir flere poeng enn korte", "Fordi bare lange ord kan inneholde både vokaler og konsonanter", "Fordi sensor da lettere kan telle antall tegn i besvarelsen"],
      explanation: "Riktig svar er fugen: retrofleksregelen virker over den, reduksjonsvokalen står gjerne i fugestavelsen, og bitrykket markerer den. Tre av de hyppigste fenomenene oppstår altså på ett og samme punkt i ordet.",
    },
    {
      question: "Hva betyr det at ordene gjentar seg aldri, men formen alltid?",
      options: ["At oppgavetypen er stabil, mens de konkrete ordene er nye hver termin", "At de samme ordene brukes om igjen i nye kombinasjoner fra termin til termin", "At transkripsjonen alltid skal skrives i samme rekkefølge uansett ord", "At kandidaten kan regne med å kjenne igjen ordene fra tidligere sett"],
      explanation: "Riktig svar er at oppgavetypen er stabil og ordene nye. Konsekvensen er at det ikke nytter å pugge ferdige transkripsjoner. Boka lover ikke at trening på gamle sett gir gjenkjennelse — bare at bestillingen og fenomenene er de samme.",
    },
    {
      question: "Hvorfor er lukkelyden i andreleddet i *pengeskap* ikke aspirert?",
      options: ["Fordi den står rett etter s", "Fordi andreleddet i en sammensetning aldri får aspirasjon", "Fordi stavelsen er trykksvak og aspirasjon krever trykk", "Fordi lukkelyden er stemt, og stemte lukkelyder aspireres ikke"],
      explanation: "Riktig svar er stillingen etter s. Aspirasjon krever trykksterk ansats uten s foran, og her er den andre betingelsen ikke oppfylt. Andreleddet bærer bitrykk, som teller som trykk, og lukkelyden er ustemt.",
    },
    {
      question: "Hva er identisk i de to bakgrunnenes former i endelsesbolken?",
      options: ["De fonemiske formene, i alle ordene", "De fonetiske formene, siden endelsen uttales likt av alle talere", "Antall tegn i begge formene, siden bare ett tegn er byttet ut", "Ingenting, siden de to bakgrunnene er valgt for å være mest mulig ulike"],
      explanation: "Riktig svar er de fonemiske formene. Begge talerne har de samme enhetene i endelsen; forskjellen ligger utelukkende i realiseringen, og valget er derfor et rent fonetisk valgpunkt som ikke endrer fonemsystemet.",
    },
    {
      question: "Hva er poenget med å lese fasiten for begge bakgrunner, selv om bare én er din?",
      options: ["Å se hvilke tegn som er de samme uansett bakgrunn", "Å kunne bytte til den andre bakgrunnen hvis din egen blir for vanskelig", "Å lære begge systemene utenat, siden oppgaven kan be om begge", "Å kunne rette din egen transkripsjon etter den mest utbredte varianten"],
      explanation: "Riktig svar er å se det felles. I de fleste ordene er de aller fleste tegnene like, og forskjellen ligger i ett eller to valgpunkter. Å bytte bakgrunn eller rette etter den mest utbredte varianten er tvert imot oppskriften på inkonsistens.",
    },
    {
      question: "Hva markerer boka IKKE på retroflekser, og hva følger av det?",
      options: ["Aspirasjon — og markerer du den, må du gjøre det konsekvent i hele besvarelsen", "Lengde — og lange retroflekser skrives derfor med nøyaktig samme tegn som korte", "Trykk — og retroflekser kan derfor ikke stå i trykksterke stavelser", "Stemthet — og retroflekser regnes derfor verken som stemte eller ustemte"],
      explanation: "Riktig svar er aspirasjonen. Det er et notasjonsvalg, ikke en fonetisk påstand, og det står kandidaten fritt å velge annerledes så lenge valget følges. Lengde markeres tvert imot, med lengdetegn.",
    },
    {
      question: "Hvor mange feil koster fire halvpoeng i en oppgave som gir 10 av 65 poeng?",
      options: ["Fire, siden hver feil koster 0,5 poeng", "Åtte, siden hver feil koster 0,25 poeng i en oppgave av denne størrelsen", "To, siden hver feil koster ett helt poeng når oppgaven er poengsatt", "Det avhenger av hvor mange ord oppgaven inneholder"],
      explanation: "Riktig svar er fire feil, altså to poeng av de ti. Trekket er 0,5 per feil uavhengig av oppgavens størrelse og antall ord. To poeng høres lite ut, men det er en femdel av oppgaven — og feilene kommer sjelden hver for seg.",
    },
    {
      question: "Hva er kontrollspørsmålet du bør stille før du leverer?",
      options: ["Kan jeg lese bakgrunnsavsnittet mitt ut av tegnene jeg har skrevet?", "Har jeg like mange tegn i den fonetiske og i den fonemiske formen av ordet?", "Ligner transkripsjonen min på den som står i læreboka?", "Har jeg brukt minst ett tegn fra hver av de sju fenomenkortene?"],
      explanation: "Riktig svar er rekonstruksjonstesten. Kan du lese kontrakten ut av tegnene, er du konsistent. De to formene skal ikke ha like mange tegn, og et ord inneholder sjelden alle sju fenomenene.",
    },
    {
      question: "Hvorfor står lengdetegnet i begge transkripsjonsformene?",
      options: ["Fordi lengde er betydningsskillende i norsk og ikke kan regnes ut av omgivelsen", "Fordi lengdetegnet er et diakritisk tegn, og diakritika står alltid i begge formene", "Fordi lengden er en egenskap ved stavelsen og ikke ved segmentet", "Fordi den fonemiske formen ellers ville blitt kortere enn den fonetiske"],
      explanation: "Riktig svar er at lengde skiller ord, som *tak* mot *takk* viser. Aspirasjonstegnet er også diakritisk og hører bare hjemme i klammer, så tegntypen avgjør ingenting — kriteriet er om egenskapen kan regnes ut av omgivelsen.",
    },
  ],
  'exfac03-spr-4-1': [
    {
      question: "Hva er en morf?",
      options: ["Det konkrete segmentet i et ord, altså en avgrensbar bit du kan peke på i akkurat denne ordformen", "Den abstrakte enheten med innhold, som kan opptre med flere ulike former i ulike omgivelser i språket", "Én av flere former den samme abstrakte enheten kan ha, valgt av en betingelse som lar seg formulere", "Den minste enheten som skiller to ord fra hverandre uten selv å bære noe innhold i det hele tatt"],
      explanation: "Morfen er den konkrete formen slik den står i ordet, og den er det du deler ordet opp i. Distraktorene beskriver morfemet, allomorfen og fonemet: morfemet er den abstrakte enheten bak morfen, allomorfen er én av flere former det samme morfemet kan ha, og enheten som skiller ord uten selv å ha innhold, er fonemet i fonologien.",
    },
    {
      question: "Hva er et morfem?",
      options: ["Den minste abstrakte enheten med et innhold, altså en betydning eller en grammatisk funksjon", "Den konkrete lydstrengen du finner i et bestemt ord, avgrenset av morfgrenser på begge sider", "En bunden bit som må feste seg på noe annet, og som aldri kan stå alene som en egen ordform", "Oppsettet over alle bøyningsformene av ett ord, ordnet etter de kategoriene språket bøyer i"],
      explanation: "Morfemet er enheten, ikke lydstrengen: det er den minste abstrakte enheten som har et innhold. Den konkrete lydstrengen er morfen, og «bunden» er en egenskap enkelte morfer har, ikke en definisjon av morfemet. Oppsettet over alle bøyningsformene heter paradigme.",
    },
    {
      question: "To former uttrykker det samme innholdet og opptrer aldri i samme omgivelse. Hva kalles forholdet mellom dem?",
      options: ["Allomorfi, altså at ett morfem opptrer med flere former", "Fri variasjon, altså at valget mellom formene er fritt", "Formlikhet, altså at to ulike morfemer ser like ut", "Suppletjon, altså at formene ikke likner hverandre i det hele tatt"],
      explanation: "Samme innhold pluss komplementær fordeling er nettopp definisjonen av allomorfi. Formlikhet er det motsatte forholdet, der uttrykket er likt og innholdet ulikt, og fri variasjon utelukkes av at formene aldri står på samme plass. Suppletjon er en undertype av allomorfi der formene ikke likner hverandre, og det står det ingenting om her.",
    },
    {
      question: "Hvilke tre ting må vises for at to segmenter skal kunne kalles allomorfer av samme morfem?",
      options: ["Samme innhold, komplementær fordeling og en betingelse som lar seg formulere som én brukbar setning", "Samme skrivemåte, samme antall stavelser og at begge formene er belagt i minst to ulike ordformer i teksten", "Samme ordklasse på stammen, samme plassering i ordet og at begge former har grammatisk innhold", "Samme betydning, at formene kan bytte plass med hverandre, og at ingen av dem er en nullmorf"],
      explanation: "De tre kravene er samme innhold, komplementær fordeling og en formulerbar betingelse, og det tredje er det som oftest står tomt. At formene kan bytte plass med hverandre er ikke et krav, men det motsatte av kravet: kan de bytte, står de ikke i komplementær fordeling. Skrivemåte og stavelsestall er uten betydning for morfemidentitet.",
    },
    {
      question: "Hvorfor er ikke -er i biler og -er i baker allomorfer av samme morfem?",
      options: ["Fordi innholdet er ulikt: den ene uttrykker flertall, mens den andre lager et helt nytt oppslagsord", "Fordi de står i komplementær fordeling og derfor ikke kan tilhøre den samme abstrakte enheten", "Fordi den ene er en bunden morf og den andre er en fri morf som også kan stå alene i en setning", "Fordi de fester seg til stammer av ulik lengde, og betingelsen derfor ikke lar seg formulere i lyder"],
      explanation: "Innholdskravet faller først: flertall og det å lage et nytt leksem er to helt ulike innhold, og da spiller det ingen rolle at formene skrives likt. Komplementær fordeling er dessuten et argument for allomorfi, ikke mot. Begge formene er bundne, og lengden på stammen har ingenting med saken å gjøre.",
    },
    {
      question: "Betingelsen som styrer -ne i hyllene mot -ene i husene, kan skrives uten å nevne ett eneste ord ved navn. Hva slags allomorfi er det?",
      options: ["Lydbetinget allomorfi, siden regelen bare viser til hva stammen ender på, og ikke til hvilke ord det gjelder", "Leksikalsk betinget allomorfi, siden det er ordforrådet og ikke lydstrukturen som avgjør", "Fri variasjon, siden begge formene kan brukes om hverandre i moderne norsk", "Suppletjon, siden de to formene ikke deler noe materiale i uttrykket sitt"],
      explanation: "At regelen kan formuleres i lyd — her at stammen ender på trykklett -e — er nettopp definisjonen av lydbetinget allomorfi. Leksikalsk betinget ville krevd at du måtte ramse opp hvilke ord som følger regelen. Formene står dessuten i komplementær fordeling, så det er verken fri variasjon eller suppletjon, og de har tydelig felles materiale.",
    },
    {
      question: "Hvorfor er forholdet mellom rota i bok og rota i bøker leksikalsk betinget?",
      options: ["Fordi krok har samme lydstruktur og likevel gir kroker, så lyden alene kan ikke være det som avgjør", "Fordi de to formene skrives med ulike vokaler, og skrivemåten er avgjørende for morfemidentiteten", "Fordi de to formene ikke uttrykker det samme innholdet, og innholdskravet dermed ikke er oppfylt", "Fordi den ene formen bare finnes i flertall, og en form som mangler i entall aldri kan være lydbetinget"],
      explanation: "Argumentet er sammenlikningsparet: finnes et ord med samme lydstruktur som oppfører seg annerledes, er lydforklaringen utelukket, og betingelsen må formuleres som en liste. Skrivemåten er aldri et argument for eller mot morfemidentitet. Innholdet er dessuten det samme i begge formene, ellers ville det ikke vært allomorfi i det hele tatt.",
    },
    {
      question: "Hva er en nullmorf?",
      options: ["En morf uten uttrykksside: plassen i paradigmet har innhold, men ingenting er lagt til formen", "En morf som har uttrykk, men ikke noe innhold, og som derfor bare fyller ut ordet rytmisk", "En form som mangler i paradigmet fordi ordet ikke bøyes i den grammatiske kategorien i det hele tatt", "En morf som er valgfri, slik at ordformen er like korrekt med og uten den i alle sammenhenger"],
      explanation: "Nullmorfen er en påstand om en fylt plass uten lyd, ikke om en tom plass. Ville plassen i paradigmet manglet helt, ville det ikke vært noe innhold å knytte nullmorfen til, og analysen hadde vært tom. En morf uten innhold, eller en morf som er valgfri, er noe helt annet enn en nullmorf.",
    },
    {
      question: "Hva må være på plass før du har lov til å postulere en nullmorf?",
      options: ["At plassen i paradigmet har sitt eget innhold, og at sammenliknbare ord har en synlig formativ der", "At ordet er et intetkjønnsord på én stavelse, siden det bare er den gruppen som har nullmorfer", "At ordet mangler bøyning i minst to av de grammatiske kategoriene, slik at analysen får mer enn ett holdepunkt", "At den samme formen finnes både i entall og flertall, uansett hva andre ord i samme gruppe gjør"],
      explanation: "Nullmorfen begrunnes ved sammenlikning: plassen må ha et innhold, og andre ord i samme kategori må ha en synlig formativ på nettopp den plassen. Uten det kravet kunne man sette inn nullmorfer overalt. At formen er lik i entall og flertall er observasjonen som utløser spørsmålet, ikke begrunnelsen for svaret.",
    },
    {
      question: "Hva er skillet mellom en ordform og et leksem?",
      options: ["Ordformen er den konkrete formen i teksten; leksemet er den abstrakte enheten alle formene hører til", "Ordformen er ordet uten bøyning; leksemet er ordet med all bøyningen og alle avledningene lagt til", "Ordformen er det du finner i en ordbok; leksemet er den formen ordet tar i en bestemt setning", "Ordformen er alltid ett morfem; leksemet er alltid satt sammen av minst to ulike morfemer"],
      explanation: "Forholdet er det samme som mellom morf og morfem, ett nivå opp: den konkrete formen mot den abstrakte enheten. Ordboka viser leksemet ved hjelp av én valgt form, så det er leksemet og ikke ordformen du slår opp. En ordform kan dessuten godt bestå av flere morfemer.",
    },
    {
      question: "Hva skiller en fri morf fra en bunden morf?",
      options: ["Om morfen kan stå alene som en fullstendig ordform, eller må feste seg på noe annet", "Om morfen har leksikalsk innhold og peker på noe i verden, eller bare bærer grammatisk informasjon", "Om morfen står først i ordet, eller kommer etter en annen morf lenger ute i ordformen", "Om morfen finnes igjen i andre ord, eller bare forekommer i den ene ordformen den ble funnet i"],
      explanation: "Prøven er om biten kan brukes alene i en setning. Skillet mellom leksikalsk og grammatisk innhold er en annen inndeling som ofte følger den første, men ikke alltid: bio- og -log i biolog bærer leksikalsk innhold og er likevel bundne. Plassering i ordet og gjenkjennelse i andre ord er heller ikke det som avgjør.",
    },
    {
      question: "Hva er en formativ?",
      options: ["En morf med grammatisk innhold, som uttrykker en kategori eller lager et nytt ord", "En morf som peker på noe i verden, og som derfor kan forklares ved å beskrive noe utenfor språket", "Den formen et morfem tar når det står ytterst i ordet og ikke har noe etter seg i det hele tatt", "En fri morf som kan brukes som eget ord, men som oftest opptrer inne i lengre sammensatte ord"],
      explanation: "Formativen har ingen selvstendig referanse; den gjør noe med ordet den sitter på. En morf som peker på noe i verden, er et leksikalsk morfem — nettopp motsetningen. Ytterstposisjon og friheten til å stå alene er andre egenskaper som ikke definerer formativen.",
    },
    {
      question: "Hvorfor er stavelsesgrensen et dårlig verktøy for å finne morfgrenser?",
      options: ["Fordi stavelsen deler ordet etter rytme, mens morfen deles etter innhold, og de to sjelden faller sammen", "Fordi stavelsesgrensen alltid ligger inne i en morf, og en morfgrense derfor aldri kan være en stavelsesgrense", "Fordi stavelser bare finnes i talespråket, mens morfene bare kan avgrenses i den skrevne formen av ordet", "Fordi antall stavelser varierer med dialekten, mens antall morfer er det samme i alle norske varieteter"],
      explanation: "Stavelsen er en rytmisk enhet, morfen en meningsbærende enhet, og i et ord som hyllene deler de to prinsippene ordet på ulike steder. De faller riktignok noen ganger sammen, men aldri pålitelig nok til å brukes som argument. Morfer finnes både i tale og skrift, og påstanden om at stavelsesgrensen alltid ligger inne i en morf, er rett og slett usann.",
    },
    {
      question: "Hva er suppletive former?",
      options: ["Allomorfer som ikke likner hverandre i uttrykket, men fyller hver sin plass i samme paradigme", "Former som kan brukes om hverandre på samme plass, slik at valget mellom dem er helt fritt", "Ekstra former som er lagt til paradigmet i nyere tid, og som derfor ikke regnes som en del av kjernen", "Former som består av en rot og en nullmorf, slik at ordet ser ubøyd ut selv om det er bøyd"],
      explanation: "Gå og gikk er suppletive: de hører til samme leksem, men har ikke noe felles materiale i uttrykket. Betingelsen er derfor uten unntak leksikalsk, siden det ikke finnes noen lydlikhet å bygge en regel på. Fri variasjon og nullmorf er helt andre fenomener.",
    },
    {
      question: "Hvordan henger allofoni og allomorfi sammen?",
      options: ["Det er samme tankefigur på to nivåer: varianter av én enhet, komplementært fordelt etter en betingelse", "Allofoni er et spesialtilfelle av allomorfi, som oppstår når allomorfene skiller seg med bare én lyd", "Allomorfi gjelder i talespråket og allofoni i skriftspråket, og de to må derfor holdes strengt atskilt", "De er hverandres motsetninger, siden allofonene har innhold mens allomorfene bare varierer i form"],
      explanation: "Framgangsmåten er den samme begge steder: vis felles innhold eller funksjon, vis komplementær fordeling, og formuler betingelsen. Nivåene er likevel ulike, for allofonene skiller ikke ord fra hverandre og har ikke eget innhold, mens allomorfene har det. Å kalle det ene et spesialtilfelle av det andre blander sammen fonem og morfem.",
    },
    {
      question: "Hva er forskjellen på komplementær fordeling og fri variasjon?",
      options: ["I komplementær fordeling kan bare én form stå på hver plass; i fri variasjon kan begge stå samme sted", "I komplementær fordeling har formene ulikt innhold; i fri variasjon har de nøyaktig samme innhold", "I komplementær fordeling er betingelsen leksikalsk; i fri variasjon er den alltid formulert i lyder", "I komplementær fordeling opptrer formene like ofte; i fri variasjon er den ene formen mye vanligere"],
      explanation: "Prøven er om formene kan bytte plass: går det, er variasjonen fri, og da finnes det ingen betingelse å formulere. Begge fenomenene forutsetter samme innhold, så innholdet skiller dem ikke. Hyppighet og betingelsestype er heller ikke det som definerer skillet.",
    },
    {
      question: "En kandidat skriver: «Formene -ene og -ne er allomorfer av samme morfem.» Hva mangler?",
      options: ["Betingelsen, altså den ene setningen som sier når hver av de to formene står, og som også treffer et ord som ikke er nevnt", "Innholdskravet, altså en påvisning av at de to formene faktisk skrives på samme måte i eldre norsk", "Selve segmenteringen, altså en oppdeling av hele ordformen i morfer med grenser markert med bindestrek", "Kategorinavnet, altså en opplysning om hvilken ordklasse de to ordene som brukes som eksempel, tilhører"],
      explanation: "Påstanden om at to former er allomorfer, er verdiløs uten betingelsen som viser hvor hver av dem står — det er feil #6, å gi et eksempel uten å begrunne det. Innholdskravet handler om innhold og aldri om skrivemåte. Segmentering og ordklasse er ikke det oppgaven etterspør her.",
    },
    {
      question: "Hvorfor er skrivemåten et dårlig argument når du skal avgjøre morfemidentitet?",
      options: ["Fordi skriftbildet er en historisk konvensjon, mens morfemidentiteten hviler på innhold og fordeling", "Fordi skrivemåten varierer mellom målformene, og bare den ene av dem regnes som gyldig i analysen", "Fordi to morfer som skrives likt, alltid tilhører ulike morfemer, slik at skrivemåten fører deg feil hver gang", "Fordi morfer ikke har noen skriftlig form i det hele tatt, og bare kan avgrenses i den uttalte formen"],
      explanation: "Skriftbildet kan lure deg begge veier: det slår sammen morfer som -er i biler og -er i baker, og det skiller former som -ne og -ene, som hører sammen. Det er ikke slik at formlike morfer alltid tilhører ulike morfemer — noen ganger gjør de det, noen ganger ikke, og det er nettopp derfor skrivemåten ikke duger som prøve.",
    },
    {
      question: "Hva er et paradigme?",
      options: ["Oppsettet over alle bøyningsformene av ett leksem, ordnet etter de kategoriene språket bøyer i", "Gruppen av ord som bøyes på samme måte, og som derfor tar de samme bøyningsformativene", "Rekkefølgen morfene står i inne i ordet, fra rota og utover mot den ytterste formativen", "Listen over de allomorfene et morfem har, satt opp sammen med betingelsen som styrer hver av dem"],
      explanation: "Paradigmet gjelder ett ord: det er oppsettet over ordets egne bøyningsformer. Gruppen av ord med samme mønster heter bøyningsklasse, og den behandles i kapitlet om bøyningsklasser. Morfrekkefølge og allomorflister er andre ting igjen.",
    },
    {
      question: "Hvor mange av de dokumenterte eksamensterminene har morfologi som tema?",
      options: ["6 av 6 terminer, altså hver eneste dokumenterte termin i hele arkivet", "4 av 6 terminer, som er frekvensen til semantikk", "3 av 6 terminer, som er frekvensen til segmenteringsoppgaven", "2 av 6 terminer, som er antallet poengsatte terminer"],
      explanation: "Morfologi er ett av de tre saksområdene som er prøvd i hver eneste dokumenterte termin, og står dermed i 6 av 6 terminer. Tallet 4 av 6 terminer hører til semantikk og pragmatikk, og 3 av 6 terminer er frekvensen til selve segmenteringsoppgaven. To terminer er antallet med oppgitt poengsetting.",
    },
    {
      question: "Hvor mye teller segmenteringsoppgaven i den nyeste dokumenterte terminen, og hva er trekkregelen?",
      options: ["10 av 65 poeng, med 2 poeng per ord og trekk 0,5 per feil", "15 av 65 poeng, med 3 poeng per ord og ingen trekk", "10 av 49 poeng, med 1 poeng per ord og trekk 0,5 for hver morf som står igjen uten merkelapp", "5 av 65 poeng, med 1 poeng per ord og ingen trekkregel"],
      explanation: "Segmenteringsoppgaven gir 10 av 65 poeng, ordet er verdt 2 poeng, og hver feil koster 0,5. Summen 15 av 65 poeng er hele morfologibolken i den terminen, ikke segmenteringsoppgaven alene, og 49 er poengsummen i en annen termin. Trekket gjelder feil av alle slag, ikke bare manglende merkelapper.",
    },
    {
      question: "Hvilken av disse formuleringene er en betingelse, og ikke bare en påstand?",
      options: ["«-r står etter stammer som ender på trykktung vokal; -er står i alle andre omgivelser, uten unntak»", "«-r og -er uttrykker begge presens, og de er derfor to allomorfer av det samme morfemet i norsk»", "«-r og -er står i komplementær fordeling, slik at de aldri opptrer i den samme omgivelsen i et ord»", "«-r er den korteste av de to formene, og den brukes derfor i de ordene som allerede er lange nok»"],
      explanation: "En betingelse sier når hver form står, og den skal kunne brukes på et ord som ikke er nevnt i eksempelet. Å konstatere felles innhold eller komplementær fordeling er de to første trinnene i prosedyren, men ingen av dem sier hvor hver form hører hjemme. Den siste formuleringen er dessuten ikke en regel om omgivelsen, men en gjetning om ordlengde.",
    },
  ],
  'exfac03-spr-4-2': [
    {
      question: "Hva er rota i et ord?",
      options: ["Den leksikalske kjernen: den ene morfen som bærer selve betydningen, og som ikke kan brytes videre ned i mindre meningsbærende deler", "Alt bøyningsformativet fester seg til, uansett hvor mange morfer den delen består av til sammen", "Den første morfen i ordet, altså den som står lengst til venstre når ordet skrives ut i sin helhet", "Den delen av ordet som blir igjen når alle avledningene og all bøyningen er skrelt vekk fra begge sider av kjernen"],
      explanation: "Rota er alltid én morf, den bærer det leksikalske innholdet, og den kan ikke deles videre. Alt bøyningsformativet fester seg til, er stammen, som ofte består av flere morfer. Rota trenger heller ikke stå først: i uvennligheten står prefikset u- foran rota venn.",
    },
    {
      question: "Hva er stammen i et ord?",
      options: ["Det bøyningsformativet fester seg til, altså hele ordet slik det ser ut før bøyningen legges på", "Den udelelige morfen som bærer det leksikalske innholdet, og som ordet er bygd opp rundt", "Den delen av ordet som gjenstår når alle formativene av alle typer er fjernet fra ordformen", "Den morfen som bestemmer ordklassen til hele ordet, og som i norsk alltid står lengst til høyre"],
      explanation: "Stammen er en posisjon i ordet: alt bøyningen fester seg på. Den udelelige, betydningsbærende morfen er rota, og i uvennligheten er rota venn mens stammen er uvennlighet. Morfen som bestemmer ordklassen i en sammensetning, er hodet, og det er en tredje ting igjen.",
    },
    {
      question: "I hvilke ord faller rota og stammen sammen?",
      options: ["I ord som verken er avledet eller sammensatt, slik at stammen består av nøyaktig én morf", "I alle ord som har et bøyningsformativ, siden bøyningen alltid fester seg direkte på rota", "I sammensetninger, siden begge røttene der inngår i den delen bøyningen fester seg til", "I ord med prefiks, siden prefikset regnes med i rota når det står foran den leksikalske kjernen"],
      explanation: "Faller de to sammen, er det fordi stammen bare inneholder én morf — som bygd i bygdene. I en sammensetning inneholder stammen minst to røtter og er dermed ikke identisk med noen av dem, og et prefiks regnes aldri som en del av rota.",
    },
    {
      question: "Hva kjennetegner et avledningsformativ?",
      options: ["Det lager et nytt leksem, altså et nytt oppslagsord, og kan skifte ordklassen på ordet", "Det uttrykker en grammatisk kategori og fyller en plass i ordets bøyningsoppsett", "Det binder to røtter sammen i en sammensetning uten selv å bidra med noe innhold", "Det står alltid ytterst i ordet, slik at ingen annen morf kan komme etter det i noen form"],
      explanation: "Avledningsformativet lager et ord til, med sitt eget paradigme. Å uttrykke en grammatisk kategori og fylle en plass i paradigmet er bøyningsformativets jobb, og å binde to røtter er fugemorfens. Å stå ytterst er dessuten et kjennetegn ved bøyningen, ikke ved avledningen.",
    },
    {
      question: "Hva kjennetegner et bøyningsformativ?",
      options: ["Det uttrykker en grammatisk kategori uten å lage et nytt ord, og fyller en plass i paradigmet", "Det lager et nytt oppslagsord av det ordet som allerede finnes, og kan i tillegg skifte ordklassen", "Det står mellom to røtter i et sammensatt ord og markerer skjøten mellom de to delene", "Det kan bare stå foran rota, og skiller seg fra avledningen på nettopp denne plasseringen"],
      explanation: "Bøyningsformativet gir en ny form av det samme leksemet og fyller en plass i et fast oppsett. Å lage et nytt oppslagsord er avledningsformativets jobb, og morfen mellom to røtter er fugemorfen. Bøyningsformativer i norsk står dessuten alltid etter rota, aldri foran.",
    },
    {
      question: "Hva kjennetegner et sammensetningsformativ?",
      options: ["Det binder to røtter sammen i en sammensetning, og har ikke noe innhold av seg selv i det hele tatt", "Det uttrykker eierforhold mellom de to delene av ordet, slik genitiven gjør i en frase", "Det lager et nytt leksem av to gamle, og er dermed en undertype av avledningsformativet", "Det fyller en plass i paradigmet på linje med de øvrige bøyningsformativene i ordet"],
      explanation: "Fugemorfen har ingen egen betydning; den står i skjøten mellom to røtter og binder dem sammen. Den uttrykker verken eierforhold eller noen grammatisk kategori, og den lager ikke noe nytt leksem alene — det er sammensetningen som helhet som er det nye ordet.",
    },
    {
      question: "Hvilken test avgjør saken med én gang når den gir positivt utslag?",
      options: ["Ordklassetesten, siden ingen bøyningsformativer skifter ordklassen på ordet sitt", "Ytterstposisjonstesten, siden bare bøyningsformativer i det hele tatt kan stå ytterst i ordet", "Etterfølgertesten, siden en morf med noe etter seg alltid må være et avledningsformativ", "Paradigmetesten, siden en morf som ikke står i paradigmet, alltid er en fugemorf i norsk"],
      explanation: "Skifter ordet ordklasse når morfen legges til, er morfen et avledningsformativ, og det er avgjort. De øvrige testene er nyttige, men ingen av dem er så ensidige: en morf med noe etter seg kan godt være en fugemorf, og en morf utenfor paradigmet kan godt være en avledning.",
    },
    {
      question: "Hvorfor beviser et negativt utslag på ordklassetesten ingenting?",
      options: ["Fordi mange avledningsformativer beholder ordklassen, slik u- i uvennlig gjør", "Fordi ordklassen bare kan avgjøres av hodet i sammensetningen, og ikke av noen enkeltmorf", "Fordi ordklassetesten bare kan brukes på suffikser, og aldri på en morf som står foran rota", "Fordi ordklassen i norsk uansett endrer seg når et bøyningsformativ legges til ordformen"],
      explanation: "Prefikset u- lager et nytt leksem uten å røre ordklassen, og et negativt utslag utelukker derfor ikke avledning. Testen kan godt brukes på prefikser — den gir bare sjelden utslag der. Bøyningsformativer endrer aldri ordklassen, så den siste påstanden er rett og slett usann.",
    },
    {
      question: "Hva sier rekkefølgeregelen?",
      options: ["Bøyningsformativet står ytterst i ordet, og avledningsformativene ligger innenfor, nærmere rota", "Avledningsformativet står ytterst, og bøyningen ligger innenfor, rett utenpå den leksikalske rota", "Fugemorfen står ytterst i ordet, siden den binder sammen hele stammen med bøyningsformativet", "Rota står alltid først i ordet, og alle formativene følger etter den i den rekkefølgen de ble lagt til"],
      explanation: "Bøyningen legges på til slutt og ligger derfor ytterst, med avledningene innenfor. Regelen er brukbar som kontroll: står det noe etter en morf du har merket som bøyningsformativ, er analysen feil et sted. Rota står heller ikke alltid først, siden prefikser står foran den.",
    },
    {
      question: "En morf du har merket som bøyningsformativ, har en annen morf etter seg. Hva vet du da?",
      options: ["At merkingen eller morfgrensen er feil, siden bøyningsformativet skal stå ytterst", "At ordet er en sammensetning, siden bare sammensetninger kan ha to formativer på rad", "At morfen etter må være en fugemorf, siden ingenting annet kan stå etter en bøyning", "At ordet har to stammer, og at bøyningen derfor gjentas på begge stammene i ordformen"],
      explanation: "Rekkefølgeregelen sier at bøyningen ligger ytterst, så et bøyningsformativ med noe etter seg er et varsel om at noe er galt. Regelen forteller deg at det er en feil, men ikke hvilken — det kan like gjerne være morfgrensen som merkelappen. Verken sammensetning eller doble stammer følger av observasjonen.",
    },
    {
      question: "Hvordan skiller du fugemorfen -s- i arbeidsledighet fra genitivens -s i bilens?",
      options: ["Fugemorfen står inne i ordet med morfer etter seg; genitivens s står ytterst og uttrykker eierforhold", "Fugemorfen står etter en rot og genitivens s etter en stamme, og de to posisjonene utelukker hverandre", "Fugemorfen uttales annerledes enn genitivens s, og det er uttalen som avgjør merkingen i analysen", "Fugemorfen finnes bare i sammensetninger med tre røtter eller flere, mens genitiven kan stå i alle ord"],
      explanation: "Etterfølgertesten skiller dem hver gang: fugemorfen har alltid noe etter seg, mens genitivens s er et bøyningsformativ ytterst i ordet. De to har dessuten helt ulikt innhold, siden fugemorfen ikke uttrykker noe i det hele tatt. Uttalen er den samme og kan derfor ikke brukes som prøve.",
    },
    {
      question: "Hvordan avgjør du om e-en midt i et ord er en fugemorf eller en del av rota?",
      options: ["Sett forleddet i ubestemt entall og se om vokalen er der fra før, slik barn ikke har den og hylle har den", "Tell stavelsene i forleddet, siden en fugemorf alltid gir forleddet en stavelse mer enn rota har", "Se om ordet kan uttales uten vokalen, siden en fugemorf alltid kan sløyfes i rask tale", "Sjekk om etterleddet begynner på konsonant, siden fuge-e bare settes inn foran konsonant"],
      explanation: "Prøven er om forleddet har vokalen når det står alene: barn har den ikke, og e-en i barnehage er derfor en fugemorf, mens hylle har den, så e-en i hyllemeter tilhører rota. Stavelsestelling, uttale og etterleddets første lyd gir ingen pålitelig indikasjon.",
    },
    {
      question: "Hva er en bunden rot?",
      options: ["En rot med eget leksikalsk innhold som likevel aldri kan stå alene som ordform, som bio- i biolog", "En rot som bare finnes i sammensetninger, og som mister betydningen sin når den står for seg selv", "Et avledningsformativ som har fått så mye innhold at det oppfører seg som en rot i moderne norsk", "En rot som er bundet til én bestemt bøyningsklasse, og som derfor ikke kan bøyes på andre måter"],
      explanation: "Bio- og -log bærer leksikalsk innhold og kan settes sammen med hverandre og med andre bundne røtter, men ingen av dem er ord i seg selv. Et avledningsformativ har ikke noe slikt selvstendig innhold, og bundethet har ingenting med bøyningsklasse å gjøre.",
    },
    {
      question: "Hva bestemmer ordklassen til en sammensetning i norsk?",
      options: ["Hodet, som i norsk står i etterleddet, og som derfor bestemmer både ordklassen og bøyningen til hele ordet", "Forleddet, siden det er det som presiserer hva ordet handler om i den aktuelle sammenhengen", "Den lengste av røttene, siden den bærer mest av det leksikalske innholdet i det ferdige ordet", "Bøyningsformativet ytterst, siden det er der ordets grammatiske egenskaper faktisk kommer til uttrykk"],
      explanation: "En hurtigbåt er en båt, ikke noe hurtig, og ordet bøyes som båt — hodet står til høyre i norsk. Forleddet kan tilhøre en helt annen ordklasse enn ordet som helhet. Lengde er uten betydning, og bøyningsformativet uttrykker kategorier, men bestemmer ikke ordklassen.",
    },
    {
      question: "Hva er et prefiks?",
      options: ["Et avledningsformativ som står foran rota, som u- i uvennlig og be- i betaling", "Et formativ som står etter rota, og som i norsk kan være både avledning og bøyning", "En bunden rot som står først i ordet, og som bærer hovedinnholdet i det ferdige leksemet", "En morf som binder to røtter sammen, og som derfor bare finnes i sammensatte ord"],
      explanation: "Prefikset er et avledningsformativ i forposisjon. Formativet etter rota er suffikset, og bare suffikser kan være bøyningsformativer i norsk. En morf som binder to røtter, er fugemorfen, og en bunden rot er ingen av delene.",
    },
    {
      question: "Hva sier H2025-veiledningen om oppsettet i en segmenteringsoppgave?",
      options: ["At oppsettet ikke er viktig så lenge analysen er forståelig, men at merkingen må være fullstendig", "At analysen må settes opp som en tabell med én rad per morf, og at lineære oppsett ikke godtas", "At oppsettet vurderes for seg, og at et ryddig oppsett kan veie opp for enkelte manglende merkelapper", "At kandidaten må velge samme oppsett gjennom hele besvarelsen, og oppgi hvilket oppsett som er valgt"],
      explanation: "Du står fritt i formen og bundet i innholdet: velg det oppsettet du vil, men la ingen morf stå umerket. Det finnes ingen krav om tabellform, og et pent oppsett gir ingen uttelling som kan dekke over en manglende merkelapp.",
    },
    {
      question: "Hva krever H2020-veiledningen av opplysningene i en morfologisk analyse?",
      options: ["At opplysningene om røtter, stammer, avlednings- og bøyningsformativer er eksplisitte hele veien", "At bare de morfene som er vanskelige å avgjøre, forklares, siden de opplagte regnes som underforstått", "At kandidaten oppgir hvilken ordbok analysen bygger på, slik at merkingen kan etterprøves", "At analysen suppleres med en fonetisk transkripsjon, slik at morfgrensene kan kontrolleres i uttalen"],
      explanation: "Kravet er at alle fire opplysningstypene skal stå eksplisitt hele veien, og det utelukker nettopp den vanlige praksisen med å merke de vanskelige morfene og la de opplagte stå. Verken ordbokreferanse eller transkripsjon inngår i bestillingen.",
    },
    {
      question: "I hvor mange av de dokumenterte terminene står segmenteringsoppgaven, og hva gir den i den nyeste?",
      options: ["3 av 6 terminer, og 10 av 65 poeng i den nyeste av dem, med 2 poeng per ord og trekk 0,5 per feil", "6 av 6 terminer, og 25 av 114 poeng, som er hele morfologiens andel i materialet", "4 av 6 terminer, og 15 av 65 poeng, altså hele morfologibolken i den nyeste terminen", "2 av 6 terminer, og 10 av 49 poeng, altså morfologiens andel i den eldste poengsatte terminen"],
      explanation: "Segmenteringsoppgaven er belagt i tre av terminene og gir 10 av 65 poeng i den nyeste. Tallet 6 av 6 terminer gjelder saksområdet morfologi som helhet, ikke den enkelte oppgavetypen, og 15 av 65 poeng er hele morfologibolken i den terminen.",
    },
    {
      question: "Hva er trekkregelen i segmenteringsoppgaven, og hva er et ord verdt?",
      options: ["2 poeng per ord, med trekk 0,5 per feil, der en umerket morf koster like mye som en feilmerket", "2 poeng per ord, med trekk bare der hele ordet er feilsegmentert fra begynnelse til slutt", "1 poeng per ord, med trekk 0,5 for hver morf som mangler merkelapp, men ikke for feilmerking", "3 poeng per ord, med trekk 1 per feil, siden hver morf teller like mye som hele oppsettet"],
      explanation: "Satsen er 2 poeng per ord og trekket 0,5 per feil. Trekket gjelder alle slags feil, ikke bare manglende merkelapper og ikke bare totalt feilsegmenterte ord — en umerket morf og en feilmerket morf koster nøyaktig det samme.",
    },
    {
      question: "Hva er en begrunnelseslinje i en segmenteringsoppgave?",
      options: ["Én setning per ikke-opplagt merking, som sier hvilken test du kjørte og hva den ga", "En innledende setning der du gjør rede for hvilket oppsett du har valgt, og hvorfor", "En avsluttende oppsummering av hvor mange morfer av hver type ordet inneholder", "En henvisning til det kapitlet i pensum der den aktuelle formativtypen er behandlet"],
      explanation: "Begrunnelseslinjen sier hvordan du kom fram til merkelappen, og det er den som skiller et svar du visste, fra et du gjettet. Verken oppsettsvalg, opptelling eller kildehenvisning gjør den jobben, og oppsettet er dessuten uttrykkelig fritt.",
    },
    {
      question: "Hvordan skal et reelt grensetilfelle i en segmentering behandles?",
      options: ["Skriv ut begge analysene, merk tilfellet som omstridt, og velg én av dem med et uttalt kriterium", "Velg den analysen som gir flest morfer, siden en finere oppdeling alltid gir mer informasjon", "Unnlat å merke morfen, og forklar i stedet i en note hvorfor merkingen er usikker i dette tilfellet", "Oppgi begge analysene uten å velge, siden et valg mellom to forsvarlige lesninger uansett blir vilkårlig"],
      explanation: "Veiledningen godtar uttrykkelig alternative analyser når de er begrunnet, så det å skrive ut begge og velge med et kriterium er et løft. Å la morfen stå umerket er derimot en ren feil, og å unnlate å velge er å hoppe over halve arbeidet. Antall morfer er ikke noe kriterium i seg selv.",
    },
    {
      question: "Hvilken merking er riktig for -ning i forskningen?",
      options: ["Avledningsformativ, fordi det lager substantivet forskning av verbet forske", "Bøyningsformativ, fordi det står i substantivets paradigme sammen med de øvrige endelsene", "Sammensetningsformativ, fordi det binder rota forsk til bøyningsformativet lenger ute i ordet", "Rot, fordi det bærer et eget leksikalsk innhold som kan gjenfinnes i en lang rekke andre ord"],
      explanation: "Ordklassetesten gir positivt utslag: forske er et verb og forskning et substantiv, så morfen lager et nytt leksem. Det finnes ingen plass i paradigmet som fylles av -ning, den binder ingen røtter, og den har ikke noe selvstendig leksikalsk innhold.",
    },
    {
      question: "Hvor mange røtter har ordet barnehagelærerne?",
      options: ["Tre: barn, hage og lær, siden ordet er en sammensetning av en sammensetning der hver av de tre er udelelig", "To, nemlig barnehage og lærer, siden hver av de to sammensetningsdelene teller som én rot", "Fire, siden både fugemorfen og avledningsformativet regnes med når røttene telles opp", "Én, siden bare den morfen som bærer hovedinnholdet i ordet, kan regnes som ordets rot"],
      explanation: "Ordet er en sammensetning av en sammensetning, og de tre udelelige leksikalske morfene er barn, hage og lær. Barnehage og lærer er komplekse deler, ikke røtter, og verken fugemorfen -e- eller avledningsformativet -er kan telle som rot.",
    },
    {
      question: "Hva er den vanligste formen for ufullstendig merking?",
      options: ["At de vanskelige morfene merkes mens de opplagte, særlig fugemorfen, får stå umerket", "At kandidaten merker alle morfene, men bruker forkortelser i stedet for de fulle merkelappene", "At analysen settes opp lineært i stedet for i tabell, slik at merkelappene blir vanskelige å lese", "At kandidaten oppgir rota, men bruker ordboksformen av ordet i stedet for stammen i analysen"],
      explanation: "Feilen kommer nesten alltid av at oppmerksomheten går til de tvilsomme morfene, og fugemorfen er den som oftest forsvinner. Oppsettet er fritt, så lineær form er fullt lovlig, og forkortelser er et tydelighetsproblem snarere enn et spørsmål om fullstendighet.",
    },
    {
      question: "En kandidat definerer alle tre formativtypene korrekt, men sier ikke hva som skiller dem. Hvilken feil er det?",
      options: ["Feil #4, altså å nevne fagtermene uten å forklare den systematikken som ligger bak dem", "Feil #7, altså å gi færre eksempler enn oppgaven uttrykkelig ber om i bestillingen sin", "Feil #6, altså å gi et eksempel uten å begrunne hvorfor det er et godt eksempel", "Ingen feil, siden tre korrekte definisjoner dekker det en redegjørelse kan kreve"],
      explanation: "Bestillingen i en slik oppgave er skillet, ikke listen, og et svar med tre riktige definisjoner uten kontrasten er derfor ufullstendig. Å levere for få eksempler og å gi eksempler uten begrunnelse er andre feil, som rammer egeneksempel-oppgaven snarere enn redegjørelsen.",
    },
    {
      question: "Oppgaven ber om fire ord som hver oppfyller sin egen morfologiske spesifikasjon, og kandidaten leverer tre. Hva er konsekvensen?",
      options: ["Det trekker som feil #7, å gi færre eksempler enn oppgaven ber om, uansett hvor gode de tre er", "Det trekker ikke, så lenge de tre ordene som er levert, er riktig segmentert og fullstendig merket", "Det trekker bare hvis oppgaveteksten uttrykkelig oppgir hvor mange poeng hvert av punktene gir", "Det trekker som feil #4, siden et manglende punkt leses som manglende forståelse av systematikken"],
      explanation: "Fullstendighet er halve poenget i denne oppgaveformen, og et manglende punkt er et tapt punkt uansett kvaliteten på resten. Feil #4 gjelder noe helt annet, nemlig å nevne termer uten å forklare systematikken bak dem.",
    },
    {
      question: "Hva er et produktivt avledningsformativ?",
      options: ["Et som fortsatt brukes til å lage nye ord, slik -ing, -het og u- gjør i norsk i dag", "Et som forekommer i mange ord i ordboka, uavhengig av om det brukes til nye ord eller ikke", "Et som alltid skifter ordklassen på ordet det legges til, i motsetning til de uproduktive", "Et som kan kombineres med både prefikser og bøyningsformativer i det samme ordet"],
      explanation: "Produktivitet handler om ordformasjon i dag: -sel i fengsel er et avledningsformativ, men brukes ikke lenger til nye ord. Antall forekomster i ordboka er noe annet enn produktivitet, og produktivitet henger verken sammen med ordklasseskifte eller med kombinasjonsmuligheter.",
    },
  ],
  'exfac03-spr-4-3': [
    {
      question: "Hva sier H2025 om oppsettet i en segmentering?",
      options: ["At oppsettet er fritt så lenge analysen er forståelig, men at merkingen må være fullstendig, slik at hver eneste morf i ordet har fått sin egen merkelapp", "At analysen skal settes opp i en tabell med én rad per morf og en egen kolonne for begrunnelsen, slik at ingen morf kan bli stående uten merkelapp", "At morfene skal skrives lineært med bindestrek og merkelapp i parentes, fordi det er den eneste formen sensuren har mulighet til å følge", "At oppsettet er fritt, og at merkingen derfor også kan være delvis så lenge røttene i ordet er navngitt"],
      explanation: "Oppsettet er fritt, men fullstendig merking er et krav — de to tingene henger ikke sammen. Den nære fella er å lese friheten i oppsettet som en frihet i merkingen: en analyse der bare røttene er navngitt, er ikke halvferdig, den har feil i. Tabell og lineær merking er begge lovlige, og ingen av dem er påbudt.",
    },
    {
      question: "Hva er første trinn i segmenteringsprosedyren?",
      options: ["Å finne rota eller røttene ved å lete etter det som bærer den leksikalske betydningen", "Å skrelle av bøyningsformativet ytterst, siden det alltid står lengst ut og derfor er lettest å kjenne igjen med en gang", "Å dele ordet i stavelser først", "Å merke fugemorfene først, fordi det er de som oftest blir stående umerket i en ferdig besvarelse"],
      explanation: "Rota er utgangspunktet: finner du de leksikalske kjernene først, vet du med en gang om ordet er en sammensetning, og resten av lagene ordner seg utover derfra. Bøyningen skrelles av i trinn 2 og fugene merkes i trinn 4 — begge er riktige handlinger på feil plass i rekkefølgen. Stavelsesdeling er ikke en del av prosedyren i det hele tatt, fordi stavelsesgrenser og morfgrenser nesten aldri faller sammen.",
    },
    {
      question: "Hvor i ordet står bøyningsformativet?",
      options: ["Ytterst, uten noe avledningsformativ utenfor seg", "Rett etter rota, slik at avledningene som er lagt til senere, kommer utenfor det og avslutter ordet", "Innerst mot rota i sammensetninger, og ytterst bare i ord som ikke er sammensatte", "Vilkårlig, etter hvilken kategori det uttrykker"],
      explanation: "Bøyningsformativet ligger alltid lengst ut, og rekkefølgeregelen brukes derfor som kontroll: finner du et avledningsformativ utenfor noe du har merket som bøyning, er minst én av merkingene gal. Fella er å tro at plasseringen varierer med kategorien; tall, bestemthet og tid oppfører seg likt på dette punktet.",
    },
    {
      question: "Hva er -s- i arbeidsplassene?",
      options: ["Et sammensetningsformativ, altså en fugemorf uten egen betydning", "Et bøyningsformativ som markerer eiendom, siden plassen hører til arbeidet som utføres der", "Et avledningsformativ som lager et nytt leksem av rota arbeid og skifter dens ordklasse", "En del av rota arbeids"],
      explanation: "Fugemorfen binder to røtter og betyr ingenting selv — den uttrykker verken eiendom eller flertall, selv om den ser ut som morfer som gjør nettopp det. Distraktoren om eiendom er den nære: formen er identisk med eieformens s, men arbeidet eier ikke plassen. Rota er arbeid, ikke arbeids.",
    },
    {
      question: "Hvorfor merkes -ene i skogene som et bøyningsformativ og ikke som en avledning?",
      options: ["Fordi skog og skogene er samme ordbokord i to former og ikke to ulike ord, og bøyning er nettopp det som gir en ny form av det samme ordet", "Fordi morfen står ytterst i ordet, og alt som står ytterst i et norsk ord, er bøyning uansett hvilken funksjon det har", "Fordi morfen består av mer enn én lyd, og avledningsformativer i norsk er systematisk kortere enn bøyningsformativer", "Fordi skog er et konkret substantiv, og konkrete substantiver kan ikke ta avledningsformativer i bestemt form"],
      explanation: "Testen er om de to formene ville stått som ett eller to oppslag i ordboka: ett oppslag betyr bøyning, to betyr avledning. Den nære fella er å bruke plasseringen som eneste test — bøyning står riktignok ytterst, men det er funksjonen som avgjør merkingen, og et prefiks som u- er en avledning selv om det står helt først.",
    },
    {
      question: "Hvordan segmenteres bakeriet?",
      options: ["bak som rot, -eri som avledningsformativ og -et som bøyningsformativ", "bak som rot og -eriet som ett bøyningsformativ, siden hele enden uttrykker bestemt form entall av ordet", "bakeri som rot og -et som bøyningsformativ, siden bakeri ikke kan brytes ned i mindre deler med egen betydning", "bake som rot og -riet som bøyningsformativ"],
      explanation: "Ordet har tre morfer: verbrota bak-, avledningen -eri som lager stedsbetegnelsen, og bøyningen -et. Fella med -eriet er å lese ordbildet som én ende, mens det er to morfer med hver sin funksjon. Og bakeri kan brytes ned, siden -eri lager stedsbetegnelser systematisk, som i trykkeri og gartneri.",
    },
    {
      question: "Hva er forskjellen på -er i lærerne og -er i skoger?",
      options: ["I lærerne lager -er en personbetegnelse og er en avledning; i skoger uttrykker -er flertall og er bøyning", "I lærerne er -er en del av rota, mens -er i skoger er et bøyningsformativ som uttrykker ubestemt form flertall av substantivet", "Ingen — det er den samme morfen i begge ordene, og den merkes derfor likt uansett hvilket ord den står i", "I lærerne er -er et bøyningsformativ, og i skoger er det et sammensetningsformativ som binder to røtter sammen"],
      explanation: "Formene er identiske, men funksjonene er ulike, og det er funksjonen som bestemmer merkelappen. Den nære fella er å behandle like former som samme morf; da mister man skillet mellom en personbetegnelse som er et nytt ordbokord, og en flertallsform av det samme ordet.",
    },
    {
      question: "Hva er rota i uvennligheten?",
      options: ["venn, den udelelige leksikalske kjernen som resten av ordet er bygget rundt", "uvennlighet, altså den delen av ordet som bøyningsformativet -en fester seg til, og som derfor kalles stammen", "uvennlig, siden det er det adjektivet hele det bestemte substantivet er bygget videre på", "vennlig, siden det er den minste delen av ordet som fortsatt gir mening som eget ord"],
      explanation: "Rota er den udelelige leksikalske kjernen, og her er det substantivet venn. Uvennlighet er stammen, altså det bøyningsformativet fester seg til, og de to begrepene forveksles ofte fordi de peker på samme ord fra hver sin kant. Vennlig og uvennlig er mellomtrinn i oppbyggingen, ikke røtter.",
    },
    {
      question: "Hva koster en morf som er skilt ut, men står uten merkelapp?",
      options: ["Like mye som en feilmerket morf, altså 0,5 poeng i H2025, siden bestillingen er både delingen og merkingen av hver enkelt morf", "Halvparten av en feilmerket morf, fordi delingen er riktig og bare navngivingen mangler i besvarelsen", "Ingenting, så lenge de andre morfene i det samme ordet har fått riktig merkelapp av kandidaten", "Hele ordets uttelling, siden en ufullstendig analyse regnes som en ubesvart deloppgave"],
      explanation: "Umerket og feilmerket koster nøyaktig det samme, og det er grunnen til at man alltid skal skrive den merkelappen man tror mest på og legge ved en begrunnelseslinje. Fella er å tro at riktig deling gir delvis uttelling; bestillingen er delingen og merkingen, og et ledd som ikke er besvart, er ikke besvart.",
    },
    {
      question: "Et ord gir 2 poeng, og trekket er 0,5 per feil. Hva sitter du igjen med etter tre feil i det ordet?",
      options: ["0,5 poeng, altså en fjerdedel av det ordet kunne gitt", "1,5 poeng", "0 poeng, siden mer enn to feil i samme ord nuller uttellingen for det ordet i sin helhet", "1 poeng, siden trekket regnes av hele oppgavens sum og ikke av det enkelte ordet"],
      explanation: "Tre feil trekker 1,5 poeng fra 2, og det gir 0,5 poeng igjen; fire feil nuller ordet. Fellene er å tro at trekket regnes én gang per ord, eller at det regnes av oppgavesummen — det regnes per feil, og et langt ord har derfor flere steder å tape på enn et kort.",
    },
    {
      question: "Hva er riktig om skolebibliotekene?",
      options: ["Det er en sammensetning uten fugemorf, og -e-en i skole hører til rota", "Det er en sammensetning der -e- mellom skole og bibliotek er et sammensetningsformativ som binder de to røttene sammen", "Det er en avledning med skole- som prefiks", "Det er en sammensetning der -ene er et sammensetningsformativ og -e et bøyningsformativ i bestemt form"],
      explanation: "Mange sammensetninger har ingen fuge i det hele tatt, og da skal man ikke oppfinne en: skole slutter på -e i sin egen grunnform. Den nære fella er å lese den siste bokstaven i førsteleddet som en fugemorf, en feil som gir samme antall morfer, men gal merking på to av dem.",
    },
    {
      question: "Rettssalen skrives med tre s-er. Hvor mange av dem er en egen morf?",
      options: ["Én — fugemorfen mellom rett og sal", "To — den ene avslutter rota rett, og den andre er fugemorfen som binder de to røttene sammen i ordet", "Tre — hver s markerer sin egen morfgrense, slik at ordet får til sammen seks morfer", "Ingen av dem"],
      explanation: "Rota er rett, fugen er -s-, og sal begynner selv på s; til sammen gir det tre bokstaver og én fugemorf. Fella er å telle bokstaver i stedet for morfer, og den kommer sjelden alene — segmenterer man etter ortografien, blir det feil i flere ord på rad.",
    },
    {
      question: "Hvordan segmenteres muligheten?",
      options: ["mulig som rot, -het som avledningsformativ og -en som bøyningsformativ i bestemt form entall av substantivet", "mul som rot, -ig og -het som avledningsformativer og -en som bøyningsformativ i bestemt form entall", "mulighet som rot og -en som bøyningsformativ, siden ordet er et fast oppslag i ordboka som helhet", "mulig som rot, -h som sammensetningsformativ og -eten som bøyningsformativ i bestemt form entall"],
      explanation: "Rota er hele mulig, fordi det ikke finnes noen rot mul- med beslektet betydning i moderne norsk. Fella er å oversegmentere fordi -ig ser ut som avledningen i rettferdig; å oppfinne en morf koster nøyaktig like mye som å miste en. Mulighet er ikke rota, siden -het lager et nytt leksem og derfor skal skilles ut.",
    },
    {
      question: "Hva er -dom i ungdomsskolelærerne?",
      options: ["Et avledningsformativ som gjør adjektivet ung om til substantivet ungdom", "En rot, siden dom er et eget norsk ord", "Et bøyningsformativ som uttrykker en grammatisk kategori knyttet til alder hos den som omtales", "Et sammensetningsformativ som binder ung til det etterfølgende leddet i den lange sammensetningen"],
      explanation: "Ungdom er et nytt leksem laget av adjektivet ung, og -dom er derfor en avledning. Den nære fella er at det finnes et selvstendig ord dom, men det betyr noe helt annet enn morfen i ungdom, sykdom og visdom, og formlikhet er ikke morfemidentitet. Fugen i ordet er -s-, ikke -dom.",
    },
    {
      question: "Hvorfor er hjelpeløsheten et grensetilfelle?",
      options: ["Fordi -løs kan analyseres både som selvstendig rot og som avledningsformativ, og begge deler er forsvarlig", "Fordi det er uenighet om -en er et bøyningsformativ eller et avledningsformativ i den bestemte formen av ordet", "Fordi ordet kan leses både som en sammensetning av tre røtter og som en ren avledning uten noen rot i det hele tatt", "Fordi -het i noen analyser regnes som en fugemorf mellom det foregående leddet og bøyningsendelsen"],
      explanation: "Løs er et fullverdig adjektiv, samtidig som -løs lager adjektiver av substantiver systematisk og med fast betydning — derfor er både sammensetningslesningen og avledningslesningen forsvarlig. H2025 godtar at det samme segmentet merkes ulikt når analysen er begrunnet. Om -het og -en er det ingen tvil: det første er en avledning, det andre bøyning.",
    },
    {
      question: "Hva er poenget med å merke et ord som omstridt med begge lesninger skrevet ut?",
      options: ["Å vise at man har sett problemet, siden begge analysene gir uttelling når begrunnelsen står der", "Å ta forbehold slik at man ikke kan trekkes for noen av de to analysene, uansett hvilken sensuren måtte foretrekke i det enkelte tilfellet", "Å slippe å velge, siden en oppgave som inneholder et grensetilfelle, ikke kan kreve at kandidaten konkluderer", "Å fylle svaret med mer tekst"],
      explanation: "Grensetilfellet er ikke et sted å gjette, men et sted å vise arbeidet: du velger én analyse og sier hvorfor, og nevner at den andre også kan forsvares. Fella er å lese det som et forbehold man gjemmer seg bak — poenget er begrunnelsen, ikke garderingen, og en umerket morf er fortsatt et tap.",
    },
    {
      question: "Hva brukes rekkefølgeregelen til i praksis?",
      options: ["Som kontroll til slutt: leses merkingen utenfra og inn, skal bøyningsformativet komme før avledningene og rota", "Som utgangspunkt for analysen, siden man alltid starter ytterst og arbeider seg innover mot rota i ordet", "Som en regel om at alle avledningsformativer i norsk står bak rota og aldri foran den i et ord", "Som en regel om at et ord ikke kan ha mer enn ett avledningsformativ mellom rota og bøyningen"],
      explanation: "Regelen er et kontrollverktøy: bryter rekkefølgen, er minst én merking gal. Den sier ikke at avledninger alltid står bak rota — prefikser som u- står foran, og et ord kan vokse i begge retninger samtidig, slik uvennligheten gjør med u- foran og -lig og -het bak.",
    },
    {
      question: "Hva skal en begrunnelseslinje inneholde?",
      options: ["Hvorfor morfen fikk akkurat den merkelappen, i konkrete ord om betydning eller ordklasse", "En gjentakelse av merkelappen i en fullstendig setning, slik at analysen kan leses sammenhengende uten tabellen", "En henvisning til hvilket trinn i prosedyren merkingen ble gjort i, slik at framgangsmåten kan følges", "En opplysning om hvor mange morfer ordet har"],
      explanation: "Begrunnelseslinjen svarer på hvorfor, mens merkingen svarer på hva: at -het gjør et adjektiv om til et substantiv, er en begrunnelse, mens at -het avleder, er bare merkelappen sagt om igjen. Tellingen er en nyttig kontroll, men den er ikke en begrunnelse for noen enkelt merking.",
    },
    {
      question: "Hva skiller et sammensetningsformativ fra et bøyningsformativ?",
      options: ["Fugen står inne i ordet mellom to røtter og betyr ingenting; bøyningen står ytterst og uttrykker en kategori", "Fugen uttrykker en grammatisk kategori som eiendom eller flertall, mens bøyningen bare binder to deler av ordet sammen uten eget innhold", "Fugen består alltid av én enkelt lyd, mens bøyningsformativer i norsk alltid består av to eller flere lyder", "Fugen kan bare stå i substantiver, mens bøyningsformativer kan stå i alle ordklasser som bøyes"],
      explanation: "Plasseringen og innholdet skiller dem: fugen er intern og betydningstom, bøyningen er ytterst og bærer en kategori. Den nære fella er å snu innholdet — fugens s ligner eieformens s, og fugens e ligner en flertallsform, men i arbeidsplass eier ingen noe, og i fiskebåt er det ikke flere fisker.",
    },
    {
      question: "Hva er feil #5 i denne oppgavetypen?",
      options: ["Å merke noen morfer og hoppe over resten, typisk fugene og de korteste endelsene", "Å dele ordet etter skrivemåten i stedet for etter morfene, slik at grensene havner der ordet ville blitt delt ved linjeskift", "Å skrive begrunnelseslinjer på alle morfene i ordet, også der merkingen er helt opplagt for enhver leser", "Å velge tabell i stedet for lineær merking"],
      explanation: "Feil #5 er å hoppe over et av oppgavens ledd, og i segmenteringen ser den ut som en analyse der røttene er navngitt og de små morfene står nakne. Ortografisk deling er også en typisk feil her, men den er en annen feil. Å velge tabell eller lineær merking er aldri en feil, siden oppsettet er fritt.",
    },
    {
      question: "Hva er -e- i sykehuset?",
      options: ["Et sammensetningsformativ, altså en fugemorf som binder adjektivrota syk til rota hus og ikke betyr noe i seg selv", "Et bøyningsformativ som gir den bestemte formen syke av adjektivet, slik det gjør i uttrykket det syke barnet", "Et avledningsformativ som gjør adjektivet syk om til et substantiv før sammensetningen dannes", "En del av rota syke, som er den formen adjektivet alltid har når det inngår i sammensetninger"],
      explanation: "Morfen står mellom to røtter og betyr ingenting selv, og den er derfor en fugemorf. Den nære fella er at formen er identisk med den bestemte adjektivformen syke, men huset er ikke sykt, så det bøyes ingenting her. Rota er syk, ikke syke.",
    },
    {
      question: "Du er i tvil om merkelappen på en morf du har delt riktig ut. Hva lønner seg?",
      options: ["Å skrive den merkelappen du tror mest på, og legge ved en begrunnelseslinje", "Å la merkelappen stå tom", "Å skrive begge merkelappene med skråstrek mellom, siden en dobbel merking aldri kan regnes som feil av sensuren", "Å stryke morfen fra analysen, slik at ordet får færre morfer og dermed færre steder å tape poeng"],
      explanation: "En umerket morf koster like mye som en feilmerket, så det tomme feltet taper garantert, mens en begrunnet gjetning har en sjanse til full uttelling og viser hvordan du tenker. Å stryke morfen fjerner ikke tapet, den flytter det: delingen blir da gal i tillegg.",
    },
  ],
  'exfac03-spr-4-4': [
    {
      question: "Hva er forskjellen på trygghet og tryggere?",
      options: ["Trygghet er et nytt leksem dannet av trygg, mens tryggere bare er en form av det samme ordet", "Begge er nye leksemer, men det ene er dannet med suffiks og det andre med et prefiks som ikke skifter ordklassen", "Trygghet er en form av trygg, mens tryggere er et nytt leksem fordi komparativen har sin egen betydning", "Ingen prinsipiell forskjell mellom dem"],
      explanation: "Testen er om ordet ville stått som eget oppslag i ordboka: trygghet ville det, tryggere ikke. Det første er orddanning, det andre er bøyning. Fella er å se på formen — begge er rot pluss endelse — i stedet for på statusen, og formlikheten er nettopp det som gjør paret verdt å nevne i et svar.",
    },
    {
      question: "Hva er hodet i husbåt?",
      options: ["båt, siden en husbåt er en slags båt, og hodet i en norsk sammensetning står sist og bestemmer både ordklasse og genus", "hus, siden det står først og dermed avgjør hva slags ord sammensetningen som helhet blir", "begge leddene, siden en sammensetning per definisjon har to likestilte hoder i norsk", "ingen av dem, siden hodebegrepet bare gjelder for fraser og ikke for enkeltord"],
      explanation: "En husbåt er en slags båt, og hodet er derfor båt — det siste leddet, i tråd med høyrehoderegelen. Fella er å tro at det første leddet styrer fordi det er det som gir ordet sitt særpreg; utfyllingen avgrenser, men det er hodet som bestemmer ordklasse, genus og hva ordet betegner.",
    },
    {
      question: "Hvorfor heter det et båthus, men en husbåt?",
      options: ["Fordi genus arves fra hodet, og hodet er det siste leddet i begge ordene", "Fordi genus i sammensetninger bestemmes av det leddet som er lengst, målt i antall stavelser i uttalen", "Fordi genus i sammensetninger følger det første leddet, som er det som avgrenser betydningen av ordet", "Fordi de har fått ulikt genus i ordboka"],
      explanation: "Hodet står sist og gir ordet både ordklasse og genus: det heter et hus, altså et båthus, og en båt, altså en husbåt. Fella er å knytte genus til førsteleddet eller til lengden; ingen av delene har noe med saken å gjøre, og paret er nettopp derfor et så tydelig eksempel.",
    },
    {
      question: "Hva er -s- i fredsavtale?",
      options: ["En fugemorf uten egen betydning", "Et bøyningsformativ som markerer at avtalen tilhører freden, altså en eieform av førsteleddet i ordet", "Et avledningsformativ som gjør substantivet fred om til en form som kan inngå i sammensetninger", "En del av rota freds-"],
      explanation: "Fugemorfen binder to ledd og betyr ingenting selv; den uttrykker verken eiendom eller flertall. Den nære fella er eieformen, siden formen er identisk med genitivs-s — men avtalen tilhører ikke freden. Rota er fred, og formen freds- finnes bare inne i sammensetninger.",
    },
    {
      question: "Har kirkegård en fugemorf?",
      options: ["Nei — kirke slutter på -e i sin egen grunnform, så det er ingen bindende morf mellom leddene", "Ja, -e- mellom kirke og gård er et sammensetningsformativ på samme måte som -e- i hestesko er det", "Ja, men den er et bøyningsformativ, siden -e er den bestemte formen av substantivet kirke i eldre norsk", "Nei, fordi ord med to stavelser i førsteleddet aldri tar fugemorf i norsk"],
      explanation: "Testen er om førsteleddet ser likedan ut alene: kirke er kirke også i kirkegård, mens hest blir heste- i hestesko. Den nære fella er å lese den siste bokstaven i førsteleddet som en fuge — en feil som gir riktig antall morfer, men gal merking på to av dem. Stavelsestall styrer ingenting her.",
    },
    {
      question: "Hva skiller en sammensetning fra en avledning?",
      options: ["I sammensetningen kan begge leddene stå alene som ord; i avledningen kan bare det ene", "I sammensetningen skifter ordet alltid ordklasse, mens avledningen bare endrer betydningen uten å flytte ordet", "Sammensetningen er alltid lengre enn to stavelser, mens avledninger i norsk er systematisk kortere enn det", "Sammensetningen gir nytt oppslag, avledningen ny form"],
      explanation: "Kjennetegnet er selvstendigheten: sommer og ferie kan begge stå alene, men -het og u- kan ikke. Fella om ordklasseskifte er snudd på hodet — det er avledningen som ofte skifter klasse, mens sammensetningen aldri gjør det. Og begge deler er orddanning, så begge gir nye oppslag.",
    },
    {
      question: "Hva er typisk for prefikser i norsk, sammenlignet med suffikser?",
      options: ["Prefikset skifter sjelden ordklasse, mens suffikset ofte gjør det, og en endring i ordklasse peker derfor mot et suffiks", "Prefikset skifter alltid ordklasse, siden det er plasseringen foran rota som utløser skiftet i norsk", "Prefikset er en bøyningsendelse, mens suffikset alltid er et avledningsformativ i norsk orddanning", "Prefikset kan stå alene som ord, mens suffikset aldri kan det"],
      explanation: "Trygg og utrygg er begge adjektiver, mens trygg og trygghet er ulike ordklasser — det er en nyttig praktisk test: endrer klassen seg, se etter et suffiks. Fella er å tro at prefikser kan stå alene; da forveksles de med førsteledd i sammensetninger, og sommer i sommerferie er nettopp et slikt førsteledd.",
    },
    {
      question: "Hva gjør suffikset -het?",
      options: ["Det gjør et adjektiv om til et substantiv, som når trygg blir trygghet", "Det gjør et substantiv om til et adjektiv, som når konge blir kongelig, og hører derfor til de klasseskiftende suffiksene", "Det gjør et verb om til en personbetegnelse, slik at den som utfører handlingen, får et eget navn", "Det gir bare en ny form av adjektivet"],
      explanation: "-het er en nominalisering: adjektivet blir substantiv, og resultatet er et nytt oppslag i ordboka. De nære distraktorene beskriver andre suffikser — -lig går motsatt vei, og -er lager personbetegnelser av verb. Og påstanden om at -het bare gir en ny form av adjektivet, ville gjort suffikset til bøyning, som det ikke er.",
    },
    {
      question: "Hva er en nominalisering?",
      options: ["En avledning som gjør et verb eller et adjektiv om til et substantiv", "En sammensetning der hodet er et substantiv, slik at hele ordet blir et substantiv uansett hva utfyllingen er", "En bøyningsform av et substantiv i bestemt form, som brukes når handlingen omtales som en ting", "Et annet navn på konversjon"],
      explanation: "Bygging, bevegelse og trygghet er nominaliseringer: et verb eller adjektiv er gjort om til et substantiv med et suffiks. Den nære fella er konversjonen — et hopp er også et substantiv laget av et verb, men der er ingen morf lagt til, og nominalisering brukes om avledningen. Bruker du ordet i et svar, si hvilket suffiks som gjør jobben.",
    },
    {
      question: "Hva betyr det at -dom er et uproduktivt avledningsformativ?",
      options: ["At det finnes i eksisterende ord som visdom og ungdom, men ikke brukes til å lage nye ord", "At det ikke lenger skal skilles ut som egen morf i en segmentering, siden det ikke danner ord i moderne norsk", "At ordene som inneholder det, er lite brukt i moderne norsk og derfor regnes som foreldede oppslag", "At det bare kan festes til adjektiver"],
      explanation: "Produktivitet handler om dannelsen, ikke om ordene: visdom og ungdom er hverdagsord, men ingen lager nye ord på -dom. Den farligste distraktoren er den om segmenteringen — et uproduktivt formativ skal fortsatt skilles ut og merkes, siden det har gjort jobben sin en gang.",
    },
    {
      question: "Hva skiller forkorting fra sammentrekning?",
      options: ["Forkortingen kapper ett ord, mens sammentrekningen smelter sammen deler av to", "Forkortingen fjerner det som ser ut som en avledning, mens sammentrekningen kapper en vilkårlig bit av ordet", "Forkorting dekker bare initialord", "Forkortingen gir et nytt leksem, mens sammentrekningen bare gir en uformell variant av et ord som finnes"],
      explanation: "App er en bit av applikasjon, mens motell er deler av motor og hotell smeltet sammen — antall kildeord er det som skiller. Den nære fella er tilbakedanning, som også gjør ordet kortere, men som fjerner nøyaktig det som ser ut som en avledning. Initialord er en undertype av forkorting, ikke hele den.",
    },
    {
      question: "Hva er SFO et eksempel på?",
      options: ["Et initialord, altså en forkortingstype dannet av forbokstavene i et flerordsuttrykk", "En sammentrekning, siden deler av flere ord er smeltet sammen til én kortere enhet som uttales som ett ord", "En konversjon, siden et flerordsuttrykk er tatt i bruk som ett enkelt substantiv uten at noe er lagt til", "En sammensetning, siden ordet består av flere selvstendige ledd satt etter hverandre"],
      explanation: "Initialordet bygger på forbokstavene, og det er en undertype av forkorting. Sammentrekningen smelter derimot sammen biter av ord, som i motell, og konversjonen forutsetter et ordklasseskifte uten tilføyd morf. Ingen av leddene i SFO er selvstendige ord, så en sammensetning er det ikke.",
    },
    {
      question: "Hvorfor er å teipe et eksempel på konversjon?",
      options: ["Fordi substantivet teip er tatt i bruk som verb uten at noen orddannende morf er lagt til, og infinitivens -e er bøyning og ikke orddanning", "Fordi ordet har fått infinitivsendelsen -e, som er den morfen som gjør substantivet om til et verb i norsk", "Fordi ordet er lånt inn fra engelsk og deretter tilpasset norsk bøyning og norsk skrivemåte", "Fordi verbet er dannet ved at et avledningsformativ er fjernet fra et lengre substantiv"],
      explanation: "Konversjon er ordklasseskifte uten tilføyd morf, og testen er om ordet nå bøyes som medlem av den nye klassen: teiper, teipet. Den nære fella er å regne infinitivens -e som orddannende — den er bøyning. Og fjerning av en avledning er tilbakedanning, en annen måte.",
    },
    {
      question: "Hva er skyskraper et eksempel på?",
      options: ["Et oversettelseslån, der byggemåten og ikke lydformen er hentet fra et annet språk", "Et lån i vanlig forstand, siden ordet er hentet inn fra engelsk med sin opprinnelige lydform i behold", "En ren norsk sammensetning uten noe lån i historien, siden begge leddene er arvede norske ord", "En tilbakedanning av et lengre engelsk uttrykk som er kortet ned i norsk"],
      explanation: "Delene er norske, men mønsteret er kopiert fra et engelsk ord — det er nettopp definisjonen på et oversettelseslån. Å svare sammensetning er ikke galt om formen, men det svarer ikke på hvor ordet kommer fra, og det er spørsmålet i en oppgave om orddanningsmåte.",
    },
    {
      question: "Hvordan er verbet å nødlande dannet?",
      options: ["Ved tilbakedanning: -ing er fjernet fra substantivet nødlanding", "Ved sammensetning: substantivet nød er satt sammen med verbet lande, slik norske sammensetninger vanligvis dannes", "Ved konversjon: substantivet nødlanding er tatt i bruk som verb uten at noen morf er endret i ordet", "Ved avledning fra rota land"],
      explanation: "Substantivet er eldst, og verbet er laget ved at det som ser ut som avledningsformativet -ing, er tatt bort — altså motsatt retning av vanlig avledning. Den nære fella er sammensetning: ordet ser sammensatt ut, men rekkefølgen i historien er den motsatte. Konversjon forutsetter at ingenting fjernes.",
    },
    {
      question: "Oppgaven ber om to eksempler på hver orddanningsmåte, og du gir ett. Hva skjer?",
      options: ["Punktet gir redusert uttelling, siden færre eksempler enn bestilt trekker", "Ingenting, så lenge det ene eksempelet er riktig og begrunnet med en fullstendig setning under hvert punkt", "Hele oppgaven regnes som ubesvart, siden et ledd som ikke er fullt besvart, ikke telles med i det hele tatt", "Antallet teller ikke i vurderingen"],
      explanation: "Feil #7 er å gi færre eksempler enn oppgaven ber om, og H2018 sier uttrykkelig at det trekker. Det er den billigste feilen i emnet, fordi den ikke skyldes manglende kunnskap, men manglende telling. Et godt begrunnet enkelteksempel reparerer ikke antallet.",
    },
    {
      question: "Hva sier H2020 om egne eksempler som er begrunnet?",
      options: ["At de teller litt mer, også når oppgaven ikke uttrykkelig ber om noen begrunnelse", "At de bare teller når oppgaven eksplisitt ber om en forklaring, og ellers regnes som overflødig tekst i besvarelsen", "At de erstatter kravet om antall, slik at ett grundig begrunnet eksempel kan stå i stedet for to enkle", "At de teller mer enn klassifiseringen"],
      explanation: "Begrunnede egeneksempler teller litt mer selv når begrunnelsen ikke er bedt om, og det gjør setningen til en billig investering. Fellene er å tro at den erstatter antallskravet, eller at klassifiseringen er verdiløs — begge deler telles, og det er summen som gir uttellingen.",
    },
    {
      question: "I egeneksempel-malen er det to trinn som skiller et fullt svar fra et halvt. Hvilke?",
      options: ["Å si eksplisitt hvilken del av eksempelet som svarer til hvilken del av definisjonen, og å si hva som ville gjort eksempelet dårlig", "Å navngi fenomenet med riktig fagterm, og å gi et eksempel som ikke står i noen lærebok fra før av", "Å skrive eksempelet i kursiv, og å plassere det i en punktliste med samme rekkefølge som i oppgaveteksten", "Å oppgi hvor mange eksempler oppgaven ba om, og å telle dem opp til slutt i svaret"],
      explanation: "Trinn 1 og 2 — navngi fenomenet og gi eksempelet — klarer alle. Koblingen ledd for ledd og den nære naboen som eksempelet ikke er, er det som viser at du kan skillet og ikke bare kategorien. Telling er viktig, men det er en kontroll og ikke et trinn i begrunnelsen.",
    },
    {
      question: "Hva er ordbokstesten på om noe er orddanning eller bøyning?",
      options: ["Ville resultatet stått som eget oppslag, eller bare som en form av et oppslag som finnes fra før?", "Er ordet lengre enn utgangspunktet, slik at det er lagt til minst én morf i enden av det?", "Har ordet fått en ny betydning, eller betyr det fortsatt omtrent det samme som det gjorde før?", "Kan ordet settes sammen med andre ord, eller opptrer det bare alene i tekster?"],
      explanation: "Nytt oppslag betyr orddanning, ny form betyr bøyning, og testen kan brukes på et par sekunder. Fellene er lengde og betydning: også bøyning gjør ordet lengre, og også bøyning kan endre betydningen litt, mens ordbokstesten skiller skarpt. Sammensetningsevne er interessant, men den avgjør ingenting her.",
    },
    {
      question: "Hvorfor står hodet til høyre i norske sammensetninger noe boka trekker fram som et typologisk poeng?",
      options: ["Fordi hodeplassering er et trekk ved det enkelte språket, og dermed noe språk kan sammenlignes på", "Fordi alle språk plasserer hodet til høyre i sammensetninger, slik at trekket kan brukes som en universell regel", "Fordi hodeplasseringen i norsk varierer fra ord til ord, og variasjonen må derfor forklares typologisk", "Fordi sammensetning finnes i alle språk"],
      explanation: "Regelen gjelder så godt som unntaksfritt i norsk, men den er ikke universell — nettopp derfor er den en parameter språk kan sammenlignes på. Fella er å gjøre den til en universell regel; da forsvinner hele poenget med å sammenligne. Og hodeplasseringen i norsk varierer ikke, den er stabil.",
    },
  ],
  'exfac03-spr-4-5': [
    {
      question: "Hva er en bøyningsklasse?",
      options: ["Et sett av ord som tar de samme bøyningsformativene, altså ord som bøyes likt gjennom hele paradigmet sitt", "En gruppe ord som hører til samme ordklasse og derfor kan stå på de samme plassene i en setning", "En gruppe ord som deler genus, slik at de får samme artikkel og samme bestemte form i entall", "En gruppe ord som er dannet på samme måte, altså ved sammensetning, avledning eller konversjon"],
      explanation: "Klassen defineres av formativene ordet tar gjennom paradigmet, ikke av hva slags ord det er eller hvordan det ble til. De nære fellene er ordklasse og genus: ordklassen er inndelingen bøyningsklassen ligger inne i, og genus styrer artikkel og bestemt entall, men ikke flertallsformen. Dannelsesmåten hører til orddanningen og er en helt annen inndeling.",
    },
    {
      question: "Hus og eple er begge intetkjønn, men bøyes ulikt i flertall. Hva viser det?",
      options: ["At genus ikke alene bestemmer bøyningsklassen, siden ordene får henholdsvis nullendelse og -er", "At det ene ordet egentlig ikke er intetkjønn, siden intetkjønnsord alltid har lik form i entall og flertall i norsk", "At flertallsformen er et stilvalg i norsk, slik at begge formene er tillatt for begge ordene i skrift", "At eple hører til en annen ordklasse enn hus"],
      explanation: "Begge er intetkjønn og får -et i bestemt entall, men bare det ene får -er i flertall, og genus alene avgjør derfor ikke klassen. Fella om ordklasse er nær: ordklassen er felles for begge, det er bøyningsklassen som skiller dem. Og flertallsformen her er ikke valgfri.",
    },
    {
      question: "Hvorfor er paradigmet, og ikke oppslagsformen, grunnlaget for å plassere et ord i en bøyningsklasse?",
      options: ["Fordi oppslagsformen er ett punkt i paradigmet og sier lite om hvilke formativer ordet tar ellers", "Fordi oppslagsformen er den eneste formen som er normert, mens de øvrige formene varierer mellom talemålene", "Fordi paradigmet viser ordets betydning, og bøyningsklassene i norsk er inndelt etter betydning", "Fordi oppslagsformen alltid er identisk i alle klassene, slik at den ikke kan skille noe som helst"],
      explanation: "Bil, bok og hus ser like ut som oppslagsord, og det er flertallsformen som skiller dem — derfor må formene settes opp før man konkluderer. Fellene er å tro at klassene er inndelt etter betydning, eller at oppslagsformen aldri skiller noe; den skiller av og til, den er bare ikke pålitelig alene.",
    },
    {
      question: "Hvilken form er som regel den avgjørende for norske substantiver?",
      options: ["Ubestemt flertall, siden du der ser både om det kommer en endelse, og om rotvokalen i ordet holder seg uendret", "Bestemt entall, siden genusforskjellen kommer tydeligst fram der", "Ubestemt entall, siden det er den formen som står i ordboka og dermed representerer ordet som helhet", "Bestemt flertall, siden endelsen der er sammensatt av både en flertallsmarkør og en bestemthetsmarkør"],
      explanation: "I ubestemt flertall ser du både om det kommer en endelse og om rotvokalen holder seg — det er der klassene skiller lag. Bestemt entall skiller genus, ikke klasse, og de øvrige rutene er ofte like på tvers av klassene. Å peke på riktig rute er selve begrunnelsen i en klassifiseringsoppgave.",
    },
    {
      question: "Hva er omlyden i bok og bøker?",
      options: ["Et vokalskifte i selve rota, ikke en morf som er lagt til", "Et bøyningsformativ som uttrykker flertall, og som kommer i tillegg til flertallsendelsen -er i ordet", "Et avledningsformativ, siden vokalskiftet gir et nytt leksem med sin egen betydning i ordboka", "En ren skrivemåteforskjell"],
      explanation: "Ingen morf er lagt til; det er rota selv som skifter form, og endelsen -er kommer i tillegg og gjør sin egen jobb. Fella er å kalle vokalskiftet et formativ — formativer er morfer, og her er det snakk om to former av samme rot, altså allomorfer. Skrivemåten følger uttalen her.",
    },
    {
      question: "Hva menes med nullendelse i et paradigme?",
      options: ["At kategorien uttrykkes uten endelse, slik at formen er identisk med grunnformen, som i hus i flertall", "At ruta i paradigmet er tom fordi ordet ikke kan brukes i den kategorien i det hele tatt i moderne norsk", "At ordet mangler flertallsform, slik at det bare kan brukes i entall og må omskrives i flertall", "At endelsen finnes i uttalen, men ikke skrives, slik at forskjellen bare høres og ikke ses"],
      explanation: "Ruta er utfylt med den umarkerte formen, og det fraværet er nettopp klassens kjennemerke — derfor skal det nevnes eksplisitt i en begrunnelse. Fellene er å lese nullendelsen som en tom rute eller som en manglende form; hus har en flertallsform, den ser bare ut som entallsformen.",
    },
    {
      question: "Hva er et referanseord?",
      options: ["Et ord du kan bøyningen av fra før, og som du sammenligner det ukjente ordet med", "Det ordet i en klasse som er mest brukt, og som derfor har gitt klassen navnet den er kjent under", "Det ordet oppgaveteksten selv oppgir som utgangspunkt for analysen av de øvrige ordene", "Et ord som viser til noe utenfor teksten"],
      explanation: "Referanseordet er en representant for klassen, ikke en definisjon av den: bil for den store hankjønnsgruppen, bok for omlydsgruppen, kaste for a-verbene. Grepet gjør sammenligningen konkret og gir deg formuleringen «bøyes som X og ikke som Y». Alternativet om ord som viser til noe utenfor teksten, beskriver referanse i semantikken, som er en helt annen sak.",
    },
    {
      question: "Hva skiller a-verb fra e-verb?",
      options: ["A-verbene har -et eller -a i preteritum og likt partisipp, mens e-verbene har -te eller -de og et kortere partisipp", "A-verbene har alltid rot på a, mens e-verbene har rot på e, slik at vokalen i infinitiven avgjør klassen", "A-verbene skifter rotvokal i preteritum, mens e-verbene beholder rotvokalen gjennom hele paradigmet sitt", "A-verbene er den lukkede klassen, mens e-verbene tar imot alle nye verb som kommer inn i norsk"],
      explanation: "Kastet mot kjøpte er selve testen, og partisippet forsterker den: har kastet mot har kjøpt. Vokalskifte i preteritum kjennetegner de sterke verbene, ikke a-verbene, og det er a-verbene som er den produktive klassen — begge de to distraktorene bytter om på riktige opplysninger.",
    },
    {
      question: "Hva kjennetegner et sterkt verb?",
      options: ["Preteritum dannes ved vokalskifte i rota, uten d- eller t-endelse", "Preteritum dannes med en endelse som inneholder d eller t, og rotvokalen står urørt gjennom hele paradigmet", "Verbet er høyfrekvent og gammelt, og hører derfor til den delen av ordforrådet som er arvet fra norrønt", "Verbet mangler infinitivsendelse"],
      explanation: "Skrive, skrev, har skrevet: ingen dental endelse i preteritum, men skiftende vokal. Distraktoren om endelse beskriver de svake verbene, og den om manglende infinitivsendelse beskriver kortverbene. At de sterke verbene er gamle og hyppige, er sant nok, men det er en observasjon om gruppen, ikke kjennetegnet man klassifiserer etter.",
    },
    {
      question: "Hvilken klasse havner nye norske verb som å streame og å blogge i?",
      options: ["A-verbene, som er den produktive klassen der nye og lånte verb havner: streamet og blogget følger det mønsteret", "De sterke verbene, siden nye verb får vokalskifte i preteritum etter mønster av de eldste verbene i språket", "Kortverbene, siden lånte verb i norsk som regel har enstavet rot som ender på vokal i infinitiven", "E-verbene med -de, siden lyden foran endelsen i lånte verb nesten alltid er stemt"],
      explanation: "Streamet og blogget viser mønsteret: nye verb bøyes svakt, og som regel som a-verb. De sterke verbene og omlydsordene tar ikke imot nye medlemmer, og det er nettopp det produktivitet betyr. Testen kan du gjøre selv: finn på et verb og bøy det, så hører du hvilken form som kommer naturlig.",
    },
    {
      question: "Hvilken form er den avgjørende for adjektiver?",
      options: ["Komparativen, siden den viser om gradbøyningen skjer med endelse eller med et eget ord foran", "Intetkjønnsformen, siden det er der man ser om adjektivet i det hele tatt lar seg samsvarsbøye i norsk", "Flertallsformen på -e, siden den er felles for flertall og bestemt form og dermed dekker to kategorier", "Positivformen, siden det er den formen adjektivet står i når det slås opp i en ordbok"],
      explanation: "Fin gir finere, mens interessant gir mer interessant — der skiller mønstrene lag. Intetkjønnsformen er interessant og verdt å kommentere, men den skiller færre ord, og positivformen skiller ingen. Å peke på riktig rute er kortere og skarpere enn å ramse opp hele paradigmet.",
    },
    {
      question: "Hvordan skal en besvarelse omtale uregelmessige former som bedre og gikk?",
      options: ["Som former som følger et eldre mønster, og som derfor ikke passer rent inn i noen av hovedklassene", "Som feil i systemet, altså former som strider mot reglene og må læres som unntak fra dem", "Som frie varianter, siden den regelmessige formen også er tillatt ved siden av den uregelmessige", "Som bøyningsformer av et annet ord, siden roten ikke er den samme som i grunnformen"],
      explanation: "En uregelmessig form er ikke et regelbrudd, men en eldre regel som fortsatt gjelder for noen få og svært hyppige ord, og den skal omtales nøytralt. Distraktoren om frie varianter er gal fordi det ikke heter «goder» ved siden av «bedre». Og selv om komparativen av god kommer fra en annen rot, regnes formene fortsatt som del av samme paradigme.",
    },
    {
      question: "På hvilken måte er et klasseskille også et allomorfiskille?",
      options: ["Fordi -et, -te og -de alle uttrykker preteritum, og klassen er betingelsen som velger mellom dem", "Fordi hver bøyningsklasse har sitt eget morfem for preteritum, slik at klassene uttrykker litt ulike ting om tid", "Fordi allomorfer per definisjon er former som kan byttes fritt, slik at ethvert verb kan ta enhver av endelsene", "Fordi det er røttene som er allomorfer"],
      explanation: "Formene uttrykker samme innhold, står i utfyllende fordeling og velges av en formulerbar betingelse — det er nettopp definisjonen på allomorfer. Fella om ulike morfemer snur det på hodet: hadde de vært ulike morfemer, ville de uttrykt ulikt innhold. Og allomorfer kan ikke byttes fritt; det ville vært fri variasjon.",
    },
    {
      question: "Hva er feil #8 i denne oppgavetypen?",
      options: ["Å plassere ordet i en klasse uten å begrunne plasseringen", "Å sette opp hele paradigmet i svaret i stedet for bare å oppgi den formen som avgjør klassetilhørigheten", "Å bruke et referanseord som leseren ikke kan forventes å kjenne bøyningen av fra før av", "Å oppgi genus i tillegg"],
      explanation: "Konklusjonen alene er den delen som er lettest å gjette, og derfor er det forklaringen som veier tyngst i klassifiseringsspørsmål. Å sette opp hele paradigmet er ikke en feil, bare mindre skarpt enn å peke på den avgjørende ruta, og genus kan godt nevnes som ett av flere kjennetegn.",
    },
    {
      question: "Hva er galt med svaret «ordet er et e-verb», uten mer?",
      options: ["Det navngir klassen uten å si hva som definerer den, som er feil #4", "Det bruker et klassenavn som ikke finnes i norsk grammatikk, siden de svake verbene bare deles i to grupper", "Det oppgir konklusjonen først, mens rekkefølgen i denne sjangeren skal være paradigme, referanseord og deretter navn", "Det mangler opplysning om genus"],
      explanation: "Setningen som mangler, er kort: at klassen får -te eller -de i preteritum, og at partisippet er kortere enn preteritumsformen. Feil #4 er nettopp å nevne fagtermer uten å forklare systematikken bak dem. Klassenavnet finnes, og genus er ikke en kategori for verb.",
    },
    {
      question: "Hvor godt dokumentert er bøyningsklasser som eksamenstema i dette materialet?",
      options: ["Temaet er dokumentert i 1 av 6 terminer og gir 5 av 65 poeng der det står", "Temaet står i flere terminer, men er bare poengsatt i den nyeste av dem, og vekten er derfor kjent for én termin", "Temaet er dokumentert i alle terminene med kjent temafordeling, men med ulik poengvekt fra gang til gang", "Temaet er ikke dokumentert i materialet"],
      explanation: "Ett spørsmål i én termin er et tynt belegg, og boka sier det høyt i stedet for å la temaet se mer etablert ut enn det er. Distraktorene overdriver dekningen i hver sin retning; temaet finnes i materialet, men bare én gang, og det er derfor kapitlet er kort.",
    },
    {
      question: "Hvordan bør konklusjonen i en klassifiseringsoppgave formuleres?",
      options: ["Med begrunnelsen først, i formen «siden ordet gjør slik i den avgjørende formen, bøyes det som X og ikke som Y»", "Med konklusjonen først og begrunnelsen etterpå, slik at leseren vet hvilken klasse svaret gjelder før argumentet", "Med begge de mulige klassene nevnt og uten å velge mellom dem, siden klassifiseringer sjelden har ett riktig svar", "Med en henvisning til hvilket referanseord som ble brukt, uten at formene i paradigmet gjentas"],
      explanation: "Begrunnelsen først, og gjerne med kontrasten «og ikke som Y» — da er svaret etterprøvbart og viser at mer enn ett alternativ er vurdert. Å konkludere først sier det samme, men legger vekten på den delen som er lettest å gjette. Og her finnes det som regel ett godt begrunnet svar, i motsetning til grensetilfellene i segmenteringen.",
    },
    {
      question: "Hunkjønnsordet bok kan bøyes både som ei bok og boka og som en bok og boken. Hva er det viktigste kravet til en besvarelse som bruker slike ord?",
      options: ["At bøyningen er konsekvent gjennom hele svaret, siden begge mønstrene er tillatt", "At hunkjønnsformen brukes, siden ordet er hunkjønn og hankjønnsbøyning derfor er en tilnærming som ikke er presis", "At hankjønnsformen brukes, siden den er den mest utbredte i moderne skriftlig bokmål og dermed den nøytrale", "At begge formene oppgis hver gang"],
      explanation: "Valget er et stilvalg, ikke et spørsmål om rett og galt, og det som betyr noe, er at du holder deg til det du valgte. Distraktorene gjør det ene mønsteret obligatorisk, hver sin vei, og den siste gjør et enkelt valg til en dobbeltføring som bare stjeler plass.",
    },
  ],
  'exfac03-spr-5-1': [
    {
      question: "Hva avgjør hvilken kategori en frase får?",
      options: ["Ordklassen til hodet, altså til det ordet frasen ikke kan miste når resten strykes", "Ordklassen til det lengste ordet i frasen", "Hvilken funksjon frasen har i setningen", "Hvilket ord som står først i frasen"],
      explanation: "Frasen heter det hodet heter, og hodet er det ordet frasen ikke kan miste. Den nære fella er å la lengden avgjøre: i «bak den gamle låven» er «låven» både lengst og mest innholdstungt, men hodet er preposisjonen «bak», og frasen er derfor en preposisjonsfrase. Funksjon og rekkefølge er egne spørsmål som ikke bestemmer kategorien.",
    },
    {
      question: "Hvilket kriterium står sterkest når ordklassen til et ord skal bestemmes?",
      options: ["Formkriteriet, altså hvilke bøyningsformer ordet kan ha, siden formene lar seg etterprøve", "Betydningskriteriet, siden innholdet i ordet er det man legger merke til først og lettest kan beskrive", "Funksjonskriteriet, siden plassen i setningen alltid avgjør hva slags ord man har med å gjøre", "Alle tre veier likt, og man velger fritt"],
      explanation: "Formkriteriet er sterkest fordi bøyningsformer er etterprøvbare: du setter ordet inn i paradigmet og ser om det passer. Betydning er den vanligste fella, fordi den ofte peker riktig og likevel ikke tåler et motargument — «løping» betegner en handling og er substantiv. Funksjonskriteriet er nest sterkest og brukes der bøyningen svikter.",
    },
    {
      question: "Hva er hodet i frasen «bak den gamle låven»?",
      options: ["Preposisjonen «bak», som er det eneste ordet i frasen som ikke lar seg stryke", "Substantivet «låven», som bærer mest innhold i frasen og derfor er den delen leseren merker seg", "Adjektivet «gamle», som gjør frasen mer presis", "Determinativet «den»"],
      explanation: "Stryker du «bak», faller hele frasen ut av setningen, mens de andre ordene kan strykes. Fella er å velge det ordet som bærer mest innhold: «låven» er hodet i nominalfrasen «den gamle låven», men den nominalfrasen er bare utfylling inne i preposisjonsfrasen.",
    },
    {
      question: "Hvorfor regnes «løping» som substantiv selv om ordet betegner en handling?",
      options: ["Fordi det bøyes som et substantiv, med formen «løpingen», og tar determinativ foran seg", "Fordi det er avledet av et verb, og avledninger fra verb havner alltid i substantivklassen når de brukes i skrift", "Fordi handlinger som varer over tid regnes som ting i grammatikken, i motsetning til handlinger som skjer momentant", "Fordi ordet kan stå både før og etter verbalet i en setning, og det kan bare substantiver gjøre"],
      explanation: "Formkriteriet avgjør: rekka «løping — løpingen» er substantivets paradigme, og ordet kan ha determinativ foran seg. Den nære fella er å la innholdet styre, altså å slutte fra «handling» til «verb». Betydningskriteriet er det svakeste av de tre og brukes bare når form og funksjon ikke skiller.",
    },
    {
      question: "Hva viser erstatningstesten i tillegg til at ordgruppa henger sammen?",
      options: ["Hvilken kategori frasen har, siden erstatningsordet må passe", "Hvor mange ord frasen kan inneholde før den må deles i to mindre fraser i analysen", "Om frasen står på riktig plass i setningen", "Hvilken ordklasse hvert enkelt ord i frasen tilhører, siden alle må kunne byttes ut"],
      explanation: "Bytter du hele gruppa mot ett ord, forteller det ordet også hva slags frase du har: går et pronomen inn, er gruppa en nominalfrase. Fella er å tro at testen sier noe om plassering — det er flyttetestens jobb. Testen sier heller ingenting om ordklassen til de enkelte ordene inne i frasen.",
    },
    {
      question: "Hva betyr det at en ordgruppe ikke lar seg flytte fritt i setningen?",
      options: ["At gruppa kan ligge inne i en større frase i stedet for å være et selvstendig ledd i setningen", "At gruppa ikke er en frase i det hele tatt, og at ordene bare tilfeldigvis står ved siden av hverandre", "At setningen er feil bygget, og at ordstillingen må rettes før analysen kan gjennomføres videre", "At gruppa alltid er et objekt, siden objekter er de eneste leddene som har fast plass i norsk"],
      explanation: "En test som ikke slår til, er også en opplysning: gruppa kan være en frase inne i en annen frase, slik «til Vangsnes» ligger inne i «den gamle ferja til Vangsnes». Fella er å konkludere med at gruppa ikke er en frase — da kaster du bort den opplysningen testen faktisk ga deg.",
    },
    {
      question: "Hva skiller et determinativ fra et pronomen?",
      options: ["Determinativet står til et substantiv, mens pronomenet står i stedet for hele nominalfrasen", "Determinativet er alltid ubøyelig", "Determinativet kan bare stå først i setningen, mens pronomenet kan stå hvor som helst i den", "Determinativet hører til de åpne ordklassene, mens pronomenet hører til de lukkede klassene i språket"],
      explanation: "Prøven er om ordet har et substantiv ved siden av seg: «denne kuben» har determinativ, mens «denne» brukt alene er pronomen. Fella er å skille på bøyning, som ikke gir noe klart svar her. Nettopp fordi pronomenet dekker hele frasen, er det det beste verktøyet i erstatningstesten.",
    },
    {
      question: "Hva skiller en preposisjon fra en subjunksjon?",
      options: ["Preposisjonen styrer en nominalfrase, mens subjunksjonen innleder en hel leddsetning", "Preposisjonen står alltid foran det den styrer, mens subjunksjonen kan stå både foran og etter leddsetningen", "Preposisjonen kan bøyes i samsvar med utfyllingen sin, mens subjunksjonen er ubøyelig i alle sammenhenger", "Preposisjonen hører hjemme i skriftspråket, mens subjunksjonen først og fremst brukes i muntlig norsk"],
      explanation: "Sammenlign «etter kampen» med «etter at kampen var slutt»: det første er en nominalfrase, det andre en setning med eget tidsbøyd verb. Fella er å se på plasseringen, siden begge står foran det de styrer. Testen er altså hva som følger etter ordet, ikke hvor ordet står.",
    },
    {
      question: "Hva er forskjellen mellom en konjunksjon og en subjunksjon?",
      options: ["Konjunksjonen sideordner to likeverdige størrelser, mens subjunksjonen gjør det som følger, til et ledd inne i en annen setning", "Konjunksjonen brukes mellom setninger, mens subjunksjonen bare kan brukes mellom to fraser av samme kategori", "Konjunksjonen krever komma foran seg, mens subjunksjonen aldri kan ha komma foran seg i moderne norsk rettskriving", "Konjunksjonen er et innholdsord med egen betydning, mens subjunksjonen bare er et formelt bindeledd uten innhold"],
      explanation: "Prøven er om det som følger, kunne stått alene: «hun ventet, og bussen kom» er sideordning, mens «hun ventet fordi bussen kom» er underordning. Fella er tegnsettingsregelen, som varierer og ikke sier noe om strukturen. Skillet handler om hvem som er ledd i hvem.",
    },
    {
      question: "Hva skiller et adjektiv fra et adverb i praksis?",
      options: ["Adjektivet kan stå foran et substantiv og samsvarsbøyes med det, slik adverbet ikke kan gjøre", "Adjektivet gradbøyes, mens adverbet aldri lar seg gradbøye i noen form for norsk skriftspråk", "Adjektivet står alltid etter verbet, mens adverbet må stå foran verbet i en fortellende setning", "Adjektivet er hode i en frase, mens adverbet aldri kan være hode i noen frase i det hele tatt"],
      explanation: "«Den ivrige birøkteren» går, mens «den fort birøkteren» ikke gjør det, og det er samsvarsbøyningen som avgjør. Fella er gradbøyning: noen adverb gradbøyes faktisk, som «ofte — oftere — oftest». Adverb er dessuten hode i adverbfraser, så det siste kriteriet holder ikke.",
    },
    {
      question: "Hva er en utfylling i en frase?",
      options: ["Alt i frasen som ikke er hodet, og som kan strykes uten at frasen faller sammen", "Det ordet som gjør frasen lengst, altså det ordet som bærer mest av innholdet i gruppa", "Det siste ordet i frasen, siden norske fraser er bygget opp med kjernen sin til slutt", "Ethvert ord i frasen som selv kan stå alene som en fullstendig frase i en annen setning"],
      explanation: "Utfyllingen kan strykes; hodet kan ikke. Det er nettopp denne asymmetrien du bruker i strykemetoden. Fella er å definere utfyllingen ved lengde eller plassering, som ikke sier noe om hva frasen tåler å miste.",
    },
    {
      question: "Kan en frase bestå av bare ett ord?",
      options: ["Ja, ett ord er også en frase, for eksempel et pronomen som alene fyller hele subjektet", "Nei, en frase må ha minst to ord", "Bare hvis ordet er et substantiv", "Bare i muntlig språk, ikke i en skriftlig analyse"],
      explanation: "Frasen defineres av at gruppa oppfører seg som en enhet, ikke av antall ord, og «hun» er en fullverdig nominalfrase. Fella er å lese ordet «gruppe» bokstavelig. En frase på ett ord består av bare et hode, uten utfyllinger.",
    },
    {
      question: "Hva kjennetegner en nominalfrase?",
      options: ["Den har et substantiv eller et pronomen som hode", "Den inneholder alltid et determinativ", "Den står alltid først i setningen, siden nominalfraser er de vanligste subjektene i norsk", "Den kan ikke inneholde andre fraser inne i seg, for da regnes den som en sammensatt konstruksjon"],
      explanation: "Kategorien følger av hodet, og både «bikubene» og «nabolagets ivrigste birøkter» er nominalfraser. Fella er å kreve utfyllinger: en nominalfrase kan bestå av hodet alene. Nominalfraser kan i tillegg romme både adjektivfraser og preposisjonsfraser.",
    },
    {
      question: "Hva kjennetegner en preposisjonsfrase?",
      options: ["Den har en preposisjon som hode og en utfylling etter seg, nesten alltid en nominalfrase", "Den består av en preposisjon som står alene, siden preposisjonen selv angir sted eller tid", "Den har et substantiv som hode, med preposisjonen som en utfylling som står foran hodet", "Den kan bare fungere som adverbial i setningen, og aldri som en utfylling inne i en annen frase"],
      explanation: "Utfyllingen er obligatorisk, og det er den som gjør preposisjonen til hode i en frase. Fella er å la substantivet i utfyllingen bestemme kategorien — da ville «bak låven» blitt kalt nominalfrase. Preposisjonsfraser kan dessuten ligge inne i nominalfraser, som i «ferja til Vangsnes».",
    },
    {
      question: "Hva er hodet i en verbalfrase?",
      options: ["Verbet, altså det ordet i frasen som bærer selve handlingen og som ikke lar seg stryke", "Hjelpeverbet, siden det bærer tiden i setningen", "Objektet, siden det sier hva handlingen går ut over", "Adverbet, siden det sier noe om måten"],
      explanation: "Verbalfrasen heter det hodet heter, og hodet er verbet — i «satte ut tre nye kuber» er det «satte». Fella er å velge hjelpeverbet: det hører med i frasen, men det er hovedverbet som bærer innholdet. Objektet er et eget ledd, ikke hode.",
    },
    {
      question: "Hva skiller en adjektivfrase fra en adverbfrase?",
      options: ["Hodet er et adjektiv i den ene og et adverb i den andre, og kategorien følger av hodet", "Adjektivfrasen kan bare inneholde ett ord, mens adverbfrasen kan bygges ut med flere ord etter behov", "Adjektivfrasen står etter verbet, mens adverbfrasen står foran", "Adjektivfrasen sier noe om hele setningen, mens adverbfrasen sier noe om ett bestemt substantiv i den"],
      explanation: "Kategorien følger av hodet i begge tilfeller: «ganske full av bier» har adjektiv som hode, mens «overraskende stille» har adverb. Fella er å skille på plassering, som varierer for begge. Begge frasetypene kan dessuten bygges ut med utfyllinger.",
    },
    {
      question: "Hva er forskjellen på spørsmålet om ordklasse og spørsmålet om setningsledd?",
      options: ["Ordklassen er den samme uansett setning, mens setningsleddet er en rolle i én bestemt setning", "Ordklassen gjelder hele frasen, mens setningsleddet gjelder hvert enkelt ord i den frasen", "Ordklassen brukes i morfologien, mens setningsleddet er et begrep som bare finnes i fonologien", "Ordklassen avgjøres av plasseringen i setningen, mens setningsleddet avgjøres av ordets bøyning"],
      explanation: "«Kubene» er substantiv både i «Kubene sto bak låven» og i «Hun flyttet kubene», men er subjekt i den første og direkte objekt i den andre. Fella er å bytte om nivåene: ordklassen gjelder enkeltord, mens setningsleddet gjelder hele fraser. Prøven er om svaret ditt ville vært det samme i en annen setning.",
    },
    {
      question: "Hva går strykemetoden ut på?",
      options: ["Du stryker ett og ett av ordene i frasen for å finne ut hvilket ord frasen ikke kan miste", "Du stryker hele frasen fra setningen for å kontrollere om setningen fortsatt gir mening uten den", "Du stryker alle ord som ikke er innholdsord", "Du stryker det første og det siste ordet i frasen"],
      explanation: "Det ordet som ikke kan fjernes, er hodet, og frasekategorien følger av ordklassen til det ordet. Fella er å stryke hele frasen — det prøver om frasen er obligatorisk i setningen, som er et annet spørsmål. Metoden spør heller ikke hvilket ord som er innholdstyngst.",
    },
    {
      question: "Hvilken rolle spiller konstituenttestene i en besvarelse?",
      options: ["De er selve argumentet, og de skrives ut i teksten i stedet for bare å gjøres i hodet", "De er en privat kontroll som ikke hører hjemme i en besvarelse, siden sensor bare ser etter konklusjonen", "De erstatter merkingen, slik at du kan nøye deg med å beskrive testene i stedet for å merke leddene", "De brukes bare når du er i tvil, og skal utelates helt når analysen framstår som opplagt for deg"],
      explanation: "En begrunnet analyse er verdt mer enn en konstatert, og en alternativ tilhekting kan telle positivt når den er begrunnet med flytting og erstatning. Fella er å tro at testene er et hjelpemiddel du legger bort før du skriver. Merkingen skal fortsatt stå — testene kommer i tillegg, ikke i stedet.",
    },
    {
      question: "Hva er en konstituent?",
      options: ["En sammenhengende bit av setningen som hører sammen og fungerer som én enhet i den", "Enhver rekke av ord som står ved siden av hverandre", "Det minste ordet i en frase", "Et ledd som er nødvendig for at setningen skal være grammatisk"],
      explanation: "«Til Vangsnes» er en konstituent, mens «ferja til» bare er en ordrekke, og det er testene som skiller de to. Fella er å regne alle nabo-ord som en enhet. Konstituenten trenger heller ikke være obligatorisk i setningen — adverbialer er ofte frie og likevel konstituenter.",
    },
    {
      question: "Hvilken test er mest brukbar når en frase ikke lar seg flytte?",
      options: ["Spørsmålstesten, der frasen skal være hele svaret på ett spørsmål", "Flyttetesten gjentatt med et annet utgangspunkt, siden alle fraser lar seg flytte hvis man prøver lenge nok", "Bøyningstesten, der du ser om alle ordene i frasen bøyes likt", "Strykemetoden, som avgjør både hvor frasegrensene går og hvilken funksjon frasen har i setningen"],
      explanation: "Spørsmålstesten fungerer også der plasseringen er bundet, og den peker ofte på funksjonen i tillegg. Fella er å presse flyttetesten: fraser inne i andre fraser lar seg ofte ikke flytte alene. Strykemetoden finner hodet, ikke funksjonen.",
    },
    {
      question: "Hva er den vanligste feilen når frasekategorien skal bestemmes i en preposisjonsfrase?",
      options: ["At frasen kalles nominalfrase fordi utfyllingen inneholder et substantiv", "At frasen kalles adverbfrase fordi den sier noe om tid eller sted i den setningen den står i", "At frasen deles i to fraser fordi preposisjonen og utfyllingen står som to atskilte ord i setningen", "At frasen kalles verbalfrase fordi den ofte står rett etter verbet i en fortellende setning"],
      explanation: "Kategorien følger av hodet, og hodet i «bak den gamle låven» er preposisjonen. Den nære fella er innholdet: frasen angir sted, men det gjør den ikke til en adverbfrase, siden en adverbfrase har adverb som hode. Preposisjonen og utfyllingen utgjør sammen én frase.",
    },
  ],
  'exfac03-spr-5-2': [
    {
      question: "Hvilket verb er det finitte verbalet når en setning har flere verb?",
      options: ["Det første verbet, altså det som er tidsbøyd og forandrer seg når setningen skifter tid", "Det siste verbet i rekka", "Det verbet som bærer innholdet", "Det verbet som står nærmest objektet"],
      explanation: "I «Kollegaen har ringt kundene» blir fortidsformen «hadde ringt», og det er «har» som forandrer seg. Den nære fella er å velge det verbet som bærer innholdet, altså hovedverbet — men det er infinitt verbal, ikke finitt. Prøven er alltid å skifte tid på hele setningen.",
    },
    {
      question: "Hva er INFINITT VERBAL?",
      options: ["Den delen av verbalet som ikke er tidsbøyd, altså infinitiv eller perfektum partisipp", "Ethvert verb som står etter subjektet i setningen, uansett hvilken form verbet har fått i den setningen", "Det verbet som bærer tiden, i motsetning til hjelpeverbet", "Et verb som mangler subjekt, og som derfor ikke kan analyseres som et selvstendig ledd i setningen"],
      explanation: "«Måkt» i «Vaktmesteren hadde måkt fortauet» er perfektum partisipp og dermed infinitt verbal. Fella er å bytte om de to: det er «hadde» som bærer tiden og er finitt. Plasseringen i setningen avgjør ikke — det infinitte verbalet kan stå langt fra det finitte.",
    },
    {
      question: "Hvilken test avgjør at et ledd er direkte objekt?",
      options: ["Passiveringstesten: leddet blir subjekt når setningen gjøres om til passiv", "Flyttetesten: leddet kan flyttes fritt til en annen plass i setningen uten at setningen blir ugrammatisk", "Predikativtesten: leddet sier noe om subjektet gjennom et kopulaverb", "Samsvarstesten: leddet kan byttes mot et pronomen i subjektsform uten at setningen forandrer betydning"],
      explanation: "«Vaktmesteren måkte fortauet» blir «Fortauet ble måkt», og leddet havner på subjektsplassen. Den nære fella er flyttetesten, som peker på adverbialer: et adverbial kan flyttes fritt, mens objektet er bundet. Samsvarstesten hører til subjektet.",
    },
    {
      question: "Hva kjennetegner et indirekte objekt?",
      options: ["Det betegner mottakeren og står foran det direkte objektet når begge er til stede", "Det står alltid sist i setningen, siden mottakeren nevnes til slutt i norsk ordstilling", "Det kan ikke skrives om til en preposisjonsfrase, i motsetning til det direkte objektet", "Det kan bare forekomme i passive setninger, der handlingen rettes mot en bestemt mottaker"],
      explanation: "I «Kollegaen ga kundene feil beskjed» står mottakeren først, og leddet kan skrives om til «til kundene». Fella er å bytte om rekkefølgen på de to objektene, som er nettopp det trekkregnskapet straffer to ganger. Omskrivingsprøven er den raskeste kontrollen.",
    },
    {
      question: "Hva er et subjektspredikativ?",
      options: ["Et ledd som sier noe om subjektet, knyttet til det gjennom et kopulaverb som «være» eller «bli»", "Et ledd som handlingen går ut over", "Et ledd som sier noe om tid eller sted", "Et ledd som kan strykes fritt"],
      explanation: "I «Den nye kollegaen ble avdelingsleder» viser leddet til det samme som subjektet. Den nære fella er direkte objekt, som betegner noe annet enn subjektet og lar seg passivere. Kopulaverbet er det sikreste signalet på at du har et predikativ foran deg.",
    },
    {
      question: "Hvorfor er innholdsregelen «subjektet er den som gjør noe» utilstrekkelig?",
      options: ["Fordi den bommer på passivsetninger, på ekspletive subjekter og på setninger med kopulaverb", "Fordi den bare gjelder i skriftspråket, mens subjektet i muntlig norsk kan stå på helt andre plasser i setningen", "Fordi subjektet i norsk alltid står først i setningen, slik at plasseringen alene er nok til å avgjøre saken", "Fordi den forutsetter at setningen har et objekt"],
      explanation: "I «Kollegaen fikk kjeft» gjør ikke subjektet noe, og i «Det regnet hele natta» finnes det ingen handlende i det hele tatt. Fella er å tro at subjektet alltid står først — det gjør det ikke når setningen åpner med et adverbial. Bruk plassering ved spørsmål og pronomenerstatning i stedet.",
    },
    {
      question: "Hva er et ekspletivt subjekt?",
      options: ["Et subjekt uten eget innhold, som «det» i «Det kom en pakke i posten»", "Et subjekt som er utelatt fra setningen, men som kan settes inn igjen når analysen skal skrives ut", "Et subjekt som består av en hel leddsetning i stedet for av en vanlig nominalfrase med substantiv", "Et subjekt som står etter verbalet fordi et adverbial står først"],
      explanation: "Leddet merkes som SUBJEKT selv om det ikke betegner noen, og plasseringstesten viser det: «Kom det en pakke i posten?» Fella er å peke på «en pakke», som riktignok er den som kom, men som ikke havner på subjektsplassen. Innholdsbaserte huskeregler bommer nettopp her.",
    },
    {
      question: "Hva sier trekkregelen i setningsleddanalysen i H2025-8?",
      options: ["Trekket er 0,5 poeng per feilanalysert setningsledd", "Trekket er 0,5 for hver setning som er analysert med feil, uansett hvor mange ledd som er feilmerket i den", "Trekket gis bare for ledd som står helt umerket", "Trekket beregnes ut fra hvor stor andel av leddene som er riktig merket, og rundes av til nærmeste halve poeng"],
      explanation: "Regnestykket er verdt å gjøre mens du skriver: en setning med seks ledd der du bommer på to, koster 1,0 poeng. Fella er å tro at et umerket ledd er tryggere enn et merket du er i tvil om — et umerket ledd teller like fullt. Skriv derfor heller merkingen pluss en linjes begrunnelse.",
    },
    {
      question: "Hva er den vanligste feilen når et verbal skal merkes?",
      options: ["At det infinitte verbalet blir stående umerket fordi det står langt fra det finitte", "At hjelpeverbet utelates fra analysen fordi det ikke bærer noe eget innhold i setningen", "At verbalet merkes som en nominalfrase fordi det står rett etter subjektet i den setningen", "At verbalet deles i to ledd selv når setningen bare inneholder ett eneste tidsbøyd verb"],
      explanation: "Står det et adverbial eller et langt subjekt mellom hjelpeverbet og hovedverbet, glipper hovedverbet lett. Motgiften er å telle verbformene før du merker noe som helst. Et umerket ledd koster like mye som et feilmerket, med et trekk på 0,5 per feilanalysert setningsledd.",
    },
    {
      question: "Hvordan skiller du et adverbial fra et direkte objekt når begge er nominalfraser?",
      options: ["Ved passiveringstesten: bare objektet kan bli subjekt i en passiv setning", "Ved å se hvilket ledd som står nærmest verbalet", "Ved å telle ordene i leddet, siden adverbialer i norsk som regel er lengre enn objektene i samme setning", "Ved å se om leddet inneholder et determinativ, som bare objekter kan ha foran hodet sitt i frasen"],
      explanation: "«Snekkeren jobbet hele helga» tåler ikke passivering, mens «Snekkeren reparerte taket» blir «Taket ble reparert». Fella er å bruke plasseringen: adverbialer kan stå rett etter verbalet de også. Flyttetesten er en nyttig tilleggsprøve, siden adverbialet flytter fritt.",
    },
    {
      question: "Hva viser pronomenerstatningstesten?",
      options: ["At leddet er et objekt, siden det kan byttes mot et pronomen i objektsform", "At leddet er et subjekt, siden bare subjekter kan byttes mot pronomen i norsk analyse", "At leddet er en nominalfrase, men ikke noe om hvilken funksjon frasen har i setningen", "At leddet er obligatorisk i setningen, siden pronomen bare kan erstatte ledd som ikke kan strykes"],
      explanation: "«Kollegaen ringte de misfornøyde kundene» blir «Kollegaen ringte dem», og objektsformen avslører funksjonen. Den nære fella er å tro at testen bare sier noe om formen: erstatningsordets kasusform sier også noe om rollen. Er du i tvil mellom objekt og adverbial, bruk passivering i tillegg.",
    },
    {
      question: "Hva slags verb er «bli» i «Den nye kollegaen ble avdelingsleder»?",
      options: ["Et kopulaverb, som knytter subjektet til et predikativ uten å betegne noen handling", "Et handlingsverb med objekt", "Et hjelpeverb uten eget innhold", "Et infinitt verbal"],
      explanation: "Kopulaverbet betegner ingen handling, men krever et predikativ ved siden av seg for at setningen skal være fullstendig. Fella er å lese leddet etter verbet som objekt: her viser leddet til det samme som subjektet, og passiveringstesten mislykkes. «Ble» er dessuten tidsbøyd og dermed finitt verbal.",
    },
    {
      question: "Hvilket ledd merkes ordet «ikke» som?",
      options: ["ADVERBIAL, siden nektingen sier noe om hele setningen", "SUBJEKTSPREDIKATIV, siden det sier noe om forholdet mellom subjektet og resten av setningen", "En egen kategori utenfor leddanalysen", "INFINITT VERBAL, siden nektingen hører sammen med verbet den står ved siden av i setningen"],
      explanation: "Nektingsadverbialet er et adverbial med en fast plass: i en fortellende helsetning står det etter det finitte verbalet. Fella er å la det stå umerket fordi det er et lite ord — umerkede ledd trekker like mye som feilmerkede. Plassen ordet har, brukes senere i setningsanalysen.",
    },
    {
      question: "Hva betyr det at en merking skal være fullstendig?",
      options: ["At hvert eneste ledd er merket med funksjon, også de du er usikker på", "At hvert ord i setningen får sin egen merkelapp, inkludert småord inne i frasene", "At merkingen følger et bestemt oppsett med tabell, slik at sensor kan lese den raskt", "At alle leddene er merket med både funksjon, frasekategori, ordklasse og semantisk rolle"],
      explanation: "Et umerket ledd teller som feilanalysert, så det lønner seg å skrive en merking du er i tvil om, med en linjes begrunnelse. Fella er å tro at kravet gjelder hvert enkelt ord: analysen gjøres på helsetningsnivå, altså på leddene. Oppsettet er fritt så lenge analysen er forståelig.",
    },
    {
      question: "Hva er første trinn i helsetningsanalysen?",
      options: ["Å finne det finitte verbalet ved å skifte tid på setningen og se hvilket verb som forandrer seg", "Å finne subjektet", "Å merke frasekategoriene", "Å dele setningen ved kommaene"],
      explanation: "Verbalet bestemmer hvor mange og hvilke andre ledd setningen kan ha, og derfor kommer det først. Fella er å begynne med subjektet, som er trinn to og ofte lettere å finne når verbalet allerede er identifisert. Kommaer er ikke et grunnlag for noen del av analysen.",
    },
    {
      question: "Hvordan merkes et ledd fullstendig i denne bokas etikettsett?",
      options: ["Funksjonen i versaler med frasekategorien i parentes bak, som i SUBJEKT (NP)", "Frasekategorien først og funksjonen etterpå", "Bare med funksjonen, siden frasekategorien er underforstått av hvilken funksjon leddet har", "Med ordklassen til hodet i leddet, siden det er hodet som bestemmer hva leddet kan brukes til"],
      explanation: "De to lagene skal begge fram: rollen i versaler og formen i parentes. Fella er å nøye seg med funksjonen — da mangler det laget som viser at du kan holde form og funksjon fra hverandre. Ordklassen hører til det nederste laget og gjelder enkeltord.",
    },
    {
      question: "Hva svarer du hvis oppgaven spør hvilken funksjon «verkstedet» har i «De to lærlingene hadde ryddet verkstedet»?",
      options: ["DIREKTE OBJEKT, avgjort med passiveringstesten", "Substantiv, siden ordet bøyes i tall og bestemthet slik substantiver gjør i norsk", "Nominalfrase, siden gruppa er bygget opp rundt et substantiv som hode i frasen", "Verbal, siden leddet står etter verbet"],
      explanation: "Passiveringstesten avgjør: «Verkstedet hadde blitt ryddet». Den nære fella er å svare med ordklasse eller frasekategori — begge er sanne om leddet og svarer på et annet spørsmål enn det oppgaven stilte. Prøven er om svaret ditt ville vært det samme i en helt annen setning.",
    },
    {
      question: "Hva er den typiske frasekategorien for et subjekt?",
      options: ["Nominalfrase, som er formen både subjektet og objektene oftest har", "Preposisjonsfrase, siden subjektet ofte innledes av en preposisjon i skriftlig norsk", "Adjektivfrase, siden subjektet som regel beskriver en egenskap ved det setningen handler om", "Adverbfrase, siden subjektet ofte angir tid eller sted"],
      explanation: "Subjektet og de to objektene er nesten alltid nominalfraser, og sammenhengen er nyttig som kontroll av egen merking. Fella er å behandle sammenhengen som en regel: et subjekt kan også være en hel leddsetning. Bruk den til å oppdage feil, ikke til å erstatte testene.",
    },
    {
      question: "Hvorfor er skillet mellom finitt og infinitt verbal viktig utover selve merkingen?",
      options: ["Fordi plasseringen av det finitte verbalet er grunnlaget for setningsanalysen i det neste steget", "Fordi bare det infinitte verbalet kan ha objekt, mens det finitte aldri kan ta noen ledd ved siden av seg", "Fordi det finitte verbalet alltid er et hjelpeverb, og hjelpeverb behandles for seg i alle analyser", "Fordi et infinitt verbal gjør setningen til en leddsetning, uansett hvor i teksten setningen står"],
      explanation: "Det finitte verbalets plass er selve holdepunktet når setningen skal analyseres videre. Fella er å tro at det finitte verbalet alltid er et hjelpeverb: i «Kollegaen ringer kundene» er det eneste verbet finitt og bærer hele innholdet. Et infinitt verbal gjør heller ingen setning til leddsetning.",
    },
    {
      question: "Hva viser plasseringstesten?",
      options: ["Hvilket ledd som havner rett etter det finitte verbalet når setningen gjøres om til ja-nei-spørsmål, altså subjektet", "Hvor i setningen adverbialene kan stå", "Hvilket ledd som er obligatorisk", "Hvilken frasekategori leddet har"],
      explanation: "«Måkte vaktmesteren fortauet?» viser at «vaktmesteren» er subjekt, og testen er særlig nyttig i lange setninger. Den nære fella er adverbialtesten, som prøver fri flytting og peker på noe annet. Frasekategorien avgjøres av hodet, ikke av plasseringen.",
    },
    {
      question: "Hva er forskjellen på ordklassen verb og setningsleddet verbal?",
      options: ["Verb er hva ordet er, mens verbal er den rollen ordet har i en bestemt setning", "Verb brukes om hovedverb, mens verbal dekker hjelpeverbene", "Verb er en term fra morfologien, mens verbal bare brukes når setningen inneholder flere verbformer", "Verb er den infinitte formen, mens verbal alltid viser til den tidsbøyde formen av det samme ordet"],
      explanation: "Alle verbaler består av verb, men et verb kan også stå inne i andre ledd uten å være verbal. Fella er å knytte skillet til finitthet: både den finitte og den infinitte delen av verbalet består av verb. Prøven er den samme som ellers — er svaret avhengig av setningen, er det en funksjon.",
    },
    {
      question: "Hvilken merking får leddet «grundig» i «Lærlingene hadde ryddet verkstedet grundig»?",
      options: ["ADVERBIAL (AdvP), siden leddet sier noe om måten hendelsen foregikk på", "DIREKTE OBJEKT (NP), siden leddet står etter verbalet og sier noe om hvordan ryddingen ble utført", "SUBJEKTSPREDIKATIV (AdjP), siden leddet beskriver subjektet", "INFINITT VERBAL (V), siden leddet hører sammen med det verbet som bærer handlingen i setningen"],
      explanation: "Leddet sier noe om måten hendelsen foregikk på, og det kan flyttes: «Grundig hadde lærlingene ryddet verkstedet». Fella er predikativ, som krever et kopulaverb og viser til subjektet. Hodet er et adverb, og frasekategorien følger av hodet.",
    },
    {
      question: "Hva bør du gjøre med et ledd du er usikker på i en leddanalyse?",
      options: ["Merke det med den analysen du finner mest sannsynlig, og legge til én linje som viser tvilen", "La leddet stå umerket, slik at sensor ser at du ikke har gjettet på noe du er usikker på", "Merke leddet med to funksjoner samtidig, slik at minst én av dem må være den riktige", "Utelate leddet fra analysen og heller forklare i en note at setningen var uklart formulert"],
      explanation: "Et umerket ledd teller som feilanalysert med et trekk på 0,5 per feilanalysert setningsledd, mens en begrunnet merking både kan treffe og vise at du kjenner tvilen. Fella er forsiktighet som ser ryddig ut og koster poeng. Dobbeltmerking uten begrunnelse leser sensor som en gjetning.",
    },
    {
      question: "Hva sier det at et ledd kan flyttes helt fremst i setningen uten at setningen blir ugrammatisk?",
      options: ["At leddet sannsynligvis er et adverbial, siden adverbialer er frie tilføyelser", "At leddet er subjektet, siden subjektet alltid kan stå først i en fortellende setning på norsk", "At leddet er en nominalfrase, siden bare nominalfraser lar seg flytte samlet i norske setninger", "At setningen har mer enn ett finitt verbal, siden bare slike setninger tåler at ledd flyttes rundt"],
      explanation: "Fri flytting er adverbialtestens kjennetegn, og adverbialet kan som regel også strykes. Fella er å konkludere med subjekt: subjektet kan riktignok stå først, men det er ikke fritt flyttbart på samme måte. Frasekategori og antall verbaler avgjøres av helt andre prøver.",
    },
  ],
  'exfac03-spr-5-3': [
    {
      question: "Hvordan finner du ut hvor mange setninger en lang setning består av?",
      options: ["Du teller de finitte verbalene, siden ett tidsbøyd verb svarer til én setning", "Du teller kommaene", "Du teller subjunksjonalene", "Du teller nominalfrasene"],
      explanation: "Tidsbøyde verb er det eneste pålitelige grunnlaget: «Kommunen vedtok at biblioteket skulle holde åpent» har to finitte verbal og ingen kommaer. Den nære fella er tegnsettingen, som både kan mangle foran en leddsetning og stå inne i én enkelt setning ved oppramsing. Infinitiver og partisipper skal krysses ut før du teller.",
    },
    {
      question: "Hva skiller en leddsetning fra en helsetning?",
      options: ["Leddsetningen fyller en leddfunksjon inne i en annen setning og kan ikke stå alene", "Leddsetningen mangler eget finitt verbal, mens helsetningen alltid har et tidsbøyd verb i seg", "Leddsetningen er alltid kortere enn helsetningen", "Leddsetningen står alltid etter helsetningen, siden den utdyper det som allerede er sagt"],
      explanation: "Begge har eget finitt verbal; forskjellen er selvstendigheten. «At bussen kom for sent» kan ikke stå alene som ytring, mens «Bussen kom for sent» kan det. Fella er å tro at leddsetningen mangler tidsbøyd verb — det er infinitivssetningen som gjør det.",
    },
    {
      question: "Hva er en subjunksjonal?",
      options: ["Etiketten for koblingsordet først i en leddsetning, som «at», «hvis» eller «som»", "Ordklassen som «at», «om» og «fordi» tilhører", "Et ledd som fyller subjektsfunksjonen i en leddsetning når det egentlige subjektet er utelatt", "Et bindeord som sideordner to setninger, slik at ingen av dem blir et ledd inne i den andre"],
      explanation: "Subjunksjonal er en funksjonsetikett i analysen og får en egen linje i treet fordi den ikke fyller noen av de vanlige leddfunksjonene. Den nære fella er ordklassen subjunksjon: samme skille som mellom verb og verbal. Sideordning er konjunksjonenes jobb.",
    },
    {
      question: "Hvilken funksjon fyller leddsetningen i «Kommunen vedtok at biblioteket skulle holde åpent»?",
      options: ["DIREKTE OBJEKT, siden hele leddsetningen kan byttes mot «det»", "ADVERBIAL, siden leddsetningen sier når vedtaket ble fattet", "SUBJEKT, siden leddsetningen inneholder det som setningen egentlig handler om og bærer innholdet", "SUBJEKTSPREDIKATIV, siden leddsetningen sier noe om subjektet «kommunen» gjennom verbet «vedtok»"],
      explanation: "Pronomentesten avgjør: «Kommunen vedtok det». Den nære fella er adverbial, men adverbialsetningen kan flyttes fritt og strykes, og det kan ikke denne — «Kommunen vedtok» alene henger i lufta. Predikativ krever dessuten et kopulaverb.",
    },
    {
      question: "Hvor hører en relativsetning i subjektet hjemme i strukturen?",
      options: ["Inne i subjektets nominalfrase, som en utfylling til det ordet den beskriver", "Rett under helsetningen, som et selvstendig ledd ved siden av subjektet i analysen", "Under verbalet, siden relativsetningen har sitt eget tidsbøyde verb og dermed hører til verbaldelen", "Utenfor treet, siden relativsetninger er tilleggsopplysninger som ikke inngår i selve setningsstrukturen"],
      explanation: "Erstatningstesten avgjør: hele gruppa, relativsetningen inkludert, kan byttes mot «hun». Den nære fella er å hekte den rett på helsetningen, som er den vanligste kilden til feil tilhekting — da påstår analysen at setningen har et ledd den ikke har.",
    },
    {
      question: "Hva er korrelatet til en relativsetning?",
      options: ["Det ordet relativsetningen beskriver, altså det «som» viser tilbake til", "Subjunksjonalen «som», altså selve koblingsordet", "Det finitte verbalet i relativsetningen, som knytter den til verbalet i oversetningen", "Den funksjonen relativsetningen fyller i oversetningen, som regel subjekt eller objekt"],
      explanation: "I «studenten som hadde jobbet gjennom natta» er korrelatet «studenten», og det står utenfor relativsetningen. Fella er å blande korrelatet med subjunksjonalen: «som» står inne i leddsetningen, mens korrelatet står i oversetningen. Å finne korrelatet er den raskeste veien til riktig tilhekting.",
    },
    {
      question: "Hvilken leddsetningstype teller ikke når du teller finitte verbal?",
      options: ["Infinitivssetningen, siden den har infinitiv og ikke noe tidsbøyd verb", "Relativsetningen, siden den bare er en utfylling i en frase", "Betingelsessetningen, siden den beskriver noe som ikke har skjedd og derfor ikke har egen tid", "Spørresetningen, siden ordstillingen der følger spørsmålets mønster og ikke setningens vanlige"],
      explanation: "«Å måke taket før nyttår» har ingen tidsbøyd form og teller derfor ikke, men den fyller likevel en leddfunksjon og skal merkes. Fella er relativsetningen: den har et helt vanlig finitt verbal og teller fullt ut, selv om den er en utfylling.",
    },
    {
      question: "Hva er innleiring?",
      options: ["At en setning er plassert inne i en annen setning og fyller et ledd der", "At to setninger bindes sammen med «og» eller «men»", "At et ledd flyttes fra sin vanlige plass til begynnelsen av setningen for å framheve det", "At en setning gjentar innholdet i den forrige med andre ord for å gjøre framstillingen tydeligere"],
      explanation: "«Hun ventet til bussen kom» har innleiring, mens «Hun ventet, og bussen kom» har sideordning. Den nære fella er nettopp sideordning, der ingen av setningene blir ledd i den andre. Innleiring er grunnen til at norske setninger kan bli vilkårlig lange.",
    },
    {
      question: "Hvilken funksjon har en betingelsessetning som regel?",
      options: ["ADVERBIAL, siden den sier under hvilken betingelse resten av setningen gjelder", "DIREKTE OBJEKT, siden den forteller hva handlingen i oversetningen faktisk går ut over", "SUBJEKT, siden betingelsen utløser hendelsen", "SUBJUNKSJONAL, siden den innledes av «hvis» og dermed hører til koblingsordene i analysen"],
      explanation: "«Hvis snøen kommer tidlig» kan stå både først og sist i oversetningen og kan strykes — det er adverbialtestens kjennetegn. Fella er å blande sammen leddsetningen med det ordet som innleder den: «hvis» er subjunksjonalen, mens hele setningen er adverbialet.",
    },
    {
      question: "Hva er en at-setning?",
      options: ["En leddsetning innledet av «at», som oftest fyller subjekt eller direkte objekt", "En leddsetning som innledes av et spørreord og gjengir et spørsmål i indirekte form", "En setning der subjektet er utelatt fordi det er kjent fra sammenhengen i teksten rundt", "En helsetning som er skjøvet inn i en annen helsetning uten å endre funksjon i den"],
      explanation: "At-setningen oppfører seg som en nominalfrase og lar seg bytte mot «det». Den nære fella er spørresetningen, som innledes av «om» eller et spørreord og gjengir et spørsmål. En innleiret setning er dessuten ikke lenger en helsetning.",
    },
    {
      question: "Hvordan kjenner du igjen et innleiret spørsmål?",
      options: ["På at det innledes av «om» eller et spørreord og har leddsetningens ordstilling, ikke spørsmålets", "På at setningen slutter med spørsmålstegn selv om den står inne i en større setning", "På at verbalet står først i setningen, slik det gjør i et vanlig spørsmål på norsk", "På at subjektet er utelatt, siden den som spør, allerede er nevnt i oversetningen"],
      explanation: "«Hun spurte om vi hadde sett postkassen» har leddsetningsordstilling: «om vi hadde sett», ikke «om hadde vi sett». Fella er å lete etter spørsmålsordstilling — det er nettopp den som forsvinner når spørsmålet innleires. Tegnsettingen følger oversetningen.",
    },
    {
      question: "Hva er den vanligste halvferdige merkingen av en leddsetning?",
      options: ["Å skrive «leddsetning» og la funksjonen den fyller i oversetningen, stå igjen umerket", "Å skrive funksjonen uten å oppgi hvilken type leddsetning det dreier seg om i det enkelte tilfellet", "Å merke subjunksjonalen som et eget setningsledd i stedet for å gi den sin egen linje i treet", "Å tegne leddsetningen på samme innrykk som resten av leddene i den setningen den ligger inne i"],
      explanation: "Etiketten «leddsetning» sier bare hva slags størrelse det er, mens oppgaven vil vite hvilken rolle den har. Skriv derfor begge: DIREKTE OBJEKT realisert av en leddsetning. Typen er en nyttig tilleggsopplysning, men den erstatter ikke funksjonen.",
    },
    {
      question: "Hva er en oversetning?",
      options: ["Den setningen en leddsetning ligger inne i og fyller et ledd i", "Den ytterste helsetningen i en periode, uansett hvor mange nivåer av innleiring som finnes under den", "En setning som er oversatt fra et annet språk", "Den setningen som står først i en periode, og som de andre setningene knytter seg til med bindeord"],
      explanation: "Begrepet er relativt: en leddsetning kan selv være oversetning for en ny leddsetning inne i seg. Den nære fella er å gjøre oversetning til et annet ord for helsetning — helsetningen er bare den ytterste oversetningen. Nivået avgjøres av hvem som er nærmeste vert.",
    },
    {
      question: "Hvorfor betyr det noe hvor en betingelsessetning hektes?",
      options: ["Fordi tilhektingen avgjør hva betingelsen gjelder, og dermed hva setningen påstår", "Fordi en betingelsessetning må stå på det innerste nivået i treet for at analysen skal være korrekt", "Fordi tilhektingen bestemmer hvilken ordklasse subjunksjonalen får i den ferdige analysen", "Fordi betingelsessetninger alltid hektes på helsetningen, uansett hvor de står i den skrevne teksten"],
      explanation: "I «Trenerne bestemte at kampen skulle flyttes hvis banen var frossen» er det flyttingen som er betinget, ikke bestemmelsen. Hektet du setningen på helsetningen, ville analysen sagt noe annet om verden. Tilhekting er altså en påstand om betydning, ikke en tegnedetalj.",
    },
    {
      question: "Hva viser innrykket i et analysetre?",
      options: ["Hvilket innleiringsnivå hvert ledd og hver leddsetning ligger på", "Rekkefølgen ordene har i setningen, lest ovenfra og ned", "Hvor viktig hvert ledd er for setningens innhold, med de viktigste leddene lengst til venstre", "Hvilken ordklasse hvert ord tilhører, siden ordklassene alltid står nederst i en slik framstilling"],
      explanation: "Innrykket bærer strukturen: det viser hva som ligger inne i hva, og derfor må det være konsekvent. Fella er å lese treet som en lineær gjengivelse av setningen — rekkefølgen er der, men det er nivåene som er poenget. Ordklassene står nederst, men det er innrykket som plasserer dem.",
    },
    {
      question: "Hva slags ledd er «som» i en relativsetning?",
      options: ["SUBJUNKSJONAL, og ofte dekker det i tillegg subjektsfunksjonen inne i relativsetningen", "SUBJEKT, siden det alltid er «som» som utfører handlingen i relativsetningen", "DIREKTE OBJEKT, siden det viser tilbake til noe som allerede er nevnt i oversetningen", "ADVERBIAL, siden det knytter relativsetningen til resten av setningen den står i"],
      explanation: "«Som» merkes SUBJUNKSJONAL og står alltid først i relativsetningen. I «studenten som sovnet» er det i tillegg «som» som er den som sovner, og derfor har relativsetningen ingen egen subjektslinje. Fella er å låse ordet til én funksjon: det kan også svare til objektet, som i «boka som hun leste».",
    },
    {
      question: "Hva er sideordning?",
      options: ["At to likeverdige størrelser bindes sammen med «og», «eller» eller «men», uten at den ene blir ledd i den andre", "At en setning legges inn i en annen på samme nivå som de øvrige leddene i den setningen", "At to setninger står etter hverandre uten bindeord, men med komma mellom seg i teksten", "At et ledd gjentas i en annen form senere i setningen for å gjøre innholdet tydeligere"],
      explanation: "«Hun ventet, og bussen kom» er sideordning, mens «hun ventet fordi bussen kom» er underordning. Fella er å regne enhver sammensatt setning som innleiring. Prøven er om det som følger bindeordet, blir et ledd i den andre setningen.",
    },
    {
      question: "Hva bør du gjøre først når du får en setning med flere leddsetninger?",
      options: ["Skrive opp alle verbformene og krysse ut infinitivene og partisippene", "Tegne treet med en gang og justere det underveis", "Finne subjektet i helsetningen, siden det er der analysen alltid starter i denne typen oppgaver", "Sette komma der du mener setningsgrensene går, og bruke dem som utgangspunkt for tegningen"],
      explanation: "Tellingen av tidsbøyde verb er grunnlaget for alt annet, og den tar ti sekunder. Fella er å begynne å tegne før du vet hvor mange setninger du har. Kommaer er et uegnet grunnlag, siden de både kan mangle og stå inne i én setning.",
    },
    {
      question: "Hva kan gi uttelling når en leddsetning kan hektes på to steder?",
      options: ["Å skrive ut begge lesningene og begrunne valget med flytting og erstatning", "Å velge den lesningen som gir det enkleste treet, siden en enkel struktur er lettere å lese for sensor", "Å merke leddsetningen med begge funksjonene samtidig, slik at minst én av dem er den riktige", "Å utelate leddsetningen fra treet og i stedet forklare tvilen i en note under analysen"],
      explanation: "En avvikende tilhekting kan telle positivt når kandidaten argumenterer for den med erstatning og flytting. Fella er dobbeltmerking uten begrunnelse, som leses som en gjetning. Enkelhet er ikke et argument i seg selv — det er testene som er argumentet.",
    },
    {
      question: "Hvilken funksjon fyller leddsetningen i «At biblioteket holdt stengt om søndagene, plaget mange studenter»?",
      options: ["SUBJEKT, siden hele leddsetningen kan byttes mot «det» foran verbalet", "DIREKTE OBJEKT, siden leddsetningen står foran verbalet og forteller hva som ble plaget i situasjonen", "ADVERBIAL, siden leddsetningen sier når studentene ble plaget", "SUBJUNKSJONAL, siden leddsetningen innledes av «at» og dermed knytter seg til resten av setningen"],
      explanation: "Erstatningstesten gir «Det plaget mange studenter», og plasseringstesten bekrefter: «Plaget det mange studenter?» Fella er å anta at en at-setning alltid er objekt — den kan fylle begge rollene, og det er testen som avgjør hvilken.",
    },
  ],
  'exfac03-spr-5-4': [
    {
      question: "Hva står i parentesen rett bak funksjonsetiketten i bokas analysetrær?",
      options: ["Frasekategorien, altså hva slags frase leddet er — NP, VP, AdjP, AdvP eller PP", "Ordklassen til hodet i frasen, ført opp der slik at sensor ser hvilket ord frasen er bygget rundt", "Innleiringsnivået, talt fra helsetningen og nedover gjennom hver leddsetning i treet", "Den funksjonen leddet ville hatt hvis setningen ble gjort om til passiv"],
      explanation: "Parentesen bærer frasekategorien: NP, VP, AdjP, AdvP eller PP. Ordklassen er et eget lag nederst i treet og gjelder enkeltord, ikke gruppen. Innleiringsnivået leses av innrykket og skrives ikke som etikett.",
    },
    {
      question: "Hvorfor regnes det som et feilanalysert ledd å skrive NP der SUBJEKT skulle stått?",
      options: ["Fordi NP sier hva leddet er, mens oppgaven spør hva leddet gjør — funksjon og kategori er to ulike lag", "Fordi forkortelser aldri er tillatt i et analysetre, og alle kategorinavn skal skrives fullt ut med små bokstaver", "Fordi NP hører hjemme nederst i treet, sammen med ordklassene til de enkelte ordene", "Fordi et subjekt aldri kan være en nominalfrase, og etiketten derfor er faglig gal"],
      explanation: "Funksjon og frasekategori er to forskjellige lag: funksjonen er jobben leddet har i setningen, kategorien er hva slags frase det er. Et subjekt er som regel nettopp en nominalfrase, så etiketten er ikke faglig gal — den svarer bare på et annet spørsmål enn det oppgaven stilte.",
    },
    {
      question: "Hvordan finner du ut hvor mange setninger et tre skal inneholde?",
      options: ["Ved å telle de finitte verbalene, altså de tidsbærende verbformene, siden hver setning har nøyaktig ett slikt verbal", "Ved å telle kommaene, siden hver leddsetning i norsk skilles ut med komma i skriftbildet", "Ved å telle subjunksjonalene, siden hver setning innledes av et eget innledningsord", "Ved å telle nominalfrasene og trekke fra antall preposisjonsfraser"],
      explanation: "Hver setning har nøyaktig ett finitt verbal, så antallet tidsbærende verbformer er antallet setninger. Kommatellingen er den vanligste fellen: kommaene følger tegnsettingsregler og ikke setningsgrenser. Infinitivssetninger har heller ikke noe finitt verbal, og det er nettopp derfor de må behandles for seg.",
    },
    {
      question: "Hva betyr det at en leddsetning skal bære to etiketter?",
      options: ["At den merkes både med funksjonen den fyller i setningen over, og med strukturetiketten leddsetning under", "At den merkes både med frasekategorien sin og med ordklassen til subjunksjonalen som innleder den", "At den får både en funksjonsetikett og et nivåtall som viser hvor dypt inne i treet den ligger", "At den skrives både i innrykket form og i klammenotasjon, slik at nivåene blir entydige"],
      explanation: "Funksjonsetiketten står på linja over, og strukturetiketten leddsetning står under den. Skriver du bare leddsetning, har du fortalt noe som allerede var synlig og latt være å svare på hva setningen gjør i oversetningen — og det regnes som et feilanalysert ledd.",
    },
    {
      question: "Hva er trekket i treoppgaven i H2025?",
      options: ["0,5 poeng per feilanalysert setningsledd, uansett hvor mange ledd treet har til sammen", "0,5 poeng for hvert ord uten ordklasse i det nederste laget", "1 poeng for hvert nivå av innleiring som er hektet på feil sted i treet", "2 poeng per setning som er analysert feil, uten delpoeng"],
      explanation: "H2025 er den eneste terminen som oppgir trekk, og den oppgir 0,5 per feilanalysert setningsledd. Fordi trekket regnes per ledd og ikke per tre, smitter ikke ett galt ledd over på resten av analysen.",
    },
    {
      question: "Hva sier H2025 om trær som ikke er feilfrie?",
      options: ["At et tre som er nær korrekt, får full uttelling", "At et tre med feil vurderes samlet, slik at ett galt ledd senker vurderingen av hele analysen med ett trinn", "At bare feil i funksjonslaget teller, mens feil i ordklasselaget er uten betydning for uttellingen", "At kandidaten må levere to alternative trær for å få full uttelling"],
      explanation: "Veiledningen sier at perfekte analysetrær er sjeldne, og at et nær korrekt tre får full uttelling. Det er nettopp fordi trekket regnes per ledd at analysen ikke vurderes som en helhet som står og faller med ett ledd.",
    },
    {
      question: "Hva sier H2018 om en tilhekting som avviker fra den nærliggende analysen?",
      options: ["At den kan telle som et pluss når kandidaten argumenterer for valget med erstatning og flytting", "At den alltid trekker, siden bare én tilhekting kan være riktig i en gitt setning", "At den godtas uten kommentar, fordi tilhekting regnes som en smakssak i denne oppgavetypen", "At den må følges av et alternativt tre for at besvarelsen skal telle"],
      explanation: "Poenget er argumentet, ikke avviket i seg selv. En avvikende tilhekting uten kommentar er et feilanalysert ledd; den samme tilhektingen med to setninger om hvilken test du brukte og hva den ga, kan telle som et pluss.",
    },
    {
      question: "I hvor mange terminer står treoppgaven?",
      options: ["4 av 6 terminer, nemlig de fire som ber om et fullt analysetre", "6 av 6 terminer, like ofte som saksområdet syntaks", "3 av 6 terminer, like ofte som segmenteringsoppgaven", "2 av 6 terminer, nemlig de to som oppgir poengsetting"],
      explanation: "Treoppgaven står i 4 av 6 terminer. Saksområdet syntaks står riktignok i 6 av 6 terminer, men det er ikke det samme: en termin kan prøve syntaks uten å be om et tre, og nevneren for et saksområde er ikke nevneren for en oppgavetype.",
    },
    {
      question: "Hvor mye gir treoppgaven i H2025?",
      options: ["10 av 65 poeng", "5 av 49 poeng, som er det samme som trevarianten var verdt i den andre poengsatte terminen", "14 av 49 poeng, altså den tyngste enkeltoppgaven i det settet", "26 av 114 poeng, som er hele syntaksområdets vekt"],
      explanation: "I H2025 er treoppgaven den dyreste enkeltoppgaven i settet med 10 av 65 poeng. Trevarianten i H2022 var 5 av 49 poeng, og syntaksområdet samlet er 26 av 114 poeng — tre ulike tall som måler tre ulike ting.",
    },
    {
      question: "Hva er poenget med å bygge treet nedenfra og opp?",
      options: ["At du aldri går tom for plass, fordi du hele tiden vet hvor mange ord som gjenstår", "At treet da kan leses nedenfra og opp av sensor, som er den rekkefølgen modellsvaret bruker", "At du slipper å ta stilling til ordklassene, siden funksjonene bestemmer dem automatisk", "At antallet innleiringsnivåer da blir mindre enn i et tre bygget ovenfra og ned"],
      explanation: "Nedenfra og opp er en arbeidsmetode: du starter med ordklassene, samler fraser, gir funksjon og setter strukturetikettene til slutt. Det ferdige treet leses ovenfra og ned uansett hvordan det ble til — rekkefølgen gjelder byggingen, ikke lesningen.",
    },
    {
      question: "Hva viser erstatningstesten når den lykkes?",
      options: ["At den prøvde ordgruppen er én konstituent, altså at ordene henger sammen som én enhet i setningen", "At ordgruppen er et selvstendig ledd i helsetningen", "At ordgruppen kan flyttes til fronten av setningen uten at betydningen endrer seg", "At hodet i frasen er et substantiv og frasen dermed en nominalfrase"],
      explanation: "Erstatningstesten bytter hele den mistenkte klumpen mot ett ord, gjerne et pronomen. Går det, henger ordene sammen som én enhet. Flytting er en annen test med et annet formål: den viser om leddet står selvstendig i setningen.",
    },
    {
      question: "Hva viser flyttetesten når et ledd må ta med seg naboen sin til fronten?",
      options: ["At leddet hører til naboen og ikke er et selvstendig ledd i setningen", "At leddet er et adverbial, siden bare adverbialer kan flyttes fritt i en norsk helsetning", "At setningen har mer enn ett finitt verbal og derfor inneholder minst én innleiring", "At leddet er et direkte objekt, siden objektet alltid følger verbalet tett"],
      explanation: "Kan leddet ikke flyttes alene, hører det sammen med det som står ved siden av, og hekter inne i det. Testen sier ingenting om hvilken funksjon leddet har — den sier bare noe om hvor det hekter.",
    },
    {
      question: "Hva gjør ordet som i «Bussen som kjører forbi skolen» i bokas trær?",
      options: ["Det står som SUBJUNKSJONAL på egen linje inne i leddsetningen, slik apparatet i modellsvaret gjør", "Det står som SUBJEKT i helsetningen, siden det er bussen som utfører handlingen i begge setningene", "Det står som DIREKTE OBJEKT i leddsetningen, fordi det viser tilbake på substantivet foran", "Det står ikke i treet i det hele tatt, siden det ikke fyller noen funksjon"],
      explanation: "Boka merker innledningsordet i en leddsetning som SUBJUNKSJONAL på egen linje, slik apparatet i H2025s modellsvar gjør. Noen framstillinger fører i stedet opp som som subjekt i leddsetningen; begge deler er forsvarlige, men da må du si hvilken konvensjon du følger.",
    },
    {
      question: "Hva er forskjellen mellom to leddsetninger og to innleiringsnivåer?",
      options: ["To leddsetninger kan ligge side om side på samme nivå", "To leddsetninger krever alltid to subjunksjonaler, mens to nivåer kan klare seg med én subjunksjonal i hele treet", "To innleiringsnivåer betyr at setningen har minst tre finitte verbal, mens to leddsetninger bare krever to", "Det er ingen forskjell, siden hver leddsetning legger til ett nivå i treet"],
      explanation: "Nivået leses av veien fra helsetningen og ned. To leddsetninger som begge er ledd i helsetningen, ligger begge på første nivå. Nivåene teller du ved å følge én vei nedover, ikke ved å telle leddsetninger.",
    },
    {
      question: "Hva kjennetegner en infinitivssetning i treet?",
      options: ["Den har ingen finitt verbform inni seg", "Den har både et finitt og et infinitt verbal, men mangler subjunksjonal fordi infinitivsmerket ikke regnes som et eget ord", "Den kan bare fylle adverbialfunksjonen, aldri objektfunksjonen", "Den skrives uten strukturetikett, siden den ikke er en fullverdig setning"],
      explanation: "Infinitivssetningen innledes av infinitivsmerket å, som merkes SUBJUNKSJONAL, og inneholder et INFINITT VERBAL — men ingen tidsbærende verbform. Fraværet av et finitt verbal er svaret, ikke et hull i analysen din.",
    },
    {
      question: "Hva slags frase er «hvert år» i «at isbreen krympet hvert år», og hvilken funksjon har den?",
      options: ["En nominalfrase med adverbialfunksjon, siden hodet er substantivet år mens jobben i setningen er adverbialets", "En preposisjonsfrase med adverbialfunksjon", "En nominalfrase med funksjonen direkte objekt, siden den følger rett etter verbalet", "En adverbfrase, siden funksjonen bestemmer hvilken frasekategori leddet får"],
      explanation: "Frasen har substantivet år som hode og er derfor en nominalfrase, samtidig som den gjør adverbialjobben. At funksjon og kategori kan trekke i hver sin retning, er hele grunnen til at de står som to lag i treet.",
    },
    {
      question: "Hva skjer med treet når en preposisjonsfrase hekter inne i objektet i stedet for som adverbial?",
      options: ["Preposisjonsfrasen står innrykket under objektet i stedet for på samme nivå som det", "Preposisjonsfrasen bytter frasekategori fra PP til NP, siden den nå er en del av en nominalfrase", "Objektet mister funksjonsetiketten sin og merkes i stedet bare med frasekategorien", "Setningen får ett innleiringsnivå mer, siden preposisjonsfrasen nå ligger inne i et annet ledd"],
      explanation: "Ordrekkefølgen er den samme i begge trærne; det er innrykket som bærer forskjellen. Frasekategorien PP endrer seg ikke av hvor frasen hekter, og en preposisjonsfrase er ikke en leddsetning, så innleiringsnivået berøres ikke.",
    },
    {
      question: "Hvorfor står det ingen funksjonsetiketter inne i en frase i bokas trær?",
      options: ["Fordi funksjon er noe et ledd har i en setning, ikke inne i en frase", "Fordi funksjonsetiketter er forbeholdt de leddene som står direkte under helsetningen i treet", "Fordi delene av en frase alltid er enkeltord og derfor bare kan merkes med ordklasse", "Fordi frasekategorien allerede sier hvilken funksjon delene har"],
      explanation: "Inne i en frase merkes delene med frasekategorien i små bokstaver, eller med leddsetning når det er en hel setning som sitter der. Frasen kan godt inneholde flere ord og hele setninger — det er ikke lengden, men nivået, som avgjør hvilke etiketter som gjelder.",
    },
    {
      question: "Hva er den dyreste enkeltfeilen en kandidat kan gjøre i treoppgaven?",
      options: ["Å hoppe over oppgaven helt og levere et blankt felt", "Å hekte en betingelsessetning på feil nivå i et tre som ellers er riktig analysert hele veien", "Å skrive treet i klammenotasjon i stedet for som innrykket tekst", "Å bruke SUBJUNKSJONAL på infinitivsmerket å"],
      explanation: "Et blankt felt koster hele 10 av 65 poeng i H2025, mens en feil tilhekting koster 0,5 poeng. Klammenotasjon er en lovlig form, og infinitivsmerket skal nettopp merkes SUBJUNKSJONAL, så ingen av dem er feil i det hele tatt.",
    },
    {
      question: "Hva vet boka om hvordan analysetrær skal leveres på en digital eksamen?",
      options: ["Ingenting — leveranseformen står ikke i materialet", "At treet skal tegnes i et eget verktøy og limes inn som bilde i besvarelsen, slik IPA-tegnene limes inn", "At treet skal skrives i klammenotasjon, fordi innrykk ikke overlever i digitale tekstfelt", "At treet skal tegnes for hånd og fotograferes, slik modellsvaret er laget"],
      explanation: "H2025 er dokumentert digital, siden IPA-tegn limes inn fra et vedlagt dokument, men leveranseformen for trær står ingen steder. Boka kan derfor ikke gi en oppskrift, og rådet er å spørre emneansvarlig i god tid.",
    },
    {
      question: "Hva er forskjellen mellom et umerket og et feilmerket ledd?",
      options: ["Begge koster 0,5 poeng, men det feilmerkede leddet viser i det minste en vurdering sensor kan følge", "Det umerkede leddet koster ingenting, siden trekket bare gjelder analyserte ledd", "Det feilmerkede leddet koster dobbelt så mye som det umerkede, fordi det gir sensor et galt inntrykk", "Forskjellen gjelder bare ordklasselaget, der manglende merking regnes som en formfeil"],
      explanation: "Trekket er det samme, men et umerket ledd viser ingenting og fanges heller ikke opp av kontrollen din. Derfor er den mekaniske kontrollen — tell ordene i setningen, tell ordene i treet — det siste trinnet i prosedyren.",
    },
    {
      question: "Hva er formen på et tilhektingsargument som gir uttelling?",
      options: ["Navngi leddet, testen, hva testen ga, og lesningen du valgte", "Skriv at du er usikker på hvor leddet hekter, og at begge lesningene derfor kan forsvares i denne setningen", "Sett opp begge trærne uten kommentar og la sensor velge det som passer best", "Vis til at oppsettet er fritt så lenge nivåene er entydige"],
      explanation: "Argumentet skal være etterprøvbart: leddet, testen, resultatet og valget, i to til tre setninger under treet. En ren usikkerhetserklæring navngir verken test eller resultat og gir derfor ingenting, uansett hvor ærlig den er.",
    },
    {
      question: "Hva er de fire lagene i bokas trær, ovenfra og ned?",
      options: ["Struktur, funksjon, frasekategori, ordklasse", "Funksjon, struktur, ordklasse, frasekategori, i den rekkefølgen modellsvaret setter dem opp", "Helsetning, leddsetning, subjunksjonal, ordklasse", "Ordklasse, frase, ledd, setning"],
      explanation: "Strukturlaget sier om enheten er en helsetning eller en leddsetning, funksjonslaget hva leddet gjør, frasekategorien hva det er, og ordklasselaget hva hvert enkelt ord er. Helsetning, leddsetning og subjunksjonal er enkeltetiketter innenfor de to øverste lagene, ikke lag i seg selv.",
    },
    {
      question: "Hvilken etikett får «utenfor fare» i «pasienten var utenfor fare»?",
      options: ["SUBJEKTSPREDIKATIV (PP), fordi var er et koplingsverb", "ADVERBIAL (PP), siden en preposisjonsfrase etter verbalet som regel forteller hvor noe befinner seg", "DIREKTE OBJEKT (PP), siden leddet står rett etter det finitte verbalet", "SUBJEKTSPREDIKATIV (AdjP)"],
      explanation: "Koplingsverbet var binder subjektet til en tilstand, så funksjonen er subjektspredikativ, og frasen har preposisjonen utenfor som hode, altså PP. Her trekker funksjon og kategori i hver sin retning, og begge skal likevel stå.",
    },
  ],
  'exfac03-spr-5-5': [
    {
      question: "Hva er finittposisjonen?",
      options: ["Den andre plassen i en fortellende helsetning, der det finitte verbalet må stå", "Den plassen i skjemaet der et hvilket som helst verbal kan stå, enten det er finitt eller infinitt", "Den første plassen i setningen, som fylles av det leddet kandidaten velger å framheve", "Plassen rett bak subjektet, uansett hvor mange ledd som står foran"],
      explanation: "Finittposisjonen er den andre plassen, og den er forbeholdt den tidsbærende verbformen. Det infinitte verbalet blir stående lenger bak: i «Om kvelden har barna ikke lest boka» er det bare har som har flyttet.",
    },
    {
      question: "Hva er temaposisjonen?",
      options: ["Den første plassen i en fortellende helsetning, den som ett valgfritt ledd fyller", "Den plassen der subjektet alltid står", "Den plassen der setningsadverbialet står i en fortellende helsetning, altså rett bak det finitte verbalet", "En egen plass som bare finnes i setninger der noe er tematisert"],
      explanation: "Temaposisjonen er den første plassen, og den finnes i enhver fortellende helsetning — også når subjektet står der og ingenting er tematisert. Subjektet er det vanligste innholdet, men langt fra det eneste.",
    },
    {
      question: "Hvilken av de to flyttingene er obligatorisk?",
      options: ["Flyttingen av det finitte verbalet til finittposisjonen, altså til plass nummer to i setningen", "Flyttingen av et ledd til temaposisjonen, siden en fortellende helsetning ikke kan begynne med verbalet", "Begge to, siden begge posisjonene alltid er fylt i en fortellende helsetning i norsk", "Ingen av dem, siden norsk ordstilling er fri så lenge funksjonene er tydelige"],
      explanation: "Det finitte verbalet må stå på plass nummer to; en fortellende helsetning der det står et annet sted, er ugrammatisk. Hvilket ledd som havner i temaposisjonen, er derimot et fritt valg, og det er nettopp den forskjellen svaret skal si eksplisitt.",
    },
    {
      question: "Hva betyr det at flyttingen til temaposisjonen ikke er obligatorisk?",
      options: ["At setningen er fullt grammatisk med subjektet på plassen", "At plassen kan stå tom i en fortellende helsetning, slik den gjør i et ja-nei-spørsmål", "At leddet som står der, kan byttes ut med et annet uten at setningen endrer betydning i det hele tatt", "At kandidaten kan velge om setningen skal ha en temaposisjon eller ikke"],
      explanation: "Valget gjelder hvilket ledd som havner i posisjonen, ikke om posisjonen finnes. Plassen er der uansett, og i nøytral ordstilling er den fylt av subjektet — tom temaposisjon har bare ja-nei-spørsmålet.",
    },
    {
      question: "Hva skjer med subjektet når et adverbial tematiseres?",
      options: ["Det flytter til plassen rett bak det finitte verbalet, siden temaposisjonen nå er opptatt", "Det blir stående i temaposisjonen sammen med adverbialet, siden begge er ledd i samme setning", "Det bytter funksjon med adverbialet og blir et adverbial selv", "Det faller bort, siden temaposisjonen bare rommer ett ledd"],
      explanation: "Temaposisjonen rommer ett ledd, og det finitte verbalet må stå på plass nummer to. Subjektet har dermed ingen annen plass å gå til enn den rett bak verbalet. Funksjonen er uendret — det er bare plasseringen som er ny.",
    },
    {
      question: "Hvor mange ledd kan stå foran det finitte verbalet i en fortellende helsetning?",
      options: ["Ett, uansett hvor langt det leddet er — det kan til og med være en hel leddsetning", "Så mange setningen trenger", "To, nemlig subjektet og ett tematisert ledd", "Ingen, siden det finitte verbalet alltid innleder setningen"],
      explanation: "Temaposisjonen rommer nøyaktig ett ledd, uansett hvor langt det leddet er — det kan til og med være en hel leddsetning. Å telle leddene foran det finitte verbalet er derfor en rask og mekanisk prøve på om setningen holder.",
    },
    {
      question: "Hva skiller leddsetningsskjemaet fra helsetningsskjemaet?",
      options: ["Setningsadverbialet står foran det finitte verbalet i leddsetningen, og bak det i helsetningen", "Leddsetningen mangler finitt verbal helt, siden subjunksjonalen bærer tidsopplysningen i stedet", "Leddsetningen har to plasser foran det finitte verbalet, mens helsetningen bare har én tilgjengelig", "Leddsetningen har fri temaposisjon, mens helsetningen har bundet førsteplass"],
      explanation: "I helsetningen står det finitte verbalet på plass nummer to, foran setningsadverbialet; i leddsetningen står det bak. Leddsetningen har dessuten ingen fri temaposisjon — den første plassen er reservert subjunksjonalen.",
    },
    {
      question: "Hvilken prøve avgjør raskest om du har en helsetning eller en leddsetning foran deg?",
      options: ["Hvor setningsadverbialet havner i forhold til det finitte verbalet", "Om setningen innledes av en subjunksjonal som at, som eller fordi i skriftbildet", "Om setningen står foran eller bak et komma i den skrevne teksten", "Om setningen har flere enn ett finitt verbal"],
      explanation: "Sett inn ikke og se hvor det havner: bak det finitte verbalet i en helsetning, foran i en leddsetning. Prøven virker også der subjunksjonalen er utelatt, og den er derfor sikrere enn å lete etter innledningsord eller komma.",
    },
    {
      question: "Hva kjennetegner ja-nei-spørsmålets skjema?",
      options: ["Temaposisjonen står tom, og det tomrommet er selve spørsmålssignalet", "Det finitte verbalet flyttes ut av finittposisjonen", "Subjektet står i temaposisjonen, som i nøytral ordstilling", "Setningsadverbialet flyttes foran det finitte verbalet"],
      explanation: "«Stenger brua i sommer?» har ingenting på førsteplassen, og det tomrommet er selve spørsmålssignalet. Det finitte verbalet står fortsatt i finittposisjonen — det er bare plassen foran som er tom.",
    },
    {
      question: "Hvor står spørreordet i et hv-spørsmål som «Når stenger brua?»",
      options: ["I temaposisjonen, altså på den første plassen, som et hvilket som helst annet tematisert ledd", "På en egen spørreordsplass foran temaposisjonen, som bare finnes i denne setningstypen", "I finittposisjonen, siden spørreordet erstatter det finitte verbalet på plass nummer to", "Utenfor skjemaet, siden spørsmål ikke lar seg beskrive med posisjoner"],
      explanation: "Spørreordet oppfører seg som et tematisert ledd og tar den første plassen, med det finitte verbalet rett bak. Det er nettopp denne likheten som gjør skjemaet nyttig: én beskrivelse dekker fortellende setninger og begge spørsmålstypene.",
    },
    {
      question: "Hva er feil #11 i bokas register?",
      options: ["Å analysere setningsstruktur uten posisjonstermene tema(tiserings)posisjon og finittposisjon", "Å bytte om på hvilken av de to flyttingene som er obligatorisk i en fortellende helsetning", "Å beskrive tematisering i en leddsetning, der den første plassen er reservert subjunksjonalen", "Å blande setningsledd og posisjon i den samme setningen"],
      explanation: "Feil #11 er å beskrive ordstillingen riktig uten å bruke termene tema(tiserings)posisjon og finittposisjon, og dette kapitlet er feilens hovedhjem. Å bytte om på hvilken flytting som er obligatorisk, å beskrive tematisering i en leddsetning og å blande ledd og posisjon er også feil man kan gjøre her, men de har andre numre eller ingen egen kode.",
    },
    {
      question: "Hvorfor koster det uttelling å skrive «det første leddet kan variere, men verbet står alltid på andreplass»?",
      options: ["Fordi svaret er riktig i innhold, men ikke bruker de to obligatoriske termene", "Fordi påstanden er gal: det finitte verbalet kan stå på flere plasser avhengig av hva som er tematisert", "Fordi svaret mangler et eksempel, og eksempler er et krav i alle redegjørende oppgaver i emnet", "Fordi «verbet» er upresist når setningen har både finitt og infinitt verbal"],
      explanation: "Innholdet er korrekt, og det er nettopp det som gjør feilen lett å gjøre. H2020 knytter uttellingen til at ordene tema(tiserings)posisjon og finittposisjon faktisk brukes, og et svar uten dem er ufullstendig uansett hvor godt det ellers er formulert.",
    },
    {
      question: "Hva er galt med setningen «Objektet er temaposisjonen»?",
      options: ["Et ledd står i en posisjon — objektet er et ledd, temaposisjonen er en plass", "Objektet kan ikke stå i temaposisjonen i det hele tatt, siden den plassen hører subjektet til", "Temaposisjonen finnes bare i leddsetninger", "Ingenting — dette er den vanlige måten å formulere det på"],
      explanation: "Ledd er jobber, posisjoner er plasser, og de to kan ikke være det samme. Riktig formulering er at objektet står i temaposisjonen, og objektet kan gjerne stå der: «Fortauet måker naboen hver vinter».",
    },
    {
      question: "Hva sier arkivet om ordlyden i H2020-oppgavene?",
      options: ["Ingenting om ordlyden — H2020 er den ene terminen der oppgaveteksten ikke foreligger ordrett", "At oppgaven ba om en redegjørelse for norsk ordstilling med utgangspunkt i to gitte setninger", "At ordlyden er kjent, men at den ikke kan gjengis av hensyn til opphavsretten til oppgavesettet", "At ordlyden er den samme som i de øvrige terminene med samme tema"],
      explanation: "Ordrett oppgavetekst foreligger for 5 av 6 terminer, og H2020 er unntaket: sensorveiledningen forteller hva det ble spurt om og hva som ga uttelling, men ikke hvordan spørsmålet var formulert. Boka gjengir derfor kravet og sier ingenting om ordlyden.",
    },
    {
      question: "Hva gjør tematisering med funksjonene i setningen?",
      options: ["Ingenting — leddet bytter plass, ikke jobb, og subjektet er subjekt uansett hvor det står", "Den gjør det tematiserte leddet til setningens subjekt, siden subjektsplassen er den første i skjemaet", "Den gjør subjektet til et adverbial når det flyttes bak det finitte verbalet", "Den bytter om på objektets og subjektets funksjoner i setningen"],
      explanation: "«Fortauet måker naboen hver vinter» har fortsatt naboen som subjekt og fortauet som objekt. Nettopp fordi funksjonen ikke følger av plassen, må posisjon og setningsledd holdes fra hverandre i svaret.",
    },
    {
      question: "Hva er et foreløpig subjekt?",
      options: ["Ordet det, satt inn i temaposisjonen for å holde plassen når det egentlige subjektet står lenger bak", "Et subjekt som er utelatt fordi det kan leses ut av sammenhengen i setningen foran", "Det leddet som midlertidig fyller subjektsplassen mens et annet ledd er tematisert", "Et subjekt i en leddsetning som viser tilbake på subjektet i helsetningen"],
      explanation: "«Det kom en buss til holdeplassen» har det egentlige subjektet en buss bak verbalet, mens det holder temaposisjonen. Konstruksjonen viser at temaposisjonen er en plass som må fylles, ikke et ledd.",
    },
    {
      question: "Hvilket ledd står i temaposisjonen i «Ved biblioteket har bussen alltid stoppet»?",
      options: ["Adverbialet ved biblioteket", "Subjektet bussen, som er det leddet setningen egentlig handler om", "Det finitte verbalet har, siden det står tidlig i setningen", "Setningsadverbialet alltid"],
      explanation: "Temaposisjonen er den første plassen, og der står preposisjonsfrasen ved biblioteket. Subjektet bussen har flyttet til plassen rett bak det finitte verbalet, og alltid står lenger bak igjen, sammen med det infinitte verbalet stoppet.",
    },
    {
      question: "Hva skjer med det infinitte verbalet når det finitte flytter til finittposisjonen?",
      options: ["Det blir stående lenger bak i setningen", "Det flytter med, slik at de to verbalene alltid står ved siden av hverandre på plass nummer to", "Det flytter til temaposisjonen for at plassen ikke skal stå tom", "Det faller bort, siden bare ett verbal kan stå i skjemaet om gangen"],
      explanation: "I «Om kvelden har barna ikke lest boka» står har i finittposisjonen mens lest blir igjen bak setningsadverbialet. Kravet om plass nummer to gjelder bare den tidsbærende formen.",
    },
    {
      question: "Hvorfor sier boka at subjektets plassering bak verbalet ikke er en egen regel?",
      options: ["Fordi den følger av at temaposisjonen rommer ett ledd og at det finitte verbalet må stå på plass nummer to", "Fordi subjektet kan stå hvor som helst i setningen så lenge funksjonen går fram av sammenhengen", "Fordi regelen bare gjelder leddsetninger, der subjektet står bak subjunksjonalen", "Fordi subjektet i praksis alltid står i temaposisjonen i norsk"],
      explanation: "Er førsteplassen opptatt av noe annet og andreplassen av det finitte verbalet, har subjektet ingen annen plass å gå til. Å skrive den ene setningen om systematikken er nettopp det som løfter svaret fra gjengivelse til forståelse.",
    },
    {
      question: "Hva er den mest sikre måten å få de to obligatoriske termene inn i et svar på?",
      options: ["Å bruke setningsmalen: leddet X står i temaposisjonen, mens det finitte verbalet står i finittposisjonen", "Å nevne begge termene i innledningen og deretter beskrive ordstillingen i klartekst gjennom resten av svaret", "Å sette termene i en parentes bak beskrivelsen, slik at teksten flyter bedre for leseren", "Å ramse opp begge termene til slutt, som en oppsummering av svaret"],
      explanation: "Malen får begge ordene inn der de faktisk gjør arbeid, koblet til konkrete ledd i en konkret setning. En term som bare er nevnt og ikke brukt, treffer feil #4 — å nevne fagtermer uten å forklare systematikken bak dem.",
    },
    {
      question: "Hva er nøytral ordstilling?",
      options: ["Subjektet i temaposisjonen, og ingenting tematisert — utgangspunktet du sammenligner med", "En setning der ingen av de to posisjonene er fylt, slik at leddene står i sin opprinnelige rekkefølge", "Den ordstillingen som brukes når setningen ikke skal framheve noe, og som derfor mangler temaposisjon", "Ordstillingen i en leddsetning, der ingen tematisering er mulig"],
      explanation: "Nøytral ordstilling er utgangspunktet du sammenligner de tematiserte variantene med: subjektet står først, og ingen andre ledd er løftet fram. Temaposisjonen er fylt også her — den er fylt av subjektet.",
    },
  ],
  'exfac03-spr-5-6': [
    {
      question: "Hva kjennetegner et argument?",
      options: ["Verbet krever leddet for at setningen skal være fullstendig, slik bo krever et sted", "Leddet kan tas bort uten at setningen blir ugrammatisk, men setningen sier da mindre om situasjonen", "Leddet kan gjentas flere ganger i samme setning uten at setningen brekker på noe punkt", "Leddet peker alltid på den som utfører handlingen bevisst og med kontroll over den"],
      explanation: "Et argument er bestilt av verbet: uten det er setningen ufullstendig, slik Familien bor er det. Å kunne strykes fritt og å kunne gjentas er derimot kjennetegn på et adjunkt, og det å peke på den som handler bevisst er den semantiske rollen agens — et helt annet spørsmål enn om leddet er krevd av verbet.",
    },
    {
      question: "Hva kjennetegner et adjunkt?",
      options: ["Leddet kan tas bort uten at setningen blir ugrammatisk, og det kan i tillegg gjentas fritt i samme setning", "Leddet er bestilt av verbet og kan derfor ikke fjernes uten at setningen blir ufullstendig", "Leddet står alltid som adverbial og har alltid den semantiske rollen sted i situasjonen", "Leddet fyller en plass det bare finnes én av, slik at et ledd til av samme type kolliderer"],
      explanation: "Adjunktet er lagt til av den som snakker, ikke krevd av verbet, og strykningstesten viser det direkte. At leddet ikke kan fjernes, og at plassen bare finnes én av, er derimot kjennetegn på et argument. Og et adjunkt kan ha mange ulike roller — instrument, sted og flere — så formen adverbial låser ikke rollen.",
    },
    {
      question: "Hvordan gjennomfører du strykningstesten?",
      options: ["Du stryker leddet og vurderer om setningen fortsatt er grammatisk og verbet betyr det samme", "Du setter inn ett ledd til av samme type og ser om de to kolliderer om den samme plassen i setningen", "Du bytter ut leddet med et pronomen og ser om setningen fortsatt gir mening etter byttet", "Du flytter leddet fremst i setningen og ser om det kan stå i temaposisjonen uten videre"],
      explanation: "Strykningstesten fjerner leddet og spør om setningen holder — og om verbet fortsatt leses likt, siden mange verb tåler absolutt bruk. Å sette inn ett ledd til er gjentakelsestesten, altså det andre grepet i kapitlet, mens pronomenbytte og flytting er konstituenttester som avgrenser ledd, ikke tester som skiller argument fra adjunkt.",
    },
    {
      question: "Hva viser gjentakelsestesten?",
      options: ["At et adjunkt kan gjentas i samme setning, mens et argument ikke tåler et ledd til av samme type", "At et argument alltid kan flyttes til temaposisjonen, mens et adjunkt må stå der det står", "At et adjunkt kan strykes uten tap, mens et argument gjør setningen ufullstendig når det strykes", "At verbet skifter betydning når du gjentar leddet, og at leddet derfor må være et argument"],
      explanation: "Du kan stable flere adverbialer i samme setning, men en setning har bare ett direkte objekt — plassen finnes det bare én av, og det avslører argumentet. Beskrivelsen av stryking hører til strykningstesten, ikke til denne, og gjentakelsestesten sier ingenting om flytting eller om at verbet skifter betydning.",
    },
    {
      question: "Hva er absolutt bruk av et verb?",
      options: ["At et verb som ellers krever et objekt, står alene fordi setningen handler om selve aktiviteten", "At verbet krever et adverbial i tillegg til subjektet og objektet for å være komplett", "At verbet har to ulike argumentstrukturer knyttet til den samme verbformen i ordboka", "At leddet som følger verbet, kan gjentas fritt fordi det er lagt til av den som snakker"],
      explanation: "Hun leser og Snekkeren reparerer er absolutt bruk: objektet er borte fordi setningen handler om aktiviteten. Dette er grunnen til at strykningstesten alene ikke alltid avgjør. Krav om adverbial gjelder verb som bo og legge, mens to argumentstrukturer på samme form er noe annet igjen, som i Isen smeltet mot Sola smeltet isen.",
    },
    {
      question: "I setningen Familien bor i en gammel trebygning — hva er preposisjonsfrasen?",
      options: ["Et argument, fordi verbet bo krever et sted for at setningen skal være fullstendig", "Et adjunkt, fordi frasen sier hvor", "Et adjunkt, fordi leddet har form som et adverbial og adverbialer er lagt til av taleren", "Et argument, fordi enhver preposisjonsfrase som følger rett etter verbet, er bestilt av verbet"],
      explanation: "Stryk frasen, og du sitter igjen med Familien bor, som ikke er ferdig: verbet krever et sted, og frasen er derfor et argument. Formen adverbial avgjør ingenting — den samme frasen er et adjunkt i Familien spiser i en gammel trebygning, og plasseringen rett etter verbet er heller ingen regel.",
    },
    {
      question: "Hva er argumentstrukturen til et verb?",
      options: ["Hvor mange argumenter verbet krever, og hva slags argumenter de er — en opplysning om verbet", "Hvor mange setningsledd setningen har til sammen når adjunktene også regnes med", "Hvilke semantiske roller leddene rundt verbet fyller i den situasjonen setningen beskriver", "Hvilken rekkefølge leddene står i, og hvilket av dem som er flyttet til temaposisjonen"],
      explanation: "Argumentstrukturen teller bare de leddene verbet har bestilt, og den følger verbet fra setning til setning. En setning kan ha seks ledd og likevel hvile på et verb med to argumenter. Rollene og rekkefølgen er andre opplysninger om de samme leddene, og ingen av dem er argumentstrukturen.",
    },
    {
      question: "Hvorfor sier boka at argumentstrukturen er en egenskap ved verbet?",
      options: ["Fordi tallet følger verbet inn i enhver setning der det brukes, uansett hvor mange adjunkter setningen har", "Fordi tallet kan leses direkte av hvor mange ledd setningen inneholder når du teller dem", "Fordi tallet bestemmes av hvilke semantiske roller de omkringliggende leddene har fått tildelt", "Fordi tallet endrer seg hver gang du legger til et nytt adverbial i den setningen du analyserer"],
      explanation: "Finner du ut at bo krever et sted, gjelder det i alle setninger med bo, og du kan si det rett ut i besvarelsen. Antallet ledd i setningen sier derimot ingenting, siden adjunkter kan stables fritt uten at argumentplassene blir flere, og rollene er et annet spørsmål enn hvor mange plasser verbet åpner.",
    },
    {
      question: "Hva er den semantiske rollen til et ledd?",
      options: ["Hva leddet gjør i situasjonen setningen beskriver, altså hvem som handler og hva som skjer", "Hvilken plass leddet har i setningsbygningen, altså om det er subjekt, objekt eller adverbial", "Hva slags ord leddet består av, altså om hodet er et substantiv, et verb eller en preposisjon", "Om leddet er krevd av verbet eller lagt til fritt av den som formulerte setningen"],
      explanation: "Rollen svarer på hvem som handler, hva som blir handlet med, hvem som får og hva som brukes. Plassen i setningsbygningen er setningsleddet, ordtypen er ordklassen, og spørsmålet om leddet er krevd, er skillet argument mot adjunkt. Alle fire er ulike spørsmål om det samme leddet, og de kan ikke leses av hverandre.",
    },
    {
      question: "Hvilken rolle har Nøkkelen i setningen Nøkkelen åpnet døra?",
      options: ["Instrument, siden nøkkelen blir brukt for å utføre handlingen", "Agens, siden leddet står i subjektsplassen og subjektet utfører handlingen i setningen", "Erfarer, siden leddet er det som er nærmest handlingen og merker den først av alt", "Patiens, siden nøkkelen blir brukt"],
      explanation: "Nøkkelen blir brukt for å utføre handlingen, og omskrivingen ved hjelp av nøkkelen går fint — det er testen på instrument. At leddet står som subjekt, gjør det ikke til agens: agens handler bevisst, og en nøkkel velger ingenting. Patiens er det som endrer tilstand, og her er det døra.",
    },
    {
      question: "Hvilken test skiller agens fra erfarer?",
      options: ["Om du kan legge til med vilje uten at setningen blir rar eller usann", "Om leddet kan flyttes til temaposisjonen uten at setningen mister sin opprinnelige betydning", "Om leddet kan strykes uten at setningen blir ugrammatisk eller ufullstendig for en leser", "Om leddet kan omskrives til en frase som begynner med ved hjelp av, uten at noe går tapt"],
      explanation: "Læreren rettet prøvene med vilje går fint, mens Naboen hørte alarmen med vilje skurrer — det første er agens, det andre erfarer. Strykning skiller argument fra adjunkt og sier ingenting om rollen, mens omskriving til ved hjelp av er testen på instrument, ikke på bevisst handling.",
    },
    {
      question: "Hva skiller mottaker fra patiens?",
      options: ["Mottakeren får noe overført til seg, mens patiens endrer tilstand eller blir berørt", "Mottakeren står alltid som indirekte objekt, mens patiens alltid står som direkte objekt i setningen", "Mottakeren er et argument hos verbet, mens patiens er et adjunkt som taleren har lagt til selv", "Mottakeren er alltid et levende vesen, mens patiens aldri kan være en person i en setning"],
      explanation: "I Onkelen ga niesen et sykkelsete er sykkelsetet patiens og niesen mottaker: den ene endrer eier, den andre får noe. Setningsleddet er ikke avgjørende, begge er argumenter hos gi, og patiens kan godt være en person — i Legen undersøkte pasienten er pasienten patiens.",
    },
    {
      question: "Hvilken rolle har Læreren i setningen Læreren fikk en blomsterbukett av klassen?",
      options: ["Mottaker, siden læreren får noe overført til seg", "Agens, fordi leddet står som subjekt i setningen og utfører den handlingen verbet beskriver", "Erfarer, fordi leddet peker på en person som opplever noe hun ikke selv har kontroll over", "Instrument, siden buketten blir overrakt"],
      explanation: "Læreren får noe overført til seg og utfører ingen handling, og det er mottaker. Agens krever bevisst handling, og her handler ikke læreren i det hele tatt. Erfarer er nær, men rollen gjelder den som sanser eller føler noe, ikke den som mottar en gjenstand — sammenlign med Læreren gruet seg til foreldremøtet, der hun er erfarer.",
    },
    {
      question: "Hva viser setningen Det regner i Bergen om forholdet mellom setningsledd og semantisk rolle?",
      options: ["At et ledd kan være subjekt uten å ha en semantisk rolle i det hele tatt", "At subjektet i en norsk setning alltid har rollen agens, også når handlingen ikke er bevisst styrt", "At det formelle subjektet er et adjunkt", "At semantiske roller bare kan tildeles ledd som består av en nominalfrase med et substantiv i"],
      explanation: "Det kan ikke strykes og er dermed et argument, men det peker ikke på noen deltaker — det er ingen som regner. Hadde hvert setningsledd hatt en fast rolle, ville et slikt subjekt vært umulig. Leddet er nettopp ikke et adjunkt, og roller tildeles ledd av mange former, ikke bare nominalfraser.",
    },
    {
      question: "Hva er tredje trinn i prosedyren i dette kapitlet?",
      options: ["Å tildele rollen ut fra hva leddet gjør i situasjonen, ikke ut fra hvilken funksjon det har", "Å avgjøre om leddet er et argument eller et adjunkt etter at strykningen er gjennomført på det", "Å stryke leddet og vurdere om setningen fortsatt er grammatisk og verbet betyr det samme", "Å telle hvor mange ledd setningen har til sammen, og oppgi tallet som argumentstruktur"],
      explanation: "Prosedyren går stryking, deretter konklusjon om argument eller adjunkt, og til slutt rolletildeling ut fra situasjonen. Å stryke leddet er trinn 1 og å konkludere om argument eller adjunkt er trinn 2, så begge er riktige trinn plassert feil i rekkefølgen. Å telle hvor mange ledd setningen har, er ingen del av prosedyren, siden adjunktene ikke skal telles med.",
    },
    {
      question: "Hvorfor er det en feil å lese den semantiske rollen av setningsleddet?",
      options: ["Fordi det samme setningsleddet kan ha ulike roller i ulike setninger", "Fordi setningsleddene ikke lar seg identifisere før rollene i situasjonen er avklart for hvert ledd", "Fordi rollene bare gjelder de leddene som er adjunkter, mens argumentene bærer funksjonsetiketten", "Fordi et ledd som er subjekt i én setning, aldri kan være direkte objekt i en annen setning"],
      explanation: "Læreren er subjekt i tre setninger og henholdsvis agens, mottaker og erfarer i dem — rollen skifter uten at setningsleddet gjør det. Leddanalysen kan derimot gjøres først, og roller gjelder både argumenter og adjunkter. Et ledd kan dessuten skifte funksjon fra setning til setning, som i Hagen gror igjen mot Han vanner hagen.",
    },
    {
      question: "Hvor mange argumenter har verbet i setningen Sola smeltet isen på taket?",
      options: ["To, siden på taket kan strykes og dermed er et adjunkt", "Tre, siden setningen har tre ledd", "Ett, siden smelte er det samme verbet som i Isen smeltet, og det krever bare ett argument", "To, siden ethvert verb med et direkte objekt har nøyaktig to argumenter uansett setning"],
      explanation: "Sola og isen er krevd av verbet, mens på taket kan strykes uten tap og altså er et adjunkt. Å telle alle ledd gir feil svar nettopp fordi adjunkter ikke teller. Og samme verbform kan ha to argumentstrukturer: Isen smeltet har ett argument, Sola smeltet isen har to — det er ikke ett verb som får et ekstra ledd.",
    },
    {
      question: "Hva er den mest presise begrunnelsen for at med en sløv kniv er et adjunkt i Kokken kuttet grønnsakene med en sløv kniv?",
      options: ["Setningen Kokken kuttet grønnsakene er fullstendig, og verbet betyr fortsatt det samme uten leddet", "Leddet har rollen instrument, og instrumenter er alltid adjunkter i en norsk setning", "Leddet er en preposisjonsfrase, og preposisjonsfraser er aldri krevd av verbet i en setning", "Leddet står sist i setningen, og ledd som står sist, er lagt til av den som snakker"],
      explanation: "Strykningen skrevet ut er selve begrunnelsen: setningen holder, og verbet leses likt. Rollen instrument avgjør ingenting, for et instrument kan også være argument, som i Bygget består av tre fløyer. Verken formen preposisjonsfrase eller plasseringen sist i setningen sier noe om hva verbet krever.",
    },
    {
      question: "Hva er den billigste tilføyelsen i en klassifiseringsoppgave, ifølge kapitlet?",
      options: ["En setning om hva som ville endret konklusjonen din, altså betingelsen for å svare motsatt", "En liste over alle de semantiske rollene som finnes, slik at sensor ser at du kjenner apparatet", "En presisering av hvilken ordklasse hvert av leddene i setningen tilhører, i tillegg til analysen", "Et forbehold om at spørsmålet er vanskelig og at flere svar derfor må kunne godtas her"],
      explanation: "Å skrive betingelsen for å konkludere motsatt viser at du har prøvd leddet mot begge kategoriene, og oppgavetypen belønner nettopp forklaringen med 3 poeng mot 1 poeng for svaret. En rolleliste og en ordklasseoversikt svarer på noe annet enn det som ble spurt om, og et rent forbehold uten begrunnelse er en gjetning i forkledning.",
    },
    {
      question: "Hva skiller feil #8 fra feil #6?",
      options: ["Feil #8 er å klassifisere uten begrunnelse, feil #6 er å gi et eksempel uten å begrunne det", "Feil #8 er å gi færre eksempler enn oppgaven ba om, feil #6 er å hoppe over ett av oppgavens ledd", "Feil #8 er å bruke en fagterm uten å forklare den, feil #6 er å svare med lærebokas egne eksempler", "Feil #8 er å blande ordklasse og setningsledd, feil #6 er å lese rollen av funksjonsetiketten"],
      explanation: "De to kodene rammer samme svakhet i to sjangre: den ene at sorteringen står uten test, den andre at eksempelet står uten kobling til definisjonen. De øvrige beskrivelsene tilhører andre koder i registeret på seksten feil, og de to forvekslingene til slutt er reelle feil, men de har ingen egen kode.",
    },
    {
      question: "Hvordan bør du behandle et ledd der strykningstesten og gjentakelsestesten peker hver sin vei?",
      options: ["Skriv ut begge lesningene, velg én av dem, og si hva som ville endret valget ditt", "Velg alltid det strykningstesten gir", "Hopp over leddet i besvarelsen, siden et uavklart ledd ikke kan gi poeng i en klassifiseringsoppgave", "Oppgi begge svarene uten å velge, siden oppgavetypen uttrykkelig godtar flere ulike konklusjoner"],
      explanation: "Grensetilfellet merkes i denne boka (omstridt — begge forsvarlige), og uttellingen ligger i at begge analysene er skrevet ut og at valget er begrunnet. At flere konklusjoner godtas, betyr at de skal være godt begrunnet — ikke at du slipper å velge. Å hoppe over leddet er å hoppe over et oppgaveledd, som er en egen feil.",
    },
    {
      question: "Hva er forskjellen på setningsleddet og den semantiske rollen til et ledd?",
      options: ["Setningsleddet er plassen leddet har i setningsbygningen, mens rollen er hva leddet gjør i situasjonen", "Setningsleddet er hva verbet krever, rollen er det som taleren har lagt til av eget ønske", "Setningsleddet gjelder bare argumenter, mens rollen bare gjelder de leddene som er adjunkter", "Setningsleddet er en opplysning om verbet, mens rollen er en opplysning om ordklassen til hodet"],
      explanation: "Det ene svarer på hvor leddet står i setningens arkitektur, det andre på hva det gjør i verden setningen beskriver, og de kan ikke leses av hverandre. Skillet mellom krevd og lagt til er argument mot adjunkt, altså et tredje spørsmål. Og både argumenter og adjunkter får roller, som instrumentadjunktet i Kokken kuttet grønnsakene med en sløv kniv.",
    },
  ],
  'exfac03-spr-5-7': [
    {
      question: "Hva er en infinitivssetning?",
      options: ["En leddsetning med verbal i infinitiv og uten synlig subjekt i setningen", "En leddsetning som innledes av at og har finitt verbal", "En helsetning der subjektet er utelatt fordi det er det samme som i setningen foran", "En frase med et verb som hode, som fyller plassen etter det finitte verbalet i setningen"],
      explanation: "Infinitivssetningen har verbal, kan ha objekt og adverbialer, men mangler både synlig subjekt og finitt verbal. At-setningen har begge deler synlig, og et utelatt subjekt i en helsetning kan settes inn igjen — det kan ikke subjektsplassen i en infinitivssetning.",
    },
    {
      question: "Hva står PRO for i analysen?",
      options: ["Det usynlige subjektet i en infinitivssetning, som aldri uttales", "Et pronomen som er utelatt fordi det går fram av sammenhengen hvem det viser til", "Etiketten på infinitivsmerket å, som markerer at det følger en innleid setning", "Den semantiske rollen til den som utfører handlingen i en setning uten finitt verbal"],
      explanation: "PRO settes inn på subjektsplassen i infinitivssetningen og uttales aldri. Det er ikke et utelatt pronomen, siden et synlig ord ikke kan settes inn på plassen, og det er verken en etikett på infinitivsmerket eller en semantisk rolle.",
    },
    {
      question: "Hva er kontroll?",
      options: ["Relasjonen mellom PRO og det leddet i oversetningen som avgjør hvem det usynlige subjektet viser til", "Regelen om at det finitte verbalet må stå på andre plass i en fortellende helsetning i norsk", "Prosedyren du bruker for å avgjøre om et ledd er krevd av verbet eller lagt til fritt av taleren", "Forholdet mellom et pronomen og det leddet lenger ute i teksten som pronomenet viser tilbake på"],
      explanation: "Kontroll knytter PRO til et bestemt ledd i oversetningen, og det er verbet som avgjør hvilket. De øvrige beskrivelsene gjelder helt andre forhold: plasseringen av det finitte verbalet, skillet mellom argument og adjunkt, og vanlig tilbakevisning med pronomen, som er langt friere enn kontroll.",
    },
    {
      question: "Hvem kontrollerer PRO i setningen Verkstedet lovte kunden å bytte dekk?",
      options: ["Verkstedet, siden love tilskriver handlingen den som lover", "Kunden, fordi det leddet står nærmest infinitivssetningen og dermed er den nærmeste kandidaten", "Kunden, fordi det er den som får løftet, som har mest interesse av at handlingen blir utført", "Ingen av leddene — kontrollen er vilkårlig"],
      explanation: "Love hører til den verbfamilien der den som lover, også er den som utfører, altså subjektskontroll. Nærhet avgjør ingenting: objektet står nærmest infinitivssetningen og er likevel ikke kontrollør. Og setningen har en kontrollør, så kontrollen er ikke vilkårlig.",
    },
    {
      question: "Hvem kontrollerer PRO i setningen Verkstedet anbefalte kunden å bytte dekk?",
      options: ["Kunden, siden anbefale tilskriver handlingen den som får rådet", "Verkstedet, fordi subjektet i oversetningen alltid kontrollerer PRO i en infinitivssetning", "Verkstedet, fordi det er den som gir rådet, som er ansvarlig for at arbeidet blir gjort", "Både verkstedet og kunden, siden begge deltar i den handlingen infinitivssetningen beskriver"],
      explanation: "Anbefale hører til den familien der handlingen tilskrives den som får rådet, altså objektskontroll. Bare verbet skiller denne setningen fra den med lovte, og likevel skifter kontrolløren. PRO har dessuten én kontrollør, ikke to.",
    },
    {
      question: "Hva er subjektskontroll?",
      options: ["At subjektet i oversetningen kontrollerer PRO, som ved love og nekte", "At PRO selv står i subjektsplassen inne i den infinitivssetningen som analyseres", "At infinitivssetningen selv er subjekt", "At kontrolløren står først i setningen, uansett hvilken funksjon det leddet har der"],
      explanation: "Subjektskontroll sier hvilket ledd i oversetningen som er kontrollør, som ved love og nekte. At PRO står i subjektsplassen, gjelder alle infinitivssetninger og skiller ingenting. Og at infinitivssetningen selv er subjekt, er en tredje ting igjen, som i Å rydde garderoben tar under ti minutter.",
    },
    {
      question: "Hva avgjør om en setning har subjektskontroll eller objektskontroll?",
      options: ["Verbet i oversetningen, og ingenting annet ved setningen", "Hvilket ledd som står nærmest infinitivssetningen", "Om infinitivssetningen fyller funksjonen direkte objekt eller adverbial i oversetningen sin", "Hvilket av leddene i oversetningen som har den semantiske rollen agens i den situasjonen"],
      explanation: "Bytter du ut lovte med anbefalte og lar alt annet stå, skifter kontrolløren — det er beviset på at verbet avgjør. Nærhet avgjør ingenting, og verken leddfunksjonen til infinitivssetningen eller rollefordelingen i oversetningen bestemmer hvem PRO viser til.",
    },
    {
      question: "Hvilke verb gir objektskontroll?",
      options: ["Anbefale, be, oppfordre og tvinge — verb som tilskriver handlingen den som får rådet eller ordren", "Love, nekte, prøve og bestemme seg for, altså de verbene som forplikter den som snakker", "Regne, blåse og snø, altså de verbene som ikke har noen deltaker i situasjonen i det hele tatt", "Alle verb som tar en preposisjon foran infinitivssetningen, uansett hvilken betydning verbet har"],
      explanation: "Verb av anbefale-typen tilskriver handlingen den som får rådet, ordren eller oppfordringen. Love-familien gir motsatt resultat, subjektskontroll. Og preposisjonen er ingen regel: oppfordre til å og be om å har preposisjon, men det er betydningen til verbet som avgjør, ikke preposisjonen.",
    },
    {
      question: "Hva viser paret Gutten lovte å være snill mot Guttene lovte å være snille?",
      options: ["At adjektivet inne i infinitivssetningen samsvarer med et subjekt som ikke er synlig", "At infinitivssetningen får sitt eget finitte verbal når subjektet i oversetningen står i flertall", "At infinitivsmerket å bøyes i tall", "At kontrolløren må stå i entall for at samsvarsbøyingen inne i infinitivssetningen skal være mulig"],
      explanation: "Adjektivet bøyes i tall og retter seg etter noe, men det finnes ingenting synlig inne i infinitivssetningen som kan styre bøyingen — et usynlig subjekt som viser til guttene, forklarer den. Infinitivssetningen har fortsatt ikke noe finitt verbal, og infinitivsmerket bøyes ikke.",
    },
    {
      question: "Hva skiller PRO fra et vanlig pronomen?",
      options: ["PRO uttales aldri, og hvem det viser til, kan ikke velges fritt av den som snakker", "PRO viser alltid til det nærmeste leddet", "PRO står i infinitivssetninger og pronomen i helsetninger, men de oppfører seg ellers helt likt", "PRO har ingen semantisk rolle, mens et pronomen alltid har rollen agens i sin egen setning"],
      explanation: "I at-varianten kan et pronomen vise til flere personer avhengig av sammenhengen; i infinitivsvarianten er svaret låst av verbet. Nærhet styrer ingen av delene, PRO fyller en argumentplass og får rolle som andre subjekter, og forskjellen er langt større enn hvilken setningstype de opptrer i.",
    },
    {
      question: "Hva er vilkårlig kontroll?",
      options: ["At det ikke finnes noe ledd i setningen som kan være kontrollør, slik at PRO viser til hvem som helst", "At leseren selv kan velge om subjektet eller objektet skal regnes som kontrollør i setningen", "At kontrolløren skifter fra setning til setning fordi verbet i oversetningen er byttet ut", "At infinitivssetningen mangler både subjekt og verbal, og derfor ikke kan analyseres som setning"],
      explanation: "I Det er forbudt å røyke innendørs viser PRO til folk i sin alminnelighet, fordi setningen ikke har noen kandidat til kontrollørrollen. Det er ikke et valg leseren tar, og det er noe annet enn at kontrolløren skifter med verbet. Infinitivssetningen har dessuten alltid et verbal.",
    },
    {
      question: "Hvilken feil begår en kandidat som skriver at det er verkstedet som skal bytte dekk, fordi det følger av betydningen til verbet, uten å bruke noen fagterm?",
      options: ["Feil #12 — å begrunne det usynlige subjektet uten å nevne kontroll", "Feil #12 — å analysere setningsstrukturen uten å bruke posisjonstermene tema og finitt", "Feil #6 — å gi et eksempel uten å begrunne hvorfor eksempelet passer på definisjonen", "Feil #5 — å hoppe over ett av leddene i oppgaven i stedet for å besvare hele bestillingen"],
      explanation: "Innholdet er riktig, men termen som veiledningen ber om, mangler, og kontroll er en av de seks obligatoriske termene i emnet. Posisjonstermene hører til setningsskjemaet og har en annen kode; de to øvrige kodene rammer eksempler uten begrunnelse og oppgaveledd som er hoppet over.",
    },
    {
      question: "Hvorfor holder det ikke å oppgi én kontrollør for alle setningene i en oppgave?",
      options: ["Fordi kontrolløren skifter med verbet, og oppgaven er satt sammen for å prøve nettopp det", "Fordi hver setning har flere kontrollører samtidig, slik at svaret alltid må inneholde minst to ledd", "Fordi kontrolløren alltid er det nærmeste leddet", "Fordi PRO viser til ulike ledd i ulike deler av den samme setningen etter hvert som den utvides"],
      explanation: "En oppgave med flere setninger inneholder nesten alltid minst én som bryter mønsteret fra de andre, og det er den setningen poengene ligger i. PRO har én kontrollør per infinitivssetning, nærhet avgjør ingenting, og kontrolløren skifter ikke underveis i en og samme setning.",
    },
    {
      question: "Hvilken leddfunksjon fyller infinitivssetningen i Trenerne lovte spillerne å rydde garderoben?",
      options: ["Direkte objekt, siden det er det trenerne lovte", "Adverbial, siden den sier noe om hvordan og når handlingen i oversetningen skal utføres", "Indirekte objekt, siden den står etter det leddet som er direkte objekt i oversetningen", "Subjektspredikativ, siden den sier noe om subjektet Trenerne og hva de har forpliktet seg til"],
      explanation: "Det trenerne lovte, er å rydde garderoben, og hele infinitivssetningen er dermed direkte objekt. Adverbialer sier hvor, når, hvordan eller hvorfor, og ingen av delene passer. Indirekte objekt er spillerne, og et subjektspredikativ ville krevd et verb som er eller blir.",
    },
    {
      question: "Hva er infinitivsmerket å i analysen?",
      options: ["Innlederen i infinitivssetningen, plassert på subjunksjonalplassen i treet", "En preposisjon som styrer frasen etter seg", "En del av verbformen, som skrives særskilt av rettskrivingshensyn men analyseres med verbet", "Etiketten på det usynlige subjektet i en infinitivssetning, som ikke kan uttales i norsk"],
      explanation: "Infinitivsmerket gjør samme jobb som at og som: det markerer at det følger en innleid setning. Det er ikke en preposisjon, det slås ikke sammen med verbet i analysen, og det er noe helt annet enn PRO, som står på subjektsplassen.",
    },
    {
      question: "Hva er første trinn i svarmalen for denne oppgavetypen?",
      options: ["Å navngi PRO og si at det er det usynlige subjektet i infinitivssetningen", "Å peke ut kontrolløren i hver enkelt setning før noen av termene er innført i besvarelsen", "Å oppgi hvilken verbfamilie verbet i oversetningen tilhører, og gi eksempler på andre verb i den", "Å tegne treet for hele setningen slik at innleiringsnivået går tydelig fram av framstillingen"],
      explanation: "Malen går fra å navngi PRO, til å navngi og forklare kontroll, til å peke ut kontrolløren i hver setning, til å si at verbet avgjør. Utpekingen og verbfamiliene kommer senere i rekkefølgen, og et tre er ikke bestilt i en redegjørelsesoppgave om dette temaet.",
    },
    {
      question: "Hvorfor er termen kontroll verdt så mye i denne oppgavetypen?",
      options: ["Fordi den er en av de seks obligatoriske termene i emnet, og et svar uten den er ufullstendig uansett", "Fordi den erstatter behovet for å peke ut hvem som utfører handlingen i hver enkelt setning", "Fordi den er den eneste fagtermen som brukes i syntaksdelen av emnet, og derfor lett å huske", "Fordi den gir uttelling selv når analysen av hvem som kontrollerer PRO, er feil i alle setningene"],
      explanation: "De obligatoriske termene er den billigste poengkilden i emnet: uten termen er svaret ufullstendig uansett hvor godt innholdet er. Termen erstatter ingenting — du må fortsatt peke ut kontrolløren i hver setning — og den redder ikke en analyse som er gal.",
    },
    {
      question: "Hvordan bør du bruke det at temaet ikke har vært prøvd på flere terminer?",
      options: ["Som grunn til å bruke mindre tid på kapitlet, ikke som grunn til å hoppe over det", "Som grunn til å hoppe over kapitlet, siden arkivet viser at temaet er på vei ut av emnet", "Som grunn til å bruke mer tid enn på de andre kapitlene, siden det da er tur til at det kommer", "En opplysning uten betydning"],
      explanation: "Lav frekvens gir færre minutter, aldri stryking: temaet står i 2 av 6 terminer, kravet er presist og kort, og arkivet har ni manglende høstterminer ingen kjenner innholdet i. Å lese fraværet som en spådom i noen retning — verken som utfasing eller som at det er tur — er å lese mer ut av seks terminer enn de bærer.",
    },
  ],
  'exfac03-spr-6-1': [
    {
      question: "Hva er betydningen til et uttrykk?",
      options: ["Innholdet uttrykket bærer i språksystemet, felles for alle som kan ordet", "Den konkrete tingen uttrykket peker ut i en bestemt ytring", "Mengden av ting uttrykket kan brukes riktig om", "Assosiasjonene den enkelte tilfeldigvis knytter til ordet"],
      explanation: "Riktig svar er at betydningen er innholdet uttrykket bærer i språksystemet. Den nærmeste fellen er å svare med referenten, altså den konkrete tingen: referenten skifter fra ytring til ytring mens betydningen står stille.",
    },
    {
      question: "Hva er en referent?",
      options: ["Størrelsen i verden som uttrykket peker ut", "Selve forholdet mellom det språklige uttrykket og verden utenfor språket", "Beskrivelsen som gjør at alle språkbrukere bruker ordet på samme måte", "Et annet ord med samme betydning"],
      explanation: "Riktig svar er at referenten er selve størrelsen uttrykket peker ut. Fellen er å svare med referansen, som er relasjonen og ikke endepunktet for den: referanse er forholdet, referent er tingen.",
    },
    {
      question: "Hvorfor viser ordet enhjørning at betydning og referanse må holdes fra hverandre?",
      options: ["Ordet har helt klar betydning uten å ha noen referent", "Ordet har en referent, men ingen betydning språkbrukerne er enige om", "Ordet skifter referent fra ytring til ytring", "Ordet har både betydning og referent, men de to faller uvanlig nær hverandre"],
      explanation: "Riktig svar er at ordet har en helt klar betydning samtidig som verden ikke tilbyr noen referent. Var de to størrelsene identiske, måtte ordet vært innholdstomt. Fellen er å snu forholdet og påstå at ordet mangler betydning.",
    },
    {
      question: "Hva er ekstensjonen til et uttrykk?",
      options: ["Hele mengden av ting uttrykket kan brukes riktig om", "Den ene tingen uttrykket peker ut i en bestemt ytring i en bestemt situasjon", "Rekkevidden ordet har i tid, altså hvor lenge det har vært i bruk", "Summen av overbegrepene ordet står under"],
      explanation: "Riktig svar er at ekstensjonen er hele mengden av ting uttrykket dekker. Den nærmeste fellen er referenten: hver referanse plukker ut ett medlem av ekstensjonen, mens ekstensjonen er hele samlingen.",
    },
    {
      question: "Hva kjennetegner et par uttrykk som har samme referent, men ulik betydning?",
      options: ["At identiteten mellom dem er en opplysning og ikke en selvfølge", "At de kan bytte plass i enhver setning uten endring", "At de begge mangler referent i verden", "At det ene er en type av det andre"],
      explanation: "Riktig svar er at identiteten er en opplysning: du kan kjenne begge uttrykkene fullt ut uten å vite at de treffer samme ting. Fellen er kravet om fri utbytting, som er kjennemerket på synonymi og ikke på felles referent.",
    },
    {
      question: "Hva er generisk referanse?",
      options: ["Bruk av et uttrykk om arten som helhet", "Bruk av et uttrykk om ett bestemt eksemplar som taleren kan peke på", "Bruk av et uttrykk som mangler referent i verden, slik som nissen", "Bruk av overbegrepet i stedet for underbegrepet der begge to går"],
      explanation: "Riktig svar er bruk om arten som helhet, som i setningen at kveita er en flatfisk. Fellen er spesifikk referanse, der du i prinsippet kan peke på det uttrykket treffer.",
    },
    {
      question: "Hva er et leksem?",
      options: ["Et ord som enhet i ordforrådet, uavhengig av bøyningsform", "Den konkrete ordformen slik den står bøyd i en bestemt tekst", "Den minste enheten som bærer betydning", "En gruppe ord som dekker samme saksområde"],
      explanation: "Riktig svar er ordet som ordforrådsenhet, slik at hest, hesten og hestene er ett leksem. Fellen er ordformen, som er den bøyde strengen du møter i teksten. Betydningsrelasjoner holder mellom leksemer.",
    },
    {
      question: "Hva er en betydningsrelasjon?",
      options: ["Et fast forhold mellom betydningene til to leksemer", "Forholdet mellom et uttrykk og den størrelsen det peker ut i verden", "Forholdet mellom taleren og lytteren slik ordvalget røper det", "Forholdet mellom en ordform og endelsene den kan ta i et paradigme"],
      explanation: "Riktig svar er at relasjonen holder mellom to leksemer og er en del av språksystemet. Fellen er referanserelasjonen, som knytter uttrykket til verden. Betydningsrelasjoner avgjøres med setningstester, ikke med observasjon.",
    },
    {
      question: "Hva er substitusjonstesten?",
      options: ["At de to ordene settes inn i samme setning og prøves ett om gangen", "At du sjekker om ordene har samme referent i situasjonen", "At du kjører type-malen i begge retninger", "At du setter ordene i en nektelsessetning"],
      explanation: "Riktig svar er at ordene settes inn i samme setning og prøves ett om gangen. Fellen er er-en-testen, som måler hyponymi og ikke synonymi. Substitusjonstesten avgjør om innholdet i setningen holder seg.",
    },
    {
      question: "Hva skiller full synonymi fra delvis synonymi?",
      options: ["Om det finnes minst én kontekst der byttet endrer noe", "Om de to ordene har samme antall stavelser og samme ordklasse", "Om ordene deler et overbegrep som begge kan sorteres under", "Om de to ordene har vært like lenge i språket og har samme opphav"],
      explanation: "Riktig svar er om det finnes minst én kontekst der byttet endrer noe. Finner du én, er synonymien delvis. Fellen er å lete etter formelle likheter som stavelsesantall og ordklasse, som er uten betydning for saken.",
    },
    {
      question: "Hvilket par er et klart tilfelle av komplementær antonymi?",
      options: ["gift og ugift", "varm og kald, som ligger i hver sin ende av en skala med mellomtrinn", "kjøpe og selge, som beskriver samme handel fra hver sin side", "pakke og pakke ut, der den andre handlingen fører tilbake til start"],
      explanation: "Riktig svar er gift og ugift, fordi nektelsen av det ene innebærer det andre og paret deler feltet i to uten rest. De tre andre parene er graderbare, konverse og reversive, og alle har mellomrom eller forløp som komplementære par mangler.",
    },
    {
      question: "Hvilken test avgjør raskest om et antonympar er graderbart eller komplementært?",
      options: ["Nektelsestesten: er verken X eller Y rart eller vanlig?", "Omskrivingstesten, der du bytter om rollene og ser om setningen er sann", "Er-en-testen, der du prøver type-malen", "Rekkefølgetesten, der du setter handlingene etter hverandre"],
      explanation: "Riktig svar er nektelsestesten: verken varmt eller kaldt er en helt vanlig opplysning, mens verken gift eller ugift blir motsigende. Omskrivingstesten hører til konvers antonymi, og rekkefølgetesten til reversiv.",
    },
    {
      question: "Hva kjennetegner konvers antonymi?",
      options: ["At de to ordene beskriver samme forhold fra hver sin side", "At ordene beskriver to hendelser der den andre opphever den første", "At ordene ligger i hver sin ende av en skala med mellomtrinn imellom", "At ordene deler feltet i to uten rest"],
      explanation: "Riktig svar er at ett og samme forhold beskrives fra to sider: solgte til er sann nøyaktig når kjøpte av er sann. Fellen er reversiv antonymi, der det er to hendelser etter hverandre og ikke én sett to ganger.",
    },
    {
      question: "Hvilket par er reversivt?",
      options: ["knytte og knytte opp", "lege og pasient, som beskriver samme relasjon fra hver sin side", "sann og usann, som deler feltet i to uten noe mellomrom", "dyr og billig, som ligger i hver sin ende av en skala"],
      explanation: "Riktig svar er knytte og knytte opp, fordi den andre handlingen fører tilbake til utgangstilstanden. Fellen er lege og pasient, som er konverst: der er det én relasjon sett fra to sider, ikke to handlinger i rekkefølge.",
    },
    {
      question: "Hva er hyponymi?",
      options: ["Relasjonen mellom et underbegrep og et overbegrep", "Relasjonen mellom en del og den helheten delen inngår i", "Relasjonen mellom ord på samme nivå under samme overbegrep", "Relasjonen mellom ord som betyr det samme overalt"],
      explanation: "Riktig svar er relasjonen mellom underbegrep og overbegrep, som mellom rose og blomst. Den nærmeste fellen er meronymi, som gjelder del og helhet. Skillet avgjøres ved å kjøre begge malene mot hverandre.",
    },
    {
      question: "Hva er kohyponymer?",
      options: ["Ord på samme nivå under ett og samme overbegrep i ordforrådet", "Ord i hver sin ende av én dimensjon, som varm og kald", "Ord som er deler av den samme helheten", "Ord som betyr det samme, men på ulikt stilnivå"],
      explanation: "Riktig svar er ord på samme nivå under samme overbegrep, som rose, tulipan og løvetann under blomst. Fellen er antonymi: kohyponymer utelukker hverandre, men de ligger side om side på en liste og ikke i hver sin ende av en akse.",
    },
    {
      question: "Hvordan kjører du er-en-testen riktig?",
      options: ["Malen om at X er en type Y prøves i begge retninger", "Malen om at X er en del av Y prøves i den retningen som gir mening", "De to ordene settes inn i samme setning", "Ordene settes i en nektelsessetning"],
      explanation: "Riktig svar er at malen kjøres i begge retninger, fordi det er ensrettetheten som avgjør: går den bare én vei, har du hyponymi. Fellen er del-av-malen, som måler meronymi.",
    },
    {
      question: "Hva er meronymi?",
      options: ["Relasjonen mellom en del og en helhet", "Relasjonen mellom et underbegrep og overbegrepet det sorterer under", "Relasjonen mellom ord som dekker og avgrenser samme saksområde", "Relasjonen mellom motsetninger langs én akse"],
      explanation: "Riktig svar er relasjonen mellom del og helhet, som mellom ratt og bil. Fellen er hyponymi: et ratt er ikke en slags bil, det er en bit av en. Kjør begge malene når paret er tvilsomt.",
    },
    {
      question: "Hva er forskjellen på et hyperonym og et holonym?",
      options: ["Hyperonymet omfatter en type, mens holonymet består av en del", "Hyperonymet er alltid det korteste av de to ordene", "Hyperonymet gjelder konkreter, holonymet abstrakter", "Hyperonymet står over ordet, holonymet under det"],
      explanation: "Riktig svar er at hyperonymet omfatter en type mens holonymet består av en del: blomst omfatter rose, mens hånd består blant annet av fingre. Fellen er å tro at forskjellen ligger i hva slags ting ordene betegner.",
    },
    {
      question: "Hva er denotasjonen til et ord?",
      options: ["Den nøkterne, saklige delen av betydningen", "Verdiladningen og assosiasjonene som følger med ordvalget", "Den konkrete tingen ordet peker ut i ytringen", "Alle bøyningsformene ordet kan opptre i"],
      explanation: "Riktig svar er den nøkterne, saklige delen av betydningen, som hund og bikkje deler fullt ut. Fellen er konnotasjonen, som er verdiladningen og nettopp det som skiller de to ordene fra hverandre.",
    },
    {
      question: "Hva er en prototypeffekt?",
      options: ["At noen medlemmer av en kategori oppleves som mer typiske enn andre", "At noen medlemmer strengt tatt ikke hører hjemme i kategorien", "At et ord får ny betydning gjennom en overføring", "At to ord med samme uttale skrives ulikt"],
      explanation: "Riktig svar er at noen medlemmer oppleves som mer typiske enn andre, slik spurv kommer før pingvin. Fellen er å lese effekten som et utsagn om medlemskap: en pingvin er fugl fullt ut, den er bare et mindre åpenbart eksempel.",
    },
    {
      question: "Hva er den viktigste grunnen til å skrive testsetningen ut i et klassifiseringssvar?",
      options: ["Fordi begrunnelsen er det som gir uttelling, ikke merkelappen", "Fordi et lengre svar generelt vurderes høyere enn et kort svar", "Fordi testsetningen viser at du kjenner undervisningens eksempler", "Fordi navnet ellers virker avskrevet"],
      explanation: "Riktig svar er at begrunnelsen er det som gir uttelling: navnet på relasjonen er billig å gjette, mens testen viser at du kan avgjøre saken selv. Fellen er å tro at lengde i seg selv teller, når det er etterprøvbarheten som gjør forskjellen.",
    },
  ],
  'exfac03-spr-6-2': [
    {
      question: "Hva er polysemi?",
      options: ["Én form med flere beslektede betydninger", "Én form med flere betydninger som ikke lar seg knytte sammen på noen måte", "To ord som uttales likt, men skrives ulikt, slik at bare tale gir forveksling", "Ett ord med uskarpe kanter"],
      explanation: "Riktig svar er én form med flere beslektede betydninger, der overføringen mellom dem lar seg identifiseres. Den nærmeste fellen er homonymi, der betydningene nettopp ikke lar seg knytte sammen.",
    },
    {
      question: "Hva kjennetegner homonymi?",
      options: ["At betydningene ikke lar seg knytte sammen gjennom noen gjenkjennelig overføring", "At betydningene henger sammen gjennom likhet eller nærhet", "At uttalen er lik mens skrivemåten skiller de to", "At skrivemåten er lik mens tonelaget skiller de to"],
      explanation: "Riktig svar er at betydningene ikke lar seg knytte sammen. Fellen er polysemi, der broen kan skrives ut. Skillet avgjøres med relaterbarhetstesten, ikke med en følelse av hvor ulike betydningene virker.",
    },
    {
      question: "Hva er homofoni?",
      options: ["Lik uttale, ulik skrivemåte", "Lik skrivemåte, ulik uttale, som når tonelaget skiller to ord fra hverandre", "Lik form i både uttale og skrift, med urelaterte betydninger", "Lik form i både uttale og skrift, med beslektede betydninger"],
      explanation: "Riktig svar er lik uttale og ulik skrivemåte, som i hjul og jul. Fellen er homografi, som er speilbildet: lik skrivemåte og ulik uttale. Leddet -foni forteller at det er lyden som er felles.",
    },
    {
      question: "Hva er homografi?",
      options: ["Lik skrivemåte, ulik uttale", "Lik uttale, ulik skrivemåte, slik at forvekslingen bare oppstår i tale", "Flere beslektede betydninger knyttet sammen av en identifiserbar overføring", "Flere urelaterte betydninger under én og samme form i skrift og tale"],
      explanation: "Riktig svar er lik skrivemåte og ulik uttale, som når hender om kroppsdeler og hender om det å skje skilles av tonelaget. Fellen er homofoni. Leddet -grafi forteller at det er skriften som er felles.",
    },
    {
      question: "Hva sier veiledningen fra H2025 om klassifiseringsoppgaven i semantikk?",
      options: ["At flere ulike konklusjoner kan godtas når de er godt begrunnet", "At bare én konklusjon regnes som riktig, mens begrunnelsen avgjør poengnivået", "At kandidaten bør unngå å drøfte alternative analyser for å spare tid", "At oppgaven vurderes etter hvor mange eksempler kandidaten rekker å nevne"],
      explanation: "Riktig svar er at flere ulike konklusjoner kan godtas når de er godt begrunnet, og at diskusjonen er viktigere enn hvilken konklusjon kandidaten lander på. Fellen er å tro at merkelappen er det som måles.",
    },
    {
      question: "Hva er relaterbarhetstesten?",
      options: ["Å prøve om broen mellom betydningene lar seg skrive ut", "Å sjekke om de to formene kommer fra samme ord historisk sett", "Å slå opp om ordboka fører formen som ett eller to oppslag", "Å bruke begge i én setning"],
      explanation: "Riktig svar er å prøve om broen mellom betydningene lar seg skrive ut som en overføring språkbrukere kjenner igjen. De tre andre er reelle tilleggskriterier, men de avgjør ikke saken alene slik relaterbarhetstesten gjør.",
    },
    {
      question: "Hva skiller metaforisk fra metonymisk betydningsoverføring?",
      options: ["Metaforen bygger på likhet, metonymien på nærhet", "Metaforen gjelder konkrete ord, mens metonymien bare gjelder abstrakte ord", "Metaforen er alltid fersk, mens metonymien alltid er leksikalisert i språket", "Metaforen hører til skrift"],
      explanation: "Riktig svar er at metaforen bygger på likhet mellom ulike områder, som foten av et fjell, mens metonymien bygger på nærhet innenfor samme sak, som skolen om bygningen og elevene. Fellen er å knytte skillet til hva slags ord det gjelder.",
    },
    {
      question: "Hva er forskjellen på et synkront og et diakront argument i denne sammenhengen?",
      options: ["Det synkrone spør hva brukerne ser i dag, det diakrone hva historien har gjort", "Det synkrone gjelder skriftspråket, mens det diakrone gjelder talespråket", "Det synkrone gjelder enkeltord, mens det diakrone gjelder hele setninger", "Det synkrone bygger på ordboka, mens det diakrone bygger på egen språkfølelse"],
      explanation: "Riktig svar er at det synkrone spør hva dagens språkbrukere kan se, mens det diakrone spør hva som har skjedd i språkets historie. Fellen er å knytte skillet til skrift mot tale. At de to kan gi motsatt svar, er nettopp opphavet til grensetilfellene.",
    },
    {
      question: "Hva er vaghet?",
      options: ["Én betydning med uskarpe kanter", "Flere betydninger som lytteren må velge mellom i den enkelte ytringen", "Flere måter å bygge opp den samme ytringen på", "En form som dekker to ord med hvert sitt opphav i språket"],
      explanation: "Riktig svar er én betydning med uskarpe kanter, som i ung og stor. Fellen er polysemi: der må lytteren velge mellom flere betydninger, mens vaghet bare gjør rekkevidden uklar.",
    },
    {
      question: "Hva er kryssetesten god for?",
      options: ["Å avsløre om to betydninger er skarpt skilt fra hverandre", "Å avgjøre om to former har samme opprinnelse i språkhistorien", "Å avgjøre hvilken av betydningene som er grunnbetydningen", "Å måle hvor mange oppslag ordboka fører formen under"],
      explanation: "Riktig svar er at testen avslører om betydningene er skarpt skilt: setningen om å passere banken og deretter banken blir komisk. Fellen er å tro at testen sier noe om opprinnelse, som er et helt annet kriterium.",
    },
    {
      question: "Hva er leksikalsk tvetydighet?",
      options: ["At ytringen kan leses på flere måter fordi ett ord er flertydig", "At ytringen kan bygges opp på flere måter uten at noe ord er flertydig", "At ordet har uskarpe kanter, slik at grensen for det er uklar", "At to ord uttales likt og bare skilles i skrift"],
      explanation: "Riktig svar er at ytringen kan leses på flere måter fordi ett av ordene har flere betydninger. Fellen er strukturell tvetydighet, der det er oppbygningen og ikke ordene som gir de to lesningene.",
    },
    {
      question: "Hva bør du gjøre når et ordpar er et grensetilfelle?",
      options: ["Skrive ut begge lesningene, velge én og si hva som ville endret valget", "Skrive at begge deler er mulig, og la det stå som svaret på oppgaven", "Velge den lesningen som er raskest å begrunne, og la den andre ligge", "Hoppe over spørsmålet og bruke tiden på oppgaver med sikre svar"],
      explanation: "Riktig svar er å skrive ut begge lesningene, velge én og si hva som ville endret valget. Fellen er å svare begge deler uten konklusjon: å nekte å velge er ikke drøfting, og oppgaven ber om et svar.",
    },
    {
      question: "Hva er grunnbetydningen til et polysemt ord?",
      options: ["Den betydningen de andre lar seg utlede fra", "Den betydningen som er mest brukt i dagligtale akkurat nå", "Den betydningen ordboka fører først under oppslaget", "Den eldste kjente bruken"],
      explanation: "Riktig svar er den betydningen de andre lar seg utlede fra, siden det er den som gir overføringen en retning. Fellen er å regne bruksfrekvens som avgjørende, men et ord kan godt brukes oftest i en avledet betydning.",
    },
    {
      question: "Hva er leksikalisering?",
      options: ["At en overført betydning er blitt så innarbeidet at den oppleves som selvstendig", "At et ord får en ny bøyning etter mønster fra en annen ordklasse", "At to ord med ulikt opphav ender opp med samme form i språket", "At et ord tas opp i ordboka etter en periode i uformell bruk"],
      explanation: "Riktig svar er at en overført betydning er blitt så innarbeidet at ingen føler at de bruker et bilde. Fellen er å tenke på ordbokopptak: leksikalisering handler om brukernes opplevelse, ikke om redaksjonelle beslutninger. Graden av leksikalisering er ofte selve stridsspørsmålet i et grensetilfelle.",
    },
    {
      question: "Hvorfor er ordbokkriteriet ikke nok alene?",
      options: ["Fordi ordbøker gjør ulike valg basert på den samme vurderingen du selv skal gjøre", "Fordi ordbøker sjelden oppgir hvilke betydninger et ord har", "Fordi ordbøker bare dekker skriftspråket og ikke talespråket", "Fordi ordbøker er utdaterte kort tid etter at de er utgitt"],
      explanation: "Riktig svar er at ordbøker gjør ulike valg, og at valget er resultatet av nettopp den avveiningen du selv skal føre. Kriteriet er derfor støtte, ikke erstatning for egen begrunnelse. Fellen er å behandle oppslagsstrukturen som en fasit.",
    },
    {
      question: "Hva er feil #9 i bokas feilregister?",
      options: ["Å tro at et klassifiseringsspørsmål har ett riktig svar", "Å svare på et klassifiseringsspørsmål helt uten begrunnelse", "Å gjengi lærebokas eksempler i stedet for å lage egne", "Å hoppe over ett av leddene i en sammensatt oppgave"],
      explanation: "Riktig svar er å tro at et klassifiseringsspørsmål har ett riktig svar. Fellen er å forveksle koden med den om manglende begrunnelse, som er en annen feil: den ene gjelder at begrunnelsen mangler, den andre at kandidaten ikke ser at flere konklusjoner kan forsvares.",
    },
    {
      question: "Hvilket par er et klart tilfelle av homofoni?",
      options: ["hjul og jul", "bank om pengeinstitusjonen og bank om elvebredden", "hender om kroppsdelene og hender i betydningen skjer", "fot om kroppsdelen og fot om nederste del av et fjell"],
      explanation: "Riktig svar er hjul og jul, fordi uttalen er lik og skrivemåten skiller. De tre andre er henholdsvis homonymi, homografi og polysemi, og alle tre har lik skrivemåte der homofoni krever ulik.",
    },
    {
      question: "Hva innebærer den doble lesningen som skriveteknikk?",
      options: ["At argumentet for begge kandidatanalysene føres før valget tas", "At svaret oppgir to konklusjoner og lar leseren velge mellom dem", "At ordparet prøves mot alle fire kategoriene uansett hva formene er", "At begrunnelsen skrives to ganger"],
      explanation: "Riktig svar er at argumentet for begge kandidatanalysene føres før valget tas. Fellen er å levere to konklusjoner: den doble lesningen ender alltid i ett valg, med en begrunnelse for hvorfor det ene argumentet veier tyngst.",
    },
    {
      question: "Hva er strukturell tvetydighet?",
      options: ["At ytringen kan bygges opp på mer enn én måte", "At ett av ordene i ytringen har mer enn én betydning", "At ordet i ytringen har uskarpe kanter i anvendelsen", "At ytringen kan uttales med to ulike tonelag"],
      explanation: "Riktig svar er at ytringen kan bygges opp på mer enn én måte, som når kikkerten kan høre til synsmåten eller til mannen. Fellen er leksikalsk tvetydighet, der det er ordet og ikke oppbygningen som gir de to lesningene.",
    },
    {
      question: "Hvorfor oppstår grensetilfeller mellom polysemi og homonymi?",
      options: ["Fordi kriteriene måler ulike ting og kan peke i hver sin retning", "Fordi oppgavene i denne sjangeren er dårlig formulert fra utformerens side", "Fordi kandidatene mangler språkhistorisk kunnskap på eksamensdagen", "Fordi begrepene brukes om hverandre"],
      explanation: "Riktig svar er at kriteriene måler ulike ting: relaterbarhet er synkront, opprinnelse er diakront, og de trenger ikke være enige. Fellen er å skylde på oppgaveteksten, når grensetilfellet er en egenskap ved språket selv.",
    },
  ],
  'exfac03-spr-6-3': [
    {
      question: "Hva kreves for at to leksemer skal være fullt synonyme?",
      options: ["At de kan bytte plass i enhver kontekst uten at noe endrer seg", "At de peker på det samme i verden i den situasjonen som er aktuell", "At de føres under samme oppslag i ordboka", "At de har samme opphav i språkhistorien"],
      explanation: "Riktig svar er utbyttbarhet i enhver kontekst, uten forskjell på noen dimensjon. Den nærmeste fellen er identisk referanse, som er nødvendig, men ikke tilstrekkelig — nettopp det er hjemlet som en feil i den nyeste terminen i arkivet.",
    },
    {
      question: "Hvorfor er identisk referanse ikke nok for full synonymi?",
      options: ["Fordi betydningen også omfatter ladning, passform og signal om taleren", "Fordi to ord aldri kan peke på nøyaktig det samme i verden", "Fordi referansen skifter fra ytring til ytring", "Fordi ordbøkene opererer med et strengere krav"],
      explanation: "Riktig svar er at betydningen omfatter mer enn hva ordet peker på: konnotasjon, bruksbetingelser og sosial betydning kommer i tillegg. Fellen er å påstå at ord ikke kan dele referent, for det kan de — det er nettopp forutsetningen for spørsmålet.",
    },
    {
      question: "Hva er konnotasjonen til et ord?",
      options: ["Verdiladningen og assosiasjonene ordvalget bærer med seg", "Den saklige delen av betydningen, uten ladning og uten signal om situasjon", "Hvilken situasjon og sjanger ordet hører hjemme i", "Hva ordvalget røper om forholdet mellom taler og lytter"],
      explanation: "Riktig svar er verdiladningen og assosiasjonene. De tre andre er reelle begreper i kapitlet — denotasjon, bruksbetingelser og sosial betydning — og forvekslingen med dem er nettopp det som gjør et synonymisvar uklart.",
    },
    {
      question: "Hva er bruksbetingelsene til et ord?",
      options: ["Hvilken situasjon, sjanger og formalitetsgrad ordet passer i", "Verdiladningen som følger med ordvalget når det brukes", "Hvilke andre ord det pleier å opptre sammen med", "Hvor mange betydninger ordet har i ordboka"],
      explanation: "Riktig svar er passformen: hvilken situasjon, sjanger og formalitetsgrad ordet hører hjemme i. Fellen er konnotasjonen, som gjelder ladning og ikke passform. Et ord kan være helt nøytralt ladet og likevel umulig i en gitt situasjon.",
    },
    {
      question: "Hva er sosial betydning?",
      options: ["Hva ordvalget røper om taleren og forholdet til lytteren", "Hvilken samfunnsgruppe ordet historisk sett har blitt brukt om", "Hvor utbredt ordet er i befolkningen som helhet", "Hvilken holdning taleren har til saken det snakkes om"],
      explanation: "Riktig svar er hva ordvalget røper om taleren selv og om forholdet til lytteren. Den nærmeste fellen er konnotasjonen, som gjelder holdningen til saken. Sosial betydning gjelder forholdet mellom personene, ikke synet på saken.",
    },
    {
      question: "Hva er det første trinnet i prosedyren for et synonymisvar?",
      options: ["Å fastslå at referansen er den samme", "Å prøve paret mot konnotasjonen for å se om det ene er ladet", "Å prøve paret mot bruksbetingelsene i to ulike situasjoner", "Å si hvilken av de tre dimensjonene som avgjorde"],
      explanation: "Riktig svar er å fastslå at referansen er den samme. Er den ikke det, er paret ikke synonymt i det hele tatt, og dimensjonsanalysen blir feilrettet arbeid. Trinnet er også et filter, ikke bare en formalitet.",
    },
    {
      question: "Hvilken dimensjon avgjør i paret sparsommelig og gjerrig?",
      options: ["Konnotasjonen, siden ordene er ulikt ladet om samme atferd", "Bruksbetingelsene, siden ordene hører hjemme i hvert sitt register", "Den sosiale betydningen, siden valget plasserer taleren i en gruppe", "Denotasjonen, siden atferden er ulik"],
      explanation: "Riktig svar er konnotasjonen: den samme atferden roses av det ene ordet og kritiseres av det andre. Fellen er å svare denotasjon, men atferden er den samme — det er synet på den som skifter.",
    },
    {
      question: "Hvilken dimensjon avgjør i paret tannlege og odontolog?",
      options: ["Bruksbetingelsene, siden det ene ordet hører til fagspråket", "Konnotasjonen, siden det ene ordet er tydelig mer positivt ladet enn det andre", "Denotasjonen, siden de to ordene dekker to ulike yrkesgrupper", "Ingen av dem, siden paret er et tilfelle av full synonymi"],
      explanation: "Riktig svar er bruksbetingelsene: ordene er like i ladning, men det ene hører til fagspråket. Fellen er konnotasjonen — det er ingenting rosende eller nedvurderende ved fagordet, det er bare knyttet til et bestemt felt.",
    },
    {
      question: "Hva er en eufemisme?",
      options: ["Et ord valgt for å dempe noe ubehagelig", "Et ord valgt for å forsterke det negative i det som omtales", "Et ord som hører til et bestemt yrkes eget ordforråd", "Et ord som brukes i to beslektede betydninger"],
      explanation: "Riktig svar er et ord valgt for å dempe, som bortgang for død. Fellen er dysfemismen, som er motstykket: der snus ladningen den andre veien mens denotasjonen holder seg like uendret.",
    },
    {
      question: "Hva er en dysfemisme?",
      options: ["Et ord valgt for å forsterke det negative", "Et ord valgt for å dempe eller pynte på noe ubehagelig", "Et ord som er blitt gammeldags og er på vei ut av bruk", "Et ord som brukes bare innenfor ett bestemt fagfelt"],
      explanation: "Riktig svar er et ord valgt for å forsterke det negative, som kjerre om en bil. Fellen er eufemismen. Merk at dysfemismen fortsatt har saklig innhold og kan brukes til å referere — det er det som skiller den fra et rent skjellsord.",
    },
    {
      question: "Hva skiller stilnivå fra konnotasjon?",
      options: ["Stilnivået gjelder formalitet, konnotasjonen gjelder ladning", "Stilnivået gjelder skriftspråket, mens konnotasjonen gjelder talespråket", "Stilnivået er fast, mens konnotasjonen skifter fra ytring til ytring", "Stilnivået gjelder enkeltord, mens konnotasjonen gjelder hele setninger"],
      explanation: "Riktig svar er at stilnivået gjelder formalitet mens konnotasjonen gjelder ladning. Fellen er å slå de to sammen, og da ender du med å kalle alle uformelle ord negativt ladede: stryke med er lavt i stil, men ikke nedsettende.",
    },
    {
      question: "Hva er en kollokasjon?",
      options: ["En fast forbindelse mellom ord som opptrer sammen", "En situasjonstype som et helt ordforråd hører hjemme i", "En overføring av betydning basert på likhet mellom to områder", "Et ord som dekker to urelaterte betydninger"],
      explanation: "Riktig svar er en fast forbindelse mellom ord, som å holde et foredrag. Kollokasjonen er et effektivt argument for delvis synonymi, fordi den gir deg én bestemt kontekst der byttet ikke går — sterk kaffe tåler ikke kraftig.",
    },
    {
      question: "Hva er et markert ordvalg?",
      options: ["Et ord som er valgt framfor standarden, slik at valget bærer informasjon", "Et ord som er ladet negativt i alle sammenhenger det brukes i", "Et ord som bare finnes i skriftlig språk", "Et ord som har flere beslektede betydninger"],
      explanation: "Riktig svar er et ord valgt framfor standarden, slik at selve valget sier noe: fortære framfor spise. Fellen er å sette likhetstegn med negativ ladning — et ord kan være markert av rene stilgrunner uten å være ladet i det hele tatt.",
    },
    {
      question: "Hva er feil #13 i bokas feilregister?",
      options: ["Å definere synonymi som identisk referanse", "Å svare på et klassifiseringsspørsmål uten begrunnelse", "Å tro at et klassifiseringsspørsmål har ett riktig svar", "Å gi et eksempel uten å begrunne det"],
      explanation: "Riktig svar er å definere synonymi som identisk referanse. De tre andre er reelle koder i registeret, men de gjelder andre feil: manglende begrunnelse, troen på ett riktig svar, og ubegrunnede eksempler.",
    },
    {
      question: "Hvor sterkt er belegget for kravet om at full synonymi krever mer enn identisk referanse?",
      options: ["Det er dokumentert i den nyeste terminen i arkivet", "Det går igjen i alle sensorveiledningene i arkivet", "Det er dokumentert i to poengsatte terminer", "Det er en påstand boka bygger på pensum alene"],
      explanation: "Riktig svar er at kravet er dokumentert i den nyeste terminen i arkivet. Fellen er å oppgradere belegget til noe som har stått lenge: én termin er én termin, og boka skal ikke påstå mer enn det.",
    },
    {
      question: "Hva er den beste måten å avslutte et synonymisvar på?",
      options: ["Ved å si hvilken av de tre dimensjonene som avgjorde", "Ved å slå fast at ordene peker på det samme i verden", "Ved å nevne at ordene har ulik konnotasjon", "Ved å ramse opp alle tre dimensjonene i tur og orden"],
      explanation: "Riktig svar er å si hvilken dimensjon som avgjorde. Fellen er å ramse opp alle tre uten å rangere dem: da har du vist at du kjenner apparatet, men ikke at du kan bruke det på akkurat dette paret.",
    },
    {
      question: "Hvordan skal du behandle et ordpar der du er i tvil om synonymien er full?",
      options: ["Merke det som omstridt, skrive ut begge lesningene og likevel konkludere", "Skrive at begge deler er mulig og la spørsmålet stå åpent", "Velge den lesningen som er raskest å begrunne", "Hoppe over paret og bruke tiden på sikrere oppgaver"],
      explanation: "Riktig svar er å merke paret som omstridt, skrive ut begge lesningene og likevel konkludere. Fellen er å la spørsmålet stå åpent: å nekte å velge er ikke drøfting, og oppgaven ber om et svar.",
    },
    {
      question: "Hvorfor peker bruksbetingelser og sosial betydning videre mot pragmatikken?",
      options: ["Fordi de handler om situasjonen og om forholdet mellom taler og lytter", "Fordi de bare gjelder muntlig språk og ikke skriftlig språk", "Fordi de er vanskeligere å definere enn konnotasjon", "Fordi de gjelder setninger og ikke enkeltord"],
      explanation: "Riktig svar er at de to dimensjonene handler om situasjonen ordet brukes i og om forholdet mellom dem som snakker — nettopp det pragmatikken studerer. Fellen er å knytte skillet til muntlig mot skriftlig, som er en helt annen akse.",
    },
  ],
  'exfac03-spr-7-1': [
    {
      question: "Hva er språklig kontekst?",
      options: ["Ordene, setningene og replikkene som står før og etter ytringen", "Den konkrete situasjonen ytringen faller i", "De felles forutsetningene deltakerne har med seg inn i samtalen, og som gjør ytringen tolkbar", "Det språksystemet ytringen er formulert i, altså grammatikken og ordforrådet den trekker på"],
      explanation: "Riktig svar er at språklig kontekst er de språklige omgivelsene: det som står før og etter i teksten eller samtalen. Den nærmeste fellen er å svare situasjonskontekst, som også ligger utenfor ytringen, men som består av deltakere, sted, tid og aktivitet i stedet for tekst. Prøven er om opplysningen kan siteres: kan den det, er den språklig kontekst.",
    },
    {
      question: "Hvilket kontekstnivå kunne i prinsippet vært fanget på et videoopptak av hendelsen?",
      options: ["Situasjonskonteksten", "Kulturkonteksten", "Den språklige konteksten, fordi replikkene før og etter ville blitt tatt opp på lyden", "Alle tre nivåene, siden et opptak fanger både tekst, situasjon og de forutsetningene som brukes"],
      explanation: "Riktig svar er situasjonskonteksten: deltakere, sted, tid og aktivitet er nettopp det et opptak fanger. Den nærmeste fellen er kulturkonteksten, som riktignok får følger man kan se, men som selv ligger i hodet på deltakerne og ikke i rommet. Filmprøven er derfor en brukbar måte å skille de to ytre nivåene på.",
    },
    {
      question: "Hva kjennetegner et deiktisk uttrykk?",
      options: ["Referenten avhenger fullstendig av hvem som ytrer setningen, på hvilket sted og på hvilket tidspunkt det skjer", "Uttrykket har flere leksikalske betydninger, og konteksten velger mellom dem for oss", "Uttrykket henter innholdet sitt fra et annet uttrykk som er nevnt tidligere i teksten", "Uttrykket er så vagt at det må presiseres med en tilleggsopplysning for å bli forståelig"],
      explanation: "Riktig svar er at referenten avhenger av talesituasjonen: jeg, her og i morgen har ingen fast referent i det hele tatt. Den nærmeste fellen er å blande deiksis med flertydighet — et ord som bank har to leksikalske betydninger å velge mellom, mens her ikke har noen før situasjonen fyller det. Blander man dem, svarer man semantisk på et pragmatisk spørsmål.",
    },
    {
      question: "Hvor ligger det deiktiske sentrumet som hovedregel?",
      options: ["Hos taleren, på talestedet, i taleøyeblikket", "Hos mottakeren, der ytringen tolkes", "I det punktet samtalen dreier seg om, uavhengig av hvor deltakerne befinner seg fysisk", "I den institusjonen eller rollen avsenderen representerer når ytringen blir framført"],
      explanation: "Riktig svar er at sentrum som hovedregel er taleren, talestedet og taleøyeblikket. Fellen er å tro at sentrum ligger hos mottakeren: det skjer, men bare når det er flyttet dit, slik en bruksanvisning gjør når den skriver skru til høyre. At sentrum kan flyttes, er nettopp det som gjør begrepet verdt å nevne i et svar.",
    },
    {
      question: "I «Naboen kjøpte en elsykkel. Den står alltid ulåst» — hva er *en elsykkel*?",
      options: ["Antesedenten", "Anaforen", "Et deiktisk uttrykk, fordi det bare kan tolkes av noen som ser sykkelen det gjelder", "En presupposisjon, ettersom leseren må ta for gitt at naboen faktisk eier en sykkel"],
      explanation: "Riktig svar er at *en elsykkel* er antesedenten — det tidligere uttrykket som anaforen *den* henter innholdet sitt fra. Den nærmeste fellen er å bytte om på rollene: anaforen er det tilbakepekende uttrykket, altså *den*. Paret er den reneste demonstrasjonen av språklig kontekst i arbeid, siden ingen kunnskap om verden kan fylle *den*.",
    },
    {
      question: "Hva er kulturkontekst?",
      options: ["De felles forutsetningene som gjør ytringen tolkbar uten å bli nevnt", "Den nasjonale bakgrunnen til deltakerne, altså hvilket land og språksamfunn de kommer fra", "De språklige konvensjonene som avgjør hvilke ord som er høflige i en gitt sammenheng", "Den samlede kunnskapen om verden som et språksamfunn har nedfelt i ordforrådet sitt"],
      explanation: "Riktig svar er de felles forutsetningene taleren regner med uten å nevne dem. Den nærmeste fellen er å lese kulturkontekst som nasjonalkultur: en arbeidsplass, et fagmiljø og et idrettslag har hver sin kulturkontekst, og de fleste misforståelsene skjer mellom to avdelinger i samme land.",
    },
    {
      question: "Hva skiller situasjonskontekst fra kulturkontekst?",
      options: ["Situasjonen kan endre seg mens samtalen pågår, bakgrunnen deltakerne kom med kan ikke", "Situasjonen gjelder muntlig språk, mens kulturkonteksten bare er relevant for skriftlige tekster", "Situasjonen er den kulturelt nøytrale delen av konteksten", "Situasjonen gjelder rollene, kulturkonteksten stedet"],
      explanation: "Riktig svar er at situasjonen kan skifte underveis mens den delte bakgrunnen følger deltakerne uansett. Den nærmeste fellen er å legge rollene til det ene nivået og stedet til det andre — begge deler hører til situasjonen. Flytteprøven avgjør: det som ville vært felles i en annen by, er kulturkontekst.",
    },
    {
      question: "Hva er en presupposisjon?",
      options: ["En forutsetning som taleren behandler som allerede avgjort, og som overlever nektelse av hele setningen", "En slutning mottakeren trekker fordi taleren antas å bidra slik samtalen krever på dette punktet", "En påstand taleren framsetter uten belegg, og som mottakeren derfor står fritt til å avvise", "En opplysning som må hentes fra teksten foran for at pronomenet skal kunne løses opp"],
      explanation: "Riktig svar er en forutsetning som behandles som avgjort og som overlever nektelse: både «jeg har sluttet å sykle» og «jeg har ikke sluttet å sykle» forutsetter at syklingen fant sted. Den nærmeste fellen er å blande den med det som blir sagt — en påstand kan bestrides direkte, mens presupposisjonen må avvises med et eget grep.",
    },
    {
      question: "Hva er forskjellen på setningsmening og ytringsmening?",
      options: ["Setningsmeningen ligger i ord og grammatikk, ytringsmeningen i det taleren formidlet her", "Setningsmeningen er den bokstavelige lesningen, mens ytringsmeningen alltid er en overført betydning", "Setningsmeningen gjelder skriftspråket, mens ytringsmeningen er den betydningen tale får i samtale", "Setningsmeningen er den betydningen ordboka oppgir, mens ytringsmeningen er talerens personlige assosiasjoner"],
      explanation: "Riktig svar er at setningsmeningen følger av ord og grammatikk, mens ytringsmeningen er det taleren formidlet ved å si den i denne situasjonen. Fellen er å gjøre skillet til bokstavelig mot overført: *Har du klokke?* er ikke et bilde, den er et spørsmål brukt som en anmodning. Skillet er arbeidsdelingen mellom semantikk og pragmatikk.",
    },
    {
      question: "Hvilket nivå gjør hovedarbeidet i ytringen «Jeg er tilbake om en time», skrevet på en lapp uten navn?",
      options: ["Situasjonskonteksten", "Den språklige konteksten, siden setningen må leses mot det som ellers står på lappen", "Kulturkonteksten, fordi leseren må vite hva det innebærer å være borte fra en arbeidsplass", "Ingen av nivåene"],
      explanation: "Riktig svar er situasjonskonteksten: *jeg* og *en time* er person- og tidsdeiktiske, og lappen er ubrukelig uten å vite hvem som skrev den og når. Den nærmeste fellen er å si at setningen er forståelig i seg selv — den er semantisk gjennomsiktig, men kan likevel ikke handles på, og det er nettopp forskjellen mellom setningsmening og ytringsmening.",
    },
    {
      question: "Hva er sosial deiksis?",
      options: ["Språklige valg som signaliserer forholdet mellom deltakerne", "Pronomen og andre uttrykk som peker ut hvem taleren og adressaten i samtalen er", "Uttrykk som viser til grupper og institusjoner i stedet for til enkeltpersoner i rommet", "Den delen av ordforrådet som bare brukes innenfor en bestemt sosial gruppe eller yrkesgruppe"],
      explanation: "Riktig svar er språklige valg som signaliserer rang, avstand og høflighet mellom deltakerne, slik åpningen *Hei!* og åpningen *Til rette vedkommende* gjør. Den nærmeste fellen er persondeiksis, som peker ut hvem deltakerne er — sosial deiksis sier hva slags forhold de står i. Ett og samme pronomen kan gjøre begge deler.",
    },
    {
      question: "Hva peker et diskursdeiktisk uttrykk som *som nevnt over* på?",
      options: ["Et sted i teksten eller samtalen selv", "Det antesedenten viser til", "Talerens eget ståsted i rommet, slik andre stedsdeiktiske uttrykk også gjør det", "En forutsetning som er felles for begge parter og som derfor ikke trenger å gjentas"],
      explanation: "Riktig svar er at diskursdeiksis peker på deler av teksten eller samtalen som språklig objekt. Den nærmeste fellen er anaforen: den henter innholdet sitt fra antesedenten og viser til det samme som den, mens diskursdeiksisen peker på selve tekststykket. I «Han sa at han kom. Det var en løgn» gjelder *det* utsagnet, ikke personen.",
    },
    {
      question: "Hva er det avgjørende trinnet i en kontekstanalyse, det som skiller et svar som løftes fra et som passerer?",
      options: ["Å skrive ut, for hvert enkelt nivå, hva som skjer med tolkningen av ytringen når nettopp det nivået fjernes", "Å liste opp alle tre nivåene med hver sin presise definisjon før eksempelet presenteres", "Å oppgi så mange deiktiske uttrykk som mulig, slik at bredden i analysen kommer fram", "Å plassere ytringen i riktig situasjonstype før de enkelte kontekstnivåene behandles"],
      explanation: "Riktig svar er den kontrafaktiske setningen: uten dette nivået ville leseren ikke kunne avgjøre hva ytringen gjaldt. Den nærmeste fellen er å tro at fullstendige definisjoner er nok — de viser at du har pugget, ikke at du har analysert. Definisjonene er nødvendige, men det er fjerningsprøven som demonstrerer mekanismen.",
    },
    {
      question: "Hva er feil #5 i denne sammenhengen, altså å hoppe over ett av oppgavens ledd?",
      options: ["Å behandle to av tre kontekstnivåer når oppgaven ber om alle", "Å gi eksempler uten å si hva de viser", "Å bruke ordet kontekst som samlebetegnelse i stedet for å navngi det aktuelle nivået", "Å forveksle et deiktisk uttrykk med et ord som har flere leksikalske betydninger"],
      explanation: "Riktig svar er å behandle to av tre nivåer, og det er kulturkonteksten som oftest ryker fordi den er usynlig når den virker. Den nærmeste fellen er feil #6, å gi eksempler uten begrunnelse — det er en annen svakhet, som gjelder kvaliteten på leddene du faktisk leverte, ikke at et ledd mangler.",
    },
    {
      question: "Hvorfor holder det ikke å skrive at «betydningen avhenger av konteksten»?",
      options: ["Påstanden er sann om enhver ytring og skiller derfor ingenting fra noe annet", "Påstanden er faglig uriktig", "Påstanden hører hjemme i semantikken og er derfor plassert i feil del av faget", "Påstanden mangler et eksempel, og et eksempel er obligatorisk i enhver redegjørelse"],
      explanation: "Riktig svar er at utsagnet gjelder alt og derfor ikke forklarer noe. Den nærmeste fellen er å kalle det uriktig: det er faktisk sant, og det er nettopp derfor det er verdiløst som svar. Ordet kontekst er navnet på spørsmålet, og svaret er hvilket nivå som gjorde arbeidet.",
    },
    {
      question: "Hva er felles bakgrunnskunnskap?",
      options: ["Det utsnittet av kulturkonteksten to samtalepartnere faktisk deler", "Den samlede kunnskapen om verden som er nedfelt i det språket begge parter snakker", "Den kunnskapen taleren har og mottakeren mangler, og som derfor må formidles eksplisitt", "Alle opplysningene som er nevnt tidligere i samtalen, og som derfor kan forutsettes kjent"],
      explanation: "Riktig svar er det utsnittet av kulturkonteksten de to faktisk deler, og det er dette utsnittet som styrer hvor mye taleren må si. Den nærmeste fellen er å blande det med den språklige konteksten: opplysninger som er nevnt tidligere i samtalen, er tekst, ikke delt bakgrunn. «Har du sjekket 214?» virker på en kollega, men ikke på en vikar.",
    },
    {
      question: "Hvordan står kontekststoffet i arkivet for dette emnet?",
      options: ["Som eget spørsmål i 1 av 6 terminer, men absorbert i pragmatikken, som står i 4 av 6 terminer", "Som eget spørsmål i 4 av 6 terminer, altså like ofte som semantikken og språktypologien gjør det", "Som fast innslag i alle terminene, siden enhver oppgave i emnet forutsetter kontekstbegrepet", "Som et spørsmål uten poengvekt i noen termin, og derfor uten betydning for karakteren"],
      explanation: "Riktig svar er at kontekst er eget spørsmål i 1 av 6 terminer og 1 av 45 spørsmål, mens stoffet lever videre i pragmatikken, som står i 4 av 6 terminer og er 13 av 114 poeng. Den nærmeste fellen er å oppgradere kontekstraden til pragmatikkens frekvens — leser man radene sammen, blir tallet 5 av 6 terminer, men boka holder seg til 4 av 6 terminer som hovedtall.",
    },
    {
      question: "Hva er forskjellen på en setning og en ytring?",
      options: ["Ytringen har en taler, et sted og et tidspunkt, mens setningen er en abstrakt språklig enhet som kan ytres mange ganger", "Ytringen er alltid muntlig, mens setningen er den skriftlige formen av det samme innholdet", "Ytringen er en fullstendig replikk, mens setningen er den grammatiske enheten inne i den", "Ytringen er den betydningen taleren mente, mens setningen er den betydningen mottakeren fikk"],
      explanation: "Riktig svar er at ytringen er én forekomst i verden, med taler, sted og tidspunkt, mens setningen er den abstrakte enheten som kan ytres tusen ganger. Den nærmeste fellen er å gjøre skillet til muntlig mot skriftlig — en lapp på et kjøleskap er også en ytring. Er du i tvil i et svar, spør om det du beskriver har et tidspunkt.",
    },
    {
      question: "Hvilke tre jobber gjør konteksten i tolkningen av en ytring?",
      options: ["Den fyller ut tomme uttrykk, velger mellom flere betydninger og legger til usagt innhold", "Den oversetter, presiserer og korrigerer det taleren har sagt, slik at ytringen blir entydig", "Den skaper betydning, formidler betydning og lagrer betydning for senere bruk i samtalen", "Den binder ytringen til teksten, til situasjonen og til den kulturen deltakerne tilhører"],
      explanation: "Riktig svar er utfylling, valg og tillegg. Den nærmeste fellen er alternativet som ramser opp de tre nivåene i stedet for de tre jobbene — nivåene sier hvor opplysningen kommer fra, jobbene sier hva den brukes til. Bare tillegget er valgfritt for forståelsen, og nettopp det er inngangen til samarbeidsprinsippet.",
    },
    {
      question: "En kunde sier «Det går fint» når en ansatt tilbyr å bære varene ut. Hvilket nivå gjør at dette leses som et avslag?",
      options: ["Kulturkonteksten, der uttrykket er et konvensjonelt høflig nei", "Situasjonskonteksten alene, siden det er tilbudet i rommet som gjør ytringen til et svar", "Den språklige konteksten alene, ettersom setningen står som svar på et tilbud i replikken foran", "Den semantiske betydningen av *fint*, som i norsk bærer en nektende komponent i slike svar"],
      explanation: "Riktig svar er kulturkonteksten: at *Det går fint* er et konvensjonelt høflig avslag, er en delt forutsetning som ikke kan ses i rommet. De to andre nivåene bidrar også — tilbudet gjør ytringen til et svar — men de forklarer ikke hvorfor svaret er nektende, og det er nettopp det spørsmålet gjelder.",
    },
  ],
  'exfac03-spr-7-2': [
    {
      question: "Hva kjennetegner en performativ ytring?",
      options: ["Den utfører nettopp den handlingen den nevner, i selve det øyeblikket den blir ytret av taleren", "Den beskriver en handling taleren utfører samtidig med at ytringen framsettes", "Den formidler et budskap som mottakeren må tolke ut fra situasjonen den falt i", "Den inneholder et verb som betegner en handling, uansett hvilken form verbet står i"],
      explanation: "Riktig svar er at ytringen utfører handlingen den nevner. Den nærmeste fellen er å si at den beskriver en samtidig handling — det ville gjort den konstativ, altså noe som kan være sant eller usant. Poenget er at ordene er handlingen, ikke en rapport om den.",
    },
    {
      question: "Hvorfor kan ikke en performativ ytring være sann eller usann?",
      options: ["Fordi den ikke beskriver noe saksforhold som kan prøves mot verden", "Fordi taleren mener det som blir sagt", "Fordi den står i første person entall presens", "Fordi mottakeren ikke kan kontrollere om taleren faktisk har den myndigheten som kreves"],
      explanation: "Riktig svar er at den ikke beskriver noe saksforhold, og da finnes det ingenting den kan stemme eller ikke stemme med. Den nærmeste fellen er å blande dette med oppriktighet — en uoppriktig performativ er ikke usann, den er uredelig. Prøven for performativer er vellykkethet, ikke sannhet.",
    },
    {
      question: "Hva er en konstativ ytring?",
      options: ["En ytring som beskriver et saksforhold og kan være sann eller usann", "En ytring som bekrefter noe taleren tidligere har lovt eller erklært overfor mottakeren", "En ytring uten performativt verb", "En ytring som slår fast en regel eller et forhold som gjelder fra det øyeblikket den sies"],
      explanation: "Riktig svar er at den konstative beskriver et saksforhold og kan prøves mot verden. Den nærmeste fellen er å definere den negativt som «uten performativt verb» — også setninger uten et slikt verb kan være performative, slik en dommers *Du er ute* er det. Skillet går på om ytringen kan bestrides som usann.",
    },
    {
      question: "Hva skiller en eksplisitt fra en implisitt performativ?",
      options: ["Den eksplisitte navngir handlingen med et verb, den implisitte gjør den bare", "Den implisitte forplikter mindre enn den eksplisitte", "Den eksplisitte krever en institusjonell ramme, mens den implisitte kan brukes i helt uformelle samtaler", "Den eksplisitte er alltid skriftlig og etterprøvbar, mens den implisitte hører hjemme i muntlig omgang"],
      explanation: "Riktig svar er at den eksplisitte navngir handlingen med et performativt verb i første person entall presens, mens den implisitte utfører den uten å nevne den. Den nærmeste fellen er å tro at den implisitte forplikter mindre — *Jeg tar den vakten* forplikter like mye som *Jeg lover å ta den vakten*. Forskjellen ligger i formen, ikke i virkningen.",
    },
    {
      question: "Hva prøver herved-prøven?",
      options: ["Om ytringen er en eksplisitt performativ", "Om taleren har den autorisasjonen som handlingen i ytringen forutsetter for å virke", "Om ytringen kan bestrides av mottakeren som usann eller ugyldig i den gitte situasjonen", "Om ytringen er performativ"],
      explanation: "Riktig svar er at prøven avgjør om ytringen er en eksplisitt performativ: blir setningen naturlig med ordet *herved* satt inn, er den det. Den nærmeste fellen er å tro at prøven fanger alle performativer — den fanger bare de eksplisitte, og en implisitt performativ som *Du er ute* består den ikke.",
    },
    {
      question: "Hvilke fire betingelser bruker boka som vellykkethetsbetingelser?",
      options: ["Anerkjent framgangsmåte, riktige omstendigheter, riktig person, og korrekt og fullstendig utførelse av den", "Klar formulering, riktig tidspunkt, oppriktig hensikt og en mottaker som forstår hva som blir sagt", "Riktig setningstype, performativt verb, riktig person og en mottaker som godtar handlingen", "Institusjonell ramme, skriftlig dokumentasjon, riktig person og en virkning som kan påvises"],
      explanation: "Riktig svar er anerkjent framgangsmåte, riktige omstendigheter, riktig person og korrekt og fullstendig utførelse. Den nærmeste fellen setter inn oppriktighet blant de fire — oppriktighet er en betingelse, men den virker annerledes, siden svikt der gir et misbruk og ikke et feilslag.",
    },
    {
      question: "Hva er talerens autorisasjon?",
      options: ["Den tildelte myndigheten taleren må ha for at den performative ytringen skal virke", "Den personlige tyngden og troverdigheten taleren har opparbeidet seg i miljøet sitt", "Retten til å uttale seg om saken, som følger av at taleren er direkte berørt av den", "Bekreftelsen fra mottakeren om at hun godtar at taleren utfører handlingen overfor henne"],
      explanation: "Riktig svar er den tildelte myndigheten innenfor en ordning andre anerkjenner. Den nærmeste fellen er personlig autoritet: en trener kan ha stor tyngde i garderoben uten å kunne utvise noen fra kampen. Autoritet er innflytelse, autorisasjon er formell rett innenfor framgangsmåten.",
    },
    {
      question: "En gjest i et bryllup sier vielsesformelen til brudeparet. Hvilken betingelse svikter?",
      options: ["Betingelsen om riktig person", "Omstendighetsbetingelsen", "Betingelsen om korrekt og fullstendig utførelse, fordi seremonien ikke er gjennomført slik den skal", "Oppriktighetsbetingelsen, ettersom gjesten ikke mener alvor med det hun sier til paret"],
      explanation: "Riktig svar er betingelsen om riktig person, altså talerens autorisasjon: stedet, tiden, paret og ordene er alle på plass, og bare vigselsretten mangler. Den nærmeste fellen er omstendighetene — men de er nettopp de rette, og det er derfor eksempelet viser så tydelig hvorfor autorisasjonen er en egen betingelse.",
    },
    {
      question: "Hva er forskjellen på et feilslag og et misbruk?",
      options: ["Ved feilslag blir handlingen ikke til i det hele tatt; ved misbruk blir den til, men taleren er uoppriktig i den", "Ved feilslag har taleren gjort en formell feil, mens misbruk betyr at hun har brutt loven med vilje", "Ved feilslag mislykkes handlingen delvis, mens den ved misbruk mislykkes fullstendig og uopprettelig", "Ved feilslag har mottakeren misforstått ytringen, mens misbruk skyldes at taleren formulerte seg uklart"],
      explanation: "Riktig svar er at feilslag betyr at handlingen ikke ble til, mens misbruk betyr at den ble til uten den holdningen den forutsetter. Den nærmeste fellen er å se dette som to grader av samme svikt — de er kvalitativt ulike. Prøven er om det finnes noe å bryte i etterkant: et uoppriktig løfte kan brytes, fordi løftet faktisk ble gitt.",
    },
    {
      question: "Hvorfor virker oppriktighetsbetingelsen annerledes enn de fire kjernebetingelsene?",
      options: ["Handlingen blir til likevel, men den er hul", "Den gjelder bare for uformelle performativer som løfter og beklagelser, ikke for formelle vedtak", "Den kan ikke kontrolleres av andre, og derfor har den ingen betydning for om ytringen lykkes", "Den må være oppfylt før ytringen sies"],
      explanation: "Riktig svar er at handlingen blir til selv om oppriktigheten svikter, og at den da er hul framfor mislykket. Den nærmeste fellen er å si at betingelsen er uten betydning fordi den ikke kan kontrolleres — den har stor betydning, siden det er nettopp den som skiller et brutt løfte fra et løfte som aldri ble gitt.",
    },
    {
      question: "En møteleder erklærer et forslag vedtatt mens stemmene fortsatt telles. Hvilken betingelse svikter?",
      options: ["Betingelsen om korrekt og fullstendig utførelse", "Betingelsen om riktig person", "Betingelsen om en anerkjent framgangsmåte, fordi det ikke finnes noen ordning for å vedta forslag slik", "Oppriktighetsbetingelsen, ettersom møtelederen ikke kan vite om resultatet blir slik hun sier"],
      explanation: "Riktig svar er utførelsesbetingelsen: et ledd i framgangsmåten, den avsluttede opptellingen, er hoppet over. Den nærmeste fellen er personbetingelsen — møtelederen har autorisasjonen, og det er nettopp derfor svikten ligger i gjennomføringen. Vedtaket er ikke fattet uansett hvilken vei opptellingen ender.",
    },
    {
      question: "Hva er illokusjonen i en ytring?",
      options: ["Handlingen som utføres i det å ytre setningen", "Den virkningen ytringen faktisk får på mottakeren, som at hun blir overbevist eller går sin vei", "Selve det å ytre en meningsfull setning", "Den bokstavelige betydningen av setningen"],
      explanation: "Riktig svar er handlingen som utføres i det å ytre setningen, altså å advare, love, be eller hevde. Den nærmeste fellen er perlokusjonen, som er virkningen på mottakeren etterpå — en advarsel er fullført selv om ingen retter seg etter den. Lokusjonen er derimot selve det å si setningen.",
    },
    {
      question: "Hva er en perlokusjon?",
      options: ["Virkningen ytringen har på mottakeren etterpå", "Den handlingen taleren utfører ved å ytre setningen i den aktuelle situasjonen", "Den delen av ytringen som avgjør om det er en ordre, et løfte eller en forutsigelse", "Den responsen mottakeren må gi"],
      explanation: "Riktig svar er virkningen på mottakeren, som å bli overbevist, skremt eller trøstet. Den nærmeste fellen er mottakerens medvirkning, som i et veddemål faktisk er en del av framgangsmåten — perlokusjonen kan derimot utebli helt uten at handlingen mislykkes.",
    },
    {
      question: "Hva er en indirekte språkhandling?",
      options: ["En ytring der setningstypen og handlingen ikke faller sammen", "En ytring som er så uklar at mottakeren må gjette hva taleren egentlig ville oppnå med den", "En ytring som formidles gjennom en tredjeperson i stedet for direkte til den den gjelder", "En ytring der handlingen først blir utført når mottakeren har bekreftet at hun godtar den"],
      explanation: "Riktig svar er at setningstypen og handlingen ikke faller sammen, slik *Kan du sende saltet?* er et spørsmål brukt som anmodning. Den nærmeste fellen er å kalle den uklar — den er tvert imot umiddelbart forståelig, og det er nettopp derfor det er en vits å svare *Ja, det kan jeg* uten å sende noe.",
    },
    {
      question: "Hva er de to obligatoriske komponentene i et fullt svar om performativer?",
      options: ["At termen performativ både brukes og forklares, og at talerens autorisasjon nevnes ved navn i svaret", "At skillet mot konstative ytringer forklares, og at alle fem betingelsene ramses opp i rekkefølge", "At eksempelet er hentet fra en institusjonell sammenheng, og at virkningen på mottakeren beskrives", "At både en eksplisitt og en implisitt performativ vises, og at herved-prøven kjøres på begge"],
      explanation: "Riktig svar er termen brukt og forklart, og talerens autorisasjon nevnt. De øvrige alternativene er alle gode grep som løfter et svar, men de er ikke det kravet oppgavetypen er bygget rundt. Kravet er delt i to halvdeler, og en manglende halvdel koster nøyaktig sin andel av uttellingen.",
    },
    {
      question: "Hva er feil #14?",
      options: ["Å beskrive en performativ setning uten term og uten talerens autorisasjon", "Å hoppe over den ene halvdelen av en tvedelt oppgave og besvare den andre grundig", "Å bruke lærebokas standardeksempler på performativer i stedet for å lage sine egne", "Å forveksle virkningen ytringen får på mottakeren med den handlingen ytringen utfører"],
      explanation: "Riktig svar er å beskrive en performativ setning uten term og uten talerens autorisasjon. Den nærmeste fellen er feil #5, å hoppe over et oppgaveledd — den er beslektet, men gjelder manglende ledd generelt, mens feil #14 gjelder de to navngitte komponentene i denne bestemte oppgavetypen.",
    },
    {
      question: "Hvor mye gir språkhandlingsoppgaven i den terminen som er best belagt for dette temaet?",
      options: ["8 av 65 poeng i H2025", "5 av 49 poeng", "13 av 114 poeng, som er den samlede vekten pragmatikk har på tvers av begge poengsatte terminer", "4 av 45 spørsmål, som er det antallet spørsmål pragmatikken utgjør i arkivet samlet"],
      explanation: "Riktig svar er 8 av 65 poeng i H2025. De andre tallene er riktige tall om andre størrelser: 5 av 49 poeng gjelder maksimene i H2022, 13 av 114 poeng er pragmatikkens samlede vekt, og 4 av 45 spørsmål er antallet pragmatikkspørsmål. Fellen er å blande vekten i én termin med vekten på tvers.",
    },
    {
      question: "Hva er en institusjonell ramme i denne sammenhengen?",
      options: ["Ordningen som gjør framgangsmåten og autorisasjonen mulig", "Den bygningen eller det organet der de formelle handlingene faktisk blir utført til vanlig", "Den gruppen mennesker som er til stede og anerkjenner at handlingen har funnet sted", "Det regelverket som avgjør hvilke ord som må brukes for at en handling skal være gyldig"],
      explanation: "Riktig svar er ordningen — lovverk, reglement, vedtekter eller fast praksis — som gjør at framgangsmåten finnes og at noen kan være autorisert innenfor den. Den nærmeste fellen er å gjøre rammen til selve ordlyden; ordlyden hører til utførelsesbetingelsen. Rammen finnes også når ingen bruker den.",
    },
    {
      question: "Hvorfor er det ikke nok å skrive «riktig person» når autorisasjonen skal nevnes?",
      options: ["Fordi kravet er å si hvilken myndighet taleren har og hvor den kommer fra", "Fordi uttrykket riktig person hører til en annen betingelse enn den om talerens autorisasjon", "Fordi uttrykket er upresist og kan forveksles med kravet om at mottakeren må være riktig person", "Fordi listen over betingelser skal gjengis med de samme ordene som lærebokas framstilling bruker"],
      explanation: "Riktig svar er at kravet gjelder å konkretisere myndigheten og kilden til den. Den nærmeste fellen er å tro at uttrykket hører til en annen betingelse — det er samme betingelse, og problemet er bare at formuleringen ikke viser at kravet er forstått. Ett eksempel gjør setningen presis: en vigsler må ha vigselsrett.",
    },
    {
      question: "En ansatt sier *Jeg tar den vakten* til en kollega. Hva slags ytring er dette?",
      options: ["En implisitt performativ", "En konstativ ytring", "En eksplisitt performativ, ettersom verbet står i første person entall presens i setningen", "En perlokusjon, fordi virkningen er at kollegaen slipper å ta vakten selv den kvelden"],
      explanation: "Riktig svar er en implisitt performativ: vakten er overtatt i det setningen er sagt, uten at noe performativt verb navngir handlingen. Den nærmeste fellen er å kalle den eksplisitt fordi verbet står i presens — verbet *ta* navngir ikke handlingen å påta seg, slik *jeg lover* ville gjort. En konstativ lesning holder heller ikke: ytringen beskriver ingen plan, den overtar vakten. Formen er implisitt, virkningen er den samme.",
    },
    {
      question: "Hva er illokusjonær kraft?",
      options: ["Det som avgjør hvilken handling ytringen utfører", "Den styrken taleren legger i ytringen gjennom trykk, tonefall og ordvalg i situasjonen", "Den graden av forpliktelse ytringen pålegger taleren overfor mottakeren i etterkant", "Den evnen ytringen har til å få mottakeren til å gjøre det taleren ønsker at hun skal gjøre"],
      explanation: "Riktig svar er det som avgjør hvilken handling ytringen utfører — om *Du kommer klokka sju* er en beskjed, et løfte eller en ordre. Den nærmeste fellen er å gjøre kraft til styrke: trykk og tonefall er blant markørene, men kraften er hvilken handling det er, ikke hvor kraftfullt den framføres. Evnen til å påvirke er derimot perlokusjon.",
    },
    {
      question: "Hva viser skillet mellom setningstype og språkhandling?",
      options: ["At hvilken handling ytringen utfører, ikke kan leses av den grammatiske formen alene, uten hjelp fra situasjonen", "At fortellende setninger alltid brukes til påstander, mens bydesetninger brukes til anmodninger", "At språkhandlinger er et grammatisk fenomen som best beskrives i syntaksen framfor i pragmatikken", "At en ytring bare kan utføre én handling om gangen, og at setningstypen avgjør hvilken det blir"],
      explanation: "Riktig svar er at handlingen ikke kan leses av formen alene, og det er nettopp derfor pragmatikken trengs som eget fagfelt. Den nærmeste fellen er å hevde at typene faller sammen med handlingene — de gjør det ofte, men *Ha en god tur* er bydende i formen og en velønskning i handlingen.",
    },
  ],
  'exfac03-spr-7-3': [
    {
      question: "Hvordan bør samarbeidsprinsippet formuleres for å vise hva teorien faktisk forklarer?",
      options: ["Som lytterens antakelse om at taleren bidrar slik samtalen krever der den er kommet, og med det formålet den har", "Som en regel om at taleren skal bidra til samtalen på en tydelig og redelig måte", "Som en høflighetsnorm som gjelder i formelle samtaler mellom parter som ikke kjenner hverandre", "Som en beskrivelse av hvordan folk faktisk snakker når samtalen forløper uten misforståelser"],
      explanation: "Riktig svar er at prinsippet er en antakelse lytteren gjør. Den nærmeste fellen er å formulere det som en regel taleren skal følge — da blir det et høflighetsråd, og da forklarer det ikke lenger hvorfor et brudd kan kommunisere noe i stedet for å ødelegge samtalen.",
    },
    {
      question: "Hva er en implikatur?",
      options: ["Innhold som kommuniseres uten å bli sagt, og som lytteren regner seg fram til", "Innhold som følger logisk av det som er sagt, og som derfor ikke kan trekkes tilbake", "Den betydningen taleren egentlig hadde i tankene, uavhengig av om lytteren fanget den opp", "En privat assosiasjon hos leseren"],
      explanation: "Riktig svar er innhold som kommuniseres uten å bli sagt og som regnes ut av lytteren. Den nærmeste fellen er den logiske følgen: den kan ikke kanselleres, mens implikaturen kan. En privat assosiasjon hos leseren faller utenfor, fordi den ikke oppfyller kravet om beregnelighet.",
    },
    {
      question: "Hva sier kvantitetsmaksimen?",
      options: ["Gi så mye informasjon som samtalen krever, og ikke mer", "Gi så mye informasjon som mulig, slik at mottakeren har alt hun trenger for å forstå deg", "Gi bare den informasjonen du har sikkert belegg for, og hold tilbake det du er usikker på", "Gi informasjonen i en form som er så kort og klar at mottakeren ikke må tolke noe selv"],
      explanation: "Riktig svar er å gi passe mye — verken for lite eller for mye. Den nærmeste fellen er å lese maksimen som «mest mulig»; overinformering bryter den like fullt. Kravet om belegg hører til kvalitetsmaksimen, og kravet om klarhet til måtemaksimen.",
    },
    {
      question: "En kollega blir spurt hvordan presentasjonen gikk, og svarer «Ingen sovnet». Hvilken maksime brytes åpent?",
      options: ["Kvantitetsmaksimen", "Kvalitetsmaksimen, siden det er tvilsomt om taleren virkelig kan vite om noen sovnet", "Relasjonsmaksimen, ettersom søvn ikke har noe med kvaliteten på en presentasjon å gjøre", "Måtemaksimen"],
      explanation: "Riktig svar er kvantitetsmaksimen: bidraget er påfallende tynt for spørsmålet, og lytteren regner ut at det ikke fantes noe bedre å nevne. Den nærmeste fellen er relasjon — men svaret er faktisk på temaet, det er bare for lite. Det er nettopp der skillet mellom de to maksimene går.",
    },
    {
      question: "Hva skiller et åpent maksimebrudd fra en løgn?",
      options: ["Det åpne bruddet skal gjennomskues, mens løgnen skal tros", "Det åpne bruddet gjelder kvalitetsmaksimen, mens løgnen kan gjelde hvilken som helst av de fire", "Det åpne bruddet er utilsiktet, løgnen bevisst", "Det åpne bruddet forekommer i muntlig tale, mens løgnen er vanligst i skriftlige framstillinger"],
      explanation: "Riktig svar er synligheten: det åpne bruddet er ment å bli gjennomskuet og kommuniserer nettopp gjennom det, mens løgnen er en skjult overtredelse som skal tros. Den nærmeste fellen er å gjøre skillet til et spørsmål om hensikt — begge er bevisste, og forskjellen ligger i om lytteren skal se bruddet.",
    },
    {
      question: "Hvorfor oppstår det ingen implikatur når noen lyver?",
      options: ["Lytteren ser ikke noe brudd og har derfor ingenting å regne ut", "Løgnen bryter samarbeidsprinsippet fullstendig, og da settes maksimene ut av kraft samtidig", "Implikaturer oppstår bare ved brudd på relasjonsmaksimen", "Implikatur forutsetter at taleren er oppriktig"],
      explanation: "Riktig svar er at lytteren ikke ser noe brudd og derfor ikke setter i gang noe regnestykke — for henne ser bidraget normalt ut. Den nærmeste fellen er å knytte det til oppriktighet: ironi er heller ikke oppriktig i bokstavelig forstand, og den gir likevel implikatur, fordi bruddet er synlig.",
    },
    {
      question: "Hva er de tre trinnene i en implikaturanalyse?",
      options: ["Hvilken maksime ser ut til å være brutt, hva må lytteren anta for at taleren likevel samarbeider, og hva er implikaturen", "Hva ble sagt bokstavelig, hva mente taleren egentlig, og hvordan reagerte mottakeren på det", "Hvilken setningstype ble brukt, hvilken handling ble utført, og hvilken virkning fikk ytringen", "Hva var det forventede bidraget, hvor mye avvek ytringen fra det, og var avviket høflig ment"],
      explanation: "Riktig svar er maksimen, antakelsen og implikaturen. Den nærmeste fellen erstatter trinn to med talerens hensikt — men analysen skal vise regnestykket lytteren gjør, ikke gjette på hva som foregikk i talerens hode. Det er trinn to som skiller en analyse fra en gjetning.",
    },
    {
      question: "Hva er kanselleringsprøven god for?",
      options: ["Å skille en implikatur fra en logisk følge", "Å avgjøre om taleren brøt maksimen åpent eller prøvde å skjule bruddet for lytteren", "Å finne ut hvilken maksime som er brutt", "Å måle hvor stor avstanden er mellom det forventede bidraget og det som faktisk ble sagt"],
      explanation: "Riktig svar er å skille implikatur fra logisk følge: implikaturen kan trekkes tilbake uten selvmotsigelse, følgen kan ikke. «Noen har levert, faktisk alle» er merkelig, men ikke motstridende; «alle har levert, men ikke Kari» er direkte selvmotsigende.",
    },
    {
      question: "Hva er en skalar implikatur?",
      options: ["En implikatur som oppstår fordi taleren valgte et svakere uttrykk enn hun kunne ha brukt", "En implikatur som blir sterkere jo mer taleren avviker fra det forventede bidraget i samtalen", "En implikatur som gjelder mengder og tall, og som derfor kan regnes ut helt presist", "En implikatur som følger med bestemte ord uansett hvilken situasjon de brukes i"],
      explanation: "Riktig svar er valget av et svakere uttrykk på en skala: sier noen *noen*, regner lytteren med at det ikke var *alle*. Den nærmeste fellen er den konvensjonelle implikaturen, som henger fast i ordet uansett situasjon — den skalare kan kanselleres, siden den kommer fra valget og ikke fra ordet.",
    },
    {
      question: "Hva kjennetegner en utmelding av en maksime?",
      options: ["Taleren sier åpent at hun ikke kan bidra som samtalen krever", "Taleren bryter maksimen i det stille, i håp om at lytteren ikke skal legge merke til det", "Taleren bryter en maksime for å overholde en annen som er viktigere i situasjonen", "Taleren gir et svar som tilsynelatende gjelder noe annet enn det som ble spurt om"],
      explanation: "Riktig svar er at taleren eksplisitt markerer at hun trer ut av samarbeidet på dette punktet, som med «det kan jeg ikke uttale meg om». Et stille brudd, en maksimekollisjon og et åpent brudd på relasjonsmaksimen er tre andre måter en maksime kan settes ut av spill på, men ingen av dem er en utmelding: i utmeldingen sier taleren fra.",
    },
    {
      question: "Hva er en maksimekollisjon?",
      options: ["To maksimer kan ikke innfris samtidig, og taleren må ofre den ene", "To samtalepartnere har ulik oppfatning av hva som er et relevant bidrag i situasjonen", "En ytring bryter to maksimer på én gang", "En maksime brytes så ofte i en samtale at lytteren slutter å forvente at den overholdes"],
      explanation: "Riktig svar er at to maksimer ikke lar seg innfri samtidig, typisk kvantitet mot kvalitet: du blir bedt om et presist tall du ikke har belegg for. Implikaturen gjelder da talerens kunnskapsgrunnlag, ikke saken selv — og det skillet er verdt å skrive ut i et svar.",
    },
    {
      question: "Hva sier måtemaksimen?",
      options: ["Vær klar: unngå uklare uttrykk, unngå tvetydighet, vær kortfattet, og si tingene i en forståelig rekkefølge", "Vær høflig: velg formuleringer som ikke setter mottakeren i en ubehagelig situasjon", "Vær presis: bruk fagtermer der de finnes, slik at ingenting blir overlatt til tolkning", "Vær kortfattet: si det med færrest mulig ord, uansett hva samtalen ellers krever"],
      explanation: "Riktig svar er kravet om klarhet, med de fire underpunktene om uklarhet, tvetydighet, kortfattethet og orden. Den nærmeste fellen er å redusere maksimen til kortfattethet alene — det er bare ett av fire underpunkter, og rekkefølgekravet er det som lettest overses.",
    },
    {
      question: "Hva koster det å behandle tre av de fire maksimene i en oppgave som gir 1 poeng per maksime?",
      options: ["Nøyaktig ett poeng, uansett hvor godt de tre andre er behandlet", "Ingenting, så lenge de tre som er med, er grundig forklart med egne eksempler", "Hele oppgaven, siden en redegjørelse må dekke alle ledd for å kunne vurderes", "Det kommer an på hvilken maksime som mangler, siden noen er viktigere enn andre"],
      explanation: "Riktig svar er nøyaktig ett poeng. Poengmodellen er gjennomsiktig, og den har den konsekvensen at ingen mengde kvalitet på de tre andre kan kompensere. Fellen er å tro at et grundig svar veier opp — det gjør det ikke når poengene er knyttet direkte til fullstendighet.",
    },
    {
      question: "Hva er feil #7?",
      options: ["Å gi færre eksempler enn oppgaven ber om", "Å gi et eksempel uten å begrunne det", "Å svare på et klassifiseringsspørsmål uten å oppgi noen begrunnelse for konklusjonen", "Å hoppe over ett av leddene i en oppgave som har flere deler enn kandidaten har lagt merke til"],
      explanation: "Riktig svar er å gi færre eksempler enn oppgaven ber om, og i dette stoffet har den én bestemt form: tre av fire maksimer. Den nærmeste fellen er feil #6, som gjelder eksempler uten begrunnelse — der er antallet riktig, men koblingen mangler.",
    },
    {
      question: "Hva er forskjellen på en konversasjonell og en konvensjonell implikatur?",
      options: ["Den konversasjonelle er situasjonsavhengig og kan kanselleres, mens den konvensjonelle henger fast i selve ordet", "Den konversasjonelle oppstår i muntlig samtale, mens den konvensjonelle hører til skriftspråket", "Den konversasjonelle er beregnet av lytteren, mens den konvensjonelle er ment av taleren", "Den konversasjonelle kan ikke kanselleres, mens den konvensjonelle kan tas tilbake med et tillegg"],
      explanation: "Riktig svar er at den konversasjonelle er situasjonsavhengig og kan kanselleres, mens den konvensjonelle følger et bestemt ord uansett situasjon — som kontrasten i ordet *men*. Den nærmeste fellen bytter om på kansellerbarheten, som nettopp er det som kjennetegner den konversasjonelle.",
    },
    {
      question: "På spørsmålet «Kommer du på julebordet?» svarer noen «Jeg har vakt til klokka ti». Hvilken maksime brytes åpent?",
      options: ["Relasjonsmaksimen", "Kvantitetsmaksimen, siden svaret gir langt mindre informasjon enn spørsmålet krevde", "Måtemaksimen", "Kvalitetsmaksimen, fordi taleren ikke kan vite sikkert om hun rekker det eller ikke"],
      explanation: "Riktig svar er relasjonsmaksimen: svaret handler tilsynelatende om noe annet enn det som ble spurt om. Den nærmeste fellen er kvantitet — men mengden er ikke problemet, det er at bidraget ser ut til å gjelde et annet tema, og det er nettopp derfor lytteren begynner å regne.",
    },
    {
      question: "Hva er ironi, pragmatisk beskrevet?",
      options: ["Et åpent brudd på kvalitetsmaksimen som er ment å bli gjennomskuet", "En bevisst usannhet taleren håper blir trodd", "Et brudd på måtemaksimen der taleren velger en omvei i stedet for en direkte formulering", "En overdrivelse med sterkere ord enn saken tilsier"],
      explanation: "Riktig svar er et åpent brudd på kvalitetsmaksimen som skal gjennomskues, slik at lytteren leter etter en annen — typisk motsatt — beskjed. Den nærmeste fellen er overdrivelse: den er også et åpent brudd på samme maksime, men den peker mot et annet punkt på samme skala, ikke mot det motsatte.",
    },
    {
      question: "Hva betyr det at en implikatur er beregnelig?",
      options: ["Den skal kunne utledes av det sagte, samarbeidsprinsippet og situasjonen", "Den kan tallfestes ut fra hvor stort avviket fra det forventede bidraget er", "Den er den samme for alle lyttere, uavhengig av hva de vet om taleren fra før", "Den kan forutsis av taleren før ytringen framsettes, og er dermed alltid tilsiktet"],
      explanation: "Riktig svar er at den skal kunne utledes av det sagte, prinsippet og situasjonen. Kravet er grunnen til at trinn to i prosedyren er obligatorisk: kan du ikke skrive antakelsen som en hel setning, har du en gjetning framfor en implikatur.",
    },
    {
      question: "Hvor mange terminer i arkivet har en oppgave som gjelder samarbeidsprinsippet direkte?",
      options: ["2 av 6 terminer", "4 av 6 terminer, altså like ofte som pragmatikk samlet er representert i arkivet", "Alle terminene", "1 av 6 terminer, som er den samme frekvensen kontekstlære har som eget spørsmål"],
      explanation: "Riktig svar er 2 av 6 terminer. Den nærmeste fellen er 4 av 6 terminer, som er frekvensen for pragmatikk som helhet — samarbeidsprinsippet er bare en del av det saksområdet. 1 av 6 terminer gjelder kontekstlære som eget spørsmål.",
    },
    {
      question: "Hva menes med det forventede bidraget?",
      options: ["Det lytteren ville regnet som et normalt svar på dette punktet i samtalen", "Det taleren hadde planlagt å si før hun ble avbrutt eller ombestemte seg underveis", "Det svaret som ville vært mest høflig gitt forholdet mellom de to samtalepartnerne", "Det minste bidraget som må til for at samtalen skal kunne fortsette uten misforståelser"],
      explanation: "Riktig svar er det lytteren ville regnet som et normalt, samarbeidende svar der samtalen er kommet. Uten en slik målestokk finnes det ingen avstand å måle brudd mot. Den nærmeste fellen knytter det til høflighet — men målestokken gjelder informasjonsmengde og relevans, ikke tone.",
    },
    {
      question: "Hva er den vanligste svakheten når kvalitetsmaksimen skal forklares?",
      options: ["Å redusere den til et forbud mot å lyve, og dermed miste både kravet om belegg og de åpne bruddene av syne", "Å blande den sammen med kvantitetsmaksimen, siden begge gjelder hva taleren sier om saken", "Å hevde at den bare gjelder påstander og ikke spørsmål eller anmodninger fra talerens side", "Å knytte den til talerens autorisasjon i stedet for til det grunnlaget påstanden hviler på"],
      explanation: "Riktig svar er å redusere den til et løgnforbud. Maksimen omfatter også kravet om belegg, og dens viktigste pragmatiske virkning kommer fra åpne brudd — ironi, underdrivelse, overdrivelse — som nettopp ikke er løgner. Blir maksimen bare et løgnforbud, forsvinner hele den forklaringen.",
    },
    {
      question: "Hva er grepet som løfter et svar om en implikatur fra middels til godt?",
      options: ["Å skrive ut antakelsen lytteren må gjøre, som en hel setning", "Å oppgi så mange mulige implikaturer som råd, slik at den riktige garantert er med", "Å beskrive hvilken virkning ytringen fikk på mottakeren i den aktuelle situasjonen", "Å knytte hver implikatur til en av de fire maksimene med navnet på maksimen oppgitt"],
      explanation: "Riktig svar er å skrive ut antakelsen — mellomleddet som viser regnestykket. Å navngi maksimen er nødvendig, men det er et må-punkt og ikke et løft; uten mellomleddet kan konklusjonen like gjerne være gjettet, og en gjettet konklusjon er ingen analyse.",
    },
  ],
  'exfac03-spr-8-1': [
    {
      question: "Hva er hodet i en frase?",
      options: ["Leddet som bestemmer frasens kategori, som ikke kan strykes, og som bærer frasens forhold til resten av setningen", "Det ordet i frasen som bærer mest av innholdet, og som leseren først legger merke til når frasen leses høyt", "Det første ordet i frasen, siden norsk bygger fraser fra venstre mot høyre i alle konstruksjoner", "Det lengste ordet i frasen, målt i antall stavelser og morfemer til sammen"],
      explanation: "Riktig svar er at hodet bestemmer frasens kategori og ikke kan strykes. Den nærmeste fella er å velge det ordet som bærer mest innhold: i *bak gjerdet* er det *gjerdet* som bærer innholdet, men *bak* som er hodet.",
    },
    {
      question: "Hva er en dependent?",
      options: ["Et ledd som står i frasen i kraft av hodet, og som kan strykes uten at frasen bytter kategori eller faller sammen", "Et ledd som er avhengig av setningens verb, og som derfor bare kan opptre i setninger med et finitt verb til stede", "Et ledd som må stå til høyre for hodet i alle språk, siden dependenter alltid følger etter det de utfyller", "Et ledd som mangler egen ordklasse, og som derfor får kategori fra frasen det står i"],
      explanation: "Riktig svar er at dependenten står i frasen i kraft av hodet og kan strykes. Den nærmeste fella er påstanden om at dependenter alltid følger etter hodet — nettopp det varierer, og variasjonen er hele emnet for ordstillingstypologien.",
    },
    {
      question: "Hvorfor kalles en frase en preposisjonsfrase?",
      options: ["Fordi hodet i frasen er en preposisjon", "Fordi frasen inneholder minst én preposisjon et eller annet sted mellom de andre ordene", "Fordi frasen angir sted eller tid, og slike frasetyper får navn etter betydningen sin", "Fordi den ikke kan stå som subjekt, og alle frasetyper som mangler den muligheten, får dette navnet"],
      explanation: "Riktig svar er at hodet er en preposisjon. Navneregelen leser frasetypen rett av hodet, og den bryr seg verken om hvor mange preposisjoner frasen inneholder eller om hva den betyr.",
    },
    {
      question: "Hva vil det si at en konstruksjon er hodeinitial?",
      options: ["At hodet står foran dependenten", "At hodet står først i hele setningen, uansett hvilken frase det tilhører og hvor mange ledd som kommer etter", "At frasen innledes av et lite grammatisk ord som markerer at en ny frase begynner her", "At hodet ikke kan flyttes, mens dependentene kan flyttes fritt rundt i setningen"],
      explanation: "Riktig svar er at hodet står foran dependenten. Merkelappen gjelder én konstruksjon av gangen — et språk kan være hodeinitialt i verbfrasen og hodefinalt i substantivfrasen.",
    },
    {
      question: "I hvilken av disse norske konstruksjonene står hodet sist?",
      options: ["Substantivfrasen med adjektivet foran, som i et rødt hus, der substantivet er hodet", "Verb med objekt, som i leste boka, der objektet kommer etter verbet", "Preposisjon med komplement, som i under bordet, der komplementet kommer etter preposisjonen", "Leddsetning med subjunksjon, som i at han kommer, der subjunksjonen innleder hele setningen"],
      explanation: "Riktig svar er substantivfrasen med adjektivet foran. De tre andre er alle hodeinitiale i norsk, og nettopp derfor er norsk en blandingstype.",
    },
    {
      question: "Hva er hodet i frasen under det gamle bordet?",
      options: ["Preposisjonen under, siden frasen som helhet oppfører seg som en stedsangivelse", "Substantivet bordet, siden det er bordet frasen egentlig handler om og gir informasjon om", "Adjektivet gamle, siden det er dette leddet som skiller bordet fra alle andre bord", "Determinativet det, siden det innleder frasen"],
      explanation: "Riktig svar er preposisjonen *under*. Kategoritesten avgjør: frasen oppfører seg som en stedsangivelse og ikke som en substantivfrase, og bytter du *under* med *over*, snur hele meningen.",
    },
    {
      question: "Hva heter en adposisjon som står etter komplementet sitt?",
      options: ["En postposisjon, altså et eget ord som følger etter substantivfrasen", "En etterstilt preposisjon, som er det vanlige navnet på formen", "En subjunksjon, siden den binder sammen ledd på samme måte som en leddsetningsinnleder gjør", "En kasusmarkør, siden funksjonen tilsvarer den kasusendelser har i språk med kasusbøyning"],
      explanation: "Riktig svar er postposisjon, altså et eget ord som følger etter substantivfrasen. «Etterstilt preposisjon» er ikke termen faget bruker: fellesbetegnelsen på begge plasseringene er adposisjon, og skillet mellom dem gjelder bare rekkefølge, ikke funksjon.",
    },
    {
      question: "Hva er galt med utsagnet «Et språk med postposisjoner må ha objektet foran verbet»?",
      options: ["Ordet «må» gjør en tendens om til en lov", "Sammenhengen mellom de to trekkene finnes ikke, og utsagnet bygger derfor på en ren misforståelse", "Slutningen går feil vei, siden adposisjonstypen bare kan leses av objektsplasseringen og aldri motsatt", "Postposisjoner er ikke et typologisk trekk i det hele tatt, men et rent skille i skrivemåte mellom språk"],
      explanation: "Riktig svar er at ordet «må» gjør tendensen om til en lov. Sammenhengen er ekte og sterk, men den er statistisk — det er den logiske formen som er gal, ikke observasjonen.",
    },
    {
      question: "Hva kjennetegner en blandet ordstillingstype?",
      options: ["Språket er hodeinitialt i noen konstruksjoner og hodefinalt i andre, slik norsk selv er det", "Språket veksler fritt mellom alle rekkefølger uten at betydningen endrer seg på noen måte", "Språket har lånt ordstillingen sin fra et nabospråk og lar seg derfor ikke plassere i systemet", "Språket har to ordstillinger som brukes av ulike grupper av talere i ulike sammenhenger"],
      explanation: "Riktig svar er at språket er hodeinitialt i noen konstruksjoner og hodefinalt i andre. Norsk er et eksempel, og blandingstypene er grunnen til at korrelasjonene er tendenser.",
    },
    {
      question: "Hvordan bør norsk klassifiseres i hode- og dependentsystemet?",
      options: ["Overveiende hodeinitialt, med adjektivet foran substantivet og med s-genitiven foran hodet som unntak", "Konsekvent hodeinitialt, siden verbet, preposisjonen og subjunksjonen alle står foran dependentene sine", "Konsekvent hodefinalt, siden adjektivet og genitiven begge står foran substantivet de hører til", "Umulig å klassifisere, siden norsk har flere ordstillinger og derfor faller utenfor systemet helt"],
      explanation: "Riktig svar er overveiende hodeinitialt, med unntak. Fella er å droppe forbeholdet: adjektivet i *et rødt hus* og genitiven i *Karis bil* går motsatt vei, og et svar som skjuler det, er ufullstendig.",
    },
    {
      question: "Hvilket trinn i klassifiseringsprosedyren bærer flest poeng?",
      options: ["Konklusjonen med forbehold, der du sier hvilke konstruksjoner belegget dekker og hva som ville endret svaret", "Identifiseringen av hodet, siden hele analysen faller sammen hvis du peker ut feil ledd som hode", "Nedskrivingen av rekkefølgen i hver enkelt konstruksjon, siden det er der selve dataene registreres", "Sammenligningen på tvers av konstruksjoner, siden det er der du ser om språket er konsekvent"],
      explanation: "Riktig svar er konklusjonen med forbehold. De tre andre trinnene er nødvendige, men de fleste klarer dem — det er den utskrevne falsifiseringen som skiller besvarelsene fra hverandre.",
    },
    {
      question: "Hva er grunnordstillingen i en vanlig norsk fortellende hovedsetning?",
      options: ["SVO, altså subjekt, verb og objekt, som i Kari leste boka", "SOV, altså subjekt, objekt og verb, slik det er i japansk og tyrkisk", "VSO, altså verb, subjekt og objekt", "OSV, altså objekt, subjekt og verb, som er en vanlig rekkefølge i verdens språk"],
      explanation: "Riktig svar er SVO. Merk at merkelappen sier noe om den dominerende rekkefølgen i den enkleste setningen, ikke om hvilke rekkefølger som er tillatt.",
    },
    {
      question: "Hva går obligatoriskhetstesten ut på?",
      options: ["Du stryker ett ledd av gangen og ser hvilket ledd frasen ikke klarer seg uten, for det leddet er hodet", "Du bytter ut ett ledd av gangen med et annet ord av samme type og ser om betydningen holder seg", "Du flytter ledd rundt i frasen og ser hvilken rekkefølge som gir det mest naturlige resultatet", "Du teller antall morfemer i hvert ledd og lar det leddet med flest morfemer være hodet i frasen"],
      explanation: "Riktig svar er at du stryker ett ledd av gangen. Det leddet frasen ikke overlever uten, er hodet — og testen er noe annet enn kategoritesten, som spør hvor frasen kan stå.",
    },
    {
      question: "Hvilken test hjelper deg best når intuisjonen drar mot substantivet i en preposisjonsfrase?",
      options: ["Kategoritesten, som spør hvilket ledd det er som avgjør hvor frasen kan stå i setningen", "Frekvenstesten, som spør hvilket av leddene som er vanligst i norske tekster totalt sett", "Betydningstesten, som spør hvilket av leddene som bærer mest av frasens samlede innhold", "Lengdetesten, som spør hvilket av leddene som består av flest stavelser og bokstaver"],
      explanation: "Riktig svar er kategoritesten. Den avslører at *bak gjerdet* oppfører seg som en stedsangivelse og ikke som en substantivfrase, og at hodet dermed er preposisjonen.",
    },
    {
      question: "Hva bør du gjøre når du finner et språk som bryter en typologisk korrelasjon?",
      options: ["Telle det som et unntak, la konklusjonen stå med forbehold, og si hvilken konstruksjon unntaket gjelder", "Forkaste korrelasjonen, siden en sammenheng som har unntak, ikke kan brukes til noe i det hele tatt", "Anta at beskrivelsen av språket inneholder en feil, siden korrelasjonene bygger på svært mange språk", "Omdefinere hodet i den aktuelle konstruksjonen slik at språket likevel passer inn i mønsteret"],
      explanation: "Riktig svar er å telle unntaket og la konklusjonen stå med forbehold. Et moteksempel feller en lov, men ikke en tendens — og å bortforklare det som ikke passer, er like galt som å kalle tendensen en lov.",
    },
    {
      question: "Hva er særegent med genitivkonstruksjonen i norsk?",
      options: ["Norsk har to konkurrerende rekkefølger for det samme innholdet", "Norsk har mistet genitiven helt, og eierforhold uttrykkes utelukkende med preposisjonsuttrykk i moderne språk", "Genitiven i norsk kan bare brukes om personer, og aldri om gjenstander eller abstrakte størrelser", "Genitiven markeres på hodesubstantivet og ikke på dependenten, i motsetning til i de fleste andre språk"],
      explanation: "Riktig svar er at norsk har to konkurrerende rekkefølger: *Karis bil* setter dependenten først, *bilen til Kari* setter hodet først. Det er nettopp derfor konstruksjonen ikke kan brukes som belegg for én type.",
    },
    {
      question: "Hvorfor er adjektivets plass et svakt ledd i korrelasjonsmønsteret?",
      options: ["Fordi mange ellers hodeinitiale språk, deriblant norsk, setter adjektivet foran substantivet det hører til", "Fordi adjektivet ikke har noe hode over seg, og derfor faller utenfor hode- og dependentbeskrivelsen helt", "Fordi adjektiv er en ordklasse som mangler i mange språk, slik at konstruksjonen ikke lar seg sammenligne", "Fordi adjektivets plass varierer fritt innenfor hvert enkelt språk uten at det får konsekvenser for tolkningen"],
      explanation: "Riktig svar er at mange ellers hodeinitiale språk setter adjektivet foran substantivet. Norsk er selv et slikt tilfelle, og derfor skal adjektivbelegg brukes med et ekstra forbehold.",
    },
    {
      question: "Hva sier en implikasjonstendens?",
      options: ["Har et språk trekk A, har det som regel også trekk B", "Har et språk trekk A, er trekk B utelukket, siden de to trekkene ikke kan opptre i samme system", "Har et språk trekk A, vil trekk B utvikle seg over tid, siden språk beveger seg mot indre samsvar", "Har et språk trekk A, har alle nabospråk det samme trekket, siden ordstilling sprer seg geografisk"],
      explanation: "Riktig svar er at trekk A gjør trekk B sannsynlig. Merk at påstanden har en retning: slutningen fra A til B kan være sterkere enn slutningen fra B til A, og retningen skal gjengis når du bruker tendensen.",
    },
    {
      question: "Hva må en typologisk klassifisering inneholde i tillegg til selve merkelappen?",
      options: ["Hvilke konstruksjoner belegget bygger på, og hvilken observasjon som ville endret konklusjonen", "En sammenligning med minst tre andre språk fra det samme geografiske området som språket tilhører", "En vurdering av hvor vanskelig språket er å lære for en som har norsk som morsmål fra før", "En opptelling av hvor mange talere språket har, siden godt beskrevne språk gir sikrere konklusjoner"],
      explanation: "Riktig svar er hvilke konstruksjoner belegget bygger på, og hva som ville endret konklusjonen. Merkelappen alene er ett ledd av fire, og de tre andre ligger i begrunnelsen.",
    },
    {
      question: "Hvorfor henger rekkefølgen verb–objekt og adposisjonstypen så tett sammen?",
      options: ["Fordi begge konstruksjonene har et hode som tar en substantivfrase som dependent, altså samme struktur", "Fordi verbet og adposisjonen har felles opphav i språkhistorien, og derfor arver den samme plasseringen", "Fordi objektet og komplementet er samme setningsledd, bare med to ulike navn i to ulike tradisjoner", "Fordi begge konstruksjonene er obligatoriske i alle setninger, og ingen setning kan mangle noen av dem"],
      explanation: "Riktig svar er at de to konstruksjonene er bygget likt: hode pluss substantivfrase. Når to konstruksjoner har samme struktur, er det ikke overraskende at språket behandler dem likt — men det er fortsatt en tendens.",
    },
  ],
  'exfac03-spr-8-2': [
    {
      question: "Hva vil det si at et ledd er markert?",
      options: ["At leddet er formelt mer komplekst enn motstykket sitt, og at det samtidig er snevrere i bruk enn motstykket", "At det forekommer sjelden i vanlig språkbruk, og derfor virker påfallende når det først dukker opp", "At det er avledet av et annet ord, uansett om avledningen gjør uttrykket snevrere eller videre i bruk", "At det tilhører et høyere stilnivå enn motstykket, og derfor hører hjemme i formelle sammenhenger"],
      explanation: "Riktig svar er at det markerte leddet er formelt mer komplekst og snevrere i bruk. Den dyreste fella er å bruke «markert» som et finere ord for «uvanlig» — sjeldenhet er ikke et markerthetskriterium.",
    },
    {
      question: "Hvor mange markerthetskriterier opererer boka med, og hvilke er de?",
      options: ["Fire: formell kompleksitet, frekvens, distribusjon og nøytralitet i spørsmål", "Tre: formell kompleksitet, frekvens og alder, altså hvilken form som er eldst i språkhistorien", "To: formell kompleksitet og frekvens, siden de andre forholdene lar seg utlede av disse to alene", "Fem: formell kompleksitet, frekvens, distribusjon, stilnivå og geografisk utbredelse i talemålet"],
      explanation: "Riktig svar er de fire kriteriene formell kompleksitet, frekvens, distribusjon og nøytralitet i spørsmål. Verken alder, stilnivå eller geografi er markerthetskriterier, selv om de kan være interessante av andre grunner.",
    },
    {
      question: "Hva sier markerthetskriteriet formell kompleksitet?",
      options: ["Det markerte leddet har som regel mer form enn det umarkerte, som et suffiks eller et ekstra ord", "Det markerte leddet har en mer sammensatt betydning, som krever flere ord for å forklares presist", "Det markerte leddet har en mer uregelmessig bøyning enn det umarkerte leddet i samme paradigme", "Det markerte leddet består av flere stavelser, uavhengig av hvordan ordet er bygget opp av morfemer"],
      explanation: "Riktig svar er at det markerte leddet har mer form. Kriteriet teller formledd, ikke stavelser og ikke betydningens kompleksitet — *hunder* er *hund* pluss en endelse, og det er hele argumentet.",
    },
    {
      question: "Hvordan virker markerthetskriteriet nøytralitet i spørsmål?",
      options: ["Det umarkerte leddet er det som brukes når spørsmålet er åpent og ikke forutsetter noe om svaret", "Det umarkerte leddet kan ikke brukes i spørsmål i det hele tatt, siden spørsmål alltid forutsetter noe", "Det markerte leddet er det som gir det mest presise svaret, og derfor det som velges i faglige spørsmål", "Det umarkerte leddet krever et fullstendig svar, mens det markerte kan besvares med ja eller nei alene"],
      explanation: "Riktig svar er at det umarkerte leddet brukes når spørsmålet er åpent. *Hvor gammel er hun?* forutsetter ingenting; *hvor ung er hun?* forutsetter at hun er ung, og det gjør *ung* til det markerte leddet.",
    },
    {
      question: "Hvilket ledd er umarkert i paret lærer mot lærerinne?",
      options: ["Lærer, siden formen mangler avledningsleddet og dekker det videre bruksområdet", "Lærerinne, fordi den formen gir mer presis informasjon om hvem som omtales i setningen", "Ingen av dem, siden markerthet bare gjelder grammatiske kategorier og aldri avledede ord", "Begge, siden formene brukes om hverandre"],
      explanation: "Riktig svar er *lærer*. Både formkriteriet og distribusjonskriteriet peker samme vei: avledningen er grunnordet pluss et ledd, og grunnordet dekker et videre område.",
    },
    {
      question: "Hvorfor er markerthet en relasjon og ikke en egenskap?",
      options: ["Fordi et ledd alltid er markert i forhold til noe annet, og aldri er markert helt på egen hånd", "Fordi markerthet endrer seg over tid, slik at det samme ordet kan skifte status i løpet av noen tiår", "Fordi ulike lesere oppfatter ulike former som påfallende, avhengig av bakgrunn og lesevaner", "Fordi kriteriene ofte er uenige, slik at ethvert svar om markerthet blir en skjønnsmessig vurdering"],
      explanation: "Riktig svar er at et ledd alltid er markert i forhold til noe annet. Å skrive at et ord «er markert» uten å oppgi motstykket, er et ufullstendig utsagn, uansett hvor riktig vurderingen ellers måtte være.",
    },
    {
      question: "Hvilken tallverdi er umarkert i norsk?",
      options: ["Entall, siden flertallsformen er entallsformen pluss en endelse", "Flertall, siden flertallsformene er vanligst i løpende tekst", "Verken entall eller flertall, siden norsk mangler et gjennomført tallsystem i substantivbøyningen", "Det varierer med ordklassen, slik at entall er umarkert i substantiv og flertall i adjektiv"],
      explanation: "Riktig svar er entall. Belegget er formen — *hund* mot *hunder* — og distribusjonen, siden entallsformen brukes i generiske utsagn som *hunden er et flokkdyr*.",
    },
    {
      question: "Hvilken kasus er som regel umarkert i språk med kasusbøyning?",
      options: ["Nominativen, altså subjektskasusen, som oftest har kortest form og videst distribusjon i paradigmet", "Akkusativen, siden objektet er det leddet som oftest må markeres for at setningen skal bli entydig", "Genitiven, siden den er den formen som brukes når et ord nevnes uten syntaktisk sammenheng", "Den kasusen som har flest ulike endelser i paradigmet, siden bredde i formverk gir bredde i bruk"],
      explanation: "Riktig svar er nominativen. Den har oftest kortest form, videst distribusjon og fungerer som oppslagsform — men påstanden er en sterk tendens, ikke en lov, og skal begrunnes med kriterier på det språket det gjelder.",
    },
    {
      question: "Hva er ikonisitet?",
      options: ["At det er en likhet mellom den språklige formen og det formen betyr, slik at formen ikke er helt vilkårlig", "At et ord etterligner en lyd i naturen, slik som plask og knirke gjør på norsk og i mange andre språk", "At et språk har utviklet skrifttegn som ligner det tegnene betegner, slik piktografiske skriftsystemer gjør", "At to språk har utviklet like konstruksjoner uavhengig av hverandre, uten kontakt eller felles opphav"],
      explanation: "Riktig svar er likheten mellom form og innhold. Lydmalende ord er én liten variant av dette; den ikonisiteten typologien er opptatt av, gjelder mengde, avstand og rekkefølge i grammatikken.",
    },
    {
      question: "Hva er mengdeikonisitet?",
      options: ["At mer innhold gir mer form, slik flertallsendelsen legger form til grunnordet", "At ord for store ting har flere stavelser enn ord for små ting, i alle språk som er godt beskrevet", "At hyppige ord blir korte", "At antall ledd i en setning svarer til antall deltakere i den situasjonen setningen beskriver"],
      explanation: "Riktig svar er at mer innhold gir mer form. *Hund* mot *hunder* og *snill* mot *snillere* viser mønsteret. At hyppige ord blir korte, er økonomiprinsippet, som trekker motsatt vei.",
    },
    {
      question: "Hva er avstandsikonisitet?",
      options: ["At ledd som hører tett sammen i innhold, også står tett sammen i form i den ferdige ytringen", "At ord som betyr noe fjernt eller stort, uttales med lengre vokaler enn ord for noe nært og lite", "At avstanden mellom taler og lytter påvirker hvor tydelig ytringen artikuleres i en gitt situasjon", "At beslektede språk som ligger langt fra hverandre geografisk, utvikler stadig større forskjeller"],
      explanation: "Riktig svar er at ledd som hører sammen i innhold, står nær hverandre i form. Derfor er *tannlege* ett ord, mens en løsere forbindelse krever en hel beskrivende frase.",
    },
    {
      question: "Hva er rekkefølgeikonisitet?",
      options: ["At rekkefølgen i språket speiler rekkefølgen i verden, slik at det som skjedde først også nevnes først", "At ordstillingen i et språk følger den rekkefølgen barn tilegner seg konstruksjonene i under språkutviklingen", "At setningsledd kommer i den rekkefølgen som er lettest å uttale, slik at artikulasjonen flyter best mulig", "At det viktigste ledd i setningen alltid kommer først, slik at lytteren får hovedsaken med en gang"],
      explanation: "Riktig svar er at rekkefølgen i språket speiler rekkefølgen i verden. *Han låste opp og gikk inn* forstås som at låsingen kom først, og snur du leddene, snur tolkningen.",
    },
    {
      question: "Hva sier økonomiprinsippet?",
      options: ["At et uttrykk ikke skal være lengre enn det som trengs for at lytteren skal forstå hva som menes", "At språket velger de lydene som krever minst muskelarbeid, uansett hvilke konsekvenser det får for forståelsen", "At språkbrukere foretrekker ord de kjenner fra før, framfor nye ord som må læres i hver enkelt situasjon", "At et språk mister grammatiske kategorier over tid, slik at systemet stadig blir enklere gjennom historien"],
      explanation: "Riktig svar er at uttrykk ikke skal være lengre enn nødvendig. Prinsippet begrunner form med bruk, mens ikonisiteten begrunner form med innhold — og derfor kan de gi motstridende svar.",
    },
    {
      question: "Hva er korthetstendensen?",
      options: ["At det som brukes hyppig, har en tendens til å være kort", "At korte ord er lettere å huske enn lange", "At skriftspråk over tid utvikler kortere ord enn talespråk, fordi skriving er mer arbeidskrevende", "At forkortelser sprer seg raskere enn andre nyord, siden de er enkle å skrive i uformelle sammenhenger"],
      explanation: "Riktig svar er at det hyppige blir kort. Tendensen er en del av økonomiprinsippet, og den er noe annet enn markerthetskriteriet frekvens: det ene forklarer, det andre tester.",
    },
    {
      question: "Hva består spenningen mellom ikonisitet og økonomi i?",
      options: ["At ikonisiteten forventer mer form til mer innhold, mens økonomien forventer mindre form til hyppig bruk", "At ikonisiteten gjelder talespråket og økonomien skriftspråket, slik at de to aldri møtes i samme materiale", "At ikonisiteten er en eldre teori som er erstattet av økonomiprinsippet i nyere beskrivelser av språk", "At ikonisiteten gjelder ordforrådet og økonomien grammatikken, slik at de aldri gjelder samme fenomen"],
      explanation: "Riktig svar er at de to prinsippene gir motstridende forventninger til samme form. De gjelder samme materiale samtidig, og det er derfor utfallet må begrunnes i hvert enkelt tilfelle.",
    },
    {
      question: "Norske intetkjønnsord med én stavelse har samme form i entall og ubestemt flertall, som ett fjell og flere fjell. Hvilket prinsipp har fått viljen sin?",
      options: ["Økonomien, siden markøren spares og sammenhengen i setningen bærer opplysningen om tall i stedet", "Ikonisiteten, siden fravær av endelse i seg selv er en form som svarer til innholdet i flertallet", "Ingen av dem, siden nullflertallet er en tilfeldig arv fra eldre språktrinn uten noen forklaring", "Begge to samtidig, siden formen både er kort og speiler innholdet like presist som en endelse ville gjort"],
      explanation: "Riktig svar er økonomien. Mengdeikonisiteten ville forventet en endelse, men den kommer ikke, fordi sammenhengen som regel gjør tallet klart uansett — kostnaden er flyttet, ikke fjernet.",
    },
    {
      question: "Hva er den vanligste måten å tape poeng på i en oppgave om forholdet mellom ikonisitet og økonomi?",
      options: ["Å definere de to prinsippene hver for seg uten å føre dem mot hverandre", "Å bruke eksempler fra norsk i stedet for fra språk som er tydeligere beskrevet i faglitteraturen", "Å nevne for mange varianter av ikonisitet, slik at svaret blir uoversiktlig for den som leser det", "Å skrive for kort, siden slike oppgaver krever en grundig gjennomgang av begge prinsippenes historie"],
      explanation: "Riktig svar er å definere prinsippene hver for seg uten å føre dem mot hverandre. To korrekte definisjoner etter hverandre er ikke et svar på et spørsmål om spenning — svaret krever ett felles eksempel.",
    },
    {
      question: "Hva er markerthetsaksen?",
      options: ["Linjen et par eller en kategori plasseres på, med det umarkerte i den ene enden og det markerte i den andre", "Skalaen som måler hvor sjeldent et ord er i en gitt tekstsamling, fra det vanligste til det mest sjeldne", "Rekkefølgen morfemene står i inne i et ord, fra det mest sentrale til det mest perifere leddet", "Inndelingen av språk etter hvor mange grammatiske kategorier de markerer med egne endelser"],
      explanation: "Riktig svar er linjen fra umarkert til markert. Aksen kan ha flere trinn enn to: i *pen — penere — penest* er grunnformen minst markert og superlativen mest.",
    },
    {
      question: "Hvorfor kan oppslagsformen i en ordbok brukes som pekepinn på markerthet?",
      options: ["Fordi ordbøker følger de samme mønstrene som markerthetskriteriene beskriver, uten å være et kriterium selv", "Fordi ordbokredaktører velger den formen som er mest brukt i skriftspråket det aktuelle året", "Fordi oppslagsformen alltid er den korteste formen i paradigmet, uten unntak i noe språk", "Fordi ordboken er en normativ kilde, og markerthet er et normativt begrep om riktig språkbruk"],
      explanation: "Riktig svar er at ordbøker følger de samme mønstrene som kriteriene beskriver. Men oppslagsformen er en konvensjon og ikke et kriterium — i et svar skal den støtte kriteriene, aldri erstatte dem.",
    },
    {
      question: "Hva er markerthetsreversering?",
      options: ["At markerthetsforholdet snus innenfor et bestemt bruksområde, mens kriteriene fortsatt gjelder", "At et språk over tid bytter om på hvilke former som får endelser, slik at hele systemet snus rundt", "At to talere av samme språk er uenige om hvilken form som er den vanlige i en gitt sammenheng", "At et markert ledd blir så vanlig at det slutter å være markert, og forsvinner fra kategorien helt"],
      explanation: "Riktig svar er at forholdet snus innenfor et bruksområde. Det betyr ikke at markerthet er vilkårlig — kriteriene gjelder fortsatt, de kjøres bare innenfor det avgrensede området, og svaret skal si at det er gjort.",
    },
  ],
  'exfac03-spr-8-3': [
    {
      question: "Hvilke tre linjer består et glossert eksempel av?",
      options: ["Originallinjen med språkets egne ord, glosselinjen med betydningen av hver bit, og den frie oversettelsen", "Uttalelinje, bøyningslinje og en linje med den ordrette oversettelsen av hele eksempelet til norsk", "Setningslinje, analyselinje og en linje som viser hvilket setningsledd hver enkelt bit tilhører", "Skriftlinje, lydskriftlinje og en linje med den grammatiske kategorien til hvert enkelt ord i rekka"],
      explanation: "Riktig svar er originallinje, glosselinje og fri oversettelse. Glosselinja gir betydningen av hver bit, og originallinja gir rekkefølgen — det er kombinasjonen som gjør analysen mulig.",
    },
    {
      question: "Hvilken linje skal du lese når du vil avgjøre ordstillingen i språket?",
      options: ["Originallinjen, siden det er der språkets egne ord står i sin egen rekkefølge", "Den frie oversettelsen, siden den viser hva eksempelet betyr og dermed hvilket ledd som gjør hva", "Glosselinjen, siden den viser leddenes grammatiske funksjon", "Alle tre samtidig, siden rekkefølgen bare lar seg fastslå når linjene sammenholdes med hverandre"],
      explanation: "Riktig svar er originallinjen. Den frie oversettelsen står i norsk ordstilling og forteller deg ingenting om språket du analyserer — å bruke den som belegg er å analysere norsk.",
    },
    {
      question: "Hva betyr det at en glosse er skrevet med store bokstaver, som AKK eller PL?",
      options: ["At biten er grammatisk og gjengis med en forkortelse i stedet for med et vanlig norsk ord", "At biten er særlig viktig for analysen, og at oppgaven vil handle om nettopp denne delen av materialet", "At biten uttales med trykk i originalspråket, slik at store bokstaver markerer prominens i ytringen", "At biten ikke lar seg oversette til norsk, og at forkortelsen derfor er en nødløsning fra forfatterens side"],
      explanation: "Riktig svar er at biten er grammatisk. Små bokstaver betyr at biten oversettes med et vanlig norsk ord — og en glosse i store bokstaver er et sted språket markerer noe grammatisk, altså et funn du kan bygge på.",
    },
    {
      question: "Hva skiller en bindestrek fra et mellomrom i et glossert datasett?",
      options: ["Bindestreken skiller morfemer inne i ett ord, mens mellomrommet skiller to selvstendige ord fra hverandre", "Bindestreken viser at biten er lånt fra et annet språk, mens mellomrommet viser at biten er arvet", "Bindestreken markerer at biten er valgfri i konstruksjonen, mens mellomrommet markerer at den er obligatorisk", "Bindestreken brukes i originallinjen og mellomrommet i glosselinjen, som en ren skrivemåtekonvensjon"],
      explanation: "Riktig svar er at bindestrek skiller morfemer og mellomrom skiller ord. Forskjellen avgjør om du har en postposisjon foran deg, som er et eget ord, eller en kasusendelse, som er en del av ordet.",
    },
    {
      question: "Hvordan er poengene fordelt i typologioppgaven med glossert materiale i H2025?",
      options: ["1 poeng for riktig svar og 3 poeng for forklaringen", "2 poeng for riktig svar og 2 poeng for forklaringen, slik at de to delene veier like tungt til sammen", "4 poeng for riktig svar og ingen poeng for forklaringen", "3 poeng for riktig svar og 1 poeng for forklaringen, siden konklusjonen er det oppgaven spør etter"],
      explanation: "Riktig svar er 1 poeng for svaret og 3 for forklaringen. Begrunnelsen for fordelingen er at et spørsmål med to mulige svar kan gjettes riktig i omtrent halvparten av tilfellene, og forklaringen er det eneste leddet som ikke kan gjettes.",
    },
    {
      question: "Hvor mange av de fire poengene taper du hvis du svarer riktig, men uten begrunnelse?",
      options: ["3 av 4 poeng, siden det bare er konklusjonen som er verdt 1 poeng", "1 av 4 poeng, siden begrunnelsen bare er et tillegg", "2 av 4 poeng, siden svaret og begrunnelsen deler poengsummen likt mellom seg i denne oppgavetypen", "Ingen poeng, siden et riktig svar viser at analysen er gjennomført selv om den ikke er skrevet ned"],
      explanation: "Riktig svar er 3 av 4 poeng. Det er den dyreste enkeltfeilen i denne delen av emnet, og den er samtidig den enkleste å unngå: skriv testen og falsifiseringen, så har du begrunnelsen.",
    },
    {
      question: "Hva er trinn 4 i løsningsoppskriften for glossert data?",
      options: ["Å teste hypotesen mot hver enkelt datalinje, og skrive ut testen linje for linje i besvarelsen", "Å slå opp hvilke språk som har den egenskapen du tror du har funnet, for å kontrollere at analysen er mulig", "Å oversette hele datasettet til norsk, slik at du kan kontrollere at glossene henger sammen med helheten", "Å telle hvor mange linjer som bekrefter hypotesen, og oppgi andelen som støtter konklusjonen din"],
      explanation: "Riktig svar er å teste hypotesen mot hver datalinje og skrive ut testen. Trinn 4 og trinn 5, altså falsifiseringen, er de tre poengene i oppgaven.",
    },
    {
      question: "Hva er trinn 5 i løsningsoppskriften?",
      options: ["Å konkludere, og si hvilken datalinje som ville falsifisert hypotesen om den hadde sett annerledes ut", "Å oppsummere analysen i én setning, slik at leseren raskt ser hva du har kommet fram til til slutt", "Å sammenligne språket med norsk, slik at leseren får et kjent holdepunkt for den nye beskrivelsen", "Å vurdere hvor sannsynlig det er at datasettet er representativt for språket som helhet i alle sjangre"],
      explanation: "Riktig svar er å konkludere og si hvilken datalinje som ville falsifisert hypotesen. Et generelt forbehold av typen «det kan finnes unntak» erstatter ikke en konkret utskrevet falsifiserende linje.",
    },
    {
      question: "Hva bør du gjøre med en datalinje som ikke sier noe om konstruksjonen du analyserer?",
      options: ["Skrive én setning om at den ikke sier noe, og gå videre", "Utelate den fra gjennomgangen, siden en linje uten relevans bare gjør besvarelsen lengre enn nødvendig", "Anta at den likevel støtter hypotesen, siden ingen av linjene i et datasett er tilfeldig valgt av oppgavestilleren", "Bruke den som belegg for at datasettet er ufullstendig, og la det være et forbehold i konklusjonen"],
      explanation: "Riktig svar er å skrive én setning om at linja ikke sier noe. Det viser at du faktisk har lest hele materialet, og det er en av de billigste måtene å vise at testen er gjennomført.",
    },
    {
      question: "Hva er et minimalt kontrastpar i et datasett?",
      options: ["To linjer som er like på alle punkter bortsett fra ett, slik at forskjellen isolerer én variabel", "To linjer som viser det samme mønsteret med helt ulikt ordmateriale, slik at funnet blir uavhengig bekreftet", "To linjer der den ene er grammatisk og den andre er merket som ugrammatisk av en språkbruker", "To linjer som til sammen dekker alle de morfemene datasettet inneholder, uten noen overlapping"],
      explanation: "Riktig svar er to linjer som skiller seg på ett eneste punkt. Det er noe annet enn to linjer med ulikt ordmateriale — de gir en uavhengig bekreftelse, mens kontrastparet isolerer én variabel.",
    },
    {
      question: "Hvorfor skal du skrive ned hypotesen din før du tester den?",
      options: ["Fordi det da finnes noe konkret å teste mot dataene", "Fordi rekkefølgen i besvarelsen er poenggitt, og en besvarelse må følge oppskriftens trinn i riktig orden", "Fordi hypotesen teller som en del av konklusjonen, og dermed gir uttelling selv om testen ikke rekkes", "Fordi det gjør oppgaveteksten lettere å huske"],
      explanation: "Riktig svar er at det da finnes noe konkret å teste. Uten en nedskrevet hypotese ser leseren bare konklusjonen din — og det er prøvingen, ikke konklusjonen, som er verdt de tre poengene.",
    },
    {
      question: "Et datasett viser objektet foran verbet, men en preposisjon foran komplementet sitt. Hva er konklusjonen?",
      options: ["Språket er en blandingstype, siden verb og objekt peker én vei og adposisjonen den andre", "Datasettet må inneholde en feil, siden de to trekkene ikke kan opptre sammen i ett og samme språk", "Språket er hodefinalt, siden verbfrasen veier tyngst", "Konklusjonen må utsettes, siden ingen klassifisering er mulig før alle fem konstruksjonene er belagt"],
      explanation: "Riktig svar er at språket er en blandingstype. Korrelasjonen mellom verb–objekt og adposisjonstype er den sterkeste som finnes, men den er en tendens, og et unntak skal telles, ikke bortforklares.",
    },
    {
      question: "Hva gjør du når et datasett tillater to forsvarlige analyser?",
      options: ["Skriver ut begge analysene, peker ut skillelinja og velger med begrunnelse", "Velger den enkleste og lar den andre ligge, siden en besvarelse skal ha én klar konklusjon og ikke to", "Lar være å konkludere, siden materialet er for lite", "Velger den analysen som passer best med det du vet om ekte språk fra før, uten å nevne alternativet"],
      explanation: "Riktig svar er å skrive ut begge, peke ut skillelinja og velge med begrunnelse. Emnet godtar flere godt begrunnede analyser, og et svar som later som spørsmålet var enkelt, er svakere enn ett som viser valget.",
    },
    {
      question: "Hvilket markerthetskriterium har du som regel belegg for i et lite glossert datasett?",
      options: ["Formell kompleksitet, siden du ser hvilken form som bærer en endelse", "Frekvens, siden du kan telle forekomstene i datasettet", "Nøytralitet i spørsmål, siden datasett vanligvis inneholder både fortellende setninger og spørsmål", "Alle fire, siden et datasett er konstruert nettopp for at kriteriene skal kunne prøves mot materialet"],
      explanation: "Riktig svar er formell kompleksitet: du ser hvilken form som har en endelse og hvilken som ikke har det. Å telle forekomster i fem linjer er ingen frekvenstelling, og et svar bør si hvilke kriterier det mangler belegg for.",
    },
    {
      question: "Hva viser det at et ord kan bære kasusendelse og stå som objekt for et verb?",
      options: ["At ordet oppfører seg som et substantiv, siden bare substantivfraser bærer kasus og står som objekt", "At ordet er en adposisjon med utvidet bruk, siden adposisjoner i mange språk kan bøyes i kasus", "At ordet er et innholdsmorfem uten grammatisk funksjon, og derfor ikke hører hjemme i analysen", "At datasettet er tvetydig, og at spørsmålet om ordklasse ikke lar seg avgjøre på noe grunnlag"],
      explanation: "Riktig svar er at ordet oppfører seg som et substantiv. Adposisjoner tar komplement og er ikke selv objekter — dette er nettopp den observasjonen som kan skille to konkurrerende analyser fra hverandre.",
    },
    {
      question: "Hvorfor trener boka en oppgaveform som bare har stått i én termin?",
      options: ["Fordi prosedyren den trener, er den samme som brukes i klassifiseringsoppgavene ellers i emnet", "Fordi en ny oppgaveform alltid gjentas i den neste terminen, slik erfaringen fra dette emnet viser", "Fordi denne oppgaveformen er den mest poengtunge av alle oppgavetypene som finnes i emnet", "Fordi de andre oppgavetypene er så godt dekket i pensum at de ikke trenger egen trening i en bok"],
      explanation: "Riktig svar er at prosedyren er den samme som i emnets øvrige klassifiseringsoppgaver. Boka påstår ikke at formen er etablert — én forekomst i én termin er ett belegg, ikke et mønster.",
    },
  ],
  'exfac03-spr-9-1': [
    {
      question: "Hva er en synkron beskrivelse av et språk?",
      options: ["En beskrivelse av språket slik det er på ett bestemt tidspunkt, uten hensyn til historien", "En beskrivelse som sammenligner to stadier og navngir endringen mellom dem", "En beskrivelse som forklarer dagens former ved å vise hvor de har kommet fra", "En beskrivelse av et språk som fortsatt har levende talere et sted i verden"],
      explanation: "Riktig svar er at en synkron beskrivelse gjelder ett tidspunkt og beskriver systemet som et system. Den nærmeste fellen er å blande inn sammenligning av stadier — det er nettopp diakroni, og forskjellen ligger i antall tidspunkter, ikke i hvor gammelt materialet er.",
    },
    {
      question: "Er en beskrivelse av fonemsystemet i norrønt synkron eller diakron?",
      options: ["Synkron, fordi den beskriver ett system på ett tidspunkt og ikke setter opp to stadier", "Diakron, fordi norrønt er et eldre stadium enn moderne norsk og hører til språkhistorien", "Diakron, fordi enhver framstilling av et utdødd språkstadium bygger på sammenligning", "Verken det ene eller det andre, fordi norrønt ikke lenger har noen levende talere"],
      explanation: "Riktig svar er at beskrivelsen er synkron: den omfatter ett tidspunkt. Fellen er å la alderen på språket avgjøre, men kriteriet er hvor mange stadier beskrivelsen setter opp mot hverandre.",
    },
    {
      question: "Hva menes med at skillet mellom synkroni og diakroni er metodisk?",
      options: ["At det samme materialet kan brukes til begge, avhengig av hva du spør om", "At bare den ene av de to framgangsmåtene regnes som vitenskapelig i moderne lingvistikk", "At synkronien krever skriftlige kilder, mens diakronien også kan bygge på talemålsopptak", "At de to framgangsmåtene alltid gjelder hvert sitt materiale og aldri kan overlappe hverandre"],
      explanation: "Riktig svar er at det er spørsmålet, ikke materialet, som avgjør. Et og samme håndskrift kan brukes synkront, til å beskrive systemet i teksten, og diakront, til å vise hva som er endret fra et tidligere stadium.",
    },
    {
      question: "Hva er forholdet mellom variasjon og språkendring?",
      options: ["All endring går gjennom variasjon, men ikke all variasjon fører til endring", "All variasjon fører før eller senere til endring, siden den ene formen alltid vinner til slutt", "Variasjon gjelder dialektforskjeller, mens endring bare gjelder utviklingen i skriftspråket", "Variasjon og endring er to navn på det samme fenomenet, sett fra hvert sitt tidsperspektiv"],
      explanation: "Riktig svar er at endring forutsetter en periode med to former side om side, men at variasjon kan bestå uten at fordelingen forskyver seg. Fellen er å gjøre variasjon til en garanti for endring.",
    },
    {
      question: "Hvilket nivå rammer endringen fra norrønt fé, som dekket buskap, eiendom og penger, til moderne fe, som dekker husdyr?",
      options: ["Det semantiske nivået, siden ordet består som ord og det bare er innholdet som er smalere", "Det morfologiske nivået, siden ordets bøyingsklasse og endelser er blitt andre enn før", "Det fonologiske nivået, siden den lange vokalen i den norrøne formen har fått en annen kvalitet", "Det syntaktiske nivået, siden ordet ikke lenger kan stå i alle de samme setningstypene"],
      explanation: "Riktig svar er at endringen er semantisk: ordet består, bøyingen er ikke berørt, og det som er endret, er hvor mye ordet dekker. Den nærmeste fellen er å se på formen i stedet for på innholdet.",
    },
    {
      question: "Hva kjennetegner en morfologisk endring?",
      options: ["At ordets egen form endres, altså endelser, bøyingsklasser og grammatiske kategorier", "At uttalen av en bestemt lyd endres i en bestemt omgivelse i ordet", "At innholdet endres, slik at ordet viser til noe annet enn det gjorde tidligere", "At rekkefølgen på leddene i setningen endres, eller at nye ledd blir obligatoriske i den"],
      explanation: "Riktig svar er at morfologisk endring gjelder ordets egen form. Fellen er forvekslingen med lydendring: en endelse kan svekkes ved lydendring, men det som er borte morfologisk, er selve skillet mellom formene.",
    },
    {
      question: "Hvilken av disse er en syntaktisk endring?",
      options: ["At moderne norsk krever et formelt subjekt der norrønt kunne klare seg uten", "At norrønt hringr er blitt moderne ring, uten noen h foran r i framlyd i ordet", "At ordet fe dekker et smalere område i moderne norsk enn i norrønt", "At bok har den uregelmessige flertallsformen bøker, med en omlydt vokal"],
      explanation: "Riktig svar er kravet om formelt subjekt, som gjelder hvilke ledd en setning må ha. De tre andre gjelder henholdsvis lyd, betydning og bøying, og hører derfor til andre nivåer.",
    },
    {
      question: "Hva er forskjellen på betydningsutvidelse og betydningsinnsnevring?",
      options: ["Om ordet dekker flere eller færre ting enn før, altså om omfanget har vokst eller krympet", "Om ordet har fått en mer positiv eller en mer negativ verdiladning enn det hadde tidligere", "Om endringen først slår gjennom i skriftspråket eller først kan påvises i talemålet", "Om det er ordets grunnbetydning eller bare de avledede bibetydningene som er berørt"],
      explanation: "Riktig svar er at testen gjelder omfanget: hvor mange ting ordet kan brukes om før og etter. Fellen er å blande inn verdiladning — endres bare den, uten at omfanget endres, er det verken utvidelse eller innsnevring.",
    },
    {
      question: "Hva er analogi i språkendring?",
      options: ["At en form rettes inn etter et mønster som finnes fra før, slik at et unntak blir regelmessig", "At en lyd retter seg etter en nabolyd og blir mer lik den enn den var tidligere", "At to ord ender opp med samme betydning fordi de brukes i de samme situasjonene", "At to dialekter nærmer seg hverandre etter lang og tett kontakt mellom talerne"],
      explanation: "Riktig svar er at analogi er innretting etter et eksisterende mønster, som når et barn sier gådde etter mønster av badet og sparte. Den nærmeste fellen er assimilasjon, som også handler om tilpasning, men mellom lyder og ikke mellom grammatiske mønstre.",
    },
    {
      question: "Hva skiller analogi fra lydendring?",
      options: ["Lydendring rammer alle ord med samme lydomgivelse, analogi rammer ord som ligner grammatisk", "Analogi er en bevisst prosess hos språkbrukerne, mens lydendring skjer helt uten oppmerksomhet", "Analogi kan bare påvises i skriftlige kilder, mens lydendring må sluttes indirekte fra formene", "Analogi rammer bare verbbøyingen, mens lydendring kan ramme ord i alle ordklasser i språket"],
      explanation: "Riktig svar er at de to har hvert sitt nedslagsfelt: lyd mot grammatisk likhet. Fellen om bevissthet er utbredt, men uholdbar — ingen av prosessene er bevisste valg hos språkbrukerne.",
    },
    {
      question: "Hva er reanalyse?",
      options: ["At en form deles opp på en ny måte, uten at selve formen endrer seg i uttale eller skrift", "At et lånord tilpasses lydsystemet og bøyingssystemet i språket som låner det inn", "At en setning kan tolkes på to måter, slik at mottakeren må velge mellom tolkningene", "At forskere går gjennom et gammelt kildemateriale på nytt med bedre metoder enn før"],
      explanation: "Riktig svar er at oppdelingen er ny, mens formen står. Reanalysen blir først synlig når det nye leddet brukes videre, som når burger tas ut av hamburger og settes inn i nye ord.",
    },
    {
      question: "Hva kjennetegner grammatikalisering?",
      options: ["At et innholdsord blir et grammatisk element med mer abstrakt funksjon", "At en uregelmessig form blir regelmessig fordi den følger et mønster som finnes fra før", "At språket får en fastsatt skriftnorm med regler for bøying og for ordstilling", "At en konstruksjon som var mulig i et eldre stadium, ikke lenger er tillatt i det yngre"],
      explanation: "Riktig svar er overgangen fra innhold til grammatikk, som når skulle går fra å bety å ha plikt til noe, til å markere framtid. Den nærmeste fellen er analogi, som gjelder regelmessiggjøring av former og ikke rolleskifte.",
    },
    {
      question: "Hva kjennetegner urnordisk?",
      options: ["Det eldste nordiske stadiet med direkte belegg, kjent fra korte runeinnskrifter i stein", "Stadiet med fire kasus og en stor skriftlig litteratur, fra om lag år 700 og fram mot 1350", "Stadiet der kasusbøyingen er borte og ordstillingen har overtatt informasjonsbyrden", "Betegnelsen på det rekonstruerte opphavet til alle de germanske språkene i og utenfor Norden"],
      explanation: "Riktig svar er at urnordisk er det eldste nordiske stadiet med direkte belegg, med lengre ord enn de norrøne motstykkene. Beskrivelsen med fire kasus og stor litteratur passer på norrønt, som er stadiet etter.",
    },
    {
      question: "Hva menes med at dialektforskjeller ofte er ulikt utfall av samme endring?",
      options: ["At formene går tilbake på én felles utgangsform, og at den samme endringen gikk ulikt langt", "At alle dialekter rammes av den samme endringen, men at forskerne bruker ulike navn på den", "At dialektene har lånt formene sine av hverandre gjennom lang og tett kontakt over tid", "At skriftspråket normerer den ene formen, mens de andre lever videre i uformell tale"],
      explanation: "Riktig svar er at én utgangsform har fått ulike utfall, som når norrønt kasta gir kaste, kasta og kast i ulike deler av landet. Fellen er å forklare forskjellen med lån i stedet for med ulik rekkevidde for den samme svekkelsen.",
    },
    {
      question: "En oppgave er verdt 2 av 49 poeng og ber om forskjellen på synkroni og diakroni. Hva sier poengtallet om svaret?",
      options: ["At svaret skal være kort, men fullstendig: begge begrepene definert, med ett eksempel på hver", "At svaret bør bli så langt som tiden tillater, siden lengre svar gir flere sjanser til å treffe", "At det holder å definere begrepene, uten eksempler og uten en setning om hva skillet gjør", "At oppgaven kan hoppes over, siden to poeng betyr lite i det samlede regnskapet for terminen"],
      explanation: "Riktig svar er at poengtallet er en lengdeanvisning: kort, men med alle bestilte ledd. Fellen er å lese kortformen som en tillatelse til å droppe et ledd — kortformen kutter utdyping, aldri noe oppgaven har bedt om.",
    },
    {
      question: "Hvor ofte er språkendring tema i arkivets terminer, og hva er temaet verdt i poeng?",
      options: ["Tema i 4 av 6 terminer, men verdt bare 2 av 114 poeng i det samlede materialet fra terminene", "Tema i 6 av 6 terminer, og verdt omtrent en fjerdedel av poengene i de poengsatte terminene", "Tema i 1 av 6 terminer, og verdt 2 av 114 poeng i det samlede materialet fra terminene", "Tema i 4 av 6 terminer, og verdt like mye som fonetikk og fonologi er verdt i de samme terminene"],
      explanation: "Riktig svar er at temaet er hyppig, men billig: 4 av 6 terminer og 2 av 114 poeng. Nettopp den kombinasjonen er grunnen til at stoffet skal kunnes og svares kort på.",
    },
  ],
  'exfac03-spr-9-2': [
    {
      question: "Hva kjennetegner en betinga lydendring?",
      options: ["At den bare skjer når en bestemt omgivelse er til stede, mens lyden står uendret utenfor", "At den rammer lyden i alle omgivelser, uansett hvilke nabolyder som står rundt", "At den bare rammer ord som er lånt inn fra et annet språk på et bestemt tidspunkt", "At den kan tidfestes nøyaktig, i motsetning til de endringene vi bare kjenner indirekte"],
      explanation: "Riktig svar er at endringen forutsetter en bestemt omgivelse, og at lyden står uendret utenfor den. Den nærmeste fellen beskriver en ubetinga lydendring, der det nettopp ikke finnes noen betingelse å oppgi.",
    },
    {
      question: "Hvorfor regnes omgivelsen som en del av forklaringen ved en betinga lydendring?",
      options: ["Fordi påstanden blir usann uten den, og fordi den forteller hvilke andre ord som også er berørt", "Fordi det er tradisjon i faget å oppgi den, selv om typen alene er tilstrekkelig for analysen", "Fordi omgivelsen gjør det mulig å tidfeste endringen mer nøyaktig enn typen alene ville gjort", "Fordi omgivelsen avgjør om endringen skal regnes som lydendring eller som morfologisk endring"],
      explanation: "Riktig svar er at påstanden uten omgivelsen er usann for de ordene der endringen uteble, og at omgivelsen gjør analysen etterprøvbar. Fellen er å behandle omgivelsen som en tilleggsopplysning.",
    },
    {
      question: "Hva er en ubetinga lydendring?",
      options: ["En endring som rammer lyden i alle omgivelser, uansett hvilke nabolyder som står rundt den", "En endring som bare rammer trykksterke stavelser, uansett hvilke nabolyder som står rundt", "En endring som ikke kan forklares, fordi ingen har funnet noe mønster i hvilke ord den rammer", "En endring som rammer ett enkelt ord av grunner som ligger utenfor lydsystemet i språket"],
      explanation: "Riktig svar er at lyden endres overalt, som når den norrøne lange a-en er blitt å i moderne norsk. Fellen er å tro at ubetinga betyr uforklarlig — den er tvert imot den enkleste typen å beskrive, fordi det ikke finnes noen betingelse å oppgi.",
    },
    {
      question: "Hva hører med til en fonologisk omgivelse?",
      options: ["Lyden foran, lyden etter, posisjonen i ordet og trykket i den stavelsen lyden står i", "Betydningen av ordet, ordklassen det tilhører, og hvilken bøyingsklasse det står i", "Hvilket språkstadium formen er hentet fra, og hvilken skriftlig kilde den er belagt i", "Antallet stavelser i ordet og hvilken av dem som bærer hovedtrykket i uttalen"],
      explanation: "Riktig svar er de fire opplysningene om lydlige naboer, posisjon og trykk. Fellen er å ta med grammatiske opplysninger: en lydendring rammer alle ord med samme lydomgivelse, uavhengig av ordklasse og betydning.",
    },
    {
      question: "Hva er assimilasjon?",
      options: ["At en lyd blir mer lik en nabolyd ved å overta ett eller flere trekk fra den", "At to like lyder i samme ord blir mer ulike hverandre enn de var tidligere", "At en lyd faller bort uten at det kommer noen ny lyd i stedet for den i ordet", "At to lyder bytter plass med hverandre uten at noen av dem endrer kvalitet"],
      explanation: "Riktig svar er at lyden nærmer seg naboen ved å låne trekk fra den. De tre andre beskriver dissimilasjon, bortfall og metatese, som alle er egne typer med hver sin karakteristiske omgivelse.",
    },
    {
      question: "Hva vil det si at en assimilasjon er regressiv?",
      options: ["At lyden retter seg etter lyden som kommer etter den, slik at påvirkningen går bakover", "At lyden retter seg etter lyden som kommer foran den i ordet, slik at påvirkningen går framover", "At endringen har gått tilbake, slik at den eldre formen er kommet i bruk igjen senere", "At assimilasjonen bare virker i trykksvake stavelser og aldri i den trykksterke stavelsen"],
      explanation: "Riktig svar er at påvirkningen går bakover: den endrede lyden står først, og den senere lyden bestemmer. Fellen er å blande sammen regressiv og progressiv, og testen er alltid å finne ut hvilken av de to lydene som faktisk ble endret.",
    },
    {
      question: "Norrønt kald er blitt kall i mange østnorske dialekter. Hva slags assimilasjon er dette?",
      options: ["Total progressiv assimilasjon, siden det er d-en som er endret mens l-en foran står uendret", "Total regressiv assimilasjon, siden resultatet er en lang lyd og ikke bare en tilnærming", "Delvis progressiv assimilasjon, siden bare artikulasjonsstedet er overtatt fra nabolyden", "Delvis regressiv assimilasjon, siden lydene fortsatt kan skilles fra hverandre i uttalen"],
      explanation: "Riktig svar er total progressiv: d-en er den endrede lyden, l-en foran står uendret, og resultatet er identisk med naboen. Fellene bytter enten om på retningen eller undervurderer graden.",
    },
    {
      question: "God pluss endelsen -t gir godt. Hvilken retning har assimilasjonen?",
      options: ["Regressiv, siden det er den første av de to lydene som er endret og den siste som står", "Progressiv, siden det er den siste av de to lydene som er endret og den første som står", "Verken regressiv eller progressiv, siden begge lydene er endret i like stor grad her", "Regressiv, siden endelsen er lagt til etter at grunnformen allerede var på plass i språket"],
      explanation: "Riktig svar er regressiv: d-en er endret, t-en står uendret, og påvirkningen går altså bakover. Fellen er å lese retningen ut av rekkefølgen på lydene i stedet for ut av hvilken lyd som ble endret.",
    },
    {
      question: "Hva skiller total fra delvis assimilasjon?",
      options: ["Om de to lydene fortsatt kan skilles fra hverandre etter at endringen har funnet sted", "Om assimilasjonen virker inne i ordet eller også på tvers av en ordgrense i en sammensetning", "Om endringen er belagt i skriftlige kilder eller bare kan sluttes ut fra dagens uttaleformer", "Om endringen rammer en konsonant eller en vokal i den trykksterke stavelsen i ordet"],
      explanation: "Riktig svar er at graden avgjøres av hvor mange trekk som ble overtatt: ved total assimilasjon er lydene blitt identiske, ved delvis er de bare blitt likere. Fellen er å lete etter kriteriet i posisjonen i stedet for i resultatet.",
    },
    {
      question: "Hva er bortfall?",
      options: ["At en lyd som fantes i den eldre formen, er borte uten at noe kom i stedet", "At to lyder er blitt til én ny lyd som bærer trekk fra begge de opprinnelige lydene", "At en lyd blir så svak i trykksvak stilling at den bare høres i langsom og tydelig tale", "At en lyd bytter plass med nabolyden, slik at rekkefølgen i ordet blir en annen enn før"],
      explanation: "Riktig svar er at lyden forsvinner sporløst og at naboene står uendret. Den nærmeste fellen er sammensmelting, der det også blir færre lyder — men der den gjenværende lyden er en ny lyd som bærer trekk fra begge.",
    },
    {
      question: "Hva er forskjellen på apokope og synkope?",
      options: ["Apokope gjelder bortfall sist i ordet, mens synkope gjelder bortfall av vokal inne i ordet", "Apokope gjelder vokaler, mens synkope kan gjelde både vokaler og konsonanter inne i ordet", "Apokope er en betinga endring, mens synkope regnes som en ubetinga endring i faget", "Apokope gjelder trykksterke stavelser, mens synkope bare rammer trykksvake stavelser"],
      explanation: "Riktig svar er at posisjonen skiller dem: sist i ordet mot inne i ordet. Begge er bortfall av trykksvakt materiale, og begge virket i overgangen fra urnordisk til norrønt.",
    },
    {
      question: "Hva er innskudd?",
      options: ["At en ny lyd kommer til, ofte for å lette uttalen av en tung konsonantgruppe", "At en bøyingsendelse legges til i en form der den ikke fantes i det eldre stadiet av språket", "At et lån fra et annet språk settes inn i et ord som allerede fantes i språket fra før", "At en lyd blir lang der den tidligere var kort, slik at ordet får en tyngre stavelse"],
      explanation: "Riktig svar er at det kommer en ny lyd i tillegg, som vokalen mellom g og l når fugl uttales fugel. Fellen er å blande inn morfologi: innskuddslyden har ingen grammatisk funksjon og hører ikke til noe formativ.",
    },
    {
      question: "Hva er omlyd?",
      options: ["At vokalen i trykksterk stavelse endres av en vokal i den neste stavelsen i ordet", "At vokalen i en trykksvak stavelse svekkes og til slutt faller helt bort i utlyd", "At en konsonant retter seg etter konsonanten som står umiddelbart ved siden av den", "At vokalene i to nabostavelser bytter plass, slik at ordet får en annen lydstruktur"],
      explanation: "Riktig svar er at utløseren står i neste stavelse, altså at assimilasjonen virker på avstand. Det er nettopp derfor omlyd er den eneste typen i kapitlet der de to lydene ikke er naboer — og derfor utløseren gjerne er borte i formen vi ser.",
    },
    {
      question: "Hva utløser i-omlyd?",
      options: ["En i eller en j i neste stavelse, som trekker vokalen i den trykksterke stavelsen framover", "En u eller en annen rundet vokal i neste stavelse, som i den norrøne dativformen lǫndum", "En konsonantgruppe sist i ordet, som gjør uttalen av den foregående vokalen tyngre", "Trykket på den første stavelsen, som trekker vokalen framover i munnen i alle språk"],
      explanation: "Riktig svar er en i eller j i neste stavelse, som når urnordisk gastiz ble norrønt gestr. Fellen er å bytte om på utløserne: u er utløseren ved u-omlyd, og resultatet blir da en rundet vokal.",
    },
    {
      question: "Hva er metatese?",
      options: ["At to lyder bytter plass i ordet, uten at noen av dem forsvinner eller endrer kvalitet", "At to lyder smelter sammen til én ny lyd som bærer trekk fra begge de opprinnelige", "At en lyd faller bort i den ene formen, mens den er beholdt i den andre av de to formene", "At en lyd får en ny kvalitet fordi den står ved siden av en lyd med andre egenskaper"],
      explanation: "Riktig svar er ombytting av rekkefølge, som i de norrøne sideformene hross og hors. Kjennetegnet er at antallet lyder er det samme før og etter, og at ingen av dem har fått nye trekk.",
    },
    {
      question: "Ordet norsk uttales med én retrofleks lyd der skriften har r og s. Hva slags endring er dette?",
      options: ["Sammensmelting, siden r og s er blitt til én ny lyd som verken er r eller s i uttalen", "Bortfall av r, siden den ene av de to lydene ikke lenger høres i den vanlige uttalen", "Total regressiv assimilasjon, siden r-en er blitt lik s-en som følger etter den i ordet", "Metatese, siden lydene har byttet plass i uttalen sammenlignet med skriftbildet i ordet"],
      explanation: "Riktig svar er sammensmelting: to lyder er blitt til én ny som verken er r eller s. Fellen bortfall er nesten riktig og likevel gal, fordi s-en ikke sto uendret — den er blitt retrofleks, og det sporet er hele saken.",
    },
    {
      question: "Hva er testen som skiller sammensmelting fra total assimilasjon?",
      options: ["Om resultatlyden er identisk med en av inngangslydene, eller om den er en helt ny lyd", "Om de to lydene sto i samme stavelse eller i to ulike stavelser i det opprinnelige ordet", "Om endringen er belagt i skrift, eller om den bare kan sluttes ut fra dagens uttaleform", "Om lyden som forsvinner, står foran eller etter den lyden som blir stående i den nye formen"],
      explanation: "Riktig svar er om resultatlyden allerede fantes som en av inngangslydene. Ved total assimilasjon er resultatet en lang utgave av en kjent lyd; ved sammensmelting er resultatet en lyd som ikke var der før.",
    },
    {
      question: "Hva er dissimilasjon?",
      options: ["At to like eller nesten like lyder i samme ord blir mer ulike hverandre enn før", "At en lyd nærmer seg nabolyden ved å overta ett eller flere av trekkene dens", "At en lyd faller bort fordi den ligner for mye på en annen lyd i det samme ordet", "At to ord med nesten lik form skilles fra hverandre ved at det ene får en ny betydning"],
      explanation: "Riktig svar er at lydene blir mer ulike, som når latinsk peregrinus er blitt pilegrim. Fellen er assimilasjon, som er den motsatte bevegelsen og langt vanligere — derfor er dissimilasjon aldri førstevalget når du navngir en endring.",
    },
    {
      question: "Hva er fellesbetegnelsen for et sett lydendringer som hver forutsetter en bestemt omgivelse?",
      options: ["Betinga lydendringer, altså endringer som bare inntreffer når en bestemt omgivelse er der", "Regelmessige lydoverganger, altså endringer som rammer alle ord med samme lydstruktur", "Kombinatoriske omlydsfenomener, altså endringer der to nabolyder virker på hverandre", "Ubetinga lydendringer, altså endringer som virker uavhengig av hvilke lyder som står rundt"],
      explanation: "Riktig svar er betinga lydendringer, og uttrykket er en av emnets seks obligatoriske termer. H2018-veiledningen sier at det kreves for full uttelling, og fire riktige typeanalyser uten fellesbetegnelsen er et ufullstendig svar.",
    },
    {
      question: "Hva er det femte og siste trinnet i prosedyren for å analysere et sett oppgitte lydendringer?",
      options: ["Å avslutte med den fellesbetegnelsen som gjelder for hele settet av oppgitte endringer", "Å tidfeste endringene så nøyaktig kildene tillater, og oppgi hvilket stadium hver form hører til", "Å vurdere om endringene er regelmessige, altså om de rammer alle ord med samme struktur", "Å sammenligne med et nabospråk for å se om den samme endringen har skjedd også der"],
      explanation: "Riktig svar er fellesbetegnelsen, som er et eget ledd i svaret og ikke en oppsummering du kan droppe. De tre andre er ting som kan være verdt å nevne, men som ingen oppgave i denne sjangeren har bedt om.",
    },
    {
      question: "Hva er den vanligste svakheten i en analyse av en oppgitt lydendring?",
      options: ["At typen blir navngitt riktig, mens den omgivelsen som utløste endringen, aldri blir oppgitt i svaret", "At omgivelsen beskrives grundig, mens selve typen aldri blir navngitt med et fagord", "At analysen bruker for mange fagtermer, slik at framstillingen blir tung å følge for leseren", "At formene gjengis unøyaktig, slik at sammenligningen tegn for tegn bygger på et feil grunnlag"],
      explanation: "Riktig svar er at omgivelsen mangler. Merkelappen alene er halve svaret, fordi omgivelsen er det som gjør analysen etterprøvbar — og i klassifiseringssjangeren er det forklaringen som betaler mest.",
    },
    {
      question: "Hva er en svarabhaktivokal?",
      options: ["En vokal som skytes inn for å lette uttalen av en tung konsonantgruppe", "En vokal som svekkes og til slutt faller bort i trykksvak stilling sist i ordet", "En vokal som endrer kvalitet fordi den påvirkes av en vokal i den neste stavelsen", "En vokal som bærer en grammatisk funksjon og skiller to bøyingsformer fra hverandre"],
      explanation: "Riktig svar er innskuddsvokalen, som den mellom g og l i uttalen fugel. Fellen er å tro at den har en grammatisk funksjon — den hører ikke til noe formativ og følger ordet gjennom hele bøyingen.",
    },
  ],
  'exfac03-spr-9-3': [
    {
      question: "Hva er behaviorismens syn på språklæring?",
      options: ["At språk er innlært atferd, formet gjennom stimulus, respons og forsterkning over tid", "At språkkunnskap er en indre kapasitet som i stor grad er medfødt hos mennesket", "At språk læres gjennom formell undervisning og bevisst innlæring av regler og former", "At språkets grunnmønster er felles for alle språk, og at barnet velger blant faste muligheter"],
      explanation: "Riktig svar er at språk regnes som innlært atferd, formet av erfaring. De andre alternativene beskriver mentalismen eller tanken om en universalgrammatikk, som legger forklaringen i den lærende og ikke i omgivelsene.",
    },
    {
      question: "Hva er forsterkning i den behavioristiske modellen?",
      options: ["Konsekvensen som følger etter responsen, og som gjør at responsen blir mer sannsynlig neste gang", "Gjentakelsen som over tid gjør en innlært form til en automatisk vane hos den lærende", "Signalet fra omgivelsene som setter i gang atferden i utgangspunktet, før responsen kommer", "Rettingen en voksen gir når barnet bruker en form som ikke finnes i språket rundt det"],
      explanation: "Riktig svar er at forsterkningen er konsekvensen som følger responsen, og som avgjør om den gjentas. Fellen er å forveksle den med stimulusen, som kommer før og setter atferden i gang.",
    },
    {
      question: "Hva er mentalismens hovedpåstand?",
      options: ["At språkkunnskap er en indre kapasitet som erfaringen bare setter i gang og fyller ut", "At språk læres på samme måte som all annen atferd, gjennom erfaring og gjentakelse", "At språkkunnskap best studeres ved å observere hva folk faktisk sier i ulike situasjoner", "At barn lærer språk raskere når de får systematisk retting og oppmuntring fra de voksne"],
      explanation: "Riktig svar er at forklaringen legges i den lærende selv. Mentalismen aksepterer forklaringer som viser til indre størrelser, mens behaviorismen holder seg til det observerbare.",
    },
    {
      question: "Hva er overgeneralisering hos barn?",
      options: ["At barnet bruker en regel også der språket har et unntak, slik som i jeg gådde og to fotter", "At barnet bruker et ord om flere ting enn de voksne gjør, som når alle dyr kalles hund", "At barnet gjentar en form det nettopp har hørt, uten å ha forstått hva den betyr ennå", "At barnet lærer seg for mange regler samtidig og derfor bruker lengre tid på hver av dem"],
      explanation: "Riktig svar er at regelen brukes også på unntakene, som i jeg gådde og to fotter. Formene er interessante fordi de verken er imitert eller tilfeldige, og derfor teller de som belegg for at barnet har trukket ut en regel.",
    },
    {
      question: "Hva er stimulusfattigdom som argument?",
      options: ["At det barnet hører, ikke er nok til å forklare det barnet ender opp med å kunne", "At noen barn vokser opp med langt mindre språklig kontakt enn andre og derfor lærer saktere", "At språket rundt barnet er fullt av feilstarter og avbrytelser og derfor er dårlig som modell", "At barn får svært lite systematisk undervisning i grammatikk før de begynner på skolen"],
      explanation: "Riktig svar er gapet mellom input og resultat. Argumentet sier ikke at erfaring er unødvendig, bare at den ikke er tilstrekkelig alene — og det er den presiseringen som gjør argumentet til noe annet enn en påstand om at input ikke betyr noe.",
    },
    {
      question: "Hva er forskjellen på kompetanse og performanse?",
      options: ["Kompetanse er den underliggende kunnskapen, performanse er den faktiske språkbruken", "Kompetanse gjelder morsmålet, mens performanse gjelder språk man har lært senere i livet", "Kompetanse er evnen til å forstå, mens performanse er evnen til selv å produsere ytringer", "Kompetanse er det man kan bevisst, mens performanse er det man behersker uten å tenke over det"],
      explanation: "Riktig svar er skillet mellom kunnskap og bruk. Skillet er nyttig fordi en forsnakkelse ikke uten videre viser at språkbrukeren mangler regelen — den kan skyldes støy i performansen.",
    },
    {
      question: "Hva forklarer behaviorismen godt?",
      options: ["Hvorfor barn lærer akkurat det språket, det ordforrådet og den uttalen de vokser opp med", "Hvorfor barn produserer former de aldri har hørt, som jeg gådde og to fotter", "Hvorfor språktilegnelsen går i omtrent samme rekkefølge på tvers av svært ulike språk", "Hvorfor voksne som regel trenger undervisning for å lære seg et nytt språk godt"],
      explanation: "Riktig svar er at modellen er sterk der læringen faktisk hviler på erfaring: ordforråd og uttale følger av hva barnet hører. De tre andre er nettopp de observasjonene modellen har vansker med å forklare.",
    },
    {
      question: "Hva er en kritisk periode i språktilegnelsen?",
      options: ["Et tidsvindu der tilegnelsen går lett, og etter hvis utløp den blir merkbart tyngre", "Den fasen der barnet lærer flest nye ord i løpet av kortest mulig tid i tidlig barndom", "Perioden der barnet gjør flest overgeneraliseringer og derfor trenger mest retting fra voksne", "En bestemt alder der læringen brått blir umulig, slik at et nytt språk ikke lenger kan tilegnes"],
      explanation: "Riktig svar er tidsvinduet med avtakende letthet. Fellen er å lese perioden som en absolutt grense — voksne lærer språk, og noen lærer dem svært godt; det som endrer seg, er hvor lett det går.",
    },
    {
      question: "Hva er den beste måten å bygge et svar på når oppgaven ber om kontrasten mellom behaviorisme og mentalisme?",
      options: ["Å velge noen få spørsmål og la begge synene svare på hvert av dem, i ett og samme avsnitt", "Å skrive ett grundig avsnitt om hvert syn, i den rekkefølgen oppgaveteksten nevner dem, og la leseren trekke sammenligningen", "Å redegjøre for det synet som står sterkest i dag, og nevne det andre kort til slutt", "Å begynne med den historiske bakgrunnen og deretter følge utviklingen fram til i dag"],
      explanation: "Riktig svar er å organisere etter spørsmål, ikke etter syn, slik at kontrasten blir synlig i strukturen. To atskilte portretter er den vanligste svakheten: begge synene er da behandlet, men sammenligningen er overlatt til leseren.",
    },
    {
      question: "Hva er retorikk?",
      options: ["Læren om hvordan man taler og skriver slik at et publikum lar seg overbevise", "Læren om hvordan ytringer får mening i den situasjonen de blir framført i", "Læren om hvordan setninger bygges opp av ledd med hver sin funksjon i strukturen", "Læren om hvordan språk endrer seg over tid og hvordan stadier kan sammenlignes"],
      explanation: "Riktig svar er læren om overbevisende tale og skrift. Den nærmeste fellen er pragmatikken, som også gjelder språk i bruk, men som beskriver hvordan mening oppstår uten å gi råd om hva som virker.",
    },
    {
      question: "Hva er den første av talerens fem faser i klassisk retorikk?",
      options: ["Å finne stoffet, altså å avgjøre hvilke argumenter og eksempler saken og publikum krever", "Å ordne stoffet, altså å bestemme rekkefølgen og hvor det sterkeste argumentet skal stå", "Å utforme språket, altså å velge ord, setningsbygning og de virkemidlene saken krever", "Å huske stoffet, slik at talen kan holdes uten at taleren må lese fra et manuskript"],
      explanation: "Riktig svar er å finne stoffet: hvilke argumenter og eksempler saken og publikum krever. De tre andre er faser to, tre og fire, og rekkefølgen teller fordi modellen beskriver en arbeidsgang.",
    },
    {
      question: "Hva gjelder den tredje fasen i klassisk retorikk?",
      options: ["Den språklige utformingen: ordvalg, setningsbygning og virkemidler", "Framføringen i rommet, med stemmebruk, tempo og blikk", "Innsamlingen av argumenter og eksempler som saken og publikum krever av taleren", "Memoreringen av disposisjonen og de sentrale formuleringene i talen som skal holdes"],
      explanation: "Riktig svar er den språklige utformingen. På dette punktet er både innhold og rekkefølge allerede bestemt, og det som gjenstår, er språkdrakten.",
    },
    {
      question: "Hvilken av de fem retorikkfasene glemmes lettest?",
      options: ["Å huske stoffet, altså den fasen som virker minst aktuell i en skriftlig kultur", "Å framføre talen, altså fasen publikum faktisk ser", "Å finne stoffet, altså den fasen som avgjør hvilke argumenter talen skal bygge på", "Å ordne stoffet, altså den fasen som bestemmer rekkefølgen på argumentene i talen"],
      explanation: "Riktig svar er å huske stoffet, som virker minst aktuell i en skriftlig kultur og derfor ryker oftest. Å levere fire av fem faser er den typiske feilen i denne oppgaven, og den er lett å unngå ved å telle før du leverer.",
    },
    {
      question: "Hva er forskjellen på de fem fasene og de tre overbevisningsmidlene etos, patos og logos?",
      options: ["Fasene beskriver talerens arbeidsgang, midlene beskriver hva som virker på publikum", "Fasene gjelder muntlige taler, mens overbevisningsmidlene bare gjelder skriftlige tekster", "Fasene er den moderne inndelingen, mens overbevisningsmidlene tilhører den eldste retorikken", "Fasene gjelder forberedelsen, mens overbevisningsmidlene alltid gjelder selve framføringen"],
      explanation: "Riktig svar er at de to inndelingene svarer på hvert sitt spørsmål: når noe gjøres, mot hva som virker. De skal derfor ikke blandes sammen i et svar, selv om begge hører til klassisk retorikk.",
    },
    {
      question: "Hvor ofte er behaviorisme og mentalisme dokumentert prøvd i arkivets terminer?",
      options: ["I 1 av 6 terminer, altså i én enkelt av de terminene arkivet til sammen består av", "I 4 av 6 terminer, altså like ofte som språkendring er tema i det samme materialet", "I 6 av 6 terminer, siden grunnsynene er premisset for hele innføringen i faget", "I 2 av 6 terminer, én gang tidlig i serien og én gang i den siste av terminene"],
      explanation: "Riktig svar er 1 av 6 terminer, og temaet utgjør 1 av 45 spørsmål. Spørsmålet er fra H2021, altså så sent at temaet ikke kan regnes som ute av emnet.",
    },
    {
      question: "Hva betyr det at et tema er merket bør kjenne til?",
      options: ["At det skal få færre minutter enn kjernestoffet, men ikke kan utelates", "At det bare er nødvendig for den som sikter mot den høyeste karakteren i emnet", "At det kan hoppes over hvis tiden er knapp, siden det sjelden gir poeng på eksamen", "At det er stoff man forventes å kjenne fra før"],
      explanation: "Riktig svar er at merkingen styrer tidsbruken, ikke om stoffet skal leses. Kommer spørsmålet, er det billig å svare godt på — og dyrt å ikke ha hørt om.",
    },
  ],
};

export default quizData_exfac03spr;
