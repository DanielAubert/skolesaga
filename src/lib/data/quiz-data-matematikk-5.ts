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


};

export default quizData_matematikk_5;
