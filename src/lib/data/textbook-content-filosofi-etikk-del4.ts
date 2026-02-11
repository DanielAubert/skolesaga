/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Filosofi og etikk (VG2/VG3) - Del 4
 * Seksjon 4: Anvendt etikk
 */

import type { TextbookChapter } from '@/lib/types/textbook';

const CHAPTER_FILOSOFI_ETIKK_4_1: TextbookChapter = {
  id: 'filosofi-etikk-4-1',
  chapterNumber: '4.1',
  title: 'Medisinsk etikk',
  subject: 'Filosofi og etikk',
  gradeLevel: 'VG2/VG3',
  estimatedTime: '25 minutter',
  content: [
    {
      type: 'text',
      id: 'fil-4-1-intro',
      content: `# Medisinsk etikk

Få områder reiser så mange vanskelige etiske spørsmål som medisin og helsevesen. Når skal et liv begynne å få full moralsk status? Når skal livsforlengende behandling avsluttes? Hvem skal prioriteres når ressursene er knappe? Medisinsk etikk handler om å navigere i disse komplekse spørsmålene, der vitenskapelig kunnskap må balanseres mot grunnleggende verdier som autonomi, veldedighet og rettferdighet.`
    },
    {
      type: 'text',
      id: 'fil-4-1-abort',
      content: `## Abort og fosterets moralske status

Abortdebatten dreier seg fundamentalt om fosterets moralske status. Når får et foster slike rettigheter at abort blir moralsk problematisk? Ulike posisjoner gir forskjellige svar:

**Konservativ posisjon**: Livet begynner ved unnfangelsen. Fosteret har full moralsk status fra befruktning, og abort er derfor moralsk likeverdig med drap.

**Liberal posisjon**: Fosterets moralske status utvikles gradvis. Full personrettigheter oppnås først senere i svangerskapet, eller ved fødsel. Kvinnens rett til selvbestemmelse veier tungt.

**Moderat posisjon**: Fosterets verdi øker med utviklingen. Tidlig abort er mer akseptabelt enn sen abort. Balansen mellom fosterets interesser og kvinnens autonomi endres over tid.

Filosofen Judith Jarvis Thomson argumenterte med et kjent tankeeksperiment: Selv om vi godtar at fosteret har rett til liv, følger det ikke nødvendigvis at abort alltid er galt. Hun sammenlignet situasjonen med å bli koblet til en berømt fiolinist som trenger dine nyrer for å overleve. Har du plikt til å forbli koblet i ni måneder?`
    },
    {
      type: 'example',
      id: 'fil-4-1-example-1',
      title: 'Den norske abortloven',
      content: `Den norske abortloven (1978) reflekterer en pragmatisk mellomposisjon:

**Selvbestemt abort**: Frem til 12. uke kan kvinnen selv bestemme
**Nemndbehandling**: Mellom 12. og 18. uke må en nemnd godkjenne
**Særlige grunner**: Etter 18. uke kun ved alvorlig sykdom hos mor eller foster

Loven balanserer hensynet til kvinnens selvbestemmelse mot fosterets økende moralske status. Den anerkjenner at spørsmålet er komplekst og krever ulike prosedyrer i ulike faser.`
    },
    {
      type: 'text',
      id: 'fil-4-1-eutanasi',
      content: `## Eutanasi og dødshjelp

Spørsmålet om aktiv dødshjelp reiser grunnleggende spørsmål om livets hellighet, autonomi og menneskeverd. Hovedposisjonene er:

**Mot aktiv dødshjelp**:
- Livet er hellig og må beskyttes absolutt
- Fare for press mot sårbare grupper
- Leger skal helbrede, ikke drepe
- Risiko for glidning mot bredere aksept

**For aktiv dødshjelp**:
- Respekt for autonomi - retten til å bestemme over eget liv
- Lindring av uutholdelig lidelse
- Verdighet i livets sluttfase
- Allerede akseptert passiv dødshjelp (avslutte behandling)

Skillet mellom aktiv og passiv dødshjelp er filosofisk problematisk. Hvis konsekvensen er den samme (døden), er det moralsk relevant om vi aktivt forårsaker den eller passivt lar den skje? Noen hevder at intensjonen er lik, og at skillet derfor er kunstig.`
    },
    {
      type: 'text',
      id: 'fil-4-1-informert-samtykke',
      content: `## Informert samtykke og paternalisme

Et grunnprinsipp i moderne medisin er kravet om informert samtykke. Pasienten må:
- Motta tilstrekkelig og forståelig informasjon
- Ha kapasitet til å forstå informasjonen
- Være fri fra tvang eller manipulasjon
- Aktivt samtykke til behandlingen

Dette prinsippet står mot medisinsk paternalisme, der legen vet best og kan bestemme over pasienten. Men hvor langt strekker autonomien seg?

**Dilemmaer**:
- Hva hvis pasienten ikke forstår kompleks medisinsk informasjon?
- Hva hvis pasienten velger behandling legen mener er skadelig?
- Hva med barn eller personer med demens?
- Er det grenser for hva et informert samtykke kan legitimere?

Balansen mellom respekt for autonomi og veldedighet (handle til pasientens beste) er et kjerneproblem i medisinsk etikk.`
    },
    {
      type: 'text',
      id: 'fil-4-1-prioritering',
      content: `## Prioritering og rettferdighet i helsevesenet

Ingen helsetjeneste har ubegrensede ressurser. Prioritering er derfor nødvendig, men reiser vanskelige rettferdighetsspørsmål:

**Prioriteringsprinsipper**:

1. **Nytteetikk**: Maksimer total helse. Behandle flest mulig, eller de som får størst nytte. Dette kan favorisere unge fremfor eldre.

2. **Egalitarisme**: Alle har lik rett til behandling. Men er det rettferdig å bruke like mye på alle, uavhengig av nytte?

3. **Prioritarisme**: Gi særlig vekt til de dårligst stilte. Men hvordan balanseres dette mot effektivitet?

4. **Medisinskfaglige kriterier**: Alvorlighetsgrad og effekt av behandling. Hvem definerer alvorlighet?

Norge bruker «alvorlighet, nytte og ressursbruk» som hovedkriterier. Men hvordan skal disse veies mot hverandre i konkrete tilfeller?`
    },
    {
      type: 'example',
      id: 'fil-4-1-example-2',
      title: 'Prioriteringsdebatt: Dyre kreftmedisiner',
      content: `Skal fellesskapet finansiere kreftmedisiner som koster flere millioner kroner og bare forlenger livet med noen måneder?

**Argumenter for**:
- Livskvalitet i siste tid er uvurderlig
- Rettferdighet: ikke diskriminer basert på sykdomstype
- Håp og teknologisk fremgang

**Argumenter mot**:
- Ressursene kunne reddet flere liv andre steder
- Kostnadseffektivitet må vurderes
- Begrensede ressurser krever vanskelige valg

Dette dilemmaet illustrerer spenningen mellom individuelle rettigheter og kollektiv nytte.`
    },
    {
      type: 'text',
      id: 'fil-4-1-genredigering',
      content: `## Genredigering og fremtidens medisin

CRISPR-teknologien gjør det mulig å redigere menneskers genetiske materiale med presisjon. Dette åpner fantastiske muligheter, men også etiske utfordringer:

**Terapeutisk genredigering**: Behandle eller forebygge alvorlige sykdommer. Få bestrider dette prinsipielt.

**Forbedring (enhancement)**: Gjøre friske mennesker «bedre» - smartere, sterkere, mer motstandsdyktige. Her oppstår kontroversene:

- Vil det skape urettferdige fordeler for de rike?
- Undergraver det aksepten for menneskelig mangfold?
- Hva er forskjellen på behandling og forbedring?
- Hvem bestemmer hva som er en «forbedring»?

Filosofen Michael Sandel advarer mot «hypende foreldreskap» - trangen til å designe perfekte barn. Han mener det undergraver vår evne til å akseptere det «givne» og kan true grunnleggende verdier som solidaritet og ydmykhet.`
    },
    {
      type: 'text',
      id: 'fil-4-1-oppsummering',
      content: `## Felles utfordringer i medisinsk etikk

Tvers gjennom disse temaene finner vi tilbakevendende etiske utfordringer:

- **Autonomi vs. veldedighet**: Respekt for selvbestemmelse mot å handle til pasientens beste
- **Individ vs. kollektiv**: Individuelle rettigheter mot samfunnets ressurser
- **Liv vs. livskvalitet**: Livets helligdom mot lindring av lidelse
- **Naturlig vs. kunstig**: Respekt for det naturlige mot teknologisk intervensjon
- **Nåtid vs. fremtid**: Dagens pasienter mot fremtidige generasjoner

Medisinsk etikk krever ikke bare prinsipiell tenkning, men også praktisk klokskap - evnen til å navigere mellom konkurrerende verdier i komplekse situasjoner.`
    }
  ],
  exercises: [
    {
      id: 'fil-4-1-ex-1',
      type: 'multiple-choice',
      question: 'Hva mener konservative i abortdebatten om fosterets moralske status?',
      options: [
        'Den utvikles gradvis gjennom svangerskapet',
        'Den oppstår ved unnfangelsen',
        'Den oppstår ved fødsel',
        'Den avhenger av kvinnens vurdering'
      ],
      correctAnswer: 1,
      explanation: 'Den konservative posisjonen hevder at livet og full moralsk status begynner ved unnfangelsen.'
    },
    {
      id: 'fil-4-1-ex-2',
      type: 'classic',
      question: 'Forklar Judith Jarvis Thomsons fiolinist-argument og hva det skal vise i abortdebatten.',
      sampleAnswer: 'Thomson argumenterer at selv om fosteret har rett til liv, betyr ikke dette automatisk at abort er galt. Hun bruker et tankeeksperiment: Hvis du våkner koblet til en berømt fiolinist som trenger dine nyrer i ni måneder, har du plikt til å forbli koblet? Thomson mener nei - selv om fiolinisten har rett til liv, har ikke personen rett til bruk av din kropp. Analogien skal vise at fosterets rett til liv ikke automatisk gir det rett til kvinnens kropp.'
    },
    {
      id: 'fil-4-1-ex-3',
      type: 'multiple-choice',
      question: 'Hva er det sentrale prinsippet for informert samtykke?',
      options: [
        'Legen vet best og bør bestemme behandling',
        'Pasienten må få tilstrekkelig informasjon og frivillig samtykke',
        'Familien bør involveres i alle beslutninger',
        'Økonomiske hensyn må veie tungt'
      ],
      correctAnswer: 1,
      explanation: 'Informert samtykke krever at pasienten får forståelig informasjon, har kapasitet til å forstå den, er fri fra tvang, og aktivt samtykker til behandlingen.'
    },
    {
      id: 'fil-4-1-ex-4',
      type: 'classic',
      question: 'Diskuter skillet mellom aktiv og passiv dødshjelp. Er det moralsk relevant?',
      sampleAnswer: 'Aktiv dødshjelp er å aktivt forårsake døden (gi dødelig medisin), mens passiv dødshjelp er å avslutte livsforlengende behandling og la døden skje. Noen mener skillet er moralsk relevant fordi å aktivt drepe er verre enn å la dø. Andre hevder skillet er kunstig når intensjonen og konsekvensen er lik. Hvis målet i begge tilfeller er å avslutte pasientens lidelse og resultatet er døden, er handlingen moralsk likeverdig. Debatten berører dypere spørsmål om handling vs. unnlatelse og viktigheten av intensjon.'
    },
    {
      id: 'fil-4-1-ex-5',
      type: 'multiple-choice',
      question: 'Hvilke kriterier bruker Norge primært for prioritering i helsetjenesten?',
      options: [
        'Kun alder og livslengde',
        'Alvorlighet, nytte og ressursbruk',
        'Kun økonomisk kostnadseffektivitet',
        'Loddtrekning mellom pasienter'
      ],
      correctAnswer: 1,
      explanation: 'Norge bruker alvorlighet, nytte (effekt av behandling) og ressursbruk som hovedkriterier for prioritering i helsetjenesten.'
    },
    // --- Samleoppgaver ---
    {
      id: 'fil-4-1-ex-6',
      type: 'classic',
      question: 'Analyser prioriteringsdebatten om dyre kreftmedisiner ut fra både nytteetisk og rettferdighetsetisk perspektiv. Hva ville de ulike teoriene konkludere?',
      sampleAnswer: 'Nytteetisk perspektiv: Vil vurdere om millioner brukt på å forlenge ett liv med måneder gir størst total velferd, sammenlignet med å bruke ressursene på behandlinger som kan redde flere liv. Kan konkludere med at ressursene bør brukes der de gir størst samlet nytte. Rettferdighetsetisk perspektiv: Vil vektlegge at alle har lik rett til behandling uavhengig av kostnader. Ingen skal diskrimineres basert på hvilken sykdom de har. Kan også hevde at de som er dårligst stilt (alvorlig syke) har særskilt krav på ressurser. Spenningen viser at prioritering krever balansegang mellom effektivitet og rettferdighet.'
    },
    {
      id: 'fil-4-1-ex-7',
      type: 'classic',
      question: 'Forklar Michael Sandels bekymring mot genredigering for «forbedring» (enhancement). Drøft om bekymringen er begrunnet.',
      sampleAnswer: 'Sandel advarer mot «hypende foreldreskap» - trangen til å designe perfekte barn. Han mener genredigering for forbedring undergraver vår evne til å akseptere det «givne», og kan true verdier som solidaritet (fordi vi mener alle selv er ansvarlige for sine egenskaper) og ydmykhet (tro på at vi kan kontrollere alt). Bekymringen er begrunnet fordi: Det kan skape genetisk ulikhet mellom rike og fattige, underminere aksept for menneskelig mangfold, og endre forståelsen av foreldreskap fra kjærlighet til design. Men kritikere kan hevde: Vi aksepterer allerede ulikheter fra naturlig genetikk og oppdragelse. Å forhindre sykdom og lidelse er moralsk verdifullt. Skillet mellom behandling og forbedring er uklart.'
    }
  ]
};

