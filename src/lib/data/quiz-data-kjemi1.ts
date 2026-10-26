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
  {
    question: 'Hvordan endrer reaktiviteten til alkalimetallene seg nedover gruppe 1?',
    options: [
      'Den øker, fordi valenselektronet holdes svakere',
      'Den minker, fordi atomene blir større',
      'Den minker, fordi kjerneladningen øker',
      'Den er lik, fordi alle har ett valenselektron',
    ],
    explanation: 'Nedover gruppa ligger valenselektronet lenger fra kjernen og skjermes av flere indre elektroner, så det avgis lettere. Derfor reagerer kalium kraftigere med vann enn natrium, og natrium kraftigere enn litium.',
  },
  {
    question: 'Hvilke produkter dannes når natrium reagerer med vann?',
    options: [
      'Natriumioner, hydroksidioner og hydrogengass',
      'Natriumioner, oksidioner og oksygengass',
      'Natriumoksid og hydrogengass',
      'Natriumhydrid og oksygengass',
    ],
    explanation: '2Na + 2H₂O → 2Na⁺ + 2OH⁻ + H₂. Hydroksidionene gjør løsningen basisk, og gassen som bobler av, er hydrogen.',
  },
  {
    question: 'Klorvann tilsettes en løsning av kaliumbromid, og løsningen blir gulbrun. Hvorfor?',
    options: [
      'Klor tar elektroner fra bromidionene, og det dannes brom',
      'Bromidionene tar elektroner fra klor, og det dannes klorid som er gulbrunt',
      'Kaliumionene reagerer med klor og danner et gulbrunt salt',
      'Klor og brom danner et gulbrunt bunnfall',
    ],
    explanation: 'Klor står over brom i gruppe 17 og tar opp elektroner sterkere: Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂. Brom farger løsningen gulbrun. Kaliumionene er tilskuerioner, og kloridioner er fargeløse.',
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
  {
    question: 'Et salt gir kraftig gul flamme i en flammeprøve. Hvilket metallion inneholder saltet trolig?',
    options: [
      'Na⁺',
      'K⁺',
      'Li⁺',
      'Cu²⁺',
    ],
    explanation: 'Natrium sender ut sterkt gult lys ved 589 nm. Kalium gir fiolett, litium karminrød og kobber blågrønn flamme.',
  },
  {
    question: 'Et salt gir rød flamme. Hvorfor kan flammeprøven alene ikke avgjøre hvilket metallion saltet inneholder?',
    options: [
      'Litium, strontium og kalsium gir alle rødlige flammer',
      'Den røde fargen kommer fra anionet i saltet',
      'Rød flamme betyr at saltet ikke inneholder metallioner',
      'Alle metaller gir rød flamme når flammen er varm nok',
    ],
    explanation: 'Li⁺ (karminrød), Sr²⁺ (rød) og Ca²⁺ (oransjerød) er vanskelige å skille med øyet. Fargen kommer fra metallet, ikke anionet, og ulike metaller gir ulike farger. Et spektroskop som viser linjene, kan skille dem.',
  },
  {
    question: 'Hvorfor ser en elev på flammen gjennom blått koboltglass når hun leter etter kalium i et salt som også inneholder natrium?',
    options: [
      'Koboltglasset stopper det gule natriumlyset, så den fiolette kaliumfargen blir synlig',
      'Koboltglasset gjør den gule natriumfargen sterkere',
      'Koboltglasset gjør om kaliumioner til frie atomer',
      'Koboltglasset farger flammen blå når kalium er til stede',
    ],
    explanation: 'Selv spor av natrium gir så sterkt gult lys at kaliums fiolette farge dekkes. Det blå glasset absorberer det gule lyset og slipper gjennom det fiolette.',
  },
  {
    question: 'Hva måler et AAS-instrument (atomabsorpsjonsspektroskopi)?',
    options: [
      'Hvor mye lys frie atomer av ett grunnstoff absorberer',
      'Hvor mye lys atomene sender ut i flammen',
      'Hvilke bindinger molekylene i prøven har',
      'Hvor mye synlig lys fargede molekyler i løsningen absorberer',
    ],
    explanation: 'I AAS blir prøven til frie atomer i en flamme, og en lampe med samme grunnstoff sender lys gjennom. Instrumentet måler hvor mye av lyset som absorberes. Utsendt lys måles i AES, bindinger med IR og fargede stoffer med UV-Vis.',
  },
  {
    question: 'En vannprøve fortynnes fra 10,0 mL til 20,0 mL før AAS-målingen. Standardkurven gir 1,41 mg/L kobber i den fortynnede prøven. Hva er kobberkonsentrasjonen i vannet?',
    options: [
      '2,8 mg/L',
      '1,41 mg/L',
      '0,71 mg/L',
      '14,1 mg/L',
    ],
    explanation: 'Prøven ble fortynnet til dobbelt volum, så konsentrasjonen i vannet er dobbelt så stor: 1,41 mg/L · 20,0/10,0 = 2,8 mg/L. 0,71 mg/L får du hvis du deler i stedet for å gange, og 1,41 mg/L hvis du glemmer fortynningen.',
  },
  {
    question: 'Hvilken metode passer best til å finne ut om en fargeløs væske har O–H-bindinger?',
    options: [
      'IR-spektroskopi',
      'AAS',
      'Flammeprøve',
      'UV-Vis med standardkurve',
    ],
    explanation: 'Infrarød stråling får bindingene til å vibrere, og hver bindingstype absorberer ved sine egne bølgelengder. AAS og flammeprøven påviser grunnstoffer, og en fargeløs væske absorberer ikke synlig lys.',
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
  {
    question: 'Hva holder partiklene sammen i et molekylgitter, som i fast jod (I₂)?',
    options: [
      'Mellommolekylære krefter mellom molekylene',
      'Kovalente bindinger mellom alle atomene i gitteret',
      'Ionebindinger mellom positive og negative ioner',
      'Frie elektroner mellom positive ioner',
    ],
    explanation: 'I et molekylgitter er bindingene inni molekylene kovalente, men molekylene holdes sammen av mellommolekylære krefter. Kovalente bindinger gjennom hele gitteret er et atomgitter, ionebindinger et ionegitter og frie elektroner et metallgitter.',
  },
  {
    question: 'Et stoff smelter ved omtrent 1700 °C, leder ikke strøm og løses verken i vann eller heksan. Hvilken gittertype har det trolig?',
    options: [
      'Atomgitter',
      'Molekylgitter',
      'Ionegitter',
      'Metallgitter',
    ],
    explanation: 'Svært høyt smeltepunkt betyr at sterke bindinger må brytes. Et ionegitter ville ledet som smelte og ofte løst seg i vann, et metallgitter ville ledet strøm, og et molekylgitter har lavt smeltepunkt. Stoffet passer med et atomgitter, som kvarts (SiO₂).',
  },
  {
    question: 'Hvorfor kan grafitt brukes i blyanter?',
    options: [
      'Lagene av karbonatomer holdes sammen av svake krefter og glir lett av',
      'Karbonatomene i grafitt er bundet med svake kovalente bindinger i alle retninger',
      'Grafitt er et molekylgitter av små karbonmolekyler',
      'Grafitt er et metall som er mykt',
    ],
    explanation: 'I grafitt er hvert karbonatom bundet sterkt til tre andre i plane lag, men lagene holdes sammen av svake krefter. Lagene glir derfor av på papiret. Grafitt er et atomgitter av ikke-metallet karbon.',
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
    question: 'Hva er oksidasjonshalvreaksjonen i Zn + Cu²⁺ → Zn²⁺ + Cu?',
    options: [
      'Zn → Zn²⁺ + 2e⁻',
      'Cu²⁺ + 2e⁻ → Cu',
      'Zn + 2e⁻ → Zn²⁺',
      'Cu → Cu²⁺ + 2e⁻',
    ],
    explanation: 'Sink avgir to elektroner og oksideres: Zn → Zn²⁺ + 2e⁻. Kobberionet tar opp elektronene og reduseres: Cu²⁺ + 2e⁻ → Cu.',
  },
  {
    question: 'En jernspiker legges i en blå løsning av kobber(II)sulfat. Hva skjer?',
    options: [
      'Jern oksideres, og kobber felles ut som et rødbrunt belegg',
      'Kobber oksideres, og jern felles ut på spikeren',
      'Ingenting, fordi jern er mer edelt enn kobber',
      'Det bobler av hydrogengass fra spikeren',
    ],
    explanation: 'Jern står til venstre for kobber i spenningsrekka og reduserer Cu²⁺: Fe + Cu²⁺ → Fe²⁺ + Cu. Den blå fargen fra Cu²⁺ blir svakere. Velger du at kobber oksideres eller at jern er mer edelt, har du snudd rekka. Hydrogengass dannes bare når metallet reagerer med H⁺ i en syre.',
  },
  {
    question: 'Hvilket metall løses i fortynnet saltsyre og gir hydrogengass?',
    options: [
      'Sink',
      'Kobber',
      'Sølv',
      'Gull',
    ],
    explanation: 'Bare metaller til venstre for H₂ i spenningsrekka kan redusere H⁺ til H₂: Zn + 2H⁺ → Zn²⁺ + H₂. Kobber, sølv og gull står til høyre for H₂ og løses ikke i saltsyre.',
  },
  {
    question: 'Et metall X reagerer med løsninger av både Y²⁺ og Z²⁺. Metall Y reagerer med Z²⁺, men ikke med X²⁺. Hvilken rekkefølge har metallene fra mest uedel til mest edel?',
    options: [
      'X, Y, Z',
      'Z, Y, X',
      'Y, X, Z',
      'X, Z, Y',
    ],
    explanation: 'Et metall reduserer ionene til metaller som er mer edle. X reduserer ionene til begge de andre og er mest uedelt. Y reduserer bare Z²⁺, så Z er mest edelt. Z, Y, X er rekka snudd.',
  },
  {
    question: 'Hva må til for at jern skal ruste?',
    options: [
      'Både vann og oksygen',
      'Bare oksygen',
      'Bare vann',
      'Salt og karbondioksid',
    ],
    explanation: 'Jern oksideres og oksygen reduseres, og reaksjonen krever en vannfilm der ioner kan vandre. En spiker i tørr luft eller i kokt vann uten luft ruster nesten ikke. Salt gjør at rustingen går raskere, men er ikke nødvendig.',
  },
  {
    question: 'Hvorfor ruster ikke jernet i en ripe i et galvanisert (sinkbelagt) stålrør?',
    options: [
      'Sink er mer uedelt enn jern og oksideres i stedet for jernet',
      'Sink er mer edelt enn jern og skyver oksygenet bort',
      'Sinklaget dekker fortsatt jernet i ripa',
      'Sink omdanner rusten tilbake til jern',
    ],
    explanation: 'Sink står til venstre for jern i spenningsrekka og gir lettere fra seg elektroner. Sinken ofres og tæres bort, mens jernet blir liggende som metall (offerbeskyttelse). I ripa er jernet ikke dekket, så skjerming kan ikke forklare det.',
  },
  {
    question: 'Et stålskrog skal beskyttes med et offermetall. Hvilket metall kan brukes?',
    options: [
      'Magnesium',
      'Kobber',
      'Tinn',
      'Sølv',
    ],
    explanation: 'Offermetallet må være mer uedelt enn jern, slik at det oksideres i stedet for stålet. Magnesium står til venstre for jern. Kobber, tinn og sølv står til høyre for jern og ville fått jernet til å ruste raskere.',
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
  {
    question: 'Hva er den empiriske formelen til eten, C₂H₄?',
    options: [
      'CH₂',
      'C₂H₄',
      'CH₄',
      'C₂H₂',
    ],
    explanation: 'Den empiriske formelen er det enkleste heltallsforholdet: 2 : 4 = 1 : 2, altså CH₂. C₂H₄ er molekylformelen. CH₄ og C₂H₂ har et annet forhold mellom C og H.',
  },
  {
    question: 'Et stoff inneholder 75 % karbon og 25 % hydrogen (masseprosent). Hva er den empiriske formelen? Bruk C = 12 og H = 1 g/mol.',
    options: [
      'CH₄',
      'C₃H',
      'CH₃',
      'C₆H₂₅',
    ],
    explanation: 'I 100 g er det 75/12 = 6,25 mol C og 25/1 = 25 mol H. Forholdet er 6,25 : 25 = 1 : 4, altså CH₄. C₃H får du hvis du bruker prosentene direkte (75 : 25 = 3 : 1) uten å regne om til mol. C₆H₂₅ får du hvis du ikke deler stoffmengdene på den minste.',
  },
  {
    question: 'Et stoff har empirisk formel CH₂O og molmasse 180 g/mol. Hva er molekylformelen? Bruk C = 12, H = 1 og O = 16 g/mol.',
    options: [
      'C₆H₁₂O₆',
      'C₃H₆O₃',
      'CH₂O',
      'C₁₂H₂₄O₁₂',
    ],
    explanation: 'M(CH₂O) = 12 + 2 + 16 = 30 g/mol, og 180/30 = 6. Molekylformelen er seks empiriske enheter: C₆H₁₂O₆. C₃H₆O₃ har molmasse 90 g/mol og C₁₂H₂₄O₁₂ 360 g/mol.',
  },
  {
    question: 'Hva er molmassen til CuSO₄ · 5H₂O når M(CuSO₄) = 159,6 g/mol og M(H₂O) = 18,0 g/mol?',
    options: [
      '249,6 g/mol',
      '177,6 g/mol',
      '159,6 g/mol',
      '888,0 g/mol',
    ],
    explanation: 'Krystallvannet regnes med: 159,6 + 5 · 18,0 = 249,6 g/mol. 177,6 g/mol tar bare med ett vannmolekyl, 159,6 g/mol er det vannfrie saltet, og 888,0 g/mol er (159,6 + 18,0) · 5.',
  },
  {
    question: 'En elev varmer et hydrat for kort, slik at noe krystallvann blir igjen. Hvordan påvirker det den beregnede verdien av x i MgSO₄ · xH₂O?',
    options: [
      'x blir for lav',
      'x blir for høy',
      'x blir riktig, fordi massen av saltet ikke endres',
      'x blir riktig, fordi vannet ikke regnes med',
    ],
    explanation: 'Vann som er igjen, gjør at massetapet blir for lite og at det som veies som vannfritt salt, veier for mye. Stoffmengden vann blir for liten og stoffmengden salt for stor, så x = n(H₂O)/n(MgSO₄) blir for lav.',
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
    question: 'Hva menes med system og omgivelser i termokjemi?',
    options: [
      'Systemet er det vi studerer, for eksempel stoffene som reagerer, og omgivelsene er alt rundt',
      'Systemet er alltid gassen over en væske',
      'Omgivelsene er bare reaksjonskaret',
      'System og omgivelser er to navn på det samme',
    ],
    explanation: 'Systemet er den delen vi studerer, for eksempel stoffene i en reaksjon. Omgivelsene er alt rundt, som vannet, karet og lufta. Varme som systemet avgir, tas opp av omgivelsene.',
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
  {
    question: 'Etanol har ΔcH° = −1367 kJ/mol og M = 46,1 g/mol. Hvor mye energi gir 1 g etanol ved forbrenning?',
    options: [
      '29,7 kJ',
      '1367 kJ',
      '63 019 kJ',
      '0,034 kJ',
    ],
    explanation: 'Energi per gram er 1367 kJ/mol delt på 46,1 g/mol = 29,7 kJ/g. 1367 kJ er energien per mol. 63 019 kJ får du ved å gange, og 0,034 kJ ved å dele molmassen på entalpien.',
  },
  {
    question: 'Hvorfor gir hydrogen mer energi per gram enn oktan, selv om oktan gir mer energi per mol?',
    options: [
      'Hydrogenmolekylet har svært liten molmasse',
      'Hydrogen har høyere forbrenningsentalpi per mol',
      'Hydrogen brenner ved høyere temperatur enn oktan',
      'Oktan inneholder oksygen som ikke gir energi',
    ],
    explanation: 'Hydrogen gir 286 kJ/mol og oktan 5470 kJ/mol, men 1 mol H₂ veier bare 2,02 g mot 114,2 g for oktan. Per gram blir det 142 kJ/g mot 47,9 kJ/g. Oktan, C₈H₁₈, inneholder ikke oksygen.',
  },
  {
    question: 'Et kakestykke inneholder 10 g fett og 30 g karbohydrat. Hvor mye energi gir det? Bruk 37 kJ/g for fett og 17 kJ/g for karbohydrat.',
    options: [
      '880 kJ',
      '1480 kJ',
      '54 kJ',
      '1280 kJ',
    ],
    explanation: '10 · 37 + 30 · 17 = 370 + 510 = 880 kJ. 1480 kJ får du hvis du bruker 37 kJ/g for begge, og 1280 kJ hvis du bytter verdiene for fett og karbohydrat. 54 kJ er bare summen av energiverdiene per gram.',
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
  {
    question: 'I et forsøk øker gassvolumet fra 52 mL til 66 mL mellom t = 40 s og t = 60 s. Hva er den gjennomsnittlige reaksjonsfarten i intervallet?',
    options: [
      '0,70 mL/s',
      '1,1 mL/s',
      '1,3 mL/s',
      '14 mL/s',
    ],
    explanation: 'Fart = endring i volum delt på tid: (66 − 52) mL / (60 − 40) s = 14 mL / 20 s = 0,70 mL/s. 1,1 mL/s er 66/60, som er gjennomsnittet fra start. 1,3 mL/s er 52/40, og 14 mL er bare volumendringen.',
  },
  {
    question: 'Marmor reagerer med saltsyre i en åpen kolbe som står på en vekt. Hva tilsvarer massetapet som vekten viser?',
    options: [
      'Massen av CO₂ som slipper ut',
      'Massen av marmor som løses',
      'Massen av vann som dannes',
      'Massen av saltsyre som fordamper',
    ],
    explanation: 'CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂. Bare CO₂ forlater kolben, så massetapet er massen av gassen som er dannet. Marmor som løses og vann som dannes, blir værende i kolben.',
  },
  {
    question: 'En graf av gassvolum mot tid er brattest i starten og flater ut. Hva viser det?',
    options: [
      'Reaksjonsfarten avtar fordi reaktantene brukes opp',
      'Reaksjonsfarten øker fordi det dannes mer produkt',
      'Aktiveringsenergien øker mens reaksjonen går',
      'Reaksjonen blir endoterm etter en stund',
    ],
    explanation: 'Stigningstallet er reaksjonsfarten. Den er størst i starten, når konsentrasjonen av reaktantene er størst. Aktiveringsenergien og ΔH hører til reaksjonen og endres ikke underveis.',
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
    question: 'Hva betyr det at en likevekt ligger langt til høyre?',
    options: [
      'Likevektsblandingen inneholder mest produkter',
      'Likevektsblandingen inneholder mest reaktanter',
      'Reaksjonen går svært raskt',
      'Bare framreaksjonen pågår',
    ],
    explanation: 'At likevekten ligger til høyre, betyr at blandingen ved likevekt inneholder mest produkter. Begge reaksjonene pågår fortsatt, og posisjonen sier ingenting om hvor raskt likevekten innstilles.',
  },
  {
    question: 'Kan den samme likevekten nås både fra reaktantsiden og fra produktsiden?',
    options: [
      'Ja, med like mange atomer totalt og samme temperatur og volum ender begge veier i samme likevektsblanding',
      'Nei, likevekt kan bare nås fra reaktantene',
      'Nei, starter vi med produktene, skjer ingen reaksjon',
      'Ja, men bare hvis vi tilsetter en katalysator',
    ],
    explanation: 'Starter vi med bare N₂O₄, dannes NO₂ til likevekt er nådd. Starter vi med bare NO₂, dannes N₂O₄. Med like mange atomer totalt, samme temperatur og samme volum ender begge forsøkene i den samme likevektsblandingen.',
  },
  {
    question: 'Hvorfor kan kalkbrenning, CaCO₃(s) ⇌ CaO(s) + CO₂(g), ikke nå likevekt i en åpen digel?',
    options: [
      'CO₂ slipper ut, så tilbakereaksjonen ikke får noe CO₂ å reagere med',
      'CaCO₃ er et fast stoff',
      'Temperaturen er for høy til at noen reaksjon skjer',
      'CaO reagerer med nitrogen i lufta',
    ],
    explanation: 'Likevekt krever et lukket system. I en åpen digel slipper CO₂ ut, så tilbakereaksjonen CaO + CO₂ → CaCO₃ ikke kan skje. Da kan til slutt all kalsiumkarbonat brytes ned.',
  },
  {
    question: 'Hvorfor blir brus flat når flasken står åpen?',
    options: [
      'Systemet er åpent, så CO₂ forsvinner ut i lufta og likevekt kan ikke innstille seg',
      'Sukkeret i brusen reagerer med oksygen',
      'Vannet i brusen fordamper',
      'CO₂ blir omdannet til oksygen',
    ],
    explanation: 'I en lukket flaske er det likevekt mellom CO₂ løst i brusen og CO₂-gass over væsken. Er flasken åpen, forsvinner CO₂-gassen ut i lufta, mer CO₂ går ut av løsningen, og brusen blir flat.',
  },
],

  'kjemi1-7-2': [
  {
    question: 'Hva sier Le Châteliers prinsipp?',
    options: [
      'Et system i likevekt som forstyrres, forskyver seg slik at forstyrrelsen motvirkes',
      'Likevekter forsterker alltid en ytre forstyrrelse',
      'Likevekter påvirkes ikke av ytre endringer',
      'Likevekten forskyves alltid mot produktsiden',
    ],
    explanation: 'Le Châteliers prinsipp: Når en likevekt forstyrres (konsentrasjon, temperatur eller trykk), forskyver systemet seg i den retningen som motvirker forstyrrelsen.',
  },
  {
    question: 'Hva skjer med likevekten A + B ⇌ C hvis vi tilsetter mer A?',
    options: [
      'Likevekten forskyves mot høyre, og det dannes mer C',
      'Likevekten forskyves mot venstre',
      'Ingenting skjer',
      'Det dannes mer A',
    ],
    explanation: 'Tilsetning av en reaktant forskyver likevekten mot produktsiden for å forbruke noe av tilskuddet. Når ny likevekt er innstilt, er det mer C enn før.',
  },
  {
    question: 'En reaksjon er eksoterm (ΔH < 0). Hva skjer hvis temperaturen økes?',
    options: [
      'Likevekten forskyves mot reaktantene, og det blir mindre produkt',
      'Likevekten forskyves mot produktene, og det blir mer produkt',
      'Likevekten påvirkes ikke av temperatur',
      'Reaksjonen stopper helt',
    ],
    explanation: 'Varme kan ses som et "produkt" i en eksoterm reaksjon. Økt temperatur forskyver likevekten i endoterm retning — mot reaktantene. Ved høyere temperatur blir det derfor mindre produkt i likevektsblandingen.',
  },
  {
    question: 'Hva skjer med likevekten N₂(g) + 3H₂(g) ⇌ 2NH₃(g) når trykket økes (volumet minkes)?',
    options: [
      'Den forskyves mot NH₃, siden høyresiden har færrest gassmolekyler (2 mot 4)',
      'Den forskyves mot reaktantene, som har flest molekyler',
      'Den påvirkes ikke av trykk',
      'Reaksjonen stopper',
    ],
    explanation: 'Økt trykk forskyver likevekten mot siden med færrest gassmolekyler. Venstresiden har 1 + 3 = 4 molekyler, høyresiden 2, så likevekten går mot NH₃. Dette utnyttes i Haber-Bosch-prosessen.',
  },
  {
    question: 'Hvordan påvirker en katalysator likevektsposisjonen?',
    options: [
      'Ikke i det hele tatt — den gjør bare at likevekten innstilles raskere',
      'Den forskyver likevekten mot produktene',
      'Den stopper tilbakereaksjonen',
      'Den forskyver likevekten mot reaktantene',
    ],
    explanation: 'En katalysator øker farten til både fram- og tilbakereaksjonen like mye. Likevekten nås raskere, men likevektsposisjonen er uendret.',
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
      'Jo høyere trykket av gassen over væsken er, desto mer av gassen løses i væsken',
      'Løseligheten av salt er proporsjonal med temperaturen',
      'Alle gasser har samme løselighet',
      'Gassløselighet er uavhengig av trykket',
    ],
    explanation: 'Henrys lov: høyere trykk av gassen over væsken gir mer løst gass. Derfor tappes brus under høyt CO₂-trykk, og kullsyren bobler ut når flasken åpnes og trykket synker.',
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
    explanation: 'En sterk syre, som HCl og HNO₃, avgir protonene sine fullstendig til vann. Styrke handler om hvor stor andel av syremolekylene som protolyserer, ikke om konsentrasjon.',
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
  {
    question: 'Hvor mange milliliter NaOH-løsning med 0,10 mol/L trengs for å nøytralisere 20,0 mL HNO₃ med 0,15 mol/L?',
    options: [
      '30 mL',
      '20 mL',
      '13 mL',
      '60 mL',
    ],
    explanation: 'n(HNO₃) = 0,15 · 0,0200 = 3,0 · 10⁻³ mol = n(NaOH). V = 3,0 · 10⁻³ / 0,10 = 0,030 L = 30 mL. 13 mL får du hvis du snur forholdet mellom konsentrasjonene, og 60 mL hvis du dobler som for en toprotisk syre.',
  },
  {
    question: 'Hvor mange mol NaOH trengs for å nøytralisere 0,0050 mol H₂SO₄?',
    options: [
      '0,010 mol',
      '0,0050 mol',
      '0,0025 mol',
      '0,020 mol',
    ],
    explanation: 'H₂SO₄ + 2 NaOH → Na₂SO₄ + 2 H₂O, så n(NaOH) = 2 · 0,0050 = 0,010 mol. 0,0050 mol bygger på molforholdet 1 : 1, og 0,0025 mol på at forholdet er snudd.',
  },
],

  'kjemi1-9-3': [
  {
    question: 'Saltsyre og eddiksyre har begge konsentrasjonen 0,10 mol/L. Hvilken løsning har lavest pH?',
    options: [
      'Saltsyren, fordi HCl protolyserer fullstendig',
      'Eddiksyren, fordi den er en svak syre',
      'De har samme pH fordi konsentrasjonen er lik',
      'Det kan ikke avgjøres uten indikator',
    ],
    explanation: 'HCl er en sterk syre og protolyserer fullstendig, mens eddiksyre bare protolyserer delvis. Saltsyren har derfor mer H₃O⁺ og lavest pH, selv om konsentrasjonene er like.',
  },
  {
    question: 'Hva er forskjellen på en sterk syre og en konsentrert syre?',
    options: [
      'Sterk sier hvor stor andel som protolyserer, konsentrert sier hvor mye syre som er løst per liter',
      'Det er to ord for det samme',
      'En sterk syre har alltid høyere konsentrasjon',
      'En konsentrert syre protolyserer alltid fullstendig',
    ],
    explanation: 'Styrke handler om hvor stor andel av syremolekylene som avgir protoner til vann. Konsentrasjon handler om hvor mange mol syre som er løst per liter. En svak syre kan være konsentrert, og en sterk syre kan være fortynnet.',
  },
  {
    question: 'En løsning av en svak syre har målt pH = 3,0. Hva er [H₃O⁺]?',
    options: [
      '1,0·10⁻³ mol/L',
      '3,0 mol/L',
      '1,0·10⁻¹¹ mol/L',
      '0,30 mol/L',
    ],
    explanation: '$[H_3O^+] = 10^{-\\text{pH}} = 10^{-3{,}0} = 1{,}0 \\cdot 10^{-3}$ mol/L.',
  },
  {
    question: 'Hvorfor leder en eddiksyreløsning strøm dårligere enn saltsyre med samme konsentrasjon?',
    options: [
      'Eddiksyre protolyserer bare delvis, så løsningen inneholder færre ioner',
      'Eddiksyre inneholder ikke hydrogen',
      'Saltsyren er alltid mer konsentrert',
      'Eddiksyre er en base',
    ],
    explanation: 'Strøm i en løsning føres av ioner. Eddiksyre er en svak syre der bare en liten andel av molekylene protolyserer, så det er færre ioner enn i saltsyre med samme konsentrasjon.',
  },
  {
    question: 'Ammoniakk (NH₃) er en svak base. Hva skjer når ammoniakk løses i vann?',
    options: [
      'En liten andel av NH₃-molekylene tar opp protoner fra vann og danner NH₄⁺ og OH⁻',
      'Alle NH₃-molekylene avgir protoner til vann',
      'NH₃ danner H₃O⁺, så løsningen blir sur',
      'NH₃ reagerer ikke med vann',
    ],
    explanation: 'NH₃ + H₂O ⇌ NH₄⁺ + OH⁻. Ammoniakk er en svak base, så bare en liten andel av molekylene tar opp protoner. Det dannes likevel nok OH⁻ til at løsningen blir basisk.',
  },
  {
    question: 'Hvilket salt gir en sur løsning i vann?',
    options: [
      'NH₄NO₃',
      'KNO₃',
      'CH₃COONa',
      'Na₂CO₃',
    ],
    explanation: 'NH₄⁺ er en svak syre: NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺. KNO₃ er nøytralt, mens acetat og karbonat er svake baser og gir basiske løsninger.',
  },
  {
    question: 'Hvorfor er en løsning av natriumfluorid, NaF, svakt basisk?',
    options: [
      'F⁻ er basen til den svake syren HF og tar opp protoner fra vann',
      'Na⁺ avgir protoner til vannet og danner NaOH',
      'F⁻ er basen til en sterk syre og reagerer fullstendig',
      'NaF inneholder hydroksidioner fra produksjonen',
    ],
    explanation: 'F⁻ + H₂O ⇌ HF + OH⁻. Na⁺ påvirker ikke pH. HF er en svak syre, ikke en sterk, og NaF inneholder ingen OH⁻ før fluoridionet reagerer med vann.',
  },
  {
    question: 'Ammoniakk titreres med saltsyre. Hvordan er løsningen ved ekvivalenspunktet?',
    options: [
      'Svakt sur, fordi den inneholder NH₄⁺',
      'Nøytral, fordi syre og base har reagert',
      'Svakt basisk, fordi den inneholder NH₃',
      'Sterkt sur, fordi HCl er i overskudd',
    ],
    explanation: 'Ved ekvivalenspunktet er alt NH₃ blitt NH₄Cl, og NH₄⁺ er en svak syre. Det er ikke overskudd av HCl før etter ekvivalenspunktet.',
  },
  {
    question: 'Hvorfor begynner tannemaljen å løses når pH i tannbelegget synker under omtrent 5,5?',
    options: [
      'Basene i hydroksylapatitt, OH⁻ og fosfat, reagerer med H₃O⁺',
      'Kalsiumionene i emaljen blir oksidert av syren',
      'Sukkeret reagerer direkte med kalsiumet i emaljen',
      'Spyttet blir basisk og løser opp emaljen',
    ],
    explanation: 'Ca₅(PO₄)₃OH + 4 H₃O⁺ → 5 Ca²⁺ + 3 HPO₄²⁻ + 5 H₂O. Sukker virker indirekte: bakteriene lager syre av det. Spyttet nøytraliserer syren og beskytter.',
  },
  {
    question: 'Hvorfor gjør fluorid tannemaljen mer motstandsdyktig mot syre?',
    options: [
      'Fluorapatitt dannes, og F⁻ er en svakere base enn OH⁻',
      'Fluorid gjør spyttet surere slik at bakteriene dør',
      'Fluorid dreper alle bakteriene som lager syre',
      'Fluorid danner et beskyttende lag av plast på tennene',
    ],
    explanation: 'F⁻ bytter ut OH⁻ i emaljen og gir Ca₅(PO₄)₃F. Fluorid tar dårligere opp H₃O⁺ enn hydroksid, så emaljen løses mindre i syre.',
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
    question: 'Hvorfor tilsetter vi titranten dråpevis når vi nærmer oss ekvivalenspunktet?',
    options: [
      'Fordi pH endrer seg brått der, og én dråpe kan gi fargeomslaget',
      'For at løsningen ikke skal bli for varm',
      'Fordi indikatoren ellers brytes ned',
      'Fordi ekvivalenspunktet alltid ligger ved pH 7',
    ],
    explanation: 'Nær ekvivalenspunktet endrer pH seg brått. Én dråpe kan da gi fargeomslaget, og titrerer vi for raskt, går vi forbi ekvivalenspunktet og får for stort volum.',
  },
  {
    question: 'Det går med 2,0 mmol MnO₄⁻ for å oksidere alt Fe²⁺ i en prøve: 5 Fe²⁺ + MnO₄⁻ + 8 H⁺ → 5 Fe³⁺ + Mn²⁺ + 4 H₂O. Hvor mye Fe²⁺ var det i prøven?',
    options: [
      '10 mmol',
      '2,0 mmol',
      '0,40 mmol',
      '16 mmol',
    ],
    explanation: 'Molforholdet Fe²⁺ : MnO₄⁻ er 5 : 1, så n(Fe²⁺) = 5 · 2,0 mmol = 10 mmol. 0,40 mmol får du hvis du deler på 5 i stedet for å gange, og 16 mmol hvis du bruker koeffisienten til H⁺.',
  },
  {
    question: 'Hvordan ser vi endepunktet når Fe²⁺ titreres med kaliumpermanganat?',
    options: [
      'Første dråpe i overskudd gir en svak rosa farge som blir stående',
      'Løsningen blir fargeløs fordi Fe³⁺ er fargeløst',
      'Det dannes et rødbrunt bunnfall av sølvkromat',
      'Stivelsen i løsningen gir en blå farge',
    ],
    explanation: 'MnO₄⁻ er fiolett og blir til nesten fargeløst Mn²⁺ så lenge det er Fe²⁺ igjen. Fe³⁺ er gulbrunt. Rødbrunt bunnfall hører til Mohrs metode, og blå farge med stivelse til jodtitrering.',
  },
  {
    question: 'Ved kloridbestemmelse med sølvnitrat brukes kaliumkromat som indikator. Hva viser endepunktet?',
    options: [
      'Rødbrunt sølvkromat felles når kloridet er brukt opp',
      'Hvitt sølvklorid begynner å felles ut',
      'Løsningen blir blå fordi kromat reagerer med klorid',
      'Bunnfallet av sølvklorid løses opp igjen',
    ],
    explanation: 'Sølvklorid felles først. Først når nesten alt Cl⁻ er felt, blir det nok Ag⁺ til at rødbrunt Ag₂CrO₄ felles. Hvitt AgCl dannes fra første dråpe.',
  },
  {
    question: 'Hvorfor gir en titrering med EDTA bare summen av kalsium og magnesium i vannet?',
    options: [
      'EDTA danner kompleks med både Ca²⁺ og Mg²⁺ i forholdet 1 : 1',
      'EDTA reagerer bare med kalsium og overser magnesium',
      'Magnesium felles ut som hydroksid før titreringen',
      'Indikatoren skifter farge én gang for hvert metall',
    ],
    explanation: 'EDTA binder begge ionene, ett om gangen, så titrervolumet gir den samlede stoffmengden. Hardheten oppgis derfor ofte som om alt var kalsium.',
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
  {
    question: 'Hvorfor har dekan, C₁₀H₂₂, høyere kokepunkt enn pentan, C₅H₁₂?',
    options: [
      'Lengre kjede gir sterkere van der Waals-krefter mellom molekylene',
      'Dekan danner hydrogenbindinger mellom molekylene',
      'Dekan har sterkere kovalente bindinger mellom C-atomene',
      'Dekan er et polart molekyl med dipolkrefter',
    ],
    explanation: 'Alkaner er upolare. Med flere elektroner og større kontaktflate blir London-kreftene sterkere. Kokingen bryter ikke kovalente bindinger, bare krefter mellom molekylene.',
  },
  {
    question: 'Hvor i destillasjonstårnet tas bensinfraksjonen ut sammenliknet med dieselfraksjonen?',
    options: [
      'Høyere oppe, fordi bensin har lavere kokepunkt',
      'Lenger nede, fordi bensin har lavere kokepunkt',
      'Høyere oppe, fordi bensin har høyere kokepunkt',
      'På samme sted, fordi begge er drivstoff',
    ],
    explanation: 'Tårnet er kaldest øverst. Stoffer med lavt kokepunkt holder seg som gass lengst og kondenserer høyt oppe.',
  },
  {
    question: 'Finn x i krakkingslikningen C₁₆H₃₄ → C₁₀H₂₂ + x C₂H₄.',
    options: [
      '3',
      '2',
      '6',
      '4',
    ],
    explanation: 'Karbon: 16 = 10 + 2x gir x = 3. Kontroll med hydrogen: 22 + 3 · 4 = 34. x = 6 får du hvis du glemmer at hvert etenmolekyl har to C-atomer (16 − 10 = 6).',
  },
  {
    question: 'Et hydrokarbon gir 0,0300 mol CO₂ og 0,0300 mol H₂O ved fullstendig forbrenning. Hva er den empiriske formelen?',
    options: [
      'CH₂',
      'CH',
      'CH₄',
      'C₂H',
    ],
    explanation: 'n(C) = 0,0300 mol og n(H) = 2 · 0,0300 = 0,0600 mol, så C : H = 1 : 2. Svarer du CH, har du glemt at hvert vannmolekyl har to H-atomer.',
  },
  {
    question: 'Hvorfor kan oksygeninnholdet i et organisk stoff ikke regnes ut fra massen av CO₂ og H₂O ved forbrenningsanalyse?',
    options: [
      'Oksygenet i produktene kommer også fra lufta',
      'Oksygen danner ikke CO₂ eller H₂O',
      'Oksygen forsvinner som O₂ under forbrenningen',
      'CO₂ inneholder ikke oksygen',
    ],
    explanation: 'En stor del av oksygenet i CO₂ og H₂O kommer fra O₂ i lufta. Oksygenmassen i prøven finnes derfor som resten: m(prøve) − m(C) − m(H).',
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
    question: 'Hva heter esteren med alkoholdel fra metanol og syredel fra etansyre?',
    options: [
      'Metyletanoat',
      'Etylmetanoat',
      'Metanoletansyre',
      'Etyletanol',
    ],
    explanation: 'Alkoholdelen gir første del av navnet (metanol → metyl), og syredelen gir endelsen -oat (etansyre → etanoat). Esteren heter metyletanoat (metylacetat).',
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
  {
    question: 'Hvilken væske avfarger bromvann raskt i mørket?',
    options: [
      'Heks-1-en',
      '2-metylpentan',
      'Etanol',
      'Propanon',
    ],
    explanation: 'Brom reagerer raskt med C=C-bindingen i heks-1-en. 2-metylpentan er mettet, og etanol og propanon har ingen C=C-binding.',
  },
  {
    question: 'Surgjort kaliumdikromat tilsettes propanal og propanon og varmes svakt. Hva skjer?',
    options: [
      'Løsningen med propanal blir grønn, propanon forblir oransje',
      'Begge løsningene blir grønne',
      'Løsningen med propanon blir grønn, propanal forblir oransje',
      'Ingen av løsningene endrer farge',
    ],
    explanation: 'Aldehyder oksideres og gjør dikromatet grønt. Ketoner oksideres ikke, så fargen forblir oransje.',
  },
  {
    question: 'Hvordan kan natron, NaHCO₃, skille etansyre fra etanol?',
    options: [
      'Det bruser med etansyre, men ikke med etanol',
      'Det bruser med etanol, men ikke med etansyre',
      'Natron gjør etanol blå',
      'Begge bruser like mye',
    ],
    explanation: 'Etansyre er en karboksylsyre: CH₃COOH + NaHCO₃ → CH₃COONa + H₂O + CO₂. Etanol er ikke sur nok til å reagere.',
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
      'At molekylet har en OH-gruppe',
      'At molekylet er et alkan',
    ],
    explanation: 'Dobbeltbindingen hindrer rotasjon, og hvis hvert dobbeltbindingskarbon bærer to ulike grupper, finnes cis-formen (like grupper på samme side) og trans-formen (motsatt side).',
  },
  {
    question: 'Propan-1-ol og propan-2-ol har begge formelen C₃H₈O. Hva slags isomeri er dette?',
    options: [
      'Posisjonsisomeri, fordi OH-gruppen sitter på ulike karbonatomer',
      'Kjedeisomeri, fordi kjeden er forgrenet ulikt',
      'Cis/trans-isomeri',
      'De er ikke isomerer',
    ],
    explanation: 'I propan-1-ol sitter OH-gruppen på et endekarbon, i propan-2-ol på karbonatomet i midten. Molekylformelen er lik, men den funksjonelle gruppen sitter på ulik plass: posisjonsisomeri.',
  },
  {
    question: 'Etanol og dimetyleter har begge formelen C₂H₆O. Hva slags isomeri er dette?',
    options: [
      'Funksjonell gruppe-isomeri, fordi de har ulike funksjonelle grupper',
      'Posisjonsisomeri',
      'Kjedeisomeri',
      'Cis/trans-isomeri',
    ],
    explanation: 'Etanol (CH₃CH₂OH) er en alkohol med –OH-gruppe, mens dimetyleter (CH₃OCH₃) har en –O– mellom to karbonatomer. Samme molekylformel, men ulik funksjonell gruppe: funksjonell gruppe-isomeri.',
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
  {
    question: 'pH i overflatevannet i havet har sunket fra 8,2 til 8,1. Hvor mye har [H₃O⁺] økt?',
    options: [
      'Omtrent 26 %',
      'Omtrent 1 %',
      'Omtrent 10 %',
      'Omtrent 100 %',
    ],
    explanation: '10^0,1 ≈ 1,26, så [H₃O⁺] har økt med ca. 26 %. 1 % får du hvis du regner som om pH-skalaen var lineær, og 100 % hører til en nedgang på 0,3.',
  },
  {
    question: 'Hvorfor gjør havforsuring det vanskeligere for skjell å bygge skall av CaCO₃?',
    options: [
      'H₃O⁺ binder karbonationer som hydrogenkarbonat',
      'CO₂ oksiderer kalsiumionene i sjøvannet',
      'Havet blir surt med pH under 7 overalt',
      'Saltinnholdet i havet synker når CO₂ løses',
    ],
    explanation: 'CO₃²⁻ + H₃O⁺ → HCO₃⁻ + H₂O, så det blir færre karbonationer igjen. Havet er fortsatt basisk, med pH rundt 8,1.',
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
  {
    question: 'En fabrikk lager 50 kg produkt og 200 kg avfall per dag. Hva er E-faktoren?',
    options: [
      '4',
      '0,25',
      '250',
      '0,80',
    ],
    explanation: 'E = m(avfall) / m(produkt) = 200 / 50 = 4. 0,25 får du hvis du deler produktet på avfallet, og 0,80 hvis du deler avfallet på all masse.',
  },
  {
    question: 'Hva tar E-faktoren med som atomøkonomien ikke tar med?',
    options: [
      'Løsemidler og produkt som går tapt',
      'Koeffisientene i den balanserte likningen',
      'Molmassen til det ønskede produktet',
      'Biproduktene som står i likningen',
    ],
    explanation: 'Atomøkonomien regnes fra den balanserte likningen. E-faktoren måler alt som blir avfall i prosessen, også løsemidler, reagenser og tap.',
  },
  {
    question: 'En reaksjon har atomøkonomi 50 % og går fullstendig etter likningen. Hva er den lavest mulige E-faktoren?',
    options: [
      '1',
      '0,5',
      '2',
      '0',
    ],
    explanation: 'E_min = 1/a − 1 = 1/0,50 − 1 = 1: halve massen blir produkt og halve blir biprodukt. 0 gjelder bare atomøkonomi 100 %.',
  },
  {
    question: 'Hvorfor kan bioetanol gi lavere netto CO₂-utslipp enn bensin selv om begge gir CO₂ når de brennes?',
    options: [
      'Karbonet i bioetanol ble nylig tatt opp fra lufta av plantene',
      'Etanol gir ikke CO₂ når det brennes i en motor',
      'Etanol gir mye mindre CO₂ per megajoule enn bensin',
      'Gjæringen tar opp CO₂ fra lufta i stedet for å avgi det',
    ],
    explanation: 'Per megajoule gir etanol og bensin omtrent like mye CO₂. Forskjellen er at karbonet i bioetanol kom fra lufta nylig, mens karbonet i bensin er fossilt. Gjæringen gir CO₂, den tar ikke opp.',
  },
  {
    question: 'Hvor mange mol etanol gir 1 mol glukose ved fullstendig gjæring?',
    options: [
      '2 mol',
      '1 mol',
      '3 mol',
      '6 mol',
    ],
    explanation: 'C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂. 6 mol får du hvis du teller karbonatomene i glukose.',
  },
  {
    question: 'Hvorfor er ikke bioetanol helt karbonnøytralt?',
    options: [
      'Dyrking, gjødsel, destillasjon og transport bruker energi',
      'Etanol inneholder fossilt karbon fra råolje',
      'Plantene tar ikke opp CO₂ mens de vokser',
      'Etanol brenner alltid ufullstendig i bilmotorer',
    ],
    explanation: 'Karbonet i etanolen kommer fra lufta, men produksjonen bruker energi som ofte er fossil, og rydding av skog eller myr kan frigjøre lagret karbon.',
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
  {
    question: 'En elev undersøker hvordan temperaturen påvirker reaksjonsfarten mellom magnesium og saltsyre. Hva er den avhengige variabelen?',
    options: [
      'Tiden reaksjonen tar',
      'Temperaturen',
      'Konsentrasjonen av saltsyren',
      'Massen av magnesium',
    ],
    explanation: 'Den avhengige variabelen er den eleven måler: tiden. Temperaturen er den uavhengige variabelen, og konsentrasjon og masse holdes konstant.',
  },
  {
    question: '25,00 mL eddik med omtrent 1,2 mol/L eddiksyre skal titreres med 0,100 mol/L NaOH i en 50 mL byrette. Hva bør eleven gjøre?',
    options: [
      'Fortynne eddiken omtrent ti ganger først',
      'Titrere eddiken ufortynnet med samme byrette',
      'Bruke en mer fortynnet NaOH-løsning',
      'Bruke målesylinder i stedet for pipette',
    ],
    explanation: 'Ufortynnet trengs nesten 300 mL NaOH. Fortynnet ti ganger blir titrervolumet rundt 29 mL. En mer fortynnet NaOH ville gjort volumet enda større.',
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
  {
    question: 'Fem titrervolumer er 24,35, 24,40, 24,30, 25,60 og 24,35 mL. Hvilken måling avviker?',
    options: [
      '25,60 mL',
      '24,30 mL',
      '24,40 mL',
      'Ingen av dem',
    ],
    explanation: 'De fire andre ligger innenfor 0,10 mL, mens 25,60 mL ligger over 1 mL unna. Gjennomsnittet av de fire er 24,35 mL.',
  },
  {
    question: 'En simulering gir pH 6,98 for saltsyre med 1,0 · 10⁻⁸ mol/L. Hvorfor gir den ikke pH 8?',
    options: [
      'Vannets autoprotolyse gir mer H₃O⁺ enn syren',
      'HCl er en svak syre ved lave konsentrasjoner',
      'pH-skalaen slutter ved 7',
      'Simuleringen har regnefeil',
    ],
    explanation: 'Ved så lav konsentrasjon er H₃O⁺ fra vannet selv viktigst. En syre kan ikke gi basisk løsning. HCl er sterk ved alle konsentrasjoner.',
  },
  {
    question: 'Hvorfor er interpolering sikrere enn ekstrapolering?',
    options: [
      'Vi leser av innenfor området der vi har målinger',
      'Ekstrapolering bruker flere målepunkter enn interpolering',
      'Interpolering krever ingen graf eller tabell',
      'Ekstrapolering gir alltid for høye verdier',
    ],
    explanation: 'Mellom målepunktene vet vi at sammenhengen holder. Utenfor dem kan sammenhengen endre seg uten at dataene viser det.',
  },
],

};

export default quizData_kjemi1;
