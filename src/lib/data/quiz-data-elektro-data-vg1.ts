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

  'elektro-data-vg1-4': [
  {
    question: 'Hvilken datatype passer best for å lagre verdien 22.5 i Python?',
    options: ['Desimaltall (float)', 'Heltall (int)', 'Tekst (string)', 'Boolsk (bool)'],
    explanation: '22.5 har desimaler og lagres som et desimaltall (float). Heltall (int) er for tall uten desimaler.',
  },
  {
    question: 'Hva blir resultatet av 7 % 3 i Python?',
    options: ['1', '2', '3', '21'],
    explanation: 'Modulo (%) gir resten ved heltallsdivisjon. 7 delt på 3 er 2 med rest 1, så 7 % 3 = 1.',
  },
  {
    question: 'Hva blir verdien av kan_kjore = (alder >= 18) and har_lappen når alder = 17 og har_lappen = False?',
    options: ['False', 'True', '17', 'En feilmelding'],
    explanation: 'and krever at begge er sanne. alder >= 18 er False (17 < 18), så hele uttrykket blir False.',
  },
  {
    question: 'Hvor mange ganger skriver løkken for i in range(5): print(i) ut noe?',
    options: ['5 ganger (0,1,2,3,4)', '6 ganger (0–5)', '4 ganger (1–4)', '1 gang'],
    explanation: 'range(5) gir tallene 0,1,2,3,4 – altså 5 verdier. Den siste verdien er 4, ikke 5.',
  },
  {
    question: 'Når bør du velge en while-løkke fremfor en for-løkke?',
    options: ['Når du ikke vet på forhånd hvor mange gjentakelser som trengs', 'Når du vet nøyaktig antall gjentakelser', 'Når du skal lagre tekst', 'Når du skal definere en variabel'],
    explanation: 'For-løkker passer når antallet er kjent på forhånd. While-løkker kjører så lenge en betingelse er sann – nyttig når antallet er ukjent.',
  },
],

  'elektro-data-vg1-4-2': [
  {
    question: 'Hvor mange lag har OSI-modellen?',
    options: ['7', '4', '5', '8'],
    explanation: 'OSI-modellen har 7 lag, fra fysisk lag (1) nederst til applikasjonslaget (7) øverst. TCP/IP-modellen har til sammenligning 4 lag.',
  },
  {
    question: 'På hvilket OSI-lag jobber IP-adressering og ruting?',
    options: ['Nettverkslaget (lag 3)', 'Transportlaget (lag 4)', 'Datalinklaget (lag 2)', 'Applikasjonslaget (lag 7)'],
    explanation: 'IP-adresser og ruting hører til nettverkslaget (lag 3). MAC-adresser ligger på lag 2, og TCP/UDP-porter på lag 4.',
  },
  {
    question: 'Hva kalles prosessen der data pakkes inn med en header for hvert lag på vei nedover protokollstakken?',
    options: ['Innkapsling (encapsulation)', 'Ruting', 'Kvantisering', 'Modulering'],
    explanation: 'Innkapsling legger til header-informasjon for hvert lag: segment (TCP) → pakke (IP) → ramme (Ethernet).',
  },
  {
    question: 'Hvilket OSI-lag legger til avsender- og mottaker-IP-adresse?',
    options: ['Lag 3 (nettverkslaget)', 'Lag 2 (datalinklaget)', 'Lag 4 (transportlaget)', 'Lag 7 (applikasjonslaget)'],
    explanation: 'IP-adresser legges til på nettverkslaget (lag 3). Transportlaget (lag 4) legger til portnumre, datalinklaget (lag 2) legger til MAC-adresser.',
  },
  {
    question: 'Hvor mange lag har TCP/IP-modellen?',
    options: ['4', '7', '5', '3'],
    explanation: 'TCP/IP-modellen har 4 lag: applikasjon, transport, internett og nettverkstilgang. Den er en forenkling av OSIs 7 lag.',
  },
],

  'elektro-data-vg1-4-3': [
  {
    question: 'Hvor mange bit består en IPv4-adresse av?',
    options: ['32 bit', '64 bit', '128 bit', '16 bit'],
    explanation: 'En IPv4-adresse er 32 bit, delt i fire oktetter à 8 bit. IPv6 bruker derimot 128 bit.',
  },
  {
    question: 'Hva er det høyeste tallet en enkelt oktett i en IPv4-adresse kan ha?',
    options: ['255', '256', '128', '999'],
    explanation: 'Hver oktett er 8 bit og kan ha verdier fra 0 til 255 (2⁸ = 256 verdier, dvs. 0–255).',
  },
  {
    question: 'Hva betyr CIDR-notasjonen /24?',
    options: ['Subnettmaske 255.255.255.0 (24 nettverksbit)', 'Subnettmaske 255.255.0.0', '24 verter i nettverket', 'IP-adresse nummer 24'],
    explanation: '/24 betyr at de 24 første bitene er nettverksdel, altså subnettmaske 255.255.255.0.',
  },
  {
    question: 'En maskin har IP 10.20.30.40 med subnettmaske 255.255.0.0. Hva er nettverksadressen?',
    options: ['10.20.0.0', '10.20.30.0', '10.0.0.0', '10.20.30.40'],
    explanation: 'Binær AND beholder oktettene der masken er 255 og nuller ut resten: 10.20 beholdes, 30 og 40 blir 0 → 10.20.0.0.',
  },
  {
    question: 'Hva er hovedoppgaven til DNS?',
    options: ['Oversette domenenavn til IP-adresser', 'Tildele IP-adresser automatisk', 'Kryptere nettverkstrafikk', 'Måle nettverkshastighet'],
    explanation: 'DNS (Domain Name System) oversetter navn som nrk.no til IP-adresser. Automatisk tildeling av IP gjøres av DHCP.',
  },
],

  'elektro-data-vg1-4-4': [
  {
    question: 'Hvilken offisiell standard ligger bak WiFi?',
    options: ['IEEE 802.11', 'IEEE 802.3', 'IEEE 1394', 'RS-232'],
    explanation: 'WiFi er standardisert som IEEE 802.11. IEEE 802.3 er derimot standarden for kablet Ethernet.',
  },
  {
    question: 'Hvilket frekvensbånd har best gjennomtrenging gjennom vegger og tak?',
    options: ['2,4 GHz', '5 GHz', '60 GHz', '10 GHz'],
    explanation: '2,4 GHz har lengre bølgelengde og trenger bedre gjennom byggematerialer enn 5 GHz, men gir lavere hastighet.',
  },
  {
    question: 'Hvilken trådløs protokoll er spesielt designet for smarthus med mesh-nettverk og svært lavt strømforbruk?',
    options: ['Zigbee', 'WEP', 'UART', 'HTTPS'],
    explanation: 'Zigbee bruker mesh og svært lavt strømforbruk, slik at batteridrevne sensorer kan vare i flere år.',
  },
  {
    question: 'Hvilken WiFi-sikkerhetsstandard skal aldri brukes fordi den kan knekkes på minutter?',
    options: ['WEP', 'WPA2', 'WPA3', 'AES'],
    explanation: 'WEP har for kort nøkkel og gjenbruker initialiseringsvektoren, og regnes som usikker. WPA2 og WPA3 er trygge.',
  },
  {
    question: 'Hva er en typisk rekkevidde for Bluetooth Low Energy (BLE)?',
    options: ['Rundt 50 m', 'Rundt 5 km', 'Rundt 500 m', 'Rundt 100 km'],
    explanation: 'BLE (Bluetooth 4.0) har kort rekkevidde, typisk rundt 50 m, og lavt strømforbruk – egnet for sensorer og fitnesstrackere.',
  },
],

  'elektro-data-vg1-4-5': [
  {
    question: 'Hva kjennetegner UART-kommunikasjon?',
    options: ['Asynkron – sender og mottaker må være enige om baudrate', 'Synkron med felles klokkesignal', 'Bruker adresser i stedet for select-linjer', 'Krever fire datalinjer'],
    explanation: 'UART er asynkron og bruker ikke klokkesignal. Derfor må baudraten (hastigheten) settes likt på begge sider.',
  },
  {
    question: 'Hvor mange ledere bruker SPI-protokollen (uten flere slaver)?',
    options: ['4 (MOSI, MISO, SCK, SS)', '2 (SDA, SCL)', '3 (TX, RX, GND)', '1 (kun data)'],
    explanation: 'SPI bruker 4 ledere: MOSI, MISO, SCK (klokke) og SS/CS (chip select). I2C bruker derimot bare 2.',
  },
  {
    question: 'Hvilke to ledere bruker I2C?',
    options: ['SDA og SCL', 'TX og RX', 'MOSI og MISO', 'D+ og D−'],
    explanation: 'I2C bruker SDA (data) og SCL (klokke). Enhetene velges med adresser i stedet for egne select-linjer.',
  },
  {
    question: 'Hvordan velger en I2C-master hvilken enhet den skal kommunisere med?',
    options: ['Den sender enhetens adresse på SDA-linjen', 'Den setter en SS-linje LOW', 'Den endrer baudraten', 'Den krysser TX og RX'],
    explanation: 'I I2C har hver enhet en unik adresse. Masteren sender adressen, og bare enheten med den adressen svarer.',
  },
  {
    question: 'I UART-kobling mellom to enheter, hvordan kobles TX og RX?',
    options: ['Krysses: TX på den ene til RX på den andre', 'Kobles rett: TX til TX, RX til RX', 'Begge kobles til GND', 'De kobles til samme klokkelinje'],
    explanation: 'TX (sender) på den ene kobles til RX (mottaker) på den andre – linjene krysses. GND må også kobles felles.',
  },
],

  'elektro-data-vg1-4-6': [
  {
    question: 'På hvilket OSI-lag opererer en svitsj (switch)?',
    options: ['Lag 2 (datalinklaget)', 'Lag 3 (nettverkslaget)', 'Lag 1 (fysisk lag)', 'Lag 7 (applikasjonslaget)'],
    explanation: 'En svitsj jobber på lag 2 og videresender rammer basert på MAC-adresser. En ruter jobber på lag 3 med IP-adresser.',
  },
  {
    question: 'Hva er hovedoppgaven til en ruter?',
    options: ['Koble sammen forskjellige nettverk og videresende pakker mellom dem', 'Koble enheter sammen i samme LAN', 'Sende ut WiFi-signal', 'Lagre data lokalt'],
    explanation: 'En ruter (lag 3) kobler sammen ulike nettverk og velger beste vei mellom dem. En svitsj kobler enheter innenfor samme nettverk.',
  },
  {
    question: 'Hvilken kabelkategori støtter 10 Gbps over fulle 100 meter og er et fremtidssikkert valg for kontorbygg?',
    options: ['Cat 6a', 'Cat 5e', 'Cat 5', 'Cat 3'],
    explanation: 'Cat 6a støtter 10 Gbps over 100 m. Cat 5e klarer kun 1 Gbps, og Cat 6 klarer 10 Gbps bare på korte strekk.',
  },
  {
    question: 'Hva overfører en fiberoptisk kabel data som?',
    options: ['Lys gjennom en glasskjerne', 'Elektriske signaler i kobber', 'Radiobølger', 'Magnetiske pulser'],
    explanation: 'Fiber overfører data som lyspulser gjennom en tynn glasskjerne, noe som gir høy hastighet over lange avstander.',
  },
  {
    question: 'Når PC-A sender en fil til PC-B i samme lokale nettverk, hvilket utstyr videresender rammen?',
    options: ['Svitsjen, basert på MAC-adresse', 'Ruteren, basert på IP-adresse', 'Aksesspunktet', 'DNS-serveren'],
    explanation: 'Innenfor samme nettverk håndterer svitsjen trafikken via MAC-adresser. Ruteren er ikke involvert i lokal trafikk.',
  },
],

  'elektro-data-vg1-5': [
  {
    question: 'Hva er et LAN?',
    options: ['Et lokalt nettverk, f.eks. hjemme eller på en skole', 'Et globalt nettverk over store avstander', 'Et nettverk rundt én person (Bluetooth)', 'Et trådløst mobilnett'],
    explanation: 'LAN (Local Area Network) er et lokalt nettverk i én bygning. WAN dekker store avstander, og PAN er rundt én person.',
  },
  {
    question: 'Hvilken fordel har stjernetopologi fremfor busstopologi?',
    options: ['Feil på én enhet påvirker ikke de andre', 'Den bruker mindre kabel', 'Ett kabelbrudd stopper hele nettverket', 'Den trenger ingen sentral enhet'],
    explanation: 'I stjernetopologi er hver enhet koblet til en sentral switch, så feil isoleres. I busstopologi stopper hele nettet ved kabelbrudd.',
  },
  {
    question: 'Hva er den viktigste forskjellen mellom TCP og UDP?',
    options: ['TCP garanterer levering, UDP gjør det ikke', 'UDP garanterer levering, TCP gjør det ikke', 'TCP er trådløst, UDP er kablet', 'De er identiske'],
    explanation: 'TCP er pålitelig og bekrefter levering (brukes til nettsider, e-post). UDP er raskere uten garanti (brukes til streaming og spill).',
  },
  {
    question: 'Hvilken trådløs teknologi passer best for trådløse hodetelefoner til telefonen?',
    options: ['Bluetooth', 'Wi-Fi', 'NFC', 'LoRa'],
    explanation: 'Bluetooth har kort rekkevidde og lavt strømforbruk, ideelt for hodetelefoner. NFC har for kort rekkevidde, og Wi-Fi er overkill.',
  },
  {
    question: 'Hva er internett et eksempel på?',
    options: ['WAN (Wide Area Network)', 'LAN (Local Area Network)', 'PAN (Personal Area Network)', 'En busstopologi'],
    explanation: 'Internett er det største WAN – et nettverk som forbinder mange LAN over hele verden.',
  },
],

  'elektro-data-vg1-5-3': [
  {
    question: 'Hva omdanner en vindturbin?',
    options: ['Kinetisk energi i vinden til elektrisk energi', 'Solenergi til varme', 'Kjemisk energi til elektrisitet', 'Vannenergi til bevegelse'],
    explanation: 'Vindturbinen fanger vindens bevegelsesenergi (kinetisk energi) og omdanner den til elektrisk energi via en generator.',
  },
  {
    question: 'Sveipearealet til en vindturbin med rotordiameter 90 m er ca.:',
    options: ['6362 m²', '8100 m²', '283 m²', '90 m²'],
    explanation: 'A = π × r² = π × 45² = π × 2025 ≈ 6362 m². Radius er halve diameteren, altså 45 m.',
  },
  {
    question: 'Et hus bruker 20 000 kWh til oppvarming. Med en varmepumpe med COP = 3, hvor mye strøm trengs?',
    options: ['Ca. 6 667 kWh', 'Ca. 60 000 kWh', 'Ca. 13 333 kWh', 'Ca. 20 000 kWh'],
    explanation: 'Forbruk = varmebehov / COP = 20 000 / 3 ≈ 6 667 kWh. Resten (ca. 13 333 kWh) hentes gratis fra omgivelsene.',
  },
  {
    question: 'Hvorfor er energilagring viktig for fornybar energi?',
    options: ['Fordi fornybar energi ikke alltid produseres når den trengs', 'Fordi fornybar energi er for billig', 'Fordi batterier er gratis', 'Fordi sol og vind alltid er konstante'],
    explanation: 'Sol og vind varierer og produserer ikke alltid når behovet er størst. Lagring (f.eks. batterier) jevner ut tilbud og etterspørsel.',
  },
  {
    question: 'Hvilken generatortype med sterke permanentmagneter er vanlig i moderne direktedrevne vindturbiner?',
    options: ['Permanent magnet synkrongenerator (PMSG)', 'Asynkrongenerator', 'Blybatteri', 'Likeretter'],
    explanation: 'PMSG har høy virkningsgrad og brukes i moderne direktedrevne turbiner. Asynkrongeneratorer er vanlige i eldre turbiner.',
  },
],

  'elektro-data-vg1-5-4': [
  {
    question: 'Hvilken sikringsstørrelse og kabel er typisk for en vanlig stikkontaktkurs?',
    options: ['16 A og 2,5 mm²', '10 A og 1,5 mm²', '25 A og 6 mm²', '6 A og 0,75 mm²'],
    explanation: 'Stikkontaktkurser bruker typisk 16 A sikring og 2,5 mm² kabel. Lyskurser bruker 10 A og 1,5 mm².',
  },
  {
    question: 'I et TN-S nett er spenningen mellom fase og nøytral 230 V. Hva er spenningen mellom to faser?',
    options: ['400 V', '230 V', '460 V', '690 V'],
    explanation: 'U_FF = U_FN × √3 = 230 × 1,732 ≈ 400 V. Faktoren √3 skyldes 120° faseforskyvning mellom fasene.',
  },
  {
    question: 'Hvilket fordelingssystem brukes som standard i Norge?',
    options: ['TN-nett', 'IT-nett', 'TT-nett', 'DC-nett'],
    explanation: 'TN-nett (Terra Neutral) er standard i Norge. TN-S med separate N- og PE-ledere brukes i nye installasjoner.',
  },
  {
    question: 'Hvilken kabeltype brukes typisk innstøpt i betong, i jord og utendørs?',
    options: ['PFXP', 'PN i tørre rom', 'Telefonkabel', 'Koaksialkabel'],
    explanation: 'PFXP har plastkappe og tåler fukt og mekanisk påkjenning, og brukes utendørs, i jord og innstøpt i betong.',
  },
  {
    question: 'Hvorfor er fase-fase-spenningen høyere enn fase-nøytral-spenningen i et trefasesystem?',
    options: ['Fasene er forskjøvet 120° i forhold til hverandre', 'Fasene har ulik frekvens', 'Nøytrallederen er tykkere', 'Det skyldes høyere strøm'],
    explanation: 'De tre fasene er sinuser forskjøvet 120°. Spenningsforskjellen mellom to faser blir derfor √3 ganger fase-nøytral-spenningen.',
  },
],

  'elektro-data-vg1-5-5': [
  {
    question: 'Hva er NEK 400?',
    options: ['Det viktigste normsverket for elektriske lavspenningsinstallasjoner i Norge', 'En type sikring', 'En kabeltype', 'En spenningsklasse'],
    explanation: 'NEK 400 er normen for elektriske lavspenningsinstallasjoner, utgitt av Norsk Elektroteknisk Komité og basert på IEC 60364.',
  },
  {
    question: 'Hva regulerer forskriften FSE?',
    options: ['Sikkerhet ved arbeid i og drift av elektriske anlegg', 'Hvilke kabeltyper som er lovlige', 'Strømpriser', 'Energimerking av apparater'],
    explanation: 'FSE regulerer sikkerheten for personer som arbeider på eller nær elektriske anlegg, der det er risiko for elektrisk sjokk.',
  },
  {
    question: 'I sone 0 på et baderom (innsiden av badekar/dusj), hva er kravet?',
    options: ['Maks 12 V (SELV), ingen stikkontakter eller brytere', '230 V er tillatt', 'Vanlige stikkontakter er tillatt', 'Ingen krav til kapsling'],
    explanation: 'Sone 0 er den mest utsatte sonen. Kun IPX7-utstyr og maks 12 V (SELV) er tillatt – ingen stikkontakter eller brytere.',
  },
  {
    question: 'Hvilken etat har fastsatt forskriften FEL?',
    options: ['Direktoratet for samfunnssikkerhet og beredskap (DSB)', 'Statnett', 'NVE', 'Arbeidstilsynet'],
    explanation: 'FEL (Forskrift for elektriske lavspenningsanlegg) er fastsatt av DSB og krever blant annet at installasjoner utføres av kvalifisert personell.',
  },
  {
    question: 'Hva er et krav i FEL for hvem som kan utføre elektriske installasjoner?',
    options: ['Kvalifisert personell (elektriker med fagbrev, eller under veiledning)', 'Hvem som helst', 'Kun ingeniører', 'Kun produsenten av utstyret'],
    explanation: 'FEL krever at installasjoner utføres av kvalifisert personell og oppfyller kravene i NEK 400.',
  },
],

  'elektro-data-vg1-5-6': [
  {
    question: 'Hva beskytter en automatsikring kretsen mot?',
    options: ['Overbelastning og kortslutning', 'Jordfeil gjennom kroppen', 'Overspenning fra lyn', 'For lav spenning'],
    explanation: 'Automatsikringer bryter strømmen ved overbelastning (termisk) og kortslutning (magnetisk). Jordfeil håndteres av jordfeilbryter (RCD).',
  },
  {
    question: 'En B16-automatsikring utløser magnetisk (raskt) ved hvilket strømområde?',
    options: ['3–5 × 16 A = 48–80 A', '1,13 × 16 A = 18 A', '0,5 × 16 A = 8 A', '10 × 16 A = 160 A'],
    explanation: 'B-karakteristikk gir magnetisk utløsning ved 3–5 × merkestrøm, altså 48–80 A for en B16.',
  },
  {
    question: 'Hvordan virker en jordfeilbryter (RCD)?',
    options: ['Den sammenligner strøm i fase- og nøytralleder og bryter ved differanse', 'Den måler total effekt', 'Den smelter ved for høy strøm', 'Den måler spenningen mot jord'],
    explanation: 'RCD-en bryter når strømmen i fase og nøytral er ulik, fordi differansen betyr at strøm lekker ut en annen vei – typisk gjennom en person eller jordfeil.',
  },
  {
    question: 'En vanlig jordfeilbryter for personbeskyttelse utløser ved hvilken differansestrøm?',
    options: ['30 mA', '300 mA', '16 A', '1 A'],
    explanation: 'En RCD på 30 mA brukes for personbeskyttelse og bryter raskt nok (innen ca. 30 ms) til å hindre alvorlig skade.',
  },
  {
    question: 'Hva kjennetegner et apparat i beskyttelsesklasse II?',
    options: ['Dobbel eller forsterket isolasjon, ingen jording nødvendig', 'Metallkapsling koblet til jord', 'Drives kun på 12 V', 'Krever alltid jordet stikkontakt'],
    explanation: 'Klasse II har dobbel/forsterket isolasjon og trenger ikke jord. Klasse I bruker grunnisolasjon + beskyttelsesjord.',
  },
],

  'elektro-data-vg1-5-7': [
  {
    question: 'En transformator har 500 vindinger på primær og 25 på sekundær, med 230 V inn. Hva er sekundærspenningen (ideelt)?',
    options: ['11,5 V', '4600 V', '23 V', '255 V'],
    explanation: 'U₂ = U₁ × N₂/N₁ = 230 × 25/500 = 230 × 0,05 = 11,5 V. Dette er en nedtransformator.',
  },
  {
    question: 'En 4-pols asynkronmotor på 50 Hz har synkronhastighet på:',
    options: ['1500 rpm', '3000 rpm', '750 rpm', '1440 rpm'],
    explanation: 'n_s = 60 × f / p = 60 × 50 / 2 = 1500 rpm (4 poler gir 2 polpar, p = 2).',
  },
  {
    question: 'En asynkronmotor med synkronhastighet 1500 rpm går på 1440 rpm. Hva er slippet?',
    options: ['4 %', '6 %', '40 %', '0,4 %'],
    explanation: 's = (n_s − n)/n_s × 100 % = (1500 − 1440)/1500 × 100 % = 60/1500 × 100 % = 4 %.',
  },
  {
    question: 'En DC-motor på 12 V styres med PWM og duty cycle 75 %. Hva er gjennomsnittsspenningen?',
    options: ['9 V', '12 V', '6 V', '3 V'],
    explanation: 'U_snitt = U × duty cycle = 12 V × 0,75 = 9 V. Hastigheten blir ca. 75 % av maks.',
  },
  {
    question: 'Hva er funksjonen til en frekvensomformer (VFD)?',
    options: ['Styre hastigheten til AC-motorer ved å variere frekvens og spenning', 'Omdanne AC til ren DC', 'Lagre elektrisk energi', 'Måle motorens turtall'],
    explanation: 'En VFD likeretter AC til DC og lager deretter ny AC med variabel frekvens, slik at motorens hastighet kan styres.',
  },
],

  'elektro-data-vg1-6': [
  {
    question: 'Hvor mange joule er 1 kWh?',
    options: ['3 600 000 J', '1000 J', '3600 J', '60 000 J'],
    explanation: '1 kWh = 1000 W × 3600 s = 3 600 000 J = 3,6 MJ.',
  },
  {
    question: 'En stekeovn på 230 V trekker 10 A. Hva er effekten?',
    options: ['2300 W', '23 W', '240 W', '2,3 W'],
    explanation: 'P = U × I = 230 V × 10 A = 2300 W = 2,3 kW.',
  },
  {
    question: 'En ovn på 2,3 kW går i 2 timer. Hvor mye energi bruker den?',
    options: ['4,6 kWh', '2,3 kWh', '1,15 kWh', '46 kWh'],
    explanation: 'E = P × t = 2,3 kW × 2 h = 4,6 kWh.',
  },
  {
    question: 'Hvorfor bruker man høy spenning ved overføring av elektrisk kraft over lange avstander?',
    options: ['Lavere strøm gir mindre tap (tap = I² × R)', 'Høy spenning er billigere å produsere', 'Høy spenning gir høyere frekvens', 'Det øker strømmen i ledningene'],
    explanation: 'Ved samme effekt gir høyere spenning lavere strøm (P = U × I). Siden tapet er I² × R, reduseres tapet kraftig.',
  },
  {
    question: 'En TV på 150 W (0,15 kW) går 4 timer daglig. Hvor mye energi bruker den per dag?',
    options: ['0,6 kWh', '6 kWh', '0,15 kWh', '600 kWh'],
    explanation: 'E = 0,15 kW × 4 h = 0,6 kWh per dag.',
  },
],

  'elektro-data-vg1-6-2': [
  {
    question: 'Hvordan styrer man typisk vinkelposisjonen til en servomotor?',
    options: ['Med et PWM-signal', 'Med konstant DC-spenning', 'Ved å variere frekvensen på nettet', 'Med en analog ohmverdi'],
    explanation: 'En servomotor mottar et PWM-signal og bruker en innebygd sensor for å regulere seg til ønsket vinkelposisjon.',
  },
  {
    question: 'En steppermotor med stegvinkel 1,8° mottar 500 pulser. Hvor stor er total rotasjonsvinkel?',
    options: ['900°', '500°', '278°', '1800°'],
    explanation: 'Vinkel = antall pulser × stegvinkel = 500 × 1,8° = 900°. Det tilsvarer 2,5 omdreininger.',
  },
  {
    question: 'En steppermotor (1,8°/steg) roterer 900°. Hva er restvinkelen etter hele omdreininger?',
    options: ['180°', '90°', '0°', '360°'],
    explanation: '900° / 360° = 2,5. To hele omdreininger er 720°, så restvinkelen er 900° − 720° = 180°.',
  },
  {
    question: 'Hva er en magnetventil (solenoidventil)?',
    options: ['En ventil som åpnes eller lukkes ved hjelp av en elektromagnet', 'En motor med tilbakekobling', 'En sensor som måler trykk', 'En type sikring'],
    explanation: 'En magnetventil styres med et digitalt på/av-signal som aktiverer en elektromagnet (solenoid) for å åpne eller lukke ventilen.',
  },
  {
    question: 'Hva brukes en H-bro til?',
    options: ['Styre både retning og hastighet på en DC-motor', 'Likerette vekselstrøm', 'Lagre digitale data', 'Måle motstand'],
    explanation: 'En H-bro består av fire brytere som kan endre strømretningen gjennom motoren (retning) og kombineres med PWM (hastighet).',
  },
],

  'elektro-data-vg1-6-3': [
  {
    question: 'Hva kjennetegner lukket (tilbakekoblet) regulering?',
    options: ['Systemet måler resultatet og justerer pådraget basert på målingen', 'Styresignalet er forhåndsbestemt og sjekker ikke resultatet', 'Det brukes ingen sensorer', 'Den fungerer kun på DC-motorer'],
    explanation: 'Lukket regulering bruker en tilbakekoblingssensor til å måle resultatet og justere pådraget. Åpen regulering sjekker ikke resultatet.',
  },
  {
    question: 'Et rom skal holdes på 22 °C, men sensoren viser 19 °C. Hva er reguleringsavviket?',
    options: ['3 °C', '−3 °C', '41 °C', '19 °C'],
    explanation: 'e = SP − PV = 22 − 19 = 3 °C. Positivt avvik betyr at rommet er kaldere enn ønsket, og regulatoren bør øke varmen.',
  },
  {
    question: 'Hva er formelen for pådrag i ren P-regulering?',
    options: ['u = Kp × e', 'u = Kp + e', 'u = e / Kp', 'u = Kp × e²'],
    explanation: 'P-regulering gir pådrag proporsjonalt med avviket: u = Kp × e, der Kp er forsterkningen og e er reguleringsavviket.',
  },
  {
    question: 'Hvilken egenskap har ren P-regulering?',
    options: ['Den etterlater et stasjonært avvik (når aldri helt settpunktet)', 'Den fjerner alltid alt avvik', 'Den reagerer kun på endringstakt', 'Den ignorerer avviket'],
    explanation: 'P-regulering når aldri helt settpunktet alene – det gjenstår et stasjonært avvik. I-leddet fjerner dette over tid.',
  },
  {
    question: 'Hvilket ledd i en PID-regulator fjerner stasjonært avvik?',
    options: ['I-leddet (integral)', 'P-leddet (proporsjonal)', 'D-leddet (derivat)', 'Ingen av dem'],
    explanation: 'I-leddet summerer avviket over tid, slik at selv et lite vedvarende avvik bygges opp og elimineres.',
  },
],

  'elektro-data-vg1-6-5': [
  {
    question: 'Hva er PLS-en i en automatisert produksjonslinje?',
    options: ['Hjernen i systemet som styrer sekvensene', 'Transportbåndet', 'En type sensor', 'Strømforsyningen'],
    explanation: 'PLS (Programmerbar Logisk Styring) er styreenheten («hjernen») som koordinerer sensorer, aktuatorer og maskinens sekvenser.',
  },
  {
    question: 'Hvilken robottype er raskest for plukk-og-plasser av lette emner i høyt tempo?',
    options: ['Deltarobot', 'Artikulert leddrobot', 'Stor lasterobot', 'SCADA-robot'],
    explanation: 'Deltaroboten er montert i taket med tre parallelle armer og er den raskeste typen for lette plukk-og-plasser-oppgaver.',
  },
  {
    question: 'Hva står SCADA for?',
    options: ['Supervisory Control And Data Acquisition', 'Serial Control And Digital Access', 'System Control And Data Analysis', 'Sensor Control And Drive Automation'],
    explanation: 'SCADA = Supervisory Control And Data Acquisition – et overordnet system for overvåking og styring av industrielle prosesser.',
  },
  {
    question: 'Hva er en typisk anvendelse for en artikulert (leddet) robot?',
    options: ['Sveising, maling og montering', 'Lagring av data', 'Måling av spenning', 'Generering av elektrisitet'],
    explanation: 'Artikulerte roboter har 4–7 rotasjonsledd og er svært fleksible, og brukes til sveising, maling og montering.',
  },
  {
    question: 'Hva er HMI i et SCADA-system?',
    options: ['Operatørens grensesnitt for å overvåke og styre prosessen', 'En type industrirobot', 'Et nettverkskabel', 'En motor'],
    explanation: 'HMI (Human Machine Interface) er skjermgrensesnittet der operatøren ser og styrer prosessen, ofte via berøringsskjerm.',
  },
],

  'elektro-data-vg1-6-6': [
  {
    question: 'Hva er det første steget i systematisk feilsøking?',
    options: ['Symptombeskrivelse – hva virker ikke, og når oppsto feilen', 'Bytte ut alle komponenter', 'Måle strømforbruket', 'Restarte hele anlegget'],
    explanation: 'Man starter alltid med å beskrive symptomet: hva virker ikke, når oppsto feilen, og er noe endret nylig.',
  },
  {
    question: 'Hva går halveringsmetoden ut på?',
    options: ['Dele systemet i to, teste hvilken halvdel feilen er i, og gjenta', 'Halvere spenningen og se hva som skjer', 'Bytte ut halvparten av komponentene', 'Måle alle punkter samtidig'],
    explanation: 'Halveringsmetoden lokaliserer feilen effektivt ved å teste midtpunktet, så halvere den feilende delen igjen, helt til feilen er funnet.',
  },
  {
    question: 'Hvordan kobler du et multimeter for å måle spenning over en komponent?',
    options: ['Parallelt over komponenten', 'I serie med komponenten', 'Kortsluttet over kretsen', 'Mellom to faser samtidig'],
    explanation: 'Spenning måles parallelt over komponenten. Strøm måles derimot i serie med kretsen.',
  },
  {
    question: 'Du måler 24 V på PLS-utgangen, men 0 V over reléspolen. Hvor er feilen sannsynligvis?',
    options: ['I ledningen/koblingen mellom PLS-utgang og relé', 'I selve PLS-en', 'I strømnettet til hele bygget', 'I lampen'],
    explanation: 'Siden PLS-en gir riktig spenning (24 V) men spenningen ikke når reléet, ligger feilen i forbindelsen mellom dem (brudd eller løs kobling).',
  },
  {
    question: 'Hva går signalsporing ut på?',
    options: ['Følge signalet fra inngang til utgang og finne hvor det forsvinner', 'Søke etter feil på internett', 'Bytte alle kabler', 'Måle bare ved sluttpunktet'],
    explanation: 'Signalsporing følger signalet gjennom kretsen og måler ved hvert punkt for å finne nøyaktig hvor signalet mangler eller forvrenges.',
  },
],

  'elektro-data-vg1-6-7': [
  {
    question: 'Hva er en sentralenhet (hub/gateway) i et smarthus?',
    options: ['Enheten som koordinerer kommunikasjonen mellom enhetene', 'En sensor som måler temperatur', 'En motor som styrer persienner', 'En sikring'],
    explanation: 'Hub-en/gateway-en koordinerer kommunikasjonen mellom sensorer og aktuatorer i smarthuset.',
  },
  {
    question: 'Hva kjennetegner smarthusprotokollen KNX?',
    options: ['Kabelbasert, svært pålitelig og upåvirket av trådløs interferens', 'Trådløs med svært kort rekkevidde', 'En type batteri', 'Et programmeringsspråk'],
    explanation: 'KNX bruker en dedikert busskabel, er svært pålitelig og påvirkes ikke av trådløs interferens. Den er en internasjonal standard (ISO 14543).',
  },
  {
    question: 'Hvilken løsning anbefales for å gjøre et eksisterende hus uten smarthus-kabler smartere på et begrenset budsjett?',
    options: ['Trådløs løsning som Zigbee eller Z-Wave', 'KNX med ny busskabel i alle vegger', 'Riving og nybygging', 'Kun manuell styring'],
    explanation: 'I eksisterende hus uten kabler er trådløse løsninger som Zigbee/Z-Wave rimeligere og kan etterinstalleres uten å bryte opp vegger.',
  },
  {
    question: 'Hva er et BMS (Building Management System)?',
    options: ['Et sentralt styresystem for alle tekniske installasjoner i et næringsbygg', 'En batterimanagementbrikke', 'En trådløs router', 'En type lyspære'],
    explanation: 'BMS styrer sentralt ventilasjon, belysning, oppvarming, sikkerhet og energimåling i et næringsbygg.',
  },
  {
    question: 'Et kontorbygg bruker 500 000 kWh/år. Et BMS sparer 30 %. Hvor mye spares årlig?',
    options: ['150 000 kWh', '15 000 kWh', '350 000 kWh', '50 000 kWh'],
    explanation: 'Spart = 500 000 × 0,30 = 150 000 kWh. Nytt forbruk blir 350 000 kWh.',
  },
],

  'elektro-data-vg1-7': [
  {
    question: 'Hva står HMS for?',
    options: ['Helse, Miljø og Sikkerhet', 'Høyspenning, Motstand og Strøm', 'Hovedmåling og Sikring', 'Hjelp Med Strøm'],
    explanation: 'HMS = Helse, Miljø og Sikkerhet – systematisk arbeid for å sikre trygge arbeidsforhold.',
  },
  {
    question: 'Hvilken regel kommer FØRST blant de 5 sikkerhetsreglene ved arbeid på elektriske anlegg?',
    options: ['Koble fra (bryt all spenning)', 'Jord og kortslut', 'Dekk til spenningssatte deler', 'Kontroller spenningsfriheten'],
    explanation: 'Første regel er å koble fra all spenning. Deretter: sikre mot innkobling, kontroller spenningsfrihet, jord og kortslut, og dekk til.',
  },
  {
    question: 'Fra hvilken vekselspenning regnes strøm som farlig?',
    options: ['Over 50 V AC', 'Over 5 V AC', 'Over 1000 V AC', 'All spenning er ufarlig'],
    explanation: 'Over 50 V AC (eller 120 V DC) regnes som farlig. 230 V i stikkontakten kan være livsfarlig.',
  },
  {
    question: 'Hva er riktig forhold mellom kompresjoner og innblåsninger ved HLR?',
    options: ['30 kompresjoner og 2 innblåsninger', '15 kompresjoner og 2 innblåsninger', '2 kompresjoner og 30 innblåsninger', '10 kompresjoner og 10 innblåsninger'],
    explanation: 'HLR utføres med 30 brystkompresjoner etterfulgt av 2 innblåsninger, gjentatt til hjelp kommer.',
  },
  {
    question: 'Hva er en fare ved strømgjennomgang i kroppen?',
    options: ['Muskelkramper som gjør at man ikke kan slippe taket', 'Lavere blodtrykk uten symptomer', 'Bedre muskelfunksjon', 'Kun mild varmefølelse uten risiko'],
    explanation: 'Strømgjennomgang kan gi muskelkramper («hold-on»-effekt), hjertestans, forbrenninger og åndedrettsstans.',
  },
],

  'elektro-data-vg1-7-2': [
  {
    question: 'Hvilken lov er den viktigste for HMS i Norge?',
    options: ['Arbeidsmiljøloven', 'Vegtrafikkloven', 'Forbrukerkjøpsloven', 'Plan- og bygningsloven'],
    explanation: 'Arbeidsmiljøloven (AML) skal sikre trygt arbeidsmiljø og gjelder alle virksomheter med arbeidstakere, inkludert lærlinger.',
  },
  {
    question: 'Fra hvor mange ansatte skal en virksomhet ha verneombud?',
    options: ['5 eller flere', '50 eller flere', '2 eller flere', '100 eller flere'],
    explanation: 'Alle virksomheter med 5 eller flere ansatte skal ha verneombud. Arbeidsmiljøutvalg (AMU) kreves fra 50 ansatte.',
  },
  {
    question: 'Hvordan beregnes risiko i en risikoanalyse?',
    options: ['Risiko = Sannsynlighet × Konsekvens', 'Risiko = Sannsynlighet + Konsekvens', 'Risiko = Konsekvens / Sannsynlighet', 'Risiko = Tid × Kostnad'],
    explanation: 'Risiko = Sannsynlighet × Konsekvens. Man vurderer hvor sannsynlig en hendelse er og hvor alvorlig konsekvensen blir.',
  },
  {
    question: 'Hva er en SJA?',
    options: ['Sikker-Jobb-Analyse – en forenklet risikovurdering rett før jobben starter', 'En type sikringsskap', 'En sertifisering for elektrikere', 'Et måleinstrument'],
    explanation: 'SJA (Sikker-Jobb-Analyse) er en enkel risikovurdering som gjøres på arbeidsstedet like før arbeidet starter.',
  },
  {
    question: 'Du skal jobbe i et rom med høy støy fra ventilasjon. Hvilket verneutstyr er spesielt viktig?',
    options: ['Hørselsvern', 'Solbriller', 'Regnjakke', 'Sandaler'],
    explanation: 'Ved høy støy er hørselsvern viktig for å beskytte hørselen. I tillegg trengs ofte hjelm, vernebriller og vernesko.',
  },
],

  'elektro-data-vg1-7-3': [
  {
    question: 'Ved hvilken strømstyrke gjennom kroppen oppstår «hold-on»-effekten (kan ikke slippe taket)?',
    options: ['10–30 mA', '1–5 mA', '75–300 mA over kort tid', 'Under 1 mA'],
    explanation: 'Ved 10–30 mA får man kramper og kan ikke slippe taket. Ved 75–300 mA oppstår livstruende hjerteflimmer.',
  },
  {
    question: 'Hva er det aller første du gjør hvis en kollega henger fast i en strømførende maskin?',
    options: ['Slukk strømmen – dra ut støpselet eller slå av sikringen', 'Ta tak i kollegaen og dra vedkommende løs', 'Ring familien', 'Hell vann på maskinen'],
    explanation: 'Du må aldri berøre personen mens strømmen er på. Slukk strømmen først, eller bryt forbindelsen med en isolerende gjenstand.',
  },
  {
    question: 'Hvilket nødnummer ringer du ved en strømulykke med personskade?',
    options: ['113', '110', '112', '911'],
    explanation: '113 er medisinsk nødtelefon (AMK). 110 er brann, og 112 er politi.',
  },
  {
    question: 'Hva skal du ALDRI bruke til å slukke en elektrisk brann?',
    options: ['Vann', 'CO₂-apparat', 'Pulverapparat', 'Brannteppe'],
    explanation: 'Vann leder strøm og skal aldri brukes på elektrisk brann. Bruk CO₂- eller pulverapparat, og slå av strømmen hvis mulig.',
  },
  {
    question: 'Hvor dypt skal brystkompresjoner ved HLR være?',
    options: ['5–6 cm', '1–2 cm', '10–12 cm', 'Så lett som mulig'],
    explanation: 'Brystkompresjoner skal være 5–6 cm dype med frekvens 100–120 per minutt.',
  },
],

  'elektro-data-vg1-7-5': [
  {
    question: 'Hva er EE-avfall?',
    options: ['Kasserte elektriske og elektroniske produkter', 'Vanlig matavfall', 'Bygningsavfall', 'Papiravfall'],
    explanation: 'EE-avfall (elektrisk og elektronisk avfall) er kasserte produkter som er avhengige av strøm eller batteri, og er den raskest voksende avfallstypen.',
  },
  {
    question: 'Hva innebærer produsentansvaret i WEEE-direktivet?',
    options: ['Produsenter og importører har ansvar for innsamling og behandling av EE-avfall', 'Forbrukeren betaler for all gjenvinning', 'Kommunen produserer elektronikk', 'Avfall skal brennes uten sortering'],
    explanation: 'WEEE-direktivet pålegger produsenter og importører ansvar for innsamling og forsvarlig behandling av EE-avfall.',
  },
  {
    question: 'Hva kjennetegner en sirkulær økonomi sammenlignet med en lineær økonomi?',
    options: ['Ressurser holdes i bruk lengst mulig gjennom reparasjon og gjenbruk', 'Produkter brukes én gang og kastes', 'Den bruker mer råvarer', 'Den unngår resirkulering'],
    explanation: 'Lineær økonomi følger «ta–lage–bruke–kaste». Sirkulær økonomi holder ressurser i bruk ved å reparere, gjenbruke og resirkulere.',
  },
  {
    question: 'Hvorfor skal kasserte lysrør ikke knuses?',
    options: ['De inneholder kvikksølv som er giftig å puste inn', 'De kan eksplodere av lys', 'De er radioaktive', 'De inneholder syre'],
    explanation: 'Lysrør inneholder kvikksølv. Knusing frigjør giftig kvikksølvdamp, så de skal håndteres som farlig avfall og leveres hele.',
  },
  {
    question: 'Hvilket verdifullt materiale gjenvinnes fra kontaktene og kretskortene i en mobiltelefon?',
    options: ['Gull', 'Blyglass', 'Asbest', 'Tre'],
    explanation: 'Mobiltelefoner inneholder bl.a. gull, kobber, kobolt og litium som kan gjenvinnes. Gull finnes særlig i kontakter og kretskort.',
  },
],

  'elektro-data-vg1-8': [
  {
    question: 'Hvilket av disse kan et multimeter IKKE måle direkte?',
    options: ['Lufttrykk', 'Spenning', 'Strøm', 'Motstand'],
    explanation: 'Et multimeter måler spenning, strøm, motstand og ofte kontinuitet, men ikke lufttrykk.',
  },
  {
    question: 'Hvordan kobler du multimeteret når du måler spenning over en motstand?',
    options: ['Parallelt med motstanden', 'I serie med motstanden', 'Kortsluttet over motstanden', 'Mellom to faser'],
    explanation: 'Spenning måles parallelt med komponenten. Strøm måles i serie. Aldri kortslutt motstanden.',
  },
  {
    question: 'Hva er fordelen med en klemmetang (strømtang)?',
    options: ['Den måler strøm uten å bryte kretsen', 'Den er mer nøyaktig på små strømmer', 'Den måler spenning bedre', 'Den trenger ingen strømkilde i kretsen'],
    explanation: 'Klemmetangen klemmes rundt en leder og måler magnetfeltet, slik at man slipper å bryte kretsen. Den er mindre nøyaktig på lave strømmer.',
  },
  {
    question: 'Hva sjekker en kontinuitetstest?',
    options: ['Om det er elektrisk gjennomgang mellom to punkter', 'Hvor høy spenningen er', 'Hvor mye effekt som brukes', 'Frekvensen til signalet'],
    explanation: 'Kontinuitetstest piper ved lav motstand og brukes til å sjekke om kabler er hele, om sikringer er OK, og om forbindelser er intakte.',
  },
  {
    question: 'Hva er en fordel med digitale multimetre fremfor analoge?',
    options: ['De viser tall på skjerm og er mer nøyaktige', 'De har ingen batterier', 'De kan ikke måle motstand', 'De viser alltid på en skala med nål'],
    explanation: 'Digitale multimetre viser presise tall på skjerm og er generelt mer nøyaktige enn analoge med nål.',
  },
],

  'elektro-data-vg1-8-1': [
  {
    question: 'Hvilken prosjektfase kommer FØRST?',
    options: ['Initiering', 'Gjennomføring', 'Avslutning', 'Planlegging'],
    explanation: 'Rekkefølgen er initiering → planlegging → gjennomføring → avslutning. Initiering definerer mål og omfang.',
  },
  {
    question: 'Hva viser et Gantt-diagram?',
    options: ['Aktiviteter langs en tidslinje med varighet og avhengigheter', 'Kretsskjemaet for et anlegg', 'Strømforbruket per time', 'Organisasjonskartet i bedriften'],
    explanation: 'Et Gantt-diagram viser aktiviteter som horisontale stolper langs en tidslinje, med start, slutt og avhengigheter.',
  },
  {
    question: 'Hva gjøres i planleggingsfasen av et prosjekt?',
    options: ['Lage tidsplan, fordele ressurser og gjennomføre risikovurdering', 'Utføre det fysiske arbeidet', 'Levere sluttdokumentasjon', 'Definere selve prosjektmålet for første gang'],
    explanation: 'Planleggingsfasen handler om hvordan: aktivitetsliste, tidsplan, ansvarsfordeling, innkjøp og risikovurdering.',
  },
  {
    question: 'Hvorfor bør sikringsskap med automatsikringer bestilles i god tid før installasjon?',
    options: ['De har lengre leveringstid og må bestilles på forhånd', 'De er alltid på lager i butikken', 'De trenger ikke planlegging', 'De er gratis'],
    explanation: 'Materialer med lang leveringstid, som sikringsskap, bør bestilles flere uker i forveien for å unngå forsinkelser i prosjektet.',
  },
  {
    question: 'Hva er en milepæl i et prosjekt?',
    options: ['Et viktig delmål eller hendelse på et bestemt tidspunkt', 'Den totale kostnaden', 'En type kabel', 'Antall ansatte'],
    explanation: 'En milepæl markerer et viktig delmål eller en hendelse i tidsplanen, f.eks. «kabling ferdig» innen en gitt uke.',
  },
],

  'elektro-data-vg1-8-3': [
  {
    question: 'Hva kommer typisk FØRST i en faglig rapport?',
    options: ['Forside', 'Konklusjon', 'Resultat', 'Diskusjon'],
    explanation: 'Rapporten starter med forside (tittel, forfatter, dato), deretter innholdsfortegnelse og innledning.',
  },
  {
    question: 'Hvorfor er kildehenvisning viktig i en rapport?',
    options: ['Det viser pålitelige kilder og forebygger plagiat', 'Det gjør rapporten lengre', 'Det er kun for pynt', 'Det erstatter konklusjonen'],
    explanation: 'Kildehenvisning viser at arbeidet bygger på pålitelige kilder, gjør informasjonen etterprøvbar og forebygger plagiat.',
  },
  {
    question: 'Hvordan ser en kildehenvisning i teksten ut i APA-stil?',
    options: ['(Forfatter, årstall)', '[nummer]', 'Kun forfatterens fornavn', 'Ingen henvisning i teksten'],
    explanation: 'I APA-stil oppgis kilden i teksten som (Forfatter, årstall), og fullstendig referanse står i kildelisten.',
  },
  {
    question: 'Hva bør innledningen i en rapport inneholde?',
    options: ['Bakgrunn, formål og problemstilling', 'Alle måleresultatene', 'Hele teoridelen', 'Kun konklusjonen'],
    explanation: 'Innledningen presenterer bakgrunn, formål og problemstilling for arbeidet, slik at leseren forstår hva rapporten handler om.',
  },
  {
    question: 'I hvilken del av rapporten beskriver du utstyr og fremgangsmåte?',
    options: ['Metode', 'Forside', 'Innholdsfortegnelse', 'Sammendrag'],
    explanation: 'Metodedelen beskriver hvordan arbeidet ble utført – hvilket utstyr og hvilken fremgangsmåte som ble brukt.',
  },
],

  'elektro-data-vg1-8-5': [
  {
    question: 'Hva er 2+2-modellen i yrkesfaglig utdanning?',
    options: ['2 år i skole og 2 år i bedrift', '2 år teori og 2 år eksamen', '2 fag og 2 prøver', '2 dager skole og 2 dager jobb hver uke'],
    explanation: '2+2-modellen er 2 år i skole (VG1 og VG2) etterfulgt av 2 år som lærling i bedrift.',
  },
  {
    question: 'Hvilket VG1-programområde tar en kommende elektriker?',
    options: ['Elektro og datateknologi', 'Bygg- og anleggsteknikk', 'Helse- og oppvekstfag', 'Restaurant- og matfag'],
    explanation: 'Elektrikerveien starter med VG1 Elektro og datateknologi, som er felles for alle elektroretninger, deretter VG2 Elenergi og ekom.',
  },
  {
    question: 'Hva er IKKE en av de fire delene i en fagprøve?',
    options: ['Skriftlig teorieksamen i alle fag', 'Planlegging', 'Gjennomføring', 'Egenvurdering'],
    explanation: 'Fagprøven består av planlegging, gjennomføring, dokumentasjon og egenvurdering – ikke en separat skriftlig teorieksamen i alle fag.',
  },
  {
    question: 'Hvor mange år varer normalt læretiden i bedrift i 2+2-modellen?',
    options: ['2 år', '1 år', '4 år', '6 måneder'],
    explanation: 'Læretiden i bedrift er normalt 2 år etter de 2 årene i skole.',
  },
  {
    question: 'Hva oppnår du etter bestått fagprøve?',
    options: ['Fagbrev', 'Mastergrad', 'Førerkort', 'Bachelorgrad'],
    explanation: 'Etter bestått fagprøve får du fagbrev, som dokumenterer at du er fagarbeider innen yrket.',
  },
],

  'elektro-data-vg1-9': [
  {
    question: 'Hvilke tre hoveddeler består et automatiseringssystem av?',
    options: ['Sensorer, styringsenhet og aktuatorer', 'Motstand, spole og kondensator', 'CPU, RAM og harddisk', 'Fase, nøytral og jord'],
    explanation: 'Et automatiseringssystem har sensorer (input), styringsenhet (prosessering) og aktuatorer (output).',
  },
  {
    question: 'Hva er en aktuator i et automatiseringssystem?',
    options: ['En enhet som utfører fysisk arbeid (output)', 'En enhet som måler fysiske størrelser', 'En kabel mellom enheter', 'En programmeringsspråk'],
    explanation: 'Aktuatorer er «musklene» som utfører fysisk arbeid, f.eks. motorer, ventiler og pumper. Sensorer er «sansene» som måler.',
  },
  {
    question: 'Hva kjennetegner et closed-loop (lukket sløyfe) system?',
    options: ['Sensorer måler resultatet og styringen justerer kontinuerlig', 'Det bruker ingen sensorer', 'Styresignalet er fast og justeres aldri', 'Det fungerer kun manuelt'],
    explanation: 'I et closed-loop system gir tilbakekobling fra sensorer styringen mulighet til å justere kontinuerlig mot ønsket resultat.',
  },
  {
    question: 'Hvilken sensortype brukes for å registrere bevegelse?',
    options: ['PIR-sensor', 'NTC-sensor', 'Fotocelle for lys', 'Piezosensor for trykk'],
    explanation: 'PIR (passiv infrarød) registrerer bevegelse. NTC måler temperatur, fotocelle måler lys, og piezosensor måler trykk.',
  },
  {
    question: 'I et automatisk gatelys, hva er aktuatoren?',
    options: ['Lampen som slås på/av', 'Fotocellen som måler lys', 'Styringskretsen', 'Strømkabelen'],
    explanation: 'Fotocellen er sensoren, styringen tar beslutningen, og lampen er aktuatoren som utfører handlingen (lyser opp).',
  },
],

  'elektro-data-vg1-10': [
  {
    question: 'Hva står PLS for?',
    options: ['Programmerbar Logisk Styring', 'Parallell Logisk System', 'Permanent Lav Spenning', 'Praktisk Lyssystem'],
    explanation: 'PLS = Programmerbar Logisk Styring (engelsk: PLC, Programmable Logic Controller) – en robust industriell datamaskin.',
  },
  {
    question: 'Hvilket programmeringsspråk for PLS er basert på elektriske relédiagrammer?',
    options: ['Ladder Logic (stigediagram)', 'Python', 'HTML', 'Assembly'],
    explanation: 'Ladder Logic ser ut som en stige med trinn og bygger på reléskjemaer, noe som gjør det intuitivt for elektrikere.',
  },
  {
    question: 'Hva gjør en kontakt av typen Normally Open (NO) i Ladder Logic?',
    options: ['Leder når den er aktiv', 'Leder bare når den ikke er aktiv', 'Leder alltid', 'Leder aldri'],
    explanation: 'En Normally Open-kontakt (—| |—) leder når den aktiveres. En Normally Closed (—|/|—) leder når den IKKE er aktiv.',
  },
  {
    question: 'Hva er hensikten med selvholding (parallell motor-kontakt) i et start/stopp-mønster?',
    options: ['Å holde motoren aktiv etter at startknappen slippes', 'Å stoppe motoren umiddelbart', 'Å øke spenningen', 'Å koble fra strømmen ved start'],
    explanation: 'Selvholding lar en parallell motor-kontakt holde kretsen aktiv etter at startknappen slippes, til stoppknappen (NC) bryter kretsen.',
  },
  {
    question: 'Hvilket programmeringsspråk brukes til Arduino?',
    options: ['C/C++', 'Ladder Logic', 'COBOL', 'SQL'],
    explanation: 'Arduino programmeres i C/C++. Hver skisse har funksjonene setup() (kjøres én gang) og loop() (kjøres kontinuerlig).',
  },
],

  'elektro-data-vg1-11': [
  {
    question: 'Hvor stor andel av norsk strømproduksjon kommer fra vannkraft?',
    options: ['Rundt 90–95 %', 'Rundt 20 %', 'Rundt 50 %', 'Rundt 5 %'],
    explanation: 'Vannkraft står for omtrent 90–95 % av norsk strømproduksjon og kan reguleres etter behov.',
  },
  {
    question: 'En LED-pære (10 W) erstatter en glødelampe (60 W). Hvor mange prosent mindre effekt bruker LED-pæren?',
    options: ['Ca. 83 %', 'Ca. 50 %', 'Ca. 17 %', 'Ca. 10 %'],
    explanation: '(60 − 10)/60 = 50/60 ≈ 0,83 = 83 % mindre effekt. LED bruker altså ca. 17 % av glødelampens effekt.',
  },
  {
    question: '20 glødelamper à 60 W brukes 4 timer daglig. Hva er det årlige forbruket (365 dager)?',
    options: ['1752 kWh', '4800 kWh', '175 kWh', '438 kWh'],
    explanation: 'Effekt = 20 × 60 W = 1,2 kW. Daglig = 1,2 × 4 = 4,8 kWh. Årlig = 4,8 × 365 = 1752 kWh.',
  },
  {
    question: 'I EUs energimerking, hvilken klasse er mest energieffektiv?',
    options: ['A (grønn)', 'G (rød)', 'D (gul)', 'F (rød)'],
    explanation: 'Skalaen går fra A (mest effektiv, grønn) til G (minst effektiv, rød).',
  },
  {
    question: 'Hva er AMS?',
    options: ['Avanserte Måle- og Styringssystemer (smart strømmåler)', 'Automatisk Motor Styring', 'Anlegg for Magnetisk Solenergi', 'Akustisk Måle System'],
    explanation: 'AMS er den smarte strømmåleren i norske hjem som måler forbruk time for time og muliggjør smartere energistyring.',
  },
],

  'elektro-data-vg1-12': [
  {
    question: 'Hva viser et kretsskjema?',
    options: ['Hvordan komponenter er koblet sammen elektrisk, uten fysisk plassering', 'Den fysiske plasseringen av komponenter på et kort', 'Bygningens planløsning', 'Prisen på komponentene'],
    explanation: 'Et kretsskjema viser de elektriske forbindelsene mellom komponenter med standardiserte symboler, ikke fysisk plassering.',
  },
  {
    question: 'I en LED-krets med 9 V batteri der LED-en tar 2 V og motstanden er 1 kΩ, hva er strømmen?',
    options: ['7 mA', '9 mA', '2 mA', '11 mA'],
    explanation: 'Spenning over motstanden = 9 − 2 = 7 V. I = U/R = 7 V / 1000 Ω = 0,007 A = 7 mA.',
  },
  {
    question: 'Hva betyr et punkt der to linjer møtes i et kretsskjema?',
    options: ['Linjene er koblet sammen', 'Linjene krysser uten kontakt', 'En komponent mangler', 'En feil i tegningen'],
    explanation: 'Et punkt markerer at linjene er elektrisk koblet sammen. Kryssende linjer uten punkt er ikke koblet.',
  },
  {
    question: 'Hva er en BOM (Bill of Materials)?',
    options: ['En deliste over alle komponenter i et prosjekt', 'Et kretsskjema', 'En brukermanual', 'En testprosedyre'],
    explanation: 'BOM er en deliste med referanse, verdi, type, antall, leverandør og pris for alle komponenter i prosjektet.',
  },
  {
    question: 'Hva står PCB for?',
    options: ['Printed Circuit Board (trykt kretskort)', 'Power Control Board', 'Programmable Computer Bus', 'Primary Cable Box'],
    explanation: 'PCB = Printed Circuit Board – et trykt kretskort med kobberstriper som forbinder komponentene.',
  },
],

  'elektro-data-vg1-13': [
  {
    question: 'Hvilken avfallstype vokser raskest i verden?',
    options: ['E-avfall (elektronisk avfall)', 'Matavfall', 'Papiravfall', 'Glassavfall'],
    explanation: 'E-avfall er den raskest voksende avfallstypen, med rundt 50 millioner tonn globalt per år, hvorav bare ca. 20 % resirkuleres korrekt.',
  },
  {
    question: 'Hva er en modell for sirkulær økonomi?',
    options: ['Design – Produser – Bruk – Reparer – Gjenbruk – Resirkuler', 'Ta – Produser – Bruk – Kast', 'Kjøp – Kast – Kjøp på nytt', 'Produser – Lagre – Brenn'],
    explanation: 'Sirkulær økonomi holder produkter i bruk lengst mulig. Lineær økonomi følger derimot «ta–produser–bruk–kast».',
  },
  {
    question: 'Hva handler «Right to Repair»-bevegelsen om?',
    options: ['Forbrukernes rett til å reparere produktene de eier', 'Retten til å kaste elektronikk hvor som helst', 'Retten til gratis nye produkter', 'Produsentenes rett til å låse produkter'],
    explanation: 'Right to Repair kjemper for forbrukernes rett til reparasjon, med tilgang til reservedeler, manualer og reparerbart design.',
  },
  {
    question: 'Hva viser en reparerbarhetsindeks?',
    options: ['Hvor enkelt et produkt er å reparere (skala 0–10)', 'Produktets pris', 'Hvor mye strøm produktet bruker', 'Produktets vekt'],
    explanation: 'Reparerbarhetsindeksen (innført i Frankrike i 2021) gir poeng 0–10 basert på bl.a. dokumentasjon, demontering og tilgang til reservedeler.',
  },
  {
    question: 'Hva er et bærekraftig førstevalg når en eldre laptop blir treg?',
    options: ['Oppgradere (f.eks. bytte til SSD eller mer RAM)', 'Kjøpe ny laptop med en gang', 'Kaste den i restavfall', 'Skru av all sikkerhet'],
    explanation: 'Ofte er problemet full SSD eller for lite RAM. Oppgradering forlenger levetiden og sparer miljøet for ca. 400 kg CO₂ fra ny produksjon.',
  },
],

  'elektro-data-vg1-14': [
  {
    question: 'Hva gjør en elektriker?',
    options: ['Installerer og vedlikeholder elektriske anlegg', 'Programmerer kun nettsider', 'Lager mat på restaurant', 'Underviser i matematikk'],
    explanation: 'En elektriker installerer og vedlikeholder elektriske anlegg i boliger, bedrifter og industri. Læretid er 2 år + fagbrev.',
  },
  {
    question: 'Hva jobber en automasjonstekniker hovedsakelig med?',
    options: ['Styringssystemer som PLS i industri og bygg', 'Bygging av hus', 'Salg av matvarer', 'Frisørarbeid'],
    explanation: 'En automasjonstekniker programmerer PLS-systemer og feilsøker automatiserte anlegg i industri og bygg.',
  },
  {
    question: 'Hva er den raskeste veien til jobb innen elektrofag?',
    options: ['Fagbrev via yrkesfaglig utdanning (VG1–VG2 + læretid)', 'Doktorgrad', '5 år på universitet før man kan jobbe', 'Ingen utdanning kreves'],
    explanation: 'Fagbrev via yrkesfag gir praktisk arbeid fra dag én og lærlinglønn, og er den raskeste veien til jobb.',
  },
  {
    question: 'Hva kjennetegner arbeidsmarkedet for fagarbeidere i elektrofag?',
    options: ['Stor etterspørsel og mangel på fagarbeidere', 'Svært liten etterspørsel', 'Ingen jobber tilgjengelig', 'Kun sesongarbeid om sommeren'],
    explanation: 'Det er stor mangel på fagarbeidere og høy etterspørsel, særlig innen IT, fornybar energi og automatisering.',
  },
  {
    question: 'Hva er fagskole?',
    options: ['Videreutdanning etter fagbrev med spesialisering (1–2 år)', 'Den første delen av grunnskolen', 'Et universitet med doktorgrad', 'En type lærlingplass'],
    explanation: 'Fagskole er høyere yrkesfaglig utdanning etter fagbrev (1–2 år), med spesialisering f.eks. i automasjon eller fornybar energi.',
  },
],

  'elektro-data-vg1-15': [
  {
    question: 'Hvor mange tilstander har et digitalt signal?',
    options: ['To (0 og 1)', 'Tre', 'Ti', 'Uendelig mange'],
    explanation: 'Digitale signaler har bare to tilstander: logisk 0 (lav spenning) og logisk 1 (høy spenning).',
  },
  {
    question: 'Når gir en AND-port output 1?',
    options: ['Bare når ALLE innganger er 1', 'Når minst én inngang er 1', 'Når alle innganger er 0', 'Aldri'],
    explanation: 'AND-porten gir 1 kun når alle inngangene er 1. OR-porten gir derimot 1 hvis minst én inngang er 1.',
  },
  {
    question: 'Hva er forskjellen mellom en OR-port og en XOR-port?',
    options: ['XOR gir 0 når begge er 1, OR gir 1 når begge er 1', 'De er identiske', 'OR gir 0 når begge er 1', 'XOR gir alltid 1'],
    explanation: 'Når begge innganger er 1 gir OR fortsatt 1, mens XOR gir 0. XOR gir 1 bare når inngangene er forskjellige.',
  },
  {
    question: 'Hvorfor kalles NAND en «universell port»?',
    options: ['Alle andre porter kan bygges med bare NAND-porter', 'Den brukes i alle land', 'Den har uendelig mange innganger', 'Den trenger ingen strøm'],
    explanation: 'NAND er universell fordi enhver annen logisk funksjon (AND, OR, NOT osv.) kan bygges utelukkende med NAND-porter.',
  },
  {
    question: 'Forenkle F = A AND B OR A AND (NOT B) med boolsk algebra.',
    options: ['F = A', 'F = B', 'F = 1', 'F = A AND B'],
    explanation: 'Faktoriser ut A: F = A AND (B OR NOT B). Siden B OR NOT B = 1, blir F = A AND 1 = A.',
  },
],

  'elektro-data-vg1-16': [
  {
    question: 'Hva kjennetegner sekvensiell logikk i forhold til kombinatorisk logikk?',
    options: ['Output avhenger av både input og tidligere tilstand (minne)', 'Output avhenger bare av nåværende input', 'Den har ingen innganger', 'Den bruker ingen klokke'],
    explanation: 'Sekvensiell logikk har minne – output avhenger av både input og lagret tilstand. Kombinatorisk logikk avhenger kun av nåværende input.',
  },
  {
    question: 'Hvor mange bit kan en enkelt flip-flop lagre?',
    options: ['1 bit', '8 bit', '2 bit', '1 byte'],
    explanation: 'En flip-flop er den grunnleggende lagringsenheten og kan lagre nøyaktig 1 bit (0 eller 1).',
  },
  {
    question: 'En D flip-flop har D = 1 ved en stigende klokkflanke. Deretter blir D = 0 uten ny klokkepuls. Hva er Q?',
    options: ['Q = 1 (beholder verdien)', 'Q = 0', 'Q veksler hele tiden', 'Q er udefinert'],
    explanation: 'D flip-flop lagrer verdien D hadde ved siste stigende klokkflanke. Uten ny klokkepuls beholder Q = 1, selv om D endres.',
  },
  {
    question: 'Hvor mange ulike tilstander har en 3-bits binær teller?',
    options: ['8 (0–7)', '6', '3', '16'],
    explanation: 'En 3-bits teller har 2³ = 8 tilstander, fra 000 (0) til 111 (7), før den starter på nytt.',
  },
  {
    question: 'Hva gjør et SIPO-skiftregister?',
    options: ['Tar inn data serielt og gir det ut parallelt', 'Tar inn data parallelt og gir det ut serielt', 'Lagrer kun én bit', 'Forsterker signaler'],
    explanation: 'SIPO = Serie-Inn, Parallell-Ut. Data skyves inn bit for bit og leses ut samtidig på alle utganger.',
  },
],

  'elektro-data-vg1-17': [
  {
    question: 'Hvilken mikrokontroller bruker Arduino Uno?',
    options: ['ATmega328P', 'Intel i7', 'Raspberry Pi 4', 'ARM Cortex-A72'],
    explanation: 'Arduino Uno bruker ATmega328P med 14 digitale I/O-pinner, 6 analoge innganger, 32 KB flash og 16 MHz klokke.',
  },
  {
    question: 'Hva returnerer analogRead() på en Arduino Uno?',
    options: ['En verdi mellom 0 og 1023', 'En verdi mellom 0 og 255', 'En verdi mellom 0 og 100', 'Kun 0 eller 1'],
    explanation: 'analogRead() har 10 bits oppløsning og returnerer 0–1023 (2¹⁰ = 1024 nivåer), der 0 = 0 V og 1023 = 5 V.',
  },
  {
    question: 'Hvilken Arduino-funksjon kjøres bare én gang ved oppstart?',
    options: ['setup()', 'loop()', 'main()', 'start()'],
    explanation: 'setup() kjøres én gang ved oppstart (initialisering), mens loop() kjøres kontinuerlig i det uendelige.',
  },
  {
    question: 'analogWrite() bruker PWM. Hvilken verdi gir ca. 50 % duty cycle?',
    options: ['128', '255', '0', '1023'],
    explanation: 'analogWrite() tar verdier 0–255. 128 gir omtrent 50 % duty cycle (0 = alltid av, 255 = alltid på).',
  },
  {
    question: 'Hvilken sensor måler avstand ved å sende ut ultralyd og måle tiden til ekkoet?',
    options: ['HC-SR04 (ultrasonisk avstandssensor)', 'DHT11 (temperatur/fuktighet)', 'LDR (lyssensor)', 'PT100 (temperatur)'],
    explanation: 'HC-SR04 sender ultralyd og måler tiden til ekkoet. Avstand = (tid × lydhastighet) / 2.',
  },
],

  'elektro-data-vg1-18': [
  {
    question: 'Hva er sammenhengen mellom periode T og frekvens f?',
    options: ['T = 1/f', 'T = f', 'T = f²', 'T = 2f'],
    explanation: 'Perioden er tiden for én svingning og er den inverse av frekvensen: T = 1/f.',
  },
  {
    question: 'Hva slipper et RC-lavpassfilter gjennom?',
    options: ['Lave frekvenser, mens høye dempes', 'Høye frekvenser, mens lave dempes', 'Alle frekvenser likt', 'Ingen frekvenser'],
    explanation: 'Et lavpassfilter slipper gjennom lave frekvenser og demper høye. Ved grensefrekvensen er signalet dempet med 3 dB.',
  },
  {
    question: 'Hva er formelen for grensefrekvensen i et RC-filter?',
    options: ['fc = 1 / (2π × R × C)', 'fc = 2π × R × C', 'fc = R × C', 'fc = R / C'],
    explanation: 'Grensefrekvensen er fc = 1 / (2π × R × C). Ved denne frekvensen er amplituden ca. 70 % (−3 dB) av opprinnelig.',
  },
  {
    question: 'Hva skiller aktive filtre fra passive filtre?',
    options: ['Aktive filtre bruker operasjonsforsterkere og kan forsterke signalet', 'Aktive filtre bruker bare motstander', 'Passive filtre krever strømforsyning', 'Aktive filtre kan ikke filtrere'],
    explanation: 'Aktive filtre bruker op-amp og kan forsterke signalet og gi skarpere filtrering. Passive filtre bruker kun R, C og L.',
  },
  {
    question: 'Hvor bratt er dempningen for et 2. ordens filter?',
    options: ['−40 dB per dekade', '−20 dB per dekade', '−60 dB per dekade', '0 dB per dekade'],
    explanation: 'Dempningen er −20 × N dB per dekade. For N = 2 blir det −40 dB per dekade. Høyere orden gir brattere demping.',
  },
],

  'elektro-data-vg1-19': [
  {
    question: 'Hva gjør en AD-konverter?',
    options: ['Konverterer analoge signaler til digitale verdier', 'Konverterer digitale verdier til analoge signaler', 'Forsterker spenningen', 'Filtrerer støy'],
    explanation: 'AD-konvertering (Analog-til-Digital) gjør om kontinuerlige analoge signaler (f.eks. fra en sensor) til diskrete digitale verdier.',
  },
  {
    question: 'Hvor mange nivåer kan en 8-bits ADC representere?',
    options: ['256', '8', '1024', '65536'],
    explanation: '8 bit gir 2⁸ = 256 nivåer. 10 bit gir 1024 (Arduino ADC), og 16 bit gir 65536 (CD-kvalitet).',
  },
  {
    question: 'Ifølge Nyquist-teoremet, hvor høy må samplingsfrekvensen minst være?',
    options: ['Minst dobbelt så høy som høyeste frekvenskomponent (fs ≥ 2 × fmax)', 'Lik høyeste frekvens', 'Halvparten av høyeste frekvens', 'Uavhengig av signalfrekvens'],
    explanation: 'Nyquist-Shannon: fs ≥ 2 × fmax. For lyd opp til 20 kHz trengs minst 40 kHz; CD bruker 44,1 kHz for margin.',
  },
  {
    question: 'Hva er oppløsningen til en 8-bit DAC med 5 V referansespenning?',
    options: ['Ca. 19,5 mV', 'Ca. 5 mV', 'Ca. 1 V', 'Ca. 39 mV'],
    explanation: 'Oppløsning = Vref / 2ⁿ = 5 V / 256 ≈ 0,0195 V = 19,5 mV.',
  },
  {
    question: 'Hva er aliasing?',
    options: ['Feil som oppstår når signalet inneholder frekvenser over Nyquist-frekvensen', 'Når signalet forsterkes for mye', 'Når DAC-en er for treg', 'Når kabelen er for lang'],
    explanation: 'Aliasing oppstår når signalfrekvenser over Nyquist-grensen (fs/2) tas opp, og fremstår feilaktig som lavere frekvenser.',
  },
],

  'elektro-data-vg1-20': [
  {
    question: 'Hva er en hovedfordel med å bruke funksjoner i programmering?',
    options: ['Kode kan gjenbrukes i stedet for å skrives flere ganger', 'Programmet kjører alltid raskere', 'Man slipper å teste koden', 'Variabler trengs ikke'],
    explanation: 'Funksjoner lar oss gjenbruke kode, organisere programmet i mindre deler og teste hver del separat.',
  },
  {
    question: 'Hva gjør nøkkelordet return i en funksjon?',
    options: ['Sender en verdi tilbake til den som kalte funksjonen', 'Starter funksjonen på nytt', 'Sletter funksjonen', 'Skriver ut til skjermen'],
    explanation: 'return sender et resultat tilbake fra funksjonen til kallstedet, f.eks. return fahrenheit.',
  },
  {
    question: 'Hva gir celsius_til_fahrenheit(20) når formelen er (celsius * 9/5) + 32?',
    options: ['68.0', '52.0', '36.0', '93.6'],
    explanation: '(20 × 9/5) + 32 = (20 × 1,8) + 32 = 36 + 32 = 68. Altså 20 °C = 68 °F.',
  },
  {
    question: 'Hva er et bibliotek (modul) i Python?',
    options: ['En samling forhåndsskrevne funksjoner og klasser som kan importeres', 'En variabel som lagrer tekst', 'En type løkke', 'En feilmelding'],
    explanation: 'En modul/bibliotek (f.eks. math) inneholder ferdige funksjoner og klasser som importeres med import.',
  },
  {
    question: 'Hva er en navngitt (keyword) argument i Python?',
    options: ['Et argument som spesifiseres med parameternavn, f.eks. sett_fart(motor=2)', 'Et argument uten verdi', 'Et argument som alltid er tekst', 'Et argument som ikke kan endres'],
    explanation: 'Navngitte argumenter oppgis med parameternavnet, slik at rekkefølgen ikke spiller noen rolle: sett_fart(hastighet=50, motor=2).',
  },
],

  'elektro-data-vg1-21': [
  {
    question: 'Hvilket indeks har det første elementet i en Python-liste?',
    options: ['0', '1', '-1', 'Det har ingen indeks'],
    explanation: 'Lister er 0-indeksert, så sensorer[0] er det første elementet. sensorer[-1] gir det siste.',
  },
  {
    question: 'Hva gir sensorer[-1] i en Python-liste?',
    options: ['Det siste elementet', 'Det første elementet', 'En feilmelding', 'Element nummer −1 som ikke finnes'],
    explanation: 'Negativ indeks teller fra slutten, så [-1] gir det siste elementet i listen.',
  },
  {
    question: 'Hvordan lagrer en ordbok (dictionary) data?',
    options: ['Som nøkkel-verdi-par', 'Kun som tall i rekkefølge', 'Kun som tekst', 'Uten noen struktur'],
    explanation: 'En ordbok lagrer data som nøkkel-verdi-par, f.eks. {"temperatur": 23.5}, og gir raskt oppslag basert på nøkkelen.',
  },
  {
    question: 'Hva er en forutsetning for å kunne bruke binært søk?',
    options: ['Listen må være sortert', 'Listen må være tom', 'Listen må inneholde kun tekst', 'Listen må være usortert'],
    explanation: 'Binært søk krever en sortert liste, og halverer søkeområdet for hver iterasjon – mye raskere enn lineært søk på store lister.',
  },
  {
    question: 'Hva er tidskompleksiteten til lineært søk i verste fall?',
    options: ['O(n)', 'O(1)', 'O(log n)', 'O(n²)'],
    explanation: 'Lineært søk må i verste fall sjekke alle n elementer, så kompleksiteten er O(n).',
  },
],

  'elektro-data-vg1-22': [
  {
    question: 'Hva er en klasse i objektorientert programmering?',
    options: ['En mal/oppskrift for å lage objekter', 'En ferdig variabel', 'En løkke', 'En feilmelding'],
    explanation: 'En klasse er en mal som definerer hvilke attributter og metoder objektene skal ha. Objekter lages fra klassen.',
  },
  {
    question: 'Hva gjør metoden __init__ i en Python-klasse?',
    options: ['Den er konstruktøren som kjøres når et objekt opprettes', 'Den sletter objektet', 'Den skriver ut objektet', 'Den arver fra en annen klasse'],
    explanation: '__init__ er konstruktøren som kjøres automatisk når et nytt objekt opprettes, og setter startverdier for attributtene.',
  },
  {
    question: 'Hva er forskjellen på instansattributter og klasseattributter?',
    options: ['Instansattributter tilhører hvert objekt, klasseattributter deles av alle objekter', 'De er identiske', 'Klasseattributter tilhører bare ett objekt', 'Instansattributter deles av alle objekter'],
    explanation: 'Instansattributter (self.pin) er unike per objekt. Klasseattributter (Motor.antall_motorer) deles mellom alle objekter av klassen.',
  },
  {
    question: 'Hva er arv i objektorientert programmering?',
    options: ['En klasse får alle egenskapene til en annen klasse den arver fra', 'En klasse sletter en annen', 'To objekter bytter verdier', 'En funksjon kaller seg selv'],
    explanation: 'Arv lar en klasse (f.eks. TemperaturSensor) arve attributter og metoder fra en baseklasse (Sensor), og utvide eller endre dem.',
  },
  {
    question: 'Hva refererer self til i en Python-metode?',
    options: ['Det aktuelle objektet (instansen) metoden tilhører', 'Klassen generelt', 'En global variabel', 'Et bibliotek'],
    explanation: 'self refererer til selve objektet, slik at metoden kan lese og endre objektets egne attributter (f.eks. self.verdi).',
  },
],

  'elektro-data-vg1-23': [
  {
    question: 'Hvor mange bit bruker en IPv6-adresse?',
    options: ['128 bit', '32 bit', '64 bit', '256 bit'],
    explanation: 'IPv6 bruker 128 bit (2¹²⁸ adresser), mot IPv4 sine 32 bit. Dette løser adressemangelen i IPv4.',
  },
  {
    question: 'Hva er hovedgrunnen til at IPv6 ble innført?',
    options: ['IPv4 har for få adresser (ca. 4,3 milliarder)', 'IPv4 er for raskt', 'IPv6 er enklere å skrive', 'IPv4 er trådløst'],
    explanation: 'IPv4 har «bare» ca. 4,3 milliarder adresser (2³²), som ikke er nok med dagens vekst i enheter. IPv6 har enormt mange flere.',
  },
  {
    question: 'Hva er et VLAN?',
    options: ['En logisk segmentering av et fysisk nettverk i flere separate nettverk', 'En fysisk kabel', 'En type IP-adresse', 'En trådløs standard'],
    explanation: 'VLAN (Virtual LAN) deler ett fysisk nettverk i flere logiske nettverk, f.eks. egne VLAN for administrasjon, produksjon og gjester.',
  },
  {
    question: 'Hva er en fordel med VLAN?',
    options: ['Økt sikkerhet ved å isolere følsomme systemer', 'Krever flere fysiske switcher', 'Øker broadcast-trafikken', 'Gjør nettverket tregere'],
    explanation: 'VLAN gir bedre sikkerhet (isolasjon), redusert broadcast-trafikk og fleksibilitet uten å endre fysisk kabling.',
  },
  {
    question: 'I den hierarkiske tre-lagsmodellen, hvor kobles sluttbrukerne til?',
    options: ['Aksesslaget', 'Kjernelaget', 'Distribusjonslaget', 'Transportlaget'],
    explanation: 'Aksesslaget (Access) er der sluttbrukere og enheter kobles til. Kjernelaget står for rask transport, distribusjonslaget for ruting og policy.',
  },
],

  'elektro-data-vg1-24': [
  {
    question: 'Hva er ransomware?',
    options: ['Skadevare som krypterer filer og krever løsepenger', 'Et antivirusprogram', 'En type brannmur', 'En lovlig backup-tjeneste'],
    explanation: 'Ransomware er skadelig programvare som krypterer offerets filer og krever løsepenger for å låse dem opp.',
  },
  {
    question: 'Hva gjør en brannmur?',
    options: ['Kontrollerer nettverkstrafikk basert på regler', 'Krypterer all data automatisk', 'Øker nettverkshastigheten', 'Lagrer backup av filer'],
    explanation: 'En brannmur kontrollerer trafikk basert på regler (IP-adresser, porter, protokoller) og kan blokkere uønsket trafikk.',
  },
  {
    question: 'Hva kjennetegner symmetrisk kryptering?',
    options: ['Samme nøkkel brukes til å kryptere og dekryptere', 'To ulike nøkler brukes', 'Ingen nøkkel trengs', 'Den er alltid tregere enn asymmetrisk'],
    explanation: 'Symmetrisk kryptering (f.eks. AES) bruker én felles nøkkel. Utfordringen er å dele nøkkelen trygt. Asymmetrisk bruker to nøkler.',
  },
  {
    question: 'Hva er multi-faktor autentisering (MFA)?',
    options: ['Å kombinere to eller flere autentiseringsfaktorer', 'Å bruke ett veldig langt passord', 'Å logge inn uten passord', 'Å dele passordet med flere'],
    explanation: 'MFA kombinerer minst to faktorer, f.eks. noe du vet (passord) og noe du har (SMS-kode), for sterkere sikkerhet.',
  },
  {
    question: 'Hva er et angrep der noen plasserer seg mellom to kommuniserende parter og avlytter trafikken?',
    options: ['Man-in-the-Middle (MitM)', 'Phishing', 'Ransomware', 'Brannmur'],
    explanation: 'Man-in-the-Middle (MitM) er når en angriper plasserer seg mellom partene og avlytter eller modifiserer trafikken.',
  },
],

  'elektro-data-vg1-25': [
  {
    question: 'Hvilket jordingssystem er vanligst i Norge?',
    options: ['TN-system', 'IT-system globalt', 'TT-system', 'Ujordet system'],
    explanation: 'TN-systemet (Terre Neutre) er vanligst i Norge. TN-S har separat nøytral (N) og jordleder (PE).',
  },
  {
    question: 'Hvilken jordfeilbryterterskel brukes for personbeskyttelse?',
    options: ['30 mA', '300 mA', '3 A', '16 A'],
    explanation: 'En jordfeilbryter på 30 mA brukes for personbeskyttelse. 300 mA brukes typisk som brannvern på hovedkurser.',
  },
  {
    question: 'Hva oppdager en jordfeilbryter av Type A som Type AC ikke gjør?',
    options: ['Pulserende likestrøms jordfeil', 'Kun vekselstrøms jordfeil', 'Overspenning fra lyn', 'For høy frekvens'],
    explanation: 'Type AC oppdager kun vekselstrøms jordfeil, mens Type A i tillegg oppdager pulserende likestrøm – anbefalt for moderne elektronikk.',
  },
  {
    question: 'Hvilken norm er hovedstandarden for lavspenningsinstallasjoner i Norge?',
    options: ['NEK 400', 'ISO 9001', 'IEEE 802.11', 'NS 3457'],
    explanation: 'NEK 400 (Norsk Elektroteknisk Komité norm 400) er hovedstandarden for elektriske lavspenningsinstallasjoner i Norge.',
  },
  {
    question: 'Hvilken sikringsstørrelse er typisk for en komfyrkurs (3-fase)?',
    options: ['25–32 A', '6 A', '10 A', '63 A'],
    explanation: 'En komfyr er en storforbruker og kobles til en dedikert kurs på typisk 25–32 A, ofte 3-fase.',
  },
],

  'elektro-data-vg1-26': [
  {
    question: 'Hva utnytter solceller for å lage strøm?',
    options: ['Den fotovoltaiske effekten', 'Den termoelektriske effekten', 'Elektromagnetisk induksjon', 'Kjemiske reaksjoner'],
    explanation: 'Solceller bruker den fotovoltaiske effekten: fotoner løsriver elektroner i halvledermaterialet, og PN-overgangen driver strømmen.',
  },
  {
    question: 'Hvilken solcelletype har høyest virkningsgrad (18–22 %)?',
    options: ['Monokrystallinsk silisium', 'Polykrystallinsk silisium', 'Amorft silisium', 'Tynnfilm'],
    explanation: 'Monokrystallinsk silisium har høyest virkningsgrad (18–22 %), men er dyrere å produsere enn polykrystallinsk.',
  },
  {
    question: 'Hva gjør inverteren (vekselretteren) i et solcelleanlegg?',
    options: ['Konverterer DC fra panelene til AC', 'Konverterer AC til DC', 'Lagrer energien', 'Måler sollyset'],
    explanation: 'Panelene produserer likestrøm (DC). Inverteren omformer dette til vekselstrøm (AC) for bruk i huset eller levering til nettet.',
  },
  {
    question: 'I Norge produserer et anlegg typisk hvor mye per installert kWp per år?',
    options: ['Ca. 800–1000 kWh', 'Ca. 100 kWh', 'Ca. 5000 kWh', 'Ca. 50 kWh'],
    explanation: 'I Norge gir 1 kWp typisk ca. 800–1000 kWh per år, høyest i sør. 1 kWp krever ca. 5–7 m² takareal.',
  },
  {
    question: 'Hva er en plusskunde?',
    options: ['En strømkunde som også leverer strøm til nettet fra egen produksjon', 'En kunde med ekstra høyt forbruk', 'En kunde uten strømmåler', 'En kunde som kun kjøper strøm'],
    explanation: 'En plusskunde dekker eget forbruk med egenproduksjon (f.eks. solceller) og mater overskuddet ut på nettet.',
  },
],

  'elektro-data-vg1-27': [
  {
    question: 'Hva gjør en varmepumpe?',
    options: ['Pumper varme fra et kaldt sted til et varmt sted', 'Lager varme fra strøm med 100 % virkningsgrad', 'Kjøler ned strøm', 'Produserer elektrisitet'],
    explanation: 'En varmepumpe flytter varme fra omgivelsene (luft, jord, vann) til innemiljøet ved hjelp av et kjølemedium som sirkulerer.',
  },
  {
    question: 'En varmepumpe bruker 1 kW strøm og leverer 3,5 kW varme. Hva er COP?',
    options: ['3,5', '1', '4,5', '0,29'],
    explanation: 'COP = levert varme / tilført energi = 3,5 / 1 = 3,5. For hver kWh strøm får du 3,5 kWh varme.',
  },
  {
    question: 'Hva betyr en COP på 3,5?',
    options: ['For hver kWh strøm får du 3,5 kWh varme', 'Pumpen bruker 3,5 ganger mer strøm enn varmen den gir', 'Den taper 3,5 kWh', 'Virkningsgraden er 35 %'],
    explanation: 'COP 3,5 betyr at 1 kWh strøm gir 3,5 kWh varme, der ca. 2,5 kWh er «gratis» energi hentet fra omgivelsene.',
  },
  {
    question: 'Hvilken varmepumpetype henter varme fra fjell/jord via en energibrønn?',
    options: ['Væske-vann (bergvarme/jordvarme)', 'Luft-luft', 'Luft-vann', 'Sol-luft'],
    explanation: 'Væske-vann (bergvarme) henter varme fra jord eller fjell, som har stabil temperatur og gir høy og jevn COP gjennom året.',
  },
  {
    question: 'Hva er den anbefalte FØRSTE prioriteten i energieffektivisering?',
    options: ['Redusere behovet (isolasjon og tetting)', 'Installere solceller', 'Bytte til større ovn', 'Øke innetemperaturen'],
    explanation: 'Prioriteringsrekkefølgen er: 1) redusere behov (isolasjon/tetting), 2) effektiv utnyttelse (varmepumpe), 3) fornybar produksjon.',
  },
],

  'elektro-data-vg1-28': [
  {
    question: 'Hva er et smarthus?',
    options: ['En bolig der tekniske systemer er automatisert og kan styres sentralt', 'Et hus uten strøm', 'Et hus bygget av smarte materialer', 'Et hus uten internett'],
    explanation: 'Et smarthus har automatiserte tekniske systemer (lys, varme, sikkerhet osv.) som kan styres sentralt eller fjernkontrolleres.',
  },
  {
    question: 'Hvilken smarthusprotokoll bruker mesh-nettverk og lavt strømforbruk, og brukes av Philips Hue og IKEA Tradfri?',
    options: ['Zigbee', 'Wi-Fi', 'KNX', 'RS-485'],
    explanation: 'Zigbee bruker mesh-nettverk og lavt strømforbruk, og er brukt av bl.a. Philips Hue og IKEA Tradfri. Den krever en hub.',
  },
  {
    question: 'Hvilken spenning leverer strømforsyningen på en KNX-busslinje?',
    options: ['29 V DC', '230 V AC', '12 V DC', '400 V AC'],
    explanation: 'KNX-bussen forsynes med 29 V DC over en grønn twisted-pair-kabel som både gir strøm og datakommunikasjon.',
  },
  {
    question: 'Hva kjennetegner KNX som smarthussystem?',
    options: ['Åpen verdensstandard der produkter fra ulike produsenter kan kommunisere', 'Et lukket system fra én produsent', 'Kun trådløst', 'Kun for industri'],
    explanation: 'KNX er en åpen verdensstandard for bygningsautomasjon, slik at produkter fra ulike produsenter kan samarbeide.',
  },
  {
    question: 'Hva er det første steget når man planlegger et smarthus?',
    options: ['Behovsanalyse – hva ønsker kunden å automatisere', 'Kjøpe så mange enheter som mulig', 'Rive huset', 'Installere KNX uansett'],
    explanation: 'Man starter med en behovsanalyse: hva kunden ønsker, budsjett, nybygg/oppgradering og teknisk kompetanse, før man velger system.',
  },
],

  'elektro-data-vg1-29': [
  {
    question: 'Hva ble PLS opprinnelig utviklet for å erstatte?',
    options: ['Reléstyringer', 'Datamaskiner', 'Mikrokontrollere', 'Transformatorer'],
    explanation: 'PLS ble utviklet på 1960-tallet for å erstatte reléstyringer i bilindustrien, fordi de er lettere å omprogrammere og mer pålitelige.',
  },
  {
    question: 'Hva er det første steget i PLS-ens skannings-syklus?',
    options: ['Lese innganger (input scan)', 'Skrive utganger', 'Utføre programmet', 'Kommunikasjon'],
    explanation: 'Syklusen er: 1) les innganger, 2) utfør program, 3) skriv utganger, 4) housekeeping, deretter gjentas den.',
  },
  {
    question: 'Hvorfor brukes Ladder Logic mye til PLS-programmering?',
    options: ['Det ligner tradisjonelle relédiagrammer og er lett å forstå for elektrikere', 'Det er det raskeste språket', 'Det krever ingen logikk', 'Det brukes kun til nettsider'],
    explanation: 'Ladder Logic er grafisk og ligner reléskjemaer, noe som gjør det intuitivt for elektrikere. Det er en industristandard.',
  },
  {
    question: 'Hva gjør en TON-timer (Timer On-Delay)?',
    options: ['Aktiverer utgangen etter en forsinkelse når inngangen er aktiv', 'Holder utgangen aktiv etter at inngangen slås av', 'Gir en puls med fast lengde', 'Teller antall pulser'],
    explanation: 'TON aktiverer utgangen etter en innstilt forsinkelse (PT) når inngangen er aktiv. TOF holder utgangen aktiv en stund etter avslag.',
  },
  {
    question: 'Hva er en serie-kobling av to kontakter i Ladder Logic ekvivalent med?',
    options: ['En AND-funksjon', 'En OR-funksjon', 'En NOT-funksjon', 'En XOR-funksjon'],
    explanation: 'To kontakter i serie (—| X1 |—| X2 |—) gir utgang bare når BÅDE X1 OG X2 er på – altså en AND. Parallell gir OR.',
  },
],

  'elektro-data-vg1-30': [
  {
    question: 'Hva er en fordel med industriell automasjon?',
    options: ['Jevn kvalitet og mulighet for 24/7-drift', 'Høyere arbeidskostnader', 'Mindre presisjon', 'Lavere produktivitet'],
    explanation: 'Automasjon gir økt produktivitet, jevn kvalitet, lavere arbeidskostnader, økt sikkerhet og 24/7-drift med sporbarhet.',
  },
  {
    question: 'Hvilken robottype er en 6-akset arm som ligner en menneskearm?',
    options: ['Artikulert (leddet arm)', 'SCARA', 'Deltarobot', 'Kartesisk robot'],
    explanation: 'Den artikulerte roboten har typisk 6 akser og ligner en menneskearm. Den er svært fleksibel og brukes til sveising, maling og montering.',
  },
  {
    question: 'Hva er en HMI i et automasjonssystem?',
    options: ['Et grensesnitt som lar operatører samhandle med maskiner', 'En type motor', 'En nettverkssvitsj', 'En sikring'],
    explanation: 'HMI (Human Machine Interface) erstatter knapper og lamper med berøringsskjermer for visualisering og betjening av prosessen.',
  },
  {
    question: 'Hva betyr fargen rød på en HMI ifølge fargekodingen (ISA-101)?',
    options: ['Alarm/feil', 'Normal drift', 'Advarsel', 'Av'],
    explanation: 'I ISA-101-fargekoding betyr grønn normal drift, gul advarsel og rød alarm/feil.',
  },
  {
    question: 'Hva er en RTU i et SCADA-system?',
    options: ['En feltenhet som samler data fra sensorer og sender til sentralen', 'Hovedserveren', 'En type robot', 'En kabel'],
    explanation: 'RTU (Remote Terminal Unit) er en feltenhet som samler data og sender til MTU (sentralen) i et SCADA-system.',
  },
],

  'elektro-data-vg1-31': [
  {
    question: 'Hvorfor bruke systematisk feilsøking fremfor tilfeldig prøving?',
    options: ['Det sparer tid og unngår å innføre nye feil', 'Det er morsommere', 'Det krever ingen verktøy', 'Det gir alltid feil svar'],
    explanation: 'Systematisk feilsøking sparer tid, unngår nye feil, gir læring og dokumentasjon – i motsetning til tilfeldig prøving.',
  },
  {
    question: 'I halveringsmetoden, hvor tester du først i en signalkjede?',
    options: ['Ved midtpunktet', 'Helt i starten', 'Helt på slutten', 'Tilfeldig sted'],
    explanation: 'Du tester midtpunktet for å avgjøre om feilen er i første eller andre halvdel, og halverer deretter den feilende delen igjen.',
  },
  {
    question: 'Hvilket symptom tyder på en kortslutning?',
    options: ['Sikringen går og strømmen blir høy', 'Ingen strøm eller signal', 'Jordfeilbryteren løser ut', 'Litt høyere temperatur uten problemer'],
    explanation: 'Kortslutning gir en uønsket lavmotstandsforbindelse, som gir høy strøm og at sikringen går. Brudd gir derimot ingen strøm.',
  },
  {
    question: 'Hvilken måling brukes for å finne et brudd i en leder?',
    options: ['Kontinuitetsmåling', 'Spenningsmåling under last', 'Effektmåling', 'Frekvensmåling'],
    explanation: 'Et brudd finnes med kontinuitetsmåling – multimeteret piper ikke der lederen er avbrutt.',
  },
  {
    question: 'Hvilket instrument visualiserer signaler over tid og brukes til å se signalform og frekvens?',
    options: ['Oscilloskop', 'Multimeter', 'Klemmetang', 'Megger'],
    explanation: 'Oscilloskopet viser signalets form over tid, slik at man kan måle frekvens, amplitude og se støy/timing-problemer.',
  },
],

  'elektro-data-vg1-32': [
  {
    question: 'Hva er et prosjekt?',
    options: ['En tidsbegrenset innsats for å oppnå et spesifikt mål', 'En fast, evigvarende arbeidsoppgave', 'En tilfeldig handling uten mål', 'Et fast vedlikeholdsrutine'],
    explanation: 'Et prosjekt er en tidsbegrenset innsats med definert mål, omfang, ressurser og leveranser.',
  },
  {
    question: 'Hva er en WBS (Work Breakdown Structure)?',
    options: ['En hierarkisk nedbrytning av prosjektet i mindre deler', 'En liste over ansatte', 'Et kretsskjema', 'En type Gantt-diagram for økonomi'],
    explanation: 'WBS bryter prosjektet hierarkisk ned i faser og mindre arbeidsoppgaver, slik at alt arbeid kan planlegges og fordeles.',
  },
  {
    question: 'Hva viser et Gantt-diagram?',
    options: ['Oppgaver som søyler på en tidslinje med start, slutt og avhengigheter', 'Den fysiske plasseringen av komponenter', 'Strømforbruket per time', 'Klassediagrammet i et program'],
    explanation: 'Gantt-diagrammet er en visuell tidslinje med oppgaver som søyler, og viser start, slutt, avhengigheter og milepæler.',
  },
  {
    question: 'Hva inneholder en kravspesifikasjon?',
    options: ['Hva systemet skal gjøre (funksjonelle krav og begrensninger)', 'Hvordan koden er skrevet linje for linje', 'Kun en deliste', 'Kun en tidsplan'],
    explanation: 'Kravspesifikasjonen beskriver HVA systemet skal gjøre: funksjonelle krav, ytelseskrav, grensesnitt og begrensninger.',
  },
  {
    question: 'Hvilken del av en rapport oppsummerer hele rapporten kort?',
    options: ['Sammendraget', 'Forsiden', 'Innholdsfortegnelsen', 'Kildelisten'],
    explanation: 'Sammendraget gir en kort oppsummering av hele rapporten, slik at leseren raskt får oversikt.',
  },
],

  'elektro-data-vg1-33': [
  {
    question: 'Hva er funksjonen til kommutatoren og børstene i en børstet DC-motor?',
    options: ['Å overføre strøm og skifte strømretning i rotoren', 'Å måle hastigheten', 'Å kjøle ned motoren', 'Å lagre energi'],
    explanation: 'Kommutatoren er en mekanisk strømbryter som skifter strømretning, og børstene overfører strøm til kommutatoren.',
  },
  {
    question: 'Hva er en fordel med en børsteløs DC-motor (BLDC) fremfor en børstet?',
    options: ['Ingen børsteslitasje – lengre levetid og høyere virkningsgrad', 'Den er alltid billigere', 'Den trenger ingen elektronikk', 'Den har lavere virkningsgrad'],
    explanation: 'BLDC har ingen børster å slite, gir lengre levetid, høyere virkningsgrad (85–95 %) og mindre vedlikehold, men krever elektronisk styring.',
  },
  {
    question: 'Hva er typisk slip for en asynkronmotor (induksjonsmotor)?',
    options: ['2–5 %', '20–50 %', '0 %', '80–90 %'],
    explanation: 'Asynkronmotorens rotor følger ikke helt magnetfeltet; typisk slip er 2–5 %.',
  },
  {
    question: 'Hva er en fordel med en steppermotor?',
    options: ['Presis posisjonering uten feedback', 'Høyt moment ved svært høy hastighet', 'Ingen vibrasjon', 'Den holder aldri posisjonen'],
    explanation: 'Steppermotoren roterer i diskrete steg (typisk 1,8°) og gir presis posisjonering uten tilbakekobling, og holder posisjonen når den stoppes.',
  },
  {
    question: 'Hva kjennetegner en servomotor?',
    options: ['Den har integrert feedback (encoder)', 'Den roterer kun i diskrete steg uten sensor', 'Den drives kun av vekselstrøm uten styring', 'Den kan ikke posisjoneres'],
    explanation: 'En servomotor har integrert tilbakekobling (encoder) som gir nøyaktig kontroll av posisjon, hastighet og moment.',
  },
],

  'elektro-data-vg1-34': [
  {
    question: 'Hva konverterer et batteri?',
    options: ['Kjemisk energi til elektrisk energi', 'Elektrisk energi til lys', 'Mekanisk energi til varme', 'Lys til elektrisitet'],
    explanation: 'Et batteri omdanner kjemisk energi til elektrisk energi gjennom elektrokjemiske reaksjoner mellom anode, katode og elektrolytt.',
  },
  {
    question: 'Et batteri på 2000 mAh kan levere 200 mA i hvor lang tid (ideelt)?',
    options: ['10 timer', '2 timer', '20 timer', '1 time'],
    explanation: 'Tid = kapasitet / strøm = 2000 mAh / 200 mA = 10 timer.',
  },
  {
    question: 'Hva er den nominelle spenningen per celle i et blybatteri?',
    options: ['2 V', '1,2 V', '3,7 V', '12 V'],
    explanation: 'Et blybatteri har 2 V per celle, så et 12 V bilbatteri har 6 celler i serie. NiMH har 1,2 V/celle.',
  },
  {
    question: 'Hva beskriver CC/CV-ladeprofilen for Li-ion?',
    options: ['Konstant strøm til maks spenning, deretter konstant spenning med synkende strøm', 'Konstant spenning hele tiden', 'Konstant strøm hele tiden', 'Tilfeldig lading'],
    explanation: 'CC/CV: først konstant strøm (CC) til spenningen når maks (4,2 V), deretter konstant spenning (CV) mens strømmen synker.',
  },
  {
    question: 'Hva er termisk rusning (thermal runaway) i et Li-ion-batteri?',
    options: ['En ukontrollert reaksjon der temperatur og reaksjon forsterker hverandre', 'Normal oppvarming under lading', 'At batteriet blir for kaldt', 'Når batteriet lades for sakte'],
    explanation: 'Ved skade, overlading eller høy temperatur kan temperaturen og reaksjonen akselerere hverandre, noe som kan føre til brann eller eksplosjon.',
  },
],

  'elektro-data-vg1-35': [
  {
    question: 'Hvilken motortype er vanligst i elbiler?',
    options: ['Permanentmagnet synkronmotor (PMSM)', 'Børstet DC-motor', 'Steppermotor', 'Asynkrongenerator'],
    explanation: 'PMSM er den vanligste elbilmotoren. Noen modeller (f.eks. Tesla Model S/X) bruker induksjonsmotor.',
  },
  {
    question: 'Hva gjør bilens ombordlader ved AC-lading?',
    options: ['Konverterer vekselstrøm til likestrøm for batteriet', 'Konverterer likestrøm til vekselstrøm', 'Lagrer strømmen direkte som AC', 'Måler kun ladetiden'],
    explanation: 'Ved AC-lading leveres vekselstrøm til bilens ombordlader, som konverterer den til DC for å lade batteriet.',
  },
  {
    question: 'Hvilken ladekontakt er europeisk standard for AC-lading (3-fase)?',
    options: ['Type 2 (Mennekes)', 'Type 1 (J1772)', 'CHAdeMO', 'Schuko'],
    explanation: 'Type 2 (Mennekes) er europeisk standard for AC-lading og støtter 3-fase. Type 1 er amerikansk og 1-fase.',
  },
  {
    question: 'Hva er Vehicle-to-Grid (V2G)?',
    options: ['Elbilen brukes som strømlager som kan levere tilbake til nettet', 'En type hurtiglader', 'En app for ruteplanlegging', 'Et bremsesystem'],
    explanation: 'V2G lar elbilen lade når prisen er lav og levere strøm tilbake til nettet når prisen er høy, og bidra til å balansere fornybar produksjon.',
  },
  {
    question: 'Hvilken type jordfeilbryter kreves typisk ved installasjon av en elbillader?',
    options: ['Type A eller B', 'Kun Type AC', 'Ingen jordfeilbryter', 'Kun smeltesikring'],
    explanation: 'Elbilladere installeres med jordfeilbryter Type A eller B, ofte på en egen ny kurs fra hovedtavlen, og krever elektriker.',
  },
],

  'elektro-data-vg1-36': [
  {
    question: 'Hva betyr EMC?',
    options: ['Elektromagnetisk Kompatibilitet', 'Elektrisk Motor Kontroll', 'Elektronisk Måle Center', 'Elektromagnetisk Måling av Current'],
    explanation: 'EMC = Elektromagnetisk Kompatibilitet – utstyrets evne til å fungere i sitt miljø uten å forstyrre eller bli forstyrret.',
  },
  {
    question: 'Hva er EMI?',
    options: ['Elektromagnetisk interferens – støy som forstyrrer utstyr', 'En type kabel', 'En sikkerhetsforskrift', 'En motortype'],
    explanation: 'EMI (Electromagnetic Interference) er elektromagnetisk støy fra f.eks. motorer, releer og svitsjede strømforsyninger som kan forstyrre annet utstyr.',
  },
  {
    question: 'Hvilket tiltak mot støy bruker en metallkapsling rundt følsomt utstyr?',
    options: ['Skjerming (Faradays bur-effekt)', 'Filtrering', 'Jording av signalet', 'Økt spenning'],
    explanation: 'Skjerming bruker en jordet metallkapsling (Faradays bur) for å hindre at elektromagnetisk støy slipper inn eller ut.',
  },
  {
    question: 'Hva er et typisk symptom på EMI-problemer i digitale systemer?',
    options: ['Feilaktige målinger, kommunikasjonsfeil og tilfeldige resetter', 'Bedre ytelse', 'Lavere strømforbruk', 'Ingen påvirkning'],
    explanation: 'EMI kan gi feilaktige målinger, programkrasj, kommunikasjonsfeil og tilfeldige resetter i digitale systemer.',
  },
  {
    question: 'Hva er et effektivt tiltak mot støy fra en frekvensomformer (VFD) til en PLS?',
    options: ['Skjermede motorkabler og å skille VFD-kabler fra signalkabler', 'Legge kablene tett sammen', 'Fjerne all jording', 'Øke frekvensen'],
    explanation: 'Skjermede motorkabler (skjerm jordet), EMI-filter og fysisk å skille kraftkabler fra signalkabler reduserer støypåvirkning på PLS-en.',
  },
],

  'elektro-data-vg1-37': [
  {
    question: 'Hva visualiserer et oscilloskop?',
    options: ['Elektriske signaler over tid', 'Kun likespenning som et tall', 'Motstand i ohm', 'Nettverkstrafikk'],
    explanation: 'Oscilloskopet viser signalets form over tid, slik at man kan måle amplitude, periode, frekvens, stigetid og fase.',
  },
  {
    question: 'Hva styrer den vertikale innstillingen på et oscilloskop?',
    options: ['Volt per divisjon (sensitivitet)', 'Tid per divisjon', 'Triggernivået', 'Frekvensen'],
    explanation: 'Den vertikale aksen settes i volt per divisjon (sensitivitet), mens den horisontale settes i tid per divisjon.',
  },
  {
    question: 'Hvorfor må måleinstrumenter kalibreres jevnlig?',
    options: ['Instrumenter drifter over tid på grunn av temperatur og komponentaldring', 'For å gjøre dem dyrere', 'For å bruke mer strøm', 'Det er aldri nødvendig'],
    explanation: 'Instrumenter drifter over tid (temperaturdrift, aldring). Kalibrering sikrer nøyaktige resultater og kvalitetssikring.',
  },
  {
    question: 'Hvordan angis måleusikkerhet?',
    options: ['Som måleverdi ± usikkerhet, f.eks. 5,00 V ± 0,02 V', 'Som et eksakt tall uten margin', 'Kun i prosent av nettspenningen', 'Som en farge'],
    explanation: 'Ingen måling er perfekt. Usikkerhet angis som måleverdi ± usikkerhet, f.eks. 5,00 V ± 0,02 V.',
  },
  {
    question: 'Hva betyr sporbarhet ved kalibrering?',
    options: ['Kalibreringen kan spores tilbake til nasjonale og internasjonale standarder', 'At instrumentet kan spores med GPS', 'At alle målinger lagres på nett', 'At instrumentet aldri trenger kalibrering'],
    explanation: 'Sporbarhet betyr at kalibreringen kan følges i en ubrutt kjede tilbake til nasjonale og internasjonale referansestandarder.',
  },
],

  'elektro-data-vg1-38': [
  {
    question: 'Hvilket tema hører IKKE til hovedtemaene i Elektro og datateknologi VG1?',
    options: ['Avansert organisk kjemi', 'Ohms lov og kretsberegninger', 'Logiske porter og boolsk algebra', 'OSI-modellen og TCP/IP'],
    explanation: 'VG1 dekker elektronikk/kretser, digital elektronikk, programmering og nettverk – ikke avansert organisk kjemi.',
  },
  {
    question: 'Hvilken VG2-retning passer best for den som vil jobbe med PLS og industriroboter?',
    options: ['Automatisering', 'Elenergi', 'Dataelektronikk', 'Elektronikk og nettverkssystemer'],
    explanation: 'Automatisering på VG2 dekker PLS, styringssystemer, industriroboter og prosessautomasjon.',
  },
  {
    question: 'Hvilken VG2-retning passer for den som vil jobbe med elektriske installasjoner og kraftdistribusjon?',
    options: ['Elenergi', 'Dataelektronikk', 'Automatisering', 'Programmering'],
    explanation: 'Elenergi på VG2 dekker elektriske installasjoner, fornybar energi og kraftdistribusjon.',
  },
  {
    question: 'Hvilke grunnleggende programmeringsferdigheter har du lært i VG1?',
    options: ['Variabler, løkker, funksjoner og objektorientert programmering', 'Kun maskinkode', 'Kun HTML', 'Ingen programmering'],
    explanation: 'VG1 dekker programmering i Python og Arduino: variabler, løkker, funksjoner og objektorientert programmering.',
  },
  {
    question: 'Hvilken nettverkskunnskap inngår i VG1-pensum?',
    options: ['OSI-modellen, TCP/IP og IP-adressering', 'Kun avansert kryptografi', 'Kun fiberproduksjon', 'Ingen nettverkskunnskap'],
    explanation: 'VG1 dekker nettverk og kommunikasjon: OSI-modellen, TCP/IP og IP-adressering, i tillegg til elektronikk og programmering.',
  },
],

};

export default quizData_elektroDataVg1;