const CHAPTER_FILOSOFI_ETIKK_4_2: TextbookChapter = {
  id: 'filosofi-etikk-4-2',
  chapterNumber: '4.2',
  title: 'Miljøetikk og dyrerettigheter',
  subject: 'Filosofi og etikk',
  gradeLevel: 'VG2/VG3',
  estimatedTime: '20 minutter',
  content: [
    {
      type: 'text',
      id: 'fil-4-2-intro',
      content: `# Miljøetikk og dyrerettigheter

Tradisjonell etikk har primært handlet om forholdet mellom mennesker. Men hva med vårt ansvar overfor naturen, dyr, og fremtidige generasjoner? Miljøetikk og dyrerettighetsfilosofi utfordrer antroposentrismen - ideen om at bare mennesker har moralsk verdi. Disse spørsmålene blir stadig mer presserende i møte med klimakrise og masseutryddelse av arter.`
    },
    {
      type: 'text',
      id: 'fil-4-2-antroposentri',
      content: `## Antroposentrisme vs. økosentrisme

**Antroposentrisme** plasserer mennesket i sentrum av den moralske vurderingen. Naturen har verdi kun som middel for menneskelige formål:

- Naturen er ressurs for menneskets behov
- Vi bør verne miljøet for våre etterkommeres skyld
- Økologisk balanse er viktig fordi det tjener menneskets interesser

Denne posisjonen dominerte vestlig tenkning, forsterket av kristendommen (mennesket har herredømme over skaperverket) og opplysningstiden (fornuften skiller mennesker fra dyr).

**Biosentrisme** hevder at alt levende har egenverdi, ikke bare mennesker:

- Planter, dyr og økosystemer har verdi i seg selv
- Naturen har rettigheter uavhengig av nytten for mennesker
- Vi har direkte moralsk forpliktelse overfor naturen

**Økosentrisme** går enda lenger og tillegger hele økosystemer og naturen som helhet moralsk status. Individer er mindre viktige enn økosystemets helse og balanse.`
    },
    {
      type: 'example',
      id: 'fil-4-2-example-1',
      title: 'Arne Næss og dypøkologi',
      content: `Den norske filosofen Arne Næss utviklet «dypøkologien» som alternativ til «grunn økologi».

**Grunn økologi**: Verner miljøet av instrumentelle grunner - for menneskets skyld.

**Dypøkologi**: Bygger på to prinsipper:
1. All liv har egenverdi, uavhengig av nytte for mennesker
2. Rikdom og mangfold i livsformer har verdi i seg selv

Næss argumenterte for en radikal endring i vår relasjon til naturen - fra dominans til respektfull sameksistens. Hans «Økosofisk plattform» inkluderte prinsippet om at mennesker ikke har rett til å redusere biologisk mangfold, bortsett fra for vitale behov.`
    },
    {
      type: 'text',
      id: 'fil-4-2-dyr-lidelse',
      content: `## Dyrs moralske status: Lidelse og bevissthet

Jeremy Bentham skrev i 1789: «Spørsmålet er ikke 'Kan de tenke?' eller 'Kan de snakke?', men 'Kan de lide?'» Dette sitatet ble fundamentet for moderne dyrerettighetsfilosofi.

Hvis evnen til å lide er relevant for moralsk status, må vi inkludere dyr i våre moralske vurderinger. Nesten alle er enige om at unødvendig dyrelidelse er galt. Men hva teller som «unødvendig»?

**Faktorer som kan gi moralsk status**:
- Evne til å føle smerte og lide
- Bevissthet og selvbevissthet
- Rasjonalitet og språk
- Sosiale relasjoner og følelser
- Egeninteresser og preferanser

Jo flere av disse egenskapene en organisme har, desto sterkere moralsk status vil mange hevde den har. Men hvor trekker vi grensen?`
    },
    {
      type: 'text',
      id: 'fil-4-2-singer',
      content: `## Peter Singers dyrerettighetsargument

Filosofen Peter Singer argumenterer for at artsdiskriminering (speciesism) er moralsk likeverdig med rasisme eller sexisme. Å behandle vesener forskjellig kun basert på art, når de har like interesser, er urettferdig.

**Singers argument**:

1. Lidelse er dårlig, uavhengig av hvem som lider
2. Dyr kan lide på lignende måter som mennesker
3. Det er ingen moralsk relevant forskjell mellom menneske- og dyrelidelse
4. Vi må derfor gi lik moralsk vekt til lik lidelse

**Konsekvenser**: Singer konkluderer at det meste av dagens dyrebruk - industrielt landbruk, dyreforsøk for kosmetikk, sportsjakt - er moralsk uakseptabelt fordi lidelsen overgår den trivielle nytten for mennesker.

**Kritikk**: Singer får kritikk for å undergrave menneskeverdet ved å sidestille menneske- og dyrelidelse. Andre hevder at evner som rasjonalitet, selvbevissthet og moralsk agens gjør mennesker moralsk forskjellige.`
    },
    {
      type: 'text',
      id: 'fil-4-2-rettigheter',
      content: `## Dyrerettigheter: Tom Regan

Mens Singer bruker nytteetikk, bygger Tom Regan på rettighetsbasert etikk. Han argumenterer at mange dyr er «subjekter-av-et-liv» (subjects-of-a-life):

- De har opplevelser, følelser og preferanser
- De har en velferd som betyr noe for dem
- De har iboende verdi, ikke bare instrumentell verdi

Dyr som er subjekter-av-et-liv har **moralske rettigheter** som ikke kan krenkes selv om det maksimerer total lykke. Dette står i kontrast til Singers nytteetikk.

**Implikasjoner**: Regan går lenger enn Singer. Han hevder at all bruk av dyr som «ressurser» - inkludert mat, forskning, underholdning - krenker deres rettigheter og må opphøre.

**Utfordring**: Hvor går grensen for hvilke dyr som er subjekter-av-et-liv? Pattedyr åpenbart, men hva med fisk, insekter, bløtdyr?`
    },
    {
      type: 'text',
      id: 'fil-4-2-barekraft',
      content: `## Bærekraft og intergenerasjonell rettferdighet

Miljøetikk handler ikke bare om naturen for dens egen skyld, men også om rettferdighet mellom generasjoner. FNs bærekraftskommisjon definerte bærekraftig utvikling som:

> «Utvikling som imøtekommer dagens behov uten å ødelegge mulighetene for at kommende generasjoner skal få dekket sine behov.»

**Etiske utfordringer**:

1. **Diskontert fremtid**: Økonomiske modeller «diskonterer» fremtidige verdier. Er dette moralsk forsvarlig? Har fremtidige mennesker like rettigheter som dagens?

2. **Ikke-identitetsproblem**: Våre handlinger påvirker hvem som vil eksistere i fremtiden. Kan vi skade personer som ennå ikke eksisterer?

3. **Usikkerhet**: Vi vet ikke nøyaktig hvilke konsekvenser våre handlinger har for fremtiden. Hvor forsiktige må vi være?

4. **Globale ulikheter**: De fattigste rammes hardest av klimaendringer, men har bidratt minst. Hva krever global rettferdighet?`
    },
    {
      type: 'example',
      id: 'fil-4-2-example-2',
      title: 'Klimaetikk: Hvem har ansvar?',
      content: `Klimakrisen reiser komplekse rettferdighetsspørsmål:

**Historisk ansvar**: Rike land har historisk skapt mesteparten av utslippene. Har de derfor størst ansvar for å kutte og støtte fattige land?

**Nåværende bidrag**: Kina og India står nå for store utslipp. Men per innbygger er utslippene fortsatt langt lavere enn i vesten.

**Evne til handling**: Rike land har ressurser til grønn omstilling. Har de plikt til å handle først og hjelpe andre?

**Rettferdige løsninger må balansere**:
- Prinsippet om felles, men differensiert ansvar
- Retten til utvikling for fattige land
- Nødvendigheten av globale kutt for å unngå katastrofe

Dette viser hvordan miljøetikk er uløselig knyttet til global rettferdighet.`
    },
    {
      type: 'text',
      id: 'fil-4-2-oppsummering',
      content: `## Miljøetikk i praksis

Miljøetiske spørsmål krever at vi revurderer grunnleggende antakelser:

- Er mennesket naturens herre eller del av økosystemet?
- Har naturen og dyr verdi i seg selv, eller kun for oss?
- Hva skylder vi fremtidige generasjoner?
- Hvordan balanserer vi menneskelige behov mot miljøhensyn?

Det finnes ikke enkle svar, men økende konsensus om:
- Vi har moralsk ansvar overfor naturen og fremtiden
- Unødvendig dyrelidelse må minimeres
- Bærekraft krever radikal endring i livsstil og økonomi
- Miljøhensyn må integreres i alle samfunnsområder

Miljøetikk utfordrer oss til å tenke utenfor antroposentriske rammer og anerkjenne vårt gjensidig avhengige forhold til alt levende.`
    }
  ],
  exercises: [
    {
      id: 'fil-4-2-ex-1',
      type: 'multiple-choice',
      question: 'Hva er kjennetegnet på antroposentrisme?',
      options: [
        'Alt levende har egenverdi',
        'Naturen har verdi kun som middel for menneskelige formål',
        'Økosystemets helhet er viktigst',
        'Dyr har samme rettigheter som mennesker'
      ],
      correctAnswer: 1,
      explanation: 'Antroposentrisme plasserer mennesket i sentrum og ser på naturen primært som ressurs for menneskelige behov og interesser.'
    },
    {
      id: 'fil-4-2-ex-2',
      type: 'classic',
      question: 'Forklar forskjellen mellom biosentrisme og økosentrisme.',
      sampleAnswer: 'Biosentrisme hevder at alle levende individer har egenverdi, ikke bare mennesker. Hver plante, dyr og organisme har moralsk status i seg selv. Økosentrisme går lenger og tillegger hele økosystemer og naturen som helhet moralsk status. I økosentrisme er individer mindre viktige enn økosystemets helse og balanse. En biosentriker vil verdsette hvert enkelt tre, mens en økosentriker vil fokusere på skogens funksjon som helhet.'
    },
    {
      id: 'fil-4-2-ex-3',
      type: 'multiple-choice',
      question: 'Hva er Peter Singers hovedargument mot artsdiskriminering (speciesism)?',
      options: [
        'Dyr er like intelligente som mennesker',
        'Å diskriminere basert på art er som rasisme eller sexisme',
        'Dyr har sjeler som mennesker',
        'Økonomiske kostnader ved dyrevelferd er for høye'
      ],
      correctAnswer: 1,
      explanation: 'Singer argumenterer at artsdiskriminering (speciesism) er moralsk likeverdig med rasisme. Å behandle vesener forskjellig kun basert på art, når de har like interesser i å ikke lide, er urettferdig.'
    },
    {
      id: 'fil-4-2-ex-4',
      type: 'classic',
      question: 'Hva er forskjellen mellom Peter Singers og Tom Regans tilnærming til dyrerettigheter?',
      sampleAnswer: 'Singer bruker nytteetikk og argumenterer for at vi må gi lik moralsk vekt til lik lidelse, uavhengig av art. Konsekvensen er at det meste dyrebruk er galt fordi lidelsen overgår nytten. Regan bruker rettighetsbasert etikk og hevder at dyr som er «subjekter-av-et-liv» har iboende verdi og moralske rettigheter. Disse rettighetene kan ikke krenkes selv om det maksimerer total lykke. Regan går derfor lenger enn Singer - han avviser all bruk av dyr som ressurser på prinsipielt grunnlag, ikke bare når lidelsen overgår nytten.'
    },
    {
      id: 'fil-4-2-ex-5',
      type: 'multiple-choice',
      question: 'Hva innebærer intergenerasjonell rettferdighet i miljøetikk?',
      options: [
        'Bare nålevende mennesker har moralske rettigheter',
        'Vi må imøtekomme dagens behov uten å ødelegge for fremtidige generasjoner',
        'Fremtiden diskonteres alltid i økonomiske beslutninger',
        'Miljøhensyn bør ignoreres til fremtidige teknologier løser problemene'
      ],
      correctAnswer: 1,
      explanation: 'Intergenerasjonell rettferdighet handler om at vi har moralsk ansvar overfor fremtidige generasjoner og må sikre bærekraftig utvikling som ikke ødelegger deres muligheter.'
    },
    // --- Samleoppgaver ---
    {
      id: 'fil-4-2-ex-6',
      type: 'classic',
      question: 'Drøft Arne Næss sin dypøkologi: Hva er de sentrale prinsippene, og hvilke konsekvenser ville det få for samfunnet om vi fulgte dem konsekvent?',
      sampleAnswer: 'Næss sin dypøkologi bygger på to prinsipper: (1) Alt liv har egenverdi uavhengig av nytte for mennesker, og (2) Rikdom og mangfold i livsformer har verdi i seg selv. Dette står i kontrast til «grunn økologi» som verner miljøet av instrumentelle grunner. Konsekvent anvendt ville dypøkologi kreve: Drastisk reduksjon i ressursbruk og økonomisk vekst, slutt på industrielt landbruk og masseproduksjon, vern av naturen på dens egne premisser. Kritikere hevder dette er urealistisk og ville true menneskers velferd. Forsvarere mener det er nødvendig for planetens overlevelse og reflekterer en dypere sannhet om vår relasjon til naturen.'
    },
    {
      id: 'fil-4-2-ex-7',
      type: 'classic',
      question: 'Analyser klimakrisen som et etisk problem ut fra både rettferdighet (mellom land og generasjoner) og ulike miljøetiske perspektiver.',
      sampleAnswer: 'Rettferdighet mellom land: Rike land har historisk skapt mesteparten av utslippene, men fattige land rammes hardest av konsekvensene. Global rettferdighet krever at rike land tar størst ansvar for kutt og støtter fattige land, samtidig som alle lands rett til utvikling respekteres. Rettferdighet mellom generasjoner: Vi kan ikke ødelegge livsbetingelsene for fremtidige generasjoner for kortsiktig gevinst. Usikkerheten om konsekvenser krever forsiktighetsprinsippet. Antroposentrisk perspektiv: Klimakrise må løses for menneskets skyld - for å sikre matsikkerhet, helse og fremtidige generasjoners velferd. Økosentrisk perspektiv: Klimakrisen er symptom på menneskets brudd med naturen. Vi må respektere planetens økosystemer uavhengig av menneskelig nytte. Alle perspektiver peker mot nødvendigheten av handling, men med ulike begrunnelser.'
    }
  ]
};

