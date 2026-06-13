import type { QuizQuestion } from './quiz-data';

const quizData_regnskap_revisjon: Record<string, QuizQuestion[]> = {
  'regnskap-revisjon-1': [
  {
    question: 'Hva er regnskapets hovedformal?',
    options: ['Gi et rettvisende bilde av virksomhetens økonomi', 'Minimere skatten', 'Tilfredsstille bankene', 'Maksimere resultatet'],
    explanation: 'Hovedformalet med regnskapet er a gi et rettvisende bilde av virksomhetens økonomiske stilling og resultat.',
  },
  {
    question: 'Hva innebærer opptjeningsprinsippet?',
    options: ['Inntekt føres nården er opptjent, uavhengig av betaling', 'Inntekt føres nårpengene mottas', 'Inntekt føres nårfakturaen sendes', 'Inntekt føres ved arsslutt'],
    explanation: 'Opptjeningsprinsippet sier at inntekt skal resultatføres nården er opptjent, uavhengig av nårbetalingen mottas.',
  },
  {
    question: 'Hva sier forsiktighetsprinsippet om urealisert gevinst?',
    options: ['Urealisert gevinst skal ikke resultatføres', 'Urealisert gevinst skal føres umiddelbart', 'Urealisert gevinst deles over flere år', 'Urealisert gevinst ignoreres'],
    explanation: 'Forsiktighetsprinsippet sier at urealisert gevinst ikke skal resultatføres, men urealisert tap skal tas med.',
  },
  {
    question: 'Hva er sammenstillingsprinsippet?',
    options: ['Kostnader føres i samme periode som tilhørende inntekt', 'Alle kostnader føres nårde betales', 'Inntekter og kostnader føres separat', 'Bare sikre inntekter regnskapsføres'],
    explanation: 'Sammenstillingsprinsippet krever at kostnader føres i samme periode som de inntektene de har bidratt til.',
  },
  {
    question: 'Hva er transaksjonsprinsippet?',
    options: ['Transaksjoner føres til verdien av vederlaget påtransaksjonstidspunktet', 'Transaksjoner føres til markedsverdi', 'Transaksjoner føres til historisk kost', 'Transaksjoner føres til fremtidig verdi'],
    explanation: 'Transaksjonsprinsippet innebærer at transaksjoner føres til verdien av vederlaget påtransaksjonstidspunktet, ikke estimater.',
  },
],


  'regnskap-revisjon-2': [
  {
    question: 'Hvor lenge måbilag oppbevares ifølge bokforingsloven?',
    options: ['5 år', '3 år', '10 år', '15 år'],
    explanation: 'Primardokumentasjon som bilag skal oppbevares i 5 åretter regnskapsårets slutt.',
  },
  {
    question: 'Hvilken kontoklasse brukes for salgsinntekter i NS 4102?',
    options: ['3xxx', '1xxx', '2xxx', '4xxx'],
    explanation: 'Salgsinntekter føres i kontoklasse 3 (3xxx) i NS 4102.',
  },
  {
    question: 'Hva betyr debet påen eiendskonto?',
    options: ['Økning av eiendelen', 'Reduksjon av eiendelen', 'Ingen endring', 'Korreksjon'],
    explanation: 'Debet påen eiendskonto betyr okning av eiendelen (verdien av eiendelen øker).',
  },
  {
    question: 'Hva er et bilag?',
    options: ['Dokumentasjon for en bokfort transaksjon', 'En faktura til kunde', 'En bankutskrift', 'Et arsregnskap'],
    explanation: 'Et bilag er dokumentasjon for en bokfort transaksjon, som viser nummer, dato, beskrivelse og beløp.',
  },
  {
    question: 'Hva innebærer sporbarhetskravet?',
    options: ['Man skal kunne følge transaksjonssporet fra bilag til arsregnskap og omvendt', 'At alle bilag nummereres', 'At kun elektroniske bilag er gyldige', 'At revisor mågodkjenne alt'],
    explanation: 'Sporbarhet betyr at man skal kunne følge transaksjonssporet begge veier - fra bilag til rapport og tilbake.',
  },
],


  'regnskap-revisjon-3': [
  {
    question: 'Hva viser driftsresultatet?',
    options: ['Resultatet fra kjernevirksomheten for finansposter', 'Resultatet etter alle kostnader og skatt', 'Kun salgsinntektene', 'Differansen mellom eiendeler og gjeld'],
    explanation: 'Driftsresultat = Driftsinntekter - Driftskostnader. Det viser resultatet fra selve driften.',
  },
  {
    question: 'Hvilken post er IKKE en driftskostnad?',
    options: ['Rentekostnad', 'Lonnskostnad', 'Varekostnad', 'Avskrivning'],
    explanation: 'Rentekostnad er en finanskostnad, ikke en driftskostnad.',
  },
  {
    question: 'Hvordan beregnes varekostnad?',
    options: ['IB varelager + Varekjøp - UB varelager', 'Bare varekjøp', 'Kun UB varelager', 'Salgspris minus fortjeneste'],
    explanation: 'Varekostnad = IB varelager + Varekjøp - UB varelager. Dette viser kostnaden for vårene som er solgt.',
  },
  {
    question: 'Hva er EBITDA?',
    options: ['Driftsresultat for avskrivninger', 'Arsresultat for skatt', 'Driftsresultat etter skatt', 'Egenkapitalens avkastning'],
    explanation: 'EBITDA = Earnings Beføre Interest, Taxes, Depreciation and Amortization (Driftsresultat + Avskrivninger).',
  },
  {
    question: 'Hva viser resultatgraden?',
    options: ['Hvor mye av omsetningen som blir til driftsresultat', 'Totale inntekter', 'Antall ansatte', 'Egenkapitalandel'],
    explanation: 'Resultatgrad = (Driftsresultat / Driftsinntekter) x 100%. Viser hvor mye av omsetningen som blir til driftsresultat.',
  },
],


  'regnskap-revisjon-4': [
  {
    question: 'Hva viser regnskapsligningen?',
    options: ['Eiendeler = Egenkapital + Gjeld', 'Inntekter = Kostnader', 'Omsetning = Varekostnad + Fortjeneste', 'Resultat = Inntekter - Utgifter'],
    explanation: 'Regnskapsligningen er: Eiendeler = Egenkapital + Gjeld. Balansen skal alltid balansere.',
  },
  {
    question: 'Hva er forskjellen mellom anleggsmidler og omløpsmidler?',
    options: ['Anleggsmidler er varige (>1 ar), omløpsmidler kortsiktige (<1 ar)', 'De er det samme', 'Omløpsmidler er verdt mer', 'Anleggsmidler kan selges raskere'],
    explanation: 'Anleggsmidler er eiendeler til varig bruk (>1 ar), mens omløpsmidler er kortsiktige eiendeler (<1 ar) som inngår i varekretsløpet.',
  },
  {
    question: 'Hva er laveste verdis prinsipp?',
    options: ['Omløpsmidler vurderes til laveste av anskaffelseskost og virkelig verdi', 'Alltid bruke høyeste verdi', 'Bruke gjennomsnittspris', 'Ignorere markedsverdi'],
    explanation: 'Laveste verdis prinsipp innebærer at omløpsmidler vurderes til laveste verdi av anskaffelseskost og virkelig verdi.',
  },
  {
    question: 'Hva er egenkapitalandel?',
    options: ['Egenkapital / Totalkapital x 100%', 'Gjeld / Egenkapital', 'Omløpsmidler / Kortsiktig gjeld', 'Resultat / Omsetning'],
    explanation: 'Egenkapitalandel = (Egenkapital / Totalkapital) x 100%. Viser hvor mye av eiendelene som er finansiert med egne midler.',
  },
  {
    question: 'Hva er arbeidskapital?',
    options: ['Omløpsmidler minus kortsiktig gjeld', 'Totalkapital', 'Kun bankinnskudd', 'Langsiktig gjeld'],
    explanation: 'Arbeidskapital = Omløpsmidler - Kortsiktig gjeld. Viser evnen til a betale kortsiktige forpliktelser.',
  },
],


  'regnskap-revisjon-5': [
  {
    question: 'Hva er merverdiavgift (MVA)?',
    options: ['En avgift påomsetning av varer og tjenester', 'Skatt påoverskudd', 'Arbeidsgiveravgift', 'Eiendomsskatt'],
    explanation: 'Merverdiavgift (MVA) er en avgift som legges påomsetning av varer og tjenester og innkreves av bedriftene påvegne av staten.',
  },
  {
    question: 'Hva er standard MVA-sats i Norge?',
    options: ['25%', '15%', '12%', '8%'],
    explanation: 'Standard MVA-sats i Norge er 25%. Det finnes også reduserte satser på 15% og 12% for visse varer og tjenester.',
  },
  {
    question: 'Hva er inngaende MVA?',
    options: ['MVA påvarer og tjenester bedriften kjøper', 'MVA påvarer bedriften selger', 'Skatt påoverskudd', 'Arbeidsgiveravgift'],
    explanation: 'Inngaende MVA er merverdiavgiften påvarer og tjenester bedriften kjøper, som kan trekkes fra utgaende MVA.',
  },
  {
    question: 'Hva er selskapsskattesatsen i Norge?',
    options: ['22%', '25%', '28%', '30%'],
    explanation: 'Selskapsskattesatsen i Norge er 22% av skattepliktig resultat.',
  },
  {
    question: 'Hva er arbeidsgiveravgift?',
    options: ['En avgift arbeidsgiver betaler basert pålønnsutbetalinger', 'En avgift arbeidstaker betaler', 'MVA påtjenester', 'Skatt påoverskudd'],
    explanation: 'Arbeidsgiveravgift er en avgift arbeidsgiver betaler til folketrygden basert pålønnsutbetalinger til ansatte.',
  },
],


  'regnskap-revisjon-6': [
  {
    question: 'Hva består et arsregnskap av?',
    options: ['Resultatregnskap, balanse, noter og kontantstrømoppstilling', 'Bare resultatregnskap', 'Kun balanse', 'Bare noter'],
    explanation: 'Et arsregnskap består av resultatregnskap, balanse, noter og for større selskaper kontantstrømoppstilling.',
  },
  {
    question: 'Hva er formalet med noter i regnskapet?',
    options: ['Gi utdypende informasjon om poster i regnskapet', 'Bare pynte påregnskapet', 'Skjule informasjon', 'Erstatte balansen'],
    explanation: 'Noter gir utdypende informasjon om poster i regnskapet, regnskapsprinsipper og andre vesentlige forhold.',
  },
  {
    question: 'Hvem måha arsberetning?',
    options: ['Større føretak over visse terskelverdier', 'Alle bedrifter', 'Bare aksjeselskaper', 'Ingen bedrifter'],
    explanation: 'Større føretak over visse terskelverdier (ansatte, omsetning, balanse) måutarbeide arsberetning.',
  },
  {
    question: 'Hva er kontantstrømmoppstilling?',
    options: ['Viser kontantstrømmer inn og ut av virksomheten', 'En ny balanse', 'Et budsjett', 'En note'],
    explanation: 'Kontantstrømmoppstilling viser kontantstrømmer inn og ut av virksomheten, delt i drift, investering og finansiering.',
  },
  {
    question: 'Nårmåarsregnskapet være ferdig?',
    options: ['Innen 6 maneder etter regnskapsårets slutt', 'Innen 3 maneder', 'Innen 1 maned', 'Innen 12 maneder'],
    explanation: 'Arsregnskapet skal være fastsatt senest 6 maneder etter regnskapsårets slutt.',
  },
],


  'regnskap-revisjon-7': [
  {
    question: 'Hva er regnskapsanalyse?',
    options: ['Systematisk gjennomgang av regnskapet for a vurdere økonomisk stilling', 'Bare a lese tallene', 'Kun a sjekke feil', 'A skrive noter'],
    explanation: 'Regnskapsanalyse er systematisk gjennomgang og vurdering av regnskapet for a forstå virksomhetens økonomiske stilling og utvikling.',
  },
  {
    question: 'Hva måler likviditetsgrad 1?',
    options: ['Omløpsmidler / Kortsiktig gjeld', 'Egenkapital / Totalkapital', 'Resultat / Omsetning', 'Gjeld / Egenkapital'],
    explanation: 'Likviditetsgrad 1 = Omløpsmidler / Kortsiktig gjeld. Maler evnen til a betale kortsiktige forpliktelser.',
  },
  {
    question: 'Hva måler totalkapitalrentabilitet?',
    options: ['Avkastningen påall investert kapital', 'Bare egenkapitalavkastning', 'Kun gjeldskostnader', 'Omsetning per ansatt'],
    explanation: 'Totalkapitalrentabilitet = (Driftsresultat + Finansinntekter) / Gjennomsnittlig totalkapital x 100%.',
  },
  {
    question: 'Hva er gjeldsgrad?',
    options: ['Gjeld / Egenkapital', 'Egenkapital / Gjeld', 'Omløpsmidler / Gjeld', 'Resultat / Gjeld'],
    explanation: 'Gjeldsgrad = Gjeld / Egenkapital. Viser forholdet mellom fremmedkapital og egenkapital.',
  },
  {
    question: 'Hvorfor er trendanalyse nyttig?',
    options: ['Viser utvikling over tid og avdekker tendenser', 'Bare for å lage grafer', 'Kun for a tilfredsstille revisor', 'Har ingen nytte'],
    explanation: 'Trendanalyse viser utvikling over tid og hjelper med a avdekke positive eller negative tendenser i virksomheten.',
  },
],


  'regnskap-revisjon-8': [
  {
    question: 'Hva er revisjon?',
    options: ['Uavhengig kontroll av regnskapet for a bekrefte at det er riktig', 'A skrive regnskapet', 'A betale skatt', 'A lage budsjett'],
    explanation: 'Revisjon er uavhengig kontroll av regnskapet for a bekrefte at det gir et rettvisende bilde av virksomhetens økonomi.',
  },
  {
    question: 'Hvem måha revisjon?',
    options: ['Aksjeselskaper over visse terskelverdier', 'Alle bedrifter', 'Bare sma bedrifter', 'Ingen bedrifter'],
    explanation: 'Aksjeselskaper over visse terskelverdier (driftsinntekter, balanse, ansatte) måha revisjon av autorisert revisor.',
  },
  {
    question: 'Hva er intern kontroll?',
    options: ['Systemer og rutiner for a sikre pålitelig rapportering og etterlevelse', 'Bare a telle kassen', 'Kun ekstern revisjon', 'A lage budsjett'],
    explanation: 'Intern kontroll er systemer og rutiner for a sikre pålitelig finansiell rapportering, effektiv drift og etterlevelse av lover.',
  },
  {
    question: 'Hva er vesentlighet i revisjon?',
    options: ['Terskel for nårfeil anses a påvirke beslutningstakere', 'At alt måvære 100% riktig', 'Bare store feil', 'Ingen feil tillates'],
    explanation: 'Vesentlighet er terskelen for nårfeil eller utelatelser anses a kunne påvirke økonomiske beslutninger hos brukerne.',
  },
  {
    question: 'Hva er revisjonsberetningen?',
    options: ['Revisors konklusjon om regnskapet', 'Et budsjett', 'En note i regnskapet', 'Styrets beretning'],
    explanation: 'Revisjonsberetningen er revisors formelle uttalelse om hvorvidt regnskapet gir et rettvisende bilde.',
  },
],

  'regnskap-revisjon-1-1': [
    {
      question: 'Hva er regnskap?',
      options: [
        'Systematisk registrering, klassifisering og rapportering av økonomiske transaksjoner',
        'En markedsføringsplan',
        'En liste over ansatte',
        'En oversikt over konkurrentenes priser',
      ],
      explanation: 'Regnskapet skal gi relevant, pålitelig og sammenlignbar informasjon om økonomisk stilling og resultat.',
    },
    {
      question: 'Hvem er finansregnskapet (det eksterne regnskapet) primært rettet mot?',
      options: [
        'Eksterne brukere som eiere, kreditorer og myndigheter',
        'Bare produksjonsavdelingen',
        'Bare daglig leder',
        'Konkurrentene',
      ],
      explanation: 'Finansregnskapet er eksternt og retter seg mot brukere utenfor virksomheten.',
    },
    {
      question: 'Hva ser en bankrådgiver typisk etter i et årsregnskap?',
      options: [
        'Likviditet, soliditet og evne til å betjene lån',
        'Antall ansatte i kantinen',
        'Fargene i logoen',
        'Reklamebudsjettet',
      ],
      explanation: 'Banken vurderer betalingsevne og sikkerhet: likviditet, soliditet og kontantstrøm.',
    },
    {
      question: 'Hva er primære brukere av regnskapet?',
      options: [
        'De med direkte økonomisk interesse, som eiere, kreditorer og investorer',
        'Bare avisene',
        'Bare elevene på skolen',
        'Bare konkurrentene',
      ],
      explanation: 'Primære brukere har direkte økonomisk interesse; sekundære brukere er for eksempel ansatte og kunder.',
    },
    {
      question: 'Hva kan en bedrift IKKE finne ut uten regnskap?',
      options: [
        'Om den går med overskudd eller underskudd',
        'Hvilken farge veggene har',
        'Hvor mange vinduer kontoret har',
        'Hva klokken er',
      ],
      explanation: 'Uten regnskap mangler bedriften oversikt over lønnsomhet, likviditet og formuesstilling.',
    },
  ],
  'regnskap-revisjon-1-2': [
    {
      question: 'Hva innebærer regnskapsplikt?',
      options: [
        'At virksomheten er lovpålagt å utarbeide årsregnskap etter regnskapsloven',
        'At virksomheten må ansette en revisor',
        'At virksomheten må betale moms månedlig',
        'At virksomheten må markedsføre seg',
      ],
      explanation: 'Regnskapsplikt betyr at man må lage årsregnskap etter regnskapslovens regler.',
    },
    {
      question: 'Er et aksjeselskap (AS) regnskapspliktig?',
      options: [
        'Ja, alle aksjeselskaper er regnskapspliktige uansett størrelse',
        'Nei, bare hvis omsetningen er over 5 mill. kr',
        'Nei, AS er aldri regnskapspliktige',
        'Bare hvis de har over 50 ansatte',
      ],
      explanation: 'Alle AS og ASA er regnskapspliktige etter regnskapsloven § 1-2, uavhengig av størrelse.',
    },
    {
      question: 'Når er et enkeltpersonforetak regnskapspliktig etter regnskapsloven?',
      options: [
        'Når det har eiendeler over 20 mill. kr eller mer enn 20 ansatte',
        'Alltid',
        'Aldri',
        'Når omsetningen er over 100 000 kr',
      ],
      explanation: 'Enkeltpersonforetak er regnskapspliktige først over terskelen 20 mill. kr i eiendeler eller 20 ansatte; ellers har de bokføringsplikt.',
    },
    {
      question: 'Hva er en oppstillingsplan?',
      options: [
        'Det lovfestede skjemaet for hvordan resultatregnskap og balanse skal settes opp',
        'En markedsføringsplan',
        'En liste over leverandører',
        'En oversikt over ansatte',
      ],
      explanation: 'Oppstillingsplanen i regnskapsloven §§ 6-1 og 6-2 styrer oppsettet av resultat og balanse.',
    },
    {
      question: 'Hva er forskjellen på artsbasert og funksjonsbasert resultatoppstilling?',
      options: [
        'Artsbasert grupperer kostnader etter art (lønn, avskrivning); funksjonsbasert etter funksjon',
        'De er identiske',
        'Artsbasert gjelder bare for staten',
        'Funksjonsbasert utelater kostnader',
      ],
      explanation: 'Artsbasert ordner kostnader etter type, mens funksjonsbasert ordner dem etter funksjon (f.eks. produksjon, salg).',
    },
  ],
  'regnskap-revisjon-1-3': [
    {
      question: 'Hva er god regnskapsskikk (GRS)?',
      options: [
        'En rettslig standard for å utarbeide regnskap i tråd med lov, standarder og anerkjent praksis',
        'En enkelt paragraf i straffeloven',
        'Et regnskapsprogram',
        'En frivillig sertifisering',
      ],
      explanation: 'GRS bygger på regnskapsloven, NRS-standarder, anerkjent teori og rettslig utvikling.',
    },
    {
      question: 'Hva er NRS?',
      options: [
        'Norsk RegnskapsStiftelse, som utsteder norske regnskapsstandarder',
        'En norsk bank',
        'Skatteetatens kontrollavdeling',
        'En internasjonal børs',
      ],
      explanation: 'NRS er et privatrettslig organ som konkretiserer god regnskapsskikk gjennom standarder.',
    },
    {
      question: 'Hva er IFRS?',
      options: [
        'Internasjonale regnskapsstandarder, blant annet brukt av børsnoterte selskaper',
        'En norsk skattelov',
        'Et regnskapsprogram',
        'En revisjonsmetode',
      ],
      explanation: 'IFRS (International Financial Reporting Standards) er internasjonale standarder, obligatoriske for børsnoterte konsernregnskap.',
    },
    {
      question: 'Et lite AS eier en tomt kjøpt for 5 mill. kr, nå verdt 12 mill. Hvordan føres den etter god regnskapsskikk?',
      options: [
        'Til anskaffelseskost 5 mill. kr; den urealiserte gevinsten vises ikke',
        'Til markedsverdi 12 mill. kr',
        'Til 7 mill. kr',
        'Den tas ut av balansen',
      ],
      explanation: 'Etter forsiktighetsprinsippet føres tomten til anskaffelseskost; urealisert gevinst inntektsføres ikke.',
    },
    {
      question: 'Hvorfor finnes god regnskapsskikk i tillegg til loven?',
      options: [
        'Loven gir generelle prinsipper; GRS gir mer konkrete løsninger der loven er taus',
        'Loven er ikke gyldig',
        'GRS erstatter loven helt',
        'GRS gjelder bare utlandet',
      ],
      explanation: 'GRS utfyller loven med detaljerte standarder, for eksempel om egenutviklet programvare (NRS 19).',
    },
  ],
  'regnskap-revisjon-1-4': [
    {
      question: 'Hva innebærer transaksjonsprinsippet?',
      options: [
        'Transaksjoner regnskapsføres til verdien av vederlaget på transaksjonstidspunktet',
        'Alle verdiendringer bokføres løpende',
        'Bare gevinster bokføres',
        'Transaksjoner bokføres når pengene mottas',
      ],
      explanation: 'Transaksjonsprinsippet sier at faktiske transaksjoner føres til avtalt verdi på transaksjonstidspunktet.',
    },
    {
      question: 'Hva sier opptjeningsprinsippet?',
      options: [
        'Inntekt resultatføres når den er opptjent, ikke nødvendigvis når betalingen mottas',
        'Inntekt føres alltid når pengene kommer inn',
        'Inntekt føres aldri',
        'Inntekt føres ved kontraktsinngåelse uansett',
      ],
      explanation: 'Inntekten opptjenes ved levering av vare eller etter hvert som tjenesten utføres.',
    },
    {
      question: 'En konsulent utfører 50 % av arbeidet i år 1 og 50 % i år 2 på en kontrakt på 200 000 kr. Hva inntektsføres i år 1?',
      options: ['100 000 kr', '200 000 kr', '0 kr', '50 000 kr'],
      explanation: 'Etter opptjeningsprinsippet inntektsføres 50 % i år 1 = 100 000 kr, uavhengig av når betaling skjer.',
    },
    {
      question: 'Hva sier forsiktighetsprinsippet?',
      options: [
        'Urealisert tap resultatføres, men urealisert gevinst gjør det ikke',
        'Både tap og gevinst føres straks',
        'Verken tap eller gevinst føres',
        'Bare gevinst føres straks',
      ],
      explanation: 'Forsiktighetsprinsippet krever at sannsynlige tap tas med, men gevinster først når de er realisert.',
    },
    {
      question: 'Hva innebærer sammenstillingsprinsippet (matching)?',
      options: [
        'Kostnader kostnadsføres i samme periode som den tilhørende inntekten',
        'Alle kostnader føres i januar',
        'Kostnader føres når de betales',
        'Kostnader føres aldri',
      ],
      explanation: 'Sammenstillingsprinsippet knytter kostnadene til inntektene de har bidratt til å skape.',
    },
  ],
  'regnskap-revisjon-1-5': [
    {
      question: 'Hva er et regnskapsprogram (økonomisystem)?',
      options: [
        'Programvare for å registrere transaksjoner, føre regnskap og lage rapporter',
        'En markedsføringskanal',
        'Et lager for varer',
        'En type bankkonto',
      ],
      explanation: 'Regnskapsprogram håndterer bokføring, fakturering, MVA-rapportering og regnskapsrapporter.',
    },
    {
      question: 'Hva er et ERP-system?',
      options: [
        'Et integrert system som kobler sammen flere forretningsfunksjoner som salg, lager og produksjon',
        'En enkel kalkulator',
        'En MVA-melding',
        'En type lån',
      ],
      explanation: 'ERP integrerer moduler som salg, lager, produksjon og økonomi i ett sammenhengende system.',
    },
    {
      question: 'Hva er SAF-T?',
      options: [
        'Et standardisert XML-filformat for utveksling av regnskapsdata til Skatteetaten',
        'En type bankkonto',
        'En revisjonsberetning',
        'En markedsføringsplan',
      ],
      explanation: 'SAF-T (Standard Audit File – Tax) er et standardformat for eksport av regnskapsdata, obligatorisk fra 2020.',
    },
    {
      question: 'Hvilken fordel gir SAF-T ved bokettersyn?',
      options: [
        'Regnskapsdata leveres i et standardisert format som er raskt å kontrollere',
        'Bedriften slipper å betale skatt',
        'Revisjon blir unødvendig',
        'Regnskapet trenger ikke føres',
      ],
      explanation: 'SAF-T gir Skatteetaten en standardisert fil i stedet for varierte papirer, noe som forenkler kontroll.',
    },
    {
      question: 'Hvorfor er digitalisering nyttig i regnskapsføring?',
      options: [
        'Den reduserer manuelt arbeid og gir raskere, mer pålitelige rapporter',
        'Den fjerner behovet for bilag helt',
        'Den gjør skatt ulovlig',
        'Den øker antall feil',
      ],
      explanation: 'Digitale systemer automatiserer registrering og rapportering, noe som sparer tid og reduserer feil.',
    },
  ],
  'regnskap-revisjon-2-1': [
    {
      question: 'Hva betyr bokføringsplikt?',
      options: [
        'Plikt til å registrere økonomiske hendelser ordnet, dokumentere dem med bilag og oppbevare materialet',
        'Plikt til å ansette en revisor',
        'Plikt til å markedsføre seg',
        'Plikt til å betale utbytte',
      ],
      explanation: 'Bokføringsplikten krever ordnet registrering, dokumentasjon med bilag og oppbevaring etter loven.',
    },
    {
      question: 'Hvem har bokføringsplikt?',
      options: [
        'Alle med regnskapsplikt og næringsdrivende over grenseverdiene',
        'Bare børsnoterte selskaper',
        'Bare staten',
        'Ingen',
      ],
      explanation: 'Bokføringsplikten gjelder alle regnskapspliktige og næringsdrivende over terskelverdiene.',
    },
    {
      question: 'Hva er hensikten med bokføringsloven?',
      options: [
        'Å sikre at økonomiske hendelser registreres ordnet og kan etterprøves',
        'Å fastsette salgsprisene',
        'Å bestemme markedsandeler',
        'Å regulere ansattes ferie',
      ],
      explanation: 'Bokføringsloven sikrer ordnet, dokumentert og etterprøvbar registrering av økonomiske hendelser.',
    },
    {
      question: 'Hva må økonomiske hendelser dokumenteres med etter bokføringsloven?',
      options: ['Bilag', 'Reklame', 'Lønnsslipper alene', 'Muntlig avtale'],
      explanation: 'Hver bokført hendelse skal kunne dokumenteres med et bilag.',
    },
    {
      question: 'Hva innebærer kravet om oppbevaring?',
      options: [
        'Regnskapsmateriale skal oppbevares i henhold til lovens frister',
        'Materialet kan kastes umiddelbart',
        'Bare digitale filer trenger oppbevaring',
        'Oppbevaring er frivillig',
      ],
      explanation: 'Bokføringsloven krever at regnskapsmateriale oppbevares i bestemte perioder for kontroll og etterprøving.',
    },
  ],
  'regnskap-revisjon-2-2': [
    {
      question: 'Hva er en kontoplan?',
      options: [
        'En systematisk og nummerert oversikt over alle kontoer som brukes i bokføringen',
        'En oversikt over bedriftens bankkontoer',
        'En liste over kunder',
        'En markedsføringsplan',
      ],
      explanation: 'Kontoplanen klassifiserer transaksjoner og danner grunnlaget for resultatregnskap og balanse.',
    },
    {
      question: 'Ved kjøp av kontorrekvisita for 2 400 kr inkl. mva (mva 480 kr), hvilket beløp føres på kostnadskontoen?',
      options: ['1 920 kr', '2 400 kr', '480 kr', '2 880 kr'],
      explanation: 'Kostnaden føres ekskl. mva: 2 400 − 480 = 1 920 kr. MVA er en egen fordring på staten.',
    },
    {
      question: 'På hvilken konto føres inngående merverdiavgift?',
      options: [
        'Konto 2710 – inngående mva (en fordring på staten)',
        'Konto 3000 – salgsinntekt',
        'Konto 1920 – bank',
        'Konto 6800 – kontorkostnad',
      ],
      explanation: 'Inngående mva føres på 2710 som en fordring bedriften får tilbake fra staten.',
    },
    {
      question: 'Hvilken kontoklasse hører bankinnskudd (konto 1920) til?',
      options: ['Klasse 1 – eiendeler', 'Klasse 3 – inntekter', 'Klasse 6 – driftskostnader', 'Klasse 2 – gjeld'],
      explanation: 'Bankinnskudd er en eiendel og hører til kontoklasse 1.',
    },
    {
      question: 'Hva er hensikten med standardiserte kontoplaner som NS 4102?',
      options: [
        'Å gi en felles struktur som gjør regnskap sammenlignbare og oversiktlige',
        'Å øke prisene',
        'Å skjule kostnader',
        'Å unngå skatt',
      ],
      explanation: 'En standard kontoplan gir ensartet klassifisering, noe som gjør regnskap mer sammenlignbare.',
    },
  ],
  'regnskap-revisjon-2-3': [
    {
      question: 'Hva er dobbelt bokholderi?',
      options: [
        'Hver transaksjon føres på minst to kontoer med like store beløp i debet og kredit',
        'Regnskapet føres to ganger i to bøker',
        'Bare halvparten av transaksjonene bokføres',
        'Debet og kredit kan være ulike',
      ],
      explanation: 'Dobbelt bokholderi sikrer at balanselikningen alltid er i likevekt og gjør feil lettere å oppdage.',
    },
    {
      question: 'Ved varekjøp for 30 000 kr ekskl. mva (25 %) betalt fra bank – hvor mye krediteres bankkontoen?',
      options: ['37 500 kr', '30 000 kr', '7 500 kr', '22 500 kr'],
      explanation: 'Totalbeløp inkl. mva = 30 000 + 7 500 = 37 500 kr, som krediteres bank.',
    },
    {
      question: 'Ved salg av varer på kreditt for 20 000 kr ekskl. mva (25 %), hvor mye debiteres kundefordringer?',
      options: ['25 000 kr', '20 000 kr', '5 000 kr', '15 000 kr'],
      explanation: 'Kundefordringer debiteres med totalbeløpet inkl. mva: 20 000 + 5 000 = 25 000 kr.',
    },
    {
      question: 'Når en eiendel øker, hvor føres det?',
      options: ['I debet', 'I kredit', 'Begge steder', 'Ingen steder'],
      explanation: 'Økning i eiendeler føres i debet (og reduksjon i kredit).',
    },
    {
      question: 'Når en inntekt øker, hvor føres det?',
      options: ['I kredit', 'I debet', 'Begge steder samtidig', 'På bankkontoen alene'],
      explanation: 'Inntekter øker i kredit, mens den motsvarende eiendelen (bank/kunde) øker i debet.',
    },
  ],
  'regnskap-revisjon-2-4': [
    {
      question: 'Hva er et bilag?',
      options: [
        'Et dokument som dokumenterer og bekrefter en økonomisk transaksjon',
        'En markedsføringsbrosjyre',
        'En oversikt over ansatte',
        'Et budsjett',
      ],
      explanation: 'Bilaget er grunnlaget for bokføringen og må gi nok opplysninger til å identifisere og etterprøve transaksjonen.',
    },
    {
      question: 'Hvilket av disse er et eksempel på et bilag?',
      options: ['En faktura', 'En reklameplakat', 'Et organisasjonskart', 'En visjon'],
      explanation: 'Fakturaer, kvitteringer, bankutskrifter og lønnsslipper er typiske bilag.',
    },
    {
      question: 'Hva må et gyldig bilag inneholde?',
      options: [
        'Tilstrekkelige opplysninger til at transaksjonen kan identifiseres og kontrolleres',
        'Bare et omtrentlig beløp',
        'Bare en muntlig beskrivelse',
        'Ingen dato',
      ],
      explanation: 'Bilaget må kunne identifisere, kontrollere og etterprøve transaksjonen, med dato, beløp og parter.',
    },
    {
      question: 'Hvorfor er bilag viktige i regnskapet?',
      options: [
        'De gjør bokføringen etterprøvbar og dokumentert',
        'De erstatter behovet for kontoplan',
        'De fastsetter salgsprisen',
        'De er bare til pynt',
      ],
      explanation: 'Bilag dokumenterer transaksjonene slik at regnskapet kan kontrolleres og revideres.',
    },
    {
      question: 'Hva er konsekvensen av manglende bilag?',
      options: [
        'Bokføringen kan ikke etterprøves, og det er brudd på bokføringsloven',
        'Ingenting',
        'Bedriften slipper skatt',
        'Regnskapet blir automatisk riktig',
      ],
      explanation: 'Uten bilag mangler dokumentasjon, noe som er et brudd på bokføringsplikten.',
    },
  ],
  'regnskap-revisjon-2-5': [
    {
      question: 'Ved salg på kreditt for 16 000 kr ekskl. mva (25 %), hvor mye debiteres kundefordringer?',
      options: ['20 000 kr', '16 000 kr', '4 000 kr', '12 000 kr'],
      explanation: 'Kundefordringer debiteres med inkl. mva: 16 000 + 4 000 = 20 000 kr.',
    },
    {
      question: 'Av samme salg, hvor mye krediteres salgsinntekt?',
      options: ['16 000 kr', '20 000 kr', '4 000 kr', '5 000 kr'],
      explanation: 'Salgsinntekten krediteres med beløpet ekskl. mva = 16 000 kr.',
    },
    {
      question: 'Når kunden senere betaler fakturaen, hvordan bokføres det?',
      options: [
        'Debet bank, kredit kundefordringer',
        'Debet kundefordringer, kredit bank',
        'Debet salgsinntekt, kredit bank',
        'Debet bank, kredit salgsinntekt',
      ],
      explanation: 'Innbetalingen øker bank (debet) og reduserer kundefordringen (kredit).',
    },
    {
      question: 'Hvor mye utgjør utgående mva ved salg på 16 000 kr ekskl. mva (25 %)?',
      options: ['4 000 kr', '5 000 kr', '3 200 kr', '16 000 kr'],
      explanation: 'Utgående mva = 16 000 × 0,25 = 4 000 kr.',
    },
    {
      question: 'Hvorfor påvirker selve kundebetalingen ikke salgsinntekten?',
      options: [
        'Inntekten ble allerede bokført ved salget; betalingen flytter bare verdi fra fordring til bank',
        'Fordi betaling alltid er en ny inntekt',
        'Fordi mva forsvinner ved betaling',
        'Fordi salget annulleres',
      ],
      explanation: 'Etter opptjeningsprinsippet er inntekten ført ved salget; betalingen er bare en omplassering av eiendeler.',
    },
  ],
  'regnskap-revisjon-3-1': [
    {
      question: 'Når skal en inntekt resultatføres etter opptjeningsprinsippet?',
      options: [
        'Når den er opptjent, ikke når pengene mottas',
        'Alltid når pengene mottas',
        'Først ved årsslutt',
        'Aldri',
      ],
      explanation: 'Inntekt føres når varen er levert eller tjenesten utført, uavhengig av betalingstidspunkt.',
    },
    {
      question: 'En byggekontrakt på 1 200 000 kr er 60 % ferdig per 31.12. Hvor mye inntektsføres i år 1?',
      options: ['720 000 kr', '480 000 kr', '1 200 000 kr', '600 000 kr'],
      explanation: 'Etter løpende avregning: 1 200 000 × 0,60 = 720 000 kr i år 1.',
    },
    {
      question: 'Hvor mye av samme kontrakt inntektsføres i år 2?',
      options: ['480 000 kr', '720 000 kr', '1 200 000 kr', '0 kr'],
      explanation: 'Resterende 40 %: 1 200 000 × 0,40 = 480 000 kr i år 2.',
    },
    {
      question: 'Hva er løpende avregningsmetode (fullføringsmetode)?',
      options: [
        'Inntekten føres etter fremdriften i prosjektet',
        'Hele inntekten føres ved kontraktsignering',
        'Hele inntekten føres ved betaling',
        'Inntekten føres aldri',
      ],
      explanation: 'Løpende avregning inntektsfører i takt med fullføringsgraden i prosjektet.',
    },
    {
      question: 'For salg av tjenester, når føres inntekten normalt?',
      options: [
        'Etter hvert som tjenesten utføres',
        'Alltid ved kontraktsstart',
        'Bare ved årsslutt',
        'Når kunden klager',
      ],
      explanation: 'Tjenesteinntekter føres løpende i takt med utførelsen av tjenesten.',
    },
  ],
  'regnskap-revisjon-3-2': [
    {
      question: 'Hvordan beregnes varekostnaden?',
      options: [
        'IB varelager + varekjøp − UB varelager',
        'UB varelager + varekjøp − IB varelager',
        'Varekjøp − lønn',
        'IB varelager + UB varelager',
      ],
      explanation: 'Varekostnad = inngående beholdning + varekjøp − utgående beholdning.',
    },
    {
      question: 'IB varelager 400 000, varekjøp 2 100 000, UB varelager 350 000. Hva er varekostnaden?',
      options: ['2 150 000 kr', '2 850 000 kr', '1 950 000 kr', '2 100 000 kr'],
      explanation: 'Varekostnad = 400 000 + 2 100 000 − 350 000 = 2 150 000 kr.',
    },
    {
      question: 'Brutto lønn er 1 800 000 kr og feriepengesatsen 12 %. Hvor stor er feriepengeavsetningen?',
      options: ['216 000 kr', '180 000 kr', '254 000 kr', '150 000 kr'],
      explanation: 'Feriepenger = 1 800 000 × 0,12 = 216 000 kr.',
    },
    {
      question: 'Arbeidsgiveravgiften beregnes av brutto lønn pluss feriepenger (2 016 000 kr) med sats 14,1 %. Hva blir den (avrundet)?',
      options: ['Ca. 284 000 kr', 'Ca. 254 000 kr', 'Ca. 216 000 kr', 'Ca. 36 000 kr'],
      explanation: 'AGA = (1 800 000 + 216 000) × 0,141 = 2 016 000 × 0,141 ≈ 284 256 kr.',
    },
    {
      question: 'Påvirker avskrivninger likviditeten?',
      options: [
        'Nei, avskrivning er en kostnad uten utbetaling',
        'Ja, det betales kontant hver måned',
        'Ja, det øker bankbeholdningen',
        'Bare ved årsslutt',
      ],
      explanation: 'Avskrivning fordeler en tidligere investering som kostnad, men medfører ingen ny utbetaling.',
    },
  ],
  'regnskap-revisjon-3-3': [
    {
      question: 'Hva er finansposter i resultatregnskapet?',
      options: [
        'Renteinntekter, rentekostnader og lignende fra finansiell aktivitet',
        'Salgsinntekter fra hovedproduktet',
        'Varekostnad',
        'Lønn til produksjonsarbeidere',
      ],
      explanation: 'Finansposter er finansielle inntekter og kostnader utenfor den ordinære driften.',
    },
    {
      question: 'Et firma har gjeld på 100 000 EUR bokført til kurs 11,20 og betaler ved kurs 11,50. Hva er resultatet?',
      options: ['Valutatap på 30 000 kr', 'Valutagevinst på 30 000 kr', 'Ingen effekt', 'Valutatap på 11 500 kr'],
      explanation: 'Betaling 100 000 × 11,50 = 1 150 000; gjeld 100 000 × 11,20 = 1 120 000. Tap = 30 000 kr.',
    },
    {
      question: 'Hvordan føres et valutatap?',
      options: [
        'Som en finanskostnad i resultatregnskapet',
        'Som en driftsinntekt',
        'Som egenkapital',
        'Som varekostnad',
      ],
      explanation: 'Valutatap (disagio) føres som en finanskostnad.',
    },
    {
      question: 'Hva er en finansinntekt?',
      options: [
        'For eksempel renteinntekt på bankinnskudd',
        'Salgsinntekt fra varer',
        'Husleie betalt av bedriften',
        'Lønn til ansatte',
      ],
      explanation: 'Finansinntekter er for eksempel renteinntekter og utbytte, ikke salg fra driften.',
    },
    {
      question: 'Hvis euroen i stedet hadde falt til 11,00, hva ville oppstått ved betaling av 100 000 EUR-gjelden bokført til 11,20?',
      options: [
        'En valutagevinst (agio) på 20 000 kr',
        'Et valutatap på 20 000 kr',
        'Ingen endring',
        'En driftsinntekt på 20 000 kr',
      ],
      explanation: 'Betaling 100 000 × 11,00 = 1 100 000 mot bokført 1 120 000 gir en gevinst på 20 000 kr.',
    },
  ],
  'regnskap-revisjon-3-4': [
    {
      question: 'Hva består skattekostnaden i resultatregnskapet av?',
      options: [
        'Betalbar skatt + endring i utsatt skatt',
        'Bare betalbar skatt',
        'Bare merverdiavgift',
        'Driftsresultat − årsresultat',
      ],
      explanation: 'Skattekostnad = betalbar skatt + endring i utsatt skatt.',
    },
    {
      question: 'Betalbar skatt er 308 000 kr og utsatt skatt øker med 22 000 kr. Hva er skattekostnaden?',
      options: ['330 000 kr', '286 000 kr', '308 000 kr', '22 000 kr'],
      explanation: 'Skattekostnad = 308 000 + 22 000 = 330 000 kr.',
    },
    {
      question: 'Ordinært resultat før skatt er 1 500 000 kr og skattekostnad 330 000 kr. Hva er årsresultatet?',
      options: ['1 170 000 kr', '1 830 000 kr', '1 500 000 kr', '330 000 kr'],
      explanation: 'Årsresultat = 1 500 000 − 330 000 = 1 170 000 kr.',
    },
    {
      question: 'Hva blir effektiv skattesats med resultat før skatt 1 500 000 kr og skattekostnad 330 000 kr?',
      options: ['22,0 %', '25,0 %', '15,0 %', '33,0 %'],
      explanation: 'Effektiv skattesats = 330 000 / 1 500 000 = 22,0 %.',
    },
    {
      question: 'Hva skjer med skattekostnaden hvis utsatt skatt minker i løpet av året?',
      options: [
        'Skattekostnaden blir lavere enn betalbar skatt',
        'Skattekostnaden blir høyere enn betalbar skatt',
        'Skattekostnaden blir null',
        'Det påvirker ikke skattekostnaden',
      ],
      explanation: 'En reduksjon i utsatt skatt trekker ned skattekostnaden under nivået på betalbar skatt.',
    },
  ],
  'regnskap-revisjon-3-5': [
    {
      question: 'Hva er en trendanalyse (indeksering) av regnskapstall?',
      options: [
        'Å sette et basisår til 100 og se utviklingen i forhold til dette',
        'Å beregne moms',
        'Å lage et organisasjonskart',
        'Å fastsette lønn',
      ],
      explanation: 'Indeksering gir basisåret verdien 100, slik at man ser den relative utviklingen over tid.',
    },
    {
      question: 'Hvis salget var 2 000 000 kr i basisåret (indeks 100) og 2 400 000 kr året etter, hva er indeksen?',
      options: ['120', '140', '110', '240'],
      explanation: 'Indeks = 2 400 000 / 2 000 000 × 100 = 120.',
    },
    {
      question: 'Hva er hovedhensikten med å analysere resultatregnskapet over flere år?',
      options: [
        'Å se utvikling og trender i inntekter, kostnader og resultat',
        'Å skjule tap',
        'Å unngå skatt',
        'Å fastsette aksjekapitalen',
      ],
      explanation: 'Flerårsanalyse synliggjør utviklingen og hjelper til å vurdere om bedriften går bedre eller dårligere.',
    },
    {
      question: 'Hva betyr en indeks på 90 sammenlignet med basisåret (100)?',
      options: [
        'En nedgang på 10 % fra basisåret',
        'En økning på 10 %',
        'Ingen endring',
        'En dobling',
      ],
      explanation: 'Indeks 90 betyr at verdien har falt til 90 % av basisåret, altså en nedgang på 10 %.',
    },
    {
      question: 'Hvorfor er det nyttig å bruke et fast basisår i trendanalyse?',
      options: [
        'Det gir et felles sammenligningsgrunnlag for alle årene',
        'Det øker omsetningen',
        'Det fjerner kostnader',
        'Det erstatter balansen',
      ],
      explanation: 'Et fast basisår gjør at alle år måles mot samme referanse, slik at utviklingen blir tydelig.',
    },
  ],
  'regnskap-revisjon-4-1': [
    {
      question: 'Hvordan lyder balanselikningen?',
      options: [
        'Eiendeler = Gjeld + Egenkapital',
        'Eiendeler = Gjeld − Egenkapital',
        'Egenkapital = Eiendeler + Gjeld',
        'Gjeld = Eiendeler + Egenkapital',
      ],
      explanation: 'Alle eiendeler er finansiert med gjeld eller egenkapital: Eiendeler = Gjeld + Egenkapital.',
    },
    {
      question: 'Hvordan kan balanselikningen også skrives?',
      options: [
        'Egenkapital = Eiendeler − Gjeld',
        'Egenkapital = Eiendeler + Gjeld',
        'Gjeld = Egenkapital − Eiendeler',
        'Eiendeler = Egenkapital − Gjeld',
      ],
      explanation: 'Omskrevet er egenkapital = eiendeler − gjeld.',
    },
    {
      question: 'Eiendeler er 1 300 000 kr og gjeld 600 000 kr. Hva er egenkapitalen?',
      options: ['700 000 kr', '1 900 000 kr', '600 000 kr', '1 300 000 kr'],
      explanation: 'Egenkapital = 1 300 000 − 600 000 = 700 000 kr.',
    },
    {
      question: 'Hvorfor «stemmer» balanselikningen alltid?',
      options: [
        'Fordi alle eiendeler per definisjon er finansiert av gjeld eller egenkapital',
        'Fordi tallene rundes av',
        'Fordi revisor godkjenner den',
        'Fordi skatten justeres',
      ],
      explanation: 'Finansieringen av eiendelene kommer enten fra gjeld eller egenkapital, derfor er likningen alltid i balanse.',
    },
    {
      question: 'Hva viser venstre side (aktiva) i en balanse?',
      options: [
        'Eiendelene bedriften har',
        'Gjelden bedriften har',
        'Inntektene i året',
        'Kostnadene i året',
      ],
      explanation: 'Aktivasiden viser eiendelene, mens passivasiden viser egenkapital og gjeld.',
    },
  ],
  'regnskap-revisjon-4-2': [
    {
      question: 'Hva er avskrivning?',
      options: [
        'Planmessig fordeling av et anleggsmiddels kostnad over levetiden',
        'En kontant utbetaling hver måned',
        'En inntekt fra salg',
        'En type lån',
      ],
      explanation: 'Avskrivning fordeler anskaffelseskosten (minus restverdi) som kostnad over den økonomiske levetiden.',
    },
    {
      question: 'En varebil koster 480 000 kr, restverdi 80 000 kr og levetid 8 år. Hva er årlig lineær avskrivning?',
      options: ['50 000 kr', '60 000 kr', '48 000 kr', '40 000 kr'],
      explanation: 'Avskrivning = (480 000 − 80 000) / 8 = 400 000 / 8 = 50 000 kr per år.',
    },
    {
      question: 'Med 50 000 kr i årlig avskrivning, hva er bokført verdi etter 3 år (kjøp 480 000 kr)?',
      options: ['330 000 kr', '430 000 kr', '380 000 kr', '300 000 kr'],
      explanation: 'Bokført verdi = 480 000 − 3 × 50 000 = 480 000 − 150 000 = 330 000 kr.',
    },
    {
      question: 'En maskin koster 600 000 kr og avskrives med 20 % saldo. Hva er avskrivningen år 1?',
      options: ['120 000 kr', '96 000 kr', '100 000 kr', '60 000 kr'],
      explanation: 'Saldoavskrivning år 1 = 600 000 × 0,20 = 120 000 kr.',
    },
    {
      question: 'Hva er bokført verdi på maskinen etter år 1 (600 000 kr, 20 % saldo)?',
      options: ['480 000 kr', '384 000 kr', '500 000 kr', '120 000 kr'],
      explanation: 'Bokført verdi = 600 000 − 120 000 = 480 000 kr.',
    },
  ],
  'regnskap-revisjon-4-3': [
    {
      question: 'Hva sier laveste verdis prinsipp (LVP)?',
      options: [
        'Omløpsmidler vurderes til det laveste av anskaffelseskost og virkelig verdi',
        'Omløpsmidler vurderes alltid til markedsverdi',
        'Omløpsmidler vurderes til det høyeste av kost og verdi',
        'Omløpsmidler avskrives lineært',
      ],
      explanation: 'LVP følger forsiktighetsprinsippet: er virkelig verdi lavere enn kost, skrives verdien ned.',
    },
    {
      question: 'Hva betyr FIFO i lagervurdering?',
      options: [
        'De eldste varene anses solgt først',
        'De nyeste varene anses solgt først',
        'Alle varer verdsettes til gjennomsnitt',
        'Varene verdsettes til salgspris',
      ],
      explanation: 'FIFO (First In, First Out) forutsetter at de først innkjøpte varene selges først.',
    },
    {
      question: 'Innkjøp: 100 à 400, 150 à 420, 80 à 450. 200 selges. Hva er FIFO-lagerverdien av de 130 gjenværende?',
      options: ['57 000 kr', '54 757 kr', '52 000 kr', '60 000 kr'],
      explanation: 'Gjenværende (nyeste): 50 à 420 = 21 000 + 80 à 450 = 36 000, sum 57 000 kr.',
    },
    {
      question: 'Med veiet gjennomsnitt (totalkost 139 000 kr / 330 par ≈ 421,21 kr), hva er verdien av 130 par (avrundet)?',
      options: ['Ca. 54 757 kr', 'Ca. 57 000 kr', 'Ca. 52 000 kr', 'Ca. 60 000 kr'],
      explanation: '130 × 421,21 ≈ 54 757 kr, noe lavere enn FIFO-verdien.',
    },
    {
      question: 'Brutto kundefordringer er 850 000 kr. Med 3 % generell og 25 000 kr spesifikk tapsavsetning, hva er netto kundefordringer?',
      options: ['799 500 kr', '824 500 kr', '825 000 kr', '774 500 kr'],
      explanation: 'Avsetning = 850 000 × 0,03 + 25 000 = 25 500 + 25 000 = 50 500. Netto = 850 000 − 50 500 = 799 500 kr.',
    },
  ],
  'regnskap-revisjon-4-4': [
    {
      question: 'Hva er langsiktig gjeld?',
      options: [
        'Gjeld med forfall mer enn ett år frem i tid',
        'Gjeld som forfaller innen ett år',
        'Egenkapital',
        'En omløpseiendel',
      ],
      explanation: 'Langsiktig gjeld, som pantelån og obligasjonslån, forfaller senere enn ett år frem.',
    },
    {
      question: 'Hvilket av disse er kortsiktig gjeld?',
      options: ['Leverandørgjeld', 'Pantelån med 20 års løpetid', 'Aksjekapital', 'Varige driftsmidler'],
      explanation: 'Leverandørgjeld forfaller innen ett år og er kortsiktig gjeld.',
    },
    {
      question: 'Et serielån på 2 000 000 kr nedbetales over 10 år med like avdrag. Hva er årlig avdrag?',
      options: ['200 000 kr', '100 000 kr', '250 000 kr', '20 000 kr'],
      explanation: 'Årlig avdrag = 2 000 000 / 10 = 200 000 kr.',
    },
    {
      question: 'Etter første avdrag er restlånet 1 800 000 kr. Hvor mye klassifiseres som kortsiktig gjeld (neste års avdrag)?',
      options: ['200 000 kr', '1 800 000 kr', '1 600 000 kr', '100 000 kr'],
      explanation: 'Neste års avdrag på 200 000 kr er kortsiktig; resten (1 600 000 kr) er langsiktig.',
    },
    {
      question: 'Hva er utsatt skatt et eksempel på?',
      options: [
        'Langsiktig gjeld',
        'En omløpseiendel',
        'En driftsinntekt',
        'Egenkapital',
      ],
      explanation: 'Utsatt skatt klassifiseres som langsiktig gjeld i balansen.',
    },
  ],
  'regnskap-revisjon-4-5': [
    {
      question: 'Hva er innskutt egenkapital?',
      options: [
        'Kapital eierne har skutt inn, som aksjekapital og overkursfond',
        'Kapital bedriften har tjent opp',
        'Gjeld til banken',
        'Varelageret',
      ],
      explanation: 'Innskutt egenkapital er aksjekapital og overkurs som eierne har betalt inn.',
    },
    {
      question: 'Hva er minimumskravet til aksjekapital for et AS?',
      options: ['30 000 kr', '100 000 kr', '1 000 000 kr', '0 kr'],
      explanation: 'Minstekravet til aksjekapital i et AS er 30 000 kr.',
    },
    {
      question: '5 000 nye aksjer à pålydende 10 kr utstedes til kurs 25 kr. Hvor stor blir aksjekapital-økningen?',
      options: ['50 000 kr', '125 000 kr', '75 000 kr', '25 000 kr'],
      explanation: 'Aksjekapital øker med pålydende: 5 000 × 10 = 50 000 kr.',
    },
    {
      question: 'Av samme emisjon, hvor mye går til overkursfond?',
      options: ['75 000 kr', '50 000 kr', '125 000 kr', '25 000 kr'],
      explanation: 'Overkurs = 5 000 × (25 − 10) = 5 000 × 15 = 75 000 kr.',
    },
    {
      question: 'EK 01.01 er 1 250 000 kr, årsresultat +280 000 kr og utbytte −150 000 kr. Hva er EK 31.12?',
      options: ['1 380 000 kr', '1 530 000 kr', '1 120 000 kr', '1 250 000 kr'],
      explanation: 'EK 31.12 = 1 250 000 + 280 000 − 150 000 = 1 380 000 kr.',
    },
  ],
  'regnskap-revisjon-5-1': [
    {
      question: 'Hva er merverdiavgift (MVA)?',
      options: [
        'En indirekte skatt på omsetning av varer og tjenester i alle ledd',
        'En direkte skatt på lønn',
        'En avgift bare på import',
        'Et fradrag i regnskapet',
      ],
      explanation: 'MVA er en indirekte skatt der sluttforbrukeren bærer avgiften, mens næringsdrivende krever den inn.',
    },
    {
      question: 'Hva er utgående MVA?',
      options: [
        'Avgiften bedriften legger på ved salg til kunder',
        'Avgiften bedriften betaler ved kjøp',
        'Skatt på overskuddet',
        'Avgift på lønn',
      ],
      explanation: 'Utgående MVA kreves inn ved salg og skal betales videre til staten.',
    },
    {
      question: 'En butikk kjøper for 8 000 kr og selger for 14 000 kr (begge ekskl. mva, 25 %). Hva skal betales til staten?',
      options: ['1 500 kr', '3 500 kr', '2 000 kr', '5 500 kr'],
      explanation: 'Utgående mva 3 500 − inngående mva 2 000 = 1 500 kr betales til staten.',
    },
    {
      question: 'Hva er inngående MVA?',
      options: [
        'Avgiften bedriften betaler ved kjøp, som kan trekkes fra mot utgående MVA',
        'Skatt på årsresultatet',
        'Avgift på utbytte',
        'En kostnad som aldri refunderes',
      ],
      explanation: 'Inngående MVA betales ved kjøp og kan fradras mot utgående MVA (en fordring på staten).',
    },
    {
      question: 'Hvem bærer til slutt merverdiavgiften?',
      options: [
        'Sluttforbrukeren',
        'Staten',
        'Den næringsdrivende selv',
        'Leverandøren',
      ],
      explanation: 'MVA veltes over på sluttforbrukeren; bedriftene fungerer bare som innkrevere.',
    },
  ],
  'regnskap-revisjon-5-2': [
    {
      question: 'Hva er den alminnelige MVA-satsen i Norge?',
      options: ['25 %', '15 %', '12 %', '22 %'],
      explanation: 'Den alminnelige (høyeste) MVA-satsen er 25 %.',
    },
    {
      question: 'Hvilken MVA-sats gjelder for næringsmidler (matvarer)?',
      options: ['15 %', '25 %', '12 %', '0 %'],
      explanation: 'Matvarer har redusert sats på 15 %.',
    },
    {
      question: 'En vare koster 499 kr inkl. 15 % mva. Hva er prisen ekskl. mva (avrundet)?',
      options: ['433,91 kr', '424,15 kr', '374,25 kr', '399,20 kr'],
      explanation: 'Pris ekskl. mva = 499 / 1,15 ≈ 433,91 kr.',
    },
    {
      question: 'Hvor mye utgjør mva på en vare til 499 kr inkl. 15 % mva?',
      options: ['65,09 kr', '74,85 kr', '99,80 kr', '124,75 kr'],
      explanation: 'MVA = 499 − 433,91 = 65,09 kr (eller 499 × 15/115).',
    },
    {
      question: 'Hvilken sats brukes på rengjøringsmidler og tobakk?',
      options: ['25 %', '15 %', '12 %', '0 %'],
      explanation: 'Slike varer beskattes med alminnelig sats 25 %, i motsetning til matvarer (15 %).',
    },
  ],
  'regnskap-revisjon-5-3': [
    {
      question: 'Hva er MVA-meldingen?',
      options: [
        'Rapporten til Skatteetaten med oversikt over utgående og inngående MVA for en termin',
        'En faktura til kunden',
        'En lønnsslipp',
        'En revisjonsberetning',
      ],
      explanation: 'MVA-meldingen danner grunnlaget for innbetaling eller tilbakebetaling av merverdiavgift.',
    },
    {
      question: 'Ved salg for 40 000 kr ekskl. mva (25 %) på kreditt, hvor mye debiteres kundefordringer?',
      options: ['50 000 kr', '40 000 kr', '10 000 kr', '30 000 kr'],
      explanation: 'Kundefordringer debiteres med totalbeløp inkl. mva = 40 000 + 10 000 = 50 000 kr.',
    },
    {
      question: 'På hvilken konto føres utgående merverdiavgift?',
      options: ['2700', '2710', '3000', '1500'],
      explanation: 'Utgående MVA føres på konto 2700 (gjeld til staten).',
    },
    {
      question: 'Utgående MVA er 85 000 kr og inngående MVA 32 000 kr. Hva skal betales til staten?',
      options: ['53 000 kr', '117 000 kr', '32 000 kr', '85 000 kr'],
      explanation: 'Skyldig MVA = 85 000 − 32 000 = 53 000 kr.',
    },
    {
      question: 'Hva er konto 2740 brukt til?',
      options: [
        'Oppgjørskonto for merverdiavgift (netto skyldig eller tilgode)',
        'Lønnskonto',
        'Salgsinntektskonto',
        'Bankkonto',
      ],
      explanation: 'Ved terminoppgjør overføres 2700 og 2710 til oppgjørskontoen 2740.',
    },
  ],
  'regnskap-revisjon-5-4': [
    {
      question: 'Hva er skattesatsen på alminnelig inntekt for selskaper?',
      options: ['22 %', '25 %', '15 %', '28 %'],
      explanation: 'Foretaksskatten på alminnelig inntekt er 22 %.',
    },
    {
      question: 'Hva er saldoavskrivning?',
      options: [
        'Skattemessig avskrivning med fast prosent av saldoverdien ved årets start',
        'Lik avskrivning hvert år',
        'Avskrivning bare i siste år',
        'En kontant utbetaling',
      ],
      explanation: 'Saldoavskrivning gir en prosentvis avskrivning av bokført saldo, med avtagende beløp over tid.',
    },
    {
      question: 'En maskin på 500 000 kr i saldogruppe d (20 %). Hva er avskrivningen år 1?',
      options: ['100 000 kr', '80 000 kr', '64 000 kr', '50 000 kr'],
      explanation: 'År 1: 500 000 × 0,20 = 100 000 kr.',
    },
    {
      question: 'Resultat før skatt 1 200 000 kr; tilbakefør regnskapsmessige avskr. +150 000, fradra skattemessige −200 000, legg til representasjon +30 000. Hva er alminnelig inntekt?',
      options: ['1 180 000 kr', '1 230 000 kr', '1 150 000 kr', '1 200 000 kr'],
      explanation: 'Alminnelig inntekt = 1 200 000 + 30 000 + 150 000 − 200 000 = 1 180 000 kr.',
    },
    {
      question: 'Hva er betalbar skatt av en alminnelig inntekt på 1 180 000 kr?',
      options: ['259 600 kr', '236 000 kr', '295 000 kr', '330 400 kr'],
      explanation: 'Betalbar skatt = 1 180 000 × 0,22 = 259 600 kr.',
    },
  ],
  'regnskap-revisjon-5-5': [
    {
      question: 'Hva er A-meldingen?',
      options: [
        'Den månedlige rapporten om ansattes lønn, trekk og avgifter til Skatteetaten, NAV og SSB',
        'En faktura til kunder',
        'En MVA-melding',
        'En revisjonsberetning',
      ],
      explanation: 'A-meldingen rapporterer lønn, forskuddstrekk, arbeidsgiveravgift og ytelser, innen den 5. hver måned.',
    },
    {
      question: 'Hva er forskuddstrekk?',
      options: [
        'Skatt arbeidsgiver trekker fra ansattes bruttolønn og innbetaler til Skatteetaten',
        'En bonus til den ansatte',
        'En avgift på varer',
        'Et lån til den ansatte',
      ],
      explanation: 'Forskuddstrekket trekkes etter skattekortet og settes på egen skattetrekkskonto før lønn utbetales.',
    },
    {
      question: 'Bruttolønn 45 000 kr og forskuddstrekk 35 %. Hva blir netto utbetalt?',
      options: ['29 250 kr', '15 750 kr', '38 655 kr', '45 000 kr'],
      explanation: 'Forskuddstrekk = 45 000 × 0,35 = 15 750. Netto = 45 000 − 15 750 = 29 250 kr.',
    },
    {
      question: 'Hva er arbeidsgiveravgiften av en lønn på 45 000 kr i sone 1 (14,1 %)?',
      options: ['6 345 kr', '5 400 kr', '15 750 kr', '4 500 kr'],
      explanation: 'AGA = 45 000 × 0,141 = 6 345 kr.',
    },
    {
      question: 'Hva er feriepengeavsetningen av 45 000 kr med 12 % sats?',
      options: ['5 400 kr', '6 345 kr', '4 500 kr', '5 850 kr'],
      explanation: 'Feriepenger = 45 000 × 0,12 = 5 400 kr.',
    },
  ],
  'regnskap-revisjon-6-1': [
    {
      question: 'Hva skal et årsregnskap minst inneholde (regnskapsloven § 3-2)?',
      options: [
        'Resultatregnskap, balanse og noter (og kontantstrøm for store foretak)',
        'Bare en resultatoversikt',
        'Bare en balanse',
        'Bare en revisjonsberetning',
      ],
      explanation: 'Årsregnskapet består av resultatregnskap, balanse, noter og – for store foretak – kontantstrømoppstilling.',
    },
    {
      question: 'EK 1. januar er 1 200 000 kr, årsresultat 390 000 kr og utbytte 150 000 kr. Hva er EK 31. desember?',
      options: ['1 440 000 kr', '1 590 000 kr', '1 050 000 kr', '1 200 000 kr'],
      explanation: 'EK 31.12 = 1 200 000 + 390 000 − 150 000 = 1 440 000 kr.',
    },
    {
      question: 'Hvordan påvirker årsresultatet egenkapitalen?',
      options: [
        'Overskudd øker egenkapitalen; underskudd reduserer den',
        'Det påvirker ikke egenkapitalen',
        'Det reduserer alltid egenkapitalen',
        'Det øker alltid gjelden',
      ],
      explanation: 'Årsresultatet legges til egenkapitalen (overskudd) eller trekkes fra (underskudd).',
    },
    {
      question: 'Hvem skal utarbeide årsberetning?',
      options: [
        'Foretak som ikke er «små foretak» etter regnskapsloven',
        'Alle uten unntak',
        'Bare enkeltpersonforetak',
        'Ingen',
      ],
      explanation: 'Små foretak kan velge bort årsberetning; større foretak må utarbeide den.',
    },
    {
      question: 'Hva viser resultatregnskapet i forhold til balansen?',
      options: [
        'Resultatregnskapet viser periodens inntekter og kostnader; balansen viser stillingen på et tidspunkt',
        'De viser nøyaktig det samme',
        'Resultatregnskapet viser bare eiendeler',
        'Balansen viser bare inntekter',
      ],
      explanation: 'Resultatregnskapet er en «film» av perioden, balansen et øyeblikksbilde ved periodeslutt.',
    },
  ],
  'regnskap-revisjon-6-2': [
    {
      question: 'Hva er en årsberetning?',
      options: [
        'Styrets skriftlige redegjørelse for virksomhetens utvikling, resultat og finansielle stilling',
        'En faktura til kunder',
        'En MVA-melding',
        'En kontoplan',
      ],
      explanation: 'Årsberetningen utdyper tallene og følger regnskapsloven §§ 3-3 og 3-3a.',
    },
    {
      question: 'Hvilke foretak kan velge å ikke utarbeide årsberetning?',
      options: ['Små foretak', 'Allmennaksjeselskaper', 'Børsnoterte selskaper', 'Banker'],
      explanation: 'Små foretak etter regnskapsloven § 1-6 kan velge bort årsberetning.',
    },
    {
      question: 'Hva er en typisk obligatorisk vurdering i en årsberetning?',
      options: [
        'Forutsetningen om fortsatt drift',
        'Bedriftens reklamekampanje',
        'Konkurrentenes priser',
        'Antall kunder i kantinen',
      ],
      explanation: 'Styret skal blant annet bekrefte forutsetningen om fortsatt drift.',
    },
    {
      question: 'Hva betyr «fortsatt drift»-forutsetningen?',
      options: [
        'At virksomheten forventes å fortsette i overskuelig fremtid',
        'At bedriften skal avvikles',
        'At regnskapet er ferdig',
        'At skatten er betalt',
      ],
      explanation: 'Fortsatt drift innebærer at regnskapet bygger på at virksomheten vil fortsette, ikke avvikles.',
    },
    {
      question: 'Hva er hensikten med årsberetningen?',
      options: [
        'Å gi brukerne en forståelig forklaring som utfyller regnskapstallene',
        'Å skjule resultatet',
        'Å erstatte balansen',
        'Å beregne moms',
      ],
      explanation: 'Årsberetningen setter tallene i sammenheng og forklarer utvikling, risiko og fremtidsutsikter.',
    },
  ],
  'regnskap-revisjon-6-3': [
    {
      question: 'Hva er noter til regnskapet?',
      options: [
        'Obligatoriske tilleggsopplysninger til resultatregnskapet og balansen',
        'En reklamebrosjyre',
        'En type bankkonto',
        'En lønnsslipp',
      ],
      explanation: 'Notene gir nødvendig informasjon som ikke fremgår av selve oppstillingene (regnskapsloven kapittel 7).',
    },
    {
      question: 'Hva inneholder en prinsippnote?',
      options: [
        'En beskrivelse av hvilke regnskapsprinsipper som er brukt',
        'En oversikt over ansatte',
        'En markedsføringsplan',
        'En liste over kunder',
      ],
      explanation: 'Prinsippnoten forklarer for eksempel inntektsføring og avskrivningsmetoder som er anvendt.',
    },
    {
      question: 'Hvorfor er noter viktige?',
      options: [
        'De gir informasjon som trengs for å bedømme stilling og resultat, men som ikke vises i tallene alene',
        'De erstatter balansen',
        'De fastsetter salgsprisen',
        'De er bare til pynt',
      ],
      explanation: 'Notene utdyper og forklarer tallene slik at brukerne får et fullstendig bilde.',
    },
    {
      question: 'En note for varige driftsmidler viser typisk:',
      options: [
        'Anskaffelseskost, tilgang, avgang, avskrivninger og bokført verdi',
        'Bare salgsprisen',
        'Bare antall ansatte',
        'Bare kundefordringer',
      ],
      explanation: 'Driftsmiddelnoten spesifiserer kostpris, endringer, akkumulerte avskrivninger og bokført verdi.',
    },
    {
      question: 'Hvor er kravene til noter regulert?',
      options: [
        'I regnskapsloven kapittel 7',
        'I straffeloven',
        'I markedsføringsloven',
        'I arbeidsmiljøloven',
      ],
      explanation: 'Notekravene følger av regnskapsloven kapittel 7.',
    },
  ],
  'regnskap-revisjon-6-4': [
    {
      question: 'Hva viser en kontantstrømoppstilling?',
      options: [
        'Virksomhetens inn- og utbetalinger og endringen i kontanter',
        'Bare inntekter uansett betaling',
        'Bare egenkapitalen',
        'Antall ansatte',
      ],
      explanation: 'Kontantstrømoppstillingen forklarer endringen i kontanter og bankinnskudd i perioden.',
    },
    {
      question: 'Hvilke tre kategorier deles kontantstrømoppstillingen i?',
      options: [
        'Drift, investering og finansiering',
        'Debet, kredit og balanse',
        'Inntekt, kostnad og resultat',
        'Eiendeler, gjeld og egenkapital',
      ],
      explanation: 'Kontantstrømmen deles i drifts-, investerings- og finansieringsaktiviteter.',
    },
    {
      question: 'Kjøp av maskiner og salg av en bil hører til hvilken kategori?',
      options: [
        'Investeringsaktiviteter',
        'Driftsaktiviteter',
        'Finansieringsaktiviteter',
        'Egenkapital',
      ],
      explanation: 'Kjøp og salg av anleggsmidler er investeringsaktiviteter.',
    },
    {
      question: 'Drift 800 000, investering −350 000, finansiering +50 000. Hva er årets netto endring i kontanter?',
      options: ['+500 000 kr', '−500 000 kr', '+1 200 000 kr', '+450 000 kr'],
      explanation: 'Netto endring = 800 000 − 350 000 + 50 000 = 500 000 kr.',
    },
    {
      question: 'Opptak av lån og utbetaling av utbytte hører til hvilken kategori?',
      options: [
        'Finansieringsaktiviteter',
        'Driftsaktiviteter',
        'Investeringsaktiviteter',
        'Varekostnad',
      ],
      explanation: 'Lån og utbytte er finansieringsaktiviteter i kontantstrømoppstillingen.',
    },
  ],
  'regnskap-revisjon-6-5': [
    {
      question: 'Hva betyr periodisering?',
      options: [
        'Å henføre inntekter og kostnader til den perioden de tilhører, uavhengig av betaling',
        'Å betale alle regninger i januar',
        'Å avskrive lineært',
        'Å beregne moms',
      ],
      explanation: 'Periodisering plasserer inntekter og kostnader i riktig periode etter når de hører hjemme.',
    },
    {
      question: 'En forsikring på 60 000 kr betales 1.10 for ett år. Hvor mye tilhører inneværende regnskapsår (okt–des)?',
      options: ['15 000 kr', '45 000 kr', '60 000 kr', '5 000 kr'],
      explanation: '3 av 12 måneder tilhører året: 3 × 5 000 = 15 000 kr.',
    },
    {
      question: 'Hvor mye av forsikringen (60 000 kr fra 1.10) balanseføres som forskuddsbetalt kostnad ved årsslutt?',
      options: ['45 000 kr', '15 000 kr', '60 000 kr', '5 000 kr'],
      explanation: '9 måneder gjelder neste år: 9 × 5 000 = 45 000 kr balanseføres som forskuddsbetalt kostnad.',
    },
    {
      question: 'Hva er et typisk første steg i en årsavslutning?',
      options: [
        'Avstemming og kontroll av kontoer som bank, kunder og leverandører',
        'Å utbetale utbytte',
        'Å lansere et nytt produkt',
        'Å ansette flere',
      ],
      explanation: 'Årsavslutningen starter med avstemming og kontroll før periodiseringer og avsetninger.',
    },
    {
      question: 'Hvorfor periodiserer man forskuddsbetalte kostnader?',
      options: [
        'For at kostnaden skal belaste den perioden den faktisk gjelder',
        'For å unngå skatt',
        'For å øke omsetningen',
        'For å skjule utgifter',
      ],
      explanation: 'Periodisering sikrer at kostnaden henføres til riktig periode etter sammenstillingsprinsippet.',
    },
  ],
  'regnskap-revisjon-7-1': [
    {
      question: 'Hvordan beregnes resultatgraden?',
      options: [
        'Ordinært resultat før skatt / driftsinntekter × 100 %',
        'Driftsinntekter / resultat × 100 %',
        'Egenkapital / totalkapital × 100 %',
        'Omløpsmidler / kortsiktig gjeld',
      ],
      explanation: 'Resultatgrad = ordinært resultat før skatt delt på driftsinntekter.',
    },
    {
      question: 'Resultat før skatt 820 000 kr og driftsinntekter 8 000 000 kr. Hva er resultatgraden?',
      options: ['10,25 %', '8 %', '15,4 %', '22,8 %'],
      explanation: 'Resultatgrad = 820 000 / 8 000 000 × 100 % = 10,25 %.',
    },
    {
      question: 'Hvordan beregnes totalkapitalrentabilitet (TKR)?',
      options: [
        '(Resultat før skatt + rentekostnader) / gjennomsnittlig totalkapital × 100 %',
        'Resultat etter skatt / egenkapital × 100 %',
        'Driftsinntekter / totalkapital',
        'Gjeld / egenkapital',
      ],
      explanation: 'Rentekostnader legges til fordi TKR måler avkastning på all kapital uavhengig av finansiering.',
    },
    {
      question: 'Resultat før skatt 820 000, rentekostnader 180 000, gj.snitt totalkapital 6 500 000. Hva er TKR?',
      options: ['15,4 %', '10,25 %', '22,8 %', '12,6 %'],
      explanation: 'TKR = (820 000 + 180 000) / 6 500 000 × 100 % = 1 000 000 / 6 500 000 ≈ 15,4 %.',
    },
    {
      question: 'Hva måler egenkapitalrentabiliteten (EKR)?',
      options: [
        'Avkastningen eierne får på investert egenkapital',
        'Bedriftens kortsiktige likviditet',
        'Andelen gjeld av totalkapital',
        'Varelagerets omløpshastighet',
      ],
      explanation: 'EKR = ordinært resultat etter skatt / gjennomsnittlig egenkapital og viser eiernes avkastning.',
    },
  ],
  'regnskap-revisjon-7-2': [
    {
      question: 'Hvordan beregnes likviditetsgrad 1 (LG1)?',
      options: [
        'Omløpsmidler / kortsiktig gjeld',
        'Anleggsmidler / langsiktig gjeld',
        'Egenkapital / totalkapital',
        '(Omløpsmidler − varelager) / kortsiktig gjeld',
      ],
      explanation: 'LG1 = omløpsmidler / kortsiktig gjeld; tommelfingerregelen er minst 2.',
    },
    {
      question: 'Hva skiller likviditetsgrad 2 fra LG1?',
      options: [
        'Varelageret trekkes fra omløpsmidlene i LG2',
        'LG2 inkluderer anleggsmidler',
        'LG2 ser bort fra kortsiktig gjeld',
        'De er identiske',
      ],
      explanation: 'LG2 (quick ratio) trekker fra varelageret, som er vanskeligere å omsette raskt.',
    },
    {
      question: 'Omløpsmidler 2 600 000 kr og kortsiktig gjeld 1 300 000 kr. Hva er LG1?',
      options: ['2,0', '1,38', '0,5', '3,9'],
      explanation: 'LG1 = 2 600 000 / 1 300 000 = 2,0.',
    },
    {
      question: 'Med varelager 800 000 kr (av omløpsmidler 2 600 000) og kortsiktig gjeld 1 300 000, hva er LG2?',
      options: ['1,38', '2,0', '0,62', '1,0'],
      explanation: 'LG2 = (2 600 000 − 800 000) / 1 300 000 = 1 800 000 / 1 300 000 ≈ 1,38.',
    },
    {
      question: 'Hvordan beregnes arbeidskapital?',
      options: [
        'Omløpsmidler − kortsiktig gjeld',
        'Eiendeler − egenkapital',
        'Salgsinntekter − varekostnad',
        'Totalkapital − gjeld',
      ],
      explanation: 'Arbeidskapital = omløpsmidler − kortsiktig gjeld; positiv arbeidskapital er en buffer.',
    },
  ],
  'regnskap-revisjon-7-3': [
    {
      question: 'Hvordan beregnes egenkapitalandelen?',
      options: [
        'Egenkapital / totalkapital × 100 %',
        'Gjeld / egenkapital',
        'Omløpsmidler / kortsiktig gjeld',
        'Resultat / driftsinntekter × 100 %',
      ],
      explanation: 'Egenkapitalandel = egenkapital / totalkapital og måler soliditet; bør være minst 30–35 %.',
    },
    {
      question: 'Egenkapital 5 250 000 kr og totalkapital 15 000 000 kr. Hva er egenkapitalandelen?',
      options: ['35 %', '65 %', '1,86', '22 %'],
      explanation: 'Egenkapitalandel = 5 250 000 / 15 000 000 × 100 % = 35 %.',
    },
    {
      question: 'Total gjeld 9 750 000 kr og egenkapital 5 250 000 kr. Hva er gjeldsgraden?',
      options: ['1,86', '0,54', '2,86', '0,35'],
      explanation: 'Gjeldsgrad = total gjeld / egenkapital = 9 750 000 / 5 250 000 ≈ 1,86.',
    },
    {
      question: 'Hva viser rentedekningsgraden?',
      options: [
        'Hvor mange ganger bedriften kan dekke rentekostnadene med resultatet',
        'Andelen egenkapital',
        'Varelagerets omløpshastighet',
        'Kredittiden til kundene',
      ],
      explanation: 'Rentedekningsgrad = (resultat før skatt + rentekostnader) / rentekostnader.',
    },
    {
      question: 'Resultat før skatt 1 600 000, rentekostnader 480 000. Hva er rentedekningsgraden?',
      options: ['4,33', '3,33', '1,86', '5,0'],
      explanation: 'Rentedekningsgrad = (1 600 000 + 480 000) / 480 000 = 2 080 000 / 480 000 ≈ 4,33.',
    },
  ],
  'regnskap-revisjon-7-4': [
    {
      question: 'Hvordan beregnes omløpshastigheten for varelager?',
      options: [
        'Varekostnad / gjennomsnittlig varelager',
        'Gjennomsnittlig varelager / varekostnad',
        'Salgsinntekter / egenkapital',
        'Varekjøp / kortsiktig gjeld',
      ],
      explanation: 'Omløpshastighet for varelager = varekostnad / gjennomsnittlig varelager.',
    },
    {
      question: 'Varekostnad 6 000 000 kr og gjennomsnittlig varelager 1 000 000 kr. Hva er omløpshastigheten?',
      options: ['6,0 ganger', '60 ganger', '0,17 ganger', '16,7 ganger'],
      explanation: 'Omløpshastighet = 6 000 000 / 1 000 000 = 6,0 ganger.',
    },
    {
      question: 'Med omløpshastighet 6,0 – hva er lagringstiden i dager (avrundet)?',
      options: ['Ca. 61 dager', 'Ca. 6 dager', 'Ca. 365 dager', 'Ca. 30 dager'],
      explanation: 'Lagringstid = 365 / 6,0 ≈ 60,8 dager.',
    },
    {
      question: 'Hva viser kredittid kunder?',
      options: [
        'Gjennomsnittlig antall dager kundene bruker på å betale',
        'Hvor lenge varene ligger på lager',
        'Hvor mye egenkapital bedriften har',
        'Antall ansatte',
      ],
      explanation: 'Kredittid kunder måler hvor raskt kundene betaler fordringene sine.',
    },
    {
      question: 'Hvorfor kan lang kredittid hos leverandører være en fordel?',
      options: [
        'Det gir bedriften en form for gratis finansiering',
        'Det øker rentekostnadene',
        'Det reduserer salget',
        'Det øker varelageret',
      ],
      explanation: 'Lengre betalingstid til leverandører frigjør likviditet og fungerer som rentefri finansiering.',
    },
  ],
  'regnskap-revisjon-7-5': [
    {
      question: 'Hva viser DuPont-modellen?',
      options: [
        'At TKR = resultatgrad × kapitalens omløpshastighet',
        'At egenkapital = eiendeler − gjeld',
        'At MVA = utgående − inngående',
        'At varekostnad = IB + kjøp − UB',
      ],
      explanation: 'DuPont dekomponerer totalkapitalrentabiliteten i resultatgrad og kapitalens omløpshastighet.',
    },
    {
      question: 'Hvordan beregnes kapitalens omløpshastighet?',
      options: [
        'Driftsinntekter / gjennomsnittlig totalkapital',
        'Totalkapital / driftsinntekter',
        'Resultat / egenkapital',
        'Varekostnad / varelager',
      ],
      explanation: 'Kapitalens omløpshastighet = driftsinntekter / gjennomsnittlig totalkapital.',
    },
    {
      question: 'Lavprisbutikk: resultatgrad 2 %, omløpshastighet 5,0. Hva er TKR?',
      options: ['10 %', '7 %', '2,5 %', '25 %'],
      explanation: 'TKR = 2 % × 5,0 = 10 %.',
    },
    {
      question: 'Spesialforretning: resultatgrad 10 %, omløpshastighet 1,0. Hva er TKR?',
      options: ['10 %', '11 %', '1 %', '110 %'],
      explanation: 'TKR = 10 % × 1,0 = 10 %.',
    },
    {
      question: 'Hva illustrerer DuPont-modellen om strategier?',
      options: [
        'Samme TKR kan nås med høy margin/lav omløpshastighet eller lav margin/høy omløpshastighet',
        'At bare høy margin gir god TKR',
        'At omløpshastighet er uten betydning',
        'At TKR alltid er lik resultatgraden',
      ],
      explanation: 'En lavprisbutikk (lav margin, høy omløpshastighet) kan nå samme TKR som en spesialforretning (høy margin, lav omløpshastighet).',
    },
  ],
  'regnskap-revisjon-8-1': [
    {
      question: 'Hva er revisjon?',
      options: [
        'En uavhengig kontroll og vurdering av årsregnskap og årsberetning',
        'En markedsføringsmetode',
        'En lønnsutbetaling',
        'En type lån',
      ],
      explanation: 'Revisjon gir brukerne trygghet for at den finansielle informasjonen er pålitelig og lovmessig.',
    },
    {
      question: 'Når har et aksjeselskap revisjonsplikt?',
      options: [
        'Ved driftsinntekter over 7 mill. kr, balansesum over 27 mill. kr eller mer enn 10 årsverk',
        'Alltid, uansett størrelse',
        'Aldri',
        'Bare ved underskudd',
      ],
      explanation: 'Terskelverdiene avgjør revisjonsplikten; ASA har alltid revisjonsplikt.',
    },
    {
      question: 'Hvorfor er revisors uavhengighet viktig?',
      options: [
        'For at konklusjonen skal være objektiv og troverdig for brukerne',
        'For å spare penger',
        'For å øke salget',
        'For å unngå skatt',
      ],
      explanation: 'Uavhengighet sikrer at revisor ikke tar parti med klienten, slik at vurderingen blir pålitelig.',
    },
    {
      question: 'Hva er en trussel mot uavhengigheten?',
      options: [
        'Et nært personlig vennskap mellom revisor og klientens ledelse',
        'At revisor følger loven',
        'At revisor er faglig dyktig',
        'At regnskapet er korrekt',
      ],
      explanation: 'Nære relasjoner kan skape en fortrolighetstrussel og svekke den tilsynelatende uavhengigheten.',
    },
    {
      question: 'Hvem har alltid revisjonsplikt uavhengig av størrelse?',
      options: [
        'Allmennaksjeselskaper (ASA)',
        'Alle enkeltpersonforetak',
        'Alle små AS',
        'Ingen',
      ],
      explanation: 'ASA har alltid revisjonsplikt, uavhengig av terskelverdiene som gjelder for vanlige AS.',
    },
  ],
  'regnskap-revisjon-8-2': [
    {
      question: 'Hva er finansiell revisjon?',
      options: [
        'Kontroll av om årsregnskapet gir et rettvisende bilde i samsvar med lov og standarder',
        'En markedsundersøkelse',
        'En lønnsberegning',
        'En budsjettprosess',
      ],
      explanation: 'Finansiell revisjon (regnskapsrevisjon) er den lovpålagte kontrollen av årsregnskapet.',
    },
    {
      question: 'Hva er vesentlighet (materialitet) i revisjon?',
      options: [
        'En beløpsgrense for når feil er store nok til å påvirke brukernes beslutninger',
        'Revisors timelønn',
        'Antall ansatte i bedriften',
        'Skattesatsen',
      ],
      explanation: 'Vesentlighet er grensen for hvilke feil som regnes som betydelige nok til å måtte korrigeres.',
    },
    {
      question: 'En bedrift har omsetning 50 mill. kr. Revisor setter vesentlighet til 2 %. Hva blir grensen?',
      options: ['1 000 000 kr', '500 000 kr', '100 000 kr', '2 000 000 kr'],
      explanation: 'Vesentlighetsgrense = 2 % × 50 000 000 = 1 000 000 kr.',
    },
    {
      question: 'Hva skjer med feil under vesentlighetsgrensen?',
      options: [
        'De regnes som uvesentlige, men revisor vurderer summen av flere feil',
        'De må alltid korrigeres enkeltvis',
        'De gjør regnskapet ugyldig',
        'De rapporteres til politiet',
      ],
      explanation: 'Enkeltfeil under grensen kan aksepteres, men revisor vurderer den samlede effekten av alle feil.',
    },
    {
      question: 'Hva er arbeidsvesentlighet ofte satt til?',
      options: [
        'Lavere enn den overordnede vesentlighetsgrensen, for å fange opp flere feil',
        'Høyere enn vesentlighetsgrensen',
        'Lik bedriftens omsetning',
        'Null',
      ],
      explanation: 'Arbeidsvesentlighet settes lavere (f.eks. 75 %) for å fange opp feil som samlet kan bli vesentlige.',
    },
  ],
  'regnskap-revisjon-8-3': [
    {
      question: 'Hva er intern kontroll?',
      options: [
        'En prosess som gir rimelig sikkerhet for pålitelig rapportering, effektiv drift og etterlevelse av regler',
        'Bare revisors kontroll av regnskapet',
        'En markedsføringskampanje',
        'En type lån',
      ],
      explanation: 'Intern kontroll er ledelsens ansvar og skal sikre pålitelig rapportering, god drift og regeletterlevelse.',
    },
    {
      question: 'Hvem har ansvaret for intern kontroll?',
      options: [
        'Styret, ledelsen og øvrige ansatte',
        'Bare revisor',
        'Bare Skatteetaten',
        'Bare kundene',
      ],
      explanation: 'Intern kontroll er ledelsens ansvar, ikke revisors – revisor vurderer den.',
    },
    {
      question: 'Hvorfor er arbeidsdeling et viktig internkontrolltiltak?',
      options: [
        'Det reduserer risikoen for feil og misligheter når flere personer deler oppgavene',
        'Det øker prisene',
        'Det gjør regnskapet unødvendig',
        'Det fjerner behovet for bilag',
      ],
      explanation: 'Når bestilling, varemottak, fakturabehandling og betaling deles, blir det vanskeligere å skjule feil eller svindel.',
    },
    {
      question: 'Hvilke tre hovedmål skal intern kontroll bidra til?',
      options: [
        'Pålitelig rapportering, effektiv drift og etterlevelse av lover/regler',
        'Høyest mulig pris, salg og overskudd',
        'Flest mulig ansatte, kunder og produkter',
        'Lavest mulig skatt, lønn og husleie',
      ],
      explanation: 'Internkontrollens tre mål er pålitelig finansiell rapportering, effektiv drift og regeletterlevelse.',
    },
    {
      question: 'Hva er et eksempel på god arbeidsdeling i innkjøpsprosessen?',
      options: [
        'Én bestiller, en annen mottar varer, og en tredje godkjenner faktura',
        'Én person gjør alt alene',
        'Ingen kontrollerer fakturaene',
        'Betaling skjer uten godkjenning',
      ],
      explanation: 'Å fordele bestilling, varemottak og fakturagodkjenning på ulike personer styrker kontrollen.',
    },
  ],
  'regnskap-revisjon-8-4': [
    {
      question: 'Hva er en revisjonsberetning?',
      options: [
        'Revisors formelle rapport om resultatet av revisjonen',
        'En faktura til kunden',
        'En MVA-melding',
        'En budsjettoversikt',
      ],
      explanation: 'Revisjonsberetningen avgis til generalforsamlingen og inneholder revisors konklusjon om regnskapet.',
    },
    {
      question: 'Hva uttrykker en normalberetning (umodifisert konklusjon)?',
      options: [
        'At regnskapet gir et rettvisende bilde i samsvar med lov og god regnskapsskikk',
        'At regnskapet er fullt av feil',
        'At bedriften går konkurs',
        'At revisor trekker seg',
      ],
      explanation: 'En normalberetning bekrefter at regnskapet gir et rettvisende bilde uten vesentlige feil.',
    },
    {
      question: 'Hva slags konklusjon gis ved en vesentlig, men ikke gjennomgripende, feil?',
      options: [
        'Konklusjon med forbehold',
        'Normalberetning uten merknad',
        'Negativ konklusjon',
        'Ingen beretning',
      ],
      explanation: 'En vesentlig, men avgrenset feil gir en konklusjon med forbehold («med unntak av …»).',
    },
    {
      question: 'Hvem avgis revisjonsberetningen til i et aksjeselskap?',
      options: [
        'Generalforsamlingen',
        'Bare daglig leder',
        'Kundene',
        'Leverandørene',
      ],
      explanation: 'Revisjonsberetningen avgis til generalforsamlingen og er offentlig tilgjengelig.',
    },
    {
      question: 'Hvilken standardserie regulerer revisjonsberetningens struktur?',
      options: [
        'ISA 700-serien',
        'NS 4102',
        'IFRS 16',
        'NRS 19',
      ],
      explanation: 'Revisjonsberetningen følger en standardisert struktur fastsatt i ISA 700-serien.',
    },
  ],
  'regnskap-revisjon-8-5': [
    {
      question: 'Hvilke fem grunnleggende etiske prinsipper skal revisorer følge (IESBA)?',
      options: [
        'Integritet, objektivitet, faglig kompetanse, konfidensialitet og profesjonell atferd',
        'Salg, vekst, profitt, makt og status',
        'Debet, kredit, balanse, resultat og note',
        'Pris, kvalitet, levering, service og garanti',
      ],
      explanation: 'IESBAs fem prinsipper er integritet, objektivitet, faglig kompetanse, konfidensialitet og profesjonell atferd.',
    },
    {
      question: 'Hva innebærer prinsippet om integritet for en revisor?',
      options: [
        'Å være ærlig og rettferdig i alle profesjonelle relasjoner',
        'Å skjule feil for klienten',
        'Å maksimere egen inntekt',
        'Å alltid være enig med ledelsen',
      ],
      explanation: 'Integritet betyr ærlighet og rettferdighet, og at revisor ikke kan se bort fra oppdagede feil.',
    },
    {
      question: 'En klient ber revisor «se bort fra» private utgifter ført som bedriftskostnad. Hva bør revisor gjøre?',
      options: [
        'Ikke se bort fra feilen; integritet og objektivitet krever at den håndteres',
        'Akseptere det for å beholde klienten',
        'Øke sitt eget honorar',
        'Skjule forholdet',
      ],
      explanation: 'Revisor må håndtere feilen; å se bort fra den ville bryte med integritet og objektivitet.',
    },
    {
      question: 'Hva er en egeninteressetrussel mot uavhengigheten?',
      options: [
        'At revisor har en personlig fordel, som å beholde en lukrativ klient, som kan påvirke vurderingen',
        'At revisor følger standardene',
        'At regnskapet er korrekt',
        'At revisor er faglig oppdatert',
      ],
      explanation: 'Egeninteresse, som frykt for å miste klienten, kan true objektiviteten og uavhengigheten.',
    },
    {
      question: 'Hva innebærer prinsippet om konfidensialitet?',
      options: [
        'Å ikke avsløre fortrolig informasjon om klienten uten gyldig grunn',
        'Å dele all informasjon offentlig',
        'Å selge klientopplysninger',
        'Å ignorere taushetsplikten',
      ],
      explanation: 'Konfidensialitet krever at revisor verner om fortrolig klientinformasjon.',
    },
  ],

};

export default quizData_regnskap_revisjon;
