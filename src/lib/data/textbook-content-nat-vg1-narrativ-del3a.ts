/**
 * Tekstbok innhold for Naturfag VG1 - NARRATIV VERSJON DEL 3A
 * Seksjon 3: Energi og energiressurser (Kapittel 3.1-3.4)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 3.1 NARRATIV: Big bang og universets opprinnelse
// ============================================================================

export const CHAPTER_NAT_VG1_3_1_NARRATIV: TextbookChapter = {
  id: 'nat-vg1-3-1-narrativ',
  courseId: 'nat-vg1',
  chapterNumber: '3.1',
  title: 'Big bang og universets opprinnelse',
  subtitle: 'Narrativ versjon',
  description:
    'En fortelling om hvordan alt begynte -- fra et ufattelig lite punkt til hundre milliarder galakser, og hvorfor det meste av universet er usynlig for oss.',
  estimatedMinutes: 40,
  competenceGoals: [
    'beskrive big bang-teorien om hvordan universet har oppstått og utviklet seg, og gjøre rede for observasjoner som støtter denne teorien',
  ],
  linkedChapterId: 'nat-vg1-3-1',
  content: [
    {
      id: 'nat-vg1-3-1-n-intro',
      type: 'text',
      content: `## Da alt begynte

Neste gang du er ute en klar kveld, se opp. Hver eneste prikk av lys du ser -- hver stjerne, hvert svake glimt -- har en historie som strekker seg tilbake til det samme startpunktet. For ca. **13,8 milliarder aar siden** oppsto universet i det vi kaller **big bang**.

Men stopp litt. Big bang var *ikke* en eksplosjon i rommet, slik du kanskje forestiller deg. Det var en eksplosjon *av* rommet selv. Foer big bang fantes det verken rom eller tid. Det fantes ingen «utenfor» der eksplosjonen kunne skje, og ingen «foer» fordi tiden ble til i det samme oeyeblikket. I begynnelsen var all materie og energi konsentrert i et ekstremt lite, ekstremt varmt og ekstremt tett punkt -- saa lite at det er umulig aa forestille seg. Saa begynte rommet selv aa utvide seg.

Tenk deg en ballong med smaa prikker tegnet paa overflaten. Naar du blaaser opp ballongen, beveger alle prikkene seg fra hverandre. Men ingen prikk reiser paa overflaten -- det er selve overflaten som vokser. Slik er det med galaksene i universet. De beveger seg ikke gjennom rommet; rommet mellom dem vokser. Og det finnes intet sentrum -- fra enhver galakse ser det ut som om alle de andre beveger seg bort. Big bang skjedde ikke paa et bestemt sted. Den skjedde *overalt* samtidig, fordi hele rommet var det lille punktet.

Det opprinnelige punktet kalles en **singularitet** -- et sted der vare vanlige fysikklover bryter sammen. Den belgiske presten og fysikeren **Georges Lemaitre** foreslo teorien i 1927 og kalte det «det kosmiske egget». Astronomen **Edwin Hubble** bekreftet i 1929 at universet virkelig utvider seg.`,
    },
    {
      id: 'nat-vg1-3-1-n-section1',
      type: 'text',
      content: `## De foerste oeyeblikkene -- en kosmisk tidslinje

Historien som utfoldet seg etter big bang er nesten for dramatisk til aa vaere sann. La oss foelge den trinn for trinn.

I det aller tidligste oeyeblikket vi kan beskrive -- **10⁻⁴³ sekunder** etter big bang, kalt **Planck-tiden** -- var universet ufattelig lite, med en temperatur paa ca. 10³² grader. Alle de fire naturkreftene var forent i en enkelt kraft. Saa, etter bare **10⁻³⁶ sekunder**, skjedde noe ekstraordinaert: universet gjennomgikk en **inflasjon** og utvidet seg fra mindre enn et atom til stoerre enn en galakse paa et oeyeblikk. Denne inflasjonsfasen forklarer hvorfor universet er saa «flatt» og ensartet i dag.

Da det hadde gaatt et *milliondels sekund*, hadde temperaturen sunket nok til at kvarker kunne kombineres til **protoner** og **noeyttroner**. Etter **tre minutter** begynte disse aa fusjonere til atomkjerner i en prosess vi kaller **nukleosyntese**. Universet laget **hydrogen** (ca. 75 %), **helium** (ca. 25 %) og smaa spor av litium. Ingen tyngre grunnstoffer ennaa -- alt karbonet, oksygenet og jernet du er laget av, maatte vente paa at stjernene skulle danne dem.

Saa gikk det 380 000 aar. Temperaturen sank til ca. 3000 K, og noe magisk hendte: elektroner bandt seg til atomkjerner og dannet noeytrale atomer. Plutselig kunne fotoner reise fritt gjennom rommet uten aa kollidere med frie elektroner. Universet gikk fra aa vaere ugjennomsiktig til gjennomsiktig. Dette oeyeblikket kalles **rekombinasjon**, og lyset som ble frigitt den dagen kan vi faktisk se i dag -- som **kosmisk bakgrunnsstraaling**.

Etter 200 millioner aar tente de foerste stjernene i moerket, og etter 400 millioner aar dannet de foerste galaksene seg. Solsystemet vaart ble til for ca. 4,6 milliarder aar siden -- omtrent 9 milliarder aar etter big bang. Og i dag, 13,8 milliarder aar etter det hele begynte, sitter du her og leser dette.`,
    },
    {
      id: 'nat-vg1-3-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa big bang og universets tidlige historie:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-3-1-n-quiz1-q0',
            task: 'Hva var big bang?',
            options: [
              { id: 'a', text: 'En eksplosjon som skjedde paa et bestemt sted i rommet', isCorrect: false },
              { id: 'b', text: 'En teori som har blitt motbevist', isCorrect: false },
              { id: 'c', text: 'Starten paa rommet og tiden selv, der alt utvidet seg fra et ekstremt tett punkt', isCorrect: true },
              { id: 'd', text: 'Kollisjonen mellom to galakser', isCorrect: false },
            ],
            solution:
              'Big bang var ikke en eksplosjon i rommet, men starten paa rommet og tiden selv. All materie og energi var konsentrert i et ekstremt lite, varmt og tett punkt, og rommet selv begynte aa utvide seg.',
          },
          {
            id: 'nat-vg1-3-1-n-quiz1-q1',
            task: 'Hvilke grunnstoffer ble dannet i de foerste minuttene etter big bang?',
            options: [
              { id: 'a', text: 'Karbon, oksygen og nitrogen', isCorrect: false },
              { id: 'b', text: 'Hydrogen, helium og spor av litium', isCorrect: true },
              { id: 'c', text: 'Jern, gull og uran', isCorrect: false },
              { id: 'd', text: 'Alle grunnstoffene i periodesystemet', isCorrect: false },
            ],
            solution:
              'Big bang-nukleosyntese produserte bare de letteste grunnstoffene: hydrogen (ca. 75 %), helium (ca. 25 %) og spor av litium. Alle tyngre grunnstoffer ble dannet senere i stjerner.',
          },
          {
            id: 'nat-vg1-3-1-n-quiz1-q2',
            task: 'Hva skjedde under rekombinasjon, ca. 380 000 aar etter big bang?',
            options: [
              { id: 'a', text: 'De foerste stjernene tente', isCorrect: false },
              { id: 'b', text: 'Universet eksploderte paa nytt', isCorrect: false },
              { id: 'c', text: 'Galaksene kolliderte med hverandre', isCorrect: false },
              { id: 'd', text: 'Elektroner bandt seg til kjerner, og universet ble gjennomsiktig', isCorrect: true },
            ],
            solution:
              'Under rekombinasjon sank temperaturen nok til at elektroner kunne binde seg til atomkjerner og danne noeytrale atomer. Lyset kunne plutselig bevege seg fritt, og universet gikk fra ugjennomsiktig til gjennomsiktig. Vi ser dette lyset i dag som kosmisk bakgrunnsstraaling.',
          },
          {
            id: 'nat-vg1-3-1-n-quiz1-q3',
            task: 'Hvis universets historie ble komprimert til ett aar, naar ville hele menneskehetens skrevne historie ha skjedd?',
            options: [
              { id: 'a', text: 'I loepet av november', isCorrect: false },
              { id: 'b', text: 'De siste 14 sekundene av 31. desember', isCorrect: true },
              { id: 'c', text: 'I foerste uke av desember', isCorrect: false },
              { id: 'd', text: 'I loepet av september', isCorrect: false },
            ],
            solution:
              'Paa den kosmiske kalenderen, der big bang skjer 1. januar, utgjor hele menneskehetens skrevne historie bare de siste 14 sekundene av 31. desember. Dette viser hvor utrolig gammelt universet er sammenlignet med oss.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-3-1-n-section2',
      type: 'text',
      content: `## Det usynlige universet

Her kommer kanskje den mest overraskende delen av historien: det meste av universet er usynlig for oss.

Alt du kan se og foele -- atomer, stjerner, planeter, gass, stoev, deg og meg -- utgjor bare ca. **5 %** av universet. Vi kaller det **vanlig materie**. Men hva er resten?

Omtrent **27 %** er noe vi kaller **moerk materie**. Vi vet ikke hva det er! Vi kan ikke se det, det sender ikke ut lys, det absorberer ikke lys, og det reagerer ikke med vanlig materie -- bortsett fra gjennom gravitasjon. Men vi vet at det maa vaere der. Galakser roterer for fort til at synlig materie alene kan holde dem sammen. Galaksehoper inneholder mer masse enn vi kan se. Og lys boyes av usynlig masse, noe vi kaller gravitasjonslinser. Det er litt som vinden: du ser ikke luften, men du ser bladene som beveger seg.

De resterende **68 %** er enda mer mystisk: **moerk energi**. Denne kraften driver universets *akselererende* utvidelse. I 1998 oppdaget astronomer noe forbloeffende: fjerne supernovaer var svakere enn forventet, noe som betyr at universet ikke bare utvider seg -- det utvider seg raskere og raskere. Moerk materie bremser universets utvidelse gjennom gravitasjon, mens moerk energi akselererer den. Sammen utgjor disse to usynlige komponentene 95 % av alt som finnes.

Saa naar du ser opp paa nattehimmelen, husk: det du ser er bare en bitteliten broekkdel av det som faktisk er der. Det meste av universet er fullstendig usynlig -- og vi forstaar det knapt.`,
    },
    {
      id: 'nat-vg1-3-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa universets sammensetning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-3-1-n-quiz2-q0',
            task: 'Hvor stor andel av universet utgjor vanlig materie (atomer, stjerner, planeter)?',
            options: [
              { id: 'a', text: 'Ca. 50 %', isCorrect: false },
              { id: 'b', text: 'Ca. 27 %', isCorrect: false },
              { id: 'c', text: 'Ca. 5 %', isCorrect: true },
              { id: 'd', text: 'Ca. 68 %', isCorrect: false },
            ],
            solution:
              'Vanlig materie -- alt vi kan se og foele -- utgjor bare ca. 5 % av universet. Moerk materie utgjor ca. 27 %, og moerk energi utgjor ca. 68 %.',
          },
          {
            id: 'nat-vg1-3-1-n-quiz2-q1',
            task: 'Hva er forskjellen mellom moerk materie og moerk energi?',
            options: [
              { id: 'a', text: 'Moerk materie er kald, moerk energi er varm', isCorrect: false },
              { id: 'b', text: 'Moerk materie har gravitasjon og holder ting sammen, moerk energi driver universets akselererende utvidelse', isCorrect: true },
              { id: 'c', text: 'De er det samme fenomenet med ulikt navn', isCorrect: false },
              { id: 'd', text: 'Moerk materie finnes bare i galakser, moerk energi bare mellom galakser', isCorrect: false },
            ],
            solution:
              'Moerk materie har gravitasjon som vanlig materie og holder galakser sammen (bremser utvidelsen). Moerk energi gjor det motsatte -- den driver universets akselererende utvidelse (dytter ting fra hverandre).',
          },
          {
            id: 'nat-vg1-3-1-n-quiz2-q2',
            task: 'Hvordan vet vi at moerk materie finnes, selv om vi ikke kan se den?',
            options: [
              { id: 'a', text: 'Vi har fotografert den med spesielle teleskoper', isCorrect: false },
              { id: 'b', text: 'Vi kan maale gravitasjonseffektene, som at galakser roterer for fort', isCorrect: true },
              { id: 'c', text: 'Vi har laget den i laboratorier', isCorrect: false },
              { id: 'd', text: 'Vi kan hoere den med radioteleskoper', isCorrect: false },
            ],
            solution:
              'Vi kan ikke se moerk materie direkte, men vi maler gravitasjonseffektene: galakser roterer for fort til at synlig materie kan holde dem sammen, galaksehoper har mer masse enn vi kan se, og lys boyes av usynlig masse (gravitasjonslinser).',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-3-1-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du laert om universets opprinnelse og utvikling:

- **Big bang** skjedde for 13,8 milliarder aar siden. Det var ikke en eksplosjon i rommet, men starten paa rommet og tiden selv. Det opprinnelige punktet kalles en **singularitet**.

- **Tidslinjen etter big bang** gaar fra Planck-tiden (10⁻⁴³ s) gjennom **inflasjon** (ekstremt rask utvidelse), **nukleosyntese** (dannelse av hydrogen og helium etter ca. 3 minutter), **rekombinasjon** (universet ble gjennomsiktig etter 380 000 aar), de foerste stjernene (200 millioner aar), til solsystemet (9 milliarder aar) og oss i dag.

- **Universets sammensetning** er overraskende: vanlig materie utgjor bare ca. 5 %, **moerk materie** ca. 27 %, og **moerk energi** ca. 68 %. Vi vet svart lite om de to siste.

- **Grunnstoffene** fra big bang var bare hydrogen (75 %) og helium (25 %). Alle tyngre grunnstoffer ble dannet senere i stjerner.

- Georges **Lemaitre** foreslo big bang-teorien i 1927, og Edwin **Hubble** bekreftet universets utvidelse i 1929.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.2 NARRATIV: Stjerner og deres livssyklus
// ============================================================================

export const CHAPTER_NAT_VG1_3_2_NARRATIV: TextbookChapter = {
  id: 'nat-vg1-3-2-narrativ',
  courseId: 'nat-vg1',
  chapterNumber: '3.2',
  title: 'Stjerner og deres livssyklus',
  subtitle: 'Narrativ versjon',
  description:
    'Historien om stjernenes liv og doed -- fra foedsel i kosmiske gasskyer til spektakulaere supernovaeksplosjoner som sprer grunnstoffene du er laget av.',
  estimatedMinutes: 40,
  competenceGoals: [
    'beskrive big bang-teorien om hvordan universet har oppstått og utviklet seg',
  ],
  linkedChapterId: 'nat-vg1-3-2',
  content: [
    {
      id: 'nat-vg1-3-2-n-intro',
      type: 'text',
      content: `## Stjernenes liv og doed

Naar du ser opp paa nattehimmelen, ser du tusenvis av stjerner. Hver eneste en er en gigantisk kule av gloedende gass der kjernefysiske reaksjoner frigjor enorme mengder energi. Vaar sol er en helt gjennomsnittlig stjerne -- verken spesielt stor eller liten, varm eller kald. Men selv en «vanlig» stjerne som solen er et utrolig kraftverk.

Hva driver en stjerne? Svaret er **kjernefusjon**: sammenslaaing av lette atomkjerner til tyngre. I solens kjerne presses fire hydrogenkjerner (protoner) sammen til en heliumkjerne. Produktet veier litt *mindre* enn de opprinnelige kjernene, og den «manglende» massen omdannes til energi ifoelge Einsteins beroemte formel **E = mc²**. Siden lysets hastighet (c) er et enormt tall, gir selv en liten masseforskjell enorme mengder energi. Solen fusjonerer ca. 620 millioner tonn hydrogen per sekund og mister 4 millioner tonn masse som straales ut som energi -- tilsvarende 100 milliarder atombomber hvert sekund!

Men fusjon er krevende. Det krever ekstremt hoey temperatur (over 10 millioner grader) og hoeyt trykk for aa presse kjernene tett nok sammen, fordi atomkjerner har positiv ladning og frastoeter hverandre. Bare i stjernekjerner er forholdene riktige. Og selv om solen mister 4 millioner tonn per sekund, er den saa enormt stor (2 x 10³⁰ kg) at massetapet er ubetydelig -- bare 0,03 % over 5 milliarder aar.`,
    },
    {
      id: 'nat-vg1-3-2-n-section1',
      type: 'text',
      content: `## Fra gasssky til lysende stjerne

Historien om en stjernes foedsel begynner i de enorme, tynne skyene av gass og stoev som finnes mellom stjernene -- hovedsakelig hydrogen og helium. Disse skyene, kalt **nebulaer**, kan vaere lysaar i diameter.

Saa skjer noe som setter prosessen i gang. Kanskje en sjokkboelge fra en naerliggende supernova, kanskje gravitasjonspavirkning fra en passerende stjerne. Skyen begynner aa trekke seg sammen under sin egen gravitasjon. Etter hvert fragmenterer den i mindre klumper, og hver klump kan bli en stjerne.

Sentrum av klumpen blir tettere og varmere -- en **protostjerne** dannes. Den er varm, men fusjon har ikke startet ennaa. Saa, etter kanskje 10 til 100 millioner aar med sakte sammentrekning, naar kjernetemperaturen endelig ca. 10 millioner grader. Da starter hydrogenfusjon, og en stjerne er foedt!

Et fantastisk eksempel paa dette er **Oernetaaken** (M16), ca. 7000 lysaar fra jorda. Der finner vi «Skapelsens soeyler» -- gigantiske gass-soeyler opptil 5 lysaar hoeye der nye stjerner dannes akkurat naa. Ved aa studere slike regioner kan vi se stjernedannelse i aksjon og forstaa hvordan vaar egen sol en gang ble til.`,
    },
    {
      id: 'nat-vg1-3-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa fusjon og stjernedannelse:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-3-2-n-quiz1-q0',
            task: 'Hva er kjernefusjon?',
            options: [
              { id: 'a', text: 'Splitting av tunge atomkjerner', isCorrect: false },
              { id: 'b', text: 'Sammenslaaing av lette atomkjerner til tyngre, som frigjor energi', isCorrect: true },
              { id: 'c', text: 'En kjemisk reaksjon mellom gasser', isCorrect: false },
              { id: 'd', text: 'Forbrenning av hydrogen i oksygen', isCorrect: false },
            ],
            solution:
              'Kjernefusjon er prosessen der lette atomkjerner (som hydrogen) slaas sammen til tyngre kjerner (som helium). Produktet veier litt mindre enn utgangsmaterialet, og masseforskjellen omdannes til energi ifoelge E = mc².',
          },
          {
            id: 'nat-vg1-3-2-n-quiz1-q1',
            task: 'Hva er en protostjerne?',
            options: [
              { id: 'a', text: 'En doed stjerne som har sluttet aa skinne', isCorrect: false },
              { id: 'b', text: 'En svart hull som har nettopp dannet seg', isCorrect: false },
              { id: 'c', text: 'En varm gasskule der fusjon ennaa ikke har startet', isCorrect: true },
              { id: 'd', text: 'En stjerne som eksploderer som supernova', isCorrect: false },
            ],
            solution:
              'En protostjerne er et tidlig stadium i stjernedannelsen. Gassen har trukket seg sammen og blitt varm, men kjernetemperaturen har ennaa ikke naadd de 10 millioner gradene som trengs for aa starte hydrogenfusjon.',
          },
          {
            id: 'nat-vg1-3-2-n-quiz1-q2',
            task: 'Hvorfor skjer fusjon bare i stjernekjerner?',
            options: [
              { id: 'a', text: 'Fordi bare stjerner inneholder hydrogen', isCorrect: false },
              { id: 'b', text: 'Fordi bare i stjernekjerner er temperaturen og trykket hoeyt nok', isCorrect: true },
              { id: 'c', text: 'Fordi stjerner er laget av spesielle materialer', isCorrect: false },
              { id: 'd', text: 'Fordi gravitasjonen stopper fusjon andre steder', isCorrect: false },
            ],
            solution:
              'Fusjon krever ekstremt hoey temperatur (over 10 millioner grader) og hoeyt trykk for aa overvinne frastoetningen mellom positivt ladde atomkjerner. Bare i stjernekjerner, der gravitasjonen komprimerer enorme mengder gass, er disse forholdene oppfylt.',
          },
          {
            id: 'nat-vg1-3-2-n-quiz1-q3',
            task: 'I hvilken rekkefoelge dannes en stjerne?',
            options: [
              { id: 'a', text: 'Protostjerne → gasssky → hovedserien → rod kjempe', isCorrect: false },
              { id: 'b', text: 'Gasssky → kollaps → protostjerne → fusjon starter', isCorrect: true },
              { id: 'c', text: 'Supernova → gasssky → protostjerne → fusjon starter', isCorrect: false },
              { id: 'd', text: 'Hvit dverg → gasssky → protostjerne → fusjon starter', isCorrect: false },
            ],
            solution:
              'Stjernedannelse starter med en gasssky (nebula) som begynner aa trekke seg sammen under gravitasjon. Skyen fragmenterer, sentrum blir tettere og varmere (protostjerne), og naar kjernetemperaturen naar ca. 10 millioner grader, starter fusjon.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-3-2-n-section2',
      type: 'text',
      content: `## Livets faser og doedens drama

Naar fusjon har startet, gaar en stjerne inn i sin lengste og mest stabile fase: **hovedserien**. Her fusjonerer hydrogen til helium i kjernen, og stjernen er i likevekt mellom gravitasjon (som presser innover) og straalingstrykk fra fusjonen (som presser utover). Denne fasen varer ca. 90 % av stjernens liv. Solen har vaert paa hovedserien i 4,6 milliarder aar og vil bli der i ca. 5 milliarder aar til.

Men drivstoffet tar slutt. Naar hydrogenet i kjernen er brukt opp, begynner dramaet. Kjernen trekker seg sammen og blir varmere, og helium begynner aa fusjonere til karbon. De ytre lagene utvider seg enormt og kjoeles ned -- stjernen blir en **roed kjempe** (eller en roed superkjempe for de stoerste stjernene), med en radius som kan oeke 100 til 1000 ganger.

Her skiller veiene seg, og det er massen som avgjoer skjebnen.

**Smaa stjerner** (under ca. 8 solmasser, inkludert solen) doer rolig. De ytre lagene blaases av som en vakker **planetarisk taake**, og den kompakte kjernen blir igjen som en **hvit dverg** -- en doed stjerne paa stoerrelse med jorda, men med solens masse. Hvite dverger kjoeles gradvis ned over milliarder av aar.

**Store stjerner** (over ca. 8 solmasser) har et langt mer dramatisk endelikt. Fusjon fortsetter trinn for trinn: karbon til oksygen, oksygen til neon, neon til magnesium, magnesium til silisium, og til slutt silisium til jern. Men her stopper det. Jern har den mest stabile kjernen -- fusjon til tyngre grunnstoffer *krever* energi i stedet for aa frigjore den. Kjernen kollapser katastrofalt, og stjernen eksploderer i en **supernova** -- en eksplosjon saa kraftig at den kort kan skinne sterkere enn en hel galakse. Det som blir igjen er enten en **noeyttronstjerne** eller, for de aller stoerste stjernene, et **svart hull**.

Et fascinerende paradoks: massive stjerner har mye mer drivstoff, men de bruker det saa mye raskere at de lever *kortere*. En stjerne med 10 solmasser lever kanskje bare 30 millioner aar -- 300 ganger kortere enn solen.`,
    },
    {
      id: 'nat-vg1-3-2-n-section3',
      type: 'text',
      content: `## Vi er stjernestøv

Stjerner er universets «kjemiske fabrikker». Gjennom fusjon lager de stadig tyngre grunnstoffer: hydrogen blir til helium, helium til karbon (i roede kjemper, gjennom den saakalte trippel-alfa-prosessen), og i massive stjerner fortsetter kjeden via oksygen, neon, magnesium og silisium helt opp til jern.

Men hva med grunnstoffer *tyngre* enn jern, som gull og uran? De dannes i supernovaeksplosjoner! Den enorme energien i en supernova driver fusjon forbi jern-barrieren og skaper alle de tyngste grunnstoffene. Derfor er disse grunnstoffene saa sjeldne.

Tenk over dette: Hydrogenet i vannet du drikker (ca. 10 % av kroppen din) stammer direkte fra big bang. Men oksygenet (65 % av kroppen) og karbonet (18 %) ble laget i massive stjerner og roede kjemper. Nitrogenet (3 %) kom fra massive stjerner. Jernet i blodet ditt ble smidd i kjernen til en massiv stjerne som siste trinn foer en supernova. Kalsiumet i skjelettet og fosforet i nervesystemet -- alt ble laget i stjerner.

Du er bokstavelig talt laget av **stjernestøv**. Atomene i kroppen din er milliarder av aar gamle og har en gang vaert inne i hjertet av doende stjerner. Den naeste gangen du ser en stjerne paa himmelen, husk at du er laget av det samme stoffet.`,
    },
    {
      id: 'nat-vg1-3-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa stjernenes livssyklus og nukleosyntese:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-3-2-n-quiz2-q0',
            task: 'Hva avgjoer om en stjerne ender som hvit dverg eller som supernova?',
            options: [
              { id: 'a', text: 'Fargen paa stjernen', isCorrect: false },
              { id: 'b', text: 'Avstanden fra andre stjerner', isCorrect: false },
              { id: 'c', text: 'Massen til stjernen', isCorrect: true },
              { id: 'd', text: 'Alderen paa stjernen', isCorrect: false },
            ],
            solution:
              'Stjernens masse avgjoer skjebnen. Smaa stjerner (under ca. 8 solmasser) ender som hvite dverger. Store stjerner (over ca. 8 solmasser) eksploderer som supernovaer og etterlater noeyttronstjerner eller svarte hull.',
          },
          {
            id: 'nat-vg1-3-2-n-quiz2-q1',
            task: 'Hvorfor stopper fusjon i stjerner ved jern?',
            options: [
              { id: 'a', text: 'Jern er for tungt til aa fusjonere', isCorrect: false },
              { id: 'b', text: 'Jern har den mest stabile kjernen, og fusjon til tyngre grunnstoffer krever energi i stedet for aa frigjore den', isCorrect: true },
              { id: 'c', text: 'Det finnes ikke nok jern i stjerner', isCorrect: false },
              { id: 'd', text: 'Temperaturen i stjernekjernen er for lav for jern-fusjon', isCorrect: false },
            ],
            solution:
              'Jern har den mest stabile atomkjernen. For alle lettere grunnstoffer frigjor fusjon energi, men for aa fusjonere jern til tyngre grunnstoffer maa man tilfore energi. Derfor stopper fusjonskjeden ved jern i vanlige stjerner.',
          },
          {
            id: 'nat-vg1-3-2-n-quiz2-q2',
            task: 'Lever en stjerne med 10 solmasser lenger eller kortere enn solen?',
            options: [
              { id: 'a', text: 'Mye lenger, fordi den har mer drivstoff', isCorrect: false },
              { id: 'b', text: 'Omtrent like lenge', isCorrect: false },
              { id: 'c', text: 'Litt kortere', isCorrect: false },
              { id: 'd', text: 'Mye kortere, fordi den bruker drivstoffet mye raskere', isCorrect: true },
            ],
            solution:
              'Selv om en massiv stjerne har mer drivstoff, bruker den det mye raskere. Energiproduksjonen oeker med massen opphoyed i ca. 3,5. En stjerne med 10 solmasser lever kanskje bare 30 millioner aar -- ca. 300 ganger kortere enn solens 10 milliarder aar.',
          },
          {
            id: 'nat-vg1-3-2-n-quiz2-q3',
            task: 'Hvor ble jernet i blodet ditt dannet?',
            options: [
              { id: 'a', text: 'I big bang', isCorrect: false },
              { id: 'b', text: 'Paa jorda', isCorrect: false },
              { id: 'c', text: 'I kjernen til en massiv stjerne', isCorrect: true },
              { id: 'd', text: 'I solens kjerne', isCorrect: false },
            ],
            solution:
              'Jern dannes som det siste trinnet i fusjonskjeden i de mest massive stjernene. Naar slike stjerner doer i supernovaeksplosjoner, spres jernet ut i rommet og kan bli en del av nye stjerner, planeter -- og til slutt blodet ditt.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-3-2-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du laert om stjernenes livssyklus:

- **Kjernefusjon** er sammenslaaing av lette atomkjerner til tyngre, og frigjor energi ifoelge E = mc². Fusjon krever ekstremt hoey temperatur (over 10 millioner grader) og hoeyt trykk.

- **Stjernedannelse** starter med en gasssky (nebula) som kollapser under gravitasjon, fragmenterer, danner en **protostjerne**, og til slutt tennes naar kjernen naar 10 millioner grader.

- **Hovedserien** er stjernens stabile fase med hydrogenfusjon, som varer ca. 90 % av levetiden. Deretter utvikler stjernen seg til en **roed kjempe** naar hydrogenet er brukt opp.

- **Stjernens skjebne** avhenger av massen: smaa stjerner (under 8 solmasser) ender som **hvite dverger**, mens store stjerner eksploderer som **supernovaer** og etterlater **noeyttronstjerner** eller **svarte hull**.

- **Nukleosyntese i stjerner** skaper grunnstoffer opp til jern. Grunnstoffer tyngre enn jern dannes kun i supernovaeksplosjoner. Vi er bokstavelig talt laget av **stjernestøv**.

- **Masse bestemmer levetid**: jo stoerre masse, jo kortere liv, fordi drivstoffet brukes raskere.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.3 NARRATIV: Galakser og universets struktur
// ============================================================================

export const CHAPTER_NAT_VG1_3_3_NARRATIV: TextbookChapter = {
  id: 'nat-vg1-3-3-narrativ',
  courseId: 'nat-vg1',
  chapterNumber: '3.3',
  title: 'Galakser og universets struktur',
  subtitle: 'Narrativ versjon',
  description:
    'En reise gjennom kosmisk geografi -- fra vaar egen Melkevei til det kosmiske vevet av galakser som strekker seg over milliarder av lysaar.',
  estimatedMinutes: 40,
  competenceGoals: [
    'beskrive big bang-teorien om hvordan universet har oppstått og utviklet seg',
  ],
  linkedChapterId: 'nat-vg1-3-3',
  content: [
    {
      id: 'nat-vg1-3-3-n-intro',
      type: 'text',
      content: `## Stjernebyer i rommet

Naar du er langt fra byens lys paa en klar natt, kan du se et svakt lysende baand som strekker seg over himmelen. Det er **Melkeveien** -- vaar egen galakse sett fra innsiden. Men Melkeveien er bare en av anslagsvis **200 milliarder galakser** i det observerbare universet!

En **galakse** er en enorm samling av stjerner, gass, stoev og moerk materie, holdt sammen av gravitasjon. Du kan tenke paa galakser som «oeyer» av materie i det enorme, nesten tomme rommet mellom dem. Vaar galakse, Melkeveien, inneholder ca. **200-400 milliarder stjerner** og har en diameter paa ca. **100 000 lysaar**. Solen ligger 26 000 lysaar fra sentrum, i en mindre arm kalt Orion-armen, og bruker ca. 230 millioner aar paa en omdreining.

Men foer vi utforsker galaksene, maa vi forstaa hvordan vi maaler de enorme avstandene i universet. Vanlige enheter som kilometer blir fullstendig upraktiske. Avstanden til naermeste stjerne er for eksempel 40 000 000 000 000 km. Det er ikke akkurat lett aa jobbe med.`,
    },
    {
      id: 'nat-vg1-3-3-n-section1',
      type: 'text',
      content: `## Lysaar -- universets meterstokk

Et **lysaar** er avstanden lys reiser paa ett aar. Merk: det er en *avstandsenhet*, ikke en tidsenhet! Lyset beveger seg med ca. **300 000 km/s** -- det raskeste i universet. Paa ett aar rekker det aa tilbakelegge ca. **9,5 billioner kilometer** (9,46 x 10¹² km).

For aa sette dette i perspektiv: lyset fra solen bruker ca. 8,3 minutter paa aa naa jorda (avstanden er 150 millioner km). Maanens lys er bare 1,3 sekunder gammelt naar det treffer oeyene dine. Men lyset fra **Proxima Centauri**, den naermeste stjernen utenfor solsystemet, er 4,2 aar gammelt. Og lyset fra **Andromeda-galaksen** har reist i 2,5 millioner aar foer det naar oss.

Dette betyr noe fascinerende: naar du ser paa Andromeda med et teleskop, ser du den slik den saa ut da menneskets forfedre nettopp hadde begynt aa gaa oppreist. Jo lenger bort vi ser i rommet, jo lenger tilbake i tid ser vi. Teleskoper er faktisk *tidsmaskiner*.

Selv med vaare raskeste romsonder (ca. 60 000 km/t) ville en reise til Proxima Centauri ta over 70 000 aar. De kosmiske avstandene er nesten ufattelig store.`,
    },
    {
      id: 'nat-vg1-3-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa lysaar og kosmiske avstander:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-3-3-n-quiz1-q0',
            task: 'Hva er et lysaar?',
            options: [
              { id: 'a', text: 'Tiden det tar lyset aa naa oss fra en stjerne', isCorrect: false },
              { id: 'b', text: 'Avstanden lys reiser paa ett aar, ca. 9,5 billioner km', isCorrect: true },
              { id: 'c', text: 'Lysstyrken til en stjerne maalt over ett aar', isCorrect: false },
              { id: 'd', text: 'Antall lysstraaler en stjerne sender ut per aar', isCorrect: false },
            ],
            solution:
              'Et lysaar er en avstandsenhet -- avstanden lys tilbakelegger paa ett aar. Med lysets hastighet paa ca. 300 000 km/s blir dette ca. 9,5 billioner kilometer.',
          },
          {
            id: 'nat-vg1-3-3-n-quiz1-q1',
            task: 'Naar vi ser paa Andromeda-galaksen (2,5 millioner lysaar unna), hva ser vi da?',
            options: [
              { id: 'a', text: 'Galaksen slik den er akkurat naa', isCorrect: false },
              { id: 'b', text: 'Galaksen slik den saa ut for 2,5 millioner aar siden', isCorrect: true },
              { id: 'c', text: 'Galaksen slik den vil se ut om 2,5 millioner aar', isCorrect: false },
              { id: 'd', text: 'Et speilbilde av vaar egen galakse', isCorrect: false },
            ],
            solution:
              'Lyset fra Andromeda har brukt 2,5 millioner aar paa reisen til oss. Derfor ser vi galaksen slik den saa ut for 2,5 millioner aar siden. Jo lenger bort vi ser, jo lenger tilbake i tid ser vi.',
          },
          {
            id: 'nat-vg1-3-3-n-quiz1-q2',
            task: 'Hvor lang tid bruker lyset fra solen paa aa naa jorda?',
            options: [
              { id: 'a', text: 'Ca. 1 sekund', isCorrect: false },
              { id: 'b', text: 'Ca. 8 minutter', isCorrect: true },
              { id: 'c', text: 'Ca. 1 time', isCorrect: false },
              { id: 'd', text: 'Ca. 4,2 aar', isCorrect: false },
            ],
            solution:
              'Avstanden fra solen til jorda er ca. 150 millioner km. Med lysets hastighet paa 300 000 km/s tar det 150 000 000 / 300 000 = 500 sekunder, som er ca. 8 minutter og 20 sekunder.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-3-3-n-section2',
      type: 'text',
      content: `## Galaksenes mange former

Galakser kommer i flere hovedtyper, og de ser forbausende forskjellige ut.

**Spiralgalakser** er de vakreste og utgjor ca. 70 % av alle galakser. De har flate skiver med elegante spiralarmer som vinder seg utover fra sentrum. I armene finner vi mye gass og stoev, og det er her nye stjerner dannes -- de unge, blaaa stjernene lyser opp armene. I sentrum er det en bule (bulge) med eldre stjerner. Melkeveien er en **stavspiralgalakse** -- en spiralgalakse med en sentral «stav» av stjerner. Sett ovenfra ville du se fire hovedarmer, og solen befinner seg i den mindre Orion-armen, 26 000 lysaar fra sentrum. Sett fra siden er skiven bare ca. 1000 lysaar tykk, med en sentral bule paa ca. 10 000 lysaar i diameter. **Andromeda** (M31), 2,5 millioner lysaar unna, er en annen beroemd spiralgalakse.

**Elliptiske galakser** utgjor ca. 20 %. De er kuleformede til avlange, med hovedsakelig gamle, roede stjerner. De inneholder lite gass og stoev, saa det skjer lite stjernedannelse. De varierer enormt i stoerrelse -- fra smaa dvergelliptiske til gigantiske galakser stoerre enn noen spiralgalakse. De er trolig dannet fra galaksekollisjoner.

**Irregulaere galakser** utgjor ca. 10 % og har ingen bestemt form. De er ofte forstyrret av gravitasjonen fra naerliggende galakser. De magellanske skyene, synlige fra den soerlige halvkulen, er et godt eksempel.

Det finnes ogsaa **linseformede galakser** (S0), som er en mellomform med skive men uten tydelige spiralarmer.`,
    },
    {
      id: 'nat-vg1-3-3-n-section3',
      type: 'text',
      content: `## Universets kosmiske vev

Galaksene er ikke tilfeldig stroeedd utover rommet. De organiserer seg i stadig stoerre strukturer, som russiske babushka-dukker.

Foerst har vi **galaksegrupper** -- smaa samlinger av 3 til 50 galakser holdt sammen av gravitasjon. Melkeveien tilhoerer **Den lokale gruppen**, som ogsaa inneholder Andromeda-galaksen og ca. 80 mindre galakser. Gruppen strekker seg over 5-10 millioner lysaar.

Saa har vi **galaksehoper** -- hundrevis til tusenvis av galakser samlet. **Virgohopen**, ca. 65 millioner lysaar unna, inneholder ca. 1500 galakser og strekker seg over 10-30 millioner lysaar.

Over dette igjen finner vi **superhoper** -- samlinger av galaksehoper. Vaar superhop heter **Laniakea** og inneholder ca. 100 000 galakser spredt over 500 millioner lysaar.

Men den aller stoerste strukturen er det **kosmiske vevet**. Superhopene danner lange **filamenter** -- traader av galakser som strekker seg hundrevis av millioner lysaar gjennom rommet. Der filamentene moetes, finner vi de stoerste konsentrasjonene av galakser. Mellom filamentene er det enorme **tomrom** (voids), nesten tomme regioner med typisk diameter paa 100-300 millioner lysaar. Hele universet ligner et tredimensjonalt edderkoppnett eller en svamp.

Denne strukturen stammer fra smaa tetthetsvariasjoner i det tidlige universet. Omraader med litt mer materie tiltrakk mer materie over tid gjennom gravitasjon og ble til filamenter, mens omraader med mindre materie ble til tomrom. Store kartleggingsprosjekter som **Sloan Digital Sky Survey** har bekreftet dette bildet ved aa maale posisjoner og avstander til millioner av galakser.`,
    },
    {
      id: 'nat-vg1-3-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa galaksetyper og universets struktur:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-3-3-n-quiz2-q0',
            task: 'Hvilken type galakse er Melkeveien?',
            options: [
              { id: 'a', text: 'Elliptisk galakse', isCorrect: false },
              { id: 'b', text: 'Irregulaer galakse', isCorrect: false },
              { id: 'c', text: 'Stavspiralgalakse', isCorrect: true },
              { id: 'd', text: 'Linseformet galakse', isCorrect: false },
            ],
            solution:
              'Melkeveien er en stavspiralgalakse -- en spiralgalakse med en sentral «stav» av stjerner. Den har fire hovedarmer og en diameter paa ca. 100 000 lysaar.',
          },
          {
            id: 'nat-vg1-3-3-n-quiz2-q1',
            task: 'Hva er riktig rekkefoelge fra minst til stoerst?',
            options: [
              { id: 'a', text: 'Galakse → galaksehop → galaksegruppe → superhop', isCorrect: false },
              { id: 'b', text: 'Galakse → galaksegruppe → galaksehop → superhop', isCorrect: true },
              { id: 'c', text: 'Galaksegruppe → galakse → superhop → galaksehop', isCorrect: false },
              { id: 'd', text: 'Superhop → galaksehop → galaksegruppe → galakse', isCorrect: false },
            ],
            solution:
              'Hierarkiet er: galakse (f.eks. Melkeveien, 100 000 lysaar) → galaksegruppe (3-50 galakser, 5-10 mill. lysaar) → galaksehop (hundrevis-tusenvis, 10-30 mill. lysaar) → superhop (samlinger av hoper, 500 mill. lysaar).',
          },
          {
            id: 'nat-vg1-3-3-n-quiz2-q2',
            task: 'Hva er det kosmiske vevet?',
            options: [
              { id: 'a', text: 'Et nettverk av internettkabler i rommet', isCorrect: false },
              { id: 'b', text: 'Stoerrelsen paa det observerbare universet', isCorrect: false },
              { id: 'c', text: 'Nettverksstrukturen av filamenter og tomrom der galaksene er fordelt', isCorrect: true },
              { id: 'd', text: 'Den kosmiske bakgrunnsstaalingen', isCorrect: false },
            ],
            solution:
              'Det kosmiske vevet er den storskala-strukturen i universet, der galakser er fordelt i lange filamenter (traader) med enorme tomrom mellom. Strukturen ligner et tredimensjonalt edderkoppnett og stammer fra smaa tetthetsvariasjoner i det tidlige universet.',
          },
          {
            id: 'nat-vg1-3-3-n-quiz2-q3',
            task: 'Hva kjennetegner elliptiske galakser?',
            options: [
              { id: 'a', text: 'De har spiralarmer med aktiv stjernedannelse', isCorrect: false },
              { id: 'b', text: 'De er kuleformede med hovedsakelig gamle, roede stjerner og lite stjernedannelse', isCorrect: true },
              { id: 'c', text: 'De har ingen bestemt form og er forstyrret av andre galakser', isCorrect: false },
              { id: 'd', text: 'De er alltid smaa dvergalakser', isCorrect: false },
            ],
            solution:
              'Elliptiske galakser er kule- til avlange, dominert av gamle, roede stjerner. De inneholder lite gass og stoev, saa det skjer lite ny stjernedannelse. De varierer fra smaa dvergelliptiske til gigantiske galakser og er trolig dannet fra galaksekollisjoner.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-3-3-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du laert om galakser og universets struktur:

- Et **lysaar** er avstanden lys reiser paa ett aar -- ca. 9,5 billioner kilometer. Naar vi ser langt ut i rommet, ser vi ogsaa langt tilbake i tid.

- **Melkeveien** er vaar galakse med 200-400 milliarder stjerner, en diameter paa 100 000 lysaar, og solen 26 000 lysaar fra sentrum.

- Galakser finnes i tre hovedtyper: **spiralgalakser** (70 %, med spiralarmer og aktiv stjernedannelse), **elliptiske galakser** (20 %, kuleformede med gamle stjerner), og **irregulaere galakser** (10 %, uten bestemt form).

- Universet har en **hierarkisk struktur**: stjerner → galakser → galaksegrupper (3-50 stk) → galaksehoper (hundrevis-tusenvis) → superhoper → det kosmiske vevet.

- Det **kosmiske vevet** er nettverksstrukturen av filamenter og tomrom som galaksene er fordelt i, dannet fra tetthetsvariasjoner i det tidlige universet.

- Det observerbare universet inneholder anslagsvis **200 milliarder galakser**, og Andromeda er vaar naermeste store nabogalakse, 2,5 millioner lysaar unna.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.4 NARRATIV: Observasjoner som stoetter big bang
// ============================================================================

export const CHAPTER_NAT_VG1_3_4_NARRATIV: TextbookChapter = {
  id: 'nat-vg1-3-4-narrativ',
  courseId: 'nat-vg1',
  chapterNumber: '3.4',
  title: 'Observasjoner som støtter big bang',
  subtitle: 'Narrativ versjon',
  description:
    'Hvorfor big bang ikke bare er en ide, men en av de best testede teoriene i vitenskap -- fortalt gjennom tre bemerkelsesverdige oppdagelser.',
  estimatedMinutes: 40,
  competenceGoals: [
    'beskrive big bang-teorien om hvordan universet har oppstått og utviklet seg, og gjøre rede for observasjoner som støtter denne teorien',
  ],
  linkedChapterId: 'nat-vg1-3-4',
  content: [
    {
      id: 'nat-vg1-3-4-n-intro',
      type: 'text',
      content: `## Vitenskap, ikke spekulasjon

Big bang hoeres kanskje ut som science fiction, men det er alt annet enn det. Big bang er en **vitenskapelig teori** -- og det betyr noe helt annet enn det hverdagslige ordet «teori». I dagligtale kan «teori» bety en gjetning eller en ide. I vitenskap betyr det en velproevd forklaring stoettet av omfattende bevis, som gjoer testbare forutsigelser og i prinsippet kan motbevises.

Big bang-teorien har bestaaatt alle tester med glans. Tre uavhengige hovedbevis peker alle i samme retning: universet startet fra et ekstremt tett og varmt punkt for ca. 13,8 milliarder aar siden og har utvidet seg siden. La oss utforske hvert av dem.`,
    },
    {
      id: 'nat-vg1-3-4-n-section1',
      type: 'text',
      content: `## Bevis 1: Universet utvider seg

I 1929 gjorde den amerikanske astronomen **Edwin Hubble** en oppsiktsvekkende oppdagelse: fjerne galakser beveger seg bort fra oss, og jo lenger unna de er, jo raskere beveger de seg bort!

Hvordan visste han det? Svaret er **roedforskyvning**. Du kjenner kanskje Doppler-effekten fra lyd: naar en ambulanse kjoerer mot deg, hoeres sirenen hoeyere ut, og naar den kjoerer bort, blir den dypere. Lydboelgene komprimeres naar kilden naermer seg, og strekkes naar den fjerner seg.

Det samme skjer med lys. Naar en lyskilde beveger seg bort fra oss, strekkes lysboelgene til lengre boelgelengder -- altsaa mot roedt. Vi kaller dette **roedforskyvning**. For fjerne galakser er det faktisk enda mer dramatisk: det er ikke galaksen som beveger seg gjennom rommet, men selve rommet mellom oss og galaksen som utvider seg og strekker lyset.

Hubble formulerte dette som en lov: **v = H₀ x d**, der v er hastigheten galaksen beveger seg bort, d er avstanden, og H₀ er Hubble-konstanten (ca. 70 km/s per megaparsec). En galakse dobbelt saa langt unna beveger seg dobbelt saa fort bort. Trippelt saa langt, trippelt saa fort.

Vi maaler roedforskyvning ved aa studere **spektrallinjer** -- lys fra spesifikke grunnstoffer i galaksen. Linjene forskyves mot roedt sammenlignet med laboratoriemalinger.

Konsekvensen er enorm: hvis vi «spoler filmen tilbake», var universet mindre og tettere i fortiden. Langt nok tilbake var alt samlet i ett punkt -- big bang!`,
    },
    {
      id: 'nat-vg1-3-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa universets utvidelse og roedforskyvning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-3-4-n-quiz1-q0',
            task: 'Hva er roedforskyvning?',
            options: [
              { id: 'a', text: 'At stjerner blir roedere naar de er gamle', isCorrect: false },
              { id: 'b', text: 'At lysets boelgelengde strekkes til lengre (roedere) boelgelengder naar rommet utvider seg', isCorrect: true },
              { id: 'c', text: 'At galakser ser roede ut fordi de er varme', isCorrect: false },
              { id: 'd', text: 'At lyset absorberes av stoev i rommet', isCorrect: false },
            ],
            solution:
              'Roedforskyvning betyr at lysets boelgelengde strekkes til lengre (roedere) boelgelengder. For fjerne galakser skjer dette fordi rommet mellom oss og galaksen utvider seg og strekker lyset. Jo lenger bort galaksen er, jo mer strekkes lyset.',
          },
          {
            id: 'nat-vg1-3-4-n-quiz1-q1',
            task: 'Hva sier Hubbles lov?',
            options: [
              { id: 'a', text: 'At alle galakser beveger seg mot oss', isCorrect: false },
              { id: 'b', text: 'At universets alder er uendelig', isCorrect: false },
              { id: 'c', text: 'At fjernere galakser beveger seg raskere bort fra oss (v = H₀ x d)', isCorrect: true },
              { id: 'd', text: 'At galakser roterer raskere jo stoerre de er', isCorrect: false },
            ],
            solution:
              'Hubbles lov sier at en galakses hastighet bort fra oss er proporsjonal med avstanden: v = H₀ x d. En galakse dobbelt saa langt unna beveger seg dobbelt saa fort bort. Dette viser at rommet selv utvider seg jevnt overalt.',
          },
          {
            id: 'nat-vg1-3-4-n-quiz1-q2',
            task: 'Galakse A er 100 Mpc unna og beveger seg med 7000 km/s. Galakse B er 200 Mpc unna. Hvor fort beveger galakse B seg bort?',
            options: [
              { id: 'a', text: '7000 km/s', isCorrect: false },
              { id: 'b', text: '3500 km/s', isCorrect: false },
              { id: 'c', text: '14 000 km/s', isCorrect: true },
              { id: 'd', text: '21 000 km/s', isCorrect: false },
            ],
            solution:
              'Ifoelge Hubbles lov er hastigheten proporsjonal med avstanden. Galakse B er dobbelt saa langt unna som galakse A, saa den beveger seg dobbelt saa fort: 2 x 7000 = 14 000 km/s.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-3-4-n-section2',
      type: 'text',
      content: `## Bevis 2: Kosmisk bakgrunnsstraaling

I 1965 opplevde to forskere ved Bell Labs i New Jersey noe merkelig. **Arno Penzias** og **Robert Wilson** testet en sensitiv radiomottaker, men uansett hvilken retning de pekte antennen, fanget de opp en svak stoey. De renset antennen, fjernet dueekskrementer, sjekket alt -- men stoeyen forsvant ikke. Den kom fra *alle retninger* med noeeyaktig samme styrke.

Det de hadde oppdaget -- helt tilfeldig -- var **kosmisk bakgrunnsstraaling** (CMB), det eldste lyset i universet. De fikk Nobelprisen i 1978.

Men hva *er* dette lyset egentlig? Spol 380 000 aar tilbake etter big bang. Universet var saa varmt at elektroner ikke kunne binde seg til atomkjerner. Rommet var fyllt med et tett plasma av frie elektroner og kjerner, og lyset kolliderte konstant med de frie elektronene -- universet var ugjennomsiktig, som tett taake. Saa sank temperaturen til ca. 3000 K, elektroner bandt seg til kjerner, noeytrale atomer dannet seg, og plutselig kunne lyset bevege seg fritt. Universet ble gjennomsiktig, og lyset som ble sluppet loes den dagen har reist gjennom rommet siden.

Opprinnelig var dette lyset oransje-roedt (ca. 3000 K). Men rommet har utvidet seg ca. 1100 ganger siden da, og strekket lyset til mikroboelger med en temperatur paa bare **2,725 K** (-270,4 grader C). CMB er et direkte «babybilde» av universet.

Satellitter som **COBE**, **WMAP** og **Planck** har studert CMB i ekstremt detalj og funnet noe bemerkelsesverdig: staalingen er utrolig jevn, men det finnes *ekstremt smaa* variasjoner -- ca. 30 mikrokelviner (0,00003 K). Litt kaldere omraader var litt tettere, og litt varmere omraader var litt tynnere. Disse smaa tetthetsforskjellene er «froene» som gravitasjonen brukte milliarder av aar paa aa forvandle til galakser, galaksehoper og det kosmiske vevet vi ser i dag.`,
    },
    {
      id: 'nat-vg1-3-4-n-section3',
      type: 'text',
      content: `## Bevis 3: Grunnstoffenes forekomst

Det tredje beviset handler om kjemi paa kosmisk skala. Big bang-teorien gjoer en helt presis forutsigelse: i de foerste minuttene etter big bang, da temperaturen var hoey nok for fusjon, skulle det ha blitt dannet ca. **75 % hydrogen**, **25 % helium**, og smaa spor av deuterium (tungt hydrogen), helium-3 og litium-7 -- og *ingenting tyngre*. Big bang var rett og slett ikke varmt og tett lenge nok. Universet utvidet seg og kjoelte seg ned for raskt til aa lage karbon eller oksygen. Det krevde stabile stjerner som kunne holde materien samlet i milliarder av aar.

Naar vi maaler grunnstoffenes forekomst i de eldste stjernene, i intergalaktisk gass og i fjerne gasskyer, finner vi noeeyaktig den fordelingen big bang forutsier!

Spesielt viktig er **deuterium** (hydrogen med ett ekstra noeyttron). Deuterium er «skjoert» -- det oedelegges i stjerner. Mengden vi observerer i dag kan bare forklares hvis det ble laget i big bang.

Vi kan ogsaa se dette i stjernenes **metallisitet** (i astronomien kalles alle grunnstoffer tyngre enn helium for «metaller»). De aller eldste stjernene (**befolkning II**), som finnes i galaktiske haloer og kulehoper, har nesten bare hydrogen og helium -- svart lav metallisitet. Unge stjerner som solen (**befolkning I**) har hoeyere metallisitet fordi de er dannet av gass beriket av mange generasjoner supernovaer. Moenesteret viser at tunge grunnstoffer bygges opp over tid, akkurat som teorien forutsier.`,
    },
    {
      id: 'nat-vg1-3-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-3-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa CMB og grunnstoffenes forekomst:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-3-4-n-quiz2-q0',
            task: 'Hva er kosmisk bakgrunnsstraaling (CMB)?',
            options: [
              { id: 'a', text: 'Lys fra de foerste stjernene', isCorrect: false },
              { id: 'b', text: 'Roentgenstraaling fra svarte hull', isCorrect: false },
              { id: 'c', text: 'Mikroboelgestraaling fra da universet ble gjennomsiktig, 380 000 aar etter big bang', isCorrect: true },
              { id: 'd', text: 'Radioboelger fra fjerne galakser', isCorrect: false },
            ],
            solution:
              'CMB er mikroboelgestraaling som kommer fra alle retninger med en temperatur paa 2,725 K. Den ble frigjort 380 000 aar etter big bang, da universet kjoelte seg nok til at atomer kunne danne seg og lyset kunne bevege seg fritt.',
          },
          {
            id: 'nat-vg1-3-4-n-quiz2-q1',
            task: 'Hvorfor ser vi CMB som mikroboelger i dag, og ikke som synlig lys?',
            options: [
              { id: 'a', text: 'Fordi lyset har mistet energi paa reisen', isCorrect: false },
              { id: 'b', text: 'Fordi universets utvidelse har strekket boelgelengden fra synlig lys til mikroboelger', isCorrect: true },
              { id: 'c', text: 'Fordi stoev i rommet har absorbert det synlige lyset', isCorrect: false },
              { id: 'd', text: 'Fordi det opprinnelig var mikroboelger', isCorrect: false },
            ],
            solution:
              'Opprinnelig var CMB oransje-roedt lys med temperatur ca. 3000 K. Men rommet har utvidet seg ca. 1100 ganger siden da, og strekket lysets boelgelengde tilsvarende -- fra synlig lys til mikroboelger med temperatur 2,725 K.',
          },
          {
            id: 'nat-vg1-3-4-n-quiz2-q2',
            task: 'Hvilken grunnstoffsammensetning forutsier big bang-teorien for det tidlige universet?',
            options: [
              { id: 'a', text: 'Alle grunnstoffene i omtrent lik mengde', isCorrect: false },
              { id: 'b', text: 'Bare jern og nikkel', isCorrect: false },
              { id: 'c', text: 'Ca. 75 % hydrogen, 25 % helium, og spor av litium', isCorrect: true },
              { id: 'd', text: 'Mest karbon og oksygen', isCorrect: false },
            ],
            solution:
              'Big bang-nukleosyntese forutsier at bare de letteste grunnstoffene ble dannet: ca. 75 % hydrogen, ca. 25 % helium, og smaa spor av deuterium og litium. Observasjoner av gammelt materiale bekrefter dette noeyaktig.',
          },
          {
            id: 'nat-vg1-3-4-n-quiz2-q3',
            task: 'Hva forteller metallisiteten i gamle stjerner oss?',
            options: [
              { id: 'a', text: 'At de inneholder mye jern og gull', isCorrect: false },
              { id: 'b', text: 'At de nesten bare bestaar av hydrogen og helium, som stoetter big bang-teoriens forutsigelser', isCorrect: true },
              { id: 'c', text: 'At de er laget av helt andre grunnstoffer enn unge stjerner', isCorrect: false },
              { id: 'd', text: 'At big bang produserte alle grunnstoffene', isCorrect: false },
            ],
            solution:
              'De eldste stjernene (befolkning II) har svart lav metallisitet -- de bestaar nesten bare av hydrogen og helium fra big bang. Unge stjerner har hoeyere metallisitet fordi gassen de dannet seg fra har blitt beriket av mange generasjoner supernovaer. Dette moenesteret stoetter big bang-teorien.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-3-4-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du laert om de tre hovedbevisene for big bang:

- **Bevis 1 -- Universets utvidelse:** Hubble oppdaget i 1929 at fjerne galakser beveger seg bort fra oss med hastighet proporsjonal med avstanden (**Hubbles lov**: v = H₀ x d). **Roedforskyvning** av lyset bekrefter at rommet utvider seg. «Spoler vi tilbake» var alt samlet for 13,8 milliarder aar siden.

- **Bevis 2 -- Kosmisk bakgrunnsstraaling (CMB):** Mikroboelgestraaling fra alle retninger med temperatur 2,725 K, oppdaget tilfeldig av **Penzias og Wilson** i 1965. Det er lyset fra da universet ble gjennomsiktig, 380 000 aar etter big bang, strekket fra synlig lys til mikroboelger av universets utvidelse. Smaa variasjoner i CMB er froene til galaksene.

- **Bevis 3 -- Grunnstoffenes forekomst:** Big bang forutsier ca. 75 % hydrogen, 25 % helium og spor av litium -- noeeyaktig det vi observerer i gammelt materiale. **Deuterium** kan bare forklares som big bang-produkt, og gamle stjerners lave **metallisitet** bekrefter at tunge grunnstoffer bygges opp over tid i stjerner.

- Big bang er en **vitenskapelig teori** -- en velproevd forklaring som gjoer testbare forutsigelser og har bestaaatt alle tester. Den er like godt bekreftet som evolusjonsteorien eller gravitasjonsteorien.`,
    },
  ],
  exercises: [],
};

export const NAT_VG1_NARRATIV_DEL3A_CHAPTERS = [
  CHAPTER_NAT_VG1_3_1_NARRATIV,
  CHAPTER_NAT_VG1_3_2_NARRATIV,
  CHAPTER_NAT_VG1_3_3_NARRATIV,
  CHAPTER_NAT_VG1_3_4_NARRATIV,
];
