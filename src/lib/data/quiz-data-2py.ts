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


};

export default quizData_2py;
