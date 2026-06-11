import type { QuizQuestion } from './quiz-data';

const quizData_matematikk_6: Record<string, QuizQuestion[]> = {


  '6-1-1': [
  {
    question: 'Vi utvider brøken 3/5 ved å gange med 2. Hvilken brøk får vi?',
    options: ['6/10', '6/5', '3/10', '5/7'],
    explanation: 'Vi ganger BÅDE teller og nevner med 2: 3/5 = 6/10. Verdien er den samme.',
  },
  {
    question: 'Hva blir brøken 18/24 når vi forkorter den mest mulig?',
    options: ['3/4', '9/12', '2/3', '6/8'],
    explanation: 'Vi deler teller og nevner på 6: 18/24 = 3/4. 9/12 og 6/8 kan forkortes videre.',
  },
  {
    question: 'Hva betyr det å utvide en brøk?',
    options: ['Å gange teller og nevner med samme tall', 'Å gange bare telleren', 'Å legge til samme tall oppe og nede', 'Å gjøre brøken større i verdi'],
    explanation: 'Når vi ganger teller og nevner med samme tall, ser brøken annerledes ut, men verdien er uendret.',
  },
  {
    question: 'Hva er den minste fellesnevneren for 1/3 og 1/4?',
    options: ['12', '7', '3', '34'],
    explanation: '12 er det minste tallet som både 3 og 4 går opp i: 1/3 = 4/12 og 1/4 = 3/12.',
  },
  {
    question: 'Endres verdien av en brøk når vi utvider den?',
    options: ['Nei, verdien er nøyaktig den samme', 'Ja, den blir dobbelt så stor', 'Ja, den blir mindre', 'Bare hvis nevneren er et partall'],
    explanation: '3/5 og 6/10 er like store — vi har bare delt helheten i flere og mindre biter.',
  },
],

  '6-1-2': [
  {
    question: 'Hva er 2/7 + 3/7?',
    options: ['5/7', '5/14', '6/7', '5/49'],
    explanation: 'Når nevnerne er like, legger vi sammen tellerne: 2 + 3 = 5. Nevneren beholdes: 5/7.',
  },
  {
    question: 'Hva er 1/2 + 1/4?',
    options: ['3/4', '2/6', '2/4', '1/8'],
    explanation: 'Fellesnevner er 4: 1/2 = 2/4. Så regner vi 2/4 + 1/4 = 3/4.',
  },
  {
    question: 'Hva er 5/6 − 1/6, mest mulig forkortet?',
    options: ['2/3', '5/6', '4/0', '1/3'],
    explanation: '5/6 − 1/6 = 4/6, og det forkortes til 2/3 ved å dele på 2.',
  },
  {
    question: 'Hvorfor kan vi IKKE regne 1/2 + 1/3 = 2/5?',
    options: ['Nevnerne skal aldri legges sammen — vi må finne fellesnevner først', 'Fordi svaret skal være 2/6', 'Fordi brøker ikke kan legges sammen', 'Fordi telleren alltid skal være størst'],
    explanation: 'Vi legger aldri sammen nevnerne! Riktig: 1/2 = 3/6 og 1/3 = 2/6, så 3/6 + 2/6 = 5/6.',
  },
  {
    question: 'Hva er 1/3 + 1/6?',
    options: ['1/2', '2/9', '2/6', '1/9'],
    explanation: 'Fellesnevner er 6: 1/3 = 2/6. Da blir det 2/6 + 1/6 = 3/6 = 1/2.',
  },
],

  '6-1-3': [
  {
    question: 'Hvilke tre skrivemåter viser det samme tallet?',
    options: ['1/2 = 0,5 = 50 %', '1/2 = 0,2 = 20 %', '1/2 = 5,0 = 5 %', '1/2 = 0,5 = 5 %'],
    explanation: 'En halv kan skrives som brøk (1/2), desimaltall (0,5) og prosent (50 %).',
  },
  {
    question: 'Hva er 0,75 skrevet som prosent?',
    options: ['75 %', '7,5 %', '0,75 %', '750 %'],
    explanation: 'Vi ganger med 100 (flytter komma to plasser): 0,75 = 75 %.',
  },
  {
    question: 'Hva er 25 % skrevet som brøk, mest mulig forkortet?',
    options: ['1/4', '25/100', '1/25', '2/5'],
    explanation: '25 % = 25/100, som forkortes til 1/4 ved å dele på 25.',
  },
  {
    question: 'Hva er brøken 1/10 som desimaltall?',
    options: ['0,1', '0,01', '1,0', '0,110'],
    explanation: 'En tidel skrives 0,1 — del telleren på nevneren: 1 ÷ 10 = 0,1.',
  },
  {
    question: 'På en prøve fikk Lina 0,2 av poengene feil. Hvor mange prosent er det?',
    options: ['20 %', '2 %', '0,2 %', '50 %'],
    explanation: '0,2 · 100 = 20 %. Flytt komma to plasser mot høyre.',
  },
],

  '6-1-4': [
  {
    question: 'Hva betyr én prosent (1 %)?',
    options: ['Én hundredel', 'Én tidel', 'Ett helt', 'Én tusendel'],
    explanation: 'Prosent betyr «per hundre»: 1 % = 1/100 av noe.',
  },
  {
    question: 'Hva er 10 % av 250 kr?',
    options: ['25 kr', '2,50 kr', '10 kr', '125 kr'],
    explanation: '10 % finner vi ved å dele på 10: 250 ÷ 10 = 25 kr.',
  },
  {
    question: 'Hva er 30 % av 150?',
    options: ['45', '30', '50', '120'],
    explanation: '30 % = 0,3 og 0,3 · 150 = 45. Eller: 10 % er 15, så 30 % er 3 · 15 = 45.',
  },
  {
    question: 'Hva er 50 % av 86?',
    options: ['43', '50', '36', '172'],
    explanation: '50 % er halvparten: 86 ÷ 2 = 43.',
  },
  {
    question: 'I en klasse med 20 elever bruker 25 % briller. Hvor mange elever er det?',
    options: ['5 elever', '4 elever', '10 elever', '25 elever'],
    explanation: '25 % er en firedel: 20 ÷ 4 = 5 elever.',
  },
],

  '6-2-1': [
  {
    question: 'Hva blir forholdet 6 : 9 når vi forenkler det?',
    options: ['2 : 3', '3 : 2', '1 : 3', '6 : 3'],
    explanation: 'Vi deler begge tallene på 3: 6 : 9 = 2 : 3.',
  },
  {
    question: 'Saft og vann blandes i forholdet 1 : 4. Hvor mye vann trenger du til 2 dl saft?',
    options: ['8 dl', '4 dl', '2 dl', '6 dl'],
    explanation: 'Dobbelt så mye saft krever dobbelt så mye vann: 2 · 4 = 8 dl vann.',
  },
  {
    question: 'Rødt og blått blandes i forholdet 2 : 3. Hvor mange deler er det til sammen?',
    options: ['5 deler', '6 deler', '2 deler', '23 deler'],
    explanation: 'Forholdet 2 : 3 betyr 2 deler + 3 deler = 5 deler til sammen.',
  },
  {
    question: 'Mel og sukker blandes i forholdet 3 : 1. Hvor mye sukker trengs til 6 dl mel?',
    options: ['2 dl', '3 dl', '6 dl', '18 dl'],
    explanation: '6 dl mel er 2 · 3 dl, så vi trenger 2 · 1 = 2 dl sukker.',
  },
  {
    question: 'Er forholdet 2 : 3 det samme som 3 : 2?',
    options: ['Nei, rekkefølgen betyr noe', 'Ja, det er akkurat det samme', 'Ja, men bare for små tall', 'Nei, fordi 3 : 2 ikke er et forhold'],
    explanation: '2 : 3 saft og vann betyr lite saft og mye vann — 3 : 2 betyr det motsatte. Rekkefølgen er viktig!',
  },
],

  '6-2-2': [
  {
    question: '3 like bøker koster 150 kr. Hva koster 5 slike bøker?',
    options: ['250 kr', '300 kr', '200 kr', '150 kr'],
    explanation: 'Veien om 1: én bok koster 150 ÷ 3 = 50 kr. Da koster 5 bøker 5 · 50 = 250 kr.',
  },
  {
    question: 'Hva er «veien om 1»?',
    options: ['Å først finne hva ÉN ting koster, og så gange opp', 'Å alltid dele på 1', 'Å gange med 1 til slutt', 'Å telle til 1'],
    explanation: 'Vi finner prisen (eller vekten) for én enhet først — så er det lett å finne prisen for hvor mange som helst.',
  },
  {
    question: '4 epler koster 12 kr. Hva koster 7 epler?',
    options: ['21 kr', '19 kr', '28 kr', '15 kr'],
    explanation: 'Ett eple koster 12 ÷ 4 = 3 kr. Sju epler koster 7 · 3 = 21 kr.',
  },
  {
    question: 'Hva betyr det at to størrelser er direkte proporsjonale?',
    options: ['Dobler du den ene, dobles den andre', 'Dobler du den ene, halveres den andre', 'De er alltid like store', 'De endrer seg aldri'],
    explanation: 'Direkte proporsjonalitet: dobbelt så mange bøker koster dobbelt så mye.',
  },
  {
    question: '6 boller koster 90 kr. Hva koster én bolle?',
    options: ['15 kr', '12 kr', '18 kr', '540 kr'],
    explanation: 'Pris per stykk: 90 ÷ 6 = 15 kr.',
  },
],

  '6-2-3': [
  {
    question: 'Hva betyr målestokken 1 : 100?',
    options: ['1 cm på tegningen er 100 cm i virkeligheten', '1 cm i virkeligheten er 100 cm på tegningen', 'Tegningen er 100 cm bred', 'Alt er likt i virkeligheten'],
    explanation: 'Målestokk 1 : 100 betyr at alt i virkeligheten er 100 ganger større enn på tegningen.',
  },
  {
    question: 'På et kart med målestokk 1 : 50 000 måler du 2 cm. Hvor langt er det i virkeligheten?',
    options: ['1 km', '100 m', '50 km', '500 m'],
    explanation: '2 · 50 000 = 100 000 cm = 1 000 m = 1 km.',
  },
  {
    question: 'En vegg er 300 cm lang. Hvor lang blir den på en tegning med målestokk 1 : 100?',
    options: ['3 cm', '30 cm', '300 cm', '0,3 cm'],
    explanation: 'Fra virkelighet til tegning deler vi: 300 ÷ 100 = 3 cm.',
  },
  {
    question: 'Hvordan regner vi fra kart til virkelighet?',
    options: ['Gang med tallet i målestokken', 'Del på tallet i målestokken', 'Legg til tallet i målestokken', 'Trekk fra tallet i målestokken'],
    explanation: 'Virkeligheten er størst: vi ganger kartmålet med tallet i målestokken.',
  },
  {
    question: 'To kart viser samme by: ett med målestokk 1 : 10 000 og ett med 1 : 100 000. Hva er sant?',
    options: ['Kartet med 1 : 100 000 viser byen minst', 'Kartet med 1 : 100 000 viser byen størst', 'Begge viser byen like stor', 'Det med størst tall er mest nøyaktig på detaljer'],
    explanation: 'Stor n i 1 : n betyr at virkeligheten er krympet mye — byen blir liten på kartet.',
  },
],

  '6-3-1': [
  {
    question: 'Hva er formelen for arealet av en trekant?',
    options: ['A = (g · h) ÷ 2', 'A = g · h', 'A = g + h', 'A = 2 · g · h'],
    explanation: 'Areal av trekant = grunnlinje ganger høyde, delt på 2.',
  },
  {
    question: 'En trekant har grunnlinje 8 cm og høyde 5 cm. Hva er arealet?',
    options: ['20 cm²', '40 cm²', '13 cm²', '26 cm²'],
    explanation: 'A = (8 · 5) ÷ 2 = 40 ÷ 2 = 20 cm².',
  },
  {
    question: 'Hvorfor deler vi på 2 i arealformelen for trekanter?',
    options: ['En trekant er halvparten av et rektangel med samme grunnlinje og høyde', 'Fordi trekanten har to sider', 'Fordi 2 er et lite tall', 'Fordi høyden alltid er halvparten av grunnlinjen'],
    explanation: 'Tegner du en diagonal i et rektangel, får du to like trekanter — hver er halvparten av rektangelet.',
  },
  {
    question: 'En trekant har areal 24 cm² og grunnlinje 8 cm. Hva er høyden?',
    options: ['6 cm', '3 cm', '16 cm', '4 cm'],
    explanation: 'A = (g · h) ÷ 2 gir 24 = (8 · h) ÷ 2, altså 8 · h = 48 og h = 6 cm.',
  },
  {
    question: 'Hvordan skal høyden i en trekant stå i forhold til grunnlinjen?',
    options: ['Vinkelrett på grunnlinjen', 'Parallelt med grunnlinjen', 'Langs en av sidekantene, uansett vinkel', 'I 45 graders vinkel'],
    explanation: 'Høyden måles alltid vinkelrett (90°) på grunnlinjen — ikke langs en skrå side.',
  },
],

  '6-3-2': [
  {
    question: 'En boks er 4 cm lang, 3 cm bred og 2 cm høy. Hva er volumet?',
    options: ['24 cm³', '9 cm³', '24 cm²', '12 cm³'],
    explanation: 'V = l · b · h = 4 · 3 · 2 = 24 cm³. Volum måles i kubikkenheter.',
  },
  {
    question: 'Hvor mye rommer en terning med sider på 1 dm?',
    options: ['1 liter', '1 desiliter', '10 liter', '1 m³'],
    explanation: '1 dm³ = 1 liter. En terning på 1 dm · 1 dm · 1 dm rommer nøyaktig én liter.',
  },
  {
    question: 'Hvilken enhet bruker vi for volum?',
    options: ['cm³', 'cm²', 'cm', 'grader'],
    explanation: 'Volum har tre dimensjoner og måles i kubikkenheter som cm³, dm³ og m³.',
  },
  {
    question: 'Hvor mange liter er 1 m³?',
    options: ['1 000 liter', '100 liter', '10 liter', '1 liter'],
    explanation: '1 m³ = 1 000 dm³, og hver dm³ er 1 liter — altså 1 000 liter.',
  },
  {
    question: 'En terning har sider på 3 cm. Hva er volumet?',
    options: ['27 cm³', '9 cm³', '12 cm³', '18 cm³'],
    explanation: 'V = 3 · 3 · 3 = 27 cm³. (9 er bare 3 · 3 — husk alle tre dimensjonene!)',
  },
],

  '6-3-3': [
  {
    question: 'Hva er overflaten av en figur?',
    options: ['Summen av arealene til alle sideflatene', 'Plassen inni figuren', 'Lengden rundt bunnen', 'Den største sideflaten'],
    explanation: 'Overflaten er alt «papiret» som skal til for å dekke figuren — alle sideflatene lagt sammen.',
  },
  {
    question: 'En terning har sider på 2 cm. Hva er overflaten?',
    options: ['24 cm²', '8 cm³', '12 cm²', '4 cm²'],
    explanation: 'Hver av de 6 sideflatene er 2 · 2 = 4 cm². Overflate = 6 · 4 = 24 cm².',
  },
  {
    question: 'Hvor mange sideflater har en boks (et rett prisme med rektangler)?',
    options: ['6', '4', '8', '12'],
    explanation: 'En boks har alltid 6 sideflater — i 3 like par (topp/bunn, foran/bak, venstre/høyre).',
  },
  {
    question: 'En boks er 4 cm lang, 3 cm bred og 2 cm høy. Hva er overflaten?',
    options: ['52 cm²', '24 cm²', '26 cm²', '52 cm³'],
    explanation: 'O = 2 · (4·3) + 2 · (4·2) + 2 · (3·2) = 24 + 16 + 12 = 52 cm².',
  },
  {
    question: 'Hvilken enhet måles overflate i?',
    options: ['cm² — det er et areal', 'cm³ — det er et volum', 'cm — det er en lengde', 'liter'],
    explanation: 'Overflaten er summen av arealer og måles derfor i kvadratenheter som cm². Volum måles i cm³.',
  },
],

  '6-3-4': [
  {
    question: 'En sirkel har radius 5 cm. Hva er diameteren?',
    options: ['10 cm', '5 cm', '2,5 cm', '15,7 cm'],
    explanation: 'Diameteren går tvers over sirkelen gjennom sentrum: d = 2 · r = 2 · 5 = 10 cm.',
  },
  {
    question: 'Hva er den omtrentlige verdien av pi (π)?',
    options: ['3,14', '3,41', '2,14', '31,4'],
    explanation: 'π ≈ 3,14 — det gjelder for alle sirkler, store som små.',
  },
  {
    question: 'En sirkel har diameter 10 cm. Hva er omkretsen (bruk π ≈ 3,14)?',
    options: ['31,4 cm', '15,7 cm', '62,8 cm', '314 cm'],
    explanation: 'O = π · d = 3,14 · 10 = 31,4 cm.',
  },
  {
    question: 'Hva forteller tallet π oss?',
    options: ['Forholdet mellom omkretsen og diameteren i en sirkel', 'Forholdet mellom radius og diameter', 'Hvor mange grader en sirkel har', 'Diameteren av alle sirkler'],
    explanation: 'Omkretsen delt på diameteren gir alltid π ≈ 3,14, uansett hvor stor sirkelen er.',
  },
  {
    question: 'En sirkel har radius 4 cm. Hva er omkretsen (bruk π ≈ 3,14)?',
    options: ['25,1 cm', '12,6 cm', '50,2 cm', '16 cm'],
    explanation: 'Husk å doble radius først: d = 8 cm. O = 3,14 · 8 = 25,12 ≈ 25,1 cm.',
  },
],

  '6-4-1': [
  {
    question: 'Hva betyr uttrykket 3x?',
    options: ['3 · x', '3 + x', 'x − 3', '30 + x'],
    explanation: 'Når et tall og en bokstav står inntil hverandre, betyr det ganging: 3x = 3 · x.',
  },
  {
    question: 'Hva er verdien av 3x + 2 når x = 4?',
    options: ['14', '36', '9', '24'],
    explanation: 'Sett inn 4 for x: 3 · 4 + 2 = 12 + 2 = 14.',
  },
  {
    question: 'Du kjøper 4 bøker som koster k kroner hver. Hvilket uttrykk viser hva du betaler?',
    options: ['4k', 'k + 4', 'k − 4', '4 + 4k'],
    explanation: '4 bøker til k kroner per bok koster 4 · k = 4k kroner.',
  },
  {
    question: 'Hva er verdien av 5n − 3 når n = 2?',
    options: ['7', '13', '4', '52'],
    explanation: 'Sett inn 2 for n: 5 · 2 − 3 = 10 − 3 = 7.',
  },
  {
    question: 'Hva er en variabel?',
    options: ['En bokstav som står for et tall', 'Et tall som aldri endrer seg', 'Et likhetstegn', 'En regnefeil'],
    explanation: 'En variabel, som x eller n, er en bokstav som står i stedet for et tall vi kan velge eller finne.',
  },
],

  '6-4-2': [
  {
    question: 'Hva er løsningen på likningen x + 3 = 7?',
    options: ['x = 4', 'x = 10', 'x = 3', 'x = 21'],
    explanation: 'Trekk 3 fra begge sider: x = 7 − 3 = 4. Sjekk: 4 + 3 = 7. ✓',
  },
  {
    question: 'Hva er løsningen på likningen x − 5 = 9?',
    options: ['x = 14', 'x = 4', 'x = 9', 'x = 45'],
    explanation: 'Legg til 5 på begge sider: x = 9 + 5 = 14.',
  },
  {
    question: 'Hva er løsningen på likningen 3x = 15?',
    options: ['x = 5', 'x = 12', 'x = 45', 'x = 18'],
    explanation: 'Del begge sider på 3: x = 15 ÷ 3 = 5.',
  },
  {
    question: 'Hva går balansemetoden ut på?',
    options: ['Å gjøre det samme på begge sider av likhetstegnet', 'Å gjette til det stemmer', 'Å bare regne på venstre side', 'Å flytte alle tall til venstre'],
    explanation: 'En likning er som en vekt i balanse: gjør vi det samme på begge sider, stemmer den fortsatt.',
  },
  {
    question: 'Hvordan setter vi prøve på svaret i en likning?',
    options: ['Sett løsningen inn i likningen og sjekk at det stemmer', 'Regn likningen en gang til', 'Spør en venn om svaret', 'Gang svaret med 2'],
    explanation: 'Hvis x = 4 er løsning av x + 3 = 7, sjekker vi: 4 + 3 = 7. ✓ Da er svaret riktig.',
  },
],

  '6-4-3': [
  {
    question: 'En bil kjører i 60 km/t i 2 timer. Hvor langt kjører den? (s = v · t)',
    options: ['120 km', '62 km', '30 km', '240 km'],
    explanation: 'Sett inn i formelen: s = 60 · 2 = 120 km.',
  },
  {
    question: 'Hva er arealet av et rektangel med lengde 7 m og bredde 3 m? (A = l · b)',
    options: ['21 m²', '10 m²', '20 m²', '73 m²'],
    explanation: 'A = 7 · 3 = 21 m².',
  },
  {
    question: 'Hva er en formel?',
    options: ['En oppskrift med variabler som alltid gjelder', 'Et tall med komma', 'En tilfeldig regel som av og til stemmer', 'En type diagram'],
    explanation: 'En formel, som A = l · b, er en matematisk oppskrift: sett inn tallene du kjenner, og regn ut resten.',
  },
  {
    question: 'Et kvadrat har sider på 9 cm. Hva er omkretsen? (O = 4s)',
    options: ['36 cm', '81 cm', '13 cm', '18 cm'],
    explanation: 'O = 4 · 9 = 36 cm.',
  },
  {
    question: 'En syklist sykler 150 km på 3 timer. Hva er farten? (fart = strekning ÷ tid)',
    options: ['50 km/t', '450 km/t', '147 km/t', '45 km/t'],
    explanation: 'Fart = 150 ÷ 3 = 50 km/t.',
  },
],

  '6-5-1': [
  {
    question: 'Hva er sannsynligheten for å få en sekser når du kaster en terning?',
    options: ['1/6', '1/2', '6/6', '1/12'],
    explanation: 'Terningen har 6 like sannsynlige sider, og bare én av dem er en sekser: P = 1/6.',
  },
  {
    question: 'Mellom hvilke tall ligger alltid en sannsynlighet?',
    options: ['Mellom 0 og 1', 'Mellom 1 og 100', 'Mellom −1 og 1', 'Mellom 0 og 6'],
    explanation: '0 betyr umulig og 1 betyr helt sikkert. Alle sannsynligheter ligger mellom disse.',
  },
  {
    question: 'I en pose ligger 10 kuler, og 3 av dem er røde. Hva er sannsynligheten for å trekke en rød kule?',
    options: ['3/10', '1/3', '3/7', '7/10'],
    explanation: 'P = gunstige utfall ÷ mulige utfall = 3/10.',
  },
  {
    question: 'Sannsynligheten for gevinst i et lotteri er 1/4. Hva er sannsynligheten for IKKE å vinne?',
    options: ['3/4', '1/4', '1/2', '4/4'],
    explanation: 'P(ikke gevinst) = 1 − 1/4 = 3/4.',
  },
  {
    question: 'Du kaster en mynt. Hva er sannsynligheten for å få kron?',
    options: ['1/2', '1/4', '1', '2/1'],
    explanation: 'Mynten har 2 like sannsynlige sider (kron og mynt), så P = 1/2.',
  },
],

  '6-5-2': [
  {
    question: 'Hva er medianen av tallene 2, 9, 4, 7, 5?',
    options: ['5', '4', '9', '7'],
    explanation: 'Sortér først: 2, 4, 5, 7, 9. Medianen er det midterste tallet: 5.',
  },
  {
    question: 'Hva er typetallet i datasettet 2, 3, 3, 5, 7?',
    options: ['3', '5', '2', '7'],
    explanation: 'Typetallet er verdien som forekommer flest ganger — 3 står der to ganger.',
  },
  {
    question: 'Hva MÅ du gjøre før du finner medianen?',
    options: ['Sortere tallene i stigende rekkefølge', 'Legge sammen alle tallene', 'Stryke det største tallet', 'Gange alle tallene med 2'],
    explanation: 'Medianen er midten av de SORTERTE tallene — uten sortering finner du feil verdi.',
  },
  {
    question: 'Hva er medianen av de fire tallene 2, 4, 6, 10?',
    options: ['5', '4', '6', '5,5'],
    explanation: 'Med partall antall verdier tar vi midt mellom de to midterste: (4 + 6) ÷ 2 = 5.',
  },
  {
    question: 'Hva forteller typetallet oss?',
    options: ['Hvilken verdi som er vanligst i datasettet', 'Gjennomsnittet av tallene', 'Det største tallet', 'Hvor mange tall det er'],
    explanation: 'Typetallet er den verdien som dukker opp flest ganger.',
  },
],

  '6-5-3': [
  {
    question: 'Hva kjennetegner et godt spørsmål i en undersøkelse?',
    options: ['Det er tydelig, presist og ikke ledende', 'Det er langt og komplisert', 'Det får folk til å svare det du ønsker', 'Det kan tolkes på mange måter'],
    explanation: 'Gode spørsmål forstås likt av alle og lurer ingen mot et bestemt svar.',
  },
  {
    question: 'Hva er riktig rekkefølge i en statistisk undersøkelse?',
    options: ['Still spørsmål → samle inn svar → organiser → presenter', 'Presenter → spør → samle inn → organiser', 'Samle inn → spør → presenter → organiser', 'Organiser → presenter → spør → samle inn'],
    explanation: 'Først et tydelig spørsmål, så datainnsamling, deretter organisering i tabell, og til slutt presentasjon.',
  },
  {
    question: 'Hvorfor bør du spørre mange personer i en undersøkelse?',
    options: ['Flere svar gir et sikrere resultat', 'Det tar lengre tid', 'Da blir diagrammet finere', 'Få svar er alltid like bra'],
    explanation: '3 venner kan ikke fortelle hva hele skolen mener — jo flere svar, jo mer pålitelig konklusjon.',
  },
  {
    question: 'Hva bør du gjøre med svarene FØR du tegner et diagram?',
    options: ['Telle dem opp i en tabell', 'Kaste de svarene du ikke liker', 'Tegne diagrammet med en gang', 'Spørre på nytt'],
    explanation: 'Tell opp og organiser dataene i en tabell først — da blir det enkelt å tegne riktig diagram.',
  },
  {
    question: 'Hvilket av disse spørsmålene er ledende?',
    options: ['«Du liker vel pizza best av all mat?»', '«Hva er favorittmaten din?»', '«Hvor mange ganger i uka spiser du frukt?»', '«Hvilken sport liker du best?»'],
    explanation: 'Et ledende spørsmål dytter deg mot et bestemt svar. «Du liker vel...» antyder hva du skal svare.',
  },
],

};

export default quizData_matematikk_6;