const CHAPTER_FILOSOFI_ETIKK_4_3: TextbookChapter = {
  id: 'filosofi-etikk-4-3',
  chapterNumber: '4.3',
  title: 'Teknologietikk og kunstig intelligens',
  subject: 'Filosofi og etikk',
  gradeLevel: 'VG2/VG3',
  estimatedTime: '25 minutter',
  content: [
    {
      type: 'text',
      id: 'fil-4-3-intro',
      content: `# Teknologietikk og kunstig intelligens

Teknologisk utvikling skjer i et stadig raskere tempo. Kunstig intelligens, bioteknologi, overvåkingsteknologi og sosiale medier endrer fundamentalt hvordan vi lever, jobber og forholder oss til hverandre. Men teknologien er ikke nøytral - den bærer med seg verdier, skaper nye maktrelasjoner og reiser dype etiske spørsmål. Hvordan skal vi navigere i dette teknologiske landskapet samtidig som vi ivaretar grunnleggende menneskelige verdier?`
    },
    {
      type: 'text',
      id: 'fil-4-3-ai-etikk',
      content: `## Kunstig intelligens: Muligheter og utfordringer

AI-systemer blir stadig mer sofistikerte og brukes i alt fra helsetjenester til rettsystem, ansettelsesprosesser og finansielle beslutninger. Dette reiser flere etiske bekymringer:

**1. Algoritmisk bias og diskriminering**

AI-systemer lærer fra historiske data. Hvis dataene inneholder skjevheter (bias), vil systemet reprodusere og forsterke dem. Eksempler:
- Ansettelsesalgoritmer som diskriminerer kvinner
- Ansiktsgjenkjenning som fungerer dårligere på mørke hudfarger
- Kredittscoringsystemer som diskriminerer marginaliserte grupper

Problemet forverres av at algoritmene ofte er «black boxes» - vi forstår ikke hvorfor de tar beslutningene de gjør.

**2. Ansvar og ansvarlighet**

Når en AI-beslutning går galt, hvem er ansvarlig? Utvikleren? Brukeren? Selskapet? Algoritmen selv? Tradisjonell ansvarsetikk forutsetter menneskelige aktører som kan holdes ansvarlige. AI utfordrer dette.

**3. Autonomi og verdighet**

Når algoritmer tar stadig flere beslutninger som påvirker livene våre, risikerer vi å bli redusert til datapunkter. Kan automatiserte beslutninger respektere menneskets verdighet og unike situasjon?`
    },
    {
      type: 'example',
      id: 'fil-4-3-example-1',
      title: 'COMPAS og straffeutmåling',
      content: `COMPAS er et algoritmebasert risikovurderingssystem brukt i amerikanske rettssystemer for å vurdere sannsynligheten for at en person begår ny kriminalitet.

**Problemet**: Undersøkelser viste at systemet var biased mot svarte - det forutsa feilaktig høyere gjentakelsesrisiko for svarte sammenlignet med hvite.

**Etiske dilemmaer**:
- Algoritmisk diskriminering: Systemet reproduserer historisk rasisme i strafferettsystemet
- Ansvar: Hvem er ansvarlig når algoritmen feiler?
- Rettssikkerhet: Tiltalte kan ikke utfordre algoritmens vurdering når den er en «black box»
- Rettferdighet: Er det rettferdig å dømme noen basert på statistiske sannsynligheter?

Dette illustrerer hvordan AI kan forsterke eksisterende urettferdighet i samfunnet.`
    },
    {
      type: 'text',
      id: 'fil-4-3-personvern',
      content: `## Personvern i den digitale tidsalder

«Privacy is dead» sa Facebook-gründer Mark Zuckerberg i 2010. Men er personvern en utdatert verdi, eller mer viktig enn noensinne?

**Hvorfor personvern er viktig**:

1. **Autonomi**: Konstant overvåking påvirker vår frihet til å tenke, utforske og utvikle oss
2. **Verdighet**: Vi har rett til privatliv og kontroll over informasjon om oss selv
3. **Demokrati**: Masseovervåking kan true politisk frihet og dissens
4. **Makt**: Den som kontrollerer data, har makt over individer og samfunn

**«Jeg har ingenting å skjule»-argumentet**:

Mange hevder de ikke bryr seg om personvern fordi de «ikke har noe å skjule». Men:
- Dette tar for gitt at nåværende myndigheter er velvillige
- Kontekst kollapser - informasjon fra én kontekst kan brukes i en annen
- Vi har alle noe privat, selv om det er lovlig
- Personvern handler om kontroll, ikke hemmeligholdelse

**Datamakt og kapitalisme**:

Shoshana Zuboff kaller det «overvåkingskapitalisme» - forretningsmodeller basert på å høste og analysere persondata for å forutsi og påvirke atferd. Dette skaper nye maktasymmetrier mellom teknologiselskaper og brukere.`
    },
    {
      type: 'text',
      id: 'fil-4-3-autonomi',
      content: `## Teknologi og menneskelig autonomi

Teknologi lover å gjøre livet enklere, men kan paradoksalt nok true vår autonomi:

**1. Oppmerksomhetsøkonomi**

Sosiale medier og apper er designet for å maksimere engasjement og skjermtid. Teknikker inkluderer:
- Variable belønninger (uforutsigbar feedback som liker)
- Uendelig scrolling (ingen naturlig stopppunkt)
- FOMO (fear of missing out) - varsler og oppdateringer
- Sosial validering gjennom likes og delinger

Kritikere hevder dette manipulerer vår psykologi og undergraver vår autonomi. Vi tror vi velger fritt, men er faktisk designet til å oppføre oss på bestemte måter.

**2. Filterbobler og ekkokamre**

Algoritmer kuraterer informasjonen vi ser basert på våre preferanser. Dette kan skape:
- Filterbobler: Vi eksponeres bare for synspunkter vi allerede er enige i
- Ekkokamre: Våre meninger forsterkes uten kritisk motstand
- Polarisering: Ulike grupper lever i atskilte informasjonsuniverser

Dette truer det åpne demokratiske ordskiftet som krever eksponering for ulike perspektiver.

**3. Teknologisk paternalisme**

«Nudging» bruker atferdpsykologi til å påvirke valg «for vårt eget beste». Men:
- Hvem bestemmer hva som er best for oss?
- Undergraver det vår evne til reflektert autonomi?
- Hvor går grensen mellom hjelp og manipulasjon?`
    },
    {
      type: 'text',
      id: 'fil-4-3-overvaking',
      content: `## Overvåking og sosial kontroll

**Statlig overvåking**:

Moderne teknologi gir staten enorme overvåkingsevner. Argumenter for omfattende overvåking:
- Sikkerhet og terrorbekjempelse
- Kriminalitetsforebygging
- Effektiv forvaltning

Argumenter mot:
- Trussel mot demokrati og ytringsfriheten
- Risiko for maktmisbruk
- Chilling effect - folk selv-sensurerer av frykt for overvåking
- «Intet å skjule» forutsetter velvillige myndigheter

**Sosial scoring**:

I Kina eksperimenteres det med «sosial kreditt»-systemer som vurderer innbyggeres atferd og belønner/straffer basert på skår. Dette reiser spørsmål om:
- Sosial kontroll og konformitetspress
- Rettferdighet - hvem definerer «god» atferd?
- Menneskeverd - reduseres personer til tall?

**Arbeidsplassovervåking**:

Økende bruk av overvåkingsteknologi på arbeidsplasser:
- Produktivitetssporing, GPS-overvåking, e-postmonitorering
- Balansen mellom arbeidsgivers kontrollbehov og arbeidstakers integritet
- Tillit vs. kontroll som grunnlag for arbeidsforhold`
    },
    {
      type: 'example',
      id: 'fil-4-3-example-2',
      title: 'Ansvarlig AI: EU-regulering',
      content: `EU vedtok i 2024 verdens første omfattende AI-lov (AI Act) for å regulere kunstig intelligens:

**Risikobasert tilnærming**:
- Forbudt AI: Sosial scoring, manipulasjon, sanntids ansiktsgjenkjenning
- Høyrisiko AI: Strenge krav til transparens og testing (kritisk infrastruktur, utdanning, ansettelse, rettssystem)
- Begrenset risiko: Informasjonskrav til brukere
- Minimal risiko: Ubegrenset bruk

**Prinsipper**:
- Menneskesentrert AI
- Transparens og forklarbarheter
- Ansvarlighet
- Ikke-diskriminering

Dette viser forsøk på å balansere innovasjon med etiske hensyn og rettssikkerhet.`
    },
    {
      type: 'text',
      id: 'fil-4-3-fremtid',
      content: `## Eksistensiell AI-risiko og superintelligens

Noen filosofer og forskere advarer om eksistensiell risiko fra avansert AI:

**Nick Bostroms superintelligensargument**:

1. Hvis vi skaper AI som er smartere enn mennesker (superintelligens)
2. Og denne AIen har mål som ikke er perfekt tilpasset våre verdier
3. Vil den være bedre enn oss til å nå sine mål
4. Dette kan føre til katastrofale konsekvenser for mennesker

Problemet er ikke at AIen er «ond», men at den optimaliserer for mål som er forskjellige fra våre. Klassisk tankeeksperiment: En AI programmert til å maksimere produksjon av binders kan ende med å omdanne hele planeten til binders-fabrikker.

**Motargumenter**:
- Spekulativt og langt frem i tid
- Undervurderer hvor vanskelig generell AI er
- Distraherer fra nåværende AI-utfordringer
- Kan bremse nyttig AI-utvikling

**Forsiktighetsprinsippet**: Selv om risikoen er usikker, er konsekvensene potensielt så alvorlige at vi må ta problemet på alvor.`
    },
    {
      type: 'text',
      id: 'fil-4-3-oppsummering',
      content: `## Etisk teknologiutvikling

Teknologietikk krever at vi stiller kritiske spørsmål:

**Før utvikling**:
- Hvilke verdier bygges inn i teknologien?
- Hvem tjener på denne teknologien, og hvem kan bli skadet?
- Finnes det mindre risikable alternativer?

**Under utvikling**:
- Hvordan sikre mangfold i utviklingsteamet?
- Hvordan teste for utilsiktede konsekvenser?
- Hvordan bygge inn etiske safeguards?

**Etter lansering**:
- Hvordan monitorere faktisk bruk og konsekvenser?
- Hvordan håndtere maktasymmetrier?
- Hvordan sikre ansvarlighet?

Teknologien er ikke skjebnebestemt. Vi kan velge hvilken teknologi vi utvikler, hvordan vi utvikler den, og hvordan vi regulerer bruken. Dette krever at etiske refleksjoner integreres fra start, ikke legges til i ettertid.`
    }
  ],
  exercises: [
    {
      id: 'fil-4-3-ex-1',
      type: 'multiple-choice',
      question: 'Hva er problemet med algoritmisk bias i AI-systemer?',
      options: [
        'AI-systemer er alltid nøytrale og objektive',
        'AI lærer fra historiske data og kan reprodusere og forsterke diskriminering',
        'AI kan ikke brukes i viktige beslutninger',
        'AI er for dyrt å implementere'
      ],
      correctAnswer: 1,
      explanation: 'Algoritmisk bias oppstår når AI-systemer lærer fra historiske data som inneholder skjevheter. Systemet reproduserer og kan forsterke eksisterende diskriminering i datasettene.'
    },
    {
      id: 'fil-4-3-ex-2',
      type: 'classic',
      question: 'Forklar hvorfor «jeg har ingenting å skjule»-argumentet er problematisk som forsvar for masseovervåking.',
      sampleAnswer: '«Jeg har ingenting å skjule»-argumentet er problematisk fordi: (1) Det tar for gitt at nåværende myndigheter er velvillige og vil forbli det - men makt kan misbrukes. (2) Kontekst kollapser - informasjon fra én kontekst kan misbrukes i en annen. (3) Vi har alle noe privat selv om det er lovlig. (4) Personvern handler om kontroll og autonomi, ikke bare hemmeligholdelse. (5) Masseovervåking skaper «chilling effect» der folk selv-sensurerer av frykt, noe som truer demokratisk frihet og ytringsfrihet.'
    },
    {
      id: 'fil-4-3-ex-3',
      type: 'multiple-choice',
      question: 'Hva er problemet med filterbobler skapt av algoritmer på sosiale medier?',
      options: [
        'De gir oss for mye informasjon',
        'De eksponerer oss bare for synspunkter vi allerede er enige i',
        'De koster for mye penger',
        'De fungerer ikke teknisk'
      ],
      correctAnswer: 1,
      explanation: 'Filterbobler oppstår når algoritmer kuraterer innhold basert på våre preferanser, slik at vi bare eksponeres for synspunkter vi allerede er enige i. Dette kan føre til polarisering og truer demokratisk ordskifte.'
    },
    {
      id: 'fil-4-3-ex-4',
      type: 'classic',
      question: 'Hva er Shoshana Zuboffs kritikk av «overvåkingskapitalisme»?',
      sampleAnswer: 'Zuboff kritiserer forretningsmodeller basert på å høste og analysere persondata for å forutsi og påvirke atferd. Hun hevder dette skaper nye maktasymmetrier mellom teknologiselskaper og brukere. Selskapene samler inn enorme mengder data om vårt privatliv og bruker den til kommersielle formål uten reell informert samtykke. Dette undergraver vår autonomi ved at vi manipuleres til å oppføre oss på måter som tjener selskapenes interesser. Overvåkingskapitalismen truer derfor grunnleggende demokratiske verdier som personvern, autonomi og likeverdighet.'
    },
    {
      id: 'fil-4-3-ex-5',
      type: 'multiple-choice',
      question: 'Hva er EUs tilnærming til AI-regulering?',
      options: [
        'Totalforbud mot all AI',
        'Ingen regulering - fritt marked',
        'Risikobasert tilnærming med ulike krav til ulike typer AI',
        'Kun teknisk standardisering'
      ],
      correctAnswer: 2,
      explanation: 'EU bruker en risikobasert tilnærming i AI Act, der ulike typer AI møter ulike krav basert på risiko: forbudt AI (sosial scoring), høyrisiko AI (strenge krav), begrenset risiko (informasjonskrav), og minimal risiko (ubegrenset bruk).'
    },
    // --- Samleoppgaver ---
    {
      id: 'fil-4-3-ex-6',
      type: 'classic',
      question: 'Analyser COMPAS-saken ut fra ulike etiske teorier. Hva ville nytteetikk, pliktetikk og dydsetikk si om bruk av algoritmer i straffeutmåling?',
      sampleAnswer: 'Nytteetikk: Ville vurdere om algoritmen maksimerer total velferd. Hvis den reduserer gjentakelseskriminalitet effektivt, kan det rettferdiggjøre bruken. Men algoritmisk bias reduserer total nytte ved å diskriminere og fengsle uskyldige. Pliktetikk: Ville fokusere på menneskers rett til rettferdig behandling. Å dømme noen basert på statistiske sannsynligheter, ikke individuelle handlinger, krenker menneskeverdet og kategoriske imperativ. Black box-problemet gjør det umulig for tiltalte å utfordre vurderingen, noe som bryter med rettssikkerhetsprinsipper. Dydsetikk: Ville spørre hvilke karakteregenskaper systemet fremmer. Overdreven tillit til algoritmer kan undergrave dommer-dyd som praktisk klokskap og dømmekraft. Bias i algoritmen reflekterer og forsterker urettferdighet i samfunnet.'
    },
    {
      id: 'fil-4-3-ex-7',
      type: 'classic',
      question: 'Drøft Nick Bostroms superintelligensargument. Er bekymringen begrunnet, eller distraherer den fra mer presserende AI-etiske utfordringer?',
      sampleAnswer: 'Argumenter for at bekymringen er begrunnet: Hvis vi skaper superintelligens med mål som ikke perfekt matcher våre verdier, kan den optimalisere for disse målene på katastrofale måter. Siden konsekvensene potensielt er eksistensielle, må vi ta problemet alvorlig selv om sannsynligheten er usikker (forsiktighetsprinsippet). Historien viser at teknologi ofte har utilsiktede konsekvenser. Argumenter mot: Spekulativt og langt frem i tid - vi vet ikke om superintelligens er mulig. Undervurderer hvor vanskelig generell AI er å skape. Distraherer fra nåværende, presserende AI-utfordringer som algoritmisk bias, personvern og arbeidsmarkedseffekter. Kan bremse nyttig AI-utvikling gjennom overdreven frykt. Balansert konklusjon: Forskning på AI-sikkerhet er viktig, men må ikke overskygge arbeid med dagens etiske utfordringer.'
    }
  ]
};

