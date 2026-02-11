import type { QuizQuestion } from './quiz-data';

const quizData_rettslaere: Record<string, QuizQuestion[]> = {
  'rettslære-1-1': [
  {
    question: 'Hva er maktfordelingsprinsippet?',
    options: ['At makten er delt mellom lovgivende, utøvende og dømmende myndighet', 'At regjeringen har all makt', 'At domstolene lager lover', 'At folket stemmer i alle saker'],
    explanation: 'Maktfordelingsprinsippet sikrer at ingen har all makt. Stortinget lager lover (lovgivende), regjeringen utfører dem (utøvende), og domstolene dømmer (dømmende).',
  },
  {
    question: 'Hvilken domstol er Norges øverste?',
    options: ['Høyesterett', 'Lagmannsretten', 'Tingretten', 'Forliksrådet'],
    explanation: 'Høyesterett er landets øverste domstol og behandler de mest prinsipielle sakene. Den har 20 dømmere.',
  },
  {
    question: 'Hva betyr det å anke en dom?',
    options: ['Å bringe saken til høyere rettsinstans for ny behandling', 'Å akseptere dømmen', 'Å trekke tilbake saken', 'Å anmelde en ny sak'],
    explanation: 'Anke betyr å be en høyere domstol behandle saken på nytt fordi man mener den første dømmen er feil.',
  },
  {
    question: 'Hva er forskjellen mellom straffesaker og sivile saker?',
    options: ['I straffesaker er det staten mot enkeltperson, i sivile saker er det tvist mellom parter', 'Det er ingen forskjell', 'Sivile saker behandles bare i Høyesterett', 'Straffesaker har alltid jury'],
    explanation: 'I straffesaker fører påtalemyndigheten saken mot den tiltalte. I sivile saker er det en tvist mellom to parter om hvem som har rett.',
  },
  {
    question: 'Hva kjennetegner en rettsstat?',
    options: ['Offentlig myndighet er bundet av demokratisk vedtatte lover', 'Dommere kan bestemme fritt', 'Politikere står over loven', 'Det finnes ingen lover'],
    explanation: 'I en rettsstat er alle, inkludert myndighetene, bundet av loven. Borgerne har beskyttelse mot vilkårlig maktbruk.',
  },
],


  'rettslære-1-2': [
  {
    question: 'Hvilken rettskilde har høyest rang i Norge?',
    options: ['Grunnloven', 'Vanlige lover', 'Forskrifter', 'Rettspråksis'],
    explanation: 'Grunnloven er Norges høyeste lov. Alle andre lover må være i samsvar med Grunnloven.',
  },
  {
    question: 'Hva er forarbeider?',
    options: ['Dokumenter laget under utarbeidelsen av en lov', 'Arbeidskontrakter', 'Eldre dømmer', 'Juridiske lærebøker'],
    explanation: 'Forarbeider inkluderer NOU-er, proposisjoner og innstillinger som forklærer lovens formål og hvordan den skal forstås.',
  },
  {
    question: 'Hvor starter man vanligvis ved lovtolkning?',
    options: ['Med ordlyden i loven', 'Med dømmer fra Høyesterett', 'Med juridisk teori', 'Med forskriftene'],
    explanation: 'Lovtolkning starter alltid med ordlyden - den naturlige språklige forståelsen av lovens tekst.',
  },
  {
    question: 'Hva er forskjellen mellom lover og forskrifter?',
    options: ['Lover vedtas av Stortinget, forskrifter gis av regjeringen med hjemmel i lov', 'Det er ingen forskjell', 'Forskrifter har høyere rang enn lover', 'Lover gjelder bare i Oslo'],
    explanation: 'Lover vedtas av Stortinget og gir hovedreglene. Forskrifter gis av regjeringen og utfyller lovene med detaljerte regler.',
  },
  {
    question: 'Hva betyr teleologisk lovtolkning?',
    options: ['Å tolke loven i lys av dens formål', 'Å tolke loven bokstavelig', 'Å se på hva domstolene har sagt', 'Å spørre politikerne'],
    explanation: 'Teleologisk (formålsrettet) tolkning betyr å tolke loven i lys av hva lovgiver ønsket å oppnå med bestemmelsen.',
  },
],


  'rettslære-1-3': [
  {
    question: 'Hva er EMK?',
    options: ['Den europeiske menneskerettskonvensjon', 'En norsk lov', 'En FN-organisasjon', 'En EU-traktat'],
    explanation: 'EMK er Den europeiske menneskerettskonvensjon fra 1950, som beskytter grunnleggende rettigheter i Europa.',
  },
  {
    question: 'Hva skjer ved motstrid mellom EMK og norsk lov?',
    options: ['EMK går foran', 'Norsk lov går foran', 'De gjelder likt', 'Stortinget avgjør'],
    explanation: 'Menneskerettsloven sier at EMK skal gå foran ved motstrid med annen norsk lovgivning.',
  },
  {
    question: 'Hvor kan norske borgere klage ved brudd på menneskerettighetene?',
    options: ['Den europeiske menneskerettsdomstolen (EMD)', 'Stortinget', 'Regjeringen', 'Kommunen'],
    explanation: 'EMD i Strasbourg kan behandle klager mot Norge etter at nasjonale rettsmidler er uttømt.',
  },
  {
    question: 'Hvilke rettigheter er absolutte og kan aldri begrenses?',
    options: ['Forbud mot tortur', 'Ytringsfrihet', 'Forsamlingsfrihet', 'Eiendomsretten'],
    explanation: 'Forbudet mot tortur er absolutt og kan aldri fravikes, uansett omstendigheter.',
  },
  {
    question: 'Hva kreves for at inngrep i menneskerettigheter skal være lovlige?',
    options: ['Lovhjemmel, legitimt formål og nødvendighet i et demokratisk samfunn', 'Bare at myndighetene ønsker det', 'Flertall i Stortinget', 'At EMD godkjenner det på forhånd'],
    explanation: 'Inngrep må være fastsatt i lov, forfølge et legitimt formål og være nødvendige og proporsjonale.',
  },
],


  'rettslære-1-4': [
  {
    question: 'Hva kreves for at en avtale skal være inngått?',
    options: ['Tilbud og aksept', 'Skriftlig kontrakt', 'Notarius publicus', 'Minst tre parter'],
    explanation: 'Avtale inngås normalt ved at et tilbud aksepteres. Muntlige avtaler er like bindende som skriftlige.',
  },
  {
    question: 'Hva sier avtaleloven § 36?',
    options: ['Urimelige avtaler kan settes til side', 'Alle avtaler må være skriftlige', 'Mindreårige kan inngå alle avtaler', 'Avtaler gjelder kun i ett år'],
    explanation: 'Avtaleloven § 36 er en generalklausul som sier at en avtale kan settes til side hvis den vil virke urimelig.',
  },
  {
    question: 'Fra hvilken alder kan man inngå bindende avtaler uten samtykke?',
    options: ['18 år', '15 år', '16 år', '21 år'],
    explanation: 'Myndighetsalderen i Norge er 18 år. Då blir man juridisk myndig og kan inngå alle typer avtaler.',
  },
  {
    question: 'Hva skjer hvis en aksept inneholder endringer?',
    options: ['Det regnes som et nytt tilbud (modifisert aksept)', 'Avtalen er inngått', 'Begge parter blir bundet', 'Avtalen blir ugyldig'],
    explanation: 'En aksept med endringer kalles modifisert aksept og regnes som et nytt tilbud som den opprinnelige tilbyderen kan velge å akseptere.',
  },
  {
    question: 'Hva er fullmakt?',
    options: ['Retten til å handle på vegne av en annen', 'En skriftlig avtale', 'En type lov', 'Et bevis i rettssak'],
    explanation: 'Fullmakt gir en person rett til å binde en annen juridisk, innenfor fullmaktens grenser.',
  },
],


  'rettslære-1-5': [
  {
    question: 'Hvor lang er den absolutte reklamasjonsfristen for vanlige varer?',
    options: ['2 år', '1 år', '5 år', '10 år'],
    explanation: 'Hovedregelen er 2 års absolutt reklamasjonsfrist. For ting med vesentlig lengre levetid er fristen 5 år.',
  },
  {
    question: 'Når kan et kjøp heves?',
    options: ['Ved vesentlig mangel', 'Ved enhver mangel', 'Kun ved farlige produkter', 'Aldri'],
    explanation: 'Heving krever at mangelen er vesentlig. Ved mindre mangler har du rett til retting, omlevering eller prisavslag.',
  },
  {
    question: 'Hva er angrerett?',
    options: ['Retten til å gå fra et kjøp uten begrunnelse ved fjernsalg', 'Retten til å klage på varer', 'Retten til å bytte varer i butikk', 'Retten til å angre på kriminelle handlinger'],
    explanation: 'Angrerett gjelder ved fjernsalg (netthandel, telefonsalg) i 14 dager. Den gjelder ikke ved vanlig butikkhandel.',
  },
  {
    question: 'Hva menes med relativ reklamasjonsfrist?',
    options: ['Man må reklamere innen rimelig tid etter at mangelen oppdages', 'Fristen er relatert til prisen', 'Fristen avhenger av hvor man bor', 'Fristen er alltid 5 år'],
    explanation: 'Relativ frist betyr at du må si fra innen rimelig tid etter at du oppdaget mangelen, normalt innen 2 måneder.',
  },
  {
    question: 'Hva er forskjellen mellom retting og omlevering?',
    options: ['Retting er reparasjon, omlevering er ny vare', 'Det er det samme', 'Retting gjelder bare elektronikk', 'Omlevering krever at varen er farlig'],
    explanation: 'Retting betyr at selger reparerer den defekte varen. Omlevering betyr at forbrukeren får en ny, tilsvarende vare.',
  },
],


  'rettslære-1-6': [
  {
    question: 'Hva er culpa?',
    options: ['Uaktsomhet eller skyld', 'Årsakssammenheng', 'Økonomisk tap', 'Forsett'],
    explanation: 'Culpa betyr uaktsomhet eller skyld. Culpaansvåret er hovedregelen for erstatning.',
  },
  {
    question: 'Hva er de tre vilkårene for erstatning?',
    options: ['Ansvarsgrunnlag, økonomisk tap og årsakssammenheng', 'Skyld, dom og betaling', 'Vilje, handling og resultat', 'Lov, forskrift og dom'],
    explanation: 'For å få erstatning må alle tre vilkårene være oppfylt: ansvarsgrunnlag, økonomisk tap og årsakssammenheng.',
  },
  {
    question: 'Hva er objektivt ansvar?',
    options: ['Ansvar uten krav om skyld', 'Ansvar med krav om forsett', 'Ansvar for kontraktsbrudd', 'Ansvar for andres handlinger'],
    explanation: 'Objektivt ansvar betyr at man er ansvårlig uavhengig av skyld. Det gjelder for særlig farlig virksomhet.',
  },
  {
    question: 'Hva menes med påregnelighet i erstatningsretten?',
    options: ['At skaden var en forutsigbar følge av handlingen', 'At skadelidte kunne forsikre seg', 'At skadevolder kunne betale', 'At skaden skjedde umiddelbart'],
    explanation: 'Påregnelighet betyr at skaden var en forutsigbar følge. Man erstatter ikke helt upåregnelige følger.',
  },
  {
    question: 'Hva innebærer arbeidsgiveransvåret?',
    options: ['Arbeidsgiver er ansvårlig for skade ansatte volder i tjenesten', 'Arbeidstaker er alltid ansvårlig selv', 'Arbeidsgiver er aldri ansvårlig', 'Bare staten har arbeidsgiveransvar'],
    explanation: 'Arbeidsgiver er ansvårlig for skade som ansatte volder i tjenesten, selv uten egen skyld.',
  },
],


  'rettslære-1-7': [
  {
    question: 'Hva er kriminell lavalder i Norge?',
    options: ['15 år', '18 år', '16 år', '14 år'],
    explanation: 'Kriminell lavalder er 15 år. Under dette kan man ikke straffes, men barnevernet kan gripe inn.',
  },
  {
    question: 'Hva er hovedregelen for skyldkrav i strafferetten?',
    options: ['Forsett kreves for straff', 'Uaktsomhet er alltid nok', 'Skyld er ikke nødvendig', 'Hensikt kreves alltid'],
    explanation: 'Hovedregelen er at forsett kreves for straff. Uaktsomhet er bare nok når loven uttrykkelig sier det.',
  },
  {
    question: 'Hva er nødverge?',
    options: ['Retten til å forsvare seg mot ulovlige angrep', 'Plikt til å hjelpe andre', 'Rett til å bryte loven ved fare', 'Militær verneplikt'],
    explanation: 'Nødverge gir rett til å avverge et ulovlig angrep på seg selv eller andre. Forsvåret må være nødvendig og forholdsmessig.',
  },
  {
    question: 'Hva betyr legalitetsprinsippet?',
    options: ['Ingen straff uten lov', 'Alle lover er like viktige', 'Domstolene kan lage lover', 'Straff kan ha tilbakevirkende kraft'],
    explanation: 'Legalitetsprinsippet betyr at staten bare kan straffe handlinger som var forbudt i lov da de ble begått.',
  },
  {
    question: 'Hva er forskjellen mellom forsett og uaktsomhet?',
    options: ['Forsett er vilje eller bevissthet, uaktsomhet er uforsiktighet', 'Det er ingen forskjell', 'Uaktsomhet gir strengere straff', 'Forsett krever skriftlig plan'],
    explanation: 'Forsett betyr at man visste eller holdt det for sannsynlig. Uaktsomhet betyr at man burde ha forstått.',
  },
],


  'rettslære-1-8': [
  {
    question: 'Hvor mange feriedager har man krav på i Norge?',
    options: ['25 virkedager (5 uker)', '21 virkedager', '30 virkedager', '20 virkedager'],
    explanation: 'Ferieloven gir rett til 25 virkedager (ca. 5 uker) ferie. De over 60 år har én uke ekstra.',
  },
  {
    question: 'Hva kreves for at arbeidsgiver skal kunne si opp en ansatt?',
    options: ['Saklig grunn i virksomhetens eller arbeidstakers forhold', 'Ingen begrunnelse trengs', 'Bare økonomiske problemer', 'Godkjenning fra NAV'],
    explanation: 'Oppsigelse må ha saklig grunn. Det må også gjennomføres drøftingsmøte før oppsigelse.',
  },
  {
    question: 'Hva er forskjellen mellom oppsigelse og avskjed?',
    options: ['Ved avskjed opphører arbeidsforholdet umiddelbart', 'Det er ingen forskjell', 'Oppsigelse er ulovlig', 'Avskjed gir rett til feriepenger'],
    explanation: 'Ved oppsigelse jobber man ut oppsigelsestiden. Ved avskjed må man gå på dagen, og det krever grovt pliktbrudd.',
  },
  {
    question: 'Hva er maksimal daglig arbeidstid etter loven?',
    options: ['9 timer', '8 timer', '10 timer', '7,5 timer'],
    explanation: 'Alminnelig arbeidstid er maks 9 timer pr. dag og 40 timer pr. uke etter arbeidsmiljøloven.',
  },
  {
    question: 'Når må en skriftlig arbeidsavtale være på plass?',
    options: ['Senest én måned etter arbeidsstart', 'Før arbeidet starter', 'Innen ett år', 'Det er ikke påkrevd'],
    explanation: 'Arbeidsmiljøloven krever skriftlig arbeidsavtale senest én måned etter at arbeidsforholdet startet.',
  },
],


  'rettslære-1-9': [
  {
    question: 'Hva er hovedregelen for formuesordning i ekteskap?',
    options: ['Felleseie', 'Særeie', 'Sameie', 'Delt økonomi'],
    explanation: 'Felleseie er hovedregelen. Det betyr at formuen deles likt ved skilsmisse. Særeie må avtales i ektepakt.',
  },
  {
    question: 'Hva er pliktdelsarv?',
    options: ['Den delen av arven som må gå til livsarvinger (barn)', 'Arv til staten', 'Arv som kan testamenteres bort', 'Arv til ektefellen'],
    explanation: 'Pliktdelsarv er 2/3 av arven til livsarvinger, begrenset oppad til 15 G per barn. Den kan ikke testamenteres bort.',
  },
  {
    question: 'Hvor mye arver ektefellen minimum når det er barn?',
    options: ['1/4 av arven', 'Halvparten', 'Ingenting', 'Alt'],
    explanation: 'Ektefellen har krav på minimum 1/4 av arven når det er livsarvinger (barn).',
  },
  {
    question: 'Hva kreves for å opprette et gyldig testament?',
    options: ['Skriftlig med to vitner', 'Bare muntlig erklæring', 'Notarius publicus', 'Ingen formkrav'],
    explanation: 'Testament må være skriftlig og undertegnet med to vitner til stede. Vitnene kan ikke være arvinger.',
  },
  {
    question: 'Har samboere automatisk arverett etter hverandre?',
    options: ['Nei, det må sikres gjennom testament', 'Ja, de har full arverett', 'Ja, men bare etter 5 år', 'Ja, hvis de har felles barn'],
    explanation: 'Samboere har ikke automatisk arverett. Arverett kan sikres gjennom testament, men samboere betaler mer i arveavgift.',
  },
],


  'rettslære-1-10': [
  {
    question: 'Hva er forliksrådet?',
    options: ['Laveste rettsinstans for sivile tvister', 'En del av politiet', 'Høyesterett', 'En privat meklingstjeneste'],
    explanation: 'Forliksrådet er den laveste rettsinstansen for sivile tvister og behandler mange saker før de kan gå til tingretten.',
  },
  {
    question: 'Hva er beviskravet i straffesaker?',
    options: ['Utover enhver rimelig tvil', 'Sannsynlighetsovervekt', '75% sannsynlighet', 'Ingen beviskrav'],
    explanation: 'I straffesaker må påtalemyndigheten bevise skyld utover enhver rimelig tvil. I sivile saker er det nok med sannsynlighetsovervekt.',
  },
  {
    question: 'Hvem har bevisbyrden i straffesaker?',
    options: ['Påtalemyndigheten', 'Tiltalte', 'Dommeren', 'Vitner'],
    explanation: 'Påtalemyndigheten må bevise at tiltalte er skyldig. Tiltalte behøver ikke bevise sin uskyld (uskyldspresumsjonen).',
  },
  {
    question: 'Hva er forskjellen mellom mekling og voldgift?',
    options: ['Meklæren avgjør ikke tvisten, voldgiftsretten avgjør bindende', 'Det er ingen forskjell', 'Mekling er bare for familiesaker', 'Voldgift er gratis'],
    explanation: 'Ved mekling hjelper meklæren partene å finne løsning selv. Ved voldgift avgjør en privat voldgiftsrett tvisten bindende.',
  },
  {
    question: 'Hva er fri rettshjelp?',
    options: ['Gratis juridisk bistand fra staten for personer med lav inntekt', 'Gratis advokat for alle', 'Frivillig hjelp fra advokater', 'Juridisk hjelp i fengsel'],
    explanation: 'Fri rettshjelp er gratis juridisk bistand for personer med lav inntekt i visse sakstyper.',
  },
],


  'rettslære-2-1': [
  {
    question: 'Hvilken skyldgrad kreves normalt for at en handling skal være straffbar?',
    options: ['Forsett, med mindre loven fastsetter at uaktsomhet er tilstrekkelig', 'Hensiktsforsett', 'Grov uaktsomhet', 'Simpel uaktsomhet'],
    explanation: 'Hovedregelen er at det kreves forsett for straffansvar. Uaktsomhet er bare tilstrekkelig når loven uttrykkelig sier det.',
  },
  {
    question: 'Hva er medvirkning til straffbar handling?',
    options: ['Å bidra fysisk eller psykisk til at en annen begår et lovbrudd', 'Å være til stede under lovbruddet', 'Å vite om lovbruddet uten å melde det', 'Å motta utbytte av lovbruddet'],
    explanation: 'Medvirkning kan være fysisk (holde vakt, skaffe verktøy) eller psykisk (planlegge, oppfordre). Begge er straffbare.',
  },
  {
    question: 'Hva er straffri tilbaketreden?',
    options: ['Når man frivillig avstår fra å fullbyrde et forsøk på lovbrudd', 'Når man angrer etter at lovbruddet er begått', 'Når man melder seg selv til politiet', 'Når vitner trekker seg'],
    explanation: 'Selv om forsøksgrensen er passert, kan man gå straffri dersom man frivillig avstår fra å fullføre lovbruddet.',
  },
  {
    question: 'Hvilken straffrihetsgrunn føreligger når man forsvarer seg mot et ulovlig angrep?',
    options: ['Nødverge', 'Nødrett', 'Samtykke', 'Selvtekt'],
    explanation: 'Nødverge gir rett til å avverge et ulovlig angrep med nødvendig og forholdsmessig forsvar.',
  },
  {
    question: 'Hva er en skjerpende omstendighet ved straffeutmåling?',
    options: ['At lovbruddet er begått mot en forsvarsløs person', 'At gjerningspersonen har avgitt tilståelse', 'At det har gått lang tid siden lovbruddet', 'At gjerningspersonen var under 18 år'],
    explanation: 'Skjerpende omstendigheter inkluderer lovbrudd mot forsvarsløse, organisert kriminalitet og hatmotiv.',
  },
],


  'rettslære-2-2': [
  {
    question: 'Hva er den første fasen i den klassiske hvitvaskingsprosessen?',
    options: ['Plassering', 'Tilsløring', 'Integrering', 'Konvertering'],
    explanation: 'Plassering er den første fasen, der de kriminelle midlene føres inn i det finansielle systemet.',
  },
  {
    question: 'Hva er korrupsjon?',
    options: ['Å gi eller motta utilbørlige fordeler i anledning stilling', 'Å lyve til myndighetene', 'Å unndra skatt', 'Å bryte konkurranseregler'],
    explanation: 'Korrupsjon innebærer bestikkelser - å gi eller motta utilbørlige fordeler i forbindelse med stilling eller verv.',
  },
  {
    question: 'Hvilken form for økonomisk kriminalitet innebærer å fremkalle villfarelse for å oppnå vinning?',
    options: ['Bedrageri', 'Hvitvasking', 'Underslag', 'Innsidehandel'],
    explanation: 'Bedrageri er å fremkalle, styrke eller utnytte en villfarelse for å få noen til å gjøre noe som volder tap.',
  },
  {
    question: 'Hva kjennetegner økonomisk kriminalitet?',
    options: ['Den begås ofte av personer i betrodde stillinger og involverer komplekse transaksjoner', 'Den innebærer alltid vold', 'Den er enkel å oppdage', 'Den skjer bare i store bedrifter'],
    explanation: 'Økonomisk kriminalitet skiller seg ved at den ofte begås av personer i tillitsposisjoner og involverer kompleksitet.',
  },
  {
    question: 'Hva er skattesvik?',
    options: ['Å gi uriktige opplysninger til skattemyndighetene for å unndra skatt', 'Å betale for mye skatt', 'Å klage på skatten', 'Å bytte revisor'],
    explanation: 'Skattesvik innebærer å gi uriktige eller ufullstendige opplysninger for å unndra skatt eller avgift.',
  },
],


  'rettslære-2-3': [
  {
    question: 'Hva er virkningen av menneskerettsloven § 3 ved motstrid mellom EMK og norsk lov?',
    options: ['EMK går foran', 'Norsk lov går foran', 'Den nyeste loven går foran', 'Saken må avvises'],
    explanation: 'Menneskerettsloven § 3 fastslår at konvensjonene skal gå foran annen norsk lovgivning ved motstrid.',
  },
  {
    question: 'Hvilken domstol kan individer klage til ved brudd på EMK?',
    options: ['Den europeiske menneskerettsdomstolen (EMD)', 'Den internasjonale domstol (ICJ)', 'Den internasjonale straffedomstol (ICC)', 'EU-domstolen'],
    explanation: 'EMD i Strasbourg behandler klager fra individer om brudd på EMK.',
  },
  {
    question: 'Hva er folkerettens primære kilder?',
    options: ['Internasjonale konvensjoner, sedvanerett og alminnelige rettsprinsipper', 'Bare FN-resolusjoner', 'Bare traktater', 'Bare nasjonal lovgivning'],
    explanation: 'Folkerettens primære kilder er traktater, internasjonal sedvane og alminnelige rettsprinsipper anerkjent av siviliserte nasjoner.',
  },
  {
    question: 'Hva regulærer humanitærretten?',
    options: ['Væpnede konflikter og beskyttelse av sivile og krigsfanger', 'Menneskerettigheter i fredstid', 'Internasjonal handel', 'Miljøvern'],
    explanation: 'Humanitærretten (krigens folkerett) regulærer oppførsel i væpnede konflikter og beskytter de som ikke deltar.',
  },
  {
    question: 'Hva er statsansvar i folkeretten?',
    options: ['Når en stat bryter sine folkerettslige forpliktelser og kan bli pålagt erstatning', 'Når en stat styrer et annet land', 'Når en stat melder seg ut av FN', 'Når en stat endrer grunnloven'],
    explanation: 'Statsansvar oppstår når en stat bryter folkeretten. Staten kan bli pålagt å stanse handlingen og gi erstatning.',
  },
],


  'rettslære-2-4': [
  {
    question: 'Hva er de fire frihetene i EØS-avtalen?',
    options: ['Fri bevegelighet for varer, personer, tjenester og kapital', 'Ytringsfrihet, religionsfrihet, forsamlingsfrihet og pressefrihet', 'Frihet fra toll, avgifter, kvoter og lisenser', 'Frihet til å handle, arbeide, bo og studere'],
    explanation: 'EØS-avtalens kjerne er fri bevegelighet for varer, personer, tjenester og kapital.',
  },
  {
    question: 'Hva er ESA?',
    options: ['EFTAs overvåkingsorgan som påser at EØS-avtalen overholdes', 'EUs sentralbank', 'Europaparlamentet', 'Et EU-direktiv'],
    explanation: 'ESA (EFTA Surveillance Authority) overvåker at EFTA-statene oppfyller sine EØS-forpliktelser.',
  },
  {
    question: 'Hva er forskjellen mellom forordninger og direktiver i EØS-retten?',
    options: ['Forordninger gjelder direkte, direktiver må gjennomføres i nasjonal rett', 'Det er ingen forskjell', 'Direktiver har høyere rang', 'Forordninger gjelder bare for EU-land'],
    explanation: 'Forordninger skal gjennomføres "som sådan", mens direktiver gir rom for nasjonale tilpasninger.',
  },
  {
    question: 'Hva er virkningen av EØS-loven § 2?',
    options: ['EØS-regler har forrang ved motstrid med annen norsk lov', 'Norsk lov går alltid foran', 'EØS-regler må godkjennes av Stortinget', 'EØS-regler gjelder bare for bedrifter'],
    explanation: 'EØS-loven § 2 sikrer at gjennomførte EØS-regler har forrang ved motstrid med annen norsk lovgivning.',
  },
  {
    question: 'Kan restriksjoner på de fire frihetene noen gang rettferdiggjøres?',
    options: ['Ja, av hensyn til offentlig orden, sikkerhet, folkehelse eller tvingende allmenne hensyn', 'Nei, frihetene er absolutte', 'Bare av EU-domstolen', 'Bare ved krig'],
    explanation: 'Restriksjoner kan godtas hvis de er begrunnet i legitime hensyn og er proporsjonale.',
  },
],


  'rettslære-2-5': [
  {
    question: 'Hva innebærer føre-var-prinsippet i miljøretten?',
    options: ['Mangel på vitenskapelig sikkerhet skal ikke hindre tiltak mot alvorlig miljørisiko', 'Man skal alltid velge det rimeligste alternativet', 'Forurenseren skal varsles før tiltak', 'Nabør skal varsles om miljøinngrep'],
    explanation: 'Føre-var-prinsippet innebærer at man skal handle selv om det er usikkerhet om miljøkonsekvensene.',
  },
  {
    question: 'Hva er hovedregelen i forurensningsloven?',
    options: ['Forurensning er forbudt uten tillatelse', 'Forurensning er tillatt så lenge det ikke skader mennesker', 'Forurensning er tillatt mot avgift', 'Forurensning er alltid forbudt'],
    explanation: 'Forurensningsloven § 7 fastslår at forurensning er forbudt uten tillatelse fra forurensningsmyndigheten.',
  },
  {
    question: 'Hva sier Grunnloven § 112 om miljø?',
    options: ['Enhver har rett til et miljø som sikrer helsen og staten har plikt til å ivåreta dette', 'Miljøvern er frivillig', 'Bare staten har miljørettigheter', 'Miljø regulæres ikke i Grunnloven'],
    explanation: 'Grunnloven § 112 gir borgerne rett til et sunt miljø og pålegger staten en handlingsplikt.',
  },
  {
    question: 'Hva innebærer forurenser betaler-prinsippet?',
    options: ['Den som forurenser skal bære kostnadene ved forurensningen', 'Staten betaler for all forurensning', 'Nabør deler kostnadene', 'Forurensning er gratis'],
    explanation: 'Forurenser betaler-prinsippet innebærer at den som forurenser skal dekke kostnadene ved førebygging og opprydding.',
  },
  {
    question: 'Hva er klimalovens hovedmål for Norge?',
    options: ['90-95% utslippsreduksjon innen 2050', '50% reduksjon innen 2030', 'Klimanøytralitet innen 2025', 'Ingen konkrete mål'],
    explanation: 'Klimaloven lovfester at Norge skal kutte klimagassutslipp med 90-95% innen 2050.',
  },
],


  'rettslære-2-6': [
  {
    question: 'Hva er en personopplysning etter GDPR?',
    options: ['Enhver opplysning som kan knyttes til en identifiserbar person', 'Bare navn og fødselsnummer', 'Bare sensitive helseopplysninger', 'Bare digitale data'],
    explanation: 'Personopplysninger omfatter alle opplysninger som kan identifisere en person, inkludert IP-adresser og bilder.',
  },
  {
    question: 'Hva kreves for gyldig samtykke etter GDPR?',
    options: ['Frivillig, spesifikt, informert og gitt gjennom en aktiv handling', 'Bare muntlig aksept', 'Forhåndskrysset boks er nok', 'Samtykke er alltid nødvendig'],
    explanation: 'Samtykke må være frivillig, spesifikt, informert og utvetydig gjennom en aktiv handling. Forhåndskryssede bokser godtas ikke.',
  },
  {
    question: 'Hva er retten til å bli glemt?',
    options: ['Retten til å få personopplysninger om seg selv slettet', 'Retten til å bli anonymisert i rettssaker', 'Retten til å slette andres opplysninger', 'Retten til å glemme passord'],
    explanation: 'GDPR artikkel 17 gir rett til sletting når opplysningene ikke lenger er nødvendige eller samtykke trekkes tilbake.',
  },
  {
    question: 'Hva er maksimalt overtredelsesgebyr for de mest alvorlige GDPR-bruddene?',
    options: ['20 millioner euro eller 4% av global omsetning', '10 millioner euro eller 2%', '50 millioner euro eller 10%', 'Ubegrenset'],
    explanation: 'For de mest alvorlige bruddene kan gebyret være inntil 20 millioner euro eller 4% av global årsomsetning.',
  },
  {
    question: 'Hvilken av følgende er IKKE et behandlingsgrunnlag etter GDPR?',
    options: ['At opplysningene er interessante', 'Samtykke', 'Avtale med den registrerte', 'Rettslig forpliktelse'],
    explanation: 'GDPR krever et lovlig behandlingsgrunnlag som samtykke, avtale, lov, vitale interesser, myndighetsutøvelse eller berettiget interesse.',
  },
],


};

export default quizData_rettslaere;
