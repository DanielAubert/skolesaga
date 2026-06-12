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

};

export default quizData_tif_vg1;