const CHAPTER_FILOSOFI_ETIKK_4_4: TextbookChapter = {
  id: 'filosofi-etikk-4-4',
  chapterNumber: '4.4',
  title: 'Rettferdighet og fordeling',
  subject: 'Filosofi og etikk',
  gradeLevel: 'VG2/VG3',
  estimatedTime: '20 minutter',
  content: [
    {
      type: 'text',
      id: 'fil-4-4-intro',
      content: `# Rettferdighet og fordeling

Vi lever i en verden preget av ekstrem ulikhet. De rikeste 1% kontrollerer mer enn halvparten av verdens rikdom, mens milliarder lever i fattigdom. Er dette rettferdig? Har vi moralske forpliktelser overfor mennesker på andre siden av kloden? Global rettferdighet handler om hvordan goder og byrder skal fordeles mellom land og mennesker, og hvilke prinsipper som skal styre det globale økonomiske systemet.`
    },
    {
      type: 'text',
      id: 'fil-4-4-global-rettferdighet',
      content: `## Global rettferdighet: Nasjonalisme vs. kosmopolitisme

To hovedposisjoner dominerer debatten om global rettferdighet:

**Nasjonalisme** (eller partikularisme):
- Vi har særlige forpliktelser overfor våre landsmenn
- Rettferdighet gjelder primært innenfor nasjonalstaten
- Humanitær bistand er veldedighet, ikke plikt
- Stater har rett til å prioritere egne borgere

Argumenter:
- Delte institusjoner skaper særlige rettferdighetskrav
- Nasjonale bånd gir grunnlag for solidaritet
- Demokrati og velferd krever avgrenset fellesskap
- Praktisk: Vi kan ikke hjelpe alle

**Kosmopolitisme**:
- Alle mennesker har lik moralsk verdi
- Rettferdighet gjelder globalt, ikke bare nasjonalt
- Statsgrenser er moralsk vilkårlige
- Vi har plikt til å hjelpe fattige uansett hvor de bor

Argumenter:
- Universell menneskerettigheter
- Felles menneskelighet er viktigere enn nasjonalitet
- Globale strukturer skaper global avhengighet og ansvar
- Tilfeldigheten ved fødested er ikke moralsk relevant`
    },
    {
      type: 'example',
      id: 'fil-4-4-example-1',
      title: 'Peter Singers badedam-argument',
      content: `Singer bruker et tankeeksperiment for å argumentere for plikt til å hjelpe:

Du går forbi en dam og ser et barn som holder på å drukne. Du kan enkelt redde barnet, men det vil ødelegge dine dyre sko. Er det moralsk akseptabelt å la barnet drukne for å spare skoene?

Nesten alle svarer nei. Men Singer argumenterer:

1. Hvis du har plikt til å redde barnet i dammen (til tross for kostnad)
2. Og du kan redde et barn i Afrika for samme kostnad (via donasjon)
3. Er det ingen moralsk relevant forskjell mellom situasjonene
4. Derfor har du like stor plikt til å donere

**Kritikk**:
- Undervurderer betydningen av nærhet og relasjon
- Overser strukturelle årsaker til fattigdom
- Impliserer at vi må gi alt til vi når samme levestandard som de fattigste
- Fokuserer på individansvar fremfor systemendring`
    },
    {
      type: 'text',
      id: 'fil-4-4-fattigdom',
      content: `## Fattigdom og bistand

Cirka 700 millioner mennesker lever i ekstrem fattigdom (under $2.15 per dag). Hva er vårt ansvar?

**Argumenter for bistandsplikt**:

1. **Negativt ansvar**: Vi har bidratt til å skape fattigdom gjennom:
   - Kolonialisme og historisk utbytting
   - Urettferdig global handelsordning
   - Klimaendringer vi forårsaket

2. **Positivt ansvar**: Vi har plikt til å hjelpe mennesker i nød når vi kan:
   - Effektiv altruisme: Donere til de mest effektive organisasjonene
   - Liten kostnad for oss, enorm gevinst for mottakere
   - Universell moralsk plikt til å redde liv

**Kritikk av bistand**:

1. **Avhengighet**: Bistand kan skape passivitet og avhengighet
2. **Korrupsjon**: Penger går til korrupte eliter, ikke de fattige
3. **Markedsforvrengning**: Gratis varer ødelegger lokale markeder
4. **Paternalisme**: Vestlige løsninger passer ikke nødvendigvis andre kontekster

**Alternativer**:
- Strukturelle reformer av global økonomi
- Rettferdig handel fremfor bistand
- Teknologioverføring og kapasitetsbygging
- Klimafinansiering fra rike til fattige land`
    },
    {
      type: 'text',
      id: 'fil-4-4-handel',
      content: `## Global handelspolitikk og rettferdighet

Den globale økonomiske ordenen påvirker fundamentalt fordelingen av ressurser:

**Kritikk av nåværende system**:

1. **Ulik forhandlingsmakt**: Rike land dikterer handelsavtaler
2. **Subsidier**: Vestlige landbrukssubsidier ødelegger for fattige bønder
3. **Immaterielle rettigheter**: Patentregler blokkerer billige medisiner
4. **Skatteunndragelse**: Multinasjonale selskaper unndrar skatt via skatteparadis
5. **Ressurspropp**: Rike land kjøper naturressurser fra korrupte regimer

**Thomas Pogge** argumenterer at vi aktivt skader de fattige gjennom å opprettholde et urettferdig globalt system. Vi har derfor ikke bare plikt til å hjelpe, men plikt til å slutte å skade - en sterkere forpliktelse.

**Rettferdig handelspolitikk**:
- Fjerne urettferdige subsidier og tollbarrierer
- Klimakompensasjon til fattige land
- Global minimumsskatt for selskaper
- Transparens i ressurskontrakter
- Teknologioverføring for bærekraftig utvikling`
    },
    {
      type: 'text',
      id: 'fil-4-4-klimarettferdighet',
      content: `## Klimarettferdighet og fordeling

Klimakrisen er også en rettferdighetskrise:

**Urettferdige byrder**:
- De fattigste landene rammes hardest av klimaendringer
- De har bidratt minst til problemet historisk
- De har minst ressurser til å tilpasse seg

**Rettferdighetsprinsipper**:

1. **Forurenser betaler**: De som har skapt problemet skal betale for løsningen
2. **Evneprinsippet**: De med størst ressurser skal bidra mest
3. **Rett til utvikling**: Fattige land har rett til å heve levestandard
4. **Bærekraftig minimum**: Alle har rett til grunnleggende energi og velferd

**Klimafinansiering**: Rike land lovet $100 milliarder årlig til klimatilpasning i fattige land, men leverer ikke. Er dette brudd på moralske forpliktelser?

**Klimaflyktninger**: Når mennesker må flytte på grunn av klimaendringer vi forårsaket, har vi ansvar for å ta dem imot?`
    },
    {
      type: 'example',
      id: 'fil-4-4-example-2',
      title: 'Lekkasjeproblemet',
      content: `Når ett land kutter utslipp, kan produksjon flytte til land med lavere krav («karbonlekkasje»). Total utslipp reduseres ikke.

**Dilemmaet**:
- Hvis vi innfører strenge klimakrav, mister vi industri og arbeidsplasser
- Hvis vi ikke gjør det, fortsetter global oppvarming
- Andre land kan «free-ride» på våre kutt

**Løsninger**:
1. Globale klimaavtaler med bindende forpliktelser for alle
2. Karbontoll på import fra land uten klimakrav
3. Teknologisamarbeid og overføring
4. Grønn industriutvikling som konkurransefortrinn

Dette illustrerer hvordan klimapolitikk krever global koordinering og rettferdighet.`
    },
    {
      type: 'text',
      id: 'fil-4-4-immigrasjon',
      content: `## Immigrasjon og globale bevegelser

Har stater rett til å kontrollere grensene sine, eller har mennesker rett til fri bevegelse?

**Åpne grenser-posisjon**:
- Statsgrenser er moralsk vilkårlige
- Fri bevegelse av mennesker som av kapital
- Ekskludering fra rike land opprettholder global ulikhet
- Menneskerettigheter gjelder uavhengig av statsborgerskap

**Kontrollerte grenser-posisjon**:
- Stater har rett til selvbestemmelse
- Nasjonalt fellesskap krever avgrenset medlemskap
- Velferdsstater forutsetter solidaritet innenfor grenser
- Praktisk nødvendig med migrasjonskontroll

**Mellomposisjoner**:
- Rett til asyl for forfølgede
- Arbeidsmigrasjon basert på behov
- Rikere land har større plikt til å ta imot
- Adressere årsakene til migrasjon (konflikt, fattigdom, klima)`
    },
    {
      type: 'text',
      id: 'fil-4-4-oppsummering',
      content: `## Global rettferdighet i praksis

Spørsmål om global rettferdighet krever at vi balanserer:

- **Universalisme**: Alle mennesker har lik moralsk verdi
- **Partikularisme**: Vi har særlige forpliktelser til nære andre
- **Ansvar**: Både for å hjelpe og å slutte å skade
- **Effektivitet**: Praktiske begrensninger på hva vi kan oppnå

**Fremvoksende konsensus**:
- Ekstrem fattigdom og sult er moralsk uakseptabelt
- Rike land har ansvar for å bidra til løsninger
- Globale strukturer må reformeres for å bli mer rettferdige
- Klimakrise krever global solidaritet

Global rettferdighet handler ikke bare om veldedighet, men om å skape et rettferdig globalt system der alle har mulighet til et verdig liv.`
    }
  ],
  exercises: [
    {
      id: 'fil-4-4-ex-1',
      type: 'multiple-choice',
      question: 'Hva er hovedforskjellen mellom nasjonalisme og kosmopolitisme i spørsmål om global rettferdighet?',
      options: [
        'Nasjonalisme vektlegger like forpliktelser til alle, kosmopolitisme vektlegger særlige bånd',
        'Nasjonalisme vektlegger særlige forpliktelser til landsmenn, kosmopolitisme vektlegger lik verdi for alle',
        'Nasjonalisme avviser all bistand, kosmopolitisme krever full omfordeling',
        'Det er ingen reell forskjell mellom posisjonene'
      ],
      correctAnswer: 1,
      explanation: 'Nasjonalisme hevder vi har særlige forpliktelser overfor våre landsmenn, mens kosmopolitisme hevder at alle mennesker har lik moralsk verdi uavhengig av nasjonalitet.'
    },
    {
      id: 'fil-4-4-ex-2',
      type: 'classic',
      question: 'Forklar Peter Singers badedam-argument og kritikken mot det.',
      sampleAnswer: 'Singer argumenterer: Hvis du går forbi en dam der et barn drukner, har du plikt til å redde barnet selv om det ødelegger dine dyre sko. På samme måte kan du redde barn i Afrika for samme kostnad via donasjoner. Siden det er ingen moralsk relevant forskjell, har du like stor plikt til å donere. Kritikk: (1) Undervurderer betydningen av nærhet og direkte relasjon, (2) Overser strukturelle årsaker til fattigdom som bør adresseres, (3) Impliserer urimelig krav om å gi alt til du når samme levestandard som de fattigste, (4) Fokuserer på individansvar fremfor systemendring og politiske løsninger.'
    },
    {
      id: 'fil-4-4-ex-3',
      type: 'multiple-choice',
      question: 'Hva er Thomas Pogges hovedargument om globalt ansvar for fattigdom?',
      options: [
        'Vi har ingen forpliktelser overfor fattige i andre land',
        'Vi skader aktivt de fattige gjennom å opprettholde urettferdige globale strukturer',
        'Bistand er alltid ineffektivt og bør avvikles',
        'Kun historisk kolonialisme skaper ansvar'
      ],
      correctAnswer: 1,
      explanation: 'Pogge argumenterer at vi aktivt skader de fattige gjennom å opprettholde et urettferdig globalt økonomisk system. Dette gir ikke bare plikt til å hjelpe, men plikt til å slutte å skade.'
    },
    {
      id: 'fil-4-4-ex-4',
      type: 'classic',
      question: 'Hva er klimarettferdighet, og hvilke prinsipper bør styre fordelingen av klimabyrder?',
      sampleAnswer: 'Klimarettferdighet handler om at de fattigste landene rammes hardest av klimaendringer de har bidratt minst til. Rettferdighetsprinsipper: (1) Forurenser betaler - de som historisk har skapt problemet skal betale for løsningen, (2) Evneprinsippet - de med størst ressurser skal bidra mest, (3) Rett til utvikling - fattige land har rett til å heve levestandard, (4) Bærekraftig minimum - alle har rett til grunnleggende energi og velferd. Dette krever klimafinansiering fra rike til fattige land, teknologioverføring, og globale avtaler som respekterer ulik historisk ansvar og kapasitet.'
    },
    {
      id: 'fil-4-4-ex-5',
      type: 'multiple-choice',
      question: 'Hva er «karbonlekkasje» i klimapolitikk?',
      options: [
        'CO2 som lekker fra lagringssteder',
        'Produksjon flytter til land med lavere klimakrav når ett land kutter',
        'Klimagasser som slipper ut fra permafrost',
        'Feil måling av nasjonale utslipp'
      ],
      correctAnswer: 1,
      explanation: 'Karbonlekkasje oppstår når ett land innfører strenge klimakrav og produksjon flytter til land med lavere krav. Total global utslipp reduseres ikke, bare omfordeles.'
    },
    // --- Samleoppgaver ---
    {
      id: 'fil-4-4-ex-6',
      type: 'classic',
      question: 'Drøft debatten om åpne vs. kontrollerte grenser ut fra både kosmopolitiske og nasjonalistiske perspektiver. Hvilke verdier står på spill?',
      sampleAnswer: 'Kosmopolitisk perspektiv: Statsgrenser er moralsk vilkårlige. Alle mennesker har lik moralsk verdi og rett til å søke bedre liv. Ekskludering fra rike land opprettholder global ulikhet. Fri bevegelse av mennesker bør følge fri bevegelse av kapital. Nasjonalistisk perspektiv: Stater har rett til selvbestemmelse og å definere sitt eget fellesskap. Velferdsstater forutsetter avgrenset solidaritet og gjensidig ansvar. Praktisk nødvendig med kontroll. Verdier i konflikt: (1) Universelle menneskerettigheter vs. nasjonal selvbestemmelse, (2) Global rettferdighet vs. nasjonalt fellesskap, (3) Individets frihet vs. kollektivets autonomi. Mellomposisjoner: Rett til asyl for forfølgede, arbeidsmigrasjon basert på behov, adressere årsaker til migrasjon.'
    },
    {
      id: 'fil-4-4-ex-7',
      type: 'classic',
      question: 'Analyser kritikken av utviklingshjelp. Er strukturelle reformer av globale systemer et bedre alternativ enn bistand? Drøft.',
      sampleAnswer: 'Kritikk av bistand: (1) Skaper avhengighet og passivitet, (2) Korrupsjon - går til eliter ikke fattige, (3) Markedsforvrengning - gratis varer ødelegger lokal produksjon, (4) Paternalisme - vestlige løsninger passer ikke andre kontekster. Argumenter for strukturreform: Thomas Pogges poeng at vi aktivt skader gjennom urettferdige globale strukturer. Rettferdig handel, fjerne subsidier, global skattereform, transparens i ressurskontrakter ville adressere årsakene til fattigdom, ikke bare symptomene. Mer bærekraftig og respektfullt. Motargument: Strukturreform tar tid, akutt nød krever umiddelbar hjelp. Bistand kan være effektivt når det gjøres riktig (f.eks. vaksineprogrammer). Balansert syn: Både og - akutt bistand der nødvendig, men samtidig arbeide for strukturelle endringer som adresserer underliggende urettferdighet.'
    }
  ]
};

