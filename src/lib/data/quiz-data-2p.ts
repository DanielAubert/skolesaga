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


};

export default quizData_2p;
