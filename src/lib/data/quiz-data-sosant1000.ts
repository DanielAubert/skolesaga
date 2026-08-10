import type { QuizQuestion } from './quiz-data';

const quizData_sosant1000: Record<string, QuizQuestion[]> = {
  'sosant1000-0-1': [
    {
      question: "Hvordan er eksamen i SOSANT1000 satt sammen fra og med høsten 2022?",
      options: ["Fire timers skoleeksamen med Del 1 kortsvar (fire av seks) og Del 2 langsvar (ett av tre), der begge deler må bestås", "Fire timers skoleeksamen med Del 1 kortsvar (seks av seks) og Del 2 langsvar (to av tre), der de to delene veier likt", "Fire timers skoleeksamen der kandidaten velger fritt mellom kortsvar og langsvar helt til de fire timene er brukt opp", "Hjemmeeksamen på 2500 til 3000 ord der kandidaten velger ett av tre oppgavealternativer"],
      explanation: "Riktig er fire timers digital skoleeksamen med fire kortsvar av seks i Del 1 og ett langsvar av tre i Del 2, og begge deler må bestås. Distraktoren om seks kortsvar tester nettopp den vanlige misforståelsen om at man skal svare på alle. Hjemmeeksamensformatet var virkelig i bruk høsten 2020 og 2021, men er ikke dagens form.",
    },
    {
      question: "Hva sier strykregelen i Del 1?",
      options: ["Står to eller flere av de fire valgte kortsvarene til F, står hele eksamen til F", "Står ett av de fire valgte kortsvarene til F, står hele Del 1 til F, uansett de tre andre", "Står tre av de seks kortsvarene til F, trekkes karakteren ned med ett trinn", "Står halvparten av kortsvarene til F, må kandidaten ta Del 1 på nytt neste semester"],
      explanation: "Riktig er at to eller flere F blant de fire valgte kortsvarene gir F på hele eksamen. Regelen gjelder de fire du faktisk har valgt, ikke alle seks spørsmålene i settet. Sensor gjør likevel en helhetsvurdering, så gode øvrige svar kan veie opp bommer som skyldes at oppgaven ble misforstått.",
    },
    {
      question: "Hvorfor bør en kandidat ikke svare på alle seks kortsvarene?",
      options: ["Sensor leser uansett bare fire, så tiden til de to ekstra er hentet fra svar som telte", "Sensor trekker eksplisitt fra ett karaktertrinn for hvert ekstra svar som leveres", "Oppgavesettet gjør de to siste svarene ugyldige og annullerer også langsvaret", "Sensor plukker automatisk ut de fire svakeste av de seks svarene og vurderer bare dem"],
      explanation: "Riktig er at sensor uansett leser fire, slik at arbeidet med de to ekstra svarene er tid tatt fra de svarene som telte. Det finnes ingen formell straff eller annullering, og sensor plukker heller ikke de svakeste — feilen er ren tidssløsing. I feilregisteret er dette feil nummer 7.",
    },
    {
      question: "Hvilke tre nivåer graderer sensor hvert enkelt spørsmål i?",
      options: ["Minimumskrav, god og meget god", "Bestått, godt bestått og utmerket bestått", "Tilstrekkelig, tilfredsstillende og fremragende", "Grunnleggende, videregående og selvstendig"],
      explanation: "Riktig er minimumskrav, god og meget god, som går igjen ved hvert spørsmål i alle de ti sensorveiledningene. Nivåene svarer omtrent til E og D, til C, og til A og B. De andre formuleringene ligner på karakterbeskrivelser, men er ikke malen veiledningene bruker.",
    },
    {
      question: "Hva må stå i et etnografisk eksempel for at det skal telle som forankring?",
      options: ["Folk eller gruppe, sted og omtrentlig tid, forsker og verk, og hva studien faktisk viste", "Folk eller gruppe, verdensdel og et anslag over hvor mange mennesker praksisen gjelder for", "Forsker, verk og utgivelsesår, slik at leseren kan slå opp kilden i litteraturlista bakerst", "Et fenomen fra et fjernt samfunn som virker fremmed sett fra kandidatens eget"],
      explanation: "Riktig svar er at alle fire leddene må med, og at det siste leddet — hva studien faktisk viste — er det som oftest mangler. En henvisning som bare oppgir forsker og verk er en kildeangivelse, ikke etnografisk forankring. Å nevne en verdensdel er heller ikke et eksempel.",
    },
    {
      question: "Hva regnes som den viktigste enkeltmarkøren for meget god, altså A-markøren?",
      options: ["Å sette to eller flere pensumtekster eksplisitt i forhold til hverandre", "Å nevne så mange pensumtekster som overhodet mulig", "Å skrive vesentlig lengre svar enn oppgaven ber om", "Å bruke flest mulig fagtermer fra begrepsbanken i hvert avsnitt"],
      explanation: "Riktig er å koble tekstene: si hva de er enige om, hvor de skiller lag, eller hva den ene ser som den andre overser. Veiledningene sier eksplisitt at det er koblingene, ikke antall siterte navn, som løfter fra god til meget god. Å ramse opp tekster side om side uten kobling er tvert imot feil nummer 4.",
    },
    {
      question: "Hva krever 3-referanse-regelen i Del 2?",
      options: ["Minst tre pensumtekster, og hver av dem skal bære et etnografisk eksempel argumentet hviler på", "Minst tre pensumtekster, som er nok til å oppfylle kravet så lenge de er navngitt i innledningen", "Minst tre etnografiske eksempler, som gjerne kan hentes fra ett og samme kapittel i én pensumtekst", "Minst tre avsnitt der kandidaten tar stilling til påstanden i oppgaveteksten"],
      explanation: "Riktig er at tre tekster skal brukes, ikke bare nevnes: hver av dem må bære et konkret etnografisk eksempel som argumentet faktisk hviler på. Tre eksempler fra samme tekst dekker ikke kravet om kildebredde. Å bare navngi tre tekster i innledningen er nettopp den mekaniske lesningen veiledningene advarer mot.",
    },
    {
      question: "Hva ligger i sensors helhetsvurdering?",
      options: ["Eksamen veies samlet, slik at gode øvrige svar kan veie opp bommer som skyldes at oppgaven ble misforstått", "Eksamen veies samlet, slik at karakteren settes etter kandidatens beste enkeltsvar", "Eksamen veies samlet, slik at Del 2 alene kan bære et helt strøket Del 1", "Eksamen veies samlet, slik at manglende etnografi kan erstattes med desto flere pensumreferanser"],
      explanation: "Riktig er at sensor veier eksamen som helhet og kan la gode øvrige kortsvar og et godt langsvar veie opp to misforståtte kortsvar. Helhetsvurderingen setter ikke karakteren etter toppen din, og den opphever ikke kravet om at begge deler må bestås. Den er en sikkerhetsventil, ikke en strategi.",
    },
    {
      question: "Hvilke temaer opptrer hyppigst i de 11 eksamenssettene?",
      options: ["Økonomi og bytte, deretter globalisering, religion og ritualer, og miljø og natur", "Kjønn, deretter etnisitet og nasjonalisme, og til slutt status og rolle", "Kultur og relativisme, deretter status og rolle, og til slutt slektskap", "Metode og feltarbeid, deretter sosial differensiering, så politikk og makt"],
      explanation: "Riktig rekkefølge på toppen er økonomi og bytte, globalisering, religion og ritualer, og miljø og natur. Kjønn og etnisitet er derimot blant de mest lavfrekvente som selvstendige spørsmål. Metode, differensiering og politikk er hyppige, men ligger under de fire toppene.",
    },
    {
      question: "En kandidat leser bare ritualkapitlene, svært grundig, og lar de andre temaene ligge. Hvilken feil er dette?",
      options: ["Feil nummer 12 — ubalansert besvarelse, sterk på ett svar og tynn på resten", "Feil nummer 7 — å svare på flere kortsvar enn de fire som blir lest og vurdert", "Feil nummer 2 — bare én eller to pensumkilder i langsvaret", "Feil nummer 1 — begrepet defineres riktig, men uten et eneste konkret eksempel"],
      explanation: "Riktig er feil nummer 12, ubalansert besvarelse: kandidaten bygger ett svært sterkt svar og lar resten stå tynt, noe som er farlig når to svake kortsvar kan velte hele eksamen. Feil 7 handler om antall svar, ikke om fordelingen av lesetid. Feil 1 og 2 gjelder henholdsvis manglende etnografi og for få kilder.",
    },
  ],
  'sosant1000-0-2': [
    {
      question: "Hvilke fire trinn består et kortsvar av, i riktig rekkefølge?",
      options: ["Definisjon med avsender, distinksjonen, det etnografiske eksempelet, den løftende setningen", "Distinksjonen, definisjon med avsender, den løftende setningen, det etnografiske eksempelet", "Innledning med problemstilling, tre pensumtekster, komparasjon, begrunnet konklusjon", "Definisjon, eget hverdagseksempel, motargument, oppsummering av hele temaet"],
      explanation: "Riktig rekkefølge er definisjon med avsender, distinksjon, etnografisk eksempel og løftende setning. Strukturen med tre pensumtekster og komparasjon hører til langsvaret i Del 2, ikke til kortsvaret. Et eget hverdagseksempel kan komme i tillegg, men aldri i stedet for pensumetnografien.",
    },
    {
      question: "Hva er problemet med å definere status som «hvor høyt opp man er i samfunnet»?",
      options: ["Det er dagligtalens betydning; i faget er status en posisjon med plikter og rettigheter, ikke et mål på anseelse", "Det er for langt formulert til et kortsvar der man bare har omkring tolv minutters skrivetid til rådighet", "Det blander sammen status og rolle, som er statusens dynamiske og utøvende side", "Det utelater at status alltid er tilskrevet og aldri kan endres gjennom egen innsats"],
      explanation: "Riktig er at formuleringen henter betydningen fra dagligtalen: i faget er status en sosial posisjon som gir plikter og rettigheter, uavhengig av rangering. Rolle er riktignok statusens dynamiske side, men det er ikke det som er galt i denne definisjonen. Status kan dessuten være både tilskrevet og ervervet.",
    },
    {
      question: "Hva er en tilskrevet status?",
      options: ["En status som tildeles uavhengig av personens egen innsats, som kaste, alder eller slektstilhørighet", "En status som oppnås gjennom personens egne handlinger, som utdanning, yrke eller politisk verv", "En status som følger av biologiske forhold, og som samfunnet omkring derfor ikke kan endre", "En status som er knyttet til anseelse, og som andre tilskriver personen etter fortjeneste"],
      explanation: "Riktig er at tilskrevet status tildeles uavhengig av egen innsats. Det motsatte, ervervet status, oppnås gjennom handling. Distraktoren om biologi er den viktigste fellen: tilskrevne statuser er sosialt tildelte, ikke naturgitte, og å blande de to er feil nummer 9, å naturalisere det sosiale.",
    },
    {
      question: "Hva må stå i et etnografisk eksempel i tillegg til folk, sted og forsker?",
      options: ["Hva studien faktisk viste — altså hvilket poeng eksempelet belegger", "Hvor mange informanter forskeren hadde, og hvor lenge feltarbeidet varte", "Hvilket år verket ble oversatt til norsk, slik at leseren finner riktig utgave", "En vurdering av om praksisen er moralsk forsvarlig sett fra kandidatens ståsted"],
      explanation: "Riktig er at eksempelet må si hva studien viste; uten det leddet er det en opplysning og ikke en forankring. Antall informanter og oversettelsesår er ikke det sensorveiledningene etterspør. En moralsk vurdering hører ikke hjemme i et kortsvar og blander sammen metodologisk og etisk relativisme.",
    },
    {
      question: "Hvorfor skal etnografi skrives i datid med tidfesting og ikke i presens?",
      options: ["Presens fastfryser et folk i etnografens feltperiode og fremstiller dem som historieløse", "Presens er grammatisk ukorrekt på norsk når man omtaler publisert forskning", "Presens gjør teksten lengre og bruker opp tid man trenger på de andre kortsvarene", "Presens er forbeholdt teoretiske begreper, mens empiri alltid omtales i preteritum"],
      explanation: "Riktig er at presens fremstiller folkegruppen som om den står stille i feltperioden, noe faget kaller etnografisk nåtid og har arbeidet lenge for å komme ut av. Det er en faglig presisjonsfeil, ikke en grammatikkfeil. Presens er greit om praksiser som beviselig pågår, og da med en tidsmarkør som «i dag» eller «fortsatt».",
    },
    {
      question: "Hva kjennetegner et kortsvar som ligger på nivået minimumskrav?",
      options: ["Korrekt definisjon eller gjengivelse, men uten distinksjon og uten eller med svært tynn etnografi", "Korrekt definisjon med distinksjon og et pensumeksempel, men uten noen kobling til andre pensumtekster", "En sammenhengende drøfting der påstanden prøves mot minst én innvending og deretter justeres underveis i svaret", "Et svar med flere faktafeil i definisjonen, som likevel har rikt etnografisk materiale"],
      explanation: "Riktig er at minimumskravet er korrekt definisjon eller gjengivelse uten distinksjon og uten reell etnografi. Definisjon med distinksjon og pensumeksempel er derimot beskrivelsen av nivået god. Et minimumssvar er sjelden feil, og det er nettopp det som gjør det farlig for kandidaten.",
    },
    {
      question: "Hva løfter et kortsvar fra god til meget god?",
      options: ["En selvstendig kobling som setter svaret i forhold til en annen pensumtekst eller til monografien", "En vesentlig lengre besvarelse med enda flere detaljer om nøyaktig det samme etnografiske eksempelet", "En innledning som gjør rede for hele temaets plass i sosialantropologiens faghistorie fra Malinowski av", "En avslutning der kandidaten tar personlig stilling til om praksisen bør fortsette"],
      explanation: "Riktig er den selvstendige koblingen på tvers av tekster, som sensorveiledningene peker på som toppmarkøren også i korte svar. Lengde er ikke skillet — i eksemplene i kapitlet er A-versjonen bare ett avsnitt lengre enn C-versjonen. En personlig moralsk stillingtagen er ikke det oppgaven ber om.",
    },
    {
      question: "Hva innebærer feil nummer 8, å overse begrepets distinksjoner?",
      options: ["At svaret nevner det ene leddet i et begrepspar og glemmer det andre, slik at god blir til minimumskrav", "At svaret bruker for få pensumtekster i et langsvar der oppgaven ber om minst tre", "At svaret gjengir en etnografi ellers korrekt, men tillegger den en konklusjon studien aldri trakk", "At kandidaten svarer på fem eller seks kortsvar i stedet for de fire sensor faktisk leser"],
      explanation: "Riktig er at feil 8 handler om begrepsparet: å nevne tilskrevet uten ervervet, eller kula uten gimwali. For få kilder i langsvar er feil nummer 2, og å svare på flere enn fire kortsvar er feil nummer 7. Feiltilskrivning av en etnografi er en egen og alvorlig feil, men ikke nummer 8.",
    },
    {
      question: "Hva sier oppgaveformuleringen «velg to av …» om hvordan du skal svare?",
      options: ["Svar på nøyaktig to, hver med egen presis kjerne og eget eksempel — å ta alle er å bomme på oppgaven", "Svar på minst to, og legg gjerne til flere av dem for å vise bredde dersom du har god tid til overs", "Velg de to som er lettest, og nevn kort de øvrige for å dokumentere at du kjenner dem", "Svar på to i hoveddelen, og bruk avslutningen til å oppsummere hele temaet de hører til"],
      explanation: "Riktig er å svare på nøyaktig to, med egen kjerne og eget eksempel til hver. Å behandle alle åtte nøkkelordene i en slik oppgave er ikke bredde, men et brudd på oppgaven, altså feil nummer 5. Formuleringen kommer typisk om Eriksens nøkkelord om globalisering.",
    },
    {
      question: "Hvordan er tiden fordelt på en fire timers eksamen i SOSANT1000?",
      options: ["Cirka 10 minutter til lesing og valg, cirka 48 til de fire kortsvarene, cirka 90–100 til langsvaret, resten buffer", "Cirka 30 minutter til lesing og valg, cirka 120 til de fire kortsvarene, resten til langsvaret uten buffer", "Cirka 120 minutter til Del 1 og cirka 120 til Del 2, siden de to delene teller nøyaktig like mye", "Cirka 60 minutter til hvert av de fire kortsvarene, og så skrives langsvaret med den tiden som måtte bli til overs"],
      explanation: "Riktig fordeling er ti minutters lesing og valg, cirka tolv minutter per kortsvar, halvannen time på langsvaret og en buffer på 35 til 45 minutter. At delene teller likt betyr ikke at de skal ta like lang tid, siden langsvaret er en full drøftende tekst. Kortsvarene skal ifølge settene være relativt kortfattede.",
    },
    {
      question: "Hva er den løftende setningen i et kortsvar?",
      options: ["Én setning som kobler svaret til en annen pensumtekst, til monografien eller til fagets holisme", "Én setning som oppsummerer alt kandidaten allerede har skrevet i svaret ovenfor, bare med andre ord", "Én setning som forklarer hvorfor temaet er relevant for kandidatens eget yrkesvalg og videre studieløp", "Én setning som varsler sensor om hvilke av de seks spørsmålene kandidaten har valgt"],
      explanation: "Riktig er koblingen ut av svaret: til en annen tekst, til monografien eller til holismen. En ren oppsummering legger ikke til noe nytt og løfter derfor ikke. Setningen er det eneste valgfrie av de fire trinnene, men også det billigste veien mot meget god.",
    },
    {
      question: "Et svar definerer emisk og etisk perspektiv korrekt, forklarer begge ledd, men har ingen eksempler og ingen navngitt forfatter. Hvor plasseres det?",
      options: ["På minimumskrav, fordi manglende etnografisk forankring er feil nummer 1", "På god, fordi distinksjonen er komplett og begge leddene er forklart hver for seg", "På meget god, fordi svaret viser at kandidaten behersker et vanskelig begrepspar", "Det kan ikke vurderes, fordi et svar uten forfatter regnes som ubesvart"],
      explanation: "Riktig er minimumskrav: alt som står der er korrekt, men et abstrakt og eksempelløst svar kan ifølge veiledningene ikke nå toppen. En komplett distinksjon alene løfter ikke til god når trinn tre mangler helt. Et svar uten navngitt forfatter vurderes selvsagt, det plasseres bare lavt på akse fire.",
    },
    {
      question: "Hva er formålet med at kortsvarsrubrikken er binær?",
      options: ["At leseren skal kunne krysse av hvert punkt uten skjønn og dermed rette sitt eget svar selv", "At sensor skal kunne bruke den til å sette karakter raskere på hvert enkelt av de fire kortsvarene", "At poengsummen fra de seks punktene skal kunne regnes om til en bokstavkarakter på skalaen A til F", "At kandidaten skal kunne dokumentere overfor instituttet at kravene er oppfylt"],
      explanation: "Riktig er selvrettingen: en binær sjekkliste lar deg avgjøre uten skjønn om et punkt er oppfylt, slik at du finner konkrete grep i stedet for å gjette på en karakter. Rubrikken er bokas verktøy, ikke sensors, og den regnes ikke om til noen karakter. Hvert punkt du ikke kan krysse av, peker på ett bestemt tillegg.",
    },
    {
      question: "Hva er den vanligste grunnen til at et ellers ferdig kortsvar stopper på minimumskrav?",
      options: ["At eksempelet nevnes uten at det står hva studien faktisk viste", "At definisjonen er formulert i for få ord til at sensor kan vurdere den", "At kandidaten har brukt et hverdagseksempel i tillegg til pensumeksempelet", "At svaret er skrevet i en annen rekkefølge enn de fire trinnene tilsier"],
      explanation: "Riktig er det manglende leddet om hva studien viste; svaret ser da ferdig ut, men har ingen forankring sensor kan måle. Et hverdagseksempel i tillegg til pensumetnografien er fullt ut tillatt og kan være en styrke. Rekkefølgen på trinnene er en hjelp, ikke et vurderingskriterium i seg selv.",
    },
    {
      question: "Hva menes med at tilskrevne statuser er sosialt tildelte og ikke naturgitte?",
      options: ["At de ikke kan velges bort av den enkelte, men likevel er skapt av mennesker og kan endres av dem", "At de er biologisk bestemte og derfor ligger utenfor både den enkeltes og samfunnets rekkevidde å endre", "At de bare finnes i samfunn med sterk stat, der myndighetene tildeler dem formelt", "At de kan byttes ut av den enkelte gjennom utdanning, arbeid eller flytting til et helt annet sted i landet"],
      explanation: "Riktig er at tilskrevet status er utenfor den enkeltes valg, men innenfor samfunnets: den er menneskeskapt og kan endres, om enn tregt. Å kalle dem biologisk bestemte er feil nummer 9, å naturalisere det sosiale. Statuser man selv kan oppnå gjennom utdanning eller arbeid, er per definisjon ervervede.",
    },
  ],
  'sosant1000-0-3': [
    {
      question: "Hva krever 3-referanse-regelen, og hva skjer om den brytes?",
      options: ["Minst tre pensumtekster i langsvar; én eller to trekker ned uansett hvor godt svaret ellers er", "Minst tre pensumtekster i hvert av de fire kortsvarene, ellers regnes svaret som ubesvart", "Minst tre etnografiske eksempler i langsvaret, gjerne hentet fra en og samme pensumtekst", "Minst tre henvisninger i litteraturlista, som leveres separat sammen med selve besvarelsen"],
      explanation: "Riktig er minst tre pensumtekster i langsvar, og at færre trekker ned uavhengig av øvrig kvalitet. Kravet gjelder Del 2, ikke kortsvarene, der kravet er minst ett etnografisk eksempel. Tre eksempler fra samme tekst dekker ikke kildebredden regelen etterspør.",
    },
    {
      question: "Hva menes med at tre tekster nevnt ikke er tre tekster brukt?",
      options: ["At hver tekst må bære et etnografisk eksempel som argumentet faktisk hviler på", "At hver tekst må gjengis i minst ett helt avsnitt med presis referanse til forfatteren", "At tekstene må presenteres i samme rekkefølge som de står oppført på pensumlista", "At kandidaten må ha lest tekstene i sin helhet og ikke bare sammendragene av dem"],
      explanation: "Riktig er at teksten må bære et eksempel argumentet hviler på; en setning som bare sier at forfatteren også har skrevet om temaet, teller ikke. Lengden på omtalen er ikke kriteriet, og rekkefølgen på pensumlista er irrelevant. Sensorveiledningene vektlegger egne koblinger tyngre enn antall siterte navn.",
    },
    {
      question: "Hva er den analytiske tråden i et langsvar?",
      options: ["En påstand som svarer på oppgaven, og som hvert avsnitt arbeider for", "En plan for teksten der kandidaten annonserer hva hvert avsnitt skal handle om", "En kronologisk fremstilling av hvordan begrepet har utviklet seg i faghistorien", "En avsluttende oppsummering som binder sammen alt som er skrevet tidligere i teksten"],
      explanation: "Riktig er påstanden som resten av teksten arbeider for; den lar deg spørre om hvert avsnitt bringer argumentet videre. En annonsering av innholdet er en innholdsfortegnelse, ikke en tråd. Å mangle tråd er feil nummer 3, rent referat uten drøfting.",
    },
    {
      question: "Hva skiller en begrepsavklaring fra en definisjon i innledningen til et langsvar?",
      options: ["Avklaringen viser at begrepet kan leses på flere måter, og sier hvilken lesning teksten legger til grunn", "Avklaringen er lengre og gir en mer detaljert redegjørelse for hva begrepet betyr i faget", "Avklaringen navngir hvilken pensumforfatter begrepet er hentet fra, noe definisjonen ikke gjør", "Avklaringen plasseres helt til slutt i besvarelsen, mens definisjonen kommer først i innledningen"],
      explanation: "Riktig er at avklaringen problematiserer: den viser at begrepet er tvetydig og velger lesning, og dermed at oppgaven er et reelt spørsmål. Lengde og forfatternavn er ikke det som skiller de to. Sensorveiledningene nevner faghistorisk problematisering som en markør for meget god.",
    },
    {
      question: "Hva er den vanligste svakheten i en besvarelse som ellers ligger på nivået god?",
      options: ["Tekstene står ved siden av hverandre uten at noen setning kobler dem sammen", "Etnografien mangler helt, slik at hele argumentet hviler på teoretiske påstander", "Kandidaten har brukt for mange pensumtekster og rukket for lite dybde i hver av dem", "Konklusjonen tar for tydelig standpunkt i stedet for å veie hensynene mot hverandre"],
      explanation: "Riktig er manglende kobling, altså feil nummer 4: tre riktige avsnitt som aldri møtes er den typiske C-besvarelsen. Manglende etnografi ville plassert svaret lavere enn god. En skarp konklusjon er tillatt og kan være fullgod toppform når den er etnografisk begrunnet.",
    },
    {
      question: "Hvilke tre former for eksplisitt kobling mellom pensumtekster nevner kapitlet?",
      options: ["Likhet, forskjell og spenning eller uenighet mellom tekstene", "Innledning, hoveddel og avslutning i selve oppbygningen av teksten", "Definisjon, distinksjon og eksempel, akkurat som i kortsvarets trinn", "Kronologi, geografi og tematikk som ordningsprinsipper for materialet"],
      explanation: "Riktig er likhet, forskjell og spenning. Definisjon, distinksjon og eksempel er kortsvarets tre første trinn og handler om ett begrep, ikke om forholdet mellom tekster. Spenningsformen gir som regel mest uttelling, fordi den gjør konklusjonen mer presis i stedet for mer forsiktig.",
    },
    {
      question: "Hva kreves i en komparativ oppgave som ikke kreves i et vanlig langsvar?",
      options: ["At begge leddene behandles på hver sammenligningsakse, med etnografisk belegg på begge", "At kandidaten bruker minst fem pensumtekster, siden to ulike fenomener skal dekkes samtidig", "At kandidaten konkluderer med hvilket av de to fenomenene som er viktigst i faget i dag", "At de to fenomenene presenteres hver for seg i hvert sitt avsnitt, uten sammenblanding"],
      explanation: "Riktig er kravet om begge ledd på hver akse, med etnografi på begge. Å presentere de to hver for seg uten å møtes er nettopp det som gjør svaret til to parallelle referater. Å beskrive bare det ene leddet er feil nummer 11, ensidig komparasjon.",
    },
    {
      question: "Hva innebærer helhetsvurderingen for kravet om tre pensumtekster?",
      options: ["Har kortsvarene vist god pensumbeherskelse, er det akseptabelt at langsvaret bruker færre tekster", "Har langsvaret tre tekster, kan sensor se bort fra svakheter i to av de fire kortsvarene", "Har kandidaten mange tekster i langsvaret, kompenserer det for at etnografien i dem er mangelfull", "Har besvarelsen god språkføring gjennomgående, veier det opp for at kildekravet ikke er nådd"],
      explanation: "Riktig er at gode kortsvar kan gjøre færre tekster i langsvaret akseptabelt, fordi sensor veier eksamen som helhet. Presiseringen må sies høyt, ellers skriver kandidaten tre tynne referanser i stedet for to gode. Språkføring er ikke en av de fire vurderingsaksene.",
    },
    {
      question: "Hva vil det si å antropologisere en tekst som ikke står på pensumlista?",
      options: ["Å knytte den til et pensumbegrep, behandle materialet som etnografi og si hva den tilfører argumentet", "Å oversette den til fagets terminologi ved å bytte ut hverdagsord med antropologiske fagtermer", "Å oppgi den i litteraturlista sammen med pensumtekstene, slik at den teller med i kildebredden", "Å sammenligne den med en pensumtekst som handler om omtrent det samme temaet og det samme tidsrommet"],
      explanation: "Riktig er de tre grepene: knytte til et pensumbegrep, behandle materialet som etnografi med hvem, hvor, når og hva det viste, og si hva den tilfører. Å bytte ut ord er ikke det samme som å gjøre et materiale antropologisk relevant. En slik tekst bør dessuten regnes som en fjerde stemme, ikke som en av de tre påkrevde.",
    },
    {
      question: "Hva er problemet med å avslutte et langsvar med at «det er sammensatt»?",
      options: ["Det er ingen konklusjon, men en unnvikelse, og regnes som referat uten drøfting", "Det er en for skarp konklusjon som utelukker at andre landinger kan være forsvarlige", "Det er en formulering som er forbudt i faget fordi den brukes i sensorveiledningene", "Det er en konklusjon som krever at kandidaten har brukt minst fire pensumtekster"],
      explanation: "Riktig er at en uttalelse om at noe er sammensatt uten grunner ikke er en konklusjon, men feil nummer 3 i ny drakt. En landing må svare på spørsmålet som faktisk ble stilt, og den må begrunnes. En skarp landing er derimot fullt tillatt når den er etnografisk begrunnet.",
    },
    {
      question: "Hva er feil nummer 5, misforstått oppgave?",
      options: ["Å svare ved siden av: på temaet i stedet for på spørsmålet, eller bare på ett av flere delspørsmål", "Å bruke en pensumtekst som ikke står oppført på pensumlista for akkurat det aktuelle semesteret", "Å skrive en tekst som er vesentlig kortere enn det oppgavesettet legger opp til i tid", "Å velge et langsvarsalternativ som bygger på en monografi kandidaten ikke har lest ferdig"],
      explanation: "Riktig er å svare ved siden av oppgaven, enten på temaet generelt eller på bare ett av delspørsmålene. Feilen kan gi F på et kortsvar, og to slike svar utløser strykregelen i Del 1. Motgiften er å telle instruksjonsverbene før man begynner og igjen når man er ferdig.",
    },
    {
      question: "Hvordan bør en egen erfaring fra arbeid eller oppvekst brukes i et langsvar?",
      options: ["Som illustrasjon av et pensumbegrep, med kobling tilbake til pensumetnografien og drøftingsaksen", "Som selvstendig belegg for påstanden, siden førstehåndskunnskap er sterkest", "Som innledning til besvarelsen, slik at sensor ser at kandidaten har relevant bakgrunn i temaet", "Den bør holdes helt utenfor, fordi alt materiale i en besvarelse skal komme fra pensumlista"],
      explanation: "Riktig er å starte i begrepet, bruke erfaringen som illustrasjon og koble tilbake til pensumetnografien. Erfaring som selvstendig belegg er det veiledningene kaller pensumløs synsing. Samtidig er det feil å holde erfaringen helt utenfor: riktig konvertert er den en styrke.",
    },
    {
      question: "Hvorfor er det verdt å bruke ti minutter på en disposisjon før man skriver langsvaret?",
      options: ["Fordi disposisjonen gir hvert avsnitt en funksjon i argumentet og gjør landingen enkel å skrive", "Fordi sensor vurderer disposisjonen separat som en del av vurderingen av besvarelsen", "Fordi oppgavesettet krever at kandidaten leverer en disposisjon sammen med besvarelsen", "Fordi det er den eneste måten å rekke å bruke alle de tre pensumtekstene oppgaven krever, på"],
      explanation: "Riktig er at disposisjonen gir avsnittene funksjoner og lar deg stryke det som ikke bringer argumentet videre. Disposisjonen leveres ikke og vurderes ikke i seg selv. Man kan i prinsippet rekke tre tekster uten disposisjon, men da uten tråden som skiller drøfting fra referat.",
    },
    {
      question: "Hva er riktig om Marcel Mauss og materialet i «Gaven»?",
      options: ["Han gjorde ikke feltarbeid selv, men syntetiserte blant annet Malinowskis og Boas' materiale", "Han gjorde feltarbeid på Trobriandøyene og bygde hele analysen på sitt eget innsamlede materiale", "Han gjorde feltarbeid på nordvestkysten av Nord-Amerika og beskrev potlatchen ved selvsyn", "Han samlet inn materialet gjennom spørreskjemaer som ble sendt til misjonærer i flere verdensdeler"],
      explanation: "Riktig er at Mauss ikke var i felt: han syntetiserte andres etnografi, blant annet Malinowskis Trobriand-materiale og Boas' potlatch-materiale, sammen med rettshistoriske kilder. Å skrive at han fant noe i sitt eget feltarbeid er en faglig feil sensor merker umiddelbart. Trobriand-feltarbeidet var Malinowskis.",
    },
    {
      question: "Hva viste Kathleen Millars studie fra fyllinga Jardim Gramacho i Rio de Janeiro?",
      options: ["At prekært arbeid er en livsform med egen logikk — rytme og selvstendighet, ikke bare mangel", "At søppelplukkerne manglet alternativer på arbeidsmarkedet og derfor ble værende på fyllinga mot sin vilje", "At uformelt arbeid gradvis erstattes av vanlig lønnsarbeid når byene vokser og markedene modnes", "At arbeidet på fyllinga var organisert etter et gavebytte styrt av gjensidige forpliktelser"],
      explanation: "Riktig er at prekaritet hos Millar er en livsform med egen logikk: folk vendte tilbake fordi arbeidets rytme og relative selvstendighet passet et prekært liv. Å lese studien som en ren elendighetsbeskrivelse er den vanligste feillesningen av den. Gavebyttet er Mauss' analyse, ikke Millars.",
    },
  ],
  'sosant1000-1-1': [
    {
      question: "Hvordan definerer Eriksen sosialantropologi?",
      options: ["Som det sammenlignende studiet av sosialt liv og sosiale prosesser", "Som det systematiske studiet av fremmede kulturer og deres skikker og tradisjoner", "Som studiet av menneskets biologiske og kulturelle utvikling gjennom lange tidsrom", "Som studiet av hvordan samfunn er bygget opp av institusjoner med hver sin funksjon"],
      explanation: "Riktig er det sammenlignende studiet av sosialt liv og sosiale prosesser. Definisjonen om fremmede kulturer er både flat og faglig gal, siden faget like gjerne studerer norsk lakseoppdrett som fjerne øyer. Studiet av menneskets biologiske utvikling hører til andre grener av antropologien enn sosialantropologien.",
    },
    {
      question: "Hva er holisme i sosialantropologien?",
      options: ["Prinsippet om at økonomi, slektskap, religion og politikk henger sammen og ikke lar seg skille rent", "Prinsippet om at forskeren skal beskrive absolutt alle sider ved samfunnet hun studerer", "Prinsippet om at hvert samfunn må vurderes ut fra sine egne moralske standarder og ikke andres", "Prinsippet om at samfunnet er mer enn summen av individene, og at individet derfor er uinteressant"],
      explanation: "Riktig er at de fire feltene henger sammen og ikke lar seg skille rent fra hverandre; det er et metodisk krav, ikke et krav om fullstendighet. Å vurdere et samfunn ut fra dets egne standarder er kulturrelativisme, et annet begrep. Holismen gjør ikke individet uinteressant, den plasserer det i relasjoner.",
    },
    {
      question: "Hva viste Evans-Pritchards studie av Nuer?",
      options: ["En politisk orden uten sentralstat, der grupper fusjonerte og splittet seg etter konfliktens nivå", "En form for anarki der konflikter mellom slektsgrupper ble avgjort med vold og helt uten regler", "Et sentralisert høvdingdømme der én slektsgruppe hadde myndighet over de andre gruppene", "Et samfunn der økonomien var skilt ut som eget felt fordi kvegholdet var så spesialisert"],
      explanation: "Riktig er orden uten sentralstat gjennom segmentær organisering. Å oversette dette til anarki er den vanligste feilen i Nuer-svar og snur analysen på hodet: ordenen var virksom, den var bare ikke sentralisert. Kveg var tvert imot det som bandt økonomi, slektskap og religion sammen.",
    },
    {
      question: "Hva menes med at kveg var et gjennomgripende idiom blant Nuer?",
      options: ["At kveg samtidig var levebrød, brudegave, offerdyr og målestokk i konfliktoppgjør", "At kveg var den eneste formen for eiendom som kunne arves innenfor avstamningsgruppen", "At kveg ble brukt som byttemiddel på samme måte som penger i et pengeøkonomisk samfunn", "At kveg hadde religiøs betydning og derfor ikke kunne slaktes eller brukes til mat i det hele tatt"],
      explanation: "Riktig er at kveg opptrådte i økonomi, slektskap, religion og konfliktløsning samtidig, og derfor er det beste enkelteksempelet på holisme. Kveg fungerte ikke som allmenne penger, og de ble både slaktet og ofret. Poenget er nettopp at det ikke var fire atskilte systemer, men ett sett handlinger sett fra fire kanter.",
    },
    {
      question: "Hva er segmentær organisering?",
      options: ["Grupper definert av avstamning som slår seg sammen eller splittes avhengig av konfliktens nivå", "En inndeling av samfunnet i faste yrkesgrupper med hver sin funksjon og hvert sitt ansvarsområde", "En rangordning av slektsgrupper der de eldste avstamningslinjene har myndighet over de yngre", "En geografisk oppdeling av territoriet i faste segmenter med hver sin lokale leder og forsamling"],
      explanation: "Riktig er balansen mellom avstamningsgrupper som fusjonerer og splittes etter hvilket nivå konflikten ligger på. Det er ikke en rangordning og ikke en funksjonsdeling — det er nettopp fraværet av et fast sentrum som gjør ordenen segmentær. Mekanismen er samtidig et sterkt argument for holismen.",
    },
    {
      question: "Hva er et emisk perspektiv?",
      options: ["Aktørenes eget perspektiv: hvordan menneskene selv forstår og kategoriserer det de gjør", "Analytikerens perspektiv: de kategoriene forskeren bruker for å kunne sammenligne samfunn", "Et moralsk perspektiv der forskeren tar stilling til om praksisen er forsvarlig eller ikke", "Et perspektiv der forskeren beskriver samfunnet slik det så ut før kolonitiden begynte i området"],
      explanation: "Riktig er aktørenes eget perspektiv, altså beskrivelsen innenfra i deres egne begreper. Analytikerens utenfrakategorier er det etiske perspektivet, og de to må holdes fra hverandre. Å ta det emiske på alvor forplikter ikke forskeren til å være enig i noe.",
    },
    {
      question: "Hva betyr «etisk» i skillet mellom emisk og etisk?",
      options: ["Utenfra, i analytikerens sammenlignbare kategorier — ordet har ingenting med moral å gjøre", "Moralsk forsvarlig, altså at forskeren vurderer om praksisen kan aksepteres eller må fordømmes", "Etnisk, altså knyttet til den folkegruppen som studeres og til gruppens egen selvforståelse", "Empirisk, altså basert på observerbare data i stedet for på informantenes egne utsagn"],
      explanation: "Riktig er at etisk her betyr utenfrabeskrivelse i sammenlignbare kategorier; termen kommer fra skillet mellom fonemisk og fonetisk i språkvitenskapen. Forvekslingen med moral er den vanligste enkeltfeilen i dette stoffet, og å si i svaret at man er klar over den, viser presisjon. «Segmentær organisering» er et typisk etisk begrep.",
    },
    {
      question: "Hvilke to feller advarer Eriksen mot i komparasjon?",
      options: ["Å overdrive likheten innad i en gruppe, og å overdrive ulikheten mellom grupper", "Å sammenligne for få samfunn, og å sammenligne samfunn som ligger for langt fra hverandre", "Å bruke for gamle etnografier, og å bruke etnografier samlet inn under kolonistyre", "Å generalisere ut fra ett felt, og å studere samfunn man ikke behersker språket i"],
      explanation: "Riktig er de to motsatte overdrivelsene: enheten innad som viskes ut, og avstanden utad som blåses opp. Begge gjør grensen mellom grupper skarpere enn den er, og motgiften mot begge er konkret etnografi med navngitte mennesker og situasjoner. De andre problemene er reelle, men er ikke de to fellene Eriksen fremhever.",
    },
    {
      question: "Hva menes med mikro og makro i uttrykket «små steder, store spørsmål»?",
      options: ["At faget arbeider i et lite utsnitt for å vise hvordan store prosesser virker der de treffer bakken", "Å sammenligne altfor få samfunn, og å sammenligne samfunn som ligger for langt fra hverandre", "At faget deler samfunnet inn i et mikronivå av individer og et makronivå av institusjoner", "At små samfunn er representative utvalg av verden, slik at funnene kan generaliseres statistisk"],
      explanation: "Riktig er at det lille stedet er et strategisk utsnitt der en mekanisme kan ses i arbeid, ikke et statistisk representativt utvalg. Nettopp derfor er det svake svaret å hevde at stedet er typisk. Shahs sju netter med én geriljagruppe er ikke et utvalg, men et sted der stat, ressursutvinning og opprør griper inn i hverandre.",
    },
    {
      question: "Hva er riktig om Marcel Mauss og materialet i «Gaven»?",
      options: ["Han var aldri i felt, men sammenlignet andres etnografi, blant annet Malinowskis og Boas' materiale", "Han gjorde feltarbeid på Trobriandøyene og bygde analysen sin på kula-materiale han hadde samlet inn selv", "Han gjorde feltarbeid blant Nuer og overførte funnene derfra til andre samfunn i Melanesia", "At små samfunn er representative utvalg av verden, slik at funnene derfra kan generaliseres statistisk"],
      explanation: "Riktig er at Mauss syntetiserte andres etnografi sammen med rettshistoriske kilder. Trobriand-feltarbeidet var Malinowskis, og potlatch-materialet kom fra Boas. Å skrive at Mauss fant noe i sitt eget feltarbeid er en faglig feil sensor merker umiddelbart, og den slår ut på presisjonsaksen.",
    },
    {
      question: "Hva er et totalt sosialt fenomen hos Mauss?",
      options: ["En handling som i én og samme bevegelse er økonomi, slektskap, religion, politikk og moral", "Et fenomen som forekommer i alle kjente samfunn og derfor kan kalles kulturelt universelt", "Et fenomen som omfatter hele befolkningen i et samfunn og ikke bare en avgrenset gruppe", "En hendelse som er så omfattende at den forandrer samfunnets grunnleggende struktur varig"],
      explanation: "Riktig er handlingen som er flere ting på én gang; gaven er Mauss' hovedeksempel. Begrepet er holismen gjort til analytisk verktøy, ikke en påstand om utbredelse eller omfang. Det er samtidig en av de mest brukbare løftende koblingene i kortsvar.",
    },
    {
      question: "Hva skiller kula fra gimwali?",
      options: ["Kula er seremonielt prestisjebytte i faste partnerskap, gimwali er den prosaiske prutthandelen", "Kula er handel med mat og bruksting, gimwali er utveksling av armbånd og halskjeder", "Kula foregikk mellom slektninger, mens gimwali bare foregikk mellom fremmede fra andre øyer", "Kula var forbeholdt menn med høy status, mens gimwali var åpent for alle uansett posisjon"],
      explanation: "Riktig er at kula var seremonielt prestisjebytte gjennom langvarige partnerskap, mens gimwali var prutthandelen ved siden av. De to ble holdt bevisst atskilt, og å oppføre seg som i gimwali under kula var en fornærmelse. Å blande dem, eller å kalle kula «handel», er nøyaktig fellen sensor tester.",
    },
    {
      question: "Hva vil det si at deltagende observasjon har to ledd?",
      options: ["Forskeren må både delta i det sosiale livet og iaktta det analytisk, samtidig", "Forskeren må først observere på avstand og deretter delta når tilliten er etablert", "Forskeren må både gjøre feltarbeid og lese seg opp på tidligere etnografier fra området", "Forskeren må både beskrive hva folk gjør og intervjue dem om hvorfor de gjør det"],
      explanation: "Riktig er at deltagelse og observasjon må skje samtidig; å bare observere gir en tilskuers kunnskap, å bare delta gir deltagelse uten analyse. Rekkefølgen i feltet kan variere, men det er samtidigheten som er poenget i begrepet. Å utelate ett av leddene er den klassiske feilen i metodesvar.",
    },
    {
      question: "Hvorfor passer feltarbeid som metode særlig godt til holismen?",
      options: ["Fordi langvarig tilstedeværelse i mange sammenhenger avdekker sammenhenger man ikke kom for å studere", "Fordi metoden gir forskeren mulighet til å intervjue et stort antall mennesker om alle temaer i livet deres", "Forskeren må både gjøre eget feltarbeid og lese seg opp på tidligere etnografier fra det samme området", "Fordi metoden gjør det mulig å måle hvor sterkt de ulike delene av samfunnet påvirker hverandre"],
      explanation: "Riktig er at tilstedeværelse over tid og i mange sammenhenger gjør sammenhengene synlige — det var slik Evans-Pritchard oppdaget hva kveg gjorde i alle deler av livet. Metoden handler ikke om antall informanter eller om måling av påvirkning. Språkbeherskelse er viktig, men er ikke det som knytter metoden til holismen.",
    },
    {
      question: "Hva legger fagdefinisjonen i ordet «prosesser»?",
      options: ["At samfunn blir til og endres gjennom det menneskene gjør, ikke er faste strukturer", "At forskningen må følge en fast prosedyre med klart definerte trinn fra start til slutt", "At samfunn utvikler seg gjennom bestemte stadier fra enklere til mer sammensatte former", "At feltarbeidet må strekke seg over lang tid for å fange opp endringene som skjer underveis"],
      explanation: "Riktig er at samfunn blir til og endres gjennom handling, i motsetning til å være ferdige strukturer. Ideen om faste utviklingsstadier er derimot den evolusjonismen faget har forlatt. At feltarbeid tar tid er sant, men det er en metodisk følge og ikke innholdet i selve begrepet.",
    },
    {
      question: "Hva var forskjellen i tyngdepunkt mellom britisk sosialantropologi og amerikansk kulturantropologi?",
      options: ["Britisk tradisjon la vekt på sosial organisasjon, amerikansk på kultur som meningssystem", "Britisk tradisjon la vekt på langvarig feltarbeid, mens amerikansk tradisjon bygde på arkivstudier", "Britisk tradisjon studerte egne samfunn, mens amerikansk tradisjon studerte andre verdensdeler", "Britisk tradisjon var kvantitativ og statistisk, mens amerikansk tradisjon var rent kvalitativ"],
      explanation: "Riktig er skillet mellom sosial organisasjon og kultur som meningssystem, med Malinowski og Evans-Pritchard på den ene siden og Boas og senere Geertz på den andre. Begge tradisjoner bygde på feltarbeid. I dag er skillet langt mindre skarpt, og norsk sosialantropologi bruker begge tilfangene.",
    },
    {
      question: "Hva var den evolusjonistiske rammen faget vokste frem i?",
      options: ["En trapp der samfunn ble rangert fra enklere til mer siviliserte former, med Europa øverst", "En modell der alle samfunn ble antatt å utvikle seg i utakt, men mot hver sin egen sluttilstand", "En teori om at kulturell variasjon skyldes klimatiske og geografiske forskjeller mellom områder", "En antagelse om at samfunn forandrer seg først når de kommer i kontakt med andre samfunn"],
      explanation: "Riktig er den rangerte trappen fra enkle til siviliserte samfunn med Europa på toppen, en ramme faget senere har forlatt. Spor av den finnes i klassikernes titler og premisser, og å kunne si det kort og faktuelt er faghistorisk presisjon. Klimaforklaringer og kontaktteorier er andre og adskilte posisjoner.",
    },
    {
      question: "Hvorfor ber sensorveiledningene kandidatene bruke monografien tverrgående?",
      options: ["Fordi ett feltarbeid rommer økonomi, politikk, slektskap, kjønn og religion samtidig", "Fordi monografien er den eneste teksten på pensum som inneholder etnografisk materiale", "Fordi monografien alltid er det ene langsvarsalternativet kandidatene forventes å velge", "Fordi monografien er lengre enn de andre tekstene og derfor gir flest mulige eksempler"],
      explanation: "Riktig er at ett feltarbeid rommer alle disse feltene samtidig, og at monografien derfor kan belegge svar langt utenfor politikkoppgaver. De andre pensumtekstene inneholder også etnografi. Monografioppgaven er ett av tre langsvarsalternativer, ikke et påbud om valg.",
    },
    {
      question: "Hva bør du sjekke før du bruker en monografi i besvarelsen din?",
      options: ["Hvilken monografi som står på pensumlista ditt semester, siden den byttes mellom kull", "Om monografien er oversatt til norsk, siden eksamen skrives på skandinavisk eller engelsk", "Om forfatteren fortsatt arbeider ved instituttet som har ansvaret for emnet det semesteret", "Om monografien er utgitt de siste ti årene, siden eldre etnografi ikke godtas som belegg"],
      explanation: "Riktig er å sjekke gjeldende pensumliste: Paige Wests arbeid fra Papua Ny-Guinea var monografi til og med 2022, Alpa Shahs «Nightmarch» fra 2023. Språk og utgivelsesår har ingen betydning for om et verk kan brukes. Klassiske etnografier fra 1940 er fullt brukbare som belegg.",
    },
    {
      question: "Hva er hovedforskjellen mellom å legge vekt på sosial struktur og å legge vekt på sosial prosess?",
      options: ["Struktur får frem varighet og orden, prosess får frem handling og endring", "Struktur beskriver økonomien i et samfunn, prosess beskriver politikken og religionen", "Struktur er et emisk begrep hentet fra aktørene, prosess er analytikerens egen kategori", "Struktur brukes om småskalasamfunn, mens prosess bare brukes om moderne storsamfunn"],
      explanation: "Riktig er at struktur fremhever de varige mønstrene mens prosess fremhever at samfunn blir til gjennom handling. Begge er analytiske begreper, ikke aktørenes egne, og begge brukes på alle typer samfunn. De fleste gode analyser bruker begge deler, og Eriksens fagdefinisjon legger vekt på prosessleddet.",
    },
  ],
  'sosant1000-1-2': [
    {
      question: "Hva er metodologisk kulturrelativisme?",
      options: ["Et forskningsprinsipp om å forstå en praksis i sin egen sammenheng før man vurderer den", "En moralsk påstand om at alle praksiser er like forsvarlige og ikke kan vurderes på tvers", "Et krav om at forskeren skal dele informantenes verdier så lenge hun er ute i felt hos dem", "En regel om at forskeren aldri skal skrive kritisk om samfunnet hun har studert etterpå"],
      explanation: "Riktig er forskningsprinsippet om å forstå i kontekst før man vurderer. Påstanden om at alle praksiser er like forsvarlige er etisk kulturrelativisme, en helt annen posisjon som faget ikke forplikter seg på. Prinsippet krever verken at forskeren deler verdiene eller at hun avstår fra kritikk.",
    },
    {
      question: "Hva er etisk kulturrelativisme?",
      options: ["Påstanden om at alle praksiser er like moralsk forsvarlige og ikke kan vurderes på tvers av samfunn", "Prinsippet om at forskeren må undersøke de forskningsetiske sidene ved sitt eget feltarbeid grundig", "Kravet om at analytikeren skal bruke aktørenes egne kategorier og ikke sine egne i beskrivelsen", "Prinsippet om at praksiser skal forstås i sin sammenheng før forskeren tar stilling til dem"],
      explanation: "Riktig er den moralske påstanden om at alle praksiser er like forsvarlige. Prinsippet om å forstå i kontekst før man vurderer, er derimot metodologisk kulturrelativisme, og skillet mellom de to er det sensorveiledningene måler eksplisitt. Ordet etisk viser her til moral, i motsetning til i skillet emisk og etisk.",
    },
    {
      question: "Hva kjennetegner Geertz' kulturbegrep?",
      options: ["Kultur som intersubjektive meningssystemer — mening som ligger mellom mennesker, ikke inne i dem", "Kultur som en avgrenset livsform et folk har, og som skiller dem klart fra andre", "Kultur som de nedarvede egenskapene en gruppe fører videre fra en generasjon til den neste", "Kultur som summen av de holdningene den enkelte har tilegnet seg i løpet av oppveksten sin"],
      explanation: "Riktig er at meningen er intersubjektiv, altså offentlig og delt, og at den derfor kan tolkes. Beskrivelsen av kultur som en avgrenset livsform er det klassiske kulturbegrepet, som Geertz' tilnærming skiller seg fra. At kultur skulle være nedarvet er direkte feil: kultur er lært, og det er nettopp det som gjør den sosial.",
    },
    {
      question: "Hva er tett beskrivelse?",
      options: ["Å beskrive en handling sammen med den meningen den har i sin sammenheng", "Å beskrive en handling så detaljert som mulig, med alle observerbare enkeltheter tatt med", "Å beskrive et samfunn så fullstendig at ingen sider ved det blir stående ubeskrevet", "Å beskrive de samme hendelsene flere ganger fra ulike informanters synsvinkel"],
      explanation: "Riktig er å beskrive handlingen sammen med meningen den har i sammenhengen. Standardillustrasjonen er blunket: samme muskelbevegelse kan være et nervøst rykk eller et fortrolig signal, og bare kjennskap til sammenhengen avgjør hvilken. Detaljmengde alene er ikke tett beskrivelse; det er tynn beskrivelse med mange ord.",
    },
    {
      question: "Hva menes med at et symbol er både «modell av» og «modell for» virkeligheten?",
      options: ["Det beskriver hvordan verden er og foreskriver hvordan man skal handle, samtidig", "Det kan tolkes både av deltagerne selv og av forskeren, men på hver sin måte og hver for seg", "Det har én betydning i dagliglivet og en annen betydning i rituelle sammenhenger", "Det gjengir en tidligere tilstand og peker samtidig frem mot en fremtidig tilstand"],
      explanation: "Riktig er samtidigheten mellom beskrivelse og foreskrivelse: symbolet sier hvordan verden er, og former dermed den verden det beskriver. Det er samtidigheten som gir symboler kraft, ikke at de veksler mellom to funksjoner. Formuleringen er en av de mest gjenbrukbare koblingene i pensum.",
    },
    {
      question: "Hva er problemet med det klassiske kulturbegrepet, kultur som avgrenset livsform?",
      options: ["Det gjør kultur til en beholder med skarpe grenser, skjuler uenighet innad og gjør endring til tap", "Det er for løst formulert til å brukes analytisk, og har aldri hatt noen funksjon i faget", "Det legger for stor vekt på materielle forhold og for liten vekt på mening og symbolske uttrykk", "Det forutsetter at alle samfunn utvikler seg gjennom de samme stadiene i den samme rekkefølgen"],
      explanation: "Riktig er beholderproblemet med tre følger: skarpe grenser, skjult uenighet, og endring som fremstår som tap av kultur. Begrepet hadde tvert imot en viktig funksjon, som våpen mot den evolusjonistiske rangeringen av samfunn. Ideen om faste stadier er nettopp evolusjonismen kulturbegrepet ble utviklet mot.",
    },
    {
      question: "Hva er etnosentrisme?",
      options: ["Å måle andre samfunn med sine egne kategorier som selvfølgelig målestokk, slik at forskjeller blir mangler", "Å være stolt av sitt eget samfunns historie og tradisjoner og ønske å bevare dem for fremtiden", "Å studere sitt eget samfunn i stedet for å reise ut og gjøre feltarbeid i et annet samfunn", "Å bruke etniske kategorier som utgangspunkt for å beskrive forskjeller mellom grupper i ett og samme land"],
      explanation: "Riktig er å bruke egne kategorier som selvfølgelig målestokk, slik at det som er annerledes fremstår som mangelfullt. Etnosentrisme er ikke det samme som å ha egne verdier eller å være uenig, og det er ikke et spørsmål om hvor man gjør feltarbeid. Motgiften er metodologisk kulturrelativisme.",
    },
    {
      question: "Hva viste Mary Douglas om forestillinger om urenhet?",
      options: ["At det urene er det som ikke passer inn i klassifikasjonssystemet — «matter out of place»", "At renhetsregler er folkelig smittevern, utviklet fordi visse matvarer lett kunne bli fordervet", "At renhetsregler først og fremst tjener til å opprettholde skillet mellom kvinner og menn", "At renhetsforestillinger oppstår først når samfunn kommer i kontakt med andre samfunn utenfra"],
      explanation: "Riktig er at det urene er anomalier i en klassifikasjon, det Douglas kaller matter out of place. Hygieneforklaringen er nettopp den hun avviser, og å tilskrive henne den er den mest kjente feillesningen i pensum. Teorien handler om klassifikasjon i sin alminnelighet, ikke om ett bestemt skille.",
    },
    {
      question: "Hvor gjorde Mary Douglas feltarbeid, og hva var tekstanalyse?",
      options: ["Feltarbeid blant Lele i Kasai; matforbudene i Tredje Mosebok ble analysert som tekst", "Feltarbeid blant dem som følger matforbudene i Tredje Mosebok; Lele-materialet var andres", "Feltarbeid blant Nuer i Sør-Sudan; matforbud i flere religioner ble analysert som tekster", "Ingen egen feltarbeid; hele analysen bygde på materiale samlet inn av andre forskere"],
      explanation: "Riktig er feltarbeid blant Lele i Kasai-området, mens analysen av matforbudene i Tredje Mosebok er tekstanalyse og ikke feltarbeid blant dem som følger dem. Å blande disse to er en presisjonsfeil som slår ut på begrepsbeherskelsen. Nuer-materialet tilhører Evans-Pritchard.",
    },
    {
      question: "Hva er en anomali i Douglas' forstand?",
      options: ["Noe som ikke lar seg plassere rent i en klassifikasjon, og som derfor oppleves som urent eller farlig", "Et avvik fra normal oppførsel som samfunnet omkring reagerer på med utstøting eller straff", "Et fenomen som forekommer sjelden, og som derfor ikke får noen egen plass i språket", "En praksis som er i strid med de universelle standardene som gjelder på tvers av alle samfunn"],
      explanation: "Riktig er det som faller mellom kategorier eller tilhører flere samtidig, og derfor truer selve inndelingen. Poenget er ikke at fenomenet er sjeldent eller at handlingen er avvikende, men at det ikke lar seg plassere. Begrepet er også brua til liminalitet: den som er i en overgangsfase, er en anomali i den vanlige ordenen.",
    },
    {
      question: "Hva viste Radhika Govindrajans arbeid i Kumaon-Himalaya?",
      options: ["At relasjoner på tvers av arter binder slektskap, økonomi og religion sammen", "At dyreofring gradvis er blitt erstattet av symbolske gaver etter hvert som området moderniseres", "At forholdet mellom mennesker og dyr i landsbyene er rent økonomisk og uten følelsesmessige bånd", "At religiøse forestillinger om dyr avtar når husholdene får tilgang til lønnsarbeid og skolegang"],
      explanation: "Riktig er at relasjoner på tvers av arter binder flere felt sammen: geita som ofres er både familiemedlem og offer, og nærheten er det som gjør handlingen virksom. Studien viser tvert imot at båndene er sterke, ikke fraværende. Å beskrive ofringen som et rent økonomisk forhold ville mistet hele poenget.",
    },
    {
      question: "Hvorfor er «fordi det er kulturen deres» en dårlig forklaring i faget?",
      options: ["Den er sirkulær, skjuler uenighet innad og gjør mennesker til utøvere av et program", "Den er for generell, og bør derfor alltid presiseres til hvilken del av kulturen det gjelder", "Den bruker et begrep faget har forlatt, siden kultur ikke lenger regnes som et gyldig begrep", "Den forutsetter at kultur er lært, mens faget legger til grunn at den i stor grad er nedarvet"],
      explanation: "Riktig er de tre problemene: sirkularitet, skjult uenighet, og mennesker redusert til programutøvere. Kulturbegrepet er ikke forlatt, men det er ikke en forklaringsvariabel — antropologens jobb er å vise hvordan mening henger sammen med hvordan folk lever. At kultur er lært og ikke nedarvet, er nettopp fagets syn.",
    },
    {
      question: "Hva kjennetegner et prosessuelt kulturbegrep?",
      options: ["At kultur blir til i samhandling, forhandles om, og bæres i flere versjoner samtidig", "At kultur endrer seg langsomt over lange tidsrom og derfor bare kan studeres historisk", "At kultur overføres i en fast prosess fra foreldre til barn gjennom oppdragelse og skolegang", "At kultur består av prosesser i stedet for gjenstander, og at materiell kultur faller utenfor"],
      explanation: "Riktig er at kultur blir til i samhandling og bæres i flere versjoner samtidig. Konsekvensen for skrivemåten er merkbar: man skriver ikke lenger at man i et bestemt land gjør slik, men hva bestemte mennesker gjorde og hvorfor det var omstridt. Materiell kultur faller ikke utenfor et prosessuelt begrep.",
    },
    {
      question: "Hvilken av disse setningene er faglig holdbar?",
      options: ["Blant Adivasi-familiene Shah bodde hos i Jharkhand, var praksisen utbredt, og den var omstridt", "I indisk kultur gjør man gjerne slik, mens man i norsk kultur gjør noe helt annet", "Kulturen deres er i endring, og de mister derfor mye av sin opprinnelige egenart", "De handler slik fordi tradisjonen deres krever det av dem, uten at de reflekterer over det"],
      explanation: "Riktig er formuleringen som navngir konkrete mennesker på et konkret sted og lar uenighet stå. De tre andre bruker alle kultur som en beholder eller som en forklaring, og de gjør uenighet og handling usynlig. Skrivemåten er i seg selv en del av det sensor måler på presisjonsaksen.",
    },
    {
      question: "Hva er hovedinnvendingen mot Geertz' tolkende tilnærming?",
      options: ["At den legger mye vekt på mening og lite på makt og materielle forhold", "At den ikke bygger på feltarbeid, men på lesning av andres etnografiske beskrivelser", "At den behandler kultur som noe nedarvet i stedet for som noe lært i samhandling", "At den ikke lar seg bruke utenfor de samfunnene Geertz selv gjorde feltarbeid i"],
      explanation: "Riktig er innvendingen om makt: samfunnet fremstår som en tekst det gjelder å lese riktig, mens spørsmålet om hvem som har makt til å skrive teksten, blir stående. Geertz bygde selv på langvarig feltarbeid, blant annet på Bali og Java og i Marokko. Å nevne innvendingen i én setning er et sikkert løft i et langsvar.",
    },
    {
      question: "Hva er den empiriske innvendingen mot etisk kulturrelativisme?",
      options: ["Den forutsetter at et samfunn har én moral, og gjør dem som utfordrer en praksis innenfra, usynlige", "At den ikke bygger på eget feltarbeid, men på lesning av andre forskeres etnografiske beskrivelser", "Den bygger på for få etnografiske eksempler til at den kan generaliseres til alle samfunn", "Den forutsetter at forskeren har vært til stede lenge nok til å kjenne alle sidene ved samfunnet"],
      explanation: "Riktig er at posisjonen forutsetter moralsk enighet innad, mens det i ethvert samfunn finnes uenighet om hva som gjelder. De som utfordrer en praksis innenfra, blir da avvikere fra sin egen kultur i stedet for aktører i en konflikt. Dette er en av tre klassiske innvendinger, ved siden av den logiske og den praktiske.",
    },
    {
      question: "Hva menes med kontekstualisering som analytisk grep?",
      options: ["Å plassere en praksis i den økonomiske, politiske, religiøse og historiske sammenhengen der den gir mening", "Å sammenligne praksisen med tilsvarende praksiser i andre samfunn for å finne fellestrekkene", "Å beskrive praksisen slik den fremstår for en utenforstående, før man spør deltagerne om den", "Den forutsetter at forskeren har vært til stede lenge nok til å kjenne absolutt alle sidene ved samfunnet"],
      explanation: "Riktig er å plassere praksisen i sammenhengen der den gir mening. Kontekstualisering er analyse, ikke unnskyldning: å vise hva noe henger sammen med, er ikke å hevde at det derfor er godt. Sammenligning med andre samfunn er komparasjon, et beslektet, men annet grep.",
    },
    {
      question: "Hvordan viser Shahs arbeid at forståelse og kritikk kan gjøres samtidig?",
      options: ["Hun forstår hvorfor unge slutter seg til bevegelsen, og beskriver samtidig kasteskjevhet og kjønnsulikhet i den", "Hun beskriver først bevegelsen slik deltagerne ser den, og kritiserer den så i et eget avsluttende kapittel", "Å beskrive praksisen slik den fremstår for en utenforstående, før man i det hele tatt spør deltagerne om den", "Hun avstår fra å vurdere bevegelsen og lar deltagernes egne beskrivelser stå uten kommentar"],
      explanation: "Riktig er at de to gjøres i samme analyse: forståelsen av motivene og beskrivelsen av bevegelsens egne motsetninger står side om side. Å lese Shah som om hun tar geriljaens parti er en klassisk ensidig lesning, og hun avstår heller ikke fra vurdering. Kritikken vinner troverdighet nettopp av forståelsen.",
    },
    {
      question: "Hva er den historiske grunnen til at det klassiske kulturbegrepet oppsto?",
      options: ["Det var et motsvar til den evolusjonistiske rangeringen av samfunn på en trapp med Europa øverst", "Det oppsto da faget begynte å studere sine egne samfunn i tillegg til andre verdensdeler", "Det oppsto som en følge av at feltarbeid ble innført som fagets sentrale metode på 1900-tallet", "Det var et forsøk på å gjøre antropologien mer lik naturvitenskapene i metode og begrepsbruk"],
      explanation: "Riktig er at begrepet var et våpen mot evolusjonismen: å snakke om kulturer i flertall var å nekte å rangere samfunn. Prisen var beholdermodellen, som det prosessuelle kulturbegrepet forsøker å bli kvitt uten å miste likeverdigheten. Å kunne dette er faghistorisk blikk, en markør for meget god.",
    },
    {
      question: "Hvorfor er symboler flertydige, ifølge faget?",
      options: ["Fordi samme symbol kan bære flere betydninger samtidig, og det er ofte dette som gjør det virksomt", "Fordi hvert symbol har én opprinnelig betydning som gradvis blir misforstått av nye brukere", "Fordi betydningen deres endrer seg helt over tid, slik at gamle symboler til slutt mister sin funksjon", "Fordi forskeren aldri kan vite sikkert hva et symbol betyr uten å spørre alle som bruker det"],
      explanation: "Riktig er at flertydigheten er en egenskap ved symbolet selv og en del av kraften dets: kveg blant Nuer var levebrød, brudegave, offerdyr og oppgjørsmiddel på én gang. Individuell variasjon i tolkning finnes, men det er ikke det begrepet peker på. Symbolers mening er offentlig og delt, ikke privat.",
    },
    {
      question: "Hva er den relativistiske innvendingen mot universelle standarder?",
      options: ["At standardene historisk er formulert innenfor bestemte samfunn og bærer preg av det", "At standarder aldri kan formuleres presist nok til å kunne brukes på konkrete tilfeller", "At antropologer mangler kompetanse til å uttale seg om moralske og juridiske spørsmål", "At samfunn i praksis aldri følger de standardene de formelt har sluttet seg til likevel"],
      explanation: "Riktig er innvendingen om opphav og makt: å kalle noe universelt er selv en handling med makt i. Motinnvendingen er at relativismen kan frata de svakeste i et samfunn et språk å klage på. Faget er delt i dette spørsmålet, og å si det er presisjon, ikke svakhet.",
    },
    {
      question: "Hva bør en besvarelse gjøre når en oppgave gir en praksis som virker fremmed utenfra?",
      options: ["Vise hva praksisen henger sammen med, og deretter drøfte relativismens grense hvis oppgaven ber om det", "Ta moralsk stilling til praksisen først, og deretter forklare hvordan den kan ha oppstått", "Beskrive praksisen så nøytralt som mulig, og unngå å knytte den til andre sider ved samfunnet omkring", "Sammenligne praksisen med en tilsvarende norsk praksis for å vise at den ikke er så spesiell"],
      explanation: "Riktig er å kontekstualisere først, altså vise hva praksisen henger sammen med, og bare drøfte grensen dersom oppgaven ber om det. Å ta moralsk stilling først er etnosentrisk metode. En beskrivelse som ikke knytter praksisen til noe annet, er tynn beskrivelse og gir ingen analyse.",
    },
  ],
  'sosant1000-1-3': [
    {
      question: "Hvordan definerer Eriksen status?",
      options: ["Som de sosialt definerte trekkene ved en person som gir henne plikter og rettigheter", "Som den anseelsen en person nyter blant andre, målt etter inntekt, yrke og utdanningsnivå", "Som summen av de rollene en person utøver i løpet av en vanlig dag i sitt eget samfunn", "Som den posisjonen en person har oppnådd gjennom egen innsats i utdanning og arbeidsliv"],
      explanation: "Riktig er posisjonen med plikter og rettigheter. Anseelse er dagligtalens betydning av ordet og gir en flat definisjon som plasseres lavt på presisjonsaksen. Posisjoner oppnådd gjennom egen innsats er ervervet status, som bare er én av to typer.",
    },
    {
      question: "Hva er en rolle i sosialantropologisk forstand?",
      options: ["Statusens dynamiske aspekt — måten en status faktisk utøves på i samhandling", "Den delen av en persons oppførsel som ikke følger av forventningene omgivelsene stiller", "Den posisjonen en person har i et system av over- og underordning i et gitt samfunn", "Et sett med regler en person må følge for å bli akseptert i en gruppe hun vil inn i"],
      explanation: "Riktig er statusens dynamiske side: statusen er posisjonen, rollen er det man gjør med den. To personer med samme status kan spille rollen ulikt og fortsatt gjenkjennes i posisjonen. Å bruke status og rolle som synonymer er feil nummer 8, å overse begrepets distinksjoner.",
    },
    {
      question: "Hva er forskjellen på et statussett og et rollesett?",
      options: ["Statussettet er alle posisjonene én person har, rollesettet er alle relasjonene som følger av én posisjon", "Statussettet er de tilskrevne posisjonene, mens rollesettet er de posisjonene personen selv har ervervet i løpet av livet", "Statussettet gjelder for en gruppe som helhet, mens rollesettet gjelder for det enkelte medlemmet av gruppen", "Statussettet er de formelle posisjonene, mens rollesettet er de uformelle forventningene rundt dem"],
      explanation: "Riktig er skillet mellom alle posisjonene én person har, og alle relasjonene som følger av én enkelt posisjon. Læreren har ett rollesett overfor elever, foreldre, rektor og kolleger. Skillet har ingenting med tilskrevet mot ervervet eller formelt mot uformelt å gjøre.",
    },
    {
      question: "Hva er en tilskrevet status?",
      options: ["En status som tildeles uavhengig av personens egen innsats, som kaste, alder eller slektstilhørighet", "En status som er biologisk bestemt, og som samfunnet omkring derfor ikke har noen mulighet til å endre", "En status andre tilskriver en person på grunnlag av det de mener hun har prestert i løpet av livet sitt", "En status som er formelt registrert av myndighetene og derfor kan dokumenteres med papirer"],
      explanation: "Riktig er posisjonen som tildeles uavhengig av egen innsats. Den avgjørende presiseringen er at tilskrevet ikke betyr naturgitt: statusen er sosialt tildelt, og derfor kan den endres, om enn tregt. Å kalle den biologisk bestemt er feil nummer 9, å naturalisere det sosiale.",
    },
    {
      question: "Hva viste Shahs materiale om kaste og lederskap i geriljabevegelsen?",
      options: ["At kaste fortsatte å strukturere en bevegelse som lovet å oppheve den, mens lederposisjonen selv var ervervet", "At kastetilhørighet mistet all betydning inne i bevegelsen, siden alle deltok på helt like vilkår der", "At bare mennesker fra Adivasi-samfunnene fikk lederposisjoner, siden bevegelsen kjempet deres sak", "At lederne ble valgt ved avstemning blant medlemmene og derfor gjenspeilte medlemsmassen godt"],
      explanation: "Riktig er at kastelinjene fortsatte å virke inne i bevegelsen: lederskapet var i stor grad rekruttert fra høyere kaster mens Adivasi utgjorde fotfolket. Å lese Shah som om bevegelsen uten videre kjemper Adivasienes sak, er en klassisk ensidig lesning. Poenget er at adgangen til en ervervet posisjon selv var ulikt fordelt.",
    },
    {
      question: "Hva er en rollekonflikt?",
      options: ["At forventningene til to statuser eller to relasjoner ikke lar seg innfri samtidig", "At en person nekter å innta den rollen omgivelsene rundt henne forventer at hun skal innta", "At to personer med samme status er dypt uenige om hvordan rollen bør utøves i praksis", "At en person mister en status hun har hatt, og ikke får noen ny i stedet for den"],
      explanation: "Riktig er at motstridende forventninger ikke lar seg innfri samtidig, enten mellom to statuser i statussettet eller mellom to relasjoner i rollesettet. Poenget er at slike konflikter er systematiske og ikke individuelle: de sier noe om samfunnet, ikke om personen. Det er derfor de kan brukes som data.",
    },
    {
      question: "Hvorfor er alder det klareste eksempelet på at tilskrevet ikke betyr naturgitt?",
      options: ["Antall leveår er biologisk, men hva de innebærer av plikter og rettigheter er sosialt bestemt og varierer", "Alder kan endres gjennom egen innsats over tid, i motsetning til andre tilskrevne statuser som kaste og kjønn", "Alder er den eneste tilskrevne statusen som alle mennesker i alle kjente samfunn har til felles med hverandre", "Alder blir mindre viktig jo mer moderne et samfunn er, og forsvinner til slutt som sosial kategori"],
      explanation: "Riktig er skillet mellom det biologiske faktum og det sosiale innholdet: alderen er biologisk, aldersstatusen er sosial. Alder kan naturligvis ikke endres ved innsats — det er nettopp derfor den er tilskrevet. At alder skulle forsvinne som kategori i moderne samfunn, er ikke fagets syn.",
    },
    {
      question: "Hva innebærer det at en status er ervervet?",
      options: ["At den oppnås gjennom personens egne handlinger, som yrke, utdanning, verv eller medlemskap", "At den er åpen for alle i samfunnet, siden ingen formelt er utestengt fra å strebe etter den selv", "At den kan mistes igjen, i motsetning til tilskrevne statuser, som følger personen hele livet ut", "At den er tildelt av en formell myndighet etter søknad fra den enkelte som det gjelder"],
      explanation: "Riktig er at statusen oppnås gjennom egne handlinger. Den viktigste presiseringen er at ervervet ikke betyr åpen for alle: adgangen til ervervede posisjoner er selv ulikt fordelt, ofte etter tilskrevne statuser. Shahs materiale om kastefordelt lederskap er pensumeksempelet på nettopp dette.",
    },
    {
      question: "Hva menes med situasjonell status?",
      options: ["At det er situasjonen som avgjør hvilken av statusene i statussettet som aktiveres", "At en status bare gjelder i bestemte situasjoner og opphører helt å finnes utenfor dem", "At personen selv kan velge fritt hvilken status hun vil bruke i en gitt situasjon", "At statuser endrer innhold fra situasjon til situasjon uten at posisjonen forandres"],
      explanation: "Riktig er at situasjonen avgjør hvilken status som står i forgrunnen; ingen av de andre forsvinner, men bare én er relevant om gangen. Personen velger ikke fritt — det er sammenhengen som aktiverer. Konflikt oppstår først når to statuser aktiveres samtidig, som når læreren møter sin egen sønn som elev.",
    },
    {
      question: "Hvem formulerte de tre fasene separasjon, liminalitet og reintegrasjon?",
      options: ["Arnold van Gennep, i en sammenlignende syntese fra 1909", "Victor Turner, på grunnlag av feltarbeid blant Ndembu på 1950-tallet", "Émile Durkheim, i «Religionens elementære former» fra 1912", "Mary Douglas, i renhetsanalysen «Purity and Danger» fra 1966"],
      explanation: "Riktig er van Gennep, som formulerte den tredelte formen i 1909 uten selv å gjøre feltarbeid — arbeidet er en sammenligning av andres materiale. Turner utviklet liminalitetsfasen videre og la til communitas, men fasene er ikke hans. Å slå de to sammen er en av de vanligste presisjonsfeilene i pensum.",
    },
    {
      question: "Hva viste Turners materiale fra Ndembu-initiasjonen?",
      options: ["At deltagerne ble tatt ut av den vanlige ordenen, holdt i en terskelfase, og ført tilbake med ny status", "At initiasjonsritualer først og fremst tjener til å opprettholde de eldres myndighet over de yngre", "At overgangsritualer forsvinner i samfunn som kommer i kontakt med markedsøkonomi og skolegang", "Mary Douglas, i «Purity and Danger» fra 1966, der hun analyserte renhet og urenhet som klassifikasjon"],
      explanation: "Riktig er terskelfasen der de vanlige forskjellene var opphevet, og gjeninntredelsen med ny status. Turner kalte tilstanden liminalitet og fellesskapet i den communitas. Modellen han bygger på, van Genneps, er tvert imot ment å gjelde på tvers av samfunnstyper.",
    },
    {
      question: "Hva er sosialisering?",
      options: ["Prosessen der et menneske lærer å innta og utøve statusene og rollene et samfunn stiller til rådighet", "At initiasjonsritualer først og fremst tjener til å opprettholde de eldres myndighet over de yngre", "Prosessen der en innflytter tilpasser seg det nye samfunnets språk, skikker og forventninger", "Prosessen der samfunnet fordeler goder og byrder mellom sine medlemmer etter faste prinsipper"],
      explanation: "Riktig er læringen av statuser og roller, og den fortsetter hele livet — hver gang en person går inn i en ny posisjon. Begrepet er svaret på hvordan tilskrevne statuser blir virkelige: innholdet i dem læres, og derfor kan det endres. Tilpasning for innflyttere er ett tilfelle blant mange, ikke selve begrepet.",
    },
    {
      question: "Hva er rolleforventninger?",
      options: ["Normene andre knytter til en status: hva man mener en person i posisjonen bør og ikke bør gjøre", "De målene en person selv setter seg for hvordan hun vil utøve sin egen posisjon på best mulig måte", "Prosessen der en innflytter tilpasser seg det nye samfunnets språk, skikker og forventninger til henne", "De forventningene en person har til andre som står i posisjoner over henne i et hierarki"],
      explanation: "Riktig er normene omgivelsene knytter til posisjonen; de er ikke den enkeltes egne og de er ofte uuttalte. De merkes tydeligst når de brytes. At ulike grupper kan forvente ulike ting av samme status, og at noens forventninger vinner, gjør begrepet til et maktspørsmål og ikke bare en beskrivelse.",
    },
    {
      question: "Hvorfor er kaste fagets standardeksempel på tilskrevet status?",
      options: ["Posisjonen tildeles ved fødsel og kan verken oppnås eller forlates gjennom egen innsats", "Posisjonen er nedfelt i indisk lov og kan derfor dokumenteres formelt for hver enkelt person", "Posisjonen er biologisk arvelig og går uendret videre fra foreldre til barn i alle ledd", "Posisjonen avgjør yrkesvalg fullstendig, slik at ingen kan arbeide med noe annet enn sitt eget"],
      explanation: "Riktig er at posisjonen tildeles ved fødsel og ikke kan handles bort. Den er likevel sosialt tildelt og ikke biologisk — å behandle den som en naturkategori er feil nummer 9. Diskriminering på grunnlag av kaste er forbudt i indisk lov, samtidig som Shah viser at systemet fortsatte å strukturere praksis.",
    },
    {
      question: "Hva er problemet med å skrive at «legen har høyere status enn pasienten»?",
      options: ["Setningen bruker status i dagligtalens betydning; i faget er de to ulike posisjoner, ikke rangerte trinn", "Setningen er feil fordi pasienten faktisk har flere formelle rettigheter enn legen", "Setningen blander sammen status og rolle, siden det er rollene som skiller de to fra hverandre", "Setningen forutsetter at status er tilskrevet, mens både lege og pasient er ervervede posisjoner"],
      explanation: "Riktig er at setningen bruker dagligtalens betydning, altså anseelse. I faget er lege og pasient to statuser med hver sine plikter og rettigheter. At det også finnes maktforskjeller mellom dem er sant, men det hører til sosial differensiering og er et annet spørsmål.",
    },
    {
      question: "Hva er den beste innvendingen mot at skillet tilskrevet og ervervet er skarpt?",
      options: ["Adgangen til ervervede posisjoner er selv fordelt etter tilskrevne, slik Shahs materiale viser", "Ingen samfunn har tilskrevne statuser lenger, siden alle posisjoner formelt er åpne for alle i dag", "Skillet er umulig å bruke fordi ingen kan vite sikkert hvordan en person egentlig fikk sin posisjon", "Alle statuser er egentlig tilskrevne, siden ingen velger hvilket samfunn de blir født inn i"],
      explanation: "Riktig er at fordelingen av ervervede posisjoner selv følger tilskrevne linjer, slik lederskapet i bevegelsen Shah fulgte, gjorde. Landingen som fungerer, er at skillet er analytisk skarpt og empirisk gradert. Å hevde at alle statuser egentlig er tilskrevne, gjør begrepsparet ubrukelig i stedet for mer presist.",
    },
    {
      question: "Hva viser Nuer-materialet om status?",
      options: ["At posisjoner med plikter og rettigheter kan finnes uten formelle institusjoner som tildeler dem", "At status alltid krever en sentralmyndighet som kan registrere og håndheve posisjonene", "At tilskrevne statuser forsvinner i samfunn der det ikke finnes noen stat til å opprettholde dem", "At alle posisjoner i samfunnet var ervervede, siden det ikke fantes arvelige embeter der"],
      explanation: "Riktig er at statuser finnes fordi mennesker behandler dem som virkelige, ikke fordi en myndighet registrerer dem: blant Nuer fulgte plikter og rettigheter av avstamning. Materialet viser tvert imot tilskrevet status i sin reneste form. Evans-Pritchard viste orden uten sentralstat, ikke fravær av orden.",
    },
    {
      question: "Hva argumenterte Margaret Mead for?",
      options: ["At det som regnes som mannlig og kvinnelig temperament varierer på tvers av samfunn", "At kjønnsforskjeller i temperament er de samme i alle samfunn og derfor må være biologiske", "At kjønn ikke har noen betydning for hvilke statuser mennesker tildeles i småskalasamfunn", "At kvinner og menn overalt tildeles de samme oppgavene så lenge arbeidsdelingen er fri"],
      explanation: "Riktig er at kjønnstemperament varierer kulturelt og altså ikke følger av biologi alene. To presisjoner hører med og gir uttelling: Mead argumenterte, hun beviste ikke, og Samoa-materialet har vært omstridt siden Freemans kritikk. Å si begge deler i én setning er et pluss, ikke en svekkelse.",
    },
    {
      question: "Hvilken feil begår en kandidat som skriver at tilskrevet status er biologisk gitt?",
      options: ["Feil nummer 9 — å naturalisere det sosiale", "Feil nummer 6 — flat definisjon som ikke treffer forfatterens bruk", "Feil nummer 8 — å overse begrepets distinksjoner", "Feil nummer 1 — teori uten etnografisk forankring"],
      explanation: "Riktig er feil nummer 9, å naturalisere det sosiale. At en status ikke kan velges bort av den enkelte, betyr ikke at naturen har bestemt den — den er sosialt tildelt og kan derfor endres. Feilen rammer særlig kjønn, slektskap og kaste, og sensorveiledningene nevner den eksplisitt.",
    },
    {
      question: "Hva må med for at et status-kortsvar skal nå nivået god?",
      options: ["Definisjon med navngitt avsender, rollebegrepet, begge ledd i distinksjonen, og ett pensumeksempel", "En grundig definisjon av status og en lang liste med hverdagseksempler", "En drøfting av om skillet tilskrevet og ervervet fortsatt er nyttig i moderne samfunn", "Minst tre pensumtekster, satt eksplisitt i forhold til hverandre gjennom hele svaret"],
      explanation: "Riktig er de fire elementene: avsender, rollebegrepet, begge ledd i distinksjonen, og et etnografisk eksempel fra pensum. Hverdagseksempler uten kilde teller ikke som forankring. Kravet om minst tre pensumtekster gjelder langsvar i Del 2, ikke kortsvar.",
    },
  ],
  'sosant1000-1-4': [
    {
      question: "Hva består deltagende observasjon av?",
      options: ["To ledd som må skje samtidig: forskeren deltar i det sosiale livet og observerer det analytisk", "To faser etter hverandre: først en periode med ren observasjon, deretter en periode med deltagelse", "Én sammenhengende praksis der forskeren observerer folk i deres vante omgivelser over lang tid", "En kombinasjon av intervjuer og observasjon, der intervjuene brukes til å kontrollere det man ser"],
      explanation: "Riktig er de to leddene som må skje samtidig. Å behandle bare observasjonsleddet er den vanligste feilen i metodesvar, i registeret feil nummer 8. Rekkefølgen i feltet kan variere, men det er samtidigheten begrepet peker på.",
    },
    {
      question: "Hva gir deltagelsen som observasjon alene ikke gir?",
      options: ["Praktisk kunnskap om hvordan noe er å gjøre, tilgang gjennom å være med, og egne feil som avslører regler", "Systematisk oversikt over hvem som gjør hva, i hvilken rekkefølge, gjennom svært mange gjentagelser", "Analytisk avstand nok til å stille spørsmål ved det deltagerne selv tar for gitt i hverdagen", "Materiale som kan skrives ned og senere sammenlignes systematisk med etnografi fra andre felt"],
      explanation: "Riktig er den praktiske kunnskapen, tilgangen og de egne feilene som gjør uskrevne regler synlige. De tre andre er nettopp hva observasjonsleddet bidrar med. At de to gir ulike ting, er grunnen til at begge kreves.",
    },
    {
      question: "Hva er spenningen mellom nærhet og distanse?",
      options: ["Forskeren må komme nær nok til å forstå innenfra og beholde avstand nok til å analysere", "Forskeren må velge mellom å bo hos informantene sine eller å bo for seg selv i nærheten", "Forskeren må balansere tiden hun bruker ute i felt mot tiden hun bruker på å skrive hjemme", "Forskeren må avgjøre hvor personlig hun kan bli med informantene uten å bryte etiske regler"],
      explanation: "Riktig er spenningen mellom å forstå innenfra og å analysere med avstand. Poenget som gir uttelling, er at spenningen ikke kan løses, bare håndteres — den følger av at forskeren selv er instrumentet. Praktiske bospørsmål og etiske grenser er andre og adskilte problemer.",
    },
    {
      question: "Hva gjorde Malinowskis feltarbeid på Trobriandøyene til et brudd med det som var vanlig før?",
      options: ["Han flyttet inn i landsbyen, lærte språket og bygde beskrivelsen på det han selv deltok i", "Han var den første som brukte spørreskjemaer systematisk i studiet av et samfunn utenfor Europa", "Han var den første europeeren som besøkte området og beskrev det for et vitenskapelig publikum", "Han samlet inn opplysninger gjennom kolonialadministrasjonen og systematiserte dem i en monografi"],
      explanation: "Riktig er at han flyttet inn, lærte språket og bygde beskrivelsen på egen deltagelse i stedet for på mellommenns rapporter. Nettopp innsamling gjennom administratorer og misjonærer var det som var vanlig før, og som han brøt med. Feltarbeidet foregikk under australsk kolonialstyre.",
    },
    {
      question: "Hva viste Malinowskis materiale om kula og gimwali?",
      options: ["Kula var seremonielt prestisjebytte i faste partnerskap, gimwali den prosaiske prutthandelen ved siden av", "Kula og gimwali var to navn på det samme byttesystemet, brukt av ulike grupper på ulike øyer", "Kula var handelen med mat og bruksting, mens gimwali var utvekslingen av halskjeder og armbånd", "Kula var forbeholdt høvdinger og ledere, mens gimwali var den formen for bytte vanlige folk kunne delta i"],
      explanation: "Riktig er skillet mellom seremonielt prestisjebytte i faste partnerskap og den prosaiske prutthandelen. De to ble holdt bevisst atskilt, og å oppføre seg som i gimwali under kula var en fornærmelse. Metodisk er poenget at en slik regel bare blir synlig for den som er til stede over tid.",
    },
    {
      question: "Hva menes med posisjonering i feltarbeid?",
      options: ["At forskerens kjønn, alder, nasjonalitet og inngangsvei former hva hun får tilgang til", "At forskeren må plassere seg fysisk der hun kan observere flest mulig av hendelsene i feltet", "At forskeren må velge et teoretisk ståsted før feltarbeidet begynner og holde fast ved det", "At forskeren tar stilling til hvilken part hun støtter i konflikter innad i det samfunnet hun studerer"],
      explanation: "Riktig er at forskerens egne kjennetegn og inngangsvei former tilgangen. Posisjonering er ikke en feilkilde som kan fjernes — enhver som er til stede i et sosialt liv, er noen. Kravet er at posisjonen gjøres synlig, ikke at den skulle kunne oppheves.",
    },
    {
      question: "Hva er refleksivitet i metodisk forstand?",
      options: ["Kravet om at forskeren gjør rede for sin egen rolle i frembringelsen av materialet", "Kravet om at forskeren tenker nøye gjennom sine egne tolkninger før hun publiserer dem", "Kravet om at forskeren lar informantene lese og godkjenne teksten før den offentliggjøres", "Kravet om at forskeren holder sine egne meninger utenfor beskrivelsen av det hun har sett"],
      explanation: "Riktig er redegjørelsen for egen rolle: hvem forskeren var i feltet, hvordan hun kom inn, hva hun fikk og ikke fikk tilgang til. Dette er et kunnskapskrav og ikke selvopptatthet, siden materialet ble til i en relasjon. Sensorveiledningene krever nettopp slik refleksjon i monografioppgaver.",
    },
    {
      question: "Hvorfor er nøkkelinformanten både en ressurs og et problem?",
      options: ["Hun åpner dører raskt, men forskeren arver hennes posisjon og dermed også hennes begrensninger", "Hun gir pålitelige opplysninger, men kan ikke representere alle synspunkter i et stort samfunn", "Hun sparer forskeren for tid, men krever ofte betaling som kan påvirke det hun forteller", "Hun kjenner feltet godt, men mangler den analytiske avstanden forskeren selv må bringe med seg"],
      explanation: "Riktig er at forskeren arver både adgangen og begrensningene til den hun kom inn gjennom. Den som ble introdusert av en ledende familie, får sjelden de samme samtalene med dem som står i konflikt med den. Dette er en av de mest konkrete måtene å vise posisjoneringspoenget på.",
    },
    {
      question: "Hva menes med at det uventede kan være et funn i feltarbeid?",
      options: ["At materialet kan endre selve spørsmålet, slik at forskeren finner ut at hun spurte om feil ting", "At forskeren tilfeldigvis kan komme over hendelser som bekrefter hypotesen hun startet feltarbeidet med", "At feltarbeidet gir data forskeren ikke hadde planlagt å samle inn, og som kan brukes i senere prosjekter", "At forskeren bør holde flere hypoteser åpne samtidig for å kunne teste dem mot hverandre"],
      explanation: "Riktig er at spørsmålet selv kan endres av materialet: Evans-Pritchard kom ikke for å beskrive kveg som religiøs kategori. De fleste metoder kan bare svare på spørsmål forskeren allerede visste å stille. Den tilhørende svakheten er at åpenheten gjør arbeidet vanskelig å planlegge og å gjenta.",
    },
    {
      question: "Hva var Shahs sentrale metodiske grep i «Nightmarch»?",
      options: ["Hun gikk med geriljabevegelsen på en sju netters marsj i stedet for å intervjue den utenfra", "Hun intervjuet både myndighetene og opprørerne for å få begge parters versjon av konflikten", "Hun bodde i en landsby i flere år uten å ta kontakt med noen av partene i konflikten direkte", "Hun samlet inn skriftlig materiale fra bevegelsen og analyserte det opp mot statens dokumenter"],
      explanation: "Riktig er deltagelsen i marsjen. Nettopp fordi hun gikk med, ble bevegelsens indre motsetninger synlige — kasteskjevt lederskap, kjønnsulikhet, sammensatte motiver. Samtidig ble hennes egen posisjon, tillit og kjønn en del av materialet, og det er derfor de to sidene henger sammen.",
    },
    {
      question: "Hva viser Shah om geriljabevegelsen hun fulgte?",
      options: ["Både statens frarøvelse av land og ressurser og bevegelsens egne motsetninger", "At bevegelsen kjemper Adivasienes sak, og at statens fremstilling av den er misvisende", "At bevegelsen først og fremst er drevet av kriminelle motiver uten politisk innhold", "At konflikten skyldes kulturforskjeller mellom staten og lokalsamfunnene i området"],
      explanation: "Riktig er at hun viser begge deler: frarøvelsen og bevegelsens indre motsetninger, som kasteskjevt lederskap og kjønnsulikhet. Å lese henne ensidig i den ene eller andre retningen er en klassisk feil. Å forklare konflikten med kulturforskjell er dessuten nettopp den beholdermodellen faget har forlatt.",
    },
    {
      question: "Hvorfor er «feltarbeidets muligheter og utfordringer» ikke to lister?",
      options: ["Det er den samme egenskapen sett fra to sider: at forskeren selv er instrumentet", "Fordi utfordringene alltid kan løses med bedre planlegging før feltarbeidet begynner", "Fordi mulighetene gjelder store felt, mens utfordringene bare gjelder små og lukkede miljøer", "Fordi de to henger sammen med hvor lang tid forskeren har til rådighet i felt"],
      explanation: "Riktig er at styrken og problemene springer ut av samme kilde: forskeren er instrumentet, og derfor får hun tilgang ingen spørreundersøkelse gir, samtidig som hennes egen person blir en del av materialet. Å skrive to lister uten å koble dem er feil nummer 4. Bedre planlegging fjerner ikke vilkåret.",
    },
    {
      question: "Hva er poenget med feltnotater ut over å huske hva som skjedde?",
      options: ["Notatene er allerede en tolkning, siden hva som skrives ned avhenger av hvem forskeren var i feltet", "Notatene er det eneste materialet i faget som kan legges frem for etterprøving av andre forskere senere", "Fordi mulighetene gjelder store og åpne felt, mens utfordringene bare gjelder små og lukkede miljøer", "Notatene skiller den delen av materialet som er observert fra den delen som er fortalt"],
      explanation: "Riktig er at notatene allerede er tolkning: det man legger merke til, avhenger av hvem man er i feltet. Det er dette som gjør refleksjon over egen posisjon til en del av metoden. Feltnotater legges normalt ikke frem for etterprøving, blant annet av etiske grunner.",
    },
    {
      question: "Hvordan generaliserer antropologien fra ett feltarbeid?",
      options: ["Om mekanismer og muligheter, og gjennom komparasjon — ikke om utbredelse", "Ved å velge et felt som er statistisk representativt for den regionen det ligger i", "Ved å gjenta det samme feltarbeidet flere steder til resultatene stemmer overens", "Den generaliserer ikke, men beskriver hvert enkelt samfunn på dets egne premisser"],
      explanation: "Riktig er at faget generaliserer om mekanismer og muligheter, og gjennom komparasjon mellom etnografier. Evans-Pritchard viste ikke at alle samfunn er segmentære, men at orden kan opprettholdes uten sentralstat. Derfor kan ett godt feltarbeid velte en allmenn påstand, men aldri alene bevise en.",
    },
    {
      question: "Hvorfor nevnes kolonial kontekst når de klassiske etnografiene omtales?",
      options: ["Fordi den forklarer hvordan kunnskapen ble til: hvem som slapp inn hvor, og under hvilke maktforhold", "Ved å velge et felt som er statistisk representativt for den regionen eller landsdelen det ligger i", "Fordi forskerne selv var ansatt av kolonimyndighetene og skrev på oppdrag fra dem", "Fordi de samfunnene som ble beskrevet, ikke lenger eksisterer i den formen de hadde da"],
      explanation: "Riktig er at konteksten forklarer materialets tilblivelse: adgang, trygghet og maktforhold var formet av kolonisituasjonen. Det gjør ikke etnografiene verdiløse — de er fortsatt fagets grunnlag — men til tekster med en tilblivelseshistorie. Å nevne det i én setning er en markør for meget god.",
    },
    {
      question: "Hva er den viktigste grunnen til at feltarbeid tar lang tid?",
      options: ["Tid avdekker mønstre, bygger tillit og gjør det selvsagte synlig for forskeren selv", "Det tar lang tid å gjennomføre nok intervjuer til at materialet blir representativt", "Reiseavstandene og de praktiske forholdene i felt gjør at lite arbeid lar seg gjøre per dag", "Forskeren må vente til alle årstidene har vært gjennomgått før materialet er fullstendig"],
      explanation: "Riktig er de tre tingene tid gjør: mønstre over gjentagelser, tillit gjennom å fortsatt være der, og nok egne feil til å lære uskrevne regler. Tid er samtidig metodens største kostnad og begrensning, og en av grunnene til at etnografi skal skrives i datid med tidfesting.",
    },
    {
      question: "Hva er problemet med å kalle feltarbeid en objektiv metode?",
      options: ["Forskeren er selv instrumentet, og fagets krav er derfor redegjørelse for egen posisjon, ikke nøytralitet", "Det tar lang tid å gjennomføre nok intervjuer til at materialet blir representativt for hele feltet", "Objektivitet er umulig i all forskning, og begrepet bør derfor ikke brukes om noen metode", "Forskeren kan ikke observere alt som skjer, og materialet blir derfor alltid ufullstendig"],
      explanation: "Riktig er at forskeren er instrumentet, og at kravet derfor flytter seg fra nøytralitet til refleksivitet. Poenget er ikke at kunnskapen blir svakere, men at den begrunnes på en annen måte. Å sette metoden opp mot kvantitative undersøkelser som konkurrenter er å overse at de svarer på ulike spørsmål.",
    },
    {
      question: "Hvilken rolle har samtaler og intervjuer i et feltarbeid?",
      options: ["De er uunnværlige for det emiske, men står ikke alene, siden folk sjelden forklarer det selvsagte", "De er metodens hovedkilde, mens deltagelsen først og fremst tjener til å bygge tillit", "Objektivitet er umulig i all samfunnsforskning, og begrepet bør derfor ikke brukes om noen metode", "De unngås så langt det er mulig, fordi de forstyrrer det naturlige forløpet i feltet"],
      explanation: "Riktig er at samtaler er uunnværlige for å få tak i hvordan folk selv begrunner det de gjør, men at de ikke kan stå alene. Metoden setter det folk sier opp mot det de gjør og gjør avstanden til et analytisk spørsmål — ikke til en løgndetektor.",
    },
    {
      question: "Hva kreves i et monografi-langsvar ut over konkret empiri fra monografien?",
      options: ["Kobling til minst én annen pensumtekst og refleksjon over hvordan feltarbeidet frembringer kunnskapen", "En fullstendig gjengivelse av monografiens oppbygning kapittel for kapittel gjennom hele boka", "En vurdering av om forfatterens konklusjoner er moralsk forsvarlige sett fra kandidatens ståsted", "De unngås så langt det er mulig, fordi de forstyrrer det naturlige forløpet i det feltet man studerer"],
      explanation: "Riktig er koblingen til minst én annen tekst og metoderefleksjonen. Å skrive om temaet generelt uten dybde i monografien er feil nummer 10. Kravet er normalt minst tre pensumtekster, som i andre langsvar, ikke fem.",
    },
    {
      question: "Hva gjør deltagelsens grenser til et reelt dilemma i Shahs tilfelle?",
      options: ["Metoden krever deltagelse, men feltet innebar risiko og pågående væpnet konflikt", "Metoden krever nøytralitet, mens hun måtte ta stilling i konflikten for å få tilgang", "Metoden krever langvarig opphold, mens marsjen bare varte i sju netter til sammen", "Metoden krever språkkunnskap, som hun ikke hadde tid til å tilegne seg på forhånd"],
      explanation: "Riktig er at kravet om deltagelse møter et felt med reell risiko og pågående konflikt. Argumentet for slik deltagelse er at noen sosiale virkeligheter ikke finnes i andre former enn den praktiske; argumentet mot handler om risiko, medvirkning og faren for ensidighet. Marsjen var rammen om et langvarig feltarbeid.",
    },
    {
      question: "Hva menes med at etnografien også er et produkt?",
      options: ["Den ferdige teksten er et argument, skrevet av noen med et formål — ikke et vindu inn i et samfunn", "Metoden krever nøytralitet, mens hun måtte ta stilling i konflikten for å få tilgang", "Materialet må bearbeides før det kan publiseres, og dette arbeidet tar ofte flere år", "Etnografien er resultatet av et samarbeid mellom forskeren og informantene hennes"],
      explanation: "Riktig er at teksten er et argument med en tilblivelseshistorie: mellom det som skjedde og det du leser, ligger flere oversettelser med valg i hvert ledd. Å lese pensum slik er ikke mistenksomhet, men å lese som fagfelle. Konsekvensen for skrivingen er å si hva forskeren viste, ikke bare hva boka handler om.",
    },
    {
      question: "Hvilken feil begår en kandidat som forklarer deltagende observasjon uten å nevne et eneste feltarbeid?",
      options: ["Feil nummer 1 — teori uten etnografisk forankring", "Feil nummer 8 — å overse distinksjonene i selve begrepet", "Feil nummer 3 — rent referat uten drøfting", "Feil nummer 10 — monografioppgave uten dybde i monografien"],
      explanation: "Riktig er feil nummer 1, den hyppigste enkeltfeilen i faget. Metodespørsmål innbyr særlig til den, fordi stoffet er lett å fremstille generelt. Feil 8 ville vært å behandle bare det ene leddet i begrepet.",
    },
    {
      question: "Hva er den sentrale etiske utfordringen ved langvarig feltarbeid?",
      options: ["Samtykke er vanskelig når materialet er hverdagsliv over år, og små steder lar seg gjenkjenne", "Feil nummer 8 — å overse begrepets distinksjoner, altså å behandle bare det ene leddet", "Feltarbeid krever store bevilgninger, og finansiøren kan legge føringer på resultatene", "Informantene har krav på betaling for tiden de bruker sammen med forskeren i felt"],
      explanation: "Riktig er samtykke- og gjenkjennbarhetsproblemet: hva samtykker man til når noen skal være til stede i livet ditt i atten måneder, og hvordan anonymiserer man et lite sted? Et godt svar viser en konkret avveining i stedet for å slå fast at etikk er viktig.",
    },
    {
      question: "Hva skiller Shahs og Malinowskis forhold til sin egen posisjon i feltet?",
      options: ["Malinowski gjorde ikke posisjonen til tema, mens Shah gjør sin egen til en del av analysen", "Malinowski arbeidet alene, mens Shah arbeidet sammen med et team av lokale medarbeidere", "Malinowski beskrev et samfunn i konflikt, mens Shah beskrev et stabilt og fredelig lokalsamfunn", "Malinowski brukte tolk gjennom hele feltarbeidet, mens Shah behersket språket fra begynnelsen"],
      explanation: "Riktig er forskjellen i om posisjonen gjøres til tema. Malinowski arbeidet i et samfunn stabilisert av kolonialstyret han selv var beskyttet av, uten at dette ble behandlet analytisk; Shah arbeider i en pågående konflikt og gjør sin egen posisjon til del av analysen. Metoden er den samme, kravet har endret seg.",
    },
  ],
  'sosant1000-2-1': [
    {
      question: "Hva er de tre pliktene i Mauss' gaveteori, i riktig rekkefølge?",
      options: ["Plikten til å gi, plikten til å motta, plikten til å gjengjelde", "Plikten til å gi, plikten til å gjengjelde, plikten til å takke offentlig", "Plikten til å tilby, plikten til å forhandle, plikten til å gjøre opp", "Plikten til å dele, plikten til å motta, plikten til å bevare gaven"],
      explanation: "Riktig rekkefølge er å gi, å motta, å gjengjelde. Plikten til å motta er den som oftest glemmes, og uten den faller systemet fra hverandre: da kunne enhver unngå gjeld ved å la være å ta imot. Å bevare gaven er det motsatte av poenget — gaver skal videre.",
    },
    {
      question: "Hvorfor er plikten til å motta nødvendig i Mauss' system?",
      options: ["Fordi et avslag ville latt mottakeren slippe unna enhver forpliktelse", "Fordi giveren ellers ville stått igjen med gjenstander han ikke fikk brukt", "Fordi gaven ellers ville mistet sin verdi som prestisjegjenstand i nettverket", "Fordi den som gir, må få bekreftet at gaven har riktig verdi før byttet fullføres"],
      explanation: "Riktig er at plikten til å motta er låsen i systemet: uten den kunne enhver unngå gjeld ved å avslå. Gaven mister ikke verdi ved et avslag, og byttet handler ikke om å fastslå verdi — å prise gaven ville gjort den om til et kjøp.",
    },
    {
      question: "Hva menes med «totale sosiale fenomen» hos Mauss?",
      options: ["Handlinger som er økonomi, slektskap, religion, politikk og moral på én gang", "Handlinger som involverer alle medlemmene av et samfunn samtidig, ingen unntatt", "Fenomener som finnes i alle kjente samfunn og som derfor kan kalles universelle", "Fenomener som må studeres med flere metoder fordi de er sammensatte"],
      explanation: "Riktig er at handlingen ikke lar seg plassere i én kolonne: den er flere samfunnsfelter på samme tid. Det handler ikke om hvor mange mennesker som deltar, og heller ikke om utbredelse i alle samfunn — universalitet er et annet spørsmål.",
    },
    {
      question: "Hva er resiprositet i Mauss' forstand?",
      options: ["Bytte styrt av gjensidighet, med utsatt og ulik motytelse og moralsk forpliktelse", "Bytte der partene forhandler seg frem til en pris begge kan akseptere før byttet skjer", "Bytte der ytelsene er nøyaktig like store og gjøres opp umiddelbart mellom partene", "Bytte som skjer innenfor familien og derfor ikke krever noen motytelse"],
      explanation: "Riktig er gjensidighet med utsatt og ulik motytelse, sanksjonert moralsk og ikke juridisk. Umiddelbart og likt oppgjør er nettopp det som gjør byttet til en handel og avslutter relasjonen. Bytte uten motytelse ville opphevet forpliktelsen som er hele poenget.",
    },
    {
      question: "Hvilket forhold hadde Mauss til feltarbeid?",
      options: ["Han gjorde ikke feltarbeid, men syntetiserte andres etnografi og rettshistoriske kilder", "Han gjorde feltarbeid på Trobriandøyene sammen med Malinowski på 1910-tallet og senere", "Han gjorde kortere feltarbeid på nordvestkysten av Nord-Amerika hos Boas", "Han gjorde feltarbeid i Polynesia og hentet begrepet hau derfra selv"],
      explanation: "Riktig er at Mauss aldri var i felt: «Gaven» bygger på Malinowskis, Boas' og andres materiale samt rettshistorie. De tre andre svarene er varianter av den vanligste feiltilskrivningen i dette stoffet, og de forveksler analytikeren med etnografene han leste.",
    },
    {
      question: "Hva var kula?",
      options: ["Seremonielt, langsiktig prestisjebytte av halskjeder og armbånd mellom øyer", "Prutthandelen med mat og bruksting som foregikk mellom øyene i Massim-området", "Den store gaveutdelingen der en høvding delte ut gods for å vinne rang og anseelse", "Byttet av kveg mellom slektsgrupper ved inngåelse av ekteskap"],
      explanation: "Riktig er det seremonielle prestisjebyttet av halskjeder og armbånd. Prutthandelen ved siden av heter gimwali, og å blande de to er den vanligste kula-fellen. Gaveutdeling for rang er potlatch, og kvegoverføring ved ekteskap hører til Nuer-materialet.",
    },
    {
      question: "Hva er den presise definisjonen av potlatch?",
      options: ["Konkurrerende gaveutdeling der prestisje og rang vinnes ved å gi bort", "Rituell ødeleggelse av rikdom for å vise at man ikke trenger eiendeler", "En årlig fest der en gruppe fordelte overskuddet av fangsten likt", "Et seremonielt bytte av gjenstander mellom faste partnere over lang tid"],
      explanation: "Riktig er konkurrerende gaveutdeling der prestisje vinnes ved å gi. Ødeleggelse forekom i enkelte former og perioder, men er ikke definisjonen, og å gjøre den til hovedsaken forvandler politikk til kuriositet. Bytte mellom faste partnere over tid beskriver kula.",
    },
    {
      question: "Hva betyr hau hos Mauss?",
      options: ["Forestillingen om at noe av giveren blir igjen i den gitte tingen", "Den samlede anseelsen en giver opparbeider seg gjennom mange gaver", "Den verdien en gjenstand får av å ha vært eid av mange kjente personer", "Plikten til å gjengjelde med noe mer enn det man selv har mottatt"],
      explanation: "Riktig er at tingen bærer noe av giveren, og derfor søker tilbake til sitt opphav. Uttrykket er hentet fra maorisk materiale og er et emisk begrep Mauss bruker som inngang til sin egen analyse. Anseelse er prestisje, og gjengjeld med overskudd er en annen mekanisme.",
    },
    {
      question: "Hva mener Mauss når han sier at gaven er frivillig i form, men forpliktende i innhold?",
      options: ["Den fremstår som fri og uegennyttig, men er i praksis påbudt og interessert", "Den er frivillig for giveren, men mottakeren har ingen mulighet til å avslå", "Den er frivillig i småskalasamfunn, men blir en plikt i storskalasamfunn", "Den er frivillig i formen fordi ingen kan tvinges rettslig til å gi noe"],
      explanation: "Riktig er at formen er fri og innholdet forpliktende, og at forkledningen er nødvendig: sier man prisen høyt, blir gaven et kjøp. Det er ikke bare mottakeren som er bundet — også giveren må gi for å beholde sin posisjon. Skillet går ikke mellom samfunnstyper.",
    },
    {
      question: "Hvem forplikter seg i det materialet Mauss analyserer?",
      options: ["Ofte grupper overfor grupper — klaner, husholdninger og landsbyer", "Frittstående individer som selv velger hvilke forpliktelser de tar på seg", "De eldste i hver gruppe, som handler på vegne av seg selv alene", "Bare menn med arvet rang, siden andre ikke kunne inngå bytteforhold"],
      explanation: "Riktig er at det ofte er grupper som forplikter seg overfor grupper, og at gjelden kan overleve enkeltpersonen: kula-partnerskap ble arvet videre. Det er nettopp her Mauss skiller lag med en økonomisk modell som begynner i det velgende individet.",
    },
    {
      question: "Hva kjennetegner gavebytte sammenlignet med markedsbytte?",
      options: ["Personlig, forpliktende, utsatt i tid og uavsluttet", "Upersonlig, frivillig, umiddelbart og gjort opp ved overleveringen", "Personlig, frivillig, umiddelbart og prissatt av partene selv", "Upersonlig, forpliktende, utsatt i tid og regulert av kontrakt"],
      explanation: "Riktig er personlig, forpliktende, utsatt og uavsluttet. Beskrivelsen som er upersonlig, frivillig og gjort opp ved overleveringen, gjelder markedsbyttet. Kontraktsregulering hører til retten, ikke til gavens moralske forpliktelse.",
    },
    {
      question: "Hvorfor er utsettelsen i tid en nødvendig del av gavebyttet?",
      options: ["Fordi en umiddelbar motytelse gjør byttet til en handel og avslutter forholdet", "Fordi mottakeren trenger tid til å skaffe seg en gave av tilsvarende verdi", "Fordi seremonielle gaver bare kan overrekkes ved bestemte anledninger", "Fordi giveren må kunne trekke gaven tilbake dersom relasjonen brytes"],
      explanation: "Riktig er at umiddelbar gjengjeld gjør opp forholdet og gjør gaven til et kjøp. Praktiske hensyn som anskaffelsestid og seremonielle anledninger finnes, men de forklarer ikke formen. En gave kan ikke trekkes tilbake — det er ikke et lån.",
    },
    {
      question: "Hva er overskuddsgjengjeld?",
      options: ["Å gi tilbake litt mer enn man fikk, slik at gjelden snus til den andre", "Å samle opp gaver over tid og gjengjelde alle samtidig ved en anledning", "Å betale en form for rente for den tiden man har hatt gjelden utestående", "Å gi tilbake nøyaktig det samme, slik at forholdet kommer i balanse"],
      explanation: "Riktig er å gi tilbake litt mer, slik at forpliktelsen snus og byttet holdes i gang. Dette er ikke rente: overskuddet er ikke en pris på tid, men et trekk ved en relasjon som skal fortsette. Å gjøre opp nøyaktig ville avsluttet forholdet.",
    },
    {
      question: "Hva sier Mauss' analyse om forholdet mellom egeninteresse og gavmildhet i gavebyttet?",
      options: ["De er sammenvevd i gavens form, og det er derfor formen virker", "Gavmildheten er overflaten og egeninteressen den sanne motivasjonen under", "Gavmildheten er ekte, og egeninteresse spiller ingen rolle i gavebytte", "De veksler etter samfunnstype: gavmildhet i småskala, interesse i storskala"],
      explanation: "Riktig er at de er sammenvevd og at valget mellom dem innfører et skille materialet ikke bærer. Lesningen der gavmildhet bare er en overflate, leser Mauss gjennom den økonomisk-rasjonelle modellen han argumenterer mot, og lesningen uten interesse overser forpliktelsen.",
    },
    {
      question: "Hva var potlatchens rettslige stilling i Canada mellom 1885 og 1951?",
      options: ["Praksisen var forbudt ved lov", "Praksisen var tillatt, men bare med tillatelse fra lokale myndigheter", "Praksisen var uregulert, og myndighetene forholdt seg ikke til den", "Praksisen var vernet som en del av inngåtte avtaler med myndighetene"],
      explanation: "Riktig er at potlatch var forbudt ved lov i denne perioden. Opplysningen hører med i faglige svar fordi materialet antropologien bygger på, er samlet inn under et forbud og midt i en kolonial omveltning. Praksisen er i dag revitalisert.",
    },
    {
      question: "Hva menes med konkurrerende (agonistisk) gavebytte?",
      options: ["Gavebytte der pliktene er skjerpet til en kamp om rang mellom giverne", "Gavebytte der flere partnere byr på den samme gjenstanden samtidig, og høyeste bud vinner", "Gavebytte som foregår mellom grupper som er i åpen konflikt med hverandre", "Gavebytte der motytelsen må komme raskere enn i vanlige gaveforhold"],
      explanation: "Riktig er at pliktene skjerpes til en konkurranse om rang, slik i potlatch. Kula er den dempede motsatsen. Byttet forutsetter ikke åpen konflikt — tvert imot skaper det ofte forbindelser mellom grupper som ellers står anspent til hverandre.",
    },
    {
      question: "Hvorfor kan man ikke bruke dugnaden i borettslaget som belegg i et eksamenssvar?",
      options: ["Fordi kravet er pensumetnografi med folk, sted, forsker og funn", "Fordi norske eksempler ikke regnes som antropologisk materiale", "Fordi dugnad ikke er gavebytte, men en form for organisert arbeidsdeling", "Fordi eksempler fra eget liv regnes som usaklige i en akademisk tekst"],
      explanation: "Riktig er at kravet gjelder pensumetnografi med de fire leddene; hverdagseksempelet kan komme i tillegg, aldri i stedet. Norske eksempler er fullt gyldige som etnografi når de er publiserte studier — Liens lakseoppdrett er ett. Dugnad er nettopp et godt eksempel på gavebytte, bare ikke et belegg.",
    },
    {
      question: "Hva viser brudegaven i kveg blant Nuer?",
      options: ["At én overføring samtidig var økonomi, slektskap, religion og politikk", "At kvinner ble kjøpt av brudgommens slekt mot en avtalt betaling i kveg, som ved et vanlig kjøp", "At kveget ble delt likt mellom de to slektsgruppene like etter bryllupet", "At ekteskapet først var gyldig når hele overføringen var gjort opp"],
      explanation: "Riktig er at overføringen var flere samfunnsfelter på én gang, altså et totalt sosialt fenomen i et helt annet materiale enn Mauss' eget. Å lese den som et kjøp er å legge en markedsmodell over et gavebytte — overføringen avslutter ingenting, den skaper en varig relasjon mellom grupper.",
    },
    {
      question: "Hva er gjeldens funksjon i gavebyttet?",
      options: ["Den er selve bindemiddelet: så lenge noen skylder noe, finnes relasjonen", "Den er et problem partene forsøker å gjøre opp så raskt som mulig", "Den er et mål på hvor mye prestisje en giver har opparbeidet seg", "Den er en midlertidig ubalanse som gjenopprettes ved den neste seremonien"],
      explanation: "Riktig er at gjelden binder: et fullstendig oppgjør ville avsluttet forholdet, og derfor unngås det. Sammenlign med et banklån, der begge parter vil bli ferdige. Prestisje måles i hva man har gitt, ikke i hva man skylder.",
    },
    {
      question: "Hvorfor er skillet mellom gavebytte og markedsbytte en analytisk modell og ikke en beskrivelse av to samfunnstyper?",
      options: ["Fordi begge formene finnes side om side i samme samfunn, som kula og gimwali", "Fordi ingen samfunn har rendyrket gavebytte, mens markedsbytte finnes overalt", "Fordi modellen bare gjelder for de samfunnene Mauss faktisk skrev om", "Fordi forskjellen mellom formene forsvinner så snart penger tas i bruk"],
      explanation: "Riktig er at formene sameksisterer: Trobriandernes gimwali gikk ved siden av kula, og norsk hverdag er full av gavebytte. Modellen gjelder langt utover Mauss' eget materiale, og penger opphever ikke skillet — man kan gi penger som gave.",
    },
    {
      question: "Hva er den vanligste feilen når kandidater gjengir de tre pliktene?",
      options: ["At plikten til å motta faller ut", "At plikten til å gjengjelde blandes med plikten til å gi", "At rekkefølgen snus slik at gjengjeld kommer først", "At pliktene tilskrives Malinowski i stedet for Mauss"],
      explanation: "Riktig er at plikten til å motta faller ut, fordi den er den minst opplagte. Å utelate én av tre er feil nummer 8 i registeret: å overse begrepets distinksjoner, som gjør et ellers godt svar til et minimumssvar.",
    },
    {
      question: "Hva slags påstand er Mauss' analyse av gaven?",
      options: ["En sosiologisk påstand om hva gaven gjør mellom mennesker", "En psykologisk påstand om hva giveren egentlig føler og ønsker", "En økonomisk påstand om hvordan verdier fordeles mest effektivt", "En moralsk påstand om at gavebytte er en bedre form enn handel"],
      explanation: "Riktig er at påstanden er sosiologisk: den gjelder gavens virkning mellom mennesker og grupper, ikke enkeltmenneskets sinnelag. Å lese den psykologisk er nettopp det som gjør at man havner i «gaven er skjult egoisme». Mauss rangerer heller ikke formene moralsk.",
    },
    {
      question: "Hvorfor hadde kula-gjenstandene verdi når de ikke hadde bruksverdi?",
      options: ["Fordi historien av tidligere eiere var en del av gjenstanden selv", "Fordi materialene var sjeldne og krevende å skaffe fra andre øyer", "Fordi de kunne veksles inn i mat og bruksting ved behov", "Fordi antallet gjenstander var strengt begrenset av høvdingene"],
      explanation: "Riktig er at tingens historie var en del av tingen: en berømt halskjede hadde navn og en kjent rekke eiere. At de kunne veksles inn i mat er feil — det ville brutt skillet mot gimwali, som var nettopp det som ikke skulle skje.",
    },
    {
      question: "Hva er forskjellen på status og prestisje slik boka bruker ordene?",
      options: ["Status er en sosial posisjon med plikter og rettigheter, prestisje er anseelse", "Status er den anseelsen man har hos andre, prestisje er den formelle rangen", "Status er noe man arver, prestisje er noe man oppnår gjennom innsats", "Status gjelder individer, prestisje gjelder grupper og slektslinjer"],
      explanation: "Riktig er at status er en posisjon med plikter og rettigheter, mens prestisje er anseelse. Skillet mellom arvet og oppnådd går mellom tilskrevet og ervervet status, som er noe annet, og begge kan gjelde både individer og grupper.",
    },
    {
      question: "Hva er poenget med å nevne at Malinowskis feltarbeid foregikk under australsk kolonialstyre?",
      options: ["Det forklarer hvordan kunnskapen ble til, og er en markør for meget god", "Det viser at materialet er upålitelig og bør brukes med stor forsiktighet", "Det er et krav i sensorveiledningene at kolonihistorien nevnes i alle svar", "Det plasserer studien i tid, slik at leseren vet når den ble utført"],
      explanation: "Riktig er at opplysningen forklarer hvordan kunnskapen ble til, og at et slikt kildekritisk blikk knyttes til meget god. Det gjør ikke materialet verdiløst, og det er ingen regel om at det må nevnes i alle svar — men det er et rimelig og billig pluss.",
    },
    {
      question: "Hva skjer sosialt når noen nekter å ta imot en gave?",
      options: ["Avslaget leses som en avvisning av selve relasjonen til giveren", "Avslaget er nøytralt så lenge det begrunnes med praktiske forhold", "Avslaget overfører forpliktelsen til en annen i mottakerens gruppe", "Avslaget gjør giveren fri fra sin egen plikt til å gi ved neste anledning"],
      explanation: "Riktig er at avslaget ikke er nøytralt: det sier at man ikke ønsker forbindelsen. I konkurrerende former er det dessuten en innrømmelse av at man ikke kan svare. Forpliktelsen kan ikke skyves over på andre, og giverens plikt til å gi består.",
    },
    {
      question: "Hvorfor kalles gaven hos Mauss et vindu inn i holismen?",
      options: ["Fordi én og samme handling er flere samfunnsfelter samtidig", "Fordi gaver finnes i alle samfunn og derfor kan sammenlignes overalt", "Fordi gaveøkonomien går forut for markedsøkonomien historisk", "Fordi gaven binder individet til gruppen og dermed skaper samfunnet"],
      explanation: "Riktig er at handlingen er økonomi, slektskap, religion, politikk og moral på én gang — holismen gjort til analytisk redskap. Mauss hevder ikke at gaveøkonomien er et tidligere stadium; en slik trappetrinnslesning er den evolusjonismen faget har forlatt.",
    },
    {
      question: "Hva er den beste innvendingen mot at «totale sosiale fenomen» er et skarpt begrep?",
      options: ["At nesten hva som helst kan sies å henge sammen med alt annet", "At begrepet bare kan brukes på samfunn uten pengeøkonomi", "At Mauss ikke selv hadde feltarbeid å prøve begrepet mot", "At begrepet ikke sier noe om hvordan forpliktelsene faktisk oppstår"],
      explanation: "Riktig er innvendingen om skarphet: hvis alt er et totalt sosialt fenomen, sier begrepet lite. Motargumentet er at Mauss peker ut en mekanisme — de tre pliktene — og ikke bare konstaterer sammenheng. Begrepet brukes i dag på lakseoppdrett og gruvedrift, altså langt inne i pengeøkonomien.",
    },
    {
      question: "Hvordan bør et hverdagseksempel brukes i et eksamenssvar?",
      options: ["Som illustrasjon av antropologens begrep, i tillegg til pensumetnografien", "Som hovedbelegg dersom det er mer presist observert enn pensumeksemplene", "Som erstatning for pensumetnografi når man ikke husker detaljene i studien", "Som innledning, men aldri i selve drøftingen av oppgavens påstand"],
      explanation: "Riktig er som illustrasjon i tillegg til pensumetnografien: start i begrepet, bruk erfaringen som illustrasjon, koble tilbake til pensum. Det kan aldri erstatte belegget, men det er heller ikke forbudt i drøftingen — det viser anvendelse.",
    },
    {
      question: "Hva er den vanligste feiltilskrivningen i Mauss-stoffet?",
      options: ["Å skrive at Mauss gjorde feltarbeid blant dem han skriver om", "Å skrive at Mauss regnet gaven som en form for markedsbytte", "Å skrive at Mauss hentet begrepet hau fra Trobriandøyene", "Å skrive at Mauss mente gavebytte bare finnes i småskalasamfunn"],
      explanation: "Riktig er feltarbeidsfeilen: Mauss syntetiserte andres etnografi og var aldri i felt. Hau er hentet fra maorisk materiale i Polynesia, ikke fra Trobriandøyene — en beslektet, men mindre vanlig forveksling som det også er verdt å holde orden på.",
    },
  ],
  'sosant1000-2-2': [
    {
      question: "Hva er gimwali?",
      options: ["Den prosaiske prutthandelen med mat og bruksting ved siden av kula", "Det seremonielle byttet av halskjeder og armbånd mellom faste partnere", "Den seremonielle utdelingen av gods der en vert vinner rang og anseelse", "Den delen av kula-reisen der magi ble utført før avreise over åpent hav"],
      explanation: "Riktig er prutthandelen med bruksting, med fritt valg av motpart og åpen forhandling. Byttet av halskjeder og armbånd mellom faste partnere er kula, og seremoniell utdeling av gods for rang er potlatch — to forvekslinger som begge testes direkte.",
    },
    {
      question: "Hva skjedde dersom noen prutet under et kula-bytte?",
      options: ["Det ble oppfattet som en fornærmelse, fordi relasjonen da ble behandlet som en handel", "Det var vanlig praksis, siden verdien på gjenstandene måtte fastsettes på stedet av partene", "Det var tillatt mellom partnere som kjente hverandre godt fra før", "Det førte til at gjenstanden måtte gis videre til en annen partner umiddelbart"],
      explanation: "Riktig er at det var en fornærmelse: å prise gaven ville sagt at partneren var en motpart og ikke en partner. Kula-gjenstandene hadde ingen forhandlet verdi, og skillet mot gimwali var strengt uansett hvor godt partnerne kjente hverandre.",
    },
    {
      question: "Hvordan sirkulerte gjenstandene i kula-ringen?",
      options: ["Halskjeder gikk den ene veien mellom øyene og armbånd den andre", "Alle gjenstander gikk samme vei rundt ringen og kom tilbake til utgangspunktet", "Gjenstandene ble byttet fritt mellom øyene etter hvor stort behovet var", "Gjenstandene ble samlet på én øy og fordelt derfra ved store seremonier"],
      explanation: "Riktig er motsatte retninger for de to gjenstandstypene. Fri fordeling etter behov ville brutt med hele formen: gjenstandene hadde ingen bruksverdi, og verdien lå i historien og i at de fortsatte å bevege seg mellom faste partnere.",
    },
    {
      question: "Hva gjorde en kula-gjenstand verdifull?",
      options: ["Historien av tidligere eiere, som var en del av gjenstanden selv", "Mengden skjell den var laget av, som varierte med tilgangen på materialer", "Muligheten for å bytte den inn i mat og redskaper ved behov", "At den kunne bæres offentlig og dermed vise eierens rang"],
      explanation: "Riktig er historien av eiere: de mest berømte gjenstandene hadde egne navn og en kjent rekke tidligere innehavere. De ble sjelden båret, og de kunne ikke veksles inn i bruksting — det ville brutt skillet mot gimwali.",
    },
    {
      question: "Hva er den presise definisjonen av potlatch?",
      options: ["Konkurrerende gaveutdeling der prestisje og rang vinnes ved å gi bort", "Rituell ødeleggelse av rikdom for å vise uavhengighet av materielle goder", "En sammenkomst der overskudd fordeles likt mellom alle gruppens medlemmer", "Et langsiktig bytte av seremonielle gjenstander mellom faste partnere"],
      explanation: "Riktig er konkurrerende gaveutdeling der prestisje vinnes ved å gi. Ødeleggelse forekom i enkelte former og perioder, men er ikke definisjonen. Likedeling og bytte mellom faste partnere beskriver andre former — det siste er kula.",
    },
    {
      question: "Hvilken rettslig funksjon hadde potlatchen?",
      options: ["Krav på titler og arverettigheter ble gjort offentlig gyldige ved at gjestene var vitner", "Tvister mellom gruppene ble avgjort av en rådsforsamling som møttes under sammenkomsten", "Gjeld mellom deltakerne ble slettet slik at alle startet på nytt", "Straff for lovbrudd ble utmålt i form av gods som måtte gis bort"],
      explanation: "Riktig er vitnefunksjonen: gavene gjestene mottok, var betaling for å bevitne kravet, og kravet var etablert fordi det var sett og godtatt. Dette er grunnen til at potlatch er misvisende beskrevet som overdådig gjestfrihet.",
    },
    {
      question: "Hva er de to forsvarlige lesningene av hva potlatch «egentlig» er?",
      options: ["Konkurranse om rang, og omfordeling av overskudd i en økonomi med ujevne år", "Religiøs offerhandling, og en tidlig form for markedshandel mellom nabogrupper", "Politisk allianse mellom øyer, og en måte å bevare mat gjennom vinteren", "Straffeutmåling uten domstol, og opplæring av unge i gruppens historie"],
      explanation: "Riktig er maktkampen og omfordelingen: begge har støtte i materialet, og den presise landingen er at praksisen gjorde begge deler samtidig — nettopp derfor kaller Mauss slikt et totalt sosialt fenomen.",
    },
    {
      question: "Hva sier omfordelingslesningen av potlatch?",
      options: ["At systemet flyttet overskudd fra dem som hadde hatt et godt år til dem som ikke hadde det", "At alle deltakere fikk like store gaver uavhengig av rang og posisjon", "At verten beholdt en fast andel og fordelte resten etter behov", "At gavene ble tilbakeført til verten ved neste sammenkomst, i nøyaktig samme mengde som før"],
      explanation: "Riktig er flyttingen av overskudd i en økonomi der fangst og innhøsting varierte kraftig, mot en forpliktelse som forfalt når lykken snudde. Gavene var ikke like store — rang avgjorde både hva man fikk og i hvilken rekkefølge.",
    },
    {
      question: "Hva er en sammenligningsakse i en komparativ oppgave?",
      options: ["Ett spørsmål som stilles til begge fenomenene, med svar på begge sider før neste akse", "En rekkefølge som avgjør hvilket av de to fenomenene som skal beskrives først i teksten", "Et kriterium for å avgjøre hvilket av fenomenene som er viktigst i pensum", "En tidslinje som viser hvordan det ene fenomenet utviklet seg til det andre"],
      explanation: "Riktig er ett spørsmål stilt til begge, med svar på begge sider. Å beskrive det ene og så det andre uten akser er feil nummer 11, ensidig komparasjon. Sammenligning handler heller ikke om rangering eller om historisk rekkefølge.",
    },
    {
      question: "Hva er motivaksen i sammenligningen gave mot marked?",
      options: ["I gavebyttet er relasjonen målet og tingen middelet; i markedsbyttet er det motsatt", "I gavebyttet er giveren helt uegennyttig; i markedsbyttet er kjøperen ren egoist", "I gavebyttet er motivet religiøst; i markedsbyttet er motivet økonomisk", "I gavebyttet er motivet kjent for alle; i markedsbyttet holdes det skjult"],
      explanation: "Riktig er at aksen skiller mellom hva byttet er innrettet på: relasjon eller ting. Den skiller ikke mellom rene motiver — kula-deltakere hadde også praktisk nytte av kontaktene, og handel kan godt bygge relasjoner.",
    },
    {
      question: "Hvorfor er upersonligheten i markedsbyttet også en styrke?",
      options: ["Den gjør bytte mellom fremmede mulig uten at tillit må bygges først", "Den gjør at prisene blir lavere fordi ingen kan kreve personlige tjenester", "Den gjør det mulig å avslå et bytte uten at det oppstår konflikt", "Den gjør at varen kan returneres dersom kjøperen ombestemmer seg"],
      explanation: "Riktig er at upersonligheten muliggjør bytte mellom fremmede over store avstander. Prisen for den friheten er at ingen relasjon oppstår. Retur og avslag er reguleringer i moderne markeder, ikke trekk ved formen som sådan.",
    },
    {
      question: "Hva er byttesfærer?",
      options: ["Atskilte og moralsk rangerte kretsløp av goder som ikke byttes fritt mot hverandre", "Geografiske områder der bestemte varer produseres og omsettes lokalt", "Ulike markeder for samme vare, med ulike priser i hvert av dem", "Faser i et bytte, fra det første tilbudet til det endelige oppgjøret mellom partene"],
      explanation: "Riktig er atskilte og rangerte kretsløp der goder byttes internt, men ikke fritt på tvers. Poenget er moralsk og ikke teknisk: å beskrive sfærene som «ulike markeder» er nettopp den flate definisjonen som gir trekk.",
    },
    {
      question: "Hvilke sfærer beskrev Bohannan blant Tiv?",
      options: ["Livsopphold, prestisjegoder som messingstenger, og rettigheter i mennesker", "Mat, husdyr og jord, som hver for seg ble byttet innenfor sin egen landsby", "Hverdagsvarer, luksusvarer og gaver til religiøse formål", "Lokalt bytte, regionalt bytte og handel med kolonimakten"],
      explanation: "Riktig er de tre sfærene livsopphold, prestisjegoder og rettigheter i mennesker. Skillet fulgte ikke geografi eller hvor eksklusive varene var, men en moralsk rangordning der konvertering oppover ga anseelse.",
    },
    {
      question: "Hva skjedde med byttesfærene da allmennpenger ble tatt i bruk?",
      options: ["Skillene brøt sammen, fordi alt kunne oversettes til én skala", "Sfærene ble flere, fordi penger skapte nye typer goder å bytte", "Sfærene besto uendret, siden penger bare ble brukt i den laveste sfæren", "Sfærene ble slått sammen til to, en for varer og en for tjenester"],
      explanation: "Riktig er at skillene brøt sammen: det som før krevde en sosial bragd å konvertere, kunne nå gjøres med et beløp. Det som endret seg, var ikke bare hvor mye folk hadde, men hva som kunne byttes mot hva — altså en moralsk ordning.",
    },
    {
      question: "Hva var messingstenger blant Tiv?",
      options: ["Prestisjegods som ikke kunne veksles fritt mot mat og bruksting", "Et allment betalingsmiddel som ble brukt i alle typer bytte", "Redskaper som ble brukt i jordbruket og byttet i livsoppholdssfæren", "Gaver som utelukkende ble gitt ved inngåelse av ekteskap"],
      explanation: "Riktig er prestisjegods uten allmenn omsettelighet: de kjøpte ikke mat og hadde ingen pris. Nettopp derfor er de et godt eksempel på at verdi og penger ikke er samme sak — de var verdifulle uten å være allment omsettelige.",
    },
    {
      question: "Hva er en vare i den forstand kapitlet bruker ordet?",
      options: ["Et gode som er gjort sammenlignbart med andre gjennom pris, uavhengig av sin historie", "Et gode som er produsert for salg og ikke for eget bruk", "Et gode som skifter eier mot betaling i penger", "Et gode som er masseprodusert og derfor finnes i mange helt like eksemplarer"],
      explanation: "Riktig er sammenlignbarheten gjennom pris og historieløsheten: melken bærer ikke noe av bonden, og prisen ville ikke endret seg om den gjorde det. Motstykket er gavens gjenstand, der historien av tidligere eiere er en del av verdien.",
    },
    {
      question: "Hvorfor er skillet mellom gavebytte og markedsbytte analytisk og ikke et skille mellom samfunnstyper?",
      options: ["Fordi begge logikkene finnes side om side i samme samfunn, som kula og gimwali", "Fordi ingen kjente samfunn har rendyrket den ene formen gjennom hele sin historie", "Fordi forskjellen mellom formene er en gradsforskjell og ikke en artsforskjell", "Fordi antropologer i dag mener at alt bytte i bunn og grunn følger samme logikk"],
      explanation: "Riktig er sameksistensen: Trobriandernes gimwali gikk ved siden av kula, og norsk hverdag er full av gavebytte. Forskjellen mellom formene er reell og ikke bare en gradsforskjell — det er plasseringen i samfunn som er feil i utsagnet.",
    },
    {
      question: "Hva er feil nummer 11 i registeret over typiske feil?",
      options: ["Ensidig komparasjon, der bare det ene leddet faktisk blir behandlet", "Å bruke bare én eller to pensumtekster i et langsvar i Del 2", "Å svare på flere enn fire kortsvar i Del 1", "Å behandle slektskap eller kjønn som rent biologisk"],
      explanation: "Riktig er ensidig komparasjon. For få kilder i langsvar er feil nummer 2, for mange kortsvar er feil nummer 7, og naturalisering av det sosiale er feil nummer 9 — tre andre koder i det samme registeret på tolv.",
    },
    {
      question: "Hvilken side av sammenligningen gave mot marked blir oftest tynn i besvarelser?",
      options: ["Markedssiden, fordi kandidater har lest mest om gavebyttet", "Gavesiden, fordi den krever etnografi fra flere ulike samfunn", "Begge sider blir like tynne når kandidaten mangler pensumkunnskap", "Ingen av sidene — problemet er som regel at svaret blir for langt"],
      explanation: "Riktig er markedssiden: pensum bruker mest plass på gavebytte, og kandidater ender med «markedsøkonomien» som abstraksjon. Motgiften er å ha et konkret marked med navn, sted og forsker klart — Liens lakseoppdrett eller Shahs materiale.",
    },
    {
      question: "Hva viser Liens studie av norsk lakseoppdrett?",
      options: ["At oppdrettslaksen blir til i skjæringspunktet mellom biologi, teknologi, marked og forvaltning", "At norsk oppdrettsnæring har erstattet alt gavebytte med rent markedsbytte i kystsamfunnene", "At laks er en vare som ikke lar seg standardisere for et globalt marked", "At lokal kunnskap om fisk er mer presis enn den vitenskapelige kunnskapen"],
      explanation: "Riktig er at laksen blir til i skjæringspunktet mellom flere forhold, og at natur og kultur ikke lar seg skille i praksis. Studien handler ikke om at én bytteform har erstattet en annen, og den rangerer ikke kunnskapsformer mot hverandre.",
    },
    {
      question: "Hvorfor er gimwali det sterkeste argumentet mot at gave og marked skiller samfunnstyper?",
      options: ["Fordi den viser markedslignende handel i samme samfunn som kula, holdt atskilt av deltakerne selv", "Fordi den viser at Trobrianderne foretrakk vanlig handel så snart de fikk muligheten til det", "Fordi den viser at kula forsvant da handelen med kolonimakten begynte", "Fordi den viser at prutting er en universell menneskelig tilbøyelighet"],
      explanation: "Riktig er sameksistensen i samme samfunn, med et skille deltakerne selv opprettholdt. Det er nettopp det siste som gjør argumentet sterkt: skillet er ikke analytikerens påfunn, men en moralsk grense de handlende selv trakk.",
    },
    {
      question: "Hva var det avgjørende ved kula-partnerskapet?",
      options: ["Det var fast, ofte livslangt, og kunne arves videre til neste generasjon", "Det ble inngått på nytt for hver ekspedisjon, avhengig av hvem man møtte", "Det gjaldt bare mellom menn med samme rang på ulike øyer", "Det kunne oppheves når som helst uten sosiale følger for partene"],
      explanation: "Riktig er at forbindelsen var fast og arvelig, og at det derfor var relasjonen og ikke gjenstanden som var det egentlige byttet. Nettopp fordi forholdet skulle vare, kunne ingen enkelttransaksjon gjøres opp.",
    },
    {
      question: "Hva er konvertering i et system av byttesfærer?",
      options: ["Å flytte verdi fra én sfære til en annen, oppover eller nedover", "Å bytte et gode mot et likeverdig gode innenfor samme sfære", "Å gjøre om prestisjegods til penger ved salg til utenforstående", "Å overføre en byttepartner fra én sfære til en annen ved avtale"],
      explanation: "Riktig er å flytte verdi mellom sfærer. Bytte innenfor samme sfære er det vanlige og krever ingen bragd; det er tverrgående flytting som er sosialt ladet — oppover gir anseelse, nedover er en skam.",
    },
    {
      question: "Hvorfor er tidshorisonten et nyttig testverktøy når man skal avgjøre hva slags bytte man ser på?",
      options: ["Fordi gavebyttet aldri er gjort opp, mens markedsbyttet er gjort opp ved betaling", "Fordi gavebytte alltid tar vesentlig lengre tid å gjennomføre enn et vanlig kjøp gjør", "Fordi gaver bare gis ved bestemte anledninger i året", "Fordi markedsbytte forutsetter at partene møtes gjentatte ganger"],
      explanation: "Riktig er at det uavsluttede mot det avsluttede er det enkleste kjennetegnet å måle i praksis. Det handler ikke om hvor lang tid selve handlingen tar — en gaveoverrekkelse kan gå på sekunder og likevel etterlate en forpliktelse som varer i år.",
    },
    {
      question: "Hva er poenget med å nevne at potlatch var forbudt ved lov i Canada fra 1885 til 1951?",
      options: ["Det forteller noe om materialet: beskrivelsene er skrevet mens praksisen var kriminalisert", "Det viser at praksisen var så ødeleggende at myndighetene måtte gripe inn", "Det forklarer hvorfor Boas aldri fikk anledning til å observere en fullstendig potlatch selv", "Det er nødvendig for å datere når materialet ble samlet inn"],
      explanation: "Riktig er at opplysningen sier noe om materialets tilblivelse: det er samlet inn under et forbud, i en periode med befolkningstap, ny handelsrikdom og strid om titler. Forbudet var statlig undertrykking av en institusjon, ikke en respons på skadelighet.",
    },
    {
      question: "Hva er den beste måten å bruke skillet mellom gave og marked på i en drøfting?",
      options: ["Som redskap for å se hvilken logikk som er i sving i en gitt situasjon", "Som en klassifikasjon av samfunn etter hvor langt de har kommet økonomisk", "Som et bevis for at gavebyttet er en mer moralsk bytteform enn markedet", "Som en historisk rekkefølge der gaveøkonomien går forut for markedet"],
      explanation: "Riktig er som analytisk redskap for å identifisere logikker i situasjoner. Trappelesningen der samfunn rangeres etter økonomisk utvikling, er den evolusjonismen faget har forlatt, og Mauss rangerer heller ikke formene moralsk.",
    },
  ],
  'sosant1000-2-3': [
    {
      question: "Hva er kjernen i begrepet prekaritet?",
      options: ["Usikkerheten — at arbeids- og livsvilkårene er ustabile og uforutsigbare", "Fattigdommen — at inntekten er for lav til å dekke helt nødvendige utgifter", "Utnyttelsen — at arbeidsgiveren tar en stadig større del av verdiskapingen", "Uformaliteten — at arbeidet foregår utenfor myndighetenes registre"],
      explanation: "Riktig er usikkerheten. En fattig person med fast arbeid er ikke prekær, og en prekær person er ikke nødvendigvis blant de fattigste. Uformelt arbeid henger ofte sammen med prekaritet, men er en egen kategori som beskriver reguleringen, ikke usikkerheten.",
    },
    {
      question: "Hva viste Millars studie av søppelplukkerne i Jardim Gramacho?",
      options: ["At folk vendte tilbake til fyllinga fordi arbeidets rytme og selvstendighet passet et usikkert liv", "At folk ble værende på fyllinga fordi de ikke hadde noe annet arbeid å gå til, og derfor ingen annen utvei", "At arbeidet på fyllinga ga høyere og langt mer forutsigbar inntekt enn regulert lønnsarbeid i området", "At myndighetene hindret søppelplukkerne i å skaffe seg formelt arbeid"],
      explanation: "Riktig er at flere hadde hatt regulert lønnsarbeid og likevel vendte tilbake, og at grunnene ikke bare var nød. Lesningen om at de manglet alternativer, er nettopp elendighetslesningen studien motsier — og det var ikke inntekten som trakk.",
    },
    {
      question: "Hvorfor er det en feillesning å beskrive Millars studie som en skildring av nød?",
      options: ["Fordi den fjerner funnet: at folk vendte tilbake, og at det fantes grunner utover nød", "Fordi forholdene på fyllinga faktisk var både gode og trygge for dem som arbeidet der over tid", "Fordi studien handler om myndighetenes avfallspolitikk og ikke om arbeiderne på fyllinga", "Fordi antropologiske studier aldri skal beskrive materielle levekår"],
      explanation: "Riktig er at elendighetslesningen fjerner selve funnet og gjør menneskene til ofre uten handlingsrom. Studien sier ikke at arbeidet var trygt eller ønsket — å romantisere er den motsatte og like gale feilen.",
    },
    {
      question: "Hvilke tre trekk ved prekært arbeid gjør det til en livsform i Millars analyse?",
      options: ["Rytmen, den relative selvstendigheten og relasjonene mellom dem som arbeider der", "Størrelsen på inntekten, lengden på arbeidstiden og avstanden mellom fyllinga og hjemmet", "Tryggheten, forutsigbarheten og de formelle rettighetene som fulgte med arbeidet der", "Fellesskapet, den faglige stoltheten og muligheten for opprykk"],
      explanation: "Riktig er rytmen, selvstendigheten og relasjonene. Trygghet og forutsigbarhet er nettopp det prekært arbeid mangler, og opprykk finnes ikke i en slik struktur — poenget er at formen likevel har en logikk folk kan leve i.",
    },
    {
      question: "Hva er forskjellen på den svake og den sterke versjonen av påstanden om innvevd økonomi?",
      options: ["Den svake sier at økonomien påvirkes av annet; den sterke at økonomiske handlinger er sosiale handlinger", "Den svake gjelder småskalasamfunn uten pengeøkonomi; den sterke gjelder også moderne markedsøkonomier i dag", "Den svake er Mauss' egen posisjon; den sterke er en nyere posisjon som er utviklet av senere antropologer i faget", "Den svake handler om produksjon; den sterke handler om bytte og fordeling"],
      explanation: "Riktig er skillet mellom påvirkning og identitet. Den svake er nesten uomstridt, og et svar som bare viser den, når minimumskravet. Den sterke er Mauss' egen posisjon, og den er den som krever etnografi for å bli troverdig.",
    },
    {
      question: "Hva er den metodiske konsekvensen av tesen om den innvevde økonomien?",
      options: ["At man ikke kan avgrense «det økonomiske» på forhånd, men må følge handlingene", "At man må bruke kvantitative metoder i tillegg til deltagende observasjon over tid", "At man må studere økonomien over vesentlig lengre tidsrom enn andre samfunnsforhold", "At man må sammenligne minst to samfunn for å kunne si noe om økonomi"],
      explanation: "Riktig er at feltet ikke kan avgrenses før man går ut i felt — det er holismen som metodisk krav. Metodevalg og komparasjon er viktige i faget, men de følger ikke av denne bestemte tesen.",
    },
    {
      question: "Hvorfor er Liens lakseoppdrett et godt testtilfelle for tesen om innvevd økonomi?",
      options: ["Fordi det er en industriell produksjon for et globalt marked, der tesen er mest utsatt", "Fordi det er en norsk studie og derfor lettere å kjenne igjen for norske lesere av pensum", "Fordi oppdrettsnæringen er lite regulert og dermed viser markedet i ren form", "Fordi laks er en vare uten kulturell betydning i noen av de markedene den til slutt selges i"],
      explanation: "Riktig er at tesen er mest utsatt i en gjennomindustrialisert produksjon: holder den der, holder den bredt. Næringen er tvert imot sterkt regulert, og det er nettopp forvaltningens rolle i prisdannelsen som er en del av poenget.",
    },
    {
      question: "Hva er svaret på innvendingen om at moderne økonomier har skilt ut det økonomiske som eget felt?",
      options: ["At utskillingen er en institusjonell konstruksjon, ikke en beskrivelse av hvordan handlinger henger sammen", "At innvendingen er riktig, og at tesen om innvevd økonomi derfor bare gjelder for samfunn uten utviklede markeder", "At moderne institusjoner ikke virker etter hensikten og derfor kan ses bort fra", "At skillet mellom økonomi og samfunn er like gammelt som markedene selv"],
      explanation: "Riktig er at utskillingen er institusjonell: at noen behandler økonomien som løsrevet, gjør den ikke løsrevet — men behandlingen har virkninger som i seg selv kan studeres. Institusjonene virker godt; det er slutningen fra dem som er feil.",
    },
    {
      question: "Hva er frarøvelse (dispossession)?",
      options: ["Prosessen der mennesker mister tilgang til land, ressurser eller levebrød", "Den ulikheten som oppstår når noen tjener systematisk mer enn andre på det samme arbeidet", "Statens inndragning av eiendom som straff for lovbrudd", "Tapet av kulturell identitet som følger med arbeidsmigrasjon"],
      explanation: "Riktig er tapet av tilgang til land, ressurser eller levebrød, gjennom lovgivning, oppkjøp, utbygging eller tvang. Begrepets styrke er at det gjør ulikhet til noe som er blitt gjort, av noen, over tid — ikke til en tilstand.",
    },
    {
      question: "Hva viser Shahs materiale om forholdet mellom arbeid og politikk blant Adivasi?",
      options: ["At arbeid, land, kaste, gjeld og politikk ikke lar seg skille fra hverandre", "At politisk mobilisering er en direkte følge av lave lønninger i gruvedriften", "At arbeidsmigrasjon har erstattet politisk organisering som strategi", "At geriljabevegelsen har lykkes med å sikre Adivasienes rettigheter til land"],
      explanation: "Riktig er at feltene ikke lar seg skille: hvem som arbeider hvor, følger av hvem som eier hva, som følger av en lang historie av frarøvelse. Shah viser også bevegelsens egne motsetninger — den ensidige lesningen om at geriljaen kjemper Adivasienes sak, er en klassisk feil.",
    },
    {
      question: "Hva er uformelt arbeid?",
      options: ["Arbeid utenfor formelle kontrakter, registrering og arbeidsrettslig regulering", "Arbeid som utføres uten lønn, som husarbeid og omsorg for medlemmer av egen familie", "Arbeid som er ulovlig og derfor må holdes skjult for myndighetene", "Arbeid uten fast arbeidssted, som i transport og sesongjordbruk"],
      explanation: "Riktig er arbeid utenfor formell regulering — ikke nødvendigvis ulovlig, men usynlig for systemene som måler og beskytter arbeid. Ubetalt omsorgsarbeid og arbeid uten fast sted kan være uformelt, men definerer ikke kategorien.",
    },
    {
      question: "Hvorfor er svaret på spørsmålet «er prekaritet nytt?» avhengig av hvor man ser fra?",
      options: ["Fordi regulert lønnsarbeid med trygghet er et historisk og geografisk særtilfelle", "Fordi begrepet prekaritet ble innført i faget først på 2000-tallet", "Fordi pålitelig statistikk om arbeidsforhold mangler for store deler av verden i dag", "Fordi prekaritet betyr ulike ting i ulike språk og fagtradisjoner"],
      explanation: "Riktig er at den faste, regulerte stillingen er unntaket og ikke normen. Sett fra Nord-Europa ser prekaritet ut som en ny oppløsning; sett fra store deler av verden ser det ut som arbeidets vanlige tilstand — og å oppdage slikt er hva komparasjon er til for.",
    },
    {
      question: "Hvordan kan Millars materiale kobles til Mauss' gaveteori?",
      options: ["Mauss beskriver forpliktelsens arkitektur; Millar viser hva som skjer når den mangler", "Begge beskriver hvordan gaver skaper prestisje i arbeidslivet", "Millar viser at gavebytte har erstattet lønnsarbeid i uformelle økonomier", "Begge argumenterer for at markedsøkonomien er moralsk underlegen den eldre gaveøkonomien"],
      explanation: "Riktig er koblingen mellom forpliktelsens arkitektur og fraværet av den — men med en nyanse: Millars materiale viser at gjensidighet oppstår likevel, i små og skjøre former. Ingen av tekstene rangerer bytteformene moralsk.",
    },
    {
      question: "Hva er det viktigste kravet 3-referanse-regelen faktisk stiller?",
      options: ["At hver tekst bærer et etnografisk eksempel argumentet hviler på", "At tre pensumtekster nevnes ved navn i løpet av selve besvarelsen", "At tekstene er hentet fra tre ulike deler av pensum", "At minst tre ulike samfunn er beskrevet i besvarelsen"],
      explanation: "Riktig er at tekstene må være brukt og ikke bare nevnt: hver av dem skal bære et eksempel argumentet hviler på, og minst to av dem skal settes i forhold til hverandre. Å nevne tre navn uten dette er den vanligste måten å oppfylle regelen på papiret og bomme i praksis.",
    },
    {
      question: "Hva er den beste innvendingen mot tesen om at all økonomi er innvevd?",
      options: ["At tesen blir tom hvis den bare konstaterer at alt henger sammen med alt", "At tesen ikke lar seg prøve empirisk fordi den er en definisjon", "At tesen ble utviklet før moderne markedsøkonomier fantes", "At tesen forutsetter at alle samfunn har samme type institusjoner og ordninger"],
      explanation: "Riktig er tomhetsinnvendingen. Motargumentet er at Mauss peker ut en mekanisme — de tre pliktene — og ikke bare en sammenheng; tesen er brukbar i den grad den kan vise mekanismer. Moderne markeder fantes i høyeste grad da Mauss skrev.",
    },
    {
      question: "Hva menes med at arbeid er en sosial relasjon?",
      options: ["At arbeidet innebærer forventninger og forpliktelser som strekker seg ut over arbeidsplassen", "At arbeidet foregår i grupper og derfor krever samarbeid mellom kolleger", "At arbeidsforholdet er regulert av en kontrakt mellom to parter", "At arbeidets verdi til enhver tid bestemmes av hva andre er villige til å betale for det"],
      explanation: "Riktig er at arbeidet er en relasjon med forventninger og moral: hvem du får jobb gjennom, hva du kan si nei til, og hva som skjer når du blir syk, avhenger av sosiale bånd like mye som av kontrakt. Samarbeid og kontrakt er trekk ved arbeid, ikke det som gjør det til en relasjon.",
    },
    {
      question: "Hva sier formalismen i økonomisk antropologi?",
      options: ["At økonomisk teori om valg under knapphet kan brukes på alle samfunn", "At økonomiske former er kvalitativt forskjellige og krever egne begreper", "At økonomien alltid er innvevd i slektskap, religion og politikk", "At markedet er den mest effektive måten å fordele knappe goder på"],
      explanation: "Riktig er at teorien om valg under knapphet gjelder overalt, og at forskjellen mellom samfunn ligger i hva folk verdsetter. Posisjonen om kvalitativt ulike former er substantivismen, som er motposisjonen — og dette er lavfrekvent stoff verdt én setning, ikke et avsnitt.",
    },
    {
      question: "Hvorfor er den faste, regulerte stillingen ikke et godt mål på hva arbeid «egentlig» er?",
      options: ["Fordi den er et historisk og geografisk særtilfelle, ikke normaltilstanden", "Fordi den gir dårligere inntekt enn uformelt arbeid i mange land", "Fordi den er i ferd med å forsvinne også i Nord-Europa", "Fordi den ikke gir rom for den fleksibiliteten mange folk faktisk ønsker seg"],
      explanation: "Riktig er at den er et særtilfelle: uformelt og usikkert arbeid er normaltilstanden for en stor del av verdens arbeidende. At noen verdsetter fleksibilitet, er et funn hos Millar, men det er ikke grunnen til at målestokken er skjev.",
    },
    {
      question: "Hva er den mest effektive kildetriaden i langsvaret om at økonomi ikke kan forstås løsrevet?",
      options: ["Mauss for begrepet, Lien for den industrielle prøven, Millar for motprøven", "Mauss, Malinowski og Boas, siden alle tre behandler gavebytte", "Eriksen for holismen, Mauss for gaven og Evans-Pritchard for kveget hos Nuer", "Millar, Shah og Lien, siden alle tre er nyere studier"],
      explanation: "Riktig er triaden der tekstene gjør ulikt arbeid: begrepet, den vanskeligste prøven, og motprøven fra motsatt ende. Tre tekster om samme fenomen gir et svakere argument enn tre som dekker ulike posisjoner — det er nettopp koblingen mellom dem som løfter.",
    },
    {
      question: "Hva er hovedpoenget med å si at prekaritet er en livsform?",
      options: ["At den har en egen logikk folk innretter livene sine etter, ikke bare er fravær av trygghet", "At den varer livet ut og sjelden lar seg forlate når man først er i den", "At den preger hele lokalsamfunn og ikke bare dem som selv arbeider prekært i området", "At den gir en identitet og et fellesskap som erstatter yrkesstoltheten"],
      explanation: "Riktig er den egne logikken — rytme, relativ selvstendighet, relasjoner — som gjør at spørsmålet snus fra «hvorfor kommer de seg ikke ut?» til «hva gjør denne formen mulig å leve i?». Det handler ikke om varighet eller om erstatning for yrkesstolthet.",
    },
  ],
  'sosant1000-3-1': [
    {
      question: "Hva er avstamning (descent) som organiseringsprinsipp?",
      options: ["At en person tilhører en gruppe i kraft av hvem hun nedstammer fra", "At grupper knyttes sammen gjennom ekteskap mellom sine egne medlemmer", "At slektskap regnes fra den eldste levende slektningen og nedover i generasjonene", "At man tilhører den gruppen man vokser opp hos, uansett fødsel"],
      explanation: "Riktig er arvet gruppetilhørighet gjennom nedstamning. Å knytte grupper sammen gjennom ekteskap er allianse, det andre organiseringsprinsippet — å blande de to er den vanligste begrepsfeilen i dette stoffet.",
    },
    {
      question: "Hva er allianse i slektskapssammenheng?",
      options: ["Båndet mellom grupper som skapes gjennom ekteskap", "Den gruppen man tilhører i kraft av hvem man nedstammer fra", "En avtale om felles forsvar mellom to avstamningsgrupper", "Det nettverket av slektninger hver enkelt person har rundt seg"],
      explanation: "Riktig er ekteskapsbåndet mellom grupper. Gruppetilhørighet ved nedstamning er avstamning. Alliansen kan i praksis innebære felles forsvar, men det er en virkning av båndet og ikke det som definerer prinsippet.",
    },
    {
      question: "Hva betyr det at et samfunn er matrilineært?",
      options: ["At gruppetilhørighet og arv går gjennom mors linje", "At kvinner har den politiske og økonomiske makten i samfunnet", "At ektefeller flytter til kvinnens familie etter giftermål", "At kvinner eier jorda og bestemmer hvem som skal bruke den"],
      explanation: "Riktig er tilhørighet og arv gjennom mors linje. Å oversette matrilineær til kvinnestyre er den vanligste feilen: i mange matrilineære systemer er det morens bror som har den viktigste autoritetsrollen. Hvor paret bosetter seg, er et eget spørsmål.",
    },
    {
      question: "Hva viste Evans-Pritchards studie av Nuer om slektskap og politikk?",
      options: ["At patrilineære avstamningsgrupper fusjonerte og splittet seg etter konfliktens nivå", "At politisk makt var samlet hos en høvding som ble valgt blant de ulike slektsgruppene", "At slektskap og politikk var to helt atskilte felter, med hver sine egne institusjoner", "At ekteskapsallianser hadde erstattet avstamning som organiseringsprinsipp"],
      explanation: "Riktig er den segmentære mekanismen som ga orden uten sentralstat. Det fantes ingen høvding med samlet makt, og poenget er nettopp at slektskap og politikk ikke var atskilte felter — det er holismen i praksis.",
    },
    {
      question: "Hva gjorde overføringen av kveg ved ekteskapsinngåelse blant Nuer?",
      options: ["Den etablerte ekteskapet, fordelte forpliktelser mellom grupper og avgjorde barnas gruppetilhørighet", "Den kompenserte brudens slekt økonomisk for tapet av hennes arbeidskraft, og gjorde dermed opp forholdet", "Den ga brudgommen eiendomsrett over brudens fremtidige arbeid", "Den markerte offentlig for begge slektsgruppene at brudens slekt hadde langt høyere rang enn brudgommens"],
      explanation: "Riktig er at overføringen åpnet et varig forhold mellom to grupper og plasserte barna. Å lese den som kompensasjon eller kjøp er å legge en markedsmodell over et gavebytte: et kjøp avslutter et forhold, brudegaven åpner et.",
    },
    {
      question: "Hva er relatedness hos Carsten?",
      options: ["Slektskap som skapes over tid gjennom delt mat, delt ildsted og delt bosted", "Den graden av genetisk likhet to personer har med hverandre, uavhengig av hvordan de lever", "Det nettverket av slektninger en person kan mobilisere når hun har behov for hjelp", "Slektskap som følger av juridiske avgjørelser om foreldreansvar"],
      explanation: "Riktig er beslektethet som blir til gjennom felles liv. Begrepet handler ikke om genetisk likhet, og heller ikke om jussen — poenget er at slektskap vokser frem av hverdagens delte substans over tid.",
    },
    {
      question: "Hva viste Carstens studie fra Langkawi?",
      options: ["At mennesker som spiste sammen fra samme ildsted over tid, ble gradvis mer beslektede", "At biologisk slektskap ikke hadde noen betydning i den lokale forståelsen av slekt", "At adopsjon var den vanligste måten husholdninger ble dannet på", "At slektskapet ble bestemt av hvilken landsby man var født i"],
      explanation: "Riktig er at slektskap vokste gjennom delt mat og felles bosted. At biologi var uten betydning, er en overdrivelse av Carstens posisjon og en klassisk feiltilskrivning — hun viste at skillet biologisk og sosialt ikke lar seg trekke rent.",
    },
    {
      question: "Hva er kinning hos Howell?",
      options: ["Den aktive prosessen der et menneske gjøres til slekt", "Den juridiske overføringen av foreldreansvar ved adopsjon", "Den følelsen av tilhørighet som oppstår i en familie over tid", "Den delen av slektskapet som følger av felles bosted"],
      explanation: "Riktig er den aktive prosessen — navngiving, familiefortellinger, ritualer, leting etter likheter. Jussen er en forutsetning, ikke prosessen selv, og det som vokser frem av felles bosted over tid, er nærmere Carstens relatedness.",
    },
    {
      question: "Hva er hovedpoenget med Howells kinning-begrep?",
      options: ["At alt slektskap må gjøres, også det som tas for gitt", "At adoptivslektskap er en vellykket etterligning av biologisk slektskap", "At adopterte barn trenger kontakt med sitt opprinnelige hjemland", "At foreldre må arbeide hardere med adopterte barn enn med egne"],
      explanation: "Riktig er at alt slektskap må gjøres — adopsjonen gjør bare synlig et arbeid som ellers er usynlig fordi det tas for gitt. Å kalle det en etterligning snur poenget på hodet og gjør biologisk slektskap til målestokken.",
    },
    {
      question: "Hvorfor er incestforbudet et godt eksempel på at slektskap er både universelt og partikulært?",
      options: ["Fordi forbudet finnes overalt, men omfatter helt ulike slektninger", "Fordi det finnes i alle samfunn og gjelder de samme nære slektningene", "Fordi det bare finnes i samfunn med unilineær avstamning", "Fordi det er det eneste slektskapsforbudet som har biologisk begrunnelse"],
      explanation: "Riktig er at forbudet er universelt og innholdet lokalt: i noen systemer er fetteren på farssiden forbudt mens fetteren på morssiden er foretrukket ektefelle. Om slektskap fulgte av biologi, ville grensene falt likt overalt.",
    },
    {
      question: "Hva er forskjellen mellom unilineær og kognatisk avstamning?",
      options: ["Unilineær regner gjennom én linje, kognatisk gjennom begge", "Unilineær gjelder gruppetilhørighet, kognatisk gjelder arv av eiendom", "Unilineær finnes i småskalasamfunn, kognatisk i storskalasamfunn", "Unilineær følger fars linje, kognatisk følger mors linje"],
      explanation: "Riktig er én mot begge linjer. Patrilineær og matrilineær er de to unilineære formene — kognatisk er ikke det samme som matrilineær. Norge er kognatisk, og det er derfor «slekta» her ikke er en avgrenset gruppe med felles eiendom.",
    },
    {
      question: "Hvorfor gir unilineære systemer klart avgrensede grupper, mens kognatiske ikke gjør det?",
      options: ["Fordi en regel gjennom én linje deler befolkningen i enheter med entydige medlemmer", "Fordi unilineære samfunn har færre innbyggere enn kognatiske", "Fordi kognatiske systemer ikke har regler for hvem som er i slekt", "Fordi unilineære systemer bygger på felles eiendomsrett og kognatiske systemer ikke gjør det"],
      explanation: "Riktig er at én linje gir entydige medlemmer, slik at gruppen kan eie, kreve og handle samlet. Et kognatisk nettverk kan ikke det, fordi ingen to personer har helt samme slekt — men det har fullt ut regler for hvem som er i slekt.",
    },
    {
      question: "Hva er feil nummer 9 i registeret over typiske feil?",
      options: ["Å naturalisere det sosiale — å behandle slektskap eller kjønn som rent biologisk", "Å bruke bare én eller to pensumtekster i et langsvar", "Å overse begrepets distinksjoner, slik som skillet mellom avstamning og allianse i slektskap", "Å beskrive bare det ene leddet i en komparativ oppgave"],
      explanation: "Riktig er naturaliseringen, som er fagets kjernefeil fordi hele faget bygger på at det sosiale er sosialt. For få kilder er feil nummer 2, oversette distinksjoner er feil nummer 8, og ensidig komparasjon er feil nummer 11.",
    },
    {
      question: "Hva er den presise formen av påstanden om at slektskap er sosialt og ikke biologisk?",
      options: ["At skillet mellom biologisk og sosialt ikke lar seg trekke rent", "At biologiske forhold er uten betydning for hvem som regnes som slekt", "At alle slektskapsforhold i prinsippet kan velges fritt av den enkelte", "At genetisk forbindelse er en oppfinnelse gjort av samfunnsvitenskapen"],
      explanation: "Riktig er den presise formen om at skillet ikke lar seg trekke rent, fordi biologiske forhold alltid tolkes gjennom sosiale kategorier. Slagordformen om at biologi er irrelevant er lett å motbevise og er ikke fagets posisjon.",
    },
    {
      question: "Hva menes med delt substans i slektskapsforskningen?",
      options: ["Forestillingen om at de som deler noe materielt — blod, mat, hus — er beslektede", "Den mengden arvemateriale to nære slektninger faktisk har til felles med hverandre", "De eiendelene et hushold eier og forvalter i fellesskap", "Den felles historien og de minnene en familie deler"],
      explanation: "Riktig er forestillingen om materiell deling som grunnlag for beslektethet. Poenget er nettopp at dette ikke er en genetisk påstand: at man «deler blod» med slektninger, er en substansforestilling og ikke biologisk korrekt.",
    },
    {
      question: "Hva er en avstamningsgruppe?",
      options: ["En gruppe som regner seg som etterkommere av samme forfar eller formor og handler som enhet", "Alle de personene en enkelt person kan spore slektskap til gjennom begge sine foreldre og besteforeldre", "De medlemmene av en familie som bor og arbeider sammen til daglig", "Den gruppen man gifter seg inn i ved ekteskapsinngåelse"],
      explanation: "Riktig er gruppen som handler som enhet på grunnlag av felles nedstamning. Nettverket rundt hver enkelt person er kognatisk slektskap, gruppen som bor sammen er husholdet, og gruppen man gifter seg inn i, er alliansepartneren.",
    },
    {
      question: "Hvorfor skiller faget mellom hushold og familie?",
      options: ["Fordi de ofte ikke faller sammen — hushold kan romme folk som ikke er i slekt", "Fordi husholdet er en juridisk kategori og familien en følelsesmessig kategori", "Fordi husholdet bare finnes i samfunn med lønnsarbeid", "Fordi familien alltid er større enn husholdet i alle samfunn"],
      explanation: "Riktig er at de ofte ikke faller sammen: hushold kan romme ubeslektede, og slektninger i ulike hushold kan ha sterke forpliktelser. Arbeidsmigranter er husholdsmedlemmer som ikke er til stede — et eksempel på at kategoriene ikke dekker hverandre.",
    },
    {
      question: "Hva viste Govindrajans studie fra Kumaon-Himalaya?",
      options: ["At geita som ofres, samtidig er et familiemedlem, og at nærheten gjør ofringen virksom", "At dyreofring har mistet det meste av sin betydning i moderne indiske landsbysamfunn i dag", "At folk holder følelsesmessig avstand til dyr som skal ofres", "At ofringen er en økonomisk transaksjon uten religiøst innhold"],
      explanation: "Riktig er at nærheten er forutsetningen, ikke motsetningen. Å tro at folk må holde avstand til dyret, er nettopp den lesningen studien motsier — og ofringen er samtidig religiøs, økonomisk og slektskapsmessig.",
    },
    {
      question: "Hva forteller slektskapstermer i et samfunn oss?",
      options: ["Hvordan sosiale forpliktelser er fordelt, ikke hvor stor genetisk avstand det er", "Nøyaktig hvor nær genetisk slektning hver enkelt person er av den som snakker om dem", "Hvilken rang hver slektning har i et hierarki", "Hvem som bor i samme hushold som den som snakker"],
      explanation: "Riktig er at terminologien kartlegger forpliktelser: to personer i samme biologiske forhold til deg kan ha ulike navn og ulike roller. At norsk bruker «onkel» om både mors og fars bror, speiler et kognatisk system der de to sidene er likestilte.",
    },
    {
      question: "Hva er den beste skjerpingen av påstanden om at slektskap er både universelt og partikulært?",
      options: ["At slektskap er universelt som oppgave og partikulært i hvordan oppgaven løses", "At påstanden er triviell og derfor ikke egner seg som eksamensoppgave", "At det universelle gjelder småskalasamfunn og det partikulære storskalasamfunn", "At slektskap er universelt i biologisk forstand og partikulært i kulturell"],
      explanation: "Riktig er skillet mellom oppgave og løsning: alle samfunn må ordne tilhørighet og forpliktelse, men måtene varierer. Å dele påstanden i en biologisk og en kulturell halvdel gjenoppretter nettopp det skillet faget viser at ikke lar seg trekke rent.",
    },
    {
      question: "Hvorfor er ekteskap i mange samfunn først og fremst et forhold mellom grupper?",
      options: ["Fordi gods, forpliktelser og barnas gruppetilhørighet følger av avtalen", "Fordi de to som gifter seg, sjelden kjenner hverandre særlig godt på forhånd", "Fordi ekteskapet må godkjennes av en religiøs autoritet", "Fordi de to familiene alltid tilhører samme avstamningsgruppe"],
      explanation: "Riktig er at avtalen fordeler gods, forpliktelser og barnas plassering, og at forholdet består også når enkeltpersoner faller fra. Ektefellene gifter seg som regel nettopp ut av sin egen gruppe — det er poenget med alliansen.",
    },
    {
      question: "Hva er den viktigste innvendingen mot påstanden om at slektskap er sosialt?",
      options: ["At fødsel og genetisk forbindelse er råstoff de fleste systemer faktisk bruker", "At antropologer ennå ikke har undersøkt nok ulike samfunn til å kunne generalisere trygt", "At påstanden ikke lar seg prøve empirisk i det hele tatt", "At den bare gjelder for samfunn med skriftlige rettssystemer"],
      explanation: "Riktig er at biologiske forhold er råstoff som brukes, og ikke tilfeldig. Svaret er at råstoff ikke er årsak: forholdene tolkes gjennom sosiale kategorier, og hvilken vekt de gis, varierer og endrer seg — også i Norge i dag.",
    },
    {
      question: "Hva er problemet med å si at kjernefamilien er en universell form?",
      options: ["Det er empirisk galt — hvem som regnes som nær slekt varierer sterkt mellom samfunn", "Det er riktig, men uinteressant fordi det ikke sier noe om variasjon", "Det gjelder bare for de samfunnene der begge foreldrene arbeider utenfor hjemmet til daglig", "Det forutsetter at alle samfunn har juridisk regulert ekteskap"],
      explanation: "Riktig er at påstanden er empirisk gal. Det er nettopp derfor naturalisering er en faglig feil og ikke bare en politisk uenighet: variasjonen i hvem som lever sammen og hvem som forplikter hvem, er dokumentert og stor.",
    },
    {
      question: "Hvordan bør Carsten og Howell brukes sammen i et svar?",
      options: ["Carsten viser at slektskap kan vokse frem, Howell at det også kan gjøres målrettet", "Carsten viser at slektskap er biologisk, Howell at det er juridisk", "Carsten beskriver småskalasamfunn, mens Howell beskriver moderne storskalasamfunn i Europa", "Carsten er teoretiker og Howell leverer det etnografiske belegget"],
      explanation: "Riktig er at de gjør ulikt arbeid og peker samme vei fra hver sin kant, slik at koblingen sier noe sterkere enn hver tekst for seg. Begge er etnografer med hvert sitt feltarbeid — Langkawi og norske adoptivfamilier.",
    },
    {
      question: "Hva menes med at slektskapsgrupper ikke er biologiske enheter?",
      options: ["At det som betyr noe, er hvem gruppen regner med — ikke hvem som faktisk nedstammer fra hvem", "At medlemmene som regel ikke er i slekt med hverandre i det hele tatt", "At gruppene skifter medlemmer så ofte at selve slektskapet blir uten praktisk betydning for dem", "At gruppetilhørighet i praksis avgjøres av hvor man bor"],
      explanation: "Riktig er at gruppen bruker et avstamningsspråk, men er en sosial enhet: nedstamningen kan være uklar eller omskrevet, og det avgjørende er hvem som regnes med. Medlemmene er som regel i slekt — poenget er at slektskapet selv er sosialt fastsatt.",
    },
    {
      question: "Hvorfor er nye familieformer som adopsjon og stefamilier faglig interessante?",
      options: ["Fordi de gjør synlig det arbeidet som skaper slektskap, og som ellers tas for gitt", "Fordi de viser at de tradisjonelle slektskapssystemene er i ferd med å forsvinne helt", "Fordi de er de eneste formene der slektskap kan velges fritt", "Fordi de er nyere enn de formene antropologien opprinnelig studerte"],
      explanation: "Riktig er at de synliggjør arbeidet som alltid har vært der. De viser ikke at eldre systemer forsvinner, og valgfriheten er begrenset også her — kinning kan mislykkes, og det er nettopp derfor arbeidet er verdt å studere.",
    },
  ],
  'sosant1000-3-2': [
    {
      question: "Hva betegner biologisk kjønn (sex)?",
      options: ["De kroppslige forholdene som brukes til å dele mennesker inn i kjønnskategorier", "De forventningene og rollene et bestemt samfunn knytter til de to kjønnskategoriene", "Den kjønnsidentiteten en person selv opplever å ha og gir uttrykk for overfor andre", "Den arbeidsdelingen mellom kjønn som finnes i et samfunn"],
      explanation: "Riktig er de kroppslige forholdene, altså råstoffet. Forventninger, roller og arbeidsdeling hører til sosialt kjønn, og å bruke de to om hverandre er nettopp den flate definisjonen sensor ser etter i denne oppgavetypen.",
    },
    {
      question: "Hva betegner sosialt kjønn (gender)?",
      options: ["De forventningene, rollene og verdiene et samfunn knytter til kjønnskategorier", "De kroppslige trekkene som skiller kjønnene fra hverandre, som anatomi og hormoner", "Den formelle likestillingen mellom kjønnene i lovverket", "Forskjellen mellom hvordan menn og kvinner faktisk oppfører seg i dagliglivet sitt"],
      explanation: "Riktig er forventningene, rollene og verdiene — kjønn som samfunnsordning. Faktiske atferdsforskjeller er noe man kan observere, men de er ikke definisjonen: poenget er ordningen som frembringer og tolker dem.",
    },
    {
      question: "Hva betyr det at sosialt kjønn er konstruert?",
      options: ["At ordningen er laget og opprettholdt av mennesker og kunne vært annerledes", "At kjønnsforskjeller er innbilte og forsvinner så snart folk blir opplyst om dem", "At den enkelte fritt kan velge fra dag til dag hvilket kjønn hun vil fremstå som", "At kjønn er et begrep uten forbindelse til kroppslige forhold"],
      explanation: "Riktig er at ordningen er menneskeskapt og kunne vært annerledes — som det vises av at den er annerledes andre steder. Konstruert betyr ikke innbilt: virkningene er håndfaste, og man kan ikke tre ut av ordningen ved en beslutning.",
    },
    {
      question: "Hva argumenterte Mead for i sitt arbeid om kjønn?",
      options: ["At kjønnstemperament varierer på tvers av samfunn og ikke følger av biologi alene", "At kjønnsroller er de samme i alle samfunn når man ser bort fra rene overflatetrekk", "At biologiske forskjeller forklarer arbeidsdelingen mellom kjønnene", "At kjønn blir til gjennom gjentatte, normstyrte handlinger"],
      explanation: "Riktig er variasjonen i kjønnstemperament. Merk formuleringen: hun argumenterte, hun beviste ikke, og Samoa-materialet har vært omstridt siden Freemans kritikk. Tanken om gjentatte normstyrte handlinger er Butlers performativitet, et helt annet bidrag.",
    },
    {
      question: "Hva er den viktigste presiseringen om Meads arbeid i et eksamenssvar?",
      options: ["At hun argumenterte for variasjon, og at deler av materialet har vært omstridt", "At hennes materiale er blitt fullstendig avvist av all senere forskning på feltet", "At hun var den første som gjorde feltarbeid blant kvinner", "At hun arbeidet i Melanesia og ikke i Polynesia"],
      explanation: "Riktig er skillet mellom argument og bevis, sammen med ærlighetssetningen om at Samoa-materialet har vært omstridt siden Freemans kritikk. Materialet er ikke fullstendig avvist — å si det ville vært like upresist som å overdrive beviskraften.",
    },
    {
      question: "Hvorfor er det viktig å vite at de Beauvoir og Butler er filosofer?",
      options: ["Fordi deres bidrag er argumenter og ikke etnografiske funn, og ikke kan fylle etnografikravet", "Fordi filosofiske argumenter ikke har noen plass i et antropologisk svar i det hele tatt, ifølge pensum", "Fordi de skrev om europeiske forhold og ikke om andre samfunn", "Fordi de bygde på materiale som senere er blitt tilbakevist"],
      explanation: "Riktig er at bidragene er argumenter og ikke etnografi. De er fullt brukbare som ramme og begrepsapparat, med pensumetnografien som belegg ved siden av — men et svar som hviler på dem alene, mangler etnografisk forankring.",
    },
    {
      question: "Hva betyr performativitet hos Butler?",
      options: ["At kjønn blir til gjennom gjentatte, normstyrte handlinger", "At kjønn er en rolle en allerede ferdig person velger å spille", "At kjønn må bekreftes offentlig av andre for å være gyldig", "At kjønnsuttrykk varierer med hvilken situasjon man befinner seg i"],
      explanation: "Riktig er gjentakelsen av normstyrte handlinger som frembringer kjønnet. Rollespill-lesningen er den vanligste feiltolkningen og snur poenget: det finnes ingen ferdig person forut for handlingene som velger blant roller.",
    },
    {
      question: "Hva er kjønnsarbeidsdeling?",
      options: ["Fordelingen av arbeidsoppgaver etter kjønn i hushold, produksjon og offentlighet", "Den lønnsforskjellen som finnes mellom kvinner og menn som arbeider i det samme yrket", "Den formelle inndelingen av yrker i kvinneyrker og mannsyrker", "Den delen av husarbeidet som utføres av kvinner i et samfunn"],
      explanation: "Riktig er fordelingen av oppgaver etter kjønn. Lønnsforskjeller og formelle yrkeskategorier er trekk ved bestemte samfunn, ikke definisjonen — og delingen omfatter mer enn husarbeid.",
    },
    {
      question: "Hva er den viktigste presiseringen om kjønnsarbeidsdeling i en drøfting?",
      options: ["At arbeidsdeling ikke automatisk er det samme som rangering", "At arbeidsdelingen er lik i alle samfunn på de viktigste punktene", "At den alltid innebærer at kvinners arbeid verdsettes lavere", "At den forsvinner når et samfunn får en pengeøkonomi"],
      explanation: "Riktig er at deling ikke er det samme som rangering: to oppgaver kan være atskilt uten å være rangert. At de ofte er rangert, er et empirisk funn som må vises — å forutsette det er å bygge konklusjonen inn i premisset.",
    },
    {
      question: "Hvordan henger kjønn og slektskap sammen?",
      options: ["Gjennom avstamningsregler, ekteskapsregler, arveregler og arbeidsdeling", "Ved at slektskap alltid regnes gjennom mors linje i matrilineære samfunn", "Ved at kjønn bestemmer hvilken familie man fødes inn i", "Ved at slektskapsbegrepet opprinnelig ble utviklet for å forklare kjønnsroller"],
      explanation: "Riktig er de fire mekanismene: hvem som bærer tilhørighet videre, hvem som flytter, hvem som arver, og hvem som gjør hva. Det er nettopp de navngitte mekanismene som gjør koblingen til en analyse og ikke en formaning.",
    },
    {
      question: "Hva viste Shahs materiale om kjønn og ulikhet innenfor geriljabevegelsen?",
      options: ["At kjønnsulikheten besto også i en bevegelse som erklærte seg som frigjøringsbevegelse", "At bevegelsen hadde oppnådd full likestilling mellom kjønnene internt i organisasjonen", "At kvinner var utestengt fra å delta i bevegelsen i det hele tatt", "At kjønn var uten betydning fordi kastetilhørighet betydde mer"],
      explanation: "Riktig er at ulikheten besto, samtidig som lederskapet i stor grad var rekruttert fra høyere kaster. Poenget er at aksene virker sammen: kjønn og kaste kan ikke settes opp mot hverandre som om bare den ene betydde noe.",
    },
    {
      question: "Hvorfor er feltarbeiderens kjønn et vilkår for kunnskapen?",
      options: ["Fordi det avgjør hvilke rom hun slipper inn i og hvem som snakker fritt med henne", "Fordi kvinnelige forskere får mer pålitelig informasjon enn mannlige forskere gjør", "Fordi kjønn er en feilkilde som må korrigeres for i analysen", "Fordi lokale normer krever at forskeren oppgir sitt kjønn på forhånd"],
      explanation: "Riktig er tilgangen og tilliten: forskeren får se noe og ikke noe annet. Ordet feilkilde er misvisende, fordi det forutsetter et perspektivløst utgangspunkt å måle avvik fra — og ingen posisjon gir i seg selv mer pålitelig informasjon.",
    },
    {
      question: "Hva er poenget som gir uttelling når man skriver om forskerens posisjon i felt?",
      options: ["At det å gjøre rede for ståstedet er en styrke ved metoden, ikke en unnskyldning", "At posisjonen bør minimeres slik at forskeren blir mest mulig nøytral", "At kunnskapen blir subjektiv og derfor alltid må suppleres med kvantitative data", "At en forsker fra samme samfunn ville fått bedre materiale"],
      explanation: "Riktig er at åpenheten om ståstedet er en styrke: en etnograf uten posisjon finnes ikke. Nøytralitetsidealet forutsetter noe faget ikke går med på, og en forsker fra samme samfunn ville hatt et annet ståsted, ikke intet ståsted.",
    },
    {
      question: "Hva menes med at sosialt kjønn er relasjonelt?",
      options: ["At det mannlige defineres i forhold til det kvinnelige og omvendt", "At kjønn bare kommer til uttrykk i møter mellom mennesker", "At kjønn avhenger av hvilken slektskapsrelasjon man står i", "At kjønnsforskjeller er størst i de samfunnene som har de tetteste relasjonene"],
      explanation: "Riktig er at kategoriene defineres i forhold til hverandre — og at forestillinger om maskulinitet derfor er like mye et studieobjekt som forestillinger om femininitet. Kjønn er ikke et tema som bare handler om kvinner.",
    },
    {
      question: "Hva er feil nummer 9 i registeret over typiske feil?",
      options: ["Å naturalisere det sosiale — å behandle kjønn eller slektskap som rent biologisk", "Å bruke bare én eller to pensumtekster i et langsvar", "Å bruke flate definisjoner som ikke treffer pensumforfatterens egen bruk av begrepet", "Å beskrive bare det ene leddet i en komparativ oppgave"],
      explanation: "Riktig er naturaliseringen. For få kilder er feil nummer 2, flate definisjoner er feil nummer 6, og ensidig komparasjon er feil nummer 11 — fire ulike koder i det samme registeret på tolv.",
    },
    {
      question: "Hvorfor er det et problem å bygge et kjønnssvar utelukkende på slagordet «kjønn er sosialt konstruert»?",
      options: ["Fordi et svar uten etnografisk eksempel er på feil nummer 1, den hyppigste feilen i faget", "Fordi selve formuleringen er faglig omstridt og ikke lenger brukes i pensumlitteraturen", "Fordi den forutsetter at biologiske forhold er uten betydning", "Fordi den bare gjelder for samfunn med skriftlig lovgivning"],
      explanation: "Riktig er kravet om etnografisk forankring. Formuleringen er ikke omstridt i faget, men den er et sammendrag av et argument — og et sammendrag uten belegg er nettopp det sensor trekker for.",
    },
    {
      question: "Hva er det beste spørsmålet å stille til et materiale om kjønnsarbeidsdeling?",
      options: ["Hvilket arbeid som teller som verdifullt, og hvem som kontrollerer resultatet", "Hvor mange timer hvert kjønn arbeider i gjennomsnitt per dag", "Om arbeidsdelingen er lik den vi kjenner fra Norge i dag", "Om arbeidsdelingen mellom kjønnene er i ferd med å bli mer likestilt over tid"],
      explanation: "Riktig er spørsmålet om verdsetting og kontroll, fordi det skiller deling fra rangering. Timetelling gir tall uten tolkning, og å måle mot norske forhold er nettopp den etnosentrismen faget skal lære leseren å få øye på.",
    },
    {
      question: "Hvordan kan kjønnsstoffet kobles til slektskapsstoffet i et svar?",
      options: ["Ved at begge flytter spørsmålet fra hva noe er, til hvordan det blir til", "Ved at begge viser at biologiske forhold er helt uten betydning for utfallet", "Ved at slektskap er sosialt mens kjønn er biologisk", "Ved at begge er temaer som bare finnes i småskalasamfunn"],
      explanation: "Riktig er den felles bevegelsen fra tilstand til prosess: Howells kinning gjør det for slektskap, og performativitet og kjønnsroller gjør det for kjønn. Ingen av delene sier at biologi er uten betydning — det er slagordversjonen faget nettopp presiserer seg bort fra.",
    },
  ],
  'sosant1000-3-3': [
    {
      question: "Hva er vertikal differensiering?",
      options: ["Inndeling som rangerer, med ulik tilgang til makt, ressurser og anseelse", "Inndeling som skiller mellom grupper uten å plassere noen av dem over hverandre", "Inndeling etter hvor i landet folk bor og hvor de har arbeidet sitt til daglig", "Inndeling etter hvilken generasjon folk tilhører"],
      explanation: "Riktig er inndelingen som rangerer. Inndeling uten rangering er horisontal differensiering, og å blande de to er den enkeltfeilen dette stoffet tester direkte. Geografi og generasjon kan være grunnlag for begge former.",
    },
    {
      question: "Hva er horisontal differensiering?",
      options: ["Inndeling som skiller uten å rangere, som yrkesspesialisering", "Inndeling som rangerer, men bare innenfor ett og samme samfunnslag", "Inndeling etter hvor lenge en person har bodd på et sted", "Inndeling som ikke har praktiske konsekvenser for dem som deles inn"],
      explanation: "Riktig er inndeling uten rangering. Merk at horisontale forskjeller har konsekvenser — de fordeler oppgaver og identiteter — men de plasserer ikke noen over andre. Rangering innenfor et lag er fortsatt vertikal.",
    },
    {
      question: "Hvordan kan en horisontal forskjell bli vertikal?",
      options: ["Når ressurser, anseelse eller politisk makt legger seg skjevt mellom kategoriene", "Når kategoriene blir formalisert i lovverk og i offentlige registre, slik at de blir synlige", "Når antallet kategorier øker slik at systemet blir mer komplisert", "Når medlemmene i en kategori begynner å gifte seg innenfor sin egen gruppe, generasjon etter generasjon"],
      explanation: "Riktig er den skjeve fordelingen av goder. Yrkesspesialisering er horisontal i prinsippet og vertikal så snart noen yrker lønnes og respekteres høyere. Endogami opprettholder grenser, men skaper ikke rangeringen i seg selv.",
    },
    {
      question: "Hva kjennetegner kaste som differensieringsform?",
      options: ["Posisjonen er tilskrevet ved fødselen og begrunnet i et rituelt register om renhet", "Posisjonen følger av inntekt og eiendom, og den kan endres gjennom personens egen innsats", "Posisjonen gjelder bare i religiøse sammenhenger, og ikke i arbeidslivet eller hverdagen", "Posisjonen tildeles av myndighetene og kan søkes endret administrativt"],
      explanation: "Riktig er den tilskrevne posisjonen med rituell begrunnelse. Posisjon som følger av inntekt og kan endres, beskriver klasse. Kastesystemet virker på tvers av livsområder, og statlige kategorier som «Scheduled Tribes» er noe annet enn kastetilhørighet.",
    },
    {
      question: "Hvilken mekanisme holder kastegrensene på plass over generasjoner?",
      options: ["Endogami — kravet om å gifte seg innenfor sin egen gruppe", "Eksogami — kravet om å gifte seg utenfor sin egen gruppe hver gang", "Arv gjennom mors linje i stedet for fars", "Statlige kvoteordninger i utdanning og offentlige stillinger"],
      explanation: "Riktig er endogami, som hindrer at gruppene blandes over generasjoner. Eksogami er det motsatte kravet og virker samtidig på et annet nivå — man kan være pålagt å gifte seg utenfor sin avstamningsgruppe, men innenfor sin kaste.",
    },
    {
      question: "Hva er strukturell rasisme?",
      options: ["Ulikhet innebygd i institusjoner og praksiser, som virker uten at noen har rasistiske holdninger", "Fordommer og nedsettende holdninger som enkeltmennesker retter mot bestemte grupper i et samfunn i dag", "Åpen diskriminering som er uttrykkelig nedfelt i et lands lovverk og håndheves av myndighetene der", "Den økonomiske ulikheten som følger av ulik utdanningsbakgrunn"],
      explanation: "Riktig er den innebygde ulikheten som virker uavhengig av holdninger. Fordommer er individuelle holdninger — det halve svaret, og det halve som ikke er det oppgaven spør om. Lovfestet diskriminering er én mulig form, men begrepet dekker langt mer.",
    },
    {
      question: "Hvorfor trengs begrepet strukturell rasisme ved siden av holdningsbegrepet?",
      options: ["Fordi det forklarer hvorfor ulikhet består selv når holdningene endrer seg", "Fordi holdninger er vanskelige å måle i en befolkning", "Fordi individuelle fordommer er sjeldne i moderne samfunn", "Fordi strukturer alltid er viktigere enn holdninger i samfunnsanalyse"],
      explanation: "Riktig er stabiliteten i mønstrene: strukturer virker uavhengig av hva den enkelte mener. Begge begreper trengs — holdninger uten strukturer forklarer ikke stabiliteten, og strukturer uten holdninger forklarer ikke hvordan reglene ble slik eller hvorfor de forsvares.",
    },
    {
      question: "Hvorfor behandler antropologien rase som en sosial og ikke en biologisk kategori?",
      options: ["Fordi den genetiske variasjonen ikke følger de grensene raseinndelinger trekker", "Fordi kategorien er urettferdig og derfor bør avskaffes", "Fordi biologiske forskjeller mellom mennesker ikke finnes", "Fordi kategorien ikke lenger har praktiske konsekvenser i moderne, opplyste samfunn"],
      explanation: "Riktig er at variasjonen er større innenfor enn mellom de gruppene som er blitt kalt raser, og at de trekkene som brukes til å dele, varierer uavhengig av hverandre. Begrunnelsen er empirisk, ikke moralsk — og kategorien har svært håndfaste konsekvenser.",
    },
    {
      question: "Hva er strukturell vold?",
      options: ["Vold innebygd i sosiale og økonomiske strukturer, uten identifiserbar gjerningsperson", "Vold utøvd av statlige myndigheter mot egen befolkning", "Vold som er organisert av grupper i stedet for av enkeltpersoner som handler på egen hånd", "Vold som rettes mot institusjoner i stedet for mot mennesker"],
      explanation: "Riktig er den innebygde volden uten gjerningsperson: virkningene er de samme som ved direkte vold, men årsakskjeden er en annen. Statlig vold og organisert vold har identifiserbare utøvere og er dermed direkte vold.",
    },
    {
      question: "Hvem formulerte begrepet strukturell vold opprinnelig?",
      options: ["Johan Galtung, i 1969", "Paul Farmer, gjennom arbeidet på Haiti", "Alpa Shah, i «Nightmarch»", "Thomas Hylland Eriksen, i «Små steder, store spørsmål»"],
      explanation: "Riktig er Galtung i 1969. Farmer gir begrepet etnografisk innhold gjennom arbeidet på Haiti — å skrive at han fant det opp, er en feiltilskrivning som er lett å unngå, og presisjonen er verdt et pluss.",
    },
    {
      question: "Hva viste Farmers arbeid på Haiti?",
      options: ["At fordelingen av sykdom og behandling følger et mønster lagt av historie og økonomi", "At helsetjenestene i fattige land er dårligere organisert enn de er i rike land, rent generelt", "At sykdom rammer tilfeldig og uten sammenheng med sosial posisjon", "At internasjonal bistand er hovedårsaken til ulikhet i helse"],
      explanation: "Riktig er mønsteret lagt av historie, eiendomsforhold og global økonomi. Poenget er ikke organisering eller bistand i seg selv, men at ulikheten er strukturelt frembrakt — og dermed at ansvaret ligger i ordninger, ikke i enkeltbeslutninger.",
    },
    {
      question: "Hva er marginalisering?",
      options: ["Prosessen der grupper systematisk settes i utkanten av institusjoner og beslutninger", "Den tilstanden det er å ha vesentlig lavere inntekt enn gjennomsnittet i sitt eget samfunn", "Den bevisste utestengelsen av en gruppe fra et lands territorium", "Den geografiske avstanden mellom en gruppe og landets sentrum"],
      explanation: "Riktig er prosessen: ordet peker på hva som er gjort, av hvem, over tid. «De er marginaliserte» er en beskrivelse; «de er blitt marginalisert gjennom lovgivning og utbygging» er en forklaring, og forskjellen er det som gjør begrepet analytisk.",
    },
    {
      question: "Hva menes med at differensieringsaksene virker sammen?",
      options: ["At én akse kan endre hva en annen betyr, slik at virkningen ikke er summen av dem", "At alle former for ulikhet i praksis kan føres tilbake til økonomiske forhold til slutt", "At de som står lavt på én akse, alltid står lavt på de andre også", "At samfunn med mange akser har mer ulikhet enn samfunn med få"],
      explanation: "Riktig er at aksene modifiserer hverandre og ikke bare legges sammen. At de alltid trekker samme vei, er nettopp det som ikke stemmer — høy alder kan gi anseelse i en gruppe som ellers står lavt, og å vise et slikt tilfelle er sterkere enn å vise opphopning.",
    },
    {
      question: "Hva viser Shahs materiale om kaste og klasse i Jharkhand?",
      options: ["At de ikke faller sammen, men forsterker hverandre gjennom land, gjeld og statlige kategorier", "At kaste har mistet all sin betydning og er blitt erstattet av rene klasseforskjeller i India", "At klasseforskjeller er ubetydelige der kastesystemet er sterkt", "At geriljabevegelsen hadde opphevet begge former for ulikhet internt"],
      explanation: "Riktig er at de er atskilte, men forsterker hverandre. Lederskapet i bevegelsen var tvert imot i stor grad rekruttert fra høyere kaster, og kjønnsulikheten besto internt — noe av det som gjør studien til mer enn en heltefortelling.",
    },
    {
      question: "Hvorfor er alder en lærerik differensieringsakse?",
      options: ["Fordi den er den eneste tilskrevne statusen alle passerer gjennom", "Fordi den er den eneste aksen som ikke gir ulikhet i noe kjent samfunn", "Fordi den bare finnes i samfunn uten skriftlig lovgivning", "Fordi den kan endres av den enkelte gjennom egen innsats"],
      explanation: "Riktig er at ingen forblir ung: aldersulikhet rammer alle, men bare i en periode, og det gjør den til noe annet enn kaste- eller kjønnsulikhet. Alder er tilskrevet nettopp fordi den ikke kan endres ved innsats.",
    },
    {
      question: "Hva er aldersklasser (age sets)?",
      options: ["Grupper som gjennomgår livets overganger samlet og beholder tilhørigheten gjennom livet", "Inndelingen av befolkningen i barn, voksne og eldre i statistikk", "Skoleklasser og andre grupper som dannes etter fødselsår i de moderne skolesystemene i dag", "De aldersgrensene som avgjør når man får juridiske rettigheter"],
      explanation: "Riktig er grupper som gjennomgår overgangene samlet og forblir knyttet til hverandre. Evans-Pritchard beskrev dette blant Nuer på 1930-tallet. Statistiske og juridiske aldersinndelinger skaper ikke slike varige grupper.",
    },
    {
      question: "Hva er poenget med å skille mellom Adivasi og «Scheduled Tribes»?",
      options: ["Det første er folkegruppenes egen betegnelse, det andre er statens administrative kategori", "Det første er en religiøs kategori, mens det andre er en etnisk kategori i indisk lovgivning", "Det første brukes i India, det andre internasjonalt", "Det første omfatter flere grupper enn det andre gjør"],
      explanation: "Riktig er skillet mellom folkegruppenes egen betegnelse og statens kategori, som har røtter i kolonial administrasjon og gir rettslige virkninger. Skillet er faglig og ikke bare språklig: statskategorier former hva folk kan kreve og hvordan de telles.",
    },
    {
      question: "Hva er sosial mobilitet?",
      options: ["Bevegelse mellom posisjoner i et rangert system, i et liv eller mellom generasjoner", "Flytting mellom steder for å finne arbeid og bedre levekår for seg selv og sin familie", "Endringen i et samfunns samlede ulikhet over tid", "Muligheten til å skifte yrke innenfor samme lønnsnivå"],
      explanation: "Riktig er bevegelse mellom rangerte posisjoner. Geografisk flytting er migrasjon, som er noe annet, og endring i samlet ulikhet sier ikke noe om enkeltmenneskers bevegelse mellom posisjoner.",
    },
    {
      question: "Hva gjør et hierarki stabilt, ifølge kapitlet?",
      options: ["At rangeringen oppleves som riktig eller selvsagt av mange, også av dem som står nederst", "At de øverste kontrollerer voldsmidlene i samfunnet", "At alle posisjoner er formelt regulert i lov", "At mobiliteten mellom posisjonene er høy nok til å dempe misnøyen blant dem som står nederst"],
      explanation: "Riktig er begrunnelsenes rolle: hierarkier holdes ikke bare oppe av tvang, men av at de blir gjort selvsagte. Faget legger samtidig vekt på at hierarkier alltid er omstridte innenfra, og at motfortellinger og unndragelse finnes selv der ordningen ser urokkelig ut.",
    },
    {
      question: "Hva er den vanligste fremstillingsfeilen når marginaliserte grupper beskrives?",
      options: ["Å beskrive dem utelukkende gjennom det de mangler", "Å bruke deres egne betegnelser i stedet for statens kategorier", "Å nevne den koloniale historien som ligger bak deres posisjon", "Å sammenligne deres situasjon med forhold i andre land"],
      explanation: "Riktig er mangelbeskrivelsen, som fjerner nettopp det etnografien har å bidra med: politisk handling, egne strategier og intern uenighet. Å bruke folks egne betegnelser og å nevne kolonial historie er derimot begge deler faglig ønskelig.",
    },
  ],
  'sosant1000-4-1': [
    {
      question: "Hvem formulerte de tre fasene i overgangsritualer, og når?",
      options: ["Arnold van Gennep, i 1909", "Victor Turner, i 1969", "Émile Durkheim, i 1912", "Mary Douglas, i 1966"],
      explanation: "Riktig er van Gennep i 1909. Turner utdypet liminalitetsfasen og la til communitas over femti år senere — å slå dem sammen er den vanligste feiltilskrivningen i dette stoffet. Durkheim og Douglas arbeidet med religion og klassifikasjon, ikke med fasesekvensen.",
    },
    {
      question: "Hva er de tre fasene i et overgangsritual, i riktig rekkefølge?",
      options: ["Separasjon, liminalitet, reintegrasjon", "Separasjon, communitas, reintegrasjon", "Innvielse, prøvelse, opptak", "Liminalitet, separasjon, reintegrasjon"],
      explanation: "Riktig rekkefølge er separasjon, liminalitet, reintegrasjon. Communitas er ikke en fase, men det fellesskapet som oppstår i den midterste fasen — en forveksling som er lett å gjøre og lett å unngå.",
    },
    {
      question: "Hva gjør separasjonsfasen sosialt?",
      options: ["Den gjør bruddet med den gamle posisjonen synlig og offentlig", "Den forbereder personen mentalt på det som skal komme", "Den fjerner de praktiske hindringene for den nye posisjonen personen skal inn i", "Den samler dem som skal gjennomgå ritualet på samme sted"],
      explanation: "Riktig er offentliggjøringen av bruddet: alle vet at personen ikke lenger er det hun var. Mental forberedelse og samling kan forekomme, men det er offentligheten som gjør endringen virkelig for andre enn den det gjelder.",
    },
    {
      question: "Hva kjennetegner liminalfasen?",
      options: ["Personen er verken det hun var eller det hun skal bli, og vanlige regler er satt ut av kraft", "Personen har fått sin nye posisjon, men er ennå ikke godtatt av alle", "Personen gjennomgår prøvelser som til slutt avgjør om overgangen skal fullføres eller ikke", "Personen er skilt fra samfunnet fordi hun regnes som uren og farlig"],
      explanation: "Riktig er tilstanden mellom posisjoner med opphevede regler. Prøvelser forekommer ofte, men de er ikke en utvelgelse, og selv om liminalpersonen kan regnes som farlig, er det en følge av den uklare plasseringen og ikke fasens definisjon.",
    },
    {
      question: "Hva er den vanligste presisjonsfeilen når liminalitet forklares?",
      options: ["Å beskrive den som kaos eller frihet i stedet for regulert oppheving av orden", "Å plassere den som første fase i stedet for andre", "Å knytte den til initiasjon i stedet for til alle slags overganger i livsløpet", "Å beskrive den som en kort fase når den ofte varer lenge"],
      explanation: "Riktig er kaos-lesningen: ordenen er opphevet på en regulert måte, og reglene i terskelfasen er ofte strengere enn de vanlige. Fasens plassering og varighet er sjelden problemet — men innholdet blir det ofte.",
    },
    {
      question: "Hva er communitas?",
      options: ["Den intense, likestilte fellesskapsfølelsen mellom mennesker i liminalfasen", "Det lokalsamfunnet som samles for å bevitne at et overgangsritual blir gjennomført", "Den gruppen som gjennomgår initiasjonen sammen og forblir knyttet gjennom livet", "Den fellesskapsfølelsen som oppstår når ritualet er fullført og alle feirer"],
      explanation: "Riktig er fellesskapet uten rang i terskelfasen. Gruppen som forblir knyttet gjennom livet, er en aldersklasse, og feiringen etterpå hører til reintegrasjonen — communitas oppstår nettopp mens posisjonene er opphevet.",
    },
    {
      question: "Hvorfor oppstår communitas ifølge Turner?",
      options: ["Fordi alt som til vanlig rangerer deltakerne, er tatt bort", "Fordi deltakerne gjennomgår noe vanskelig sammen og derfor blir venner", "Fordi ritualets ledere oppfordrer til samhold mellom deltakerne", "Fordi deltakerne er like gamle og har samme bakgrunn fra før"],
      explanation: "Riktig er opphevingen av rang: fellesskapet er en mekanisme, ikke en stemning. Å forklare det med vennskap eller felles bakgrunn gjør det til en følelse, og da forsvinner analysen — poenget er hva som må være borte for at båndet skal oppstå.",
    },
    {
      question: "Hva er forholdet mellom struktur og antistruktur hos Turner?",
      options: ["De trenger hverandre: strukturen får legitimitet og fornyelse gjennom antistrukturen", "Antistrukturen er et sammenbrudd i den vanlige ordenen", "Antistrukturen erstatter strukturen i de samfunnene som mangler sentralisert makt", "Strukturen oppstår av antistrukturen over tid, ikke omvendt"],
      explanation: "Riktig er at de trenger hverandre. Antistrukturen er ikke et sammenbrudd — den er innebygd, planlagt og har sin faste plass i ritualer og festperioder. Det er nettopp derfor den kan leses både som fornyende og som en sikkerhetsventil.",
    },
    {
      question: "Hva viste Turners studie blant Ndembu?",
      options: ["At terskelfasen opphever den vanlige strukturen og frembringer communitas", "At de tre fasene i overgangsritualer finnes i alle samfunn", "At ritualer først og fremst opprettholder samfunnets moralske orden over tid", "At urenhet er det som ikke passer inn i klassifikasjonssystemet"],
      explanation: "Riktig er opphevingen av struktur og communitas. De tre fasenes universalitet er van Genneps komparative funn, ritualets moralske funksjon peker mot Durkheim, og urenhet som anomali er Douglas' analyse.",
    },
    {
      question: "Gjorde van Gennep feltarbeid?",
      options: ["Nei, «Les rites de passage» er en sammenlignende syntese av andres materiale", "Ja, blant folk i Nord-Afrika på begynnelsen av 1900-tallet", "Ja, men bare kortvarig, og materialet ble i tillegg supplert med andres opptegnelser", "Nei, han bygde utelukkende på skriftlige kilder fra antikken"],
      explanation: "Riktig er at han syntetiserte andres etnografi uten selv å være i felt — akkurat som Mauss. Materialet var i stor grad samlet inn i kolonitiden av forskere, misjonærer og administratorer, ikke fra antikke kilder.",
    },
    {
      question: "Hva gjør reintegrasjonsfasen?",
      options: ["Den gjør den nye posisjonen kjent og bindende for alle andre", "Den gir personen tid til å venne seg til den nye rollen", "Den markerer at prøvelsene er bestått og godkjent", "Den avslutter fellesskapet mellom dem som gjennomgikk ritualet"],
      explanation: "Riktig er at posisjonen gjøres offentlig og bindende: det er ikke nok at personen selv har endret seg, samfunnet må ha registrert det. Fellesskapet fra terskelfasen kan tvert imot vare livet ut, slik aldersklasser gjør.",
    },
    {
      question: "Hvorfor må en statusendring markeres offentlig?",
      options: ["Fordi en sosial endring må være kjent av andre for å gjelde", "Fordi ritualet ellers ikke får religiøs gyldighet", "Fordi personen selv trenger en tydelig avslutning på den gamle fasen", "Fordi endringen ellers kan reverseres av personen selv"],
      explanation: "Riktig er kravet om at andre må vite: to som bestemmer seg for å være gift uten at noen vet det, er ikke gift i sosial forstand. Vitnene er ikke pynt, men selve mekanismen — slik gjestene i potlatchen var vitner til krav på titler.",
    },
    {
      question: "Hva menes med symbolsk død i liminalfasen?",
      options: ["At personen behandles som død — skjult, ikke tiltalt, ikke regnet med", "At personen utsettes for prøvelser som er direkte livsfarlige under selve ritualet", "At den gamle posisjonen formelt oppheves ved en erklæring", "At personen får et nytt navn og legger fra seg det gamle"],
      explanation: "Riktig er behandlingen som død, ofte etterfulgt av en gjenfødelse ved reintegrasjonen. Formen løser et problem: den gamle posisjonen må virkelig opphøre for at den nye skal gjelde, og døden er det sterkeste bildet på et fullstendig opphør.",
    },
    {
      question: "Hva er rituell inversjon?",
      options: ["At vanlige regler snus på hodet i en avgrenset og planlagt periode", "At ritualet utføres i motsatt rekkefølge av det vanlige", "At de som til vanlig har makt, mister den permanent etter ritualet", "At deltakerne bytter roller med hverandre underveis i ritualet"],
      explanation: "Riktig er den planlagte omsnuingen av vanlige regler. Poenget er nettopp at inversjonen ikke er opprør: den er tidsavgrenset, ofte ledet av dem som til vanlig har makten, og ordenen er som regel intakt etterpå.",
    },
    {
      question: "Hvordan henger liminalitet sammen med Douglas' anomalibegrep?",
      options: ["Liminalpersonen er en anomali i tid — hun passer ikke inn i klassifikasjonen", "Begge begreper beskriver hva som skjer når et samfunns orden bryter sammen", "Douglas utviklet anomalibegrepet på grunnlag av Turners liminalitetsanalyse", "Anomalier oppstår bare i ritualer, mens liminalitet også finnes ellers"],
      explanation: "Riktig er anomalien overført til tid: derfor er liminalpersonen omgitt av forbud og av respekt på én gang. Ingen av begrepene handler om sammenbrudd, og de er utviklet uavhengig — Douglas i 1966, Turner i 1969.",
    },
    {
      question: "Hva er hovedinnvendingen mot å bruke liminalitetsbegrepet om migranter i ventetid?",
      options: ["At det ikke finnes noen garantert tredje fase, slik det gjør i et ritual", "At migrasjon ikke er en overgang mellom sosiale posisjoner", "At begrepet er utviklet for religiøse sammenhenger og ikke passer på politiske", "At migranter ikke opplever communitas med hverandre"],
      explanation: "Riktig er den manglende reintegrasjonen: i ritualet er den planlagt og kommer, i ventetiden kan den utebli i årevis. De tette båndene mellom folk i samme situasjon ligner tvert imot communitas, og begrepet er ikke begrenset til religion.",
    },
    {
      question: "Hva er skillet mellom det liminale og det liminoide hos Turner?",
      options: ["Det liminale hører til obligatoriske ritualer, det liminoide til frivillige fritidserfaringer", "Det liminale gjelder enkeltpersoner, mens det liminoide gjelder hele samfunn i endring", "Det liminale er kortvarig, det liminoide varer over lengre tid", "Det liminale finnes i småskalasamfunn, det liminoide i alle samfunn"],
      explanation: "Riktig er skillet mellom obligatorisk og frivillig, der det liminoide sjelden fører til noen ny sosial posisjon. Det er Turners eget svar på utvidelsesproblemet: han laget et nytt ord i stedet for å strekke det gamle.",
    },
    {
      question: "Hva taler mot å beskrive ungdomstiden som liminalitet?",
      options: ["At ungdomstiden er en egen orden med egne hierarkier, ikke opphevet orden", "At ungdomstiden ikke markeres med noe ritual i moderne samfunn", "At ungdom ikke opplever seg selv som å være mellom to sosiale posisjoner", "At ungdomstiden er for lang til å kunne kalles en fase"],
      explanation: "Riktig er at ungdomstiden har egne posisjoner og rangeringer — der forsvinner nettopp det som gjorde communitas mulig. Varigheten er interessant som komparativt poeng, men det er innholdet i tilstanden som avgjør spørsmålet.",
    },
    {
      question: "Hva er et overgangsritual?",
      options: ["Et ritual som fører et menneske fra én sosial posisjon til en annen", "Et ritual som markerer overgangen mellom to årstider eller sesonger", "Et ritual der en gruppe tar opp nye medlemmer fra utsiden", "Et ritual som utføres når noen bryter samfunnets regler"],
      explanation: "Riktig er overgangen mellom sosiale posisjoner — fødsel, voksenblivelse, ekteskap, innvielse, død. Kalenderritualer og botsritualer finnes, men de er andre former og har ikke den tredelte sekvensen som kjennetegn.",
    },
    {
      question: "Hvorfor arbeidet Turner mest med initiasjonsritualer?",
      options: ["Fordi de har den lengste og tydeligste liminalfasen", "Fordi de er de eneste ritualene som finnes i alle samfunn", "Fordi de var de eneste ritualene han fikk tilgang til som utenforstående", "Fordi de er de mest dramatiske og derfor lettest å beskrive"],
      explanation: "Riktig er terskelfasens lengde: en vielse varer en time, en initiasjon kan vare uker eller måneder, og da blir tilstanden mulig å observere over tid. Det er metodisk, ikke et spørsmål om dramatikk eller tilgang.",
    },
    {
      question: "Hvordan skal prøvelser i overgangsritualer behandles i et faglig svar?",
      options: ["I kontekst og uten sensasjon, med spørsmålet om hva de gjør i sin egen sammenheng", "Som eksempler på praksiser faget bør ta avstand fra", "Uten å nevnes, siden de er sensitive og ikke faglig relevante", "Som bevis på at ritualer først og fremst handler om eldres kontroll over de unge"],
      explanation: "Riktig er kontekstualiseringen: prøvelsen markerer alvor, binder deltakerne sammen og gjør statusen synlig. Metodologisk relativisme forplikter til å forstå praksisen i sin sammenheng — det er ikke det samme som å slutte seg til den, og heller ikke det samme som å tie om den.",
    },
    {
      question: "Hva skapte overgangsritualet blant Nuer, ifølge Evans-Pritchard?",
      options: ["En varig gruppe av dem som gjennomgikk overgangen samtidig", "En midlertidig status som ble opphevet etter noen år", "En rangordning mellom deltakerne basert på hvordan de klarte prøvelsene", "En religiøs forpliktelse overfor forfedrene som varte livet ut"],
      explanation: "Riktig er den varige gruppen — aldersklassen — som beholdt sitt innbyrdes forhold gjennom livet. Poenget er at ritualet ikke bare flyttet én person, men skapte en enhet som ble en del av samfunnets organisering.",
    },
    {
      question: "Hva er et ritual i antropologisk forstand?",
      options: ["En handlingsrekke med fastlagt form som gjør noe sosialt", "En religiøs handling rettet mot overnaturlige makter", "En handling som gjentas så ofte at den blir en vane", "En seremoni som ledes av en person med religiøs autoritet"],
      explanation: "Riktig er den fastlagte formen som gjør noe sosialt. Religiøse ritualer er en undergruppe, ikke hele kategorien — rettssaker, disputaser og statsbesøk er også ritualer. Og en vane gjør ikke noe sosialt på samme måte.",
    },
    {
      question: "Hvilke overganger markeres i så godt som alle samfunn?",
      options: ["Fødsel, overgangen til voksen, ekteskap og død", "Fødsel, første arbeidsdag, ekteskap og pensjonering", "Navngiving, skolestart, myndighetsalder og død", "Overgangen til voksen, flytting, ekteskap og alderdom"],
      explanation: "Riktig er de fire livsløpsovergangene. De skiller seg ut fordi de endrer personens forhold til alle andre på én gang — en som gifter seg, omordner hele slektskapsnettverket mellom to grupper.",
    },
    {
      question: "Hva er den beste måten å prøve utvidelsen av liminalitetsbegrepet på?",
      options: ["Å spørre om det finnes en reintegrasjon i tilfellet man beskriver", "Å spørre om tilstanden oppleves som ubehagelig av dem det gjelder", "Å spørre om tilstanden er frivillig valgt eller påtvunget av omgivelsene", "Å spørre om det finnes et ritual som markerer inngangen til tilstanden"],
      explanation: "Riktig er spørsmålet om den tredje fasen, fordi det er sekvensen som gir det opprinnelige begrepet dets kraft. Frivillighet er relevant for skillet mellom liminal og liminoid, men det er reintegrasjonen som avgjør om man beskriver en fase eller en varig posisjon.",
    },
    {
      question: "Hvorfor kan antistrukturen leses som en sikkerhetsventil?",
      options: ["Fordi den gir spenninger et regulert utløp og dermed gjør ordenen mer holdbar", "Fordi den lar dem som har minst makt, ta over styringen permanent", "Fordi den avslører at ordenen er urettferdig og dermed til slutt fremtvinger endring", "Fordi den bare finnes i samfunn der ordenen allerede er truet"],
      explanation: "Riktig er det regulerte utløpet: opprøret får sin faste dag i kalenderen og blir dermed ufarlig. Den motsatte lesningen — at opphevingen minner samfunnet om at menneskene under posisjonene er like — er like forsvarlig, og begge bør med i en drøfting.",
    },
    {
      question: "Hva er den vanligste fasen å utelate i kortsvar om overgangsritualer?",
      options: ["Reintegrasjonen, fordi den virker minst dramatisk", "Separasjonen, fordi den er den korteste av de tre fasene", "Liminalfasen, fordi den er vanskeligst å forklare", "Prøvelsesfasen, fordi den ikke finnes i alle ritualer"],
      explanation: "Riktig er reintegrasjonen. Uten den er overgangen ikke fullført, og hele poenget med ritualet mangler — det er nettopp den fasen som gjør den nye posisjonen kjent og bindende for alle andre. Merk også at det ikke finnes noen egen prøvelsesfase; prøvelser hører til liminalfasen.",
    },
    {
      question: "Hva vinner liminalitetsbegrepet ved å brukes utenfor rituelle sammenhenger?",
      options: ["Det retter oppmerksomheten mot at uklar sosial plassering i seg selv har virkninger", "Det gjør det mulig å sammenligne alle former for ventetid statistisk", "Det viser at moderne samfunn mangler ritualer og derfor er fattigere", "Det erstatter behovet for å analysere de politiske årsakene bak selve situasjonen"],
      explanation: "Riktig er funnet om uklar plassering, som er grunnen til at koblingen til Douglas er så virksom. Den siste påstanden er tvert imot innvendingen mot utvidelsen: at begrepet kan skjule at situasjonen er politisk skapt.",
    },
  ],
  'sosant1000-4-2': [
    {
      question: "Hva menes med «matter out of place»?",
      options: ["At skitt er materie på feil sted — et forhold mellom tingen og ordenen den er i", "At skitt består av stoffer som er skadelige for helsen til dem som kommer i kontakt med dem", "At noe blir urent når det har vært i berøring med noe forbudt", "At ting helt mister sin verdi når de flyttes ut av den opprinnelige sammenhengen sin"],
      explanation: "Riktig er forholdet mellom ting og orden: jord i hagen er jord, den samme jorda på benken er skitt. Helseskade er nettopp hygieneforklaringen Douglas avviser, og berøringssmitte er en annen forestilling enn den om plassering i en klassifikasjon.",
    },
    {
      question: "Hvorfor avviser Douglas hygieneforklaringen på matforbud?",
      options: ["Fordi reglene rammer ufarlig mat og lar farlig mat være i fred", "Fordi folk i eldre samfunn ikke kjente til sykdomsårsaker i det hele tatt", "Fordi hun mener religiøse forklaringer alltid går foran praktiske", "Fordi matforbud finnes også i samfunn uten smittsomme sykdommer"],
      explanation: "Riktig er at utvalget ikke følger helserisiko: de samme dyrene er dessuten forbudt ett sted og hovedføde et annet. Poenget er ikke at folk manglet kunnskap, men at hygienelesningen forutsetter at de egentlig mente noe annet enn det de sier.",
    },
    {
      question: "Hva er en anomali hos Douglas?",
      options: ["Det som ikke lar seg plassere rent i en klassifikasjon", "Et brudd på en religiøs regel som krever renselse", "En sjelden hendelse som forstyrrer et samfunns normale gang", "Et fenomen som forekommer i ett samfunn, men ikke i andre"],
      explanation: "Riktig er det som faller mellom kategorier eller tilhører flere samtidig. Regelbrudd og renselse er følger av anomalitenkningen, ikke definisjonen — og det handler ikke om hvor sjeldent eller utbredt noe er.",
    },
    {
      question: "Hvordan beskriver Douglas matforbudene i Tredje Mosebok?",
      options: ["Som et system der dyr som ikke passer i sitt eget domene, er forbudt", "Som en tilfeldig liste av forbud som er blitt hellig gjennom lang tradisjon", "Som praktiske helseregler mot fordervelig mat, formulert i religiøse ord", "Som et resultat av at bestemte dyr var knappe ressurser"],
      explanation: "Riktig er systematikken: hvert element har sitt rette sted og sin rette bevegelsesmåte, og dyr som bryter med kravene i sitt domene eller krysser mellom domener, er de forbudte. Helseforklaringen er den hun avviser, og listen er nettopp ikke tilfeldig.",
    },
    {
      question: "Hva slags arbeid er Douglas' analyse av matforbudene i Tredje Mosebok?",
      options: ["Tekstanalyse, ikke feltarbeid blant dem som følger forbudene", "Feltarbeid blant jødiske familier som fulgte forbudene på 1960-tallet", "En sammenligning av matforbud i femti samfunn", "En analyse av arkeologisk materiale fra Midtøsten og Nord-Afrika"],
      explanation: "Riktig er tekstanalyse. Feltarbeidet hennes var blant Lele i Kasai-området; matforbudsanalysen er en lesning av en skriftlig kilde, og presisjonen om skillet er verdt et pluss i et svar.",
    },
    {
      question: "Hva er et tabu?",
      options: ["Et forbud begrunnet i noe annet enn praktisk skade", "Et forbud som er uttrykkelig nedfelt i et samfunns lovverk", "En handling som er sjelden fordi den er upraktisk", "En religiøs plikt som må oppfylles til bestemte tider"],
      explanation: "Riktig er forbudet uten skadebegrunnelse: det trenger ingen begrunnelse for dem som følger det, og brudd krever gjerne renselse snarere enn unnskyldning. Lovfesting er noe annet, og et tabu er et forbud, ikke en plikt.",
    },
    {
      question: "Hva er skillet mellom det hellige og det profane hos Durkheim?",
      options: ["Et skille mellom det som settes til side og omgis av forbud, og det alminnelige", "Et skille mellom det overnaturlige og det naturlige, altså mellom to slags virkelighet", "Et skille mellom det religiøse livet og det verdslige arbeidslivet i ethvert samfunn", "Et skille mellom det som er rent og det som er urent"],
      explanation: "Riktig er skillet mellom to behandlingsmåter, ikke mellom to slags virkelighet. Hva som er hellig varierer fullstendig — en stein, en bok, et flagg — mens det at noe skilles ut og behandles med alvor, er gjennomgående.",
    },
    {
      question: "Hva er Durkheims tese om religion og samfunn?",
      options: ["At religiøse forestillinger uttrykker og opprettholder samfunnets egen struktur", "At religion oppstår av menneskers frykt for døden og for det ukjente i tilværelsen", "At religion gradvis forsvinner av seg selv etter hvert som samfunn blir mer moderne", "At religion er en privat overbevisning uten sosiale virkninger"],
      explanation: "Riktig er at religionen uttrykker sosial struktur, og at det er samfunnet selv menneskene i siste instans forholder seg til. Merk formuleringen: han argumenterte for dette på grunnlag av andres rapporter — han beviste det ikke.",
    },
    {
      question: "Hva er den viktigste presiseringen om Durkheims tese?",
      options: ["At han argumenterte for den uten selv å ha vært i felt", "At han senere trakk den tilbake i lys av nytt materiale", "At den bare var ment å gjelde for europeiske samfunn", "At den er blitt bekreftet av senere feltarbeid i Australia"],
      explanation: "Riktig er at han aldri var i felt: tesen hviler på andres rapporter om australske urfolks religion, samlet inn i kolonitiden. Senere feltarbeid har tvert imot vist et langt mer sammensatt bilde enn det han bygde på.",
    },
    {
      question: "Hva er den kollektive oppstemtheten hos Durkheim?",
      options: ["Den intense fellesskapsfølelsen som oppstår når mennesker samles i ritualer", "Den gleden den enkelte føler over å ha oppfylt en religiøs plikt på rett måte", "Den enigheten om moralske spørsmål som finnes i små og tette lokalsamfunn i dag", "Den følelsen av trygghet religiøs tro gir den enkelte"],
      explanation: "Riktig er energien som frembringes av samlingen, og som deltakerne opplever som noe større enn seg selv. Durkheims poeng er at kraften er samfunnets egen, opplevd i konsentrert form — den tilskrives noe hellig, men frembringes av forsamlingen.",
    },
    {
      question: "Hva er forskjellen mellom Durkheims kollektive oppstemthet og Turners communitas?",
      options: ["Communitas oppstår når rangen er opphevet, oppstemtheten kan oppstå med strukturen intakt", "Communitas er en varig tilstand, oppstemtheten er kortvarig", "Communitas gjelder små grupper, mens den kollektive oppstemtheten gjelder hele store samfunn", "Communitas er religiøs, oppstemtheten er verdslig"],
      explanation: "Riktig er at communitas forutsetter opphevet rang i en terskelfase, mens oppstemtheten kan oppstå i en forsamling der strukturen er helt intakt. Begge er intense og kortvarige, og begge kan finnes i religiøse og verdslige sammenhenger.",
    },
    {
      question: "Hva er en offergave?",
      options: ["Noe som gis til et hellig mottaksledd og dermed trekkes ut av vanlig sirkulasjon", "En gave som gis til noen som ikke kan gjengjelde den økonomisk", "En gjenstand som ødelegges i et ritual for å vise avkall", "En gave som gis på vegne av en hel gruppe i stedet for av en enkeltperson som handler alene"],
      explanation: "Riktig er gaven til et hellig mottaksledd. Ødeleggelse forekommer i noen offerformer, men er ikke definisjonen — og at giveren er en gruppe, er et vanlig trekk ved gavebytte i sin alminnelighet.",
    },
    {
      question: "Hva viste Govindrajans studie fra Kumaon-Himalaya?",
      options: ["At geita som ofres, er et familiemedlem, og at nærheten gjør ofringen virksom", "At folk holder følelsesmessig avstand til dyr som skal ofres", "At dyreofring er i ferd med å forsvinne helt fra moderne indiske landsbysamfunn i dag", "At ofringen først og fremst har en økonomisk begrunnelse"],
      explanation: "Riktig er at nærheten er forutsetningen og ikke motsetningen: man gir noe man er glad i, og det er det som gjør gaven til en gave. Å tro at folk må holde avstand, er nettopp lesningen studien motsier.",
    },
    {
      question: "Hvor kommer Mauss' gaveteori til kort i analysen av et offer?",
      options: ["I asymmetrien — gjengjeldelsen er forventet, men kan ikke kreves", "I at offeret ikke innebærer noen plikt til å gi", "I at offeret alltid gjengjeldes umiddelbart og synlig", "I at offeret ikke skaper noen relasjon mellom giveren og mottakeren"],
      explanation: "Riktig er asymmetrien: relasjonen er mellom ulike, og gjelden snus ikke fram og tilbake slik den gjør mellom likemenn. Plikten til å gi er tvert imot tydelig, og relasjonen er nettopp det som skapes.",
    },
    {
      question: "Hvorfor er materialitet viktig i analysen av religion?",
      options: ["Fordi ting kan deles, overleveres og vises frem, slik at mening blir varig og felles", "Fordi religiøse gjenstander alltid har høy økonomisk verdi", "Fordi materielle ting er lettere å observere for etnografen", "Fordi religiøs mening bare kan finnes der det er materielle gjenstander involvert i handlingen"],
      explanation: "Riktig er at ting gir mening varighet og felleskap: en forestilling som bare finnes i tanken, kan ikke deles eller overleveres. Poenget er ikke observerbarhet for forskeren, og ikke at religion krever gjenstander.",
    },
    {
      question: "Hvordan avgrenser antropologien religion?",
      options: ["Ved hva mennesker gjør og hvordan de ordner verden, ikke ved hva de tror på", "Ved om det finnes en organisert institusjon med ledere og medlemmer", "Ved om praksisen retter seg mot guder eller mot andre slags overnaturlige vesener", "Ved om deltakerne selv kaller praksisen religiøs"],
      explanation: "Riktig er handlinger og ordninger. En definisjon som krever tro på guder, utelukker praksiser som åpenbart hører hjemme i samme kategori, og den tvinger analytikeren til å avgjøre hva folk egentlig mener.",
    },
    {
      question: "Hva er totemisme?",
      options: ["En ordning der en gruppe knytter seg til et dyr eller naturfenomen som sitt tegn og opphav", "Troen på at gjenstander har egne sjeler og vilje", "Dyrkelsen av forfedre som beskytter slekten", "Forbudet mot å avbilde det hellige i menneskelig eller dyrisk skikkelse i kunsten og i ritualer"],
      explanation: "Riktig er gruppens tegn og opphav, ofte med forbud mot å spise eller skade det. Durkheim valgte materialet fordi han mente å finne religionens elementære former der — et premiss som hører til en evolusjonistisk ramme faget senere har forlatt.",
    },
    {
      question: "Hvorfor har faget forlatt premisset om «elementære former»?",
      options: ["Fordi ingen levende samfunn er et tidligere stadium av et annet", "Fordi materialet fra Australia senere er blitt utilgjengelig", "Fordi religion viste seg å variere for lite mellom samfunn", "Fordi Durkheim selv trakk premisset tilbake i sine senere arbeider"],
      explanation: "Riktig er at samtidige samfunn ikke er stadier i én utvikling — alle har like lang historie. Premisset hører til en evolusjonistisk trapp fra enkelt til komplekst, og å si dette kort og faktuelt er faghistorisk presisjon.",
    },
    {
      question: "Hva er den beste innvendingen mot Durkheims tese?",
      options: ["At den forklarer hva religion gjør, men dårlig hva den betyr for dem som tror", "At den ikke tar hensyn til at religion også har økonomiske virkninger", "At den bare gjelder for samfunn med organiserte religiøse institusjoner", "At den forutsetter at alle samfunnsmedlemmer deltar i nøyaktig de samme ritualene"],
      explanation: "Riktig er skillet mellom hva religion gjør og hva den betyr. Tesen har dessuten vanskelig for å forklare religiøs uenighet, endring og religion som kritiserer samfunnet i stedet for å bekrefte det.",
    },
    {
      question: "Hvordan viser Turners liminalitet en spenning i Durkheims tese?",
      options: ["Ritualer opphever også den sosiale ordenen, ikke bare bekrefter den", "Ritualer finnes i samfunn uten religiøse forestillinger", "Ritualer er individuelle handlinger og ikke kollektive", "Ritualer virker bare i den grad deltakerne selv tror på deres virkning"],
      explanation: "Riktig er opphevingen: i liminalfasen er rangen borte, og det oppstår communitas. Om religion bare uttrykte samfunnsstrukturen, ville dette vært vanskelig å forklare — Turners svar er at antistrukturen er innebygd, men det er et tillegg til Durkheim.",
    },
    {
      question: "Hva skal man spørre om når man forklarer et renhetstabu?",
      options: ["Hvilken orden som brytes", "Hvilken helserisiko praksisen beskytter mot", "Hvor gammel regelen er i det aktuelle samfunnet", "Hvor mange som faktisk følger regelen i dag"],
      explanation: "Riktig er ordenen som brytes. Svarer man med helserisiko, har man gitt en hygieneforklaring — og det er nettopp den forklaringen Douglas avviser. Alder og etterlevelse er interessante spørsmål, men de forklarer ikke hvorfor noe regnes som urent.",
    },
    {
      question: "Hvordan skal sensitive praksiser som dyreofring behandles i et faglig svar?",
      options: ["I kontekst og uten sensasjon, med en merknad om at praksisen ofte er omstridt også lokalt", "Ved å unngå dem, siden de kan virke støtende på leseren", "Ved å ta tydelig avstand fra dem før analysen begynner", "Ved å behandle dem som rent symbolske handlinger uten noe reelt innhold for dem som utfører dem"],
      explanation: "Riktig er kontekstualisering uten sensasjon, med merknaden om at praksisen er omstridt innenfra. Metodologisk relativisme forplikter til å forstå praksisen i sin egen sammenheng — det er ikke det samme som å slutte seg til den, og heller ikke det samme som å tie om den.",
    },
  ],
  'sosant1000-5-1': [
    {
      question: "Hvordan definerer Eriksen globalisering?",
      options: ["Som prosesser der mennesker, steder og institusjoner blir mer tett og direkte forbundet på tvers av store avstander", "Som den prosessen der verdens kulturer gradvis smelter sammen til én felles og delt levemåte", "Som utbredelsen av markedsøkonomi og vestlige politiske institusjoner til stadig flere land i verden", "Som den økte handelen mellom nasjonalstater etter at de fleste tollmurer ble bygget ned"],
      explanation: "Riktig er at globalisering handler om tettere og mer direkte forbindelser over avstand. Svaret om sammensmelting til én levemåte er homogeniseringstesen, som er en omstridt påstand og ikke definisjonen. Å redusere globalisering til handel eller til spredning av bestemte institusjoner gjør begrepet snevrere enn Eriksens bruk.",
    },
    {
      question: "Hva er frakobling som nøkkelord hos Eriksen?",
      options: ["At sosiale relasjoner og verdier løsrives fra sted og personlige relasjoner og begynner å virke mellom fremmede", "At enkelte samfunn faller utenfor verdensøkonomien og mister sine forbindelser til omverdenen og dermed havner helt utenfor", "At mennesker aktivt trekker seg tilbake fra digitale medier for å gjenvinne kontroll over egen tid", "At produksjonen flyttes bort fra det landet der varen til slutt skal selges til forbrukerne"],
      explanation: "Riktig er at relasjoner og verdier løsrives fra sted og kan virke mellom mennesker som ikke kjenner hverandre — penger er skoleeksempelet. Å forstå frakobling som at et samfunn faller utenfor, forveksler begrepet med marginalisering. Digital avkobling og utflytting av produksjon er hverdagsbetydninger som ikke treffer Eriksens analytiske bruk.",
    },
    {
      question: "Hva er sammenhengen mellom standardisering og frakobling?",
      options: ["Standardisering er en forutsetning for frakobling, fordi bare det som er gjort sammenlignbart kan utveksles mellom fremmede", "Frakobling er en forutsetning for standardisering, fordi standarder først kan lages når stedet er blitt likegyldig for begge parter", "De to er motsatte prosesser, siden standardisering binder varer til et sted mens frakobling løsriver dem fra sitt opphav og sitt sted", "De to er uavhengige av hverandre og hører til hver sin del av Eriksens raster over globalisering"],
      explanation: "Riktig er at standardisering muliggjør frakobling: en felles standard erstatter den lokale kunnskapen og personlige tilliten som ellers måtte til for et bytte. De to er verken motsatte eller uavhengige — de forutsetter hverandre, og å si det er en billig kobling med god uttelling. Standardisering binder ikke varen til et sted, den gjør den utvekselbar.",
    },
    {
      question: "Hva er den viktigste presiseringen om mobilitet som nøkkelord?",
      options: ["At mobiliteten er ujevnt fordelt, slik at noens bevegelsesfrihet ofte forutsetter at andre holdes i ro", "At mobiliteten er størst blant mennesker og minst blant kapital, siden mennesker flytter oftest oftest av alle", "At mobiliteten først og fremst gjelder varer, mens ideer og bilder beveger seg langsommere enn de gjorde før", "At mobiliteten har vært jevnt økende siden 1800-tallet og derfor ikke er noe særtrekk ved vår egen tid"],
      explanation: "Riktig er at mobilitet er ujevnt fordelt, og at immobilitet — å bli holdt fast — hører med i samme begrep. Det er kapital og informasjon som beveger seg raskest, mennesker langsomst, ikke omvendt. Ideer og bilder beveger seg tvert imot svært raskt, og at mobiliteten har en lang historie, opphever ikke at fordelingen er selve poenget.",
    },
    {
      question: "Hva er sårbarhet som nøkkelord hos Eriksen?",
      options: ["At tette forbindelser også overfører risiko, slik at kriser sprer seg gjennom de samme kanalene som varer og penger", "At fattige samfunn har færre ressurser å møte kriser med enn rike samfunn har når krisen først rammer", "At globaliseringen svekker nasjonalstatens evne til å beskytte innbyggerne mot ytre trusler og press", "At tradisjonelle levemåter står i fare for å forsvinne når nye varer og medier når fram til dem"],
      explanation: "Riktig er at risikoen sprer seg gjennom de samme kanalene som gjør systemet effektivt — sårbarhet er baksiden av sammenveving, ikke en feil ved den. At fattige har mindre buffer er en sann observasjon om fordelingen, men den er ikke selve begrepet. Svekket statsmakt og tap av tradisjonelle levemåter er andre debatter.",
    },
    {
      question: "Hva er tilbakekobling som nøkkelord hos Eriksen?",
      options: ["Motbevegelsen mot frakobling: at mennesker forankrer livet på nytt i sted, slekt, tradisjon, nasjon eller religion", "At varer og informasjon vender tilbake til produksjonsstedet i form av tilbakemeldinger fra markedet og fra forbrukerne", "At tidligere kolonier har gjenopptatt kontakten med de landene som en gang styrte dem", "At tradisjonelle praksiser overlever uendret fordi lokalsamfunn skjermer dem mot ytre påvirkning"],
      explanation: "Riktig er den nye forankringen i sted, tradisjon og identitet som svar på at gamle bindinger løsner. Presisjonen som teller er at tilbakekobling sjelden er tradisjon som overlever uendret — det er som regel noe nytt laget med tradisjonen som materiale, og gjerne med globale verktøy som medier og rettighetsspråk.",
    },
    {
      question: "Hva viste Marianne Liens studie av norsk lakseoppdrett?",
      options: ["At oppdrettslaksen blir til i skjæringspunktet mellom biologi, teknologi, marked og forvaltning", "At oppdrettsnæringen har fjernet seg så langt fra naturen at fisken må regnes som et rent industriprodukt", "At norske oppdrettere motsetter seg de internasjonale standardene fordi de hindrer lokal fagkunnskap", "At lakseoppdrett gir høyere avkastning enn tradisjonelt fiske og derfor har utkonkurrert det"],
      explanation: "Riktig er at laksen blir til i skjæringspunktet mellom biologi, teknologi, marked og forvaltning, slik at natur og kultur ikke lar seg skille i praksis. Å lese studien som en påstand om at fisken er blitt rent industriell, gjenoppretter nettopp det skillet Lien viser at ikke holder. De to øvrige svarene er påstander studien ikke gjør.",
    },
    {
      question: "Hva viste Kathleen Millars arbeid blant søppelplukkerne på Jardim Gramacho?",
      options: ["At folk vendte tilbake til fyllinga også når de hadde alternativer, fordi arbeidets rytme og selvstendighet passet et prekært liv", "At arbeidet på fyllinga var så nedverdigende at alle som fikk mulighet til det, forlot det for godt og uten å se seg tilbake senere", "At søppelplukkerne organiserte seg i et kollektiv som til slutt fikk kontroll over gjenvinningsmarkedet i regionen rundt storbyen", "At myndighetene i Rio de Janeiro gradvis formaliserte arbeidet og ga plukkerne faste ansettelser med fast månedslønn og rettigheter"],
      explanation: "Riktig er at folk vendte tilbake fordi arbeidets rytme og relative selvstendighet passet et liv i vedvarende usikkerhet — prekaritet er en livsform, ikke bare mangel. Elendighetslesningen er den vanligste feillesningen av denne teksten og snur hovedpoenget på hodet. De to siste svarene beskriver hendelser studien ikke handler om.",
    },
    {
      question: "Hva menes med prekaritet slik begrepet brukes hos Millar?",
      options: ["Et liv i vedvarende usikkerhet som får sin egen form, med egne rytmer, relasjoner og en relativ selvstendighet", "En tilstand av ekstrem fattigdom der mennesker mangler det aller mest nødvendige for å overleve", "En midlertidig fase i arbeidslivet som de fleste kommer seg ut av når konjunkturene bedrer seg", "En juridisk kategori for arbeidstakere uten fast ansettelse og uten rett til oppsigelsesvern"],
      explanation: "Riktig er at prekaritet er et usikkert liv som får sin egen form og logikk. Å sette likhetstegn mellom prekaritet og ekstrem fattigdom er nettopp elendighetslesningen Millar advarer mot. Prekaritet er heller ikke en midlertidig fase eller en rent juridisk kategori — det er en varig livsform med sosialt innhold.",
    },
    {
      question: "Hva er den mest presise innvendingen mot påstanden om at globalisering gjør verden kulturelt likere?",
      options: ["At standardisering gjelder formene, mens samme form fylles med ulikt innhold og ofte gir nye kombinasjoner", "At det finnes samfunn som fortsatt er helt uberørte av globale forbindelser og derfor ikke blir likere", "At kulturene er så grunnleggende forskjellige at de ikke kan påvirke hverandre på tvers av grenser i praksis", "At påstanden er umulig å undersøke fordi kultur ikke lar seg måle på en sammenlignbar skala"],
      explanation: "Riktig er skillet mellom form og innhold: standardisering er reell, men samme form inngår i ulike sosiale sammenhenger og produserer ofte nye kombinasjoner — nøkkelordet blanding. Påstanden om helt uberørte samfunn er historisk gal, siden de klassiske etnografiene ble til i kolonitiden. At kulturer ikke kan påvirke hverandre, motsies av alt materialet i pensum.",
    },
    {
      question: "Hva er den skjerpede versjonen av globaliseringens forhold til forskjell?",
      options: ["At globalisering produserer nye slags forskjeller, blant annet mellom dem som er koblet til de raske strømmene og dem som ikke er det", "At globalisering først skaper likhet og deretter forskjell, i en rytme som gjentar seg over generasjoner i takt med teknologiske skifter", "At forskjellene mellom land minker mens forskjellene innad i hvert land holder seg helt konstante i alle land, uansett politikk og økonomi", "At kulturelle forskjeller er de eneste forskjellene som består når økonomiske forskjeller utjevnes"],
      explanation: "Riktig er at globalisering produserer nye slags forskjeller, og at skillelinjene i økende grad går mellom ulike former for tilkobling snarere enn mellom kulturer. Modellen med vekslende faser av likhet og forskjell er ikke Eriksens argument. At bare kulturelle forskjeller består, motsies av materialet om ulikhet i mobilitet og risiko.",
    },
    {
      question: "Hvorfor sier boka at Eriksens åtte nøkkelord er et analytisk raster og ikke et empirisk funn?",
      options: ["Fordi de er et sett spørsmål å stille til et materiale, ikke en påstand om verden som kan bekreftes eller motbevises", "Fordi Eriksen selv har uttalt at han er usikker på om alle åtte er nødvendige for å forstå globalisering i dagens verden", "Fordi nøkkelordene er hentet fra andre forskeres feltarbeid og dermed bare er annenhåndskunnskap uten selvstendig verdi", "Fordi de bare gjelder for de samfunnene Eriksen selv har studert og ikke lar seg overføre til andre og deres nabosamfunn"],
      explanation: "Riktig er at rasteret er et spørsmålssett som anvendes på materiale, ikke en hypotese som testes. Nøkkelordene er heller ikke begrenset til bestemte samfunn — de er ment å kunne stilles til et hvilket som helst materiale. At de bygger på andres etnografi, gjør dem ikke til noe annet enn et analytisk verktøy.",
    },
    {
      question: "Hva er den viktigste spenningen mellom standardisering og blanding?",
      options: ["Standardisering peker mot likhet i formene, mens blanding peker mot at møter mellom former skaper noe nytt", "Standardisering skjer i rike land, mens blanding først og fremst skjer i de landene som mottar varene", "Standardisering gjelder varer og blanding gjelder mennesker, slik at de to aldri kan møtes i samme analyse", "Standardisering er et nyere fenomen enn blanding, som har foregått gjennom hele menneskets historie"],
      explanation: "Riktig er at de to trekker i hver sin retning: felles former mot nye kombinasjoner. Skillet går ikke mellom rike og fattige land eller mellom varer og mennesker — begge prosessene skjer overalt og samtidig. At blanding har lang historie er sant, men er ikke det som gjør spenningen analytisk interessant.",
    },
    {
      question: "Hvordan bør et kortsvar besvare oppgaven «velg to av Eriksens nøkkelord»?",
      options: ["Ved å behandle nøyaktig to, med hver sin presise kjerne og et pensumeksempel som helst belegger begge", "Ved å nevne alle åtte kort og deretter gå grundigere inn på de to som er lettest å forklare i selve besvarelsen", "Ved å velge de to som virker mest omfattende, siden de da dekker mest av globaliseringsfeltet", "Ved å behandle to nøkkelord uten eksempler, fordi kortsvaret er for kort til etnografisk belegg"],
      explanation: "Riktig er å behandle nøyaktig to, med presise kjerner og etnografisk belegg — helst ett eksempel som bærer begge. Å ta med alle åtte er å svare på en annen oppgave enn den som ble stilt. Kortsvaret er aldri for kort til etnografi: kravet om minst ett eksempel er nettopp det som skiller nivåene.",
    },
    {
      question: "Hvorfor kan ikke Eriksens grunnbok alene brukes som etnografisk belegg?",
      options: ["Fordi den er en syntese og grunnbok uten eget feltmateriale, slik at belegget må hentes fra de andre pensumtekstene", "Fordi den er skrevet for et allment publikum og derfor ikke regnes som pensumlitteratur i emnet på universitetsnivå", "Fordi den er for gammel til at eksemplene i den fortsatt gjelder for dagens globaliserte verden og dens raske endringer", "Fordi den bare behandler norske forhold og dermed ikke gir noe sammenligningsgrunnlag på tvers av ulike samfunn i verden"],
      explanation: "Riktig er at grunnboka er en syntese uten eget feltmateriale, slik at etnografien må hentes fra tekstene den bygger på og fra de øvrige pensumtekstene. Boka er selvsagt pensum og behandler samfunn over hele verden. Å vite forskjellen på en synteserende grunnbok og en etnografi er en presisjon få kandidater viser.",
    },
    {
      question: "Hva er akselerasjon som nøkkelord hos Eriksen?",
      options: ["At hastigheten i kommunikasjon, transport og produksjon øker, slik at avstand betyr mindre målt i tid", "At endringstakten i samfunn øker fordi hver ny generasjon forkaster den forriges levemåte enn den forrige gjorde", "At økonomisk vekst skjer stadig raskere i land som nylig er blitt koblet til verdensmarkedet enn andre steder", "At antallet mennesker som flytter over landegrenser vokser raskere enn befolkningen ellers gjør"],
      explanation: "Riktig er tidskompresjonen: det som tok uker tar minutter, og avstand betyr mindre målt i tid. Akselerasjon handler ikke i seg selv om generasjonsskifter, økonomisk vekstrate eller migrasjonstall. Presiseringen som løfter et svar er at hastigheten er ujevnt fordelt — kapital og informasjon beveger seg raskest, mennesker langsomst.",
    },
    {
      question: "Hva er sammenveving som nøkkelord hos Eriksen?",
      options: ["At steder og mennesker knyttes sammen gjennom flere og tettere forbindelser, slik at det som skjer ett sted får følger et annet", "At ulike kulturelle tradisjoner smelter sammen til nye former som ikke lar seg føre tilbake til noen av dem", "At institusjoner i ulike land gradvis får samme oppbygning og samme regelverk å forholde seg til", "At mennesker knytter seg til stadig flere sosiale nettverk samtidig og derfor får svakere lokale bånd"],
      explanation: "Riktig er de flere og tettere forbindelsene som gjør steder gjensidig avhengige. Sammensmelting av kulturelle former er nøkkelordet blanding, og felles institusjonsformer er standardisering — begge er andre nøkkelord i samme raster. Å skille dem fra hverandre er nettopp det oppgaven «velg to» måler.",
    },
    {
      question: "Hva menes med at globalisering ikke er et nytt fenomen?",
      options: ["At forbindelser over lange avstander har eksistert i århundrer, og at det som endrer seg er tempo, tetthet og rekkevidde", "At antropologien alltid har studert globalisering, men brukte andre ord om den før 1990-tallet i faglitteraturen om emnet", "At kula-nettverket på Trobriandøyene var et globalt marked på linje med dagens verdenshandel", "At kolonitidens samfunn allerede hadde samme grad av gjensidig avhengighet som samfunn har i dag"],
      explanation: "Riktig er at forbindelsene har lang historie, og at det nye er tempoet, tettheten og rekkevidden. Poenget flytter spørsmålet fra om verden er blitt global til hva slags forbindelser det dreier seg om, i hvilket tempo og for hvem. Å hevde at eldre nettverk hadde samme omfang eller karakter som dagens, går lenger enn materialet gir grunnlag for.",
    },
    {
      question: "Hvorfor er det en feil å gi to nøkkelord som begge egentlig sier «verden henger mer sammen»?",
      options: ["Fordi kjernene da ikke er distinkte, og svaret behandler ett begrep to ganger i stedet for to begreper", "Fordi nøkkelordene skal presenteres i den rekkefølgen Eriksen selv bruker i grunnboka si om globalisering", "Fordi sensor vil se at kandidaten har valgt de to enkleste nøkkelordene i stedet for de vanskeligste", "Fordi et kortsvar aldri skal behandle to begreper som ligner på hverandre i samme besvarelse på samme eksamen"],
      explanation: "Riktig er at kjernene mangler distinksjon, slik at svaret i praksis bare inneholder ett begrep. Det er feil nummer 8 i registeret, å overse begrepets distinksjoner. Rekkefølgen på nøkkelordene er likegyldig, og vanskelighetsgraden på valget er det ingen som måler — det er presisjonen som teller.",
    },
    {
      question: "Hvordan bør en kandidat bruke Eriksens raster på Millars materiale fra Rio de Janeiro?",
      options: ["Ved å si eksplisitt at rasteret anvendes på materialet, og deretter vise hva kategorien får frem og hva den ikke fanger", "Ved å slå fast at Millars materiale bekrefter at sårbarhet er et gyldig nøkkelord om globalisering i analysen av samtidens verden", "Ved å erstatte Millars egne begreper med Eriksens, siden rasteret er mer generelt anvendbart og dermed mer presist for oppgaven", "Ved å behandle de to tekstene i hvert sitt avsnitt uten å blande begreper fra den ene inn i den andre i samme besvarelse"],
      explanation: "Riktig er å anvende rasteret eksplisitt og deretter vise både hva det får frem og hva det ikke fanger — her at prekaritet er en livsform og ikke bare risikoeksponering. Et raster kan ikke bekreftes av et materiale, siden det er et spørsmålssett og ikke en hypotese. To atskilte avsnitt uten kobling er feil nummer 4.",
    },
    {
      question: "Hva er den viktigste grunnen til at antropologien har noe å bidra med i globaliseringsforskningen?",
      options: ["At faget undersøker hva forbindelsene gjør med arbeid, tillit og selvforståelse hos dem som lever i den andre enden", "At faget kan måle omfanget av globale strømmer mer presist enn økonomi og statsvitenskap gjør", "At faget har tilgang til samfunn som andre fag ikke kan undersøke fordi de ligger for avsides", "At faget er alene om å studere globalisering som en kulturell og ikke bare økonomisk prosess"],
      explanation: "Riktig er at faget undersøker hva forbindelsene gjør med sosialt liv der de treffer bakken. Å måle strømmenes omfang er nettopp det andre fag gjør bedre, og antropologiens bidrag ligger et annet sted. Faget har verken monopol på kulturelle perspektiver eller på tilgang til avsidesliggende steder.",
    },
    {
      question: "Hva er en presis måte å beskrive Adivasi-områdenes forhold til verdensøkonomien i Shahs materiale?",
      options: ["De er ikke utenfor verdensøkonomien, men koblet til den gjennom etterspørsel etter land og mineraler", "De er avsondret fra verdensøkonomien og har derfor beholdt sine egne økonomiske former uendret", "De er integrert i verdensøkonomien på like vilkår med resten av India og skiller seg lite fra andre områder", "De var koblet til verdensøkonomien i kolonitiden, men mistet forbindelsen etter Indias selvstendighet"],
      explanation: "Riktig er at områdene er koblet til verdensøkonomien på bestemte vilkår, gjennom etterspørsel etter land og ressurser og gjennom en historie med frarøvelse. Å beskrive dem som avsondret er nettopp forestillingen om det uberørte lokalsamfunnet som materialet motsier. At koblingen er på like vilkår, er heller ikke det Shah viser.",
    },
    {
      question: "Hva er den vanligste feillesningen av Shahs Nightmarch?",
      options: ["Å lese boka ensidig, enten som at geriljaen kjemper Adivasienes sak eller som en ren avsløring av bevegelsen", "Å tro at Shah selv var medlem av bevegelsen og derfor ikke kunne opprettholde analytisk avstand gjennom feltarbeidet", "Å tro at boka handler om India som helhet og ikke om et avgrenset område i det sentrale India og nabodelstatene", "Å behandle marsjen som en litterær ramme uten betydning for den analysen boka faktisk gjør"],
      explanation: "Riktig er den ensidige lesningen, som er feil i begge retninger: Shah viser både statens frarøvelse og bevegelsens egne motsetninger, blant annet kasteskjevt lederskap og kjønnsulikhet. Marsjen er tvert imot en bærende del av analysen, siden det er ved å gå med bevegelsen at motsetningene blir synlige.",
    },
    {
      question: "Hva er sammenhengen mellom sårbarhet og mobilitet?",
      options: ["De følger de samme skillelinjene: den som ikke kan flytte på seg, kan heller ikke flytte seg unna risikoen", "De er motsatte nøkkelord, siden høy mobilitet alltid reduserer den enkeltes utsatthet for kriser helt og holdent", "De henger ikke sammen, siden sårbarhet gjelder samfunn mens mobilitet gjelder enkeltmennesker i faglig sammenheng", "De henger sammen fordi mennesker i bevegelse er mer utsatt for smitte enn de som blir værende underveis på reisen"],
      explanation: "Riktig er at fordelingen av risiko og fordelingen av bevegelsesfrihet følger hverandre. Høy mobilitet reduserer ikke risiko i seg selv, og begge nøkkelordene gjelder både samfunn og enkeltmennesker. Smitterisiko for reisende er et enkeltstående forhold og ikke den analytiske koblingen mellom de to begrepene.",
    },
    {
      question: "Hva er blanding som nøkkelord hos Eriksen?",
      options: ["At kulturelle former møtes og kombineres til nye former som ikke fantes før, i språk, mat, musikk og hverdagsliv", "At mennesker med ulik bakgrunn i økende grad bor i de samme byene og de samme nabolagene", "At varer fra ulike land selges i de samme butikkene og dermed konkurrerer om de samme kundene", "At kulturelle særtrekk gradvis utvannes til en felles og mindre særpreget global middelkultur"],
      explanation: "Riktig er at møter mellom former produserer noe nytt. At mennesker bor sammen eller at varer konkurrerer, er forhold som kan gi opphav til blanding, men er ikke selve begrepet. Utvanningsversjonen er homogeniseringstesen, og blanding er nettopp det viktigste motargumentet mot den.",
    },
    {
      question: "Hva er det viktigste å få med når man skriver at globalisering skaper ulikhet?",
      options: ["Mekanismen: hvilke konkrete koblinger som fordeler risiko og gevinst, belagt med et etnografisk eksempel", "Tallene: hvor stor andel av verdens inntekt som tilfaller den rikeste delen av befolkningen i løpet av et år", "Historien: at ulikheten mellom verdensdeler har røtter tilbake til kolonitidens erobringer", "Sammenligningen: at ulikheten er større i noen land enn i andre og derfor varierer med politikk"],
      explanation: "Riktig er mekanismen med etnografisk belegg — for eksempel at inntekten til dem som samlet materiale på Jardim Gramacho, svingte med råvarepriser satt andre steder, uten buffer. Tall, historisk bakgrunn og landsammenligninger kan komme i tillegg, men et svar uten konkret mekanisme og eksempel er feil nummer 1.",
    },
    {
      question: "Hvorfor er det upresist å si at tilbakekobling er «tradisjon som overlever»?",
      options: ["Fordi tilbakekobling som regel er noe nytt laget med tradisjonen som materiale, og gjerne med globale verktøy", "Fordi tradisjoner sjelden overlever i det hele tatt når et samfunn kobles til verdensmarkedet og til nye varestrømmer", "Fordi tilbakekobling bare forekommer i samfunn som ikke har noen tradisjon å vende tilbake til i sin egen historie", "Fordi tradisjon er et begrep antropologien har forlatt til fordel for kultur som prosess"],
      explanation: "Riktig er at tilbakekobling gjerne er nyskaping med tradisjonen som materiale — en lokalmatstandard er selv en standard, og en identitetsbevegelse bruker globale medier og rettighetsspråk. At tradisjoner aldri overlever, er en for sterk påstand som materialet ikke støtter. Tilbakekobling forutsetter tvert imot noe å forankre seg i.",
    },
    {
      question: "Hva slags kobling gir best uttelling i et langsvar om globalisering?",
      options: ["At to etnografier settes eksplisitt opp mot hverandre og belyser samme kategori på ulike måter", "At så mange av de åtte nøkkelordene som mulig blir nevnt og forklart underveis i besvarelsen", "At besvarelsen viser til flere pensumtekster enn de tre som kreves, for å vise bredde i lesingen", "At hvert avsnitt behandler én pensumtekst grundig før den neste teksten introduseres i avsnittet etter"],
      explanation: "Riktig er den eksplisitte koblingen mellom to etnografier — det er akse 3, og den løfter fra god til meget god. Å nevne mange nøkkelord eller mange tekster uten kobling er bredde uten dybde. Ett avsnitt per tekst uten kobling er nettopp feil nummer 4, tekstene ramset opp side om side.",
    },
  ],
  'sosant1000-5-2': [
    {
      question: "Hva menes med at globalisering skaper nye avstander?",
      options: ["At de samme prosessene som knytter steder sammen, samtidig produserer nye former for atskillelse og utilgjengelighet", "At noen samfunn fortsatt ikke er nådd av globale forbindelser og derfor faller lenger og lenger bakpå", "At de geografiske avstandene mellom produsent og forbruker har økt i takt med at verdenshandelen har vokst", "At mennesker føler seg fremmedgjorte i en verden som forandrer seg raskere enn de klarer å følge med på"],
      explanation: "Riktig er at forbindelse og atskillelse produseres samtidig og av samme mekanisme. At noen ikke er nådd ennå, er nettopp den motsatte påstanden av den utsagnet fremsetter. Økte geografiske avstander og subjektiv fremmedgjøring er andre forhold enn de produserte avstandene begrepet handler om.",
    },
    {
      question: "Hva er kjernen i Ruben Anderssons argument i «Here be dragons»?",
      options: ["At bestemte områder gjøres om til soner som fremstilles som utilgjengelige og styres på avstand gjennom mellomledd", "At kartografien historisk har vært et redskap for kolonimaktenes kontroll over erobrede områder og deres ressursuttak", "At migranter velger stadig farligere ruter fordi de lovlige veiene er blitt stengt for dem", "At sikkerhetspolitikk er mer effektiv når den utformes lokalt enn når den utformes sentralt"],
      explanation: "Riktig er at områder gjøres til soner som fremstilles som utilgjengelige og styres på avstand — og at de dermed også blir steder det finnes lite kunnskap om. Tittelens kartmetafor er en inngang til argumentet, ikke argumentet selv. De to øvrige svarene er andre debatter enn den teksten fører.",
    },
    {
      question: "Hva menes med skalapolitikk, «politics of scale»?",
      options: ["At nivåer som lokalt, nasjonalt og globalt ikke ligger ferdig i verden, men produseres politisk med konsekvenser for ansvar og talerett", "At politiske beslutninger bør fattes på det nivået som ligger nærmest dem beslutningen angår og som derfor kjenner forholdene best i praksis", "At store politiske spørsmål krever internasjonale institusjoner mens små spørsmål kan løses lokalt av kommunale myndigheter med lokalkunnskap", "At verdens politiske geografi endrer seg når nye stater dannes og gamle grenser trekkes om"],
      explanation: "Riktig er at skala produseres politisk, og at valget av skala plasserer ansvar, virkemidler og talerett. Prinsippet om beslutninger nærmest den berørte er en normativ politisk regel, ikke det analytiske poenget. Endring av statsgrenser er en helt annen sak enn hvilken skala en sak plasseres på.",
    },
    {
      question: "Hva er den viktigste innvendingen mot å bruke «lokal» som synonym for «tradisjonell»?",
      options: ["At alt sosialt liv foregår lokalt, også det som organiserer globale strømmer, slik at det lokale ikke er noe eget stadium", "At tradisjoner endrer seg så raskt at ordet uansett har mistet sin analytiske verdi i faget etter at kulturbegrepet ble omdefinert", "At begrepet tradisjonell er nedvurderende og derfor bør unngås av hensyn til dem som omtales i etnografiske fremstillinger av dem", "At lokalsamfunn i dag har like god tilgang til teknologi som storbyer har i de fleste land med utbygd bredbånd og transport"],
      explanation: "Riktig er at alt sosialt liv foregår på konkrete steder, også finansmeglerens og forvalterens — det globale finnes ikke andre steder enn i lokale praksiser. Sammenblandingen låser analysen slik at den eneste mulige historien blir at det gamle taper. Spørsmålet om ordvalg og om teknologisk tilgang treffer ikke det analytiske problemet.",
    },
    {
      question: "Hvordan viser Millars materiale fra Jardim Gramacho både forbindelse og avstand?",
      options: ["Inntekten fulgte globale råvarepriser, samtidig som ingen på fyllinga hadde innflytelse over prisene eller informasjon om dem", "Arbeiderne solgte til utenlandske kjøpere direkte, men fikk aldri betalt det varene faktisk var verdt", "Fyllinga lå nær storbyen, men var likevel avskåret fra byens transportnett og offentlige tjenester", "Arbeiderne hadde mobiltelefon og internett, men manglet utdanningen som skulle til for å bruke dem"],
      explanation: "Riktig er at koblingen til verdensmarkedet gikk gjennom prisene, mens avstanden besto i manglende innflytelse, informasjon og bevegelsesmulighet. De to var to sider av samme kobling. De øvrige svarene beskriver forhold studien ikke gjør til sitt poeng.",
    },
    {
      question: "Hva er den vanligste feillesningen av Millars studie?",
      options: ["Å lese den som en elendighetsbeskrivelse, når poenget er at prekaritet er en livsform med egen rytme og relativ selvstendighet", "Å lese den som en studie av gjenvinningsindustrien, når den handler om byplanlegging i Rio de Janeiro og om reguleringen av avfallsnæringen", "Å tro at hun studerte arbeidere med fast ansettelse, når de fleste på fyllinga var selvstendige", "Å tro at hun bare gjorde intervjuer, når hun faktisk deltok i arbeidet på fyllinga over lang tid"],
      explanation: "Riktig er elendighetslesningen: Millar viste at folk vendte tilbake også når de hadde alternativer, fordi arbeidets rytme og selvstendighet passet et liv i vedvarende usikkerhet. Å gjøre studien til ren mangelbeskrivelse snur hovedpoenget på hodet, og det er en faglig feiltilskrivning, ikke en stilfeil.",
    },
    {
      question: "Hvordan produseres avstanden i verdikjeden i Liens materiale fra lakseoppdrett?",
      options: ["Standarden og sertifikatet gjør at den som steller fisken ikke ser markedet, og den som kjøper den ikke ser arbeidet", "Avstanden skyldes at oppdrettsanleggene ligger i grisgrendte strøk langt fra de store byene med gode transportforbindelser", "Avstanden skyldes at oppdretterne bevisst holder informasjon om produksjonen skjult for kjøperne og for myndighetene som fører tilsyn", "Avstanden skyldes at fisken fraktes over store geografiske avstander før den når forbrukeren"],
      explanation: "Riktig er at standarden står imellom og gjør de to endene uavhengige av hverandres kunnskap — avstanden er produsert av selve forbindelsen. Den geografiske avstanden er nettopp ikke poenget her. Studien beskriver heller ikke bevisst hemmelighold, men en systemvirkning av standardisering.",
    },
    {
      question: "Hva er en presis beskrivelse av forholdet mellom Adivasi-områdene og verdensøkonomien i Shahs materiale?",
      options: ["Områdene er koblet til verdensøkonomien gjennom etterspørsel etter land og mineraler, med liten innflytelse den andre veien", "Områdene har vært isolert i århundrer og møter verdensøkonomien for første gang gjennom gruvedriften som ble startet av utenlandske selskaper", "Områdene har samme tilknytning til verdensøkonomien som resten av India, men lavere inntektsnivå og svakere utbygde offentlige tjenester", "Områdene er koblet til verdensøkonomien gjennom eksport av landbruksvarer til det internasjonale markedet gjennom mellomledd i storbyene"],
      explanation: "Riktig er den ensidige koblingen gjennom etterspørsel etter land og ressurser, med en lang historie av frarøvelse bak seg. Påstanden om århundrers isolasjon er historisk gal og er selve forestillingen materialet motsier. At tilknytningen skulle være som ellers i landet, er heller ikke det studien viser.",
    },
    {
      question: "Hva kreves for at et langsvar skal regnes å ha koblet tekstene?",
      options: ["At minst to av dem settes eksplisitt i forhold til hverandre på en felles akse, slik at forskjellen blir et poeng", "At alle tekstene nevnes i samme avsnitt i stedet for å behandles hver for seg i besvarelsen", "At tekstene presenteres i den rekkefølgen de står på pensumlista for emnet", "At besvarelsen viser til flere tekster enn de tre som kreves, for å dokumentere bredde"],
      explanation: "Riktig er den eksplisitte koblingen på en felles akse — det er akse 3, markøren for meget god. Å nevne tekstene i samme avsnitt uten å relatere dem er fortsatt feil nummer 4. Verken rekkefølge eller antall utover minstekravet måles.",
    },
    {
      question: "Hva kjennetegner sjangeren påstandsdrøfting?",
      options: ["At utsagnet skal prøves: motparten får sitt beste argument, påstanden nyanseres, og landingen begrunnes", "At kandidaten skal ta klart standpunkt i første avsnitt og deretter forsvare det gjennom hele besvarelsen", "At kandidaten skal unngå å ta standpunkt, siden faget krever nøytralitet i verdispørsmål i spørsmål som berører ulike grupper", "At utsagnet skal plasseres i sin faghistoriske sammenheng før det eventuelt vurderes"],
      explanation: "Riktig er at påstanden skal prøves, ikke bekreftes eller avvises mekanisk. Standpunktet er fritt — både en skarp og en avveiende landing kan gi toppkarakter — men den må begrunnes. Å unngå standpunkt er ikke nøytralitet, det er en unnvikelse og regnes som feil nummer 3.",
    },
    {
      question: "Hvorfor er det galt å si at immobilitet er en opprinnelig tilstand?",
      options: ["Fordi immobilitet produseres aktivt av visumregimer, grensekontroll, gjeld, papirløshet og kostnader ved å reise", "Fordi alle mennesker i utgangspunktet er mobile og bare bosetter seg når de tvinges til det av økonomiske eller politiske forhold", "Fordi begrepet immobilitet bare gjelder varer og kapital, ikke mennesker og deres bevegelser over landegrensene i verdenshandelen", "Fordi de fleste mennesker i verden i dag faktisk flytter minst én gang i løpet av livet"],
      explanation: "Riktig er at immobilitet produseres av konkrete mekanismer, og at spørsmålet derfor blir hvem som holder folk der og hvem som tjener på det. Å behandle immobilitet som utgangstilstand gjør spørsmålet til hvorfor noen ennå ikke er blitt del av verden, og det er ikke et antropologisk spørsmål.",
    },
    {
      question: "Hva er poenget med å si at kolonial historie er en globaliseringsdriver?",
      options: ["At den forklarer hvorfor forbindelsene har den formen de har — hvem som leverer råvarer, hvilke språk som gjelder, hvor grensene går", "At den viser at globaliseringen egentlig var ferdig før vår egen tid og derfor ikke er et nytt tema, slik at faget bør studere andre spørsmål", "At den plasserer moralsk ansvar for dagens ulikhet hos de tidligere kolonimaktene, og at dette ansvaret bør følges opp med økonomisk kompensasjon", "At den forklarer hvorfor antropologien har hatt mest interesse for samfunn utenfor Europa og for de tidligere koloniene spesielt"],
      explanation: "Riktig er at den kolonale historien forklarer formen på dagens forbindelser. Poenget brukes analytisk, ikke som moralsk tilleggsmerknad, og det er nettopp derfor sensorveiledningene knytter det til meget god. At globaliseringen skulle være ferdig, følger ikke av at forbindelsene er gamle.",
    },
    {
      question: "Hva er mobilitetens ulikhet?",
      options: ["At retten og evnen til å bevege seg er skjevt fordelt, og at noens bevegelsesfrihet ofte hviler på at andre holdes i ro", "At noen reiser mer enn andre fordi de har mer fritid og høyere inntekt til rådighet", "At migrasjonsstrømmene går fra fattige til rike land og aldri den motsatte veien", "At transportkostnadene har falt raskere for varer enn for mennesker de siste tiårene"],
      explanation: "Riktig er den skjeve fordelingen av rett og evne til bevegelse, og at bevegelsesfrihet er en relasjon og ikke bare en egenskap ved den enkelte. Ulike reisevaner er en overflatebeskrivelse av det samme. At strømmene bare går én vei, er empirisk feil og er heller ikke begrepets innhold.",
    },
    {
      question: "Hvordan skiller turisme og arbeidsmigrasjon seg som globaliseringsdrivere?",
      options: ["Arbeidsmigrasjon flytter mennesker mot kapitalen, mens turisme flytter kapital mot steder der arbeidskraften er billig", "Arbeidsmigrasjon er varig mens turisme er midlertidig, og bare det varige har sosiale følger for dem som blir igjen hjemme", "Arbeidsmigrasjon rammer bare fattige land, mens turisme rammer både rike og fattige land likt", "Arbeidsmigrasjon er politisk regulert mens turisme foregår helt uten statlig innblanding"],
      explanation: "Riktig er at de to bevegelsene går i motsatt retning i forhold til hvor kapitalen er. Begge har dyptgripende sosiale følger, både i avsenderstedet og mottakerstedet, og begge er politisk regulert. Poenget som løfter et svar er at begge samtidig kan forsterke det lokale — turismen selger gjerne stedets særpreg.",
    },
    {
      question: "Hva bør et lokal/global-langsvar ha av tekster for å stå støtt?",
      options: ["Minst én etnografi som bærer belegget, siden argumenttekster alene ikke tilfredsstiller kravet om etnografisk forankring", "Minst tre argumenttekster, siden drøftingen er det som premieres og etnografien bare er illustrasjon av de teoretiske hovedpoengene", "Utelukkende etnografier, siden argumenttekster ikke regnes som pensumtekster i denne sammenhengen på linje med etnografiske monografier", "Tekster fra samme del av pensum, slik at framstillingen blir sammenhengende og ikke spriker"],
      explanation: "Riktig er at minst én etnografi må bære belegget: akse 1, etnografisk forankring, er den viktigste av de fire aksene. Et svar med bare argumenttekster mangler den uansett hvor mange forfattere som er navngitt. Argumenttekster er selvsagt pensum og skal brukes, men de rammer inn og belegger ikke.",
    },
    {
      question: "Hva er den beste testen på om en påstandsdrøfting faktisk har drøftet?",
      options: ["Om avslutningen kan byttes ut med «dette er en kompleks prosess med både positive og negative sider» uten at noe går tapt", "Om besvarelsen har brukt minst tre pensumtekster med forfatternavn og publiseringsår, og om årstallene er korrekt oppgitt i teksten", "Om besvarelsen har en tydelig innledning, hoveddel og avslutning med samme lengde, slik at teksten fremstår som gjennomarbeidet", "Om kandidaten har konkludert med at påstanden er riktig og deretter forklart hvorfor med henvisning til flere pensumtekster"],
      explanation: "Riktig er utbyttbarhetstesten: kan konklusjonen erstattes av en tom balansesetning, er påstanden ikke prøvd. Kildekravet og strukturen er nødvendige, men de sier ingenting om drøftingen faktisk er gjort. Å konkludere bekreftende er tillatt, men bare når påstanden er prøvd underveis.",
    },
    {
      question: "Hvorfor er formuleringen «forbindelse og avstand produseres samtidig» sterkere enn «globalisering har fordeler og ulemper»?",
      options: ["Fordi den peker på én mekanisme med to virkninger, i stedet for å sette opp et regnskap med to kolonner", "Fordi den er mer forsiktig og derfor mindre utsatt for kritikk fra sensor under vurderingen", "Fordi den bruker fagets egne ord og dermed viser at kandidaten har lest pensumlitteraturen", "Fordi den unngår å ta stilling, og fagets krav er at kandidaten skal forholde seg nøytral"],
      explanation: "Riktig er at den identifiserer en mekanisme, og at en mekanisme kan undersøkes etnografisk mens et regnskap ikke kan det. Formuleringen er ikke mer forsiktig, den er mer forpliktende. Og faget krever ikke nøytralitet — det krever at standpunktet begrunnes.",
    },
    {
      question: "Hva skjer analytisk når en konflikt defineres som «lokal» i stedet for «nasjonal»?",
      options: ["Ansvaret, virkemidlene og hvem som får uttale seg endres, selv om konflikten i seg selv er den samme", "Konflikten blir lettere å løse fordi de berørte partene kjenner hverandre og forholdene bedre fra før av", "Konflikten mister sin politiske karakter og blir et rent administrativt spørsmål for kommunen", "Konflikten dokumenteres dårligere fordi lokale myndigheter har svakere registreringssystemer"],
      explanation: "Riktig er at plasseringen på en skala fordeler ansvar, virkemidler og talerett — derfor er skalavalget selv et grep i striden. Om konflikten blir lettere å løse, er et empirisk spørsmål som varierer. Poenget er ikke dokumentasjonskvalitet, men hvem som får være part.",
    },
    {
      question: "Hvorfor kan ikke Eriksens grunnbok bære det etnografiske belegget i et lokal/global-langsvar?",
      options: ["Fordi den er en syntese og grunnbok uten eget feltmateriale, slik at etnografien må komme fra de andre tekstene", "Fordi den er skrevet på norsk og derfor ikke regnes som internasjonal faglitteratur i emnet på pensumlista", "Fordi den behandler globalisering for generelt til at eksemplene i den er relevante for oppgaven som ble stilt", "Fordi den er en lærebok, og lærebøker teller ikke med i kravet om minst tre pensumtekster"],
      explanation: "Riktig er at grunnboka er en syntese uten eget feltmateriale. Den teller selvsagt som pensumtekst og skal brukes til rasteret og begrepene — men belegget må hentes fra etnografiene. Språk og sjanger er ikke det avgjørende; det er skillet mellom syntese og feltmateriale.",
    },
    {
      question: "Hva menes med at avstanden i Anderssons analyse er «produsert»?",
      options: ["At den følger av sikkerhetsvurderinger, forsikringsordninger, politikk og regler om hvem som får bevege seg hvor", "At den skyldes at områdene faktisk er farligere enn andre steder og derfor unngås av gode grunner som alle kan etterprøve", "At den er skapt av mediene, som velger å ikke rapportere fra bestemte deler av verden over lengre perioder av gangen", "At den er skapt av teknologien, siden satellittovervåkning har erstattet menneskelig tilstedeværelse i felt"],
      explanation: "Riktig er at avstanden følger av politiske, sikkerhetsmessige og administrative beslutninger om bevegelse og tilstedeværelse. Mediedekning og teknologi er deler av bildet, men de er virkninger av og virkemidler i den samme produksjonen. Å forklare avstanden med at områdene «bare er farlige», er nettopp å ta den for gitt.",
    },
    {
      question: "Hva er det sterkeste grepet når to etnografier skal settes opp mot hverandre?",
      options: ["Å bestemme én akse på forhånd og behandle begge studiene på den, slik at forskjellen mellom dem blir poenget", "Å beskrive den ene studien fullstendig og deretter den andre, og til slutt oppsummere begge", "Å velge to studier fra samme verdensdel, slik at sammenligningen ikke blir for vidtfavnende", "Å finne to studier som viser det samme, slik at konklusjonen står støtt på to uavhengige belegg"],
      explanation: "Riktig er å bestemme aksen først og behandle begge på den — da blir forskjellen et argument. Å beskrive dem etter tur er nettopp feil nummer 4. Verken geografisk nærhet eller at studiene viser det samme, er det som gir uttelling: sammenligningen skal få frem noe ingen av dem sier alene.",
    },
    {
      question: "Hva innebærer helhetsvurderingen når det gjelder kravet om tre pensumtekster?",
      options: ["At sensor vurderer eksamen samlet, slik at gode kortsvar kan veie opp for et langsvar med færre tekster", "At kravet om tre tekster bortfaller dersom kandidaten skriver et særlig langt og velformulert langsvar", "At kandidaten selv kan velge om kravet skal gjelde, så lenge valget begrunnes i innledningen til sensor på forhånd", "At tre tekster nevnt alltid er tilstrekkelig, uavhengig av om de brukes til noe i argumentet"],
      explanation: "Riktig er at eksamen veies som helhet, slik at dokumentert pensumbeherskelse i kortsvarene kan kompensere. Det er et sikkerhetsnett, ikke en plan. Kravet bortfaller ikke ved lengde eller egen begrunnelse, og tre tekster nevnt uten bruk oppfyller ikke kravet i det hele tatt.",
    },
  ],
  'sosant1000-6-1': [
    {
      question: "Hva menes med natur/kultur-dikotomien?",
      options: ["Det motsetningsparet som deler verden i et biologisk gitt og et menneskeskapt, og som antropologien behandler som analyseobjekt", "Den vitenskapelige arbeidsdelingen mellom naturfagene og de samfunnsvitenskapelige fagene i universitetssystemet", "Konflikten mellom naturvern og næringsinteresser i saker om arealbruk og ressursutvinning", "Forestillingen om at mennesket står over naturen og derfor har rett til å utnytte den"],
      explanation: "Riktig er motsetningsparet som deler verden i to, og som faget behandler som noe som er blitt til, ikke som et faktum om verden. Arbeidsdelingen mellom fagene og konflikten om arealbruk er virkninger av og arenaer for dikotomien, ikke dikotomien selv. Forestillingen om menneskets overhøyhet er en bestemt versjon av skillet, ikke skillet som sådan.",
    },
    {
      question: "Hva betyr det å problematisere natur/kultur-skillet?",
      options: ["Å vise at skillet selv er en klassifikasjon med en historie, og at grensen trekkes ulikt gjennom praksis", "Å benekte at det finnes biologiske forhold som virker uavhengig av hva mennesker mener om dem og av hva de gjør med dem", "Å hevde at naturvitenskapelig kunnskap ikke er bedre begrunnet enn noen annen beskrivelse av verden", "Å påpeke at mennesket har forandret naturen så mye at det ikke lenger finnes urørte områder"],
      explanation: "Riktig er at skillet er en klassifikasjon med historie, og at grensen trekkes gjennom praksis. Å benekte biologien er en overdrivelse pensum ikke står for og som lett felles med ett moteksempel. Å hevde at all kunnskap er like godt begrunnet, er å gli fra metodologisk til etisk relativisme.",
    },
    {
      question: "Hva viste Marianne Liens studie av oppdrettslaks?",
      options: ["At laksen blir til i skjæringspunktet mellom biologi, teknologi, marked og forvaltning, slik at skillet ikke gir analytisk grep", "At oppdrettslaksen er blitt så gjennomformet av mennesker at den må regnes som et rent kulturprodukt uten noen forbindelse til det biologiske", "At norsk oppdrettsnæring har lykkes bedre enn andre land fordi den kombinerer kunnskap og regulering på en måte andre land ikke har fått til", "At biologien til slutt setter grenser som verken teknologi eller marked klarer å overvinne"],
      explanation: "Riktig er at fisken blir til i skjæringspunktet, slik at ingen av kategoriene fanger den. Å lese studien som at laksen er blitt rent kulturell, gjenoppretter det skillet Lien viser at ikke holder — og det samme gjør den motsatte lesningen om at biologien til slutt vinner. Studien er ikke en vurdering av næringens suksess.",
    },
    {
      question: "Hva er naturalisering?",
      options: ["Å fremstille noe sosialt skapt som om det fulgte av naturen, og dermed som uforanderlig og hevet over diskusjon", "Å tilpasse en art til et nytt miljø slik at den etter hvert klarer seg uten menneskelig hjelp over flere generasjoner i det nye området", "Å gi en innvandrer statsborgerskap etter en fastsatt botid i landet, etter søknad og prøve i språk og samfunnskunnskap", "Å beskrive en kulturell praksis med begreper hentet fra biologien for å gjøre den forståelig for lesere uten faglig bakgrunn"],
      explanation: "Riktig er å fremstille det sosialt skapte som naturgitt — en maktoperasjon, fordi det gjør ordningen umulig å kreve endret. Motgiften er å vise variasjonen: finnes ordningen bare noen steder, kan den ikke følge av en natur alle deler. De øvrige svarene er andre betydninger av ordet i andre sammenhenger.",
    },
    {
      question: "Hva er et kunnskapsregime?",
      options: ["En ordnet måte å produsere, godkjenne og bruke kunnskap på, med egne institusjoner, autoriteter og framgangsmåter", "Summen av det en befolkning vet om sitt eget nærmiljø og sine egne næringsveier", "Et politisk styresett som bygger sine beslutninger på forskning i stedet for på ideologi", "Den mengden kunnskap som er tilgjengelig for offentligheten i et gitt samfunn på et gitt tidspunkt"],
      explanation: "Riktig er at et regime omfatter institusjoner, autoriteter og godkjenningsprosedyrer, ikke bare et sett ideer — det er derfor ordet regime er valgt. Lokal kunnskapsmengde og offentlig tilgjengelig informasjon er andre størrelser. Et kunnskapsregime er heller ikke et styresett.",
    },
    {
      question: "Hva hevder kritikken av «vestlige» kunnskapssystemer som enerådende?",
      options: ["At én måte å vite på er gjort til standard i institusjoner og forvaltning, slik at annen kunnskap må oversettes for å bli hørt", "At naturvitenskapelig kunnskap er verdiløs fordi den er blitt til i et bestemt historisk og politisk miljø snarere enn i et nøytralt rom", "At alle beskrivelser av naturen er like godt begrunnet og at valget mellom dem er et rent maktspørsmål", "At europeisk vitenskap har hentet det meste av sitt innhold fra kunnskapstradisjoner i andre verdensdeler"],
      explanation: "Riktig er at én måte å vite på er gjort til standard, med en kolonial historie bak seg, og at mye går tapt i oversettelsen. Å lese kritikken som en avvisning av naturvitenskapen eller som en påstand om at alt er like godt begrunnet, er stråmenn — og et svar som bygger på en stråmann er svakere enn ett som gjengir kritikken i sin sterkeste form.",
    },
    {
      question: "Hva viste Radhika Govindrajans materiale fra Kumaon-Himalaya?",
      options: ["At relasjoner mellom mennesker og dyr går på tvers av arter og binder sammen slektskap, økonomi og religion", "At dyreofring er en tradisjon som gradvis forsvinner når fjellbygdene kobles til det moderne India med skole og lønnsarbeid", "At husdyrhold i fjellområder er økonomisk avgjørende for hushold uten annen sikker inntekt gjennom hele året i fjellbygdene", "At religiøse forestillinger om dyr hindrer effektiv utnyttelse av husdyrbestanden i regionen"],
      explanation: "Riktig er de artsoverskridende relasjonene som binder sammen flere felt samtidig — et offerdyr er ofte et dyr husholdet har stelt og har et forhold til, og ofringen får mening gjennom det forholdet. De øvrige svarene er påstander studien ikke gjør, og det siste vurderer dessuten praksisen etter et effektivitetskriterium studien ikke bruker.",
    },
    {
      question: "Hva er definisjonsmakt over natur?",
      options: ["Makten til å avgjøre hvilken beskrivelse av et område som legges til grunn når noe skal bestemmes", "Retten til å utnytte naturressursene innenfor et bestemt geografisk område, slik loven i det enkelte land fastsetter den", "Statens myndighet til å vedta vernebestemmelser og forvalte nasjonalparker på vegne av fellesskapets langsiktige interesser", "Den vitenskapelige autoriteten til å klassifisere arter og økosystemer etter internasjonale standarder"],
      explanation: "Riktig er makten over hvilken beskrivelse som gjelder — for hver kategori bringer med seg sitt eget regelverk, sine egne myndigheter og sin egen liste over hvem som er part. Bruksrett og vedtaksmyndighet er følger av definisjonen, ikke definisjonsmakten selv. Vitenskapelig klassifisering av arter er et annet og snevrere forhold.",
    },
    {
      question: "Hva er det beste argumentet for å beholde natur/kultur-skillet som analytisk kategori?",
      options: ["At skillet finnes i materialet vi studerer, og at begrepet naturalisering forutsetter det", "At biologien er en objektiv realitet som samfunnsvitenskapen ikke har myndighet til å benekte", "At skillet er så innarbeidet i faget at det ville skape forvirring å avskaffe det nå", "At uten skillet kan ikke antropologien samarbeide med naturvitenskapelige fagmiljøer"],
      explanation: "Riktig er at skillet finnes i lovverk, forvaltning og hverdagsspråk, og at naturalisering som kritisk begrep forutsetter det — uten skillet kan man ikke si at noe er fremstilt som naturgitt. Argumentet om biologiens objektivitet treffer ikke, siden ingen benekter biologien. Innarbeiding og tverrfaglig samarbeid er ikke faglige argumenter for en analytisk kategori.",
    },
    {
      question: "Hva menes med formelen «skillet er ikke mitt utgangspunkt, det er min gjenstand»?",
      options: ["At man undersøker hvor grensen trekkes, av hvem og med hvilke følger, i stedet for å forutsette den", "At man må definere skillet nøyaktig i innledningen før man kan bruke det i analysen, slik at leseren vet hva som legges til grunn", "At skillet bare kan studeres i samfunn der det faktisk brukes av menneskene selv", "At antropologen bør holde sine egne oppfatninger om natur utenfor analysen"],
      explanation: "Riktig er at grensedragningen selv blir et empirisk spørsmål. Den formuleringen kan oppdage at grensen trekkes ulikt av røkteren, forvaltningen og markedet, og at uenigheten er der konfliktene oppstår. En presis definisjon i innledningen løser ikke problemet, siden skillet da fortsatt er premiss.",
    },
    {
      question: "Hvorfor er det galt å lese Liens studie som at oppdrett er «unaturlig»?",
      options: ["Fordi lesningen forutsetter at det finnes en naturlig laks som er noe helt annet, og dermed gjenoppretter skillet studien problematiserer", "Fordi Lien selv arbeider i oppdrettsnæringen og derfor ikke ville felt en slik dom, og fordi hun har arbeidet tett på næringens egne folk over flere år", "Fordi oppdrettslaksen genetisk sett er identisk med villaksen og derfor like naturlig, slik at ingen skiller lar seg opprettholde mellom dem", "Fordi antropologien ikke har som oppgave å vurdere om noe er bra eller dårlig"],
      explanation: "Riktig er at lesningen forutsetter en naturlig motpol og dermed gjenoppretter dikotomien. Genetiske likheter eller ulikheter er ikke det studien argumenterer fra. Og faget vurderer i høyeste grad — poenget er at denne bestemte dommen hviler på en forutsetning studien viser at ikke holder.",
    },
    {
      question: "Hva er forskjellen på metodologisk og etisk kulturrelativisme i møte med kunnskapsregimer?",
      options: ["Metodologisk krever at du forstår regimet på egne premisser før du vurderer det; etisk hevder at alle beskrivelser er like gyldige", "Metodologisk gjelder forskningsopplegget, mens etisk gjelder hvordan forskeren behandler sine informanter underveis i arbeidet med prosjektet", "Metodologisk brukes om samfunn utenfor Europa, mens etisk brukes om vårt eget samfunn, slik komparasjonen mellom dem krever av forskeren", "Metodologisk er en eldre posisjon som faget har forlatt til fordel for den etiske varianten, i takt med at faget har fått nye studieobjekter"],
      explanation: "Riktig er at det metodologiske er et forskningsprinsipp om forståelse før vurdering, mens det etiske er en langt mer omstridt påstand om likeverdig gyldighet som faget ikke forplikter seg på. Forskningsetikk i behandlingen av informanter er et tredje og eget spørsmål. Skillet gjelder alle samfunn, også vårt eget.",
    },
    {
      question: "Hva er den viktigste presiseringen om Janet Carstens arbeid fra Langkawi?",
      options: ["Hun viste at slektskap skapes gjennom delt mat, ildsted og bosted, ikke at biologi er irrelevant", "Hun viste at biologisk slektskap ikke har noen betydning i samfunn utenfor Europa", "Hun viste at adopsjon er like utbredt som biologisk foreldreskap i Sørøst-Asia", "Hun viste at slektskapsbegreper varierer så mye at sammenligning ikke er mulig"],
      explanation: "Riktig er at slektskap skapes gjennom delt substans og hverdagsliv, og at skillet mellom biologisk og sosialt ikke lar seg trekke rent. Å tilskrive henne påstanden om at biologi er irrelevant, er en klassisk feiltilskrivning. Studien handler heller ikke om utbredelsen av adopsjon eller om at sammenligning er umulig.",
    },
    {
      question: "Hvorfor er «alt henger sammen» et svakt analytisk utgangspunkt?",
      options: ["Fordi det ikke skiller noe fra noe, og analyse krever distinksjoner man kan arbeide med", "Fordi holismen som prinsipp er blitt forlatt av moderne antropologi til fordel for spesialisering", "Fordi påstanden ikke lar seg etterprøve med feltarbeid over en avgrenset periode på ett enkelt sted", "Fordi den fører til at forskeren må studere alt samtidig og derfor aldri blir ferdig"],
      explanation: "Riktig er at en påstand som ikke skiller noe fra noe, ikke gir analytisk grep. Holismen er tvert imot et bærende prinsipp i faget — men den er et metodisk krav om ikke å skjære ut ett felt på forhånd, ikke et krav om å beskrive alt. Det er nettopp derfor formuleringen må være mer presis enn «alt henger sammen».",
    },
    {
      question: "Hva er poenget med å si at natur/kultur-skillet har en kolonial historie?",
      options: ["At skillet spredte seg sammen med europeisk administrasjon, vitenskap og forvaltning, og derfor ikke er et nøytralt verktøy", "At kolonimaktene bevisst innførte skillet for å kunne rettferdiggjøre utnyttelsen av naturressurser i de erobrede områdene", "At antropologien selv oppsto i kolonitiden og derfor bør avvikle alle sine klassiske begreper som ble til i den samme perioden", "At samfunn utenfor Europa ikke hadde noen forestillinger om natur før europeerne kom"],
      explanation: "Riktig er at skillet spredte seg som del av et bestemt herredømme og derfor ikke kan brukes som nøytralt analytisk redskap. Påstanden om bevisst innføring går lenger enn materialet gir grunnlag for, og påstanden om at andre samfunn manglet naturforestillinger, er gal. At faget oppsto i kolonitiden, betyr ikke at alle begreper må forkastes.",
    },
    {
      question: "Hvilken rolle spiller Mary Douglas' teori i natur/kultur-stoffet?",
      options: ["Den leverer klassifikasjonsteorien: natur og kultur er et ordningssystem, og det som ikke passer, behandles som anomali", "Den viser at forestillinger om ren og uren natur bygger på hygieniske hensyn i alle samfunn, slik det ble antatt i eldre religionsforskning", "Den dokumenterer gjennom feltarbeid hvordan naturvernområder oppstår i moderne stater og hvem som får adgang til dem i praksis", "Den forklarer hvorfor bestemte dyr regnes som hellige i noen religioner og ikke i andre, og hvorfor forestillingene varierer så mye"],
      explanation: "Riktig er klassifikasjonsteorien: urenhet er «matter out of place», altså anomali i en orden, og natur/kultur er nettopp en slik orden. Hygieneforklaringen er den Douglas avviser, og å tilskrive henne den er den mest kjente feillesningen i pensum. Hennes arbeid handler ikke om moderne naturvernforvaltning.",
    },
    {
      question: "Hva tilfører etnografien i miljøspørsmål som naturvitenskapen ikke gir?",
      options: ["Kunnskap om hvordan tiltak virker inn i arbeidsliv og relasjoner, og hvorfor vedtak oppfattes som de gjør av dem som berøres", "Mer presise målinger av miljøvirkninger fordi forskeren er til stede over lang tid", "En vurdering av hvilke miljøtiltak som faglig sett er de mest effektive å iverksette", "Dokumentasjon av at lokal kunnskap alltid er mer treffsikker enn ekspertkunnskap"],
      explanation: "Riktig er kunnskapen om hvordan tiltak virker inn i sosialt liv og hvorfor de oppfattes som de gjør. Etnografi gir ikke mer presise fysiske målinger, og faget avgjør ikke hvilke tiltak som er mest effektive. Påstanden om at lokal kunnskap alltid er mest treffsikker, er en form for etisk relativisme faget ikke forplikter seg på.",
    },
    {
      question: "Hva menes med at natur er en kulturell kategori?",
      options: ["At hva som regnes som natur, hvor grensen går, og hva det innebærer å kalle noe naturlig, varierer og er noe mennesker gjør", "At naturen slik vi kjenner den, er skapt av menneskelig aktivitet gjennom flere tusen år, slik at ingenting av den er opprinnelig lenger", "At fjell, elver og dyr bare eksisterer i den grad mennesker har begreper om dem", "At naturopplevelser er kulturelt betinget og derfor oppleves ulikt av ulike mennesker"],
      explanation: "Riktig er at grensedragningen og dens følger varierer og er noe mennesker gjør. Poenget er ikke at fjell og fisk er innbilte — den lesningen er en overdrivelse som lett felles. At naturen fysisk er formet av mennesker, er et annet og empirisk spørsmål, og subjektive opplevelser er ikke det kategorien handler om.",
    },
    {
      question: "Hva kjennetegner en god landing i vippespørsmålet om skillet bør oppheves?",
      options: ["At valget begrunnes med etnografi og at motposisjonen har fått sitt beste argument, uansett hvilken vei man lander", "At man lander på at skillet bør oppheves, siden det er den posisjonen faget har samlet seg om etter en lang faglig diskusjon", "At man unngår å lande og i stedet konkluderer med at spørsmålet fortsatt er åpent i faget, slik at leseren selv kan ta stilling", "At man lander på at skillet bør beholdes, siden begreper ikke kan avskaffes ved vedtak"],
      explanation: "Riktig er at begrunnelsen premieres, ikke retningen — begge landinger kan gi toppkarakter. Faget har ikke samlet seg om én posisjon, og å unngå å lande er ikke nøytralitet, men en unnvikelse som regnes som feil nummer 3. Det avgjørende er at påstanden er prøvd.",
    },
    {
      question: "Hvilken kobling gir mest uttelling i et natur/kultur-langsvar?",
      options: ["Lien og Govindrajan på samme akse: hva som skjer med analysen når man nekter å sortere først", "Lien og Govindrajan hver for seg, slik at hver etnografi får den plassen den fortjener", "Så mange pensumtekster som mulig, for å vise bredde i lesingen av litteraturen på pensumlista for emnet", "Douglas og Carsten, siden begge er klassikere og gir besvarelsen faghistorisk tyngde i besvarelsen"],
      explanation: "Riktig er å sette Lien og Govindrajan på samme akse — én industriell næring i Norge, ett hushold i Himalaya, og samme analytiske poeng i begge. Å behandle dem hver for seg er nettopp feil nummer 4. Bredde uten kobling gir ikke uttelling, og valg av klassikere er ikke i seg selv et argument.",
    },
    {
      question: "Hvorfor er det en feil å behandle «vestlig» og «lokal» kunnskap som to enhetlige blokker?",
      options: ["Fordi skillet mellom formaliserbar og ikke-formaliserbar kunnskap løper tvers gjennom begge, slik Liens materiale viser", "Fordi begrepene er politisk ladede og derfor bør unngås i akademisk sammenheng", "Fordi lokal kunnskap i dag som regel er påvirket av skolegang og media og derfor ikke lenger er lokal", "Fordi vestlig vitenskap har spredt seg så mye at skillet ikke lenger har noen praktisk betydning"],
      explanation: "Riktig er at grensen går mellom kunnskap som lar seg formalisere og kunnskap som ikke gjør det — og at den løper tvers gjennom begge. Liens røkter har kroppslig erfaringskunnskap som ikke er den samme som målesystemenes, midt i et vitenskapelig regime. At begrepene er ladede, er ikke et argument for å slutte å analysere med dem.",
    },
    {
      question: "Hva er den vanligste selvmotsigelsen i besvarelser om natur/kultur?",
      options: ["Å hevde at man problematiserer skillet, og deretter bruke det som selvsagt gjennom hele besvarelsen", "Å bruke både Lien og Govindrajan, selv om de behandler helt ulike samfunn og situasjoner i samme besvarelse", "Å nevne kolonial historie i en oppgave som handler om samtidige miljøspørsmål", "Å skille mellom metodologisk og etisk relativisme i en oppgave om natur og kultur"],
      explanation: "Riktig er selvmotsigelsen mellom erklæringen og praksisen: å skrive om «hvordan kulturen forholder seg til naturen» etter å ha lovet å problematisere skillet. Å bruke to studier fra ulike samfunn er tvert imot komparasjon og gir uttelling, og både kolonial historie og relativismeskillet hører hjemme i dette stoffet.",
    },
    {
      question: "Hva er formålet med å behandle en sensitiv praksis som dyreofring i kontekst?",
      options: ["Å vise hvordan praksisen gir mening i sin sammenheng, uten at forståelse forveksles med tilslutning", "Å unngå å støte lesere som tilhører de gruppene praksisen beskrives hos i lærebøker og undervisning", "Å dokumentere at praksisen er mindre utbredt enn den kan virke utenfra, og dermed er et mindre problem", "Å vise at praksisen har en økologisk funksjon som gjør den nyttig, og som dermed rettferdiggjør at den fortsetter"],
      explanation: "Riktig er kontekstualiseringen som får praksisen til å fremstå sammenhengende, kombinert med at forståelse ikke er tilslutning. Å forklare hvordan noe gir mening forplikter deg ikke til noe. Å lete etter en funksjon som rettferdiggjør praksisen, er en helt annen og problematisk framgangsmåte.",
    },
  ],
  'sosant1000-6-2': [
    {
      question: "Hva menes med «sacrifice zones» eller offerområder?",
      options: ["Områder som systematisk ofres for at produksjon skal foregå, slik at gevinsten høstes et annet sted enn kostnaden bæres", "Områder der forurensningen er blitt så omfattende at de ikke lenger kan brukes til noe formål", "Områder som myndighetene har vedtatt å verne mot all form for næringsvirksomhet og bosetting", "Områder der befolkningen har akseptert miljøbelastning i bytte mot arbeidsplasser og inntekt"],
      explanation: "Riktig er at ofringen er systematisk og at gevinst og kostnad havner ulike steder — det er fordelingen som gjør begrepet analytisk. Å definere det som områder ødelagt av forurensning fjerner både systematikken og fordelingen, og er den vanligste flate definisjonen. Vernevedtak er en helt annen mekanisme.",
    },
    {
      question: "Hva er forskjellen mellom «sacrifice zones» og «shadow ecologies»?",
      options: ["Det første beskriver stedet som bærer kostnaden, det andre forbindelsen som flytter kostnaden dit", "Det første gjelder industriell produksjon, det andre gjelder landbruk og fiskeri i kystnære strøk", "Det første er et politisk begrep, det andre er et rent naturvitenskapelig måleredskap", "Det første gjelder synlige skader, det andre gjelder skader som først viser seg over tid"],
      explanation: "Riktig er skillet mellom sted og forbindelse: skyggevirkningen er mekanismen, offerområdet er resultatet. Begge begrepene brukes på tvers av næringer, og begge er analytiske og ikke måletekniske. Tidsdimensjonen er relevant for miljøulikhet generelt, men er ikke det som skiller de to.",
    },
    {
      question: "Hva er politisk økologi?",
      options: ["Retningen som studerer miljø og natur som arena for makt og interessekonflikt, ikke som nøytral bakgrunn", "Studiet av hvordan politiske partier utformer sin miljøpolitikk og hvordan velgerne reagerer på miljøtiltakene som vedtas", "En gren av økologien som undersøker hvordan menneskelig aktivitet påvirker økosystemers stabilitet", "Læren om at miljøproblemer best løses gjennom internasjonale avtaler mellom stater som forplikter partene rettslig"],
      explanation: "Riktig er studiet av miljø som arena for makt og interessekonflikt. Retningen behandler ikke miljøproblemer som feil som kan rettes med bedre kunnskap, men som utfall av maktforhold. Partipolitikk, økosystempåvirkning og internasjonalt avtaleverk er andre studieobjekter.",
    },
    {
      question: "Hva er poenget med sentrum- og periferilogikken i miljøstoffet?",
      options: ["Den forklarer hvorfor offerområdene ligger der de ligger, slik at mønsteret blir mer enn en samling enkelttilfeller", "Den viser at fattige land alltid bærer miljøkostnadene ved rike lands forbruk, uten unntak og uavhengig av politikk", "Den beskriver hvordan miljøbevegelser oppstår i sentrum og sprer seg utover til periferien til de områdene som rammes hardest", "Den forklarer hvorfor storbyer har større miljøbelastning enn spredtbygde områder, målt per innbygger og per arealenhet"],
      explanation: "Riktig er at logikken gjør enkelttilfeller til et mønster. To presiseringer hører med: sentrum og periferi er en relasjon og ikke et kart — det finnes periferier inne i rike land — og modellen forklarer mønsteret, men viser ikke hva det gjør med menneskers liv. Det siste er nettopp der antropologien kommer inn.",
    },
    {
      question: "Hvordan bør en kandidat koble Swansons begrep til Liens materiale?",
      options: ["Ved å si eksplisitt at anvendelsen er ens egen, siden Lien ikke selv bruker uttrykket «sacrifice zones»", "Ved å skrive at Lien påviser sacrifice zones i norsk oppdrettsnæring gjennom sitt feltarbeid", "Ved å behandle de to tekstene i hvert sitt avsnitt slik at hver får den plassen den fortjener", "Ved å erstatte Liens egne begreper med Swansons, siden de sistnevnte er mer presise"],
      explanation: "Riktig er å merke koblingen som ens egen anvendelse. Å skrive som om Lien selv brukte begrepet er en feiltilskrivning, og å tilskrive en etnografi en konklusjon den ikke trakk, er en faglig feil og ikke en stilfeil. To atskilte avsnitt uten kobling er dessuten feil nummer 4.",
    },
    {
      question: "Hva er frarøvelse (dispossession)?",
      options: ["Fratakelse av land, ressurser eller rettigheter gjennom lovverk, oppkjøp, tvang eller en kombinasjon", "Den fattigdommen som oppstår når en næring legges ned og arbeidsplassene forsvinner i lokalsamfunnet rundt", "Statens rett til å ekspropriere eiendom mot full erstatning når samfunnsinteresser krever det", "Tapet av kulturell identitet som følger når et lokalsamfunn kobles til det globale markedet"],
      explanation: "Riktig er fratakelsen av adgang og rettigheter, som regel som en langvarig prosess med lovlige og ulovlige midler om hverandre. Å bruke ordet som synonym for urettferdighet eller for kulturelt tap fjerner presisjonen — frarøvelse handler om rettigheter som overføres fra noen til andre, og det kan påvises konkret.",
    },
    {
      question: "Hva viste Alpa Shahs materiale om land og ressurser i det sentrale India?",
      options: ["At strid om land og mineraler er premisset for konflikten, og at frarøvelsen har en lang historie bak seg", "At gruvedriften startet etter årtusenskiftet og utløste en helt ny konflikt i regionen mellom staten og lokalbefolkningen", "At myndighetene har kompensert Adivasi-samfunn for tapt land gjennom egne utviklingsprogrammer finansiert over statsbudsjettet", "At geriljabevegelsen lyktes i å stanse utvinningsprosjektene i de områdene den kontrollerte"],
      explanation: "Riktig er at striden om land og mineraler er premisset, og at frarøvelsen er en langvarig prosess og ikke en ny hendelse. Å fremstille konflikten som nyoppstått er en historisk feil. Shah viser dessuten bevegelsens egne motsetninger og romantiserer den ikke.",
    },
    {
      question: "Hva er den viktigste presiseringen når Millars materiale brukes i en miljøanalyse?",
      options: ["At prekaritet er en livsform med egen rytme og relativ selvstendighet, ikke bare mangel", "At søppelplukkerne var organisert og derfor hadde forhandlingsmakt overfor kjøperne", "At fyllinga var et statlig anlegg og at ansvaret derfor lå hos myndighetene for driften av deponiet", "At arbeidet var midlertidig og at de fleste kom seg videre til formelt arbeid i byen etter noen år"],
      explanation: "Riktig er at prekaritet fremstår som en livsform med egen logikk — folk vendte tilbake også når de hadde alternativer. Elendighetslesningen snur hovedpoenget på hodet og gjør mennesker til passive ofre, noe som er både faglig galt og analytisk fattigere. De øvrige svarene beskriver forhold studien ikke viser.",
    },
    {
      question: "Hvorfor plasseres miljøkostnader systematisk bestemte steder?",
      options: ["Fordi de plasseres der motstanden er svakest, altså der partsstillingen og det politiske gjennomslaget er dårligst", "Fordi noen områder tåler belastning bedre enn andre ut fra rent økologiske hensyn", "Fordi transportkostnadene gjør det billigst å legge belastningen nær råvarekilden", "Fordi befolkningen i disse områdene har lavere krav til miljøkvalitet enn andre"],
      explanation: "Riktig er at kostnadene plasseres der motstanden er svakest — der partsstillingen er dårlig, eiendomsforholdene uklare og avstanden til beslutningstakerne stor. Økologisk bæreevne og transportøkonomi kan spille inn, men de forklarer ikke mønsteret. Påstanden om lavere krav hos befolkningen er en forklaring som flytter ansvaret til dem som rammes.",
    },
    {
      question: "Hva tilfører etnografien i miljøspørsmål som målinger og modeller ikke gir?",
      options: ["Kunnskap om hvordan tiltak virker inn i arbeidsliv og relasjoner, og om hvem som faktisk er part i beslutningen", "Mer presise anslag over miljøbelastningens omfang fordi forskeren er til stede over lang tid sammen med dem som berøres av tiltakene", "En faglig vurdering av hvilke miljøtiltak som er de mest effektive å iverksette først", "Dokumentasjon av at lokalbefolkningens vurdering av risiko er mer treffsikker enn ekspertenes"],
      explanation: "Riktig er kunnskapen om virkninger i sosialt liv og om partsstilling. Etnografien gir ikke bedre fysiske målinger og avgjør ikke hvilke tiltak som er mest effektive — å si dette selv er et pluss i en drøfting, ikke en innrømmelse. Påstanden om at lokal risikovurdering alltid er mest treffsikker, er en form for etisk relativisme faget ikke forplikter seg på.",
    },
    {
      question: "Hva er den mest presise måten å si at klimaendring er et sosialt fenomen?",
      options: ["At klimaendringen ikke er sosialt konstruert, men at klimapolitikken er sosialt produsert", "At klimaendringen er en fortolkning som varierer mellom ulike kunnskapsregimer i de enkelte landene", "At klimaendringen bare er et problem for de samfunnene som selv definerer den som et problem", "At klimaendringen er skapt av menneskelig aktivitet og derfor er samfunnsvitenskapens ansvarsområde"],
      explanation: "Riktig er skillet mellom den fysiske prosessen, som ikke er gjenstand for forhandling, og politikken, som er sosialt produsert. Å hevde at klimaendringen er en fortolkning, er en overdrivelse som lett felles og som glir over i etisk relativisme. At endringen er menneskeskapt, gjør den ikke til samfunnsvitenskapens enerett.",
    },
    {
      question: "Hvordan virker skalapolitikk i en miljøsak?",
      options: ["Valget av skala fordeler ansvar, virkemidler og talerett, og er derfor selv en del av striden", "Store miljøsaker må behandles på internasjonalt nivå, mens små kan avgjøres lokalt av kommunale myndigheter", "Skalaen bestemmes av hvor stort geografisk område forurensningen faktisk sprer seg over", "Skalaen har liten betydning så lenge de faglige vurderingene er de samme på alle nivåer"],
      explanation: "Riktig er at skalavalget fordeler ansvar, virkemidler og talerett — behandlet lokalt er naboene part, behandlet nasjonalt er bransjen og departementet det. Skalaen følger ikke automatisk av utbredelsen, og den er alt annet enn betydningsløs: den avgjør hvem som i det hele tatt blir hørt.",
    },
    {
      question: "Hvorfor er «shadow ecologies» et nyttig begrep for miljøregnskap?",
      options: ["Fordi det viser at et regnskap som bare teller innenfor en grense, systematisk undervurderer virkningene", "Fordi det gjør det mulig å tallfeste utslipp som tidligere ikke lot seg måle", "Fordi det fastslår hvilke aktører som juridisk har ansvar for indirekte miljøvirkninger", "Fordi det viser at miljøvirkninger alltid er større enn de først antas å være"],
      explanation: "Riktig er at begrepet avdekker virkninger som faller utenfor regnskapets grense — fôrproduksjon er det klassiske eksempelet. Begrepet er analytisk, ikke måleteknisk eller juridisk, og det sier ikke noe generelt om at virkninger alltid er større, men om hvor de havner.",
    },
    {
      question: "Hva er den vanligste enkeltfeilen i miljø-langsvar?",
      options: ["Å nevne Swanson og en etnografi etter tur uten å koble dem, og avslutte med at begge handler om miljø", "Å bruke for mange pensumtekster slik at ingen av dem blir behandlet grundig nok innenfor rammen av en firetimers eksamen", "Å legge for stor vekt på naturvitenskapelig kunnskap i en samfunnsvitenskapelig besvarelse", "Å skrive om klima når oppgaven handler om natur, siden dette er to atskilte temaer i pensum"],
      explanation: "Riktig er den manglende koblingen, altså feil nummer 4. Den er unødvendig i dette stoffet, siden Swanson gir begrepet og etnografien gir mekanismen — koblingen ligger rett foran kandidaten. For mange tekster er sjelden problemet, og natur og klima er ikke atskilte temaer i pensum.",
    },
    {
      question: "Hva er den riktige avgrensningen av påstanden om at antropologien gir viktige innsikter om miljø?",
      options: ["At faget viser hvordan kostnader fordeles, hvem som er part og hva som faller utenfor regnskapet", "At faget gir den mest komplette forståelsen av miljøkrisen fordi det ser helheten på tvers av felt", "At faget kan avgjøre hvilke miljøtiltak som bør iverksettes i hvilke rekkefølge, og i hvilken skala", "At faget dokumenterer at lokale løsninger er bedre enn sentralt vedtatte tiltak"],
      explanation: "Riktig er den snevre og dermed sterkeste formuleringen: fordeling, partsstilling og det som faller utenfor. Påstanden om den mest komplette forståelsen er en overdrivelse som er lett å felle, og faget avgjør verken tiltaksrekkefølge eller at lokale løsninger generelt er best.",
    },
    {
      question: "Hva er holisme anvendt på en miljøkonflikt?",
      options: ["At konflikten ikke lar seg skille fra økonomi, politikk, slektskap og historie, slik at et rent teknisk blikk kommer til kort", "At forskeren må beskrive alle sider ved konflikten uten å utelate noe vesentlig, også de forholdene som ikke har betydning for utfallet", "At miljøet må forstås som ett sammenhengende økosystem der alt påvirker alt, der arter og prosesser griper inn i hverandre på alle nivåer", "At konflikten må studeres over lang tid for at alle årsakssammenhenger skal bli synlige, også de som først viser seg lenge etter at tiltaket er satt i verk"],
      explanation: "Riktig er at feltene ikke lar seg skille rent fra hverandre. Holisme er et metodisk krav om ikke å skjære ut ett felt på forhånd, ikke et krav om fullstendighet — den forskjellen er avgjørende, siden den første lesningen gjør oppgaven umulig og den andre gjør den skarpere.",
    },
    {
      question: "Hva er den viktigste innvendingen mot å bruke «makt» som forklaring i miljøanalyse?",
      options: ["At et begrep som forklarer enhver skjevhet, ikke forklarer noe presist — mekanismen må pekes ut i hvert tilfelle", "At maktbegrepet hører hjemme i politisk antropologi og ikke i miljøantropologi", "At det er umulig å påvise makt empirisk gjennom deltagende observasjon", "At maktanalyse gjør forskeren til part i konflikten og dermed svekker objektiviteten"],
      explanation: "Riktig er at et begrep som forklarer alt, forklarer lite presist — motgiften er å peke ut mekanismen: hvem som var part, hvilken beskrivelse som ble lagt til grunn, hvilken skala saken ble behandlet på. Makt lar seg i høy grad undersøke etnografisk, og analyse gjør ikke i seg selv forskeren til part.",
    },
    {
      question: "Hvorfor er det galt å beskrive et offerområde som «uheldig»?",
      options: ["Fordi ofringen er systematisk: området er valgt eller er blitt et sted hvor slikt legges, ikke rammet av tilfeldigheter", "Fordi uttrykket bagatelliserer alvoret i miljøbelastningen for dem som bor der og for dem som skal rydde opp etterpå", "Fordi områdene som regel har fått kompensasjon og derfor ikke kan kalles uheldige", "Fordi ordet uheldig forutsetter at noen kunne ha handlet annerledes, og det kan ikke påvises"],
      explanation: "Riktig er at systematikken er selve poenget — mønsteret følger partsstilling og sentrum- og periferilogikk, ikke tilfeldigheter. Innvendingen er analytisk, ikke retorisk, og den handler ikke om kompensasjon. At noen kunne handlet annerledes er tvert imot forutsetningen for at det er verdt å analysere.",
    },
    {
      question: "Hvilken akse binder Lien, Shah og Millar sammen i et miljø-langsvar?",
      options: ["Hvem som er part i beslutningen om området, og hva slags kunnskap som teller der", "Hvor stor miljøbelastningen er i hvert av de tre tilfellene sammenlignet med hverandre over tid", "I hvilken grad menneskene i hvert tilfelle er avhengige av naturressurser i det daglige", "Hvor langt de tre stedene ligger fra det globale markedets sentrum"],
      explanation: "Riktig er partsstillingen og kunnskapen som teller — alle tre tekstene har noe å si på nettopp den, og da blir forskjellen mellom dem poenget. Belastningens størrelse er nettopp ikke det som avgjør hvem som bærer den, og geografisk avstand er en for grov akse for en relasjonell logikk.",
    },
    {
      question: "Hva er den viktigste forskjellen mellom formell og reell partsstilling i en miljøsak?",
      options: ["At retten til å uttale seg ikke er det samme som å ha innflytelse, siden sjanger, organisasjon og frister avgjør hvem som når frem", "At formell partsstilling gjelder grunneiere mens reell partsstilling gjelder alle som berøres av vedtaket, uansett hvor de bor i forhold til anlegget", "At formell partsstilling reguleres av loven mens reell partsstilling avgjøres av domstolene i ettertid dersom en av partene bringer saken inn for dem", "At formell partsstilling er den samme i alle land mens reell partsstilling varierer med politisk system og med graden av lokalt selvstyre i landet"],
      explanation: "Riktig er at en formelt åpen prosess kan være reelt lukket for den som ikke behersker sjangeren eller mangler organisasjon. Dette er den mest presise miljøanalytiske aksen, fordi den lar svært ulike tilfeller sammenlignes på samme spørsmål. De øvrige svarene beskriver juridiske forhold og ikke skillet mellom formell rett og faktisk innflytelse.",
    },
    {
      question: "Hvorfor kan et vernevedtak virke på samme måte som en utvinningskonsesjon for dem som bor i et område?",
      options: ["Fordi begge regulerer adgang, slik at den som har levd av området kan miste den uansett begrunnelse", "Fordi begge medfører at området blir stengt for all menneskelig ferdsel i overskuelig framtid", "Fordi begge gir grunneieren erstatning mens brukerne uten papirer blir stående uten noe", "Fordi vernevedtak i praksis alltid følges av utbygging til reiseliv i de samme områdene"],
      explanation: "Riktig er at begge regulerer adgang — den ene fordi noe skal tas ut, den andre fordi ingenting skal det. Poenget er ikke at vern er galt, men at hvem som er part i beslutningen, avgjør hvordan vernet utformes. Forestillingen om uberørt natur forutsetter dessuten natur/kultur-skillet, som gir dårlig mening der mennesker har formet landskapet i generasjoner.",
    },
    {
      question: "Hva er en presis måte å beskrive Wallersteins verdenssystemteori i et miljøsvar?",
      options: ["Som en økonomisk-historisk modell som forklarer mønsteret, men ikke viser hva det gjør med menneskers liv", "Som en etnografisk studie av hvordan råvareproduserende områder utnyttes av industriland over flere hundre år", "Som en teori antropologien har forlatt fordi den er for grovmasket for etnografisk arbeid", "Som en beskrivelse av hvilke land som er rike og hvilke som er fattige i verdensøkonomien"],
      explanation: "Riktig er at teorien er en modell som forklarer mønsteret, mens det er antropologien som viser hva mønsteret gjør med liv — å si dette er en presis måte å begrunne fagets bidrag på. Teorien er ikke en etnografi, og sentrum og periferi er en relasjon, ikke et kart over rike og fattige land.",
    },
    {
      question: "Hva menes med miljøulikhet i tid?",
      options: ["At kostnader som først kommer om tiår, bæres av mennesker som ikke er part i dagens beslutninger", "At miljøbelastningen har økt jevnt siden industrialiseringen og fortsetter å øke i takt med produksjonsveksten", "At noen områder tar lengre tid å restaurere enn andre etter samme belastning, avhengig av grunnforhold og klima", "At sesongvariasjoner gjør at belastningen fordeler seg ujevnt gjennom året"],
      explanation: "Riktig er at fremtidige kostnader bæres av mennesker uten partsstilling i dag — det er samme mekanisme som fordelingen i rom, forskjøvet i tid. De øvrige svarene beskriver fysiske forhold ved belastning og restaurering, ikke fordelingen av den.",
    },
    {
      question: "Hvorfor er det verdt å si selv hva etnografien ikke kan, i en drøfting av fagets miljøbidrag?",
      options: ["Fordi en avgrenset påstand er vanskeligere å felle, og fordi det viser at påstanden faktisk er prøvd", "Fordi sensor forventer at kandidaten skal være ydmyk på fagets vegne i alle besvarelser uansett hvilket tema oppgaven har", "Fordi det er et krav i alle påstandsdrøftinger at kandidaten oppgir minst tre svakheter ved det faget som drøftes", "Fordi faget offisielt har erkjent at det ikke kan bidra med kunnskap om fysiske miljøforhold i sine egne studier"],
      explanation: "Riktig er at en avgrenset påstand er sterkere, og at innvendingen viser at utsagnet er prøvd — det er nettopp det sjangeren krever. Ydmykhet er ikke et vurderingskriterium, og det finnes ingen regel om et bestemt antall svakheter.",
    },
  ],
  'sosant1000-7-1': [
    {
      question: "Hvem formulerte begrepet strukturell vold?",
      options: ["Johan Galtung, i 1969 — Paul Farmer gir det senere etnografisk innhold gjennom arbeidet på Haiti", "Paul Farmer, gjennom sitt arbeid på Haiti, der begrepet ble utviklet ut fra medisinsk praksis", "E.E. Evans-Pritchard, som en videreutvikling av analysen av konflikt i statsløse samfunn", "Alpa Shah, i analysen av statens frarøvelse av land fra Adivasi i det sentrale India"],
      explanation: "Riktig er at begrepet er Galtungs fra 1969 og at Farmer anvender det. Å tilskrive Farmer opphavet er den vanligste feiltilskrivningen i maktstoffet, og å ha det riktig er en billig presisjon som slår ut på presisjonsaksen. Verken Evans-Pritchard eller Shah arbeider med dette begrepet.",
    },
    {
      question: "Hva kjennetegner strukturell vold?",
      options: ["Den er systematisk, uten identifiserbar gjerningsperson, og historisk skapt gjennom bestemte prosesser", "Den utøves av statlige myndigheter mot grupper som mangler politisk beskyttelse i lovverket eller i praksis", "Den er mer omfattende enn direkte vold, men rammer på samme måte og med samme midler", "Den oppstår når samfunnets institusjoner bryter sammen og ordenen ikke lenger opprettholdes"],
      explanation: "Riktig er de tre kjennetegnene, der særlig det siste er avgjørende: uten at strukturene er historisk skapte, blir strukturell vold en naturtilstand og begrepet mister sin kritiske kraft. Vold utøvd av myndigheter mot en gruppe er direkte vold med gjerningsperson, og sammenbrudd i institusjoner er noe helt annet.",
    },
    {
      question: "Hva er forskjellen på direkte og strukturell vold?",
      options: ["Direkte vold har en handling, en gjerningsperson og et tidspunkt; strukturell vold er et skademønster uten ansvarlig enkeltperson", "Direkte vold rammer kroppen, mens strukturell vold rammer psyken og selvfølelsen, og de to formene har derfor helt ulike årsaker og virkninger", "Direkte vold er ulovlig, mens strukturell vold skjer innenfor lovens rammer i alle tilfeller, uten at noen kan holdes rettslig ansvarlig for den", "Direkte vold er individuell, mens strukturell vold alltid rammer en hel befolkning likt"],
      explanation: "Riktig er skillet mellom handling med ansvarlig og fordeling uten ansvarlig. Strukturell vold rammer i høyeste grad kropper — gjennom sykdom og tidlig død — og den rammer nettopp ikke likt, men systematisk skjevt. At noe er lovlig, er heller ikke det avgjørende kjennetegnet.",
    },
    {
      question: "Hva viste Evans-Pritchards studie av Nuer om politisk orden?",
      options: ["Orden uten sentralstat, der grupper fusjonerte og splittet seg etter hvilket slektskapsnivå konflikten lå på", "En form for anarki der konflikter ble avgjort ved vold mellom slektsgrupper uten regler i lange perioder av året", "Et sentralisert høvdingdømme der én avstamningsgruppe hadde myndighet over de andre gjennom flere generasjoner", "At politiske beslutninger ble fattet i råd av eldre menn med formell myndighet over gruppen og over de tilstøtende områdene"],
      explanation: "Riktig er orden uten sentralstat gjennom segmentær organisering, der balansen mellom gruppene var selve ordensmekanismen. Å oversette dette til anarki snur analysen på hodet og er den vanligste feilen i Nuer-svar. Verken høvdingdømme eller formelle råd beskriver det Evans-Pritchard fant.",
    },
    {
      question: "Hva er segmentær organisering?",
      options: ["At samfunnet er bygget av grupper som ligger inne i hverandre etter avstamning, og som fusjonerer og splittes etter konfliktens nivå", "At samfunnet er delt i yrkesgrupper som hver har sitt avgrensede ansvarsområde", "At befolkningen er delt i aldersgrupper som gradvis overtar politisk myndighet fra hverandre", "At landområdet er delt i segmenter med hver sin leder underlagt en felles øverste myndighet"],
      explanation: "Riktig er de innkapslede avstamningsgruppene som fusjonerer og splittes etter konfliktnivå. Det er dette som gir orden uten stat: hver enhet vet at motparten kan mobilisere støtte på samme nivå. Yrkesgrupper, aldersgrupper og territorielle inndelinger under en felles myndighet er andre organisasjonsformer.",
    },
    {
      question: "Hva er frarøvelse (dispossession)?",
      options: ["Fratakelse av land, ressurser eller rettigheter gjennom lovverk, oppkjøp, tvang eller en kombinasjon, som regel over lang tid", "Den fattigdommen som oppstår når en gruppe mister sitt tradisjonelle levebrød til ny teknologi, og som rammer hele lokalsamfunn samtidig", "Statens rett til å ekspropriere eiendom mot full erstatning når samfunnsinteresser krever det", "Tapet av kulturell identitet som følger av at et lokalsamfunn kobles til det globale markedet"],
      explanation: "Riktig er fratakelsen av adgang og rettigheter, som regel som en prosess og ofte formelt lovlig — det er nettopp derfor begrepet trengs. Å bruke ordet som synonym for fattigdom eller kulturelt tap fjerner presisjonen. Ekspropriasjon med full erstatning er én mulig form, ikke selve begrepet.",
    },
    {
      question: "Hva er den viktigste presiseringen om marginalisering?",
      options: ["At marginalisering ikke er det samme som å være utenfor: gruppen er tett koblet til systemene, men på andres premisser", "At marginalisering alltid rammer grupper som skiller seg ut kulturelt eller språklig fra flertallet i det landet de bor i", "At marginalisering er et resultat av at en gruppe har valgt å holde seg utenfor storsamfunnet og sine egne institusjoner", "At marginalisering opphører så snart gruppen får formelle rettigheter på linje med andre"],
      explanation: "Riktig er at marginaliserte grupper som regel er tett koblet til de store systemene som leverandører av arbeidskraft, land eller ressurser — utenfor beslutningene, innenfor kretsløpet. Kulturelle særtrekk er ikke en forutsetning, og formelle rettigheter uten reell partsstilling endrer lite.",
    },
    {
      question: "Hva menes med at makt er en relasjon og ikke en eiendel?",
      options: ["At man har makt over noen, i en bestemt sammenheng, med bestemte midler — ikke en mengde makt man eier", "At makt bare eksisterer når to parter er enige om hvem som skal bestemme, og at makt derfor forutsetter en form for samtykke", "At makt fordeles jevnt mellom alle deltakere i en relasjon over tid, slik at ingen av dem blir varig underlegen", "At makt bare kan studeres i små samfunn der alle kjenner hverandre personlig gjennom hele livsløpet sitt"],
      explanation: "Riktig er at makt alltid er makt over noen, i en sammenheng, med midler — og at formuleringen tvinger frem tre spørsmål som kan besvares etnografisk. Å skrive at en gruppe har all makten er å gi opp analysen. Makt forutsetter verken enighet eller jevn fordeling.",
    },
    {
      question: "Hva er hverdagsmotstand?",
      options: ["Motstandens udramatiske former — å arbeide sakte, unnlate, tolke regler bokstavelig, late som man ikke forsto", "Motstand som utøves av enkeltpersoner uten tilknytning til noen organisert bevegelse", "Den motstanden folk møter i hverdagen fra byråkratiet og fra offentlige institusjoner", "Protester og demonstrasjoner som er blitt så vanlige at de inngår i normalt politisk liv"],
      explanation: "Riktig er de udramatiske formene som ikke setter spor i arkiver, og som bare kan oppdages gjennom langvarig deltagende observasjon. Poenget er at et samfunn som ser stille ut, ikke nødvendigvis er uten motstand. Organiserte protester er nettopp den åpne formen, ikke hverdagsformen.",
    },
    {
      question: "Hva er den viktigste innvendingen mot å romantisere motstandsbevegelser?",
      options: ["At en bevegelse rekrutterer fra samfunnet rundt seg og bringer med seg dets ulikheter, slik Shahs materiale viser", "At motstandsbevegelser sjelden lykkes i å oppnå de målene de setter seg, verken politisk eller økonomisk, over tid", "At forskeren mister sin objektivitet dersom hun sympatiserer med dem hun studerer", "At motstand alltid fører til mer vold enn den forhindrer på lengre sikt"],
      explanation: "Riktig er at bevegelser bringer med seg samfunnets ulikheter — hos Shah et lederskap i stor grad rekruttert fra høyere kaster og en kjønnsulikhet som besto i en bevegelse som lovet likhet. Poenget er ikke at bevegelser mislykkes eller er skadelige, men at makt også virker innad i fellesskap som kjemper mot makt.",
    },
    {
      question: "Hva viser Alpa Shahs Nightmarch om forholdet mellom staten og geriljabevegelsen?",
      options: ["Både statens frarøvelse av land og ressurser og bevegelsens egne motsetninger — hun romantiserer ikke", "At geriljaen kjemper Adivasienes sak mot en stat som systematisk svikter dem i kampen om land og ressurser", "At bevegelsen først og fremst er kriminell og bruker Adivasi-saken som påskudd for å skaffe seg politisk oppslutning", "At staten og bevegelsen i praksis samarbeider om kontrollen over ressursene i området"],
      explanation: "Riktig er at boka viser begge deler: statens frarøvelse og bevegelsens kasteskjeve lederskap, kjønnsulikhet og rekruttenes sammensatte motiver. Den ensidige lesningen er feil i begge retninger — verken forsvarstale eller avsløring treffer det hun gjør.",
    },
    {
      question: "Hvorfor er statlige kategorier som «Scheduled Tribes» viktige i maktanalyse?",
      options: ["Fordi kategorien avgjør hvilke rettigheter og ordninger som gjelder, og gjør bestemte tiltak lettere å legitimere", "Fordi kategorien gir en nøytral og presis beskrivelse av gruppene den omfatter, uten politiske eller historiske føringer", "Fordi kategorien er den betegnelsen gruppene selv foretrekker å bli omtalt med i møte med myndigheter og omverden", "Fordi kategorien først ble innført etter Indias selvstendighet og markerer et brudd med kolonitiden på dette området"],
      explanation: "Riktig er at kategorien avgjør rettigheter og gjør tiltak lettere å legitimere — kategorien kommer først, tiltaket etterpå. Den er statens kategori med kolonial forhistorie, ikke folkegruppenes egen betegnelse; boka bruker Adivasi. Merk dobbeltheten: kategorien er samtidig grunnlaget for rettigheter og kvoteordninger.",
    },
    {
      question: "Hva er legitimering av makt?",
      options: ["De begrunnelsene og fremstillingene som gjør maktutøvelse akseptabel for utøveren og helst også for dem den rammer", "Den formelle prosedyren som gjør et vedtak gyldig etter gjeldende lovverk", "Den støtten en regjering får gjennom frie valg med allmenn stemmerett", "Den anerkjennelsen en stat får fra andre stater i det internasjonale samfunnet"],
      explanation: "Riktig er begrunnelsene som gjør makt akseptabel. Studiet av dem er ikke retorikkanalyse, men analyse av hvordan makt faktisk virker: ren tvang er dyrt og ustabilt, mens varig makt hviler på at ordningen fremstår som rimelig. Formell gyldighet, valgresultater og folkerettslig anerkjennelse er andre forhold.",
    },
    {
      question: "Hva er den mest presise landingen på spørsmålet om staten er beskytter eller frarøver?",
      options: ["At spørsmålet er feil stilt hvis staten behandles som én aktør: samme stat kan drive skolen og gi konsesjonen", "At staten alltid er frarøver overfor urfolk, siden statsdannelsen selv bygger på erobring og fratakelse av landområder", "At staten alltid er beskytter, siden det er staten som gir og håndhever rettigheter", "At spørsmålet ikke kan besvares fordi antropologien skal beskrive og ikke vurdere"],
      explanation: "Riktig er å bestride forutsetningen: staten er sammensatt av institusjoner med ulike oppdrag, og det er de samme menneskene som møter begge deler. De to absolutte svarene overser dette, og å avvise spørsmålet med henvisning til beskrivelse framfor vurdering er en unnvikelse — standpunktet er fritt, men det skal begrunnes.",
    },
    {
      question: "Hva er den viktigste presiseringen når Millars materiale brukes i en maktanalyse?",
      options: ["At prekaritet er en livsform med egen rytme og relativ selvstendighet, ikke bare mangel", "At søppelplukkerne hadde forhandlingsmakt fordi de kontrollerte tilgangen til materialet", "At myndighetene bar hovedansvaret siden fyllinga var et offentlig anlegg som skulle drives forsvarlig", "At arbeidet var midlertidig og at de fleste kom seg videre til formelt arbeid i byen etter noen år"],
      explanation: "Riktig er at prekaritet er en livsform med egen logikk — folk vendte tilbake også når de hadde alternativer. Presiseringen skjerper maktanalysen i stedet for å myke den opp: menneskene var verken passive ofre eller frie aktører, men handlet innenfor rammer satt andre steder.",
    },
    {
      question: "Hvorfor sier boka at prekaritet i seg selv er et maktforhold?",
      options: ["Fordi den som ikke kan planlegge, heller ikke kan organisere seg, holde ut en konflikt eller si nei til dårlige vilkår", "Fordi prekære arbeidere alltid tjener mindre enn fast ansatte i samme bransje, og fordi de mangler tariffavtale og pensjonsordning", "Fordi prekaritet oppstår som følge av bevisste politiske beslutninger om arbeidsmarkedet som er tatt av skiftende regjeringer", "Fordi prekære arbeidere sjelden er organisert i fagforeninger som kan tale deres sak, og fordi arbeidsplassene er spredt over store områder"],
      explanation: "Riktig er at usikkerhet gjør motstand dyrere — det er selve maktvirkningen. Lønnsnivå er ikke det avgjørende, siden prekaritet handler om uforutsigbarhet og ikke om et bestemt inntektsnivå. Manglende organisering er en følge av mekanismen, ikke mekanismen selv.",
    },
    {
      question: "Hva er poenget med å si at politikk blant Nuer var innvevd i slektskapet?",
      options: ["At politikk ikke var et eget felt med egne institusjoner, men en side ved avstamningssystemet — holismen i praksis", "At politiske verv gikk i arv fra far til sønn innenfor bestemte slektsgrupper", "At slektskapsforhold avgjorde hvem som fikk stemme i beslutninger som angikk gruppen", "At politiske konflikter alltid dreide seg om arv og eiendomsrett mellom slektninger"],
      explanation: "Riktig er at politikk ikke var et avgrenset felt, men en side ved avstamningssystemet. Det er derfor et samfunn kan se ut til å mangle politikk hvis man bare leter etter parlamenter. Arvelige verv og stemmerett forutsetter nettopp de institusjonene som ikke fantes.",
    },
    {
      question: "Hva tilfører Farmers etnografiske arbeid til Galtungs begrep?",
      options: ["Det viser hvordan strukturene virker i enkeltliv — hvilke dører som var stengt og hvilke valg som aldri var reelle valg", "Det gir begrepet en presis definisjon som Galtungs opprinnelige formulering manglet, og gjør det dermed anvendelig i empirisk arbeid", "Det utvider begrepet fra å gjelde krig og konflikt til også å gjelde helse og fattigdom", "Det beviser statistisk at strukturell vold rammer flere mennesker enn direkte vold gjør"],
      explanation: "Riktig er at feltarbeidet viser hvordan skaden blir til i enkeltliv, mens statistikk bare viser at forskjellen finnes. Det er forskjellen mellom å påvise et mønster og å forklare det. Galtungs formulering var allerede presis, og etnografi beviser ikke noe statistisk.",
    },
    {
      question: "Hva er den beste analytiske aksen i et langsvar om makt?",
      options: ["Hvor makten sitter når den ikke sitter i institusjonene, og hvilke former for motstand det gjør mulig", "Hvor mye makt hver av de omtalte gruppene har sammenlignet med de andre i det materialet som er tilgjengelig", "Hvorvidt maktutøvelsen i hvert tilfelle er moralsk forsvarlig eller ikke etter allmenne moralske standarder", "Hvilke historiske hendelser som førte til dagens maktfordeling i hvert samfunn"],
      explanation: "Riktig er aksen om hvor makten sitter og hvilke motstandsformer den muliggjør — alle tekstene i pensum har noe å si på den, og da blir forskjellen mellom dem et argument. Å måle mengder makt forutsetter at makt er en eiendel, og en moralsk rangering er ikke en analyse.",
    },
    {
      question: "Hvorfor er «strukturell vold» omstridt som analytisk begrep?",
      options: ["Fordi vold i vanlig språkbruk forutsetter handling og ansvar, og et begrep uten begge deler kan dekke nesten enhver ulikhet", "Fordi begrepet ble utviklet i fredsforskning og derfor ikke passer i antropologisk analyse, der problemstillingene er andre enn fagets egne", "Fordi det ikke lar seg påvise empirisk gjennom deltagende observasjon over kort tid, slik faget ellers krever av sine begreper", "Fordi det fratar mennesker ansvaret for sine egne handlinger og valg i vanskelige situasjoner, og dermed svekker deres stilling som aktører"],
      explanation: "Riktig er innvendingen om at et begrep som dekker alt fra folkemord til ventelister, ikke skiller noe fra noe. Forsvaret er at vi mangler vokabular for skade forårsaket av ordninger, og at ansvaret ikke forsvinner siden strukturer opprettholdes og kan endres av beslutninger. Begge landinger kan gi toppkarakter.",
    },
    {
      question: "Hva innebærer det å analysere makt uten å gjøre mennesker passive?",
      options: ["Å vise at menneskene handlet innenfor rammer de ikke hadde satt — verken passive ofre eller frie aktører", "Å legge hovedvekten på menneskenes egne fortellinger og la maktforholdene komme i bakgrunnen", "Å unngå å beskrive hvor trange rammene er, siden det svekker menneskenes verdighet", "Å behandle alle parter i en konflikt som like ansvarlige for utfallet"],
      explanation: "Riktig er formuleringen om handling innenfor rammer man ikke har satt. Den motsatte feilen — å fremheve handlingsrommet så mye at maktforholdet forsvinner — er like alvorlig, og det ville gjøre frarøvelse til et valg. Å skjule hvor trange rammene er, er heller ikke en løsning.",
    },
    {
      question: "Hvorfor krever hverdagsmotstand antropologisk metode for å oppdages?",
      options: ["Fordi den ikke setter spor i arkiver eller statistikk og bare kan ses av noen som er til stede over tid", "Fordi den bare forekommer i samfunn som mangler skriftlig dokumentasjon av politiske forhold og derfor ikke etterlater seg spor", "Fordi den er ulovlig og derfor holdes skjult for alle utenforstående observatører", "Fordi den utøves av grupper som ikke kan uttrykke seg skriftlig om sin egen situasjon"],
      explanation: "Riktig er at formen er usynlig i arkiver og bare lar seg oppdage gjennom langvarig deltagende observasjon — man må se hva som gjøres, i motsetning til hva som sies. Hverdagsmotstand forekommer i alle typer samfunn, også dem med omfattende skriftlig dokumentasjon.",
    },
    {
      question: "Hva er en presis måte å bruke kolonial kontekst i et svar om Evans-Pritchards Nuer-materiale?",
      options: ["Som en del av forklaringen på hvordan kunnskapen ble til, ikke som en moralsk tilleggsmerknad", "Som en grunn til at studien ikke lenger kan brukes som pensumeksempel i faget på universitetsnivå i dag", "Som et bevis på at etnografen bevisst tjente kolonimaktens interesser i området under sitt opphold i området", "Som bakgrunnsinformasjon som bør nevnes kort før den egentlige analysen begynner"],
      explanation: "Riktig er å bruke konteksten som forklaring på hvordan kunnskapen ble til — feltarbeidet foregikk i det anglo-egyptiske Sudan, i kjølvannet av britiske straffeekspedisjoner og med kolonialadministrasjonens medvirkning. Sensorveiledningene knytter nettopp det å se dette til meget god, og det er verken en grunn til å forkaste studien eller en anklage mot etnografen.",
    },
    {
      question: "Hva er sammenhengen mellom strukturell og direkte vold i Shahs materiale?",
      options: ["Den langvarige frarøvelsen av land er strukturell, og den væpnede konflikten som følger, er direkte", "De to formene forekommer uavhengig av hverandre i ulike deler av det samme området, og har ingen felles årsak bak seg", "Den direkte volden kom først og førte til at strukturene ble endret til Adivasienes ulempe over flere tiår", "Strukturell vold erstattet direkte vold da staten sluttet å bruke militære virkemidler i de aktuelle delstatene"],
      explanation: "Riktig er overgangen fra strukturell til direkte vold: den langvarige, formelt lovlige frarøvelsen gir opphav til væpnet konflikt. Sammenhengen går begge veier, siden trusselen om direkte vold også holder strukturene på plass. Å vise denne overgangen i ett materiale er et av de sterkeste grepene i et maktlangsvar.",
    },
    {
      question: "Hva er autoritet i motsetning til ren makt?",
      options: ["Makt som blir godtatt fordi andre anerkjenner retten til å bestemme, ikke fordi de fryktes", "Makt som er nedfelt i lov og derfor kan håndheves av domstolene", "Makt som utøves av personer med formell utdanning innenfor sitt fagområde", "Makt som er begrenset av regler slik at den ikke kan misbrukes av dem som har den"],
      explanation: "Riktig er anerkjennelsen av retten til å bestemme. Skillet er analytisk viktig fordi ren tvang er dyrt og ustabilt, mens varig makt hviler på autoritet. Hva autoritet hviler på — alder, avstamning, rituell kunnskap, utdanning, valg — varierer mellom samfunn, og å spørre om det er en åpnende inngang.",
    },
    {
      question: "Hva er feil nummer 10 i registeret, og hvordan henger den sammen med maktstoffet?",
      options: ["Monografioppgave uten dybde i monografien — og maktoppgaver er nesten alltid koblet til monografien", "For få pensumtekster i langsvar — og maktoppgaver krever flere tekster enn andre temaer på pensumlista", "Rent referat uten drøfting — og maktstoffet inviterer særlig til å gjenfortelle konflikter", "Å naturalisere det sosiale — og maktforhold fremstilles ofte som naturgitte i besvarelser"],
      explanation: "Riktig er at feil nummer 10 gjelder monografioppgaver uten dybde i monografien, og at maktstoffet er tett koblet til den. Å skrive om makt generelt uten monografiens empiri er en forløper til denne feilen. De øvrige alternativene beskriver riktige feilkoder, men med feil nummer.",
    },
    {
      question: "Hva mener boka med at kravet til antropologisk kunnskap ikke er nøytralitet, men redegjørelse?",
      options: ["At forskerens posisjon og relasjoner former materialet, og at dette skal gjøres eksplisitt i stedet for skjult", "At forskeren bør ta stilling i de konfliktene hun studerer og si det åpent til leseren underveis i feltarbeidet", "At all etnografi er subjektiv og derfor ikke kan gjøre krav på å være vitenskapelig på linje med andre samfunnsfag", "At forskeren plikter å redegjøre for sine kilder på samme måte som i historiefaget"],
      explanation: "Riktig er at posisjon og relasjoner former materialet, og at redegjørelsen gjør kunnskapen mer etterprøvbar — ikke at den er subjektiv i betydningen vilkårlig. I Shahs materiale er kjønn, tillit og posisjonering en del av analysen, ikke en metodisk fotnote. Kravet handler om åpenhet om vilkårene, ikke om å ta politisk stilling.",
    },
    {
      question: "Hvilke tre former for makt skiller boka mellom?",
      options: ["Åpen makt, makt over dagsordenen, og makt over selvfølgelighetene", "Politisk makt, økonomisk makt, og kulturell makt, som virker på hvert sitt samfunnsområde", "Legitim makt, illegitim makt, og makt som utøves i det skjulte", "Statlig makt, markedsmakt, og makt utøvd av religiøse institusjoner"],
      explanation: "Riktig er de tre formene, der den siste — at ordninger fremstår som naturlige slik at motstand blir utenkelig — er naturalisering sett fra maktsiden. Antropologiens særegne bidrag er å fange de to siste, som ikke setter spor i vedtaksprotokoller. De øvrige inndelingene er etter arena eller etter legitimitet, ikke etter virkemåte.",
    },
  ],
  'sosant1000-8-1': [
    {
      question: "Hva er den narrative rammen i Alpa Shahs Nightmarch?",
      options: ["En sju netters marsj med en maoistisk geriljapulje gjennom skogområder i det sentrale India", "Et års opphold i en landsby i Jharkhand der forfatteren fulgte husholdenes daglige arbeid", "En rettssak mot medlemmer av bevegelsen, fulgt gjennom flere instanser over lang tid", "En serie intervjuer med tidligere geriljamedlemmer som har lagt ned våpnene"],
      explanation: "Riktig er den sju netters marsjen, gjennomført om natten. Marsjen er ikke bare en fortellerramme, men et metodisk grep: fordi Shah gikk med bevegelsen framfor å intervjue den, ble forhold synlige som ingen ville formulert i et intervju. Analysen hviler i tillegg på langvarig feltarbeid i de samme områdene.",
    },
    {
      question: "Hva viser Nightmarch om forholdet mellom staten, geriljaen og Adivasi?",
      options: ["Både statens frarøvelse av land og ressurser og bevegelsens egne motsetninger — de to funnene hører sammen", "At geriljaen kjemper Adivasienes sak mot en stat som systematisk svikter dem på alle nivåer i forvaltningen", "At bevegelsen først og fremst er kriminell og bruker Adivasi-saken som påskudd", "At staten og bevegelsen i praksis har en stilltiende avtale om kontrollen over området"],
      explanation: "Riktig er at boka holder begge deler sammen: frarøvelsen forklarer hvorfor bevegelsen finnes, motsetningene forklarer hvorfor den ikke uten videre er en løsning. Shah romantiserer ikke, og hun avslører ikke — den ensidige lesningen er feil i begge retninger, og den er den enkeltfeilen som oftest ødelegger et monografisvar.",
    },
    {
      question: "Hvilke tre motsetninger finner Shah inne i bevegelsen?",
      options: ["Kasteskjevt lederskap, kjønnsulikhet i en bevegelse som lovet likhet, og rekrutter med sammensatte motiver", "Uenighet om væpnet kamp, mangel på økonomiske midler, og konflikt mellom eldre og yngre medlemmer i de ulike delstatene", "Regionale rivaliseringer, uklar kommandostruktur, og svak kontakt med den urbane venstresiden i storbyene i India", "Manglende støtte i lokalbefolkningen, høyt frafall blant rekruttene, og press fra sikkerhetsstyrkene"],
      explanation: "Riktig er de tre: lederskapet i stor grad rekruttert fra høyere kaster, kjønnsulikheten som besto i en organisasjon som lovet likhet, og de sammensatte motivene blant rekruttene. De øvrige alternativene beskriver forhold boka ikke gjør til sine hovedfunn.",
    },
    {
      question: "Hvorfor er marsjen et metodisk grep og ikke bare en fortellerramme?",
      options: ["Fordi det å gå med bevegelsen gjorde synlig hvem som bar hva, ga ordrer og adlød — forhold ingen ville formulert i et intervju", "Fordi marsjen ga forfatteren anledning til å møte flere informanter enn hun ellers ville rukket i løpet av den tiden feltarbeidet varte", "Fordi bevegelsen bare kunne kontaktes underveis og ikke i sine faste baseområder, der ingen utenforstående slippes inn i det hele tatt", "Fordi en kronologisk fortelling gjør boka lettere tilgjengelig for lesere utenfor faget, og gir samtidig framstillingen en tydelig struktur"],
      explanation: "Riktig er at metoden gjorde praksis synlig: en organisasjon som kjemper mot kaste og for likestilling, beskriver seg selv i samsvar med sine idealer, mens praksisen ble synlig fordi forskeren var til stede mens den fant sted. Det er skillet mellom det folk sier og det folk gjør — den klassiske begrunnelsen for deltagende observasjon.",
    },
    {
      question: "Hva er Adivasi?",
      options: ["Den betegnelsen mange av Indias urfolk selv bruker om seg selv, og som betyr omtrent «de opprinnelige innbyggerne»", "Den offisielle kategorien indisk lovgivning bruker om urfolksgrupper med særskilte rettigheter", "Navnet på den folkegruppen som utgjør flertallet av rekruttene i den maoistiske bevegelsen", "En samlebetegnelse på befolkningen i skogområdene i Jharkhand og de tilstøtende delstatene"],
      explanation: "Riktig er at det er folkegruppenes egen betegnelse. Statens administrative kategori er «Scheduled Tribes», som har kolonial forhistorie og avgjør hvilke rettigheter og kvoteordninger som gjelder. Adivasi er heller ikke én gruppe, men mange folk med ulike språk, næringsveier og historier — å skrive om «Adivasi-folket» i entall er å overdrive likheten innad.",
    },
    {
      question: "Hva bør en kandidat skrive om «Scheduled Tribes»?",
      options: ["At det er statens administrative kategori med kolonial forhistorie, omtalt med avsender og anførselstegn", "At det er en nøytral juridisk term som kan brukes som synonym for Adivasi i besvarelsen uten videre kommentar", "At det er en betegnelse gruppene selv har kjempet for å få innført i lovgivningen", "At det er en foreldet kategori som ble avskaffet da India fikk sin selvstendighet"],
      explanation: "Riktig er å behandle den som statens kategori, med avsender og anførselstegn. Å bruke den som sin egen betegnelse på folkegruppene er en presisjonsfeil. Merk dobbeltheten: kategorien er både et redskap for kontroll og grunnlaget for rettigheter og kvoteordninger, og det er en del av det som gjør statens rolle sammensatt.",
    },
    {
      question: "Hva menes med at staten er «selektivt til stede» i disse områdene?",
      options: ["At den er svakt til stede som tjenesteyter og sterkt til stede som ressursforvalter og ordensmakt", "At den bare har tilstedeværelse i de delene av området som ikke kontrolleres av bevegelsen til enhver tid", "At den prioriterer noen delstater framfor andre i fordelingen av offentlige midler over statsbudsjettet", "At den bare griper inn når konflikten når et nivå som får nasjonal oppmerksomhet"],
      explanation: "Riktig er at ulike statsfunksjoner er ulikt til stede — lite skole, helse og rettsvern, mye konsesjonsforvaltning og ordenshåndhevelse. Formuleringen er mer presis enn å snakke om «svak stat»: en stat som sender sikkerhetsstyrker men ikke lærere, er ikke svak, den er innrettet på en bestemt måte.",
    },
    {
      question: "Hva kjennetegner frarøvelsen av land i Shahs materiale?",
      options: ["Den er en langvarig prosess som i stor grad bruker lovlige virkemidler som konsesjoner, vedtak og prosjekter", "Den skjedde brått da gruvedriften kom til området rundt årtusenskiftet og de første konsesjonene ble tildelt selskapene", "Den foregår hovedsakelig gjennom ulovlige oppkjøp og trusler fra private selskaper som opererer utenfor myndighetenes kontroll", "Den rammer først og fremst dem som har dokumenterte eiendomsrettigheter til jorda og som derfor kan dokumentere kravet sitt"],
      explanation: "Riktig er at frarøvelsen er en prosess med lang historie og i stor grad lovlige virkemidler — det er nettopp derfor begrepet trengs, siden mye frarøvelse ikke er lovbrudd. Den rammer særlig dem uten dokumenterbare rettigheter, som taper når adgangen formaliseres, ikke dem som har papirene i orden.",
    },
    {
      question: "Hvorfor er kasteskjevheten i lederskapet et teoretisk interessant funn?",
      options: ["Fordi den viser at adgangen til ervervede posisjoner selv var fordelt etter tilskrevne statuser", "Fordi den beviser at bevegelsen ikke mente alvor med sin kamp mot kastesystemet", "Fordi den forklarer hvorfor bevegelsen har hatt begrenset framgang i sine militære operasjoner", "Fordi den viser at kastesystemet er sterkere i skogområdene enn i resten av India"],
      explanation: "Riktig er koblingen mellom tilskrevet og ervervet status: lederroller krever utdanning, språk og nettverk, som er ulikt fordelt etter nettopp de skillene bevegelsen bekjemper. Funnet er en observasjon om mekanismer, ikke en dom over bevegelsens oppriktighet — strukturer virker også der de bekjempes.",
    },
    {
      question: "Hva viser kjønnsulikheten i bevegelsen teoretisk?",
      options: ["At kjønn reproduseres i praksis gjennom gjentatte handlinger, ikke gjennom erklæringer og vedtak", "At kvinner og menn har ulike forutsetninger for de oppgavene en geriljabevegelse krever under svært krevende forhold", "At likestillingspolitikk fungerer dårlig i samfunn der kvinner har lav formell utdanning", "At kjønnsroller er mer bestandige enn kastetilhørighet i det indiske samfunnet"],
      explanation: "Riktig er at kjønn reproduseres i praksis: et vedtak om likestilling endrer ikke i seg selv hvem som gjør hva om morgenen. Å forklare arbeidsdelingen med biologiske forskjeller er feil nummer 9, å naturalisere det sosiale — og det interessante er nettopp at ulikheten besto på tross av en erklært likhetspolitikk.",
    },
    {
      question: "Hva er feil nummer 10 i registeret?",
      options: ["Monografioppgave uten dybde i monografien — et generelt essay der boka nevnes i en setning", "Å gjenfortelle handlingen i monografien uten å drøfte noe av det som fortelles som fortelles i den", "Å bruke bare monografien og ingen andre pensumtekster i et monografi-langsvar til eksamen i emnet", "Å lese monografien ensidig, enten som forsvarstale eller som avsløring av bevegelsen"],
      explanation: "Riktig er monografioppgave uten dybde i monografien. De øvrige alternativene beskriver reelle feil, men med andre numre: rent referat er feil nummer 3, for få kilder er feil nummer 2, og den ensidige lesningen er en faglig feiltilskrivning uten eget nummer. Testen på egen tekst: stryk alt som handler konkret om boka, og se om det fortsatt står et essay igjen.",
    },
    {
      question: "Hvilke tre krav stiller monografi-langsvaret?",
      options: ["Konkret empiri fra monografien, kobling til minst én annen pensumtekst, og refleksjon over hvordan feltarbeidet frembringer kunnskapen", "Et sammendrag av boka, en vurdering av forfatterens metode, og en konklusjon om bokas relevans, satt opp i den rekkefølgen boka selv bruker", "Minst tre pensumtekster, en historisk innledning, og en drøfting av forskningsetiske spørsmål, slik at framstillingen får både bredde og faglig tyngde", "En presentasjon av forfatteren, en gjennomgang av hovedfunnene, og en sammenligning med en annen monografi på pensumlista i emnet"],
      explanation: "Riktig er de tre kravene, der det siste — metoderefleksjonen — er det som oftest mangler i ellers gode svar. Et sammendrag er ikke et svar, og kravet er ikke å sammenligne med en annen monografi, men å koble til minst én annen pensumtekst.",
    },
    {
      question: "Hva er den beste begrunnelsen for deltagende observasjon i dette materialet?",
      options: ["At metoden lar deg sette det folk sier opp mot det de gjør, siden en organisasjon beskriver seg selv i samsvar med sine idealer", "At metoden gir mer pålitelige data enn intervjuer fordi informanter ofte pynter på sannheten", "At metoden er den eneste måten å få tilgang til en bevegelse som opererer i skjul", "At metoden gir forskeren en dypere personlig forståelse av dem hun studerer"],
      explanation: "Riktig er at metoden setter praksis opp mot selvbeskrivelse. Å hevde at den gir mer pålitelige data enn intervjuer er en dårlig begrunnelse for en god metode: de to svarer på ulike spørsmål, og et intervju gir tilgang til hvordan mennesker forstår sin egen situasjon, som er data i seg selv.",
    },
    {
      question: "Hva menes med at det Shah ikke fikk vite, også er et funn?",
      options: ["At grensene for hva hun fikk tilgang til, forteller noe om hvor grensene gikk og hvem som voktet dem", "At hun burde ha gjennomført flere intervjuer for å dekke hullene i materialet før hun avsluttet feltarbeidet", "At leseren må anta at boka gir et ufullstendig bilde av bevegelsens virksomhet", "At forskere alltid har begrenset tilgang og at dette derfor ikke er verdt å nevne"],
      explanation: "Riktig er at tilgangens grenser er data: de viser hvor bevegelsens grenser gikk og hvem som håndhevet dem. Poenget er ikke at materialet er mangelfullt og bør suppleres, men at begrensningen selv er informativ — og at den derfor hører hjemme i metoderefleksjonen.",
    },
    {
      question: "Hvem var emnets monografi før Alpa Shah?",
      options: ["Paige West, med et arbeid fra Papua Ny-Guinea om naturvern og kaffemarked som global kobling", "Marianne Lien, med arbeidet om norsk lakseoppdrett og domestisering av fisk i norske fjorder og anlegg", "Kathleen Millar, med arbeidet om søppelplukkerne på en fylling utenfor Rio de Janeiro i Brasil", "Radhika Govindrajan, med arbeidet om artsoverskridende relasjoner i Kumaon-Himalaya"],
      explanation: "Riktig er Paige West, som var monografi fra og med 2020 til og med 2022. Arbeidet viste hvordan verneprosjekter og en global vare bandt et lokalsamfunn til beslutninger og priser som ble til langt unna. De tre øvrige er pensumtekster i emnet, men ingen av dem har vært monografien.",
    },
    {
      question: "Hva bør en kandidat gjøre før hun bruker dette kapitlet på eksamen?",
      options: ["Kontrollere hvilken monografi som står på pensumlista for hennes eget semester", "Lese hele monografien på nytt for å kunne gjengi handlingen i detalj før hun møter til eksamen", "Finne ut hvilke temaer monografien er blitt koblet til i tidligere eksamenssett", "Sammenligne den gjeldende monografien med forgjengeren for å se hva som er endret"],
      explanation: "Riktig er å kontrollere pensumlista for eget semester, siden monografien byttes mellom kull. Bytter emnet monografi, er det empirien som er ny — rammen med tverrgående bruk, koblingskrav og metoderefleksjon står fast. Å pugge handlingen i detalj er verken nødvendig eller tilstrekkelig.",
    },
    {
      question: "Hvordan bør koblingen mellom Shahs materiale og Swansons «sacrifice zones» formuleres?",
      options: ["Som ens egen anvendelse, siden Shah ikke bruker begrepet selv", "Som Shahs egen analyse, siden materialet passer godt til begrepet", "Uten å nevne Swanson, siden begrepet nå er allment brukt i faget", "Bare dersom oppgaven eksplisitt handler om miljø og klima"],
      explanation: "Riktig er å merke koblingen som ens egen anvendelse. Formuleringen gjør koblingen synlig som en selvstendig analytisk operasjon, og det er nøyaktig det akse 3 måler. Å skrive som om Shah brukte begrepet, er en feiltilskrivning — og en kobling man merker, teller, mens en man later som er tekstens egen, er en feil.",
    },
    {
      question: "Hva er grensen for å lese marsjen gjennom van Genneps og Turners begrepsapparat?",
      options: ["At den ordinære strukturen ikke ble opphevet — kaste- og kjønnsforskjellene fulgte med inn i puljen", "At marsjen varte for kort tid til at en liminalfase kan sies å ha oppstått for deltakerne i den", "At begrepsapparatet bare gjelder ritualer med religiøst innhold og derfor ikke passer", "At marsjen ikke endte i noen ny status for deltakerne og derfor mangler siste fase"],
      explanation: "Riktig er at strukturen ikke ble opphevet, noe som nettopp er et av bokas hovedfunn. Å vise hvor et begrep treffer og hvor det svikter, er akse 3 og akse 4 samtidig, og det er noe svært få kandidater gjør. Apparatet er ikke begrenset til religiøse ritualer, og varighet er ikke kriteriet.",
    },
    {
      question: "Hva er den beste beskrivelsen av rekruttenes motiver i materialet?",
      options: ["Sammensatte og ofte lokale — noen politiske, noen personlige, noen praktiske", "Overveiende ideologiske, forankret i bevegelsens maoistiske program", "Overveiende økonomiske, siden bevegelsen ga en inntekt som ellers manglet", "Uklare for forskeren, siden rekruttene ikke ville snakke om hvorfor de sluttet seg til"],
      explanation: "Riktig er de sammensatte og ofte lokale motivene, som motsier både fortellingen om overbeviste revolusjonære og fortellingen om villedede rekrutter. Funnet viser samtidig hva feltarbeid gir: motiver er nettopp det man ikke får tak i gjennom et intervju med en organisasjon som beskriver rekrutteringen i samsvar med sine idealer.",
    },
    {
      question: "Hvorfor er en monografi særlig godt egnet til å vise holisme?",
      options: ["Fordi ett feltarbeid rommer økonomi, politikk, slektskap, kjønn og religion i de samme menneskenes liv samtidig", "Fordi bokformatet gir plass til flere kapitler enn en artikkel gjør, og gir dermed rom for flere temaer i samme framstilling", "Fordi monografier alltid dekker et helt samfunn og ikke bare et utsnitt av det, og gir derfor et fullstendig bilde av det", "Fordi forfatteren har tid til å intervjue alle grupper i samfunnet hun studerer i løpet av perioden hun oppholder seg der"],
      explanation: "Riktig er at feltene henger sammen i de samme livene, og at monografiformen kan vise det. Det er holismen gjort til boksjanger, og det er derfor sensorveiledningene ber om tverrgående bruk. En monografi dekker ikke et helt samfunn — den behandler et utsnitt, og styrken ligger i dybden, ikke i dekningen.",
    },
    {
      question: "Hvordan bør forholdet mellom mikro og makro beskrives i et monografisvar?",
      options: ["Utsnittet er ikke representativt, men et sted der store prosesser lar seg se i arbeid der de treffer bakken", "Utsnittet er representativt for hele regionen og kan derfor generaliseres til lignende områder", "Utsnittet sier bare noe om de menneskene forskeren møtte og kan ikke brukes til generalisering", "Utsnittet må suppleres med statistikk før det kan si noe om større sammenhenger"],
      explanation: "Riktig er mekanismeforklaringen: den svake broen mellom nivåene er å hevde at stedet er typisk, den sterke er å vise hvordan en prosess virker der den treffer bakken. Å avvise all generalisering er like upresist — man generaliserer om mekanismer og muligheter, ikke om utbredelse.",
    },
    {
      question: "Hva er den mest praktiske motgiften mot feil nummer 10?",
      options: ["Å ha tre konkrete opplysninger fra monografien klare før man begynner å skrive", "Å bruke minst halvparten av besvarelsen på å referere bokas innhold, kapittel for kapittel i den rekkefølgen boka har", "Å begynne besvarelsen med et sammendrag av monografien i eget avsnitt", "Å sitere direkte fra monografien flere steder i besvarelsen"],
      explanation: "Riktig er de tre konkrete opplysningene — for eksempel marsjen som metodisk grep, kasteskjevheten i lederskapet, og at frarøvelsen er en langvarig prosess med lovlige virkemidler. Å bruke halve besvarelsen på referat er derimot feil nummer 3, og et innledende sammendrag løser ikke problemet dersom empirien ikke brukes til noe.",
    },
    {
      question: "Hva menes med refleksivitet i antropologisk arbeid?",
      options: ["At forskeren gjør rede for sin egen rolle i å frembringe materialet, slik at leseren kan vurdere hva det er blitt til under", "At forskeren tenker gjennom sine egne fordommer før feltarbeidet begynner, slik at hun kan legge dem til side før hun reiser ut", "At forskeren lar informantene lese og godkjenne teksten før publisering, og at de dermed kan korrigere framstillingen av seg selv", "At forskeren skriver om sine personlige opplevelser i tillegg til den faglige analysen"],
      explanation: "Riktig er redegjørelsen som gjør materialet etterprøvbart. Refleksivitet er verken en selvbiografi eller en unnskyldning — målet er ikke å fortelle om forskeren, men å gjøre leseren i stand til å vurdere materialet. Å skjule instrumentets egenskaper gjør ikke kunnskapen mer nøytral.",
    },
    {
      question: "Hva er den ensidige lesningen av Nightmarch, og hvorfor er den feil?",
      options: ["Å lese boka enten som forsvarstale eller som avsløring — begge utelater halvparten av det Shah viser", "Å lese boka som en metodetekst i stedet for som en politisk analyse av konflikten mellom staten og bevegelsen", "Å lese boka som en fortelling om Adivasi i stedet for som en fortelling om geriljaen og dens indre organisering", "Å lese boka som en samtidsanalyse i stedet for som et historisk arbeid om konfliktens røtter i det sentrale India"],
      explanation: "Riktig er den ensidige lesningen i begge retninger. Frarøvelsen forklarer hvorfor bevegelsen finnes, og motsetningene forklarer hvorfor den ikke uten videre er en løsning — de to funnene hører sammen. Dette er den enkeltfeilen som oftest ødelegger et ellers godt monografisvar.",
    },
    {
      question: "Hvordan henger marginalisering, kaste og kjønn sammen i materialet?",
      options: ["De virker samtidig på de samme menneskene og forsterker hverandre — en kvinne fra en Adivasi-gruppe møtte alle tre", "De virker i rekkefølge, slik at marginalisering fører til kastediskriminering som igjen fører til kjønnsulikhet", "De virker uavhengig av hverandre og bør derfor analyseres hver for seg i en besvarelse", "De opphever hverandre delvis, siden bevegelsen bekjempet både kaste og kjønnsulikhet"],
      explanation: "Riktig er at de tre virker samtidig og forsterker hverandre. Det er holismen som analytisk krav: feltene lar seg ikke skille. Å behandle dem hver for seg mister nettopp det som gjør materialet verdifullt, og bevegelsens erklærte kamp mot kaste og kjønnsulikhet opphevet dem ikke i praksis.",
    },
    {
      question: "Hva er den motsatte fellen av feil nummer 10 i et monografisvar?",
      options: ["Feil nummer 3 — å gjenfortelle handlingen uten drøfting, slik at empirien legges fram for sin egen skyld", "Feil nummer 2 — å bruke for mange pensumtekster slik at monografien drukner i mengden av henvisninger", "Feil nummer 5 — å svare på en oppgave som ikke ble stilt i settet", "Feil nummer 12 — å legge for mye arbeid i langsvaret og for lite i kortsvarene"],
      explanation: "Riktig er feil nummer 3, referat uten drøfting. De to fellene ligger på hver sin side: for lite empiri fra boka, eller empiri som ikke brukes til å prøve en påstand. Feil nummer 2 gjelder for få kilder, ikke for mange, og de øvrige numrene beskriver andre feil.",
    },
  ],
  'sosant1000-9-1': [
    {
      question: "Hva er den riktige rekkefølgen på de fire trinnene i et kortsvar?",
      options: ["Definisjon med avsender, distinksjonen, det etnografiske eksempelet, og til slutt den løftende setningen", "Det etnografiske eksempelet, definisjonen med avsender, distinksjonen, den løftende setningen", "Distinksjonen, definisjonen med avsender, den løftende setningen, det etnografiske eksempelet", "Den løftende setningen, definisjonen med avsender, distinksjonen, det etnografiske eksempelet"],
      explanation: "Riktig rekkefølge er definisjon, distinksjon, etnografi og til slutt den løftende koblingen. Rekkefølgen er ikke tilfeldig: en løftende setning på et svar som mangler etnografi, løfter ingenting, og etnografien er trinnet som skiller minimumskrav fra god.",
    },
    {
      question: "Hvilket kriterium bør styre hvilke fire av de seks kortsvarene du velger?",
      options: ["Hvilke fire du kan forankre med et konkret etnografisk eksempel fra pensum", "Hvilke fire som handler om de temaene du har brukt mest lesetid på", "Hvilke fire som har kortest oppgavetekst og dermed er raskest å skrive ferdig", "Hvilke fire som til sammen dekker flest ulike deler av pensum, slik at bredden vises"],
      explanation: "Riktig kriterium er etnografien. Definisjonen kan de fleste rekonstruere i eksamenslokalet, men etnografien er enten pakket ferdig eller ikke. Bredde i temaer er et lesekriterium, ikke et valgkriterium på eksamensdagen.",
    },
    {
      question: "Hvor mange kortsvar leser sensor, og hva heter feilen ved å skrive flere?",
      options: ["Fire, og å skrive flere er feil nummer 7 — å svare på flere enn fire kortsvar", "Fire, og å skrive flere er feil nummer 12 — ubalansert besvarelse over de fire svarene", "Seks, men bare de fire beste teller når karakteren i Del 1 skal settes", "Fire, men et femte svar kan erstatte et av de fire dersom det er klart bedre"],
      explanation: "Riktig er at sensor leser fire, og at overskuddssvar er feil nummer 7. Feil nummer 12, ubalansert besvarelse, er noe annet: ett svært sterkt svar og tre tynne. Sensor plukker ikke ut de beste fire fra et større antall.",
    },
    {
      question: "Hva må et etnografisk eksempel inneholde for at det skal telle i et kortsvar?",
      options: ["Folk eller gruppe, sted og omtrentlig tid, forsker og verk, og hva studien viste", "Folk eller gruppe, sted og forsker, verkets tittel, og et presist sidetall", "Forsker, verk og utgivelsesår, og en kort vurdering av hvor troverdig studien regnes som", "Folk eller gruppe, sted, og en presis gjengivelse av forfatterens egne formuleringer"],
      explanation: "Riktig er de fire leddene, der det siste — hva studien faktisk viste — er det som oftest mangler. Sidetall brukes ikke i denne boka og er ikke et krav, og ordrette gjengivelser av pensumtekster er verken påkrevd eller ønskelig.",
    },
    {
      question: "Hva krever instruksjonsverbet «gjør rede for» sammenlignet med «drøft»?",
      options: ["En presis, ordnet framstilling uten krav om drøfting, men fortsatt med etnografisk eksempel", "En drøfting der påstanden i oppgaven prøves, men uten krav om et konkret etnografisk eksempel", "En kortere framstilling enn ved «forklar», siden en redegjørelse kan holdes på stikkordsnivå", "En framstilling som veier flere perspektiver mot hverandre og ender i en begrunnet konklusjon"],
      explanation: "Riktig er at «gjør rede for» ber om ordnet framstilling, ikke om drøfting — men etnografikravet står fast. Å drøfte når oppgaven ber deg gjøre rede for, er å svare i feil sjanger, på samme måte som det motsatte.",
    },
    {
      question: "En oppgave lyder: «Velg to av Eriksens åtte nøkkelord om globalisering og forklar dem.» Hva er riktig framgangsmåte?",
      options: ["Svare på nøyaktig to av dem, hver med sin egen presise kjerne og sitt eget etnografiske eksempel", "Nevne alle åtte kort og gå i dybden på de to du kan best av dem", "Svare på tre eller fire, slik at sensor kan velge de to sterkeste av dem", "Forklare alle åtte kort, siden oppgaven tester oversikten over nøkkelordene"],
      explanation: "Riktig er å svare på nøyaktig to. Å ta alle åtte er ikke å vise bredde, det er å bomme på oppgaven — og det stjeler tid fra de andre kortsvarene. Sensor plukker heller ikke ut de beste fra et større antall.",
    },
    {
      question: "Hva sier strykregelen i Del 1?",
      options: ["To eller flere F blant de fire valgte kortsvarene gir F på hele eksamen, med helhetsvurdering", "Ett enkelt F blant de fire valgte kortsvarene gir F på hele eksamen, uten rom for skjønnsmessig veiing", "To eller flere F blant de fire valgte kortsvarene gir F på Del 1, mens Del 2 vurderes helt for seg", "Tre eller flere F blant de seks kortsvarene i settet gir F på hele eksamen uansett langsvarets kvalitet"],
      explanation: "Riktig er at to eller flere F blant de fire valgte utløser regelen, med helhetsvurdering som forbehold: gode øvrige svar og et godt langsvar kan veie opp to bommer som skyldes misforståelse. Regelen gjelder de fire du leverer, ikke alle seks i settet.",
    },
    {
      question: "Hvem eier begrepet communitas, og hva står det i motsetning til?",
      options: ["Victor Turner, og det står i motsetning til strukturen — de vanlige forskjellene", "Arnold van Gennep, og det står i motsetning til separasjonsfasen i overgangsritualet", "Émile Durkheim, og det står i motsetning til det profane i skillet mellom hellig og profant", "Victor Turner, og det står i motsetning til liminaliteten, altså ritualets egen midtfase"],
      explanation: "Riktig er Turner, med struktur som motbegrep. Van Gennep formulerte de tre fasene i 1909; communitas er Turners egen utvidelse av terskelfasen. Communitas står ikke i motsetning til liminalitet — det er tilstanden som oppstår nettopp i den fasen.",
    },
    {
      question: "Hva er den viktigste presiseringen når du forklarer skillet mellom emisk og etisk perspektiv?",
      options: ["At «etisk» her er en analytisk term og ikke har med moral å gjøre", "At det emiske perspektivet er mer pålitelig enn det etiske fordi det kommer fra aktørene selv", "At det etiske perspektivet er forskerens moralske vurdering av praksisen hun beskriver", "At de to perspektivene ikke kan brukes i samme analyse uten at framstillingen blir uklar"],
      explanation: "Riktig er at «etisk» her betyr analytikerens utenfrakategorier, ikke moral. Forvekslingen er en klassisk kilde til rot, og presiseringen koster én setning. De to perspektivene brukes dessuten nettopp sammen — deltagende observasjon lar forskeren bevege seg mellom dem.",
    },
    {
      question: "Hva skiller kula fra gimwali på Trobriandøyene?",
      options: ["Kula er seremonielt prestisjebytte mellom faste partnere, gimwali er prutthandel", "Kula er byttet av mat og forbruksvarer, mens gimwali er byttet av armbånd og halskjeder mellom øyer", "Kula foregikk før kolonitiden, mens gimwali er den formen for handel som kom med markedsøkonomien", "Kula er bytte innad i landsbyen, mens gimwali er bytte mellom landsbyer som ligger langt fra hverandre"],
      explanation: "Riktig er skillet mellom seremonielt prestisjebytte og prosaisk handel. De to foregår i samme samfunn, ofte på de samme reisene, og holdes bevisst atskilt: å oppføre seg som i gimwali under kula er en fornærmelse. Det er nettopp den distinksjonen sensor tester.",
    },
    {
      question: "Hva må med for at en forklaring av «sacrifice zones» ikke skal bli en flat definisjon?",
      options: ["Logikken om sentrum og periferi — at kostnadene plasseres der motstanden er svakest", "En presis angivelse av hvilke land og hvilke årstall Swansons materiale er hentet fra", "En vurdering av om begrepet er dekkende også for norske forhold slik de er i dag", "En sammenligning med Galtungs begrep om strukturell vold, som ble formulert i 1969"],
      explanation: "Riktig er sentrum- og periferilogikken. Uten den betyr begrepet bare «forurenset område», og det er feil nummer 6 — en flat definisjon som ikke treffer forfatterens bruk. Usikre feltdetaljer skal heller utelates enn gjettes.",
    },
    {
      question: "Hvorfor er de tolv minuttene per kortsvar mindre enn de ser ut til?",
      options: ["Fordi de er ren skrivetid — settlesing, valg og disponering ligger utenfor dem", "Fordi eksamenstiden i praksis er tre og en halv time når innlevering og tekniske forhold trekkes fra", "Fordi de tolv minuttene også skal romme lesingen av de seks spørsmålene og valget mellom dem", "Fordi langsvaret alltid tar lengre tid enn de nitti minuttene som er satt av til det i budsjettet"],
      explanation: "Riktig er at de tolv minuttene er ren skrivetid på et svar du allerede har valgt. Settlesing og valg tar cirka ti minutter, disponering av langsvaret cirka ti, og 35 til 45 minutter er buffer til kladd og gjennomlesing. Bruker du skrivetiden til å bestemme deg, har du i praksis seks minutter.",
    },
    {
      question: "En kandidat skriver: «Status betyr hvor høyt opp man er i samfunnet.» Hvilken feil er dette?",
      options: ["Feil nummer 6 — en flat definisjon som ikke treffer den bruken pensumforfatteren har av begrepet", "Feil nummer 1 — teori uten etnografisk forankring, siden det ikke er noe eksempel", "Feil nummer 8 — å overse begrepets distinksjon mellom tilskrevet og ervervet status", "Feil nummer 9 — å naturalisere det sosiale ved å gjøre posisjon til noe medfødt"],
      explanation: "Riktig er feil nummer 6. Setningen bruker dagligtalens betydning, der status er anseelse, mens faget bruker det om en sosial posisjon med plikter og rettigheter. De andre feilene er reelle, men de gjelder henholdsvis manglende eksempel, manglende distinksjon og biologisering.",
    },
    {
      question: "Hva er den beste bruken av de tre første minuttene i Del 1?",
      options: ["Å skrive navnet på en etnografi i margen ved hvert av de seks spørsmålene", "Å skrive en full disposisjon for det første kortsvaret du har bestemt deg for", "Å lese gjennom alle seks spørsmålene to ganger for å være sikker på ordlyden", "Å begynne på det spørsmålet du kjenner best, slik at du kommer raskt i gang"],
      explanation: "Riktig er margnotatet med etnografi ved hvert spørsmål. Det gjør valget synlig i stedet for følt, og det avslører hvilke svar som mangler belegg. Å begynne raskt på favorittspørsmålet er nettopp veien til feil nummer 12, ubalansert besvarelse.",
    },
  ],
  'sosant1000-9-2': [
    {
      question: "Hva sier 3-referanse-regelen i Del 2?",
      options: ["At et langsvar normalt skal bygge på minst tre pensumtekster, og at én eller to trekker ned uansett øvrig kvalitet", "At et langsvar skal bygge på minst tre pensumtekster, men bare i de tilfellene der oppgaveteksten sier det uttrykkelig", "At et langsvar skal ha minst tre etnografiske eksempler, som gjerne kan hentes fra én og samme pensumtekst", "At et langsvar skal navngi minst tre forfattere, mens det er nok at én av dem har eget feltmateriale"],
      explanation: "Riktig er kravet om minst tre pensumtekster, med trekk for én eller to uansett kvalitet. Kravet står som regel i oppgaveteksten, men det gjelder også når det ikke gjør det. Tre eksempler fra samme tekst dekker ikke kravet, som gjelder tekster, ikke eksempler.",
    },
    {
      question: "Hva er den første av de to presiseringene som alltid følger 3-referanse-regelen?",
      options: ["At tre tekster nevnt ikke er tre tekster brukt — hver må bære et eksempel argumentet hviler på", "At tre tekster er et minimum, og at fire eller fem alltid gir bedre uttelling enn tre", "At de tre tekstene må være hentet fra tre ulike deler av pensumlista for at de skal telle som tre selvstendige kilder", "At minst én av de tre tekstene må være årets monografi, uansett hva oppgaven handler om"],
      explanation: "Riktig er at tekstene må være brukt, ikke bare nevnt. Testen er å stryke setningen der teksten nevnes: ble argumentet svakere, er teksten brukt. Antall slår ikke kvalitet — tre tekster brukt godt slår fem nevnt.",
    },
    {
      question: "Hva er den andre presiseringen — helhetsvurderingen?",
      options: ["At sensor veier eksamen som helhet, slik at gode kortsvar kan gjøre færre tekster i langsvaret akseptabelt", "At sensor vurderer Del 1 og Del 2 helt uavhengig av hverandre, slik at svakheter i den ene delen aldri kan veies opp", "At sensor ser bort fra kildekravet dersom besvarelsen ellers holder et jevnt og godt faglig nivå", "At sensor teller alle tekster som er nevnt i besvarelsen, også de som bare står i en bisetning"],
      explanation: "Riktig er at sensor veier eksamen som helhet. Har kortsvarene dokumentert god pensumbeherskelse, er færre tekster i langsvaret akseptabelt. Men ventilen er noe sensor har, ikke noe du planlegger med — sikt alltid på tre brukte tekster.",
    },
    {
      question: "Hva bør de første ti minuttene av langsvarstiden brukes til?",
      options: ["Disponering: telle instruksjonsverb, finne det flertydige ordet, sette tråden og gi hvert avsnitt en funksjon", "Å skrive en fyldig innledning som presenterer temaet og annonserer hvilke tekster som skal brukes", "Å lese gjennom alle tre langsvarsalternativene på nytt før du bestemmer deg for hvilket du velger", "Å skrive ned alt du husker om temaet i stikkord, slik at ingenting av det du kan, går tapt underveis i skrivingen"],
      explanation: "Riktig er disponering. De ti minuttene er den best betalte tiden i Del 2, fordi de avgjør om teksten får en tråd eller blir en oppramsing. Valget mellom de tre alternativene tas i de ti minuttene som brukes på hele settet, før Del 1.",
    },
    {
      question: "Hvilken av disse er en analytisk tråd, og ikke en innholdsfortegnelse?",
      options: ["«Jeg vil argumentere for at påstanden holder også der den ser minst plausibel ut, i moderne markedsøkonomi»", "«I det følgende skal jeg se på tre ulike antropologiske perspektiver på økonomi og samfunn»", "«Denne oppgaven vil belyse temaet ved hjelp av Mauss, Lien og Millar, i den rekkefølgen som er nevnt her»", "«Først gjør jeg rede for gaveteorien, deretter for lakseoppdrett, og til slutt for prekært arbeid»"],
      explanation: "Riktig er den første: den er et standpunkt noen kunne vært uenig i, og den gir hvert avsnitt en jobb. De tre andre annonserer rekkefølge. En tråd svarer på oppgaven; en innholdsfortegnelse beskriver teksten.",
    },
    {
      question: "Hvordan tester du om en pensumtekst er brukt eller bare nevnt?",
      options: ["Stryk setningen der teksten nevnes, og se om argumentet ble svakere", "Tell hvor mange ganger forfatterens navn står i besvarelsen din til sammen", "Sjekk om teksten har fått minst like mye plass som de to andre tekstene", "Sjekk om teksten er nevnt både i innledningen og i den avsluttende landingen"],
      explanation: "Riktig er stryketesten. Kan setningen fjernes uten tap, er teksten nevnt og teller ikke på akse 2. Antall omtaler og plassering sier ingenting om hvorvidt teksten faktisk bærer et ledd i argumentet.",
    },
    {
      question: "Hvilken av de tre koblingsformene gir mest uttelling, og hvorfor?",
      options: ["Spenningen, fordi den tvinger frem en mer presis konklusjon i stedet for en mer forsiktig", "Likheten, fordi den viser at kandidaten har oversikt over hva tekstene har felles", "Forskjellen, fordi den viser at kandidaten kjenner hver tekst godt nok til å skille dem", "Alle tre gir lik uttelling, siden det er selve koblingen sensor teller på akse 3"],
      explanation: "Riktig er spenningen. Likhet og forskjell er gode koblinger, men spenningen mellom to tekster tvinger frem en skarpere konklusjon, og sensorveiledningene omtaler den formen som analytisk kreativitet.",
    },
    {
      question: "Hvorfor kan ikke Eriksens grunnbok være det etnografiske belegget i et langsvar?",
      options: ["Fordi den er en syntese uten eget feltmateriale, og derfor bærer argumentet, ikke belegget", "Fordi den er en lærebok, og lærebøker regnes ikke som pensumtekster i denne sammenhengen", "Fordi den er for generell til at sensor godtar den som en av de tre påkrevde tekstene", "Fordi den ikke omtaler etnografiske eksempler i det hele tatt, bare teoretiske begreper"],
      explanation: "Riktig er at grunnboka er en syntese uten eget feltmateriale. Den er en fullgod pensumtekst og teller i de tre, men belegget på akse 1 må komme fra studier med eget felt. Det samme gjelder Mauss, som ikke gjorde feltarbeid.",
    },
    {
      question: "Hva er den vanligste enkeltårsaken til trekk i langsvar, ifølge arkivet boka er kalibrert mot?",
      options: ["Feil nummer 2 — at besvarelsen bygger på bare én eller to pensumtekster", "Feil nummer 5 — at kandidaten svarer på temaet i stedet for på selve spørsmålet", "Feil nummer 6 — at definisjonene er flate og ikke treffer forfatterens egen bruk", "Feil nummer 1 — at teoretiske påstander står helt uten etnografisk forankring"],
      explanation: "Riktig er feil nummer 2, for få kilder. De andre er reelle og hyppige feil, men det er kildekravet som er den vanligste enkeltårsaken til trekk i Del 2 — og det som trekker ned uansett hvor godt besvarelsen ellers er skrevet.",
    },
    {
      question: "Hva kjennetegner den typiske gode besvarelsen som ikke ble meget god?",
      options: ["Tre riktige tekster med hvert sitt eksempel, men ramset opp side om side uten at noe møtes", "Én grundig behandlet tekst med et svært presist etnografisk eksempel og en skarp konklusjon", "Tre tekster som er koblet tett sammen, men der ingen av dem har konkrete etnografiske eksempler", "En lang og velskrevet framstilling som mangler både innledning og avsluttende konklusjon"],
      explanation: "Riktig er de parallelle avsnittene — feil nummer 4, tekstene ikke koblet. Alt er korrekt, ingenting er satt sammen. Det er den letteste feilen å reparere: tre overgangssetninger flytter svaret fra god mot meget god.",
    },
    {
      question: "Hvor i teksten bør koblingene mellom pensumtekstene stå?",
      options: ["Inne i midtavsnittene og i overgangene mellom dem, ikke i et eget avsnitt til slutt", "I et eget sammenligningsavsnitt til slutt, rett før den avsluttende landingen", "I innledningen, slik at leseren vet hvordan tekstene henger sammen fra starten", "Fordelt jevnt utover, med minst én kobling i hvert eneste avsnitt i besvarelsen"],
      explanation: "Riktig er inne i avsnittene og i overgangene. Et eget sammenligningsavsnitt til slutt leses som en oppsummering og gir sjelden uttelling. Koblingene skal gi det neste avsnittet en jobb, og da må de stå der overgangen skjer.",
    },
    {
      question: "Hva kreves av landingen i et langsvar?",
      options: ["At den svarer på spørsmålet som faktisk ble stilt, og at konklusjonen er begrunnet", "At den er avveiende og tar forbehold, siden en skarp konklusjon virker uvitenskapelig", "At den oppsummerer hva de tre pensumtekstene har vist, tekst for tekst", "At den peker på hva videre forskning på feltet burde undersøke nærmere"],
      explanation: "Riktig er at landingen skal svare på oppgaven og være begrunnet. Standpunktet er fritt: en skarp, etnografisk begrunnet konklusjon er en fullgod toppform. Forbehold er et verktøy, ikke obligatorisk garnityr, og «det er sammensatt» uten grunner er feil nummer 3 i ny drakt.",
    },
    {
      question: "Hvordan bør du velge de tre tekstene til et langsvar?",
      options: ["Formuler aksen oppgaven handler om som et spørsmål, og velg tekster som svarer ulikt på det", "Velg de tre tekstene du husker best, siden presisjon i gjengivelsen er det viktigste kriteriet", "Velg tre tekster fra tre ulike temadeler, slik at besvarelsen dekker mest mulig av pensumlista", "Velg de tre nyeste tekstene på pensumlista, siden nyere forskning veier tyngre i drøftingen"],
      explanation: "Riktig er å formulere aksen som et spørsmål først. Da blir det synlig hvilke tekster som har noe å si til hverandre. Fordelingen som virker er én rammetekst som gir begrepene og to etnografier som gir belegget.",
    },
    {
      question: "Hva skal de siste ti minuttene av langsvarstiden brukes til?",
      options: ["Til å telle tekstene og sjekke at hver av dem har et etnografisk eksempel", "Til å skrive ferdig det siste avsnittet, siden tiden nesten alltid blir for knapp", "Til å lese gjennom hele besvarelsen og rette skrivefeil og uklare formuleringer", "Til å legge til en fjerde pensumtekst, slik at kildekravet er trygt oppfylt"],
      explanation: "Riktig er å telle. To av registerets feil kan repareres nettopp der: mangler en tekst, rekker du et avsnitt, og mangler koblingen, rekker du to setninger. Å lete etter skrivefeil er mindre verdt enn å kontrollere kildekravet og koblingene.",
    },
  ],
  'sosant1000-9-3': [
    {
      question: "Hva er en sammenligningsakse?",
      options: ["Et spørsmål som kan stilles til begge fenomenene, og som de to svarer ulikt på", "Et trekk ved det ene fenomenet som det andre fenomenet mangler helt og holdent", "En overskrift som deler besvarelsen i to like store deler, én for hvert fenomen", "En pensumtekst som behandler begge fenomenene og dermed binder dem sammen i teksten"],
      explanation: "Riktig er spørsmålet som kan stilles til begge. Testen er nettopp om spørsmålet lar seg stille til begge ledd. Kan det bare stilles til det ene, er det et trekk ved det ene og hører ikke hjemme i sammenligningen.",
    },
    {
      question: "Hva er forskjellen mellom aksestruktur og blokkstruktur i en komparativ besvarelse?",
      options: ["Aksestrukturen tar én akse per avsnitt med begge ledd; blokkstrukturen tar alt om det ene først", "Aksestrukturen bruker punktlister og tabeller, mens blokkstrukturen bruker sammenhengende prosa", "Aksestrukturen krever minst tre pensumtekster, mens blokkstrukturen klarer seg godt med to av dem", "Aksestrukturen brukes i langsvaret i Del 2, mens blokkstrukturen er den riktige formen i kortsvarene"],
      explanation: "Riktig er organiseringen: én akse per avsnitt med begge ledd, mot alt om X først og deretter alt om Y. Blokkstrukturen gjør sammenligningen usynlig og gjør det lett å glemme det andre leddet — som er feil nummer 11.",
    },
    {
      question: "Hva er feil nummer 11?",
      options: ["Ensidig komparasjon — bare det ene leddet blir faktisk beskrevet og belagt", "Å bruke bare to pensumtekster i en oppgave som krever minst tre av dem", "Å sammenligne to fenomener som ikke hører hjemme i samme analytiske ramme", "Å ramse opp tre tekster side om side uten å koble dem til hverandre i teksten"],
      explanation: "Riktig er ensidig komparasjon. Å ramse opp tekster uten kobling er feil nummer 4, og for få kilder er feil nummer 2. Den mekaniske motgiften mot nummer 11 er å telle setningene som handler om hvert ledd.",
    },
    {
      question: "Hvorfor rammer kravet om etnografisk belegg særlig skjevt i en komparativ oppgave?",
      options: ["Fordi det klassiske leddet ofte er dekket i pensum, mens det moderne leddet lett belegges med egne antagelser", "Fordi sensor krever dobbelt så mange etnografiske eksempler i en komparativ oppgave som i et vanlig langsvar", "Fordi etnografiske eksempler sjelden finnes for begreper som sammenlignes med hverandre", "Fordi de fleste pensumtekstene handler om nyere samfunn og ikke om klassiske feltarbeid"],
      explanation: "Riktig er pensumskjevheten. Det ene leddet har gjerne en klassisk studie, mens det andre er «vårt eget samfunn». Motgiften er å bruke en pensumetnografi også der — Lien, Millar eller Shah studerer alle samtidige, markedsintegrerte samfunn.",
    },
    {
      question: "Når teller en likhet i en komparativ besvarelse?",
      options: ["Når den er overraskende og flytter forskjellen til et mer presist sted", "Når den kan dokumenteres med et etnografisk eksempel fra hver av de to sidene", "Når den nevnes i innledningen, slik at leseren vet hva som skal sammenlignes", "Når den gjelder alle de aksene besvarelsen behandler, og ikke bare én av dem"],
      explanation: "Riktig er den overraskende likheten. At begge fenomenene handler om bytte, er premisset for at de kan sammenlignes, ikke et funn. En likhet som «begge er regelstyrte, men reglene er personlige i det ene tilfellet» gjør derimot forskjellen mer presis.",
    },
    {
      question: "Hva er det fjerde kravet i sjangeren, ved siden av akser, begge ledd og belegg?",
      options: ["En kort vurdering av hva likheten eller forskjellen betyr", "En innledning som presenterer begge fenomenene hver for seg", "En redegjørelse for hvorfor nettopp disse to fenomenene kan sammenlignes", "En avsluttende tabell som samler alle aksene i oversiktlig form"],
      explanation: "Riktig er vurderingen. Uten den er svaret en tabell og ikke en analyse, og rent beskrivende svar plasseres lavt. Vurderingen skal ikke være en oppsummering av aksene, men si hva sammenligningen viser.",
    },
    {
      question: "Hva er komparasjonens to feller slik faget selv formulerer dem?",
      options: ["Å overdrive likheten innad i hvert ledd, og å overdrive forskjellen mellom de to leddene", "Å bruke for mange akser, og å bruke for få etnografiske eksempler på hver av dem", "Å sammenligne to ulike historiske perioder, og å sammenligne to ulike geografiske områder", "Å velge et par som ikke har kommet på eksamen, og å velge for mange par å forberede"],
      explanation: "Riktig er de to overdrivelsene. «Adivasi-kulturen» i entall overdriver likheten innad; å gjøre de to leddene til hverandres motsetning på alle punkter overdriver forskjellen mellom dem, og da forsvinner de ikke-trivielle likhetene.",
    },
    {
      question: "Hvorfor er det galt å lese skillet mellom småskala- og storskalasamfunn som en utviklingsstige?",
      options: ["Fordi skillet betegner organisasjonsform og folketall, ikke trinn i en utvikling", "Fordi alle samfunn i dag er storskalasamfunn, slik at skillet ikke lenger er aktuelt", "Fordi småskalasamfunn er mer komplekse enn storskalasamfunn på flere av aksene", "Fordi antropologien ikke sammenligner samfunn av ulik størrelse med hverandre"],
      explanation: "Riktig er at skillet gjelder organisasjonsform, ikke utviklingstrinn. Den evolusjonistiske trappen fra «primitiv» til «sivilisert» er en faghistorisk ramme flere av fagets klassikere er skrevet innenfor, og som faget senere har forlatt. Å si det i én setning gir uttelling.",
    },
    {
      question: "Hva er den viktigste presiseringen i en sammenligning mellom et markedssamfunn og Adivasi-samfunn?",
      options: ["At Adivasi ikke er utenfor markedsøkonomien, men koblet til den på andres premisser", "At Adivasi lever i en tradisjonell økonomi som ennå ikke er berørt av det indiske markedet", "At sammenligningen først og fremst gjelder forholdet mellom fortid og nåtid i India", "At Adivasi utgjør én folkegruppe med ett felles språk og én felles økonomisk organisering"],
      explanation: "Riktig er koblingen på andres premisser — formelen er «utenfor beslutningene, innenfor kretsløpet». Områdene er svært etterspurte for mineraler og prosjekter. Adivasi er dessuten mange folk med ulike språk og historier, ikke én gruppe, og sammenligningen gjelder samtidige forhold.",
    },
    {
      question: "Hvordan bør «Scheduled Tribes» behandles i en besvarelse?",
      options: ["Som statens administrative kategori med kolonial forhistorie, omtalt med avsender", "Som en nøytral juridisk betegnelse som kan brukes om hverandre med Adivasi", "Som folkegruppenes egen betegnelse på seg selv i møte med indiske myndigheter", "Som en foreldet kategori som ikke lenger har rettslig betydning i India i dag"],
      explanation: "Riktig er statens kategori, omtalt med avsender og anførselstegn. Folkegruppenes egen betegnelse er Adivasi. Kategorien har fortsatt rettslig betydning, og dobbeltheten hører med: den er både et redskap for kontroll og grunnlaget for rettigheter og kvoteordninger.",
    },
    {
      question: "Hvor mange sammenligningsakser bør en komparativ besvarelse ha?",
      options: ["To i et kortsvar og tre til fire i et langsvar; flere blir en liste uten vurdering", "Alltid fire, uansett om oppgaven kommer i Del 1 eller i Del 2 av eksamenssettet", "Så mange som mulig, siden hver akse viser at kandidaten kjenner begge fenomenene", "Én grundig behandlet akse, siden dybde alltid vurderes høyere enn bredde her"],
      explanation: "Riktig er to i kortsvar og tre til fire i langsvar. Flere enn fire gjør besvarelsen til en liste, og da forsvinner vurderingen av hva forskjellene betyr — som er det fjerde kravet i sjangeren.",
    },
    {
      question: "Hvilken av disse er en ekte sammenligningsakse for gavebytte og markedsbytte?",
      options: ["Hva skjer med forholdet mellom partene etter at byttet er avsluttet?", "Kula-gjenstandene sirkulerte mellom øyene i Massim-området i Papua Ny-Guinea", "Mauss bygde analysen sin på Malinowskis materiale og gjorde ikke feltarbeid selv", "Markedsbytte forutsetter et omfattende apparat av kontrakter og eiendomsrett"],
      explanation: "Riktig er spørsmålet om hva som skjer etterpå: gavebyttet svarer at forholdet fortsetter, markedsbyttet at partene er ferdige med hverandre. De tre andre er opplysninger om det ene leddet eller om kilden, ikke spørsmål begge kan svare på.",
    },
  ],
  'sosant1000-9-4': [
    {
      question: "Hvilke tre krav stiller monografi-langsvaret?",
      options: ["Konkret empiri fra monografien, kobling til minst én annen pensumtekst, og metoderefleksjon", "Et sammendrag av monografien, en vurdering av metoden, og en konklusjon om verkets relevans", "Minst tre pensumtekster, en historisk innledning, og en drøfting av forskningsetiske spørsmål", "En presentasjon av forfatteren, en gjennomgang av funnene, og en sammenligning med en annen monografi"],
      explanation: "Riktig er empiri, kobling og metoderefleksjon. Det siste er kravet som er særegent for sjangeren, og det som oftest mangler i ellers gode svar. Et sammendrag av boka er ikke et svar — empiri skal brukes til å prøve en påstand.",
    },
    {
      question: "Hva er feil nummer 10?",
      options: ["Monografioppgave uten dybde i monografien — et generelt essay der boka nevnes i en setning", "Å gjenfortelle handlingen i monografien uten å drøfte noe av det som legges frem", "Å bruke bare monografien og ingen andre pensumtekster i besvarelsen sin", "Å lese monografien ensidig, enten som forsvarstale eller som avsløring av det som beskrives"],
      explanation: "Riktig er det generelle essayet uten dybde i boka. De andre er reelle feil med andre numre: referat er feil nummer 3, for få kilder er feil nummer 2, og den ensidige lesningen er en faglig feiltilskrivning uten eget nummer.",
    },
    {
      question: "Hva er strykprøven på om du har begått feil nummer 10?",
      options: ["Stryk alle setninger som handler konkret om monografien, og se om det står et helt essay igjen", "Tell hvor mange ganger monografiens tittel og forfatterens navn er nevnt i selve besvarelsen din", "Sjekk om monografien er nevnt både i innledningen og i den avsluttende landingen", "Sjekk om empiriblokka er minst like lang som innledningen og landingen til sammen"],
      explanation: "Riktig er strykprøven. Blir teksten stående som et fullgodt essay uten setningene om boka, har du svart på en annen oppgave enn den som ble stilt. Antall omtaler av tittelen sier ingenting om dybden.",
    },
    {
      question: "Hva gjør et avsnitt med empiri fra monografien konkret?",
      options: ["At det sier hvordan noe skjedde — hvem, hvor, med hvilke midler — og ikke bare at det skjedde", "At det er langt nok til å fylle minst en tredel av den samlede besvarelsen", "At det gjengir forfatterens egne formuleringer så presist og ordrett som det overhodet lar seg gjøre", "At det plasserer hendelsene i monografien i riktig kronologisk rekkefølge"],
      explanation: "Riktig er at det sier hvordan. Testen er om avsnittet kunne vært skrevet av en som bare hadde lest baksideteksten. Lengde alene gjør ikke empiri konkret, og ordrette gjengivelser er verken påkrevd eller ønskelig.",
    },
    {
      question: "Hvordan bør koblingen til den andre pensumteksten skrives?",
      options: ["Som en sammenligning med eget etnografisk eksempel: «Der X viser …, viser Y …»", "Som en henvisning til at temaet også er behandlet av en annen pensumforfatter", "Som et eget avsnitt til slutt der alle tekstene i besvarelsen oppsummeres", "Som en fotnote der forfatter, verk og utgivelsesår står oppført i riktig rekkefølge"],
      explanation: "Riktig er sammenligningsformen med eget eksempel. «Dette kan også knyttes til Farmer» kan strykes uten at argumentet blir svakere — og da er teksten nevnt, ikke brukt. Sluttoppsummeringer leses ikke som koblinger.",
    },
    {
      question: "Hva er de fire grepene i en fullverdig metoderefleksjon?",
      options: ["Hva metoden gjorde mulig, hvorfor funnene krevde den, hvilke grenser den satte, og forskerens posisjon", "Hvilken metode som ble brukt, hvor lenge feltarbeidet varte, hvor mange informanter, og hvilke etiske godkjenninger", "En vurdering av metodens pålitelighet, av utvalgets størrelse, av generaliserbarheten, og av kildekritikken", "En sammenligning med intervju, med spørreskjema, med arkivstudier, og med statistiske metoder"],
      explanation: "Riktig er de fire grepene. Refleksjonen handler om hvordan kunnskapen ble til, ikke om metodetekniske opplysninger. Særlig gjelder det grensene: det forskeren ikke fikk vite, er også et funn.",
    },
    {
      question: "Hvorfor er det en dårlig begrunnelse å si at deltagende observasjon gir «mer pålitelige data enn intervjuer»?",
      options: ["Fordi de to metodene svarer på ulike spørsmål — poenget er å sette det folk sier opp mot det de gjør", "Fordi intervjuer i praksis gir mer presise opplysninger enn observasjon over kort tid", "Fordi pålitelighet ikke er et begrep som brukes i kvalitativ samfunnsforskning i det hele tatt i dag", "Fordi deltagende observasjon alltid kombineres med intervjuer i et vanlig feltarbeid"],
      explanation: "Riktig er at metodene svarer på ulike spørsmål. Intervjuet gir tilgang til hvordan mennesker forstår og fremstiller sin situasjon, som er data i seg selv. Poenget er ikke at metoden avslører at folk lyver, men at praksis og selvbeskrivelse er to forskjellige ting.",
    },
    {
      question: "Hva er kriteriet for de tre opplysningene på beredskapslista?",
      options: ["Én om metoden, én om sosiale skiller og én om makt eller økonomi — og hver må kunne brukes til noe", "De tre opplysningene som står tidligst i monografien, slik at de er lettest å huske i eksamenslokalet", "Tre opplysninger fra det samme kapitlet i boka, slik at de henger sammen i framstillingen", "Tre opplysninger som ingen andre kandidater sannsynligvis vil komme til å bruke i sine svar"],
      explanation: "Riktig er fordelingen metode, sosiale skiller og makt eller økonomi, med kravet om at hver opplysning bærer et argument. Det er de tre retningene monografioppgaven oftest tar, og kriteriet virker like godt om emnet bytter monografi.",
    },
    {
      question: "Hvordan bør du formulere en kobling mellom Swansons «sacrifice zones» og Shahs materiale?",
      options: ["Som din egen anvendelse, siden Shah ikke bruker begrepet selv", "Som Shahs egen analyse, siden materialet passer godt til begrepet", "Uten å nevne Swanson, siden begrepet nå er allment brukt i faget", "Bare dersom oppgaveteksten uttrykkelig handler om miljø og klima"],
      explanation: "Riktig er å merke den som egen anvendelse. Å skrive som om Shah brukte begrepet, er en feiltilskrivning. En kobling du merker, teller derimot som selvstendig arbeid — og det er nettopp det akse 3 blant vurderingsaksene måler.",
    },
    {
      question: "Hva er den ensidige lesningen av årets monografi, og hvorfor er den feil?",
      options: ["Å lese boka enten som forsvarstale eller som avsløring — den viser begge deler, og funnene hører sammen", "Å lese boka som en fortelling om én marsj, når analysen bygger på langvarig feltarbeid i samme område", "Å lese boka som en metodebok, når den først og fremst er en analyse av politiske forhold i India", "Å lese boka som et innlegg i norsk debatt, når den handler om forhold i et helt annet land"],
      explanation: "Riktig er lesningen som enten forsvarstale eller avsløring. Frarøvelsen forklarer hvorfor bevegelsen finnes, motsetningene forklarer hvorfor den ikke uten videre er en løsning. Shah romantiserer ikke, og hun avslører ikke — den ensidige lesningen er feil i begge retninger.",
    },
  ],
  'sosant1000-9-5': [
    {
      question: "Hvilken feil begår denne kandidaten? «Holisme betyr at man ser samfunnet som en helhet, og at alt henger sammen. Dette skiller antropologien fra andre samfunnsfag.»",
      options: ["Feil nummer 1 — teori uten etnografisk forankring i en konkret, navngitt studie", "Feil nummer 6 — flat definisjon som ikke treffer forfatterens bruk av begrepet", "Feil nummer 8 — å overse begrepets distinksjon mot et nærliggende motbegrep", "Feil nummer 3 — rent referat uten drøfting av det som legges frem"],
      explanation: "Riktig er feil nummer 1. Alt som står er korrekt, men det finnes ikke et eneste egennavn i utdraget — ingen folk, ingen sted, ingen forsker. Varsellampen er nettopp et helt avsnitt uten egennavn.",
    },
    {
      question: "Hvilken feil begår denne kandidaten? «Prekaritet betyr at man er fattig og har det vanskelig. Millar skrev om søppelplukkere i Rio som levde under dårlige forhold.»",
      options: ["Feil nummer 6 — flat definisjon som ikke treffer forfatterens bruk", "Feil nummer 1 — teori uten etnografisk forankring i konkret pensummateriale", "Feil nummer 2 — for få pensumtekster brukt i en langsvarsbesvarelse", "Feil nummer 9 — å naturalisere det sosiale ved å gjøre fattigdom til en tilstand"],
      explanation: "Riktig er feil nummer 6. Prekaritet gjøres til et synonym for fattigdom, og da forsvinner det analytiske. Hos Millar er prekaritet en livsform med egen logikk — folk vendte tilbake til fyllinga fordi rytmen og selvstendigheten passet et ustabilt liv. Etnografien er der, så nummer 1 er ikke problemet.",
    },
    {
      question: "Hva er varsellampen for feil nummer 4, at tekstene ikke er koblet?",
      options: ["At midtavsnittene kan bytte plass uten at noe blir rart å lese", "At besvarelsen bruker færre enn tre pensumtekster i en langsvarsoppgave", "At ingen av pensumtekstene har et konkret etnografisk eksempel knyttet til seg", "At konklusjonen gjentar det som allerede står i selve oppgaveteksten"],
      explanation: "Riktig er ombyttingstesten. Kan avsnittene stokkes om uten at noe skurrer, er de parallelle og ikke koblede. For få tekster er feil nummer 2, og manglende eksempler er feil nummer 1.",
    },
    {
      question: "Hvem eier begrepet strukturell vold?",
      options: ["Johan Galtung, som formulerte det i 1969; Paul Farmer ga det etnografisk innhold", "Paul Farmer, som utviklet det gjennom sitt langvarige arbeid på Haiti", "Johan Galtung og Paul Farmer, som utviklet begrepet sammen i løpet av 1990-tallet", "Alpa Shah, som bruker det om frarøvelsen av land i det sentrale India"],
      explanation: "Riktig er Galtung, med Farmer som den som gir begrepet etnografisk innhold. Å skrive at Farmer fant det opp, er en feiltilskrivning sensor merker — og å ha presisjonen på plass er den enkeltopplysningen som løfter et svar mest i dette stoffet.",
    },
    {
      question: "Hvilken feil begår denne kandidaten? «Gavebyttet er personlig og skaper varige bånd, slik kula og potlatch viser. Markedsbyttet er upersonlig.»",
      options: ["Feil nummer 11 — ensidig komparasjon, der bare det ene av de to leddene er belagt", "Feil nummer 8 — å overse den distinksjonen som gir begrepene mening", "Feil nummer 6 — flate definisjoner av både gavebytte og markedsbytte", "Feil nummer 4 — at pensumtekstene ikke er koblet til hverandre i teksten"],
      explanation: "Riktig er feil nummer 11. Gaveleddet har to etnografiske eksempler, markedsleddet har fire ord og ingen. Distinksjonen er faktisk til stede, så nummer 8 er ikke problemet — det som mangler, er belegg på det andre leddet.",
    },
    {
      question: "Hva er strykprøven på om en besvarelse begår feil nummer 10?",
      options: ["Stryk alle setninger som handler konkret om monografien, og se om et helt essay står igjen", "Stryk innledningen og konklusjonen, og se om midtdelen fortsatt henger sammen", "Stryk alle setninger som inneholder etnografiske eksempler, og se hvor mye teori som blir stående igjen", "Stryk den tredje pensumteksten, og se om argumentet fortsatt holder uten den"],
      explanation: "Riktig er å stryke monografisetningene. Blir teksten stående som et fullgodt generelt essay, har kandidaten svart på en annen oppgave enn den som ble stilt — og feilen ligger derfor tett opptil feil nummer 5, misforstått oppgave.",
    },
    {
      question: "Hvilken feil begår denne kandidaten? «Kaste går i arv, og det er derfor systemet ligner biologisk slektskap og er så vanskelig å endre.»",
      options: ["Feil nummer 9 — å naturalisere det sosiale", "Feil nummer 6 — en flat definisjon av kaste som sosial kategori", "Feil nummer 1 — manglende etnografisk forankring av påstanden om arv", "Feil nummer 8 — å overse skillet mellom tilskrevet og ervervet status"],
      explanation: "Riktig er feil nummer 9. Tregheten forklares biologisk, mens kaste er en tilskrevet status som opprettholdes av mennesker gjennom regler om ekteskap, arbeid og omgang. At noe er sosialt skapt, betyr ikke at det er lett å endre — det betyr at det er mennesker som opprettholder det.",
    },
    {
      question: "Hva sier presiseringen «tre tekster nevnt er ikke tre tekster brukt»?",
      options: ["At hver tekst må bære et etnografisk eksempel argumentet faktisk hviler på", "At de tre tekstene må omtales i minst tre setninger hver i besvarelsen", "At tekstene må stå i litteraturlista og ikke bare nevnes i selve teksten", "At minst tre av tekstene må være hentet fra den obligatoriske pensumlista i emnet"],
      explanation: "Riktig er kravet om at teksten bærer et eksempel argumentet hviler på. Testen er å stryke setningen der teksten nevnes: ble argumentet svakere, er teksten brukt. Antall setninger sier ingenting om dette.",
    },
    {
      question: "Hvorfor er feil nummer 5, misforstått oppgave, den alvorligste på enkeltnivå?",
      options: ["Fordi den kan gi F på et enkelt kortsvar, og to slike blant de fire valgte utløser strykregelen", "Fordi den viser at kandidaten ikke har lest pensum grundig nok til å kjenne igjen de sentrale begrepene", "Fordi den alltid opptrer sammen med feil nummer 1 og feil nummer 3 i samme besvarelse", "Fordi den ikke lar seg reparere selv om kandidaten har god tid igjen på slutten"],
      explanation: "Riktig er strykfaren. Et svar ved siden av oppgaven kan gi F uansett hvor godt det er skrevet, og strykregelen i Del 1 utløses av to F blant de fire valgte — med helhetsvurderingen som eneste forbehold. Feilen er dessuten lett å reparere: tell instruksjonsverbene.",
    },
    {
      question: "Hva er den mekaniske motgiften mot feil nummer 11?",
      options: ["Tell setningene som handler om hvert av de to leddene", "Skriv om besvarelsen slik at hvert ledd får sitt eget avsnitt", "Legg til en tredje pensumtekst som dekker begge de to leddene", "Bytt om på rekkefølgen slik at det svakeste leddet kommer først"],
      explanation: "Riktig er å telle setningene per ledd. Har det ene dobbelt så mange som det andre, er komparasjonen ensidig uansett hvor godt innholdet er. Å gi hvert ledd sitt eget avsnitt er derimot blokkstrukturen, som er en del av problemet, ikke løsningen.",
    },
    {
      question: "Hvilken feil begår denne kandidaten? «Mauss beskrev de tre pliktene. Lien beskrev norsk lakseoppdrett. Millar beskrev søppelplukkere i Rio. Alle tre viser at økonomi henger sammen med annet.»",
      options: ["Feil nummer 4 — tekstene er ikke koblet til hverandre noe sted i besvarelsen", "Feil nummer 2 — for få pensumtekster brukt i denne langsvarsbesvarelsen", "Feil nummer 1 — teoretiske påstander uten konkret etnografisk forankring", "Feil nummer 10 — for lite dybde i den monografien oppgaven ba om"],
      explanation: "Riktig er feil nummer 4. Tre tekster, tre riktige eksempler, og ingen setning som binder dem sammen — konklusjonen summerer bare. Kildekravet er oppfylt, og eksemplene finnes, så nummer 2 og nummer 1 er ikke problemet her.",
    },
    {
      question: "Hva er reparasjonsrekkefølgen når en besvarelse har flere feil samtidig?",
      options: ["Sjangerfeil før kvalitetsfeil, og tråden før koblingene", "Den letteste feilen først, slik at mest mulig rettes på kortest tid", "Kildekravet først, siden det er den vanligste årsaken til trekk", "Språk og struktur først, siden de påvirker hele lesningen av teksten"],
      explanation: "Riktig er sjangerfeil før kvalitetsfeil, og tråd før koblinger. En besvarelse som svarer på feil sjanger, har svart på en annen oppgave, og da hjelper ikke kvaliteten. Og når tråden er på plass, skriver koblingene seg nesten selv.",
    },
    {
      question: "Hva er varsellampen for feil nummer 8?",
      options: ["At du har definert et begrep uten å bruke «mens» eller «i motsetning til»", "At definisjonen du har skrevet, kunne stått i en avis uten å virke det minste fremmed", "At du ikke har navngitt hvilken pensumforfatter begrepet er hentet fra", "At du har brukt over tjue minutter på ett og samme kortsvar"],
      explanation: "Riktig er fraværet av et motbegrep. Nesten alle kortsvarsbegrepene i faget kommer i par, og distinksjonen er en del av definisjonen. Avisdefinisjonen er varsellampen for feil nummer 6, og tjue minutter på ett kortsvar er varsellampen for feil nummer 12.",
    },
    {
      question: "Hva menes med at feil nummer 12, ubalansert besvarelse, er en lesefeil og ikke en eksamensfeil?",
      options: ["At ubalansen oppstår i lesefasen, når man bruker mesteparten av tiden på favorittemaet", "At den bare rammer kandidater som ikke har lest hele pensumlista grundig nok", "At sensor vurderer kandidatens lesevaner like mye som selve besvarelsen i Del 1 av eksamen", "At den bare kan oppdages i ettertid, når karakteren allerede er satt"],
      explanation: "Riktig er at ubalansen skapes i lesefasen. Har du to gjenbrukbare etnografier i hvert av kjernetemaene, finner du alltid fire kortsvar du kan forankre. Regelen er bredde i temaer og dybde i eksempler, i den rekkefølgen.",
    },
    {
      question: "Hvorfor er det galt å skrive at Evans-Pritchard viste at Nuer levde i anarki?",
      options: ["Fordi han viste orden uten sentralstat — et segmentært system der grupper fusjonerer og splittes", "Fordi han aldri undersøkte politiske forhold, men konsentrerte seg om religion og ritualer", "Fordi Nuer på 1930-tallet var underlagt britisk kolonialadministrasjon og dermed hadde en stat", "Fordi begrepet anarki tilhører en annen faglig tradisjon enn den antropologiske"],
      explanation: "Riktig er orden uten sentralstat. «Anarki» i dagligtalens betydning er det motsatte av poenget: konflikter ble håndtert innenfor slektskapssystemet, etter faste prinsipper. Kolonialkonteksten er reell og verdt å nevne, men den er ikke grunnen til at formuleringen er gal.",
    },
  ],
  'sosant1000-9-6': [
    {
      question: "Hva skiller minimumskrav fra god i dette kortsvaret?",
      options: ["Et konkret etnografisk eksempel fra pensum, med folk, sted, forsker og hva studien viste", "En lengre og mer utfyllende framstilling av begge de to statustypene", "En eksplisitt konklusjon som svarer direkte på det oppgaveteksten spør om", "En drøfting av om skillet mellom de to statustypene i det hele tatt er analytisk nyttig"],
      explanation: "Riktig er pensumetnografien. Avstanden fra minimumskrav til god er nesten alltid etnografien; avstanden fra god til meget god er nesten alltid koblingen. Lengde er ikke kriteriet — meget god-versjonen er bare ett avsnitt lengre enn god-versjonen.",
    },
    {
      question: "Hvorfor holder det ikke å bruke et selvlaget eksempel, som legen som tok utdanning?",
      options: ["Fordi oppgaven ber om et eksempel fra pensum, og et hverdagseksempel kommer i tillegg, aldri i stedet", "Fordi selvlagde eksempler ofte inneholder faktiske feil som sensor er nødt til å trekke for i vurderingen", "Fordi hverdagseksempler bare kan brukes i langsvar, der det er plass til å utdype dem grundig nok", "Fordi legeeksempelet blander sammen tilskrevet og ervervet status på en uklar måte"],
      explanation: "Riktig er pensumkravet. Hverdagseksempelet viser at du har forstått begrepet; pensumetnografien viser at du kan bruke det på materiale du ikke har laget selv, og det er akse 1 som måler det. Hverdagseksempelet er ikke forbudt — det er bare ikke nok.",
    },
    {
      question: "Hva er den viktigste presisjonen når skillet tilskrevet og ervervet forklares?",
      options: ["At skillet gjelder tildelingsmåten, ikke hva posisjonen er verdt", "At tilskrevet status alltid er vanskeligere å endre enn ervervet status", "At ervervet status er mer utbredt i moderne samfunn enn i småskalasamfunn", "At de to typene aldri finnes hos samme person på samme tid"],
      explanation: "Riktig er tildelingsmåten. Mange smugler inn en vurdering ved å skrive at ervervet status er «fortjent». En arvet gjeld er også tilskrevet, og en ervervet posisjon kan være foraktet. De to typene finnes dessuten hos samme person samtidig.",
    },
    {
      question: "Hva er A-markøren i meget god-versjonen av dette svaret?",
      options: ["At adgangen til de ervervede posisjonene selv var fordelt etter de tilskrevne", "At svaret navngir tre pensumforfattere i stedet for bare den ene grunnboka", "At svaret er skrevet i et mer akademisk språk enn de to andre versjonene", "At svaret bruker årets monografi i stedet for et vanlig eksempel hentet fra grunnboka"],
      explanation: "Riktig er observasjonen om at adgangen til det ervervede var fordelt etter det tilskrevne. Det er akse 3, selvstendige koblinger — kandidaten prøver distinksjonen i stedet for å gjengi den. Antall navn og språklig register er ikke det som måles.",
    },
    {
      question: "Hvorfor er formuleringen «tilskrevet status er noe man er født med» upresis?",
      options: ["Fordi kaste og slektstilhørighet er tildelt sosialt, ikke medfødt i biologisk forstand", "Fordi alder er en tilskrevet status som likevel endrer seg gjennom hele livsløpet", "Fordi begrepet også omfatter statuser man blir tildelt av offentlige myndigheter senere i livet", "Fordi ingen statuser er helt tilskrevne når man ser nøye etter på fordelingen"],
      explanation: "Riktig er at tilskrevne statuser er sosialt tildelte, ikke naturgitte. Formuleringen ligger tett opptil feil nummer 9, å naturalisere det sosiale. At de ikke kan velges bort av den enkelte, betyr ikke at naturen har delt dem ut.",
    },
    {
      question: "Hva sier tre-nivå-graderingen om et svar som er helt korrekt, men uten etnografi?",
      options: ["At det når minimumskravet, men ikke kan nå toppen uansett hvor presist det ellers er", "At det plasseres på god, siden alt som står der faktisk er riktig gjengitt", "At det får trekk for feil nummer 5, fordi oppgaven ikke er besvart som stilt", "Fordi det vurderes helt individuelt, siden etnografikravet strengt tatt bare gjelder i langsvarene"],
      explanation: "Riktig er at det når minimumskravet og ikke toppen. Sensorveiledningene beskriver minimumsnivået som korrekt definisjon eller gjengivelse uten distinksjonens dybde og uten etnografi — og et abstrakt, eksempelløst svar kan ikke nå toppen. Etnografikravet gjelder også i Del 1.",
    },
  ],
  'sosant1000-9-7': [
    {
      question: "Hva skiller den svake fra den sterke versjonen av påstanden om at økonomi ikke lar seg løsrive?",
      options: ["Den svake sier at økonomien påvirkes av andre forhold; den sterke at økonomiske handlinger er sosiale", "Den svake gjelder småskalasamfunn, mens den sterke også gjelder moderne markedsøkonomier", "Den svake bygger på Mauss alene, mens den sterke krever minst tre ulike pensumtekster", "Den svake er en beskrivelse av bytteforhold i seg selv, mens den sterke er en normativ vurdering av markedet"],
      explanation: "Riktig er skillet mellom påvirkning og identitet. Nesten ingen bestrider den svake versjonen, og et svar som bare forsvarer den, har besvart en lettere oppgave enn den som ble stilt. Rekkevidden inn i markedsøkonomien er en konsekvens av den sterke versjonen, ikke selve skillet.",
    },
    {
      question: "Hvorfor kan ikke minimumskrav-versjonen i dette kapitlet nå over minimumskravet?",
      options: ["Fordi den bygger på bare én pensumtekst, og bruddet trekker ned uavhengig av øvrig kvalitet", "Fordi den mangler etnografiske eksempler til å belegge påstandene sine", "Fordi den gjengir Mauss' tre plikter i feil rekkefølge og dermed mister selve mekanismen i gaven", "Fordi den ikke sier noe om hva antropologien tilfører utenfor faget selv"],
      explanation: "Riktig er kildekravet. Versjonen er presis og etnografisk forankret på det stoffet den behandler, men den bygger på én tekst i en oppgave som krever minst tre — feil nummer 2, den vanligste enkeltårsaken til trekk i arkivet.",
    },
    {
      question: "Hva er den viktigste svakheten i god-versjonen?",
      options: ["At de tre pensumtekstene står ved siden av hverandre uten at noen setning binder dem sammen", "At etnografien er upresis og mangler både folk, sted og forsker i to av de tre eksemplene den bruker", "At den bruker for mange pensumtekster og dermed mister dybden i hver av dem", "At den konkluderer for skarpt uten å ta de nødvendige forbeholdene underveis"],
      explanation: "Riktig er de ukoblede tekstene — feil nummer 4, den typiske gode besvarelsen. Etnografien er tvert imot presis, og kildekravet er oppfylt. En skarp konklusjon er dessuten en fullgod toppform når den er begrunnet.",
    },
    {
      question: "Hva sier meget god-versjonen om forbehold i en konklusjon?",
      options: ["At forbehold er et verktøy, ikke garnityr — en skarp, begrunnet landing er fullgod toppform", "At en konklusjon alltid bør ta minst ett forbehold for å vise faglig ydmykhet overfor materialet", "At forbehold hører hjemme i innledningen, mens konklusjonen bør stå uten dem for å virke tydelig", "At forbehold bare er nødvendig når kandidaten har brukt færre enn tre pensumtekster"],
      explanation: "Riktig er at forbehold er et verktøy. Standpunktet er fritt, og det er begrunnelseskvaliteten som premieres, aldri konklusjonens retning. «Det er sammensatt» uten grunner er derimot feil nummer 3 i ny drakt.",
    },
    {
      question: "Hva kjennetegner midtnivå-besvarelsen i dette kapitlet?",
      options: ["Tre tekster brukt, minst én ekte kobling, enkelt språk og ett begrep upresist", "To tekster brukt grundig og presist, men uten noen form for kobling mellom dem noe sted i teksten", "Tre tekster nevnt uten etnografiske eksempler, men med en gjennomført analytisk tråd", "Fire tekster brukt overfladisk, med korrekte begreper og en skarpt formulert konklusjon til slutt"],
      explanation: "Riktig er den første beskrivelsen. Poenget med midtnivået er at det er faglig godt og fullt ut realistisk — og at de tre grepene som skiller det fra toppen, ikke krever ny lesing, bare andre skrivevalg.",
    },
    {
      question: "Hvilken kobling er den sterkeste i meget god-versjonen?",
      options: ["Spenningen mellom Mauss og Millar: gaven binder mennesker sammen, mens bindinger er noe folk på fyllinga unngår", "Likheten mellom de tre tekstene: alle viser at økonomi henger sammen med andre samfunnsforhold i praksis", "Forskjellen i utgivelsesår mellom Mauss fra 1925 og de to nyere studiene fra 2015 og 2018", "Likheten mellom Lien og Millar: begge studerer samtidige samfunn med en fullt utviklet markedsøkonomi"],
      explanation: "Riktig er spenningen mellom Mauss og Millar. Den oppløses ikke, og den tvinger frem en mer presis konklusjon: at påstanden sier hvor man skal se, ikke hva man vil finne. Likheten om at alle tre viser sammenheng, er triviell — den er premisset for å bruke dem sammen.",
    },
  ],
  'sosant1000-9-8': [
    {
      question: "Hvilke tre krav må et monografi-langsvar oppfylle?",
      options: ["Konkret empiri fra monografien, kobling til minst én annen pensumtekst, og metoderefleksjon", "Et sammendrag av monografien, en drøfting av forfatterens metode, og en konklusjon om relevans", "Minst tre pensumtekster, en historisk innledning, og en vurdering av bokas troverdighet", "En presentasjon av feltet, en gjennomgang av funnene, og en sammenligning med en annen monografi"],
      explanation: "Riktig er empiri, kobling og metoderefleksjon. Det siste kravet er særegent for sjangeren og det som oftest mangler — god-versjonen i dette kapitlet er skrevet nettopp for å vise hva fraværet koster.",
    },
    {
      question: "Hva er den viktigste svakheten i god-versjonen i dette kapitlet?",
      options: ["At metoderefleksjonen mangler, og at koblingen bare nevner den andre teksten", "At empirien fra monografien er for tynn til å vise at kandidaten faktisk har lest boka", "At besvarelsen leser monografien ensidig, som en forsvarstale for geriljabevegelsen", "At den mangler en begrunnet konklusjon og i stedet ender i en ren oppsummering"],
      explanation: "Riktig er metoderefleksjonen og den ubrukte koblingen. Empirien er tvert imot god — kandidaten har lest boka, og begge halvdelene av det den viser, er nevnt. Det som mangler, er å gjøre noe med materialet.",
    },
    {
      question: "Hvem eier begrepet strukturell vold, og hva er Farmers rolle?",
      options: ["Johan Galtung formulerte det i 1969; Paul Farmer gir det etnografisk innhold gjennom arbeidet på Haiti", "Paul Farmer utviklet begrepet gjennom arbeidet på Haiti; Johan Galtung anvendte det senere på europeiske forhold", "Alpa Shah bruker begrepet om frarøvelsen; Farmer og Galtung har kritisert bruken av det", "Galtung og Farmer utviklet begrepet i fellesskap i en artikkel fra begynnelsen av 1990-tallet"],
      explanation: "Riktig er Galtung i 1969, med Farmer som den som gir begrepet etnografisk innhold. Svært mange kandidater tilskriver begrepet Farmer, og å ha det riktig er den enkeltopplysningen som løfter et svar mest i maktstoffet.",
    },
    {
      question: "Hva kjennetegner den ensidige lesningen av monografien?",
      options: ["Å lese den enten som forsvarstale eller som avsløring, når boka viser begge deler samtidig", "Å lese den som en metodebok, når den først og fremst er en analyse av politiske forhold", "Å lese den som en fortelling om én enkelt marsj, når analysen bygger på langvarig feltarbeid i området", "Å lese den som en generell framstilling av India, når den handler om ett bestemt område"],
      explanation: "Riktig er lesningen som enten forsvarstale eller avsløring. Frarøvelsen forklarer hvorfor bevegelsen finnes, motsetningene forklarer hvorfor den ikke uten videre er en løsning. Shah romantiserer ikke, og hun avslører ikke.",
    },
    {
      question: "Hva gjør et avsnitt til en metoderefleksjon og ikke bare en opplysning om metoden?",
      options: ["At det sier hva metoden gjorde mulig, hvilke grenser den satte, og hva forskerens posisjon betydde", "At det oppgir hvor lenge feltarbeidet varte og hvor mange informanter forskeren snakket med", "At det slår fast at deltagende observasjon gir mer pålitelige data enn intervjuer gjør", "At det vurderer om funnene kan generaliseres til andre områder og andre bevegelser"],
      explanation: "Riktig er de fire grepene. Å skrive at metoden gir «mer pålitelige data enn intervjuer» er en dårlig begrunnelse for en god metode: de to svarer på ulike spørsmål, og poenget er å sette det folk sier opp mot det de gjør.",
    },
    {
      question: "Hvordan lander meget god-versjonen, og hvorfor er det en fullgod konklusjon?",
      options: ["Avveiende, men avveiningen begrunnes og omformulerer spørsmålet i stedet for å legge seg i midten", "Skarpt, ved å slå fast at bevegelsen tjener Adivasienes sak tross sine indre motsetninger", "Skarpt, ved å slå fast at bevegelsen reproduserer de ulikhetene den sier den vil oppheve", "Avveiende, ved å konstatere at spørsmålet om makt og motstand er for sammensatt til å kunne besvares"],
      explanation: "Riktig er den begrunnede avveiningen. Kandidaten sier hva som avveies, hvorfor, og hva som blir stående — og flytter spørsmålet fra hvem bevegelsen tjener, til hvilke former for motstand maktens organisering gjør mulige. «Det er sammensatt» uten grunner ville derimot vært feil nummer 3 i ny drakt.",
    },
  ],
};

export default quizData_sosant1000;
