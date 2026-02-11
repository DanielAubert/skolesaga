import type { QuizQuestion } from './quiz-data';

const quizData_fysikk: Record<string, QuizQuestion[]> = {
  'fysikk-2-1-1': [
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


  'fysikk-2-1-2': [
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


  'fysikk-2-1-3': [
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


  'fysikk-2-1-4': [
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


  'fysikk-2-1-5': [
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


  'fysikk-2-2-1': [
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


  'fysikk-2-2-2': [
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


  'fysikk-2-2-3': [
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


  'fysikk-2-2-4': [
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


  'fysikk-2-2-5': [
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


  'fysikk-2-3-1': [
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


  'fysikk-2-3-2': [
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


  'fysikk-2-3-3': [
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


  'fysikk-2-3-4': [
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


  'fysikk-2-3-5': [
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


  'fysikk-2-4-1': [
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


  'fysikk-2-4-2': [
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


  'fysikk-2-4-3': [
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


  'fysikk-2-4-4': [
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


  'fysikk-2-4-5': [
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


  'fysikk-2-5-1': [
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


  'fysikk-2-5-2': [
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

};

export default quizData_fysikk;
