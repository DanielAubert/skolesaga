import type { QuizQuestion } from './quiz-data';

const quizData_trening: Record<string, QuizQuestion[]> = {
  'trening-1-1': [
  {
    question: 'Hva sier overbelastningsprinsippet?',
    options: ['Kroppen måutsettes for større belastning enn den er vant til for a tilpasse seg', 'Man bør alltid trene til utmattelse', 'Mer trening er alltid bedre', 'Kroppen tilpasser seg best med lite belastning'],
    explanation: 'Overbelastningsprinsippet sier at kroppen måutsettes for en belastning utover det normale for a stimulære til tilpasning og utvikling. Uten tilstrekkelig belastning vil kroppen ikke ha grunn til a tilpasse seg.',
  },
  {
    question: 'Hva er superkompensasjon?',
    options: ['Kroppens tilpasning til et høyere nivå etter trening og restitusjon', 'Nårman trener ekstrå hardt', 'A ta proteintilskudd etter trening', 'Oppvarming for trening'],
    explanation: 'Superkompensasjon er prosessen der kroppen ikke bare reparerer seg etter trening, men bygger seg opp til et høyere funksjonsnivå enn for. Dette er grunnlaget for treningsfremgang.',
  },
  {
    question: 'Hva betyr spesifisitetsprinsippet?',
    options: ['Kroppen tilpasser seg spesifikt til den typen belastning den utsettes for', 'All trening gir samme effekt', 'Man måtrene alt samtidig', 'Spesialisering er alltid dårlig'],
    explanation: 'Spesifisitetsprinsippet betyr at treningen måvære malrettet. Vil du bli bedre til a lope, må du lope. Vil du bli sterkere, må du trene styrke.',
  },
  {
    question: 'Hvilke er de fem viktigste treningsvariablene?',
    options: ['Intensitet, volum, frekvens, varighet og type', 'Bare vekt og repetisjoner', 'Kun tid og distanse', 'Bare antall økter per uke'],
    explanation: 'De fem hovedvariablene - intensitet, volum, frekvens, varighet og type - kan justeres for a tilpasse treningen til ulike mal og behov.',
  },
  {
    question: 'Hva er typiske tegn påovertrenning?',
    options: ['Vedvarende tretthet, nedsatt prestasjon, sovnproblemer og humorsvingninger', 'Øktstyrke og energi', 'Bedre sovn og appetitt', 'Raskere restitusjon'],
    explanation: 'Overtrenning viser seg gjennom fysiske og mentale symptomer som vedvarende tretthet, dårligere prestasjoner, sovnvansker, irritabilitet og økt skaderisiko.',
  },
],


  'trening-1-2': [
  {
    question: 'Hva er skjelettmuskulatur?',
    options: ['Viljestyrt muskulatur festet til skjelettet via sener', 'Hjertemuskelen', 'Glatt muskulatur i tarmene', 'Muskulatur som ikke kan kontrollæres'],
    explanation: 'Skjelettmuskulatur er den viljestyrte muskulaturen vi bruker til bevegelse, og den er festet til skjelettet via sener.',
  },
  {
    question: 'Hva kjennetegner type I muskelfibre?',
    options: ['Langsomme, utholdende, mange mitokondrier, bruker fett', 'Raske, kraftige, fa mitokondrier', 'Bare for kortvarig aktivitet', 'Hvite og eksplosive'],
    explanation: 'Type I fibre er røde, langsomme og utholdende. De har mange mitokondrier og god blodtilforsel, og bruker primaert fett som energikilde.',
  },
  {
    question: 'Hva er VO2maks?',
    options: ['Maksimal mengde oksygen kroppen kan ta opp og bruke per minutt', 'Maksimal puls', 'Maksimal styrke', 'Minste oksygenforbruk'],
    explanation: 'VO2maks måler kroppens maksimale evne til a ta opp og bruke oksygen, og er et viktig mal påaerob kapasitet.',
  },
  {
    question: 'Hvordan kontraherer en muskel?',
    options: ['Aktin og myosin glir over hverandre og forkorter sarkomerene', 'Muskelen pumpes opp med luft', 'Bare nervesignaler er nødvendig', 'Muskelen strekkes ut'],
    explanation: 'Muskelkontraksjon skjer ved glidefiberteorien, der aktin- og myosinfilamentene glir over hverandre og forkorter sarkomerene. Dette krever ATP og kalsium.',
  },
  {
    question: 'Hvilke tilpasninger skjer i hjerte-kar-systemet ved utholdenhetstrening?',
    options: ['Større hjerte, lavere hvilepuls, flere kapillærer, høyere VO2maks', 'Mindre hjerte, høyere hvilepuls', 'Ingen endringer i hjertet', 'Bare musklene påvirkes'],
    explanation: 'Utholdenhetstrening gir et større og sterkere hjerte, lavere hvilepuls, økt blodvolum, flere kapillærer og høyere VO2maks.',
  },
],


  'trening-1-3': [
  {
    question: 'Hva er ATP?',
    options: ['Kroppens energivaluta som leverer energi til cellenes arbeid', 'Et vitamin', 'En muskeltype', 'Et hormon'],
    explanation: 'ATP (adenosintrifosfat) er molekylet som direkte driver alle energikrevende prosesser i cellene, inkludert muskelkontraksjon.',
  },
  {
    question: 'Hvilket energisystem dominerer under en 100m sprint?',
    options: ['Det fosfagene systemet (ATP-CP)', 'Det glykolytiske systemet', 'Det aerobe systemet', 'Alle like mye'],
    explanation: 'En 100m sprint varer under 10-15 sekunder og drives primaert av lagret ATP og kreatinfosfat (det fosfagene systemet).',
  },
  {
    question: 'Hva er anærob terskel?',
    options: ['Intensiteten der melkesyreproduksjonen overstiger fjerningsevnen', 'Maksimal puls', 'Den laveste intensiteten', 'Hvilepuls'],
    explanation: 'Ved anærob terskel produseres melkesyre like fort som den fjernes. Over denne terskelen akkumulæres laktat og utmattelse inntrer raskere.',
  },
  {
    question: 'Hvilken energikilde dominerer ved lav intensitet?',
    options: ['Fett', 'Karbohydrater', 'Protein', 'Bare ATP'],
    explanation: 'Ved lav intensitet bruker kroppen primaert fett som energikilde fordi det aerobe systemet har tid til a forbrenne fettsyrer effektivt.',
  },
  {
    question: 'Hvor lenge kan det fosfagene systemet levere energi?',
    options: ['0-10 sekunder', '2-5 minutter', 'Over 30 minutter', '1-2 timer'],
    explanation: 'Det fosfagene systemet (ATP-CP) gir umiddelbar energi i 0-10 sekunder ved maksimal intensitet, for eksempel under sprint eller tunge loft.',
  },
],


  'trening-1-4': [
  {
    question: 'Hva er forskjellen mellom maksimal styrke og eksplosiv styrke?',
    options: ['Maksimal styrke er størst mulig kraft, eksplosiv styrke er kraft utviklet raskt', 'De er det samme', 'Eksplosiv styrke er alltid større', 'Maksimal styrke er bare for vektloftere'],
    explanation: 'Maksimal styrke handler om hvor mye kraft du kan utvikle uavhengig av tid, mens eksplosiv styrke (power) handler om a utvikle kraft raskt - kraft x hastighet.',
  },
  {
    question: 'Hvilken treningsprotokoll er best for hypertrofi (muskelvekst)?',
    options: ['6-12 repetisjoner med 65-85% av 1RM, moderate pauser', '1-3 repetisjoner med maksimal vekt', '50+ repetisjoner med lett vekt', 'Ingen styrketrening'],
    explanation: 'Hypertrofi oppnas best med moderat antall repetisjoner (6-12) og moderat intensitet (65-85% 1RM) som gir både mekanisk spenning og metabolsk stress.',
  },
  {
    question: 'Hva er en flerleddsovelse?',
    options: ['Ovelse som involverer flere ledd og muskelgrupper, f.eks. knebay', 'Ovelse som bare bruker ett ledd', 'Ovelse uten vekt', 'Bare ovelser med maskiner'],
    explanation: 'Flerleddsovelser (compound) involverer flere ledd og muskelgrupper samtidig, som knebay (hofte, kne, ankel) og benkpress (skulder, albue).',
  },
  {
    question: 'Hvorfor er pauser viktige i styrketrening?',
    options: ['Pausene lar ATP og kreatinfosfat gjenopprettes for maksimal kraftutvikling', 'Pausene har ingen betydning', 'Jo kortere pauser, jo bedre alltid', 'Pauser er bare for a hvile'],
    explanation: 'Pauselengden påvirker energisystemene. Lange pauser gir full gjenoppretting av ATP-CP for maksimal styrke, mens kortere pauser gir metabolsk stress for hypertrofi.',
  },
  {
    question: 'Hva er 1RM?',
    options: ['Den maksimale vekten du kan lofte en gang med korrekt teknikk', 'Antall repetisjoner i et sett', 'Hvilepauser mellom sett', 'Treningstid per økt'],
    explanation: '1RM (One Repetition Maximum) er den maksimale vekten du kan lofte en gang med korrekt teknikk i en gitt ovelse. Det brukes som referansepunkt for a bestemme treningsintensitet.',
  },
],


  'trening-1-5': [
  {
    question: 'Hva er forskjellen mellom aerob og anærob utholdenhet?',
    options: ['Aerob bruker oksygen over lang tid, anærob er høy intensitet uten tilstrekkelig oksygen', 'De er det samme', 'Anærob varer lengst', 'Aerob er alltid mest intensiv'],
    explanation: 'Aerob utholdenhet involverer langvarig arbeid med oksygen (under anærob terskel), mens anærob utholdenhet er høyintensitetsarbeid der oksygentilorselen ikke rekker a dekke behovet.',
  },
  {
    question: 'Hva er 80/20-regelen i utholdenhetstrening?',
    options: ['80% av treningen ved lav intensitet, 20% ved høy intensitet', '80% styrke, 20% utholdenhet', '80% intervaller, 20% langkjoring', 'Trene 80 minutter, hvile 20'],
    explanation: 'Polarisert trening (80/20) anbefaler at mesteparten av treningen gjøres rolig (sone 1-2), med en mindre andel høyintensiv trening (sone 4-5). Dette gir best langsiktig utvikling.',
  },
  {
    question: 'Hvilken intensitetssone trener man typisk langkjoring i?',
    options: ['Sone 2 (60-70% av makspuls)', 'Sone 5 (90-100%)', 'Sone 4 (80-90%)', 'Det spiller ingen rolle'],
    explanation: 'Langkjoring utføres typisk i sone 2 (moderat intensitet) for a bygge aerob grunnlag og forbrenne fett effektivt over lang tid.',
  },
  {
    question: 'Hva er HIIT?',
    options: ['High-Intensity Interval Training - korte perioder med maksimal innsats og hvileperioder', 'Rolig langkjoring', 'Bare styrketrening', 'Yoga og toying'],
    explanation: 'HIIT (High-Intensity Interval Training) er korte, intense intervaller nær maksimal kapasitet, etterfulgt av hvile- eller lavintensitetsperioder.',
  },
  {
    question: 'Hva måler Borgs skala (RPE)?',
    options: ['Opplevd anstrengelse påen skala fra 6-20', 'Maksimal puls', 'Antall repetisjoner', 'Treningsvolum'],
    explanation: 'Borgs skala (Rate of Perceived Exertion) måler subjektiv opplevelse av anstrengelse. 12-14 er moderat, 15-17 er høyt, og 18-20 er maksimalt.',
  },
],


  'trening-1-6': [
  {
    question: 'Hva er bevegelighet?',
    options: ['Evnen til a bevege ledd gjennom sitt fulle bevegelsesutslag', 'Hvor fort man kan lope', 'Muskelstyrke', 'Reaksjonsevne'],
    explanation: 'Bevegelighet beskriver hvor stort bevegelsesutslag et ledd har, påvirket av leddanatomi, muskulatur og nervesystemet.',
  },
  {
    question: 'Hvilken toyingsmetode egner seg best som oppvarming?',
    options: ['Dynamisk toying', 'Langvarig statisk toying', 'PNF-toying', 'Ingen toying'],
    explanation: 'Dynamisk toying med kontrollerte bevegelser er best egnet som oppvarming fordi det øker kroppstemperatur og blodgjennomstrømning uten a redusere kraft.',
  },
  {
    question: 'Hvorfor kan statisk toying redusere kraft rett for eksplosiv aktivitet?',
    options: ['Langvarig strekk reduserer midlertidig muskelstivhet og nervaktivering', 'Det øker kraften', 'Det har ingen effekt', 'Statisk toying styrker musklene'],
    explanation: 'Langvarig statisk toying (over 60 sekunder) kan midlertidig redusere muskelstivhet og nervaktivering, noe som kan påvirke kraft og power negativt.',
  },
  {
    question: 'Hva er de tre stadiene i motorisk læring?',
    options: ['Kognitivt, assosiativt, autonomt', 'Autonomt, kognitivt, assosiativt', 'Assosiativt, autonomt, kognitivt', 'Det er bare ett stadium'],
    explanation: 'Motorisk læring gårfra kognitivt stadium (forstå og prove), via assosiativt stadium (forbedre og forfine), til autonomt stadium (automatisert bevegelse).',
  },
  {
    question: 'Hva er koordinasjon?',
    options: ['Evnen til a styre og kontrollære kroppens bevegelser effektivt og presist', 'Bare balanse', 'Muskelstyrke', 'Utholdenhet'],
    explanation: 'Koordinasjon er samspillet mellom nervesystem, sanser og muskler for a utføre kontrollerte, effektive bevegelser.',
  },
],


  'trening-1-7': [
  {
    question: 'Hvilken makronæringsstoff gir raskest energi under trening?',
    options: ['Karbohydrater', 'Fett', 'Protein', 'Vitaminer'],
    explanation: 'Karbohydrater er den raskeste energikilden og dominerer ved høy intensitet. De lagres som glykogen i muskler og lever.',
  },
  {
    question: 'Hvor mye protein anbefales daglig for idrettsutovere?',
    options: ['1.4-2.0 gram per kg kroppsvekt', '0.2 gram per kg', '5 gram per kg', 'Protein er ikke viktig'],
    explanation: 'Idrettsutovere trenger mer protein enn inaktive for a støtte muskelbygging og restitusjon. Anbefalt mengde er 1.4-2.0 g/kg/dag.',
  },
  {
    question: 'Nårbor man spise etter trening for optimal restitusjon?',
    options: ['Innen 30-60 minutter etter trening', 'Minst 4 timer etter', 'Det spiller ingen rolle', 'Man bør faste etter trening'],
    explanation: 'Innen 30-60 minutter etter trening er musklene mest mottakelige for næringsopptak. Et maltid med karbohydrater og protein fremmer restitusjon.',
  },
  {
    question: 'Hva er dehydrering?',
    options: ['Vaeske tap som nedsetter prestasjon og helse', 'For mye vaeskeinntak', 'En type treningsmetode', 'Tap av muskelmasse'],
    explanation: 'Dehydrering oppstar nårkroppen taper mer vaeske enn den fårtilfort. Allærede 2% vekttap i vaeske kan nedsette prestasjon betydelig.',
  },
  {
    question: 'Hva er karbohydratlading?',
    options: ['A fylle glykogenlagrene for langvarig konkurranse', 'A spise minimalt med karbohydrater', 'En type styrketrening', 'A trene påtom mage'],
    explanation: 'Karbohydratlading (carboloading) er en strategi for a maksimere glykogenlagrene for utholdenhetsprestasjon gjennom økt karbohydratinntak 1-3 dager for konkurranse.',
  },
],


  'trening-2-1': [
  {
    question: 'Hva er superkompensasjon i avansert forstånd?',
    options: ['At kroppen bygger seg sterkere enn utgangspunktet etter trening og restitusjon', 'At kroppen blir svakere etter trening', 'At kroppen gjenoppretter seg til nøyaktig utgangsnivåt', 'At kroppen trenger mer hvile enn vanlig'],
    explanation: 'Superkompensasjon er prosessen der kroppen ikke bare gjenoppretter seg til utgangsnivåt etter trening, men faktisk bygger seg sterkere enn for. Timing av neste økt er kritisk.',
  },
  {
    question: 'Hva inneberer spesifisitetsprinsippet påhøyt nivå?',
    options: ['At treningen måvære tilpasset idretten man ønsker å bli bedre i', 'At all trening bør være identisk', 'At man kun skal trene en egenskap om gangen', 'At man skal variere treningen mest mulig'],
    explanation: 'Spesifisitetsprinsippet sier at treningen måvære spesifikk for idretten eller ferdigheten man ønsker a forbedre. Dette inkluderer bevegelse, energisystem, muskulatur og hastighet.',
  },
  {
    question: 'Hvilken treningsmetode er best egnet for a utvikle maksimal styrke?',
    options: ['5 sett x 3 repetisjoner med 90% av 1RM', '3 sett x 15 repetisjoner med 60% av 1RM', '4 sett x 20 repetisjoner med 50% av 1RM', '2 sett x 8 repetisjoner med 70% av 1RM'],
    explanation: 'Maksimal styrke utvikles best med tung belastning (85-100% av 1RM) og lave repetisjoner (1-5). Dette stimulærer primaert nevrale tilpasninger.',
  },
  {
    question: 'Hva er 10%-regelen i treningsprogresjon?',
    options: ['Ikke ok treningsbelastningen med mer enn 10% per uke', 'Tren 10% av tiden påhoy intensitet', 'Hvil 10% av treningstiden', 'Ok vekten med 10% hver økt'],
    explanation: 'En vanlig anbefaling er a ikke oke treningsbelastningen med mer enn 10% per uke for å unngå skader og overtrenning.',
  },
  {
    question: 'Hvorfor trenger veteranutovere (over 35 ar) lengre restitusjon?',
    options: ['Redusert hormonnivå, tregere proteinsyntese og svakere immunforsvar', 'De trener hardere', 'De har mer erfaring', 'De trenger ikke lengre restitusjon'],
    explanation: 'Med alderen reduseres kroppens evne til a reparere vev. Hormonproduksjonen synker, proteinsyntesen gårlangsommere, og immunforsvåret blir mindre effektivt.',
  },
],


  'trening-2-2': [
  {
    question: 'Hva er hovedforskjellen mellom lineaer og bolgeformet periodisering?',
    options: ['Bolgeformet periodisering varierer treningsfokus oftere enn lineaer', 'Lineaer periodisering bruker kun utholdenhetstrening', 'Lineaer periodisering har flere peaks per sesong', 'Bolgeformet periodisering bruker kun styrketrening'],
    explanation: 'Bolgeformet periodisering varierer treningsfokus (volum, intensitet, type) fra dag til dag eller uke til uke, mens lineaer periodisering har lengre faser med gradvis overgang.',
  },
  {
    question: 'Hvilken rekkefølge har blokkene i blokkperiodisering?',
    options: ['Akkumulering - Transformasjon - Realisering', 'Realisering - Transformasjon - Akkumulering', 'Transformasjon - Akkumulering - Realisering', 'Akkumulering - Realisering - Transformasjon'],
    explanation: 'I blokkperiodisering kommer først Akkumulering (bygge kapasitet med høyt volum), deretter Transformasjon (konvertere til spesifikk form), og til slutt Realisering (peak prestasjon).',
  },
  {
    question: 'Hva bør reduseres mest under tapering?',
    options: ['Treningsvolum', 'Treningsintensitet', 'Sovn', 'Karbohydratinntak'],
    explanation: 'Under tapering bør treningsvolumet reduseres mest (40-60%), mens intensiteten holdes høy (90-100% av normalt). Dette gir kroppen tid til a restituere uten a miste form.',
  },
  {
    question: 'Hva er en makrosyklus?',
    options: ['Den lengste planleggingsperioden, typisk et åreller en olympiade', 'En enkelt treningsøkt', 'En uke med trening', 'En treningsovelse'],
    explanation: 'Makrosyklus er den lengste planleggingsperioden og omfatter typisk en hel sesong eller flere år. Den inneholder overordnede mal og fordeling av mesosykluser.',
  },
  {
    question: 'Hvor stor prestasjonforbedring kan optimal tapering gi i utholdenhet?',
    options: ['2-4%', '15-20%', '50%', 'Ingen forbedring'],
    explanation: 'Forskning viser at optimal tapering kan gi 2-4% forbedring i utholdenhetsprestasjon. Selv om dette virker lite, kan det være avgjørende påtoppnivå.',
  },
],


  'trening-2-3': [
  {
    question: 'Hva betyr det at en test har høy reliabilitet?',
    options: ['At testen gir konsistente resultater ved gjentatte malinger', 'At testen måler det den skal male', 'At testen er enkel a gjennomføre', 'At testen er billig a administrere'],
    explanation: 'Reliabilitet handler om testens pålitelighet - at den gir samme resultat ved gjentatte malinger under like forhold.',
  },
  {
    question: 'Hva er anærob terskel (LT2)?',
    options: ['Punktet der laktatproduksjonen overstiger fjerningen', 'Punktet der kroppen begynner å bruke fett', 'Maksimalt oksygenopptak', 'Den laveste intensiteten der laktat produseres'],
    explanation: 'Anærob terskel er intensiteten der laktatproduksjonen overstiger kroppens evne til a fjerne laktat. Over denne terskelen akkumulæres melkesyre.',
  },
  {
    question: 'Hvorfor er det viktig a standardisere testforhold?',
    options: ['For a sikre at forskjeller i resultater skyldes reelle endringer, ikke variasjoner i testforholdene', 'For å gjøre testen vanskeligere', 'For a spare tid', 'Det er ikke viktig'],
    explanation: 'Standardisering sikrer at forskjeller i testresultater skyldes reelle endringer i utoverens kapasitet, ikke variasjoner i testforholdene.',
  },
  {
    question: 'Hva måler en isokinetisk styrketest?',
    options: ['Kraft ved konstant hastighet gjennom hele bevegelsesutslaget', 'Bare maksimal styrke', 'Utholdenhet', 'Bevegelighet'],
    explanation: 'Isokinetisk testing måler kraft ved konstant hastighet, noe som gir informasjon om styrke gjennom hele bevegelsesutslaget.',
  },
  {
    question: 'Hva er ACWR (Acute:Chronic Workload Ratio)?',
    options: ['Forholdet mellom siste ukes belastning og 4-ukers gjennomsnitt', 'Antall treningstimer per år', 'Maksimal oksygenopptak', 'Hjertefrekvens under trening'],
    explanation: 'ACWR sammenligner siste ukes belastning med 4-ukers gjennomsnitt. Optimal ratio er 0.8-1.3, mens over 1.5 øker skaderisikoen.',
  },
],


  'trening-2-4': [
  {
    question: 'Hva er den viktigste risikofaktoren for ny skade?',
    options: ['Tidligere skade', 'Høy treningsbelastning', 'Dårlig utstyr', 'Kaldt vær'],
    explanation: 'Tidligere skade er konsekvent den sterkeste risikofaktoren for ny skade. Derfor er fullstendig rehabilitering såviktig.',
  },
  {
    question: 'Hva er optimal ACWR-verdi for å unngå skader?',
    options: ['0.8-1.3', '0.5-0.8', '1.5-2.0', '2.0-2.5'],
    explanation: 'Optimal ACWR er 0.8-1.3. Verdier over 1.5 øker skaderisikoen betydelig fordi belastningen øker for raskt.',
  },
  {
    question: 'Hva star POLICE for i akutt skadebehandling?',
    options: ['Protection, Optimal Loading, Ice, Compression, Elevation', 'Pain, Oxygen, Light, Ice, Cold', 'Pressure, Oil, Lifting, Ice, Care', 'Prevention, Observation, Lifting, Ice, Cooling'],
    explanation: 'POLICE-prinsippet står for Protection (beskyttelse), Optimal Loading (forsiktig belastning), Ice (is), Compression (kompresjon) og Elevation (heve skadet område).',
  },
  {
    question: 'Hvorfor er Nordic hamstring-ovelsen effektiv for a førebygge hamstringskader?',
    options: ['Den bygger eksentrisk styrke i hamstrings, som er fasen der de fleste skader oppstar', 'Den gir god oppvarming', 'Den øker bevegeligheten', 'Den styrker korsryggen'],
    explanation: 'Hamstringskader skjer typisk under eksentrisk kontraksjon i sprintfasen. Nordic hamstring bygger spesifikt eksentrisk styrke i denne muskelgruppen.',
  },
  {
    question: 'Hva er 10%-regelen for skadeførebygging?',
    options: ['Ikke ok treningsbelastningen med mer enn 10% per uke', 'Tren 10% av tiden påhoy intensitet', 'Hvil 10% av hver treningsøkt', 'Reduser vekten med 10% ved smerte'],
    explanation: '10%-regelen anbefaler a ikke oke treningsbelastningen med mer enn 10% per uke for a gi kroppen tid til a tilpasse seg og unngå overbelastningsskader.',
  },
],


  'trening-2-5': [
  {
    question: 'Hva er visualisering i mental trening?',
    options: ['Mentalt ove bevegelser eller situasjoner uten fysisk utførelse', 'A se påvideoer av andre', 'A tegne treningsplaner', 'A lese om teknikk'],
    explanation: 'Visualisering er a mentalt ove bevegelser, situasjoner eller prestasjoner uten fysisk utførelse. Det aktiverer lignende nevrale baner som faktisk utførelse.',
  },
  {
    question: 'Hva star SMART for i malsetting?',
    options: ['Spesifikk, Malbar, Attraktiv, Realistisk, Tidsbestemt', 'Sterk, Modig, Aktiv, Rask, Toff', 'Sikker, Mental, Aerob, Rolig, Teknisk', 'Styrke, Muskler, Armer, Rygg, Triceps'],
    explanation: 'SMART-modellen sikrer at mal er Spesifikke, Malbare, Attraktive/Akseptert, Realistiske og Tidsbestemte.',
  },
  {
    question: 'Hva er flow-tilstand?',
    options: ['Total absorpsjon i aktiviteten med følelse av kontroll og indre motivasjon', 'A være sliten under trening', 'A konkurrere mot andre', 'A følge en treningsplan'],
    explanation: 'Flow kjennetegnes av total absorpsjon, tap av tidsopplevelse, klar feedback, balanse mellom utfordring og ferdighet, og følelse av kontroll.',
  },
  {
    question: 'Hva er invertert U-hypotese?',
    options: ['Prestasjon er best ved moderat aktivering - for lav eller for høy aktivering gir dårligere prestasjon', 'Man bør alltid være maksimalt aktivert', 'Lav aktivering gir best prestasjon', 'Aktivering påvirker ikke prestasjon'],
    explanation: 'Invertert U-hypotese sier at prestasjon er best ved moderat aktivering. For lav aktivering gir slovhet, mens for høy aktivering gir nervositet og spenninger.',
  },
  {
    question: 'Hva er selvbestemmelsesteorien?',
    options: ['Teori om at motivasjon avhenger av autonomi, kompetanse og tilhørighet', 'Teori om at ytre motivasjon er viktigst', 'Teori om at talent er medfodt', 'Teori om periodisering'],
    explanation: 'Selvbestemmelsesteorien sier at indre motivasjon fremmes nårtre grunnleggende behov er tilfredsstilt: autonomi (valgfrihet), kompetanse (mestring) og tilhørighet (sosial tilknytning).',
  },
],


  'trening-3-1': [
  {
    question: 'Hva er superkompensasjonstiden for styrketrening?',
    options: ['48-72 timer', '12-24 timer', '1-2 uker', '6-8 timer'],
    explanation: 'Styrketrening har typisk 48-72 timer superkompensasjonstid, men dette varierer individuelt og avhenger av treningsbelastning.',
  },
  {
    question: 'Hva kjennetegner blokkperiodisering?',
    options: ['Konsentrerte belastningsblokker med fokus påen egenskap per blokk', 'Lik trening hele året', 'Bare utholdenhetstrening', 'Trening uten plan'],
    explanation: 'Blokkperiodisering følger monsteret akkumulering (bygge kapasitet), transmutasjon (konvertere), realisering (peak). Hver blokk fokuserer påen hovedegenskap.',
  },
  {
    question: 'Hva er autoregulering i trening?',
    options: ['Justering av belastning basert pådagsform og respons', 'A alltid trene med maksimal intensitet', 'Automatisk treningsprogram', 'A trene uten trener'],
    explanation: 'Autoregulering bruker verktoy som RPE-skala eller velocity-based training til a justere dagens belastning basert påutoverens faktiske kapasitet den dagen.',
  },
  {
    question: 'Hva er polarisert trening?',
    options: ['80% lav intensitet og 20% høy intensitet, lite påterskel', '50% styrke og 50% utholdenhet', 'Bare høyintensitetstrening', 'Bare lavintensitetstrening'],
    explanation: 'Polarisert trening unngår grå sone-trening (moderat intensitet) og fordeler trening mellom lett (75-80%) og hardt (15-20%), med lite påterskel.',
  },
  {
    question: 'Hva er PAP (Post-Activation Potentiation)?',
    options: ['Øktkraftutvikling etter en tung muskelaktivering', 'Hvile etter trening', 'Oppvarming for konkurranse', 'En type toying'],
    explanation: 'PAP er fenomenet der en tung styrkeovelse midlertidig øker kraftutvikling i pafølgende eksplosive ovelser. Brukes i complex training.',
  },
],


  'trening-3-2': [
  {
    question: 'Hva er biologisk alder?',
    options: ['Hvor langt en person har kommet i fysisk utvikling, uavhengig av kronologisk alder', 'Antall åren person har levd', 'Alderen i passet', 'Mental modenhet'],
    explanation: 'Biologisk alder beskriver fysisk modningsnivå. To 12-åringer kan ha flere ars forskjell i biologisk alder, noe som har stor betydning for treningstilpasning.',
  },
  {
    question: 'Hva er Peak Height Velocity (PHV)?',
    options: ['Tidspunktet for maksimal veksthastighet under puberteten', 'Maksimal løpshastighet', 'Høyeste hopphøyde', 'Beste treningsform'],
    explanation: 'PHV er tidspunktet for maksimal veksthastighet. Jenter opplever typisk PHV ved 11-12 år, gutter ved 13-14 år. Skjelettet er ekstra sårbart under PHV.',
  },
  {
    question: 'Hvilken type trening bør prioriteres for barn (6-12 år)?',
    options: ['Allsidig bevegelseserfaring, lek og koordinasjon', 'Tung styrketrening', 'Spesialisert idrettstrening', 'Maksimal utholdenhetstrening'],
    explanation: 'Barn har høy læreevne for bevegelser og bør utvikle et bredt bevegelsesfundament gjennom lek og allsidig aktivitet.',
  },
  {
    question: 'Hva er sarkopeni?',
    options: ['Aldersrelatert tap av muskelmasse og muskelstyrke', 'En type muskeltrening', 'Øktmuskelmasse med alderen', 'En bensykdom'],
    explanation: 'Sarkopeni er aldersrelatert tap av muskelmasse (3-5% per tiar etter 30). Det kan motvirkes effektivt med styrketrening, også hos eldre.',
  },
  {
    question: 'Hva er problemet med tidlig spesialisering i idrett?',
    options: ['Øktskaderisiko, dropout og dårligere langsiktig utvikling', 'Bedre prestasjoner', 'Sterkere motivasjon', 'Ingen negative konsekvenser'],
    explanation: 'Tidlig spesialisering (for 12-14 ar) er assosiert med økt skaderisiko, dropout og dårligere langsiktig utvikling. Allsidig aktivitet i barnealder gir best grunnlag.',
  },
],


  'trening-3-3': [
  {
    question: 'Hva er en behovsanalyse?',
    options: ['Systematisk gjennomgang av idrettens fysiske, tekniske, taktiske og mentale krav', 'En test av maksimal styrke', 'Maling av VO2max', 'Teknisk analyse av bevegelser'],
    explanation: 'Behovsanalysen identifiserer idrettens krav og utoverens styrker og svakheter, og danner grunnlag for a prioritere treningsinnhold og metoder.',
  },
  {
    question: 'Hva kjennetegner polarisert treningsfordeling i utholdenhetsidrett?',
    options: ['75-80% lett, 15-20% hardt, lite påterskel', '50% lett, 50% hardt', '100% høy intensitet', '33% i hver intensitetssone'],
    explanation: 'Polarisert trening unngår grå sone-trening og har vist gode resultater i forskning påutholdenhetsutovere.',
  },
  {
    question: 'Hvilke fysiske egenskaper er viktigst i ballspill?',
    options: ['Gjentatte sprinter, retningsendringer, hoppkapasitet og aerob utholdenhet', 'Bare maksimal utholdenhet', 'Bare maksimal styrke', 'Bare bevegelighet'],
    explanation: 'Ballspill krever en kombinasjon av mange fysiske egenskaper: gjentatte sprinter, retningsendringer, hoppkapasitet, kontaktstyrke og aerob utholdenhet for restitusjon.',
  },
  {
    question: 'Hva menes med overforingsverdi i trening?',
    options: ['Hvor mye treningseffekten fra en ovelse bidrar til prestasjon i idretten', 'A bytte fra en idrett til en annen', 'A overføre penger til treningsklubb', 'A kopiere andres treningsprogram'],
    explanation: 'Overforingsverdi kan være positiv, nøytral eller negativ. Jo nærmere konkurransesituasjonen, jo mer spesifikk bør treningen være.',
  },
  {
    question: 'Hva kjennetegner styrketrening for ballspill?',
    options: ['Funksjonell styrke, unilaterale ovelser, eksplosivitet og skadeførebygging', 'Bare maksimal styrke', 'Bare maskintrening', 'Bare utholdenhetstrening'],
    explanation: 'Styrketrening for ballspill fokuserer påfunksjonell styrke, enbeins ovelser, eksplosivitet og skadeførebygging for områder som hamstrings og korsbånd.',
  },
],


  'trening-3-4': [
  {
    question: 'Hva er HRV (Heart Rate Variability)?',
    options: ['Variasjon i tid mellom hjerteslag, brukes som indikator pårestitusjon', 'Gjennomsnittlig hjertefrekvens', 'Maksimal hjertefrekvens', 'Hvilepuls'],
    explanation: 'HRV måler variasjon i tid mellom hjerteslag. Høyere HRV indikerer generelt bedre restitusjon og lavere stress.',
  },
  {
    question: 'Hva måler velocity-based training (VBT)?',
    options: ['Stangfart i styrkeovelser for a autoregulære belastning', 'Lopsfart', 'Hjertefrekvens', 'Kaloriforbruk'],
    explanation: 'VBT måler stangfart og gir objektiv tilbakemelding som muliggjør presisjon og autoregulering i styrketrening.',
  },
  {
    question: 'Hva er TSS (Training Stress Score)?',
    options: ['En metrikk som kvantifiserer treningsbelastning basert påintensitet og varighet', 'Antall repetisjoner', 'Treningsfrekvens', 'Sovnkvalitet'],
    explanation: 'TSS brukes til a planlegge progresjon og unngå overtrenning ved a kvantifisere den totale treningsbelastningen.',
  },
  {
    question: 'Hva er NIRS (Near-Infrared Spectroscopy)?',
    options: ['Sensor som måler lokal muskeloksygenering', 'GPS-tracking', 'Pulsmåler', 'Kraftplate'],
    explanation: 'NIRS-sensorer måler oksygentilgjengelighet i muskelvev og brukes i utholdenhetsidrett for a optimalisere intensitet.',
  },
  {
    question: 'Hvilke begrensninger har treningsteknologi?',
    options: ['Varierende nøyaktighet, dataoverload, kan overskygge kroppens signaler', 'Ingen begrensninger', 'For dyrt', 'Bare nyttig for elite'],
    explanation: 'Teknologi er et verktoy, ikke en erstatning for kunnskap og erfaring. Varierende nøyaktighet og dataoverload er vanlige utfordringer.',
  },
],


  'trening-3-5': [
  {
    question: 'Hva er evidensbasert trening?',
    options: ['Integrering av forskning, praktisk erfaring og individuelle behov', 'A blindt følge forskning', 'A bare bruke egen erfaring', 'A kopiere eliteutovere'],
    explanation: 'Evidensbasert trening balanserer beste tilgjengelige forskning med praktisk erfaring og utoverens individuelle behov og preferanser.',
  },
  {
    question: 'Hva er RCT (randomisert kontrollert forsok)?',
    options: ['Forsoksdesign med tilfeldig fordeling til kontroll- og intervensjonsgruppe', 'En type treningsovelse', 'En statistisk beregning', 'En mate a periodisere pa'],
    explanation: 'RCT er gullstandard for a pavise årsak-virkning i medisinsk forskning. Deltakere fordeles tilfeldig til kontroll- eller intervensjonsgruppe.',
  },
  {
    question: 'Hva er publikasjonsbias?',
    options: ['Tendensen til at positive funn publiseres oftere enn negative', 'Feil i publisering', 'Plagiering', 'Mangel påpublisering'],
    explanation: 'Publikasjonsbias kan føre til at effekter overestimeres i litteraturen fordi negative studier sjeldnere publiseres.',
  },
  {
    question: 'Hva er forskjellen mellom statistisk og praktisk signifikans?',
    options: ['Statistisk betyr at resultatet neppe er tilfeldig, praktisk at effekten er stor nok til å ha betydning', 'De betyr det samme', 'Statistisk er viktigere enn praktisk', 'Praktisk betyr at det er utfort i praksis'],
    explanation: 'En liten effekt kan være statistisk signifikant med stort utvalg, men uten praktisk betydning. Begge måvurderes.',
  },
  {
    question: 'Hva er en meta-analyse?',
    options: ['Kvantitativ sammenslaing av flere studier for a beregne samlet effektstørrelse', 'En enkelt studie', 'En type trening', 'En treningstest'],
    explanation: 'Meta-analyser kombinerer data fra flere studier for a gi et sterkere bevis og avdekke monstre som enkeltstudier kan misse.',
  },
],


  'trening-3-6': [
  {
    question: 'Hva er Olympiatoppens rolle?',
    options: ['Nasjonal koordinering av toppidrett, kompetansesenter og støtte til utovere', 'A arrangere OL', 'A trene breddeidrett', 'A bygge idrettsanlegg'],
    explanation: 'Olympiatoppen koordinerer norsk toppidrett og tilbyr tverrfaglig støtte til sarforbund og utovere, inkludert fysisk, mental og medisinsk oppfolging.',
  },
  {
    question: 'Hva er LTAD (Long-Term Athlete Development)?',
    options: ['En modell for langsiktig utoverutvikling gjennom ulike stadier', 'En treningsmetode', 'En type periodisering', 'En dopingtest'],
    explanation: 'LTAD fokuserer påriktig utvikling til riktig tid i utoverens karriere, fra FUNdamentals til Training to Win.',
  },
  {
    question: 'Hva er relativ alderseffekt (RAE)?',
    options: ['At barn fodt tidlig pååret har fordel i aldersbestemte klasser', 'At eldre utovere presterer bedre', 'At biologisk alder er viktigere enn kronologisk', 'At talent avhenger av alder'],
    explanation: 'RAE kan føre til at senmodne talenter overses i talentutvikling fordi barn fodt tidlig pååret har fysiske fordeler i aldersbestemte klasser.',
  },
  {
    question: 'Hvor mange timer trening per uke er typisk for toppidrettsutovere?',
    options: ['20-35 timer', '5-10 timer', '50-60 timer', '2-3 timer'],
    explanation: 'Toppidrettsutovere trener typisk 20-35 timer per uke, avhengig av idrett. Dette krever profesjonalisering av alle aspekter ved livsstil.',
  },
  {
    question: 'Nevn tre etiske utfordringer i toppidrett.',
    options: ['Doping, helse vs. prestasjon, og livet etter karrieren', 'For mye trening', 'For lite trening', 'Dårlige fasiliteter'],
    explanation: 'Toppidrett stiller store etiske krav. Doping, balanse mellom helse og prestasjon, og utfordringer med overgang til livet etter karrieren er sentrale temaer.',
  },
],


  'trening-3-7': [
  {
    question: 'Hvor mange timer sovn anbefales for voksne idrettsutovere?',
    options: ['7-9 timer', '4-5 timer', '10-12 timer', 'Sovn er ikke viktig'],
    explanation: 'Voksne idrettsutovere bør få 7-9 timer sovn per natt. Sovn er avgjørende for restitusjon, hormonbalanse og kognitiv funksjon.',
  },
  {
    question: 'Hva er RED-S (Relative Energy Deficiency in Sport)?',
    options: ['Tilstand der energiinntaket er utilstrekkelig i forhold til energiforbruket', 'En type treningsmetode', 'En dopingform', 'Overtrening'],
    explanation: 'RED-S oppstar nårenergiinntaket er for lavt i forhold til forbruket, og påvirker helse, prestasjon og mentalt velvare negativt.',
  },
  {
    question: 'Hva er riktig hydrering under trening?',
    options: ['Drikke regelmessig, 150-300 ml hvert 15-20 minutt', 'Bare drikke nårman er torst', 'Drikke så mye som mulig', 'Ikke drikke under trening'],
    explanation: 'Anbefalt vaeskeinntak under trening er ca. 150-300 ml hvert 15-20 minutt, tilpasset svettetap og forhold.',
  },
  {
    question: 'Hva er overtrening?',
    options: ['Kronisk ubalanse mellom belastning og restitusjon som fører til nedsatt prestasjon', 'A trene for lite', 'Normal tretthet etter trening', 'A ha for mange treningsmaal'],
    explanation: 'Overtrening er en kronisk tilstand med vedvarende tretthet, nedsatt prestasjon, sovnproblemer og hormonelle førstyrrelser. Det krever langvarig hvile for å bli frisk.',
  },
  {
    question: 'Hvilke faktorer påvirker mental helse hos utovere?',
    options: ['Prestasjonspress, skader, identitet knyttet til idrett, og balanse i livet', 'Bare fysisk trening', 'Bare kosthold', 'Bare sovn'],
    explanation: 'Mental helse påvirkes av mange faktorer: prestasjonspress, skader, identitet knyttet til idrett, sosiale relasjoner og balanse mellom idrett og andre livsområder.',
  },
],


};

export default quizData_trening;
