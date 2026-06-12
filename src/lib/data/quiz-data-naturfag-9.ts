import type { QuizQuestion } from './quiz-data';

const quizData_naturfag_9: Record<string, QuizQuestion[]> = {
  'naturfag-9-1-1': [
  {
    question: 'Hvilke baser parer sammen i DNA?',
    options: ['Adenin med Tymin, og Guanin med Cytosin', 'Adenin med Guanin, og Tymin med Cytosin', 'Adenin med Cytosin, og Guanin med Tymin', 'Alle basene kan pare med alle'],
    explanation: 'I DNA parer A alltid med T (to hydrogenbindinger) og G alltid med C (tre hydrogenbindinger). Dette kalles komplementær basepar.',
  },
  {
    question: 'Hvor mange kromosomer har mennesker?',
    options: ['46 (23 par)', '23 (enkle)', '48 (24 par)', '44 (22 par)'],
    explanation: 'Mennesker har 46 kromosomer organisert i 23 par. Vi arver ett kromosom i hvert par fra mor og ett fra far.',
  },
  {
    question: 'Hva er et gen?',
    options: ['Et avsnitt av DNA med oppskrift for ett protein', 'Et helt kromosom', 'Alle kromosomene i en celle', 'Et protein'],
    explanation: 'Et gen er et bestemt avsnitt av DNA som inneholder koden for å lage ett spesifikt protein eller styre en egenskap.',
  },
  {
    question: 'Hva menes med at DNA har en "dobbel helix"-struktur?',
    options: ['To tråder som vrir seg rundt hverandre som en vindeltrapp', 'En enkel rett tråd', 'En sirkelformet ring', 'Fire parallelle tråder'],
    explanation: 'DNA består av to komplementære tråder som vrir seg rundt hverandre og danner en struktur som ligner en vindeltrapp.',
  },
  {
    question: 'Hvis en DNA-tråd har sekvensen AATGC, hva er sekvensen på den komplementære tråden?',
    options: ['TTACG', 'AATGC', 'GCATT', 'CGTTA'],
    explanation: 'A parer med T og G parer med C. Så A→T, A→T, T→A, G→C, C→G gir TTACG.',
  },
],


  'naturfag-9-1-2': [
  {
    question: 'Hva betyr det å være heterozygot for en egenskap?',
    options: ['Å ha to ulike alleler (f.eks. Bb)', 'Å ha to like alleler (f.eks. BB)', 'Å mangle genet helt', 'Å ha for mange kromosomer'],
    explanation: 'Heterozygot betyr at du har to forskjellige varianter (alleler) av et gen - for eksempel ett dominant og ett recessivt allel.',
  },
  {
    question: 'Hvis brunt hår (B) er dominant over blondt (b), hvilken hårfarge har en person med genotypen Bb?',
    options: ['Brunt hår', 'Blondt hår', 'En blanding', 'Rødt hår'],
    explanation: 'Siden B (brunt) er dominant, vil det dominante allelet bestemme fenotypen. Personen får brunt hår selv om de også bærer b-allelet.',
  },
  {
    question: 'Begge foreldre har genotypen Bb. Hva er sannsynligheten for at barnet får genotypen bb?',
    options: ['25%', '50%', '75%', '100%'],
    explanation: 'Fra et Punnett-rute: BB(25%) + Bb(50%) + bb(25%). Sannsynligheten for bb er 1 av 4 = 25%.',
  },
  {
    question: 'Hva er en allel?',
    options: ['En variant av et gen', 'Et helt kromosom', 'En type protein', 'En celletype'],
    explanation: 'Alleler er ulike varianter av samme gen. For eksempel kan genet for øyenfarge ha allelet for brune øyne eller allelet for blå øyne.',
  },
  {
    question: 'Hvilken egenskap påvirkes av BÅDE arv og miljø?',
    options: ['Høyde', 'Blodtype', 'Antall fingre', 'Øyenfarge'],
    explanation: 'Høyde påvirkes av både gener (arv) og faktorer som ernæring og helse (miljø). Blodtype bestemmes kun av gener.',
  },
],


  'naturfag-9-2-1': [
  {
    question: 'Hva er naturlig utvalg?',
    options: ['Individer med fordelaktige egenskaper overlever og får flere avkom', 'Mennesker velger hvilke dyr som skal overleve', 'Organismer bestemmer selv hvordan de vil utvikle seg', 'Alle individer i en art overlever likt'],
    explanation: 'Naturlig utvalg er mekanismen bak evolusjon: individer med egenskaper som passer miljøet har større sjanse for å overleve og formere seg.',
  },
  {
    question: 'Hva er en tilpasning?',
    options: ['En arvelig egenskap som øker overlevelse og reproduksjon', 'En ferdighet dyret lærer i løpet av livet', 'En sykdom som påvirker arten', 'En endring som skjer hos ett individ'],
    explanation: 'Tilpasninger er arvelige egenskaper (som kamuflasje eller raske bein) som har utviklet seg gjennom naturlig utvalg fordi de øker overlevelse.',
  },
  {
    question: 'Hvilket utsagn om evolusjon er KORREKT?',
    options: ['Mennesker og sjimpanser deler en felles forfar', 'Mennesker stammer direkte fra sjimpanser', 'Evolusjon har et mål om å lage bedre arter', 'Enkeltindivider utvikler seg gjennom evolusjon'],
    explanation: 'Mennesker og sjimpanser er "søskenbarn" på evolusjonstreet - vi deler en felles forfar som levde for ca. 6-7 millioner år siden.',
  },
  {
    question: 'Hvorfor er antibiotikaresistens et bevis for evolusjon?',
    options: ['Bakterier med naturlig resistens overlever og formerer seg - naturlig utvalg i aksjon', 'Bakterier bestemmer seg for å bli resistente', 'Antibiotika gjør bakteriene sterkere', 'Bakterier lærer å motstå antibiotika'],
    explanation: 'Når antibiotikå brukes, overlever bare de få bakteriene som tilfeldigvis er resistente. Disse formerer seg, og populasjonen blir resistent.',
  },
  {
    question: 'Hva er IKKE et bevis for evolusjon?',
    options: ['Individer som endrer seg i løpet av livet', 'Fossilfunn som viser gradvise endringer', 'Anatomiske likheter mellom arter', 'DNA-likheter mellom beslektede arter'],
    explanation: 'Evolusjon skjer i populasjoner over generasjoner, ikke hos enkeltindivider. At du lærer å sykle er ikke evolusjon - det er læring.',
  },
],


  'naturfag-9-2-2': [
  {
    question: 'Hva definerer en biologisk art?',
    options: ['Organismer som kan få fruktbart avkom sammen', 'Alle dyr som ser like ut', 'Dyr som lever i samme område', 'Dyr med samme farge'],
    explanation: 'En art defineres biologisk som organismer som kan formere seg med hverandre og få fruktbart avkom.',
  },
  {
    question: 'Hva er vanligvis første steg i artsdannelse?',
    options: ['Geografisk isolasjon', 'Mutasjoner alene', 'Masseutryddelse', 'Klimaendring'],
    explanation: 'Artsdannelse starter ofte når populasjoner blir geografisk adskilt (f.eks. av en fjellkjede). De utvikler seg så uavhengig.',
  },
  {
    question: 'Hva viser "livets tre"?',
    options: ['Slektskapet mellom alle arter på jorden', 'Hvordan trær vokser', 'Matnettet i en skog', 'Næringskjeden i naturen'],
    explanation: 'Livets tre er en modell som viser evolusjonære slektskapsforhold - alle arter kan spores tilbake til felles forfedre.',
  },
  {
    question: 'Hvorfor kan ikke hest og esel få fruktbart avkom?',
    options: ['De er ulike arter med for forskjellig DNA', 'De liker ikke hverandre', 'De lever i ulike områder', 'De spiser ulik mat'],
    explanation: 'Selv om hest og esel kan parre seg og få avkom (muldyr), er muldyret ufruktbart. Dette viser at hest og esel er ulike arter.',
  },
  {
    question: 'Omtrent når oppsto det første livet på jorden?',
    options: ['Ca. 3,8 milliarder år siden', 'Ca. 1 million år siden', 'Ca. 65 millioner år siden', 'Ca. 6000 år siden'],
    explanation: 'De eldste fossile tegnene på liv er fra ca. 3,8 milliarder år siden. Livet har altså eksistert i mesteparten av jordens historie.',
  },
],


  'naturfag-9-3-1': [
  {
    question: 'Hva er enheten for elektrisk strøm?',
    options: ['Ampere (A)', 'Volt (V)', 'Ohm (Ω)', 'Watt (W)'],
    explanation: 'Elektrisk strøm måles i ampere (A). Volt er enheten for spenning, ohm for motstand, og watt for effekt.',
  },
  {
    question: 'Hva skjer med strømmen hvis motstanden øker, mens spenningen holdes konstant?',
    options: ['Strømmen synker', 'Strømmen øker', 'Strømmen forblir lik', 'Strømmen stopper helt'],
    explanation: 'Ifølge Ohms lov: I = U/R. Hvis R øker og U er konstant, må I synke. Høyere motstand = mindre strøm.',
  },
  {
    question: 'Hva er Ohms lov?',
    options: ['U = R × I', 'U = R / I', 'U = R + I', 'U = R - I'],
    explanation: 'Ohms lov sier at spenning (U) er lik motstand (R) ganger strøm (I). Denne loven er grunnleggende i elektrisitetslære.',
  },
  {
    question: 'En motstand på 50 Ω er koblet til 10 V. Hvor stor er strømmen?',
    options: ['0,2 A', '500 A', '5 A', '60 A'],
    explanation: 'I = U/R = 10 V / 50 Ω = 0,2 A. Bruk Ohms lov og sett inn verdiene.',
  },
  {
    question: 'Hva må til for at strøm skal flyte i en krets?',
    options: ['Kretsen må være lukket (uten brudd)', 'Kretsen må være åpen', 'Det må være mørkt', 'Det må være varmt'],
    explanation: 'Strøm kan bare flyte i en lukket krets - elektronene må ha en sammenhengende bane fra spenningskildens minuspol til pluspol.',
  },
],


  'naturfag-9-3-2': [
  {
    question: 'Hva er enheten for elektrisk effekt?',
    options: ['Watt (W)', 'Joule (J)', 'Ampere (A)', 'Volt (V)'],
    explanation: 'Effekt måles i watt (W). Effekt forteller hvor mye energi som omdannes per sekund. 1 W = 1 J/s.',
  },
  {
    question: 'Hva er formelen for elektrisk effekt?',
    options: ['P = U × I', 'P = U / I', 'P = U + I', 'P = U - I'],
    explanation: 'Effekt (P) er spenning (U) ganger strøm (I). Enheten blir volt × ampere = watt.',
  },
  {
    question: 'Hvor mye energi bruker en 100 W lyspære på 2 timer?',
    options: ['0,2 kWh', '200 kWh', '2 kWh', '50 kWh'],
    explanation: 'E = P × t = 100 W × 2 h = 200 Wh = 0,2 kWh. Husk å konvertere watt til kilowatt.',
  },
  {
    question: 'Hvilket apparat bruker typisk mest strøm?',
    options: ['Varmeovn', 'LED-lyspære', 'Laptop', 'Mobiltelefon'],
    explanation: 'Varmeovner bruker typisk 1000-3000 W fordi å lage varme krever mye energi. LED-pærer bruker bare 5-15 W.',
  },
  {
    question: 'Hva betyr kWh på strømregningen?',
    options: ['Kilowattime - energi forbrukt', 'Kilowatt per time - effekt', 'Tusen watt - strøm', 'Kilojoule - arbeid'],
    explanation: 'kWh (kilowattime) er en enhet for energi. 1 kWh = effekt på 1 kW brukt i 1 time = 3 600 000 joule.',
  },
],


  'naturfag-9-4-1': [
  {
    question: 'Hva er en produsent i et økosystem?',
    options: ['En organisme som lager egen mat via fotosyntese', 'Et dyr som spiser andre dyr', 'Et dyr som spiser planter', 'En organisme som bryter ned dødt materiale'],
    explanation: 'Produsenter (planter, alger) lager sin egen mat gjennom fotosyntese og er grunnlaget for alle næringskjeder.',
  },
  {
    question: 'Hvor mye energi overføres typisk til neste ledd i næringskjeden?',
    options: ['Ca. 10%', 'Ca. 50%', 'Ca. 90%', 'Ca. 100%'],
    explanation: 'Bare ca. 10% av energien overføres til neste nivå. Resten tapes som varme gjennom celleånding.',
  },
  {
    question: 'I næringskjeden Gras → Kanin → Rev → Ørn, hva er sekundærkonsumenten?',
    options: ['Rev', 'Kanin', 'Ørn', 'Gras'],
    explanation: 'Sekundærkonsumenten spiser primærkonsumenten. Kanin (primær) spiser gras, og rev (sekundær) spiser kanin.',
  },
  {
    question: 'Hva er et næringsnett?',
    options: ['Alle næringskjedene i et økosystem sammenkoblet', 'En enkel næringskjede', 'Bare plantene i et område', 'Et fiskenett'],
    explanation: 'Et næringsnett viser alle de overlappende næringskjedene i et økosystem - virkeligheten er mer kompleks enn enkle kjeder.',
  },
  {
    question: 'Hvorfor er det alltid færre rovdyr enn byttedyr?',
    options: ['Fordi bare 10% av energien overføres til neste nivå', 'Fordi rovdyr lever kortere', 'Fordi rovdyr spiser mindre', 'Fordi det er tilfeldig'],
    explanation: 'Siden bare ca. 10% av energien overføres til neste nivå, kan økosystemet ikke støtte like mange rovdyr som byttedyr.',
  },
],


  'naturfag-9-4-2': [
  {
    question: 'Hvilken prosess tar opp CO₂ fra atmosfæren?',
    options: ['Fotosyntese', 'Celleånding', 'Forbrenning', 'Nedbrytning'],
    explanation: 'Fotosyntesen tar opp CO₂ og bruker det til å lage glukose. Dette er hovedmåten karbon fjernes fra atmosfæren.',
  },
  {
    question: 'Hvordan påvirker forbrenning av fossilt brensel karbonkretsløpet?',
    options: ['Frigjør CO₂ som har vært lagret i millioner av år', 'Fjerner CO₂ fra atmosfæren', 'Har ingen effekt på kretsløpet', 'Øker mengden oksygen'],
    explanation: 'Fossilt brensel inneholder karbon som har vært lagret under bakken i millioner av år. Forbrenning frigjør dette som CO₂.',
  },
  {
    question: 'Hva er nitrogen fiksering?',
    options: ['Bakterier omdanner N₂ fra lufta til ammoniakk', 'Planter tar opp nitrogen direkte fra lufta', 'Nitrogen forsvinner fra atmosfæren', 'Dyr produserer nitrogen'],
    explanation: 'Nitrogenfiksering utføres av spesielle bakterier som kan omdanne N₂-gass til ammoniakk som planter kan bruke.',
  },
  {
    question: 'Hva er eutrofiering?',
    options: ['Overgjødsling av vann som fører til algeoppblomstring', 'Mangel på nitrogen i vann', 'Naturlig rensing av vann', 'For mye oksygen i vann'],
    explanation: 'Eutrofiering skjer når for mye næringsstoffer (ofte nitrogen fra gjødsel) havner i vann, noe som fører til algeoppblomstring og oksygenmangel.',
  },
  {
    question: 'Hvilke tre prosesser frigjør CO₂ til atmosfæren?',
    options: ['Celleånding, forbrenning og nedbrytning', 'Fotosyntese, regn og fordampning', 'Nitrifikasjon, denitrifikasjon og fiksering', 'Kondensasjon, nedbør og avrenning'],
    explanation: 'Celleånding (alle organismer), forbrenning (brann, kjøretøy) og nedbrytning (av dødt materiale) frigjør alle CO₂.',
  },
],


  'naturfag-9-5-1': [
  {
    question: 'Hvilken planet er størst i solsystemet?',
    options: ['Jupiter', 'Saturn', 'Neptun', 'Uranus'],
    explanation: 'Jupiter er den største planeten - over 1300 jordkloder ville fått plass inni den. Den er også en gassplanet.',
  },
  {
    question: 'Hvilke planeter regnes som steinplaneter?',
    options: ['Merkur, Venus, Jorda og Mars', 'Jupiter, Saturn, Uranus og Neptun', 'Merkur, Jupiter, Saturn og Neptun', 'Venus, Jorda, Saturn og Mars'],
    explanation: 'De fire innerste planetene (Merkur, Venus, Jorda, Mars) er steinplaneter med fast overflate. De fire ytre er gassplaneter.',
  },
  {
    question: 'Hvorfor er Pluto ikke lenger regnet som en planet?',
    options: ['Pluto har ikke ryddet banen sin for andre objekter', 'Pluto er for kald', 'Pluto har ingen måner', 'Pluto er for nær Sola'],
    explanation: 'I 2006 ble planetdefinisjonen endret. En planet må bl.a. ha ryddet nabolaget rundt banen sin - Pluto har ikke det.',
  },
  {
    question: 'Hva er en astronomisk enhet (AU)?',
    options: ['Avstanden fra Jorda til Sola (ca. 150 mill. km)', 'Solas diameter', 'Jordas omkrets', 'Avstanden til nærmeste stjerne'],
    explanation: '1 AU er gjennomsnittlig avstand fra Jorda til Sola, ca. 150 millioner km. Brukes for å måle avstander i solsystemet.',
  },
  {
    question: 'Hvilken planet er kjent for sine tydelige ringer?',
    options: ['Saturn', 'Jupiter', 'Uranus', 'Neptun'],
    explanation: 'Saturn er mest kjent for sine spektakulære ringsystemer, selv om alle gassplanetene har ringer.',
  },
],


  'naturfag-9-5-2': [
  {
    question: 'Hva forårsaker dag og natt?',
    options: ['Jordas rotasjon rundt egen akse', 'Jordas bane rundt Sola', 'Månens bevegelse', 'Solens bevegelse'],
    explanation: 'Jorda roterer rundt sin akse én gang i døgnet. Siden bare halvparten vender mot Sola, får vi dag og natt.',
  },
  {
    question: 'Hva er hovedårsaken til årstidene?',
    options: ['Jordas aksehelling på 23,5°', 'Varierende avstand til Sola', 'Månens påvirkning', 'Solens temperaturendringer'],
    explanation: 'Aksehellinger gjør at solstrålene treffer med ulik vinkel gjennom året - mer direkte om sommeren, mer skrått om vinteren.',
  },
  {
    question: 'Når kan det være solformørkelse?',
    options: ['Ved nymåne', 'Ved fullmåne', 'Ved halvmåne', 'Når som helst'],
    explanation: 'Solformørkelse skjer når Månen kommer mellom Jorda og Sola. Dette kan bare skje ved nymåne.',
  },
  {
    question: 'Når vi har sommer i Norge, hvilken årstid er det i Australia?',
    options: ['Vinter', 'Sommer', 'Vår', 'Høst'],
    explanation: 'Når nordlige halvkule heller mot Sola (norsk sommer), heller sørlige halvkule bort fra Sola (australsk vinter).',
  },
  {
    question: 'Hvorfor ser vi alltid samme side av Månen?',
    options: ['Månens rotasjonstid er lik tiden den bruker rundt Jorda', 'Månen roterer ikke', 'Jorda dekker den andre siden', 'Den andre siden er alltid mørk'],
    explanation: 'Månen bruker like lang tid på å rotere rundt egen akse som å gå rundt Jorda (ca. 27 døgn). Derfor ser vi alltid samme side.',
  },
],


  'naturfag-9-1-3': [
  {
    question: 'Hva er valenselektroner?',
    options: ['Elektronene i atomets ytterste skall', 'Alle elektronene i atomet', 'Partiklene i atomkjernen', 'Nøytronene i atomet'],
    explanation: 'Valenselektroner er elektronene i det ytterste skallet. De bestemmer hvordan atomet binder seg til andre og hvilke kjemiske egenskaper grunnstoffet har.',
  },
  {
    question: 'Hva er den korrekte elektronkonfigurasjonen til natrium (Na), atomnummer 11?',
    options: ['(2, 8, 1)', '(2, 9)', '(8, 2, 1)', '(2, 8, 8)'],
    explanation: 'Natrium har 11 elektroner: 2 i K-skallet, 8 i L-skallet og 1 i M-skallet, altså (2, 8, 1). Det har dermed 1 valenselektron.',
  },
  {
    question: 'Hva sier oktettregelen?',
    options: ['Atomer streber etter 8 elektroner i ytterste skall', 'Atomer streber etter 8 protoner', 'Alle atomer har 8 nøytroner', 'Et atom kan ha maks 8 elektroner totalt'],
    explanation: 'Oktettregelen sier at atomer reagerer slik at de oppnår 8 elektroner i ytterste skall (edelgasskonfigurasjon). Hydrogen og helium følger dubletregelen med 2.',
  },
  {
    question: 'Hvor mange valenselektroner har et grunnstoff i gruppe 17 (halogenene)?',
    options: ['7', '1', '17', '8'],
    explanation: 'For hovedgruppene gir enersifferet i gruppenummeret antall valenselektroner. Gruppe 17 har 7 valenselektroner og mangler bare ett for fullt skall.',
  },
  {
    question: 'Hvorfor er edelgassene (gruppe 18) svært lite reaktive?',
    options: ['De har allerede fullt ytterste skall', 'De mangler ett elektron', 'De har bare ett valenselektron', 'De har ingen elektroner'],
    explanation: 'Edelgassene har fullt ytterste skall (oktett), så de trenger verken å avgi, ta opp eller dele elektroner. Derfor er de svært stabile og lite reaktive.',
  },
],


  'naturfag-9-1-4': [
  {
    question: 'Hva er et ion?',
    options: ['Et atom som har fått ladning ved å avgi eller ta opp elektroner', 'Et atom uten protoner', 'En type molekyl uten ladning', 'Et atom med ekstra nøytroner'],
    explanation: 'Et ion er et atom (eller atomgruppe) som har fått elektrisk ladning fordi det har avgitt eller tatt opp elektroner.',
  },
  {
    question: 'Hva kalles et positivt ladet ion?',
    options: ['Kation', 'Anion', 'Nøytron', 'Isotop'],
    explanation: 'Et kation er et positivt ion som har avgitt elektroner (f.eks. Na⁺). Et anion er et negativt ion som har tatt opp elektroner (f.eks. Cl⁻).',
  },
  {
    question: 'Mellom hvilke typer grunnstoffer dannes ionebindinger typisk?',
    options: ['Mellom metaller og ikke-metaller', 'Mellom to metaller', 'Mellom to edelgasser', 'Bare mellom ikke-metaller'],
    explanation: 'Ionebindinger dannes typisk mellom metaller (avgir elektroner, blir kationer) og ikke-metaller (tar opp elektroner, blir anioner).',
  },
  {
    question: 'Hvilken ladning får et natriumatom (gruppe 1) når det danner ion?',
    options: ['+1 (Na⁺)', '−1 (Na⁻)', '+2 (Na²⁺)', '−2 (Na²⁻)'],
    explanation: 'Natrium har 1 valenselektron som det avgir for å få fullt ytterste skall. Da blir det et positivt ion med ladning +1 (Na⁺).',
  },
  {
    question: 'Hva er den korrekte formelen for forbindelsen av Ca²⁺ og Cl⁻?',
    options: ['CaCl₂', 'CaCl', 'Ca₂Cl', 'Ca₂Cl₂'],
    explanation: 'Total ladning må bli null. Ett Ca²⁺ (+2) trenger to Cl⁻ (−1 hver) for å balansere, så formelen blir CaCl₂.',
  },
],


  'naturfag-9-1-5': [
  {
    question: 'Hvordan beskrives bindingen i et metall?',
    options: ['Positive metallioner i et felles "elektronhav" av frie valenselektroner', 'Ioner bundet i et fast gitter uten frie elektroner', 'Atomer som deler elektroner i par', 'Molekyler holdt sammen av vann'],
    explanation: 'I metallbindingen avgir atomene valenselektronene til et felles elektronhav. De positive ionene holdes sammen av tiltrekningen til de frie elektronene.',
  },
  {
    question: 'Hvorfor leder metaller elektrisk strøm godt?',
    options: ['De har frie elektroner som kan bevege seg', 'De har mange nøytroner', 'De har fullt ytterste skall', 'Ionene beveger seg fritt'],
    explanation: 'Metaller leder strøm fordi valenselektronene er frie og kan bevege seg gjennom hele metallet. I ioneforbindelser sitter ionene fast og leder ikke strøm i fast form.',
  },
  {
    question: 'Hva er korrosjon?',
    options: ['Kjemisk nedbrytning av metaller, f.eks. når jern ruster', 'Når metall smelter', 'Når metall blir magnetisk', 'Når metall leder strøm'],
    explanation: 'Korrosjon er kjemisk nedbrytning av metaller. Jern ruster når det reagerer med oksygen og vann. Maling, legering og oljebehandling kan beskytte mot korrosjon.',
  },
  {
    question: 'Hva er en legering?',
    options: ['En blanding av metaller (eller metall og andre stoffer) med forbedrede egenskaper', 'Et rent grunnstoff', 'En type ioneforbindelse', 'Et ikke-metall'],
    explanation: 'En legering er en blanding, f.eks. stål (jern + karbon) eller bronse (kobber + tinn). Legeringer har ofte bedre egenskaper enn de rene metallene.',
  },
  {
    question: 'Et metall over hydrogen i spenningsrekken er mer reaktivt enn ett under. Hva betyr dette i praksis?',
    options: ['Metaller over hydrogen kan reagere med syrer', 'Metaller over hydrogen er helt stabile', 'Metaller under hydrogen reagerer kraftigst med syrer', 'Spenningsrekken sier ingenting om reaktivitet'],
    explanation: 'Spenningsrekken rangerer metaller etter reaktivitet. Metaller over hydrogen (som sink og jern) kan reagere med syrer, mens edle metaller under hydrogen (som gull) ikke gjør det.',
  },
],


  'naturfag-9-1-6': [
  {
    question: 'Hva kjennetegner en eksoterm reaksjon?',
    options: ['Den frigjør energi til omgivelsene', 'Den tar opp energi fra omgivelsene', 'Den endrer ikke energien', 'Den fryser omgivelsene'],
    explanation: 'En eksoterm reaksjon frigjør energi (omgivelsene blir varmere). Produktene har lavere energi enn reaktantene. Forbrenning er et eksempel.',
  },
  {
    question: 'Hva dannes ved fullstendig forbrenning av et hydrokarbon?',
    options: ['Karbondioksid (CO₂) og vann (H₂O)', 'Karbonmonoksid (CO) og sot', 'Bare oksygen', 'Hydrogen og nitrogen'],
    explanation: 'Fullstendig forbrenning av hydrokarboner gir CO₂ og H₂O. Ved for lite oksygen blir det ufullstendig forbrenning med giftig CO og sot.',
  },
  {
    question: 'Hvorfor må reaksjonslikninger balanseres?',
    options: ['På grunn av loven om massebevarelse – atomer kan ikke oppstå eller forsvinne', 'For at reaksjonen skal se penere ut', 'Fordi energi må være lik', 'For å endre grunnstoffene'],
    explanation: 'Loven om massebevarelse sier at atomer verken oppstår eller forsvinner i en reaksjon. Derfor må antallet atomer av hvert grunnstoff være likt på begge sider.',
  },
  {
    question: 'Hva er aktiveringsenergien i en kjemisk reaksjon?',
    options: ['Energien som trengs for å starte reaksjonen', 'Energien som frigjøres etter reaksjonen', 'Massen til produktene', 'Temperaturen ved slutten'],
    explanation: 'Aktiveringsenergien er energien som trengs for å starte en reaksjon, som gnisten fra en fyrstikk på et stearinlys. Også eksoterme reaksjoner trenger ofte litt startenergi.',
  },
  {
    question: 'Hva skjer ved ufullstendig forbrenning når det er for lite oksygen?',
    options: ['Det dannes giftig karbonmonoksid (CO) og sot', 'Det dannes bare rent vann', 'Det dannes mer oksygen', 'Reaksjonen stopper helt uten produkter'],
    explanation: 'Ved for lite oksygen blir forbrenningen ufullstendig og danner giftig karbonmonoksid (CO) og sot (karbon), i tillegg til vann.',
  },
],


  'naturfag-9-1-7': [
  {
    question: 'Hvorfor kan karbon danne så mange ulike forbindelser?',
    options: ['Det har 4 valenselektroner og kan danne 4 bindinger, også lange kjeder og ringer', 'Det har bare 1 valenselektron', 'Det er et metall', 'Det reagerer ikke med andre stoffer'],
    explanation: 'Karbon har 4 valenselektroner og kan danne 4 kovalente bindinger. Det kan binde seg til andre karbonatomer i kjeder, forgreninger og ringer, noe som gir enorm variasjon.',
  },
  {
    question: 'Hva inneholder et hydrokarbon?',
    options: ['Bare karbon (C) og hydrogen (H)', 'Bare oksygen og hydrogen', 'Karbon og nitrogen', 'Bare metaller'],
    explanation: 'Hydrokarboner inneholder bare grunnstoffene karbon og hydrogen. De deles inn i alkaner, alkener og alkyner.',
  },
  {
    question: 'Hva er forskjellen på et mettet og et umettet hydrokarbon?',
    options: ['Mettede har bare enkeltbindinger, umettede har dobbelt- eller trippelbindinger', 'Mettede er flytende, umettede er faste', 'Mettede inneholder oksygen', 'Det er ingen forskjell'],
    explanation: 'Et mettet hydrokarbon (alkan) har bare enkeltbindinger. Et umettet (alken/alkyn) har dobbelt- eller trippelbindinger og er mer reaktivt.',
  },
  {
    question: 'Hvilket alkan har 3 karbonatomer?',
    options: ['Propan', 'Metan', 'Etan', 'Butan'],
    explanation: 'Forstavelsen forteller antall karbonatomer: met- = 1 (metan), et- = 2 (etan), prop- = 3 (propan), but- = 4 (butan).',
  },
  {
    question: 'Hva er organisk kjemi?',
    options: ['Kjemien til karbonforbindelser', 'Kjemien til metaller', 'Kjemien til edelgasser', 'Kjemien til vann'],
    explanation: 'Organisk kjemi er kjemien til karbonforbindelser (unntatt enkle som CO₂ og karbonater). Organiske stoffer inneholder alltid karbon og nesten alltid hydrogen.',
  },
],


  'naturfag-9-2-3': [
  {
    question: 'Hva er elektrisk strøm?',
    options: ['Bevegelse av elektriske ladninger (elektroner) gjennom en leder', 'En type magnetisk kraft', 'Spenningen over en komponent', 'Motstanden i en ledning'],
    explanation: 'Elektrisk strøm (I) er bevegelse av elektriske ladninger gjennom en leder. Den måles i ampere (A) med et amperemeter koblet i serie.',
  },
  {
    question: 'Hvordan lyder Ohms lov?',
    options: ['U = R · I', 'U = R / I', 'U = R + I', 'U = R − I'],
    explanation: 'Ohms lov er U = R · I, der U er spenning (volt), R er motstand (ohm) og I er strøm (ampere). Den kan skrives om til I = U/R og R = U/I.',
  },
  {
    question: 'En motstand på 4 Ω er koblet til en spenning på 12 V. Hvor stor er strømmen?',
    options: ['3 A', '48 A', '0,33 A', '8 A'],
    explanation: 'Bruk I = U/R = 12 V / 4 Ω = 3 A.',
  },
  {
    question: 'Hva skjer hvis én lyspære ryker i en seriekobling?',
    options: ['Hele kretsen stopper, og alle pærene slukner', 'Bare den ene pæren slukner', 'Ingenting skjer', 'De andre pærene lyser sterkere'],
    explanation: 'I en seriekobling er det bare én bane. Hvis én komponent ryker, brytes kretsen og alt slutter å virke. I en parallellkobling vil de andre fortsette.',
  },
  {
    question: 'Hvordan kobles et voltmeter for å måle spenning over en komponent?',
    options: ['I parallell over komponenten', 'I serie i kretsen', 'Det spiller ingen rolle', 'Bare til batteriet'],
    explanation: 'Et voltmeter kobles i parallell over komponenten det skal måle spenningen over. Et amperemeter kobles derimot i serie.',
  },
],


  'naturfag-9-2-4': [
  {
    question: 'Hva er bølgelengden til en bølge?',
    options: ['Avstanden mellom to bølgetopper', 'Antall bølger per sekund', 'Hvor høy bølgen er', 'Hvor fort bølgen beveger seg'],
    explanation: 'Bølgelengden (λ) er avstanden mellom to bølgetopper, målt i meter. Frekvensen (f) er antall bølger som passerer et punkt per sekund.',
  },
  {
    question: 'Hvilken type bølge er lyd?',
    options: ['Langsgående bølge som trenger et medium', 'Tverrbølge som går gjennom vakuum', 'Elektromagnetisk bølge', 'En bølge som ikke overfører energi'],
    explanation: 'Lyd er langsgående bølger som trenger et medium (luft, vann, fast stoff) for å forplante seg. Lyd kan ikke gå gjennom vakuum.',
  },
  {
    question: 'Omtrent hvor fort beveger lyd seg i luft ved romtemperatur?',
    options: ['Ca. 340 m/s', 'Ca. 3 m/s', 'Ca. 300 000 km/s', 'Ca. 1 500 m/s'],
    explanation: 'Lyd beveger seg ca. 340 m/s i luft, ca. 1 500 m/s i vann og ca. 5 000 m/s i stål. Lyset beveger seg derimot ca. 300 000 km/s.',
  },
  {
    question: 'Hvilken farge i det synlige lyset har lengst bølgelengde?',
    options: ['Rødt', 'Fiolett', 'Blått', 'Grønt'],
    explanation: 'Rødt lys har lengst bølgelengde, og fiolett har kortest. Rekkefølgen er rødt, oransje, gult, grønt, blått, indigo, fiolett.',
  },
  {
    question: 'Hvordan henger frekvens og bølgelengde sammen med farten til en bølge?',
    options: ['Fart = frekvens · bølgelengde (v = f · λ)', 'Fart = frekvens / bølgelengde', 'Fart = bølgelengde / frekvens', 'Fart er uavhengig av begge'],
    explanation: 'Sammenhengen er v = f · λ. Farten til bølgen er lik frekvensen ganget med bølgelengden.',
  },
],


  'naturfag-9-2-5': [
  {
    question: 'Hvilken formel beskriver sammenhengen mellom fart, strekning og tid?',
    options: ['v = s / t', 'v = s · t', 'v = t / s', 'v = s + t'],
    explanation: 'Fart = strekning delt på tid, altså v = s/t. Den kan skrives om til s = v·t og t = s/v.',
  },
  {
    question: 'En bil kjører 90 km på 1,5 timer. Hva er gjennomsnittsfarten?',
    options: ['60 km/h', '135 km/h', '45 km/h', '90 km/h'],
    explanation: 'v = s/t = 90 km / 1,5 h = 60 km/h.',
  },
  {
    question: 'Hvordan gjør du om 72 km/h til m/s?',
    options: ['Del på 3,6: 72 / 3,6 = 20 m/s', 'Gang med 3,6: 72 · 3,6 = 259 m/s', 'Del på 10: 7,2 m/s', 'Gang med 1000: 72 000 m/s'],
    explanation: 'For å gjøre om fra km/h til m/s deler du på 3,6. 72 / 3,6 = 20 m/s.',
  },
  {
    question: 'Hva er forskjellen på gjennomsnittsfart og momentanfart?',
    options: ['Gjennomsnittsfart er total strekning delt på total tid; momentanfart er farten i et bestemt øyeblikk', 'De er nøyaktig det samme', 'Momentanfart gjelder bare biler', 'Gjennomsnittsfart måles av speedometeret'],
    explanation: 'Gjennomsnittsfart er total strekning delt på total tid og tar ikke hensyn til variasjon underveis. Momentanfart er farten akkurat nå, som speedometeret viser.',
  },
  {
    question: 'En syklist holder 5 m/s i 200 sekunder. Hvor langt sykler hun?',
    options: ['1000 m', '40 m', '205 m', '100 m'],
    explanation: 'Bruk s = v · t = 5 m/s · 200 s = 1000 m.',
  },
],


  'naturfag-9-2-6': [
  {
    question: 'Hva er trykk?',
    options: ['Kraft per flateenhet (p = F / A)', 'Kraft ganget med areal', 'Massen til en gjenstand', 'Farten til en væske'],
    explanation: 'Trykk er kraft per flateenhet: p = F/A. Måleenheten er pascal (Pa), der 1 Pa = 1 N/m².',
  },
  {
    question: 'Hva sier Arkimedes\' prinsipp om oppdrift?',
    options: ['Oppdriften er lik tyngden av væsken gjenstanden fortrenger', 'Oppdriften er lik gjenstandens egen tyngde alltid', 'Oppdrift finnes bare i gasser', 'Oppdrift virker nedover'],
    explanation: 'Arkimedes\' prinsipp sier at oppdriftskraften på en nedsenket gjenstand er lik tyngden av væsken (eller gassen) den fortrenger.',
  },
  {
    question: 'Når flyter en gjenstand i vann?',
    options: ['Når gjennomsnittlig tetthet er lavere enn vannets', 'Når den er tyngre enn vann', 'Når den har høyere tetthet enn vann', 'Bare hvis den er av tre'],
    explanation: 'En gjenstand flyter når dens gjennomsnittlige tetthet er lavere enn væskens. Et skip av stål flyter fordi det inneholder mye luft, så snittettheten blir lav.',
  },
  {
    question: 'En kraft på 200 N virker på et areal på 2 m². Hvor stort er trykket?',
    options: ['100 Pa', '400 Pa', '202 Pa', '0,01 Pa'],
    explanation: 'Bruk p = F/A = 200 N / 2 m² = 100 Pa.',
  },
  {
    question: 'Hvorfor må dykkere stige sakte opp til overflaten?',
    options: ['For å unngå dykkersyke, der oppløst nitrogen danner bobler i blodet', 'Fordi de blir slitne', 'For å spare luft', 'Fordi vannet er for varmt øverst'],
    explanation: 'På dypet løses mer nitrogen i blodet på grunn av høyt trykk. Stiger man for raskt, danner gassen bobler (dykkersyke). Derfor må man stige sakte.',
  },
],


  'naturfag-9-2-7': [
  {
    question: 'Hva skjer når du holder to like magnetpoler mot hverandre?',
    options: ['De frastøter hverandre', 'De tiltrekker hverandre', 'Ingenting skjer', 'De smelter sammen'],
    explanation: 'Like poler (N-N eller S-S) frastøter hverandre, mens ulike poler (N-S) tiltrekker hverandre.',
  },
  {
    question: 'Hva er en elektromagnet?',
    options: ['En magnet laget ved å sende strøm gjennom en spole', 'En permanent magnet av jern', 'En magnet som aldri kan slås av', 'Et batteri'],
    explanation: 'En elektromagnet lages ved å sende strøm gjennom en ledning viklet i en spole. Magnetismen kan slås av og på, og styrken kan reguleres med strømstyrken.',
  },
  {
    question: 'Hvordan kan vi lage elektrisk strøm ved hjelp av magnetisme?',
    options: ['Ved induksjon når en magnet beveger seg i forhold til en spole', 'Ved å varme opp en magnet', 'Ved å holde magneten helt stille', 'Ved å male magneten'],
    explanation: 'Induksjon er at en magnet som beveger seg i forhold til en spole, lager elektrisk strøm. Dette er prinsippet bak generatorer i kraftverk.',
  },
  {
    question: 'Hvilke metaller tiltrekkes av en magnet?',
    options: ['Jern, nikkel og kobolt', 'Gull, sølv og kobber', 'Aluminium og bly', 'Alle metaller'],
    explanation: 'Bare jern, nikkel og kobolt (og legeringer av dem) er magnetiske. De fleste andre metaller, som gull og aluminium, tiltrekkes ikke av en magnet.',
  },
  {
    question: 'Hvorfor peker kompassnålen mot nord?',
    options: ['Jordas geografiske nordpol er nær en magnetisk sydpol, og ulike poler tiltrekker', 'Fordi nord er oppover', 'Fordi nålen er tyngst i nordenden', 'Fordi sola står i nord'],
    explanation: 'Kompassnålens nordpol peker mot jordas geografiske nord fordi det der er en magnetisk sydpol. Ulike poler tiltrekker hverandre.',
  },
],


  'naturfag-9-2-8': [
  {
    question: 'Hva er radioaktivitet?',
    options: ['Når ustabile atomkjerner sender ut stråling for å bli mer stabile', 'Når atomer leder elektrisk strøm', 'Når lys reflekteres fra et stoff', 'Når et stoff blir varmt'],
    explanation: 'Radioaktivitet er en naturlig, spontan prosess der ustabile atomkjerner sender ut stråling (alfa, beta eller gamma) for å bli mer stabile.',
  },
  {
    question: 'Hvilken type stråling stoppes lettest – av et papirark eller huden?',
    options: ['Alfastråling', 'Gammastråling', 'Røntgenstråling', 'Betastråling'],
    explanation: 'Alfastråling består av tunge partikler og stoppes av et papirark eller huden. Betastråling stoppes av aluminium, mens gammastråling trenger bly eller betong.',
  },
  {
    question: 'Hva er halveringstid?',
    options: ['Tiden det tar før halvparten av de radioaktive atomene har henfalt', 'Tiden et stoff bruker på å bli dobbelt så radioaktivt', 'Halvparten av et atoms levetid', 'Tiden et atom bruker på å lede strøm'],
    explanation: 'Halveringstid er tiden det tar før halvparten av de radioaktive atomene i en prøve har omdannet seg. For jod-131 er den 8 dager.',
  },
  {
    question: 'Et stoff har en halveringstid på 8 dager. Hvor mye er igjen etter 16 dager?',
    options: ['En firedel (1/4)', 'Halvparten (1/2)', 'En åttedel (1/8)', 'Ingenting'],
    explanation: '16 dager er to halveringstider. Etter første: 1/2 igjen. Etter andre: 1/2 av 1/2 = 1/4 igjen.',
  },
  {
    question: 'Hva er den viktigste kilden til naturlig stråling i norske hjem?',
    options: ['Radon fra berggrunnen', 'Mobiltelefoner', 'Mat og drikke', 'Røntgenapparater'],
    explanation: 'Radon, en radioaktiv gass som siver opp fra berggrunnen, er den viktigste kilden til naturlig stråling i Norge og kan øke risikoen for lungekreft.',
  },
],


  'naturfag-9-3-3': [
  {
    question: 'Hva er forskjellen på biotiske og abiotiske faktorer i et økosystem?',
    options: ['Biotiske er levende, abiotiske er ikke-levende', 'Biotiske er ikke-levende, abiotiske er levende', 'Begge er levende', 'Begge er ikke-levende'],
    explanation: 'Biotiske faktorer er alt levende (planter, dyr, sopp, bakterier). Abiotiske faktorer er ikke-levende, som lys, temperatur, vann og næringssalter.',
  },
  {
    question: 'Hva er en produsent i en næringskjede?',
    options: ['Planter og alger som lager egen næring ved fotosyntese', 'Dyr som spiser planter', 'Rovdyr på toppen', 'Nedbrytere'],
    explanation: 'Produsenter er planter og alger som lager sin egen næring gjennom fotosyntese. De er grunnlaget for næringskjeden.',
  },
  {
    question: 'Hvilke tre nivåer omfatter biologisk mangfold?',
    options: ['Artsmangfold, genetisk mangfold og økosystemmangfold', 'Plante-, dyre- og soppmangfold', 'Land-, vann- og luftmangfold', 'Fortid, nåtid og framtid'],
    explanation: 'Biologisk mangfold omfatter artsmangfold (antall arter), genetisk mangfold (variasjon innen en art) og økosystemmangfold (variasjon av økosystemer).',
  },
  {
    question: 'Hvorfor blir et økosystem med høyt biologisk mangfold mer robust?',
    options: ['Mange arter gjør det bedre rustet til å takle endringer', 'Det blir mer sårbart', 'Det trenger ikke produsenter', 'Det blir uavhengig av sol'],
    explanation: 'Høyt biologisk mangfold gjør økosystemet mer robust fordi flere arter gir flere koblinger i næringsnettet, og det tåler endringer og forstyrrelser bedre.',
  },
  {
    question: 'Hva betyr kategorien CR på Rødlista?',
    options: ['Kritisk truet – høyest risiko for å dø ut', 'Livskraftig art uten risiko', 'Nær truet', 'Allerede utdødd'],
    explanation: 'CR betyr kritisk truet, kategorien med høyest risiko for å dø ut. Andre kategorier er EN (sterkt truet), VU (sårbar) og NT (nær truet).',
  },
],


  'naturfag-9-3-4': [
  {
    question: 'Hvilken form har DNA-molekylet?',
    options: ['En dobbel heliks (vindeltrapp)', 'En enkel rett tråd', 'En sirkel', 'En firkant'],
    explanation: 'DNA har form som en dobbel heliks – to tråder som snor seg rundt hverandre som en vindeltrapp. Trådene er bygd opp av nukleotider.',
  },
  {
    question: 'Hvilke baser parer sammen i DNA?',
    options: ['A med T, og G med C', 'A med G, og T med C', 'A med C, og G med T', 'Alle baser kan pare med alle'],
    explanation: 'I DNA parer adenin (A) alltid med tymin (T), og guanin (G) alltid med cytosin (C). I RNA erstattes T med uracil (U).',
  },
  {
    question: 'Hva er et gen?',
    options: ['En bestemt sekvens av baser i DNA som koder for ett protein', 'Et helt kromosom', 'Et ferdig protein', 'En type celle'],
    explanation: 'Et gen er en bestemt rekkefølge av baser i DNA-et som koder for ett bestemt protein. Mennesket har ca. 20 000–25 000 gener.',
  },
  {
    question: 'Hva kalles de to hovedstegene i proteinsyntesen?',
    options: ['Transkripsjon og translasjon', 'Mitose og meiose', 'Fordamping og kondensering', 'Oksidasjon og reduksjon'],
    explanation: 'Proteinsyntesen består av transkripsjon (DNA leses av til mRNA) og translasjon (mRNA oversettes til en aminosyrekjede ved ribosomet).',
  },
  {
    question: 'Hva er en mutasjon?',
    options: ['En endring i DNA-sekvensen', 'En type protein', 'En celledeling', 'Et fullt kromosomsett'],
    explanation: 'En mutasjon er en endring i DNA-sekvensen. Den kan være nøytral, skadelig eller (sjelden) gunstig. Gunstige mutasjoner er grunnlaget for evolusjon.',
  },
],


  'naturfag-9-3-5': [
  {
    question: 'Hva er forskjellen på genotype og fenotype?',
    options: ['Genotype er allelkombinasjonen, fenotype er den synlige egenskapen', 'Genotype er det synlige, fenotype er genene', 'De betyr nøyaktig det samme', 'Fenotype er antall kromosomer'],
    explanation: 'Genotypen er allelkombinasjonen du har (f.eks. Bb), mens fenotypen er den synlige egenskapen genotypen gir (f.eks. brune øyne).',
  },
  {
    question: 'Hva betyr det å være homozygot for en egenskap?',
    options: ['Begge allelene er like (BB eller bb)', 'Allelene er forskjellige (Bb)', 'Man mangler genet', 'Man har for mange kromosomer'],
    explanation: 'Homozygot betyr at begge allelene er like (BB eller bb). Heterozygot betyr at de er forskjellige (Bb).',
  },
  {
    question: 'Begge foreldre er Bb (brunt dominant over blått). Hva er sannsynligheten for et barn med blå øyne (bb)?',
    options: ['25 %', '50 %', '75 %', '0 %'],
    explanation: 'Krysningsskjema gir BB (25 %), Bb (50 %) og bb (25 %). Sannsynligheten for bb (blå øyne) er 1 av 4 = 25 %.',
  },
  {
    question: 'Hvilket kromosompar bestemmer biologisk hankjønn hos mennesker?',
    options: ['XY', 'XX', 'YY', 'XXY'],
    explanation: 'XX gir biologisk hunkjønn og XY gir biologisk hankjønn. Far avgjør barnets kjønn ved å gi enten et X- eller et Y-kromosom.',
  },
  {
    question: 'Hva er et krysningsskjema (Punnett-rute) brukt til?',
    options: ['Å forutsi mulige genotyper og fenotyper hos avkommet', 'Å telle kromosomer i en celle', 'Å måle DNA-mengde', 'Å beregne fart'],
    explanation: 'Et krysningsskjema brukes til å forutsi hvilke genotyper og fenotyper avkommet kan få, ved å kombinere allelene fra begge foreldrene.',
  },
],


  'naturfag-9-3-6': [
  {
    question: 'Hva er en populasjon?',
    options: ['Alle individene av samme art i et bestemt område til en bestemt tid', 'Alle artene i et økosystem', 'Bare rovdyrene i et område', 'Alle planter på jorda'],
    explanation: 'En populasjon er alle individene av samme art som lever i et bestemt område til en bestemt tid, f.eks. alle elgene i Nordmarka.',
  },
  {
    question: 'Hva er bæreevnen (K) til et miljø?',
    options: ['Det maksimale antallet individer miljøet kan opprettholde over tid', 'Antall arter i et område', 'Hvor mye et dyr veier', 'Hvor raskt en art formerer seg'],
    explanation: 'Bæreevnen (K) er det høyeste antallet individer av en art som miljøet kan opprettholde over tid, bestemt av mat, plass, konkurranse og rovdyr.',
  },
  {
    question: 'Hva slags samspill er predasjon?',
    options: ['Ett individ (rovdyr) drar nytte mens det andre (byttet) skades (+/−)', 'Begge arter drar nytte (+/+)', 'Begge arter skades (−/−)', 'Den ene drar nytte uten å påvirke den andre (+/0)'],
    explanation: 'Predasjon er +/−: rovdyret drar nytte (mat) mens byttedyret skades. Eksempel: gaupe jakter på hare.',
  },
  {
    question: 'Hvilken samspillform er bier og blomster et eksempel på?',
    options: ['Mutualisme (+/+)', 'Parasittisme (+/−)', 'Konkurranse (−/−)', 'Predasjon (+/−)'],
    explanation: 'Bier og blomster er mutualisme (+/+): bien får nektar, og blomsten blir pollinert. Begge arter drar nytte av samspillet.',
  },
  {
    question: 'Hva kjennetegner eksponentiell vekst (J-kurve) i en populasjon?',
    options: ['Populasjonen vokser raskere og raskere når det er ubegrenset med ressurser', 'Populasjonen stabiliserer seg ved bæreevnen', 'Populasjonen synker jevnt', 'Populasjonen holder seg helt konstant'],
    explanation: 'Eksponentiell vekst (J-kurve) skjer når ressursene er ubegrenset, og populasjonen vokser raskere og raskere. Logistisk vekst (S-kurve) flater ut ved bæreevnen.',
  },
],


  'naturfag-9-3-7': [
  {
    question: 'Hva omfatter biologisk mangfold?',
    options: ['Artsmangfold, genetisk mangfold og økosystemmangfold', 'Bare antall dyr i en skog', 'Bare planter', 'Bare truede arter'],
    explanation: 'Biologisk mangfold (biodiversitet) omfatter artsmangfold, genetisk mangfold (variasjon innen en art) og økosystemmangfold (ulike økosystemer).',
  },
  {
    question: 'Hva regnes som den største trusselen mot biologisk mangfold?',
    options: ['Arealendringer som ødelegger leveområder', 'At det finnes for mange verneområder', 'For lite forurensning', 'At dyr formerer seg for raskt'],
    explanation: 'Arealendringer (nedbygging, hogst, oppdyrking) som ødelegger eller deler opp leveområder, regnes som den største trusselen mot naturmangfoldet.',
  },
  {
    question: 'Hva er en fremmed (invasiv) art?',
    options: ['En art som er innført til et nytt område og fortrenger stedegne arter', 'En art som har levd lenge i området', 'En truet art på Rødlista', 'En art som er utdødd'],
    explanation: 'En fremmed (invasiv) art er innført til et nytt område der den kan spre seg og fortrenge lokale arter. Eksempler er brunskogsnegl og kongekrabbe.',
  },
  {
    question: 'Hva er økosystemtjenester?',
    options: ['Godene naturen gir oss gratis, som mat, rent vann og pollinering', 'Tjenester du betaler for i en dyrehage', 'Et selskap som driver naturvern', 'Avgifter på forurensning'],
    explanation: 'Økosystemtjenester er godene naturen gir oss gratis, som mat, rent vann, pollinering, flomdemping og karbonlagring. De deles inn i forsynende, regulerende, kulturelle og støttende tjenester.',
  },
  {
    question: 'Hvilken organisasjon utarbeider Rødlista i Norge?',
    options: ['Artsdatabanken', 'FNs klimapanel (IPCC)', 'NRK', 'Statens vegvesen'],
    explanation: 'Rødlista utarbeides av Artsdatabanken og er en vitenskapelig vurdering av risikoen for at arter skal dø ut fra Norge.',
  },
],


  'naturfag-9-4-3': [
  {
    question: 'Hva er drivhuseffekten?',
    options: ['Gasser i atmosfæren holder på varme fra sola', 'At sola blir varmere', 'At havet fryser', 'At ozonlaget blir tykkere'],
    explanation: 'Drivhuseffekten er at drivhusgasser i atmosfæren holder på varmestråling fra jorda. En naturlig drivhuseffekt er nødvendig for liv, men menneskeskapte utslipp forsterker den.',
  },
  {
    question: 'Uten den naturlige drivhuseffekten ville gjennomsnittstemperaturen på jorda vært:',
    options: ['Ca. −18 °C i stedet for +15 °C', 'Akkurat den samme', 'Mye varmere enn nå', 'Ca. +100 °C'],
    explanation: 'Uten den naturlige drivhuseffekten ville snittemperaturen vært ca. −18 °C i stedet for +15 °C. Effekten er altså nødvendig for liv slik vi kjenner det.',
  },
  {
    question: 'Hva er hovedårsaken til dagens globale oppvarming ifølge FNs klimapanel (IPCC)?',
    options: ['Menneskeskapte utslipp av drivhusgasser', 'Naturlige svingninger alene', 'Vulkanutbrudd', 'Endringer i månens bane'],
    explanation: 'IPCC slår fast at oppvarmingen siden førindustriell tid (ca. 1,1 °C) i all hovedsak skyldes menneskeskapte utslipp av drivhusgasser, særlig CO₂ fra fossil energi.',
  },
  {
    question: 'Hva er en konsekvens av global oppvarming?',
    options: ['Issmelting og stigende havnivå', 'Lavere havnivå', 'Færre ekstremværhendelser', 'At alle isbreer vokser'],
    explanation: 'Global oppvarming fører blant annet til issmelting og stigende havnivå, mer ekstremvær, og press på arter og økosystemer.',
  },
  {
    question: 'Hva er hovedmålet med en sirkulær økonomi for å redusere klimagassutslipp?',
    options: ['Å redusere, gjenbruke og gjenvinne ressurser i stedet for "bruk og kast"', 'Å produsere mest mulig nytt', 'Å brenne alt avfall', 'Å bruke bare fossil energi'],
    explanation: 'Sirkulærøkonomi handler om å redusere forbruk, gjenbruke og gjenvinne ressurser så lenge som mulig, i stedet for lineær "bruk og kast". Det sparer både ressurser og utslipp.',
  },
],


  'naturfag-9-4-4': [
  {
    question: 'Hvilken gass utgjør størst del av atmosfæren?',
    options: ['Nitrogen (ca. 78 %)', 'Oksygen (ca. 21 %)', 'Karbondioksid (ca. 0,04 %)', 'Argon (ca. 0,9 %)'],
    explanation: 'Atmosfæren består av ca. 78 % nitrogen, 21 % oksygen, 0,9 % argon og 0,04 % CO₂, i tillegg til vanndamp.',
  },
  {
    question: 'Hva kjennetegner et lavtrykk?',
    options: ['Varm luft stiger opp, og det gir ofte skyer og nedbør', 'Kald luft synker, og det gir klart vær', 'Det er alltid vindstille', 'Det gir alltid tørt vær'],
    explanation: 'I et lavtrykk stiger varm luft opp, avkjøles og danner skyer og nedbør. I et høytrykk synker kald luft, noe som gir klart, fint vær.',
  },
  {
    question: 'Hva skjer i fordampingsfasen av vannets kretsløp?',
    options: ['Sola varmer opp vann som blir til vanndamp', 'Vanndamp blir til regn', 'Vann fryser til is', 'Vann renner til havet'],
    explanation: 'Ved fordamping varmer sola opp vann i hav, innsjøer og elver slik at det blir til vanndamp som stiger opp. Planter bidrar også med transpirasjon.',
  },
  {
    question: 'Hvilken skytype gir ofte tordenvær, kraftig regn og hagl?',
    options: ['Cumulonimbus (bygeskyer)', 'Cirrus (fjærskyer)', 'Stratus (lagskyer)', 'Cumulus (haugskyer)'],
    explanation: 'Cumulonimbus er store, høye bygeskyer som gir tordenvær, kraftig regn og hagl. Cirrus er tynne fjærskyer høyt oppe av iskrystaller.',
  },
  {
    question: 'Hva skjer ved en kaldfront?',
    options: ['Kald luft presser seg under varm luft og gir rask værendring med kraftig nedbør', 'Varm luft glir sakte opp over kald og gir jevn nedbør', 'Det blir alltid tørt og klart', 'Lufttrykket forsvinner helt'],
    explanation: 'Ved en kaldfront presser kald luft seg under den varme og løfter den raskt opp. Det gir rask værendring med kraftigere nedbør og vind. Ved en varmfront blir endringen mer gradvis.',
  },
],


  'naturfag-9-4-5': [
  {
    question: 'Hvordan dannes magmatiske bergarter?',
    options: ['Når smeltet magma avkjøles og stivner', 'Når sand og leire presses sammen i lag', 'Når en bergart utsettes for trykk uten å smelte', 'Når mineraler løses opp i vann'],
    explanation: 'Magmatiske bergarter (størkningsbergarter) dannes når smeltet berg avkjøles og stivner. Avkjøles det sakte dypt nede, blir krystallene store (f.eks. granitt).',
  },
  {
    question: 'Hva er frostsprengning?',
    options: ['Vann i sprekker fryser, utvider seg og sprenger fjellet i biter', 'Stein smelter i kulde', 'Vann renner over bergarter og polerer dem', 'Stein blir varmet opp av sola'],
    explanation: 'Frostsprengning er mekanisk forvitring: vann trenger inn i sprekker, fryser og utvider seg (ca. 9 %), og sprenger fjellet i biter over tid.',
  },
  {
    question: 'Hva er forskjellen på forvitring og erosjon?',
    options: ['Forvitring er nedbrytning på stedet, erosjon er transport av løsmasser bort', 'De er nøyaktig det samme', 'Erosjon skjer bare i ørkener', 'Forvitring skjer bare i vann'],
    explanation: 'Forvitring er nedbrytning av bergarter der de ligger. Erosjon er når løsmassene transporteres bort av vann, vind eller is.',
  },
  {
    question: 'Hva er platetektonikk?',
    options: ['Teorien om at jordskorpen er delt i plater som beveger seg på mantelen', 'En type bergart', 'En metode for å måle alderen på fossiler', 'En værfenomen'],
    explanation: 'Platetektonikk er teorien om at jordskorpen er delt i store plater som sakte beveger seg på den halvflytende mantelen. Det forklarer jordskjelv, vulkaner og fjellkjeder.',
  },
  {
    question: 'Hva forteller fossiler oss om jordas historie?',
    options: ['De viser hvilke organismer som levde til ulike tider', 'De viser dagens vær', 'De viser hvor mineraler finnes', 'De forteller temperaturen i dag'],
    explanation: 'Fossiler er bevarte spor av tidligere liv. Ved å studere hvilke fossiler som finnes i ulike berglag, kan vi bestemme alder og forstå hvordan livet har utviklet seg.',
  },
],


  'naturfag-9-4-6': [
  {
    question: 'Hva kjennetegner en fornybar ressurs?',
    options: ['Den kan fornyes eller erstattes i naturens eget tempo', 'Den tar millioner av år å danne', 'Den finnes i en begrenset mengde som tar slutt', 'Den kan ikke brukes på nytt'],
    explanation: 'Fornybare ressurser (sol, vind, vann, skog, fisk) kan fornyes i naturens tempo. Ikke-fornybare ressurser som olje og metaller finnes i begrenset mengde.',
  },
  {
    question: 'Hva er sirkulærøkonomi?',
    options: ['Et system der ressurser brukes så lenge som mulig og avfall minimeres', 'Et system med "bruk og kast"', 'Å bruke bare nye råvarer', 'Å brenne alt avfall'],
    explanation: 'Sirkulærøkonomi er et system der ressurser brukes så lenge som mulig gjennom design, gjenbruk, reparasjon og gjenvinning, slik at avfall minimeres.',
  },
  {
    question: 'Hva er øverst i avfallshierarkiet (det vi bør gjøre mest av)?',
    options: ['Å redusere forbruket', 'Å brenne avfall', 'Å deponere på fyllplass', 'Å gjenvinne'],
    explanation: 'Avfallshierarkiet prioriterer å redusere forbruk øverst, deretter gjenbruk, så materialgjenvinning, deretter energiutnyttelse, og til slutt deponi nederst.',
  },
  {
    question: 'Hvorfor er det gunstig å gjenvinne aluminium?',
    options: ['Det krever mye mindre energi enn å lage nytt aluminium fra råstoff', 'Aluminium kan ikke gjenvinnes', 'Det bruker mer energi enn ny produksjon', 'Aluminium brytes ned i naturen av seg selv'],
    explanation: 'Gjenvinning av aluminium krever bare en liten brøkdel av energien som trengs for å lage nytt aluminium fra bauxitt. Aluminium kan gjenvinnes nesten uendelig mange ganger.',
  },
  {
    question: 'Hvorfor er kritiske mineraler som litium og kobolt viktige i det grønne skiftet?',
    options: ['De brukes i batterier til elbiler og annet elektronikk', 'De brukes til å lage bensin', 'De er en type fossilt brensel', 'De har ingen praktisk nytte'],
    explanation: 'Litium og kobolt brukes i batterier til elbiler og elektronikk, og sjeldne jordarter brukes i vindturbiner og elbilmotorer. De er derfor sentrale i overgangen til fornybar teknologi.',
  },
],


  'naturfag-9-5-3': [
  {
    question: 'Hva styrer endringene i puberteten?',
    options: ['Hormoner', 'Vitaminer i maten', 'Mengden søvn alene', 'Antall venner man har'],
    explanation: 'Puberteten styres av hormoner og starter vanligvis mellom 8 og 14 år. Den gir vekstspurt, kroppslukt, hårvekst og kjønnsmodning.',
  },
  {
    question: 'Hvilken prevensjonsmetode beskytter mot både graviditet OG seksuelt overførbare infeksjoner?',
    options: ['Kondom', 'P-piller', 'P-stav', 'Spiral'],
    explanation: 'Kondom er den eneste metoden som beskytter mot både graviditet og seksuelt overførbare infeksjoner (SOI). Hormonelle metoder beskytter bare mot graviditet.',
  },
  {
    question: 'Hva kjennetegner samtykke?',
    options: ['Det skal være frivillig, gjensidig og kan trekkes tilbake', 'Fravær av et nei er nok', 'Det gjelder for alltid når det er gitt én gang', 'Bare den ene parten må samtykke'],
    explanation: 'Samtykke skal være frivillig, aktivt, gjensidig, informert og kan alltid trekkes tilbake. Et tydelig ja kreves – fravær av nei er ikke samtykke.',
  },
  {
    question: 'Hvorfor er rusmidler spesielt skadelige for unge?',
    options: ['Hjernen er ikke ferdig utviklet før ca. 25-årsalderen', 'Unge tåler mer rus enn voksne', 'Rusmidler har ingen effekt på unge', 'Unge hjerner er ferdig utviklet ved 15 år'],
    explanation: 'Hjernen modnes ikke før ca. 25-årsalderen, og de siste delene som modnes styrer impulskontroll og dømmekraft. Derfor er rusmidler spesielt skadelige for unge hjerner.',
  },
  {
    question: 'Hva er en livsstilssykdom som kan henge sammen med kosthold og lite aktivitet?',
    options: ['Diabetes type 2', 'Forkjølelse', 'Influensa', 'Vannkopper'],
    explanation: 'Diabetes type 2 og hjerte- og karsykdommer er livsstilssykdommer som henger sammen med kosthold, inaktivitet og overvekt, og kan ofte forebygges. Forkjølelse og influensa skyldes virus.',
  },
],


  'naturfag-9-5-4': [
  {
    question: 'Hvilke to deler består nervesystemet av?',
    options: ['Sentralnervesystemet og det perifere nervesystemet', 'Hjernen og hjertet', 'Sansene og musklene', 'Ryggmargen og huden'],
    explanation: 'Nervesystemet deles i sentralnervesystemet (hjerne og ryggmarg) og det perifere nervesystemet (alle nervene ute i kroppen).',
  },
  {
    question: 'Hva er oppgaven til aksonet i en nervecelle?',
    options: ['Å sende signalet videre til neste nervecelle eller muskel', 'Å motta signaler fra andre celler', 'Å produsere energi', 'Å lagre DNA'],
    explanation: 'Aksonet er den lange "ledningen" som sender signalet videre. Dendrittene mottar signaler, og myelinskjeden rundt aksonet gjør at signalet går raskere.',
  },
  {
    question: 'Hva er en synapse?',
    options: ['Kontaktpunktet mellom to nerveceller der signalet overføres kjemisk', 'Cellekjernen i en nervecelle', 'En type muskel', 'Et signalstoff'],
    explanation: 'En synapse er kontaktpunktet mellom to nerveceller. Her overføres signalet kjemisk ved hjelp av nevrotransmittere som dopamin og serotonin.',
  },
  {
    question: 'Hvilken del av hjernen koordinerer balanse og finmotorikk?',
    options: ['Lillehjernen', 'Storhjernen', 'Hjernestammen', 'Ryggmargen'],
    explanation: 'Lillehjernen koordinerer balanse, bevegelse og finmotorikk. Storhjernen styrer tanker og bevisste handlinger, og hjernestammen styrer livsviktige funksjoner som pust.',
  },
  {
    question: 'Hvorfor trekker du hånda raskt til deg før du rekker å tenke når du tar på noe varmt?',
    options: ['Det er en refleks som går via ryggmargen', 'Hjernen bruker lang tid på å bestemme det', 'Musklene bestemmer det selv uten nerver', 'Det er tilfeldig'],
    explanation: 'En refleks går raskt via ryggmargen uten å gå innom hjernen først. Det gjør at du trekker hånda til deg før du rekker å kjenne smerten, slik at du unngår skade.',
  },
],


  'naturfag-9-5-5': [
  {
    question: 'Hva er den første forsvarslinjen mot smittestoffer?',
    options: ['Ytre barrierer som hud og slimhinner', 'T-celler og B-celler', 'Antistoffer', 'Vaksiner'],
    explanation: 'Den første forsvarslinjen er ytre barrierer som hud, slimhinner, magesyre og flimmerhår, som hindrer mikrober i å komme inn i kroppen.',
  },
  {
    question: 'Hva er antistoffer?',
    options: ['Proteiner fra B-celler som gjenkjenner og merker bestemte smittestoffer', 'En type bakterie', 'Et signalstoff i nervene', 'Hvite blodceller som eter bakterier'],
    explanation: 'Antistoffer er Y-formede proteiner produsert av B-celler. De passer til bestemte antigener på smittestoffer, som en nøkkel i en lås, og merker dem for ødeleggelse.',
  },
  {
    question: 'Hvordan virker en vaksine?',
    options: ['Den trener immunforsvaret til å gjenkjenne et smittestoff på forhånd', 'Den dreper alle bakterier i kroppen', 'Den gir deg sykdommen for alltid', 'Den erstatter immunforsvaret'],
    explanation: 'En vaksine inneholder svekkede eller deler av et smittestoff. Den lærer immunforsvaret å lage hukommelsesceller, slik at kroppen reagerer raskt ved et senere møte.',
  },
  {
    question: 'Hvorfor hjelper ikke antibiotika mot virussykdommer som forkjølelse?',
    options: ['Antibiotika virker bare mot bakterier, ikke virus', 'Antibiotika er for sterkt for virus', 'Virus er resistente fra naturens side', 'Antibiotika virker bare mot sopp'],
    explanation: 'Antibiotika virker bare mot bakterier, ikke virus. Derfor hjelper det ikke mot forkjølelse og influensa, som skyldes virus.',
  },
  {
    question: 'Hvordan oppstår antibiotikaresistens?',
    options: ['Bakterier som tilfeldigvis er motstandsdyktige overlever og formerer seg (naturlig utvalg)', 'Kroppen blir vant til medisinen', 'Antibiotika gjør virus sterkere', 'Det skjer aldri'],
    explanation: 'Ved bruk av antibiotika overlever bakteriene som tilfeldigvis er resistente, og de formerer seg videre. Overforbruk og feil bruk øker problemet. Dette er naturlig utvalg.',
  },
],


  'naturfag-9-5-6': [
  {
    question: 'Hva er programmering?',
    options: ['Å skrive instruksjoner (kode) som en datamaskin følger', 'Å reparere maskinvare', 'Å tegne grafer for hånd', 'Å skru av en datamaskin'],
    explanation: 'Programmering er å skrive presise instruksjoner (kode) som datamaskinen følger steg for steg. Python er et mye brukt språk i vitenskap.',
  },
  {
    question: 'Hva gjør en for-løkke i et program?',
    options: ['Gjentar en handling et bestemt antall ganger', 'Lagrer data permanent', 'Kobler til internett', 'Stopper programmet'],
    explanation: 'En for-løkke gjentar en handling et bestemt antall ganger, for eksempel å skrive ut "Måling nummer 1" til "Måling nummer 5".',
  },
  {
    question: 'Hvordan regner du ut gjennomsnittet av et datasett?',
    options: ['Summen av alle verdier delt på antall verdier', 'Den midterste verdien når de sorteres', 'Den største minus den minste', 'Den hyppigste verdien'],
    explanation: 'Gjennomsnittet er summen av alle verdier delt på antall verdier. Medianen er midtverdien, og variasjonsbredden er største minus minste verdi.',
  },
  {
    question: 'Hva er forskjellen på kvantitative og kvalitative data?',
    options: ['Kvantitative er tallverdier, kvalitative er beskrivelser', 'Kvantitative er beskrivelser, kvalitative er tall', 'De er det samme', 'Kvalitative data kan ikke samles inn'],
    explanation: 'Kvantitative data er tallverdier som kan måles og regnes med. Kvalitative data er beskrivelser som ikke er tall, for eksempel farge eller form.',
  },
  {
    question: 'Hva er viktig å ha med på alle diagrammer?',
    options: ['Tittel og aksetitler med enhet', 'Mange ulike farger', 'Et bilde i bakgrunnen', 'Så mange tall som mulig'],
    explanation: 'Alle diagrammer bør ha en tittel som beskriver innholdet, og aksetitler med enhet (f.eks. "Tid (min)"), slik at de er lette å forstå.',
  },
],


  'naturfag-9-5-7': [
  {
    question: 'Hva handler teknologietikk om?',
    options: ['Å vurdere om noe vi kan gjøre med teknologi, er noe vi bør gjøre', 'Bare hvordan teknologi virker teknisk', 'Hvordan man reparerer datamaskiner', 'Hvor mye teknologi koster'],
    explanation: 'Teknologietikk handler om å vurdere om noe vi kan gjøre med teknologi faktisk er noe vi bør gjøre, og hva som er riktig og galt.',
  },
  {
    question: 'Hva er CRISPR?',
    options: ['Et presist verktøy for å klippe og redigere gener', 'En type datamaskin', 'En vaksine mot virus', 'Et programmeringsspråk'],
    explanation: 'CRISPR er et nytt, presist verktøy for å klippe og redigere gener (genteknologi). Det reiser også etiske spørsmål, særlig om endring av arvelige gener.',
  },
  {
    question: 'Hva er personvern?',
    options: ['Retten til å bestemme over egne personopplysninger', 'Retten til gratis internett', 'En metode for datalagring', 'En type vaksine'],
    explanation: 'Personvern er retten til å bestemme hvem som får vite hva om deg. Personopplysninger er informasjon som kan knyttes til en bestemt person, som navn, bilder og lokasjon.',
  },
  {
    question: 'Hva er en utfordring med kunstig intelligens (KI)?',
    options: ['Deepfakes – falske bilder og videoer som ser ekte ut', 'At den aldri kan gjøre feil', 'At den ikke kan brukes til noe nyttig', 'At den ikke trenger data'],
    explanation: 'KI gir mange muligheter, men også utfordringer som deepfakes, tap av arbeidsplasser, ansvarsspørsmål og masseovervåking.',
  },
  {
    question: 'Hva innebærer kildekritikk i en digital verden?',
    options: ['Å vurdere hvem som står bak informasjonen og hva formålet er', 'Å tro på alt man leser på nett', 'Å bare bruke sosiale medier som kilde', 'Å unngå all informasjon'],
    explanation: 'Kildekritikk innebærer å vurdere hvem som står bak informasjonen, hva formålet er, når den ble publisert og om den kan bekreftes andre steder. Det er viktig mot falsk informasjon.',
  },
],


  'naturfag-9-6-1': [
  {
    question: 'Hva kjennetegner kjønnsceller (gameter)?',
    options: ['De inneholder halvparten av arvestoffet (23 kromosomer)', 'De inneholder dobbelt så mange kromosomer', 'De har ingen kromosomer', 'De er like store som vanlige celler'],
    explanation: 'Kjønnsceller (eggcelle og sædcelle) inneholder 23 kromosomer – halvparten av de 46 i vanlige celler. Ved befruktning blir summen igjen 46.',
  },
  {
    question: 'Hvor skjer befruktningen vanligvis?',
    options: ['I egglederen', 'I livmoren', 'I eggstokken', 'I skjeden'],
    explanation: 'Befruktningen skjer vanligvis i egglederen, der en sædcelle smelter sammen med eggcellen. Det befruktede egget fester seg deretter i livmoren.',
  },
  {
    question: 'Hva skjer under menstruasjon (dag 1–5 i syklusen)?',
    options: ['Livmorslimhinnen støtes ut fordi det ikke har skjedd befruktning', 'En eggcelle modnes', 'Befruktning skjer', 'Slimhinnen bygges opp'],
    explanation: 'Under menstruasjonen støtes livmorslimhinnen ut som blødning fordi egget ikke ble befruktet. Deretter bygges en ny slimhinne opp.',
  },
  {
    question: 'Hva avgjør barnets biologiske kjønn?',
    options: ['Om sædcellen bærer et X- eller Y-kromosom', 'Eggcellens kromosom', 'Morens hormoner', 'Temperaturen i livmoren'],
    explanation: 'Eggcellen bærer alltid X. Sædcellen bærer enten X (gir XX = jente) eller Y (gir XY = gutt). Derfor er det sædcellen som avgjør biologisk kjønn.',
  },
  {
    question: 'Hva er forskjellen på eneggede og toeggede tvillinger?',
    options: ['Eneggede kommer fra ett befruktet egg som deler seg, toeggede fra to ulike egg', 'Eneggede kommer fra to egg', 'Toeggede er alltid identiske', 'Det er ingen forskjell'],
    explanation: 'Eneggede tvillinger oppstår når ett befruktet egg deler seg i to og blir genetisk identiske. Toeggede oppstår når to eggceller befruktes av hver sin sædcelle.',
  },
],


  'naturfag-9-6-2': [
  {
    question: 'Hva er morkakens (placentas) hovedfunksjon?',
    options: ['Å føre oksygen og næring fra mor til foster og avfall den andre veien', 'Å beskytte fosteret mot støt', 'Å produsere sædceller', 'Å gi fosteret bein'],
    explanation: 'Morkaken fører oksygen og næringsstoffer fra morens blod til fosteret, og karbondioksid og avfall tilbake til mor. Den produserer også hormoner.',
  },
  {
    question: 'Omtrent hvor lenge varer et normalt svangerskap?',
    options: ['Ca. 40 uker', 'Ca. 20 uker', 'Ca. 52 uker', 'Ca. 12 uker'],
    explanation: 'Et normalt svangerskap varer ca. 40 uker (rundt 9 måneder), delt inn i tre trimestre.',
  },
  {
    question: 'Hva er fostervannets oppgave?',
    options: ['Å beskytte og støtdempe fosteret inne i fosterhinnen', 'Å gi fosteret næring direkte', 'Å produsere hormoner', 'Å transportere oksygen'],
    explanation: 'Fostervannet er en klar væske inne i fosterhinnen som beskytter og støtdemper fosteret. Fosteret svelger og tisser det ut, noe som er viktig for utviklingen.',
  },
  {
    question: 'Hvorfor bør gravide unngå alkohol fullstendig?',
    options: ['Alkohol passerer morkaken og kan gi varige skader (føtalt alkoholsyndrom)', 'Alkohol gir fosteret for mye energi', 'Alkohol har ingen effekt på fosteret', 'Alkohol bare påvirker moren'],
    explanation: 'Alkohol passerer morkaken og kan skade fosterets hjerne og utvikling (føtalt alkoholsyndrom, FAS). Det finnes ingen kjent trygg mengde alkohol under svangerskap.',
  },
  {
    question: 'Hva skjer i den nyfødtes lunger rett etter fødselen?',
    options: ['Barnet tar sitt første pust slik at lungene fylles med luft for første gang', 'Lungene slutter å virke', 'Lungene fylles med fostervann permanent', 'Lungene erstattes av morkaken'],
    explanation: 'Etter fødselen tar barnet sitt første pust og skriker, slik at lungene fylles med luft for første gang og overtar oksygenopptaket fra morkaken.',
  },
],


  'naturfag-9-6-3': [
  {
    question: 'Hvilken prevensjonsmetode er en barrieremetode?',
    options: ['Kondom', 'P-piller', 'P-stav', 'Hormonspiral'],
    explanation: 'Kondom er en barrieremetode som fysisk hindrer sædcellene i å nå eggcellen. P-piller, p-stav og hormonspiral er hormonelle metoder.',
  },
  {
    question: 'Hva er den viktigste virkningen av hormonell prevensjon?',
    options: ['Å hindre eggløsning', 'Å drepe bakterier', 'Å beskytte mot alle SOI', 'Å stoppe menstruasjon for alltid'],
    explanation: 'Hormonell prevensjon virker først og fremst ved å hindre eggløsning. Den beskytter ikke mot seksuelt overførbare infeksjoner – det gjør bare kondom.',
  },
  {
    question: 'Hvilken SOI er en bakterieinfeksjon som kan behandles med antibiotika?',
    options: ['Klamydia', 'Herpes', 'Hiv', 'HPV'],
    explanation: 'Klamydia skyldes en bakterie og kan behandles med antibiotika. Herpes, hiv og HPV skyldes virus og kan ikke kureres, men kan behandles eller forebygges med vaksine.',
  },
  {
    question: 'Hva betyr "dobbeltbeskyttelse" i seksuell sammenheng?',
    options: ['Å bruke kondom sammen med en annen prevensjonsmetode', 'Å bruke to kondomer samtidig', 'Å ta p-piller to ganger', 'Å unngå all kontakt'],
    explanation: 'Dobbeltbeskyttelse er å bruke kondom (mot SOI og graviditet) sammen med en annen prevensjonsmetode som p-piller (ekstra sikkerhet mot graviditet). To kondomer samtidig er IKKE anbefalt.',
  },
  {
    question: 'Hvorfor er klamydia ekstra viktig å oppdage og behandle tidlig?',
    options: ['Ubehandlet kan den gi betennelse og arr i egglederne og nedsatt fruktbarhet', 'Den smitter ikke videre', 'Den går alltid over av seg selv', 'Den gir alltid tydelige symptomer'],
    explanation: 'Klamydia gir ofte ingen symptomer, men ubehandlet kan den føre til betennelse og arrdannelse i egglederne, noe som kan gi nedsatt fruktbarhet. Derfor er testing viktig.',
  },
],


  'naturfag-9-6-4': [
  {
    question: 'Hva handler seksuell orientering om?',
    options: ['Hvem man er romantisk og/eller seksuelt tiltrukket av', 'Hvilket kjønn man føler seg som', 'Hvor gammel man er', 'Hvilket land man kommer fra'],
    explanation: 'Seksuell orientering handler om hvem man er tiltrukket av, for eksempel heterofil, homofil, bifil eller panfil. Det er noe annet enn kjønnsidentitet.',
  },
  {
    question: 'Hva er kjønnsidentitet?',
    options: ['Den indre opplevelsen av eget kjønn', 'Hvem man er tiltrukket av', 'Hvilke klær man liker', 'Hvor man bor'],
    explanation: 'Kjønnsidentitet er den indre opplevelsen av eget kjønn. En cisperson opplever samsvar med kjønnet de fikk ved fødselen, en transperson opplever ikke samsvar.',
  },
  {
    question: 'Hva er et viktig kjennetegn ved gyldig samtykke?',
    options: ['Det er frivillig og kan trekkes tilbake når som helst', 'Det gjelder for alltid når det først er gitt', 'Det kreves bare fra den ene parten', 'Stillhet betyr alltid ja'],
    explanation: 'Samtykke skal være frivillig, aktivt, gjensidig, informert og spesifikt, og kan trekkes tilbake når som helst – også underveis. Fravær av nei er ikke samtykke.',
  },
  {
    question: 'Hva sier norsk lov om deling av andres intime bilder uten samtykke?',
    options: ['Det er ulovlig, også for ungdom', 'Det er lov hvis man er under 18', 'Det er lov hvis bildet er pent', 'Det er bare uhøflig, ikke ulovlig'],
    explanation: 'Å dele intime bilder av andre uten samtykke er ulovlig i Norge, også når de involverte er ungdom. Seksuell trakassering på nett er også straffbart.',
  },
  {
    question: 'Hva er forskjellen mellom kjønnsidentitet og seksuell orientering?',
    options: ['Kjønnsidentitet er hvem man føler seg som, orientering er hvem man tiltrekkes av', 'De betyr nøyaktig det samme', 'Kjønnsidentitet gjelder bare voksne', 'Orientering bestemmes av klær'],
    explanation: 'Kjønnsidentitet handler om hvilket kjønn man føler seg som, mens seksuell orientering handler om hvem man er romantisk eller seksuelt tiltrukket av. Det er to ulike ting.',
  },
],


  'naturfag-9-6-5': [
  {
    question: 'Hva er hormoner?',
    options: ['Signalstoffer som lages i kjertler og virker på bestemte målceller via blodet', 'En type næringsstoff i mat', 'Celler i nervesystemet', 'Mineraler i skjelettet'],
    explanation: 'Hormoner er signalstoffer som produseres i endokrine kjertler og fraktes med blodet. De virker i små mengder på celler som har riktig reseptor.',
  },
  {
    question: 'Hvilket hormon utløser eggløsning hos kvinner?',
    options: ['LH (luteiniserende hormon)', 'Testosteron', 'Insulin', 'Adrenalin'],
    explanation: 'LH (luteiniserende hormon) utløser eggløsningen. FSH stimulerer modning av eggceller. Disse hormonene styrer menstruasjonssyklusen.',
  },
  {
    question: 'Hva er negativ tilbakekobling i hormonsystemet?',
    options: ['Når høyt nivå av et hormon demper videre produksjon, så nivået holdes i balanse', 'Når hormonnivået bare stiger og stiger', 'Når hormoner slutter å virke', 'Når kjertlene slutter å produsere hormoner for alltid'],
    explanation: 'Negativ tilbakekobling holder hormonnivåene i balanse: når nivået av et hormon blir høyt nok, sender det signal som demper videre produksjon, omtrent som en termostat.',
  },
  {
    question: 'Hvilket hormon påvises i en graviditetstest?',
    options: ['hCG', 'Testosteron', 'Insulin', 'Adrenalin'],
    explanation: 'Graviditetstester påviser hormonet hCG i urinen. Det produseres tidlig i svangerskapet etter at det befruktede egget har festet seg.',
  },
  {
    question: 'Hvilken livsstilsfaktor kan redusere fruktbarheten hos både menn og kvinner?',
    options: ['Røyking', 'Å sove nok', 'Å spise variert', 'Å drikke vann'],
    explanation: 'Røyking reduserer fruktbarheten hos begge kjønn. Også over- og undervekt, stress og rusmidler kan påvirke hormonbalanse og fruktbarhet negativt.',
  },
],


};

export default quizData_naturfag_9;
