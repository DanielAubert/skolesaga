import type { QuizQuestion } from './quiz-data';

const quizData_filosofi_etikk: Record<string, QuizQuestion[]> = {
  "filosofi-etikk-1": [
    {
      question: "Hva betyr ordet filosofi?",
      options: ["Kjærlighet til visdom", "Søken etter sannhet", "Systematisk søken etter den endelige sannheten om alt", "Kunnskap om verden"],
      explanation: "Filosofi kommer fra de greske ordene philos (kjærlighet) og sophia (visdom). Filosofi betyr altsa «kjærlighet til visdom».",
    },
    {
      question: "Hvem regnes tradisjonelt som den første vestlige filosofen?",
      options: ["Thales fra Milet", "Aristoteles", "Sokrates fra Athen (ca. 470 f.Kr.)", "Sokrates"],
      explanation: "Thales fra Milet (ca. 624-546 f.Kr.) regnes som den første vestlige filosofen fordi han søkte naturlige forklåringer påverdens opprinnelse i stedet for myter.",
    },
    {
      question: "Hva er den sokratiske metoden?",
      options: ["A stille sporsmål som avdekker motsetninger", "A lese gamle tekster kritisk", "Å holde lange, overbevisende taler for tilhørerne", "Å utlede sannheter logisk fra sikre grunnsetninger"],
      explanation: "Den sokratiske metoden gårut påa stille sporsmål som avdekker motsetninger i samtalepartnerens oppfatninger. Sokrates brukte denne metoden for a soke sannhet gjennom dialog.",
    },
    {
      question: "Hva studerer epistemologi?",
      options: ["Kunnskap og hvordan vi oppnår den", "Hva som finnes i verden", "Hva som er moralsk rett og galt", "Hva som er rett og galt"],
      explanation: "Epistemologi, eller kunnskapsteori, undersøker hva kunnskap er, hvordan vi oppnår den, og hva som skiller kunnskap fra tro og meninger.",
    },
    {
      question: "Hva er Ubuntu i afrikansk filosofi?",
      options: ["Jeg er fordi vi er - menneskelig identitet er relasjonell", "At all sann kunnskap oppstår gjennom felles erfaring", "At alle mennesker i grunnen er født like og frie", "At naturen og forfedrenes ånder er noe hellig"],
      explanation: "Ubuntu uttrykker tanken om at «jeg er fordi vi er» - menneskelig identitet er grunnleggende relasjonell. Det er et sentralt begrep i afrikansk filosofi.",
    },
  ],
  "filosofi-etikk-2": [
    {
      question: "Hvordan defineres kunnskap tradisjonelt i filosofien?",
      options: ["Berettiget, sann tro", "Sikker overbevisning", "Erfaring gjennom sanser", "Logisk slutning"],
      explanation: "Siden Platon har filosofer ofte definert kunnskap som berettiget, sann tro (BST). Du måtro påstandem, den måvære sann, og du måha gode grunner.",
    },
    {
      question: "Hva er Gettier-problemet?",
      options: ["At man kan ha berettiget, sann tro uten at det er kunnskap", "At sansene våre systematisk bedrar oss om virkeligheten", "At logikken selv ikke er en pålitelig kunnskapskilde", "At vi aldri kan være helt sikre på noe som helst"],
      explanation: "Gettier-problemet viser at det er mulig å ha berettiget, sann tro uten at det er kunnskap - for eksempel når du har rett av feil grunner.",
    },
    {
      question: "Hva er hovedforskjellen mellom empirisme og rasjonalisme?",
      options: ["Empirisme vektlegger sanseerfaring, rasjonalisme vektlegger fornuften", "Empirisme er praktisk anvendt, mens rasjonalisme er rent teoretisk", "Empirisme stoler på autoriteter, mens rasjonalisme stoler på tradisjon", "Empirisme er en moderne retning, mens rasjonalisme er en antikk retning"],
      explanation: "Empirisme hevder at all kunnskap om verden stammer fra sanseerfaring, mens rasjonalisme hevder at fornuften er en selvstendig kilde til kunnskap.",
    },
    {
      question: "Hva mente Descartes med \"Cogito ergo sum\"?",
      options: ["Jeg tenker, altså er jeg", "Jeg ser, altså vet jeg noe", "Jeg tviler, altså lærer jeg", "Jeg føler, altså lever jeg"],
      explanation: "«Cogito ergo sum» betyr «jeg tenker, altsa er jeg». Selv om jeg tviler påalt, kan jeg ikke tvile påat jeg tviler - og dermed at jeg eksisterer som et tenkende vesen.",
    },
    {
      question: "Hva er bekreftelsesskjevhet?",
      options: ["Vi søker informasjon som bekrefter det vi allærede tror", "Vi stoler for mye på eksperter og lar dem avgjøre hva vi skal tro", "At vi stoler altfor blindt på det ekspertene forteller oss", "At vi systematisk overvurderer hvor mye vi selv egentlig kan"],
      explanation: "Bekreftelsesskjevhet er tendensen til a søke, tolke og huske informasjon påmater som bekrefter det vi allærede tror, og ignorere motstridende informasjon.",
    },
  ],
  "filosofi-etikk-3": [
    {
      question: "Hva mente Karl Popper med falsifiserbarhet?",
      options: ["En teori er vitenskapelig hvis den kan motbevises", "En teori er sann hvis den er falsifisert", "En teori er sann nettopp hvis den er blitt falsifisert", "Vitenskap handler om å bevise teorier endelig og sikkert"],
      explanation: "Popper mente at en teori er vitenskapelig hvis og bare hvis den kan falsifiseres - det vil si at det finnes mulige observasjoner som ville motbevise den.",
    },
    {
      question: "Hva er et paradigme ifølge Thomas Kuhn?",
      options: ["Et felles rammeverk for en vitenskapelig disiplin", "En falsk antakelse som vitenskapen bygger videre på uten å teste den", "En falsk grunnantakelse som holder vitenskapen tilbake", "Et avgjørende eksperiment som forandrer alt i et fagfelt"],
      explanation: "Et paradigme er ifølge Kuhn et felles rammeverk som inkluderer grunnleggende antagelser, aksepterte metoder, standardproblemer og eksempler pågod forskning.",
    },
    {
      question: "Hva kalles overgangen fra ett paradigme til et annet?",
      options: ["Vitenskapelig revolusjon", "Paradigmeskifte", "Et vanlig paradigmeskifte", "En vitenskapelig falsifikasjon"],
      explanation: "Overgangen til et nytt paradigme kalles en vitenskapelig revolusjon. Eksempler inkluderer overgangen fra geocentrisk til heliocentrisk astronomi.",
    },
    {
      question: "Hva mener vitenskapelig realisme?",
      options: ["Vellykkede teorier beskriver virkeligheten", "At vitenskap bare er et verktøy for å forutsi hva som kommer til å skje", "At vi aldri kan nå fram til den fulle sannheten", "At vitenskapelige teorier bare er nyttige verktøy"],
      explanation: "Vitenskapelig realisme mener at vellykkede vitenskapelige teorier beskriver virkeligheten. Elektroner, gener og sorte hull eksisterer virkelig.",
    },
    {
      question: "Hva er induksjonsproblemet?",
      options: ["Vi kan ikke rettferdiggjøre slutninger fra enkelttilfeller til generelle lover", "At induksjon som slutningsform alltid fører til feilaktige konklusjoner", "At deduksjon i alle tilfeller er en klart bedre metode enn induksjon", "At naturvitenskapen i praksis ikke bruker induksjon i det hele tatt"],
      explanation: "Induksjonsproblemet er at vi ikke logisk kan rettferdiggjøre induksjon. At noe har skjedd mange ganger, garanterer ikke at det vil skje igjen.",
    },
  ],
  "filosofi-etikk-4": [
    {
      question: "Hva er hovedprinsippet i utilitarismen?",
      options: ["Handle slik at du maksimerer total lykke for alle", "Å alltid handle i pakt med den naturlige orden", "Å alltid følge din moralske plikt uansett følgene", "Å utvikle gode karaktertrekk og dydige holdninger"],
      explanation: "Utilitarismen sier at vi bør handle slik at vi maksimerer den totale mengden lykke (nytte) for alle berorte parter.",
    },
    {
      question: "Hva er Kants kategoriske imperativ (universalitetsformuleringen)?",
      options: ["Handle bare etter maksimer du kan ville som allmenn lov", "Gjør mot andre som du vil de skal gjøre mot deg", "Følg alltid din egen samvittighet og indre moralske stemme", "Gjør alltid mot andre som du selv vil de skal gjøre mot deg"],
      explanation: "Kants universalitetsformulering sier: «Handle bare etter den maksime gjennom hvilken du samtidig kan ville at den skal bli en allmenn lov.»",
    },
    {
      question: "Hva er \"den gylne middelvei\" i Aristoteles' dydsetikk?",
      options: ["Dyder ligger mellom to yttærligheter (laster)", "At man alltid bør velge kompromisset som ligger midt mellom ytterpunktene", "At en moderat form for lykke er det aller beste", "At man alltid bør velge et kompromiss mellom partene"],
      explanation: "Aristoteles mente at dyder ligger mellom to laster. For eksempel ligger mot mellom feighet og dumdristighet, og raushet mellom gjerrighet og sløseri.",
    },
    {
      question: "Hva menes med deontologi (pliktetikk)?",
      options: ["Visse handlinger er riktige eller gale i seg selv, uavhengig av konsekvenser", "At handlingens konsekvenser er det eneste som avgjør om den er riktig", "At karakteren og dydene teller mer enn selve handlingen man utfører", "At all moral er relativ og avhengig av kultur og situasjon"],
      explanation: "Pliktetikk (deontologi) hevder at visse handlinger er riktige eller gale i seg selv, uavhengig av konsekvensene. Fokuset er påplikter og rettigheter.",
    },
    {
      question: "Hva er eudaimonia i Aristoteles' filosofi?",
      options: ["Det gode liv/menneskelig blomstring", "Ære og berømmelse i medborgernes øyne", "Kortvarig sanselig nytelse og fysisk velbehag", "Fullstendig fravær av smerte og all uro i sjelen"],
      explanation: "Eudaimonia betyr lykke eller menneskelig blomstring. For Aristoteles er dette menneskets høyeste mål - a leve et blomstrende, godt liv.",
    },
  ],
  "filosofi-etikk-5": [
    {
      question: "Hva er de fire grunnprinsippene i medisinsk etikk?",
      options: ["Autonomi, velgjørenhet, ikke-skade, rettferdighet", "Sannhet, plikt, dyd og størst mulig samlet nytte", "Respekt, omsorg, likhet og gjensidig ansvar for hverandre", "Liv, frihet, lykke og retten til privat eiendom"],
      explanation: "De fire grunnprinsippene i medisinsk etikk (formulert av Beauchamp og Childress) er autonomi, velgjørenhet, ikke-skade og rettferdighet.",
    },
    {
      question: "Hva mener Peter Singer med \"speciesisme\"?",
      options: ["Diskriminering basert på art er like vilkårlig som rasisme", "At mennesket har helt spesielle rettigheter over dyrene", "At alle dyrearter i naturen har nøyaktig lik moralsk verdi", "At ulike arter fordeles i et biologisk klassifiseringssystem"],
      explanation: "Singer mener at speciesisme - a gi noen moralsk forrang bare fordi de tilhører en viss art - er like vilkårlig som rasisme eller sexisme.",
    },
    {
      question: "Hva er forskjellen mellom antroposentrisk og biosentrisk miljøetikk?",
      options: ["Antroposentrisk gir bare mennesker moralsk status, biosentrisk inkluderer alt liv", "Antroposentrisk vektlegger enkeltdyr, biosentrisk vektlegger hele arter", "Antroposentrisk er en moderne retning, biosentrisk er en eldre retning", "Biosentrisk fokuserer bare på hele økosystemer og deres helhet"],
      explanation: "Antroposentrisk etikk gir bare mennesker direkte moralsk status, mens biosentrisk etikk utvider moralsk status til alle levende vesener.",
    },
    {
      question: "Hva er hovedargumentet for dyrs moralske status ifølge Singer?",
      options: ["Evnen til å lide", "Evnen til å tenke", "Evnen til å kommunisere", "Evnen til å føle kjærlighet"],
      explanation: "Singer argumenterer for at dyr har moralsk status fordi de kan lide. «Spørsmålet er ikke om de kan tenke eller snakke, men om de kan lide.»",
    },
    {
      question: "Hva er Aldo Leopolds \"landets etikk\"?",
      options: ["Handlinger er riktige når de bevarer stabiliteten til det biotiske samfunnet", "At mennesket i prinsippet aldri kan eie eller råde over naturen", "At alle landområder bør ha klart definerte eiendomsrettigheter", "At økosystemer selv besitter en form for bevissthet og vilje"],
      explanation: "Leopold formulerte: «En ting er rett nården bevarer stabiliteten, integriteten og skjonnheten til det biotiske samfunnet. Den er gal nården gjør det motsatte.»",
    },
  ],
  "filosofi-etikk-6": [
    {
      question: "Hvordan beskriver Hobbes naturtilstanden?",
      options: ["En tilstand av krig der alle kjemper mot alle", "Et organisert samfunn uten stat", "Som et opprinnelig fredelig og lykkelig paradis", "Som en tilstand av naturlig harmoni og samarbeid"],
      explanation: "Hobbes beskrev naturtilstanden som en tilstand av krig der alle kjemper mot alle. Livet ville være «ensomt, fattig, stygt, brutalt og kort».",
    },
    {
      question: "Hva mener Rawls med \"sloret av uvitenhet\"?",
      options: ["Vi skal velge rettferdighetsprinsipper uten å kjenne vår egen posisjon", "At folk flest er uvitende om hvordan politikk faktisk fungerer", "At politikere med vilje skjuler viktig informasjon fra folket", "At rettferdighet i bunn og grunn er noe helt subjektivt"],
      explanation: "Rawls bruker «sloret av uvitenhet» som et tankeeksperiment: Hvis vi ikke visste vår posisjon i samfunnet (rik/fattig, etc.), hvilke prinsipper ville vi velge?",
    },
    {
      question: "Hva er Isaiah Berlins skille mellom negativ og positiv frihet?",
      options: ["Negativ er frihet fra, positiv er frihet til", "Negativ er dårlig, positiv er god", "Negativ er individuell, positiv er kollektiv", "Det er ingen reell forskjell"],
      explanation: "Berlin skilte mellom negativ frihet (fravær av ytre hindringer, «frihet fra») og positiv frihet (evne til selvrealisering, «frihet til»).",
    },
    {
      question: "Hva mener Nozick om omfordeling av rikdom?",
      options: ["Det er tvang og krenker rettigheter", "Det er nødvendig for rettferdighet", "At staten bør omfordele all rikdom likt mellom borgerne", "Omfordeling er alltid riktig"],
      explanation: "Nozick mener at omfordeling av rikdom er tvang og krenker individets rettigheter. Staten bør begrenses til a beskytte mot vold, tyveri og svindel.",
    },
    {
      question: "Hva er flertallets tyranni?",
      options: ["Når flertallet undertrykker minoriteter", "Nårstaten har for mye makt", "Når absolutt alle i samfunnet er dypt uenige", "Når staten samler for mye makt på egne hender"],
      explanation: "Flertallets tyranni er problemet med at et flertall kan undertrykke minoriteter i et demokrati. Losningen er konstitusjonelt demokrati med rettigheter som beskytter minoriteter.",
    },
  ],
  "filosofi-etikk-8": [
    {
      question: "Hva er forskjellen mellom et gyldig og et sunt argument?",
      options: ["Gyldig har riktig form, sunt har også sanne premisser", "Det finnes egentlig ingen reell forskjell mellom dem", "Sunt er en kortere sluttet form av et gyldig argument", "Gyldig har sanne premisser, mens sunt bare har riktig form"],
      explanation: "Et gyldig argument har riktig logisk form (konklusjonen følger fra premissene). Et sunt argument er i tillegg gyldig med sanne premisser.",
    },
    {
      question: "Hva er en stråmann-feilslutning?",
      options: ["A forvrenge motstanderens posisjon og angripe den forvrengede versjonen", "Å angripe personen selv i stedet for vedkommendes argument", "Å appellere til følelser i stedet for saklige argumenter", "Å presentere bare to alternativer der det finnes flere"],
      explanation: "Stramann-feilslutningen er a forvrenge motstanderens posisjon og såangripe den forvrengede versjonen i stedet for det faktiske argumentet.",
    },
    {
      question: "Hva er Euthyfros dilemma?",
      options: ["Er det gode godt fordi gudene elsker det, eller elsker gudene det fordi det er godt?", "Finnes gudene i det hele tatt, eller finnes de ikke?", "Er fromhet nøyaktig det samme som moralsk godhet?", "Kan vi mennesker egentlig vite noe helt sikkert?"],
      explanation: "Euthyfros dilemma spor: «Elsker gudene det fordi det er fromt, eller er det fromt fordi gudene elsker det?» Dette avdekker et dypere problem om forholdet mellom religion og moral.",
    },
    {
      question: "Hva er prinsippet om velvilje i filosofisk samtale?",
      options: ["Tolk andres argumenter i beste mulige lys", "Ver alltid enig med motstanderen", "Å alltid gi etter og trekke seg i en diskusjon", "Å alltid være enig med motstanderen for å unngå strid"],
      explanation: "Prinsippet om velvilje (charity) sier at vi bør tolke andres argumenter i beste mulige lys. Vi skal ikke angripe stramaenn, men den sterkeste versjonen av argumentet.",
    },
    {
      question: "Hva er formålet med et tankeeksperiment?",
      options: ["A teste intuisjoner og teorier gjennom hypotetiske scenarioer", "A unngå å gjøre ekte eksperimenter", "Å bevise vitenskapelige teorier endelig gjennom kontrollerte forsøk i laboratoriet", "Å underholde filosofistudenter med oppdiktede historier"],
      explanation: "Tankeeksperimenter er hypotetiske scenarioer som brukes til a teste intuisjoner og teorier. Eksempler inkluderer trolley-problemet og erfaringsmaskinen.",
    },
  ],
  "filosofi-etikk-1-1": [
    {
      question: "Hva kjennetegner et filosofisk spørsmål til forskjell fra et faktaspørsmål?",
      options: ["Det kan ikke besvares ved å slå opp fakta eller gjøre målinger", "At det bare handler om naturvitenskap og kan avgjøres av forskere i et laboratorium", "At det alltid har nøyaktig ett riktig svar som eksperter er fullstendig enige om", "At det kun kan stilles av profesjonelle filosofer med formell akademisk utdanning"],
      explanation: "Filosofiske spørsmål som «Hva er tid?» krever refleksjon, argumentasjon og begrepsanalyse, ikke oppslag av fakta eller måling.",
    },
    {
      question: "Hvilket av filosofiens hovedområder studerer hva kunnskap er og hvordan vi oppnår den?",
      options: ["Epistemologi", "Metafysikk", "Metafysikk, som studerer virkelighetens grunnleggende natur", "Estetikk"],
      explanation: "Epistemologi (kunnskapsteori) undersøker hva kunnskap er, hvordan vi oppnår den, og forholdet mellom tro og viten.",
    },
    {
      question: "Hva betyr det at et filosofisk spørsmål har en normativ dimensjon?",
      options: ["Det handler om hvordan ting bør være, ikke bare hvordan de er", "Det følger en bestemt norm i samfunnet", "At det følger en bestemt sosial norm som gjelder på et gitt sted til en gitt tid", "At det kan måles empirisk gjennom presise observasjoner"],
      explanation: "Mange filosofiske spørsmål er normative – de handler om hvordan vi bør handle eller hva et godt liv er, ikke bare om faktiske forhold.",
    },
    {
      question: "Hvilket delområde av filosofien studerer virkeligheten og hva som finnes?",
      options: ["Metafysikk", "Logikk", "Estetikk", "Vitenskapsfilosofi"],
      explanation: "Metafysikk er studiet av virkeligheten – hva som finnes, om vi har fri vilje, og forholdet mellom kropp og sinn.",
    },
    {
      question: "Hva er konseptuell (begreps)analyse som filosofisk metode?",
      options: ["Å undersøke begrepers betydning, implikasjoner og forutsetninger", "Å gjennomføre laboratorieeksperimenter", "Å oversette klassiske filosofiske tekster fra gammelgresk til moderne norsk språk", "Å gjennomføre kontrollerte forsøk for å teste hypotesene i praksis"],
      explanation: "Begrepsanalyse innebærer å klargjøre hva vi egentlig mener med begreper som «rettferdig» eller «sann».",
    },
  ],
  "filosofi-etikk-1-2": [
    {
      question: "Hvorfor regnes Thales av Milet som den første filosofen?",
      options: ["Han søkte naturlige forklaringer på verden i stedet for å vise til guder", "Han skrev de første filosofiske bøkene", "Han oppfant den formelle logikken og reglene for gyldig deduktiv slutning og bevis", "Han skrev de aller første systematiske filosofiske bøkene i den vestlige tradisjonen"],
      explanation: "Thales' betydning ligger i måten han tenkte på: han søkte en naturlig, materiell forklaring (vann) i stedet for å si at gudene styrer.",
    },
    {
      question: "Hva er Heraklits berømte prinsipp om virkeligheten?",
      options: ["Alt flyter (panta rhei) – alt er i konstant endring", "At tall er virkelighetens grunnlag, slik pytagoreerne lærte det", "At alt som finnes til syvende og sist består av udelelige atomer i tomt rom", "At tall og matematiske forhold utgjør selve virkelighetens dypeste grunnlag"],
      explanation: "«Panta rhei» – alt flyter. For Heraklit er endring virkelighetens grunnleggende natur: du kan ikke stige ned i samme elv to ganger.",
    },
    {
      question: "Hva hevdet Parmenides om endring?",
      options: ["Endring er en illusjon; virkeligheten er én, uforanderlig og evig", "At endring skyldes atomenes bevegelse i tomrommet, slik Demokrit hevdet", "At endring i virkeligheten styres av en fornuftig verdensorden kalt logos", "At endring er det eneste virkelig eksisterende; alt annet er stillstand og bedrag"],
      explanation: "Parmenides argumenterte for at det ikke-værende ikke kan eksistere, og at endring derfor er umulig – sansene bedrar oss.",
    },
    {
      question: "Hvilken fremsynt teori utviklet Demokrit?",
      options: ["Atomteorien – alt består av udelelige partikler i tomt rom", "Læren om de fire elementene, slik Empedokles lærte det", "Læren om tallenes harmoni som virkelighetens innerste orden og prinsipp", "Læren om de fire grunnelementene jord, luft, ild og vann som byggesteiner"],
      explanation: "Demokrit mente virkeligheten består av udelelige atomer (gresk atomos = udelelig) som beveger seg i tomt rom.",
    },
    {
      question: "Hva menes med presokratikernes overgang «fra myte til logos»?",
      options: ["Fra å forklare verden med guder og myter til rasjonell, naturlig forklaring", "Fra muntlig til skriftlig kultur, da grekerne tok alfabetet i bruk i diktningen", "Overgangen fra en muntlig fortellertradisjon til en skriftlig og lesende bokkultur", "Overgangen fra spørsmål om etikk og det gode liv til rene spørsmål om naturens vesen"],
      explanation: "Presokratikerne begynte å forklare naturen rasjonelt og observasjonsbasert i stedet for gjennom guders vilje – kimen til vitenskapelig tenkning.",
    },
  ],
  "filosofi-etikk-1-3": [
    {
      question: "Hva kjennetegner den sokratiske metoden?",
      options: ["Å stille spørsmål som avdekker motsetninger i andres oppfatninger", "Å skrive ned all kunnskap systematisk i verk som elevene siden kunne lese", "Å gjennomføre kontrollerte eksperimenter for å teste påstander mot naturens fakta", "Å holde lange og velformulerte forelesninger der læreren overleverer ferdig kunnskap"],
      explanation: "Sokrates utfordret folk til å definere begreper og avdekket gjennom spørsmål at de ofte ikke kunne forklare det de trodde de visste.",
    },
    {
      question: "Hvorfor vet vi det meste om Sokrates gjennom andre?",
      options: ["Sokrates skrev aldri noe ned selv", "Hans skrifter gikk tapt i en brann", "Han skrev på et språk ingen forstår", "Han forbød elevene sine å sitere ham"],
      explanation: "Sokrates skrev aldri noe ned; det vi vet om ham kommer hovedsakelig fra hans student Platon.",
    },
    {
      question: "Hva sa Sokrates om det gode livet?",
      options: ["«Det uprøvde liv er ikke verdt å leve»", "«Mennesket er alle tings mål»", "«Jeg tenker, det kan ingen tvile på»", "«Jeg tenker, altså er jeg»"],
      explanation: "Sokrates mente at et liv uten kritisk selvransakelse og refleksjon ikke er verdt å leve.",
    },
    {
      question: "Hvem var Platons mest kjente student som flyttet fokus mot systematisk studium av naturen og logikk?",
      options: ["Aristoteles", "Pytagoras", "Sokrates, som var Platons egen lærer og læremester", "Sokrates"],
      explanation: "Aristoteles var Platons student og bidro til logikk, biologi, etikk og mange andre felt.",
    },
    {
      question: "Hvilket sitat understreker Platons enorme innflytelse på vestlig filosofi?",
      options: ["«Europeisk filosofi er en serie fotnoter til Platon»", "«Eksistensen går forut for essensen»", "«Gud er død, og det er vi mennesker selv som har drept ham for godt»", "«Kunnskap er makt, og den som eier viten hersker over sin egen skjebne»"],
      explanation: "Whitehead sa at den tryggeste generaliseringen om europeisk filosofi er at den består av fotnoter til Platon.",
    },
  ],
  "filosofi-etikk-1-4": [
    {
      question: "Hva er kjernen i Konfutsius' etikk, uttrykt med begrepet ren?",
      options: ["Medmenneskelig godhet – å behandle andre med omsorg og respekt", "Søken etter indre opplysning gjennom meditasjon og et tilbaketrukket liv", "Fravær av alt begjær og alle ønsker som veien til sinnsro og lykke", "Streng og betingelsesløs lydighet mot statens skrevne lover og forskrifter"],
      explanation: "Ren (仁) betyr humanitet eller medmenneskelig godhet og er kjernen i Konfutsius' etikk.",
    },
    {
      question: "Hvordan skiller østlig filosofi seg ofte fra vestlig filosofi?",
      options: ["Mer vekt på praktisk visdom og helhetlig tenkning", "Mer vekt på naturvitenskapelige eksperimenter", "Den bygger utelukkende på streng formell logikk", "Den bruker bare matematiske bevis"],
      explanation: "Østlig filosofi legger ofte mindre vekt på logisk abstraksjon og mer på praktisk livskunst og sammenhengen mellom menneske, natur og kosmos.",
    },
    {
      question: "Hva er et sentralt trekk ved konfutsiansk samfunnssyn?",
      options: ["Samfunnet bygger på fem grunnleggende relasjoner med gjensidige plikter", "Alle mennesker er like uavhengig av rolle", "At det enkelte individet alltid står over fellesskapet og dets kollektive plikter", "At alle mennesker er fullstendig like uavhengig av rolle, alder og samfunnsstilling"],
      explanation: "Konfutsius beskrev fem fundamentale relasjoner (f.eks. hersker–undersått, far–sønn) med gjensidige plikter.",
    },
    {
      question: "Hva uttrykker det afrikanske begrepet Ubuntu?",
      options: ["«Jeg er fordi vi er» – identitet er relasjonell", "At all kunnskap kommer fra erfaring og ikke fra medfødte ideer", "At naturen er hellig og at mennesket må leve i pakt med den", "At alt i virkeligheten er i konstant og uopphørlig forandring"],
      explanation: "Ubuntu uttrykker at menneskelig identitet er grunnleggende relasjonell – vi blir til gjennom fellesskapet.",
    },
    {
      question: "Hva er et fellestrekk ved mange østlige filosofiske tradisjoner?",
      options: ["Mindre skille mellom filosofi og religion", "De avviser etikk fullstendig", "De bygger utelukkende på logiske syllogismer", "De forkaster all praktisk visdom"],
      explanation: "I østlige tradisjoner er filosofi ofte integrert i spirituelle og religiøse tradisjoner, med etikk som vei til harmoni eller opplysning.",
    },
  ],
  "filosofi-etikk-1-5": [
    {
      question: "Hva er et tankeeksperiment i filosofien?",
      options: ["Et imaginært scenario som tester intuisjoner og teorier", "Et laboratorieeksperiment med kontrollgrupper", "En statistisk analyse av innsamlede data fra observasjoner i felten", "En bred meningsmåling gjennomført blant filosofer og deres studenter"],
      explanation: "Tankeeksperimenter er hypotetiske scenarier som klargjør intuisjoner der empirisk testing er umulig, f.eks. Platons hulelikning.",
    },
    {
      question: "Hvorfor bruker filosofer tankeeksperimenter fremfor empiriske forsøk?",
      options: ["Mange filosofiske spørsmål kan ikke undersøkes empirisk", "De er billigere å gjennomføre, siden de verken krever utstyr eller laboratorium", "Fordi tankeeksperimenter alltid gir helt sikre og udiskutable svar", "Fordi de er langt billigere og enklere å gjennomføre enn ekte forsøk"],
      explanation: "Vi kan ikke observere empirisk hva som er rettferdig eller om vi har fri vilje, men vi kan forestille oss scenarier som klargjør intuisjonene våre.",
    },
    {
      question: "Hva er begrepsanalyse som filosofisk metode?",
      options: ["Nøye undersøkelse av et begreps betydning", "Å oversette begreper til latin", "Å oversette filosofiske begreper fra norsk til latin og gresk", "Telling av ord i en tekst"],
      explanation: "Begrepsanalyse innebærer å undersøke nøye hva et begrep betyr, hvilke forutsetninger og implikasjoner det har.",
    },
    {
      question: "Hva er dialektikk som metode?",
      options: ["Utvikling av ideer gjennom debatt og motsetninger", "Systematisk observasjon av naturen", "Grundig memorering av klassiske tekster for å bevare deres innhold", "Beregning av sannsynligheter"],
      explanation: "Dialektikk utvikler ideer gjennom debatt og motsetninger – tese møter antitese på vei mot dypere innsikt.",
    },
    {
      question: "Det klassiske trolley-problemet (sporveiskiftet) er et eksempel på hva?",
      options: ["Et tankeeksperiment som tester moralske intuisjoner", "En vitenskapelig hypotese som kan testes med målinger ute i felt", "Et strengt matematisk bevis som utleder en konklusjon fra gitte aksiomer", "En faktisk historisk hendelse med et sporvognsulykke som virkelig fant sted"],
      explanation: "Trolley-problemet er et tankeeksperiment der man tester intuisjoner om det er riktig å ofre én for å redde flere.",
    },
  ],
  "filosofi-etikk-2-1": [
    {
      question: "Hva står JTB-definisjonen av kunnskap for?",
      options: ["Begrunnet sann tro (Justified True Belief)", "Generell teoretisk basis", "Ja-til-bevis, altså aksept av en påstand så snart et bevis er lagt fram", "Justert teoretisk bevis"],
      explanation: "Den klassiske definisjonen av kunnskap er begrunnet sann tro: tro, sannhet og begrunnelse må alle være oppfylt.",
    },
    {
      question: "Hvilke tre betingelser må ifølge JTB være oppfylt for kunnskap?",
      options: ["Tro, sannhet og begrunnelse", "Tro, håp og kjærlighet", "Observasjon, hypotese og test", "Premiss, slutning og konklusjon"],
      explanation: "Du må tro på påstanden, den må være sann, og du må ha gode grunner (begrunnelse).",
    },
    {
      question: "Hvorfor er ren gjetting ikke kunnskap, selv om gjetningen er sann?",
      options: ["Det mangler begrunnelse – gode grunner for å tro det", "Fordi spørsmålet er for komplisert til at en gjetning kan treffe riktig", "Fordi det da mangler selve sannheten – gjetningen treffer aldri riktig svar", "Fordi saken det gjettes om er altfor komplisert til at noen kan vite noe om den"],
      explanation: "En heldig gjetning kan være sann og trodd, men uten begrunnelse teller den ikke som kunnskap.",
    },
    {
      question: "Hva er forskjellen mellom kunnskap og mening?",
      options: ["Kunnskap krever sannhet og begrunnelse, en mening trenger ikke det", "Kunnskap er alltid usikker, og derfor ikke noe bedre enn en ren mening", "Det er egentlig ingen reell forskjell; kunnskap og mening betyr det samme", "Kunnskap er alltid usikker og foreløpig, mens en mening er fast og sikker"],
      explanation: "En mening kan være ubegrunnet eller usann, mens kunnskap forutsetter både sannhet og gode grunner.",
    },
    {
      question: "Hvorfor regnes JTB som vanskeligere enn det først virker?",
      options: ["Det er omdiskutert om de tre betingelsene er tilstrekkelige for kunnskap", "Fordi det er umulig å tro noe som virkelig er sant om verden utenfor oss selv", "Fordi begrunnelse er noe mennesket aldri kan oppnå for noen som helst påstand", "Fordi ingen egentlig klarer å forstå hva det innebærer å tro på noe i det hele tatt"],
      explanation: "Senere filosofer (f.eks. Gettier) viste at man kan ha begrunnet sann tro som likevel ikke virker som ekte kunnskap.",
    },
  ],
  "filosofi-etikk-2-2": [
    {
      question: "Hva hevder rasjonalismen er vår viktigste kilde til kunnskap?",
      options: ["Fornuften", "Sanseerfaring", "Autoriteter", "Følelser"],
      explanation: "Rasjonalismen (latin ratio = fornuft) hevder at fornuften er den viktigste kilden til sikker kunnskap.",
    },
    {
      question: "Hvem regnes som rasjonalismens far i moderne tid?",
      options: ["René Descartes", "Immanuel Kant", "David Hume, den skeptiske skotske empiristen", "John Locke"],
      explanation: "Descartes (1596–1650) regnes som rasjonalismens grunnlegger, inspirert av matematikkens sikkerhet.",
    },
    {
      question: "Hva er Descartes' berømte konklusjon etter den metodiske tvilen?",
      options: ["«Jeg tenker, altså er jeg» (Cogito ergo sum)", "«Mennesket er alle tings mål», slik Protagoras formulerte det", "«Gud er død, og vi mennesker er dem som har drept ham med vår tvil»", "«Mennesket er målestokken for alle ting, både de som er og de som ikke er»"],
      explanation: "Descartes fant at selv om han kan tvile på alt, kan han ikke tvile på at han tviler – og det å tvile er å tenke.",
    },
    {
      question: "Hva er metodisk tvil hos Descartes?",
      options: ["Å systematisk tvile på alt for å finne et sikkert fundament", "Å stole fullt ut på sansene og bygge all kunnskap på det de viser oss", "Å prinsipielt aldri tvile på noe, men ta all mottatt kunnskap for gitt", "Å utelukkende tvile på matematikken, men stole trygt på alt annet man vet"],
      explanation: "Descartes tvilte bevisst på alt han kunne tvile på, for å finne noe absolutt sikkert å bygge kunnskapen på.",
    },
    {
      question: "Hvilket fagfelt brukte rasjonalistene som forbilde på sikker kunnskap?",
      options: ["Matematikken", "Historien", "Litteraturen", "Eksperimentell biologi"],
      explanation: "At 2 + 2 = 4 kan kjennes ved fornuften alene, og matematikkens sikkerhet inspirerte rasjonalistenes prosjekt.",
    },
  ],
  "filosofi-etikk-2-3": [
    {
      question: "Hva hevder empirismen er kilden til all kunnskap om verden?",
      options: ["Sanseerfaring", "Fornuften alene", "Medfødte ideer", "Guddommelig åpenbaring"],
      explanation: "Empirismen (gresk empeiria = erfaring) hevder at all kunnskap om verden kommer fra sanseerfaringer.",
    },
    {
      question: "Hva menes med at sinnet er en tabula rasa?",
      options: ["Et blankt ark ved fødselen, som fylles av erfaring", "Uforanderlig gjennom livet", "En uforanderlig kjerne av kunnskap som er lik hos alle mennesker gjennom hele livet", "En perfekt logisk maskin"],
      explanation: "Locke mente sinnet ved fødselen er en «ubeskrevet tavle» (tabula rasa) som all kunnskap skrives på gjennom erfaring.",
    },
    {
      question: "Hvem regnes som empirismens grunnlegger?",
      options: ["John Locke", "René Descartes", "Immanuel Kant", "Platon"],
      explanation: "John Locke (1632–1704) regnes som empirismens grunnlegger og var kritisk til medfødte ideer.",
    },
    {
      question: "Hvorfor avviste Locke medfødte ideer?",
      options: ["Hvis de fantes, burde alle – også barn og andre kulturer – ha dem", "Fordi matematikken motbeviser dem", "Fordi Gud etter Lockes syn uttrykkelig hadde forbudt slike ideer i menneskesinnet", "Fordi matematikkens sannheter beviste at ideene var medfødte"],
      explanation: "Locke argumenterte for at medfødte ideer ville vært universelle, men det er de tydeligvis ikke.",
    },
    {
      question: "Hvilke to typer erfaring skilte Locke mellom?",
      options: ["Ytre sanseerfaring (sensation) og indre refleksjon", "Skillet mellom kunnskap a priori og kunnskap a posteriori", "Fornuftens innsikt (ratio) og guddommelig åpenbaring gitt gjennom troen", "Analytiske sannheter som gjelder per definisjon og syntetiske sannheter"],
      explanation: "Locke skilte mellom ytre sanseerfaring gjennom de fem sansene og indre refleksjon over egne mentale prosesser.",
    },
  ],
  "filosofi-etikk-2-4": [
    {
      question: "Hva er kjernen i filosofisk skeptisisme?",
      options: ["Å stille spørsmål ved om vi i det hele tatt kan ha sikker kunnskap", "At bare fornuften gir kunnskap", "At all vår kunnskap allerede er fullstendig sikker og hevet over enhver tvil", "At det utelukkende er sanseerfaringen som kan gi oss ekte og sikker kunnskap"],
      explanation: "Skeptisismen er en systematisk holdning som utfordrer grunnlaget for all kunnskap.",
    },
    {
      question: "Hva mente Pyrrhon at vi burde gjøre, gitt at vi aldri kan vite noe sikkert?",
      options: ["Avstå fra å dømme (epoché)", "Tro blindt på autoriteter", "Slutte fullstendig å tenke og gi opp all filosofisk søken", "Stole helt på sansene"],
      explanation: "Pyrrhon mente vi bør avstå fra å dømme (epoché) og heller si «det virker slik for meg nå».",
    },
    {
      question: "Hva er relativisme i kunnskapsteori?",
      options: ["Synet om at sannhet er relativ til kulturell eller individuell kontekst", "Synet om at sannheten er én, universell og absolutt for alle mennesker", "Synet om at all kunnskap i bunn og grunn er sikker og hevet over tvil", "Synet om at bare naturvitenskapelig metode kan gi oss sann kunnskap"],
      explanation: "Relativismen hevder at sannhet og kunnskap er relative til kultur eller individ, ikke universelle.",
    },
    {
      question: "Hvilken sinnstilstand mente Pyrrhon at epoché kunne føre til?",
      options: ["Ataraxia – sinnsro", "Eudaimonia – det gode liv", "Hybris – overmot", "Katarsis – renselse"],
      explanation: "Ved å avstå fra å dømme kunne man ifølge Pyrrhon oppnå ataraxia, en tilstand av indre fred.",
    },
    {
      question: "Hvilket av disse er et typisk skeptisk argument?",
      options: ["Sansene bedrar oss noen ganger", "Sansene er alltid pålitelige", "Den rene fornuften er ufeilbarlig og kan aldri ta feil om noe", "Fornuften er ufeilbarlig"],
      explanation: "Et klassisk skeptisk argument er at sansene kan bedra oss (f.eks. en pinne som ser knekket ut i vann), så de ikke gir sikker kunnskap.",
    },
  ],
  "filosofi-etikk-2-5": [
    {
      question: "Hva forsøkte Immanuel Kant å gjøre i kunnskapsteorien?",
      options: ["Forene rasjonalisme og empirisme", "Bevise at bare fornuften gir kunnskap", "Avvise all kunnskap", "Vise at bare sansene gir kunnskap"],
      explanation: "Kant forente rasjonalisme og empirisme: kunnskap begynner med erfaring, men sinnet bidrar med strukturer som organiserer den.",
    },
    {
      question: "Hva mente Kant med sin «kopernikanske revolusjon» i filosofien?",
      options: ["At verden tilpasser seg vårt sinn, ikke omvendt", "At jorden går rundt solen", "At jorden ikke står i sentrum, men beveger seg i bane rundt solen", "At Gud må stå i sentrum for erkjennelsen"],
      explanation: "Slik Kopernikus snudde forholdet jord–sol, ville Kant vise at det er erfaringen som tilpasser seg sinnets strukturer.",
    },
    {
      question: "Hva er en analytisk påstand ifølge Kant?",
      options: ["En påstand som er sann per definisjon", "En påstand basert på sanseerfaring", "En påstand om fremtidige hendelser", "En påstand som alltid er usann"],
      explanation: "Analytiske påstander (f.eks. «alle ungkarer er ugifte») er sanne per definisjon, uavhengig av erfaring.",
    },
    {
      question: "Hvilken vitenskapsfilosof er kjent for falsifiseringsprinsippet?",
      options: ["Karl Popper", "Thomas Kuhn", "René Descartes", "David Hume"],
      explanation: "Popper mente at det som kjennetegner vitenskap er at teoriene i prinsippet kan motbevises (falsifiseres).",
    },
    {
      question: "Hva er Thomas Kuhns sentrale begrep om vitenskapelig utvikling?",
      options: ["Paradigmeskifter", "Falsifisering", "Den metodiske tvil", "Tabula rasa"],
      explanation: "Kuhn beskrev hvordan vitenskap utvikler seg gjennom paradigmeskifter – grunnleggende endringer i hvordan forskere ser verden.",
    },
  ],
  "filosofi-etikk-4-1": [
    {
      question: "Hva dreier abortdebatten seg fundamentalt om i medisinsk etikk?",
      options: ["Fosterets moralske status", "Antall sykehus i landet", "Hvor mye legene ved sykehuset skal ha i lønn", "Sykehusenes budsjetter"],
      explanation: "Abortdebatten handler i kjernen om når et foster får slike rettigheter at abort blir moralsk problematisk.",
    },
    {
      question: "Hva kjennetegner den konservative posisjonen i abortspørsmålet?",
      options: ["Livet og full moralsk status begynner ved unnfangelsen", "Kvinnens selvbestemmelse veier alltid tyngst", "At kvinnens selvbestemmelse over egen kropp alltid veier aller tyngst", "Fosteret får full status først ved fødsel"],
      explanation: "Den konservative posisjonen mener fosteret har full moralsk status fra befruktningen.",
    },
    {
      question: "Hvilke verdier står sentralt i medisinsk etikk?",
      options: ["Autonomi, velgjørenhet og rettferdighet", "Profitt og effektivitet", "Fri konkurranse og økonomisk vekst i helsesektoren", "Fast tradisjon og pasientens lydighet overfor legen"],
      explanation: "Medisinsk etikk balanserer grunnleggende verdier som pasientens autonomi, velgjørenhet og rettferdig fordeling.",
    },
    {
      question: "Hva innebærer prinsippet om autonomi i medisinsk etikk?",
      options: ["Pasientens rett til selv å bestemme over egen behandling", "At behandling skal være gratis", "At staten i praksis eier pasienten og rår over kroppen hans", "At legen alltid er den som bestemmer over pasientens behandling"],
      explanation: "Autonomi handler om pasientens rett til selvbestemmelse og informert samtykke om egen behandling.",
    },
    {
      question: "Hva er en sentral etisk utfordring når helseressurser er knappe?",
      options: ["Hvem som skal prioriteres når ikke alle kan få behandling", "Hvilken farge veggene på det nye sykehuset bør males i", "Hvilket språk pasientens journal skal føres og skrives på", "Hvor mange nye leger som årlig skal utdannes i landet"],
      explanation: "Prioritering under knapphet er et kjernespørsmål i medisinsk etikk – rettferdig fordeling av begrensede ressurser.",
    },
  ],
  "filosofi-etikk-4-2": [
    {
      question: "Hva er antroposentrisme?",
      options: ["Synet om at mennesket står i sentrum, og naturen har verdi som middel", "Synet om at hele økosystemer har selvstendige moralske rettigheter", "Synet om at alt levende, ikke bare mennesket, har egenverdi i seg selv", "Synet om at dyrene er fullt ut likeverdige med mennesket i moralsk forstand"],
      explanation: "Antroposentrisme plasserer mennesket i sentrum; naturen har verdi kun som middel for menneskelige formål.",
    },
    {
      question: "Hva hevder biosentrismen?",
      options: ["At alt levende har egenverdi, ikke bare mennesker", "At bare mennesker har verdi, og at dyr og planter er midler for oss", "At naturen i seg selv er helt uten verdi utover nytten for oss", "At det utelukkende er mennesket som har moralsk verdi i naturen"],
      explanation: "Biosentrismen hevder at planter, dyr og økosystemer har verdi i seg selv, uavhengig av nytten for mennesker.",
    },
    {
      question: "Hvilken tradisjon utfordrer miljøetikken når den setter spørsmålstegn ved menneskets særstilling?",
      options: ["Antroposentrismen", "Rasjonalismen", "Skeptisismen", "Empirismen"],
      explanation: "Miljøetikk og dyrerettighetsfilosofi utfordrer antroposentrismen – ideen om at bare mennesker har moralsk verdi.",
    },
    {
      question: "Hvorfor er miljøetiske spørsmål blitt mer presserende?",
      options: ["På grunn av klimakrise og masseutryddelse av arter", "På grunn av at det er blitt færre dyr igjen i dyrehagene våre", "Fordi naturen nå er ferdig utforsket og alt om den er kjent", "Fordi alle mennesker er blitt enige om svarene på spørsmålene"],
      explanation: "Klimakrise og tap av biologisk mangfold gjør spørsmål om vårt ansvar overfor naturen stadig mer aktuelle.",
    },
    {
      question: "Hva innebærer det å ta hensyn til fremtidige generasjoner i miljøetikken?",
      options: ["At dagens valg påvirker mennesker som ennå ikke er født", "At bare nålevende har verdi, siden framtidige mennesker ennå ikke finnes", "At det utelukkende er nålevende mennesker som har moralsk verdi", "At naturen forblir uendret uansett hva vi mennesker foretar oss"],
      explanation: "Miljøetikk reiser spørsmål om vårt ansvar overfor fremtidige generasjoner som vil arve konsekvensene av dagens handlinger.",
    },
  ],
  "filosofi-etikk-4-3": [
    {
      question: "Hva menes med at teknologi ikke er nøytral?",
      options: ["Den bærer med seg verdier og skaper nye maktrelasjoner", "Den er alltid til det gode", "Den kan under ingen omstendigheter misbrukes til noe ondt", "Den fører alltid og uunngåelig til noe godt for samfunnet"],
      explanation: "Teknologietikken understreker at teknologi bærer verdier, former samfunnet og reiser dype etiske spørsmål.",
    },
    {
      question: "Hva er algoritmisk bias?",
      options: ["Når AI lærer skjevheter fra historiske data og reproduserer dem", "Når en datamaskin slutter å virke", "Når en datamaskin plutselig slutter å virke midt i en beregning", "Når treningsdataene er så nøyaktige at systemet blir helt feilfritt"],
      explanation: "AI lærer fra historiske data; hvis dataene inneholder skjevheter, vil systemet reprodusere og forsterke dem.",
    },
    {
      question: "Hvilket eksempel illustrerer algoritmisk diskriminering?",
      options: ["Ansiktsgjenkjenning som fungerer dårligere på mørke hudfarger", "En tekstbehandler som lagrer alle dokumenter uten problemer", "En kalkulator som regner ut alle regnestykkene helt riktig", "En nettleser som åpner alle nettsider raskt og uten feil"],
      explanation: "AI-systemer kan diskriminere, f.eks. ansiktsgjenkjenning som fungerer dårligere på enkelte grupper på grunn av skjeve treningsdata.",
    },
    {
      question: "Hvorfor er gjennomsiktighet (transparens) viktig i AI-etikk?",
      options: ["Det er ofte uklart hvordan AI-systemer kommer fram til beslutninger", "Fordi åpenhet i praksis gjør at systemene kjører betydelig raskere", "Fordi transparens reduserer systemenes samlede strømforbruk merkbart", "Fordi AI-systemer alltid er helt åpne og lette å gjennomskue"],
      explanation: "Mange AI-systemer er «svarte bokser» der det er vanskelig å forstå hvorfor de tar bestemte avgjørelser, noe som svekker ansvarlighet.",
    },
    {
      question: "Hva er et sentralt personvernspørsmål i teknologietikken?",
      options: ["Hvordan overvåkingsteknologi påvirker individets frihet", "Hvilken farge og lysstyrke skjermen på enheten skal ha", "Hvor raske og kraftige de nyeste datamaskinene faktisk er", "Hvor mye en ny mobiltelefon i gjennomsnitt koster i butikk"],
      explanation: "Overvåkingsteknologi og innsamling av persondata reiser spørsmål om personvern, frihet og maktforhold.",
    },
  ],
  "filosofi-etikk-4-4": [
    {
      question: "Hva handler global rettferdighet om?",
      options: ["Hvordan goder og byrder skal fordeles mellom land og mennesker", "Hvordan man rent teknisk konstruerer og bygger en solid bro", "Hvordan man best legger opp en vinnende strategi i et parti sjakk", "Hvordan man nøyaktig måler temperaturen i luften og vannet"],
      explanation: "Global rettferdighet handler om fordelingen av goder og byrder mellom land og mennesker globalt.",
    },
    {
      question: "Hva kjennetegner den kosmopolitiske posisjonen?",
      options: ["Alle mennesker har lik moralsk verdi, og rettferdighet gjelder globalt", "Vi har moralske plikter kun overfor våre egne landsmenn og borgere", "Bistand til fattige land er ren veldedighet, ikke en rettferdighetsplikt", "Staten skal under alle omstendigheter prioritere sine egne innbyggere først"],
      explanation: "Kosmopolitismen hevder at alle mennesker har lik moralsk verdi og at rettferdighet gjelder på tvers av landegrenser.",
    },
    {
      question: "Hva kjennetegner nasjonalismen (partikularismen) i denne debatten?",
      options: ["Vi har særlige forpliktelser overfor våre landsmenn", "Alle mennesker er likeverdige uansett nasjonalitet", "Alle mennesker er fullt ut likeverdige uansett hvilken nasjonalitet de har", "Bistand til fattige land er en absolutt plikt"],
      explanation: "Nasjonalismen hevder at rettferdighet primært gjelder innenfor nasjonalstaten og at vi har særlige plikter overfor egne borgere.",
    },
    {
      question: "Hvilket faktum om ulikhet brukes ofte som utgangspunkt for debatten?",
      options: ["En liten andel av verdens befolkning kontrollerer en stor del av rikdommen", "Verdens rikdom er i dag jevnt og rettferdig fordelt mellom alle mennesker", "Alle land i verden er omtrent like rike og har samme økonomiske grunnlag", "Ekstrem fattigdom er i praksis utryddet og finnes ikke lenger noe sted"],
      explanation: "Ekstrem global ulikhet – der en liten andel kontrollerer mesteparten av rikdommen mens milliarder lever i fattigdom – reiser spørsmålet om rettferdighet.",
    },
    {
      question: "Hva er et argument FOR den nasjonalistiske posisjonen?",
      options: ["Nasjonale bånd og delte institusjoner skaper særlige forpliktelser", "Vi har full mulighet til å hjelpe alle verdens mennesker like mye", "Alle mennesker er moralsk sett fullstendig like uansett hvor de bor", "Landegrenser er moralsk sett helt irrelevante for våre forpliktelser"],
      explanation: "Et nasjonalistisk argument er at delte institusjoner og nasjonale fellesskap gir grunnlag for særlige rettferdighetskrav og solidaritet.",
    },
  ],
  "filosofi-etikk-4-5": [
    {
      question: "Hva er ofte kjernen i et etisk dilemma?",
      options: ["Et valg mellom to goder eller to onder", "Et valg som er åpenbart enkelt", "Et valg som ikke får noen konsekvenser", "Et valg bare maskiner kan ta"],
      explanation: "Et etisk dilemma innebærer typisk en konflikt mellom verdier – et valg mellom to gode eller to onde alternativer.",
    },
    {
      question: "Hva er det første steget i en metodisk etisk analyse?",
      options: ["Klargjøre situasjonen og de relevante fakta", "Ignorere de involverte partene", "Trekke en endelig konklusjon om hva som er rett før partene høres", "Konkludere umiddelbart"],
      explanation: "Først bør man klargjøre fakta, hvem som er involvert, og hvilke interesser og verdier som står på spill.",
    },
    {
      question: "Hvordan ser nytteetikken (utilitarismen) på et dilemma?",
      options: ["Den vurderer hvilket valg som maksimerer samlet velferd", "Den ser bare på hvilke regler som brytes", "Den vurderer om handlingens intensjon er god, uansett resultatet", "Den vurderer om aktøren viser en dydig karakter i valgsituasjonen"],
      explanation: "Nytteetikken spør hvilke konsekvenser alternativene har og hvilket valg som gir mest samlet velferd.",
    },
    {
      question: "Hva er etisk dømmekraft?",
      options: ["Evnen til å tenke gjennom komplekse moralske spørsmål reflektert", "Evnen til å overbevise andre og få rett i en moralsk diskusjon", "Evnen til å gjengi moralske regler og bud presist etter hukommelsen", "Evnen til å regne ut den mest lønnsomme løsningen på et problem raskt"],
      explanation: "Etisk dømmekraft er evnen til å analysere og veie komplekse moralske spørsmål på en reflektert måte.",
    },
    {
      question: "Hvorfor er det nyttig å vurdere et dilemma ut fra flere etiske teorier?",
      options: ["Ulike teorier belyser ulike sider og gir et mer helhetlig bilde", "Fordi bare én av de etiske teoriene kan være gyldig, og resten er feil", "Fordi bare den etiske teorien som er mest utbredt, kan være gyldig", "For å kunne velge det svaret som passer aktøren best i situasjonen"],
      explanation: "Ved å vurdere ut fra nytteetikk, pliktetikk og dydsetikk får man fram ulike hensyn og en mer helhetlig analyse.",
    },
  ],
  "fil-3-1": [
    {
      question: "Hva er forskjellen mellom moral og etikk i filosofien?",
      options: ["Moral er de faktiske normene; etikk er den filosofiske refleksjonen over dem", "Etikk er de konkrete reglene i samfunnet; moral er den abstrakte teorien", "Moral gjelder bare religiøse normer, mens etikk gjelder verdslige normer", "Moral og etikk betyr nøyaktig det samme og brukes helt om hverandre"],
      explanation: "Moral viser til de konkrete normene som faktisk finnes, mens etikk er den filosofiske refleksjonen over moralen.",
    },
    {
      question: "Hva handler etikk grunnleggende om?",
      options: ["Hvordan vi bør leve, og hva som er rett og galt, godt og ondt", "Hvordan vi tjener mest penger", "Hvordan vi legger fram argumenter for å vinne en offentlig debatt", "Hvordan vi kan skaffe oss størst mulig rikdom og materiell velstand"],
      explanation: "Etikk handler om hvordan vi bør leve og hva som er rett og galt, godt og ondt.",
    },
    {
      question: "Hva gjør etikken når den «tar et skritt tilbake»?",
      options: ["Den stiller kritiske spørsmål ved selve de moralske normene", "Den teller hvor mange som er enige", "Den følger de rådende normene lojalt uten å stille spørsmål ved dem", "Den teller opp hvor mange i samfunnet som faktisk er enige i normen"],
      explanation: "Etikken reflekterer kritisk over moralen og spør f.eks. hvorfor det er galt å lyve og om det finnes unntak.",
    },
    {
      question: "Hvilket utsagn beskriver «moral» best?",
      options: ["De levde normene, verdiene og handlingsmønstrene i et samfunn", "Den teoretiske analysen av rett og galt", "Et logisk-matematisk system av regler som kan bevises formelt", "En naturvitenskapelig metode for å beskrive menneskelig atferd"],
      explanation: "Moral er det levde livet med sine skrevne og uskrevne regler – de faktiske normene i en gruppe eller et samfunn.",
    },
    {
      question: "Hvilket spørsmål er typisk etisk (ikke bare moralsk)?",
      options: ["«Er det alltid galt å lyve, eller finnes det unntak?»", "«Hvor mange innbyggere har Norge?»", "«Ved hvilken temperatur koker rent vann ved havnivå?»", "«Hva er klokka akkurat nå her hvor jeg befinner meg i dag?»"],
      explanation: "Etiske spørsmål reflekterer over begrunnelsen for normene, f.eks. om lyving alltid er galt eller om det finnes unntak.",
    },
  ],
  "fil-3-2": [
    {
      question: "Hva er det eneste som ifølge Kant er ubetinget godt?",
      options: ["En god vilje", "Intelligens", "Materiell rikdom", "Skarp intelligens"],
      explanation: "Kant mente at en god vilje er god i seg selv, uavhengig av hva den oppnår; egenskaper som intelligens kan misbrukes.",
    },
    {
      question: "Hva betyr det å handle «av plikt» hos Kant?",
      options: ["Å handle fordi man erkjenner at det er riktig, ikke for følelser eller fordeler", "Å handle etter hva som gir best følelse og størst nytelse i øyeblikket", "Å handle slik flertallet i samfunnet mener er mest fornuftig og rett", "Å handle for å oppnå en belønning eller unngå straff for seg selv"],
      explanation: "Kun når man handler fordi man erkjenner at noe er riktig – uavhengig av følelser eller fordeler – handler man virkelig moralsk.",
    },
    {
      question: "Hva kalles Kants etiske teori?",
      options: ["Pliktetikk (deontologisk etikk)", "Konsekvensetikk (utilitarisme)", "Dydsetikk (aretaisk etikk)", "Moralsk relativisme"],
      explanation: "Kants teori er pliktetikk eller deontologisk etikk: det moralske ligger i handlingen og intensjonen, ikke i konsekvensene.",
    },
    {
      question: "Hva er forskjellen på å handle «av plikt» og «i samsvar med plikt»?",
      options: ["Av plikt: man gjør det fordi det er riktig; i samsvar: man gjør riktig av andre grunner", "Å handle i samsvar med plikt er mer moralsk verdifullt enn å handle av plikt", "Å handle av plikt betyr å gjøre det motvillig, mens i samsvar er frivillig", "Det er ingen reell forskjell; begge uttrykkene betyr akkurat det samme"],
      explanation: "Hjelper du noen bare for god samvittighet eller belønning, handler du i samsvar med plikt, men ikke av plikt.",
    },
    {
      question: "Hva er det sentrale i pliktetikken til forskjell fra konsekvensetikken?",
      options: ["Det moralske ligger i handlingen og intensjonen, ikke i resultatet", "Bare konsekvensene av handlingen teller, ikke intensjonen bak den", "Bare det flertallet i samfunnet mener er riktig, avgjør handlingen", "Bare mengden lykke handlingen skaper for flest mulig, er avgjørende"],
      explanation: "I motsetning til konsekvensetikken vurderer pliktetikken handlingen ut fra plikt og intensjon, ikke ut fra utfallet.",
    },
  ],
  "fil-3-3": [
    {
      question: "Hva er grunnprinsippet i utilitarismen?",
      options: ["En handling er god i den grad den maksimerer lykke og reduserer lidelse", "En handling er god hvis den følger plikten", "En handling er god i den grad den følger en universell plikt uansett følgene", "En handling er god i den grad den er befalt av Gud eller en religiøs autoritet"],
      explanation: "Utilitarismen vurderer handlinger ut fra konsekvensene: størst mulig lykke for flest mulig.",
    },
    {
      question: "Hvem formulerte prinsippet «den største lykke for det største antall»?",
      options: ["Jeremy Bentham", "Immanuel Kant", "Aristoteles", "Emmanuel Levinas"],
      explanation: "Jeremy Bentham (1748–1832) formulerte det utilitaristiske prinsippet om størst lykke for flest mulig.",
    },
    {
      question: "Hva er konsekvensetikk?",
      options: ["Etikk som vurderer handlinger ut fra deres resultater", "Etikk som bare ser på intensjonen", "Etikk som vurderer handlingen ut fra aktørens karakter og dyder", "Etikk som bare ser på den gode viljen bak handlingen"],
      explanation: "Konsekvensetikken vurderer handlinger ut fra resultatene, ikke ut fra intensjon eller handlingens natur i seg selv.",
    },
    {
      question: "Hva mente Bentham styrer menneskelig atferd?",
      options: ["Lyst og smerte", "Plikt og fornuft", "Dyd og last", "Tro og håp"],
      explanation: "Bentham mente mennesket styres av to herskere: lyst (som vi søker) og smerte (som vi unngår).",
    },
    {
      question: "Hva er en kjent innvending mot utilitarismen?",
      options: ["Den kan rettferdiggjøre å ofre et mindretall for flertallets lykke", "Den krever en bestemt religiøs tro for å kunne anvendes i praksis", "Den ser bort fra menneskers lykke og velferd som moralsk relevant", "Den bryr seg ikke om konsekvensene av handlinger i det hele tatt"],
      explanation: "En vanlig innvending er at utilitarismen i prinsippet kan rettferdiggjøre urettferdig behandling av et mindretall hvis det øker samlet lykke.",
    },
  ],
  "fil-3-4": [
    {
      question: "Hvilket spørsmål står sentralt i dydsetikken?",
      options: ["«Hva slags person bør jeg være?»", "«Hvilke regler må jeg følge?»", "«Hvilke konsekvenser maksimerer lykke?»", "«Hva befaler Gud?»"],
      explanation: "Dydsetikken fokuserer på karakter og spør hva slags person man bør være, ikke bare hva man bør gjøre.",
    },
    {
      question: "Hva mente Aristoteles er menneskets mål (telos)?",
      options: ["Eudaimonia – det gode liv eller å blomstre som menneske", "Mest mulig nytelse", "Mest mulig nytelse og kroppslig velbehag over et helt liv", "Å følge sin plikt av respekt for den moralske loven i seg"],
      explanation: "Aristoteles mente menneskets telos er eudaimonia – realisering av menneskets potensial, et liv i samsvar med fornuften.",
    },
    {
      question: "Hva er en dyd ifølge Aristoteles, forstått som «den gylne middelvei»?",
      options: ["En midte mellom to ytterpunkter, f.eks. mot mellom feighet og dumdristighet", "Å innrette handlingene sine etter det flertallet i samfunnet gjør", "Alltid å velge det mest ekstreme alternativet i enhver situasjon", "Å undertrykke og aldri gi rom for følelser i moralske valg"],
      explanation: "En dyd ligger som en middelvei mellom to laster – mot er f.eks. midten mellom feighet (for lite) og dumdristighet (for mye).",
    },
    {
      question: "Hva er menneskets særpreg ifølge Aristoteles?",
      options: ["Fornuften", "Begjæret", "Sanseevnen", "Styrken"],
      explanation: "Aristoteles mente menneskets særpreg er fornuften, og det gode liv består i å leve i samsvar med fornuften.",
    },
    {
      question: "Hvordan utvikler man dyder ifølge Aristoteles?",
      options: ["Gjennom vane og øvelse over tid", "De er medfødte og uforanderlige", "Ved å lese regler", "Ved en plutselig åpenbaring"],
      explanation: "For Aristoteles utvikles dyder gjennom vane og praksis – vi blir rettferdige ved å handle rettferdig.",
    },
  ],
  "fil-3-5": [
    {
      question: "Hva setter nærhetsetikken og omsorgsetikken i sentrum?",
      options: ["Relasjoner, nærhet og omsorg for konkrete andre", "Universelle regler og upartiskhet, uavhengig av hvem den andre er", "Universelle regler og upartisk behandling av alle mennesker likt", "Maksimering av samlet nytte og lykke for flest mulig i samfunnet"],
      explanation: "Nærhetsetikk og omsorgsetikk utfordrer tradisjonell etikk ved å sette relasjoner og omsorg for konkrete mennesker i sentrum.",
    },
    {
      question: "Hva er sentralt i Levinas' etikk om «den Andres ansikt»?",
      options: ["Møtet med den Andres ansikt skaper et umiddelbart ansvar", "At man skal kalkulere konsekvensene før ansvaret i det hele tatt oppstår", "At man nøye skal kalkulere konsekvensene før man hjelper den Andre", "At man skal handle av respekt for en universell plikt overfor alle"],
      explanation: "For Levinas oppstår etikk i det direkte møtet med et annet menneskes sårbare ansikt, som plasserer et krav på meg før jeg velger det.",
    },
    {
      question: "Hva kritiserer omsorgsetikken ved de klassiske etiske teoriene?",
      options: ["At de overbetoner universelle prinsipper og upartiskhet", "At de bryr seg for mye om relasjoner", "At de bryr seg altfor mye om konkrete relasjoner og nære bånd", "At de fullstendig ser bort fra fornuftens rolle i moralske valg"],
      explanation: "Omsorgsetikken mener tradisjonell etikk er for opptatt av universelle, upartiske prinsipper og overser betydningen av konkrete relasjoner og omsorg.",
    },
    {
      question: "Hvilket ansvar beskriver Levinas i møtet med den Andre?",
      options: ["Et ansvar jeg har før jeg velger det", "Et ansvar jeg fritt kan velge bort", "Et ansvar som først oppstår gjennom en gjensidig kontrakt", "Et ansvar bestemt av en kontrakt"],
      explanation: "Ifølge Levinas blir jeg ansvarlig for den Andre før jeg velger det – det er en før-refleksiv erfaring.",
    },
    {
      question: "Hvorfor regnes nærhetsetikk og omsorgsetikk som «beslektede»?",
      options: ["Begge legger vekt på relasjoner og konkret nærhet fremfor abstrakte prinsipper", "Begge bygger utelukkende på beregning av handlingers konsekvenser", "Begge avviser at det finnes noen form for gyldig etikk overhodet", "Begge er rent religiøse teorier som bygger på guddommelige bud"],
      explanation: "De er beslektet fordi begge setter relasjoner, nærhet og omsorg i sentrum og utfordrer prinsippstyrt, upartisk etikk.",
    },
  ],
  "fil-5-1": [
    {
      question: "Hva er en «naturtilstand» i kontraktsteorien?",
      options: ["En tenkt tilstand før staten eksisterer", "En tilstand av perfekt demokrati", "Livet på landsbygda nær naturen", "En tilstand uten natur"],
      explanation: "Naturtilstanden er en tenkt tilstand før staten finnes; ulike tenkere beskriver den svært forskjellig.",
    },
    {
      question: "Hvordan beskrev Hobbes naturtilstanden?",
      options: ["Som kaos og «alles krig mot alle»", "Som uskyldig og fri", "Som et perfekt demokrati", "Som fredelig under naturretten"],
      explanation: "Hobbes mente naturtilstanden var kaotisk og preget av krig, og at man derfor må gi nesten all makt til en sterk suveren.",
    },
    {
      question: "Hva mente Locke at staten først og fremst skal beskytte?",
      options: ["Liv, frihet og eiendom", "Allmennviljen alene", "Utelukkende kongens og monarkens ubegrensede makt", "Kirkens interesser"],
      explanation: "Locke mente at folket gir staten begrenset makt nettopp for å beskytte naturlige rettigheter: liv, frihet og eiendom.",
    },
    {
      question: "Hva er en samfunnskontrakt?",
      options: ["En (faktisk eller tenkt) avtale som legitimerer statens makt", "En handelsavtale mellom to eller flere selvstendige stater", "En arbeidskontrakt mellom en arbeidsgiver og en arbeidstaker", "En avtale om leie av bolig mellom en utleier og en leietaker"],
      explanation: "Samfunnskontrakten er en avtale der folket gir avkall på noe frihet for å oppnå sikkerhet eller fellesskap, og som legitimerer statens makt.",
    },
    {
      question: "Hos hvem ligger suvereniteten ifølge Rousseau?",
      options: ["Hos folket selv (folkesuverenitet)", "Hos en filosofkonge", "Hos kirken og den geistlige autoriteten", "Hos den eneveldige monarken av Guds nåde"],
      explanation: "Rousseau plasserer suvereniteten hos folket; staten skal være uttrykk for allmennviljen og folkesuvereniteten.",
    },
  ],
  "fil-5-2": [
    {
      question: "Hva er negativ frihet?",
      options: ["Fravær av ytre tvang – at ingen hindrer deg", "Evnen til selvrealisering og til å bli den man egentlig er", "Frihet som utelukkende tilkommer staten og dens myndigheter", "En form for frihet som er skadelig for både individ og samfunn"],
      explanation: "Negativ frihet er fravær av ytre hindringer: du er fri når ingen hindrer deg.",
    },
    {
      question: "Hva er positiv frihet?",
      options: ["Evne til selvbestemmelse og å realisere sitt sanne selv", "Fravær av all lovgivning, slik at ingen regler binder den enkelte", "At loven forbyr alle former for inngrep i den private sfæren", "Fravær av ytre tvang og innblanding fra staten i menneskers valg"],
      explanation: "Positiv frihet handler om reell evne til selvbestemmelse – f.eks. at staten aktivt sikrer muligheter som utdanning.",
    },
    {
      question: "Hva sier Mills skadeprinsipp?",
      options: ["Din frihet slutter der den skader andre", "Staten kan gjøre hva den vil", "At individet aldri har en reell rett til frihet i et samfunn", "Ingen har rett til frihet"],
      explanation: "Mills skadeprinsipp sier at samfunnet bare kan begrense individets frihet for å hindre skade på andre.",
    },
    {
      question: "Hva kjennetegner menneskerettigheter?",
      options: ["De er universelle rettigheter som tilhører alle mennesker", "De gjelder bare dem som er statsborgere i det landet som har gitt dem", "De er goder man kan kjøpe, selge og overføre på et fritt marked", "De er rettigheter som først inntrer ved myndighetsalder for voksne"],
      explanation: "Menneskerettigheter er universelle og tilhører alle mennesker i kraft av å være menneske.",
    },
    {
      question: "Hvordan kan negativ og positiv frihet illustreres ved ytringsfrihet?",
      options: ["Negativt: ingen sensur. Positivt: reell mulighet til å ytre seg", "Positiv frihet betyr at ingen får ytre seg", "Negativt og positivt betyr her nøyaktig det samme og kan brukes om hverandre", "Positiv ytringsfrihet betyr at ingen borgere i praksis får lov til å ytre seg"],
      explanation: "Negativ ytringsfrihet er fravær av sensur; positiv ytringsfrihet er at alle har reell mulighet til å ytre seg, f.eks. gjennom utdanning og tilgang til media.",
    },
  ],
  "fil-5-3": [
    {
      question: "Hva er forskjellen på direkte og representativt demokrati?",
      options: ["Direkte: folket tar selv beslutninger. Representativt: folket velger representanter", "Representativt demokrati fungerer helt uten folkevalgte forsamlinger og organer", "Direkte demokrati kjennetegnes ved at det aldri holdes noen form for valg", "Det finnes i praksis ingen reell forskjell mellom de to styreformene"],
      explanation: "I direkte demokrati tar folket selv beslutninger, mens i representativt demokrati velges representanter til å beslutte.",
    },
    {
      question: "Hva er flertallstyranni?",
      options: ["Flertallets undertrykkelse av et mindretall", "At mindretallet styrer", "At domstolene alene overtar all makt fra de folkevalgte organene", "At ingen instans i det hele tatt styrer"],
      explanation: "Flertallstyranni betegner faren for at flertallet i et demokrati undertrykker mindretallets rettigheter.",
    },
    {
      question: "Hva kjennetegner deliberativt demokrati?",
      options: ["Beslutninger bygger på åpen debatt og argumentutveksling", "Avgjørelser tas uten diskusjon", "At bare en snever gruppe eksperter får lov til å treffe avgjørelsene", "At avgjørelser tas raskt uten forutgående diskusjon eller refleksjon"],
      explanation: "Deliberativt demokrati vektlegger at beslutninger skal hvile på offentlig debatt, refleksjon og utveksling av argumenter.",
    },
    {
      question: "Hva menes med «agendakontroll» som en dimensjon av makt?",
      options: ["Makt til å bestemme hvilke saker som i det hele tatt kommer på dagsorden", "Den rent tekniske makten til å telle stemmer og kunngjøre resultatet", "Makt utøvd utelukkende gjennom åpne avstemninger og synlige beslutninger", "Makt til å bestemme hvor offentlige veier og bygg skal plasseres"],
      explanation: "Maktens dimensjoner inkluderer åpen makt over beslutninger, agendakontroll (hva som tas opp) og forming av preferanser.",
    },
    {
      question: "Hva er en dypere form for makt enn åpne beslutninger?",
      options: ["Å forme menneskers preferanser og ønsker", "Å holde valg hvert fjerde år", "Å sørge for at det avholdes ordinære valg med jevne mellomrom", "Å telle stemmer raskt"],
      explanation: "Den mest subtile maktdimensjonen er evnen til å forme folks preferanser, slik at de ønsker det de «skal» ønske.",
    },
  ],
  "fil-5-4": [
    {
      question: "Hva er Rawls' tankeeksperiment «uvitenhetens slør»?",
      options: ["Du velger rettferdighetsprinsipper uten å vite din egen posisjon i samfunnet", "Du velger rettferdighetsprinsipper ut fra din egen rikdom og posisjon", "Du dekker bokstavelig til ansiktet mens du avgir din stemme i valget", "Du later som du ikke kjenner til etikk mens du fatter dine valg"],
      explanation: "Bak uvitenhetens slør kjenner du ikke din egen klasse, kjønn eller evner, og velger derfor rettferdige prinsipper alle kan godta.",
    },
    {
      question: "Hva sier Rawls' forskjellsprinsipp?",
      options: ["Økonomisk ulikhet er kun rettferdig hvis den forbedrer situasjonen til de dårligst stilte", "Økonomisk ulikhet krever ingen begrunnelse og trenger ikke rettferdiggjøres", "Enhver form for økonomisk ulikhet er forbudt og må utjevnes fullstendig", "De rikeste i samfunnet skal alltid ha rett til å tjene aller mest"],
      explanation: "Forskjellsprinsippet tillater ulikhet bare hvis den kommer de dårligst stilte til gode.",
    },
    {
      question: "Hva sier Rawls' frihetsprinsipp?",
      options: ["Alle skal ha like grunnleggende friheter", "Frihet skal fordeles etter inntekt", "Friheter skal fordeles blant borgerne etter deres inntekt og formue", "Bare de rike har friheter"],
      explanation: "Frihetsprinsippet, som har forrang, sier at alle skal ha like og mest mulig omfattende grunnleggende friheter.",
    },
    {
      question: "Hva er maximin-strategien i Rawls' teori?",
      options: ["Å gjøre den verst stilte situasjonen så god som mulig", "Å maksimere samlet nytte uansett fordeling", "Å redusere statens størrelse og oppgaver til et absolutt minimum", "Å maksimere de rikestes samlede inntekt"],
      explanation: "Maximin betyr å maksimere minimumsposisjonen – bak sløret velger man prinsipper som gjør den verste situasjonen best mulig.",
    },
    {
      question: "Hvordan kan progressiv skatt være rettferdig ifølge Rawls?",
      options: ["Hvis inntektene brukes til velferd som hjelper de dårligst stilte", "Hvis alle betaler samme beløp", "Hvis alle innbyggere pålegges å betale nøyaktig samme beløp i skatt", "Hvis staten avstår helt fra å kreve inn noen form for inntektsskatt"],
      explanation: "Et progressivt skattesystem er rettferdig hvis inntektene brukes til velferd (helse, utdanning, trygd) som forbedrer situasjonen til de dårligst stilte.",
    },
  ],
  "fil-5-5": [
    {
      question: "Hva mente Simone de Beauvoir med «man fødes ikke til kvinne, man blir det»?",
      options: ["Kjønnsroller er sosialt konstruert, ikke bare biologisk bestemt", "At biologi er det eneste som teller", "At kvinner rent bokstavelig ikke fødes, men oppstår på annet vis", "At biologien alene bestemmer hva en kvinne er, uavhengig av kultur"],
      explanation: "Beauvoir hevdet at kvinnerollen er sosialt konstruert gjennom oppdragelse og kultur, ikke bare biologisk gitt.",
    },
    {
      question: "Hva er interseksjonalitet?",
      options: ["Hvordan ulike former for ulikhet (kjønn, rase, klasse) virker sammen", "En type demokratisk valg der velgerne krysser av flere alternativer", "Et fysisk veikryss der flere gater møtes og trafikken flettes sammen", "En matematisk funksjon som beskriver hvor to kurver skjærer hverandre"],
      explanation: "Interseksjonalitet beskriver hvordan ulike former for ulikhet og diskriminering overlapper og forsterker hverandre.",
    },
    {
      question: "Hva menes med strukturell ulikhet?",
      options: ["Systemiske mønstre som reproduserer ulikhet selv uten eksplisitt diskriminering", "Rent tilfeldige forskjeller mellom mennesker uten noe bakenforliggende system", "Bevisst og målrettet diskriminering rettet mot bestemte enkeltpersoner", "Utelukkende biologiske forskjeller som er medfødte og ikke kan endres"],
      explanation: "Strukturell ulikhet er innebygd i systemer og institusjoner, slik at ulikhet opprettholdes selv uten uttrykkelig forskjellsbehandling.",
    },
    {
      question: "Hva menes med begrepet «den Andre» hos Beauvoir?",
      options: ["At kvinner er blitt definert som avvik fra en mannlig norm", "At alle mennesker er like, og at kjønn derfor ikke betyr noe for identiteten", "At intet menneske i det hele tatt kan defineres i forhold til en norm", "At menn historisk er blitt definert som mindreverdige avvik fra kvinnen"],
      explanation: "Beauvoir beskrev hvordan kvinnen historisk er definert som «den Andre» – et avvik fra mannen som regnes som normen.",
    },
    {
      question: "Hva menes med «feministiske bølger»?",
      options: ["Ulike historiske faser i feministisk aktivisme", "En type demonstrasjon som gjentar seg med jevne mellomrom hvert år", "Et fast radioprogram som tar opp kvinnesak og likestillingsspørsmål", "En bestemt type organisert demonstrasjon med paroler og opptog i gatene"],
      explanation: "Feministiske bølger viser til ulike faser, fra kampen for stemmerett til senere bevegelser som #MeToo.",
    },
  ],
  "fil-6-1": [
    {
      question: "Hva setter eksistensialismen i sentrum?",
      options: ["Menneskets eksistens og konkrete livserfaring", "Universelle, abstrakte prinsipper", "Naturvitenskapens allmenne lover som styrer virkeligheten uavhengig av oss", "Naturvitenskapens lover"],
      explanation: "Eksistensialismen retter blikket mot det enkelte individs subjektive opplevelse av tilværelsen og dets valg.",
    },
    {
      question: "Hva betyr Sartres setning «eksistensen går forut for essensen»?",
      options: ["Mennesket finnes først, og skaper sin egen natur gjennom valg", "Mennesket har en fastlagt natur fra fødselen", "At en fastlagt essens bestemmer alt ved mennesket allerede på forhånd", "At det bare er Gud som kan gi menneskets tilværelse mening og innhold"],
      explanation: "Mennesket kommer til verden uten forhåndsbestemt natur og skaper sin egen essens gjennom valg og handlinger.",
    },
    {
      question: "Hva svarer eksistensialismen ungdommen som spør «Hvem er jeg egentlig?»",
      options: ["Du er ikke noe på forhånd – du blir den du velger å bli", "Bare samfunnet bestemmer hvem du er, gjennom rollen du blir tildelt", "Din identitet er fastlagt og gitt allerede fra fødselen av", "Det er utelukkende samfunnet rundt deg som bestemmer hvem du er"],
      explanation: "Ifølge eksistensialismen er du ikke noe på forhånd; du former din identitet gjennom dine valg og handlinger.",
    },
    {
      question: "Hvordan skiller eksistensialismen seg fra tradisjonell filosofi?",
      options: ["Den vektlegger individets subjektive erfaring fremfor universelle systemer", "Den søker utelukkende etter universelle sannheter løsrevet fra individet", "Den er en rent matematisk disiplin bygget på formler og logiske bevis", "Den avviser tanken om at mennesker i det hele tatt foretar egne valg"],
      explanation: "I motsetning til tradisjonell filosofi som søker universelle sannheter, fokuserer eksistensialismen på individets konkrete eksistens.",
    },
    {
      question: "Hvem formulerte den berømte setningen «eksistensen går forut for essensen»?",
      options: ["Jean-Paul Sartre", "Søren Kierkegaard", "Albert Camus", "Friedrich Nietzsche"],
      explanation: "Setningen er Jean-Paul Sartres mest kjente formulering av eksistensialismens grunntanke.",
    },
  ],
  "fil-6-2": [
    {
      question: "Hvem regnes som eksistensialismens far?",
      options: ["Søren Kierkegaard", "Jean-Paul Sartre", "Den tyske tenkeren Karl Marx", "Albert Camus"],
      explanation: "Den danske filosofen Søren Kierkegaard (1813–1855) regnes som eksistensialismens far.",
    },
    {
      question: "Hvilke tre eksistensielle stadier beskrev Kierkegaard?",
      options: ["Det estetiske, det etiske og det religiøse", "Barndom, ungdom og alderdom som livsfaser", "Tese, antitese og syntese i dialektikken", "Fortid, nåtid og fremtid som tidsplan"],
      explanation: "Kierkegaard beskrev tre stadier mennesket kan leve i: det estetiske, det etiske og det religiøse.",
    },
    {
      question: "Hva kjennetegner det estetiske stadiet hos Kierkegaard?",
      options: ["Å leve for øyeblikkets nytelse og søke nye opplevelser", "Å forplikte seg til moralske lover", "Å hvile i en dyp religiøs tro og et personlig forhold til Gud", "Å forplikte seg strengt til allmenne moralske lover og plikter"],
      explanation: "Det estetiske stadiet handler om å jage etter nytelse og stimuli, men ender ofte i tomhet fordi nytelsen er flyktig.",
    },
    {
      question: "Hva innebærer det etiske stadiet?",
      options: ["Å ta ansvar og forplikte seg til verdier og plikter", "Bare å søke nytelse", "Å avvise enhver form for moral og leve helt uten forpliktelser", "Å leve videre uten å måtte foreta noen valg eller ta noe ansvar"],
      explanation: "På det etiske stadiet anerkjenner man plikter overfor andre og seg selv, og lever for det gode fremfor bare for nytelsen.",
    },
    {
      question: "Hva var sentralt i Kierkegaards forståelse av sannhet?",
      options: ["At subjektiviteten er sannheten – meningen ligger i den enkeltes indre liv", "At sannhet utelukkende består av objektive og etterprøvbare fakta", "At sannhet fastsettes av flertallets oppfatning i et fellesskap", "At sannhet i det hele tatt er umulig for mennesket å oppnå"],
      explanation: "For Kierkegaard lå sannheten i den enkeltes indre, subjektive liv – det å være et eksisterende individ.",
    },
  ],
  "fil-6-3": [
    {
      question: "Hva mente Sartre med at mennesket er «dømt til frihet»?",
      options: ["Vi kan ikke unnslippe ansvaret for våre valg – selv det å ikke velge er et valg", "At bare enkelte utvalgte mennesker er født med ekte frihet og ansvar", "At friheten er en belønning man gjør seg fortjent til gjennom livet", "At mennesket i virkeligheten ikke har noen frihet i det hele tatt"],
      explanation: "Sartre mente vi alltid er frie og ansvarlige; vi kan ikke flykte fra ansvaret, for selv å ikke velge er et valg.",
    },
    {
      question: "Hva er «dårlig tro» (mauvaise foi) hos Sartre?",
      options: ["En form for selvbedrag der vi later som om vi ikke er frie", "Å ikke tro på Gud", "Å mangle religiøs tro og ikke tro på noen guddommelig makt", "Å lyve bevisst til andre mennesker for å oppnå egne fordeler"],
      explanation: "Dårlig tro er selvbedrag der vi later som om roller eller ytre årsaker bestemmer hvem vi er, for å slippe ansvaret for vår frihet.",
    },
    {
      question: "Hva illustrerer Sartres eksempel om kelneren?",
      options: ["En person i dårlig tro som later som han bare er rollen sin", "At yrker bestemmer identiteten fullstendig", "Et forbilde på hvordan gode arbeidsvaner skaper harmoni mellom plikt og trivsel", "En person som gjennom autentiske valg fullt ut tar eierskap over sitt eget yrkesliv"],
      explanation: "Kelneren som spiller rollen perfekt og later som han «bare» er en kelner, undertrykker sin egen frihet – det er dårlig tro.",
    },
    {
      question: "Hva følger av Sartres syn på frihet?",
      options: ["Et tungt ansvar for våre valg", "At vi er fritatt fra ansvar", "At omgivelsene og andre mennesker velger for oss", "At andre bestemmer for oss"],
      explanation: "Den radikale friheten innebærer et tungt ansvar: vi er fullt ut ansvarlige for det vi gjør og hvem vi blir.",
    },
    {
      question: "Hvilken filosofisk retning er Sartre den mest kjente representanten for?",
      options: ["Eksistensialismen", "Strukturalismen", "Fenomenologien", "Rasjonalismen"],
      explanation: "Jean-Paul Sartre er kanskje den mest kjente eksistensialisten, med sin radikale betoning av frihet og ansvar.",
    },
  ],
  "fil-6-4": [
    {
      question: "Hva er «det absurde» ifølge Camus?",
      options: ["Konflikten mellom menneskets behov for mening og verdens taushet", "At alt i tilværelsen har en klar mening som mennesket kan finne fram til", "En form for humor der livets tilfeldigheter fremstår som komiske og meningsløse", "En logisk selvmotsigelse der premissene fører til en umulig og ugyldig konklusjon"],
      explanation: "Det absurde oppstår i møtet mellom vårt ønske om mening og universets likegyldige taushet.",
    },
    {
      question: "Hva kalles Camus' filosofi ofte, siden han selv avviste betegnelsen eksistensialist?",
      options: ["Absurdisme", "Nihilisme", "Rasjonalisme", "Stoisisme"],
      explanation: "Camus' filosofi kalles ofte absurdisme, fordi den fokuserer på livets meningsløshet og det absurde.",
    },
    {
      question: "Hvor oppstår det absurde ifølge Camus?",
      options: ["I gapet mellom menneskets søken etter mening og verdens stumhet", "Bare i kunsten, som forsøker å skape mening der ingen finnes", "Utelukkende i naturens brutale og likegyldige krefter rundt oss", "Bare innenfor religiøs tro der Gud tier og ikke besvarer bønner"],
      explanation: "Det absurde er konflikten mellom menneskets behov for mening og en verden som ikke gir noe svar.",
    },
    {
      question: "Hva er Camus' poeng med hverdagens rutine (stå opp, jobbe, spise, sove)?",
      options: ["Spør man stadig «hvorfor?», ender man til slutt i taushet – det absurde", "At rutinene gir livet full mening så lenge man slutter å stille spørsmål", "At de daglige rutinene i seg selv gir livet en fullstendig og varig mening", "At mennesket bør bryte ut av rutinene og slutte helt å arbeide og pliktoppfylle"],
      explanation: "Fortsetter man å spørre «hvorfor?» til hvert svar, ender man i taushet uten en endelig kosmisk mening – det absurde.",
    },
    {
      question: "Hva er hovedproblemet i tilværelsen for Camus, til forskjell fra Sartre?",
      options: ["Livets meningsløshet, ikke frihetens tyngde", "Fraværet av gudstro og religiøs forankring", "Frihetens knugende tyngde, ikke meningsløsheten", "Menneskets grunnleggende mangel på sikker kunnskap"],
      explanation: "For Camus er kjerneproblemet livets meningsløshet (det absurde), mens Sartre vektla frihetens tyngde og ansvar.",
    },
  ],
  "fil-6-5": [
    {
      question: "Hva er nihilisme?",
      options: ["Læren om at ingenting har iboende mening eller verdi", "Læren om at alt har klar mening", "Troen på at det finnes mange guddommer som styrer verden", "Læren om at alt i tilværelsen har en klar og iboende mening"],
      explanation: "Nihilisme (latin nihil = intet) hevder at det ikke finnes noen objektiv mening, absolutte verdier eller universell moral.",
    },
    {
      question: "Hva mente Nietzsche med «Gud er død»?",
      options: ["At den tradisjonelle kilden til mening er blitt utenkelig for moderne mennesker", "At religion aldri har eksistert", "At religiøs tro og gudsforestillinger aldri har hatt noen reell historisk eksistens", "At en guddom bokstavelig talt levde og deretter opphørte å eksistere i fysisk forstand"],
      explanation: "Nietzsche mente at religion og absolutte verdier som meningskilde er blitt utenkelig for moderne mennesker, noe som skaper en krise.",
    },
    {
      question: "Hva er Viktor Frankls logoterapi opptatt av?",
      options: ["Menneskets søken etter mening i livet", "Behandling av fysiske sykdommer", "Kirurgisk og medisinsk behandling av kroppslige lidelser", "Logiske feilslutninger"],
      explanation: "Frankls logoterapi bygger på at menneskets dypeste drivkraft er søken etter mening, selv under lidelse.",
    },
    {
      question: "Hva er en mulig konsekvens av at «Gud er død» ifølge Nietzsche?",
      options: ["En krise om hva vi skal bygge våre liv og verdier på", "At mennesket slipper å foreta noen frie valg lenger", "At tilværelsen straks blir enklere og lettere å leve", "At vitenskapen mister all sin verdi"],
      explanation: "Når den tradisjonelle meningskilden faller bort, oppstår spørsmålet om hva mennesket skal bygge sine verdier på.",
    },
    {
      question: "Hvilket spørsmål regnes som kanskje filosofiens mest grunnleggende i dette kapittelet?",
      options: ["Spørsmålet om livets mening", "Spørsmålet om hva klokka er", "Spørsmålet om priser i markedet", "Spørsmålet om gravitasjon"],
      explanation: "Spørsmålet om livets mening – hvorfor vi eksisterer – står sentralt i eksistensialisme og absurdisme.",
    },
  ],
  "fil-7-1": [
    {
      question: "Hva er et argument i logisk forstand?",
      options: ["En påstand (konklusjon) som støttes av grunner (premisser)", "En følelsesladet ytring uten støtte i grunner eller bevis", "En tilfeldig påstand som fremsettes helt uten begrunnelse", "En opphetet krangel mellom to personer som er uenige"],
      explanation: "Et argument består av premisser som gir støtte til en konklusjon – ikke en krangel.",
    },
    {
      question: "Når er et argument gyldig?",
      options: ["Når konklusjonen nødvendigvis følger av premissene", "Når svært mange mennesker er enige i konklusjonen", "Når resonnementet høres retorisk overbevisende ut", "Når alle premissene faktisk er empirisk sanne"],
      explanation: "Gyldighet handler om strukturen: hvis premissene er sanne, må konklusjonen også være sann.",
    },
    {
      question: "Hva kreves for at et argument skal være «godt» (holdbart)?",
      options: ["At det både er gyldig og har sanne premisser", "At argumentet er langt og grundig i formen", "Bare at premissene som brukes faktisk er sanne", "Bare at slutningen har en gyldig logisk struktur"],
      explanation: "Et godt argument må både være gyldig OG ha sanne premisser.",
    },
    {
      question: "Kan et argument være gyldig selv om premissene er falske?",
      options: ["Ja – gyldighet handler om strukturen, ikke sannheten", "Bare hvis konklusjonen er sann", "Nei, et argument med falske premisser er alltid ugyldig", "Bare i matematiske bevis, aldri i vanlige resonnementer"],
      explanation: "Et argument kan ha falske premisser og likevel være gyldig, fordi gyldighet bare handler om at konklusjonen følger av premissene.",
    },
    {
      question: "Hvorfor er argumentet «Alle katter er dyr; Fido er et dyr; derfor er Fido en katt» ugyldig?",
      options: ["Konklusjonen følger ikke nødvendigvis – Fido kan være en hund", "Fordi argumentet i det hele tatt handler om dyr og arter", "Fordi argumentet er altfor kort og upresist formulert", "Fordi begge premissene faktisk er usanne påstander"],
      explanation: "At noe er et dyr betyr ikke at det er en katt; konklusjonen følger ikke nødvendigvis av premissene, så argumentet er ugyldig.",
    },
  ],
  "fil-7-2": [
    {
      question: "Hva er en syllogisme?",
      options: ["En logisk struktur med to premisser og en konklusjon, utviklet av Aristoteles", "En bestemt type feilslutning som gir ugyldige konklusjoner", "En retorisk overtalelsesteknikk brukt av talere i antikken", "En matematisk ligning med to ukjente og ett svar"],
      explanation: "Syllogismen er en klassisk logisk struktur med major premiss, minor premiss og konklusjon.",
    },
    {
      question: "Hvilken rolle spiller mellombegrepet (middle term) i en syllogisme?",
      options: ["Det forbinder de to premissene, men mangler i konklusjonen", "Det opptrer som predikatet i selve konklusjonen", "Det opptrer som subjektet i selve konklusjonen", "Det er overflødig og kan fjernes uten følger"],
      explanation: "Mellombegrepet (f.eks. «mennesker») forbinder de to premissene, men opptrer ikke i konklusjonen.",
    },
    {
      question: "I det klassiske eksempelet «Alle mennesker er dødelige; Sokrates er et menneske; derfor er Sokrates dødelig» – hva er konklusjonen?",
      options: ["Sokrates er dødelig", "Alle mennesker er dødelige", "Sokrates er et menneske", "Alle dødelige er mennesker"],
      explanation: "Konklusjonen «Sokrates er dødelig» følger logisk av de to premissene.",
    },
    {
      question: "Hva er forskjellen på formell og uformell logikk?",
      options: ["Formell logikk studerer argumentenes struktur; uformell ser på innhold og språk", "Formell logikk handler utelukkende om følelser og stemninger", "Uformell logikk fører alltid til feilaktige konklusjoner", "De er fullstendig identiske og betyr nøyaktig det samme"],
      explanation: "Formell logikk analyserer gyldig struktur, mens uformell logikk vurderer innhold, språk og relevans i hverdagsargumenter.",
    },
    {
      question: "Hva betyr vokalene i syllogismenavn som «Barbara» (AAA)?",
      options: ["De koder typen utsagn: A = alle, E = ingen, I = noen", "De angir hvor mange premisser syllogismen består av", "De er navn på antikke filosofer som utviklet logikken", "De er bare tilfeldige bokstaver uten noen dypere betydning"],
      explanation: "Vokalene koder utsagnstypene: A (alle), E (ingen), I (noen). «Barbara» = AAA betyr tre «alle»-utsagn.",
    },
  ],
  "fil-7-3": [
    {
      question: "Hva er en feilslutning (fallacy)?",
      options: ["En feil i resonnement som gjør et argument ugyldig eller villedende", "En bestemt gyldig type syllogisme utviklet av Aristoteles", "En korrekt konklusjon som følger nødvendig av premissene", "Et hvilket som helst usant utsagn framsatt i en debatt"],
      explanation: "En feilslutning er en feil i resonnementet som gjør argumentet ugyldig eller villedende, selv om det kan virke overbevisende.",
    },
    {
      question: "Hva er en ad hominem-feilslutning?",
      options: ["Å angripe personen i stedet for argumentet", "Å bruke for mange tall", "Å vise til en anerkjent autoritet for å styrke sin sak", "Å trekke ut resonnementet med lange og omstendelige ord"],
      explanation: "Ad hominem («mot personen») angriper den som argumenterer i stedet for selve argumentet.",
    },
    {
      question: "Hvorfor er ad hominem en feilslutning?",
      options: ["Personens egenskaper påvirker ikke argumentets gyldighet", "Fordi personangrep alltid er sanne", "Fordi angrepet er altfor høflig og respektfullt formulert", "Fordi personangrep i praksis alltid viser seg å være sanne"],
      explanation: "Et arguments gyldighet avhenger av premisser og struktur, ikke av hvem som fremfører det.",
    },
    {
      question: "Hva er forskjellen mellom formelle og uformelle feilslutninger?",
      options: ["Formelle bryter logiske regler; uformelle er feil i innhold, språk eller relevans", "Uformelle feilslutninger er alltid gyldige og fullt holdbare", "Formelle feilslutninger forekommer utelukkende i matematikk", "De betegner nøyaktig det samme fenomenet under to navn"],
      explanation: "Formelle feilslutninger bryter regler for gyldighet, mens uformelle feilslutninger skyldes innhold, språk eller manglende relevans.",
    },
    {
      question: "Hvorfor er det nyttig å kjenne feilslutninger?",
      options: ["Det gjør deg til en bedre kritisk tenker og hjelper deg å unngå å bli lurt", "Det gjør argumentene dine lengre og mer omstendelige å følge", "Det erstatter fullstendig behovet for fakta og dokumentasjon", "Det gjør deg mer følelsesladet og lidenskapelig i debatter"],
      explanation: "Å gjenkjenne feilslutninger hjelper deg å unngå dårlige argumenter, bygge sterkere egne argumenter og gjennomskue manipulasjon.",
    },
  ],
  "fil-7-4": [
    {
      question: "Hva er retorikk?",
      options: ["Kunsten å overtale gjennom språk", "Læren om gyldige slutninger", "En bestemt type uformell logisk feilslutning", "En type feilslutning"],
      explanation: "Retorikk er kunsten å overtale gjennom språk, utviklet i antikkens Hellas.",
    },
    {
      question: "Hvilke tre overtalelsesmidler beskrev Aristoteles?",
      options: ["Ethos, pathos og logos", "Tese, antitese og syntese", "Major, minor og konklusjon", "Lyst, smerte og likegyldighet"],
      explanation: "Aristoteles' tre overtalelsesmidler er ethos (troverdighet), pathos (følelser) og logos (logikk).",
    },
    {
      question: "Hva appellerer ethos til?",
      options: ["Talerens troverdighet og karakter", "Rasjonelle argumenter", "Rene rasjonelle argumenter og bevis", "Publikums følelser og sinnsstemninger"],
      explanation: "Ethos handler om talerens troverdighet – at publikum stoler på at du er kompetent og ærlig.",
    },
    {
      question: "Hva kjennetegner manipulativ retorikk?",
      options: ["Overbruk av pathos og ethos mens logos neglisjeres", "Total fravær av enhver følelsesmessig appell", "Overlessing med altfor mange fakta og tall", "Ensidig bruk av kun logos og rene bevis"],
      explanation: "God retorikk balanserer alle tre midler; manipulativ retorikk overbruker følelser (pathos) og autoritet (ethos) på bekostning av logikk (logos).",
    },
    {
      question: "Hva appellerer logos til?",
      options: ["Rasjonelle argumenter og bevis", "Publikums fordommer", "Tilhørernes følelser og stemninger", "Talerens autoritet og troverdighet"],
      explanation: "Logos appellerer til fornuften gjennom rasjonelle argumenter og bevis.",
    },
  ],
  "fil-7-5": [
    {
      question: "Hva sier korrespondanseteorien om sannhet?",
      options: ["En påstand er sann hvis den stemmer med virkeligheten", "En påstand er sann hvis den passer med andre sannheter", "En påstand er sann hvis den fungerer i praksis", "En påstand er sann hvis eksperter er enige"],
      explanation: "Korrespondanseteorien: «Snø er hvit» er sant fordi snø faktisk er hvit – sannhet er overensstemmelse med virkeligheten.",
    },
    {
      question: "Hva sier koherensteorien om sannhet?",
      options: ["En påstand er sann hvis den passer med andre aksepterte sannheter", "En påstand er sann hvis den stemmer med virkeligheten", "En påstand er sann hvis den er tilstrekkelig gammel og har vart gjennom lang tid", "En påstand er sann hvis den viser seg praktisk nyttig og fungerer godt i handling"],
      explanation: "Koherensteorien sier at en påstand er sann hvis den er konsistent med andre aksepterte sannheter; brukes mye i matematikk og logikk.",
    },
    {
      question: "Hva står T-en for i kildekritikkverktøyet TONE?",
      options: ["Troverdighet", "Tidspunkt", "Tidspunkt: når teksten ble publisert og oppdatert", "Tekst"],
      explanation: "I TONE-verktøyet står T for Troverdighet: hvem er avsenderen og har de relevant kompetanse?",
    },
    {
      question: "Hva er et problem med den pragmatiske sannhetsteorien (sant = det som fungerer)?",
      options: ["Noe kan fungere i praksis uten å være sant (f.eks. placebo)", "Den forutsetter en guddommelig åpenbaring som avgjør hva som fungerer", "Den kan bare anvendes på naturvitenskapelige og tekniske påstander", "Den krever at man kjenner hele virkeligheten før noe kan kalles sant"],
      explanation: "Den pragmatiske teorien sier en påstand er sann hvis den fungerer, men noe kan virke uten å være sant – som placeboeffekten.",
    },
    {
      question: "Hvorfor bruker vi i praksis ofte flere sannhetsteorier samtidig?",
      options: ["Ingen enkelt teori dekker alle typer påstander like godt", "Fordi de alle er like gale, og ingen av dem holder mål ved prøving", "Fordi den samme påstanden alltid er sann og usann på én gang", "Fordi alle teoriene motsier hverandre og gjør sannhet umulig å nå"],
      explanation: "Hver teori har styrker og svakheter, så i praksis kombinerer vi dem avhengig av hvilken type påstand vi vurderer.",
    },
  ],
  "fil-8-1": [
    {
      question: "Hva handler demarkasjonsproblemet om?",
      options: ["Å skille mellom vitenskap og pseudovitenskap", "Å skille mellom etikkens spørsmål og estetikkens spørsmål", "Å skille mellom sanne og falske påstander innenfor logikk", "Å fastsette hvilke land som har rett til bestemte territorier"],
      explanation: "Demarkasjonsproblematikken handler om hva som skiller vitenskap (f.eks. astronomi) fra pseudovitenskap (f.eks. astrologi).",
    },
    {
      question: "Hva innebærer falsifiserbarhet som kriterium for vitenskap?",
      options: ["At en teori i prinsippet må kunne motbevises", "At en teori må kunne bevises endelig og en gang for alle", "At en teori må ha vist seg holdbar gjennom lang tid", "At en teori må være akseptert av flertallet av forskere"],
      explanation: "Falsifiserbarhet (fra Popper) betyr at en vitenskapelig teori må kunne testes og i prinsippet motbevises.",
    },
    {
      question: "Hva er repeterbarhet som vitenskapelig kriterium?",
      options: ["At resultater må kunne gjentas av andre forskere", "At bare én forsker kontrollerer resultatene", "At en vitenskapelig teori aldri skal endres etter publisering", "At forsøket bare skal gjøres én gang for å unngå tilfeldigheter"],
      explanation: "Repeterbarhet betyr at andre forskere skal kunne gjenta forsøket og få samme resultat.",
    },
    {
      question: "Hva er vitenskapsfilosofiens rolle?",
      options: ["Den er en bro mellom filosofi og vitenskap som undersøker vitenskapens metoder og grenser", "Den erstatter empiriske eksperimenter med rene tankeeksperimenter og logikk", "Den utfører selv laboratorieforsøk for å teste vitenskapelige hypoteser", "Den avviser vitenskapelig kunnskap til fordel for religiøs åpenbaring"],
      explanation: "Vitenskapsfilosofi reflekterer over hva som gjør vitenskap til vitenskap, og hvordan kunnskap oppstår og valideres.",
    },
    {
      question: "Hvorfor regnes astrologi ofte som pseudovitenskap?",
      options: ["Den oppfyller ikke kriterier som falsifiserbarhet og etterprøvbarhet", "Den er så grundig dokumentert at den ikke lenger regnes som teori", "Den bygger på så avansert matematikk at ingen kan etterprøve den", "Den er en altfor ny disiplin til å ha rukket å bli anerkjent"],
      explanation: "Astrologi mangler falsifiserbarhet og etterprøvbarhet, og regnes derfor som pseudovitenskap til forskjell fra astronomi.",
    },
  ],
  "fil-8-2": [
    {
      question: "Hva er kropp-sinn-problemet?",
      options: ["Spørsmålet om forholdet mellom det mentale og det fysiske", "Et spørsmål om kosthold og hvordan maten påvirker kroppens vekt", "Spørsmålet om hvilket kosthold som gir best mental yteevne", "Spørsmålet om hvordan man best trener både kropp og hukommelse"],
      explanation: "Kropp-sinn-problemet handler om forholdet mellom det mentale (tanker, følelser) og det fysiske (hjerne, nevroner).",
    },
    {
      question: "Hva hevder Descartes' dualisme?",
      options: ["Kropp og sinn er to forskjellige substanser", "At sinnet ikke finnes i det hele tatt, bare det vi kan observere utenfra", "At alt som eksisterer i bunn og grunn er av materiell natur", "At alt som eksisterer egentlig er av mental og åndelig natur"],
      explanation: "Descartes' dualisme hevder at kroppen er materiell og sinnet immaterielt – to ulike substanser.",
    },
    {
      question: "Hva er hovedutfordringen for Descartes' dualisme?",
      options: ["Hvordan det immaterielle sinnet kan påvirke den materielle kroppen", "At den benekter at kroppen i det hele tatt finnes som substans", "At teorien er så enkel at den ikke forklarer noe som helst", "At absolutt alle filosofer er enige om at den er korrekt"],
      explanation: "Interaksjonsproblemet: hvordan kan et immaterielt sinn påvirke en materiell kropp, og omvendt?",
    },
    {
      question: "Hva hevder materialismen (fysikalismen)?",
      options: ["Alt som eksisterer er fysisk; mentale tilstander er hjernetilstander", "At bare mentale tilstander finnes, mens materien er en illusjon", "At hjernen ikke egentlig eksisterer, kun bevisstheten gjør det", "At sinnet er en egen immateriell substans atskilt fra kroppen"],
      explanation: "Materialisme hevder at alt er fysisk, og at mentale tilstander er identiske med hjernetilstander.",
    },
    {
      question: "Hva er en utfordring for materialismen?",
      options: ["Å forklare subjektive opplevelser (hvordan det føles)", "Å bevise at fysiske ting finnes", "Å bevise at fysiske gjenstander finnes utenfor vår bevissthet", "Å måle den nøyaktige plasseringen av hver enkelt nevron i hjernen"],
      explanation: "Materialismen sliter med å forklare den subjektive opplevelsen – hvordan det føles å oppleve f.eks. rød farge.",
    },
  ],
  "fil-8-3": [
    {
      question: "Hva undersøker språkfilosofi?",
      options: ["Forholdet mellom språk og virkelighet, og hva mening er", "Hvordan datamaskiner lagrer tekst og gjør den søkbar i store databaser", "Hvordan man mest effektivt lærer seg å beherske fremmedspråk", "Hvordan datamaskiner lagrer og behandler tekst som binærkode"],
      explanation: "Språkfilosofi utforsker hvordan språk fungerer, hva mening er, og hvordan språk former vår forståelse av verden.",
    },
    {
      question: "Hva mente tidlige Wittgenstein om språkets formål i Tractatus?",
      options: ["Språket avbilder virkeligheten; setninger er bilder av fakta", "At mening bare avhenger av hvordan ordene faktisk brukes av folk", "At språket i seg selv er meningsløst og ikke sier noe sant", "At språk grunnleggende sett bare er lyder uten forbindelse til fakta"],
      explanation: "I Tractatus (1921) mente Wittgenstein at språkets formål er å avbilde virkeligheten, og setninger er bilder av fakta.",
    },
    {
      question: "Hva er sen Wittgensteins begrep om mening?",
      options: ["Mening avhenger av bruk – språk er et «språkspill»", "At mening er fast og uforanderlig, uavhengig av hvordan ordene brukes", "At mening egentlig ikke finnes, siden ord bare avbilder ren fakta", "At mening er fast, uforanderlig og bestemt av tingenes indre vesen"],
      explanation: "I Philosophical Investigations (1953) mente Wittgenstein at mening avhenger av hvordan ord brukes – språk er en form for handling, et språkspill.",
    },
    {
      question: "Hva er Wittgensteins berømte konklusjon i Tractatus om grensene for språket?",
      options: ["«Det man ikke kan snakke om, må man tie om»", "«Eksistensen går forut for essensen»", "«Eksistensen går alltid forut for menneskets essens»", "«Gud er død, og vi har alle drept ham med vår fornuft»"],
      explanation: "Tractatus avsluttes med at det som kan sies kan sies klart, og det man ikke kan snakke om, må man tie om.",
    },
    {
      question: "Hvorfor mente noen filosofer at filosofiske problemer skyldes språk?",
      options: ["De oppstår når vi misbruker eller misforstår språket", "Fordi ord aldri har mening, men bare er lyder vi gjentar etter hverandre", "Fordi språk grunnleggende sett er unødvendig for klar tenkning", "Fordi ordene vi bruker aldri kan bære noen fast og stabil mening"],
      explanation: "Flere filosofer, særlig Wittgenstein, mente at mange filosofiske problemer oppstår ved misbruk eller misforståelse av språket.",
    },
  ],
  "fil-8-4": [
    {
      question: "Hvem utviklet teorien om kommunikativ handling og deliberativt demokrati?",
      options: ["Jürgen Habermas", "Karl Popper", "Ludwig Wittgenstein", "René Descartes"],
      explanation: "Jürgen Habermas er kjent for teorien om kommunikativ handling og deliberativt demokrati.",
    },
    {
      question: "Hva er kommunikativ rasjonalitet ifølge Habermas?",
      options: ["At rasjonalitet ligger i dialog der vi kan nå felles forståelse", "At dialog er overflødig fordi fornuften virker best i ensomhet", "At all ekte rasjonalitet bare kan finnes innenfor matematisk logikk", "At det er makten hos den sterkeste som til slutt avgjør hva som er sant"],
      explanation: "Habermas mente at rasjonalitet ikke bare ligger i logikk, men i dialog der man gjennom samtale kan nå frem til felles forståelse.",
    },
    {
      question: "Hva kjennetegner deliberativt demokrati hos Habermas?",
      options: ["Beslutninger bør bygge på offentlig debatt og refleksjon, ikke bare flertallsstyre", "At politiske beslutninger avgjøres gjennom tilfeldig loddtrekning blant borgerne", "At kun flertallets stemmetall teller, helt uavhengig av forutgående debatt", "At en gruppe fageksperter fatter alle beslutninger på vegne av folket"],
      explanation: "Deliberativt demokrati vektlegger at legitime beslutninger bygger på offentlig debatt og refleksjon, ikke bare avstemninger.",
    },
    {
      question: "Hva er «idealtalesituasjonen» hos Habermas?",
      options: ["En samtale uten tvang der alle har lik rett til å snakke", "En debatt der den sterkeste vinner", "En debatt der den med best retoriske evner alltid vinner frem", "En veltalende og perfekt fremført tale holdt av én sterk leder"],
      explanation: "Idealtalesituasjonen er en herredømmefri samtale der alle deltakere har lik rett til å delta og argumentere.",
    },
    {
      question: "Hva viser moderne samfunnsfilosofi ifølge kapittelet?",
      options: ["At filosofi har konkrete konsekvenser for hvordan vi organiserer samfunnet", "At filosofi er en rent abstrakt øvelse uten betydning for virkeligheten", "At samfunnets grunnleggende strukturer aldri lar seg endre av mennesker", "At demokrati som styreform er en umulig og selvmotsigende idé"],
      explanation: "Samfunnsfilosofi viser at filosofiske ideer påvirker sosiale strukturer, institusjoner og vår forståelse av rettferdighet.",
    },
  ],
  "fil-8-5": [
    {
      question: "Hva er et filosofisk essay?",
      options: ["En måte å utforske egne tanker, teste argumenter og utvikle en selvstendig posisjon", "En fortellende tekst uten argumenter, der man forteller en historie", "En systematisk oppramsing av hva andre filosofer allerede har ment", "En ryddig punktvis liste over etablerte fakta og definisjoner"],
      explanation: "Et filosofisk essay handler om å tenke selv – utforske egne tanker, teste argumenter og innta en selvstendig posisjon.",
    },
    {
      question: "Hva bør innledningen i et filosofisk essay inneholde?",
      options: ["Problemstilling og en klar tese", "Hele argumentet i detalj", "En underholdende vits", "Bare konklusjonen"],
      explanation: "Innledningen presenterer problemstillingen, forklarer hvorfor den er viktig, og angir din tese.",
    },
    {
      question: "Hvorfor bør et godt filosofisk essay presentere motargumenter (innvendinger)?",
      options: ["For å vise at man har vurdert alternative syn og kan svare på dem", "For å forvirre leseren slik at svakhetene i teksten skjules", "For å gjøre essayet lengre og fylle opp det påkrevde antallet ord", "For å slippe å ta klart stilling til den vanskelige problemstillingen"],
      explanation: "Å presentere innvendinger og svare på dem styrker argumentasjonen og viser intellektuell redelighet.",
    },
    {
      question: "Hva er rekkefølgen i hoveddelen av et godt filosofisk essay?",
      options: ["Redegjørelse, argumentasjon, innvendinger og tilsvar", "Konklusjon før innledning", "En helt fri og tilfeldig rekkefølge uten noen logisk oppbygning", "Konklusjonen først, så innledningen, så drøftingen"],
      explanation: "Hoveddelen redegjør for relevante posisjoner, argumenterer for egen tese, presenterer innvendinger og gir tilsvar.",
    },
    {
      question: "Hva er kjernen i å skrive filosofi ifølge kapittelet?",
      options: ["Å tenke selv, ikke bare gjengi hva andre har tenkt", "Å pugge så mange navn som mulig", "Å pugge så mange filosofnavn og årstall som overhodet mulig", "Å skrive lengst mulig tekst for å dekke flest mulige posisjoner"],
      explanation: "Filosofi er å tenke selv – teste argumenter og utvikle en selvstendig posisjon, ikke bare gjengi andres tanker.",
    },
  ],
};

export default quizData_filosofi_etikk;
