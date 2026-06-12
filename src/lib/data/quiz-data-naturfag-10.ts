import type { QuizQuestion } from './quiz-data';

const quizData_naturfag_10: Record<string, QuizQuestion[]> = {
  'naturfag-10-1-1': [
    {
      question: 'Hva er naturvitenskap?',
      options: [
        'En systematisk måte å studere naturen på',
        'En samling av ufeilbårlige fakta',
        'Bare studiet av planter og dyr',
        'En religion',
      ],
      explanation: 'Naturvitenskap er en systematisk måte å studere naturen på ved hjelp av observasjoner og eksperimenter.',
    },
    {
      question: 'Hvilken naturvitenskapelig gren studerer levende organismer?',
      options: [
        'Biologi',
        'Fysikk',
        'Kjemi',
        'Geologi',
      ],
      explanation: 'Biologi er fagområdet som studerer levende organismer, fra bakterier til mennesker.',
    },
    {
      question: 'Hva er en hypotese?',
      options: [
        'En testbar forklaring eller forutsigelse',
        'Et bevist faktum',
        'En mening uten bevis',
        'Det samme som en teori',
      ],
      explanation: 'En hypotese er en mulig forklaring på noe vi har observert, som kan testes gjennom eksperimenter.',
    },
    {
      question: 'Hva kjennetegner pseudovitenskap?',
      options: [
        'Påstander som ikke kan testes',
        'Grundige eksperimenter',
        'Fagfellevurdering',
        'Åpenhet for kritikk',
      ],
      explanation: 'Pseudovitenskap kjennetegnes av påstander som ikke kan testes, vage begreper og ignorering av motbevis.',
    },
    {
      question: 'Hvilket fagområde studerer stoffer og deres reaksjoner?',
      options: [
        'Kjemi',
        'Fysikk',
        'Biologi',
        'Astronomi',
      ],
      explanation: 'Kjemi studerer stoffer, deres egenskaper og hvordan de reagerer med hverandre.',
    },
  ],

  // Kapittel 1.2

  'naturfag-10-1-2': [
    {
      question: 'Hva er den uavhengige variabelen i et eksperiment?',
      options: [
        'Det du bevisst endrer',
        'Det du måler',
        'Det som holdes konstant',
        'Det tilfeldige resultatet',
      ],
      explanation: 'Den uavhengige variabelen er det du bevisst endrer i eksperimentet - årsaken du tester.',
    },
    {
      question: 'Hva er den avhengige variabelen i et eksperiment?',
      options: [
        'Det du måler eller observerer',
        'Det du endrer',
        'Det som holdes konstant',
        'Hypotesen din',
      ],
      explanation: 'Den avhengige variabelen er det du måler eller observerer - virkningen av det du endrer.',
    },
    {
      question: 'Hvorfor trenger vi en kontrollgruppe?',
      options: [
        'For å ha noe å sammenligne med',
        'For å spare tid',
        'Fordi læreren sier det',
        'For å gjøre eksperimentet vanskeligere',
      ],
      explanation: 'En kontrollgruppe gir oss noe å sammenligne med, slik at vi vet om endringen skyldes den uavhengige variabelen.',
    },
    {
      question: 'Hva kjennetegner en god hypotese?',
      options: [
        'Den er testbar og kan bevises gal',
        'Den er alltid riktig',
        'Den er vag og generell',
        'Den inneholder ingen variabler',
      ],
      explanation: 'En god hypotese er testbar, falsifiserbar og basert på observasjoner.',
    },
    {
      question: 'I et eksperiment om vanntemperaturens effekt på sukkermengde som løses opp, hva er den avhengige variabelen?',
      options: [
        'Mengden sukker som løses opp',
        'Vanntemperaturen',
        'Mengden vann',
        'Typen sukker',
      ],
      explanation: 'Den avhengige variabelen er det som måles - her hvor mye sukker som løses opp eller hvor raskt det skjer.',
    },
    {
      question: 'Hva er en feilkilde?',
      options: [
        'Noe som kan gjøre resultatene unøyaktige',
        'En riktig måling',
        'En god hypotese',
        'En kontrollgruppe',
      ],
      explanation: 'En feilkilde er noe som kan påvirke resultatene i et eksperiment og gjøre dem unøyaktige.',
    },
  ],

  // Kapittel 1.3

  'naturfag-10-1-3': [
    {
      question: 'Hva er kvantitative data?',
      options: [
        'Data som kan måles med tall',
        'Beskrivelser av egenskaper',
        'Data om kvalitet',
        'Meninger og vurderinger',
      ],
      explanation: 'Kvantitative data er målbare data som kan uttrykkes med tall, f.eks. temperatur, lengde eller vekt.',
    },
    {
      question: 'Hvilken diagramtype passer best for å vise endring over tid?',
      options: [
        'Linjediagram',
        'Sektordiagram',
        'Søylediagram',
        'Punktdiagram',
      ],
      explanation: 'Linjediagram brukes for å vise hvordan noe endrer seg over tid, fordi linjen tydelig viser trenden.',
    },
    {
      question: 'Hva er en systematisk feil?',
      options: [
        'En feil som gir konstant avvik i samme retning',
        'En tilfeldig feil',
        'En feil som bare skjer én gang',
        'En feil som ikke påvirker resultatene',
      ],
      explanation: 'En systematisk feil er en feil som påvirker alle målinger på samme måte, f.eks. et kalibreringsproblem.',
    },
    {
      question: 'Hva er gjennomsnitt?',
      options: [
        'Summen av verdiene delt på antall verdier',
        'Den høyeste verdien',
        'Verdien i midten',
        'Den vanligste verdien',
      ],
      explanation: 'Gjennomsnitt er summen av alle verdier delt på antall verdier.',
    },
    {
      question: 'Hvilket utsagn er KVALITATIVT?',
      options: [
        'Væsken var blå og luktet surt',
        'Temperaturen var 45 grader',
        'Planten vokste 3 cm',
        'Eksperimentet tok 15 minutter',
      ],
      explanation: 'Kvalitative data beskriver egenskaper uten tall, som farge, lukt eller tekstur.',
    },
    {
      question: 'Hva bør en god konklusjon inneholde?',
      options: [
        'Svar på spørsmålet, data, vurdering av hypotesen og usikkerhet',
        'Bare om hypotesen var riktig eller gal',
        'En lang liste med alle målinger',
        'Bare en setning som oppsummerer',
      ],
      explanation: 'En god konklusjon svarer på forskningsspørsmålet, viser til konkrete data, vurderer hypotesen og diskuterer usikkerhet.',
    },
  ],

  // Kapittel 1.4

  'naturfag-10-1-4': [
    {
      question: 'Hva er en modell i naturfag?',
      options: [
        'En førenklet fremstilling av virkeligheten',
        'En eksakt kopi av virkeligheten',
        'En teori som er bevist',
        'Et forsøksresultat',
      ],
      explanation: 'En modell er en førenklet fremstilling av noe vi vil forstå eller forklare.',
    },
    {
      question: 'Hvilken type modell er en globus?',
      options: [
        'Fysisk modell',
        'Matematisk modell',
        'Konseptuell modell',
        'Digital modell',
      ],
      explanation: 'En globus er en fysisk modell - et tredimensjonalt objekt du kan se og ta på.',
    },
    {
      question: 'Hvorfor bruker vi modeller?',
      options: [
        'For å forstå og forklare fenomener vi ikke kan observere direkte',
        'Fordi vi er late',
        'For å gjøre ting vanskeligere',
        'Bare for å tegne pene bilder',
      ],
      explanation: 'Vi bruker modeller for å førenkle, forstå, kommunisere og forutsi fenomener som kan være for store, små eller komplekse å studere direkte.',
    },
    {
      question: 'Hva er en svakhet med alle modeller?',
      options: [
        'De er førenklinger og viser ikke alt',
        'De er alltid feil',
        'De er for kompliserte',
        'De kan ikke endres',
      ],
      explanation: 'Alle modeller er førenklinger og viser ikke virkeligheten perfekt - de kan utelate viktige detaljer.',
    },
    {
      question: 'Hvabrukes Bohrs atommodell til å forklare?',
      options: [
        'Hvordan elektroner er organisert rundt atomkjernen',
        'Hvordan planeter beveger seg',
        'Hvordan celler fungerer',
        'Hvordan vann køker',
      ],
      explanation: 'Bohrs atommodell viser elektroner i skall rundt kjernen og hjelper oss å forstå atomets oppbygning.',
    },
  ],

  // Kapittel 1.5

  'naturfag-10-1-5': [
    {
      question: 'Hva står T for i TONE-prinsippet?',
      options: [
        'Troverdighet',
        'Tidspunkt',
        'Tekst',
        'Testing',
      ],
      explanation: 'T står for Troverdighet - hvem står bak informasjonen og har de kompetanse på området?',
    },
    {
      question: 'Hva er en fagfellevurdert kilde?',
      options: [
        'En artikkel vurdert av eksperter før publisering',
        'En artikkel skrevet av en journalist',
        'En bloggpost',
        'En Wikipedia-artikkel',
      ],
      explanation: 'En fagfellevurdert kilde er en artikkel som har blitt vurdert og godkjent av andre eksperter på feltet før publisering.',
    },
    {
      question: 'Hva er forskjellen mellom korrelasjon og kausalitet?',
      options: [
        'Korrelasjon = skjer samtidig, Kausalitet = årsak-virkning',
        'De betyr det samme',
        'Korrelasjon er alltid kausalitet',
        'Kausalitet er sterkere enn korrelasjon',
      ],
      explanation: 'Korrelasjon betyr at to ting skjer samtidig, mens kausalitet betyr at én ting forårsaker den andre.',
    },
    {
      question: 'Hva er pseudovitenskap?',
      options: [
        'Falsk vitenskap som ikke følger vitenskapelig metode',
        'Ekte vitenskap',
        'Eksperimenter som mislykkes',
        'Gamle vitenskapelige teorier',
      ],
      explanation: 'Pseudovitenskap er påstander som utgir seg for å være vitenskapelige, men som ikke følger vitenskapelig metode.',
    },
    {
      question: 'Hvorfor bør du være ekstra kritisk til en studie finansiert av firmaet som selger produktet?',
      options: [
        'Interessekonflikt - firmaet tjener på positive resultater',
        'Slike studier er alltid feil',
        'Det er ikke noe problem',
        'Firmaer er alltid ærlige',
      ],
      explanation: 'Fordi det er en interessekonflikt - firmaet har økonomisk interesse i at studien viser positive resultater.',
    },
    {
      question: 'Hva er et rødt flagg for feilinformasjon?',
      options: [
        'Overdrevne påstander og manglende kilder',
        'Referanser til vitenskapelige studier',
        'Nøktern og balansert fremstilling',
        'Forfatteren oppgir navn og bakgrunn',
      ],
      explanation: 'Overdrevne påstander, manglende kilder, emosjonelt ladet språk og påstander om konspirasjoner er røde flagg.',
    },
  ],

  // Kapittel 2.1

  'naturfag-10-2-1': [
    {
      question: 'Hvilken partikkel bestemmer hvilket grunnstoff et atom er?',
      options: [
        'Protoner',
        'Nøytroner',
        'Elektroner',
        'Alle tre',
      ],
      explanation: 'Antall protoner bestemmer hvilket grunnstoff et atom er. Dette kalles atomnummeret.',
    },
    {
      question: 'Hvor i atomet finner vi elektronene?',
      options: [
        'I skall rundt kjernen',
        'I kjernen',
        'Overalt i atomet',
        'Mellom protoner og nøytroner',
      ],
      explanation: 'Elektronene befinner seg i elektronskall rundt kjernen.',
    },
    {
      question: 'Hva er massetallet til et atom?',
      options: [
        'Antall protoner + antall nøytroner',
        'Bare antall protoner',
        'Bare antall elektroner',
        'Antall protoner + elektroner',
      ],
      explanation: 'Massetallet er summen av protoner og nøytroner i atomkjernen.',
    },
    {
      question: 'Hva er isotoper?',
      options: [
        'Atomer med samme antall protoner men ulikt antall nøytroner',
        'Atomer med ulikt antall protoner',
        'Det samme som ioner',
        'Atomer uten elektroner',
      ],
      explanation: 'Isotoper er atomer av samme grunnstoff med ulikt antall nøytroner.',
    },
    {
      question: 'Hva er valenselektroner?',
      options: [
        'Elektroner i ytterste skall',
        'Alle elektroner i atomet',
        'Elektroner i innerste skall',
        'Elektroner i kjernen',
      ],
      explanation: 'Valenselektroner er elektronene i det ytterste skallet, og de bestemmer hvordan atomet reagerer kjemisk.',
    },
    {
      question: 'Hvor mange elektroner kan det første skallet (K-skallet) maksimalt ha?',
      options: [
        '2 elektroner',
        '8 elektroner',
        '18 elektroner',
        '1 elektron',
      ],
      explanation: 'K-skallet (det innerste skallet) kan maksimalt ha 2 elektroner.',
    },
  ],

  // Kapittel 2.2

  'naturfag-10-2-2': [
    {
      question: 'Hva viser en periode (vannrett rad) i periodesystemet?',
      options: [
        'Antall elektronskall',
        'Antall valenselektroner',
        'Antall nøytroner',
        'Atomets masse',
      ],
      explanation: 'En periode viser antall elektronskall i atomene. Alle atomer i samme periode har like mange skall.',
    },
    {
      question: 'Hva viser en gruppe (loddrett kolønne) i periodesystemet?',
      options: [
        'Antall valenselektroner',
        'Antall protoner',
        'Antall elektronskall',
        'Atomets størrelse',
      ],
      explanation: 'En gruppe viser antall valenselektroner. Grunnstoffer i samme gruppe har like mange valenselektroner og lignende kjemiske egenskaper.',
    },
    {
      question: 'Hvor i periodesystemet finner vi metallene?',
      options: [
        'På venstre side og i midten',
        'På høyre side',
        'Øverst',
        'Nederst',
      ],
      explanation: 'Metallene finner vi på venstre side og i midten av periodesystemet.',
    },
    {
      question: 'Hva kalles grunnstoffene i gruppe 18?',
      options: [
        'Edelgasser',
        'Halogener',
        'Alkalimetaller',
        'Jordalkalimetaller',
      ],
      explanation: 'Grunnstoffene i gruppe 18 kalles edelgasser. De er svært lite reaktive fordi de har fullt ytterste skall.',
    },
    {
      question: 'Hvorfor er natrium (Na) i gruppe 1 veldig reaktivt?',
      options: [
        'Det har 1 valenselektron som det lett gir bort',
        'Det har 8 valenselektroner',
        'Det er et ikke-metall',
        'Det har mange nøytroner',
      ],
      explanation: 'Natrium har bare 1 valenselektron som det lett kan gi bort for å få fullt ytterste skall.',
    },
  ],

  // Kapittel 2.3

  'naturfag-10-2-3': [
    {
      question: 'Hva er øktettregelen?',
      options: [
        'Atomer ønsker 8 elektroner i ytterste skall',
        'Atomer har alltid 8 protoner',
        'Molekyler har alltid 8 atomer',
        'Alle stoffer har 8 elektroner',
      ],
      explanation: 'Oktettregelen sier at atomer ønsker å ha 8 elektroner i ytterste skall for å bli stabile.',
    },
    {
      question: 'Hva er et ion?',
      options: [
        'Et atom med elektrisk ladning',
        'Et nøytralt atom',
        'En type grunnstoff',
        'En kjemisk formel',
      ],
      explanation: 'Et ion er et atom som har mistet eller fått ekstra elektroner, og dermed har elektrisk ladning.',
    },
    {
      question: 'Hva er en ionebinding?',
      options: [
        'Binding mellom metall og ikke-metall ved elektronoverføring',
        'Binding der elektroner deles',
        'Binding mellom bare metaller',
        'Binding mellom to edelgasser',
      ],
      explanation: 'En ionebinding er en binding mellom et metall og et ikke-metall, der elektroner overføres fra metallet til ikke-metallet.',
    },
    {
      question: 'Hva er en kovalent binding?',
      options: [
        'Binding der atomer deler elektroner',
        'Binding der elektroner overføres',
        'Binding mellom metallioner',
        'Binding i metaller',
      ],
      explanation: 'En kovalent binding er en binding mellom to ikke-metaller der atomene deler elektroner.',
    },
    {
      question: 'Hvilken type binding finner vi i bordsalt (NaCl)?',
      options: [
        'Ionebinding',
        'Kovalent binding',
        'Metallbinding',
        'Hydrogenbinding',
      ],
      explanation: 'Bordsalt har ionebinding fordi natrium (metall) overfører et elektron til klor (ikke-metall).',
    },
    {
      question: 'Hvilken type binding finner vi i vannmolekylet (H₂O)?',
      options: [
        'Kovalent binding',
        'Ionebinding',
        'Metallbinding',
        'Ingen binding',
      ],
      explanation: 'Vann har kovalent binding fordi hydrogen og oksygen (begge ikke-metaller) deler elektroner.',
    },
  ],

  // Kapittel 2.4

  'naturfag-10-2-4': [
    {
      question: 'Hva er en kjemisk reaksjon?',
      options: [
        'En prosess der stoffer omdannes til nye stoffer',
        'Når is smelter til vann',
        'Når sukker løses i vann',
        'Når du knuser en stein',
      ],
      explanation: 'En kjemisk reaksjon er en prosess der stoffer omdannes til nye stoffer med andre egenskaper.',
    },
    {
      question: 'Hva kaller vi stoffene som reagerer i en kjemisk reaksjon?',
      options: [
        'Reaktanter',
        'Produkter',
        'Katalysatorer',
        'Ioner',
      ],
      explanation: 'Stoffene som reagerer kalles reaktanter. De står på venstre side av reaksjonspilen.',
    },
    {
      question: 'Hva er tegn på at en kjemisk reaksjon har skjedd?',
      options: [
        'Fargeendring, gassutvikling, temperaturendring',
        'Stoffet blir våtere',
        'Stoffet blir mindre',
        'Ingenting endres',
      ],
      explanation: 'Tegn på kjemisk reaksjon inkluderer fargeendring, gassutvikling, temperaturendring eller dannelse av bunnfall.',
    },
    {
      question: 'Hva er en forbrenningsreaksjon?',
      options: [
        'En reaksjon med oksygen som avgir varme og lys',
        'Når noe smelter',
        'Når noe fordamper',
        'Når noe fryser',
      ],
      explanation: 'Forbrenning er en reaksjon mellom et stoff og oksygen som avgir varme og lys.',
    },
    {
      question: 'Hva er en eksotermreaksjon?',
      options: [
        'En reaksjon som avgir varme',
        'En reaksjon som tar opp varme',
        'En reaksjon uten energiendring',
        'En eksplosjon',
      ],
      explanation: 'En eksotermreaksjon er en reaksjon som avgir energi (varme) til omgivelsene.',
    },
    {
      question: 'Hva påvirker reaksjonshastigheten?',
      options: [
        'Temperatur, konsentrasjon og overflateareal',
        'Bare temperaturen',
        'Bare fargen på stoffet',
        'Ingenting kan påvirke hastigheten',
      ],
      explanation: 'Temperatur, konsentrasjon, overflateareal og katalysatorer påvirker hvor raskt en reaksjon skjer.',
    },
  ],

  // Kapittel 2.5

  'naturfag-10-2-5': [
    {
      question: 'Hva sier loven om massebevaring?',
      options: [
        'Massen er den samme før og etter reaksjonen',
        'Massen øker i en reaksjon',
        'Massen kan forsvinne',
        'Massen halveres alltid',
      ],
      explanation: 'Loven om massebevaring sier at masse verken kan oppstå eller forsvinne i en kjemisk reaksjon.',
    },
    {
      question: 'Hvorfor må vi balansere kjemiske reaksjonslikninger?',
      options: [
        'For å ha like mange atomer på begge sider',
        'For å gjøre ligningen enklære',
        'For å øke massen',
        'For å endre atomene',
      ],
      explanation: 'Vi må balansere for å vise at antall atomer av hvert grunnstoff er likt på begge sider, som loven om massebevaring krever.',
    },
    {
      question: 'Hva er en koeffisient i en reaksjonslikning?',
      options: [
        'Tallet foran formelen som viser antall molekyler',
        'Tallet etter atomsymbolet',
        'Atomnummeret',
        'Massetallet',
      ],
      explanation: 'En koeffisient er tallet foran en kjemisk formel som viser hvor mange molekyler eller enheter av det stoffet som deltar.',
    },
    {
      question: 'Hva er balansert riktig: 2H₂ + O₂ → 2H₂O eller H₂ + O₂ → H₂O?',
      options: [
        '2H₂ + O₂ → 2H₂O',
        'H₂ + O₂ → H₂O',
        'Begge er riktige',
        'Ingen av dem',
      ],
      explanation: '2H₂ + O₂ → 2H₂O er korrekt balansert med 4 H og 2 O på begge sider.',
    },
    {
      question: 'Kan vi endre indeksene (de små tallene) i en formel når vi balanserer?',
      options: [
        'Nei, bare koeffisienter kan endres',
        'Ja, vi kan endre alt',
        'Bare i spesielle tilfeller',
        'Ja, men bare indeksene',
      ],
      explanation: 'Nei, indeksene kan ikke endres fordi de viser atomenes forhold i molekylet. Vi kan bare endre koeffisientene.',
    },
  ],

  // Kapittel 2.6

  'naturfag-10-2-6': [
    {
      question: 'Hva er en syre?',
      options: [
        'Et stoff som avgir H⁺-ioner',
        'Et stoff som tar opp H⁺-ioner',
        'Et nøytralt stoff',
        'Et stoff med høy pH',
      ],
      explanation: 'En syre er et stoff som avgir hydrogenioner (H⁺) til en løsning.',
    },
    {
      question: 'Hvilken pH har en nøytral løsning?',
      options: [
        'pH 7',
        'pH 0',
        'pH 14',
        'pH 10',
      ],
      explanation: 'En nøytral løsning har pH 7. Rent vann er et eksempel på en nøytral løsning.',
    },
    {
      question: 'Hvis en løsning har pH 3, er den sur eller basisk?',
      options: [
        'Sur',
        'Basisk',
        'Nøytral',
        'Kan ikke vite',
      ],
      explanation: 'pH under 7 betyr sur løsning. pH 3 er ganske sterkt sur.',
    },
    {
      question: 'Hva skjer ved en nøytraliseringsreaksjon?',
      options: [
        'Syre + base → salt + vann',
        'To syrer reagerer',
        'To baser reagerer',
        'Ingen reaksjon skjer',
      ],
      explanation: 'Ved nøytralisering reagerer en syre med en base og danner salt og vann.',
    },
    {
      question: 'Hvabrukes en indikator til?',
      options: [
        'Å vise om løsningen er sur eller basisk',
        'Å nøytralisere en syre',
        'Å lage salt',
        'Å øke pH',
      ],
      explanation: 'En indikator brukes til å vise om en løsning er sur, basisk eller nøytral ved å endre farge.',
    },
    {
      question: 'Hvilken farge får rød lakmus i en basisk løsning?',
      options: [
        'Blå',
        'Rød',
        'Grønn',
        'Fargeløs',
      ],
      explanation: 'Rød lakmus blir blå i en basisk løsning.',
    },
  ],

  // Kapittel 3.1

  'naturfag-10-3-1': [
    {
      question: 'Hva er energi?',
      options: [
        'Evnen til å utføre arbeid',
        'En type materie',
        'Det samme som kraft',
        'En form for bevegelse',
      ],
      explanation: 'Energi er evnen til å utføre arbeid eller forårsake endring.',
    },
    {
      question: 'Hva kalles energien et objekt har på grunn av sin bevegelse?',
      options: [
        'Kinetisk energi',
        'Potensiell energi',
        'Termisk energi',
        'Kjemisk energi',
      ],
      explanation: 'Kinetisk energi er energien et objekt har fordi det beveger seg.',
    },
    {
      question: 'Hva kalles energien et objekt har på grunn av sin posisjon eller tilstand?',
      options: [
        'Potensiell energi',
        'Kinetisk energi',
        'Elektrisk energi',
        'Lysenergi',
      ],
      explanation: 'Potensiell energi er lagret energi på grunn av posisjon eller tilstand.',
    },
    {
      question: 'Hva er SI-enheten for energi?',
      options: [
        'Joule (J)',
        'Watt (W)',
        'Newton (N)',
        'Meter (m)',
      ],
      explanation: 'Joule (J) er SI-enheten for energi.',
    },
    {
      question: 'Hvor lagres kjemisk energi?',
      options: [
        'I kjemiske bindinger mellom atomer',
        'I atomkjernen',
        'I elektronenes bevegelse',
        'I lys',
      ],
      explanation: 'Kjemisk energi er lagret i bindinger mellom atomer i molekyler.',
    },
    {
      question: 'Hvilken energiform har en ball som ligger stille på toppen av en bakke?',
      options: [
        'Potensiell energi',
        'Kinetisk energi',
        'Termisk energi',
        'Ingen energi',
      ],
      explanation: 'Ballen har potensiell energi (tyngdepotensiell energi) på grunn av sin høyde.',
    },
  ],

  // Kapittel 3.2

  'naturfag-10-3-2': [
    {
      question: 'Hva sier loven om energibevaring?',
      options: [
        'Energi kan ikke oppstå eller forsvinne',
        'Energi kan lages fra ingenting',
        'Energi forsvinner alltid',
        'Energi øker i alle prosesser',
      ],
      explanation: 'Energi kan ikke oppstå eller forsvinne, bare omdannes fra én form til en annen.',
    },
    {
      question: 'Hva er virkningsgrad?',
      options: [
        'Andelen av tilført energi som blir nyttig',
        'Hvor mye energi som tilføres',
        'Hvor mye energi som forsvinner',
        'Hastighetren på energioverføring',
      ],
      explanation: 'Virkningsgrad er forholdet mellom nyttig energi ut og tilført energi, ofte angitt i prosent.',
    },
    {
      question: 'Hva skjer med energi som ikke blir nyttig i en maskin?',
      options: [
        'Den omdannes til varme',
        'Den forsvinner',
        'Den blir lagret',
        'Den sendes tilbake',
      ],
      explanation: 'Den omdannes vanligvis til varme på grunn av friksjon og andre tap.',
    },
    {
      question: 'Hvahar høyest virkningsgrad: glødelampe eller LED-pære?',
      options: [
        'LED-pære',
        'Glødelampe',
        'De er like',
        'Avhenger av størrelsen',
      ],
      explanation: 'LED-pære har mye høyere virkningsgrad (ca. 50-80%) enn glødelampe (ca. 5%).',
    },
    {
      question: 'Hva er en energikjede?',
      options: [
        'En oversikt over hvordan energi omdannes trinn for trinn',
        'En kjede av batterier',
        'En type strømkabel',
        'En måte å måle energi på',
      ],
      explanation: 'En energikjede viser hvordan energi omdannes fra én form til en annen gjennom flere trinn.',
    },
  ],

  // Kapittel 3.3

  'naturfag-10-3-3': [
    {
      question: 'Hva er elektrisk strøm?',
      options: [
        'Bevegelse av elektriske ladninger',
        'Stillestående elektroner',
        'En type magnetisme',
        'Varmeoverføring',
      ],
      explanation: 'Elektrisk strøm er bevegelse av elektriske ladninger (elektroner) gjennom en leder.',
    },
    {
      question: 'Hva er enheten for elektrisk spenning?',
      options: [
        'Volt (V)',
        'Ampere (A)',
        'Ohm (Ω)',
        'Watt (W)',
      ],
      explanation: 'Spenning måles i volt (V).',
    },
    {
      question: 'Hva sier Ohms lov?',
      options: [
        'U = R × I (spenning = motstand × strøm)',
        'U = R / I',
        'I = U × R',
        'R = U × I',
      ],
      explanation: 'Ohms lov sier at U = R × I, altså spenning = motstand × strøm.',
    },
    {
      question: 'Hva skjer med strømmen i en seriekobling hvis én komponent svikter?',
      options: [
        'Strømmen stopper i hele kretsen',
        'Bare den komponenten slutter å virke',
        'Strømmen øker',
        'Ingenting skjer',
      ],
      explanation: 'I seriekobling går strømmen gjennom alle komponenter, så hvis én svikter, stopper strømmen i hele kretsen.',
    },
    {
      question: 'Hva er forskjellen mellom seriekobling og parallellkobling?',
      options: [
        'Serie = etter hverandre, Parallell = strømmen deler seg',
        'De er det samme',
        'Parallell = etter hverandre',
        'Serie har høyere spenning',
      ],
      explanation: 'I seriekobling går strømmen gjennom alle komponenter etter hverandre. I parallellkobling deler strømmen seg.',
    },
    {
      question: 'Hva er en sikrings oppgave?',
      options: [
        'Å bryte strømmen ved overbelastning',
        'Å øke strømmen',
        'Å lagre energi',
        'Å måle spenning',
      ],
      explanation: 'En sikring bryter strømmen hvis den blir for høy, for å forhindre brann og skade.',
    },
  ],

  // Kapittel 3.4

  'naturfag-10-3-4': [
    {
      question: 'Hva overfører en bølge?',
      options: [
        'Energi',
        'Materie',
        'Masse',
        'Atomer',
      ],
      explanation: 'En bølge overfører energi fra ett sted til et annet uten å flytte selve stoffet.',
    },
    {
      question: 'Hva er bølgelengde?',
      options: [
        'Avstanden mellom to bølgetopper',
        'Høyden på bølgen',
        'Antall svingninger per sekund',
        'Hastigheten til bølgen',
      ],
      explanation: 'Bølgelengde er avstanden mellom to topper (eller to bunner) i en bølge.',
    },
    {
      question: 'Hvilken type stråling har høyest energi?',
      options: [
        'Gammastråler',
        'Radiobølger',
        'Synlig lys',
        'Infrarød stråling',
      ],
      explanation: 'Gammastråler har kortest bølgelengde og høyest energi i det elektromagnetiske spekteret.',
    },
    {
      question: 'Hva er ioniserende stråling?',
      options: [
        'Stråling som kan skade DNA ved å rive elektroner fra atomer',
        'All elektromagnetisk stråling',
        'Bare synlig lys',
        'Stråling som bare gir varme',
      ],
      explanation: 'Ioniserende stråling har nok energi til å rive elektroner fra atomer og kan skade DNA.',
    },
    {
      question: 'Hva skjer ved lysbrytning?',
      options: [
        'Lyset bøyer av når det går mellom to medier',
        'Lyset stopper helt',
        'Lyset går raskere',
        'Lyset blir til varme',
      ],
      explanation: 'Ved lysbrytning bøyer lyset av når det går fra ett medium til et annet fordi hastigheten endres.',
    },
    {
      question: 'Hvorfor kan ikke lyd bevege seg i vakuum?',
      options: [
        'Fordi lyd trenger et medium å bevege seg gjennom',
        'Fordi det er for kaldt',
        'Fordi lyden går for sakte',
        'Fordi vakuum absorberer lyd',
      ],
      explanation: 'Lyd er mekaniske bølger som trenger et medium (stoff) å bevege seg gjennom. I vakuum er det ingen partikler.',
    },
  ],

  // Kapittel 3.5

  'naturfag-10-3-5': [
    {
      question: 'Hva er en fornybar energikilde?',
      options: [
        'En energikilde som fornyes naturlig og ikke tar slutt',
        'En energikilde som er billig',
        'En energikilde fra utlandet',
        'En energikilde som gir mye kraft',
      ],
      explanation: 'En fornybar energikilde fornyes naturlig og tar ikke slutt, som sol, vind og vann.',
    },
    {
      question: 'Hvilken av disse er IKKE en fornybar energikilde?',
      options: [
        'Naturgass',
        'Solenergi',
        'Vindkraft',
        'Vannkraft',
      ],
      explanation: 'Naturgass er et fossilt brennstoff som tar millioner av år å danne og vil ta slutt.',
    },
    {
      question: 'Hvilken energikilde brukes mest i Norge?',
      options: [
        'Vannkraft',
        'Kullkraft',
        'Atomkraft',
        'Vindkraft',
      ],
      explanation: 'Vannkraft står for nesten all elektrisitetsproduksjon i Norge på grunn av mye nedbør og fjell.',
    },
    {
      question: 'Hvorfor er fossile brennstoff dårlig for miljøet?',
      options: [
        'De slipper ut CO₂ som forårsaker global oppvarming',
        'De er for dyre',
        'De er for effektive',
        'De lager for lite energi',
      ],
      explanation: 'Forbrenning av fossile brennstoff frigjør CO₂ som bidrar til global oppvarming.',
    },
    {
      question: 'Hva er en ulempe med vindkraft?',
      options: [
        'Ustabil produksjon - avhengig av vinden',
        'Store CO₂-utslipp',
        'Tar slutt snart',
        'Fungerer bare om natten',
      ],
      explanation: 'Vindkraft produserer bare energi når det blåser, noe som gjør den ustabil.',
    },
  ],

  // Kapittel 3.6

  'naturfag-10-3-6': [
    {
      question: 'Hva er forskjellen mellom vær og klima?',
      options: [
        'Vær er kortsiktig, klima er gjennomsnittet over lang tid',
        'Vær og klima er det samme',
        'Klima er bare i tropene',
        'Vær gjelder bare om sommeren',
      ],
      explanation: 'Vær er forholdene her og nå (timer/dager), mens klima er gjennomsnittet av været over 30+ år.',
    },
    {
      question: 'Hva er drivhuseffekten?',
      options: [
        'Gasser i atmosfæren holder på varme fra solen',
        'Solen blir varmere',
        'Havet varmes opp av vulkaner',
        'Skyer reflekterer lys',
      ],
      explanation: 'Drivhuseffekten er når gasser i atmosfæren holder på varme og gjør jorden varmere.',
    },
    {
      question: 'Hvilken gass er den viktigste menneskeskapte drivhusgassen?',
      options: [
        'Karbondioksid (CO₂)',
        'Oksygen',
        'Nitrogen',
        'Helium',
      ],
      explanation: 'Karbondioksid (CO₂) er den viktigste menneskeskapte drivhusgassen, hovedsakelig fra fossile brennstoff.',
    },
    {
      question: 'Hva er den forsterkede drivhuseffekten?',
      options: [
        'Økt oppvarming pga. mer drivhusgasser fra mennesker',
        'Den naturlige drivhuseffekten',
        'Solen som blir sterkere',
        'Vulkansk aktivitet',
      ],
      explanation: 'Den forsterkede drivhuseffekten er økt oppvarming på grunn av økte mengder drivhusgasser fra menneskelig aktivitet.',
    },
    {
      question: 'Hva er en tilbakekoblingsmekanisme i klimasystemet?',
      options: [
        'Når en endring forsterker eller demper seg selv',
        'Når temperaturen aldri endrer seg',
        'Bare negativ påvirkning',
        'Bare positiv påvirkning',
      ],
      explanation: 'En tilbakekoblingsmekanisme er når en endring forsterker (positiv) eller demper (negativ) seg selv.',
    },
    {
      question: 'Hvorfor smelter isen ved polene på grunn av global oppvarming?',
      options: [
        'Høyere temperaturer smelter isen',
        'Isen beveger seg til varmere områder',
        'Havet skyller bort isen',
        'Det snør mindre',
      ],
      explanation: 'Høyere temperaturer får isen til å smelte. Når isen smelter, reflekteres mindre sollys, og det blir enda varmere (positiv tilbakekobling).',
    },
  ],

  // Kapittel 4.1

  'naturfag-10-4-1': [
    {
      question: 'Hva er forskjellen mellom prokaryote og eukaryote celler?',
      options: [
        'Eukaryote har cellekjerne, prokaryote mangler den',
        'Prokaryote er større',
        'De er identiske',
        'Eukaryote mangler DNA',
      ],
      explanation: 'Prokaryote celler mangler cellekjerne, mens eukaryote celler har cellekjerne som inneholder DNA.',
    },
    {
      question: 'Hva er mitokondriens hovedfunksjon?',
      options: [
        'Produsere energi (ATP)',
        'Lagre DNA',
        'Produsere proteiner',
        'Fordøye avfall',
      ],
      explanation: 'Mitokondrier kalles cellens kraftverk fordi de produserer energi (ATP) gjennom celleånding.',
    },
    {
      question: 'Hva kjennetegner planteceller som dyreceller IKKE har?',
      options: [
        'Cellevegg, kloroplaster og stor vakuole',
        'Cellekjerne',
        'Mitokondrier',
        'Cellemembran',
      ],
      explanation: 'Planteceller har cellevegg, kloroplaster (for fotosyntese) og stor vakuole som dyreceller mangler.',
    },
    {
      question: 'Hvor i cellen finner vi DNA?',
      options: [
        'I cellekjernen',
        'I ribosomene',
        'I cellemembranen',
        'I Golgiapparatet',
      ],
      explanation: 'I eukaryote celler finner vi mesteparten av DNA i cellekjernen.',
    },
    {
      question: 'Hva er ribosomenes funksjon?',
      options: [
        'Produsere proteiner',
        'Produsere energi',
        'Lagre vann',
        'Bryte ned avfall',
      ],
      explanation: 'Ribosomer produserer proteiner basert på instruksjoner fra DNA.',
    },
    {
      question: 'Hva gjør kloroplastene?',
      options: [
        'Utfører fotosyntese',
        'Produserer energi',
        'Lagrer DNA',
        'Bryter ned avfall',
      ],
      explanation: 'Kloroplaster utfører fotosyntese - de bruker sollys til å lage glukose av CO₂ og vann.',
    },
  ],

  // Kapittel 4.2

  'naturfag-10-4-2': [
    {
      question: 'Hva er fotosyntese?',
      options: [
        'Planter lager sukker ved hjelp av sollys',
        'Planter puster',
        'Dyr lager mat',
        'Celler deler seg',
      ],
      explanation: 'Fotosyntese er prosessen der planter lager glukose fra karbondioksid og vann ved hjelp av lysenergi.',
    },
    {
      question: 'Hva er produktene av fotosyntese?',
      options: [
        'Glukose og oksygen',
        'Karbondioksid og vann',
        'ATP og varme',
        'Proteiner og fett',
      ],
      explanation: 'Fotosyntese produserer glukose (C₆H₁₂O₆) og oksygen (O₂).',
    },
    {
      question: 'Hva er celleånding?',
      options: [
        'Nedbrytning av glukose for å frigjøre energi',
        'Produksjon av glukose',
        'Pusting inn og ut',
        'Celledeling',
      ],
      explanation: 'Celleånding er prosessen der celler bryter ned glukose med oksygen for å frigjøre energi (ATP).',
    },
    {
      question: 'Hvor i cellen skjer celleåndingen?',
      options: [
        'I mitokondriene',
        'I cellekjernen',
        'I kloroplastene',
        'I cellemembranen',
      ],
      explanation: 'Celleånding skjer hovedsakelig i mitokondriene.',
    },
    {
      question: 'Hvorfor kalles fotosyntese og celleånding motsatte prosesser?',
      options: [
        'Produktene fra den ene er råvårene for den andre',
        'De skjer på samme tid',
        'De bruker samme organeller',
        'De produserer samme stoffer',
      ],
      explanation: 'Produktene fra fotosyntese (glukose, O₂) er råvårene for celleånding, og omvendt.',
    },
    {
      question: 'Hva er hovedproduktet av celleånding som cellene bruker til arbeid?',
      options: [
        'ATP',
        'Glukose',
        'Karbondioksid',
        'Oksygen',
      ],
      explanation: 'ATP (adenosintrifosfat) er energimolekylet som cellene bruker til alt arbeid.',
    },
  ],

  // Kapittel 4.3

  'naturfag-10-4-3': [
    {
      question: 'Hva er DNA?',
      options: [
        'Molekylet som inneholder den genetiske koden',
        'En type protein',
        'En energikilde',
        'En celledel',
      ],
      explanation: 'DNA er et molekyl som inneholder den genetiske informasjonen (oppskriften) for alle egenskaper i en organisme.',
    },
    {
      question: 'Hva er et gen?',
      options: [
        'En del av DNA som koder for en egenskap',
        'Et helt kromosom',
        'En celle',
        'En mutasjon',
      ],
      explanation: 'Et gen er en del av DNA som inneholder oppskriften for ett bestemt protein eller egenskap.',
    },
    {
      question: 'Hva er en mutasjon?',
      options: [
        'En varig endring i DNA',
        'En normal celledeling',
        'Fotosyntese',
        'Celleånding',
      ],
      explanation: 'En mutasjon er en varig endring i DNA-sekvensen som kan føre til nye egenskaper.',
    },
    {
      question: 'Hva er naturlig utvalg?',
      options: [
        'De best tilpassede individene overlever og formerer seg mest',
        'Mennesker velger hvilke dyr som skal leve',
        'Alle individer overlever like godt',
        'Tilfeldige individer dør',
      ],
      explanation: 'Naturlig utvalg er prosessen der individer med egenskaper som gir overlevelsesfordel får flere avkom.',
    },
    {
      question: 'Hva er evolusjon?',
      options: [
        'Endring i arter over mange generasjoner',
        'Et individ som endrer seg i løpet av livet',
        'Rask endring på noen dager',
        'Bare fossildannelse',
      ],
      explanation: 'Evolusjon er endring i arvestoffet i en populasjon over mange generasjoner.',
    },
    {
      question: 'Hvor mange kromosomer har mennesker i hver celle?',
      options: [
        '46 kromosomer',
        '23 kromosomer',
        '92 kromosomer',
        '12 kromosomer',
      ],
      explanation: 'Mennesker har 46 kromosomer (23 par) i hver kroppscelle.',
    },
  ],

  // Kapittel 4.4

  'naturfag-10-4-4': [
    {
      question: 'Hva er et økosystem?',
      options: [
        'Et område der levende organismer samhandler med miljøet',
        'Bare plantene i et område',
        'Bare dyrene i et område',
        'Et laboratorium',
      ],
      explanation: 'Et økosystem er et område der levende organismer samhandler med hverandre og det ikke-levende miljøet.',
    },
    {
      question: 'Hva er biotiske faktorer?',
      options: [
        'Alle levende organismer',
        'Temperatur og lys',
        'Vann og jord',
        'Vind og nedbør',
      ],
      explanation: 'Biotiske faktorer er alle levende organismer i et økosystem (planter, dyr, sopp, bakterier).',
    },
    {
      question: 'Hva starter en næringskjede?',
      options: [
        'Produsenter (planter)',
        'Rovdyr',
        'Nedbrytere',
        'Forbrukere',
      ],
      explanation: 'Produsenter (planter/alger) starter næringskjeden fordi de lager energi fra sollys.',
    },
    {
      question: 'Hva kalles 10%-regelen?',
      options: [
        'Bare 10% av energien går videre til neste trofiske nivå',
        '10% av maten spises',
        '10% av dyrene overlever',
        '10% av plantene vokser',
      ],
      explanation: 'Bare ca. 10% av energien overføres til neste nivå i næringskjeden. Resten blir til varme.',
    },
    {
      question: 'Hva er nedbryternes rolle?',
      options: [
        'Bryte ned dødt materiale og resirkulære næringsstoffer',
        'Spise planter',
        'Lage energi fra sollys',
        'Jakte på dyr',
      ],
      explanation: 'Nedbrytere (bakterier og sopp) bryter ned dødt organisk materiale og returnerer næringsstoffer til jorda.',
    },
  ],

  // Kapittel 4.5

  'naturfag-10-4-5': [
    {
      question: 'Hva er biologisk mangfold?',
      options: [
        'Variasjonen av alt liv på jorden',
        'Antall mennesker',
        'Kun antall plantearter',
        'Størrelsen på dyr',
      ],
      explanation: 'Biologisk mangfold (biodiversitet) er variasjonen av alt liv på jorden - gener, arter og økosystemer.',
    },
    {
      question: 'Hva er genetisk mangfold?',
      options: [
        'Variasjon i gener innenfor en art',
        'Antall arter',
        'Antall økosystemer',
        'Størrelsen på arter',
      ],
      explanation: 'Genetisk mangfold er variasjonen i gener innenfor en art, f.eks. ulike hunderaser.',
    },
    {
      question: 'Hva er den største trusselen mot biologisk mangfold?',
      options: [
        'Ødeleggelse av leveområder',
        'For mange arter',
        'For lite sollys',
        'For mye vann',
      ],
      explanation: 'Ødeleggelse av habitater (leveområder) er den største trusselen, sammen med klimaendringer og forurensning.',
    },
    {
      question: 'Hvorfor er biologisk mangfold viktig?',
      options: [
        'Det gir oss mat, medisin og holder naturen i balanse',
        'Det ser pent ut',
        'Det er ikke viktig',
        'Bare for forskere',
      ],
      explanation: 'Biologisk mangfold gir oss mat, medisin, renser luft og vann, og holder økosystemer stabile.',
    },
    {
      question: 'Hva er en truet art?',
      options: [
        'En art i fare for utryddelse',
        'En farlig art',
        'En vanlig art',
        'En ny art',
      ],
      explanation: 'En truet art er en art som står i fare for å bli utryddet på grunn av lav populasjon eller habitattap.',
    },
  ],

  // Kapittel 4.6

  'naturfag-10-4-6': [
    {
      question: 'Hvilket av jordens lag er flytende metall og skaper jordens magnetfelt?',
      options: [
        'Ytre kjerne',
        'Indre kjerne',
        'Kappen',
        'Skorpen',
      ],
      explanation: 'Den ytre kjernen er flytende metall (jern og nikkel). Bevegelsen i dette flytende metallet skaper jordens magnetfelt.',
    },
    {
      question: 'Hva er platetektonikk?',
      options: [
        'Teorien om at jordens litosfære er delt i plater som beveger seg',
        'Studiet av jordskjelv',
        'Teorien om vulkanutbrudd',
        'Studiet av jordens kjerne',
      ],
      explanation: 'Platetektonikk er teorien om at jordens litosfære (skorpe + øverste del av kappen) er delt i store plater som beveger seg sakte på astenosfæren.',
    },
    {
      question: 'Hvor raskt beveger tektoniske plater seg?',
      options: [
        '1-10 cm per år',
        '1-10 meter per år',
        '1-10 km per år',
        'De beveger seg ikke',
      ],
      explanation: 'Tektoniske plater beveger seg 1-10 cm per år. Dette er omtrent like raskt som neglene dine vokser.',
    },
    {
      question: 'Hva driver platebevegelsene?',
      options: [
        'Konveksjonsstrømmer i kappen',
        'Tyngdekraften fra månen',
        'Jordens rotasjon',
        'Vinden på overflaten',
      ],
      explanation: 'Konveksjonsstrømmer i kappen driver platebevegelsene. Varme fra jordens kjerne får fjell i kappen til å stige, avkjøles og synke, og dette drar med seg platene.',
    },
    {
      question: 'Hva skjer ved en divergerende plategrense?',
      options: [
        'Platene beveger seg fra hverandre og ny havbunn dannes',
        'Platene kolliderer og danner fjellkjeder',
        'Platene glir langs hverandre',
        'Platene smelter sammen',
      ],
      explanation: 'Ved en divergerende plategrense beveger platene seg fra hverandre. Ny havbunn dannes når magma stiger opp, og det dannes midthavsrygger.',
    },
    {
      question: 'Hva kalles det når en tyngre havplate dykker under en lettere kontinentalplate?',
      options: [
        'Subduksjon',
        'Kollisjon',
        'Divergens',
        'Transform',
      ],
      explanation: 'Når en tyngre havplate dykker under en lettere kontinentalplate, kalles det subduksjon. Dette skaper vulkaner og dype havgraver.',
    },
    {
      question: 'Hva var Pangea?',
      options: [
        'Et superkontinent der alle kontinentene var samlet',
        'Den første vulkanen på jorden',
        'Et hav mellom kontinentene',
        'Den første fjellkjeden',
      ],
      explanation: 'Pangea var et superkontinent der alle kontinentene var samlet til én landmasse. Det eksisterte for ca. 200-300 millioner år siden, før det begynte å brytes opp.',
    },
  ],

  // Kapittel 5.1

  'naturfag-10-5-1': [
    {
      question: 'Hvilke to deler utgjør sentralnervesystemet (CNS)?',
      options: [
        'Hjerne og ryggmarg',
        'Hjerne og nerver',
        'Ryggmarg og muskler',
        'Nerver og sanser',
      ],
      explanation: 'Sentralnervesystemet består av hjernen og ryggmargen. Disse ligger sentralt i kroppen og er beskyttet av skjelettet.',
    },
    {
      question: 'Hva er hovedoppgaven til dendritter i en nervecelle?',
      options: [
        'Motta signaler fra andre nerveceller',
        'Sende signaler til andre celler',
        'Produsere energi',
        'Lagre informasjon',
      ],
      explanation: 'Dendritter er korte, forgrenede utløpere som mottar signaler fra andre nerveceller. De fungerer som "antenner" for nervecellen.',
    },
    {
      question: 'Hva kalles den lange utløperen fra nervecellen som sender signaler videre?',
      options: [
        'Akson',
        'Dendritt',
        'Synapse',
        'Cellekropp',
      ],
      explanation: 'Aksonet (nervefiberen) er en lang, tynn utløper som sender signaler videre til andre celler. Det kan være opptil 1 meter langt.',
    },
    {
      question: 'Hva er en synapse?',
      options: [
        'Forbindelsespunkt mellom nerveceller',
        'En type nervecelle',
        'En del av hjernen',
        'En type hormon',
      ],
      explanation: 'En synapse er et forbindelsespunkt mellom to nerveceller der signaler overføres fra én celle til neste. Her frigjøres signalstoffer (nevrotransmittere).',
    },
    {
      question: 'Hva er en refleks?',
      options: [
        'En automatisk reaksjon som ikke går via hjernen',
        'En bevisst bevegelse',
        'En type nervecelle',
        'En sansereaksjon i hjernen',
      ],
      explanation: 'En refleks er en automatisk, rask reaksjon på en stimulus som ikke går via hjernen. Signalet går direkte gjennom ryggmargen, noe som sparer tid.',
    },
    {
      question: 'Hvilken type nevroner sender signaler fra sanseorganer til hjernen?',
      options: [
        'Sanseneuroner',
        'Motorneuroner',
        'Mellomnevroner',
        'Glia-celler',
      ],
      explanation: 'Sanseneuroner (sensoriske nevroner) mottar informasjon fra sanseorganer og sender signaler til sentralnervesystemet.',
    },
  ],

  // Kapittel 5.2

  'naturfag-10-5-2': [
    {
      question: 'Hvordan transporteres hormoner i kroppen?',
      options: [
        'I blodet',
        'Gjennom nervene',
        'I lymfesystemet',
        'Direkte fra celle til celle',
      ],
      explanation: 'Hormoner transporteres i blodet. De produseres i endokrine kjertler og sendes ut i blodbanen, som frakter dem til målceller i hele kroppen.',
    },
    {
      question: 'Hva er hovedforskjellen mellom nerve- og hormonsystemet når det gjelder hastighet?',
      options: [
        'Nervesystemet er raskt, hormonsystemet er langsommere',
        'De er like raske',
        'Hormonsystemet er raskere',
        'Begge tar flere dager',
      ],
      explanation: 'Nervesystemet er raskt (millisekunder) og gir korttidsvirkning, mens hormonsystemet er langsommere (sekunder til timer) men gir langvarig effekt.',
    },
    {
      question: 'Hva er en endokrin kjertel?',
      options: [
        'En kjertel som produserer hormoner og sender dem i blodet',
        'En kjertel som produserer svette',
        'En nerve i hjernen',
        'En del av fordøyelsessystemet',
      ],
      explanation: 'En endokrin kjertel er en kjertel som produserer hormoner og sender dem direkte ut i blodet. De har ingen utførselsganger.',
    },
    {
      question: 'Hva gjør insulin i kroppen?',
      options: [
        'Senker blodsukkeret',
        'Øker blodsukkeret',
        'Styrer veksten',
        'Kontrollærer søvn',
      ],
      explanation: 'Insulin senker blodsukkeret ved å få celler til å ta opp glukose fra blodet. Det produseres i bukspyttkjertelen (pankreas).',
    },
    {
      question: 'Hva er negativ tilbakekobling?',
      options: [
        'En mekanisme der høy konsentrasjon bremser produksjonen',
        'En mekanisme som øker hormonproduksjonen',
        'En sykdom i hormonsystemet',
        'En type hormon',
      ],
      explanation: 'Negativ tilbakekobling er en reguleringsmekanisme der høy konsentrasjon av et stoff bremser produksjonen av det samme stoffet, for å opprettholde balanse.',
    },
    {
      question: 'Hva kjennetegner diabetes type 2?',
      options: [
        'Cellene reagerer dårlig på insulin',
        'Kroppen produserer ikke insulin',
        'Det oppstår alltid i barndømmen',
        'Det skyldes virus',
      ],
      explanation: 'Ved diabetes type 2 produserer kroppen insulin, men cellene reagerer dårligere på det (insulinresistens). Det utvikles ofte i voksen alder og er knyttet til livsstil.',
    },
  ],

  // Kapittel 5.3

  'naturfag-10-5-3': [
    {
      question: 'Hva er kroppens første forsvarslinje mot sykdom?',
      options: [
        'Fysiske og kjemiske barrierer som hud og slimhinner',
        'Hvite blodceller',
        'Antistoffer',
        'Vaksiner',
      ],
      explanation: 'Første forsvarslinje består av fysiske og kjemiske barrierer som hindrer mikroorganismer i å komme inn i kroppen. Eksempler er hud, slimhinner, tårer og magesyre.',
    },
    {
      question: 'Hva er forskjellen mellom medfødt og spesifikk immunitet?',
      options: [
        'Medfødt er uspecifikt, spesifikk gjenkjenner bestemte inntrengere',
        'De er like',
        'Medfødt er sterkere',
        'Spesifikk er raskere',
      ],
      explanation: 'Medfødt immunitet er uspecifikt og reagerer likt på alle inntrengere. Spesifikk immunitet lærer å gjenkjenne spesifikke sykdomsfremkallende organismer og gir immunologisk hukommelse.',
    },
    {
      question: 'Hva gjør B-celler i immunforsvåret?',
      options: [
        'Produserer antistoffer',
        'Spiser bakterier',
        'Lager feber',
        'Bygger opp huden',
      ],
      explanation: 'B-celler produserer antistoffer som binder seg til og nøytraliserer sykdomsfremkallende organismer. De er en viktig del av den spesifikke immuniteten.',
    },
    {
      question: 'Hvordan virker en vaksine?',
      options: [
        'Lærer immunforsvåret å gjenkjenne sykdømmen uten at du blir syk',
        'Dreper bakterier direkte',
        'Styrker huden',
        'Renser blodet',
      ],
      explanation: 'En vaksine inneholder svekkede eller drepte mikroorganismer, eller deler av dem. Dette lærer immunforsvåret å kjenne igjen sykdømmen uten at du blir syk, slik at kroppen kan reagere raskt ved senere smitte.',
    },
    {
      question: 'Hva er flokkimmunitet?',
      options: [
        'Når mange nok er immune til at sykdømmen ikke kan spre seg',
        'Immunitet hos dyr',
        'En type vaksine',
        'Motstand mot alle sykdømmer',
      ],
      explanation: 'Flokkimmunitet oppstår når så mange i befolkningen er immune at sykdømmen ikke kan spre seg effektivt. Dette beskytter også de som ikke kan vaksineres.',
    },
    {
      question: 'Hva er antibiotikaresistens?',
      options: [
        'Bakterier som har blitt motstandsdyktige mot antibiotika',
        'Allergi mot antibiotika',
        'En type vaksine',
        'Immunitet mot virus',
      ],
      explanation: 'Antibiotikaresistens oppstår når bakterier utvikler motstand mot antibiotika, slik at medisinene ikke lenger virker. Dette er et voksende globalt helseproblem.',
    },
  ],

  // Kapittel 5.4

  'naturfag-10-5-4': [
    {
      question: 'Hva er pubertet?',
      options: [
        'Perioden hvor kroppen utvikler seg fra barn til voksen',
        'Første leveår',
        'Perioden etter 60 år',
        'En type sykdom',
      ],
      explanation: 'Pubertet er perioden hvor kroppen utvikler seg fra barn til voksen og blir kjønnsmoden (i stand til å reprodusere seg).',
    },
    {
      question: 'Hva skjer ved eggløsning?',
      options: [
        'Et modent egg frigjøres fra eggstokken',
        'Menstruasjonen starter',
        'Graviditeten begynner',
        'Livmoren støter ut slimhinnen',
      ],
      explanation: 'Ved eggløsning frigjøres et modent egg fra eggstokken. Egget vandrer ned i egglederen og kan befruktes i løpet av 12-24 timer.',
    },
    {
      question: 'Hvor skjer befruktningen normalt?',
      options: [
        'I egglederen',
        'I livmoren',
        'I eggstokken',
        'I skjeden',
      ],
      explanation: 'Befruktningen skjer normalt i egglederen, når en sædcelle smelter sammen med eggcellen. Den befruktede eggcellen vandrer deretter ned til livmoren.',
    },
    {
      question: 'Hva er hovedformålet med prevensjon?',
      options: [
        'Hindre uønsket graviditet',
        'Øke sjansen for graviditet',
        'Behandle sykdømmer',
        'Styrke immunforsvåret',
      ],
      explanation: 'Prevensjon er midler og metoder for å hindre uønsket graviditet. Kondom beskytter også mot seksuelt overførbare infeksjoner (SOI).',
    },
    {
      question: 'Hva er en seksuelt overførbar infeksjon (SOI)?',
      options: [
        'Infeksjon som smitter gjennom seksuell kontakt',
        'Infeksjon fra mat',
        'Allergi mot prevensjon',
        'Sykdom fra kulde',
      ],
      explanation: 'En SOI er en infeksjon som smitter gjennom seksuell kontakt. Eksempler er klamydia, gonoré, syfilis, herpes, HPV og HIV.',
    },
    {
      question: 'Hva betyr samtykke i seksuell sammenheng?',
      options: [
        'At begge parter frivillig og klært sier ja',
        'At man er gift',
        'At man er over 18 år',
        'At man ikke protesterer',
      ],
      explanation: 'Samtykke betyr at begge parter frivillig og klært sier ja til seksuell aktivitet. Samtykke kan trekkes tilbake når som helst, og man må være edru og våken for å gi samtykke.',
    },
  ],

  // Kapittel 5.5

  'naturfag-10-5-5': [
    {
      question: 'Hvilket næringsstoff gir mest energi per gram?',
      options: [
        'Fett',
        'Karbohydrater',
        'Proteiner',
        'Vitaminer',
      ],
      explanation: 'Fett gir mest energi per gram (38 kJ), mens karbohydrater og proteiner gir 17 kJ per gram hver.',
    },
    {
      question: 'Hva er energibalanse?',
      options: [
        'Forholdet mellom energi inn og energi ut',
        'Mengden fett i kroppen',
        'Blodsukkernivået',
        'Antall kalorier i maten',
      ],
      explanation: 'Energibalanse er forholdet mellom energi inn (mat og drikke) og energi ut (grunnforbrenning og fysisk aktivitet). Ved balanse er vekten stabil.',
    },
    {
      question: 'Hva er en anbefalt mengde fysisk aktivitet for ungdom?',
      options: [
        'Minst 60 minutter daglig',
        '15 minutter daglig',
        'En gang i uken',
        '30 minutter per uke',
      ],
      explanation: 'Helsedirektoratet anbefaler minst 60 minutter moderat til høy fysisk aktivitet daglig for barn og ungdom.',
    },
    {
      question: 'Hva er en livsstilssykdom?',
      options: [
        'Sykdom som skyldes levemåte',
        'Sykdom fra bakterier',
        'Arvelig sykdom',
        'Sykdom fra miljøgifter',
      ],
      explanation: 'En livsstilssykdom er en sykdom som i stor grad skyldes levemåte (kosthold, aktivitet, rus). Eksempler er hjerte-karsykdømmer, type 2-diabetes og noen krefttyper.',
    },
    {
      question: 'Hvor mye søvn anbefales for ungdom?',
      options: [
        '8-10 timer per natt',
        '4-5 timer per natt',
        '12-14 timer per natt',
        'Så mye man vil',
      ],
      explanation: 'Ungdom anbefales 8-10 timer søvn per natt. Søvn er viktig for fysisk og mental helse, læring og hukommelse.',
    },
    {
      question: 'Hva er den vanligste helseskaden fra tobakk?',
      options: [
        'Lungekreft og hjerte-karsykdømmer',
        'Kun hoste',
        'Bare avhengighet',
        'Ingen alvorlige helseskader',
      ],
      explanation: 'Tobakk øker risikoen for lungekreft, hjerte-karsykdømmer og KOLS (kronisk obstruktiv lungesykdom). Nikotin gir avhengighet.',
    },
  ],

  // Kapittel 6.1

  'naturfag-10-6-1': [
    {
      question: 'Hva er de tre hoveddelene i et teknologisk system?',
      options: [
        'Input, prosess og output',
        'Sender, mottaker og signal',
        'Hardware, software og nettverk',
        'Start, midten og slutt',
      ],
      explanation: 'De tre hoveddelene er input (inndata), prosess (behandling) og output (utdata). Dette gjelder for alle teknologiske systemer.',
    },
    {
      question: 'I en sender-mottaker-modell, hva er funksjonen til en sender?',
      options: [
        'Konvertere informasjon til et signal som kan sendes',
        'Motta og tolke signaler',
        'Lagre data',
        'Behandle informasjon',
      ],
      explanation: 'Senderen konverterer informasjon til et signal som kan overføres. Eksempler er fjernkontrollen som sender infrarøde signaler eller en mobiltelefon som sender radiosignaler.',
    },
    {
      question: 'Hva står IoT for?',
      options: [
        'Internet of Things (tingenes internett)',
        'Input-Output Technology',
        'International Online Transfer',
        'Information on Technology',
      ],
      explanation: 'IoT står for "Internet of Things" (tingenes internett). Det beskriver nettverk av fysiske enheter som kan kommunisere med hverandre via internett.',
    },
    {
      question: 'Hva er en sensor i et teknologisk system?',
      options: [
        'En komponent som registrerer fysiske forhold',
        'En type prosessor',
        'En skjerm',
        'En type batteri',
      ],
      explanation: 'En sensor er en komponent som registrerer fysiske forhold (som temperatur, lys, bevegelse) og konverterer dette til elektriske signaler som systemet kan behandle.',
    },
    {
      question: 'Hva er en viktig utfordring med IoT-enheter?',
      options: [
        'Sikkerhet og personvern',
        'De bruker for lite strøm',
        'De er for billige',
        'De er for små',
      ],
      explanation: 'Sikkerhet og personvern er viktige utfordringer med IoT. Enheter kan hackes, samle inn persondata, og utgjøre sikkerhetsrisiko hvis de ikke er godt beskyttet.',
    },
  ],

  // Kapittel 6.3

  'naturfag-10-6-3': [
    {
      question: 'Hva er en variabel i programmering?',
      options: [
        'En navngitt lagringsplass for verdier',
        'En matematisk formel',
        'En type datamaskin',
        'En fil på harddisken',
      ],
      explanation: 'En variabel er en navngitt "boks" som lagrer en verdi (tall, tekst, osv.). Du kan gi den et navn og bruke verdien senere i programmet.',
    },
    {
      question: 'Hva gjør en løkke i programmering?',
      options: [
        'Gjentar en handling flere ganger',
        'Lagrer tall',
        'Sletter filer',
        'Tegner grafer',
      ],
      explanation: 'En løkke gjentar en handling flere ganger. For eksempel kan en for-løkke gå gjennom alle tall fra 1 til 100 og utføre samme operasjon på hvert tall.',
    },
    {
      question: 'Hvorfor er Python populært i naturfag?',
      options: [
        'Det er lett å lære og har gode verktøy for dataanalyse',
        'Det er det eneste programmeringsspråket',
        'Det er utviklet av forskere i Norge',
        'Det er raskere enn alle andre språk',
      ],
      explanation: 'Python er lett å lære, har kraftige biblioteker for dataanalyse og visualisering (NumPy, Matplotlib), er gratis, og brukes mye i vitenskapelig forskning.',
    },
    {
      question: 'Hva betyr det å visualisere data?',
      options: [
        'Fremstille data grafisk med diagrammer',
        'Skrive ut tallene',
        'Lagre data i en fil',
        'Slette unødvendige data',
      ],
      explanation: 'Å visualisere data betyr å fremstille dataene grafisk, for eksempel med linjediagrammer, søylediagrammer eller spredningsplott. Dette gjør det lettere å se mønstre og trender.',
    },
    {
      question: 'Hva er en simulering?',
      options: [
        'En datamodell som etterligner virkelige prosesser',
        'En type videospill',
        'Et fysisk eksperiment',
        'En type sensor',
      ],
      explanation: 'En simulering er en datamodell som etterligner virkelige prosesser. Den lar oss teste hypoteser og utforske scenarier som er for farlige, dyre eller tidkrevende å gjøre i virkeligheten.',
    },
  ],

  // Kapittel 6.2

  'naturfag-10-6-2': [
    {
      question: 'Hva gjør en sensor?',
      options: [
        'Registrerer, måler og omformer fysiske egenskaper til signaler',
        'Bare viser tall på en skjerm',
        'Lagrer data på en harddisk',
        'Sender data til internett',
      ],
      explanation: 'En sensor registrerer, måler og omformer fysiske eller kjemiske egenskaper (som temperatur, lys, trykk) til elektriske signaler som kan behandles digitalt.',
    },
    {
      question: 'Hva er forskjellen mellom analog og digital måling?',
      options: [
        'Analog er kontinuerlig, digital er omformet til tall',
        'De er helt like',
        'Digital er mer upresist',
        'Analog er nyere teknologi',
      ],
      explanation: 'Analog måling gir kontinuerlige verdier (som kvikksølv i et termometer), mens digital måling omformer signalet til tall som kan lagres og analyseres av datamaskiner.',
    },
    {
      question: 'Hva er en datalogger?',
      options: [
        'En enhet som automatisk samler og lagrer data fra sensorer',
        'En type sensor',
        'En skjerm som viser data',
        'Et program for å lage grafer',
      ],
      explanation: 'En datalogger er en enhet som automatisk samler inn og lagrer data fra sensorer over tid. Den kan måle kontinuerlig og lagre tusenvis av målinger.',
    },
    {
      question: 'Hvilken sensor ville du bruke for å måle lysstyrke?',
      options: [
        'Lyssensor (fotosensor)',
        'Temperatursensor',
        'Trykksensor',
        'Fuktighetssensor',
      ],
      explanation: 'En lyssensor (fotosensor) måler lysstyrke. Den registrerer mengden lys som treffer sensoren og konverterer dette til et elektrisk signal.',
    },
    {
      question: 'Hvorfor bruker vi sensorer i naturfagsforsøk?',
      options: [
        'De gir nøyaktige målinger og kan måle kontinuerlig',
        'De er billigere enn vanlige instrumenter',
        'De erstatter all annen observasjon',
        'De gjør forsøkene enklære å forstå',
      ],
      explanation: 'Sensorer gir nøyaktige og presise målinger, kan måle kontinuerlig over lang tid, registrerer data raskere enn mennesker, og gjør det lettere å analysere data.',
    },
  ],

  // Kapittel 6.4

  'naturfag-10-6-4': [
    {
      question: 'Hva er en simulering?',
      options: [
        'En digital etterlikning av et virkelig system',
        'En fysisk modell laget av papp',
        'En måte å lagre data på',
        'Et eksperiment i laboratoriet',
      ],
      explanation: 'En simulering er en digital etterlikning av et virkelig system eller fenomen. Den bruker datamaskiner til å beregne hvordan noe oppfører seg over tid.',
    },
    {
      question: 'Hva er forskjellen mellom en modell og virkeligheten?',
      options: [
        'En modell er førenklet og fokuserer på det viktigste',
        'En modell er alltid helt nøyaktig',
        'Det er ingen forskjell',
        'En modell er alltid mer kompleks',
      ],
      explanation: 'En modell er en førenklet representasjon av virkeligheten. Den fokuserer på de viktigste egenskapene og utelater detaljer som ikke er nødvendige for formålet.',
    },
    {
      question: 'Hvorfor bruker forskere simuleringer?',
      options: [
        'For å teste scenarioer som er farlige eller umulige i virkeligheten',
        'Fordi de er enklære enn vanlige eksperimenter',
        'Fordi de alltid gir riktig svar',
        'Fordi de er billigere enn datamaskiner',
      ],
      explanation: 'Simuleringer lar forskere teste scenarioer som er for farlige, dyre, tidkrevende eller umulige å utføre i virkeligheten. De kan forutsi fremtiden og utforske komplekse systemer.',
    },
    {
      question: 'Hva er en viktig begrensning ved simuleringer?',
      options: [
        'De er førenklinger og kan ikke ta med alle detaljer',
        'De tar alltid for lang tid',
        'De krever alltid internett',
        'De fungerer bare for enkle systemer',
      ],
      explanation: 'Simuleringer er førenklinger av virkeligheten og kan ikke ta med alle detaljer. Resultatene er bare så gode som modellen og dataene de er basert på.',
    },
    {
      question: 'Hvabrukes klimasimuleringer til?',
      options: [
        'Forutsi hvordan klimaet vil utvikle seg i fremtiden',
        'Lage værmeldinger for i dag',
        'Kontrollære temperaturen i hus',
        'Måle luftforurensning',
      ],
      explanation: 'Klimasimuleringer brukes til å forutsi hvordan klimaet vil utvikle seg i fremtiden, basert på ulike scenarier for utslipp av drivhusgasser.',
    },
  ],

  // Kapittel 6.5

  'naturfag-10-6-5': [
    {
      question: 'Hva er forskning?',
      options: [
        'Systematisk arbeid for å skape ny kunnskap',
        'Å lese eksisterende bøker',
        'Å gjette svåret på spørsmål',
        'Å kopiere andres arbeid',
      ],
      explanation: 'Forskning er systematisk arbeid for å skape ny kunnskap. Det innebærer å stille spørsmål, teste hypoteser, samle data og trekke konklusjoner basert på bevis.',
    },
    {
      question: 'Hva er forskjellen mellom grunnforskning og anvendt forskning?',
      options: [
        'Grunnforskning vil forstå, anvendt vil løse praktiske problemer',
        'De er helt like',
        'Grunnforskning er bedre',
        'Anvendt forskning er dyrere',
      ],
      explanation: 'Grunnforskning søker å forstå verden uten umiddelbart praktisk mål. Anvendt forskning bruker kunnskap til å løse konkrete problemer eller utvikle produkter.',
    },
    {
      question: 'Hva er fagfellevurdering (peer review)?',
      options: [
        'Andre forskere vurderer kvaliteten før publisering',
        'Når studenter vurderer lærerne',
        'En type statistisk metode',
        'En måte å samle data på',
      ],
      explanation: 'Fagfellevurdering er når andre forskere vurderer kvaliteten på en forskningsartikkel før den publiseres. Dette sikrer at forskningen holder høy kvalitet.',
    },
    {
      question: 'Hva er innovasjon?',
      options: [
        'Å omsette kunnskap til nyttige produkter eller løsninger',
        'Det samme som forskning',
        'Å kopiere andres oppfinnelser',
        'Å finne opp ting uten forskning',
      ],
      explanation: 'Innovasjon er å omsette ny kunnskap til nyttige produkter, tjenester eller løsninger. Det handler om å bruke forskning til å skape noe nytt som forbedrer samfunnet.',
    },
    {
      question: 'Hvorfor er det viktig å vurdere kilder kritisk?',
      options: [
        'For å skille pålitelig informasjon fra feilinformasjon',
        'For å finne den billigste informasjonen',
        'Fordi all informasjon er like god',
        'For å unngå å lese for mye',
      ],
      explanation: 'Kritisk kildekritikk hjelper oss å skille pålitelig informasjon fra feilinformasjon. Vitenskapelige artikler og offisielle institusjoner er mer pålitelige enn tilfeldige nettsider.',
    },
  ],

  'naturfag-10-2-7': [
    {
      question: 'Hva er et hydrokarbon?',
      options: [
        'En forbindelse som bare inneholder karbon og hydrogen',
        'En forbindelse som inneholder karbon, hydrogen og oksygen',
        'En forbindelse som bare inneholder hydrogen',
        'En forbindelse som inneholder vann',
      ],
      explanation: 'Et hydrokarbon er en kjemisk forbindelse som bare inneholder grunnstoffene karbon (C) og hydrogen (H).',
    },
    {
      question: 'Hva er den generelle formelen for alkaner?',
      options: [
        'CₙH₂ₙ₊₂',
        'CₙH₂ₙ',
        'CₙH₂ₙ₋₂',
        'CₙHₙ',
      ],
      explanation: 'Alkaner (mettede hydrokarboner) har formelen CₙH₂ₙ₊₂. For eksempel metan: C₁H₂₍₁₎₊₂ = CH₄.',
    },
    {
      question: 'Hvor mange hydrogenatomer har propan (C₃H₈)?',
      options: [
        '8',
        '6',
        '3',
        '10',
      ],
      explanation: 'Propan har 3 karbonatomer, så formelen blir C₃H₂₍₃₎₊₂ = C₃H₈, altså 8 hydrogenatomer.',
    },
    {
      question: 'Hva kjennetegner et alkan (mettet hydrokarbon)?',
      options: [
        'Alle bindingene mellom karbonatomene er enkeltbindinger',
        'Det har minst én dobbeltbinding mellom karbonatomene',
        'Det har minst én trippelbinding mellom karbonatomene',
        'Det inneholder en hydroksylgruppe',
      ],
      explanation: 'I et alkan er alle karbon-karbon-bindingene enkeltbindinger (C–C). Det er «mettet» fordi hvert karbon er bundet til så mange hydrogenatomer som mulig.',
    },
    {
      question: 'Hvor mange kovalente bindinger kan ett karbonatom danne?',
      options: [
        '4',
        '2',
        '6',
        '1',
      ],
      explanation: 'Karbon har 4 valenselektroner og kan danne 4 kovalente bindinger. Dette gjør at karbon kan lage lange kjeder, forgreininger og ringer.',
    },
  ],

  'naturfag-10-2-8': [
    {
      question: 'Hvilken funksjonell gruppe kjennetegner alkoholer?',
      options: [
        'Hydroksylgruppe (-OH)',
        'Karboksylgruppe (-COOH)',
        'Aminogruppe (-NH₂)',
        'Karbonylgruppe (C=O)',
      ],
      explanation: 'Alkoholer kjennetegnes av hydroksylgruppen (-OH), der ett hydrogenatom i hydrokarbonet er byttet ut med -OH.',
    },
    {
      question: 'Hva er en funksjonell gruppe?',
      options: [
        'En bestemt gruppe atomer som gir molekylet sine karakteristiske kjemiske egenskaper',
        'En gruppe karbonatomer i en rett kjede',
        'Antallet hydrogenatomer i et molekyl',
        'En type kjemisk binding mellom to karbonatomer',
      ],
      explanation: 'En funksjonell gruppe er en bestemt gruppe atomer som gir et organisk molekyl dets karakteristiske kjemiske egenskaper – som en «etikett» på molekylet.',
    },
    {
      question: 'Hva er den kjemiske formelen for etanol?',
      options: [
        'C₂H₅OH',
        'CH₃OH',
        'C₃H₇OH',
        'CH₃COOH',
      ],
      explanation: 'Etanol har to karbonatomer og en hydroksylgruppe: C₂H₅OH. Det er stoffet i alkoholholdige drikker.',
    },
    {
      question: 'Hvilken funksjonell gruppe finnes i karboksylsyrer som eddiksyre?',
      options: [
        'Karboksylgruppe (-COOH)',
        'Hydroksylgruppe (-OH)',
        'Aminogruppe (-NH₂)',
        'Metylgruppe (-CH₃)',
      ],
      explanation: 'Karboksylsyrer inneholder karboksylgruppen (-COOH). Eddiksyre (CH₃COOH) er et eksempel.',
    },
    {
      question: 'Hvorfor er metanol farlig å drikke?',
      options: [
        'Det er svært giftig og kan føre til blindhet og død',
        'Det smaker svært vondt',
        'Det er ikke blandbart med vann',
        'Det fordamper for raskt til å svelges',
      ],
      explanation: 'Metanol (CH₃OH, «tresprit») er svært giftig. Inntak kan forårsake blindhet og død, i motsetning til etanol som finnes i drikke.',
    },
  ],

  'naturfag-10-4-3b': [
    {
      question: 'Hva er evolusjon?',
      options: [
        'Endringer i arvbare egenskaper i en populasjon over tid',
        'At enkeltindivider forandrer kroppen sin i løpet av livet',
        'At alle arter blir like over tid',
        'At dyr velger hvilke egenskaper avkommet skal ha',
      ],
      explanation: 'Evolusjon er endringer i arvbare egenskaper i en populasjon over tid. Det er populasjoner, ikke enkeltindivider, som evolverer.',
    },
    {
      question: 'Hva er den viktigste mekanismen som driver evolusjon?',
      options: [
        'Naturlig seleksjon',
        'At individer trener opp nye egenskaper',
        'Tilfeldig flaks alene',
        'At arter bestemmer seg for å forandre seg',
      ],
      explanation: 'Naturlig seleksjon (naturlig utvalg) er den viktigste mekanismen. Individer med egenskaper best tilpasset miljøet overlever og formerer seg mest.',
    },
    {
      question: 'Hvilken forsker reiste med HMS Beagle og utviklet evolusjonsteorien?',
      options: [
        'Charles Darwin',
        'Gregor Mendel',
        'Carl von Linné',
        'Louis Pasteur',
      ],
      explanation: 'Charles Darwin reiste med HMS Beagle (1831–1836) og observerte blant annet finkene på Galapagos, som ble viktige for evolusjonsteorien.',
    },
    {
      question: 'Hva er homologe strukturer et eksempel på?',
      options: [
        'Strukturer med samme grunnoppbygning men ulik funksjon, som tyder på felles opphav',
        'Strukturer som er helt identiske i alle arter',
        'Organer som ikke lenger har noen funksjon',
        'Strukturer som bare finnes hos mennesker',
      ],
      explanation: 'Homologe strukturer (f.eks. menneskearm, hvalfinne, flaggermusvinge) har samme grunnoppbygning men ulik funksjon, og er et bevis på felles opphav.',
    },
    {
      question: 'Hvilket utsagn om evolusjon er riktig?',
      options: [
        'Evolusjon har ikke noe mål eller en forhåndsbestemt retning',
        'Evolusjon gjør alltid arter mer kompliserte',
        'Evolusjon skjer for at arter skal bli «perfekte»',
        'Enkeltindivider evolverer i løpet av sitt eget liv',
      ],
      explanation: 'Evolusjon har ikke noe mål eller retning. Naturlig seleksjon favoriserer bare det som fungerer i et gitt miljø her og nå, ikke en plan om «perfeksjon».',
    },
  ],

  'naturfag-10-4-7': [
    {
      question: 'Hva kjennetegner fosforkretsløpet sammenlignet med de andre kretsløpene?',
      options: [
        'Det har ingen gassfase – fosfor finnes ikke som gass i atmosfæren',
        'Det går bare gjennom atmosfæren',
        'Det involverer ikke levende organismer',
        'Det er det raskeste av alle kretsløpene',
      ],
      explanation: 'Fosforkretsløpet har ingen gassfase. Fosfor sirkulerer mellom bergarter, jord, vann og organismer, men ikke som gass i atmosfæren.',
    },
    {
      question: 'Hvilken prosess tar CO₂ ut av atmosfæren i karbonkretsløpet?',
      options: [
        'Fotosyntese',
        'Celleånding',
        'Forbrenning',
        'Forråtnelse',
      ],
      explanation: 'I fotosyntesen tar grønne planter og alger opp CO₂ fra atmosfæren og bygger organiske molekyler ved hjelp av solenergi.',
    },
    {
      question: 'Hvorfor kan de fleste organismer ikke bruke nitrogengass (N₂) direkte?',
      options: [
        'N₂ har en sterk trippelbinding som er vanskelig å bryte',
        'N₂ er for stort til å trenge inn i cellene',
        'N₂ er giftig for de fleste organismer',
        'N₂ finnes ikke i atmosfæren',
      ],
      explanation: 'N₂-molekylet har en svært sterk trippelbinding mellom nitrogenatomene. Den må først brytes (nitrogenfiksering) før nitrogenet kan brukes.',
    },
    {
      question: 'Hva skjer ved fordamping i vannets kretsløp?',
      options: [
        'Vann går fra væske til vanndamp og stiger opp i lufta',
        'Vanndamp avkjøles og danner skyer',
        'Vann faller ned som regn eller snø',
        'Planter tar opp vann gjennom røttene',
      ],
      explanation: 'Ved fordamping går flytende vann over til vanndamp (gass) når sola varmer opp havoverflaten, innsjøer og elver.',
    },
    {
      question: 'Hvilket grunnstoff sirkulerer mellom atmosfæren, havet, organismer og jordskorpa i karbonkretsløpet?',
      options: [
        'Karbon',
        'Nitrogen',
        'Fosfor',
        'Svovel',
      ],
      explanation: 'Karbonkretsløpet beskriver hvordan karbon (C) sirkulerer mellom atmosfæren (CO₂), havet, levende organismer og jordskorpa (bl.a. fossile brensler).',
    },
  ],

  'naturfag-10-4-8': [
    {
      question: 'Hva er forskjellen på fornybare og ikke-fornybare naturressurser?',
      options: [
        'Fornybare kan naturen lage mer av i et menneskelig tidsperspektiv, ikke-fornybare finnes i begrenset mengde',
        'Fornybare er alltid dyrere enn ikke-fornybare',
        'Ikke-fornybare ressurser forurenser aldri',
        'Fornybare ressurser finnes bare i havet',
      ],
      explanation: 'Fornybare ressurser (sol, vind, skog, fisk) kan fornyes i menneskelig tidsperspektiv. Ikke-fornybare (olje, kull, gass, mineraler) finnes i begrenset mengde.',
    },
    {
      question: 'Hvilken energikilde har størst CO₂-utslipp per kWh?',
      options: [
        'Kull',
        'Vannkraft',
        'Vindkraft',
        'Solkraft',
      ],
      explanation: 'Kull har de største CO₂-utslippene (ca. 820 g/kWh) av energikildene. Vann, vind og sol har svært lave utslipp.',
    },
    {
      question: 'Hva er bærekraftig utvikling ifølge Brundtland-kommisjonen?',
      options: [
        'Utvikling som dekker dagens behov uten å ødelegge for fremtidige generasjoner',
        'Utvikling som gir maksimal økonomisk vekst på kort sikt',
        'Utvikling som stopper all bruk av naturressurser',
        'Utvikling som bare gjelder rike land',
      ],
      explanation: 'Brundtland-kommisjonen (1987) definerte bærekraftig utvikling som utvikling som dekker dagens behov uten å ødelegge mulighetene for fremtidige generasjoner.',
    },
    {
      question: 'Hvorfor regnes reindrift som et eksempel på bærekraftig naturbruk?',
      options: [
        'Reinen flyttes mellom beiteområder slik at beitene får tid til å vokse igjen',
        'Reinen spiser bare planter som ikke er fornybare',
        'Reindriften bruker ingen naturressurser',
        'Reinen holdes alltid på samme beite hele året',
      ],
      explanation: 'Reindriften flytter dyrene mellom beiteområder gjennom året, slik at beitene fornyes, og tilpasser antall dyr til det beitene tåler.',
    },
    {
      question: 'Hvor mange dimensjoner har bærekraftig utvikling?',
      options: [
        'Tre: miljømessig, sosial og økonomisk',
        'To: miljømessig og økonomisk',
        'Én: bare miljømessig',
        'Fire: miljø, sosial, økonomi og teknologi',
      ],
      explanation: 'Bærekraftig utvikling har tre dimensjoner: miljømessig (ta vare på naturen), sosial (gode levekår for alle) og økonomisk bærekraft.',
    },
  ],

  'naturfag-10-5-6': [
    {
      question: 'Hva er psykoaktive stoffer?',
      options: [
        'Stoffer som påvirker hjernen og endrer hvordan vi tenker, føler eller oppfører oss',
        'Stoffer som bare påvirker musklene',
        'Stoffer som alltid er ulovlige',
        'Stoffer som ikke har noen virkning på kroppen',
      ],
      explanation: 'Psykoaktive stoffer påvirker hjernen og endrer tanker, følelser eller atferd ved å påvirke signaloverføringen mellom nerveceller.',
    },
    {
      question: 'Hvordan virker alkohol (etanol) på nervesystemet?',
      options: [
        'Det er et dempende stoff som senker aktiviteten i hjernen',
        'Det er et stimulerende stoff som øker aktiviteten i hjernen',
        'Det er et hallusinogent stoff uten dempende effekt',
        'Det har ingen virkning på nervesystemet',
      ],
      explanation: 'Etanol er et dempende rusmiddel. Det forsterker den dempende nevrotransmitteren GABA og hemmer den stimulerende glutamat, så hjerneaktiviteten senkes.',
    },
    {
      question: 'Hva betyr 1 promille alkohol i blodet?',
      options: [
        '1 gram alkohol per liter blod',
        '1 gram alkohol per desiliter blod',
        '1 prosent alkohol i blodet',
        '1 milligram alkohol per liter blod',
      ],
      explanation: 'Promille (‰) er et mål på alkoholmengden i blodet. 1 promille tilsvarer 1 gram alkohol per liter blod.',
    },
    {
      question: 'Hva er et legemiddel?',
      options: [
        'Et stoff som brukes for å forebygge, lindre eller behandle sykdom, og som er vitenskapelig testet',
        'Et hvilket som helst stoff som gir rus',
        'Et stoff som bare leger kan ta',
        'Et stoff som aldri har bivirkninger',
      ],
      explanation: 'Et legemiddel brukes for å forebygge, diagnostisere, lindre eller behandle sykdom, og har gjennomgått vitenskapelig testing for virkning og sikkerhet.',
    },
    {
      question: 'Hvorfor er nikotin et problematisk stoff i tobakk?',
      options: [
        'Det er et av de mest avhengighetsskapende stoffene vi kjenner',
        'Det er helt ufarlig og uten effekt',
        'Det demper alltid all hjerneaktivitet fullstendig',
        'Det finnes bare i e-sigaretter',
      ],
      explanation: 'Nikotin er det psykoaktive stoffet i tobakk og er et av de mest avhengighetsskapende stoffene vi kjenner.',
    },
  ],

  'naturfag-10-7-1': [
    {
      question: 'Hva er pubertet?',
      options: [
        'Perioden der kroppen utvikler seg fra barn til voksen og blir kjønnsmoden',
        'En enkelt hendelse som skjer på én dag',
        'Perioden rett etter fødselen',
        'Tiden da man slutter å vokse',
      ],
      explanation: 'Pubertet er perioden der kroppen utvikler seg fra barn til voksen og blir kjønnsmoden – altså i stand til å reprodusere seg. Det er en prosess over flere år.',
    },
    {
      question: 'Hvilket er det viktigste kvinnelige kjønnshormonet?',
      options: [
        'Østrogen',
        'Testosteron',
        'Insulin',
        'Adrenalin',
      ],
      explanation: 'Østrogen er det viktigste kvinnelige kjønnshormonet. Det produseres hovedsakelig i eggstokkene og styrer kvinnelige kjønnskarakteristika.',
    },
    {
      question: 'Hvilket er det viktigste mannlige kjønnshormonet?',
      options: [
        'Testosteron',
        'Østrogen',
        'Progesteron',
        'Tyroksin',
      ],
      explanation: 'Testosteron er det viktigste mannlige kjønnshormonet. Det produseres i testiklene og setter i gang mannlige kjønnskarakteristika.',
    },
    {
      question: 'Hvor i kroppen starter den hormonelle kjedereaksjonen som setter i gang puberteten?',
      options: [
        'I hjernen (hypothalamus)',
        'I hjertet',
        'I leveren',
        'I magesekken',
      ],
      explanation: 'Prosessen starter i hjernen, der hypothalamus begynner å produsere hormoner som setter i gang den hormonelle kjedereaksjonen.',
    },
    {
      question: 'Hva er normalt om alderen puberteten starter?',
      options: [
        'Den starter på ulike tidspunkt – noen tidligere og noen senere, alt er normalt',
        'Alle starter puberteten på nøyaktig samme alder',
        'Gutter starter alltid før jenter',
        'Puberteten må starte før fylte 8 år',
      ],
      explanation: 'Puberteten starter på forskjellige tidspunkt (jenter ca. 8–13 år, gutter ca. 9–14 år). Både tidlig og sen start er helt normalt.',
    },
  ],

  'naturfag-10-7-2': [
    {
      question: 'Hva er hovedfunksjonen til eggstokkene (ovariene)?',
      options: [
        'Å produsere eggceller og hormonene østrogen og progesteron',
        'Å transportere urin ut av kroppen',
        'Å produsere sædceller',
        'Å pumpe blod til livmoren',
      ],
      explanation: 'Eggstokkene produserer eggceller og hormonene østrogen og progesteron.',
    },
    {
      question: 'Hvor skjer befruktningen vanligvis?',
      options: [
        'I egglederne (tuba uterina)',
        'I livmoren',
        'I skjeden',
        'I eggstokken',
      ],
      explanation: 'Befruktningen skjer vanligvis i egglederen, der eggcellen møter sædcellen på vei mot livmoren.',
    },
    {
      question: 'Når dannes eggcellene hos kvinner?',
      options: [
        'Alle dannes allerede før fødselen',
        'De dannes på nytt hver måned',
        'De dannes først ved puberteten',
        'De dannes i livmoren under graviditet',
      ],
      explanation: 'Alle eggcellene (1–2 millioner umodne) dannes allerede før kvinnen er født. Etter fødselen dannes det aldri nye eggceller.',
    },
    {
      question: 'Omtrent hvilken dag i menstruasjonssyklusen skjer eggløsningen vanligvis?',
      options: [
        'Rundt dag 14',
        'Rundt dag 1',
        'Rundt dag 28',
        'Rundt dag 7',
      ],
      explanation: 'Eggløsningen (ovulasjon) skjer vanligvis rundt dag 14 i en syklus på omtrent 28 dager.',
    },
    {
      question: 'Hva er livmorens (uterus) hovedfunksjon?',
      options: [
        'Å være stedet der fosteret utvikler seg under graviditet',
        'Å produsere sædceller',
        'Å lagre eggceller hele livet',
        'Å transportere urin',
      ],
      explanation: 'Livmoren er et hult, muskuløst organ der fosteret utvikler seg. Slimhinnen bygges opp og støtes ut hver måned ved menstruasjon hvis det ikke blir graviditet.',
    },
  ],

  'naturfag-10-7-3': [
    {
      question: 'Hva er en zygote?',
      options: [
        'Den befruktede eggcellen – det første stadiet av et nytt menneske',
        'En umoden eggcelle',
        'En sædcelle',
        'Et ferdig utviklet foster',
      ],
      explanation: 'En zygote er den befruktede eggcellen, det aller første stadiet av et nytt menneske, med komplett arvestoff (46 kromosomer) fra mor og far.',
    },
    {
      question: 'Hvor mange kromosomer har en befruktet eggcelle hos mennesket?',
      options: [
        '46',
        '23',
        '92',
        '48',
      ],
      explanation: 'En befruktet eggcelle har 46 kromosomer – 23 fra eggcellen og 23 fra sædcellen.',
    },
    {
      question: 'Hva er morkakens (placentas) funksjon?',
      options: [
        'Å transportere oksygen og næring til fosteret og fjerne avfallsstoffer',
        'Å produsere sædceller',
        'Å beskytte fosteret mot lyd',
        'Å bestemme barnets kjønn',
      ],
      explanation: 'Morkaken kobler fosteret til moren og sørger for transport av oksygen, næring og avfallsstoffer, samt produksjon av hormoner.',
    },
    {
      question: 'Hvordan oppstår eneggede tvillinger?',
      options: [
        'Ett egg befruktes av én sædcelle, og zygoten deler seg i to',
        'To egg befruktes av to ulike sædceller',
        'To sædceller befrukter samme egg',
        'Ett egg deler seg før det blir befruktet',
      ],
      explanation: 'Eneggede tvillinger oppstår når ett egg befruktes av én sædcelle, og zygoten deler seg i to adskilte celleklumper. Derfor er de genetisk like.',
    },
    {
      question: 'Omtrent hvor lenge varer et normalt svangerskap?',
      options: [
        'Omtrent 40 uker (280 dager)',
        'Omtrent 20 uker',
        'Omtrent 52 uker',
        'Omtrent 30 uker',
      ],
      explanation: 'Et svangerskap varer omtrent 40 uker (280 dager) og deles inn i tre trimestere på cirka tre måneder hver.',
    },
  ],

  'naturfag-10-7-4': [
    {
      question: 'Hvilken prevensjonsmetode beskytter mot både graviditet og seksuelt overførbare infeksjoner?',
      options: [
        'Kondom',
        'P-piller',
        'Hormonspiral',
        'P-stav',
      ],
      explanation: 'Kondom er den eneste metoden som beskytter mot både graviditet og seksuelt overførbare infeksjoner (SOI). Hormonelle metoder beskytter bare mot graviditet.',
    },
    {
      question: 'Hvordan virker hormonell prevensjon hovedsakelig?',
      options: [
        'Den hindrer eggløsning',
        'Den dreper alle sædceller umiddelbart',
        'Den fjerner livmoren',
        'Den øker kroppstemperaturen permanent',
      ],
      explanation: 'Hormonell prevensjon virker hovedsakelig ved å hindre eggløsning, samt gjøre livmorslimhinnen tynnere og slimet i livmorhalsen tykkere.',
    },
    {
      question: 'Hva menes med dobbel beskyttelse?',
      options: [
        'Å bruke kondom i tillegg til en annen prevensjonsmetode som p-piller',
        'Å bruke to kondomer oppå hverandre',
        'Å bruke prevensjon to ganger i måneden',
        'Å ta p-piller dobbelt så ofte',
      ],
      explanation: 'Dobbel beskyttelse betyr å bruke kondom (mot SOI) sammen med en annen metode som p-piller (ekstra sikkerhet mot graviditet).',
    },
    {
      question: 'Hva er en barrieremetode?',
      options: [
        'En metode som fysisk hindrer sædceller i å nå egget',
        'En metode som bruker hormoner for å hindre eggløsning',
        'En metode som bare virker etter samleie',
        'En metode som krever operasjon',
      ],
      explanation: 'En barrieremetode (som kondom) hindrer fysisk sædceller i å nå egget, uten å påvirke kroppens hormonsystem.',
    },
    {
      question: 'Hvilken rett har unge under 20 år i Norge når det gjelder prevensjon?',
      options: [
        'Rett til gratis eller subsidiert prevensjon',
        'De har ingen rett til prevensjon før de er 18',
        'De må alltid betale full pris',
        'De kan bare få prevensjon med foreldrenes samtykke',
      ],
      explanation: 'I Norge har unge under 20 år rett til gratis eller subsidiert prevensjon, og kan blant annet henvende seg til helsestasjon for ungdom.',
    },
  ],

  'naturfag-10-7-5': [
    {
      question: 'Hva betyr samtykke i seksuell sammenheng?',
      options: [
        'At alle involverte frivillig, entusiastisk og tydelig sier ja',
        'At man ikke sier nei',
        'At man en gang tidligere har sagt ja',
        'At den ene parten bestemmer for begge',
      ],
      explanation: 'Samtykke betyr at alle involverte frivillig, entusiastisk og tydelig gir uttrykk for at de ønsker å delta. Det er et tydelig ja, ikke fravær av nei.',
    },
    {
      question: 'Kan samtykke trekkes tilbake?',
      options: [
        'Ja, samtykke kan trekkes tilbake når som helst',
        'Nei, et ja gjelder for alltid',
        'Bare hvis man sier det skriftlig',
        'Bare før man begynner',
      ],
      explanation: 'Samtykke kan trekkes tilbake når som helst. Et tidligere ja forplikter ingen til å fortsette.',
    },
    {
      question: 'Hvilket av disse er IKKE gyldig samtykke?',
      options: [
        'Taushet – at noen ikke sier nei',
        'Et tydelig «ja, det vil jeg»',
        'Entusiastisk kroppsspråk som viser at man er med',
        '«Ja, fortsett»',
      ],
      explanation: 'Taushet er ikke samtykke. Samtykke krever et tydelig ja – fravær av nei betyr ikke ja.',
    },
    {
      question: 'Hvorfor kan en sterkt beruset person ikke gi gyldig samtykke?',
      options: [
        'Fordi rus svekker evnen til å ta frie og informerte valg',
        'Fordi rus gjør at man alltid sier ja',
        'Fordi det er ulovlig å drikke alkohol',
        'Fordi beruselse fjerner all hukommelse',
      ],
      explanation: 'En sterkt beruset, sovende eller bevisstløs person kan ikke gi frivillig og informert samtykke, og kan derfor ikke samtykke gyldig.',
    },
    {
      question: 'Hva handler grensesetting om?',
      options: [
        'Å kjenne egne grenser og kommunisere dem tydelig, og respektere andres',
        'Å presse andre til å gjøre det man selv vil',
        'Å aldri si nei til noe',
        'Å bestemme grensene for andre',
      ],
      explanation: 'Grensesetting handler om å kjenne sine egne grenser og kommunisere dem tydelig, samtidig som man alltid respekterer andres grenser.',
    },
  ],

};

export default quizData_naturfag_10;
