import type { QuizQuestion } from './quiz-data';

const quizData_2py: Record<string, QuizQuestion[]> = {
  '2py-1-1': [
  {
    question: 'Hva er budsjettbalanse?',
    options: ['Inntekter minus utgifter', 'Utgifter minus inntekter', 'Inntekter pluss utgifter', 'Bare inntekter'],
    explanation: 'Budsjettbalanse = Inntekter - Utgifter. Positivt resultat betyr overskudd.',
  },
  {
    question: 'Ifølge 50/30/20-regelen, hvor mye bør gå til nødvendige utgifter?',
    options: ['$50\\%$', '$30\\%$', '$20\\%$', '$40\\%$'],
    explanation: '50/30/20-regelen sier: 50% til nødvendige utgifter, 30% til ønsker, 20% til sparing.',
  },
  {
    question: 'Bruttolønn er 25 000 kr og trekkprosent er 30%. Hva blir nettolønnen?',
    options: ['17 500 kr', '7 500 kr', '32 500 kr', '22 500 kr'],
    explanation: 'Nettolønn $= 25\\,000 \\cdot (1 - 0{,}30) = 25\\,000 \\cdot 0{,}70 = 17\\,500$ kr.',
  },
  {
    question: 'Hva er forskjellen mellom faste og variable utgifter?',
    options: ['Faste er like hver måned, variable varierer', 'Variable er like hver måned', 'Det er ingen forskjell', 'Faste betales årlig'],
    explanation: 'Faste utgifter (husleie, forsikring) er like hver måned. Variable utgifter (mat, fritid) varierer.',
  },
  {
    question: 'En lærling tjener 185 kr/time og jobber 40 timer. Hva er bruttolønnen?',
    options: ['7 400 kr', '225 kr', '4 625 kr', '7 000 kr'],
    explanation: 'Bruttolønn $= \\text{Timelønn} \\cdot \\text{Antall timer} = 185 \\cdot 40 = 7\\,400$ kr.',
  },
],


  '2py-1-2': [
  {
    question: 'Et lån på 50 000 kr har 6% årlig rente. Hvor mye er renten første år?',
    options: ['3 000 kr', '300 kr', '30 000 kr', '6 000 kr'],
    explanation: 'Rente $= \\text{Kapital} \\cdot \\text{Rentesats} = 50\\,000 \\cdot 0{,}06 = 3\\,000$ kr.',
  },
  {
    question: 'Hva er forskjellen mellom nominell og effektiv rente?',
    options: ['Effektiv inkluderer alle kostnader', 'Nominell inkluderer gebyrer', 'De er alltid like', 'Nominell er alltid høyere'],
    explanation: 'Effektiv rente inkluderer alle kostnader og gir et realistisk bilde av lånekostnaden.',
  },
  {
    question: 'Ved et annuitetslån er terminbeløpet:',
    options: ['Likt hver måned', 'Synkende', 'Stigende', 'Tilfeldig'],
    explanation: 'Ved annuitetslån er terminbeløpet (rente + avdrag) likt gjennom hele låneperioden.',
  },
  {
    question: 'Hva er månedlig rente hvis årsrenten er 12%?',
    options: ['$1\\%$', '$12\\%$', '$0{,}1\\%$', '$6\\%$'],
    explanation: 'Månedlig rente $= \\frac{\\text{Årsrente}}{12} = \\frac{12\\%}{12} = 1\\%$.',
  },
  {
    question: 'Terminbeløpet er 2 500 kr og renten er 800 kr. Hvor mye går til avdrag?',
    options: ['1 700 kr', '3 300 kr', '800 kr', '2 500 kr'],
    explanation: 'Avdrag $= \\text{Terminbeløp} - \\text{Rente} = 2\\,500 - 800 = 1\\,700$ kr.',
  },
],


  '2py-1-3': [
  {
    question: 'Hva er mva-satsen på matvarer i Norge?',
    options: ['$15\\%$', '$25\\%$', '$12\\%$', '$0\\%$'],
    explanation: 'Mat og drikke har 15% mva i Norge. Generell sats er 25%.',
  },
  {
    question: 'En vare koster 1 250 kr inkl. 25% mva. Hva er prisen ekskl. mva?',
    options: ['1 000 kr', '937,50 kr', '1 562,50 kr', '1 250 kr'],
    explanation: 'Pris ekskl. mva $= \\frac{1\\,250}{1{,}25} = 1\\,000$ kr.',
  },
  {
    question: 'Hva går mva-inntektene til?',
    options: ['Finansiere fellesgoder som skoler og helsetjenester', 'Bedriftenes overskudd', 'Kun veier', 'Kun forsvar'],
    explanation: 'Mva (merverdiavgift) er skatt som finansierer offentlige tjenester som skoler, helse, veier osv.',
  },
  {
    question: 'Pris ekskl. mva er 800 kr. Hva blir prisen inkl. 25% mva?',
    options: ['1 000 kr', '1 200 kr', '600 kr', '825 kr'],
    explanation: 'Pris inkl. mva $= 800 \\cdot 1{,}25 = 1\\,000$ kr.',
  },
  {
    question: 'Hvilken mva-sats gjelder for persontransport?',
    options: ['12%', '25%', '15%', '0%'],
    explanation: 'Persontransport, kino og hotell har 12% mva i Norge.',
  },
],


  '2py-2-1': [
  {
    question: 'I funksjonen $f(x) = 3x + 50$, hva representerer 3?',
    options: ['Stigningstallet', 'Konstantleddet', 'Nullpunktet', '$y$-verdien'],
    explanation: 'I $f(x) = ax + b$ er $a$ stigningstallet. Her er 3 stigningstallet som viser økning per enhet.',
  },
  {
    question: 'En elektriker tar 800 kr i utkjøring og 450 kr/time. Hva er funksjonen for totalpris?',
    options: ['$P(t) = 450t + 800$', '$P(t) = 800t + 450$', '$P(t) = 1250t$', '$P(t) = 450t - 800$'],
    explanation: 'Pris $= \\text{Timepris} \\cdot \\text{timer} + \\text{Fast kostnad} = 450t + 800$.',
  },
  {
    question: 'Hva betyr negativt stigningstall?',
    options: ['Linjen synker mot høyre', 'Linjen stiger mot høyre', 'Linjen er vannrett', 'Linjen er loddrett'],
    explanation: 'Negativt stigningstall betyr at $y$-verdien synker når $x$ øker, altså linjen går nedover mot høyre.',
  },
  {
    question: 'En taxitur kostet 330 kr. Startpris er 60 kr og kilometerpris er 18 kr. Hvor lang var turen?',
    options: ['15 km', '18 km', '270 km', '5 km'],
    explanation: '$18x + 60 = 330$ gir $18x = 270$, så $x = 15$ km.',
  },
  {
    question: 'Konstantleddet i en lineær funksjon viser:',
    options: ['Hvor grafen krysser $y$-aksen', 'Stigningen på linjen', 'Nullpunktet', 'Maksimumsverdien'],
    explanation: 'Konstantleddet $b$ i $f(x) = ax + b$ er $y$-verdien når $x = 0$, altså hvor grafen krysser $y$-aksen.',
  },
],


  '2py-2-2': [
  {
    question: 'Hva er vekstfaktoren ved 18% nedgang?',
    options: ['$0{,}82$', '$1{,}18$', '$0{,}18$', '$1{,}82$'],
    explanation: 'Ved nedgang: Vekstfaktor $= 1 - 0{,}18 = 0{,}82$.',
  },
  {
    question: 'En bil kostet 300 000 kr og har falt 25% i verdi. Hva er ny verdi?',
    options: ['225 000 kr', '75 000 kr', '375 000 kr', '200 000 kr'],
    explanation: 'Ny verdi $= 300\\,000 \\cdot 0{,}75 = 225\\,000$ kr.',
  },
  {
    question: 'En vare økte 10% første år og 10% andre år. Total økning er:',
    options: ['$21\\%$', '$20\\%$', '$100\\%$', '$11\\%$'],
    explanation: 'Vekstfaktor $= 1{,}10 \\cdot 1{,}10 = 1{,}21$, altså 21% total økning (rentes rente-effekt).',
  },
  {
    question: 'En maskin koster 200 000 kr og avskrives 15% årlig. Hva er verdien etter 2 år?',
    options: ['144 500 kr', '170 000 kr', '140 000 kr', '150 000 kr'],
    explanation: 'Verdi $= 200\\,000 \\cdot 0{,}85^2 = 200\\,000 \\cdot 0{,}7225 = 144\\,500$ kr.',
  },
  {
    question: 'Prisen sank fra 500 kr til 400 kr. Hva var prosentvis nedgang?',
    options: ['$20\\%$', '$25\\%$', '100 kr', '$80\\%$'],
    explanation: 'Nedgang $= \\frac{500-400}{500} \\cdot 100\\% = \\frac{100}{500} \\cdot 100\\% = 20\\%$.',
  },
],


  '2py-2-3': [
  {
    question: 'Hva er break-even punktet?',
    options: ['Når inntekter = kostnader', 'Når fortjenesten er maksimal', 'Når kostnadene er null', 'Når inntektene er null'],
    explanation: 'Break-even er punktet der inntekter er lik kostnader, altså null i fortjeneste eller tap.',
  },
  {
    question: 'Faste kostnader er 10 000 kr/mnd og fortjeneste per enhet er 50 kr. Hvor mange enheter for break-even?',
    options: ['200 enheter', '500 enheter', '10 000 enheter', '50 enheter'],
    explanation: 'Break-even: $\\frac{10\\,000}{50} = 200$ enheter må selges for å dekke faste kostnader.',
  },
  {
    question: 'I modellering, hva gjør vi etter å ha løst problemet matematisk?',
    options: ['Vurderer om svåret er rimelig', 'Starter på nytt', 'Ignorer svåret', 'Alltid runder opp'],
    explanation: 'Etter beregning må vi alltid vurdere om svåret gir mening i den praktiske situasjonen.',
  },
  {
    question: 'Inntektsfunksjon er $I(x) = 100x$ og kostnadsfunksjon er $K(x) = 60x + 2000$. Hva er fortjeneste ved 80 enheter?',
    options: ['1 200 kr', '8 000 kr', '4 800 kr', '3 200 kr'],
    explanation: 'Fortjeneste $= I(80) - K(80) = 8\\,000 - (4\\,800 + 2\\,000) = 8\\,000 - 6\\,800 = 1\\,200$ kr.',
  },
  {
    question: 'Hvilken type kostnader endres med produksjonsmengden?',
    options: ['Variable kostnader', 'Faste kostnader', 'Begge', 'Ingen'],
    explanation: 'Variable kostnader (materialer, arbeid per enhet) endres med mengden. Faste kostnader er konstante.',
  },
],


  '2py-3-1': [
  {
    question: 'Et rom er 5 m langt og 4 m bredt. Hva er arealet?',
    options: ['$20 \\text{ m}^2$', '18 m', '$9 \\text{ m}^2$', '$40 \\text{ m}^2$'],
    explanation: 'Areal $= \\text{lengde} \\cdot \\text{bredde} = 5 \\cdot 4 = 20 \\text{ m}^2$.',
  },
  {
    question: 'Hva er formelen for arealet av en trekant?',
    options: ['$A = \\frac{g \\cdot h}{2}$', '$A = g \\cdot h$', '$A = 2 \\cdot g \\cdot h$', '$A = g + h$'],
    explanation: 'Arealet av en trekant er grunnlinje ganger høyde delt på 2.',
  },
  {
    question: 'En sirkel har radius 5 m. Hva er arealet?',
    options: ['$25\\pi \\text{ m}^2$ (ca. 78,5 m$^2$)', '$10\\pi \\text{ m}^2$', '$5\\pi \\text{ m}^2$', '$50\\pi \\text{ m}^2$'],
    explanation: 'Areal sirkel $= \\pi \\cdot r^2 = \\pi \\cdot 25 = 25\\pi \\text{ m}^2$.',
  },
  {
    question: 'Malingen dekker 10 m$^2$/liter. Hvor mange liter trengs for 45 m$^2$ med to strøk?',
    options: ['9 liter', '4,5 liter', '90 liter', '18 liter'],
    explanation: 'For to strøk: $45 \\cdot 2 = 90 \\text{ m}^2$. Liter: $\\frac{90}{10} = 9$ liter.',
  },
  {
    question: 'En gang er 8 m lang og 1,5 m bred. Laminat selges i pakker på 2,4 m$^2$. Hvor mange pakker trengs?',
    options: ['5 pakker', '4 pakker', '12 pakker', '3 pakker'],
    explanation: 'Areal $= 8 \\cdot 1{,}5 = 12 \\text{ m}^2$. Pakker $= \\frac{12}{2{,}4} = 5$ pakker.',
  },
],


  '2py-3-2': [
  {
    question: 'Hva er volumet av en boks som er $2 \\text{ m} \\times 3 \\text{ m} \\times 1{,}5 \\text{ m}$?',
    options: ['$9 \\text{ m}^3$', '$6{,}5 \\text{ m}^3$', '$6 \\text{ m}^3$', '$11 \\text{ m}^3$'],
    explanation: 'Volum $= \\text{lengde} \\cdot \\text{bredde} \\cdot \\text{høyde} = 2 \\cdot 3 \\cdot 1{,}5 = 9 \\text{ m}^3$.',
  },
  {
    question: 'Hvor mange liter er 1 m$^3$?',
    options: ['1 000 liter', '100 liter', '10 liter', '10 000 liter'],
    explanation: '$1 \\text{ m}^3 = 1\\,000$ liter. Dette er en viktig omregning å huske.',
  },
  {
    question: 'En sylinder har radius 2 m og høyde 3 m. Hva er volumet?',
    options: ['$12\\pi \\text{ m}^3$ (ca. 37,7 m$^3$)', '$6\\pi \\text{ m}^3$', '$18\\pi \\text{ m}^3$', '$4\\pi \\text{ m}^3$'],
    explanation: 'Volum sylinder $= \\pi \\cdot r^2 \\cdot h = \\pi \\cdot 4 \\cdot 3 = 12\\pi \\text{ m}^3$.',
  },
  {
    question: 'Hva er overflatearealet av en kube med side 3 m?',
    options: ['$54 \\text{ m}^2$', '$27 \\text{ m}^2$', '$9 \\text{ m}^2$', '$81 \\text{ m}^2$'],
    explanation: 'Overflate kube $= 6 \\cdot s^2 = 6 \\cdot 9 = 54 \\text{ m}^2$.',
  },
  {
    question: 'Betong koster 1 800 kr/m$^3$. Hva koster 2,5 m$^3$ betong?',
    options: ['4 500 kr', '720 kr', '7 200 kr', '4 050 kr'],
    explanation: 'Kostnad $= 2{,}5 \\cdot 1\\,800 = 4\\,500$ kr.',
  },
],


  '2py-3-3': [
  {
    question: 'En rettvinklet trekant har kateter 3 m og 4 m. Hvor lang er hypotenusen?',
    options: ['5 m', '7 m', '12 m', '25 m'],
    explanation: 'Pytagoras: $c^2 = 3^2 + 4^2 = 9 + 16 = 25$, så $c = 5$ m.',
  },
  {
    question: 'Hva er formelen for sinus i en rettvinklet trekant?',
    options: ['$\\sin(v) = \\frac{\\text{motstående}}{\\text{hypotenus}}$', '$\\sin(v) = \\frac{\\text{hosliggende}}{\\text{hypotenus}}$', '$\\sin(v) = \\frac{\\text{motstående}}{\\text{hosliggende}}$', '$\\sin(v) = \\frac{\\text{hypotenus}}{\\text{motstående}}$'],
    explanation: 'Sinus = motstående katet delt på hypotenusen. Huskeregel: SOH-CAH-TOA.',
  },
  {
    question: 'En stige på 5 m står 3 m fra veggen. Hvor høyt rekker stigen?',
    options: ['4 m', '8 m', '2 m', '16 m'],
    explanation: 'Pytagoras: $h^2 = 5^2 - 3^2 = 25 - 9 = 16$, så $h = 4$ m.',
  },
  {
    question: 'En rampe har 8% stigning. Hva er vinkelen (ca.)?',
    options: ['$4{,}6°$', '$8°$', '$45°$', '$80°$'],
    explanation: '$\\tan(v) = 0{,}08$ gir $v = \\arctan(0{,}08) \\approx 4{,}6°$.',
  },
  {
    question: 'Takvinkel er 30° og halv spennvidde er 4 m. Hvor høy er mønen?',
    options: ['Ca. 2,3 m', 'Ca. 4 m', 'Ca. 8 m', 'Ca. 1 m'],
    explanation: '$\\tan(30°) = \\frac{h}{4}$ gir $h = 4 \\cdot \\tan(30°) = 4 \\cdot 0{,}577 \\approx 2{,}3$ m.',
  },
],


  '2py-4-1': [
  {
    question: 'Hva er en frekvenstabell?',
    options: ['Tabell som viser hvor ofte hver verdi førekommer', 'Tabell med alle målæresultater', 'Tabell med kun gjennomsnittet', 'Tabell med standardavvik'],
    explanation: 'En frekvenstabell organiserer data og viser frekvensen (antall ganger) hver verdi eller klasse førekommer.',
  },
  {
    question: 'Hva er populasjon i statistikk?',
    options: ['Hele gruppen vi ønsker å si noe om', 'En del av gruppen', 'En enkelt måling', 'Gjennomsnittet'],
    explanation: 'Populasjon er hele gruppen vi ønsker å undersøke. Utvalg er en del av populasjonen.',
  },
  {
    question: 'Hvilken diagramtype viser utvikling over tid best?',
    options: ['Linjediagram', 'Kakediagram', 'Histogram', 'Punktdiagram'],
    explanation: 'Linjediagram er best for å vise hvordan noe utvikler seg over tid.',
  },
  {
    question: 'I en undersøkelse var 12 av 60 svar negative. Hva er prosentandelen negative?',
    options: ['$20\\%$', '$12\\%$', '$48\\%$', '$5\\%$'],
    explanation: 'Prosent $= \\frac{12}{60} \\cdot 100\\% = 20\\%$.',
  },
  {
    question: 'Hva er forskjellen mellom søyle- og stolpediagram?',
    options: ['Søylediagram har horisontale søyler, stolpediagram har vertikale', 'De er like', 'Søylediagram brukes kun for prosent', 'Stolpediagram viser bare to verdier'],
    explanation: 'I praksis brukes begrepene ofte om hverandre, men søylediagram har ofte horisontale søyler.',
  },
],


  '2py-4-2': [
  {
    question: 'Hva er medianen i datasettet: 3, 5, 7, 9, 11?',
    options: ['7', '5', '35', '9'],
    explanation: 'Med 5 verdier er medianen den midterste (3. verdien) = 7.',
  },
  {
    question: 'Hva er typetallet i: 4, 5, 5, 6, 7, 5, 8?',
    options: ['5', '6', '7', '4'],
    explanation: 'Typetallet er verdien som førekommer oftest. 5 førekommer 3 ganger.',
  },
  {
    question: 'Hva måler variasjonsbredden?',
    options: ['Største verdi minus minste verdi', 'Gjennomsnittet', 'Medianen', 'Standardavviket'],
    explanation: 'Variasjonsbredde $= \\max - \\min$. Det er et enkelt spredningsmål.',
  },
  {
    question: 'Hvilket sentralmål påvirkes mest av ekstremverdier?',
    options: ['Gjennomsnitt', 'Median', 'Typetall', 'Alle påvirkes likt'],
    explanation: 'Gjennomsnittet påvirkes mest av ekstremverdier. Median er mer robust.',
  },
  {
    question: 'Datasettet har verdier fra 10 til 45. Hva er variasjonsbredden?',
    options: ['$35$', '$55$', '$27{,}5$', '$10$'],
    explanation: 'Variasjonsbredde $= 45 - 10 = 35$.',
  },
],


  '2py-5-1': [
  {
    question: 'Hva er sannsynligheten for en hendelse som er umulig?',
    options: ['0', '1', '0,5', '-1'],
    explanation: 'Sannsynlighet 0 betyr at hendelsen er umulig. 1 betyr at den er sikker.',
  },
  {
    question: '3 av 100 produkter har feil. Hva er sannsynligheten for feil?',
    options: ['$0{,}03$ (3%)', '$0{,}30$ (30%)', '$0{,}003$', '$3$'],
    explanation: '$P(\\text{feil}) = \\frac{3}{100} = 0{,}03 = 3\\%$.',
  },
  {
    question: '$P(A) = 0{,}25$. Hva er $P(\\text{ikke } A)$?',
    options: ['$0{,}75$', '$0{,}25$', '$1{,}25$', '$0$'],
    explanation: '$P(\\text{ikke } A) = 1 - P(A) = 1 - 0{,}25 = 0{,}75$.',
  },
  {
    question: 'Sannsynligheten for regn er 40%. Hvor mange dager med regn kan forventes i en 30-dagersperiode?',
    options: ['12 dager', '40 dager', '4 dager', '18 dager'],
    explanation: 'Forventet antall $= 30 \\cdot 0{,}40 = 12$ dager.',
  },
  {
    question: 'Hva betyr relativ frekvens?',
    options: ['Antall ganger delt på totalt antall forsøk', 'Antall gunstige utfall', 'Sannsynlighet ganger 100', 'Medianen av utfallene'],
    explanation: 'Relativ frekvens $= \\frac{\\text{Antall ganger hendelsen skjer}}{\\text{Totalt antall forsøk}}$.',
  },
],


  '2py-5-2': [
  {
    question: 'Hvordan beregnes risikotall?',
    options: ['$\\text{Sannsynlighet} \\cdot \\text{Konsekvens}$', '$\\text{Sannsynlighet} + \\text{Konsekvens}$', '$\\text{Sannsynlighet} / \\text{Konsekvens}$', '$\\text{Konsekvens} - \\text{Sannsynlighet}$'],
    explanation: 'Risikotall $= \\text{Sannsynlighet} \\cdot \\text{Konsekvens}$. Brukes i risikovurderinger.',
  },
  {
    question: 'En hendelse har sannsynlighet 3 og konsekvens 4. Hva er risikotallet?',
    options: ['$12$', '$7$', '$1$', '$34$'],
    explanation: 'Risikotall $= 3 \\cdot 4 = 12$.',
  },
  {
    question: 'I en risikomatrise, hva prioriteres først?',
    options: ['Høyest risikotall', 'Lavest risikotall', 'Høyest sannsynlighet alene', 'Tilfeldig'],
    explanation: 'Hendelser med høyest risikotall bør prioriteres for tiltak først.',
  },
  {
    question: 'Sannsynlighet for ulykke er 2% og gjennomsnittlig kostnad er 50 000 kr. Hva er forventet årlig kostnad?',
    options: ['1 000 kr', '2 500 kr', '50 000 kr', '100 000 kr'],
    explanation: 'Forventet kostnad $= 0{,}02 \\cdot 50\\,000 = 1\\,000$ kr per år.',
  },
  {
    question: 'Hvorfor brukes risikovurdering i HMS-arbeid?',
    options: ['For å identifisere og prioritere farer', 'For å øke produksjonen', 'For å spare penger', 'Det er ikke nødvendig'],
    explanation: 'Risikovurdering hjelper med å identifisere farer og prioritere tiltak for å førebygge ulykker.',
  },
],


  '2py-6-1': [
  {
    question: 'Hva er typisk svinnprosent for trevirke?',
    options: ['10-15%', '1-2%', '50%', '0%'],
    explanation: 'Trevirke har typisk 10-15% svinn pga. kapping, feil og spill.',
  },
  {
    question: 'Gulv er 20 m$^2$. Med 10% svinn, hvor mye materiale trengs?',
    options: ['$22 \\text{ m}^2$', '$20 \\text{ m}^2$', '$18 \\text{ m}^2$', '$30 \\text{ m}^2$'],
    explanation: 'Med 10% svinn: $20 \\cdot 1{,}10 = 22 \\text{ m}^2$.',
  },
  {
    question: 'Fliser er $30 \\text{ cm} \\times 30 \\text{ cm}$. Hvor mange trengs for 5,4 m$^2$?',
    options: ['60 fliser', '18 fliser', '5,4 fliser', '180 fliser'],
    explanation: 'Areal per flis $= 0{,}3 \\cdot 0{,}3 = 0{,}09 \\text{ m}^2$. Antall $= \\frac{5{,}4}{0{,}09} = 60$ fliser.',
  },
  {
    question: 'Kabel koster 85 kr/m. Hvor mye koster 38 m med 8% svinn?',
    options: ['3 488,40 kr', '3 230 kr', '3 808 kr', '85 kr'],
    explanation: 'Med svinn: $38 \\cdot 1{,}08 = 41{,}04$ m. Kostnad: $41{,}04 \\cdot 85 = 3\\,488{,}40$ kr.',
  },
  {
    question: 'Hvorfor legger vi til svinn i materialberegninger?',
    options: ['For å dekke kapp, feil og spill', 'For å få rabatt', 'For å redusere kostnadene', 'Det er ikke nødvendig'],
    explanation: 'Svinn dekker materiale som går tapt ved kapping, målefeil og spill under arbeidet.',
  },
],



  '2py-1-4': [
  {
    question: 'Hva kjennetegner faste kostnader i en bedrift?',
    options: ['De er like store uansett hvor mye bedriften produserer eller selger', 'De øker når produksjonen øker', 'De betales bare én gang', 'De gjelder bare råvarer'],
    explanation: 'Faste kostnader som husleie og forsikring er de samme uavhengig av aktiviteten.',
  },
  {
    question: 'Hvilken av disse er en variabel kostnad for et bilverksted?',
    options: ['Reservedeler til reparasjonene', 'Husleie for verkstedlokalet', 'Forsikring av bygget', 'Fast månedlig leasing av løftebukk'],
    explanation: 'Kostnaden til reservedeler øker med antall reparasjoner — den er variabel. De andre er faste.',
  },
  {
    question: 'En kafé har inntekter på $85\\,000$ kr og kostnader på $70\\,000$ kr i en måned. Hva er resultatet?',
    options: ['Overskudd på $15\\,000$ kr', 'Underskudd på $15\\,000$ kr', 'Overskudd på $155\\,000$ kr', 'Resultatet er null'],
    explanation: 'Resultat = inntekter − kostnader = $85\\,000 - 70\\,000 = 15\\,000$ kr i overskudd.',
  },
  {
    question: 'Hva betyr det at resultatregnskapet viser et negativt resultat?',
    options: ['Bedriften går med underskudd — kostnadene er større enn inntektene', 'Bedriften har ingen kostnader', 'Bedriften går med overskudd', 'Bedriften har betalt for mye skatt'],
    explanation: 'Negativt resultat betyr underskudd: det går mer penger ut enn det kommer inn.',
  },
  {
    question: 'Et verksted har faste kostnader på $40\\,000$ kr per måned og variable kostnader på $300$ kr per oppdrag. Hva er de totale kostnadene ved $100$ oppdrag?',
    options: ['$70\\,000$ kr', '$40\\,300$ kr', '$30\\,000$ kr', '$43\\,000$ kr'],
    explanation: 'Totale kostnader $= 40\\,000 + 300 \\cdot 100 = 40\\,000 + 30\\,000 = 70\\,000$ kr.',
  },
],


  '2py-2-4': [
  {
    question: 'Hva er vekstfaktoren ved en økning på $8\\,\\%$?',
    options: ['$1{,}08$', '$0{,}92$', '$1{,}8$', '$0{,}08$'],
    explanation: 'Økning på $p\\,\\%$ gir vekstfaktor $1 + \\frac{p}{100} = 1 + 0{,}08 = 1{,}08$.',
  },
  {
    question: 'Hva er vekstfaktoren ved en nedgang på $15\\,\\%$?',
    options: ['$0{,}85$', '$1{,}15$', '$0{,}15$', '$-0{,}85$'],
    explanation: 'Nedgang på $15\\,\\%$ gir vekstfaktor $1 - 0{,}15 = 0{,}85$.',
  },
  {
    question: 'En varebil kjøpes for $300\\,000$ kr og taper $12\\,\\%$ av verdien hvert år. Hva er verdien etter $2$ år?',
    options: ['$232\\,320$ kr', '$264\\,000$ kr', '$228\\,000$ kr', '$237\\,600$ kr'],
    explanation: 'Verdi $= 300\\,000 \\cdot 0{,}88^2 = 300\\,000 \\cdot 0{,}7744 = 232\\,320$ kr.',
  },
  {
    question: 'Hva menes med halveringstid?',
    options: ['Tiden det tar før en mengde er redusert til halvparten', 'Tiden det tar før en mengde er borte', 'Halvparten av fordoblingstiden', 'Tiden det tar å telle halve mengden'],
    explanation: 'Halveringstiden er tiden en eksponentielt avtagende mengde bruker på å bli halvert.',
  },
  {
    question: 'Bakteriene i en matvare dobles hver time. Det er $100$ bakterier ved start. Hvor mange er det etter $3$ timer?',
    options: ['$800$', '$300$', '$600$', '$1\\,000$'],
    explanation: '$100 \\cdot 2^3 = 100 \\cdot 8 = 800$ bakterier.',
  },
],


  '2py-3-4': [
  {
    question: 'Hva betyr målestokken $1 : 100$ på en byggetegning?',
    options: ['$1$ cm på tegningen tilsvarer $100$ cm ($1$ m) i virkeligheten', '$1$ m på tegningen tilsvarer $100$ m i virkeligheten — alltid', 'Tegningen er $100$ ganger større enn virkeligheten', 'Tegningen viser $100$ rom'],
    explanation: 'Ved forminskning $1 : n$ er virkeligheten $n$ ganger større enn tegningen.',
  },
  {
    question: 'På en tegning i målestokk $1 : 50$ er en vegg $8$ cm lang. Hvor lang er veggen i virkeligheten?',
    options: ['$4$ m', '$40$ m', '$0{,}4$ m', '$8$ m'],
    explanation: '$8 \\text{ cm} \\cdot 50 = 400$ cm $= 4$ m.',
  },
  {
    question: 'En bjelke er $12$ m lang. Hvor lang blir den på en tegning i målestokk $1 : 200$?',
    options: ['$6$ cm', '$12$ cm', '$60$ cm', '$2{,}4$ cm'],
    explanation: '$12$ m $= 1\\,200$ cm. På tegningen: $1\\,200 : 200 = 6$ cm.',
  },
  {
    question: 'Hva betyr målestokken $2 : 1$?',
    options: ['Tegningen er en forstørring — dobbelt så stor som virkeligheten', 'Tegningen er halvparten av virkeligheten', 'Tegningen er $21$ ganger mindre', 'Tegningen er i naturlig størrelse'],
    explanation: 'Når det første tallet er størst ($n : 1$), er tegningen en forstørring. $2:1$ betyr dobbel størrelse.',
  },
  {
    question: 'På et kart i målestokk $1 : 25\\,000$ måler du $4$ cm mellom to punkter. Hva er avstanden i virkeligheten?',
    options: ['$1$ km', '$10$ km', '$250$ m', '$4$ km'],
    explanation: '$4 \\cdot 25\\,000 = 100\\,000$ cm $= 1\\,000$ m $= 1$ km.',
  },
],


  '2py-4-3': [
  {
    question: 'Hva er klassebredden til klassen $[10, 20\\rangle$?',
    options: ['$10$', '$20$', '$15$', '$30$'],
    explanation: 'Klassebredden er øvre grense minus nedre grense: $20 - 10 = 10$.',
  },
  {
    question: 'Hva er kumulativ frekvens?',
    options: ['Summen av frekvensene til og med den aktuelle klassen', 'Frekvensen i den største klassen', 'Antall klasser i tabellen', 'Gjennomsnittet av frekvensene'],
    explanation: 'Kumulativ frekvens forteller hvor mange observasjoner som ligger i klassen og alle klassene under.',
  },
  {
    question: 'Ventetider på et verksted grupperes i klassene $[10, 20\\rangle$ og $[20, 30\\rangle$. I hvilken klasse havner en ventetid på nøyaktig $20$ minutter?',
    options: ['$[20, 30\\rangle$, fordi nedre grense er inkludert i klassen', '$[10, 20\\rangle$, fordi øvre grense er inkludert', 'Begge klassene', 'Ingen av klassene'],
    explanation: 'Notasjonen $[20, 30\\rangle$ betyr at $20$ er med, men ikke $30$. Verdien $20$ hører derfor til $[20, 30\\rangle$.',
  },
  {
    question: 'Hva er frekvensen til en klasse?',
    options: ['Antall observasjoner som havner i klassen', 'Klassens bredde', 'Den største verdien i klassen', 'Hvor ofte tabellen oppdateres'],
    explanation: 'Frekvensen teller hvor mange av dataverdiene som ligger i klassen.',
  },
  {
    question: 'Tre klasser har frekvensene $4$, $7$ og $9$. Hva er den kumulative frekvensen etter den andre klassen?',
    options: ['$11$', '$7$', '$20$', '$16$'],
    explanation: 'Kumulativ frekvens etter klasse to: $4 + 7 = 11$.',
  },
],


  '2py-5-3': [
  {
    question: 'Hva sier multiplikasjonsprinsippet?',
    options: ['Totalt antall muligheter er produktet av antall muligheter i hvert trinn', 'Totalt antall muligheter er summen av mulighetene', 'Vi må alltid telle opp alle muligheter én for én', 'Antall muligheter dobles for hvert trinn'],
    explanation: 'Med $n_1$ valg i trinn 1 og $n_2$ valg i trinn 2 er det $n_1 \\cdot n_2$ kombinasjoner totalt.',
  },
  {
    question: 'En arbeidsuniform kan settes sammen av $3$ jakker og $4$ bukser. Hvor mange kombinasjoner finnes?',
    options: ['$12$', '$7$', '$24$', '$34$'],
    explanation: 'Multiplikasjonsprinsippet: $3 \\cdot 4 = 12$ kombinasjoner.',
  },
  {
    question: 'En kodelås har $4$ sifre, der hvert siffer kan være $0$–$9$. Hvor mange koder er mulige?',
    options: ['$10\\,000$', '$40$', '$1\\,000$', '$5\\,040$'],
    explanation: '$10 \\cdot 10 \\cdot 10 \\cdot 10 = 10^4 = 10\\,000$ mulige koder.',
  },
  {
    question: 'En kafémeny har $3$ forretter, $5$ hovedretter og $2$ desserter. Hvor mange treretters kombinasjoner finnes?',
    options: ['$30$', '$10$', '$15$', '$25$'],
    explanation: '$3 \\cdot 5 \\cdot 2 = 30$ ulike menyer.',
  },
  {
    question: 'Hva brukes et valgtre til?',
    options: ['Å vise alle mulige kombinasjoner systematisk, trinn for trinn', 'Å finne gjennomsnittet av flere tall', 'Å sortere data i klasser', 'Å regne ut prosent'],
    explanation: 'Valgtreet visualiserer alle valgmulighetene i hvert trinn og hjelper oss å telle systematisk.',
  },
],


  '2py-6-2': [
  {
    question: 'Hvordan beregner vi produktivitet?',
    options: ['Antall enheter delt på tiden', 'Tiden delt på antall enheter', 'Antall enheter ganger tiden', 'Lønnen delt på tiden'],
    explanation: 'Produktivitet = produksjon per tidsenhet, f.eks. fliser lagt per time.',
  },
  {
    question: 'En flislegger legger $18$ m² fliser på $6$ timer. Hva er produktiviteten?',
    options: ['$3$ m² per time', '$2$ m² per time', '$0{,}33$ m² per time', '$108$ m² per time'],
    explanation: '$18 : 6 = 3$ m² per time.',
  },
  {
    question: 'En elektriker trekker kabel med en fart på $30$ m per time. Hvor lang tid tar det å trekke $240$ m?',
    options: ['$8$ timer', '$7\\,200$ timer', '$6$ timer', '$10$ timer'],
    explanation: 'Tid = mengde : produktivitet $= 240 : 30 = 8$ timer.',
  },
  {
    question: 'Hva menes med akkordarbeid?',
    options: ['Betaling per utført enhet i stedet for per time', 'Arbeid med fast månedslønn', 'Arbeid uten betaling', 'Overtidsarbeid om natten'],
    explanation: 'Ved akkord får arbeideren betalt for det som produseres, f.eks. per m² lagt flis.',
  },
  {
    question: 'En jobb tar $12$ timer for én person. Hvor lang tid tar den med to personer som jobber i samme tempo?',
    options: ['$6$ timer', '$24$ timer', '$12$ timer', '$4$ timer'],
    explanation: 'To personer gjør dobbelt så mye per time, så tiden halveres: $12 : 2 = 6$ timer.',
  },
],


  '2py-6-3': [
  {
    question: 'Hvordan beregnes dekningsbidraget?',
    options: ['Salgspris minus variable kostnader', 'Salgspris minus faste kostnader', 'Salgspris pluss variable kostnader', 'Inntekter minus alle kostnader'],
    explanation: 'Dekningsbidraget skal dekke de faste kostnadene og gi fortjeneste: DB = salgspris − variable kostnader.',
  },
  {
    question: 'En frisørbehandling selges for $600$ kr, og de variable kostnadene er $150$ kr. Hva er dekningsbidraget?',
    options: ['$450$ kr', '$750$ kr', '$150$ kr', '$600$ kr'],
    explanation: 'DB $= 600 - 150 = 450$ kr.',
  },
  {
    question: 'Hva er et påslag?',
    options: ['Beløpet som legges på innkjøpsprisen for å dekke faste kostnader og gi fortjeneste', 'Rabatten kunden får', 'De variable kostnadene', 'Merverdiavgiften alene'],
    explanation: 'Påslaget legges på innkjøpspris/selvkost slik at salgsprisen dekker øvrige kostnader og fortjeneste.',
  },
  {
    question: 'En rørlegger kjøper inn en del for $400$ kr og bruker $50\\,\\%$ påslag. Hva blir salgsprisen?',
    options: ['$600$ kr', '$450$ kr', '$800$ kr', '$200$ kr'],
    explanation: 'Salgspris $= 400 \\cdot 1{,}5 = 600$ kr.',
  },
  {
    question: 'Hvilken kostnad er fast for en snekkerbedrift?',
    options: ['Forsikring av verkstedet', 'Trelast til hvert oppdrag', 'Skruer og spiker som forbrukes', 'Drivstoff til kjøring per oppdrag'],
    explanation: 'Forsikringen er lik uansett hvor mange oppdrag bedriften tar. De andre øker med aktiviteten.',
  },
],


  '2py-7-1': [
  {
    question: 'Hvor mange centimeter er $2{,}5$ m?',
    options: ['$250$ cm', '$25$ cm', '$2\\,500$ cm', '$0{,}25$ cm'],
    explanation: '$1$ m $= 100$ cm, så $2{,}5$ m $= 2{,}5 \\cdot 100 = 250$ cm.',
  },
  {
    question: 'Hvor mange kilogram er $3\\,500$ g?',
    options: ['$3{,}5$ kg', '$35$ kg', '$0{,}35$ kg', '$350$ kg'],
    explanation: '$1$ kg $= 1\\,000$ g, så $3\\,500$ g $= 3{,}5$ kg.',
  },
  {
    question: 'En betongblander rommer $0{,}4$ m³. Hvor mange liter er det?',
    options: ['$400$ liter', '$40$ liter', '$4\\,000$ liter', '$4$ liter'],
    explanation: '$1$ m³ $= 1\\,000$ liter, så $0{,}4$ m³ $= 400$ liter.',
  },
  {
    question: 'Hvor mange cm² er $1$ m²?',
    options: ['$10\\,000$ cm²', '$100$ cm²', '$1\\,000$ cm²', '$100\\,000$ cm²'],
    explanation: 'Areal regnes i to retninger: $1$ m² $= 100 \\text{ cm} \\cdot 100 \\text{ cm} = 10\\,000$ cm².',
  },
  {
    question: 'En rørlegger trenger $6$ rørlengder på $80$ cm hver. Hvor mange meter rør er det totalt?',
    options: ['$4{,}8$ m', '$48$ m', '$0{,}48$ m', '$8{,}6$ m'],
    explanation: '$6 \\cdot 80 = 480$ cm $= 4{,}8$ m.',
  },
],


  '2py-7-2': [
  {
    question: 'Hva angir toleransen til et mål?',
    options: ['Hvor mye målet kan avvike fra spesifikasjonen', 'Hvor nøyaktig måleverktøyet er produsert', 'Den største verdien verktøyet kan måle', 'Hvor mange ganger målet skal kontrolleres'],
    explanation: 'Toleransen er det tillatte avviket, f.eks. $12$ mm $\\pm 0{,}1$ mm.',
  },
  {
    question: 'En bolt skal være $12$ mm $\\pm 0{,}1$ mm i diameter. Er en bolt på $12{,}08$ mm godkjent?',
    options: ['Ja, den ligger innenfor grensene $11{,}9$–$12{,}1$ mm', 'Nei, den er for stor', 'Nei, bare nøyaktig $12{,}00$ mm godkjennes', 'Det kan ikke avgjøres'],
    explanation: 'Grensene er $12 - 0{,}1 = 11{,}9$ mm og $12 + 0{,}1 = 12{,}1$ mm. $12{,}08$ mm ligger innenfor.',
  },
  {
    question: 'Hva er toleranseområdet når spesifikasjonen er $12$ mm $\\pm 0{,}1$ mm?',
    options: ['$0{,}2$ mm', '$0{,}1$ mm', '$12{,}1$ mm', '$0{,}01$ mm'],
    explanation: 'Toleranseområdet er avstanden mellom grensene: $12{,}1 - 11{,}9 = 0{,}2$ mm.',
  },
  {
    question: 'En bolt med krav $12$ mm $\\pm 0{,}1$ mm måles til $11{,}85$ mm. Hva er konklusjonen?',
    options: ['Bolten må vrakes — den er under nedre toleransegrense på $11{,}9$ mm', 'Bolten er godkjent', 'Bolten er over øvre grense', 'Målingen må rundes opp til $11{,}9$ mm'],
    explanation: '$11{,}85 < 11{,}9$, så målet ligger utenfor toleransen.',
  },
  {
    question: 'Hvilket måleverktøy passer best for å måle en diameter med tiendels millimeters nøyaktighet?',
    options: ['Skyvelære', 'Tommestokk', 'Målebånd', 'Vater'],
    explanation: 'Skyvelæret leser av tiendeler (og hundredeler) av en millimeter. Tommestokk og målebånd er for grove.',
  },
],


  '2py-7-3': [
  {
    question: 'Hvor mange centimeter er én tomme (inch)?',
    options: ['$2{,}54$ cm', '$25{,}4$ cm', '$1{,}54$ cm', '$3{,}54$ cm'],
    explanation: 'Per definisjon er $1$ tomme $= 2{,}54$ cm.',
  },
  {
    question: 'Et rør er $10$ fot langt. Omtrent hvor mange meter er det? ($1$ fot $= 30{,}48$ cm)',
    options: ['Ca. $3{,}05$ m', 'Ca. $1{,}5$ m', 'Ca. $10$ m', 'Ca. $0{,}3$ m'],
    explanation: '$10 \\cdot 30{,}48 = 304{,}8$ cm $\\approx 3{,}05$ m.',
  },
  {
    question: 'Bruk formelen $°F = °C \\cdot 1{,}8 + 32$. Hva er $20\\,°C$ i fahrenheit?',
    options: ['$68\\,°F$', '$52\\,°F$', '$36\\,°F$', '$93{,}6\\,°F$'],
    explanation: '$20 \\cdot 1{,}8 + 32 = 36 + 32 = 68\\,°F$.',
  },
  {
    question: 'Aluminium har tetthet $2{,}7$ kg/dm³. Hva veier et emne på $4$ dm³?',
    options: ['$10{,}8$ kg', '$6{,}7$ kg', '$1{,}48$ kg', '$2{,}7$ kg'],
    explanation: 'Masse = tetthet · volum $= 2{,}7 \\cdot 4 = 10{,}8$ kg.',
  },
  {
    question: 'En leveranse skal kjøres $50$ miles. Omtrent hvor langt er det i kilometer? ($1$ mile $= 1{,}609$ km)',
    options: ['Ca. $80$ km', 'Ca. $50$ km', 'Ca. $31$ km', 'Ca. $160$ km'],
    explanation: '$50 \\cdot 1{,}609 = 80{,}45 \\approx 80$ km.',
  },
],


  '2py-8-1': [
  {
    question: 'Hva er det første steget i en systematisk problemløsning?',
    options: ['Forstå problemet — hva er det egentlig som skal finnes ut?', 'Begynne å regne med en gang', 'Kjøpe inn materialer', 'Skrive svaret'],
    explanation: 'Uten å forstå hva som spørres om, vet vi ikke hvilke beregninger som trengs.',
  },
  {
    question: 'Hvordan angriper du best et stort, sammensatt prosjekt, f.eks. å beregne kostnaden for et helt baderom?',
    options: ['Del problemet opp i mindre delproblemer og løs dem hver for seg', 'Gjett en totalsum basert på erfaring', 'Regn alt i én eneste stor utregning', 'Vent til prosjektet er ferdig og tell opp'],
    explanation: 'Oppdeling i deler (fliser, rør, arbeidstid osv.) gjør et sammensatt problem håndterbart og lett å kontrollere.',
  },
  {
    question: 'Hvorfor lønner det seg å gjøre et overslag før den nøyaktige beregningen?',
    options: ['For å kunne vurdere om det nøyaktige svaret er rimelig', 'Fordi overslaget alltid er nøyaktig nok', 'For å slippe å regne nøyaktig', 'Det har ingen hensikt'],
    explanation: 'Et overslag gir en fasit å sammenligne med — store avvik avslører regnefeil.',
  },
  {
    question: 'Hva bør du alltid gjøre etter at du har regnet ut et svar på et praktisk problem?',
    options: ['Kontrollere at svaret er rimelig i situasjonen', 'Runde av til nærmeste tusen', 'Gange svaret med en sikkerhetsfaktor på 10', 'Ingenting — utregningen er ferdig'],
    explanation: 'Rimelighetsvurdering fanger opp feil: $2\\,000$ liter maling til ett rom er åpenbart galt.',
  },
  {
    question: 'En maler beregner at hun trenger $7{,}3$ liter maling. Hvorfor bør hun runde opp ved innkjøp?',
    options: ['Maling selges i hele spann, og hun må være sikker på å ha nok', 'Fordi desimaltall er feil', 'For at prisen skal bli høyere', 'Fordi malingen fordamper'],
    explanation: 'Ved innkjøp runder vi opp til hele salgsenheter, så arbeidet ikke stopper på grunn av materialmangel.',
  },
],


  '2py-8-2': [
  {
    question: 'Hva må en formel i et regneark alltid starte med?',
    options: ['Likhetstegn $=$', 'Pluss $+$', 'Anførselstegn', 'Tallet null'],
    explanation: 'Regnearket tolker innholdet som en formel bare når cellen starter med $=$.',
  },
  {
    question: 'Hva gjør formelen =B2*C2 i et regneark?',
    options: ['Ganger innholdet i celle B2 med innholdet i celle C2', 'Legger sammen B2 og C2', 'Skriver teksten B2*C2 i cellen', 'Flytter innholdet fra B2 til C2'],
    explanation: 'Stjernen er gangetegnet i regneark, så formelen beregner produktet, f.eks. antall · pris.',
  },
  {
    question: 'Hva er den største fordelen med å bruke formler i stedet for å regne for hånd i et regneark?',
    options: ['Resultatene oppdateres automatisk når du endrer tallene', 'Formler kan ikke inneholde feil', 'Regnearket blir penere', 'Du slipper å skrive inn tall'],
    explanation: 'Endrer du f.eks. en pris, regnes alle formler som bruker cellen ut på nytt automatisk.',
  },
  {
    question: 'Hvilken formel summerer cellene B2 til og med B10?',
    options: ['=SUMMER(B2:B10)', '=B2:B10', '=PLUSS(B2;B10)', 'SUMMER B2-B10'],
    explanation: '=SUMMER(B2:B10) legger sammen alle verdiene i området fra B2 til B10.',
  },
  {
    question: 'En snekker har laget et regneark for materialberegning. Hva er nytten når kunden endrer bestillingen?',
    options: ['Han kan endre antall og priser og straks se ny totalkostnad', 'Han må lage hele regnearket på nytt', 'Regnearket gir rabatt automatisk', 'Det er ingen nytte — alt må regnes på nytt for hånd'],
    explanation: 'Med formler på plass gir nye inndata umiddelbart oppdaterte summer — det er styrken til regneark.',
  },
],


  '2py-9-1': [
  {
    question: 'Hva er grunnprinsippet når vi løser en likning?',
    options: ['Gjøre det samme på begge sider for å holde balansen', 'Bare endre venstre side', 'Flytte alle tall til venstre side uten å endre fortegn', 'Gjette til det stemmer'],
    explanation: 'En likning er som en vekt i balanse — samme operasjon på begge sider bevarer likheten.',
  },
  {
    question: 'Løs likningen $3x + 5 = 20$.',
    options: ['$x = 5$', '$x = 15$', '$x = \\frac{20}{3}$', '$x = 8$'],
    explanation: '$3x = 20 - 5 = 15$, så $x = 15 : 3 = 5$.',
  },
  {
    question: 'Løs likningen $4x - 7 = 2x + 9$.',
    options: ['$x = 8$', '$x = 2$', '$x = 16$', '$x = 1$'],
    explanation: '$4x - 2x = 9 + 7$ gir $2x = 16$, altså $x = 8$.',
  },
  {
    question: 'En elektriker tar $500$ kr i fastpris pluss $650$ kr per time. Regningen ble $2\\,450$ kr. Hvor mange timer jobbet han?',
    options: ['$3$ timer', '$4$ timer', '$2$ timer', '$5$ timer'],
    explanation: 'Likningen $650t + 500 = 2\\,450$ gir $650t = 1\\,950$, så $t = 3$ timer.',
  },
  {
    question: 'Hva vil det si at et tall er en løsning av en likning?',
    options: ['Setter vi inn tallet, blir venstre og høyre side like', 'Tallet står på høyre side av likningen', 'Tallet er alltid positivt', 'Tallet gjør venstre side størst'],
    explanation: 'En løsning er en verdi for den ukjente som gjør likningen sann.',
  },
],


  '2py-9-2': [
  {
    question: 'Ohms lov sier $U = R \\cdot I$. Hva er spenningen $U$ når $R = 20\\,\\Omega$ og $I = 2$ A?',
    options: ['$40$ V', '$10$ V', '$22$ V', '$18$ V'],
    explanation: '$U = 20 \\cdot 2 = 40$ volt.',
  },
  {
    question: 'Hvordan omformer du $U = R \\cdot I$ for å finne strømmen $I$?',
    options: ['$I = \\frac{U}{R}$', '$I = U \\cdot R$', '$I = R - U$', '$I = \\frac{R}{U}$'],
    explanation: 'Vi deler begge sider på $R$: $I = \\frac{U}{R}$.',
  },
  {
    question: 'Arealet av et rektangel er $A = l \\cdot b$. Et gulv har areal $12$ m² og lengde $4$ m. Hva er bredden?',
    options: ['$3$ m', '$8$ m', '$48$ m', '$1{,}5$ m'],
    explanation: '$b = \\frac{A}{l} = \\frac{12}{4} = 3$ m.',
  },
  {
    question: 'Bruk formelen $v = \\frac{s}{t}$. En varebil kjører $150$ km på $2{,}5$ timer. Hva er gjennomsnittsfarten?',
    options: ['$60$ km/t', '$75$ km/t', '$375$ km/t', '$50$ km/t'],
    explanation: '$v = \\frac{150}{2{,}5} = 60$ km/t.',
  },
  {
    question: 'Hva betyr det å sette inn verdier i en formel?',
    options: ['Å erstatte variablene med tallene vi kjenner', 'Å skrive formelen på nytt', 'Å fjerne alle variablene', 'Å løse formelen for alle ukjente samtidig'],
    explanation: 'Vi bytter ut bokstavene med kjente tall og regner ut den størrelsen vi er ute etter.',
  },
],


  '2py-9-3': [
  {
    question: 'Hva kjennetegner to størrelser som er rett proporsjonale?',
    options: ['Dobles den ene, dobles også den andre — $y = k \\cdot x$', 'Dobles den ene, halveres den andre', 'De er alltid like store', 'Summen av dem er konstant'],
    explanation: 'Ved rett proporsjonalitet er forholdet $\\frac{y}{x} = k$ konstant.',
  },
  {
    question: 'Hva kjennetegner omvendt proporsjonalitet?',
    options: ['Produktet $x \\cdot y$ er konstant — dobles $x$, halveres $y$', 'Differansen $x - y$ er konstant', 'Begge størrelsene øker samtidig', 'Forholdet $\\frac{y}{x}$ er konstant'],
    explanation: 'Ved omvendt proporsjonalitet er $y = \\frac{k}{x}$, så produktet $x \\cdot y = k$ er fast.',
  },
  {
    question: 'Fire arbeidere bruker $6$ dager på en jobb. Hvor lang tid bruker åtte arbeidere i samme tempo?',
    options: ['$3$ dager', '$12$ dager', '$6$ dager', '$2$ dager'],
    explanation: 'Antall arbeidere og tid er omvendt proporsjonale: $4 \\cdot 6 = 24$ dagsverk, og $24 : 8 = 3$ dager.',
  },
  {
    question: '$2$ liter maling dekker $18$ m². Hvor mange m² dekker $5$ liter?',
    options: ['$45$ m²', '$36$ m²', '$90$ m²', '$25$ m²'],
    explanation: 'Dekkevnen er $18 : 2 = 9$ m² per liter, så $5 \\cdot 9 = 45$ m².',
  },
  {
    question: 'Hvilken situasjon beskriver rett proporsjonalitet?',
    options: ['Prisen på drivstoff når du betaler en fast literpris', 'Totalpris med fastbeløp pluss timepris', 'Tiden en jobb tar når flere arbeider sammen', 'Verdien av en bil som taper seg over tid'],
    explanation: 'Pris $=$ literpris $\\cdot$ antall liter er på formen $y = kx$. De andre har fastledd eller omvendt sammenheng.',
  },
],


  '2py-9-4': [
  {
    question: 'Når må du snu ulikhetstegnet?',
    options: ['Når du ganger eller deler begge sider med et negativt tall', 'Når du legger til et tall på begge sider', 'Hver gang du flytter et ledd', 'Aldri'],
    explanation: 'Multiplikasjon eller divisjon med negativt tall snur ulikheten. Addisjon og subtraksjon gjør det ikke.',
  },
  {
    question: 'Løs ulikheten $2x + 3 \\leq 11$.',
    options: ['$x \\leq 4$', '$x \\geq 4$', '$x \\leq 7$', '$x \\leq \\frac{11}{2}$'],
    explanation: '$2x \\leq 8$ gir $x \\leq 4$.',
  },
  {
    question: 'Et verksted har $5\\,000$ kr i budsjett. Et verktøysett koster $1\\,200$ kr, og skruekasser koster $300$ kr per stykk. Hvor mange skruekasser kan de maksimalt kjøpe i tillegg?',
    options: ['$12$', '$13$', '$16$', '$10$'],
    explanation: '$300n + 1\\,200 \\leq 5\\,000$ gir $n \\leq \\frac{3\\,800}{300} \\approx 12{,}7$. Hele kasser: maksimalt $12$.',
  },
  {
    question: 'Hva betyr symbolet $\\geq$?',
    options: ['Større enn eller lik', 'Strengt større enn', 'Mindre enn eller lik', 'Omtrent lik'],
    explanation: '$\\geq$ inkluderer både «større enn» og «lik».',
  },
  {
    question: 'Løs ulikheten $-3x < 9$.',
    options: ['$x > -3$', '$x < -3$', '$x > 3$', '$x < 3$'],
    explanation: 'Vi deler på $-3$ og snur tegnet: $x > -3$.',
  },
],


  '2py-10-1': [
  {
    question: 'Hva er vekstfaktoren når renten er $3\\,\\%$ per år?',
    options: ['$1{,}03$', '$0{,}03$', '$1{,}3$', '$0{,}97$'],
    explanation: 'Vekstfaktor $= 1 + \\frac{3}{100} = 1{,}03$.',
  },
  {
    question: 'Du setter $10\\,000$ kr på en konto med $5\\,\\%$ årlig rente. Hvor mye har du etter $2$ år?',
    options: ['$11\\,025$ kr', '$11\\,000$ kr', '$10\\,500$ kr', '$12\\,000$ kr'],
    explanation: '$10\\,000 \\cdot 1{,}05^2 = 10\\,000 \\cdot 1{,}1025 = 11\\,025$ kr.',
  },
  {
    question: 'Hva menes med renters rente?',
    options: ['Du får rente også på renten fra tidligere år', 'Renten halveres hvert år', 'Banken tar dobbel rente', 'Renten utbetales kontant hvert år'],
    explanation: 'Rentene legges til saldoen, og neste års rente beregnes av hele det nye beløpet.',
  },
  {
    question: 'Hvilken formel gir sluttbeløpet $K$ etter $n$ år med startbeløp $K_0$ og vekstfaktor $(1+r)$?',
    options: ['$K = K_0 \\cdot (1+r)^n$', '$K = K_0 \\cdot (1+r) \\cdot n$', '$K = K_0 + r \\cdot n$', '$K = K_0 \\cdot r^n$'],
    explanation: 'Beløpet ganges med vekstfaktoren én gang per år, altså $(1+r)^n$ totalt.',
  },
  {
    question: 'Du sparer $20\\,000$ kr i $3$ år med $3\\,\\%$ årlig rente (renters rente). Hva er sluttbeløpet?',
    options: ['Ca. $21\\,855$ kr', '$21\\,800$ kr', '$20\\,600$ kr', 'Ca. $29\\,000$ kr'],
    explanation: '$20\\,000 \\cdot 1{,}03^3 \\approx 21\\,854{,}54$ kr. Med enkel rente ville det blitt $21\\,800$ kr — renters rente gir litt mer.',
  },
],


  '2py-10-2': [
  {
    question: 'Hva er salgskurs i valutaveksling?',
    options: ['Kursen banken bruker når den selger valuta til deg — den er høyere enn kjøpskursen', 'Kursen banken bruker når den kjøper valuta av deg', 'Gjennomsnittskursen for dagen', 'Kursen uten gebyr'],
    explanation: 'Banken selger dyrt og kjøper billig: salgskursen er høyere enn kjøpskursen.',
  },
  {
    question: 'Du skal veksle $500$ euro til kroner, og kursen er $11{,}50$ kr per euro. Hvor mye får du?',
    options: ['$5\\,750$ kr', '$575$ kr', '$4\\,348$ kr', '$5\\,500$ kr'],
    explanation: '$500 \\cdot 11{,}50 = 5\\,750$ kr.',
  },
  {
    question: 'Hvor mange dollar får du for $3\\,000$ kr når kursen er $10{,}00$ kr per dollar?',
    options: ['$300$ dollar', '$30\\,000$ dollar', '$3\\,000$ dollar', '$30$ dollar'],
    explanation: 'Vi deler på kursen: $3\\,000 : 10 = 300$ dollar.',
  },
  {
    question: 'Hva måler konsumprisindeksen (KPI)?',
    options: ['Prisutviklingen på varer og tjenester husholdningene kjøper', 'Lønnsnivået i industrien', 'Valutakursen mot euro', 'Bankenes utlånsrente'],
    explanation: 'KPI viser hvordan det generelle prisnivået endrer seg over tid og brukes til å justere for prisstigning.',
  },
  {
    question: 'Lønnen din øker med $2\\,\\%$, mens prisene øker med $4\\,\\%$. Hva skjer med reallønnen?',
    options: ['Den synker — du får mindre kjøpekraft', 'Den øker med $2\\,\\%$', 'Den øker med $6\\,\\%$', 'Den er uendret'],
    explanation: 'Når prisene stiger mer enn den nominelle lønnen, synker reallønnen — pengene strekker ikke like langt.',
  },
],


  '2py-11-1': [
  {
    question: 'Hva er medianen i et datasett?',
    options: ['Verdien som deler det sorterte datasettet i to like store deler', 'Den vanligste verdien', 'Gjennomsnittet av alle verdiene', 'Den største verdien'],
    explanation: 'Medianen (Q2) ligger i midten når dataene er sortert — halvparten under og halvparten over.',
  },
  {
    question: 'Hva er nedre kvartil (Q1)?',
    options: ['Verdien som $25\\,\\%$ av dataene ligger under', 'Verdien som $75\\,\\%$ av dataene ligger under', 'Den minste verdien i datasettet', 'Halvparten av medianen'],
    explanation: 'Q1 er medianen av nedre halvdel: en fjerdedel av dataene ligger under Q1.',
  },
  {
    question: 'Ventetidene (i minutter) på et dekkverksted var $2, 4, 5, 7, 8, 10, 12$. Hva er medianen?',
    options: ['$7$', '$8$', '$6{,}9$', '$5$'],
    explanation: 'Med $7$ sorterte verdier er medianen den fjerde verdien: $7$.',
  },
  {
    question: 'I samme datasett er $Q1 = 4$ og $Q3 = 10$. Hva er kvartilbredden?',
    options: ['$6$', '$14$', '$10$', '$4$'],
    explanation: 'Kvartilbredden er $Q3 - Q1 = 10 - 4 = 6$ og beskriver spredningen i den midterste halvparten.',
  },
  {
    question: 'Hvilke fem verdier viser et boksplott?',
    options: ['Minste verdi, Q1, median, Q3 og største verdi', 'Gjennomsnitt, median, typetall, variasjonsbredde og sum', 'De fem største verdiene', 'Fem tilfeldig valgte observasjoner'],
    explanation: 'Boksplottet bygger på fempunktsoppsummeringen: min, Q1, median, Q3 og maks.',
  },
],


  '2py-12-1': [
  {
    question: 'Hva er $\\frac{3}{4}$ skrevet som desimaltall og prosent?',
    options: ['$0{,}75$ og $75\\,\\%$', '$0{,}34$ og $34\\,\\%$', '$0{,}75$ og $7{,}5\\,\\%$', '$1{,}33$ og $133\\,\\%$'],
    explanation: '$3 \\div 4 = 0{,}75$, og $0{,}75 \\cdot 100 = 75\\,\\%$.',
  },
  {
    question: 'I en oppskrift trenger du $\\frac{1}{2}$ dl olje og $\\frac{1}{4}$ dl til pensling. Hvor mye olje trenger du totalt?',
    options: ['$\\frac{3}{4}$ dl', '$\\frac{2}{6}$ dl', '$\\frac{1}{6}$ dl', '$\\frac{2}{4}$ dl'],
    explanation: 'Felles nevner: $\\frac{2}{4} + \\frac{1}{4} = \\frac{3}{4}$ dl.',
  },
  {
    question: 'Du får $20\\,\\%$ rabatt på materialer som koster $1\\,200$ kr. Hva betaler du?',
    options: ['$960$ kr', '$1\\,000$ kr', '$240$ kr', '$980$ kr'],
    explanation: 'Du betaler $80\\,\\%$: $1\\,200 \\cdot 0{,}8 = 960$ kr.',
  },
  {
    question: 'Hva er $0{,}35$ skrevet som prosent?',
    options: ['$35\\,\\%$', '$3{,}5\\,\\%$', '$0{,}35\\,\\%$', '$350\\,\\%$'],
    explanation: 'Fra desimaltall til prosent ganger vi med $100$: $0{,}35 = 35\\,\\%$.',
  },
  {
    question: 'En maler har brukt $\\frac{2}{5}$ av et spann på $40$ liter. Hvor mange liter er brukt?',
    options: ['$16$ liter', '$8$ liter', '$20$ liter', '$25$ liter'],
    explanation: '$\\frac{2}{5} \\cdot 40 = \\frac{80}{5} = 16$ liter.',
  },
],


  '2py-12-2': [
  {
    question: 'Betong blandes i forholdet $1 : 3 : 5$ (sement : sand : pukk). Hvor mye sement trengs til $180$ kg blanding?',
    options: ['$20$ kg', '$60$ kg', '$36$ kg', '$100$ kg'],
    explanation: 'Totalt $1 + 3 + 5 = 9$ deler. Én del er $180 : 9 = 20$ kg, og sement utgjør én del.',
  },
  {
    question: 'Hvilket forhold er likt $2 : 3$?',
    options: ['$4 : 6$', '$3 : 2$', '$4 : 5$', '$2 : 6$'],
    explanation: 'Forholdstall kan forlenges som brøker: $2 : 3 = 4 : 6$ (begge ganget med 2).',
  },
  {
    question: 'Saft blandes i forholdet $1 : 7$ (saft : vann). Hvor mye vann trengs til $0{,}5$ liter saft?',
    options: ['$3{,}5$ liter', '$7$ liter', '$0{,}5$ liter', '$1{,}4$ liter'],
    explanation: 'Vannmengden er $7$ ganger saftmengden: $0{,}5 \\cdot 7 = 3{,}5$ liter.',
  },
  {
    question: 'To stoffer blandes i forholdet $a : b$. Hvor stor andel av totalen utgjør det første stoffet?',
    options: ['$\\frac{a}{a+b}$', '$\\frac{a}{b}$', '$\\frac{b}{a+b}$', '$\\frac{a+b}{a}$'],
    explanation: 'Totalen er $a + b$ deler, og det første stoffet utgjør $a$ av disse delene.',
  },
  {
    question: 'En oppskrift til $4$ personer bruker $600$ g kjøtt. Hvor mye trengs til $10$ personer?',
    options: ['$1\\,500$ g', '$2\\,400$ g', '$1\\,200$ g', '$960$ g'],
    explanation: 'Per person: $600 : 4 = 150$ g. Til $10$ personer: $150 \\cdot 10 = 1\\,500$ g.',
  },
],

};

export default quizData_2py;
