import type { QuizQuestion } from './quiz-data';

const quizData_matematikk_7: Record<string, QuizQuestion[]> = {


  '7-1-1': [
  {
    question: 'Hva er 5 − (−3)?',
    options: ['8', '2', '−8', '−2'],
    explanation: 'Minus minus blir pluss: 5 − (−3) = 5 + 3 = 8.',
  },
  {
    question: 'Hva er −3 + (−4)?',
    options: ['−7', '7', '−1', '1'],
    explanation: 'Samme fortegn: legg sammen og behold fortegnet. −3 + (−4) = −7.',
  },
  {
    question: 'Hva er −6 + 9?',
    options: ['3', '−3', '15', '−15'],
    explanation: 'Ulike fortegn: finn differansen (9 − 6 = 3). 9 er «størst», så svaret blir positivt: 3.',
  },
  {
    question: 'Hvilken regel gjelder når vi trekker fra et negativt tall?',
    options: ['Minus minus blir pluss: a − (−b) = a + b', 'Minus minus blir minus: a − (−b) = a − b', 'Svaret blir alltid negativt', 'Vi må alltid bytte om tallene'],
    explanation: 'Å trekke fra et negativt tall er det samme som å legge til: 7 − (−2) = 7 + 2 = 9.',
  },
  {
    question: 'Temperaturen steg fra −4 °C til 7 °C. Hvor mange grader steg den?',
    options: ['11 grader', '3 grader', '7 grader', '4 grader'],
    explanation: 'Fra −4 til 0 er det 4 grader, og fra 0 til 7 er det 7 grader: 4 + 7 = 11 grader.',
  },
],

  '7-1-2': [
  {
    question: 'Hva er 3 · 2²?',
    options: ['12', '36', '8', '10'],
    explanation: 'Potens før ganging: 2² = 4, og deretter 3 · 4 = 12. (36 får du hvis du regner (3 · 2)² — det er feil.)',
  },
  {
    question: 'Hva er riktig regnerekkefølge?',
    options: ['Parenteser, potenser, gange/dele, pluss/minus', 'Pluss/minus, gange/dele, potenser, parenteser', 'Alltid fra venstre mot høyre uansett', 'Potenser, parenteser, pluss/minus, gange/dele'],
    explanation: 'Husk PEMDAS: Parenteser først, så Eksponenter (potenser), deretter Multiplikasjon/Divisjon, og til slutt Addisjon/Subtraksjon.',
  },
  {
    question: 'Hva er 2 · [3 + (4 − 1) · 2]?',
    options: ['18', '24', '16', '12'],
    explanation: 'Innenfra og ut: (4 − 1) = 3, så 3 · 2 = 6, så 3 + 6 = 9, og til slutt 2 · 9 = 18.',
  },
  {
    question: 'Hva er 5 · 4²?',
    options: ['80', '400', '40', '52'],
    explanation: '4² = 16 først, så 5 · 16 = 80. (400 = 20² er feilen du får ved å gange før potensen.)',
  },
  {
    question: 'Hva er 18 − 2 · 3?',
    options: ['12', '48', '13', '6'],
    explanation: 'Gange før minus: 2 · 3 = 6, og så 18 − 6 = 12. (48 får du hvis du regner 16 · 3.)',
  },
],

  '7-1-3': [
  {
    question: 'Hva er 3/4 · 2/5, mest mulig forkortet?',
    options: ['3/10', '6/9', '5/9', '15/8'],
    explanation: 'Teller ganger teller, nevner ganger nevner: 6/20, som forkortes til 3/10.',
  },
  {
    question: 'Hva er 3 · 2/5?',
    options: ['6/5', '6/15', '5/5', '2/15'],
    explanation: 'Vi ganger telleren med heltallet: 3 · 2/5 = 6/5.',
  },
  {
    question: 'Hva er 2/3 ÷ 4/9, mest mulig forkortet?',
    options: ['3/2', '8/27', '2/3', '6/27'],
    explanation: 'Snu den bakerste brøken og gang: 2/3 · 9/4 = 18/12 = 3/2.',
  },
  {
    question: 'Hvordan deler vi med en brøk?',
    options: ['Snu den bakerste brøken og gang i stedet', 'Snu den fremste brøken og gang i stedet', 'Trekk den bakerste brøken fra den fremste', 'Det er umulig å dele med brøk'],
    explanation: 'Å dele med en brøk er det samme som å gange med den omvendte brøken: ÷ 4/9 blir · 9/4.',
  },
  {
    question: 'Trenger vi fellesnevner når vi GANGER to brøker?',
    options: ['Nei, vi ganger bare teller med teller og nevner med nevner', 'Ja, alltid', 'Ja, men bare hvis nevnerne er oddetall', 'Bare hvis brøkene er mindre enn 1'],
    explanation: 'Fellesnevner trengs ved pluss og minus — ved ganging ganger vi rett fram.',
  },
],

  '7-1-4': [
  {
    question: 'Hva er 2⁴?',
    options: ['16', '8', '6', '24'],
    explanation: '2⁴ = 2 · 2 · 2 · 2 = 16.',
  },
  {
    question: 'Hva er 2³?',
    options: ['8', '6', '9', '5'],
    explanation: '2³ = 2 · 2 · 2 = 8. (6 = 2 · 3 er en vanlig feil — potens er gjentatt ganging, ikke ganging av grunntall og eksponent.)',
  },
  {
    question: 'Hva er 10³?',
    options: ['1 000', '100', '30', '10 000'],
    explanation: '10³ = 10 · 10 · 10 = 1 000. Eksponenten teller antall nuller.',
  },
  {
    question: 'Hva er 2³ · 2² skrevet som én potens?',
    options: ['2⁵', '2⁶', '4⁵', '2¹'],
    explanation: 'Samme grunntall: legg sammen eksponentene. 2³ · 2² = 2³⁺² = 2⁵.',
  },
  {
    question: 'Hvilket tall er 10⁶?',
    options: ['En million', 'Hundre tusen', 'Ti tusen', 'En milliard'],
    explanation: '10⁶ = 1 000 000 — en million, med 6 nuller.',
  },
],

  '7-2-1': [
  {
    question: 'Hva er 4x + 2x?',
    options: ['6x', '8x', '6x²', '8x²'],
    explanation: 'Like ledd kan slås sammen: 4x + 2x = 6x.',
  },
  {
    question: 'Hva er x · x?',
    options: ['x²', '2x', 'x', '2x²'],
    explanation: 'x ganget med seg selv blir x i andre potens: x · x = x². (2x betyr x + x.)',
  },
  {
    question: 'Hva er 3x · 4x?',
    options: ['12x²', '12x', '7x', '7x²'],
    explanation: 'Gang tallene for seg og variablene for seg: 3 · 4 = 12 og x · x = x², altså 12x².',
  },
  {
    question: 'Kan uttrykket 4x + 3y forenkles mer?',
    options: ['Nei, x-ledd og y-ledd er ikke like ledd', 'Ja, det blir 7xy', 'Ja, det blir 7x', 'Ja, det blir 12xy'],
    explanation: 'Bare ledd med samme variabel kan slås sammen — 4x og 3y har ulike variabler.',
  },
  {
    question: 'Hva er verdien av 2x² når x = 3?',
    options: ['18', '36', '12', '81'],
    explanation: 'Potensen gjelder bare x: 2 · 3² = 2 · 9 = 18. (36 = (2 · 3)² er en vanlig feil.)',
  },
],

  '7-2-2': [
  {
    question: 'Hva er løsningen på likningen 2x + 3 = 13?',
    options: ['x = 5', 'x = 8', 'x = 6,5', 'x = 10'],
    explanation: 'Trekk fra 3 på begge sider: 2x = 10. Del på 2: x = 5. Prøve: 2 · 5 + 3 = 13. ✓',
  },
  {
    question: 'Hva er løsningen på likningen 5x = 2x + 9?',
    options: ['x = 3', 'x = 9', 'x = 7', 'x = 1,8'],
    explanation: 'Trekk 2x fra begge sider: 3x = 9, altså x = 3.',
  },
  {
    question: 'Hva er løsningen på likningen 4x − 5 = 11?',
    options: ['x = 4', 'x = 1,5', 'x = 16', 'x = 6'],
    explanation: 'Legg til 5: 4x = 16. Del på 4: x = 4.',
  },
  {
    question: 'Hva er balanseprinsippet?',
    options: ['Det du gjør på én side av likningen, må du også gjøre på den andre', 'Du skal alltid dele på 2 til slutt', 'Venstre side skal alltid være størst', 'x skal alltid stå til høyre'],
    explanation: 'En likning er som en vekt i balanse: samme operasjon på begge sider holder den i likevekt.',
  },
  {
    question: 'Du har løst en likning og fått x = 6. Hvordan sjekker du svaret?',
    options: ['Sett 6 inn i den opprinnelige likningen og se om begge sider blir like', 'Gang 6 med 2 og se om det blir et partall', 'Løs likningen baklengs uten å sette inn', 'Sjekk om 6 er større enn 0'],
    explanation: 'Prøven: bytt ut x med løsningen i likningen. Blir begge sider like, er svaret riktig.',
  },
],

  '7-2-3': [
  {
    question: 'Hva er løsningen på ulikheten x + 3 > 7?',
    options: ['x > 4', 'x < 4', 'x > 10', 'x = 4'],
    explanation: 'Trekk 3 fra begge sider: x > 4. Alle tall større enn 4 passer.',
  },
  {
    question: 'Når må vi snu ulikhetstegnet?',
    options: ['Når vi ganger eller deler med et negativt tall', 'Hver gang vi legger til et tall', 'Når x står på høyre side', 'Aldri — tegnet skal alltid stå likt'],
    explanation: 'Ganging eller deling med negativt tall snur ulikheten: av −x > 3 følger x < −3.',
  },
  {
    question: 'Hva betyr tegnet ≤?',
    options: ['Mindre enn eller lik', 'Større enn eller lik', 'Mindre enn', 'Ikke lik'],
    explanation: '≤ betyr «mindre enn eller lik»: x ≤ 5 inkluderer både tall under 5 og selve 5.',
  },
  {
    question: 'Hva er løsningen på ulikheten 2x < 10?',
    options: ['x < 5', 'x > 5', 'x < 8', 'x < 20'],
    explanation: 'Del begge sider på 2 (positivt tall — tegnet beholdes): x < 5.',
  },
  {
    question: 'Hva er løsningen på ulikheten −x > 3?',
    options: ['x < −3', 'x > −3', 'x > 3', 'x < 3'],
    explanation: 'Vi ganger med −1 på begge sider og MÅ da snu tegnet: x < −3.',
  },
],

  '7-2-4': [
  {
    question: 'Hvordan skriver vi «5 mer enn x» som et uttrykk?',
    options: ['x + 5', '5x', 'x − 5', '5 − x'],
    explanation: '«5 mer enn x» betyr at vi legger 5 til x: x + 5.',
  },
  {
    question: 'Hvordan skriver vi «dobbelt så mye som x» som et uttrykk?',
    options: ['2x', 'x + 2', 'x²', 'x/2'],
    explanation: 'Dobbelt så mye betyr ganget med 2: 2x.',
  },
  {
    question: 'Per er x år, og Kari er dobbelt så gammel. Til sammen er de 18 år. Hvor gammel er Per?',
    options: ['6 år', '9 år', '12 år', '3 år'],
    explanation: 'x + 2x = 18 gir 3x = 18, altså x = 6. Per er 6 år (og Kari 12).',
  },
  {
    question: 'Tre like billetter pluss 40 kr i gebyr koster til sammen 340 kr. Hva koster én billett?',
    options: ['100 kr', '113 kr', '120 kr', '90 kr'],
    explanation: '3x + 40 = 340 gir 3x = 300, altså x = 100 kr.',
  },
  {
    question: 'Hva bør du gjøre når du har løst en tekstoppgave med likning?',
    options: ['Sette svaret tilbake i teksten og sjekke at det stemmer', 'Stryke likningen', 'Gange svaret med 10 for sikkerhets skyld', 'Alltid runde av til nærmeste tier'],
    explanation: 'Sjekk alltid mot teksten: stemmer alderen, prisen eller lengden med det oppgaven sier? Og husk enhet!',
  },
],

  '7-3-1': [
  {
    question: 'Hva betyr koordinatene (3, 5)?',
    options: ['3 bortover og 5 oppover', '5 bortover og 3 oppover', '3 oppover og 5 nedover', '3 og 5 er samme punkt på x-aksen'],
    explanation: 'Alltid x først: 3 langs x-aksen (bortover), deretter 5 langs y-aksen (oppover).',
  },
  {
    question: 'Hva kalles punktet (0, 0) der aksene krysser hverandre?',
    options: ['Origo', 'Sentrum', 'Nullpunktet til grafen', 'Aksekrysset'],
    explanation: 'Punktet (0, 0) kalles origo — der x-aksen og y-aksen møtes.',
  },
  {
    question: 'I hvilken kvadrant ligger punktet (−2, 4)?',
    options: ['2. kvadrant', '1. kvadrant', '3. kvadrant', '4. kvadrant'],
    explanation: 'x er negativ og y er positiv — det er 2. kvadrant (oppe til venstre).',
  },
  {
    question: 'Hvilken akse er vannrett?',
    options: ['x-aksen', 'y-aksen', 'Begge er vannrette', 'Ingen av dem'],
    explanation: 'x-aksen ligger vannrett (bortover), y-aksen står loddrett (oppover).',
  },
  {
    question: 'Hvor ligger punktet (4, 0)?',
    options: ['På x-aksen', 'På y-aksen', 'I 1. kvadrant', 'I origo'],
    explanation: 'y = 0 betyr at punktet ligger på selve x-aksen. Punkter på aksene tilhører ingen kvadrant.',
  },
],

  '7-3-2': [
  {
    question: 'Hva er stigningstallet i y = 2x + 1?',
    options: ['2', '1', 'x', '3'],
    explanation: 'I y = ax + b er a stigningstallet. Her er a = 2: y øker med 2 når x øker med 1.',
  },
  {
    question: 'Hva forteller konstantleddet b i y = ax + b?',
    options: ['Hvor linjen krysser y-aksen', 'Hvor bratt linjen er', 'Hvor linjen krysser x-aksen', 'Lengden på linjen'],
    explanation: 'b er verdien av y når x = 0 — altså der linjen skjærer y-aksen.',
  },
  {
    question: 'Hva er y i y = 3x − 2 når x = 4?',
    options: ['10', '12', '14', '5'],
    explanation: 'y = 3 · 4 − 2 = 12 − 2 = 10.',
  },
  {
    question: 'Hva er spesielt med linjen y = 5x?',
    options: ['Den går gjennom origo', 'Den er vannrett', 'Den krysser aldri y-aksen', 'Den synker mot høyre'],
    explanation: 'Konstantleddet er 0, så når x = 0 er y = 0 — linjen går gjennom origo (0, 0).',
  },
  {
    question: 'Hva betyr det at stigningstallet er negativt?',
    options: ['Linjen synker når x øker', 'Linjen stiger når x øker', 'Linjen er loddrett', 'Linjen går gjennom origo'],
    explanation: 'Negativt stigningstall, som i y = −2x + 3, betyr at y blir mindre når x øker — linjen heller nedover.',
  },
],

  '7-3-3': [
  {
    question: 'Hva betyr en flat (vannrett) del på en graf?',
    options: ['Ingen endring i den perioden', 'Rask endring', 'At grafen er ferdig', 'At verdien er null'],
    explanation: 'Når grafen er flat, endres ikke verdien — for eksempel en pause på en sykkeltur.',
  },
  {
    question: 'Hva betyr det at en graf er bratt?',
    options: ['Verdien endrer seg raskt', 'Verdien endrer seg sakte', 'Verdien er stor', 'Verdien er negativ'],
    explanation: 'Jo brattere graf, jo raskere endring — for eksempel høy fart i en avstand–tid-graf.',
  },
  {
    question: 'I en avstand–tid-graf for en gåtur er grafen flat mellom kl. 12 og 13. Hva skjedde?',
    options: ['Personen sto stille (pause)', 'Personen gikk fortere', 'Personen gikk hjemover', 'Personen gikk i konstant fart'],
    explanation: 'Flat graf betyr at avstanden ikke endret seg — personen tok pause.',
  },
  {
    question: 'Hva bør du alltid gjøre først når du leser en graf?',
    options: ['Lese hva aksene viser', 'Måle grafen med linjal', 'Finne det høyeste punktet', 'Telle rutene'],
    explanation: 'Aksene forteller hva grafen handler om (f.eks. tid og temperatur) — uten dem kan du ikke tolke noe.',
  },
  {
    question: 'En graf viser at temperaturen stiger fra kl. 8 til kl. 14 og synker etterpå. Når var det varmest?',
    options: ['Kl. 14', 'Kl. 8', 'Kl. 20', 'Midt på natten'],
    explanation: 'Toppen av grafen er der stigningen slutter og synkingen begynner — kl. 14.',
  },
],

  '7-4-1': [
  {
    question: 'Hva er summen av vinklene i en trekant?',
    options: ['180°', '360°', '90°', '270°'],
    explanation: 'De tre vinklene i en trekant er alltid 180° til sammen — uansett form.',
  },
  {
    question: 'To vinkler i en trekant er 65° og 45°. Hvor stor er den tredje?',
    options: ['70°', '80°', '110°', '60°'],
    explanation: '180 − 65 − 45 = 70°.',
  },
  {
    question: 'I en likebeint trekant er toppvinkelen 40°. Hvor store er de to vinklene ved grunnlinjen?',
    options: ['70° hver', '40° hver', '140° hver', '50° hver'],
    explanation: 'De to grunnvinklene er like: (180 − 40) ÷ 2 = 70° hver.',
  },
  {
    question: 'I en rettvinklet trekant er den ene spisse vinkelen 30°. Hvor stor er den andre spisse vinkelen?',
    options: ['60°', '70°', '90°', '150°'],
    explanation: 'De to spisse vinklene er til sammen 90°: 90 − 30 = 60°.',
  },
  {
    question: 'Hvor store er vinklene i en likesidet trekant?',
    options: ['60° hver', '90° hver', '45° hver', '120° hver'],
    explanation: 'Alle tre vinklene er like: 180° ÷ 3 = 60°.',
  },
],

  '7-4-2': [
  {
    question: 'Hva er en midtnormal?',
    options: ['En linje som står vinkelrett på et linjestykke og deler det i to like deler', 'En linje som deler en vinkel i to', 'Den lengste siden i en trekant', 'En sirkel rundt et punkt'],
    explanation: 'Midtnormalen står 90° på linjestykket og går gjennom midtpunktet.',
  },
  {
    question: 'Hva gjør en halveringslinje?',
    options: ['Deler en vinkel i to like store vinkler', 'Deler et linjestykke i to', 'Lager en rett vinkel', 'Tegner en sirkel'],
    explanation: 'Halveringslinjen deler en vinkel nøyaktig på midten — 60° blir til to vinkler på 30°.',
  },
  {
    question: 'Du halverer en vinkel på 60°. Hvor store blir de to nye vinklene?',
    options: ['30° hver', '60° hver', '120° hver', '15° hver'],
    explanation: '60° ÷ 2 = 30°.',
  },
  {
    question: 'Hvilke verktøy bruker vi når vi konstruerer?',
    options: ['Passer og linjal', 'Gradskive og kalkulator', 'Bare blyant', 'Linjal og gradskive'],
    explanation: 'Konstruksjon gjøres med passer og linjal — vi måler ikke vinkler med gradskive.',
  },
  {
    question: 'Hva er sant om alle punktene på en midtnormal?',
    options: ['De er like langt fra begge endepunktene av linjestykket', 'De ligger på selve linjestykket', 'De er like langt fra origo', 'De ligger alltid i en sirkel'],
    explanation: 'Hvert punkt på midtnormalen har nøyaktig samme avstand til de to endepunktene — det er derfor konstruksjonen virker.',
  },
],

  '7-4-3': [
  {
    question: 'En rettvinklet trekant har kateter på 3 cm og 4 cm. Hvor lang er hypotenusen?',
    options: ['5 cm', '7 cm', '6 cm', '25 cm'],
    explanation: 'c² = 3² + 4² = 9 + 16 = 25, så c = √25 = 5 cm. Dette er det kjente 3-4-5-trippelet.',
  },
  {
    question: 'Hva er hypotenusen i en rettvinklet trekant?',
    options: ['Den lengste siden, som ligger motsatt den rette vinkelen', 'Den korteste siden', 'Høyden i trekanten', 'En av de to sidene som lager den rette vinkelen'],
    explanation: 'Hypotenusen ligger alltid rett overfor 90°-vinkelen og er trekantens lengste side.',
  },
  {
    question: 'Hypotenusen er 13 cm og den ene kateten er 5 cm. Hvor lang er den andre kateten?',
    options: ['12 cm', '8 cm', '18 cm', '144 cm'],
    explanation: 'a² = 13² − 5² = 169 − 25 = 144, så a = √144 = 12 cm.',
  },
  {
    question: 'I hvilke trekanter gjelder Pytagoras\' setning?',
    options: ['Bare i rettvinklede trekanter', 'I alle trekanter', 'Bare i likesidede trekanter', 'Bare i likebeinte trekanter'],
    explanation: 'a² + b² = c² gjelder kun når trekanten har en vinkel på nøyaktig 90°.',
  },
  {
    question: 'En rettvinklet trekant har kateter på 6 cm og 8 cm. Hvor lang er hypotenusen?',
    options: ['10 cm', '14 cm', '12 cm', '100 cm'],
    explanation: 'c² = 6² + 8² = 36 + 64 = 100, så c = √100 = 10 cm.',
  },
],

  '7-4-4': [
  {
    question: 'En sylinder har radius 3 cm og høyde 10 cm. Hva er volumet (bruk π ≈ 3,14)?',
    options: ['282,6 cm³', '94,2 cm³', '1 130,4 cm³', '90 cm³'],
    explanation: 'V = π · r² · h = 3,14 · 9 · 10 = 282,6 cm³. Husk at radius skal i andre potens!',
  },
  {
    question: 'Hvordan finner vi arealet av en sammensatt figur?',
    options: ['Del figuren i rektangler og trekanter, regn ut hver del og legg sammen', 'Gang alle sidene med hverandre', 'Mål bare den lengste siden', 'Bruk alltid sirkelformelen'],
    explanation: 'Tegn hjelpelinjer som deler figuren i kjente former, regn hver del for seg, og summer (eller trekk fra hull).',
  },
  {
    question: 'En L-formet figur består av et rektangel på 6 m · 4 m og et på 2 m · 3 m. Hva er det samlede arealet?',
    options: ['30 m²', '24 m²', '36 m²', '15 m²'],
    explanation: '6 · 4 = 24 m² og 2 · 3 = 6 m². Til sammen: 24 + 6 = 30 m².',
  },
  {
    question: 'Hvor mange kubikkcentimeter er 1 liter?',
    options: ['1 000 cm³', '100 cm³', '10 cm³', '10 000 cm³'],
    explanation: '1 liter = 1 dm³ = 1 000 cm³.',
  },
  {
    question: 'En sylinder har diameter 8 cm. Hvilket tall setter du inn for r i formelen V = π · r² · h?',
    options: ['4', '8', '16', '64'],
    explanation: 'Formelen bruker radius, ikke diameter: r = 8 ÷ 2 = 4 cm. Å bruke diameteren er en vanlig feil!',
  },
],

  '7-5-1': [
  {
    question: 'Hva er populasjonen i en undersøkelse?',
    options: ['Hele gruppen vi vil vite noe om', 'De vi faktisk spør', 'Antall spørsmål', 'De som svarer ja'],
    explanation: 'Populasjonen er hele gruppen (f.eks. alle elevene på skolen), mens utvalget er de vi spør.',
  },
  {
    question: 'Hva er et utvalg?',
    options: ['Den delen av populasjonen vi faktisk spør', 'Alle i hele landet', 'Svarene vi liker best', 'Diagrammet vi lager'],
    explanation: 'Vi rekker sjelden å spørre alle — utvalget er de vi velger ut og spør.',
  },
  {
    question: 'Hva kjennetegner et representativt utvalg?',
    options: ['Det er tilfeldig valgt og stort nok til å ligne på populasjonen', 'Det består bare av vennene dine', 'Det er så lite som mulig', 'Alle i utvalget mener det samme'],
    explanation: 'Et representativt utvalg speiler populasjonen — da kan vi stole på konklusjonene.',
  },
  {
    question: 'På en skole med 200 elever spør du 40 tilfeldige elever, og 10 av dem svarer ja. Omtrent hvor mange av alle 200 ville svart ja?',
    options: ['Ca. 50', 'Ca. 10', 'Ca. 100', 'Ca. 25'],
    explanation: '10 av 40 er 25 %. Vi anslår samme andel i populasjonen: 25 % av 200 = 50 elever.',
  },
  {
    question: 'Hvorfor blir resultatet skjevt hvis du bare spør vennene dine?',
    options: ['Vennene dine ligner på deg og representerer ikke hele populasjonen', 'Venner svarer alltid feil', 'Det er ulovlig å spørre venner', 'Venner teller dobbelt i statistikk'],
    explanation: 'Venner har ofte like interesser som deg — utvalget blir ikke tilfeldig, og svarene blir skjeve.',
  },
],

  '7-5-2': [
  {
    question: 'Hvilket diagram passer best for å vise utvikling over tid?',
    options: ['Linjediagram', 'Sektordiagram', 'Søylediagram', 'Tabell'],
    explanation: 'Når tiden er på x-aksen, viser et linjediagram tydelig hvordan verdiene endrer seg.',
  },
  {
    question: 'Hva betyr cellenavnet B2 i et regneark?',
    options: ['Kolonne B, rad 2', 'Rad B, kolonne 2', 'Den andre formelen', 'Side 2 i arket'],
    explanation: 'Bokstaven er kolonnen og tallet er raden: B2 ligger i kolonne B, rad 2.',
  },
  {
    question: 'Hva må en formel i et regneark alltid starte med?',
    options: ['Et likhetstegn (=)', 'Et pluss (+)', 'Ordet «formel»', 'En parentes'],
    explanation: 'Formler starter med =, for eksempel =B2+B3 eller =SUMMER(B2:B4).',
  },
  {
    question: 'Hvor mange grader er hele sirkelen i et sektordiagram?',
    options: ['360°, som tilsvarer 100 %', '100°', '180°, som tilsvarer 100 %', '90°'],
    explanation: 'Hele sirkelen er 360° og representerer alt (100 %). Halvparten (50 %) blir 180°.',
  },
  {
    question: 'Hva gjør formelen =SUMMER(B2:B4)?',
    options: ['Legger sammen verdiene i B2, B3 og B4', 'Legger sammen bare B2 og B4', 'Ganger B2 med B4', 'Teller antall celler'],
    explanation: 'B2:B4 betyr området fra B2 til og med B4 — formelen summerer alle tre cellene.',
  },
],

  '7-5-3': [
  {
    question: 'Hvordan regner vi ut overskudd i et budsjett?',
    options: ['Inntekter minus utgifter', 'Utgifter minus inntekter', 'Inntekter pluss utgifter', 'Inntekter delt på utgifter'],
    explanation: 'Overskudd = inntekter − utgifter. Blir tallet negativt, har vi underskudd.',
  },
  {
    question: 'Sara tjener 600 kr i måneden og bruker 450 kr. Hva er overskuddet?',
    options: ['150 kr', '250 kr', '1 050 kr', '50 kr'],
    explanation: '600 − 450 = 150 kr i overskudd som kan spares.',
  },
  {
    question: 'Jonas vil spare 1 200 kr og setter av 200 kr hver måned. Hvor mange måneder tar det?',
    options: ['6 måneder', '5 måneder', '12 måneder', '8 måneder'],
    explanation: 'Mål ÷ beløp per måned: 1 200 ÷ 200 = 6 måneder.',
  },
  {
    question: 'Du sparer 25 % av 600 kr. Hvor mye er det?',
    options: ['150 kr', '125 kr', '200 kr', '240 kr'],
    explanation: '25 % = 0,25, og 0,25 · 600 = 150 kr. (Eller: en firedel av 600.)',
  },
  {
    question: 'Hva betyr et negativt tall i et budsjett?',
    options: ['Underskudd — du bruker mer enn du tjener', 'Overskudd — du sparer penger', 'At du har regnet feil', 'At du ikke har noen utgifter'],
    explanation: 'Når utgiftene er større enn inntektene, blir resultatet negativt: underskudd.',
  },
],

  '7-5-4': [
  {
    question: 'En vare har 30 % rabatt. Hvor mange prosent av prisen betaler du?',
    options: ['70 %', '30 %', '130 %', '103 %'],
    explanation: '100 % − 30 % = 70 %. Ny pris = gammel pris · 0,7.',
  },
  {
    question: 'En jakke koster 500 kr og selges med 20 % rabatt. Hva blir den nye prisen?',
    options: ['400 kr', '480 kr', '100 kr', '420 kr'],
    explanation: 'Du betaler 80 %: 500 · 0,8 = 400 kr. (Rabatten er 100 kr.)',
  },
  {
    question: 'En butikk kjøper inn en vare for 400 kr og legger på 25 %. Hva blir salgsprisen?',
    options: ['500 kr', '425 kr', '450 kr', '525 kr'],
    explanation: 'Påslag: 400 · 1,25 = 500 kr.',
  },
  {
    question: 'Prisen øker fra 200 kr til 250 kr. Hvor stor er den prosentvise økningen?',
    options: ['25 %', '50 %', '20 %', '125 %'],
    explanation: 'Endring ÷ opprinnelig verdi: 50 ÷ 200 = 0,25 = 25 %. Del alltid på den opprinnelige prisen!',
  },
  {
    question: 'En vare på 100 kr får først 10 % rabatt, og deretter 10 % rabatt til. Hva blir prisen?',
    options: ['81 kr', '80 kr', '90 kr', '79 kr'],
    explanation: 'Først 100 · 0,9 = 90 kr, så 90 · 0,9 = 81 kr. To rabatter på 10 % er IKKE det samme som 20 %.',
  },
],

};

export default quizData_matematikk_7;
