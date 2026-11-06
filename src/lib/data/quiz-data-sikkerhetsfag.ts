import type { QuizQuestion } from './quiz-data';

const quizData_sikkerhetsfag: Record<string, QuizQuestion[]> = {
  "sikkerhetsfag-1": [
    {
      question: "Hva er de tre grunnpilarene i sikkerhetsarbeid?",
      options: ["Forebygging, avdekking og respons", "Planlegging, gjennomføring og evaluering", "Vakthold, overvaking og kontroll", "Risiko, sårbarhet og trussel"],
      explanation: "Sikkerhetens tre grunnpilarer er førebygging (hindre hendelser), avdekking (oppdage hendelser tidlig) og respons (handtere hendelser effektivt).",
    },
    {
      question: "Hva er minimumskravet til vekterutdanning i Norge?",
      options: ["105 timer", "80 timer", "50 timer", "200 timer"],
      explanation: "I Norge er minimumskravet til vekterutdanning 105 timer. Dette inkluderer både teori og praksis, og er regulert i vaktvirksomhetsloven.",
    },
    {
      question: "Hvilken etisk grunnverdi innebærer å handle ærlig og konsekvent?",
      options: ["Integritet", "Lojalitet", "Respekt for andre", "Taushetsplikt"],
      explanation: "Integritet betyr å handle ærlig og konsekvent. Det innebærer blant annet å aldri la seg bestikke, rapportere sannferdig og ta ansvar for egne feil.",
    },
    {
      question: "Hvilken yrkesrolle har det overordnede ansvaret for sikkerheten i en virksomhet?",
      options: ["Sikkerhetsleder", "Vekter i tjeneste", "Sikkerhetsradgiver", "Operator i alarmsentral"],
      explanation: "Sikkerhetslederen har det overordnede ansvaret for sikkerheten, inkludert å utvikle sikkerhetsstrategi, gjennomføre risikovurderinger og lede sikkerhetspersonell.",
    },
    {
      question: "Nårtaushetsplikten for vektere star i konflikt med andre hensyn, hva gåroverst?",
      options: ["Lojalitet til loven", "Lojalitet til arbeidsgiver", "Lojalitet til kolleger", "Lojalitet til kunden"],
      explanation: "Nårdet oppstår konflikt mellom lojaliteter, står lojalitet til loven alltid øverst. Vektere måderfor rapportere lovbrudd selv om det gårpåtvers av andre lojaliteter.",
    },
  ],
  "sikkerhetsfag-2": [
    {
      question: "Hvordan defineres risiko i sikkerhetsarbeid?",
      options: ["Sannsynlighet multiplisert med konsekvens", "Konsekvens minus forebyggende tiltak", "Summen av alle identifiserte trusler i et gitt tidsrom", "Antall sårbarheter delt på verdiene som beskyttes"],
      explanation: "Risiko defineres som kombinasjonen (produktet) av sannsynlighet for at en uønsket hendelse inntreffer og konsekvensene av hendelsen.",
    },
    {
      question: "Hva er forskjellen mellom trussel og sårbarhet?",
      options: ["Trussel er årsak, sårbarhet er svakhet som kan utnyttes", "Trussel er fysisk, sårbarhet er psykisk", "Trussel oppstår alltid internt i virksomheten, sårbarhet kommer utenfra", "Trussel er intern, sårbarhet er ekstern"],
      explanation: "En trussel er en potensiell årsak til en uønsket hendelse (f.eks. en innbruddstyv), mens sårbarhet er svakheter som kan utnyttes av trusselen (f.eks. ulast dor).",
    },
    {
      question: "Hvilken risikohåndteringsstrategi brukes nårman tegner forsikring?",
      options: ["Overføre risiko", "Unngå risiko", "Redusere risiko", "Akseptere risiko"],
      explanation: "Forsikring er et eksempel påa overføre risiko. Du betaler forsikringsselskapet for a bære den økonomiske risikoen ved en eventuell hendelse.",
    },
    {
      question: "Hva kalles risikoen som gjenstår etter at tiltak er implementert?",
      options: ["Restrisiko", "Gjenværende trussel", "Akseptert sårbarhet", "Minimumsrisiko"],
      explanation: "Restrisiko er risikoen som gjensstar etter at sikkerhetstiltak er implementert. Ingen tiltak gir 100% sikkerhet, så det vil alltid være en viss restrisiko.",
    },
    {
      question: "Hvilken farge i risikomatrisen indikerer at umiddelbar handling kreves?",
      options: ["Rod (hoy/svært høy risiko)", "Oransje (moderat risiko)", "Oransje (moderat risiko som må håndteres straks)", "Gul (akseptabel og lav risiko)"],
      explanation: "Rode risikoer (hoy/svært høy) krever umiddelbar handling. Oransje risikoer bør vurderes for tiltak, mens grønne risikoer normalt er akseptable.",
    },
  ],
  "sikkerhetsfag-3": [
    {
      question: "Hva er dybdeforsvar i sikkerhetssammenheng?",
      options: ["Flære uavhengige sikkerhetslag som overlapper hverandre", "Et system med ekstra dype grøfter rundt bygningen", "Et system med ekstra dype vollgraver og grøfter rundt hele bygningen", "Å grave ned verdifulle gjenstander dypt i bakken så tyver ikke finner dem"],
      explanation: "Dybdeforsvar handler om å ha flere uavhengige sikkerhetslag (perimeter, bygning, rom, objekt) slik at hvis ett lag svikter, vil de andre fortsatt gi beskyttelse.",
    },
    {
      question: "Hva star CPTED for?",
      options: ["Crime Prevention Through Environmental Design", "Certified Professional Technical Defense System", "Controlled Perimeter Total External Deterrence", "Central Protection Technology Emergency Directive"],
      explanation: "CPTED står for Crime Prevention Through Environmental Design - kriminalitetsførebygging gjennom utforming av omgivelsene.",
    },
    {
      question: "Hvilke fire prinsipper inngår i CPTED?",
      options: ["Naturlig overvaking, naturlig adgangskontroll, territoriell forsterkning, aktivitetsstøtte", "Fysisk sikring, teknisk sikring, organisatorisk sikring og menneskelig sikring", "Forebygging, avdekking, respons og etterfølgende evaluering av tiltak", "Perimetersikring, bygningssikring, romsikring og objektsikring i lag"],
      explanation: "De fire CPTED-prinsippene er naturlig overvaking (god sikt), naturlig adgangskontroll (tydelige grenser), territoriell forsterkning (eierskap) og aktivitetsstøtte (legitim bruk).",
    },
    {
      question: "I sikkerhetssone-inndelingen, hvilken sone har strengest sikkerhet?",
      options: ["Sone 4 - Sikret sone", "Sone 1 - Offentlig sone", "Sone 2 - Semi-offentlig sone", "Sone 3 - Privat sone"],
      explanation: "Sone 4 (sikret sone) har strengest sikkerhet med begrenset tilgang, flere sikkerhetslag og oppbevaring av høyverdige eiendeler.",
    },
    {
      question: "Hva registrerer en PIR-bevegelsesdetektor?",
      options: ["Varmestråling fra mennesker", "Endringer i lufttrykk", "Lyden av bevegelse gjennom følsomme mikrofoner i rommet", "Lyden av bevegelse"],
      explanation: "PIR (Passive Infrared) bevegelsesdetektorer registrerer varmestråling fra mennesker og dyr. De dekker et definert område og kan gi falske alarmer fra varmekilder.",
    },
  ],
  "sikkerhetsfag-4": [
    {
      question: "Hvilke tre faktorer baseres adgangskontroll pa?",
      options: ["Noe du vet, noe du har, noe du er", "Sone, barriere og kontroll", "Kortleser, kode og videokamera", "Kort, kode og kamera"],
      explanation: "Adgangskontroll baseres påtre faktorer: noe du vet (passord/PIN), noe du har (kort/nokkel), og noe du er (biometri). To-faktor kombinerer to av disse.",
    },
    {
      question: "Hva er normal maksimal lagringstid for kameraopptak?",
      options: ["7 dager", "24 timer", "30 dager", "72 timer"],
      explanation: "Normal maksimal lagringstid for kameraopptak er 7 dager. Opptak kan kun lagres lenger hvis det er en konkret hendelse som krever det.",
    },
    {
      question: "Hva star 5W + H for i rapportskriving?",
      options: ["What, When, Where, Who, Why + How", "Warning, Waiting, Watching, Working, Writing + Helping", "Walk, Watch, Wait, Warn, Write + Help", "Work, Watch, Write, Warn, Wait + Handle"],
      explanation: "5W + H står for What (hva skjedde), When (nar), Where (hvor), Who (hvem), Why (hvorfor) og How (hvordan). Metoden sikrer at rapporten inneholder all vesentlig informasjon.",
    },
    {
      question: "Hvilken korttype anses som standard for adgangskontroll i dag?",
      options: ["Proximity-kort (RFID)", "Magnetstripekort", "Optisk strekodekort", "Strekodekort"],
      explanation: "Proximity-kort (RFID) er standard i dag. De har beroringsri avlesning, er vanskeligere å kopiere enn magnetstripe, og har lang levetid.",
    },
    {
      question: "Hva måinkluderes påskilt om kameraovervaking?",
      options: ["At området er overvåket, hvem som er ansvarlig, og kontaktinformasjon", "Kameraets nøyaktige plassering og hvilken kameratype som brukes", "Kun en tydelig opplysning om at området er kameraovervåket", "Hvor lenge opptakene lagres før de automatisk slettes"],
      explanation: "Skilting om kameraovervaking skal inneholde at området er kameraovervåket, hvem som er ansvarlig for overvåkingen, og kontaktinformasjon.",
    },
  ],
  "sikkerhetsfag-5": [
    {
      question: "Hvilke tre elementer utgjør branntrekanten?",
      options: ["Brennbart materiale, oksygen og varme", "Gnist, gass og metall", "Sterk varme, tett røyk og synlig lys fra flammene", "Ild, luft og brensel"],
      explanation: "Branntrekanten består av brennbart materiale (brensel), oksygen og varme (tenntemperatur). Alle tre måvære til stede for at brann skal oppstå.",
    },
    {
      question: "Hvilket slokkemiddel er best egnet for brann i elektronisk utstyr?",
      options: ["CO2", "Vann", "Skum", "Våtkjemisk"],
      explanation: "CO2 (karbondioksid) er best egnet for elektronikk fordi det ikke leder strøm og ikke etterlater rester som kan skade utstyret.",
    },
    {
      question: "Hva star PASS-metoden for ved bruk av brannslokker?",
      options: ["Pull, Aim, Squeeze, Sweep", "Prepare, Activate, Spray, Stop", "Position, Alert, Suppress, Secure", "Point, Aim, Shoot, Spray"],
      explanation: "PASS står for: Pull (trekk ut sikringssplinten), Aim (rett mot brannens base), Squeeze (klem handtaket), Sweep (fei fra side til side).",
    },
    {
      question: "Hva er brannklasse B?",
      options: ["Vaskebranner (bensin, olje, maling)", "Faste stoffer (tre, papir, tekstil)", "Gassbranner (propan, metan)", "Metallbranner (magnesium, natrium)"],
      explanation: "Brannklasse B omfatter vaskebrannen som bensin, olje og maling. Klasse A er faste stoffer, C er gass, D er metall og F er matolje.",
    },
    {
      question: "Hva er maksimal avstand til nærmeste nødutgang ifølge kravene?",
      options: ["30 meter", "15 meter", "50 meter", "100 meter"],
      explanation: "Maksimalt 30 meter til nærmeste utgang er kravet for rømningsveier. Rømningsveiene skal alltid være åpne, merket med skilt og ha nodbelysning.",
    },
  ],
  "sikkerhetsfag-6": [
    {
      question: "Hvem har overordnet ansvar for HMS i en virksomhet?",
      options: ["Arbeidsgiver", "Verneombudet", "Arbeidsmiljøutvalget", "Tillitsvalgte"],
      explanation: "Arbeidsgiver har det overordnede ansvaret for HMS. Verneombudet og AMU har viktige roller, men det formelle ansvaret ligger hos arbeidsgiver.",
    },
    {
      question: "Hva star ABCDE for i førstehjelp?",
      options: ["Airway, Breathing, Circulation, Disability, Expose", "Always Be Careful During any Emergency situation at work", "Assess, Bandage, Compress the wound, Dress it, Elevate", "Alert, Breathe, Call for help, Do compressions, Evaluate"],
      explanation: "ABCDE står for Airway (luftveier), Breathing (pusting), Circulation (sirkulasjon), Disability (bevissthet) og Expose (eksponere/avdekke).",
    },
    {
      question: "Hvor mange brystkompresjoner gis for hver 2 innblåsinger ved HLR?",
      options: ["30 kompresjoner", "15 kompresjoner", "20 kompresjoner", "10 kompresjoner"],
      explanation: "Ved hjerte-lungeredning (HLR) gir man 30 brystkompresjoner etterfulgt av 2 innblåsinger. Kompresjonene skal være 5-6 cm dype og i takt 100-120 per minutt.",
    },
    {
      question: "Hvilket organ har tilsynsmyndighet for HMS og kan stanse farlig arbeid?",
      options: ["Verneombudet", "Arbeidstilsynet", "Politiet", "Brannsjefen"],
      explanation: "Verneombudet er valgt av de ansatte og har myndighet til a stanse farlig arbeid. Arbeidstilsynet er ekstern tilsynsmyndighet for HMS.",
    },
    {
      question: "Hva er grensen for høyselesskade fra støy?",
      options: ["85 dB", "60 dB", "100 dB", "70 dB"],
      explanation: "Grensen for når støy kan gi hørselsskade er 85 dB. Ved støy over denne grensen måhorselsvern brukes.",
    },
  ],
  "sikkerhetsfag-7": [
    {
      question: "Hva er minimumsalder for å bli vekter i Norge?",
      options: ["18 år", "16 år", "20 år", "21 år"],
      explanation: "I henhold til vaktvirksomhetsloven måman være minimum 18 årfor a fa vekterlegitimation og arbeide som vekter.",
    },
    {
      question: "Hvilken lov hjemler enhvers rett til pågripelse påfersk gjerning?",
      options: ["Straffeprosessloven § 176", "Straffeloven § 17", "Straffeloven § 18", "Vaktvirksomhetsloven § 12"],
      explanation: "Straffeprosessloven § 176 gir enhver rett til a pågripe person som treffes påfersk gjerning eller påflukt fra det.",
    },
    {
      question: "Hva er forskjellen pånodrett og nødverge?",
      options: ["Nødrett redder fra fare, nødverge forsvarer mot angrep", "Nødrett gjelder for vektere, nødverge for alle", "Nødrett gjelder bare for vektere", "Nødrett er lovlig, nødverge er ulovlig"],
      explanation: "Nødrett (§ 17) gir rett til a bega ellers straffbare handlinger for a redde fra fare. Nødverge (§ 18) gir rett til å forsvare seg mot ulovlige angrep.",
    },
    {
      question: "Hva innebærer maktpyramidens prinsipp?",
      options: ["Start med minst inngripende middel og ok gradvis", "Bruk alltid maksimal makt for sikkerhet", "Grip aldri selv inn ved maktbruk", "La politiet handtere all maktbruk"],
      explanation: "Maktpyramiden innebærer å starte med minst inngripende middel (tilstedeværelse) og gradvis oke om nødvendig, fra verbal kommunikasjon til fysisk makt kun i nødverge.",
    },
    {
      question: "Hvor lenge er en vekterlegitimation gyldig?",
      options: ["5 år", "1 år", "3 år", "10 år"],
      explanation: "Vekterlegitimation utstedes av politiet og er gyldig i 5 år. Den skal alltid medbringes under tjeneste og fremvises påoppfordring.",
    },
  ],
  "sikkerhetsfag-8": [
    {
      question: "Hva innebærer ansvarsprinsippet i beredskap?",
      options: ["Den som har ansvar til daglig har også ansvar under krise", "Staten har ansvar for all krisehåndtering", "Staten sentralt bærer ansvaret for all krisehåndtering i kommunene", "Politiet overtar alltid det fulle ansvaret så snart en krise inntreffer"],
      explanation: "Ansvarsprinsippet innebærer at den som har ansvar i en normalsituasjon også har ansvar under en krise. Ansvaret flyttes ikke til andre.",
    },
    {
      question: "Hva er riktig rekkefølge ved terrorsituasjon?",
      options: ["Lop, gjemm, varsle", "Varsle, gjemm, lop", "Gjemm, varsle, lop", "Varsle, lop, gjemm"],
      explanation: "Ved terror er rekkefølgen: 1) Lop - kom deg vekk hvis mulig, 2) Gjemm - sok dekning hvis du ikke kan flykte, 3) Varsle - ring 112 nårdet er trygt.",
    },
    {
      question: "Hvilke fire beredskapsprinsipper gjelder i Norge?",
      options: ["Ansvar, likhet, nærhet, samvirke", "Forebygging, avdekking, respons, evaluering", "Varsling, mobilisering, respons, normalisering", "Planlegging, øving, gjennomføring, læring"],
      explanation: "De fire beredskapsprinsippene er ansvarsprinsippet, likhetsprinsippet, nærhetsprinsippet og samvirkeprinsippet.",
    },
    {
      question: "Hva er formålet med en bordovelse (diskusjonsovelse)?",
      options: ["Gjennomgang av planer og diskusjon av scenarier", "Full fysisk gjennomføring av en krise", "En full fysisk gjennomføring av et realistisk krisescenario i felt", "Test av enkeltfunksjoner som varsling"],
      explanation: "En bordovelse (diskusjonsovelse) innebærer gjennomgang av planer, diskusjon av scenarier og klargjøring av roller. Den krever lite ressurser men gir god læring.",
    },
    {
      question: "Hva skal du gjøre først ved en bombetrussel påtelefon?",
      options: ["Behold roen og hold samtalen gående", "Start umiddelbar evakuering", "Sett i gang umiddelbar full evakuering av hele bygningen", "Legg påog varsle politiet"],
      explanation: "Ved bombetrussel påtelefon skal du behold roen, holde samtalen gaende sålenge som mulig, og forsøke a fa mest mulig informasjon om bomben for du varsler politiet.",
    },
  ],
  "sikkerhetsfag-1-1": [
    {
      question: "Hvordan defineres sikkerhet i faglig sammenheng?",
      options: ["En tilstand der risikoen for uønskede hendelser er akseptabel", "At det er montert godkjente alarmsystemer på hele bygningen", "En tilstand med fullstendig fravær av enhver fare og all risiko", "At politiet til enhver tid har full kontroll over området"],
      explanation: "Sikkerhet er en tilstand der risikoen er redusert til et akseptabelt niva. Det handler ikke om null risiko, men om et forsvarlig niva.",
    },
    {
      question: "Hva er forskjellen mellom safety og security?",
      options: ["Safety gjelder utilsiktede hendelser, security gjelder tilsiktede hendelser", "Safety gjelder utelukkende brann, mens security kun gjelder tyveri", "Safety gjelder tilsiktede hendelser, security gjelder utilsiktede hendelser", "Safety gjelder tilsiktede hendelser, security gjelder utilsiktede"],
      explanation: "Safety handler om beskyttelse mot utilsiktede hendelser (ulykker, naturkatastrofer), mens security handler om beskyttelse mot tilsiktede hendelser (kriminalitet, terror, sabotasje).",
    },
    {
      question: "Hvordan uttrykkes risiko som en sammenheng mellom to faktorer?",
      options: ["Risiko = sannsynlighet x konsekvens", "Risiko = sannsynlighet + konsekvens", "Risiko = konsekvens - tiltak", "Risiko = trussel x sårbarhet x verdi"],
      explanation: "Risiko er kombinasjonen av sannsynligheten for at en uønsket hendelse inntreffer og konsekvensene dersom den inntreffer: Risiko = sannsynlighet x konsekvens.",
    },
    {
      question: "Hva beskriver trygghetsparadokset?",
      options: ["At vellykket sikkerhetsarbeid kan fore til at folk undervurderer farene", "At sikkerhetsarbeid uunngåelig blir stadig dyrere jo lenger det pågår", "At begrepene trygghet og sikkerhet i praksis alltid betyr det samme", "At folk føler seg utrygge selv når alle tiltak faktisk er på plass"],
      explanation: "Trygghetsparadokset oppstår nar sikkerhetsarbeidet er så effektivt at det blir usynlig, slik at folk senker guarden, kutter budsjetter og slapper på rutinene.",
    },
    {
      question: "Hvilken faktor er IKKE typisk for hva som regnes som akseptabel risiko?",
      options: ["At hendelsen aldri kan inntreffe", "Kost-nytte-vurdering av tiltak", "En kost-nytte-vurdering av aktuelle tiltak", "Bransjenormer og standarder"],
      explanation: "Akseptabel risiko bestemmes av lovkrav, bransjenormer, kost-nytte og verdier. Det er umulig å eliminere all risiko, så et krav om at hendelsen aldri kan skje er ikke realistisk.",
    },
  ],
  "sikkerhetsfag-1-2": [
    {
      question: "Hva er minimumskravet til vekterutdanning i Norge?",
      options: ["105 timer", "50 timer", "80 timer", "200 timer"],
      explanation: "Minimumskravet til vekterutdanning i Norge er 105 timer med både teori og praksis, regulert i vaktvirksomhetsregelverket.",
    },
    {
      question: "Hvilken myndighet har en vekter sammenlignet med politiet?",
      options: ["Vekter har ikke politimyndighet, men kan bortvise og foreta borgerpagripelse", "Vekter har i praksis samme myndighet som politiet på oppdragsstedet", "Vekter kan ilegge bøter og skrive ut forelegg ved lovbrudd", "Vekter kan fritt ransake personer som mistenkes for tyveri"],
      explanation: "En vekter har ikke politimyndighet. Vekteren kan bortvise personer fra privat område og pågripe noen som tas på fersk gjerning (borgerpagripelse).",
    },
    {
      question: "Hva regulerer vaktvirksomhetsforskriften?",
      options: ["Godkjenning av vaktselskaper, utdanning, uniformering og rapportering", "Kun brannvern og rømningsveier i bygninger der vektere jobber", "Kun lønn, arbeidstid og turnusordninger for ansatte vektere", "Kun bruk av kameraovervåking og lagring av videoopptak"],
      explanation: "Vaktvirksomhetsforskriften stiller krav til godkjenning av vaktselskaper, vekterutdanning, uniformering, legitimasjon og rapportering. Politiet er tilsynsmyndighet.",
    },
    {
      question: "Hvem er tilsynsmyndighet for vaktvirksomhet i Norge?",
      options: ["Politiet", "Arbeidstilsynet", "Datatilsynet", "Direktoratet for samfunnssikkerhet"],
      explanation: "Politiet er tilsynsmyndighet og kan trekke tilbake godkjenningen til et vaktselskap ved brudd på regelverket.",
    },
    {
      question: "Hva gjor en objektvekter typisk ved vaktstart?",
      options: ["Sjekker vaktprotokoll og tar imot rapport fra forrige vakt", "Ringer politiet for å melde seg formelt på vakt for dagen", "Drar hjem for å hvile før den egentlige vaktrunden begynner", "Slår av alle alarmer i bygget så de ikke utløses under vakten"],
      explanation: "Ved vaktstart sjekker vekteren vaktprotokollen, tar imot rapport fra forrige vakt og gjor seg klar med uniform og utstyr.",
    },
  ],
  "sikkerhetsfag-1-3": [
    {
      question: "Hva betyr taushetsplikt for en vekter?",
      options: ["Plikt til a tie om fortrolig informasjon man får gjennom arbeidet", "Plikt til å informere media om alle hendelser som skjer på vakt", "Plikt til å dele all innhentet informasjon åpent med sine kolleger", "At vekteren aldri under noen omstendighet kan rapportere noe til politiet"],
      explanation: "Taushetsplikt betyr plikt til a tie om fortrolig informasjon man får kjennskap til gjennom arbeidet, for eksempel om kunder, hendelser og sikkerhetssystemer.",
    },
    {
      question: "Hva er yrkesetikk?",
      options: ["De moralske prinsippene og retningslinjene som styrer utøvelsen av et yrke", "Lovbestemmelser som fastsetter minstelønn innenfor et yrke", "En detaljert oversikt over arbeidstider og pauser i yrket", "Reglene for hvordan man skal kle seg korrekt og opptre høflig overfor kundene"],
      explanation: "Yrkesetikk er de moralske prinsippene og retningslinjene som styrer yrkesutøvelsen, blant annet respekt for menneskeverd, likebehandling, taushetsplikt og integritet.",
    },
    {
      question: "En venn ber deg slippe ham inn bakveien etter stengetid. Hva er riktig?",
      options: ["Si nei, fordi det bryter adgangskontrollrutinene og taushets/ansvarsplikten", "Be ham betale et beløp kontant for å få komme inn bakveien", "Slippe ham inn fordi han er en god venn du stoler helt på", "Slippe ham inn diskret så lenge ingen andre ser det skje"],
      explanation: "Du må si nei. Uvedkommende skal ikke ha tilgang utenom åpningstid uten godkjenning, uansett relasjon. Dette folger av adgangskontrollrutiner og ansvarsplikten.",
    },
    {
      question: "Hva innebærer integritet i yrkesetikken?",
      options: ["A handle ærlig og konsekvent og ikke la seg bestikke", "A være lojal mot arbeidsgiver uansett hva som blir bedt om", "Å alltid føye seg etter kundens ønsker for å unngå klager", "Å holde all informasjon skjult for ledelsen i virksomheten"],
      explanation: "Integritet betyr å handle ærlig og konsekvent, aldri la seg bestikke, rapportere sannferdig og ta ansvar for egne feil.",
    },
    {
      question: "Hva kan brudd på taushetsplikten i alvorlige tilfeller fore til?",
      options: ["Oppsigelse og straffeansvar", "Bare en muntlig advarsel", "En høyere lønn som kompensasjon for tabben", "Ingen konsekvenser for den ansatte"],
      explanation: "Brudd på taushetsplikten kan fore til oppsigelse, og i alvorlige tilfeller straffeansvar.",
    },
  ],
  "sikkerhetsfag-1-4": [
    {
      question: "Hva er hovedmålet med konflikthandtering?",
      options: ["A forebygge eskalering og fremme fredelig losning", "A unngå all kontakt med folk", "Å fjerne eller stenge ute alle som er uenige med deg", "Å unngå all kontakt med folk for å slippe konflikter"],
      explanation: "Konflikthandtering er evnen til a handtere uenigheter og truende situasjoner på en mate som forebygger eskalering og fremmer fredelig losning.",
    },
    {
      question: "Hva kjennetegner en god hendelsesrapport?",
      options: ["Den er objektiv, kronologisk og inneholder relevante fakta", "Den inneholder vekterens personlige meninger om de involverte", "Den skrives kun dersom politiet uttrykkelig ber om skriftlig dokumentasjon", "Den er kortest mulig og utelater tidspunkter og andre detaljer om hendelsen"],
      explanation: "En hendelsesrapport skal være objektiv, kronologisk og inneholde alle relevante fakta. Den brukes som dokumentasjon overfor oppdragsgiver, politi og forsikring.",
    },
    {
      question: "Hva bor du gjore først nar du møter en aggressiv, beruset person?",
      options: ["Bevare roen, holde rolig stemme og stå pa trygg avstand", "Rope høyt tilbake for å vise autoritet", "Ga rett bort og ta fysisk tak i personen for å fjerne vedkommende umiddelbart", "Snu ryggen til og ignorere personen"],
      explanation: "Forste steg er a bevare roen med rolig stemme og åpent kroppsspråk, og stå pa trygg avstand for a unngå eskalering.",
    },
    {
      question: "Hvorfor er det viktig å vise empati i konflikthandtering?",
      options: ["Det kan roe situasjonen og vise at man tar personen på alvor", "Det gir vekteren mer makt over personen", "Det er et absolutt lovkrav i alle konfliktsituasjoner en vekter kan mote", "Det gir vekteren mer makt og kontroll over personen i en presset situasjon"],
      explanation: "A vise empati signaliserer at man tar personen på alvor, noe som ofte demper konflikten og gjor det lettere å finne en losning.",
    },
    {
      question: "Hva er hensikten med skriftlig rapportering av en hendelse?",
      options: ["A dokumentere fakta for oppdragsgiver, politi og forsikring", "A erstatte all muntlig kommunikasjon mellom vekter og vaktsentral", "A gjore vekteren og selskapet mer kjent gjennom omtale i lokale medier", "A straffe personen som var involvert ved å gi videre bevis til domstolen"],
      explanation: "Skriftlig rapportering dokumenterer hendelsen objektivt og kronologisk, og brukes som grunnlag overfor oppdragsgiver, politi og forsikringsselskap.",
    },
  ],
  "sikkerhetsfag-1-5": [
    {
      question: "Hva er et fagbrev i sikkerhetsfag?",
      options: ["En formell yrkeskvalifikasjon etter VG1+VG2 og to ars læretid", "En tillatelse politiet gir uten utdanning", "En tillatelse politiet gir direkte uten krav om yrkesfaglig utdanning", "Et sertifikat som kun gir adgang til a betjene kameraovervakingssystemer"],
      explanation: "Fagbrev i sikkerhetsfag oppnås gjennom yrkesfaglig utdanning (VG1+VG2) etterfulgt av to ars læretid i bedrift, og dokumenterer profesjonell kompetanse.",
    },
    {
      question: "Hvordan har vekterrollen endret seg fra 1980 til i dag?",
      options: ["Fra analog patruljering til digital teknologi og IP-baserte systemer", "Vektere har fått politimyndighet og kan pågripe pa lik linje med politiet", "Den er i praksis helt uforandret med samme utstyr og oppgaver som for", "Vektere har mistet all teknologisk støtte og jobber kun manuelt i dag"],
      explanation: "Pa 1980-tallet brukte vektere lommelykt, notatblokk og analoge kameraer. I dag er sikkerhetsarbeid digitalt med IP-baserte systemer, elektronisk rapportering og avansert overvaking.",
    },
    {
      question: "Hva kjennetegnet alarmsystemene pa 1980-tallet?",
      options: ["De var enkle og ga mange falske utløsninger", "De var IP-baserte og digitale", "De var teknisk helt feilfrie og loste ut kun ved reelle innbrudd og branner", "De var helt feilfrie"],
      explanation: "Eldre alarmsystemer var enkle og ga ofte mange falske utløsninger, i motsetning til dagens mer avanserte og adresserbare systemer.",
    },
    {
      question: "Hva er en sentral drivkraft bak utviklingen av sikkerhetsfaget?",
      options: ["Teknologiutvikling og profesjonalisering", "Avvikling av utdanningskrav", "En gradvis avvikling av utdannings- og kompetansekravene til vektere", "Mindre behov for sikkerhet"],
      explanation: "Sikkerhetsfaget har utviklet seg fra nattevekteren til en moderne profesjon, drevet av teknologiutvikling, okte krav og profesjonalisering av yrket.",
    },
    {
      question: "Hvordan ble rapporter skrevet i tidligere tider sammenlignet med i dag?",
      options: ["For hand tidligere, elektronisk i dag", "Elektronisk tidligere, for hand i dag", "Aldri tidligere, alltid i dag", "Likt i begge perioder"],
      explanation: "Tidligere ble rapporter skrevet for hand, mens moderne sikkerhetsarbeid bruker elektronisk rapportering og digitale ronderingssystemer.",
    },
  ],
  "sikkerhetsfag-2-1": [
    {
      question: "Hva er en trussel i sikkerhetssammenheng?",
      options: ["En mulig uønsket handling eller hendelse som kan skade verdier vi vil beskytte", "Manglende evne til a motstå eller gjenopprette seg etter en uønsket hendelse", "Det faktiske resultatet av en hendelse malt i skade på liv, helse og verdier", "Et uttrykk for hvor trolig det er at en bestemt uønsket hendelse inntreffer"],
      explanation: "En trussel er en mulig uønsket handling eller hendelse som kan forårsake skade. Trusler kan være tilsiktede (terror, sabotasje) eller utilsiktede (naturkatastrofer).",
    },
    {
      question: "Hva betyr sårbarhet?",
      options: ["Manglende evne til a motstå en hendelse eller gjenopprette etterpa", "Verdien av det som beskyttes, regnet i kroner og i betydning for driften", "Den samlede verdien av det som skal beskyttes, malt i penger og betydning", "En mulig uønsket handling eller hendelse som kan skade det vi vil beskytte"],
      explanation: "Sårbarhet er manglende evne til a motstå en uønsket hendelse eller til a gjenopprette ønsket tilstand etterpa. Det er det motsatte av robusthet.",
    },
    {
      question: "Hva uttrykker formelen R = S x K?",
      options: ["At risiko er produktet av sannsynlighet og konsekvens", "At risiko er summen av sårbarhet og konsekvens", "At trusselnivå ganges med verdien av objektet man ønsker a beskytte", "At sannsynlighet er konsekvens delt på risiko"],
      explanation: "Risiko (R) er kombinasjonen av sannsynlighet (S) og konsekvens (K): R = S x K. Lav sannsynlighet med hoy konsekvens kan gi samme risiko som hoy sannsynlighet med lav konsekvens.",
    },
    {
      question: "Hva er konsekvens i risikosammenheng?",
      options: ["Det mulige resultatet av en uønsket hendelse, malt i skade på verdier", "Hvor trolig hendelsen er, uttrykt som en sannsynlighet i prosent per ar", "Trusselaktorens motiv og hensikt bak den planlagte uønskede handlingen", "Et uttrykk for hvor trolig det er at den uønskede hendelsen faktisk skjer"],
      explanation: "Konsekvens er det mulige resultatet av en hendelse, malt i skade på liv, helse, materielle verdier, miljø, okonomi eller omdømme.",
    },
    {
      question: "Hvordan kan sannsynlighet uttrykkes i en risikoanalyse?",
      options: ["Kvantitativt (1 gang per 100 ar) eller kvalitativt (lite/meget sannsynlig)", "Bare som farger i en matrise uten noen tallfesting eller ordvurdering bak", "Kun i kroner og ore som forventet okonomisk tap ved den aktuelle hendelsen", "Utelukkende som et enkelt ja eller nei på om hendelsen kan tenkes å skje"],
      explanation: "Sannsynlighet kan uttrykkes kvantitativt (for eksempel 1 gang per 100 ar) eller kvalitativt (lite sannsynlig, sannsynlig, meget sannsynlig), ofte på en skala fra 1 til 5.",
    },
  ],
  "sikkerhetsfag-2-2": [
    {
      question: "Hva er en risikomatrise?",
      options: ["Et verktøy som plasserer hendelser etter sannsynlighet og konsekvens i fargesoner", "Et detaljert budsjett som fordeler midlene til ulike sikkerhetstiltak i aret", "En ferdig plan for evakuering av bygget med romsler og møtepunkter angitt", "En fullstendig personalliste over alle ansatte med kontaktinfo og roller"],
      explanation: "En risikomatrise visualiserer risiko ved å plassere hendelser i et rutenett med sannsynlighet på en akse og konsekvens på den andre, ofte med gronn, gul og rod sone.",
    },
    {
      question: "Hva visualiserer en bow-tie-analyse?",
      options: ["Årsaker og forebyggende barrierer til venstre, konsekvenser og barrierer til hoyre", "Antall ansatte fordelt per avdeling og deres roller i beredskapsorganisasjonen", "Utelukkende de okonomiske tapene en uønsket hendelse kan påføre virksomheten", "Bygningens planløsning med nødutganger, brannceller og plassering av utstyr"],
      explanation: "Bow-tie-analysen har den uønskede hendelsen i sentrum, med årsaker og forebyggende barrierer til venstre og konsekvenser med konsekvensreduserende barrierer til hoyre.",
    },
    {
      question: "Hva brukes HAZOP-metoden til?",
      options: ["A identifisere farer og driftsproblemer i prosessanlegg ved hjelp av ledeord", "A planlegge ferieavvikling og bemanning gjennom aret ved anlegget i drift", "A beregne lonn og godtgjørelse til alle ansatte som jobber i prosessanlegget til daglig", "A male kundetilfredshet og omdømme etter leveranser fra prosessanlegget"],
      explanation: "HAZOP (Hazard and Operability Study) bruker ledeord (mer, mindre, ingen) kombinert med prosessparametere for å avdekke avvik i tekniske systemer og prosessanlegg.",
    },
    {
      question: "En hendelse får sannsynlighet 3 og konsekvens 4. Hva blir risikoverdien?",
      options: ["12", "7", "1", "34"],
      explanation: "Risiko = sannsynlighet x konsekvens = 3 x 4 = 12. Dette plasseres typisk i gul sone der tiltak er nødvendig.",
    },
    {
      question: "Hva er en risikoanalyse?",
      options: ["En systematisk framgangsmåte for å beskrive og beregne risiko", "En liste over samtlige forsikringer virksomheten har tegnet hos selskapet", "En samlet oversikt over alle forsikringsavtaler virksomheten har tegnet", "En detaljert plan for markedsføring av virksomhetens sikkerhetstjenester"],
      explanation: "Risikoanalyse er en systematisk metode for å identifisere uønskede hendelser, kartlegge årsaker og konsekvenser, og vurdere sannsynlighet og konsekvensgrad.",
    },
  ],
  "sikkerhetsfag-2-3": [
    {
      question: "Hva er en sårbarhetsvurdering?",
      options: ["En systematisk prosess for å identifisere og vurdere svakheter i et system", "En bemanningsplan for nyansettelser og opplæring i sikkerhetsavdelingen", "En fullstendig liste over alle tenkelige trusler som finnes i verden i dag", "En beregning av forventet fortjeneste ved å investere i sikringstiltak"],
      explanation: "En sårbarhetsvurdering kartlegger fysiske, tekniske, organisatoriske og menneskelige svakheter, hvor alvorlige de er, og hva som kan gjores for å redusere dem.",
    },
    {
      question: "Hva er kritisk infrastruktur?",
      options: ["Anlegg og systemer som er nodvendige for samfunnets grunnleggende funksjoner", "Utelukkende militære anlegg og forsvarets installasjoner i landet ellers", "Reklameskilt og informasjonstavler langs veiene som kan skades av vaer", "Alle private boliger og fritidshytter som kan være sårbare for innbrudd og brann"],
      explanation: "Kritisk infrastruktur er anlegg og systemer som er nodvendige for samfunnets grunnleggende behov. Bortfall kan true liv, helse og samfunnsfunksjoner.",
    },
    {
      question: "Hva er en scenarioanalyse?",
      options: ["En metode der man utvikler detaljerte tenkte hendelsesforløp for å vurdere sårbarhet", "En strukturert oversikt over historiske hendelser som allerede har skjedd", "En fullstendig liste over godkjente slokkemidler og bruk av dem ved brann", "En metode for å beregne lonn og bemanning ut fra virksomhetens risikonivå"],
      explanation: "Scenarioanalyse utvikler detaljerte beskrivelser av tenkte hendelsesforløp. Den tvinger deltakerne til a tenke gjennom konkrete situasjoner og avdekker skjulte svakheter.",
    },
    {
      question: "Hvilke typer svakheter ser en sårbarhetsvurdering pa?",
      options: ["Fysiske, tekniske, organisatoriske og menneskelige", "Bare okonomiske svakheter i virksomhetens årsbudsjett", "Bare fysiske svakheter som lasing, gjerder og sikring av dorer og vinduer", "Kun juridiske svakheter i avtaler og manglende samsvar med gjeldende lover"],
      explanation: "En sårbarhetsvurdering ser på både fysiske, tekniske, organisatoriske og menneskelige svakheter.",
    },
    {
      question: "Hvorfor er et langvarig stromrudd et godt eksempel pa sårbarhet?",
      options: ["Fordi mange samfunnsfunksjoner er avhengige av strom og rammes samtidig", "Fordi det aldri får konsekvenser", "Fordi et stromrudd verken kan forebygges eller motvirkes med noe tiltak", "Fordi et stromrudd bare rammer belysning og ikke andre samfunnsfunksjoner"],
      explanation: "Et langvarig stromrudd viser hvor avhengig samfunnet er av strom: oppvarming, mobilnett, vann og andre funksjoner kan svikte samtidig, noe som blottlegger sarbarheter.",
    },
  ],
  "sikkerhetsfag-2-4": [
    {
      question: "Hva er forebyggende tiltak?",
      options: ["Tiltak som reduserer sannsynligheten for at en hendelse inntreffer", "Tiltak som bare kan brukes etter at en uønsket hendelse allerede har skjedd", "Tiltak som kun handler om a tegne forsikring for å dekke okonomiske tap", "Tiltak som oker konsekvensene og skadeomfanget når en hendelse inntreffer"],
      explanation: "Forebyggende tiltak reduserer sannsynligheten for at en uønsket hendelse skjer, for eksempel adgangskontroll, opplæring og vedlikehold.",
    },
    {
      question: "Hva er konsekvensreduserende tiltak?",
      options: ["Tiltak som begrenser skadene når en hendelse har inntruffet", "Tiltak som hindrer at hendelsen skjer", "Tiltak som hindrer at hendelsen i det hele tatt får anledning til a skje", "Tiltak som oker sannsynligheten for at den uønskede hendelsen inntreffer"],
      explanation: "Konsekvensreduserende tiltak begrenser skadene etter at en hendelse har skjedd, for eksempel beredskapsplaner, sprinkleranlegg, førstehjelp og forsikring.",
    },
    {
      question: "Hva er en barriere i sikkerhetssammenheng?",
      options: ["Et teknisk, operasjonelt eller organisatorisk tiltak som reduserer risiko", "Et fysisk gjerde og ingenting annet", "En okonomisk gevinst virksomheten oppnår ved å investere i sikringsutstyr", "En bestemt type forsikringsavtale som dekker tap etter uønskede hendelser"],
      explanation: "En barriere er et teknisk (branndør), operasjonelt (prosedyrer) eller organisatorisk (tilsyn) tiltak som reduserer muligheten for eller konsekvensene av uønskede hendelser.",
    },
    {
      question: "Hvorfor er forebyggende tiltak ofte mest kostnadseffektive?",
      options: ["Fordi de forhindrer at hendelsen skjer i det hele tatt", "Fordi de erstatter all forsikring", "Fordi de fullt ut erstatter behovet for å tegne forsikring mot skader", "Fordi de oker konsekvensene og gjor skadene større"],
      explanation: "Forebyggende tiltak er ofte mest kostnadseffektive fordi de hindrer hendelsen i a skje, slik at man unngår bade direkte skader og følgeskader.",
    },
    {
      question: "Hva gjor man i en kost-nytte-vurdering av et sikkerhetstiltak?",
      options: ["Veier kostnaden ved tiltaket mot forventet redusert tap", "Velger alltid det dyreste tiltaket", "Ser helt bort fra kostnaden og vurderer bare hvor effektivt tiltaket er", "Velger konsekvent det dyreste tiltaket ut fra at det gir best beskyttelse"],
      explanation: "I en kost-nytte-vurdering veies kostnaden ved tiltaket (installasjon, vedlikehold) mot nytten, det vil si redusert forventet tap over tiltakets levetid.",
    },
  ],
  "sikkerhetsfag-2-5": [
    {
      question: "Hva er risikostyring?",
      options: ["Alle koordinerte aktiviteter for å lede og kontrollere en organisasjon med hensyn til risiko", "A bevisst ignorere risiko fordi den likevel ikke lar seg kontrollere fullt ut", "Bare å skrive rapporter i etterkant av hendelser uten videre oppfølging", "Utelukkende a kjøpe forsikringer som skal dekke de okonomiske tapene etter uønskede hendelser"],
      explanation: "Risikostyring omfatter rammeverk, risikovurdering, risikohåndtering, overvaking og gjennomgang. Malet er å holde risikoen på et akseptabelt niva.",
    },
    {
      question: "Hvem er risikoeier?",
      options: ["Den som har myndighet og ansvar for a håndtere en bestemt risiko", "Den som forårsaker hendelsen", "Den som forårsaker den uønskede hendelsen gjennom handling eller uaktsomhet", "Alle ansatte samlet som deler ansvaret for å handtere risikoen i fellesskap"],
      explanation: "Risikoeier er personen eller enheten med myndighet og ansvar for a håndtere en bestemt risiko, ofte en leder for det området der risikoen oppstår.",
    },
    {
      question: "Hva er akseptkriterier?",
      options: ["Forhåndsdefinerte kriterier for hvilke risikoer organisasjonen er villig til a akseptere", "Krav til uniform og synlig legitimasjon for personell i sikringstjeneste", "Krav til de ansattes utdanning og kompetanse for å kunne få jobbe med sikkerhet i virksomheten", "Regler for lonn og godtgjørelse til dem som utforer risikovurderingene"],
      explanation: "Akseptkriterier er forhåndsdefinerte kriterier fastsatt av ledelsen som angir hvilke risikoer organisasjonen aksepterer, basert på lover, verdier og okonomi.",
    },
    {
      question: "Hva er malet med risikostyring?",
      options: ["A holde risikoen på et niva som er akseptabelt for organisasjonen", "A eliminere all risiko fullstendig", "A ta på seg storst mulig risiko for å kunne oppnå høyest mulig gevinst og avkastning for virksomheten", "A oke risikoen bevisst for å kunne oppnå en større gevinst for eierne"],
      explanation: "Malet med risikostyring er å sikre at risikoen holdes på et niva som er akseptabelt for organisasjonen, gjennom systematisk vurdering og tiltak.",
    },
    {
      question: "Hvem fastsetter normalt akseptkriteriene i en virksomhet?",
      options: ["Ledelsen / styret", "Den enkelte vekter", "Kundene og leverandørene", "Forsikringsselskapet alene"],
      explanation: "Akseptkriteriene fastsettes av ledelsen (ofte styret), som tar hensyn til lover, organisasjonens verdier, okonomiske rammer og interessentenes forventninger.",
    },
  ],
  "sikkerhetsfag-3-1": [
    {
      question: "Hva star CPTED for?",
      options: ["Crime Prevention Through Environmental Design", "Crime Patrol Through Electronic Detection", "Certified Protection Through Electronics", "Critical Protection ofTerrorist Domains"],
      explanation: "CPTED star for Crime Prevention Through Environmental Design - kriminalitetsforebygging gjennom utforming av det fysiske miljoet.",
    },
    {
      question: "Hva er hovedmålet med CPTED?",
      options: ["A gjore det vanskeligere a begå lovbrudd og lettere a oppdage uønsket atferd", "A bygge stadig hoyere murer og kraftigere gjerder rundt hele det sikrede området", "A installere flest mulig alarmer og kameraer slik at politiet raskt kan gripe inn når noe har skjedd", "A erstatte all fysisk sikring med et stort antall vektere som patruljerer området gjennom hele døgnet"],
      explanation: "CPTED søker a redusere muligheter for kriminalitet, oke oppdagelsesrisikoen og styrke trygghetsfolelsen gjennom hvordan omgivelsene utformes.",
    },
    {
      question: "Hva er naturlig overvaking i CPTED?",
      options: ["Utforming som gjor at folk naturlig kan se og bli sett", "Et nettverk av skjulte kameraer", "Politipatruljer som gaar runder i området døgnet rundt for å avdekke uønsket atferd tidlig", "Politipatruljer døgnet rundt"],
      explanation: "Naturlig overvaking er utforming - god belysning, oversiktlige områder, vindusflater - som gjor at mennesker naturlig kan se og bli sett, og dermed oker oppdagelsesrisikoen.",
    },
    {
      question: "Hvilket tiltak styrker naturlig overvaking i et boligområde?",
      options: ["Bedre belysning og beskjæring av høye busker som blokkerer sikten", "Hoyere gjerder som blokkerer all innsyn", "Sette opp hoyere gjerder og tette skjermvegger som blokkerer all innsyn mot boligene fra utsiden", "Slokke all utebelysning om natten slik at eventuelle inntrengere ikke kan orientere seg i området"],
      explanation: "Bedre belysning og fjerning av høye busker som blokkerer sikten oker naturlig overvaking, slik at uønsket atferd lettere oppdages.",
    },
    {
      question: "Hva er hensikten med naturlig tilgangskontroll i CPTED?",
      options: ["A lede bevegelse og markere grenser mellom offentlige og private soner", "A stenge samtlige innganger permanent slik at ingen kan passere gjennom dem", "A ansette dørvakter ved samtlige innganger slik at de fysisk kan avvise personer uten ærend", "A overvake alle som ferdes i området med kamera slik at bevegelsene deres kan spores i ettertid"],
      explanation: "Naturlig tilgangskontroll bruker design som stier, lave gjerder og soneinndeling for å lede bevegelse og tydeliggjøre hvor folk hører hjemme, noe som reduserer mulighet for kriminalitet.",
    },
  ],
  "sikkerhetsfag-3-2": [
    {
      question: "Hva omfatter fysisk sikring?",
      options: ["Materielle tiltak som hindrer, forsinker eller oppdager uautorisert tilgang", "Bare opplæring av de ansatte i rutiner og prosedyrer for adgang til bygninger", "Utelukkende elektroniske alarmer og sensorer som varsler vaktsentralen når noen forsøker a ta seg inn", "Utelukkende forsikringsavtaler som dekker det okonomiske tapet dersom et innbrudd eller en skade skjer"],
      explanation: "Fysisk sikring omfatter gjerder, murer, porter, laser, dorer og andre konstruksjoner som utgjør fysiske hindre for inntrengere.",
    },
    {
      question: "Hva er perimetersikring?",
      options: ["Sikringstiltak langs yttergrensen av et område", "Sikring av sentrale serverrom", "Sikring av de sentrale serverrommene", "Sikring av ansattes passord"],
      explanation: "Perimetersikring er tiltak langs yttergrensen av en eiendom, som gjerder, murer, porter og bommer, for å kontrollere adgang og oppdage forsok pa inntrenging.",
    },
    {
      question: "Hva er ideen bak forsvar i dybden (lagdelt sikring)?",
      options: ["Flere lag med barrierer slik at en inntrenger må forsere flere hindre", "Alle barrierer plasseres samme sted", "At elektronisk overvaking alene erstatter fysiske barrierer", "At alle barrierene plasseres samlet på samme sted slik at de til sammen danner ett kraftig sikringspunkt"],
      explanation: "Forsvar i dybden bruker flere lag med sikring (perimeter, bygningsskall, indre soner) slik at en inntrenger må forsere flere barrierer, noe som forsinker og oker oppdagelsessjansen.",
    },
    {
      question: "Hvilket tiltak hører til perimeterlaget i et sikringsopplegg?",
      options: ["Gjerde med port og kortleser for kjoretoy", "Adgangskort til kontorlandskapet", "En forsterket ståldør med boltelaas", "Stalldor til selve hvelvet"],
      explanation: "Perimeterlaget er yttergrensen, for eksempel gjerde med piggtråd, motorisert port og kortleser/nummerplateleser for kjoretoy.",
    },
    {
      question: "Hvorfor brukes herdet glass og ståldører i bygningsskallet?",
      options: ["For å forsinke og motstå innbruddsforsøk", "For a se penere ut", "For at bygningen skal se penere og mer forseggjort ut for de som passerer utenfor", "For å oke utsikten"],
      explanation: "Herdet glass og ståldører med gode lasesystemer gjor bygningsskallet motstandsdyktig, slik at innbruddsforsøk forsinkes og oppdages for inntrengeren kommer inn.",
    },
  ],
  "sikkerhetsfag-3-3": [
    {
      question: "Hva bestar et alarmsystem av?",
      options: ["Detektorer, en sentral og varslingsenheter", "Bare en lasebrikke", "Utelukkende en elektronisk laasebrikke", "Bare en høyttaler"],
      explanation: "Et alarmsystem bestar av detektorer som registrerer hendelser, en sentral som behandler signalene, og varslingsenheter som gir alarm til riktige mottakere.",
    },
    {
      question: "Hva er en falsk alarm?",
      options: ["En alarm som utløses uten at det foreligger en reell trussel", "En alarm som aldri loser ut", "En alarm som er koblet direkte til politiet og som utløser en utrykning hver eneste gang den gaar", "En alarm som er defekt og som derfor aldri loser ut selv om det faktisk foreligger en reell trussel"],
      explanation: "En falsk alarm utløses uten reell trussel, ofte på grunn av dyr, vaer eller tekniske feil. Mange falske alarmer undergraver tilliten til systemet.",
    },
    {
      question: "Hvorfor er falske alarmer et problem?",
      options: ["De undergraver tilliten slik at reelle alarmer ikke tas på alvor", "De gjor systemet billigere fordi det da trengs færre detektorer i bygget", "De oker den samlede sikkerheten fordi systemet stadig testes og de ansatte holdes skjerpet", "De gjor sikringssystemet billigere fordi det da ikke trengs like mange vektere og kontroller"],
      explanation: "Falske alarmer er et betydelig problem fordi de undergraver tilliten til systemet og kan fore til at reelle alarmer ikke tas på alvor.",
    },
    {
      question: "Hvilken detektor egner seg for å oppdage at en dor åpnes?",
      options: ["Magnetkontakt", "Glassbruddetektor", "Røykdetektor i taket", "Temperaturfoler"],
      explanation: "Magnetkontakter monteres på dorer og vinduer og registrerer når de åpnes ved at magnetfeltet brytes.",
    },
    {
      question: "Hva registrerer en PIR-detektor?",
      options: ["Bevegelse via varmestråling fra personer", "Glass som knuses", "Lyden av glass som knuses når en rute blir slått inn ved et innbruddsforsøk i området", "At en dor lases"],
      explanation: "En PIR-detektor (passiv infrarød) registrerer bevegelse ved å oppfatte endringer i varmestråling fra personer som beveger seg i området.",
    },
  ],
  "sikkerhetsfag-3-4": [
    {
      question: "Hva star CCTV for?",
      options: ["Closed Circuit Television - et lukket kamerasystem", "Central Control Television Unit", "Continuous Camera Tracking Vision", "Crime Camera Tactical Vision"],
      explanation: "CCTV star for Closed Circuit Television - et lukket kamerasystem der signalet kun er tilgjengelig for autoriserte brukere, ikke for kringkasting.",
    },
    {
      question: "Hva krever GDPR ved kameraovervaking?",
      options: ["Behandlingsgrunnlag, interesseavveining, tydelig skilting og begrenset lagringstid", "At man kan overvake alle områder helt uten begrensning i tid, omfang eller lagring", "At alle opptak lagres permanent i arkivet slik at de kan hentes frem igjen dersom det skulle bli behov", "At virksomheten kan overvake alle områder uten begrensning saa lenge formålet er å hindre kriminalitet"],
      explanation: "GDPR krever blant annet et behandlingsgrunnlag (ofte berettiget interesse), en interesseavveining, tydelig skilting og at opptak ikke lagres lenger enn nødvendig.",
    },
    {
      question: "Hva er forskjellen mellom CCTV og kringkasting?",
      options: ["CCTV er lukket og kun for autoriserte; kringkasting er åpen sending", "CCTV sendes til hele befolkningen", "Det er egentlig det samme systemet, bare med to ulike navn som brukes om hverandre i bransjen", "CCTV sender signalet åpent ut til hele befolkningen, mens kringkasting er forbeholdt autoriserte"],
      explanation: "CCTV er et lukket system der videosignalet kun er tilgjengelig for et begrenset antall autoriserte brukere, i motsetning til kringkasting (apen sending).",
    },
    {
      question: "Hva bor gjores først nar en butikk vil installere kameraovervaking?",
      options: ["Fastsette og dokumentere formålet med overvåkingen", "Lagre opptak så lenge som mulig", "Skjule alle kameraene godt for kunder og ansatte", "Overvake ansattes pauserom"],
      explanation: "Først ma formålet (for eksempel å forebygge butikktyveri) fastsettes og dokumenteres, fordi formålet styrer hva som er lovlig å overvake.",
    },
    {
      question: "Hvorfor brukes faste kameraer over kassene?",
      options: ["For å dokumentere transaksjoner", "For å overvake gata utenfor", "For å overvake gata og fortauet utenfor butikken", "For å male temperaturen"],
      explanation: "Faste kameraer over kassene dokumenterer transaksjoner og kan brukes som bevis ved svinn, ran eller uenighet om betaling.",
    },
  ],
  "sikkerhetsfag-3-5": [
    {
      question: "Hva er sikkerhetskultur?",
      options: ["Felles verdier, holdninger, normer og atferd som påvirker hvordan sikkerhet prioriteres", "En type forsikring", "En bestemt type forsikring som dekker tap virksomheten får ved tyveri, innbrudd eller skade", "Et avansert alarmsystem som varsler både ansatte og vaktsentral når det oppstår en hendelse"],
      explanation: "Sikkerhetskultur er de felles verdiene, holdningene, normene og atferdene i en organisasjon som påvirker hvordan sikkerhetsspørsmål behandles og prioriteres.",
    },
    {
      question: "Hva er avviksrapportering?",
      options: ["En systematisk prosess for å registrere og folge opp hendelser og nestenulykker", "En liste over ansattes ferier", "En samlet oversikt over uniformer og verneutstyr slik at man vet hvem som har fått utdelt hva", "En oppdatert liste over de ansattes ferieonsker og planlagte fravær gjennom året i virksomheten"],
      explanation: "Avviksrapportering registrerer hendelser, nestenulykker og brudd på rutiner, slik at man kan lære av dem og forebygge fremtidige hendelser.",
    },
    {
      question: "Hva forutsetter en god rapporteringskultur?",
      options: ["At det er trygt å rapportere uten frykt for negative konsekvenser", "At bare ledelsen får rapportere", "At avvik og hendelser holdes hemmelige internt", "At den som rapporterer straffes"],
      explanation: "En god rapporteringskultur forutsetter at det er trygt å rapportere uten frykt for negative konsekvenser, slik at man får frem informasjon man kan lære av.",
    },
    {
      question: "Hvorfor regnes menneskene som den viktigste faktoren i sikkerhetsarbeid?",
      options: ["Fordi holdninger og atferd avgjør om rutiner og systemer faktisk virker", "Fordi teknologi er uten betydning", "Fordi lover og regler ikke gjelder for de ansatte selv, men bare for utenforstaaende og besokende", "Fordi mennesker som er godt opplært i praksis aldri gjor feil"],
      explanation: "Selv de beste systemene svikter hvis menneskene ikke folger dem. Holdninger, atferd og en god sikkerhetskultur avgjør om sikkerhetsarbeidet faktisk fungerer.",
    },
    {
      question: "Hva er et viktig forste steg for å forbedre sikkerhetskulturen?",
      options: ["Tydelig ledelsesforankring der ledere går foran som gode eksempler", "A skjule hendelser for ansatte", "A skjule uønskede hendelser for de ovrige ansatte slik at de ikke mister troen paa sikkerhetsarbeidet", "A fjerne all opplæring slik at ansatte laerer av egne feil"],
      explanation: "Ledelsesforankring er sentralt: når ledelsen tydelig prioriterer sikkerhet og selv folger rutinene, påvirker det holdningene og atferden i hele organisasjonen.",
    },
  ],
  "sikkerhetsfag-4-1": [
    {
      question: "Hva er adgangskontroll?",
      options: ["Tiltak og systemer som begrenser og styrer tilgang til områder eller informasjon", "Et brannvarslingssystem med detektorer, sirener og direkte varsling til brannvesenet", "En type forsikring som gir okonomisk dekning dersom uvedkommende tar seg inn og forårsaker skade", "Et kameraopptak som dokumenterer hvem som har beveget seg inn og ut av bygningens ulike områder"],
      explanation: "Adgangskontroll er tiltak og systemer som sikrer at kun autoriserte personer får adgang til områder de har rett til a være i.",
    },
    {
      question: "Hva innebærer tofaktorautentisering?",
      options: ["A bevise identitet med to ulike faktorer, for eksempel kort og PIN", "A vise legitimasjon to ganger", "A bruke to helt forskjellige adgangskort etter hverandre for å fa tilgang til det sikrede området", "A vise frem gyldig legitimasjon to ganger til to ulike vakter for å bekrefte at man har rett adgang"],
      explanation: "Tofaktorautentisering kombinerer to ulike faktorer: noe du har (kort), noe du vet (PIN) eller noe du er (fingeravtrykk). Det gir hoyere sikkerhet enn en enkelt faktor.",
    },
    {
      question: "Hva er hensikten med soneinndeling?",
      options: ["A gradere tilgang slik at sensitive områder krever hoyere autorisasjon", "A gjore alle områder apne for alle", "A fjerne all form for adgangskontroll slik at både ansatte og besokende kan bevege seg helt fritt", "A samle alle ansatte og besokende i ett stort felles rom"],
      explanation: "Soneinndeling deler bygget i soner med ulik tilgangskrav (offentlig, kontrollert, begrenset), slik at sensitive områder krever hoyere niva av autentisering.",
    },
    {
      question: "Hvilke tre faktortyper kan brukes i autentisering?",
      options: ["Noe du har, noe du vet og noe du er", "Noe du ser, hører og lukter", "Tidspunkt, sted og vaer", "Lonn, alder og stilling"],
      explanation: "De tre faktortypene er: noe du har (kort, brikke), noe du vet (PIN, passord) og noe du er (fingeravtrykk, iris).",
    },
    {
      question: "Hvilken sone bor ha strengest adgangskontroll på et sykehus?",
      options: ["Operasjonsstuer (begrenset sone)", "Hovedinngangen", "Ventearealet der pårørende oppholder seg", "Hovedinngangen der alle passerer inn i bygget"],
      explanation: "Operasjonsstuer er en begrenset sone med sensitive aktiviteter og bor ha strengest adgangskontroll, for eksempel tofaktorautentisering.",
    },
  ],
  "sikkerhetsfag-4-2": [
    {
      question: "Hva er besokshandtering?",
      options: ["Rutiner for å motta, registrere, folge opp og lose ut besokende", "En forsikring for besokende", "En automatisk alarmordning som varsler resepsjonen hver gang en dor åpnes i bygget", "Et sett brannvernrutiner for gjester og besokende"],
      explanation: "Besokshandtering er rutinene en virksomhet har for å motta, registrere, folge opp og lose ut besokende, slik at alle besok er planlagt og kontrollert.",
    },
    {
      question: "Hva er hovedmålet med god besokshandtering?",
      options: ["A sikre at alle besok er planlagt, identifisert og innenfor autoriserte områder", "A spare lønnsutgifter i resepsjonen ved å ha færre ansatte paa vakt i løpet av dagen", "A overvake de ansattes bevegelser og arbeidstid gjennom besokssystemets registreringer", "A redusere lonnsutgiftene i resepsjonen ved at besok registrerer seg helt uten bemanning"],
      explanation: "Malet er å sikre at alle besok er planlagt, at besokende er identifisert, og at de kun oppholder seg i autoriserte områder.",
    },
    {
      question: "Hvorfor brukes forhaandsregistrering av besokende?",
      options: ["Slik at besøket er planlagt og besokende er identifisert pa forhånd", "For å hindre at eksterne besokende i det hele tatt får komme inn i bygget", "For å gjore besøket mer kostbart slik at færre eksterne velger å komme til virksomheten", "For a slippe å rapportere og loggføre besøket slik at ingen spor blir liggende i systemet"],
      explanation: "Forhaandsregistrering gjor at besøket er planlagt og identiteten kjent for ankomst, noe som styrker både sikkerhet og effektivitet i mottaket.",
    },
    {
      question: "Hvorfor bor et besokskort gi begrenset tilgang?",
      options: ["Slik at besokende kun får adgang til de områdene de skal til", "Slik at de kan ga overalt", "For å gjore selve besokskortet dyrere å produsere slik at færre kort kommer på avveie", "For a slippe å sette opp skilting og merking av soner"],
      explanation: "Et besokskort bor gi tilgang kun til relevante områder, slik at besokende ikke kommer inn i sensitive soner de ikke har ærend i.",
    },
    {
      question: "Hva er en god rutine ved ankomst for besokende til et sensitivt selskap?",
      options: ["Fremvise legitimasjon og få et besokskort med begrenset tilgang", "Hente eget adgangskort fra en hylle", "Hente sitt eget adgangskort fra en åpen hylle i resepsjonen og bruke det uten registrering", "Fa fri og ubegrenset adgang til hele bygningen"],
      explanation: "Ved ankomst bor besokende identifiseres med legitimasjon og få et besokskort som gir begrenset, sporbar tilgang til relevante områder.",
    },
  ],
  "sikkerhetsfag-4-3": [
    {
      question: "Hva er rondering?",
      options: ["En systematisk kontrollrunde etter en fastsatt plan", "En forsikringsordning", "Et automatisk varslingssystem med alarm", "En brannøvelse"],
      explanation: "Rondering er en systematisk kontrollrunde der en sikkerhetsmedarbeider gjennomgår et definert område etter en fastsatt plan for å oppdage avvik.",
    },
    {
      question: "Hva er hovedformålet med rondering?",
      options: ["A oppdage avvik, forebygge hendelser og sikre at alt er i orden", "A registrere ansattes pauser", "A registrere de ansattes pauser og arbeidstid gjennom passeringene ved hvert sjekkpunkt", "A gi vekteren jevnlig fysisk trening"],
      explanation: "Formålet med rondering er å oppdage avvik, forebygge uønskede hendelser og sikre at alt er i orden langs faste sjekkpunkter.",
    },
    {
      question: "Hva bestar et elektronisk ronderingssystem av?",
      options: ["Ronderingsbrikker ved sjekkpunktene og en handholdt enhet for registrering", "Bare en helt vanlig mobiltelefon uten noen form for app installert paa forhånd", "Utelukkende et overvakingskamera som filmer sjekkpunktene og lagrer opptaket fortløpende", "Utelukkende en sentral alarmsentral som mottar signaler fra faste detektorer i bygningen"],
      explanation: "Et elektronisk ronderingssystem har brikker (NFC/RFID) ved sjekkpunktene og en handholdt enhet vekteren bruker for å registrere at hvert punkt er kontrollert.",
    },
    {
      question: "Hvorfor logges ronderingsdata elektronisk?",
      options: ["For at oppdragsgiver kan kontrollere at rundene faktisk er gjennomført", "For å hindre vekteren i å jobbe", "For å oke strømforbruket i bygget siden hvert sjekkpunkt trekker mye energi ved avlesning", "For å hindre vekteren i å jobbe effektivt fordi registreringen tar mye tid ved hvert punkt"],
      explanation: "Dataene fra ronderingsbrikkene logges sentralt slik at oppdragsgiver kan dokumentere og kontrollere at sjekkpunktene faktisk er besokt til riktig tid.",
    },
    {
      question: "Hva bor en vekter se etter under en nattrondering ved et lager?",
      options: ["Spor av uvedkommende, ulaste porter og tegn pa innbruddsforsøk", "Antall biler på parkeringen", "Utelukkende om utelyset er tent", "Antall biler som står parkert pa området for å beregne hvor mange ansatte som er pa jobb"],
      explanation: "Under rondering kontrolleres gjerder og porter, og vekteren ser etter spor av uvedkommende og tegn pa innbruddsforsøk ved sjekkpunktene.",
    },
  ],
  "sikkerhetsfag-4-4": [
    {
      question: "Hva er mottakskontroll?",
      options: ["Prosedyrer ved mottak av personer, varer, post og utstyr", "Kontroll av ansattes arbeidstid", "Et sett brannvernrutiner for varelageret", "Kontroll av kameraopptak"],
      explanation: "Mottakskontroll er prosedyrene som gjennomføres ved mottak av personer, varer, post og utstyr, for å sikre at alt som kommer inn er autorisert og trygt.",
    },
    {
      question: "Hva er malet med mottakskontroll?",
      options: ["A sikre at alt som kommer inn er autorisert, trygt og korrekt", "A hindre alle leveranser", "A overvake naboene og deres eiendommer gjennom kameraene som er montert ved varemottaket", "A hindre at det kommer leveranser inn i bygget"],
      explanation: "Malet er å sikre at alt som kommer inn er autorisert, trygt og korrekt, og at ingenting uønsket passerer gjennom mottaket.",
    },
    {
      question: "Hva bor kontrolleres når en leverandor ankommer varemottaket?",
      options: ["Legitimasjon og arbeidsordre/leveranseinformasjon", "Leverandørens private telefon", "Hvilken farge og modell varebilen har", "Bare leverandørens lonn"],
      explanation: "Ved varemottak kontrolleres leverandørens legitimasjon og arbeidsordre/leveranse, slik at bare planlagte og autoriserte leveranser slipper inn.",
    },
    {
      question: "Hvorfor bor et sykehus ha et dedikert mottaksomrade?",
      options: ["For å kontrollere og handtere leveranser trygt og adskilt fra sensitive områder", "For å gjore leveransene dyrere", "For å kunne unngå å motta varer utenfra slik at sykehuset blir mest mulig selvforsynt selv", "For å gjore hver enkelt leveranse dyrere slik at antallet eksterne leverandører holdes lavt"],
      explanation: "Et dedikert mottaksomrade med egen rampe og kontrollsone gjor at leveranser kan kontrolleres trygt og holdes adskilt fra sensitive områder i bygget.",
    },
    {
      question: "Hva er en risikofaktor knyttet til posthandtering?",
      options: ["Mistenkelige forsendelser kan inneholde farlige stoffer eller gjenstander", "Post er alltid helt ufarlig", "Post og forsendelser lar seg ikke kontrollere på forhand og ma åpnes for å kunne vurderes", "Innkommende post regnes alltid som helt ufarlig og trenger derfor ingen kontroll ved mottak"],
      explanation: "Posthandtering innebærer en risiko fordi mistenkelige forsendelser kan inneholde farlige stoffer eller gjenstander; derfor inngår postkontroll i mottakskontrollen.",
    },
  ],
  "sikkerhetsfag-4-5": [
    {
      question: "Hva er personopplysninger?",
      options: ["Enhver opplysning som kan knyttes til en identifiserbar person", "Bare offentlige dokumenter", "Utelukkende dokumenter som er offentlig tilgjengelige og dermed kan deles fritt med alle", "Utelukkende en persons fulle navn og bostedsadresse"],
      explanation: "Personopplysninger er enhver opplysning som kan knyttes til en identifiserbar person, inkludert navn, bilder, video, fingeravtrykk, IP-adresser og adgangskortdata.",
    },
    {
      question: "Hva er et behandlingsgrunnlag?",
      options: ["Det rettslige grunnlaget for å behandle personopplysninger", "En forsikringsavtale", "Et automatisk varslingssystem som utløser alarm når personopplysninger behandles ulovlig", "En forsikringsavtale som daekker virksomhetens tap dersom personopplysninger kommer på avveie"],
      explanation: "Et behandlingsgrunnlag er det rettslige grunnlaget for å behandle personopplysninger. Etter GDPR finnes seks mulige grunnlag, blant annet samtykke og berettiget interesse.",
    },
    {
      question: "Hvilket behandlingsgrunnlag er vanligst for kameraovervaking i sikkerhetsarbeid?",
      options: ["Berettiget interesse", "Samtykke fra alle forbipasserende", "Vitale interesser", "Allmenhetens interesse"],
      explanation: "For overvaking i sikkerhetsarbeid er berettiget interesse (beskyttelse av eiendom) det vanligste grunnlaget, ofte sammen med en dokumentert interesseavveining.",
    },
    {
      question: "Hva må gjores for at kameraovervaking skal være lovlig?",
      options: ["Dokumentere formål, gjore interesseavveining og sette opp tydelig skilting", "Lagre alle opptakene i ubegrenset tid uten å informere dem som faktisk blir filmet", "Skjule alle kameraene helt slik at ingen legger merke til at overvåkingen faktisk foregår", "Dele opptakene fritt med alle som ber om innsyn slik at overvåkingen blir mest mulig apen"],
      explanation: "Lovlig kameraovervaking krever dokumentert formål, en interesseavveining mellom sikkerhetsbehov og personvern, tydelig skilting og begrenset lagringstid.",
    },
    {
      question: "Hvilken etat forer tilsyn med behandling av personopplysninger i Norge?",
      options: ["Datatilsynet", "Politiet", "Arbeidstilsynet", "Brannvesenet"],
      explanation: "Datatilsynet er tilsynsmyndighet for personvern og behandling av personopplysninger i Norge.",
    },
  ],
  "sikkerhetsfag-5-1": [
    {
      question: "Hvilke tre forutsetninger ma være til stede for brann ifølge branntrekanten?",
      options: ["Brennbart stoff, oksygen og varme", "Trykk, gass og metall", "Høyt trykk, brennbar gass og oppvarmet metall som utløser antennelse i lukkede rom", "Vann, vind og kulde"],
      explanation: "Branntrekanten viser at brann krever brennbart stoff, oksygen og varme (tennenergi). Fjernes en av sidene, slokker brannen.",
    },
    {
      question: "Hva skjer ved overtenning (flashover)?",
      options: ["Alle brennbare overflater i et rom antennes nesten samtidig", "Brannen slokker av seg selv", "Temperaturen i rommet synker raskt fordi flammene sprer varmen jevnt utover alle flater", "Brannen slokker gradvis av seg selv fordi det brennbare materialet raskt brukes helt opp"],
      explanation: "Overtenning er punktet der alle brennbare overflater antennes samtidig og temperaturen stiger bratt til 500-600 grader. Rommet blir umulig å oppholde seg i.",
    },
    {
      question: "Hvorfor slokker et stearinlys når man setter et glass over det?",
      options: ["Oksygenet brukes opp, og en av branntrekantens sider fjernes", "Glasset tilfører mer brennbart stoff til flammen mens det står der", "Det blir rett og slett for varmt inne under glasset til at flammen kan holde seg taent", "Trykket inne i glasset oker så mye at flammen presses sammen og til slutt slukner helt"],
      explanation: "Glasset stenger ute ny luft. Etter hvert synker oksygenkonsentrasjonen under cirka 16 prosent, og forbrenningen kan ikke opprettholdes - oksygensiden i branntrekanten fjernes.",
    },
    {
      question: "Hvilken side i branntrekanten fjerner man typisk ved kjøling med vann?",
      options: ["Varme", "Brennbart stoff", "Oksygen", "Roeyk"],
      explanation: "Vann kjoler brannen ned slik at temperaturen synker under antennelsestemperaturen - det fjerner varmesiden i branntrekanten.",
    },
    {
      question: "Hvorfor er overtenning et kritisk vendepunkt i brannforlopet?",
      options: ["Brannen sprer seg da raskt til tilstøtende rom og rommet blir livsfarlig", "Slokking blir enklere fordi temperaturen faller raskt like etter overtenningen", "Slokkingen blir enklere etter overtenning fordi flammene samler seg på ett sted i rommet", "Røyken blir renere og mindre giftig etter overtenning slik at det gaar an å puste i rommet"],
      explanation: "Etter overtenning sprer brannen seg raskt til tilstøtende rom, og temperaturen gjor rommet umulig å oppholde seg i. Rømning ma skje for overtenning.",
    },
  ],
  "sikkerhetsfag-5-2": [
    {
      question: "Hvilken brannklasse gjelder faste stoffer som tre og papir?",
      options: ["Klasse A", "Klasse B", "Klasse C", "Klasse F"],
      explanation: "Klasse A omfatter faste stoffer som tre og papir. Klasse B er brennbare væsker, C er gasser, D er metaller og F er matolje/fett.",
    },
    {
      question: "Hvilken brannklasse gjelder brennbare væsker som bensin og olje?",
      options: ["Klasse B", "Klasse A", "Klasse C", "Klasse D"],
      explanation: "Klasse B omfatter brennbare væsker som bensin og olje.",
    },
    {
      question: "Hva er en branncelle?",
      options: ["Et avgrenset område konstruert for å hindre at brann og røyk sprer seg en gitt tid", "En type brannslukker fylt med skum som brukes mot større branner i store næringsbygg", "Et etterlysende skilt som markerer rømningsveien og leder folk trygt ut ved en evakuering", "En alarmenhet med røykdetektor som varsler både internt i bygget og direkte til brannvesenet"],
      explanation: "En branncelle er et avgrenset område adskilt med branncellebegrensende bygningsdeler som hindrer spredning av brann og røyk i en bestemt tidsperiode, for eksempel EI 30 eller EI 60.",
    },
    {
      question: "Hva betyr betegnelsen EI 60 om en bygningsdel?",
      options: ["Den har 60 minutters brannmotstand", "Den taler 60 graders varme", "Den taler flammer pa 60 grader", "Den er 60 centimeter tykk"],
      explanation: "EI 60 betyr at bygningsdelen har 60 minutters brannmotstand (integritet og isolasjon), altså at den hindrer brann og røyk i a passere i 60 minutter.",
    },
    {
      question: "Hvilken brannklasse gjelder matolje og fett?",
      options: ["Klasse F", "Klasse A", "Klasse B", "Klasse C"],
      explanation: "Klasse F omfatter matolje og fett, typisk for kjokkenbranner, og krever egnet slokkemiddel beregnet for fett.",
    },
  ],
  "sikkerhetsfag-5-3": [
    {
      question: "Hvordan slokker CO2 en brann?",
      options: ["Ved å fortrenge oksygen (kveler brannen)", "Ved a tilføre brennbart stoff", "Ved a tilføre ekstra oksygen", "Ved a tilføre mer oksygen"],
      explanation: "CO2 slokker ved å fortrenge oksygenet rundt brannen (kveler den). Det egner seg godt rundt elektronikk fordi det ikke etterlater rester.",
    },
    {
      question: "Hva er forsteinnsats ved brann?",
      options: ["Slokking og redning som utføres pa stedet for brannvesenet ankommer", "Brannvesenets samlede arbeid etter at de har ankommet selve skadestedet", "Slokkingen og redningen brannvesenet utforer etter at de har rykket ut og ankommet stedet", "En forsikringsordning som daekker de forste utgiftene virksomheten får rett etter en brann"],
      explanation: "Forsteinnsats er slokkingen og redningen som utføres av personer på stedet i de kritiske forste minuttene, for brannvesenet kommer. Egen sikkerhet gaar alltid først.",
    },
    {
      question: "Hvilket slokkemiddel er best egnet på en liten papirbrann nær elektronikk?",
      options: ["CO2-slokker", "Vannbøtte uten begrensning", "Brannteppe over hele rommet", "En bøtte med sand"],
      explanation: "CO2 egner seg godt nær elektronikk fordi det kveler brannen uten å etterlate rester som skader utstyret. Papir (klasse A) kan slokkes med CO2 nar brannen er liten.",
    },
    {
      question: "Hvordan virker et brannteppe?",
      options: ["Det kveler brannen ved å dekke til og stenge ute oksygen", "Det bryter den kjemiske reaksjonen med pulver", "Det bryter den kjemiske reaksjonen i flammen ved hjelp av et finkornet slokkepulver", "Det kjoler ved a tilføre vann"],
      explanation: "Et brannteppe kveler brannen ved å dekke til flammen og stenge ute oksygen. Det er effektivt mot for eksempel mindre fettbranner pa kjøkkenet.",
    },
    {
      question: "Hva er den viktigste regelen ved forsteinnsats?",
      options: ["Egen sikkerhet gaar alltid først", "Slokk uansett hvor stor brannen er", "Vent alltid til brannvesenet kommer", "Bruk vann på alle branner"],
      explanation: "Egen sikkerhet gaar alltid først. Hvis brannen er for stor eller farlig, skal man trekke seg ut, varsle og overlate slokkingen til brannvesenet.",
    },
  ],
  "sikkerhetsfag-5-4": [
    {
      question: "Hva er en rømningsvei?",
      options: ["En sikker, markert vei fra et punkt i bygningen ut til sikkert sted", "En vei inn til serverrommet", "En egen adkomstvei som forer inn til serverrommet og andre sikrede soner i bygningen", "En anvist parkeringsvei rundt bygget slik at kjoretoy kan komme trygt til og fra området"],
      explanation: "En rømningsvei er en sikker og markert utgangsvei fra et punkt i bygningen ut til sikkert sted (terreng i det fri), som taler brann og røyk tilstrekkelig lenge.",
    },
    {
      question: "Hva er en samlingsplass?",
      options: ["Et forhåndsbestemt sted utenfor bygningen der alle moter etter evakuering", "En sone for vareleveranser", "En egen sone for vareleveranser der last og kjoretoy holdes samlet under en evakuering", "Et eget rom inne i bygningen der alle skal mote og vente til brannvesenet gir klarsignal"],
      explanation: "Samlingsplassen er et forhåndsbestemt sted i trygg avstand fra bygningen der alle moter etter evakuering, og der det gjennomføres telling for å sikre at alle er ute.",
    },
    {
      question: "Hvorfor gjennomføres telling på samlingsplassen?",
      options: ["For å sikre at alle har kommet seg ut av bygningen", "For å registrere arbeidstid", "For å registrere de ansattes arbeidstid slik at frammøtet kan fores inn i timelistene", "For å male temperaturen"],
      explanation: "Telling på samlingsplassen brukes for å kontrollere at alle som oppholdt seg i bygningen faktisk er kommet ut, slik at man vet om noen fortsatt er inne.",
    },
    {
      question: "Hvilket regelverk stiller krav til rømningsveier?",
      options: ["Byggteknisk forskrift (TEK17) og brannforskriften", "Bare personopplysningsloven", "Vaktvirksomhetsloven og politiloven", "Bare vaktvirksomhetsloven"],
      explanation: "Krav til rømningsveier er regulert i byggteknisk forskrift (TEK17) og brannforskriften, som setter krav til sikre og markerte utganger.",
    },
    {
      question: "Hvorfor bor læreren ta med klasselisten ved evakuering av en skole?",
      options: ["For å kunne telle og kontrollere at alle elevene er kommet ut", "For å vise til brannvesenet hvem som eier skolen", "For å dokumentere hvem som eier skolebygningen", "For å registrere fravær til karakteren"],
      explanation: "Klasselisten brukes på samlingsplassen til a telle elevene og raskt avdekke om noen mangler og fortsatt kan være inne i bygningen.",
    },
  ],
  "sikkerhetsfag-5-5": [
    {
      question: "Hva er brannvernlederens rolle?",
      options: ["A ivareta det daglige brannvernarbeidet pa vegne av eier/ledelse", "A slokke alle branner alene", "A erstatte det kommunale brannvesenet ved å overta all utrykning og redning i virksomheten", "A være juridisk eier av bygningen"],
      explanation: "Brannvernlederen koordinerer brannforebyggende tiltak, gjennomfører brannøvelser, folger opp slokkeutstyr og dokumenterer arbeidet. Eieren har det overordnede ansvaret.",
    },
    {
      question: "Hva er internkontroll i brannvernsammenheng?",
      options: ["Systematiske tiltak for å sikre samsvar med HMS- og brannlovgivningen", "En engangskontroll fra brannvesenet ved det aller forste tilsynet i bygget", "En bestemt type slokkeapparat som plasseres sentralt og kontrolleres av eier en gang i aret", "En engangskontroll utført av brannvesenet ved tilsyn, som avslutter behovet for videre oppfølging"],
      explanation: "Internkontroll er systematiske tiltak virksomheten iverksetter for å sikre at brannsikkerheten planlegges, utføres og dokumenteres i samsvar med lovgivningen.",
    },
    {
      question: "Hvem har det overordnede ansvaret for brannsikkerheten i en virksomhet?",
      options: ["Eieren / ledelsen", "Den enkelte ansatte", "Brannvesenet", "Forsikringsselskapet"],
      explanation: "Eieren eller ledelsen har det overordnede ansvaret for brannsikkerheten, mens brannvernlederen utforer det praktiske, daglige arbeidet.",
    },
    {
      question: "Hvorfor er regelmessige brannøvelser viktige?",
      options: ["De trener personell og avdekker svakheter i planverket", "De gjor forsikringen billigere automatisk", "De gjor forsikringspremien automatisk billigere uansett om svakheter i planverket blir rettet opp", "De erstatter behovet for slokkeutstyr"],
      explanation: "Brannøvelser trener personell i sine roller, sikrer at alle kjenner rømningsveier og samlingsplass, og avdekker svakheter i beredskapen som kan rettes opp.",
    },
    {
      question: "Hva bor brannverndokumentasjonen i en bedrift inneholde?",
      options: ["Organisering, brannteknisk beskrivelse, rutiner og ovelsesplan", "Bare ansattes lonn", "Bare virksomhetens regnskap og budsjett, som viser hvor mye som er brukt på brannteknisk utstyr", "Bare en oppdatert kundeoversikt med kontaktinformasjon"],
      explanation: "Brannverndokumentasjonen bor blant annet inneholde ansvarsfordeling/organisering, brannteknisk beskrivelse av bygget, rutiner og plan for brannøvelser.",
    },
  ],
  "sikkerhetsfag-6-1": [
    {
      question: "Hva star HMS for?",
      options: ["Helse, miljø og sikkerhet", "Handtering av metoder og system", "Hovedsikkerhet og milisystem", "Helhetlig miljosatsing i drift"],
      explanation: "HMS star for helse, miljø og sikkerhet - det systematiske arbeidet med a ivareta arbeidstakernes helse, det ytre miljoet og sikkerheten på arbeidsplassen.",
    },
    {
      question: "Hva er internkontroll i HMS-sammenheng?",
      options: ["Systematiske tiltak for å sikre samsvar med HMS-lovgivningen", "En engangsinspeksjon fra Arbeidstilsynet", "En bestemt type verneutstyr som deles ut til ansatte for å sikre samsvar med HMS-lovgivningen", "En engangsinspeksjon fra Arbeidstilsynet, som etter godkjenning avslutter virksomhetens HMS-ansvar"],
      explanation: "Internkontroll er systematiske tiltak virksomheten iverksetter for at aktivitetene planlegges, utføres og vedlikeholdes i samsvar med HMS-lovgivningen.",
    },
    {
      question: "Hva er forste steg i en årlig HMS-gjennomgang?",
      options: ["En risikovurdering av arbeidsoppgavene", "A kjøpe nytt utstyr uten vurdering", "A si opp ansatte med flest avvik", "A avvikle alle rutiner"],
      explanation: "En HMS-gjennomgang starter typisk med en risikovurdering av arbeidsoppgavene, der man identifiserer farer for sa å lage en handlingsplan med tiltak.",
    },
    {
      question: "Hvorfor har vektere som jobber alene om natten okt risiko?",
      options: ["De er mer utsatt for vold og har ingen kollega til a bistå", "De jobber kortere dager", "De har vesentlig bedre lonn enn andre vektere og tar derfor på seg unødig risikofylte oppdrag", "De jobber gjennomgaende kortere vakter enn dagvaktene"],
      explanation: "Aleinearbeid om natten gir okt risiko for vold og truende situasjoner fordi vekteren ikke har en kollega til stede som kan bistå eller tilkalle hjelp raskt.",
    },
    {
      question: "Hva bor folge etter at en risikovurdering har avdekket farer?",
      options: ["En handlingsplan med konkrete tiltak", "At man slutter med rapportering", "At man avvikler det systematiske HMS-arbeidet fordi farene nå er kartlagt en gang for alle", "At man avvikler HMS-arbeidet"],
      explanation: "Etter at farer er identifisert, lager man en handlingsplan med konkrete tiltak (for eksempel opplæring eller utstyr) for å redusere risikoen.",
    },
  ],
  "sikkerhetsfag-6-2": [
    {
      question: "Hva regulerer arbeidsmiljøloven?",
      options: ["Arbeidsmiljø, arbeidstid, stillingsvern og medvirkning", "Bare kameraovervaking", "Bare brannvern og rømningsveier pa arbeidsplassen, samt kravene til dokumentert brannøvelse", "Bare lønnsnivå og lønnsutbetaling"],
      explanation: "Arbeidsmiljøloven er den sentrale loven for arbeidsforhold i Norge og stiller krav til arbeidsmiljoet, arbeidstiden, stillingsvern og medvirkning.",
    },
    {
      question: "Hvem er verneombudet?",
      options: ["Arbeidstakernes representant i sporsmal om arbeidsmiljoet", "En representant for arbeidsgiver alene", "En ekstern HMS-konsulent som leies inn", "En ansatt i Arbeidstilsynet"],
      explanation: "Verneombudet er arbeidstakernes valgte representant i sporsmal som angar arbeidsmiljoet, valgt av og blant de ansatte for to år om gangen.",
    },
    {
      question: "Hva innebærer verneombudets stansingsrett?",
      options: ["Rett til a stanse arbeid ved umiddelbar fare for liv og helse", "Rett til a endre arbeidstid fritt", "Rett til a fastsette lonn og godtgjørelse for arbeid som utføres under farlige forhold", "Rett til fritt å endre den ansattes arbeidstid og vaktplan nar arbeidsmiljoet krever det"],
      explanation: "Verneombudet kan bruke stansingsretten og stanse arbeidet dersom det er umiddelbar fare for arbeidstakernes liv eller helse, til faren er fjernet.",
    },
    {
      question: "For hvor lang periode velges normalt et verneombud?",
      options: ["To ar", "Seks måneder", "Ti ar", "En uke"],
      explanation: "Verneombudet velges av og blant de ansatte for en periode på to ar.",
    },
    {
      question: "Hva er hovedformålet med arbeidsmiljøloven?",
      options: ["A beskytte arbeidstakernes rettigheter og sikre et forsvarlig arbeidsmiljø", "A oke bedriftens fortjeneste", "A oke bedriftens fortjeneste ved å effektivisere driften og redusere kostnadene til vernetiltak", "A redusere antall ansatte gjennom regulerte nedbemanninger når virksomheten far dårligere okonomi"],
      explanation: "Arbeidsmiljølovens formål er å sikre et forsvarlig arbeidsmiljø og beskytte arbeidstakernes helse, sikkerhet og rettigheter.",
    },
  ],
  "sikkerhetsfag-6-3": [
    {
      question: "Hva står bokstavene i DHLR for?",
      options: ["Danner overblikk, Har fri luftvei, Livstegn, Ring 113 og start HLR", "Detektor, høyttaler, lys, radio", "Detektor, høyttaler, lys og radio, en huskeregel for delene i et automatisk brannvarslingsanlegg", "Dor, hus, lager og rom, en huskeregel for hvilke deler av et bygg vekteren skal kontrollere først"],
      explanation: "DHLR er en systematisk tilnærming: D = Danner overblikk (sikkerhet), H = Har fri luftvei, L = Livstegn (puster normalt?), R = Ring 113 og start HLR.",
    },
    {
      question: "Hva er forholdet mellom kompresjoner og innblasninger ved standard HLR pa voksne?",
      options: ["30 kompresjoner til 2 innblasninger", "15 kompresjoner til 2 innblasninger", "5 kompresjoner til 1 innblasning", "50 kompresjoner til 5 innblasninger"],
      explanation: "Standard HLR for voksne utføres med 30 brystkompresjoner etterfulgt av 2 innblasninger, gjentatt til hjelp ankommer eller personen viser livstegn.",
    },
    {
      question: "Hva er formålet med HLR?",
      options: ["A opprettholde blodstrømmen til hjernen og vitale organer når hjertet har stoppet", "A varme opp pasienten slik at kroppstemperaturen stiger opp til et normalt niva igjen", "A varme opp en nedkjølt og livløs pasient slik at kroppstemperaturen kommer opp for utrykning", "A stoppe ytre og indre blødninger ved hjelp av trykk og bandasjer for ambulansen ankommer stedet"],
      explanation: "HLR (hjerte-lunge-redning) opprettholder blodstrømmen til hjernen og andre vitale organer når hjertet har stoppet, til hjertet eventuelt kan startes igjen.",
    },
    {
      question: "Hva er det forste man gjor når man kommer til en livløs person (D i DHLR)?",
      options: ["Danner seg et overblikk over sikkerhet og situasjon", "Starter innblasninger umiddelbart", "Starter innblasninger og brystkompresjoner umiddelbart uten å sikre at stedet er trygt for deg selv", "Flytter personen langt unna"],
      explanation: "Forste steg (D) er å danne seg et overblikk: sikre at stedet er trygt for en selv og pasienten, og vurdere situasjonen for man går videre.",
    },
    {
      question: "Hvilket nummer ringer man for medisinsk nødhjelp i Norge?",
      options: ["113", "110", "112", "114"],
      explanation: "I Norge ringer man 113 for medisinsk nødhjelp (ambulanse), 110 for brann og 112 for politi.",
    },
  ],
  "sikkerhetsfag-6-4": [
    {
      question: "Hva er ergonomi?",
      options: ["Læren om å tilpasse arbeidet og arbeidsplassen til menneskets forutsetninger", "Læren om alarmsystemer og hvordan slike systemer settes opp, driftes og vedlikeholdes", "Læren om brann og forbrenning, som beskriver hvordan branner oppstår, sprer seg og kan slokkes", "Læren om alarm- og varslingssystemer, som beskriver hvordan sensorer og detektorer skal plasseres"],
      explanation: "Ergonomi er læren om å tilpasse arbeidet, arbeidsplassen og verktøyene til menneskets fysiske og psykiske forutsetninger, for å forebygge skader og oke effektiviteten.",
    },
    {
      question: "Hva er en belastningsskade?",
      options: ["En skade som oppstår gradvis av gjentatte påkjenninger eller feil belastning", "En rent psykisk diagnose helt uten fysisk årsak, verken i kroppen eller i arbeidet", "En forgiftning som oppstår nar kroppen tar opp skadelige gasser eller kjemikalier i arbeidsmiljoet", "En akutt brannskade som oppstår plutselig når huden utsettes for varme, flammer eller etsende stoffer"],
      explanation: "En belastningsskade oppstår gradvis på grunn av gjentatte påkjenninger eller feil belastning over tid, typisk i skuldre, nakke og rygg.",
    },
    {
      question: "Hvorfor er det et ergonomisk problem at skjermer plasseres for lavt?",
      options: ["Operatoren maa boye hodet nedover, noe som belaster nakke og rygg", "Det bruker mer strom fordi lysstyrken maa økes kraftig for aa se bildet", "Fordi bildet på skjermen blir uskarpt og vanskeligere å lese når operatoren ser ned på det", "Fordi skjermen bruker mer strom nar den står lavt, noe som oker virksomhetens energikostnader"],
      explanation: "Skjermer plassert for lavt tvinger operatoren til a boye hodet framover og nedover over tid, noe som gir okt belastning på nakke og rygg.",
    },
    {
      question: "Hvilket tiltak forebygger belastningsskader for stillesittende operatorer?",
      options: ["Justerbare stoler, riktig skjermhoyde og regelmessige pauser", "A sitte lengst mulig uten pause", "A senke skjermen ytterligere ned mot bordplaten slik at operatoren får et mer avslappet blikk", "A senke skjermen ytterligere"],
      explanation: "Justerbare stoler med korsryggstøtte, riktig skjermhoyde, fothvilere og regelmessige pauser reduserer belastningen og forebygger nakke- og ryggplager.",
    },
    {
      question: "Hva er riktig prinsipp for tung loftteknikk?",
      options: ["Bruk beina, hold ryggen rett og lasten nær kroppen", "Boy ryggen og loft med strake bein", "Vri overkroppen mens du lofter lasten", "Hold lasten langt fra kroppen"],
      explanation: "Riktig loftteknikk innebærer a bruke beina (boye i knaeene), holde ryggen rett og lasten nær kroppen, og unngå vridning, for a unngå belastning på ryggen.",
    },
  ],
  "sikkerhetsfag-6-5": [
    {
      question: "Hva handler psykososialt arbeidsmiljø om?",
      options: ["De psykologiske og sosiale forholdene på arbeidsplassen", "Bare fysisk verneutstyr", "Bare lonnsforholdene til de ansatte", "Bare brannsikkerhet"],
      explanation: "Psykososialt arbeidsmiljø handler om de psykologiske og sosiale forholdene, som relasjoner, organisering av arbeidet, medvirkning, arbeidsmengde og opplevelse av mening.",
    },
    {
      question: "Hva er hensikten med debriefing etter en alvorlig hendelse?",
      options: ["A bearbeide opplevelsen og forebygge psykiske ettervirkninger", "A straffe de involverte", "A straffe og ansvarliggjøre de involverte som gjorde feil, slik at hendelsen ikke gjentar seg", "A slippe å rapportere hendelsen videre, siden de involverte allerede har snakket sammen om den"],
      explanation: "Debriefing gir de involverte mulighet til a snakke gjennom hendelsen, bearbeide reaksjoner og forebygge psykiske ettervirkninger, samtidig som man laerer av hendelsen.",
    },
    {
      question: "Hva bor en arbeidsgiver gjore umiddelbart etter at ansatte har vaert utsatt for en trussel?",
      options: ["Folge opp de involverte og tilby støtte og samtale", "Sende dem rett tilbake på vakt uten oppfølging", "Late som ingenting har skjedd og fortsette driften som normalt for a unngå a skape unødig uro", "Late som ingenting har skjedd"],
      explanation: "Umiddelbart bor arbeidsgiver folge opp de involverte med omsorg, tilby samtale/avlastning, rapportere hendelsen og vurdere videre oppfølging og eventuell politianmeldelse.",
    },
    {
      question: "Hvilken faktor inngår i et godt psykososialt arbeidsmiljø?",
      options: ["Gode relasjoner, rolleklarhet og mulighet for medvirkning", "Manglende støtte fra ledelsen", "Uklare ansvarsforhold og rolleforventninger, slik at ansatte selv finner ut hva de skal gjore", "Uklare ansvarsforhold"],
      explanation: "Et godt psykososialt arbeidsmiljø kjennetegnes av gode relasjoner, rolleklarhet, passe arbeidsmengde, medvirkning og opplevelse av mening og mestring.",
    },
    {
      question: "Hvorfor er det viktig å handtere vold og trusler systematisk i sikkerhetsbransjen?",
      options: ["Fordi ansatte er særlig utsatt, og det påvirker helse og arbeidsmiljø", "Fordi slike hendelser er uvanlige og uten betydning for driften av selskapet", "Fordi vold og trusler er uvanlig i bransjen og derfor ikke har vesentlig betydning for driften", "Fordi det utelukkende handler om okonomiske tap, og ikke påvirker de ansattes helse eller trivsel"],
      explanation: "Sikkerhetsansatte er særlig utsatt for vold og trusler. Systematisk forebygging og oppfølging beskytter de ansattes fysiske og psykiske helse og arbeidsmiljø.",
    },
  ],
  "sikkerhetsfag-7-1": [
    {
      question: "Hva er vaktvirksomhet ifølge loven?",
      options: ["Virksomhet som vaker over eller beskytter personer, eiendom eller verdier", "Bare transport av varer", "Bare salg og installasjon av alarmsystemer, kameraer og annet elektronisk sikringsutstyr hos kunder", "Bare transport av varer og verdier mellom lokasjoner, uten ansvar for å beskytte personer og eiendom"],
      explanation: "Vaktvirksomhet går ut pa å vake over eller beskytte personer, eiendom eller andre verdier, og kontrollere adgang. Det dekker blant annet ordensvakter og butikkvektere.",
    },
    {
      question: "Hva er autorisasjon i vaktvirksomhetsloven?",
      options: ["En offentlig tillatelse fra politiet til a drive vaktvirksomhet", "Et vekterdiplom fra skolen", "En kontrakt mellom vaktforetaket og kunden som beskriver hvilke tjenester som skal leveres", "En forsikringsavtale som dekker tap ved skader og tyveri"],
      explanation: "Autorisasjon er en offentlig tillatelse fra politiet som gir et foretak lov til a drive vaktvirksomhet. Uten autorisasjon er det ulovlig a tilby vakttjenester.",
    },
    {
      question: "Hvem gir autorisasjon til a drive vaktvirksomhet?",
      options: ["Politidistriktet der foretaket har hovedkontor", "Arbeidstilsynet", "Kommunen der foretaket har hovedkontor", "Datatilsynet"],
      explanation: "Autorisasjonen gis av politidistriktet der foretaket har sitt hovedkontor.",
    },
    {
      question: "Hva vurderer politiet ved søknad om å bli vekter?",
      options: ["Vandel, blant annet ut fra type lovbrudd og hvor lenge siden", "Bare søkerens utdanning i andre fag", "Kun søkerens formelle utdanning i helt andre fagfelt enn sikkerhet og vakthold", "Bare søkerens alder ved søknadstidspunktet"],
      explanation: "Politiet vurderer vandelen individuelt ut fra blant annet type lovbrudd og hvor lenge det er siden, fordi vektere kan havne i konfliktsituasjoner.",
    },
    {
      question: "Hva er hovedformålet med vaktvirksomhetsloven?",
      options: ["A regulere hvem som kan drive vaktvirksomhet og hvilke krav som gjelder", "A regulere bruken av kameraovervaking alene, uten andre former for sikring", "A regulere forebyggende brannvern og beredskap i næringsbygg med mange ansatte", "A fastsette hvilken minstelønn og hvilke arbeidstidsordninger vektere har krav paa"],
      explanation: "Vaktvirksomhetsloven regulerer hvem som kan drive vaktvirksomhet, kravene til autorisasjon, og hvilke plikter og begrensninger vektere har.",
    },
  ],
  "sikkerhetsfag-7-2": [
    {
      question: "Hva gir nødverge (straffeloven paragraf 18) rett til?",
      options: ["A bruke nødvendig makt for å avverge et ulovlig angrep", "A pågripe hvem som helst uten grunn", "A pågripe hvem som helst uten konkret mistanke", "A straffe en person etter angrepet"],
      explanation: "Nødverge gir rett til a bruke makt for å avverge et pagaaende ulovlig angrep. Makten maa ikke gaa lenger enn nødvendig og ikke være åpenbart uforsvarlig.",
    },
    {
      question: "Hva er forskjellen mellom nødverge og nødrett?",
      options: ["Nødverge avverger et ulovlig angrep; nødrett gjelder fare som ikke skyldes et angrep", "Nødrett gjelder bare angrep fra mennesker", "Nødrett gjelder utelukkende angrep fra mennesker, mens dyr og naturkrefter faller utenfor", "Nødverge gjelder utelukkende farer fra naturkrefter og ulykker, aldri angrep fra personer"],
      explanation: "Nødverge gjelder a avverge et ulovlig angrep. Nødrett (paragraf 17) gjelder å redde verdier fra en fare som ikke kan avverges på annen mate, og som kan komme fra naturkrefter, ulykker eller dyr.",
    },
    {
      question: "Hva krever forholdsmessighetsprinsippet ved maktbruk?",
      options: ["At maktbruken står i rimelig forhold til angrepet og ikke er uforsvarlig", "At man alltid skal bruke maksimal makt for å stanse angrepet raskest mulig", "At man venter til skaden er skjedd og først deretter griper inn overfor angriperen", "At man i prinsippet aldri kan bruke noen form for fysisk makt selv om man blir angrepet"],
      explanation: "Forholdsmessighet innebærer at maktbruken ikke maa gaa lenger enn nødvendig og ikke være åpenbart uforsvarlig sett opp mot angrepets farlighet og de truede verdiene.",
    },
    {
      question: "Nar gjelder borgernes pagripelsesrett?",
      options: ["Nar noen treffes på fersk gjerning i en straffbar handling", "Nar man mistenker noen uten bevis", "Naar arbeidsdagen er over og vekteren ønsker a avslutte vakten sin for kvelden", "Naar en kunde klager over dårlig service i en butikk"],
      explanation: "Borgernes pagripelsesrett gjelder når en person treffes på fersk gjerning eller ferske spor i en straffbar handling, slik en butikkvekter kan ved butikktyveri.",
    },
    {
      question: "Hva bor en ordensvakt gjore først nar to gjester begynner a slåss?",
      options: ["Forsøke verbal tilnærming for eventuell fysisk inngripen", "Slaa til begge umiddelbart", "Ignorere situasjonen fullstendig og la slagsmaalet utvikle seg videre uten å gripe inn", "Forlate stedet og overlate håndteringen til gjestene"],
      explanation: "Minste inngripende middel først: en verbal tilnærming (\"Stopp dette\") for man eventuelt fysisk skiller partene. Maktbruk skal være nødvendig og forholdsmessig.",
    },
  ],
  "sikkerhetsfag-7-3": [
    {
      question: "Hva er formålet med brann- og eksplosjonsvernloven?",
      options: ["A verne liv, helse, miljø og materielle verdier mot brann og eksplosjon", "A regulere kameraovervaking", "A regulere kameraovervaking og lagring av videoopptak i butikker og kjøpesentre", "A fastsette vekteres lønnsnivå og hvilke tillegg de har krav paa ved natt- og helgearbeid"],
      explanation: "Brann- og eksplosjonsvernloven har til formål a verne liv, helse, miljø og materielle verdier mot brann, eksplosjon og ulykker med farlig stoff og gods.",
    },
    {
      question: "Hva regulerer brann- og eksplosjonsvernloven?",
      options: ["Bade forebyggende arbeid og beredskap mot brann og eksplosjon", "Bare etterforskning etter brann", "Bare forsikringsutbetalinger og oppgjor mellom eier og selskap etter en brannskade", "Bare tekniske bygningstegninger og romningsplaner"],
      explanation: "Loven regulerer både forebyggende arbeid mot brann og eksplosjon, og beredskapen, inkludert brannvesenets rolle og krav til bygninger og virksomheter.",
    },
    {
      question: "Hva bor en vekter gjore om en nødutgang er blokkert av vareleveranser?",
      options: ["Fjerne hindringene eller sperre av og varsle ansvarlig umiddelbart", "La det ligge til neste dag", "Ignorere det siden det uansett er andre nødutganger andre steder i den samme bygningen", "La vareleveransene ligge foran utgangen til neste dag naar de likevel skal flyttes videre"],
      explanation: "En blokkert nødutgang er en alvorlig sikkerhetsrisiko. Vekteren bor fjerne hindringene om mulig, eventuelt sperre av og varsle ansvarlig, og dokumentere forholdet.",
    },
    {
      question: "Hvilken rolle har vektere i brannforebygging under rondering?",
      options: ["A oppdage og rapportere avvik som blokkerte utganger og manglende slokkeutstyr", "A overta alle brannvesenets oppgaver både under slokking og under redning på stedet", "A slokke enhver brann som oppstår helt alene uten å tilkalle brannvesen eller nødetater", "A ignorere alle brannforhold under rondering fordi dette ligger utenfor vekterens ansvar"],
      explanation: "Under rondering bidrar vektere til brannforebygging ved å oppdage og rapportere avvik, for eksempel blokkerte nødutganger eller manglende slokkeapparat.",
    },
    {
      question: "Hvorfor bor manglende slokkeutstyr noteres og rapporteres?",
      options: ["Slik at det kan utbedres og dokumenteres som en del av internkontrollen", "For å kunne straffe den som er ansvarlig for at slokkeutstyret mangler i bygget", "For a unngå personlig ansvar ved a skyve oppgaven med utbedring over paa noen andre", "For å oke brannfaren bevisst slik at man senere kan teste hvordan beredskapen fungerer"],
      explanation: "Manglende slokkeutstyr noteres med plassering og rapporteres slik at det kan erstattes raskt, og inngår i virksomhetens dokumenterte internkontroll av brannsikkerheten.",
    },
  ],
  "sikkerhetsfag-7-4": [
    {
      question: "Hva regnes som personopplysninger etter GDPR?",
      options: ["Enhver opplysning som kan knyttes til en identifiserbar person", "Bare opplysninger om bedrifter", "Bare anonyme data som er avidentifisert og ikke lenger kan spores tilbake til noen person", "Bare offentlig tilgjengelige opplysninger"],
      explanation: "Personopplysninger er enhver opplysning som kan knyttes til en identifiserbar person, inkludert navn, videoopptak, IP-adresser, fingeravtrykk og posisjonsdata.",
    },
    {
      question: "Hva er et behandlingsgrunnlag etter GDPR?",
      options: ["Det juridiske grunnlaget som gjor det lovlig å behandle personopplysninger", "En forsikringsavtale som dekker okonomiske tap ved tap av personopplysninger", "En arbeidskontrakt mellom vaktselskapet og den enkelte vekter som behandler opplysningene", "En bestemt type kamera med hoy oppløsning som er godkjent for lovlig overvaking av områder"],
      explanation: "Behandlingsgrunnlaget er det juridiske grunnlaget som gjor behandlingen lovlig, for eksempel samtykke, avtale, rettslig forpliktelse, berettiget interesse eller vitale interesser.",
    },
    {
      question: "Hva må et vaktselskap gjore for det installerer kameraovervaking i et kjøpesenter?",
      options: ["Vurdere behandlingsgrunnlag og dokumentere interesseavveiningen", "Lagre opptak i ubegrenset tid", "Skjule alle kameraene godt slik at ingen besokende oppdager at de faktisk blir overvåket", "Sorge for at opptakene fritt kan deles med alle ansatte"],
      explanation: "For installasjon må selskapet vurdere behandlingsgrunnlaget (ofte berettiget interesse), dokumentere interesseavveiningen og utarbeide en protokoll over behandlingsaktiviteter.",
    },
    {
      question: "Hva skjer hvis personopplysninger behandles uten gyldig behandlingsgrunnlag?",
      options: ["Behandlingen er ulovlig", "Det er alltid lov", "Det blir automatisk lovlig etter ett ar", "Det gjelder bare for bedrifter"],
      explanation: "Uten et gyldig behandlingsgrunnlag er behandlingen av personopplysninger ulovlig etter personvernregelverket.",
    },
    {
      question: "Hva er et viktig tiltak ved kameraovervaking av et område?",
      options: ["Tydelig skilting om at området er kameraovervåket", "A lagre opptak for alltid", "A lagre alle opptakene for alltid", "A unngå all dokumentasjon"],
      explanation: "Tydelig skilting om at et område er kameraovervåket er et sentralt krav, slik at de registrerte er informert om overvåkingen.",
    },
  ],
  "sikkerhetsfag-7-5": [
    {
      question: "Hvilken lov er den viktigste for regulering av arbeidsforhold i Norge?",
      options: ["Arbeidsmiljoloven", "Vaktvirksomhetsloven", "Politiloven i Norge", "Sivilbeskyttelsesloven"],
      explanation: "Arbeidsmiljøloven (lov om arbeidsmiljø, arbeidstid og stillingsvern) er den viktigste loven for arbeidsforhold, og gjelder også for vektere.",
    },
    {
      question: "Hva regulerer politiloven som er relevant for vektere?",
      options: ["Politiets organisering og myndighet, og grensen mot private vaktselskaper", "Kameraovervaking i butikker", "Utelukkende vekteres lonn og hvilke tillegg de har krav paa ved arbeid paa natt og i helger", "Kameraovervaking i butikker og hvordan videoopptak skal lagres, merkes og slettes forsvarlig"],
      explanation: "Politiloven regulerer politiets oppgaver og myndighetsutøvelse, og klargjør grensen mellom politiets oppgaver og private vaktselskapers virkeområde.",
    },
    {
      question: "Hva regulerer sivilbeskyttelsesloven?",
      options: ["Kommunenes og statens ansvar for å beskytte befolkningen ved kriser og katastrofer", "Bare vakthold i butikker", "Bare vakthold og adgangskontroll i butikker og kjøpesentre under vanlige åpningstider", "Bare arbeidstid og turnusordninger for ansatte i beredskaps- og sikkerhetsvirksomheter"],
      explanation: "Sivilbeskyttelsesloven pålegger kommunene å utarbeide beredskapsplaner og stiller krav til sivil beredskap, inkludert tilfluktsrom og varslingssystemer.",
    },
    {
      question: "Hva er ordensvaktenes rolle naar politiet er til stede ved bråk?",
      options: ["Observere, rapportere, bortvise fra privat grunn og varsle politiet", "Pågripe og avhøre de mistenkte på stedet for politiet rekker fram til stedet", "Pågripe de mistenkte og gjennomføre avhør av dem for å klarlegge hva som har skjedd", "Overta all politimyndighet paa stedet og selv lede den videre håndteringen av bråket"],
      explanation: "Ordensvakter observerer og rapporterer, forsøker verbal kommunikasjon, bortviser fra privat grunn og varsler politiet, som tar over håndteringen ved eskalering.",
    },
    {
      question: "Hvorfor er det viktig at vektere kjenner grensen mot politiets myndighet?",
      options: ["Fordi politiet har myndighet vektere ikke har, og roller må holdes adskilt", "Fordi vektere har mer myndighet enn politiet", "Fordi vektere fritt kan overta politiets oppgaver naar de mener det er hensiktsmessig paa stedet", "Fordi grensene mellom rollene ikke har praktisk betydning"],
      explanation: "Politiet har myndighet (for eksempel pågripelse og bruk av tvangsmidler) som vektere ikke har. Vektere må holde seg innenfor sitt virkeområde og overlate politioppgaver til politiet.",
    },
  ],
  "sikkerhetsfag-8-1": [
    {
      question: "Hva er beredskap?",
      options: ["Tiltak som planlegges og gjennomføres for a håndtere uventede hendelser", "En type forsikring som dekker de okonomiske skadene etter uønskede hendelser", "En brannklasse som angir hvor motstandsdyktig en bygning er mot brann og røykutvikling", "Et automatisk alarmsystem som varsler nødetatene straks en uønsket hendelse blir registrert"],
      explanation: "Beredskap er tiltak som planlegges og gjennomføres for a håndtere uventede hendelser som kan true liv, helse, miljø eller verdier, og omfatter forebygging, forberedelse, respons og gjenoppretting.",
    },
    {
      question: "Hva er et tiltakskort?",
      options: ["En kortfattet instruks for konkrete handlinger ved en bestemt type hendelse", "Et eget bankkort som er satt av til innkjop i beredskapssituasjoner i bedriften", "Et forhåndsbetalt bankkort som brukes til innkjop av utstyr til beredskapen ved kriser", "Et opplyst romningsskilt som viser retningen mot nærmeste nødutgang under en evakuering"],
      explanation: "Et tiltakskort er en kortfattet instruks knyttet til en bestemt rolle og et bestemt scenario, med trinnvise handlinger slik at den ansvarlige vet nøyaktig hva som skal gjores.",
    },
    {
      question: "Hva bor en vaktleder gjore først ved bekreftet brann i et kjøpesenter?",
      options: ["Ringe 110 og iverksette evakuering", "Vente til kunden har gatt hjem", "Vente rolig uten å foreta seg noe", "Slukke all belysning"],
      explanation: "Ved bekreftet brann bor vaktlederen ringe 110, gi nøyaktig adresse og informasjon, og iverksette evakuering, samt sende vektere til utgangene for å lede folk ut.",
    },
    {
      question: "Hvilke faser inngår i beredskap?",
      options: ["Forebygging, forberedelse, respons og gjenoppretting", "Bare etterforskning", "Bare forsikringsoppgjør og erstatning etter at skaden paa liv, helse og verdier er inntruffet", "Bare forsikring"],
      explanation: "Beredskap omfatter fire faser: forebygging (hindre hendelser), forberedelse (planlegge), respons (håndtere) og gjenoppretting (normalisere etterpa).",
    },
    {
      question: "Hvorfor knyttes tiltakskort til bestemte roller?",
      options: ["Slik at hver ansvarlig vet nøyaktig hva nettopp de skal gjore", "For å forvirre de ansatte", "For å forvirre de ansatte med mange ulike instrukser saa de maa tenke selv i situasjonen", "For å spare papir ved å samle alle rollenes oppgaver paa ett og samme felles ark eller kort"],
      explanation: "Tiltakskort knyttes til roller slik at hver person raskt vet sine konkrete oppgaver i en stresset situasjon, noe som gir tydelig ansvarsfordeling og effektiv respons.",
    },
  ],
  "sikkerhetsfag-8-2": [
    {
      question: "Hva kjennetegner en krise?",
      options: ["Hoy usikkerhet, tidspress, behov for raske beslutninger og stor oppmerksomhet", "En rolig, forutsigbar situasjon", "En rolig og forutsigbar situasjon der man har god tid til a planlegge hvert enkelt tiltak", "En helt vanlig arbeidsdag med de rutinemessige oppgavene som inngår i normal drift av stedet"],
      explanation: "En krise er en alvorlig hendelse som truer viktige verdier og krever ekstraordinære tiltak. Den kjennetegnes av hoy usikkerhet, tidspress og stor oppmerksomhet utenfra.",
    },
    {
      question: "Hva kjennetegner god krisekommunikasjon?",
      options: ["Den er rask, ærlig, konsistent og tilpasset mottakeren", "Den er treig og holdes hemmelig", "Den endrer budskap ut fra hvem som spor", "Den utelater all informasjon"],
      explanation: "God krisekommunikasjon er rask, ærlig, konsistent og tilpasset mottakeren, slik at riktig informasjon naar dem som trenger den, og tilliten opprettholdes.",
    },
    {
      question: "Hva er en krisestab?",
      options: ["En gruppe som leder og koordinerer håndteringen av en krise", "En gruppe journalister", "Et forsikringsselskap som beregner og utbetaler erstatning for tapene som oppstår under krisen", "En gruppe journalister som samler inn og videreformidler informasjon om krisen til offentligheten"],
      explanation: "En krisestab aktiveres for å lede og koordinere håndteringen av en krise, med roller som kriseleder, operasjonsleder og informasjonsansvarlig.",
    },
    {
      question: "Hva bor en kriseleder gjore tidlig i en gasslekkasje?",
      options: ["Innhente situasjonsbilde: type gass, omfang og vindretning", "Vente til media ringer", "Vente med a foreta seg noe til media ringer og etterspor en offisiell uttalelse om hendelsen", "Avlyse all evakuering for a unngå panikk"],
      explanation: "Kriselederen bor raskt innhente et situasjonsbilde - hva slags gass, omfang og vindretning - som grunnlag for beslutninger om evakuering og koordinering med nødetatene.",
    },
    {
      question: "Hvorfor er rask og ærlig informasjon viktig under en krise?",
      options: ["For å redusere usikkerhet og opprettholde tillit", "For a unngå a varsle nødetatene", "For å tjene penger paa selve situasjonen", "For å skjule hva som skjer"],
      explanation: "Rask og ærlig kommunikasjon reduserer usikkerhet, hindrer rykter og opprettholder tilliten til virksomheten under og etter krisen.",
    },
  ],
  "sikkerhetsfag-8-3": [
    {
      question: "Hva er terrorisme?",
      options: ["Alvorlige voldshandlinger eller trusler som skal skape frykt og påvirke beslutninger", "Vanlig vinningskriminalitet som tyveri, innbrudd og bedrageri rettet mot privatpersoner", "Ulovlig innsamling av personopplysninger for å selge dem videre til kriminelle nettverk", "Uroligheter mellom to nabostater som eskalerer til åpen militær konflikt over et grenseområde"],
      explanation: "Terrorisme er alvorlige voldshandlinger eller trusler om slike, med hensikt å skape frykt i befolkningen, påvirke politiske beslutninger eller destabilisere samfunnet.",
    },
    {
      question: "Hva er PLIVO?",
      options: ["Felles prosedyre for nødetatene ved pagaaende livstruende vold", "Et kameraovervakingssystem som brukes i offentlige rom og i store bygg", "Et regelverk for hvordan vaktselskaper skal bevaepnes ved store arrangementer", "En nasjonal varslingsordning der publikum sender tips om mistenkelig aktivitet"],
      explanation: "PLIVO (Pagaaende Livstruende Vold) er en felles prosedyre for politi, brann og helse, utviklet etter 22. juli 2011, for raskt og koordinert å redde liv ved slike hendelser.",
    },
    {
      question: "Hva er forste steg i en trusselvurdering for et arrangement?",
      options: ["Identifisere mulige trusselaktorer", "Avlyse arrangementet", "Sende rapport til Datatilsynet", "Selge billetter"],
      explanation: "En trusselvurdering starter med a identifisere mulige trusselaktorer (for eksempel radikaliserte enkeltpersoner) og deretter vurdere deres intensjon og kapasitet.",
    },
    {
      question: "Hvilken etat har en sentral rolle i forebyggende arbeid mot terror i Norge?",
      options: ["PST (Politiets sikkerhetstjeneste)", "Arbeidstilsynet", "Kripos, som etterforsker etterpa", "Datatilsynet"],
      explanation: "PST (Politiets sikkerhetstjeneste) har en sentral rolle i det forebyggende arbeidet mot terror og utarbeider nasjonale trusselvurderinger.",
    },
    {
      question: "Hva inngår i a vurdere en trusselaktor?",
      options: ["Aktorens intensjon og kapasitet", "Aktorens favorittfarge", "Aktorens moteaktivitet", "Aktorens bosted alene"],
      explanation: "I en trusselvurdering vurderes aktorens intensjon (vilje til a utføre handlingen) og kapasitet (evne/midler til a gjennomføre den), gjerne sett opp mot PSTs trusselvurdering.",
    },
  ],
  "sikkerhetsfag-8-4": [
    {
      question: "Hva er en naturkatastrofe?",
      options: ["En hendelse forårsaket av naturkrefter med betydelige skader på mennesker, eiendom eller miljø", "En langvarig arbeidskonflikt som fører til stans i viktige samfunnstjenester og leveranser", "Et alvorlig dataangrep som lammer kritisk infrastruktur og forsyningssystemer i samfunnet", "En menneskeskapt eksplosjon som skyldes uforsvarlig lagring av farlige kjemikalier"],
      explanation: "En naturkatastrofe er forårsaket av naturkrefter og medfører betydelige skader. I Norge er de vanligste knyttet til flom, skred, storm og stormflo.",
    },
    {
      question: "Hva anbefaler DSB at hver husstand har som egenberedskap?",
      options: ["Vann, mat, varme, lys og medisin for minst 72 timer", "Et vaktselskap på kontrakt", "En privat bunker med plass og forsyninger for hele nabolaget ved en større krise", "En fast kontrakt med et vaktselskap"],
      explanation: "DSB anbefaler at alle husstander har egenberedskap med vann, mat, varme, lys og nødvendig medisin for å klare seg selv i minst 72 timer (tre døgn).",
    },
    {
      question: "Hvilke naturhendelser er vanligst i Norge?",
      options: ["Flom, skred, storm og stormflo", "Vulkanutbrudd og jordskjelv", "Kraftige vulkanutbrudd og jordskjelv som følge av bevegelser i jordskorpa langs kysten", "Sandstormer og tørke"],
      explanation: "I Norge er de vanligste naturkatastrofene knyttet til flom, skred (jord, stein, sno), storm og stormflo.",
    },
    {
      question: "Hva inngår i forebyggende flomberedskap i en kommune?",
      options: ["Oppdaterte flomsonekart, byggebegrensninger og vedlikehold av flomvoller", "A fjerne alle dreneringssystemene i kommunen for aa spare penger paa drift", "Aa overlate all handtering av flomrisiko til den enkelte grunneier uten kommunal oppfølging", "Aa fjerne eksisterende dreneringssystemer og flomvoller for aa spare kostnader til vedlikehold"],
      explanation: "Forebyggende flomberedskap omfatter oppdaterte flomsonekart, byggebegrensninger i utsatte soner, vedlikehold av flomvoller og dreneringssystemer, og sikring av kritisk infrastruktur.",
    },
    {
      question: "Hva er hovedhensikten med egenberedskap hos den enkelte borger?",
      options: ["A kunne klare seg selv en periode og avlaste nødetatene ved store hendelser", "A erstatte all offentlig beredskap", "Aa gjøre offentlig beredskap overflødig slik at nødetatene kan bygges kraftig ned over tid", "Aa gi den enkelte mulighet til aa tjene penger paa aa selge egne forsyninger under en krise"],
      explanation: "Egenberedskap gjor at den enkelte kan klare seg selv i minst 72 timer ved en alvorlig hendelse, slik at nødetatene kan prioritere dem som trenger hjelp mest.",
    },
  ],
  "sikkerhetsfag-8-5": [
    {
      question: "Hva er en beredskapsøvelse?",
      options: ["En planlagt aktivitet der man trener pa a håndtere uønskede hendelser etter beredskapsplanen", "En rutinemessig arbeidsdag der ansatte følger vanlige oppgaver uten avvik fra normaldriften", "En forsikringsavtale som dekker de økonomiske tapene virksomheten får ved en uønsket hendelse", "En automatisk alarmordning som varsler nødetatene straks en uønsket hendelse blir oppdaget"],
      explanation: "En beredskapsøvelse er en planlagt aktivitet der organisasjonen trener pa a håndtere uønskede hendelser i henhold til beredskapsplanen, for a teste planverket og avdekke svakheter.",
    },
    {
      question: "Hva er en innsprøytning (inject) i en beredskapsøvelse?",
      options: ["Ny informasjon som tilføres underveis for å styre forløpet og utfordre deltakerne", "En medisinsk behandling", "En medisinsk behandling som gis til skadde deltakere før den virkelige nødetaten ankommer stedet", "En forhåndsdefinert alarm som utløses automatisk naar øvelsen naar et bestemt tidspunkt i forløpet"],
      explanation: "En innsprøytning (inject) er ny informasjon - meldinger, endrede forutsetninger eller komplikasjoner - som tilføres underveis for å styre forløpet og utfordre deltakerne.",
    },
    {
      question: "Hva kjennetegner en tabletop-ovelse (bordovelse)?",
      options: ["Gjennomgang av planer og diskusjon av scenarier rundt et bord", "Test av enkeltfunksjoner som varsling", "Isolert test av enkeltfunksjoner som varslingsanlegg og nødlys uten øvrig deltakelse", "Full fysisk evakuering av hele bygget der alle ansatte deltar under realistiske forhold"],
      explanation: "En tabletop-ovelse innebærer gjennomgang av planer og diskusjon av scenarier rundt et bord. Den krever lite ressurser og er god for a klargjøre roller og samhandling.",
    },
    {
      question: "Hvorfor evalueres beredskapsøvelser systematisk?",
      options: ["For å avdekke svakheter og forbedre beredskapen kontinuerlig", "For å spare penger paa arbeidet med planverket i hele virksomheten", "For aa dokumentere at videre øvelser er unødvendige slik at man kan slutte aa øve", "For aa kunne straffe de deltakerne som gjorde feil under gjennomføringen av øvelsen"],
      explanation: "Systematisk evaluering avdekker hva som fungerte og hva som sviktet, slik at planverk og beredskap kan forbedres kontinuerlig.",
    },
    {
      question: "Hva er et viktig forste punkt i en ovelsesplan?",
      options: ["A definere formålet med øvelsen", "A bestemme lunsjmenyen", "A avlyse øvelsen", "A skjule scenariet for arrangøren"],
      explanation: "En ovelsesplan starter med a definere formålet (for eksempel a teste brannberedskapen), som styrer scenario, deltakere og hva som skal evalueres.",
    },
  ],
};

export default quizData_sikkerhetsfag;
