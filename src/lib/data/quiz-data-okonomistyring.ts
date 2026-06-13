import type { QuizQuestion } from './quiz-data';

const quizData_okonomistyring: Record<string, QuizQuestion[]> = {
  'okonomistyring-1-1': [
    {
      question: 'Hva er den vanlige definisjonen av økonomi?',
      options: [
        'Læren om hvordan mennesker og samfunn bruker knappe ressurser med alternative anvendelser',
        'Læren om hvordan banker setter renter',
        'Læren om hvordan staten krever inn skatt',
        'Læren om hvordan bedrifter markedsfører produkter',
      ],
      explanation: 'Økonomi handler om valg under knapphet: ressursene er begrensede og kan brukes til ulike formål.',
    },
    {
      question: 'Hva er alternativkostnaden ved et valg?',
      options: [
        'Verdien av det beste alternativet du må gi opp',
        'Summen av alle alternativene du ga opp',
        'Pengebeløpet du faktisk betalte',
        'Den billigste av mulighetene du hadde',
      ],
      explanation: 'Alternativkostnad er verdien av det nest beste alternativet – det du ofrer ved å velge noe annet.',
    },
    {
      question: 'Marte velger en bok til 500 kr i stedet for kino til 150 kr. Hva inngår i alternativkostnaden?',
      options: [
        'Kinoopplevelsen med venner pluss de 350 kr hun kunne brukt på noe annet',
        'Bare de 500 kr boken kostet',
        'Bare kinobilletten på 150 kr',
        'Summen 500 + 150 = 650 kr',
      ],
      explanation: 'Alternativkostnaden er det beste alternativet hun gir opp: kinoopplevelsen og de 350 kr (500−150) hun ellers hadde igjen.',
    },
    {
      question: 'Hvilken problemstilling er makroøkonomisk?',
      options: [
        'Arbeidsledigheten i Norge er 3,5 %',
        'En bedrift vurderer å ansette flere medarbeidere',
        'Strømprisen i ett marked stiger på grunn av tørke',
        'En familie planlegger månedsbudsjettet sitt',
      ],
      explanation: 'Makroøkonomi ser på økonomien som helhet, som samlet arbeidsledighet. De øvrige gjelder enkeltaktører (mikro).',
    },
    {
      question: 'Hvorfor oppstår behovet for å gjøre økonomiske valg?',
      options: [
        'Fordi ressursene er knappe i forhold til behovene',
        'Fordi staten pålegger oss å velge',
        'Fordi alle goder er gratis',
        'Fordi penger ikke har noen verdi',
      ],
      explanation: 'Knapphet betyr at ressursene ikke strekker til for alle ønsker, derfor må vi prioritere og velge.',
    },
  ],
  'okonomistyring-1-2': [
    {
      question: 'Hva er et regnskap?',
      options: [
        'En systematisk registrering, bearbeiding og formidling av økonomisk informasjon om en virksomhet',
        'En liste over ansatte i bedriften',
        'En markedsføringsplan for neste år',
        'En oversikt over konkurrentenes priser',
      ],
      explanation: 'Regnskapet samler og presenterer økonomisk informasjon om virksomhetens inntekter, kostnader, eiendeler og gjeld.',
    },
    {
      question: 'Hva innebærer bokføringsplikt?',
      options: [
        'Alle som driver økonomisk virksomhet må registrere og dokumentere økonomiske hendelser løpende',
        'Bare aksjeselskaper må føre regnskap',
        'Man kan vente med å føre regnskap til skattemeldingen leveres',
        'Bare bedrifter med over 50 ansatte må føre regnskap',
      ],
      explanation: 'Bokføringsplikten gjelder alle med økonomisk virksomhet og krever løpende og systematisk registrering.',
    },
    {
      question: 'Hvem er finansregnskapet (det eksterne regnskapet) først og fremst laget for?',
      options: [
        'Eksterne brukere som eiere, långivere og myndigheter',
        'Kun bedriftens daglige leder',
        'Kun produksjonsavdelingen internt',
        'Konkurrerende bedrifter',
      ],
      explanation: 'Finansregnskapet er eksternt og retter seg mot brukere utenfor bedriften, som eiere, banker og Skatteetaten.',
    },
    {
      question: 'Hva er typisk innhold i et driftsregnskap (internregnskap)?',
      options: [
        'Lønnsomhet og omsetning fordelt per produktlinje eller avdeling',
        'Kun total omsetning for hele bedriften',
        'Bare balansens eiendeler og gjeld',
        'Selvangivelsen til eieren',
      ],
      explanation: 'Driftsregnskapet er internt og brukes til styring, for eksempel lønnsomhet per produkt eller avdeling.',
    },
    {
      question: 'Hvorfor trenger en liten nettbutikk regnskap selv om omsetningen virker grei?',
      options: [
        'For å se om den faktisk går med overskudd og kunne betale riktig skatt',
        'For å markedsføre seg bedre på sosiale medier',
        'For å slippe å betale leverandørene',
        'For å øke prisene uten begrunnelse',
      ],
      explanation: 'Uten regnskap vet man ikke hva som er igjen etter kostnader, og man kan ikke dokumentere inntekt og kostnader til skattemyndighetene.',
    },
  ],
  'okonomistyring-1-3': [
    {
      question: 'Hva er et bilag i regnskapssammenheng?',
      options: [
        'Et dokument som beviser at en økonomisk hendelse har funnet sted',
        'En oppsummering av årets resultat',
        'En liste over bedriftens ansatte',
        'Et budsjett for kommende år',
      ],
      explanation: 'Et bilag (faktura, kvittering, lønnslipp osv.) dokumenterer en økonomisk hendelse og er grunnlaget for bokføringen.',
    },
    {
      question: 'Hvilket av disse er et gyldig bilag?',
      options: [
        'En faktura mottatt på e-post som PDF med dato, beløp og selger',
        'Et notat: "Kjøpte kontorutstyr for ca. 200 kr i går"',
        'Et muntlig løfte om betaling',
        'En tekstmelding uten beløp',
      ],
      explanation: 'Digitale fakturaer er like gyldige som papir så lenge de inneholder nødvendig informasjon. Notatet mangler nøyaktig beløp, dato og selger.',
    },
    {
      question: 'Hva er en kontoplan?',
      options: [
        'Et systematisk nummersystem for hvilke kontoer bedriften skal bruke i bokføringen',
        'En oversikt over bedriftens bankkontoer hos ulike banker',
        'En plan for når regninger skal betales',
        'En liste over kundenes kontonumre',
      ],
      explanation: 'Kontoplanen ordner kontoene i et systematisk nummersystem (kontoklasser) som styrer bokføringen.',
    },
    {
      question: 'I en standard norsk kontoplan: hvilken kontoklasse hører salgsinntekter typisk til (kontonr. 3000–3999)?',
      options: [
        'Inntektsklassen (klasse 3)',
        'Driftskostnader (klasse 6/7)',
        'Omløpsmidler (klasse 1/2)',
        'Egenkapital (klasse 2)',
      ],
      explanation: 'Salgsinntekter føres på kontonummer 3000–3999, som er inntektsklassen i standard kontoplan.',
    },
    {
      question: 'Et banklån som skal tilbakebetales om 5 år hører til hvilken type post?',
      options: [
        'Langsiktig gjeld',
        'Omløpsmiddel',
        'Driftsinntekt',
        'Egenkapital',
      ],
      explanation: 'Gjeld med forfall lenger frem enn ett år klassifiseres som langsiktig gjeld.',
    },
  ],
  'okonomistyring-1-4': [
    {
      question: 'Hva er grunnregelen i dobbel bokføring?',
      options: [
        'Hver transaksjon føres som debet på én konto og kredit på en annen, og sum debet = sum kredit',
        'Hver transaksjon føres bare én gang',
        'Alle transaksjoner føres som debet',
        'Debet og kredit trenger ikke være like store',
      ],
      explanation: 'I dobbel bokføring registreres hver hendelse to ganger slik at total debet alltid er lik total kredit.',
    },
    {
      question: 'En bedrift kjøper kontorrekvisita for 2 000 kr og betaler fra banken. Hvordan bokføres dette?',
      options: [
        'Debet kontorrekvisita 2 000 kr, kredit bank 2 000 kr',
        'Debet bank 2 000 kr, kredit kontorrekvisita 2 000 kr',
        'Debet kontorrekvisita 2 000 kr, kredit egenkapital 2 000 kr',
        'Debet bank 2 000 kr, kredit egenkapital 2 000 kr',
      ],
      explanation: 'Kostnaden (kontorrekvisita) øker i debet, mens bank (eiendel) reduseres i kredit. Debet = kredit = 2 000 kr.',
    },
    {
      question: 'Hva er en T-konto?',
      options: [
        'En grafisk fremstilling av en konto med debet til venstre og kredit til høyre',
        'En konto som bare brukes til skatt',
        'En bankkonto for transaksjoner over 1000 kr',
        'En konto for egenkapital',
      ],
      explanation: 'T-kontoen illustrerer en konto med debetsiden til venstre og kreditsiden til høyre.',
    },
    {
      question: 'Ved salg av varer på kreditt for 10 000 kr, hvordan føres det?',
      options: [
        'Debet kundefordringer 10 000 kr, kredit salgsinntekt 10 000 kr',
        'Debet salgsinntekt 10 000 kr, kredit kundefordringer 10 000 kr',
        'Debet bank 10 000 kr, kredit salgsinntekt 10 000 kr',
        'Debet kundefordringer 10 000 kr, kredit bank 10 000 kr',
      ],
      explanation: 'Kundefordringer (eiendel) øker i debet og salgsinntekten øker i kredit. Pengene kommer inn på bank først senere.',
    },
    {
      question: 'Eier setter inn 100 000 kr i egenkapital på bedriftens bankkonto. Hvordan bokføres dette?',
      options: [
        'Debet bank 100 000 kr, kredit egenkapital 100 000 kr',
        'Debet egenkapital 100 000 kr, kredit bank 100 000 kr',
        'Debet bank 100 000 kr, kredit gjeld 100 000 kr',
        'Debet kostnad 100 000 kr, kredit bank 100 000 kr',
      ],
      explanation: 'Bank (eiendel) øker i debet, og egenkapitalen øker i kredit.',
    },
  ],
  'okonomistyring-1-5': [
    {
      question: 'Hvordan lyder regnskapsligningen?',
      options: [
        'Eiendeler = Egenkapital + Gjeld',
        'Eiendeler = Egenkapital − Gjeld',
        'Egenkapital = Eiendeler + Gjeld',
        'Gjeld = Eiendeler + Egenkapital',
      ],
      explanation: 'Alt bedriften eier (eiendeler) er finansiert av egenkapital eller gjeld: E = EK + G.',
    },
    {
      question: 'En bedrift har inventar 100 000 kr og bank 400 000 kr, egenkapital 300 000 kr og lån 200 000 kr. Stemmer regnskapsligningen?',
      options: [
        'Ja: 500 000 = 300 000 + 200 000',
        'Nei: eiendelene er for høye',
        'Ja: 500 000 = 100 000 + 400 000',
        'Nei: egenkapitalen er for lav',
      ],
      explanation: 'Sum eiendeler = 100 000 + 400 000 = 500 000 kr, som er lik EK + gjeld = 300 000 + 200 000 = 500 000 kr.',
    },
    {
      question: 'Hva betyr god regnskapsskikk (GRS)?',
      options: [
        'Uskrevne normer og praksis som utfyller regnskapsloven',
        'En egen lov vedtatt av Stortinget hvert år',
        'Et regneark levert av Skatteetaten',
        'En frivillig sertifisering for revisorer',
      ],
      explanation: 'GRS er allment akseptert praksis og normer for regnskapsføring som utfyller lovverket.',
    },
    {
      question: 'Varer selges og leveres i desember, men betales i januar. Når skal inntekten bokføres?',
      options: [
        'I desember, etter opptjeningsprinsippet',
        'I januar, når pengene kommer inn',
        'Fordeles likt på desember og januar',
        'Først ved årsoppgjøret neste år',
      ],
      explanation: 'Opptjeningsprinsippet sier at inntekten bokføres når den er opptjent (varen levert), ikke når betalingen mottas.',
    },
    {
      question: 'Hva uttrykker forsiktighetsprinsippet i regnskapet?',
      options: [
        'Urealisert tap skal kostnadsføres, mens urealisert gevinst ikke inntektsføres',
        'Alle fremtidige gevinster skal bokføres straks',
        'Man skal alltid vise størst mulig overskudd',
        'Kostnader skal utsettes så lenge som mulig',
      ],
      explanation: 'Forsiktighetsprinsippet tilsier å ta med sannsynlige tap, men ikke å bokføre gevinster før de er realisert.',
    },
  ],
  'okonomistyring-2-1': [
    {
      question: 'Hva viser resultatregnskapet?',
      options: [
        'Bedriftens inntekter og kostnader i en periode, og om den gikk med over- eller underskudd',
        'Bedriftens eiendeler og gjeld på et tidspunkt',
        'Bedriftens kontantbeholdning akkurat nå',
        'Antall ansatte gjennom året',
      ],
      explanation: 'Resultatregnskapet stiller opp periodens inntekter og kostnader og viser årsresultatet.',
    },
    {
      question: 'Hvordan beregnes driftsresultatet?',
      options: [
        'Driftsinntekter − Driftskostnader',
        'Driftsinntekter + Finansinntekter',
        'Salgsinntekter − Skatt',
        'Driftskostnader − Finanskostnader',
      ],
      explanation: 'Driftsresultatet = driftsinntekter − driftskostnader og viser om kjernevirksomheten er lønnsom.',
    },
    {
      question: 'Hva er en finanspost i resultatregnskapet?',
      options: [
        'Renteinntekter og rentekostnader som ikke kommer fra kjernevirksomheten',
        'Salgsinntekter fra hovedproduktet',
        'Varekostnaden for solgte varer',
        'Lønn til produksjonsarbeidere',
      ],
      explanation: 'Finansposter er finansielle inntekter og kostnader (renter, utbytte) utenfor den ordinære driften.',
    },
    {
      question: 'Hvordan finner man årsresultatet?',
      options: [
        'Driftsresultat + Finansresultat (og deretter eventuelt skatt)',
        'Driftsinntekter − Varekostnad',
        'Salgsinntekter − Lønnskostnader',
        'Finansinntekter − Driftskostnader',
      ],
      explanation: 'Årsresultatet er driftsresultat pluss finansresultat; for skattepliktige foretak trekkes skatt fra til slutt.',
    },
    {
      question: 'En bedrift har salgsinntekter 1 000 000 kr, varekostnad 400 000 kr og andre driftskostnader 350 000 kr. Hva er driftsresultatet?',
      options: [
        '250 000 kr',
        '600 000 kr',
        '650 000 kr',
        '350 000 kr',
      ],
      explanation: 'Driftsresultat = 1 000 000 − 400 000 − 350 000 = 250 000 kr.',
    },
  ],
  'okonomistyring-2-2': [
    {
      question: 'Hva viser balansen?',
      options: [
        'Bedriftens eiendeler, egenkapital og gjeld på et bestemt tidspunkt',
        'Bedriftens inntekter og kostnader gjennom året',
        'Antall solgte enheter i perioden',
        'Endringer i markedsandel',
      ],
      explanation: 'Balansen er et øyeblikksbilde av hva bedriften eier og hvordan det er finansiert, vanligvis per 31.12.',
    },
    {
      question: 'Hva kjennetegner anleggsmidler?',
      options: [
        'Eiendeler bedriften skal eie og bruke i mer enn ett år',
        'Eiendeler som omgjøres til penger innen ett år',
        'Bare bedriftens bankinnskudd',
        'Kortsiktig gjeld til leverandører',
      ],
      explanation: 'Anleggsmidler (bygninger, maskiner, inventar) er varige eiendeler ment for langsiktig bruk.',
    },
    {
      question: 'Hvordan beregnes egenkapitalen ut fra balansen?',
      options: [
        'Eiendeler − Gjeld',
        'Eiendeler + Gjeld',
        'Gjeld − Eiendeler',
        'Omløpsmidler − Anleggsmidler',
      ],
      explanation: 'Egenkapital er nettoverdien: eiendeler minus gjeld.',
    },
    {
      question: 'Hvordan beregnes likviditetsgrad 2?',
      options: [
        'Omløpsmidler / Kortsiktig gjeld',
        'Anleggsmidler / Langsiktig gjeld',
        'Egenkapital / Totalkapital',
        'Kortsiktig gjeld / Omløpsmidler',
      ],
      explanation: 'Likviditetsgrad 2 = omløpsmidler / kortsiktig gjeld og måler evnen til å dekke kortsiktige forpliktelser.',
    },
    {
      question: 'En bedrift har eiendeler på 800 000 kr og samlet gjeld på 500 000 kr. Hvor stor er egenkapitalen?',
      options: [
        '300 000 kr',
        '1 300 000 kr',
        '500 000 kr',
        '800 000 kr',
      ],
      explanation: 'Egenkapital = eiendeler − gjeld = 800 000 − 500 000 = 300 000 kr.',
    },
  ],
  'okonomistyring-2-3': [
    {
      question: 'Hva er den viktigste koblingen mellom resultatregnskapet og balansen?',
      options: [
        'Årsresultatet overføres til egenkapitalen i balansen',
        'Balansen overføres til resultatregnskapet',
        'Varekostnaden flyttes til langsiktig gjeld',
        'Det er ingen sammenheng mellom dem',
      ],
      explanation: 'Periodens årsresultat endrer egenkapitalen: overskudd øker den, underskudd reduserer den.',
    },
    {
      question: 'Hvordan finner man egenkapitalen ved slutten av året?',
      options: [
        'EK start + Årsresultat + Innskudd − Uttak',
        'EK start − Årsresultat',
        'Eiendeler + Gjeld',
        'EK start + Gjeld',
      ],
      explanation: 'Sluttbalansens egenkapital = inngående EK justert for årsresultat, kapitalinnskudd og uttak.',
    },
    {
      question: 'EK ved årets start er 200 000 kr, årsresultatet er 80 000 kr og eier tar ut 30 000 kr. Hva blir EK ved slutten?',
      options: [
        '250 000 kr',
        '310 000 kr',
        '150 000 kr',
        '280 000 kr',
      ],
      explanation: 'EK slutt = 200 000 + 80 000 − 30 000 = 250 000 kr.',
    },
    {
      question: 'Hvilken forskjell fanger periodisering opp?',
      options: [
        'Forskjellen mellom når inntekter/kostnader registreres og når pengene betales',
        'Forskjellen mellom kunder og leverandører',
        'Forskjellen mellom debet og kredit',
        'Forskjellen mellom bank og kasse',
      ],
      explanation: 'Periodisering plasserer inntekter og kostnader i riktig periode uavhengig av betalingstidspunktet.',
    },
    {
      question: 'Hvorfor gjøres avskrivninger ved årsoppgjøret?',
      options: [
        'For å fordele anskaffelseskosten på et driftsmiddel over levetiden',
        'For å øke egenkapitalen direkte',
        'For å betale ut utbytte',
        'For å redusere kundefordringene',
      ],
      explanation: 'Avskrivning kostnadsfører verdifallet på varige driftsmidler over de årene de brukes.',
    },
  ],
  'okonomistyring-2-4': [
    {
      question: 'Hva er årsoppgjøret?',
      options: [
        'Prosessen der bedriften avslutter regnskapet for året og lager årsregnskapet',
        'Den månedlige lønnsutbetalingen',
        'Innkjøp av varer til neste år',
        'En markedsundersøkelse ved årsskiftet',
      ],
      explanation: 'Ved årsoppgjøret avstemmes kontoer og det gjøres justeringer før årsregnskapet ferdigstilles.',
    },
    {
      question: 'Hva er formålet med avskrivninger?',
      options: [
        'Å fordele anskaffelseskosten på et driftsmiddel utover levetiden',
        'Å øke salgsinntektene',
        'Å redusere skattefradraget for renter',
        'Å fjerne gjeld fra balansen',
      ],
      explanation: 'Avskrivninger kostnadsfører verdifallet jevnt over driftsmiddelets levetid.',
    },
    {
      question: 'Hvordan beregnes varekostnaden ved hjelp av varelageret?',
      options: [
        'IB varelager + Varekjøp − UB varelager',
        'UB varelager + Varekjøp − IB varelager',
        'IB varelager − Varekjøp + UB varelager',
        'Varekjøp − IB varelager − UB varelager',
      ],
      explanation: 'Varekostnad = inngående beholdning + varekjøp − utgående beholdning.',
    },
    {
      question: 'IB varelager er 50 000 kr, varekjøp 300 000 kr og UB varelager 70 000 kr. Hva er varekostnaden?',
      options: [
        '280 000 kr',
        '320 000 kr',
        '420 000 kr',
        '250 000 kr',
      ],
      explanation: 'Varekostnad = 50 000 + 300 000 − 70 000 = 280 000 kr.',
    },
    {
      question: 'Hva er forskuddsbetalte kostnader ved periodisering?',
      options: [
        'Kostnader betalt i år, men som gjelder neste år; føres som omløpsmiddel',
        'Kostnader som aldri skal bokføres',
        'Inntekter som mottas på forskudd',
        'Gjeld til leverandører ved årsslutt',
      ],
      explanation: 'Forskuddsbetalte kostnader gjelder en fremtidig periode og balanseføres som omløpsmiddel til de påløper.',
    },
  ],
  'okonomistyring-2-5': [
    {
      question: 'Hvilken lov er den viktigste for regnskapsføring i Norge?',
      options: [
        'Regnskapsloven',
        'Arbeidsmiljøloven',
        'Markedsføringsloven',
        'Forbrukerkjøpsloven',
      ],
      explanation: 'Regnskapsloven (sammen med bokføringsloven) regulerer hvordan regnskap skal føres og rapporteres.',
    },
    {
      question: 'Hva er bokføringsplikten?',
      options: [
        'Plikten alle virksomheter har til å føre regnskap',
        'Plikten til å betale moms hver måned',
        'Plikten til å ansette en revisor',
        'Plikten til å markedsføre seg',
      ],
      explanation: 'Bokføringsplikten innebærer at alle bokføringspliktige virksomheter må føre regnskap etter loven.',
    },
    {
      question: 'Hva er Altinn i denne sammenhengen?',
      options: [
        'En nasjonal digital portal for innlevering av blant annet skattemelding og årsregnskap',
        'En privat regnskapsbank',
        'En lov om merverdiavgift',
        'En internasjonal revisjonsstandard',
      ],
      explanation: 'Altinn brukes til digital rapportering til myndighetene, som skattemelding og innlevering av årsregnskap.',
    },
    {
      question: 'Hva utfyller god regnskapsskikk (GRS) i forhold til regnskapsloven?',
      options: [
        'Den gir mer detaljerte normer og standarder for hvordan regnskapet skal føres',
        'Den opphever regnskapsloven',
        'Den gjelder bare for utenlandske selskaper',
        'Den erstatter behovet for bilag',
      ],
      explanation: 'GRS supplerer loven med mer detaljerte regler, blant annet gjennom standarder fra Norsk RegnskapsStiftelse.',
    },
    {
      question: 'Hva kan være en konsekvens av brudd på regnskapsloven?',
      options: [
        'Sanksjoner som følge av manglende eller feil regnskapsføring og brudd på oppbevaringsplikten',
        'Automatisk høyere salgsinntekter',
        'Lavere lønnskostnader',
        'Fritak for skatt',
      ],
      explanation: 'Brudd som manglende regnskapsføring eller brudd på oppbevaringsplikten kan gi alvorlige reaksjoner og straff.',
    },
  ],

  'oks-3-1': [
    {
      question: 'Hva er et budsjett?',
      options: [
        'En økonomisk plan for en fremtidig periode',
        'En oversikt over hva som har skjedd tidligere',
        'En liste over bedriftens eiendeler akkurat nå',
        'En rapport til skattemyndighetene',
      ],
      explanation: 'Et budsjett er en økonomisk plan for en fremtidig periode, vanligvis ett år.',
    },
    {
      question: 'Hva er hovedforskjellen mellom budsjett og regnskap?',
      options: [
        'Budsjettet viser planlagte (fremtidige) tall, regnskapet viser faktiske (historiske) tall',
        'Budsjettet viser historiske tall, regnskapet planlagte tall',
        'De viser begge bare fremtidige tall',
        'Det er ingen forskjell',
      ],
      explanation: 'Regnskapet viser hva som har skjedd, mens budsjettet viser hva virksomheten forventer og planlegger fremover.',
    },
    {
      question: 'Hvilket formål oppfyller budsjettet når avdelinger må samarbeide om felles tall?',
      options: ['Koordinering', 'Motivasjon', 'Kontroll', 'Beskatning'],
      explanation: 'Koordinering innebærer at f.eks. salg, produksjon og innkjøp må samarbeide om budsjettet.',
    },
    {
      question: 'Hvilket formål handler om å sammenligne faktiske tall med budsjetterte tall for å oppdage avvik?',
      options: ['Kontroll', 'Planlegging', 'Motivasjon', 'Koordinering'],
      explanation: 'Kontroll innebærer å sammenligne faktiske og budsjetterte tall for å oppdage avvik og sette inn tiltak.',
    },
    {
      question: 'Hvorfor sies budsjettering å være et «fremtidsrettet» styringsverktøy?',
      options: [
        'Fordi det planlegger forventede inntekter og kostnader fremover',
        'Fordi det bare bygger på fjorårets regnskap',
        'Fordi det aldri endres',
        'Fordi det kun brukes ved årsslutt',
      ],
      explanation: 'Budsjettet er fremtidsrettet fordi det planlegger hva virksomheten forventer skal skje i kommende periode.',
    },
  ],

  'oks-3-2': [
    {
      question: 'Hva viser resultatbudsjettet?',
      options: [
        'Planlagte inntekter og kostnader for en periode',
        'Når pengene faktisk kommer inn og ut av konto',
        'Bedriftens eiendeler og gjeld på et tidspunkt',
        'Antall ansatte i bedriften',
      ],
      explanation: 'Resultatbudsjettet viser virksomhetens planlagte inntekter og kostnader, bygget opp som resultatregnskapet.',
    },
    {
      question: 'Hva får man når man trekker varekostnaden fra salgsinntektene?',
      options: ['Dekningsbidrag', 'Driftsresultat', 'Resultat før skatt', 'Egenkapital'],
      explanation: 'Salgsinntekter minus varekostnad gir dekningsbidraget i et resultatbudsjett for en handelsvirksomhet.',
    },
    {
      question: 'En handelsbedrift budsjetterer salgsinntekter på 800 000 kr og varekostnad på 300 000 kr. Hva blir dekningsbidraget?',
      options: ['500 000 kr', '1 100 000 kr', '300 000 kr', '800 000 kr'],
      explanation: 'Dekningsbidrag = 800 000 − 300 000 = 500 000 kr.',
    },
    {
      question: 'Bedriften har dekningsbidrag 500 000 kr og samlede andre driftskostnader (lønn, lokale, markedsføring m.m.) på 380 000 kr. Hva blir driftsresultatet?',
      options: ['120 000 kr', '880 000 kr', '500 000 kr', '380 000 kr'],
      explanation: 'Driftsresultat = dekningsbidrag − driftskostnader = 500 000 − 380 000 = 120 000 kr.',
    },
    {
      question: 'Hvorfor er resultatbudsjettet det mest brukte budsjettet i norske virksomheter?',
      options: [
        'Det gir en oversiktlig plan for inntekter, kostnader og forventet resultat',
        'Det viser nøyaktig når penger kommer inn på konto',
        'Det erstatter behovet for regnskap',
        'Det kreves bare av store børsnoterte selskaper',
      ],
      explanation: 'Resultatbudsjettet gir en samlet plan for inntekter, kostnader og forventet over- eller underskudd, og er derfor mest brukt.',
    },
  ],

  'oks-3-3': [
    {
      question: 'Hva viser et likviditetsbudsjett?',
      options: [
        'Når pengene faktisk kommer inn og ut av virksomheten',
        'Forventet over- eller underskudd for året',
        'Bedriftens samlede gjeld',
        'Hvor mange varer som skal produseres',
      ],
      explanation: 'Likviditetsbudsjettet viser inn- og utbetalinger – om bedriften har nok kontanter til å betale regningene.',
    },
    {
      question: 'Hvorfor kan en bedrift med budsjettert overskudd likevel få likviditetsproblemer?',
      options: [
        'Fordi inntekt ikke er det samme som innbetaling – pengene kommer inn senere',
        'Fordi overskudd alltid betyr mangel på penger',
        'Fordi varekostnaden er negativ',
        'Fordi likviditet og resultat alltid er like',
      ],
      explanation: 'En kunde kan kjøpe på kreditt slik at det er inntekt nå, men innbetalingen kommer senere – derfor kan likviditeten svikte.',
    },
    {
      question: 'Når registreres en innbetaling i likviditetsbudsjettet?',
      options: [
        'Når pengene faktisk kommer inn på kontoen',
        'Når varen leveres til kunden',
        'Når fakturaen skrives ut',
        'Når kunden bestiller',
      ],
      explanation: 'Likviditetsbudsjettet registrerer innbetalinger når pengene faktisk kommer inn på kontoen, ikke når inntekten opptjenes.',
    },
    {
      question: 'Hva er en typisk årsak til likviditetsproblemer?',
      options: [
        'Kundene betaler sent mens man selv må betale leverandører raskt',
        'Kundene betaler raskt og leverandørene sent',
        'Bedriften har for lave kostnader',
        'Bedriften har for høyt overskudd',
      ],
      explanation: 'Lang kredittid til kunder kombinert med kort kredittid til leverandører binder opp likviditeten.',
    },
    {
      question: 'Hvor ofte lages likviditetsbudsjettet vanligvis for å fange opp svingninger?',
      options: [
        'Måned for måned (eller uke for uke)',
        'Bare én gang hvert tiende år',
        'Bare ved oppstart av bedriften',
        'Bare når bedriften går konkurs',
      ],
      explanation: 'Likviditetsbudsjettet lages måned for måned (eller uke for uke) for å sikre nok penger på konto til enhver tid.',
    },
  ],

  'oks-3-4': [
    {
      question: 'Hvordan beregnes et avvik i budsjettkontroll?',
      options: [
        'Faktisk tall − budsjettert tall',
        'Budsjettert tall − faktisk tall',
        'Faktisk tall + budsjettert tall',
        'Faktisk tall × budsjettert tall',
      ],
      explanation: 'Avvik = faktisk tall − budsjett.',
    },
    {
      question: 'Budsjettert salg er 500 000 kr og faktisk salg ble 530 000 kr. Hva er avviket?',
      options: [
        '+30 000 kr (gunstig)',
        '−30 000 kr (ugunstig)',
        '+1 030 000 kr',
        '0 kr',
      ],
      explanation: 'Avvik = 530 000 − 500 000 = +30 000 kr. Høyere salg enn budsjettert er et gunstig avvik.',
    },
    {
      question: 'En bedrift budsjetterte lønnskostnader på 200 000 kr, men de faktiske ble 215 000 kr. Hva slags avvik er dette?',
      options: [
        'Negativt/ugunstig avvik på 15 000 kr',
        'Positivt/gunstig avvik på 15 000 kr',
        'Ingen avvik',
        'Gunstig avvik på 415 000 kr',
      ],
      explanation: 'Avvik = 215 000 − 200 000 = +15 000 kr i kostnad. Høyere kostnad enn budsjettert er ugunstig.',
    },
    {
      question: 'Hva er hovedhensikten med budsjettkontroll?',
      options: [
        'Å oppdage avvik tidlig og sette inn korrigerende tiltak',
        'Å lage et nytt budsjett hver dag',
        'Å unngå å føre regnskap',
        'Å skjule problemer for ledelsen',
      ],
      explanation: 'Budsjettkontroll lar ledelsen oppdage problemer tidlig, justere planer og lære hva som fungerer.',
    },
    {
      question: 'Hva betyr et gunstig avvik?',
      options: [
        'Høyere inntekt eller lavere kostnad enn budsjettert',
        'Alltid et høyere tall enn budsjett',
        'Alltid et lavere tall enn budsjett',
        'At det ikke finnes avvik for kostnader',
      ],
      explanation: 'Gunstige avvik er høyere inntekter ELLER lavere kostnader enn budsjettert – ikke bare høyere tall.',
    },
  ],

  'oks-3-5': [
    {
      question: 'Hva er et fleksibelt budsjett?',
      options: [
        'Et budsjett som justeres for faktisk aktivitetsnivå før avvik beregnes',
        'Et budsjett som aldri endres',
        'Et budsjett uten faste kostnader',
        'Et budsjett bare for store bedrifter',
      ],
      explanation: 'Et fleksibelt budsjett justeres for det faktiske aktivitetsnivået, slik at man sammenligner like volumer.',
    },
    {
      question: 'Hvorfor er det misvisende å sammenligne kostnader for 1200 produserte enheter med et budsjett for 1000 enheter?',
      options: [
        'Fordi de variable kostnadene naturlig øker med høyere volum',
        'Fordi de faste kostnadene forsvinner ved høyere volum',
        'Fordi inntektene da blir negative',
        'Fordi budsjett aldri kan sammenlignes med faktiske tall',
      ],
      explanation: 'Høyere produksjon gir høyere variable kostnader; et fleksibelt budsjett justerer for volum før avvik beregnes.',
    },
    {
      question: 'Hva kjennetegner et rullerende budsjett?',
      options: [
        'Budsjettet oppdateres løpende slik at man alltid budsjetterer et fast antall perioder fremover',
        'Budsjettet lages bare én gang og legges i en skuff',
        'Budsjettet gjelder bare for én dag',
        'Budsjettet inneholder bare faste kostnader',
      ],
      explanation: 'Rullerende budsjett oppdateres jevnlig slik at man alltid har f.eks. 12 måneder fremover budsjettert.',
    },
    {
      question: 'Hva er en sentral kritikk av tradisjonell budsjettering som Beyond Budgeting svarer på?',
      options: [
        'At den er for stiv og tidkrevende, og utdatert allerede når året starter',
        'At den er for fleksibel',
        'At den ikke bruker tall',
        'At den oppdateres for ofte',
      ],
      explanation: 'Tradisjonell budsjettering kritiseres for å være stiv og tidkrevende; Beyond Budgeting søker mer fleksible alternativer.',
    },
    {
      question: 'For å lage et fleksibelt budsjett må man skille mellom hvilke to kostnadstyper?',
      options: [
        'Faste og variable kostnader',
        'Direkte og finansielle kostnader',
        'Synlige og usynlige kostnader',
        'Gamle og nye kostnader',
      ],
      explanation: 'Man skiller faste kostnader (uavhengig av volum) fra variable kostnader (øker med volum) for å justere budsjettet.',
    },
  ],

  'oks-4-1': [
    {
      question: 'Hva kjennetegner faste kostnader?',
      options: [
        'De endres ikke når produksjonen eller omsetningen endres',
        'De øker proporsjonalt med produksjonen',
        'De forsvinner når bedriften produserer mindre',
        'De er alltid null',
      ],
      explanation: 'Faste kostnader (f.eks. husleie, forsikring) er like uansett produksjonsmengde.',
    },
    {
      question: 'Hvilket av disse er en typisk variabel kostnad?',
      options: [
        'Råvarer som går inn i produktet',
        'Husleie',
        'Årlig programvarelisens',
        'Avskrivninger på maskiner',
      ],
      explanation: 'Variable kostnader øker med produksjonen; råvarer er et klassisk eksempel. De andre er faste kostnader.',
    },
    {
      question: 'Et bakeri har husleie 25 000 kr og fast lederlønn 45 000 kr per måned. Hva er de samlede faste kostnadene?',
      options: ['70 000 kr', '25 000 kr', '45 000 kr', '20 000 kr'],
      explanation: 'Faste kostnader = 25 000 + 45 000 = 70 000 kr per måned.',
    },
    {
      question: 'En bedrift har faste kostnader 100 000 kr og variable kostnader 50 kr per enhet. Hva blir totale kostnader ved 2000 enheter?',
      options: ['200 000 kr', '150 000 kr', '100 000 kr', '250 000 kr'],
      explanation: 'Totale kostnader = faste + variable = 100 000 + (50 × 2000) = 100 000 + 100 000 = 200 000 kr.',
    },
    {
      question: 'Hvorfor er skillet mellom faste og variable kostnader grunnleggende i økonomistyring?',
      options: [
        'Fordi det viser hvordan kostnadene oppfører seg når produksjonen endres',
        'Fordi det bestemmer skattesatsen',
        'Fordi det avgjør antall ansatte',
        'Fordi det fastsetter aksjekursen',
      ],
      explanation: 'Å forstå hvordan kostnadene varierer med produksjonen er nødvendig for å drive lønnsomt og ta gode beslutninger.',
    },
  ],

  'oks-4-2': [
    {
      question: 'Hva er selvkostkalkylens formål?',
      options: [
        'Å beregne hva det koster å produsere én enhet, inkludert direkte og indirekte kostnader',
        'Å beregne bare de variable kostnadene',
        'Å beregne bedriftens skatt',
        'Å beregne aksjeutbytte',
      ],
      explanation: 'Selvkostkalkylen gir full kostdekning ved å inkludere både direkte og indirekte kostnader per enhet.',
    },
    {
      question: 'Hva er et eksempel på en direkte kostnad?',
      options: [
        'Råvarer som går direkte inn i produktet',
        'Smøreolje til maskiner',
        'Rengjøringsmidler',
        'Husleie for fabrikken',
      ],
      explanation: 'Direkte kostnader kan knyttes direkte til et bestemt produkt, f.eks. råvarer og direkte lønn.',
    },
    {
      question: 'Hvordan håndteres indirekte kostnader i selvkostkalkylen?',
      options: [
        'De fordeles på produktene ved hjelp av fordelingsnøkler',
        'De ignoreres helt',
        'De trekkes fra salgsinntekten direkte',
        'De regnes alltid som direkte kostnader',
      ],
      explanation: 'Indirekte kostnader kan ikke knyttes direkte til ett produkt og fordeles derfor med fordelingsnøkler.',
    },
    {
      question: 'Et produkt har direkte materialkostnad 120 kr, direkte lønn 80 kr og fordelte indirekte kostnader 50 kr. Hva er selvkosten per enhet?',
      options: ['250 kr', '200 kr', '170 kr', '300 kr'],
      explanation: 'Selvkost = 120 + 80 + 50 = 250 kr per enhet.',
    },
    {
      question: 'Hva brukes selvkostkalkylen blant annet til?',
      options: [
        'Prissetting og lønnsomhetsanalyser',
        'Å beregne ansattes ferie',
        'Å fastsette mva-satsen',
        'Å velge selskapsform',
      ],
      explanation: 'Selvkostkalkylen gir grunnlag for prissetting og vurdering av om produktet er lønnsomt.',
    },
  ],

  'oks-4-3': [
    {
      question: 'Hvordan beregnes dekningsbidraget (DB)?',
      options: [
        'Salgsinntekt − variable kostnader',
        'Salgsinntekt − faste kostnader',
        'Salgsinntekt − totale kostnader',
        'Variable kostnader − faste kostnader',
      ],
      explanation: 'Dekningsbidrag = salgsinntekt − variable kostnader. Det viser hvor mye som er igjen til å dekke faste kostnader og gi overskudd.',
    },
    {
      question: 'Et produkt selges for 450 kr og har variable kostnader 280 kr per enhet. Hva er dekningsbidraget per enhet?',
      options: ['170 kr', '730 kr', '280 kr', '450 kr'],
      explanation: 'DB per enhet = 450 − 280 = 170 kr.',
    },
    {
      question: 'Med DB på 170 kr per enhet, hva blir totalt dekningsbidrag ved salg av 1000 enheter?',
      options: ['170 000 kr', '17 000 kr', '450 000 kr', '280 000 kr'],
      explanation: 'Totalt DB = 170 × 1000 = 170 000 kr.',
    },
    {
      question: 'Hva blir dekningsbidraget til når alle faste kostnader er dekket?',
      options: [
        'Det blir til overskudd (resultat)',
        'Det blir til nye variable kostnader',
        'Det forsvinner',
        'Det blir til gjeld',
      ],
      explanation: 'Når faste kostnader er dekket, blir resten av dekningsbidraget til overskudd.',
    },
    {
      question: 'Hvorfor er bidragskalkylen spesielt nyttig for kortsiktige beslutninger?',
      options: [
        'Den fokuserer på variable kostnader, som er de relevante på kort sikt',
        'Den inkluderer alle indirekte kostnader',
        'Den beregner bedriftens skatt',
        'Den viser bedriftens egenkapital',
      ],
      explanation: 'Bidragskalkylen ser bare på variable kostnader og dekningsbidrag, noe som passer for kortsiktige lønnsomhetsvurderinger.',
    },
  ],

  'oks-4-4': [
    {
      question: 'Hvordan beregnes avansen i en handelsbedrift?',
      options: [
        'Salgspris − innkjøpspris',
        'Innkjøpspris − salgspris',
        'Salgspris + innkjøpspris',
        'Salgspris × innkjøpspris',
      ],
      explanation: 'Avanse = salgspris − innkjøpspris. Den skal dekke butikkens kostnader og gi overskudd.',
    },
    {
      question: 'En genser kjøpes inn for 280 kr og selges for 699 kr. Hva er avansen?',
      options: ['419 kr', '979 kr', '280 kr', '699 kr'],
      explanation: 'Avanse = 699 − 280 = 419 kr.',
    },
    {
      question: 'Hvordan beregnes påslagsprosenten (ekskl. mva)?',
      options: [
        '(Avanse / innkjøpspris) × 100 %',
        '(Avanse / salgspris) × 100 %',
        '(Innkjøpspris / salgspris) × 100 %',
        '(Salgspris / avanse) × 100 %',
      ],
      explanation: 'Påslagsprosent = (avanse / innkjøpspris) × 100 %. Den viser hvor mye man legger på innkjøpsprisen.',
    },
    {
      question: 'En vare kjøpes for 200 kr og selges for 260 kr (ekskl. mva). Hva er påslagsprosenten?',
      options: ['30 %', '23 %', '60 %', '130 %'],
      explanation: 'Avanse = 260 − 200 = 60 kr. Påslagsprosent = (60 / 200) × 100 % = 30 %.',
    },
    {
      question: 'Hva inngår i innkjøpsprisen butikken bruker i beregningene?',
      options: [
        'Det butikken faktisk betaler leverandøren, inkludert eventuelle fraktkostnader',
        'Bare halvparten av leverandørens pris',
        'Salgsprisen til kunden',
        'Bare mva-beløpet',
      ],
      explanation: 'Innkjøpsprisen er det butikken faktisk betaler leverandøren, inkludert fraktkostnader.',
    },
  ],

  'oks-4-5': [
    {
      question: 'Hva er nullpunktet (break-even)?',
      options: [
        'Punktet der bedriften verken har overskudd eller underskudd',
        'Punktet der bedriften har maksimalt overskudd',
        'Punktet der alle kostnader er null',
        'Punktet der salget er null',
      ],
      explanation: 'Ved nullpunktet er totalt dekningsbidrag lik faste kostnader, og resultatet er 0 kr.',
    },
    {
      question: 'Hvordan beregnes nullpunktet i antall enheter?',
      options: [
        'Faste kostnader / dekningsbidrag per enhet',
        'Faste kostnader / salgspris per enhet',
        'Variable kostnader / faste kostnader',
        'Salgspris / faste kostnader',
      ],
      explanation: 'Nullpunkt (enheter) = faste kostnader / dekningsbidrag per enhet.',
    },
    {
      question: 'Faste kostnader er 240 000 kr, salgspris 450 kr og variable kostnader 270 kr per enhet. Hva blir dekningsbidraget per enhet?',
      options: ['180 kr', '720 kr', '270 kr', '450 kr'],
      explanation: 'DB per enhet = 450 − 270 = 180 kr.',
    },
    {
      question: 'Med faste kostnader 240 000 kr og DB 180 kr per enhet – omtrent hvor mange enheter må selges for å gå i null?',
      options: ['1334 enheter', '1200 enheter', '533 enheter', '2400 enheter'],
      explanation: 'Nullpunkt = 240 000 / 180 = 1333,33 ≈ 1334 enheter (man runder opp for å dekke alle kostnader).',
    },
    {
      question: 'Hva uttrykker likningen ved nullpunktet?',
      options: [
        'Salgsinntekt = variable kostnader + faste kostnader',
        'Salgsinntekt = faste kostnader − variable kostnader',
        'Salgsinntekt = overskudd',
        'Faste kostnader = variable kostnader',
      ],
      explanation: 'Ved nullpunkt er salgsinntekt akkurat lik summen av variable og faste kostnader, slik at resultatet blir 0.',
    },
  ],

  'oks-5-1': [
    {
      question: 'Hva betyr likviditet?',
      options: [
        'Bedriftens evne til å betale regningene når de forfaller',
        'Bedriftens samlede overskudd',
        'Bedriftens antall ansatte',
        'Bedriftens markedsandel',
      ],
      explanation: 'Likviditet er evnen til å betale kortsiktige forpliktelser når de forfaller.',
    },
    {
      question: 'Hvordan kan en lønnsom bedrift med positiv egenkapital likevel gå konkurs?',
      options: [
        'Den kan mangle kontanter til å betale forpliktelser når de forfaller',
        'Det er umulig',
        'Bare hvis den ikke har eiendeler',
        'Bare hvis den ikke har overskudd',
      ],
      explanation: 'God lønnsomhet hjelper ikke hvis bedriften ikke har likvide midler til å betale regningene i tide.',
    },
    {
      question: 'Hvilken eiendel har høyest likviditet?',
      options: [
        'Bankinnskudd',
        'Bygninger',
        'Maskiner',
        'Tomter',
      ],
      explanation: 'Bankinnskudd er allerede kontanter og dermed mest likvid; bygninger og maskiner kan ikke selges raskt.',
    },
    {
      question: 'En kafé har overskudd, men kun 20 000 kr på bank og leverandørgjeld på 800 000 kr som forfaller nå. Hva er problemet?',
      options: [
        'Likviditetsproblem – den mangler kontanter til å betale gjelden',
        'Soliditetsproblem – den har for lite egenkapital',
        'Lønnsomhetsproblem – den går med tap',
        'Ingen problem',
      ],
      explanation: 'Mye kapital er bundet i lokaler, så bedriften har for lite kontanter til å betale forfalt gjeld – et likviditetsproblem.',
    },
    {
      question: 'Hva kjennetegner en bedrift med lav likviditet?',
      options: [
        'Lite kontanter og mye kapital bundet i anleggsmidler som ikke selges raskt',
        'Mye kontanter og lett omsettelige eiendeler',
        'Ingen gjeld',
        'Høy egenkapital og mye bankinnskudd',
      ],
      explanation: 'Lav likviditet betyr lite kontanter og mange anleggsmidler (bygg, maskiner) som ikke kan omsettes raskt.',
    },
  ],

  'oks-5-2': [
    {
      question: 'Hva er kontantstrøm (cash flow)?',
      options: [
        'Inn- og utbetalinger av kontanter i en periode',
        'Forventet overskudd for året',
        'Summen av alle eiendeler',
        'Bedriftens egenkapital',
      ],
      explanation: 'Kontantstrøm er de faktiske inn- og utbetalingene av kontanter i en periode.',
    },
    {
      question: 'Hvorfor er inntekt ikke det samme som innbetaling?',
      options: [
        'En kunde kan kjøpe på kreditt, slik at inntekten kommer før pengene betales',
        'Inntekt og innbetaling er alltid like',
        'Innbetaling kommer alltid før inntekt',
        'Inntekt finnes ikke i regnskapet',
      ],
      explanation: 'Ved kredittsalg oppstår inntekten ved levering, men innbetalingen skjer først når kunden betaler.',
    },
    {
      question: 'Hvilke tre områder deles kontantstrømoppstillingen i?',
      options: [
        'Operasjonelle, investerings- og finansieringsaktiviteter',
        'Faste, variable og halvfaste aktiviteter',
        'Inntekter, kostnader og resultat',
        'Eiendeler, gjeld og egenkapital',
      ],
      explanation: 'Kontantstrømoppstillingen deles i operasjonelle aktiviteter, investeringsaktiviteter og finansieringsaktiviteter.',
    },
    {
      question: 'Hvorfor er en avskrivning en kostnad, men ikke en utbetaling i perioden?',
      options: [
        'Utbetalingen skjedde da eiendelen ble kjøpt; avskrivningen fordeler kostnaden over tid',
        'Avskrivninger betales kontant hvert år',
        'Avskrivninger er en innbetaling',
        'Avskrivninger påvirker ikke regnskapet',
      ],
      explanation: 'Maskinen betales (utbetales) ved kjøp, mens avskrivningen er en kostnad som fordeles over levetiden uten ny utbetaling.',
    },
    {
      question: 'Hva omfatter operasjonelle aktiviteter i kontantstrømoppstillingen?',
      options: [
        'Innbetalinger fra kunder og utbetalinger til leverandører og ansatte',
        'Kjøp og salg av maskiner og bygninger',
        'Opptak og nedbetaling av lån',
        'Utbetaling av utbytte',
      ],
      explanation: 'Operasjonelle aktiviteter er knyttet til den daglige driften, som innbetaling fra kunder og utbetaling til leverandører/ansatte.',
    },
  ],

  'oks-5-3': [
    {
      question: 'Hva er de to hovedkategoriene av finansiering?',
      options: [
        'Egenkapital- og fremmedkapitalfinansiering',
        'Fast og variabel finansiering',
        'Kort og lang finansiering',
        'Offentlig og privat finansiering',
      ],
      explanation: 'Finansiering deles i egenkapital (fra eierne) og fremmedkapital/gjeld (fra långivere).',
    },
    {
      question: 'Hva kjennetegner egenkapitalfinansiering?',
      options: [
        'Ingen forpliktelse til tilbakebetaling, og eierne tar risikoen',
        'Må betales tilbake med renter',
        'Kommer alltid fra banken',
        'Gir ingen risiko for noen',
      ],
      explanation: 'Egenkapital (aksjekapital, tilbakeholdt overskudd) skal ikke betales tilbake; eierne bærer risikoen.',
    },
    {
      question: 'Hva er en ulempe med fremmedkapital (gjeld)?',
      options: [
        'Den må betales tilbake med renter',
        'Den styrker alltid soliditeten',
        'Eierne mister kontrollen',
        'Den gir ingen forpliktelser',
      ],
      explanation: 'Gjeld må betales tilbake med renter, noe som er en forpliktelse uavhengig av bedriftens resultat.',
    },
    {
      question: 'Hva kalles balansen mellom egenkapital og gjeld?',
      options: [
        'Kapitalstruktur',
        'Likviditetsgrad',
        'Dekningsbidrag',
        'Avanse',
      ],
      explanation: 'Forholdet mellom egenkapital og gjeld kalles kapitalstruktur.',
    },
    {
      question: 'Hva er en fordel med egenkapitalfinansiering fremfor lån?',
      options: [
        'Ingen rentekostnader og styrket soliditet',
        'Garantert høyere overskudd',
        'Eierne slipper å dele kontroll',
        'Pengene må betales raskt tilbake',
      ],
      explanation: 'Egenkapital gir ingen rentekostnader og styrker soliditeten (egenkapitalandelen), men kan bety at man må dele kontroll med nye eiere.',
    },
  ],

  'oks-5-4': [
    {
      question: 'Hva kjennetegner et annuitetslån?',
      options: [
        'Like store terminbeløp hver periode',
        'Like store avdrag hver periode',
        'At man bare betaler renter',
        'At lånet er rentefritt',
      ],
      explanation: 'I et annuitetslån er terminbeløpet (renter + avdrag) like stort hver periode.',
    },
    {
      question: 'Hvordan utvikler forholdet mellom renter og avdrag seg gjennom et annuitetslån?',
      options: [
        'Først mye renter og lite avdrag, deretter mer avdrag og mindre renter',
        'Først mye avdrag, deretter mye renter',
        'Like mye renter og avdrag hele tiden',
        'Bare renter hele veien',
      ],
      explanation: 'I starten utgjør renter mest av terminbeløpet; etter hvert som gjelden synker, øker andelen avdrag.',
    },
    {
      question: 'Du låner 100 000 kr til 5 % årlig rente. Hvor mye blir rentekostnaden det første året?',
      options: ['5 000 kr', '500 kr', '10 000 kr', '50 000 kr'],
      explanation: 'Rente = 100 000 × 0,05 = 5 000 kr det første året.',
    },
    {
      question: 'Hva er en ulempe med annuitetslån sammenlignet med serielån?',
      options: [
        'Du betaler totalt mer renter, og gjelden går saktere ned i starten',
        'Terminbeløpet er uforutsigbart',
        'Det er umulig å budsjettere',
        'Rentene er alltid høyere',
      ],
      explanation: 'Fordi gjelden nedbetales saktere i starten, betaler man totalt mer renter på et annuitetslån enn på et serielån.',
    },
    {
      question: 'Hva er en fordel med annuitetslån?',
      options: [
        'Forutsigbart, fordi terminbeløpet er det samme hver periode',
        'Du betaler alltid minst renter totalt',
        'Du slipper å betale avdrag',
        'Renten kan ikke endres',
      ],
      explanation: 'Like store terminbeløp gjør annuitetslån forutsigbart og enkelt å budsjettere.',
    },
  ],

  'oks-5-5': [
    {
      question: 'Hva beregner nåverdimetoden (NPV)?',
      options: [
        'Verdien av fremtidige kontantstrømmer målt i dagens kroner',
        'Bedriftens samlede gjeld',
        'Antall solgte enheter',
        'Den årlige lønnskostnaden',
      ],
      explanation: 'Nåverdi (NPV) regner om fremtidige kontantstrømmer til dagens verdi for å vurdere lønnsomhet.',
    },
    {
      question: 'Hvorfor er 1 000 kr i dag mer verdt enn 1 000 kr om fem år?',
      options: [
        'Pengene kan investeres og gi avkastning, og inflasjon reduserer kjøpekraften',
        'Fordi sedlene blir slitt',
        'Fordi beløpet alltid synker med tiden uansett',
        'Fordi 1 000 kr om fem år er mer',
      ],
      explanation: 'Penger i dag kan settes i arbeid og gi avkastning, og inflasjon gjør at fremtidige kroner har lavere kjøpekraft.',
    },
    {
      question: 'Hva betyr det at en investering har nåverdi (NV) større enn 0?',
      options: [
        'Investeringen er lønnsom',
        'Investeringen går i null',
        'Investeringen er ulønnsom',
        'Investeringen har ingen kontantstrøm',
      ],
      explanation: 'NV > 0 betyr at nåverdien av inntektene overstiger investeringen – investeringen er lønnsom.',
    },
    {
      question: 'En investering gir en kontantstrøm på 110 000 kr om ett år. Med 10 % kalkulasjonsrente, hva er nåverdien av denne kontantstrømmen?',
      options: ['100 000 kr', '110 000 kr', '99 000 kr', '121 000 kr'],
      explanation: 'Nåverdi = 110 000 / (1 + 0,10) = 110 000 / 1,10 = 100 000 kr.',
    },
    {
      question: 'Hva kalles renten man bruker for å diskontere fremtidige kontantstrømmer i nåverdiberegningen?',
      options: [
        'Kalkulasjonsrente (avkastningskrav)',
        'Nominell terminrente',
        'Effektiv mva-sats',
        'Dekningsbidrag',
      ],
      explanation: 'Kalkulasjonsrenten (avkastningskravet) brukes til å regne fremtidige kontantstrømmer om til dagens verdi.',
    },
  ],

  'oks-6-1': [
    {
      question: 'Hva måler lønnsomhetsanalyse?',
      options: [
        'Hvor effektivt bedriften utnytter ressurser til å skape overskudd',
        'Hvor raskt bedriften kan betale regninger',
        'Hvor stor egenkapitalandel bedriften har',
        'Hvor mange ansatte bedriften har',
      ],
      explanation: 'Lønnsomhetsanalyse måler hvor effektivt bedriften skaper overskudd i forhold til investert kapital.',
    },
    {
      question: 'Hva viser totalkapitalrentabiliteten (TKR)?',
      options: [
        'Avkastning på all investert kapital, uavhengig av om den er lånt eller eid',
        'Bare avkastningen på egenkapitalen',
        'Bedriftens likviditet',
        'Bedriftens markedsandel',
      ],
      explanation: 'TKR viser hvor mye bedriften tjener på den totale kapitalen, uansett finansieringskilde.',
    },
    {
      question: 'Hvordan beregnes totalkapitalrentabilitet?',
      options: [
        '(Resultat før finanskostnader / gjennomsnittlig totalkapital) × 100 %',
        '(Resultat / salgsinntekt) × 100 %',
        '(Egenkapital / totalkapital) × 100 %',
        '(Omløpsmidler / kortsiktig gjeld) × 100 %',
      ],
      explanation: 'TKR = (resultat før finanskostnader / gjennomsnittlig totalkapital) × 100 %.',
    },
    {
      question: 'En bedrift har resultat før finanskostnader på 400 000 kr og gjennomsnittlig totalkapital på 5 000 000 kr. Hva er totalkapitalrentabiliteten?',
      options: ['8 %', '12,5 %', '4 %', '20 %'],
      explanation: 'TKR = (400 000 / 5 000 000) × 100 % = 8 %.',
    },
    {
      question: 'Hva er «resultat før finanskostnader» som brukes i TKR?',
      options: [
        'Driftsresultat + finansinntekter',
        'Driftsresultat − finanskostnader',
        'Salgsinntekter − varekostnad',
        'Egenkapital + gjeld',
      ],
      explanation: 'Resultat før finanskostnader = driftsresultat + finansinntekter, fordi TKR ser bort fra hvordan kapitalen er finansiert.',
    },
  ],

  'oks-6-2': [
    {
      question: 'Hva handler likviditetsanalyse om?',
      options: [
        'Bedriftens evne til å betale regninger når de forfaller',
        'Bedriftens langsiktige egenkapital',
        'Bedriftens markedsføring',
        'Bedriftens antall produkter',
      ],
      explanation: 'Likviditetsanalyse vurderer om bedriften kan dekke kortsiktige forpliktelser.',
    },
    {
      question: 'Hvordan beregnes likviditetsgrad 1?',
      options: [
        'Omløpsmidler / kortsiktig gjeld',
        'Mest likvide omløpsmidler / kortsiktig gjeld',
        'Egenkapital / totalkapital',
        'Resultat / salgsinntekt',
      ],
      explanation: 'Likviditetsgrad 1 = omløpsmidler / kortsiktig gjeld.',
    },
    {
      question: 'En bedrift har omløpsmidler på 600 000 kr og kortsiktig gjeld på 300 000 kr. Hva er likviditetsgrad 1?',
      options: ['2,0', '0,5', '1,0', '3,0'],
      explanation: 'Likviditetsgrad 1 = 600 000 / 300 000 = 2,0.',
    },
    {
      question: 'Hva er en vanlig tommelfingerregel for en god likviditetsgrad 1?',
      options: [
        'Den bør være større enn 2 (eller minst 1,5–2)',
        'Den bør være mindre enn 0,5',
        'Den bør være nøyaktig 0',
        'Den bør være negativ',
      ],
      explanation: 'En likviditetsgrad 1 på rundt 2 regnes ofte som god, da omløpsmidlene da er dobbelt så store som kortsiktig gjeld.',
    },
    {
      question: 'Hvorfor kan en lønnsom bedrift likevel ha dårlig likviditet?',
      options: [
        'Mye kapital kan være bundet i varelager og kundefordringer',
        'Fordi den ikke har overskudd',
        'Fordi den har for lite gjeld',
        'Fordi lønnsomhet og likviditet alltid er like',
      ],
      explanation: 'Kapital bundet i varelager og fordringer, eller store investeringer, kan gi dårlig likviditet selv ved god lønnsomhet.',
    },
  ],

  'oks-6-3': [
    {
      question: 'Hva handler soliditet om?',
      options: [
        'Bedriftens langsiktige finansielle styrke og evne til å tåle tap',
        'Bedriftens kortsiktige betalingsevne',
        'Bedriftens daglige kontantstrøm',
        'Bedriftens markedsføring',
      ],
      explanation: 'Soliditet måler langsiktig finansiell styrke – hvor mye av verdiene som er finansiert med egenkapital.',
    },
    {
      question: 'Hvordan beregnes egenkapitalandelen?',
      options: [
        '(Egenkapital / totalkapital) × 100 %',
        '(Gjeld / egenkapital) × 100 %',
        '(Omløpsmidler / kortsiktig gjeld) × 100 %',
        '(Resultat / salgsinntekt) × 100 %',
      ],
      explanation: 'Egenkapitalandel = (egenkapital / totalkapital) × 100 %, det viktigste soliditetsmålet.',
    },
    {
      question: 'En bedrift har egenkapital 2 000 000 kr og totalkapital 5 000 000 kr. Hva er egenkapitalandelen?',
      options: ['40 %', '60 %', '25 %', '250 %'],
      explanation: 'Egenkapitalandel = (2 000 000 / 5 000 000) × 100 % = 40 %.',
    },
    {
      question: 'Hva betyr god soliditet?',
      options: [
        'Stor egenkapitalandel og lavere finansiell risiko',
        'Mye gjeld og høy risiko',
        'Lav likviditet',
        'Lavt overskudd',
      ],
      explanation: 'God soliditet betyr stor egenkapitalandel, som gir lavere finansiell risiko og bedre evne til å tåle tap.',
    },
    {
      question: 'Hva er forskjellen mellom likviditet og soliditet?',
      options: [
        'Likviditet er kortsiktig betalingsevne; soliditet er langsiktig finansiell styrke',
        'De er det samme',
        'Likviditet er langsiktig; soliditet er kortsiktig',
        'Begge måler bare overskudd',
      ],
      explanation: 'Likviditet gjelder kortsiktig betalingsevne (uker/måneder), mens soliditet gjelder langsiktig styrke (år).',
    },
  ],

  'oks-6-4': [
    {
      question: 'Hvorfor får nøkkeltall først full mening når de sammenlignes?',
      options: [
        'Et nøkkeltall isolert sier lite uten referansepunkter',
        'Fordi nøkkeltall alltid er like',
        'Fordi sammenligning er forbudt',
        'Fordi tall ikke kan tolkes',
      ],
      explanation: 'Et nøkkeltall trenger referansepunkter (over tid eller mot bransjen) for å vurderes som godt eller dårlig.',
    },
    {
      question: 'Hva er tidsserieanalyse?',
      options: [
        'Å sammenligne bedriftens nøkkeltall over flere år',
        'Å sammenligne med konkurrentene samme år',
        'Å beregne nullpunktet',
        'Å fordele indirekte kostnader',
      ],
      explanation: 'Tidsserieanalyse følger nøkkeltall over tid (typisk 3–5 år) for å avdekke trender og utvikling.',
    },
    {
      question: 'Hva er bransjesammenligning (benchmarking)?',
      options: [
        'Å sammenligne bedriften med konkurrenter og bransjegjennomsnitt',
        'Å sammenligne bedriften med seg selv over tid',
        'Å sette opp et budsjett',
        'Å beregne avanse',
      ],
      explanation: 'Bransjesammenligning vurderer bedriftens nøkkeltall mot konkurrenter og bransjesnitt for å se konkurranseposisjonen.',
    },
    {
      question: 'Hva viser en tidsserieanalyse blant annet?',
      options: [
        'Utviklingstrender og effekten av strategiske tiltak',
        'Bare konkurrentenes priser',
        'Hvilken selskapsform man bør velge',
        'Hvor mye mva man skal betale',
      ],
      explanation: 'Tidsserieanalyse viser utviklingstrender (forbedring/forverring), effekt av tiltak og sykliske mønstre.',
    },
    {
      question: 'Hva er beste praksis for en helhetlig regnskapsanalyse?',
      options: [
        'Å bruke både tidsserieanalyse og bransjesammenligning',
        'Å bare se på ett år',
        'Å bare se på egenkapitalen',
        'Å unngå sammenligning',
      ],
      explanation: 'For et helhetlig bilde bør man kombinere tidsserieanalyse (over tid) og bransjesammenligning (mot andre).',
    },
  ],

  'oks-6-5': [
    {
      question: 'Hva er målet med en komplett regnskapsanalyse?',
      options: [
        'Å vurdere bedriftens økonomiske helse og gi anbefalinger',
        'Å fastsette ansattes lønn',
        'Å velge logo for bedriften',
        'Å bestemme produktfarger',
      ],
      explanation: 'En regnskapsanalyse vurderer bedriftens økonomiske helse, identifiserer styrker og svakheter og gir anbefalinger.',
    },
    {
      question: 'Hvilke tre hovedområder dekker en helhetlig regnskapsanalyse?',
      options: [
        'Lønnsomhet, likviditet og soliditet',
        'Markedsføring, salg og produksjon',
        'Lønn, ferie og pensjon',
        'Innkjøp, lager og frakt',
      ],
      explanation: 'En fullstendig analyse dekker lønnsomhet, likviditet og soliditet, ofte kombinert med tidsserie- og bransjeanalyse.',
    },
    {
      question: 'Et selskap har salgsinntekter som vokser fra 18 500 til 26 800 (i 1000 kr) over tre år. Hva slags analyse fanger dette opp?',
      options: [
        'Tidsserieanalyse',
        'Nullpunktanalyse',
        'Selvkostkalkyle',
        'Bidragskalkyle',
      ],
      explanation: 'Å følge utviklingen i salgsinntekter over flere år er en tidsserieanalyse.',
    },
    {
      question: 'Hvorfor bør analysen ende i konkrete anbefalinger?',
      options: [
        'Fordi formålet er å gi grunnlag for bedre beslutninger',
        'Fordi loven krever akkurat tre anbefalinger',
        'Fordi anbefalinger erstatter regnskapet',
        'Fordi tall ikke kan tolkes',
      ],
      explanation: 'Hensikten med analysen er å gi ledelse og interessenter grunnlag for bedre beslutninger gjennom konkrete anbefalinger.',
    },
    {
      question: 'Hva bør man gjøre for å vurdere om en bedrifts nøkkeltall er gode?',
      options: [
        'Sammenligne dem over tid og mot bransjen',
        'Bare se på ett enkelt år isolert',
        'Bare se på antall ansatte',
        'Ignorere konkurrentene',
      ],
      explanation: 'Nøkkeltall vurderes best ved å se på utviklingen over tid og sammenligne med bransjen.',
    },
  ],

  'oks-7-1': [
    {
      question: 'Hva kjennetegner et enkeltpersonforetak (ENK)?',
      options: [
        'Én person eier og driver virksomheten, med ubegrenset personlig ansvar',
        'Eierne har begrenset ansvar',
        'Det kreves minst tre eiere',
        'Det betaler alltid selskapsskatt i stedet for personskatt',
      ],
      explanation: 'I et ENK eier og driver én person virksomheten alene og har ubegrenset personlig ansvar for gjelden.',
    },
    {
      question: 'Hva er en sentral fordel med aksjeselskap (AS) sammenlignet med ENK?',
      options: [
        'Eierne har begrenset ansvar',
        'Det er gratis og krever ingen kapital',
        'Eieren er personlig ansvarlig for all gjeld',
        'Det krever ingen registrering',
      ],
      explanation: 'I et AS er eiernes ansvar begrenset til den innskutte aksjekapitalen, til forskjell fra ubegrenset ansvar i ENK.',
    },
    {
      question: 'Hvilken selskapsform passer ofte godt for en frilanser eller selvstendig håndverker som starter alene?',
      options: [
        'Enkeltpersonforetak (ENK)',
        'Børsnotert allmennaksjeselskap (ASA)',
        'Stiftelse',
        'Kommunalt foretak',
      ],
      explanation: 'ENK er enkelt og billig å etablere og egner seg godt for små virksomheter drevet av én person.',
    },
    {
      question: 'Hvordan beskattes overskuddet i et enkeltpersonforetak?',
      options: [
        'Som personinntekt hos eieren',
        'Som selskapsskatt før eieren får noe',
        'Det er skattefritt',
        'Bare med merverdiavgift',
      ],
      explanation: 'I et ENK skattlegges overskuddet som eierens personinntekt, ikke som selskapsskatt.',
    },
    {
      question: 'Hva påvirker valg av selskapsform?',
      options: [
        'Ansvar, skatt, administrasjon og mulighet til å hente kapital',
        'Bare bedriftens navn',
        'Bare fargen på logoen',
        'Bare antall produkter',
      ],
      explanation: 'Valget påvirker personlig ansvar, beskatning, administrasjon og muligheten til å hente inn kapital.',
    },
  ],

  'oks-7-2': [
    {
      question: 'Hva betyr ubegrenset ansvar?',
      options: [
        'Eieren er personlig ansvarlig for all gjeld i virksomheten',
        'Eieren risikerer bare den innskutte kapitalen',
        'Ingen er ansvarlig for gjelden',
        'Staten dekker all gjeld',
      ],
      explanation: 'Ved ubegrenset ansvar kan kreditorene kreve betaling fra eierens private økonomi hvis selskapet ikke kan betale.',
    },
    {
      question: 'Hvilken selskapsform gir eierne begrenset ansvar?',
      options: [
        'Aksjeselskap (AS)',
        'Enkeltpersonforetak (ENK)',
        'Ansvarlig selskap (ANS)',
        'Deltakerlignet selskap (DA)',
      ],
      explanation: 'I et AS er ansvaret begrenset til aksjekapitalen; ENK, ANS og DA har ubegrenset ansvar.',
    },
    {
      question: 'Hva kan skje med en ENK-eier hvis virksomheten ikke kan betale 800 000 kr i gjeld?',
      options: [
        'Kreditorene kan kreve betaling fra eierens private eiendeler',
        'Gjelden slettes automatisk',
        'Staten betaler gjelden',
        'Eieren risikerer ingenting privat',
      ],
      explanation: 'Med ubegrenset ansvar kan kreditorene ta pant i bolig, bil og andre private eiendeler for å dekke gjelden.',
    },
    {
      question: 'Hvorfor velger mange gründere med høy risiko aksjeselskap?',
      options: [
        'For å beskytte sin private økonomi gjennom begrenset ansvar',
        'Fordi AS aldri kan gå konkurs',
        'Fordi AS slipper å føre regnskap',
        'Fordi AS er gratis å drive',
      ],
      explanation: 'Begrenset ansvar i et AS gjør at eierne ikke risikerer mer enn den innskutte kapitalen, noe som beskytter privatøkonomien.',
    },
    {
      question: 'Hva er sammenhengen mellom valg av selskapsform og risiko?',
      options: [
        'Formen avgjør hvor mye av privatøkonomien som settes på spill ved konkurs',
        'Selskapsform har ingen betydning for risiko',
        'All risiko bæres alltid av staten',
        'Risiko gjelder bare aksjeselskaper',
      ],
      explanation: 'Valg av selskapsform bestemmer om eieren har begrenset eller ubegrenset ansvar, og dermed hvor mye privat økonomi som er utsatt.',
    },
  ],

  'oks-7-3': [
    {
      question: 'Hva gjør en regnskapsfører?',
      options: [
        'Fører den daglige regnskapsføringen i virksomheten',
        'Kontrollerer og bekrefter at årsregnskapet er korrekt og uavhengig',
        'Vedtar bedriftens budsjett',
        'Markedsfører bedriftens produkter',
      ],
      explanation: 'Regnskapsføreren registrerer transaksjoner, fører reskontro, avstemmer konti og utarbeider årsregnskapet.',
    },
    {
      question: 'Hva er revisors hovedrolle?',
      options: [
        'Å kontrollere og bekrefte at regnskapet gir et riktig bilde, uavhengig av bedriften',
        'Å føre den daglige bokføringen',
        'Å bestemme bedriftens priser',
        'Å ansette nye medarbeidere',
      ],
      explanation: 'Revisor kontrollerer regnskapet uavhengig og bekrefter at det gir et korrekt bilde av økonomien.',
    },
    {
      question: 'Hvorfor er revisors uavhengighet viktig?',
      options: [
        'For at kontrollen av regnskapet skal være troverdig og objektiv',
        'For at revisor skal kunne føre regnskapet selv',
        'For at revisor skal eie bedriften',
        'For at revisor skal slippe å betale skatt',
      ],
      explanation: 'Uavhengigheten sikrer at revisors bekreftelse av regnskapet er objektiv og til å stole på for eksterne parter.',
    },
    {
      question: 'Hvilke oppgaver inngår typisk i regnskapsførerens arbeid?',
      options: [
        'Føre reskontro, avstemme bankkonti og beregne merverdiavgift',
        'Bekrefte regnskapet uavhengig',
        'Velge bedriftens selskapsform',
        'Fastsette bransjens lønnsnivå',
      ],
      explanation: 'Regnskapsføreren håndterer kjøps- og salgsreskontro, bankavstemming, mva-beregning, lønn og årsoppgjør.',
    },
    {
      question: 'Hva er forskjellen på regnskapsfører og revisor i korthet?',
      options: [
        'Regnskapsfører fører regnskapet; revisor kontrollerer det',
        'De gjør nøyaktig det samme',
        'Revisor fører regnskapet; regnskapsfører kontrollerer det',
        'Begge er forbudt for små bedrifter',
      ],
      explanation: 'Regnskapsføreren utfører den daglige regnskapsføringen, mens revisoren kontrollerer at regnskapet er riktig.',
    },
  ],

  'oks-7-4': [
    {
      question: 'Hva er interessegrupper (interessenter)?',
      options: [
        'Alle som har en interesse i virksomhetens drift og beslutninger',
        'Bare bedriftens aksjonærer',
        'Bare bedriftens kunder',
        'Bare statlige myndigheter',
      ],
      explanation: 'Interessegrupper (stakeholders) er alle som påvirkes av eller har interesse i virksomheten, f.eks. eiere, ansatte, kunder og leverandører.',
    },
    {
      question: 'Hva ønsker eierne/aksjonærene som interessegruppe primært?',
      options: [
        'Høyest mulig avkastning på sin investering',
        'Lavest mulig lønn til seg selv',
        'At bedriften gir bort overskuddet',
        'At bedriften ikke tjener penger',
      ],
      explanation: 'Eierne ønsker høyest mulig avkastning og tar beslutninger gjennom generalforsamlingen.',
    },
    {
      question: 'Hva betyr CSR (samfunnsansvar)?',
      options: [
        'At virksomheten tar ansvar for miljø og samfunn utover lovkrav',
        'At virksomheten bare bryr seg om overskudd',
        'At staten driver bedriften',
        'At ansatte eier bedriften',
      ],
      explanation: 'Samfunnsansvar (CSR) handler om at virksomheter tar ansvar for sosiale og miljømessige konsekvenser av sin drift.',
    },
    {
      question: 'Hva ønsker kreditorer (banker, långivere) som interessegruppe?',
      options: [
        'At lån betales tilbake med renter',
        'At bedriften aldri tjener penger',
        'At de selv overtar driften',
        'Lavest mulig avkastning',
      ],
      explanation: 'Kreditorer ønsker at lån tilbakebetales med renter og er opptatt av bedriftens betalingsevne.',
    },
    {
      question: 'Hvorfor må virksomheter balansere ulike interessegrupper?',
      options: [
        'Fordi gruppene ofte har forskjellige og delvis motstridende interesser',
        'Fordi alle gruppene ønsker det samme',
        'Fordi bare eierne betyr noe',
        'Fordi loven forbyr å ta hensyn til kunder',
      ],
      explanation: 'Eiere, ansatte, kunder, leverandører og samfunn har ulike interesser, og virksomheten må veie disse mot hverandre.',
    },
  ],

  'oks-7-5': [
    {
      question: 'Hva betyr bærekraft?',
      options: [
        'Å møte dagens behov uten å ødelegge mulighetene for fremtidige generasjoner',
        'Å maksimere overskudd på kort sikt uansett',
        'Å unngå all økonomisk vekst',
        'Å bare tenke på dagens forbruk',
      ],
      explanation: 'Bærekraft handler om å dekke dagens behov uten å svekke fremtidige generasjoners muligheter.',
    },
    {
      question: 'Hvilke tre dimensjoner inngår i bærekraftig næringsliv?',
      options: [
        'Økonomisk, sosial og miljømessig ansvarlighet',
        'Salg, markedsføring og produksjon',
        'Lønn, ferie og pensjon',
        'Innkjøp, lager og frakt',
      ],
      explanation: 'Bærekraft for næringslivet betyr å skape verdier på en måte som er økonomisk, sosialt og miljømessig ansvarlig.',
    },
    {
      question: 'Hvor mange bærekraftsmål vedtok FN i 2015?',
      options: ['17', '10', '8', '25'],
      explanation: 'FN vedtok 17 bærekraftsmål (SDG-er) som skal nås innen 2030.',
    },
    {
      question: 'Hva er kjernen i sirkulærøkonomi?',
      options: [
        'Å gjenbruke, reparere og resirkulere ressurser fremfor å kaste dem',
        'Å produsere mest mulig engangsvarer',
        'Å unngå all produksjon',
        'Å bare bruke nye råvarer',
      ],
      explanation: 'Sirkulærøkonomi handler om å holde ressurser i bruk lengst mulig gjennom gjenbruk, reparasjon og resirkulering.',
    },
    {
      question: 'Hva pålegger åpenhetsloven mange virksomheter?',
      options: [
        'Å være åpne om arbeidet med grunnleggende menneskerettigheter og anstendige arbeidsforhold',
        'Å offentliggjøre alle ansattes lønn',
        'Å publisere alle kundeavtaler',
        'Å avvikle all gjeld',
      ],
      explanation: 'Åpenhetsloven krever at virksomheter redegjør for arbeidet med menneskerettigheter og anstendige arbeidsforhold i leverandørkjeden.',
    },
  ],

  'oks-8-1': [
    {
      question: 'Hva er et regnskapssystem?',
      options: [
        'Programvare som håndterer transaksjoner fra bilagsregistrering til rapportering',
        'En perm med papirbilag',
        'En kalkulator',
        'En bankkonto',
      ],
      explanation: 'Et regnskapssystem er programvare som håndterer alt fra bilagsregistrering til rapportering.',
    },
    {
      question: 'Hvilket norsk skybasert regnskapssystem er rettet mot små bedrifter og enkeltpersonforetak?',
      options: ['Fiken', 'Excel', 'Word', 'Altinn'],
      explanation: 'Fiken er en skybasert løsning rettet mot små bedrifter og enkeltpersonforetak.',
    },
    {
      question: 'Hvilken fordel gir digitalisering av regnskap?',
      options: [
        'Effektivitet, sikkerhet og bedre muligheter for analyse og kontroll',
        'Mer papirarbeid',
        'Tregere prosesser',
        'Mindre nøyaktighet',
      ],
      explanation: 'Digitalisering gir effektivitet, sikkerhet og nye muligheter for analyse og kontroll.',
    },
    {
      question: 'Hva er en grunnleggende funksjon i et moderne regnskapssystem?',
      options: [
        'Automatisk bokføring av banktransaksjoner',
        'Produksjon av varer',
        'Ansettelse av medarbeidere',
        'Markedsføring i sosiale medier',
      ],
      explanation: 'Moderne regnskapssystemer tilbyr bl.a. automatisk bokføring, fakturahåndtering, avstemming og rapportering.',
    },
    {
      question: 'Hvorfor har digitaliseringen av regnskap kommet langt i Norge?',
      options: [
        'Lovkrav om elektronisk regnskapsføring og standarder for datautveksling',
        'Fordi papir er forbudt',
        'Fordi ingen fører regnskap lenger',
        'Fordi staten driver alle bedrifter',
      ],
      explanation: 'Lovkrav om elektronisk regnskapsføring og standarder for datautveksling har drevet digitaliseringen, slik at også små bedrifter kan bruke moderne verktøy.',
    },
  ],

  'oks-8-2': [
    {
      question: 'Hvordan endrer automatisering økonomifunksjonen i bedrifter?',
      options: [
        'Rutineoppgaver automatiseres, mens behovet for analyse og rådgivning øker',
        'Alle jobber forsvinner umiddelbart',
        'Ingenting endres',
        'Bare produksjonen påvirkes',
      ],
      explanation: 'Automatisering tar over rutineoppgaver, mens behovet for å tolke data og gi råd øker.',
    },
    {
      question: 'Hva er en typisk anvendelse av AI i regnskapssystemer?',
      options: [
        'Automatisk bokføring og forslag til kontering basert på historikk',
        'Å male kontorlokalene',
        'Å levere varer til kunder',
        'Å ansette nye ledere',
      ],
      explanation: 'AI kan lære bokføringsmønstre og foreslå korrekt kontering basert på bilagstekst, leverandør og historikk.',
    },
    {
      question: 'Hva gjør bilagsgjenkjenning (OCR) i moderne systemer?',
      options: [
        'Leser tekst på fotograferte kvitteringer og henter ut beløp, dato og mva',
        'Skriver ut papirfakturaer',
        'Sender e-post til kunder',
        'Beregner ansattes ferie',
      ],
      explanation: 'OCR-teknologi leser kvitteringer og fakturaer, identifiserer beløp, dato, leverandør og mva-sats, og foreslår konto.',
    },
    {
      question: 'Hvordan endres kompetansekravene for regnskapsførere på grunn av automatisering?',
      options: [
        'Behovet for å tolke data, gi råd og forstå sammenhenger øker',
        'De trenger ikke lenger forstå økonomi',
        'De må kunne reparere maskiner',
        'Kravene blir borte helt',
      ],
      explanation: 'Når rutineoppgaver automatiseres, blir evnen til å tolke data og gi forretningsmessig rådgivning viktigere.',
    },
    {
      question: 'Hva blir bilagsgjenkjenning med AI bedre på over tid?',
      options: [
        'Den lærer av historikk og blir mer nøyaktig jo mer den brukes',
        'Den blir tregere',
        'Den glemmer det den har lært',
        'Den fungerer bare første gang',
      ],
      explanation: 'AI-baserte systemer lærer av tidligere data og blir mer presise jo mer de brukes.',
    },
  ],

  'oks-8-3': [
    {
      question: 'Hva kjennetegner en plattformvirksomhet?',
      options: [
        'Den kobler sammen tilbydere og brukere uten nødvendigvis å eie produktene',
        'Den produserer alle varer selv',
        'Den selger bare fysiske produkter i butikk',
        'Den har ingen kunder',
      ],
      explanation: 'En plattform skaper verdi ved å koble sammen tilbydere og brukere, ofte uten å eie det som omsettes.',
    },
    {
      question: 'Hva er en nettverkseffekt?',
      options: [
        'At verdien av plattformen øker når antall brukere øker',
        'At plattformen blir tregere med flere brukere',
        'At kostnadene øker proporsjonalt med brukere',
        'At brukere forsvinner over tid',
      ],
      explanation: 'Nettverkseffekt betyr at flere brukere gjør plattformen mer verdifull – mange annonser trekker mange kjøpere.',
    },
    {
      question: 'Hvilket norsk eksempel kobler kjøpere og selgere av brukte varer, boliger og jobber?',
      options: ['Finn.no', 'Norges Bank', 'Skatteetaten', 'Brønnøysundregistrene'],
      explanation: 'Finn.no kobler selgere og kjøpere og tar betalt av selgere for annonsering, uten å eie varene.',
    },
    {
      question: 'Hva kjennetegner en abonnementsmodell?',
      options: [
        'Kunden betaler jevnlig for løpende tilgang til en tjeneste',
        'Kunden betaler én gang for alltid',
        'Tjenesten er alltid gratis',
        'Kunden eier produktet fysisk',
      ],
      explanation: 'I en abonnementsmodell betaler kunden periodisk (f.eks. månedlig) for løpende tilgang, noe som gir jevne inntekter.',
    },
    {
      question: 'Hvorfor har plattformer ofte lave marginalkostnader ved vekst?',
      options: [
        'Det koster lite ekstra å betjene én ny bruker når plattformen først er bygget',
        'Fordi de produserer alle varene selv',
        'Fordi de ikke har noen brukere',
        'Fordi de eier store fabrikker',
      ],
      explanation: 'Når plattformen er etablert, koster det lite å legge til nye brukere, noe som gir global skalerbarhet med lave marginalkostnader.',
    },
  ],

  'oks-8-4': [
    {
      question: 'Hva er forskuddstrekk?',
      options: [
        'Skatt som trekkes fra lønnen før den utbetales',
        'Et lån fra arbeidsgiver',
        'En bonus på toppen av lønnen',
        'Penger arbeidsgiver skylder deg',
      ],
      explanation: 'Forskuddstrekk er skatten arbeidsgiver trekker fra lønnen din før utbetaling.',
    },
    {
      question: 'Hva viser skattekortet?',
      options: [
        'Hvor mye skatt arbeidsgiveren skal trekke fra lønnen',
        'Hvor mye ferie du har',
        'Hvor mye du har på bankkonto',
        'Hvilken jobb du har',
      ],
      explanation: 'Skattekortet (leveres digitalt via Altinn) angir hvor mye skatt arbeidsgiver skal trekke fra lønnen hver måned.',
    },
    {
      question: 'Hva inngår typisk i forskuddstrekket?',
      options: [
        'Skatt til kommune, fylke og stat samt trygdeavgift',
        'Bare husleie',
        'Bare strømregning',
        'Bare feriepenger',
      ],
      explanation: 'Forskuddstrekket består av skatt til kommune, fylke og stat samt trygdeavgift.',
    },
    {
      question: 'Hvorfor er det viktig å forstå personlig økonomi som fremtidig arbeidstaker?',
      options: [
        'For å ta bedre beslutninger om skatt, lån, sparing og forsikring',
        'For å slippe å betale skatt',
        'For å unngå å jobbe',
        'For å bestemme bedriftens budsjett',
      ],
      explanation: 'God forståelse av skatt, lån, sparing og forsikring gir bedre grunnlag for personlige økonomiske beslutninger.',
    },
    {
      question: 'Hva er et særtrekk ved det norske skattesystemet på inntekt?',
      options: [
        'Det er progressivt – høyere inntekt gir høyere skattesats på toppen',
        'Alle betaler nøyaktig samme beløp i skatt',
        'Inntektsskatt finnes ikke',
        'Bare bedrifter betaler skatt',
      ],
      explanation: 'Norsk inntektsskatt er progressiv, slik at høyere inntekt gir høyere marginal skattesats.',
    },
  ],

  'oks-8-5': [
    {
      question: 'Hva er en konjunktursyklus?',
      options: [
        'Vekslingen mellom perioder med vekst og perioder med nedgang i økonomien',
        'En fast årlig vekst uten svingninger',
        'Et regnskapsprinsipp',
        'En type lån',
      ],
      explanation: 'Konjunktursykluser er svingninger der perioder med vekst veksler med perioder med nedgang.',
    },
    {
      question: 'Hva kjennetegner en høykonjunktur (boom)?',
      options: [
        'Høy vekst, lav arbeidsledighet og risiko for inflasjon',
        'Negativ vekst og høy arbeidsledighet',
        'Permitteringer og oppsigelser',
        'Fallende etterspørsel',
      ],
      explanation: 'I en høykonjunktur er det høy vekst, lav arbeidsledighet og økt etterspørsel, med risiko for inflasjon.',
    },
    {
      question: 'Hva skjer typisk i en resesjon (nedgang)?',
      options: [
        'Veksten avtar eller blir negativ, og permitteringer øker',
        'Arbeidsledigheten faller raskt',
        'Bedriftene øker produksjonen kraftig',
        'Inflasjonen blir alltid svært høy',
      ],
      explanation: 'I en resesjon avtar eller faller veksten, bedrifter selger mindre, og permitteringer og oppsigelser øker.',
    },
    {
      question: 'Hva er inflasjon?',
      options: [
        'Vedvarende økning i det generelle prisnivået',
        'Vedvarende fall i prisnivået',
        'At arbeidsledigheten faller',
        'At renten alltid er null',
      ],
      explanation: 'Inflasjon er en vedvarende økning i det generelle prisnivået, som reduserer pengenes kjøpekraft.',
    },
    {
      question: 'Hvorfor bør en fremtidig arbeidstaker forstå konjunkturer, renter og inflasjon?',
      options: [
        'Fordi de påvirker både bedrifter og privatpersoners økonomi direkte',
        'Fordi de ikke har noen praktisk betydning',
        'Fordi bare staten påvirkes',
        'Fordi de bare gjelder i utlandet',
      ],
      explanation: 'Konjunkturer, renter og inflasjon påvirker salg, kostnader, lån og forbruk – og dermed både bedrifter og privatpersoner.',
    },
  ],
};

export default quizData_okonomistyring;
