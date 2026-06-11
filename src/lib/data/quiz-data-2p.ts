import type { QuizQuestion } from './quiz-data';

const quizData_2p: Record<string, QuizQuestion[]> = {
  '2p-1': [
  {
    question: 'Hvilket tall er $4\\,820\\,000$ skrevet på standardform?',
    options: ['$4{,}82 \\cdot 10^6$', '$48{,}2 \\cdot 10^5$', '$4{,}82 \\cdot 10^7$', '$0{,}482 \\cdot 10^7$'],
    explanation: 'På standardform skal tallet foran være mellom 1 og 10. Vi flytter komma 6 plasser til venstre, så $4\\,820\\,000 = 4{,}82 \\cdot 10^6$.',
  },
  {
    question: 'Hvor mange gjeldende siffer har tallet $0{,}00250$?',
    options: ['$3$', '$5$', '$2$', '$6$'],
    explanation: 'Gjeldende siffer er 2, 5 og den siste 0-en (som viser nøyaktighet). Nullene foran desimalkommaet teller ikke, så svåret er $3$.',
  },
  {
    question: 'Hva blir $3{,}5 \\cdot 10^4$ skrevet som vanlig tall?',
    options: ['$35\\,000$', '$3\\,500$', '$350\\,000$', '$3{,}5$'],
    explanation: 'Vi flytter desimalkommaet 4 plasser til høyre: $3{,}5 \\cdot 10^4 = 35\\,000$.',
  },
  {
    question: 'Hvilket av disse tallene har størst verdi?',
    options: ['$2{,}5 \\cdot 10^5$', '$9{,}8 \\cdot 10^4$', '$1{,}2 \\cdot 10^5$', '$8{,}3 \\cdot 10^4$'],
    explanation: '$2{,}5 \\cdot 10^5 = 250\\,000$ er størst. De andre er $98\\,000$, $120\\,000$ og $83\\,000$.',
  },
  {
    question: 'Hva blir produktet $2 \\cdot 10^3 \\cdot 4 \\cdot 10^2$ på standardform?',
    options: ['$8 \\cdot 10^5$', '$8 \\cdot 10^6$', '$6 \\cdot 10^5$', '$8 \\cdot 10^4$'],
    explanation: 'Vi ganger tallene: $2 \\cdot 4 = 8$, og legger sammen eksponentene: $10^3 \\cdot 10^2 = 10^5$. Svåret er $8 \\cdot 10^5$.',
  },
],


  '2p-2': [
  {
    question: 'En vare øker fra 400 kr til 480 kr. Hva er den prosentvise økningen?',
    options: ['20%', '80 kr', '16,7%', '25%'],
    explanation: 'Prosentvis økning = $\\frac{480-400}{400} \\cdot 100\\% = \\frac{80}{400} \\cdot 100\\% = 20\\%$.',
  },
  {
    question: 'Hva er vekstfaktoren ved en prisreduksjon på 30%?',
    options: ['$0{,}70$', '$1{,}30$', '$0{,}30$', '$1{,}70$'],
    explanation: 'Ved reduksjon trekker vi fra 1: Vekstfaktor $= 1 - 0{,}30 = 0{,}70$.',
  },
  {
    question: 'Hvis renta øker fra 2% til 5%, hvor mange prosentpoeng er økningen?',
    options: ['3 prosentpoeng', '150%', '3%', '2,5 prosentpoeng'],
    explanation: 'Prosentpoeng måler forskjellen mellom to prosenttall: 5% - 2% = 3 prosentpoeng.',
  },
  {
    question: 'Du setter 20 000 kr i banken til 4% årlig rente. Hvor mye har du etter 3 år med rentes rente?',
    options: ['22 497 kr', '22 400 kr', '22 000 kr', '24 000 kr'],
    explanation: 'Sluttverdi $= 20\\,000 \\cdot 1{,}04^3 = 20\\,000 \\cdot 1{,}1249 = 22\\,497$ kr.',
  },
  {
    question: 'En vare koster 600 kr etter 25% rabatt. Hva var originalprisen?',
    options: ['800 kr', '750 kr', '900 kr', '450 kr'],
    explanation: 'Vekstfaktor $0{,}75$ gir ny pris. Originalpris $= 600 / 0{,}75 = 800$ kr.',
  },
],


  '2p-3': [
  {
    question: 'Hvilken lånetype gir lavest totale rentekostnader?',
    options: ['Serielån', 'Annuitetslån', 'Forbrukslån', 'Alle gir like rentekostnader'],
    explanation: 'Serielån gir lavest totale rentekostnader fordi du betaler ned mer av lånet tidlig.',
  },
  {
    question: 'Hva er hovedfordelen med BSU?',
    options: ['Skattefradrag på 20% av innskuddet', 'Høyere rente enn vanlig sparekonto', 'Ingen bindingstid', 'Ubegrenset innskudd'],
    explanation: 'BSU gir 20% skattefradrag på innskuddet, opp til maks 27 500 kr per år.',
  },
  {
    question: 'Hva er forskjellen mellom nominell og effektiv rente?',
    options: ['Effektiv rente inkluderer alle kostnader', 'Nominell rente er alltid høyest', 'De er alltid like', 'Nominell rente inkluderer gebyrer'],
    explanation: 'Effektiv rente inkluderer alle kostnader (gebyrer, termingebyr) og gir det faktiske bildet av lånekostnaden.',
  },
  {
    question: 'Ifølge 50/30/20-regelen, hvor mye bør gå til sparing?',
    options: ['20%', '50%', '30%', '10%'],
    explanation: '50/30/20-regelen sier: 50% til nødvendige utgifter, 30% til ønsker, og 20% til sparing og nedbetaling av gjeld.',
  },
  {
    question: 'Bruttolønn er 35 000 kr og skattetrekket er 28%. Hva blir nettolønnen?',
    options: ['25 200 kr', '9 800 kr', '44 800 kr', '26 600 kr'],
    explanation: 'Nettolønn = Bruttolønn $\\cdot (1 -$ skatteprosent$) = 35\\,000 \\cdot 0{,}72 = 25\\,200$ kr.',
  },
],


  '2p-4': [
  {
    question: 'Løs likningen $4x - 6 = 2x + 10$',
    options: ['$x = 8$', '$x = 2$', '$x = 4$', '$x = -8$'],
    explanation: '$4x - 6 = 2x + 10$ gir $4x - 2x = 10 + 6$, altså $2x = 16$, og $x = 8$.',
  },
  {
    question: 'Hva skjer med ulikhetstegnet når vi deler med et negativt tall?',
    options: ['Tegnet snur', 'Tegnet forblir det samme', 'Ulikheten blir ugyldig', 'Vi må gange med positivt tall først'],
    explanation: 'Når vi ganger eller deler med et negativt tall, må vi snu ulikhetstegnet.',
  },
  {
    question: 'Løs ulikheten $3x + 5 > 20$',
    options: ['$x > 5$', '$x > 25$', '$x < 5$', '$x > 15$'],
    explanation: '$3x + 5 > 20$ gir $3x > 15$, og dermed $x > 5$.',
  },
  {
    question: 'Hva er løsningen på likningssettett: $x + y = 7$ og $x - y = 3$?',
    options: ['$x = 5, y = 2$', '$x = 7, y = 0$', '$x = 4, y = 3$', '$x = 3, y = 4$'],
    explanation: 'Legger vi sammen likningene får vi $2x = 10$, så $x = 5$. Setter inn: $5 + y = 7$ gir $y = 2$.',
  },
  {
    question: 'Hvilken metode brukes for å løse likningssett ved å legge sammen likningene?',
    options: ['Addisjonsmetoden', 'Innsettingsmetoden', 'Grafisk metode', 'Faktorisering'],
    explanation: 'Addisjonsmetoden (eliminasjonsmetoden) legger sammen eller trekker fra likninger for å eliminere en variabel.',
  },
],


  '2p-5': [
  {
    question: 'En funksjon er gitt ved $f(x) = 4x - 8$. Hva er nullpunktet?',
    options: ['$x = 2$', '$x = -2$', '$x = 8$', '$x = 4$'],
    explanation: 'Nullpunkt: $4x - 8 = 0$ gir $4x = 8$, altså $x = 2$.',
  },
  {
    question: 'Hva forteller stigningstallet i en linear funksjon $f(x) = ax + b$?',
    options: ['Hvor mye $y$ øker når $x$ øker med 1', 'Hvor grafen krysser $y$-aksen', 'Nullpunktet', 'Arealet under grafen'],
    explanation: 'Stigningstallet $a$ forteller hvor mye $y$-verdien endrer seg når $x$ øker med 1.',
  },
  {
    question: 'Funksjonen $f(x) = -3x^2 + 12x$ har en parabel som graf. Hvor ligger toppunktet?',
    options: ['$x = 2$', '$x = -2$', '$x = 4$', '$x = 6$'],
    explanation: 'Toppunkt når $a < 0$: $x = \\frac{-b}{2a} = \\frac{-12}{2 \\cdot (-3)} = \\frac{-12}{-6} = 2$.',
  },
  {
    question: 'Hva er diskriminanten for likningen $x^2 + 4x + 5 = 0$?',
    options: ['$-4$', '$4$', '$36$', '$0$'],
    explanation: 'Diskriminanten $D = b^2 - 4ac = 16 - 20 = -4$. Negativt betyr ingen reelle løsninger.',
  },
  {
    question: 'Hvilken type graf har en andregradsfunksjon?',
    options: ['Parabel', 'Rett linje', 'Hyperbel', 'Sirkel'],
    explanation: 'En andregradsfunksjon $f(x) = ax^2 + bx + c$ har en parabel som graf.',
  },
],


  '2p-6': [
  {
    question: 'Et datasett er: 3, 5, 7, 9, 100. Hvilket sentralmål gir best bilde av typisk verdi?',
    options: ['Median', 'Gjennomsnitt', 'Typetall', 'Variasjonsbredde'],
    explanation: 'Median (7) er best fordi 100 er en ekstremverdi som trekker gjennomsnittet kraftig opp.',
  },
  {
    question: 'Hva forteller et høyt standardavvik om datasettet?',
    options: ['Verdiene er spredt langt fra gjennomsnittet', 'Verdiene ligger tett rundt gjennomsnittet', 'Gjennomsnittet er høyt', 'Datasettet har mange verdier'],
    explanation: 'Høyt standardavvik betyr at verdiene i gjennomsnitt ligger langt fra gjennomsnittet.',
  },
  {
    question: 'I et datasett med 9 verdier, hvilken verdi er medianen?',
    options: ['Den 5. verdien når sortert', 'Den 4. verdien når sortert', 'Gjennomsnittet av alle', 'Den største verdien'],
    explanation: 'Med 9 verdier er medianen den midterste, altså verdi nummer 5 når dataene er sortert.',
  },
  {
    question: 'Hva er interkvartilbredden (IQR)?',
    options: ['$Q_3 - Q_1$', 'Største - minste verdi', 'Median - gjennomsnitt', 'Standardavviket'],
    explanation: 'Interkvartilbredden er forskjellen mellom tredje og første kvartil: $\\text{IQR} = Q_3 - Q_1$.',
  },
  {
    question: 'Hvilken diagramtype er best for å vise andeler av en helhet?',
    options: ['Sektordiagram (kakediagram)', 'Linjediagram', 'Punktdiagram', 'Histogram'],
    explanation: 'Sektordiagram viser hvordan en helhet er fordelt på ulike deler, og egner seg godt for å vise prosentandeler.',
  },
],


  '2p-7': [
  {
    question: 'To terninger kastes. Hva er sannsynligheten for at summen blir 7?',
    options: ['6/36 = $\\frac{1}{6}$', '7/36', '2/36 = 1/18', '7/12'],
    explanation: 'Kombinasjoner som gir 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 av 36 mulige = 1/6.',
  },
  {
    question: '$P(A) = 0{,}3$ og $P(B) = 0{,}5$. Hvis A og B er uavhengige, hva er $P(A \\cap B)$?',
    options: ['0,15', '0,80', '0,35', '0,20'],
    explanation: 'For uavhengige hendelser: P(A og B) = P(A) * P(B) = 0,3 * 0,5 = 0,15.',
  },
  {
    question: 'Hva sier komplementsetningen?',
    options: ['P(ikke A) = 1 - P(A)', 'P(A og B) = P(A) * P(B)', 'P(A eller B) = P(A) + P(B)', 'Alle sannsynligheter er like'],
    explanation: 'Komplementsetningen sier at sannsynligheten for at A IKKE skjer er 1 minus sannsynligheten for at A skjer.',
  },
  {
    question: 'I en kortstokk (52 kort), hva er sannsynligheten for å trekke et hjerterkort?',
    options: ['13/52 = $\\frac{1}{4}$', '4/52 = 1/13', '1/52', '26/52 = $\\frac{1}{2}$'],
    explanation: 'Det er 13 hjerterkort av 52 kort totalt, så P(hjerter) = 13/52 = 1/4.',
  },
  {
    question: 'Hva betyr det at to hendelser er uavhengige?',
    options: ['Den ene påvirker ikke sannsynligheten for den andre', 'De kan ikke skje samtidig', 'De har samme sannsynlighet', 'De må skje i rekkefølge'],
    explanation: 'Uavhengige hendelser betyr at utfallet av den ene hendelsen ikke påvirker sannsynligheten for den andre.',
  },
],


  '2p-8': [
  {
    question: 'En rettvinklet trekant har kateter 5 cm og 12 cm. Hvor lang er hypotenusen?',
    options: ['13 cm', '17 cm', '7 cm', '169 cm'],
    explanation: 'Pytagoras: $c^2 = 5^2 + 12^2 = 25 + 144 = 169$, så $c = 13$ cm.',
  },
  {
    question: 'Hva er volumet av en sylinder med radius 3 cm og høyde 10 cm?',
    options: ['90pi cm^3 (ca. 283 cm^3)', '30pi cm^3', '60pi cm^3', '900pi cm^3'],
    explanation: 'Volum sylinder = pi * r^2 * h = pi * 9 * 10 = 90pi cm^3.',
  },
  {
    question: 'Hva er formelen for arealet av en sirkel?',
    options: ['A = pi * r^2', 'A = 2 * pi * r', 'A = pi * d', 'A = 4 * pi * r^2'],
    explanation: 'Arealet av en sirkel er pi ganger radius i andre potens: A = pi * r^2.',
  },
  {
    question: 'En kule har radius 6 cm. Hva er volumet?',
    options: ['288pi cm^3 (ca. 905 cm^3)', '144pi cm^3', '72pi cm^3', '36pi cm^3'],
    explanation: 'Volum kule = (4/3) * pi * r^3 = (4/3) * pi * 216 = 288pi cm^3.',
  },
  {
    question: 'Hva er overflatearealet av en kube med sidelengde 4 cm?',
    options: ['96 cm^2', '64 cm^2', '24 cm^2', '16 cm^2'],
    explanation: 'En kube har 6 sider. Overflate = 6 * s^2 = 6 * 16 = 96 cm^2.',
  },
],


  '2p-9': [
  {
    question: 'Gjør om 72 km/t til m/s.',
    options: ['20 m/s', '259,2 m/s', '12 m/s', '72 m/s'],
    explanation: '72 km/t = 72 / 3,6 m/s = 20 m/s. Del på 3,6 for å gå fra km/t til m/s.',
  },
  {
    question: 'Hvor mange liter er 2,5 m^3?',
    options: ['2 500 liter', '250 liter', '25 000 liter', '25 liter'],
    explanation: '1 m^3 = 1000 liter, så 2,5 m^3 = 2 500 liter.',
  },
  {
    question: 'Hvilken prefiks betyr 10^6?',
    options: ['Mega (M)', 'Kilo (k)', 'Giga (G)', 'Milli (m)'],
    explanation: 'Mega (M) = 10^6 = 1 000 000.',
  },
  {
    question: 'Hvor mange cm^2 er 3 m^2?',
    options: ['30 000 cm^2', '300 cm^2', '3 000 cm^2', '300 000 cm^2'],
    explanation: '1 m^2 = 10 000 cm^2, så 3 m^2 = 30 000 cm^2.',
  },
  {
    question: 'Hva er måleusikkerheten typisk for en linjal med mm-inndeling?',
    options: ['pluss/minus 0,5 mm', 'pluss/minus 1 mm', 'pluss/minus 0,1 mm', 'pluss/minus 5 mm'],
    explanation: 'Ved avlesing av analoge instrumenter er usikkerheten ofte halve minste skalainndeling, altså pluss/minus 0,5 mm.',
  },
],


  '2p-10': [
  {
    question: 'Hva er første steg i matematisk modellering?',
    options: ['Forstå problemet', 'Sette opp en likning', 'Gjøre beregninger', 'Tegne en graf'],
    explanation: 'Det første steget er alltid å forstå problemet - hva skal vi finne ut, og hvilken informasjon har vi?',
  },
  {
    question: 'En befolkning vokser med 5% per år. Hva er vekstfaktoren?',
    options: ['1,05', '0,05', '1,5', '0,95'],
    explanation: 'Ved økning på p% er vekstfaktoren 1 + p/100 = 1 + 0,05 = 1,05.',
  },
  {
    question: 'Tommelfingerregelen for doblingstid ved vekst er:',
    options: ['70 / vekstprosent', 'Vekstprosent * 2', '100 / vekstprosent', 'ln(2) * vekstprosent'],
    explanation: 'Doblingstid er ca. 70 delt på vekstprosenten. F.eks. ved 5% vekst: 70/5 = 14 år.',
  },
  {
    question: 'En bil synker 20% i verdi hvert år. Hva er vekstfaktoren?',
    options: ['0,80', '1,20', '0,20', '1,80'],
    explanation: 'Ved nedgang på p% er vekstfaktoren 1 - p/100 = 1 - 0,20 = 0,80.',
  },
  {
    question: 'Hvorfor må vi vurdere om svåret er rimelig etter modellering?',
    options: ['For å sjekke at modellen fungerer i virkeligheten', 'For å imponere læreren', 'Det er ikke nødvendig', 'For å få flere poeng'],
    explanation: 'Modeller førenkler virkeligheten, så vi må alltid vurdere om svåret er fornuftig og stemmer med det vi vet om situasjonen.',
  },
],


  '2p-1-1': [
  {
    question: 'Hva er nettoinntekt?',
    options: ['Bruttoinntekt minus skatt og andre trekk', 'Den samlede inntekten før skatt', 'Inntekt pluss skattefradrag', 'Lønn minus faste utgifter'],
    explanation: 'Nettoinntekt er det du faktisk får utbetalt: bruttoinntekt minus skatt, pensjonsinnskudd og andre trekk.',
  },
  {
    question: 'Ali har en brutto månedslønn på 30 000 kr. Skattetrekket er 28 % og pensjonsinnskuddet er 2 %. Hva er nettoinntekten?',
    options: ['21 000 kr', '21 600 kr', '22 400 kr', '9 000 kr'],
    explanation: 'Netto = 30 000 · (1 − 0,28 − 0,02) = 30 000 · 0,70 = 21 000 kr. 21 600 kr får du hvis du glemmer pensjonsinnskuddet.',
  },
  {
    question: 'Hvilken av disse utgiftene er en variabel utgift i et budsjett?',
    options: ['Matutgifter', 'Husleie', 'Forsikring', 'Faste abonnementer'],
    explanation: 'Variable utgifter varierer fra måned til måned, som mat, klær og fritid. Husleie, forsikring og abonnementer er faste utgifter.',
  },
  {
    question: 'Hva betyr det å ha god likviditet?',
    options: ['Å ha nok penger tilgjengelig til å betale regninger når de forfaller', 'Å ha høy bruttoinntekt', 'Å eie mye eiendom og fond', 'Å ha lav skatteprosent'],
    explanation: 'Likviditet er evnen til å betale løpende utgifter. Du kan eie mye i fond eller eiendom og likevel ha dårlig likviditet hvis pengene ikke er tilgjengelige.',
  },
  {
    question: 'Lønnen til Per øker med 4 %, mens prisene øker med 3 %. Hva har skjedd med reallønnen hans?',
    options: ['Den har økt med omtrent 1 %', 'Den har økt med 7 %', 'Den har økt med 4 %', 'Den har sunket med 1 %'],
    explanation: 'Reallønnsvekst ≈ nominell lønnsvekst − prisstigning = 4 % − 3 % = 1 %. Kjøpekraften har altså økt litt.',
  },
],

  '2p-1-2': [
  {
    question: 'Hva er vekstfaktoren for et innskudd med 4 % årlig rente?',
    options: ['1,04', '0,04', '1,4', '0,96'],
    explanation: 'Vekstfaktor = 1 + renteprosent/100 = 1 + 0,04 = 1,04.',
  },
  {
    question: 'Du setter 20 000 kr i banken til 5 % årlig rente. Hvor mye har du etter 2 år med renters rente?',
    options: ['22 050 kr', '22 000 kr', '21 000 kr', '30 000 kr'],
    explanation: 'Med renters rente: $K = 20\\,000 \\cdot 1{,}05^2 = 22\\,050$ kr. 22 000 kr er feil fordi rentene det andre året også gir rente.',
  },
  {
    question: 'Hva kjennetegner et annuitetslån?',
    options: ['Like store terminbeløp gjennom hele nedbetalingstiden', 'Like store avdrag hver termin', 'Synkende terminbeløp over tid', 'At det ikke betales renter'],
    explanation: 'Et annuitetslån har like store terminbeløp. I starten er rentedelen stor, mot slutten er avdragsdelen stor. Serielån har like store avdrag.',
  },
  {
    question: 'Hvilken låntype gir lavest totale rentekostnader, alt annet likt?',
    options: ['Serielån', 'Annuitetslån', 'Kredittkortgjeld', 'De gir alltid like store rentekostnader'],
    explanation: 'Serielån betaler ned mer av lånet tidlig, så restlånet (og dermed rentene) blir mindre. Til gjengjeld er terminbeløpene høyere i starten.',
  },
  {
    question: 'Mia har 24 000 kr i kredittkortgjeld med 24 % årlig rente (2 % per måned). Hvor mye renter påløper den første måneden?',
    options: ['480 kr', '5 760 kr', '240 kr', '48 kr'],
    explanation: 'Renter per måned: 24 000 · 0,02 = 480 kr. 5 760 kr er rentene for et helt år.',
  },
],

  '2p-1-3': [
  {
    question: 'Hva menes med at trinnskatten er progressiv?',
    options: ['Skattesatsen øker når inntekten øker', 'Alle betaler samme prosentsats', 'Skatten synker når inntekten øker', 'Skatten betales kun av bedrifter'],
    explanation: 'Trinnskatt er progressiv: jo høyere inntekt, desto høyere sats på den delen av inntekten som ligger over hvert trinn.',
  },
  {
    question: 'Hvilken mva-sats gjelder for matvarer i Norge?',
    options: ['15 %', '25 %', '12 %', '22 %'],
    explanation: 'Matvarer har 15 % mva. Den generelle satsen er 25 %, mens transport, overnatting og kultur har 12 %.',
  },
  {
    question: 'En vare koster 2 000 kr ekskl. mva. Hva blir prisen inkl. 25 % mva?',
    options: ['2 500 kr', '2 250 kr', '2 400 kr', '2 050 kr'],
    explanation: 'Pris inkl. mva = 2 000 · 1,25 = 2 500 kr.',
  },
  {
    question: 'En vare koster 1 250 kr inkl. 25 % mva. Hva er prisen uten mva?',
    options: ['1 000 kr', '937,50 kr', '1 062,50 kr', '950 kr'],
    explanation: 'Pris ekskl. mva = 1 250 / 1,25 = 1 000 kr. Det er feil å trekke fra 25 % av prisen med mva (det gir 937,50 kr).',
  },
  {
    question: 'Hva gjør et skattefradrag, som for eksempel minstefradraget?',
    options: ['Det reduserer beregningsgrunnlaget for skatt', 'Det øker bruttoinntekten', 'Det reduserer mva-satsen', 'Det utbetales direkte som kontanter'],
    explanation: 'Fradrag trekkes fra inntekten før skatten beregnes. Alminnelig inntekt = bruttoinntekt − fradrag, og skatten beregnes av dette.',
  },
],

  '2p-1-4': [
  {
    question: 'Hva kjennetegner faste kostnader i en bedrift?',
    options: ['De endrer seg ikke med produksjonsmengden', 'De øker proporsjonalt med produksjonen', 'De er alltid null ved oppstart', 'De avhenger av salgsprisen'],
    explanation: 'Faste kostnader, som husleie og forsikring, er like store uansett hvor mye bedriften produserer. Variable kostnader øker med produksjonen.',
  },
  {
    question: 'En bedrift har faste kostnader på 50 000 kr og variable kostnader på 20 kr per enhet. Hva er totalkostnaden ved produksjon av 2 000 enheter?',
    options: ['90 000 kr', '40 000 kr', '100 000 kr', '70 000 kr'],
    explanation: 'TK = FK + v · x = 50 000 + 20 · 2 000 = 90 000 kr.',
  },
  {
    question: 'En bedrift selger et produkt for 50 kr per enhet. Variable kostnader er 20 kr per enhet, og faste kostnader er 30 000 kr. Hvor mange enheter må selges for å gå i null?',
    options: ['1 000', '600', '1 500', '429'],
    explanation: 'Nullpunkt: x = FK / (p − v) = 30 000 / (50 − 20) = 30 000 / 30 = 1 000 enheter.',
  },
  {
    question: 'Hva betyr det at en bedrift er i nullpunktet (break-even)?',
    options: ['Inntektene er like store som kostnadene', 'Bedriften har ingen kostnader', 'Bedriften har null inntekter', 'De variable kostnadene er null'],
    explanation: 'I nullpunktet er I = TK – bedriften verken tjener eller taper penger.',
  },
  {
    question: 'En butikk kjøper inn en jakke for 400 kr og selger den for 600 kr. Hva er avansen?',
    options: ['50 %', '33 %', '200 %', '67 %'],
    explanation: 'Avanse = fortjeneste / innkjøpspris = 200 / 400 = 50 %. 33 % er bruttofortjenesten (fortjeneste i prosent av salgsprisen).',
  },
],

  '2p-1-5': [
  {
    question: 'Hva er forskjellen på en skatt og en avgift?',
    options: ['En avgift er knyttet til en bestemt vare eller tjeneste', 'En skatt er frivillig, en avgift er obligatorisk', 'En avgift betales bare av bedrifter', 'Det er ingen forskjell'],
    explanation: 'Begge er obligatoriske betalinger til det offentlige, men en avgift er knyttet til en bestemt vare eller tjeneste, som mva eller bensinavgift.',
  },
  {
    question: 'Hvor stor er trygdeavgiften av bruttoinntekt?',
    options: ['7,9 %', '22 %', '25 %', '15 %'],
    explanation: 'Trygdeavgiften er 7,9 % av bruttoinntekten. 22 % er skatten på alminnelig inntekt, og 25 % er den generelle mva-satsen.',
  },
  {
    question: 'En TV koster 8 000 kr uten mva. Hva blir prisen med 25 % mva?',
    options: ['10 000 kr', '9 200 kr', '8 250 kr', '10 400 kr'],
    explanation: 'Pris med mva = 8 000 · 1,25 = 10 000 kr.',
  },
  {
    question: 'En mathandel koster 460 kr inkl. 15 % mva. Hva er prisen uten mva?',
    options: ['400 kr', '391 kr', '414 kr', '445 kr'],
    explanation: 'Pris uten mva = 460 / 1,15 = 400 kr. Det er feil å trekke fra 15 % av 460 kr (det gir 391 kr).',
  },
  {
    question: 'Hvilken sats har skatten på alminnelig inntekt?',
    options: ['22 %', '7,9 %', '25 %', '12 %'],
    explanation: 'Skatt på alminnelig inntekt (inntekt minus fradrag) beregnes med en sats på 22 %.',
  },
],

  '2p-2-1': [
  {
    question: 'I den lineære funksjonen $f(x) = ax + b$, hva forteller stigningstallet $a$?',
    options: ['Hvor mye f(x) endres når x øker med 1', 'Verdien av f(x) når x = 0', 'Hvor grafen skjærer x-aksen', 'Det høyeste punktet på grafen'],
    explanation: 'Stigningstallet a forteller hvor mye funksjonsverdien endres for hver enhet x øker. Konstantleddet b er verdien når x = 0.',
  },
  {
    question: 'Et mobilabonnement koster 149 kr i måneden pluss 49 kr per GB data. Hva koster en måned med 5 GB?',
    options: ['394 kr', '245 kr', '990 kr', '344 kr'],
    explanation: 'K(5) = 149 + 49 · 5 = 149 + 245 = 394 kr.',
  },
  {
    question: 'En rett linje går gjennom punktene (1, 5) og (3, 11). Hva er stigningstallet?',
    options: ['3', '6', '2', '1/3'],
    explanation: 'a = (11 − 5) / (3 − 1) = 6/2 = 3.',
  },
  {
    question: 'For hvilken x-verdi skjærer grafene til $f(x) = 2x + 10$ og $g(x) = 4x + 2$ hverandre?',
    options: ['x = 4', 'x = 6', 'x = 3', 'x = 2'],
    explanation: 'Vi setter f(x) = g(x): 2x + 10 = 4x + 2 gir 8 = 2x, altså x = 4.',
  },
  {
    question: 'En svømmehall tar et fast årsgebyr pluss en fast pris per besøk. Hva representerer konstantleddet i den lineære modellen?',
    options: ['Årsgebyret – kostnaden ved null besøk', 'Prisen per besøk', 'Totalkostnaden ved ett besøk', 'Antall besøk i året'],
    explanation: 'Konstantleddet b er verdien når x = 0, altså det du betaler selv uten et eneste besøk. Prisen per besøk er stigningstallet.',
  },
],

  '2p-2-2': [
  {
    question: 'En bil mister 18 % av verdien hvert år. Hva er vekstfaktoren?',
    options: ['0,82', '1,18', '0,18', '−0,18'],
    explanation: 'Ved nedgang på p % er vekstfaktoren 1 − p/100 = 1 − 0,18 = 0,82.',
  },
  {
    question: 'En by har 80 000 innbyggere og vokser med 1,5 % per år. Hvilken modell beskriver folketallet etter x år?',
    options: ['$f(x) = 80\\,000 \\cdot 1{,}015^x$', '$f(x) = 80\\,000 + 1\\,200x$', '$f(x) = 80\\,000 \\cdot 1{,}15^x$', '$f(x) = 1{,}015 \\cdot 80\\,000x$'],
    explanation: 'Fast prosentvis vekst gir en eksponentiell modell med startverdi 80 000 og vekstfaktor 1 + 0,015 = 1,015.',
  },
  {
    question: 'En bil koster 200 000 kr og mister 20 % av verdien hvert år. Hva er den verdt etter 3 år?',
    options: ['102 400 kr', '80 000 kr', '128 000 kr', '120 000 kr'],
    explanation: 'Verdi = 200 000 · 0,8³ = 200 000 · 0,512 = 102 400 kr. 80 000 kr får du hvis du feilaktig trekker fra 40 000 kr hvert år (lineært).',
  },
  {
    question: 'En investering vokser med 7 % per år. Omtrent hvor lang er doblingstiden ifølge 70-regelen?',
    options: ['Ca. 10 år', 'Ca. 14 år', 'Ca. 7 år', 'Ca. 20 år'],
    explanation: '70-regelen: doblingstid ≈ 70 / vekstprosent = 70 / 7 = 10 år.',
  },
  {
    question: 'I den eksponentielle funksjonen $f(x) = a \\cdot b^x$, hva er $a$?',
    options: ['Startverdien – verdien når x = 0', 'Vekstfaktoren per tidsenhet', 'Doblingstiden', 'Veksten i prosent'],
    explanation: 'a er startverdien, fordi f(0) = a · b⁰ = a. b er vekstfaktoren.',
  },
],

  '2p-2-3': [
  {
    question: 'Hva gjør lineær regresjon?',
    options: ['Finner den rette linjen som passer best til datapunktene', 'Finner gjennomsnittet av alle y-verdiene', 'Fjerner alle avvikende datapunkter', 'Beviser at det er en årsakssammenheng'],
    explanation: 'Lineær regresjon finner linjen y = ax + b som minimerer summen av de kvadrerte avvikene (minste kvadraters metode).',
  },
  {
    question: 'Hva betyr en korrelasjonskoeffisient på r = −1?',
    options: ['Perfekt negativ lineær sammenheng', 'Ingen sammenheng', 'Perfekt positiv lineær sammenheng', 'At dataene er feil'],
    explanation: 'r = −1 betyr at alle punktene ligger nøyaktig på en synkende rett linje.',
  },
  {
    question: 'En regresjonsanalyse gir r = 0,95. Hvordan beskriver vi korrelasjonen?',
    options: ['Sterk positiv korrelasjon', 'Svak positiv korrelasjon', 'Middels negativ korrelasjon', 'Ingen korrelasjon'],
    explanation: 'Når |r| > 0,9 regnes korrelasjonen som sterk, og fortegnet er positivt.',
  },
  {
    question: 'En lineær modell for temperaturen er $T(t) = 1{,}6t + 5$, der t er timer etter kl. 08. Hva anslår modellen for temperaturen kl. 13 (t = 5)?',
    options: ['13 °C', '8 °C', '6,6 °C', '16 °C'],
    explanation: 'T(5) = 1,6 · 5 + 5 = 8 + 5 = 13 °C.',
  },
  {
    question: 'Hvorfor er ekstrapolering med en regresjonsmodell risikabelt?',
    options: ['Modellen er bare bekreftet innenfor dataområdet – utenfor kan sammenhengen være helt annerledes', 'Digitale verktøy kan ikke regne utenfor dataområdet', 'Ekstrapolering gir alltid for høye verdier', 'Det er forbudt i statistikk'],
    explanation: 'Ekstrapolering betyr å bruke modellen utenfor området der vi har data. Der vet vi ikke om sammenhengen fortsatt gjelder.',
  },
],

  '2p-2-4': [
  {
    question: 'Hva kjennetegner en stykkevis lineær funksjon?',
    options: ['Den er definert med ulike lineære uttrykk på ulike intervaller', 'Den har samme stigningstall overalt', 'Den er alltid eksponentiell', 'Grafen er en jevn kurve uten knekk'],
    explanation: 'En stykkevis lineær funksjon består av flere rette linjestykker med ulike stigningstall, og grafen «knekker» ved overgangspunktene.',
  },
  {
    question: 'Et treningssenter tar 200 kr per gang for de 8 første treningene og 100 kr per gang deretter. Hva koster 12 treninger til sammen?',
    options: ['2 000 kr', '2 400 kr', '1 200 kr', '1 600 kr'],
    explanation: '8 · 200 + 4 · 100 = 1 600 + 400 = 2 000 kr. 2 400 kr er feil fordi de siste 4 treningene bare koster 100 kr.',
  },
  {
    question: 'Hva er et knekkpunkt på grafen til en stykkevis lineær funksjon?',
    options: ['Punktet der stigningstallet endrer seg', 'Punktet der grafen skjærer y-aksen', 'Det høyeste punktet på grafen', 'Punktet der funksjonen er null'],
    explanation: 'Ved knekkpunktet går funksjonen over fra ett lineært uttrykk til et annet, så stigningstallet endrer seg.',
  },
  {
    question: 'En taxitur koster 50 kr i starttakst pluss 15 kr/km de første 10 km, deretter 10 kr/km. Hva koster en tur på 14 km?',
    options: ['240 kr', '260 kr', '190 kr', '210 kr'],
    explanation: '50 + 15 · 10 + 10 · 4 = 50 + 150 + 40 = 240 kr. 260 kr er feil fordi de siste 4 km bare koster 10 kr/km.',
  },
  {
    question: 'Hvilken situasjon beskrives best med en stykkevis lineær funksjon?',
    options: ['Strømpris med én sats opp til et forbruksnivå og en annen sats over', 'En sparekonto med fast prosentvis rente', 'Befolkningsvekst på 2 % per år', 'Arealet av et kvadrat som funksjon av siden'],
    explanation: 'Priser som endrer sats ved bestemte grenser (strøm, porto, skatt) gir stykkevis lineære funksjoner. Prosentvis vekst gir eksponentielle modeller.',
  },
],

  '2p-2-5': [
  {
    question: 'En regresjonsmodell har $R^2 = 0{,}95$. Hva betyr det?',
    options: ['Modellen forklarer 95 % av variasjonen i dataene – svært god tilpasning', 'Modellen er feil i 95 % av tilfellene', '95 % av datapunktene ligger nøyaktig på linjen', 'Stigningstallet er 0,95'],
    explanation: 'R² (forklaringsgraden) måler hvor godt modellen passer til dataene. R² > 0,9 regnes som svært god tilpasning.',
  },
  {
    question: 'Regresjonslinjen for issalg er $y = 2{,}5x - 18$, der x er temperaturen i °C. Hvor mange is anslår modellen ved 20 °C?',
    options: ['32', '50', '68', '22'],
    explanation: 'y = 2,5 · 20 − 18 = 50 − 18 = 32 is.',
  },
  {
    question: 'Hva er forskjellen på interpolering og ekstrapolering?',
    options: ['Interpolering er prediksjon innenfor dataområdet, ekstrapolering er utenfor', 'Interpolering er alltid mer unøyaktig enn ekstrapolering', 'Ekstrapolering kan bare gjøres med lineære modeller', 'De betyr det samme'],
    explanation: 'Interpolering (innenfor datapunktene) er mest pålitelig. Ekstrapolering (utenfor) er usikkert fordi vi ikke vet om modellen gjelder der.',
  },
  {
    question: 'Hva gjør minste kvadraters metode?',
    options: ['Minimerer summen av de kvadrerte avvikene mellom datapunktene og linjen', 'Velger de to punktene som ligger lengst fra hverandre', 'Kvadrerer alle x-verdiene', 'Fjerner de minste datapunktene'],
    explanation: 'Metoden finner linjen der summen av de kvadrerte vertikale avvikene fra datapunktene er minst mulig.',
  },
  {
    question: 'En regresjonsmodell har $R^2 = 0{,}30$. Hva bør du konkludere?',
    options: ['Modellen passer dårlig – den forklarer bare en liten del av variasjonen', 'Modellen er perfekt', 'Det er en sterk lineær sammenheng', 'Stigningstallet må være negativt'],
    explanation: 'R² < 0,5 regnes som svak tilpasning. Modellen bør brukes med stor forsiktighet, eller en annen modelltype bør vurderes.',
  },
],

  '2p-3-1': [
  {
    question: 'Hva er medianen i datasettet 3, 5, 6, 8, 13?',
    options: ['6', '7', '8', '5'],
    explanation: 'Medianen er den midterste verdien i det sorterte datasettet, altså 6. Gjennomsnittet er 35/5 = 7.',
  },
  {
    question: 'Hva er typetallet (modus) i et datasett?',
    options: ['Verdien som forekommer oftest', 'Den midterste verdien', 'Summen av verdiene delt på antallet', 'Differansen mellom største og minste verdi'],
    explanation: 'Typetallet er den verdien som forekommer flest ganger. Medianen er den midterste, og gjennomsnittet er summen delt på antallet.',
  },
  {
    question: 'Hva er variasjonsbredden i datasettet 3, 5, 7, 8, 10, 12, 14?',
    options: ['11', '14', '8', '7'],
    explanation: 'Variasjonsbredde = største − minste verdi = 14 − 3 = 11.',
  },
  {
    question: 'Når bruker vi histogram i stedet for stolpediagram?',
    options: ['Når dataene er kontinuerlige og gruppert i klasser', 'Når vi har svært få observasjoner', 'Når dataene er kategoriske, som favorittfarger', 'Når vi vil vise andeler av en helhet'],
    explanation: 'Histogram brukes for kontinuerlige data gruppert i intervaller – stolpene står inntil hverandre. Stolpediagram brukes for kategorier.',
  },
  {
    question: 'Hvilke fem nøkkeltall viser et boksplott?',
    options: ['Minimum, nedre kvartil, median, øvre kvartil, maksimum', 'Gjennomsnitt, median, typetall, varians, standardavvik', 'De fem største verdiene', 'Minimum, gjennomsnitt, median, typetall, maksimum'],
    explanation: 'Boksplottet bygger på de fem nøkkeltallene: minimum, Q1, median, Q3 og maksimum.',
  },
],

  '2p-3-2': [
  {
    question: 'Hva kjennetegner en normalfordeling?',
    options: ['Den er symmetrisk rundt gjennomsnittet, og gjennomsnitt, median og typetall er like', 'Den er alltid skjev mot høyre', 'Medianen er alltid større enn gjennomsnittet', 'Den har to topper'],
    explanation: 'Normalfordelingen er en symmetrisk, klokkeformet kurve der gjennomsnitt = median = typetall.',
  },
  {
    question: 'Fødselsvekter er normalfordelt med gjennomsnitt 3,5 kg og standardavvik 0,5 kg. Mellom hvilke verdier ligger ca. 95 % av vektene?',
    options: ['2,5 kg og 4,5 kg', '3,0 kg og 4,0 kg', '2,0 kg og 5,0 kg', '3,25 kg og 3,75 kg'],
    explanation: 'Ca. 95 % ligger innenfor μ ± 2σ = 3,5 ± 1,0, altså mellom 2,5 og 4,5 kg.',
  },
  {
    question: 'Omtrent hvor stor andel av verdiene i en normalfordeling ligger mer enn to standardavvik over gjennomsnittet?',
    options: ['Ca. 2,5 %', 'Ca. 5 %', 'Ca. 16 %', 'Ca. 0,3 %'],
    explanation: '95 % ligger innenfor μ ± 2σ, så 5 % ligger utenfor – halvparten (2,5 %) over og halvparten under.',
  },
  {
    question: 'Høyden er normalfordelt med μ = 180 cm og σ = 5 cm. Hva er z-skåren til en som er 190 cm?',
    options: ['2', '10', '0,5', '−2'],
    explanation: 'z = (x − μ)/σ = (190 − 180)/5 = 2. Personen er to standardavvik over gjennomsnittet.',
  },
  {
    question: 'Kari fikk 78 poeng på en norskprøve (μ = 65, σ = 10) og 82 poeng på en matteprøve (μ = 70, σ = 8). Hvilken prøve gjorde hun det relativt best på?',
    options: ['Matteprøven, fordi z = 1,5 der mot z = 1,3 i norsk', 'Norskprøven, fordi hun lå 13 poeng over snittet', 'Begge like bra, fordi poengsummene er nesten like', 'Det kan ikke avgjøres uten flere opplysninger'],
    explanation: 'Z-skår i norsk: (78−65)/10 = 1,3. I matte: (82−70)/8 = 1,5. Høyest z-skår betyr best resultat sammenlignet med de andre.',
  },
],

  '2p-3-3': [
  {
    question: 'Hva er problemet med et stolpediagram der y-aksen starter på 4,0 % i stedet for 0?',
    options: ['Forskjellene ser mye større ut enn de egentlig er', 'Diagrammet blir for lite', 'Det er umulig å lese av verdiene', 'Fargene blir feil'],
    explanation: 'En avkuttet y-akse forstørrer små forskjeller visuelt. En forskjell på 0,6 prosentpoeng kan se dramatisk stor ut.',
  },
  {
    question: 'Hva er et ledende spørsmål i en spørreundersøkelse?',
    options: ['Et spørsmål formulert slik at det styrer svaret i en bestemt retning', 'Et spørsmål som stilles først i undersøkelsen', 'Et spørsmål med flere svaralternativer', 'Et spørsmål om personlige opplysninger'],
    explanation: 'Et ledende spørsmål, som «Synes du ikke at ...?», påvirker svarene og gjør resultatene upålitelige.',
  },
  {
    question: 'Du vil undersøke nordmenns handlevaner og spør kun folk på et kjøpesenter. Hva kalles denne feilkilden?',
    options: ['Utvalgsskjevhet', 'Tilfeldig feil', 'Avkuttet y-akse', 'Konfundering av aksene'],
    explanation: 'Utvalget er ikke representativt – de som sjelden eller aldri handler på kjøpesenter, er ikke med. Dette er utvalgsskjevhet.',
  },
  {
    question: 'Issalg og drukningsulykker korrelerer positivt. Hva er den beste forklaringen?',
    options: ['En konfunderende variabel – varmt vær – påvirker begge', 'Iskrem fører til drukning', 'Drukningsulykker fører til økt issalg', 'Korrelasjonen må skyldes målefeil'],
    explanation: 'Begge øker om sommeren. Varmt vær er en bakenforliggende (konfunderende) variabel. Korrelasjon betyr ikke kausalitet.',
  },
  {
    question: 'Inntektene i et område er 350, 380, 400, 420, 440, 450, 480, 500, 550 og 2 800 (i 1 000 kr). Hvilket sentralmål gir det mest representative bildet?',
    options: ['Medianen, fordi den ikke påvirkes av den ekstreme verdien', 'Gjennomsnittet, fordi det bruker alle verdiene', 'Typetallet, fordi det alltid er best for inntekter', 'Variasjonsbredden'],
    explanation: 'Den ene ekstreme inntekten (2 800) drar gjennomsnittet kraftig opp. Ved skjeve fordelinger gir medianen et mer representativt bilde.',
  },
],

  '2p-3-4': [
  {
    question: 'Hva måler korrelasjonskoeffisienten r?',
    options: ['Styrken og retningen på den lineære samvariasjonen mellom to variabler', 'Om den ene variabelen forårsaker den andre', 'Gjennomsnittet av de to variablene', 'Antall datapunkter i undersøkelsen'],
    explanation: 'r ligger mellom −1 og 1 og måler hvor sterkt to variabler samvarierer lineært – men sier ingenting om årsak.',
  },
  {
    question: 'Hvordan tolker vi r = 0,85?',
    options: ['Sterk positiv korrelasjon', 'Svak positiv korrelasjon', 'Sterk negativ korrelasjon', 'Ingen korrelasjon'],
    explanation: '|r| > 0,7 regnes som sterk korrelasjon, og positivt fortegn betyr at variablene øker sammen.',
  },
  {
    question: 'Hva kreves for å kunne påstå kausalitet (årsakssammenheng)?',
    options: ['Mer enn korrelasjon – f.eks. kontrollerte eksperimenter og utelukking av bakenforliggende variabler', 'En korrelasjonskoeffisient over 0,9', 'Minst 100 datapunkter', 'At begge variablene er målt i samme enhet'],
    explanation: 'Korrelasjon alene beviser aldri årsakssammenheng. Man trenger kontrollerte forsøk, en logisk mekanisme og utelukking av konfunderende variabler.',
  },
  {
    question: 'Issalg og drukningsulykker korrelerer sterkt. Hva er den konfunderende variabelen?',
    options: ['Varmt sommervær', 'Prisen på iskrem', 'Antall badevakter', 'Vanntemperaturen i bassenget'],
    explanation: 'Varmt vær får både issalget og badingen (og dermed drukningsulykkene) til å øke. Det er ingen direkte årsakssammenheng mellom is og drukning.',
  },
  {
    question: 'Hva er en spuriøs korrelasjon?',
    options: ['En samvariasjon uten reell årsakssammenheng, ofte ren tilfeldighet eller en tredje variabel', 'En korrelasjon som er sterkere enn 0,9', 'En korrelasjon mellom mer enn to variabler', 'En negativ korrelasjon'],
    explanation: 'Spuriøse korrelasjoner er «falske» sammenhenger – variablene følger hverandre uten at den ene påvirker den andre.',
  },
],

  '2p-3-5': [
  {
    question: 'Hva kjennetegner en systematisk feil (bias) i en undersøkelse?',
    options: ['Den trekker resultatene i en bestemt retning, og større utvalg hjelper ikke', 'Den forsvinner alltid hvis utvalget er stort nok', 'Den rammer bare digitale undersøkelser', 'Den gjør resultatene mer presise'],
    explanation: 'Systematiske feil skyver resultatet i én retning, f.eks. ved skjevt utvalg. I motsetning til tilfeldige feil reduseres de ikke av et større utvalg.',
  },
  {
    question: 'Hvordan kan man redusere tilfeldige feil i en undersøkelse?',
    options: ['Bruke et større utvalg', 'Stille mer ledende spørsmål', 'Kutte y-aksen i diagrammet', 'Velge deltakere som er enige med deg'],
    explanation: 'Tilfeldige feil er naturlig variasjon som jevner seg ut når utvalget blir større. Systematiske feil gjør derimot ikke det.',
  },
  {
    question: 'En nettavis lar leserne svare frivillig på en avstemning. Hvilken feilkilde er mest aktuell?',
    options: ['Selvseleksjon – de som velger å svare, skiller seg fra dem som ikke svarer', 'Tilfeldig feil', 'Avrundingsfeil', 'For stort utvalg'],
    explanation: 'Ved frivillig deltakelse er det ofte de mest engasjerte som svarer. Utvalget blir dermed ikke representativt.',
  },
  {
    question: 'Et stolpediagram har en y-akse som starter på 95 %. To skoler har 95,2 % og 96,1 %. Hva er problemet?',
    options: ['Den lille forskjellen ser mye større ut enn den er', 'Diagrammet viser feil tall', 'Det er umulig å sammenligne to skoler', 'Prosent kan ikke vises i stolpediagram'],
    explanation: 'Når aksen er avkuttet, ser stolpen på 96,1 % mange ganger høyere ut enn 95,2 %, selv om forskjellen bare er 0,9 prosentpoeng.',
  },
  {
    question: 'Hvilket spørsmål er ledende?',
    options: ['«Er du ikke enig i at skolematen er for dårlig?»', '«Hva synes du om skolematen?»', '«Hvor ofte spiser du skolemat?»', '«Hvilken skolemat liker du best?»'],
    explanation: 'Formuleringen «Er du ikke enig i at ...» styrer svaret i en bestemt retning og gir upålitelige resultater.',
  },
],

  '2p-4-1': [
  {
    question: 'Du kaster en vanlig terning. Hva er sannsynligheten for å få et partall?',
    options: ['1/2', '1/3', '1/6', '2/3'],
    explanation: 'Gunstige utfall: 2, 4 og 6, altså 3 av 6 mulige. P = 3/6 = 1/2.',
  },
  {
    question: 'Sannsynligheten for regn i morgen er 0,35. Hva er sannsynligheten for at det ikke regner?',
    options: ['0,65', '0,35', '0,5', 'Det kan ikke beregnes'],
    explanation: 'Komplementsetningen: P(ikke regn) = 1 − P(regn) = 1 − 0,35 = 0,65.',
  },
  {
    question: 'Hva betyr det at to hendelser er uforenlige?',
    options: ['De kan ikke skje samtidig', 'De skjer alltid samtidig', 'De har samme sannsynlighet', 'Den ene forårsaker den andre'],
    explanation: 'Uforenlige hendelser har ingen felles utfall. Da gjelder P(A ∪ B) = P(A) + P(B).',
  },
  {
    question: 'Du trekker ett kort fra en kortstokk. Hva er sannsynligheten for å trekke et ess eller et hjertekort?',
    options: ['16/52', '17/52', '13/52', '4/52'],
    explanation: 'P(ess) + P(hjerter) − P(hjerteress) = 4/52 + 13/52 − 1/52 = 16/52. Hjerteresset må ikke telles dobbelt.',
  },
  {
    question: 'En PIN-kode består av 4 siffer (0–9). Hvor mange mulige koder finnes?',
    options: ['10 000', '40', '5 040', '6 561'],
    explanation: 'Hvert siffer har 10 muligheter: 10 · 10 · 10 · 10 = 10⁴ = 10 000 koder.',
  },
],

  '2p-4-2': [
  {
    question: 'Hva er formelen for betinget sannsynlighet $P(B|A)$?',
    options: ['$P(B|A) = \\frac{P(A \\cap B)}{P(A)}$', '$P(B|A) = P(A) \\cdot P(B)$', '$P(B|A) = P(A) + P(B)$', '$P(B|A) = \\frac{P(A)}{P(B)}$'],
    explanation: 'Betinget sannsynlighet: vi innskrenker utfallsrommet til der A har skjedd, og finner andelen der også B skjer.',
  },
  {
    question: 'En pose har 6 røde og 4 blå kuler. Du trekker to uten tilbakelegging. Hva er sannsynligheten for at begge er røde?',
    options: ['1/3', '9/25', '3/5', '1/9'],
    explanation: 'P = 6/10 · 5/9 = 30/90 = 1/3. 9/25 er svaret med tilbakelegging.',
  },
  {
    question: 'To busser er forsinket uavhengig av hverandre, hver med sannsynlighet 0,15. Hva er sannsynligheten for at begge er forsinket?',
    options: ['0,0225', '0,30', '0,15', '0,7225'],
    explanation: 'For uavhengige hendelser: P(A ∩ B) = 0,15 · 0,15 = 0,0225. 0,7225 er sannsynligheten for at ingen er forsinket.',
  },
  {
    question: 'Hva betyr det at to hendelser er uavhengige?',
    options: ['Utfallet av den ene påvirker ikke sannsynligheten for den andre', 'De kan ikke skje samtidig', 'De har alltid samme sannsynlighet', 'Den ene må skje før den andre'],
    explanation: 'Ved uavhengighet er P(B|A) = P(B). To terningkast er uavhengige, mens trekning uten tilbakelegging gir avhengige hendelser.',
  },
  {
    question: 'I en klasse spiller 18 elever fotball, og 4 av dem spiller også håndball. Hva er sannsynligheten for at en elev spiller håndball, gitt at eleven spiller fotball?',
    options: ['4/18', '4/30', '18/30', '4/8'],
    explanation: 'Vi innskrenker til de 18 fotballspillerne: P(håndball | fotball) = 4/18 = 2/9.',
  },
],

  '2p-4-3': [
  {
    question: 'Hvilket av disse forsøkene er IKKE binomisk?',
    options: ['Å trekke 5 kort fra en kortstokk uten tilbakelegging og telle antall ess', 'Å kaste en terning 8 ganger og telle antall seksere', 'Å kaste en mynt 10 ganger og telle antall kron', 'Å gjette på 12 sant/usant-spørsmål og telle antall riktige'],
    explanation: 'Uten tilbakelegging endres sannsynligheten for hvert trekk, så forsøkene er ikke uavhengige med fast p. De andre har fast n, to utfall, fast p og uavhengighet.',
  },
  {
    question: 'Hva er formelen for binomisk sannsynlighet $P(X = k)$?',
    options: ['$\\binom{n}{k} \\cdot p^k \\cdot (1-p)^{n-k}$', '$p^k \\cdot (1-p)^{n-k}$', '$\\binom{n}{k} \\cdot p^n$', '$n \\cdot p \\cdot k$'],
    explanation: 'Binomialkoeffisienten teller antall måter å plassere k suksesser blant n forsøk, og p^k(1−p)^(n−k) er sannsynligheten for hver slik rekkefølge.',
  },
  {
    question: 'En basketballspiller treffer 70 % av straffekastene og tar 20 kast. Hva er forventet antall treff?',
    options: ['14', '7', '10', '4,2'],
    explanation: 'E(X) = n · p = 20 · 0,7 = 14 treff.',
  },
  {
    question: 'Du kaster en terning 3 ganger. Hva er sannsynligheten for å få nøyaktig én sekser?',
    options: ['$\\approx 0{,}347$', '$\\approx 0{,}167$', '$\\approx 0{,}116$', '$0{,}5$'],
    explanation: '$P(X=1) = \\binom{3}{1} \\cdot \\frac{1}{6} \\cdot \\left(\\frac{5}{6}\\right)^2 = 3 \\cdot \\frac{25}{216} = \\frac{75}{216} \\approx 0{,}347$.',
  },
  {
    question: 'For en binomisk fordeling med n = 20 og p = 0,7, hva er standardavviket?',
    options: ['$\\sqrt{4{,}2} \\approx 2{,}05$', '$4{,}2$', '$14$', '$1{,}45$'],
    explanation: '$\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)} = \\sqrt{20 \\cdot 0{,}7 \\cdot 0{,}3} = \\sqrt{4{,}2} \\approx 2{,}05$.',
  },
],

  '2p-4-4': [
  {
    question: 'Hva uttrykker den betingede sannsynligheten $P(B|A)$?',
    options: ['Sannsynligheten for B gitt at A allerede har inntruffet', 'Sannsynligheten for at både A og B skjer', 'Sannsynligheten for B uansett hva som skjer med A', 'Sannsynligheten for at A eller B skjer'],
    explanation: 'P(B|A) leses «sannsynligheten for B gitt A» og beregnes som P(A ∩ B)/P(A).',
  },
  {
    question: 'En pose har 4 røde og 6 blå kuler. Du trekker to uten tilbakelegging. Hva er sannsynligheten for at begge er røde?',
    options: ['2/15', '4/25', '2/5', '1/15'],
    explanation: 'P = 4/10 · 3/9 = 12/90 = 2/15. Etter første trekk er det bare 3 røde igjen blant 9 kuler. 4/25 er svaret med tilbakelegging.',
  },
  {
    question: 'Hva skjer med sannsynlighetene når du trekker MED tilbakelegging?',
    options: ['Trekkene blir uavhengige – sannsynligheten er lik i hvert trekk', 'Sannsynligheten synker for hvert trekk', 'Trekkene blir avhengige', 'Sannsynligheten blir alltid 1/2'],
    explanation: 'Med tilbakelegging er situasjonen identisk før hvert trekk, så hendelsene er uavhengige med samme sannsynlighet.',
  },
  {
    question: 'Hva sier multiplikasjonsprinsippet for sannsynlighet?',
    options: ['$P(A \\cap B) = P(A) \\cdot P(B|A)$', '$P(A \\cap B) = P(A) + P(B)$', '$P(A \\cup B) = P(A) \\cdot P(B)$', '$P(A \\cap B) = P(A) - P(B)$'],
    explanation: 'Sannsynligheten for at både A og B skjer, er P(A) ganget med sannsynligheten for B gitt at A har skjedd.',
  },
  {
    question: 'Gitt P(A) = 0,6 og P(B|A) = 0,5. Hva er P(A ∩ B)?',
    options: ['0,3', '1,1', '0,55', '0,2'],
    explanation: 'P(A ∩ B) = P(A) · P(B|A) = 0,6 · 0,5 = 0,3.',
  },
],

  '2p-5-1': [
  {
    question: 'En vegg er 5,2 m bred og 2,4 m høy, med et vindu på 1,2 m². Hvor stort areal skal males?',
    options: ['11,28 m²', '12,48 m²', '13,68 m²', '10,08 m²'],
    explanation: 'Veggareal: 5,2 · 2,4 = 12,48 m². Trekk fra vinduet: 12,48 − 1,2 = 11,28 m².',
  },
  {
    question: 'Et basseng er 25 m langt, 12,5 m bredt og 1,8 m dypt. Hvor mange liter vann rommer det?',
    options: ['562 500 L', '56 250 L', '5 625 000 L', '562,5 L'],
    explanation: 'Volum = 25 · 12,5 · 1,8 = 562,5 m³. Siden 1 m³ = 1 000 L, blir det 562 500 liter.',
  },
  {
    question: 'En sylinder har radius 0,5 m og høyde 2 m. Hva er volumet?',
    options: ['Ca. 1,57 m³', 'Ca. 3,14 m³', 'Ca. 6,28 m³', 'Ca. 0,79 m³'],
    explanation: 'V = πr²h = π · 0,5² · 2 = π · 0,5 ≈ 1,57 m³.',
  },
  {
    question: 'På et kart med målestokk 1 : 25 000 måler du 8,4 cm mellom to steder. Hva er den virkelige avstanden?',
    options: ['2,1 km', '21 km', '0,21 km', '210 km'],
    explanation: '8,4 cm · 25 000 = 210 000 cm = 2 100 m = 2,1 km.',
  },
  {
    question: 'Hva betyr det at to figurer er formlike?',
    options: ['De har samme form: like vinkler og sider i samme forhold', 'De har nøyaktig samme areal', 'De har samme omkrets', 'De er speilvendte av hverandre'],
    explanation: 'Formlike figurer har parvis like vinkler, og tilsvarende sider har samme forhold – men størrelsen kan være ulik.',
  },
],

  '2p-5-2': [
  {
    question: 'En 5,0 m lang stige lener mot en vegg, med foten 1,5 m fra veggen. Hvor høyt opp rekker stigen?',
    options: ['Ca. 4,8 m', 'Ca. 5,2 m', 'Ca. 3,5 m', 'Ca. 4,3 m'],
    explanation: 'Pytagoras: høyde = √(5,0² − 1,5²) = √(25 − 2,25) = √22,75 ≈ 4,8 m.',
  },
  {
    question: 'Hvor ligger hypotenusen i en rettvinklet trekant?',
    options: ['Overfor den rette vinkelen – det er den lengste siden', 'Ved siden av den rette vinkelen', 'Den korteste siden i trekanten', 'Alltid den vannrette siden'],
    explanation: 'Hypotenusen ligger alltid overfor 90°-vinkelen og er den lengste siden. De to andre sidene kalles kateter.',
  },
  {
    question: 'Et tre kaster en 15 m lang skygge når solen står 38° over horisonten. Hvor høyt er treet?',
    options: ['Ca. 11,7 m', 'Ca. 19,2 m', 'Ca. 9,2 m', 'Ca. 12,5 m'],
    explanation: 'Høyden er motstående katet til vinkelen: h = 15 · tan 38° ≈ 15 · 0,781 ≈ 11,7 m.',
  },
  {
    question: 'Hva er definisjonen av sinus til en spiss vinkel i en rettvinklet trekant?',
    options: ['Motstående katet delt på hypotenusen', 'Hosliggende katet delt på hypotenusen', 'Motstående katet delt på hosliggende katet', 'Hypotenusen delt på motstående katet'],
    explanation: 'SOH-CAH-TOA: sin v = motstående/hypotenus, cos v = hosliggende/hypotenus, tan v = motstående/hosliggende.',
  },
  {
    question: 'Et saltak har halvbredde 5,0 m og høyde 2,5 m fra takfot til møne. Hva er helningsvinkelen?',
    options: ['Ca. 26,6°', 'Ca. 30°', 'Ca. 63,4°', 'Ca. 14°'],
    explanation: 'tan v = 2,5/5,0 = 0,5, som gir v = tan⁻¹(0,5) ≈ 26,6°.',
  },
],

  '2p-5-3': [
  {
    question: 'Du står 12 m fra et tre, og vinkelen opp til toppen er 35°. Hvor høyt er treet?',
    options: ['Ca. 8,4 m', 'Ca. 6,9 m', 'Ca. 17,1 m', 'Ca. 9,8 m'],
    explanation: 'h = 12 · tan 35° ≈ 12 · 0,700 ≈ 8,4 m. 6,9 m får du hvis du feilaktig bruker sinus.',
  },
  {
    question: 'Du kjenner det hosliggende katetet og skal finne det motstående. Hvilket trigonometrisk forhold bruker du?',
    options: ['Tangens', 'Sinus', 'Cosinus', 'Pytagoras\' setning'],
    explanation: 'tan v = motstående/hosliggende knytter sammen de to katetene. Sinus og cosinus involverer hypotenusen.',
  },
  {
    question: 'Hva er definisjonen av cosinus til en spiss vinkel?',
    options: ['Hosliggende katet delt på hypotenusen', 'Motstående katet delt på hypotenusen', 'Hypotenusen delt på hosliggende katet', 'Motstående katet delt på hosliggende katet'],
    explanation: 'cos v = hosliggende katet / hypotenus. Sinus bruker det motstående katetet.',
  },
  {
    question: 'En 4,0 m lang stige danner en vinkel på 60° med bakken. Hvor høyt på veggen når stigen?',
    options: ['Ca. 3,5 m', 'Ca. 2,0 m', 'Ca. 3,0 m', 'Ca. 4,6 m'],
    explanation: 'Høyden er motstående katet: h = 4,0 · sin 60° ≈ 4,0 · 0,866 ≈ 3,5 m. 2,0 m er avstanden langs bakken (cosinus).',
  },
  {
    question: 'En vei stiger 8 m for hver 100 m horisontalt. Hva er helningsvinkelen?',
    options: ['Ca. 4,6°', 'Ca. 8°', 'Ca. 0,08°', 'Ca. 12,5°'],
    explanation: 'tan v = 8/100 = 0,08, som gir v = tan⁻¹(0,08) ≈ 4,6°.',
  },
],

  '2p-5-4': [
  {
    question: 'Hva kjennetegner en vektor?',
    options: ['Den har både retning og lengde', 'Den har bare lengde', 'Den er alltid horisontal', 'Den må starte i origo'],
    explanation: 'En vektor beskriver både hvor langt og i hvilken retning noe beveger seg, i motsetning til en skalar som bare har størrelse.',
  },
  {
    question: 'Hva er lengden av vektoren [3, 4]?',
    options: ['5', '7', '12', '25'],
    explanation: '|v| = √(3² + 4²) = √(9 + 16) = √25 = 5.',
  },
  {
    question: 'Hva er summen av vektorene [3, 4] og [2, −1]?',
    options: ['[5, 3]', '[5, 5]', '[1, 5]', '[6, −4]'],
    explanation: 'Vi adderer komponentvis: [3 + 2, 4 + (−1)] = [5, 3].',
  },
  {
    question: 'En båt seiler 3 km øst og 4 km nord, deretter 2 km øst og 1 km sør. Hvor langt er båten fra startpunktet?',
    options: ['Ca. 5,8 km', '10 km', '8 km', '34 km'],
    explanation: 'Samlet forflytning: [3+2, 4−1] = [5, 3]. Avstand = √(5² + 3²) = √34 ≈ 5,8 km. 10 km er den seilte distansen, ikke avstanden.',
  },
  {
    question: 'Hva er resultantvektoren?',
    options: ['Summen av vektorene – den samlede forflytningen', 'Den lengste av vektorene', 'En vektor med lengde 1', 'Differansen mellom to vektorer'],
    explanation: 'Resultantvektoren er vektorsummen og viser den samlede forflytningen fra start til slutt.',
  },
],

  '2p-6-1': [
  {
    question: 'Hva er det første steget i modelleringsprosessen?',
    options: ['Forstå problemet – hva vil vi finne ut, og hvilke data har vi?', 'Sette opp en likning', 'Gjøre beregninger', 'Tegne grafen'],
    explanation: 'Modelleringsprosessen starter alltid med å forstå problemet, før vi forenkler, modellerer, løser og vurderer.',
  },
  {
    question: 'Når passer en lineær modell best?',
    options: ['Når endringen per tidsenhet er tilnærmet konstant', 'Når endringen er en fast prosent per tidsenhet', 'Når dataene svinger opp og ned', 'Når vi ikke har noen data'],
    explanation: 'Lineære modeller passer ved konstant endring (like mye per periode). Fast prosentvis endring krever en eksponentiell modell.',
  },
  {
    question: 'En bakteriekultur teller 100, 150, 225 og 338 etter 0, 1, 2 og 3 timer. Hvilken modell passer best?',
    options: ['Eksponentiell modell med vekstfaktor 1,5', 'Lineær modell med stigningstall 50', 'Eksponentiell modell med vekstfaktor 0,5', 'Lineær modell med stigningstall 100'],
    explanation: 'Hver time ganges antallet med ca. 1,5 (150/100 = 225/150 = 1,5). Konstant forholdstall betyr eksponentiell vekst.',
  },
  {
    question: 'Vann starter på 20 °C og varmes opp jevnt med 15 °C per minutt. Når når det 100 °C ifølge modellen T(x) = 15x + 20?',
    options: ['Etter ca. 5,3 minutter', 'Etter ca. 6,7 minutter', 'Etter 4 minutter', 'Etter 8 minutter'],
    explanation: '15x + 20 = 100 gir 15x = 80, altså x = 80/15 ≈ 5,3 minutter.',
  },
  {
    question: 'Hvorfor er prediksjoner utenfor dataintervallet (ekstrapolering) usikre?',
    options: ['Modellen er ikke bekreftet der – virkeligheten kan oppføre seg annerledes', 'Datamaskiner kan ikke regne med store tall', 'Modellen blir alltid lineær utenfor intervallet', 'Det er aldri lov å ekstrapolere'],
    explanation: 'En modell er bare testet mot data i et bestemt område. Utenfor dette vet vi ikke om forutsetningene fortsatt holder.',
  },
],

  '2p-6-2': [
  {
    question: 'Hva er forskjellen på relativ og absolutt cellereferanse i et regneark?',
    options: ['Relativ (A1) endres ved kopiering, absolutt ($A$1) forblir fast', 'Absolutt endres ved kopiering, relativ forblir fast', 'Relativ kan bare brukes i kolonne A', 'Det er ingen forskjell'],
    explanation: 'En relativ referanse som A1 justeres når formelen kopieres, mens $A$1 alltid peker på samme celle.',
  },
  {
    question: 'Hva må en formel i et regneark alltid starte med?',
    options: ['Likhetstegn (=)', 'Pluss (+)', 'Anførselstegn (")', 'Bokstaven F'],
    explanation: 'Formler starter med =, for eksempel =A1+B1. Uten likhetstegnet tolkes innholdet som tekst.',
  },
  {
    question: 'Hvilken formel summerer cellene B3 til og med B8?',
    options: ['=SUMMER(B3:B8)', '=B3:B8', 'SUMMER(B3:B8)', '=SUMMER(B3;B8)'],
    explanation: '=SUMMER(B3:B8) legger sammen alle cellene i området. Uten = blir det tekst, og B3;B8 ville bare tatt med de to cellene.',
  },
  {
    question: 'Hvilken GeoGebra-kommando utfører lineær regresjon på en punktliste?',
    options: ['RegLin(liste)', 'Nullpunkt(liste)', 'Skjæring(liste)', 'Linje(liste)'],
    explanation: 'RegLin utfører lineær regresjon. Nullpunkt og Skjæring brukes på funksjoner, ikke til regresjon.',
  },
  {
    question: 'Du vil vise hvordan budsjettet ditt fordeler seg mellom husleie, mat, transport og fritid. Hvilket diagram passer best?',
    options: ['Sektordiagram', 'Linjediagram', 'Punktdiagram', 'Histogram'],
    explanation: 'Sektordiagram (kakediagram) viser andeler av en helhet. Linjediagram viser utvikling over tid, og punktdiagram viser sammenheng mellom to variabler.',
  },
],

  '2p-6-3': [
  {
    question: 'Regresjon gir modellen $y = 7x - 67$ for issalg, der x er temperatur i °C. Hva blir anslått salg ved 22 °C?',
    options: ['87', '154', '67', '91'],
    explanation: 'y = 7 · 22 − 67 = 154 − 67 = 87 is.',
  },
  {
    question: 'En regresjonsmodell har $R^2 = 0{,}99$. Hva betyr det?',
    options: ['Modellen har svært god tilpasning til dataene', 'Modellen er ubrukelig', '99 % av dataene er fjernet', 'Stigningstallet er 0,99'],
    explanation: 'R² nær 1 betyr at modellen forklarer nesten all variasjon i dataene – svært god tilpasning.',
  },
  {
    question: 'Et datasett viser at en verdi øker med en fast prosent per år. Hvilken regresjonstype bør du velge?',
    options: ['Eksponentiell regresjon: $y = a \\cdot b^x$', 'Lineær regresjon: $y = ax + b$', 'Kvadratisk regresjon: $y = ax^2 + bx + c$', 'Det spiller ingen rolle'],
    explanation: 'Fast prosentvis endring gir eksponentiell utvikling. Lineær regresjon passer ved konstant endring i absolutte tall.',
  },
  {
    question: 'Hvilke verdier kan forklaringsgraden $R^2$ ha?',
    options: ['Mellom 0 og 1', 'Mellom −1 og 1', 'Alle positive tall', 'Bare 0 eller 1'],
    explanation: 'R² ligger alltid mellom 0 og 1. (Korrelasjonskoeffisienten r kan derimot være mellom −1 og 1.)',
  },
  {
    question: 'Hva kalles det å bruke en regresjonsmodell til å anslå verdier utenfor dataområdet?',
    options: ['Ekstrapolering', 'Interpolering', 'Korrelasjon', 'Residualanalyse'],
    explanation: 'Ekstrapolering er prediksjon utenfor datapunktene og er mer usikkert enn interpolering (innenfor).',
  },
],

  '2p-6-4': [
  {
    question: 'Hva er gyldighetsområdet til en matematisk modell?',
    options: ['Intervallet der modellen gir fornuftige resultater', 'Alle reelle tall', 'Området der grafen er positiv', 'Tiden det tar å lage modellen'],
    explanation: 'Ingen modell gjelder overalt. Gyldighetsområdet er der modellen er testet og gir rimelige svar.',
  },
  {
    question: 'Hvordan beregnes en residual?',
    options: ['Faktisk verdi minus modellens verdi: $e_i = y_i - \\hat{y}_i$', 'Modellens verdi minus gjennomsnittet', 'Stigningstallet delt på konstantleddet', 'Summen av alle y-verdiene'],
    explanation: 'Residualen er avviket mellom observert verdi og det modellen predikerer for samme x.',
  },
  {
    question: 'Hva betyr det hvis residualene viser et tydelig mønster?',
    options: ['Modelltypen passer dårlig – en annen modell bør vurderes', 'Modellen er perfekt', 'Dataene er normalfordelte', 'R² må være lik 1'],
    explanation: 'Tilfeldig spredte residualer tyder på god modell. Et systematisk mønster betyr at modellen ikke fanger opp strukturen i dataene.',
  },
  {
    question: 'En by hadde 10 000 innbyggere i 2010. Den lineære modellen er $f(x) = 250x + 10\\,000$, der x er år etter 2010. Hva gir modellen for 2030?',
    options: ['15 000', '12 500', '15 600', '20 000'],
    explanation: 'f(20) = 250 · 20 + 10 000 = 15 000. (Den eksponentielle modellen med 2,25 % vekst gir ca. 15 600.)',
  },
  {
    question: 'To størrelser følger hverandre tett over tid. Hva kan vi konkludere?',
    options: ['At de korrelerer – men ikke nødvendigvis at den ene forårsaker den andre', 'At den ene helt sikkert forårsaker den andre', 'At begge skyldes tilfeldigheter', 'At modellen har høy R² og dermed beviser årsak'],
    explanation: 'Korrelasjon er ikke det samme som kausalitet. En bakenforliggende variabel kan påvirke begge.',
  },
],

  '2p-7-1': [
  {
    question: 'Løs likningen $3(x - 4) + 2 = 2x + 5$.',
    options: ['x = 15', 'x = 5', 'x = 7', 'x = −15'],
    explanation: 'Vi ganger ut: 3x − 12 + 2 = 2x + 5, altså 3x − 10 = 2x + 5. Trekker vi 2x fra begge sider og legger til 10, får vi x = 15.',
  },
  {
    question: 'Hva har vi lov til å gjøre når vi løser en likning?',
    options: ['Gjøre den samme operasjonen på begge sider av likhetstegnet', 'Legge til et tall bare på den ene siden', 'Fjerne ledd vi ikke liker', 'Bytte om likhetstegnet med et ulikhetstegn'],
    explanation: 'Likningen forblir gyldig så lenge vi gjør nøyaktig det samme på begge sider, f.eks. legger til, trekker fra, ganger eller deler.',
  },
  {
    question: 'Studio A koster 299 kr/mnd pluss 50 kr per besøk. Studio B koster 799 kr/mnd uansett. Ved hvor mange besøk koster de likt?',
    options: ['10 besøk', '16 besøk', '5 besøk', '12 besøk'],
    explanation: '299 + 50x = 799 gir 50x = 500, altså x = 10 besøk.',
  },
  {
    question: 'Løs likningen $5x - 7 = 18$.',
    options: ['x = 5', 'x = 2,2', 'x = 3,6', 'x = 125'],
    explanation: '5x = 18 + 7 = 25, så x = 25/5 = 5.',
  },
  {
    question: 'Hvordan kontrollerer du at løsningen av en likning er riktig?',
    options: ['Sett løsningen inn i den opprinnelige likningen og sjekk at begge sider blir like', 'Løs likningen en gang til på samme måte', 'Sjekk at svaret er et positivt tall', 'Tegn grafen til venstresiden'],
    explanation: 'Innsetting i den opprinnelige likningen avslører regnefeil: begge sider skal få samme verdi.',
  },
],

  '2p-7-2': [
  {
    question: 'Løs likningssettet $y = 2x + 1$ og $3x + y = 16$.',
    options: ['x = 3, y = 7', 'x = 3, y = 5', 'x = 5, y = 3', 'x = 2, y = 5'],
    explanation: 'Innsetting: 3x + (2x + 1) = 16 gir 5x = 15, altså x = 3 og y = 2 · 3 + 1 = 7.',
  },
  {
    question: 'Hva går innsettingsmetoden ut på?',
    options: ['Løse den ene likningen for en variabel og sette uttrykket inn i den andre', 'Legge de to likningene sammen', 'Gjette på løsninger til begge stemmer', 'Tegne grafene og lese av skjæringspunktet'],
    explanation: 'Vi isolerer f.eks. y i den ene likningen og erstatter y i den andre, slik at vi får én likning med én ukjent.',
  },
  {
    question: 'To kaffe og en bolle koster 95 kr. En kaffe og en bolle koster 60 kr. Hva koster en kaffe?',
    options: ['35 kr', '25 kr', '30 kr', '60 kr'],
    explanation: 'Trekker vi den andre likningen fra den første: (2k + b) − (k + b) = 95 − 60, altså k = 35 kr. Bollen koster da 25 kr.',
  },
  {
    question: 'Hva er løsningen av et likningssett med to ukjente?',
    options: ['Verdiparet (x, y) som tilfredsstiller begge likningene samtidig', 'Alle verdier som passer i minst én av likningene', 'Verdien av x alene', 'Summen av de to likningene'],
    explanation: 'Løsningen må passe i begge likningene – grafisk tilsvarer det skjæringspunktet mellom de to linjene.',
  },
  {
    question: 'Løs likningssettet $x + y = 10$ og $x - y = 4$ med addisjonsmetoden.',
    options: ['x = 7, y = 3', 'x = 3, y = 7', 'x = 6, y = 4', 'x = 5, y = 5'],
    explanation: 'Vi legger likningene sammen: 2x = 14 gir x = 7, og dermed y = 10 − 7 = 3.',
  },
],

  '2p-7-3': [
  {
    question: 'Løs ulikheten $3x + 7 \\leq 22$.',
    options: ['x ≤ 5', 'x ≥ 5', 'x < 5', 'x ≤ 29/3'],
    explanation: '3x ≤ 15 gir x ≤ 5. Likhet er tillatt fordi tegnet er ≤.',
  },
  {
    question: 'Når må du snu ulikhetstegnet?',
    options: ['Når du multipliserer eller dividerer begge sider med et negativt tall', 'Hver gang du flytter et ledd over likhetstegnet', 'Når du legger til et negativt tall', 'Aldri – tegnet står alltid fast'],
    explanation: 'Multiplikasjon eller divisjon med et negativt tall snur størrelsesforholdet, så tegnet må snus. Addisjon og subtraksjon endrer ingenting.',
  },
  {
    question: 'Løs ulikheten $-2x > 8$.',
    options: ['x < −4', 'x > −4', 'x < 4', 'x > 4'],
    explanation: 'Vi deler med −2 og må da snu tegnet: x < −4.',
  },
  {
    question: 'En elev tjener 165 kr per time og vil spare minst 4 000 kr. Hvor mange hele timer må hun minst jobbe?',
    options: ['25 timer', '24 timer', '23 timer', '30 timer'],
    explanation: '165x ≥ 4 000 gir x ≥ 24,24. Siden hun må jobbe hele timer, trengs minst 25 timer (24 timer gir bare 3 960 kr).',
  },
  {
    question: 'Hva er løsningsmengden til en ulikhet?',
    options: ['Alle verdier av den ukjente som gjør ulikheten sann', 'Den ene verdien som passer best', 'Tallet på høyre side', 'Alle hele tall'],
    explanation: 'I motsetning til en likning har en ulikhet vanligvis uendelig mange løsninger – et helt intervall av verdier.',
  },
],

  '2p-8-1': [
  {
    question: 'En hage er 450 m². Hvor mange dekar er det?',
    options: ['0,45 dekar', '4,5 dekar', '45 dekar', '0,045 dekar'],
    explanation: '1 dekar = 1 000 m², så 450 m² = 450/1000 = 0,45 dekar.',
  },
  {
    question: 'En fiskekasse rommer 24 000 cm³. Hvor mange liter er det?',
    options: ['24 L', '2,4 L', '240 L', '24 000 L'],
    explanation: '1 L = 1 000 cm³, så 24 000 cm³ = 24 liter.',
  },
  {
    question: 'Hvor mange cm² er 1 m²?',
    options: ['10 000', '100', '1 000', '100 000'],
    explanation: '1 m = 100 cm, og arealet får faktoren i andre potens: 100² = 10 000 cm².',
  },
  {
    question: 'Hvilket volum tilsvarer 1 liter?',
    options: ['1 dm³', '1 m³', '1 cm³', '10 dm³'],
    explanation: '1 L = 1 dm³ = 1 000 cm³. 1 m³ er 1 000 liter.',
  },
  {
    question: 'Hvor mange meter er 3,2 km?',
    options: ['3 200 m', '320 m', '32 000 m', '0,0032 m'],
    explanation: '1 km = 1 000 m, så 3,2 km = 3 200 m.',
  },
],

  '2p-8-2': [
  {
    question: 'Hvor mange gjeldende siffer har tallet 0,0052?',
    options: ['2', '4', '5', '3'],
    explanation: 'Innledende nuller teller ikke som gjeldende siffer. Bare 5 og 2 er gjeldende, altså 2 siffer.',
  },
  {
    question: 'En planke måles til 2,45 m, men den sanne lengden er 2,48 m. Hva er den absolutte feilen?',
    options: ['0,03 m', '0,3 m', '4,93 m', '0,012 m'],
    explanation: 'Absolutt feil = |målt − sann| = |2,45 − 2,48| = 0,03 m.',
  },
  {
    question: 'Målingen er 2,45 m og den sanne verdien 2,48 m. Hva er den relative feilen?',
    options: ['Ca. 1,2 %', 'Ca. 3 %', 'Ca. 0,03 %', 'Ca. 12 %'],
    explanation: 'Relativ feil = 0,03/2,48 · 100 % ≈ 1,2 %.',
  },
  {
    question: 'En lengde oppgis som 12,4 cm. Hva betyr det for den sanne verdien?',
    options: ['Den ligger mellom 12,35 cm og 12,45 cm', 'Den er nøyaktig 12,4 cm', 'Den ligger mellom 12 cm og 13 cm', 'Den ligger mellom 12,3 cm og 12,5 cm'],
    explanation: 'Målingen er avrundet til nærmeste tidels centimeter, så den sanne verdien ligger innenfor ± 0,05 cm.',
  },
  {
    question: 'Et rektangel måles til 4,2 m × 3,5 m (begge med 2 gjeldende siffer). Hvordan bør arealet oppgis?',
    options: ['15 m²', '14,7 m²', '14,70 m²', '14 m²'],
    explanation: '4,2 · 3,5 = 14,7, men svaret skal ikke ha flere gjeldende siffer enn målingene: 2 gjeldende siffer gir 15 m².',
  },
],

  '2p-9-1': [
  {
    question: 'Promillegrensen 0,2 ‰ skrevet som desimaltall er:',
    options: ['0,0002', '0,002', '0,02', '0,2'],
    explanation: 'Permille betyr per tusen: 0,2 ‰ = 0,2/1000 = 0,0002.',
  },
  {
    question: 'Hva er brøken 3/4 skrevet som prosent?',
    options: ['75 %', '34 %', '43 %', '7,5 %'],
    explanation: '3/4 = 0,75 = 75 %.',
  },
  {
    question: 'Hvilken faktor tilsvarer SI-prefikset mega (M)?',
    options: ['$10^6$', '$10^3$', '$10^9$', '$10^{-6}$'],
    explanation: 'Mega = million = 10⁶. Kilo er 10³, giga er 10⁹ og mikro er 10⁻⁶.',
  },
  {
    question: 'Hva er 5 ‰ skrevet som prosent?',
    options: ['0,5 %', '5 %', '0,05 %', '50 %'],
    explanation: 'Permille er per tusen og prosent per hundre, så 5 ‰ = 5/1000 = 0,5/100 = 0,5 %.',
  },
  {
    question: 'Hvor mange meter er 1 mikrometer (μm)?',
    options: ['$10^{-6}$ m', '$10^{-3}$ m', '$10^{-9}$ m', '$10^6$ m'],
    explanation: 'Mikro betyr 10⁻⁶, altså en milliondels meter. Milli er 10⁻³ og nano er 10⁻⁹.',
  },
],

  '2p-9-2': [
  {
    question: 'Hva er 149 600 000 skrevet på vitenskapelig notasjon?',
    options: ['$1{,}496 \\times 10^8$', '$14{,}96 \\times 10^7$', '$1{,}496 \\times 10^9$', '$1{,}496 \\times 10^6$'],
    explanation: 'Tallet foran skal være mellom 1 og 10. Vi flytter komma 8 plasser: 1,496 × 10⁸. (14,96 × 10⁷ har samme verdi, men er ikke gyldig notasjon.)',
  },
  {
    question: 'Hva er 0,00012 på vitenskapelig notasjon?',
    options: ['$1{,}2 \\times 10^{-4}$', '$1{,}2 \\times 10^{-5}$', '$1{,}2 \\times 10^4$', '$12 \\times 10^{-5}$'],
    explanation: 'Vi flytter komma 4 plasser til høyre, så eksponenten blir −4: 1,2 × 10⁻⁴.',
  },
  {
    question: 'Lyset reiser med $3{,}0 \\times 10^8$ m/s. Hvor langt reiser det på ett minutt?',
    options: ['$1{,}8 \\times 10^{10}$ m', '$1{,}8 \\times 10^9$ m', '$1{,}8 \\times 10^{11}$ m', '$5{,}0 \\times 10^6$ m'],
    explanation: 'Avstand = 3,0 × 10⁸ · 60 = 180 × 10⁸ = 1,8 × 10¹⁰ m.',
  },
  {
    question: 'Hva blir $(2 \\times 10^5) \\cdot (3 \\times 10^{-2})$?',
    options: ['$6 \\times 10^3$', '$6 \\times 10^{-10}$', '$6 \\times 10^7$', '$5 \\times 10^3$'],
    explanation: 'Vi ganger tallene (2 · 3 = 6) og legger sammen eksponentene (5 + (−2) = 3): 6 × 10³.',
  },
  {
    question: 'Hvilket krav stilles til tallet $a$ i vitenskapelig notasjon $a \\times 10^n$?',
    options: ['$1 \\leq a < 10$', '$0 < a < 1$', '$a$ må være et heltall', '$10 \\leq a < 100$'],
    explanation: 'a skal være minst 1 og mindre enn 10, og n skal være et heltall.',
  },
],

  '2p-9-3': [
  {
    question: 'Rund av 3,847 til to desimaler.',
    options: ['3,85', '3,84', '3,8', '3,9'],
    explanation: 'Tredje desimal er 7, som er 5 eller høyere, så vi runder opp: 3,85.',
  },
  {
    question: 'Hvor mange gjeldende siffer har tallet 2,50?',
    options: ['3', '2', '1', '4'],
    explanation: 'Avsluttende nuller etter komma ER gjeldende – de viser nøyaktigheten. 2, 5 og 0 gir 3 gjeldende siffer.',
  },
  {
    question: 'Hvor mange gjeldende siffer har tallet 3 007?',
    options: ['4', '2', '3', '1'],
    explanation: 'Nuller mellom andre siffer er gjeldende, så alle fire sifrene teller.',
  },
  {
    question: 'Et rom måles til 4,3 m × 3,8 m. Hvordan bør arealet oppgis med riktig antall gjeldende siffer?',
    options: ['16 m²', '16,34 m²', '16,3 m²', '20 m²'],
    explanation: '4,3 · 3,8 = 16,34, men målingene har bare 2 gjeldende siffer, så svaret avrundes til 16 m².',
  },
  {
    question: 'Hva er falsk nøyaktighet?',
    options: ['Å oppgi et svar med flere siffer enn målingene gir grunnlag for', 'Å runde av for mye', 'Å bruke feil måleenhet', 'Å glemme å måle to ganger'],
    explanation: 'Hvis målingene bare har 2 gjeldende siffer, gir det falsk nøyaktighet å oppgi svaret med f.eks. 4 desimaler.',
  },
],

};

export default quizData_2p;
