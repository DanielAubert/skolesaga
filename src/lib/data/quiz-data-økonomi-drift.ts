import type { QuizQuestion } from './quiz-data';

const quizData_okonomi_drift: Record<string, QuizQuestion[]> = {
  'økonomi-drift-1': [
  {
    question: 'Hva er dekningsbidrag?',
    options: ['Salgsinntekt minus variable kostnader', 'Salgsinntekt minus alle kostnader', 'Salgsinntekt minus faste kostnader', 'Overskudd etter skatt'],
    explanation: 'Dekningsbidrag = Salgsinntekt - Variable kostnader. Det viser bidraget til a dekke faste kostnader og fortjeneste.',
  },
  {
    question: 'Hvilken kostnad er typisk fast?',
    options: ['Husleie', 'Ravarer', 'Emballasje', 'Provisjon til selgere'],
    explanation: 'Husleie er en fast kostnad som paløser uavhengig av produksjonsvolumet.',
  },
  {
    question: 'Hva er nullpunktet (break-even)?',
    options: ['Volumet der bedriften verken gårmed overskudd eller underskudd', 'Der prisen er lavest', 'Der salget er høyest', 'Der kostnadene er lavest'],
    explanation: 'Nullpunktet er det produksjons- og salgsvolumet der bedriften verken gårmed overskudd eller underskudd - total dekningsbidrag = faste kostnader.',
  },
  {
    question: 'Hvordan beregnes dekningsgrad?',
    options: ['(Dekningsbidrag / Salgsinntekt) x 100%', '(Faste kostnader / Salgsinntekt) x 100%', '(Variable kostnader / Salgsinntekt) x 100%', '(Overskudd / Salgsinntekt) x 100%'],
    explanation: 'Dekningsgrad = (Dekningsbidrag / Salgsinntekt) x 100%. Den viser hvor stor del av hver krone som dekker faste kostnader og fortjeneste.',
  },
  {
    question: 'Hva er sikkerhetsmargin?',
    options: ['Hvor mye salget kan synke for bedriften gårmed underskudd', 'Minimum fortjeneste', 'Maksimal produksjonskapasitet', 'Bufferlageret'],
    explanation: 'Sikkerhetsmarginen viser hvor mye salget kan synke for bedriften gårmed underskudd, altsåforskjellen mellom faktisk salg og nullpunkt.',
  },
],


  'økonomi-drift-2': [
  {
    question: 'Hva er hovedforskjellen mellom selvkost og bidragskalkulasjon?',
    options: ['Selvkost inkluderer både variable og faste kostnader', 'Selvkost inkluderer bare variable kostnader', 'Bidragskalkulasjon inkluderer faste kostnader', 'Det er ingen forskjell'],
    explanation: 'Selvkostkalkulasjon fordeler alle kostnader (inkl. faste) påproduktene, mens bidragskalkulasjon kun inkluderer variable kostnader.',
  },
  {
    question: 'Hva er tilvirkningskost?',
    options: ['Direkte kostnader pluss indirekte tilvirkningskostnader', 'Kun direkte materialer', 'Alle kostnader inkludert fortjeneste', 'Kun lønnskostnader'],
    explanation: 'Tilvirkningskost = Direkte materialer + Direkte lønn + Indirekte tilvirkningskostnader.',
  },
  {
    question: 'Hva er minstepris (smertegrense)?',
    options: ['Variable kostnader - under denne prisen taper man påhver enhet', 'Selvkost', 'Tilvirkningskost', 'Faste kostnader'],
    explanation: 'Minstepris = Variable kostnader. Under denne prisen taper bedriften penger påhver enhet som selges.',
  },
  {
    question: 'Hva er skummingsprising?',
    options: ['Høy pris ved lansering som senkes over tid', 'Lav pris for a ta markedsandeler', 'Pris basert påkostnader', 'Pris basert påkonkurrentene'],
    explanation: 'Skumming innebærer høy pris ved lansering for a maksimere inntektene fra de mest betalingsvillige kundene, for prisen senkes gradvis.',
  },
  {
    question: 'Hva er tilleggssatser i kalkulasjon?',
    options: ['Prosentsatser for a fordele indirekte kostnader påprodukter', 'Ekstra rabatter til kunder', 'Moms påvarer', 'Fortjenestemargin'],
    explanation: 'Tilleggssatser brukes for a fordele indirekte kostnader påproduktene, ofte som prosent av direkte lønn eller maskintimer.',
  },
],


  'økonomi-drift-3': [
  {
    question: 'Hva er en flaskehals i produksjonen?',
    options: ['Ressursen som begrenser total kapasitet', 'Den raskeste prosessen', 'Den billigste maskinen', 'Lageret for ferdigvarer'],
    explanation: 'En flaskehals er den ressursen eller prosessen som begrenser gjennomstrømningen i produksjonen.',
  },
  {
    question: 'Hva kjennetegner ordreproduksjon (Make-to-Order)?',
    options: ['Produserer først etter at kundeordre er mottatt', 'Produserer til lager basert påprognoser', 'Kun standardprodukter', 'Kort leveringstid'],
    explanation: 'Ordreproduksjon starter produksjon først etter at en kundeordre er mottatt, noe som gir lengre leveringstid men ingen ferdigvarelager.',
  },
  {
    question: 'Hva er takttid?',
    options: ['Tiden som er tilgjengelig per enhet for a mote ettersporselen', 'Total produksjonstid', 'Tiden for å sette opp en maskin', 'Ventetiden mellom operasjoner'],
    explanation: 'Takttid = Tilgjengelig produksjonstid / Ettersporsel. Den viser hvor ofte man måfullføre en enhet for a mote ettersporselen.',
  },
  {
    question: 'Hva er hovedmalet med Just-in-Time (JIT)?',
    options: ['Eliminere slosing og produsere riktig mengde til riktig tid', 'Maksimere lagerbeholdningen', 'Produsere så mye som mulig', 'Ha lange serier'],
    explanation: 'JIT fokuserer påa eliminere alle former for slosing (lager, ventetid, overproduksjon) ved a produsere akkurat det som trengs, nårdet trengs.',
  },
  {
    question: 'Hvilken produksjonsmetode passer best for unike, komplekse produkter?',
    options: ['Prosjektproduksjon', 'Lagerproduksjon', 'Kontinuerlig produksjon', 'Serieproduksjon'],
    explanation: 'Prosjektproduksjon passer for unike, komplekse produkter med lang gjennomløpstid, som byggeprosjekter eller skipsproduksjon.',
  },
],


  'økonomi-drift-4': [
  {
    question: 'Hva er logistikk?',
    options: ['Planlegging og kontroll av flyt av varer, tjenester og informasjon', 'Bare transport av varer', 'Kun lagerstyring', 'Bare innkjøp'],
    explanation: 'Logistikk er planlegging, gjennomforing og kontroll av effektiv flyt og lagring av varer, tjenester og informasjon fra opprinnelsespunkt til forbrukspunkt.',
  },
  {
    question: 'Hva er bestillingspunkt?',
    options: ['Lagernivået der ny bestilling måsendes', 'Maksimalt lagernivå', 'Minimum lagernivå', 'Okonomisk ordrekvantum'],
    explanation: 'Bestillingspunkt er det lagernivået der ny bestilling måsendes for å unngå å gå tom for varen fårleveransen ankommer.',
  },
  {
    question: 'Hva er EOQ (Økonomisk ordrekvantum)?',
    options: ['Bestillingsmengden som minimerer totale lager- og bestillingskostnader', 'Maksimal bestillingsmengde', 'Minimum bestillingsmengde', 'Gjennomsnittlig lagernivå'],
    explanation: 'EOQ er den bestillingsmengden som minimerer summen av bestillingskostnader og lagerkostnader.',
  },
  {
    question: 'Hva er sikkerhetslager?',
    options: ['En ekstra buffer for a beskytte mot usikkerhet', 'Utgatt varelager', 'Defekte varer', 'Varer som skal returneres'],
    explanation: 'Sikkerhetslager er en ekstra buffer for a beskytte mot usikkerhet i ettersporsel eller leveringstid.',
  },
  {
    question: 'Hvilke faktorer vurderes typisk ved valg av leverandor?',
    options: ['Pris, kvalitet, leveringsevne og service', 'Kun pris', 'Bare kvalitet', 'Kun leveringstid'],
    explanation: 'Ved valg av leverandor vurderes typisk pris, kvalitet, leveringsevne, service og økonomisk soliditet.',
  },
],


  'økonomi-drift-5': [
  {
    question: 'Hva er kvalitet i en bedriftssammenheng?',
    options: ['I hvilken grad produktet tilfredsstiller kundens krav og forventninger', 'At produktet er dyrest mulig', 'At produktet har flest funksjoner', 'At produktet er mest avansert'],
    explanation: 'Kvalitet defineres som i hvilken grad et produkt eller en tjeneste tilfredsstiller kundens krav og forventninger.',
  },
  {
    question: 'Hva er formalet med et kvalitetssystem?',
    options: ['Sikre jevn kvalitet gjennom dokumenterte prosedyrer og rutiner', 'Bare a tilfredsstille myndighetene', 'A redusere antall ansatte', 'A øke prisene'],
    explanation: 'Et kvalitetssystem sikrer jevn kvalitet gjennom dokumenterte prosedyrer, rutiner og kontinuerlig forbedring.',
  },
  {
    question: 'Hva er ISO 9001?',
    options: ['En internasjonal standard for kvalitetsstyring', 'En norsk lov om kvalitet', 'Et regnskapsprogram', 'En type maskin'],
    explanation: 'ISO 9001 er en internasjonal standard for kvalitetsstyringssystemer som definerer krav til kvalitetsledelse.',
  },
  {
    question: 'Hva er kontinuerlig forbedring (Kaizen)?',
    options: ['Sma, stadige forbedringer over tid', 'Store, radikale endringer', 'A beholde alt som det er', 'A bare fokusere påkostnadskutt'],
    explanation: 'Kaizen er en japansk filosofi som vektlegger sma, stadige forbedringer over tid involvering av alle ansatte.',
  },
  {
    question: 'Hva er feilkostnader?',
    options: ['Kostnader som oppstar nårnoe ikke fungerer som det skal', 'Planlagte vedlikeholdskostnader', 'Investeringer i kvalitet', 'Lonnskostnader'],
    explanation: 'Feilkostnader er kostnader som oppstar nårnoe ikke fungerer som det skal, inkludert reklamasjoner, omarbeid og kassasjon.',
  },
],


  'økonomi-drift-6': [
  {
    question: 'Hva kjennetegner et prosjekt?',
    options: ['Unikt, tidsbegrenset tiltak med definert mal', 'Gjentagende rutinearbeid', 'Kontinuerlig produksjon', 'Daglig drift'],
    explanation: 'Et prosjekt er et unikt, tidsbegrenset tiltak med definert mal og ressurser, i motsetning til gjentagende rutinearbeid.',
  },
  {
    question: 'Hva er prosjektets "jerntrinkant"?',
    options: ['Balansen mellom tid, kostnad og kvalitet/omfang', 'De tre viktigste prosjektmedlemmene', 'De tre første fasene i prosjektet', 'Tre typer risiko'],
    explanation: 'Prosjektets jerntrekant viser balansen mellom tid, kostnad og kvalitet/omfang - endringer i en faktor påvirker de andre.',
  },
  {
    question: 'Hva er et Gantt-diagram?',
    options: ['Et diagram som viser aktiviteter og tidsplan visuelt', 'Et organisasjonskart', 'Et økonomisk regnskap', 'En risikoanalyse'],
    explanation: 'Et Gantt-diagram er et visuelt verkty som viser prosjektets aktiviteter og tidsplan langs en tidslinje.',
  },
  {
    question: 'Hva er kritisk vei i prosjektplanlegging?',
    options: ['Den lengste kjeden av avhengige aktiviteter som bestemmer total prosjekttid', 'Den korteste veien gjennom prosjektet', 'Den dyreste delen av prosjektet', 'Den minst viktige aktiviteten'],
    explanation: 'Kritisk vei er den lengste kjeden av avhengige aktiviteter som bestemmer prosjektets totale varighet.',
  },
  {
    question: 'Hva er milpaler i prosjekter?',
    options: ['Viktige kontrollpunkter eller leveranser', 'Daglige oppgaver', 'Pauserom', 'Kostnadsbudsjett'],
    explanation: 'Milpaler er viktige kontrollpunkter eller leveranser i prosjektet som markerer fullføring av sentrale faser.',
  },
],


  'økonomi-drift-7': [
  {
    question: 'Hva er personaladministrasjonens hovedoppgaver?',
    options: ['Rekruttering, utvikling, lønn og arbeidsmiljø', 'Bare lønnsutbetalinger', 'Kun ansettelser', 'Bare oppsigelser'],
    explanation: 'Personaladministrasjon omfatter rekruttering, kompetanseutvikling, lønn og godtgjørelse, arbeidsmiljø og personaloppfolging.',
  },
  {
    question: 'Hva er kompetanseutvikling?',
    options: ['Systematisk arbeid for a oke de ansattes kunnskap og ferdigheter', 'Bare formell utdanning', 'Kun internopplæring', 'A ansette nye folk'],
    explanation: 'Kompetanseutvikling er systematisk arbeid for a oke de ansattes kunnskap og ferdigheter gjennom kurs, opplæring og praksis.',
  },
  {
    question: 'Hva er medarbeidersamtale?',
    options: ['Strukturert samtale mellom leder og medarbeider om arbeid og utvikling', 'Tilfeldig prat i gangen', 'Lønnsforhandling', 'Oppsigelsessamtale'],
    explanation: 'Medarbeidersamtale er en strukturert samtale mellom leder og medarbeider om arbeidsoppgaver, mal, utvikling og trivsel.',
  },
  {
    question: 'Hva regulærer arbeidsmiljøloven nårdet gjelder arbeidstid?',
    options: ['Maksimal arbeidstid, overtid, pauser og hviletid', 'Bare lønn', 'Kun ferie', 'Bare oppsigelsesfrister'],
    explanation: 'Arbeidsmiljøloven regulærer arbeidstid inkludert maksimal arbeidstid, overtid, pauser, hviletid mellom arbeidsøkter og nattarbeid.',
  },
  {
    question: 'Hva er formalet med rekruttering?',
    options: ['Skaffe riktig kompetanse til riktig stilling', 'Ansette flest mulig', 'Spare penger pålønn', 'Fylle alle ledige stillinger raskt'],
    explanation: 'Formalet med rekruttering er a skaffe riktig kompetanse til riktig stilling til riktig tid for virksomheten.',
  },
],


  'økonomi-drift-8': [
  {
    question: 'Hva er strategi i en bedriftssammenheng?',
    options: ['Langsiktig plan for a oppna virksomhetens mal', 'Daglige rutiner', 'Kvartalsbudsjettet', 'Arsregnskapet'],
    explanation: 'Strategi er virksomhetens langsiktige plan for a oppna sine mal og skape konkurransefortrinn.',
  },
  {
    question: 'Hva er en visjon?',
    options: ['Et bilde av ønsket fremtidig tilstand for virksomheten', 'Arsbudsjettet', 'Denne ukens oppgaver', 'Organisasjonskartet'],
    explanation: 'En visjon er et inspirerende bilde av den onskede fremtidige tilstanden for virksomheten - hva den streber mot å bli.',
  },
  {
    question: 'Hva er Porters fem krefter?',
    options: ['Et rammeverk for a analysere konkurransesituasjonen i en bransje', 'Fem typer lederstiler', 'Fem økonomiske nøkkeltall', 'Fem typer kunder'],
    explanation: 'Porters fem krefter analyserer konkurransesituasjonen: trusler fra nye aktorer, leverandormakt, kundemakt, substitutter og rivalisering.',
  },
  {
    question: 'Hva er forretningside?',
    options: ['Hva virksomheten tilbyr til hvem og hvordan', 'Bare produktet', 'Kun malgruppa', 'Bare prisen'],
    explanation: 'Forretningside beskriver hva virksomheten tilbyr (produkter/tjenester), til hvem (malgruppe) og hvordan (leveringsmåte).',
  },
  {
    question: 'Hva er et konkurransefortrinn?',
    options: ['Noe som gjør at kunder velger deg fremfor konkurrenter', 'Den laveste prisen', 'Flest ansatte', 'Storst kontor'],
    explanation: 'Et konkurransefortrinn er noe som gjør at kunder velger din virksomhet fremfor konkurrenter - det kan være pris, kvalitet, service eller innovasjon.',
  },
],

  'okonomi-drift-1-1': [
    {
      question: 'Hva kjennetegner faste kostnader?',
      options: [
        'De endrer seg ikke med produksjonsvolumet på kort sikt',
        'De øker proporsjonalt med antall produserte enheter',
        'De forsvinner helt når produksjonen stopper',
        'De er alltid lavere enn de variable kostnadene',
      ],
      explanation: 'Faste kostnader (kapasitetskostnader) som husleie og forsikring påløper uavhengig av volumet på kort sikt.',
    },
    {
      question: 'Hvilken kostnad er typisk variabel?',
      options: [
        'Råvarer og materialer',
        'Husleie',
        'Forsikring',
        'Avskrivninger på maskiner',
      ],
      explanation: 'Variable kostnader endrer seg med volumet. Råvarer øker når produksjonen øker; de tre andre er faste.',
    },
    {
      question: 'Møbelfabrikken har FK = 140 000 kr og VK = 1 050 kr per stol. Hva blir totale kostnader ved 200 stoler?',
      options: [
        '350 000 kr',
        '210 000 kr',
        '290 000 kr',
        '140 000 kr',
      ],
      explanation: 'VK totalt = 200 × 1 050 = 210 000 kr. Totalkostnad = FK + VK = 140 000 + 210 000 = 350 000 kr.',
    },
    {
      question: 'Hva skiller direkte fra indirekte kostnader?',
      options: [
        'Direkte kostnader kan henføres til et bestemt produkt; indirekte er felles for flere',
        'Direkte kostnader er alltid faste',
        'Indirekte kostnader er alltid variable',
        'Det er ingen reell forskjell',
      ],
      explanation: 'Direkte kostnader (direkte materialer, direkte lønn) kan knyttes til ett produkt. Indirekte kostnader er felleskostnader som må fordeles.',
    },
    {
      question: 'FK = 600 000 kr og VEK = 150 kr. Hva er total enhetskostnad ved 6 000 enheter?',
      options: [
        '250 kr',
        '450 kr',
        '200 kr',
        '150 kr',
      ],
      explanation: 'FEK = 600 000 / 6 000 = 100 kr. TEK = VEK + FEK = 150 + 100 = 250 kr per enhet.',
    },
  ],
  'okonomi-drift-1-2': [
    {
      question: 'Hva er selvkost?',
      options: [
        'Summen av alle kostnader ved produksjon og salg av en enhet, inkludert fordelte indirekte kostnader',
        'Bare de direkte materialkostnadene',
        'Salgsprisen uten merverdiavgift',
        'Bare de variable kostnadene',
      ],
      explanation: 'Selvkost = direkte materialer + direkte lønn + en forholdsmessig andel av de indirekte kostnadene.',
    },
    {
      question: 'Hvordan beregnes materialadministrasjonstillegget (MAT)?',
      options: [
        'Indirekte materialkostnader / Direkte materialer × 100 %',
        'Direkte materialer / Indirekte materialkostnader × 100 %',
        'Indirekte tilvirkningskostnader / Direkte lønn × 100 %',
        'Selvkost / Salgspris × 100 %',
      ],
      explanation: 'MAT = indirekte materialkostnader delt på direkte materialer, uttrykt i prosent.',
    },
    {
      question: 'Direkte materialer 2 000 000 kr og indirekte materialkostnader 200 000 kr. Hva er MAT?',
      options: [
        '10 %',
        '20 %',
        '50 %',
        '15 %',
      ],
      explanation: 'MAT = 200 000 / 2 000 000 × 100 % = 10 %.',
    },
    {
      question: 'Med DM 500 kr, MAT 10 %, DL 300 kr og TT 50 %, hva blir tilvirkningskosten?',
      options: [
        '1 000 kr',
        '950 kr',
        '1 150 kr',
        '800 kr',
      ],
      explanation: 'Materialkost = 500 + 50 = 550. Indirekte tilvirkning = 50 % × 300 = 150. Tilvirkningskost = 550 + 300 + 150 = 1 000 kr.',
    },
    {
      question: 'Hva er rekkefølgen i en selvkostkalkyle?',
      options: [
        'Materialkost → tilvirkningskost → selvkost → salgspris',
        'Selvkost → tilvirkningskost → salgspris → materialkost',
        'Salgspris → selvkost → materialkost → tilvirkningskost',
        'Tilvirkningskost → salgspris → materialkost → selvkost',
      ],
      explanation: 'Man bygger opp fra direkte materialer til materialkost, deretter tilvirkningskost, så selvkost, og til slutt salgspris med fortjeneste.',
    },
  ],
  'okonomi-drift-1-3': [
    {
      question: 'Hvordan beregnes dekningsbidraget per enhet?',
      options: [
        'Salgspris − Variable kostnader per enhet',
        'Salgspris − Faste kostnader per enhet',
        'Salgspris − Alle kostnader',
        'Variable kostnader − Faste kostnader',
      ],
      explanation: 'Dekningsbidrag (DB) = salgspris minus variable kostnader. Det bidrar til å dekke faste kostnader og fortjeneste.',
    },
    {
      question: 'Salgspris 500 kr, variable kostnader 300 kr per enhet, FK 400 000 kr, 3 000 enheter solgt. Hva er resultatet?',
      options: [
        '200 000 kr',
        '600 000 kr',
        '100 000 kr',
        '1 500 000 kr',
      ],
      explanation: 'DB = 200 kr. TDB = 3 000 × 200 = 600 000 kr. Resultat = TDB − FK = 600 000 − 400 000 = 200 000 kr.',
    },
    {
      question: 'Produkt A: pris 800, VK 480. Hva er dekningsgraden?',
      options: [
        '40 %',
        '25 %',
        '60 %',
        '48 %',
      ],
      explanation: 'DB = 800 − 480 = 320. DG = 320 / 800 × 100 % = 40 %.',
    },
    {
      question: 'FK = 320 000 kr og DB per enhet = 160 kr. Hva er nullpunktet i antall enheter?',
      options: [
        '2 000 enheter',
        '5 000 enheter',
        '1 280 enheter',
        '800 enheter',
      ],
      explanation: 'Nullpunkt = FK / DB = 320 000 / 160 = 2 000 enheter.',
    },
    {
      question: 'Med dekningsgrad 40 % og FK 320 000 kr, hva er nullpunktet i salgskroner?',
      options: [
        '800 000 kr',
        '128 000 kr',
        '320 000 kr',
        '1 280 000 kr',
      ],
      explanation: 'Nullpunkt i kr = FK / DG = 320 000 / 0,40 = 800 000 kr.',
    },
  ],
  'okonomi-drift-1-4': [
    {
      question: 'Hva kjennetegner kostnadsbasert prissetting (cost-plus)?',
      options: [
        'Man beregner kostnaden og legger til en ønsket fortjenestemargin',
        'Man setter pris lik konkurrentenes',
        'Man tar utgangspunkt i verdien for kunden',
        'Man setter alltid lavest mulig pris',
      ],
      explanation: 'Kostnadsbasert prissetting tar utgangspunkt i selvkost og legger til en fortjenesteprosent.',
    },
    {
      question: 'Selvkost 800 kr og ønsket fortjeneste 25 %. Hva blir salgsprisen ekskl. mva.?',
      options: [
        '1 000 kr',
        '1 025 kr',
        '825 kr',
        '1 250 kr',
      ],
      explanation: 'Salgspris = 800 × 1,25 = 1 000 kr ekskl. mva.',
    },
    {
      question: 'Salgspris ekskl. mva. er 1 000 kr. Hva blir prisen inkl. 25 % mva.?',
      options: [
        '1 250 kr',
        '1 025 kr',
        '1 200 kr',
        '750 kr',
      ],
      explanation: 'Pris inkl. mva. = 1 000 × 1,25 = 1 250 kr.',
    },
    {
      question: 'Hva er verdibasert prissetting?',
      options: [
        'Prisen settes ut fra verdien produktet skaper for kunden',
        'Prisen settes ut fra produksjonskostnaden alene',
        'Prisen settes alltid lik gjennomsnittet i markedet',
        'Prisen settes for å dekke kun de variable kostnadene',
      ],
      explanation: 'Verdibasert prissetting tar utgangspunkt i kundens opplevde verdi, ikke i kostnadene.',
    },
    {
      question: 'En programvare sparer kunden 500 000 kr/år. Hva blir verdibasert pris ved 20 % av besparelsen?',
      options: [
        '100 000 kr',
        '50 000 kr',
        '400 kr',
        '500 000 kr',
      ],
      explanation: 'Verdibasert pris = 20 % × 500 000 = 100 000 kr per år.',
    },
  ],
  'okonomi-drift-1-5': [
    {
      question: 'Hvordan beregnes resultatgraden?',
      options: [
        'Driftsresultat / Driftsinntekter × 100 %',
        'Driftsinntekter / Driftsresultat × 100 %',
        'Årsresultat / Egenkapital × 100 %',
        'Driftsresultat / Totalkapital × 100 %',
      ],
      explanation: 'Resultatgrad = driftsresultat delt på driftsinntekter, og viser hvor mye av omsetningen som blir driftsresultat.',
    },
    {
      question: 'Driftsinntekter 8 000 000 kr og driftskostnader 7 040 000 kr. Hva er resultatgraden?',
      options: [
        '12 %',
        '8 %',
        '88 %',
        '10 %',
      ],
      explanation: 'Driftsresultat = 8 000 000 − 7 040 000 = 960 000. Resultatgrad = 960 000 / 8 000 000 × 100 % = 12 %.',
    },
    {
      question: 'Hva måler totalkapitalrentabiliteten (TKR)?',
      options: [
        'Avkastningen på all kapital investert i bedriften, uavhengig av finansiering',
        'Avkastningen på bare eiernes egenkapital',
        'Andelen egenkapital av totalkapitalen',
        'Bedriftens likviditet på kort sikt',
      ],
      explanation: 'TKR = (driftsresultat + finansinntekter) / gjennomsnittlig totalkapital og viser avkastningen på all kapital.',
    },
    {
      question: 'Hvilket nøkkeltall er mest relevant for eierne?',
      options: [
        'Egenkapitalrentabilitet (EKR)',
        'Likviditetsgrad 1',
        'Bestillingspunkt',
        'Kapasitetsutnyttelse',
      ],
      explanation: 'EKR viser avkastningen på eiernes investerte kapital og er derfor mest relevant for dem.',
    },
    {
      question: 'Ordinært resultat etter skatt 640 000 kr og gjennomsnittlig egenkapital 2 200 000 kr. Hva er EKR (avrundet)?',
      options: [
        'Ca. 29 %',
        'Ca. 12 %',
        'Ca. 19 %',
        'Ca. 64 %',
      ],
      explanation: 'EKR = 640 000 / 2 200 000 × 100 % ≈ 29,1 %.',
    },
  ],
  'okonomi-drift-2-1': [
    {
      question: 'Hva er hovedforskjellen mellom resultatbudsjett og likviditetsbudsjett?',
      options: [
        'Likviditetsbudsjettet fokuserer på når pengene faktisk inn- og utbetales',
        'Resultatbudsjettet ser bort fra inntekter',
        'Likviditetsbudsjettet inneholder bare avskrivninger',
        'Det er ingen forskjell',
      ],
      explanation: 'Likviditetsbudsjettet handler om betalingstidspunkter, mens resultatbudsjettet følger opptjenings- og sammenstillingsprinsippet.',
    },
    {
      question: 'Kafeen har salgsinntekter 2 400 000 kr og varekostnad 35 %. Hva er varekostnaden?',
      options: [
        '840 000 kr',
        '1 560 000 kr',
        '700 000 kr',
        '960 000 kr',
      ],
      explanation: 'Varekostnad = 2 400 000 × 0,35 = 840 000 kr.',
    },
    {
      question: 'Med salgsinntekter 2 400 000, varekostnad 840 000, lønn 900 000, husleie 240 000, andre kostn. 180 000 og avskrivninger 60 000 – hva er driftsresultatet?',
      options: [
        '180 000 kr',
        '1 560 000 kr',
        '240 000 kr',
        '120 000 kr',
      ],
      explanation: 'Driftsresultat = 2 400 000 − 840 000 − 900 000 − 240 000 − 180 000 − 60 000 = 180 000 kr.',
    },
    {
      question: 'Hvorfor inngår avskrivninger i resultatbudsjettet, men ikke i likviditetsbudsjettet?',
      options: [
        'Avskrivninger er en kostnad uten en tilhørende utbetaling',
        'Avskrivninger er en inntekt',
        'Avskrivninger betales kontant hver måned',
        'Avskrivninger er det samme som varekostnad',
      ],
      explanation: 'Avskrivninger fordeler en tidligere investering som kostnad, men medfører ingen løpende utbetaling, derfor er de ikke med i likviditetsbudsjettet.',
    },
    {
      question: 'Hva er første steg i budsjettprosessen?',
      options: [
        'Forberedelse: samle inn historiske data og fastsette forutsetninger',
        'Oppfølging av avvik',
        'Vedtak i styret',
        'Utbetaling av utbytte',
      ],
      explanation: 'Budsjettprosessen starter med forberedelse, der man samler data og fastsetter forutsetninger før delbudsjettene lages.',
    },
  ],
  'okonomi-drift-2-2': [
    {
      question: 'Hvordan defineres et avvik i avviksanalyse?',
      options: [
        'Faktisk verdi − Budsjettert verdi',
        'Budsjettert verdi − Faktisk verdi',
        'Faktisk verdi / Budsjettert verdi',
        'Budsjettert verdi × Faktisk verdi',
      ],
      explanation: 'Avvik = faktisk verdi minus budsjettert verdi.',
    },
    {
      question: 'Budsjett 5 000 kg à 8 kr, faktisk 5 400 kg à 8,50 kr. Hva er prisavviket?',
      options: [
        '2 700 kr ugunstig',
        '3 200 kr ugunstig',
        '5 900 kr ugunstig',
        '2 000 kr gunstig',
      ],
      explanation: 'Prisavvik = (8,50 − 8,00) × faktisk mengde = 0,50 × 5 400 = 2 700 kr (ugunstig).',
    },
    {
      question: 'Med samme tall: hva er mengdeavviket?',
      options: [
        '3 200 kr ugunstig',
        '2 700 kr ugunstig',
        '400 kr ugunstig',
        '5 900 kr gunstig',
      ],
      explanation: 'Mengdeavvik = (5 400 − 5 000) × budsjettpris 8 = 400 × 8 = 3 200 kr (ugunstig).',
    },
    {
      question: 'Hva blir det totale avviket for melforbruket?',
      options: [
        '5 900 kr ugunstig',
        '500 kr gunstig',
        '3 200 kr gunstig',
        '2 700 kr gunstig',
      ],
      explanation: 'Totalt avvik = pris- + mengdeavvik = 2 700 + 3 200 = 5 900 kr ugunstig (45 900 − 40 000).',
    },
    {
      question: 'At faktiske salgsinntekter er 520 000 kr mot budsjettert 500 000 kr gir et avvik som er:',
      options: [
        'Gunstig (+20 000 kr)',
        'Ugunstig (−20 000 kr)',
        'Null',
        'Ugunstig (+20 000 kr)',
      ],
      explanation: 'Høyere inntekt enn budsjettert er et gunstig avvik på +20 000 kr.',
    },
  ],
  'okonomi-drift-2-3': [
    {
      question: 'Hva er Balanced Scorecard?',
      options: [
        'Et styringsverktøy som måler prestasjoner fra fire perspektiver',
        'Et regnskapsskjema for balansen',
        'En metode for å beregne mva.',
        'Et lønnssystem for ansatte',
      ],
      explanation: 'Balansert målstyring måler virksomheten ut fra finansielt, kunde-, interne prosess- og lærings-/vekstperspektiv.',
    },
    {
      question: 'Hvilket av disse er ett av de fire BSC-perspektivene?',
      options: [
        'Kundeperspektivet',
        'Skatteperspektivet',
        'Konkurrentperspektivet',
        'Eierskatteperspektivet',
      ],
      explanation: 'De fire perspektivene er finansielt, kunde, interne prosesser og læring/vekst.',
    },
    {
      question: 'Hva svarer det finansielle perspektivet i BSC på?',
      options: [
        'Hvordan ser vi ut for eierne?',
        'Hvordan oppfatter kundene oss?',
        'Hva må vi bli gode på internt?',
        'Hvordan kan vi fortsette å forbedre oss?',
      ],
      explanation: 'Det finansielle perspektivet handler om eiernes syn: omsetning, resultat, avkastning og kontantstrøm.',
    },
    {
      question: 'Hva er en KPI?',
      options: [
        'En nøkkelindikator som måler i hvilken grad et mål nås',
        'En type lån',
        'En regnskapskonto',
        'En lovpålagt rapport',
      ],
      explanation: 'KPI (Key Performance Indicator) er en sentral måleindikator knyttet til et mål.',
    },
    {
      question: 'Hvorfor kalles styringsverktøyet «balansert»?',
      options: [
        'Det balanserer finansielle og ikke-finansielle mål på tvers av flere perspektiver',
        'Det balanserer debet og kredit i regnskapet',
        'Det balanserer inntekter og kostnader til null',
        'Det fordeler overskuddet likt mellom eierne',
      ],
      explanation: 'Balansen ligger i å se flere perspektiver samtidig, ikke bare de finansielle tallene.',
    },
  ],
  'okonomi-drift-2-4': [
    {
      question: 'Hva er nåverdi (NPV)?',
      options: [
        'Summen av fremtidige kontantstrømmer diskontert til i dag, minus investeringsbeløpet',
        'Summen av alle fremtidige kontantstrømmer uten diskontering',
        'Investeringsbeløpet delt på antall år',
        'Den årlige kontantstrømmen ganget med antall år',
      ],
      explanation: 'NPV diskonterer fremtidige kontantstrømmer med avkastningskravet og trekker fra investeringen.',
    },
    {
      question: 'Når er en investering lønnsom etter nåverdimetoden?',
      options: [
        'Når nåverdien er positiv (større enn 0)',
        'Når nåverdien er negativ',
        'Når investeringsbeløpet er høyt',
        'Når tilbakebetalingstiden er lang',
      ],
      explanation: 'En positiv NPV betyr at investeringen gir mer enn avkastningskravet og dermed er lønnsom.',
    },
    {
      question: 'Hva er internrenten (IRR)?',
      options: [
        'Renten som gjør nåverdien lik null',
        'Bankens utlånsrente',
        'Renten på statsobligasjoner',
        'Avskrivningssatsen',
      ],
      explanation: 'IRR er den diskonteringsrenten som gir NPV = 0, altså investeringens faktiske avkastning.',
    },
    {
      question: 'Investering 500 000 kr gir 150 000 kr/år i 5 år ved 10 % krav. Hva blir nåverdien (avrundet)?',
      options: [
        'Positiv, ca. 69 000 kr',
        'Negativ, ca. −69 000 kr',
        'Null',
        'Ca. 250 000 kr',
      ],
      explanation: 'Sum av diskonterte kontantstrømmer ≈ 568 600 kr; NPV ≈ 568 600 − 500 000 ≈ 69 000 kr (positiv).',
    },
    {
      question: 'En investering på 300 000 kr gir 100 000 kr/år. Hva er enkel tilbakebetalingstid?',
      options: [
        '3 år',
        '4 år',
        '2 år',
        '5 år',
      ],
      explanation: 'Tilbakebetalingstid = 300 000 / 100 000 = 3 år (uten diskontering).',
    },
  ],
  'okonomi-drift-2-5': [
    {
      question: 'Hvordan beregnes driftsmarginen?',
      options: [
        'Driftsresultat / Driftsinntekter × 100 %',
        'Årsresultat / Egenkapital × 100 %',
        'Omløpsmidler / Kortsiktig gjeld',
        'Egenkapital / Totalkapital × 100 %',
      ],
      explanation: 'Driftsmargin = driftsresultat / driftsinntekter × 100 %.',
    },
    {
      question: 'Egenkapital 3 200 000 kr og totalkapital 6 400 000 kr. Hva er egenkapitalandelen?',
      options: [
        '50 %',
        '30 %',
        '200 %',
        '20 %',
      ],
      explanation: 'Egenkapitalandel = 3 200 000 / 6 400 000 × 100 % = 50 %.',
    },
    {
      question: 'Omløpsmidler 2 800 000 kr og kortsiktig gjeld 1 600 000 kr. Hva er likviditetsgrad 1?',
      options: [
        '1,75',
        '0,57',
        '2,80',
        '1,20',
      ],
      explanation: 'Likviditetsgrad 1 = omløpsmidler / kortsiktig gjeld = 2 800 000 / 1 600 000 = 1,75.',
    },
    {
      question: 'Hva forteller egenkapitalandelen om?',
      options: [
        'Bedriftens soliditet (evne til å tåle tap)',
        'Bedriftens kortsiktige betalingsevne',
        'Antall solgte enheter',
        'Markedsandelen',
      ],
      explanation: 'Egenkapitalandelen er et soliditetsmål; jo høyere andel, desto bedre tåler bedriften tap.',
    },
    {
      question: 'Driftsinntekter 8 000 000 kr og driftsresultat 640 000 kr gir hvilken driftsmargin?',
      options: [
        '8 %',
        '12 %',
        '15 %',
        '80 %',
      ],
      explanation: 'Driftsmargin = 640 000 / 8 000 000 × 100 % = 8 %.',
    },
  ],
  'okonomi-drift-3-1': [
    {
      question: 'Hva er hovedmålet med produksjonsplanlegging?',
      options: [
        'Å møte etterspørselen på en kostnadseffektiv måte',
        'Å alltid produsere mest mulig',
        'Å minimere antall ansatte',
        'Å holde lageret fullt til enhver tid',
      ],
      explanation: 'Produksjonsplanlegging bestemmer hva, hvor mye og når man skal produsere for å dekke etterspørselen effektivt.',
    },
    {
      question: 'En fabrikk kan lage 200 stoler/uke og laget 160. Hva er kapasitetsutnyttelsen?',
      options: [
        '80 %',
        '125 %',
        '40 %',
        '60 %',
      ],
      explanation: 'Kapasitetsutnyttelse = 160 / 200 × 100 % = 80 %.',
    },
    {
      question: 'Hva er en flaskehals i produksjonen?',
      options: [
        'Steget med lavest kapasitet som begrenser total produksjon',
        'Det raskeste steget i prosessen',
        'Lageret for ferdigvarer',
        'Det billigste steget',
      ],
      explanation: 'Flaskehalsen har lavest kapasitet, og total produksjon kan aldri gå raskere enn den.',
    },
    {
      question: 'Blanding 100 kg/t, støping 60 kg/t, pakking 90 kg/t. Hva er fabrikkens totale kapasitet?',
      options: [
        '60 kg/time',
        '90 kg/time',
        '100 kg/time',
        '250 kg/time',
      ],
      explanation: 'Flaskehalsen er støping med 60 kg/time, som setter taket for samlet kapasitet.',
    },
    {
      question: 'Hva er gjennomløpstid?',
      options: [
        'Total tid fra en produksjonsordre starter til produktet er ferdig',
        'Tiden maskinen står stille',
        'Tiden det tar å selge produktet',
        'Tiden mellom to bestillinger',
      ],
      explanation: 'Gjennomløpstid inkluderer bearbeiding, venting, transport og inspeksjon fra start til ferdig produkt.',
    },
  ],
  'okonomi-drift-3-2': [
    {
      question: 'Hva er målet med lagerstyring?',
      options: [
        'Riktig mengde varer til riktig tid, med lavest mulig totalkostnad',
        'Å ha størst mulig lager til enhver tid',
        'Å aldri bestille nye varer',
        'Å maksimere bestillingskostnadene',
      ],
      explanation: 'Lagerstyring balanserer tilgjengelighet mot kostnad gjennom valg av bestillingsmengde og -tidspunkt.',
    },
    {
      question: 'Hva uttrykker EOQ-formelen $EOQ = \\sqrt{\\frac{2 D S}{H}}$?',
      options: [
        'Bestillingsmengden som minimerer summen av bestillings- og lagerholdskostnader',
        'Det maksimale lageret bedriften kan ha',
        'Den årlige etterspørselen',
        'Sikkerhetslageret',
      ],
      explanation: 'EOQ gir den bestillingsmengden som minimerer totale lagerkostnader.',
    },
    {
      question: 'D = 10 000, S = 500 kr, H = 20 kr. Hva er EOQ (avrundet)?',
      options: [
        'Ca. 707 enheter',
        'Ca. 500 enheter',
        'Ca. 1 000 enheter',
        'Ca. 250 enheter',
      ],
      explanation: 'EOQ = √(2·10 000·500 / 20) = √500 000 ≈ 707 enheter.',
    },
    {
      question: 'Forbruk 50 enheter/dag, leveringstid 6 dager, sikkerhetslager 100. Hva er bestillingspunktet?',
      options: [
        '400 enheter',
        '300 enheter',
        '356 enheter',
        '600 enheter',
      ],
      explanation: 'Bestillingspunkt = 50 × 6 + 100 = 300 + 100 = 400 enheter.',
    },
    {
      question: 'Hva er hovedideen i Just-in-Time (JIT)?',
      options: [
        'Varer leveres nøyaktig når de trengs, for å eliminere lager',
        'Bygge opp størst mulig lager',
        'Bestille bare én gang i året',
        'Aldri samarbeide med leverandører',
      ],
      explanation: 'JIT leverer materialer akkurat når de trengs og krever pålitelige leverandører og god planlegging.',
    },
  ],
  'okonomi-drift-3-3': [
    {
      question: 'Hva omfatter innkjøp?',
      options: [
        'Alle aktiviteter for å anskaffe varer, materialer og tjenester bedriften trenger',
        'Bare betaling av fakturaer',
        'Kun salg til kunder',
        'Bare lagerstyring',
      ],
      explanation: 'Innkjøp dekker behovsidentifisering, leverandørsøk, forhandling, bestilling, mottak og oppfølging.',
    },
    {
      question: 'Hva er typiske kriterier i en leverandørvurdering?',
      options: [
        'Pris, kvalitet, leveringspresisjon, fleksibilitet og økonomisk stabilitet',
        'Bare laveste pris',
        'Bare leverandørens alder',
        'Kun geografisk nærhet',
      ],
      explanation: 'Leverandørvurdering er en vektet vurdering på flere kriterier, ikke bare pris.',
    },
    {
      question: 'Leverandør A scorer pris 4, kvalitet 5, levering 3 med vekter 40/35/25 %. Hva er totalscoren?',
      options: [
        '4,10',
        '3,85',
        '4,00',
        '12,00',
      ],
      explanation: 'Score = 4×0,40 + 5×0,35 + 3×0,25 = 1,60 + 1,75 + 0,75 = 4,10.',
    },
    {
      question: 'Hva er Total Cost of Ownership (TCO)?',
      options: [
        'Den totale kostnaden ved et innkjøp gjennom hele levetiden',
        'Bare innkjøpsprisen',
        'Bare fraktkostnaden',
        'Salgsprisen til sluttkunde',
      ],
      explanation: 'TCO inkluderer innkjøpspris, frakt, lagring, vedlikehold, drift og avhending – ikke bare prisen.',
    },
    {
      question: 'Hvorfor kan laveste innkjøpspris likevel gi høyest totalkostnad?',
      options: [
        'Fordi frakt, vedlikehold og drift kan bli høye over levetiden',
        'Fordi laveste pris alltid er best',
        'Fordi mva. fjernes ved lav pris',
        'Fordi billige varer aldri trenger vedlikehold',
      ],
      explanation: 'TCO synliggjør at billige innkjøp kan ha høye drifts- og vedlikeholdskostnader som gir høyere totalkostnad.',
    },
  ],
  'okonomi-drift-3-4': [
    {
      question: 'Hva er logistikk?',
      options: [
        'Planlegging og kontroll av flyten av varer, tjenester og informasjon for å møte kundens krav',
        'Bare transport av ferdigvarer',
        'Kun innkjøp av råvarer',
        'Bare lagring av varer',
      ],
      explanation: 'Logistikk handler om riktig produkt, mengde, sted, tid og kostnad gjennom hele flyten.',
    },
    {
      question: 'Hva er Supply Chain Management (SCM)?',
      options: [
        'Styring av hele forsyningskjeden fra råvareleverandør til sluttkunde',
        'Styring av bare bedriftens eget lager',
        'En metode for å beregne mva.',
        'En type markedsføring',
      ],
      explanation: 'SCM koordinerer alle leddene i kjeden for å optimalisere helheten, ikke bare enkeltledd.',
    },
    {
      question: 'Hva er bullwhip-effekten?',
      options: [
        'Små svingninger i sluttetterspørsel forsterkes oppover i forsyningskjeden',
        'At priser alltid faller mot slutten av kjeden',
        'At lageret aldri endrer seg',
        'At kunder slutter å kjøpe',
      ],
      explanation: 'Bullwhip (piskeeffekten) gjør at hvert ledd overreagerer, slik at variasjonen vokser oppover i kjeden.',
    },
    {
      question: 'Hva forsterker bullwhip-effekten typisk?',
      options: [
        'At hvert ledd legger på ekstra buffer i bestillingene sine',
        'At alle ledd deler etterspørselsdata åpent',
        'At etterspørselen er helt stabil',
        'At det bare er ett ledd i kjeden',
      ],
      explanation: 'Når hvert ledd bestiller litt ekstra som buffer, summeres overreaksjonene og svingningene øker.',
    },
    {
      question: 'Hva er hovedmålet med god logistikk og SCM?',
      options: [
        'Å levere riktig produkt til riktig sted og tid til lavest mulig kostnad',
        'Å maksimere antall transportledd',
        'Å holde størst mulig lager i alle ledd',
        'Å unngå kontakt med kundene',
      ],
      explanation: 'Effektiv logistikk og SCM optimaliserer leveringspresisjon og kostnad gjennom hele kjeden.',
    },
  ],
  'okonomi-drift-3-5': [
    {
      question: 'Hva er kjernen i lean produksjon?',
      options: [
        'Identifisere og eliminere sløsing gjennom kontinuerlig forbedring',
        'Produsere så mye som mulig uansett etterspørsel',
        'Bygge opp store lagre',
        'Kutte kvaliteten for å spare penger',
      ],
      explanation: 'Lean handler om å gjøre mer med mindre ved å fjerne sløsing (muda) og forbedre kontinuerlig.',
    },
    {
      question: 'Hva betyr begrepet «muda» i lean?',
      options: [
        'Sløsing – aktivitet som bruker ressurser uten å skape verdi',
        'Maksimal kvalitet',
        'En type lagerbygning',
        'En japansk lederstil',
      ],
      explanation: 'Muda er det japanske ordet for sløsing, altså ikke-verdiskapende aktivitet.',
    },
    {
      question: 'Hva er kaizen?',
      options: [
        'Filosofien om kontinuerlige, gradvise forbedringer der alle bidrar',
        'En stor, radikal omorganisering',
        'En metode for å øke prisene',
        'Et regnskapsprinsipp',
      ],
      explanation: 'Kaizen betyr «forandring til det bedre» og bygger på mange små forbedringer over tid.',
    },
    {
      question: 'Hva er et kanban-system?',
      options: [
        'Et visuelt, pull-basert styringssystem som hindrer overproduksjon',
        'Et lønnssystem',
        'En type lagerbygning',
        'Et regnskapsskjema',
      ],
      explanation: 'Kanban bruker visuelle kort som signaliserer behov for påfyll og styrer flyten pull-basert.',
    },
    {
      question: 'At et bakeri baker mer brød enn det får solgt, er et eksempel på hvilken sløsingsform?',
      options: [
        'Overproduksjon',
        'Venting',
        'Transport',
        'Underbemanning',
      ],
      explanation: 'Å produsere mer enn etterspurt er overproduksjon, en av de klassiske formene for muda.',
    },
  ],
  'okonomi-drift-4-1': [
    {
      question: 'Hvordan defineres kvalitet (ISO 9000)?',
      options: [
        'I hvilken grad iboende egenskaper oppfyller krav og forventninger',
        'At produktet er dyrest mulig',
        'At produktet har flest mulig funksjoner',
        'At produktet er mest avansert',
      ],
      explanation: 'Kvalitet er i hvilken grad egenskapene oppfyller krav fra kunder og andre interessenter.',
    },
    {
      question: 'Hva er kundetilfredshet?',
      options: [
        'Forholdet mellom kundens forventninger og opplevelse',
        'Antall solgte enheter',
        'Bedriftens overskudd',
        'Markedsandelen',
      ],
      explanation: 'Kunden er tilfreds når opplevelsen møter eller overgår forventningene.',
    },
    {
      question: 'Når blir en kunde utilfreds ifølge forventningsmodellen?',
      options: [
        'Når opplevelsen er dårligere enn forventningene',
        'Når opplevelsen overgår forventningene',
        'Når prisen er lav',
        'Når produktet er nytt',
      ],
      explanation: 'Misnøye oppstår når opplevelsen ligger under det kunden forventet.',
    },
    {
      question: 'Hva omtaler SERVQUAL-dimensjonen «pålitelighet»?',
      options: [
        'Evnen til å levere den lovede tjenesten korrekt og konsistent',
        'Hvor moderne lokalene er',
        'Hvor lav prisen er',
        'Hvor stor bedriften er',
      ],
      explanation: 'Pålitelighet handler om å levere som lovet, korrekt og konsistent hver gang.',
    },
    {
      question: 'Hvorfor er kvalitet viktig for lønnsomheten?',
      options: [
        'God kvalitet gir fornøyde kunder, gjenkjøp og færre reklamasjoner',
        'Kvalitet har ingen betydning for økonomien',
        'Lav kvalitet gir alltid høyere fortjeneste',
        'Kvalitet øker bare kostnadene uten nytte',
      ],
      explanation: 'Høy kvalitet styrker kundelojalitet og reduserer feilkostnader, noe som påvirker lønnsomheten positivt.',
    },
  ],
  'okonomi-drift-4-2': [
    {
      question: 'Hva er Total Quality Management (TQM)?',
      options: [
        'En helhetlig ledelsesfilosofi med kontinuerlig forbedring og kundetilfredshet som mål',
        'En metode for å beregne skatt',
        'Et lønnssystem',
        'En type lagerstyring',
      ],
      explanation: 'TQM involverer alle ansatte og avdelinger i kontinuerlig forbedring med kunden i sentrum.',
    },
    {
      question: 'Hva står PDCA for i Demings hjul?',
      options: [
        'Plan, Do, Check, Act',
        'Plan, Deliver, Control, Adjust',
        'Prepare, Decide, Create, Approve',
        'Produce, Distribute, Count, Analyze',
      ],
      explanation: 'PDCA = Plan (planlegg), Do (gjennomfør), Check (kontroller), Act (standardiser/juster).',
    },
    {
      question: 'Hva gjør man i «Check»-fasen av PDCA?',
      options: [
        'Kontrollerer resultatene mot det man planla',
        'Planlegger forbedringen',
        'Gjennomfører tiltaket',
        'Standardiserer det som fungerte',
      ],
      explanation: 'I Check sammenligner man resultatene med målet for å se om tiltaket virket.',
    },
    {
      question: 'Hvorfor gjentas PDCA-syklusen kontinuerlig?',
      options: [
        'Fordi forbedring er en pågående prosess, ikke en engangshendelse',
        'Fordi den bare kan kjøres én gang',
        'Fordi loven krever fire runder',
        'Fordi den erstatter regnskapet',
      ],
      explanation: 'Kontinuerlig forbedring betyr at man stadig gjentar syklusen for å forbedre prosessene videre.',
    },
    {
      question: 'Hva er et sentralt prinsipp i TQM?',
      options: [
        'Alle ansatte og avdelinger involveres i kvalitetsarbeidet',
        'Bare ledelsen bryr seg om kvalitet',
        'Kvalitet er kun kontrollavdelingens ansvar',
        'Kvalitet sjekkes bare på sluttproduktet',
      ],
      explanation: 'TQM bygger på bred involvering – kvalitet er alles ansvar, ikke bare en sluttkontroll.',
    },
  ],
  'okonomi-drift-4-3': [
    {
      question: 'Hva er ISO 9001?',
      options: [
        'En internasjonal standard for kvalitetsstyringssystemer',
        'En norsk lov om arbeidstid',
        'Et regnskapsprogram',
        'En type produksjonsmaskin',
      ],
      explanation: 'ISO 9001 stiller krav til et kvalitetsstyringssystem og utgis av ISO.',
    },
    {
      question: 'Hva er internkontroll?',
      options: [
        'Systematiske tiltak for å sikre at aktiviteter følger lover, forskrifter og krav',
        'Kontroll av kundenes kontoer',
        'En revisjon utført av Skatteetaten',
        'En markedsundersøkelse',
      ],
      explanation: 'Internkontroll er virksomhetens egne systematiske tiltak for å etterleve krav, lovpålagt for HMS i Norge.',
    },
    {
      question: 'Hvorfor søker mange bedrifter ISO 9001-sertifisering?',
      options: [
        'For å dokumentere kvalitet, blant annet for å kunne delta i offentlige anbud',
        'For å slippe å betale skatt',
        'For å øke lønnen automatisk',
        'For å unngå regnskapsplikt',
      ],
      explanation: 'Sertifisering viser at bedriften har et fungerende kvalitetssystem og er ofte et krav i anbud.',
    },
    {
      question: 'Hva avdekker en gap-analyse i forkant av ISO-sertifisering?',
      options: [
        'Avstanden mellom dagens praksis og standardens krav',
        'Bedriftens markedsandel',
        'Antall ansatte som er syke',
        'Konkurrentenes priser',
      ],
      explanation: 'Gap-analysen viser hvilke krav som ikke er oppfylt ennå, slik at man kan lukke gapene.',
    },
    {
      question: 'Hvilket område er internkontroll lovpålagt for i Norge?',
      options: [
        'Helse, miljø og sikkerhet (HMS)',
        'Markedsføring',
        'Prissetting',
        'Valg av leverandør',
      ],
      explanation: 'Internkontrollforskriften gjør systematisk internkontroll for HMS lovpålagt.',
    },
  ],
  'okonomi-drift-4-4': [
    {
      question: 'Hva er verdistrømsanalyse (VSM)?',
      options: [
        'En lean-metode for å kartlegge alle steg i en prosess og finne sløsing',
        'En metode for å beregne mva.',
        'En type markedsføring',
        'En regnskapsstandard',
      ],
      explanation: 'VSM kartlegger prosessen for å skille verdiskapende fra ikke-verdiskapende steg.',
    },
    {
      question: 'Hva er målet med Six Sigma?',
      options: [
        'Å redusere variasjon og feil til maksimalt 3,4 feil per million muligheter',
        'Å øke antall feil',
        'Å produsere mest mulig',
        'Å fjerne all kvalitetskontroll',
      ],
      explanation: 'Six Sigma er datadrevet og sikter mot svært lav feilrate (3,4 per million).',
    },
    {
      question: 'Hva står DMAIC for i Six Sigma?',
      options: [
        'Define, Measure, Analyze, Improve, Control',
        'Design, Make, Account, Invest, Close',
        'Decide, Manage, Adjust, Implement, Check',
        'Develop, Market, Analyze, Increase, Conclude',
      ],
      explanation: 'DMAIC er Six Sigma-syklusen: Define, Measure, Analyze, Improve, Control.',
    },
    {
      question: 'Hva refererer «sigma» til i Six Sigma?',
      options: [
        'Standardavvik fra gjennomsnittet i en normalfordeling',
        'En type maskin',
        'Et regnskapsbegrep',
        'En lederstil',
      ],
      explanation: 'Sigma er standardavviket; seks sigma fra gjennomsnittet gir en svært liten andel feil.',
    },
    {
      question: 'I DMAIC: hva gjør man i «Measure»-fasen?',
      options: [
        'Samler data og måler dagens prestasjon',
        'Definerer problemet',
        'Innfører varige kontrolltiltak',
        'Velger ny leverandør',
      ],
      explanation: 'Measure handler om å samle data og kvantifisere nåsituasjonen før analyse.',
    },
  ],
  'okonomi-drift-4-5': [
    {
      question: 'Hva er innovasjon?',
      options: [
        'Implementering av noe nytt eller vesentlig forbedret som skaper verdi',
        'En idé som aldri blir tatt i bruk',
        'En type regnskap',
        'En markedsundersøkelse',
      ],
      explanation: 'Innovasjon krever at en ny eller forbedret løsning realiseres og skaper verdi, ikke bare en idé.',
    },
    {
      question: 'Hva kjennetegner design thinking?',
      options: [
        'En menneskesentrert, iterativ metode som starter med brukernes behov',
        'En metode som starter med regnskapstall',
        'En lederstil basert på kontroll',
        'En metode for å sette priser',
      ],
      explanation: 'Design thinking kombinerer empati, kreativitet og testing, og starter med dyp forståelse av brukeren.',
    },
    {
      question: 'Hvorfor er det ikke nok å ha en idé for å snakke om innovasjon?',
      options: [
        'Fordi ideen må realiseres og tas i bruk for å skape verdi',
        'Fordi ideer alltid er verdiløse',
        'Fordi loven forbyr nye ideer',
        'Fordi ideer ikke kan beskyttes',
      ],
      explanation: 'Innovasjon forutsetter at ideen settes ut i livet og faktisk skaper verdi.',
    },
    {
      question: 'Hva er typisk første fase i design thinking?',
      options: [
        'Empati – å forstå brukernes behov',
        'Lansering i markedet',
        'Beregning av nåverdi',
        'Oppsigelse av ansatte',
      ],
      explanation: 'Prosessen starter med empati: å observere og forstå brukernes reelle behov.',
    },
    {
      question: 'Hva slags innovasjon er en ny, mer effektiv produksjonsmetode et eksempel på?',
      options: [
        'Prosessinnovasjon',
        'Bare markedsføringsinnovasjon',
        'Ingen innovasjon',
        'Finansiell innovasjon',
      ],
      explanation: 'Forbedring av selve produksjonsmåten er prosessinnovasjon.',
    },
  ],
  'okonomi-drift-5-1': [
    {
      question: 'Hva kjennetegner et prosjekt?',
      options: [
        'En midlertidig, målrettet oppgave med definert start og slutt og gitte rammer',
        'Gjentakende daglig drift',
        'En oppgave uten mål eller frist',
        'En kontinuerlig produksjon som aldri stopper',
      ],
      explanation: 'Et prosjekt er tidsavgrenset, har et entydig mål, begrensede ressurser og er ofte unikt og tverrfaglig.',
    },
    {
      question: 'Hvilket av disse er et prosjekt og ikke ordinær drift?',
      options: [
        'Å bygge om et verksted for å kunne tilby elbilservice',
        'Daglig service og reparasjon av biler',
        'Den faste rengjøringen hver kveld',
        'Løpende fakturering av kunder',
      ],
      explanation: 'Ombyggingen er midlertidig, unik og målrettet – kjennetegn på et prosjekt, til forskjell fra rutinedrift.',
    },
    {
      question: 'Hvilke faser inngår typisk i prosjektets livssyklus?',
      options: [
        'Oppstart, planlegging, gjennomføring og avslutning',
        'Salg, innkjøp, lager og frakt',
        'Debet, kredit, balanse og resultat',
        'Plan, Do, Check, Act',
      ],
      explanation: 'En vanlig inndeling er oppstarts-, planleggings-, gjennomførings- og avslutningsfase.',
    },
    {
      question: 'Hva er en interessent (stakeholder) i et prosjekt?',
      options: [
        'Enhver som påvirkes av eller kan påvirke prosjektet',
        'Bare prosjektlederen',
        'Bare bedriftens eiere',
        'Bare leverandøren',
      ],
      explanation: 'Interessenter er alle som berøres av eller kan påvirke prosjektet, som brukere, naboer og beslutningstakere.',
    },
    {
      question: 'Hvorfor er interessentanalyse viktig tidlig i et prosjekt?',
      options: [
        'For å kartlegge hvem som påvirkes og hvordan de bør håndteres',
        'For å beregne mva.',
        'For å fastsette avskrivninger',
        'For å unngå å informere noen',
      ],
      explanation: 'Interessentanalyse identifiserer hvem som berøres slik at man kan planlegge involvering og kommunikasjon.',
    },
  ],
  'okonomi-drift-5-2': [
    {
      question: 'Hvilke tre faktorer balanserer prosjekttrekanten (jerntriangelet)?',
      options: [
        'Tid, kostnad og kvalitet/omfang',
        'Inntekt, kostnad og overskudd',
        'Debet, kredit og balanse',
        'Pris, kvalitet og levering',
      ],
      explanation: 'Prosjekttrekanten balanserer tid, kostnad og kvalitet/omfang – endring i én påvirker de andre.',
    },
    {
      question: 'Hva er en WBS (Work Breakdown Structure)?',
      options: [
        'En hierarkisk oppdeling av prosjektet i leveranser og arbeidspakker',
        'Et regnskapsskjema',
        'En risikomatrise',
        'En kommunikasjonsplan',
      ],
      explanation: 'WBS deler prosjektet i nivåer av leveranser og arbeidspakker for å gjøre det håndterbart.',
    },
    {
      question: 'Hva er en milepæl i et prosjekt?',
      options: [
        'Et kontrollpunkt uten varighet som markerer at en leveranse eller fase er fullført',
        'En aktivitet med lengst varighet',
        'En kostnadspost',
        'En type risiko',
      ],
      explanation: 'En milepæl har ingen varighet i seg selv; den markerer fullføring og brukes til å sjekke fremdrift.',
    },
    {
      question: 'Hva viser et Gantt-diagram?',
      options: [
        'Prosjektets aktiviteter plassert langs en tidslinje',
        'Bedriftens organisasjonskart',
        'Regnskapsbalansen',
        'Markedsandeler',
      ],
      explanation: 'Gantt-diagrammet fremstiller aktiviteter og varigheter visuelt langs en tidsakse.',
    },
    {
      question: 'Aktivitetene tar 2+3+4+2+1 uker og må gjøres sekvensielt. Hva blir total varighet?',
      options: [
        '12 uker',
        '4 uker',
        '10 uker',
        '8 uker',
      ],
      explanation: 'Når aktivitetene avhenger av hverandre i rekkefølge, summeres varighetene: 2+3+4+2+1 = 12 uker.',
    },
  ],
  'okonomi-drift-5-3': [
    {
      question: 'Hva viser et nettverksdiagram?',
      options: [
        'Aktivitetene i et prosjekt og avhengighetene mellom dem',
        'Bedriftens IT-nettverk',
        'Regnskapets kontoplan',
        'Markedets prisnivå',
      ],
      explanation: 'Nettverksdiagrammet viser aktiviteter og rekkefølge, og er grunnlag for kritisk vei og slakk.',
    },
    {
      question: 'Hva er den kritiske veien i et prosjekt?',
      options: [
        'Den lengste kjeden av avhengige aktiviteter som bestemmer total varighet',
        'Den korteste veien gjennom prosjektet',
        'Den dyreste aktiviteten',
        'Den minst viktige aktiviteten',
      ],
      explanation: 'Kritisk vei er den lengste avhengige kjeden og setter prosjektets minste mulige varighet.',
    },
    {
      question: 'Hva er slakk (flyt) for en aktivitet?',
      options: [
        'Tiden aktiviteten kan forsinkes uten å påvirke prosjektets sluttdato',
        'Tiden aktiviteten faktisk tar',
        'Kostnaden ved aktiviteten',
        'Antall personer som jobber med den',
      ],
      explanation: 'Slakk er reserven en aktivitet har; aktiviteter på kritisk vei har null slakk.',
    },
    {
      question: 'PERT: a = 4, m = 6, b = 14 uker. Hva er forventet varighet $t_e$?',
      options: [
        '7 uker',
        '6 uker',
        '8 uker',
        '9 uker',
      ],
      explanation: '$t_e = (a + 4m + b)/6 = (4 + 24 + 14)/6 = 42/6 = 7$ uker.',
    },
    {
      question: 'Med a = 4 og b = 14 uker, hva er standardavviket i PERT?',
      options: [
        'Ca. 1,67 uker',
        'Ca. 7 uker',
        'Ca. 3,3 uker',
        'Ca. 10 uker',
      ],
      explanation: '$\\sigma = (b - a)/6 = (14 - 4)/6 = 10/6 \\approx 1,67$ uker.',
    },
  ],
  'okonomi-drift-5-4': [
    {
      question: 'Hvordan defineres risiko i prosjektsammenheng?',
      options: [
        'Sannsynlighet for at en hendelse inntreffer × konsekvensen av den',
        'Bare kostnaden ved prosjektet',
        'Bare varigheten av prosjektet',
        'Antall interessenter',
      ],
      explanation: 'Risiko = sannsynlighet × konsekvens; målet er å håndtere risiko, ikke å eliminere all risiko.',
    },
    {
      question: 'Hva er formålet med en risikomatrise?',
      options: [
        'Å plassere risikoer etter sannsynlighet og konsekvens for å prioritere tiltak',
        'Å beregne nøyaktig nåverdi',
        'Å fordele lønn mellom ansatte',
        'Å lage organisasjonskart',
      ],
      explanation: 'Risikomatrisen synliggjør hvilke risikoer som er mest alvorlige og dermed bør prioriteres.',
    },
    {
      question: 'Hva er «scope creep»?',
      options: [
        'At prosjektets omfang ukontrollert utvides med nye krav underveis',
        'At prosjektet leveres for tidlig',
        'At budsjettet blir for lavt',
        'At alle interessenter er enige',
      ],
      explanation: 'Scope creep er gradvis utvidelse av omfanget uten styring, noe som truer tid og kostnad.',
    },
    {
      question: 'Hvordan bør en prosjektleder håndtere nye endringsønsker?',
      options: [
        'Motta dem skriftlig og gjøre en konsekvensanalyse før beslutning',
        'Innføre alle ønsker umiddelbart',
        'Ignorere alle ønsker',
        'La hver ansatt bestemme selv',
      ],
      explanation: 'Endringer bør gå gjennom en formell prosess med konsekvensanalyse av tid og kostnad før de vedtas.',
    },
    {
      question: 'Hva er en risikostrategi for å «redusere» en risiko?',
      options: [
        'Iverksette tiltak som senker sannsynlighet eller konsekvens',
        'Å overse risikoen helt',
        'Å øke sannsynligheten med vilje',
        'Å avlyse hele prosjektet',
      ],
      explanation: 'Å redusere innebærer konkrete tiltak som demper sannsynligheten for eller virkningen av hendelsen.',
    },
  ],
  'okonomi-drift-5-5': [
    {
      question: 'Hva er prosjektevaluering?',
      options: [
        'En systematisk vurdering av prosjektets resultater, prosess og erfaringer',
        'En budsjettering før prosjektstart',
        'En markedsundersøkelse',
        'En lønnsforhandling',
      ],
      explanation: 'Evalueringen sammenligner oppnådd med planlagt og dokumenterer lærdom til senere prosjekter.',
    },
    {
      question: 'Et prosjekt planlagt til 12 uker tok 15 uker. Hvor stor er forsinkelsen i prosent?',
      options: [
        '25 %',
        '20 %',
        '15 %',
        '3 %',
      ],
      explanation: 'Forsinkelse = 3 uker / 12 uker × 100 % = 25 %.',
    },
    {
      question: 'Hva er erfaringsoverføring (lessons learned)?',
      options: [
        'Å samle og dele erfaringer slik at fremtidige prosjekter kan dra nytte av dem',
        'Å glemme det som gikk galt',
        'Å skjule feil for ledelsen',
        'Å avslutte alt samarbeid',
      ],
      explanation: 'Lessons learned dokumenterer både positive og negative erfaringer for læring i organisasjonen.',
    },
    {
      question: 'Hva betyr det at gevinstene ikke ble realisert selv om prosjektet ble levert?',
      options: [
        'Selve leveransen er på plass, men de tiltenkte fordelene oppnås ikke i bruk',
        'Prosjektet var ulovlig',
        'Budsjettet ble for lavt',
        'Interessentene var ukjente',
      ],
      explanation: 'Et prosjekt kan levere produktet uten at organisasjonen tar det i bruk slik at gevinstene faktisk oppstår.',
    },
    {
      question: 'Hvilke tre dimensjoner vurderes typisk ved prosjektevaluering?',
      options: [
        'Resultat/kvalitet, tid og kostnad',
        'Debet, kredit og balanse',
        'Pris, mengde og rabatt',
        'Innkjøp, lager og salg',
      ],
      explanation: 'Man vurderer om resultatkvalitet, tidsfrist og budsjett ble oppnådd – samme faktorer som i prosjekttrekanten.',
    },
  ],
  'okonomi-drift-6-1': [
    {
      question: 'Hva er personalplanlegging?',
      options: [
        'En systematisk analyse av nåværende og fremtidig bemanningsbehov',
        'Utbetaling av lønn hver måned',
        'Markedsføring av ledige stillinger',
        'En type regnskap',
      ],
      explanation: 'Personalplanlegging skal sikre riktig og tilstrekkelig kompetanse for å nå virksomhetens mål.',
    },
    {
      question: 'Hva avdekker en kompetansekartlegging?',
      options: [
        'Kompetansegap mellom det de ansatte har og det virksomheten trenger',
        'Bedriftens markedsandel',
        'Konkurrentenes priser',
        'Antall solgte enheter',
      ],
      explanation: 'Kartleggingen sammenligner faktisk og nødvendig kompetanse og avdekker gap.',
    },
    {
      question: 'Behovet er 112 arbeidstimer/uke og et årsverk er 37,5 timer/uke. Hvor mange årsverk trengs (avrundet)?',
      options: [
        'Ca. 3 årsverk',
        'Ca. 2 årsverk',
        'Ca. 4 årsverk',
        'Ca. 1,5 årsverk',
      ],
      explanation: '112 / 37,5 ≈ 2,99, altså om lag 3 årsverk.',
    },
    {
      question: 'Hva er et tiltak når kompetansekartleggingen avdekker et gap?',
      options: [
        'Opplæring, rekruttering eller omorganisering',
        'Å ignorere gapet',
        'Å redusere lønnen',
        'Å øke prisene',
      ],
      explanation: 'Gap kan lukkes ved opplæring av eksisterende ansatte, nyansettelser eller omfordeling av oppgaver.',
    },
    {
      question: 'Hvorfor er bemanningsplanlegging viktig for en butikk med variabelt kundebesøk?',
      options: [
        'For å ha nok ansatte på travle dager uten å overbemanne på rolige dager',
        'For å alltid ha maksimal bemanning',
        'For å unngå å selge varer',
        'For å slippe å føre regnskap',
      ],
      explanation: 'God bemanningsplan tilpasser arbeidskraften til behovet og balanserer service mot lønnskostnad.',
    },
  ],
  'okonomi-drift-6-2': [
    {
      question: 'Hva er en stillingsanalyse?',
      options: [
        'En systematisk gjennomgang av oppgaver, ansvar og kompetansekrav i en stilling',
        'En vurdering av bedriftens samlede økonomi',
        'En markedsundersøkelse',
        'En lønnsutbetaling',
      ],
      explanation: 'Stillingsanalysen beskriver hva stillingen krever og danner grunnlag for annonse og kandidatvurdering.',
    },
    {
      question: 'Hva sier arbeidsmiljøloven om arbeidsavtaler?',
      options: [
        'Alle ansatte skal ha en skriftlig arbeidsavtale',
        'Muntlige avtaler er alltid tilstrekkelig',
        'Bare ledere trenger arbeidsavtale',
        'Arbeidsavtaler er frivillige',
      ],
      explanation: 'Arbeidsmiljøloven krever skriftlig arbeidsavtale for alle ansatte.',
    },
    {
      question: 'Hva skal en arbeidsavtale minimum inneholde?',
      options: [
        'Partenes identitet, arbeidssted, stilling, lønn, arbeidstid og oppsigelsesfrist',
        'Bare lønn',
        'Bare arbeidssted',
        'Bare oppsigelsesfrist',
      ],
      explanation: 'Loven lister flere minstekrav, blant annet partene, arbeidssted, stilling, lønn, arbeidstid og oppsigelsesfrist.',
    },
    {
      question: 'Hva er hensikten med en strukturert rekrutteringsprosess?',
      options: [
        'Å finne riktig kompetanse til riktig stilling',
        'Å ansette flest mulig',
        'Å spare mest mulig på lønn',
        'Å fylle stillinger raskest mulig uansett egnethet',
      ],
      explanation: 'Målet med rekruttering er å skaffe rett kompetanse til rett stilling til rett tid.',
    },
    {
      question: 'Hvorfor er stillingsanalysen et godt grunnlag for kandidatvurdering?',
      options: [
        'Den definerer kravene kandidatene skal vurderes mot',
        'Den fastsetter bedriftens overskudd',
        'Den bestemmer mva.-satsen',
        'Den erstatter arbeidsavtalen',
      ],
      explanation: 'Når kravene er tydelig beskrevet, kan kandidatene vurderes objektivt mot disse.',
    },
  ],
  'okonomi-drift-6-3': [
    {
      question: 'Hva er formålet med arbeidsmiljøloven?',
      options: [
        'Å sikre et helsefremmende og meningsfylt arbeidsmiljø med trygghet mot skader',
        'Å fastsette bedriftens priser',
        'Å regulere merverdiavgift',
        'Å bestemme markedsandeler',
      ],
      explanation: 'Arbeidsmiljøloven skal beskytte arbeidstakere mot fysiske og psykiske skadevirkninger.',
    },
    {
      question: 'Hva står HMS for?',
      options: [
        'Helse, miljø og sikkerhet',
        'Handel, marked og salg',
        'Hovedmål for styret',
        'Helse, mat og service',
      ],
      explanation: 'HMS = helse, miljø og sikkerhet; systematisk HMS-arbeid er lovpålagt for alle med ansatte.',
    },
    {
      question: 'Hva er første steg i en risikovurdering på arbeidsplassen?',
      options: [
        'Kartlegge farene',
        'Iverksette tiltak',
        'Skrive årsregnskap',
        'Si opp ansatte',
      ],
      explanation: 'Man begynner med å kartlegge farene, før man vurderer risiko og iverksetter tiltak.',
    },
    {
      question: 'Hvordan vurderes risiko i en risikovurdering?',
      options: [
        'Ut fra sannsynlighet og konsekvens',
        'Ut fra bedriftens omsetning',
        'Ut fra antall kunder',
        'Ut fra leverandørenes priser',
      ],
      explanation: 'Risiko vurderes som en kombinasjon av hvor sannsynlig faren er og hvor alvorlig konsekvensen er.',
    },
    {
      question: 'Hvem er pålagt å ha systematisk HMS-arbeid?',
      options: [
        'Alle virksomheter med ansatte',
        'Bare statlige etater',
        'Bare store konsern',
        'Bare industribedrifter',
      ],
      explanation: 'Kravet om systematisk HMS-arbeid gjelder alle virksomheter som har ansatte.',
    },
  ],
  'okonomi-drift-6-4': [
    {
      question: 'Hva er kompetanseutvikling?',
      options: [
        'Tiltak som øker de ansattes kunnskaper, ferdigheter og holdninger',
        'En metode for å redusere lønn',
        'En type markedsføring',
        'Et regnskapsprinsipp',
      ],
      explanation: 'Kompetanseutvikling skjer gjennom kurs, veiledning, jobbrotasjon og mer, og styrker både den enkelte og organisasjonen.',
    },
    {
      question: 'Hva er en medarbeidersamtale?',
      options: [
        'En planlagt, fortrolig samtale mellom leder og medarbeider',
        'En tilfeldig prat i gangen',
        'En lønnsforhandling i plenum',
        'Et styremøte',
      ],
      explanation: 'Medarbeidersamtalen tar opp arbeidssituasjon, resultater, utvikling og trivsel, vanligvis en–to ganger i året.',
    },
    {
      question: 'Hva er ofte første steg i en kompetanseutviklingsplan?',
      options: [
        'Å kartlegge kompetansebehov',
        'Å si opp ansatte',
        'Å øke prisene',
        'Å avvikle medarbeidersamtaler',
      ],
      explanation: 'Man starter med å kartlegge behov, deretter prioritere tiltak og gjennomføre dem.',
    },
    {
      question: 'Hvilken nytte gir kompetanseutvikling for organisasjonen?',
      options: [
        'Styrket evne til å utføre oppgaver og nå mål',
        'Lavere kvalitet på arbeidet',
        'Færre kunder',
        'Høyere varekostnad',
      ],
      explanation: 'Mer kompetente medarbeidere øker organisasjonens evne til å løse oppgaver og nå sine mål.',
    },
    {
      question: 'Hvilken metode er et eksempel på kompetanseutvikling?',
      options: [
        'Jobbrotasjon og sertifiseringskurs',
        'Å fryse all opplæring',
        'Å redusere arbeidstiden',
        'Å kutte i markedsføringen',
      ],
      explanation: 'Jobbrotasjon, kurs og sertifiseringer er konkrete tiltak for å bygge kompetanse.',
    },
  ],
  'okonomi-drift-6-5': [
    {
      question: 'Hvilke krav stiller arbeidsmiljøloven til oppsigelse fra arbeidsgiver?',
      options: [
        'Den må være saklig begrunnet og følge formkrav',
        'Den kan gis uten begrunnelse',
        'Den må alltid skje muntlig',
        'Den krever samtykke fra kundene',
      ],
      explanation: 'Oppsigelse fra arbeidsgiver må være saklig begrunnet og oppfylle lovens formkrav.',
    },
    {
      question: 'Når kan avskjed brukes?',
      options: [
        'Ved grovt pliktbrudd eller vesentlig mislighold, som tyveri eller vold',
        'Ved enhver liten uenighet',
        'Ved nedbemanning av økonomiske grunner',
        'Når en ansatt ber om ferie',
      ],
      explanation: 'Avskjed avslutter arbeidsforholdet umiddelbart og forutsetter grovt pliktbrudd eller vesentlig mislighold.',
    },
    {
      question: 'Hva er en tariffavtale?',
      options: [
        'En skriftlig avtale mellom fagforening og arbeidsgiver om lønns- og arbeidsvilkår',
        'En avtale mellom to kunder',
        'En låneavtale med banken',
        'En leveringsavtale med en leverandør',
      ],
      explanation: 'Tariffavtalen regulerer blant annet minstelønn, arbeidstid og tillegg, og kan ikke fravikes til ugunst for arbeidstaker.',
    },
    {
      question: 'Hva er et viktig steg i en lovlig nedbemanningsprosess?',
      options: [
        'Å drøfte med tillitsvalgte før beslutning tas',
        'Å si opp tilfeldige ansatte uten begrunnelse',
        'Å holde prosessen hemmelig',
        'Å øke lønnen til de gjenværende',
      ],
      explanation: 'Ved nedbemanning skal behovet dokumenteres og prosessen drøftes med tillitsvalgte, med saklige utvelgelseskriterier.',
    },
    {
      question: 'Hva skiller oppsigelse fra avskjed?',
      options: [
        'Oppsigelse har oppsigelsestid; avskjed avslutter forholdet umiddelbart',
        'De er helt like',
        'Avskjed gir lengre oppsigelsestid',
        'Oppsigelse krever grovt pliktbrudd',
      ],
      explanation: 'Ved oppsigelse løper en oppsigelsestid, mens avskjed innebærer umiddelbar avslutning ved grovt mislighold.',
    },
  ],
  'okonomi-drift-7-1': [
    {
      question: 'Hva er en strategi?',
      options: [
        'En overordnet plan for hvordan bedriften skal nå sine langsiktige mål',
        'En daglig arbeidsliste',
        'Et månedsbudsjett',
        'Et organisasjonskart',
      ],
      explanation: 'Strategi setter retning, definerer markeder og hvordan bedriften skal skape varige konkurransefortrinn.',
    },
    {
      question: 'Hva står bokstavene i SWOT for?',
      options: [
        'Styrker, svakheter, muligheter og trusler',
        'Salg, vekst, omsetning og tap',
        'Strategi, vekst, organisasjon og teknologi',
        'System, web, ordre og transport',
      ],
      explanation: 'SWOT = styrker og svakheter (interne) samt muligheter og trusler (eksterne).',
    },
    {
      question: 'Hvilke faktorer er interne i en SWOT-analyse?',
      options: [
        'Styrker og svakheter',
        'Muligheter og trusler',
        'Politiske og økonomiske faktorer',
        'Teknologiske og juridiske faktorer',
      ],
      explanation: 'Styrker og svakheter er interne forhold bedriften kan påvirke; muligheter og trusler er eksterne.',
    },
    {
      question: 'Hva analyserer PESTEL-rammeverket?',
      options: [
        'Makroomgivelsene: politiske, økonomiske, sosiale, teknologiske, miljømessige og juridiske faktorer',
        'Bedriftens interne regnskap',
        'De ansattes lønnsnivå',
        'Lagerbeholdningen',
      ],
      explanation: 'PESTEL kartlegger eksterne makrofaktorer som påvirker bedriften utenfra.',
    },
    {
      question: 'Hvorfor brukes SWOT og PESTEL ofte sammen?',
      options: [
        'SWOT dekker interne og nære forhold, PESTEL de bredere makroomgivelsene',
        'De måler det samme to ganger',
        'De erstatter regnskapet',
        'De brukes bare til lønnsfastsettelse',
      ],
      explanation: 'Sammen gir de et helhetlig bilde av både interne forhold og eksterne makrofaktorer.',
    },
  ],
  'okonomi-drift-7-2': [
    {
      question: 'Hvilke tre generiske strategier definerte Michael Porter?',
      options: [
        'Kostnadslederskap, differensiering og fokusering',
        'Vekst, stabilitet og avvikling',
        'Innkjøp, produksjon og salg',
        'Plan, gjennomføring og kontroll',
      ],
      explanation: 'Porters generiske strategier er kostnadslederskap, differensiering og fokusering.',
    },
    {
      question: 'Hva innebærer differensieringsstrategi?',
      options: [
        'Å tilby noe unikt som kundene verdsetter',
        'Å alltid ha lavest pris',
        'Å kopiere konkurrentene nøyaktig',
        'Å selge til alle markeder samtidig',
      ],
      explanation: 'Differensiering gir konkurransefortrinn ved å tilby noe unikt kundene er villige til å betale for.',
    },
    {
      question: 'Hvilke fire strategier inngår i Ansoffs vekstmatrise?',
      options: [
        'Markedsinntrengning, markedsutvikling, produktutvikling og diversifisering',
        'Kostnad, differensiering, fokus og vekst',
        'Plan, Do, Check, Act',
        'Innkjøp, lager, salg og frakt',
      ],
      explanation: 'Ansoffs matrise kombinerer nye/eksisterende produkter og markeder til fire vekststrategier.',
    },
    {
      question: 'Hva er diversifisering i Ansoffs matrise?',
      options: [
        'Nye produkter til nye markeder',
        'Eksisterende produkter til eksisterende marked',
        'Eksisterende produkter til nye markeder',
        'Nye produkter til eksisterende marked',
      ],
      explanation: 'Diversifisering kombinerer nye produkter og nye markeder og er den mest risikofylte strategien.',
    },
    {
      question: 'Hvorfor passer differensiering ofte bedre enn kostnadslederskap for en liten lokal butikk?',
      options: [
        'Små aktører kan sjelden slå nettgiganter på pris, men kan tilby unik service',
        'Små butikker har alltid lavest kostnad',
        'Kostnadslederskap er forbudt for små bedrifter',
        'Differensiering krever ingen innsats',
      ],
      explanation: 'En liten butikk vinner sjelden en priskrig mot store nettaktører, men kan skille seg ut på service og opplevelse.',
    },
  ],
  'okonomi-drift-7-3': [
    {
      question: 'Hva er ledelse?',
      options: [
        'Prosessen med å påvirke andre til å arbeide mot felles mål',
        'Å føre regnskap',
        'Å produsere varer',
        'Å selge til kunder',
      ],
      explanation: 'Ledelse handler om å sette retning, inspirere og motivere andre mot felles mål.',
    },
    {
      question: 'Hva er kjernen i situasjonsbestemt ledelse (Hersey og Blanchard)?',
      options: [
        'Lederstilen tilpasses medarbeiderens kompetanse og motivasjon for oppgaven',
        'Én lederstil passer alltid best',
        'Lederen skal alltid være autoritær',
        'Lederen skal aldri gi instruksjoner',
      ],
      explanation: 'Situasjonsbestemt ledelse sier at riktig stil avhenger av medarbeiderens kompetanse og motivasjon.',
    },
    {
      question: 'Hva kjennetegner transformasjonsledelse?',
      options: [
        'Lederen inspirerer medarbeidere til å prestere utover det forventede gjennom visjon og verdier',
        'Lederen styrer kun gjennom belønning og straff',
        'Lederen unngår all kontakt med ansatte',
        'Lederen fokuserer bare på regnskapet',
      ],
      explanation: 'Transformasjonsledelse skaper endring via visjon, inspirasjon, intellektuell stimulering og individuell oppmerksomhet.',
    },
    {
      question: 'Hva er forskjellen på ledelse og administrasjon?',
      options: [
        'Ledelse setter retning og inspirerer; administrasjon planlegger, organiserer og kontrollerer',
        'De betyr nøyaktig det samme',
        'Administrasjon handler bare om salg',
        'Ledelse handler bare om regnskap',
      ],
      explanation: 'Ledelse dreier seg om retning og motivasjon, administrasjon om de praktiske styringsoppgavene.',
    },
    {
      question: 'For en helt nyansatt og ivrig medarbeider passer ofte hvilken stil best?',
      options: [
        'Instruerende stil med klare instruksjoner og tett oppfølging',
        'Helt fritt ansvar uten oppfølging',
        'Ingen kommunikasjon',
        'Avskjed',
      ],
      explanation: 'En motivert nybegynner mangler erfaring og trenger struktur og klare instruksjoner (instruerende stil).',
    },
  ],
  'okonomi-drift-7-4': [
    {
      question: 'Hva beskriver organisasjonsstrukturen?',
      options: [
        'Den formelle fordelingen av oppgaver, ansvar og beslutningsmyndighet',
        'Bedriftens reklamebudsjett',
        'Kundenes kjøpsmønster',
        'Leverandørenes priser',
      ],
      explanation: 'Organisasjonsstrukturen viser rapporteringslinjer, avdelinger og hvordan arbeidet koordineres.',
    },
    {
      question: 'Hva kjennetegner funksjonsbasert organisering?',
      options: [
        'Medarbeidere grupperes etter fagområde, som marked, økonomi og produksjon',
        'Medarbeidere grupperes etter geografi',
        'Det finnes ingen avdelinger',
        'Alle gjør alt om hverandre',
      ],
      explanation: 'Funksjonsbasert struktur samler spesialister innenfor samme funksjon i egne avdelinger.',
    },
    {
      question: 'Hva er en fordel med divisjonsbasert organisering etter bransje?',
      options: [
        'Dyp bransjekunnskap og mer skreddersydde løsninger',
        'Mindre ansvar for resultater',
        'Færre ansatte alltid',
        'Ingen behov for koordinering',
      ],
      explanation: 'Divisjoner per bransje samler kompetanse om hver bransje og gir mer tilpassede løsninger.',
    },
    {
      question: 'Hvor vises organisasjonsstrukturen typisk?',
      options: [
        'I et organisasjonskart',
        'I balansen',
        'I likviditetsbudsjettet',
        'I stillingsannonsen',
      ],
      explanation: 'Et organisasjonskart fremstiller strukturen med avdelinger og rapporteringslinjer.',
    },
    {
      question: 'Hva kan være en ulempe med ren funksjonsbasert organisering?',
      options: [
        'Avdelingene kan kommunisere dårlig og gi mindre kundetilpasning',
        'Spesialistkompetansen forsvinner',
        'Det blir umulig å ansette folk',
        'Bedriften kan ikke føre regnskap',
      ],
      explanation: 'Siloer mellom funksjoner kan svekke samhandling og evnen til å skreddersy løsninger for kundene.',
    },
  ],
  'okonomi-drift-7-5': [
    {
      question: 'Hva er endringsledelse?',
      options: [
        'En strukturert tilnærming til å føre mennesker og organisasjoner fra nåtilstand til ønsket tilstand',
        'En metode for å beregne skatt',
        'En type lagerstyring',
        'En markedsføringskampanje',
      ],
      explanation: 'Endringsledelse handler om å lede mennesker gjennom endring, inkludert motstand og usikkerhet.',
    },
    {
      question: 'Hvem utviklet 8-trinnsmodellen for endring?',
      options: [
        'John Kotter',
        'Michael Porter',
        'Edgar Schein',
        'Igor Ansoff',
      ],
      explanation: 'Kotters 8-trinnsmodell beskriver steg for vellykket endring.',
    },
    {
      question: 'Hva er ofte første trinn i Kotters modell?',
      options: [
        'Å skape en følelse av nødvendighet (urgency)',
        'Å feire seieren',
        'Å avslutte prosjektet',
        'Å si opp ansatte',
      ],
      explanation: 'Kotter starter med å etablere en opplevelse av at endringen haster (urgency).',
    },
    {
      question: 'Hva er organisasjonskultur?',
      options: [
        'Felles verdier, normer og atferdsmønstre – «slik vi gjør ting her»',
        'Bedriftens regnskapsskjema',
        'En lov om arbeidstid',
        'Et organisasjonskart',
      ],
      explanation: 'Organisasjonskultur er de felles, ofte usynlige verdiene og normene som styrer atferd og beslutninger.',
    },
    {
      question: 'Ifølge Schein har organisasjonskultur tre nivåer. Hvilke?',
      options: [
        'Synlige artefakter, uttrykte verdier og grunnleggende antakelser',
        'Debet, kredit og balanse',
        'Plan, Do og Check',
        'Marked, produkt og pris',
      ],
      explanation: 'Schein beskriver artefakter (synlige), uttrykte verdier og grunnleggende antakelser som tre kulturnivåer.',
    },
  ],
  'okonomi-drift-8-1': [
    {
      question: 'Hva er samfunnsansvar (CSR)?',
      options: [
        'Bedriftens frivillige integrering av sosiale og miljømessige hensyn i driften',
        'Plikten til å betale skatt',
        'Reglene for dobbel bokføring',
        'En metode for prissetting',
      ],
      explanation: 'CSR handler om å ta ansvar utover lovens minstekrav i samhandling med interessentene.',
    },
    {
      question: 'Hva er en interessent (stakeholder)?',
      options: [
        'Enhver som påvirkes av eller kan påvirke bedriftens virksomhet',
        'Bare bedriftens eiere',
        'Bare myndighetene',
        'Bare konkurrentene',
      ],
      explanation: 'Interessenter omfatter ansatte, kunder, leverandører, eiere, myndigheter og lokalsamfunn.',
    },
    {
      question: 'Hva betyr det at CSR er «frivillig»?',
      options: [
        'Det går utover det loven krever',
        'Det er ulovlig',
        'Det er pålagt av staten',
        'Det gjelder bare børsnoterte selskaper',
      ],
      explanation: 'CSR innebærer hensyn bedriften tar utover lovpålagte minstekrav.',
    },
    {
      question: 'Hvilke to hovedhensyn integreres typisk i CSR-arbeidet?',
      options: [
        'Sosiale og miljømessige hensyn',
        'Bare økonomiske hensyn',
        'Bare juridiske hensyn',
        'Bare tekniske hensyn',
      ],
      explanation: 'CSR kombinerer sosiale og miljømessige hensyn i den daglige driften.',
    },
    {
      question: 'Hvorfor er interessentkartlegging viktig for CSR?',
      options: [
        'Den viser hvem som berøres og bør tas hensyn til i beslutningene',
        'Den fastsetter bedriftens overskudd',
        'Den beregner mva.',
        'Den erstatter regnskapet',
      ],
      explanation: 'For å ta samfunnsansvar må bedriften vite hvem som påvirkes og hvilke hensyn som må ivaretas.',
    },
  ],
  'okonomi-drift-8-2': [
    {
      question: 'Hva er miljøledelse?',
      options: [
        'Den delen av ledelsessystemet som styrer og forbedrer bedriftens miljøprestasjoner',
        'En metode for å beregne lønn',
        'En type markedsføring',
        'Et regnskapsprinsipp',
      ],
      explanation: 'Miljøledelse innebærer systematisk planlegging, gjennomføring, kontroll og forbedring av miljøarbeidet.',
    },
    {
      question: 'Hva er en livssyklusanalyse (LCA)?',
      options: [
        'En vurdering av miljøpåvirkningen til et produkt gjennom hele levetiden',
        'En analyse av kundenes alder',
        'En vurdering av bedriftens lønnsnivå',
        'En markedsundersøkelse',
      ],
      explanation: 'LCA ser på miljøpåvirkning fra råvareutvinning via produksjon og bruk til avfall – «fra vugge til grav».',
    },
    {
      question: 'Hva menes med «fra vugge til grav» i en LCA?',
      options: [
        'Hele produktets løp fra råvare til avfallshåndtering',
        'Bare produksjonsfasen',
        'Bare salgsfasen',
        'Bare bruksfasen',
      ],
      explanation: 'Uttrykket dekker alle faser fra utvinning av råvarer til produktet kastes.',
    },
    {
      question: 'Hva er målet med systematisk miljøledelse?',
      options: [
        'Å forbedre miljøprestasjonene gjennom planlegging, kontroll og kontinuerlig forbedring',
        'Å øke avfallsmengden',
        'Å skjule utslipp',
        'Å maksimere ressursbruken',
      ],
      explanation: 'Miljøledelse skal systematisk redusere miljøbelastningen og forbedre prestasjonene over tid.',
    },
    {
      question: 'Hvorfor er LCA nyttig for produktutvikling?',
      options: [
        'Den synliggjør hvor i livsløpet miljøbelastningen er størst, slik at den kan reduseres',
        'Den fastsetter salgsprisen',
        'Den beregner skatten',
        'Den måler kundetilfredshet',
      ],
      explanation: 'Ved å finne hvor belastningen er størst, kan man målrette tiltak for å redusere miljøpåvirkningen.',
    },
  ],
  'okonomi-drift-8-3': [
    {
      question: 'Hva er korrupsjon?',
      options: [
        'Misbruk av makt eller posisjon for personlig vinning, som bestikkelser',
        'En lovlig form for markedsføring',
        'En type regnskapsføring',
        'En lederstil',
      ],
      explanation: 'Korrupsjon er ulovlig misbruk av posisjon for egen vinning og reguleres av straffeloven.',
    },
    {
      question: 'Hva betyr varsling i arbeidslivet?',
      options: [
        'At en arbeidstaker melder fra om kritikkverdige forhold på arbeidsplassen',
        'At ledelsen varsler om nye produkter',
        'At man sier opp jobben',
        'At man ber om lønnsøkning',
      ],
      explanation: 'Varsling er å melde fra om lovbrudd, fare eller korrupsjon; ansatte er beskyttet mot gjengjeldelse.',
    },
    {
      question: 'Hva sier arbeidsmiljøloven om varslere?',
      options: [
        'De har rett til å varsle og er beskyttet mot gjengjeldelse',
        'De kan alltid sies opp',
        'De må betale et gebyr',
        'De mister alle rettigheter',
      ],
      explanation: 'Loven gir rett til å varsle om kritikkverdige forhold og verner varsleren mot gjengjeldelse.',
    },
    {
      question: 'Hvorfor er etikk viktig i næringslivet?',
      options: [
        'Det bygger tillit og omdømme og reduserer risiko for lovbrudd',
        'Det har ingen praktisk betydning',
        'Det øker alltid kostnadene uten nytte',
        'Det er forbudt å tenke på',
      ],
      explanation: 'God forretningsetikk styrker tillit og omdømme og forebygger korrupsjon og lovbrudd.',
    },
    {
      question: 'Hvilket lovverk regulerer korrupsjon i Norge?',
      options: [
        'Straffeloven',
        'Markedsføringsloven',
        'Forbrukerkjøpsloven',
        'Regnskapsloven',
      ],
      explanation: 'Korrupsjon er straffbart og reguleres av straffeloven.',
    },
  ],
  'okonomi-drift-8-4': [
    {
      question: 'Hva er sirkulær økonomi?',
      options: [
        'Et system der ressurser holdes i bruk lengst mulig gjennom gjenbruk og resirkulering',
        'Et system der alt kastes etter én gangs bruk',
        'En metode for prissetting',
        'En type lederskap',
      ],
      explanation: 'Sirkulær økonomi minimerer avfall og maksimerer verdien av ressursene gjennom gjenbruk, reparasjon og resirkulering.',
    },
    {
      question: 'Hva er øverst (mest ønsket) i avfallshierarkiet?',
      options: [
        'Forebygge avfall',
        'Deponere avfall',
        'Energigjenvinne',
        'Resirkulere',
      ],
      explanation: 'Avfallshierarkiet prioriterer å forebygge avfall høyest og deponering lavest.',
    },
    {
      question: 'Hva er riktig prioriteringsrekkefølge i avfallshierarkiet?',
      options: [
        'Forebygge, gjenbruke, resirkulere, energigjenvinne, deponere',
        'Deponere, energigjenvinne, resirkulere, gjenbruke, forebygge',
        'Resirkulere, deponere, forebygge, gjenbruke, energigjenvinne',
        'Gjenbruke, deponere, forebygge, resirkulere, energigjenvinne',
      ],
      explanation: 'Rekkefølgen fra mest til minst ønsket er: forebygge, gjenbruke, resirkulere, energigjenvinne, deponere.',
    },
    {
      question: 'Hva er målet med sirkulær økonomi?',
      options: [
        'Å minimere avfall og maksimere verdien av ressursene',
        'Å produsere mest mulig engangsprodukter',
        'Å øke deponeringen',
        'Å redusere gjenbruk',
      ],
      explanation: 'Sirkulær økonomi vil holde ressurser i kretsløp lengst mulig for å redusere avfall.',
    },
    {
      question: 'Hvorfor regnes deponering som minst ønskelig?',
      options: [
        'Ressursene går tapt og kan ikke brukes om igjen',
        'Det er den dyreste metoden alltid',
        'Det er forbudt ved lov',
        'Det gir høyest gjenbruk',
      ],
      explanation: 'Ved deponering tas ikke ressursene i bruk igjen, derfor er det nederst i hierarkiet.',
    },
  ],
  'okonomi-drift-8-5': [
    {
      question: 'Hva er en bærekraftsrapport?',
      options: [
        'Et dokument der bedriften rapporterer på miljømessige, sosiale og økonomiske prestasjoner',
        'En oversikt over bedriftens lager',
        'En markedsføringsbrosjyre',
        'En arbeidsavtale',
      ],
      explanation: 'Bærekraftsrapporten gir interessentene innsikt i bedriftens bærekraftsarbeid.',
    },
    {
      question: 'Hva står ESG for?',
      options: [
        'Environmental, Social and Governance',
        'Economy, Sales and Growth',
        'Energy, Service and Goods',
        'Ethics, Standards and Goals',
      ],
      explanation: 'ESG = miljø (Environmental), sosiale forhold (Social) og eierstyring (Governance).',
    },
    {
      question: 'Hvem bruker typisk ESG-kriterier?',
      options: [
        'Investorer og analytikere for å vurdere bærekraft og risiko',
        'Bare bedriftens vaktmester',
        'Bare kundene i butikken',
        'Bare leverandørene',
      ],
      explanation: 'ESG-kriterier brukes av investorer og analytikere for å vurdere bærekraftsprestasjon og risikoprofil.',
    },
    {
      question: 'Hva er hensikten med en miljøsertifisering som Miljøfyrtårn?',
      options: [
        'Å dokumentere og forbedre bedriftens systematiske miljøarbeid',
        'Å øke salgsprisen automatisk',
        'Å unngå å betale skatt',
        'Å fjerne kravet om regnskap',
      ],
      explanation: 'Miljøsertifisering bekrefter at bedriften jobber systematisk med miljøforbedringer.',
    },
    {
      question: 'Hva gir bærekraftsrapportering interessentene?',
      options: [
        'Innsikt i hvordan bedriften jobber med bærekraft',
        'Bedriftens passord til banken',
        'En garantert avkastning',
        'Konkurrentenes regnskap',
      ],
      explanation: 'Rapporten gjør bedriftens miljømessige, sosiale og økonomiske prestasjoner synlige for interessentene.',
    },
  ],

};

export default quizData_okonomi_drift;
