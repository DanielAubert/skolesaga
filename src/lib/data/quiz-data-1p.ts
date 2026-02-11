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
      explanation: '$f(3) = 2 \times 3 + 1 = 6 + 1 = 7$.',
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
      explanation: '$A = l \times b = 8 \times 5 = 40$ cm$^2$.',
    },
    {
      question: 'Hva er omkretsen av et rektangel med lengde 10 m og bredde 6 m?',
      options: ['32 m', '60 m', '16 m', '120 m'],
      explanation: '$O = 2l + 2b = 2 \times 10 + 2 \times 6 = 20 + 12 = 32$ m.',
    },
    {
      question: 'Hva er formelen for areal av en trekant?',
      options: ['$A = (g \times h) / 2$', '$A = g \times h$', '$A = g + h$', '$A = 2g \times h$'],
      explanation: 'Arealet av en trekant er grunnlinje ganger høyde delt på 2.',
    },
    {
      question: 'Hva er arealet av en sirkel med radius 5 cm? (bruk π ≈ 3,14)',
      options: ['$78{,}5$ cm$^2$', '$31{,}4$ cm$^2$', '$15{,}7$ cm$^2$', '$157$ cm$^2$'],
      explanation: '$A = \pi \times r^2 = 3{,}14 \times 5^2 = 3{,}14 \times 25 = 78{,}5$ cm$^2$.',
    },
    {
      question: 'Hva er omkretsen av en sirkel med radius 7 m? (bruk π ≈ 3,14)',
      options: ['44 m', '22 m', '154 m', '14 m'],
      explanation: '$O = 2\pi r = 2 \times 3{,}14 \times 7 \approx 44$ m.',
    },
  ],


  '1p-4-2': [
    {
      question: 'Hva er Pytagoras setning?',
      options: ['$a^2 + b^2 = c^2$', '$a + b = c$', '$a \times b = c$', '$(a + b)^2 = c^2$'],
      explanation: 'I en rettvinklet trekant er summen av katetenes kvadrater lik hypotenusens kvadrat.',
    },
    {
      question: 'Finn hypotenusen når katetene er 3 og 4.',
      options: ['$5$', '$7$', '$12$', '$25$'],
      explanation: '$c = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5$.',
    },
    {
      question: 'Finn kateten når hypotenusen er 13 og den andre kateten er 5.',
      options: ['$12$', '$8$', '$18$', '$144$'],
      explanation: '$b = \sqrt{13^2 - 5^2} = \sqrt{169 - 25} = \sqrt{144} = 12$.',
    },
    {
      question: 'Hva kalles den lengste siden i en rettvinklet trekant?',
      options: ['Hypotenusen', 'Kateten', 'Grunnlinjen', 'Høyden'],
      explanation: 'Hypotenusen er siden som ligger mot den rette vinkelen og er alltid lengst.',
    },
    {
      question: 'En stige på 5 m står 3 m fra veggen. Hvor høyt opp rekker den?',
      options: ['4 m', '2 m', '8 m', '16 m'],
      explanation: '$h = \sqrt{5^2 - 3^2} = \sqrt{25 - 9} = \sqrt{16} = 4$ m.',
    },
  ],


  '1p-4-3': [
    {
      question: 'Hva er volumet av en boks med mål 4 × 3 × 2 cm?',
      options: ['$24$ cm$^3$', '$9$ cm$^3$', '$12$ cm$^3$', '$48$ cm$^3$'],
      explanation: '$V = l \times b \times h = 4 \times 3 \times 2 = 24$ cm$^3$.',
    },
    {
      question: 'Hva er formelen for volum av en sylinder?',
      options: ['$V = \pi r^2 h$', '$V = 2\pi rh$', '$V = \pi r^2$', '$V = \frac{4}{3}\pi r^3$'],
      explanation: 'Volum av sylinder = grunnflate $\times$ høyde = $\pi r^2 \times h$.',
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
      explanation: 'Variasjonsbredde $= \text{maks} - \text{min} = 18 - 3 = 15$.',
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
      explanation: '$20\%$ av $360°$ = $0{,}20 \times 360° = 72°$.',
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
      explanation: 'Multiplikasjonsprinsippet: $3 \times 4 = 12$ kombinasjoner.',
    },
    {
      question: 'En PIN-kode har 4 siffer (0-9). Hvor mange muligheter?',
      options: ['10 000', '40', '10', '1000'],
      explanation: '$10 \times 10 \times 10 \times 10 = 10^4 = 10\,000$ muligheter.',
    },
    {
      question: 'Hva er multiplikasjonsprinsippet?',
      options: ['Gang antall muligheter for hvert valg', 'Legg sammen antall muligheter', 'Del på antall valg', 'Trekk fra antall'],
      explanation: 'Når valg er uavhengige, ganger vi antall muligheter for hvert valg.',
    },
    {
      question: '5 forretter og 4 hovedretter. Hvor mange menyer?',
      options: ['20', '9', '54', '1'],
      explanation: '$5 \times 4 = 20$ mulige kombinasjoner.',
    },
    {
      question: 'Et passord har 3 bokstaver (26 muligheter hver). Hvor mange passord?',
      options: ['17 576', '78', '26', '702'],
      explanation: '$26 \times 26 \times 26 = 26^3 = 17\,576$ muligheter.',
    },
  ],


  '1p-7-1': [
    {
      question: 'Taxi: 60 kr stårtpris + 15 kr/km. Hva er funksjonen $P(x)$?',
      options: ['$P(x) = 15x + 60$', '$P(x) = 60x + 15$', '$P(x) = 75x$', '$P(x) = 60 - 15x$'],
      explanation: 'Pris = pris per km $\times$ antall km + startpris $= 15x + 60$.',
    },
    {
      question: 'Med modellen $P(x) = 15x + 60$, hva koster 10 km?',
      options: ['210 kr', '150 kr', '600 kr', '75 kr'],
      explanation: '$P(10) = 15 \times 10 + 60 = 150 + 60 = 210$ kr.',
    },
    {
      question: 'Hva er en matematisk modell?',
      options: ['Matematikk som beskriver virkeligheten', 'En fysisk modell', 'En datamaskin', 'Et diagram'],
      explanation: 'En matematisk modell bruker matematikk til å beskrive og forutsi virkeligheten.',
    },
    {
      question: 'Leie: 400 kr/dag + 2 kr/km. Hva er kostnaden for 150 km på én dag?',
      options: ['700 kr', '302 kr', '600 kr', '550 kr'],
      explanation: 'Kostnad $= 400 + 2 \times 150 = 400 + 300 = 700$ kr.',
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
      explanation: 'Dollærtegn ($) gjør cellehenvising absolutt, så den ikke endres ved kopiering.',
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
      explanation: 'Netto $= 40\,000 \times (1 - 0{,}25) = 40\,000 \times 0{,}75 = 30\,000$ kr.',
    },
    {
      question: 'Hva finansierer skatten?',
      options: ['Fellesgoder som helse og skole', 'Privat forbruk', 'Bankinnskudd', 'Utenlandsreiser'],
      explanation: 'Skatt går til fellesgoder som helse, utdanning, veier osv.',
    },
    {
      question: 'Bruttolønn 50 000 kr, skatt 30%. Hvor mye er skatten?',
      options: ['15 000 kr', '35 000 kr', '20 000 kr', '50 000 kr'],
      explanation: 'Skatt $= 50\,000 \times 0{,}30 = 15\,000$ kr.',
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


};

export default quizData_1p;
