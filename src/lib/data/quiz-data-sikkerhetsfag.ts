import type { QuizQuestion } from './quiz-data';

const quizData_sikkerhetsfag: Record<string, QuizQuestion[]> = {
  'sikkerhetsfag-1': [
  {
    question: 'Hva er de tre grunnpilårene i sikkerhetsarbeid?',
    options: ['Forebygging, avdekking og respons', 'Planlegging, gjennomforing og evaluering', 'Vakthold, overvaking og kontroll', 'Risiko, sårbarhet og trussel'],
    explanation: 'Sikkerhetens tre grunnpilærer er førebygging (hindre hendelser), avdekking (oppdage hendelser tidlig) og respons (handtere hendelser effektivt).',
  },
  {
    question: 'Hva er minimumskravet til vekterutdanning i Norge?',
    options: ['105 timer', '80 timer', '50 timer', '200 timer'],
    explanation: 'I Norge er minimumskravet til vekterutdanning 105 timer. Dette inkluderer både teori og praksis, og er regulert i vaktvirksomhetsloven.',
  },
  {
    question: 'Hvilken etisk grunnverdi innebærer å handle ærlig og konsekvent?',
    options: ['Integritet', 'Lojalitet', 'Respekt', 'Taushetsplikt'],
    explanation: 'Integritet betyr å handle ærlig og konsekvent. Det innebærer blant annet a aldri la seg bestikke, rapportere sannferdig og ta ansvar for egne feil.',
  },
  {
    question: 'Hvilken yrkesrolle har det overordnede ansvåret for sikkerheten i en virksomhet?',
    options: ['Sikkerhetsleder', 'Vekter', 'Sikkerhetsradgiver', 'Operator i alarmsentral'],
    explanation: 'Sikkerhetslederen har det overordnede ansvåret for sikkerheten, inkludert a utvikle sikkerhetsstrategi, gjennomføre risikovurderinger og lede sikkerhetspersonell.',
  },
  {
    question: 'Nårtaushetsplikten for vektere star i konflikt med andre hensyn, hva gåroverst?',
    options: ['Lojalitet til loven', 'Lojalitet til arbeidsgiver', 'Lojalitet til kolleger', 'Lojalitet til kunden'],
    explanation: 'Nårdet oppstar konflikt mellom lojaliteter, star lojalitet til loven alltid overst. Vektere måderfor rapportere lovbrudd selv om det gårpåtvers av andre lojaliteter.',
  },
],


  'sikkerhetsfag-2': [
  {
    question: 'Hvordan defineres risiko i sikkerhetsarbeid?',
    options: ['Sannsynlighet multiplisert med konsekvens', 'Summen av alle trusler', 'Antall sårbarheter delt påverdier', 'Konsekvens minus førebyggende tiltak'],
    explanation: 'Risiko defineres som kombinasjonen (produktet) av sannsynlighet for at en uønsket hendelse inntreffer og konsekvensene av hendelsen.',
  },
  {
    question: 'Hva er forskjellen mellom trussel og sårbarhet?',
    options: ['Trussel er årsak, sårbarhet er svakhet som kan utnyttes', 'Trussel er fysisk, sårbarhet er psykisk', 'Trussel er intern, sårbarhet er ekstern', 'Det er ingen forskjell'],
    explanation: 'En trussel er en potensiell årsak til en uønsket hendelse (f.eks. en innbruddstyv), mens sårbarhet er svakheter som kan utnyttes av trusselen (f.eks. ulast dor).',
  },
  {
    question: 'Hvilken risikohåndteringsstrategi brukes nårman tegner forsikring?',
    options: ['Overføre risiko', 'Unngå risiko', 'Redusere risiko', 'Akseptere risiko'],
    explanation: 'Forsikring er et eksempel påa overføre risiko. Du betaler forsikringsselskapet for a baere den økonomiske risikoen ved en eventuell hendelse.',
  },
  {
    question: 'Hva kalles risikoen som gjenstår etter at tiltak er implementert?',
    options: ['Restrisiko', 'Gjenvarende trussel', 'Akseptert sårbarhet', 'Minimumsrisiko'],
    explanation: 'Restrisiko er risikoen som gjensstar etter at sikkerhetstiltak er implementert. Ingen tiltak gir 100% sikkerhet, så det vil alltid være en viss restrisiko.',
  },
  {
    question: 'Hvilken farge i risikomatrisen indikerer at umiddelbar handling kreves?',
    options: ['Rod (hoy/svært høy risiko)', 'Oransje (moderat risiko)', 'Gronn (lav risiko)', 'Gul (akseptabel risiko)'],
    explanation: 'Rode risikoer (hoy/svært høy) krever umiddelbar handling. Oransje risikoer bør vurderes for tiltak, mens grønne risikoer normalt er akseptable.',
  },
],


  'sikkerhetsfag-3': [
  {
    question: 'Hva er dybdeforsvar i sikkerhetssammenheng?',
    options: ['Flære uavhengige sikkerhetslag som overlapper hverandre', 'Et system med ekstra dype grøfter rundt bygningen', 'Ekstra sikring av kjellæren', 'A grave ned verdifulle gjenstander'],
    explanation: 'Dybdeforsvar handler om å ha flere uavhengige sikkerhetslag (perimeter, bygning, rom, objekt) slik at hvis ett lag svikter, vil de andre fortsatt gi beskyttelse.',
  },
  {
    question: 'Hva star CPTED for?',
    options: ['Crime Prevention Through Environmental Design', 'Certified Professional Technical Defense', 'Central Protection Technology Defense', 'Controlled Perimeter Total Defense'],
    explanation: 'CPTED står for Crime Prevention Through Environmental Design - kriminalitetsførebygging gjennom utforming av omgivelsene.',
  },
  {
    question: 'Hvilke fire prinsipper inngår i CPTED?',
    options: ['Naturlig overvaking, naturlig adgangskontroll, territoriell forsterkning, aktivitetsstøtte', 'Forebygging, avdekking, respons, evaluering', 'Fysisk, teknisk, organisatorisk, menneskelig', 'Perimeter, bygning, rom, objekt'],
    explanation: 'De fire CPTED-prinsippene er naturlig overvaking (god sikt), naturlig adgangskontroll (tydelige grenser), territoriell forsterkning (eierskap) og aktivitetsstøtte (legitim bruk).',
  },
  {
    question: 'I sikkerhetssone-inndelingen, hvilken sone har strengest sikkerhet?',
    options: ['Sone 4 - Sikret sone', 'Sone 1 - Offentlig sone', 'Sone 2 - Semi-offentlig sone', 'Sone 3 - Privat sone'],
    explanation: 'Sone 4 (sikret sone) har strengest sikkerhet med begrenset tilgang, flere sikkerhetslag og oppbevaring av høyverdige eiendeler.',
  },
  {
    question: 'Hva registrerer en PIR-bevegelsesdetektor?',
    options: ['Varmestråling fra mennesker', 'Lyden av bevegelse', 'Endringer i lufttrykk', 'Magnetiske felt'],
    explanation: 'PIR (Passive Infrared) bevegelsesdetektorer registrerer varmestråling fra mennesker og dyr. De dekker et definert område og kan gi falske alarmer fra varmekilder.',
  },
],


  'sikkerhetsfag-4': [
  {
    question: 'Hvilke tre faktorer baseres adgangskontroll pa?',
    options: ['Noe du vet, noe du har, noe du er', 'Kort, kode og kamera', 'Alarm, las og vakt', 'Sone, barriere og kontroll'],
    explanation: 'Adgangskontroll baseres påtre faktorer: noe du vet (passord/PIN), noe du har (kort/nokkel), og noe du er (biometri). To-faktor kombinerer to av disse.',
  },
  {
    question: 'Hva er normal maksimal lagringstid for kameraopptak?',
    options: ['7 dager', '24 timer', '30 dager', '72 timer'],
    explanation: 'Normal maksimal lagringstid for kameraopptak er 7 dager. Opptak kan kun lagres lenger hvis det er en konkret hendelse som krever det.',
  },
  {
    question: 'Hva star 5W + H for i rapportskriving?',
    options: ['What, When, Where, Who, Why + How', 'Warning, Waiting, Watching, Working, Writing + Helping', 'Walk, Watch, Wait, Warn, Write + Help', 'Work, Watch, Write, Warn, Wait + Handle'],
    explanation: '5W + H står for What (hva skjedde), When (nar), Where (hvor), Who (hvem), Why (hvorfor) og How (hvordan). Metoden sikrer at rapporten inneholder all vesentlig informasjon.',
  },
  {
    question: 'Hvilken korttype anses som standard for adgangskontroll i dag?',
    options: ['Proximity-kort (RFID)', 'Magnetstripekort', 'Smartkort', 'Strekodekort'],
    explanation: 'Proximity-kort (RFID) er standard i dag. De har beroringsri avlesning, er vanskeligere a kopiere enn magnetstripe, og har lang levetid.',
  },
  {
    question: 'Hva måinkluderes påskilt om kameraovervaking?',
    options: ['At området er overvåket, hvem som er ansvårlig, og kontaktinformasjon', 'Kun at området er kameraovervåket', 'Kameraets plassering og type', 'Lagringstid for opptak'],
    explanation: 'Skilting om kameraovervaking skal inneholde at området er kameraovervåket, hvem som er ansvårlig for overvakingen, og kontaktinformasjon.',
  },
],


  'sikkerhetsfag-5': [
  {
    question: 'Hvilke tre elementer utgjør branntrekanten?',
    options: ['Brennbart materiale, oksygen og varme', 'Ild, luft og brensel', 'Varme, royk og lys', 'Gnist, gass og metall'],
    explanation: 'Branntrekanten består av brennbart materiale (brensel), oksygen og varme (tenntemperatur). Alle tre måvære til stede for at brann skal oppsta.',
  },
  {
    question: 'Hvilket slokkemiddel er best egnet for brann i elektronisk utstyr?',
    options: ['CO2', 'Vann', 'Skum', 'Våtkjemisk'],
    explanation: 'CO2 (karbondioksid) er best egnet for elektronikk fordi det ikke leder strøm og ikke etterlater rester som kan skade utstyret.',
  },
  {
    question: 'Hva star PASS-metoden for ved bruk av brannslokker?',
    options: ['Pull, Aim, Squeeze, Sweep', 'Prepare, Activate, Spray, Stop', 'Position, Alert, Suppress, Secure', 'Point, Aim, Shoot, Spray'],
    explanation: 'PASS står for: Pull (trekk ut sikringssplinten), Aim (rett mot brannens base), Squeeze (klem handtaket), Sweep (fei fra side til side).',
  },
  {
    question: 'Hva er brannklasse B?',
    options: ['Vaskebranner (bensin, olje, maling)', 'Faste stoffer (tre, papir, tekstil)', 'Gassbranner (propan, metan)', 'Metallbranner (magnesium, natrium)'],
    explanation: 'Brannklasse B omfatter vaskebrannen som bensin, olje og maling. Klasse A er faste stoffer, C er gass, D er metall og F er matolje.',
  },
  {
    question: 'Hva er maksimal avstand til nærmeste nodutgang ifølge kravene?',
    options: ['30 meter', '15 meter', '50 meter', '100 meter'],
    explanation: 'Maksimalt 30 meter til nærmeste utgang er kravet for romningsveier. Rømningsveiene skal alltid være åpne, merket med skilt og ha nodbelysning.',
  },
],


  'sikkerhetsfag-6': [
  {
    question: 'Hvem har overordnet ansvar for HMS i en virksomhet?',
    options: ['Arbeidsgiver', 'Verneombudet', 'Arbeidsmiljøutvalget', 'Tillitsvalgte'],
    explanation: 'Arbeidsgiver har det overordnede ansvåret for HMS. Verneombudet og AMU har viktige roller, men det formelle ansvåret ligger hos arbeidsgiver.',
  },
  {
    question: 'Hva star ABCDE for i førstehjelp?',
    options: ['Airway, Breathing, Circulation, Disability, Expose', 'Alert, Breathe, Call, Do, Evaluate', 'Always Be Careful During Emergencies', 'Assess, Bandage, Compress, Dress, Elevate'],
    explanation: 'ABCDE står for Airway (luftveier), Breathing (pusting), Circulation (sirkulasjon), Disability (bevissthet) og Expose (eksponere/avdekke).',
  },
  {
    question: 'Hvor mange brystkompresjoner gis for hver 2 innblåsinger ved HLR?',
    options: ['30 kompresjoner', '15 kompresjoner', '20 kompresjoner', '10 kompresjoner'],
    explanation: 'Ved hjerte-lungeredning (HLR) gir man 30 brystkompresjoner etterfulgt av 2 innblåsinger. Kompresjonene skal være 5-6 cm dype og i takt 100-120 per minutt.',
  },
  {
    question: 'Hvilket organ har tilsynsmyndighet for HMS og kan stanse farlig arbeid?',
    options: ['Verneombudet', 'Arbeidstilsynet', 'Politiet', 'Brannsjefen'],
    explanation: 'Verneombudet er valgt av de ansatte og har myndighet til a stanse farlig arbeid. Arbeidstilsynet er ekstern tilsynsmyndighet for HMS.',
  },
  {
    question: 'Hva er grensen for høyselesskade fra stoy?',
    options: ['85 dB', '60 dB', '100 dB', '70 dB'],
    explanation: 'Grensen for når støy kan gi hørselsskade er 85 dB. Ved stoy over denne grensen måhorselsvern brukes.',
  },
],


  'sikkerhetsfag-7': [
  {
    question: 'Hva er minimumsalder for å bli vekter i Norge?',
    options: ['18 år', '16 år', '20 år', '21 år'],
    explanation: 'I henhold til vaktvirksomhetsloven måman være minimum 18 årfor a fa vekterlegitimation og arbeide som vekter.',
  },
  {
    question: 'Hvilken lov hjemler enhvers rett til pagripelse påfersk gjerning?',
    options: ['Straffeprosessloven § 176', 'Straffeloven § 17', 'Straffeloven § 18', 'Vaktvirksomhetsloven § 12'],
    explanation: 'Straffeprosessloven § 176 gir enhver rett til a pagripe person som treffes påfersk gjerning eller påflukt fra det.',
  },
  {
    question: 'Hva er forskjellen pånodrett og nodverge?',
    options: ['Nødrett redder fra fare, nodverge forsvarer mot angrep', 'Nodrett gjelder for vektere, nodverge for alle', 'Det er ingen forskjell', 'Nodrett er lovlig, nodverge er ulovlig'],
    explanation: 'Nodrett (§ 17) gir rett til a bega ellers straffbare handlinger for a redde fra fare. Nodverge (§ 18) gir rett til a forsvare seg mot ulovlige angrep.',
  },
  {
    question: 'Hva innebærer maktpyramidens prinsipp?',
    options: ['Start med minst inngripende middel og ok gradvis', 'Bruk alltid maksimal makt for sikkerhet', 'La politiet handtere all maktbruk', 'Makt er aldri tillatt for vektere'],
    explanation: 'Maktpyramiden innebærer a starte med minst inngripende middel (tilstedevarelse) og gradvis oke om nødvendig, fra verbal kommunikasjon til fysisk makt kun i nodverge.',
  },
  {
    question: 'Hvor lenge er en vekterlegitimation gyldig?',
    options: ['5 år', '1 år', '3 år', '10 år'],
    explanation: 'Vekterlegitimation utstedes av politiet og er gyldig i 5 år. Den skal alltid medbringes under tjeneste og fremvises påoppfordring.',
  },
],


  'sikkerhetsfag-8': [
  {
    question: 'Hva innebærer ansvarsprinsippet i beredskap?',
    options: ['Den som har ansvar til daglig har også ansvar under krise', 'Politiet har alltid ansvar under krise', 'Kriseledelsen overtar alt ansvar', 'Staten har ansvar for all krisehåndtering'],
    explanation: 'Ansvarsprinsippet innebærer at den som har ansvar i en normalsituasjon også har ansvar under en krise. Ansvåret flyttes ikke til andre.',
  },
  {
    question: 'Hva er riktig rekkefølge ved terrorsituasjon?',
    options: ['Lop, gjemm, varsle', 'Varsle, gjemm, lop', 'Gjemm, varsle, lop', 'Varsle, lop, gjemm'],
    explanation: 'Ved terror er rekkefølgen: 1) Lop - kom deg vekk hvis mulig, 2) Gjemm - sok dekning hvis du ikke kan flykte, 3) Varsle - ring 112 nårdet er trygt.',
  },
  {
    question: 'Hvilke fire beredskapsprinsipper gjelder i Norge?',
    options: ['Ansvar, likhet, nærhet, samvirke', 'Forebygging, avdekking, respons, evaluering', 'Varsling, mobilisering, respons, normalisering', 'Planlegging, øving, gjennomføring, læring'],
    explanation: 'De fire beredskapsprinsippene er ansvarsprinsippet, likhetsprinsippet, nærhetsprinsippet og samvirkeprinsippet.',
  },
  {
    question: 'Hva er formålet med en bordovelse (diskusjonsovelse)?',
    options: ['Gjennomgang av planer og diskusjon av scenarier', 'Full fysisk gjennomforing av en krise', 'Test av enkeltfunksjoner som varsling', 'Trening av utrykningskjoring'],
    explanation: 'En bordovelse (diskusjonsovelse) innebærer gjennomgang av planer, diskusjon av scenarier og klargjøring av roller. Den krever lite ressurser men gir god læring.',
  },
  {
    question: 'Hva skal du gjøre først ved en bombetrussel påtelefon?',
    options: ['Behold roen og hold samtalen gående', 'Legg påog varsle politiet', 'Start umiddelbar evakuering', 'Ignorer trusselen'],
    explanation: 'Ved bombetrussel påtelefon skal du behold roen, holde samtalen gaende sålenge som mulig, og forsoke a fa mest mulig informasjon om bomben for du varsler politiet.',
  },
],


};

export default quizData_sikkerhetsfag;
