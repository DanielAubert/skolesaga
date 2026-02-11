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


};

export default quizData_naturfag_9;
