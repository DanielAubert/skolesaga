import type { QuizQuestion } from './quiz-data';

const quizData_samfokonomi: Record<string, QuizQuestion[]> = {
  'samføkonomi-1-1': [
  {
    question: 'Hva er det grunnleggende økonomiske problemet som samfunnsøkonomi forsøker å løse?',
    options: ['Knapphet - at vi har ubegrensede behov men begrensede ressurser', 'At det er for mange bedrifter', 'At staten har for mye makt', 'At prisene er for høye'],
    explanation: 'Knapphet er det grunnleggende problemet. Fordi ressursene er begrensede mens behovene er ubegrensede, må vi gjøre valg.',
  },
  {
    question: 'Hva er alternativkostnad?',
    options: ['Verdien av det beste alternativet du gir opp når du tar et valg', 'Prisen på et alternativt produkt', 'Kostnaden ved å produsere et alternativ', 'Forskjellen mellom to priser'],
    explanation: 'Alternativkostnad viser den virkelige kostnaden ved et valg - hva du går glipp av ved å velge noe annet.',
  },
  {
    question: 'Hvilken av følgende er IKKE en produksjonsfaktor?',
    options: ['Penger', 'Arbeidskraft', 'Realkapital', 'Naturressurser'],
    explanation: 'Penger er et byttemiddel, ikke en produksjonsfaktor. Produksjonsfaktorene er arbeidskraft, realkapital, naturressurser og entreprenørskap.',
  },
  {
    question: 'Hva er forskjellen mellom mikroøkonomi og makroøkonomi?',
    options: ['Mikroøkonomi studerer enkeltaktører, makroøkonomi studerer økonomien som helhet', 'De studerer det samme', 'Mikroøkonomi er for små land', 'Makroøkonomi er teoretisk, mikro er praktisk'],
    explanation: 'Mikroøkonomi fokuserer på bedrifter og husholdninger, mens makroøkonomi ser på BNP, arbeidsledighet og inflasjon.',
  },
  {
    question: 'Hvem er de fire hovedaktørene i økonomien?',
    options: ['Husholdninger, bedrifter, det offentlige og utlandet', 'Staten, kommunene, fylkene og bedriftene', 'Arbeidsgivere, arbeidstakere, forbrukere og investorer', 'Banker, forsikring, handel og industri'],
    explanation: 'De fire hovedaktørene er husholdninger (forbruk), bedrifter (produksjon), det offentlige (fellesgoder) og utlandet (handel).',
  },
],


  'samføkonomi-1-2': [
  {
    question: 'Hva er markedslikevekt?',
    options: ['Prisen der tilbudt mengde er lik etterspurt mengde', 'Den høyeste prisen i markedet', 'Den laveste prisen', 'Gjennomsnittsprisen over tid'],
    explanation: 'I markedslikevekt er tilbud lik etterspørsel. Det er verken overskudd eller underskudd.',
  },
  {
    question: 'Hva skjer i et marked der prisen er høyere enn likevektsprisen?',
    options: ['Det blir overskudd fordi tilbudet er større enn etterspørselen', 'Det blir underskudd', 'Markedet er i balanse', 'Prisen vil stige ytterligere'],
    explanation: 'Høy pris gir høyt tilbud men lav etterspørsel, noe som skaper overskudd.',
  },
  {
    question: 'Hva er prissystemets hovedfunksjoner?',
    options: ['Å gi informasjon, alløkere ressurser og skape insentiver', 'Å garantere lik fordeling', 'Å holde prisene stabile', 'Å beskytte forbrukerne'],
    explanation: 'Prissystemet informerer om knapphet, fordeler ressurser til høyest verdsatt bruk og motiverer aktørene.',
  },
  {
    question: 'Hva menes med Adam Smiths usynlige hånd?',
    options: ['At markedet koordinerer beslutninger uten sentral planlegging', 'At staten styrer økonomien i det skjulte', 'At bankene kontrollærer markedet', 'At monopoler dominerer'],
    explanation: 'Den usynlige hånd beskriver hvordan individers egeninteresse gjennom prissystemet bidrar til samfunnets beste.',
  },
  {
    question: 'Hva skjer når prisen er lavere enn likevektsprisen?',
    options: ['Det oppstår underskudd og prisen presses oppover', 'Det oppstår overskudd', 'Markedet er i balanse', 'Produksjonen stopper'],
    explanation: 'Lav pris gir høy etterspørsel men lavt tilbud, noe som skaper underskudd og presser prisen opp.',
  },
],


  'samføkonomi-1-3': [
  {
    question: 'Hva sier etterspørselsloven?',
    options: ['Når prisen øker, vil etterspurt mengde avta (ceteris paribus)', 'Når prisen øker, vil etterspørselen øke', 'Etterspørselen er alltid konstant', 'Prisen bestemmes av etterspørselen alene'],
    explanation: 'Etterspørselsloven sier at høyere pris gir lavere etterspørsel, alt annet likt.',
  },
  {
    question: 'Hva skjer med etterspørselskurven for smør hvis prisen på margarin øker?',
    options: ['Etterspørselskurven for smør skifter utover (øker)', 'Kurven skifter innover', 'Kurven er uendret', 'Vi beveger oss langs kurven'],
    explanation: 'Smør og margarin er substitutter. Høyere margarinpris gjør at flere velger smør.',
  },
  {
    question: 'Hva betyr det at en vare har uelastisk etterspørsel?',
    options: ['Etterspørselen er lite følsom for prisendringer', 'Etterspørselen endres mye ved prisendring', 'Varen er uerstattelig', 'Prisen er fastlåst'],
    explanation: 'Uelastisk etterspørsel betyr at prisendringer har liten effekt på etterspurt mengde, typisk for nødvendighetsgoder.',
  },
  {
    question: 'Hva skifter tilbudskurven innover?',
    options: ['Økte produksjonskostnader', 'Lavere priser på varen', 'Flære kjøpere', 'Bedre teknologi'],
    explanation: 'Høyere kostnader gjør det mindre lønnsomt å produsere, så tilbudet avtar ved alle priser.',
  },
  {
    question: 'Hva er forskjellen mellom bevegelse langs og skift i etterspørselskurven?',
    options: ['Prisendring gir bevegelse langs kurven, andre faktorer gir skift', 'Det er ingen forskjell', 'Skift skjer bare ved store endringer', 'Bevegelse skjer bare på kort sikt'],
    explanation: 'Endring i varens egen pris gir bevegelse langs kurven. Andre faktorer som inntekt eller substituttpriser gir skift.',
  },
],


  'samføkonomi-1-4': [
  {
    question: 'Hvilken markedsform kjennetegnes av mange små aktører og homogene produkter?',
    options: ['Fullkommen konkurranse', 'Monopol', 'Oligopol', 'Monopolistisk konkurranse'],
    explanation: 'Fullkommen konkurranse har mange aktører, identiske produkter, fri etablering og ingen kan påvirke prisen.',
  },
  {
    question: 'Hva er hovedårsaken til at monopoler kan opprettholde høyere priser?',
    options: ['Etableringsbarrierer hindrer konkurrenter', 'Forbrukerne føretrekker monopolister', 'Monopolister har lavere kostnader', 'Det finnes ingen substitutter'],
    explanation: 'Uten barrierer ville høye priser tiltrekke konkurrenter som presser prisene ned.',
  },
  {
    question: 'Hvilket marked er et eksempel på oligopol i Norge?',
    options: ['Dagligvaremarkedet (Norgesgruppen, Coop, Rema)', 'Aksjemarkedet', 'Bruktbilmarkedet', 'Restaurantbransjen'],
    explanation: 'Dagligvaremarkedet domineres av få store aktører som må ta hensyn til hverandres strategier.',
  },
  {
    question: 'Hva er dødvektstap?',
    options: ['Tap av samfunnsnytte når produksjonen er lavere enn optimalt', 'Tap av penger for bedriften', 'Tap av kunder', 'Kostnader ved nedleggelse'],
    explanation: 'Dødvektstap oppstår når monopolmakt gjør at transaksjoner som ville vært samfunnsnyttige ikke gjennomføres.',
  },
  {
    question: 'Hva er et naturlig monopol?',
    options: ['Et monopol der stordriftsfordeler gjør at én bedrift kan forsyne markedet billigst', 'Et monopol på naturressurser', 'Et monopol som har oppstått naturlig', 'Et monopol uten statlig regulering'],
    explanation: 'Naturlige monopoler oppstår når stordriftsfordeler er så store at én bedrift er mest effektivt, som vann- og strømnett.',
  },
],


  'samføkonomi-1-5': [
  {
    question: 'Hva måler bruttonasjonalprodukt (BNP)?',
    options: ['Verdien av alle ferdige varer og tjenester produsert i et land', 'Verdien av alle varer som eksporteres', 'Summen av alle lønninger', 'Verdien av alle naturressurser'],
    explanation: 'BNP måler den samlede verdiskapingen innenfor et lands grenser i en periode.',
  },
  {
    question: 'Hva er forskjellen mellom nominelt og reelt BNP?',
    options: ['Reelt BNP er justert for inflasjon, nominelt er ikke', 'Nominelt inkluderer eksport, reelt gjør ikke', 'Reelt måler bare industri', 'Nominelt er per innbygger'],
    explanation: 'Reelt BNP viser faktisk produksjonsendring ved å justere for prisendringer.',
  },
  {
    question: 'Hva er formelen for BNP med utgiftsmetoden?',
    options: ['BNP = C + I + G + (X - M)', 'BNP = Produksjon - Kostnader', 'BNP = Lønn + Profitt', 'BNP = Eksport - Import'],
    explanation: 'Utgiftsmetoden summerer privat konsum, investeringer, offentlig forbruk og nettoeksport.',
  },
  {
    question: 'Hvorfor bruker vi BNP per innbygger når vi sammenligner land?',
    options: ['For å ta hensyn til forskjeller i befolkningsstørrelse', 'Fordi det er enklære å beregne', 'Fordi FN krever det', 'Fordi det gir høyere tall'],
    explanation: 'BNP per innbygger gir et bedre bilde av gjennomsnittlig levestandard uavhengig av landets størrelse.',
  },
  {
    question: 'Hva fanges IKKE opp av BNP?',
    options: ['Uformell økonomi, miljøkostnader og livskvalitet', 'Eksport og import', 'Offentlig forbruk', 'Private investeringer'],
    explanation: 'BNP måler ikke svart arbeid, frivillighet, miljøødeleggelse, fordeling eller ikke-materielle verdier.',
  },
],


  'samføkonomi-1-6': [
  {
    question: 'Hva kjennetegner en høykonjunktur?',
    options: ['Lav arbeidsledighet og høy kapasitetsutnyttelse', 'Høy arbeidsledighet og lav produksjon', 'Fallende BNP', 'Store ubrukte ressurser'],
    explanation: 'I høykonjunktur går økonomien for fullt med lite ledig kapasitet og press på lønninger og priser.',
  },
  {
    question: 'Hva er potensielt BNP?',
    options: ['Den produksjonen økonomien kan opprettholde uten inflasjonært press', 'Den høyeste produksjonen som er oppnådd', 'BNP justert for inflasjon', 'BNP per innbygger'],
    explanation: 'Potensielt BNP er det bærekraftige produksjonsnivået på lang sikt.',
  },
  {
    question: 'Hvilken type arbeidsledighet øker mest i en lavkonjunktur?',
    options: ['Konjunkturell arbeidsledighet', 'Strukturell arbeidsledighet', 'Friksjonell arbeidsledighet', 'Sesongledighet'],
    explanation: 'Konjunkturell ledighet skyldes svikt i samlet etterspørsel og øker i nedgangstider.',
  },
  {
    question: 'Hva er de fire fasene i en konjunktursyklus?',
    options: ['Oppgang, høykonjunktur, nedgang, lavkonjunktur', 'Vekst, stagnasjon, fall, krise', 'Produksjon, konsum, investering, eksport', 'Inflasjon, deflasjon, stagflasjon, hyperinflasjon'],
    explanation: 'Konjunktursyklusen går fra oppgang til topp, nedgang til bunn, og så ny oppgang.',
  },
  {
    question: 'Hva er den viktigste kilden til langsiktig økonomisk vekst?',
    options: ['Produktivitetsvekst gjennom teknologi og innovasjon', 'Befolkningsvekst alene', 'Økt offentlig forbruk', 'Import fra utlandet'],
    explanation: 'Produktivitetsvekst (TFP) øker produksjonen per arbeidstime og er avgjørende for varig velstandsøkning.',
  },
],


  'samføkonomi-1-7': [
  {
    question: 'Hva er pengenes tre funksjoner?',
    options: ['Byttemiddel, måleenhet og verdioppbevaring', 'Betaling, sparing og investering', 'Lån, innskudd og overføring', 'Produksjon, fordeling og konsum'],
    explanation: 'Penger brukes til å handle (byttemiddel), måle verdier (måleenhet) og spare til senere (verdioppbevaring).',
  },
  {
    question: 'Hva skjer normalt med forbruk og investeringer når sentralbanken hever styringsrenten?',
    options: ['Forbruk og investeringer avtar', 'De øker', 'Forbruket øker mens investeringene avtar', 'Ingen effekt'],
    explanation: 'Høyere rente gjør det dyrere å låne, så folk og bedrifter bruker og investerer mindre.',
  },
  {
    question: 'Hva er realrenten?',
    options: ['Nominell rente minus inflasjon', 'Renten etter skatt', 'Renten på boliglån', 'Sentralbankens styringsrente'],
    explanation: 'Realrenten viser den faktiske avkastningen justert for kjøpekraftstap gjennom inflasjon.',
  },
  {
    question: 'Hva er Norges Banks inflasjonsmål?',
    options: ['2% årlig inflasjon', '0% inflasjon', '5% inflasjon', 'Det finnes ikke noe mål'],
    explanation: 'Norges Bank sikter mot 2% årlig inflasjon for å gi stabilitet og forutsigbarhet.',
  },
  {
    question: 'Hvordan skaper banker penger?',
    options: ['Gjennom utlån - de låner ut mer enn de har i innskudd', 'Ved å trykke sedler', 'Ved å kjøpe aksjer', 'De skaper ikke penger'],
    explanation: 'Når banker gir lån, skaper de nye penger som innskudd på låntakers konto.',
  },
],


  'samføkonomi-1-8': [
  {
    question: 'Hva kjennetegner et fellesgode (kollektivt gode)?',
    options: ['Det er ikke-rivaliserende og ikke-ekskluderbart', 'Det produseres bare av staten', 'Det er gratis for alle', 'Det er et luksusgode'],
    explanation: 'Fellesgoder som forsvar og gatebelysning kan brukes av alle uten at det går ut over andre.',
  },
  {
    question: 'Hva menes med ekspansiv finanspolitikk?',
    options: ['Økte offentlige utgifter og/eller lavere skatter', 'Lavere utgifter og høyere skatter', 'Økt rente fra sentralbanken', 'Økt pengemengde'],
    explanation: 'Ekspansiv finanspolitikk stimulærer økonomien gjennom mer offentlig pengebruk eller skattelette.',
  },
  {
    question: 'Hva er handlingsregelen for oljefondet?',
    options: ['Staten skal over tid bruke ca. 3% av fondet årlig', 'Staten kan bruke alt', 'Staten kan ikke bruke noe', 'Staten må spare alt til fremtiden'],
    explanation: 'Handlingsregelen sikrer at oljeformuen kommer fremtidige generasjoner til gode.',
  },
  {
    question: 'Hva er automatiske stabilisatorer?',
    options: ['Mekanismer som demper konjunktursvingninger uten aktive tiltak', 'Sentralbankens rentebeslutninger', 'Politikernes budsjettvedtak', 'EUs regler for underskudd'],
    explanation: 'Automatiske stabilisatorer som skatteinntekter og dagpenger tilpasser seg konjunkturene automatisk.',
  },
  {
    question: 'Hva er en progressiv skatt?',
    options: ['En skatt der skattesatsen øker med inntekten', 'En flat skatt for alle', 'En skatt som bare rammer de fattige', 'En skatt på forbruk'],
    explanation: 'Ved progressiv beskatning betaler de med høyest inntekt en større andel i skatt.',
  },
],


  'samføkonomi-2-1': [
  {
    question: 'Hva er formelen for BNP fra etterspørselssiden?',
    options: ['BNP = C + I + G + (X - M)', 'BNP = Produksjon - Kostnader', 'BNP = Arbeid + Kapital', 'BNP = Eksport - Import'],
    explanation: 'BNP = Privat konsum + Investeringer + Offentlig forbruk + Nettoeksport.',
  },
  {
    question: 'Hva beskriver multiplikatoreffekten?',
    options: ['At en endring i etterspørselen kan gi en større endring i BNP', 'At prisene multipliseres', 'At arbeidsledigheten dobles', 'At skattene øker'],
    explanation: 'Multiplikatoren viser hvordan en opprinnelig økning i etterspørselen sprer seg gjennom økonomien.',
  },
  {
    question: 'Hva skjer i AD-AS-modellen når regjeringen øker offentlige utgifter?',
    options: ['AD-kurven skifter til høyre, noe som øker BNP og prisnivået', 'AS-kurven skifter', 'Ingenting skjer', 'BNP faller'],
    explanation: 'Økte offentlige utgifter øker samlet etterspørsel og skifter AD-kurven til høyre.',
  },
  {
    question: 'Hva er et positivt produksjonsgap?',
    options: ['Faktisk BNP er høyere enn potensielt BNP (høykonjunktur)', 'BNP vokser', 'Eksporten er større enn importen', 'Budsjettet er i overskudd'],
    explanation: 'Positivt produksjonsgap indikerer overoppheting med press på priser og lønninger.',
  },
  {
    question: 'Hva er den keynesianske teoriens hovedbudskap?',
    options: ['Etterspørselen driver produksjonen på kort sikt', 'Tilbudet skaper alltid sin egen etterspørsel', 'Priser tilpasser seg umiddelbart', 'Staten bør ikke gripe inn'],
    explanation: 'Keynes mente at svikt i samlet etterspørsel kan føre til arbeidsledighet og at staten bør stimulære.',
  },
],


  'samføkonomi-2-2': [
  {
    question: 'Hva er forskjellen mellom pengepolitikk og finanspolitikk?',
    options: ['Pengepolitikk styres av sentralbanken gjennom renten, finanspolitikk er statens bruk av budsjett', 'De er det samme', 'Pengepolitikk handler om trykkpenger', 'Finanspolitikk styres av bankene'],
    explanation: 'Norges Bank styrer pengepolitikken med renten, mens regjeringen styrer finanspolitikken med statsbudsjettet.',
  },
  {
    question: 'Hva er transmisjonsmekanismen i pengepolitikken?',
    options: ['Hvordan renteendringer påvirker økonomien gjennom ulike kanaler', 'Hvordan penger overføres mellom banker', 'Hvordan inflasjon spres', 'Hvordan arbeidsledighet oppstår'],
    explanation: 'Transmisjonsmekanismen beskriver rentens virkning gjennom rentekanalen, valutakurskanalen og forventningskanalen.',
  },
  {
    question: 'Hva er inflasjonsmålet i Norge?',
    options: ['2% årlig inflasjon over tid', '0% inflasjon', '5% inflasjon', 'Det finnes ikke noe mål'],
    explanation: 'Norges Bank har et fleksibelt inflasjonsmål på 2%, som gir rom for å ta hensyn til produksjon og sysselsetting.',
  },
  {
    question: 'Hva er automatiske stabilisatorer?',
    options: ['Innebygde mekanismer som demper konjunktursvingninger automatisk', 'Sentralbankens rentebeslutninger', 'Politiske vedtak om økte utgifter', 'EUs budsjettregler'],
    explanation: 'Automatiske stabilisatorer som progressive skatter og dagpenger virker uten politiske vedtak.',
  },
  {
    question: 'Når brukes kontraktiv pengepolitikk?',
    options: ['I høykonjunktur for å dempe inflasjonen', 'I lavkonjunktur for å stimulære', 'Alltid', 'Aldri'],
    explanation: 'Kontraktiv pengepolitikk (høyere rente) brukes når økonomien er overopphetet og inflasjonen for høy.',
  },
],


  'samføkonomi-2-3': [
  {
    question: 'Hva betyr komparativt fortrinn?',
    options: ['At et land har lavere alternativkostnad ved å produsere en vare', 'At et land produserer mest av en vare', 'At et land har flest arbeidere', 'At et land eksporterer mest'],
    explanation: 'Komparativt fortrinn handler om relativ effektivitet - hvem som gir opp minst av andre varer.',
  },
  {
    question: 'Hvorfor tjener alle land på handel ifølge Ricardo?',
    options: ['Fordi land kan spesialisere seg på det de er relativt best på', 'Fordi noen land er rike', 'Fordi det finnes internasjonale avtaler', 'Fordi prisene blir like'],
    explanation: 'Selv land uten absolutt fortrinn tjener på å spesialisere seg på varer der de har komparativt fortrinn.',
  },
  {
    question: 'Hva er toll?',
    options: ['Avgift på importerte varer', 'Avgift på eksporterte varer', 'Avgift på innenlandsk produksjon', 'Gebyr for tollklærering'],
    explanation: 'Toll er en avgift som øker prisen på importvarer og beskytter innenlandsk produksjon.',
  },
  {
    question: 'Hva er de fire frihetene i EØS-avtalen?',
    options: ['Fri bevegelighet for varer, tjenester, personer og kapital', 'Ytringsfrihet, religionsfrihet, pressefrihet og forsamlingsfrihet', 'Frihandel, frikonkurranse, fri etablering og fri prissetting', 'Fritt marked, fri lønnsdannelse, fri arbeidstid og fri oppsigelse'],
    explanation: 'EØS-avtalens kjerne er de fire friheter for varer, tjenester, personer og kapital.',
  },
  {
    question: 'Hva er et argument FOR proteksjonisme?',
    options: ['Beskyttelse av unge næringer (spedbarnsindustri-argumentet)', 'Det gir alltid lavere priser', 'Det øker alltid velferden', 'Det skaper alltid flere arbeidsplasser'],
    explanation: 'Spedbarnsindustri-argumentet sier at nye næringer kan trenge midlertidig beskyttelse for å bli konkurransedyktige.',
  },
],


  'samføkonomi-2-4': [
  {
    question: 'Hva skjer med norske eksportbedrifter når kronen styrker seg?',
    options: ['De får svekket konkurranseevne fordi vårene blir dyrere for utlendinger', 'De tjener mer', 'Det har ingen effekt', 'De kan eksportere mer'],
    explanation: 'Sterkere krone gjør norske varer relativt dyrere i utlandet.',
  },
  {
    question: 'Hva er kjøpekraftsparitet (PPP)?',
    options: ['En teori om at identiske varer bør koste det samme i ulike land', 'Forskjellen i lønnsnivå mellom land', 'Forskjellen i rente mellom land', 'Forskjellen i BNP mellom land'],
    explanation: 'PPP sier at valutakursen på lang sikt bør gjenspeile relative prisnivåer mellom land.',
  },
  {
    question: 'Hva påvirker kronekursen på kort sikt?',
    options: ['Rentedifferanse mot utlandet, forventninger og oljepris', 'Bare inflasjonen', 'Bare handelsbalansen', 'Bare BNP-vekst'],
    explanation: 'Kortsiktige kursbevegelser påvirkes av renter, forventninger, oljepris og risikoforhold.',
  },
  {
    question: 'Hva er en flytende valutakurs?',
    options: ['At kursen bestemmes fritt av markedet', 'At kursen er fast mot en annen valuta', 'At kursen justeres månedlig', 'At kursen følger oljeprisen'],
    explanation: 'Ved flytende kurs bestemmes valutakursen av tilbud og etterspørsel i valutamarkedet.',
  },
  {
    question: 'Ifølge relativ PPP, hva skjer med en valuta når inflasjonen er høyere enn i utlandet?',
    options: ['Valutaen svekker seg', 'Valutaen styrker seg', 'Ingen endring', 'Renten stiger'],
    explanation: 'Høyere inflasjon hjemme betyr at vårene blir relativt dyrere, og valutaen må svekkes for å opprettholde konkurranseevnen.',
  },
],


  'samføkonomi-2-5': [
  {
    question: 'Hva beskriver Phillipskurven?',
    options: ['En kortsiktig avveining mellom inflasjon og arbeidsledighet', 'Forholdet mellom BNP og eksport', 'Forholdet mellom rente og investering', 'Forholdet mellom skatt og arbeidstilbud'],
    explanation: 'Phillipskurven viser at lav ledighet gir lønnspress og høyere inflasjon på kort sikt.',
  },
  {
    question: 'Hva er et stabiliseringsmål i økonomisk politikk?',
    options: ['Lav og stabil arbeidsledighet og inflasjon', 'Høyest mulig BNP', 'Lavest mulig skatter', 'Størst mulig handelsoverskudd'],
    explanation: 'Stabiliseringsmålene handler om å unngå store svingninger i ledighet og inflasjon.',
  },
  {
    question: 'Hva er stagflasjon?',
    options: ['Høy inflasjon og høy arbeidsledighet samtidig', 'Lav inflasjon og lav ledighet', 'Rask økonomisk vekst', 'Fallende priser'],
    explanation: 'Stagflasjon er en vanskelig situasjon der både inflasjon og ledighet er høy, ofte utløst av tilbudssidesjokk.',
  },
  {
    question: 'Hva begrenser det økonomisk-politiske handlingsrommet?',
    options: ['Internasjonale forpliktelser, gjeldsnivå og globaliseringen', 'Ingenting begrenser det', 'Bare Stortinget', 'Bare EU'],
    explanation: 'EØS-avtalen, WTO-regler, gjeldsnivå og markedsreaksjoner begrenser hva politikerne kan gjøre.',
  },
  {
    question: 'Hva er den norske modellens hovedtrekk?',
    options: ['Inflasjonsmål, handlingsregel og trepartssamarbeid', 'Lav skatt og lite regulering', 'Fast valutakurs og høy toll', 'Statlig eierskap i alle bedrifter'],
    explanation: 'Den norske modellen kombinerer pengepolitikk med inflasjonsmål, finanspolitikk med handlingsregel og koordinert lønnsdannelse.',
  },
],


  'samføkonomi-2-6': [
  {
    question: 'Hvordan beregnes arbeidsledighetsraten?',
    options: ['Antall arbeidsledige delt på arbeidsstyrken', 'Antall ledige delt på befolkningen', 'Antall ledige delt på sysselsatte', 'Antall ledige delt på antall jobber'],
    explanation: 'Ledighetsraten = Arbeidsledige / (Sysselsatte + Arbeidsledige) × 100%.',
  },
  {
    question: 'Hva er NAIRU?',
    options: ['Det ledighetssnivået som er førenlig med stabil inflasjon', 'Minimumslønnen', 'Maksimal arbeidstid', 'Naturlig befolkningsvekst'],
    explanation: 'NAIRU er likevektsledigheten - under dette nivået vil lønnspress føre til økende inflasjon.',
  },
  {
    question: 'Hva er frontfagsmodellen?',
    options: ['At konkurranseutsatt industri forhandler først og setter rammen for andre oppgjør', 'At staten bestemmer alle lønninger', 'At fagføreninger ikke har innflytelse', 'At alle får lik lønn'],
    explanation: 'Frontfagsmodellen sikrer at lønnsveksten er førenlig med konkurranseevnen.',
  },
  {
    question: 'Hva er aktiv arbeidsmarkedspolitikk?',
    options: ['Tiltak som opplæring, arbeidsformidling og lønnstilskudd', 'Bare utbetaling av dagpenger', 'Kun reduksjon av arbeidstiden', 'Forbud mot oppsigelser'],
    explanation: 'Aktiv politikk hjelper ledige tilbake i jobb gjennom kvalifisering og formidling.',
  },
  {
    question: 'Hvilken type arbeidsledighet skyldes at det tar tid å finne riktig jobb?',
    options: ['Friksjonell arbeidsledighet', 'Strukturell ledighet', 'Konjunkturell ledighet', 'Sesongledighet'],
    explanation: 'Friksjonell ledighet er normal "søkeledighet" som alltid vil eksistere.',
  },
],


  'samføkonomi-2-7': [
  {
    question: 'Hva måler Gini-koeffisienten?',
    options: ['Ulikhet i inntektsfordelingen (0 = full likhet, 1 = maksimal ulikhet)', 'Økonomisk vekst', 'Inflasjon', 'Arbeidsledighet'],
    explanation: 'Gini-koeffisienten viser graden av ulikhet i et samfunn.',
  },
  {
    question: 'Hva er velferdsstatens omfordelingsfunksjon?',
    options: ['Å flytte ressurser fra rike til fattige gjennom skatter og overføringer', 'Å sikre at alle betaler like mye skatt', 'Å øke BNP', 'Å redusere arbeidsledigheten'],
    explanation: 'Velferdsstaten omfordeler gjennom progressive skatter og universelle ytelser.',
  },
  {
    question: 'Hva er en progressiv skatt?',
    options: ['En skatt der skattesatsen øker med inntekten', 'En flat skatt', 'En skatt på forbruk', 'En skatt på formue'],
    explanation: 'Ved progressiv beskatning betaler de med høyest inntekt en større andel.',
  },
  {
    question: 'Hva er eldrebølgen?',
    options: ['At andelen eldre øker og det blir færre yrkesaktive per pensjonist', 'En bølge av pensjonsreformer', 'Økt innvandring av eldre', 'At eldre arbeider lenger'],
    explanation: 'Eldrebølgen skaper utfordringer for finansieringen av pensjoner og helsetjenester.',
  },
  {
    question: 'Hva er folketrygden?',
    options: ['Norges offentlige sosialforsikringssystem med pensjon, sykepenger og dagpenger', 'En privat forsikring', 'Et frivillig spareprogram', 'En skatt'],
    explanation: 'Folketrygden er bærebjelken i den norske velferdsstaten og dekker de fleste livsrisikoer.',
  },
],


  'samføkonomi-2-8': [
  {
    question: 'Hva er en ekstern virkning (eksternalitet)?',
    options: ['Når en økonomisk aktivitet påvirker andre uten at det reflekteres i prisene', 'En internasjonal handelsvare', 'En utenlandsk investering', 'En valutaeffekt'],
    explanation: 'Eksterne virkninger som forurensning påvirker andre uten at markedet tar hensyn til det.',
  },
  {
    question: 'Hvorfor gir markedet for mye forurensning?',
    options: ['Fordi forurensning er gratis for den som forurenser - kostnadene bæres av andre', 'Fordi folk ikke bryr seg om miljøet', 'Fordi det mangler teknologi', 'Fordi staten ikke regulærer'],
    explanation: 'Uten prising av utslipp reflekteres ikke miljøkostnadene i prisene, og det blir for mye forurensning.',
  },
  {
    question: 'Hva er en karbonavgift?',
    options: ['En avgift på utslipp av klimagasser som gjør det dyrere å forurense', 'En subsidie til oljeindustrien', 'En toll på importerte varer', 'En skatt på arbeidsinntekt'],
    explanation: 'Karbonavgift priser utslipp og gir insentiver til å redusere dem.',
  },
  {
    question: 'Hva er et kvotesystem for utslipp?',
    options: ['Et tak på totale utslipp der bedrifter kan handle kvoter seg imellom', 'Gratis utslipp for alle', 'Forbud mot all industri', 'Subsidier til forurensere'],
    explanation: 'Kvotesystemer setter et tak og lar markedet finne den billigste måten å redusere utslipp.',
  },
  {
    question: 'Hva er allmenningens tragedie?',
    options: ['At fellesressurser overutnyttes fordi ingen har insentiv til å spare', 'At private eiendømmer forfaller', 'At staten bruker for mye penger', 'At bankene tar for høye renter'],
    explanation: 'Når ressurser er felles og tilgjengelige for alle, har hver enkelt insentiv til å bruke mest mulig.',
  },
],


};

export default quizData_samfokonomi;
