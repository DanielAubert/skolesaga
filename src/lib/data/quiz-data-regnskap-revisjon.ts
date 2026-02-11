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


};

export default quizData_regnskap_revisjon;
