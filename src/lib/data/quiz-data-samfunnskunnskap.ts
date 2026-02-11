import type { QuizQuestion } from './quiz-data';

const quizData_samfunnskunnskap: Record<string, QuizQuestion[]> = {
  'samfunnskunnskap-1': [
  {
    question: 'Hva betyr demokrati?',
    options: ['Folkestyre', 'Kongestyre', 'Prestestyre', 'Rikmannsstyre'],
    explanation: 'Demokrati kommer fra gresk og betyr folkestyre. I et demokrati har folket den overste makten, enten direkte eller gjennom valgte representanter.',
  },
  {
    question: 'Hva er forskjellen mellom direkte og representativt demokrati?',
    options: ['I direkte demokrati stemmer folket selv, i representativt velger man representanter', 'Direkte demokrati har president, representativt har konge', 'Det er ingen forskjell', 'Representativt demokrati er eldre enn direkte'],
    explanation: 'I direkte demokrati stemmer folket selv over politiske saker. I representativt demokrati velger folket representanter som fatter beslutninger påderes vegne. Norge har representativt demokrati.',
  },
  {
    question: 'Hva menes med parlamentarisme?',
    options: ['Regjeringen måha støtte fra flertallet i nasjonalforsamlingen', 'Parlamentet har all makt', 'Presidenten utnevner regjeringen', 'Domstolene kontrollærer regjeringen'],
    explanation: 'Parlamentarisme betyr at regjeringen måha støtte fra flertallet i nasjonalforsamlingen (Stortinget i Norge). Hvis regjeringen taper et mistillitsforslag, måden ga av.',
  },
  {
    question: 'Hva er sivilsamfunnet?',
    options: ['Delen av samfunnet mellom staten og individet, som organisasjoner og føreninger', 'Det samme som staten', 'Bare politiske partier', 'Kun næringslivet'],
    explanation: 'Sivilsamfunnet er den delen av samfunnet som ligger mellom staten og enkeltindividet - organisasjoner, føreninger, media og andre frivillige sammenslutninger.',
  },
  {
    question: 'Hva menes med medborgerskap?',
    options: ['A være en aktiv deltaker i samfunnet med både rettigheter og plikter', 'A ha statsborgerskap', 'Bare a stemme ved valg', 'A betale skatt'],
    explanation: 'Medborgerskap handler om a være en aktiv deltaker i samfunnet. Det innebærer både rettigheter (stemmerett, ytringsfrihet) og plikter (skatt, lovlydighet, deltakelse).',
  },
],


  'samfunnskunnskap-2': [
  {
    question: 'Hva kjennetegner menneskerettighetene?',
    options: ['De er universelle, udelelige og uavhendelige', 'De gjelder bare i vestlige land', 'De kan tas fra mennesker ved dom', 'De er forskjellige i hvert land'],
    explanation: 'Menneskerettighetene er universelle (gjelder alle), udelelige (alle er like viktige), og uavhendelige (kan ikke tas fra noen). De tilkommer alle uavhengig av nasjonalitet.',
  },
  {
    question: 'Hvilken kategori tilhører ytringsfrihet?',
    options: ['Sivile og politiske rettigheter', 'Okonomiske rettigheter', 'Solidaritetsrettigheter', 'Kulturelle rettigheter'],
    explanation: 'Ytringsfrihet er en sivil og politisk rettighet, sammen med retten til liv, religionsfrihet og stemmerett. Disse beskytter individets frihet overfor staten.',
  },
  {
    question: 'Hva er Den europeiske menneskerettskonvensjonen (EMK)?',
    options: ['En juridisk bindende avtale for medlemsland i Europaradet', 'En FN-erklæring uten juridisk kraft', 'En avtale kun for EU-land', 'En norsk lov'],
    explanation: 'EMK er en juridisk bindende avtale for medlemsland i Europaradet. Norge er tilsluttet, og borgere kan klage saker inn til Den europeiske menneskerettsdomstolen.',
  },
  {
    question: 'Hva er FNs barnekonvensjon?',
    options: ['En konvensjon som beskytter barns rettigheter, der barnets beste skal veie tungt', 'En avtale om barnearbeid', 'En anbefaling uten juridisk kraft', 'En avtale som bare gjelder i fattige land'],
    explanation: 'FNs barnekonvensjon fra 1989 beskytter barns rettigheter. Et sentralt prinsipp er at barnets beste skal være et grunnleggende hensyn i alle saker som angår barn.',
  },
  {
    question: 'Hva kan begrense menneskerettighetene?',
    options: ['Hensyn til andres rettigheter, offentlig orden, sikkerhet og helse', 'Ingenting kan begrense dem', 'Statens økonomiske interesser', 'Flertallets ønsker'],
    explanation: 'Menneskerettigheter kan begrenses av hensyn til andres rettigheter og friheter, offentlig orden og sikkerhet, folkehelsen og den offentlige moral. Begrensningene måvære nødvendige og proporsjonale.',
  },
],


  'samfunnskunnskap-3': [
  {
    question: 'Hva kjennetegner liberalisme som ideologi?',
    options: ['Individuell frihet, eiendomsrett og begrenset statsmakt', 'Kollektivt eierskap og sterk stat', 'Tradisjon og gradvise endringer', 'Nasjonalisme og sterk leder'],
    explanation: 'Liberalismen vektlegger individuell frihet, eiendomsrett og begrenset statsmakt. Den stoetter markedsøkonomi og mener staten bør blande seg minst mulig inn i borgernes liv.',
  },
  {
    question: 'Hva er hovedforskjellen mellom sosialisme og sosialdemokrati?',
    options: ['Sosialdemokrati aksepterer markedsøkonomi med velferdsstat, sosialisme vil ha felleseie', 'De er identiske ideologier', 'Sosialdemokrati er mer radikal', 'Sosialisme stoetter privat eiendom'],
    explanation: 'Sosialdemokrati kombinerer markedsøkonomi med sterk velferdsstat og reformer innenfor demokratiet. Sosialisme er mer radikal og vil ha økonomisk likhet gjennom felleseie av produksjonsmidler.',
  },
  {
    question: 'Hva menes med høyre-venstre-aksen i politikken?',
    options: ['En skala for økonomisk politikk mellom stat og marked', 'En geografisk beskrivelse av partier', 'En skala for utenrikspolitikk', 'En skala for miljøpolitikk'],
    explanation: 'Høyre-venstre-aksen handler om økonomisk politikk. Venstresiden vil ha mer stat og omfordeling, høyresiden vil ha mindre stat og mer markedsløsninger.',
  },
  {
    question: 'Hva er forskjellen mellom autoritære og totalitære regimer?',
    options: ['Autoritære begrenser frihet men tillater noe sivilt liv, totalitære kontrollærer alt', 'De er det samme', 'Totalitære er mildere enn autoritære', 'Autoritære har demokratiske valg'],
    explanation: 'Autoritære regimer begrenser frihet og politisk deltakelse, men tillater et visst sivilt liv. Totalitære regimer kontrollærer alle aspekter av livet, inkludert økonomi, utdanning og familieliv.',
  },
  {
    question: 'Hva er populisme?',
    options: ['En politisk stil som hevder a representere "folket" mot "eliten"', 'En økonomisk teori', 'En bestemt ideologi påhoyre- eller venstresiden', 'Det samme som demokrati'],
    explanation: 'Populisme er en politisk stil som hevder a representere "det vanlige folket" mot en korrupt "elite". Den kan finnes påbåde høyre- og venstresiden av politikken.',
  },
],


  'samfunnskunnskap-4': [
  {
    question: 'Hva er maktfordelingsprinsippet i Grunnloven?',
    options: ['Makten er delt mellom Stortinget, regjeringen og domstolene', 'Kongen har all makt', 'Stortinget har all makt', 'Folket stemmer over alle lover'],
    explanation: 'Maktfordelingsprinsippet deler makten mellom Stortinget (lovgivende), regjeringen (utovende) og domstolene (dømmende). Dette hindrer maktmisbruk ved at maktene kontrollærer hverandre.',
  },
  {
    question: 'Hva er Stortingets hovedoppgaver?',
    options: ['Vedta lover, vedta statsbudsjettet og kontrollære regjeringen', 'Utføre politikken og lede departementene', 'Domme i straffesaker', 'Underskrive lover og åpne Stortinget'],
    explanation: 'Stortinget (169 representanter) vedtar lover, vedtar statsbudsjettet og kontrollærer regjeringen. Det velges hvert fjerde årog er den lovgivende makt.',
  },
  {
    question: 'Hva innebærer parlamentarisme i Norge?',
    options: ['Regjeringen måha Stortingets tillit for a sitte', 'Stortinget utnevner regjeringen direkte', 'Kongen bestemmer regjeringen', 'Folket stemmer påstatsminister'],
    explanation: 'Parlamentarisme betyr at regjeringen måha støtte fra flertallet i Stortinget. Hvis regjeringen taper et mistillitsvedtak, måden ga av. Regjeringen star til ansvar overfor Stortinget.',
  },
  {
    question: 'Hva er forskjellen mellom flertalls- og mindretallsregjering?',
    options: ['Flertallsregjering har over halvparten av Stortinget, mindretallsregjering måforhandle', 'Det er ingen forskjell', 'Mindretallsregjering er sterkere', 'Flertallsregjering kan ikke vedta lover'],
    explanation: 'Flertallsregjering har støtte fra over halvparten av Stortinget og kan vedta saker selv. Mindretallsregjering måforhandle med andre partier for a fa flertall for sine forslag.',
  },
  {
    question: 'Hvor mange representanter sitter påStortinget?',
    options: ['169 representanter', '150 representanter', '200 representanter', '101 representanter'],
    explanation: 'Stortinget består av 169 representanter som velges fra hele landet. De velges for fire årom gangen og representerer ulike politiske partier.',
  },
],


  'samfunnskunnskap-5': [
  {
    question: 'Hvorfor kalles mediene "den fjerde statsmakt"?',
    options: ['Fordi de kontrollærer de tre statsmaktene ved a avdekke maktmisbruk', 'Fordi de er den fjerde grenen av staten', 'Fordi de vedtar lover', 'Fordi de utover politikken'],
    explanation: 'Mediene kalles "den fjerde statsmakt" fordi de spiller en viktig rolle i a kontrollære de tre statsmaktene ved a avdekke maktmisbruk, informere borgerne og skape debatt.',
  },
  {
    question: 'Hva er et ekkokammer?',
    options: ['Nårman bare eksponeres for meninger man allærede er enig i', 'Et rom for musikk', 'Et debattprogram påTV', 'En type sosiale medier'],
    explanation: 'Ekkokammer oppstar nårman bare eksponeres for meninger man er enig i, ofte pågrunn av algoritmer i sosiale medier. Dette kan forsterke eksisterende synspunkter og oke polarisering.',
  },
  {
    question: 'Hvilke ytringer er ikke beskyttet av ytringsfriheten?',
    options: ['Hatytringer, trusler, oppfordring til vold og ærekrenkelser', 'Kritikk av politikere', 'Upopulære meninger', 'Religiøs kritikk'],
    explanation: 'Ytringsfriheten beskytter de fleste meninger, men ikke hatytringer (rasisme, homofobi), trusler, oppfordring til vold og ærekrenkelser. Grensen gårved ytringer som kan skade andre.',
  },
  {
    question: 'Hva er kildekritikk?',
    options: ['A vurdere om en kilde er troverdig, uavhengig og kompetent', 'A kritisere alle kilder', 'A bare bruke offisielle kilder', 'A unngå internettkilder'],
    explanation: 'Kildekritikk innebærer a vurdere kildens troverdighet, uavhengighet og kompetanse. Man sporr: Hvem står bak? Hva er formalet? Finnes det flere kilder? Er fremstillingen balansert?',
  },
  {
    question: 'Hva er falske nyheter?',
    options: ['Bevisst feilinformasjon som spres som sannhet', 'Nyheter man er uenig i', 'Nyheter fra sosiale medier', 'Alle nyheter påinternett'],
    explanation: 'Falske nyheter er bevisst feilinformasjon som spres som om det var sannhet. De kan være laget for a påvirke meninger, tjene penger eller skape kaos.',
  },
],


  'samfunnskunnskap-6': [
  {
    question: 'Hva kjennetegner den skandinaviske velferdsmodellen?',
    options: ['Høyt skattenivå, universelle ordninger og sterk stat', 'Lavt skattenivå og privat ansvar', 'Behovsprovde ordninger', 'Forsikringsbasert velferd'],
    explanation: 'Den skandinaviske modellen kjennetegnes av høyt skattenivå, universelle ordninger for alle, sterk offentlig sektor og trepartssamarbeid mellom stat, arbeidsgivere og arbeidstakere.',
  },
  {
    question: 'Hva er oljefondet?',
    options: ['Norges sparefond fra oljeinntekter, verdens største statlige fond', 'Et fond for a kjøpe olje', 'Et privat investeringsfond', 'Et fond kun for pensjonister'],
    explanation: 'Oljefondet (Statens pensjonsfond utland) er Norges sparefond der oljeinntekter investeres for fremtiden. Det er verdens største statlige investeringsfond.',
  },
  {
    question: 'Hva er handlingsregelen?',
    options: ['Staten kan bruke inntil 3 % av oljefondet årlig', 'Staten måbruke hele oljefondet', 'Staten kan ikke bruke oljepenger', 'Stortinget bestemmer fritt hvor mye som brukes'],
    explanation: 'Handlingsregelen sier at staten kan bruke inntil 3 % av oljefondets verdi hvert år. Dette sikrer at pengene varer, unngår overoppheting av økonomien og sparer til fremtidige generasjoner.',
  },
  {
    question: 'Hva er BNP?',
    options: ['Verdien av alle varer og tjenester produsert i et land på ett år', 'Landets totale gjeld', 'Antall arbeidsplasser', 'Statens årlige skatteinntekter'],
    explanation: 'BNP (bruttonasjonalprodukt) er verdien av alle varer og tjenester som produseres i et land i løpet av ett år. Det brukes ofte som mal pålandets økonomiske størrelse.',
  },
  {
    question: 'Hvilke utfordringer står velferdsstaten overfor i fremtiden?',
    options: ['Eldrebolge, mindre oljeinntekter og økende helsekostnader', 'For mange unge', 'For mye oljeinntekter', 'For lav levealder'],
    explanation: 'Velferdsstaten utfordres av eldrebolgen (flere pensjonister), mindre oljeinntekter, økende helsekostnader, klimaomstilling og globalisering med skattekonkurranse.',
  },
],


  'samfunnskunnskap-7': [
  {
    question: 'Hva er trepartssamarbeidet?',
    options: ['Samarbeid mellom arbeidstakere, arbeidsgivere og staten', 'Samarbeid mellom tre politiske partier', 'Samarbeid mellom tre nordiske land', 'Samarbeid mellom tre statsmakter'],
    explanation: 'Trepartssamarbeidet er samarbeidet mellom arbeidstakerorganisasjoner, arbeidsgiverorganisasjoner og staten om arbeidslivsspørsmål. Det sikrer dialog og stabilitet i norsk arbeidsliv.',
  },
  {
    question: 'Hva er en tariffavtale?',
    options: ['Avtale mellom arbeidstaker- og arbeidsgiverorganisasjoner om lønn og vilkår', 'En ansettelseskontrakt', 'En lov vedtatt av Stortinget', 'En avtale mellom to bedrifter'],
    explanation: 'En tariffavtale er en kollektiv avtale mellom arbeidstaker- og arbeidsgiverorganisasjoner om lønn, arbeidstid og andre arbeidsvilkår. Den gjelder for alle i de organisasjonene som er part.',
  },
  {
    question: 'Hva er forskjellen mellom streik og lockout?',
    options: ['Streik er arbeidstakernes virkemiddel, lockout er arbeidsgivernes', 'De er det samme', 'Streik er ulovlig, lockout er lovlig', 'Lockout er arbeidstakernes virkemiddel'],
    explanation: 'Streik er arbeidstakernes virkemiddel der de nekter a jobbe for a presse gjennom krav. Lockout er arbeidsgivernes virkemiddel der de stenger arbeidstakerne ute.',
  },
  {
    question: 'Hva måen arbeidskontrakt inneholde?',
    options: ['Lonn, arbeidstid, arbeidsoppgaver og oppsigelsesfrister', 'Bare lønn', 'Bare arbeidstid', 'Ingenting spesielt'],
    explanation: 'En arbeidskontrakt måinneholde partenes navn, arbeidssted, stillingstittel, arbeidsoppgaver, lønn, arbeidstid, ferierettigheter og oppsigelsesfrister. Skriftlig avtale er pakrevd.',
  },
  {
    question: 'Hva er frontfagsmodellen?',
    options: ['Industrien forhandler først og setter ramme for lønnsoppgjøret', 'Alle sektorer forhandler samtidig', 'Offentlig sektor forhandler først', 'Staten bestemmer lønnen'],
    explanation: 'Frontfagsmodellen innebærer at konkurranseutsatt industri forhandler først og setter rammen for andre sektorers lønnsoppgjør. Dette sikrer at lønnsøksten ikke overstiger det industrien taler.',
  },
],


  'samfunnskunnskap-8': [
  {
    question: 'Hva er identitet?',
    options: ['Hvem vi er og hvem vi opplever oss som', 'Bare nasjonalitet', 'Bare yrke', 'Bare religion'],
    explanation: 'Identitet handler om hvem vi er og hvem vi opplever oss som. Den formes av mange faktorer som familie, kjonn, etnisitet, religion, utdanning, interesser og relasjoner.',
  },
  {
    question: 'Hva er forskjellen mellom integrering og assimilering?',
    options: ['Integrering bevarer noe av egen kultur, assimilering betyr a gi opp egen kultur helt', 'De er det samme', 'Assimilering bevarer mer kultur', 'Integrering betyr a bo atskilt'],
    explanation: 'Integrering betyr at innvandrere blir del av samfunnet mens de beholder deler av egen kultur. Assimilering betyr at minoriteter gir helt opp egen kultur og overtar majoritetens.',
  },
  {
    question: 'Hvem er samene?',
    options: ['Urfolk i Norge med egne rettigheter og eget parlament', 'Innvandrere fra Sambia', 'En nasjonal minoritet uten særrettigheter', 'En religiøs gruppe'],
    explanation: 'Samene er urfolk i Norge (og Sverige, Finland, Russland) med rettigheter etter ILO-konvensjon 169. De har eget parlament (Sametinget) og rett til a bevare språk og kultur.',
  },
  {
    question: 'Hva er strukturell rasisme?',
    options: ['Systematisk forskjellsbehandling innebygd i samfunnsstrukturer', 'Apen vold mot minoriteter', 'Rasisme fra enkeltpersoner', 'Bare rasisme i lovverket'],
    explanation: 'Strukturell rasisme er systematisk forskjellsbehandling som er innebygd i samfunnsstrukturer og institusjoner, ofte uten at enkeltpersoner er bevisst rasistiske.',
  },
  {
    question: 'Hvilke nasjonale minoriteter har Norge?',
    options: ['Kvener, skogfinner, jøder, rom og romani', 'Bare samer', 'Bare innvandrere', 'Ingen nasjonale minoriteter'],
    explanation: 'Norges nasjonale minoriteter er kvener/norskfinner, skogfinner, jøder, rom (sigøynere) og romani (tatere). De har rett til a bevare språk og kultur.',
  },
],


  'samfunnskunnskap-9': [
  {
    question: 'Hva er bærekraftig utvikling?',
    options: ['Utvikling som dekker dagens behov uten a ødelegge for fremtidige generasjoner', 'Okonomisk vekst for enhver pris', 'A stoppe all industriell utvikling', 'Bare miljøvern uten økonomi'],
    explanation: 'Bærekraftig utvikling betyr a dekke dagens behov uten a ødelegge for fremtidige generasjoner. Det krever balanse mellom miljø, økonomi og sosiale forhold.',
  },
  {
    question: 'Hva er Parisavtalen?',
    options: ['Internasjonal klimaavtale om a begrense oppvarming til 1,5-2 grader', 'En fredsavtale etter første verdenskrig', 'En handelsavtale mellom EU-land', 'En menneskerettighetsavtale'],
    explanation: 'Parisavtalen fra 2015 er en internasjonal klimaavtale der landene forplikter seg til a begrense global oppvarming til helst 1,5 grader, maksimalt 2 grader over forindustrielt nivå.',
  },
  {
    question: 'Hva er FNs bærekraftsmal?',
    options: ['17 mal som skal nas innen 2030, blant annet utrydde fattigdom og klimahandling', 'Mal bare for rike land', 'Mal uten tidsfrist', '5 mal for økonomisk vekst'],
    explanation: 'FNs 17 bærekraftsmal skal nas innen 2030 og inkluderer a utrydde fattigdom og sult, sikre god helse og utdanning, oppna likestilling og ta klimahandling.',
  },
  {
    question: 'Hva er de tre dimensjonene i bærekraftig utvikling?',
    options: ['Miljomessig, økonomisk og sosial bærekraft', 'Lokal, nasjonal og global', 'Fortid, natid og fremtid', 'Land, luft og vann'],
    explanation: 'De tre dimensjonene er miljømessig bærekraft (ta vare pånaturen), økonomisk bærekraft (skape verdier uten a tømme ressurser) og sosial bærekraft (rettferdig fordeling og gode levekår).',
  },
  {
    question: 'Hva er bistand?',
    options: ['Okonomisk støtte fra rike til fattige land for utvikling', 'Militær hjelp mellom land', 'Handelsavtaler', 'Lan mellom banker'],
    explanation: 'Bistand er økonomisk støtte fra rike land til fattigere land for a fremme utvikling, bekjempe fattigdom og styrke menneskerettigheter og demokrati.',
  },
],


  'samfunnskunnskap-10': [
  {
    question: 'Hva er FN?',
    options: ['Verdensorganisasjon med 193 medlemsland som arbeider for fred og utvikling', 'En europeisk organisasjon', 'En militærallianse', 'En handelsorganisasjon'],
    explanation: 'FN (De førente nasjoner) er en verdensorganisasjon med 193 medlemsland. Den arbeider for fred, sikkerhet, menneskerettigheter og utvikling globalt.',
  },
  {
    question: 'Hva er NATO?',
    options: ['En forsvarsallianse der medlemslandene forplikter seg til a forsvare hverandre', 'En handelsallianse', 'En miljøorganisasjon', 'Et FN-organ'],
    explanation: 'NATO (North Atlantic Treaty Organization) er en forsvarsallianse der medlemslandene forplikter seg til a forsvare hverandre hvis et medlem blir angrepet (artikkel 5).',
  },
  {
    question: 'Hva er EOS-avtalen?',
    options: ['Norges avtale med EU om økonomisk samarbeid', 'En forsvarsavtale', 'En klimaavtale', 'En avtale om grensekontroll'],
    explanation: 'EOS-avtalen gir Norge tilgang til EUs indre marked og forplikter Norge til a følge EUs regler påmange områder, uten at Norge er EU-medlem.',
  },
  {
    question: 'Hva er en NGO?',
    options: ['En frivillig organisasjon som driver humanitært arbeid uavhengig av stater', 'En statlig organisasjon', 'En bedrift', 'Et FN-organ'],
    explanation: 'NGO (Non-Governmental Organization) er frivillige organisasjoner som driver humanitært arbeid uavhengig av stater, for eksempel Rode Kors og Leger Uten Grenser.',
  },
  {
    question: 'Hva er Sikkerhedsradet i FN?',
    options: ['FN-organ med hovedansvar for internasjonal fred og sikkerhet, fem faste medlemmer med vetorett', 'Generalforsamlingen', 'Et radgivende organ uten makt', 'FNs domstol'],
    explanation: 'Sikkerhedsradet har hovedansvar for internasjonal fred og sikkerhet. Det har fem faste medlemmer (USA, Russland, Kina, Storbritannia, Frankrike) med vetorett og ti roterende medlemmer.',
  },
],


};

export default quizData_samfunnskunnskap;
