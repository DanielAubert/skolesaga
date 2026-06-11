import type { QuizQuestion } from './quiz-data';

const quizData_matematikk_5: Record<string, QuizQuestion[]> = {
  'matematikk-5-1-1': [
  {
    question: 'Hvilket siffer står på tusenerplassen i tallet 7 349?',
    options: ['7', '3', '4', '9'],
    explanation: '7 står på tusenerplassen, 3 på hundrerplassen, 4 på tierplassen, 9 på enerplassen.',
  },
  {
    question: 'Hva er 5 000 + 300 + 40 + 2?',
    options: ['5 342', '5 432', '5 324', '53 042'],
    explanation: '5 000 + 300 + 40 + 2 = 5 342',
  },
  {
    question: 'Hvor mange nuller er det i en million?',
    options: ['6', '5', '7', '3'],
    explanation: 'En million = 1 000 000, som har 6 nuller.',
  },
  {
    question: 'Hvilket tall er størst?',
    options: ['35 000', '3 500', '350 000', '3 050'],
    explanation: '350 000 > 35 000 > 3 500 > 3 050. Flære siffer betyr større tall.',
  },
  {
    question: 'Skriv "tjuetre tusen" med siffer:',
    options: ['23 000', '2 300', '230 000', '2 030'],
    explanation: 'Tjuetre tusen = 23 000',
  },
],


  'matematikk-5-1-2': [
  {
    question: 'Hva er verdien til sifferet 5 i tallet 3,52?',
    options: ['5 tideler (0,5)', '5 hundredeler (0,05)', '5', '50'],
    explanation: 'Sifferet 5 står på tidelplassen, så verdien er 5 tideler = 0,5',
  },
  {
    question: 'Hvilket tall er størst: 0,7 eller 0,65?',
    options: ['0,7', '0,65', 'De er like', 'Kan ikke sammenlignes'],
    explanation: '0,7 = 0,70, og 0,70 > 0,65 fordi 70 hundredeler er mer enn 65 hundredeler.',
  },
  {
    question: 'Hva er 2,4 + 0,3?',
    options: ['2,7', '2,43', '3,4', '2,1'],
    explanation: '2,4 + 0,3 = 2,7',
  },
  {
    question: 'Hvilket desimaltall ligger mellom 3 og 4?',
    options: ['3,5', '4,5', '2,5', '34'],
    explanation: '3,5 ligger mellom 3 og 4 på tallinjen.',
  },
  {
    question: 'Hva er 0,25 skrevet som brok?',
    options: ['$\\frac{1}{4}$', '$\\frac{1}{2}$', '1/5', '2/5'],
    explanation: '0,25 = 25/100 = $\\frac{1}{4}$',
  },
],


  'matematikk-5-1-3': [
  {
    question: 'I broken 3/8, hva kalles tallet 8?',
    options: ['Nevneren', 'Tellæren', 'Brokstreken', 'Kvotienten'],
    explanation: 'Nevneren er tallet under brokstreken. Den forteller hvor mange deler helheten er delt i.',
  },
  {
    question: 'Hvilken brok er størst: 2/5 eller 4/5?',
    options: ['4/5', '2/5', 'De er like', 'Kan ikke sammenlignes'],
    explanation: 'Når nevneren er lik, er broken med størst teller størst. 4 > 2, så 4/5 > 2/5.',
  },
  {
    question: 'Hva er 1/2 av 10?',
    options: ['5', '2', '10', '20'],
    explanation: '1/2 av 10 = 10 / 2 = 5',
  },
  {
    question: 'Hvor mange firedeler går det i en hel?',
    options: ['4', '2', '1', '8'],
    explanation: 'En hel = 4/4, så det går 4 firedeler i en hel.',
  },
  {
    question: 'Hva er 3/4 som desimaltall?',
    options: ['0,75', '0,34', '0,25', '0,5'],
    explanation: '3/4 = 3 delt på 4 = 0,75',
  },
],


  'matematikk-5-1-4': [
  {
    question: 'Hvilket tall er minst: -3 eller -7?',
    options: ['-7', '-3', 'De er like', '0'],
    explanation: '-7 er lenger til venstre på tallinjen enn -3, så -7 er minst.',
  },
  {
    question: 'Det er -5 grader ute. Temperaturen stiger 8 grader. Hva blir temperaturen?',
    options: ['3 grader', '-13 grader', '13 grader', '-3 grader'],
    explanation: '-5 + 8 = 3 grader',
  },
  {
    question: 'Hvilket tall er størst: 0, -4, eller 2?',
    options: ['2', '0', '-4', 'De er like'],
    explanation: 'På tallinjen: -4 < 0 < 2, så 2 er størst.',
  },
  {
    question: 'Hva er 0 - 6?',
    options: ['-6', '6', '0', '-0'],
    explanation: '0 - 6 = -6',
  },
  {
    question: 'Plasser riktig: -2 ? 1',
    options: ['-2 < 1', '-2 > 1', '-2 = 1', 'Ingen av dem'],
    explanation: '-2 er mindre enn 1, så -2 < 1',
  },
],


  'matematikk-5-2-1': [
  {
    question: 'Hva er 345 + 278?',
    options: ['623', '613', '523', '633'],
    explanation: '345 + 278 = 623',
  },
  {
    question: 'Hva er 500 - 175?',
    options: ['325', '375', '425', '225'],
    explanation: '500 - 175 = 325',
  },
  {
    question: 'Hva er 99 + 56?',
    options: ['155', '145', '165', '156'],
    explanation: '99 + 56 = 100 + 56 - 1 = 155',
  },
  {
    question: 'En bok koster 189 kr og en penn koster 45 kr. Hva koster det til sammen?',
    options: ['234 kr', '244 kr', '224 kr', '134 kr'],
    explanation: '189 + 45 = 234 kr',
  },
  {
    question: 'Hva er 1000 - 250?',
    options: ['750', '850', '650', '800'],
    explanation: '1000 - 250 = 750',
  },
],


  'matematikk-5-2-2': [
  {
    question: 'Hva er 7 x 8?',
    options: ['56', '54', '48', '64'],
    explanation: '7 x 8 = 56',
  },
  {
    question: 'Hva er 45 x 10?',
    options: ['450', '4500', '45', '55'],
    explanation: 'Når vi ganger med 10, legger vi til en null: 45 x 10 = 450',
  },
  {
    question: 'Hva er 6 x 9?',
    options: ['54', '56', '63', '45'],
    explanation: '6 x 9 = 54',
  },
  {
    question: 'Hva er 23 x 4?',
    options: ['92', '82', '96', '88'],
    explanation: '23 x 4 = 20 x 4 + 3 x 4 = 80 + 12 = 92',
  },
  {
    question: 'Hva er 8 x 8?',
    options: ['64', '56', '72', '48'],
    explanation: '8 x 8 = 64',
  },
],


  'matematikk-5-2-3': [
  {
    question: 'Hva er 42 div 6?',
    options: ['7', '6', '8', '9'],
    explanation: '42 div 6 = 7, fordi 6 x 7 = 42',
  },
  {
    question: 'Hva er 56 div 8?',
    options: ['7', '6', '8', '9'],
    explanation: '56 div 8 = 7, fordi 8 x 7 = 56',
  },
  {
    question: '32 elever skal deles i 4 like grupper. Hvor mange i hver gruppe?',
    options: ['8', '7', '6', '9'],
    explanation: '32 div 4 = 8 elever i hver gruppe',
  },
  {
    question: 'Hva er 17 div 5?',
    options: ['3 rest 2', '4 rest 1', '2 rest 7', '3 rest 3'],
    explanation: '17 div 5 = 3 rest 2, fordi 5 x 3 = 15 og 17 - 15 = 2',
  },
  {
    question: 'Hva er 84 div 4?',
    options: ['21', '22', '20', '24'],
    explanation: '84 div 4 = 21',
  },
],


  'matematikk-5-2-4': [
  {
    question: 'Hva er 3 + 4 x 2?',
    options: ['11', '14', '10', '9'],
    explanation: 'Vi ganger for vi plusser: 3 + (4 x 2) = 3 + 8 = 11',
  },
  {
    question: 'Hva er (5 + 3) x 2?',
    options: ['16', '11', '13', '10'],
    explanation: 'Parentes først: (5 + 3) x 2 = 8 x 2 = 16',
  },
  {
    question: 'Hva er 20 div 4 + 5?',
    options: ['10', '4', '9', '25'],
    explanation: 'Del for du plusser: (20 div 4) + 5 = 5 + 5 = 10',
  },
  {
    question: 'Hvilken regneoperasjon kommer først: pluss eller gange?',
    options: ['Gange', 'Pluss', 'De er like', 'Det er tilfeldig'],
    explanation: 'Gange og dele kommer alltid for pluss og minus.',
  },
  {
    question: 'Hva er 10 - 3 x 2?',
    options: ['4', '14', '5', '7'],
    explanation: 'Gange først: 10 - (3 x 2) = 10 - 6 = 4',
  },
],


  'matematikk-5-3-1': [
  {
    question: 'Hvor mange cm er det i 1 m?',
    options: ['100', '10', '1000', '1'],
    explanation: '1 m = 100 cm',
  },
  {
    question: 'Hvor mange m er det i 1 km?',
    options: ['1000', '100', '10', '10000'],
    explanation: '1 km = 1000 m',
  },
  {
    question: 'Hva er 3,5 m i cm?',
    options: ['350 cm', '35 cm', '3500 cm', '305 cm'],
    explanation: '3,5 m = 3,5 x 100 = 350 cm',
  },
  {
    question: 'Hvor mange mm er det i 5 cm?',
    options: ['50', '5', '500', '0,5'],
    explanation: '1 cm = 10 mm, så5 cm = 50 mm',
  },
  {
    question: 'Veien til skolen er 800 m. Hvor mange km er det?',
    options: ['0,8 km', '8 km', '80 km', '0,08 km'],
    explanation: '800 m = 800/1000 km = 0,8 km',
  },
],


  'matematikk-5-3-2': [
  {
    question: 'Hva er arealet av et rektangel som er 6 cm langt og 4 cm bredt?',
    options: ['24 cm2', '10 cm2', '20 cm2', '12 cm2'],
    explanation: 'Areal = lengde x bredde = 6 x 4 = 24 cm2',
  },
  {
    question: 'Hva er arealet av et kvadrat med side 5 cm?',
    options: ['25 cm2', '20 cm2', '10 cm2', '15 cm2'],
    explanation: 'Areal av kvadrat = side x side = 5 x 5 = 25 cm2',
  },
  {
    question: 'Et rom er 8 m langt og 6 m bredt. Hva er arealet?',
    options: ['48 m2', '28 m2', '14 m2', '86 m2'],
    explanation: 'Areal = 8 x 6 = 48 m2',
  },
  {
    question: 'Arealet er 20 cm2 og lengden er 5 cm. Hva er bredden?',
    options: ['4 cm', '5 cm', '15 cm', '25 cm'],
    explanation: 'Bredde = Areal / lengde = 20 / 5 = 4 cm',
  },
  {
    question: 'Hva måler vi areal i?',
    options: ['Kvadratenheter (cm2, m2)', 'Lengdeenheter (cm, m)', 'Kubikkenheter (cm3)', 'Liter'],
    explanation: 'Areal males i kvadratenheter som cm2, m2, km2.',
  },
],


  'matematikk-5-3-3': [
  {
    question: 'Hva er omkretsen av et kvadrat med side 6 cm?',
    options: ['24 cm', '36 cm', '12 cm', '18 cm'],
    explanation: 'Omkrets av kvadrat = 4 x side = 4 x 6 = 24 cm',
  },
  {
    question: 'Hva er omkretsen av et rektangel med lengde 10 cm og bredde 4 cm?',
    options: ['28 cm', '40 cm', '14 cm', '20 cm'],
    explanation: 'Omkrets = 2 x lengde + 2 x bredde = 2 x 10 + 2 x 4 = 20 + 8 = 28 cm',
  },
  {
    question: 'En trekant har sider 5 cm, 6 cm og 7 cm. Hva er omkretsen?',
    options: ['18 cm', '35 cm', '210 cm', '17 cm'],
    explanation: 'Omkrets = summen av alle sider = 5 + 6 + 7 = 18 cm',
  },
  {
    question: 'Du skal sette gjerde rundt en hage som er 12 m lang og 8 m bred. Hvor mye gjerde trenger du?',
    options: ['40 m', '96 m', '20 m', '80 m'],
    explanation: 'Omkrets = 2 x 12 + 2 x 8 = 24 + 16 = 40 m',
  },
  {
    question: 'Hva er forskjellen påomkrets og areal?',
    options: ['Omkrets er lengden rundt, areal er flaten inni', 'De er det samme', 'Omkrets males i m2', 'Areal er lengden rundt'],
    explanation: 'Omkrets er lengden rundt figuren, areal er hvor stor flaten er.',
  },
],


  'matematikk-5-4-1': [
  {
    question: 'Hvor mange grader er en rett vinkel?',
    options: ['90 grader', '180 grader', '45 grader', '360 grader'],
    explanation: 'En rett vinkel er nøyaktig 90 grader.',
  },
  {
    question: 'Hvilken type vinkel er 45 grader?',
    options: ['Spiss vinkel', 'Stump vinkel', 'Rett vinkel', 'Flat vinkel'],
    explanation: 'En vinkel under 90 grader kalles en spiss vinkel.',
  },
  {
    question: 'Hvilken type vinkel er 120 grader?',
    options: ['Stump vinkel', 'Spiss vinkel', 'Rett vinkel', 'Flat vinkel'],
    explanation: 'En vinkel mellom 90 og 180 grader kalles en stump vinkel.',
  },
  {
    question: 'Hva slags vinkel har hjornet av et ark?',
    options: ['Rett vinkel (90 grader)', 'Spiss vinkel', 'Stump vinkel', 'Flat vinkel'],
    explanation: 'Hjornet av et ark har en rett vinkel på90 grader.',
  },
  {
    question: 'Hvor mange grader er en hel sirkel?',
    options: ['360 grader', '180 grader', '90 grader', '270 grader'],
    explanation: 'En hel sirkel er 360 grader.',
  },
],


  'matematikk-5-4-2': [
  {
    question: 'Hvor mange grader er vinkelsummen i en trekant?',
    options: ['$180°$', '$360°$', '$90°$', '$270°$'],
    explanation: 'Summen av alle tre vinkler i en trekant er alltid 180 grader.',
  },
  {
    question: 'Hva kaller vi en trekant der alle sider er like lange?',
    options: ['Likesidet trekant', 'Likebeint trekant', 'Rettvinklet trekant', 'Ulikesidet trekant'],
    explanation: 'En likesidet trekant har tre like lange sider.',
  },
  {
    question: 'To vinkler i en trekant er 60 og 80 grader. Hva er den tredje vinkelen?',
    options: ['40 grader', '60 grader', '100 grader', '80 grader'],
    explanation: '180 - 60 - 80 = 40 grader',
  },
  {
    question: 'Alle vinkler i en likesidet trekant er:',
    options: ['60 grader', '90 grader', '45 grader', '120 grader'],
    explanation: 'I en likesidet trekant er alle vinkler like, og 180 / 3 = 60 grader.',
  },
  {
    question: 'En trekant har sider 4 cm, 4 cm og 6 cm. Hvilken type trekant er dette?',
    options: ['Likebeint trekant', 'Likesidet trekant', 'Ulikesidet trekant', 'Rettvinklet trekant'],
    explanation: 'To sider er like lange, så dette er en likebeint trekant.',
  },
],


  'matematikk-5-4-3': [
  {
    question: 'Hva er vinkelsummen i en firkant?',
    options: ['360 grader', '180 grader', '90 grader', '270 grader'],
    explanation: 'Summen av alle fire vinkler i en firkant er alltid 360 grader.',
  },
  {
    question: 'Hva kjennetegner et kvadrat?',
    options: ['4 like lange sider og 4 rette vinkler', 'Bare 4 like lange sider', 'Bare 4 rette vinkler', '2 parallelle sider'],
    explanation: 'Et kvadrat har 4 like lange sider og 4 rette vinkler (90 grader).',
  },
  {
    question: 'Er et kvadrat også et rektangel?',
    options: ['Ja, alltid', 'Nei, aldri', 'Bare noen ganger', 'Bare hvis sidene er lange'],
    explanation: 'Et kvadrat er et spesielt rektangel der alle sider er like lange.',
  },
  {
    question: 'Hva er et parallellogram?',
    options: ['Firkant med to par parallelle sider', 'Firkant med fire like sider', 'Firkant med bare en rett vinkel', 'Det samme som et kvadrat'],
    explanation: 'Et parallellogram har to par med parallelle sider.',
  },
  {
    question: 'Hvor mange rette vinkler har et rektangel?',
    options: ['4', '2', '1', '0'],
    explanation: 'Et rektangel har 4 rette vinkler, alle på90 grader.',
  },
],


  'matematikk-5-5-1': [
  {
    question: 'Hvabrukes et søylediagram til?',
    options: ['Vise og sammenligne data', 'Male lengde', 'Regne ut areal', 'Tegne sirkler'],
    explanation: 'Et søylediagram brukes til a vise og sammenligne data visuelt.',
  },
  {
    question: 'I en tabell over favorittfrukt har eple 8, banan 6, appelsin 4. Hvilken er mest popular?',
    options: ['Eple', 'Banan', 'Appelsin', 'Alle er like'],
    explanation: 'Eple har flest (8), såeple er mest popular.',
  },
  {
    question: 'Hva viser høyde påen søyle i et søylediagram?',
    options: ['Verdien eller antallet', 'Arealet', 'Omkretsen', 'Lengden påfiguren'],
    explanation: 'Jo høyere søylen er, jo større er verdien eller antallet den representerer.',
  },
  {
    question: 'Eple: 8, Banan: 6, Appelsin: 4, Druer: 3. Hvor mange er spurt totalt?',
    options: ['21', '20', '18', '24'],
    explanation: '8 + 6 + 4 + 3 = 21 personer er spurt.',
  },
  {
    question: 'Hva er en tabell?',
    options: ['Organisert data i rader og kolønner', 'En type graf', 'Et mattestykke', 'Et geometrisk verktoy'],
    explanation: 'En tabell organiserer data i rader og kolønner for å gjøre det oversiktlig.',
  },
],


  '5-1-1': [
  {
    question: 'Hva er verdien av sifferet 6 i tallet 64 000?',
    options: ['60 000', '6 000', '600', '6'],
    explanation: '6 står på titusenplassen, så verdien er 6 · 10 000 = 60 000.',
  },
  {
    question: 'Hva er 10 000 + 2 000 + 500 + 30 + 7?',
    options: ['12 537', '12 357', '12 530', '125 307'],
    explanation: '10 000 + 2 000 = 12 000, pluss 500 er 12 500, pluss 30 er 12 530, pluss 7 er 12 537.',
  },
  {
    question: 'Hvilket tall er minst?',
    options: ['9 899', '10 100', '98 990', '11 000'],
    explanation: '9 899 har bare fire siffer, mens de andre har fem. Færre siffer betyr mindre tall.',
  },
  {
    question: 'Hvordan skriver vi «førtifem tusen» med siffer?',
    options: ['45 000', '4 500', '450 000', '40 500'],
    explanation: 'Førtifem tusen = 45 · 1 000 = 45 000.',
  },
  {
    question: 'En by har 124 568 innbyggere. Hvilket siffer står på tierplassen?',
    options: ['6', '8', '5', '4'],
    explanation: 'Fra høyre: 8 er enere, 6 er tiere, 5 er hundrere. Sifferet på tierplassen er 6.',
  },
],

  '5-1-2': [
  {
    question: 'Hva betyr sifferet 7 i tallet 4,72?',
    options: ['7 tideler', '7 hundredeler', '7 enere', '7 tiere'],
    explanation: 'Første plass etter komma er tidelene. 4,72 = 4 enere + 7 tideler + 2 hundredeler.',
  },
  {
    question: 'Hvilket tall er størst?',
    options: ['0,8', '0,75', '0,18', '0,09'],
    explanation: '0,8 har 8 tideler. 0,75 har bare 7 tideler, så 0,8 er størst.',
  },
  {
    question: 'Hvilket tall ligger nøyaktig midt mellom 2 og 3 på tallinjen?',
    options: ['2,5', '2,3', '2,75', '3,5'],
    explanation: 'Midt mellom 2 og 3 ligger 2,5 — en halv mer enn 2.',
  },
  {
    question: 'Hvordan skriver vi brøken 3/10 som desimaltall?',
    options: ['0,3', '3,0', '0,03', '0,33'],
    explanation: 'Tre tideler skrives 0,3 — sifferet 3 på tidelplassen.',
  },
  {
    question: 'En sjokolade koster 49,90 kr. Hvilket helt kronebeløp er prisen nærmest?',
    options: ['50 kr', '49 kr', '45 kr', '40 kr'],
    explanation: '49,90 er bare 10 øre unna 50 kr, men 90 øre unna 49 kr. Derfor er 50 kr nærmest.',
  },
],

  '5-1-3': [
  {
    question: 'Hva kalles tallet 8 i brøken 3/8?',
    options: ['Nevneren', 'Telleren', 'Summen', 'Produktet'],
    explanation: 'Nevneren står nederst og forteller hvor mange like deler helheten er delt i. Telleren (3) står øverst.',
  },
  {
    question: 'En pizza er delt i 6 like store biter. Du spiser 2 biter. Hvilken brøk av pizzaen har du spist?',
    options: ['2/6', '6/2', '2/4', '1/6'],
    explanation: 'Du har 2 av 6 like deler, altså 2/6 av pizzaen.',
  },
  {
    question: 'Hvilken brøk er størst?',
    options: ['5/8', '4/8', '3/8', '1/8'],
    explanation: 'Når nevnerne er like, er brøken med størst teller størst. 5 deler er mer enn 4, 3 og 1.',
  },
  {
    question: 'Hva er en halv (1/2) skrevet som desimaltall?',
    options: ['0,5', '0,2', '1,2', '0,12'],
    explanation: 'En halv er det samme som fem tideler, altså 0,5.',
  },
  {
    question: 'En sjokoladeplate har 12 ruter. Hvor mange ruter er 1/4 av platen?',
    options: ['3 ruter', '4 ruter', '6 ruter', '2 ruter'],
    explanation: 'En firedel betyr at vi deler i 4 like deler: 12 ÷ 4 = 3 ruter.',
  },
],

  '5-1-4': [
  {
    question: 'Hvilket tall er minst?',
    options: ['−7', '−3', '0', '2'],
    explanation: 'På tallinjen ligger −7 lengst til venstre, og jo lenger til venstre, jo mindre er tallet.',
  },
  {
    question: 'Temperaturen var −5 °C om morgenen. Den steg 8 grader. Hva ble temperaturen?',
    options: ['3 °C', '−3 °C', '13 °C', '−13 °C'],
    explanation: '−5 + 8 = 3. Vi hopper 8 plasser til høyre på tallinjen fra −5.',
  },
  {
    question: 'Hvor ligger de negative tallene på tallinjen?',
    options: ['Til venstre for null', 'Til høyre for null', 'Mellom 0 og 1', 'De er ikke på tallinjen'],
    explanation: 'Negative tall er mindre enn null og ligger derfor til venstre for null på tallinjen.',
  },
  {
    question: 'Temperaturen var 4 °C og sank 9 grader. Hva ble temperaturen?',
    options: ['−5 °C', '5 °C', '−13 °C', '−4 °C'],
    explanation: '4 − 9 = −5. Vi går 9 plasser til venstre fra 4 og havner på −5.',
  },
  {
    question: 'Hvilket av disse tallene ligger mellom −2 og 1 på tallinjen?',
    options: ['0', '−3', '2', '−5'],
    explanation: '0 ligger mellom −2 og 1. De andre tallene ligger utenfor dette området.',
  },
],

  '5-2-1': [
  {
    question: 'Hva kalles svaret i et addisjonsstykke?',
    options: ['Summen', 'Differansen', 'Produktet', 'Kvotienten'],
    explanation: 'Svaret i addisjon kalles summen. Differansen er svaret i subtraksjon.',
  },
  {
    question: 'Hva er 347 + 285?',
    options: ['632', '622', '642', '532'],
    explanation: '7 + 5 = 12 (skriv 2, mente 1), 4 + 8 + 1 = 13 (skriv 3, mente 1), 3 + 2 + 1 = 6. Svaret er 632.',
  },
  {
    question: 'Hva er 503 − 178?',
    options: ['325', '335', '375', '425'],
    explanation: 'Vi må låne: 503 − 178 = 325. Sjekk: 325 + 178 = 503. ✓',
  },
  {
    question: 'Hva er en smart måte å regne 199 + 47 i hodet?',
    options: ['Regn 200 + 47 og trekk fra 1', 'Regn 100 + 47 og legg til 9', 'Regn 199 + 50 og legg til 3', 'Regn 200 + 50 og trekk fra 3'],
    explanation: '199 er nesten 200. Da blir det lett: 200 + 47 = 247, og så trekker vi fra den ene: 246.',
  },
  {
    question: 'Hva er 1 000 − 3?',
    options: ['997', '907', '970', '1 003'],
    explanation: 'Vi teller 3 nedover fra 1 000: 999, 998, 997.',
  },
],

  '5-2-2': [
  {
    question: 'Hva kalles svaret i et multiplikasjonsstykke?',
    options: ['Produktet', 'Summen', 'Differansen', 'Faktoren'],
    explanation: 'Svaret i multiplikasjon kalles produktet. Tallene vi ganger sammen, kalles faktorer.',
  },
  {
    question: 'Hva er 7 · 8?',
    options: ['56', '54', '63', '48'],
    explanation: '7 · 8 = 56. Huskeregel: «fem-seks-sju-åtte» — 56 = 7 · 8.',
  },
  {
    question: 'Hva er 45 · 100?',
    options: ['4 500', '450', '45 000', '4 050'],
    explanation: 'Å gange med 100 er det samme som å legge til to nuller: 45 · 100 = 4 500.',
  },
  {
    question: 'Hva er 23 · 4?',
    options: ['92', '82', '86', '96'],
    explanation: 'Del opp: 20 · 4 = 80 og 3 · 4 = 12. Til sammen: 80 + 12 = 92.',
  },
  {
    question: 'Hvilket regnestykke betyr det samme som 4 · 5?',
    options: ['5 + 5 + 5 + 5', '4 + 5', '5 + 4 + 3 + 2', '4 + 4 + 4 + 4 + 4 + 4'],
    explanation: 'Multiplikasjon er gjentatt addisjon: 4 · 5 betyr 5 lagt sammen 4 ganger = 5 + 5 + 5 + 5 = 20.',
  },
],

  '5-2-3': [
  {
    question: 'Hvorfor vet vi at 42 ÷ 6 = 7?',
    options: ['Fordi 6 · 7 = 42', 'Fordi 42 − 6 = 36', 'Fordi 6 + 7 = 13', 'Fordi 42 + 6 = 48'],
    explanation: 'Divisjon og multiplikasjon henger sammen: når 6 · 7 = 42, må 42 ÷ 6 = 7.',
  },
  {
    question: 'Hva er 96 ÷ 4?',
    options: ['24', '22', '26', '14'],
    explanation: '96 ÷ 4: 80 ÷ 4 = 20 og 16 ÷ 4 = 4, så svaret er 20 + 4 = 24.',
  },
  {
    question: 'Hva er 23 ÷ 4?',
    options: ['5 rest 3', '5 rest 2', '6 rest 1', '4 rest 3'],
    explanation: '4 · 5 = 20, og det er 3 igjen til 23. Altså 5 rest 3.',
  },
  {
    question: 'Hvordan kan du sjekke at 84 ÷ 7 = 12 er riktig?',
    options: ['Regn 12 · 7 og se om det blir 84', 'Regn 84 + 7 og se om det blir 12', 'Regn 84 − 12 og se om det blir 7', 'Regn 12 ÷ 7 og se om det blir 84'],
    explanation: 'Vi sjekker divisjon med ganging: 12 · 7 = 84. ✓ Da er svaret riktig.',
  },
  {
    question: '36 boller skal deles likt mellom 9 barn. Hvor mange boller får hvert barn?',
    options: ['4', '6', '3', '5'],
    explanation: '36 ÷ 9 = 4, fordi 9 · 4 = 36. Hvert barn får 4 boller.',
  },
],

  '5-2-4': [
  {
    question: 'Hva skal vi alltid regne ut først i et regnestykke?',
    options: ['Det som står i parentes', 'Pluss og minus', 'Det som står lengst til venstre', 'Det største tallet'],
    explanation: 'Parenteser regnes alltid først, deretter gange og dele, og til slutt pluss og minus.',
  },
  {
    question: 'Hva er 3 + 4 · 2?',
    options: ['11', '14', '10', '24'],
    explanation: 'Vi ganger før vi plusser: 4 · 2 = 8, og så 3 + 8 = 11. (14 får du hvis du plusser først — det er feil!)',
  },
  {
    question: 'Hva er (8 − 3) · 4?',
    options: ['20', '29', '12', '5'],
    explanation: 'Parentesen først: 8 − 3 = 5. Deretter 5 · 4 = 20.',
  },
  {
    question: 'Hva er 20 − 6 ÷ 2?',
    options: ['17', '7', '14', '10'],
    explanation: 'Vi deler før vi trekker fra: 6 ÷ 2 = 3, og så 20 − 3 = 17. (7 får du hvis du regner 20 − 6 først.)',
  },
  {
    question: 'Hvorfor trenger vi regler for regnerekkefølgen?',
    options: ['Slik at alle får samme svar på samme regnestykke', 'Slik at regnestykkene blir vanskeligere', 'Fordi parenteser er forbudt', 'Fordi pluss alltid er viktigst'],
    explanation: 'Uten felles regler kunne 3 + 4 · 2 gi både 11 og 14. Reglene gjør at alle regner likt og får 11.',
  },
],

  '5-3-1': [
  {
    question: 'Hvor mange centimeter er det i 1 meter?',
    options: ['100 cm', '10 cm', '1 000 cm', '50 cm'],
    explanation: '1 m = 100 cm. Husk også: 1 m = 10 dm = 1 000 mm.',
  },
  {
    question: 'Hvor mange meter er 3 km?',
    options: ['3 000 m', '300 m', '30 m', '30 000 m'],
    explanation: '1 km = 1 000 m, så 3 km = 3 · 1 000 = 3 000 m.',
  },
  {
    question: 'Hvor mange meter er 500 cm?',
    options: ['5 m', '50 m', '0,5 m', '500 m'],
    explanation: 'Fra liten til stor enhet deler vi: 500 cm ÷ 100 = 5 m.',
  },
  {
    question: 'Hvilken enhet passer best for å måle avstanden mellom to byer?',
    options: ['Kilometer', 'Centimeter', 'Millimeter', 'Desimeter'],
    explanation: 'Avstander mellom steder er lange, så vi bruker kilometer. Centimeter og millimeter er for små ting.',
  },
  {
    question: 'Hvor mange centimeter er 45 mm?',
    options: ['4,5 cm', '45 cm', '450 cm', '0,45 cm'],
    explanation: '1 cm = 10 mm, så vi deler på 10: 45 mm = 4,5 cm.',
  },
],

  '5-3-2': [
  {
    question: 'Hvilken enhet bruker vi for å måle areal?',
    options: ['Kvadratcentimeter (cm²)', 'Centimeter (cm)', 'Liter (L)', 'Kilogram (kg)'],
    explanation: 'Areal måles alltid i kvadrat-enheter, som cm² eller m². Vanlige cm brukes til lengde.',
  },
  {
    question: 'Et rektangel er 6 cm langt og 4 cm bredt. Hva er arealet?',
    options: ['24 cm²', '20 cm²', '10 cm²', '24 cm'],
    explanation: 'Areal = lengde · bredde = 6 · 4 = 24 cm². Husk kvadrat-enheten!',
  },
  {
    question: 'Et rektangel har areal 36 m² og lengde 9 m. Hvor bred er det?',
    options: ['4 m', '6 m', '27 m', '45 m'],
    explanation: 'Bredde = areal ÷ lengde = 36 ÷ 9 = 4 m.',
  },
  {
    question: 'Hva er forskjellen på areal og omkrets?',
    options: ['Arealet er hele flaten, omkretsen er lengden rundt kanten', 'Arealet er rundt kanten, omkretsen er hele flaten', 'De betyr det samme', 'Omkrets måles i cm², areal i cm'],
    explanation: 'Arealet forteller hvor stor flaten er (cm²), mens omkretsen er hvor langt det er rundt figuren (cm).',
  },
  {
    question: 'Et kvadrat har sider på 5 cm. Hva er arealet?',
    options: ['25 cm²', '20 cm²', '10 cm²', '55 cm²'],
    explanation: 'I et kvadrat er alle sidene like: areal = 5 · 5 = 25 cm². (20 cm er omkretsen!)',
  },
],

  '5-3-3': [
  {
    question: 'Hvordan finner vi omkretsen av en figur?',
    options: ['Vi legger sammen lengden av alle sidene', 'Vi ganger lengde med bredde', 'Vi måler bare den lengste siden', 'Vi deler arealet på to'],
    explanation: 'Omkretsen er hvor langt det er rundt hele figuren — vi legger sammen alle sidene.',
  },
  {
    question: 'Et rektangel er 8 cm langt og 3 cm bredt. Hva er omkretsen?',
    options: ['22 cm', '24 cm', '11 cm', '24 cm²'],
    explanation: 'O = 2 · 8 + 2 · 3 = 16 + 6 = 22 cm. (24 cm² er arealet!)',
  },
  {
    question: 'Et kvadrat har sider på 7 cm. Hva er omkretsen?',
    options: ['28 cm', '49 cm', '14 cm', '21 cm'],
    explanation: 'Et kvadrat har 4 like sider: O = 4 · 7 = 28 cm. (49 er arealet.)',
  },
  {
    question: 'En trekant har sider på 5 cm, 6 cm og 7 cm. Hva er omkretsen?',
    options: ['18 cm', '17 cm', '210 cm', '15 cm'],
    explanation: 'Vi legger sammen alle tre sidene: 5 + 6 + 7 = 18 cm.',
  },
  {
    question: 'Hvilken enhet bruker vi for omkrets?',
    options: ['cm (vanlige lengdeenheter)', 'cm² (kvadratenheter)', 'cm³ (kubikkenheter)', 'Liter'],
    explanation: 'Omkrets er en lengde og måles i cm, m osv. Det er areal som måles i cm².',
  },
],

  '5-4-1': [
  {
    question: 'Hvor mange grader er en rett vinkel?',
    options: ['90°', '180°', '45°', '360°'],
    explanation: 'En rett vinkel er nøyaktig 90° — som hjørnet på et ark.',
  },
  {
    question: 'En vinkel er 45°. Hva slags vinkel er det?',
    options: ['Spiss vinkel', 'Stump vinkel', 'Rett vinkel', 'Hel runde'],
    explanation: 'En spiss vinkel er mindre enn 90°. 45° er mindre enn 90°, så den er spiss.',
  },
  {
    question: 'En vinkel er 120°. Hva slags vinkel er det?',
    options: ['Stump vinkel', 'Spiss vinkel', 'Rett vinkel', 'Negativ vinkel'],
    explanation: 'En stump vinkel er mellom 90° og 180°. 120° ligger i dette området.',
  },
  {
    question: 'Hvor mange grader er en hel runde?',
    options: ['360°', '180°', '90°', '100°'],
    explanation: 'En hel runde er 360°. En halv runde (rett linje) er 180°.',
  },
  {
    question: 'Hvor stor er vinkelen mellom viserne på en klokke når den viser nøyaktig 3.00?',
    options: ['90°', '60°', '180°', '45°'],
    explanation: 'Klokka 3.00 peker viserne på 12 og 3 — det er en firedel av runden: 360° ÷ 4 = 90°.',
  },
],

  '5-4-2': [
  {
    question: 'Hvor store er vinklene i en likesidet trekant?',
    options: ['Alle er 60°', 'Alle er 90°', 'Alle er 45°', 'Alle er 120°'],
    explanation: 'I en likesidet trekant er alle vinklene like: 180° ÷ 3 = 60°.',
  },
  {
    question: 'To av vinklene i en trekant er 70° og 50°. Hvor stor er den tredje?',
    options: ['60°', '70°', '50°', '120°'],
    explanation: 'Vinkelsummen er alltid 180°: 180 − 70 − 50 = 60°.',
  },
  {
    question: 'Hva kjennetegner en likebeint trekant?',
    options: ['To sider er like lange', 'Alle tre sidene er like lange', 'Alle sidene er forskjellige', 'Den har en rett vinkel'],
    explanation: 'Likebeint betyr to like lange sider («bein») — og da er også to av vinklene like store.',
  },
  {
    question: 'En trekant har en vinkel på 90° og en på 35°. Hvor stor er den tredje vinkelen?',
    options: ['55°', '65°', '45°', '125°'],
    explanation: '180 − 90 − 35 = 55°.',
  },
  {
    question: 'Kan en trekant ha to rette vinkler?',
    options: ['Nei, da blir vinkelsummen mer enn 180°', 'Ja, hvis den er likebeint', 'Ja, hvis den er liten nok', 'Ja, alle trekanter har det'],
    explanation: 'To rette vinkler er 90° + 90° = 180° — da er det ingenting igjen til den tredje vinkelen. Umulig!',
  },
],

  '5-4-3': [
  {
    question: 'Hva kjennetegner et kvadrat?',
    options: ['4 like lange sider og 4 rette vinkler', '4 like lange sider, men ingen rette vinkler', '2 lange og 2 korte sider', '3 sider og 3 hjørner'],
    explanation: 'Et kvadrat har fire like lange sider og fire vinkler på 90°.',
  },
  {
    question: 'Er et kvadrat også et rektangel?',
    options: ['Ja, alltid — det har 4 rette vinkler og motsatte sider like', 'Nei, aldri', 'Bare hvis det er stort', 'Bare hvis sidene er forskjellige'],
    explanation: 'Et rektangel har 4 rette vinkler og like lange motsatte sider — det stemmer for kvadratet også. Men et rektangel er ikke alltid et kvadrat.',
  },
  {
    question: 'Hva er spesielt med et parallellogram?',
    options: ['Motsatte sider er parallelle og like lange', 'Alle vinklene er rette', 'Det har bare tre sider', 'Alle sidene er forskjellige'],
    explanation: 'I et parallellogram er motsatte sider parallelle og like lange, men vinklene trenger ikke være 90°.',
  },
  {
    question: 'Et kvadrat har sider på 6 cm. Hva er omkretsen?',
    options: ['24 cm', '36 cm', '12 cm', '18 cm'],
    explanation: 'Omkrets av kvadrat = 4 · side = 4 · 6 = 24 cm.',
  },
  {
    question: 'Hva er sant om alle rektangler?',
    options: ['Motsatte sider er like lange', 'Alle fire sidene er like lange', 'De har bare to rette vinkler', 'De har fem hjørner'],
    explanation: 'I et rektangel er motsatte sider alltid like lange, og alle fire vinklene er rette.',
  },
],

  '5-5-1': [
  {
    question: 'Hva betyr det at en søyle i et søylediagram er høyere enn de andre?',
    options: ['Den viser den største verdien', 'Den viser den minste verdien', 'Den er tegnet feil', 'Den viser gjennomsnittet'],
    explanation: 'Jo høyere søyle, jo større verdi. Den høyeste søylen viser det som er mest.',
  },
  {
    question: 'Hvordan organiserer en tabell dataene?',
    options: ['I rader og kolonner', 'I sirkler', 'I tilfeldig rekkefølge', 'Bare med bilder'],
    explanation: 'En tabell har rader (bortover) og kolonner (nedover) som gjør dataene lette å lese.',
  },
  {
    question: 'I en klasse stemte elevene på favorittsport: fotball 8, håndball 5, ski 3, svømming 4. Hvor mange elever stemte til sammen?',
    options: ['20', '19', '21', '16'],
    explanation: 'Vi legger sammen alle verdiene: 8 + 5 + 3 + 4 = 20 elever.',
  },
  {
    question: 'Se på tallene: fotball 8, håndball 5, ski 3, svømming 4. Hvilken sport var mest populær?',
    options: ['Fotball', 'Håndball', 'Ski', 'Svømming'],
    explanation: 'Fotball fikk flest stemmer (8) og ville hatt den høyeste søylen i et diagram.',
  },
  {
    question: 'Fotball fikk 8 stemmer og ski fikk 3. Hvor mange flere stemte på fotball enn på ski?',
    options: ['5', '11', '3', '8'],
    explanation: 'Vi finner differansen: 8 − 3 = 5 flere stemmer på fotball.',
  },
],

};

export default quizData_matematikk_5;
