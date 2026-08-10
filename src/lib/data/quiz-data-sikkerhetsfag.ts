import type { QuizQuestion } from './quiz-data';

const quizData_sikkerhetsfag: Record<string, QuizQuestion[]> = {
  "sikkerhetsfag-1": [
    {
      question: "Hva er de tre grunnpilårene i sikkerhetsarbeid?",
      options: ["Forebygging, avdekking og respons", "Planlegging, gjennomforing og evaluering", "Vakthold, overvaking og kontroll", "Risiko, sårbarhet og trussel"],
      explanation: "Sikkerhetens tre grunnpilærer er førebygging (hindre hendelser), avdekking (oppdage hendelser tidlig) og respons (handtere hendelser effektivt).",
    },
    {
      question: "Hva er minimumskravet til vekterutdanning i Norge?",
      options: ["105 timer", "80 timer", "50 timer", "200 timer"],
      explanation: "I Norge er minimumskravet til vekterutdanning 105 timer. Dette inkluderer både teori og praksis, og er regulert i vaktvirksomhetsloven.",
    },
    {
      question: "Hvilken etisk grunnverdi innebærer å handle ærlig og konsekvent?",
      options: ["Integritet", "Lojalitet", "Respekt for andre", "Taushetsplikt"],
      explanation: "Integritet betyr å handle ærlig og konsekvent. Det innebærer blant annet a aldri la seg bestikke, rapportere sannferdig og ta ansvar for egne feil.",
    },
    {
      question: "Hvilken yrkesrolle har det overordnede ansvåret for sikkerheten i en virksomhet?",
      options: ["Sikkerhetsleder", "Vekter i tjeneste", "Sikkerhetsradgiver", "Operator i alarmsentral"],
      explanation: "Sikkerhetslederen har det overordnede ansvåret for sikkerheten, inkludert a utvikle sikkerhetsstrategi, gjennomføre risikovurderinger og lede sikkerhetspersonell.",
    },
    {
      question: "Nårtaushetsplikten for vektere star i konflikt med andre hensyn, hva gåroverst?",
      options: ["Lojalitet til loven", "Lojalitet til arbeidsgiver", "Lojalitet til kolleger", "Lojalitet til kunden"],
      explanation: "Nårdet oppstar konflikt mellom lojaliteter, star lojalitet til loven alltid overst. Vektere måderfor rapportere lovbrudd selv om det gårpåtvers av andre lojaliteter.",
    },
  ],
  "sikkerhetsfag-2": [
    {
      question: "Hvordan defineres risiko i sikkerhetsarbeid?",
      options: ["Sannsynlighet multiplisert med konsekvens", "Konsekvens minus førebyggende tiltak", "Summen av alle identifiserte trusler i et gitt tidsrom", "Antall sårbarheter delt på verdiene som beskyttes"],
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
      explanation: "Forsikring er et eksempel påa overføre risiko. Du betaler forsikringsselskapet for a baere den økonomiske risikoen ved en eventuell hendelse.",
    },
    {
      question: "Hva kalles risikoen som gjenstår etter at tiltak er implementert?",
      options: ["Restrisiko", "Gjenvarende trussel", "Akseptert sårbarhet", "Minimumsrisiko"],
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
      explanation: "Proximity-kort (RFID) er standard i dag. De har beroringsri avlesning, er vanskeligere a kopiere enn magnetstripe, og har lang levetid.",
    },
    {
      question: "Hva måinkluderes påskilt om kameraovervaking?",
      options: ["At området er overvåket, hvem som er ansvårlig, og kontaktinformasjon", "Kameraets nøyaktige plassering og hvilken kameratype som brukes", "Kun en tydelig opplysning om at området er kameraovervåket", "Hvor lenge opptakene lagres før de automatisk slettes"],
      explanation: "Skilting om kameraovervaking skal inneholde at området er kameraovervåket, hvem som er ansvårlig for overvakingen, og kontaktinformasjon.",
    },
  ],
  "sikkerhetsfag-5": [
    {
      question: "Hvilke tre elementer utgjør branntrekanten?",
      options: ["Brennbart materiale, oksygen og varme", "Gnist, gass og metall", "Sterk varme, tett røyk og synlig lys fra flammene", "Ild, luft og brensel"],
      explanation: "Branntrekanten består av brennbart materiale (brensel), oksygen og varme (tenntemperatur). Alle tre måvære til stede for at brann skal oppsta.",
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
      question: "Hva er maksimal avstand til nærmeste nodutgang ifølge kravene?",
      options: ["30 meter", "15 meter", "50 meter", "100 meter"],
      explanation: "Maksimalt 30 meter til nærmeste utgang er kravet for romningsveier. Rømningsveiene skal alltid være åpne, merket med skilt og ha nodbelysning.",
    },
  ],
  "sikkerhetsfag-6": [
    {
      question: "Hvem har overordnet ansvar for HMS i en virksomhet?",
      options: ["Arbeidsgiver", "Verneombudet", "Arbeidsmiljøutvalget", "Tillitsvalgte"],
      explanation: "Arbeidsgiver har det overordnede ansvåret for HMS. Verneombudet og AMU har viktige roller, men det formelle ansvåret ligger hos arbeidsgiver.",
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
      question: "Hva er grensen for høyselesskade fra stoy?",
      options: ["85 dB", "60 dB", "100 dB", "70 dB"],
      explanation: "Grensen for når støy kan gi hørselsskade er 85 dB. Ved stoy over denne grensen måhorselsvern brukes.",
    },
  ],
  "sikkerhetsfag-7": [
    {
      question: "Hva er minimumsalder for å bli vekter i Norge?",
      options: ["18 år", "16 år", "20 år", "21 år"],
      explanation: "I henhold til vaktvirksomhetsloven måman være minimum 18 årfor a fa vekterlegitimation og arbeide som vekter.",
    },
    {
      question: "Hvilken lov hjemler enhvers rett til pagripelse påfersk gjerning?",
      options: ["Straffeprosessloven § 176", "Straffeloven § 17", "Straffeloven § 18", "Vaktvirksomhetsloven § 12"],
      explanation: "Straffeprosessloven § 176 gir enhver rett til a pagripe person som treffes påfersk gjerning eller påflukt fra det.",
    },
    {
      question: "Hva er forskjellen pånodrett og nodverge?",
      options: ["Nødrett redder fra fare, nodverge forsvarer mot angrep", "Nodrett gjelder for vektere, nodverge for alle", "Nødrett gjelder bare for vektere", "Nodrett er lovlig, nodverge er ulovlig"],
      explanation: "Nodrett (§ 17) gir rett til a bega ellers straffbare handlinger for a redde fra fare. Nodverge (§ 18) gir rett til a forsvare seg mot ulovlige angrep.",
    },
    {
      question: "Hva innebærer maktpyramidens prinsipp?",
      options: ["Start med minst inngripende middel og ok gradvis", "Bruk alltid maksimal makt for sikkerhet", "Grip aldri selv inn ved maktbruk", "La politiet handtere all maktbruk"],
      explanation: "Maktpyramiden innebærer a starte med minst inngripende middel (tilstedevarelse) og gradvis oke om nødvendig, fra verbal kommunikasjon til fysisk makt kun i nodverge.",
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
      explanation: "Ansvarsprinsippet innebærer at den som har ansvar i en normalsituasjon også har ansvar under en krise. Ansvåret flyttes ikke til andre.",
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
      options: ["Gjennomgang av planer og diskusjon av scenarier", "Full fysisk gjennomforing av en krise", "En full fysisk gjennomføring av et realistisk krisescenario i felt", "Test av enkeltfunksjoner som varsling"],
      explanation: "En bordovelse (diskusjonsovelse) innebærer gjennomgang av planer, diskusjon av scenarier og klargjøring av roller. Den krever lite ressurser men gir god læring.",
    },
    {
      question: "Hva skal du gjøre først ved en bombetrussel påtelefon?",
      options: ["Behold roen og hold samtalen gående", "Start umiddelbar evakuering", "Sett i gang umiddelbar full evakuering av hele bygningen", "Legg påog varsle politiet"],
      explanation: "Ved bombetrussel påtelefon skal du behold roen, holde samtalen gaende sålenge som mulig, og forsoke a fa mest mulig informasjon om bomben for du varsler politiet.",
    },
  ],
  "sikkerhetsfag-1-1": [
    {
      question: "Hvordan defineres sikkerhet i faglig sammenheng?",
      options: ["En tilstand der risikoen for uonskede hendelser er akseptabel", "At det er montert godkjente alarmsystemer på hele bygningen", "En tilstand med fullstendig fravær av enhver fare og all risiko", "At politiet til enhver tid har full kontroll over området"],
      explanation: "Sikkerhet er en tilstand der risikoen er redusert til et akseptabelt niva. Det handler ikke om null risiko, men om et forsvarlig niva.",
    },
    {
      question: "Hva er forskjellen mellom safety og security?",
      options: ["Safety gjelder utilsiktede hendelser, security gjelder tilsiktede hendelser", "Safety gjelder utelukkende brann, mens security kun gjelder tyveri", "Safety gjelder tilsiktede hendelser, security gjelder utilsiktede hendelser", "Safety gjelder tilsiktede hendelser, security gjelder utilsiktede"],
      explanation: "Safety handler om beskyttelse mot utilsiktede hendelser (ulykker, naturkatastrofer), mens security handler om beskyttelse mot tilsiktede hendelser (kriminalitet, terror, sabotasje).",
    },
    {
      question: "Hvordan uttrykkes risiko som en sammenheng mellom to faktorer?",
      options: ["Risiko = sannsynlighet x konsekvens", "Risiko = sannsynlighet + konsekvens", "Risiko = konsekvens - tiltak", "Risiko = trussel x sarbarhet x verdi"],
      explanation: "Risiko er kombinasjonen av sannsynligheten for at en uonsket hendelse inntreffer og konsekvensene dersom den inntreffer: Risiko = sannsynlighet x konsekvens.",
    },
    {
      question: "Hva beskriver trygghetsparadokset?",
      options: ["At vellykket sikkerhetsarbeid kan fore til at folk undervurderer farene", "At sikkerhetsarbeid uunngåelig blir stadig dyrere jo lenger det pågår", "At begrepene trygghet og sikkerhet i praksis alltid betyr det samme", "At folk føler seg utrygge selv når alle tiltak faktisk er på plass"],
      explanation: "Trygghetsparadokset oppstar nar sikkerhetsarbeidet er sa effektivt at det blir usynlig, slik at folk senker guarden, kutter budsjetter og slapper pa rutinene.",
    },
    {
      question: "Hvilken faktor er IKKE typisk for hva som regnes som akseptabel risiko?",
      options: ["At hendelsen aldri kan inntreffe", "Kost-nytte-vurdering av tiltak", "En kost-nytte-vurdering av aktuelle tiltak", "Bransjenormer og standarder"],
      explanation: "Akseptabel risiko bestemmes av lovkrav, bransjenormer, kost-nytte og verdier. Det er umulig a eliminere all risiko, sa et krav om at hendelsen aldri kan skje er ikke realistisk.",
    },
  ],
  "sikkerhetsfag-1-2": [
    {
      question: "Hva er minimumskravet til vekterutdanning i Norge?",
      options: ["105 timer", "50 timer", "80 timer", "200 timer"],
      explanation: "Minimumskravet til vekterutdanning i Norge er 105 timer med bade teori og praksis, regulert i vaktvirksomhetsregelverket.",
    },
    {
      question: "Hvilken myndighet har en vekter sammenlignet med politiet?",
      options: ["Vekter har ikke politimyndighet, men kan bortvise og foreta borgerpagripelse", "Vekter har i praksis samme myndighet som politiet på oppdragsstedet", "Vekter kan ilegge bøter og skrive ut forelegg ved lovbrudd", "Vekter kan fritt ransake personer som mistenkes for tyveri"],
      explanation: "En vekter har ikke politimyndighet. Vekteren kan bortvise personer fra privat omrade og pagripe noen som tas pa fersk gjerning (borgerpagripelse).",
    },
    {
      question: "Hva regulerer vaktvirksomhetsforskriften?",
      options: ["Godkjenning av vaktselskaper, utdanning, uniformering og rapportering", "Kun brannvern og rømningsveier i bygninger der vektere jobber", "Kun lønn, arbeidstid og turnusordninger for ansatte vektere", "Kun bruk av kameraovervåking og lagring av videoopptak"],
      explanation: "Vaktvirksomhetsforskriften stiller krav til godkjenning av vaktselskaper, vekterutdanning, uniformering, legitimasjon og rapportering. Politiet er tilsynsmyndighet.",
    },
    {
      question: "Hvem er tilsynsmyndighet for vaktvirksomhet i Norge?",
      options: ["Politiet", "Arbeidstilsynet", "Datatilsynet", "Direktoratet for samfunnssikkerhet"],
      explanation: "Politiet er tilsynsmyndighet og kan trekke tilbake godkjenningen til et vaktselskap ved brudd pa regelverket.",
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
      options: ["Plikt til a tie om fortrolig informasjon man far gjennom arbeidet", "Plikt til å informere media om alle hendelser som skjer på vakt", "Plikt til å dele all innhentet informasjon åpent med sine kolleger", "At vekteren aldri under noen omstendighet kan rapportere noe til politiet"],
      explanation: "Taushetsplikt betyr plikt til a tie om fortrolig informasjon man far kjennskap til gjennom arbeidet, for eksempel om kunder, hendelser og sikkerhetssystemer.",
    },
    {
      question: "Hva er yrkesetikk?",
      options: ["De moralske prinsippene og retningslinjene som styrer utovelsen av et yrke", "Lovbestemmelser som fastsetter minstelønn innenfor et yrke", "En detaljert oversikt over arbeidstider og pauser i yrket", "Reglene for hvordan man skal kle seg korrekt og opptre høflig overfor kundene"],
      explanation: "Yrkesetikk er de moralske prinsippene og retningslinjene som styrer yrkesutovelsen, blant annet respekt for menneskeverd, likebehandling, taushetsplikt og integritet.",
    },
    {
      question: "En venn ber deg slippe ham inn bakveien etter stengetid. Hva er riktig?",
      options: ["Si nei, fordi det bryter adgangskontrollrutinene og taushets/ansvarsplikten", "Be ham betale et beløp kontant for å få komme inn bakveien", "Slippe ham inn fordi han er en god venn du stoler helt på", "Slippe ham inn diskret så lenge ingen andre ser det skje"],
      explanation: "Du ma si nei. Uvedkommende skal ikke ha tilgang utenom apningstid uten godkjenning, uansett relasjon. Dette folger av adgangskontrollrutiner og ansvarsplikten.",
    },
    {
      question: "Hva innebaerer integritet i yrkesetikken?",
      options: ["A handle ærlig og konsekvent og ikke la seg bestikke", "A vaere lojal mot arbeidsgiver uansett hva som blir bedt om", "Å alltid føye seg etter kundens ønsker for å unngå klager", "Å holde all informasjon skjult for ledelsen i virksomheten"],
      explanation: "Integritet betyr a handle ærlig og konsekvent, aldri la seg bestikke, rapportere sannferdig og ta ansvar for egne feil.",
    },
    {
      question: "Hva kan brudd pa taushetsplikten i alvorlige tilfeller fore til?",
      options: ["Oppsigelse og straffeansvar", "Bare en muntlig advarsel", "En høyere lønn som kompensasjon for tabben", "Ingen konsekvenser for den ansatte"],
      explanation: "Brudd pa taushetsplikten kan fore til oppsigelse, og i alvorlige tilfeller straffeansvar.",
    },
  ],
  "sikkerhetsfag-1-4": [
    {
      question: "Hva er hovedmalet med konflikthandtering?",
      options: ["A forebygge eskalering og fremme fredelig losning", "A unnga all kontakt med folk", "Å fjerne eller stenge ute alle som er uenige med deg", "Å unngå all kontakt med folk for å slippe konflikter"],
      explanation: "Konflikthandtering er evnen til a handtere uenigheter og truende situasjoner pa en mate som forebygger eskalering og fremmer fredelig losning.",
    },
    {
      question: "Hva kjennetegner en god hendelsesrapport?",
      options: ["Den er objektiv, kronologisk og inneholder relevante fakta", "Den inneholder vekterens personlige meninger om de involverte", "Den skrives kun dersom politiet uttrykkelig ber om skriftlig dokumentasjon", "Den er kortest mulig og utelater tidspunkter og andre detaljer om hendelsen"],
      explanation: "En hendelsesrapport skal vaere objektiv, kronologisk og inneholde alle relevante fakta. Den brukes som dokumentasjon overfor oppdragsgiver, politi og forsikring.",
    },
    {
      question: "Hva bor du gjore forst nar du moeter en aggressiv, beruset person?",
      options: ["Bevare roen, holde rolig stemme og staa pa trygg avstand", "Rope hoeyt tilbake for a vise autoritet", "Ga rett bort og ta fysisk tak i personen for a fjerne vedkommende umiddelbart", "Snu ryggen til og ignorere personen"],
      explanation: "Forste steg er a bevare roen med rolig stemme og apent kroppssprak, og staa pa trygg avstand for a unnga eskalering.",
    },
    {
      question: "Hvorfor er det viktig a vise empati i konflikthandtering?",
      options: ["Det kan roe situasjonen og vise at man tar personen pa alvor", "Det gir vekteren mer makt over personen", "Det er et absolutt lovkrav i alle konfliktsituasjoner en vekter kan mote", "Det gir vekteren mer makt og kontroll over personen i en presset situasjon"],
      explanation: "A vise empati signaliserer at man tar personen pa alvor, noe som ofte demper konflikten og gjor det lettere a finne en losning.",
    },
    {
      question: "Hva er hensikten med skriftlig rapportering av en hendelse?",
      options: ["A dokumentere fakta for oppdragsgiver, politi og forsikring", "A erstatte all muntlig kommunikasjon mellom vekter og vaktsentral", "A gjore vekteren og selskapet mer kjent gjennom omtale i lokale medier", "A straffe personen som var involvert ved a gi videre bevis til domstolen"],
      explanation: "Skriftlig rapportering dokumenterer hendelsen objektivt og kronologisk, og brukes som grunnlag overfor oppdragsgiver, politi og forsikringsselskap.",
    },
  ],
  "sikkerhetsfag-1-5": [
    {
      question: "Hva er et fagbrev i sikkerhetsfag?",
      options: ["En formell yrkeskvalifikasjon etter VG1+VG2 og to ars laeretid", "En tillatelse politiet gir uten utdanning", "En tillatelse politiet gir direkte uten krav om yrkesfaglig utdanning", "Et sertifikat som kun gir adgang til a betjene kameraovervakingssystemer"],
      explanation: "Fagbrev i sikkerhetsfag oppnas gjennom yrkesfaglig utdanning (VG1+VG2) etterfulgt av to ars laeretid i bedrift, og dokumenterer profesjonell kompetanse.",
    },
    {
      question: "Hvordan har vekterrollen endret seg fra 1980 til i dag?",
      options: ["Fra analog patruljering til digital teknologi og IP-baserte systemer", "Vektere har faatt politimyndighet og kan paagripe pa lik linje med politiet", "Den er i praksis helt uforandret med samme utstyr og oppgaver som for", "Vektere har mistet all teknologisk stotte og jobber kun manuelt i dag"],
      explanation: "Pa 1980-tallet brukte vektere lommelykt, notatblokk og analoge kameraer. I dag er sikkerhetsarbeid digitalt med IP-baserte systemer, elektronisk rapportering og avansert overvaking.",
    },
    {
      question: "Hva kjennetegnet alarmsystemene pa 1980-tallet?",
      options: ["De var enkle og ga mange falske utlosninger", "De var IP-baserte og digitale", "De var teknisk helt feilfrie og loste ut kun ved reelle innbrudd og branner", "De var helt feilfrie"],
      explanation: "Eldre alarmsystemer var enkle og ga ofte mange falske utlosninger, i motsetning til dagens mer avanserte og adresserbare systemer.",
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
      options: ["En mulig uonsket handling eller hendelse som kan skade verdier vi vil beskytte", "Manglende evne til a motsta eller gjenopprette seg etter en uonsket hendelse", "Det faktiske resultatet av en hendelse malt i skade pa liv, helse og verdier", "Et uttrykk for hvor trolig det er at en bestemt uonsket hendelse inntreffer"],
      explanation: "En trussel er en mulig uonsket handling eller hendelse som kan forarsake skade. Trusler kan vaere tilsiktede (terror, sabotasje) eller utilsiktede (naturkatastrofer).",
    },
    {
      question: "Hva betyr sarbarhet?",
      options: ["Manglende evne til a motsta en hendelse eller gjenopprette etterpa", "Verdien av det som beskyttes, regnet i kroner og i betydning for driften", "Den samlede verdien av det som skal beskyttes, malt i penger og betydning", "En mulig uonsket handling eller hendelse som kan skade det vi vil beskytte"],
      explanation: "Sarbarhet er manglende evne til a motsta en uonsket hendelse eller til a gjenopprette onsket tilstand etterpa. Det er det motsatte av robusthet.",
    },
    {
      question: "Hva uttrykker formelen R = S x K?",
      options: ["At risiko er produktet av sannsynlighet og konsekvens", "At risiko er summen av sarbarhet og konsekvens", "At trusselniva ganges med verdien av objektet man onsker a beskytte", "At sannsynlighet er konsekvens delt pa risiko"],
      explanation: "Risiko (R) er kombinasjonen av sannsynlighet (S) og konsekvens (K): R = S x K. Lav sannsynlighet med hoy konsekvens kan gi samme risiko som hoy sannsynlighet med lav konsekvens.",
    },
    {
      question: "Hva er konsekvens i risikosammenheng?",
      options: ["Det mulige resultatet av en uonsket hendelse, malt i skade pa verdier", "Hvor trolig hendelsen er, uttrykt som en sannsynlighet i prosent per ar", "Trusselaktorens motiv og hensikt bak den planlagte uonskede handlingen", "Et uttrykk for hvor trolig det er at den uonskede hendelsen faktisk skjer"],
      explanation: "Konsekvens er det mulige resultatet av en hendelse, malt i skade pa liv, helse, materielle verdier, miljo, okonomi eller omdomme.",
    },
    {
      question: "Hvordan kan sannsynlighet uttrykkes i en risikoanalyse?",
      options: ["Kvantitativt (1 gang per 100 ar) eller kvalitativt (lite/meget sannsynlig)", "Bare som farger i en matrise uten noen tallfesting eller ordvurdering bak", "Kun i kroner og ore som forventet okonomisk tap ved den aktuelle hendelsen", "Utelukkende som et enkelt ja eller nei pa om hendelsen kan tenkes a skje"],
      explanation: "Sannsynlighet kan uttrykkes kvantitativt (for eksempel 1 gang per 100 ar) eller kvalitativt (lite sannsynlig, sannsynlig, meget sannsynlig), ofte pa en skala fra 1 til 5.",
    },
  ],
  "sikkerhetsfag-2-2": [
    {
      question: "Hva er en risikomatrise?",
      options: ["Et verktoy som plasserer hendelser etter sannsynlighet og konsekvens i fargesoner", "Et detaljert budsjett som fordeler midlene til ulike sikkerhetstiltak i aret", "En ferdig plan for evakuering av bygget med romsler og motepunkter angitt", "En fullstendig personalliste over alle ansatte med kontaktinfo og roller"],
      explanation: "En risikomatrise visualiserer risiko ved a plassere hendelser i et rutenett med sannsynlighet pa en akse og konsekvens pa den andre, ofte med gronn, gul og rod sone.",
    },
    {
      question: "Hva visualiserer en bow-tie-analyse?",
      options: ["Arsaker og forebyggende barrierer til venstre, konsekvenser og barrierer til hoyre", "Antall ansatte fordelt per avdeling og deres roller i beredskapsorganisasjonen", "Utelukkende de okonomiske tapene en uonsket hendelse kan pafore virksomheten", "Bygningens planlosning med nodutganger, brannceller og plassering av utstyr"],
      explanation: "Bow-tie-analysen har den uonskede hendelsen i sentrum, med arsaker og forebyggende barrierer til venstre og konsekvenser med konsekvensreduserende barrierer til hoyre.",
    },
    {
      question: "Hva brukes HAZOP-metoden til?",
      options: ["A identifisere farer og driftsproblemer i prosessanlegg ved hjelp av ledeord", "A planlegge ferieavvikling og bemanning gjennom aret ved anlegget i drift", "A beregne lonn og godtgjorelse til alle ansatte som jobber i prosessanlegget til daglig", "A male kundetilfredshet og omdomme etter leveranser fra prosessanlegget"],
      explanation: "HAZOP (Hazard and Operability Study) bruker ledeord (mer, mindre, ingen) kombinert med prosessparametere for a avdekke avvik i tekniske systemer og prosessanlegg.",
    },
    {
      question: "En hendelse far sannsynlighet 3 og konsekvens 4. Hva blir risikoverdien?",
      options: ["12", "7", "1", "34"],
      explanation: "Risiko = sannsynlighet x konsekvens = 3 x 4 = 12. Dette plasseres typisk i gul sone der tiltak er nodvendig.",
    },
    {
      question: "Hva er en risikoanalyse?",
      options: ["En systematisk framgangsmate for a beskrive og beregne risiko", "En liste over samtlige forsikringer virksomheten har tegnet hos selskapet", "En samlet oversikt over alle forsikringsavtaler virksomheten har tegnet", "En detaljert plan for markedsforing av virksomhetens sikkerhetstjenester"],
      explanation: "Risikoanalyse er en systematisk metode for a identifisere uonskede hendelser, kartlegge arsaker og konsekvenser, og vurdere sannsynlighet og konsekvensgrad.",
    },
  ],
  "sikkerhetsfag-2-3": [
    {
      question: "Hva er en sarbarhetsvurdering?",
      options: ["En systematisk prosess for a identifisere og vurdere svakheter i et system", "En bemanningsplan for nyansettelser og opplaering i sikkerhetsavdelingen", "En fullstendig liste over alle tenkelige trusler som finnes i verden i dag", "En beregning av forventet fortjeneste ved a investere i sikringstiltak"],
      explanation: "En sarbarhetsvurdering kartlegger fysiske, tekniske, organisatoriske og menneskelige svakheter, hvor alvorlige de er, og hva som kan gjores for a redusere dem.",
    },
    {
      question: "Hva er kritisk infrastruktur?",
      options: ["Anlegg og systemer som er nodvendige for samfunnets grunnleggende funksjoner", "Utelukkende militaere anlegg og forsvarets installasjoner i landet ellers", "Reklameskilt og informasjonstavler langs veiene som kan skades av vaer", "Alle private boliger og fritidshytter som kan vaere sarbare for innbrudd og brann"],
      explanation: "Kritisk infrastruktur er anlegg og systemer som er nodvendige for samfunnets grunnleggende behov. Bortfall kan true liv, helse og samfunnsfunksjoner.",
    },
    {
      question: "Hva er en scenarioanalyse?",
      options: ["En metode der man utvikler detaljerte tenkte hendelsesforlop for a vurdere sarbarhet", "En strukturert oversikt over historiske hendelser som allerede har skjedd", "En fullstendig liste over godkjente slokkemidler og bruk av dem ved brann", "En metode for a beregne lonn og bemanning ut fra virksomhetens risikoniva"],
      explanation: "Scenarioanalyse utvikler detaljerte beskrivelser av tenkte hendelsesforlop. Den tvinger deltakerne til a tenke gjennom konkrete situasjoner og avdekker skjulte svakheter.",
    },
    {
      question: "Hvilke typer svakheter ser en sarbarhetsvurdering pa?",
      options: ["Fysiske, tekniske, organisatoriske og menneskelige", "Bare okonomiske svakheter i virksomhetens arsbudsjett", "Bare fysiske svakheter som lasing, gjerder og sikring av dorer og vinduer", "Kun juridiske svakheter i avtaler og manglende samsvar med gjeldende lover"],
      explanation: "En sarbarhetsvurdering ser pa bade fysiske, tekniske, organisatoriske og menneskelige svakheter.",
    },
    {
      question: "Hvorfor er et langvarig stromrudd et godt eksempel pa sarbarhet?",
      options: ["Fordi mange samfunnsfunksjoner er avhengige av strom og rammes samtidig", "Fordi det aldri far konsekvenser", "Fordi et stromrudd verken kan forebygges eller motvirkes med noe tiltak", "Fordi et stromrudd bare rammer belysning og ikke andre samfunnsfunksjoner"],
      explanation: "Et langvarig stromrudd viser hvor avhengig samfunnet er av strom: oppvarming, mobilnett, vann og andre funksjoner kan svikte samtidig, noe som blottlegger sarbarheter.",
    },
  ],
  "sikkerhetsfag-2-4": [
    {
      question: "Hva er forebyggende tiltak?",
      options: ["Tiltak som reduserer sannsynligheten for at en hendelse inntreffer", "Tiltak som bare kan brukes etter at en uonsket hendelse allerede har skjedd", "Tiltak som kun handler om a tegne forsikring for a dekke okonomiske tap", "Tiltak som oker konsekvensene og skadeomfanget nar en hendelse inntreffer"],
      explanation: "Forebyggende tiltak reduserer sannsynligheten for at en uonsket hendelse skjer, for eksempel adgangskontroll, opplaering og vedlikehold.",
    },
    {
      question: "Hva er konsekvensreduserende tiltak?",
      options: ["Tiltak som begrenser skadene nar en hendelse har inntruffet", "Tiltak som hindrer at hendelsen skjer", "Tiltak som hindrer at hendelsen i det hele tatt far anledning til a skje", "Tiltak som oker sannsynligheten for at den uonskede hendelsen inntreffer"],
      explanation: "Konsekvensreduserende tiltak begrenser skadene etter at en hendelse har skjedd, for eksempel beredskapsplaner, sprinkleranlegg, forstehjelp og forsikring.",
    },
    {
      question: "Hva er en barriere i sikkerhetssammenheng?",
      options: ["Et teknisk, operasjonelt eller organisatorisk tiltak som reduserer risiko", "Et fysisk gjerde og ingenting annet", "En okonomisk gevinst virksomheten oppnar ved a investere i sikringsutstyr", "En bestemt type forsikringsavtale som dekker tap etter uonskede hendelser"],
      explanation: "En barriere er et teknisk (branndor), operasjonelt (prosedyrer) eller organisatorisk (tilsyn) tiltak som reduserer muligheten for eller konsekvensene av uonskede hendelser.",
    },
    {
      question: "Hvorfor er forebyggende tiltak ofte mest kostnadseffektive?",
      options: ["Fordi de forhindrer at hendelsen skjer i det hele tatt", "Fordi de erstatter all forsikring", "Fordi de fullt ut erstatter behovet for a tegne forsikring mot skader", "Fordi de oker konsekvensene og gjor skadene storre"],
      explanation: "Forebyggende tiltak er ofte mest kostnadseffektive fordi de hindrer hendelsen i a skje, slik at man unngar bade direkte skader og folgeskader.",
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
      options: ["Alle koordinerte aktiviteter for a lede og kontrollere en organisasjon med hensyn til risiko", "A bevisst ignorere risiko fordi den likevel ikke lar seg kontrollere fullt ut", "Bare a skrive rapporter i etterkant av hendelser uten videre oppfolging", "Utelukkende a kjope forsikringer som skal dekke de okonomiske tapene etter uonskede hendelser"],
      explanation: "Risikostyring omfatter rammeverk, risikovurdering, risikohaandtering, overvaking og gjennomgang. Malet er a holde risikoen pa et akseptabelt niva.",
    },
    {
      question: "Hvem er risikoeier?",
      options: ["Den som har myndighet og ansvar for a haandtere en bestemt risiko", "Den som forarsaker hendelsen", "Den som forarsaker den uonskede hendelsen gjennom handling eller uaktsomhet", "Alle ansatte samlet som deler ansvaret for a handtere risikoen i fellesskap"],
      explanation: "Risikoeier er personen eller enheten med myndighet og ansvar for a haandtere en bestemt risiko, ofte en leder for det omradet der risikoen oppstaar.",
    },
    {
      question: "Hva er akseptkriterier?",
      options: ["Forhaandsdefinerte kriterier for hvilke risikoer organisasjonen er villig til a akseptere", "Krav til uniform og synlig legitimasjon for personell i sikringstjeneste", "Krav til de ansattes utdanning og kompetanse for a kunne fa jobbe med sikkerhet i virksomheten", "Regler for lonn og godtgjorelse til dem som utforer risikovurderingene"],
      explanation: "Akseptkriterier er forhaandsdefinerte kriterier fastsatt av ledelsen som angir hvilke risikoer organisasjonen aksepterer, basert pa lover, verdier og okonomi.",
    },
    {
      question: "Hva er malet med risikostyring?",
      options: ["A holde risikoen pa et niva som er akseptabelt for organisasjonen", "A eliminere all risiko fullstendig", "A ta pa seg storst mulig risiko for a kunne oppna hoyest mulig gevinst og avkastning for virksomheten", "A oke risikoen bevisst for a kunne oppna en storre gevinst for eierne"],
      explanation: "Malet med risikostyring er a sikre at risikoen holdes pa et niva som er akseptabelt for organisasjonen, gjennom systematisk vurdering og tiltak.",
    },
    {
      question: "Hvem fastsetter normalt akseptkriteriene i en virksomhet?",
      options: ["Ledelsen / styret", "Den enkelte vekter", "Kundene og leverandorene", "Forsikringsselskapet alene"],
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
      question: "Hva er hovedmalet med CPTED?",
      options: ["A gjore det vanskeligere a begaa lovbrudd og lettere a oppdage uonsket atferd", "A bygge stadig hoyere murer og kraftigere gjerder rundt hele det sikrede omradet", "A installere flest mulig alarmer og kameraer slik at politiet raskt kan gripe inn nar noe har skjedd", "A erstatte all fysisk sikring med et stort antall vektere som patruljerer omradet gjennom hele dognet"],
      explanation: "CPTED soker a redusere muligheter for kriminalitet, oke oppdagelsesrisikoen og styrke trygghetsfolelsen gjennom hvordan omgivelsene utformes.",
    },
    {
      question: "Hva er naturlig overvaking i CPTED?",
      options: ["Utforming som gjor at folk naturlig kan se og bli sett", "Et nettverk av skjulte kameraer", "Politipatruljer som gaar runder i omradet dognet rundt for a avdekke uonsket atferd tidlig", "Politipatruljer dognet rundt"],
      explanation: "Naturlig overvaking er utforming - god belysning, oversiktlige omrader, vindusflater - som gjor at mennesker naturlig kan se og bli sett, og dermed oker oppdagelsesrisikoen.",
    },
    {
      question: "Hvilket tiltak styrker naturlig overvaking i et boligomrade?",
      options: ["Bedre belysning og beskjaering av hoye busker som blokkerer sikten", "Hoyere gjerder som blokkerer all innsyn", "Sette opp hoyere gjerder og tette skjermvegger som blokkerer all innsyn mot boligene fra utsiden", "Slokke all utebelysning om natten slik at eventuelle inntrengere ikke kan orientere seg i omradet"],
      explanation: "Bedre belysning og fjerning av hoye busker som blokkerer sikten oker naturlig overvaking, slik at uonsket atferd lettere oppdages.",
    },
    {
      question: "Hva er hensikten med naturlig tilgangskontroll i CPTED?",
      options: ["A lede bevegelse og markere grenser mellom offentlige og private soner", "A stenge samtlige innganger permanent slik at ingen kan passere gjennom dem", "A ansette dorvakter ved samtlige innganger slik at de fysisk kan avvise personer uten aerend", "A overvake alle som ferdes i omradet med kamera slik at bevegelsene deres kan spores i ettertid"],
      explanation: "Naturlig tilgangskontroll bruker design som stier, lave gjerder og soneinndeling for a lede bevegelse og tydeliggjore hvor folk hører hjemme, noe som reduserer mulighet for kriminalitet.",
    },
  ],
  "sikkerhetsfag-3-2": [
    {
      question: "Hva omfatter fysisk sikring?",
      options: ["Materielle tiltak som hindrer, forsinker eller oppdager uautorisert tilgang", "Bare opplaering av de ansatte i rutiner og prosedyrer for adgang til bygninger", "Utelukkende elektroniske alarmer og sensorer som varsler vaktsentralen nar noen forsoker a ta seg inn", "Utelukkende forsikringsavtaler som dekker det okonomiske tapet dersom et innbrudd eller en skade skjer"],
      explanation: "Fysisk sikring omfatter gjerder, murer, porter, laser, dorer og andre konstruksjoner som utgjor fysiske hindre for inntrengere.",
    },
    {
      question: "Hva er perimetersikring?",
      options: ["Sikringstiltak langs yttergrensen av et omrade", "Sikring av sentrale serverrom", "Sikring av de sentrale serverrommene", "Sikring av ansattes passord"],
      explanation: "Perimetersikring er tiltak langs yttergrensen av en eiendom, som gjerder, murer, porter og bommer, for a kontrollere adgang og oppdage forsok pa inntrenging.",
    },
    {
      question: "Hva er ideen bak forsvar i dybden (lagdelt sikring)?",
      options: ["Flere lag med barrierer slik at en inntrenger ma forsere flere hindre", "Alle barrierer plasseres samme sted", "At elektronisk overvaking alene erstatter fysiske barrierer", "At alle barrierene plasseres samlet pa samme sted slik at de til sammen danner ett kraftig sikringspunkt"],
      explanation: "Forsvar i dybden bruker flere lag med sikring (perimeter, bygningsskall, indre soner) slik at en inntrenger ma forsere flere barrierer, noe som forsinker og oker oppdagelsessjansen.",
    },
    {
      question: "Hvilket tiltak hører til perimeterlaget i et sikringsopplegg?",
      options: ["Gjerde med port og kortleser for kjoretoy", "Adgangskort til kontorlandskapet", "En forsterket staaldor med boltelaas", "Stalldor til selve hvelvet"],
      explanation: "Perimeterlaget er yttergrensen, for eksempel gjerde med piggtrad, motorisert port og kortleser/nummerplateleser for kjoretoy.",
    },
    {
      question: "Hvorfor brukes herdet glass og staaldorer i bygningsskallet?",
      options: ["For a forsinke og motstaa innbruddsforsok", "For a se penere ut", "For at bygningen skal se penere og mer forseggjort ut for de som passerer utenfor", "For a oke utsikten"],
      explanation: "Herdet glass og staaldorer med gode lasesystemer gjor bygningsskallet motstandsdyktig, slik at innbruddsforsok forsinkes og oppdages for inntrengeren kommer inn.",
    },
  ],
  "sikkerhetsfag-3-3": [
    {
      question: "Hva bestar et alarmsystem av?",
      options: ["Detektorer, en sentral og varslingsenheter", "Bare en lasebrikke", "Utelukkende en elektronisk laasebrikke", "Bare en hoyttaler"],
      explanation: "Et alarmsystem bestar av detektorer som registrerer hendelser, en sentral som behandler signalene, og varslingsenheter som gir alarm til riktige mottakere.",
    },
    {
      question: "Hva er en falsk alarm?",
      options: ["En alarm som utloses uten at det foreligger en reell trussel", "En alarm som aldri loser ut", "En alarm som er koblet direkte til politiet og som utloser en utrykning hver eneste gang den gaar", "En alarm som er defekt og som derfor aldri loser ut selv om det faktisk foreligger en reell trussel"],
      explanation: "En falsk alarm utloses uten reell trussel, ofte pa grunn av dyr, vaer eller tekniske feil. Mange falske alarmer undergraver tilliten til systemet.",
    },
    {
      question: "Hvorfor er falske alarmer et problem?",
      options: ["De undergraver tilliten slik at reelle alarmer ikke tas pa alvor", "De gjor systemet billigere fordi det da trengs faerre detektorer i bygget", "De oker den samlede sikkerheten fordi systemet stadig testes og de ansatte holdes skjerpet", "De gjor sikringssystemet billigere fordi det da ikke trengs like mange vektere og kontroller"],
      explanation: "Falske alarmer er et betydelig problem fordi de undergraver tilliten til systemet og kan fore til at reelle alarmer ikke tas pa alvor.",
    },
    {
      question: "Hvilken detektor egner seg for a oppdage at en dor apnes?",
      options: ["Magnetkontakt", "Glassbruddetektor", "Roykdetektor i taket", "Temperaturfoler"],
      explanation: "Magnetkontakter monteres pa dorer og vinduer og registrerer nar de apnes ved at magnetfeltet brytes.",
    },
    {
      question: "Hva registrerer en PIR-detektor?",
      options: ["Bevegelse via varmestraaling fra personer", "Glass som knuses", "Lyden av glass som knuses nar en rute blir slaatt inn ved et innbruddsforsok i omradet", "At en dor lases"],
      explanation: "En PIR-detektor (passiv infrarod) registrerer bevegelse ved a oppfatte endringer i varmestraaling fra personer som beveger seg i omradet.",
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
      options: ["Behandlingsgrunnlag, interesseavveining, tydelig skilting og begrenset lagringstid", "At man kan overvake alle omraader helt uten begrensning i tid, omfang eller lagring", "At alle opptak lagres permanent i arkivet slik at de kan hentes frem igjen dersom det skulle bli behov", "At virksomheten kan overvake alle omrader uten begrensning saa lenge formaalet er a hindre kriminalitet"],
      explanation: "GDPR krever blant annet et behandlingsgrunnlag (ofte berettiget interesse), en interesseavveining, tydelig skilting og at opptak ikke lagres lenger enn nodvendig.",
    },
    {
      question: "Hva er forskjellen mellom CCTV og kringkasting?",
      options: ["CCTV er lukket og kun for autoriserte; kringkasting er apen sending", "CCTV sendes til hele befolkningen", "Det er egentlig det samme systemet, bare med to ulike navn som brukes om hverandre i bransjen", "CCTV sender signalet aapent ut til hele befolkningen, mens kringkasting er forbeholdt autoriserte"],
      explanation: "CCTV er et lukket system der videosignalet kun er tilgjengelig for et begrenset antall autoriserte brukere, i motsetning til kringkasting (apen sending).",
    },
    {
      question: "Hva bor gjores forst nar en butikk vil installere kameraovervaking?",
      options: ["Fastsette og dokumentere formaalet med overvakingen", "Lagre opptak sa lenge som mulig", "Skjule alle kameraene godt for kunder og ansatte", "Overvake ansattes pauserom"],
      explanation: "Forst ma formaalet (for eksempel a forebygge butikktyveri) fastsettes og dokumenteres, fordi formaalet styrer hva som er lovlig a overvake.",
    },
    {
      question: "Hvorfor brukes faste kameraer over kassene?",
      options: ["For a dokumentere transaksjoner", "For a overvake gata utenfor", "For a overvake gata og fortauet utenfor butikken", "For a male temperaturen"],
      explanation: "Faste kameraer over kassene dokumenterer transaksjoner og kan brukes som bevis ved svinn, ran eller uenighet om betaling.",
    },
  ],
  "sikkerhetsfag-3-5": [
    {
      question: "Hva er sikkerhetskultur?",
      options: ["Felles verdier, holdninger, normer og atferd som pavirker hvordan sikkerhet prioriteres", "En type forsikring", "En bestemt type forsikring som dekker tap virksomheten far ved tyveri, innbrudd eller skade", "Et avansert alarmsystem som varsler bade ansatte og vaktsentral nar det oppstaar en hendelse"],
      explanation: "Sikkerhetskultur er de felles verdiene, holdningene, normene og atferdene i en organisasjon som pavirker hvordan sikkerhetssporsmal behandles og prioriteres.",
    },
    {
      question: "Hva er avviksrapportering?",
      options: ["En systematisk prosess for a registrere og folge opp hendelser og nestenulykker", "En liste over ansattes ferier", "En samlet oversikt over uniformer og verneutstyr slik at man vet hvem som har faatt utdelt hva", "En oppdatert liste over de ansattes ferieonsker og planlagte fravaer gjennom aaret i virksomheten"],
      explanation: "Avviksrapportering registrerer hendelser, nestenulykker og brudd pa rutiner, slik at man kan laere av dem og forebygge fremtidige hendelser.",
    },
    {
      question: "Hva forutsetter en god rapporteringskultur?",
      options: ["At det er trygt a rapportere uten frykt for negative konsekvenser", "At bare ledelsen far rapportere", "At avvik og hendelser holdes hemmelige internt", "At den som rapporterer straffes"],
      explanation: "En god rapporteringskultur forutsetter at det er trygt a rapportere uten frykt for negative konsekvenser, slik at man far frem informasjon man kan laere av.",
    },
    {
      question: "Hvorfor regnes menneskene som den viktigste faktoren i sikkerhetsarbeid?",
      options: ["Fordi holdninger og atferd avgjor om rutiner og systemer faktisk virker", "Fordi teknologi er uten betydning", "Fordi lover og regler ikke gjelder for de ansatte selv, men bare for utenforstaaende og besokende", "Fordi mennesker som er godt opplaert i praksis aldri gjor feil"],
      explanation: "Selv de beste systemene svikter hvis menneskene ikke folger dem. Holdninger, atferd og en god sikkerhetskultur avgjor om sikkerhetsarbeidet faktisk fungerer.",
    },
    {
      question: "Hva er et viktig forste steg for a forbedre sikkerhetskulturen?",
      options: ["Tydelig ledelsesforankring der ledere gar foran som gode eksempler", "A skjule hendelser for ansatte", "A skjule uonskede hendelser for de ovrige ansatte slik at de ikke mister troen paa sikkerhetsarbeidet", "A fjerne all opplaering slik at ansatte laerer av egne feil"],
      explanation: "Ledelsesforankring er sentralt: nar ledelsen tydelig prioriterer sikkerhet og selv folger rutinene, pavirker det holdningene og atferden i hele organisasjonen.",
    },
  ],
  "sikkerhetsfag-4-1": [
    {
      question: "Hva er adgangskontroll?",
      options: ["Tiltak og systemer som begrenser og styrer tilgang til omrader eller informasjon", "Et brannvarslingssystem med detektorer, sirener og direkte varsling til brannvesenet", "En type forsikring som gir okonomisk dekning dersom uvedkommende tar seg inn og forarsaker skade", "Et kameraopptak som dokumenterer hvem som har beveget seg inn og ut av bygningens ulike omraader"],
      explanation: "Adgangskontroll er tiltak og systemer som sikrer at kun autoriserte personer far adgang til omrader de har rett til a vaere i.",
    },
    {
      question: "Hva innebaerer tofaktorautentisering?",
      options: ["A bevise identitet med to ulike faktorer, for eksempel kort og PIN", "A vise legitimasjon to ganger", "A bruke to helt forskjellige adgangskort etter hverandre for a fa tilgang til det sikrede omraadet", "A vise frem gyldig legitimasjon to ganger til to ulike vakter for a bekrefte at man har rett adgang"],
      explanation: "Tofaktorautentisering kombinerer to ulike faktorer: noe du har (kort), noe du vet (PIN) eller noe du er (fingeravtrykk). Det gir hoyere sikkerhet enn en enkelt faktor.",
    },
    {
      question: "Hva er hensikten med soneinndeling?",
      options: ["A gradere tilgang slik at sensitive omrader krever hoyere autorisasjon", "A gjore alle omrader apne for alle", "A fjerne all form for adgangskontroll slik at bade ansatte og besokende kan bevege seg helt fritt", "A samle alle ansatte og besokende i ett stort felles rom"],
      explanation: "Soneinndeling deler bygget i soner med ulik tilgangskrav (offentlig, kontrollert, begrenset), slik at sensitive omrader krever hoyere niva av autentisering.",
    },
    {
      question: "Hvilke tre faktortyper kan brukes i autentisering?",
      options: ["Noe du har, noe du vet og noe du er", "Noe du ser, hører og lukter", "Tidspunkt, sted og vaer", "Lonn, alder og stilling"],
      explanation: "De tre faktortypene er: noe du har (kort, brikke), noe du vet (PIN, passord) og noe du er (fingeravtrykk, iris).",
    },
    {
      question: "Hvilken sone bor ha strengest adgangskontroll pa et sykehus?",
      options: ["Operasjonsstuer (begrenset sone)", "Hovedinngangen", "Ventearealet der paarorende oppholder seg", "Hovedinngangen der alle passerer inn i bygget"],
      explanation: "Operasjonsstuer er en begrenset sone med sensitive aktiviteter og bor ha strengest adgangskontroll, for eksempel tofaktorautentisering.",
    },
  ],
  "sikkerhetsfag-4-2": [
    {
      question: "Hva er besokshandtering?",
      options: ["Rutiner for a motta, registrere, folge opp og lose ut besokende", "En forsikring for besokende", "En automatisk alarmordning som varsler resepsjonen hver gang en dor apnes i bygget", "Et sett brannvernrutiner for gjester og besokende"],
      explanation: "Besokshandtering er rutinene en virksomhet har for a motta, registrere, folge opp og lose ut besokende, slik at alle besok er planlagt og kontrollert.",
    },
    {
      question: "Hva er hovedmalet med god besokshandtering?",
      options: ["A sikre at alle besok er planlagt, identifisert og innenfor autoriserte omrader", "A spare lonnsutgifter i resepsjonen ved a ha faerre ansatte paa vakt i lopet av dagen", "A overvake de ansattes bevegelser og arbeidstid gjennom besokssystemets registreringer", "A redusere lonnsutgiftene i resepsjonen ved at besok registrerer seg helt uten bemanning"],
      explanation: "Malet er a sikre at alle besok er planlagt, at besokende er identifisert, og at de kun oppholder seg i autoriserte omrader.",
    },
    {
      question: "Hvorfor brukes forhaandsregistrering av besokende?",
      options: ["Slik at besoket er planlagt og besokende er identifisert pa forhaand", "For a hindre at eksterne besokende i det hele tatt far komme inn i bygget", "For a gjore besoket mer kostbart slik at faerre eksterne velger a komme til virksomheten", "For a slippe a rapportere og loggfore besoket slik at ingen spor blir liggende i systemet"],
      explanation: "Forhaandsregistrering gjor at besoket er planlagt og identiteten kjent for ankomst, noe som styrker bade sikkerhet og effektivitet i mottaket.",
    },
    {
      question: "Hvorfor bor et besokskort gi begrenset tilgang?",
      options: ["Slik at besokende kun far adgang til de omradene de skal til", "Slik at de kan ga overalt", "For a gjore selve besokskortet dyrere a produsere slik at faerre kort kommer pa avveie", "For a slippe a sette opp skilting og merking av soner"],
      explanation: "Et besokskort bor gi tilgang kun til relevante omrader, slik at besokende ikke kommer inn i sensitive soner de ikke har aerend i.",
    },
    {
      question: "Hva er en god rutine ved ankomst for besokende til et sensitivt selskap?",
      options: ["Fremvise legitimasjon og fa et besokskort med begrenset tilgang", "Hente eget adgangskort fra en hylle", "Hente sitt eget adgangskort fra en apen hylle i resepsjonen og bruke det uten registrering", "Fa fri og ubegrenset adgang til hele bygningen"],
      explanation: "Ved ankomst bor besokende identifiseres med legitimasjon og fa et besokskort som gir begrenset, sporbar tilgang til relevante omrader.",
    },
  ],
  "sikkerhetsfag-4-3": [
    {
      question: "Hva er rondering?",
      options: ["En systematisk kontrollrunde etter en fastsatt plan", "En forsikringsordning", "Et automatisk varslingssystem med alarm", "En brannovelse"],
      explanation: "Rondering er en systematisk kontrollrunde der en sikkerhetsmedarbeider gjennomgar et definert omrade etter en fastsatt plan for a oppdage avvik.",
    },
    {
      question: "Hva er hovedformaalet med rondering?",
      options: ["A oppdage avvik, forebygge hendelser og sikre at alt er i orden", "A registrere ansattes pauser", "A registrere de ansattes pauser og arbeidstid gjennom passeringene ved hvert sjekkpunkt", "A gi vekteren jevnlig fysisk trening"],
      explanation: "Formaalet med rondering er a oppdage avvik, forebygge uonskede hendelser og sikre at alt er i orden langs faste sjekkpunkter.",
    },
    {
      question: "Hva bestar et elektronisk ronderingssystem av?",
      options: ["Ronderingsbrikker ved sjekkpunktene og en handholdt enhet for registrering", "Bare en helt vanlig mobiltelefon uten noen form for app installert paa forhaand", "Utelukkende et overvakingskamera som filmer sjekkpunktene og lagrer opptaket fortlopende", "Utelukkende en sentral alarmsentral som mottar signaler fra faste detektorer i bygningen"],
      explanation: "Et elektronisk ronderingssystem har brikker (NFC/RFID) ved sjekkpunktene og en handholdt enhet vekteren bruker for a registrere at hvert punkt er kontrollert.",
    },
    {
      question: "Hvorfor logges ronderingsdata elektronisk?",
      options: ["For at oppdragsgiver kan kontrollere at rundene faktisk er gjennomfort", "For a hindre vekteren i a jobbe", "For a oke stromforbruket i bygget siden hvert sjekkpunkt trekker mye energi ved avlesning", "For a hindre vekteren i a jobbe effektivt fordi registreringen tar mye tid ved hvert punkt"],
      explanation: "Dataene fra ronderingsbrikkene logges sentralt slik at oppdragsgiver kan dokumentere og kontrollere at sjekkpunktene faktisk er besokt til riktig tid.",
    },
    {
      question: "Hva bor en vekter se etter under en nattrondering ved et lager?",
      options: ["Spor av uvedkommende, ulaste porter og tegn pa innbruddsforsok", "Antall biler pa parkeringen", "Utelukkende om utelyset er tent", "Antall biler som star parkert pa omradet for a beregne hvor mange ansatte som er pa jobb"],
      explanation: "Under rondering kontrolleres gjerder og porter, og vekteren ser etter spor av uvedkommende og tegn pa innbruddsforsok ved sjekkpunktene.",
    },
  ],
  "sikkerhetsfag-4-4": [
    {
      question: "Hva er mottakskontroll?",
      options: ["Prosedyrer ved mottak av personer, varer, post og utstyr", "Kontroll av ansattes arbeidstid", "Et sett brannvernrutiner for varelageret", "Kontroll av kameraopptak"],
      explanation: "Mottakskontroll er prosedyrene som gjennomfores ved mottak av personer, varer, post og utstyr, for a sikre at alt som kommer inn er autorisert og trygt.",
    },
    {
      question: "Hva er malet med mottakskontroll?",
      options: ["A sikre at alt som kommer inn er autorisert, trygt og korrekt", "A hindre alle leveranser", "A overvake naboene og deres eiendommer gjennom kameraene som er montert ved varemottaket", "A hindre at det kommer leveranser inn i bygget"],
      explanation: "Malet er a sikre at alt som kommer inn er autorisert, trygt og korrekt, og at ingenting uonsket passerer gjennom mottaket.",
    },
    {
      question: "Hva bor kontrolleres nar en leverandor ankommer varemottaket?",
      options: ["Legitimasjon og arbeidsordre/leveranseinformasjon", "Leverandorens private telefon", "Hvilken farge og modell varebilen har", "Bare leverandorens lonn"],
      explanation: "Ved varemottak kontrolleres leverandorens legitimasjon og arbeidsordre/leveranse, slik at bare planlagte og autoriserte leveranser slipper inn.",
    },
    {
      question: "Hvorfor bor et sykehus ha et dedikert mottaksomrade?",
      options: ["For a kontrollere og handtere leveranser trygt og adskilt fra sensitive omrader", "For a gjore leveransene dyrere", "For a kunne unnga a motta varer utenfra slik at sykehuset blir mest mulig selvforsynt selv", "For a gjore hver enkelt leveranse dyrere slik at antallet eksterne leverandorer holdes lavt"],
      explanation: "Et dedikert mottaksomrade med egen rampe og kontrollsone gjor at leveranser kan kontrolleres trygt og holdes adskilt fra sensitive omrader i bygget.",
    },
    {
      question: "Hva er en risikofaktor knyttet til posthandtering?",
      options: ["Mistenkelige forsendelser kan inneholde farlige stoffer eller gjenstander", "Post er alltid helt ufarlig", "Post og forsendelser lar seg ikke kontrollere pa forhand og ma apnes for a kunne vurderes", "Innkommende post regnes alltid som helt ufarlig og trenger derfor ingen kontroll ved mottak"],
      explanation: "Posthandtering innebaerer en risiko fordi mistenkelige forsendelser kan inneholde farlige stoffer eller gjenstander; derfor inngar postkontroll i mottakskontrollen.",
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
      options: ["Det rettslige grunnlaget for a behandle personopplysninger", "En forsikringsavtale", "Et automatisk varslingssystem som utloser alarm nar personopplysninger behandles ulovlig", "En forsikringsavtale som daekker virksomhetens tap dersom personopplysninger kommer pa avveie"],
      explanation: "Et behandlingsgrunnlag er det rettslige grunnlaget for a behandle personopplysninger. Etter GDPR finnes seks mulige grunnlag, blant annet samtykke og berettiget interesse.",
    },
    {
      question: "Hvilket behandlingsgrunnlag er vanligst for kameraovervaking i sikkerhetsarbeid?",
      options: ["Berettiget interesse", "Samtykke fra alle forbipasserende", "Vitale interesser", "Allmenhetens interesse"],
      explanation: "For overvaking i sikkerhetsarbeid er berettiget interesse (beskyttelse av eiendom) det vanligste grunnlaget, ofte sammen med en dokumentert interesseavveining.",
    },
    {
      question: "Hva ma gjores for at kameraovervaking skal vaere lovlig?",
      options: ["Dokumentere formaal, gjore interesseavveining og sette opp tydelig skilting", "Lagre alle opptakene i ubegrenset tid uten a informere dem som faktisk blir filmet", "Skjule alle kameraene helt slik at ingen legger merke til at overvakingen faktisk foregar", "Dele opptakene fritt med alle som ber om innsyn slik at overvakingen blir mest mulig apen"],
      explanation: "Lovlig kameraovervaking krever dokumentert formaal, en interesseavveining mellom sikkerhetsbehov og personvern, tydelig skilting og begrenset lagringstid.",
    },
    {
      question: "Hvilken etat forer tilsyn med behandling av personopplysninger i Norge?",
      options: ["Datatilsynet", "Politiet", "Arbeidstilsynet", "Brannvesenet"],
      explanation: "Datatilsynet er tilsynsmyndighet for personvern og behandling av personopplysninger i Norge.",
    },
  ],
  "sikkerhetsfag-5-1": [
    {
      question: "Hvilke tre forutsetninger ma vaere til stede for brann ifolge branntrekanten?",
      options: ["Brennbart stoff, oksygen og varme", "Trykk, gass og metall", "Hoyt trykk, brennbar gass og oppvarmet metall som utloser antennelse i lukkede rom", "Vann, vind og kulde"],
      explanation: "Branntrekanten viser at brann krever brennbart stoff, oksygen og varme (tennenergi). Fjernes en av sidene, slokker brannen.",
    },
    {
      question: "Hva skjer ved overtenning (flashover)?",
      options: ["Alle brennbare overflater i et rom antennes nesten samtidig", "Brannen slokker av seg selv", "Temperaturen i rommet synker raskt fordi flammene sprer varmen jevnt utover alle flater", "Brannen slokker gradvis av seg selv fordi det brennbare materialet raskt brukes helt opp"],
      explanation: "Overtenning er punktet der alle brennbare overflater antennes samtidig og temperaturen stiger bratt til 500-600 grader. Rommet blir umulig a oppholde seg i.",
    },
    {
      question: "Hvorfor slokker et stearinlys nar man setter et glass over det?",
      options: ["Oksygenet brukes opp, og en av branntrekantens sider fjernes", "Glasset tilforer mer brennbart stoff til flammen mens det star der", "Det blir rett og slett for varmt inne under glasset til at flammen kan holde seg taent", "Trykket inne i glasset oker sa mye at flammen presses sammen og til slutt slukner helt"],
      explanation: "Glasset stenger ute ny luft. Etter hvert synker oksygenkonsentrasjonen under cirka 16 prosent, og forbrenningen kan ikke opprettholdes - oksygensiden i branntrekanten fjernes.",
    },
    {
      question: "Hvilken side i branntrekanten fjerner man typisk ved kjoling med vann?",
      options: ["Varme", "Brennbart stoff", "Oksygen", "Roeyk"],
      explanation: "Vann kjoler brannen ned slik at temperaturen synker under antennelsestemperaturen - det fjerner varmesiden i branntrekanten.",
    },
    {
      question: "Hvorfor er overtenning et kritisk vendepunkt i brannforlopet?",
      options: ["Brannen sprer seg da raskt til tilstoetende rom og rommet blir livsfarlig", "Slokking blir enklere fordi temperaturen faller raskt like etter overtenningen", "Slokkingen blir enklere etter overtenning fordi flammene samler seg pa ett sted i rommet", "Roeyken blir renere og mindre giftig etter overtenning slik at det gaar an a puste i rommet"],
      explanation: "Etter overtenning sprer brannen seg raskt til tilstoetende rom, og temperaturen gjor rommet umulig a oppholde seg i. Romning ma skje for overtenning.",
    },
  ],
  "sikkerhetsfag-5-2": [
    {
      question: "Hvilken brannklasse gjelder faste stoffer som tre og papir?",
      options: ["Klasse A", "Klasse B", "Klasse C", "Klasse F"],
      explanation: "Klasse A omfatter faste stoffer som tre og papir. Klasse B er brennbare vaesker, C er gasser, D er metaller og F er matolje/fett.",
    },
    {
      question: "Hvilken brannklasse gjelder brennbare vaesker som bensin og olje?",
      options: ["Klasse B", "Klasse A", "Klasse C", "Klasse D"],
      explanation: "Klasse B omfatter brennbare vaesker som bensin og olje.",
    },
    {
      question: "Hva er en branncelle?",
      options: ["Et avgrenset omrade konstruert for a hindre at brann og roeyk sprer seg en gitt tid", "En type brannslukker fylt med skum som brukes mot storre branner i store naeringsbygg", "Et etterlysende skilt som markerer romningsveien og leder folk trygt ut ved en evakuering", "En alarmenhet med roykdetektor som varsler bade internt i bygget og direkte til brannvesenet"],
      explanation: "En branncelle er et avgrenset omrade adskilt med branncellebegrensende bygningsdeler som hindrer spredning av brann og roeyk i en bestemt tidsperiode, for eksempel EI 30 eller EI 60.",
    },
    {
      question: "Hva betyr betegnelsen EI 60 om en bygningsdel?",
      options: ["Den har 60 minutters brannmotstand", "Den taler 60 graders varme", "Den taler flammer pa 60 grader", "Den er 60 centimeter tykk"],
      explanation: "EI 60 betyr at bygningsdelen har 60 minutters brannmotstand (integritet og isolasjon), altsa at den hindrer brann og roeyk i a passere i 60 minutter.",
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
      options: ["Ved a fortrenge oksygen (kveler brannen)", "Ved a tilfore brennbart stoff", "Ved a tilfore ekstra oksygen", "Ved a tilfore mer oksygen"],
      explanation: "CO2 slokker ved a fortrenge oksygenet rundt brannen (kveler den). Det egner seg godt rundt elektronikk fordi det ikke etterlater rester.",
    },
    {
      question: "Hva er forsteinnsats ved brann?",
      options: ["Slokking og redning som utfores pa stedet for brannvesenet ankommer", "Brannvesenets samlede arbeid etter at de har ankommet selve skadestedet", "Slokkingen og redningen brannvesenet utforer etter at de har rykket ut og ankommet stedet", "En forsikringsordning som daekker de forste utgiftene virksomheten far rett etter en brann"],
      explanation: "Forsteinnsats er slokkingen og redningen som utfores av personer pa stedet i de kritiske forste minuttene, for brannvesenet kommer. Egen sikkerhet gaar alltid forst.",
    },
    {
      question: "Hvilket slokkemiddel er best egnet pa en liten papirbrann naer elektronikk?",
      options: ["CO2-slokker", "Vannboette uten begrensning", "Brannteppe over hele rommet", "En boette med sand"],
      explanation: "CO2 egner seg godt naer elektronikk fordi det kveler brannen uten a etterlate rester som skader utstyret. Papir (klasse A) kan slokkes med CO2 nar brannen er liten.",
    },
    {
      question: "Hvordan virker et brannteppe?",
      options: ["Det kveler brannen ved a dekke til og stenge ute oksygen", "Det bryter den kjemiske reaksjonen med pulver", "Det bryter den kjemiske reaksjonen i flammen ved hjelp av et finkornet slokkepulver", "Det kjoler ved a tilfore vann"],
      explanation: "Et brannteppe kveler brannen ved a dekke til flammen og stenge ute oksygen. Det er effektivt mot for eksempel mindre fettbranner pa kjokkenet.",
    },
    {
      question: "Hva er den viktigste regelen ved forsteinnsats?",
      options: ["Egen sikkerhet gaar alltid forst", "Slokk uansett hvor stor brannen er", "Vent alltid til brannvesenet kommer", "Bruk vann pa alle branner"],
      explanation: "Egen sikkerhet gaar alltid forst. Hvis brannen er for stor eller farlig, skal man trekke seg ut, varsle og overlate slokkingen til brannvesenet.",
    },
  ],
  "sikkerhetsfag-5-4": [
    {
      question: "Hva er en romningsvei?",
      options: ["En sikker, markert vei fra et punkt i bygningen ut til sikkert sted", "En vei inn til serverrommet", "En egen adkomstvei som forer inn til serverrommet og andre sikrede soner i bygningen", "En anvist parkeringsvei rundt bygget slik at kjoretoy kan komme trygt til og fra omradet"],
      explanation: "En romningsvei er en sikker og markert utgangsvei fra et punkt i bygningen ut til sikkert sted (terreng i det fri), som taler brann og roeyk tilstrekkelig lenge.",
    },
    {
      question: "Hva er en samlingsplass?",
      options: ["Et forhaandsbestemt sted utenfor bygningen der alle moter etter evakuering", "En sone for vareleveranser", "En egen sone for vareleveranser der last og kjoretoy holdes samlet under en evakuering", "Et eget rom inne i bygningen der alle skal mote og vente til brannvesenet gir klarsignal"],
      explanation: "Samlingsplassen er et forhaandsbestemt sted i trygg avstand fra bygningen der alle moter etter evakuering, og der det gjennomfores telling for a sikre at alle er ute.",
    },
    {
      question: "Hvorfor gjennomfores telling pa samlingsplassen?",
      options: ["For a sikre at alle har kommet seg ut av bygningen", "For a registrere arbeidstid", "For a registrere de ansattes arbeidstid slik at frammotet kan fores inn i timelistene", "For a male temperaturen"],
      explanation: "Telling pa samlingsplassen brukes for a kontrollere at alle som oppholdt seg i bygningen faktisk er kommet ut, slik at man vet om noen fortsatt er inne.",
    },
    {
      question: "Hvilket regelverk stiller krav til romningsveier?",
      options: ["Byggteknisk forskrift (TEK17) og brannforskriften", "Bare personopplysningsloven", "Vaktvirksomhetsloven og politiloven", "Bare vaktvirksomhetsloven"],
      explanation: "Krav til romningsveier er regulert i byggteknisk forskrift (TEK17) og brannforskriften, som setter krav til sikre og markerte utganger.",
    },
    {
      question: "Hvorfor bor laereren ta med klasselisten ved evakuering av en skole?",
      options: ["For a kunne telle og kontrollere at alle elevene er kommet ut", "For a vise til brannvesenet hvem som eier skolen", "For a dokumentere hvem som eier skolebygningen", "For a registrere fravaer til karakteren"],
      explanation: "Klasselisten brukes pa samlingsplassen til a telle elevene og raskt avdekke om noen mangler og fortsatt kan vaere inne i bygningen.",
    },
  ],
  "sikkerhetsfag-5-5": [
    {
      question: "Hva er brannvernlederens rolle?",
      options: ["A ivareta det daglige brannvernarbeidet pa vegne av eier/ledelse", "A slokke alle branner alene", "A erstatte det kommunale brannvesenet ved a overta all utrykning og redning i virksomheten", "A vaere juridisk eier av bygningen"],
      explanation: "Brannvernlederen koordinerer brannforebyggende tiltak, gjennomforer brannovelser, folger opp slokkeutstyr og dokumenterer arbeidet. Eieren har det overordnede ansvaret.",
    },
    {
      question: "Hva er internkontroll i brannvernsammenheng?",
      options: ["Systematiske tiltak for a sikre samsvar med HMS- og brannlovgivningen", "En engangskontroll fra brannvesenet ved det aller forste tilsynet i bygget", "En bestemt type slokkeapparat som plasseres sentralt og kontrolleres av eier en gang i aret", "En engangskontroll utfort av brannvesenet ved tilsyn, som avslutter behovet for videre oppfolging"],
      explanation: "Internkontroll er systematiske tiltak virksomheten iverksetter for a sikre at brannsikkerheten planlegges, utfores og dokumenteres i samsvar med lovgivningen.",
    },
    {
      question: "Hvem har det overordnede ansvaret for brannsikkerheten i en virksomhet?",
      options: ["Eieren / ledelsen", "Den enkelte ansatte", "Brannvesenet", "Forsikringsselskapet"],
      explanation: "Eieren eller ledelsen har det overordnede ansvaret for brannsikkerheten, mens brannvernlederen utforer det praktiske, daglige arbeidet.",
    },
    {
      question: "Hvorfor er regelmessige brannovelser viktige?",
      options: ["De trener personell og avdekker svakheter i planverket", "De gjor forsikringen billigere automatisk", "De gjor forsikringspremien automatisk billigere uansett om svakheter i planverket blir rettet opp", "De erstatter behovet for slokkeutstyr"],
      explanation: "Brannovelser trener personell i sine roller, sikrer at alle kjenner romningsveier og samlingsplass, og avdekker svakheter i beredskapen som kan rettes opp.",
    },
    {
      question: "Hva bor brannverndokumentasjonen i en bedrift inneholde?",
      options: ["Organisering, brannteknisk beskrivelse, rutiner og ovelsesplan", "Bare ansattes lonn", "Bare virksomhetens regnskap og budsjett, som viser hvor mye som er brukt pa brannteknisk utstyr", "Bare en oppdatert kundeoversikt med kontaktinformasjon"],
      explanation: "Brannverndokumentasjonen bor blant annet inneholde ansvarsfordeling/organisering, brannteknisk beskrivelse av bygget, rutiner og plan for brannovelser.",
    },
  ],
  "sikkerhetsfag-6-1": [
    {
      question: "Hva star HMS for?",
      options: ["Helse, miljo og sikkerhet", "Handtering av metoder og system", "Hovedsikkerhet og milisystem", "Helhetlig miljosatsing i drift"],
      explanation: "HMS star for helse, miljo og sikkerhet - det systematiske arbeidet med a ivareta arbeidstakernes helse, det ytre miljoet og sikkerheten pa arbeidsplassen.",
    },
    {
      question: "Hva er internkontroll i HMS-sammenheng?",
      options: ["Systematiske tiltak for a sikre samsvar med HMS-lovgivningen", "En engangsinspeksjon fra Arbeidstilsynet", "En bestemt type verneutstyr som deles ut til ansatte for a sikre samsvar med HMS-lovgivningen", "En engangsinspeksjon fra Arbeidstilsynet, som etter godkjenning avslutter virksomhetens HMS-ansvar"],
      explanation: "Internkontroll er systematiske tiltak virksomheten iverksetter for at aktivitetene planlegges, utfores og vedlikeholdes i samsvar med HMS-lovgivningen.",
    },
    {
      question: "Hva er forste steg i en arlig HMS-gjennomgang?",
      options: ["En risikovurdering av arbeidsoppgavene", "A kjope nytt utstyr uten vurdering", "A si opp ansatte med flest avvik", "A avvikle alle rutiner"],
      explanation: "En HMS-gjennomgang starter typisk med en risikovurdering av arbeidsoppgavene, der man identifiserer farer for sa a lage en handlingsplan med tiltak.",
    },
    {
      question: "Hvorfor har vektere som jobber alene om natten okt risiko?",
      options: ["De er mer utsatt for vold og har ingen kollega til a bistaa", "De jobber kortere dager", "De har vesentlig bedre lonn enn andre vektere og tar derfor pa seg unodig risikofylte oppdrag", "De jobber gjennomgaende kortere vakter enn dagvaktene"],
      explanation: "Aleinearbeid om natten gir okt risiko for vold og truende situasjoner fordi vekteren ikke har en kollega til stede som kan bistaa eller tilkalle hjelp raskt.",
    },
    {
      question: "Hva bor folge etter at en risikovurdering har avdekket farer?",
      options: ["En handlingsplan med konkrete tiltak", "At man slutter med rapportering", "At man avvikler det systematiske HMS-arbeidet fordi farene na er kartlagt en gang for alle", "At man avvikler HMS-arbeidet"],
      explanation: "Etter at farer er identifisert, lager man en handlingsplan med konkrete tiltak (for eksempel opplaering eller utstyr) for a redusere risikoen.",
    },
  ],
  "sikkerhetsfag-6-2": [
    {
      question: "Hva regulerer arbeidsmiljoloven?",
      options: ["Arbeidsmiljo, arbeidstid, stillingsvern og medvirkning", "Bare kameraovervaking", "Bare brannvern og romningsveier pa arbeidsplassen, samt kravene til dokumentert brannovelse", "Bare lonnsniva og lonnsutbetaling"],
      explanation: "Arbeidsmiljoloven er den sentrale loven for arbeidsforhold i Norge og stiller krav til arbeidsmiljoet, arbeidstiden, stillingsvern og medvirkning.",
    },
    {
      question: "Hvem er verneombudet?",
      options: ["Arbeidstakernes representant i sporsmal om arbeidsmiljoet", "En representant for arbeidsgiver alene", "En ekstern HMS-konsulent som leies inn", "En ansatt i Arbeidstilsynet"],
      explanation: "Verneombudet er arbeidstakernes valgte representant i sporsmal som angar arbeidsmiljoet, valgt av og blant de ansatte for to ar om gangen.",
    },
    {
      question: "Hva innebaerer verneombudets stansingsrett?",
      options: ["Rett til a stanse arbeid ved umiddelbar fare for liv og helse", "Rett til a endre arbeidstid fritt", "Rett til a fastsette lonn og godtgjorelse for arbeid som utfores under farlige forhold", "Rett til fritt a endre den ansattes arbeidstid og vaktplan nar arbeidsmiljoet krever det"],
      explanation: "Verneombudet kan bruke stansingsretten og stanse arbeidet dersom det er umiddelbar fare for arbeidstakernes liv eller helse, til faren er fjernet.",
    },
    {
      question: "For hvor lang periode velges normalt et verneombud?",
      options: ["To ar", "Seks maaneder", "Ti ar", "En uke"],
      explanation: "Verneombudet velges av og blant de ansatte for en periode pa to ar.",
    },
    {
      question: "Hva er hovedformaalet med arbeidsmiljoloven?",
      options: ["A beskytte arbeidstakernes rettigheter og sikre et forsvarlig arbeidsmiljo", "A oke bedriftens fortjeneste", "A oke bedriftens fortjeneste ved a effektivisere driften og redusere kostnadene til vernetiltak", "A redusere antall ansatte gjennom regulerte nedbemanninger nar virksomheten far darligere okonomi"],
      explanation: "Arbeidsmiljolovens formaal er a sikre et forsvarlig arbeidsmiljo og beskytte arbeidstakernes helse, sikkerhet og rettigheter.",
    },
  ],
  "sikkerhetsfag-6-3": [
    {
      question: "Hva star bokstavene i DHLR for?",
      options: ["Danner overblikk, Har fri luftvei, Livstegn, Ring 113 og start HLR", "Detektor, hoyttaler, lys, radio", "Detektor, hoyttaler, lys og radio, en huskeregel for delene i et automatisk brannvarslingsanlegg", "Dor, hus, lager og rom, en huskeregel for hvilke deler av et bygg vekteren skal kontrollere forst"],
      explanation: "DHLR er en systematisk tilnaerming: D = Danner overblikk (sikkerhet), H = Har fri luftvei, L = Livstegn (puster normalt?), R = Ring 113 og start HLR.",
    },
    {
      question: "Hva er forholdet mellom kompresjoner og innblasninger ved standard HLR pa voksne?",
      options: ["30 kompresjoner til 2 innblasninger", "15 kompresjoner til 2 innblasninger", "5 kompresjoner til 1 innblasning", "50 kompresjoner til 5 innblasninger"],
      explanation: "Standard HLR for voksne utfores med 30 brystkompresjoner etterfulgt av 2 innblasninger, gjentatt til hjelp ankommer eller personen viser livstegn.",
    },
    {
      question: "Hva er formaalet med HLR?",
      options: ["A opprettholde blodstrommen til hjernen og vitale organer nar hjertet har stoppet", "A varme opp pasienten slik at kroppstemperaturen stiger opp til et normalt niva igjen", "A varme opp en nedkjolt og livlos pasient slik at kroppstemperaturen kommer opp for utrykning", "A stoppe ytre og indre blodninger ved hjelp av trykk og bandasjer for ambulansen ankommer stedet"],
      explanation: "HLR (hjerte-lunge-redning) opprettholder blodstrommen til hjernen og andre vitale organer nar hjertet har stoppet, til hjertet eventuelt kan startes igjen.",
    },
    {
      question: "Hva er det forste man gjor nar man kommer til en livlos person (D i DHLR)?",
      options: ["Danner seg et overblikk over sikkerhet og situasjon", "Starter innblasninger umiddelbart", "Starter innblasninger og brystkompresjoner umiddelbart uten a sikre at stedet er trygt for deg selv", "Flytter personen langt unna"],
      explanation: "Forste steg (D) er a danne seg et overblikk: sikre at stedet er trygt for en selv og pasienten, og vurdere situasjonen for man gar videre.",
    },
    {
      question: "Hvilket nummer ringer man for medisinsk nodhjelp i Norge?",
      options: ["113", "110", "112", "114"],
      explanation: "I Norge ringer man 113 for medisinsk nodhjelp (ambulanse), 110 for brann og 112 for politi.",
    },
  ],
  "sikkerhetsfag-6-4": [
    {
      question: "Hva er ergonomi?",
      options: ["Laeren om a tilpasse arbeidet og arbeidsplassen til menneskets forutsetninger", "Laeren om alarmsystemer og hvordan slike systemer settes opp, driftes og vedlikeholdes", "Laeren om brann og forbrenning, som beskriver hvordan branner oppstar, sprer seg og kan slokkes", "Laeren om alarm- og varslingssystemer, som beskriver hvordan sensorer og detektorer skal plasseres"],
      explanation: "Ergonomi er laeren om a tilpasse arbeidet, arbeidsplassen og verktoyene til menneskets fysiske og psykiske forutsetninger, for a forebygge skader og oke effektiviteten.",
    },
    {
      question: "Hva er en belastningsskade?",
      options: ["En skade som oppstar gradvis av gjentatte paakjenninger eller feil belastning", "En rent psykisk diagnose helt uten fysisk arsak, verken i kroppen eller i arbeidet", "En forgiftning som oppstar nar kroppen tar opp skadelige gasser eller kjemikalier i arbeidsmiljoet", "En akutt brannskade som oppstar plutselig nar huden utsettes for varme, flammer eller etsende stoffer"],
      explanation: "En belastningsskade oppstar gradvis pa grunn av gjentatte paakjenninger eller feil belastning over tid, typisk i skuldre, nakke og rygg.",
    },
    {
      question: "Hvorfor er det et ergonomisk problem at skjermer plasseres for lavt?",
      options: ["Operatoren maa boye hodet nedover, noe som belaster nakke og rygg", "Det bruker mer strom fordi lysstyrken maa okes kraftig for aa se bildet", "Fordi bildet pa skjermen blir uskarpt og vanskeligere a lese nar operatoren ser ned pa det", "Fordi skjermen bruker mer strom nar den star lavt, noe som oker virksomhetens energikostnader"],
      explanation: "Skjermer plassert for lavt tvinger operatoren til a boye hodet framover og nedover over tid, noe som gir okt belastning pa nakke og rygg.",
    },
    {
      question: "Hvilket tiltak forebygger belastningsskader for stillesittende operatorer?",
      options: ["Justerbare stoler, riktig skjermhoyde og regelmessige pauser", "A sitte lengst mulig uten pause", "A senke skjermen ytterligere ned mot bordplaten slik at operatoren far et mer avslappet blikk", "A senke skjermen ytterligere"],
      explanation: "Justerbare stoler med korsryggstotte, riktig skjermhoyde, fothvilere og regelmessige pauser reduserer belastningen og forebygger nakke- og ryggplager.",
    },
    {
      question: "Hva er riktig prinsipp for tung loftteknikk?",
      options: ["Bruk beina, hold ryggen rett og lasten naer kroppen", "Boy ryggen og loft med strake bein", "Vri overkroppen mens du lofter lasten", "Hold lasten langt fra kroppen"],
      explanation: "Riktig loftteknikk innebaerer a bruke beina (boye i knaeene), holde ryggen rett og lasten naer kroppen, og unnga vridning, for a unnga belastning pa ryggen.",
    },
  ],
  "sikkerhetsfag-6-5": [
    {
      question: "Hva handler psykososialt arbeidsmiljo om?",
      options: ["De psykologiske og sosiale forholdene pa arbeidsplassen", "Bare fysisk verneutstyr", "Bare lonnsforholdene til de ansatte", "Bare brannsikkerhet"],
      explanation: "Psykososialt arbeidsmiljo handler om de psykologiske og sosiale forholdene, som relasjoner, organisering av arbeidet, medvirkning, arbeidsmengde og opplevelse av mening.",
    },
    {
      question: "Hva er hensikten med debriefing etter en alvorlig hendelse?",
      options: ["A bearbeide opplevelsen og forebygge psykiske ettervirkninger", "A straffe de involverte", "A straffe og ansvarliggjore de involverte som gjorde feil, slik at hendelsen ikke gjentar seg", "A slippe a rapportere hendelsen videre, siden de involverte allerede har snakket sammen om den"],
      explanation: "Debriefing gir de involverte mulighet til a snakke gjennom hendelsen, bearbeide reaksjoner og forebygge psykiske ettervirkninger, samtidig som man laerer av hendelsen.",
    },
    {
      question: "Hva bor en arbeidsgiver gjore umiddelbart etter at ansatte har vaert utsatt for en trussel?",
      options: ["Folge opp de involverte og tilby stotte og samtale", "Sende dem rett tilbake pa vakt uten oppfolging", "Late som ingenting har skjedd og fortsette driften som normalt for a unnga a skape unodig uro", "Late som ingenting har skjedd"],
      explanation: "Umiddelbart bor arbeidsgiver folge opp de involverte med omsorg, tilby samtale/avlastning, rapportere hendelsen og vurdere videre oppfolging og eventuell politianmeldelse.",
    },
    {
      question: "Hvilken faktor inngar i et godt psykososialt arbeidsmiljo?",
      options: ["Gode relasjoner, rolleklarhet og mulighet for medvirkning", "Manglende stotte fra ledelsen", "Uklare ansvarsforhold og rolleforventninger, slik at ansatte selv finner ut hva de skal gjore", "Uklare ansvarsforhold"],
      explanation: "Et godt psykososialt arbeidsmiljo kjennetegnes av gode relasjoner, rolleklarhet, passe arbeidsmengde, medvirkning og opplevelse av mening og mestring.",
    },
    {
      question: "Hvorfor er det viktig a handtere vold og trusler systematisk i sikkerhetsbransjen?",
      options: ["Fordi ansatte er saerlig utsatt, og det pavirker helse og arbeidsmiljo", "Fordi slike hendelser er uvanlige og uten betydning for driften av selskapet", "Fordi vold og trusler er uvanlig i bransjen og derfor ikke har vesentlig betydning for driften", "Fordi det utelukkende handler om okonomiske tap, og ikke pavirker de ansattes helse eller trivsel"],
      explanation: "Sikkerhetsansatte er saerlig utsatt for vold og trusler. Systematisk forebygging og oppfolging beskytter de ansattes fysiske og psykiske helse og arbeidsmiljo.",
    },
  ],
  "sikkerhetsfag-7-1": [
    {
      question: "Hva er vaktvirksomhet ifolge loven?",
      options: ["Virksomhet som vaker over eller beskytter personer, eiendom eller verdier", "Bare transport av varer", "Bare salg og installasjon av alarmsystemer, kameraer og annet elektronisk sikringsutstyr hos kunder", "Bare transport av varer og verdier mellom lokasjoner, uten ansvar for a beskytte personer og eiendom"],
      explanation: "Vaktvirksomhet gar ut pa a vake over eller beskytte personer, eiendom eller andre verdier, og kontrollere adgang. Det dekker blant annet ordensvakter og butikkvektere.",
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
      question: "Hva vurderer politiet ved soknad om a bli vekter?",
      options: ["Vandel, blant annet ut fra type lovbrudd og hvor lenge siden", "Bare soekerens utdanning i andre fag", "Kun soekerens formelle utdanning i helt andre fagfelt enn sikkerhet og vakthold", "Bare soekerens alder ved soknadstidspunktet"],
      explanation: "Politiet vurderer vandelen individuelt ut fra blant annet type lovbrudd og hvor lenge det er siden, fordi vektere kan havne i konfliktsituasjoner.",
    },
    {
      question: "Hva er hovedformaalet med vaktvirksomhetsloven?",
      options: ["A regulere hvem som kan drive vaktvirksomhet og hvilke krav som gjelder", "A regulere bruken av kameraovervaking alene, uten andre former for sikring", "A regulere forebyggende brannvern og beredskap i naeringsbygg med mange ansatte", "A fastsette hvilken minstelonn og hvilke arbeidstidsordninger vektere har krav paa"],
      explanation: "Vaktvirksomhetsloven regulerer hvem som kan drive vaktvirksomhet, kravene til autorisasjon, og hvilke plikter og begrensninger vektere har.",
    },
  ],
  "sikkerhetsfag-7-2": [
    {
      question: "Hva gir nodverge (straffeloven paragraf 18) rett til?",
      options: ["A bruke nodvendig makt for a avverge et ulovlig angrep", "A pagripe hvem som helst uten grunn", "A pagripe hvem som helst uten konkret mistanke", "A straffe en person etter angrepet"],
      explanation: "Nodverge gir rett til a bruke makt for a avverge et pagaaende ulovlig angrep. Makten maa ikke gaa lenger enn nodvendig og ikke vaere apenbart uforsvarlig.",
    },
    {
      question: "Hva er forskjellen mellom nodverge og nodrett?",
      options: ["Nodverge avverger et ulovlig angrep; nodrett gjelder fare som ikke skyldes et angrep", "Nodrett gjelder bare angrep fra mennesker", "Nodrett gjelder utelukkende angrep fra mennesker, mens dyr og naturkrefter faller utenfor", "Nodverge gjelder utelukkende farer fra naturkrefter og ulykker, aldri angrep fra personer"],
      explanation: "Nodverge gjelder a avverge et ulovlig angrep. Nodrett (paragraf 17) gjelder a redde verdier fra en fare som ikke kan avverges pa annen mate, og som kan komme fra naturkrefter, ulykker eller dyr.",
    },
    {
      question: "Hva krever forholdsmessighetsprinsippet ved maktbruk?",
      options: ["At maktbruken staar i rimelig forhold til angrepet og ikke er uforsvarlig", "At man alltid skal bruke maksimal makt for a stanse angrepet raskest mulig", "At man venter til skaden er skjedd og forst deretter griper inn overfor angriperen", "At man i prinsippet aldri kan bruke noen form for fysisk makt selv om man blir angrepet"],
      explanation: "Forholdsmessighet innebaerer at maktbruken ikke maa gaa lenger enn nodvendig og ikke vaere apenbart uforsvarlig sett opp mot angrepets farlighet og de truede verdiene.",
    },
    {
      question: "Nar gjelder borgernes pagripelsesrett?",
      options: ["Nar noen treffes pa fersk gjerning i en straffbar handling", "Nar man mistenker noen uten bevis", "Naar arbeidsdagen er over og vekteren onsker a avslutte vakten sin for kvelden", "Naar en kunde klager over daarlig service i en butikk"],
      explanation: "Borgernes pagripelsesrett gjelder nar en person treffes pa fersk gjerning eller ferske spor i en straffbar handling, slik en butikkvekter kan ved butikktyveri.",
    },
    {
      question: "Hva bor en ordensvakt gjore forst nar to gjester begynner a slass?",
      options: ["Forsoke verbal tilnaerming for eventuell fysisk inngripen", "Slaa til begge umiddelbart", "Ignorere situasjonen fullstendig og la slagsmaalet utvikle seg videre uten a gripe inn", "Forlate stedet og overlate haandteringen til gjestene"],
      explanation: "Minste inngripende middel forst: en verbal tilnaerming (\"Stopp dette\") for man eventuelt fysisk skiller partene. Maktbruk skal vaere nodvendig og forholdsmessig.",
    },
  ],
  "sikkerhetsfag-7-3": [
    {
      question: "Hva er formaalet med brann- og eksplosjonsvernloven?",
      options: ["A verne liv, helse, miljo og materielle verdier mot brann og eksplosjon", "A regulere kameraovervaking", "A regulere kameraovervaking og lagring av videoopptak i butikker og kjopesentre", "A fastsette vekteres lonnsnivaa og hvilke tillegg de har krav paa ved natt- og helgearbeid"],
      explanation: "Brann- og eksplosjonsvernloven har til formaal a verne liv, helse, miljo og materielle verdier mot brann, eksplosjon og ulykker med farlig stoff og gods.",
    },
    {
      question: "Hva regulerer brann- og eksplosjonsvernloven?",
      options: ["Bade forebyggende arbeid og beredskap mot brann og eksplosjon", "Bare etterforskning etter brann", "Bare forsikringsutbetalinger og oppgjor mellom eier og selskap etter en brannskade", "Bare tekniske bygningstegninger og romningsplaner"],
      explanation: "Loven regulerer bade forebyggende arbeid mot brann og eksplosjon, og beredskapen, inkludert brannvesenets rolle og krav til bygninger og virksomheter.",
    },
    {
      question: "Hva bor en vekter gjore om en nodutgang er blokkert av vareleveranser?",
      options: ["Fjerne hindringene eller sperre av og varsle ansvarlig umiddelbart", "La det ligge til neste dag", "Ignorere det siden det uansett er andre nodutganger andre steder i den samme bygningen", "La vareleveransene ligge foran utgangen til neste dag naar de likevel skal flyttes videre"],
      explanation: "En blokkert nodutgang er en alvorlig sikkerhetsrisiko. Vekteren bor fjerne hindringene om mulig, eventuelt sperre av og varsle ansvarlig, og dokumentere forholdet.",
    },
    {
      question: "Hvilken rolle har vektere i brannforebygging under rondering?",
      options: ["A oppdage og rapportere avvik som blokkerte utganger og manglende slokkeutstyr", "A overta alle brannvesenets oppgaver bade under slokking og under redning pa stedet", "A slokke enhver brann som oppstaar helt alene uten a tilkalle brannvesen eller nodetater", "A ignorere alle brannforhold under rondering fordi dette ligger utenfor vekterens ansvar"],
      explanation: "Under rondering bidrar vektere til brannforebygging ved a oppdage og rapportere avvik, for eksempel blokkerte nodutganger eller manglende slokkeapparat.",
    },
    {
      question: "Hvorfor bor manglende slokkeutstyr noteres og rapporteres?",
      options: ["Slik at det kan utbedres og dokumenteres som en del av internkontrollen", "For a kunne straffe den som er ansvarlig for at slokkeutstyret mangler i bygget", "For a unngaa personlig ansvar ved a skyve oppgaven med utbedring over paa noen andre", "For a oke brannfaren bevisst slik at man senere kan teste hvordan beredskapen fungerer"],
      explanation: "Manglende slokkeutstyr noteres med plassering og rapporteres slik at det kan erstattes raskt, og inngar i virksomhetens dokumenterte internkontroll av brannsikkerheten.",
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
      options: ["Det juridiske grunnlaget som gjor det lovlig a behandle personopplysninger", "En forsikringsavtale som dekker okonomiske tap ved tap av personopplysninger", "En arbeidskontrakt mellom vaktselskapet og den enkelte vekter som behandler opplysningene", "En bestemt type kamera med hoy opplosning som er godkjent for lovlig overvaking av omraader"],
      explanation: "Behandlingsgrunnlaget er det juridiske grunnlaget som gjor behandlingen lovlig, for eksempel samtykke, avtale, rettslig forpliktelse, berettiget interesse eller vitale interesser.",
    },
    {
      question: "Hva ma et vaktselskap gjore for det installerer kameraovervaking i et kjopesenter?",
      options: ["Vurdere behandlingsgrunnlag og dokumentere interesseavveiningen", "Lagre opptak i ubegrenset tid", "Skjule alle kameraene godt slik at ingen besokende oppdager at de faktisk blir overvaket", "Sorge for at opptakene fritt kan deles med alle ansatte"],
      explanation: "For installasjon ma selskapet vurdere behandlingsgrunnlaget (ofte berettiget interesse), dokumentere interesseavveiningen og utarbeide en protokoll over behandlingsaktiviteter.",
    },
    {
      question: "Hva skjer hvis personopplysninger behandles uten gyldig behandlingsgrunnlag?",
      options: ["Behandlingen er ulovlig", "Det er alltid lov", "Det blir automatisk lovlig etter ett ar", "Det gjelder bare for bedrifter"],
      explanation: "Uten et gyldig behandlingsgrunnlag er behandlingen av personopplysninger ulovlig etter personvernregelverket.",
    },
    {
      question: "Hva er et viktig tiltak ved kameraovervaking av et omrade?",
      options: ["Tydelig skilting om at omradet er kameraovervaket", "A lagre opptak for alltid", "A lagre alle opptakene for alltid", "A unnga all dokumentasjon"],
      explanation: "Tydelig skilting om at et omrade er kameraovervaket er et sentralt krav, slik at de registrerte er informert om overvakingen.",
    },
  ],
  "sikkerhetsfag-7-5": [
    {
      question: "Hvilken lov er den viktigste for regulering av arbeidsforhold i Norge?",
      options: ["Arbeidsmiljoloven", "Vaktvirksomhetsloven", "Politiloven i Norge", "Sivilbeskyttelsesloven"],
      explanation: "Arbeidsmiljoloven (lov om arbeidsmiljo, arbeidstid og stillingsvern) er den viktigste loven for arbeidsforhold, og gjelder ogsa for vektere.",
    },
    {
      question: "Hva regulerer politiloven som er relevant for vektere?",
      options: ["Politiets organisering og myndighet, og grensen mot private vaktselskaper", "Kameraovervaking i butikker", "Utelukkende vekteres lonn og hvilke tillegg de har krav paa ved arbeid paa natt og i helger", "Kameraovervaking i butikker og hvordan videoopptak skal lagres, merkes og slettes forsvarlig"],
      explanation: "Politiloven regulerer politiets oppgaver og myndighetsutovelse, og klargjor grensen mellom politiets oppgaver og private vaktselskapers virkeomrade.",
    },
    {
      question: "Hva regulerer sivilbeskyttelsesloven?",
      options: ["Kommunenes og statens ansvar for a beskytte befolkningen ved kriser og katastrofer", "Bare vakthold i butikker", "Bare vakthold og adgangskontroll i butikker og kjopesentre under vanlige aapningstider", "Bare arbeidstid og turnusordninger for ansatte i beredskaps- og sikkerhetsvirksomheter"],
      explanation: "Sivilbeskyttelsesloven palegger kommunene a utarbeide beredskapsplaner og stiller krav til sivil beredskap, inkludert tilfluktsrom og varslingssystemer.",
    },
    {
      question: "Hva er ordensvaktenes rolle naar politiet er til stede ved braak?",
      options: ["Observere, rapportere, bortvise fra privat grunn og varsle politiet", "Pagripe og avhore de mistenkte pa stedet for politiet rekker fram til stedet", "Paagripe de mistenkte og gjennomfore avhor av dem for a klarlegge hva som har skjedd", "Overta all politimyndighet paa stedet og selv lede den videre haandteringen av braaket"],
      explanation: "Ordensvakter observerer og rapporterer, forsoker verbal kommunikasjon, bortviser fra privat grunn og varsler politiet, som tar over haandteringen ved eskalering.",
    },
    {
      question: "Hvorfor er det viktig at vektere kjenner grensen mot politiets myndighet?",
      options: ["Fordi politiet har myndighet vektere ikke har, og roller ma holdes adskilt", "Fordi vektere har mer myndighet enn politiet", "Fordi vektere fritt kan overta politiets oppgaver naar de mener det er hensiktsmessig paa stedet", "Fordi grensene mellom rollene ikke har praktisk betydning"],
      explanation: "Politiet har myndighet (for eksempel pagripelse og bruk av tvangsmidler) som vektere ikke har. Vektere ma holde seg innenfor sitt virkeomrade og overlate politioppgaver til politiet.",
    },
  ],
  "sikkerhetsfag-8-1": [
    {
      question: "Hva er beredskap?",
      options: ["Tiltak som planlegges og gjennomfores for a haandtere uventede hendelser", "En type forsikring som dekker de okonomiske skadene etter uonskede hendelser", "En brannklasse som angir hvor motstandsdyktig en bygning er mot brann og roykutvikling", "Et automatisk alarmsystem som varsler nodetatene straks en uonsket hendelse blir registrert"],
      explanation: "Beredskap er tiltak som planlegges og gjennomfores for a haandtere uventede hendelser som kan true liv, helse, miljo eller verdier, og omfatter forebygging, forberedelse, respons og gjenoppretting.",
    },
    {
      question: "Hva er et tiltakskort?",
      options: ["En kortfattet instruks for konkrete handlinger ved en bestemt type hendelse", "Et eget bankkort som er satt av til innkjop i beredskapssituasjoner i bedriften", "Et forhaandsbetalt bankkort som brukes til innkjop av utstyr til beredskapen ved kriser", "Et opplyst romningsskilt som viser retningen mot naermeste nodutgang under en evakuering"],
      explanation: "Et tiltakskort er en kortfattet instruks knyttet til en bestemt rolle og et bestemt scenario, med trinnvise handlinger slik at den ansvarlige vet noyaktig hva som skal gjores.",
    },
    {
      question: "Hva bor en vaktleder gjore forst ved bekreftet brann i et kjopesenter?",
      options: ["Ringe 110 og iverksette evakuering", "Vente til kunden har gatt hjem", "Vente rolig uten a foreta seg noe", "Slukke all belysning"],
      explanation: "Ved bekreftet brann bor vaktlederen ringe 110, gi noyaktig adresse og informasjon, og iverksette evakuering, samt sende vektere til utgangene for a lede folk ut.",
    },
    {
      question: "Hvilke faser inngar i beredskap?",
      options: ["Forebygging, forberedelse, respons og gjenoppretting", "Bare etterforskning", "Bare forsikringsoppgjor og erstatning etter at skaden paa liv, helse og verdier er inntruffet", "Bare forsikring"],
      explanation: "Beredskap omfatter fire faser: forebygging (hindre hendelser), forberedelse (planlegge), respons (haandtere) og gjenoppretting (normalisere etterpa).",
    },
    {
      question: "Hvorfor knyttes tiltakskort til bestemte roller?",
      options: ["Slik at hver ansvarlig vet noyaktig hva nettopp de skal gjore", "For a forvirre de ansatte", "For a forvirre de ansatte med mange ulike instrukser saa de maa tenke selv i situasjonen", "For a spare papir ved a samle alle rollenes oppgaver paa ett og samme felles ark eller kort"],
      explanation: "Tiltakskort knyttes til roller slik at hver person raskt vet sine konkrete oppgaver i en stresset situasjon, noe som gir tydelig ansvarsfordeling og effektiv respons.",
    },
  ],
  "sikkerhetsfag-8-2": [
    {
      question: "Hva kjennetegner en krise?",
      options: ["Hoy usikkerhet, tidspress, behov for raske beslutninger og stor oppmerksomhet", "En rolig, forutsigbar situasjon", "En rolig og forutsigbar situasjon der man har god tid til a planlegge hvert enkelt tiltak", "En helt vanlig arbeidsdag med de rutinemessige oppgavene som inngaar i normal drift av stedet"],
      explanation: "En krise er en alvorlig hendelse som truer viktige verdier og krever ekstraordinaere tiltak. Den kjennetegnes av hoy usikkerhet, tidspress og stor oppmerksomhet utenfra.",
    },
    {
      question: "Hva kjennetegner god krisekommunikasjon?",
      options: ["Den er rask, ærlig, konsistent og tilpasset mottakeren", "Den er treig og holdes hemmelig", "Den endrer budskap ut fra hvem som spor", "Den utelater all informasjon"],
      explanation: "God krisekommunikasjon er rask, ærlig, konsistent og tilpasset mottakeren, slik at riktig informasjon naar dem som trenger den, og tilliten opprettholdes.",
    },
    {
      question: "Hva er en krisestab?",
      options: ["En gruppe som leder og koordinerer haandteringen av en krise", "En gruppe journalister", "Et forsikringsselskap som beregner og utbetaler erstatning for tapene som oppstaar under krisen", "En gruppe journalister som samler inn og videreformidler informasjon om krisen til offentligheten"],
      explanation: "En krisestab aktiveres for a lede og koordinere haandteringen av en krise, med roller som kriseleder, operasjonsleder og informasjonsansvarlig.",
    },
    {
      question: "Hva bor en kriseleder gjore tidlig i en gasslekkasje?",
      options: ["Innhente situasjonsbilde: type gass, omfang og vindretning", "Vente til media ringer", "Vente med a foreta seg noe til media ringer og etterspor en offisiell uttalelse om hendelsen", "Avlyse all evakuering for a unngaa panikk"],
      explanation: "Kriselederen bor raskt innhente et situasjonsbilde - hva slags gass, omfang og vindretning - som grunnlag for beslutninger om evakuering og koordinering med nodetatene.",
    },
    {
      question: "Hvorfor er rask og ærlig informasjon viktig under en krise?",
      options: ["For a redusere usikkerhet og opprettholde tillit", "For a unnga a varsle nodetatene", "For a tjene penger paa selve situasjonen", "For a skjule hva som skjer"],
      explanation: "Rask og ærlig kommunikasjon reduserer usikkerhet, hindrer rykter og opprettholder tilliten til virksomheten under og etter krisen.",
    },
  ],
  "sikkerhetsfag-8-3": [
    {
      question: "Hva er terrorisme?",
      options: ["Alvorlige voldshandlinger eller trusler som skal skape frykt og pavirke beslutninger", "Vanlig vinningskriminalitet som tyveri, innbrudd og bedrageri rettet mot privatpersoner", "Ulovlig innsamling av personopplysninger for a selge dem videre til kriminelle nettverk", "Uroligheter mellom to nabostater som eskalerer til aapen militaer konflikt over et grenseomraade"],
      explanation: "Terrorisme er alvorlige voldshandlinger eller trusler om slike, med hensikt a skape frykt i befolkningen, pavirke politiske beslutninger eller destabilisere samfunnet.",
    },
    {
      question: "Hva er PLIVO?",
      options: ["Felles prosedyre for nodetatene ved pagaaende livstruende vold", "Et kameraovervakingssystem som brukes i offentlige rom og i store bygg", "Et regelverk for hvordan vaktselskaper skal bevaepnes ved store arrangementer", "En nasjonal varslingsordning der publikum sender tips om mistenkelig aktivitet"],
      explanation: "PLIVO (Pagaaende Livstruende Vold) er en felles prosedyre for politi, brann og helse, utviklet etter 22. juli 2011, for raskt og koordinert a redde liv ved slike hendelser.",
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
      question: "Hva inngar i a vurdere en trusselaktor?",
      options: ["Aktorens intensjon og kapasitet", "Aktorens favorittfarge", "Aktorens moteaktivitet", "Aktorens bosted alene"],
      explanation: "I en trusselvurdering vurderes aktorens intensjon (vilje til a utfore handlingen) og kapasitet (evne/midler til a gjennomfore den), gjerne sett opp mot PSTs trusselvurdering.",
    },
  ],
  "sikkerhetsfag-8-4": [
    {
      question: "Hva er en naturkatastrofe?",
      options: ["En hendelse forarsaket av naturkrefter med betydelige skader pa mennesker, eiendom eller miljo", "En langvarig arbeidskonflikt som fører til stans i viktige samfunnstjenester og leveranser", "Et alvorlig dataangrep som lammer kritisk infrastruktur og forsyningssystemer i samfunnet", "En menneskeskapt eksplosjon som skyldes uforsvarlig lagring av farlige kjemikalier"],
      explanation: "En naturkatastrofe er forarsaket av naturkrefter og medforer betydelige skader. I Norge er de vanligste knyttet til flom, skred, storm og stormflo.",
    },
    {
      question: "Hva anbefaler DSB at hver husstand har som egenberedskap?",
      options: ["Vann, mat, varme, lys og medisin for minst 72 timer", "Et vaktselskap pa kontrakt", "En privat bunker med plass og forsyninger for hele nabolaget ved en storre krise", "En fast kontrakt med et vaktselskap"],
      explanation: "DSB anbefaler at alle husstander har egenberedskap med vann, mat, varme, lys og nodvendig medisin for a klare seg selv i minst 72 timer (tre dogn).",
    },
    {
      question: "Hvilke naturhendelser er vanligst i Norge?",
      options: ["Flom, skred, storm og stormflo", "Vulkanutbrudd og jordskjelv", "Kraftige vulkanutbrudd og jordskjelv som følge av bevegelser i jordskorpa langs kysten", "Sandstormer og torke"],
      explanation: "I Norge er de vanligste naturkatastrofene knyttet til flom, skred (jord, stein, sno), storm og stormflo.",
    },
    {
      question: "Hva inngar i forebyggende flomberedskap i en kommune?",
      options: ["Oppdaterte flomsonekart, byggebegrensninger og vedlikehold av flomvoller", "A fjerne alle dreneringssystemene i kommunen for aa spare penger paa drift", "Aa overlate all haandtering av flomrisiko til den enkelte grunneier uten kommunal oppfølging", "Aa fjerne eksisterende dreneringssystemer og flomvoller for aa spare kostnader til vedlikehold"],
      explanation: "Forebyggende flomberedskap omfatter oppdaterte flomsonekart, byggebegrensninger i utsatte soner, vedlikehold av flomvoller og dreneringssystemer, og sikring av kritisk infrastruktur.",
    },
    {
      question: "Hva er hovedhensikten med egenberedskap hos den enkelte borger?",
      options: ["A kunne klare seg selv en periode og avlaste nodetatene ved store hendelser", "A erstatte all offentlig beredskap", "Aa gjøre offentlig beredskap overflødig slik at nødetatene kan bygges kraftig ned over tid", "Aa gi den enkelte mulighet til aa tjene penger paa aa selge egne forsyninger under en krise"],
      explanation: "Egenberedskap gjor at den enkelte kan klare seg selv i minst 72 timer ved en alvorlig hendelse, slik at nodetatene kan prioritere dem som trenger hjelp mest.",
    },
  ],
  "sikkerhetsfag-8-5": [
    {
      question: "Hva er en beredskapsovelse?",
      options: ["En planlagt aktivitet der man trener pa a haandtere uonskede hendelser etter beredskapsplanen", "En rutinemessig arbeidsdag der ansatte følger vanlige oppgaver uten avvik fra normaldriften", "En forsikringsavtale som dekker de økonomiske tapene virksomheten faar ved en uønsket hendelse", "En automatisk alarmordning som varsler nødetatene straks en uønsket hendelse blir oppdaget"],
      explanation: "En beredskapsovelse er en planlagt aktivitet der organisasjonen trener pa a haandtere uonskede hendelser i henhold til beredskapsplanen, for a teste planverket og avdekke svakheter.",
    },
    {
      question: "Hva er en innsprøytning (inject) i en beredskapsovelse?",
      options: ["Ny informasjon som tilfores underveis for a styre forlopet og utfordre deltakerne", "En medisinsk behandling", "En medisinsk behandling som gis til skadde deltakere før den virkelige nødetaten ankommer stedet", "En forhaandsdefinert alarm som utløses automatisk naar øvelsen naar et bestemt tidspunkt i forløpet"],
      explanation: "En innsprøytning (inject) er ny informasjon - meldinger, endrede forutsetninger eller komplikasjoner - som tilfores underveis for a styre forlopet og utfordre deltakerne.",
    },
    {
      question: "Hva kjennetegner en tabletop-ovelse (bordovelse)?",
      options: ["Gjennomgang av planer og diskusjon av scenarier rundt et bord", "Test av enkeltfunksjoner som varsling", "Isolert test av enkeltfunksjoner som varslingsanlegg og nødlys uten øvrig deltakelse", "Full fysisk evakuering av hele bygget der alle ansatte deltar under realistiske forhold"],
      explanation: "En tabletop-ovelse innebaerer gjennomgang av planer og diskusjon av scenarier rundt et bord. Den krever lite ressurser og er god for a klargjore roller og samhandling.",
    },
    {
      question: "Hvorfor evalueres beredskapsovelser systematisk?",
      options: ["For a avdekke svakheter og forbedre beredskapen kontinuerlig", "For a spare penger paa arbeidet med planverket i hele virksomheten", "For aa dokumentere at videre øvelser er unødvendige slik at man kan slutte aa øve", "For aa kunne straffe de deltakerne som gjorde feil under gjennomføringen av øvelsen"],
      explanation: "Systematisk evaluering avdekker hva som fungerte og hva som sviktet, slik at planverk og beredskap kan forbedres kontinuerlig.",
    },
    {
      question: "Hva er et viktig forste punkt i en ovelsesplan?",
      options: ["A definere formaalet med ovelsen", "A bestemme lunsjmenyen", "A avlyse ovelsen", "A skjule scenariet for arrangoren"],
      explanation: "En ovelsesplan starter med a definere formaalet (for eksempel a teste brannberedskapen), som styrer scenario, deltakere og hva som skal evalueres.",
    },
  ],
};

export default quizData_sikkerhetsfag;
