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
};

export default quizData_okonomistyring;
