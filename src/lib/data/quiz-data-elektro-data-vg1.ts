import type { QuizQuestion } from './quiz-data';

const quizData_elektroDataVg1: Record<string, QuizQuestion[]> = {
  'elektro-data-vg1-1': [
  {
    question: 'Hvilken enhet måles spenning i?',
    options: ['Volt (V)', 'Ampere (A)', 'Ohm (Ω)', 'Watt (W)'],
    explanation: 'Spenning måles i volt (V) og er forskjellen i elektrisk potensial mellom to punkter – «trykket» som driver elektronene.',
  },
  {
    question: 'En krets har motstanden R = 10 Ω og strømmen I = 2 A. Hva er spenningen ifølge Ohms lov?',
    options: ['20 V', '5 V', '12 V', '0,2 V'],
    explanation: 'Ohms lov: U = I × R = 2 A × 10 Ω = 20 V.',
  },
  {
    question: 'Et 12 V batteri er koblet til en motstand på 6 Ω. Hvor stor blir strømmen?',
    options: ['2 A', '72 A', '0,5 A', '6 A'],
    explanation: 'I = U / R = 12 V / 6 Ω = 2 A.',
  },
  {
    question: 'Hvilken komponent lar strøm passere i kun én retning?',
    options: ['Diode', 'Resistor', 'Kondensator', 'Spole'],
    explanation: 'En diode har en PN-overgang som bare leder strøm i foroverretning. Den brukes blant annet til ensretting av vekselstrøm.',
  },
  {
    question: 'En varmeovn er koblet til 230 V og trekker 2 A. Hva er effekten?',
    options: ['460 W', '115 W', '232 W', '4600 W'],
    explanation: 'P = U × I = 230 V × 2 A = 460 W.',
  },
],
  'elektro-data-vg1-1-2': [
  {
    question: 'Hva beskriver elektrisk effekt?',
    options: ['Hvor mye energi som omsettes per tidsenhet', 'Total energimengde over tid', 'Motstanden i en krets', 'Antall elektroner i en leder'],
    explanation: 'Effekt (P) er energi omsatt per tidsenhet og måles i watt (W). Total energi over tid er derimot W = P × t.',
  },
  {
    question: 'En komponent får 12 V over seg og det går 3 A gjennom den. Hva er effekten?',
    options: ['36 W', '4 W', '15 W', '36 kW'],
    explanation: 'P = U × I = 12 V × 3 A = 36 W.',
  },
  {
    question: 'En ovn på 2 kW står på i 3 timer. Hvor mye energi bruker den?',
    options: ['6 kWh', '5 kWh', '1,5 kWh', '600 kWh'],
    explanation: 'W = P × t = 2 kW × 3 h = 6 kWh.',
  },
  {
    question: 'En panelovn på 1000 W står på i 10 timer. Strømprisen er 1,50 kr/kWh. Hva koster det?',
    options: ['15 kr', '1,50 kr', '150 kr', '10 kr'],
    explanation: 'Energi: 1 kW × 10 h = 10 kWh. Kostnad: 10 kWh × 1,50 kr/kWh = 15 kr.',
  },
  {
    question: 'En motstand på 10 Ω har strømmen 2 A gjennom seg. Hvilken effekt utvikles i motstanden?',
    options: ['40 W', '20 W', '100 W', '400 W'],
    explanation: 'P = R × I² = 10 Ω × (2 A)² = 10 × 4 = 40 W.',
  },
],
  'elektro-data-vg1-1-4': [
  {
    question: 'Hva er likt for alle grener i en parallellkobling?',
    options: ['Spenningen', 'Strømmen', 'Effekten', 'Motstanden'],
    explanation: 'I en parallellkobling er alle komponentene koblet mellom de samme to punktene, så spenningen er lik over alle grener. Strømmen deler seg.',
  },
  {
    question: 'Det går 6 A inn i et knutepunkt med to grener. I den ene grenen går det 2,5 A. Hvor mye går i den andre?',
    options: ['3,5 A', '2,5 A', '6 A', '8,5 A'],
    explanation: 'Kirchhoffs strømlov: strøm inn = strøm ut. 6 A − 2,5 A = 3,5 A.',
  },
  {
    question: 'To motstander på 100 Ω hver kobles i parallell. Hva er ekvivalent motstand?',
    options: ['50 Ω', '200 Ω', '100 Ω', '25 Ω'],
    explanation: 'For n like motstander i parallell: R/n = 100 Ω / 2 = 50 Ω. Parallellkobling gir alltid lavere motstand enn den minste enkeltmotstanden.',
  },
  {
    question: 'En motstand på 6 Ω og en på 3 Ω kobles i parallell. Hva er ekvivalent motstand?',
    options: ['2 Ω', '9 Ω', '4,5 Ω', '3 Ω'],
    explanation: 'R_ekv = (R₁ × R₂) / (R₁ + R₂) = (6 × 3) / (6 + 3) = 18 / 9 = 2 Ω.',
  },
  {
    question: 'Hvilken gren i en parallellkobling får størst strøm?',
    options: ['Grenen med minst motstand', 'Grenen med størst motstand', 'Alle grener får like mye', 'Grenen nærmest batteriet'],
    explanation: 'Med lik spenning over grenene gir I = U/R størst strøm der motstanden er minst.',
  },
],
  'elektro-data-vg1-1-5': [
  {
    question: 'Hva er første steg i systematisk forenkling av en blandet krets?',
    options: ['Identifisere parallellkoblinger og beregne ekvivalent motstand for disse', 'Måle strømmen med multimeter', 'Bytte ut alle motstandene', 'Beregne effekten i hver komponent'],
    explanation: 'Metoden er trinnvis: først forenkles parallellkoblinger til ekvivalente motstander, deretter summeres seriemotstandene.',
  },
  {
    question: 'To motstander på 6 Ω i parallell er koblet i serie med en motstand på 7 Ω. Hva er total motstand?',
    options: ['10 Ω', '13 Ω', '19 Ω', '4 Ω'],
    explanation: '6 Ω ∥ 6 Ω = 3 Ω. I serie med 7 Ω: 3 + 7 = 10 Ω.',
  },
  {
    question: 'Kretsen over (total motstand 10 Ω) kobles til 20 V. Hvor stor er totalstrømmen?',
    options: ['2 A', '0,5 A', '200 A', '10 A'],
    explanation: 'I = U / R = 20 V / 10 Ω = 2 A.',
  },
  {
    question: 'Hva menes med ekvivalent motstand?',
    options: ['Én motstand som kan erstatte en kombinasjon av motstander uten å endre kretsens oppførsel', 'Den største motstanden i kretsen', 'Motstanden i ledningene', 'Summen av alle spenningsfall'],
    explanation: 'Ekvivalent motstand er den ene motstandsverdien som gir samme totalstrøm fra kilden som hele kombinasjonen.',
  },
  {
    question: 'I kretsen over går totalstrømmen 2 A gjennom seriemotstanden på 7 Ω. Hva er spenningsfallet over den?',
    options: ['14 V', '7 V', '20 V', '3,5 V'],
    explanation: 'U = I × R = 2 A × 7 Ω = 14 V. Resten av kildespenningen (6 V) ligger over parallellkoblingen.',
  },
],
  'elektro-data-vg1-1-6': [
  {
    question: 'Hva gjør en kondensator?',
    options: ['Lagrer elektrisk ladning', 'Begrenser strømmen', 'Forsterker signaler', 'Lar strøm gå kun én vei'],
    explanation: 'En kondensator lagrer ladning mellom to ledende plater adskilt av et dielektrikum. Kapasitans måles i farad (F).',
  },
  {
    question: 'Hvilken enhet måles induktans i?',
    options: ['Henry (H)', 'Farad (F)', 'Ohm (Ω)', 'Tesla (T)'],
    explanation: 'Spolens induktans måles i henry (H). Kapasitans måles i farad og motstand i ohm.',
  },
  {
    question: 'Hva er hovedoppgaven til en resistor i en krets?',
    options: ['Å begrense strømmen', 'Å lagre energi i et magnetfelt', 'Å omforme vekselstrøm til likestrøm', 'Å avgi lys'],
    explanation: 'Resistorer begrenser strømmen, deler opp spenning og brukes blant annet som seriemotstand for LED.',
  },
  {
    question: 'En RC-krets har R = 10 kΩ og C = 100 µF. Hva er tidskonstanten τ = R × C?',
    options: ['1 s', '0,1 s', '10 s', '1 ms'],
    explanation: 'τ = 10 000 Ω × 0,0001 F = 1 s. Tidskonstanten angir hvor raskt kondensatoren lades opp.',
  },
  {
    question: 'Hva angir fargebåndene på en resistor?',
    options: ['Motstandsverdien og toleransen', 'Maksimal spenning', 'Produksjonsåret', 'Hvilken vei strømmen skal gå'],
    explanation: 'Fargekoden angir motstandsverdien i ohm og toleransen (nøyaktigheten). Resistorer har ingen polaritet.',
  },
],
  'elektro-data-vg1-1-7': [
  {
    question: 'Hva er det typiske spenningsfallet over en silisiumdiode i foroverretning?',
    options: ['Ca. 0,7 V', 'Ca. 5 V', 'Ca. 0,1 V', 'Ca. 230 V'],
    explanation: 'En silisiumdiode har et spenningsfall på omtrent 0,7 V når den leder i foroverretning.',
  },
  {
    question: 'En LED med spenningsfall 2 V skal kobles til 5 V med strømmen 10 mA. Hvor stor seriemotstand trengs?',
    options: ['300 Ω', '500 Ω', '200 Ω', '30 Ω'],
    explanation: 'R = (U_kilde − U_LED) / I = (5 − 2) V / 0,01 A = 3 / 0,01 = 300 Ω.',
  },
  {
    question: 'Hva er doping av halvledere?',
    options: ['Å tilsette fremmede atomer for å endre ledningsevnen', 'Å varme opp halvlederen', 'Å belegge halvlederen med isolasjon', 'Å koble flere halvledere i serie'],
    explanation: 'Doping er å tilsette fremmedatomer i silisium for å lage N-type (ekstra elektroner) eller P-type (elektronmangel/hull).',
  },
  {
    question: 'Hvilke tre tilkoblinger har en bipolar NPN-transistor?',
    options: ['Base, kollektor og emitter', 'Anode, katode og gate', 'Fase, nøytral og jord', 'Inngang, utgang og skjerm'],
    explanation: 'BJT-transistorer har base (B), kollektor (C) og emitter (E). En NPN slår på når basen får positiv spenning.',
  },
  {
    question: 'Hva kan en transistor brukes til?',
    options: ['Å forsterke signaler eller fungere som elektronisk bryter', 'Å lagre store mengder energi', 'Å måle temperatur direkte', 'Å ensrette vekselstrøm alene'],
    explanation: 'Transistorens to hovedbruksområder er signalforsterkning og elektronisk svitsjing, for eksempel for å styre større laster fra et lite styresignal.',
  },
],
  'elektro-data-vg1-1-8': [
  {
    question: 'Hvilken regel brukes for å finne retningen på magnetfeltet rundt en strømførende leder?',
    options: ['Høyrehåndsregelen', 'Ohms lov', 'Venstrehåndsregelen for spenning', 'Kirchhoffs strømlov'],
    explanation: 'Pek tommelen i strømmens retning – fingrene krummer seg da i magnetfeltets retning. Dette er høyrehåndsregelen.',
  },
  {
    question: 'Hvorfor fungerer en transformator bare med vekselstrøm?',
    options: ['Fordi induksjon krever et magnetfelt som endrer seg', 'Fordi likestrøm har for høy spenning', 'Fordi vekselstrøm er sterkere', 'Fordi spolene smelter av likestrøm'],
    explanation: 'Faradays lov sier at det bare induseres spenning når magnetfeltet endrer seg. Likestrøm gir et konstant felt og dermed ingen induksjon.',
  },
  {
    question: 'En transformator har N₁ = 1000 og N₂ = 100 vindinger. Primærspenningen er 230 V. Hva blir sekundærspenningen?',
    options: ['23 V', '230 V', '2300 V', '130 V'],
    explanation: 'U₂ = U₁ × N₂/N₁ = 230 × 100/1000 = 23 V. Transformatoren transformerer ned med forholdet 10:1.',
  },
  {
    question: 'Hva sier Faradays lov?',
    options: ['En endring i magnetfeltet gjennom en sløyfe induserer en spenning', 'Strøm er proporsjonal med spenning', 'Like poler frastøter hverandre', 'Energien er konstant i en lukket krets'],
    explanation: 'Faradays induksjonslov: en endring i magnetisk fluks gjennom en lukket sløyfe induserer en elektromotorisk spenning (EMK).',
  },
  {
    question: 'Hvordan kan man øke spenningen som induseres i en spole?',
    options: ['Øke antall vindinger i spolen', 'Bruke tykkere ledning', 'Senke temperaturen', 'Koble spolen til jord'],
    explanation: 'Indusert spenning øker med antall vindinger, hvor raskt magnetfeltet endrer seg og spolens areal.',
  },
],
  'elektro-data-vg1-2': [
  {
    question: 'Hva kjennetegner en seriekobling?',
    options: ['Samme strøm går gjennom alle komponentene', 'Samme spenning over alle komponentene', 'Strømmen deler seg mellom grenene', 'Total motstand blir mindre enn minste motstand'],
    explanation: 'I serie er komponentene koblet etter hverandre i én kjede, så samme strøm går gjennom alle. Spenningen fordeler seg.',
  },
  {
    question: 'Tre motstander på 10 Ω, 20 Ω og 30 Ω kobles i serie. Hva er total motstand?',
    options: ['60 Ω', '5,5 Ω', '20 Ω', '6000 Ω'],
    explanation: 'I serie summeres motstandene: 10 + 20 + 30 = 60 Ω.',
  },
  {
    question: 'Hva sier Kirchhoffs spenningslov (KVL)?',
    options: ['Summen av spenningsfallene i en lukket krets er lik kildespenningen', 'Strømmen er lik i alle punkter', 'Spenningen dobles i hvert knutepunkt', 'Motstanden er konstant i en lukket krets'],
    explanation: 'KVL: summen av alle spenninger i en lukket sløyfe er null – energien fra kilden brukes opp som spenningsfall over komponentene.',
  },
  {
    question: 'Det går 4 A inn i et knutepunkt. Ut går 1,5 A i én gren. Hvor mye går ut i den andre grenen?',
    options: ['2,5 A', '1,5 A', '4 A', '5,5 A'],
    explanation: 'Kirchhoffs strømlov: Σ I_inn = Σ I_ut, så 4 − 1,5 = 2,5 A.',
  },
  {
    question: 'Et 12 V batteri driver to like motstander i serie. Hva er spenningen over hver av dem?',
    options: ['6 V', '12 V', '24 V', '3 V'],
    explanation: 'I serie deler spenningen seg etter motstandsverdiene. To like motstander får halvparten hver: 12 V / 2 = 6 V.',
  },
],
  'elektro-data-vg1-2-3': [
  {
    question: 'Hva er resultatet av det boolske uttrykket A · 1?',
    options: ['A', '1', '0', 'NOT A'],
    explanation: 'Identitetsregelen: A AND 1 = A. Utgangen følger A når den andre inngangen alltid er 1.',
  },
  {
    question: 'Hva er resultatet av A + 1 i boolsk algebra?',
    options: ['1', 'A', '0', 'NOT A'],
    explanation: 'Nullregelen/enhetsregelen: A OR 1 = 1, fordi OR gir 1 så snart minst én inngang er 1.',
  },
  {
    question: 'Hva sier De Morgans første lov?',
    options: ['NOT (A · B) = NOT A + NOT B', 'NOT (A · B) = NOT A · NOT B', 'A · B = A + B', 'NOT (A + B) = A · B'],
    explanation: 'De Morgan: invertering av et AND-uttrykk gir OR av de inverterte variablene – NOT(A AND B) = (NOT A) OR (NOT B).',
  },
  {
    question: 'Når gir AND-operasjonen A · B utgangsverdien 1?',
    options: ['Bare når både A og B er 1', 'Når minst én av A og B er 1', 'Når A og B er forskjellige', 'Aldri'],
    explanation: 'AND gir 1 kun når alle inngangene er 1. I sannhetstabellen er det bare raden A=1, B=1 som gir utgang 1.',
  },
  {
    question: 'Hva kan uttrykket A + A forenkles til?',
    options: ['A', '2A', '1', '0'],
    explanation: 'Idempotensregelen: A OR A = A. I boolsk algebra finnes ikke «2A» – verdiene er bare 0 og 1.',
  },
],
  'elektro-data-vg1-2-4': [
  {
    question: 'Hva gjør en multiplekser (MUX)?',
    options: ['Velger én av flere innganger og sender den til utgangen', 'Inverterer alle inngangssignalene', 'Legger sammen to binærtall', 'Lagrer én bit'],
    explanation: 'En MUX er en digital velger: velgerinngangen (S) bestemmer hvilken datainngang som kobles til utgangen.',
  },
  {
    question: 'Hvor mange utganger er aktive samtidig på en dekoder?',
    options: ['Én', 'Alle', 'To', 'Halvparten'],
    explanation: 'En dekoder aktiverer kun den ene utgangen som tilsvarer det binære inngangssignalet.',
  },
  {
    question: 'En halvadder får inngangene A = 1 og B = 1. Hva blir sum (S) og mente (C)?',
    options: ['S = 0, C = 1', 'S = 1, C = 0', 'S = 1, C = 1', 'S = 0, C = 0'],
    explanation: '1 + 1 = 10₂. Sum-biten blir 0 og mente-biten (carry) blir 1.',
  },
  {
    question: 'Hva skiller en heladder fra en halvadder?',
    options: ['Heladderen har i tillegg en inngang for innkommende mente (carry in)', 'Heladderen kan bare addere null', 'Halvadderen har flere innganger', 'Heladderen gir ingen mente ut'],
    explanation: 'Heladderen adderer A, B og Cᵢₙ. Det gjør at flere heladdere kan kjedes for å addere flersifrede binærtall.',
  },
  {
    question: 'Hvilken logisk port gir sum-biten i en halvadder?',
    options: ['XOR', 'AND', 'OR', 'NAND'],
    explanation: 'Sum-biten er 1 når inngangene er forskjellige – akkurat som XOR. Mente-biten lages med en AND-port.',
  },
],
  'elektro-data-vg1-2-6': [
  {
    question: 'Hvilke verdier kan en 3-bits binær teller telle gjennom?',
    options: ['0 til 7', '0 til 8', '1 til 8', '0 til 3'],
    explanation: 'En n-bits teller teller fra 0 til 2ⁿ − 1. Med 3 bit: 0 til 2³ − 1 = 7, altså 8 tilstander.',
  },
  {
    question: 'Hva er den høyeste verdien en 4-bits teller kan vise?',
    options: ['15', '16', '8', '4'],
    explanation: '2⁴ − 1 = 15. Etter 15 begynner telleren på 0 igjen.',
  },
  {
    question: 'Hva gjør et skiftregister?',
    options: ['Flytter data én posisjon for hver klokkepuls', 'Teller antall klokkepulser', 'Forsterker klokkesignalet', 'Konverterer analoge signaler til digitale'],
    explanation: 'Et skiftregister er en rekke flip-flops der innholdet skyves ett trinn videre for hver klokkepuls.',
  },
  {
    question: 'Hva betyr SIPO for et skiftregister?',
    options: ['Serie inn, parallell ut', 'Serie inn, serie ut', 'Parallell inn, serie ut', 'Parallell inn, parallell ut'],
    explanation: 'SIPO (Serial In, Parallel Out) tar imot data bit for bit og leser dem ut på flere utganger samtidig – nyttig for seriell-til-parallell-konvertering.',
  },
  {
    question: 'Hva er byggesteinen i tellere og skiftregistre?',
    options: ['Flip-flops (vipper)', 'Resistorer', 'Dioder', 'Transformatorer'],
    explanation: 'Tellere og registre er sekvensielle kretser bygget av flip-flops, som hver kan lagre én bit.',
  },
],
  'elektro-data-vg1-2-7': [
  {
    question: 'Hva gjør en AD-omformer (ADC)?',
    options: ['Konverterer et analogt signal til digitale verdier', 'Konverterer digitale tall til analog spenning', 'Forsterker analoge signaler', 'Filtrerer bort støy'],
    explanation: 'En ADC sampler det analoge signalet og kvantiserer det til diskrete digitale verdier.',
  },
  {
    question: 'Hva sier Nyquist-teoremet?',
    options: ['Samplingsfrekvensen må være minst dobbelt så høy som høyeste signalfrekvens', 'Samplingsfrekvensen må være lik signalfrekvensen', 'Oppløsningen må være minst 8 bit', 'Signalet må forsterkes før sampling'],
    explanation: 'fₛ ≥ 2 × fₘₐₓ. Sampler man for sjelden, oppstår aliasing og informasjon går tapt.',
  },
  {
    question: 'Et lydsignal har høyeste frekvens 10 kHz. Hva er minste samplingsfrekvens etter Nyquist?',
    options: ['20 kHz', '10 kHz', '5 kHz', '40 kHz'],
    explanation: 'fₛ ≥ 2 × 10 kHz = 20 kHz.',
  },
  {
    question: 'Hvor mange nivåer kan en 8-bits ADC skille mellom?',
    options: ['256', '8', '128', '1024'],
    explanation: '2⁸ = 256 ulike nivåer (0–255). En 10-bits ADC ville gitt 1024 nivåer.',
  },
  {
    question: 'Hva kalles feilen som oppstår når samplingsfrekvensen er for lav?',
    options: ['Aliasing', 'Kvantisering', 'Klipping', 'Induksjon'],
    explanation: 'Aliasing gjør at høye frekvenser «forkles» som lavere frekvenser i det samplede signalet. Det unngås ved å følge Nyquist-teoremet.',
  },
],
  'elektro-data-vg1-3': [
  {
    question: 'Hva er verdien av det binære tallet 1011₂ i titallsystemet?',
    options: ['11', '13', '9', '1011'],
    explanation: '1×8 + 0×4 + 1×2 + 1×1 = 8 + 0 + 2 + 1 = 11.',
  },
  {
    question: 'Hva er FF₁₆ i titallsystemet?',
    options: ['255', '256', '161', '15'],
    explanation: 'F = 15, så FF₁₆ = 15×16 + 15 = 240 + 15 = 255. Det tilsvarer 11111111₂.',
  },
  {
    question: 'Hva kjennetegner et digitalt signal?',
    options: ['Det har bare to nivåer: 0 og 1', 'Det kan ha alle verdier i et område', 'Det er alltid sterkere enn analoge signaler', 'Det kan ikke overføres i kabler'],
    explanation: 'Digitale signaler er binære (høy/lav). Analoge signaler kan derimot ha hvilken som helst verdi i et område.',
  },
  {
    question: 'Hva er forskjellen på OR og XOR når begge inngangene er 1?',
    options: ['OR gir 1, XOR gir 0', 'Begge gir 1', 'OR gir 0, XOR gir 1', 'Begge gir 0'],
    explanation: 'OR gir 1 når minst én inngang er 1. XOR gir bare 1 når inngangene er forskjellige – ved 1 og 1 gir XOR 0.',
  },
  {
    question: 'En dør skal bare åpnes når BÅDE riktig kode OG nøkkel brukes. Hvilken logisk port beskriver dette?',
    options: ['AND-port', 'OR-port', 'NOT-port', 'XOR-port'],
    explanation: 'AND gir 1 bare når alle inngangene er 1 – begge betingelsene må være oppfylt samtidig.',
  },
],
  'elektro-data-vg1-3-2': [
  {
    question: 'Hvilken operator brukes for å tilordne en verdi til en variabel i Python?',
    options: ['=', '==', '<-', '->'],
    explanation: 'Tilordningsoperatoren er =, for eksempel alder = 17. Operatoren == brukes derimot til å sammenligne to verdier.',
  },
  {
    question: 'Hvilken datatype har verdien 22.5 i Python?',
    options: ['float', 'int', 'str', 'bool'],
    explanation: 'Tall med desimaler er float. Heltall er int, tekst er str og sannhetsverdier er bool.',
  },
  {
    question: 'Hva blir resultatet av 7 % 3 i Python?',
    options: ['1', '2', '2.33', '21'],
    explanation: 'Modulo-operatoren % gir resten etter heltallsdivisjon: 7 = 2×3 + 1, så resten er 1.',
  },
  {
    question: 'Hva returnerer input()-funksjonen alltid?',
    options: ['En tekststreng (str)', 'Et heltall (int)', 'Et desimaltall (float)', 'En sannhetsverdi (bool)'],
    explanation: 'input() returnerer alltid str. Skal du regne med svaret, må du konvertere med int() eller float().',
  },
  {
    question: 'Hva blir resultatet av uttrykket True and False?',
    options: ['False', 'True', '0.5', 'En feilmelding'],
    explanation: 'Den logiske operatoren and krever at begge sidene er True for å gi True. True and False gir derfor False.',
  },
],
  'elektro-data-vg1-3-3': [
  {
    question: 'Hvilke tall skriver denne koden ut: for i in range(5): print(i)',
    options: ['0, 1, 2, 3, 4', '1, 2, 3, 4, 5', '0, 1, 2, 3, 4, 5', '5, 4, 3, 2, 1'],
    explanation: 'range(5) gir tallene fra 0 til og med 4 – startverdien er 0 og sluttverdien 5 er ikke med.',
  },
  {
    question: 'Hva gjør nøkkelordet break i en løkke?',
    options: ['Avbryter løkken umiddelbart og hopper ut', 'Hopper over resten av gjeldende iterasjon', 'Starter løkken på nytt', 'Pauser programmet i ett sekund'],
    explanation: 'break avslutter hele løkken. continue hopper derimot bare over resten av den gjeldende iterasjonen.',
  },
  {
    question: 'Hvor lenge kjører en while-løkke?',
    options: ['Så lenge betingelsen er sann', 'Et fast antall ganger bestemt av range()', 'Til brukeren trykker Enter', 'Nøyaktig én gang'],
    explanation: 'while gjentar koden så lenge betingelsen evalueres til True. Glemmer man å oppdatere betingelsen, får man en evig løkke.',
  },
  {
    question: 'Hva brukes elif til i en if-setning?',
    options: ['Å teste en ny betingelse hvis de foregående var usanne', 'Å avslutte if-setningen', 'Å gjenta if-testen', 'Å invertere betingelsen'],
    explanation: 'elif (else if) lar deg teste flere betingelser etter tur. else fanger opp alt som ikke traff noen av betingelsene.',
  },
  {
    question: 'En ytre løkke kjører 3 ganger og en indre løkke kjører 4 ganger per runde. Hvor mange ganger kjører koden inne i den indre løkken totalt?',
    options: ['12', '7', '4', '3'],
    explanation: 'I nøstede løkker multipliseres antall iterasjoner: 3 × 4 = 12.',
  },
],
  'elektro-data-vg1-3-4': [
  {
    question: 'Hvilket nøkkelord brukes for å definere en funksjon i Python?',
    options: ['def', 'function', 'fun', 'define'],
    explanation: 'Funksjoner defineres med def, for eksempel def adder(a, b):.',
  },
  {
    question: 'Hva gjør return i en funksjon?',
    options: ['Sender en verdi tilbake til den som kalte funksjonen', 'Skriver verdien til skjermen', 'Starter funksjonen på nytt', 'Sletter funksjonens variabler'],
    explanation: 'return avslutter funksjonen og gir resultatet tilbake til kallstedet. print() viser bare verdien på skjermen.',
  },
  {
    question: 'Hva er forskjellen på en parameter og et argument?',
    options: ['Parameteren står i funksjonsdefinisjonen, argumentet er verdien som sendes inn ved kall', 'De er to navn på nøyaktig samme ting i all kode', 'Argumentet står i definisjonen, parameteren sendes inn', 'Parametre finnes bare i matematikk'],
    explanation: 'I def adder(a, b) er a og b parametre. I kallet adder(2, 3) er 2 og 3 argumenter.',
  },
  {
    question: 'Funksjonen er definert som def hilsen(navn, sprk="norsk"). Hva er sprk her?',
    options: ['En parameter med standardverdi', 'En global variabel', 'En konstant', 'En returverdi'],
    explanation: 'sprk har standardverdien "norsk" og kan utelates ved kall. Da brukes standardverdien.',
  },
  {
    question: 'En variabel opprettes inne i en funksjon. Hvor er den tilgjengelig?',
    options: ['Bare inne i funksjonen (lokalt scope)', 'I hele programmet', 'I alle funksjoner som kalles etterpå', 'Bare i if-setninger'],
    explanation: 'Lokale variabler finnes bare innenfor funksjonen de er opprettet i. Variabler utenfor funksjoner er globale.',
  },
],
  'elektro-data-vg1-3-5': [
  {
    question: 'Hvilken indeks har det første elementet i en Python-liste?',
    options: ['0', '1', '-1', 'Den velger du selv'],
    explanation: 'Python-lister er nullindeksert: liste[0] er det første elementet. liste[-1] er det siste.',
  },
  {
    question: 'Hva er den viktigste forskjellen på en tuppel og en liste?',
    options: ['En tuppel kan ikke endres etter at den er opprettet', 'En tuppel kan bare inneholde tall', 'En liste kan ikke itereres', 'En tuppel er alltid sortert'],
    explanation: 'Tupler er uforanderlige (immutable) og lages med (), mens lister lages med [] og kan endres.',
  },
  {
    question: 'Hvordan lagrer en ordbok (dictionary) data?',
    options: ['Som nøkkel-verdi-par', 'Som en sortert tallrekke', 'Som tegn i en streng', 'Som binære filer'],
    explanation: 'Ordbøker lages med {} og slår opp verdier via nøkler, f.eks. sensor["verdi"].',
  },
  {
    question: 'Hva returnerer len([2, 4, 6])?',
    options: ['3', '12', '6', '2'],
    explanation: 'len() gir antall elementer i listen. Listen [2, 4, 6] har 3 elementer.',
  },
  {
    question: 'Hva skriver denne koden ut: temperaturer = [22.5, 23.1, 21.8] etterfulgt av print(temperaturer[1])?',
    options: ['23.1', '22.5', '21.8', 'En feilmelding'],
    explanation: 'Indeks 1 er det andre elementet, siden indekseringen starter på 0.',
  },
],
  'elektro-data-vg1-3-7': [
  {
    question: 'Hvor mange ganger kjører setup()-funksjonen i et Arduino-program?',
    options: ['Én gang ved oppstart', 'Kontinuerlig i evig løkke', 'Én gang per sekund', 'Aldri – den er valgfri'],
    explanation: 'setup() kjører én gang ved oppstart og brukes til initialisering. loop() gjentas deretter uendelig.',
  },
  {
    question: 'Hva er PWM (pulsbreddemodulasjon)?',
    options: ['En teknikk der en digital utgang slås raskt av og på for å simulere analog spenning', 'En metode for å måle motstand', 'En trådløs kommunikasjonsprotokoll', 'Et filter som fjerner støy'],
    explanation: 'PWM varierer hvor stor andel av tiden signalet er høyt. analogWrite() bruker PWM til å dimme LED eller styre motorhastighet.',
  },
  {
    question: 'Hvilket verdiområde returnerer analogRead() på en Arduino Uno?',
    options: ['0 til 1023', '0 til 255', '0 til 100', '0 til 5'],
    explanation: 'ADC-en er 10-bits, så analogRead() gir 0–1023, der 0 = 0 V og 1023 = 5 V.',
  },
  {
    question: 'Hva gjør pinMode(13, OUTPUT)?',
    options: ['Setter pinne 13 til å fungere som utgang', 'Setter pinne 13 til 13 V', 'Leser verdien på pinne 13', 'Slår av pinne 13'],
    explanation: 'pinMode() konfigurerer en pinne som inngang (INPUT) eller utgang (OUTPUT) og kalles vanligvis i setup().',
  },
  {
    question: 'Hva brukes Serial Monitor til?',
    options: ['Å vise tekst og verdier som Arduinoen sender over seriell kommunikasjon', 'Å programmere mikrokontrolleren trådløst', 'Å måle strømforbruket', 'Å simulere kretser uten maskinvare'],
    explanation: 'Serial Monitor viser data sendt med Serial.print() og er et viktig verktøy for feilsøking av Arduino-programmer.',
  },
],
  'elektro-data-vg1-3-8': [
  {
    question: 'Hvilken kommunikasjonsmodell bruker MQTT?',
    options: ['Publish/subscribe via en broker', 'Direkte kabel mellom to enheter', 'Ring-topologi', 'Punkt-til-punkt uten mellomledd'],
    explanation: 'MQTT-klienter publiserer meldinger til emner (topics) hos en broker, som videresender til alle som abonnerer på emnet.',
  },
  {
    question: 'Hva skiller ESP32 fra en vanlig Arduino Uno?',
    options: ['ESP32 har innebygd WiFi og Bluetooth', 'ESP32 har ingen digitale pinner', 'ESP32 kan ikke programmeres i Arduino IDE', 'ESP32 må kobles til strømnettet'],
    explanation: 'ESP32 (og ESP8266) er mikrokontrollere med innebygd WiFi, noe som gjør dem velegnet for IoT-prosjekter.',
  },
  {
    question: 'Hva er en «broker» i MQTT?',
    options: ['En server som mottar og videresender meldinger', 'En sensor som måler temperatur', 'Et batteri for IoT-enheter', 'En type antenne'],
    explanation: 'Brokeren er midtpunktet i MQTT: den tar imot publiserte meldinger og sender dem videre til abonnentene.',
  },
  {
    question: 'Hva står IoT for?',
    options: ['Internet of Things – ting koblet til internett', 'Input/Output Transfer', 'Internal Operating Temperature', 'Integrated Online Tools'],
    explanation: 'IoT (tingenes internett) er fysiske enheter med sensorer og nettverkstilkobling som kan samle og dele data.',
  },
  {
    question: 'Hvorfor er MQTT godt egnet for IoT-enheter?',
    options: ['Protokollen er lettvekts og krever lite båndbredde og strøm', 'Den krever kraftige servere hos hver enhet', 'Den fungerer bare i kablede nettverk', 'Den sender alltid video i høy oppløsning'],
    explanation: 'MQTT er designet for små, batteridrevne enheter med begrenset båndbredde – meldingene har svært lite overhead.',
  },
],
  'elektro-data-vg1-3-9': [
  {
    question: 'Hva kjennetegner en syntaksfeil?',
    options: ['Koden bryter språkets regler, og programmet starter ikke', 'Programmet kjører, men gir feil svar', 'Programmet krasjer midt i kjøringen', 'Programmet bruker for mye minne'],
    explanation: 'Syntaksfeil (f.eks. manglende kolon) oppdages før kjøring. Logiske feil gir feil resultat, og kjøretidsfeil krasjer under kjøring.',
  },
  {
    question: 'Et program kjører uten feilmeldinger, men gir feil svar. Hvilken type feil er dette?',
    options: ['Logisk feil', 'Syntaksfeil', 'Kjøretidsfeil', 'Maskinvarefeil'],
    explanation: 'Logiske feil er feil i tankegangen/algoritmen. Programmet kjører fint, men resultatet blir galt.',
  },
  {
    question: 'Hva er print-debugging?',
    options: ['Å legge inn print()-setninger for å se verdier underveis i programmet', 'Å skrive ut koden på papir', 'Å slette alle print()-setninger', 'Å kjøre programmet baklengs'],
    explanation: 'Ved å skrive ut variabelverdier på strategiske steder kan man finne ut hvor programmet oppfører seg annerledes enn forventet.',
  },
  {
    question: 'Hva gjør assert i Python?',
    options: ['Stopper programmet med feilmelding hvis en betingelse ikke er sann', 'Skriver ut en advarsel og fortsetter', 'Retter feilen automatisk', 'Kommenterer ut en kodelinje'],
    explanation: 'assert betingelse brukes i testing: er betingelsen False, kastes en AssertionError. Slik kan man teste at funksjoner gir riktige svar.',
  },
  {
    question: 'Hva er det første steget i systematisk feilsøking av et program?',
    options: ['Lese feilmeldingen nøye', 'Skrive om hele programmet', 'Restarte datamaskinen', 'Fjerne all kode og starte på nytt'],
    explanation: 'Feilmeldingen (traceback) forteller hvilken fil, linje og feiltype det gjelder – det er alltid startpunktet.',
  },
],

};

export default quizData_elektroDataVg1;
