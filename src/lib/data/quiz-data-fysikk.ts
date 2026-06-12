import type { QuizQuestion } from './quiz-data';

const quizData_fysikk: Record<string, QuizQuestion[]> = {
  'fysikk2-1-1': [
  {
    question: 'Hva er forskjellen mellom en skalar og en vektor?',
    options: [
      'En skalar har bare tallverdi, en vektor har både tallverdi og retning',
      'En skalar har retning, en vektor har bare tallverdi',
      'En skalar brukes i fysikk, en vektor brukes i matematikk',
      'Det er ingen forskjell, begrepene betyr det samme',
    ],
    explanation: 'En skalar (som masse og temperatur) har bare en tallverdi, mens en vektor (som kraft og hastighet) har både størrelse og retning.',
  },
  {
    question: 'Hvordan dekomponeres en vektor A med lengde 10 og vinkel 30° over x-aksen i komponenter?',
    options: [
      'Ax = 10·cos(30°), Ay = 10·sin(30°)',
      'Ax = 10·sin(30°), Ay = 10·cos(30°)',
      'Ax = 10/cos(30°), Ay = 10/sin(30°)',
      'Ax = 10 + cos(30°), Ay = 10 + sin(30°)',
    ],
    explanation: 'Vektorkomponenter finnes med Ax = A·cos(θ) og Ay = A·sin(θ), der θ er vinkelen mellom vektoren og x-aksen.',
  },
  {
    question: 'Hva er lengden av vektoren med komponenter Ax = 3 og Ay = 4?',
    options: [
      '5',
      '7',
      '12',
      '1',
    ],
    explanation: 'Lengden av en vektor finnes med Pytagoras: |A| = √(Ax² + Ay²) = √(9 + 16) = √25 = 5.',
  },
  {
    question: 'Hva representerer enhetsvektorene î og ĵ?',
    options: [
      'Vektorer med lengde 1 i henholdsvis x- og y-retning',
      'Vektorer med lengde 0 i henholdsvis x- og y-retning',
      'Vektorer som peker i motsatt retning av koordinataksene',
      'Vektorer med variabel lengde avhengig av situasjonen',
    ],
    explanation: 'Enhetsvektorene î og ĵ er vektorer med lengde 1 som peker i positiv x- og y-retning. De brukes for å uttrykke andre vektorer.',
  },
  {
    question: 'Hvordan adderer man to vektorer A = 2î + 3ĵ og B = 4î - ĵ?',
    options: [
      'A + B = 6î + 2ĵ',
      'A + B = 8î + 3ĵ',
      'A + B = 6î + 4ĵ',
      'A + B = 2î + 2ĵ',
    ],
    explanation: 'Vektoraddisjon gjøres komponentvis: (2+4)î + (3+(-1))ĵ = 6î + 2ĵ.',
  },
],


  'fysikk2-1-2': [
  {
    question: 'Hva er sammenhengen mellom posisjonsvektoren r(t) og hastighetsvektoren v(t)?',
    options: [
      'v(t) er den deriverte av r(t) med hensyn på tid',
      'r(t) er den deriverte av v(t) med hensyn på tid',
      'v(t) = r(t) · t',
      'r(t) og v(t) er uavhengige av hverandre',
    ],
    explanation: 'Hastighetsvektoren v(t) = dr/dt er den tidsderiverte av posisjonsvektoren, og beskriver hvor raskt og i hvilken retning objektet beveger seg.',
  },
  {
    question: 'Et objekt har konstant fart, men ikke konstant hastighet. Hva kan vi si om bevegelsen?',
    options: [
      'Objektet endrer retning, for eksempel i sirkelbevegelse',
      'Dette er umulig - konstant fart betyr alltid konstant hastighet',
      'Objektet står stille',
      'Objektet beveger seg i en rett linje',
    ],
    explanation: 'Fart er størrelsen av hastighetsvektoren. Et objekt i sirkelbevegelse har konstant fart, men retningen endrer seg kontinuerlig, så hastigheten er ikke konstant.',
  },
  {
    question: 'Hva sier uavhengighetsprinsippet om bevegelse i to dimensjoner?',
    options: [
      'Bevegelse i x- og y-retning kan analyseres separat og er uavhengige av hverandre',
      'Bevegelse i x-retning avhenger alltid av bevegelse i y-retning',
      'Man må alltid analysere begge retninger samtidig',
      'Prinsippet gjelder bare for bevegelse i én dimensjon',
    ],
    explanation: 'Uavhengighetsprinsippet sier at bevegelse i ortogonale retninger (x og y) er uavhengige. Dette gjør at vi kan løse 2D-problemer som to separate 1D-problemer.',
  },
  {
    question: 'Hvis r(t) = t²î + 3tĵ (i meter), hva er hastigheten ved t = 2 s?',
    options: [
      'v = 4î + 3ĵ m/s',
      'v = 2î + 3ĵ m/s',
      'v = 4î + 6ĵ m/s',
      'v = t²î + 3tĵ m/s',
    ],
    explanation: 'v(t) = dr/dt = 2tî + 3ĵ. Ved t = 2 s: v(2) = 2·2î + 3ĵ = 4î + 3ĵ m/s.',
  },
  {
    question: 'Hva er akselerasjonsvektorens relasjon til hastighetsvektoren?',
    options: [
      'a(t) er den deriverte av v(t) med hensyn på tid',
      'v(t) er den deriverte av a(t) med hensyn på tid',
      'a(t) = v(t) / t',
      'a(t) og v(t) peker alltid i samme retning',
    ],
    explanation: 'Akselerasjonsvektoren a(t) = dv/dt er den tidsderiverte av hastighetsvektoren. Den beskriver hvordan hastigheten endrer seg.',
  },
],


  'fysikk2-1-3': [
  {
    question: 'Ved skråkast uten luftmotstand, hva er akselerasjonen i horisontal retning?',
    options: [
      'Null - det er ingen horisontal akselerasjon',
      'g = 9,81 m/s² mot høyre',
      'g = 9,81 m/s² mot venstre',
      'Avhenger av starthastigheten',
    ],
    explanation: 'Ved skråkast uten luftmotstand virker bare tyngdekraften, som kun har vertikal komponent. Derfor er ax = 0, og den horisontale hastigheten er konstant.',
  },
  {
    question: 'En ball kastes horisontalt fra et bord med hastighet 5 m/s. Bordet er 1,25 m høyt. Hvor langt fra bordet lander ballen? (g = 10 m/s²)',
    options: [
      '2,5 m',
      '5,0 m',
      '1,25 m',
      '0,5 m',
    ],
    explanation: 'Falltiden: y = ½gt² → t = √(2y/g) = √(2·1,25/10) = 0,5 s. Horisontal avstand: x = vx·t = 5·0,5 = 2,5 m.',
  },
  {
    question: 'Ved skråkast, hvilken vinkel gir størst rekkevidde på flat mark (uten luftmotstand)?',
    options: [
      '45°',
      '30°',
      '60°',
      '90°',
    ],
    explanation: 'Rekkevidden R = v₀²sin(2θ)/g er maksimal når sin(2θ) = 1, altså når 2θ = 90°, som gir θ = 45°.',
  },
  {
    question: 'Hva er formen på banen til et prosjektil i fritt fall (uten luftmotstand)?',
    options: [
      'En parabel',
      'En sirkel',
      'En rett linje',
      'En ellipse',
    ],
    explanation: 'Ved å eliminere tiden fra x(t) og y(t) får vi en andregradslikning i x, som beskriver en parabel.',
  },
  {
    question: 'Ved skråkast med startvinkel 60°, hva er stårtvinkelens "komplementære vinkel" som gir samme rekkevidde?',
    options: [
      '30°',
      '45°',
      '90°',
      '120°',
    ],
    explanation: 'Komplementære vinkler (vinkler som summerer til 90°) gir samme rekkevidde fordi sin(2θ) = sin(2(90°-θ)). 60° og 30° er komplementære.',
  },
],


  'fysikk2-1-4': [
  {
    question: 'Hva er formelen for sentripetalakselerasjon ved uniform sirkelbevegelse?',
    options: [
      'a = v²/r',
      'a = v·r',
      'a = v/r²',
      'a = r/v²',
    ],
    explanation: 'Sentripetalakselerasjonen er a = v²/r, der v er farten og r er radiusen. Akselerasjonen peker alltid mot sentrum.',
  },
  {
    question: 'En bil kjører i en sving med radius 50 m. Hvilken fart må bilen ha for at sentripetalakselerasjonen skal være lik g = 10 m/s²?',
    options: [
      'Omtrent 22 m/s',
      'Omtrent 5 m/s',
      'Omtrent 50 m/s',
      'Omtrent 10 m/s',
    ],
    explanation: 'Fra a = v²/r får vi v = √(ar) = √(10·50) = √500 ≈ 22,4 m/s.',
  },
  {
    question: 'Hva er sammenhengen mellom vinkelfart ω og frekvens f?',
    options: [
      'ω = 2πf',
      'ω = f/2π',
      'ω = πf',
      'ω = f²',
    ],
    explanation: 'Vinkelfarten ω = 2πf, der f er frekvensen (antall omdreininger per sekund). En full omdreining tilsvarer 2π radianer.',
  },
  {
    question: 'Hva er sentripetalkraft?',
    options: [
      'Nettokraften som peker mot sentrum og holder objektet i sirkelbane',
      'En egen kraft som oppstår ved sirkelbevegelse',
      'Kraften som skyver objektet utover fra sentrum',
      'En kraft som bare virker på roterende objekter i verdensrommet',
    ],
    explanation: 'Sentripetalkraft er ikke en egen krafttype, men nettokraften som må peke mot sentrum for å gi sentripetalakselerasjon. Den kan være friksjon, tau-spenning, gravitasjon, etc.',
  },
  {
    question: 'Et objekt roterer med periode T = 4 s. Hva er vinkelfarten?',
    options: [
      'π/2 rad/s',
      '2π rad/s',
      '4π rad/s',
      'π/4 rad/s',
    ],
    explanation: 'Vinkelfarten ω = 2π/T = 2π/4 = π/2 rad/s.',
  },
],


  'fysikk2-1-5': [
  {
    question: 'Hva er hovedideen bak Eulers metode for numerisk modellering?',
    options: [
      'Bruke små tidssteg og oppdatere posisjon og hastighet trinnvis',
      'Løse differensiallikninger analytisk',
      'Bruke eksakte formler for alle bevegelser',
      'Ignorere akselerasjonen og bare se på posisjon',
    ],
    explanation: 'Eulers metode deler bevegelsen inn i små tidssteg Δt og oppdaterer hastighet og posisjon trinnvis basert på akselerasjonen.',
  },
  {
    question: 'I Eulers metode, hvordan oppdateres hastigheten fra et tidssteg til det neste?',
    options: [
      'v_ny = v_gammel + a · Δt',
      'v_ny = v_gammel · a · Δt',
      'v_ny = v_gammel - a · Δt',
      'v_ny = a · Δt',
    ],
    explanation: 'I Eulers metode oppdateres hastigheten med v_ny = v_gammel + a·Δt, der a er akselerasjonen og Δt er tidssteget.',
  },
  {
    question: 'Hva skjer med nøyaktigheten i en numerisk simulering når tidssteget Δt gjøres mindre?',
    options: [
      'Nøyaktigheten øker, men simuleringen tar lengre tid',
      'Nøyaktigheten synker',
      'Nøyaktigheten forblir uendret',
      'Simuleringen blir raskere og mer nøyaktig',
    ],
    explanation: 'Mindre tidssteg gir bedre tilnærming til den kontinuerlige bevegelsen, men krever flere beregninger og tar lengre tid.',
  },
  {
    question: 'Hvorfor er numerisk modellering nyttig i fysikk?',
    options: [
      'Den kan løse komplekse problemer som ikke har analytiske løsninger',
      'Den gir alltid eksakte svar',
      'Den erstatter behovet for å forstå fysikken',
      'Den fungerer bare for enkle problemer',
    ],
    explanation: 'Mange fysiske problemer, som bevegelse med luftmotstand proporsonal med v², har ikke analytiske løsninger og må løses numerisk.',
  },
  {
    question: 'Hva er forskjellen mellom Eulers metode og Euler-Cromer-metoden?',
    options: [
      'Euler-Cromer bruker den oppdaterte hastigheten til å beregne ny posisjon',
      'Euler-Cromer er mindre nøyaktig enn Euler',
      'Euler-Cromer bruker større tidssteg',
      'Det er ingen forskjell',
    ],
    explanation: 'I Euler-Cromer oppdateres først hastigheten, deretter brukes den NYE hastigheten til å oppdatere posisjonen. Dette gir bedre energibevaring.',
  },
],


  'fysikk2-2-1': [
  {
    question: 'Hva sier Newtons gravitasjonslov om hvordan gravitasjonskraften avhenger av avstanden mellom to masser?',
    options: [
      'Kraften er omvendt proporsjonal med kvadratet av avstanden',
      'Kraften er proporsjonal med avstanden',
      'Kraften er omvendt proporsjonal med avstanden',
      'Kraften er uavhengig av avstanden',
    ],
    explanation: 'Gravitasjonskraften F = GMm/r² avtar med kvadratet av avstanden. Dobler du avstanden, blir kraften fire ganger mindre.',
  },
  {
    question: 'Hva er verdien av gravitasjonskonstanten G?',
    options: [
      'G ≈ 6,67 × 10⁻¹¹ N·m²/kg²',
      'G ≈ 9,81 m/s²',
      'G ≈ 3,0 × 10⁸ m/s',
      'G ≈ 6,02 × 10²³',
    ],
    explanation: 'Gravitasjonskonstanten G ≈ 6,67 × 10⁻¹¹ N·m²/kg² er en universell konstant som bestemmer styrken av gravitasjonen.',
  },
  {
    question: 'To legemer med masse m₁ og m₂ tiltrekker hverandre med en kraft F. Hva blir kraften hvis begge massene dobles?',
    options: [
      '4F',
      '2F',
      'F',
      '8F',
    ],
    explanation: 'F = Gm₁m₂/r². Hvis begge massene dobles: F_ny = G(2m₁)(2m₂)/r² = 4Gm₁m₂/r² = 4F.',
  },
  {
    question: 'Hvorfor merker vi ikke gravitasjonskraften fra en bil som står ved siden av oss?',
    options: [
      'Fordi G er ekstremt liten, og massene må være enorme for merkbar kraft',
      'Fordi biler ikke har masse',
      'Fordi gravitasjon bare virker mellom himmellegemer',
      'Fordi vi er for nær bilen',
    ],
    explanation: 'Gravitasjonskonstanten G er så liten at det kreves astronomiske masser for at gravitasjonskraften skal være merkbar.',
  },
  {
    question: 'Hva er sammenhengen mellom g på jordoverflaten og Newtons gravitasjonslov?',
    options: [
      'g = GM_jord/R_jord²',
      'g = GM_jord · R_jord²',
      'g = G/M_jord',
      'g = M_jord/G',
    ],
    explanation: 'Tyngdeakselerasjonen g = GM/R² på jordoverflaten følger direkte fra gravitasjonsloven når vi setter inn jordas masse og radius.',
  },
],


  'fysikk2-2-2': [
  {
    question: 'Hva er gravitasjonsfelt?',
    options: [
      'Et felt som beskriver gravitasjonskraften per masseenhet i hvert punkt i rommet',
      'En kraft som virker mellom to masser',
      'Et felt som bare finnes rundt planeter',
      'En matematisk konstruksjon uten fysisk betydning',
    ],
    explanation: 'Gravitasjonsfeltet g = F/m angir kraften per masseenhet og peker mot den masse som skaper feltet.',
  },
  {
    question: 'Hva er enheten for gravitasjonspotensial?',
    options: [
      'J/kg (joule per kilogram)',
      'N (newton)',
      'm/s² (meter per sekund i annen)',
      'kg·m/s (kilogram meter per sekund)',
    ],
    explanation: 'Gravitasjonspotensialet V = -GM/r har enhet energi per masse, altså J/kg.',
  },
  {
    question: 'Hva er unnslipningshastigheten fra jordoverflaten?',
    options: [
      'Omtrent 11,2 km/s',
      'Omtrent 7,9 km/s',
      'Omtrent 3,0 km/s',
      'Omtrent 30 km/s',
    ],
    explanation: 'Unnslipningshastigheten fra jorda er v_e = √(2GM/R) ≈ 11,2 km/s. Med denne farten kan et objekt unnslippe jordas gravitasjon.',
  },
  {
    question: 'Hva karakteriserer ekvipotensialflater i et gravitasjonsfelt?',
    options: [
      'Potensialet er konstant langs flaten, og feltlinjene står vinkelrett på flaten',
      'Kraften er konstant langs flaten',
      'Hastigheten er konstant langs flaten',
      'Massen er konstant langs flaten',
    ],
    explanation: 'På en ekvipotensialflate er gravitasjonspotensialet konstant. Feltlinjene krysser alltid ekvipotensialflatene vinkelrett.',
  },
  {
    question: 'Hvorfor er gravitasjonspotensialet definert som negativt?',
    options: [
      'Fordi vi setter V = 0 i uendelig avstand, og potensialet synker når vi nærmer oss massen',
      'Fordi gravitasjon er en frastøtende kraft',
      'Fordi det er en matematisk konvensjon uten fysisk betydning',
      'Fordi masser kan ha negativ verdi',
    ],
    explanation: 'Med V = 0 i uendelig avstand og V = -GM/r, blir potensialet mer negativt jo nærmere vi kommer massen. Et bundent objekt har negativ total energi.',
  },
],


  'fysikk2-2-3': [
  {
    question: 'Hva er formelen for banehastigheten til en satellitt i sirkulær bane rundt jorda?',
    options: [
      'v = √(GM/r)',
      'v = √(GMr)',
      'v = GM/r',
      'v = GM/r²',
    ],
    explanation: 'For sirkulær bane må gravitasjonskraften gi sentripetalakselerasjonen: GMm/r² = mv²/r, som gir v = √(GM/r).',
  },
  {
    question: 'Hva er en geostasjonær satellitt?',
    options: [
      'En satellitt som går rundt jorda med periode 24 timer og står stille relativt til jordoverflaten',
      'En satellitt som står helt stille i rommet',
      'En satellitt som beveger seg i polar bane',
      'En satellitt som kretser rundt månen',
    ],
    explanation: 'En geostasjonær satellitt har samme periode som jordas rotasjon (24 timer) og befinner seg over ekvator, slik at den ser ut til å stå stille sett fra jorda.',
  },
  {
    question: 'Hvordan endres perioden for en satellitt hvis baneverdien dobles?',
    options: [
      'Perioden øker med faktoren 2√2 ≈ 2,83',
      'Perioden dobles',
      'Perioden halveres',
      'Perioden forblir uendret',
    ],
    explanation: 'Fra Keplers tredje lov: T² ∝ r³. Hvis r dobles: T_ny²/T² = (2r)³/r³ = 8, så T_ny = √8·T = 2√2·T.',
  },
  {
    question: 'Hva er den omtrentlige høyden for en geostasjonær bane?',
    options: [
      'Ca. 36 000 km over jordoverflaten',
      'Ca. 400 km over jordoverflaten',
      'Ca. 1 000 km over jordoverflaten',
      'Ca. 100 000 km over jordoverflaten',
    ],
    explanation: 'En geostasjonær satellitt befinner seg ca. 36 000 km over jordoverflaten, der perioden er akkurat 24 timer.',
  },
  {
    question: 'Hvorfor er det vanskeligere å sende en romsonde ut av solsystemet enn å sende den i bane rundt sola?',
    options: [
      'Fordi unnslipningshastigheten er høyere enn banehastigheten',
      'Fordi sola er for varm',
      'Fordi det er for langt',
      'Fordi gravitasjonen fra planetene hindrer det',
    ],
    explanation: 'Unnslipningshastigheten v_e = √2 · v_bane. For å unnslippe trengs √2 ≈ 1,41 ganger så høy hastighet som for sirkulær bane.',
  },
],


  'fysikk2-2-4': [
  {
    question: 'Hva sier Keplers første lov?',
    options: [
      'Planetbanene er ellipser med sola i ett av brennpunktene',
      'Planetene beveger seg med konstant hastighet',
      'Perioden til en planet er proporsjonal med avstanden til sola',
      'Alle planetbaner er sirkler',
    ],
    explanation: 'Keplers første lov sier at alle planetbaner er ellipser, der sola befinner seg i ett av de to brennpunktene.',
  },
  {
    question: 'Hva sier Keplers andre lov (arealsetningen)?',
    options: [
      'Linjen fra sola til planeten sveiper over like store arealer på like lang tid',
      'Alle planeter har samme baneperiode',
      'Planetene beveger seg raskere jo lenger fra sola de er',
      'Arealene av planetbanene er like',
    ],
    explanation: 'Arealsetningen sier at radius-vektoren sveiper over like store arealer på like lang tid. Dette betyr at planeten beveger seg raskest når den er nærmest sola.',
  },
  {
    question: 'Hva sier Keplers tredje lov?',
    options: [
      'T² er proporsjonal med a³, der T er perioden og a er store halvakse',
      'T er proporsjonal med a',
      'T² er proporsjonal med a²',
      'T er proporsjonal med a³',
    ],
    explanation: 'Keplers tredje lov: T² = (4π²/GM)a³. For planeter rundt sola er T²/a³ konstant.',
  },
  {
    question: 'En planet har dobbelt så lang stor halvakse som jorda. Hvor lang tid bruker planeten på én omløp rundt sola?',
    options: [
      'Omtrent 2,83 år',
      '2 år',
      '4 år',
      '8 år',
    ],
    explanation: 'Fra Keplers tredje lov: T² ∝ a³. Hvis a = 2·a_jord: T² = 2³ = 8, så T = √8 ≈ 2,83 år.',
  },
  {
    question: 'Hva er perihelion og aphelion?',
    options: [
      'Det nærmeste og fjerneste punktet i en planets bane rundt sola',
      'To typer planetbaner',
      'De to brennpunktene i en ellipse',
      'Navn på to planeter',
    ],
    explanation: 'Perihelion er punktet der planeten er nærmest sola, og aphelion er der planeten er lengst fra sola.',
  },
],


  'fysikk2-2-5': [
  {
    question: 'Hva er formelen for potensiell energi i et gravitasjonsfelt?',
    options: [
      'Ep = -GMm/r',
      'Ep = GMm/r',
      'Ep = GMm/r²',
      'Ep = mgh',
    ],
    explanation: 'Den gravitasjonelle potensielle energien Ep = -GMm/r er negativ, og referansepunktet er satt i uendelig avstand.',
  },
  {
    question: 'Hva er den totale mekaniske energien for en satellitt i sirkulær bane?',
    options: [
      'E = -GMm/(2r)',
      'E = GMm/r',
      'E = 0',
      'E = -GMm/r',
    ],
    explanation: 'For sirkulær bane: Ek = GMm/(2r) og Ep = -GMm/r. Totalt: E = Ek + Ep = -GMm/(2r). Den totale energien er negativ.',
  },
  {
    question: 'Hva kjennetegner en bundet bane i et gravitasjonsfelt?',
    options: [
      'Den totale mekaniske energien er negativ',
      'Den totale mekaniske energien er positiv',
      'Den totale mekaniske energien er null',
      'Objektet beveger seg i en rett linje',
    ],
    explanation: 'Et objekt med negativ total energi er bundet og vil bevege seg i en lukket bane (ellipse eller sirkel). Positiv energi gir ubundet bane (hyperbel).',
  },
  {
    question: 'Hva skjer med en satellitts hastighet når den beveger seg fra apogeum (høyeste punkt) til perigeum (laveste punkt)?',
    options: [
      'Hastigheten øker fordi kinetisk energi øker på bekostning av potensiell energi',
      'Hastigheten synker',
      'Hastigheten forblir konstant',
      'Hastigheten varierer tilfeldig',
    ],
    explanation: 'Når satellitten nærmer seg jorda, synker den potensielle energien (blir mer negativ), og den kinetiske energien øker tilsvarende, så hastigheten øker.',
  },
  {
    question: 'Hva er sammenhengen mellom unnslipningshastighet og total energi?',
    options: [
      'Ved unnslipningshastigheten er den totale energien akkurat null',
      'Ved unnslipningshastigheten er den totale energien positiv',
      'Ved unnslipningshastigheten er den totale energien negativ',
      'Det er ingen sammenheng',
    ],
    explanation: 'Ved unnslipningshastigheten er E = Ek + Ep = 0. Objektet har akkurat nok energi til å nå uendelig avstand med null hastighet.',
  },
],


  'fysikk2-3-1': [
  {
    question: 'Hva er enheten for elektrisk ladning?',
    options: [
      'Coulomb (C)',
      'Ampere (A)',
      'Volt (V)',
      'Joule (J)',
    ],
    explanation: 'Elektrisk ladning måles i coulomb (C). Én coulomb tilsvarer ladningen til ca. 6,24 × 10¹⁸ elektroner (eller protoner).',
  },
  {
    question: 'Hva sier Coulombs lov om kraften mellom to punktladninger?',
    options: [
      'Kraften er proporsjonal med produktet av ladningene og omvendt proporsjonal med kvadratet av avstanden',
      'Kraften er proporsjonal med summen av ladningene',
      'Kraften er proporsjonal med avstanden mellom ladningene',
      'Kraften er alltid tiltrekkende',
    ],
    explanation: 'Coulombs lov: F = kq₁q₂/r². Kraften er proporsjonal med begge ladningene og avtar med kvadratet av avstanden.',
  },
  {
    question: 'To ladninger på +2 μC og -3 μC er plassert 10 cm fra hverandre. Er kraften mellom dem tiltrekkende eller frastøtende?',
    options: [
      'Tiltrekkende, fordi ladningene har motsatt fortegn',
      'Frastøtende, fordi begge ladningene er ulike null',
      'Det er ingen kraft mellom dem',
      'Det avhenger av avstanden',
    ],
    explanation: 'Motsatte ladninger tiltrekker hverandre. Positive og negative ladninger frastøter ladninger med samme fortegn.',
  },
  {
    question: 'Hva er verdien av Coulombs konstant k?',
    options: [
      'k ≈ 9 × 10⁹ N·m²/C²',
      'k ≈ 6,67 × 10⁻¹¹ N·m²/kg²',
      'k ≈ 8,85 × 10⁻¹² F/m',
      'k ≈ 1,6 × 10⁻¹⁹ C',
    ],
    explanation: 'Coulombs konstant k = 1/(4πε₀) ≈ 9 × 10⁹ N·m²/C². Denne konstanten bestemmer styrken av elektrostatiske krefter.',
  },
  {
    question: 'Hva er ladningen til ett elektron?',
    options: [
      'e ≈ -1,6 × 10⁻¹⁹ C',
      'e ≈ +1,6 × 10⁻¹⁹ C',
      'e ≈ -9,1 × 10⁻³¹ kg',
      'e ≈ 1 C',
    ],
    explanation: 'Elektronets ladning er e ≈ -1,6 × 10⁻¹⁹ C. Dette er den minste frie ladningen som finnes (elementærladningen).',
  },
],


  'fysikk2-3-2': [
  {
    question: 'Hva er definisjonen av elektrisk felt?',
    options: [
      'Kraft per ladningsenhet: E = F/q',
      'Ladning per arealenhet',
      'Potensial per lengdeenhet',
      'Energi per volumenhet',
    ],
    explanation: 'Det elektriske feltet E = F/q angir kraften som virker på en positiv testladning dividert med ladningens størrelse.',
  },
  {
    question: 'Hva er enheten for elektrisk feltstyrke?',
    options: [
      'N/C eller V/m',
      'C/m²',
      'J/C',
      'A/m',
    ],
    explanation: 'Elektrisk feltstyrke måles i newton per coulomb (N/C), som er ekvivalent med volt per meter (V/m).',
  },
  {
    question: 'Hvordan peker elektriske feltlinjer i forhold til en positiv punktladning?',
    options: [
      'Radialt utover fra ladningen',
      'Radialt innover mot ladningen',
      'I sirkler rundt ladningen',
      'Parallelt med jordoverflaten',
    ],
    explanation: 'Elektriske feltlinjer peker utover fra positive ladninger og innover mot negative ladninger. Dette reflekterer at en positiv testladning ville beveget seg bort fra en positiv ladning.',
  },
  {
    question: 'Hva er det elektriske feltet i en avstand r fra en punktladning Q?',
    options: [
      'E = kQ/r²',
      'E = kQ/r',
      'E = kQ·r²',
      'E = kQr',
    ],
    explanation: 'Det elektriske feltet fra en punktladning er E = kQ/r², der k er Coulombs konstant. Feltet avtar med kvadratet av avstanden.',
  },
  {
    question: 'Hva skjer med en positiv ladning som plasseres i et uniformt elektrisk felt?',
    options: [
      'Den akselæreres i feltets retning',
      'Den akselæreres mot feltets retning',
      'Den står i ro',
      'Den beveger seg i sirkler',
    ],
    explanation: 'En positiv ladning opplever en kraft F = qE i samme retning som feltet E, og akselæreres derfor i feltets retning.',
  },
],


  'fysikk2-3-3': [
  {
    question: 'Hva er elektrisk potensial?',
    options: [
      'Potensiell energi per ladningsenhet: V = Ep/q',
      'Kraft per ladningsenhet',
      'Ladning per arealenhet',
      'Strøm per spenningsenhet',
    ],
    explanation: 'Elektrisk potensial V = Ep/q er den potensielle energien per ladningsenhet. Enheten er volt (V) = joule per coulomb (J/C).',
  },
  {
    question: 'Hva er spenning?',
    options: [
      'Forskjellen i elektrisk potensial mellom to punkter',
      'Styrken av det elektriske feltet',
      'Mengden ladning som strømmer per sekund',
      'Energien lagret i en kondensator',
    ],
    explanation: 'Spenning U = V₂ - V₁ er potensialforskjellen mellom to punkter. Spenningen driver strømmen i en krets.',
  },
  {
    question: 'Hva er sammenhengen mellom elektrisk felt og potensial i et uniformt felt?',
    options: [
      'E = -ΔV/Δx (feltet peker fra høyt til lavt potensial)',
      'E = ΔV · Δx',
      'E = ΔV + Δx',
      'Det er ingen sammenheng',
    ],
    explanation: 'I et uniformt felt er E = -ΔV/Δx. Feltet peker i retningen der potensialet synker raskest, altså fra høyt til lavt potensial.',
  },
  {
    question: 'Hva er potensialet i en avstand r fra en punktladning Q?',
    options: [
      'V = kQ/r',
      'V = kQ/r²',
      'V = kQr',
      'V = -kQ/r',
    ],
    explanation: 'Det elektriske potensialet fra en punktladning er V = kQ/r. Potensialet er positivt for positive ladninger og negativt for negative.',
  },
  {
    question: 'Hvor mye arbeid kreves for å flytte en ladning q gjennom en potensialforskjell ΔV?',
    options: [
      'W = qΔV',
      'W = q/ΔV',
      'W = ΔV/q',
      'W = q + ΔV',
    ],
    explanation: 'Arbeidet for å flytte en ladning gjennom en potensialforskjell er W = qΔV. Dette er grunnlaget for energi i elektriske kretser.',
  },
],


  'fysikk2-3-4': [
  {
    question: 'Hva er kapasitans?',
    options: [
      'Evnen til å lagre elektrisk ladning per volt: C = Q/V',
      'Evnen til å lede strøm',
      'Motstand mot strøm',
      'Energi per volumenhet',
    ],
    explanation: 'Kapasitans C = Q/V angir hvor mye ladning en kondensator kan lagre per volt spenning. Enheten er farad (F).',
  },
  {
    question: 'Hva skjer med kapasitansen til en platekondensator hvis plateavstanden halveres?',
    options: [
      'Kapasitansen dobles',
      'Kapasitansen halveres',
      'Kapasitansen firedobles',
      'Kapasitansen forblir uendret',
    ],
    explanation: 'For en platekondensator er C = ε₀A/d. Hvis d halveres, dobles C fordi kapasitansen er omvendt proporsjonal med plateavstanden.',
  },
  {
    question: 'Hva er formelen for energien lagret i en kondensator?',
    options: [
      'E = ½CV² = ½QV = Q²/(2C)',
      'E = CV²',
      'E = QV',
      'E = Q/C',
    ],
    explanation: 'Energien lagret i en kondensator er E = ½CV² = ½QV = Q²/(2C). Denne energien er lagret i det elektriske feltet mellom platene.',
  },
  {
    question: 'Hva er funksjonen til et dielektrikum i en kondensator?',
    options: [
      'Det øker kapasitansen ved å redusere det effektive elektriske feltet',
      'Det reduserer kapasitansen',
      'Det leder strøm mellom platene',
      'Det reduserer energilagringen',
    ],
    explanation: 'Et dielektrikum mellom kondensatorplatene øker kapasitansen med en faktor κ (den relative permittiviteten) fordi det reduserer det effektive feltet.',
  },
  {
    question: 'To kondensatorer med kapasitans C kobles i serie. Hva blir den totale kapasitansen?',
    options: [
      'C/2',
      '2C',
      'C',
      'C²',
    ],
    explanation: 'For kondensatorer i serie: 1/C_tot = 1/C₁ + 1/C₂. Med to like kondensatorer: 1/C_tot = 2/C, så C_tot = C/2.',
  },
],


  'fysikk2-3-5': [
  {
    question: 'Hva er potensiell energi for en ladning q i et elektrisk potensial V?',
    options: [
      'Ep = qV',
      'Ep = q/V',
      'Ep = V/q',
      'Ep = q + V',
    ],
    explanation: 'Den potensielle energien til en ladning i et elektrisk felt er Ep = qV. Dette gir energien i joule når q er i coulomb og V i volt.',
  },
  {
    question: 'Et elektron akselæreres gjennom en potensialdifferanse på 1000 V. Hvor mye kinetisk energi får det?',
    options: [
      '1000 eV = 1,6 × 10⁻¹⁶ J',
      '1000 J',
      '1,6 × 10⁻¹⁹ J',
      '1 eV',
    ],
    explanation: 'Elektronet får kinetisk energi Ek = eΔV = 1,6 × 10⁻¹⁹ C × 1000 V = 1,6 × 10⁻¹⁶ J = 1000 eV.',
  },
  {
    question: 'Hva er 1 elektronvolt (eV)?',
    options: [
      'Energien et elektron får ved å akselæreres gjennom 1 V potensialforskjell',
      '1 joule',
      'Ladningen til ett elektron',
      'Hastigheten til ett elektron',
    ],
    explanation: '1 eV = 1,6 × 10⁻¹⁹ J er energien et elektron får når det akselæreres gjennom 1 volt. Det er en praktisk energienhet i atomfysikk.',
  },
  {
    question: 'Et proton og et elektron akselæreres gjennom samme spenning. Hvilken partikkel får høyest hastighet?',
    options: [
      'Elektronet, fordi det har mye mindre masse',
      'Protonet, fordi det har større masse',
      'Begge får samme hastighet',
      'Det avhenger av spenningen',
    ],
    explanation: 'Begge får samme kinetiske energi Ek = eΔV. Men Ek = ½mv², så v = √(2Ek/m). Siden elektronet har mye mindre masse, får det mye høyere hastighet.',
  },
  {
    question: 'I en CRT-skjerm (katodestrålerør), hva akselærerer elektronene?',
    options: [
      'Et elektrisk felt skapt av høy spenning',
      'Et magnetisk felt',
      'Gravitasjon',
      'Trykk fra oppvarmet katode',
    ],
    explanation: 'Elektroner fra katoden akselæreres av et sterkt elektrisk felt mot anoden. Deretter kan de avbøyes av elektriske eller magnetiske felt for å lage bilder.',
  },
],


  'fysikk2-4-1': [
  {
    question: 'Hva er enheten for magnetisk fluxtetthet (magnetisk felt)?',
    options: [
      'Tesla (T)',
      'Weber (Wb)',
      'Ampere (A)',
      'Henry (H)',
    ],
    explanation: 'Magnetisk fluktetthet B måles i tesla (T). 1 T = 1 Wb/m² = 1 N/(A·m).',
  },
  {
    question: 'Hva skaper et magnetisk felt rundt en rett strømførende leder?',
    options: [
      'Den elektriske strømmen i lederen',
      'Jordas magnetfelt',
      'Elektrisk ladning i hvile',
      'Temperaturen i lederen',
    ],
    explanation: 'Bevegelige ladninger (elektrisk strøm) skaper magnetiske felt. Feltlinjene går i sirkler rundt en rett leder.',
  },
  {
    question: 'Hvordan varierer det magnetiske feltet rundt en rett strømførende leder med avstanden r?',
    options: [
      'B = μ₀I/(2πr) - feltet er omvendt proporsjonalt med avstanden',
      'B = μ₀Ir - feltet øker med avstanden',
      'B = μ₀I/r² - feltet avtar med kvadratet av avstanden',
      'Feltet er konstant uansett avstand',
    ],
    explanation: 'Det magnetiske feltet rundt en rett leder er B = μ₀I/(2πr), der μ₀ er permeabiliteten i vakuum. Feltet avtar lineært med avstanden.',
  },
  {
    question: 'Hva er høyrehåndsregelen for strøm og magnetfelt?',
    options: [
      'Hvis tømmelen peker i strømretningen, krummer fingrene i feltets retning',
      'Hvis tømmelen peker i feltets retning, krummer fingrene i strømretningen',
      'Tommel og pekefinger står alltid vinkelrett på magnetfeltet',
      'Regelen gjelder bare for negative ladninger',
    ],
    explanation: 'Høyrehåndsregelen: Grip rundt lederen med høyre hånd slik at tømmelen peker i strømretningen (positive ladningers bevegelse). Da peker fingrene i magnetfeltets retning.',
  },
  {
    question: 'Hva karakteriserer de magnetiske feltlinjene fra en stavmagnet?',
    options: [
      'De går fra nordpolen til sydpolen utenfor magneten og danner lukkede sløyfer',
      'De går fra sydpolen til nordpolen',
      'De ender i nordpolen',
      'De er alltid rette linjer',
    ],
    explanation: 'Magnetiske feltlinjer er alltid lukkede sløyfer. Utenfor magneten går de fra nord- til sydpol, og inni magneten går de fra syd- til nordpol.',
  },
],


  'fysikk2-4-2': [
  {
    question: 'Hva er formelen for Lorentzkraften på en ladet partikkel i et magnetfelt?',
    options: [
      'F = qvB sin(θ)',
      'F = qvB cos(θ)',
      'F = qB/v',
      'F = qv/B',
    ],
    explanation: 'Lorentzkraften er F = qvB sin(θ), der θ er vinkelen mellom hastigheten v og magnetfeltet B. Kraften er maksimal når v ⊥ B.',
  },
  {
    question: 'Hvordan beveger en ladet partikkel seg i et uniformt magnetfelt når den starter med hastighet vinkelrett på feltet?',
    options: [
      'I en sirkel',
      'I en rett linje',
      'I en parabel',
      'I en spiral',
    ],
    explanation: 'Lorentzkraften virker alltid vinkelrett på hastigheten, og gir dermed en sentripetalkraft som holder partikkelen i sirkulær bevegelse.',
  },
  {
    question: 'Hva er formelen for syklotronradius (radius for en ladet partikkel i magnetfelt)?',
    options: [
      'r = mv/(qB)',
      'r = qvB/m',
      'r = qB/(mv)',
      'r = m/(qvB)',
    ],
    explanation: 'Ved å sette Lorentzkraften lik sentripetalkraften: qvB = mv²/r, får vi r = mv/(qB). Tyngre og raskere partikler har større radius.',
  },
  {
    question: 'Et elektron og et proton med samme hastighet går inn i et magnetfelt. Hvilken partikkel får størst syklotronradius?',
    options: [
      'Protonet, fordi det har større masse',
      'Elektronet, fordi det har mindre masse',
      'Begge får samme radius',
      'Det avhenger av magnetfeltets styrke',
    ],
    explanation: 'r = mv/(qB). Begge har samme ladning |q|, men protonet har ca. 1836 ganger større masse, og får dermed mye større radius.',
  },
  {
    question: 'Hva er Hall-effekten?',
    options: [
      'En spenning som oppstår tvers over en strømførende leder i et magnetfelt',
      'Kraften mellom to parallelle ledere',
      'Induksjon av strøm i en spole',
      'Magnetisering av jernkjerner',
    ],
    explanation: 'Hall-effekten oppstår når ladningsbærere i en leder avbøyes av et magnetfelt, og skaper en målbar spenning vinkelrett på både strøm og felt.',
  },
],


  'fysikk2-4-3': [
  {
    question: 'Hva er formelen for kraften på en strømførende leder i et magnetfelt?',
    options: [
      'F = BIL sin(θ)',
      'F = BIL cos(θ)',
      'F = BI/L',
      'F = BL/I',
    ],
    explanation: 'Kraften på en strømførende leder er F = BIL sin(θ), der B er magnetfeltet, I er strømmen, L er lederens lengde, og θ er vinkelen mellom leder og felt.',
  },
  {
    question: 'To parallelle ledere fører strøm i samme retning. Hva skjer?',
    options: [
      'De tiltrekker hverandre',
      'De frastøter hverandre',
      'Det er ingen kraft mellom dem',
      'De roterer rundt hverandre',
    ],
    explanation: 'Parallelle strømmer i samme retning tiltrekker hverandre. Hver leder ligger i magnetfeltet fra den andre, og Lorentzkraften trekker dem sammen.',
  },
  {
    question: 'Hvordan er enheten ampere definert ut fra kraft mellom ledere?',
    options: [
      'Strømmen som gir 2×10⁻⁷ N/m kraft mellom to uendelig lange parallelle ledere 1 m fra hverandre',
      'Strømmen som gir 1 N kraft mellom to ledere',
      'Ladningen som passerer et punkt per sekund',
      'Strømmen gjennom 1 ohm ved 1 volt spenning',
    ],
    explanation: 'Den klassiske definisjonen av ampere er basert på kraften mellom parallelle ledere: 1 A gir F/L = 2×10⁻⁷ N/m ved 1 m avstand.',
  },
  {
    question: 'Hva er prinsippet bak en elektromotor?',
    options: [
      'Magnetisk kraft på strømførende spole gir rotasjon',
      'Elektrisk felt akselærerer ladninger',
      'Gravitasjonskraft på magneter',
      'Indusert strøm fra bevegelse',
    ],
    explanation: 'I en elektromotor går strøm gjennom en spole i et magnetfelt. Kreftene på spolens sider skaper et dreiemoment som får rotoren til å rotere.',
  },
  {
    question: 'Hva bestemmer dreieretningen til en elektromotor?',
    options: [
      'Strømretningen i spolen og magnetfeltets retning',
      'Bare magnetfeltets styrke',
      'Bare strømstyrken',
      'Spolens temperatur',
    ],
    explanation: 'Dreieretningen bestemmes av høyrehåndsregelen (F = IL × B). Ved å snu strømmen eller magnetfeltet, snur man rotasjonsretningen.',
  },
],


  'fysikk2-4-4': [
  {
    question: 'Hva sier Biot-Savarts lov kvalitativt?',
    options: [
      'Elektrisk strøm skaper magnetfelt; bidraget avtar med kvadratet av avstanden',
      'Magnetfelt skaper elektrisk strøm',
      'Magnetfeltet er uavhengig av strømmen',
      'Bare permanentmagneter kan skape magnetfelt',
    ],
    explanation: 'Biot-Savarts lov beskriver hvordan hvert lite strømelement bidrar til magnetfeltet. Bidraget er proporsjonalt med strømmen og avtar med r².',
  },
  {
    question: 'Hva er formelen for magnetfeltet i sentrum av en sirkulær strømsløyfe med radius R?',
    options: [
      'B = μ₀I/(2R)',
      'B = μ₀I/(2πR)',
      'B = μ₀IR/2',
      'B = μ₀I/R²',
    ],
    explanation: 'Magnetfeltet i sentrum av en sirkulær sløyfe er B = μ₀I/(2R). Feltet peker vinkelrett på sløyfens plan.',
  },
  {
    question: 'Hva er formelen for magnetfeltet inne i en lang solenoid?',
    options: [
      'B = μ₀nI, der n er antall viklinger per meter',
      'B = μ₀NI, der N er totalt antall viklinger',
      'B = μ₀I/(2πr)',
      'B = μ₀I/L',
    ],
    explanation: 'Inne i en lang solenoid er feltet tilnærmet uniformt: B = μ₀nI, der n = N/L er antall viklinger per lengdeenhet.',
  },
  {
    question: 'Hvorfor brukes jernkjerner i elektromagneter?',
    options: [
      'Jern forsterker magnetfeltet mange ganger fordi det er ferromagnetisk',
      'Jern leder strøm bedre enn kobber',
      'Jern er lettere enn andre metaller',
      'Jern absorberer magnetfeltet',
    ],
    explanation: 'Jern er ferromagnetisk og forsterker magnetfeltet med en faktor μr (relativ permeabilitet), som kan være flere tusen.',
  },
  {
    question: 'Hva er en elektromagnet?',
    options: [
      'En spole med strøm som skaper et kontrollerbart magnetfelt',
      'En permanent magnet',
      'Et elektrisk felt i en kondensator',
      'En leder uten strøm',
    ],
    explanation: 'En elektromagnet er en spole (ofte med jernkjerne) der magnetfeltet kan slås av og på ved å kontrollære strømmen.',
  },
],


  'fysikk2-4-5': [
  {
    question: 'Hva er magnetisk fluks?',
    options: [
      'Produktet av magnetfelt og areal vinkelrett på feltet: Φ = BA cos(θ)',
      'Magnetfeltets styrke',
      'Kraften på en ladning i magnetfelt',
      'Energien lagret i et magnetfelt',
    ],
    explanation: 'Magnetisk fluks Φ = BA cos(θ) er et mål på "mengden magnetfelt" som går gjennom en flate. Enheten er weber (Wb).',
  },
  {
    question: 'Hva er enheten for magnetisk fluks?',
    options: [
      'Weber (Wb)',
      'Tesla (T)',
      'Henry (H)',
      'Volt (V)',
    ],
    explanation: 'Magnetisk fluks måles i weber (Wb). 1 Wb = 1 T·m² = 1 V·s.',
  },
  {
    question: 'Når er magnetisk fluks gjennom en flat overflate maksimal?',
    options: [
      'Når overflaten står vinkelrett på magnetfeltet',
      'Når overflaten er parallell med magnetfeltet',
      'Når overflaten er i 45° vinkel med feltet',
      'Fluksen er alltid den samme uansett vinkel',
    ],
    explanation: 'Φ = BA cos(θ), der θ er vinkelen mellom B og normalvektoren til flaten. Når B ⊥ flate (θ = 0°), er cos(θ) = 1 og fluksen maksimal.',
  },
  {
    question: 'Hva sier Gauss\' lov for magnetisme?',
    options: [
      'Nettofluksen gjennom enhver lukket flate er null (magnetiske monopoler finnes ikke)',
      'Magnetisk fluks er alltid positiv',
      'Magnetiske feltlinjer starter og slutter i magnetiske poler',
      'Fluksen gjennom en flate er lik ladningen inni',
    ],
    explanation: 'Gauss\' lov for magnetisme sier at magnetiske feltlinjer alltid er lukkede sløyfer. Det finnes ingen magnetiske "kilder" eller "sluk" (monopoler).',
  },
  {
    question: 'Hva skjer med den magnetiske fluksen gjennom en spole hvis magnetfeltet dobles og arealet halveres?',
    options: [
      'Fluksen forblir uendret',
      'Fluksen dobles',
      'Fluksen halveres',
      'Fluksen firedobles',
    ],
    explanation: 'Φ = BA. Hvis B → 2B og A → A/2, blir Φ_ny = 2B · (A/2) = BA = Φ. Fluksen er uendret.',
  },
],


  'fysikk2-5-1': [
  {
    question: 'Hva sier Faradays induksjonslov?',
    options: [
      'En endring i magnetisk fluks induserer en EMF (spenning) i en lukket krets',
      'Et magnetfelt skaper alltid en elektrisk strøm',
      'Strøm skaper alltid magnetfelt',
      'Elektrisk felt og magnetfelt er uavhengige',
    ],
    explanation: 'Faradays lov: EMF = -dΦ/dt. En tidsvarierende magnetisk fluks gjennom en krets induserer en elektromotorisk kraft (spenning).',
  },
  {
    question: 'Hva sier Lenz\' lov?',
    options: [
      'Den induserte strømmen skaper et magnetfelt som motvirker fluksendringen',
      'Den induserte strømmen forsterker alltid fluksendringen',
      'Indusert strøm har alltid samme retning som det ytre feltet',
      'Lenz\' lov gjelder bare for permanentmagneter',
    ],
    explanation: 'Lenz\' lov forklærer minustegnet i Faradays lov: Naturen motsetter seg endringer, så den induserte strømmen motvirker den endringen som skapte den.',
  },
  {
    question: 'En spole med 100 viklinger opplever en fluksendring på 0,1 Wb i løpet av 0,5 s. Hva er den induserte EMF?',
    options: [
      '20 V',
      '10 V',
      '0,5 V',
      '50 V',
    ],
    explanation: 'EMF = -N·(ΔΦ/Δt) = -100·(0,1/0,5) = -100·0,2 = -20 V. Størrelsen er 20 V.',
  },
  {
    question: 'Hva skjer når en leder beveger seg gjennom et magnetfelt?',
    options: [
      'Det induseres en EMF i lederen (bevegelses-EMF)',
      'Lederen blir magnetisert',
      'Magnetfeltet forsvinner',
      'Det skjer ingenting',
    ],
    explanation: 'Når en leder beveger seg gjennom et magnetfelt, separeres ladningene av Lorentzkraften, og det oppstår en indusert EMF = BLv.',
  },
  {
    question: 'Hva er virvelstrømmer?',
    options: [
      'Induserte strømmer i massive ledere, som skaper varme og bremsende krefter',
      'Strømmer i spiralform i en spole',
      'Strømmer som forsterker magnetfeltet',
      'Strømmer i vakuum',
    ],
    explanation: 'Virvelstrømmer induseres i massive ledere ved fluksendringer. De kan brukes til indusjonsoppvarming og elektromagnetisk bremsing, men gir også energitap.',
  },
],


  'fysikk2-5-2': [
  {
    question: 'Hva er prinsippet bak en vekselstrømgenerator?',
    options: [
      'En roterende spole i et magnetfelt gir en varierende fluks og dermed indusert vekselspenning',
      'Et konstant magnetfelt gir konstant spenning',
      'Elektrisitet skapes av permanentmagneter alene',
      'Mekanisk energi omdannes til varme',
    ],
    explanation: 'I en generator roterer en spole i et magnetfelt. Fluksen varierer sinusformet med vinkelen, og den induserte EMF blir også sinusformet (AC).',
  },
  {
    question: 'Hvis EMF = E₀ sin(ωt), hva er E₀ for en roterende spole?',
    options: [
      'E₀ = NABω (maks EMF avhenger av viklinger, areal, felt og vinkelfart)',
      'E₀ = NAB (uavhengig av rotasjonshastighet)',
      'E₀ = ωt',
      'E₀ = NΦ',
    ],
    explanation: 'Den maksimale (amplitude) EMF er E₀ = NABω. Raskere rotasjon (høyere ω) gir høyere spenning.',
  },
  {
    question: 'Hva er effektivverdien (RMS) av en sinusformet vekselspenning med amplitude E₀?',
    options: [
      'E_eff = E₀/√2 ≈ 0,707·E₀',
      'E_eff = E₀',
      'E_eff = E₀/2',
      'E_eff = 2E₀',
    ],
    explanation: 'Effektivverdien (RMS) av sinusspenning er E_eff = E₀/√2. Dette er verdien som gir samme effekt som likestrøm.',
  },
  {
    question: 'Hva er frekvensen på vekselstrømmen fra strømnettet i Norge?',
    options: [
      '50 Hz',
      '60 Hz',
      '100 Hz',
      '25 Hz',
    ],
    explanation: 'I Norge og Europa er nettfrekvensen 50 Hz, mens det i USA og noen andre land brukes 60 Hz.',
  },
  {
    question: 'Hvordan skiller en likestrømgenerator seg fra en vekselstrømgenerator?',
    options: [
      'Den har en kommutator som snur strømretningen slik at utgangen blir likestrøm',
      'Den bruker et annet materiale i spolen',
      'Den roterer saktere',
      'Den trenger ikke magnetfelt',
    ],
    explanation: 'En likestrømgenerator har en kommutator (strømvender) som mekanisk snur koblingene hver halvperiode, slik at strømmen alltid går i samme retning.',
  },
],

  'fys1-1-1': [
  {
    question: 'Hva kjennetegner en god hypotese i naturvitenskap?',
    options: [
      'Den er testbar og kan motbevises (falsifiseres) hvis den er feil',
      'Den er bevist sann en gang for alle',
      'Den er basert på flertallets mening',
      'Den kan ikke testes eksperimentelt',
    ],
    explanation: 'En hypotese er en testbar og falsifiserbar forklaring på et naturlig fenomen. Den må kunne testes eksperimentelt og motbevises hvis den er feil.',
  },
  {
    question: 'Hva er forskjellen mellom en naturlov og en vitenskapelig teori?',
    options: [
      'En lov beskriver matematisk HVA som skjer, en teori forklarer HVORFOR',
      'En teori er en gjetning, en lov er bevist',
      'En lov gjelder bare i laboratoriet, en teori gjelder overalt',
      'Det er ingen forskjell, ordene betyr det samme',
    ],
    explanation: 'En naturlov (som $F = ma$) er en matematisk beskrivelse av et mønster i naturen, mens en teori er en omfattende forklaring på hvorfor fenomenene skjer. I vitenskap er en teori den høyeste formen for sikker kunnskap, ikke en gjetning.',
  },
  {
    question: 'I et eksperiment undersøker du hvordan fallhøyden påvirker falltiden. Hva er den uavhengige variabelen?',
    options: [
      'Fallhøyden',
      'Falltiden',
      'Luftmotstanden',
      'Tyngdeakselerasjonen',
    ],
    explanation: 'Den uavhengige variabelen er den forskeren bevisst endrer (fallhøyden). Falltiden er den avhengige variabelen som måles som respons.',
  },
  {
    question: 'En lengde måles til 20,0 cm med usikkerhet ±0,5 cm. Hva er den relative usikkerheten?',
    options: [
      '2,5 %',
      '0,5 %',
      '5 %',
      '25 %',
    ],
    explanation: 'Relativ usikkerhet = absolutt usikkerhet delt på måleverdien: 0,5/20,0 = 0,025 = 2,5 %.',
  },
  {
    question: 'Hvor mange signifikante siffer har tallet 0,00340?',
    options: [
      '3',
      '5',
      '6',
      '2',
    ],
    explanation: 'Ledende nuller teller ikke som signifikante siffer, men den avsluttende nullen etter 34 gjør det. Tallet har derfor 3 signifikante siffer: 3, 4 og 0.',
  },
],

  'fys1-1-2': [
  {
    question: 'Hva er en fysisk modell?',
    options: [
      'En forenklet beskrivelse av virkeligheten som fanger essensen av et fenomen',
      'En eksakt kopi av virkeligheten uten forenklinger',
      'En fysisk gjenstand bygget i tre eller plast',
      'En hypotese som ennå ikke er testet',
    ],
    explanation: 'En fysisk modell er en forenklet matematisk eller konseptuell beskrivelse som fanger essensen av et fenomen, men ignorerer irrelevante detaljer. Den skal være testbar, prediktiv og ha kjente gyldighetsgrenser.',
  },
  {
    question: 'Hva betyr idealiseringen "punktmasse"?',
    options: [
      'Vi ser bort fra objektets størrelse og form og samler all masse i ett punkt',
      'Objektet har ingen masse',
      'Objektet er uendelig stort',
      'Massen er jevnt fordelt over hele objektet',
    ],
    explanation: 'En punktmasse er en idealisering der vi ignorerer objektets utstrekning og form, og behandler all masse som samlet i ett punkt. Dette forenkler beregninger når formen er irrelevant.',
  },
  {
    question: 'Når er modellen for fritt fall uten luftmotstand en god tilnærming?',
    options: [
      'For kompakte, tunge objekter ved lave farter over korte fall',
      'For lette objekter som fjær og papirark',
      'For fallskjermhoppere i lange fall',
      'Modellen er alltid like god',
    ],
    explanation: 'Modellen gjelder når luftmotstanden er neglisjerbar sammenlignet med tyngdekraften, altså for kompakte og tunge objekter ved lave farter. For en fjær eller en fallskjermhopper i høy fart bryter modellen sammen.',
  },
  {
    question: 'Hva bør vi gjøre når en modell ikke lenger stemmer med eksperimentene?',
    options: [
      'Bruke en mer avansert modell som gjelder i det nye området',
      'Forkaste alle målinger som ikke passer modellen',
      'Konkludere med at naturen oppfører seg feil',
      'Slutte å bruke modeller i fysikk',
    ],
    explanation: 'Når en modell bryter sammen utenfor gyldighetsområdet sitt, erstatter vi den med en mer avansert modell som dekker det nye området. Den enkle modellen kan fortsatt brukes der den gjelder.',
  },
  {
    question: 'Hva innebærer idealiseringen "masseløs snor"?',
    options: [
      'Snorkraften (spenningen) er like stor i hele snoren',
      'Snoren kan ikke overføre krefter',
      'Snoren strekker seg uendelig mye',
      'Snoren har uendelig stor masse',
    ],
    explanation: 'I en masseløs snor er spenningen den samme overalt i snoren. Dette forenkler kraftanalyse av systemer med tau og trinser.',
  },
],

  'fys1-1-3': [
  {
    question: 'Hva er en numerisk metode?',
    options: [
      'En algoritme som finner en tilnærmet løsning ved å dele problemet i mange små steg',
      'En metode som alltid gir eksakte svar',
      'En metode for å måle med tallverdier i laboratoriet',
      'En grafisk metode for å lese av verdier fra diagram',
    ],
    explanation: 'En numerisk metode beregner en tilnærmet løsning på et matematisk problem ved å dele det opp i mange små steg. Den brukes når analytiske løsninger ikke finnes eller er for kompliserte.',
  },
  {
    question: 'Hvordan oppdateres hastigheten i ett steg av Eulers metode?',
    options: [
      '$v_{ny} = v + a \\cdot \\Delta t$',
      '$v_{ny} = v \\cdot a \\cdot \\Delta t$',
      '$v_{ny} = a / \\Delta t$',
      '$v_{ny} = v + \\frac{1}{2} a \\Delta t^2$',
    ],
    explanation: 'I Eulers metode antar vi at akselerasjonen er konstant i hvert lille tidssteg, slik at den nye hastigheten blir $v_{ny} = v + a \\cdot \\Delta t$.',
  },
  {
    question: 'Et objekt starter i ro med akselerasjon 9,8 m/s². Hva blir hastigheten etter ett Euler-steg med Δt = 0,1 s?',
    options: [
      '0,98 m/s',
      '9,8 m/s',
      '0,098 m/s',
      '1,96 m/s',
    ],
    explanation: '$v = v_0 + a \\cdot \\Delta t = 0 + 9{,}8 \\cdot 0{,}1 = 0{,}98$ m/s.',
  },
  {
    question: 'Hvordan kan vi gjøre Eulers metode mer nøyaktig?',
    options: [
      'Bruke mindre tidssteg Δt',
      'Bruke større tidssteg Δt',
      'Fjerne startbetingelsene',
      'Kjøre programmet flere ganger med samme Δt',
    ],
    explanation: 'Feilen i Eulers metode minker når tidssteget Δt blir mindre, fordi antakelsen om konstant akselerasjon i hvert steg da blir bedre. Prisen er flere beregninger.',
  },
  {
    question: 'Hvorfor trenger vi numeriske metoder for å beregne fall med luftmotstand?',
    options: [
      'Fordi akselerasjonen avhenger av farten, noe som gjør likningen vanskelig å løse analytisk',
      'Fordi tyngdeakselerasjonen endrer seg under fallet',
      'Fordi datamaskiner ikke kan regne med konstant akselerasjon',
      'Fordi luftmotstand gjør at energien ikke er bevart',
    ],
    explanation: 'Med luftmotstand avhenger akselerasjonen av farten (f.eks. $a = g - \\frac{k}{m}v^2$). Slike differensiallikninger er vanskelige eller umulige å løse analytisk, og da bruker vi Eulers metode.',
  },
],

  'fys1-2-1': [
  {
    question: 'Hva er forskjellen mellom forflytning og tilbakelagt strekning?',
    options: [
      'Forflytning er en vektor fra start- til sluttposisjon, strekning er hele veilengden',
      'Forflytning er alltid lengre enn strekningen',
      'Strekning har retning, forflytning har det ikke',
      'De er alltid like store',
    ],
    explanation: 'Forflytning $\\Delta \\vec{r} = \\vec{r}_2 - \\vec{r}_1$ er en vektor som peker fra startposisjon til sluttposisjon, mens strekning er den totale veilengden (en skalar). Strekningen er alltid minst like stor som forflytningens beløp.',
  },
  {
    question: 'Hvordan er momentan hastighet definert?',
    options: [
      'Som den deriverte av posisjonen med hensyn på tid: $\\vec{v} = \\frac{d\\vec{r}}{dt}$',
      'Som posisjonen delt på total tid',
      'Som den deriverte av akselerasjonen med hensyn på tid',
      'Som arealet under posisjonsgrafen',
    ],
    explanation: 'Momentan hastighet er den deriverte av posisjon med hensyn på tid, $\\vec{v} = \\frac{d\\vec{r}}{dt}$, og beskriver hvor raskt og i hvilken retning objektet beveger seg akkurat nå.',
  },
  {
    question: 'En bil øker farten fra 10 m/s til 25 m/s på 5,0 s. Hva er gjennomsnittsakselerasjonen?',
    options: [
      '3,0 m/s²',
      '5,0 m/s²',
      '7,0 m/s²',
      '15 m/s²',
    ],
    explanation: '$a = \\frac{\\Delta v}{\\Delta t} = \\frac{25 - 10}{5{,}0} = \\frac{15}{5{,}0} = 3{,}0$ m/s².',
  },
  {
    question: 'En løper løper én hel runde på en 400 m bane på 50 s og ender der hun startet. Hva er beløpet av gjennomsnittshastigheten (vektoren)?',
    options: [
      '0 m/s',
      '8 m/s',
      '4 m/s',
      '400 m/s',
    ],
    explanation: 'Gjennomsnittshastigheten er forflytning delt på tid. Siden løperen ender der hun startet, er forflytningen null, og gjennomsnittshastigheten blir 0 m/s. Gjennomsnittsfarten er derimot 400/50 = 8 m/s.',
  },
  {
    question: 'Kan et objekt ha fart lik null og samtidig en akselerasjon forskjellig fra null?',
    options: [
      'Ja, for eksempel en ball i toppunktet av et vertikalt kast',
      'Nei, akselerasjon krever alltid bevegelse',
      'Bare hvis massen er null',
      'Bare i vakuum',
    ],
    explanation: 'I toppunktet av et vertikalt kast er farten et øyeblikk null, men tyngdeakselerasjonen virker hele tiden ($a = -g$). Akselerasjon beskriver endring i hastighet, ikke hastigheten selv.',
  },
],

  'fys1-2-2': [
  {
    question: 'Hva er bevegelseslikningen for et objekt med konstant fart $v$ og startposisjon $s_0$?',
    options: [
      '$s = s_0 + vt$',
      '$s = s_0 + \\frac{1}{2}vt^2$',
      '$s = vt^2$',
      '$s = s_0 - vt$',
    ],
    explanation: 'Ved konstant fart endrer posisjonen seg lineært med tiden: $s = s_0 + vt$.',
  },
  {
    question: 'Et objekt starter i posisjon 5,0 m og beveger seg med konstant fart 3,0 m/s. Hvor er det etter 4,0 s?',
    options: [
      '17 m',
      '12 m',
      '20 m',
      '8,0 m',
    ],
    explanation: '$s = s_0 + vt = 5{,}0 + 3{,}0 \\cdot 4{,}0 = 5{,}0 + 12 = 17$ m.',
  },
  {
    question: 'Hvordan ser grafen ut i et s-t-diagram for bevegelse med konstant fart?',
    options: [
      'En rett linje der stigningstallet er lik farten',
      'En parabel som krummer oppover',
      'En horisontal linje uansett fart',
      'En rett linje der stigningstallet er lik akselerasjonen',
    ],
    explanation: 'Ved konstant fart er posisjonen en lineær funksjon av tiden, så s-t-grafen er en rett linje. Stigningstallet til linjen er lik farten.',
  },
  {
    question: 'En bil kjører med konstant fart 12 m/s i 10 s. Hvordan finner vi strekningen fra v-t-diagrammet, og hvor langt kjører bilen?',
    options: [
      'Arealet under grafen; strekningen er 120 m',
      'Stigningstallet til grafen; strekningen er 1,2 m',
      'Arealet under grafen; strekningen er 22 m',
      'Skjæringspunktet med v-aksen; strekningen er 12 m',
    ],
    explanation: 'I et v-t-diagram er strekningen lik arealet under grafen. Her er arealet et rektangel: $s = v \\cdot t = 12 \\cdot 10 = 120$ m.',
  },
  {
    question: 'To biler A og B vises i samme s-t-diagram. Grafen til A er brattere enn grafen til B. Hva betyr det?',
    options: [
      'A har høyere fart enn B',
      'A har større akselerasjon enn B',
      'A startet lenger fremme enn B',
      'A kjører bakover',
    ],
    explanation: 'Stigningstallet i et s-t-diagram er farten. En brattere linje betyr derfor høyere fart.',
  },
],

  'fys1-2-3': [
  {
    question: 'En bil har startfart 2,0 m/s og akselererer med 3,0 m/s² i 4,0 s. Hva blir farten?',
    options: [
      '14 m/s',
      '12 m/s',
      '20 m/s',
      '9,0 m/s',
    ],
    explanation: '$v = v_0 + at = 2{,}0 + 3{,}0 \\cdot 4{,}0 = 14$ m/s.',
  },
  {
    question: 'Et objekt starter i ro og akselererer med 2,0 m/s² i 5,0 s. Hvor langt har det beveget seg?',
    options: [
      '25 m',
      '50 m',
      '10 m',
      '12,5 m',
    ],
    explanation: '$s = v_0 t + \\frac{1}{2}at^2 = 0 + \\frac{1}{2} \\cdot 2{,}0 \\cdot 5{,}0^2 = \\frac{1}{2} \\cdot 2{,}0 \\cdot 25 = 25$ m.',
  },
  {
    question: 'En bil bremser fra 20 m/s til stillstand over en strekning på 50 m. Hva er størrelsen på akselerasjonen (antatt konstant)?',
    options: [
      '4,0 m/s²',
      '2,0 m/s²',
      '8,0 m/s²',
      '0,40 m/s²',
    ],
    explanation: 'Vi bruker $v^2 = v_0^2 + 2as$: $0 = 20^2 + 2a \\cdot 50$, som gir $a = -\\frac{400}{100} = -4{,}0$ m/s². Størrelsen er 4,0 m/s².',
  },
  {
    question: 'Hvilken bevegelseslikning bruker vi når vi verken har eller trenger tiden $t$?',
    options: [
      '$v^2 = v_0^2 + 2as$',
      '$v = v_0 + at$',
      '$s = s_0 + v_0 t + \\frac{1}{2}at^2$',
      '$s = s_0 + vt$',
    ],
    explanation: 'Likningen $v^2 = v_0^2 + 2as$ kobler fart, akselerasjon og strekning uten å involvere tiden.',
  },
  {
    question: 'To kuler med ulik masse slippes samtidig fra samme høyde uten luftmotstand. Hva skjer?',
    options: [
      'De treffer bakken samtidig, fordi tyngdeakselerasjonen er den samme for alle objekter',
      'Den tyngste treffer først, fordi tyngdekraften på den er størst',
      'Den letteste treffer først, fordi den har mindre treghet',
      'Det avhenger av kulenes form',
    ],
    explanation: 'I fritt fall (uten luftmotstand) faller alle objekter med samme tyngdeakselerasjon $g \\approx 9{,}8$ m/s², uavhengig av massen. Derfor lander de samtidig.',
  },
],

  'fys1-2-4': [
  {
    question: 'En ball kastes med fart 20 m/s i vinkel 30° over horisontalen. Hva er den vertikale komponenten av starthastigheten?',
    options: [
      '10 m/s',
      '17,3 m/s',
      '20 m/s',
      '5,0 m/s',
    ],
    explanation: '$v_y = v \\sin\\theta = 20 \\cdot \\sin 30° = 20 \\cdot 0{,}5 = 10$ m/s. Den horisontale komponenten er $v_x = 20 \\cos 30° \\approx 17{,}3$ m/s.',
  },
  {
    question: 'Hvordan beveger et prosjektil seg horisontalt i et skrått kast uten luftmotstand?',
    options: [
      'Med konstant fart, fordi ingen krefter virker horisontalt',
      'Med konstant akselerasjon g',
      'Det bremser gradvis opp',
      'Det akselererer gradvis',
    ],
    explanation: 'Uten luftmotstand virker bare tyngdekraften, som er vertikal. Horisontalt er det derfor ingen akselerasjon, og $v_x$ er konstant under hele kastet.',
  },
  {
    question: 'Hva gjelder for hastigheten i toppunktet av banen i et skrått kast?',
    options: [
      '$v_y = 0$, men $v_x$ er uendret',
      'Både $v_x$ og $v_y$ er null',
      '$v_x = 0$, men $v_y$ er uendret',
      'Hastigheten er størst i toppunktet',
    ],
    explanation: 'I toppunktet er den vertikale hastighetskomponenten null ($v_y = 0$), mens den horisontale komponenten $v_x$ er den samme hele tiden. Total fart er derfor minst i toppunktet, men ikke null.',
  },
  {
    question: 'En hastighetsvektor har komponentene $v_x = 3{,}0$ m/s og $v_y = 4{,}0$ m/s. Hva er beløpet av vektoren?',
    options: [
      '5,0 m/s',
      '7,0 m/s',
      '12 m/s',
      '3,5 m/s',
    ],
    explanation: '$v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{3{,}0^2 + 4{,}0^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5{,}0$ m/s.',
  },
  {
    question: 'Ved hvilken utkastvinkel får et prosjektil størst rekkevidde på flat mark (uten luftmotstand)?',
    options: [
      '45°',
      '30°',
      '60°',
      '90°',
    ],
    explanation: 'Rekkevidden er $R = \\frac{v_0^2 \\sin(2\\theta)}{g}$, som er størst når $\\sin(2\\theta) = 1$, altså når $2\\theta = 90°$ og $\\theta = 45°$.',
  },
],

  'fys1-3-1': [
  {
    question: 'Hva sier Newtons 1. lov om et objekt der summen av kreftene er null?',
    options: [
      'Det fortsetter i ro eller med konstant hastighet langs en rett linje',
      'Det bremser gradvis ned til det stopper',
      'Det akselererer i kraftens retning',
      'Det begynner å bevege seg i sirkel',
    ],
    explanation: 'Newtons 1. lov (treghetsloven): Når den resulterende kraften er null, beholder objektet sin bevegelsestilstand — det forblir i ro eller fortsetter med konstant hastighet.',
  },
  {
    question: 'En kraft på en kasse med masse 5,0 kg gir akselerasjonen 2,0 m/s². Hvor stor er den resulterende kraften?',
    options: [
      '10 N',
      '2,5 N',
      '7,0 N',
      '25 N',
    ],
    explanation: 'Newtons 2. lov: $F = ma = 5{,}0 \\cdot 2{,}0 = 10$ N.',
  },
  {
    question: 'Hvorfor opphever ikke kraftparene i Newtons 3. lov hverandre?',
    options: [
      'Fordi de to kreftene virker på forskjellige legemer',
      'Fordi den ene kraften alltid er litt større enn den andre',
      'Fordi de virker i samme retning',
      'Fordi den ene kraften kommer litt senere i tid',
    ],
    explanation: 'Aksjons- og reaksjonskraften er like store og motsatt rettet, men de virker på hvert sitt legeme. Krefter kan bare oppheve hverandre når de virker på samme legeme.',
  },
  {
    question: 'En astronaut reiser fra Jorden til Månen. Hva skjer med massen og vekten hennes?',
    options: [
      'Massen er uendret, vekten blir mindre',
      'Både masse og vekt er uendret',
      'Massen blir mindre, vekten er uendret',
      'Både masse og vekt blir mindre',
    ],
    explanation: 'Massen er et mål på mengden stoff og treghet, og er den samme overalt. Vekten ($G = mg$) avhenger av tyngdeakselerasjonen, som er omtrent 1/6 så stor på Månen.',
  },
  {
    question: 'En resulterende kraft på 24 N virker på et objekt med masse 8,0 kg. Hva blir akselerasjonen?',
    options: [
      '3,0 m/s²',
      '0,33 m/s²',
      '192 m/s²',
      '16 m/s²',
    ],
    explanation: '$a = \\frac{F}{m} = \\frac{24}{8{,}0} = 3{,}0$ m/s².',
  },
],

  'fys1-3-2': [
  {
    question: 'Hvor stor er tyngdekraften på en sekk med masse 10 kg? (g = 9,8 m/s²)',
    options: [
      '98 N',
      '10 N',
      '9,8 N',
      '980 N',
    ],
    explanation: '$G = mg = 10 \\cdot 9{,}8 = 98$ N, rettet nedover mot Jordens sentrum.',
  },
  {
    question: 'Er normalkraften alltid like stor som tyngdekraften?',
    options: [
      'Nei, den avhenger av situasjonen — på et skråplan er den for eksempel mindre enn mg',
      'Ja, normalkraften er alltid lik mg',
      'Nei, normalkraften er alltid større enn tyngdekraften',
      'Ja, det følger av Newtons 3. lov',
    ],
    explanation: 'Normalkraften er kontaktkraften vinkelrett på overflaten, og størrelsen avhenger av situasjonen. På et skråplan er $N = mg\\cos\\theta$, og i en heis som akselererer endres N. Den er ikke reaksjonskraften til tyngdekraften.',
  },
  {
    question: 'Hva er sammenhengen mellom statisk og kinetisk friksjonskoeffisient for samme flater?',
    options: [
      '$\\mu_k < \\mu_s$ — det krever mer å sette i gang bevegelsen enn å holde den i gang',
      '$\\mu_k > \\mu_s$ — det krever mer å holde bevegelsen i gang',
      '$\\mu_k = \\mu_s$ alltid',
      'De kan ikke sammenlignes',
    ],
    explanation: 'Den kinetiske friksjonskoeffisienten er alltid mindre enn den statiske: $\\mu_k < \\mu_s$. Derfor er det tyngre å sette en kasse i bevegelse enn å holde den glidende.',
  },
  {
    question: 'En kasse glir på et gulv med normalkraft 200 N og kinetisk friksjonskoeffisient 0,30. Hvor stor er friksjonskraften?',
    options: [
      '60 N',
      '600 N',
      '0,67 N',
      '200 N',
    ],
    explanation: '$f_k = \\mu_k N = 0{,}30 \\cdot 200 = 60$ N, rettet mot bevegelsesretningen.',
  },
  {
    question: 'Hva viser et frilegemediagram (FBD)?',
    options: [
      'Alle kreftene som virker PÅ ett bestemt objekt',
      'Alle kreftene objektet utøver på omgivelsene',
      'Bare tyngdekraften på objektet',
      'Banen objektet følger gjennom rommet',
    ],
    explanation: 'Et frilegemediagram viser objektet isolert med alle krefter som virker på det (tyngdekraft, normalkraft, friksjon, snorkraft osv.). Krefter objektet utøver på andre, tas ikke med.',
  },
],

  'fys1-3-3': [
  {
    question: 'Hva kjennetegner terminalfart ved fall med luftmotstand?',
    options: [
      'Luftmotstanden er like stor som tyngdekraften, og farten er konstant',
      'Tyngdekraften slutter å virke',
      'Akselerasjonen er lik g',
      'Farten øker lineært med tiden',
    ],
    explanation: 'Ved terminalfart har luftmotstanden vokst til den balanserer tyngdekraften. Da er den resulterende kraften null, akselerasjonen null, og objektet faller med konstant fart.',
  },
  {
    question: 'En kasse glir ned et skråplan med konstant fart. Hva vet vi da om friksjonskraften?',
    options: [
      'Den er like stor som komponenten av tyngdekraften langs planet: $f = mg\\sin\\theta$',
      'Den er null',
      'Den er lik hele tyngdekraften $mg$',
      'Den er lik normalkraften',
    ],
    explanation: 'Konstant fart betyr at summen av kreftene er null. Langs skråplanet må friksjonskraften da balansere tyngdekraftkomponenten: $f = mg\\sin\\theta$.',
  },
  {
    question: 'I den kvadratiske modellen for luftmotstand, hvordan avhenger luftmotstanden av farten?',
    options: [
      'Den er proporsjonal med farten i andre potens: $F \\propto v^2$',
      'Den er proporsjonal med farten: $F \\propto v$',
      'Den er uavhengig av farten',
      'Den er proporsjonal med kvadratroten av farten',
    ],
    explanation: 'I den kvadratiske modellen er $F = \\frac{1}{2}\\rho C_d A v^2$. Dobler du farten, firedobles luftmotstanden.',
  },
  {
    question: 'En fallskjermhopper med masse 80 kg faller med terminalfart. Hvor stor er luftmotstanden? (g = 9,8 m/s²)',
    options: [
      '784 N',
      '80 N',
      '0 N',
      '392 N',
    ],
    explanation: 'Ved terminalfart balanserer luftmotstanden tyngdekraften: $F_L = mg = 80 \\cdot 9{,}8 = 784$ N.',
  },
  {
    question: 'Hvorfor brukes numeriske metoder (som Eulers metode) for å beregne fall med luftmotstand?',
    options: [
      'Fordi akselerasjonen endrer seg med farten, slik at likningene for konstant akselerasjon ikke gjelder',
      'Fordi tyngdekraften varierer tilfeldig',
      'Fordi bevegelsen er todimensjonal',
      'Fordi luftmotstanden er konstant under hele fallet',
    ],
    explanation: 'Luftmotstanden, og dermed akselerasjonen, avhenger av farten og endrer seg gjennom fallet. Da kan vi ikke bruke bevegelseslikningene for konstant akselerasjon, men må regne steg for steg numerisk.',
  },
],

  'fys1-3-4': [
  {
    question: 'En bil kjører med fart 10 m/s i en sirkel med radius 20 m. Hva er sentripetalakselerasjonen?',
    options: [
      '5,0 m/s²',
      '0,50 m/s²',
      '2,0 m/s²',
      '200 m/s²',
    ],
    explanation: '$a_s = \\frac{v^2}{r} = \\frac{10^2}{20} = \\frac{100}{20} = 5{,}0$ m/s².',
  },
  {
    question: 'I hvilken retning peker sentripetalakselerasjonen ved uniform sirkelbevegelse?',
    options: [
      'Innover mot sentrum av sirkelen',
      'Utover fra sentrum',
      'Langs tangenten til sirkelen',
      'Nedover mot bakken',
    ],
    explanation: 'Sentripetalakselerasjonen peker alltid mot sentrum av sirkelbanen. Den skyldes at hastighetens retning endrer seg hele tiden, selv om farten er konstant.',
  },
  {
    question: 'Hva skjer med en stein i en slynge hvis snoren plutselig ryker?',
    options: [
      'Steinen fortsetter rett frem langs tangenten til sirkelen',
      'Steinen fortsetter i sirkelbanen',
      'Steinen slynges rett utover fra sentrum',
      'Steinen stopper umiddelbart',
    ],
    explanation: 'Uten sentripetalkraft er det ingen kraft som bøyer banen, og steinen fortsetter med konstant hastighet langs tangenten (Newtons 1. lov). Den slynges ikke radielt utover — "sentrifugalkraften" er en fiktiv kraft.',
  },
  {
    question: 'Et objekt med masse 2,0 kg går i sirkel med radius 4,0 m og fart 6,0 m/s. Hvor stor sentripetalkraft kreves?',
    options: [
      '18 N',
      '3,0 N',
      '12 N',
      '72 N',
    ],
    explanation: '$F_s = \\frac{mv^2}{r} = \\frac{2{,}0 \\cdot 6{,}0^2}{4{,}0} = \\frac{72}{4{,}0} = 18$ N.',
  },
  {
    question: 'Hvilken kraft gir sentripetalkraften når en bil kjører gjennom en flat rundkjøring?',
    options: [
      'Friksjonskraften mellom dekkene og veien',
      'Normalkraften fra veien',
      'Tyngdekraften',
      'Motorkraften fremover',
    ],
    explanation: 'Sentripetalkraft er ikke en egen krafttype, men den resulterende kraften mot sentrum. På flat vei er det friksjonen mellom dekk og asfalt som peker mot sentrum og holder bilen i svingen.',
  },
],

  'fys1-4-1': [
  {
    question: 'En kraft på 50 N trekker en kasse 10 m i kraftens retning. Hvor stort arbeid utfører kraften?',
    options: [
      '500 J',
      '5,0 J',
      '60 J',
      '0 J',
    ],
    explanation: '$W = F \\cdot s \\cdot \\cos\\theta = 50 \\cdot 10 \\cdot \\cos 0° = 500$ J.',
  },
  {
    question: 'Hvor stort arbeid utfører en kraft som står vinkelrett på bevegelsesretningen?',
    options: [
      'Null, fordi $\\cos 90° = 0$',
      'Like stort som $F \\cdot s$',
      'Negativt arbeid',
      'Det avhenger av farten',
    ],
    explanation: 'Arbeid er $W = Fs\\cos\\theta$. Når kraften er vinkelrett på bevegelsen er $\\theta = 90°$ og $\\cos 90° = 0$, så arbeidet er null. Eksempel: normalkraften på en kasse som glir bortover gulvet.',
  },
  {
    question: 'Hva er den kinetiske energien til en ball med masse 4,0 kg og fart 3,0 m/s?',
    options: [
      '18 J',
      '36 J',
      '6,0 J',
      '12 J',
    ],
    explanation: '$E_k = \\frac{1}{2}mv^2 = \\frac{1}{2} \\cdot 4{,}0 \\cdot 3{,}0^2 = \\frac{1}{2} \\cdot 4{,}0 \\cdot 9{,}0 = 18$ J.',
  },
  {
    question: 'Hva skjer med den kinetiske energien til en bil hvis farten dobles?',
    options: [
      'Den firedobles',
      'Den dobles',
      'Den åttedobles',
      'Den er uendret',
    ],
    explanation: 'Kinetisk energi er proporsjonal med farten i andre potens: $E_k = \\frac{1}{2}mv^2$. Dobbel fart gir $2^2 = 4$ ganger så stor kinetisk energi. Derfor øker bremselengden dramatisk med farten.',
  },
  {
    question: 'Hva sier arbeid-energi-teoremet?',
    options: [
      'Det samlede arbeidet på et objekt er lik endringen i kinetisk energi: $W_{netto} = \\Delta E_k$',
      'Arbeid er alltid lik den potensielle energien',
      'Energien til et objekt er alltid konstant',
      'Arbeid kan bare øke energien, aldri redusere den',
    ],
    explanation: 'Arbeid-energi-teoremet: $W_{netto} = \\Delta E_k = E_{k,slutt} - E_{k,start}$. Positivt netto arbeid øker farten, negativt netto arbeid (f.eks. fra friksjon) bremser objektet.',
  },
],

  'fys1-4-2': [
  {
    question: 'En stein med masse 2,0 kg løftes 5,0 m opp. Hvor mye øker den potensielle energien? (g = 9,81 m/s²)',
    options: [
      '98 J',
      '10 J',
      '49 J',
      '196 J',
    ],
    explanation: '$E_p = mgh = 2{,}0 \\cdot 9{,}81 \\cdot 5{,}0 = 98{,}1 \\approx 98$ J.',
  },
  {
    question: 'En fjær med fjærkonstant 200 N/m presses sammen 0,10 m. Hvor mye elastisk potensiell energi lagres?',
    options: [
      '1,0 J',
      '20 J',
      '2,0 J',
      '10 J',
    ],
    explanation: '$E_p = \\frac{1}{2}kx^2 = \\frac{1}{2} \\cdot 200 \\cdot 0{,}10^2 = \\frac{1}{2} \\cdot 200 \\cdot 0{,}010 = 1{,}0$ J.',
  },
  {
    question: 'En ball slippes fra 20 m høyde uten luftmotstand. Hva er farten like før den treffer bakken? (g = 9,81 m/s²)',
    options: [
      'Ca. 20 m/s',
      'Ca. 14 m/s',
      'Ca. 40 m/s',
      'Ca. 10 m/s',
    ],
    explanation: 'Energibevaring: $mgh = \\frac{1}{2}mv^2$ gir $v = \\sqrt{2gh} = \\sqrt{2 \\cdot 9{,}81 \\cdot 20} = \\sqrt{392{,}4} \\approx 19{,}8 \\approx 20$ m/s.',
  },
  {
    question: 'Hva kjennetegner en konservativ kraft?',
    options: [
      'Arbeidet den utfører er uavhengig av veien, bare avhengig av start- og sluttpunkt',
      'Den utfører alltid positivt arbeid',
      'Den omdanner mekanisk energi til varme',
      'Den virker bare på objekter i ro',
    ],
    explanation: 'For en konservativ kraft (som tyngdekraften og fjærkraften) avhenger arbeidet bare av start- og sluttpunkt, ikke av veien. Friksjon er ikke konservativ — den omdanner mekanisk energi til varme.',
  },
  {
    question: 'Hvorfor kan vi velge referansenivået for potensiell energi fritt?',
    options: [
      'Fordi bare endringer i potensiell energi har fysisk betydning',
      'Fordi potensiell energi alltid er null ved bakken',
      'Fordi potensiell energi ikke er en ekte energiform',
      'Fordi g varierer med høyden',
    ],
    explanation: 'Det er bare endringer $\\Delta E_p$ som inngår i fysiske beregninger, så nullnivået ($h = 0$) kan velges der det er mest praktisk.',
  },
],

  'fys1-4-3': [
  {
    question: 'Hva er bevegelsesmengden til en bil med masse 1500 kg som kjører med 20 m/s?',
    options: [
      '30 000 kg·m/s',
      '3 000 kg·m/s',
      '300 000 kg·m/s',
      '75 kg·m/s',
    ],
    explanation: '$p = mv = 1500 \\cdot 20 = 30\\,000$ kg·m/s, i samme retning som hastigheten.',
  },
  {
    question: 'En kraft på 100 N virker på en ball i 0,50 s. Hvor stor impuls får ballen?',
    options: [
      '50 N·s',
      '200 N·s',
      '100 N·s',
      '0,005 N·s',
    ],
    explanation: '$J = F \\cdot \\Delta t = 100 \\cdot 0{,}50 = 50$ N·s. Impulsen er lik endringen i bevegelsesmengde: $J = \\Delta p$.',
  },
  {
    question: 'Hva er forskjellen på et elastisk og et uelastisk støt?',
    options: [
      'I begge bevares bevegelsesmengden, men kinetisk energi bevares bare i det elastiske',
      'Bevegelsesmengden bevares bare i det elastiske støtet',
      'Verken energi eller bevegelsesmengde bevares i det uelastiske støtet',
      'Kinetisk energi bevares i begge, men bevegelsesmengde bare i det elastiske',
    ],
    explanation: 'Bevegelsesmengden bevares i alle støt i et lukket system. Kinetisk energi bevares bare i elastiske støt — i uelastiske støt går noe av den over til varme og deformasjon.',
  },
  {
    question: 'En vogn på 2,0 kg med fart 6,0 m/s treffer en vogn på 4,0 kg i ro, og de henger sammen etter støtet. Hva blir felles fart?',
    options: [
      '2,0 m/s',
      '3,0 m/s',
      '6,0 m/s',
      '1,0 m/s',
    ],
    explanation: 'Bevaring av bevegelsesmengde: $m_1 v_1 = (m_1 + m_2)v$, så $v = \\frac{2{,}0 \\cdot 6{,}0}{2{,}0 + 4{,}0} = \\frac{12}{6{,}0} = 2{,}0$ m/s.',
  },
  {
    question: 'Hvorfor reduserer en airbag skadene ved en kollisjon?',
    options: [
      'Den forlenger tiden kraften virker, slik at kraften blir mindre for samme endring i bevegelsesmengde',
      'Den reduserer endringen i bevegelsesmengde',
      'Den øker farten til passasjeren',
      'Den gjør impulsen mindre ved å øke kraften',
    ],
    explanation: 'Endringen i bevegelsesmengde $\\Delta p$ er gitt av kollisjonen. Siden $F \\cdot \\Delta t = \\Delta p$, gir lengre stopptid $\\Delta t$ en mindre kraft $F$ på kroppen.',
  },
],

  'fys1-4-4': [
  {
    question: 'Hvilken energiform regnes som høykvalitetsenergi?',
    options: [
      'Elektrisk energi',
      'Varme ved lav temperatur',
      'Spillvarme fra en motor',
      'Varme i havvann',
    ],
    explanation: 'Høykvalitetsenergi er konsentrert og organisert energi som lett kan omdannes til andre former, som elektrisk, mekanisk og kjemisk energi. Varme ved lav temperatur er spredt og uorganisert — lavkvalitetsenergi.',
  },
  {
    question: 'En motor tilføres 1000 J og leverer 300 J nyttig arbeid. Hva er virkningsgraden?',
    options: [
      '30 %',
      '70 %',
      '3 %',
      '33 %',
    ],
    explanation: '$\\eta = \\frac{E_{nyttig}}{E_{tilført}} = \\frac{300}{1000} = 0{,}30 = 30\\%$.',
  },
  {
    question: 'Hvorfor kan ikke virkningsgraden være over 100 %?',
    options: [
      'Det ville bety at det skapes energi, i strid med energibevaringsloven',
      'Fordi friksjon alltid er nøyaktig 50 %',
      'Fordi virkningsgrad bare er definert for elektriske maskiner',
      'Det kan den, i svært effektive maskiner',
    ],
    explanation: 'Virkningsgrad over 100 % ville bety at maskinen leverer mer energi enn den får tilført — altså at energi skapes fra ingenting. Det bryter med loven om energibevaring.',
  },
  {
    question: 'To energiomformere kobles i serie med virkningsgrader 0,80 og 0,50. Hva er total virkningsgrad?',
    options: [
      '0,40',
      '0,65',
      '1,30',
      '0,30',
    ],
    explanation: 'Ved seriekobling multipliseres virkningsgradene: $\\eta_{total} = \\eta_1 \\cdot \\eta_2 = 0{,}80 \\cdot 0{,}50 = 0{,}40$.',
  },
  {
    question: 'Hvorfor er prosessen der bremsene på en bil varmes opp irreversibel?',
    options: [
      'Varmen sprer seg til omgivelsene og kan ikke spontant samles og bli til bevegelsesenergi igjen',
      'Fordi bremsene blir fysisk ødelagt',
      'Fordi energien forsvinner helt',
      'Fordi bilen ikke kan kjøre baklengs',
    ],
    explanation: 'Ved bremsing omdannes organisert kinetisk energi til uorganisert termisk energi som sprer seg. Energien er bevart, men kvaliteten er senket — den spredte varmen samler seg aldri spontant tilbake til nyttig arbeid.',
  },
],

  'fys1-5-1': [
  {
    question: 'Hva er temperatur et mål på?',
    options: [
      'Gjennomsnittlig kinetisk energi per molekyl i stoffet',
      'Total mengde varme i stoffet',
      'Antall molekyler i stoffet',
      'Stoffets evne til å lede strøm',
    ],
    explanation: 'Temperatur er et mål på den gjennomsnittlige kinetiske energien per molekyl — hvor raskt molekylene i gjennomsnitt beveger seg.',
  },
  {
    question: 'Hva er 25 °C i kelvin?',
    options: [
      '298 K',
      '248 K',
      '25 K',
      '273 K',
    ],
    explanation: '$T(K) = T(°C) + 273{,}15 = 25 + 273{,}15 = 298{,}15 \\approx 298$ K.',
  },
  {
    question: 'Hvor mye energi kreves for å varme opp 2,0 kg vann med 10 K når c = 4200 J/(kg·K)?',
    options: [
      '84 000 J',
      '8 400 J',
      '42 000 J',
      '840 J',
    ],
    explanation: '$Q = mc\\Delta T = 2{,}0 \\cdot 4200 \\cdot 10 = 84\\,000$ J = 84 kJ.',
  },
  {
    question: 'Hva betyr det at to legemer er i termisk likevekt?',
    options: [
      'De har samme temperatur, og det er ingen netto varmeoverføring mellom dem',
      'De har like mye energi totalt',
      'De har samme masse og varmekapasitet',
      'Det varme legemet fortsetter å varme opp det kalde',
    ],
    explanation: 'Termisk likevekt oppstår når legemene har samme temperatur. Da er det ingen netto varmeoverføring mellom dem.',
  },
  {
    question: 'Hva er den fysiske betydningen av "varme"?',
    options: [
      'Energi som overføres fra et legeme med høy temperatur til et legeme med lavere temperatur',
      'Energien som er lagret i et varmt legeme',
      'Det samme som temperatur',
      'Energi som bare finnes i gasser',
    ],
    explanation: 'Varme er energi i overføring fra varmt til kaldt legeme, målt i joule. Det er ikke en tilstand et legeme "har" — et legeme har indre energi, ikke varme.',
  },
],

  'fys1-5-2': [
  {
    question: 'Hvilke tre mekanismer kan overføre varme?',
    options: [
      'Varmeledning, konveksjon og varmestråling',
      'Friksjon, trykk og fordamping',
      'Varmeledning, induksjon og refleksjon',
      'Konveksjon, kondensasjon og diffusjon',
    ],
    explanation: 'Varme overføres ved varmeledning (direkte kontakt mellom molekyler), konveksjon (varmt stoff strømmer) og varmestråling (elektromagnetisk stråling).',
  },
  {
    question: 'Hvilken varmeoverføringsmekanisme fungerer gjennom vakuum?',
    options: [
      'Bare varmestråling',
      'Bare varmeledning',
      'Bare konveksjon',
      'Både ledning og konveksjon',
    ],
    explanation: 'Varmestråling er elektromagnetisk stråling og trenger ikke noe medium. Ledning og konveksjon krever stoff. Derfor når solenergien Jorden gjennom verdensrommet som stråling.',
  },
  {
    question: 'Hva kjennetegner konveksjon?',
    options: [
      'Varmt stoff (væske eller gass) beveger seg og transporterer energien med seg',
      'Energi overføres fra molekyl til molekyl uten at stoffet flytter seg',
      'Energi overføres som elektromagnetiske bølger',
      'Energi overføres bare i faste stoffer',
    ],
    explanation: 'Ved konveksjon er det selve stoffet som flytter seg og frakter energien, f.eks. varm luft som stiger over en radiator. Konveksjon skjer bare i væsker og gasser.',
  },
  {
    question: 'Hva betyr en lav U-verdi for et vindu?',
    options: [
      'Vinduet isolerer godt og slipper lite varme gjennom',
      'Vinduet isolerer dårlig',
      'Vinduet slipper gjennom mye lys',
      'Vinduet tåler høyt trykk',
    ],
    explanation: 'U-verdien (varmegjennomgangskoeffisienten, i W/(m²·K)) beskriver hvor mye varme som går gjennom bygningselementet. Lav U-verdi betyr god isolasjon.',
  },
  {
    question: 'Hvorfor føles et metallhåndtak kaldere enn en trebenk når begge holder romtemperatur?',
    options: [
      'Metall leder varme mye bedre og frakter raskt varme bort fra hånden',
      'Metallet har faktisk lavere temperatur enn treet',
      'Treet stråler ut mer varme enn metallet',
      'Metallet absorberer kulde fra luften',
    ],
    explanation: 'Begge har samme temperatur, men metall har mye høyere varmeledningsevne enn tre. Metallet leder derfor raskt varme bort fra huden, og det føles kaldt.',
  },
],

  'fys1-5-3': [
  {
    question: 'Hva er et sort legeme i fysikken?',
    options: [
      'Et idealisert objekt som absorberer all innkommende stråling og stråler maksimalt for sin temperatur',
      'Et objekt som ikke sender ut noen stråling',
      'Et objekt som bare reflekterer synlig lys',
      'Et objekt med temperatur lik det absolutte nullpunkt',
    ],
    explanation: 'Et sort legeme absorberer all innkommende stråling og sender ut maksimal stråling ved en gitt temperatur. Strålingen avhenger bare av temperaturen.',
  },
  {
    question: 'Ifølge Stefan-Boltzmanns lov ($P = \\sigma A T^4$): Hva skjer med utstrålt effekt hvis temperaturen (i kelvin) dobles?',
    options: [
      'Den blir 16 ganger større',
      'Den dobles',
      'Den firedobles',
      'Den blir 8 ganger større',
    ],
    explanation: 'Effekten er proporsjonal med $T^4$. Dobles temperaturen, øker effekten med faktoren $2^4 = 16$.',
  },
  {
    question: 'Solens overflate holder ca. 5800 K. Hvilken bølgelengde stråler den mest ved? (Wiens lov, b = 2,90·10⁻³ m·K)',
    options: [
      'Ca. 500 nm (synlig lys)',
      'Ca. 5000 nm (infrarødt)',
      'Ca. 50 nm (røntgenområdet)',
      'Ca. 5 mm (mikrobølger)',
    ],
    explanation: 'Wiens forskyvningslov: $\\lambda_{max} = \\frac{b}{T} = \\frac{2{,}90 \\cdot 10^{-3}}{5800} = 5{,}0 \\cdot 10^{-7}$ m = 500 nm, midt i det synlige området.',
  },
  {
    question: 'Hva skjer med toppbølgelengden i strålingen fra et objekt når det blir varmere?',
    options: [
      'Den forskyves mot kortere bølgelengder',
      'Den forskyves mot lengre bølgelengder',
      'Den er uavhengig av temperaturen',
      'Den blir alltid liggende i det infrarøde området',
    ],
    explanation: 'Etter Wiens lov er $\\lambda_{max} = b/T$: høyere temperatur gir kortere toppbølgelengde. Derfor skifter en glødende gjenstand farge fra rødt mot hvitt/blått når den varmes opp.',
  },
  {
    question: 'Hva sier Kirchhoffs strålingslov om absorpsjon og emisjon?',
    options: [
      'En god absorbator er også en god emitter ved samme bølgelengde',
      'En god absorbator er alltid en dårlig emitter',
      'Absorpsjon og emisjon er helt uavhengige egenskaper',
      'Bare sorte legemer kan absorbere stråling',
    ],
    explanation: 'Kirchhoffs lov sier at et legemes evne til å absorbere stråling er lik dets evne til å emittere stråling ved samme bølgelengde. En matt, sort overflate både absorberer og stråler godt.',
  },
],

  'fys1-5-4': [
  {
    question: 'Hva er albedo?',
    options: [
      'Andelen av innkommende solstråling som reflekteres tilbake til verdensrommet',
      'Andelen av solstrålingen som absorberes av bakken',
      'Mengden infrarød stråling jorden sender ut',
      'Tykkelsen på atmosfærens ozonlag',
    ],
    explanation: 'Albedo er refleksjonsevnen — andelen av solstrålingen som reflekteres. Jordens gjennomsnittlige albedo er ca. 0,30, altså reflekteres ca. 30 % av sollyset.',
  },
  {
    question: 'En flate mottar 1000 W/m² solstråling og har albedo 0,30. Hvor mye absorberes per kvadratmeter?',
    options: [
      '700 W/m²',
      '300 W/m²',
      '1000 W/m²',
      '970 W/m²',
    ],
    explanation: 'Albedo 0,30 betyr at 30 % (300 W/m²) reflekteres. Absorbert effekt = $1000 \\cdot (1 - 0{,}30) = 700$ W/m².',
  },
  {
    question: 'Hvordan virker drivhuseffekten?',
    options: [
      'Atmosfæriske gasser absorberer utgående infrarød stråling fra jorden og sender deler av den tilbake',
      'Atmosfæren reflekterer alt sollys tilbake til verdensrommet',
      'Atmosfæren hindrer synlig lys i å nå bakken',
      'Ozonlaget varmer opp jordoverflaten direkte',
    ],
    explanation: 'Drivhusgasser som CO₂ og vanndamp slipper gjennom det meste av sollyset, men absorberer den infrarøde strålingen jorden sender ut, og re-sender deler av den tilbake mot overflaten.',
  },
  {
    question: 'Hva ville skjedd med jordens overflatetemperatur uten naturlig drivhuseffekt?',
    options: [
      'Den ville vært rundt -18 °C, langt kaldere enn i dag',
      'Den ville vært omtrent som i dag',
      'Den ville vært mye varmere enn i dag',
      'Den ville vært over 100 °C',
    ],
    explanation: 'Uten drivhuseffekt ville jordens likevektstemperatur vært ca. -18 °C. Den naturlige drivhuseffekten løfter gjennomsnittstemperaturen til ca. +15 °C og gjør jorden beboelig.',
  },
  {
    question: 'Hvorfor er issmelting i Arktis et eksempel på positiv tilbakekobling i klimasystemet?',
    options: [
      'Mindre is gir lavere albedo, mer absorbert solenergi og dermed enda mer oppvarming og smelting',
      'Smeltevannet kjøler ned havet og stopper oppvarmingen',
      'Isen reflekterer mer sollys jo mer den smelter',
      'Smelting av is frigjør oksygen som kjøler atmosfæren',
    ],
    explanation: 'Is har høy albedo og reflekterer mye sollys. Når isen smelter, blottlegges mørkt hav med lav albedo som absorberer mer solenergi. Det gir mer oppvarming og mer smelting — en selvforsterkende (positiv) tilbakekobling.',
  },
],

  'fys1-6-1': [
  {
    question: 'Hva er elementærladningen?',
    options: [
      '$e = 1{,}602 \\cdot 10^{-19}$ C',
      '$e = 9{,}11 \\cdot 10^{-31}$ C',
      '$e = 6{,}02 \\cdot 10^{23}$ C',
      '$e = 1{,}602 \\cdot 10^{-19}$ J',
    ],
    explanation: 'Elementærladningen er $e = 1{,}602 \\cdot 10^{-19}$ C — ladningen til et proton (elektronet har $-e$). All ladning er hele multipler av denne.',
  },
  {
    question: 'Hva skjer med kraften mellom to punktladninger hvis avstanden dobles?',
    options: [
      'Den blir en fjerdedel så stor',
      'Den halveres',
      'Den dobles',
      'Den er uendret',
    ],
    explanation: 'Coulombs lov: $F = k\\frac{q_1 q_2}{r^2}$. Kraften avtar med kvadratet av avstanden, så dobbel avstand gir $F/4$.',
  },
  {
    question: 'En ladning på 4,0·10⁻⁶ C opplever en elektrisk kraft på 2,0·10⁻³ N. Hvor sterkt er feltet der ladningen er?',
    options: [
      '500 N/C',
      '8,0·10⁻⁹ N/C',
      '2,0·10³ N/C',
      '0,002 N/C',
    ],
    explanation: '$E = \\frac{F}{q} = \\frac{2{,}0 \\cdot 10^{-3}}{4{,}0 \\cdot 10^{-6}} = 500$ N/C.',
  },
  {
    question: 'Hvilken retning har de elektriske feltlinjene?',
    options: [
      'Fra positive ladninger mot negative ladninger',
      'Fra negative ladninger mot positive ladninger',
      'Alltid i sirkler rundt ladningen',
      'Alltid parallelt med jordoverflaten',
    ],
    explanation: 'Feltlinjene viser retningen en positiv prøveladning ville blitt dyttet — de peker ut fra positive ladninger og inn mot negative ladninger.',
  },
  {
    question: 'To parallelle plater har spenningen 12 V og avstand 0,020 m. Hvor sterkt er det uniforme feltet mellom dem?',
    options: [
      '600 V/m',
      '0,24 V/m',
      '60 V/m',
      '0,0017 V/m',
    ],
    explanation: 'For et uniformt felt: $E = \\frac{U}{d} = \\frac{12}{0{,}020} = 600$ V/m.',
  },
],

  'fys1-6-2': [
  {
    question: 'En motstand på 4,0 Ω kobles til en spenning på 12 V. Hvor stor strøm går gjennom motstanden?',
    options: [
      '3,0 A',
      '48 A',
      '0,33 A',
      '8,0 A',
    ],
    explanation: 'Ohms lov: $I = \\frac{U}{R} = \\frac{12}{4{,}0} = 3{,}0$ A.',
  },
  {
    question: 'To motstander på 10 Ω og 20 Ω kobles i serie. Hva er total resistans, og hva gjelder for strømmen?',
    options: [
      '30 Ω, og strømmen er den samme gjennom begge motstandene',
      '6,7 Ω, og strømmen deler seg mellom motstandene',
      '30 Ω, og spenningen er lik over begge motstandene',
      '200 Ω, og strømmen er den samme gjennom begge',
    ],
    explanation: 'I seriekobling adderes resistansene: $R = 10 + 20 = 30$ Ω, og samme strøm går gjennom alle komponentene. Spenningen fordeler seg derimot.',
  },
  {
    question: 'To motstander på 6,0 Ω hver kobles i parallell. Hva er den totale resistansen?',
    options: [
      '3,0 Ω',
      '12 Ω',
      '6,0 Ω',
      '36 Ω',
    ],
    explanation: 'For to like motstander i parallell: $R_{tot} = \\frac{R}{2} = \\frac{6{,}0}{2} = 3{,}0$ Ω. Generelt: $\\frac{1}{R_{tot}} = \\frac{1}{6} + \\frac{1}{6} = \\frac{2}{6}$.',
  },
  {
    question: 'Hva sier Kirchhoffs strømlov?',
    options: [
      'Summen av strømmer inn i et knutepunkt er lik summen av strømmer ut',
      'Summen av spenningene i en lukket sløyfe er null',
      'Strømmen er alltid proporsjonal med resistansen',
      'Strømmen er like stor i alle parallelle grener',
    ],
    explanation: 'Kirchhoffs strømlov (1. lov): $\\sum I_{inn} = \\sum I_{ut}$ i ethvert knutepunkt. Den uttrykker at ladning er bevart — ingen ladning forsvinner eller hoper seg opp.',
  },
  {
    question: 'Det passerer 60 C ladning gjennom en leder på 20 s. Hvor stor er strømmen?',
    options: [
      '3,0 A',
      '1200 A',
      '0,33 A',
      '80 A',
    ],
    explanation: '$I = \\frac{Q}{t} = \\frac{60}{20} = 3{,}0$ A. 1 ampere er 1 coulomb per sekund.',
  },
],

  'fys1-6-3': [
  {
    question: 'En varmeovn trekker 10 A fra nettet på 230 V. Hvor stor effekt har den?',
    options: [
      '2300 W',
      '23 W',
      '230 W',
      '5290 W',
    ],
    explanation: '$P = UI = 230 \\cdot 10 = 2300$ W = 2,3 kW.',
  },
  {
    question: 'Hvor mye energi i joule tilsvarer 1 kWh?',
    options: [
      '3,6 MJ',
      '1000 J',
      '3600 J',
      '60 kJ',
    ],
    explanation: '1 kWh = 1000 W · 3600 s = 3 600 000 J = 3,6 MJ.',
  },
  {
    question: 'En ovn på 2,0 kW står på i 3,0 timer. Hvor mye energi bruker den?',
    options: [
      '6,0 kWh',
      '2,0 kWh',
      '1,5 kWh',
      '0,67 kWh',
    ],
    explanation: '$E = P \\cdot t = 2{,}0 \\text{ kW} \\cdot 3{,}0 \\text{ h} = 6{,}0$ kWh.',
  },
  {
    question: 'En lyspære er koblet til 230 V og har resistans 529 Ω. Hvilken effekt utvikles? (Bruk $P = U^2/R$)',
    options: [
      '100 W',
      '529 W',
      '0,43 W',
      '230 W',
    ],
    explanation: '$P = \\frac{U^2}{R} = \\frac{230^2}{529} = \\frac{52\\,900}{529} = 100$ W.',
  },
  {
    question: 'Hvor stor effekt kan maksimalt belastes på en kurs med 10 A sikring og 230 V spenning?',
    options: [
      '2300 W',
      '23 000 W',
      '230 W',
      '1000 W',
    ],
    explanation: '$P_{maks} = U \\cdot I_{maks} = 230 \\cdot 10 = 2300$ W. Trekkes mer effekt enn dette, blir strømmen for høy og sikringen løser ut.',
  },
],

  'fys1-6-4': [
  {
    question: 'Hva er energien til elektronet i hydrogenatomet i nivået n = 2 ifølge Bohrs modell?',
    options: [
      '-3,4 eV',
      '-13,6 eV',
      '-6,8 eV',
      '+3,4 eV',
    ],
    explanation: '$E_n = -\\frac{13{,}6 \\text{ eV}}{n^2}$, så $E_2 = -\\frac{13{,}6}{4} = -3{,}4$ eV.',
  },
  {
    question: 'Hvor stor energi har fotonet som sendes ut når elektronet i hydrogen faller fra n = 2 til n = 1?',
    options: [
      '10,2 eV',
      '17,0 eV',
      '3,4 eV',
      '13,6 eV',
    ],
    explanation: '$E = E_2 - E_1 = (-3{,}4) - (-13{,}6) = 10{,}2$ eV. Fotonenergien er differansen mellom energinivåene.',
  },
  {
    question: 'Hva skjer i fotoelektrisk effekt hvis lysets frekvens er under grensefrekvensen?',
    options: [
      'Ingen elektroner frigjøres, uansett hvor intenst lyset er',
      'Elektroner frigjøres hvis lyset er intenst nok',
      'Elektroner frigjøres med høy kinetisk energi',
      'Metallet smelter',
    ],
    explanation: 'Hvert foton har energien $E = hf$. Er $hf$ mindre enn arbeidsfunksjonen $W$, kan ikke ett foton frigjøre et elektron — og høyere intensitet betyr bare flere slike utilstrekkelige fotoner. Dette kunne ikke forklares klassisk.',
  },
  {
    question: 'Hva viste Rutherfords gullfolie-eksperiment?',
    options: [
      'Atomet er for det meste tomrom med en liten, massiv og positivt ladet kjerne',
      'Elektronene ligger jevnt fordelt i en positiv "deig"',
      'Atomet er en udelelig kule',
      'Nøytronet finnes i kjernen',
    ],
    explanation: 'De fleste alfapartiklene gikk rett gjennom folien, men noen få ble kraftig avbøyd. Det viste at den positive ladningen og nesten all massen er samlet i en bitteliten kjerne.',
  },
  {
    question: 'Hvorfor sender hvert grunnstoff ut et linjespektrum med bestemte bølgelengder?',
    options: [
      'Fordi elektronene bare kan ha bestemte, diskrete energinivåer, og overgangene gir fotoner med bestemte energier',
      'Fordi atomene roterer med bestemte frekvenser',
      'Fordi kjernen sender ut lys ved oppvarming',
      'Fordi elektronene kan ha hvilken som helst energi',
    ],
    explanation: 'Energinivåene i atomet er kvantiserte. Når et elektron hopper fra ett nivå til et lavere, sendes det ut et foton med energi nøyaktig lik differansen, $E = hf$. Hvert grunnstoff har sitt unike sett av nivåer og dermed sitt unike linjespektrum.',
  },
],

  'fys1-6-5': [
  {
    question: 'Kjernen til jern-56 har massetall 56 og atomnummer 26. Hvor mange nøytroner har den?',
    options: [
      '30',
      '26',
      '56',
      '82',
    ],
    explanation: 'Antall nøytroner er $N = A - Z = 56 - 26 = 30$.',
  },
  {
    question: 'En kjerne har massedefekt 0,030 u. Hva er bindingsenergien? (1 u tilsvarer 931,5 MeV)',
    options: [
      'Ca. 28 MeV',
      'Ca. 2,8 MeV',
      'Ca. 280 MeV',
      'Ca. 0,93 MeV',
    ],
    explanation: '$E_b = \\Delta m \\cdot 931{,}5 \\text{ MeV/u} = 0{,}030 \\cdot 931{,}5 \\approx 27{,}9 \\approx 28$ MeV.',
  },
  {
    question: 'Hvilken prosess frigjør energien i Solen?',
    options: [
      'Fusjon av hydrogen til helium',
      'Fisjon av uran',
      'Kjemisk forbrenning av hydrogen',
      'Gravitasjonell sammentrekning alene',
    ],
    explanation: 'I Solens kjerne smelter hydrogenkjerner sammen til helium (proton-proton-kjeden). Massedifferansen frigjøres som energi etter $E = mc^2$.',
  },
  {
    question: 'Hvorfor frigjør både fusjon av lette kjerner og fisjon av tunge kjerner energi?',
    options: [
      'Fordi bindingsenergien per nukleon er størst rundt jern — begge prosessene går mot sterkere bundne kjerner',
      'Fordi alle kjerneprosesser frigjør energi',
      'Fordi protoner alltid frastøter hverandre',
      'Fordi massen alltid øker i kjerneprosesser',
    ],
    explanation: 'Bindingsenergikurven har maksimum rundt jern (Fe-56). Fusjon av lette kjerner og fisjon av tunge kjerner gir begge produkter med høyere bindingsenergi per nukleon, og differansen frigjøres som energi.',
  },
  {
    question: 'Hvor er tunge grunnstoff som gull og uran hovedsakelig dannet?',
    options: [
      'I supernovaeksplosjoner og kollisjoner mellom nøytronstjerner',
      'I Big Bang',
      'I jordens indre',
      'I vanlige stjerner som Solen',
    ],
    explanation: 'Big Bang ga i hovedsak hydrogen og helium, og vanlige stjerner fusjonerer opp til jern. Grunnstoff tyngre enn jern krever de ekstreme forholdene i supernovaer og nøytronstjernekollisjoner.',
  },
],

  'fysikk2-5-3': [
  {
    question: 'Hva sier Lenz\' lov om retningen til en indusert strøm?',
    options: [
      'Den induserte strømmen går alltid i en retning som motvirker fluksendringen som forårsaket den',
      'Den induserte strømmen går alltid i samme retning som fluksendringen',
      'Den induserte strømmen går alltid med klokken sett fra nordpolen',
      'Den induserte strømmen forsterker alltid det opprinnelige magnetfeltet',
    ],
    explanation: 'Lenz\' lov sier at den induserte strømmen i en lukket krets alltid går slik at magnetfeltet den skaper, motvirker den fluksendringen som forårsaket strømmen.',
  },
  {
    question: 'Hva representerer minustegnet i Faradays lov, $\\varepsilon = -N\\frac{d\\Phi}{dt}$?',
    options: [
      'Lenz\' lov – at indusert EMF motvirker fluksendringen',
      'At fluksen alltid er negativ',
      'At spolen har negativ ladning',
      'En regnefeil som ofte ignoreres',
    ],
    explanation: 'Minustegnet i Faradays lov er det matematiske uttrykket for Lenz\' lov: den induserte EMF-en driver en strøm som motvirker endringen i magnetisk fluks.',
  },
  {
    question: 'En stavmagnet føres med nordpolen først mot en spole. Hva skjer i spolen?',
    options: [
      'Det induseres en strøm som gjør spolens nærmeste ende til en nordpol, slik at magneten frastøtes',
      'Det induseres en strøm som gjør spolens nærmeste ende til en sørpol, slik at magneten tiltrekkes',
      'Det induseres ingen strøm fordi magneten ikke berører spolen',
      'Spolen blir permanent magnetisert',
    ],
    explanation: 'Etter Lenz\' lov motvirker den induserte strømmen fluksendringen. Når nordpolen nærmer seg, øker fluksen, og spolen lager en nordpol mot magneten for å frastøte den og bremse bevegelsen.',
  },
  {
    question: 'Hvilket fysisk prinsipp er Lenz\' lov en direkte konsekvens av?',
    options: [
      'Energibevaring',
      'Bevaring av elektrisk ladning',
      'Newtons tredje lov',
      'Bevaring av bevegelsesmengde',
    ],
    explanation: 'Hvis den induserte strømmen forsterket fluksendringen, ville vi fått energi fra ingenting. Lenz\' lov sikrer at det må tilføres arbeid utenfra for å produsere elektrisk energi.',
  },
  {
    question: 'En magnet slippes gjennom et vertikalt kobberrør. Hva observeres, og hvorfor?',
    options: [
      'Magneten faller langsommere enn i fritt fall fordi induserte virvelstrømmer bremser den',
      'Magneten faller raskere enn i fritt fall fordi virvelstrømmene trekker den nedover',
      'Magneten faller akkurat som i fritt fall fordi kobber ikke er magnetisk',
      'Magneten stopper helt og blir hengende i røret',
    ],
    explanation: 'Magnetens bevegelse endrer fluksen gjennom rørveggen og induserer virvelstrømmer. Etter Lenz\' lov motvirker disse bevegelsen, så magneten bremses – men den stopper ikke helt.',
  },
],

  'fysikk2-5-4': [
  {
    question: 'Hva er toppverdien til EMF-en fra en AC-generator med $N$ vindinger, magnetfelt $B$, spoleareal $A$ og vinkelfrekvens $\\omega$?',
    options: [
      '$\\varepsilon_0 = NBA\\omega$',
      '$\\varepsilon_0 = \\frac{NBA}{\\omega}$',
      '$\\varepsilon_0 = NBA\\omega^2$',
      '$\\varepsilon_0 = \\frac{NB\\omega}{A}$',
    ],
    explanation: 'EMF-en fra en AC-generator er ε(t) = NBAω·sin(ωt), så toppverdien (amplituden) er ε₀ = NBAω.',
  },
  {
    question: 'En generator har 100 vindinger, B = 0,5 T, spoleareal 0,01 m² og roterer med ω = 100 rad/s. Hva er toppverdien av EMF-en?',
    options: [
      '50 V',
      '5 V',
      '500 V',
      '0,5 V',
    ],
    explanation: 'ε₀ = NBAω = 100 · 0,5 · 0,01 · 100 = 50 V.',
  },
  {
    question: 'Nettspenningen har toppverdi V₀ = 325 V. Hva er effektivverdien (RMS)?',
    options: [
      'Ca. 230 V',
      'Ca. 460 V',
      'Ca. 163 V',
      'Ca. 325 V',
    ],
    explanation: 'For sinusformet spenning er V_rms = V₀/√2 = 325/1,414 ≈ 230 V – nettopp den norske nettspenningen.',
  },
  {
    question: 'Hvorfor trekker en elektrisk motor størst strøm i det øyeblikket den starter?',
    options: [
      'Fordi tilbake-EMF-en er null ved oppstart, slik at hele spenningen driver strøm gjennom motstanden',
      'Fordi motstanden i viklingene er null ved oppstart',
      'Fordi magnetfeltet er sterkest ved oppstart',
      'Fordi spenningen fra kilden er høyest ved oppstart',
    ],
    explanation: 'Strømmen er I = (V − ε_tilbake)/R. Ved oppstart roterer ikke motoren, så ε_tilbake = 0 og I = V/R er maksimal. Når motoren får fart, vokser tilbake-EMF-en og strømmen synker.',
  },
  {
    question: 'En motor er koblet til 12 V og har viklingsmotstand 2 Ω. Ved full hastighet er tilbake-EMF-en 10 V. Hva er strømmen da?',
    options: [
      '1 A',
      '6 A',
      '5 A',
      '11 A',
    ],
    explanation: 'I = (V − ε_tilbake)/R = (12 − 10)/2 = 1 A. Uten tilbake-EMF ville strømmen vært 12/2 = 6 A.',
  },
],

  'fysikk2-5-5': [
  {
    question: 'Hva er omsettingsforholdet $n$ til en transformator?',
    options: [
      '$n = \\frac{N_s}{N_p} = \\frac{V_s}{V_p}$ – forholdet mellom vindingstall i sekundær- og primærspolen',
      '$n = \\frac{N_p}{N_s} = \\frac{V_s}{V_p}$ – forholdet mellom vindingstall i primær- og sekundærspolen',
      '$n = N_s \\cdot N_p$ – produktet av vindingstallene',
      '$n = \\frac{I_s}{I_p}$ – forholdet mellom strømmene',
    ],
    explanation: 'Omsettingsforholdet er n = N_s/N_p = V_s/V_p. Er n > 1, øker spenningen (step-up); er n < 1, synker den (step-down).',
  },
  {
    question: 'En transformator har 500 vindinger i primærspolen og 25 i sekundærspolen. Primærspenningen er 230 V. Hva er sekundærspenningen?',
    options: [
      '11,5 V',
      '4600 V',
      '23 V',
      '46 V',
    ],
    explanation: 'V_s = V_p · N_s/N_p = 230 · 25/500 = 230 · 0,05 = 11,5 V. Dette er en nedover-transformator.',
  },
  {
    question: 'En ideell transformator leverer 11,5 V på sekundærsiden når primærsiden får 230 V og trekker 0,5 A. Hva er strømmen i sekundærkretsen?',
    options: [
      '10 A',
      '0,025 A',
      '0,5 A',
      '20 A',
    ],
    explanation: 'I en ideell transformator er effekten bevart: V_p·I_p = V_s·I_s, så I_s = 230 · 0,5/11,5 = 10 A. Lavere spenning gir høyere strøm.',
  },
  {
    question: 'Spenningen i en kraftledning dobles mens overført effekt er den samme. Hva skjer med effekttapet i ledningen?',
    options: [
      'Det reduseres til en fjerdedel',
      'Det halveres',
      'Det dobles',
      'Det er uendret',
    ],
    explanation: 'Tapet er P_tap = P²R/V², altså omvendt proporsjonalt med V². Dobles spenningen, blir tapet fire ganger mindre. Derfor brukes høyspent overføring.',
  },
  {
    question: 'Hvorfor fungerer ikke en transformator med likestrøm (DC)?',
    options: [
      'Konstant strøm gir konstant fluks, og uten fluksendring induseres ingen spenning i sekundærspolen',
      'Likestrøm kan ikke skape noe magnetfelt i jernkjernen',
      'Likestrøm smelter alltid transformatoren umiddelbart',
      'Transformatorer leder bare strøm i én retning, som en diode',
    ],
    explanation: 'Transformatoren bygger på induksjon, som krever en fluksendring (dΦ/dt ≠ 0). Konstant likestrøm gir konstant fluks og dermed ingen indusert spenning.',
  },
],

  'fysikk2-5-6': [
  {
    question: 'Et vannkraftverk har virkningsgrad 0,9, fallhøyde 100 m og volumstrøm 10 m³/s. Hva er den elektriske effekten? (ρ = 1000 kg/m³, g = 9,81 m/s²)',
    options: [
      'Ca. 8,8 MW',
      'Ca. 0,88 MW',
      'Ca. 88 MW',
      'Ca. 9,8 MW',
    ],
    explanation: 'P = η·ρ·g·h·Q = 0,9 · 1000 · 9,81 · 100 · 10 = 8 829 000 W ≈ 8,8 MW.',
  },
  {
    question: 'Hvordan avhenger den tilgjengelige effekten i vinden av vindhastigheten $v$?',
    options: [
      'Den er proporsjonal med $v^3$ – dobling av vindhastigheten gir 8 ganger mer effekt',
      'Den er proporsjonal med $v$ – dobling av vindhastigheten gir dobbel effekt',
      'Den er proporsjonal med $v^2$ – dobling av vindhastigheten gir 4 ganger mer effekt',
      'Den er uavhengig av vindhastigheten',
    ],
    explanation: 'P_vind = ½ρAv³. Tredjepotensen gjør at små endringer i vindhastighet gir store utslag i effekt: 2³ = 8.',
  },
  {
    question: 'Hva sier Betz\' grense om vindturbiner?',
    options: [
      'En vindturbin kan maksimalt hente ut ca. 59 % av effekten i vinden',
      'En vindturbin kan maksimalt hente ut 100 % av effekten i vinden',
      'En vindturbin kan maksimalt hente ut 25 % av effekten i vinden',
      'En vindturbin må alltid stå minst 59 m over bakken',
    ],
    explanation: 'Betz\' grense sier at effektkoeffisienten C_p maksimalt kan være 16/27 ≈ 0,593. Vinden må beholde noe fart for å strømme videre bak turbinen.',
  },
  {
    question: 'En vindturbin har rotorradius 50 m. Hva er tilgjengelig effekt i vinden ved v = 10 m/s? (ρ = 1,225 kg/m³)',
    options: [
      'Ca. 4,8 MW',
      'Ca. 0,48 MW',
      'Ca. 48 MW',
      'Ca. 1,2 MW',
    ],
    explanation: 'A = πr² = π·2500 ≈ 7854 m². P = ½·1,225·7854·10³ ≈ 4,8 MW. Turbinen henter ut maksimalt 59 % av dette (Betz).',
  },
  {
    question: 'Hvilket fysisk prinsipp er felles for strømproduksjonen i både vannkraftverk og vindturbiner?',
    options: [
      'Elektromagnetisk induksjon – en generator omdanner rotasjon til elektrisk energi',
      'Fotoelektrisk effekt – lys frigjør elektroner',
      'Termoelektrisk effekt – temperaturforskjeller skaper spenning',
      'Piezoelektrisk effekt – trykk skaper spenning',
    ],
    explanation: 'Begge bruker en generator: bevegelsesenergi fra vann eller vind roterer en spole/magnet, og fluksendringen induserer EMF etter Faradays lov.',
  },
],

  'fysikk2-6-1': [
  {
    question: 'Hva sier Einsteins andre postulat (lyshastighetspostulatet)?',
    options: [
      'Lysets hastighet i vakuum er den samme i alle inertielle referansesystemer, uavhengig av kildens eller observatørens bevegelse',
      'Lysets hastighet avhenger av hvor fort lyskilden beveger seg',
      'Lysets hastighet er bare konstant for observatører i ro',
      'Lyset beveger seg uendelig raskt i vakuum',
    ],
    explanation: 'Andre postulat: alle observatører i inertialsystemer måler nøyaktig samme lyshastighet c = 3,00·10⁸ m/s, uansett egen bevegelse eller kildens bevegelse.',
  },
  {
    question: 'Hva sier Einsteins første postulat (relativitetsprinsippet)?',
    options: [
      'Alle naturlover har samme form i alle inertielle referansesystemer',
      'Bare mekanikkens lover er like i alle referansesystemer',
      'Naturlovene gjelder bare i referansesystemer som er i ro',
      'Alle bevegelser er absolutte og kan måles mot et universelt hvilesystem',
    ],
    explanation: 'Einstein utvidet Galileis relativitetsprinsipp fra å gjelde bare mekanikken til å gjelde alle naturlover, inkludert elektromagnetismen.',
  },
  {
    question: 'Hva kjennetegner et inertielt referansesystem?',
    options: [
      'Et legeme uten netto kraft er i ro eller beveger seg rettlinjet med konstant fart',
      'Systemet akselererer jevnt',
      'Systemet roterer med konstant vinkelfart',
      'Systemet er alltid i ro i forhold til jorden',
    ],
    explanation: 'I et inertielt referansesystem gjelder treghetsloven: uten netto kraft fortsetter et legeme i ro eller med konstant hastighet langs en rett linje.',
  },
  {
    question: 'To hendelser skjer samtidig på forskjellige steder i ett inertialsystem. Hva gjelder i et annet inertialsystem i bevegelse i forhold til det første?',
    options: [
      'Hendelsene er generelt ikke samtidige der',
      'Hendelsene er samtidige i alle referansesystemer',
      'Hendelsene bytter alltid rekkefølge',
      'Hendelsene skjer på samme sted der',
    ],
    explanation: 'Samtidighet er relativ: hendelser som er samtidige på ulike steder i ett system, er generelt ikke samtidige i et system i relativ bevegelse.',
  },
  {
    question: 'Hva er forskjellen på Galileis og Einsteins relativitetsprinsipp?',
    options: [
      'Galilei begrenset prinsippet til mekanikkens lover, mens Einstein utvidet det til alle naturlover',
      'Galilei mente lyshastigheten var konstant, Einstein mente den var variabel',
      'Einstein begrenset prinsippet til mekanikken, Galilei til elektromagnetismen',
      'Det er ingen forskjell – Einstein gjentok bare Galilei',
    ],
    explanation: 'Galilei sa at mekanikkens lover er like i alle inertialsystemer. Einstein utvidet dette til alle naturlover, også Maxwells ligninger for elektromagnetisme.',
  },
],

  'fysikk2-6-2': [
  {
    question: 'Hva er formelen for tidsdilatasjon?',
    options: [
      '$\\Delta t = \\gamma \\Delta\\tau$, der $\\Delta\\tau$ er egentiden',
      '$\\Delta t = \\Delta\\tau / \\gamma$, der $\\Delta\\tau$ er egentiden',
      '$\\Delta t = \\gamma^2 \\Delta\\tau$',
      '$\\Delta t = \\Delta\\tau$ i alle referansesystemer',
    ],
    explanation: 'Δt = γΔτ. Siden γ ≥ 1 måler en observatør i relativ bevegelse alltid et lengre tidsintervall enn egentiden – «bevegelige klokker går saktere».',
  },
  {
    question: 'Hva er Lorentzfaktoren γ for v = 0,8c?',
    options: [
      'γ ≈ 1,67',
      'γ ≈ 1,25',
      'γ = 0,6',
      'γ ≈ 2,5',
    ],
    explanation: 'γ = 1/√(1 − v²/c²) = 1/√(1 − 0,64) = 1/√0,36 = 1/0,6 ≈ 1,67.',
  },
  {
    question: 'Hva er egentiden Δτ mellom to hendelser?',
    options: [
      'Tidsintervallet målt av en observatør for hvem hendelsene skjer på samme sted',
      'Tidsintervallet målt av en observatør som beveger seg raskest',
      'Det lengste mulige tidsintervallet mellom hendelsene',
      'Tiden målt med en atomklokke på jorden',
    ],
    explanation: 'Egentiden er tiden målt i det referansesystemet der begge hendelsene skjer på samme sted. Den er det korteste mulige tidsintervallet mellom hendelsene.',
  },
  {
    question: 'En astronaut måler 10 s mellom to blink på romskipet sitt, som passerer jorden med v = 0,6c. Hvor lang tid måler en observatør på jorden?',
    options: [
      '12,5 s',
      '8,0 s',
      '10 s',
      '16,7 s',
    ],
    explanation: 'γ = 1/√(1 − 0,36) = 1/0,8 = 1,25. Jordobservatøren måler Δt = γΔτ = 1,25 · 10 s = 12,5 s.',
  },
  {
    question: 'Hva skjer med Lorentzfaktoren γ når hastigheten v nærmer seg lyshastigheten c?',
    options: [
      'γ vokser mot uendelig',
      'γ nærmer seg 1',
      'γ nærmer seg 0',
      'γ nærmer seg c',
    ],
    explanation: 'Når v → c går nevneren √(1 − v²/c²) mot 0, så γ → ∞. Ved v = 0 er γ = 1, og γ ≥ 1 for alle fysiske hastigheter.',
  },
],

  'fysikk2-6-3': [
  {
    question: 'Hva er formelen for lengdekontraksjon?',
    options: [
      '$L = L_0\\sqrt{1 - v^2/c^2} = L_0/\\gamma$',
      '$L = L_0 \\cdot \\gamma$',
      '$L = L_0\\sqrt{1 + v^2/c^2}$',
      '$L = L_0 \\cdot v/c$',
    ],
    explanation: 'L = L₀/γ = L₀√(1 − v²/c²). Den observerte lengden er alltid kortere enn eller lik egenlengden L₀.',
  },
  {
    question: 'Hva er egenlengden L₀ til et objekt?',
    options: [
      'Lengden målt i referansesystemet der objektet er i ro – den lengste mulige lengden',
      'Lengden målt av en observatør som beveger seg forbi objektet',
      'Den korteste lengden noen observatør kan måle',
      'Gjennomsnittet av lengdene målt i alle referansesystemer',
    ],
    explanation: 'Egenlengden er lengden i objektets hvilesystem. Alle observatører som ser objektet i bevegelse, måler en kortere lengde.',
  },
  {
    question: 'Et romskip har egenlengde 100 m og passerer jorden med v = 0,8c. Hvor langt måles det fra jorden?',
    options: [
      '60 m',
      '80 m',
      '100 m',
      '167 m',
    ],
    explanation: 'L = L₀√(1 − 0,8²) = 100·√(1 − 0,64) = 100·0,6 = 60 m.',
  },
  {
    question: 'En meterstav beveger seg langs sin egen lengderetning med v = 0,6c. Hvor lang måles den av en observatør i ro?',
    options: [
      '0,80 m',
      '1,25 m',
      '0,60 m',
      '1,00 m',
    ],
    explanation: 'L = L₀√(1 − 0,36) = 1,00 · 0,8 = 0,80 m.',
  },
  {
    question: 'I hvilke retninger skjer lengdekontraksjon?',
    options: [
      'Bare langs bevegelsesretningen – tverrgående dimensjoner er uendret',
      'I alle retninger likt',
      'Bare på tvers av bevegelsesretningen',
      'Bare i vertikal retning',
    ],
    explanation: 'Lengdekontraksjonen virker kun i bevegelsesretningen. Et romskip som kontraheres i lengden, beholder sin høyde og bredde.',
  },
],

  'fysikk2-6-4': [
  {
    question: 'Hva uttrykker Einsteins ligning $E_0 = mc^2$?',
    options: [
      'At masse og energi er ekvivalente – hvileenergien er massen ganger lyshastigheten i annen',
      'At energi alltid beveger seg med lyshastigheten',
      'At masse øker lineært med hastigheten',
      'At kinetisk energi er ½mv²',
    ],
    explanation: 'E₀ = mc² sier at et objekt i ro har en hvileenergi proporsjonal med massen. Fordi c² ≈ 9·10¹⁶ m²/s² inneholder selv små masser enorm energi.',
  },
  {
    question: 'Hva er hvileenergien til 1 kg masse?',
    options: [
      'Ca. 9·10¹⁶ J',
      'Ca. 3·10⁸ J',
      'Ca. 9·10⁸ J',
      'Ca. 3·10¹⁶ J',
    ],
    explanation: 'E₀ = mc² = 1 · (3,00·10⁸)² = 9·10¹⁶ J – omtrent like mye som energiforbruket til en stor by over flere år.',
  },
  {
    question: 'Et elektron (hvileenergi 0,511 MeV) har Lorentzfaktor γ = 3. Hva er den kinetiske energien?',
    options: [
      'Ca. 1,02 MeV',
      'Ca. 1,53 MeV',
      'Ca. 0,51 MeV',
      'Ca. 0,17 MeV',
    ],
    explanation: 'E_k = (γ − 1)mc² = (3 − 1) · 0,511 MeV = 1,022 MeV ≈ 1,02 MeV.',
  },
  {
    question: 'Hva gjelder for en masseløs partikkel (m = 0), for eksempel et foton, ifølge relasjonen $E^2 = (pc)^2 + (mc^2)^2$?',
    options: [
      '$E = pc$ – energien er bevegelsesmengden ganger lyshastigheten',
      '$E = 0$ – masseløse partikler har ingen energi',
      '$E = mc^2$ – energien er lik hvileenergien',
      '$E = \\frac{1}{2}pv$ – som klassisk kinetisk energi',
    ],
    explanation: 'Med m = 0 reduseres relasjonen til E = pc. Fotoner har null hvilemasse, men både energi og bevegelsesmengde.',
  },
  {
    question: 'Hvorfor kan ingen partikkel med masse nå lyshastigheten?',
    options: [
      'Fordi den kinetiske energien $(\\gamma - 1)mc^2$ vokser mot uendelig når v nærmer seg c',
      'Fordi partikkelen smelter ved høye hastigheter',
      'Fordi friksjonen i rommet blir for stor',
      'Fordi massen blir null ved lyshastigheten',
    ],
    explanation: 'Når v → c går γ → ∞, og dermed E_k = (γ − 1)mc² → ∞. Det ville kreve uendelig mye energi å akselerere en massiv partikkel helt opp til c.',
  },
],

  'fysikk2-6-5': [
  {
    question: 'Hva sier ekvivalensprinsippet i generell relativitetsteori?',
    options: [
      'Virkningene av gravitasjon er lokalt uatskillelige fra virkningene av akselerasjon',
      'Masse og elektrisk ladning er ekvivalente størrelser',
      'Alle referansesystemer roterer like fort',
      'Tiden går likt overalt i universet',
    ],
    explanation: 'I et lite nok område av rom-tid kan ingen eksperimenter skille mellom å være i et gravitasjonsfelt og å være i et akselererende referansesystem.',
  },
  {
    question: 'Hvordan beskriver generell relativitetsteori gravitasjon?',
    options: [
      'Som krumning av rom-tiden forårsaket av masse og energi',
      'Som en kraft som virker øyeblikkelig over avstand',
      'Som utveksling av fotoner mellom masser',
      'Som magnetisk tiltrekning mellom himmellegemer',
    ],
    explanation: 'I generell relativitetsteori er gravitasjon ikke en kraft, men en geometrisk effekt: masse og energi krummer rom-tiden, og legemer følger de retteste mulige banene i den krumme geometrien.',
  },
  {
    question: 'Hva er Schwarzschild-radien til et svart hull?',
    options: [
      '$r_s = \\frac{2GM}{c^2}$ – grensen der unnslipningshastigheten blir lik lyshastigheten',
      '$r_s = \\frac{GM}{c}$ – avstanden der lyset bøyes 90 grader',
      '$r_s = \\frac{c^2}{2GM}$ – den inverse av massens krumning',
      '$r_s = \\frac{GM}{2c^2}$ – halvparten av hendelseshorisonten',
    ],
    explanation: 'Schwarzschild-radien r_s = 2GM/c² definerer hendelseshorisonten. Innenfor denne kan verken masse, lys eller informasjon unnslippe.',
  },
  {
    question: 'Hva er gravitasjonell tidsforlengelse?',
    options: [
      'Klokker nær en stor masse går saktere enn klokker lenger unna',
      'Klokker nær en stor masse går fortere enn klokker lenger unna',
      'Tiden stopper helt på jordoverflaten',
      'Alle klokker går likt uansett gravitasjonsfelt',
    ],
    explanation: 'Generell relativitetsteori forutsier at tiden går saktere dypere i et gravitasjonsfelt. GPS-satellitter må korrigere for dette for å gi riktig posisjon.',
  },
  {
    question: 'Hva er hendelseshorisonten til et svart hull?',
    options: [
      'En grense i rom-tiden der unnslipningshastigheten overstiger lyshastigheten – ikke en fysisk overflate',
      'Den faste overflaten til det svarte hullet',
      'Punktet i sentrum der all massen er samlet',
      'Den ytterste banen en planet kan ha rundt hullet',
    ],
    explanation: 'Hendelseshorisonten ved r_s er ingen fysisk overflate, men en grense i rom-tid: innenfor den kan ingenting, heller ikke lys, slippe ut.',
  },
],

  'fysikk2-7-1': [
  {
    question: 'Hva er energien til et foton med frekvens $f$?',
    options: [
      '$E = hf$, der h er Plancks konstant',
      '$E = \\frac{h}{f}$, der h er Plancks konstant',
      '$E = \\frac{1}{2}hf^2$',
      '$E = hcf$',
    ],
    explanation: 'Fotonenergien er E = hf = hc/λ, med h = 6,626·10⁻³⁴ J·s. Høyere frekvens gir mer energirike fotoner.',
  },
  {
    question: 'Hva sier Einsteins ligning for den fotoelektriske effekten?',
    options: [
      '$E_k = hf - W_0$ – fotonets energi minus arbeidsfunksjonen blir elektronets maksimale kinetiske energi',
      '$E_k = hf + W_0$ – fotonets energi pluss arbeidsfunksjonen',
      '$E_k = W_0 - hf$ – arbeidsfunksjonen minus fotonets energi',
      '$E_k = \\frac{hf}{W_0}$ – forholdet mellom fotonenergi og arbeidsfunksjon',
    ],
    explanation: 'Fotonet gir hele energien hf til ett elektron. W₀ brukes til å frigjøre elektronet fra metallet, og resten blir kinetisk energi: E_k = hf − W₀.',
  },
  {
    question: 'Hva er energien til et foton med frekvens 1,0·10¹⁵ Hz? (h = 6,626·10⁻³⁴ J·s)',
    options: [
      'Ca. 6,6·10⁻¹⁹ J (≈ 4,1 eV)',
      'Ca. 6,6·10⁻³⁴ J',
      'Ca. 1,5·10⁻¹⁹ J',
      'Ca. 6,6·10⁻¹⁵ J',
    ],
    explanation: 'E = hf = 6,626·10⁻³⁴ · 1,0·10¹⁵ = 6,6·10⁻¹⁹ J. Delt på 1,602·10⁻¹⁹ J/eV gir det ca. 4,1 eV.',
  },
  {
    question: 'Hva er grensefrekvensen $f_0$ for et metall med arbeidsfunksjon $W_0$?',
    options: [
      '$f_0 = \\frac{W_0}{h}$',
      '$f_0 = W_0 \\cdot h$',
      '$f_0 = \\frac{h}{W_0}$',
      '$f_0 = \\frac{c}{W_0}$',
    ],
    explanation: 'Ved grensefrekvensen er fotonenergien akkurat nok til å frigjøre elektronet: hf₀ = W₀, altså f₀ = W₀/h.',
  },
  {
    question: 'Lys med frekvens under grensefrekvensen treffer et metall. Hva skjer hvis vi øker lysintensiteten kraftig?',
    options: [
      'Det frigjøres fortsatt ingen elektroner – hvert enkelt foton har for lite energi',
      'Elektroner frigjøres når intensiteten blir høy nok',
      'Elektroner frigjøres, men med lavere fart',
      'Metallet blir negativt ladet',
    ],
    explanation: 'Den fotoelektriske effekten skjer foton for foton. Økt intensitet gir flere fotoner, men hvert foton har fortsatt energi hf < W₀ og kan ikke frigjøre elektroner. Dette kunne ikke bølgemodellen forklare.',
  },
],

  'fysikk2-7-2': [
  {
    question: 'Hva er bevegelsesmengden til et foton med bølgelengde $\\lambda$?',
    options: [
      '$p = \\frac{h}{\\lambda}$',
      '$p = h\\lambda$',
      '$p = \\frac{\\lambda}{h}$',
      '$p = mc$, der m er fotonets hvilemasse',
    ],
    explanation: 'Fotonets bevegelsesmengde er p = E/c = h/λ. Fotonet har null hvilemasse, men likevel bevegelsesmengde fordi det beveger seg med lyshastigheten.',
  },
  {
    question: 'Hva sier Bohrs komplementaritetsprinsipp?',
    options: [
      'Bølge- og partikkelegenskapene er komplementære og kan aldri observeres samtidig i samme eksperiment',
      'Lys er alltid både bølge og partikkel samtidig i samme måling',
      'Lys er bølge om dagen og partikkel om natten',
      'Bølgeegenskapene gjelder bare for lyd, partikkelegenskapene bare for lys',
    ],
    explanation: 'Komplementaritetsprinsippet (1928): bølge- og partikkelbildet utfyller hverandre, men i et gitt eksperiment observeres bare det ene. Begge trengs for en fullstendig beskrivelse.',
  },
  {
    question: 'Hva viser Comptoneffekten?',
    options: [
      'At fotoner har bevegelsesmengde og kolliderer med elektroner som partikler',
      'At lys aldri kan oppføre seg som partikler',
      'At elektroner ikke kan vekselvirke med stråling',
      'At bølgelengden minker når fotonet spres på et elektron',
    ],
    explanation: 'I Comptonspredning kolliderer et foton med et elektron og overfører energi og bevegelsesmengde. Det spredte fotonet får lengre bølgelengde – et klart partikkelfenomen.',
  },
  {
    question: 'Hva er bevegelsesmengden til et foton med bølgelengde 500 nm?',
    options: [
      'Ca. 1,3·10⁻²⁷ kg·m/s',
      'Ca. 3,3·10⁻⁴⁰ kg·m/s',
      'Ca. 1,3·10⁻³⁶ kg·m/s',
      'Ca. 2,7·10⁻²⁵ kg·m/s',
    ],
    explanation: 'p = h/λ = 6,626·10⁻³⁴ / 5,00·10⁻⁷ ≈ 1,3·10⁻²⁷ kg·m/s.',
  },
  {
    question: 'Ved hvilken spredningsvinkel θ er bølgelengdeendringen i Comptonspredning størst?',
    options: [
      'θ = 180° – fotonet spres rett bakover',
      'θ = 0° – fotonet fortsetter rett frem',
      'θ = 90° – fotonet spres vinkelrett',
      'Endringen er like stor for alle vinkler',
    ],
    explanation: 'Δλ = (h/m_e c)(1 − cos θ). Ved θ = 180° er (1 − cos θ) = 2, som gir maksimal endring Δλ = 2h/(m_e c).',
  },
],

  'fysikk2-7-3': [
  {
    question: 'Hva er de Broglie-bølgelengden til en partikkel med bevegelsesmengde $p$?',
    options: [
      '$\\lambda = \\frac{h}{p}$',
      '$\\lambda = hp$',
      '$\\lambda = \\frac{p}{h}$',
      '$\\lambda = \\frac{h}{E}$',
    ],
    explanation: 'de Broglies hypotese (1924): enhver partikkel med bevegelsesmengde p har en tilknyttet bølgelengde λ = h/p = h/(mv).',
  },
  {
    question: 'Hva er de Broglie-bølgelengden til et elektron med fart 1,0·10⁶ m/s? (m_e = 9,109·10⁻³¹ kg)',
    options: [
      'Ca. 7,3·10⁻¹⁰ m',
      'Ca. 7,3·10⁻¹³ m',
      'Ca. 1,4·10⁻⁹ m',
      'Ca. 6,6·10⁻²⁸ m',
    ],
    explanation: 'λ = h/(mv) = 6,626·10⁻³⁴/(9,109·10⁻³¹ · 1,0·10⁶) ≈ 7,3·10⁻¹⁰ m – omtrent på størrelse med atomavstander, derfor kan elektroner diffrakteres i krystaller.',
  },
  {
    question: 'Hvorfor observerer vi ikke bølgeegenskaper hos makroskopiske objekter som en fotball?',
    options: [
      'Fordi de Broglie-bølgelengden blir ekstremt liten når massen er stor',
      'Fordi de Broglies hypotese bare gjelder elektroner',
      'Fordi fotballer beveger seg for sakte til å ha bølgelengde',
      'Fordi bølgelengden til store objekter er for stor til å måles',
    ],
    explanation: 'λ = h/(mv). Med stor masse blir bølgelengden ufattelig liten (typisk ~10⁻³⁴ m for en ball), langt mindre enn noe vi kan observere diffraksjonsfenomener med.',
  },
  {
    question: 'Hva er de Broglie-bølgelengden til et elektron som akselereres gjennom potensialdifferansen $V$?',
    options: [
      '$\\lambda = \\frac{h}{\\sqrt{2m_e eV}}$',
      '$\\lambda = \\frac{h}{m_e eV}$',
      '$\\lambda = \\frac{\\sqrt{2m_e eV}}{h}$',
      '$\\lambda = \\frac{h}{2m_e eV^2}$',
    ],
    explanation: 'Elektronet får kinetisk energi eV = p²/(2m_e), så p = √(2m_e eV) og dermed λ = h/√(2m_e eV).',
  },
  {
    question: 'Hvilket eksperiment bekreftet de Broglies hypotese om materiebølger?',
    options: [
      'Elektrondiffraksjon i krystaller (Davisson og Germer)',
      'Oljedråpeforsøket til Millikan',
      'Rutherfords gullfolieeksperiment',
      'Michelson-Morley-eksperimentet',
    ],
    explanation: 'Davisson og Germer (1927) viste at elektroner diffrakteres av et nikkelkrystall akkurat som bølger, med bølgelengde i samsvar med λ = h/p.',
  },
],

  'fysikk2-7-4': [
  {
    question: 'Hva sier Heisenbergs usikkerhetsrelasjon for posisjon og bevegelsesmengde?',
    options: [
      '$\\Delta x \\cdot \\Delta p \\geq \\frac{\\hbar}{2}$ – produktet av usikkerhetene har en nedre grense',
      '$\\Delta x \\cdot \\Delta p \\leq \\frac{\\hbar}{2}$ – produktet av usikkerhetene har en øvre grense',
      '$\\Delta x + \\Delta p \\geq \\frac{\\hbar}{2}$ – summen av usikkerhetene har en nedre grense',
      '$\\Delta x = \\Delta p$ – usikkerhetene er alltid like store',
    ],
    explanation: 'Δx·Δp ≥ ħ/2. Jo mer presist vi kjenner posisjonen, desto mer usikker er bevegelsesmengden – og omvendt.',
  },
  {
    question: 'Hva er den dypeste betydningen av usikkerhetsrelasjonen?',
    options: [
      'Den er en fundamental egenskap ved naturen, ikke en begrensning ved måleinstrumentene',
      'Den skyldes at måleinstrumentene våre foreløpig er for dårlige',
      'Den gjelder bare når vi måler med synlig lys',
      'Den gjelder bare for veldig varme partikler',
    ],
    explanation: 'Usikkerhetsrelasjonen er prinsipiell: en partikkel har ikke samtidig veldefinert posisjon og bevegelsesmengde. Bedre instrumenter kan aldri omgå den.',
  },
  {
    question: 'Et elektron er lokalisert med usikkerhet Δx = 1,0·10⁻¹⁰ m. Hva er minste usikkerhet i bevegelsesmengden? (ħ = 1,055·10⁻³⁴ J·s)',
    options: [
      'Ca. 5,3·10⁻²⁵ kg·m/s',
      'Ca. 1,1·10⁻²⁴ kg·m/s',
      'Ca. 5,3·10⁻⁴⁴ kg·m/s',
      'Ca. 6,6·10⁻²⁴ kg·m/s',
    ],
    explanation: 'Δp ≥ ħ/(2Δx) = 1,055·10⁻³⁴/(2 · 1,0·10⁻¹⁰) ≈ 5,3·10⁻²⁵ kg·m/s.',
  },
  {
    question: 'Hva følger av energi-tid-usikkerhetsrelasjonen $\\Delta E \\cdot \\Delta t \\geq \\hbar/2$?',
    options: [
      'En tilstand med kort levetid har stor usikkerhet i energien',
      'En tilstand med kort levetid har liten usikkerhet i energien',
      'Energien er alltid eksakt bestemt uansett levetid',
      'Tiden står stille for ustabile partikler',
    ],
    explanation: 'Kort Δt tvinger frem stor ΔE. Derfor har kortlivede eksiterte tilstander og ustabile partikler brede energifordelinger (brede spektrallinjer).',
  },
  {
    question: 'Hva er sammenhengen mellom $\\hbar$ og Plancks konstant $h$?',
    options: [
      '$\\hbar = \\frac{h}{2\\pi}$',
      '$\\hbar = 2\\pi h$',
      '$\\hbar = \\frac{h}{2}$',
      '$\\hbar = h^2$',
    ],
    explanation: 'Den reduserte Plancks konstant er ħ = h/(2π) ≈ 1,055·10⁻³⁴ J·s.',
  },
],

  'fysikk2-7-5': [
  {
    question: 'Hva er energien til den n-te tilstanden i hydrogenatomet ifølge Bohrs modell?',
    options: [
      '$E_n = -\\frac{13{,}6 \\text{ eV}}{n^2}$',
      '$E_n = -13{,}6 \\text{ eV} \\cdot n^2$',
      '$E_n = \\frac{13{,}6 \\text{ eV}}{n}$',
      '$E_n = -\\frac{13{,}6 \\text{ eV}}{n}$',
    ],
    explanation: 'E_n = −13,6 eV/n². Det negative fortegnet betyr at elektronet er bundet. Grunntilstanden (n = 1) har lavest energi, E₁ = −13,6 eV.',
  },
  {
    question: 'Hva er energien til hydrogenatomets første eksiterte tilstand (n = 2)?',
    options: [
      '−3,4 eV',
      '−6,8 eV',
      '−27,2 eV',
      '+3,4 eV',
    ],
    explanation: 'E₂ = −13,6/2² = −13,6/4 = −3,4 eV.',
  },
  {
    question: 'Hvilken energi har fotonet som sendes ut ved overgangen fra n = 2 til n = 1 i hydrogen?',
    options: [
      '10,2 eV',
      '13,6 eV',
      '3,4 eV',
      '17,0 eV',
    ],
    explanation: 'ΔE = E₂ − E₁ = −3,4 − (−13,6) = 10,2 eV. Fotonet bærer bort akkurat energiforskjellen mellom nivåene.',
  },
  {
    question: 'Hvordan vokser baneradiene i Bohrs modell med kvantetallet n?',
    options: [
      '$r_n = n^2 a_0$ – radien vokser med kvadratet av n',
      '$r_n = n \\cdot a_0$ – radien vokser lineært med n',
      '$r_n = a_0/n^2$ – radien minker med kvadratet av n',
      '$r_n = a_0 \\cdot 2^n$ – radien dobles for hvert nivå',
    ],
    explanation: 'r_n = n²a₀, der a₀ = 0,0529 nm er Bohr-radien. r₂ = 4a₀, r₃ = 9a₀ osv.',
  },
  {
    question: 'Hva sier Bohrs første postulat om elektronene i atomet?',
    options: [
      'Elektronet kan bare være i bestemte stasjonære baner, der det ikke sender ut stråling',
      'Elektronet sender kontinuerlig ut stråling mens det går i bane',
      'Elektronet kan ha hvilken som helst baneradius rundt kjernen',
      'Elektronet står stille i faste posisjoner rundt kjernen',
    ],
    explanation: 'I de stasjonære tilstandene stråler ikke elektronet, selv om det akselererer – i strid med klassisk elektromagnetisme. Stråling sendes bare ut ved overganger mellom nivåer.',
  },
],

  'fysikk2-7-6': [
  {
    question: 'Hvilken kvantemekanisk prosess er grunnlaget for laseren?',
    options: [
      'Stimulert emisjon – et innkommende foton utløser et identisk foton fra et eksitert atom',
      'Spontan emisjon – atomer sender ut fotoner i tilfeldige retninger',
      'Absorpsjon – atomer fanger opp fotoner og varmes opp',
      'Tunnelering – fotoner trenger gjennom energibarrierer',
    ],
    explanation: 'LASER står for Light Amplification by Stimulated Emission of Radiation. Ved stimulert emisjon får et foton et eksitert atom til å sende ut et identisk foton – samme frekvens, fase og retning.',
  },
  {
    question: 'Hva bestemmer fargen på lyset fra en LED?',
    options: [
      'Båndgapet $E_g$ i halvledermaterialet',
      'Størrelsen på LED-brikken',
      'Strømstyrken gjennom dioden',
      'Temperaturen i rommet',
    ],
    explanation: 'Ved rekombinasjon av elektroner og hull i p-n-overgangen frigis energi omtrent lik båndgapet som et foton: E_g ≈ hf. Ulike halvledermaterialer gir derfor ulike farger.',
  },
  {
    question: 'En LED har båndgap 2,0 eV. Omtrent hvilken bølgelengde har lyset den sender ut?',
    options: [
      'Ca. 620 nm (rødoransje)',
      'Ca. 310 nm (ultrafiolett)',
      'Ca. 1240 nm (infrarødt)',
      'Ca. 199 nm (ultrafiolett)',
    ],
    explanation: 'λ = hc/E = (6,626·10⁻³⁴ · 3,00·10⁸)/(2,0 · 1,602·10⁻¹⁹) ≈ 6,2·10⁻⁷ m = 620 nm.',
  },
  {
    question: 'Hva kreves for å oppnå laservirkning i et medium?',
    options: [
      'Populasjonsinversjon – flere atomer i eksitert tilstand enn i grunntilstanden',
      'At alle atomene er i grunntilstanden',
      'At mediet er nedkjølt til det absolutte nullpunkt',
      'At lyset sendes gjennom et prisme',
    ],
    explanation: 'Normalt er de fleste atomer i grunntilstanden. Ved å «pumpe» energi inn oppnås populasjonsinversjon, slik at stimulert emisjon dominerer over absorpsjon og lyset forsterkes.',
  },
  {
    question: 'Hva er kvantemekanisk tunnelering?',
    options: [
      'At en partikkel har en viss sannsynlighet for å passere en energibarriere den klassisk sett ikke har nok energi til å overvinne',
      'At partikler graver fysiske tunneler gjennom materialer',
      'At partikler alltid reflekteres av energibarrierer',
      'At partikler får ekstra energi fra barrieren slik at de kommer over',
    ],
    explanation: 'I kvantefysikken kan partikkelens bølgefunksjon strekke seg gjennom en barriere, slik at partikkelen kan dukke opp på andre siden selv med for lav energi – umulig i klassisk fysikk.',
  },
],

  'fysikk2-8-1': [
  {
    question: 'Hva er forskjellen på uavhengig og avhengig variabel i et eksperiment?',
    options: [
      'Den uavhengige variabelen endrer vi bevisst, den avhengige observerer og måler vi',
      'Den avhengige variabelen endrer vi bevisst, den uavhengige observerer vi',
      'Begge variablene holdes konstante gjennom forsøket',
      'Den uavhengige variabelen er alltid tid, den avhengige er alltid lengde',
    ],
    explanation: 'Vi manipulerer den uavhengige variabelen (påvirkningsvariabelen) og måler responsen i den avhengige variabelen. Kontrollvariabler holdes konstante.',
  },
  {
    question: 'Hva er forskjellen på presisjon og nøyaktighet?',
    options: [
      'Presisjon er samsvar mellom gjentatte målinger, nøyaktighet er samsvar med den sanne verdien',
      'Presisjon er samsvar med den sanne verdien, nøyaktighet er samsvar mellom gjentatte målinger',
      'Begrepene betyr nøyaktig det samme',
      'Presisjon gjelder bare digitale instrumenter, nøyaktighet bare analoge',
    ],
    explanation: 'Presisjon påvirkes av tilfeldige feil (spredning mellom målinger), mens nøyaktighet påvirkes av systematiske feil (avvik fra sann verdi).',
  },
  {
    question: 'En lengde måles til 20,0 cm med absolutt usikkerhet 0,5 cm. Hva er den prosentvise (relative) usikkerheten?',
    options: [
      '2,5 %',
      '0,5 %',
      '5,0 %',
      '0,25 %',
    ],
    explanation: 'Relativ usikkerhet = Δx/x = 0,5/20,0 = 0,025 = 2,5 %.',
  },
  {
    question: 'Hvordan endres standardfeilen (usikkerheten i gjennomsnittet) når antall målinger N øker?',
    options: [
      'Den minker som $\\frac{s}{\\sqrt{N}}$ – fire ganger flere målinger halverer usikkerheten',
      'Den øker proporsjonalt med N',
      'Den er uavhengig av antall målinger',
      'Den halveres hver gang vi gjør én ekstra måling',
    ],
    explanation: 'Standardfeilen er Δx̄ = s/√N. Siden den avtar med kvadratroten av N, må vi firedoble antall målinger for å halvere usikkerheten.',
  },
  {
    question: 'Hva betyr det at en vitenskapelig hypotese må være falsifiserbar?',
    options: [
      'Det må være mulig å tenke seg observasjoner som kunne motbevise den',
      'Den må være bevist å være falsk',
      'Den må kunne bevises en gang for alle',
      'Den må være formulert på latin',
    ],
    explanation: 'Falsifiserbarhet betyr at hypotesen kan testes: det finnes mulige eksperimentresultater som ville vist at den er gal. Utsagn som ikke kan motbevises, er ikke vitenskapelige hypoteser.',
  },
],

  'fysikk2-8-2': [
  {
    question: 'Hva gjør minste kvadraters metode i lineær regresjon?',
    options: [
      'Den finner linjen som minimerer summen av de kvadrerte avvikene mellom datapunktene og linjen',
      'Den finner linjen som går gjennom flest mulig datapunkter',
      'Den finner linjen som maksimerer avstanden til datapunktene',
      'Den fjerner de minste datapunktene fra datasettet',
    ],
    explanation: 'Minste kvadraters metode minimerer S = Σ(yᵢ − axᵢ − b)², altså summen av de kvadrerte residualene, og gir beste lineære tilpasning y = ax + b.',
  },
  {
    question: 'Hva forteller bestemmelseskoeffisienten R² om en modell?',
    options: [
      'Andelen av variasjonen i den avhengige variabelen som forklares av modellen',
      'Antall datapunkter som ble brukt i regresjonen',
      'Den absolutte usikkerheten i stigningstallet',
      'Hvor mange frihetsgrader modellen har',
    ],
    explanation: 'R² = 1 betyr perfekt tilpasning, R² = 0 betyr at modellen ikke forklarer noe av variasjonen. For lineære modeller er R² = r², kvadratet av korrelasjonskoeffisienten.',
  },
  {
    question: 'Du mistenker sammenhengen $y = ax^n$. Hvilket plott gir en rett linje, og hva er stigningstallet?',
    options: [
      'ln y mot ln x, med stigningstall n',
      'y mot x, med stigningstall a',
      'ln y mot x, med stigningstall n',
      'y mot ln x, med stigningstall a',
    ],
    explanation: 'Tar vi logaritmen: ln y = n·ln x + ln a. Plottet ln y mot ln x gir en rett linje med stigningstall n og skjæring ln a.',
  },
  {
    question: 'Du mistenker eksponentiell sammenheng $y = ae^{bx}$. Hvilket plott lineariserer dataene?',
    options: [
      'ln y mot x – gir rett linje med stigningstall b',
      'ln y mot ln x – gir rett linje med stigningstall b',
      'y mot ln x – gir rett linje med stigningstall a',
      'y² mot x – gir rett linje med stigningstall b',
    ],
    explanation: 'ln y = bx + ln a, så ln y plottet mot x gir en rett linje med stigningstall b og skjæring ln a.',
  },
  {
    question: 'Hva er et residual i regresjonsanalyse?',
    options: [
      'Avviket mellom en målt verdi og verdien modellen forutsier',
      'Det største datapunktet i datasettet',
      'Usikkerheten i måleinstrumentet',
      'Gjennomsnittet av alle målingene',
    ],
    explanation: 'Residualet for datapunkt i er yᵢ − (axᵢ + b): forskjellen mellom observert verdi og modellens prediksjon. Minste kvadraters metode minimerer summen av kvadrerte residualer.',
  },
],

  'fysikk2-8-3': [
  {
    question: 'Hva beskriver Standardmodellen i partikkelfysikk?',
    options: [
      'Alle kjente elementærpartikler og tre av de fire fundamentale kreftene',
      'Alle kjente elementærpartikler og alle fire fundamentale krefter, inkludert gravitasjon',
      'Bare oppbygningen av protoner og nøytroner',
      'Universets ekspansjon siden Big Bang',
    ],
    explanation: 'Standardmodellen omfatter 6 kvarker, 6 leptoner og kraftbærende bosoner, og beskriver elektromagnetisk, svak og sterk kraft – men ikke gravitasjon.',
  },
  {
    question: 'Hvilken fundamental kraft er IKKE inkludert i Standardmodellen?',
    options: [
      'Gravitasjon',
      'Den sterke kjernekraften',
      'Den svake kjernekraften',
      'Den elektromagnetiske kraften',
    ],
    explanation: 'Standardmodellen beskriver tre krefter kvantemekanisk, men gravitasjonen har så langt ikke latt seg forene med kvantefeltteorien.',
  },
  {
    question: 'Hva er Higgs-feltets rolle ifølge Standardmodellen?',
    options: [
      'Det gir masse til de fundamentale partiklene',
      'Det holder protonene sammen i kjernen',
      'Det får universet til å ekspandere',
      'Det skaper elektrisk ladning hos partiklene',
    ],
    explanation: 'Higgs-feltet gjennomstrømmer universet og gir masse til fundamentale partikler. Uten det ville alle partikler vært masseløse. Higgs-bosonet ble påvist ved CERN i 2012.',
  },
  {
    question: 'Hva er gravitasjonsbølger?',
    options: [
      'Krusninger i rom-tiden skapt av akselererte masser, som brer seg med lyshastigheten',
      'Lydbølger som brer seg gjennom jordens indre',
      'Elektromagnetiske bølger fra svarte hull',
      'Tidevannsbølger forårsaket av månen',
    ],
    explanation: 'Einstein forutsa gravitasjonsbølger i 1916. De ble først direkte observert i 2015 (LIGO), fra to svarte hull som smeltet sammen.',
  },
  {
    question: 'Hva gjøres ved Large Hadron Collider (LHC) ved CERN?',
    options: [
      'Protoner akselereres til nær lyshastighet og kollideres for å studere elementærpartikler',
      'Lys sendes gjennom 27 km lange fiberkabler for å måle lyshastigheten',
      'Atomkjerner spaltes for å produsere elektrisk kraft',
      'Satellitter skytes opp for å studere kosmisk stråling',
    ],
    explanation: 'LHC er en 27 km lang sirkulær akselerator der protoner kollideres med energier opptil 13,6 TeV. Her ble blant annet Higgs-bosonet oppdaget i 2012.',
  },
],

  'fysikk2-8-4': [
  {
    question: 'Hva står IMRaD for i vitenskapelig rapportskriving?',
    options: [
      'Introduksjon, Metode, Resultater og Diskusjon',
      'Idé, Måling, Rapport og Dokumentasjon',
      'Innledning, Materiale, Referanser og Data',
      'Introduksjon, Modell, Regresjon og Drøfting',
    ],
    explanation: 'IMRaD (Introduction, Methods, Results and Discussion) er den internasjonale standardstrukturen for vitenskapelige artikler og rapporter.',
  },
  {
    question: 'Hva kjennetegner en god problemstilling for et fysikkprosjekt?',
    options: [
      'Den er avgrenset og testbar, for eksempel «Hvordan avhenger svingetiden av pendellengden?»',
      'Den er så bred som mulig, for eksempel «Hva er fysikk?»',
      'Den har et svar som allerede står i læreboken',
      'Den kan ikke undersøkes med målinger',
    ],
    explanation: 'En god problemstilling er avgrenset (konkret nok til å besvares) og testbar (kan undersøkes med målinger og analyse).',
  },
  {
    question: 'Hva skal metodedelen i en vitenskapelig rapport inneholde?',
    options: [
      'En beskrivelse av gjennomføringen som er detaljert nok til at andre kan gjenta forsøket',
      'Bare en liste over utstyret som ble brukt',
      'Konklusjonene fra eksperimentet',
      'En diskusjon av feilkildene og deres betydning',
    ],
    explanation: 'Metodedelen skal gjøre eksperimentet reproduserbart: oppsett, utstyr, fremgangsmåte og målinger beskrives så andre kan gjenta det og kontrollere resultatene.',
  },
  {
    question: 'Hvordan bør Wikipedia brukes som kilde i et fysikkprosjekt?',
    options: [
      'Som utgangspunkt for å finne informasjon, men de oppgitte kildene bør alltid sjekkes',
      'Som hovedkilde som alltid kan siteres direkte',
      'Aldri – Wikipedia inneholder bare feil',
      'Bare hvis artikkelen er skrevet på norsk',
    ],
    explanation: 'Wikipedia kan gi god oversikt og pekere videre, men er ikke en primærkilde. God kildekritikk innebærer å vurdere hvem som har skrevet teksten og kontrollere originalkildene.',
  },
  {
    question: 'Hva er et sammendrag (abstract) i en rapport?',
    options: [
      'En kort oppsummering (typisk 100–200 ord) av hele rapporten, inkludert resultater',
      'En detaljert gjennomgang av alle målingene',
      'Det samme som innledningen',
      'En liste over alle referansene',
    ],
    explanation: 'Sammendraget er en kompakt oppsummering av problemstilling, metode, hovedresultater og konklusjon, slik at leseren raskt ser hva rapporten handler om.',
  },
],

};

export default quizData_fysikk;
