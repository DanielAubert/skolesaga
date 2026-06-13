import type { QuizQuestion } from './quiz-data';

const quizData_tif_vg1: Record<string, QuizQuestion[]> = {
  'tif-vg1-1-1': [
  {
    question: 'Hva er en legering?',
    options: ['En blanding av to eller flere metaller, eller metall med andre grunnstoffer', 'Et helt rent metall uten tilsetninger', 'Et belegg som males på metall for å hindre rust', 'En plast som er forsterket med metallfibre'],
    explanation: 'En legering er en blanding av to eller flere metaller, eller metall med andre grunnstoffer. Stål er for eksempel en legering av jern og karbon.',
  },
  {
    question: 'Hvor mye krom må stål minst inneholde for å kalles rustfritt?',
    options: ['10,5 %', '18 %', '2 %', '50 %'],
    explanation: 'Rustfritt stål inneholder minimum 10,5 % krom. Kromet danner et tynt, usynlig passivt oksidlag som beskytter mot korrosjon.',
  },
  {
    question: 'Hva kjennetegner austenitisk rustfritt stål (18/8)?',
    options: ['Det inneholder 18 % krom og 8 % nikkel og er ikke magnetisk', 'Det inneholder 18 % nikkel og 8 % krom og er sterkt magnetisk', 'Det inneholder 18 % karbon og 8 % krom', 'Det kan herdes til meget høy hardhet'],
    explanation: 'Austenitisk rustfritt stål, som AISI 304, inneholder 18 % krom og 8 % nikkel. Det er ikke magnetisk og har meget god korrosjonsmotstand.',
  },
  {
    question: 'En fabrikk skal lage konstruksjonsdeler som skal sveises mye. Hvilken ståltype passer best?',
    options: ['Lavkarbonstål (under 0,25 % C) på grunn av god sveisbarhet', 'Høykarbonstål (over 0,55 % C) fordi det er hardest', 'Martensitisk rustfritt stål fordi det kan herdes', 'Støpejern fordi det er billigst'],
    explanation: 'Lavkarbonstål (under 0,25 % C) er mykt, lett å bearbeide og har god sveisbarhet. Høykarbonstål er vanskelig å sveise.',
  },
  {
    question: 'Hva består messing av?',
    options: ['Kobber og sink', 'Kobber og tinn', 'Jern og krom', 'Aluminium og magnesium'],
    explanation: 'Messing er en legering av kobber og sink. Bronse er derimot kobber og tinn.',
  },
],

  'tif-vg1-1-2': [
  {
    question: 'Hva er den viktigste forskjellen mellom termoplast og herdeplast?',
    options: ['Termoplast kan smeltes og formes om flere ganger, herdeplast herdes permanent', 'Herdeplast kan smeltes om, termoplast kan ikke', 'Termoplast er alltid sterkere enn herdeplast', 'Herdeplast er alltid gjennomsiktig'],
    explanation: 'Termoplast kan smeltes og formes om gjentatte ganger, mens herdeplast herdes permanent og ikke kan smeltes om. Det gjør termoplast lettere å resirkulere.',
  },
  {
    question: 'Hva er en polymer?',
    options: ['En lang molekylkjede bygget opp av gjentatte enheter (monomerer)', 'Et metall med krystallinsk struktur', 'En blanding av glass og plast', 'Et enkelt lite molekyl'],
    explanation: 'En polymer er en lang molekylkjede bygget opp av mange gjentatte enheter som kalles monomerer. Alle plaster er polymerer.',
  },
  {
    question: 'Hva betyr forkortelsen GRP/GFK?',
    options: ['Glassfiberarmert plast', 'Gummiforsterket plast', 'Granulert resirkulert plast', 'Galvanisert rustfri plate'],
    explanation: 'GRP/GFK står for glassfiberarmert plast - glassfibermatter innstøpt i en plastmatrise. Det brukes mye i båtbygging.',
  },
  {
    question: 'Hvilken rolle har matrisen i et komposittmateriale?',
    options: ['Den binder sammen forsterkningsfibrene og overfører krefter mellom dem', 'Den gir komposittens strekkstyrke alene', 'Den fungerer kun som fargestoff', 'Den gjør materialet elektrisk ledende'],
    explanation: 'Matrisen (f.eks. epoksy) binder sammen forsterkningen (f.eks. glass- eller karbonfiber) og fordeler kreftene mellom fibrene.',
  },
  {
    question: 'Hvilken plast er en herdeplast?',
    options: ['Epoksy', 'Polyetylen (PE)', 'Polypropylen (PP)', 'Polykarbonat (PC)'],
    explanation: 'Epoksy er en herdeplast som herder permanent. PE, PP og PC er alle termoplaster som kan smeltes om.',
  },
],

  'tif-vg1-1-3': [
  {
    question: 'En stang med tverrsnittsareal 50 mm² belastes med en kraft på 10 000 N. Hva blir spenningen?',
    options: ['200 MPa', '500 MPa', '20 MPa', '0,005 MPa'],
    explanation: 'Spenning = kraft delt på areal: σ = F/A = 10 000 N / 50 mm² = 200 N/mm² = 200 MPa.',
  },
  {
    question: 'Hva er flytegrensen til et materiale?',
    options: ['Spenningen der permanent (plastisk) deformasjon begynner', 'Spenningen der materialet smelter', 'Den maksimale spenningen materialet tåler før brudd', 'Temperaturen der materialet blir flytende'],
    explanation: 'Flytegrensen (Re) er spenningen der materialet går fra elastisk til plastisk område, altså der permanent deformasjon begynner.',
  },
  {
    question: 'Hva måler strekkfastheten (Rm)?',
    options: ['Den maksimale spenningen materialet tåler ved strekking', 'Hvor hardt materialet er på overflaten', 'Hvor mye materialet leder varme', 'Spenningen der elastisk deformasjon starter'],
    explanation: 'Strekkfastheten Rm er den høyeste spenningen materialet tåler i en strekkprøve før innsnøring og brudd.',
  },
  {
    question: 'Hvilke metoder brukes til å måle hardhet?',
    options: ['Brinell, Rockwell og Vickers', 'Celsius, Kelvin og Fahrenheit', 'Volt, ampere og ohm', 'MIG, MAG og TIG'],
    explanation: 'Brinell (HB), Rockwell (HR) og Vickers (HV) er de tre vanligste metodene for hardhetsmåling av metaller.',
  },
  {
    question: 'Hva beskriver E-modulen (elastisitetsmodulen) til et materiale?',
    options: ['Forholdet mellom spenning og tøyning i det elastiske området - materialets stivhet', 'Hvor mye energi materialet tar opp før brudd', 'Materialets evne til å lede elektrisitet', 'Maksimal hardhet etter herding'],
    explanation: 'E-modulen er forholdet mellom spenning og tøyning i det elastiske området. Høy E-modul betyr et stivt materiale - stål har ca. tre ganger høyere E-modul enn aluminium.',
  },
],

  'tif-vg1-1-4': [
  {
    question: 'Hvilke tre faktorer må normalt være til stede for at elektrokjemisk korrosjon skal oppstå?',
    options: ['Metall, oksygen og fuktighet (elektrolytt)', 'Metall, lys og varme', 'Plast, vann og salt', 'Olje, luft og støv'],
    explanation: 'Elektrokjemisk korrosjon krever et metall, oksygen og en elektrolytt - vanligvis fuktighet. Fjerner man én av faktorene, stopper korrosjonen.',
  },
  {
    question: 'Hva skjer ved galvanisk korrosjon når to ulike metaller er i kontakt i en elektrolytt?',
    options: ['Det minst edle metallet korroderer raskere', 'Det edleste metallet korroderer raskere', 'Begge metallene slutter å korrodere', 'Metallene smelter sammen'],
    explanation: 'Ved galvanisk korrosjon blir det minst edle metallet anode og korroderer raskere, mens det edlere metallet beskyttes.',
  },
  {
    question: 'Hva er galvanisering (varmforsinking)?',
    options: ['Overflatebehandling der stål dyppes i smeltet sink', 'Maling av stål med rustbeskyttende maling', 'Herding av stål i olje', 'Polering av rustfritt stål'],
    explanation: 'Ved galvanisering dyppes stålet i smeltet sink. Sinklaget beskytter stålet både som barriere og som offermetall.',
  },
  {
    question: 'Hvordan virker en offeranode?',
    options: ['Et mindre edelt metall korroderer i stedet for konstruksjonen som skal beskyttes', 'Den isolerer konstruksjonen fullstendig fra vann', 'Den tilfører maling automatisk', 'Den øker spenningen i metallet'],
    explanation: 'En offeranode (f.eks. sink på skipsskrog) er mindre edel enn konstruksjonen. Anoden korroderer og «ofrer seg», mens stålet beskyttes katodisk.',
  },
  {
    question: 'Hva er pitting?',
    options: ['Gropkorrosjon - lokale, dype korrosjonsgroper', 'Jevn korrosjon over hele overflaten', 'Sprekker som oppstår ved sveising', 'Slitasje fra sliping'],
    explanation: 'Pitting er gropkorrosjon: lokale, dype groper som kan være vanskelige å oppdage, men som svekker materialet kraftig.',
  },
],

  'tif-vg1-1-5': [
  {
    question: 'Hvordan herder man stål?',
    options: ['Varme opp til austenittområdet og bråkjøle i vann eller olje', 'Varme opp og avkjøle veldig langsomt i ovn', 'Banke på stålet med hammer til det blir hardt', 'Legge stålet i fryseboks over natten'],
    explanation: 'Herding skjer ved å varme stålet til austenittområdet og deretter bråkjøle det. Da dannes den harde, sprø fasen martensitt.',
  },
  {
    question: 'Hvilken fase dannes ved rask avkjøling fra austenitt, og hva kjennetegner den?',
    options: ['Martensitt - hard og sprø', 'Ferritt - myk og seig', 'Perlitt - flytende', 'Austenitt - magnetisk'],
    explanation: 'Ved bråkjøling fra austenitt rekker ikke karbonet å diffundere ut, og det dannes martensitt som er meget hard, men sprø.',
  },
  {
    question: 'Hvorfor anløper man stål etter herding?',
    options: ['For å redusere sprøheten og indre spenninger', 'For å gjøre stålet enda hardere', 'For å fjerne rust fra overflaten', 'For å øke karboninnholdet'],
    explanation: 'Anløping er en oppvarming til moderat temperatur etter herding. Den reduserer sprøhet og indre spenninger, mot litt lavere hardhet.',
  },
  {
    question: 'Hva er hensikten med normalisering?',
    options: ['Å utjevne og forfine kornstrukturen i stålet', 'Å gjøre stålet maksimalt hardt', 'Å legge et beskyttende sinklag på overflaten', 'Å smelte stålet helt om'],
    explanation: 'Normalisering er oppvarming og avkjøling i luft for å utjevne og forfine kornstrukturen, for eksempel etter smiing eller sveising.',
  },
  {
    question: 'Hvorfor brukes spenningsavlastende gløding etter sveising?',
    options: ['For å redusere indre spenninger som oppsto under sveisingen', 'For å gjøre sveisen blank og pen', 'For å fjerne tilsatsmaterialet', 'For å herde sveisesømmen til martensitt'],
    explanation: 'Sveising skaper indre spenninger på grunn av ujevn oppvarming og avkjøling. Spenningsavlastende gløding reduserer disse spenningene og minsker faren for sprekker og deformasjon.',
  },
],

  'tif-vg1-1-6': [
  {
    question: 'Hva er en livsløpsanalyse (LCA)?',
    options: ['En systematisk vurdering av miljøbelastningen gjennom hele produktets levetid', 'En beregning av hvor lenge et produkt varer før det går i stykker', 'En test av materialets strekkfasthet', 'En oversikt over produksjonskostnadene'],
    explanation: 'LCA vurderer miljøbelastningen i alle livsløpsfaser: råstoffutvinning, foredling, produksjon, bruk og avhending.',
  },
  {
    question: 'Hva kjennetegner sirkulær økonomi?',
    options: ['Materialer og produkter holdes i bruk lengst mulig gjennom gjenbruk og resirkulering', 'Råvarer tas ut, brukes og kastes', 'Alle produkter lages av helt nye råvarer', 'Produksjonen flyttes alltid til lavkostland'],
    explanation: 'Sirkulær økonomi er en modell der materialer holdes i kretsløpet lengst mulig, i motsetning til lineær økonomi (ta ut - produser - bruk - kast).',
  },
  {
    question: 'Hvilken materialgruppe er best egnet for resirkulering?',
    options: ['Metaller, som kan resirkuleres uten tap av kvalitet', 'Kompositter, fordi fibrene lett kan skilles ut', 'Herdeplast, fordi den kan smeltes om', 'Alle materialer er like enkle å resirkulere'],
    explanation: 'Metaller kan smeltes om og resirkuleres uten kvalitetstap. Kompositter er derimot utfordrende fordi matrise og fiber er vanskelige å skille.',
  },
  {
    question: 'Hva er en EPD?',
    options: ['En standardisert miljødeklarasjon for et produkt', 'En europeisk produksjonsstandard for sveising', 'Et verktøy for å måle hardhet', 'En type elektrisk verneutstyr'],
    explanation: 'EPD (Environmental Product Declaration) er en standardisert miljødeklarasjon som dokumenterer produktets miljøpåvirkning.',
  },
  {
    question: 'Hvilke typer kriterier inngår i en materialvalgmatrise?',
    options: ['Tekniske krav, økonomiske faktorer og miljøfaktorer', 'Bare prisen på materialet', 'Kun fargen og utseendet', 'Bare leveringstiden fra grossist'],
    explanation: 'En materialvalgmatrise sammenligner materialer systematisk mot tekniske krav (styrke, korrosjon), økonomi (pris, bearbeidingskostnad) og miljø (resirkulerbarhet, utslipp).',
  },
],

  'tif-vg1-1-7': [
  {
    question: 'Hva betyr lagerprinsippet FIFO?',
    options: ['First In, First Out - det eldste på lager brukes først', 'First In, Final Out - det eldste brukes sist', 'Fast Input, Fast Output - alt skal håndteres raskt', 'Full Inventory For Operations - lageret skal alltid være fullt'],
    explanation: 'FIFO (First In, First Out) betyr at de eldste varene brukes først, slik at materialer ikke blir liggende og forringes.',
  },
  {
    question: 'Hva er et sikkerhetsdatablad (SDS)?',
    options: ['Standardisert dokumentasjon om et kjemikalies farer og sikker håndtering', 'En kvittering for innkjøpte kjemikalier', 'En liste over alle ansatte på verkstedet', 'Et skjema for bestilling av verneutstyr'],
    explanation: 'Sikkerhetsdatabladet er standardisert dokumentasjon for kjemikalier med informasjon om farer, verneutstyr, førstehjelp og avfallshåndtering.',
  },
  {
    question: 'Hva viser et farepiktogram etter GHS-systemet?',
    options: ['Hvilken type fare et kjemikalie utgjør', 'Prisen på kjemikaliet', 'Hvem som har produsert kjemikaliet', 'Holdbarhetsdatoen til kjemikaliet'],
    explanation: 'GHS-farepiktogrammene er standardiserte symboler som viser faretypen, for eksempel etsende, brannfarlig eller helsefare.',
  },
  {
    question: 'Hvordan skal spillolje håndteres?',
    options: ['Som farlig avfall som leveres til godkjent mottak med dokumentasjon', 'Helles i avløpet hvis mengden er liten', 'Blandes med vanlig restavfall', 'Brennes i verkstedets søppelbøtte'],
    explanation: 'Spillolje er farlig avfall og skal samles opp, oppbevares forsvarlig og leveres til godkjent mottak. Det skal aldri i avløp eller restavfall.',
  },
  {
    question: 'Hvorfor skal oljete filler og kluter oppbevares i lukket metallbeholder?',
    options: ['De kan selvantenne og starte brann', 'De lukter vondt', 'De tar mindre plass da', 'De skal gjenbrukes som pussekluter'],
    explanation: 'Oljete filler kan selvantenne når oljen oksiderer og utvikler varme. Derfor skal de oppbevares i lukket, brannsikker metallbeholder.',
  },
],

  'tif-vg1-2-1': [
  {
    question: 'Hva er forskjellen mellom MIG- og MAG-sveising?',
    options: ['MIG bruker inert beskyttelsesgass (argon/helium), MAG bruker aktiv gass (CO₂/blandinger)', 'MIG bruker aktiv gass, MAG bruker inert gass', 'MIG bruker wolframelektrode, MAG bruker dekkede elektroder', 'Det er ingen forskjell, bare to navn på samme metode'],
    explanation: 'MIG (Metal Inert Gas) bruker inert gass som argon eller helium, mens MAG (Metal Active Gas) bruker aktiv gass som CO₂ eller gassblandinger. MAG brukes mest til stål, MIG til aluminium.',
  },
  {
    question: 'Hva kjennetegner TIG-sveising?',
    options: ['En ikke-smeltende wolframelektrode og eventuelt separat tilsatsmateriale', 'En smeltende trådelektrode som mates automatisk', 'Dekkede elektroder som smelter og danner slagg', 'Skjæring av metall med oksygen'],
    explanation: 'Ved TIG-sveising brukes en wolframelektrode som ikke smelter. Tilsatsmaterialet føres til separat for hånd. Metoden gir høy kvalitet og brukes mye til rustfritt stål og aluminium.',
  },
  {
    question: 'Hva er HAZ i en sveiseforbindelse?',
    options: ['Den varmepåvirkede sonen i grunnmaterialet ved siden av sveisen', 'Selve smeltebadet under sveising', 'Beskyttelsesgassen rundt lysbuen', 'Slagget som dannes oppå sveisesømmen'],
    explanation: 'HAZ (Heat Affected Zone) er sonen i grunnmaterialet som ikke har smeltet, men som har fått endrede egenskaper på grunn av varmen fra sveisingen.',
  },
  {
    question: 'Hvilken sveisemetode bruker dekkede elektroder?',
    options: ['MMA (pinnesveising)', 'TIG', 'MIG', 'Punktsveising'],
    explanation: 'MMA/SMAW, ofte kalt pinnesveising, bruker dekkede elektroder. Belegget danner beskyttelsesgass og slagg under sveisingen.',
  },
  {
    question: 'En bedrift skal sveise tynnplater i rustfritt stål der kravet til finish er høyt. Hvilken metode er best egnet?',
    options: ['TIG-sveising', 'Pinnesveising (MMA)', 'Brennskjæring', 'Punktsveising med slagg'],
    explanation: 'TIG gir best kontroll og fineste sveiseresultat, og er derfor førstevalget for tynnplater i rustfritt stål der utseende og kvalitet er viktig.',
  },
],

  'tif-vg1-2-2': [
  {
    question: 'Hvorfor lager man en V-fuge før sveising av tykkere plater?',
    options: ['For å sikre gjennomsveising og god innbrenning i hele godstykkelsen', 'For å spare tilsatsmateriale', 'For at platene skal se penere ut', 'For å unngå å bruke beskyttelsesgass'],
    explanation: 'På tykkere plater rekker ikke lysbuen å smelte gjennom hele tykkelsen. V-fugen åpner forbindelsen slik at sveisen fyller hele tverrsnittet.',
  },
  {
    question: 'Hva er rotspalten i en sveisefuge?',
    options: ['Åpningen mellom delene i bunnen av fugen', 'Den øverste delen av sveisesømmen', 'Et verktøy for å rengjøre fugen', 'En sveisefeil som må slipes bort'],
    explanation: 'Rotspalten er den bevisste åpningen mellom delene i bunnen av fugen. Den sikrer at sveisen smelter gjennom i roten.',
  },
  {
    question: 'Hva er hovedregelen ved valg av tilsatsmateriale?',
    options: ['Tilsatsmaterialet skal passe til grunnmaterialet og ha minst like gode egenskaper', 'Tilsatsmaterialet skal alltid være mykere enn grunnmaterialet', 'Man kan bruke samme tilsatsmateriale til alle metaller', 'Tilsatsmaterialet velges bare ut fra pris'],
    explanation: 'Hovedregelen er at tilsatsmaterialet skal matche grunnmaterialet kjemisk og mekanisk, slik at sveisen får minst like gode egenskaper som grunnmaterialet.',
  },
  {
    question: 'Hvorfor er rengjøring ekstra viktig før sveising av aluminium?',
    options: ['Aluminium har et oksidlag som smelter ved mye høyere temperatur enn metallet selv', 'Aluminium ruster raskt når det er skittent', 'Aluminium blir magnetisk av forurensninger', 'Rengjøring trengs egentlig ikke for aluminium'],
    explanation: 'Aluminiumoksid smelter ved ca. 2050 °C, mens aluminium smelter ved ca. 660 °C. Oksidlaget må fjernes for å få en god sveis.',
  },
  {
    question: 'Hva er hensikten med forvarming før sveising?',
    options: ['Å redusere avkjølingshastigheten og faren for sprekker og herdning', 'Å smelte grunnmaterialet før lysbuen tennes', 'Å fjerne maling fra hele konstruksjonen', 'Å gjøre sveisen blankere'],
    explanation: 'Forvarming senker temperaturforskjellen og avkjølingshastigheten etter sveising. Det reduserer faren for herding og sprekker, særlig i tykke deler og stål med høyere karboninnhold.',
  },
],

  'tif-vg1-2-3': [
  {
    question: 'Hva skiller myklodding fra hardlodding?',
    options: ['Myklodding bruker tilsatsmateriale som smelter under 450 °C, hardlodding over 450 °C', 'Myklodding er over 450 °C, hardlodding under 450 °C', 'Myklodding smelter grunnmaterialet, hardlodding gjør det ikke', 'Det er bare hardlodding som krever varme'],
    explanation: 'Grensen mellom myklodding og hardlodding går ved 450 °C. Ved lodding smeltes bare tilsatsmaterialet, ikke grunnmaterialet - i motsetning til sveising.',
  },
  {
    question: 'Hva er kapillarvirkning ved lodding?',
    options: ['At smeltet lodd trekkes inn i smale spalter mellom delene', 'At loddet renner nedover på grunn av tyngdekraften', 'At loddet fordamper ved høy temperatur', 'At grunnmaterialet suger til seg flussmiddel'],
    explanation: 'Kapillarvirkning gjør at flytende lodd trekkes inn i den smale spalten mellom delene, slik at hele fugen fylles.',
  },
  {
    question: 'Hvilken funksjon har flussmiddelet ved lodding?',
    options: ['Det fjerner oksider og forbedrer loddets flytegenskaper', 'Det kjøler ned arbeidsstykket', 'Det gjør loddet hardere etter størkning', 'Det farger loddefugen sølvgrå'],
    explanation: 'Flussmiddelet løser opp oksider på metalloverflaten og hindrer ny oksidering, slik at loddet flyter ut og fester godt.',
  },
  {
    question: 'Hva kjennetegner et anaerobt lim?',
    options: ['Det herder i fravær av luft, og brukes til gjengesikring og lagre', 'Det herder bare i sterkt sollys', 'Det må varmes til 450 °C for å herde', 'Det herder umiddelbart i kontakt med luft'],
    explanation: 'Anaerobe lim herder når luften stenges ute, for eksempel i en gjengeforbindelse. De brukes til gjengesikring og montering av lagre.',
  },
  {
    question: 'Hva kjennetegner epoksylim?',
    options: ['Et to-komponent lim med høy styrke for strukturell liming', 'Et én-komponent lim som herder på sekunder', 'Et lim som bare fungerer på papir', 'Et lim som alltid forblir mykt og elastisk'],
    explanation: 'Epoksylim består av to komponenter (harpiks og herder) som blandes. Det gir høy styrke og brukes til strukturelle limforbindelser.',
  },
],

  'tif-vg1-2-4': [
  {
    question: 'En bolt er merket med fasthetsklasse 8.8. Hva er strekkfastheten?',
    options: ['800 MPa', '88 MPa', '8,8 MPa', '8800 MPa'],
    explanation: 'Det første tallet i fasthetsklassen ganget med 100 gir strekkfastheten: 8 × 100 = 800 MPa. Det andre tallet angir at flytegrensen er 80 % av dette, altså 640 MPa.',
  },
  {
    question: 'Hva er flytegrensen til en bolt i fasthetsklasse 8.8?',
    options: ['640 MPa', '800 MPa', '80 MPa', '8 MPa'],
    explanation: 'Flytegrensen = første tall × andre tall × 10 = 8 × 8 × 10 = 640 MPa, altså 80 % av strekkfastheten på 800 MPa.',
  },
  {
    question: 'Hva er fordelen med en blindnagle (popnagle)?',
    options: ['Den kan monteres fra kun én side av arbeidsstykket', 'Den er sterkere enn alle boltforbindelser', 'Den kan enkelt skrus ut igjen', 'Den krever ingen hull i materialet'],
    explanation: 'Blindnagler monteres med naglepistol fra én side. Det er praktisk når baksiden ikke er tilgjengelig, for eksempel på lukkede profiler.',
  },
  {
    question: 'Hvorfor brukes tiltrekningsmoment ved montering av boltforbindelser?',
    options: ['For å oppnå riktig forspenning slik at forbindelsen verken løsner eller overbelastes', 'For å gjøre bolten lengre', 'For å fjerne gjengene på bolten', 'Fordi det går raskere enn å skru for hånd'],
    explanation: 'Riktig tiltrekningsmoment gir riktig forspenning i bolten. For løst kan forbindelsen løsne av vibrasjoner, for hardt kan bolten overbelastes og ryke.',
  },
  {
    question: 'Hva er en kileforbindelse?',
    options: ['En forbindelse som overfører rotasjon mellom aksel og nav via en kile i spor', 'En limt forbindelse mellom to plater', 'En sveiset forbindelse i V-fuge', 'En type blindnagle for tynnplater'],
    explanation: 'I en kileforbindelse ligger en kile i spor i både aksel og nav, og overfører dreiemoment, for eksempel mellom aksel og tannhjul.',
  },
],

  'tif-vg1-2-5': [
  {
    question: 'Hva er en pore i en sveis?',
    options: ['Et hulrom forårsaket av innelukket gass', 'En sprekk i overflaten', 'Et område med for mye tilsatsmateriale', 'En ripe etter sliping'],
    explanation: 'Porer er hulrom som oppstår når gass blir innestengt i sveisen under størkning, ofte på grunn av fukt, forurensning eller dårlig gassdekning.',
  },
  {
    question: 'Hva er undersnitt (undercut)?',
    options: ['En fordypning langs sveisekanten i grunnmaterialet', 'En sveis som er for høy', 'En pore midt i sveisen', 'En type kantpreparering'],
    explanation: 'Undersnitt er en fordypning i grunnmaterialet langs sveisekanten, ofte på grunn av for høy strøm. Den virker som et spenningskonsentrasjonspunkt og svekker forbindelsen.',
  },
  {
    question: 'Hva betyr NDT?',
    options: ['Non-Destructive Testing - testing uten å skade arbeidsstykket', 'New Design Technology - moderne konstruksjonsmetoder', 'Normal Density Test - måling av tetthet', 'National Welding Document - norsk sveisestandard'],
    explanation: 'NDT (Non-Destructive Testing) er ikke-destruktiv testing, som visuell kontroll, penetranttesting, ultralyd og røntgen.',
  },
  {
    question: 'Hvilken NDT-metode egner seg til å finne sprekker som er åpne mot overflaten?',
    options: ['Penetranttesting (PT)', 'Radiografisk testing (RT)', 'Strekkprøving', 'Hardhetsmåling'],
    explanation: 'Ved penetranttesting trekkes en farget væske inn i overflateåpne feil ved kapillarvirkning, og fremkalles slik at sprekker blir synlige.',
  },
  {
    question: 'Hva er en WPS?',
    options: ['En sveiseprosedyrespesifikasjon som beskriver hvordan en sveis skal utføres', 'Et sertifikat som viser at sveiseren har bestått prøve', 'Et verktøy for å måle sveisens hardhet', 'En type beskyttelsesgass'],
    explanation: 'WPS (Weld Procedure Specification) er et dokument som angir metode, parametere, materialer og fugetype for en bestemt sveiseoperasjon.',
  },
],

  'tif-vg1-2-6': [
  {
    question: 'Hva er sveiseblink?',
    options: ['En øyeskade (fotokeratitt) forårsaket av UV-stråling fra lysbuen', 'En blinkende varsellampe på sveiseapparatet', 'En refleks i sveisehjelmen', 'Gnister som spruter fra smeltebadet'],
    explanation: 'Sveiseblink er en smertefull øyeskade fra UV-strålingen i lysbuen. Den kan ramme både sveiseren og personer i nærheten uten øyevern.',
  },
  {
    question: 'Hva er det viktigste tiltaket mot sveiserøyk?',
    options: ['Punktavsug som fanger røyken ved kilden', 'Å holde pusten mens man sveiser', 'Å sveise med høyere strøm så det går fortere', 'Solbriller med mørke glass'],
    explanation: 'Punktavsug fjerner sveiserøyken der den oppstår, før den når pustesonen. Det er mer effektivt enn generell ventilasjon alene.',
  },
  {
    question: 'Hvorfor kreves brannvakt etter varme arbeider?',
    options: ['Glør og varme kan antenne materialer lenge etter at arbeidet er avsluttet', 'For å rydde verktøyet på plass', 'For å kontrollere at sveisen er sterk nok', 'Det er bare nødvendig ved arbeid utendørs'],
    explanation: 'Brann kan oppstå en stund etter at arbeidet er ferdig, fordi glør kan ulme i skjulte hulrom. Derfor skal området overvåkes etter avsluttet varmt arbeid.',
  },
  {
    question: 'Hva angir DIN-nummeret på et sveiseglass?',
    options: ['Hvor mørkt filteret er', 'Hvor stort glasset er', 'Hvilken gass som skal brukes', 'Maksimal sveisestrøm for apparatet'],
    explanation: 'DIN-nummeret klassifiserer filterets mørkhetsgrad. Høyere strømstyrke krever mørkere filter (høyere DIN-tall).',
  },
  {
    question: 'Hvilket verneutstyr er nødvendig ved sveising?',
    options: ['Sveisehjelm med riktig filter, sveisehansker, sveiseklær og vernesko', 'Bare solbriller og arbeidshansker', 'Kun hørselvern', 'Refleksvest og hjelm med visir av klar plast'],
    explanation: 'Sveising krever fullt vern mot stråling, gnister og varme: sveisehjelm med riktig DIN-filter, sveisehansker, flammehemmende klær og vernesko.',
  },
],

  'tif-vg1-2-7': [
  {
    question: 'Hvilke materialer kan brennskjæres?',
    options: ['Ulegert og lavlegert stål', 'Alle metaller, også aluminium og kobber', 'Bare rustfritt stål', 'Plast og kompositter'],
    explanation: 'Brennskjæring bygger på at stålet forbrenner (oksiderer) i ren oksygen. Metoden fungerer bare på ulegert og lavlegert stål - ikke på aluminium, kobber eller rustfritt stål.',
  },
  {
    question: 'Hva er prinsippet for plasmaskjæring?',
    options: ['En ionisert gass (plasma) med temperatur på 15 000-30 000 °C smelter og blåser bort metallet', 'Metallet forbrennes i ren oksygen', 'En roterende skive sliper seg gjennom metallet', 'Metallet fryses og knekkes'],
    explanation: 'Ved plasmaskjæring ledes en ionisert gasstråle med ekstrem temperatur gjennom snittet. Metoden kan skjære alle elektrisk ledende metaller, også aluminium og rustfritt stål.',
  },
  {
    question: 'Hvilken skjæremetode gir høyest presisjon på tynnplater?',
    options: ['Laserskjæring', 'Brennskjæring', 'Manuell vinkelsliper', 'Meisling'],
    explanation: 'Laserskjæring gir svært smale snitt og høy presisjon, og er derfor førstevalget for presisjonsskjæring av tynnplater.',
  },
  {
    question: 'Du skal kappe en plate i aluminium med termisk metode. Hva velger du?',
    options: ['Plasmaskjæring', 'Brennskjæring med acetylen og oksygen', 'Det går ikke an å skjære aluminium termisk', 'Punktsveising'],
    explanation: 'Aluminium kan ikke brennskjæres fordi det ikke oksiderer på samme måte som stål. Plasmaskjæring fungerer på alle ledende metaller, inkludert aluminium.',
  },
  {
    question: 'Hva er «drag lines» på en brennskåret flate?',
    options: ['Rillemønsteret på snittflaten som viser skjærekvaliteten', 'Kritlinjene som tegnes opp før skjæring', 'Sporene etter slipemaskin', 'Merker fra transportbåndet'],
    explanation: 'Drag lines er rillemønsteret som dannes på snittflaten ved termisk skjæring. Jevne, nesten loddrette riller tyder på riktig skjærehastighet.',
  },
],
  'tif-vg1-3-1': [
  {
    question: 'Hva er sponformende bearbeiding?',
    options: ['Prosesser der materiale fjernes som spon med et skjærende verktøy', 'Prosesser der materiale smeltes og støpes', 'Prosesser der materiale bøyes til ønsket form', 'Prosesser der materiale legges til lag for lag'],
    explanation: 'Sponformende bearbeiding fjerner materiale i form av spon ved hjelp av et skjærende verktøy, som ved dreiing og fresing.',
  },
  {
    question: 'Hva er skjærehastighet (vc) ved dreiing?',
    options: ['Hastigheten verktøyet beveger seg i forhold til materialet, målt i m/min', 'Hvor mange omdreininger spindelen gjør per minutt', 'Dybden verktøyet skjærer inn i materialet', 'Forflytningen av verktøyet per omdreining'],
    explanation: 'Skjærehastighet (vc) er hastigheten mellom verktøyegg og materiale, målt i m/min. Den avhenger av materiale og verktøy.',
  },
  {
    question: 'Hvilken spontype er typisk for seige materialer?',
    options: ['Flikspon (lange sammenhengende bånd)', 'Lamellspon (korte adskilte segmenter)', 'Smulespon (fine korte spon)', 'Elementspon (delvis sammenhengende)'],
    explanation: 'Seige materialer gir flikspon - lange, sammenhengende bånd. Sprø materialer gir lamellspon, og støpejern gir smulespon.',
  },
  {
    question: 'Hva er forskjellen på medløps- og motløpsfresing?',
    options: ['Ved medløpsfresing roterer fresa med matebevegelsen, ved motløp mot', 'Ved medløpsfresing roterer fresa mot matebevegelsen, ved motløp med', 'Medløpsfresing brukes bare på dreiebenk', 'Det er ingen reell forskjell mellom dem'],
    explanation: 'Ved medløpsfresing roterer fresa i samme retning som matebevegelsen; ved motløpsfresing roterer den mot matebevegelsen.',
  },
  {
    question: 'Hva er en konsekvens av for høy skjærehastighet?',
    options: ['Økt verktøyslitasje og varmeutvikling', 'Dårlig overflatefinish på grunn av lav hastighet', 'At sponet ikke dannes i det hele tatt', 'At maskinen bruker mindre energi'],
    explanation: 'For høy skjærehastighet gir økt varme og verktøyslitasje. For lav hastighet gir dårlig overflatefinish.',
  },
],
  'tif-vg1-3-2': [
  {
    question: 'Hvilket verktøy bør du bruke FØR spiralboring for å lage et styrehull?',
    options: ['Senterbor', 'Båndsag', 'Slipeskive', 'Gjengetapp'],
    explanation: 'Et senterbor (eller senter-punch) lager et lite styrehull først, slik at spiralboret ikke vandrer ved oppstart.',
  },
  {
    question: 'Turtallet for boring finnes med n = (vc × 1000) / (π × D). Hva blir n for vc = 30 m/min og D = 10 mm?',
    options: ['Cirka 955 o/min', 'Cirka 3000 o/min', 'Cirka 300 o/min', 'Cirka 95 o/min'],
    explanation: 'n = (30 × 1000) / (π × 10) = 30000 / 31,4 ≈ 955 o/min.',
  },
  {
    question: 'Hva er typisk spissvinkel på et spiralbor for stål?',
    options: ['118°', '90°', '60°', '180°'],
    explanation: 'Standard spissvinkel for boring i stål er 118°. For aluminium brukes ofte en spissere vinkel rundt 130°.',
  },
  {
    question: 'Hvilket bormateriale egner seg best for boring i rustfritt stål?',
    options: ['HSS-Co (koboltlegert)', 'Vanlig HSS uten legering', 'Tre-bor', 'Murbor med hardmetallspiss for betong'],
    explanation: 'Rustfritt stål er seigt og varmefølsomt; koboltlegert HSS (HSS-Co) tåler varmen bedre enn vanlig HSS.',
  },
  {
    question: 'Hvorfor bør man trekke boret opp med jevne mellomrom ved dyp boring?',
    options: ['For å bryte og fjerne spon slik at det ikke setter seg fast', 'For å øke turtallet automatisk', 'For å gjøre hullet større enn boret', 'For å slippe å bruke kjølevæske'],
    explanation: 'Ved dyp boring må sponet fjernes ved å trekke opp boret (peck), ellers pakkes sponet og boret kan brekke eller gå varmt.',
  },
],
  'tif-vg1-3-3': [
  {
    question: 'Hva er standard måletemperatur i metrologi?',
    options: ['20 °C', '0 °C', '37 °C', '100 °C'],
    explanation: 'Standard måletemperatur er 20 °C. Ved avvik ekspanderer eller krymper både emne og måleverktøy.',
  },
  {
    question: 'En stålstang er 1 meter lang ved 20 °C. Stål utvider seg ca. 12 µm per meter per °C. Hvor mye lengre blir den ved 25 °C?',
    options: ['60 µm', '12 µm', '120 µm', '5 µm'],
    explanation: 'Temperaturendring = 5 °C. Utvidelse = 12 µm × 1 m × 5 °C = 60 µm.',
  },
  {
    question: 'Hva er en toleranse?',
    options: ['Tillatt avvik fra nominell dimensjon', 'Den eksakte målte verdien på emnet', 'Måleverktøyets serienummer', 'Temperaturen emnet skal måles ved'],
    explanation: 'En toleranse angir hvor stort avvik fra den nominelle (ønskede) dimensjonen som er tillatt.',
  },
  {
    question: 'Hva kjennetegner en spillepasning (klaringspasning)?',
    options: ['Hullet er alltid større enn akselen', 'Akselen er alltid større enn hullet', 'Hull og aksel er alltid nøyaktig like store', 'Pasningen krever oppvarming for montering'],
    explanation: 'I en spille-/klaringspasning er hullet alltid større enn akselen, slik at det blir klaring mellom delene.',
  },
  {
    question: 'Hvilket måleverktøy gir høyest presisjon for utvendige mål, typisk 0,01 mm?',
    options: ['Mikrometer', 'Tommestokk', 'Vinkelhake', 'Vater'],
    explanation: 'Mikrometeret bruker en skruemekanisme og måler typisk til 0,01 mm (eller 0,001 mm), mer presist enn en skyvelære.',
  },
],
  'tif-vg1-3-4': [
  {
    question: 'Hva står CNC for?',
    options: ['Computer Numerical Control', 'Central Network Computer', 'Continuous Numeric Cutting', 'Computer Numeric Casting'],
    explanation: 'CNC står for Computer Numerical Control - datastyrte maskiner som utfører bearbeiding etter et program.',
  },
  {
    question: 'Hvilket register brukes vanligvis til å lagre arbeidsnullpunktet på en CNC-maskin?',
    options: ['G54', 'M03', 'G00', 'F100'],
    explanation: 'G54 (og G55-G59) er offset-registre der programmøren lagrer arbeidsnullpunktet på emnet.',
  },
  {
    question: 'Hva er forskjellen på maskinnullpunkt og arbeidsnullpunkt?',
    options: ['Maskinnullpunktet er fast fra maskinen, arbeidsnullpunktet velger programmøren på emnet', 'Maskinnullpunktet velges av programmøren, arbeidsnullpunktet er fast', 'De er alltid det samme punktet', 'Arbeidsnullpunktet finnes bare på dreiebenker'],
    explanation: 'Maskinnullpunktet er et fast referansepunkt definert av maskinen, mens arbeidsnullpunktet er programmørens valgte nullpunkt på emnet.',
  },
  {
    question: 'Hvor mange hovedakser har en standard 3-akset CNC-fres?',
    options: ['Tre (X, Y og Z)', 'To (X og Z)', 'Fire (X, Y, Z og B)', 'Fem (X, Y, Z, A og B)'],
    explanation: 'En standard CNC-fres (bearbeidingssenter) har tre akser: X, Y og Z. En CNC-dreiebenk har normalt to (X og Z).',
  },
  {
    question: 'Hva er en fordel med CNC-bearbeiding fremfor manuell bearbeiding?',
    options: ['Høy repeterbarhet og nøyaktighet i serieproduksjon', 'Lavere investeringskostnad ved oppstart', 'Krever ingen programmering', 'Raskere rigging ved enkeltstykker'],
    explanation: 'CNC gir høy repeterbarhet og nøyaktighet, spesielt i serier. Ulemper er høy investeringskostnad og at programmering/rigging tar tid.',
  },
],
  'tif-vg1-3-5': [
  {
    question: 'Hvilken G-kode brukes for hurtiggang (rapid) uten mating?',
    options: ['G00', 'G01', 'G02', 'G03'],
    explanation: 'G00 er hurtiggang - den raskeste bevegelsen, brukt til posisjonering uten å skjære i materialet.',
  },
  {
    question: 'Hvilken G-kode gir lineær interpolasjon (rett linje med kontrollert mating)?',
    options: ['G01', 'G00', 'G17', 'G90'],
    explanation: 'G01 er lineær interpolasjon - en rett linje utført med kontrollert matehastighet (F).',
  },
  {
    question: 'Hva betyr M03 i et CNC-program?',
    options: ['Spindel på, med klokken', 'Spindel av', 'Programstopp', 'Kjølevæske på'],
    explanation: 'M03 starter spindelen med klokken. M04 er mot klokken, og M05 slår spindelen av.',
  },
  {
    question: 'Hva er forskjellen på G90 og G91?',
    options: ['G90 er absolutte koordinater, G91 er inkrementelle', 'G90 er inkrementelle koordinater, G91 er absolutte', 'G90 velger XY-plan, G91 velger XZ-plan', 'G90 slår på kjøling, G91 slår den av'],
    explanation: 'G90 gir absolutte koordinater (fra arbeidsnullpunkt), mens G91 gir inkrementelle koordinater (fra forrige posisjon).',
  },
  {
    question: 'I blokken «N10 G01 X50.0 Y25.0 F100», hva angir F100?',
    options: ['Matehastigheten (feed rate)', 'Blokknummeret', 'Spindelturtallet', 'Verktøynummeret'],
    explanation: 'F angir matehastigheten (feed rate). N10 er blokknummer, X/Y er koordinater og G01 er bevegelsestypen.',
  },
],
  'tif-vg1-3-6': [
  {
    question: 'Hva står CAM for?',
    options: ['Computer Aided Manufacturing', 'Computer Aided Modelling', 'Central Automatic Machining', 'Controlled Adaptive Milling'],
    explanation: 'CAM står for Computer Aided Manufacturing - programvare som genererer verktøybaner og CNC-program ut fra CAD-geometri.',
  },
  {
    question: 'Hva er oppgaven til en postprosessor i CAM?',
    options: ['Oversette CAM-dataene til maskinspesifikk G-kode', 'Lage selve 3D-modellen', 'Spenne fast emnet i maskinen', 'Måle den ferdige delen'],
    explanation: 'Postprosessoren oversetter de beregnede verktøybanene til G-kode som passer akkurat den maskinen og styringen som skal brukes.',
  },
  {
    question: 'Hva er hensikten med grovbearbeiding (roughing)?',
    options: ['Fjerne mye materiale raskt før finbearbeiding', 'Gi den endelige overflatefinishen', 'Måle emnet underveis', 'Lage gjenger i hull'],
    explanation: 'Grovbearbeiding fjerner mest mulig materiale raskt. Finbearbeiding gjøres etterpå for nøyaktig mål og god overflate.',
  },
  {
    question: 'Hva kjennetegner en adaptiv (trochoidal) freseslag?',
    options: ['Konstant verktøyinngrep som gir jevn belastning på verktøyet', 'At verktøyet alltid står stille', 'At hele dybden tas i ett kutt uten bevegelse', 'At fresa kun beveger seg i Z-aksen'],
    explanation: 'Adaptive/trochoidale strategier holder verktøyinngrepet konstant, noe som gir jevn belastning, mindre varme og lengre verktøylevetid.',
  },
  {
    question: 'Hvilket steg i CAM-arbeidsflyten lar deg oppdage kollisjoner FØR du kjører programmet på maskinen?',
    options: ['Simulering', 'Postprosessering', 'Fastspenning av emne', 'Måling av ferdig del'],
    explanation: 'Simulering gir en visuell kontroll av verktøybanene og avslører kollisjoner før programmet kjøres på den fysiske maskinen.',
  },
],
  'tif-vg1-3-7': [
  {
    question: 'Hva er forebyggende vedlikehold?',
    options: ['Planlagte aktiviteter for å hindre feil før de oppstår', 'Reparasjon etter at en feil har oppstått', 'Vedlikehold basert kun på tilfeldighet', 'Å kjøre maskinen til den bryter sammen'],
    explanation: 'Forebyggende vedlikehold er planlagte aktiviteter (inspeksjon, smøring, bytte av slitedeler) for å hindre feil før de oppstår.',
  },
  {
    question: 'Hva kjennetegner korrektivt vedlikehold?',
    options: ['Reparasjon utføres etter at feilen har oppstått', 'Det utføres alltid før feilen oppstår', 'Det er basert på vibrasjonsmåling', 'Det gjelder bare smøring'],
    explanation: 'Korrektivt vedlikehold er reparasjon etter at en feil har oppstått, og gir ofte uplanlagt produksjonsstans.',
  },
  {
    question: 'Hva er et eksempel på tilstandsbasert vedlikehold?',
    options: ['Vibrasjonsmåling for å oppdage slitasje', 'Å skifte alle deler på fast dato uansett tilstand', 'Å vente til maskinen stopper', 'Å rengjøre gulvet i verkstedet'],
    explanation: 'Tilstandsbasert vedlikehold utføres ut fra målt tilstand, for eksempel vibrasjonsmåling, oljeanalyse eller temperaturovervåkning.',
  },
  {
    question: 'Hva er en fordel med godt forebyggende vedlikehold?',
    options: ['Lavere totalkostnad og færre uplanlagte stopp', 'Høyere antall maskinhavarier', 'Kortere levetid på utstyret', 'Mer uplanlagt produksjonsstans'],
    explanation: 'Forebyggende vedlikehold reduserer uplanlagt stans, forlenger levetiden og gir lavere totalkostnad.',
  },
  {
    question: 'Hvilken oppgave hører til operatørens daglige vedlikehold før oppstart?',
    options: ['Kontrollere olje- og kjølevæskenivå og rengjøre spon', 'Demontere hele spindelen', 'Bytte styringselektronikken', 'Kalibrere alle akser med lasermåler'],
    explanation: 'Daglig operatørvedlikehold omfatter enkle, faste oppgaver som visuell inspeksjon, sjekk av væskenivå og rengjøring av spon.',
  },
],
  'tif-vg1-4-1': [
  {
    question: 'Hvorfor brukes tekniske tegninger i industrien?',
    options: ['For entydig, standardisert kommunikasjon mellom designer og produsent', 'Fordi de er penere enn fotografier', 'For å skjule informasjon for konkurrenter', 'Bare for å fylle ut arkivet'],
    explanation: 'Tekniske tegninger er industriens standardiserte språk og gir entydig kommunikasjon om hvordan et produkt skal lages.',
  },
  {
    question: 'Hvilken linjetype brukes for synlige kanter og konturer?',
    options: ['Sammenhengende tykk linje', 'Stiplet tynn linje', 'Strek-prikk tynn linje', 'Sammenhengende tynn linje'],
    explanation: 'Synlige kanter og konturer tegnes med sammenhengende tykk linje. Skjulte kanter er stiplet, og senterlinjer er strek-prikk.',
  },
  {
    question: 'Hvilken linjetype brukes for senterlinjer og symmetrilinjer?',
    options: ['Strek-prikk tynn linje', 'Sammenhengende tykk linje', 'Stiplet tynn linje', 'Sammenhengende medium linje'],
    explanation: 'Senter- og symmetrilinjer tegnes med strek-prikk tynn linje (lang strek, prikk, lang strek).',
  },
  {
    question: 'Et A3-ark har målene 297 × 420 mm. Hvor stort er det i forhold til et A4-ark (210 × 297 mm)?',
    options: ['Dobbelt så stort areal som A4', 'Halvparten så stort som A4', 'Nøyaktig like stort som A4', 'Fire ganger så stort som A4'],
    explanation: 'A3 er dobbelt så stort som A4. Hvert trinn opp i A-serien dobler arealet (A4 → A3 → A2 osv.).',
  },
  {
    question: 'Hvor på tegningen skal tittelfeltet alltid plasseres?',
    options: ['Nederst til høyre', 'Øverst til venstre', 'Midt på arket', 'Det har ingen fast plass'],
    explanation: 'Tittelfeltet med informasjon om delen og tegningen plasseres alltid nederst til høyre på arket.',
  },
],
  'tif-vg1-4-2': [
  {
    question: 'Hvilken projeksjonsmetode brukes i Norge og Europa?',
    options: ['1. vinkel projeksjon', '3. vinkel projeksjon', '5. vinkel projeksjon', 'Isometrisk projeksjon'],
    explanation: 'I Norge og Europa brukes 1. vinkel projeksjon. USA bruker 3. vinkel projeksjon.',
  },
  {
    question: 'I 1. vinkel projeksjon (europeisk), hvor plasseres toppvisningen?',
    options: ['Under frontvisningen', 'Over frontvisningen', 'Til høyre for frontvisningen', 'Inni frontvisningen'],
    explanation: 'I 1. vinkel projeksjon plasseres toppvisningen UNDER frontvisningen. I 3. vinkel (USA) plasseres den over.',
  },
  {
    question: 'Hvorfor bruker man snittegning?',
    options: ['For å vise indre detaljer tydelig og unngå mange skjulte linjer', 'For å gjøre tegningen vanskeligere å lese', 'For å spare blekk', 'For å skjule hulrom i emnet'],
    explanation: 'Snitt viser indre detaljer og hulrom tydelig og reduserer antallet skjulte (stiplede) linjer på tegningen.',
  },
  {
    question: 'Med hvilken vinkel tegnes skraveringslinjene som markerer skårne flater i et snitt?',
    options: ['45°', '90°', '30°', '60°'],
    explanation: 'Skåret materiale i et snitt markeres med skraveringslinjer, vanligvis tegnet i 45°.',
  },
  {
    question: 'Hva brukes en bruddlinje til?',
    options: ['Å vise at en del av et langt emne er kuttet bort for å spare plass', 'Å markere senter for et hull', 'Å vise målestokken', 'Å skille frontvisning fra toppvisning'],
    explanation: 'En bruddlinje viser at en del av et langt, ensartet emne er kuttet bort slik at tegningen kan vises i mindre format.',
  },
],
  'tif-vg1-4-3': [
  {
    question: 'Hva kjennetegner en isometrisk tegning?',
    options: ['Alle tre hovedakser har samme målforhold', 'Bare én akse vises', 'Objektet vises med realistisk perspektivforkortning', 'Sirkler forblir perfekte sirkler'],
    explanation: 'I isometrisk projeksjon har alle tre hovedakser samme målforhold, og parallelle linjer forblir parallelle uten perspektivforkortning.',
  },
  {
    question: 'I hvilken vinkel fra horisontalen tegnes de to skrå isometriske aksene?',
    options: ['30°', '45°', '60°', '90°'],
    explanation: 'De to skrå isometriske aksene tegnes 30° fra horisontalen, i tillegg til den vertikale aksen.',
  },
  {
    question: 'Hvordan fremstår en sirkel i isometrisk visning?',
    options: ['Som en ellipse', 'Som en perfekt sirkel', 'Som et kvadrat', 'Som en rett linje'],
    explanation: 'En sirkel blir til en ellipse i isometrisk visning, og kan konstrueres med for eksempel 4-senter-metoden.',
  },
  {
    question: 'Hva er en begrensning ved isometrisk tegning?',
    options: ['Den egner seg ikke for presise målinger av vinkler', 'Den kan ikke vise dybde', 'Den kan bare vise sylindere', 'Parallelle linjer forsvinner'],
    explanation: 'Isometrisk tegning er god for visualisering, men egner seg ikke for nøyaktige vinkelmålinger, og sirkler blir ellipser.',
  },
  {
    question: 'Hva er en eksplosjonstegning?',
    options: ['En isometrisk tegning der delene vises trukket fra hverandre', 'En tegning av et eksplosivt produkt', 'En tegning med farger som skifter', 'En tegning uten mål'],
    explanation: 'En eksplosjonstegning viser delene trukket fra hverandre (ofte isometrisk), slik at man ser hvordan de monteres sammen.',
  },
],
  'tif-vg1-4-4': [
  {
    question: 'Hva står DAK for?',
    options: ['Dataassistert Konstruksjon', 'Digital Arkiv Kontroll', 'Dynamisk Akse Kalibrering', 'Direkte Automatisk Kapping'],
    explanation: 'DAK står for Dataassistert Konstruksjon (engelsk CAD), altså tegning og konstruksjon med dataverktøy.',
  },
  {
    question: 'Hva gjør OFFSET-kommandoen i et DAK-program?',
    options: ['Lager parallelle kopier med fast avstand', 'Kutter linjer ved skjæringspunkt', 'Roterer hele tegningen', 'Sletter alle lag'],
    explanation: 'OFFSET lager parallelle kopier av objekter med en angitt fast avstand. TRIM derimot kutter linjer ved skjæringspunkt.',
  },
  {
    question: 'Hva er hensikten med lag (layers) i DAK?',
    options: ['Å organisere og gruppere objekter, f.eks. mållinjer for seg', 'Å gjøre filen større', 'Å låse tegningen permanent', 'Å fjerne alle dimensjoner'],
    explanation: 'Lag grupperer objekter logisk (f.eks. senterlinjer, mål, konturer) slik at de kan styres, vises eller skjules samlet.',
  },
  {
    question: 'Hvordan skriver man relativ koordinatinput fra siste punkt i et DAK-program?',
    options: ['@x,y (f.eks. @50,30)', 'x,y uten symbol', '@avstand>vinkel', '#x#y'],
    explanation: 'Relative koordinater fra siste punkt skrives med @, for eksempel @50,30. Absolutte koordinater skrives uten @.',
  },
  {
    question: 'Hva er en polylinje?',
    options: ['En sammenhengende serie av linjer og buer som ett objekt', 'En linje som bare kan ha to punkter', 'En linje uten lengde', 'En sirkel med flere sentre'],
    explanation: 'En polylinje er en sammenhengende serie av linjesegmenter og buer som behandles som ett enkelt objekt.',
  },
],
  'tif-vg1-4-5': [
  {
    question: 'Hva er parametrisk 3D-modellering?',
    options: ['Modellering der features og dimensjoner kan redigeres i ettertid', 'Modellering uten noen mål', 'Modellering som kun lager 2D-tegninger', 'Modellering der modellen ikke kan endres'],
    explanation: 'Parametrisk modellering bygger på en redigerbar designhistorikk der features og dimensjoner kan endres senere.',
  },
  {
    question: 'Hva gjør Extrude-operasjonen?',
    options: ['Trekker en 2D-profil ut til en 3D-form', 'Roterer en profil rundt en akse', 'Lager et hull i en flate', 'Måler avstanden mellom to punkter'],
    explanation: 'Extrude trekker en 2D-profil ut i en retning og danner en 3D-form. Revolve derimot roterer profilen rundt en akse.',
  },
  {
    question: 'Hvilken operasjon roterer en 2D-profil rundt en akse for å lage et rotasjonssymmetrisk emne?',
    options: ['Revolve', 'Extrude', 'Mate', 'Fillet'],
    explanation: 'Revolve roterer en 2D-profil rundt en akse og egner seg for rotasjonssymmetriske deler som aksler og hjul.',
  },
  {
    question: 'Hva er en «mate» i en sammenstilling (assembly)?',
    options: ['En geometrisk relasjon mellom deler, f.eks. flate-mot-flate', 'Et materiale som tildeles delen', 'En 2D-skisse', 'En målestokk for tegningen'],
    explanation: 'En mate er en geometrisk relasjon som posisjonerer deler i forhold til hverandre i en sammenstilling (f.eks. samaksing eller flate mot flate).',
  },
  {
    question: 'Hva betyr assosiativitet mellom 3D-modell og 2D-tegning?',
    options: ['Tegningen oppdateres automatisk når modellen endres', 'Tegningen er helt uavhengig av modellen', 'Modellen slettes når tegningen lages', 'De må alltid være i ulike filer'],
    explanation: 'Assosiativitet betyr at 2D-tegningen er koblet til 3D-modellen, slik at den oppdateres når modellen endres.',
  },
],
  'tif-vg1-4-6': [
  {
    question: 'For målet 25 +0,2/-0,1, hva er det største tillatte målet?',
    options: ['25,2 mm', '24,9 mm', '25,0 mm', '25,3 mm'],
    explanation: 'Øvre avvik er +0,2, så maks mål er 25,0 + 0,2 = 25,2 mm. Nedre grense er 25,0 - 0,1 = 24,9 mm.',
  },
  {
    question: 'For målet 25 +0,2/-0,1, hvor stor er den totale toleransen?',
    options: ['0,3 mm', '0,1 mm', '0,2 mm', '0,5 mm'],
    explanation: 'Total toleranse = øvre grense − nedre grense = 25,2 − 24,9 = 0,3 mm.',
  },
  {
    question: 'I ISO-toleransebetegnelsen Ø25H7, hva angir bokstaven H?',
    options: ['Posisjonen til toleransefeltet', 'Størrelsen på toleransen', 'Materialet i emnet', 'Overflateruheten'],
    explanation: 'Bokstaven angir posisjonen til toleransefeltet, mens tallet (IT-graden) angir størrelsen på toleransen.',
  },
  {
    question: 'Hva betyr det at en tegning har «ISO 2768-m» i tittelfeltet?',
    options: ['Umerkede mål har medium allmenn toleranse', 'Alle mål er uten toleranse', 'Tegningen er i målestokk 2768', 'Delen er laget av materiale m'],
    explanation: 'ISO 2768-m angir at alle mål uten egen toleranse har medium allmenn toleranse etter standarden.',
  },
  {
    question: 'Hva kontrollerer overflateruhet angitt som Ra?',
    options: ['Den aritmetiske middelverdien av overflatens ruhet', 'Diameteren på et hull', 'Vinkelretthet mot en referanse', 'Materialets hardhet'],
    explanation: 'Ra er den aritmetiske middelverdien av overflatens ujevnheter og brukes til å angi krav til overflatefinish.',
  },
],
  'tif-vg1-5-1': [
  {
    question: 'I hvilken enhet måles elektrisk strøm?',
    options: ['Ampere (A)', 'Volt (V)', 'Ohm (Ω)', 'Watt (W)'],
    explanation: 'Elektrisk strøm måles i ampere (A). Volt er spenning, ohm er motstand og watt er effekt.',
  },
  {
    question: 'Ohms lov sier U = R · I. Hva blir spenningen U over en motstand på 10 Ω med strøm 2 A?',
    options: ['20 V', '5 V', '12 V', '0,2 V'],
    explanation: 'U = R · I = 10 Ω · 2 A = 20 V.',
  },
  {
    question: 'En krets har 12 V og en motstand på 4 Ω. Hvor stor blir strømmen (I = U/R)?',
    options: ['3 A', '48 A', '0,33 A', '8 A'],
    explanation: 'I = U/R = 12 V / 4 Ω = 3 A.',
  },
  {
    question: 'Hva kjennetegner vekselstrøm (AC)?',
    options: ['Strømmen skifter retning periodisk', 'Strømmen flyter alltid i samme retning', 'Det er ingen spenning', 'Den finnes bare i batterier'],
    explanation: 'Vekselstrøm (AC) skifter retning periodisk - i Norge med 50 Hz. Likestrøm (DC) flyter alltid samme vei.',
  },
  {
    question: 'Hvor mange ganger per sekund skifter 50 Hz vekselstrøm retning?',
    options: ['100 ganger', '50 ganger', '25 ganger', '230 ganger'],
    explanation: 'Ved 50 Hz fullføres 50 hele svingninger per sekund, og strømmen skifter retning to ganger per svingning = 100 ganger.',
  },
],
  'tif-vg1-5-2': [
  {
    question: 'Hva er likt for alle komponenter i en seriekobling?',
    options: ['Strømmen gjennom dem', 'Spenningen over hver komponent', 'At de er parallelle', 'At motstanden alltid er null'],
    explanation: 'I en seriekobling er strømmen lik gjennom alle komponenter, mens spenningen fordeles på dem.',
  },
  {
    question: 'Hva blir total motstand av tre motstander på 10 Ω, 20 Ω og 30 Ω i serie?',
    options: ['60 Ω', '6 Ω', '30 Ω', '20 Ω'],
    explanation: 'I seriekobling summeres motstandene: 10 + 20 + 30 = 60 Ω.',
  },
  {
    question: 'Hva kreves for en komplett elektrisk krets?',
    options: ['Spenningskilde, leder, last og en lukket bane', 'Bare en spenningskilde', 'Kun en bryter', 'Et åpent kretsbrudd'],
    explanation: 'En komplett krets trenger en spenningskilde, ledere, en last og at banen er lukket slik at strømmen kan gå rundt.',
  },
  {
    question: 'Hva er en kortslutning?',
    options: ['Når strømmen får en snarvei nesten uten motstand, slik at strømmen blir svært høy', 'Når kretsen er åpen og ingen strøm går', 'Når spenningen er null', 'Når en bryter er slått av'],
    explanation: 'En kortslutning er en bane med svært lav motstand som gir veldig høy strøm, og kan skade utstyr og forårsake brann.',
  },
  {
    question: 'Hva skjer med strømmen i en gren hvis du legger til flere parallelle grener?',
    options: ['Totalstrømmen fra kilden øker fordi totalmotstanden synker', 'Totalstrømmen blir alltid null', 'Spenningen over grenene øker', 'Hver gren får mindre spenning'],
    explanation: 'Flere parallelle grener gir lavere total motstand, slik at totalstrømmen fra kilden øker. Spenningen over grenene er lik.',
  },
],
  'tif-vg1-5-3': [
  {
    question: 'Med våt hud (ca. 1000 Ω) og 230 V, hvor stor strøm går gjennom kroppen (I = U/R)?',
    options: ['230 mA (livsfarlig)', '2,3 mA (kjennes knapt)', '23 mA', '0,23 mA'],
    explanation: 'I = 230 V / 1000 Ω = 0,23 A = 230 mA, som er livsfarlig. Tørr hud (100 000 Ω) gir bare ca. 2,3 mA.',
  },
  {
    question: 'Hvilken strømstyrke regnes som farlig fordi musklene kramper slik at man ikke kan slippe taket?',
    options: ['10-30 mA', '1 mA', '0,1 mA', 'Under 0,5 mA'],
    explanation: 'Ved 10-30 mA gir strømmen muskelkrampe slik at man ikke kan slippe. Over 75-100 mA kan gi hjerteflimmer og død.',
  },
  {
    question: 'Hva er hovedoppgaven til en jordfeilbryter?',
    options: ['Bryte strømmen raskt hvis strøm lekker til jord', 'Øke spenningen i anlegget', 'Lagre elektrisk energi', 'Måle effektforbruket'],
    explanation: 'En jordfeilbryter bryter strømmen svært raskt dersom det oppstår en jordfeil (lekkstrøm), og beskytter mot elektrisk støt.',
  },
  {
    question: 'Hva er hensikten med beskyttelsesjord?',
    options: ['Lede bort feilstrøm fra metallkapsling så den ikke gir støt', 'Øke effekten i kretsen', 'Senke spenningen til null overalt', 'Gjøre kabelen tykkere'],
    explanation: 'Beskyttelsesjord kobler metallkapslinger til jord slik at en feilstrøm ledes trygt bort i stedet for å gå gjennom en person.',
  },
  {
    question: 'Hvem kan utføre arbeid på faste elektriske anlegg ifølge forskriftene?',
    options: ['Kun personer med riktig elektrofaglig kompetanse', 'Alle som har en skrutrekker', 'Bare bedriftens daglige leder', 'Enhver elev uten opplæring'],
    explanation: 'Forskriftene (FEL/FSE) krever at arbeid på faste elektriske anlegg utføres av personer med riktig elektrofaglig kompetanse.',
  },
],
  'tif-vg1-5-4': [
  {
    question: 'Hva sier Pascals lov?',
    options: ['Trykk i en innestengt væske forplanter seg likt i alle retninger', 'Væske kan ikke overføre kraft', 'Trykk avtar med avstanden fra pumpa', 'Kraft er uavhengig av areal'],
    explanation: 'Pascals lov sier at trykket i en innestengt væske forplanter seg likt i alle retninger.',
  },
  {
    question: 'Trykk er p = F/A. Hva blir trykket når en kraft på 1000 N virker på et areal på 0,01 m²?',
    options: ['100 000 Pa (1 bar)', '10 Pa', '1000 Pa', '10 000 Pa'],
    explanation: 'p = F/A = 1000 N / 0,01 m² = 100 000 Pa = 1 bar.',
  },
  {
    question: 'Hvor mange pascal er 1 bar?',
    options: ['100 000 Pa', '1000 Pa', '10 Pa', '1 000 000 Pa'],
    explanation: '1 bar = 100 000 Pa (10⁵ Pa), som omtrent tilsvarer atmosfæretrykket ved havnivå.',
  },
  {
    question: 'I et hydraulisk system gjelder F₁/A₁ = F₂/A₂. Et trykk på 50 N på et areal 0,001 m² gir hvilken kraft på en sylinder med areal 0,01 m²?',
    options: ['500 N', '50 N', '5 N', '5000 N'],
    explanation: 'Trykket er likt: p = 50/0,001 = 50 000 Pa. Kraft = p · A = 50 000 · 0,01 = 500 N. Stor sylinder gir kraftforsterkning.',
  },
  {
    question: 'Hva er en fordel med hydraulikk?',
    options: ['Stor kraftforsterkning fra et lite system', 'At væsken kan komprimeres mye', 'At det aldri kan lekke', 'At det ikke trenger pumpe'],
    explanation: 'Hydraulikk gir stor kraftforsterkning fordi en lite sylinder kan styre en stor sylinder via likt trykk i væsken.',
  },
],
  'tif-vg1-5-5': [
  {
    question: 'Hvilket symbol viser en pumpe i et hydraulisk skjema?',
    options: ['En sirkel med trekant som peker ut', 'Et åpent rektangel (tank)', 'En rombe (filter)', 'En rett linje (slange)'],
    explanation: 'En pumpe vises med en sirkel med trekant som peker ut. En motor har trekanten pekende inn.',
  },
  {
    question: 'I hvilken rekkefølge leses et typisk hydraulisk skjema?',
    options: ['Energikilde (tank + pumpe) → kontroll (ventiler) → aktuator', 'Aktuator → pumpe → tank', 'Filter → slange → tank uten pumpe', 'Tilfeldig rekkefølge'],
    explanation: 'Et hydraulisk skjema leses fra energikilden (tank og pumpe), via ventilene som styrer, til aktuatoren (sylinder/motor).',
  },
  {
    question: 'Hva er kavitasjon i et hydraulisk system?',
    options: ['Dannelse av dampbobler ved lavt trykk som kan skade komponenter', 'At oljen blir for kald', 'At sylinderen beveger seg for sakte', 'At filteret er for rent'],
    explanation: 'Kavitasjon er dannelse av dampbobler ved for lavt trykk (f.eks. ved pumpeinntak); når boblene kollapser kan de skade komponenter.',
  },
  {
    question: 'Hvorfor er regelmessig oljeskift og filterskift viktig i hydraulikk?',
    options: ['Forurensning i oljen sliter ut og ødelegger komponenter', 'Det gjør oljen mer komprimerbar', 'Det øker trykket automatisk', 'Det er bare nødvendig i pneumatikk'],
    explanation: 'Forurenset hydraulikkolje sliter på pumper, ventiler og sylindere. Rene filtre og frisk olje forlenger systemets levetid.',
  },
  {
    question: 'Hva er et typisk tegn på en lekkasje i et hydraulisk system?',
    options: ['Oljesøl, fall i trykk og redusert kraft', 'At oljen blir renere', 'At sylinderen går raskere', 'At trykket øker over normalt'],
    explanation: 'Lekkasje gir synlig oljesøl, trykkfall og redusert kraft/hastighet, og må utbedres både av hensyn til drift og miljø.',
  },
],
  'tif-vg1-5-6': [
  {
    question: 'Hva bruker pneumatikk for å overføre kraft?',
    options: ['Komprimert luft', 'Hydraulikkolje', 'Elektrisk strøm direkte', 'Vann under høyt trykk'],
    explanation: 'Pneumatikk bruker komprimert (trykksatt) luft til å overføre kraft og bevegelse.',
  },
  {
    question: 'Hva gjør en kompressor?',
    options: ['Suger inn luft og komprimerer den til høyere trykk', 'Renser hydraulikkolje', 'Kjøler ned elektriske motorer', 'Lagrer elektrisk energi'],
    explanation: 'En kompressor suger inn atmosfærisk luft og komprimerer den til høyere trykk for bruk i pneumatiske systemer.',
  },
  {
    question: 'Hva står FRL-enheten for i luftbehandling?',
    options: ['Filter-Regulator-Lubrikator', 'Frekvens-Rele-Last', 'Filter-Rør-Ledning', 'Funksjon-Retur-Lekkasje'],
    explanation: 'FRL står for Filter, Regulator og Lubrikator - enheten som renser, regulerer trykk og smører trykkluften før bruk.',
  },
  {
    question: 'Hva er et typisk arbeidstrykk for pneumatisk håndverktøy?',
    options: ['6-8 bar', '0,5 bar', '40-50 bar', '200 bar'],
    explanation: 'Pneumatisk håndverktøy bruker typisk 6-8 bar. Industriautomasjon ligger ofte rundt 4-6 bar.',
  },
  {
    question: 'Hva er en fordel med pneumatikk sammenlignet med hydraulikk?',
    options: ['Det er rent, raskt og lekkasjer gir bare luft, ikke oljesøl', 'Det gir mye større kraft per areal', 'Luft kan ikke komprimeres', 'Det krever ingen energikilde'],
    explanation: 'Pneumatikk er rent og raskt, og en lekkasje slipper bare ut luft. Hydraulikk gir derimot mye større kraft.',
  },
],
  'tif-vg1-5-7': [
  {
    question: 'Hvilken standard brukes for pneumatiske symboler i kretsskjemaer?',
    options: ['ISO 1219', 'ISO 9001', 'ISO 14001', 'ISO 2768'],
    explanation: 'Pneumatiske og hydrauliske symboler standardiseres etter ISO 1219.',
  },
  {
    question: 'Hva betyr betegnelsen «5/2-ventil»?',
    options: ['5 porter og 2 posisjoner', '5 posisjoner og 2 porter', '5 bar og 2 sylindere', '5 ventiler i 2 grupper'],
    explanation: 'En 5/2-ventil har 5 porter (tilkoblinger) og 2 posisjoner (koblingstilstander).',
  },
  {
    question: 'Hva gjør en vakuumgriper?',
    options: ['Suger fast glatte gjenstander med undertrykk', 'Klemmer fast med to fingre', 'Sveiser deler sammen', 'Måler trykket i systemet'],
    explanation: 'En vakuumgriper bruker undertrykk (vakuum) til å suge fast og holde glatte gjenstander, f.eks. plater og emballasje.',
  },
  {
    question: 'Hva er hensikten med en lyddemper på utløpsporten til en pneumatisk ventil?',
    options: ['Dempe støyen når trykkluft slippes ut', 'Øke trykket i sylinderen', 'Filtrere oljen', 'Måle luftforbruket'],
    explanation: 'Når trykkluft slippes raskt ut, lager det mye støy. En lyddemper på utløpsporten reduserer denne støyen.',
  },
  {
    question: 'En pneumatisk sylinder beveger seg ikke selv om ventilen skifter. Hva bør du sjekke først?',
    options: ['Om det er nok trykk og at luftslangen ikke er klemt eller frakoblet', 'Om CNC-programmet har riktig G-kode', 'Om oljenivået i tanken er riktig', 'Om sveisestrømmen er for høy'],
    explanation: 'Ved feilsøking starter man med det enkleste: kontroller lufttrykk og at slanger er tilkoblet og ikke klemt før man går videre.',
  },
],
  'tif-vg1-5-8': [
  {
    question: 'Hvordan styres en solenoidventil?',
    options: ['Elektrisk, via en elektromagnet (solenoid)', 'Manuelt med håndtak hver gang', 'Med hydraulikkolje', 'Med trykkluft alene uten strøm'],
    explanation: 'En solenoidventil styres elektrisk: spenning til solenoiden skaper et magnetfelt som flytter ventilspolen.',
  },
  {
    question: 'Hva er forskjellen på en monostabil og en bistabil solenoidventil?',
    options: ['Monostabil har fjær-retur, bistabil blir værende i posisjon til motsatt solenoid aktiveres', 'Monostabil har to solenoider, bistabil har én', 'Monostabil bruker olje, bistabil bruker luft', 'Det er ingen forskjell'],
    explanation: 'Monostabil ventil går tilbake med fjær når strømmen fjernes; bistabil blir værende til den motsatte solenoiden aktiveres.',
  },
  {
    question: 'Hvilken sensor egner seg for å oppdage metallgjenstander uten berøring?',
    options: ['Induktiv giver', 'Kapasitiv giver for kun væske', 'Mikrofon', 'Temperaturføler'],
    explanation: 'En induktiv giver registrerer metall uten berøring. Kapasitive givere kan registrere både metall og ikke-metall.',
  },
  {
    question: 'Hva står PLS for i automatisering?',
    options: ['Programmerbar Logisk Styring', 'Pneumatisk Last System', 'Parallell Linje Sensor', 'Permanent Lav Spenning'],
    explanation: 'PLS står for Programmerbar Logisk Styring (engelsk PLC) - en datamaskin som styrer maskiner ut fra inn- og utganger.',
  },
  {
    question: 'Hva representerer et stigediagram (ladder) i PLS-programmering?',
    options: ['Den logiske sammenhengen mellom innganger og utganger', 'Den fysiske plasseringen av maskiner', 'Trykket i et pneumatisk system', 'Tegningen av en sylinder'],
    explanation: 'Et stigediagram viser styringslogikken grafisk, med innganger (sensorer/brytere) til venstre og utganger (ventiler/motorer) til høyre.',
  },
],
  'tif-vg1-6-1': [
  {
    question: 'Hva står HMS for?',
    options: ['Helse, Miljø og Sikkerhet', 'Hjelp, Materiell og Service', 'Håndtering, Måling og Styring', 'Helse, Mat og Søvn'],
    explanation: 'HMS står for Helse, Miljø og Sikkerhet - alt arbeid for å beskytte arbeidstakere og sikre et trygt arbeidsmiljø.',
  },
  {
    question: 'Hvilken lov er hovedloven for HMS i norsk arbeidsliv?',
    options: ['Arbeidsmiljøloven', 'Vegtrafikkloven', 'Plan- og bygningsloven', 'Forurensningsloven'],
    explanation: 'Arbeidsmiljøloven er hovedloven for HMS. Den krever blant annet at arbeidsmiljøet skal være fullt forsvarlig.',
  },
  {
    question: 'Hvem har hovedansvaret for HMS på arbeidsplassen?',
    options: ['Arbeidsgiveren', 'Verneombudet alene', 'Den nyeste lærlingen', 'Arbeidstilsynet'],
    explanation: 'Arbeidsgiveren har hovedansvaret for HMS, men arbeidstakerne har plikt til å medvirke.',
  },
  {
    question: 'Hva er hovedoppgaven til et verneombud?',
    options: ['Ivareta arbeidstakernes interesser i HMS-saker', 'Bestemme lønnen til de ansatte', 'Lede produksjonsplanleggingen', 'Føre regnskapet'],
    explanation: 'Verneombudet ivaretar arbeidstakernes interesser i saker som angår arbeidsmiljøet og HMS.',
  },
  {
    question: 'Hva er en grunn til at godt HMS-arbeid lønner seg økonomisk?',
    options: ['Færre skader gir lavere kostnader og mindre fravær', 'Det øker antall ulykker', 'Det fjerner behovet for produksjon', 'Det gir høyere bøter'],
    explanation: 'Godt HMS-arbeid gir færre skader og lavere sykefravær, som reduserer kostnader og opprettholder produktiviteten.',
  },
],
  'tif-vg1-6-2': [
  {
    question: 'Hvordan beregnes risiko?',
    options: ['Risiko = Sannsynlighet × Konsekvens', 'Risiko = Sannsynlighet + Konsekvens', 'Risiko = Konsekvens − Sannsynlighet', 'Risiko = Sannsynlighet / Konsekvens'],
    explanation: 'Risiko er kombinasjonen av hvor sannsynlig en hendelse er og hvor alvorlig konsekvensen blir: Sannsynlighet × Konsekvens.',
  },
  {
    question: 'Hva er en «fare» (hazard) i risikovurdering?',
    options: ['Noe som kan forårsake skade', 'Selve skaden som har skjedd', 'Sannsynligheten for at noe skjer', 'En ferdig utfylt rapport'],
    explanation: 'En fare er noe som har potensial til å forårsake skade, for eksempel en roterende maskin uten vern eller et glatt gulv.',
  },
  {
    question: 'En hendelse har sannsynlighet 3 og konsekvens 4 på en skala. Hva blir risikotallet?',
    options: ['12', '7', '1', '34'],
    explanation: 'Risiko = Sannsynlighet × Konsekvens = 3 × 4 = 12.',
  },
  {
    question: 'Hva er hensikten med en risikomatrise?',
    options: ['Visualisere og prioritere risiko ut fra sannsynlighet og konsekvens', 'Beregne lønnskostnader', 'Tegne maskinens deler', 'Måle elektrisk strøm'],
    explanation: 'En risikomatrise plasserer hendelser etter sannsynlighet og konsekvens, slik at man kan se og prioritere hvilke risikoer som krever tiltak.',
  },
  {
    question: 'Hva er SJA?',
    options: ['Sikker jobbanalyse - vurdering av risiko før en bestemt arbeidsoppgave', 'Sentralt Jordfeil-Anlegg', 'Standard Justert Arbeidstid', 'System for Just-in-time Avfall'],
    explanation: 'SJA (sikker jobbanalyse) er en systematisk gjennomgang av farer og tiltak før man starter en bestemt arbeidsoppgave.',
  },
],
  'tif-vg1-6-3': [
  {
    question: 'Hvor i tiltakshierarkiet kommer personlig verneutstyr (PVU)?',
    options: ['Som siste forsvarslinje, etter at andre tiltak er vurdert', 'Som det aller første og viktigste tiltaket', 'Det er ikke en del av hierarkiet', 'Før man vurderer å eliminere faren'],
    explanation: 'PVU er nederst i tiltakshierarkiet - siste forsvarslinje. Først skal man forsøke å eliminere, substituere og bruke tekniske/administrative tiltak.',
  },
  {
    question: 'Hvilket tiltak er øverst (best) i tiltakshierarkiet?',
    options: ['Eliminere faren helt', 'Bruke vernebriller', 'Skilte med advarsel', 'Gi opplæring i farlig arbeid'],
    explanation: 'Å eliminere faren helt er det mest effektive tiltaket. Verneutstyr og skilting er lavere i hierarkiet.',
  },
  {
    question: 'Hva betyr CE-merking på verneutstyr?',
    options: ['At utstyret oppfyller europeiske krav til sikkerhet', 'At det er produsert i Kina', 'At det er gratis', 'At det bare kan brukes én gang'],
    explanation: 'CE-merking viser at produktet oppfyller gjeldende europeiske krav til helse, sikkerhet og miljø.',
  },
  {
    question: 'Hvorfor er PVU plassert sist i tiltakshierarkiet?',
    options: ['Det beskytter bare brukeren og virker bare når det faktisk brukes riktig', 'Det er det dyreste tiltaket som finnes', 'Det fjerner faren fullstendig', 'Det beskytter alle på arbeidsplassen samtidig'],
    explanation: 'PVU beskytter kun brukeren, krever riktig bruk for å virke, og fjerner ikke selve faren - derfor er det siste utvei.',
  },
  {
    question: 'Hvilket verneutstyr beskytter mot partikler og sprut til øynene?',
    options: ['Vernebriller', 'Hørselsvern', 'Vernesko', 'Fallsele'],
    explanation: 'Vernebriller beskytter øynene mot partikler, gnister og sprut. Hørselsvern beskytter mot støy.',
  },
],
  'tif-vg1-6-4': [
  {
    question: 'Hvilke fire elementer inngår i brannfirkanten?',
    options: ['Brennbart materiale, oksygen, varme og kjedereaksjon', 'Vann, jord, luft og ild', 'Brensel, vann, kulde og lys', 'Strøm, spenning, motstand og effekt'],
    explanation: 'Brannfirkanten består av brennbart materiale, oksygen, varme (tenntemperatur) og kjedereaksjonen. Fjernes ett, slukkes brannen.',
  },
  {
    question: 'Hvilken brannklasse gjelder for brennbare væsker som bensin og olje?',
    options: ['Klasse B', 'Klasse A', 'Klasse C', 'Klasse D'],
    explanation: 'Klasse B gjelder brennbare væsker (bensin, olje, maling). Klasse A er faste stoffer som tre og papir.',
  },
  {
    question: 'En av måtene å slukke brann er å «kvele» den. Hva betyr det?',
    options: ['Stenge ute oksygen med f.eks. skum, pulver eller CO₂', 'Senke temperaturen med vann', 'Flytte vekk brennbart materiale', 'Øke trykket i rommet'],
    explanation: 'Å kvele brannen betyr å stenge ute oksygen, for eksempel med skum, pulver eller CO₂, slik at forbrenningen stopper.',
  },
  {
    question: 'Hva er et CO₂-apparat best egnet til?',
    options: ['Branner i elektrisk utstyr og væsker, uten å etterlate rester', 'Store branner i tørt trevirke', 'Branner i levende mennesker', 'Å kjøle ned maskiner i normal drift'],
    explanation: 'CO₂-apparat kveler brannen og etterlater ingen rester, og egner seg godt for elektrisk utstyr og væskebranner.',
  },
  {
    question: 'Hva er en brannvakt ved «varmt arbeid»?',
    options: ['En person som overvåker og er klar til å slukke under og etter sveising/skjæring', 'En automatisk sprinkler', 'Et røykvarslingsanlegg', 'En type brannslukker'],
    explanation: 'Ved varmt arbeid (sveising, skjæring, sliping) skal en brannvakt overvåke arbeidsstedet under og en periode etterpå for å fange opp ulmebrann.',
  },
],
  'tif-vg1-6-5': [
  {
    question: 'Hva er riktig rekkefølge i livreddende førstehjelp?',
    options: ['Sikre - Varsle - Hjelpe', 'Hjelpe - Sikre - Varsle', 'Varsle - Hjelpe - Sikre', 'Hjelpe - Varsle - Sikre'],
    explanation: 'Riktig rekkefølge er Sikre (gjør stedet trygt), Varsle (ring 113) og Hjelpe (gi førstehjelp).',
  },
  {
    question: 'Hvilket nødnummer ringer du ved medisinsk nød i Norge?',
    options: ['113', '110', '112', '911'],
    explanation: '113 er medisinsk nødnummer. 110 er brann og 112 er politi.',
  },
  {
    question: 'Hva er riktig forhold mellom brystkompresjoner og innblåsinger ved HLR på voksne?',
    options: ['30 kompresjoner og 2 innblåsinger', '15 kompresjoner og 2 innblåsinger', '5 kompresjoner og 1 innblåsing', '50 kompresjoner og 5 innblåsinger'],
    explanation: 'Standard HLR på voksne er 30 brystkompresjoner etterfulgt av 2 innblåsinger, gjentatt.',
  },
  {
    question: 'Hvilken kompresjonsrytme anbefales ved HLR?',
    options: ['100-120 trykk per minutt', '40-60 trykk per minutt', '200-250 trykk per minutt', '20-30 trykk per minutt'],
    explanation: 'Brystkompresjoner skal gis i en rytme på 100-120 per minutt (omtrent takten i «Stayin Alive»).',
  },
  {
    question: 'Hva gjør du først ved en kraftig blødning fra et stort sår?',
    options: ['Trykk hardt på såret med ren klut og hold trykket', 'Slipp trykket ofte for å sjekke om det blør', 'Vask såret med løsemiddel', 'Vent til ambulansen kommer uten å gjøre noe'],
    explanation: 'Ved kraftig blødning trykker du hardt og vedvarende på såret med ren klut/bandasje - ikke slipp opp for å sjekke.',
  },
],
  'tif-vg1-6-6': [
  {
    question: 'Hva handler ergonomi om?',
    options: ['Å tilpasse arbeidet til mennesket', 'Å tilpasse mennesket til maskinen', 'Å øke produksjonshastigheten mest mulig', 'Å spare energi i maskiner'],
    explanation: 'Ergonomi handler om å tilpasse arbeidet, arbeidsplassen og verktøyene til mennesket for å unngå belastningsskader.',
  },
  {
    question: 'Hva er riktig løfteteknikk for tunge gjenstander?',
    options: ['Bøy i knærne, hold ryggen rett og last nær kroppen', 'Bøy i ryggen og hold lasten langt fra kroppen', 'Vri kroppen mens du løfter', 'Løft raskt med strake bein'],
    explanation: 'Riktig løfteteknikk er å bøye i knærne, holde ryggen rett, holde lasten nær kroppen og unngå vridning.',
  },
  {
    question: 'Hvilken belastningsskade er typisk forbundet med arbeid over hodet?',
    options: ['Senebetennelse i skulderen', 'Karpaltunnelsyndrom i håndleddet', 'Tennisalbue', 'Prolaps i korsryggen'],
    explanation: 'Arbeid over hodet belaster skuldrene og kan gi senebetennelse. Repetitive håndbevegelser gir derimot karpaltunnelsyndrom.',
  },
  {
    question: 'Hva er en god ergonomisk strategi mot statisk og repetitivt arbeid?',
    options: ['Variasjon i arbeidsoppgaver og mikropauser', 'Å stå helt stille hele dagen', 'Å løfte tyngst mulig hver gang', 'Å aldri ta pauser'],
    explanation: 'Variasjon i arbeidsstillinger og oppgaver, samt korte mikropauser, reduserer belastning ved statisk og repetitivt arbeid.',
  },
  {
    question: 'Hvorfor er belastningsskader et viktig HMS-tema?',
    options: ['De er en av de vanligste årsakene til sykefravær', 'De oppstår alltid momentant i én hendelse', 'De rammer bare eldre arbeidstakere', 'De kan ikke forebygges'],
    explanation: 'Belastningsskader utvikler seg over tid og er en av de vanligste årsakene til langtidssykefravær, men kan forebygges.',
  },
],
  'tif-vg1-6-7': [
  {
    question: 'Hvilket merkesystem brukes for faremerking av kjemikalier?',
    options: ['CLP med farepiktogrammer', 'ISO 9001', 'CE-merking alene', 'NS 3457'],
    explanation: 'Kjemikalier merkes etter CLP-systemet med standardiserte farepiktogrammer (røde romber med svart symbol).',
  },
  {
    question: 'Hva er et sikkerhetsdatablad (SDS)?',
    options: ['Et dokument med 16 punkter om farer og sikker håndtering av et kjemikalie', 'En kvittering for kjøp av kjemikalier', 'En tegning av emballasjen', 'Et garantibevis'],
    explanation: 'Et sikkerhetsdatablad (SDS) har 16 standardiserte punkter med informasjon om farer, håndtering, verneutstyr og førstehjelp for kjemikaliet.',
  },
  {
    question: 'Hvordan ser et farepiktogram i CLP-systemet ut?',
    options: ['En rød rombe med hvit bakgrunn og sort symbol', 'En grønn sirkel med hvit kant', 'En blå firkant med gult symbol', 'En svart trekant med rødt symbol'],
    explanation: 'CLP-farepiktogrammene er røde romber (kvadrat på spiss) med hvit bakgrunn og et sort symbol.',
  },
  {
    question: 'Hva bør du gjøre før du begynner å arbeide med et nytt kjemikalie?',
    options: ['Lese sikkerhetsdatabladet og bruke riktig verneutstyr', 'Blande det med et annet kjemikalie for å teste', 'Lukte på det for å kjenne hvor sterkt det er', 'Helle det rett i avløpet'],
    explanation: 'Før arbeid med et kjemikalie skal man lese SDS for å vite om farer, og bruke riktig verneutstyr og håndtering.',
  },
  {
    question: 'Hvordan skal farlig avfall håndteres?',
    options: ['Deklareres og leveres til godkjent mottak', 'Kastes i vanlig restavfall', 'Helles i sluk', 'Brennes på arbeidsplassen'],
    explanation: 'Farlig avfall skal deklareres og leveres til godkjent mottak - aldri i restavfall, sluk eller forbrennes ukontrollert.',
  },
],
  'tif-vg1-7-1': [
  {
    question: 'Hva kjennetegner masseproduksjon?',
    options: ['Standardiserte produkter i svært store volumer med lav enhetskostnad', 'Ett produkt om gangen etter kundens spesifikasjon', 'Høy fleksibilitet og lavt volum', 'Bare prototyper'],
    explanation: 'Masseproduksjon lager standardiserte produkter i store volumer, med lav fleksibilitet men lavest enhetskostnad.',
  },
  {
    question: 'Hva kjennetegner enkeltproduksjon (ordreproduksjon)?',
    options: ['Høy fleksibilitet, lavt volum og høyere pris per enhet', 'Lavest mulig pris per enhet', 'Svært store volumer av like produkter', 'Ingen tilpasning til kunden'],
    explanation: 'Enkeltproduksjon lager produkter ett om gangen etter kundens spesifikasjon - høy fleksibilitet, men lavt volum og høyere pris.',
  },
  {
    question: 'Hva er et linjeoppsett (linjeproduksjon) i en fabrikk?',
    options: ['Maskinene plasseres i rekkefølgen produktet bearbeides', 'Like maskiner samles i hver sin avdeling', 'Alle maskiner er samlet i én celle', 'Det er ingen fast plassering'],
    explanation: 'I et linjeoppsett står maskinene i den rekkefølgen produktet bearbeides, noe som gir god flyt for store volumer.',
  },
  {
    question: 'Hva er en verdikjede?',
    options: ['Alle aktiviteter fra råvare til ferdig produkt hos kunden', 'En kjede som låser maskiner sammen', 'Et register over lønnskostnader', 'En type transportbånd'],
    explanation: 'En verdikjede omfatter alle aktivitetene som skaper verdi fra råmateriale til ferdig produkt levert kunden.',
  },
  {
    question: 'Hva er «sløsing» i en produksjonssammenheng?',
    options: ['Aktiviteter som ikke skaper verdi for kunden', 'All bruk av maskiner', 'Selve produksjonen av varer', 'Lønn til de ansatte'],
    explanation: 'Sløsing er ikke-verdiskapende aktiviteter (venting, unødvendig transport, lager osv.) som kunden ikke er villig til å betale for.',
  },
],
  'tif-vg1-7-2': [
  {
    question: 'Hva betyr kvalitet i industriell sammenheng?',
    options: ['I hvilken grad egenskaper oppfyller krav', 'At produktet er dyrest mulig', 'At produktet ser pent ut uansett funksjon', 'At det produseres flest mulig enheter'],
    explanation: 'Kvalitet er i hvilken grad et produkts egenskaper oppfyller de kravene og forventningene som er stilt.',
  },
  {
    question: 'Hvilken ISO-standard gjelder kvalitetsstyringssystemer?',
    options: ['ISO 9001', 'ISO 14001', 'ISO 45001', 'ISO 50001'],
    explanation: 'ISO 9001 er standarden for kvalitetsstyringssystemer. ISO 14001 gjelder miljøstyring.',
  },
  {
    question: 'Hva står PDCA-syklusen for?',
    options: ['Plan-Do-Check-Act', 'Produce-Deliver-Count-Audit', 'Plan-Deliver-Control-Adjust', 'Prepare-Design-Create-Approve'],
    explanation: 'PDCA står for Plan-Do-Check-Act og er en syklus for kontinuerlig forbedring.',
  },
  {
    question: 'Hva betyr kaizen?',
    options: ['Kontinuerlig forbedring i små steg', 'Stor engangsendring', 'Total stans av produksjon', 'Maksimering av lager'],
    explanation: 'Kaizen er japansk for kontinuerlig forbedring - mange små forbedringer over tid, ofte foreslått av de ansatte selv.',
  },
  {
    question: 'Hvilken type kvalitetskostnad er kassasjon og omarbeid av defekte deler?',
    options: ['Intern feilkostnad', 'Forebyggende kostnad', 'Kontrollkostnad', 'Ekstern markedskostnad'],
    explanation: 'Vrak, omarbeid og kassasjon er interne feilkostnader - feil som oppdages før produktet når kunden.',
  },
],
  'tif-vg1-7-3': [
  {
    question: 'For målet Ø50 ± 0,05 mm, hva er øvre og nedre grense?',
    options: ['50,05 mm og 49,95 mm', '50,5 mm og 49,5 mm', '50,005 mm og 49,995 mm', '55 mm og 45 mm'],
    explanation: 'Ø50 ± 0,05 gir øvre grense 50,05 mm og nedre grense 49,95 mm.',
  },
  {
    question: 'For målet Ø50 ± 0,05 mm, hvor stor er den totale toleransen?',
    options: ['0,10 mm', '0,05 mm', '0,50 mm', '1,00 mm'],
    explanation: 'Total toleranse = øvre − nedre grense = 50,05 − 49,95 = 0,10 mm.',
  },
  {
    question: 'Hva er en Go/NoGo-lære?',
    options: ['Et grensemål som bare sjekker om delen er innenfor toleranse eller ikke', 'Et verktøy som måler eksakt diameter', 'En type CNC-maskin', 'Et dataprogram for tegning'],
    explanation: 'En Go/NoGo-lære har en Go-side som skal passe og en NoGo-side som ikke skal passe; den forteller om delen er innenfor toleranse uten å gi en tallverdi.',
  },
  {
    question: 'Hva står SPC for?',
    options: ['Statistisk prosesskontroll', 'Standard Produkt Class', 'Serie Produksjon Cyklus', 'Statisk Posisjon Control'],
    explanation: 'SPC står for statistisk prosesskontroll - bruk av statistikk og kontrollkort til å overvåke at en prosess holder seg stabil.',
  },
  {
    question: 'Hva slags passning er H7/p6?',
    options: ['Presspassning (alltid press mellom delene)', 'Glidepassning (alltid klaring)', 'En passning som alltid har stor klaring', 'En passning uten kontakt'],
    explanation: 'H7/p6 er en presspassning der akselen alltid er noe større enn hullet, slik at delene må presses sammen.',
  },
],
  'tif-vg1-7-4': [
  {
    question: 'Hvor stammer Lean-filosofien opprinnelig fra?',
    options: ['Toyota (Toyota Production System)', 'NASA', 'Apple', 'Volvo'],
    explanation: 'Lean stammer fra Toyota Production System og handler om å eliminere sløsing og skape verdi for kunden.',
  },
  {
    question: 'Hva er hovedmålet med Lean?',
    options: ['Eliminere sløsing og skape maksimal verdi for kunden', 'Lage størst mulig lager', 'Øke antall feil', 'Produsere mest mulig uavhengig av etterspørsel'],
    explanation: 'Lean handler om å fjerne ikke-verdiskapende aktiviteter (sløsing) og maksimere verdien for kunden.',
  },
  {
    question: 'Hva betyr de fem S-ene i 5S?',
    options: ['Sortere, Systematisere, Skinne (rengjøre), Standardisere, Sikre', 'Selge, Sende, Spare, Stoppe, Starte', 'Studere, Sortere, Stable, Selge, Stoppe', 'Se, Si, Skrive, Styre, Slutte'],
    explanation: '5S er Sortere, Systematisere, Skinne (rengjøre), Standardisere og Sikre - et verktøy for orden og effektivitet på arbeidsplassen.',
  },
  {
    question: 'Hva betyr det japanske begrepet «muda» i Lean?',
    options: ['Sløsing (ikke-verdiskapende aktiviteter)', 'Ujevnhet i arbeidsmengde', 'Overbelastning', 'Perfeksjon'],
    explanation: 'Muda betyr sløsing. Mura betyr ujevnhet og muri betyr overbelastning (de tre M-ene Lean vil eliminere).',
  },
  {
    question: 'Hva er Just-In-Time (JIT)?',
    options: ['Å produsere først når kunden trenger det, slik at lageret holdes lavt', 'Å produsere mest mulig på forhånd til lager', 'Å aldri levere i tide', 'Å vente lengst mulig med all produksjon'],
    explanation: 'Just-In-Time betyr å produsere og levere akkurat når det trengs, noe som reduserer lager og binder mindre kapital.',
  },
],
  'tif-vg1-7-5': [
  {
    question: 'Hvilket planleggingsnivå har lengst tidshorisont (1-5 år)?',
    options: ['Strategisk planlegging', 'Operativ planlegging', 'Taktisk planlegging', 'Daglig planlegging'],
    explanation: 'Strategisk planlegging har lengst horisont (1-5 år) og gjelder investeringer og kapasitetsutvidelser. Operativ planlegging gjelder dager/uker.',
  },
  {
    question: 'Hva er en arbeidsordre?',
    options: ['Et dokument som beskriver hva som skal produseres, antall og leveringsdato', 'En kvittering på utbetalt lønn', 'En tegning av maskinen', 'En liste over ansatte'],
    explanation: 'En arbeidsordre beskriver hva som skal produseres, hvilket produkt, antall og når det skal være ferdig.',
  },
  {
    question: 'En maskin har kapasitet 40 timer/uke og er belastet 30 timer/uke. Hva er utnyttelsesgraden?',
    options: ['75 %', '133 %', '25 %', '10 %'],
    explanation: 'Utnyttelsesgrad = belastning / kapasitet = 30/40 = 0,75 = 75 %.',
  },
  {
    question: 'Hva betyr ledetid (gjennomløpstid)?',
    options: ['Tiden fra ordren startes til produktet er ferdig', 'Tiden maskinen er slått av', 'Antall ansatte på et skift', 'Prisen på et produkt'],
    explanation: 'Ledetid (gjennomløpstid) er den totale tiden fra en ordre settes i gang til produktet er ferdig levert.',
  },
  {
    question: 'Hva er en stykkliste (BOM)?',
    options: ['En oversikt over alle komponenter og mengder som inngår i et produkt', 'En liste over maskinfeil', 'En oversikt over ansatte', 'En tegning av fabrikkhallen'],
    explanation: 'En stykkliste (Bill of Materials) lister alle delene og mengdene som trengs for å lage et produkt.',
  },
],
  'tif-vg1-7-6': [
  {
    question: 'Hva er sporbarhet i produksjon?',
    options: ['Evnen til å spore produkter tilbake til råmaterialer og prosesser', 'Å måle hvor raskt maskinen går', 'Å spore ansattes lokasjon', 'Å finne veien i fabrikken'],
    explanation: 'Sporbarhet er evnen til å spore et produkt gjennom verdikjeden - tilbake til råmaterialer og frem til hvem som gjorde hva.',
  },
  {
    question: 'Hva er forskjellen på fremover- og bakover-sporbarhet?',
    options: ['Fremover sporer hvor produktet tar veien videre, bakover sporer hvor materialene kom fra', 'Fremover gjelder bare lønn, bakover gjelder bare maskiner', 'De betyr nøyaktig det samme', 'Bakover-sporbarhet finnes ikke'],
    explanation: 'Fremover-sporbarhet følger produktet videre i kjeden, mens bakover-sporbarhet følger materialene tilbake til opprinnelsen.',
  },
  {
    question: 'Hva er et materialsertifikat?',
    options: ['Dokumentasjon på et materiales egenskaper og sammensetning', 'En tegning av et hull', 'En kvittering for verktøy', 'En liste over feilkoder'],
    explanation: 'Et materialsertifikat dokumenterer materialets egenskaper, sammensetning og at det oppfyller spesifikasjonen - viktig for sporbarhet.',
  },
  {
    question: 'Hva står ERP for i digitale systemer?',
    options: ['Enterprise Resource Planning', 'Electronic Repair Program', 'Engineering Report Page', 'External Risk Protocol'],
    explanation: 'ERP står for Enterprise Resource Planning - et system som styrer bedriftens ressurser, ordrer, lager og produksjon samlet.',
  },
  {
    question: 'Hvorfor er god dokumentasjon viktig når en ansatt slutter?',
    options: ['Kompetanse og beste praksis bevares for de som overtar', 'Det reduserer produktkvaliteten', 'Det øker antall feil', 'Det er bare et lovbrudd å dokumentere'],
    explanation: 'Dokumentasjon bevarer kunnskap og beste praksis, slik at kompetanse ikke forsvinner når folk slutter eller bytter skift.',
  },
],
  'tif-vg1-7-7': [
  {
    question: 'Hva er målet med 5 Hvorfor-metoden?',
    options: ['Å finne rotårsaken ved å spørre «hvorfor?» gjentatte ganger', 'Å telle hvor mange feil som finnes', 'Å fordele skyld mellom ansatte', 'Å beregne kostnaden av en feil'],
    explanation: '5 Hvorfor er en enkel teknikk der man spør «hvorfor?» flere ganger på rad for å komme fra symptom til rotårsak.',
  },
  {
    question: 'Hva er et fiskebensdiagram (Ishikawa-diagram) brukt til?',
    options: ['Strukturere og kartlegge mulige årsaker til et problem', 'Tegne hydrauliske kretser', 'Måle overflateruhet', 'Beregne lønn'],
    explanation: 'Fiskebens-/Ishikawa-diagram strukturerer mulige årsaker til et problem i kategorier (ofte de 6 M-ene), slik at man finner rotårsaken.',
  },
  {
    question: 'Hva er forskjellen på symptom og rotårsak?',
    options: ['Symptomet er det synlige problemet, rotårsaken er den egentlige grunnen bak', 'De er det samme', 'Symptomet er alltid en maskinfeil, rotårsaken alltid en menneskelig feil', 'Rotårsaken er det man oppdager først'],
    explanation: 'Symptomet er hva man ser (f.eks. maskin stanset), mens rotårsaken er den underliggende grunnen. Fjernes bare symptomet, kommer feilen igjen.',
  },
  {
    question: 'Hva er et fornuftig første steg i systematisk feilsøking?',
    options: ['Definere problemet tydelig (hva, når, hvor, hvem)', 'Bytte ut tilfeldige deler til det virker', 'Skru av all dokumentasjon', 'Endre flere ting samtidig'],
    explanation: 'Første steg er å definere problemet klart - hva er symptomet, når og hvor oppstod det, hvem er berørt - før man analyserer årsaker.',
  },
  {
    question: 'Hvorfor bør man teste én ting om gangen under feilsøking?',
    options: ['For å vite sikkert hva som faktisk løste problemet', 'For å bruke mest mulig tid', 'Fordi det er pålagt av loven', 'For å skjule resultatet'],
    explanation: 'Endrer du flere ting samtidig, vet du ikke hva som virket. Å teste én ting om gangen gir tydelig årsak-virkning.',
  },
],
  'tif-vg1-8-1': [
  {
    question: 'Hva gjør en industrimekaniker?',
    options: ['Monterer, vedlikeholder og reparerer industrimaskiner og produksjonsutstyr', 'Tegner bygninger', 'Lager mat i kantine', 'Selger forsikringer'],
    explanation: 'En industrimekaniker monterer, vedlikeholder og reparerer industrimaskiner og jobber med mekanikk, hydraulikk og pneumatikk.',
  },
  {
    question: 'Hva innebærer 2+2-modellen i yrkesfag?',
    options: ['To år på skole etterfulgt av to år som lærling i bedrift', 'Fire år bare på skole', 'To år på skole og deretter direkte fagbrev uten lære', 'To år lære før skole'],
    explanation: '2+2-modellen er to år i skole (Vg1 og Vg2) etterfulgt av to år som lærling i bedrift, som leder til fagbrev.',
  },
  {
    question: 'Hva gjør en CNC-operatør?',
    options: ['Programmerer og opererer datastyrt produksjonsutstyr', 'Sveiser broer for hånd', 'Lager tegninger uten datamaskin', 'Driver med regnskap'],
    explanation: 'En CNC-operatør/programmerer setter opp, programmerer og kjører datastyrte maskiner som dreiebenker og fresemaskiner.',
  },
  {
    question: 'Hva oppnår man etter fullført læretid i et yrkesfag?',
    options: ['Fagbrev/svennebrev', 'Doktorgrad', 'Førerkort', 'Mesterbrev automatisk'],
    explanation: 'Etter fullført læretid og bestått fag-/svenneprøve får man fagbrev (eller svennebrev i håndverksfag).',
  },
  {
    question: 'Hvilken mulighet har en yrkesfagelev som ønsker studiekompetanse?',
    options: ['Ta påbygging til generell studiekompetanse', 'Det er umulig fra yrkesfag', 'Bare gjennom utlandet', 'Kun ved å ta hele videregående på nytt'],
    explanation: 'Yrkesfagelever kan ta påbygging til generell studiekompetanse, som åpner for høyere utdanning.',
  },
],
  'tif-vg1-8-2': [
  {
    question: 'Hva bygger «den norske modellen» på?',
    options: ['Trepartssamarbeid mellom arbeidstakere, arbeidsgivere og staten', 'At staten bestemmer alt alene', 'At arbeidsgiverne bestemmer alt', 'At det ikke finnes fagforeninger'],
    explanation: 'Den norske modellen bygger på trepartssamarbeid mellom arbeidstakerorganisasjoner, arbeidsgiverorganisasjoner og staten.',
  },
  {
    question: 'Hva er en tariffavtale?',
    options: ['En avtale mellom fagforening og arbeidsgiverforening om lønn og arbeidsvilkår', 'En personlig arbeidskontrakt', 'En forsikringsavtale', 'En kjøpsavtale for maskiner'],
    explanation: 'En tariffavtale er en kollektiv avtale mellom fagforening og arbeidsgiverforening som regulerer lønn, arbeidstid og tillegg.',
  },
  {
    question: 'Hva er forskjellen på bruttolønn og nettolønn?',
    options: ['Bruttolønn er før skatt, nettolønn er det du får utbetalt etter skatt', 'Bruttolønn er etter skatt, nettolønn er før skatt', 'De er alltid like store', 'Nettolønn inkluderer feriepenger, bruttolønn ikke'],
    explanation: 'Bruttolønn er lønn før skatt og trekk; nettolønn er det som faktisk utbetales etter at skatt er trukket fra.',
  },
  {
    question: 'En arbeidstaker har en bruttolønn på 30 000 kr og betaler 25 % skatt. Hva blir nettolønnen?',
    options: ['22 500 kr', '7 500 kr', '30 000 kr', '25 000 kr'],
    explanation: 'Skatt = 25 % av 30 000 = 7 500 kr. Nettolønn = 30 000 − 7 500 = 22 500 kr.',
  },
  {
    question: 'Hva er hovedoppgaven til en tillitsvalgt?',
    options: ['Representere de ansatte overfor arbeidsgiver', 'Bestemme bedriftens budsjett', 'Ansette og si opp folk', 'Føre regnskapet'],
    explanation: 'En tillitsvalgt representerer de ansatte og ivaretar deres interesser i forhandlinger og samarbeid med arbeidsgiver.',
  },
],
  'tif-vg1-8-3': [
  {
    question: 'Hvilke tre dimensjoner balanserer bærekraft?',
    options: ['Miljømessig, økonomisk og sosial', 'Fortid, nåtid og fremtid', 'Vann, luft og jord', 'Stat, kommune og fylke'],
    explanation: 'Bærekraft balanserer tre dimensjoner: miljømessig (bevare ressurser), økonomisk (lønnsomhet) og sosial (gode forhold).',
  },
  {
    question: 'Hva kjennetegner en sirkulær økonomi sammenlignet med en lineær?',
    options: ['Materialer gjenbrukes og resirkuleres i stedet for å kastes', 'Alt kastes etter én gangs bruk', 'Det produseres mest mulig avfall', 'Det brukes bare fornybar energi og ingen materialer'],
    explanation: 'Sirkulær økonomi holder ressurser i bruk lengst mulig gjennom gjenbruk og resirkulering, mens lineær økonomi er «ta-lag-kast».',
  },
  {
    question: 'Hvilket av FNs bærekraftsmål handler om ansvarlig forbruk og produksjon?',
    options: ['Mål 12', 'Mål 1', 'Mål 5', 'Mål 17'],
    explanation: 'FNs bærekraftsmål 12 handler om ansvarlig forbruk og produksjon, som er særlig relevant for industrien.',
  },
  {
    question: 'Hva er et eksempel på hvordan en fagarbeider kan bidra til bærekraft?',
    options: ['Sortere avfall riktig og redusere materialsvinn', 'Kaste alt avfall blandet', 'Bruke mest mulig energi', 'Ignorere miljøkrav'],
    explanation: 'En fagarbeider bidrar ved å sortere avfall, redusere svinn og energibruk, og følge miljøriktige rutiner i det daglige arbeidet.',
  },
  {
    question: 'Hva er en av industriens største bærekraftsutfordringer?',
    options: ['Store klimagassutslipp og høyt energiforbruk', 'For lite avfall', 'For lave produksjonskostnader', 'For mange fornybare ressurser'],
    explanation: 'Industrien står for store klimagassutslipp og har høyt energiforbruk, noe som er sentrale utfordringer i den grønne omstillingen.',
  },
],
  'tif-vg1-8-4': [
  {
    question: 'Hvordan skal farlig avfall som spillolje håndteres?',
    options: ['Deklareres og leveres til godkjent mottak', 'Kastes i restavfall', 'Helles i sluk eller på bakken', 'Brennes i verkstedet'],
    explanation: 'Farlig avfall som spillolje og kjemikalier må deklareres og leveres til godkjent mottak - aldri i restavfall eller avløp.',
  },
  {
    question: 'Hva er EE-avfall?',
    options: ['Elektrisk og elektronisk avfall som elektronikk og kabler', 'Bare matavfall', 'Bare metallskrap', 'Trevirke og papp'],
    explanation: 'EE-avfall er elektrisk og elektronisk avfall (elektronikk, kabler, apparater) som skal leveres til spesialmottak.',
  },
  {
    question: 'Hvorfor lønner kildesortering seg for en bedrift?',
    options: ['Lavere avgift, verdifulle materialer gjenbrukes og bedre miljøprofil', 'Det gir høyere avfallsavgift', 'Det er forbudt å sortere', 'Det øker mengden restavfall'],
    explanation: 'Kildesortering gir lavere avfallsavgift, lar verdifulle materialer gjenvinnes og gir bedriften en bedre miljøprofil.',
  },
  {
    question: 'Hvilken ISO-standard gjelder miljøstyringssystemer?',
    options: ['ISO 14001', 'ISO 9001', 'ISO 1219', 'ISO 2768'],
    explanation: 'ISO 14001 er standarden for miljøstyringssystemer. ISO 9001 gjelder kvalitetsstyring.',
  },
  {
    question: 'Hva er Miljøfyrtårn?',
    options: ['En norsk miljøsertifisering for virksomheter', 'En type avfallscontainer', 'Et farlig kjemikalie', 'Et merke for elektrisk utstyr'],
    explanation: 'Miljøfyrtårn er en norsk sertifiseringsordning som hjelper virksomheter å jobbe systematisk med miljø og bærekraft.',
  },
],
  'tif-vg1-8-5': [
  {
    question: 'Hva kjennetegner Industri 4.0?',
    options: ['Digitalt sammenkoblede systemer der maskiner kommuniserer og data analyseres i sanntid', 'Innføring av dampmaskinen', 'Bruk av elektrisitet for første gang', 'Manuell produksjon uten maskiner'],
    explanation: 'Industri 4.0 (den fjerde industrielle revolusjon) handler om digitalt sammenkoblede systemer, IoT, AI og sanntidsdata.',
  },
  {
    question: 'Hva står IoT for?',
    options: ['Internet of Things (tingenes internett)', 'Industrial Output Technology', 'Internal Operating Time', 'Input Output Transfer'],
    explanation: 'IoT står for Internet of Things - at maskiner, sensorer og utstyr er koblet til internett og kommuniserer med hverandre.',
  },
  {
    question: 'Hva er en cobot?',
    options: ['En samarbeidende robot som jobber trygt sammen med mennesker', 'En robot som bare jobber alene bak gjerde', 'Et dataprogram for tegning', 'En type sveisemaskin'],
    explanation: 'En cobot (collaborative robot) er en samarbeidsrobot designet for å arbeide trygt side om side med mennesker.',
  },
  {
    question: 'Hva er prediktivt vedlikehold?',
    options: ['Vedlikehold basert på dataanalyse som forutsier når feil vil oppstå', 'Vedlikehold etter at maskinen har brutt sammen', 'Tilfeldig bytte av deler', 'Å aldri vedlikeholde maskinen'],
    explanation: 'Prediktivt vedlikehold bruker sensordata og analyse til å forutsi når en feil sannsynligvis vil oppstå, slik at man handler i forkant.',
  },
  {
    question: 'Hva er en «digital tvilling»?',
    options: ['En virtuell kopi av et fysisk system som kan simuleres og analyseres', 'En ekstra fysisk maskin', 'En kollega som gjør samme jobb', 'En reservekopi av lønnsdata'],
    explanation: 'En digital tvilling er en virtuell modell av et fysisk produkt eller system, brukt til simulering, overvåkning og optimalisering.',
  },
],
  'tif-vg1-8-6': [
  {
    question: 'Hva er innovasjon?',
    options: ['Å skape noe nytt som har verdi', 'Å kopiere et eksisterende produkt nøyaktig', 'Å produsere mest mulig av det samme', 'Å redusere kvaliteten for å spare penger'],
    explanation: 'Innovasjon er å skape noe nytt (produkt, prosess, tjeneste) som har verdi for kunden eller samfunnet.',
  },
  {
    question: 'Hva er prosessinnovasjon?',
    options: ['En ny eller forbedret produksjonsmetode', 'Et helt nytt produkt', 'En ny måte å markedsføre på', 'En ny pris på et gammelt produkt'],
    explanation: 'Prosessinnovasjon er en ny eller forbedret måte å produsere på, for eksempel å innføre robotisert sveising.',
  },
  {
    question: 'Hva er forskjellen på inkrementell og radikal innovasjon?',
    options: ['Inkrementell er små gradvise forbedringer, radikal er helt nye løsninger', 'Inkrementell er helt nye løsninger, radikal er små endringer', 'De betyr det samme', 'Radikal innovasjon er alltid dårligere'],
    explanation: 'Inkrementell innovasjon er små, gradvise forbedringer, mens radikal innovasjon er helt nye løsninger som endrer markedet.',
  },
  {
    question: 'Hva er hensikten med en prototype?',
    options: ['Å teste og forbedre en idé før den settes i full produksjon', 'Å selge produktet direkte til kunder', 'Å erstatte forretningsplanen', 'Å regne ut skatten'],
    explanation: 'En prototype er en tidlig versjon som lar deg teste, lære og forbedre ideen før du investerer i full produksjon.',
  },
  {
    question: 'Hvilken offentlig aktør støtter ofte gründere og innovasjon i Norge?',
    options: ['Innovasjon Norge', 'Arbeidstilsynet', 'Statens vegvesen', 'Mattilsynet'],
    explanation: 'Innovasjon Norge gir veiledning og finansiering til gründere og bedrifter som driver med nyskaping.',
  },
],

};

export default quizData_tif_vg1;
