import type { QuizQuestion } from './quiz-data';

const quizData_1p: Record<string, QuizQuestion[]> = {
'1p-1-1': [
    {
      question: 'Hva er 25% skrevet som desimaltall?',
      options: ['0,25', '2,5', '0,025', '25'],
      explanation: '25% = 25/100 = 0,25. Vi deler prosenttallet på 100 for å få desimaltall.',
    },
    {
      question: 'Hva er vekstfaktoren ved 15% økning?',
      options: ['1,15', '0,15', '1,015', '0,85'],
      explanation: 'Vekstfaktor ved økning = 1 + p/100 = 1 + 0,15 = 1,15.',
    },
    {
      question: 'Finn 20% av 300 kr.',
      options: ['60 kr', '260 kr', '20 kr', '6 kr'],
      explanation: '20% av 300 = 0,20 × 300 = 60 kr.',
    },
    {
      question: 'Renten økte fra 2% til 5%. Hvor mange prosentpoeng er økningen?',
      options: ['3 prosentpoeng', '3%', '150%', '2,5 prosentpoeng'],
      explanation: 'Prosentpoeng er forskjellen mellom to prosenttall: 5% - 2% = 3 prosentpoeng.',
    },
    {
      question: 'Hva blir ny pris når 500 kr reduseres med 30%?',
      options: ['350 kr', '150 kr', '470 kr', '650 kr'],
      explanation: 'Vekstfaktor = 1 - 0,30 = 0,70. Ny pris = 500 × 0,70 = 350 kr.',
    },
  ],


  '1p-1-2': [
    {
      question: 'Hva er formelen for rentesrente?',
      options: ['$K = K_0 \\cdot (1+r)^n$', '$K = K_0 \\cdot r \\cdot n$', '$K = K_0 + r \\cdot n$', '$K = K_0 / (1+r)^n$'],
      explanation: 'Ved rentesrente ganges startkapitalen med vekstfaktoren opphøyd i antall år.',
    },
    {
      question: 'Du setter 10 000 kr i banken med 4% rente. Hvahar du etter 1 år?',
      options: ['10 400 kr', '10 040 kr', '14 000 kr', '400 kr'],
      explanation: '$10\\,000 \\times 1{,}04 = 10\\,400$ kr.',
    },
    {
      question: 'Ifølge 72-regelen, hvor lang tid tar det å doble pengene med 6% rente?',
      options: ['12 år', '6 år', '72 år', '18 år'],
      explanation: '72-regelen: År for dobling $\\approx 72/\\text{rentesats} = 72/6 = 12$ år.',
    },
    {
      question: 'Hva skiller rentesrente fra enkel rente?',
      options: ['Renten legges til kapitalen hvert år', 'Renten trekkes fra hvert år', 'Renten er høyere', 'Det er ingen forskjell'],
      explanation: 'Ved rentesrente beregnes renten av kapitalen inkludert tidligere opptjente renter.',
    },
    {
      question: 'Hvilken rente trengs for å doble pengene på 9 år (72-regelen)?',
      options: ['8%', '9%', '72%', '12%'],
      explanation: '$72/9 = 8\\%$. Du trenger 8% rente for å doble på 9 år.',
    },
  ],


  '1p-1-3': [
    {
      question: 'Hva kjennetegner et serielån?',
      options: ['Like avdrag, synkende terminbeløp', 'Like terminbeløp', 'Økende avdrag', 'Ingen renter'],
      explanation: 'Ved serielån er avdragene like store hver termin, mens rentene synker etter hvert som gjelden reduseres.',
    },
    {
      question: 'Hvilken lånetype gir lavest totale rentekostnader?',
      options: ['Serielån', 'Annuitetslån', 'De er like', 'Kredittlån'],
      explanation: 'Serielån gir lavere totale renter fordi gjelden reduseres raskere.',
    },
    {
      question: 'Hva er effektiv rente?',
      options: ['Rente inkludert alle kostnader', 'Oppgitt rente', 'Månedlig rente', 'Rente før gebyrer'],
      explanation: 'Effektiv rente tar hensyn til alle kostnader ved lånet, inkludert gebyrer.',
    },
    {
      question: 'Et lån på 60 000 kr over 3 år som serielån. Hva er årlig avdrag?',
      options: ['20 000 kr', '60 000 kr', '3 000 kr', '180 000 kr'],
      explanation: 'Avdrag $= \\text{Lånebeløp} / \\text{Antall terminer} = 60\\,000 / 3 = 20\\,000$ kr.',
    },
    {
      question: 'Hva kjennetegner et annuitetslån?',
      options: ['Like terminbeløp', 'Like avdrag', 'Synkende terminbeløp', 'Ingen avdrag'],
      explanation: 'Ved annuitetslån er terminbeløpet (avdrag + renter) likt hver gang.',
    },
  ],


  '1p-2-1': [
    {
      question: 'Forenkle uttrykket: $5x + 3x$',
      options: ['$8x$', '$15x$', '$53x$', '$8x^2$'],
      explanation: '$5x + 3x = 8x$. Vi slår sammen like ledd.',
    },
    {
      question: 'Regn ut: $3(x + 4)$',
      options: ['$3x + 12$', '$3x + 4$', '$7x$', '$12x$'],
      explanation: 'Vi ganger 3 med hvert ledd i parentesen: $3 \\times x + 3 \\times 4 = 3x + 12$.',
    },
    {
      question: 'Hva er koeffisienten i uttrykket $7y$?',
      options: ['$7$', '$y$', '$7y$', '$1$'],
      explanation: 'Koeffisienten er tallet foran variabelen, altså 7.',
    },
    {
      question: 'Forenkle: $4a + 2b - a + 3b$',
      options: ['$3a + 5b$', '$5a + 5b$', '$7ab$', '$9ab$'],
      explanation: '$4a - a = 3a$ og $2b + 3b = 5b$, så svåret er $3a + 5b$.',
    },
    {
      question: 'Regn ut: $-2(x - 5)$',
      options: ['$-2x + 10$', '$-2x - 5$', '$-2x - 10$', '$2x - 10$'],
      explanation: '$-2 \\times x = -2x$ og $-2 \\times (-5) = +10$. Minus ganger minus gir pluss.',
    },
  ],


  '1p-2-2': [
    {
      question: 'Løs likningen: $x + 5 = 12$',
      options: ['$x = 7$', '$x = 17$', '$x = 5$', '$x = 60$'],
      explanation: '$x = 12 - 5 = 7$.',
    },
    {
      question: 'Løs likningen: $3x = 18$',
      options: ['$x = 6$', '$x = 54$', '$x = 15$', '$x = 21$'],
      explanation: '$x = 18 \\div 3 = 6$.',
    },
    {
      question: 'Løs likningen: $2x + 3 = 11$',
      options: ['$x = 4$', '$x = 7$', '$x = 14$', '$x = 5{,}5$'],
      explanation: '$2x = 11 - 3 = 8$, så $x = 8 \\div 2 = 4$.',
    },
    {
      question: 'Løs likningen: $4x - 2 = 2x + 6$',
      options: ['$x = 4$', '$x = 2$', '$x = 8$', '$x = -4$'],
      explanation: '$4x - 2x = 6 + 2$, så $2x = 8$, og $x = 4$.',
    },
    {
      question: 'Løs likningen: $2(x + 3) = 14$',
      options: ['$x = 4$', '$x = 7$', '$x = 5{,}5$', '$x = 8$'],
      explanation: '$2x + 6 = 14$, så $2x = 8$, og $x = 4$.',
    },
  ],


  '1p-2-3': [
    {
      question: 'Et tall pluss det dobbelte av tallet er 21. Finn tallet.',
      options: ['$7$', '$21$', '$10{,}5$', '$14$'],
      explanation: '$x + 2x = 21$, så $3x = 21$, og $x = 7$.',
    },
    {
      question: 'En vare koster 360 kr etter 40% rabatt. Hva var originalprisen?',
      options: ['600 kr', '504 kr', '216 kr', '900 kr'],
      explanation: '$x \\times 0{,}60 = 360$, så $x = 360 / 0{,}60 = 600$ kr.',
    },
    {
      question: 'Løs formelen $A = l \\times b$ for $b$.',
      options: ['$b = A/l$', '$b = A \\times l$', '$b = A - l$', '$b = l/A$'],
      explanation: 'Vi deler begge sider på $l$: $b = A/l$.',
    },
    {
      question: 'Ola kjører 150 km på 2 timer. Hva er gjennomsnittsfarten?',
      options: ['75 km/t', '300 km/t', '148 km/t', '152 km/t'],
      explanation: 'Fart $= \\text{strekning} / \\text{tid} = 150 / 2 = 75$ km/t.',
    },
    {
      question: 'Per er 5 år eldre enn Kari. Sammen er de 35 år. Hvor gammel er Kari?',
      options: ['15 år', '20 år', '17,5 år', '30 år'],
      explanation: '$x + (x + 5) = 35$, så $2x = 30$, og $x = 15$ år.',
    },
  ],


  '1p-3-1': [
    {
      question: 'Gitt $f(x) = 2x + 1$. Finn $f(3)$.',
      options: ['$7$', '$6$', '$5$', '$9$'],
      explanation: '$f(3) = 2 \\times 3 + 1 = 6 + 1 = 7$.',
    },
    {
      question: 'Hva kalles $x$ i en funksjon $f(x)$?',
      options: ['Den uavhengige variabelen', 'Den avhengige variabelen', 'Konstantleddet', 'Stigningstallet'],
      explanation: '$x$ er den uavhengige variabelen (input), mens $f(x)$ er den avhengige (output).',
    },
    {
      question: 'Gitt $g(x) = -x + 5$. Finn $g(0)$.',
      options: ['$5$', '$0$', '$-5$', '$1$'],
      explanation: '$g(0) = -0 + 5 = 5$.',
    },
    {
      question: 'Hva leses "$f(x)$" som?',
      options: ['f av x', 'f ganger x', 'f delt på x', 'f minus x'],
      explanation: '$f(x)$ leses "f av x" og betyr funksjonsverdien når vi setter inn $x$.',
    },
    {
      question: 'Gitt $h(x) = 3x - 2$. Finn $x$ når $h(x) = 10$.',
      options: ['$4$', '$28$', '$12$', '$8/3$'],
      explanation: '$3x - 2 = 10$, så $3x = 12$, og $x = 4$.',
    },
  ],


  '1p-3-2': [
    {
      question: 'Hva er stigningstallet i $f(x) = 3x + 2$?',
      options: ['$3$', '$2$', '$5$', '$3x$'],
      explanation: 'I $f(x) = ax + b$ er $a$ stigningstallet. Her er $a = 3$.',
    },
    {
      question: 'Hva er konstantleddet i $f(x) = -2x + 7$?',
      options: ['$7$', '$-2$', '$5$', '$-2x$'],
      explanation: 'I $f(x) = ax + b$ er $b$ konstantleddet. Her er $b = 7$.',
    },
    {
      question: 'Finn stigningstallet for linjen gjennom $(0, 2)$ og $(4, 10)$.',
      options: ['$2$', '$8$', '$4$', '$12$'],
      explanation: '$a = (10 - 2) / (4 - 0) = 8 / 4 = 2$.',
    },
    {
      question: 'Hva betyr det at stigningstallet er negativt?',
      options: ['Linjen synker mot høyre', 'Linjen stiger mot høyre', 'Linjen er horisontal', 'Linjen er vertikal'],
      explanation: 'Negativt stigningstall betyr at $y$ avtar når $x$ øker, altså linjen synker.',
    },
    {
      question: 'Taxi koster 50 kr stårtpris + 10 kr/km. Hva er funksjonen $f(x)$?',
      options: ['$f(x) = 10x + 50$', '$f(x) = 50x + 10$', '$f(x) = 60x$', '$f(x) = 10x - 50$'],
      explanation: 'Startprisen er konstantledd (50), pris per km er stigningstall (10).',
    },
  ],


  '1p-3-3': [
    {
      question: 'Hvor mange punkter trenger vi minimum for å tegne en rett linje?',
      options: ['2', '1', '3', '4'],
      explanation: 'En rett linje er bestemt av to punkter.',
    },
    {
      question: 'Finn nullpunktet til $f(x) = 2x - 6$.',
      options: ['$x = 3$', '$x = -3$', '$x = 6$', '$x = -6$'],
      explanation: '$2x - 6 = 0$, så $2x = 6$, og $x = 3$.',
    },
    {
      question: 'Hva er nullpunktet til en funksjon?',
      options: ['Verdien av $x$ der $f(x) = 0$', 'Verdien av $f(0)$', 'Stigningstallet', 'Konstantleddet'],
      explanation: 'Nullpunktet er $x$-verdien der grafen krysser $x$-aksen ($f(x) = 0$).',
    },
    {
      question: 'Hvor krysser $f(x) = x + 4$ $y$-aksen?',
      options: ['$(0, 4)$', '$(4, 0)$', '$(-4, 0)$', '$(0, -4)$'],
      explanation: 'Ved $y$-aksen er $x = 0$: $f(0) = 0 + 4 = 4$, altså punktet $(0, 4)$.',
    },
    {
      question: 'Finn skjæringspunktet mellom $f(x) = x + 2$ og $g(x) = 3x - 4$.',
      options: ['$(3, 5)$', '$(2, 4)$', '$(1, 3)$', '$(4, 6)$'],
      explanation: '$x + 2 = 3x - 4$, så $-2x = -6$, og $x = 3$. $f(3) = 3 + 2 = 5$.',
    },
  ],


  '1p-4-1': [
    {
      question: 'Hva er arealet av et rektangel med lengde 8 cm og bredde 5 cm?',
      options: ['$40$ cm$^2$', '$26$ cm$^2$', '$13$ cm$^2$', '$80$ cm$^2$'],
      explanation: '$A = l \\times b = 8 \\times 5 = 40$ cm$^2$.',
    },
    {
      question: 'Hva er omkretsen av et rektangel med lengde 10 m og bredde 6 m?',
      options: ['32 m', '60 m', '16 m', '120 m'],
      explanation: '$O = 2l + 2b = 2 \\times 10 + 2 \\times 6 = 20 + 12 = 32$ m.',
    },
    {
      question: 'Hva er formelen for areal av en trekant?',
      options: ['$A = (g \\times h) / 2$', '$A = g \\times h$', '$A = g + h$', '$A = 2g \\times h$'],
      explanation: 'Arealet av en trekant er grunnlinje ganger høyde delt på 2.',
    },
    {
      question: 'Hva er arealet av en sirkel med radius 5 cm? (bruk π ≈ 3,14)',
      options: ['$78{,}5$ cm$^2$', '$31{,}4$ cm$^2$', '$15{,}7$ cm$^2$', '$157$ cm$^2$'],
      explanation: '$A = \\pi \\times r^2 = 3{,}14 \\times 5^2 = 3{,}14 \\times 25 = 78{,}5$ cm$^2$.',
    },
    {
      question: 'Hva er omkretsen av en sirkel med radius 7 m? (bruk π ≈ 3,14)',
      options: ['44 m', '22 m', '154 m', '14 m'],
      explanation: '$O = 2\\pi r = 2 \\times 3{,}14 \\times 7 \\approx 44$ m.',
    },
  ],


  '1p-4-2': [
    {
      question: 'Hva er Pytagoras setning?',
      options: ['$a^2 + b^2 = c^2$', '$a + b = c$', '$a \\times b = c$', '$(a + b)^2 = c^2$'],
      explanation: 'I en rettvinklet trekant er summen av katetenes kvadrater lik hypotenusens kvadrat.',
    },
    {
      question: 'Finn hypotenusen når katetene er 3 og 4.',
      options: ['$5$', '$7$', '$12$', '$25$'],
      explanation: '$c = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.',
    },
    {
      question: 'Finn kateten når hypotenusen er 13 og den andre kateten er 5.',
      options: ['$12$', '$8$', '$18$', '$144$'],
      explanation: '$b = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$.',
    },
    {
      question: 'Hva kalles den lengste siden i en rettvinklet trekant?',
      options: ['Hypotenusen', 'Kateten', 'Grunnlinjen', 'Høyden'],
      explanation: 'Hypotenusen er siden som ligger mot den rette vinkelen og er alltid lengst.',
    },
    {
      question: 'En stige på 5 m står 3 m fra veggen. Hvor høyt opp rekker den?',
      options: ['4 m', '2 m', '8 m', '16 m'],
      explanation: '$h = \\sqrt{5^2 - 3^2} = \\sqrt{25 - 9} = \\sqrt{16} = 4$ m.',
    },
  ],


  '1p-4-3': [
    {
      question: 'Hva er volumet av en boks med mål 4 × 3 × 2 cm?',
      options: ['$24$ cm$^3$', '$9$ cm$^3$', '$12$ cm$^3$', '$48$ cm$^3$'],
      explanation: '$V = l \\times b \\times h = 4 \\times 3 \\times 2 = 24$ cm$^3$.',
    },
    {
      question: 'Hva er formelen for volum av en sylinder?',
      options: ['$V = \\pi r^2 h$', '$V = 2\\pi rh$', '$V = \\pi r^2$', '$V = \\frac{4}{3}\\pi r^3$'],
      explanation: 'Volum av sylinder = grunnflate $\\times$ høyde = $\\pi r^2 \\times h$.',
    },
    {
      question: 'Hvor mange liter er 1000 cm³?',
      options: ['1 liter', '10 liter', '100 liter', '0,1 liter'],
      explanation: '1 liter = 1 dm$^3$ = 1000 cm$^3$.',
    },
    {
      question: 'Hva er volumet av en kube med side 5 cm?',
      options: ['$125$ cm$^3$', '$25$ cm$^3$', '$15$ cm$^3$', '$75$ cm$^3$'],
      explanation: '$V = s^3 = 5^3 = 125$ cm$^3$.',
    },
    {
      question: 'Hvor mange cm³ er 1 m³?',
      options: ['$1\,000\,000$ cm$^3$', '$1000$ cm$^3$', '$100$ cm$^3$', '$10\,000$ cm$^3$'],
      explanation: '1 m = 100 cm, så $1$ m$^3$ = $100^3$ cm$^3$ = $1\,000\,000$ cm$^3$.',
    },
  ],


  '1p-5-1': [
    {
      question: 'Finn gjennomsnittet av tallene 4, 6, 8, 10, 12.',
      options: ['8', '40', '6', '10'],
      explanation: 'Gjennomsnitt $= (4+6+8+10+12)/5 = 40/5 = 8$.',
    },
    {
      question: 'Finn medianen av tallene 3, 7, 2, 9, 5.',
      options: ['5', '3', '7', '5,2'],
      explanation: 'Sortert: 2, 3, 5, 7, 9. Medianen er det midterste tallet = 5.',
    },
    {
      question: 'Hva er typetallet i datasettet: 2, 3, 3, 4, 5, 3, 7?',
      options: ['3', '2', '4', '5'],
      explanation: 'Typetallet er verdien som førekommer oftest. 3 førekommer 3 ganger.',
    },
    {
      question: 'Finn medianen av tallene 2, 4, 6, 8.',
      options: ['5', '4', '6', '20'],
      explanation: 'Ved like antall er medianen gjennomsnittet av de to midterste: $(4+6)/2 = 5$.',
    },
    {
      question: 'Hvilket sentralmål er best ved ekstremverdier?',
      options: ['Median', 'Gjennomsnitt', 'Typetall', 'Variasjonsbredde'],
      explanation: 'Medianen påvirkes ikke av ekstremverdier og gir et bedre bilde av sentrum.',
    },
  ],


  '1p-5-2': [
    {
      question: 'Hva er variasjonsbredden av tallene 5, 12, 3, 18, 7?',
      options: ['15', '18', '3', '9'],
      explanation: 'Variasjonsbredde $= \\text{maks} - \\text{min} = 18 - 3 = 15$.',
    },
    {
      question: 'Hva måler standardavviket?',
      options: ['Gjennomsnittlig avvik fra gjennomsnittet', 'Forskjell mellom maks og min', 'Det midterste tallet', 'Summen av alle tall'],
      explanation: 'Standardavvik måler hvor mye verdiene i gjennomsnitt avviker fra gjennomsnittet.',
    },
    {
      question: 'Hva betyr et stort standardavvik?',
      options: ['Dataene er spredt', 'Dataene er samlet', 'Gjennomsnittet er høyt', 'Medianen er lav'],
      explanation: 'Et stort standardavvik betyr at verdiene varierer mye fra gjennomsnittet.',
    },
    {
      question: 'Finn variasjonsbredden: 100, 105, 98, 110, 95.',
      options: ['15', '110', '95', '101,6'],
      explanation: 'Variasjonsbredde $= 110 - 95 = 15$.',
    },
    {
      question: 'Hvilket spredningsmål er enklest å beregne?',
      options: ['Variasjonsbredde', 'Standardavvik', 'Varians', 'Kvartilbredde'],
      explanation: 'Variasjonsbredden beregnes bare ved å trekke minste fra største verdi.',
    },
  ],


  '1p-5-3': [
    {
      question: 'Hvilket diagram er best for å vise andeler av en helhet?',
      options: ['Sektordiagram', 'Søylediagram', 'Linjediagram', 'Histogram'],
      explanation: 'Sektordiagram viser hvordan en helhet er delt opp i deler.',
    },
    {
      question: 'Hvilket diagram er best for å vise utvikling over tid?',
      options: ['Linjediagram', 'Sektordiagram', 'Søylediagram', 'Histogram'],
      explanation: 'Linjediagram viser endringer over tid på en tydelig måte.',
    },
    {
      question: 'I et sektordiagram er hele sirkelen lik hvor mange grader?',
      options: ['360°', '180°', '100°', '90°'],
      explanation: 'En hel sirkel er 360 grader.',
    },
    {
      question: '20% skal vises i et sektordiagram. Hvor stor vinkel?',
      options: ['72°', '20°', '36°', '90°'],
      explanation: '$20\%$ av $360°$ = $0{,}20 \\times 360° = 72°$.',
    },
    {
      question: 'Hvilket diagram er best for å sammenligne kategorier?',
      options: ['Søylediagram', 'Sektordiagram', 'Linjediagram', 'Punktdiagram'],
      explanation: 'Søylediagram gjør det enkelt å sammenligne verdier mellom kategorier.',
    },
  ],


  '1p-6-1': [
    {
      question: 'Hva er sannsynligheten for å få 6 på en terning?',
      options: ['$1/6$', '$1/2$', '$6$', '$1$'],
      explanation: 'Det er 1 gunstig utfall (6) av 6 mulige utfall $= 1/6$.',
    },
    {
      question: 'Hva er sannsynligheten for å få partall på en terning?',
      options: ['$1/2$', '$1/3$', '$1/6$', '$2/3$'],
      explanation: 'Partall er 2, 4, 6 - altså 3 av 6 mulige $= 3/6 = 1/2$.',
    },
    {
      question: 'Hva kan sannsynligheten for en hendelse være?',
      options: ['Mellom 0 og 1', 'Mellom 1 og 100', 'Bare 0 eller 1', 'Ethvert tall'],
      explanation: 'Sannsynlighet er alltid mellom 0 (umulig) og 1 (sikkert).',
    },
    {
      question: 'Du trekker ett kort fra en kortstokk. Hva er P(hjerter)?',
      options: ['$1/4$', '$1/2$', '$13/52$', '$4/52$'],
      explanation: 'Det er 13 hjerter av 52 kort $= 13/52 = 1/4$.',
    },
    {
      question: 'Hva er sannsynligheten for å få et tall mindre enn 7 på en terning?',
      options: ['$1$', '$6/7$', '$5/6$', '$0$'],
      explanation: 'Alle tall 1-6 er mindre enn 7, så $P = 6/6 = 1$ (sikkert).',
    },
  ],


  '1p-6-2': [
    {
      question: 'Du har 3 bukser og 4 skjorter. Hvor mange antrekk kan du lage?',
      options: ['12', '7', '34', '1'],
      explanation: 'Multiplikasjonsprinsippet: $3 \\times 4 = 12$ kombinasjoner.',
    },
    {
      question: 'En PIN-kode har 4 siffer (0-9). Hvor mange muligheter?',
      options: ['10 000', '40', '10', '1000'],
      explanation: '$10 \\times 10 \\times 10 \\times 10 = 10^4 = 10\,000$ muligheter.',
    },
    {
      question: 'Hva er multiplikasjonsprinsippet?',
      options: ['Gang antall muligheter for hvert valg', 'Legg sammen antall muligheter', 'Del på antall valg', 'Trekk fra antall'],
      explanation: 'Når valg er uavhengige, ganger vi antall muligheter for hvert valg.',
    },
    {
      question: '5 forretter og 4 hovedretter. Hvor mange menyer?',
      options: ['20', '9', '54', '1'],
      explanation: '$5 \\times 4 = 20$ mulige kombinasjoner.',
    },
    {
      question: 'Et passord har 3 bokstaver (26 muligheter hver). Hvor mange passord?',
      options: ['17 576', '78', '26', '702'],
      explanation: '$26 \\times 26 \\times 26 = 26^3 = 17\,576$ muligheter.',
    },
  ],


  '1p-7-1': [
    {
      question: 'Taxi: 60 kr stårtpris + 15 kr/km. Hva er funksjonen $P(x)$?',
      options: ['$P(x) = 15x + 60$', '$P(x) = 60x + 15$', '$P(x) = 75x$', '$P(x) = 60 - 15x$'],
      explanation: 'Pris = pris per km $\\times$ antall km + startpris $= 15x + 60$.',
    },
    {
      question: 'Med modellen $P(x) = 15x + 60$, hva koster 10 km?',
      options: ['210 kr', '150 kr', '600 kr', '75 kr'],
      explanation: '$P(10) = 15 \\times 10 + 60 = 150 + 60 = 210$ kr.',
    },
    {
      question: 'Hva er en matematisk modell?',
      options: ['Matematikk som beskriver virkeligheten', 'En fysisk modell', 'En datamaskin', 'Et diagram'],
      explanation: 'En matematisk modell bruker matematikk til å beskrive og forutsi virkeligheten.',
    },
    {
      question: 'Leie: 400 kr/dag + 2 kr/km. Hva er kostnaden for 150 km på én dag?',
      options: ['700 kr', '302 kr', '600 kr', '550 kr'],
      explanation: 'Kostnad $= 400 + 2 \\times 150 = 400 + 300 = 700$ kr.',
    },
    {
      question: 'Hva bør vi alltid vurdere ved en modell?',
      options: ['Om svåret gir mening', 'Om modellen er komplisert', 'Om den har mange variabler', 'Om den har bokstaver'],
      explanation: 'En modell er en førenkling, så vi må vurdere om resultatet er rimelig.',
    },
  ],


  '1p-7-2': [
    {
      question: 'Hvordan starter en formel i regneark?',
      options: ['=', '+', '*', '#'],
      explanation: 'Formler i regneark starter alltid med likhetstegn (=).',
    },
    {
      question: 'Hva gjør funksjonen =SUM(A1:A5)?',
      options: ['Legger sammen A1 til A5', 'Finner gjennomsnitt', 'Teller celler', 'Finner maks'],
      explanation: 'SUM legger sammen alle verdiene i det angitte området.',
    },
    {
      question: 'Hva gjør $A$1 i en formel?',
      options: ['Låser cellen ved kopiering', 'Ganger med A1', 'Deler på A1', 'Ingenting'],
      explanation: 'Dollartegn (\\$) gjør cellehenvisningen absolutt, så den ikke endres ved kopiering.',
    },
    {
      question: 'Hvilken funksjon finner gjennomsnittet i Excel?',
      options: ['AVERAGE eller SNITT', 'SUM', 'MAX', 'COUNT'],
      explanation: 'AVERAGE (eller SNITT på norsk) beregner gjennomsnittet.',
    },
    {
      question: 'Hva gjør =MIN(B1:B10)?',
      options: ['Finner minste verdi', 'Finner største verdi', 'Finner gjennomsnittet', 'Teller verdier'],
      explanation: 'MIN finner den laveste verdien i det angitte området.',
    },
  ],


  '1p-8-1': [
    {
      question: 'Hva er forskjellen på bruttolønn og nettolønn?',
      options: ['Brutto er før skatt, netto er etter', 'Netto er før skatt, brutto er etter', 'De er like', 'Brutto er månedlig, netto er årlig'],
      explanation: 'Bruttolønn er lønn før skatt, nettolønn er det du faktisk får utbetalt.',
    },
    {
      question: 'Bruttolønn 40 000 kr, skatt 25%. Hva er nettolønnen?',
      options: ['30 000 kr', '10 000 kr', '50 000 kr', '35 000 kr'],
      explanation: 'Netto $= 40\,000 \\times (1 - 0{,}25) = 40\,000 \\times 0{,}75 = 30\,000$ kr.',
    },
    {
      question: 'Hva finansierer skatten?',
      options: ['Fellesgoder som helse og skole', 'Privat forbruk', 'Bankinnskudd', 'Utenlandsreiser'],
      explanation: 'Skatt går til fellesgoder som helse, utdanning, veier osv.',
    },
    {
      question: 'Bruttolønn 50 000 kr, skatt 30%. Hvor mye er skatten?',
      options: ['15 000 kr', '35 000 kr', '20 000 kr', '50 000 kr'],
      explanation: 'Skatt $= 50\,000 \\times 0{,}30 = 15\,000$ kr.',
    },
    {
      question: 'Hva er inntekt?',
      options: ['Penger du tjener', 'Penger du bruker', 'Penger du låner', 'Penger du sparer'],
      explanation: 'Inntekt er penger du tjener, f.eks. lønn, stipend eller renter.',
    },
  ],


  '1p-8-2': [
    {
      question: 'Hva er et budsjett?',
      options: ['En plan for inntekter og utgifter', 'En kvittering', 'En bankkonto', 'En lønnsslipp'],
      explanation: 'Et budsjett er en oversikt over forventede inntekter og utgifter.',
    },
    {
      question: 'Inntekt 28 000 kr, utgifter 25 000 kr. Hva er overskuddet?',
      options: ['3 000 kr', '53 000 kr', '-3 000 kr', '25 000 kr'],
      explanation: 'Overskudd = Inntekter - Utgifter $= 28\,000 - 25\,000 = 3\,000$ kr.',
    },
    {
      question: 'Hva er en fast utgift?',
      options: ['Samme beløp hver måned', 'Varierer hver måned', 'Utgift til mat', 'Utgift til klær'],
      explanation: 'Faste utgifter er like hver måned, f.eks. husleie og forsikring.',
    },
    {
      question: 'Inntekt 30 000 kr, utgifter 32 000 kr. Hva er resultatet?',
      options: ['-2 000 kr (underskudd)', '2 000 kr', '62 000 kr', '0 kr'],
      explanation: 'Underskudd $= 30\,000 - 32\,000 = -2\,000$ kr. Du bruker mer enn du tjener.',
    },
    {
      question: 'Hva er en variabel utgift?',
      options: ['Varierer fra måned til måned', 'Lik hver måned', 'Utgift til husleie', 'Utgift til forsikring'],
      explanation: 'Variable utgifter varierer, f.eks. mat, klær og fritidsaktiviteter.',
    },
  ],



  '1p-1-4': [
    {
      question: 'Hva er 1/2 + 1/3?',
      options: ['5/6', '2/5', '1/6', '2/6'],
      explanation: 'Fellesnevner 6: 3/6 + 2/6 = 5/6.',
    },
    {
      question: 'Forkort brøken 12/18 så langt som mulig.',
      options: ['2/3', '3/4', '6/9', '4/6'],
      explanation: 'Del teller og nevner på 6: 12/18 = 2/3.',
    },
    {
      question: 'Hva er 3/4 · 2/5?',
      options: ['3/10', '5/9', '6/9', '1/2'],
      explanation: 'Gang teller med teller og nevner med nevner: 6/20 = 3/10.',
    },
    {
      question: 'Hva er 1/2 ÷ 1/4?',
      options: ['2', '1/8', '1/2', '4'],
      explanation: 'Gang med den omvendte brøken: 1/2 · 4/1 = 2.',
    },
    {
      question: 'Hva er 2/5 av 200 kr?',
      options: ['80 kr', '40 kr', '100 kr', '50 kr'],
      explanation: '200 ÷ 5 = 40, og 2 · 40 = 80 kr.',
    },
  ],

  '1p-1-5': [
    {
      question: 'Hva er 4 + 3 · 5?',
      options: ['19', '35', '23', '17'],
      explanation: 'Multiplikasjon før addisjon: 4 + 15 = 19.',
    },
    {
      question: 'Hva er (4 + 3) · 5?',
      options: ['35', '19', '23', '27'],
      explanation: 'Parentesen først: 7 · 5 = 35.',
    },
    {
      question: 'Hva er 20 − 2 · 3²?',
      options: ['2', '14', '162', '38'],
      explanation: 'Potens først: 20 − 2 · 9 = 20 − 18 = 2.',
    },
    {
      question: 'Hva er −4²?',
      options: ['−16', '16', '−8', '8'],
      explanation: 'Minustegnet står utenfor potensen: −(4 · 4) = −16.',
    },
    {
      question: 'Gjør et overslag: 4,9 · 19,8 er omtrent …',
      options: ['100', '80', '1000', '120'],
      explanation: 'Rund av: 5 · 20 = 100.',
    },
  ],

  '1p-2-4': [
    {
      question: 'Hva er 2⁵?',
      options: ['32', '10', '25', '64'],
      explanation: '2 · 2 · 2 · 2 · 2 = 32.',
    },
    {
      question: 'Forenkle a³ · a⁴.',
      options: ['a⁷', 'a¹²', 'a¹', '2a⁷'],
      explanation: 'Likt grunntall: legg sammen eksponentene, 3 + 4 = 7.',
    },
    {
      question: 'Hva er 10⁰?',
      options: ['1', '0', '10', '100'],
      explanation: 'Alle tall (unntatt 0) opphøyd i 0 er 1.',
    },
    {
      question: 'Hva er 3⁻²?',
      options: ['1/9', '−9', '−6', '9'],
      explanation: 'Negativ eksponent: 3⁻² = 1/3² = 1/9.',
    },
    {
      question: 'Hva er (2³)²?',
      options: ['64', '32', '12', '36'],
      explanation: 'Gang eksponentene: 2⁶ = 64.',
    },
  ],

  '1p-2-5': [
    {
      question: 'Hva er √64?',
      options: ['8', '6', '32', '16'],
      explanation: '8 · 8 = 64.',
    },
    {
      question: 'Hva er ∛27?',
      options: ['3', '9', '13,5', '5'],
      explanation: '3 · 3 · 3 = 27.',
    },
    {
      question: 'Skriv 45 000 på standardform.',
      options: ['4,5 · 10⁴', '45 · 10³', '4,5 · 10³', '0,45 · 10⁵'],
      explanation: 'Tallet a må være mellom 1 og 10: 4,5 · 10⁴.',
    },
    {
      question: 'Skriv 0,0003 på standardform.',
      options: ['3 · 10⁻⁴', '3 · 10⁴', '0,3 · 10⁻³', '3 · 10⁻³'],
      explanation: 'Flytt kommaet 4 plasser mot høyre: 3 · 10⁻⁴.',
    },
    {
      question: 'Hva er √(9 · 16)?',
      options: ['12', '144', '25', '7'],
      explanation: '√9 · √16 = 3 · 4 = 12.',
    },
  ],

  '1p-2-6': [
    {
      question: 'y og x er proporsjonale, og y = 24 når x = 3. Hva er k?',
      options: ['8', '72', '21', '3'],
      explanation: 'k = y/x = 24/3 = 8.',
    },
    {
      question: 'Hva kjennetegner proporsjonale størrelser?',
      options: ['Forholdet y/x er konstant', 'Produktet x · y er konstant', 'Differansen y − x er konstant', 'y er alltid større enn x'],
      explanation: 'Proporsjonalitet betyr y = kx, altså konstant forhold.',
    },
    {
      question: 'Hva kjennetegner omvendt proporsjonale størrelser?',
      options: ['Produktet x · y er konstant', 'Forholdet y/x er konstant', 'Summen x + y er konstant', 'Begge øker samtidig'],
      explanation: 'Omvendt proporsjonalitet: y = k/x, altså x · y = k.',
    },
    {
      question: 'Et kart har målestokk 1 : 100 000. Hvor langt er 3 cm på kartet i virkeligheten?',
      options: ['3 km', '30 km', '300 m', '1 km'],
      explanation: '3 · 100 000 cm = 300 000 cm = 3 km.',
    },
    {
      question: '6 arbeidere bruker 8 dager. Hvor lang tid bruker 12 arbeidere?',
      options: ['4 dager', '16 dager', '6 dager', '2 dager'],
      explanation: 'Omvendt proporsjonalt: 6 · 8 = 48 dagsverk, 48/12 = 4 dager.',
    },
  ],

  '1p-3-4': [
    {
      question: 'Hva kalles grafen til en andregradsfunksjon?',
      options: ['Parabel', 'Hyperbel', 'Rett linje', 'Sirkel'],
      explanation: 'Andregradsfunksjoner gir alltid en parabel.',
    },
    {
      question: 'Hva skjer når a > 0 i f(x) = ax² + bx + c?',
      options: ['Parabelen har et bunnpunkt', 'Parabelen har et toppunkt', 'Grafen blir en rett linje', 'Grafen synker hele veien'],
      explanation: 'Positiv a gir «smilemunn» med bunnpunkt.',
    },
    {
      question: 'Finn symmetrilinjen til f(x) = x² − 6x + 1.',
      options: ['x = 3', 'x = −3', 'x = 6', 'x = 1'],
      explanation: 'x = −b/(2a) = 6/2 = 3.',
    },
    {
      question: 'Hva er nullpunktene til f(x) = x² − 4?',
      options: ['x = −2 og x = 2', 'x = 4', 'x = 0 og x = 4', 'x = −4 og x = 4'],
      explanation: 'x² = 4 gir x = ±2.',
    },
    {
      question: 'Gitt f(x) = x² − 2x. Hva er f(3)?',
      options: ['3', '9', '15', '1'],
      explanation: '9 − 6 = 3.',
    },
  ],

  '1p-3-5': [
    {
      question: 'I f(x) = a · bˣ, hva er a?',
      options: ['Startverdien', 'Vekstfaktoren', 'Nullpunktet', 'Stigningstallet'],
      explanation: 'a er verdien når x = 0.',
    },
    {
      question: 'Hva er vekstfaktoren ved 12 % økning?',
      options: ['1,12', '0,12', '1,012', '0,88'],
      explanation: '1 + 12/100 = 1,12.',
    },
    {
      question: 'Hva er vekstfaktoren ved 5 % nedgang?',
      options: ['0,95', '1,05', '0,05', '−0,95'],
      explanation: '1 − 0,05 = 0,95.',
    },
    {
      question: 'Hva er 1000 · 1,1²?',
      options: ['1210', '1200', '1100', '1331'],
      explanation: '1000 · 1,21 = 1210.',
    },
    {
      question: 'Ifølge 72-regelen: doblingstid ved 6 % årlig vekst?',
      options: ['12 år', '6 år', '72 år', '9 år'],
      explanation: '72/6 = 12 år.',
    },
  ],

  '1p-3-6': [
    {
      question: 'Hvilken GeoGebra-kommando finner nullpunktene til f?',
      options: ['Nullpunkt(f)', 'Ekstremalpunkt(f)', 'Skjæring(f)', 'Graf(f)'],
      explanation: 'Nullpunkt(f) markerer der grafen krysser x-aksen.',
    },
    {
      question: 'Hvordan løser du likningen f(x) = g(x) grafisk?',
      options: ['Finn skjæringspunktet mellom grafene', 'Finn nullpunktet til f', 'Finn toppunktet til g', 'Les av y-aksen'],
      explanation: 'Løsningen er x-verdien der grafene krysser hverandre.',
    },
    {
      question: 'Hva finner kommandoen Ekstremalpunkt(f)?',
      options: ['Topp- og bunnpunkter', 'Nullpunkter', 'Skjæring med y-aksen', 'Stigningstallet'],
      explanation: 'Ekstremalpunkt gir parabelens topp- eller bunnpunkt.',
    },
    {
      question: 'Hvordan kan du løse x² = 9 grafisk?',
      options: ['Tegn y = x² og y = 9 og finn skjæringspunktene', 'Tegn bare y = x²', 'Tegn y = 9x', 'Tegn y = x² − 9x'],
      explanation: 'Skjæringspunktene gir x = −3 og x = 3.',
    },
    {
      question: 'Hvor er løsningen av ulikheten f(x) < g(x)?',
      options: ['Der grafen til f ligger under grafen til g', 'Der f krysser x-aksen', 'Der grafene er like', 'Der f ligger over g'],
      explanation: 'Ulikheten gjelder for x-verdiene der f-grafen er lavest.',
    },
  ],

  '1p-4-4': [
    {
      question: 'Hvor mange meter er 2,5 km?',
      options: ['2500 m', '250 m', '25 000 m', '25 m'],
      explanation: '1 km = 1000 m, så 2,5 · 1000 = 2500 m.',
    },
    {
      question: 'Hvor mange dm² er 3 m²?',
      options: ['300 dm²', '30 dm²', '3000 dm²', '0,03 dm²'],
      explanation: 'Arealenheter har faktor 100: 3 · 100 = 300 dm².',
    },
    {
      question: '1 liter er det samme som …',
      options: ['1 dm³', '1 m³', '1 cm³', '10 cm³'],
      explanation: '1 L = 1 dm³ = 1000 cm³.',
    },
    {
      question: 'Hva er 72 km/h i m/s?',
      options: ['20 m/s', '7,2 m/s', '200 m/s', '26 m/s'],
      explanation: 'Del på 3,6: 72/3,6 = 20 m/s.',
    },
    {
      question: 'Hvor mange gram er 0,8 kg?',
      options: ['800 g', '80 g', '8000 g', '8 g'],
      explanation: '0,8 · 1000 = 800 g.',
    },
  ],

  '1p-4-5': [
    {
      question: 'Hva kjennetegner formlike figurer?',
      options: ['Like vinkler og proporsjonale sider', 'Like sider og like vinkler', 'Samme areal', 'Samme omkrets'],
      explanation: 'Formlikhet er samme form i ulik størrelse.',
    },
    {
      question: 'Formlikhetsfaktoren er k = 3. Hva ganges arealet med?',
      options: ['9', '3', '6', '27'],
      explanation: 'Areal skaleres med k² = 9.',
    },
    {
      question: 'Tilsvarende sider er 4 cm og 10 cm. Hva er formlikhetsfaktoren?',
      options: ['2,5', '6', '0,4', '14'],
      explanation: 'k = 10/4 = 2,5.',
    },
    {
      question: 'En tegning har målestokk 1 : 200. Hva er 5 cm på tegningen i virkeligheten?',
      options: ['10 m', '1 m', '100 m', '40 m'],
      explanation: '5 · 200 = 1000 cm = 10 m.',
    },
    {
      question: 'Formlikhetsfaktoren er k = 2. Hva ganges volumet med?',
      options: ['8', '4', '2', '6'],
      explanation: 'Volum skaleres med k³ = 8.',
    },
  ],

  '1p-7-3': [
    {
      question: 'Hva gjør lineær regresjon?',
      options: ['Finner linjen som passer best til datapunktene', 'Finner gjennomsnittet av dataene', 'Teller datapunktene', 'Fjerner ekstremverdier'],
      explanation: 'Regresjon tilpasser modellen y = ax + b til dataene.',
    },
    {
      question: 'Hva måler korrelasjonskoeffisienten r?',
      options: ['Styrken på den lineære sammenhengen', 'Gjennomsnittet', 'Antall datapunkter', 'Stigningstallet'],
      explanation: 'r ligger mellom −1 og 1 og måler samvariasjonen.',
    },
    {
      question: 'Hva betyr r = −0,95?',
      options: ['Sterk negativ sammenheng', 'Svak negativ sammenheng', 'Sterk positiv sammenheng', 'Ingen sammenheng'],
      explanation: 'Nær −1 betyr sterk sammenheng der den ene synker når den andre øker.',
    },
    {
      question: 'Hva kalles det å bruke modellen utenfor dataområdet?',
      options: ['Ekstrapolering', 'Interpolering', 'Korrelasjon', 'Simulering'],
      explanation: 'Ekstrapolering er usikkert fordi vi ikke vet om sammenhengen fortsetter.',
    },
    {
      question: 'Regresjonslinjen er y = 2x + 5. Hva er y når x = 10?',
      options: ['25', '20', '15', '30'],
      explanation: '2 · 10 + 5 = 25.',
    },
  ],

  '1p-7-4': [
    {
      question: 'Når passer en eksponentiell modell best?',
      options: ['Når dataene endres med fast prosent per periode', 'Når dataene endres med fast beløp', 'Når dataene er konstante', 'Når dataene varierer tilfeldig'],
      explanation: 'Fast prosentvis endring = eksponentiell modell.',
    },
    {
      question: 'I y = a · bˣ kalles b …',
      options: ['Vekstfaktoren', 'Startverdien', 'Stigningstallet', 'Konstantleddet'],
      explanation: 'b er tallet verdien ganges med per periode.',
    },
    {
      question: 'Dataene er 100, 200, 400, 800. Hva er vekstfaktoren?',
      options: ['2', '100', '4', '0,5'],
      explanation: 'Hver verdi er det dobbelte av forrige: b = 2.',
    },
    {
      question: 'Hva betyr b = 0,9 i en eksponentiell modell?',
      options: ['10 % nedgang per periode', '90 % nedgang per periode', '9 % vekst per periode', '0,9 % nedgang per periode'],
      explanation: '1 − 0,9 = 0,10 = 10 % nedgang.',
    },
    {
      question: 'Hvordan ser du at data passer en eksponentiell (ikke lineær) modell?',
      options: ['Forholdet mellom påfølgende verdier er konstant', 'Differansen mellom verdiene er konstant', 'Verdiene er like', 'Verdiene veksler fortegn'],
      explanation: 'Konstant forhold = eksponentiell; konstant differanse = lineær.',
    },
  ],

  '1p-7-5': [
    {
      question: 'Hva er et nullpunkt?',
      options: ['En x-verdi der f(x) = 0', 'Punktet (0, 0)', 'Der grafen krysser y-aksen', 'Det laveste punktet på grafen'],
      explanation: 'Nullpunktet er der grafen krysser x-aksen.',
    },
    {
      question: 'Hva er definisjonsmengden til en funksjon?',
      options: ['Alle x-verdier funksjonen er definert for', 'Alle y-verdier funksjonen kan gi', 'Nullpunktene', 'Toppunktene'],
      explanation: 'Definisjonsmengden er de tillatte x-verdiene.',
    },
    {
      question: 'Hva er nullpunktene til f(x) = x² − 16?',
      options: ['x = −4 og x = 4', 'x = 16', 'x = 4', 'x = −8 og x = 8'],
      explanation: 'x² = 16 gir x = ±4.',
    },
    {
      question: 'Hva skjer når a < 0 i f(x) = ax² + bx + c?',
      options: ['Parabelen har et toppunkt', 'Parabelen har et bunnpunkt', 'Grafen blir en rett linje', 'Grafen har ingen ekstremalpunkt'],
      explanation: 'Negativ a gir «sur munn» med toppunkt.',
    },
    {
      question: 'Hva er verdimengden til f(x) = x²?',
      options: ['Alle tall større enn eller lik 0', 'Alle tall', 'Alle tall mindre enn 0', 'Bare positive heltall'],
      explanation: 'x² kan aldri bli negativ, og 0 nås i x = 0.',
    },
  ],

  '1p-8-3': [
    {
      question: 'Hva er bruttolønn?',
      options: ['Lønn før skatt', 'Lønn etter skatt', 'Lønn pluss feriepenger', 'Overtidsbetaling'],
      explanation: 'Brutto = før skatt, netto = etter skatt.',
    },
    {
      question: 'Timelønnen er 180 kr og du jobber 37,5 timer. Hva er ukelønnen?',
      options: ['6750 kr', '6570 kr', '7500 kr', '5400 kr'],
      explanation: '180 · 37,5 = 6750 kr.',
    },
    {
      question: 'Timelønn 200 kr med 50 % overtidstillegg gir overtidstimelønn …',
      options: ['300 kr', '250 kr', '100 kr', '400 kr'],
      explanation: '200 · 1,5 = 300 kr.',
    },
    {
      question: 'Feriepengegrunnlaget er 200 000 kr og satsen 10,2 %. Hva blir feriepengene?',
      options: ['20 400 kr', '10 200 kr', '24 000 kr', '2040 kr'],
      explanation: '200 000 · 0,102 = 20 400 kr.',
    },
    {
      question: 'Hva betyr frikort?',
      options: ['Du betaler ikke skatt så lenge inntekten er under frikortgrensen', 'Du jobber gratis', 'Du får dobbel lønn', 'Du slipper å betale MVA'],
      explanation: 'Unge med lav inntekt kan tjene opptil frikortgrensen skattefritt.',
    },
  ],

  '1p-8-4': [
    {
      question: 'Hva er den alminnelige MVA-satsen i Norge?',
      options: ['25 %', '15 %', '12 %', '20 %'],
      explanation: 'Alminnelig sats er 25 %; matvarer har 15 %.',
    },
    {
      question: 'Hvilken MVA-sats gjelder for matvarer?',
      options: ['15 %', '25 %', '0 %', '12 %'],
      explanation: 'Matvarer har redusert sats på 15 %.',
    },
    {
      question: 'En vare koster 400 kr uten MVA (25 %). Hva koster den med MVA?',
      options: ['500 kr', '425 kr', '450 kr', '300 kr'],
      explanation: '400 · 1,25 = 500 kr.',
    },
    {
      question: '1 USD = 10 kr. Hva koster 50 USD i norske kroner?',
      options: ['500 kr', '50 kr', '5 kr', '60 kr'],
      explanation: '50 · 10 = 500 kr.',
    },
    {
      question: 'En vare koster 250 kr inkludert 25 % MVA. Hva er prisen uten MVA?',
      options: ['200 kr', '187,50 kr', '225 kr', '62,50 kr'],
      explanation: 'Del på vekstfaktoren: 250/1,25 = 200 kr.',
    },
  ],

  '1p-8-5': [
    {
      question: 'Hvilken verdi har indeksen i basisåret?',
      options: ['100', '0', '1', '10'],
      explanation: 'Basisåret settes alltid til 100.',
    },
    {
      question: 'En indeks på 130 betyr at prisen har …',
      options: ['økt med 30 %', 'økt med 130 %', 'sunket med 30 %', 'økt med 13 %'],
      explanation: '130 − 100 = 30 prosentpoeng over basisåret = 30 % økning.',
    },
    {
      question: 'Hva måler konsumprisindeksen (KPI)?',
      options: ['Det generelle prisnivået på varer og tjenester', 'Gjennomsnittslønnen', 'Skattenivået', 'Renten i bankene'],
      explanation: 'KPI viser prisutviklingen for en typisk «handlekurv».',
    },
    {
      question: 'Hva er reallønn?',
      options: ['Lønn justert for prisvekst', 'Lønn før skatt', 'Lønn etter skatt', 'Lønn pluss feriepenger'],
      explanation: 'Reallønnen viser om kjøpekraften faktisk har økt.',
    },
    {
      question: 'KPI stiger fra 100 til 150. Hva tilsvarer 200 kr fra basisåret i dag?',
      options: ['300 kr', '250 kr', '350 kr', '133 kr'],
      explanation: '200 · 150/100 = 300 kr.',
    },
  ],

  '1p-9-1': [
    {
      question: 'Hva er en algoritme?',
      options: ['En steg-for-steg-oppskrift som løser et problem', 'Et programmeringsspråk', 'En datamaskin', 'En graf'],
      explanation: 'En algoritme er en endelig, ordnet sekvens av entydige instruksjoner.',
    },
    {
      question: 'Hva er pseudokode?',
      options: ['En algoritme skrevet i klartekst', 'Falsk kode med feil', 'Et Python-program', 'En krypteringsmetode'],
      explanation: 'Pseudokode beskriver algoritmen uavhengig av programmeringsspråk.',
    },
    {
      question: 'Hva betyr iterasjon?',
      options: ['Gjentakelse', 'Avslutning', 'Betingelse', 'Feilmelding'],
      explanation: 'Iterasjon er å gjenta instruksjoner — en løkke.',
    },
    {
      question: 'Hva finner Euklids algoritme?',
      options: ['Største felles faktor', 'Minste felles multiplum', 'Kvadratroten', 'Primtall'],
      explanation: 'Euklids algoritme finner SFF ved gjentatt divisjon med rest.',
    },
    {
      question: 'sum ← 0, og for i fra 1 til 4: sum ← sum + i. Hva er sum til slutt?',
      options: ['10', '4', '24', '6'],
      explanation: '1 + 2 + 3 + 4 = 10.',
    },
  ],

  '1p-9-2': [
    {
      question: 'Hva skriver print(7 % 2) ut?',
      options: ['1', '3', '3.5', '14'],
      explanation: '% gir resten ved divisjon: 7 = 3 · 2 + 1.',
    },
    {
      question: 'Hva skriver print(2 ** 4) ut?',
      options: ['16', '8', '24', '6'],
      explanation: '** er potens: 2⁴ = 16.',
    },
    {
      question: 'Hvilke tall går range(5) gjennom?',
      options: ['0, 1, 2, 3, 4', '1, 2, 3, 4, 5', '0, 1, 2, 3, 4, 5', '5, 4, 3, 2, 1'],
      explanation: 'range starter på 0 og stopper før 5.',
    },
    {
      question: 'Hva må en if-setning i Python ha?',
      options: ['Kolon etter betingelsen og innrykk på neste linje', 'Parentes rundt hele linjen', 'Semikolon på slutten', 'Store bokstaver'],
      explanation: 'Uten kolon og innrykk får du syntaksfeil.',
    },
    {
      question: 'x = 3, deretter x = x + 2. Hva skriver print(x) ut?',
      options: ['5', '3', '32', '2'],
      explanation: 'x oppdateres til 3 + 2 = 5.',
    },
  ],

  '1p-9-3': [
    {
      question: 'Hva er en simulering?',
      options: ['Et datamaskin-eksperiment som etterligner et tilfeldig forsøk', 'En nøyaktig utregning', 'En graf', 'En tabell'],
      explanation: 'Simuleringen gjentar forsøket mange ganger og teller utfall.',
    },
    {
      question: 'Hvordan beregner en løkke rentesrente?',
      options: ['Ganger beløpet med vekstfaktoren i hver runde', 'Legger til samme rente hver runde', 'Deler beløpet på antall år', 'Trekker fra renten'],
      explanation: 'Hvert år: beløp = beløp · vekstfaktor.',
    },
    {
      question: 'Du simulerer 6000 terningkast. Omtrent hvor mange seksere forventer du?',
      options: ['1000', '600', '6000', '100'],
      explanation: '6000 · 1/6 = 1000.',
    },
    {
      question: 'Hva brukes halveringsmetoden til?',
      options: ['Å finne nullpunkter numerisk', 'Å halvere brøker', 'Å sortere tall', 'Å tegne grafer'],
      explanation: 'Metoden halverer intervallet der fortegnet skifter, igjen og igjen.',
    },
    {
      question: 'Hvorfor gir flere simuleringer et bedre estimat?',
      options: ['Store talls lov: relativ frekvens nærmer seg teoretisk sannsynlighet', 'Datamaskinen blir varmere', 'Tilfeldigheten forsvinner helt', 'Programmet kjører raskere'],
      explanation: 'Flere forsøk gir mindre relativ variasjon.',
    },
  ],

  '1p-5-4': [
    {
      question: 'Hva er effekten av en kuttet y-akse i et diagram?',
      options: ['Små forskjeller ser store ut', 'Store forskjeller ser små ut', 'Diagrammet blir mer nøyaktig', 'Ingen effekt'],
      explanation: 'Når aksen ikke starter på null, overdrives forskjellene visuelt.',
    },
    {
      question: 'Hva er et representativt utvalg?',
      options: ['Et utvalg som ligner på hele gruppen man undersøker', 'Et stort utvalg', 'Et utvalg av frivillige', 'Et utvalg av eksperter'],
      explanation: 'Uten representativitet kan ikke resultatet generaliseres.',
    },
    {
      question: 'Hva er selvseleksjon?',
      options: ['At bare de mest engasjerte velger å svare', 'At forskeren velger deltakere', 'At utvalget er tilfeldig', 'At alle i gruppen svarer'],
      explanation: 'Selvseleksjon gir skjeve resultater.',
    },
    {
      question: '9 ansatte tjener 400 000 kr og sjefen 1 600 000 kr. Hvilket mål beskriver best en typisk lønn?',
      options: ['Medianen', 'Gjennomsnittet', 'Summen', 'Variasjonsbredden'],
      explanation: 'Sjefens lønn er en ekstremverdi som drar gjennomsnittet opp.',
    },
    {
      question: 'Iskremsalg og drukningsulykker øker samtidig. Hva er den beste forklaringen?',
      options: ['En bakenforliggende faktor: sommervarme', 'Iskrem forårsaker drukning', 'Drukning øker iskremsalget', 'Ren tilfeldighet uten forklaring'],
      explanation: 'Korrelasjon betyr ikke årsakssammenheng.',
    },
  ],

  '1p-6-3': [
    {
      question: 'Hva er relativ frekvens?',
      options: ['Antall treff delt på antall forsøk', 'Antall forsøk delt på antall treff', 'Antall treff ganget med antall forsøk', 'Den teoretiske sannsynligheten'],
      explanation: 'Relativ frekvens = k/n og brukes som estimat for sannsynligheten.',
    },
    {
      question: 'Hva sier store talls lov?',
      options: ['Flere forsøk gir relativ frekvens nærmere den teoretiske sannsynligheten', 'Store tall er vanskeligere å regne med', 'Sannsynligheten øker med antall forsøk', 'Resultatet blir alltid likt'],
      explanation: 'Derfor simulerer vi med mange forsøk.',
    },
    {
      question: 'Du simulerer 500 myntkast. Omtrent hvor mange kron forventer du?',
      options: ['250', '500', '100', '50'],
      explanation: '500 · 1/2 = 250.',
    },
    {
      question: '1000 terningkast ga 170 seksere. Hva er den relative frekvensen?',
      options: ['0,17', '0,017', '1,7', '170'],
      explanation: '170/1000 = 0,17 — nær 1/6 ≈ 0,167.',
    },
    {
      question: 'Når er simulering spesielt nyttig?',
      options: ['Når den teoretiske beregningen er vanskelig', 'Når svaret allerede er kjent', 'Når man ikke har datamaskin', 'Når utfallene ikke er tilfeldige'],
      explanation: 'F.eks. «minst én sekser på fire kast» er lettere å simulere enn å telle direkte.',
    },
  ],
};

export default quizData_1p;
