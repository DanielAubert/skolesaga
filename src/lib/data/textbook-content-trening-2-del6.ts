/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Treningslare 2 (VG3) - Seksjon 6: Skadeforebygging
 *
 * Utvider Kapittel 6 til 5 delkapitler (6.1-6.5)
 * Dekker LK20-kompetansemaal for treningslare 2
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 6.1: Skadetyper i idrett
// ============================================================================

export const CHAPTER_TRENING_2_6_1: TextbookChapter = {
  id: 'trening-2-6-1',
  courseId: 'trening-2',
  chapterNumber: '6.1',
  title: 'Skadetyper i idrett',
  description: 'Oversikt over akutte skader og belastningsskader, samt skader i muskler, sener og ledd.',
  estimatedMinutes: 20,
  competenceGoals: [
    'skille mellom akutte skader og belastningsskader',
    'beskrive de vanligste skadetypene i muskler, sener og ledd',
    'forklare mekanismene bak ulike idrettsskader',
  ],
  content: [
    {
      id: 'tr2-6-1-intro',
      type: 'text',
      content: `# Skadetyper i idrett

Skader er en uunngaelig del av idretten, men med god kunnskap om skadetyper og skademekanismer kan vi redusere risikoen betydelig. For trenere, utovere og helsepersonell er det viktig a forstaa hvilke strukturer som kan skades, hvordan skadene oppstaar, og hva som skiller ulike skadekategorier fra hverandre.

I dette kapittelet gaar vi gjennom hovedinndelingen av idrettsskader og ser naermere paa de vanligste skadetypene som rammer muskler, sener og ledd. Denne kunnskapen danner grunnlaget for resten av seksjonen om skadeforebygging og rehabilitering.`,
    },
    {
      id: 'tr2-6-1-def-akutt',
      type: 'definition',
      title: 'Akutt skade',
      content: 'En akutt skade oppstaar plutselig som folge av en enkelthendelse, for eksempel et fall, en kollisjon eller en feilbelastning. Akutte skader kjennetegnes av en tydelig skademekanisme og umiddelbar smerte. Eksempler er ankelforstuing, korsbandskade, muskelstrekk og brudd.',
    },
    {
      id: 'tr2-6-1-def-belastning',
      type: 'definition',
      title: 'Belastningsskade (overbruksskade)',
      content: 'En belastningsskade utvikler seg gradvis over tid som folge av gjentatt mekanisk paakjenning paa vev. Vevet brytes ned raskere enn det rekker a reparere seg, noe som forer til kronisk smerte og nedsatt funksjon. Eksempler er senebetennelse (tendinopati), loperekne, tretthetsbrudd og skinnebeinsplager.',
    },
    {
      id: 'tr2-6-1-text-sammenligning',
      type: 'text',
      title: 'Sammenligning av akutte skader og belastningsskader',
      content: `Det er viktig a skille mellom akutte skader og belastningsskader fordi behandlingen og forebyggingen er ulik:

**Akutte skader**
- Oppstaar plutselig ved en bestemt hendelse
- Klar skademekanisme (fall, kollisjon, vridning)
- Umiddelbar smerte og ofte hevelse
- Kan vaere vanskelig a forebygge fullstendig
- Behandles med akutttiltak og deretter rehabilitering

**Belastningsskader**
- Utvikler seg gradvis over dager, uker eller maaneder
- Ingen enkelt skadehendelse a peke paa
- Smerten oker gradvis og kan komme og gaa
- Kan forebygges gjennom smart treningsplanlegging
- Behandles med treningsjustering, hvile og progressiv belastning

I norsk idrett viser studier at belastningsskader staar for omtrent halvparten av alle registrerte skader, men de er ofte underrapportert fordi utovere fortsetter a trene med smerter.`,
    },
    {
      id: 'tr2-6-1-text-muskelskader',
      type: 'text',
      title: 'Muskelskader',
      content: `Muskelskader er blant de vanligste idrettsskadene og kan variere fra milde forstyrrelser til komplette rupturer.

**Grad 1 - Mild muskelstrekk (forstrekning)**
- Mindre fibreskader i muskelen
- Lokal smerte ved aktivitet
- Liten eller ingen kraftnedsettelse
- Normalt 1-3 ukers restitusjon

**Grad 2 - Moderat muskelstrekk (delvis ruptur)**
- Betydelig skade paa muskelfibre
- Tydelig smerte, hevelse og blaalig misfarging
- Merkbar kraftnedsettelse
- Normalt 3-8 ukers restitusjon

**Grad 3 - Alvorlig muskelstrekk (total ruptur)**
- Fullstendig avrivning av muskelen
- Intens smerte og ofte en folelbar grop i muskelen
- Betydelig funksjonsnedsettelse
- Kan kreve kirurgi, 3-6 maaneders restitusjon

De vanligste muskelskadene i idrett rammer hamstringsmuskulaturen (bakside lar), quadriceps (framside lar) og leggmuskulaturen. Muskelskader oppstaar oftest under eksentrisk muskelarbeid, det vil si naar muskelen forlenges under belastning.`,
    },
    {
      id: 'tr2-6-1-def-eksentrisk',
      type: 'definition',
      title: 'Eksentrisk muskelarbeid',
      content: 'Eksentrisk muskelarbeid er naar en muskel aktiveres mens den forlenges. Dette skjer for eksempel i hamstrings naar du bremser opp under loping, eller i quadriceps naar du gaar nedover trapper. Eksentrisk belastning genererer store krefter i muskelen og er den vanligste mekanismen for akutte muskelskader.',
    },
    {
      id: 'tr2-6-1-text-seneskader',
      type: 'text',
      title: 'Seneskader',
      content: `Sener er den sterke bindevevsstrukturen som forbinder muskler med bein. Seneskader er svart vanlige i idrett, saerlig hos utovere som driver med mye hopping, loping eller kasting.

**Tendinopati (seneskade)**

Tendinopati er en samlebetegnelse for kroniske seneplager. Tidligere brukte man begrepet tendinitt (senebetennelse), men forskning har vist at det sjelden foreligger en aktiv betennelsesprosess. I stedet ser man degenerative forandringer i senevevet.

Vanlige tendinopatier i idrett:
- **Patellar tendinopati (hopperens kne):** Smerte i senen under kneskjellen, vanlig hos volleyballspillere og basketballspillere
- **Akillestendinopati:** Smerte i akillessenen, vanlig hos lopere og ballspillere
- **Lateral epikondylopati (tennisalbue):** Smerte paa utsiden av albuen, vanlig i racketsport

**Seneruptur**

En akutt avrivning av senen kan skje i svekket senevev eller ved ekstrem belastning. Akillesseneruptur er den vanligste og rammer ofte mannlige utovere mellom 30 og 50 aar.

**Kjennetegn ved tendinopati:**
- Smerte ved belastning, bedring i hvile
- Stivhet om morgenen
- Gradvis forverring uten behandling
- Kan pavirke prestasjonen betydelig`,
    },
    {
      id: 'tr2-6-1-text-leddskader',
      type: 'text',
      title: 'Leddskader',
      content: `Leddskader omfatter skader paa leddbaaand, leddbrusk, menisker og leddkapsel. Disse skadene kan vaere baade akutte og kroniske.

**Leddbaaandskader**

Leddbaaand stabiliserer leddene og hindrer unormale bevegelser. Skader graderes paa samme maate som muskelskader:
- **Grad 1:** Lett overtoyning, intakte fibre
- **Grad 2:** Delvis ruptur med moderat instabilitet
- **Grad 3:** Fullstendig ruptur med tydelig instabilitet

De vanligste leddbaaandskadene i idrett:
- **Laterale ankelbaaand:** Den aller vanligste akutte idrettsskaden (ankelovertramping)
- **Fremre korsbaaand (ACL):** Alvorlig kneskade, vanlig i fotball, handball og alpint
- **Innvendig sidebaaand i kneet (MCL):** Vanlig i kontaktidretter

**Bruskskader**

Leddbrusk dekker leddflater og gir friksjonsfri bevegelse. Bruskskader kan oppstaa akutt eller som folge av langvarig belastning. Brusk har svart begrenset evne til selvhelbredelse fordi den mangler blodforsyning.

**Meniskskader**

Meniskene i kneleddet fungerer som stotdempere og stabilisatorer. Meniskskader oppstaar oftest ved vridningsbevegelser i kneet med foten i bakken.`,
    },
    {
      id: 'tr2-6-1-example-oversikt',
      type: 'example',
      title: 'Klassifisering av skader i en fotballkamp',
      problem: 'Under en fotballkamp observerer du folgende situasjoner. Klassifiser hver skade som akutt eller belastningsskade, og identifiser hvilken struktur som er skadet.',
      solution: `**Situasjon 1:** En spiller vrider ankelen paa en ujevnhet i banen og faar umiddelbar hevelse.
- Type: Akutt skade
- Struktur: Leddbaaand (laterale ankelbaaand)

**Situasjon 2:** En spiller har hatt gradvis okende smerte under kneskjellen de siste 3 ukene.
- Type: Belastningsskade
- Struktur: Sene (patellar tendinopati / hopperens kne)

**Situasjon 3:** En spiller sprinter etter ballen og faar et plutselig stikk i bakside lar.
- Type: Akutt skade
- Struktur: Muskel (hamstrings muskelstrekk)

**Situasjon 4:** Keeperen har kronisk smerte i skulderen etter mange aars kasting.
- Type: Belastningsskade
- Struktur: Sene/leddkapsel (skulder tendinopati)`,
    },
    {
      id: 'tr2-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr2-6-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva kjennetegner en belastningsskade i motsetning til en akutt skade?',
        options: [
          { id: 'a', text: 'Den oppstaar plutselig ved en tydelig hendelse', isCorrect: false },
          { id: 'b', text: 'Den utvikler seg gradvis over tid paa grunn av gjentatt belastning', isCorrect: true },
          { id: 'c', text: 'Den rammer kun muskler og aldri sener', isCorrect: false },
          { id: 'd', text: 'Den krever alltid kirurgisk behandling', isCorrect: false },
        ],
        solution: 'En belastningsskade utvikler seg gradvis over tid som folge av gjentatt mekanisk paakjenning paa vev. Det er ingen enkelt skadehendelse, men vevet brytes ned raskere enn det rekker a reparere seg. Eksempler er tendinopati, tretthetsbrudd og skinnebeinsplager.',
      },
    },
    {
      id: 'tr2-6-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr2-6-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvilken type muskelarbeid er mest forbundet med akutte muskelskader?',
        options: [
          { id: 'a', text: 'Konsentrisk muskelarbeid (muskelen forkortes)', isCorrect: false },
          { id: 'b', text: 'Isometrisk muskelarbeid (muskelen holder seg i ro)', isCorrect: false },
          { id: 'c', text: 'Eksentrisk muskelarbeid (muskelen forlenges under belastning)', isCorrect: true },
          { id: 'd', text: 'Isokinetisk muskelarbeid (konstant hastighet)', isCorrect: false },
        ],
        solution: 'Eksentrisk muskelarbeid, der muskelen forlenges mens den er aktivert, genererer store krefter og er den vanligste mekanismen for akutte muskelskader. Typiske eksempler er hamstringsskader under akselerasjon og leggskader ved avhopp.',
      },
    },
    {
      id: 'tr2-6-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr2-6-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Gjor rede for de tre gradene av muskelskader. Beskriv symptomer, alvorlighetsgrad og forventet restitusjonstid for hver grad.',
        solution: 'Grad 1 (mild forstrekning): Mindre fibreskader med lokal smerte ved aktivitet og liten kraftnedsettelse. Restitusjon paa 1-3 uker. Grad 2 (moderat, delvis ruptur): Betydelig skade paa muskelfibre med tydelig smerte, hevelse, blaalig misfarging og merkbar kraftnedsettelse. Restitusjon paa 3-8 uker. Grad 3 (alvorlig, total ruptur): Fullstendig avrivning med intens smerte, folelbar grop i muskelen og betydelig funksjonsnedsettelse. Kan kreve kirurgi med 3-6 maaneders restitusjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-6-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr2-6-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hva tendinopati er, og hvorfor begrepet tendinitt (senebetennelse) ikke lenger er helt dekkende.',
        solution: 'Tendinopati er en samlebetegnelse for kroniske seneplager. Begrepet tendinitt (senebetennelse) er misvisende fordi forskning har vist at det sjelden foreligger en aktiv betennelsesprosess i kronisk smertefulle sener. I stedet finner man degenerative forandringer i senevevet, med uorganisert kollagen og okt forekomst av blodkar og nerver. Behandlingen rettes derfor mot a stimulere senevevet til reparasjon gjennom progressiv belastning, fremfor tradisjonell betennelsesdempende behandling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-6-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr2-6-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'En basketballspiller har faat diagnostisert en grad 2 skade i det fremre korsbaaandet (ACL). Forklar hva dette betyr, hvilken funksjon ACL har, og hvorfor denne skaden er saa alvorlig for idrettsutovere.',
        solution: 'Det fremre korsbaaandet (ACL) er et av de viktigste stabiliserende baaandene i kneleddet. Det hindrer leggbeinet i a gli fremover i forhold til laarbeinet, og gir stabilitet ved vridningsbevegelser. En grad 2 skade betyr en delvis ruptur med moderat instabilitet i kneet. ACL-skader er spesielt alvorlige for idrettsutovere fordi: 1) ACL har begrenset blodforsyning og heler daarlig paa egen haand, 2) instabilitet i kneet gir okt risiko for folge-skader paa menisk og brusk, 3) rehabiliteringen er langvarig (6-12 maaneder), og 4) det er okt risiko for ny skade etter tilbakevending til idrett.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-6-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr2-6-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag en oversikt over de tre vanligste akutte skadene og de tre vanligste belastningsskadene i idrett. For hver skade, beskriv hvilken struktur som er rammet og hvilke idretter som er mest utsatt.',
        solution: 'Akutte skader: 1) Ankelforstuing (laterale ankelbaaand) - vanligst i ballspill, basketball og volleyball. 2) Hamstrings muskelstrekk (bakside lar-muskulatur) - vanlig i sprint, fotball og friidrett. 3) Fremre korsbaaandskade (ACL i kneet) - vanlig i fotball, handball, alpint og basketball. Belastningsskader: 1) Patellar tendinopati/hopperens kne (patellarsenen) - vanlig i volleyball, basketball og hoydesprang. 2) Akillestendinopati (akillessenen) - vanlig hos lopere og ballspillere. 3) Tretthetsbrudd (bein, saerlig legg og fotrot) - vanlig hos langdistanselopere og soldater i forstegangstjeneste.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 6.2: Skademekanismer
// ============================================================================

export const CHAPTER_TRENING_2_6_2: TextbookChapter = {
  id: 'trening-2-6-2',
  courseId: 'trening-2',
  chapterNumber: '6.2',
  title: 'Skademekanismer',
  description: 'Risikofaktorer for idrettsskader og prinsipper for skadeforebyggende trening.',
  estimatedMinutes: 20,
  competenceGoals: [
    'identifisere indre og ytre risikofaktorer for idrettsskader',
    'forklare sammenhengen mellom belastning og belastningstoleranse',
    'beskrive prinsipper for skadeforebyggende trening',
  ],
  content: [
    {
      id: 'tr2-6-2-intro',
      type: 'text',
      content: `# Skademekanismer

For a kunne forebygge skader effektivt, maa vi forstaa hvorfor skader oppstaar. Skademekanismer handler om de kreftene og omstendighetene som forer til at biologisk vev overskrides i sin tolegrense. En skade oppstaar naar belastningen paa vevet overskrider vevets kapasitet til a haandtere belastningen.

I dette kapittelet utforsker vi risikofaktorene som oker sjansen for skade, modellen for belastning og belastningstoleranse, samt konkrete prinsipper for skadeforebyggende trening.`,
    },
    {
      id: 'tr2-6-2-def-mekanisme',
      type: 'definition',
      title: 'Skademekanisme',
      content: 'En skademekanisme beskriver den spesifikke hendelsen eller prosessen som forer til vevsoverskridelse og skade. For akutte skader er skademekanismen en enkelthendelse (for eksempel landing paa strakt kne), mens for belastningsskader er mekanismen kumulativ overbelastning over tid.',
    },
    {
      id: 'tr2-6-2-text-risikofaktorer',
      type: 'text',
      title: 'Risikofaktorer for idrettsskader',
      content: `Risikofaktorer deles inn i to hovedkategorier: indre (personlige) og ytre (miljomessige) faktorer. Tilstedevaerelse av risikofaktorer oker sannsynligheten for skade, men garanterer ikke at skade oppstaar.

**Indre risikofaktorer (ikke-modifiserbare)**
- **Alder:** Unge utovere har umodent skjelett, eldre utovere har redusert vevskvalitet
- **Kjonn:** Kvinner har 2-8 ganger hoyere risiko for ACL-skade enn menn
- **Genetikk:** Kollagensammensetning og leddstruktur er delvis arvelig
- **Tidligere skade:** Den storste enkeltrisikofaktoren for ny skade

**Indre risikofaktorer (modifiserbare)**
- **Muskelstyrke og -balanse:** Svak muskulatur og ubalanse mellom muskelgrupper
- **Bevegelighet:** Baade for lav og for hoy bevegelighet oker risikoen
- **Propriosepsjon og balanse:** Nedsatt leddstilling-sans oker skaderisikoen
- **Utholdenhet:** Tretthet pavirker koordinasjon og reaksjonstid
- **Kroppsvekt og -sammensetning:** Overvekt oker belastningen paa ledd

**Ytre risikofaktorer**
- **Underlag:** Hardt underlag, ujevn overflate, vaatt gress
- **Utstyr:** Daarlig fottoy, manglende beskyttelse, feil utstyr
- **Regler og domsavgjorelser:** Regelendringer kan pavirke skadeforekomst
- **Treningsmengde:** For rask okning i volum eller intensitet
- **Vaerforhold:** Kulde, varme, regn og vind
- **Motstandere:** Kontaktnivaa og spillestil`,
    },
    {
      id: 'tr2-6-2-def-belastning',
      type: 'definition',
      title: 'Belastning og belastningstoleranse',
      content: 'Belastning er den totale mekaniske paavirkningen paa kroppen fra trening og konkurranse. Belastningstoleranse (kapasitet) er vevets evne til a tole belastning uten a ta skade. En skade oppstaar naar belastningen overskrider belastningstoleransen. Maalet med trening er a oke belastningstoleransen raskere enn man oker belastningen.',
    },
    {
      id: 'tr2-6-2-text-modellen',
      type: 'text',
      title: 'Belastning-kapasitet-modellen',
      content: `Den moderne forstaaelsen av skademekanismer bygger paa en enkel men kraftfull modell: belastning versus kapasitet.

**Prinsippet er enkelt:**
- Naar belastning < kapasitet: Vevet tilpasser seg og blir sterkere
- Naar belastning = kapasitet: Grensesonen, risikoen oker
- Naar belastning > kapasitet: Skade oppstaar

**Belastning paavirkes av:**
- Treningsvolum (antall timer, repetisjoner, kilometer)
- Treningsintensitet (tyngde, fart, motstand)
- Treningsfrekvens (antall okter per uke)
- Konkurransebelastning
- Hverdagsbelastning (jobb, skole, reise)
- Psykisk belastning (stress, soevnmangel)

**Kapasitet paavirkes av:**
- Muskelstyrke og senekapasitet
- Beinkvalitet og brusktykkelse
- Restitusjonsevne
- Soevnkvalitet og mengde
- Ernaering og vaeskeinntak
- Tidligere treningshistorikk

Det er verdt a merke seg at kapasiteten ikke er statisk. Den oker med riktig trening og reduseres ved inaktivitet, sykdom, soevnmangel eller for rask progresjon.`,
    },
    {
      id: 'tr2-6-2-example-belastning',
      type: 'example',
      title: 'Treningsbelastning og skaderisiko',
      problem: 'En loper oker plutselig ukentlig lopemengde fra 30 km til 50 km paa en uke. Forklar ved hjelp av belastning-kapasitet-modellen hvorfor dette oker skaderisikoen.',
      solution: `Loperens vev (sener, muskler, bein) har tilpasset seg en belastning tilsvarende 30 km per uke. Kapasiteten er bygget opp gradvis over tid for a tole denne mengden.

Naar ukemengden plutselig oker med 67 % (fra 30 til 50 km), overskrider belastningen vevets kapasitet. Vevet har ikke hatt tid til a tilpasse seg den nye belastningen.

**Konsekvenser:**
- Sener og muskler utsettes for mer belastning enn de toler
- Beinvev faar ikke nok tid til remodellering mellom oktene
- Okt risiko for belastningsskader som akillestendinopati, skinnebeinsplager eller tretthetsbrudd

**Anbefaling:**
Folg 10 %-regelen: ok ukentlig treningsmengde med maksimalt 10 % per uke. Fra 30 km bor loperen bruke 5-6 uker paa a naa 50 km per uke.`,
    },
    {
      id: 'tr2-6-2-text-forebyggende',
      type: 'text',
      title: 'Prinsipper for skadeforebyggende trening',
      content: `Skadeforebyggende trening tar sikte paa a oke kroppens belastningstoleranse og redusere risikofaktorene for skade. Forskning har identifisert flere effektive strategier:

**1. Styrketrening**
Styrketrening er det mest dokumenterte tiltaket for skadeforebygging. Studier viser at styrketrening kan redusere skadeforekomsten med opp til 70 %. Saerlig eksentrisk styrketrening har vist seg effektivt for a forebygge muskel- og seneskader.

**2. Nevromuskulaer trening**
Trening som forbedrer balanse, koordinasjon og propriosepsjon. FIFA 11+ og lignende programmer har vist 30-50 % reduksjon i skadeforekomst i fotball og handball.

**3. Bevegelighet og mobilitet**
Tilstrekkelig bevegelighet i relevante ledd sikrer at bevegelser kan utfores med riktig teknikk. Baade for lav og for hoy bevegelighet er risikofaktorer.

**4. Plyometrisk trening**
Trening med raske strekkforkortingssykluser forbedrer muskel-sene-enhetens evne til a haandtere raske belastninger, noe som er viktig i ballspill og hoppeidretter.

**5. Belastningsstyring**
Systematisk planlegging av treningsmengde, intensitet og restitusjon for a unngaa overbelastning. Bruk av belastningsovervaakning og periodisering.`,
    },
    {
      id: 'tr2-6-2-note-fifa',
      type: 'note',
      title: 'FIFA 11+ programmet',
      content: 'FIFA 11+ er et oppvarmingsprogram utviklet av FIFA Medical Centre som har vist seg a redusere skadeforekomsten med 30-50 % i fotball. Programmet inneholder ovelser for loping, styrke, balanse og plyometri, og tar omtrent 20 minutter. Programmet er tilpasset for ulike aldersgrupper og nivaaer, og er fritt tilgjengelig. Lignende programmer finnes for handball (Senter for idrettsskadeforskning) og andre idretter.',
    },
    {
      id: 'tr2-6-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr2-6-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er den storste enkeltrisikofaktoren for aa faa en ny idrettsskade?',
        options: [
          { id: 'a', text: 'Kjonn', isCorrect: false },
          { id: 'b', text: 'Tidligere skade', isCorrect: true },
          { id: 'c', text: 'Alder', isCorrect: false },
          { id: 'd', text: 'Underlagstype', isCorrect: false },
        ],
        solution: 'Tidligere skade er den storste enkeltrisikofaktoren for ny skade. Skadet vev gjenoppbygges sjelden til 100 % av opprinnelig kvalitet, og utovere som har hatt en skade har 2-3 ganger hoyere risiko for a faa skaden igjen. Dette understreker viktigheten av fullstendig rehabilitering for tilbakevending til idrett.',
      },
    },
    {
      id: 'tr2-6-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr2-6-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'I folge belastning-kapasitet-modellen, naar oppstaar en skade?',
        options: [
          { id: 'a', text: 'Naar belastningen er lavere enn kapasiteten', isCorrect: false },
          { id: 'b', text: 'Naar utoveren trener styrke', isCorrect: false },
          { id: 'c', text: 'Naar belastningen overskrider vevets kapasitet', isCorrect: true },
          { id: 'd', text: 'Naar utoveren har hviledag', isCorrect: false },
        ],
        solution: 'En skade oppstaar naar belastningen paa vevet overskrider vevets kapasitet (belastningstoleranse). Dette kan skje enten ved en enkelthendelse med ekstremt stor kraft (akutt skade), eller ved gjentatt belastning som overstiger vevets evne til a reparere seg (belastningsskade).',
      },
    },
    {
      id: 'tr2-6-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr2-6-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Gjor rede for forskjellen mellom indre og ytre risikofaktorer for idrettsskader. Gi minst tre eksempler paa hver kategori.',
        solution: 'Indre risikofaktorer er personlige egenskaper hos utoveren, for eksempel: 1) Tidligere skade - den storste risikofaktoren for ny skade. 2) Muskelstyrke og -balanse - svak muskulatur og ubalanse mellom muskelgrupper oker risikoen. 3) Kjonn - kvinner har hoyere risiko for visse skader som ACL-ruptur. 4) Alder - pavirker vevskvalitet og restitusjon. Ytre risikofaktorer er miljo- og situasjonsfaktorer utenfor utoveren: 1) Underlag - hardt, ujevnt eller vaatt underlag oker risikoen. 2) Utstyr - daarlig fottoy eller manglende beskyttelsesutstyr. 3) Treningsmengde - for rask okning i volum eller intensitet. 4) Vaerforhold - kulde reduserer muskelelastisiteten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-6-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr2-6-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar 10 %-regelen for treningsprogresjon og hvorfor den er viktig for a forebygge belastningsskader.',
        solution: '10 %-regelen er en tommelfingerregel som sier at ukentlig treningsmengde (volum) ikke bor okes med mer enn 10 % fra uke til uke. Regelen er basert paa at biologisk vev (muskler, sener, bein) trenger tid til a tilpasse seg okt belastning. Oker man for raskt, overskrider belastningen vevets tilpasningsevne, og risikoen for belastningsskader som tendinopati og tretthetsbrudd oker betydelig. Eksempel: En loper som loper 40 km per uke bor ikke oke til mer enn 44 km neste uke. Selv om muskler tilpasser seg relativt raskt (uker), trenger sener og bein lengre tid (maaneder).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-6-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr2-6-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Du er trener for et juniorlag i handball. Beskriv hvilke skadeforebyggende tiltak du ville innfort i treningsopplegget, og begrunn valgene dine med utgangspunkt i forskning.',
        solution: 'Som handballtrener ville jeg innfort folgende tiltak: 1) Nevromuskulaert oppvarmingsprogram inspirert av FIFA 11+ / Senter for idrettsskadeforskning sitt program, med ovelser for balanse, styrke og plyometri. Forskning viser 30-50 % skadereduksjon. 2) Styrketrening med fokus paa eksentrisk hamstrings-trening (Nordic hamstring) og quadriceps, som reduserer muskelskader med opp til 70 %. 3) Balanse- og propriosepsjonstrening for a forebygge ankelskader, som er svart vanlige i handball. 4) Belastningsstyring med gradvis okning i treningsvolum, saerlig etter ferier og skadeperioder. 5) Bevegelighets- og mobilitetstrening for hofter, ankler og skuldre. 6) Utdanning av spillerne om egensymptomer og viktigheten av a rapportere smerter tidlig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-6-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr2-6-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Droft hvorfor styrketrening er det mest effektive enkelttiltaket for skadeforebygging, og forklar sammenhengen mellom eksentrisk styrketrening og skadereduksjon.',
        solution: 'Styrketrening er mest effektivt fordi det direkte oker vevets belastningstoleranse. Sterkere muskler, sener og bein toler mer belastning for skade oppstaar. Studier viser opp til 70 % reduksjon i skadeforekomst. Eksentrisk styrketrening er saerlig effektivt fordi: 1) Mange skader oppstaar under eksentrisk belastning, saa trening av denne fasen forbereder vevet spesifikt. 2) Eksentrisk trening stimulerer seneadaptasjon og oker senes stivhet og toleranse. 3) Nordic hamstring-ovelsen har vist 50-70 % reduksjon i hamstringsskader i fotball. 4) Eksentrisk trening bygger muskelstyrke i forlengede posisjoner, som er der mange skader oppstaar.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 6.3: Oppvarming og nedtrapping
// ============================================================================

export const CHAPTER_TRENING_2_6_3: TextbookChapter = {
  id: 'trening-2-6-3',
  courseId: 'trening-2',
  chapterNumber: '6.3',
  title: 'Oppvarming og nedtrapping',
  description: 'Fysiologisk effekt av oppvarming, ulike oppvarmingsprotokoll og betydningen av nedtrapping etter aktivitet.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forklare de fysiologiske effektene av oppvarming',
    'planlegge hensiktsmessige oppvarmingsprotokoller for ulike aktiviteter',
    'beskrive betydningen av nedtrapping og aktiv restitusjon',
  ],
  content: [
    {
      id: 'tr2-6-3-intro',
      type: 'text',
      content: `# Oppvarming og nedtrapping

Oppvarming er en av de mest grunnleggende og viktigste delene av enhver treningsokt eller konkurranse. Til tross for dette er oppvarming ofte undervurdert og nedprioritert, saerlig paa lavere nivaa. God oppvarming forbereder kroppen fysisk og mentalt paa den kommende belastningen, reduserer skaderisikoen og kan forbedre prestasjonen.

Nedtrapping (nedkjoling) etter aktivitet er likeledes viktig for a starte restitusjonen og redusere risikoen for komplikasjoner. I dette kapittelet ser vi paa hva som skjer fysiologisk under oppvarming, hvordan man planlegger effektive oppvarmingsprotokoller, og hvorfor nedtrapping bor vaere en fast del av treningsrutinen.`,
    },
    {
      id: 'tr2-6-3-def-oppvarming',
      type: 'definition',
      title: 'Oppvarming',
      content: 'Oppvarming er en planlagt aktivitet som utfores for hoveddelen av treningen eller konkurransen, med maal om a forberede kroppen fysisk og mentalt paa den kommende belastningen. Oppvarming oker kroppstemperaturen, forbedrer blodsirkulasjonen til aktive muskler, og aktiverer det nevromuskulaere systemet.',
    },
    {
      id: 'tr2-6-3-text-fysiologi',
      type: 'text',
      title: 'Fysiologiske effekter av oppvarming',
      content: `Oppvarming utloser en rekke fysiologiske responser som samlet forbereder kroppen paa hoy belastning:

**Temperaturrelaterte effekter**
- **Okt muskeltemperatur:** En varm muskel kontraherer raskere og kraftigere. For hver grad muskeltemperaturen stiger, oker muskelens evne til kraftutvikling med omtrent 2-5 %.
- **Okt enzymaktivitet:** Enzymene som styrer energiomsetningen arbeider raskere ved hoyere temperatur, noe som forbedrer den aerobe og anaerobe energifrigjoeringen.
- **Redusert muskelviskositet:** Varm muskulatur har lavere intern motstand, noe som gir smidigere og mer effektive bevegelser.
- **Okt elastisitet i bindevev:** Sener, leddbaaand og muskelfascia blir mer toyelige, noe som reduserer risikoen for strekk- og avrivningsskader.

**Kardiovaskulaere effekter**
- **Okt hjertefrekvens og minuttvolum:** Hjertet pumper mer blod per minutt til de arbeidende musklene.
- **Vasodilatasjon:** Blodkarene i de aktive musklene utvider seg, noe som oker blodtilforsel og oksygenleveranse.
- **Redistribusjon av blod:** Blodet omdirigeres fra inaktive organer til aktiv muskulatur.

**Nevromuskulaere effekter**
- **Okt nerveledhastighet:** Nervesignalene overfoeres raskere, noe som gir bedre koordinasjon og reaksjonstid.
- **Aktivering av motoriske enheter:** Flere motoriske enheter rekrutteres, noe som gir bedre kraftutvikling.
- **Post-aktiveringspotensiering (PAP):** Etter tunge muskelkontraksjoner oker muskelens kraftutviklingsevne midlertidig.`,
    },
    {
      id: 'tr2-6-3-text-protokoll',
      type: 'text',
      title: 'Oppvarmingsprotokoll',
      content: `En effektiv oppvarming folger vanligvis en strukturert progresjon fra generell til spesifikk aktivitet:

**Fase 1: Generell oppvarming (5-10 minutter)**
- Lav til moderat intensitet
- Store muskelgrupper aktiveres
- Maal: Oke kroppstemperatur og hjertefrekvens
- Eksempler: Lett jogging, sykling, roing

**Fase 2: Dynamisk toyning og mobilitet (5-7 minutter)**
- Kontrollerte bevegelser gjennom fullt bevegelsesutslag
- Idrettsspesifikke bevegelsesmonstre
- Maal: Forberede ledd og muskler paa spesifikke bevegelser
- Eksempler: Beinsving, hofteaapnere, armsirkler, utfall med rotasjon

**Fase 3: Spesifikk oppvarming (5-10 minutter)**
- Ovelser som ligner paa hoveddelen av treningen
- Gradvis okning i intensitet
- Maal: Aktivere spesifikke bevegelsesmonstre og nevromuskulaer kontroll
- Eksempler: Pasningsovelser i fotball, tekniske ovelser i vektlofting, innloep i loping

**Fase 4: Intensivering (2-5 minutter)**
- Korte perioder med hoy intensitet
- Maal: Klargjore kroppen for maksimal innsats
- Eksempler: Akselerasjoner, hoppserier, tunge oppvarmingssett

**Viktige prinsipper:**
- Oppvarmingen bor vare 15-25 minutter totalt
- Intensiteten oker gradvis
- Unngaa statisk toyning for prestasjonskrevende aktiviteter
- Tilpass oppvarmingen til aktiviteten, vaerforholdene og individet
- Hoveddelen bor starte innen 5-10 minutter etter oppvarming`,
    },
    {
      id: 'tr2-6-3-note-statisk',
      type: 'note',
      title: 'Statisk toyning for trening?',
      content: 'Forskning viser at langvarig statisk toyning (over 60 sekunder) umiddelbart for trenings- eller konkurransestart kan redusere muskelens kraftutviklingsevne og spenstprestasjon midlertidig. Dynamisk toyning er derfor a foretrekke i oppvarmingen. Statisk toyning kan derimot vaere nyttig etter trening som del av nedtrappingen, eller som egen treningsokt for a forbedre bevegelighet.',
    },
    {
      id: 'tr2-6-3-text-nedtrapping',
      type: 'text',
      title: 'Nedtrapping og nedkjoling',
      content: `Nedtrapping (cool-down) er den gradvise reduksjonen i aktivitetsnivaa etter trening eller konkurranse. Mange utovere hopper over denne fasen, men den har flere viktige funksjoner.

**Fysiologiske effekter av nedtrapping:**
- **Gradvis senkning av hjertefrekvens:** Forebygger svimmelhet og blodtrykksfall som kan oppstaa ved plutselig stopp
- **Fjerning av avfallsstoffer:** Lett aktivitet opprettholder blodsirkulasjonen og hjelper med a transportere bort laktat og andre metabolitter
- **Forebygging av venestase:** Muskelaktivitet pumper blod tilbake til hjertet og forebygger blodansamling i bena
- **Gradvis senkning av kroppstemperatur:** Unngaar rask nedkjoling som kan fore til muskelstivhet

**Anbefalt nedtrappingsprotokoll (10-15 minutter):**

1. **Gradvis intensitetsreduksjon (5-7 minutter):** Fortsett med hoveddelen av aktiviteten, men reduser intensiteten gradvis. Eksempel: Gaa over fra loping til jogging til gange.

2. **Statisk toyning (5-8 minutter):** Tey de muskelgruppene som har vaert mest aktive. Hold hver toyning i 20-30 sekunder. Dette er det ideelle tidspunktet for statisk toyning, da muskulaturen er varm og toyelig.

3. **Pustovelser og avspenning (2-3 minutter, valgfritt):** Dype pusteovelser og bevisst avspenning kan hjelpe med overgangen fra aktivitet til hvile og stimulere det parasympatiske nervesystemet.`,
    },
    {
      id: 'tr2-6-3-example-oppvarming',
      type: 'example',
      title: 'Oppvarmingsprotokoll for en fotballtrening',
      problem: 'Lag en komplett oppvarmingsprotokoll for en fotballtrening som varer 90 minutter.',
      solution: `**Fase 1: Generell oppvarming (5 minutter)**
- Lett jogging rundt banen med ballkontroll
- Gradvis okning av tempoet

**Fase 2: Dynamisk toyning og mobilitet (7 minutter)**
- Beinsving fremover og til siden (10 per bein)
- Utfall med rotasjon (8 per side)
- Hofteaapnere (inward/outward hip rotation, 10 per side)
- Armrotasjoner og overkroppsvridninger
- Sideveis forflytning med dynamiske bevegelsesskift

**Fase 3: Spesifikk oppvarming (8 minutter)**
- Pasningsovelser i par (kort og lang pasning)
- Mottak og vending med ball
- Dribleovelser med retningsforandring
- Hodeball i par

**Fase 4: Intensivering (5 minutter)**
- 3-4 akselerasjoner over 20-30 meter
- Retningsforandringer med maksimal innsats
- Hopp og landingsovelser
- Avslutninger paa maal

Total tid: ca. 25 minutter. Hoveddelen av treningen bor starte umiddelbart etter oppvarmingen.`,
    },
    {
      id: 'tr2-6-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr2-6-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er hovedeffekten av okt muskeltemperatur under oppvarming?',
        options: [
          { id: 'a', text: 'Muskelen blir slappere og svakere', isCorrect: false },
          { id: 'b', text: 'Muskelen kontraherer raskere og kraftigere, og bindevev blir mer elastisk', isCorrect: true },
          { id: 'c', text: 'Muskelen bruker mer oksygen og blir raskere utmattet', isCorrect: false },
          { id: 'd', text: 'Muskelen faar redusert blodtilforsel', isCorrect: false },
        ],
        solution: 'Okt muskeltemperatur gjor at muskelen kontraherer raskere og kraftigere (omtrent 2-5 % okning per grad). I tillegg reduseres muskelviskositeten, enzymaktiviteten oker, og bindevev (sener, leddbaaand, fascia) blir mer elastisk og toyelig. Alt dette bidrar til bedre prestasjon og lavere skaderisiko.',
      },
    },
    {
      id: 'tr2-6-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr2-6-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvorfor anbefales det a unngaa langvarig statisk toyning rett for prestasjonskrevende aktivitet?',
        options: [
          { id: 'a', text: 'Fordi statisk toyning oker kroppstemperaturen for mye', isCorrect: false },
          { id: 'b', text: 'Fordi statisk toyning over 60 sekunder kan redusere muskelens kraftutviklingsevne midlertidig', isCorrect: true },
          { id: 'c', text: 'Fordi statisk toyning alltid gir muskelskader', isCorrect: false },
          { id: 'd', text: 'Fordi statisk toyning bare virker paa ledd og ikke paa muskler', isCorrect: false },
        ],
        solution: 'Forskning viser at langvarig statisk toyning (over 60 sekunder per muskelgruppe) umiddelbart for aktivitet kan redusere muskelens kraftutviklingsevne og spenstprestasjon midlertidig. Dynamisk toyning er derfor bedre egnet i oppvarmingen. Statisk toyning bor heller brukes etter trening eller som egen treningsokt.',
      },
    },
    {
      id: 'tr2-6-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr2-6-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv de fire fasene i en god oppvarmingsprotokoll. Forklar formalet med hver fase og gi eksempler paa ovelser.',
        solution: 'Fase 1 - Generell oppvarming (5-10 min): Lav til moderat intensitet for a oke kroppstemperatur og hjertefrekvens. Eksempler: lett jogging, sykling, roing. Fase 2 - Dynamisk toyning og mobilitet (5-7 min): Kontrollerte bevegelser gjennom fullt bevegelsesutslag for a forberede ledd og muskler. Eksempler: beinsving, hofteaapnere, utfall med rotasjon. Fase 3 - Spesifikk oppvarming (5-10 min): Ovelser som ligner hoveddelen av treningen med gradvis okning i intensitet. Eksempler: pasningsovelser i fotball, tekniske ovelser i vektlofting. Fase 4 - Intensivering (2-5 min): Korte perioder med hoy intensitet for a klargjore kroppen for maksimal innsats. Eksempler: akselerasjoner, hoppserier, tunge oppvarmingssett.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-6-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr2-6-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hvorfor nedtrapping etter trening er viktig. Beskriv de fysiologiske effektene og gi et forslag til en nedtrappingsprotokoll.',
        solution: 'Nedtrapping er viktig av flere grunner: 1) Gradvis senkning av hjertefrekvens forebygger svimmelhet og blodtrykksfall ved plutselig stopp. 2) Lett aktivitet opprettholder blodsirkulasjonen og hjelper med a fjerne laktat og metabolitter. 3) Muskelaktivitet pumper blod tilbake til hjertet og forebygger venestase. 4) Gradvis temperatursenkning forhindrer muskelstivhet. Anbefalt protokoll: 5-7 minutter med gradvis reduksjon av intensitet (f.eks. fra jogging til gange), etterfulgt av 5-8 minutter med statisk toyning av de mest aktive muskelgruppene (20-30 sekunder per toyning). Eventuelt avsluttes med 2-3 minutter pustovelser og bevisst avspenning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-6-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr2-6-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'En langrennsutover skal konkurrere i et 15 km klassisk renn paa en kald vinterdag (-10 grader). Lag en tilpasset oppvarmingsprotokoll og begrunn tilpasningene du gjor for vaerforholdene.',
        solution: 'For langrennsloperen i kulde vil jeg tilpasse oppvarmingen slik: 1) Generell oppvarming (8-10 min): Litt lengre varighet enn normalt for a oke kroppstemperaturen tilstrekkelig i kulde. Lett jogging eller staving med lav intensitet. Bruk godt med klaer. 2) Dynamisk toyning (5 min): Utfores innendors eller i vindskjerm om mulig. Fokus paa hofter, skuldre og rygg. Begrens tiden utendors i toyefasen for a unngaa nedkjoling. 3) Spesifikk oppvarming (8-10 min): Skigaaing med gradvis okt tempo, inkluder begge teknikker. 4) Intensivering (3-5 min): 2-3 korte drag paa 30-60 sekunder med hoy intensitet. Tilpasninger for kulde: lengre generell fase, hold seg varm med ekstra klaer som fjernes rett for start, kortere pause mellom oppvarming og start (maks 5 min), mulig innendors toyning, og aktiviteten maa vaere intensiv nok til a oke kjernetemperaturen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-6-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr2-6-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Droft paastanden: "Oppvarming er bare viktig for a unngaa skader." Er du enig eller uenig? Begrunn svaret ditt med fysiologiske argumenter.',
        solution: 'Paastanden er for snever. Oppvarming har flere viktige funksjoner utover skadeforebygging: 1) Prestasjonsfremmende: Okt muskeltemperatur forbedrer kraftutvikling med 2-5 % per grad. Okt enzymaktivitet gir bedre energiomsetning. Raskere nerveledning gir bedre koordinasjon og reaksjonstid. 2) Nevromuskulaer forberedelse: Aktivering av motoriske enheter og post-aktiveringspotensiering forbedrer muskelens arbeidskapasitet. 3) Kardiovaskulaer forberedelse: Gradvis okning av hjertefrekvens og blodsirkulasjon gjor at oksygentransporten er optimalisert fra start. 4) Mental forberedelse: Oppvarming gir utoveren tid til a fokusere, visualisere og forberede seg mentalt. 5) Skadeforebygging: Okt elastisitet i bindevev, bedre propriosepsjon og nevromuskulaer kontroll. Konklusjon: Oppvarming er viktig for baade prestasjon, fysiologisk forberedelse, mental forberedelse og skadeforebygging.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 6.4: Rehabilitering
// ============================================================================

export const CHAPTER_TRENING_2_6_4: TextbookChapter = {
  id: 'trening-2-6-4',
  courseId: 'trening-2',
  chapterNumber: '6.4',
  title: 'Rehabilitering',
  description: 'Rehabiliteringsfaser etter idrettsskade, progresjonsprinsipper og kriterier for return-to-play.',
  estimatedMinutes: 20,
  competenceGoals: [
    'beskrive de ulike fasene i rehabilitering etter idrettsskade',
    'forklare prinsipper for belastningsprogresjon i rehabilitering',
    'gjore rede for kriterier for trygg tilbakevending til idrett (return-to-play)',
  ],
  content: [
    {
      id: 'tr2-6-4-intro',
      type: 'text',
      content: `# Rehabilitering

Rehabilitering etter idrettsskade er prosessen med a gjenopprette funksjon, styrke, bevegelighet og idrettsspesifikk kapasitet etter en skade. God rehabilitering er avgjorende for at utoveren skal kunne vende trygt tilbake til sin idrett med minimal risiko for ny skade.

Rehabilitering handler ikke bare om a bli kvitt smerte. Det handler om a gjenoppbygge vevets kapasitet, gjenvinne nevromuskulaer kontroll, og gradvis forberede kroppen paa de spesifikke kravene idretten stiller. En ufullstendig rehabilitering er en av de viktigste risikofaktorene for ny skade.`,
    },
    {
      id: 'tr2-6-4-def-rehabilitering',
      type: 'definition',
      title: 'Rehabilitering',
      content: 'Rehabilitering er en maalrettet og systematisk prosess for a gjenopprette funksjon og arbeidsevne etter sykdom eller skade. I idrettssammenheng innebaeaerer rehabilitering progressiv belastningsokning fra skadetidspunktet til full deltakelse i trening og konkurranse, med maal om a minimere risikoen for ny skade.',
    },
    {
      id: 'tr2-6-4-text-faser',
      type: 'text',
      title: 'Rehabiliteringens faser',
      content: `Rehabilitering etter idrettsskade deles vanligvis inn i fire hovedfaser. Overgangen mellom fasene er gradvis og basert paa funksjonelle kriterier, ikke tidsrammer alene.

**Fase 1: Akuttfasen (0-72 timer)**
- Maal: Begrense skadeomfanget, kontrollere smerte og hevelse
- Tiltak: PRICE-prinsippene (se kapittel 6.5), eventuelt medisinsk vurdering
- Belastning: Minimal, skadet omraade avlastes
- Varighet: Typisk 1-3 dager, avhengig av skadens alvorlighet

**Fase 2: Subakutt fase / tidlig rehabilitering (dager til uker)**
- Maal: Gjenopprette bevegelighet, starte forsiktig styrketrening, opprettholde kardiovaskulaer form
- Tiltak: Smertefri bevegelighet, isometrisk styrketrening, alternativ trening (svomming, sykling)
- Belastning: Gradvis okning innenfor smertegrensen
- Kriterier for progresjon: Avtagende hevelse, tilnaermet fullt bevegelsesutslag, minimal smerte i hvile

**Fase 3: Styrke- og funksjonsfasen (uker til maaneder)**
- Maal: Gjenoppbygge styrke, utholdenhet og nevromuskulaer kontroll
- Tiltak: Progressiv styrketrening, balanse- og koordinasjonsovelser, idrettsspesifikk trening
- Belastning: Oker systematisk basert paa respons
- Kriterier for progresjon: Styrke paa minst 80-90 % av frisk side, smertefri aktivitet

**Fase 4: Idrettsspesifikk fase og return-to-play (uker til maaneder)**
- Maal: Full tilbakevending til trening og konkurranse
- Tiltak: Fullstendig idrettsspesifikk trening, gradvis okning av treningsvolum og -intensitet
- Belastning: Tilnaermet normal til full belastning
- Kriterier for progresjon: Bestaaelse av return-to-play-tester, psykologisk beredskap`,
    },
    {
      id: 'tr2-6-4-text-progresjon',
      type: 'text',
      title: 'Progresjonsprinsipper',
      content: `Riktig progresjon i rehabilitering er avgjorende for et vellykket resultat. For rask progresjon kan fore til ny skade eller forverring, mens for langsom progresjon kan forsinke tilbakevendingen unodvendig.

**Grunnprinsipper for progresjon:**

1. **Smerte som veileder:** Mild ubehag (opptil 3-4 paa en skala fra 0-10) under ovelser kan aksepteres, men smerte bor ikke oke fra dag til dag. Dersom smerten forverres, bor belastningen reduseres.

2. **Gradvis belastningsokning:** Folg prinsippet om progressiv overbelastning. ok ett parameter om gangen: enten volum, intensitet, kompleksitet eller hastighet. Aldri ok alle samtidig.

3. **Individuell tilpasning:** Rehabiliteringsforlopet varierer enormt mellom individer. Alder, skadetype, generell helse, motivasjon og idrettskrav pavirker progresjonen.

4. **Funksjonelle kriterier:** Progresjon baseres paa hva utoveren kan gjore (funksjon), ikke bare paa tid siden skade. Dette sikrer at vevet er klar for neste belastningsnivaa.

5. **Helhetlig tilnaerming:** Oppretthold det som er mulig. En ankelskade betyr ikke at man ikke kan trene overkropp. Alternativ trening opprettholder kondisjon og mental helse.

**Tegn paa for rask progresjon:**
- Okende smerte fra dag til dag
- Hevelse som ikke gaar tilbake mellom treningsokter
- Stivhet som varer mer enn 24 timer etter trening
- Nedsatt funksjon sammenlignet med forrige okt`,
    },
    {
      id: 'tr2-6-4-def-rtp',
      type: 'definition',
      title: 'Return-to-play (RTP)',
      content: 'Return-to-play er beslutningsprosessen om naar en skadet utover trygt kan vende tilbake til full deltakelse i trening og konkurranse. Beslutningen baseres paa medisinske kriterier, funksjonelle tester, psykologisk beredskap og idrettsspesifikke krav. Maalet er a minimere risikoen for ny skade samtidig som utoveren returnerer sa tidlig som mulig.',
    },
    {
      id: 'tr2-6-4-text-rtp-kriterier',
      type: 'text',
      title: 'Kriterier for return-to-play',
      content: `Return-to-play-beslutningen bor vaere basert paa flere kriterier, ikke bare fravaaer av smerte:

**Fysiske kriterier:**
- Styrke paa minst 90-95 % av frisk side (maalt med dynamometer eller funksjonstester)
- Fullt bevegelsesutslag uten smerte
- Normal leddstabilitet
- Bestaaelse av idrettsspesifikke funksjonstester

**Funksjonelle tester:**
- **Hoppe-tester:** Enbeinshopp for lengde og hode, trippelhopp, sidehopp. Maal: minst 90 % av frisk side.
- **Smidighets- og retningsforandringstester:** T-test, Illinois agility test. Maal: normal eller naer normal tid.
- **Idrettsspesifikke tester:** Dribling, skudd, sprint, spill i redusert format.

**Psykologiske kriterier:**
- Tillit til skadet kroppsdel
- Fravaaer av frykt for ny skade (kinesifobi)
- Motivasjon og mental beredskap for konkurranse
- Validerte sporeskjemaer (f.eks. ACL-Return to Sport after Injury scale)

**Gradvis tilbakevending:**
Selv naar alle kriterier er oppfylt, bor tilbakevendingen vaere gradvis:
1. Full deltakelse i all trening i minst 1-2 uker uten tilbakefall
2. Deltakelse i treningskamper eller lavprioriterte konkurranser
3. Gradvis okning til full konkurransebelastning

Det er bedre a bruke en uke ekstra i rehabilitering enn a komme tilbake for tidlig og faa ny skade.`,
    },
    {
      id: 'tr2-6-4-example-rehab',
      type: 'example',
      title: 'Rehabilitering etter ankelforstuing',
      problem: 'Beskriv et rehabiliteringsforlop for en fotballspiller med en grad 2 lateral ankelforstuing.',
      solution: `**Fase 1 - Akuttfasen (dag 0-3):**
- PRICE: Beskyttelse, relativ hvile, is, kompresjon, elevasjon
- Krykker ved behov for smertefri gange
- Smertefri bevegelse av ankelen (opp/ned-bevegelse)

**Fase 2 - Tidlig rehabilitering (dag 3-14):**
- Gradvis okning av belastning paa foten
- Bevegelighetsovelser i alle retninger
- Isometrisk styrketrening for ankelen
- Alternativ trening: sykling, svomming med pullbuoy

**Fase 3 - Styrke- og funksjonsfasen (uke 2-6):**
- Progressiv styrketrening med elastisk baand
- Balanseovelser paa ustabilt underlag
- Jogging paa jevnt underlag fra uke 3-4
- Retningsforandringer og sideveis bevegelser fra uke 4-5

**Fase 4 - Idrettsspesifikk fase (uke 5-8):**
- Balltrening med laget (tilpasset)
- Sprint og akselerasjoner
- Kamp-lignende ovelser
- Return-to-play-testing uke 6-8

**RTP-kriterier:** Styrke over 90 %, bestaaelse av hopptester, smertefri i all aktivitet, psykologisk klar.`,
    },
    {
      id: 'tr2-6-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr2-6-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken fase i rehabilitering fokuserer paa a begrense skadeomfanget og kontrollere smerte og hevelse?',
        options: [
          { id: 'a', text: 'Den idrettsspesifikke fasen', isCorrect: false },
          { id: 'b', text: 'Styrke- og funksjonsfasen', isCorrect: false },
          { id: 'c', text: 'Akuttfasen', isCorrect: true },
          { id: 'd', text: 'Den subakutte fasen', isCorrect: false },
        ],
        solution: 'Akuttfasen (0-72 timer etter skade) fokuserer paa a begrense skadeomfanget, kontrollere smerte og hevelse. Tiltakene inkluderer PRICE-prinsippene og eventuell medisinsk vurdering. Belastning er minimal og det skadede omraadet avlastes.',
      },
    },
    {
      id: 'tr2-6-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr2-6-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvilket styrkekrav stilles vanligvis for return-to-play etter en storskade?',
        options: [
          { id: 'a', text: 'Minst 50 % styrke sammenlignet med frisk side', isCorrect: false },
          { id: 'b', text: 'Minst 70 % styrke sammenlignet med frisk side', isCorrect: false },
          { id: 'c', text: 'Minst 90-95 % styrke sammenlignet med frisk side', isCorrect: true },
          { id: 'd', text: 'Styrke spiller ingen rolle for return-to-play', isCorrect: false },
        ],
        solution: 'For trygg return-to-play kreves vanligvis at styrken i den skadede kroppsdelen er minst 90-95 % av frisk side, maalt med dynamometer eller funksjonstester. I tillegg maa utoveren bestaa funksjonelle tester som hopptester og smidighets-tester med minst 90 % av frisk side.',
      },
    },
    {
      id: 'tr2-6-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr2-6-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Gjor rede for de fire fasene i rehabilitering etter idrettsskade. Beskriv maal, tiltak og kriterier for progresjon i hver fase.',
        solution: 'Fase 1 - Akuttfasen (0-72 timer): Maal er a begrense skadeomfang og kontrollere smerte/hevelse. Tiltak: PRICE-prinsippene. Fase 2 - Subakutt fase (dager til uker): Maal er a gjenopprette bevegelighet og starte forsiktig styrketrening. Tiltak: smertefri bevegelighet, isometrisk styrke, alternativ trening. Progresjonskriterie: avtagende hevelse, naer fullt bevegelsesutslag. Fase 3 - Styrke- og funksjonsfasen (uker til maaneder): Maal er a gjenoppbygge styrke og nevromuskulaer kontroll. Tiltak: progressiv styrketrening, balanseovelser, idrettsspesifikk trening. Progresjonskriterie: styrke over 80-90 % av frisk side. Fase 4 - Return-to-play (uker til maaneder): Maal er full tilbakevending til idrett. Tiltak: full idrettsspesifikk trening. Progresjonskriterie: bestaatte funksjonstester og psykologisk beredskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-6-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr2-6-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar prinsippet om a bruke smerte som veileder i rehabilitering. Hva er akseptabelt smertenivaa, og hvilke tegn tyder paa for rask progresjon?',
        solution: 'I rehabilitering brukes smerte som en viktig indikator paa belastningsnivaa. Mild ubehag (opp til 3-4 paa en skala fra 0-10) under ovelser kan aksepteres, men smerten bor ikke oke fra dag til dag. Akseptabel smerte er forbigaaende og avtar raskt etter trening. Tegn paa for rask progresjon inkluderer: 1) Okende smerte fra dag til dag. 2) Hevelse som ikke gaar tilbake mellom treningsokter. 3) Stivhet som varer mer enn 24 timer etter trening. 4) Nedsatt funksjon sammenlignet med forrige okt. Dersom disse tegnene oppstaar, bor belastningen reduseres og progresjonen tas et steg tilbake.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-6-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr2-6-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Droft hvorfor psykologiske faktorer er viktige i return-to-play-beslutningen, og forklar hva kinesifobi er.',
        solution: 'Psykologiske faktorer er avgjorende i return-to-play fordi: 1) Frykt for ny skade (kinesifobi) kan fore til endrede bevegelsesmonstre og kompensasjoner som faktisk oker skaderisikoen. 2) Manglende tillit til skadet kroppsdel gjor at utoveren ikke presterer optimalt og kan ta suboptimale beslutninger i kamp. 3) Studier viser at psykologisk beredskap er en uavhengig prediktor for vellykket return-to-play. 4) Utovere med hoy grad av kinesifobi har signifikant hoyere risiko for ny skade. Kinesifobi er en irrasjonell og svekkende frykt for fysisk bevegelse som folge av en folelelse av saaarbarhet for skade. Det maalees med validerte sporeskjemaer og bor adresseres aktivt i rehabiliteringen gjennom gradvis eksponering, mental trening og psykologisk stotte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-6-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr2-6-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'En haandballspiller har vaert ute med en korsbaaandskade (ACL-rekonstruksjon) i 8 maaneder. Beskriv hvilke tester og kriterier du ville brukt for a vurdere om hun er klar for return-to-play.',
        solution: 'For RTP etter ACL-rekonstruksjon (vanligvis tidligst 9-12 maaneder) ville jeg vurdert: Fysiske kriterier: 1) Quadriceps- og hamstringsstyrke paa minst 90-95 % av frisk side (isokinetisk testing). 2) Fullt bevegelsesutslag uten smerte. 3) Ingen hevelse eller effusjon i kneet. Funksjonelle tester: 1) Enbeinshopp for lengde (LSI over 90 %). 2) Trippelhopp for lengde (LSI over 90 %). 3) Sidehopp-test (LSI over 90 %). 4) Y-balance test. 5) Retningsforandring med akseptabel kvalitet (vurdering av knekontroll). Psykologiske kriterier: 1) ACL-Return to Sport after Injury (ACL-RSI) score over 56-70 %. 2) Subjektiv tillit til kneet. 3) Fravaaer av unngaaelsesatferd. Gradvis tilbakevending: 2-4 uker med full deltakelse i lagets trening uten tilbakefall for konkurransestart.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 6.5: Forstehjelp i idrett
// ============================================================================

export const CHAPTER_TRENING_2_6_5: TextbookChapter = {
  id: 'trening-2-6-5',
  courseId: 'trening-2',
  chapterNumber: '6.5',
  title: 'Forstehjelp i idrett',
  description: 'PRICE-prinsippene, akutthaandtering av idrettsskader og vurdering av skadens alvorlighetsgrad.',
  estimatedMinutes: 20,
  competenceGoals: [
    'beskrive og anvende PRICE-prinsippene ved akutte idrettsskader',
    'gjennomfore en systematisk vurdering av skadealvor paa banen',
    'gjore rede for naar utoveren maa henvises til medisinsk hjelp',
  ],
  content: [
    {
      id: 'tr2-6-5-intro',
      type: 'text',
      content: `# Forstehjelp i idrett

Naar en skade oppstaar under trening eller konkurranse, er de forste minuttenes haandtering avgjorende for det videre forlopet. God akutthaandtering kan begrense skadeomfanget, redusere restitusjonstiden og i noen tilfeller hindre alvorlige komplikasjoner.

Som trener, medutover eller leder har du ansvar for a kunne yte hensiktsmessig forstehjelp ved idrettsskader. I dette kapittelet laerer du PRICE-prinsippene for akuttbehandling, hvordan du vurderer skadens alvorlighetsgrad paa banen, og naar utoveren maa fraktes til medisinsk hjelp.`,
    },
    {
      id: 'tr2-6-5-def-price',
      type: 'definition',
      title: 'PRICE-prinsippene',
      content: 'PRICE er et akronym for Protection (beskyttelse), Rest (relativ hvile), Ice (is/kjooling), Compression (kompresjon) og Elevation (elevasjon). Prinsippene brukes som forstehjelp ved akutte blovtdelsskader for a begrense hevelse, blodning og smerte i den akutte fasen.',
    },
    {
      id: 'tr2-6-5-text-price-detalj',
      type: 'text',
      title: 'PRICE-prinsippene i detalj',
      content: `Hvert element i PRICE har en spesifikk fysiologisk begrunnelse:

**P - Protection (Beskyttelse)**
- Beskytt det skadede omraadet mot videre belastning
- Stopp aktiviteten umiddelbart
- Bruk eventuelt bandasje, skinne eller tape for a stabilisere
- Unngaa bevegelser som provoserer smerte
- Fysiologisk begrunnelse: Forhindrer ytterligere vevsskade og bloedning

**R - Rest (Relativ hvile)**
- Avlast det skadede omraadet, men unngaa fullstendig immobilisering over lengre tid
- Bruk krykker eller annen avlastning ved behov
- Moderne tilnaerming: Relativ hvile betyr a unngaa smerteprovoserende aktivitet, men opprettholde smertefri bevegelse
- Fysiologisk begrunnelse: Gir vevet mulighet til a starte helningsprosessen

**I - Ice (Is/kjooling)**
- Legg is eller kuldepakning paa det skadede omraadet
- Varighet: 15-20 minutter, gjenta hver 2. time de forste 48-72 timene
- Bruk alltid et tynt klede mellom is og hud for a unngaa frostskade
- Ikke bruk is paa aapne saar eller omraader med nedsatt folelelse
- Fysiologisk begrunnelse: Reduserer blodgjennomstromningen (vasokonstriksjon), som begrenser hevelse og bloedning. Gir smertelindring ved a redusere nerveledningshastigheten.

**C - Compression (Kompresjon)**
- Legg en elastisk bandasje rundt det skadede omraadet
- Bandasjen skal vaere fast, men ikke saa stram at den hindrer blodsirkulasjonen
- Sjekk at fingrene/taerne forblir varme og har normal farge
- Kan kombineres med is (kompresjonsbandasje utenpaa ispakning)
- Fysiologisk begrunnelse: Begrenser hevelse ved a motvirke vaeskelekkasje fra skadede blodkar

**E - Elevation (Elevasjon)**
- Loft den skadede kroppsdelen over hjertenivaa
- Eksempel: Ved ankelskade, legg foten opp paa en benk eller puter
- Kombiner med kompresjon for best effekt
- Fysiologisk begrunnelse: Utnytter tyngdekraften til a fremme venoes tilbakestromning og redusere hevelse`,
    },
    {
      id: 'tr2-6-5-note-police',
      type: 'note',
      title: 'Fra PRICE til POLICE',
      content: 'I nyere forskning har man gaatt over fra PRICE til POLICE: Protection, Optimal Loading, Ice, Compression, Elevation. Forskjellen er at "Rest" er erstattet med "Optimal Loading" (optimal belastning). Dette reflekterer erkjennelsen av at fullstendig hvile sjelden er optimalt, og at kontrollert, smertefri belastning i den tidlige fasen stimulerer vevshelingen og forebygger muskelatrofi og stivhet.',
    },
    {
      id: 'tr2-6-5-text-vurdering',
      type: 'text',
      title: 'Vurdering av skadealvor paa banen',
      content: `Naar en utover skades paa banen, maa du raskt vurdere skadens alvorlighetsgrad for a avgjore riktig tiltak. Folg en systematisk tilnaerming:

**Steg 1: Sikre situasjonen**
- Er spilleromraadet trygt? (Stopp spillet om nodvendig)
- Er utoveren ved bevissthet?
- Foreligger det fare for nakke- eller ryggskade?

**Steg 2: Forste vurdering (ABCDE)**
Ved alvorlige situasjoner, sjekk:
- **A (Airway):** Er luftveiene frie?
- **B (Breathing):** Puster personen normalt?
- **C (Circulation):** Er det puls? Er det alvorlig bloedning?
- **D (Disability):** Bevissthetsnivaa, nevrologisk status
- **E (Exposure):** Undersok skadeomraadet visuelt

**Steg 3: Spesifikk skadevurdering**
- Spor utoveren om skademekanismen (hva skjedde?)
- Vurder smerte: Hvor gjor det vondt? Hvor intenst (0-10)?
- Undersok: Hevelse, misfarging, feilstilling, instabilitet
- Test funksjon: Kan utoveren bevege kroppsdelen? Baere vekt?

**Steg 4: Avgjorelse**
Basert paa vurderingen, ta en avgjorelse:
- **Kan fortsette:** Minimal smerte, full funksjon, ingen tegn til alvorlig skade
- **Kan ikke fortsette, men ikke akutt:** PRICE-behandling, vurdere naermere etter kamp/trening
- **Akutt medisinsk hjelp nodvendig:** Se kriteriene nedenfor`,
    },
    {
      id: 'tr2-6-5-text-alvorlig',
      type: 'text',
      title: 'Naar maa utoveren til lege eller legevakt?',
      content: `Visse tegn og symptomer krever umiddelbar medisinsk vurdering. Ring 113 (akutt) eller oppsok legevakt ved folgende:

**Ring 113 umiddelbart ved:**
- Bevissthetsforstyrrelse eller bevisstloesehet
- Mistanke om nakke- eller ryggskade
- Pustevansker
- Alvorlig bloedning som ikke stopper
- Kramper
- Alvorlig allergisk reaksjon
- Mistanke om hjertestans

**Oppsok legevakt ved:**
- Mistanke om brudd (feilstilling, krepitasjon, manglende evne til a belaste)
- Mistanke om leddluksasjon (leddet staar i feilstilling)
- Store leddbaaandskader med betydelig instabilitet
- Hodeskade med kvalme, oppkast, synsforstyrrelser eller forvirring
- Kutt som krever sting
- Skade med rask og stor hevelse (kan indikere bloedning)
- Smerter som ikke avtar med PRICE-behandling
- Manglende folelelse eller bevegelighet distalt for skaden

**Viktig huskeregel:** Naar du er usikker, er det alltid bedre a la en fagperson vurdere skaden enn a ta sjanser. Som trener eller medutover er oppgaven a gi forstehjelp og sende videre til riktig behandlingsinstans.`,
    },
    {
      id: 'tr2-6-5-example-akutt',
      type: 'example',
      title: 'Akutthaandtering paa fotballbanen',
      problem: 'Under en fotballkamp vrider en spiller ankelen etter en takling. Spilleren ligger paa bakken og holder seg til ankelen. Beskriv steg for steg hvordan du haandterer situasjonen.',
      solution: `**Steg 1: Sikre situasjonen**
- Signal til dommer om a stoppe spillet
- Gaa rolig ut paa banen til spilleren

**Steg 2: Forste vurdering**
- Spilleren er ved bevissthet og kommuniserer - ingen grunn til ABCDE-vurdering
- Ingen tegn til nakke-/ryggskade

**Steg 3: Spesifikk vurdering**
- Spor: "Hva skjedde? Hvor gjor det vondt?"
- Spilleren sier at ankelen vred seg innover under takling
- Smerte paa utsiden av ankelen, nivaa 7/10
- Undersokelse: Hevelse begynner paa utsiden av ankelen, omhet over laterale baand
- Funksjon: Spilleren kan bevege ankelen noe, men kan ikke staa paa foten

**Steg 4: Avgjorelse**
- Spilleren kan ikke fortsette kampen
- Ingen tegn paa brudd (ingen feilstilling, kan bevege taaer), men betydelig skade
- Iverksett PRICE-behandling paa sidelinja

**PRICE-gjennomforing:**
- P: Ta av fotballsko og leggskinn forsiktig
- R: Spilleren sitter/ligger paa sidelinja, bruker krykker
- I: Is i pose med klede rundt, paa utsiden av ankelen i 15-20 min
- C: Elastisk bandasje rundt ankelen (fast, men ikke for stramt)
- E: Foten heves opp paa koffert eller benk, over hjertenivaa

**Oppfolging:** Anbefal legevurdering for a utelukke brudd og vurdere skadens omfang.`,
    },
    {
      id: 'tr2-6-5-warning-nakke',
      type: 'warning',
      title: 'Nakke- og ryggskader',
      content: 'Ved mistanke om nakke- eller ryggskade, ALDRI flytt paa utoveren. Hold hodet og nakken i noytral stilling, ring 113 umiddelbart, og vent paa ambulansepersonell. Unntak: Dersom utoveren er bevisstloes og ikke puster, maa du forsiktig aapne luftveiene og starte livreddende forstehjelp. I kontaktidretter som rugby, ishockey og amerikansk fotball bor det alltid vaere en plan for haandtering av nakke-/ryggskader.',
    },
    {
      id: 'tr2-6-5-text-hodeskader',
      type: 'text',
      title: 'Hjernerystelse i idrett',
      content: `Hjernerystelse (commotio cerebri) er en mild traumatisk hjerneskade som er stadig mer i fokus i idretten. Det er viktig a gjenkjenne symptomene og haandtere dem riktig.

**Symptomer paa hjernerystelse:**
- Hodepine
- Svimmelhet og balansevansker
- Kvalme eller oppkast
- Folelelse av a vaere i taake
- Forvirring, konsentrasjonsvansker
- Hukommelsestap (kan ikke huske hendelsen)
- Synsforstyrrelser
- Overfoleomhet for lys og lyd

**Haandtering:**
1. Ta utoveren ut av spill umiddelbart ("If in doubt, sit them out")
2. Ikke la utoveren returnere til aktivitet samme dag
3. Medisinsk vurdering innen 24 timer
4. Folg gradvis return-to-play-protokoll (vanligvis minst 7 dager)
5. Hvert steg i protokollen varer minimum 24 timer

**Gradvis tilbakevending etter hjernerystelse:**
- Steg 1: Symptomfri hvile
- Steg 2: Lett aerob aktivitet (gange, sykling)
- Steg 3: Idrettsspesifikk trening uten kontakt
- Steg 4: Trening med kontakt etter medisinsk godkjenning
- Steg 5: Full deltakelse

Ved tilbakefall av symptomer i noe steg, gaa tilbake til forrige steg.`,
    },
    {
      id: 'tr2-6-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr2-6-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva staar bokstavene i PRICE for?',
        options: [
          { id: 'a', text: 'Power, Resistance, Intensity, Control, Endurance', isCorrect: false },
          { id: 'b', text: 'Protection, Rest, Ice, Compression, Elevation', isCorrect: true },
          { id: 'c', text: 'Prevention, Recovery, Immobilization, Cooling, Exercise', isCorrect: false },
          { id: 'd', text: 'Pressure, Relaxation, Icing, Circulation, Evaluation', isCorrect: false },
        ],
        solution: 'PRICE staar for Protection (beskyttelse), Rest (relativ hvile), Ice (is/kjooling), Compression (kompresjon) og Elevation (elevasjon). Disse prinsippene brukes som forstehjelp ved akutte blovtdelsskader for a begrense hevelse, blodning og smerte.',
      },
    },
    {
      id: 'tr2-6-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr2-6-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvor lenge bor is ligge paa en akutt skade om gangen?',
        options: [
          { id: 'a', text: '5 minutter', isCorrect: false },
          { id: 'b', text: '15-20 minutter', isCorrect: true },
          { id: 'c', text: '45-60 minutter', isCorrect: false },
          { id: 'd', text: 'Kontinuerlig i flere timer', isCorrect: false },
        ],
        solution: 'Is eller kuldepakning bor ligge paa i 15-20 minutter om gangen, med minst 2 timer mellom hver behandling de forste 48-72 timene. For kort tid gir liten effekt, mens for lang tid kan gi frostskader og faktisk oke blodningen gjennom reaktiv vasodilatasjon. Bruk alltid et tynt klede mellom is og hud.',
      },
    },
    {
      id: 'tr2-6-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr2-6-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv PRICE-prinsippene i detalj. For hvert prinsipp, forklar hva som gjores og den fysiologiske begrunnelsen.',
        solution: 'P - Protection: Beskytt skadet omraade mot videre belastning, stopp aktiviteten. Fysiologisk begrunnelse: forhindrer ytterligere vevsskade og bloedning. R - Rest: Avlast omraadet, unngaa smerteprovoserende aktivitet. Relativ hvile betyr smertefri bevegelse kan opprettholdes. Fysiologisk: gir vevet mulighet til a starte helingsprosessen. I - Ice: 15-20 minutter med klede mellom is og hud. Fysiologisk: vasokonstriksjon reduserer bloedning og hevelse, smertelindring gjennom redusert nerveledning. C - Compression: Elastisk bandasje, fast men ikke for stram. Fysiologisk: motvirker vaeskelekkasje fra skadede blodkar og begrenser hevelse. E - Elevation: Loft skadet kroppsdel over hjertenivaa. Fysiologisk: tyngdekraften fremmer venoes tilbakestromning og reduserer hevelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-6-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr2-6-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar forskjellen mellom PRICE og POLICE. Hvorfor har man gaatt over til a anbefale POLICE?',
        solution: 'PRICE staar for Protection, Rest, Ice, Compression, Elevation. POLICE staar for Protection, Optimal Loading, Ice, Compression, Elevation. Forskjellen er at "Rest" (hvile) er erstattet med "Optimal Loading" (optimal belastning). Bakgrunnen er at nyere forskning viser at fullstendig hvile sjelden er optimalt for vevshelingen. Kontrollert, smertefri belastning i den tidlige fasen stimulerer vevshelingen ved a fremme kollagensyntese og organisering. I tillegg forebygger tidlig belastning muskelatrofi, stivhet og nedsatt propriosepsjon som oppstaar ved langvarig immobilisering. Optimal belastning betyr at man finner det riktige nivaaet av belastning som stimulerer heling uten a forverre skaden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-6-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr2-6-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Beskriv den gradvise return-to-play-protokollen etter hjernerystelse. Forklar hvert steg og hvorfor det er viktig a folge protokollen noye.',
        solution: 'Etter hjernerystelse folges en 5-stegs protokoll der hvert steg varer minst 24 timer: Steg 1 - Symptomfri hvile: Ingen fysisk eller kognitiv belastning til symptomfrihet. Steg 2 - Lett aerob aktivitet: Gange eller rolig sykling for a teste toleranse. Steg 3 - Idrettsspesifikk trening uten kontakt: Dribleovelser, loping, teknisk trening. Steg 4 - Trening med kontakt etter medisinsk godkjenning: Full deltakelse i treningsaktiviteter. Steg 5 - Full deltakelse i kamp. Ved tilbakefall av symptomer i noe steg, gaar man tilbake til forrige steg. Det er viktig a folge protokollen fordi: 1) Hjernen trenger tid til a hele. 2) For tidlig belastning kan forverre skaden og forlenge restitusjonstiden. 3) Gjentatte hjernerystelser kan gi alvorlige langtidsskader. 4) "Second impact syndrome" (ny hjernerystelse for den forste er helet) kan vaere livstruende.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-6-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr2-6-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Du er trener for et handballag. Under kamp faller en spiller og slaar hodet i gulvet. Beskriv steg for steg hvordan du haandterer situasjonen, inkludert vurdering av alvorlighetsgrad og videre oppfolging.',
        solution: 'Steg 1 - Sikre situasjonen: Signal til dommer om a stoppe spillet. Gaa ut paa banen. Steg 2 - Forste vurdering: Sjekk om spilleren er ved bevissthet. Hvis bevisstloes: sjekk pust og puls, ring 113, start livreddende forstehjelp om nodvendig. Hvis bevisst: ikke flytt spilleren for du har vurdert nakken. Steg 3 - Skadevurdering: Spor om smerter i nakke/rygg. Hvis nei, hjelp spilleren opp i sittende stilling. Sjekk hjernerystelsessymptomer: hodepine, svimmelhet, kvalme, forvirring, hukommelsestap, synsforstyrrelser. Still orienteringssporsmal (dag, sted, motstander). Steg 4 - Avgjorelse: Ved minste mistanke om hjernerystelse: ta spilleren ut av kampen ("If in doubt, sit them out"). Spilleren skal IKKE returnere til spill samme dag. Ved alvorlige tegn (oppkast, kramper, bevisstloesehet, forverring): ring 113. Oppfolging: Sorg for at spilleren ikke er alene de neste 24 timene. Legevurdering innen 24 timer. Folg gradvis return-to-play-protokoll (minimum 7 dager). Dokumenter hendelsen i skadeloggen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Eksporter alle delkapitler
// ============================================================================

export const TRENING_2_DEL6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TRENING_2_6_1,
  CHAPTER_TRENING_2_6_2,
  CHAPTER_TRENING_2_6_3,
  CHAPTER_TRENING_2_6_4,
  CHAPTER_TRENING_2_6_5,
];

export function getTrening2Del6Chapter(chapterId: string): TextbookChapter | undefined {
  return TRENING_2_DEL6_CHAPTERS.find(chapter => chapter.id === chapterId);
}
