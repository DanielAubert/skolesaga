import type { QuizQuestion } from './quiz-data';

const quizData_kjemi1: Record<string, QuizQuestion[]> = {
  'kjemi1-1-1': [
  {
    question: 'Hvilke partikler finnes i atomkjernen?',
    options: [
      'Protoner og nøytroner',
      'Protoner og elektroner',
      'Nøytroner og elektroner',
      'Bare protoner',
    ],
    explanation: 'Atomkjernen består av positivt ladde protoner og nøytrale nøytroner. Elektronene beveger seg utenfor kjernen.',
  },
  {
    question: 'Hva angir atomnummeret Z?',
    options: [
      'Antall protoner i kjernen',
      'Antall nøytroner i kjernen',
      'Summen av protoner og nøytroner',
      'Antall elektronskall',
    ],
    explanation: 'Atomnummeret Z er antall protoner i kjernen og bestemmer hvilket grunnstoff atomet er. I et nøytralt atom er antall elektroner lik Z.',
  },
  {
    question: 'Hvor mange nøytroner har jern-56 når atomnummeret er 26?',
    options: [
      '30',
      '26',
      '56',
      '82',
    ],
    explanation: 'Antall nøytroner = massetall − atomnummer = 56 − 26 = 30.',
  },
  {
    question: 'Hva er isotoper?',
    options: [
      'Atomer av samme grunnstoff med likt antall protoner, men ulikt antall nøytroner',
      'Atomer med likt antall nøytroner, men ulikt antall protoner',
      'Atomer med ulik ladning',
      'Atomer av forskjellige grunnstoff med samme massetall',
    ],
    explanation: 'Isotoper har samme atomnummer (samme grunnstoff), men ulikt massetall fordi de har forskjellig antall nøytroner, f.eks. karbon-12 og karbon-14.',
  },
  {
    question: 'Hva kalles grunnstoffene i gruppe 1 i periodesystemet?',
    options: [
      'Alkalimetaller',
      'Halogener',
      'Edelgasser',
      'Jordalkalimetaller',
    ],
    explanation: 'Gruppe 1 er alkalimetallene (Li, Na, K, ...). Gruppe 2 er jordalkalimetaller, gruppe 17 er halogener og gruppe 18 er edelgasser.',
  },
],

  'kjemi1-1-2': [
  {
    question: 'Hvor mange elektroner kan det maksimalt være i skall nummer 2 (L-skallet)?',
    options: [
      '8',
      '2',
      '18',
      '32',
    ],
    explanation: 'Maksimalt antall elektroner i skall n er 2n². For n = 2 gir det 2 · 2² = 8 elektroner.',
  },
  {
    question: 'Hva er elektronkonfigurasjonen til natrium (Z = 11)?',
    options: [
      '1s² 2s² 2p⁶ 3s¹',
      '1s² 2s² 2p⁷',
      '1s² 2s² 2p⁶ 3p¹',
      '1s² 2s² 2p⁵ 3s²',
    ],
    explanation: 'Natrium har 11 elektroner som fylles etter Aufbau-prinsippet: 2 i 1s, 2 i 2s, 6 i 2p og det siste i 3s. Skallfordelingen er 2-8-1.',
  },
  {
    question: 'Hvor mange valenselektroner har oksygen (gruppe 16)?',
    options: [
      '6',
      '8',
      '2',
      '16',
    ],
    explanation: 'For hovedgruppene angir gruppenummerets siste siffer antall valenselektroner: gruppe 16 gir 6 valenselektroner. Oksygen har konfigurasjonen 2-6.',
  },
  {
    question: 'Hva sier oktettregelen?',
    options: [
      'Atomer streber etter 8 elektroner i ytterste skall, som edelgassene',
      'Atomer streber etter 8 protoner i kjernen',
      'Alle atomer må ha nøyaktig 8 skall',
      'Atomer kan maksimalt danne 8 bindinger',
    ],
    explanation: 'Oktettregelen sier at atomer reagerer slik at de oppnår 8 elektroner i ytterste skall (edelgasskonfigurasjon), enten ved å avgi, ta opp eller dele elektroner.',
  },
  {
    question: 'Hvordan oppnår klor (Z = 17) edelgasskonfigurasjon?',
    options: [
      'Tar opp ett elektron og blir Cl⁻',
      'Avgir ett elektron og blir Cl⁺',
      'Avgir sju elektroner',
      'Tar opp to elektroner og blir Cl²⁻',
    ],
    explanation: 'Klor har 7 valenselektroner og mangler bare ett for å få oktett. Det tar derfor opp ett elektron og danner kloridionet Cl⁻ med samme konfigurasjon som argon.',
  },
],

  'kjemi1-1-3': [
  {
    question: 'Hvordan endrer atomradiusen seg bortover i en periode (fra venstre mot høyre)?',
    options: [
      'Den minker, fordi kjerneladningen øker mens elektronene fylles i samme skall',
      'Den øker, fordi det blir flere elektroner',
      'Den er konstant innenfor en periode',
      'Den minker fordi antall skall minker',
    ],
    explanation: 'Bortover i perioden øker antall protoner, og den økte kjerneladningen trekker elektronene i samme skall tettere inn mot kjernen. Radius minker.',
  },
  {
    question: 'Hvordan endrer atomradiusen seg nedover i en gruppe?',
    options: [
      'Den øker, fordi det kommer til nye elektronskall',
      'Den minker, fordi kjerneladningen øker',
      'Den er uendret',
      'Den varierer tilfeldig',
    ],
    explanation: 'Nedover i en gruppe får atomene flere elektronskall, og ytterste skall ligger derfor lenger fra kjernen. Atomradiusen øker.',
  },
  {
    question: 'Hva er ioniseringsenergi?',
    options: [
      'Energien som kreves for å fjerne et elektron fra et atom i gassfase',
      'Energien som frigjøres når et atom tar opp et elektron',
      'Energien i en ionebinding',
      'Energien som kreves for å spalte kjernen',
    ],
    explanation: 'Ioniseringsenergien er energien som må tilføres for å fjerne det løsest bundne elektronet fra et atom i gassfase. Den øker generelt bortover i perioden.',
  },
  {
    question: 'Hvilket grunnstoff har høyest elektronegativitet?',
    options: [
      'Fluor',
      'Oksygen',
      'Cesium',
      'Helium',
    ],
    explanation: 'Fluor har høyest elektronegativitet av alle grunnstoffer (4,0 på Pauling-skalaen). Elektronegativiteten øker oppover og mot høyre i periodesystemet (edelgassene holdes utenfor).',
  },
  {
    question: 'Hvor i periodesystemet er metallkarakteren sterkest?',
    options: [
      'Nede til venstre',
      'Oppe til høyre',
      'I midten',
      'Hos edelgassene',
    ],
    explanation: 'Metallkarakteren øker nedover i gruppene og mot venstre i periodene. Derfor er de mest typiske metallene (som cesium) nede til venstre, mens ikke-metallene er oppe til høyre.',
  },
],

  'kjemi1-1-4': [
  {
    question: 'Hva heter forbindelsen CaCl₂?',
    options: [
      'Kalsiumklorid',
      'Kalsiumdiklorid',
      'Kaliumklorid',
      'Kalsiumklorat',
    ],
    explanation: 'Ioniske forbindelser navngis med metallet først og anionet med endelsen -id: kalsiumklorid. Greske prefiks brukes ikke for ioniske forbindelser, siden ladningene bestemmer formelen.',
  },
  {
    question: 'Hva heter molekylforbindelsen N₂O₄?',
    options: [
      'Dinitrogentetraoksid',
      'Nitrogenoksid',
      'Dinitrogendioksid',
      'Nitrogentetraoksid',
    ],
    explanation: 'For molekylforbindelser brukes greske prefiks for antall atomer: di- for 2 nitrogen og tetra- for 4 oksygen, altså dinitrogentetraoksid.',
  },
  {
    question: 'Hvilket antall angir prefikset "penta"?',
    options: [
      '5',
      '4',
      '6',
      '7',
    ],
    explanation: 'De greske prefiksene er: mono = 1, di = 2, tri = 3, tetra = 4, penta = 5, heksa = 6.',
  },
  {
    question: 'Hva heter syren H₂SO₄?',
    options: [
      'Svovelsyre',
      'Svovelsyrling',
      'Saltsyre',
      'Salpetersyre',
    ],
    explanation: 'H₂SO₄ er svovelsyre. HCl er saltsyre og HNO₃ er salpetersyre.',
  },
  {
    question: 'Hvilken endelse får enatomige anioner som klorid og oksid?',
    options: [
      '-id',
      '-at',
      '-itt',
      '-ium',
    ],
    explanation: 'Enatomige (og noen få flerleddete) anioner får endelsen -id: klorid (Cl⁻), oksid (O²⁻), sulfid (S²⁻). Endelsene -at og -itt brukes for oksoanioner som sulfat og sulfitt.',
  },
],

  'kjemi1-2-1': [
  {
    question: 'Hva førte Thomsons katodestråle-eksperiment til oppdagelsen av?',
    options: [
      'Elektronet',
      'Protonet',
      'Nøytronet',
      'Atomkjernen',
    ],
    explanation: 'Thomson viste i 1897 at katodestråler består av små negativt ladde partikler — elektroner. Han foreslo deretter "plumkake-modellen" der elektronene ligger i en positiv masse.',
  },
  {
    question: 'Hva var den viktigste konklusjonen fra Rutherfords gullfolie-eksperiment?',
    options: [
      'Atomet er for det meste tomrom med en liten, positivt ladet kjerne',
      'Elektronene ligger jevnt fordelt i en positiv "deig"',
      'Atomet er en massiv, udelelig kule',
      'Elektronene går i faste baner med bestemte energier',
    ],
    explanation: 'De fleste alfapartiklene gikk rett gjennom gullfolien, men noen få ble kraftig avbøyd. Det viste at nesten all masse og all positiv ladning er samlet i en bitteliten kjerne.',
  },
  {
    question: 'Hva var det nye i Bohrs atommodell?',
    options: [
      'Elektronene kan bare gå i bestemte baner med bestemte energier',
      'Atomet har en kjerne',
      'Elektronene finnes i orbitaler med sannsynlighetsfordeling',
      'Atomer kan ikke deles',
    ],
    explanation: 'Bohr postulerte i 1913 at elektronene bare kan ha bestemte, kvantiserte energier, og at lys sendes ut når elektronet hopper mellom nivåene. Dette forklarte hydrogenets linjespekter.',
  },
  {
    question: 'Hva er en orbital i den kvantemekaniske atommodellen?',
    options: [
      'Et område der det er stor sannsynlighet for å finne elektronet',
      'En sirkelbane elektronet følger rundt kjernen',
      'En partikkel inne i kjernen',
      'Et energinivå i kjernen',
    ],
    explanation: 'I den kvantemekaniske modellen erstattes Bohrs baner av orbitaler — områder der sannsynligheten for å finne elektronet er stor. Vi kan ikke kjenne både posisjon og fart nøyaktig (Heisenberg).',
  },
  {
    question: 'Hvilken rekkefølge kom atommodellene i?',
    options: [
      'Dalton, Thomson, Rutherford, Bohr, kvantemekanisk modell',
      'Thomson, Dalton, Bohr, Rutherford, kvantemekanisk modell',
      'Dalton, Rutherford, Thomson, kvantemekanisk modell, Bohr',
      'Bohr, Dalton, Thomson, Rutherford, kvantemekanisk modell',
    ],
    explanation: 'Utviklingen gikk fra Daltons udelelige kuler (1803), via Thomsons plumkake (1897) og Rutherfords kjernemodell (1911), til Bohrs kvantiserte baner (1913) og den kvantemekaniske modellen (1920-tallet).',
  },
],

  'kjemi1-2-2': [
  {
    question: 'Hva er sammenhengen mellom bølgelengde og frekvens for elektromagnetisk stråling?',
    options: [
      'De er omvendt proporsjonale: $c = \\lambda f$',
      'De er proporsjonale: lengre bølgelengde gir høyere frekvens',
      'De er uavhengige av hverandre',
      'De er alltid like store',
    ],
    explanation: 'Lysfarten er konstant: $c = \\lambda f$. Når bølgelengden øker, må frekvensen minke, og omvendt.',
  },
  {
    question: 'Hvordan avhenger energien til et foton av frekvensen?',
    options: [
      'Energien er proporsjonal med frekvensen: $E = hf$',
      'Energien er omvendt proporsjonal med frekvensen',
      'Energien er uavhengig av frekvensen',
      'Energien er proporsjonal med kvadratet av bølgelengden',
    ],
    explanation: 'Plancks relasjon: $E = hf$. Høy frekvens (kort bølgelengde) gir energirike fotoner — derfor er UV-stråling farligere enn synlig lys.',
  },
  {
    question: 'Hvordan oppstår et emisjonsspekter med lyse linjer?',
    options: [
      'Eksiterte elektroner faller ned til lavere energinivåer og sender ut fotoner med bestemte energier',
      'Atomene absorberer lys ved alle bølgelengder',
      'Kjernen sender ut stråling ved oppvarming',
      'Elektronene bremses opp og avgir kontinuerlig stråling',
    ],
    explanation: 'Når elektroner i eksiterte atomer faller til lavere energinivåer, sendes det ut fotoner med energi lik nivådifferansen. Siden nivåene er kvantiserte, blir det et linjespekter som er unikt for hvert grunnstoff.',
  },
  {
    question: 'Hva sier Beer-Lamberts lov?',
    options: [
      'Absorbansen er proporsjonal med konsentrasjonen: $A = \\varepsilon c l$',
      'Absorbansen er uavhengig av konsentrasjonen',
      'Transmittansen er proporsjonal med konsentrasjonen',
      'Absorbansen er omvendt proporsjonal med veilengden',
    ],
    explanation: 'Beer-Lamberts lov: $A = \\varepsilon c l$, der ε er molar absorptivitet, c er konsentrasjonen og l er veilengden. Loven brukes til å bestemme ukjente konsentrasjoner med spektrofotometer.',
  },
  {
    question: 'En løsning med c = 0,010 mol/L måles i en kyvette med l = 1,0 cm, og ε = 200 L/(mol·cm). Hva blir absorbansen?',
    options: [
      '2,0',
      '0,20',
      '20',
      '0,050',
    ],
    explanation: '$A = \\varepsilon c l = 200 \\cdot 0{,}010 \\cdot 1{,}0 = 2{,}0$.',
  },
],

  'kjemi1-3-1': [
  {
    question: 'Hva er en ionebinding?',
    options: [
      'Elektrostatisk tiltrekning mellom positive og negative ioner etter elektronoverføring',
      'Deling av elektronpar mellom to atomer',
      'Tiltrekning mellom midlertidige dipoler',
      'Binding mellom to metallatomer',
    ],
    explanation: 'Ionebinding oppstår når elektroner overføres fra et metall til et ikke-metall, og de motsatt ladde ionene tiltrekkes elektrostatisk.',
  },
  {
    question: 'Hvilken formel får forbindelsen av aluminium (Al³⁺) og oksid (O²⁻)?',
    options: [
      'Al₂O₃',
      'AlO',
      'Al₃O₂',
      'AlO₂',
    ],
    explanation: 'Total ladning må bli null: 2 Al³⁺ gir +6 og 3 O²⁻ gir −6. Formelen blir Al₂O₃ (kryssregelen: ladningstallene byttes om til indekser).',
  },
  {
    question: 'Når leder en ionisk forbindelse elektrisk strøm?',
    options: [
      'Når den er smeltet eller løst i vann, fordi ionene da kan bevege seg fritt',
      'Bare i fast form, fordi gitteret leder elektroner',
      'Aldri, ioniske stoffer er alltid isolatorer',
      'Bare ved svært lave temperaturer',
    ],
    explanation: 'I fast form sitter ionene fast i gitteret og kan ikke lede strøm. Når stoffet smeltes eller løses i vann, blir ionene bevegelige og kan transportere ladning.',
  },
  {
    question: 'Hvorfor har ioniske forbindelser høye smeltepunkter?',
    options: [
      'Fordi de sterke elektrostatiske kreftene i ionegitteret krever mye energi å bryte',
      'Fordi molekylene er store',
      'Fordi de inneholder hydrogenbindinger',
      'Fordi de leder varme dårlig',
    ],
    explanation: 'I et ionegitter holdes hvert ion på plass av sterke elektrostatiske krefter til mange naboioner. Det kreves mye energi å bryte gitteret, og smeltepunktet blir høyt (NaCl: 801 °C).',
  },
  {
    question: 'Hvilken elektronkonfigurasjon får Mg²⁺ (Z = 12)?',
    options: [
      'Samme som neon: 1s² 2s² 2p⁶',
      'Samme som argon: 1s² 2s² 2p⁶ 3s² 3p⁶',
      '1s² 2s² 2p⁶ 3s²',
      '1s² 2s² 2p⁴',
    ],
    explanation: 'Magnesium har 12 elektroner og avgir de to 3s-elektronene. Mg²⁺ har da 10 elektroner i konfigurasjonen 1s² 2s² 2p⁶, som er edelgasskonfigurasjonen til neon.',
  },
],

  'kjemi1-3-2': [
  {
    question: 'Hva er en kovalent binding?',
    options: [
      'To atomer deler ett eller flere elektronpar',
      'Elektroner overføres fra ett atom til et annet',
      'Tiltrekning mellom ioner med motsatt ladning',
      'Tiltrekning mellom polare molekyler',
    ],
    explanation: 'Kovalent binding (elektronparbinding) oppstår når to atomer, vanligvis ikke-metaller, deler elektronpar slik at begge oppnår edelgasskonfigurasjon.',
  },
  {
    question: 'Hvor mange elektronpar deles i trippelbindingen i N₂?',
    options: [
      '3',
      '1',
      '2',
      '6',
    ],
    explanation: 'I en trippelbinding deles tre elektronpar (6 elektroner). Trippelbindingen i N₂ er svært sterk, og derfor er nitrogengass lite reaktiv.',
  },
  {
    question: 'Hva gjør bindingen i HCl polar?',
    options: [
      'Klor har høyere elektronegativitet og trekker bindingselektronene mot seg',
      'Hydrogen har høyest elektronegativitet',
      'Atomene har nøyaktig lik elektronegativitet',
      'Elektronene overføres fullstendig til klor',
    ],
    explanation: 'Klor er mer elektronegativt enn hydrogen, så bindingselektronene forskyves mot klor. Klor får en delvis negativ ladning (δ−) og hydrogen en delvis positiv (δ+).',
  },
  {
    question: 'Hvorfor er vannmolekylet bøyd (vinkelformet)?',
    options: [
      'De to frie elektronparene på oksygen frastøter bindingsparene og presser dem sammen',
      'Hydrogenatomene tiltrekker hverandre',
      'Oksygen har bare ett bindingspar',
      'Molekylet er egentlig lineært',
    ],
    explanation: 'Etter VSEPR-teorien ordner de fire elektronparene rundt oksygen seg tilnærmet tetraedrisk. De to frie parene tar mer plass og presser O–H-bindingene sammen til en vinkel på ca. 104,5°.',
  },
  {
    question: 'Hvilken geometri har metan (CH₄)?',
    options: [
      'Tetraedrisk med bindingsvinkler på 109,5°',
      'Plan kvadratisk med vinkler på 90°',
      'Trigonal planar med vinkler på 120°',
      'Lineær med vinkler på 180°',
    ],
    explanation: 'Karbon i CH₄ har fire bindingspar og ingen frie par. Etter VSEPR-teorien fordeler de seg tetraedrisk med bindingsvinkler på 109,5°.',
  },
],

  'kjemi1-3-3': [
  {
    question: 'Hvilken rekkefølge fra svakest til sterkest er riktig for mellommolekylære krefter?',
    options: [
      'Van der Waals-krefter < dipol-dipol-krefter < hydrogenbindinger',
      'Hydrogenbindinger < dipol-dipol-krefter < Van der Waals-krefter',
      'Dipol-dipol-krefter < hydrogenbindinger < Van der Waals-krefter',
      'Alle tre er like sterke',
    ],
    explanation: 'Van der Waals-krefter (dispersjonskrefter) er svakest, dipol-dipol-krefter er sterkere, og hydrogenbindinger er de sterkeste mellommolekylære kreftene. Alle er likevel mye svakere enn kovalente bindinger.',
  },
  {
    question: 'Når kan et molekyl danne hydrogenbindinger?',
    options: [
      'Når hydrogen er bundet direkte til N, O eller F',
      'Når molekylet inneholder hydrogen i det hele tatt',
      'Når molekylet er upolart',
      'Når hydrogen er bundet til karbon',
    ],
    explanation: 'Hydrogenbindinger krever at H er bundet til et lite, sterkt elektronegativt atom: nitrogen, oksygen eller fluor. Derfor danner H₂O og NH₃ hydrogenbindinger, men ikke CH₄.',
  },
  {
    question: 'Hvorfor har vann uvanlig høyt kokepunkt sammenlignet med lignende små molekyler?',
    options: [
      'Hydrogenbindingene mellom vannmolekylene krever mye energi å bryte',
      'Vannmolekylene er svært tunge',
      'De kovalente O–H-bindingene må brytes ved koking',
      'Vann inneholder oppløste salter',
    ],
    explanation: 'Hvert vannmolekyl kan danne hydrogenbindinger til naboene. Ved koking må disse sterke mellommolekylære kreftene overvinnes, og det gir vann et kokepunkt på 100 °C — langt høyere enn f.eks. H₂S.',
  },
  {
    question: 'Hvorfor øker kokepunktet i alkanrekken fra metan til oktan?',
    options: [
      'Større molekyler har flere elektroner og dermed sterkere dispersjonskrefter',
      'Større alkaner danner hydrogenbindinger',
      'Større alkaner er mer polare',
      'Mindre molekyler har sterkere krefter',
    ],
    explanation: 'Alkaner er upolare og holdes sammen av Van der Waals-krefter (dispersjonskrefter). Disse øker med antall elektroner og kontaktflate, så større alkaner har høyere kokepunkt.',
  },
  {
    question: 'Hva sier regelen "likt løser likt"?',
    options: [
      'Polare stoffer løses i polare løsemidler, upolare i upolare',
      'Stoffer med lik masse løser hverandre',
      'Alle væsker er blandbare',
      'Faste stoffer løses bare i faste stoffer',
    ],
    explanation: 'Stoffer løses best i løsemidler med samme type mellommolekylære krefter. Polart salt og sukker løses i polart vann, mens upolart fett løses i upolare løsemidler som heksan.',
  },
],

  'kjemi1-4-1': [
  {
    question: 'Hva kjennetegner en syre-basereaksjon (protolyse) etter Brønsted-Lowry?',
    options: [
      'Et proton (H⁺) overføres fra syre til base',
      'Elektroner overføres mellom stoffene',
      'Det dannes et tungtløselig salt',
      'Et metallion binder ligander',
    ],
    explanation: 'I en protolysereaksjon avgir syren et proton (H⁺) som basen tar opp. Eksempel: HCl + H₂O → Cl⁻ + H₃O⁺.',
  },
  {
    question: 'Hva kjennetegner en redoksreaksjon?',
    options: [
      'Elektroner overføres fra ett stoff til et annet',
      'Protoner overføres fra syre til base',
      'To løsninger blandes uten at noe skjer',
      'Vann fordamper fra løsningen',
    ],
    explanation: 'I en redoksreaksjon overføres elektroner: stoffet som avgir elektroner oksideres, og stoffet som tar opp elektroner reduseres.',
  },
  {
    question: 'Hva skjer når løsninger av sølvnitrat og natriumklorid blandes?',
    options: [
      'Det felles ut hvitt, tungtløselig sølvklorid: Ag⁺ + Cl⁻ → AgCl(s)',
      'Det dannes gass',
      'Ingenting, alle salter er lettløselige',
      'Løsningen blir sterkt sur',
    ],
    explanation: 'Sølvklorid er tungtløselig og felles ut som et hvitt bunnfall. Dette er en fellingsreaksjon: Ag⁺(aq) + Cl⁻(aq) → AgCl(s).',
  },
  {
    question: 'Hvilke av disse er typiske tegn på at en kjemisk reaksjon har funnet sted?',
    options: [
      'Fargeendring, gassutvikling, bunnfall eller temperaturendring',
      'At stoffet skifter form uten å endre seg kjemisk',
      'At væsken fordamper ved oppvarming',
      'At stoffet løses opp i vann uten andre endringer',
    ],
    explanation: 'Typiske tegn på kjemisk reaksjon er fargeendring, gassutvikling, dannelse av bunnfall og temperaturendring. Fordamping og smelting er fysiske endringer.',
  },
  {
    question: 'Hva skjer i en kompleksdanningsreaksjon?',
    options: [
      'Et metallion binder til seg ligander, som i [Cu(NH₃)₄]²⁺',
      'To syrer reagerer med hverandre',
      'Et salt spaltes til grunnstoffene',
      'Et proton overføres til vann',
    ],
    explanation: 'I kompleksdanning binder ligander (som NH₃ eller H₂O) seg til et sentralt metallion. Eksempel: Cu²⁺ + 4NH₃ → [Cu(NH₃)₄]²⁺, som gir en dyp blå farge.',
  },
],

  'kjemi1-4-2': [
  {
    question: 'Hvorfor må kjemiske likninger balanseres?',
    options: [
      'Fordi massen er bevart — det må være like mange atomer av hvert grunnstoff på begge sider',
      'Fordi energien alltid er bevart',
      'Fordi antall molekyler må være likt på begge sider',
      'Fordi ladningen alltid skal være positiv',
    ],
    explanation: 'Massens bevaringslov sier at atomer verken skapes eller forsvinner i en kjemisk reaksjon. Derfor må antall atomer av hvert grunnstoff være likt på begge sider av pilen.',
  },
  {
    question: 'Hvilken koeffisient skal stå foran O₂ i likningen CH₄ + ?O₂ → CO₂ + 2H₂O?',
    options: [
      '2',
      '1',
      '3',
      '4',
    ],
    explanation: 'Høyresiden har 2 O i CO₂ og 2 O i 2H₂O, totalt 4 oksygenatomer. Det krever 2O₂ på venstresiden: CH₄ + 2O₂ → CO₂ + 2H₂O.',
  },
  {
    question: 'Hvilken koeffisient skal stå foran H₂ i likningen N₂ + ?H₂ → 2NH₃?',
    options: [
      '3',
      '2',
      '1',
      '6',
    ],
    explanation: 'Høyresiden har 2 · 3 = 6 hydrogenatomer. Det krever 3H₂ på venstresiden: N₂ + 3H₂ → 2NH₃.',
  },
  {
    question: 'Hva er tilskuerioner?',
    options: [
      'Ioner som er uforandret på begge sider og utelates i netto ionisk ligning',
      'Ionene som danner bunnfallet',
      'Ioner som bare finnes i produktene',
      'Ioner som endrer oksidasjonstall',
    ],
    explanation: 'Tilskuerioner deltar ikke i selve reaksjonen — de er like på begge sider av likningen og strykes når vi skriver netto ionisk ligning.',
  },
  {
    question: 'Hva er den vanligste feilen å unngå når man balanserer en likning?',
    options: [
      'Å endre indeksene i de kjemiske formlene i stedet for koeffisientene',
      'Å sette koeffisienter foran formlene',
      'Å telle atomene på begge sider',
      'Å begynne med det mest kompliserte stoffet',
    ],
    explanation: 'Indeksene angir hvilket stoff det er (H₂O er noe annet enn H₂O₂). Vi balanserer bare ved å endre koeffisientene foran formlene — aldri indeksene.',
  },
],

  'kjemi1-4-3': [
  {
    question: 'Hvilket oksidasjonstall har et fritt grunnstoff, som O₂ eller Fe(s)?',
    options: [
      '0',
      '+1',
      '-1',
      '+2',
    ],
    explanation: 'Frie grunnstoffer har alltid oksidasjonstall 0, uansett om de er enatomige eller molekyler som O₂ og N₂.',
  },
  {
    question: 'Hva er oksidasjonstallet til svovel i sulfationet SO₄²⁻?',
    options: [
      '+6',
      '+4',
      '-2',
      '+2',
    ],
    explanation: 'Oksygen har −2, og summen skal bli ionets ladning: x + 4·(−2) = −2, som gir x = +6.',
  },
  {
    question: 'Hva betyr det at et stoff oksideres?',
    options: [
      'Det avgir elektroner, og oksidasjonstallet øker',
      'Det tar opp elektroner, og oksidasjonstallet synker',
      'Det tar opp protoner',
      'Det danner bunnfall',
    ],
    explanation: 'Oksidasjon er å avgi elektroner — da øker oksidasjonstallet. Reduksjon er det motsatte: å ta opp elektroner slik at oksidasjonstallet synker.',
  },
  {
    question: 'Hva er oksidasjonstallet til mangan i KMnO₄?',
    options: [
      '+7',
      '+4',
      '+2',
      '+5',
    ],
    explanation: 'Kalium har +1 og hvert oksygen −2. Summen i en nøytral forbindelse er 0: (+1) + x + 4·(−2) = 0, som gir x = +7.',
  },
  {
    question: 'Ved hvilken elektrode skjer oksidasjonen i en galvanisk celle?',
    options: [
      'Anoden',
      'Katoden',
      'Saltbroen',
      'Begge elektrodene',
    ],
    explanation: 'Huskeregel: "An-Oks" — ved anoden skjer oksidasjonen (elektroner avgis), og ved katoden skjer reduksjonen.',
  },
],

  'kjemi1-5-1': [
  {
    question: 'Hvor mange partikler er det i ett mol?',
    options: [
      '6,022·10²³ (Avogadros tall)',
      '6,022·10²²',
      '1,602·10⁻¹⁹',
      '9,81·10²³',
    ],
    explanation: 'Ett mol inneholder Avogadros tall av partikler: $N_A = 6{,}022 \\cdot 10^{23}$ partikler per mol.',
  },
  {
    question: 'Hva er molmassen til vann, H₂O? (M(H) = 1,008 g/mol, M(O) = 16,00 g/mol)',
    options: [
      '18,02 g/mol',
      '17,01 g/mol',
      '34,02 g/mol',
      '10,00 g/mol',
    ],
    explanation: '$M(H_2O) = 2 \\cdot 1{,}008 + 16{,}00 = 18{,}02$ g/mol.',
  },
  {
    question: 'Hvor mange mol er 36 g vann? (M = 18 g/mol)',
    options: [
      '2,0 mol',
      '0,50 mol',
      '648 mol',
      '18 mol',
    ],
    explanation: '$n = \\frac{m}{M} = \\frac{36}{18} = 2{,}0$ mol.',
  },
  {
    question: 'Hvor mye veier 0,50 mol NaCl? (M = 58,4 g/mol)',
    options: [
      '29,2 g',
      '58,4 g',
      '116,8 g',
      '11,7 g',
    ],
    explanation: '$m = n \\cdot M = 0{,}50 \\cdot 58{,}4 = 29{,}2$ g.',
  },
  {
    question: 'Hva er sammenhengen mellom molmassen og den relative atommassen i periodesystemet?',
    options: [
      'Molmassen i g/mol er numerisk lik den relative atommassen',
      'Molmassen er alltid dobbelt så stor som atommassen',
      'De har ingen sammenheng',
      'Molmassen måles i kg og atommassen i gram',
    ],
    explanation: 'Den relative atommassen i periodesystemet (i u) er numerisk lik molmassen i g/mol. Karbon har f.eks. atommasse 12,01 u og molmasse 12,01 g/mol.',
  },
],

  'kjemi1-5-2': [
  {
    question: 'Hva blir konsentrasjonen når 0,50 mol stoff løses til 0,25 L løsning?',
    options: [
      '2,0 mol/L',
      '0,125 mol/L',
      '0,50 mol/L',
      '1,3 mol/L',
    ],
    explanation: '$c = \\frac{n}{V} = \\frac{0{,}50}{0{,}25} = 2{,}0$ mol/L.',
  },
  {
    question: '100 mL av en 2,0 mol/L løsning fortynnes til 500 mL. Hva blir den nye konsentrasjonen?',
    options: [
      '0,40 mol/L',
      '0,20 mol/L',
      '1,0 mol/L',
      '4,0 mol/L',
    ],
    explanation: 'Fortynningsformelen: $c_1 V_1 = c_2 V_2$, så $c_2 = \\frac{2{,}0 \\cdot 100}{500} = 0{,}40$ mol/L. Stoffmengden er uendret, bare volumet øker.',
  },
  {
    question: 'Hva tilsvarer 1 ppm i en vandig løsning?',
    options: [
      'Ca. 1 mg oppløst stoff per kg (eller liter) løsning',
      '1 g per liter',
      '1 mol per liter',
      '1 % av løsningen',
    ],
    explanation: 'ppm betyr "parts per million" — én milliondel. I fortynnede vandige løsninger tilsvarer 1 ppm omtrent 1 mg/kg, som er ca. 1 mg/L.',
  },
  {
    question: '15 g salt løses i 135 g vann. Hva er masseprosenten salt i løsningen?',
    options: [
      '10 %',
      '11 %',
      '15 %',
      '9,0 %',
    ],
    explanation: 'Total masse løsning = 15 + 135 = 150 g. Masseprosent = $\\frac{15}{150} \\cdot 100\\% = 10\\%$.',
  },
  {
    question: 'Hvor mange mol er det i 0,50 L av en 0,20 mol/L løsning?',
    options: [
      '0,10 mol',
      '0,40 mol',
      '0,25 mol',
      '2,5 mol',
    ],
    explanation: '$n = c \\cdot V = 0{,}20 \\cdot 0{,}50 = 0{,}10$ mol.',
  },
],

  'kjemi1-5-3': [
  {
    question: 'I reaksjonen 2H₂ + O₂ → 2H₂O: Hvor mange mol O₂ trengs for å reagere med 4 mol H₂?',
    options: [
      '2 mol',
      '4 mol',
      '8 mol',
      '1 mol',
    ],
    explanation: 'Molforholdet H₂ : O₂ er 2 : 1. Med 4 mol H₂ trengs $\\frac{4}{2} = 2$ mol O₂.',
  },
  {
    question: 'Hvor mange gram vann dannes når 4,0 g hydrogengass forbrennes fullstendig? (2H₂ + O₂ → 2H₂O, M(H₂) = 2,0 g/mol, M(H₂O) = 18 g/mol)',
    options: [
      '36 g',
      '18 g',
      '72 g',
      '9,0 g',
    ],
    explanation: '$n(H_2) = \\frac{4{,}0}{2{,}0} = 2{,}0$ mol. Molforholdet H₂ : H₂O er 2 : 2, så det dannes 2,0 mol H₂O = $2{,}0 \\cdot 18 = 36$ g.',
  },
  {
    question: 'Hva er en begrensende reaktant?',
    options: [
      'Reaktanten som brukes helt opp først og bestemmer hvor mye produkt som kan dannes',
      'Reaktanten det er mest av',
      'Reaktanten med størst molmasse',
      'Reaktanten som blir igjen etter reaksjonen',
    ],
    explanation: 'Den begrensende reaktanten brukes opp først, og da stopper reaksjonen. Mengden produkt beregnes alltid ut fra den begrensende reaktanten.',
  },
  {
    question: 'Teoretisk utbytte er 20 g, men du får 15 g produkt. Hva er prosentutbyttet?',
    options: [
      '75 %',
      '80 %',
      '25 %',
      '133 %',
    ],
    explanation: 'Prosentutbytte = $\\frac{praktisk}{teoretisk} \\cdot 100\\% = \\frac{15}{20} \\cdot 100\\% = 75\\%$.',
  },
  {
    question: 'I reaksjonen N₂ + 3H₂ → 2NH₃ blandes 2,0 mol N₂ med 3,0 mol H₂. Hvilken reaktant er begrensende?',
    options: [
      'H₂, fordi 2,0 mol N₂ ville krevd 6,0 mol H₂',
      'N₂, fordi det er minst mol av det',
      'Ingen av dem, forholdet er riktig',
      'NH₃',
    ],
    explanation: 'For å bruke opp 2,0 mol N₂ trengs $3 \\cdot 2{,}0 = 6{,}0$ mol H₂, men vi har bare 3,0 mol. H₂ brukes opp først og er begrensende.',
  },
],

  'kjemi1-5-4': [
  {
    question: 'Hva er den ideelle gassloven?',
    options: [
      '$pV = nRT$',
      '$pV = mRT$',
      '$p = nVRT$',
      '$pT = nRV$',
    ],
    explanation: 'Ideell gasslov: $pV = nRT$, der p er trykk, V er volum, n er stoffmengde, R er gasskonstanten og T er temperaturen i kelvin.',
  },
  {
    question: 'Hva er det molare volumet til en ideell gass ved STP (0 °C og 1 atm)?',
    options: [
      '22,4 L/mol',
      '24,5 L/mol',
      '18,0 L/mol',
      '1,00 L/mol',
    ],
    explanation: 'Ved standardbetingelsene STP (0 °C, 1 atm) opptar ett mol ideell gass 22,4 L, uansett hvilken gass det er.',
  },
  {
    question: 'Hvilket volum opptar 2,0 mol gass ved STP?',
    options: [
      '44,8 L',
      '22,4 L',
      '11,2 L',
      '89,6 L',
    ],
    explanation: '$V = n \\cdot V_m = 2{,}0 \\cdot 22{,}4 = 44{,}8$ L.',
  },
  {
    question: 'Hva sier Avogadros lov?',
    options: [
      'Like volumer gass ved samme temperatur og trykk inneholder like mange molekyler',
      'Trykket er proporsjonalt med temperaturen ved konstant volum',
      'Tunge gasser opptar mer plass enn lette',
      'Volumet er uavhengig av stoffmengden',
    ],
    explanation: 'Avogadros lov: Ved samme temperatur og trykk inneholder like gassvolumer like mange molekyler — uavhengig av hvilken gass det er.',
  },
  {
    question: 'Hvor mange mol gass er det i 11,2 L ved STP?',
    options: [
      '0,50 mol',
      '2,0 mol',
      '1,0 mol',
      '0,25 mol',
    ],
    explanation: '$n = \\frac{V}{V_m} = \\frac{11{,}2}{22{,}4} = 0{,}50$ mol.',
  },
],

  'kjemi1-6-1': [
  {
    question: 'Hva kjennetegner en eksoterm reaksjon?',
    options: [
      'Den avgir varme til omgivelsene, og ΔH < 0',
      'Den tar opp varme fra omgivelsene, og ΔH > 0',
      'Den skjer uten energiendring',
      'Den krever kontinuerlig oppvarming for å gå',
    ],
    explanation: 'I en eksoterm reaksjon frigjøres varme til omgivelsene, og entalpiendringen er negativ (ΔH < 0). Forbrenning er et typisk eksempel.',
  },
  {
    question: 'Hvordan ligger energinivåene i en endoterm reaksjon?',
    options: [
      'Produktene har høyere entalpi enn reaktantene',
      'Produktene har lavere entalpi enn reaktantene',
      'Produkter og reaktanter har samme entalpi',
      'Entalpi er ikke definert for endoterme reaksjoner',
    ],
    explanation: 'I en endoterm reaksjon tas energi opp fra omgivelsene, så produktene ligger høyere i energi enn reaktantene (ΔH > 0).',
  },
  {
    question: 'Hva sier termodynamikkens første lov?',
    options: [
      'Energi kan ikke skapes eller forsvinne, bare omdannes: ΔU = q + w',
      'Entropien i universet øker alltid',
      'Varme går alltid fra kaldt til varmt',
      'Alle reaksjoner frigjør energi',
    ],
    explanation: 'Termodynamikkens første lov er energibevaringsloven: endringen i indre energi er summen av tilført varme og arbeid, ΔU = q + w.',
  },
  {
    question: 'Hvordan ser energidiagrammet ut for en eksoterm reaksjon?',
    options: [
      'Produktene ligger lavere enn reaktantene, og differansen er frigjort energi',
      'Produktene ligger høyere enn reaktantene',
      'Kurven er en rett, horisontal linje',
      'Reaktantene ligger lavest',
    ],
    explanation: 'I energidiagrammet for en eksoterm reaksjon starter kurven hos reaktantene og ender lavere hos produktene. Differansen ΔH er energien som frigjøres.',
  },
  {
    question: 'Hvilken av disse prosessene er endoterm?',
    options: [
      'Fotosyntesen',
      'Forbrenning av metan',
      'Eksplosjon av dynamitt',
      'Rusting av jern',
    ],
    explanation: 'Fotosyntesen tar opp energi (sollys) for å bygge glukose — den er endoterm. Forbrenning, eksplosjoner og rusting frigjør energi og er eksoterme.',
  },
],

  'kjemi1-6-2': [
  {
    question: 'Hva er standard dannelsesentalpi, ΔfH°?',
    options: [
      'Entalpiendringen når 1 mol av stoffet dannes fra grunnstoffene i standardtilstand',
      'Energien som frigjøres ved fullstendig forbrenning av stoffet',
      'Entalpiendringen ved smelting av stoffet',
      'Energien som kreves for å fordampe 1 mol av stoffet',
    ],
    explanation: 'ΔfH° er entalpiendringen når 1 mol av en forbindelse dannes fra grunnstoffene i deres standardtilstander. For grunnstoffer i standardtilstand er ΔfH° = 0.',
  },
  {
    question: 'Hva sier Hess\' lov?',
    options: [
      'Reaksjonsentalpien er uavhengig av reaksjonsveien og kan beregnes ved å summere delreaksjoner',
      'Entalpien avhenger av hvor raskt reaksjonen skjer',
      'Alle reaksjoner har samme entalpi',
      'Entalpien kan bare måles direkte med kalorimeter',
    ],
    explanation: 'Hess\' lov: ΔH avhenger bare av start- og slutttilstand, ikke av veien. Derfor kan vi summere kjente delreaksjoner for å finne entalpien til en reaksjon som er vanskelig å måle direkte.',
  },
  {
    question: 'Hvordan beregnes standard reaksjonsentalpi fra dannelsesentalpier?',
    options: [
      'ΔᵣH° = Σ ΔfH°(produkter) − Σ ΔfH°(reaktanter)',
      'ΔᵣH° = Σ ΔfH°(reaktanter) − Σ ΔfH°(produkter)',
      'ΔᵣH° = Σ ΔfH°(produkter) + Σ ΔfH°(reaktanter)',
      'ΔᵣH° = ΔfH°(produkter) · ΔfH°(reaktanter)',
    ],
    explanation: 'Reaksjonsentalpien er summen av dannelsesentalpiene til produktene minus summen for reaktantene, begge multiplisert med koeffisientene fra likningen.',
  },
  {
    question: 'For reaksjonen H₂ + Cl₂ → 2HCl er bindingsentalpiene: H–H 436 kJ/mol, Cl–Cl 243 kJ/mol, H–Cl 432 kJ/mol. Hva blir ΔᵣH?',
    options: [
      '-185 kJ/mol',
      '+185 kJ/mol',
      '-432 kJ/mol',
      '+247 kJ/mol',
    ],
    explanation: 'ΔᵣH = Σ(brutte bindinger) − Σ(dannede bindinger) = (436 + 243) − 2·432 = 679 − 864 = −185 kJ/mol. Reaksjonen er eksoterm.',
  },
  {
    question: 'Krever det energi å bryte en kjemisk binding, eller frigjøres energi?',
    options: [
      'Det krever alltid energi å bryte bindinger; energi frigjøres når bindinger dannes',
      'Det frigjøres alltid energi når bindinger brytes',
      'Det avhenger av om reaksjonen er eksoterm',
      'Bindingsbrudd skjer uten energiendring',
    ],
    explanation: 'Bindingsbrudd er alltid endotermt (krever energi), mens bindingsdannelse alltid er eksotermt (frigjør energi). Nettoresultatet avgjør om reaksjonen samlet er ekso- eller endoterm.',
  },
],

  'kjemi1-6-3': [
  {
    question: 'Hva kreves ifølge kollisjonsteorien for at en kollisjon skal føre til reaksjon?',
    options: [
      'Tilstrekkelig energi og riktig orientering',
      'Bare at partiklene berører hverandre',
      'At temperaturen er over 100 °C',
      'At det er en katalysator til stede',
    ],
    explanation: 'Partiklene må kollidere med energi som minst tilsvarer aktiveringsenergien, og med riktig orientering, for at reaksjon skal skje.',
  },
  {
    question: 'Hva er aktiveringsenergi?',
    options: [
      'Den minste energien som kreves for at en reaksjon skal kunne skje',
      'Energien som frigjøres i reaksjonen',
      'Den totale energien til produktene',
      'Energien som lagres i katalysatoren',
    ],
    explanation: 'Aktiveringsenergien Ea er energibarrieren mellom reaktanter og produkter — den minste energien kolliderende partikler må ha for å danne aktivert kompleks.',
  },
  {
    question: 'Hvorfor øker reaksjonsfarten når temperaturen øker?',
    options: [
      'Flere partikler har energi over aktiveringsenergien, og kollisjonene blir hyppigere',
      'Aktiveringsenergien blir lavere',
      'Reaksjonen blir mer eksoterm',
      'Konsentrasjonen av reaktantene øker',
    ],
    explanation: 'Høyere temperatur gir raskere partikler: flere kollisjoner per sekund, og — viktigst — en mye større andel av kollisjonene har energi over Ea.',
  },
  {
    question: 'Hvordan virker en katalysator?',
    options: [
      'Den gir en alternativ reaksjonsvei med lavere aktiveringsenergi og forbrukes ikke',
      'Den øker temperaturen i blandingen',
      'Den forskyver likevekten mot produktene',
      'Den gjør reaksjonen mer eksoterm',
    ],
    explanation: 'En katalysator senker aktiveringsenergien via en alternativ reaksjonsvei. Den forbrukes ikke, og den endrer verken ΔH eller likevektens posisjon — bare hvor raskt likevekten nås.',
  },
  {
    question: 'Hvorfor reagerer pulverisert sink raskere med syre enn en sinkbit med samme masse?',
    options: [
      'Pulveret har mye større overflate, så flere partikler kan kollidere samtidig',
      'Pulveret har lavere aktiveringsenergi',
      'Pulveret er varmere',
      'Pulveret har høyere konsentrasjon',
    ],
    explanation: 'Reaksjonen skjer på overflaten av det faste stoffet. Findeling gir mye større samlet overflate og dermed flere effektive kollisjoner per sekund.',
  },
],

  'kjemi1-7-1': [
  {
    question: 'Hva kjennetegner en dynamisk kjemisk likevekt?',
    options: [
      'Fram- og tilbakereaksjonen går like raskt, og konsentrasjonene er konstante',
      'Alle reaksjoner har stoppet helt',
      'Konsentrasjonene av reaktanter og produkter er like store',
      'Bare framreaksjonen pågår',
    ],
    explanation: 'I dynamisk likevekt pågår begge reaksjonene fortsatt, men med samme fart. Konsentrasjonene er derfor konstante — men ikke nødvendigvis like store.',
  },
  {
    question: 'Hva er likevektsuttrykket for N₂(g) + 3H₂(g) ⇌ 2NH₃(g)?',
    options: [
      '$K = \\frac{[NH_3]^2}{[N_2][H_2]^3}$',
      '$K = \\frac{[N_2][H_2]^3}{[NH_3]^2}$',
      '$K = \\frac{[NH_3]}{[N_2][H_2]}$',
      '$K = \\frac{2[NH_3]}{[N_2] \\cdot 3[H_2]}$',
    ],
    explanation: 'Likevektskonstanten er produktkonsentrasjonene opphøyd i koeffisientene delt på reaktantkonsentrasjonene opphøyd i sine: $K = \\frac{[NH_3]^2}{[N_2][H_2]^3}$.',
  },
  {
    question: 'Hva betyr det at K er mye større enn 1?',
    options: [
      'Likevekten ligger langt mot produktsiden',
      'Likevekten ligger langt mot reaktantsiden',
      'Reaksjonen går svært raskt',
      'Reaksjonen er endoterm',
    ],
    explanation: 'K >> 1 betyr at det er mye mer produkter enn reaktanter ved likevekt — likevekten ligger mot høyre. K sier derimot ingenting om hvor raskt likevekten innstilles.',
  },
  {
    question: 'Ved likevekt for A + B ⇌ 2C er [A] = 0,20 M, [B] = 0,40 M og [C] = 0,40 M. Hva er K?',
    options: [
      '2,0',
      '0,50',
      '5,0',
      '0,20',
    ],
    explanation: '$K = \\frac{[C]^2}{[A][B]} = \\frac{0{,}40^2}{0{,}20 \\cdot 0{,}40} = \\frac{0{,}16}{0{,}080} = 2{,}0$.',
  },
  {
    question: 'Hvilke stoffer utelates fra likevektsuttrykket?',
    options: [
      'Rene faste stoffer og rene væsker',
      'Alle gasser',
      'Alle produkter',
      'Stoffer med små koeffisienter',
    ],
    explanation: 'Rene faste stoffer og rene væsker har konstant "konsentrasjon" og tas ikke med i likevektsuttrykket. Bare gasser og oppløste stoffer inngår.',
  },
],

  'kjemi1-7-2': [
  {
    question: 'Hva sier Le Chateliers prinsipp?',
    options: [
      'Et system i likevekt som forstyrres, forskyver seg slik at forstyrrelsen motvirkes',
      'Likevekter forsterker alltid en ytre forstyrrelse',
      'Likevekter påvirkes ikke av ytre endringer',
      'Likevekten forskyves alltid mot produktsiden',
    ],
    explanation: 'Le Chateliers prinsipp: Når en likevekt forstyrres (konsentrasjon, temperatur eller trykk), forskyver systemet seg i den retningen som motvirker forstyrrelsen.',
  },
  {
    question: 'Hva skjer med likevekten A + B ⇌ C hvis vi tilsetter mer A?',
    options: [
      'Likevekten forskyves mot høyre, og det dannes mer C',
      'Likevekten forskyves mot venstre',
      'Ingenting skjer',
      'Likevektskonstanten K øker',
    ],
    explanation: 'Tilsetning av en reaktant forskyver likevekten mot produktsiden for å forbruke noe av tilskuddet. K er uendret — bare konsentrasjonene endres.',
  },
  {
    question: 'En reaksjon er eksoterm (ΔH < 0). Hva skjer hvis temperaturen økes?',
    options: [
      'Likevekten forskyves mot reaktantene, og K minker',
      'Likevekten forskyves mot produktene, og K øker',
      'Likevekten påvirkes ikke av temperatur',
      'Reaksjonen stopper helt',
    ],
    explanation: 'Varme kan ses som et "produkt" i en eksoterm reaksjon. Økt temperatur forskyver likevekten i endoterm retning — mot reaktantene. Temperatur er den eneste faktoren som endrer selve K.',
  },
  {
    question: 'Hva skjer med likevekten N₂(g) + 3H₂(g) ⇌ 2NH₃(g) når trykket økes (volumet minkes)?',
    options: [
      'Den forskyves mot NH₃, siden høyresiden har færrest gassmolekyler (2 mot 4)',
      'Den forskyves mot reaktantene, som har flest molekyler',
      'Den påvirkes ikke av trykk',
      'Likevektskonstanten dobles',
    ],
    explanation: 'Økt trykk forskyver likevekten mot siden med færrest gassmolekyler. Venstresiden har 1 + 3 = 4 molekyler, høyresiden 2, så likevekten går mot NH₃. Dette utnyttes i Haber-Bosch-prosessen.',
  },
  {
    question: 'Hvordan påvirker en katalysator likevektsposisjonen?',
    options: [
      'Ikke i det hele tatt — den gjør bare at likevekten innstilles raskere',
      'Den forskyver likevekten mot produktene',
      'Den øker likevektskonstanten',
      'Den forskyver likevekten mot reaktantene',
    ],
    explanation: 'En katalysator øker farten til både fram- og tilbakereaksjonen like mye. Likevekten nås raskere, men posisjonen og K er uendret.',
  },
],

  'kjemi1-8-1': [
  {
    question: 'Hvorfor løses ionforbindelser som NaCl godt i vann?',
    options: [
      'De polare vannmolekylene hydratiserer ionene med ion-dipol-krefter',
      'Vann er upolart og løser upolare stoffer',
      'NaCl danner kovalente bindinger med vann',
      'Saltet reagerer kjemisk med vannet og danner gass',
    ],
    explanation: 'Vannmolekylene er polare og omgir ionene: den negative O-enden vender mot kationene og de positive H-endene mot anionene. Ion-dipol-kreftene gjør at gitteret brytes ned.',
  },
  {
    question: 'Hva kalles prosessen der vannmolekyler omgir oppløste ioner?',
    options: [
      'Hydratisering',
      'Destillasjon',
      'Krystallisering',
      'Nøytralisering',
    ],
    explanation: 'Hydratisering er solvatisering der løsemidlet er vann: vannmolekylene legger seg rundt ionene og stabiliserer dem i løsningen.',
  },
  {
    question: 'Hvilke krefter virker mellom Na⁺-ioner og vannmolekyler i en saltløsning?',
    options: [
      'Ion-dipol-krefter',
      'Hydrogenbindinger',
      'Kovalente bindinger',
      'Bare dispersjonskrefter',
    ],
    explanation: 'Mellom et ion og et polart molekyl virker ion-dipol-krefter. De er sterkere enn vanlige dipol-dipol-krefter og er grunnen til at vann løser salter så godt.',
  },
  {
    question: 'Hvorfor er vann et så godt løsemiddel for polare stoffer og salter?',
    options: [
      'Vannmolekylet er sterkt polart og kan danne hydrogenbindinger og ion-dipol-krefter',
      'Vannmolekylet er upolart',
      'Vann har lav tetthet',
      'Vann har høy varmekapasitet',
    ],
    explanation: 'Vann er et lite, sterkt polart molekyl som danner hydrogenbindinger og effektivt hydratiserer ioner. Derfor kalles det ofte "det universelle løsemidlet" for polare stoffer.',
  },
  {
    question: 'Kan en løsningsprosess være endoterm?',
    options: [
      'Ja — hvis det krever mer energi å bryte gitteret enn hydratiseringen frigjør, blir løsningen kaldere',
      'Nei, oppløsning frigjør alltid varme',
      'Bare for gasser',
      'Bare hvis stoffet er upolart',
    ],
    explanation: 'Løsningsentalpien er summen av energien som kreves for å bryte gitteret og energien som frigjøres ved hydratisering. Er bruddet mest kostbart, blir prosessen endoterm — som når visse salter i kuldeposer løses.',
  },
],

  'kjemi1-8-2': [
  {
    question: 'Hva er en mettet løsning?',
    options: [
      'En løsning som inneholder maksimal mengde oppløst stoff ved gitt temperatur',
      'En løsning der alt løsemidlet er fordampet',
      'En løsning med svært lav konsentrasjon',
      'En løsning som ikke kan fortynnes',
    ],
    explanation: 'En mettet løsning har løst opp så mye stoff som mulig ved den aktuelle temperaturen, og er i likevekt med eventuelt uoppløst stoff.',
  },
  {
    question: 'Hvordan påvirker temperaturen løseligheten til de fleste faste stoffer i vann?',
    options: [
      'Løseligheten øker med økende temperatur',
      'Løseligheten minker med økende temperatur',
      'Løseligheten er uavhengig av temperaturen',
      'Faste stoffer løses bare ved kokepunktet',
    ],
    explanation: 'For de fleste faste stoffer øker løseligheten med temperaturen — varmt vann løser mer sukker enn kaldt. (Det finnes unntak, og for gasser er det omvendt.)',
  },
  {
    question: 'Hvordan endres løseligheten til gasser i vann når temperaturen øker?',
    options: [
      'Den minker — varm brus mister kullsyren raskere',
      'Den øker kraftig',
      'Den er uavhengig av temperaturen',
      'Gasser løses ikke i vann i det hele tatt',
    ],
    explanation: 'Gassers løselighet minker med økende temperatur. Derfor blir varm brus fortere flat, og varmt vann i naturen inneholder mindre oksygen for fisk.',
  },
  {
    question: 'Hva sier Henrys lov?',
    options: [
      'Løseligheten av en gass er proporsjonal med gassens partialtrykk over løsningen',
      'Løseligheten av salt er proporsjonal med temperaturen',
      'Alle gasser har samme løselighet',
      'Gassløselighet er uavhengig av trykket',
    ],
    explanation: 'Henrys lov: gassens løselighet i en væske er proporsjonal med partialtrykket av gassen over væsken. Derfor er brus tappet under høyt CO₂-trykk, og kullsyren bobler ut når flasken åpnes.',
  },
  {
    question: 'Hvordan brukes rekrystallisering til å rense et stoff?',
    options: [
      'Stoffet løses i varmt løsemiddel, og rene krystaller felles ut ved avkjøling mens urenhetene blir igjen i løsningen',
      'Stoffet kokes til alt løsemidlet er borte',
      'Stoffet filtreres direkte uten oppløsning',
      'Stoffet destilleres ved høy temperatur',
    ],
    explanation: 'Ved rekrystallisering utnyttes at løseligheten synker med temperaturen: stoffet løses i minst mulig varmt løsemiddel, og ved langsom avkjøling krystalliserer det rene stoffet ut mens urenheter i lav konsentrasjon forblir oppløst.',
  },
],

  'kjemi1-9-1': [
  {
    question: 'Hvordan defineres en syre etter Brønsted-Lowry?',
    options: [
      'Et stoff som avgir proton (H⁺)',
      'Et stoff som tar opp proton',
      'Et stoff som avgir OH⁻',
      'Et stoff som avgir elektroner',
    ],
    explanation: 'Etter Brønsted-Lowry er en syre en protondonor og en base en protonakseptor. Definisjonen knytter syrer og baser til protonoverføring (protolyse).',
  },
  {
    question: 'Hva er den konjugerte syren til ammoniakk, NH₃?',
    options: [
      'NH₄⁺',
      'NH₂⁻',
      'NH₃⁺',
      'N₂',
    ],
    explanation: 'Når basen NH₃ tar opp et proton, dannes den konjugerte syren NH₄⁺ (ammonium). Et konjugert syre-base-par skiller seg med nøyaktig ett H⁺.',
  },
  {
    question: 'Hva betyr det at vann er amfotert?',
    options: [
      'Det kan virke både som syre og som base',
      'Det er alltid nøytralt og deltar aldri i syre-basereaksjoner',
      'Det er en sterk syre',
      'Det leder ikke elektrisk strøm',
    ],
    explanation: 'Vann kan avgi proton (og bli OH⁻) overfor baser, og ta opp proton (og bli H₃O⁺) overfor syrer. Stoffer med begge evner kalles amfotere — HCO₃⁻ er et annet eksempel.',
  },
  {
    question: 'Hva kjennetegner en sterk syre?',
    options: [
      'Den protolyserer fullstendig i vann',
      'Den har alltid høy konsentrasjon',
      'Den protolyserer bare delvis i vann',
      'Den har pH over 7',
    ],
    explanation: 'En sterk syre, som HCl og HNO₃, avgir protonene sine fullstendig til vann. Styrke handler om protolysegrad, ikke om konsentrasjon.',
  },
  {
    question: 'Hvorfor regnes eddiksyre som en svak syre?',
    options: [
      'Bare en liten andel av molekylene avgir proton i vann — likevekten ligger mot venstre',
      'Den har lav konsentrasjon i eddik',
      'Den inneholder ikke hydrogen',
      'Den reagerer ikke med baser',
    ],
    explanation: 'Eddiksyre protolyserer bare delvis: CH₃COOH + H₂O ⇌ CH₃COO⁻ + H₃O⁺ med likevekt langt mot venstre. Det gjør den til en svak syre uansett konsentrasjon.',
  },
],

  'kjemi1-9-2': [
  {
    question: 'Hvordan er pH definert?',
    options: [
      'pH = −log[H₃O⁺]',
      'pH = log[H₃O⁺]',
      'pH = −log[OH⁻]',
      'pH = [H₃O⁺]/[OH⁻]',
    ],
    explanation: 'pH er den negative tierlogaritmen til oksoniumkonsentrasjonen: pH = −log[H₃O⁺].',
  },
  {
    question: 'Hva er pH i en 0,010 mol/L løsning av den sterke syren HCl?',
    options: [
      '2,0',
      '1,0',
      '0,010',
      '12,0',
    ],
    explanation: 'HCl protolyserer fullstendig, så [H₃O⁺] = 0,010 M = 10⁻² M. pH = −log(10⁻²) = 2,0.',
  },
  {
    question: 'Hva er sammenhengen mellom pH og pOH i vann ved 25 °C?',
    options: [
      'pH + pOH = 14',
      'pH − pOH = 14',
      'pH · pOH = 14',
      'pH = pOH alltid',
    ],
    explanation: 'Vannets ioneprodukt er Kw = [H₃O⁺][OH⁻] = 1,0·10⁻¹⁴ ved 25 °C. Tar vi −log på begge sider, får vi pH + pOH = 14.',
  },
  {
    question: 'Hva er pH i en 0,0010 mol/L NaOH-løsning?',
    options: [
      '11,0',
      '3,0',
      '13,0',
      '7,0',
    ],
    explanation: 'NaOH er en sterk base: [OH⁻] = 10⁻³ M gir pOH = 3,0, og pH = 14 − 3,0 = 11,0.',
  },
  {
    question: 'Hvor mange ganger høyere er [H₃O⁺] i en løsning med pH 3 enn i en med pH 5?',
    options: [
      '100 ganger',
      '2 ganger',
      '10 ganger',
      '1000 ganger',
    ],
    explanation: 'pH-skalaen er logaritmisk: hver pH-enhet tilsvarer en faktor 10. To enheter forskjell gir 10² = 100 ganger høyere [H₃O⁺].',
  },
],

  'kjemi1-9-3': [
  {
    question: 'Hva er likevektsuttrykket for syrekonstanten Ka til den svake syren HA?',
    options: [
      '$K_a = \\frac{[H_3O^+][A^-]}{[HA]}$',
      '$K_a = \\frac{[HA]}{[H_3O^+][A^-]}$',
      '$K_a = [H_3O^+][HA]$',
      '$K_a = \\frac{[A^-]}{[HA]}$',
    ],
    explanation: 'For HA + H₂O ⇌ A⁻ + H₃O⁺ er $K_a = \\frac{[H_3O^+][A^-]}{[HA]}$. Vann tas ikke med fordi det er ren væske.',
  },
  {
    question: 'Hva betyr en lav pKa-verdi?',
    options: [
      'Syren er sterk(ere) — den protolyserer i større grad',
      'Syren er svak(ere)',
      'Løsningen er basisk',
      'Syren har lav konsentrasjon',
    ],
    explanation: 'pKa = −log Ka. Lav pKa betyr høy Ka, altså at likevekten ligger lenger mot protolyse — en sterkere syre.',
  },
  {
    question: 'En svak syre har Ka = 1,0·10⁻⁵ og konsentrasjon 0,10 mol/L. Hva er pH (med tilnærmingen [H₃O⁺] = √(Ka·c))?',
    options: [
      '3,0',
      '5,0',
      '1,0',
      '2,5',
    ],
    explanation: '$[H_3O^+] = \\sqrt{K_a \\cdot c} = \\sqrt{1{,}0 \\cdot 10^{-5} \\cdot 0{,}10} = \\sqrt{1{,}0 \\cdot 10^{-6}} = 1{,}0 \\cdot 10^{-3}$ M, så pH = 3,0.',
  },
  {
    question: 'Hva er sammenhengen mellom Ka og Kb for et konjugert syre-base-par ved 25 °C?',
    options: [
      '$K_a \\cdot K_b = K_w = 1{,}0 \\cdot 10^{-14}$',
      '$K_a + K_b = 14$',
      '$K_a = K_b$',
      '$K_a / K_b = K_w$',
    ],
    explanation: 'For et konjugert par gjelder $K_a \\cdot K_b = K_w$. Jo sterkere syren er, desto svakere er den konjugerte basen.',
  },
  {
    question: 'Hva skjer med protolysegraden til en svak syre når løsningen fortynnes?',
    options: [
      'Den øker — en større andel av syremolekylene protolyserer',
      'Den minker',
      'Den er alltid 100 %',
      'Den påvirkes ikke av fortynning',
    ],
    explanation: 'Ved fortynning forskyves protolyselikevekten mot flere ioner (Le Chatelier), så andelen protolyserte molekyler øker — selv om [H₃O⁺] totalt sett synker.',
  },
],

  'kjemi1-9-4': [
  {
    question: 'Hva er ekvivalenspunktet i en titrering?',
    options: [
      'Punktet der tilsatt stoffmengde base er ekvivalent med stoffmengden syre',
      'Punktet der pH alltid er 7',
      'Punktet der indikatoren tilsettes',
      'Punktet der halve syren er nøytralisert',
    ],
    explanation: 'Ved ekvivalenspunktet har vi tilsatt nøyaktig den stoffmengden som trengs for å reagere med alt stoffet i kolben. pH ved ekvivalenspunktet avhenger av syre-base-paret, og er bare 7 for sterk syre mot sterk base.',
  },
  {
    question: '25,0 mL HCl titreres med 0,100 mol/L NaOH, og det går med 20,0 mL. Hva var konsentrasjonen av HCl?',
    options: [
      '0,0800 mol/L',
      '0,125 mol/L',
      '0,100 mol/L',
      '0,0500 mol/L',
    ],
    explanation: 'n(NaOH) = 0,100 · 0,0200 = 0,00200 mol = n(HCl). c(HCl) = 0,00200/0,0250 = 0,0800 mol/L.',
  },
  {
    question: 'Hvordan velger man riktig indikator til en titrering?',
    options: [
      'Indikatorens omslagsområde skal ligge rundt pH ved ekvivalenspunktet',
      'Indikatoren skal ha sterkest mulig farge',
      'Alle indikatorer fungerer like godt',
      'Omslagsområdet skal alltid ligge ved pH 7',
    ],
    explanation: 'Indikatoren må skifte farge der pH endres brått — ved ekvivalenspunktet. For svak syre + sterk base (ekvivalenspunkt over 7) passer fenolftalein, for svak base + sterk syre passer metylrødt.',
  },
  {
    question: 'Hva er pH ved ekvivalenspunktet når en sterk syre titreres med en sterk base?',
    options: [
      '7',
      'Over 7',
      'Under 7',
      'Alltid 14',
    ],
    explanation: 'Ved ekvivalenspunktet for sterk syre + sterk base finnes bare et nøytralt salt og vann, så pH = 7. For svak syre + sterk base ligger ekvivalenspunktet over 7.',
  },
  {
    question: 'Hva består en bufferløsning av, og hva gjør den?',
    options: [
      'En svak syre og dens konjugerte base — den motvirker pH-endringer ved tilsetting av syre eller base',
      'En sterk syre og en sterk base — den holder pH på nøyaktig 7',
      'Bare destillert vann',
      'Et salt løst i sterk syre',
    ],
    explanation: 'En buffer inneholder en svak syre og dens konjugerte base (eller svak base og dens konjugerte syre). Tilsatt H₃O⁺ fanges av basen og tilsatt OH⁻ av syren, så pH endres lite.',
  },
],

  'kjemi1-10-1': [
  {
    question: 'Hvor mange kovalente bindinger danner karbon vanligvis?',
    options: [
      '4',
      '2',
      '6',
      '1',
    ],
    explanation: 'Karbon har 4 valenselektroner og danner 4 kovalente bindinger. Denne evnen, sammen med at karbon kan danne kjeder og ringer, er grunnlaget for organisk kjemi.',
  },
  {
    question: 'Hva kjennetegner alkaner?',
    options: [
      'De er mettede hydrokarboner med bare enkeltbindinger, generell formel CₙH₂ₙ₊₂',
      'De har minst én dobbeltbinding',
      'De har minst én trippelbinding',
      'De inneholder en OH-gruppe',
    ],
    explanation: 'Alkaner er mettede hydrokarboner: bare C–C-enkeltbindinger og generell formel CₙH₂ₙ₊₂. Alkener har dobbeltbinding (CₙH₂ₙ) og alkyner trippelbinding.',
  },
  {
    question: 'Hva er molekylformelen til pentan (alkan med 5 karbonatomer)?',
    options: [
      'C₅H₁₂',
      'C₅H₁₀',
      'C₅H₈',
      'C₄H₁₀',
    ],
    explanation: 'Alkaner har formelen CₙH₂ₙ₊₂. Med n = 5: C₅H₁₂.',
  },
  {
    question: 'Hva betyr det at et hydrokarbon er umettet?',
    options: [
      'Det inneholder minst én dobbelt- eller trippelbinding mellom karbonatomer',
      'Det inneholder bare enkeltbindinger',
      'Det er løst i vann',
      'Det mangler hydrogen helt',
    ],
    explanation: 'Umettede hydrokarboner (alkener og alkyner) har dobbelt- eller trippelbindinger og kan derfor addere flere hydrogenatomer. Mettede har bare enkeltbindinger.',
  },
  {
    question: 'Hvordan tolkes en strekformel (linjestruktur)?',
    options: [
      'Hvert hjørne og endepunkt er et karbonatom, og hydrogenatomene er underforstått',
      'Hver strek er et hydrogenatom',
      'Hjørnene viser oksygenatomer',
      'Strekene viser bare hydrogenbindinger',
    ],
    explanation: 'I strekformler tegnes karbonskjelettet som sikksakklinjer: hvert hjørne/endepunkt er ett C-atom, og det underforståtte antall H fyller opp til fire bindinger per karbon.',
  },
],

  'kjemi1-10-2': [
  {
    question: 'Hvilken funksjonell gruppe kjennetegner alkoholer?',
    options: [
      'Hydroksylgruppen –OH',
      'Karboksylgruppen –COOH',
      'Aminogruppen –NH₂',
      'Karbonylgruppen C=O midt i kjeden',
    ],
    explanation: 'Alkoholer har hydroksylgruppen –OH bundet til et karbonatom, og navnet får endelsen -ol, som i etanol.',
  },
  {
    question: 'Hvilken funksjonell gruppe har karboksylsyrer?',
    options: [
      '–COOH',
      '–OH',
      '–CHO',
      '–O–',
    ],
    explanation: 'Karboksylsyrer har karboksylgruppen –COOH (en karbonylgruppe og en hydroksylgruppe på samme karbon). Navnet ender på -syre, som i etansyre (eddiksyre).',
  },
  {
    question: 'Hva er forskjellen på et aldehyd og et keton?',
    options: [
      'Aldehydet har karbonylgruppen på et endekarbon, ketonet har den inne i kjeden',
      'Ketonet har karbonylgruppen på endekarbonet',
      'Aldehydet inneholder ikke oksygen',
      'De har forskjellig molekylformel, men samme struktur',
    ],
    explanation: 'Begge har karbonylgruppe (C=O). I aldehyder sitter den på et endekarbon (–CHO), i ketoner mellom to karbonatomer i kjeden.',
  },
  {
    question: 'Hvilke to stofftyper reagerer og danner en ester?',
    options: [
      'En karboksylsyre og en alkohol',
      'To alkoholer',
      'En syre og en amin',
      'Et alken og vann',
    ],
    explanation: 'Estere dannes ved kondensasjonsreaksjon mellom en karboksylsyre og en alkohol, med vann som biprodukt. Mange estere har fruktlukt.',
  },
  {
    question: 'Hvilken endelse får en alkohol i IUPAC-navnet?',
    options: [
      '-ol',
      '-al',
      '-on',
      '-syre',
    ],
    explanation: 'Alkoholer ender på -ol (etanol), aldehyder på -al (etanal), ketoner på -on (propanon) og karboksylsyrer på -syre (etansyre).',
  },
],

  'kjemi1-10-3': [
  {
    question: 'Hva er isomerer?',
    options: [
      'Forbindelser med samme molekylformel, men forskjellig struktur',
      'Forbindelser med forskjellig molekylformel, men samme egenskaper',
      'Atomer med samme antall protoner, men ulikt antall nøytroner',
      'Molekyler med samme struktur i ulike faser',
    ],
    explanation: 'Isomerer har samme molekylformel, men atomene er ordnet forskjellig. De kan ha svært ulike fysiske og kjemiske egenskaper.',
  },
  {
    question: 'Hvilke to forbindelser er strukturisomerer med formelen C₄H₁₀?',
    options: [
      'Butan og 2-metylpropan',
      'Butan og buten',
      'Propan og butan',
      'Cis-2-buten og trans-2-buten',
    ],
    explanation: 'C₄H₁₀ kan være en rett kjede (butan) eller en forgrenet kjede (2-metylpropan/isobutan). De er strukturisomerer (konstitusjonsisomerer).',
  },
  {
    question: 'Hva kreves for at en forbindelse skal ha cis/trans-isomeri?',
    options: [
      'En dobbeltbinding med hindret rotasjon og to ulike grupper på hvert av dobbeltbindingskarbonene',
      'Bare at molekylet har en dobbeltbinding',
      'At molekylet har et kiralt karbonatom',
      'At molekylet er et alkan',
    ],
    explanation: 'Dobbeltbindingen hindrer rotasjon, og hvis hvert dobbeltbindingskarbon bærer to ulike grupper, finnes cis-formen (like grupper på samme side) og trans-formen (motsatt side).',
  },
  {
    question: 'Hva er et kiralt karbonatom?',
    options: [
      'Et karbonatom med fire forskjellige grupper bundet til seg',
      'Et karbonatom med dobbeltbinding',
      'Et karbonatom i en ring',
      'Et karbonatom med fire like grupper',
    ],
    explanation: 'Et kiralt (asymmetrisk) karbonatom har fire ulike substituenter. Molekylet og speilbildet kan da ikke legges oppå hverandre — de er enantiomerer.',
  },
  {
    question: 'Hva kjennetegner et par enantiomerer?',
    options: [
      'De er speilbilder av hverandre som ikke kan legges oppå hverandre',
      'De har forskjellig molekylformel',
      'De har alltid ulik kokepunkt og smeltepunkt',
      'De er identiske molekyler',
    ],
    explanation: 'Enantiomerer er ikke-sammenfallende speilbilder. De har like fysiske egenskaper (unntatt at de dreier planpolarisert lys motsatt vei) men kan ha helt ulik biologisk virkning.',
  },
],

  'kjemi1-11-1': [
  {
    question: 'Hvilke metoder brukes typisk for å desinfisere drikkevann?',
    options: [
      'Klorering eller UV-bestråling',
      'Tilsetting av sukker',
      'Frysing til is',
      'Tilsetting av nitrogen',
    ],
    explanation: 'Etter filtrering desinfiseres drikkevann vanligvis med klor eller UV-lys for å drepe sykdomsfremkallende mikroorganismer.',
  },
  {
    question: 'Hvilke gasser er hovedårsaken til sur nedbør?',
    options: [
      'Svoveldioksid (SO₂) og nitrogenoksider (NOₓ)',
      'Karbondioksid og metan',
      'Oksygen og nitrogen',
      'Ozon og argon',
    ],
    explanation: 'SO₂ og NOₓ fra forbrenning reagerer med vann i atmosfæren og danner svovelsyre og salpetersyre, som faller ned som sur nedbør.',
  },
  {
    question: 'Hvorfor er ozonlaget i stratosfæren viktig?',
    options: [
      'Det absorberer skadelig UV-stråling fra solen',
      'Det varmer opp jordoverflaten direkte',
      'Det produserer oksygen til atmosfæren',
      'Det hindrer sur nedbør',
    ],
    explanation: 'Stratosfærisk ozon absorberer det meste av den skadelige UV-strålingen. KFK-gasser brøt ned ozonlaget, noe som førte til Montreal-protokollen.',
  },
  {
    question: 'Et vannprøve inneholder 5 mg av et stoff per kilogram vann. Hva er konsentrasjonen i ppm?',
    options: [
      '5 ppm',
      '0,5 ppm',
      '50 ppm',
      '5000 ppm',
    ],
    explanation: 'ppm er milliondeler: 1 mg/kg = 1 ppm. 5 mg per kg tilsvarer derfor 5 ppm.',
  },
  {
    question: 'Hvorfor bidrar CO₂ og metan til global oppvarming?',
    options: [
      'De absorberer infrarød stråling fra jorden og holder på varmen (drivhuseffekt)',
      'De reflekterer sollys ned mot bakken',
      'De bryter ned ozonlaget',
      'De gjør nedbøren sur',
    ],
    explanation: 'Drivhusgasser som CO₂ og CH₄ absorberer utgående infrarød stråling og sender deler av energien tilbake mot jordoverflaten. Økte konsentrasjoner forsterker drivhuseffekten.',
  },
],

  'kjemi1-11-2': [
  {
    question: 'Hva er det første og viktigste prinsippet i grønn kjemi?',
    options: [
      'Det er bedre å forebygge avfall enn å rense opp etterpå',
      'Alle reaksjoner skal skje ved høy temperatur',
      'Bruk alltid sterke syrer',
      'Produktene skal være holdbare lengst mulig',
    ],
    explanation: 'Grønn kjemis grunnprinsipp er avfallsforebygging: det er bedre å designe prosesser som ikke lager avfall, enn å håndtere og rense avfall i etterkant.',
  },
  {
    question: 'Hva er atomøkonomi?',
    options: [
      'Hvor stor andel av reaktantenes atomer som ender opp i det ønskede produktet',
      'Hvor billige reaktantene er',
      'Hvor mange atomer som finnes i produktet',
      'Hvor mye energi reaksjonen bruker',
    ],
    explanation: 'Atomøkonomi måler hvor stor del av atommassen i reaktantene som havner i ønsket produkt. Høy atomøkonomi betyr lite avfall.',
  },
  {
    question: 'I en reaksjon har det ønskede produktet molmasse 80 g/mol, mens alle produktene til sammen har 100 g/mol. Hva er atomøkonomien?',
    options: [
      '80 %',
      '20 %',
      '100 %',
      '125 %',
    ],
    explanation: 'Atomøkonomi = (molmasse av ønsket produkt / total molmasse av alle produkter) · 100 % = 80/100 · 100 % = 80 %.',
  },
  {
    question: 'Hvorfor er katalysatorer viktige i grønn kjemi?',
    options: [
      'De senker energiforbruket og reduserer avfall, og kan brukes om igjen',
      'De gjør produktene giftigere',
      'De øker mengden løsemiddel som trengs',
      'De gjør reaksjonene mer eksoterme',
    ],
    explanation: 'Katalysatorer senker aktiveringsenergien slik at prosesser kan kjøres ved lavere temperatur med mindre energiforbruk, og de forbrukes ikke. Det gir renere og mer effektive prosesser.',
  },
  {
    question: 'Hva menes med fornybare råstoffer i grønn kjemi?',
    options: [
      'Råstoffer fra biomasse og andre kilder som fornyes naturlig, i stedet for fossile kilder',
      'Råstoffer som kan brukes bare én gang',
      'Olje og naturgass',
      'Råstoffer som er billigst mulig',
    ],
    explanation: 'Grønn kjemi prioriterer råstoffer som fornyes, f.eks. planteoljer, cellulose og annen biomasse, fremfor fossile råstoffer som olje og kull.',
  },
],

  'kjemi1-12-1': [
  {
    question: 'Hva er et sikkerhetsdatablad (SDS)?',
    options: [
      'Et dokument med informasjon om kjemikaliets farer, håndtering og førstehjelp',
      'En liste over alle elevene på laben',
      'En oppskrift på forsøket',
      'Et skjema for bestilling av utstyr',
    ],
    explanation: 'Sikkerhetsdatabladet beskriver kjemikaliets egenskaper, farer, vernetiltak, førstehjelp og avfallshåndtering. Det skal alltid sjekkes før man bruker et nytt kjemikalie.',
  },
  {
    question: 'Hva betyr GHS-piktogrammet med dødninghode og korslagte knokler?',
    options: [
      'Akutt giftig',
      'Brannfarlig',
      'Etsende',
      'Miljøfarlig',
    ],
    explanation: 'Dødninghodet betyr akutt giftig — stoffet kan være dødelig ved svelging, hudkontakt eller innånding. Flammen betyr brannfarlig, og det "etsende" symbolet viser væske som tærer på hånd og materiale.',
  },
  {
    question: 'Hvordan leser man av volumet riktig i en målesylinder med vann?',
    options: [
      'Les av bunnen av menisken med øyet i høyde med væskeoverflaten',
      'Les av toppen av menisken ovenfra',
      'Les av midt på menisken fra siden',
      'Det spiller ingen rolle hvor man leser av',
    ],
    explanation: 'Vann krummer seg (menisk) i glasset. Riktig avlesning er ved bunnen av menisken, med øyet i samme høyde for å unngå parallaksefeil.',
  },
  {
    question: 'Hva er standard personlig verneutstyr i kjemilaboratoriet?',
    options: [
      'Vernebriller, labfrakk og egnede hansker',
      'Bare hansker',
      'Solbriller og caps',
      'Hørselsvern og hjelm',
    ],
    explanation: 'Vernebriller beskytter øynene mot sprut, labfrakken beskytter hud og klær, og hansker velges etter kjemikaliene som brukes.',
  },
  {
    question: 'Hvilken egenskap utnyttes når en blanding separeres ved destillasjon?',
    options: [
      'At stoffene har ulike kokepunkter',
      'At stoffene har ulik farge',
      'At ett av stoffene er magnetisk',
      'At stoffene har ulik partikkelstørrelse',
    ],
    explanation: 'Ved destillasjon kokes blandingen, og stoffet med lavest kokepunkt fordamper først og kondenseres i kjøleren. Filtrering skiller derimot fast stoff fra væske etter partikkelstørrelse.',
  },
],

  'kjemi1-12-2': [
  {
    question: 'Hva er forskjellen på nøyaktighet og presisjon?',
    options: [
      'Nøyaktighet er nærhet til sann verdi, presisjon er liten spredning mellom gjentatte målinger',
      'Nøyaktighet er liten spredning, presisjon er nærhet til sann verdi',
      'De betyr nøyaktig det samme',
      'Presisjon gjelder bare digitale instrumenter',
    ],
    explanation: 'Nøyaktighet (accuracy) beskriver hvor nær målingene ligger den sanne verdien, mens presisjon (precision) beskriver hvor tett gjentatte målinger ligger hverandre. Målinger kan være presise uten å være nøyaktige.',
  },
  {
    question: 'Hva kjennetegner en systematisk feil?',
    options: [
      'Den trekker alle målingene i samme retning og reduseres ikke ved å gjenta målingen',
      'Den varierer tilfeldig fra måling til måling',
      'Den forsvinner hvis man tar gjennomsnitt av mange målinger',
      'Den skyldes alltid avlesningsfeil',
    ],
    explanation: 'Systematiske feil (f.eks. en feilkalibrert vekt) gir konsekvent for høye eller for lave verdier. De avsløres ikke ved gjentak, men ved kalibrering og kontroll mot kjente standarder.',
  },
  {
    question: 'Hvordan kan tilfeldige feil reduseres?',
    options: [
      'Ved å gjenta målingen flere ganger og bruke gjennomsnittet',
      'Ved å kalibrere instrumentet',
      'De kan ikke reduseres',
      'Ved å måle bare én gang, men svært nøye',
    ],
    explanation: 'Tilfeldige feil varierer i begge retninger og jevner seg ut når man tar gjennomsnitt av mange målinger. Systematiske feil krever derimot kalibrering.',
  },
  {
    question: 'Hvor mange signifikante sifre har måleverdien 0,0250 g?',
    options: [
      '3',
      '5',
      '2',
      '4',
    ],
    explanation: 'Ledende nuller teller ikke, men den avsluttende nullen gjør det: 2, 5 og 0 — altså 3 signifikante sifre.',
  },
  {
    question: 'En masse måles til 50,0 g med usikkerhet ±0,2 g. Hva er den relative usikkerheten?',
    options: [
      '0,4 %',
      '0,2 %',
      '4 %',
      '2 %',
    ],
    explanation: 'Relativ usikkerhet = 0,2/50,0 = 0,004 = 0,4 %.',
  },
],

};

export default quizData_kjemi1;
