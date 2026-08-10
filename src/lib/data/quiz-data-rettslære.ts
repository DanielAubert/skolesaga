import type { QuizQuestion } from './quiz-data';

const quizData_rettslaere: Record<string, QuizQuestion[]> = {
  "rettslære-1-1": [
    {
      question: "Hva er maktfordelingsprinsippet?",
      options: ["At makten er delt mellom lovgivende, utøvende og dømmende myndighet","At Stortinget både vedtar lovene og selv dømmer i enkeltsakene etter dem","At domstolene både vedtar nye lover og fører dem ut i praktisk forvaltning av samfunnet","At folket ved direkte folkeavstemning avgjør alle enkeltsaker uten et folkevalgt Storting"],
      explanation: "Maktfordelingsprinsippet sikrer at ingen har all makt. Stortinget lager lover (lovgivende), regjeringen utfører dem (utøvende), og domstolene dømmer (dømmende).",
    },
    {
      question: "Hvilken domstol er Norges øverste?",
      options: ["Høyesterett", "Lagmannsretten", "Tingretten", "Forliksrådet"],
      explanation: "Høyesterett er landets øverste domstol og behandler de mest prinsipielle sakene. Den har 20 dømmere.",
    },
    {
      question: "Hva betyr det å anke en dom?",
      options: ["Å bringe saken til høyere rettsinstans for ny behandling", "Å trekke tilbake saken", "Å godta dommen som endelig og frivillig oppfylle det domstolen har bestemt i saken", "Å levere en helt ny og selvstendig anmeldelse i en annen sak til påtalemyndigheten"],
      explanation: "Anke betyr å be en høyere domstol behandle saken på nytt fordi man mener den første dømmen er feil.",
    },
    {
      question: "Hva er forskjellen mellom straffesaker og sivile saker?",
      options: ["I straffesaker er det staten mot enkeltperson, i sivile saker er det tvist mellom parter", "Sivile saker behandles bare i Høyesterett", "Sivile saker kan bare behandles direkte i Høyesterett, mens straffesaker starter i tingretten", "Det er ingen reell forskjell, ettersom begge sakstyper alltid føres av staten mot en privatperson"],
      explanation: "I straffesaker fører påtalemyndigheten saken mot den tiltalte. I sivile saker er det en tvist mellom to parter om hvem som har rett.",
    },
    {
      question: "Hva kjennetegner en rettsstat?",
      options: ["Offentlig myndighet er bundet av demokratisk vedtatte lover", "Dommere kan bestemme fritt", "At samfunnet styres uten skrevne lover, kun gjennom sedvane og skiftende politiske vedtak", "At dommerne står fritt til å avgjøre saker ut fra egen rettsfølelse uten binding til loven"],
      explanation: "I en rettsstat er alle, inkludert myndighetene, bundet av loven. Borgerne har beskyttelse mot vilkårlig maktbruk.",
    },
  ],
  "rettslære-1-2": [
    {
      question: "Hvilken rettskilde har høyest rang i Norge?",
      options: ["Grunnloven", "Vanlige lover", "Forskrifter", "Rettspråksis"],
      explanation: "Grunnloven er Norges høyeste lov. Alle andre lover må være i samsvar med Grunnloven.",
    },
    {
      question: "Hva er forarbeider?",
      options: ["Dokumenter laget under utarbeidelsen av en lov","Juridiske lærebøker og artikler skrevet av rettsvitere","Eldre rettsavgjørelser fra domstolene som skaper bindende prejudikat for senere saker","Arbeidskontrakter og andre avtaler mellom private parter"],
      explanation: "Forarbeider inkluderer NOU-er, proposisjoner og innstillinger som forklærer lovens formål og hvordan den skal forstås.",
    },
    {
      question: "Hvor starter man vanligvis ved lovtolkning?",
      options: ["Med ordlyden i loven","Med dømmer fra Høyesterett","Med juridisk teori i lærebøker","Med forskriftene til loven"],
      explanation: "Lovtolkning starter alltid med ordlyden - den naturlige språklige forståelsen av lovens tekst.",
    },
    {
      question: "Hva er forskjellen mellom lover og forskrifter?",
      options: ["Lover vedtas av Stortinget, forskrifter gis av regjeringen med hjemmel i lov","Forskrifter vedtas av Stortinget, mens lover gis av regjeringen uten hjemmelskrav","Forskrifter har høyere rang enn lover og går foran ved motstrid mellom regelsettene","Lover gjelder bare innenfor Oslos grenser, mens forskrifter gjelder for hele landet"],
      explanation: "Lover vedtas av Stortinget og gir hovedreglene. Forskrifter gis av regjeringen og utfyller lovene med detaljerte regler.",
    },
    {
      question: "Hva betyr teleologisk lovtolkning?",
      options: ["Å tolke loven i lys av dens formål","Å se på hva domstolene har sagt","Å tolke ordlyden helt bokstavelig","Å tolke loven bokstavelig"],
      explanation: "Teleologisk (formålsrettet) tolkning betyr å tolke loven i lys av hva lovgiver ønsket å oppnå med bestemmelsen.",
    },
  ],
  "rettslære-1-3": [
    {
      question: "Hva er EMK?",
      options: ["Den europeiske menneskerettskonvensjon", "En FN-organisasjon", "En underorganisasjon i FN som overvåker menneskerettighetene i hele verden", "En EU-traktat"],
      explanation: "EMK er Den europeiske menneskerettskonvensjon fra 1950, som beskytter grunnleggende rettigheter i Europa.",
    },
    {
      question: "Hva skjer ved motstrid mellom EMK og norsk lov?",
      options: ["EMK går foran", "Norsk lov går foran", "De gjelder likt", "Stortinget avgjør"],
      explanation: "Menneskerettsloven sier at EMK skal gå foran ved motstrid med annen norsk lovgivning.",
    },
    {
      question: "Hvor kan norske borgere klage ved brudd på menneskerettighetene?",
      options: ["Den europeiske menneskerettsdomstolen (EMD)","Regjeringen ved departementet","Kommunen der borgeren bor","Stortinget som lovgiver"],
      explanation: "EMD i Strasbourg kan behandle klager mot Norge etter at nasjonale rettsmidler er uttømt.",
    },
    {
      question: "Hvilke rettigheter er absolutte og kan aldri begrenses?",
      options: ["Forbud mot tortur", "Ytringsfrihet", "Forsamlingsfrihet", "Eiendomsretten"],
      explanation: "Forbudet mot tortur er absolutt og kan aldri fravikes, uansett omstendigheter.",
    },
    {
      question: "Hva kreves for at inngrep i menneskerettigheter skal være lovlige?",
      options: ["Lovhjemmel, legitimt formål og nødvendighet i et demokratisk samfunn","At inngrepet er vedtatt av kommunestyret i den kommunen der personen bor","At Den europeiske menneskerettsdomstolen på forhånd har gitt sin skriftlige godkjenning","Kun at myndighetene selv ønsker inngrepet ut fra en løpende vurdering av samfunnets behov"],
      explanation: "Inngrep må være fastsatt i lov, forfølge et legitimt formål og være nødvendige og proporsjonale.",
    },
  ],
  "rettslære-1-4": [
    {
      question: "Hva kreves for at en avtale skal være inngått?",
      options: ["Tilbud og aksept", "Skriftlig kontrakt", "Notarius publicus", "Minst tre parter"],
      explanation: "Avtale inngås normalt ved at et tilbud aksepteres. Muntlige avtaler er like bindende som skriftlige.",
    },
    {
      question: "Hva sier avtaleloven § 36?",
      options: ["Urimelige avtaler kan settes til side","Mindreårige kan inngå alle avtaler","At enhver avtale må inngås skriftlig","Alle avtaler må være skriftlige"],
      explanation: "Avtaleloven § 36 er en generalklausul som sier at en avtale kan settes til side hvis den vil virke urimelig.",
    },
    {
      question: "Fra hvilken alder kan man inngå bindende avtaler uten samtykke?",
      options: ["18 år", "15 år", "16 år", "21 år"],
      explanation: "Myndighetsalderen i Norge er 18 år. Då blir man juridisk myndig og kan inngå alle typer avtaler.",
    },
    {
      question: "Hva skjer hvis en aksept inneholder endringer?",
      options: ["Det regnes som et nytt tilbud (modifisert aksept)","Begge parter blir bundet","Avtalen anses inngått på tilbudets vilkår","Avtalen blir ugyldig"],
      explanation: "En aksept med endringer kalles modifisert aksept og regnes som et nytt tilbud som den opprinnelige tilbyderen kan velge å akseptere.",
    },
    {
      question: "Hva er fullmakt?",
      options: ["Retten til å handle på vegne av en annen", "En skriftlig avtale", "Et sentralt bevis som legges frem for retten for å underbygge en parts påstand", "Et bevis i rettssak"],
      explanation: "Fullmakt gir en person rett til å binde en annen juridisk, innenfor fullmaktens grenser.",
    },
  ],
  "rettslære-1-5": [
    {
      question: "Hvor lang er den absolutte reklamasjonsfristen for vanlige varer?",
      options: ["2 år", "1 år", "5 år", "10 år"],
      explanation: "Hovedregelen er 2 års absolutt reklamasjonsfrist. For ting med vesentlig lengre levetid er fristen 5 år.",
    },
    {
      question: "Når kan et kjøp heves?",
      options: ["Ved vesentlig mangel", "Ved enhver mangel", "Kun ved farlige produkter", "Aldri"],
      explanation: "Heving krever at mangelen er vesentlig. Ved mindre mangler har du rett til retting, omlevering eller prisavslag.",
    },
    {
      question: "Hva er angrerett?",
      options: ["Retten til å gå fra et kjøp uten begrunnelse ved fjernsalg", "Retten til å angre på kriminelle handlinger", "Retten til å klage på og få rettet en vare som har en mangel etter kjøpet", "Retten til å bytte en feilfri vare i vanlig butikk fordi man har ombestemt seg"],
      explanation: "Angrerett gjelder ved fjernsalg (netthandel, telefonsalg) i 14 dager. Den gjelder ikke ved vanlig butikkhandel.",
    },
    {
      question: "Hva menes med relativ reklamasjonsfrist?",
      options: ["Man må reklamere innen rimelig tid etter at mangelen oppdages", "Fristen avhenger av hvor man bor", "At fristen varierer avhengig av hvilken kommune eller landsdel kjøperen er bosatt i", "At lengden på reklamasjonsfristen står i forhold til hvor mye varen kostet ved kjøpet"],
      explanation: "Relativ frist betyr at du må si fra innen rimelig tid etter at du oppdaget mangelen, normalt innen 2 måneder.",
    },
    {
      question: "Hva er forskjellen mellom retting og omlevering?",
      options: ["Retting er reparasjon, omlevering er ny vare","Omlevering krever at varen er farlig","Det er to ord for nøyaktig det samme","Retting gjelder bare elektronikk"],
      explanation: "Retting betyr at selger reparerer den defekte varen. Omlevering betyr at forbrukeren får en ny, tilsvarende vare.",
    },
  ],
  "rettslære-1-6": [
    {
      question: "Hva er culpa?",
      options: ["Uaktsomhet eller skyld","Årsakssammenheng mellom handling og skade","Bevisst vilje til å volde skade","Økonomisk tap hos skadelidte"],
      explanation: "Culpa betyr uaktsomhet eller skyld. Culpaansvåret er hovedregelen for erstatning.",
    },
    {
      question: "Hva er de tre vilkårene for erstatning?",
      options: ["Ansvarsgrunnlag, økonomisk tap og årsakssammenheng","Forsett, uaktsomhet og nødverge","Vilje til å handle, en handling og et resultat","Skyld, dom og betaling"],
      explanation: "For å få erstatning må alle tre vilkårene være oppfylt: ansvarsgrunnlag, økonomisk tap og årsakssammenheng.",
    },
    {
      question: "Hva er objektivt ansvar?",
      options: ["Ansvar uten krav om skyld","Ansvar med krav om forsett","Ansvar for brudd på en kontrakt","Ansvar for andres handlinger"],
      explanation: "Objektivt ansvar betyr at man er ansvårlig uavhengig av skyld. Det gjelder for særlig farlig virksomhet.",
    },
    {
      question: "Hva menes med påregnelighet i erstatningsretten?",
      options: ["At skaden var en forutsigbar følge av handlingen", "At skadelidte kunne forsikre seg", "At skadelidte på forhånd hadde mulighet til å tegne forsikring mot den aktuelle skaden", "At skaden skjedde umiddelbart"],
      explanation: "Påregnelighet betyr at skaden var en forutsigbar følge. Man erstatter ikke helt upåregnelige følger.",
    },
    {
      question: "Hva innebærer arbeidsgiveransvåret?",
      options: ["Arbeidsgiver er ansvårlig for skade ansatte volder i tjenesten", "Arbeidstaker er alltid ansvårlig selv", "At kun staten som arbeidsgiver hefter for slik skade, mens private virksomheter går fri", "Bare staten har arbeidsgiveransvar"],
      explanation: "Arbeidsgiver er ansvårlig for skade som ansatte volder i tjenesten, selv uten egen skyld.",
    },
  ],
  "rettslære-1-7": [
    {
      question: "Hva er kriminell lavalder i Norge?",
      options: ["15 år", "18 år", "16 år", "14 år"],
      explanation: "Kriminell lavalder er 15 år. Under dette kan man ikke straffes, men barnevernet kan gripe inn.",
    },
    {
      question: "Hva er hovedregelen for skyldkrav i strafferetten?",
      options: ["Forsett kreves for straff","Uaktsomhet er alltid nok til straff","At skyld ikke er nødvendig, ettersom selve handlingen er nok","Bare handlingens følge avgjør straffen"],
      explanation: "Hovedregelen er at forsett kreves for straff. Uaktsomhet er bare nok når loven uttrykkelig sier det.",
    },
    {
      question: "Hva er nødverge?",
      options: ["Retten til å forsvare seg mot ulovlige angrep", "Rett til å bryte loven ved fare", "Den lovpålagte militære verneplikten som gjelder for norske borgere i en gitt aldersgruppe", "Plikt til å hjelpe andre"],
      explanation: "Nødverge gir rett til å avverge et ulovlig angrep på seg selv eller andre. Forsvåret må være nødvendig og forholdsmessig.",
    },
    {
      question: "Hva betyr legalitetsprinsippet?",
      options: ["Ingen straff uten lov", "Alle lover er like viktige", "Domstolene kan lage lover", "Straff kan ha tilbakevirkende kraft"],
      explanation: "Legalitetsprinsippet betyr at staten bare kan straffe handlinger som var forbudt i lov da de ble begått.",
    },
    {
      question: "Hva er forskjellen mellom forsett og uaktsomhet?",
      options: ["Forsett er vilje eller bevissthet, uaktsomhet er uforsiktighet", "Uaktsomhet gir strengere straff", "Det er ingen reell forskjell, ettersom begge betegner samme grad av skyld i strafferetten", "Uaktsomhet straffes gjennomgående strengere enn forsett fordi handlingen er mer utilgivelig"],
      explanation: "Forsett betyr at man visste eller holdt det for sannsynlig. Uaktsomhet betyr at man burde ha forstått.",
    },
  ],
  "rettslære-1-8": [
    {
      question: "Hvor mange feriedager har man krav på i Norge?",
      options: ["25 virkedager (5 uker)","28 virkedager (om lag seks uker)","21 virkedager (om lag fire uker)","30 virkedager (seks uker)"],
      explanation: "Ferieloven gir rett til 25 virkedager (ca. 5 uker) ferie. De over 60 år har én uke ekstra.",
    },
    {
      question: "Hva kreves for at arbeidsgiver skal kunne si opp en ansatt?",
      options: ["Saklig grunn i virksomhetens eller arbeidstakers forhold", "Bare økonomiske problemer", "Det kreves forhåndsgodkjenning fra NAV før arbeidsgiver lovlig kan gå til oppsigelse av en ansatt", "Ingen begrunnelse trengs"],
      explanation: "Oppsigelse må ha saklig grunn. Det må også gjennomføres drøftingsmøte før oppsigelse.",
    },
    {
      question: "Hva er forskjellen mellom oppsigelse og avskjed?",
      options: ["Ved avskjed opphører arbeidsforholdet umiddelbart","Avskjed gir rett til feriepenger","Det er ingen rettslig forskjell mellom de to","Avskjed krever ett års varsel"],
      explanation: "Ved oppsigelse jobber man ut oppsigelsestiden. Ved avskjed må man gå på dagen, og det krever grovt pliktbrudd.",
    },
    {
      question: "Hva er maksimal daglig arbeidstid etter loven?",
      options: ["9 timer", "8 timer", "10 timer", "7,5 timer"],
      explanation: "Alminnelig arbeidstid er maks 9 timer pr. dag og 40 timer pr. uke etter arbeidsmiljøloven.",
    },
    {
      question: "Når må en skriftlig arbeidsavtale være på plass?",
      options: ["Senest én måned etter arbeidsstart", "Før arbeidet starter", "Avtalen må være på plass innen ett år regnet fra den dagen arbeidsforholdet begynte", "Det er ikke påkrevd"],
      explanation: "Arbeidsmiljøloven krever skriftlig arbeidsavtale senest én måned etter at arbeidsforholdet startet.",
    },
  ],
  "rettslære-1-9": [
    {
      question: "Hva er hovedregelen for formuesordning i ekteskap?",
      options: ["Felleseie", "Særeie", "Sameie", "Delt økonomi"],
      explanation: "Felleseie er hovedregelen. Det betyr at formuen deles likt ved skilsmisse. Særeie må avtales i ektepakt.",
    },
    {
      question: "Hva er pliktdelsarv?",
      options: ["Den delen av arven som må gå til livsarvinger (barn)", "Arv som kan testamenteres bort", "Den delen av arven som ved lov automatisk tilfaller staten når det ikke finnes livsarvinger", "Arv til ektefellen"],
      explanation: "Pliktdelsarv er 2/3 av arven til livsarvinger, begrenset oppad til 15 G per barn. Den kan ikke testamenteres bort.",
    },
    {
      question: "Hvor mye arver ektefellen minimum når det er barn?",
      options: ["1/4 av arven", "Halvparten", "Halvparten av arven", "Ingenting"],
      explanation: "Ektefellen har krav på minimum 1/4 av arven når det er livsarvinger (barn).",
    },
    {
      question: "Hva kreves for å opprette et gyldig testament?",
      options: ["Skriftlig med to vitner","Bare en muntlig erklæring for to vitner","Det gjelder ingen særskilte formkrav","Bekreftelse hos notarius publicus"],
      explanation: "Testament må være skriftlig og undertegnet med to vitner til stede. Vitnene kan ikke være arvinger.",
    },
    {
      question: "Har samboere automatisk arverett etter hverandre?",
      options: ["Nei, det må sikres gjennom testament", "Ja, hvis de har felles barn", "Ja, men bare når de har eller venter felles barn sammen", "Ja, de har full arverett"],
      explanation: "Samboere har ikke automatisk arverett. Arverett kan sikres gjennom testament, men samboere betaler mer i arveavgift.",
    },
  ],
  "rettslære-1-10": [
    {
      question: "Hva er forliksrådet?",
      options: ["Laveste rettsinstans for sivile tvister","Et rådgivende utvalg i kommunen","En privat meklingstjeneste med gebyr","En egen avdeling i politiet"],
      explanation: "Forliksrådet er den laveste rettsinstansen for sivile tvister og behandler mange saker før de kan gå til tingretten.",
    },
    {
      question: "Hva er beviskravet i straffesaker?",
      options: ["Utover enhver rimelig tvil","Overvekt av tekniske bevis i saken","Alminnelig sannsynlighetsovervekt for at tiltalte er skyldig","75 % sannsynlighet for skyld"],
      explanation: "I straffesaker må påtalemyndigheten bevise skyld utover enhver rimelig tvil. I sivile saker er det nok med sannsynlighetsovervekt.",
    },
    {
      question: "Hvem har bevisbyrden i straffesaker?",
      options: ["Påtalemyndigheten", "Tiltalte", "Tiltalte, som selv må bevise sin uskyld for retten", "Dommeren"],
      explanation: "Påtalemyndigheten må bevise at tiltalte er skyldig. Tiltalte behøver ikke bevise sin uskyld (uskyldspresumsjonen).",
    },
    {
      question: "Hva er forskjellen mellom mekling og voldgift?",
      options: ["Meklæren avgjør ikke tvisten, voldgiftsretten avgjør bindende","Mekling er bare tillatt i familiesaker mellom foreldre med felles barn","Det er ingen reell forskjell; begge avgjør tvisten bindende for partene","Voldgift er alltid gratis, mens mekling koster partene et betydelig gebyr"],
      explanation: "Ved mekling hjelper meklæren partene å finne løsning selv. Ved voldgift avgjør en privat voldgiftsrett tvisten bindende.",
    },
    {
      question: "Hva er fri rettshjelp?",
      options: ["Gratis juridisk bistand fra staten for personer med lav inntekt", "Frivillig hjelp fra advokater", "Juridisk bistand som bare gis til personer som soner en fengselsstraff", "Frivillig og ubetalt hjelp som advokater tilbyr på dugnad i visse saker"],
      explanation: "Fri rettshjelp er gratis juridisk bistand for personer med lav inntekt i visse sakstyper.",
    },
  ],
  "rettslære-2-1": [
    {
      question: "Hvilken skyldgrad kreves normalt for at en handling skal være straffbar?",
      options: ["Forsett, med mindre loven fastsetter at uaktsomhet er tilstrekkelig","Grov uaktsomhet, altså et markert avvik fra forsvarlig handlemåte i situasjonen","Hensiktsforsett, altså at gjerningspersonen direkte tilsiktet følgen","Simpel uaktsomhet, altså at man har opptrådt uforsiktig på vanlig vis"],
      explanation: "Hovedregelen er at det kreves forsett for straffansvar. Uaktsomhet er bare tilstrekkelig når loven uttrykkelig sier det.",
    },
    {
      question: "Hva er medvirkning til straffbar handling?",
      options: ["Å bidra fysisk eller psykisk til at en annen begår et lovbrudd", "Å vite om lovbruddet uten å melde det", "Å være passivt til stede på åstedet mens en annen begår lovbruddet", "Å motta eller kjøpe utbytte som stammer fra et lovbrudd i ettertid"],
      explanation: "Medvirkning kan være fysisk (holde vakt, skaffe verktøy) eller psykisk (planlegge, oppfordre). Begge er straffbare.",
    },
    {
      question: "Hva er straffri tilbaketreden?",
      options: ["Når man frivillig avstår fra å fullbyrde et forsøk på lovbrudd", "Når man angrer etter at lovbruddet er begått", "Når man frivillig melder seg selv til politiet like etter lovbruddet", "Når sentrale vitner i saken trekker forklaringene sine før rettssaken"],
      explanation: "Selv om forsøksgrensen er passert, kan man gå straffri dersom man frivillig avstår fra å fullføre lovbruddet.",
    },
    {
      question: "Hvilken straffrihetsgrunn føreligger når man forsvarer seg mot et ulovlig angrep?",
      options: ["Nødverge", "Nødrett", "Samtykke", "Selvtekt"],
      explanation: "Nødverge gir rett til å avverge et ulovlig angrep med nødvendig og forholdsmessig forsvar.",
    },
    {
      question: "Hva er en skjerpende omstendighet ved straffeutmåling?",
      options: ["At lovbruddet er begått mot en forsvarsløs person","At gjerningspersonen har avgitt tilståelse","At det har gått svært lang tid siden lovbruddet","At gjerningspersonen var under 18 år"],
      explanation: "Skjerpende omstendigheter inkluderer lovbrudd mot forsvarsløse, organisert kriminalitet og hatmotiv.",
    },
  ],
  "rettslære-2-2": [
    {
      question: "Hva er den første fasen i den klassiske hvitvaskingsprosessen?",
      options: ["Plassering","Tilsløring av sporene","Integrering","Konvertering"],
      explanation: "Plassering er den første fasen, der de kriminelle midlene føres inn i det finansielle systemet.",
    },
    {
      question: "Hva er korrupsjon?",
      options: ["Å gi eller motta utilbørlige fordeler i anledning stilling", "Å bryte konkurransereglene gjennom ulovlig prissamarbeid", "Å unndra skatt ved å skjule inntekter for skattemyndighetene", "Å gi bevisst uriktige opplysninger til offentlige myndigheter"],
      explanation: "Korrupsjon innebærer bestikkelser - å gi eller motta utilbørlige fordeler i forbindelse med stilling eller verv.",
    },
    {
      question: "Hvilken form for økonomisk kriminalitet innebærer å fremkalle villfarelse for å oppnå vinning?",
      options: ["Bedrageri", "Hvitvasking", "Underslag", "Innsidehandel"],
      explanation: "Bedrageri er å fremkalle, styrke eller utnytte en villfarelse for å få noen til å gjøre noe som volder tap.",
    },
    {
      question: "Hva kjennetegner økonomisk kriminalitet?",
      options: ["Den begås ofte av personer i betrodde stillinger og involverer komplekse transaksjoner", "Den forekommer bare i store bedrifter og aldri hos privatpersoner eller små foretak", "Den innebærer alltid bruk av vold eller trusler mot ofrene som rammes", "Den er som regel enkel å oppdage fordi sporene er tydelige og synlige"],
      explanation: "Økonomisk kriminalitet skiller seg ved at den ofte begås av personer i tillitsposisjoner og involverer kompleksitet.",
    },
    {
      question: "Hva er skattesvik?",
      options: ["Å gi uriktige opplysninger til skattemyndighetene for å unndra skatt", "Å betale inn for mye skatt slik at man senere får penger tilbake", "Å bytte revisor uten å informere skattemyndighetene om endringen", "Å klage på skatteoppgjøret fordi man mener det er beregnet feil"],
      explanation: "Skattesvik innebærer å gi uriktige eller ufullstendige opplysninger for å unndra skatt eller avgift.",
    },
  ],
  "rettslære-2-3": [
    {
      question: "Hva er virkningen av menneskerettsloven § 3 ved motstrid mellom EMK og norsk lov?",
      options: ["EMK går foran", "Norsk lov går foran", "Den nyeste loven går foran", "Saken må avvises"],
      explanation: "Menneskerettsloven § 3 fastslår at konvensjonene skal gå foran annen norsk lovgivning ved motstrid.",
    },
    {
      question: "Hvilken domstol kan individer klage til ved brudd på EMK?",
      options: ["Den europeiske menneskerettsdomstolen (EMD)", "Den internasjonale straffedomstol (ICC)", "EU-domstolen i Luxembourg som tolker EU-retten for medlemsstatene", "Den internasjonale domstol (ICJ)"],
      explanation: "EMD i Strasbourg behandler klager fra individer om brudd på EMK.",
    },
    {
      question: "Hva er folkerettens primære kilder?",
      options: ["Internasjonale konvensjoner, sedvanerett og alminnelige rettsprinsipper","Utelukkende den enkelte stats egen nasjonale lovgivning på det aktuelle området","Utelukkende resolusjoner vedtatt av FNs sikkerhetsråd og generalforsamling","Utelukkende skriftlige traktater som er inngått og ratifisert mellom stater"],
      explanation: "Folkerettens primære kilder er traktater, internasjonal sedvane og alminnelige rettsprinsipper anerkjent av siviliserte nasjoner.",
    },
    {
      question: "Hva regulærer humanitærretten?",
      options: ["Væpnede konflikter og beskyttelse av sivile og krigsfanger", "Menneskerettigheter i fredstid", "Beskyttelse av menneskerettighetene til borgerne i fredstid", "Reglene for internasjonal handel og toll mellom ulike stater"],
      explanation: "Humanitærretten (krigens folkerett) regulærer oppførsel i væpnede konflikter og beskytter de som ikke deltar.",
    },
    {
      question: "Hva er statsansvar i folkeretten?",
      options: ["Når en stat bryter sine folkerettslige forpliktelser og kan bli pålagt erstatning", "Når en stat okkuperer og styrer et annet suverent land med militærmakt", "Når en stat endrer sin egen grunnlov uten å konsultere andre stater", "Når en stat velger å melde seg ut av De forente nasjoner (FN)"],
      explanation: "Statsansvar oppstår når en stat bryter folkeretten. Staten kan bli pålagt å stanse handlingen og gi erstatning.",
    },
  ],
  "rettslære-2-4": [
    {
      question: "Hva er de fire frihetene i EØS-avtalen?",
      options: ["Fri bevegelighet for varer, personer, tjenester og kapital", "Ytringsfrihet, religionsfrihet, forsamlingsfrihet og pressefrihet", "Frihet fra toll, avgifter, kvoter og lisenser", "Frihet til å handle, arbeide, bo og studere"],
      explanation: "EØS-avtalens kjerne er fri bevegelighet for varer, personer, tjenester og kapital.",
    },
    {
      question: "Hva er ESA?",
      options: ["EFTAs overvåkingsorgan som påser at EØS-avtalen overholdes", "Europaparlamentet", "Den europeiske sentralbanken som fastsetter pengepolitikken i eurosonen", "Et EU-direktiv som må gjennomføres i medlemsstatenes nasjonale lovgivning"],
      explanation: "ESA (EFTA Surveillance Authority) overvåker at EFTA-statene oppfyller sine EØS-forpliktelser.",
    },
    {
      question: "Hva er forskjellen mellom forordninger og direktiver i EØS-retten?",
      options: ["Forordninger gjelder direkte, direktiver må gjennomføres i nasjonal rett", "Det er ingen reell forskjell; begge må gjennomføres i nasjonal rett", "Forordninger gjelder bare for EU-land, mens direktiver gjelder EØS", "Direktiver har høyere rang og går foran forordninger ved motstrid"],
      explanation: "Forordninger skal gjennomføres \"som sådan\", mens direktiver gir rom for nasjonale tilpasninger.",
    },
    {
      question: "Hva er virkningen av EØS-loven § 2?",
      options: ["EØS-regler har forrang ved motstrid med annen norsk lov","EØS-regler må godkjennes av Stortinget i hver enkelt sak","Norsk lov går alltid foran EØS-regler ved motstrid mellom reglene","EØS-regler gjelder bare for bedrifter og ikke for private borgere"],
      explanation: "EØS-loven § 2 sikrer at gjennomførte EØS-regler har forrang ved motstrid med annen norsk lovgivning.",
    },
    {
      question: "Kan restriksjoner på de fire frihetene noen gang rettferdiggjøres?",
      options: ["Ja, av hensyn til offentlig orden, sikkerhet, folkehelse eller tvingende allmenne hensyn", "Ja, men utelukkende i unntakstilstander som ved krig eller væpnet konflikt", "Nei, de fire frihetene er absolutte og kan aldri begrenses av statene", "Ja, men bare dersom EU-domstolen selv treffer vedtak om det i saken"],
      explanation: "Restriksjoner kan godtas hvis de er begrunnet i legitime hensyn og er proporsjonale.",
    },
  ],
  "rettslære-2-5": [
    {
      question: "Hva innebærer føre-var-prinsippet i miljøretten?",
      options: ["Mangel på vitenskapelig sikkerhet skal ikke hindre tiltak mot alvorlig miljørisiko", "At forurenseren skal varsles i god tid før myndighetene setter inn tiltak", "At naboer alltid skal varsles på forhånd om planlagte inngrep i miljøet", "At man alltid skal velge det økonomisk rimeligste tiltaket for miljøet"],
      explanation: "Føre-var-prinsippet innebærer at man skal handle selv om det er usikkerhet om miljøkonsekvensene.",
    },
    {
      question: "Hva er hovedregelen i forurensningsloven?",
      options: ["Forurensning er forbudt uten tillatelse", "Forurensning er tillatt så lenge det ikke skader mennesker", "Forurensning er tillatt mot avgift", "Forurensning er alltid forbudt"],
      explanation: "Forurensningsloven § 7 fastslår at forurensning er forbudt uten tillatelse fra forurensningsmyndigheten.",
    },
    {
      question: "Hva sier Grunnloven § 112 om miljø?",
      options: ["Enhver har rett til et miljø som sikrer helsen og staten har plikt til å ivåreta dette", "At bare staten, og ikke den enkelte borger, har rettigheter knyttet til miljøet", "At miljøspørsmål ikke er regulert i Grunnloven, men bare i vanlig lovgivning", "At miljøvern er en frivillig oppgave som staten kan velge å prioritere"],
      explanation: "Grunnloven § 112 gir borgerne rett til et sunt miljø og pålegger staten en handlingsplikt.",
    },
    {
      question: "Hva innebærer forurenser betaler-prinsippet?",
      options: ["Den som forurenser skal bære kostnadene ved forurensningen", "Staten betaler for all forurensning", "At staten skal dekke alle kostnadene ved forurensning gjennom skattene", "At forurensning er gratis så lenge den holder seg innenfor tillatte grenser"],
      explanation: "Forurenser betaler-prinsippet innebærer at den som forurenser skal dekke kostnadene ved førebygging og opprydding.",
    },
    {
      question: "Hva er klimalovens hovedmål for Norge?",
      options: ["90-95% utslippsreduksjon innen 2050", "Klimanøytralitet innen 2025", "50 prosent reduksjon i klimagassutslippene innen året 2030", "50% reduksjon innen 2030"],
      explanation: "Klimaloven lovfester at Norge skal kutte klimagassutslipp med 90-95% innen 2050.",
    },
  ],
  "rettslære-2-6": [
    {
      question: "Hva er en personopplysning etter GDPR?",
      options: ["Enhver opplysning som kan knyttes til en identifiserbar person", "Bare sensitive helseopplysninger", "Utelukkende navn og fødselsnummer som direkte identifiserer en person", "Utelukkende sensitive helseopplysninger og andre særlige kategorier data"],
      explanation: "Personopplysninger omfatter alle opplysninger som kan identifisere en person, inkludert IP-adresser og bilder.",
    },
    {
      question: "Hva kreves for gyldig samtykke etter GDPR?",
      options: ["Frivillig, spesifikt, informert og gitt gjennom en aktiv handling", "At det brukes en forhåndskrysset boks som personen ikke fjerner", "At samtykke innhentes, ettersom det alltid er nødvendig for behandling", "At den registrerte har gitt muntlig aksept i en telefonsamtale"],
      explanation: "Samtykke må være frivillig, spesifikt, informert og utvetydig gjennom en aktiv handling. Forhåndskryssede bokser godtas ikke.",
    },
    {
      question: "Hva er retten til å bli glemt?",
      options: ["Retten til å få personopplysninger om seg selv slettet", "Retten til å bli anonymisert i rettssaker", "Retten til å kreve at opplysninger om andre personer blir slettet", "Retten til å bli holdt anonym under en pågående rettssak mot en selv"],
      explanation: "GDPR artikkel 17 gir rett til sletting når opplysningene ikke lenger er nødvendige eller samtykke trekkes tilbake.",
    },
    {
      question: "Hva er maksimalt overtredelsesgebyr for de mest alvorlige GDPR-bruddene?",
      options: ["20 millioner euro eller 4% av global omsetning", "50 millioner euro eller 10%", "Et ubegrenset gebyr som tilsynsmyndigheten fastsetter helt fritt", "10 millioner euro eller 2%"],
      explanation: "For de mest alvorlige bruddene kan gebyret være inntil 20 millioner euro eller 4% av global årsomsetning.",
    },
    {
      question: "Hvilken av følgende er IKKE et behandlingsgrunnlag etter GDPR?",
      options: ["At opplysningene er interessante", "Avtale med den registrerte", "At den registrerte har gitt et gyldig samtykke til behandlingen", "Rettslig forpliktelse"],
      explanation: "GDPR krever et lovlig behandlingsgrunnlag som samtykke, avtale, lov, vitale interesser, myndighetsutøvelse eller berettiget interesse.",
    },
  ],
  "rettslaere-1-1-1": [
    {
      question: "Hva er forskjellen mellom rettsregler og moralregler?",
      options: ["Rettsregler håndheves av staten med tvang, mens moralregler håndheves gjennom sosiale reaksjoner", "Rettsregler gjelder bare for staten, ikke for borgerne", "Rettsregler gjelder bare mellom private parter, mens moralregler regulerer forholdet mellom staten og den enkelte borgeren", "Rettsregler er uskrevne sedvaner som utvikler seg over tid, mens moralregler alltid er nedfelt skriftlig i formelle lovtekster"],
      explanation: "Rettsregler er vedtatt av lovgivende myndighet og kan håndheves med tvang (bot, fengsel). Moralregler er uskrevne normer som håndheves gjennom kritikk, utfrysing eller dårlig samvittighet.",
    },
    {
      question: "Hvilke tre hovedfunksjoner fyller retten i samfunnet?",
      options: ["Ordne, beskytte og fordele", "Straffe, hevne og advare", "Skatte, kontrollere og overvåke", "Lære, oppdra og veilede"],
      explanation: "Retten skal ordne (skape forutsigbarhet), beskytte (verne rettigheter og friheter) og fordele (goder, byrder og ansvar) i samfunnet.",
    },
    {
      question: "Hva kjennetegner naturrett i motsetning til positiv rett?",
      options: ["Naturrett bygger på overordnede rettigheter som står over menneskeskapt lov","Naturrett er sedvane som har utviklet seg gjennom langvarig og fast praksis i samfunnet","Naturrett er forskrifter og enkeltvedtak gitt av regjeringen med hjemmel i formell lov","Naturrett er retten som er formelt vedtatt av Stortinget og nedfelt i skrevne lovtekster"],
      explanation: "Naturrett hevder at det finnes overordnede rettigheter uavhengig av hva mennesker vedtar. Positiv rett (rettspositivisme) hevder at retten er det som faktisk er vedtatt av lovgivende myndighet.",
    },
    {
      question: "Hvilket rettsområde tilhører strafferett?",
      options: ["Offentlig rett", "Privatrett", "Arverett, som regulerer fordeling av formue mellom private arvinger", "Avtalerett"],
      explanation: "Strafferett er en del av offentlig rett, som regulerer forholdet mellom staten og borgeren. Privatrett (f.eks. avtalerett og arverett) regulerer forholdet mellom private parter.",
    },
    {
      question: "Hvilket av disse er et eksempel på privatrett?",
      options: ["Avtalerett","Strafferett","Forvaltningsrett","Statsforfatningsrett"],
      explanation: "Avtalerett regulerer forholdet mellom private parter og hører til privatretten. Strafferett, forvaltningsrett og statsrett hører til offentlig rett.",
    },
  ],
  "rettslaere-1-1-2": [
    {
      question: "Hvem utviklet maktfordelingsprinsippet?",
      options: ["Charles de Montesquieu","Filosofen Jean-Jacques Rousseau","Karl Marx, forfatteren av «Kapitalen»","Den engelske filosofen John Locke"],
      explanation: "Den franske filosofen Charles de Montesquieu utviklet maktfordelingsprinsippet i verket «Om lovenes ånd» (1748).",
    },
    {
      question: "Hvilke tre statsmakter deles makten mellom etter maktfordelingsprinsippet?",
      options: ["Lovgivende, utøvende og dømmende makt", "Politi, militær og domstol", "Staten, fylkeskommunen og kommunen, altså de tre forvaltningsnivåene i Norge", "Stat, fylke og kommune"],
      explanation: "Maktfordelingsprinsippet deler statsmakten i den lovgivende (Stortinget), den utøvende (regjeringen) og den dømmende makt (domstolene).",
    },
    {
      question: "Når ble Norges Grunnlov vedtatt?",
      options: ["17. mai 1814", "17. mai 1905", "7. juni 1905", "1. januar 1900"],
      explanation: "Grunnloven ble vedtatt 17. mai 1814 på Eidsvoll og er den nest eldste gjeldende grunnloven i verden.",
    },
    {
      question: "Hva innebærer legalitetsprinsippet?",
      options: ["Myndighetene kan bare gripe inn i borgernes rettigheter når de har hjemmel i lov", "Alle lover må være på latin", "At domstolene står over loven og fritt kan sette til side lovvedtak de er uenige i", "At bare Kongen i statsråd har myndighet til å gi lover som binder borgerne rettslig"],
      explanation: "Legalitetsprinsippet (Grunnloven § 96 og § 113) krever at myndighetene må ha hjemmel i lov for å gripe inn i borgernes rettigheter.",
    },
    {
      question: "Hva er konstitusjonell kontroll (prøvingsretten)?",
      options: ["Domstolenes rett til å prøve om lover er i samsvar med Grunnloven","Domstolenes plikt til å følge Høyesteretts tidligere avgjørelser i like saker","Stortingets parlamentariske kontroll med at regjeringen følger opp vedtatt politikk","Politiets myndighet til å kontrollere at borgerne overholder gjeldende lover og regler"],
      explanation: "Konstitusjonell kontroll, lovfestet i Grunnloven § 89, er domstolenes rett og plikt til å prøve om en lov strider mot Grunnloven, og eventuelt sette den til side.",
    },
  ],
  "rettslaere-1-1-3": [
    {
      question: "Hvilken domstol er Norges øverste?",
      options: ["Høyesterett", "Lagmannsretten", "Tingretten", "Forliksrådet"],
      explanation: "Høyesterett er Norges øverste domstol, jf. Grunnloven § 88. Dommer fra Høyesterett kan ikke ankes videre.",
    },
    {
      question: "Hvor mange dommere består Høyesterett av?",
      options: ["20", "5", "11", "60"],
      explanation: "Høyesterett består av 20 dommere ledet av justitiarius. Saker behandles normalt i avdeling med 5 dommere.",
    },
    {
      question: "Hva er riktig rekkefølge i domstolshierarkiet fra lavest til høyest?",
      options: ["Tingrett, lagmannsrett, Høyesterett", "Lagmannsrett, tingrett, Høyesterett", "Høyesterett, lagmannsrett, tingrett", "Forliksråd, Høyesterett, tingrett"],
      explanation: "Det alminnelige domstolssystemet har tre nivåer: tingretten (første instans), lagmannsretten (ankeinstans) og Høyesterett (øverste instans).",
    },
    {
      question: "Hvor mange lagdømmer er Norge delt inn i?",
      options: ["6", "3", "10", "60"],
      explanation: "Norge er delt inn i 6 lagdømmer: Borgarting, Eidsivating, Agder, Gulating, Frostating og Hålogaland, hver med sin lagmannsrett.",
    },
    {
      question: "Hvilken av disse er en spesialdomstol?",
      options: ["Jordskifteretten", "Lagmannsretten", "Tingretten, som er første instans i behandlingen av sivile saker og straffesaker", "Høyesterett"],
      explanation: "Jordskifteretten er en spesialdomstol som behandler saker om eiendomsgrenser og bruksrettigheter. Tingrett, lagmannsrett og Høyesterett er alminnelige domstoler.",
    },
  ],
  "rettslaere-1-1-4": [
    {
      question: "Hvilken rettskilde har høyest rang i Norge?",
      options: ["Grunnloven", "Vanlige lover", "Forskrifter", "Rettspraksis"],
      explanation: "Grunnloven er øverste rettskilde. All annen lov må være i samsvar med Grunnloven.",
    },
    {
      question: "Hva er forarbeider?",
      options: ["Dokumenter fra lovgivningsprosessen som NOU-er og proposisjoner", "Ferdige dommer fra Høyesterett", "Rettskraftige dommer avsagt av Høyesterett i konkrete tvister mellom parter", "Bindende avtaler inngått mellom private parter innenfor rammen av avtalefriheten"],
      explanation: "Lovforarbeider er dokumenter laget under lovgivningsprosessen (NOU, proposisjoner, innstillinger) og brukes til å forstå hva lovgiveren mente.",
    },
    {
      question: "Hva betyr prinsippet lex superior?",
      options: ["Høyere rangert rettskilde går foran lavere", "Spesiell lov går foran generell", "At eldre lov alltid går foran nyere lov når det oppstår motstrid mellom dem", "Nyere lov går foran eldre"],
      explanation: "Lex superior betyr at den høyere rangerte rettskilden går foran ved motstrid. Lex posterior gjelder nyere foran eldre, og lex specialis spesiell foran generell.",
    },
    {
      question: "Hvem la grunnlaget for den norske rettskildelæren?",
      options: ["Torstein Eckhoff", "Charles de Montesquieu", "Henrik Ibsen", "Johan Sverdrup"],
      explanation: "Professor Torstein Eckhoff systematiserte den norske rettskildelæren i verket «Rettskildelære» (1971), som fortsatt er pensum på juridiske fakulteter.",
    },
    {
      question: "Hva er reelle hensyn som rettskilde?",
      options: ["Vurderinger av hva som er rimelig og rettferdig i det konkrete tilfellet", "Forskrifter fra forvaltningen", "Konkrete lovparagrafer med presist angitte vilkår og rettsfølger for saken", "Forskrifter og enkeltvedtak gitt av forvaltningen med hjemmel i formell lov"],
      explanation: "Reelle hensyn er vurderinger av hva som gir et rimelig, rettferdig og hensiktsmessig resultat. De er lavest rangert i rettskildehierarkiet.",
    },
  ],
  "rettslaere-1-1-5": [
    {
      question: "Hva er det primære tolkningsprinsippet i norsk rett?",
      options: ["Ordlydstolkning","Analogisk tolkning","Antitetisk tolkning","Formålsrettet tolkning"],
      explanation: "Ordlydstolkning er det primære tolkningsprinsippet. Utgangspunktet er alltid hva lovteksten sier, forstått slik en alminnelig person ville forstå ordene.",
    },
    {
      question: "Hva innebærer formålstolkning?",
      options: ["Man tolker lovteksten i lys av formålet loven skal ivareta","Man tolker ordlyden strengt etter alminnelig språkbruk","Man anvender loven analogisk på lignende tilfeller","Man slutter motsetningsvis fra ordlyden"],
      explanation: "Formålstolkning (teleologisk tolkning) betyr at man tolker lovteksten ut fra hva lovgiveren ønsket å oppnå med bestemmelsen.",
    },
    {
      question: "Hva er antitetisk tolkning?",
      options: ["En motsetningsslutning – det som ikke er nevnt, er ikke omfattet", "En utvidende tolkning til lignende tilfeller", "En tolkning som først og fremst bygger på forarbeidene til den aktuelle loven", "En formålsrettet tolkning der man legger vekt på hva lovgiveren ønsket å oppnå"],
      explanation: "Antitetisk tolkning (motsetningsslutning) betyr at man slutter at det som ikke er nevnt i loven, ikke er omfattet av den.",
    },
    {
      question: "Hva er analogisk tolkning?",
      options: ["Man anvender en lovregel på et tilfelle den ikke direkte dekker, fordi tilfellet er svært likt", "Man tolker loven strengt etter ordlyden", "Man tolker loven strengt og bokstavelig etter ordlyden uten å strekke den til å dekke nye og lignende tilfeller", "Man slutter motsetningsvis fra ordlyden, slik at forhold loven ikke uttrykkelig nevner faller helt utenfor regelen"],
      explanation: "Analogisk tolkning betyr å anvende en lovregel på et tilfelle den ikke direkte dekker, fordi tilfellet er så likt det loven regulerer.",
    },
    {
      question: "Hvorfor er analogisk tolkning til skade for tiltalte forbudt i strafferetten?",
      options: ["På grunn av legalitetsprinsippet i Grunnloven § 96","Fordi strafferetten ikke har lover","Fordi dommere ikke kan tolke lovtekster","Fordi det er for tidkrevende"],
      explanation: "Legalitetsprinsippet (Grunnloven § 96) krever at ingen kan straffes uten hjemmel i lov. Derfor er analogisk tolkning til skade for tiltalte forbudt.",
    },
  ],
  "rettslaere-1-1-6": [
    {
      question: "Hva er de fire hovedstegene i juridisk metode?",
      options: ["Identifisere faktum, finne rettsregelen, subsumere og konkludere", "Anmelde, etterforske, tiltale og dømme", "Å lese lovteksten, skrive et notat, regne på beløpet og tegne en skisse av saken", "Å gi et tilbud, motta betaling, levere ytelsen og deretter avslutte hele avtalen"],
      explanation: "Juridisk metode består av fire steg: identifiser faktum, finn rettsregelen, gjennomfør subsumsjon, og trekk en konklusjon.",
    },
    {
      question: "Hva er subsumsjon?",
      options: ["Å vurdere om faktum oppfyller vilkårene i rettsregelen", "Å skrive en ny lov", "Å utforme og vedta en helt ny lovbestemmelse som passer på det konkrete tilfellet", "Å lese den aktuelle lovbestemmelsen høyt for partene under selve rettsforhandlingen"],
      explanation: "Subsumsjon er kjernen i juridisk metode: man anvender rettsregelen på det konkrete faktum og vurderer om vilkårene er oppfylt.",
    },
    {
      question: "Hva er «faktum» i juridisk metode?",
      options: ["De faktiske omstendighetene i en sak", "Lovteksten som er relevant", "Den relevante lovteksten og rettsreglene som skal anvendes på den konkrete saken", "Konklusjonen på saken"],
      explanation: "Faktum er de faktiske omstendighetene – hva som har skjedd, hvem som er involvert, og hva som er bevist.",
    },
    {
      question: "Hva kalles de to delene en rettsregel typisk har?",
      options: ["Vilkårsside og rettsfølgeside","Innledning, hoveddel og avslutning","En objektiv forside og en subjektiv bakside som utfyller hverandre i regelen","Et straffebud og en straffeutmåling"],
      explanation: "En rettsregel har en vilkårsside (betingelsene som må være oppfylt) og en rettsfølgeside (konsekvensen som inntrer hvis vilkårene er oppfylt).",
    },
    {
      question: "Hva står IRAC for i den juridiske fremgangsmåten?",
      options: ["Issue, Rule, Application, Conclusion", "Innledning, Resultat, Anke, Conclusion", "Identitet, Rett, Avtale, Kontrakt", "Inntekt, Risiko, Ansvar, Culpa"],
      explanation: "IRAC står for Issue (rettsspørsmål), Rule (rettsregel), Application (subsumsjon) og Conclusion (konklusjon) – en strukturert metode for å løse rettsspørsmål.",
    },
  ],
  "rettslaere-1-1-7": [
    {
      question: "Hva er EMK?",
      options: ["Den europeiske menneskerettskonvensjonen","Et organ under Europarådet","En internasjonal handelsavtale om toll","Et norsk departement"],
      explanation: "EMK er Den europeiske menneskerettskonvensjonen, vedtatt av Europarådet i 1950 og gjort til norsk lov gjennom menneskerettsloven.",
    },
    {
      question: "Hvilken stilling har EMK i norsk rett?",
      options: ["Den har forrang foran annen norsk lov ved motstrid","Den gjelder bare for straffesaker","Den er underordnet alle andre norske lover","Den gjelder bare for utlendinger"],
      explanation: "EMK er gjort til norsk lov gjennom menneskerettsloven § 2 og har forrang foran annen norsk lov ved motstrid (menneskerettsloven § 3).",
    },
    {
      question: "Hvor kan borgere klage dersom de mener staten har krenket deres rettigheter etter EMK?",
      options: ["Den europeiske menneskerettsdomstolen (EMD) i Strasbourg","Norges Høyesterett, først etter at alle nasjonale rettsmidler er uttømt","EU-domstolen i Luxembourg, som håndhever menneskerettighetene på vegne av borgerne","FNs sikkerhetsråd, som behandler individklager om brudd på grunnleggende rettigheter"],
      explanation: "Borgere kan klage til Den europeiske menneskerettsdomstolen (EMD) i Strasbourg etter at de har uttømt nasjonale rettsmidler.",
    },
    {
      question: "Hva er et sentralt prinsipp i FNs barnekonvensjon?",
      options: ["Barnets beste skal være et grunnleggende hensyn","Barn har ingen egne rettigheter","At barn aldri skal høres i slike avgjørelser","Barn kan straffes som voksne"],
      explanation: "Barnets beste (art. 3) skal være et grunnleggende hensyn i alle avgjørelser som berører barn. Barnet har også rett til å bli hørt (art. 12).",
    },
    {
      question: "Hva er indirekte diskriminering?",
      options: ["En tilsynelatende nøytral regel som i praksis rammer en bestemt gruppe uforholdsmessig hardt","Når en regel er utformet for å ramme en bestemt gruppe, og det uttrykkelig framgår av ordlyden","Når en lov eller regel gjelder helt likt for alle borgere uten noe unntak eller særbehandling","Når noen helt åpent og bevisst behandles dårligere enn andre utelukkende på grunn av sitt kjønn"],
      explanation: "Indirekte diskriminering er en tilsynelatende nøytral regel eller praksis som i praksis rammer en bestemt gruppe uforholdsmessig hardt.",
    },
  ],
  "rettslaere-1-2-1": [
    {
      question: "Hvilken lov er den viktigste om avtaleinngåelse i Norge?",
      options: ["Avtaleloven fra 1918", "Kjøpsloven fra 1988", "Straffeloven fra 2005", "Grunnloven fra 1814"],
      explanation: "Avtaleloven (lov om avslutning av avtaler) fra 1918 er den viktigste loven om avtaleinngåelse, fullmakt og ugyldige viljeserklæringer.",
    },
    {
      question: "Hva innebærer at avtaleloven er deklaratorisk?",
      options: ["Partene kan avtale andre løsninger enn det loven legger opp til","Loven gjelder bare for avtaler der staten selv er part i forholdet","At loven er ufravikelig og aldri kan fravikes gjennom avtale mellom partene","At loven er ugyldig og uten rettslig virkning fordi den ikke er formelt vedtatt"],
      explanation: "Deklaratorisk (fravikelig) betyr at partene kan avtale andre løsninger enn det loven legger opp til. Loven fungerer som et sikkerhetsnett.",
    },
    {
      question: "Hva er IKKE en del av avtalefriheten?",
      options: ["Plikt til å inngå avtaler med alle som ønsker det","Frihet til å velge muntlig eller skriftlig form","Friheten til selv å velge avtalepart","Frihet til å bestemme innholdet"],
      explanation: "Avtalefriheten innebærer frihet til å inngå avtaler, velge partner, bestemme innhold og velge form. Ingen kan tvinges til å inngå en avtale.",
    },
    {
      question: "Hva er konkludent atferd?",
      options: ["Handlinger som viser at partene er enige, uten uttrykkelige ord", "En muntlig avtale i telefon", "En skriftlig og signert kontrakt der partene uttrykkelig har nedfelt alle vilkårene", "Et vesentlig brudd på en allerede inngått avtale som gir den andre parten hevingsrett"],
      explanation: "Konkludent atferd er stilltiende handlinger som viser at partene er enige – f.eks. å stemple bussbillett eller legge varer på båndet og betale.",
    },
    {
      question: "Hvilken bestemmelse er generalklausulen som kan sette urimelige avtaler til side?",
      options: ["Avtaleloven § 36", "Avtaleloven § 1", "Kjøpsloven § 17", "Straffeloven § 36"],
      explanation: "Avtaleloven § 36 er generalklausulen som lar domstolene sette helt eller delvis til side en avtale dersom det ville virke urimelig å gjøre den gjeldende.",
    },
  ],
  "rettslaere-1-2-2": [
    {
      question: "Når oppstår en bindende avtale etter avtalelovens modell?",
      options: ["Når et tilbud møtes av en overensstemmende aksept innen akseptfristen", "Når den ene parten tenker på å avtale", "Når den ene parten begynner å tenke på og vurdere å inngå en avtale med den andre", "Når hele kjøpesummen er betalt av kjøperen og pengene har kommet frem til selgeren"],
      explanation: "Bindende avtale oppstår når et tilbud møtes av en aksept som samsvarer med tilbudet, innen akseptfristen.",
    },
    {
      question: "Hva skjer dersom en «aksept» inneholder endringer eller tillegg?",
      options: ["Den regnes som et avslag og et nytt tilbud","Avtalen er likevel bindende","Tilbyderen må betale erstatning","Aksepten er ugyldig"],
      explanation: "En aksept med endringer eller forbehold regnes ikke som en aksept, men som et nytt tilbud (motbud), jf. avtaleloven § 6.",
    },
    {
      question: "Hvordan må et muntlig tilbud uten akseptfrist besvares?",
      options: ["Umiddelbart, ellers faller det bort","Skriftlig innen en måned","Innen 14 dager etter avtaleloven","Innen rimelig tid etter mottak"],
      explanation: "Etter avtaleloven § 3 må et muntlig tilbud (også telefon, videomøte) aksepteres umiddelbart, ellers faller det bort.",
    },
    {
      question: "Hva sier re integra-regelen i avtaleloven § 7?",
      options: ["Et tilbud kan kalles tilbake hvis tilbakekallet kommer frem før eller samtidig med tilbudet","At et tilbud faller bort av seg selv dersom mottakeren ikke har svart innen tre virkedager etter mottak","At et tilbud under ingen omstendighet kan kalles tilbake når det først er kommet frem til mottakeren","At et tilbud alltid må være både skriftlig og signert for at det senere skal kunne kalles tilbake igjen"],
      explanation: "Re integra-regelen (avtaleloven § 7) sier at et tilbud eller en aksept kan kalles tilbake dersom tilbakekallet kommer frem før eller samtidig med at erklæringen kommer til mottakerens kunnskap.",
    },
    {
      question: "Fra hvilket tidspunkt er et tilbud bindende for tilbyderen?",
      options: ["Fra det er kommet til mottakerens kunnskap","Fra tilbudet er undertegnet av tilbyderen selv","Fra tilbudet er sendt av gårde, uavhengig av om det er mottatt","Fra mottakeren har akseptert tilbudet og aksepten er kommet frem"],
      explanation: "Et tilbud er bindende for tilbyderen fra det øyeblikk det er kommet til mottakerens kunnskap, jf. avtaleloven § 7.",
    },
  ],
  "rettslaere-1-2-3": [
    {
      question: "Hva er en fullmakt?",
      options: ["En rett til å handle på en annens vegne med rettslig virkning for denne", "En bindende avtale om kjøp og salg av varer mellom to næringsdrivende", "En rett til å kreve erstatning dersom motparten bryter en inngått kontrakt", "En avgjørelse fra domstolen som fastslår hvem som har rett i en tvist"],
      explanation: "En fullmakt er en rett til å handle på en annens vegne med rettslig virkning for fullmaktsgiveren.",
    },
    {
      question: "Hvilke tre parter er involvert i et fullmaktsforhold?",
      options: ["Fullmaktsgiver, fullmektig og medkontrahent", "Dommer, aktor og forsvarer", "Dommeren, aktoren og forsvareren som deltar i en rettssak for domstolen", "Selger, kjøper og megler"],
      explanation: "De tre partene er fullmaktsgiveren (gir fullmakten), fullmektigen (handler på vegne av) og medkontrahenten (tredjepersonen avtalen inngås med).",
    },
    {
      question: "Hva er en stillingsfullmakt?",
      options: ["Fullmakt som følger av at en person har en bestemt stilling", "Fullmakt gitt bare internt uten tredjepersons kunnskap", "En skriftlig fullmakt som må kunngjøres offentlig i avis for å bli gyldig", "En fullmakt som alltid omfatter hele virksomheten og alle dens disposisjoner"],
      explanation: "En stillingsfullmakt følger av at en person har en bestemt stilling – f.eks. en butikkmedarbeider som selger butikkens varer.",
    },
    {
      question: "Hva skjer som hovedregel når fullmektigen handler utenfor fullmaktens grenser?",
      options: ["Fullmaktsgiveren er ikke bundet av avtalen","Fullmektigen blir personlig eier av varen","Fullmaktsgiveren blir alltid fullt bundet","Avtalen blir automatisk gyldig"],
      explanation: "Ved overskridelse av fullmakten er fullmaktsgiveren som hovedregel ikke bundet (avtaleloven § 11), men tredjepersonen kan kreve erstatning fra fullmektigen.",
    },
    {
      question: "Hva er ratihabisjon?",
      options: ["Fullmaktsgiverens etterfølgende godkjennelse av en avtale", "Tilbakekall av et tilbud", "Et vesentlig brudd på avtalelovens regler som medfører erstatningsansvar", "En form for ulovlig tvang som gjør den inngåtte avtalen ugyldig etter § 28"],
      explanation: "Ratihabisjon er fullmaktsgiverens etterfølgende godkjennelse av en avtale fullmektigen inngikk utenfor fullmakten. Avtalen blir da bindende som om fullmakt hadde foreligget.",
    },
  ],
  "rettslaere-1-2-4": [
    {
      question: "Hva slags ugyldighet gir grov tvang etter avtaleloven § 28?",
      options: ["Sterk ugyldighet – ugyldig overfor alle, også tredjepersoner i god tro","Midlertidig ugyldighet – avtalen er ugyldig inntil den blir bekreftet på nytt","Svak ugyldighet – avtalen er bare ugyldig overfor parter som var i ond tro","Ingen ugyldighet – avtalen står ved lag, men den utsatte kan kreve erstatning"],
      explanation: "Grov tvang (§ 28) ved vold eller trusler om vold gir sterk ugyldighet – avtalen er ugyldig overfor alle, også tredjepersoner i god tro.",
    },
    {
      question: "Hva er svik etter avtaleloven § 30?",
      options: ["Svikaktig adferd som bevisst villeder motparten til å inngå avtalen", "En urimelig høy pris", "Trusler om vold eller annen straffbar adferd som fremkaller avtaleinngåelsen", "At den ene parten manglet rettslig handleevne eller myndighet til å binde seg"],
      explanation: "Svik (§ 30) er svikaktig adferd – bevisst villedning eller løgn – fra medkontrahenten som fremkaller avtalen.",
    },
    {
      question: "Når blir man myndig etter vergemålsloven?",
      options: ["Ved fylte 18 år", "Ved fylte 15 år", "Ved fylte 16 år", "Ved fylte 21 år"],
      explanation: "Man blir myndig (får rettslig handleevne) ved fylte 18 år. Umyndige kan som hovedregel ikke binde seg ved avtale.",
    },
    {
      question: "Hva regulerer utnyttelse etter avtaleloven § 31?",
      options: ["At noen utnytter en annens nødstilstand, lettsinne, svakhet eller avhengighet til urimelige fordeler", "At noen bevisst gir uriktige opplysninger eller lyver om egenskaper ved en vare", "At noen bruker vold eller trusler om vold for å tvinge frem en avtaleinngåelse", "At en person under myndighetsalder inngår en bindende avtale uten samtykke"],
      explanation: "Utnyttelse (§ 31) rammer tilfeller der noen utnytter en annens nødstilstand, lettsinne, svakhet eller avhengighetsforhold, og det er et klart misforhold mellom ytelsene.",
    },
    {
      question: "Hva er avtaleloven § 36 ofte kalt?",
      options: ["Generalklausulen eller sikkerhetsventilen","Myndighetsparagrafen","Svikparagrafen mot bevisst villedning","Tvangsparagrafen om trusler"],
      explanation: "Avtaleloven § 36 kalles generalklausulen – en sikkerhetsventil som lar domstolene sette urimelige avtaler helt eller delvis til side.",
    },
  ],
  "rettslaere-1-2-5": [
    {
      question: "For hvilke kjøp gjelder kjøpsloven?",
      options: ["Kjøp mellom privatpersoner og mellom næringsdrivende","Bare forbrukerkjøp der en næringsdrivende selger til en privatperson","Bare internasjonale kjøp der partene holder til i to forskjellige land","Bare kjøp og salg av fast eiendom mellom to privatpersoner eller bedrifter"],
      explanation: "Kjøpsloven gjelder for kjøp mellom to privatpersoner og mellom to næringsdrivende. Den gjelder ikke forbrukerkjøp (forbrukerkjøpsloven) eller fast eiendom (avhendingslova).",
    },
    {
      question: "Foreligger det mangel selv ved «solgt som den er»-forbehold?",
      options: ["Ja, blant annet hvis tingen er i vesentlig dårligere stand enn forventet", "Bare hvis kjøper klager innen en dag", "Ja, men bare dersom kjøperen klager til selgeren innen én dag etter levering", "Nei, et slikt forbehold fritar selgeren fullstendig for ethvert mangelsansvar"],
      explanation: "Selv ved «solgt som den er» foreligger mangel hvis selger ga uriktige opplysninger, holdt tilbake vesentlige opplysninger, eller tingen er i vesentlig dårligere stand enn forventet (kjøpsloven § 19).",
    },
    {
      question: "Når må mangelen ha foreligget for at den skal være en mangel etter kjøpsloven?",
      options: ["På leveringstidspunktet (risikoens overgang)", "Når selgeren får vite om den", "Innen ett år etter at kjøpet ble inngått, uansett når mangelen viser seg", "Når kjøperen oppdager den"],
      explanation: "Mangelen må ha foreligget på leveringstidspunktet (risikoens overgang), jf. § 21. Normal slitasje etter levering er ikke en mangel.",
    },
    {
      question: "Hva kreves for at kjøperen kan heve kjøpet etter kjøpsloven § 39?",
      options: ["At mangelen utgjør et vesentlig kontraktsbrudd", "At kjøper har angret seg", "At kjøperen har angret seg og ønsker å komme ut av avtalen han har inngått", "At mangelen er liten"],
      explanation: "Etter kjøpsloven § 39 kan kjøperen heve dersom mangelen utgjør et vesentlig kontraktsbrudd. Terskelen for heving er høy.",
    },
    {
      question: "Hvilken av disse er en misligholdsbeføyelse ved mangel?",
      options: ["Prisavslag", "Angrerett", "Tvangssalg", "Pågripelse"],
      explanation: "Misligholdsbeføyelser ved mangel er retting (§ 34), prisavslag (§ 38), heving (§ 39) og erstatning (§ 40).",
    },
  ],
  "rettslaere-1-2-6": [
    {
      question: "Når gjelder forbrukerkjøpsloven?",
      options: ["Når en forbruker kjøper fra en næringsdrivende","Når to privatpersoner handler med hverandre","Når det kjøpes fast eiendom eller bolig","Når to bedrifter handler"],
      explanation: "Forbrukerkjøpsloven gjelder når en forbruker (privatperson til privat bruk) kjøper fra en næringsdrivende.",
    },
    {
      question: "Hva betyr det at forbrukerkjøpsloven er preseptorisk?",
      options: ["Den kan ikke fravikes til ulempe for forbrukeren", "Den gjelder bare for staten", "Den er en frivillig bransjenorm som selgeren selv velger om han vil følge", "Den kan fritt fravikes"],
      explanation: "Preseptorisk (ufravikelig) betyr at loven ikke kan fravikes til ulempe for forbrukeren, jf. § 3.",
    },
    {
      question: "Hvem har bevisbyrden de første seks månedene etter levering i forbrukerkjøp?",
      options: ["Selgeren", "Kjøperen", "Produsenten", "Forbrukertilsynet"],
      explanation: "Etter forbrukerkjøpsloven § 18 andre ledd presumeres en mangel som viser seg innen seks måneder å ha foreligget ved levering. Selgeren har bevisbyrden.",
    },
    {
      question: "Hva er den lange absolutte reklamasjonsfristen for varer ment å vare vesentlig lenger?",
      options: ["5 år", "2 år", "10 år", "6 måneder"],
      explanation: "Den absolutte reklamasjonsfristen er 2 år for de fleste varer, men 5 år for varer som er ment å vare vesentlig lenger (f.eks. hvitevarer, møbler, biler).",
    },
    {
      question: "Kan selgeren ta «solgt som den er»-forbehold i forbrukerkjøp?",
      options: ["Nei, slike forbehold er ugyldige","Bare ved kjøp over 10 000 kroner totalt","Ja, men et slikt forbehold gjelder utelukkende ved netthandel og fjernsalg","Ja, dersom kjøperen har sett varen først"],
      explanation: "I motsetning til kjøpsloven kan selgeren ikke ta «solgt som den er»-forbehold i forbrukerkjøp (§ 17). Slike forbehold er ugyldige.",
    },
  ],
  "rettslaere-1-2-7": [
    {
      question: "Hva er forskjellen mellom retting og omlevering?",
      options: ["Retting er reparasjon av mangelen, omlevering er levering av en ny vare", "Omlevering betyr å gi prisavslag", "Retting betyr at hele kjøpsavtalen heves og kjøpesummen tilbakebetales fullt", "Omlevering betyr at kjøperen beholder varen mot at kjøpesummen blir redusert"],
      explanation: "Retting betyr at selgeren reparerer mangelen, mens omlevering betyr at selgeren leverer en ny, mangelfri vare i stedet.",
    },
    {
      question: "Hva innebærer prisavslag som misligholdsbeføyelse?",
      options: ["Kjøpesummen reduseres, men kjøperen beholder varen","Selgeren betaler erstatning","Den mangelfulle varen byttes ut med en ny vare","Avtalen heves og pengene betales tilbake"],
      explanation: "Prisavslag innebærer at kjøpesummen reduseres for å kompensere for mangelen. Kjøperen beholder varen, men betaler en lavere pris.",
    },
    {
      question: "Hva skjer ved heving av et kjøp?",
      options: ["Hele avtalen oppheves – varen leveres tilbake og pengene tilbakebetales", "Selgeren reparerer varen", "Kjøpesummen reduseres litt, og kjøperen beholder varen til en lavere pris", "Kjøperen beholder den mangelfulle varen, men får en ny vare i tillegg gratis"],
      explanation: "Ved heving oppheves hele kjøpsavtalen: kjøperen leverer varen tilbake, og selgeren tilbakebetaler kjøpesummen.",
    },
    {
      question: "Hvilken terskel kreves for heving i forbrukerkjøp etter § 32?",
      options: ["At mangelen ikke er uvesentlig", "At mangelen er vesentlig kontraktsbrudd", "At selger samtykker", "At kjøperen angrer"],
      explanation: "I forbrukerkjøp kan kjøperen heve dersom mangelen ikke er uvesentlig (§ 32) – en lavere terskel enn kjøpslovens krav om «vesentlig kontraktsbrudd».",
    },
    {
      question: "Hva slags ansvar har selgeren for direkte tap ved mangel i forbrukerkjøp?",
      options: ["Objektivt ansvar – ansvarlig uavhengig av skyld","Ansvar bare ved grov uaktsomhet","Ansvar bare ved forsett fra selgeren","Ansvar bare når kjøperen klager innen 14 dager"],
      explanation: "I forbrukerkjøp har selgeren objektivt ansvar for direkte tap (§ 33) – han er ansvarlig uavhengig av om han visste om mangelen.",
    },
  ],
  "rettslaere-1-2-8": [
    {
      question: "Hvor lang er angrefristen ved fjernsalg etter angrerettloven?",
      options: ["14 dager fra varen er mottatt", "30 dager", "24 timer fra forbrukeren åpnet pakken og tok den bestilte varen i bruk", "24 timer"],
      explanation: "Angrefristen er 14 dager fra forbrukeren mottok varen (angrerettloven § 21), og forbrukeren trenger ikke oppgi noen grunn.",
    },
    {
      question: "Hvor gjelder angreretten?",
      options: ["Ved fjernsalg og salg utenom faste forretningslokaler", "Bare ved kjøp over 5000 kr", "Bare ved kjøp av matvarer og dagligvarer, uansett hvor kjøpet skjer", "I vanlige fysiske butikker der kunden selv oppsøker forretningslokalet"],
      explanation: "Angreretten gjelder ved fjernsalg (netthandel, telefonsalg) og salg utenom faste forretningslokaler (dørsalg) – ikke i fysiske butikker.",
    },
    {
      question: "Hva skjer med angrefristen dersom selgeren ikke har opplyst om angreretten?",
      options: ["Den forlenges med inntil 12 måneder","Den faller helt bort","Fristen er fortsatt 14 dager","Den blir på 7 dager"],
      explanation: "Dersom selgeren ikke har opplyst om angreretten, forlenges angrefristen med inntil 12 måneder (§ 21 tredje ledd).",
    },
    {
      question: "Hvilken av disse er unntatt fra angreretten?",
      options: ["Spesialtilpassede varer laget etter forbrukerens spesifikasjoner","En jakke som forbrukeren har prøvd på og angret på etter to dager","En bok som forbrukeren har bestilt fra en nettbutikk og fått levert hjem","En mobiltelefon kjøpt på nett som forbrukeren har pakket ut og tatt i bruk"],
      explanation: "Spesialtilpassede varer (f.eks. gravering, spesialsydd dress) er unntatt fra angreretten (§ 22 bokstav c).",
    },
    {
      question: "Hva regulerer GDPR og personopplysningsloven ved netthandel?",
      options: ["Hvordan nettbutikker kan behandle dine personopplysninger", "Hvor raskt varer skal leveres", "Hvor mye varene i en nettbutikk lovlig kan koste og prises for forbrukeren", "Hvor raskt nettbutikken plikter å levere de varene forbrukeren har bestilt"],
      explanation: "GDPR og personopplysningsloven regulerer hvordan nettbutikker kan behandle personopplysninger, blant annet krav om samtykke til markedsføring og rett til sletting.",
    },
  ],
  "rettslaere-1-3-1": [
    {
      question: "Hva er erstatning?",
      options: ["Et økonomisk vederlag skadevolder betaler skadelidte for å gjenopprette et tap", "En straffereaksjon staten ilegger lovbryteren som en følge av et lovbrudd", "En gjensidig bindende avtale som inngås mellom en kjøper og en selger av varer", "En forsikringsordning der et selskap dekker skader mot en løpende premie"],
      explanation: "Erstatning er et økonomisk vederlag den ansvarlige (skadevolder) må betale til skadelidte for å sette vedkommende i samme økonomiske stilling som om skaden ikke hadde skjedd.",
    },
    {
      question: "Hva er det viktigste formålet med erstatningsretten?",
      options: ["Reparasjon (gjenoppretting av tapet)","Å straffe skadevolder hardt","Å skaffe staten inntekter via bøter","Å premiere aktsomme borgere"],
      explanation: "Det viktigste formålet er reparasjon – å gjenopprette skadelidtes tap slik at vedkommende stilles som om skaden ikke hadde skjedd. I tillegg virker erstatningsretten preventivt.",
    },
    {
      question: "Hva innebærer reparasjonsprinsippet?",
      options: ["Skadelidte skal verken tjene eller tape på skaden", "Skadelidte skal alltid få dobbelt erstatning", "Skadelidte skal alltid få utbetalt dobbel erstatning for det tapet han led", "Skadevolder skal straffes med fengsel"],
      explanation: "Reparasjonsprinsippet innebærer at erstatningen skal gjenopprette tapet – verken mer (ingen overkompensasjon) eller mindre (full kompensasjon).",
    },
    {
      question: "Hvilke tre grunnvilkår må være oppfylt for erstatning?",
      options: ["Ansvarsgrunnlag, årsakssammenheng og økonomisk tap","Skade, gyldig forsikring og politianmeldelse av forholdet","Forsett hos skadevolder, økonomisk vinning og en form for ulovlig tvang","Bindende tilbud, samsvarende aksept og gjennomført betaling mellom partene"],
      explanation: "For erstatning må tre vilkår være oppfylt samtidig: ansvarsgrunnlag, årsakssammenheng og økonomisk tap. Mangler ett, foreligger ikke erstatningsplikt.",
    },
    {
      question: "Hvilken lov er den viktigste på erstatningsrettens område?",
      options: ["Skadeserstatningsloven (1969)", "Straffeloven (2005)", "Kjøpsloven (1988), som regulerer forholdet mellom kjøper og selger", "Avtaleloven (1918)"],
      explanation: "Skadeserstatningsloven (1969) er den viktigste loven, men mye av erstatningsretten bygger fortsatt på ulovfestede regler utviklet gjennom rettspraksis.",
    },
  ],
  "rettslaere-1-3-2": [
    {
      question: "Hva betyr culpa?",
      options: ["Skyld (uaktsomhet)", "Objektivt ansvar", "Objektivt ansvar helt uten skyld", "Tilfeldighet"],
      explanation: "Culpa er latin og betyr «skyld». Culpa-ansvaret er uaktsomhetsansvaret – den som handler uaktsomt og påfører skade, må betale erstatning.",
    },
    {
      question: "Hva er aktsomhetsnormen i culpa-vurderingen?",
      options: ["Hva en alminnelig fornuftig person ville gjort i samme situasjon (bonus pater familias)", "Hva loven i den enkelte lovbestemmelse uttrykkelig og detaljert sier at man skal gjøre", "Hva skadevolder selv i den konkrete situasjonen subjektivt mente var forsvarlig å gjøre", "Hva skadelidte på forhånd uttrykkelig hadde ønsket og godtatt at skadevolder skulle gjøre"],
      explanation: "Aktsomhetsnormen («bonus pater familias») er en objektiv vurdering av hva en alminnelig fornuftig person ville ha gjort i samme situasjon.",
    },
    {
      question: "Hvilken gruppe har en skjerpet aktsomhetsnorm?",
      options: ["Profesjonsutøvere som leger, advokater og håndverkere", "Barn under 10 år, som holdes til en strengere norm", "Pensjonister, som forventes å opptre ekstra forsiktig", "Turister, fordi de er ukjente med lokale forhold"],
      explanation: "Profesjonsutøvere (leger, advokater, håndverkere) har en skjerpet aktsomhetsnorm fordi det stilles strengere krav til deres faglige opptreden.",
    },
    {
      question: "Hva må foreligge mellom uaktsomheten og skaden for erstatningsansvar?",
      options: ["Årsakssammenheng","En skriftlig avtale","Et tilbud og en aksept","En rettskraftig straffedom"],
      explanation: "Det må foreligge årsakssammenheng – den uaktsomme handlingen må ha forårsaket skaden. Tenkes handlingen bort, ville skaden ikke oppstått.",
    },
    {
      question: "Hva er hovedregelen for hva skadelidte kan kreve erstattet?",
      options: ["Et økonomisk tap som kan uttrykkes i penger", "Tort og svie uten lovhjemmel", "Bare fremtidige tap, ikke tap som allerede har oppstått", "Et rimelig symbolsk beløp fastsatt skjønnsmessig av retten"],
      explanation: "Hovedregelen er at skadelidte må ha lidt et økonomisk tap som kan uttrykkes i penger. Norsk erstatningsrett gir som hovedregel ikke erstatning for «tort og svie» uten lovhjemmel.",
    },
  ],
  "rettslaere-1-3-3": [
    {
      question: "Hva er objektivt ansvar?",
      options: ["Erstatningsansvar uten krav om skyld", "Ansvar bare ved grov uaktsomhet", "Ansvar som bare kan pålegges staten og offentlige virksomheter", "Ansvar bare ved forsett"],
      explanation: "Objektivt ansvar (risikoansvar) er erstatningsansvar der skadevolder kan holdes ansvarlig uavhengig av om vedkommende har utvist skyld.",
    },
    {
      question: "Hva regulerer arbeidsgiveransvaret (skadeserstatningsloven § 2-1)?",
      options: ["At arbeidsgiver er ansvarlig for skade arbeidstaker volder uaktsomt under arbeidet", "At staten gjennom folketrygden automatisk dekker alle skader på arbeidsplassen", "At arbeidstakeren alltid selv må dekke skaden vedkommende volder i tjenesten", "At kundene og de skadelidte selv bærer risikoen for skader i virksomheten"],
      explanation: "Arbeidsgiveransvaret innebærer at arbeidsgiver er objektivt ansvarlig for skade som arbeidstaker volder forsettlig eller uaktsomt under utføring av arbeidet.",
    },
    {
      question: "Hva kreves for ulovfestet objektivt ansvar etter rettspraksis?",
      options: ["En stadig, typisk og ekstraordinær risiko","En enkeltstående tilfeldig hendelse","At skadevolder har handlet med forsett","At skaden er dekket av forsikring"],
      explanation: "Det ulovfestede objektive ansvaret gjelder ved en stadig, typisk og ekstraordinær risiko knyttet til en virksomhet, utviklet gjennom Høyesteretts praksis.",
    },
    {
      question: "Hva regulerer bilansvarslova?",
      options: ["Objektivt ansvar for skade som motorvogn gjør", "Fartsgrenser på veiene", "Statlige avgifter på bensin, diesel og andre drivstoff", "Kravene til førerkort og oppfyllelse av opplæringsplikten"],
      explanation: "Bilansvarslova pålegger eier/bruker av motorvogn objektivt ansvar for skade motorvognen gjør. Trafikkforsikring er obligatorisk.",
    },
    {
      question: "Hva kreves for produktansvar etter produktansvarsloven?",
      options: ["At produktet har en sikkerhetsmangel som forårsaker skade", "At produsenten har handlet forsettlig", "At produsenten kan bebreides for å ha handlet forsettlig eller uaktsomt", "At kjøperen har reklamert og klaget over feilen innen én dag etter kjøpet"],
      explanation: "Produktansvaret er objektivt: det kreves at produktet hadde en sikkerhetsmangel (defekt), årsakssammenheng og et tap. Produsenten kan ikke fri seg ved å vise til forsvarlig opptreden.",
    },
  ],
  "rettslaere-1-3-4": [
    {
      question: "Hva er hovedspørsmålet i betingelseslæren?",
      options: ["Ville skaden ha oppstått dersom handlingen tenkes borte?","Var handlingen forsettlig eller bare uaktsom fra skadevolders side?","Hvem av partene i saken har best økonomisk evne til å bære tapet","Hvor stort det samlede økonomiske tapet skadelidte har lidt faktisk er"],
      explanation: "Betingelseslæren (conditio sine qua non) spør om skaden ville ha oppstått dersom den ansvarsbetingende handlingen tenkes borte. Hvis nei, foreligger årsakssammenheng.",
    },
    {
      question: "Hva er samvirkende årsaker?",
      options: ["Flere årsaker som virker sammen for å fremkalle skaden", "Én enkelt klar årsak som alene fremkaller hele skaden", "En helt tilfeldig hendelse uten tilknytning til noen", "En årsak som er så fjern at den ikke har betydning"],
      explanation: "Samvirkende årsaker (konkurranseårsaker) er flere årsaker som virker sammen for å fremkalle skaden. Hvis skaden ikke ville oppstått uten begge, er begge nødvendige betingelser.",
    },
    {
      question: "Hva setter adekvanslæren en grense for?",
      options: ["Erstatningsansvaret – fjerne, avledede og upåregnelige skadefølger erstattes ikke", "Hvilken domstol og hvor mange dommere som skal behandle erstatningskravet", "Antallet vitner som må føres for å bevise årsakssammenhengen i saken", "Skadevolders inntekt og formue på det tidspunktet skaden ble voldt"],
      explanation: "Adekvanslæren setter en ytre grense for erstatningsansvaret: selv ved årsakssammenheng kan ansvaret avskjæres dersom skadefølgen er for fjern, avledet og upåregnelig.",
    },
    {
      question: "Fra hvilken dom stammer hovedårsakslæren?",
      options: ["P-pille-dommen II (Rt. 1992 s. 64)", "Strand Lobben-dommen", "Eidsvolldommen om Grunnlovens tilblivelse", "Fiskerigrensesaken om norsk territorialgrense"],
      explanation: "Hovedårsakslæren stammer fra P-pille-dommen II (Rt. 1992 s. 64), der Høyesterett uttalte at det er tilstrekkelig at årsaken er en ikke uvesentlig medvirkende årsak.",
    },
    {
      question: "Hva er sentralt i adekvansvurderingen?",
      options: ["Om skadefølgen var påregnelig (forutsigbar)", "Om skadevolder har forsikring", "Om saken er så gammel at kravet kan være foreldet", "Om skadelidte er velstående og selv kunne båret tapet"],
      explanation: "I adekvansvurderingen legges det vekt på påregnelighet (forutsigbarhet), nærhet i årsaksrekken og skadens art og omfang.",
    },
  ],
  "rettslaere-1-3-5": [
    {
      question: "Hva er utgangspunktet ved erstatningsutmåling?",
      options: ["Reparasjonsprinsippet – skadelidte skal stilles som om skaden ikke hadde skjedd", "At erstatningen skal være rent symbolsk og ikke dekke det reelle tapet", "At skadelidte skal få mest mulig utover det tapet som faktisk er lidt", "At skadevolder skal betale minst mulig uansett hvor stort tapet er"],
      explanation: "Utgangspunktet er reparasjonsprinsippet: skadelidte skal stilles økonomisk som om skaden ikke hadde skjedd.",
    },
    {
      question: "Hvordan beregnes erstatning ved totalskade på en gjenstand?",
      options: ["Etter gjenanskaffelsesverdi med fradrag for alder og slitasje","Etter det beløpet gjenstanden opprinnelig ble kjøpt for, uten justering","Etter full nypris for en tilsvarende gjenstand uten noe fradrag","Det gis ingen erstatning fordi gjenstanden er fullstendig ødelagt"],
      explanation: "Ved totaltap erstattes gjenanskaffelsesverdien for en tilsvarende gjenstand i tilsvarende stand. Det gjøres fradrag for alder, slitasje og bruk (elde-fradrag).",
    },
    {
      question: "Hva kreves for ménerstatning etter skadeserstatningsloven § 3-2?",
      options: ["Varig (livsvarig) og betydelig skade med minst 15 % medisinsk invaliditet", "At skaden er forbigående og forventes å leges innen relativt kort tid", "At skadelidte kan dokumentere et konkret økonomisk tap som følge av skaden", "At skadevolder handlet forsettlig eller i det minste grovt uaktsomt"],
      explanation: "Ménerstatning krever at skaden er varig (minst 10 år, i praksis livsvarig) og betydelig (minst 15 % medisinsk invaliditet). Begge vilkår er kumulative.",
    },
    {
      question: "Hva slags skyld kreves for oppreisning etter skadeserstatningsloven § 3-5?",
      options: ["Forsett eller grov uaktsomhet","Uaktsomhet fra skadelidte","At objektivt ansvar er nok","Simpel uaktsomhet er nok"],
      explanation: "Oppreisning krever kvalifisert skyld – skadevolder må ha handlet forsettlig eller grovt uaktsomt. Simpel uaktsomhet er ikke tilstrekkelig.",
    },
    {
      question: "Hva kompenserer ménerstatning for?",
      options: ["Ikke-økonomisk tap som redusert livskvalitet, smerter og ulemper", "Utelukkende kostnadene ved reparasjon av gjenstanden", "Utelukkende tapt arbeidsinntekt som følge av skaden", "Skadevolders utgifter til advokat og saksbehandling"],
      explanation: "Ménerstatning er erstatning for ikke-økonomisk tap – den kompenserer for redusert livskvalitet, smerter og ulemper som ikke kan måles i kroner.",
    },
  ],
  "rettslaere-1-3-6": [
    {
      question: "Hva er medvirkning etter skadeserstatningsloven § 5-1?",
      options: ["At skadelidte selv har bidratt til skaden ved egen uaktsomhet", "At forsikringsselskapet dekker hele skadelidtes tap fullt ut", "At staten gjennom folketrygden betaler en del av erstatningen", "At skadevolder har en medskyldig som også har bidratt til skaden"],
      explanation: "Medvirkning innebærer at skadelidte selv har bidratt til skaden ved egen skyld (uaktsomhet). Erstatningen kan da reduseres eller falle helt bort.",
    },
    {
      question: "Hva er den vanligste virkningen av medvirkning?",
      options: ["En prosentvis avkorting av erstatningen","At erstatningen dobles for skadevolder","At skadelidte må betale erstatning","At skadevolder straffes"],
      explanation: "Medvirkning gir normalt en prosentvis avkorting i erstatningen, fastsatt etter en helhetsvurdering av skadelidtes skyld og forholdene ellers.",
    },
    {
      question: "Hva innebærer lemping etter skadeserstatningsloven § 5-2?",
      options: ["At erstatningsansvaret settes ned dersom det ville virke urimelig tyngende for skadevolder", "At erstatningsansvaret økes utover det fulle tapet fordi skadevolder er å bebreide", "At skadelidte tilkjennes dobbel erstatning for å markere at forholdet er alvorlig", "At erstatningssaken henlegges og kravet faller helt bort uten videre behandling"],
      explanation: "Lemping er en sikkerhetsventil som lar retten sette ned erstatningen dersom fullt ansvar ville virke urimelig tyngende for skadevolder.",
    },
    {
      question: "Hvilket moment er sentralt i lempingsvurderingen?",
      options: ["Den ansvarliges økonomiske bæreevne og forsikringsmuligheter", "Ved hvilken domstol og på hvilket sted saken blir behandlet", "Hvilket humør og sinnsstemning den dømmende dommeren er i", "Hvor gammel den skadelidte parten var da skaden skjedde"],
      explanation: "I lempingsvurderingen legges det vekt på skadens størrelse, den ansvarliges økonomiske bæreevne, forsikringsmuligheter og skyldgrad.",
    },
    {
      question: "Hvilken rolle spiller forsikring i erstatningsretten?",
      options: ["De fleste erstatningskrav håndteres i praksis av forsikringsselskaper", "At det er forbudt å tegne forsikring som dekker erstatningsansvar", "At forsikring ikke har noen betydning for oppgjøret av erstatningskrav", "At forsikring skjerper og øker skadevolders erstatningsansvar overfor skadelidte"],
      explanation: "Forsikring spiller en sentral rolle: de fleste erstatningskrav håndteres i praksis av forsikringsselskaper gjennom ansvarsforsikringer som bil-, innbo- og yrkesskadeforsikring.",
    },
  ],
  "rettslaere-1-4-1": [
    {
      question: "Hvem forfølger og straffer lovbrytere i et moderne rettssamfunn?",
      options: ["Staten gjennom påtalemyndigheten","Forsikringsselskapene som dekker tapet","Kommunen der lovbruddet ble begått","Den fornærmede selv gjennom privat søksmål"],
      explanation: "Strafferetten er offentlig rett – det er staten (påtalemyndigheten) som forfølger og straffer lovbrytere, ikke den fornærmede.",
    },
    {
      question: "Hva innebærer legalitetsprinsippet i strafferetten?",
      options: ["Ingen kan straffes uten hjemmel i lov", "Alle handlinger er forbudt", "At dommerne står fritt til å idømme straff selv uten hjemmel i lov", "Dommere kan straffe fritt"],
      explanation: "Legalitetsprinsippet (Grunnloven § 96) innebærer at ingen kan dømmes uten etter lov eller straffes uten etter dom. Det har tre sider: lovskravet, klarhetskravet og analogiforbudet.",
    },
    {
      question: "Hva er allmennprevensjon?",
      options: ["At straffetrusselen avskrekker befolkningen generelt fra lovbrudd", "At den enkelte lovbryter avskrekkes", "At det bygges flere fengsler slik at samfunnet får plass til de domfelte", "At politiet ansetter flere for å oppklare og forebygge kriminalitet bedre"],
      explanation: "Allmennprevensjon innebærer at trusselen om straff skal avskrekke befolkningen generelt fra å begå lovbrudd. Individualprevensjon retter seg mot den enkelte lovbryter.",
    },
    {
      question: "Når trådte den gjeldende straffeloven i kraft?",
      options: ["1. oktober 2015", "1. januar 2000", "17. mai 1814", "20. mai 1902"],
      explanation: "Den gjeldende straffeloven (lov 20. mai 2005 nr. 28) trådte i kraft 1. oktober 2015 og erstattet den gamle straffeloven av 1902.",
    },
    {
      question: "Hva forbyr Grunnloven § 97?",
      options: ["Tilbakevirkende straffelover", "Ytringsfrihet", "Innskrenkninger i ytringsfriheten", "Inngrep i den private eiendomsretten"],
      explanation: "Grunnloven § 97 forbyr tilbakevirkende lover – man kan ikke straffes for handlinger som var lovlige da de ble begått.",
    },
  ],
  "rettslaere-1-4-2": [
    {
      question: "Hvor mange straffbarhetsvilkår må være oppfylt for å straffe noen?",
      options: ["Fire", "Tre", "To, nemlig lovbrudd og skyld", "Fem"],
      explanation: "Fire straffbarhetsvilkår må være oppfylt samtidig: lovbrudd (gjerningsbeskrivelsen), skyld, tilregnelighet og strafferettslig alder. Mangler ett, kan personen ikke straffes.",
    },
    {
      question: "Hva kalles det første, objektive straffbarhetsvilkåret?",
      options: ["At handlingen oppfyller gjerningsbeskrivelsen i et straffebud","At gjerningspersonen er tilregnelig og ikke psykotisk ved handlingen","At det subjektivt sett er utvist forsett om følgen av handlingen","At gjerningspersonen var over den strafferettslige lavalderen på 15 år"],
      explanation: "Det første (objektive) vilkåret er at handlingen må oppfylle gjerningsbeskrivelsen i et straffebud – alle elementene i beskrivelsen må være dekket.",
    },
    {
      question: "Hva er hovedregelen for skyldkravet etter straffeloven § 21?",
      options: ["Straffeloven rammer den som handler med forsett, med mindre annet er bestemt", "Bare grov uaktsomhet straffes", "Uaktsomhet er alltid tilstrekkelig skyldform for å kunne straffe etter loven", "Skyld hos gjerningspersonen er ikke et nødvendig vilkår for straff etter loven"],
      explanation: "Etter straffeloven § 21 rammer straffeloven bare den som handler med forsett, med mindre annet er bestemt. For noen lovbrudd er uaktsomhet tilstrekkelig.",
    },
    {
      question: "Hvilken tilstand gjør en person utilregnelig etter straffeloven § 20?",
      options: ["Psykose på handlingstidspunktet", "Å være uenig med loven", "Å være sterkt uenig i den loven man overtrer", "Å være trøtt og uopplagt da handlingen ble begått"],
      explanation: "En person er utilregnelig dersom vedkommende var under 15 år, psykotisk, psykisk utviklingshemmet i høy grad eller hadde en sterk bevissthetsforstyrrelse på handlingstidspunktet (§ 20).",
    },
    {
      question: "Hva er den kriminelle lavalderen i Norge?",
      options: ["15 år", "18 år", "14 år", "16 år"],
      explanation: "Den kriminelle lavalderen er 15 år (straffeloven § 20). Barn under 15 år kan ikke straffes, uansett hvor alvorlig handlingen er.",
    },
  ],
  "rettslaere-1-4-3": [
    {
      question: "Hvilke tre former for forsett finnes etter straffeloven § 22?",
      options: ["Hensiktsforsett, sannsynlighetsforsett og dolus eventualis", "Grov, simpel og bevisst forsett etter alvorlighetsgraden", "Forsett, uaktsomhet og hendelig uhell som stigende skyldgrader", "Direkte, indirekte og tilfeldig forsett etter årsakssammenhengen"],
      explanation: "Straffeloven § 22 definerer tre former for forsett: hensiktsforsett, sannsynlighetsforsett og dolus eventualis (eventuelt forsett).",
    },
    {
      question: "Hva er hensiktsforsett?",
      options: ["Gjerningspersonen handler med hensikt om å oppfylle gjerningsbeskrivelsen", "Gjerningspersonen aksepterer bare muligheten for følgen", "Gjerningspersonen opptrer uaktsomt uten å ville følgen", "Gjerningspersonen vet ikke selv hva han faktisk gjør"],
      explanation: "Hensiktsforsett betyr at gjerningspersonen handler med hensikt – følgen (lovbruddet) er nettopp det gjerningspersonen ønsker å oppnå.",
    },
    {
      question: "Hva er sannsynlighetsforsett?",
      options: ["Gjerningspersonen holder det for sikkert eller mest sannsynlig at handlingen oppfyller gjerningsbeskrivelsen", "Gjerningspersonen ønsker og tilstreber uttrykkelig at resultatet skal inntreffe", "Gjerningspersonen er helt uvitende om at handlingen kan oppfylle beskrivelsen", "Gjerningspersonen handler i søvne uten bevisst kontroll over handlingen sin"],
      explanation: "Sannsynlighetsforsett foreligger når gjerningspersonen anser det som mer enn 50 % sannsynlig at handlingen vil oppfylle gjerningsbeskrivelsen.",
    },
    {
      question: "Hva er uaktsomhet etter straffeloven § 23?",
      options: ["Gjerningspersonen handler i strid med hva en alminnelig fornuftig person ville gjort", "Gjerningspersonen handler med vilje og ønsker uttrykkelig følgen av handlingen", "Gjerningspersonen er psykotisk og dermed utilregnelig på handlingstidspunktet", "Gjerningspersonen holder det for mest sannsynlig at resultatet vil inntreffe"],
      explanation: "Uaktsomhet foreligger når gjerningspersonen handler i strid med hva en alminnelig fornuftig person ville gjort i tilsvarende situasjon. Uaktsomhet er en lavere skyldgrad enn forsett.",
    },
    {
      question: "Hvilken skyldgrad er mest klanderverdig?",
      options: ["Hensiktsforsett", "Simpel uaktsomhet", "Grov uaktsomhet", "Dolus eventualis"],
      explanation: "Hensiktsforsett er den mest klanderverdige skyldgraden (f.eks. planlagt drap), mens simpel uaktsomhet er minst klanderverdig.",
    },
  ],
  "rettslaere-1-4-4": [
    {
      question: "Hva er straffrihetsgrunner?",
      options: ["Omstendigheter som gjør at en ellers straffbar handling blir lovlig eller straffri", "Regler om hvordan man riktig anmelder et lovbrudd til politiet", "Krav som stilles til politiets etterforskning av en straffesak", "Omstendigheter som gir grunnlag for å skjerpe og øke straffen"],
      explanation: "Straffrihetsgrunner er omstendigheter som gjør at en ellers straffbar handling blir lovlig eller straffri, selv om alle straffbarhetsvilkårene er oppfylt.",
    },
    {
      question: "Hva tillater nødrett etter straffeloven § 17?",
      options: ["En straffbar handling som er nødvendig for å avverge en fare, når skaderisikoen er klart mindre enn faren", "Å bryte loven helt uten noen grunn, så lenge ingen faktisk blir skadet av det", "Å straffe andre personer på egen hånd når rettsvesenet ikke har grepet inn", "Enhver handling man selv ønsker å utføre, uavhengig av situasjonens fare"],
      explanation: "Nødrett (§ 17) tillater en straffbar handling som er nødvendig for å avverge en fare, forutsatt at handlingens skaderisiko er klart mindre enn faren som truer.",
    },
    {
      question: "Hva tillater nødverge etter straffeloven § 18?",
      options: ["Forsvar mot et ulovlig angrep, så lenge forsvaret ikke er åpenbart uforsvarlig", "Å skade hvem som helst så lenge man selv følte seg truet der og da", "Hevn i etterkant av et lovlig angrep som allerede er avsluttet", "Angrep på naboen når man mener seg provosert av vedkommende"],
      explanation: "Nødverge (§ 18) tillater forsvar mot et ulovlig angrep, forutsatt at handlingen ikke går lenger enn nødvendig og ikke er åpenbart uforsvarlig.",
    },
    {
      question: "Hva er forskjellen mellom nødrett og nødverge?",
      options: ["Nødverge gjelder forsvar mot ulovlige angrep, nødrett gjelder farer generelt", "Nødverge gjelder bare når politiet forsvarer seg mot angrep i tjeneste", "Nødrett gjelder bare handlinger begått av innsatte inne i fengsel", "Det er ingen reell forskjell; begrepene brukes helt om hverandre"],
      explanation: "Nødverge gjelder forsvar mot ulovlige angrep og har et mildere forholdsmessighetskrav. Nødrett gjelder alle typer fare (naturfare, sykdom, ulykker).",
    },
    {
      question: "Hva skjer ved overskridelse av nødverge på grunn av frykt eller opphisselse?",
      options: ["Gjerningspersonen kan likevel frifinnes", "Gjerningspersonen får alltid streng straff", "Saken avvises automatisk", "Det får ingen betydning"],
      explanation: "Etter straffeloven § 18 andre ledd kan gjerningspersonen frifinnes dersom overskridelsen skyldes frykt, opphisselse eller forvirring som følge av angrepet.",
    },
  ],
  "rettslaere-1-4-5": [
    {
      question: "Hva er den mest inngripende ordinære straffereaksjonen?",
      options: ["Fengsel", "Bot", "Samfunnsstraff", "Påtaleunnlatelse"],
      explanation: "Fengsel er frihetsberøvelse og den mest inngripende straffereaksjonen. Forvaring er enda strengere, men er en tidsubestemt særreaksjon.",
    },
    {
      question: "Hva er forskjellen mellom ubetinget og betinget fengsel?",
      options: ["Ved ubetinget fengsel må den domfelte sone, ved betinget slipper han hvis vilkår overholdes", "Det er ingen praktisk forskjell; begge betyr soning i fengsel", "Betinget fengsel er strengere fordi soningen alltid er lengre", "Ubetinget fengsel gjelder bare når straffen består av en bot"],
      explanation: "Ved ubetinget fengsel må den domfelte sone i fengsel. Ved betinget fengsel slipper den domfelte å sone dersom vedkommende overholder fastsatte vilkår i en prøvetid.",
    },
    {
      question: "Hva er den vanligste straffereaksjonen i norsk rett?",
      options: ["Bot", "Fengsel", "Forvaring", "Samfunnsstraff"],
      explanation: "Bot er den vanligste straffereaksjonen og brukes ved mindre alvorlige lovbrudd som trafikkforseelser og mindre tyverier. Botens størrelse tilpasses gjerningspersonens økonomi.",
    },
    {
      question: "Hva innebærer samfunnsstraff?",
      options: ["Ulønnet samfunnsnyttig arbeid i stedet for fengsel", "Tidsubestemt fengsel", "En vesentlig høyere bot som må betales i stedet for soning", "Utvisning fra landet med varig innreiseforbud etter soning"],
      explanation: "Samfunnsstraff innebærer at den domfelte utfører ulønnet samfunnsnyttig arbeid i frihet i stedet for å sone i fengsel. Lovbryteren må samtykke.",
    },
    {
      question: "Hva kjennetegner forvaring?",
      options: ["Det er en tidsubestemt frihetsstraff for de farligste lovbryterne", "Det gjelder bare unge under 18 år ved alvorlige lovbrudd", "Det er en mild bot som ilegges førstegangslovbrytere", "Det er ulønnet samfunnsnyttig arbeid utført i frihet"],
      explanation: "Forvaring er en tidsubestemt frihetsstraff som idømmes når en tidsbestemt straff ikke anses tilstrekkelig for å beskytte samfunnet mot gjentakelsesfare ved alvorlige forbrytelser.",
    },
  ],
  "rettslaere-1-4-6": [
    {
      question: "Hva er den kriminelle lavalderen i Norge?",
      options: ["15 år", "18 år", "14 år", "13 år"],
      explanation: "Den kriminelle lavalderen er 15 år (straffeloven § 20 bokstav a). En person under 15 år kan ikke straffes, uansett hvor alvorlig lovbruddet er.",
    },
    {
      question: "Hva skjer med barn under 15 år som begår alvorlige lovbrudd?",
      options: ["Barnevernet kan gripe inn med hjelpetiltak eller tvangstiltak", "De settes alltid i fengsel", "De utvises fra landet sammen med foreldrene sine som en reaksjon", "De settes alltid i ungdomsfengsel uansett hvor alvorlig lovbruddet er"],
      explanation: "Selv om barn under 15 år ikke kan straffes, kan barnevernet gripe inn med hjelpetiltak eller tvangstiltak. Strafferettslig alder er et absolutt vilkår.",
    },
    {
      question: "For hvilken aldersgruppe gjelder ungdomsstraff?",
      options: ["Unge mellom 15 og 18 år", "Barn under 15 år", "Alle over 18 år", "Bare førstegangslovbrytere over 21"],
      explanation: "Ungdomsstraff er en egen straffereaksjon for unge lovbrytere mellom 15 og 18 år på gjerningstidspunktet, innført i 2014 som alternativ til fengsel.",
    },
    {
      question: "Når kan unge under 18 år idømmes ubetinget fengsel?",
      options: ["Bare når det er «særlig påkrevd»","Bare ved første lovbrudd","Alltid ved tyveri uansett verdi","Bare med foreldrenes samtykke"],
      explanation: "Etter straffeloven § 33 kan den som var under 18 år bare idømmes fengselsstraff når det er «særlig påkrevd», fordi fengsel kan være skadelig for utviklingen.",
    },
    {
      question: "Hvilket prinsipp bygger ungdomsstraffen på?",
      options: ["Gjenopprettende rett (restorative justice)","Rask straffesaksbehandling for lovbrytere under 18 år","Streng gjengjeldelse som skal svare til lovbruddets alvor","Maksimal frihetsberøvelse for å beskytte samfunnet best mulig"],
      explanation: "Ungdomsstraffen bygger på prinsippet om restorative justice (gjenopprettende rett), der fokuset er på å reparere skaden lovbruddet har forårsaket.",
    },
  ],
  "rettslaere-1-4-7": [
    {
      question: "Hva er kriminologi?",
      options: ["Vitenskapen om kriminalitetens årsaker, omfang og forebygging", "Læren om hvordan man straffer lovbrytere så hardt som mulig", "En politimetode for å etterforske og oppklare kriminalsaker", "En egen type domstol som behandler alvorlige straffesaker"],
      explanation: "Kriminologi er vitenskapen om kriminalitetens årsaker, omfang og forebygging. Kriminologer skiller mellom individuelle, sosiale og strukturelle årsaker.",
    },
    {
      question: "Hva sier stemplingsteorien (Howard Becker)?",
      options: ["Kriminalitet forsterkes av at samfunnet stempler lovbrytere som «kriminelle»", "Streng straff virker alltid avskrekkende og hindrer nye lovbrudd", "Kriminalitet skyldes bare arvelige gener hos lovbryteren selv", "Kriminalitet kan ikke forklares vitenskapelig av forskningen"],
      explanation: "Stemplingsteorien hevder at kriminalitet forsterkes når samfunnet stempler lovbrytere som «kriminelle» – det kan bli en selvoppfyllende profeti.",
    },
    {
      question: "Hva har forskning vist om allmennprevensjon?",
      options: ["Oppdagelsesrisiko har større preventiv effekt enn straffens strenghet", "Strengere straff virker alltid best og gir størst preventiv effekt", "Straff har ingen målbar virkning på omfanget av kriminaliteten", "Bare bøter virker preventivt, mens fengsel er helt uten effekt"],
      explanation: "Forskning viser at oppdagelsesrisiko (risikoen for å bli tatt) har større preventiv effekt enn straffens strenghet. Folk avskrekkes mer av høy risiko for å bli tatt.",
    },
    {
      question: "Hva betyr rehabilitering i strafferettslig sammenheng?",
      options: ["Å hjelpe den domfelte tilbake til et lovlydig liv etter soning", "Å utvise lovbrytere fra landet etter at soningen er avsluttet", "Å idømme strengere straff for å avskrekke fra nye lovbrudd", "Å bygge flere fengselsplasser for å romme alle de domfelte"],
      explanation: "Rehabilitering betyr å hjelpe den domfelte tilbake til et lovlydig liv etter endt soning, gjennom utdanning, arbeidstrening og andre tiltak.",
    },
    {
      question: "Hva innebærer normalitetsprinsippet i norsk straffegjennomføring?",
      options: ["Livet under soning skal likne livet utenfor så langt som mulig", "Alle domfelte skal sone på samme sted uansett type lovbrudd", "Innsatte skal isoleres helt fra omverdenen gjennom hele soningen", "Soningen skal gjøres mest mulig ubehagelig for å virke avskrekkende"],
      explanation: "Normalitetsprinsippet innebærer at livet under soning skal likne livet utenfor så langt som mulig – med arbeid, skole, sosiale relasjoner og helsetjenester.",
    },
  ],
  "rettslaere-1-5-1": [
    {
      question: "Hvilken lov regulerer arbeidsforholdet i Norge?",
      options: ["Arbeidsmiljøloven","Straffeloven om lovbrudd","Kjøpsloven om kjøp av varer","Avtaleloven om avtaleinngåelse"],
      explanation: "Arbeidsmiljøloven (lov 17. juni 2005 nr. 62) regulerer arbeidsmiljø, arbeidstid og stillingsvern i norske arbeidsforhold.",
    },
    {
      question: "Hva kjennetegner en arbeidstaker i motsetning til en oppdragstaker?",
      options: ["Arbeidstakeren stiller sin arbeidskraft til disposisjon under arbeidsgiverens ledelse og kontroll", "Arbeidstakeren bærer selv all den økonomiske risikoen for resultatet av arbeidet", "Arbeidstakeren får betalt et fast beløp per fullført oppdrag, ikke løpende lønn", "Arbeidstakeren bruker sitt eget verktøy og utstyr og holder egne driftsmidler"],
      explanation: "En arbeidstaker stiller sin arbeidskraft til disposisjon for arbeidsgiveren og er underlagt arbeidsgiverens ledelse og kontroll (styringsretten). En oppdragstaker arbeider for egen regning og risiko.",
    },
    {
      question: "Er det krav om skriftlig arbeidsavtale?",
      options: ["Ja, i alle arbeidsforhold (aml. § 14-5)","Nei, en muntlig avtale holder alltid","Bare for ledere og nøkkelpersoner","Bare ved fast ansettelse"],
      explanation: "Det skal inngås skriftlig arbeidsavtale i alle arbeidsforhold, uavhengig av om stillingen er fast eller midlertidig, heltid eller deltid (aml. § 14-5).",
    },
    {
      question: "Hva er hovedregelen for ansettelse etter arbeidsmiljøloven?",
      options: ["Fast ansettelse", "Midlertidig ansettelse", "Vikariat", "Prøvetid uten avtale"],
      explanation: "Hovedregelen er at arbeidstaker skal ansettes fast (aml. § 14-9 første ledd). Midlertidig ansettelse er bare tillatt i bestemte tilfeller.",
    },
    {
      question: "Når skal den skriftlige arbeidsavtalen senest foreligge i arbeidsforhold over én måned?",
      options: ["Senest sju dager etter at arbeidsforholdet begynte", "Senest ett år etter at arbeidsforholdet startet", "Senest tre måneder etter arbeidsstart begynte", "Den trengs aldri i så korte arbeidsforhold"],
      explanation: "Etter lovendringen i 2024 skal avtalen foreligge snarest mulig og senest sju dager etter at arbeidsforholdet begynte.",
    },
  ],
  "rettslaere-1-5-2": [
    {
      question: "Hva er den alminnelige arbeidstiden etter arbeidsmiljøloven § 10-4?",
      options: ["Maksimalt 9 timer per dag og 40 timer per uke", "Maksimalt 12 timer per dag og 50 timer per uke", "Maksimalt 6 timer per dag og 30 timer per uke", "Det finnes ingen grense"],
      explanation: "Alminnelig arbeidstid er maksimalt 9 timer i løpet av 24 timer og 40 timer i løpet av 7 dager. De fleste tariffavtaler har 37,5 timer per uke.",
    },
    {
      question: "Hva er minste overtidstillegg etter arbeidsmiljøloven?",
      options: ["40 prosent av alminnelig lønn", "100 prosent av lønnen", "10 prosent av lønnen", "20 prosent av lønnen"],
      explanation: "Overtidstillegget er minst 40 prosent av alminnelig lønn. Overtid skal bare brukes ved særlig og tidsavgrenset behov.",
    },
    {
      question: "Hva regnes som nattarbeid etter arbeidsmiljøloven § 10-11?",
      options: ["Arbeid mellom kl. 21.00 og kl. 06.00", "Arbeid mellom kl. 18.00 og kl. 08.00", "Arbeid mellom kl. 24.00 og kl. 04.00", "Alt arbeid etter kl. 16.00"],
      explanation: "Arbeid mellom kl. 21.00 og kl. 06.00 er nattarbeid og er som hovedregel ikke tillatt, med visse unntak (sykehus, politi, hoteller mv.).",
    },
    {
      question: "Hvor mange virkedager ferie har alle arbeidstakere rett til etter ferieloven?",
      options: ["25 virkedager (4 uker og 1 dag)","20 virkedager, altså fire fulle uker","30 virkedager, altså fem fulle uker","15 virkedager, altså tre fulle uker"],
      explanation: "Alle arbeidstakere har rett til 25 virkedager (4 uker og 1 dag) ferie per år (ferieloven § 5). Arbeidstakere over 60 år har en ekstra uke.",
    },
    {
      question: "I hvilken periode kan arbeidstakeren kreve å få hovedferien (3 uker)?",
      options: ["1. juni–30. september","1. januar–1. mars om vinteren","Når som helst hele året rundt","Bare i romjulen i desember"],
      explanation: "Arbeidstakeren kan kreve at hovedferien (18 virkedager / 3 uker) gis i perioden 1. juni–30. september, jf. ferieloven § 7.",
    },
  ],
  "rettslaere-1-5-3": [
    {
      question: "Hva kreves for at en arbeidstaker kan sies opp etter aml. § 15-7?",
      options: ["Saklig grunn i virksomhetens, arbeidsgiverens eller arbeidstakerens forhold", "At arbeidsgiver er i dårlig humør", "At virksomheten kan dokumentere økonomisk underskudd i minst tre sammenhengende regnskapsår", "Skriftlig samtykke fra tillitsvalgt og bekreftelse fra Arbeidstilsynet om at behovet foreligger"],
      explanation: "Saklighetskravet (aml. § 15-7) innebærer at arbeidstaker ikke kan sies opp uten at det er saklig begrunnet i virksomhetens, arbeidsgiverens eller arbeidstakerens forhold.",
    },
    {
      question: "Hva er forskjellen mellom oppsigelse og avskjed?",
      options: ["Ved oppsigelse løper en oppsigelsestid, ved avskjed må arbeidstakeren fratre umiddelbart", "Oppsigelse betyr at man fratrer på dagen", "Ved oppsigelse må arbeidsgiver betale sluttvederlag, mens avskjed alltid gis uten noen form for økonomisk kompensasjon", "Ved oppsigelse kreves det grovt pliktbrudd, mens avskjed kan gis av rene driftsmessige og økonomiske hensyn i virksomheten"],
      explanation: "Ved oppsigelse fortsetter arbeidsforholdet i oppsigelsestiden. Ved avskjed må arbeidstakeren fratre umiddelbart, uten oppsigelsestid.",
    },
    {
      question: "Hva kreves for avskjed etter aml. § 15-14?",
      options: ["Grovt pliktbrudd eller annet vesentlig mislighold av arbeidsavtalen", "Sviktende økonomi i bedriften", "At arbeidstakeren gjentatte ganger har kommet noen minutter for sent til arbeidstidens fastsatte oppmøte", "At virksomheten omorganiseres og arbeidsgiver har saklig behov for å redusere antallet ansatte i avdelingen"],
      explanation: "Avskjed kan bare gis dersom arbeidstakeren har gjort seg skyldig i grovt pliktbrudd eller annet vesentlig mislighold. Terskelen er høy.",
    },
    {
      question: "Hva er minste gjensidige oppsigelsestid som hovedregel?",
      options: ["Én måned","En hel uke","Tre måneder","Seks måneder"],
      explanation: "Hovedregelen er minst én måned gjensidig oppsigelsestid (aml. § 15-3). Fristene øker med ansiennitet og alder.",
    },
    {
      question: "Hvilke krav stiller arbeidsmiljøloven § 15-4 til en oppsigelse fra arbeidsgiver?",
      options: ["Den skal være skriftlig og inneholde opplysninger om arbeidstakerens rettigheter", "Den må godkjennes av domstolen", "Den må sendes til Arbeidstilsynet for forhåndsgodkjenning før den kan overleveres til den berørte arbeidstakeren", "Den skal kunngjøres offentlig i Norsk lysingsblad slik at eventuelle kreditorer og andre parter gjøres kjent med den"],
      explanation: "Oppsigelsen skal være skriftlig og inneholde opplysninger om retten til å kreve forhandlinger, reise søksmål og stå i stillingen, samt fristene (aml. § 15-4).",
    },
  ],
  "rettslaere-1-5-4": [
    {
      question: "Hva står HMS for?",
      options: ["Helse, miljø og sikkerhet", "Hus, marked og salg", "Handel, midler og service", "Hjelp, mekling og støtte"],
      explanation: "HMS står for helse, miljø og sikkerhet – et samlebegrep for det systematiske arbeidet med å forebygge skader, sykdom og belastninger på arbeidsplassen.",
    },
    {
      question: "Hvilken standard skal arbeidsmiljøet oppfylle etter aml. § 4-1?",
      options: ["Det skal være «fullt forsvarlig»","Det skal være billigst mulig for bedriften","Det skal være maksimalt produktivt","Det stilles ingen krav til arbeidsmiljøet"],
      explanation: "Arbeidsmiljøet skal være «fullt forsvarlig» (aml. § 4-1) – en dynamisk standard som utvikler seg med ny kunnskap og teknologi.",
    },
    {
      question: "Når skal en virksomhet ha verneombud?",
      options: ["Når den har 5 eller flere arbeidstakere", "Bare hvis den har over 100 ansatte", "Bare når virksomheten har mer enn 100 ansatte fordelt på flere geografiske avdelinger og skift", "Bare i industribedrifter"],
      explanation: "Alle virksomheter med 5 eller flere arbeidstakere skal ha verneombud (aml. § 6-1), valgt av og blant arbeidstakerne.",
    },
    {
      question: "Hvem er statens tilsynsmyndighet for arbeidsmiljø?",
      options: ["Arbeidstilsynet","Datatilsynet for personvern","Forbrukertilsynet","Politiet i det enkelte distrikt"],
      explanation: "Arbeidstilsynet er statens tilsynsmyndighet for arbeidsmiljø (aml. § 18-1). De kan gjennomføre inspeksjoner og gi pålegg, tvangsmulkt mv.",
    },
    {
      question: "Hva omfatter kravene til arbeidsmiljøet?",
      options: ["Både det fysiske og det psykososiale arbeidsmiljøet", "Bare det fysiske arbeidsmiljøet", "Bare lønnsnivået og reguleringen av årlige lønnstillegg som avtales mellom partene i arbeidslivet", "Bare arbeidstiden"],
      explanation: "Arbeidsmiljøloven stiller krav til både det fysiske (støy, kjemikalier, sikkerhet) og det psykososiale arbeidsmiljøet (trakassering, stress, mobbing).",
    },
  ],
  "rettslaere-1-5-5": [
    {
      question: "Hva er alderskravet for å inngå ekteskap i Norge?",
      options: ["Begge parter må være fylt 18 år", "Det er ingen aldersgrense", "Begge parter må ha fylt 16 år, forutsatt at foreldrene gir sitt skriftlige samtykke til inngåelsen", "Begge må være fylt 16 år"],
      explanation: "Begge parter må være fylt 18 år (el. § 1a). Muligheten for dispensasjon ble fjernet i 2018 for å hindre barneekteskap.",
    },
    {
      question: "Hva er lovens normalordning for formuesforhold mellom ektefeller?",
      options: ["Felleseie med likedeling ved ekteskapets opphør", "Ingen formuesordning", "Sameie i alle eiendeler med en halvpart hver, uansett hvem som opprinnelig ervervet dem", "At den ene eier alt"],
      explanation: "Lovens normalordning er felleseie. Ved ekteskapets opphør skal nettoverdiene deles likt (likedeling), med mindre noe annet er avtalt.",
    },
    {
      question: "Hva er en ektepakt?",
      options: ["En avtale mellom ektefeller om formuesordningen","En skilsmissesøknad","En leiekontrakt om felles bolig","En avtale om samboerskap"],
      explanation: "En ektepakt er en avtale mellom ektefeller om formuesordningen, f.eks. om særeie. Den må være skriftlig, signert av begge og tinglyses.",
    },
    {
      question: "Hvor lenge må man ha vært separert før man kan kreve skilsmisse?",
      options: ["Ett år", "Tre måneder", "Fem år", "Umiddelbart"],
      explanation: "Etter ett års separasjonstid kan hver ektefelle kreve skilsmisse (el. § 21). Ved samlivsbrudd i minst to år kan skilsmisse kreves uten forutgående separasjon.",
    },
    {
      question: "Hva gir skjevdelingsregelen (el. § 59) rett til?",
      options: ["Å holde utenfor delingen verdier som stammer fra før ekteskapet eller fra arv/gave", "Dobbelt så mye som den andre", "Å overta alt den andre ektefellen eier, som kompensasjon for større bidrag i hjemmet under ekteskapet", "Å kreve dobbelt så stor andel av felleseiet som den andre ektefellen ved oppgjøret etter samlivsbruddet"],
      explanation: "Skjevdeling (el. § 59) gir rett til å holde utenfor delingen verdier som kan føres tilbake til midler en ektefelle hadde før ekteskapet, eller som er mottatt som arv eller gave.",
    },
  ],
  "rettslaere-1-5-6": [
    {
      question: "Finnes det en egen samboerlov i Norge?",
      options: ["Nei, samboeres rettigheter er spredt i ulike lover","Ja, den er lik ekteskapsloven","Ja, og den gir samboere ektefellers rettigheter","Nei, samboerskap er ulovlig"],
      explanation: "Det finnes ingen egen samboerlov i Norge. Samboeres rettigheter er spredt i ulike lover og er vesentlig svakere enn ektefellers.",
    },
    {
      question: "Hva skjer med formuen ved samlivsbrudd mellom samboere?",
      options: ["Hver beholder sin formue – det er ingen automatisk deling", "Alt deles likt som ved ekteskap", "Den samboeren som står som formell eier av boligen overtar hele den felles formuen ved bruddet", "Staten overtar formuen"],
      explanation: "Samboere har ikke felleseie. Ved samlivsbrudd beholder hver sin formue, men sameierett kan oppstå gjennom direkte eller indirekte bidrag.",
    },
    {
      question: "Hvilke samboere har en begrenset lovfestet arverett?",
      options: ["Samboere med felles barn","Alle samboere uten unntak","Ingen samboere i det hele tatt","Bare samboere som har bodd sammen i 20 år"],
      explanation: "Samboere med felles barn har rett til arv tilsvarende 4G og begrenset uskifterett. Samboere uten felles barn har ingen lovfestet arverett.",
    },
    {
      question: "Hvorfor er det viktig for samboere å inngå en samboerkontrakt?",
      options: ["Fordi lovgivningen gir samboere svak rettslig beskyttelse", "Fordi det erstatter folkeregistrering", "Fordi kontrakten trer i stedet for melding til folkeregisteret om at partene er blitt samboere", "Fordi det gir skattefritak"],
      explanation: "Fordi lovgivningen gir samboere svak rettslig beskyttelse, er det viktig å inngå en skriftlig samboerkontrakt som regulerer eierforhold, utgiftsfordeling og verdifordeling ved brudd.",
    },
    {
      question: "Hvilken lov gir samboere begrenset rett til å overta felles bolig ved samlivsbrudd?",
      options: ["Husstandsfellesskapsloven", "Ekteskapsloven", "Arveloven, ettersom retten til å overta felles bolig ved samlivsbrudd følger reglene om uskiftet bo", "Avtaleloven"],
      explanation: "Husstandsfellesskapsloven gir begrenset rett til å overta felles bolig ved samlivsbrudd dersom «sterke grunner» taler for det.",
    },
  ],
  "rettslaere-1-5-7": [
    {
      question: "Hvem utgjør første arveklasse etter arveloven?",
      options: ["Avdødes livsarvinger (barn, barnebarn osv.)","Avdødes ektefelle alene","Avdødes søsken og deres barn","Avdødes foreldre og deres arvinger"],
      explanation: "Første arveklasse er avdødes livsarvinger (barn, barnebarn, oldebarn). Barna arver likt, og er et barn dødt, trer barnets barn inn (istedenprinsippet).",
    },
    {
      question: "Hvor stor er pliktdelsarven etter arveloven § 50?",
      options: ["2/3 av arven, begrenset til 15 G per barnelinje","Hele arven, uten noe tak","Halvparten av arven, med et tak på 10 G","1/4 av arven, uten noe beløpstak"],
      explanation: "Pliktdelen utgjør 2/3 av arven etter arvelateren, begrenset oppad til 15 G (ca. 1,86 mill. kr i 2024) per barnelinje. Den nye arveloven hevet beløpsgrensen fra den gamle på 1 million.",
    },
    {
      question: "Hva er formkravet til et gyldig testament etter arveloven § 42?",
      options: ["Skriftlig, underskrevet av arvelater og bevitnet av to habile vitner", "Bare arvelaterens underskrift", "Bare arvelaterens egenhendige underskrift, uten krav om vitner så lenge dokumentet er datert og signert", "En muntlig erklæring avgitt overfor to vitner, forutsatt at arvelateren er myndig og ved sans og samling"],
      explanation: "Testamentet må være skriftlig, underskrevet av arvelateren, og to vitner som er til stede sammen må bevitne underskriften. Vitnene må være habile.",
    },
    {
      question: "Hva innebærer uskiftet bo?",
      options: ["Gjenlevende ektefelle overtar avdødes formue uten å gjøre opp arven med øvrige arvinger","At arvingene må skifte boet straks, og at gjenlevende ektefelle bare får sin egen andel utbetalt","At all gjeld i boet automatisk slettes, slik at gjenlevende ektefelle overtar eiendelene helt gjeldfritt","At staten midlertidig overtar hele boet inntil arvingene er blitt enige om hvordan verdiene skal fordeles"],
      explanation: "Uskiftet bo innebærer at gjenlevende ektefelle overtar avdødes formue uten å gjøre opp arven. Oppgjøret utsettes til gjenlevende dør eller ønsker å skifte.",
    },
    {
      question: "Hva kreves for å sitte i uskiftet bo overfor avdødes særkullsbarn?",
      options: ["Samtykke fra særkullsbarna", "Ingenting – det er en automatisk rett", "Godkjenning fra retten alene", "At særkullsbarna er under 18 år"],
      explanation: "Overfor avdødes særkullsbarn (barn fra et tidligere forhold) kreves samtykke (arveloven § 16). Overfor felles barn trengs ikke samtykke.",
    },
  ],
  "rettslaere-1-5-8": [
    {
      question: "Hva er barnerettens grunnprinsipp?",
      options: ["Barnets beste skal være et grunnleggende hensyn","Barn har ingen rettigheter","At foreldrene fritt bestemmer alt om barnet","Domstolen avgjør alle spørsmål om barn"],
      explanation: "Barnerettens grunnprinsipp er at barnets beste skal være et grunnleggende hensyn i alle avgjørelser som berører barnet, forankret i barnekonvensjonen art. 3 og Grunnloven § 104.",
    },
    {
      question: "Hvem har felles foreldreansvar automatisk?",
      options: ["Gifte og samboende foreldre", "Besteforeldrene", "Bare faren, forutsatt at farskapet er formelt erkjent og registrert i folkeregisteret etter fødselen", "Bare moren"],
      explanation: "Gifte foreldre (§ 34) og samboende foreldre (§ 35) har felles foreldreansvar automatisk. Bor foreldrene ikke sammen ved fødselen, har moren foreldreansvaret alene.",
    },
    {
      question: "Hva innebærer foreldreansvar?",
      options: ["Rett og plikt til å ta avgjørelser for barnet i personlige spørsmål","Bare en plikt til å møte i foreldresamtaler og følge opp skolegangen til barnet","Bare en plikt til å betale barnebidrag hver måned inntil barnet fyller 18 år eller avslutter utdanningen","Bare retten til samvær med barnet i helger og ferier når foreldrene ikke lenger bor sammen etter et brudd"],
      explanation: "Foreldreansvar innebærer en rett og plikt til å ta avgjørelser for barnet i personlige spørsmål som bosted, utdanning, helse og religion, innenfor barnets medbestemmelsesrett.",
    },
    {
      question: "Hvilken lov regulerer det offentliges ansvar for å beskytte barn mot omsorgssvikt?",
      options: ["Barnevernsloven", "Straffeloven", "Straffeloven, ettersom omsorgssvikt utelukkende håndteres gjennom straffeforfølgning av foreldrene", "Avtaleloven"],
      explanation: "Barnevernsloven (lov 18. juni 2021 nr. 97) regulerer det offentliges ansvar for å beskytte barn som utsettes for omsorgssvikt, mishandling eller andre alvorlige forhold.",
    },
    {
      question: "Hva er det minst inngripende tiltaket barnevernet kan sette inn?",
      options: ["Frivillige hjelpetiltak", "Omsorgsovertakelse", "Tvangsadopsjon", "Fratakelse av foreldreansvar"],
      explanation: "Barnevernet har en trinnvis verktøykasse. De minst inngripende tiltakene er frivillige hjelpetiltak (råd, støttekontakt, avlastning), mens omsorgsovertakelse er mer inngripende.",
    },
  ],
  "rettslaere-1-6-1": [
    {
      question: "Hva er en sivil tvist?",
      options: ["En rettslig konflikt mellom private parter om rettigheter og plikter etter privatretten", "En sak der staten anklager noen for et lovbrudd", "En sak der påtalemyndigheten på vegne av staten anklager en person for et straffbart lovbrudd", "En politisak der etterforskningen fortsatt pågår og det ennå ikke er tatt ut tiltale mot noen"],
      explanation: "En sivil tvist er en rettslig konflikt mellom private parter (personer, bedrifter) om rettigheter og plikter etter privatretten. Motsetningen er straffesaker.",
    },
    {
      question: "Hvilken lov regulerer den sivile rettsprosessen?",
      options: ["Tvisteloven","Straffeprosessloven","Avtaleloven om avtaler","Forvaltningsloven"],
      explanation: "Den sivile rettsprosessen er regulert av tvisteloven (lov 17. juni 2005 nr. 90 om mekling og rettergang i sivile tvister).",
    },
    {
      question: "Hva er forliksrådets to hovedoppgaver?",
      options: ["Å mekle mellom partene og avsi dom i saker under 200 000 kr","Å føre tilsyn med advokater og behandle klager på deres arbeid","Å etterforske straffesaker og innhente bevis før saken oversendes påtalemyndigheten for avgjørelse","Å utarbeide og vedta nye lover på områder der Stortinget har delegert myndighet til lokale organer"],
      explanation: "Forliksrådet forsøker å mekle mellom partene, og kan avsi dom i saker med tvistesum under 200 000 kr dersom mekling ikke fører frem (tvisteloven § 6-10).",
    },
    {
      question: "Hva er en stevning?",
      options: ["Prosessdokumentet som setter en sivil rettssak i gang i tingretten", "En anmeldelse til politiet", "En rettskraftig dom avsagt av Høyesterett som fastslår partenes rettigheter og plikter i tvisten", "En forskrift gitt av forvaltningen med hjemmel i lov, som utfyller de nærmere reglene på området"],
      explanation: "En stevning er prosessdokumentet som setter en sivil rettssak i gang i tingretten. Den skal inneholde påstand, faktisk og rettslig grunnlag samt bevisene (tvisteloven § 9-2).",
    },
    {
      question: "Hvilket prinsipp innebærer at partene selv bestemmer hva saken gjelder?",
      options: ["Disposisjonsprinsippet", "Legalitetsprinsippet", "Offentlighetsprinsippet", "Uskyldspresumsjonen"],
      explanation: "Den sivile prosessen følger disposisjonsprinsippet: partene bestemmer selv hva saken gjelder, hvilke krav som fremmes og hvilke bevis som føres.",
    },
  ],
  "rettslaere-1-6-2": [
    {
      question: "Hvilken lov regulerer straffeprosessen?",
      options: ["Straffeprosessloven", "Straffeloven", "Tvisteloven, som regulerer rettergangsmåten i både sivile tvister og straffesaker for domstolene", "Tvisteloven"],
      explanation: "Straffeprosessen er regulert av straffeprosessloven (lov 22. mai 1981 nr. 25 om rettergangsmåten i straffesaker).",
    },
    {
      question: "Hva er etterforskning?",
      options: ["Politiets arbeid med å kartlegge lovbrudd, finne ansvarlig og sikre bevis", "En anke til Høyesterett", "Domstolens avgjørelse av skyldspørsmålet etter at bevisene er lagt frem under hovedforhandlingen", "Et forsvarsskrift der den tiltaltes advokat imøtegår tiltalen og legger frem bevis til fordel for klienten"],
      explanation: "Etterforskning er politiets arbeid med å kartlegge om det er begått en straffbar handling, hvem som er ansvarlig, og å sikre bevis (strpl. kap. 18).",
    },
    {
      question: "Hvilken rettighet har en mistenkt under etterforskning?",
      options: ["Rett til å forholde seg taus", "Plikt til å forklare seg", "Plikt til å bevise sin uskyld", "Plikt til å anmelde seg selv"],
      explanation: "Mistenkte har rett til å forholde seg taus (strpl. § 232) og rett til forsvarer (strpl. § 94). Mistenkte har ingen plikt til å forklare seg for politiet.",
    },
    {
      question: "Hvem tar påtaleavgjørelsen om en straffesak skal til retten?",
      options: ["Påtalemyndigheten (statsadvokaten eller politijuristen)", "Den fornærmede", "Den fornærmede i saken, som selv avgjør om forholdet skal bringes inn for domstolen til pådømmelse", "Forsvareren"],
      explanation: "Det er påtalemyndigheten (statsadvokaten eller politijuristen) som tar påtaleavgjørelsen – om det skal reises tiltale, utferdiges forelegg eller gis påtaleunnlatelse.",
    },
    {
      question: "Hvem er øverste leder av påtalemyndigheten i Norge?",
      options: ["Riksadvokaten", "Justisministeren", "Høyesterettsjustitiarius", "Politidirektøren"],
      explanation: "Riksadvokaten er øverste leder av påtalemyndigheten og tar ut tiltale i de alvorligste sakene (drap, terror) og gir retningslinjer til underordnede.",
    },
  ],
  "rettslaere-1-6-3": [
    {
      question: "Hva er prinsippet om fri bevisvurdering?",
      options: ["Dommeren vurderer fritt hvilken vekt hvert enkelt bevis skal ha","Bevis må legges fram skriftlig for retten","At partene selv bestemmer faktum retten legger til grunn","Vitnebevis har alltid forrang"],
      explanation: "Fri bevisvurdering betyr at dommeren fritt vurderer hvilken vekt hvert bevis skal ha – ingen bevistype har automatisk forrang.",
    },
    {
      question: "Hva er beviskravet i straffesaker for skyldspørsmålet?",
      options: ["Hevet over enhver rimelig tvil", "Klar sannsynlighetsovervekt", "Klar sannsynlighetsovervekt, det samme forsterkede kravet som gjelder ved særlig belastende påstander i sivile saker", "Mer enn 30 % sannsynlighet"],
      explanation: "I straffesaker er beviskravet «hevet over enhver rimelig tvil» – det strengeste kravet – fordi en uriktig domfellelse er svært alvorlig.",
    },
    {
      question: "Hvem har bevisbyrden i en straffesak?",
      options: ["Påtalemyndigheten", "Forsvareren", "Dommeren, som selv innhenter og vurderer bevisene i saken", "Tiltalte"],
      explanation: "Bevisbyrden ligger hos påtalemyndigheten. Det er staten som må bevise tiltaltes skyld – tiltalte trenger ikke bevise sin uskyld.",
    },
    {
      question: "Hva er hovedregelen for beviskrav i sivile saker?",
      options: ["Sannsynlighetsovervekt (over 50 %)", "Hevet over enhver rimelig tvil", "Full sikkerhet på 100 %, ellers kan ikke kravet føre frem", "Under 50 % sannsynlighet"],
      explanation: "Hovedregelen i sivile saker er sannsynlighetsovervekt – over 50 % sannsynlighet («mer sannsynlig enn ikke»). Ved påstand om klanderverdig atferd kan kravet skjerpes.",
    },
    {
      question: "Hvilken av disse er en bevistype i norsk rett?",
      options: ["Vitnebevis", "Påtaleunnlatelse", "Forskrift", "Forlik"],
      explanation: "Bevistyper inkluderer vitnebevis, partsforklaringer, dokumentbevis, sakkyndigbevis, tekniske bevis og reelle bevis.",
    },
  ],
  "rettslaere-1-6-4": [
    {
      question: "Hva betyr rettssikkerhet?",
      options: ["At borgeren er beskyttet mot vilkårlighet og kan forutberegne sin rettsstilling", "At staten alltid får medhold fordi den representerer fellesskapets interesser", "At enhver borger vinner sine saker for domstolene så lenge kravet er reelt", "At domstolene og forvaltningen aldri gjør feil i sine avgjørelser"],
      explanation: "Rettssikkerhet betyr at den enkelte er beskyttet mot overgrep og vilkårlighet fra myndighetene, og har mulighet til å forutberegne sin rettsstilling og forsvare sine interesser.",
    },
    {
      question: "Hva er forskjellen mellom materiell og prosessuell rettssikkerhet?",
      options: ["Materiell handler om riktige avgjørelser, prosessuell om en rettferdig prosess", "Prosessuell gjelder bare sivile saker", "Det finnes ingen reell forskjell; begrepene brukes helt om hverandre i praksis", "Prosessuell rettssikkerhet gjelder kun i sivile tvistesaker og ikke ved straff"],
      explanation: "Materiell rettssikkerhet handler om at avgjørelsene er riktige og rettferdige. Prosessuell rettssikkerhet handler om at prosessen frem til avgjørelsen er rettferdig.",
    },
    {
      question: "Hva er uskyldspresumsjonen?",
      options: ["Enhver skal anses uskyldig inntil det motsatte er bevist", "Alle anses skyldige til de beviser sin uskyld", "Bare personer med god økonomi kan regnes som uskyldige for retten", "Alle anses som skyldige inntil de selv klarer å bevise sin egen uskyld"],
      explanation: "Uskyldspresumsjonen (Grunnloven § 96, EMK art. 6 nr. 2) innebærer at enhver skal anses uskyldig inntil det motsatte er bevist. Staten har bevisbyrden i straffesaker.",
    },
    {
      question: "Hva er fri rettshjelp?",
      options: ["En statlig ordning som gir personer med lav inntekt juridisk bistand uten å betale selv", "En privat forsikringsordning der selskaper dekker advokatutgiftene mot premie", "En ordning som gir alle innbyggere gratis advokat uansett inntekt og formue", "Juridisk bistand som ytes direkte av politiet under etterforskning av saken"],
      explanation: "Fri rettshjelp er en statlig ordning (rettshjelploven) som sikrer at personer med lav inntekt og formue kan få juridisk bistand. Den har to former: fritt rettsråd og fri sakførsel.",
    },
    {
      question: "Hva dekker en rettshjelpsforsikring typisk?",
      options: ["Advokatkostnader og rettsgebyr i sivile tvister","Egenandelen ved skade på egen bolig og eget innbo","Skatter, avgifter og gebyrer den forsikrede skylder til det offentlige","Bøter og saksomkostninger den tiltalte ilegges i straffesaker for domstolene"],
      explanation: "Rettshjelpsforsikring (ofte inkludert i innbo-/villaforsikring) dekker advokatkostnader og rettsgebyr i sivile tvister som nabokonflikter og kjøpstvister, men ikke familiesaker eller straffesaker.",
    },
  ],
  "rettslaere-1-6-5": [
    {
      question: "Hva er mekling?",
      options: ["En prosess der en nøytral tredjeperson hjelper partene til en frivillig løsning", "En bindende domstolsavgjørelse som fastsetter hvem av partene som har rett", "En straffereaksjon som ilegges av påtalemyndigheten etter et lovbrudd", "En anke av saken til Høyesterett som overprøver den tidligere dommen"],
      explanation: "Mekling er en prosess der en nøytral mekler hjelper partene med å komme frem til en frivillig løsning. Mekleren har ingen myndighet til å avgjøre tvisten.",
    },
    {
      question: "Hva er voldgift?",
      options: ["En privat tvisteløsning der voldgiftsdommere avgjør saken i stedet for de ordinære domstolene", "Et møte i forliksrådet der en lekmann forsøker å megle frem en minnelig løsning", "En straffesak som avgjøres av de ordinære domstolene etter tiltale fra staten", "En form for mekling der resultatet aldri blir bindende for partene i saken"],
      explanation: "Voldgift (arbitrasjon) er en privat tvisteløsningsordning der partene avtaler at tvisten skal avgjøres av voldgiftsdommere. Voldgiftsdommen er bindende og kan fullbyrdes som en ordinær dom.",
    },
    {
      question: "Hva tilbyr konfliktrådet?",
      options: ["Gratis mekling i både sivile konflikter og straffesaker", "Bare advokattjenester", "Bare fullverdige rettssaker med dommer, prosessfullmektiger og bindende dom", "Kun ordinære advokattjenester og juridisk rådgivning mot vanlig timebetaling"],
      explanation: "Konfliktrådet er en statlig meklingstjeneste som tilbyr gratis mekling i både sivile konflikter og straffesaker, basert på gjenopprettende prosess (restorative justice).",
    },
    {
      question: "Hva er et rettsforlik?",
      options: ["Et forlik inngått i retten som har virkning som en rettskraftig dom","En helt vanlig avtale mellom partene som ikke har noen rettslig virkning","En anke over dommen til nærmeste overordnede domstol i rettssystemet","En straffedom avsagt av retten etter at tiltalte er funnet skyldig i saken"],
      explanation: "Et rettsforlik er et forlik inngått i retten eller forliksrådet (tvisteloven § 19-11). Det har virkning som en rettskraftig dom og kan tvangsfullbyrdes.",
    },
    {
      question: "Omtrent hvor stor andel av sivile saker løses gjennom forlik før dom?",
      options: ["Omtrent 90 prosent", "Omtrent 10 prosent", "Omtrent 50 prosent", "Nesten ingen"],
      explanation: "Statistikk viser at omtrent 90 prosent av alle sivile saker løses gjennom forlik før dom – på grunn av kostnader, tidsbruk og usikkerhet ved rettssak.",
    },
  ],
  "rettslaere-1-6-6": [
    {
      question: "Hvor har Den europeiske menneskerettsdomstolen (EMD) sete?",
      options: ["Strasbourg", "Haag", "Luxembourg", "Brussel"],
      explanation: "EMD har sete i Strasbourg, Frankrike. Den behandler klager fra individer som mener en medlemsstat har krenket deres rettigheter etter EMK.",
    },
    {
      question: "Hvem kan være parter i en tvist for Den internasjonale domstolen (ICJ)?",
      options: ["Bare stater", "Bare individer", "Bare bedrifter", "Bare FN-organer"],
      explanation: "Bare stater kan være parter i tvister for ICJ (Haag-domstolen), jf. ICJ-statuttene art. 34. ICJ avgjør tvister mellom stater og gir rådgivende uttalelser.",
    },
    {
      question: "Hva strafforfølger Den internasjonale straffedomstolen (ICC)?",
      options: ["Enkeltpersoner for folkemord, krigsforbrytelser og forbrytelser mot menneskeheten", "Stater som helhet for brudd på folkeretten og inngåtte internasjonale avtaler", "Enkeltindivider for alminnelige tyverier og vinningsforbrytelser i hjemlandet", "Store selskaper og bedrifter for grov skatteunndragelse over landegrensene"],
      explanation: "ICC i Haag strafforfølger enkeltpersoner for de alvorligste internasjonale forbrytelsene: folkemord, forbrytelser mot menneskeheten, krigsforbrytelser og aggresjon (Roma-vedtektene).",
    },
    {
      question: "Hvilken kjent ICJ-sak gjaldt Norges grunnlinjer langs kysten?",
      options: ["Fiskerigrensesaken (1951)", "Strand Lobben-saken", "Strand Lobben-saken, som gjaldt Norges praksis ved omsorgsovertakelse", "P-pille-dommen"],
      explanation: "I Fiskerigrensesaken (1951) ga ICJ Norge medhold i metoden for å trekke grunnlinjer langs kysten. Dommen fikk stor betydning for internasjonal havrett.",
    },
    {
      question: "Hvordan er EMK gjort gjeldende i norsk rett?",
      options: ["Inkorporert gjennom menneskerettsloven med forrang foran annen norsk lov", "Bare som veiledende prinsipp", "Den gjelder ikke direkte i Norge og må vedtas på nytt for hver enkelt sak", "Den gjelder utelukkende for utlendinger og ikke for norske statsborgere her"],
      explanation: "EMK er inkorporert i norsk rett gjennom menneskerettsloven og har forrang foran annen norsk lov ved motstrid.",
    },
  ],
  "rettslaere-1-6-7": [
    {
      question: "Hva handler rettsutvikling om?",
      options: ["Hvordan rettsreglene endrer seg over tid som følge av nye samfunnsforhold", "En politisk prosess der man over tid legger ned domstolene i distriktene", "At loven aldri endres og at rettsreglene forblir konstante gjennom alle tider", "Bygging av nye fengsler og utvidelse av soningskapasiteten i kriminalomsorgen"],
      explanation: "Rettsutvikling handler om hvordan rettsreglene endrer seg over tid som følge av samfunnsendringer, teknologisk utvikling, internasjonalisering og endrede verdier.",
    },
    {
      question: "Hva regulerer GDPR og personopplysningsloven?",
      options: ["Behandling av personopplysninger", "Fartsgrenser", "Arbeidstid, overtid og hviletidsbestemmelser i norske arbeidsforhold", "Skattesatser"],
      explanation: "GDPR (EUs personvernforordning) og personopplysningsloven (2018) regulerer behandling av personopplysninger og gir borgere rettigheter som innsyn, sletting og protest.",
    },
    {
      question: "Hva er EUs AI Act (AI-forordningen)?",
      options: ["Verdens første helhetlige AI-regulering som klassifiserer AI-systemer etter risiko", "En norsk straffelov som fastsetter reaksjoner for datakriminalitet og bedrageri", "En miljøkonvensjon om utslipp og klimatiltak vedtatt av medlemsstatene", "En internasjonal handelsavtale om toll og frihandel mellom EU-landene"],
      explanation: "EUs AI Act (vedtatt 2024) er verdens første helhetlige AI-regulering. Den klassifiserer AI-systemer etter risiko og stiller krav til transparens, sikkerhet og menneskerettskonformitet.",
    },
    {
      question: "Hvilken rettighet gir GDPR art. 22 i forbindelse med kunstig intelligens?",
      options: ["Rett til ikke å bli utsatt for rent automatiserte avgjørelser med rettsvirkning", "Rett til å bli overvåket og registrert av myndighetenes automatiske systemer", "Rett til å eie og få enerett på algoritmen som brukes til å behandle data", "Rett til gratis tilgang til offentlige AI-tjenester finansiert av staten"],
      explanation: "GDPR art. 22 gir rett til ikke å bli utsatt for rent automatiserte avgjørelser med rettsvirkning, noe som er sentralt når AI tar avgjørelser som påvirker menneskers liv.",
    },
    {
      question: "Hva viser at Grunnloven er et levende dokument?",
      options: ["Den har blitt endret over 300 ganger siden 1814","Den gjelder bare for Stortinget","Den har aldri blitt endret siden 1814","Den kan endres med simpelt flertall"],
      explanation: "Grunnloven av 1814 har blitt endret over 300 ganger og gjenspeiler samfunnsutviklingen – fra parlamentarisme og kvinnelig stemmerett til menneskerettighetskatalogen i 2014.",
    },
  ],
  "rettslaere-2-1": [
    {
      question: "Hvor mange vilkår må være oppfylt for at en handling skal være straffbar?",
      options: ["Fire", "Tre", "To vilkår, nemlig lovkravet og skyldkravet, som begge må være oppfylt", "Fem"],
      explanation: "Fire straffbarhetsbetingelser må være oppfylt: lovkravet, skyldkravet, tilregnelighet og fravær av straffrihetsgrunner.",
    },
    {
      question: "Hvilke tre grader av forsett finnes?",
      options: ["Hensiktsforsett, sannsynlighetsforsett og eventuelt forsett (dolus eventualis)", "Lett forsett, middels forsett og alvorlig forsett gradert etter straffenivå", "Direkte forsett, indirekte forsett og tilfeldig forsett etter årsakssammenheng", "Grovt forsett, simpelt forsett og bevisst forsett, avhengig av alvorlighet"],
      explanation: "De tre gradene av forsett er hensiktsforsett (resultatet var tilsiktet), sannsynlighetsforsett (resultatet ble ansett som sannsynlig) og eventuelt forsett (dolus eventualis).",
    },
    {
      question: "Når er forsøk straffbart etter straffeloven § 16?",
      options: ["Når noen har forsett om å fullbyrde et lovbrudd og foretar noe som leder direkte mot utføringen", "Bare når selve lovbruddet faktisk er fullbyrdet og skaden allerede har inntruffet", "Aldri, ettersom kun fullbyrdede lovbrudd kan medføre straff etter straffeloven", "Utelukkende ved drap og enkelte andre særlig alvorlige forbrytelser mot livet"],
      explanation: "Forsøk er straffbart når gjerningspersonen har forsett om å begå lovbruddet og foretar en handling som leder direkte mot fullbyrdelsen, men lovbruddet ikke fullbyrdes.",
    },
    {
      question: "Hva er straffri tilbaketreden fra forsøk?",
      options: ["Når gjerningspersonen frivillig avstår fra å fullbyrde lovbruddet eller avverger det", "Når lovbruddet mislykkes av seg selv fordi handlingen viser seg umulig å utføre", "Når gjerningspersonen blir pågrepet og dermed hindret i å fullføre handlingen", "Når politiet griper inn og fysisk stanser lovbruddet før det blir fullbyrdet"],
      explanation: "Straffri tilbaketreden foreligger dersom gjerningspersonen frivillig avstår fra å fullbyrde lovbruddet eller avverger at det blir fullbyrdet.",
    },
    {
      question: "Hvilken av disse er en formildende omstendighet ved straffeutmåling (straffeloven § 78)?",
      options: ["Gjerningspersonen har avgitt uforbeholden tilståelse", "Lovbruddet er ledd i organisert kriminalitet", "At gjerningspersonen tidligere er domfelt for tilsvarende straffbare forhold", "Gjerningspersonen har tidligere domfellelser"],
      explanation: "En uforbeholden tilståelse er en formildende omstendighet (§ 78). Organisert kriminalitet, hatmotiv og tidligere domfellelser er skjerpende omstendigheter (§ 77).",
    },
  ],
  "rettslaere-2-2": [
    {
      question: "Hva er hvitvasking?",
      options: ["Å bidra til å sikre utbytte fra straffbare handlinger","Å gi gaver til veldedige organisasjoner og få skattefradrag","Å vaske og rengjøre fysiske pengesedler som er blitt skitne eller ødelagte","Å betale skatt og avgifter av inntekt fra en helt lovlig næringsvirksomhet"],
      explanation: "Hvitvasking (straffeloven § 337) innebærer å gjøre penger eller verdier fra kriminell virksomhet tilsynelatende lovlige gjennom ulike transaksjoner.",
    },
    {
      question: "Hvilke tre faser har hvitvaskingsprosessen tradisjonelt?",
      options: ["Plassering, tilsløring og integrering","Anmeldelse, etterforskning, tiltale og dom","Innskudd, uttak og overføring mellom ulike bankkontoer i inn- og utland","Kontantsalg, kortbetaling og fakturering"],
      explanation: "Hvitvasking har tre faser: plassering (midlene føres inn i det finansielle systemet), tilsløring (sporene skjules) og integrering (midlene fremstår som lovlige).",
    },
    {
      question: "Hva er aktiv korrupsjon (bestikkelse)?",
      options: ["Å gi eller tilby noen en utilbørlig fordel i anledning av stilling, verv eller oppdrag", "Å motta eller kreve en utilbørlig fordel i anledning av stilling, verv eller oppdrag", "Å betale skatt, avgifter eller offentlige gebyrer for sent til rett myndighet", "Å gi en lovlig og sedvanlig gave av beskjeden verdi som takk for en tjeneste"],
      explanation: "Aktiv korrupsjon (bestikkelse) er å gi eller tilby noen en utilbørlig fordel i anledning av stilling, verv eller oppdrag. Passiv korrupsjon er å motta en slik fordel.",
    },
    {
      question: "Hva er sentralt i vurderingen av om en fordel er korrupsjon?",
      options: ["Om fordelen er utilbørlig", "Om fordelen er billig", "Om fordelen er lovlig kjøpt", "Om fordelen er offentlig kjent på forhånd"],
      explanation: "For at noe skal være korrupsjon, må fordelen være utilbørlig. Dette vurderes ut fra fordelens art og verdi, formålet, partenes stilling og graden av åpenhet.",
    },
    {
      question: "Hva er bedrageri etter straffeloven § 371?",
      options: ["Å fremkalle, styrke eller utnytte en villfarelse for å få noen til å gjøre noe som volder tap", "Å unnlate å oppgi inntekt og dermed betale for lite skatt til det offentlige", "Å skade, ødelegge eller forringe en annen persons eiendom eller eiendeler", "Å ta og fjerne fysiske gjenstander som tilhører en annen uten samtykke"],
      explanation: "Bedrageri (§ 371) innebærer å fremkalle, styrke eller utnytte en villfarelse for å få noen til å gjøre noe som volder tap eller fare for tap, med vinnings hensikt.",
    },
  ],
  "rettslaere-2-3": [
    {
      question: "Hva regulerer internasjonal rett (folkerett)?",
      options: ["Forholdet mellom stater og internasjonale organisasjoner", "Bare forholdet mellom privatpersoner", "Bare norske straffesaker som har tilknytning til hendelser i utlandet", "Kun handel og omsetning av varer og tjenester innenfor Norges grenser"],
      explanation: "Internasjonal rett (folkerett) regulerer forholdet mellom stater og internasjonale organisasjoner. Den får økende betydning i en globalisert verden.",
    },
    {
      question: "Hvilken av disse er en primær kilde i folkeretten (ICJ-statuttene art. 38)?",
      options: ["Internasjonale konvensjoner (traktater)", "Juridisk teori", "Rettspraksis fra internasjonale domstoler", "Aviser"],
      explanation: "Primære kilder er internasjonale konvensjoner (traktater), internasjonal sedvane og alminnelige rettsprinsipper. Rettspraksis og juridisk teori er subsidiære kilder.",
    },
    {
      question: "Hva fastslår menneskerettsloven § 3?",
      options: ["At de inkorporerte konvensjonene går foran annen norsk lovgivning ved motstrid", "At de internasjonale menneskerettighetene ikke har noen virkning i norsk rett", "At det bare er staten, og ikke den enkelte borger, som har menneskerettigheter", "At Stortinget fritt kan oppheve EMK gjennom et alminnelig lovvedtak når som helst"],
      explanation: "Menneskerettsloven § 3 fastslår at de inkorporerte konvensjonene (bl.a. EMK) går foran annen norsk lovgivning ved motstrid, noe som gir menneskerettighetene en særlig sterk stilling.",
    },
    {
      question: "Hvilken internasjonal domstol behandler klager fra individer om brudd på EMK?",
      options: ["Den europeiske menneskerettighetsdomstol (EMD)", "Den internasjonale straffedomstol (ICC)", "EFTA-domstolen, som tolker EØS-avtalen for EFTA-statene", "Den internasjonale domstol (ICJ)"],
      explanation: "EMD i Strasbourg behandler klager fra individer og stater om brudd på EMK. ICJ avgjør tvister mellom stater, og ICC strafforfølger enkeltpersoner.",
    },
    {
      question: "Hva er et grunnleggende prinsipp i humanitærretten (krigens folkerett)?",
      options: ["Distinksjon – å skille mellom stridende og sivile", "At sivile kan angripes fritt", "At sivile mål alltid kan angripes for å svekke fiendens moral", "At angripende part fritt kan velge alle typer våpen og stridsmidler"],
      explanation: "Humanitærretten bygger på prinsipper som distinksjon (skille mellom stridende og sivile), proporsjonalitet og militær nødvendighet, for å begrense lidelsene under krig.",
    },
  ],
  "rettslaere-2-4": [
    {
      question: "Hva gir EØS-avtalen Norge tilgang til?",
      options: ["EUs indre marked uten å være EU-medlem", "EUs felles utenrikspolitikk", "Fullt EU-medlemskap med stemmerett i Rådet og Parlamentet", "Fullt EU-medlemskap"],
      explanation: "EØS-avtalen (i kraft 1994) gir Norge tilgang til EUs indre marked uten å være EU-medlem, men omfatter ikke euro, felles utenrikspolitikk eller justissamarbeid (utenom Schengen).",
    },
    {
      question: "Hva er de fire friheter i EØS-avtalen?",
      options: ["Fri bevegelighet for varer, personer, tjenester og kapital", "Ytringsfrihet, religionsfrihet, forsamlingsfrihet og pressefrihet", "Frihet fra skatt, toll, avgift og gebyr", "Rett til arbeid, bolig, helse og utdanning"],
      explanation: "EØS-avtalens kjerne er de fire friheter: fri bevegelighet for varer, personer, tjenester og kapital innenfor EØS-området.",
    },
    {
      question: "Hvilken modell har Norge valgt for gjennomføring av EØS-regler?",
      options: ["En dualistisk modell der EØS-regler må gjennomføres i norsk lov","En monistisk modell der EØS-regler gjelder direkte uten gjennomføring","En modell der EU-kommisjonen vedtar reglene direkte i norsk rett","En modell uten rettslig binding, der EØS-regler kun er anbefalinger"],
      explanation: "Norge har en dualistisk modell, som betyr at EØS-regler må gjennomføres i norsk lov (gjennom inkorporasjon eller transformasjon) for å få virkning.",
    },
    {
      question: "Hvilket organ overvåker at EFTA-landene overholder EØS-avtalen?",
      options: ["ESA (EFTA Surveillance Authority)", "FNs sikkerhetsråd", "Stortinget, som fører kontroll med regjeringens EØS-politikk", "EU-kommisjonen"],
      explanation: "ESA (EFTA Surveillance Authority) er EFTAs overvåkingsorgan med ansvar for å påse at EØS-avtalen overholdes av Norge, Island og Liechtenstein.",
    },
    {
      question: "Hva kreves for at en stat lovlig kan opprettholde restriksjoner i de fire friheter?",
      options: ["At tiltaket er legitimt, egnet, nødvendig og proporsjonalt", "At staten ensidig ønsker tiltaket ut fra nasjonale hensyn", "At tiltaket er vedtatt av Stortinget med alminnelig flertall", "At tiltaket sikrer staten inntekter og beskytter egen industri"],
      explanation: "Lovlige restriksjoner krever at formålet er legitimt, tiltaket er egnet til å oppnå formålet, nødvendig (ingen mindre inngripende alternativer) og proporsjonalt.",
    },
  ],
  "rettslaere-2-5": [
    {
      question: "Hvilken grunnlovsbestemmelse er miljøparagrafen?",
      options: ["Grunnloven § 112", "Grunnloven § 96", "Grunnloven § 100", "Grunnloven § 2"],
      explanation: "Grunnloven § 112 gir enhver rett til et miljø som sikrer helsen, og til en natur der produksjonsevne og mangfold bevares også for etterslekten.",
    },
    {
      question: "Hva innebærer føre-var-prinsippet i miljøretten?",
      options: ["Mangel på full vitenskapelig sikkerhet skal ikke utsette tiltak ved risiko for alvorlig miljøskade", "At ethvert tiltak alltid skal utsettes til full vitenskapelig sikkerhet foreligger", "At all forurensning er tillatt så lenge den ikke er vitenskapelig bevist skadelig", "At kun staten, ikke private aktører, bærer ansvaret for miljøskade og risiko"],
      explanation: "Føre-var-prinsippet innebærer at mangel på full vitenskapelig sikkerhet ikke skal brukes som grunn til å utsette kostnadseffektive tiltak ved risiko for alvorlig eller irreversibel miljøskade.",
    },
    {
      question: "Hva er hovedregelen i forurensningsloven § 7?",
      options: ["Forurensning er forbudt uten tillatelse", "Forurensning krever ingen tillatelse", "Kun industribedrifter, ikke private, kan forurense uten tillatelse", "All forurensning er tillatt"],
      explanation: "Forurensningsloven § 7 fastslår at forurensning er forbudt uten tillatelse. Forurensende virksomhet må ha tillatelse fra forurensningsmyndigheten.",
    },
    {
      question: "Hva er forurenser betaler-prinsippet?",
      options: ["Den som forurenser skal bære kostnadene ved forurensningen", "Staten betaler all forurensning", "At kostnadene fordeles likt på alle innbyggere uansett skyld", "At forbrukerne alene bærer kostnadene gjennom høyere produktpriser"],
      explanation: "Forurenser betaler-prinsippet innebærer at den som forurenser skal bære kostnadene ved forurensningen, inkludert tiltak for å forhindre, begrense og reparere skaden.",
    },
    {
      question: "Hvilken lov er Norges sentrale lov for vern av biologisk mangfold?",
      options: ["Naturmangfoldloven (2009)", "Forurensningsloven (1981)", "Klimaloven (2017)", "Plan- og bygningsloven"],
      explanation: "Naturmangfoldloven av 2009 er Norges sentrale lov for vern av biologisk mangfold, med bestemmelser om kunnskapsgrunnlag, føre-var-prinsippet og samlet belastning.",
    },
  ],
  "rettslaere-2-6": [
    {
      question: "Når trådte personvernforordningen (GDPR) i kraft i EU/EØS?",
      options: ["25. mai 2018", "1. januar 2000", "17. mai 2014", "1. juli 2021"],
      explanation: "GDPR trådte i kraft i EU/EØS 25. mai 2018 og er gjennomført i norsk rett gjennom personopplysningsloven av 2018.",
    },
    {
      question: "Hva er personopplysninger?",
      options: ["Enhver opplysning som kan knyttes til en identifiserbar person", "Bare opplysninger som er offentlige", "Kun fødselsnummer og andre offentlig tildelte identifikasjonsnumre", "Kun sensitive opplysninger om helse, religion og politisk oppfatning"],
      explanation: "Personopplysninger er enhver opplysning som kan knyttes til en identifiserbar person, f.eks. navn, fødselsnummer, e-postadresse og IP-adresse.",
    },
    {
      question: "Hvem er behandlingsansvarlig etter GDPR?",
      options: ["Den som bestemmer formålet med og midlene for behandlingen", "Den som behandler på vegne av andre", "Datatilsynet, som fører tilsyn med at regelverket etterleves", "Databehandleren som behandler opplysningene på vegne av andre"],
      explanation: "Behandlingsansvarlig er den som bestemmer formålet med og midlene for behandlingen. Databehandleren behandler personopplysninger på vegne av den behandlingsansvarlige.",
    },
    {
      question: "Hvilken av disse er et behandlingsgrunnlag etter GDPR artikkel 6?",
      options: ["Samtykke", "At opplysningene er interessante", "At behandleren ønsker det", "At opplysningene er gratis"],
      explanation: "Behandlingsgrunnlag etter GDPR art. 6 er samtykke, avtale, rettslig forpliktelse, vitale interesser, offentlig myndighetsutøvelse eller berettiget interesse.",
    },
    {
      question: "Hvilket organ er Norges uavhengige tilsynsmyndighet for personvern?",
      options: ["Datatilsynet", "Forbrukertilsynet", "Arbeidstilsynet", "Konkurransetilsynet"],
      explanation: "Datatilsynet er Norges uavhengige tilsynsmyndighet for personvern. Det veileder om regelverket, fører tilsyn, behandler klager og kan gi pålegg og overtredelsesgebyr.",
    },
  ],
  "rettslaere-2-7": [
    {
      question: "Hva kjennetegner et aksjeselskap (AS)?",
      options: ["Aksjonærene har begrenset ansvar og risikerer kun sitt innskudd", "At selskapet ikke kan ansette folk, men kun benytte innleide", "At eierne hefter fullt personlig og solidarisk for selskapets gjeld", "At selskapet kan stiftes uten krav om innskutt aksjekapital"],
      explanation: "Et aksjeselskap kjennetegnes av begrenset ansvar – aksjonærene risikerer kun sitt innskudd. Selskapet er en egen juridisk person med minimum kr 30 000 i aksjekapital.",
    },
    {
      question: "Hvor mye er minste aksjekapital i et aksjeselskap (AS)?",
      options: ["Kr 30 000", "Kr 1 million", "Kr 100 000", "Det er ingen krav"],
      explanation: "Et aksjeselskap (AS) krever minimum kr 30 000 i aksjekapital. Et allmennaksjeselskap (ASA) krever minimum kr 1 million.",
    },
    {
      question: "Hvilket organ er aksjeselskapets øverste myndighet?",
      options: ["Generalforsamlingen", "Styret", "Daglig leder", "Bedriftsforsamlingen"],
      explanation: "Generalforsamlingen er selskapets øverste myndighet der aksjonærene utøver sin rett. Den velger styre, godkjenner årsregnskap og vedtar utbytte og vedtektsendringer.",
    },
    {
      question: "Hva er vilkårene for styreansvar etter aksjeloven § 17-1?",
      options: ["Ansvarsgrunnlag (forsett/uaktsomhet), årsakssammenheng og økonomisk tap", "At generalforsamlingen med flertall vedtar å holde styret ansvarlig", "At selskapet går konkurs, uavhengig av styremedlemmets opptreden", "At styremedlemmet har god privatøkonomi og kan dekke tapet"],
      explanation: "Styreansvar krever ansvarsgrunnlag (forsett eller uaktsomhet), årsakssammenheng og økonomisk tap. Styremedlem kan da bli personlig erstatningsansvarlig.",
    },
    {
      question: "Hva er ansvarsgjennombrudd?",
      options: ["Et unntak der aksjonærer holdes personlig ansvarlige tross begrenset ansvar", "En ordinær utbetaling av utbytte til aksjonærene etter årsresultat", "At styret automatisk hefter for all selskapsgjeld ved konkurs", "At staten overtar eierskapet i selskaper som drives med tap"],
      explanation: "Ansvarsgjennombrudd er et ulovfestet unntak fra hovedregelen om begrenset ansvar, der aksjonærer kan holdes personlig ansvarlige ved underkapitalisering, sammenblanding eller misbruk. Anvendes restriktivt.",
    },
  ],
  "rettslaere-2-8": [
    {
      question: "Hva er eiendomsrett?",
      options: ["Den mest omfattende rådigheten man kan ha over en ting","En rett som bare staten og kommunene kan ha over fast eiendom","Utelukkende retten til å leie ut tingen mot vederlag til andre","En begrenset bruksrett tildelt av eieren for et bestemt formål"],
      explanation: "Eiendomsrett er den mest omfattende rådigheten man kan ha over en ting. Eieren kan bruke, endre, selge eller gi bort eiendommen og nekte andre å bruke den, innenfor lovens grenser.",
    },
    {
      question: "Hva er formålet med tinglysing?",
      options: ["Å skape rettsvern og offentlighet om rettigheter i fast eiendom", "Å fastsette grunnlaget for eiendomsskatt til kommunen hvert år", "Å registrere leieforhold slik at leietaker får en oppsigelsesfrist", "Å gi tillatelse til å bygge og gjøre tiltak på fast eiendom"],
      explanation: "Tinglysing er registrering av rettigheter i fast eiendom i grunnboken. Formålet er å skape rettsvern, prioritet mellom rettigheter og offentlig tilgjengelig informasjon.",
    },
    {
      question: "Hva er en servitutt?",
      options: ["En begrenset rett over annen manns eiendom", "Full eiendomsrett", "En tidsbegrenset leiekontrakt om bruk av annen manns grunn", "Full og uinnskrenket eiendomsrett over hele naboens eiendom"],
      explanation: "En servitutt er en begrenset rett over annen manns eiendom, f.eks. en positiv servitutt (veirett) eller en negativ servitutt (byggeforbud).",
    },
    {
      question: "Hva er hovedregelen i naboloven § 2?",
      options: ["Ingen må gjøre noe som urimelig eller unødvendig er til skade eller ulempe for naboeiendommen", "At en grunneier fritt kan disponere sin eiendom uten hensyn til naboene", "At enhver bruk av egen eiendom krever forhåndssamtykke fra naboene", "At naboer ikke har rettslige plikter overfor hverandre etter loven"],
      explanation: "Naboloven § 2 fastslår at ingen må ha, gjøre eller sette i verk noe som urimelig eller unødvendig er til skade eller ulempe for naboeiendommen.",
    },
    {
      question: "Hva beskytter den som kjøper i god tro og stoler på grunnboken?",
      options: ["Vern mot eldre utinglyste rettigheter (ekstinksjon)","Rett til å kreve at selgeren utbedrer alle skjulte mangler","Vern mot naboklager og krav etter naboloven om ulemper","Fullt fritak fra eiendomsskatt de første årene etter kjøpet"],
      explanation: "Grunnbokens troverdighet innebærer at den som kjøper i god tro og stoler på grunnboken, er beskyttet mot eldre utinglyste rettigheter (ekstinksjon).",
    },
  ],
  "rettslaere-2-9": [
    {
      question: "Hva kjennetegner megling?",
      options: ["En nøytral tredjeperson hjelper partene, men har ingen beslutningsmyndighet", "At staten ved forvaltningen fastsetter utfallet med bindende vedtak", "At en dommer avgjør saken bindende etter en formell rettergang", "At politiet griper inn og løser konflikten med tvangsmidler"],
      explanation: "Megling kjennetegnes av frivillig deltakelse, at mekleren ikke har beslutningsmyndighet, at partene beholder kontrollen, og at fokus er på partenes interesser.",
    },
    {
      question: "Hva er forliksrådet?",
      options: ["Et kommunalt meklingsorgan som er første instans for mange sivile saker", "Norges øverste domstol som prøver prinsipielle sivile saker", "En statlig særdomstol som behandler alvorlige straffesaker", "Et politiorgan som etterforsker og påtaler mindre lovbrudd"],
      explanation: "Forliksrådet er et kommunalt meklingsorgan som er obligatorisk første instans for mange sivile saker. Det har tre medlemmer og kan avsi dom i saker under kr 200 000.",
    },
    {
      question: "Hva er voldgift?",
      options: ["Privat rettergang der partene overlater tvisten til voldgiftsdommere med bindende avgjørelse", "En obligatorisk forliksrådsbehandling som første instans i sivile saker", "En straffesak der påtalemyndigheten forfølger et lovbrudd for retten", "En uforpliktende samtale mellom partene uten noe bindende resultat"],
      explanation: "Voldgift er privat rettergang basert på avtale mellom partene, der voldgiftsdommerne avgjør saken. Voldgiftsdommen er bindende med begrenset ankemulighet.",
    },
    {
      question: "I hvilke saker er familierettsmekling obligatorisk?",
      options: ["Ved samlivsbrudd med barn","Ved konflikter mellom arbeidsgiver og fagforening","I alle straffesaker der fornærmede og tiltalte ønsker det","Ved tvist om arv etter et dødsfall"],
      explanation: "Familierettsmekling er obligatorisk ved samlivsbrudd med barn. Megling brukes også i sivile tvister og mellom arbeidsgiver og fagforeninger.",
    },
    {
      question: "Hva sier tvisteloven § 8-1 om minnelige løsninger?",
      options: ["Retten skal på ethvert trinn vurdere om saken kan løses i minnelighet", "At retten aldri skal mekle, men kun avsi dom etter hovedforhandling", "At megling er forbudt i domstolene og hører hjemme utenfor rettssystemet", "At bare partenes advokater, ikke retten, kan foreslå et forlik"],
      explanation: "Tvisteloven § 8-1 fastslår at retten på ethvert trinn skal vurdere om saken kan løses i minnelighet. Rettsmekling tilbys som alternativ til hovedforhandling.",
    },
  ],
  "rettslaere-2-10": [
    {
      question: "Hva handler rettsfilosofi om?",
      options: ["Rettens grunnlag, natur og formål","Bare hvordan man skriver lover","Bare folkerettens handelsregler","Bare domstolenes organisering"],
      explanation: "Rettsfilosofi handler om rettens grunnlag, natur og formål – sentrale spørsmål er hva rett er, hva som gjør en lov gyldig, og hva rettferdighet er.",
    },
    {
      question: "Hva kjennetegner naturrettstenkningen?",
      options: ["Retten bygger på universelle moralske prinsipper uavhengig av hva staten bestemmer", "At det kun er domstolene, gjennom sine avgjørelser, som skaper gjeldende rett", "At retten er helt uavhengig av og uten sammenheng med moralske normer", "At retten utelukkende er det som til enhver tid er vedtatt av staten"],
      explanation: "Naturrett hevder at retten bygger på universelle moralske prinsipper. En lov som strider mot naturlige rettigheter, er ikke gyldig rett. Representanter er bl.a. Aquinas og Locke.",
    },
    {
      question: "Hva kjennetegner rettspositivismen?",
      options: ["Retten er det som er vedtatt av kompetent myndighet etter gjeldende prosedyrer", "At det kun er naturen og universelle rettigheter som bestemmer hva rett er", "At retten bygger på moralske prinsipper som står over den vedtatte loven", "At gjeldende rett fritt kan settes til side når den oppleves urettferdig"],
      explanation: "Rettspositivisme hevder at retten er det som er vedtatt av kompetent myndighet etter gjeldende prosedyrer. Gyldigheten avhenger av formell korrekthet, ikke moralsk innhold. Representanter er bl.a. Hart og Kelsen.",
    },
    {
      question: "Hva er formell rettferdighet?",
      options: ["At like tilfeller skal behandles likt og reglene anvendes konsistent", "At selve innholdet i rettsreglene er godt og materielt rettferdig", "At de økonomisk sterkeste partene som regel vinner fram i rettssaker", "At den rettslige prosessen er rettferdig og gir partene like muligheter"],
      explanation: "Formell rettferdighet innebærer at like tilfeller skal behandles likt, og at reglene anvendes konsistent uten vilkårlighet. Materiell rettferdighet gjelder innholdet i reglene.",
    },
    {
      question: "Hva argumenterte John Rawls for i sin rettferdighetsteori?",
      options: ["At rettferdige prinsipper er de vi ville valgt bak et «uvitenhetens slør»", "At rettferdighet er et tomt begrep uten reelt innhold eller mening", "At staten alltid handler rettferdig så lenge lovene følges korrekt", "At de sterkeste i samfunnet bør bestemme fordelingen av goder"],
      explanation: "Rawls argumenterte for at rettferdige prinsipper er de vi ville valgt bak et «uvitenhetens slør» – uten å vite vår egen posisjon i samfunnet.",
    },
  ],
};

export default quizData_rettslaere;