const CHAPTER_FILOSOFI_ETIKK_4_5: TextbookChapter = {
  id: 'filosofi-etikk-4-5',
  chapterNumber: '4.5',
  title: 'Etiske dilemmaer i praksis',
  subject: 'Filosofi og etikk',
  gradeLevel: 'VG2/VG3',
  estimatedTime: '20 minutter',
  content: [
    {
      type: 'text',
      id: 'fil-4-5-intro',
      content: `# Etiske dilemmaer i praksis

Gjennom dette kurset har vi møtt ulike etiske teorier og anvendt dem på konkrete problemer. Men hvordan navigerer vi faktisk i etiske dilemmaer når vi møter dem i virkeligheten? Dette kapitlet gir en praktisk metode for etisk analyse og anvender den på reelle case-studier. Målet er å utvikle etisk dømmekraft - evnen til å tenke gjennom komplekse moralske spørsmål på en reflektert måte.`
    },
    {
      type: 'text',
      id: 'fil-4-5-metode',
      content: `## Metode for etisk analyse

Når du står overfor et etisk dilemma, følg disse stegene:

**1. Klargjør situasjonen**
- Hva er de relevante fakta?
- Hvem er de involverte partene?
- Hvilke interesser og verdier står på spill?
- Er det informasjon du mangler?

**2. Identifiser det etiske problemet**
- Hva er dilemmaet? (Ofte valg mellom to gode eller to onder)
- Hvilke verdier kommer i konflikt?
- Finnes det alternativer utover de opplagte?

**3. Vurder ut fra ulike etiske teorier**

*Nytteetikk*:
- Hvilke konsekvenser har de ulike alternativene?
- Hvilket valg maksimerer samlet velferd?
- Hvem påvirkes positivt/negativt?

*Pliktetikk*:
- Hvilke prinsipper er relevante?
- Kan handlingen universaliseres?
- Respekterer den menneskers autonomi og verdighet?

*Dydsetikk*:
- Hva ville en dydsmessig person gjort?
- Hvilke karakteregenskaper fremmes av de ulike valgene?
- Hva krever praktisk klokskap i denne situasjonen?

*Omsorgsetikk*:
- Hvilke relasjoner berøres?
- Hva krever omsorg for de involverte?
- Hvordan ivareta sårbarhet?

**4. Vurder kontekst og særegenheter**
- Er det kulturelle eller situasjonelle faktorer?
- Er det asymmetrier i makt eller sårbarhet?
- Hva er din egen rolle og ansvar?

**5. Kom til en begrunnet konklusjon**
- Vei argumentene fra ulike perspektiver
- Erkjenn usikkerhet og kompleksitet
- Ta en beslutning du kan begrunne

**6. Reflekter over prosessen**
- Hvilke verdier viste seg viktigst for deg?
- Hva lærte du om deg selv og dine verdier?
- Ville du handle annerledes i fremtiden?`
    },
    {
      type: 'example',
      id: 'fil-4-5-example-1',
      title: 'Case 1: Løgn for å beskytte',
      content: `**Situasjon**: Du er lege. En pasient med uhelbredelig kreft spør om prognosen. Familien ber deg lyve fordi pasienten ikke vil «tåle sannheten».

**Etisk analyse**:

*Nytteetikk*: Ville løgn maksimere pasientens velferd? Kanskje kortsiktig, men langsiktig kan sannhet gjøre det mulig å planlegge og ta farvel.

*Pliktetikk*: Du har plikt til sannferdighet. Å lyve bruker pasienten som middel og krenker autonomien. Kant ville si løgn alltid er galt.

*Omsorgsetikk*: Omsorg kan tale for ømhet i kommunikasjon, men ikke nødvendigvis løgn. Respektfull sannhet kan være den beste omsorgen.

*Dydsetikk*: Mot, medfølelse og praktisk klokskap krever å finne måter å kommunisere vanskelig sannhet på.

**Konklusjon**: De fleste ville konkludere med at pasienten har rett til sannhet (autonomi og respekt), men måten det kommuniseres på krever omsorg, sensitivitet og praktisk klokskap.`
    },
    {
      type: 'text',
      id: 'fil-4-5-case2',
      content: `## Case 2: Hvitvasking av varsler

**Situasjon**: Du jobber i et selskap og oppdager at lederen din forfalsker regnskapet. Hvis du varsler, risikerer du å miste jobben. Hvis du tier, fortsetter uredeligheten.

**Verdier i konflikt**:
- Lojalitet til arbeidsgiver vs. rettferdighet og lovlydighet
- Personlig sikkerhet vs. moralsk ansvar
- Kortsiktig egeninteresse vs. langsiktig integritet

**Analyse**:

*Nytteetikk*: Hva er konsekvensene av å varsle vs. tie? Varsling kan avsløre uredelighet og beskytte andre interessenter. Men det kan også skade deg og familien din. Vurder sannsynlighet og alvorlighet av ulike utfall.

*Pliktetikk*: Du har plikt til lovlydighet og ærlighet. Kant ville si du ikke kan universalisere taushet om urett. Men har du også plikt til å beskytte din familie?

*Dydsetikk*: Mot, rettferdighet og integritet taler for varsling. Men forsiktighet og klokskap krever å gjøre det på riktig måte - kanskje søke råd, dokumentere, bruke formelle kanaler.

**Refleksjon**: Dette er vanskelig fordi reelle kostnader for deg må veies mot prinsipper og andres interesser. Det kan være viktig å:
- Sikre du har solid dokumentasjon
- Søke juridisk råd
- Bruke interne varslingskanaler først
- Beskytte deg selv samtidig som du handler rett`
    },
    {
      type: 'text',
      id: 'fil-4-5-case3',
      content: `## Case 3: Selvkjørende biler og trolley-problemet

**Situasjon**: En selvkjørende bil må i et nødstilfelle velge: Svinge og drepe én fotgjenger, eller fortsette rett frem og drepe fem?

**Dette reiser**:
- Klassisk trolley-problem i moderne drakt
- Hvem skal programmere moralske valg inn i AI?
- Kan vi akseptere at algoritmer tar liv-og-død beslutninger?

**Analyse**:

*Nytteetikk*: Minimer totalt antall dødsfall - sving og drep én. Maksimerer samlet velferd.

*Pliktetikk*: Å aktivt drepe én person (sving) er moralsk forskjellig fra å la fem dø (fortsette). Kant ville vært skeptisk til å bruke personen som middel.

*Dydsetikk*: Hva ville en dydsmessig person gjort? Kanskje fokusere på å forebygge situasjonen i utgangspunktet gjennom forsiktig kjøring.

**Utfordring**: I virkeligheten oppstår ikke slike binære valg. Men spørsmålet blir: Hvilke verdier skal bygges inn i autonome systemer? Hvem skal bestemme? Hvordan sikre ansvarlighet?

**Refleksjon**: Dette viser at teknologiutvikling ikke bare er teknisk, men krever etiske valg på designstadiet.`
    },
    {
      type: 'example',
      id: 'fil-4-5-example-2',
      title: 'Case 4: Arbeidskonflikt og streik',
      content: `**Situasjon**: Du er sykepleier. Fagforeningen din planlegger streik for bedre lønns- og arbeidsforhold. Men streik vil ramme pasienter.

**Dilemma**:
- Solidaritet med kolleger og kamp for rettferdige arbeidsforhold
- Omsorg for pasienter og ikke-skade-prinsippet
- Langsiktige vs. kortsiktige hensyn

**Analyse**:

*Pliktetikk*: Du har både plikt til pasientomsorg og til solidaritet. Kant ville sett på om nødvendig pasientbehandling opprettholdes (kategorisk imperativ).

*Nytteetikk*: Kortsiktig skade på noen pasienter vs. langsiktig gevinst for alle pasienter hvis bedre arbeidsforhold fører til bedre helsevesen. Vurder om nødbehandling sikres.

*Omsorgsetikk*: Ekte omsorg kan kreve å kjempe for strukturer som muliggjør god omsorg langsiktig.

*Dydsetikk*: Mot til å stå opp for rettferdighet, men også klokskap i å sikre nødbehandling.

**Løsning**: Streike, men sikre nødbehandling og gradere aksjonen. Dette balanserer rettferdighet og omsorg.`
    },
    {
      type: 'text',
      id: 'fil-4-5-personlige',
      content: `## Etikk i hverdagen

Etiske dilemmaer møter oss ikke bare i dramatiske situasjoner, men i dagligdagse valg:

**Forbruk og miljø**:
- Kjøpe billig klær produsert under dårlige arbeidsforhold?
- Fly på ferie når det bidrar til klimaendringer?
- Kjøpe produkter fra selskaper med uetisk praksis?

**Digitalt liv**:
- Dele informasjon om andre på sosiale medier?
- Piratkopiering av film, musikk og software?
- Bruke plattformer som utnytter persondata?

**Skole og arbeid**:
- Jukse på eksamen for å få bedre karakter?
- Lyve på CV-en for å få jobb?
- Tie om kollegers regel brudd?

**Relasjoner**:
- Si ubehagelig sannhet eller lyve av hensyn?
- Holde løfter også når det er upraktisk?
- Balansere egne behov mot andres?

**Refleksjon**: Små valg former hvem vi er. Konsistens mellom verdier og handling krever bevissthet og refleksjon i hverdagen.`
    },
    {
      type: 'text',
      id: 'fil-4-5-moralsk-mot',
      content: `## Moralsk mot og integritet

Å handle etisk krever ikke bare å vite hva som er rett, men motet til å gjøre det:

**Moralsk mot** innebærer:
- Handle etter egne verdier også når det er kostbart
- Stå opp mot urett selv når andre tier
- Være villig til å ofre egeninteresse for prinsipper
- Motstå gruppepress og konforme til det etisk korrekte

**Integritet** betyr:
- Samsvar mellom verdier og handlinger
- Være den samme person i ulike kontekster
- Kunne stå for sine valg og begrunne dem
- Erkjenne feil og lære av dem

**Utfordringer**:
- Gruppepress og konformitet
- Frykt for konsekvenser (miste jobb, venner, status)
- Rasjonalisering og selvbedrag
- Utmattelse fra moralsk stress

**Støtte**:
- Reflektert verdikartlegging
- Allierte og støttende fellesskap
- Institusjonelle strukturer som beskytter varslere
- Trening i å stå for verdier i små situasjoner`
    },
    {
      type: 'text',
      id: 'fil-4-5-oppsummering',
      content: `## Avslutning: Etikk som livslang reise

Etikk handler ikke om å finne perfekte svar, men om å utvikle evnen til reflektert vurdering:

**Hva vi har lært**:
- Ulike etiske teorier gir forskjellige perspektiver
- Mange dilemmaer har ikke entydige løsninger
- Kontekst og særegenheter må vurderes
- Refleksjon og dialog er essensielt

**Etisk modenhet** kjennetegnes ved:
- Evne til å se flere perspektiver
- Toleranse for kompleksitet og usikkerhet
- Ydmykhet om egne begrensninger
- Vilje til å handle på reflekterte verdier

**Fremover**:
- Fortsett å stille etiske spørsmål
- Vær nysgjerrig på andres perspektiver
- Reflekter over egne valg og verdier
- Handle med integritet i store og små saker

Filosofi og etikk handler til syvende og sist om det gode liv - hvordan vi skal leve individuelt og sammen. De spørsmålene vi har stilt i dette kurset, følger oss livet ut. Fortsett å tenke, diskutere og handle reflektert.`
    }
  ],
  exercises: [
    {
      id: 'fil-4-5-ex-1',
      type: 'classic',
      question: 'Beskriv de seks stegene i metoden for etisk analyse.',
      sampleAnswer: '(1) Klargjør situasjonen - identifiser fakta, involverte parter og verdier. (2) Identifiser det etiske problemet - hva er dilemmaet og hvilke verdier konflikter? (3) Vurder ut fra ulike etiske teorier - bruk nytteetikk, pliktetikk, dydsetikk og omsorgsetikk. (4) Vurder kontekst og særegenheter - kulturelle faktorer, maktasymmetrier, din egen rolle. (5) Kom til en begrunnet konklusjon - vei argumenter og ta beslutning. (6) Reflekter over prosessen - hva lærte du om verdiene dine?'
    },
    {
      id: 'fil-4-5-ex-2',
      type: 'classic',
      question: 'Analyser lege-caset (løgn for å beskytte) ut fra nytteetikk, pliktetikk og omsorgsetikk. Hva ville du konkludert?',
      sampleAnswer: 'Nytteetikk: Løgn kan maksimere velferd kortsiktig, men langsiktig kan sannhet gjøre det mulig å planlegge og ta farvel. Total nytte taler trolig for sannhet. Pliktetikk: Plikt til sannferdighet. Løgn krenker pasientens autonomi og bruker vedkommende som middel. Kant ville avvist løgn. Omsorgsetikk: Omsorg krever sensitivitet, men ikke nødvendigvis løgn. Respektfull sannhet kan være den beste omsorgen. Konklusjon: Pasienten har rett til sannhet (autonomi), men måten det kommuniseres på krever omsorg og praktisk klokskap. Balanse mellom rett til informasjon og omsorgsfull kommunikasjon.'
    },
    {
      id: 'fil-4-5-ex-3',
      type: 'multiple-choice',
      question: 'Hva ville pliktetikk (Kant) si om trolley-problemet for selvkjørende biler?',
      options: [
        'Alltid minimer totalt antall dødsfall',
        'Å aktivt drepe én er moralsk forskjellig fra å la fem dø',
        'La bilens eier bestemme på forhånd',
        'Trekkingen av lodd avgjør hvem som dør'
      ],
      correctAnswer: 1,
      explanation: 'Pliktetikk skiller mellom å aktivt drepe (svinge og drepe én) og å la dø (fortsette og fem dør). Kant ville vært skeptisk til å aktivt bruke én person som middel.'
    },
    {
      id: 'fil-4-5-ex-4',
      type: 'classic',
      question: 'Hva er moralsk mot, og hvorfor er det viktig for etisk handling?',
      sampleAnswer: 'Moralsk mot er evnen til å handle etter egne verdier også når det er kostbart. Det innebærer å stå opp mot urett selv når andre tier, være villig til å ofre egeninteresse for prinsipper, og motstå gruppepress. Det er viktig fordi det ikke er nok å vite hva som er rett - vi må også ha motet til å gjøre det. Utfordringer som frykt for konsekvenser, gruppepress og rasjonalisering kan hindre etisk handling. Moralsk mot gjør det mulig å opprettholde integritet og handle konsekvent med verdier selv under press.'
    },
    {
      id: 'fil-4-5-ex-5',
      type: 'multiple-choice',
      question: 'Hva kjennetegner etisk modenhet?',
      options: [
        'Alltid ha sikre og entydige svar',
        'Følge autoriteter uten å stille spørsmål',
        'Evne til å se flere perspektiver og toleranse for kompleksitet',
        'Kun stole på egne intuisjoner'
      ],
      correctAnswer: 2,
      explanation: 'Etisk modenhet kjennetegnes av evnen til å se flere perspektiver, toleranse for kompleksitet og usikkerhet, ydmykhet om egne begrensninger, og vilje til å handle på reflekterte verdier.'
    },
    // --- Samleoppgaver ---
    {
      id: 'fil-4-5-ex-6',
      type: 'classic',
      question: 'Velg ett av de hverdagslige etiske dilemmaene (forbruk, digitalt liv, skole/arbeid, eller relasjoner). Analyser det grundig ved bruk av metoden for etisk analyse, og trekk inn minst to etiske teorier.',
      sampleAnswer: 'Eksempel - Jukse på eksamen: (1) Klargjør: Du kan få bedre karakter ved å jukse, men risikerer å bli tatt. Andre elever konkurrerer ærlig. (2) Etisk problem: Egeninteresse (bedre karakter) vs. rettferdighet og ærlighet. (3) Teorier: Nytteetikk - kortsiktig gevinst (høyere karakter) vs. langsiktig kostnad (tap av integritet, risiko for straff, undergraver egne læring). Pliktetikk - kan du universalisere juks? Nei, eksamensystemet ville kollapse. Du bruker også andre som middel ved urettferdig konkurranse. Dydsetikk - juks undergraver dyder som ærlighet, integritet og mot. Formen hvem du blir. (4) Kontekst: Press fra familie, betydning av karakter for fremtid. (5) Konklusjon: Ikke jukse - krenker rettferdighet, kan ikke universaliseres, undergraver karakter. (6) Refleksjon: Verdier som integritet og rettferdighet viktigere enn kortsiktig fordel.'
    },
    {
      id: 'fil-4-5-ex-7',
      type: 'classic',
      question: 'Reflekter over hele kurset i Filosofi og etikk: Hvilke tema eller teorier har påvirket deg mest? Hvordan kan du bruke det du har lært i ditt eget liv fremover?',
      sampleAnswer: 'Personlig refleksjon vil variere, men bør inkludere: (1) Spesifikke teorier eller tenkere som resonerte (f.eks. Kants respekt for personer, Mills nytteetikk, omsorgsetikk, etc.), (2) Anvendte tema som engasjerte (medisinsk etikk, miljøetikk, teknologietikk, global rettferdighet), (3) Konkrete innsikter om egne verdier og moralske intuisjoner, (4) Hvordan systematisk etisk analyse kan brukes i hverdagen, (5) Betydningen av moralsk mot og integritet, (6) Forståelse for kompleksitet og ulike perspektiver i etiske spørsmål, (7) Konkrete planer for hvordan leve mer i samsvar med reflekterte verdier (forbruk, relasjoner, arbeid, samfunnsengasjement).'
    }
  ]
};

export const FILOSOFI_ETIKK_DEL4_CHAPTERS: TextbookChapter[] = [
  CHAPTER_FILOSOFI_ETIKK_4_1,
  CHAPTER_FILOSOFI_ETIKK_4_2,
  CHAPTER_FILOSOFI_ETIKK_4_3,
  CHAPTER_FILOSOFI_ETIKK_4_4,
  CHAPTER_FILOSOFI_ETIKK_4_5,
];
