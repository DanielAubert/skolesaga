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

  // === Rettslære 1 – korrekte kapittel-id-er ===
  'rettslaere-1-1-1': [
    {
      question: 'Hva er forskjellen mellom rettsregler og moralregler?',
      options: ['Rettsregler håndheves av staten med tvang, mens moralregler håndheves gjennom sosiale reaksjoner', 'Det er ingen forskjell', 'Moralregler er alltid skrevet ned i lover', 'Rettsregler gjelder bare for staten, ikke for borgerne'],
      explanation: 'Rettsregler er vedtatt av lovgivende myndighet og kan håndheves med tvang (bot, fengsel). Moralregler er uskrevne normer som håndheves gjennom kritikk, utfrysing eller dårlig samvittighet.',
    },
    {
      question: 'Hvilke tre hovedfunksjoner fyller retten i samfunnet?',
      options: ['Ordne, beskytte og fordele', 'Straffe, hevne og advare', 'Skatte, kontrollere og overvåke', 'Lære, oppdra og veilede'],
      explanation: 'Retten skal ordne (skape forutsigbarhet), beskytte (verne rettigheter og friheter) og fordele (goder, byrder og ansvar) i samfunnet.',
    },
    {
      question: 'Hva kjennetegner naturrett i motsetning til positiv rett?',
      options: ['Naturrett bygger på overordnede rettigheter som står over menneskeskapt lov', 'Naturrett er all rett vedtatt av Stortinget', 'Naturrett gjelder bare i naturen', 'Naturrett er forskrifter gitt av regjeringen'],
      explanation: 'Naturrett hevder at det finnes overordnede rettigheter uavhengig av hva mennesker vedtar. Positiv rett (rettspositivisme) hevder at retten er det som faktisk er vedtatt av lovgivende myndighet.',
    },
    {
      question: 'Hvilket rettsområde tilhører strafferett?',
      options: ['Offentlig rett', 'Privatrett', 'Avtalerett', 'Arverett'],
      explanation: 'Strafferett er en del av offentlig rett, som regulerer forholdet mellom staten og borgeren. Privatrett (f.eks. avtalerett og arverett) regulerer forholdet mellom private parter.',
    },
    {
      question: 'Hvilket av disse er et eksempel på privatrett?',
      options: ['Avtalerett', 'Strafferett', 'Forvaltningsrett', 'Statsrett'],
      explanation: 'Avtalerett regulerer forholdet mellom private parter og hører til privatretten. Strafferett, forvaltningsrett og statsrett hører til offentlig rett.',
    },
  ],
  'rettslaere-1-1-2': [
    {
      question: 'Hvem utviklet maktfordelingsprinsippet?',
      options: ['Charles de Montesquieu', 'Karl Marx', 'John Locke', 'Jean-Jacques Rousseau'],
      explanation: 'Den franske filosofen Charles de Montesquieu utviklet maktfordelingsprinsippet i verket «Om lovenes ånd» (1748).',
    },
    {
      question: 'Hvilke tre statsmakter deles makten mellom etter maktfordelingsprinsippet?',
      options: ['Lovgivende, utøvende og dømmende makt', 'Konge, adel og folk', 'Stat, fylke og kommune', 'Politi, militær og domstol'],
      explanation: 'Maktfordelingsprinsippet deler statsmakten i den lovgivende (Stortinget), den utøvende (regjeringen) og den dømmende makt (domstolene).',
    },
    {
      question: 'Når ble Norges Grunnlov vedtatt?',
      options: ['17. mai 1814', '17. mai 1905', '7. juni 1905', '1. januar 1900'],
      explanation: 'Grunnloven ble vedtatt 17. mai 1814 på Eidsvoll og er den nest eldste gjeldende grunnloven i verden.',
    },
    {
      question: 'Hva innebærer legalitetsprinsippet?',
      options: ['Myndighetene kan bare gripe inn i borgernes rettigheter når de har hjemmel i lov', 'Alle lover må være på latin', 'Bare Kongen kan lage lover', 'Domstolene står over loven'],
      explanation: 'Legalitetsprinsippet (Grunnloven § 96 og § 113) krever at myndighetene må ha hjemmel i lov for å gripe inn i borgernes rettigheter.',
    },
    {
      question: 'Hva er konstitusjonell kontroll (prøvingsretten)?',
      options: ['Domstolenes rett til å prøve om lover er i samsvar med Grunnloven', 'Stortingets kontroll med regjeringen', 'Politiets kontroll av borgerne', 'Regjeringens kontroll med domstolene'],
      explanation: 'Konstitusjonell kontroll, lovfestet i Grunnloven § 89, er domstolenes rett og plikt til å prøve om en lov strider mot Grunnloven, og eventuelt sette den til side.',
    },
  ],
  'rettslaere-1-1-3': [
    {
      question: 'Hvilken domstol er Norges øverste?',
      options: ['Høyesterett', 'Lagmannsretten', 'Tingretten', 'Forliksrådet'],
      explanation: 'Høyesterett er Norges øverste domstol, jf. Grunnloven § 88. Dommer fra Høyesterett kan ikke ankes videre.',
    },
    {
      question: 'Hvor mange dommere består Høyesterett av?',
      options: ['20', '5', '11', '60'],
      explanation: 'Høyesterett består av 20 dommere ledet av justitiarius. Saker behandles normalt i avdeling med 5 dommere.',
    },
    {
      question: 'Hva er riktig rekkefølge i domstolshierarkiet fra lavest til høyest?',
      options: ['Tingrett, lagmannsrett, Høyesterett', 'Lagmannsrett, tingrett, Høyesterett', 'Høyesterett, lagmannsrett, tingrett', 'Forliksråd, Høyesterett, tingrett'],
      explanation: 'Det alminnelige domstolssystemet har tre nivåer: tingretten (første instans), lagmannsretten (ankeinstans) og Høyesterett (øverste instans).',
    },
    {
      question: 'Hvor mange lagdømmer er Norge delt inn i?',
      options: ['6', '3', '10', '60'],
      explanation: 'Norge er delt inn i 6 lagdømmer: Borgarting, Eidsivating, Agder, Gulating, Frostating og Hålogaland, hver med sin lagmannsrett.',
    },
    {
      question: 'Hvilken av disse er en spesialdomstol?',
      options: ['Jordskifteretten', 'Tingretten', 'Lagmannsretten', 'Høyesterett'],
      explanation: 'Jordskifteretten er en spesialdomstol som behandler saker om eiendomsgrenser og bruksrettigheter. Tingrett, lagmannsrett og Høyesterett er alminnelige domstoler.',
    },
  ],
  'rettslaere-1-1-4': [
    {
      question: 'Hvilken rettskilde har høyest rang i Norge?',
      options: ['Grunnloven', 'Vanlige lover', 'Forskrifter', 'Rettspraksis'],
      explanation: 'Grunnloven er øverste rettskilde. All annen lov må være i samsvar med Grunnloven.',
    },
    {
      question: 'Hva er forarbeider?',
      options: ['Dokumenter fra lovgivningsprosessen som NOU-er og proposisjoner', 'Ferdige dommer fra Høyesterett', 'Forskrifter fra regjeringen', 'Avtaler mellom private parter'],
      explanation: 'Lovforarbeider er dokumenter laget under lovgivningsprosessen (NOU, proposisjoner, innstillinger) og brukes til å forstå hva lovgiveren mente.',
    },
    {
      question: 'Hva betyr prinsippet lex superior?',
      options: ['Høyere rangert rettskilde går foran lavere', 'Nyere lov går foran eldre', 'Spesiell lov går foran generell', 'Eldre lov går foran nyere'],
      explanation: 'Lex superior betyr at den høyere rangerte rettskilden går foran ved motstrid. Lex posterior gjelder nyere foran eldre, og lex specialis spesiell foran generell.',
    },
    {
      question: 'Hvem la grunnlaget for den norske rettskildelæren?',
      options: ['Torstein Eckhoff', 'Charles de Montesquieu', 'Henrik Ibsen', 'Johan Sverdrup'],
      explanation: 'Professor Torstein Eckhoff systematiserte den norske rettskildelæren i verket «Rettskildelære» (1971), som fortsatt er pensum på juridiske fakulteter.',
    },
    {
      question: 'Hva er reelle hensyn som rettskilde?',
      options: ['Vurderinger av hva som er rimelig og rettferdig i det konkrete tilfellet', 'Konkrete lovparagrafer', 'Dommer fra Høyesterett', 'Forskrifter fra forvaltningen'],
      explanation: 'Reelle hensyn er vurderinger av hva som gir et rimelig, rettferdig og hensiktsmessig resultat. De er lavest rangert i rettskildehierarkiet.',
    },
  ],
  'rettslaere-1-1-5': [
    {
      question: 'Hva er det primære tolkningsprinsippet i norsk rett?',
      options: ['Ordlydstolkning', 'Analogisk tolkning', 'Antitetisk tolkning', 'Formålstolkning'],
      explanation: 'Ordlydstolkning er det primære tolkningsprinsippet. Utgangspunktet er alltid hva lovteksten sier, forstått slik en alminnelig person ville forstå ordene.',
    },
    {
      question: 'Hva innebærer formålstolkning?',
      options: ['Man tolker lovteksten i lys av formålet loven skal ivareta', 'Man slutter motsetningsvis fra ordlyden', 'Man anvender loven på lignende tilfeller', 'Man ser bare på den språklige ordlyden'],
      explanation: 'Formålstolkning (teleologisk tolkning) betyr at man tolker lovteksten ut fra hva lovgiveren ønsket å oppnå med bestemmelsen.',
    },
    {
      question: 'Hva er antitetisk tolkning?',
      options: ['En motsetningsslutning – det som ikke er nevnt, er ikke omfattet', 'En utvidende tolkning til lignende tilfeller', 'En tolkning ut fra lovens formål', 'En tolkning basert på forarbeider'],
      explanation: 'Antitetisk tolkning (motsetningsslutning) betyr at man slutter at det som ikke er nevnt i loven, ikke er omfattet av den.',
    },
    {
      question: 'Hva er analogisk tolkning?',
      options: ['Man anvender en lovregel på et tilfelle den ikke direkte dekker, fordi tilfellet er svært likt', 'Man slutter motsetningsvis', 'Man ser bort fra lovteksten', 'Man tolker loven strengt etter ordlyden'],
      explanation: 'Analogisk tolkning betyr å anvende en lovregel på et tilfelle den ikke direkte dekker, fordi tilfellet er så likt det loven regulerer.',
    },
    {
      question: 'Hvorfor er analogisk tolkning til skade for tiltalte forbudt i strafferetten?',
      options: ['På grunn av legalitetsprinsippet i Grunnloven § 96', 'Fordi dommere ikke kan lese', 'Fordi strafferetten ikke har lover', 'Fordi det er for tidkrevende'],
      explanation: 'Legalitetsprinsippet (Grunnloven § 96) krever at ingen kan straffes uten hjemmel i lov. Derfor er analogisk tolkning til skade for tiltalte forbudt.',
    },
  ],
  'rettslaere-1-1-6': [
    {
      question: 'Hva er de fire hovedstegene i juridisk metode?',
      options: ['Identifisere faktum, finne rettsregelen, subsumere og konkludere', 'Lese, skrive, regne og tegne', 'Anmelde, etterforske, tiltale og dømme', 'Tilbud, aksept, betaling og levering'],
      explanation: 'Juridisk metode består av fire steg: identifiser faktum, finn rettsregelen, gjennomfør subsumsjon, og trekk en konklusjon.',
    },
    {
      question: 'Hva er subsumsjon?',
      options: ['Å vurdere om faktum oppfyller vilkårene i rettsregelen', 'Å lese loven høyt', 'Å skrive en ny lov', 'Å anke en dom'],
      explanation: 'Subsumsjon er kjernen i juridisk metode: man anvender rettsregelen på det konkrete faktum og vurderer om vilkårene er oppfylt.',
    },
    {
      question: 'Hva er «faktum» i juridisk metode?',
      options: ['De faktiske omstendighetene i en sak', 'Lovteksten som er relevant', 'Konklusjonen på saken', 'Dommerens mening'],
      explanation: 'Faktum er de faktiske omstendighetene – hva som har skjedd, hvem som er involvert, og hva som er bevist.',
    },
    {
      question: 'Hva kalles de to delene en rettsregel typisk har?',
      options: ['Vilkårsside og rettsfølgeside', 'Forside og bakside', 'Innledning og avslutning', 'Påstand og bevis'],
      explanation: 'En rettsregel har en vilkårsside (betingelsene som må være oppfylt) og en rettsfølgeside (konsekvensen som inntrer hvis vilkårene er oppfylt).',
    },
    {
      question: 'Hva står IRAC for i den juridiske fremgangsmåten?',
      options: ['Issue, Rule, Application, Conclusion', 'Innledning, Resultat, Anke, Conclusion', 'Identitet, Rett, Avtale, Kontrakt', 'Inntekt, Risiko, Ansvar, Culpa'],
      explanation: 'IRAC står for Issue (rettsspørsmål), Rule (rettsregel), Application (subsumsjon) og Conclusion (konklusjon) – en strukturert metode for å løse rettsspørsmål.',
    },
  ],
  'rettslaere-1-1-7': [
    {
      question: 'Hva er EMK?',
      options: ['Den europeiske menneskerettskonvensjonen', 'Et norsk departement', 'EUs domstol', 'En internasjonal handelsavtale'],
      explanation: 'EMK er Den europeiske menneskerettskonvensjonen, vedtatt av Europarådet i 1950 og gjort til norsk lov gjennom menneskerettsloven.',
    },
    {
      question: 'Hvilken stilling har EMK i norsk rett?',
      options: ['Den har forrang foran annen norsk lov ved motstrid', 'Den er underordnet alle norske lover', 'Den gjelder ikke i Norge', 'Den gjelder bare for utlendinger'],
      explanation: 'EMK er gjort til norsk lov gjennom menneskerettsloven § 2 og har forrang foran annen norsk lov ved motstrid (menneskerettsloven § 3).',
    },
    {
      question: 'Hvor kan borgere klage dersom de mener staten har krenket deres rettigheter etter EMK?',
      options: ['Den europeiske menneskerettsdomstolen (EMD) i Strasbourg', 'Høyesterett i Oslo', 'FNs sikkerhetsråd', 'EU-domstolen i Luxembourg'],
      explanation: 'Borgere kan klage til Den europeiske menneskerettsdomstolen (EMD) i Strasbourg etter at de har uttømt nasjonale rettsmidler.',
    },
    {
      question: 'Hva er et sentralt prinsipp i FNs barnekonvensjon?',
      options: ['Barnets beste skal være et grunnleggende hensyn', 'Barn skal ikke høres', 'Barn har ingen egne rettigheter', 'Barn kan straffes som voksne'],
      explanation: 'Barnets beste (art. 3) skal være et grunnleggende hensyn i alle avgjørelser som berører barn. Barnet har også rett til å bli hørt (art. 12).',
    },
    {
      question: 'Hva er indirekte diskriminering?',
      options: ['En tilsynelatende nøytral regel som i praksis rammer en bestemt gruppe uforholdsmessig hardt', 'Når noen åpent behandles dårligere på grunn av kjønn', 'Når en lov gjelder for alle', 'Når noen får fordeler på grunn av etnisitet'],
      explanation: 'Indirekte diskriminering er en tilsynelatende nøytral regel eller praksis som i praksis rammer en bestemt gruppe uforholdsmessig hardt.',
    },
  ],
  'rettslaere-1-2-1': [
    {
      question: 'Hvilken lov er den viktigste om avtaleinngåelse i Norge?',
      options: ['Avtaleloven fra 1918', 'Kjøpsloven fra 1988', 'Straffeloven fra 2005', 'Grunnloven fra 1814'],
      explanation: 'Avtaleloven (lov om avslutning av avtaler) fra 1918 er den viktigste loven om avtaleinngåelse, fullmakt og ugyldige viljeserklæringer.',
    },
    {
      question: 'Hva innebærer at avtaleloven er deklaratorisk?',
      options: ['Partene kan avtale andre løsninger enn det loven legger opp til', 'Loven kan aldri fravikes', 'Loven gjelder bare for staten', 'Loven er ugyldig'],
      explanation: 'Deklaratorisk (fravikelig) betyr at partene kan avtale andre løsninger enn det loven legger opp til. Loven fungerer som et sikkerhetsnett.',
    },
    {
      question: 'Hva er IKKE en del av avtalefriheten?',
      options: ['Plikt til å inngå avtaler med alle som ønsker det', 'Frihet til å velge avtalepartner', 'Frihet til å bestemme innholdet', 'Formfrihet'],
      explanation: 'Avtalefriheten innebærer frihet til å inngå avtaler, velge partner, bestemme innhold og velge form. Ingen kan tvinges til å inngå en avtale.',
    },
    {
      question: 'Hva er konkludent atferd?',
      options: ['Handlinger som viser at partene er enige, uten uttrykkelige ord', 'En skriftlig kontrakt', 'En muntlig avtale i telefon', 'Et brudd på avtalen'],
      explanation: 'Konkludent atferd er stilltiende handlinger som viser at partene er enige – f.eks. å stemple bussbillett eller legge varer på båndet og betale.',
    },
    {
      question: 'Hvilken bestemmelse er generalklausulen som kan sette urimelige avtaler til side?',
      options: ['Avtaleloven § 36', 'Avtaleloven § 1', 'Kjøpsloven § 17', 'Straffeloven § 36'],
      explanation: 'Avtaleloven § 36 er generalklausulen som lar domstolene sette helt eller delvis til side en avtale dersom det ville virke urimelig å gjøre den gjeldende.',
    },
  ],
  'rettslaere-1-2-2': [
    {
      question: 'Når oppstår en bindende avtale etter avtalelovens modell?',
      options: ['Når et tilbud møtes av en overensstemmende aksept innen akseptfristen', 'Når den ene parten tenker på å avtale', 'Når pengene er betalt', 'Når en advokat er involvert'],
      explanation: 'Bindende avtale oppstår når et tilbud møtes av en aksept som samsvarer med tilbudet, innen akseptfristen.',
    },
    {
      question: 'Hva skjer dersom en «aksept» inneholder endringer eller tillegg?',
      options: ['Den regnes som et avslag og et nytt tilbud', 'Avtalen er likevel bindende', 'Den opprinnelige tilbyderen må betale erstatning', 'Aksepten er ugyldig'],
      explanation: 'En aksept med endringer eller forbehold regnes ikke som en aksept, men som et nytt tilbud (motbud), jf. avtaleloven § 6.',
    },
    {
      question: 'Hvordan må et muntlig tilbud uten akseptfrist besvares?',
      options: ['Umiddelbart, ellers faller det bort', 'Innen 14 dager', 'Innen ett år', 'Skriftlig innen en måned'],
      explanation: 'Etter avtaleloven § 3 må et muntlig tilbud (også telefon, videomøte) aksepteres umiddelbart, ellers faller det bort.',
    },
    {
      question: 'Hva sier re integra-regelen i avtaleloven § 7?',
      options: ['Et tilbud kan kalles tilbake hvis tilbakekallet kommer frem før eller samtidig med tilbudet', 'Et tilbud kan aldri kalles tilbake', 'Et tilbud er bindende i ett år', 'Et tilbud må alltid være skriftlig'],
      explanation: 'Re integra-regelen (avtaleloven § 7) sier at et tilbud eller en aksept kan kalles tilbake dersom tilbakekallet kommer frem før eller samtidig med at erklæringen kommer til mottakerens kunnskap.',
    },
    {
      question: 'Fra hvilket tidspunkt er et tilbud bindende for tilbyderen?',
      options: ['Fra det er kommet til mottakerens kunnskap', 'Fra det blir tenkt', 'Fra mottakeren har akseptert', 'Fra betaling skjer'],
      explanation: 'Et tilbud er bindende for tilbyderen fra det øyeblikk det er kommet til mottakerens kunnskap, jf. avtaleloven § 7.',
    },
  ],
  'rettslaere-1-2-3': [
    {
      question: 'Hva er en fullmakt?',
      options: ['En rett til å handle på en annens vegne med rettslig virkning for denne', 'En straff for kontraktsbrudd', 'En type avtale om kjøp', 'En domstolsavgjørelse'],
      explanation: 'En fullmakt er en rett til å handle på en annens vegne med rettslig virkning for fullmaktsgiveren.',
    },
    {
      question: 'Hvilke tre parter er involvert i et fullmaktsforhold?',
      options: ['Fullmaktsgiver, fullmektig og medkontrahent', 'Selger, kjøper og megler', 'Dommer, aktor og forsvarer', 'Stat, kommune og fylke'],
      explanation: 'De tre partene er fullmaktsgiveren (gir fullmakten), fullmektigen (handler på vegne av) og medkontrahenten (tredjepersonen avtalen inngås med).',
    },
    {
      question: 'Hva er en stillingsfullmakt?',
      options: ['Fullmakt som følger av at en person har en bestemt stilling', 'En skriftlig fullmakt kunngjort i avis', 'Fullmakt gitt bare internt uten tredjepersons kunnskap', 'En fullmakt som gjelder hele virksomheten'],
      explanation: 'En stillingsfullmakt følger av at en person har en bestemt stilling – f.eks. en butikkmedarbeider som selger butikkens varer.',
    },
    {
      question: 'Hva skjer som hovedregel når fullmektigen handler utenfor fullmaktens grenser?',
      options: ['Fullmaktsgiveren er ikke bundet av avtalen', 'Fullmaktsgiveren er alltid bundet', 'Tredjepersonen blir straffet', 'Avtalen blir automatisk gyldig'],
      explanation: 'Ved overskridelse av fullmakten er fullmaktsgiveren som hovedregel ikke bundet (avtaleloven § 11), men tredjepersonen kan kreve erstatning fra fullmektigen.',
    },
    {
      question: 'Hva er ratihabisjon?',
      options: ['Fullmaktsgiverens etterfølgende godkjennelse av en avtale', 'En type tvang', 'Et brudd på avtaleloven', 'Tilbakekall av et tilbud'],
      explanation: 'Ratihabisjon er fullmaktsgiverens etterfølgende godkjennelse av en avtale fullmektigen inngikk utenfor fullmakten. Avtalen blir da bindende som om fullmakt hadde foreligget.',
    },
  ],
  'rettslaere-1-2-4': [
    {
      question: 'Hva slags ugyldighet gir grov tvang etter avtaleloven § 28?',
      options: ['Sterk ugyldighet – ugyldig overfor alle, også tredjepersoner i god tro', 'Svak ugyldighet', 'Ingen ugyldighet', 'Midlertidig ugyldighet'],
      explanation: 'Grov tvang (§ 28) ved vold eller trusler om vold gir sterk ugyldighet – avtalen er ugyldig overfor alle, også tredjepersoner i god tro.',
    },
    {
      question: 'Hva er svik etter avtaleloven § 30?',
      options: ['Svikaktig adferd som bevisst villeder motparten til å inngå avtalen', 'Trusler om vold', 'Manglende myndighet', 'En urimelig høy pris'],
      explanation: 'Svik (§ 30) er svikaktig adferd – bevisst villedning eller løgn – fra medkontrahenten som fremkaller avtalen.',
    },
    {
      question: 'Når blir man myndig etter vergemålsloven?',
      options: ['Ved fylte 18 år', 'Ved fylte 15 år', 'Ved fylte 16 år', 'Ved fylte 21 år'],
      explanation: 'Man blir myndig (får rettslig handleevne) ved fylte 18 år. Umyndige kan som hovedregel ikke binde seg ved avtale.',
    },
    {
      question: 'Hva regulerer utnyttelse etter avtaleloven § 31?',
      options: ['At noen utnytter en annens nødstilstand, lettsinne, svakhet eller avhengighet til urimelige fordeler', 'At noen lyver om en vare', 'At noen truer med vold', 'At en mindreårig signerer en avtale'],
      explanation: 'Utnyttelse (§ 31) rammer tilfeller der noen utnytter en annens nødstilstand, lettsinne, svakhet eller avhengighetsforhold, og det er et klart misforhold mellom ytelsene.',
    },
    {
      question: 'Hva er avtaleloven § 36 ofte kalt?',
      options: ['Generalklausulen eller sikkerhetsventilen', 'Tvangsparagrafen', 'Myndighetsparagrafen', 'Svikparagrafen'],
      explanation: 'Avtaleloven § 36 kalles generalklausulen – en sikkerhetsventil som lar domstolene sette urimelige avtaler helt eller delvis til side.',
    },
  ],
  'rettslaere-1-2-5': [
    {
      question: 'For hvilke kjøp gjelder kjøpsloven?',
      options: ['Kjøp mellom privatpersoner og mellom næringsdrivende', 'Bare forbrukerkjøp', 'Bare kjøp av fast eiendom', 'Bare internasjonale kjøp'],
      explanation: 'Kjøpsloven gjelder for kjøp mellom to privatpersoner og mellom to næringsdrivende. Den gjelder ikke forbrukerkjøp (forbrukerkjøpsloven) eller fast eiendom (avhendingslova).',
    },
    {
      question: 'Foreligger det mangel selv ved «solgt som den er»-forbehold?',
      options: ['Ja, blant annet hvis tingen er i vesentlig dårligere stand enn forventet', 'Nei, aldri', 'Bare hvis kjøper klager innen en dag', 'Bare ved kjøp av fast eiendom'],
      explanation: 'Selv ved «solgt som den er» foreligger mangel hvis selger ga uriktige opplysninger, holdt tilbake vesentlige opplysninger, eller tingen er i vesentlig dårligere stand enn forventet (kjøpsloven § 19).',
    },
    {
      question: 'Når må mangelen ha foreligget for at den skal være en mangel etter kjøpsloven?',
      options: ['På leveringstidspunktet (risikoens overgang)', 'Ett år etter kjøpet', 'Når kjøperen oppdager den', 'Når selgeren får vite om den'],
      explanation: 'Mangelen må ha foreligget på leveringstidspunktet (risikoens overgang), jf. § 21. Normal slitasje etter levering er ikke en mangel.',
    },
    {
      question: 'Hva kreves for at kjøperen kan heve kjøpet etter kjøpsloven § 39?',
      options: ['At mangelen utgjør et vesentlig kontraktsbrudd', 'At mangelen er liten', 'At selger samtykker', 'At kjøper har angret seg'],
      explanation: 'Etter kjøpsloven § 39 kan kjøperen heve dersom mangelen utgjør et vesentlig kontraktsbrudd. Terskelen for heving er høy.',
    },
    {
      question: 'Hvilken av disse er en misligholdsbeføyelse ved mangel?',
      options: ['Prisavslag', 'Angrerett', 'Tvangssalg', 'Pågripelse'],
      explanation: 'Misligholdsbeføyelser ved mangel er retting (§ 34), prisavslag (§ 38), heving (§ 39) og erstatning (§ 40).',
    },
  ],
  'rettslaere-1-2-6': [
    {
      question: 'Når gjelder forbrukerkjøpsloven?',
      options: ['Når en forbruker kjøper fra en næringsdrivende', 'Når to privatpersoner handler med hverandre', 'Når to bedrifter handler', 'Ved kjøp av fast eiendom'],
      explanation: 'Forbrukerkjøpsloven gjelder når en forbruker (privatperson til privat bruk) kjøper fra en næringsdrivende.',
    },
    {
      question: 'Hva betyr det at forbrukerkjøpsloven er preseptorisk?',
      options: ['Den kan ikke fravikes til ulempe for forbrukeren', 'Den kan fritt fravikes', 'Den gjelder bare for staten', 'Den er frivillig'],
      explanation: 'Preseptorisk (ufravikelig) betyr at loven ikke kan fravikes til ulempe for forbrukeren, jf. § 3.',
    },
    {
      question: 'Hvem har bevisbyrden de første seks månedene etter levering i forbrukerkjøp?',
      options: ['Selgeren', 'Kjøperen', 'Produsenten', 'Forbrukertilsynet'],
      explanation: 'Etter forbrukerkjøpsloven § 18 andre ledd presumeres en mangel som viser seg innen seks måneder å ha foreligget ved levering. Selgeren har bevisbyrden.',
    },
    {
      question: 'Hva er den lange absolutte reklamasjonsfristen for varer ment å vare vesentlig lenger?',
      options: ['5 år', '2 år', '10 år', '6 måneder'],
      explanation: 'Den absolutte reklamasjonsfristen er 2 år for de fleste varer, men 5 år for varer som er ment å vare vesentlig lenger (f.eks. hvitevarer, møbler, biler).',
    },
    {
      question: 'Kan selgeren ta «solgt som den er»-forbehold i forbrukerkjøp?',
      options: ['Nei, slike forbehold er ugyldige', 'Ja, alltid', 'Bare ved kjøp over 10 000 kr', 'Bare ved netthandel'],
      explanation: 'I motsetning til kjøpsloven kan selgeren ikke ta «solgt som den er»-forbehold i forbrukerkjøp (§ 17). Slike forbehold er ugyldige.',
    },
  ],
  'rettslaere-1-2-7': [
    {
      question: 'Hva er forskjellen mellom retting og omlevering?',
      options: ['Retting er reparasjon av mangelen, omlevering er levering av en ny vare', 'Det er ingen forskjell', 'Retting betyr å heve kjøpet', 'Omlevering betyr å gi prisavslag'],
      explanation: 'Retting betyr at selgeren reparerer mangelen, mens omlevering betyr at selgeren leverer en ny, mangelfri vare i stedet.',
    },
    {
      question: 'Hva innebærer prisavslag som misligholdsbeføyelse?',
      options: ['Kjøpesummen reduseres, men kjøperen beholder varen', 'Hele avtalen oppheves', 'Varen byttes ut med en ny', 'Selgeren betaler erstatning'],
      explanation: 'Prisavslag innebærer at kjøpesummen reduseres for å kompensere for mangelen. Kjøperen beholder varen, men betaler en lavere pris.',
    },
    {
      question: 'Hva skjer ved heving av et kjøp?',
      options: ['Hele avtalen oppheves – varen leveres tilbake og pengene tilbakebetales', 'Kjøperen får en ny vare', 'Prisen reduseres litt', 'Selgeren reparerer varen'],
      explanation: 'Ved heving oppheves hele kjøpsavtalen: kjøperen leverer varen tilbake, og selgeren tilbakebetaler kjøpesummen.',
    },
    {
      question: 'Hvilken terskel kreves for heving i forbrukerkjøp etter § 32?',
      options: ['At mangelen ikke er uvesentlig', 'At mangelen er vesentlig kontraktsbrudd', 'At selger samtykker', 'At kjøperen angrer'],
      explanation: 'I forbrukerkjøp kan kjøperen heve dersom mangelen ikke er uvesentlig (§ 32) – en lavere terskel enn kjøpslovens krav om «vesentlig kontraktsbrudd».',
    },
    {
      question: 'Hva slags ansvar har selgeren for direkte tap ved mangel i forbrukerkjøp?',
      options: ['Objektivt ansvar – ansvarlig uavhengig av skyld', 'Ansvar bare ved forsett', 'Ingen ansvar', 'Ansvar bare ved grov uaktsomhet'],
      explanation: 'I forbrukerkjøp har selgeren objektivt ansvar for direkte tap (§ 33) – han er ansvarlig uavhengig av om han visste om mangelen.',
    },
  ],
  'rettslaere-1-2-8': [
    {
      question: 'Hvor lang er angrefristen ved fjernsalg etter angrerettloven?',
      options: ['14 dager fra varen er mottatt', '7 dager', '30 dager', '24 timer'],
      explanation: 'Angrefristen er 14 dager fra forbrukeren mottok varen (angrerettloven § 21), og forbrukeren trenger ikke oppgi noen grunn.',
    },
    {
      question: 'Hvor gjelder angreretten?',
      options: ['Ved fjernsalg og salg utenom faste forretningslokaler', 'I fysiske butikker', 'Bare ved kjøp av mat', 'Bare ved kjøp over 5000 kr'],
      explanation: 'Angreretten gjelder ved fjernsalg (netthandel, telefonsalg) og salg utenom faste forretningslokaler (dørsalg) – ikke i fysiske butikker.',
    },
    {
      question: 'Hva skjer med angrefristen dersom selgeren ikke har opplyst om angreretten?',
      options: ['Den forlenges med inntil 12 måneder', 'Den faller helt bort', 'Den blir på 7 dager', 'Ingenting endres'],
      explanation: 'Dersom selgeren ikke har opplyst om angreretten, forlenges angrefristen med inntil 12 måneder (§ 21 tredje ledd).',
    },
    {
      question: 'Hvilken av disse er unntatt fra angreretten?',
      options: ['Spesialtilpassede varer laget etter forbrukerens spesifikasjoner', 'Vanlige klær kjøpt på nett', 'En bok kjøpt på nett', 'En mobiltelefon kjøpt på nett'],
      explanation: 'Spesialtilpassede varer (f.eks. gravering, spesialsydd dress) er unntatt fra angreretten (§ 22 bokstav c).',
    },
    {
      question: 'Hva regulerer GDPR og personopplysningsloven ved netthandel?',
      options: ['Hvordan nettbutikker kan behandle dine personopplysninger', 'Hvor mye varer kan koste', 'Hvor raskt varer skal leveres', 'Hvilke varer som er lovlige'],
      explanation: 'GDPR og personopplysningsloven regulerer hvordan nettbutikker kan behandle personopplysninger, blant annet krav om samtykke til markedsføring og rett til sletting.',
    },
  ],
  'rettslaere-1-3-1': [
    {
      question: 'Hva er erstatning?',
      options: ['Et økonomisk vederlag skadevolder betaler skadelidte for å gjenopprette et tap', 'En straff staten ilegger', 'En avtale mellom kjøper og selger', 'En type forsikring'],
      explanation: 'Erstatning er et økonomisk vederlag den ansvarlige (skadevolder) må betale til skadelidte for å sette vedkommende i samme økonomiske stilling som om skaden ikke hadde skjedd.',
    },
    {
      question: 'Hva er det viktigste formålet med erstatningsretten?',
      options: ['Reparasjon (gjenoppretting av tapet)', 'Hevn mot skadevolder', 'Å skaffe staten inntekter', 'Å straffe skadevolder hardt'],
      explanation: 'Det viktigste formålet er reparasjon – å gjenopprette skadelidtes tap slik at vedkommende stilles som om skaden ikke hadde skjedd. I tillegg virker erstatningsretten preventivt.',
    },
    {
      question: 'Hva innebærer reparasjonsprinsippet?',
      options: ['Skadelidte skal verken tjene eller tape på skaden', 'Skadelidte skal alltid få dobbelt erstatning', 'Skadevolder skal straffes med fengsel', 'Erstatningen skal være symbolsk'],
      explanation: 'Reparasjonsprinsippet innebærer at erstatningen skal gjenopprette tapet – verken mer (ingen overkompensasjon) eller mindre (full kompensasjon).',
    },
    {
      question: 'Hvilke tre grunnvilkår må være oppfylt for erstatning?',
      options: ['Ansvarsgrunnlag, årsakssammenheng og økonomisk tap', 'Forsett, vinning og tvang', 'Tilbud, aksept og betaling', 'Lov, dom og straff'],
      explanation: 'For erstatning må tre vilkår være oppfylt samtidig: ansvarsgrunnlag, årsakssammenheng og økonomisk tap. Mangler ett, foreligger ikke erstatningsplikt.',
    },
    {
      question: 'Hvilken lov er den viktigste på erstatningsrettens område?',
      options: ['Skadeserstatningsloven (1969)', 'Avtaleloven (1918)', 'Straffeloven (2005)', 'Kjøpsloven (1988)'],
      explanation: 'Skadeserstatningsloven (1969) er den viktigste loven, men mye av erstatningsretten bygger fortsatt på ulovfestede regler utviklet gjennom rettspraksis.',
    },
  ],
  'rettslaere-1-3-2': [
    {
      question: 'Hva betyr culpa?',
      options: ['Skyld (uaktsomhet)', 'Tilfeldighet', 'Objektivt ansvar', 'Erstatning'],
      explanation: 'Culpa er latin og betyr «skyld». Culpa-ansvaret er uaktsomhetsansvaret – den som handler uaktsomt og påfører skade, må betale erstatning.',
    },
    {
      question: 'Hva er aktsomhetsnormen i culpa-vurderingen?',
      options: ['Hva en alminnelig fornuftig person ville gjort i samme situasjon (bonus pater familias)', 'Hva skadevolder selv mente var greit', 'Hva skadelidte ønsket', 'Hva loven uttrykkelig sier i hvert tilfelle'],
      explanation: 'Aktsomhetsnormen («bonus pater familias») er en objektiv vurdering av hva en alminnelig fornuftig person ville ha gjort i samme situasjon.',
    },
    {
      question: 'Hvilken gruppe har en skjerpet aktsomhetsnorm?',
      options: ['Profesjonsutøvere som leger, advokater og håndverkere', 'Barn under 10 år', 'Pensjonister', 'Turister'],
      explanation: 'Profesjonsutøvere (leger, advokater, håndverkere) har en skjerpet aktsomhetsnorm fordi det stilles strengere krav til deres faglige opptreden.',
    },
    {
      question: 'Hva må foreligge mellom uaktsomheten og skaden for erstatningsansvar?',
      options: ['Årsakssammenheng', 'En skriftlig avtale', 'Et tilbud og en aksept', 'En straffedom'],
      explanation: 'Det må foreligge årsakssammenheng – den uaktsomme handlingen må ha forårsaket skaden. Tenkes handlingen bort, ville skaden ikke oppstått.',
    },
    {
      question: 'Hva er hovedregelen for hva skadelidte kan kreve erstattet?',
      options: ['Et økonomisk tap som kan uttrykkes i penger', 'Tort og svie uten lovhjemmel', 'Et symbolsk beløp', 'Bare fremtidige tap'],
      explanation: 'Hovedregelen er at skadelidte må ha lidt et økonomisk tap som kan uttrykkes i penger. Norsk erstatningsrett gir som hovedregel ikke erstatning for «tort og svie» uten lovhjemmel.',
    },
  ],
  'rettslaere-1-3-3': [
    {
      question: 'Hva er objektivt ansvar?',
      options: ['Erstatningsansvar uten krav om skyld', 'Ansvar bare ved forsett', 'Ansvar bare ved grov uaktsomhet', 'Ansvar bare for staten'],
      explanation: 'Objektivt ansvar (risikoansvar) er erstatningsansvar der skadevolder kan holdes ansvarlig uavhengig av om vedkommende har utvist skyld.',
    },
    {
      question: 'Hva regulerer arbeidsgiveransvaret (skadeserstatningsloven § 2-1)?',
      options: ['At arbeidsgiver er ansvarlig for skade arbeidstaker volder uaktsomt under arbeidet', 'At arbeidstaker alltid betaler selv', 'At staten dekker alle skader', 'At kunder er ansvarlige'],
      explanation: 'Arbeidsgiveransvaret innebærer at arbeidsgiver er objektivt ansvarlig for skade som arbeidstaker volder forsettlig eller uaktsomt under utføring av arbeidet.',
    },
    {
      question: 'Hva kreves for ulovfestet objektivt ansvar etter rettspraksis?',
      options: ['En stadig, typisk og ekstraordinær risiko', 'En enkeltstående tilfeldig hendelse', 'At skadevolder har forsett', 'At skadelidte samtykker'],
      explanation: 'Det ulovfestede objektive ansvaret gjelder ved en stadig, typisk og ekstraordinær risiko knyttet til en virksomhet, utviklet gjennom Høyesteretts praksis.',
    },
    {
      question: 'Hva regulerer bilansvarslova?',
      options: ['Objektivt ansvar for skade som motorvogn gjør', 'Fartsgrenser på veiene', 'Avgift på bensin', 'Krav til førerkort'],
      explanation: 'Bilansvarslova pålegger eier/bruker av motorvogn objektivt ansvar for skade motorvognen gjør. Trafikkforsikring er obligatorisk.',
    },
    {
      question: 'Hva kreves for produktansvar etter produktansvarsloven?',
      options: ['At produktet har en sikkerhetsmangel som forårsaker skade', 'At produsenten har handlet forsettlig', 'At kjøperen har klaget innen en dag', 'At produktet er dyrt'],
      explanation: 'Produktansvaret er objektivt: det kreves at produktet hadde en sikkerhetsmangel (defekt), årsakssammenheng og et tap. Produsenten kan ikke fri seg ved å vise til forsvarlig opptreden.',
    },
  ],
  'rettslaere-1-3-4': [
    {
      question: 'Hva er hovedspørsmålet i betingelseslæren?',
      options: ['Ville skaden ha oppstått dersom handlingen tenkes borte?', 'Hvem har mest penger?', 'Var handlingen forsettlig?', 'Hvor stort er tapet?'],
      explanation: 'Betingelseslæren (conditio sine qua non) spør om skaden ville ha oppstått dersom den ansvarsbetingende handlingen tenkes borte. Hvis nei, foreligger årsakssammenheng.',
    },
    {
      question: 'Hva er samvirkende årsaker?',
      options: ['Flere årsaker som virker sammen for å fremkalle skaden', 'En enkelt klar årsak', 'En årsak som ikke har betydning', 'En tilfeldig hendelse'],
      explanation: 'Samvirkende årsaker (konkurranseårsaker) er flere årsaker som virker sammen for å fremkalle skaden. Hvis skaden ikke ville oppstått uten begge, er begge nødvendige betingelser.',
    },
    {
      question: 'Hva setter adekvanslæren en grense for?',
      options: ['Erstatningsansvaret – fjerne, avledede og upåregnelige skadefølger erstattes ikke', 'Skadevolders inntekt', 'Antall vitner i en sak', 'Domstolens størrelse'],
      explanation: 'Adekvanslæren setter en ytre grense for erstatningsansvaret: selv ved årsakssammenheng kan ansvaret avskjæres dersom skadefølgen er for fjern, avledet og upåregnelig.',
    },
    {
      question: 'Fra hvilken dom stammer hovedårsakslæren?',
      options: ['P-pille-dommen II (Rt. 1992 s. 64)', 'Eidsvolldommen', 'Strand Lobben-dommen', 'Fiskerigrensesaken'],
      explanation: 'Hovedårsakslæren stammer fra P-pille-dommen II (Rt. 1992 s. 64), der Høyesterett uttalte at det er tilstrekkelig at årsaken er en ikke uvesentlig medvirkende årsak.',
    },
    {
      question: 'Hva er sentralt i adekvansvurderingen?',
      options: ['Om skadefølgen var påregnelig (forutsigbar)', 'Om skadevolder har forsikring', 'Om skadelidte er rik', 'Om saken er gammel'],
      explanation: 'I adekvansvurderingen legges det vekt på påregnelighet (forutsigbarhet), nærhet i årsaksrekken og skadens art og omfang.',
    },
  ],
  'rettslaere-1-3-5': [
    {
      question: 'Hva er utgangspunktet ved erstatningsutmåling?',
      options: ['Reparasjonsprinsippet – skadelidte skal stilles som om skaden ikke hadde skjedd', 'Skadelidte skal få mest mulig', 'Skadevolder skal betale lite', 'Erstatningen skal være symbolsk'],
      explanation: 'Utgangspunktet er reparasjonsprinsippet: skadelidte skal stilles økonomisk som om skaden ikke hadde skjedd.',
    },
    {
      question: 'Hvordan beregnes erstatning ved totalskade på en gjenstand?',
      options: ['Etter gjenanskaffelsesverdi med fradrag for alder og slitasje', 'Etter nyprisen uten fradrag', 'Etter kjøperens følelser', 'Det gis ingen erstatning'],
      explanation: 'Ved totaltap erstattes gjenanskaffelsesverdien for en tilsvarende gjenstand i tilsvarende stand. Det gjøres fradrag for alder, slitasje og bruk (elde-fradrag).',
    },
    {
      question: 'Hva kreves for ménerstatning etter skadeserstatningsloven § 3-2?',
      options: ['Varig (livsvarig) og betydelig skade med minst 15 % medisinsk invaliditet', 'At skadelidte har økonomisk tap', 'At skaden er midlertidig', 'At skadevolder har forsett'],
      explanation: 'Ménerstatning krever at skaden er varig (minst 10 år, i praksis livsvarig) og betydelig (minst 15 % medisinsk invaliditet). Begge vilkår er kumulative.',
    },
    {
      question: 'Hva slags skyld kreves for oppreisning etter skadeserstatningsloven § 3-5?',
      options: ['Forsett eller grov uaktsomhet', 'Simpel uaktsomhet er nok', 'Objektivt ansvar uten skyld', 'Ingen skyld kreves'],
      explanation: 'Oppreisning krever kvalifisert skyld – skadevolder må ha handlet forsettlig eller grovt uaktsomt. Simpel uaktsomhet er ikke tilstrekkelig.',
    },
    {
      question: 'Hva kompenserer ménerstatning for?',
      options: ['Ikke-økonomisk tap som redusert livskvalitet, smerter og ulemper', 'Bare tapt arbeidsinntekt', 'Bare reparasjonskostnader', 'Skadevolders advokatutgifter'],
      explanation: 'Ménerstatning er erstatning for ikke-økonomisk tap – den kompenserer for redusert livskvalitet, smerter og ulemper som ikke kan måles i kroner.',
    },
  ],
  'rettslaere-1-3-6': [
    {
      question: 'Hva er medvirkning etter skadeserstatningsloven § 5-1?',
      options: ['At skadelidte selv har bidratt til skaden ved egen uaktsomhet', 'At skadevolder har en medskyldig', 'At staten betaler en del', 'At forsikringen dekker alt'],
      explanation: 'Medvirkning innebærer at skadelidte selv har bidratt til skaden ved egen skyld (uaktsomhet). Erstatningen kan da reduseres eller falle helt bort.',
    },
    {
      question: 'Hva er den vanligste virkningen av medvirkning?',
      options: ['En prosentvis avkorting av erstatningen', 'At skadelidte må betale skadevolder', 'At saken avvises', 'At skadevolder straffes'],
      explanation: 'Medvirkning gir normalt en prosentvis avkorting i erstatningen, fastsatt etter en helhetsvurdering av skadelidtes skyld og forholdene ellers.',
    },
    {
      question: 'Hva innebærer lemping etter skadeserstatningsloven § 5-2?',
      options: ['At erstatningsansvaret settes ned dersom det ville virke urimelig tyngende for skadevolder', 'At erstatningen økes', 'At skadelidte får dobbel erstatning', 'At saken henlegges'],
      explanation: 'Lemping er en sikkerhetsventil som lar retten sette ned erstatningen dersom fullt ansvar ville virke urimelig tyngende for skadevolder.',
    },
    {
      question: 'Hvilket moment er sentralt i lempingsvurderingen?',
      options: ['Den ansvarliges økonomiske bæreevne og forsikringsmuligheter', 'Skadelidtes alder', 'Dommerens humør', 'Hvor saken behandles'],
      explanation: 'I lempingsvurderingen legges det vekt på skadens størrelse, den ansvarliges økonomiske bæreevne, forsikringsmuligheter og skyldgrad.',
    },
    {
      question: 'Hvilken rolle spiller forsikring i erstatningsretten?',
      options: ['De fleste erstatningskrav håndteres i praksis av forsikringsselskaper', 'Forsikring er forbudt i erstatningssaker', 'Forsikring øker skadevolders ansvar', 'Forsikring har ingen betydning'],
      explanation: 'Forsikring spiller en sentral rolle: de fleste erstatningskrav håndteres i praksis av forsikringsselskaper gjennom ansvarsforsikringer som bil-, innbo- og yrkesskadeforsikring.',
    },
  ],
  'rettslaere-1-4-1': [
    {
      question: 'Hvem forfølger og straffer lovbrytere i et moderne rettssamfunn?',
      options: ['Staten gjennom påtalemyndigheten', 'Den fornærmede selv', 'Forsikringsselskapene', 'Kommunen'],
      explanation: 'Strafferetten er offentlig rett – det er staten (påtalemyndigheten) som forfølger og straffer lovbrytere, ikke den fornærmede.',
    },
    {
      question: 'Hva innebærer legalitetsprinsippet i strafferetten?',
      options: ['Ingen kan straffes uten hjemmel i lov', 'Alle handlinger er forbudt', 'Dommere kan straffe fritt', 'Bare politiet kan straffe'],
      explanation: 'Legalitetsprinsippet (Grunnloven § 96) innebærer at ingen kan dømmes uten etter lov eller straffes uten etter dom. Det har tre sider: lovskravet, klarhetskravet og analogiforbudet.',
    },
    {
      question: 'Hva er allmennprevensjon?',
      options: ['At straffetrusselen avskrekker befolkningen generelt fra lovbrudd', 'At den enkelte lovbryter avskrekkes', 'At fengsler bygges', 'At politiet ansetter flere'],
      explanation: 'Allmennprevensjon innebærer at trusselen om straff skal avskrekke befolkningen generelt fra å begå lovbrudd. Individualprevensjon retter seg mot den enkelte lovbryter.',
    },
    {
      question: 'Når trådte den gjeldende straffeloven i kraft?',
      options: ['1. oktober 2015', '17. mai 1814', '1. januar 2000', '20. mai 1902'],
      explanation: 'Den gjeldende straffeloven (lov 20. mai 2005 nr. 28) trådte i kraft 1. oktober 2015 og erstattet den gamle straffeloven av 1902.',
    },
    {
      question: 'Hva forbyr Grunnloven § 97?',
      options: ['Tilbakevirkende straffelover', 'Ytringsfrihet', 'Eiendomsrett', 'Stemmerett'],
      explanation: 'Grunnloven § 97 forbyr tilbakevirkende lover – man kan ikke straffes for handlinger som var lovlige da de ble begått.',
    },
  ],
  'rettslaere-1-4-2': [
    {
      question: 'Hvor mange straffbarhetsvilkår må være oppfylt for å straffe noen?',
      options: ['Fire', 'To', 'Tre', 'Fem'],
      explanation: 'Fire straffbarhetsvilkår må være oppfylt samtidig: lovbrudd (gjerningsbeskrivelsen), skyld, tilregnelighet og strafferettslig alder. Mangler ett, kan personen ikke straffes.',
    },
    {
      question: 'Hva kalles det første, objektive straffbarhetsvilkåret?',
      options: ['At handlingen oppfyller gjerningsbeskrivelsen i et straffebud', 'At gjerningspersonen er over 15 år', 'At gjerningspersonen er tilregnelig', 'At det er utvist forsett'],
      explanation: 'Det første (objektive) vilkåret er at handlingen må oppfylle gjerningsbeskrivelsen i et straffebud – alle elementene i beskrivelsen må være dekket.',
    },
    {
      question: 'Hva er hovedregelen for skyldkravet etter straffeloven § 21?',
      options: ['Straffeloven rammer den som handler med forsett, med mindre annet er bestemt', 'Uaktsomhet er alltid nok', 'Skyld er ikke nødvendig', 'Bare grov uaktsomhet straffes'],
      explanation: 'Etter straffeloven § 21 rammer straffeloven bare den som handler med forsett, med mindre annet er bestemt. For noen lovbrudd er uaktsomhet tilstrekkelig.',
    },
    {
      question: 'Hvilken tilstand gjør en person utilregnelig etter straffeloven § 20?',
      options: ['Psykose på handlingstidspunktet', 'Å være sint', 'Å være trøtt', 'Å være uenig med loven'],
      explanation: 'En person er utilregnelig dersom vedkommende var under 15 år, psykotisk, psykisk utviklingshemmet i høy grad eller hadde en sterk bevissthetsforstyrrelse på handlingstidspunktet (§ 20).',
    },
    {
      question: 'Hva er den kriminelle lavalderen i Norge?',
      options: ['15 år', '18 år', '14 år', '16 år'],
      explanation: 'Den kriminelle lavalderen er 15 år (straffeloven § 20). Barn under 15 år kan ikke straffes, uansett hvor alvorlig handlingen er.',
    },
  ],
  'rettslaere-1-4-3': [
    {
      question: 'Hvilke tre former for forsett finnes etter straffeloven § 22?',
      options: ['Hensiktsforsett, sannsynlighetsforsett og dolus eventualis', 'Grov, simpel og bevisst forsett', 'Direkte, indirekte og tilfeldig forsett', 'Forsett, uaktsomhet og hendelig uhell'],
      explanation: 'Straffeloven § 22 definerer tre former for forsett: hensiktsforsett, sannsynlighetsforsett og dolus eventualis (eventuelt forsett).',
    },
    {
      question: 'Hva er hensiktsforsett?',
      options: ['Gjerningspersonen handler med hensikt om å oppfylle gjerningsbeskrivelsen', 'Gjerningspersonen er uaktsom', 'Gjerningspersonen aksepterer muligheten', 'Gjerningspersonen vet ikke hva han gjør'],
      explanation: 'Hensiktsforsett betyr at gjerningspersonen handler med hensikt – følgen (lovbruddet) er nettopp det gjerningspersonen ønsker å oppnå.',
    },
    {
      question: 'Hva er sannsynlighetsforsett?',
      options: ['Gjerningspersonen holder det for sikkert eller mest sannsynlig at handlingen oppfyller gjerningsbeskrivelsen', 'Gjerningspersonen ønsker resultatet', 'Gjerningspersonen er helt uvitende', 'Gjerningspersonen handler i søvne'],
      explanation: 'Sannsynlighetsforsett foreligger når gjerningspersonen anser det som mer enn 50 % sannsynlig at handlingen vil oppfylle gjerningsbeskrivelsen.',
    },
    {
      question: 'Hva er uaktsomhet etter straffeloven § 23?',
      options: ['Gjerningspersonen handler i strid med hva en alminnelig fornuftig person ville gjort', 'Gjerningspersonen handler med vilje', 'Gjerningspersonen ønsker resultatet', 'Gjerningspersonen er psykotisk'],
      explanation: 'Uaktsomhet foreligger når gjerningspersonen handler i strid med hva en alminnelig fornuftig person ville gjort i tilsvarende situasjon. Uaktsomhet er en lavere skyldgrad enn forsett.',
    },
    {
      question: 'Hvilken skyldgrad er mest klanderverdig?',
      options: ['Hensiktsforsett', 'Simpel uaktsomhet', 'Grov uaktsomhet', 'Dolus eventualis'],
      explanation: 'Hensiktsforsett er den mest klanderverdige skyldgraden (f.eks. planlagt drap), mens simpel uaktsomhet er minst klanderverdig.',
    },
  ],
  'rettslaere-1-4-4': [
    {
      question: 'Hva er straffrihetsgrunner?',
      options: ['Omstendigheter som gjør at en ellers straffbar handling blir lovlig eller straffri', 'Grunner til å øke straffen', 'Regler om hvordan man anmelder', 'Krav til politiet'],
      explanation: 'Straffrihetsgrunner er omstendigheter som gjør at en ellers straffbar handling blir lovlig eller straffri, selv om alle straffbarhetsvilkårene er oppfylt.',
    },
    {
      question: 'Hva tillater nødrett etter straffeloven § 17?',
      options: ['En straffbar handling som er nødvendig for å avverge en fare, når skaderisikoen er klart mindre enn faren', 'Enhver handling man ønsker', 'Å straffe andre selv', 'Å bryte loven uten grunn'],
      explanation: 'Nødrett (§ 17) tillater en straffbar handling som er nødvendig for å avverge en fare, forutsatt at handlingens skaderisiko er klart mindre enn faren som truer.',
    },
    {
      question: 'Hva tillater nødverge etter straffeloven § 18?',
      options: ['Forsvar mot et ulovlig angrep, så lenge forsvaret ikke er åpenbart uforsvarlig', 'Angrep på naboen', 'Hevn etter et lovlig angrep', 'Å skade hvem som helst'],
      explanation: 'Nødverge (§ 18) tillater forsvar mot et ulovlig angrep, forutsatt at handlingen ikke går lenger enn nødvendig og ikke er åpenbart uforsvarlig.',
    },
    {
      question: 'Hva er forskjellen mellom nødrett og nødverge?',
      options: ['Nødverge gjelder forsvar mot ulovlige angrep, nødrett gjelder farer generelt', 'Det er ingen forskjell', 'Nødrett gjelder bare i fengsel', 'Nødverge gjelder bare for politiet'],
      explanation: 'Nødverge gjelder forsvar mot ulovlige angrep og har et mildere forholdsmessighetskrav. Nødrett gjelder alle typer fare (naturfare, sykdom, ulykker).',
    },
    {
      question: 'Hva skjer ved overskridelse av nødverge på grunn av frykt eller opphisselse?',
      options: ['Gjerningspersonen kan likevel frifinnes', 'Gjerningspersonen får alltid streng straff', 'Saken avvises automatisk', 'Det får ingen betydning'],
      explanation: 'Etter straffeloven § 18 andre ledd kan gjerningspersonen frifinnes dersom overskridelsen skyldes frykt, opphisselse eller forvirring som følge av angrepet.',
    },
  ],
  'rettslaere-1-4-5': [
    {
      question: 'Hva er den mest inngripende ordinære straffereaksjonen?',
      options: ['Fengsel', 'Bot', 'Samfunnsstraff', 'Påtaleunnlatelse'],
      explanation: 'Fengsel er frihetsberøvelse og den mest inngripende straffereaksjonen. Forvaring er enda strengere, men er en tidsubestemt særreaksjon.',
    },
    {
      question: 'Hva er forskjellen mellom ubetinget og betinget fengsel?',
      options: ['Ved ubetinget fengsel må den domfelte sone, ved betinget slipper han hvis vilkår overholdes', 'Det er ingen forskjell', 'Betinget fengsel er strengere', 'Ubetinget fengsel gjelder bare bøter'],
      explanation: 'Ved ubetinget fengsel må den domfelte sone i fengsel. Ved betinget fengsel slipper den domfelte å sone dersom vedkommende overholder fastsatte vilkår i en prøvetid.',
    },
    {
      question: 'Hva er den vanligste straffereaksjonen i norsk rett?',
      options: ['Bot', 'Fengsel', 'Forvaring', 'Samfunnsstraff'],
      explanation: 'Bot er den vanligste straffereaksjonen og brukes ved mindre alvorlige lovbrudd som trafikkforseelser og mindre tyverier. Botens størrelse tilpasses gjerningspersonens økonomi.',
    },
    {
      question: 'Hva innebærer samfunnsstraff?',
      options: ['Ulønnet samfunnsnyttig arbeid i stedet for fengsel', 'En høyere bot', 'Tidsubestemt fengsel', 'Utvisning fra landet'],
      explanation: 'Samfunnsstraff innebærer at den domfelte utfører ulønnet samfunnsnyttig arbeid i frihet i stedet for å sone i fengsel. Lovbryteren må samtykke.',
    },
    {
      question: 'Hva kjennetegner forvaring?',
      options: ['Det er en tidsubestemt frihetsstraff for de farligste lovbryterne', 'Det er en mild bot', 'Det gjelder bare unge under 18 år', 'Det er samfunnsnyttig arbeid'],
      explanation: 'Forvaring er en tidsubestemt frihetsstraff som idømmes når en tidsbestemt straff ikke anses tilstrekkelig for å beskytte samfunnet mot gjentakelsesfare ved alvorlige forbrytelser.',
    },
  ],
  'rettslaere-1-4-6': [
    {
      question: 'Hva er den kriminelle lavalderen i Norge?',
      options: ['15 år', '18 år', '14 år', '13 år'],
      explanation: 'Den kriminelle lavalderen er 15 år (straffeloven § 20 bokstav a). En person under 15 år kan ikke straffes, uansett hvor alvorlig lovbruddet er.',
    },
    {
      question: 'Hva skjer med barn under 15 år som begår alvorlige lovbrudd?',
      options: ['Barnevernet kan gripe inn med hjelpetiltak eller tvangstiltak', 'De settes alltid i fengsel', 'Ingenting skjer', 'De utvises fra landet'],
      explanation: 'Selv om barn under 15 år ikke kan straffes, kan barnevernet gripe inn med hjelpetiltak eller tvangstiltak. Strafferettslig alder er et absolutt vilkår.',
    },
    {
      question: 'For hvilken aldersgruppe gjelder ungdomsstraff?',
      options: ['Unge mellom 15 og 18 år', 'Barn under 15 år', 'Alle over 18 år', 'Bare førstegangslovbrytere over 21'],
      explanation: 'Ungdomsstraff er en egen straffereaksjon for unge lovbrytere mellom 15 og 18 år på gjerningstidspunktet, innført i 2014 som alternativ til fengsel.',
    },
    {
      question: 'Når kan unge under 18 år idømmes ubetinget fengsel?',
      options: ['Bare når det er «særlig påkrevd»', 'Alltid ved tyveri', 'Aldri', 'Bare ved første lovbrudd'],
      explanation: 'Etter straffeloven § 33 kan den som var under 18 år bare idømmes fengselsstraff når det er «særlig påkrevd», fordi fengsel kan være skadelig for utviklingen.',
    },
    {
      question: 'Hvilket prinsipp bygger ungdomsstraffen på?',
      options: ['Gjenopprettende rett (restorative justice)', 'Streng gjengjeldelse', 'Maksimal frihetsberøvelse', 'Anonym soning'],
      explanation: 'Ungdomsstraffen bygger på prinsippet om restorative justice (gjenopprettende rett), der fokuset er på å reparere skaden lovbruddet har forårsaket.',
    },
  ],
  'rettslaere-1-4-7': [
    {
      question: 'Hva er kriminologi?',
      options: ['Vitenskapen om kriminalitetens årsaker, omfang og forebygging', 'Læren om å straffe hardest mulig', 'En type domstol', 'En politimetode'],
      explanation: 'Kriminologi er vitenskapen om kriminalitetens årsaker, omfang og forebygging. Kriminologer skiller mellom individuelle, sosiale og strukturelle årsaker.',
    },
    {
      question: 'Hva sier stemplingsteorien (Howard Becker)?',
      options: ['Kriminalitet forsterkes av at samfunnet stempler lovbrytere som «kriminelle»', 'Kriminalitet skyldes bare gener', 'Straff virker alltid avskrekkende', 'Kriminalitet kan ikke forklares'],
      explanation: 'Stemplingsteorien hevder at kriminalitet forsterkes når samfunnet stempler lovbrytere som «kriminelle» – det kan bli en selvoppfyllende profeti.',
    },
    {
      question: 'Hva har forskning vist om allmennprevensjon?',
      options: ['Oppdagelsesrisiko har større preventiv effekt enn straffens strenghet', 'Strengere straff virker alltid best', 'Straff har ingen virkning', 'Bare bøter virker'],
      explanation: 'Forskning viser at oppdagelsesrisiko (risikoen for å bli tatt) har større preventiv effekt enn straffens strenghet. Folk avskrekkes mer av høy risiko for å bli tatt.',
    },
    {
      question: 'Hva betyr rehabilitering i strafferettslig sammenheng?',
      options: ['Å hjelpe den domfelte tilbake til et lovlydig liv etter soning', 'Å gi strengere straff', 'Å utvise lovbrytere', 'Å bygge flere fengsler'],
      explanation: 'Rehabilitering betyr å hjelpe den domfelte tilbake til et lovlydig liv etter endt soning, gjennom utdanning, arbeidstrening og andre tiltak.',
    },
    {
      question: 'Hva innebærer normalitetsprinsippet i norsk straffegjennomføring?',
      options: ['Livet under soning skal likne livet utenfor så langt som mulig', 'Innsatte skal isoleres helt', 'Soning skal være mest mulig ubehagelig', 'Alle skal sone på samme sted'],
      explanation: 'Normalitetsprinsippet innebærer at livet under soning skal likne livet utenfor så langt som mulig – med arbeid, skole, sosiale relasjoner og helsetjenester.',
    },
  ],
  'rettslaere-1-5-1': [
    {
      question: 'Hvilken lov regulerer arbeidsforholdet i Norge?',
      options: ['Arbeidsmiljøloven', 'Avtaleloven', 'Kjøpsloven', 'Straffeloven'],
      explanation: 'Arbeidsmiljøloven (lov 17. juni 2005 nr. 62) regulerer arbeidsmiljø, arbeidstid og stillingsvern i norske arbeidsforhold.',
    },
    {
      question: 'Hva kjennetegner en arbeidstaker i motsetning til en oppdragstaker?',
      options: ['Arbeidstakeren stiller sin arbeidskraft til disposisjon under arbeidsgiverens ledelse og kontroll', 'Arbeidstakeren bærer all økonomisk risiko selv', 'Arbeidstakeren bruker eget verktøy og utstyr', 'Arbeidstakeren får betalt per oppdrag'],
      explanation: 'En arbeidstaker stiller sin arbeidskraft til disposisjon for arbeidsgiveren og er underlagt arbeidsgiverens ledelse og kontroll (styringsretten). En oppdragstaker arbeider for egen regning og risiko.',
    },
    {
      question: 'Er det krav om skriftlig arbeidsavtale?',
      options: ['Ja, i alle arbeidsforhold (aml. § 14-5)', 'Nei, muntlig holder alltid', 'Bare ved fast ansettelse', 'Bare for ledere'],
      explanation: 'Det skal inngås skriftlig arbeidsavtale i alle arbeidsforhold, uavhengig av om stillingen er fast eller midlertidig, heltid eller deltid (aml. § 14-5).',
    },
    {
      question: 'Hva er hovedregelen for ansettelse etter arbeidsmiljøloven?',
      options: ['Fast ansettelse', 'Midlertidig ansettelse', 'Vikariat', 'Prøvetid uten avtale'],
      explanation: 'Hovedregelen er at arbeidstaker skal ansettes fast (aml. § 14-9 første ledd). Midlertidig ansettelse er bare tillatt i bestemte tilfeller.',
    },
    {
      question: 'Når skal den skriftlige arbeidsavtalen senest foreligge i arbeidsforhold over én måned?',
      options: ['Senest sju dager etter at arbeidsforholdet begynte', 'Senest ett år etter', 'Den trengs aldri', 'Senest tre måneder etter'],
      explanation: 'Etter lovendringen i 2024 skal avtalen foreligge snarest mulig og senest sju dager etter at arbeidsforholdet begynte.',
    },
  ],
  'rettslaere-1-5-2': [
    {
      question: 'Hva er den alminnelige arbeidstiden etter arbeidsmiljøloven § 10-4?',
      options: ['Maksimalt 9 timer per dag og 40 timer per uke', 'Maksimalt 12 timer per dag og 50 timer per uke', 'Maksimalt 6 timer per dag og 30 timer per uke', 'Det finnes ingen grense'],
      explanation: 'Alminnelig arbeidstid er maksimalt 9 timer i løpet av 24 timer og 40 timer i løpet av 7 dager. De fleste tariffavtaler har 37,5 timer per uke.',
    },
    {
      question: 'Hva er minste overtidstillegg etter arbeidsmiljøloven?',
      options: ['40 prosent av alminnelig lønn', '10 prosent', '100 prosent', '20 prosent'],
      explanation: 'Overtidstillegget er minst 40 prosent av alminnelig lønn. Overtid skal bare brukes ved særlig og tidsavgrenset behov.',
    },
    {
      question: 'Hva regnes som nattarbeid etter arbeidsmiljøloven § 10-11?',
      options: ['Arbeid mellom kl. 21.00 og kl. 06.00', 'Arbeid mellom kl. 18.00 og kl. 08.00', 'Arbeid mellom kl. 24.00 og kl. 04.00', 'Alt arbeid etter kl. 16.00'],
      explanation: 'Arbeid mellom kl. 21.00 og kl. 06.00 er nattarbeid og er som hovedregel ikke tillatt, med visse unntak (sykehus, politi, hoteller mv.).',
    },
    {
      question: 'Hvor mange virkedager ferie har alle arbeidstakere rett til etter ferieloven?',
      options: ['25 virkedager (4 uker og 1 dag)', '20 virkedager', '30 virkedager', '15 virkedager'],
      explanation: 'Alle arbeidstakere har rett til 25 virkedager (4 uker og 1 dag) ferie per år (ferieloven § 5). Arbeidstakere over 60 år har en ekstra uke.',
    },
    {
      question: 'I hvilken periode kan arbeidstakeren kreve å få hovedferien (3 uker)?',
      options: ['1. juni–30. september', 'Hele året', 'Bare i desember', '1. januar–1. mars'],
      explanation: 'Arbeidstakeren kan kreve at hovedferien (18 virkedager / 3 uker) gis i perioden 1. juni–30. september, jf. ferieloven § 7.',
    },
  ],
  'rettslaere-1-5-3': [
    {
      question: 'Hva kreves for at en arbeidstaker kan sies opp etter aml. § 15-7?',
      options: ['Saklig grunn i virksomhetens, arbeidsgiverens eller arbeidstakerens forhold', 'Ingen grunn', 'At arbeidsgiver er i dårlig humør', 'At arbeidstaker er over 60 år'],
      explanation: 'Saklighetskravet (aml. § 15-7) innebærer at arbeidstaker ikke kan sies opp uten at det er saklig begrunnet i virksomhetens, arbeidsgiverens eller arbeidstakerens forhold.',
    },
    {
      question: 'Hva er forskjellen mellom oppsigelse og avskjed?',
      options: ['Ved oppsigelse løper en oppsigelsestid, ved avskjed må arbeidstakeren fratre umiddelbart', 'Det er ingen forskjell', 'Avskjed er mildere enn oppsigelse', 'Oppsigelse betyr at man fratrer på dagen'],
      explanation: 'Ved oppsigelse fortsetter arbeidsforholdet i oppsigelsestiden. Ved avskjed må arbeidstakeren fratre umiddelbart, uten oppsigelsestid.',
    },
    {
      question: 'Hva kreves for avskjed etter aml. § 15-14?',
      options: ['Grovt pliktbrudd eller annet vesentlig mislighold av arbeidsavtalen', 'En liten feil', 'At arbeidsgiver ønsker det', 'Sviktende økonomi i bedriften'],
      explanation: 'Avskjed kan bare gis dersom arbeidstakeren har gjort seg skyldig i grovt pliktbrudd eller annet vesentlig mislighold. Terskelen er høy.',
    },
    {
      question: 'Hva er minste gjensidige oppsigelsestid som hovedregel?',
      options: ['Én måned', 'En uke', 'Tre måneder', 'Seks måneder'],
      explanation: 'Hovedregelen er minst én måned gjensidig oppsigelsestid (aml. § 15-3). Fristene øker med ansiennitet og alder.',
    },
    {
      question: 'Hvilke krav stiller arbeidsmiljøloven § 15-4 til en oppsigelse fra arbeidsgiver?',
      options: ['Den skal være skriftlig og inneholde opplysninger om arbeidstakerens rettigheter', 'Den kan være muntlig', 'Den må kunngjøres i avis', 'Den må godkjennes av domstolen'],
      explanation: 'Oppsigelsen skal være skriftlig og inneholde opplysninger om retten til å kreve forhandlinger, reise søksmål og stå i stillingen, samt fristene (aml. § 15-4).',
    },
  ],
  'rettslaere-1-5-4': [
    {
      question: 'Hva står HMS for?',
      options: ['Helse, miljø og sikkerhet', 'Hus, marked og salg', 'Handel, midler og service', 'Hjelp, mekling og støtte'],
      explanation: 'HMS står for helse, miljø og sikkerhet – et samlebegrep for det systematiske arbeidet med å forebygge skader, sykdom og belastninger på arbeidsplassen.',
    },
    {
      question: 'Hvilken standard skal arbeidsmiljøet oppfylle etter aml. § 4-1?',
      options: ['Det skal være «fullt forsvarlig»', 'Det skal være billigst mulig', 'Det skal være maksimalt produktivt', 'Det er ingen krav'],
      explanation: 'Arbeidsmiljøet skal være «fullt forsvarlig» (aml. § 4-1) – en dynamisk standard som utvikler seg med ny kunnskap og teknologi.',
    },
    {
      question: 'Når skal en virksomhet ha verneombud?',
      options: ['Når den har 5 eller flere arbeidstakere', 'Bare hvis den har over 100 ansatte', 'Aldri', 'Bare i industribedrifter'],
      explanation: 'Alle virksomheter med 5 eller flere arbeidstakere skal ha verneombud (aml. § 6-1), valgt av og blant arbeidstakerne.',
    },
    {
      question: 'Hvem er statens tilsynsmyndighet for arbeidsmiljø?',
      options: ['Arbeidstilsynet', 'Datatilsynet', 'Forbrukertilsynet', 'Politiet'],
      explanation: 'Arbeidstilsynet er statens tilsynsmyndighet for arbeidsmiljø (aml. § 18-1). De kan gjennomføre inspeksjoner og gi pålegg, tvangsmulkt mv.',
    },
    {
      question: 'Hva omfatter kravene til arbeidsmiljøet?',
      options: ['Både det fysiske og det psykososiale arbeidsmiljøet', 'Bare det fysiske arbeidsmiljøet', 'Bare lønnen', 'Bare arbeidstiden'],
      explanation: 'Arbeidsmiljøloven stiller krav til både det fysiske (støy, kjemikalier, sikkerhet) og det psykososiale arbeidsmiljøet (trakassering, stress, mobbing).',
    },
  ],
  'rettslaere-1-5-5': [
    {
      question: 'Hva er alderskravet for å inngå ekteskap i Norge?',
      options: ['Begge parter må være fylt 18 år', 'Begge må være fylt 16 år', 'Begge må være fylt 21 år', 'Det er ingen aldersgrense'],
      explanation: 'Begge parter må være fylt 18 år (el. § 1a). Muligheten for dispensasjon ble fjernet i 2018 for å hindre barneekteskap.',
    },
    {
      question: 'Hva er lovens normalordning for formuesforhold mellom ektefeller?',
      options: ['Felleseie med likedeling ved ekteskapets opphør', 'Særeie for alt', 'At den ene eier alt', 'Ingen formuesordning'],
      explanation: 'Lovens normalordning er felleseie. Ved ekteskapets opphør skal nettoverdiene deles likt (likedeling), med mindre noe annet er avtalt.',
    },
    {
      question: 'Hva er en ektepakt?',
      options: ['En avtale mellom ektefeller om formuesordningen', 'En skilsmissesøknad', 'Et testament', 'En leiekontrakt'],
      explanation: 'En ektepakt er en avtale mellom ektefeller om formuesordningen, f.eks. om særeie. Den må være skriftlig, signert av begge og tinglyses.',
    },
    {
      question: 'Hvor lenge må man ha vært separert før man kan kreve skilsmisse?',
      options: ['Ett år', 'Tre måneder', 'Fem år', 'Umiddelbart'],
      explanation: 'Etter ett års separasjonstid kan hver ektefelle kreve skilsmisse (el. § 21). Ved samlivsbrudd i minst to år kan skilsmisse kreves uten forutgående separasjon.',
    },
    {
      question: 'Hva gir skjevdelingsregelen (el. § 59) rett til?',
      options: ['Å holde utenfor delingen verdier som stammer fra før ekteskapet eller fra arv/gave', 'Å ta alt den andre eier', 'Dobbelt så mye som den andre', 'Å nekte skilsmisse'],
      explanation: 'Skjevdeling (el. § 59) gir rett til å holde utenfor delingen verdier som kan føres tilbake til midler en ektefelle hadde før ekteskapet, eller som er mottatt som arv eller gave.',
    },
  ],
  'rettslaere-1-5-6': [
    {
      question: 'Finnes det en egen samboerlov i Norge?',
      options: ['Nei, samboeres rettigheter er spredt i ulike lover', 'Ja, samboerloven av 1991', 'Ja, den er lik ekteskapsloven', 'Nei, samboerskap er ulovlig'],
      explanation: 'Det finnes ingen egen samboerlov i Norge. Samboeres rettigheter er spredt i ulike lover og er vesentlig svakere enn ektefellers.',
    },
    {
      question: 'Hva skjer med formuen ved samlivsbrudd mellom samboere?',
      options: ['Hver beholder sin formue – det er ingen automatisk deling', 'Alt deles likt som ved ekteskap', 'Den ene får alt', 'Staten overtar formuen'],
      explanation: 'Samboere har ikke felleseie. Ved samlivsbrudd beholder hver sin formue, men sameierett kan oppstå gjennom direkte eller indirekte bidrag.',
    },
    {
      question: 'Hvilke samboere har en begrenset lovfestet arverett?',
      options: ['Samboere med felles barn', 'Alle samboere', 'Ingen samboere', 'Bare samboere som har bodd sammen i 20 år'],
      explanation: 'Samboere med felles barn har rett til arv tilsvarende 4G og begrenset uskifterett. Samboere uten felles barn har ingen lovfestet arverett.',
    },
    {
      question: 'Hvorfor er det viktig for samboere å inngå en samboerkontrakt?',
      options: ['Fordi lovgivningen gir samboere svak rettslig beskyttelse', 'Fordi det er lovpålagt', 'Fordi det gir skattefritak', 'Fordi det erstatter folkeregistrering'],
      explanation: 'Fordi lovgivningen gir samboere svak rettslig beskyttelse, er det viktig å inngå en skriftlig samboerkontrakt som regulerer eierforhold, utgiftsfordeling og verdifordeling ved brudd.',
    },
    {
      question: 'Hvilken lov gir samboere begrenset rett til å overta felles bolig ved samlivsbrudd?',
      options: ['Husstandsfellesskapsloven', 'Ekteskapsloven', 'Arveloven', 'Avtaleloven'],
      explanation: 'Husstandsfellesskapsloven gir begrenset rett til å overta felles bolig ved samlivsbrudd dersom «sterke grunner» taler for det.',
    },
  ],
  'rettslaere-1-5-7': [
    {
      question: 'Hvem utgjør første arveklasse etter arveloven?',
      options: ['Avdødes livsarvinger (barn, barnebarn osv.)', 'Avdødes foreldre', 'Avdødes søsken', 'Avdødes ektefelle alene'],
      explanation: 'Første arveklasse er avdødes livsarvinger (barn, barnebarn, oldebarn). Barna arver likt, og er et barn dødt, trer barnets barn inn (istedenprinsippet).',
    },
    {
      question: 'Hvor stor er pliktdelsarven etter arveloven § 50?',
      options: ['2/3 av arven, begrenset til 15 G per barnelinje', 'Hele arven', 'Halvparten av arven', '1/4 av arven'],
      explanation: 'Pliktdelen utgjør 2/3 av arven etter arvelateren, begrenset oppad til 15 G (ca. 1,86 mill. kr i 2024) per barnelinje. Den nye arveloven hevet beløpsgrensen fra den gamle på 1 million.',
    },
    {
      question: 'Hva er formkravet til et gyldig testament etter arveloven § 42?',
      options: ['Skriftlig, underskrevet av arvelater og bevitnet av to habile vitner', 'Bare muntlig erklæring', 'Bare arvelaterens underskrift', 'Godkjenning av en advokat'],
      explanation: 'Testamentet må være skriftlig, underskrevet av arvelateren, og to vitner som er til stede sammen må bevitne underskriften. Vitnene må være habile.',
    },
    {
      question: 'Hva innebærer uskiftet bo?',
      options: ['Gjenlevende ektefelle overtar avdødes formue uten å gjøre opp arven med øvrige arvinger', 'At arven deles straks', 'At staten overtar boet', 'At all gjeld slettes'],
      explanation: 'Uskiftet bo innebærer at gjenlevende ektefelle overtar avdødes formue uten å gjøre opp arven. Oppgjøret utsettes til gjenlevende dør eller ønsker å skifte.',
    },
    {
      question: 'Hva kreves for å sitte i uskiftet bo overfor avdødes særkullsbarn?',
      options: ['Samtykke fra særkullsbarna', 'Ingenting – det er en automatisk rett', 'Godkjenning fra retten alene', 'At særkullsbarna er under 18 år'],
      explanation: 'Overfor avdødes særkullsbarn (barn fra et tidligere forhold) kreves samtykke (arveloven § 16). Overfor felles barn trengs ikke samtykke.',
    },
  ],
  'rettslaere-1-5-8': [
    {
      question: 'Hva er barnerettens grunnprinsipp?',
      options: ['Barnets beste skal være et grunnleggende hensyn', 'Foreldrene bestemmer alt', 'Barn har ingen rettigheter', 'Staten eier barna'],
      explanation: 'Barnerettens grunnprinsipp er at barnets beste skal være et grunnleggende hensyn i alle avgjørelser som berører barnet, forankret i barnekonvensjonen art. 3 og Grunnloven § 104.',
    },
    {
      question: 'Hvem har felles foreldreansvar automatisk?',
      options: ['Gifte og samboende foreldre', 'Bare moren', 'Bare faren', 'Besteforeldrene'],
      explanation: 'Gifte foreldre (§ 34) og samboende foreldre (§ 35) har felles foreldreansvar automatisk. Bor foreldrene ikke sammen ved fødselen, har moren foreldreansvaret alene.',
    },
    {
      question: 'Hva innebærer foreldreansvar?',
      options: ['Rett og plikt til å ta avgjørelser for barnet i personlige spørsmål', 'Bare å betale barnebidrag', 'Eiendomsrett over barnet', 'Bare retten til samvær'],
      explanation: 'Foreldreansvar innebærer en rett og plikt til å ta avgjørelser for barnet i personlige spørsmål som bosted, utdanning, helse og religion, innenfor barnets medbestemmelsesrett.',
    },
    {
      question: 'Hvilken lov regulerer det offentliges ansvar for å beskytte barn mot omsorgssvikt?',
      options: ['Barnevernsloven', 'Avtaleloven', 'Straffeloven', 'Arveloven'],
      explanation: 'Barnevernsloven (lov 18. juni 2021 nr. 97) regulerer det offentliges ansvar for å beskytte barn som utsettes for omsorgssvikt, mishandling eller andre alvorlige forhold.',
    },
    {
      question: 'Hva er det minst inngripende tiltaket barnevernet kan sette inn?',
      options: ['Frivillige hjelpetiltak', 'Omsorgsovertakelse', 'Tvangsadopsjon', 'Fratakelse av foreldreansvar'],
      explanation: 'Barnevernet har en trinnvis verktøykasse. De minst inngripende tiltakene er frivillige hjelpetiltak (råd, støttekontakt, avlastning), mens omsorgsovertakelse er mer inngripende.',
    },
  ],
  'rettslaere-1-6-1': [
    {
      question: 'Hva er en sivil tvist?',
      options: ['En rettslig konflikt mellom private parter om rettigheter og plikter etter privatretten', 'En sak der staten anklager noen for et lovbrudd', 'En politisak', 'En sak i Riksretten'],
      explanation: 'En sivil tvist er en rettslig konflikt mellom private parter (personer, bedrifter) om rettigheter og plikter etter privatretten. Motsetningen er straffesaker.',
    },
    {
      question: 'Hvilken lov regulerer den sivile rettsprosessen?',
      options: ['Tvisteloven', 'Straffeprosessloven', 'Avtaleloven', 'Forvaltningsloven'],
      explanation: 'Den sivile rettsprosessen er regulert av tvisteloven (lov 17. juni 2005 nr. 90 om mekling og rettergang i sivile tvister).',
    },
    {
      question: 'Hva er forliksrådets to hovedoppgaver?',
      options: ['Å mekle mellom partene og avsi dom i saker under 200 000 kr', 'Å etterforske straffesaker', 'Å lage lover', 'Å utvise utlendinger'],
      explanation: 'Forliksrådet forsøker å mekle mellom partene, og kan avsi dom i saker med tvistesum under 200 000 kr dersom mekling ikke fører frem (tvisteloven § 6-10).',
    },
    {
      question: 'Hva er en stevning?',
      options: ['Prosessdokumentet som setter en sivil rettssak i gang i tingretten', 'En anmeldelse til politiet', 'En dom fra Høyesterett', 'En forskrift'],
      explanation: 'En stevning er prosessdokumentet som setter en sivil rettssak i gang i tingretten. Den skal inneholde påstand, faktisk og rettslig grunnlag samt bevisene (tvisteloven § 9-2).',
    },
    {
      question: 'Hvilket prinsipp innebærer at partene selv bestemmer hva saken gjelder?',
      options: ['Disposisjonsprinsippet', 'Legalitetsprinsippet', 'Offentlighetsprinsippet', 'Uskyldspresumsjonen'],
      explanation: 'Den sivile prosessen følger disposisjonsprinsippet: partene bestemmer selv hva saken gjelder, hvilke krav som fremmes og hvilke bevis som føres.',
    },
  ],
  'rettslaere-1-6-2': [
    {
      question: 'Hvilken lov regulerer straffeprosessen?',
      options: ['Straffeprosessloven', 'Tvisteloven', 'Straffeloven', 'Avtaleloven'],
      explanation: 'Straffeprosessen er regulert av straffeprosessloven (lov 22. mai 1981 nr. 25 om rettergangsmåten i straffesaker).',
    },
    {
      question: 'Hva er etterforskning?',
      options: ['Politiets arbeid med å kartlegge lovbrudd, finne ansvarlig og sikre bevis', 'Domstolens avgjørelse', 'Et forsvarsskrift', 'En anke til Høyesterett'],
      explanation: 'Etterforskning er politiets arbeid med å kartlegge om det er begått en straffbar handling, hvem som er ansvarlig, og å sikre bevis (strpl. kap. 18).',
    },
    {
      question: 'Hvilken rettighet har en mistenkt under etterforskning?',
      options: ['Rett til å forholde seg taus', 'Plikt til å forklare seg', 'Plikt til å bevise sin uskyld', 'Plikt til å anmelde seg selv'],
      explanation: 'Mistenkte har rett til å forholde seg taus (strpl. § 232) og rett til forsvarer (strpl. § 94). Mistenkte har ingen plikt til å forklare seg for politiet.',
    },
    {
      question: 'Hvem tar påtaleavgjørelsen om en straffesak skal til retten?',
      options: ['Påtalemyndigheten (statsadvokaten eller politijuristen)', 'Den fornærmede', 'Forsvareren', 'Vitnene'],
      explanation: 'Det er påtalemyndigheten (statsadvokaten eller politijuristen) som tar påtaleavgjørelsen – om det skal reises tiltale, utferdiges forelegg eller gis påtaleunnlatelse.',
    },
    {
      question: 'Hvem er øverste leder av påtalemyndigheten i Norge?',
      options: ['Riksadvokaten', 'Justisministeren', 'Høyesterettsjustitiarius', 'Politidirektøren'],
      explanation: 'Riksadvokaten er øverste leder av påtalemyndigheten og tar ut tiltale i de alvorligste sakene (drap, terror) og gir retningslinjer til underordnede.',
    },
  ],
  'rettslaere-1-6-3': [
    {
      question: 'Hva er prinsippet om fri bevisvurdering?',
      options: ['Dommeren vurderer fritt hvilken vekt hvert enkelt bevis skal ha', 'Bare skriftlige bevis teller', 'Vitnebevis har alltid forrang', 'Partene bestemmer dommens innhold'],
      explanation: 'Fri bevisvurdering betyr at dommeren fritt vurderer hvilken vekt hvert bevis skal ha – ingen bevistype har automatisk forrang.',
    },
    {
      question: 'Hva er beviskravet i straffesaker for skyldspørsmålet?',
      options: ['Hevet over enhver rimelig tvil', 'Sannsynlighetsovervekt', 'Klar sannsynlighetsovervekt', 'Mer enn 30 % sannsynlighet'],
      explanation: 'I straffesaker er beviskravet «hevet over enhver rimelig tvil» – det strengeste kravet – fordi en uriktig domfellelse er svært alvorlig.',
    },
    {
      question: 'Hvem har bevisbyrden i en straffesak?',
      options: ['Påtalemyndigheten', 'Tiltalte', 'Forsvareren', 'Dommeren'],
      explanation: 'Bevisbyrden ligger hos påtalemyndigheten. Det er staten som må bevise tiltaltes skyld – tiltalte trenger ikke bevise sin uskyld.',
    },
    {
      question: 'Hva er hovedregelen for beviskrav i sivile saker?',
      options: ['Sannsynlighetsovervekt (over 50 %)', 'Hevet over enhver rimelig tvil', '100 % sikkerhet', 'Under 50 % sannsynlighet'],
      explanation: 'Hovedregelen i sivile saker er sannsynlighetsovervekt – over 50 % sannsynlighet («mer sannsynlig enn ikke»). Ved påstand om klanderverdig atferd kan kravet skjerpes.',
    },
    {
      question: 'Hvilken av disse er en bevistype i norsk rett?',
      options: ['Vitnebevis', 'Påtaleunnlatelse', 'Forskrift', 'Forlik'],
      explanation: 'Bevistyper inkluderer vitnebevis, partsforklaringer, dokumentbevis, sakkyndigbevis, tekniske bevis og reelle bevis.',
    },
  ],
  'rettslaere-1-6-4': [
    {
      question: 'Hva betyr rettssikkerhet?',
      options: ['At borgeren er beskyttet mot vilkårlighet og kan forutberegne sin rettsstilling', 'At alle vinner sine saker', 'At domstolene aldri tar feil', 'At staten alltid har rett'],
      explanation: 'Rettssikkerhet betyr at den enkelte er beskyttet mot overgrep og vilkårlighet fra myndighetene, og har mulighet til å forutberegne sin rettsstilling og forsvare sine interesser.',
    },
    {
      question: 'Hva er forskjellen mellom materiell og prosessuell rettssikkerhet?',
      options: ['Materiell handler om riktige avgjørelser, prosessuell om en rettferdig prosess', 'Det er ingen forskjell', 'Materiell gjelder bare straffesaker', 'Prosessuell gjelder bare sivile saker'],
      explanation: 'Materiell rettssikkerhet handler om at avgjørelsene er riktige og rettferdige. Prosessuell rettssikkerhet handler om at prosessen frem til avgjørelsen er rettferdig.',
    },
    {
      question: 'Hva er uskyldspresumsjonen?',
      options: ['Enhver skal anses uskyldig inntil det motsatte er bevist', 'Alle anses skyldige til de beviser sin uskyld', 'Bare rike kan være uskyldige', 'Dommeren avgjør skyld før rettssaken'],
      explanation: 'Uskyldspresumsjonen (Grunnloven § 96, EMK art. 6 nr. 2) innebærer at enhver skal anses uskyldig inntil det motsatte er bevist. Staten har bevisbyrden i straffesaker.',
    },
    {
      question: 'Hva er fri rettshjelp?',
      options: ['En statlig ordning som gir personer med lav inntekt juridisk bistand uten å betale selv', 'Gratis advokat for alle', 'Hjelp fra politiet', 'En forsikringsordning fra private selskaper'],
      explanation: 'Fri rettshjelp er en statlig ordning (rettshjelploven) som sikrer at personer med lav inntekt og formue kan få juridisk bistand. Den har to former: fritt rettsråd og fri sakførsel.',
    },
    {
      question: 'Hva dekker en rettshjelpsforsikring typisk?',
      options: ['Advokatkostnader og rettsgebyr i sivile tvister', 'Bøter i straffesaker', 'Skilsmisseoppgjør', 'Skatt og avgifter'],
      explanation: 'Rettshjelpsforsikring (ofte inkludert i innbo-/villaforsikring) dekker advokatkostnader og rettsgebyr i sivile tvister som nabokonflikter og kjøpstvister, men ikke familiesaker eller straffesaker.',
    },
  ],
  'rettslaere-1-6-5': [
    {
      question: 'Hva er mekling?',
      options: ['En prosess der en nøytral tredjeperson hjelper partene til en frivillig løsning', 'En domstolsavgjørelse', 'En straffereaksjon', 'En anke til Høyesterett'],
      explanation: 'Mekling er en prosess der en nøytral mekler hjelper partene med å komme frem til en frivillig løsning. Mekleren har ingen myndighet til å avgjøre tvisten.',
    },
    {
      question: 'Hva er voldgift?',
      options: ['En privat tvisteløsning der voldgiftsdommere avgjør saken i stedet for de ordinære domstolene', 'En type mekling uten bindende resultat', 'En straffesak', 'Et forliksrådsmøte'],
      explanation: 'Voldgift (arbitrasjon) er en privat tvisteløsningsordning der partene avtaler at tvisten skal avgjøres av voldgiftsdommere. Voldgiftsdommen er bindende og kan fullbyrdes som en ordinær dom.',
    },
    {
      question: 'Hva tilbyr konfliktrådet?',
      options: ['Gratis mekling i både sivile konflikter og straffesaker', 'Bare straffeutmåling', 'Bare advokattjenester', 'Bare rettssaker'],
      explanation: 'Konfliktrådet er en statlig meklingstjeneste som tilbyr gratis mekling i både sivile konflikter og straffesaker, basert på gjenopprettende prosess (restorative justice).',
    },
    {
      question: 'Hva er et rettsforlik?',
      options: ['Et forlik inngått i retten som har virkning som en rettskraftig dom', 'En vanlig avtale uten rettsvirkning', 'En anke', 'En straffedom'],
      explanation: 'Et rettsforlik er et forlik inngått i retten eller forliksrådet (tvisteloven § 19-11). Det har virkning som en rettskraftig dom og kan tvangsfullbyrdes.',
    },
    {
      question: 'Omtrent hvor stor andel av sivile saker løses gjennom forlik før dom?',
      options: ['Omtrent 90 prosent', 'Omtrent 10 prosent', 'Omtrent 50 prosent', 'Nesten ingen'],
      explanation: 'Statistikk viser at omtrent 90 prosent av alle sivile saker løses gjennom forlik før dom – på grunn av kostnader, tidsbruk og usikkerhet ved rettssak.',
    },
  ],
  'rettslaere-1-6-6': [
    {
      question: 'Hvor har Den europeiske menneskerettsdomstolen (EMD) sete?',
      options: ['Strasbourg', 'Haag', 'Luxembourg', 'Brussel'],
      explanation: 'EMD har sete i Strasbourg, Frankrike. Den behandler klager fra individer som mener en medlemsstat har krenket deres rettigheter etter EMK.',
    },
    {
      question: 'Hvem kan være parter i en tvist for Den internasjonale domstolen (ICJ)?',
      options: ['Bare stater', 'Bare individer', 'Bare bedrifter', 'Bare FN-organer'],
      explanation: 'Bare stater kan være parter i tvister for ICJ (Haag-domstolen), jf. ICJ-statuttene art. 34. ICJ avgjør tvister mellom stater og gir rådgivende uttalelser.',
    },
    {
      question: 'Hva strafforfølger Den internasjonale straffedomstolen (ICC)?',
      options: ['Enkeltpersoner for folkemord, krigsforbrytelser og forbrytelser mot menneskeheten', 'Stater for folkerettsbrudd', 'Bedrifter for skatteunndragelse', 'Individer for vanlige tyverier'],
      explanation: 'ICC i Haag strafforfølger enkeltpersoner for de alvorligste internasjonale forbrytelsene: folkemord, forbrytelser mot menneskeheten, krigsforbrytelser og aggresjon (Roma-vedtektene).',
    },
    {
      question: 'Hvilken kjent ICJ-sak gjaldt Norges grunnlinjer langs kysten?',
      options: ['Fiskerigrensesaken (1951)', 'Strand Lobben-saken', 'Lubanga-saken', 'P-pille-dommen'],
      explanation: 'I Fiskerigrensesaken (1951) ga ICJ Norge medhold i metoden for å trekke grunnlinjer langs kysten. Dommen fikk stor betydning for internasjonal havrett.',
    },
    {
      question: 'Hvordan er EMK gjort gjeldende i norsk rett?',
      options: ['Inkorporert gjennom menneskerettsloven med forrang foran annen norsk lov', 'Den gjelder ikke i Norge', 'Bare som veiledende prinsipp', 'Bare for utlendinger'],
      explanation: 'EMK er inkorporert i norsk rett gjennom menneskerettsloven og har forrang foran annen norsk lov ved motstrid.',
    },
  ],
  'rettslaere-1-6-7': [
    {
      question: 'Hva handler rettsutvikling om?',
      options: ['Hvordan rettsreglene endrer seg over tid som følge av nye samfunnsforhold', 'At loven aldri endres', 'Bare nye fengsler', 'At domstolene legges ned'],
      explanation: 'Rettsutvikling handler om hvordan rettsreglene endrer seg over tid som følge av samfunnsendringer, teknologisk utvikling, internasjonalisering og endrede verdier.',
    },
    {
      question: 'Hva regulerer GDPR og personopplysningsloven?',
      options: ['Behandling av personopplysninger', 'Fartsgrenser', 'Skattesatser', 'Arbeidstid'],
      explanation: 'GDPR (EUs personvernforordning) og personopplysningsloven (2018) regulerer behandling av personopplysninger og gir borgere rettigheter som innsyn, sletting og protest.',
    },
    {
      question: 'Hva er EUs AI Act (AI-forordningen)?',
      options: ['Verdens første helhetlige AI-regulering som klassifiserer AI-systemer etter risiko', 'En norsk straffelov', 'En avtale om handel', 'En miljøkonvensjon'],
      explanation: 'EUs AI Act (vedtatt 2024) er verdens første helhetlige AI-regulering. Den klassifiserer AI-systemer etter risiko og stiller krav til transparens, sikkerhet og menneskerettskonformitet.',
    },
    {
      question: 'Hvilken rettighet gir GDPR art. 22 i forbindelse med kunstig intelligens?',
      options: ['Rett til ikke å bli utsatt for rent automatiserte avgjørelser med rettsvirkning', 'Rett til gratis AI-tjenester', 'Rett til å eie en algoritme', 'Rett til å bli overvåket'],
      explanation: 'GDPR art. 22 gir rett til ikke å bli utsatt for rent automatiserte avgjørelser med rettsvirkning, noe som er sentralt når AI tar avgjørelser som påvirker menneskers liv.',
    },
    {
      question: 'Hva viser at Grunnloven er et levende dokument?',
      options: ['Den har blitt endret over 300 ganger siden 1814', 'Den har aldri blitt endret', 'Den ble opphevet i 2014', 'Den gjelder bare for Stortinget'],
      explanation: 'Grunnloven av 1814 har blitt endret over 300 ganger og gjenspeiler samfunnsutviklingen – fra parlamentarisme og kvinnelig stemmerett til menneskerettighetskatalogen i 2014.',
    },
  ],
  // === Rettslære 2 – korrekte kapittel-id-er ===
  'rettslaere-2-1': [
    {
      question: 'Hvor mange vilkår må være oppfylt for at en handling skal være straffbar?',
      options: ['Fire', 'To', 'Tre', 'Fem'],
      explanation: 'Fire straffbarhetsbetingelser må være oppfylt: lovkravet, skyldkravet, tilregnelighet og fravær av straffrihetsgrunner.',
    },
    {
      question: 'Hvilke tre grader av forsett finnes?',
      options: ['Hensiktsforsett, sannsynlighetsforsett og eventuelt forsett (dolus eventualis)', 'Grov, simpel og bevisst', 'Direkte, indirekte og tilfeldig', 'Lett, middels og alvorlig'],
      explanation: 'De tre gradene av forsett er hensiktsforsett (resultatet var tilsiktet), sannsynlighetsforsett (resultatet ble ansett som sannsynlig) og eventuelt forsett (dolus eventualis).',
    },
    {
      question: 'Når er forsøk straffbart etter straffeloven § 16?',
      options: ['Når noen har forsett om å fullbyrde et lovbrudd og foretar noe som leder direkte mot utføringen', 'Bare når lovbruddet er fullbyrdet', 'Aldri', 'Bare ved drap'],
      explanation: 'Forsøk er straffbart når gjerningspersonen har forsett om å begå lovbruddet og foretar en handling som leder direkte mot fullbyrdelsen, men lovbruddet ikke fullbyrdes.',
    },
    {
      question: 'Hva er straffri tilbaketreden fra forsøk?',
      options: ['Når gjerningspersonen frivillig avstår fra å fullbyrde lovbruddet eller avverger det', 'Når politiet stopper lovbruddet', 'Når lovbruddet mislykkes', 'Når gjerningspersonen blir tatt'],
      explanation: 'Straffri tilbaketreden foreligger dersom gjerningspersonen frivillig avstår fra å fullbyrde lovbruddet eller avverger at det blir fullbyrdet.',
    },
    {
      question: 'Hvilken av disse er en formildende omstendighet ved straffeutmåling (straffeloven § 78)?',
      options: ['Gjerningspersonen har avgitt uforbeholden tilståelse', 'Lovbruddet er ledd i organisert kriminalitet', 'Lovbruddet er motivert av hat mot grupper', 'Gjerningspersonen har tidligere domfellelser'],
      explanation: 'En uforbeholden tilståelse er en formildende omstendighet (§ 78). Organisert kriminalitet, hatmotiv og tidligere domfellelser er skjerpende omstendigheter (§ 77).',
    },
  ],
  'rettslaere-2-2': [
    {
      question: 'Hva er hvitvasking?',
      options: ['Å bidra til å sikre utbytte fra straffbare handlinger', 'Å vaske penger fysisk', 'Å betale skatt', 'Å gi gaver til veldedighet'],
      explanation: 'Hvitvasking (straffeloven § 337) innebærer å gjøre penger eller verdier fra kriminell virksomhet tilsynelatende lovlige gjennom ulike transaksjoner.',
    },
    {
      question: 'Hvilke tre faser har hvitvaskingsprosessen tradisjonelt?',
      options: ['Plassering, tilsløring og integrering', 'Kjøp, salg og bytte', 'Innskudd, uttak og overføring', 'Anmeldelse, etterforskning og dom'],
      explanation: 'Hvitvasking har tre faser: plassering (midlene føres inn i det finansielle systemet), tilsløring (sporene skjules) og integrering (midlene fremstår som lovlige).',
    },
    {
      question: 'Hva er aktiv korrupsjon (bestikkelse)?',
      options: ['Å gi eller tilby noen en utilbørlig fordel i anledning av stilling, verv eller oppdrag', 'Å motta en utilbørlig fordel', 'Å betale skatt for sent', 'Å gi en lovlig gave'],
      explanation: 'Aktiv korrupsjon (bestikkelse) er å gi eller tilby noen en utilbørlig fordel i anledning av stilling, verv eller oppdrag. Passiv korrupsjon er å motta en slik fordel.',
    },
    {
      question: 'Hva er sentralt i vurderingen av om en fordel er korrupsjon?',
      options: ['Om fordelen er utilbørlig', 'Om fordelen er billig', 'Om fordelen er lovlig kjøpt', 'Om fordelen er offentlig kjent på forhånd'],
      explanation: 'For at noe skal være korrupsjon, må fordelen være utilbørlig. Dette vurderes ut fra fordelens art og verdi, formålet, partenes stilling og graden av åpenhet.',
    },
    {
      question: 'Hva er bedrageri etter straffeloven § 371?',
      options: ['Å fremkalle, styrke eller utnytte en villfarelse for å få noen til å gjøre noe som volder tap', 'Å stjele fysiske gjenstander', 'Å skade en annens eiendom', 'Å unnlate å betale skatt'],
      explanation: 'Bedrageri (§ 371) innebærer å fremkalle, styrke eller utnytte en villfarelse for å få noen til å gjøre noe som volder tap eller fare for tap, med vinnings hensikt.',
    },
  ],
  'rettslaere-2-3': [
    {
      question: 'Hva regulerer internasjonal rett (folkerett)?',
      options: ['Forholdet mellom stater og internasjonale organisasjoner', 'Bare forholdet mellom privatpersoner', 'Bare norske straffesaker', 'Bare handel i Norge'],
      explanation: 'Internasjonal rett (folkerett) regulerer forholdet mellom stater og internasjonale organisasjoner. Den får økende betydning i en globalisert verden.',
    },
    {
      question: 'Hvilken av disse er en primær kilde i folkeretten (ICJ-statuttene art. 38)?',
      options: ['Internasjonale konvensjoner (traktater)', 'Juridisk teori', 'Rettspraksis fra internasjonale domstoler', 'Aviser'],
      explanation: 'Primære kilder er internasjonale konvensjoner (traktater), internasjonal sedvane og alminnelige rettsprinsipper. Rettspraksis og juridisk teori er subsidiære kilder.',
    },
    {
      question: 'Hva fastslår menneskerettsloven § 3?',
      options: ['At de inkorporerte konvensjonene går foran annen norsk lovgivning ved motstrid', 'At menneskerettighetene ikke gjelder i Norge', 'At Stortinget kan oppheve EMK', 'At bare staten har rettigheter'],
      explanation: 'Menneskerettsloven § 3 fastslår at de inkorporerte konvensjonene (bl.a. EMK) går foran annen norsk lovgivning ved motstrid, noe som gir menneskerettighetene en særlig sterk stilling.',
    },
    {
      question: 'Hvilken internasjonal domstol behandler klager fra individer om brudd på EMK?',
      options: ['Den europeiske menneskerettighetsdomstol (EMD)', 'Den internasjonale domstol (ICJ)', 'Den internasjonale straffedomstol (ICC)', 'EFTA-domstolen'],
      explanation: 'EMD i Strasbourg behandler klager fra individer og stater om brudd på EMK. ICJ avgjør tvister mellom stater, og ICC strafforfølger enkeltpersoner.',
    },
    {
      question: 'Hva er et grunnleggende prinsipp i humanitærretten (krigens folkerett)?',
      options: ['Distinksjon – å skille mellom stridende og sivile', 'At alle våpen er tillatt', 'At sivile kan angripes fritt', 'At krig ikke er regulert'],
      explanation: 'Humanitærretten bygger på prinsipper som distinksjon (skille mellom stridende og sivile), proporsjonalitet og militær nødvendighet, for å begrense lidelsene under krig.',
    },
  ],
  'rettslaere-2-4': [
    {
      question: 'Hva gir EØS-avtalen Norge tilgang til?',
      options: ['EUs indre marked uten å være EU-medlem', 'Fullt EU-medlemskap', 'Euro-samarbeidet', 'EUs felles utenrikspolitikk'],
      explanation: 'EØS-avtalen (i kraft 1994) gir Norge tilgang til EUs indre marked uten å være EU-medlem, men omfatter ikke euro, felles utenrikspolitikk eller justissamarbeid (utenom Schengen).',
    },
    {
      question: 'Hva er de fire friheter i EØS-avtalen?',
      options: ['Fri bevegelighet for varer, personer, tjenester og kapital', 'Ytringsfrihet, religionsfrihet, forsamlingsfrihet og pressefrihet', 'Frihet fra skatt, toll, avgift og gebyr', 'Rett til arbeid, bolig, helse og utdanning'],
      explanation: 'EØS-avtalens kjerne er de fire friheter: fri bevegelighet for varer, personer, tjenester og kapital innenfor EØS-området.',
    },
    {
      question: 'Hvilken modell har Norge valgt for gjennomføring av EØS-regler?',
      options: ['En dualistisk modell der EØS-regler må gjennomføres i norsk lov', 'En monistisk modell der EØS-regler gjelder direkte', 'Ingen modell – EØS-regler gjelder ikke', 'En modell der EU bestemmer alt'],
      explanation: 'Norge har en dualistisk modell, som betyr at EØS-regler må gjennomføres i norsk lov (gjennom inkorporasjon eller transformasjon) for å få virkning.',
    },
    {
      question: 'Hvilket organ overvåker at EFTA-landene overholder EØS-avtalen?',
      options: ['ESA (EFTA Surveillance Authority)', 'EU-kommisjonen', 'FNs sikkerhetsråd', 'Stortinget'],
      explanation: 'ESA (EFTA Surveillance Authority) er EFTAs overvåkingsorgan med ansvar for å påse at EØS-avtalen overholdes av Norge, Island og Liechtenstein.',
    },
    {
      question: 'Hva kreves for at en stat lovlig kan opprettholde restriksjoner i de fire friheter?',
      options: ['At tiltaket er legitimt, egnet, nødvendig og proporsjonalt', 'At staten ønsker det', 'At tiltaket gir staten inntekter', 'Ingenting – restriksjoner er forbudt'],
      explanation: 'Lovlige restriksjoner krever at formålet er legitimt, tiltaket er egnet til å oppnå formålet, nødvendig (ingen mindre inngripende alternativer) og proporsjonalt.',
    },
  ],
  'rettslaere-2-5': [
    {
      question: 'Hvilken grunnlovsbestemmelse er miljøparagrafen?',
      options: ['Grunnloven § 112', 'Grunnloven § 96', 'Grunnloven § 100', 'Grunnloven § 2'],
      explanation: 'Grunnloven § 112 gir enhver rett til et miljø som sikrer helsen, og til en natur der produksjonsevne og mangfold bevares også for etterslekten.',
    },
    {
      question: 'Hva innebærer føre-var-prinsippet i miljøretten?',
      options: ['Mangel på full vitenskapelig sikkerhet skal ikke utsette tiltak ved risiko for alvorlig miljøskade', 'Forurensning er alltid tillatt', 'Bare staten har ansvar for miljøet', 'Tiltak skal alltid utsettes'],
      explanation: 'Føre-var-prinsippet innebærer at mangel på full vitenskapelig sikkerhet ikke skal brukes som grunn til å utsette kostnadseffektive tiltak ved risiko for alvorlig eller irreversibel miljøskade.',
    },
    {
      question: 'Hva er hovedregelen i forurensningsloven § 7?',
      options: ['Forurensning er forbudt uten tillatelse', 'All forurensning er tillatt', 'Bare industri kan forurense', 'Forurensning krever ingen tillatelse'],
      explanation: 'Forurensningsloven § 7 fastslår at forurensning er forbudt uten tillatelse. Forurensende virksomhet må ha tillatelse fra forurensningsmyndigheten.',
    },
    {
      question: 'Hva er forurenser betaler-prinsippet?',
      options: ['Den som forurenser skal bære kostnadene ved forurensningen', 'Staten betaler all forurensning', 'Forbrukerne betaler', 'Ingen betaler'],
      explanation: 'Forurenser betaler-prinsippet innebærer at den som forurenser skal bære kostnadene ved forurensningen, inkludert tiltak for å forhindre, begrense og reparere skaden.',
    },
    {
      question: 'Hvilken lov er Norges sentrale lov for vern av biologisk mangfold?',
      options: ['Naturmangfoldloven (2009)', 'Forurensningsloven (1981)', 'Klimaloven (2017)', 'Plan- og bygningsloven'],
      explanation: 'Naturmangfoldloven av 2009 er Norges sentrale lov for vern av biologisk mangfold, med bestemmelser om kunnskapsgrunnlag, føre-var-prinsippet og samlet belastning.',
    },
  ],
  'rettslaere-2-6': [
    {
      question: 'Når trådte personvernforordningen (GDPR) i kraft i EU/EØS?',
      options: ['25. mai 2018', '1. januar 2000', '17. mai 2014', '1. juli 2021'],
      explanation: 'GDPR trådte i kraft i EU/EØS 25. mai 2018 og er gjennomført i norsk rett gjennom personopplysningsloven av 2018.',
    },
    {
      question: 'Hva er personopplysninger?',
      options: ['Enhver opplysning som kan knyttes til en identifiserbar person', 'Bare fødselsnummer', 'Bare opplysninger om helse', 'Bare opplysninger som er offentlige'],
      explanation: 'Personopplysninger er enhver opplysning som kan knyttes til en identifiserbar person, f.eks. navn, fødselsnummer, e-postadresse og IP-adresse.',
    },
    {
      question: 'Hvem er behandlingsansvarlig etter GDPR?',
      options: ['Den som bestemmer formålet med og midlene for behandlingen', 'Den som opplysningene handler om', 'Datatilsynet', 'Den som behandler på vegne av andre'],
      explanation: 'Behandlingsansvarlig er den som bestemmer formålet med og midlene for behandlingen. Databehandleren behandler personopplysninger på vegne av den behandlingsansvarlige.',
    },
    {
      question: 'Hvilken av disse er et behandlingsgrunnlag etter GDPR artikkel 6?',
      options: ['Samtykke', 'At opplysningene er interessante', 'At behandleren ønsker det', 'At opplysningene er gratis'],
      explanation: 'Behandlingsgrunnlag etter GDPR art. 6 er samtykke, avtale, rettslig forpliktelse, vitale interesser, offentlig myndighetsutøvelse eller berettiget interesse.',
    },
    {
      question: 'Hvilket organ er Norges uavhengige tilsynsmyndighet for personvern?',
      options: ['Datatilsynet', 'Forbrukertilsynet', 'Arbeidstilsynet', 'Konkurransetilsynet'],
      explanation: 'Datatilsynet er Norges uavhengige tilsynsmyndighet for personvern. Det veileder om regelverket, fører tilsyn, behandler klager og kan gi pålegg og overtredelsesgebyr.',
    },
  ],
  'rettslaere-2-7': [
    {
      question: 'Hva kjennetegner et aksjeselskap (AS)?',
      options: ['Aksjonærene har begrenset ansvar og risikerer kun sitt innskudd', 'Eierne har fullt personlig ansvar', 'Det kreves ingen aksjekapital', 'Det kan ikke ha ansatte'],
      explanation: 'Et aksjeselskap kjennetegnes av begrenset ansvar – aksjonærene risikerer kun sitt innskudd. Selskapet er en egen juridisk person med minimum kr 30 000 i aksjekapital.',
    },
    {
      question: 'Hvor mye er minste aksjekapital i et aksjeselskap (AS)?',
      options: ['Kr 30 000', 'Kr 1 million', 'Kr 100 000', 'Det er ingen krav'],
      explanation: 'Et aksjeselskap (AS) krever minimum kr 30 000 i aksjekapital. Et allmennaksjeselskap (ASA) krever minimum kr 1 million.',
    },
    {
      question: 'Hvilket organ er aksjeselskapets øverste myndighet?',
      options: ['Generalforsamlingen', 'Styret', 'Daglig leder', 'Bedriftsforsamlingen'],
      explanation: 'Generalforsamlingen er selskapets øverste myndighet der aksjonærene utøver sin rett. Den velger styre, godkjenner årsregnskap og vedtar utbytte og vedtektsendringer.',
    },
    {
      question: 'Hva er vilkårene for styreansvar etter aksjeloven § 17-1?',
      options: ['Ansvarsgrunnlag (forsett/uaktsomhet), årsakssammenheng og økonomisk tap', 'Bare at selskapet går konkurs', 'Bare at styremedlemmet er rikt', 'At generalforsamlingen ønsker det'],
      explanation: 'Styreansvar krever ansvarsgrunnlag (forsett eller uaktsomhet), årsakssammenheng og økonomisk tap. Styremedlem kan da bli personlig erstatningsansvarlig.',
    },
    {
      question: 'Hva er ansvarsgjennombrudd?',
      options: ['Et unntak der aksjonærer holdes personlig ansvarlige tross begrenset ansvar', 'At styret alltid er ansvarlig', 'At staten overtar selskapet', 'En vanlig utbyttebetaling'],
      explanation: 'Ansvarsgjennombrudd er et ulovfestet unntak fra hovedregelen om begrenset ansvar, der aksjonærer kan holdes personlig ansvarlige ved underkapitalisering, sammenblanding eller misbruk. Anvendes restriktivt.',
    },
  ],
  'rettslaere-2-8': [
    {
      question: 'Hva er eiendomsrett?',
      options: ['Den mest omfattende rådigheten man kan ha over en ting', 'Bare retten til å leie ut', 'En begrenset bruksrett', 'En rett som bare staten har'],
      explanation: 'Eiendomsrett er den mest omfattende rådigheten man kan ha over en ting. Eieren kan bruke, endre, selge eller gi bort eiendommen og nekte andre å bruke den, innenfor lovens grenser.',
    },
    {
      question: 'Hva er formålet med tinglysing?',
      options: ['Å skape rettsvern og offentlighet om rettigheter i fast eiendom', 'Å betale eiendomsskatt', 'Å bygge på eiendommen', 'Å leie ut eiendommen'],
      explanation: 'Tinglysing er registrering av rettigheter i fast eiendom i grunnboken. Formålet er å skape rettsvern, prioritet mellom rettigheter og offentlig tilgjengelig informasjon.',
    },
    {
      question: 'Hva er en servitutt?',
      options: ['En begrenset rett over annen manns eiendom', 'Full eiendomsrett', 'En leiekontrakt', 'En panterett'],
      explanation: 'En servitutt er en begrenset rett over annen manns eiendom, f.eks. en positiv servitutt (veirett) eller en negativ servitutt (byggeforbud).',
    },
    {
      question: 'Hva er hovedregelen i naboloven § 2?',
      options: ['Ingen må gjøre noe som urimelig eller unødvendig er til skade eller ulempe for naboeiendommen', 'Naboer kan gjøre hva de vil', 'Naboer må alltid spørre om lov', 'Naboer har ingen plikter'],
      explanation: 'Naboloven § 2 fastslår at ingen må ha, gjøre eller sette i verk noe som urimelig eller unødvendig er til skade eller ulempe for naboeiendommen.',
    },
    {
      question: 'Hva beskytter den som kjøper i god tro og stoler på grunnboken?',
      options: ['Vern mot eldre utinglyste rettigheter (ekstinksjon)', 'Fritak fra eiendomsskatt', 'Rett til gratis bolig', 'Vern mot naboklager'],
      explanation: 'Grunnbokens troverdighet innebærer at den som kjøper i god tro og stoler på grunnboken, er beskyttet mot eldre utinglyste rettigheter (ekstinksjon).',
    },
  ],
  'rettslaere-2-9': [
    {
      question: 'Hva kjennetegner megling?',
      options: ['En nøytral tredjeperson hjelper partene, men har ingen beslutningsmyndighet', 'En dommer avgjør saken bindende', 'Politiet løser konflikten', 'Staten bestemmer utfallet'],
      explanation: 'Megling kjennetegnes av frivillig deltakelse, at mekleren ikke har beslutningsmyndighet, at partene beholder kontrollen, og at fokus er på partenes interesser.',
    },
    {
      question: 'Hva er forliksrådet?',
      options: ['Et kommunalt meklingsorgan som er første instans for mange sivile saker', 'Norges øverste domstol', 'En statlig straffedomstol', 'Et politiorgan'],
      explanation: 'Forliksrådet er et kommunalt meklingsorgan som er obligatorisk første instans for mange sivile saker. Det har tre medlemmer og kan avsi dom i saker under kr 200 000.',
    },
    {
      question: 'Hva er voldgift?',
      options: ['Privat rettergang der partene overlater tvisten til voldgiftsdommere med bindende avgjørelse', 'En frivillig samtale uten resultat', 'En straffesak', 'En forliksrådsbehandling'],
      explanation: 'Voldgift er privat rettergang basert på avtale mellom partene, der voldgiftsdommerne avgjør saken. Voldgiftsdommen er bindende med begrenset ankemulighet.',
    },
    {
      question: 'I hvilke saker er familierettsmekling obligatorisk?',
      options: ['Ved samlivsbrudd med barn', 'I alle straffesaker', 'Ved kjøp av bolig', 'Ved arbeidskonflikter'],
      explanation: 'Familierettsmekling er obligatorisk ved samlivsbrudd med barn. Megling brukes også i sivile tvister og mellom arbeidsgiver og fagforeninger.',
    },
    {
      question: 'Hva sier tvisteloven § 8-1 om minnelige løsninger?',
      options: ['Retten skal på ethvert trinn vurdere om saken kan løses i minnelighet', 'Retten skal aldri mekle', 'Bare advokater kan foreslå forlik', 'Megling er forbudt i domstolene'],
      explanation: 'Tvisteloven § 8-1 fastslår at retten på ethvert trinn skal vurdere om saken kan løses i minnelighet. Rettsmekling tilbys som alternativ til hovedforhandling.',
    },
  ],
  'rettslaere-2-10': [
    {
      question: 'Hva handler rettsfilosofi om?',
      options: ['Rettens grunnlag, natur og formål', 'Bare hvordan man skriver lover', 'Bare straffeutmåling', 'Bare internasjonal handel'],
      explanation: 'Rettsfilosofi handler om rettens grunnlag, natur og formål – sentrale spørsmål er hva rett er, hva som gjør en lov gyldig, og hva rettferdighet er.',
    },
    {
      question: 'Hva kjennetegner naturrettstenkningen?',
      options: ['Retten bygger på universelle moralske prinsipper uavhengig av hva staten bestemmer', 'Retten er bare det staten vedtar', 'Retten har ingen sammenheng med moral', 'Bare domstolene lager rett'],
      explanation: 'Naturrett hevder at retten bygger på universelle moralske prinsipper. En lov som strider mot naturlige rettigheter, er ikke gyldig rett. Representanter er bl.a. Aquinas og Locke.',
    },
    {
      question: 'Hva kjennetegner rettspositivismen?',
      options: ['Retten er det som er vedtatt av kompetent myndighet etter gjeldende prosedyrer', 'Retten bygger på moralske prinsipper over loven', 'Retten kan ignoreres fritt', 'Bare naturen bestemmer retten'],
      explanation: 'Rettspositivisme hevder at retten er det som er vedtatt av kompetent myndighet etter gjeldende prosedyrer. Gyldigheten avhenger av formell korrekthet, ikke moralsk innhold. Representanter er bl.a. Hart og Kelsen.',
    },
    {
      question: 'Hva er formell rettferdighet?',
      options: ['At like tilfeller skal behandles likt og reglene anvendes konsistent', 'At innholdet i reglene er rettferdig', 'At prosessen er rettferdig', 'At de rikeste vinner'],
      explanation: 'Formell rettferdighet innebærer at like tilfeller skal behandles likt, og at reglene anvendes konsistent uten vilkårlighet. Materiell rettferdighet gjelder innholdet i reglene.',
    },
    {
      question: 'Hva argumenterte John Rawls for i sin rettferdighetsteori?',
      options: ['At rettferdige prinsipper er de vi ville valgt bak et «uvitenhetens slør»', 'At de sterkeste skal bestemme', 'At rettferdighet ikke finnes', 'At staten alltid har rett'],
      explanation: 'Rawls argumenterte for at rettferdige prinsipper er de vi ville valgt bak et «uvitenhetens slør» – uten å vite vår egen posisjon i samfunnet.',
    },
  ],
};

export default quizData_rettslaere;
