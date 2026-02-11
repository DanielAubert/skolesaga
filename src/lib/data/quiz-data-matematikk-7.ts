import type { QuizQuestion } from './quiz-data';

const quizData_matematikk_7: Record<string, QuizQuestion[]> = {
  'matematikk-7-1-1': [
  {
    question: 'Hva er 5 + (-3)?',
    options: ['2', '8', '-8', '-2'],
    explanation: '5 + (-3) = 5 - 3 = 2',
  },
  {
    question: 'Hva er -6 + (-2)?',
    options: ['-8', '-4', '8', '4'],
    explanation: '-6 + (-2) = -(6 + 2) = -8',
  },
  {
    question: 'Hva er -5 - (-8)?',
    options: ['3', '-13', '13', '-3'],
    explanation: '-5 - (-8) = -5 + 8 = 3 (minus minus blir pluss)',
  },
  {
    question: 'Sett i stigende rekkefølge: 3, -5, 0, -2',
    options: ['-5, -2, 0, 3', '-2, -5, 0, 3', '3, 0, -2, -5', '0, -2, -5, 3'],
    explanation: 'Fra minst til størst: -5 < -2 < 0 < 3',
  },
  {
    question: 'Temperaturen var -12 grader. Den steg 18 grader. Hva er den nå?',
    options: ['6 grader', '-30 grader', '30 grader', '-6 grader'],
    explanation: '-12 + 18 = 6 grader',
  },
],


  'matematikk-7-1-2': [
  {
    question: 'Hva er 3 + 4 x 2 - 6 div 3?',
    options: ['9', '14', '5', '11'],
    explanation: '3 + 8 - 2 = 9 (gange og dele for pluss og minus)',
  },
  {
    question: 'Hva er (5 + 3) x 2?',
    options: ['16', '11', '13', '26'],
    explanation: 'Parentes først: (5 + 3) x 2 = 8 x 2 = 16',
  },
  {
    question: 'Hva er 2^2 + 3^2?',
    options: ['13', '10', '25', '7'],
    explanation: '2^2 + 3^2 = 4 + 9 = 13',
  },
  {
    question: 'Hva er (2 + 3)^2?',
    options: ['25', '13', '10', '7'],
    explanation: '(2 + 3)^2 = 5^2 = 25',
  },
  {
    question: 'Hva regnes først: gange eller pluss?',
    options: ['Gange', 'Pluss', 'De er like', 'Minus'],
    explanation: 'Gange og dele kommer for pluss og minus i regnerekkefølgen.',
  },
],


  'matematikk-7-1-3': [
  {
    question: 'Hva er (1/2) x (3/4)?',
    options: ['3/8', '4/6', '3/2', '1/8'],
    explanation: '(1/2) x (3/4) = (1x3)/(2x4) = 3/8',
  },
  {
    question: 'Hva er (3/4) x 8?',
    options: ['6', '11', '24', '32/4'],
    explanation: '(3/4) x 8 = (3 x 8)/4 = 24/4 = 6',
  },
  {
    question: 'Hva er (1/2) div (1/4)?',
    options: ['2', '1/8', '4', '$\\frac{1}{2}$'],
    explanation: '(1/2) div (1/4) = (1/2) x (4/1) = 4/2 = 2',
  },
  {
    question: 'Hva er regelen for a dele med en brok?',
    options: ['Gang med den omvendte broken', 'Del tellerne', 'Gang nevnerne', 'Snu begge brokene'],
    explanation: 'A dele med en brok er det samme som å gånge med den omvendte.',
  },
  {
    question: 'Hva er 6 div (3/4)?',
    options: ['8', '4,5', '18/4', '2'],
    explanation: '6 div (3/4) = 6 x (4/3) = 24/3 = 8',
  },
],


  'matematikk-7-1-4': [
  {
    question: 'Hva er 2^5?',
    options: ['32', '10', '25', '16'],
    explanation: '2^5 = 2 x 2 x 2 x 2 x 2 = 32',
  },
  {
    question: 'Hva er 10^4?',
    options: ['10000', '1000', '40', '100000'],
    explanation: '10^4 = 10 x 10 x 10 x 10 = 10000',
  },
  {
    question: 'Hva er 2^3 x 2^2?',
    options: ['2^5 = 32', '2^6 = 64', '4^5', '2^1'],
    explanation: 'Samme grunntall: 2^3 x 2^2 = 2^(3+2) = 2^5 = 32',
  },
  {
    question: 'Skriv 1000 som tierpotens:',
    options: ['10^3', '10^4', '10^2', '10^6'],
    explanation: '1000 = 10 x 10 x 10 = 10^3',
  },
  {
    question: 'Hva er grunntallet i potensen 5^3?',
    options: ['5', '3', '125', '15'],
    explanation: 'Grunntallet er tallet som ganges med seg selv, her 5.',
  },
],


  'matematikk-7-2-1': [
  {
    question: 'Forenkle: 5x + 3x',
    options: ['8x', '15x', '8x2', '2x'],
    explanation: '5x + 3x = (5+3)x = 8x',
  },
  {
    question: 'Forenkle: 4x + 3y + 2x - y',
    options: ['6x + 2y', '9xy', '6x + 4y', '4x + 2y'],
    explanation: 'Samle like ledd: (4x + 2x) + (3y - y) = 6x + 2y',
  },
  {
    question: 'Hva er 2x x 3x?',
    options: ['6x2', '5x', '6x', '5x2'],
    explanation: '2x x 3x = (2 x 3) x (x x x) = 6x2',
  },
  {
    question: 'Finn verdien av 4x + 1 nårx = 3',
    options: ['13', '12', '43', '7'],
    explanation: '4 x 3 + 1 = 12 + 1 = 13',
  },
  {
    question: 'Hva er like ledd?',
    options: ['Ledd med samme bokstavdel', 'Alle ledd', 'Ledd med tall', 'Ledd uten bokstaver'],
    explanation: 'Like ledd har samme variabel(er), f.eks. 3x og 5x.',
  },
],


  'matematikk-7-2-2': [
  {
    question: 'Los likningen 2x + 3 = 11',
    options: ['x = 4', 'x = 7', 'x = 5,5', 'x = 14'],
    explanation: '2x + 3 = 11, 2x = 8, x = 4',
  },
  {
    question: 'Los likningen 5x - 4 = 16',
    options: ['x = 4', 'x = 2,4', 'x = 20', 'x = 12'],
    explanation: '5x - 4 = 16, 5x = 20, x = 4',
  },
  {
    question: 'Los likningen x + 4 = 10',
    options: ['x = 6', 'x = 14', 'x = 4', 'x = 40'],
    explanation: 'x + 4 = 10, x = 10 - 4 = 6',
  },
  {
    question: 'Hva er balanseprinsippet?',
    options: ['Gjor det samme påbegge sider', 'Del på2', 'Gang med x', 'Flytt alle ledd'],
    explanation: 'Balanseprinsippet: gjør samme operasjon påbegge sider av likhetstegnet.',
  },
  {
    question: 'Los likningen 2x - 5 = x + 3',
    options: ['x = 8', 'x = 2', 'x = -2', 'x = 4'],
    explanation: '2x - 5 = x + 3, 2x - x = 3 + 5, x = 8',
  },
],


  'matematikk-7-2-3': [
  {
    question: 'Los ulikheten x + 2 > 5',
    options: ['x > 3', 'x < 3', 'x = 3', 'x > 7'],
    explanation: 'x + 2 > 5, x > 5 - 2, x > 3',
  },
  {
    question: 'Hva betyr tegnet <=?',
    options: ['Mindre enn eller lik', 'Større enn eller lik', 'Bare mindre enn', 'Ikke lik'],
    explanation: '<= betyr "mindre enn eller lik".',
  },
  {
    question: 'Los ulikheten 2x > 10',
    options: ['x > 5', 'x < 5', 'x > 20', 'x < 20'],
    explanation: '2x > 10, x > 10/2, x > 5',
  },
  {
    question: 'Hva skjer når du deler med et negativt tall i en ulikhet?',
    options: ['Du må snu ulikhetstegnet', 'Ingenting', 'Du sletter ulikheten', 'Du ganger med -1'],
    explanation: 'Når du ganger eller deler med negativt tall, snus ulikhetstegnet.',
  },
  {
    question: 'Los ulikheten x - 4 < 3',
    options: ['x < 7', 'x > 7', 'x < -1', 'x > -1'],
    explanation: 'x - 4 < 3, x < 3 + 4, x < 7',
  },
],


  'matematikk-7-2-4': [
  {
    question: 'Jonas kjøpte 3 like bøker og betalte 135 kr. Hva kostet en bok?',
    options: ['45 kr', '40 kr', '132 kr', '138 kr'],
    explanation: '3x = 135, x = 135/3 = 45 kr',
  },
  {
    question: 'Emma er dobbelt så gammel som broren. Sammen er de 18 år. Hvor gammel er Emma?',
    options: ['12 år', '9 år', '6 år', '18 år'],
    explanation: 'x + 2x = 18, 3x = 18, x = 6. Emma er 2 x 6 = 12 år.',
  },
  {
    question: 'Et rektangel har omkrets 28 cm. Lengden er 3 cm mer enn bredden. Hva er bredden?',
    options: ['5,5 cm', '8 cm', '3 cm', '14 cm'],
    explanation: '2(x + 3) + 2x = 28, 4x + 6 = 28, 4x = 22, x = 5,5 cm',
  },
  {
    question: 'Hva er første steg når du løser en tekstoppgave med likning?',
    options: ['Definer den ukjente (x)', 'Finn svåret', 'Tegn en figur', 'Gjett et svar'],
    explanation: 'Først må du bestemme hva x skal representere.',
  },
  {
    question: 'Tre tall følger etter hverandre (f.eks. 5, 6, 7). Summen er 21. Finn tallene.',
    options: ['6, 7, 8', '5, 6, 7', '7, 8, 9', '4, 5, 6'],
    explanation: 'x + (x+1) + (x+2) = 21, 3x + 3 = 21, 3x = 18, x = 6. Tallene er 6, 7, 8.',
  },
],


  'matematikk-7-3-1': [
  {
    question: 'I hvilken kvadrant ligger punktet (3, -2)?',
    options: ['Kvadrant IV', 'Kvadrant I', 'Kvadrant II', 'Kvadrant III'],
    explanation: 'Positiv x, negativ y = Kvadrant IV',
  },
  {
    question: 'Hva er koordinatene til origo?',
    options: ['(0, 0)', '(1, 1)', '(0, 1)', '(1, 0)'],
    explanation: 'Origo er der aksene krysser, med koordinater (0, 0).',
  },
  {
    question: 'I hvilken kvadrant ligger punktet (-4, 3)?',
    options: ['Kvadrant II', 'Kvadrant I', 'Kvadrant III', 'Kvadrant IV'],
    explanation: 'Negativ x, positiv y = Kvadrant II',
  },
  {
    question: 'Et punkt ligger 4 til venstre og 3 ned fra origo. Hva er koordinatene?',
    options: ['(-4, -3)', '(4, 3)', '(-4, 3)', '(4, -3)'],
    explanation: 'Venstre = negativ x, ned = negativ y, så(-4, -3)',
  },
  {
    question: 'Hva er x-koordinaten i punktet (5, -7)?',
    options: ['5', '-7', '12', '-2'],
    explanation: 'x-koordinaten er det første tallet i parentesen, her 5.',
  },
],


  'matematikk-7-3-2': [
  {
    question: 'I y = 3x + 2, hva er stigningstallet?',
    options: ['3', '2', '5', 'x'],
    explanation: 'I y = ax + b er a stigningstallet. Her er a = 3.',
  },
  {
    question: 'I y = -2x + 5, hva er konstantleddet?',
    options: ['5', '-2', '3', 'x'],
    explanation: 'I y = ax + b er b konstantleddet. Her er b = 5.',
  },
  {
    question: 'Hvis stigningstallet er negativt, hva skjer med grafen?',
    options: ['Den gårnedover', 'Den gåroppover', 'Den er horisontal', 'Den er vertikal'],
    explanation: 'Negativt stigningstall betyr at linjen gårnedover fra venstre mot høyre.',
  },
  {
    question: 'Hva er y nårx = 2 i y = 3x + 1?',
    options: ['7', '6', '5', '4'],
    explanation: 'y = 3 x 2 + 1 = 6 + 1 = 7',
  },
  {
    question: 'Hvor krysser grafen y = 2x - 4 y-aksen?',
    options: ['(0, -4)', '(0, 2)', '(-4, 0)', '(2, 0)'],
    explanation: 'Grafen krysser y-aksen nårx = 0: y = 2(0) - 4 = -4, så(0, -4).',
  },
],


  'matematikk-7-3-3': [
  {
    question: 'Hva betyr det at en graf er flat (horisontal)?',
    options: ['Verdien er konstant - ingen endring', 'Verdien øker raskt', 'Verdien synker raskt', 'Grafen er feil'],
    explanation: 'En flat graf betyr at y-verdien ikke endrer seg.',
  },
  {
    question: 'Hva viser en avstand-tid-graf som stiger?',
    options: ['Objektet beveger seg bort', 'Objektet står stille', 'Objektet beveger seg nærmere', 'Objektet har stoppet'],
    explanation: 'Stigende graf betyr at avstanden øker - objektet beveger seg bort.',
  },
  {
    question: 'En graf starter i origo, stiger, blir flat, og synker tilbake til 0. Hva kan dette vise?',
    options: ['En tur fra hjemmet og tilbake', 'En bil som akselærerer', 'Temperaturen over et år', 'Antall elever påskolen'],
    explanation: 'Starter og slutter på0 = hjemme, stigende = gårbort, flat = stopper, synkende = gårtilbake.',
  },
  {
    question: 'Hva betyr en bratt graf?',
    options: ['Stor endring påkort tid', 'Liten endring', 'Ingen endring', 'Feil i maling'],
    explanation: 'Bratt graf = stor endring i y for liten endring i x = rask endring.',
  },
  {
    question: 'Et basseng fylles. Pa 5 min stiger vannet 25 cm. Hvor fort fylles det?',
    options: ['5 cm per minutt', '25 cm per minutt', '125 cm per minutt', '0,2 cm per minutt'],
    explanation: 'Fart = 25 cm / 5 min = 5 cm per minutt',
  },
],


  'matematikk-7-4-1': [
  {
    question: 'To vinkler i en trekant er 70 og 60 grader. Hva er den tredje?',
    options: ['50 grader', '130 grader', '80 grader', '90 grader'],
    explanation: '180 - 70 - 60 = 50 grader',
  },
  {
    question: 'Hva er vinkelsummen i en trekant?',
    options: ['$180°$', '$360°$', '$90°$', '$270°$'],
    explanation: 'Vinkelsummen i alle trekanter er alltid 180 grader.',
  },
  {
    question: 'En rettvinklet trekant har en vinkel på90 grader og en på 30 grader. Hva er den tredje?',
    options: ['60 grader', '50 grader', '120 grader', '30 grader'],
    explanation: '180 - 90 - 30 = 60 grader',
  },
  {
    question: 'Hva kjennetegner en spissvinket trekant?',
    options: ['Alle vinkler er under 90 grader', 'En vinkel er 90 grader', 'En vinkel er over 90 grader', 'Alle vinkler er 60 grader'],
    explanation: 'I en spissvinket trekant er alle tre vinkler under 90 grader.',
  },
  {
    question: 'I en likebent trekant er toppvinkelen 40 grader. Hva er basisvinklene?',
    options: ['70 grader hver', '80 grader hver', '140 grader hver', '40 grader hver'],
    explanation: 'Basisvinklene er like: (180 - 40) / 2 = 140 / 2 = 70 grader',
  },
],


  'matematikk-7-4-2': [
  {
    question: 'Hva er en midtnormal?',
    options: ['En linje som står vinkelrett påen annen og gårgjennom midtpunktet', 'En diagonal linje', 'En halv sirkel', 'En tangent'],
    explanation: 'Midtnormalen står vinkelrett (90 grader) og gårgjennom midtpunktet av et linjestykke.',
  },
  {
    question: 'Hvabrukes til geometriske konstruksjoner?',
    options: ['Passer og linjal', 'Gradskive og linjal', 'Bare blyant', 'Kalkulator'],
    explanation: 'Klassiske konstruksjoner gjøres med passer og ugraduert linjal.',
  },
  {
    question: 'Hva gjør halveringslinjen til en vinkel?',
    options: ['Deler vinkelen i to like store vinkler', 'Dobler vinkelen', 'Fjerner vinkelen', 'Lager en rett vinkel'],
    explanation: 'Halveringslinjen deler vinkelen i to like store deler.',
  },
  {
    question: 'Alle punkter påmidtnormalen til AB har...',
    options: ['Lik avstand til A og B', 'Større avstand til A', 'Større avstand til B', 'Avstand 0 til begge'],
    explanation: 'Ethvert punkt påmidtnormalen har lik avstand til begge endepunktene.',
  },
  {
    question: 'Hvor mange grader er vinkelen mellom en linje og dens midtnormal?',
    options: ['90 grader', '45 grader', '180 grader', '60 grader'],
    explanation: 'Midtnormalen står vinkelrett pålinjen, såvinkelen er 90 grader.',
  },
],


  'matematikk-7-4-3': [
  {
    question: 'En rettvinklet trekant har kateter 3 og 4. Hva er hypotenusen?',
    options: ['5', '7', '12', '1'],
    explanation: 'c^2 = 3^2 + 4^2 = 9 + 16 = 25, c = 5',
  },
  {
    question: 'Hva er Pytagoras setning?',
    options: ['a^2 + b^2 = c^2', 'a + b = c', 'a x b = c', 'a^2 = b^2 + c^2'],
    explanation: 'Pytagoras: a^2 + b^2 = c^2, der c er hypotenusen.',
  },
  {
    question: 'Hva er hypotenusen i en rettvinklet trekant?',
    options: ['Den lengste siden, overfor den rette vinkelen', 'Den korteste siden', 'En av katetene', 'Høyden'],
    explanation: 'Hypotenusen er den lengste siden og ligger overfor den rette vinkelen (90 grader).',
  },
  {
    question: 'Kateter er 6 og 8. Finn hypotenusen.',
    options: ['10', '14', '48', '100'],
    explanation: 'c^2 = 6^2 + 8^2 = 36 + 64 = 100, c = 10',
  },
  {
    question: 'Hypotenusen er 13 og en katet er 5. Finn den andre kateten.',
    options: ['$12$', '$8$', '$18$', '$144$'],
    explanation: 'b^2 = 13^2 - 5^2 = 169 - 25 = 144, b = 12',
  },
],


  'matematikk-7-4-4': [
  {
    question: 'Hva er volumet av en sylinder med radius 5 cm og høyde 10 cm? (pi = 3,14)',
    options: ['785 cm3', '50 cm3', '157 cm3', '250 cm3'],
    explanation: 'V = pi x r^2 x h = 3,14 x 25 x 10 = 785 cm3',
  },
  {
    question: 'Formelen for volum av sylinder er:',
    options: ['V = pi x r^2 x h', 'V = 2 x pi x r x h', 'V = pi x r x h', 'V = r^2 x h'],
    explanation: 'Volum av sylinder = pi x radius^2 x høyde',
  },
  {
    question: 'En L-formet figur er satt sammen av to rektangler: 8x3 og 4x5 cm. Hva er totalarealet?',
    options: ['44 cm2', '24 cm2', '20 cm2', '60 cm2'],
    explanation: '8 x 3 + 4 x 5 = 24 + 20 = 44 cm2',
  },
  {
    question: 'Finn volumet av en sylinder med r = 3 cm og h = 7 cm (pi = 3,14)',
    options: ['ca. 198 cm3', 'ca. 66 cm3', 'ca. 21 cm3', 'ca. 63 cm3'],
    explanation: 'V = 3,14 x 9 x 7 = 197,82 ca. 198 cm3',
  },
  {
    question: 'Hvordan finner vi areal av en sammensatt figur?',
    options: ['Del opp i kjente figurer og legg sammen', 'Gang alle sidene', 'Ma på nytt', 'Det er umulig'],
    explanation: 'Del figuren i enkle former (rektangler, trekanter), beregn hvert areal, legg sammen.',
  },
],


  'matematikk-7-5-1': [
  {
    question: 'Hva er forskjellen påpopulasjon og utvalg?',
    options: ['Populasjon er alle, utvalg er de du undersøker', 'De er det samme', 'Utvalg er alle', 'Populasjon er de du undersøker'],
    explanation: 'Populasjon = hele gruppen, utvalg = en del av populasjonen som undersøkes.',
  },
  {
    question: 'Hva er et representativt utvalg?',
    options: ['Et utvalg som gjenspeiler hele populasjonen', 'Et stort utvalg', 'Et lite utvalg', 'Et tilfeldig valgt person'],
    explanation: 'Et representativt utvalg har samme egenskaper som hele populasjonen.',
  },
  {
    question: 'Hva er første steg i en statistisk undersøkelse?',
    options: ['Planlegge - bestemme hva du vil finne ut', 'Lage diagram', 'Skrive konklusjon', 'Samle inn data'],
    explanation: 'Først må du planlegge: hva vil du undersøke, og hvem skal du spørre?',
  },
  {
    question: 'Hvorfor bruker vi utvalg i stedet for hele populasjonen?',
    options: ['Det er ofte upraktisk å undersøke alle', 'Utvalg gir bedre svar', 'Populasjonen finnes ikke', 'Fordi vi må'],
    explanation: 'Det kan være for dyrt, tidkrevende eller umulig å undersøke alle.',
  },
  {
    question: 'Hva er et tilfeldig utvalg?',
    options: ['Alle i populasjonen har lik sjanse til å bli valgt', 'Du velger de du kjenner', 'Du velger de første', 'Du velger de beste'],
    explanation: 'Tilfeldig utvalg betyr at alle har samme sjanse til å komme med.',
  },
],


  'matematikk-7-5-2': [
  {
    question: 'Hvilken diagramtype passer best for å vise utvikling over tid?',
    options: ['Linjediagram', 'Sektordiagram', 'Søylediagram', 'Punktdiagram'],
    explanation: 'Linjediagram viser tydelig hvordan verdier endrer seg over tid.',
  },
  {
    question: 'Hva er et sektordiagram (kakediagram) best til?',
    options: ['Vise andeler av en helhet (100%)', 'Vise utvikling over tid', 'Sammenligne høyder', 'Vise avstand'],
    explanation: 'Sektordiagram viser hvor stor del hver kategori utgjør av helheten.',
  },
  {
    question: 'Hvilket diagram passer for å vise favorittfarge i en klasse?',
    options: ['Søylediagram', 'Linjediagram', 'Punktdiagram', 'Varmekarrt'],
    explanation: 'Søylediagram er godt for å sammenligne kategorier som favorittfarge.',
  },
  {
    question: 'Hva viser et punktdiagram?',
    options: ['Sammenheng mellom to variabler', 'Utvikling over tid', 'Andeler av helhet', 'Bare en variabel'],
    explanation: 'Punktdiagram brukes for å se om det er en sammenheng mellom to variabler.',
  },
  {
    question: 'I et regneark, hva gjør du etter å ha skrevet inn dataene for å lage diagram?',
    options: ['Marker dataene og velg "Sett inn diagram"', 'Skriver ut papiret', 'Lukker programmet', 'Starter på nytt'],
    explanation: 'Marker dataene, klikk "Sett inn", velg diagramtype, tilpass utseende.',
  },
],


  'matematikk-7-5-3': [
  {
    question: 'Ole får 500 kr. Han bruker 200 kr på hobbyer og 150 kr på godteri. Hvor mye sparer han?',
    options: ['150 kr', '350 kr', '500 kr', '50 kr'],
    explanation: '500 - 200 - 150 = 150 kr',
  },
  {
    question: 'Hva er et budsjett?',
    options: ['En plan for inntekter og utgifter', 'En bankkonto', 'En kvittering', 'En regning'],
    explanation: 'Et budsjett er en oversikt over hva du har og hva du planlegger å bruke.',
  },
  {
    question: 'Lisa får 800 kr. Hun bruker 40% på klær. Hvor mye er det?',
    options: ['320 kr', '400 kr', '200 kr', '480 kr'],
    explanation: '40% av 800 = 0,40 x 800 = 320 kr',
  },
  {
    question: 'Hvorfor er det viktig med budsjett?',
    options: ['For å ha kontroll på økonomien og ikke bruke mer enn du har', 'For å bruke mest mulig', 'For å imponere andre', 'Det er ikke viktig'],
    explanation: 'Budsjett hjelper deg å holde oversikt og unngå å bruke mer enn du har.',
  },
  {
    question: 'Hva bør være størst: inntekter eller utgifter?',
    options: ['Inntekter', 'Utgifter', 'De bør være like', 'Det spiller ingen rolle'],
    explanation: 'Inntektene bør være større enn utgiftene for at du skal kunne spare.',
  },
],


  'matematikk-7-5-4': [
  {
    question: 'En jakke koster 800 kr med 30% rabatt. Hva er salgsprisen?',
    options: ['560 kr', '240 kr', '770 kr', '1040 kr'],
    explanation: 'Rabatt: 800 x 0,30 = 240. Salgspris: 800 - 240 = 560 kr',
  },
  {
    question: 'Pris 500 kr med 20% rabatt. Hva betaler du?',
    options: ['400 kr', '100 kr', '600 kr', '480 kr'],
    explanation: '500 x 0,80 = 400 kr (eller 500 - 100 = 400)',
  },
  {
    question: 'Prisen økte fra 200 kr til 250 kr. Hvor mange prosent økte den?',
    options: ['25%', '50%', '20%', '10%'],
    explanation: 'Økning: (250-200)/200 x 100% = 50/200 x 100% = 25%',
  },
  {
    question: 'Hva er 25% påslag på 400 kr?',
    options: ['500 kr', '300 kr', '100 kr', '425 kr'],
    explanation: '25% av 400 = 100 kr påslag. Ny pris: 400 + 100 = 500 kr',
  },
  {
    question: 'Prisen gikk fra 100 til 80 kr. Hvor stor var nedgangen i prosent?',
    options: ['20%', '25%', '80%', '10%'],
    explanation: 'Nedgang: (100-80)/100 x 100% = 20/100 x 100% = 20%',
  },
],


};

export default quizData_matematikk_7;
