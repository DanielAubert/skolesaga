import type { QuizQuestion } from './quiz-data';

const quizData_kjemi2: Record<string, QuizQuestion[]> = {
  'kjemi2-1-1': [
    {
      question: 'Hva er IUPAC-navnet på forbindelsen FeCl₃?',
      options: ['Jern(III)klorid', 'Jern(II)klorid', 'Jernklorid', 'Treklorjern'],
      explanation: 'Jern er flerverdig, så oksidasjonstallet angis med romertall. I FeCl₃ har jern +3, altså jern(III)klorid.',
    },
    {
      question: 'Hva viser en empirisk formel?',
      options: ['Det enkleste heltallsforholdet mellom atomene', 'Det nøyaktige antallet atomer i molekylet', 'Hvordan atomene er bundet sammen', 'Bare karbonskjelettet'],
      explanation: 'Empirisk formel gir det enkleste forholdet mellom atomene. Glukose C₆H₁₂O₆ har empirisk formel CH₂O (forhold 1:2:1).',
    },
    {
      question: 'Hvilken endelse brukes for alkoholer i IUPAC-nomenklatur?',
      options: ['-ol', '-al', '-on', '-syre'],
      explanation: 'Alkoholer får endelsen -ol (metanol, etanol). -al er aldehyder, -on er ketoner og -syre er karboksylsyrer.',
    },
    {
      question: 'Hvilken av disse er en diatomisk gass («HONClBrIF»)?',
      options: ['O₂', 'Ne', 'Ar', 'He'],
      explanation: 'Oksygen finnes som O₂. Diatomiske grunnstoffer er H, O, N, Cl, Br, I, F – mens edelgassene He, Ne og Ar er enatomige.',
    },
    {
      question: 'Hva er IUPAC-navnet på CH₃COOH?',
      options: ['Etansyre', 'Metansyre', 'Etanol', 'Propansyre'],
      explanation: 'CH₃COOH har to karbonatomer og en karboksylgruppe, altså etansyre (trivielt: eddiksyre).',
    },
  ],
  'kjemi2-1-2': [
    {
      question: 'Hva sier Hunds regel om utfylling av orbitaler?',
      options: ['Elektroner fyller orbitaler enkeltvis før de pares', 'Elektroner pares alltid først', 'Orbitalene fylles tilfeldig', 's-orbitaler fylles sist'],
      explanation: 'Etter Hunds regel fyller elektroner orbitaler enkeltvis med parallelle spinn før de begynner å pares opp.',
    },
    {
      question: 'Hva er elektronkonfigurasjonen til neon (10 elektroner)?',
      options: ['1s² 2s² 2p⁶', '1s² 2s² 2p⁴', '1s² 2s² 2p⁶ 3s²', '1s² 2p⁸'],
      explanation: 'Neon har 10 elektroner: 2 i 1s, 2 i 2s og 6 i 2p, altså 1s² 2s² 2p⁶.',
    },
    {
      question: 'Hvordan endrer atomradius seg nedover en gruppe i periodesystemet?',
      options: ['Den øker (flere elektronskall)', 'Den minker', 'Den er konstant', 'Den blir null'],
      explanation: 'Nedover en gruppe legges det til flere elektronskall, slik at atomradiusen øker.',
    },
    {
      question: 'Hvordan endrer elektronegativiteten seg bortover en periode (mot høyre)?',
      options: ['Den øker', 'Den minker', 'Den er konstant', 'Den blir negativ'],
      explanation: 'Bortover en periode øker kjerneladningen og dermed evnen til å tiltrekke elektroner – elektronegativiteten øker.',
    },
    {
      question: 'Hvor mange valenselektroner har grunnstoffer i gruppe 17 (halogenene)?',
      options: ['7', '1', '8', '2'],
      explanation: 'Halogenene i gruppe 17 har 7 valenselektroner og mangler ett for å oppnå edelgasstruktur.',
    },
  ],
  'kjemi2-1-3': [
    {
      question: 'Hvor mange partikler er det i 1 mol av et stoff (Avogadros tall)?',
      options: ['6,022 × 10²³', '6,022 × 10¹⁰', '3,14 × 10²³', '1,0 × 10¹⁴'],
      explanation: 'Avogadros tall er 6,022 × 10²³ partikler per mol.',
    },
    {
      question: 'Hvor mange mol er 1,2 × 10²⁴ molekyler? (n = N/Nₐ)',
      options: ['2,0 mol', '0,5 mol', '1,2 mol', '7,2 mol'],
      explanation: 'n = N/Nₐ = (1,2 × 10²⁴) / (6,022 × 10²³) ≈ 2,0 mol.',
    },
    {
      question: 'Hva er molar masse av vann, H₂O? (M(H)=1,01; M(O)=16,00)',
      options: ['18,02 g/mol', '17,01 g/mol', '34,02 g/mol', '16,00 g/mol'],
      explanation: 'M(H₂O) = 2 × 1,01 + 16,00 = 18,02 g/mol.',
    },
    {
      question: 'Hvilket volum opptar 1 mol ideell gass ved STP (0 °C, 1 atm)?',
      options: ['22,4 L', '24,5 L', '1,0 L', '101,3 L'],
      explanation: 'Molart volum ved STP er 22,4 L/mol for alle ideelle gasser.',
    },
    {
      question: 'Hvor mange mol er 36,0 g vann? (M(H₂O) = 18,0 g/mol, n = m/M)',
      options: ['2,0 mol', '1,0 mol', '0,5 mol', '18 mol'],
      explanation: 'n = m/M = 36,0 g / 18,0 g/mol = 2,0 mol.',
    },
  ],
  'kjemi2-2-1': [
    {
      question: 'Hva kjennetegner en eksoterm reaksjon?',
      options: ['Den frigjør energi til omgivelsene (ΔH < 0)', 'Den absorberer energi (ΔH > 0)', 'Den har ingen energiendring', 'Den krever alltid katalysator'],
      explanation: 'En eksoterm reaksjon frigjør varme til omgivelsene og har negativt fortegn på ΔH.',
    },
    {
      question: 'Hva er entalpiforandring (ΔH) definert som?',
      options: ['H(produkter) − H(reaktanter)', 'H(reaktanter) − H(produkter)', 'H(produkter) × H(reaktanter)', 'Bare energien i reaktantene'],
      explanation: 'ΔH = H(produkter) − H(reaktanter). Negativ ΔH betyr eksoterm, positiv betyr endoterm.',
    },
    {
      question: 'Krever det energi å bryte kjemiske bindinger eller frigjøres det energi?',
      options: ['Det krever energi (endotermt)', 'Det frigjør alltid energi', 'Det skjer uten energiendring', 'Det avhenger av temperatur alene'],
      explanation: 'Å bryte bindinger krever energi (endotermt), mens dannelse av bindinger frigjør energi (eksotermt).',
    },
    {
      question: 'Hva sier termodynamikkens første lov?',
      options: ['Energi kan verken skapes eller ødelegges, bare omformes', 'Entropien øker alltid', 'Alle reaksjoner er eksoterme', 'Energi forsvinner under reaksjoner'],
      explanation: 'Første termodynamiske lov er loven om energibevaring: energi kan bare omformes, ikke skapes eller forsvinne.',
    },
    {
      question: 'Hvilke standardbetingelser gjelder for ΔH°?',
      options: ['1 bar, 25 °C (298 K), 1 M for løsninger', '1 atm, 0 °C, 0,1 M', '2 bar, 100 °C, 2 M', '0 bar, 0 K, 0 M'],
      explanation: 'Standard entalpiforandring måles ved 1 bar, 25 °C (298 K) og 1 M konsentrasjon, med stoffene i mest stabil form.',
    },
  ],
  'kjemi2-2-2': [
    {
      question: 'Hva er entropi (S) et mål på?',
      options: ['Graden av uorden i et system', 'Mengden energi som frigjøres', 'Temperaturen i systemet', 'Antall bindinger som brytes'],
      explanation: 'Entropi er et mål på uorden – antall mulige måter partiklene kan arrangeres på.',
    },
    {
      question: 'Hvilken tilstand har høyest entropi?',
      options: ['Gass', 'Fast stoff', 'Krystall ved 0 K', 'Is'],
      explanation: 'Gass har høyest entropi fordi partiklene har størst bevegelsesfrihet og flest mulige mikrotilstander.',
    },
    {
      question: 'Hva sier termodynamikkens andre lov?',
      options: ['Entropien i et isolert system øker eller forblir konstant', 'Entropien minker alltid', 'Energi kan skapes', 'Alle reaksjoner er spontane'],
      explanation: 'Andre lov sier at total entropi (ΔS_univers) alltid øker eller forblir konstant: ΔS_univers ≥ 0.',
    },
    {
      question: 'Hva skjer med entropien når et fast stoff løses opp i vann?',
      options: ['Entropien øker', 'Entropien minker', 'Entropien er uendret', 'Entropien blir null'],
      explanation: 'Når et fast stoff løses opp, spres ionene/molekylene ut i løsningen, og uorden (entropi) øker.',
    },
    {
      question: 'Hva er en viktig forskjell mellom standard molar entropi (S°) og standard dannelsesentalpi (ΔH°f)?',
      options: ['Grunnstoffer har S° > 0, men ΔH°f = 0', 'Begge er null for grunnstoffer', 'S° er alltid negativ', 'ΔH°f er alltid positiv'],
      explanation: 'Grunnstoffer har ΔH°f = 0 per definisjon, men alle stoffer har en målbar positiv S° (unntatt perfekte krystaller ved 0 K).',
    },
  ],
  'kjemi2-2-3': [
    {
      question: 'Hva er formelen for Gibbs fri energiforandring?',
      options: ['ΔG = ΔH − TΔS', 'ΔG = ΔH + TΔS', 'ΔG = TΔS − ΔH', 'ΔG = ΔH × TΔS'],
      explanation: 'Gibbs fri energi kombinerer entalpi og entropi: ΔG = ΔH − TΔS (T i kelvin).',
    },
    {
      question: 'Når er en reaksjon spontan?',
      options: ['Når ΔG < 0', 'Når ΔG > 0', 'Når ΔG = 0', 'Når ΔH > 0'],
      explanation: 'En reaksjon er spontan når ΔG er negativ (ΔG < 0). Ved ΔG = 0 er systemet i likevekt.',
    },
    {
      question: 'En reaksjon har ΔH = −100 kJ/mol og ΔS = −0,20 kJ/(mol·K). Hva er ΔG ved 300 K?',
      options: ['−40 kJ/mol', '−160 kJ/mol', '+40 kJ/mol', '−100 kJ/mol'],
      explanation: 'ΔG = ΔH − TΔS = −100 − 300 × (−0,20) = −100 + 60 = −40 kJ/mol. Reaksjonen er spontan.',
    },
    {
      question: 'En reaksjon med ΔH < 0 og ΔS > 0 er spontan ved...',
      options: ['Alle temperaturer', 'Bare lave temperaturer', 'Bare høye temperaturer', 'Ingen temperaturer'],
      explanation: 'Med ΔH negativ og ΔS positiv blir ΔG = ΔH − TΔS alltid negativ, så reaksjonen er spontan ved alle temperaturer.',
    },
    {
      question: 'Ved hvilken temperatur er en reaksjon i likevekt (ΔG = 0)?',
      options: ['T = ΔH/ΔS', 'T = ΔS/ΔH', 'T = ΔH × ΔS', 'T = ΔH − ΔS'],
      explanation: 'Ved ΔG = 0 gir ΔH − TΔS = 0, altså T = ΔH/ΔS.',
    },
  ],
  'kjemi2-2-4': [
    {
      question: 'Hva er forskjellen mellom termodynamikk og kinetikk?',
      options: ['Termodynamikk bestemmer retning og utbytte; kinetikk bestemmer hastighet', 'Termodynamikk bestemmer hastighet; kinetikk bestemmer retning', 'Begge bestemmer bare hastighet', 'Begge bestemmer bare retning'],
      explanation: 'Termodynamikken sier hvor reaksjonen vil gå (retning og utbytte), mens kinetikken sier hvor raskt den kommer dit.',
    },
    {
      question: 'Hva er prinsippet bak koplede reaksjoner?',
      options: ['En spontan reaksjon driver en ikke-spontan reaksjon', 'To ikke-spontane reaksjoner blir spontane', 'Energi forsvinner', 'Begge reaksjonene må være eksoterme'],
      explanation: 'En spontan reaksjon (negativ ΔG) kan kobles til en ikke-spontan slik at summen ΔG_total blir negativ.',
    },
    {
      question: 'Hvorfor er Haber-prosessen et kompromiss?',
      options: ['Lav temperatur er gunstig termodynamisk, men høy temperatur trengs for tilstrekkelig hastighet', 'Den krever ingen katalysator', 'Den er alltid spontan', 'Trykk har ingen betydning'],
      explanation: 'Termodynamikken favoriserer lav temperatur for høyt utbytte, men kinetikken krever høyere temperatur for akseptabel hastighet – derfor et kompromiss.',
    },
    {
      question: 'Hva er ΔG_total for to koplede reaksjoner?',
      options: ['ΔG₁ + ΔG₂', 'ΔG₁ × ΔG₂', 'ΔG₁ − ΔG₂', 'ΔG₁ / ΔG₂'],
      explanation: 'Gibbs fri energi for koplede reaksjoner er summen: ΔG_total = ΔG₁ + ΔG₂.',
    },
    {
      question: 'Hvordan kan en industriprosess gjøres mer bærekraftig?',
      options: ['Ved varmegjenvinning og bruk av katalysatorer', 'Ved å øke avfallsmengden', 'Ved å ignorere energieffektivitet', 'Ved å bruke mest mulig fossil energi'],
      explanation: 'Bærekraftige prosesser utnytter spillvarme, bruker katalysatorer og fornybar energi for å redusere energiforbruk og utslipp.',
    },
  ],
  'kjemi2-3-1': [
    {
      question: 'Hva kjennetegner en reversibel reaksjon?',
      options: ['Den kan gå begge veier og noteres med dobbel pil (⇌)', 'Den går bare én vei til reaktanten er oppbrukt', 'Den krever alltid oksygen', 'Den frigjør alltid energi'],
      explanation: 'En reversibel reaksjon kan gå begge veier; produktene kan reagere tilbake til reaktanter, vist med ⇌.',
    },
    {
      question: 'Hva kjennetegner dynamisk likevekt?',
      options: ['Fremover- og bakoverreaksjonen skjer med samme hastighet', 'All reaksjon har stoppet', 'Konsentrasjonene av reaktant og produkt er alltid like', 'Bare fremoverreaksjonen skjer'],
      explanation: 'Ved dynamisk likevekt går begge reaksjoner like raskt, slik at konsentrasjonene er konstante (men ikke nødvendigvis like).',
    },
    {
      question: 'Hva betyr det at konsentrasjonene er konstante ved likevekt?',
      options: ['Det er ingen netto endring, men begge reaksjoner pågår fortsatt', 'Alle molekyler står helt stille', 'Reaksjonen er ferdig', 'Bare produktet finnes igjen'],
      explanation: 'Konstante konsentrasjoner skyldes at fremover- og bakoverreaksjonen balanserer hverandre – det er en dynamisk balanse, ikke stillstand.',
    },
    {
      question: 'Hvilken observasjon viser likevekt i reaksjonen N₂O₄ ⇌ 2NO₂?',
      options: ['En konstant brunfarge (blanding av fargeløs N₂O₄ og brunrød NO₂)', 'Fullstendig fargeløs løsning alltid', 'En eksplosjon', 'Gassen forsvinner helt'],
      explanation: 'N₂O₄ er fargeløs og NO₂ brunrød; ved likevekt stabiliserer fargen seg fordi konsentrasjonene er konstante.',
    },
    {
      question: 'Ved likevekt gjelder hvilket forhold mellom reaksjonshastighetene?',
      options: ['v_frem = v_bak', 'v_frem > v_bak', 'v_frem < v_bak', 'v_frem = 0'],
      explanation: 'Ved dynamisk likevekt er hastigheten på fremoverreaksjonen lik hastigheten på bakoverreaksjonen.',
    },
  ],
  'kjemi2-3-2': [
    {
      question: 'Hvem formulerte massevirkningsloven i 1864?',
      options: ['Guldberg og Waage', 'Le Chatelier', 'Brønsted og Lowry', 'Arrhenius'],
      explanation: 'De norske kjemikerne Cato Guldberg og Peter Waage formulerte massevirkningsloven i 1864.',
    },
    {
      question: 'For reaksjonen aA + bB ⇌ cC + dD, hva er likevektsuttrykket K?',
      options: ['[C]ᶜ[D]ᵈ / ([A]ᵃ[B]ᵇ)', '[A]ᵃ[B]ᵇ / ([C]ᶜ[D]ᵈ)', '[C][D] / [A][B]', '[A][B][C][D]'],
      explanation: 'K = [C]ᶜ[D]ᵈ / ([A]ᵃ[B]ᵇ) – produkter over reaktanter, opphøyd i de støkiometriske koeffisientene.',
    },
    {
      question: 'For H₂ + I₂ ⇌ 2HI ved likevekt er [H₂] = 0,20 M, [I₂] = 0,20 M og [HI] = 0,80 M. Hva er K?',
      options: ['16', '4', '2', '0,80'],
      explanation: 'K = [HI]² / ([H₂][I₂]) = 0,80² / (0,20 × 0,20) = 0,64 / 0,04 = 16.',
    },
    {
      question: 'Hva endrer verdien av likevektskonstanten K?',
      options: ['Endring i temperatur', 'Endring i startkonsentrasjoner', 'Tilsetting av katalysator', 'Endring i totalvolum'],
      explanation: 'K er konstant ved gitt temperatur og endres bare når temperaturen endres – ikke av konsentrasjon eller katalysator.',
    },
    {
      question: 'Hva forteller en stor verdi av K (K >> 1) om en likevekt?',
      options: ['Likevekten ligger mot produktsiden', 'Likevekten ligger mot reaktantsiden', 'Reaksjonen er ikke reversibel', 'Det er like mye reaktant og produkt'],
      explanation: 'Stor K betyr at telleren (produkter) dominerer, altså at likevekten ligger langt mot produktsiden.',
    },
  ],
  'kjemi2-3-3': [
    {
      question: 'Hva sier Le Chateliers prinsipp?',
      options: ['Et system i likevekt forskyver seg slik at en påvirkning motvirkes', 'Likevekten forskyves alltid mot høyre', 'Katalysator forskyver likevekten', 'Likevekten kan ikke endres'],
      explanation: 'Le Chateliers prinsipp: Når et likevektssystem forstyrres, forskyver det seg i retningen som motvirker forstyrrelsen.',
    },
    {
      question: 'Hva skjer med likevekten hvis du øker konsentrasjonen av en reaktant?',
      options: ['Den forskyves mot høyre (mer produkt dannes)', 'Den forskyves mot venstre', 'Den endres ikke', 'Reaksjonen stopper'],
      explanation: 'Økt reaktantkonsentrasjon forskyver likevekten mot produktsiden for å «bruke opp» det ekstra som ble tilført.',
    },
    {
      question: 'For N₂(g) + 3H₂(g) ⇌ 2NH₃(g), hvilken trykkøkning favoriserer NH₃-dannelse?',
      options: ['Økt trykk, fordi det er færre gassmolekyler på produktsiden', 'Redusert trykk', 'Trykk har ingen effekt', 'Bare temperaturen betyr noe'],
      explanation: 'Det er 4 gassmolekyler til venstre og 2 til høyre. Økt trykk forskyver likevekten mot siden med færrest gassmolekyler (NH₃).',
    },
    {
      question: 'Hvordan påvirker en katalysator likevektsposisjonen?',
      options: ['Den påvirker ikke posisjonen, bare hvor raskt likevekt nås', 'Den forskyver likevekten mot høyre', 'Den forskyver likevekten mot venstre', 'Den øker verdien av K'],
      explanation: 'En katalysator øker hastigheten på begge reaksjonene likt, slik at likevekt nås raskere, men selve posisjonen (K) er uendret.',
    },
    {
      question: 'For en eksoterm reaksjon, hva skjer med likevekten når temperaturen økes?',
      options: ['Den forskyves mot venstre (mot reaktanter)', 'Den forskyves mot høyre', 'Den endres ikke', 'Reaksjonen blir endoterm'],
      explanation: 'For en eksoterm reaksjon kan varme regnes som et «produkt». Økt temperatur forskyver likevekten mot reaktantsiden.',
    },
  ],
  'kjemi2-3-4': [
    {
      question: 'Hva står bokstavene i en ICE-tabell for?',
      options: ['Initial, Change, Equilibrium', 'Ion, Concentration, Energy', 'Initial, Constant, Endpoint', 'Increase, Change, Equal'],
      explanation: 'ICE står for Initial (start), Change (endring) og Equilibrium (likevekt) – en systematisk metode for likevektsberegninger.',
    },
    {
      question: 'I C-raden av en ICE-tabell, hvilket fortegn har reaktantene?',
      options: ['Negativt (konsentrasjonen minker)', 'Positivt (konsentrasjonen øker)', 'Alltid null', 'Det samme som produktene'],
      explanation: 'Reaktanter forbrukes, så endringen i C-raden er negativ (−x), mens produkter får positivt fortegn (+x).',
    },
    {
      question: 'Hva brukes reaksjonskvotienten Q til?',
      options: ['Å avgjøre om systemet er i likevekt og hvilken retning det vil gå', 'Å beregne temperaturen', 'Å bestemme molar masse', 'Å finne ΔH'],
      explanation: 'Q har samme form som K, men med øyeblikkskonsentrasjoner. Ved å sammenligne Q med K ser man hvilken vei reaksjonen vil gå.',
    },
    {
      question: 'Hvis Q < K, hvilken vei vil reaksjonen gå?',
      options: ['Mot høyre (mot produkter)', 'Mot venstre (mot reaktanter)', 'Den er allerede i likevekt', 'Den stopper helt'],
      explanation: 'Når Q < K er det for mye reaktant; reaksjonen går mot høyre (danner mer produkt) til Q = K.',
    },
    {
      question: 'Når kan man bruke tilnærmingen at x er neglisjerbar i forhold til startkonsentrasjonen?',
      options: ['Når K er svært liten', 'Når K er svært stor', 'Alltid', 'Aldri'],
      explanation: 'Når K er svært liten, går reaksjonen lite mot produkter, og x blir så liten at den kan neglisjeres i forhold til startkonsentrasjonen.',
    },
  ],
  'kjemi2-3-5': [
    {
      question: 'Hva er sammenhengen mellom Gibbs fri energi og likevektskonstanten?',
      options: ['ΔG° = −RT ln K', 'ΔG° = RT ln K', 'ΔG° = −RT/K', 'ΔG° = K/RT'],
      explanation: 'Den fundamentale sammenhengen er ΔG° = −RT ln K, der R = 8,314 J/(mol·K) og T er temperaturen i kelvin.',
    },
    {
      question: 'Hva er ΔG° når K = 1?',
      options: ['0', 'Negativ', 'Positiv', 'Uendelig'],
      explanation: 'Når K = 1 er ln K = 0, så ΔG° = −RT × 0 = 0. Systemet er i likevekt under standardbetingelser.',
    },
    {
      question: 'Hvis K > 1, hva er fortegnet på ΔG°?',
      options: ['Negativt', 'Positivt', 'Null', 'Det varierer tilfeldig'],
      explanation: 'Når K > 1 er ln K > 0, så ΔG° = −RT ln K blir negativ – reaksjonen er spontan mot produkter under standardbetingelser.',
    },
    {
      question: 'Hvilken likning beskriver hvordan K endres med temperatur?',
      options: ['Van\'t Hoff-likningen', 'Henderson-Hasselbalch-likningen', 'Arrhenius-likningen', 'Nernst-likningen'],
      explanation: 'Van\'t Hoff-likningen, ln(K₂/K₁) = −(ΔH°/R)(1/T₂ − 1/T₁), beskriver temperaturavhengigheten til K.',
    },
    {
      question: 'Hvilken konstant brukes som R i formelen ΔG° = −RT ln K?',
      options: ['8,314 J/(mol·K)', '6,022 × 10²³', '1,38 × 10⁻²³ J/K', '22,4 L/mol'],
      explanation: 'R er gasskonstanten 8,314 J/(mol·K). Husk å bruke konsistente enheter (J når R er i J).',
    },
  ],
  'kjemi2-4-1': [
    {
      question: 'Hva er en syre ifølge Brønsted-Lowry-definisjonen?',
      options: ['En protondonor (gir fra seg H⁺)', 'En protonakseptor (tar opp H⁺)', 'Et stoff som gir fra seg OH⁻', 'Et stoff som tar opp elektroner'],
      explanation: 'En Brønsted-Lowry-syre er en protondonor som gir fra seg et proton (H⁺); en base tar opp protonet.',
    },
    {
      question: 'Hva er den konjugerte basen til HCl?',
      options: ['Cl⁻', 'H₃O⁺', 'OH⁻', 'H₂O'],
      explanation: 'Når HCl gir fra seg H⁺, blir det igjen Cl⁻, som er den konjugerte basen til HCl.',
    },
    {
      question: 'Hva betyr det at vann er amfotert?',
      options: ['Det kan opptre både som syre og base', 'Det er alltid en sterk syre', 'Det er alltid en sterk base', 'Det reagerer ikke med protoner'],
      explanation: 'Vann er amfotert: det kan gi fra seg H⁺ (syre) eller ta opp H⁺ (base) avhengig av reaksjonspartner.',
    },
    {
      question: 'Hva skiller en syre og dens konjugerte base?',
      options: ['Ett proton (H⁺)', 'Ett elektron', 'Ett oksygenatom', 'En hel formelenhet'],
      explanation: 'Et konjugert syre-basepar skiller seg fra hverandre med nøyaktig ett proton (H⁺).',
    },
    {
      question: 'Hva slags konjugert base har en sterk syre?',
      options: ['En svak konjugert base', 'En sterk konjugert base', 'Ingen konjugert base', 'En amfoter base'],
      explanation: 'Sterke syrer dissosierer fullstendig og har svake konjugerte baser; svake syrer har sterkere konjugerte baser.',
    },
  ],
  'kjemi2-4-2': [
    {
      question: 'Hva er verdien av vannproduktet Kw ved 25 °C?',
      options: ['1,0 × 10⁻¹⁴', '1,0 × 10⁻⁷', '1,0 × 10⁻¹', '7,0'],
      explanation: 'Ved 25 °C er Kw = [H₃O⁺][OH⁻] = 1,0 × 10⁻¹⁴ M².',
    },
    {
      question: 'Hva er pH i en løsning med [H₃O⁺] = 1,0 × 10⁻³ M?',
      options: ['3', '11', '7', '−3'],
      explanation: 'pH = −log[H₃O⁺] = −log(1,0 × 10⁻³) = 3.',
    },
    {
      question: 'Hva er [H₃O⁺] i rent vann ved 25 °C?',
      options: ['1,0 × 10⁻⁷ M', '1,0 × 10⁻¹⁴ M', '1,0 × 10⁻¹ M', '7,0 M'],
      explanation: 'I rent vann er [H₃O⁺] = [OH⁻] = √Kw = √(1,0 × 10⁻¹⁴) = 1,0 × 10⁻⁷ M.',
    },
    {
      question: 'En 0,010 M sterk syre (HCl) er fullstendig dissosiert. Hva er pH?',
      options: ['2', '1', '12', '10'],
      explanation: 'HCl dissosierer fullstendig, så [H₃O⁺] = 0,010 M = 10⁻², og pH = −log(10⁻²) = 2.',
    },
    {
      question: 'Hva er summen av pH og pOH i en vandig løsning ved 25 °C?',
      options: ['14', '7', '1', '10'],
      explanation: 'Siden Kw = 10⁻¹⁴, gjelder pH + pOH = 14 ved 25 °C.',
    },
  ],
  'kjemi2-4-3': [
    {
      question: 'Hva er ekvivalenspunktet i en titrering?',
      options: ['Punktet der syre og base har reagert i nøyaktig støkiometrisk forhold', 'Punktet der indikatoren tilsettes', 'Punktet der titreringen starter', 'Punktet der byretten fylles'],
      explanation: 'Ekvivalenspunktet er der syren og basen har reagert i nøyaktig støkiometrisk forhold (1:1 for enprotiske syrer/baser).',
    },
    {
      question: 'Hva er pH ved ekvivalenspunktet når en sterk syre titreres med en sterk base?',
      options: ['7,00 (nøytralt)', 'Under 3', 'Over 10', 'Akkurat 4,76'],
      explanation: 'Ved titrering av sterk syre med sterk base dannes et nøytralt salt (f.eks. NaCl), og pH ved ekvivalenspunktet er 7,00.',
    },
    {
      question: 'Hva er forskjellen mellom ekvivalenspunkt og endepunkt?',
      options: ['Endepunktet er der indikatoren skifter farge; ekvivalenspunktet er det støkiometriske punktet', 'De er alltid nøyaktig like', 'Endepunktet kommer alltid før titreringen starter', 'Ekvivalenspunktet er der byretten tømmes'],
      explanation: 'Ekvivalenspunktet er det teoretiske, støkiometriske punktet; endepunktet er der indikatoren faktisk skifter farge (ideelt like).',
    },
    {
      question: 'Hva er en standardløsning?',
      options: ['En løsning med nøyaktig kjent konsentrasjon', 'En løsning uten indikator', 'En mettet løsning', 'En løsning med ukjent konsentrasjon'],
      explanation: 'En standardløsning (titrant) har en nøyaktig kjent konsentrasjon og brukes til å bestemme konsentrasjonen til analytten.',
    },
    {
      question: 'Hvorfor er pH ved ekvivalenspunktet over 7 ved titrering av en svak syre med sterk base?',
      options: ['Saltet som dannes inneholder en basisk konjugert base', 'Det dannes overskudd av syre', 'Vann gjør løsningen sur', 'Indikatoren hever pH'],
      explanation: 'Den konjugerte basen fra den svake syren reagerer med vann og gir en svakt basisk løsning, slik at pH ved ekvivalenspunktet blir over 7.',
    },
  ],
  'kjemi2-4-4': [
    {
      question: 'Hva er en bufferløsning?',
      options: ['En løsning som motstår pH-endringer ved tilsetting av små mengder syre eller base', 'En løsning som alltid har pH 7', 'En løsning uten ioner', 'En sterk syre i høy konsentrasjon'],
      explanation: 'En buffer motstår pH-endringer fordi den inneholder både en svak syre og dens konjugerte base (eller motsatt).',
    },
    {
      question: 'Hvilke komponenter består en acetatbuffer av?',
      options: ['CH₃COOH og CH₃COO⁻', 'HCl og NaOH', 'NaCl og vann', 'H₂SO₄ og Na₂SO₄'],
      explanation: 'En acetatbuffer består av den svake syren eddiksyre (CH₃COOH) og dens konjugerte base acetat (CH₃COO⁻).',
    },
    {
      question: 'Hva er Henderson-Hasselbalch-likningen?',
      options: ['pH = pKa + log([A⁻]/[HA])', 'pH = pKa − log([A⁻]/[HA])', 'pH = −log[H⁺] + pKa', 'pH = pKa × log([A⁻]/[HA])'],
      explanation: 'Henderson-Hasselbalch-likningen er pH = pKa + log([A⁻]/[HA]) og brukes til å beregne pH i bufferløsninger.',
    },
    {
      question: 'Hva er pH i en buffer der [A⁻] = [HA]?',
      options: ['pH = pKa', 'pH = 7', 'pH = 14', 'pH = 0'],
      explanation: 'Når [A⁻] = [HA] blir log(1) = 0, slik at pH = pKa.',
    },
    {
      question: 'Hva skjer når man tilsetter en liten mengde sterk syre (H₃O⁺) til en buffer?',
      options: ['Den konjugerte basen A⁻ reagerer med H₃O⁺ slik at pH endres lite', 'pH faller dramatisk', 'Bufferen slutter å virke umiddelbart', 'Vannproduktet endres'],
      explanation: 'Den konjugerte basen nøytraliserer tilsatt syre (A⁻ + H₃O⁺ → HA + H₂O), slik at pH bare endres litt.',
    },
  ],
  'kjemi2-4-5': [
    {
      question: 'Hva er en diprotisk syre?',
      options: ['En syre som kan gi fra seg to protoner', 'En syre som gir fra seg ett proton', 'En syre som gir fra seg tre protoner', 'En base som tar opp to protoner'],
      explanation: 'En diprotisk syre kan gi fra seg to protoner (f.eks. H₂SO₄, H₂CO₃) i to trinn.',
    },
    {
      question: 'Hvilken sammenheng gjelder mellom Ka1 og Ka2 for en flerprotisk syre?',
      options: ['Ka1 >> Ka2', 'Ka1 << Ka2', 'Ka1 = Ka2', 'Ka1 = 0'],
      explanation: 'Ka1 er mye større enn Ka2 fordi det er lettere å fjerne første proton fra et nøytralt molekyl enn andre proton fra et negativt ion.',
    },
    {
      question: 'Hvorfor er Ka2 mye mindre enn Ka1?',
      options: ['Andre proton fjernes fra et negativt ion, noe som krever mer energi', 'Andre proton fjernes lettere', 'Begge protoner er like lette å fjerne', 'Vann hindrer dissosiasjon'],
      explanation: 'Andre proton må fjernes fra et negativt ladet ion (HA⁻), og elektrostatisk frastøting gjør dette vanskeligere, så Ka2 << Ka1.',
    },
    {
      question: 'Hvilken av disse er en triprotisk syre?',
      options: ['H₃PO₄ (fosforsyre)', 'HCl', 'CH₃COOH', 'H₂CO₃'],
      explanation: 'Fosforsyre, H₃PO₄, kan gi fra seg tre protoner og er triprotisk; HCl er enprotisk og H₂CO₃ diprotisk.',
    },
    {
      question: 'For karbonsyre er Ka1 = 4,3 × 10⁻⁷. Hva er pKa1? (pKa = −log Ka)',
      options: ['Ca. 6,37', 'Ca. 7,0', 'Ca. 4,3', 'Ca. 10,3'],
      explanation: 'pKa1 = −log(4,3 × 10⁻⁷) ≈ 6,37.',
    },
  ],
  'kjemi2-5-1': [
    {
      question: 'Hva er løselighet (S)?',
      options: ['Maksimal mengde stoff som kan løses i et gitt volum løsemiddel ved en bestemt temperatur', 'Massen av løsemiddelet', 'Mengden bunnfall som dannes', 'Temperaturen ved metning'],
      explanation: 'Løselighet er maksimal mengde stoff som løses i et gitt volum løsemiddel ved en bestemt temperatur, ofte i g/L eller mol/L.',
    },
    {
      question: 'Hva kjennetegner en mettet løsning?',
      options: ['Den inneholder maksimal mengde oppløst stoff og er i likevekt med fast stoff', 'Den inneholder lite oppløst stoff', 'Den kan løse ubegrenset mer stoff', 'Den har ingen ioner'],
      explanation: 'En mettet løsning inneholder maksimal mengde oppløst stoff; det er likevekt mellom oppløsning og utfelling.',
    },
    {
      question: 'Hvordan endrer løseligheten av en gass i væske seg når temperaturen øker?',
      options: ['Den minker', 'Den øker', 'Den er uendret', 'Den blir uendelig'],
      explanation: 'Løseligheten av gasser i væske minker med økende temperatur – derfor bobler CO₂ ut av varm brus.',
    },
    {
      question: 'Hva sier Henrys lov?',
      options: ['Løseligheten av en gass er proporsjonal med trykket over væsken', 'Løseligheten øker med temperaturen', 'Faste stoffer løses bedre ved lavt trykk', 'Trykk har ingen effekt på løselighet'],
      explanation: 'Henrys lov sier at løseligheten av en gass er proporsjonal med partialtrykket av gassen over væsken.',
    },
    {
      question: 'Hva skjer vanligvis med løseligheten av et fast stoff når temperaturen øker?',
      options: ['Den øker vanligvis', 'Den minker alltid', 'Den er uendret', 'Den blir null'],
      explanation: 'For de fleste faste stoffer øker løseligheten med temperaturen, slik sukker løses lettere i varmt vann.',
    },
  ],
  'kjemi2-5-2': [
    {
      question: 'Hva er løselighetsproduktet Ksp?',
      options: ['Likevektskonstanten for oppløsning av et tungt løselig salt', 'Massen av bunnfallet', 'Temperaturen ved metning', 'pH i løsningen'],
      explanation: 'Ksp er likevektskonstanten for oppløsning av et sparsomt løselig salt; det faste stoffet inngår ikke i uttrykket.',
    },
    {
      question: 'Hva er Ksp-uttrykket for AgCl(s) ⇌ Ag⁺ + Cl⁻?',
      options: ['Ksp = [Ag⁺][Cl⁻]', 'Ksp = [Ag⁺]/[Cl⁻]', 'Ksp = [AgCl]', 'Ksp = [Ag⁺] + [Cl⁻]'],
      explanation: 'For et 1:1-salt er Ksp = [Ag⁺][Cl⁻]; det faste AgCl inngår ikke.',
    },
    {
      question: 'For et 1:1-salt med løselighet S, hva er Ksp?',
      options: ['S²', '4S³', 'S', '2S'],
      explanation: 'For AgCl(s) ⇌ Ag⁺ + Cl⁻ er [Ag⁺] = [Cl⁻] = S, så Ksp = S × S = S².',
    },
    {
      question: 'AgCl har Ksp = 1,8 × 10⁻¹⁰. Hva er løseligheten S? (S = √Ksp)',
      options: ['1,3 × 10⁻⁵ M', '1,8 × 10⁻¹⁰ M', '9,0 × 10⁻¹¹ M', '3,6 × 10⁻⁵ M'],
      explanation: 'For et 1:1-salt er S = √Ksp = √(1,8 × 10⁻¹⁰) ≈ 1,3 × 10⁻⁵ M.',
    },
    {
      question: 'Hva er Ksp-uttrykket for PbI₂(s) ⇌ Pb²⁺ + 2I⁻ uttrykt ved løseligheten S?',
      options: ['Ksp = 4S³', 'Ksp = S²', 'Ksp = 2S²', 'Ksp = S³'],
      explanation: 'For PbI₂ er [Pb²⁺] = S og [I⁻] = 2S, så Ksp = [Pb²⁺][I⁻]² = S × (2S)² = 4S³.',
    },
  ],
  'kjemi2-5-3': [
    {
      question: 'Hva er forskjellen mellom ioneproduktet Q og Ksp?',
      options: ['Q bruker faktiske konsentrasjoner; Ksp gjelder ved likevekt', 'Q gjelder bare ved likevekt', 'Ksp varierer med konsentrasjon', 'De er alltid like'],
      explanation: 'Q har samme form som Ksp, men bruker de faktiske ionkonsentrasjonene når som helst, mens Ksp gjelder ved likevekt.',
    },
    {
      question: 'Hva skjer hvis Q > Ksp?',
      options: ['Løsningen er overmettet og felling skjer', 'Løsningen er umettet', 'Mer stoff løses opp', 'Ingenting skjer'],
      explanation: 'Når Q > Ksp er løsningen overmettet, og salt felles ut til Q = Ksp igjen.',
    },
    {
      question: 'Hva skjer hvis Q < Ksp?',
      options: ['Løsningen er umettet, og mer stoff kan løses opp', 'Felling skjer umiddelbart', 'Løsningen er ved likevekt', 'Alt salt felles ut'],
      explanation: 'Når Q < Ksp er løsningen umettet og kan løse mer stoff; ingen felling skjer.',
    },
    {
      question: 'Hva er prinsippet bak selektiv felling?',
      options: ['Salter med ulik Ksp felles ut ved ulike konsentrasjoner, slik at ioner kan skilles', 'Alle ioner felles ut samtidig', 'Bare oppløselige salter felles', 'Felling avhenger bare av temperatur'],
      explanation: 'Ved selektiv felling utnytter man at salter med ulik Ksp feller ut ved ulik felleionkonsentrasjon, slik at ioner kan skilles.',
    },
    {
      question: 'Hvilket salt felles først når Cl⁻ tilsettes gradvis til en løsning med Ag⁺ og Pb²⁺? (Ksp AgCl = 1,8×10⁻¹⁰, Ksp PbCl₂ = 1,7×10⁻⁵)',
      options: ['AgCl, fordi det har lavest Ksp', 'PbCl₂, fordi det har lavest Ksp', 'Begge felles samtidig', 'Ingen av dem felles'],
      explanation: 'AgCl har mye lavere Ksp, så det når metning ved lavest [Cl⁻] og felles først.',
    },
  ],
  'kjemi2-5-4': [
    {
      question: 'Hvilket mineral utgjør hovedbestanddelen i bein?',
      options: ['Hydroksyapatitt, Ca₁₀(PO₄)₆(OH)₂', 'Natriumklorid, NaCl', 'Kalsiumkarbonat, CaCO₃', 'Silisiumdioksid, SiO₂'],
      explanation: 'Bein består hovedsakelig av hydroksyapatitt, Ca₁₀(PO₄)₆(OH)₂, som har ekstremt lav Ksp og er svært lite løselig.',
    },
    {
      question: 'Hvorfor gir fluoridbehandling sterkere tannemalje?',
      options: ['Fluor danner fluorapatitt med enda lavere Ksp', 'Fluor øker løseligheten av emaljen', 'Fluor fjerner kalsium', 'Fluor senker pH i munnen'],
      explanation: 'Fluor erstatter OH⁻ og danner fluorapatitt, som har enda lavere Ksp og dermed bedre motstand mot syreoppløsning.',
    },
    {
      question: 'Hva er den vanligste typen nyrestein?',
      options: ['Kalsiumoksalat', 'Urinsyre', 'Struvitt', 'Kalsiumkarbonat'],
      explanation: 'Kalsiumoksalat (CaC₂O₄) utgjør 70–80 % av nyrestein.',
    },
    {
      question: 'Hva gjør osteoklaster med bein?',
      options: ['Bryter ned bein ved å frigjøre H⁺ og løse opp hydroksyapatitt', 'Bygger opp ny beinvev', 'Lager hydroksyapatitt', 'Øker pH lokalt'],
      explanation: 'Osteoklaster (beinnedbrytende celler) frigjør H⁺, senker pH lokalt og løser opp hydroksyapatitt, slik at Ca²⁺ og PO₄³⁻ frigjøres.',
    },
    {
      question: 'Hvorfor er hydroksyapatitt så lite løselig?',
      options: ['Det har ekstremt lav Ksp (ca. 2,3 × 10⁻⁵⁹)', 'Det har høy Ksp', 'Det er en gass', 'Det reagerer ikke med vann'],
      explanation: 'Hydroksyapatitt har en ekstremt lav Ksp (≈ 2,3 × 10⁻⁵⁹), noe som gjør det svært lite løselig og stabilt i bein.',
    },
  ],
  'kjemi2-6-1': [
    {
      question: 'Hva er oksidasjon?',
      options: ['Tap av elektroner (økning i oksidasjonstall)', 'Opptak av elektroner', 'Tap av protoner', 'Opptak av protoner'],
      explanation: 'Oksidasjon er tap av elektroner, som gir en økning i oksidasjonstallet (LEO: Loss of Electrons is Oxidation).',
    },
    {
      question: 'Hva er et oksidasjonsmiddel?',
      options: ['Et stoff som tar opp elektroner og selv blir redusert', 'Et stoff som avgir elektroner', 'Et stoff som avgir protoner', 'Et stoff som ikke reagerer'],
      explanation: 'Et oksidasjonsmiddel tar opp elektroner fra et annet stoff og blir dermed selv redusert.',
    },
    {
      question: 'Hva er oksidasjonstallet til et grunnstoff i ren form, som O₂ eller Fe?',
      options: ['0', '+1', '−1', '+2'],
      explanation: 'Et grunnstoff i ren form har alltid oksidasjonstall 0.',
    },
    {
      question: 'Hva er oksidasjonstallet til oksygen i de fleste forbindelser?',
      options: ['−2', '+2', '−1', '0'],
      explanation: 'Oksygen har vanligvis oksidasjonstall −2 (unntak: −1 i peroksider og +2 i OF₂).',
    },
    {
      question: 'I reaksjonen Zn + Cu²⁺ → Zn²⁺ + Cu, hva skjer med sink (Zn)?',
      options: ['Det oksideres (avgir 2 elektroner)', 'Det reduseres', 'Det er oksidasjonsmiddel', 'Det tar opp elektroner'],
      explanation: 'Zn avgir 2 elektroner og oksideres til Zn²⁺; det er dermed reduksjonsmiddel, mens Cu²⁺ reduseres.',
    },
  ],
  'kjemi2-6-2': [
    {
      question: 'Hva omdanner en galvanisk celle?',
      options: ['Kjemisk energi til elektrisk energi gjennom en spontan redoksreaksjon', 'Elektrisk energi til kjemisk energi', 'Varme til lys', 'Lys til kjemisk energi'],
      explanation: 'En galvanisk celle omdanner kjemisk energi til elektrisk energi via en spontan redoksreaksjon.',
    },
    {
      question: 'På hvilken elektrode skjer oksidasjon?',
      options: ['Anoden', 'Katoden', 'Saltbroen', 'Den ytre kretsen'],
      explanation: 'Oksidasjon skjer alltid på anoden (huskeregel ANOKS: ANode = OKSidasjon).',
    },
    {
      question: 'Hva er funksjonen til saltbroen?',
      options: ['Lukke kretsen og opprettholde elektronøytralitet ved ionevandring', 'Lede elektroner', 'Lage strøm', 'Hindre reaksjonen'],
      explanation: 'Saltbroen lar ioner vandre mellom halvcellene, lukker kretsen og opprettholder elektronøytraliteten.',
    },
    {
      question: 'Hva er cellespenningen til en Daniell-celle? (E°(Cu²⁺/Cu) = +0,34 V, E°(Zn²⁺/Zn) = −0,76 V)',
      options: ['1,10 V', '0,42 V', '−1,10 V', '0,76 V'],
      explanation: 'E°celle = E°katode − E°anode = 0,34 − (−0,76) = 1,10 V.',
    },
    {
      question: 'Hva betyr cellediagrammet Zn(s) | Zn²⁺ || Cu²⁺ | Cu(s)?',
      options: ['Zn er anode (venstre), Cu er katode (høyre), || er saltbroen', 'Cu er anode, Zn er katode', '|| betyr en fasegrense', 'Begge er anoder'],
      explanation: 'Anoden (oksidasjon) skrives til venstre, katoden (reduksjon) til høyre, og || symboliserer saltbroen.',
    },
  ],
  'kjemi2-6-3': [
    {
      question: 'Hva er standard elektrodepotensial (E°) til standard hydrogenelektrode (SHE)?',
      options: ['0,00 V', '+1,00 V', '−1,00 V', '+0,34 V'],
      explanation: 'Standard hydrogenelektrode er referansepunktet og har E° = 0,00 V per definisjon.',
    },
    {
      question: 'Hva betyr et negativt E° for et metall?',
      options: ['Metallet er et godt reduksjonsmiddel (oksideres lett)', 'Metallet er et godt oksidasjonsmiddel', 'Metallet reagerer aldri', 'Metallet er en edelgass'],
      explanation: 'Negativt E° betyr at metallet lett gir fra seg elektroner (oksideres) og er et godt reduksjonsmiddel, som litium.',
    },
    {
      question: 'Hvordan beregnes E°celle?',
      options: ['E°katode − E°anode', 'E°anode − E°katode', 'E°katode + E°anode', 'E°katode × E°anode'],
      explanation: 'E°celle = E°katode − E°anode. En spontan reaksjon har E°celle > 0.',
    },
    {
      question: 'Hvilket metall er mest «edelt» av disse? (E°: Au³⁺/Au = +1,50 V, Zn²⁺/Zn = −0,76 V, Mg²⁺/Mg = −2,37 V)',
      options: ['Gull (Au)', 'Sink (Zn)', 'Magnesium (Mg)', 'De er like edle'],
      explanation: 'Et høyt (positivt) E° betyr edelt metall som oksideres vanskelig. Gull har høyest E° (+1,50 V) og er mest edelt.',
    },
    {
      question: 'Kan et metall høyere i spenningsrekken redusere ioner av et metall lavere i rekken?',
      options: ['Ja, et mer uedelt metall kan redusere ioner av et mer edelt metall', 'Nei, det er umulig', 'Bare ved høy temperatur', 'Bare edelmetaller kan dette'],
      explanation: 'Et mer uedelt metall (lavere/mer negativt E°) kan redusere ioner av et mer edelt metall, fordi E°celle blir positiv.',
    },
  ],
  'kjemi2-6-4': [
    {
      question: 'Hva er elektrolyse?',
      options: ['Prosessen der elektrisk energi driver en ikke-spontan reaksjon', 'En spontan reaksjon som produserer strøm', 'Nedbrytning av glukose', 'En type titrering'],
      explanation: 'Elektrolyse bruker elektrisk energi til å drive en ikke-spontan kjemisk reaksjon (E°celle < 0).',
    },
    {
      question: 'Hva er forskjellen på anodens ladning i en galvanisk celle og en elektrolytisk celle?',
      options: ['I elektrolyse er anoden +, i galvanisk celle er anoden −', 'Anoden er + i begge', 'Anoden er − i begge', 'Anoden har ingen ladning'],
      explanation: 'I en elektrolytisk celle er anoden koblet til + (positiv), mens i en galvanisk celle er anoden negativ.',
    },
    {
      question: 'Hva dannes ved katoden ved elektrolyse av smeltet NaCl?',
      options: ['Natriummetall (Na)', 'Klorgass (Cl₂)', 'Oksygen (O₂)', 'Hydrogen (H₂)'],
      explanation: 'Ved katoden reduseres Na⁺ til natriummetall: Na⁺ + e⁻ → Na, mens Cl₂ dannes ved anoden.',
    },
    {
      question: 'Hva sier Faradays første lov?',
      options: ['Massen avsatt stoff er proporsjonal med ladningsmengden (m = QM/nF)', 'Massen er uavhengig av strømmen', 'Massen avhenger bare av temperaturen', 'Ladning har ingen effekt'],
      explanation: 'Faradays første lov: massen avsatt er proporsjonal med ladningen Q, gitt ved m = QM/(nF).',
    },
    {
      question: 'Ved elektrolyse av CuSO₄(aq), hva skjer ved katoden?',
      options: ['Cu²⁺ reduseres og kopper avsettes', 'Oksygen dannes', 'Vann reduseres til H₂', 'Klor dannes'],
      explanation: 'Kopper er et edelt nok metall til at Cu²⁺ reduseres ved katoden (Cu²⁺ + 2e⁻ → Cu) i stedet for vann.',
    },
  ],
  'kjemi2-6-5': [
    {
      question: 'Hva er forskjellen på et primær- og et sekundærbatteri?',
      options: ['Primærbatterier kan ikke lades opp; sekundærbatterier kan', 'Primærbatterier er oppladbare', 'Sekundærbatterier er engangsbatterier', 'Det er ingen forskjell'],
      explanation: 'Primærbatterier (engangs) har irreversibel reaksjon, mens sekundærbatterier (oppladbare) har reversibel reaksjon.',
    },
    {
      question: 'Hvilket materiale brukes som anode i et alkalisk batteri?',
      options: ['Sink (Zn)', 'Mangandioksid (MnO₂)', 'Kopper (Cu)', 'Bly (Pb)'],
      explanation: 'I et alkalisk batteri er anoden sink (Zn), katoden mangandioksid (MnO₂) og elektrolytten KOH.',
    },
    {
      question: 'Hva er en stor fordel med litium-ion-batterier?',
      options: ['Høy energitetthet', 'Svært lav pris', 'De kan ikke ta fyr', 'Ubegrenset levetid'],
      explanation: 'Litium-ion-batterier har høy energitetthet og lav selvutlading, men er kostbare og kan være termisk ustabile.',
    },
    {
      question: 'Hvilken elektrolytt brukes i et bly-syre-batteri (bilbatteri)?',
      options: ['Svovelsyre (H₂SO₄)', 'Kaliumhydroksid (KOH)', 'Saltsyre (HCl)', 'Natriumklorid (NaCl)'],
      explanation: 'Bly-syre-batteriet bruker svovelsyre (H₂SO₄) som elektrolytt, med blyplater og blydioksid som elektroder.',
    },
    {
      question: 'Hva er nominell spenning til et alkalisk batteri?',
      options: ['1,5 V', '3,7 V', '12 V', '0,5 V'],
      explanation: 'Et alkalisk batteri har en nominell spenning på 1,5 V; litium-ion ligger på ca. 3,6–3,7 V.',
    },
  ],
  'kjemi2-6-6': [
    {
      question: 'Hva er korrosjon?',
      options: ['Nedbrytning av metaller gjennom elektrokjemiske reaksjoner med miljøet', 'Smelting av metaller ved høy temperatur', 'En type galvanisk celle som lader', 'Dannelse av nye metaller'],
      explanation: 'Korrosjon er elektrokjemisk nedbrytning av metaller i kontakt med miljøet, som rusting av jern.',
    },
    {
      question: 'Hvilke tre faktorer må være til stede for at jern skal ruste?',
      options: ['Metall, oksygen og vann/elektrolytt', 'Bare oksygen', 'Bare vann', 'Sollys, varme og oksygen'],
      explanation: 'Rusting krever metall (anode), oksygen (katodeoksidant) og vann/elektrolytt (ionetransport).',
    },
    {
      question: 'Hvorfor ruster biler raskere nær kysten?',
      options: ['Salt (NaCl) øker ledningsevnen og dermed korrosjonshastigheten', 'Det er kaldere ved kysten', 'Det er mer sollys', 'Det er mindre oksygen'],
      explanation: 'Salt i lufta og veisalt øker elektrolyttens ledningsevne, noe som akselererer den elektrokjemiske korrosjonen.',
    },
    {
      question: 'Hva er katodisk beskyttelse med offeranode?',
      options: ['Et mer uedelt metall kobles til og korroderer i stedet for konstruksjonen', 'Det edleste metallet ofres', 'Metallet males', 'Strømmen slås av'],
      explanation: 'En offeranode er et mer uedelt metall (f.eks. sink eller magnesium) som korroderer i stedet for konstruksjonen den beskytter.',
    },
    {
      question: 'Ved galvanisk korrosjon mellom to ulike metaller, hvilket korroderer?',
      options: ['Det minst edle metallet', 'Det mest edle metallet', 'Begge like raskt', 'Ingen av dem'],
      explanation: 'Når to ulike metaller er i kontakt, korroderer det minst edle (mest uedle) metallet, mens det edleste beskyttes.',
    },
  ],
  'kjemi2-7-1': [
    {
      question: 'Hvordan defineres reaksjonshastighet?',
      options: ['Endring i konsentrasjon per tidsenhet', 'Total mengde produkt', 'Temperaturen i reaksjonen', 'Aktiveringsenergien'],
      explanation: 'Reaksjonshastighet er endring i konsentrasjon per tid, med minustegn for reaktanter og plusstegn for produkter.',
    },
    {
      question: '[A] synker fra 1,0 M til 0,6 M på 10 s. Hva er gjennomsnittshastigheten?',
      options: ['0,04 M/s', '0,40 M/s', '0,16 M/s', '0,10 M/s'],
      explanation: 'Hastighet = −Δ[A]/Δt = −(0,6 − 1,0)/10 = 0,4/10 = 0,04 M/s.',
    },
    {
      question: 'For 2N₂O₅ → 4NO₂ + O₂ forbrukes N₂O₅ med 0,020 M/s. Hvor raskt dannes NO₂?',
      options: ['0,040 M/s', '0,020 M/s', '0,010 M/s', '0,080 M/s'],
      explanation: 'Forholdet mellom NO₂ og N₂O₅ er 4:2 = 2:1, så NO₂ dannes med 2 × 0,020 = 0,040 M/s.',
    },
    {
      question: 'Hva er momentan hastighet?',
      options: ['Hastigheten ved et bestemt tidspunkt (tangentens stigningstall)', 'Gjennomsnittet over hele reaksjonen', 'Hastigheten ved likevekt alltid', 'Den totale mengden produkt'],
      explanation: 'Momentan hastighet er hastigheten ved et bestemt øyeblikk, gitt ved tangentens stigningstall på konsentrasjon-tid-grafen.',
    },
    {
      question: 'Hva er initialhastigheten (v₀)?',
      options: ['Hastigheten ved t = 0', 'Hastigheten ved likevekt', 'Den laveste hastigheten', 'Hastigheten etter en time'],
      explanation: 'Initialhastigheten er reaksjonshastigheten ved starten (t = 0), ofte funnet som tangenten ved startpunktet.',
    },
  ],
  'kjemi2-7-2': [
    {
      question: 'Hva beskriver hastighetsloven?',
      options: ['Hvordan reaksjonshastigheten avhenger av konsentrasjon', 'Hvor mye produkt som dannes totalt', 'Reaksjonens entalpi', 'Likevektskonstanten'],
      explanation: 'Hastighetsloven (f.eks. v = k[A]ᵐ[B]ⁿ) beskriver hvordan hastigheten avhenger av konsentrasjonene.',
    },
    {
      question: 'Hvordan bestemmes reaksjonsordenen (eksponentene m og n)?',
      options: ['Eksperimentelt', 'Fra de støkiometriske koeffisientene', 'Fra molar masse', 'Fra temperaturen alene'],
      explanation: 'Reaksjonsordenen må bestemmes eksperimentelt og er IKKE nødvendigvis lik de støkiometriske koeffisientene.',
    },
    {
      question: 'Hva kjennetegner en nullteordens reaksjon?',
      options: ['Hastigheten er uavhengig av konsentrasjonen (v = k)', 'Hastigheten er proporsjonal med [A]', 'Hastigheten er proporsjonal med [A]²', 'Hastigheten er null'],
      explanation: 'For en nullteordens reaksjon er v = k, altså uavhengig av konsentrasjonen; en graf av [A] mot t gir rett linje.',
    },
    {
      question: 'For en førsteordens reaksjon med hastighetskonstant k, hva er halveringstiden?',
      options: ['t½ = 0,693/k', 't½ = k/0,693', 't½ = 1/(k[A]₀)', 't½ = k × [A]₀'],
      explanation: 'For en førsteordens reaksjon er halveringstiden t½ = ln 2 / k = 0,693/k, uavhengig av startkonsentrasjonen.',
    },
    {
      question: 'Hvilken graf gir en rett linje for en førsteordens reaksjon?',
      options: ['ln[A] mot t', '[A] mot t', '1/[A] mot t', '[A]² mot t'],
      explanation: 'For en førsteordens reaksjon gir ln[A] mot t en rett linje med stigningstall −k.',
    },
  ],
  'kjemi2-7-3': [
    {
      question: 'Hvilke tre krav stiller kollisjonsteorien for at en reaksjon skal skje?',
      options: ['Kollisjon, tilstrekkelig energi og riktig orientering', 'Bare kollisjon', 'Bare høy temperatur', 'Lav konsentrasjon og lav energi'],
      explanation: 'Molekylene må kollidere med energi ≥ aktiveringsenergien og med riktig orientering for at en reaksjon skal skje.',
    },
    {
      question: 'Hva er aktiveringsenergien (Eₐ)?',
      options: ['Minimumsenergien som kreves for at en reaksjon skal skje', 'Energien som frigjøres i reaksjonen', 'Den totale entalpiendringen', 'Energien i produktene'],
      explanation: 'Aktiveringsenergien er den minimale energien molekylene må ha for å danne overgangstilstanden og reagere.',
    },
    {
      question: 'Hvordan øker en katalysator reaksjonshastigheten?',
      options: ['Den senker aktiveringsenergien ved å tilby en alternativ reaksjonsvei', 'Den øker aktiveringsenergien', 'Den endrer ΔH', 'Den forskyver likevekten mot produkter'],
      explanation: 'En katalysator tilbyr en alternativ reaksjonsvei med lavere aktiveringsenergi, men endrer verken ΔH eller likevektsposisjonen.',
    },
    {
      question: 'Hva er Arrhenius-likningen?',
      options: ['k = Ae^(−Eₐ/RT)', 'k = A + Eₐ/RT', 'k = Eₐ/(RT)', 'k = A × RT'],
      explanation: 'Arrhenius-likningen, k = Ae^(−Eₐ/RT), beskriver hvordan hastighetskonstanten avhenger av temperatur og aktiveringsenergi.',
    },
    {
      question: 'Påvirker en katalysator entalpiendringen (ΔH) for reaksjonen?',
      options: ['Nei, ΔH er uendret', 'Ja, den øker ΔH', 'Ja, den senker ΔH', 'Den gjør ΔH lik null'],
      explanation: 'En katalysator senker aktiveringsenergien, men endrer ikke ΔH – energiforskjellen mellom reaktanter og produkter er den samme.',
    },
  ],
  'kjemi2-7-4': [
    {
      question: 'Hva er en reaksjonsmekanisme?',
      options: ['De individuelle trinnene en reaksjon foregår gjennom', 'Den totale balanserte likningen', 'Likevektskonstanten', 'Aktiveringsenergien alene'],
      explanation: 'En reaksjonsmekanisme beskriver de enkelte elementærtrinnene som til sammen utgjør totalreaksjonen.',
    },
    {
      question: 'Hva er det hastighetsbestemmende trinnet (RDS)?',
      options: ['Det langsomste trinnet i mekanismen', 'Det raskeste trinnet', 'Det første trinnet alltid', 'Et trinn uten aktiveringsenergi'],
      explanation: 'Det hastighetsbestemmende trinnet er det langsomste trinnet og har høyest aktiveringsenergi; det bestemmer totalhastigheten.',
    },
    {
      question: 'Hva kjennetegner et mellomprodukt i en mekanisme?',
      options: ['Det dannes i ett trinn og forbrukes i et annet, og er ikke med i totalreaksjonen', 'Det er med i totalreaksjonen', 'Det er en katalysator', 'Det finnes i høye konsentrasjoner permanent'],
      explanation: 'Et mellomprodukt dannes i ett trinn og forbrukes i et senere trinn, så det inngår ikke i den balanserte totalreaksjonen.',
    },
    {
      question: 'Hva er molekylariteten til et elementærtrinn der to molekyler kolliderer?',
      options: ['Bimolekylært', 'Unimolekylært', 'Termolekylært', 'Nullmolekylært'],
      explanation: 'Et elementærtrinn med to reagerende partikler (A + B → produkter) er bimolekylært.',
    },
    {
      question: 'Hva er en pre-likevekt i en reaksjonsmekanisme?',
      options: ['Et tidlig, raskt og reversibelt trinn som når likevekt før RDS', 'Det langsomste trinnet', 'Et trinn uten mellomprodukt', 'Den endelige likevekten'],
      explanation: 'En pre-likevekt oppstår når et tidlig trinn er raskt og reversibelt og rekker å nå likevekt før det hastighetsbestemmende trinnet.',
    },
  ],
  'kjemi2-8-1': [
    {
      question: 'Hva er en funksjonell gruppe?',
      options: ['En atomgruppe eller binding som gir molekylet karakteristiske kjemiske egenskaper', 'Et helt karbonskjelett', 'Bare hydrogenatomer', 'En type ion'],
      explanation: 'Funksjonelle grupper er atomgrupper eller bindinger som bestemmer molekylets reaktivitet og egenskaper.',
    },
    {
      question: 'Hva er den generelle formelen for alkaner?',
      options: ['CₙH₂ₙ₊₂', 'CₙH₂ₙ', 'CₙH₂ₙ₋₂', 'CₙHₙ'],
      explanation: 'Mettede hydrokarboner (alkaner) har den generelle formelen CₙH₂ₙ₊₂.',
    },
    {
      question: 'Hvilken funksjonell gruppe har alkoholer?',
      options: ['Hydroksylgruppe (−OH)', 'Karbonylgruppe (C=O)', 'Karboksylgruppe (−COOH)', 'Aminogruppe (−NH₂)'],
      explanation: 'Alkoholer har en hydroksylgruppe (−OH) bundet til et karbonatom.',
    },
    {
      question: 'Hva kjennetegner alkener?',
      options: ['Minst én C=C dobbeltbinding', 'Bare enkeltbindinger', 'En trippelbinding', 'En benzenring'],
      explanation: 'Alkener er umettede hydrokarboner med minst én karbon-karbon dobbeltbinding (CₙH₂ₙ).',
    },
    {
      question: 'Hvilken funksjonell gruppe har karboksylsyrer?',
      options: ['−COOH', '−OH', '−CHO', '−NH₂'],
      explanation: 'Karboksylsyrer har karboksylgruppen −COOH, en kombinasjon av karbonyl (C=O) og hydroksyl (−OH).',
    },
  ],
  'kjemi2-8-2': [
    {
      question: 'Hvilke typer binding finnes i en C=C dobbeltbinding?',
      options: ['Én σ-binding og én π-binding', 'To σ-bindinger', 'To π-bindinger', 'Én σ-binding alene'],
      explanation: 'En dobbeltbinding består av én σ-binding (sigma) og én π-binding (pi); π-bindingen hindrer fri rotasjon.',
    },
    {
      question: 'Hvorfor får alkener geometrisk (cis-trans) isomeri?',
      options: ['π-bindingen hindrer fri rotasjon rundt C=C', 'σ-bindingen er svak', 'Det er en trippelbinding', 'Karbonatomene er ladde'],
      explanation: 'Fordi π-bindingen hindrer rotasjon rundt dobbeltbindingen, blir gruppene låst i bestemte posisjoner – cis eller trans.',
    },
    {
      question: 'Hva er den vanligste reaksjonstypen for alkener?',
      options: ['Addisjonsreaksjoner', 'Substitusjonsreaksjoner', 'Forbrenning alene', 'Eliminasjon'],
      explanation: 'Alkener gjennomgår typisk addisjonsreaksjoner, der π-bindingen brytes og atomer legges til dobbeltbindingen.',
    },
    {
      question: 'Hva skiller cis- og trans-isomerer av but-2-en?',
      options: ['Plasseringen av metylgruppene (samme side = cis, motsatt side = trans)', 'Antall karbonatomer', 'Type binding', 'Molekylformelen'],
      explanation: 'I cis-isomeren ligger like grupper (metyl) på samme side av dobbeltbindingen, i trans på motsatt side.',
    },
    {
      question: 'Hvorfor er alkener mer reaktive enn alkaner?',
      options: ['π-elektronene er lett tilgjengelige og tiltrekker elektrofile reagenser', 'De har bare enkeltbindinger', 'De har lavere energi', 'De mangler hydrogenatomer'],
      explanation: 'De elektronrike π-elektronene over og under bindingsplanet er lett tilgjengelige og tiltrekker elektrofiler.',
    },
  ],
  'kjemi2-8-3': [
    {
      question: 'Hvordan klassifiseres en sekundær alkohol?',
      options: ['Karbonet med −OH er bundet til to andre karbonatomer', 'Karbonet med −OH er bundet til ett karbon', 'Karbonet med −OH er bundet til tre karbon', 'Den har to OH-grupper'],
      explanation: 'I en sekundær (2°) alkohol er karbonet med hydroksylgruppen bundet til to andre karbonatomer.',
    },
    {
      question: 'Hvorfor har alkoholer høyere kokepunkt enn tilsvarende alkaner?',
      options: ['De danner hydrogenbindinger', 'De er upolare', 'De har lavere molmasse', 'De danner ionebindinger'],
      explanation: 'Den polare O−H-gruppen lar alkoholmolekylene danne hydrogenbindinger, som krever mer energi å bryte (høyere kokepunkt).',
    },
    {
      question: 'Hva dannes når en primær alkohol oksideres fullstendig?',
      options: ['En karboksylsyre (via aldehyd)', 'Et keton', 'En eter', 'Et alkan'],
      explanation: 'Primære alkoholer oksideres først til aldehyder og videre til karboksylsyrer.',
    },
    {
      question: 'Hva dannes når en sekundær alkohol oksideres?',
      options: ['Et keton', 'En karboksylsyre', 'Et aldehyd', 'En eter'],
      explanation: 'Sekundære alkoholer oksideres til ketoner og kan ikke oksideres videre uten å bryte C−C-bindinger.',
    },
    {
      question: 'Hvorfor lar tertiære alkoholer seg vanskelig oksidere?',
      options: ['Karbonet med −OH har ingen hydrogenatomer å fjerne', 'De har for mange OH-grupper', 'De er ioniske', 'De koker for høyt'],
      explanation: 'En tertiær alkohol mangler H på karbonet med −OH, slik at vanlig oksidasjon (som fjerner H) ikke kan skje.',
    },
  ],
  'kjemi2-8-4': [
    {
      question: 'Hva er karbonylgruppen?',
      options: ['En C=O-gruppe', 'En −OH-gruppe', 'En −COOH-gruppe', 'En C−C-enkeltbinding'],
      explanation: 'Karbonylgruppen er en karbon-oksygen dobbeltbinding (C=O), sentral i aldehyder og ketoner.',
    },
    {
      question: 'Hva skiller et aldehyd fra et keton?',
      options: ['Aldehyd har karbonylgruppen på enden av kjeden, keton har den inne i kjeden', 'Aldehyd har to OH-grupper', 'Keton har en trippelbinding', 'Aldehyd er alltid en syre'],
      explanation: 'I aldehyder sitter C=O på enden (minst ett H bundet til karbonylkarbonet); i ketoner sitter den inne i kjeden mellom to karbongrupper.',
    },
    {
      question: 'Hva er IUPAC-endelsen for ketoner?',
      options: ['-on', '-al', '-ol', '-syre'],
      explanation: 'Ketoner får endelsen -on (f.eks. propanon), mens aldehyder får -al.',
    },
    {
      question: 'Hva dannes når et aldehyd oksideres?',
      options: ['En karboksylsyre', 'Et keton', 'En alkohol', 'En eter'],
      explanation: 'Aldehyder oksideres lett til karboksylsyrer (R−CHO + [O] → R−COOH), mens ketoner er vanskelige å oksidere videre.',
    },
    {
      question: 'Hvorfor har aldehyder og ketoner lavere kokepunkt enn tilsvarende alkoholer?',
      options: ['De mangler O−H og kan ikke danne hydrogenbindinger seg imellom', 'De er ioniske', 'De har høyere molmasse', 'De er upolare'],
      explanation: 'Aldehyder og ketoner har polare C=O-grupper (dipol-dipol), men mangler O−H, så de danner ikke hydrogenbindinger seg imellom som alkoholer gjør.',
    },
  ],
  'kjemi2-8-5': [
    {
      question: 'Hva er karboksylgruppen?',
      options: ['−COOH (kombinasjon av karbonyl og hydroksyl)', '−OH alene', 'C=O alene', '−NH₂'],
      explanation: 'Karboksylgruppen −COOH er en kombinasjon av en karbonylgruppe (C=O) og en hydroksylgruppe (−OH).',
    },
    {
      question: 'Hvorfor er karboksylsyrer sure?',
      options: ['Karboksylatanionet er resonansstabilisert når protonet avgis', 'De har mange OH-grupper', 'De inneholder metaller', 'De er uoppløselige'],
      explanation: 'Når −COOH gir fra seg H⁺, blir den negative ladningen delokalisert over begge oksygenatomene (resonans), noe som stabiliserer anionet.',
    },
    {
      question: 'Hvordan er karboksylsyrer som syrer sammenlignet med mineralsyrer som HCl?',
      options: ['De er svake syrer', 'De er sterke syrer', 'De er nøytrale', 'De er baser'],
      explanation: 'Karboksylsyrer er svake syrer (pKa ca. 3–5), mye svakere enn sterke mineralsyrer som HCl.',
    },
    {
      question: 'Hva er IUPAC-navnet på eddiksyre (CH₃COOH)?',
      options: ['Etansyre', 'Metansyre', 'Propansyre', 'Etanol'],
      explanation: 'Eddiksyre har to karbonatomer og en karboksylgruppe, altså etansyre.',
    },
    {
      question: 'Hva dannes når en karboksylsyre reagerer med en alkohol?',
      options: ['En ester og vann', 'Et keton', 'Et aldehyd', 'En eter og hydrogen'],
      explanation: 'Karboksylsyre + alkohol gir en ester og vann i en kondensasjonsreaksjon (esterifisering).',
    },
  ],
  'kjemi2-8-6': [
    {
      question: 'Hvilken generell struktur har en ester?',
      options: ['R−COO−R\'', 'R−OH', 'R−COOH', 'R−CHO'],
      explanation: 'En ester har strukturen R−COO−R\' og dannes fra en karboksylsyre og en alkohol.',
    },
    {
      question: 'Hva kjennetegner mange estere?',
      options: ['De har karakteristiske frukt- eller blomsterlukter', 'De lukter alltid surt', 'De er alltid faste stoffer', 'De er sterke syrer'],
      explanation: 'Mange estere er flyktige og har fruktige lukter; isoamylacetat lukter for eksempel banan.',
    },
    {
      question: 'Hva er esterifisering?',
      options: ['En reversibel, syrekatalysert kondensasjonsreaksjon mellom syre og alkohol', 'Nedbrytning av en ester med base', 'Oksidasjon av en alkohol', 'En addisjonsreaksjon på et alken'],
      explanation: 'Esterifisering er en reversibel, syrekatalysert reaksjon der karboksylsyre og alkohol danner ester og vann.',
    },
    {
      question: 'Hvordan kan man øke utbyttet av ester ifølge Le Chateliers prinsipp?',
      options: ['Bruke overskudd av en reaktant eller fjerne vann', 'Tilsette mer vann', 'Senke konsentrasjonen av reaktantene', 'Fjerne katalysatoren'],
      explanation: 'Siden esterifisering er en likevekt, forskyves den mot ester ved overskudd av reaktant eller ved å fjerne vannet som dannes.',
    },
    {
      question: 'Hvilket lite molekyl spaltes av i esterifisering (en kondensasjonsreaksjon)?',
      options: ['Vann (H₂O)', 'Karbondioksid (CO₂)', 'Hydrogen (H₂)', 'Ammoniakk (NH₃)'],
      explanation: 'Esterifisering er en kondensasjonsreaksjon der det spaltes av et vannmolekyl.',
    },
  ],
  'kjemi2-9-1': [
    {
      question: 'Hva handler kvalitativ analyse om?',
      options: ['Å identifisere hvilke stoffer eller ioner som er til stede', 'Å måle nøyaktige mengder', 'Å beregne molar masse', 'Å bestemme reaksjonshastighet'],
      explanation: 'Kvalitativ analyse identifiserer hvilke stoffer eller ioner som er til stede, uten å måle nøyaktige mengder.',
    },
    {
      question: 'Hvilken flammefarge gir natriumioner (Na⁺)?',
      options: ['Gul (intens)', 'Fiolett', 'Grønn', 'Rød'],
      explanation: 'Natriumioner gir en intens gul flammefarge; kalium gir fiolett og barium gir grønn.',
    },
    {
      question: 'Hvordan kan man påvise karbonationer (CO₃²⁻)?',
      options: ['Tilsette syre – gassutvikling (CO₂) som gjør kalkvann melkehvitt', 'Tilsette NaOH – blått bunnfall', 'Tilsette AgNO₃ – gult bunnfall', 'Måle pH'],
      explanation: 'Karbonater reagerer med syre og gir CO₂-gass: CO₃²⁻ + 2H⁺ → H₂O + CO₂, som gjør kalkvann melkehvitt.',
    },
    {
      question: 'Hvordan påviser man kloridioner (Cl⁻)?',
      options: ['Tilsette AgNO₃ (etter forsuring) – hvitt bunnfall (AgCl)', 'Tilsette BaCl₂ – hvitt bunnfall', 'Måle flammefarge', 'Tilsette NaOH'],
      explanation: 'Kloridioner gir hvitt bunnfall av AgCl med sølvnitrat: Ag⁺ + Cl⁻ → AgCl↓ (løses i ammoniakk).',
    },
    {
      question: 'Hvilken farge har bunnfallet av AgI sammenlignet med AgCl?',
      options: ['AgI er gult, AgCl er hvitt', 'AgI er hvitt, AgCl er gult', 'Begge er svarte', 'Begge er blå'],
      explanation: 'Sølvhalogenidene har ulik farge: AgCl er hvit, AgBr gulhvit og AgI gul.',
    },
  ],
  'kjemi2-9-2': [
    {
      question: 'Hva er gravimetrisk analyse basert på?',
      options: ['Nøyaktig veiing av et bunnfall med kjent sammensetning', 'Måling av farge', 'Måling av volum gass', 'Bestemmelse av pH'],
      explanation: 'Gravimetri bestemmer mengde stoff ved nøyaktig veiing av et utfelt produkt med kjent sammensetning.',
    },
    {
      question: 'Hva er den gravimetriske faktoren for SO₄²⁻ ved felling som BaSO₄? (M(SO₄²⁻)=96,06; M(BaSO₄)=233,39)',
      options: ['0,4116', '2,429', '0,2429', '1,000'],
      explanation: 'Gravimetrisk faktor = M(SO₄²⁻)/M(BaSO₄) = 96,06/233,39 = 0,4116.',
    },
    {
      question: 'Hvis 1,000 g BaSO₄ felles ut, hvor mye sulfat (SO₄²⁻) tilsvarer det? (faktor = 0,4116)',
      options: ['0,4116 g', '1,000 g', '0,2429 g', '2,429 g'],
      explanation: 'Masse SO₄²⁻ = masse BaSO₄ × faktor = 1,000 × 0,4116 = 0,4116 g.',
    },
    {
      question: 'Hva er en systematisk feilkilde i gravimetri som gir for lav masse?',
      options: ['Ufullstendig felling', 'Medfelling av urenheter', 'For mye fellingsmiddel', 'Hygroskopisk vannopptak'],
      explanation: 'Ufullstendig felling gir for lav masse; medfelling og hygroskopi gir derimot for høy masse.',
    },
    {
      question: 'Hvorfor oppbevares bunnfall i en eksikator før veiing?',
      options: ['For å hindre at det tar opp fuktighet (hygroskopi)', 'For å øke massen', 'For å varme det opp', 'For å løse det opp igjen'],
      explanation: 'En eksikator holder bunnfallet tørt, slik at hygroskopisk vannopptak ikke gir varierende, feilaktig masse.',
    },
  ],
  'kjemi2-9-3': [
    {
      question: 'Hva gir IR-spektroskopi informasjon om?',
      options: ['Molekylvibrasjoner og funksjonelle grupper', 'Molekylets molare masse', 'Antall hydrogenatomer', 'Stoffets farge'],
      explanation: 'IR-spektroskopi måler hvordan bindinger absorberer IR-stråling og avslører funksjonelle grupper via vibrasjonsfrekvenser.',
    },
    {
      question: 'Ved hvilket bølgetall absorberer en karbonylgruppe (C=O) typisk i IR?',
      options: ['Ca. 1700–1750 cm⁻¹', 'Ca. 3200–3600 cm⁻¹', 'Ca. 2100 cm⁻¹', 'Ca. 500 cm⁻¹'],
      explanation: 'C=O-strekken gir en sterk absorpsjon rundt 1700–1750 cm⁻¹, karakteristisk for aldehyder, ketoner, syrer og estere.',
    },
    {
      question: 'Hva gir molekylionet (M⁺·) i massespektrometri informasjon om?',
      options: ['Molekylets molare masse', 'Antall funksjonelle grupper', 'Molekylets farge', 'Bindingsvinklene'],
      explanation: 'Molekylionet M⁺· har samme masse som det intakte molekylet og gir dermed molmassen.',
    },
    {
      question: 'Hva gir NMR-spektroskopi informasjon om?',
      options: ['Kjernenes (¹H, ¹³C) kjemiske miljø i molekylet', 'Molekylets totale masse', 'Stoffets kokepunkt', 'Reaksjonshastigheten'],
      explanation: 'NMR utnytter at kjerner med spinn absorberer radiobølger i et magnetfelt, og gir informasjon om hydrogen- og karbonmiljøet.',
    },
    {
      question: 'Hva forteller integralet i et ¹H-NMR-spektrum?',
      options: ['Det relative antallet hydrogenatomer', 'Molmassen', 'Bindingsenergien', 'Antall karbonatomer'],
      explanation: 'Integralet (arealet under toppene) i ¹H-NMR er proporsjonalt med antallet hydrogenatomer i hvert miljø.',
    },
  ],
  'kjemi2-9-4': [
    {
      question: 'Hva er prinsippet bak kromatografi?',
      options: ['Stoffer fordeles mellom en stasjonær og en mobil fase ut fra ulik affinitet', 'Stoffer veies nøyaktig', 'Stoffer felles ut som bunnfall', 'Stoffer brennes og analyseres ved farge'],
      explanation: 'Kromatografi separerer stoffer fordi de har ulik affinitet til stasjonær og mobil fase; sterkere binding til stasjonær fase gir saktere vandring.',
    },
    {
      question: 'Hvordan beregnes Rf-verdien i tynnsjiktkromatografi?',
      options: ['Avstand prøve har vandret delt på avstand løsemiddelfronten har vandret', 'Avstand løsemiddelfront delt på prøveavstand', 'Massen av prøven delt på volumet', 'Tiden delt på avstanden'],
      explanation: 'Rf = (avstand prøven vandret) / (avstand løsemiddelfronten vandret), en verdi mellom 0 og 1.',
    },
    {
      question: 'Hvilken mobil fase brukes i gasskromatografi (GC)?',
      options: ['En inert gass (f.eks. helium eller nitrogen)', 'Et organisk løsemiddel', 'Vann', 'En sterk syre'],
      explanation: 'I GC er den mobile fasen en inert bæregass (He eller N₂), og metoden egner seg for flyktige stoffer.',
    },
    {
      question: 'Hva kan Rf-verdien fortelle oss?',
      options: ['Den er karakteristisk for et stoff under gitte betingelser', 'Den gir molmassen direkte', 'Den gir antall hydrogenatomer', 'Den måler temperaturen'],
      explanation: 'Rf-verdien er karakteristisk for et stoff under bestemte betingelser og brukes til identifikasjon og renhetskontroll.',
    },
    {
      question: 'Hva er HPLC særlig egnet til?',
      options: ['Rask, kvantitativ analyse av ikke-flyktige stoffer', 'Bare flyktige gasser', 'Veiing av bunnfall', 'Måling av flammefarge'],
      explanation: 'HPLC (høytrykks væskekromatografi) presser mobil fase gjennom kolonnen under høyt trykk og analyserer ikke-flyktige stoffer raskt.',
    },
  ],
  'kjemi2-10-1': [
    {
      question: 'Hva er den generelle formelen for karbohydrater?',
      options: ['Cₙ(H₂O)ₘ', 'CₙHₙ', 'CₙH₂ₙ₊₂', 'CₙOₙ'],
      explanation: 'Karbohydrater har generell formel Cₙ(H₂O)ₘ – derav navnet «karbo-hydrat» (karbon og vann).',
    },
    {
      question: 'Hva er molekylformelen til glukose?',
      options: ['C₆H₁₂O₆', 'C₁₂H₂₂O₁₁', 'C₆H₁₀O₅', 'CH₂O'],
      explanation: 'Glukose er et monosakkarid med molekylformel C₆H₁₂O₆.',
    },
    {
      question: 'Hvordan dannes et disakkarid fra to monosakkarider?',
      options: ['Ved kondensasjon med fraspalting av vann', 'Ved addisjon av oksygen', 'Ved oksidasjon', 'Ved hydrolyse'],
      explanation: 'To monosakkarider kobles sammen ved en kondensasjonsreaksjon der det spaltes av et vannmolekyl.',
    },
    {
      question: 'Hva er forskjellen mellom stivelse og cellulose?',
      options: ['Stivelse består av α-glukose, cellulose av β-glukose', 'Begge består av β-glukose', 'Stivelse består av fruktose', 'Cellulose består av galaktose'],
      explanation: 'Stivelse bygges av α-glukose (energilagring), mens cellulose bygges av β-glukose (strukturmateriale, ufordøyelig for mennesker).',
    },
    {
      question: 'Hvordan kan man påvise stivelse?',
      options: ['Den gir blå farge med jod', 'Den gir rødt bunnfall', 'Den lukter banan', 'Den blir grønn med NaOH'],
      explanation: 'Stivelse gir en karakteristisk blå/blåsvart farge med jod.',
    },
  ],
  'kjemi2-10-2': [
    {
      question: 'Hva kjennetegner lipider?',
      options: ['De er uløselige i vann, men løselige i organiske løsemidler', 'De er alltid vannløselige', 'De er bygd opp av aminosyrer', 'De er sterke syrer'],
      explanation: 'Lipider er hydrofobe molekyler som er uløselige i vann, men løselige i organiske løsemidler.',
    },
    {
      question: 'Hva er forskjellen på mettede og umettede fettsyrer?',
      options: ['Mettede har bare enkeltbindinger, umettede har én eller flere dobbeltbindinger', 'Mettede har dobbeltbindinger', 'Umettede har bare enkeltbindinger', 'De er kjemisk identiske'],
      explanation: 'Mettede fettsyrer har bare enkeltbindinger (faste ved romtemperatur), mens umettede har dobbeltbindinger (oftest flytende).',
    },
    {
      question: 'Hva består et triglyserid av?',
      options: ['Glyserol og tre fettsyrer (estere)', 'Tre glyserolmolekyler', 'Glukose og fettsyrer', 'Aminosyrer'],
      explanation: 'Triglyserider er estere av glyserol bundet til tre fettsyrer, og dannes ved kondensasjon (3 vann spaltes av).',
    },
    {
      question: 'Hva dannes ved forsåpning (hydrolyse av triglyserid med base)?',
      options: ['Glyserol og fettsyresalter (såpe)', 'Bare vann', 'Glukose og aminosyrer', 'Estere og alkohol'],
      explanation: 'Forsåpning bryter ned triglyserider med base (NaOH) til glyserol og fettsyresalter, som er såpe.',
    },
    {
      question: 'Hvordan er fosfolipider bygd opp for å danne cellemembraner?',
      options: ['De har et hydrofilt hode og to hydrofobe haler', 'De er fullstendig hydrofobe', 'De er fullstendig hydrofile', 'De består av tre fettsyrer'],
      explanation: 'Fosfolipider har et hydrofilt fosfathode og to hydrofobe fettsyrehaler, og danner et dobbeltlag i cellemembraner.',
    },
  ],
  'kjemi2-10-3': [
    {
      question: 'Hva er byggesteinene i proteiner?',
      options: ['Aminosyrer', 'Monosakkarider', 'Fettsyrer', 'Nukleotider'],
      explanation: 'Proteiner er bygd opp av aminosyrer koblet sammen med peptidbindinger.',
    },
    {
      question: 'Hvilke grupper har alle aminosyrer felles?',
      options: ['En aminogruppe (−NH₂) og en karboksylgruppe (−COOH)', 'To karboksylgrupper', 'En hydroksylgruppe alene', 'En fosfatgruppe'],
      explanation: 'Alle aminosyrer har en aminogruppe (−NH₂), en karboksylgruppe (−COOH) og en variabel sidegruppe (R) på et α-karbon.',
    },
    {
      question: 'Hvordan dannes en peptidbinding?',
      options: ['Ved en kondensasjonsreaksjon mellom to aminosyrer (vann spaltes av)', 'Ved oksidasjon', 'Ved addisjon av oksygen', 'Ved hydrolyse'],
      explanation: 'En peptidbinding dannes når karboksylgruppen til én aminosyre reagerer med aminogruppen til en annen, og det spaltes av vann.',
    },
    {
      question: 'Hva er primærstrukturen til et protein?',
      options: ['Rekkefølgen av aminosyrer i kjeden', 'Den totale 3D-formen', 'Foldemønstre som α-helix', 'Flere polypeptidkjeder sammen'],
      explanation: 'Primærstrukturen er aminosyresekvensen, altså rekkefølgen av aminosyrer i polypeptidkjeden.',
    },
    {
      question: 'Hva skjer ved denaturering av et protein?',
      options: ['Proteinet mister sin naturlige tredimensjonale struktur', 'Aminosyresekvensen endres', 'Det dannes nye peptidbindinger', 'Proteinet blir til DNA'],
      explanation: 'Denaturering bryter de svake bindingene som holder strukturen, slik at proteinet mister sin form og funksjon, f.eks. ved varme eller pH-endring.',
    },
  ],
  'kjemi2-10-4': [
    {
      question: 'Hva er byggesteinene i nukleinsyrer?',
      options: ['Nukleotider', 'Aminosyrer', 'Monosakkarider', 'Fettsyrer'],
      explanation: 'Nukleinsyrer (DNA og RNA) er bygd opp av nukleotider.',
    },
    {
      question: 'Hvilke tre komponenter består et nukleotid av?',
      options: ['Et sukker, en fosfatgruppe og en nitrogenbase', 'Tre fettsyrer', 'En aminosyre og to sukker', 'To fosfatgrupper og glyserol'],
      explanation: 'Et nukleotid består av et sukker (ribose/deoksyribose), en fosfatgruppe og en nitrogenbase.',
    },
    {
      question: 'Hvilke baser parer seg i DNA (Watson-Crick)?',
      options: ['A med T, og G med C', 'A med G, og T med C', 'A med C, og G med T', 'A med U, og G med C'],
      explanation: 'I DNA parer adenin (A) med tymin (T) via 2 hydrogenbindinger, og guanin (G) med cytosin (C) via 3.',
    },
    {
      question: 'Hvilket sukker finnes i DNA?',
      options: ['Deoksyribose', 'Ribose', 'Glukose', 'Fruktose'],
      explanation: 'DNA inneholder sukkeret deoksyribose, mens RNA inneholder ribose.',
    },
    {
      question: 'Hva er informasjonsflyten i det sentrale dogmet?',
      options: ['DNA → RNA → protein', 'Protein → RNA → DNA', 'RNA → DNA → protein', 'DNA → protein → RNA'],
      explanation: 'Det sentrale dogmet beskriver informasjonsflyten: DNA transkriberes til RNA, som translateres til protein.',
    },
  ],
  'kjemi2-10-5': [
    {
      question: 'Hva er enzymer?',
      options: ['Biologiske katalysatorer (proteiner) som øker reaksjonshastigheten', 'En type DNA', 'Energibærende molekyler', 'Fettsyrer'],
      explanation: 'Enzymer er biologiske katalysatorer, vanligvis proteiner, som øker reaksjonshastigheten uten selv å forbrukes.',
    },
    {
      question: 'Hva er det aktive setet på et enzym?',
      options: ['Området der substratet binder og reaksjonen skjer', 'Enzymets ytre overflate', 'Stedet der enzymet brytes ned', 'En del av DNA-et'],
      explanation: 'Det aktive setet er regionen på enzymet der substratet binder seg og reaksjonen katalyseres.',
    },
    {
      question: 'Hvordan øker enzymer reaksjonshastigheten?',
      options: ['Ved å senke aktiveringsenergien', 'Ved å øke aktiveringsenergien', 'Ved å endre ΔH', 'Ved å forskyve likevekten'],
      explanation: 'Enzymer senker aktiveringsenergien, slik at reaksjonen går raskere, men de endrer ikke likevektsposisjonen eller ΔH.',
    },
    {
      question: 'Hva beskriver Michaelis-Menten-konstanten Km?',
      options: ['Substratkonsentrasjonen ved halvmaksimal hastighet', 'Maksimal hastighet', 'Enzymets molare masse', 'Aktiveringsenergien'],
      explanation: 'Km er substratkonsentrasjonen ved halvparten av Vmax; lav Km betyr høy affinitet mellom enzym og substrat.',
    },
    {
      question: 'Hva kjennetegner en kompetitiv inhibitor?',
      options: ['Den binder til det aktive setet og øker Km', 'Den binder til ES-komplekset', 'Den senker Vmax og lar Km være uendret', 'Den binder permanent til DNA'],
      explanation: 'En kompetitiv inhibitor konkurrerer med substratet om det aktive setet, noe som øker Km mens Vmax forblir uendret.',
    },
  ],
  'kjemi2-10-6': [
    {
      question: 'Hva er en polymer?',
      options: ['Et stort molekyl bygd opp av mange like enheter (monomerer)', 'Et lite enkeltmolekyl', 'En type ion', 'En metallbinding'],
      explanation: 'En polymer er et stort molekyl satt sammen av mange gjentatte enheter kalt monomerer.',
    },
    {
      question: 'Hva er forskjellen på addisjons- og kondensasjonspolymerisering?',
      options: ['Addisjon gir intet biprodukt; kondensasjon spalter av et lite molekyl (f.eks. vann)', 'Begge spalter av vann', 'Addisjon spalter alltid av HCl', 'Det er ingen forskjell'],
      explanation: 'Ved addisjonspolymerisering kobles monomerene direkte uten biprodukt; ved kondensasjon spaltes det av et lite molekyl som vann eller HCl.',
    },
    {
      question: 'Hvilken monomer brukes for å lage polyetylen (PE)?',
      options: ['Eten (CH₂=CH₂)', 'Propen', 'Vinylklorid', 'Styren'],
      explanation: 'Polyetylen dannes ved addisjonspolymerisering av eten (etylen, CH₂=CH₂).',
    },
    {
      question: 'Hvilken type polymer er PET (polyetylentereftalat)?',
      options: ['En kondensasjonspolymer (polyester)', 'En addisjonspolymer', 'Et monosakkarid', 'En metalllegering'],
      explanation: 'PET er en kondensasjonspolymer (polyester) dannet fra tereftalsyre og etandiol, med vann som biprodukt.',
    },
    {
      question: 'Hva er en miljøutfordring med tradisjonell plast?',
      options: ['Nedbrytning tar svært lang tid (100–1000 år)', 'Den brytes ned for raskt', 'Den er laget av fornybare råstoffer', 'Den løses lett opp i vann'],
      explanation: 'Tradisjonell plast brytes ned svært sakte (100–1000 år), gir mikroplast og bygger på fossile ressurser.',
    },
  ],
  'kjemi2-10-7': [
    {
      question: 'Hva handler grønn kjemi om?',
      options: ['Å designe prosesser som reduserer bruk og dannelse av farlige stoffer', 'Å bruke mest mulig energi', 'Å øke avfallsmengden', 'Å unngå katalysatorer'],
      explanation: 'Grønn kjemi handler om å designe produkter og prosesser som reduserer eller eliminerer bruk og dannelse av farlige stoffer.',
    },
    {
      question: 'Hvordan beregnes atomøkonomi?',
      options: ['M(ønsket produkt) / M(alle reaktanter) × 100 %', 'M(reaktanter) / M(produkt) × 100 %', 'Masse avfall / masse produkt', 'Antall trinn i synteseveien'],
      explanation: 'Atomøkonomi = M(ønsket produkt) / M(alle reaktanter) × 100 % – et mål på hvor mye av reaktantene som ender i produktet.',
    },
    {
      question: 'Hva er atomøkonomien for en addisjonsreaksjon som CH₂=CH₂ + H₂ → CH₃CH₃?',
      options: ['100 %', '50 %', '24 %', '0 %'],
      explanation: 'I en ren addisjonsreaksjon ender alle atomene opp i produktet, så atomøkonomien er 100 %.',
    },
    {
      question: 'Hva er et av de 12 prinsippene for grønn kjemi?',
      options: ['Forebygg avfall fremfor å rense det opp', 'Maksimer avfallsmengden', 'Bruk mest mulig giftige løsemidler', 'Unngå fornybare råstoffer'],
      explanation: 'Det første prinsippet for grønn kjemi er å forebygge avfall fremfor å håndtere det i etterkant.',
    },
    {
      question: 'Hva kjennetegner en sirkulær økonomi sammenlignet med en lineær?',
      options: ['Materialer gjenvinnes og brukes på nytt i stedet for å kastes', 'Alt kastes etter bruk', 'Den bruker mer fossile råstoffer', 'Den lager mer avfall'],
      explanation: 'En sirkulær økonomi gjenvinner og gjenbruker materialer, mens en lineær modell går «utvinne → produsere → bruke → kaste».',
    },
  ],
};

export default quizData_kjemi2;
