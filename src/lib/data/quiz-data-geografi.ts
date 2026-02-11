import type { QuizQuestion } from './quiz-data';

const quizData_geografi: Record<string, QuizQuestion[]> = {
  'geografi-1': [
  {
    question: 'Hva betyr målestokk 1:50 000?',
    options: ['1 cm påkartet tilsvarer 500 meter i virkeligheten', '1 cm påkartet tilsvarer 50 meter i virkeligheten', '1 cm påkartet tilsvarer 5 km i virkeligheten', '1 cm påkartet tilsvarer 50 km i virkeligheten'],
    explanation: '1:50 000 betyr at 1 cm påkartet tilsvarer 50 000 cm i virkeligheten, som er 500 meter.',
  },
  {
    question: 'Hva forteller tette høydekurver på et kart?',
    options: ['At terrenget er bratt', 'At terrenget er flatt', 'At det er mye vann', 'At det er skog'],
    explanation: 'Høydekurver forbinder punkter med samme høyde. Nårkurvene ligger tett, er terrenget bratt.',
  },
  {
    question: 'Hva er GIS?',
    options: ['Geografiske informasjonssystemer', 'Global Internet Service', 'Geologisk institutt for studier', 'Generell informasjonssikkerhet'],
    explanation: 'GIS (Geografiske informasjonssystemer) er dataverktoy for a samle, lagre, analysere og presentere geografisk informasjon.',
  },
  {
    question: 'Hva studerer naturgeografi?',
    options: ['Fysiske forhold som landformer, klima og vegetasjon', 'Menneskelig aktivitet og organisering', 'Historiske hendelser', 'Politiske grenser'],
    explanation: 'Naturgeografi studerer fysiske forhold som landformer, klima, vær og vegetasjon.',
  },
  {
    question: 'Hvorfor gir alle kartprojeksjoner noe forvrengning?',
    options: ['Fordi det er umulig a overføre en kuleflate til et flatt kart uten forvrengning', 'Fordi kartmakerne er upresise', 'Fordi jorden endrer form', 'Fordi malene er feil'],
    explanation: 'Jorden er en kule (geoid), og det er matematisk umulig a overføre en kuleflate til et flatt kart uten noe forvrengning.',
  },
],


  'geografi-2': [
  {
    question: 'Hva er litosfaeren?',
    options: ['Jordens stive ytre lag bestaende av skorpen og ovre del av mantelen', 'Jordens flytende kjerne', 'Atmosfaeren', 'Vannkappen'],
    explanation: 'Litosfaeren er jordens stive ytre lag som består av skorpen og ovre del av mantelen, delt inn i tektoniske plater.',
  },
  {
    question: 'Hva skjer ved en divergerende plategrense?',
    options: ['Plater beveger seg fra hverandre og ny skorpe dannes', 'Plater beveger seg mot hverandre', 'Plater glir langs hverandre', 'Ingenting skjer'],
    explanation: 'Ved divergerende plategrenser beveger platene seg fra hverandre, og ny skorpe dannes. Eksempel: Midtatlantiske ryggen.',
  },
  {
    question: 'Hvordan ble de norske fjordene dannet?',
    options: ['Isbreer gravde daler som ble fylt med sjovann', 'Vulkanutbrudd', 'Jordskjelv', 'Elver'],
    explanation: 'Fjordene ble dannet da isbreer gravde dalene dypere under istidene, og disse ble fylt med sjoovann da isen smeltet.',
  },
  {
    question: 'Hva er forskjellen påindre og ytre krefter?',
    options: ['Indre krefter bygger opp landformer, ytre krefter bryter ned', 'Indre krefter er svake, ytre er sterke', 'Indre krefter kommer fra solen, ytre fra jorden', 'Det er ingen forskjell'],
    explanation: 'Indre (endogene) krefter kommer fra jordens indre og bygger opp (vulkaner, fjellkjeder). Ytre (eksogene) krefter bryter ned (erosjon).',
  },
  {
    question: 'Hva var Pangea?',
    options: ['Et superkontinent for 200 millioner årsiden', 'En gresk gud', 'Den første menneskearten', 'En istid'],
    explanation: 'Pangea var superkontinentet der alle kontinentene var samlet for omtrent 200 millioner årsiden.',
  },
],


  'geografi-3': [
  {
    question: 'Hva er forskjellen påvær og klima?',
    options: ['Vaer er her og na, klima er gjennomsnitt over minst 30 år', 'Vaer er kaldt, klima er varmt', 'Vaer er påland, klima er i havet', 'Det er ingen forskjell'],
    explanation: 'Vaer er atmosfærens tilstand her og na, mens klima er gjennomsnittlig værmonster over lang tid (minst 30 ar).',
  },
  {
    question: 'Hvorfor har Norge et mildere klima enn andre steder påsamme breddegrad?',
    options: ['Pa grunn av Golfstrømmen', 'Pa grunn av fjellene', 'Pa grunn av skogen', 'Pa grunn av solen'],
    explanation: 'Golfstrømmen transporterer varmt vann fra tropene nordover langs norskekysten, og gir Norge et mildere klima.',
  },
  {
    question: 'Hva er Coriolis-effekten?',
    options: ['Jordrotasjonen avboyer vinder og havstrømmer', 'Manen påvirker tidevann', 'Solen varmer jordoverflaten', 'Fjell stopper vind'],
    explanation: 'Coriolis-effekten skyldes jordrotasjonen og avboyer bevegende luft og vann - til høyre pånordlige halvkule.',
  },
  {
    question: 'Hvilket klimå har Norge?',
    options: ['Temperert klima', 'Tropisk klima', 'Polært klima', 'Orkenlima'],
    explanation: 'Norge har temperert klima med fire tydelige arstider og moderat nedbor.',
  },
  {
    question: 'Hva er et høyttrykk?',
    options: ['Synkende luft som ofte gir stabilt, pent vær', 'Stigende luft som gir nedbor', 'En storm', 'En orkan'],
    explanation: 'Ved høyttrykk synker luften, noe som gir stabilt vær og ofte sol og klært vær.',
  },
],


  'geografi-4': [
  {
    question: 'Hva er forskjellen pånaturlig og forsterket drivhuseffekt?',
    options: ['Naturlig er livsnødvendig, forsterket skyldes menneskelig aktivitet', 'Naturlig er farlig, forsterket er bra', 'Det er ingen forskjell', 'Naturlig finnes ikke'],
    explanation: 'Naturlig drivhuseffekt er livsnødvendig og holder jorden varm. Forsterket drivhuseffekt skyldes menneskeskapte utslipp og gir global oppvarming.',
  },
  {
    question: 'Hvilken klimagass har størst oppvarmingseffekt per molekyl (sammenlignet med CO2)?',
    options: ['Metan', 'Karbondioksid', 'Vanndamp', 'Oksygen'],
    explanation: 'Metan har ca. 25 ganger sterkere oppvarmingseffekt enn CO2, selv om det finnes mindre av det.',
  },
  {
    question: 'Hva er is-albedo-effekten?',
    options: ['Nåris smelter, absorberes mer varme, som smelter mer is', 'Is reflekterer varme ut i verdensrommet', 'Is produserer kulde', 'Is forsterker vind'],
    explanation: 'Is-albedo-effekten er en selvforsterkende prosess: Nåris smelter, eksponeres mørk overflate som absorberer mer varme, som smelter mer is.',
  },
  {
    question: 'Hva er malet i Parisavtalen?',
    options: ['Begrense global oppvarming til godt under 2 grader Celsius', 'Stoppe all industri', 'Plante trillioner traer', 'Bygge flere atomkraftverk'],
    explanation: 'Parisavtalen (2015) har som mal a begrense global oppvarming til godt under 2 grader, helst 1,5 grader over forindustrielt nivå.',
  },
  {
    question: 'Hvilken sektor er største kilde til CO2-utslipp globalt?',
    options: ['Energiproduksjon og industri', 'Jordbruk', 'Transport', 'Bygg'],
    explanation: 'Forbrenning av kull, olje og gass til energiproduksjon og industri er den største kilden til CO2-utslipp.',
  },
],


  'geografi-5': [
  {
    question: 'Omtrent hvor mange mennesker er det påjorden i 2024?',
    options: ['8 milliarder', '5 milliarder', '10 milliarder', '3 milliarder'],
    explanation: 'I 2024 passerte verdens befolkning 8 milliarder mennesker.',
  },
  {
    question: 'Hva er reproduksjonsnivåt for befolkningen?',
    options: ['Ca. 2,1 barn per kvinne', 'Ca. 1,0 barn per kvinne', 'Ca. 3,5 barn per kvinne', 'Ca. 5,0 barn per kvinne'],
    explanation: 'Reproduksjonsnivåt er ca. 2,1 barn per kvinne - det som trengs for at befolkningen skal holde seg stabil uten innvandring.',
  },
  {
    question: 'Hva skjer i fase 2 av den demografiske overgangen?',
    options: ['Høyt fodselsrate, synkende dodsrate, rask befolkningsvekst', 'Lav fodselsrate og lav dodsrate', 'Synkende fodselsrate', 'Befolkningsnedgang'],
    explanation: 'I fase 2 forblir fodselsraten høy mens dodsraten synker (bedre helse, hygiene), noe som gir rask befolkningsvekst.',
  },
  {
    question: 'Hva er forsørgerbyrde?',
    options: ['Forholdet mellom yrkesaktive og ikke-yrkesaktive', 'Antall barn per familie', 'Kostnaden ved a forsörge seg selv', 'Skattenivået i et land'],
    explanation: 'Forsørgerbyrde er forholdet mellom yrkesaktiv befolkning (15-64 ar) og ikke-yrkesaktive (barn og eldre).',
  },
  {
    question: 'Hvorfor synker fruktbarheten nårland blir rikere?',
    options: ['Utdanning, prevensjon og kvinner i arbeidslivet', 'Folk blir for travle', 'Regjeringen forbyr barn', 'Mat blir for dyr'],
    explanation: 'Utdanning (særlig for kvinner), tilgang til prevensjon, kvinner i arbeidslivet og lavere barnedødelighet bidrar til lavere fruktbarhet.',
  },
],


  'geografi-6': [
  {
    question: 'Hva er urbanisering?',
    options: ['Prosessen der stadig flere flytter til byer', 'Bygging av høyhus', 'Avfolkning av byer', 'Gronnere byer'],
    explanation: 'Urbanisering er prosessen der stadig flere mennesker flytter til byer og andelen som bor urbant øker.',
  },
  {
    question: 'Hva er en megaby?',
    options: ['En by med over 10 millioner innbyggere', 'En by med over 1 million innbyggere', 'Hovedstaden i et land', 'En by med skyskrapere'],
    explanation: 'En megaby er definert som en by med over 10 millioner innbyggere. Eksempler: Tokyo, Delhi, Shanghai.',
  },
  {
    question: 'Hva er "push-faktorer" i urbanisering?',
    options: ['Det som driver folk vekk fra landsbygda', 'Det som trekker folk til byen', 'Byplanlegging', 'Offentlig transport'],
    explanation: 'Push-faktorer er det som driver folk vekk fra landsbygda: fattigdom, arbeidsledighet, mangel påtjenester.',
  },
  {
    question: 'Hva er gentrification?',
    options: ['Oppgradering av nedslitte byområder som ofte presser ut opprinnelige beboere', 'Bygging av nye byer', 'Flytting til førsteder', 'Industrilokalisering'],
    explanation: 'Gentrification er oppgradering av nedslitte byområder, som ofte fører til at opprinnelige beboere presses ut av høyre priser.',
  },
  {
    question: 'Hva kjennetegner baerekraftig byutvikling?',
    options: ['Kompakt bystruktur, kollektivtransport og grønnområder', 'Spredning og bilbasert transport', 'Store kjøpesentre i utkanten', 'Høye bygninger overalt'],
    explanation: 'Baerekraftig byutvikling kjennetegnes av kompakt struktur, effektiv kollektivtransport, blandet arealbruk og grønnområder.',
  },
],


  'geografi-7': [
  {
    question: 'Hva er forskjellen påfornybare og ikke-fornybare ressurser?',
    options: ['Fornybare kan fornye seg, ikke-fornybare er begrensede', 'Fornybare er billige, ikke-fornybare er dyre', 'Fornybare finnes i Norge, ikke-fornybare i utlandet', 'Det er ingen forskjell'],
    explanation: 'Fornybare ressurser kan fornye seg kontinuerlig (sol, vind), mens ikke-fornybare er dannet over millioner av årog finnes i begrensede mengder (olje, kull).',
  },
  {
    question: 'Hva er "allmenningens tragedie"?',
    options: ['Nåralle har tilgang til en ressurs og overutnytter den', 'En teaterførestilling', 'En naturkatastrofe', 'En økonomisk krise'],
    explanation: 'Allmenningens tragedie oppstar nåralle har fri tilgang til en ressurs og hver enkelt har insentiv til a overutnytte den.',
  },
  {
    question: 'Hva er Norges største eksportinntekt fra naturressurser?',
    options: ['Olje og gass', 'Fisk', 'Vannkraft', 'Skog'],
    explanation: 'Olje og gass er Norges største eksportinntekt og har vært grunnlaget for oljefondet.',
  },
  {
    question: 'Hva er handlingsregelen?',
    options: ['At kun 3% av oljefondets avkastning brukes årlig', 'At Norge skal bruke all oljen', 'At vi skal spare halve oljefondet', 'At oljefondet skal investeres i Norge'],
    explanation: 'Handlingsregelen sier at kun avkastningen (ca. 3%) av oljefondet skal brukes årlig over statsbudsjettet.',
  },
  {
    question: 'Hva er sirkular økonomi?',
    options: ['Et system der ressurser holdes i kretsløp gjennom gjenbruk og resirkulering', 'Handel mellom land', 'Okonomisk vekst', 'Aksjehandel'],
    explanation: 'Sirkular økonomi er et system der ressurser holdes i kretsløp gjennom gjenbruk, reparasjon og resirkulering, i motsetning til linear "ta-bruk-kast".',
  },
],


  'geografi-8': [
  {
    question: 'Hva er forskjellen påen naturhendelse og en naturkatastrofe?',
    options: ['En naturkatastrofe rammer et sårbart samfunn og forårsaker store tap', 'Naturhendelser er smørre', 'Naturkatastrofer skjer oftere', 'Det er ingen forskjell'],
    explanation: 'En naturhendelse blir en naturkatastrofe først nården rammer et samfunn og forårsaker store tap av liv, eiendom eller miljø.',
  },
  {
    question: 'Hva er formelen for risiko?',
    options: ['Risiko = Fare x Sarbarhet', 'Risiko = Fare + Sarbarhet', 'Risiko = Fare - Sarbarhet', 'Risiko = Fare / Sarbarhet'],
    explanation: 'Risiko = Fare x Sarbarhet. Samme fare gir ulik risiko i ulike samfunn avhengig av hvor sårbare de er.',
  },
  {
    question: 'Hvorfor doer flere i jordskjelv i fattige land enn i rike land?',
    options: ['Fattige land har dårligere bygninger og infrastruktur', 'Jordskjelvene er sterkere i fattige land', 'Fattige land har flere innbyggere', 'Rike land har ingen jordskjelv'],
    explanation: 'Fattige land har ofte dårlig byggekvalitet, svak infrastruktur og manglende varslingssystemer - høyere sårbarhet.',
  },
  {
    question: 'Hva er resiliens?',
    options: ['Evnen til å komme tilbake etter en katastrofe', 'Motstandskraft mot jordskjelv', 'En type forsikring', 'Et byggeteknisk begrep'],
    explanation: 'Resiliens er et samfunns evne til å komme tilbake etter en katastrofe og gjenoppbygge.',
  },
  {
    question: 'Hvilke naturkatastrofer forventes a oke pågrunn av klimaendringer?',
    options: ['Hetebølger, flom, kraftigere stormer og skogbranner', 'Jordskjelv og vulkanutbrudd', 'Meteornedslag', 'Ingen'],
    explanation: 'Klimaendringer forsterker meteorologiske hendelser som hetebølger, intens nedbor/flom, kraftigere tropiske stormer og skogbranner.',
  },
],


  'geografi-9': [
  {
    question: 'Hvor mye av Norges areal er dyrket mark?',
    options: ['Ca. 3%', 'Ca. 15%', 'Ca. 30%', 'Ca. 50%'],
    explanation: 'Bare ca. 3% av Norges areal er dyrket mark pågrunn av mye fjell, bratt terreng og kort vekstsesong.',
  },
  {
    question: 'Hvor stor andel av Norges strømproduksjon kommer fra vannkraft?',
    options: ['Ca. 90%', 'Ca. 50%', 'Ca. 30%', 'Ca. 10%'],
    explanation: 'Omtrent 90% av Norges strømproduksjon kommer fra vannkraft, takket være mye nedbor og store høyder.',
  },
  {
    question: 'Hva er strandflaten?',
    options: ['En flat kyststripe langs norskekysten', 'En type fiskebat', 'Et fjellområde', 'En innlandssjo'],
    explanation: 'Strandflaten er en flat kyststripe langs norskekysten, formet av havet og istidene.',
  },
  {
    question: 'Hvilken bre er Europas største fastlandsbre?',
    options: ['Jostedalsbreen', 'Svartisen', 'Folgefonni', 'Hardangerjokulen'],
    explanation: 'Jostedalsbreen er Europas største fastlandsbre, lokalisert i Vestland fylke.',
  },
  {
    question: 'Hvorfor er bosettingen i Norge konsentrert langs kysten og i lavlandet?',
    options: ['Kysten ga tilgang til fiske og transport, lavlandet har best jordbruksjord', 'Det er varmere der', 'Loven krever det', 'Fjellene er for høye'],
    explanation: 'Bosettingen følger naturgrunnlaget: Kysten ga tilgang til fiske og sjotransport, lavlandet har best jordbruksjord og mildest klima.',
  },
],


  'geografi-10': [
  {
    question: 'Hva er HDI?',
    options: ['FNs indeks som måler utvikling basert pålevealder, utdanning og inntekt', 'Et mal påBNP', 'En type bistand', 'En klimaindeks'],
    explanation: 'HDI (Human Development Index) er FNs indeks som kombinerer forventet levealder, utdanningsnivå og levestandard.',
  },
  {
    question: 'Omtrent hvor mange mennesker lever i ekstrem fattigdom i dag?',
    options: ['Ca. 700 millioner', 'Ca. 3 milliarder', 'Ca. 100 millioner', 'Ca. 50 millioner'],
    explanation: 'Omtrent 700 millioner mennesker lever i ekstrem fattigdom (under $2,15 per dag), ned fra over 1,9 milliarder i 1990.',
  },
  {
    question: 'Hva er en fattigdomsfelle?',
    options: ['En selvforsterkende sirkel som holder mennesker i fattigdom', 'En type skatt', 'Et bistandsprogram', 'En økonomisk teori'],
    explanation: 'Fattigdomsfelle er selvforsterkende sirkler som gjør det vanskelig å komme ut av fattigdom, f.eks. mangel påutdanning som gir lav inntekt.',
  },
  {
    question: 'Hva er Gini-koeffisienten?',
    options: ['Et mal påulikhet i inntektsfordeling', 'Et mal påBNP', 'En befolkningsindeks', 'Et klimamal'],
    explanation: 'Gini-koeffisienten måler ulikhet i inntektsfordeling påen skala fra 0 (perfekt likhet) til 1 (en person har alt).',
  },
  {
    question: 'Hva nevnes ofte som en historisk årsak til global ulikhet?',
    options: ['Kolonialisme og utbytting av ressurser', 'Klimaendringer', 'Internett', 'Globalisering'],
    explanation: 'Kolonialisme nevnes ofte som en historisk årsak til global ulikhet. Det er faglig debatt om hvor stor betydning historiske vs. lokale faktorer (som styresett og institusjoner) har for dagens ulikhet.',
  },
],


};

export default quizData_geografi;
