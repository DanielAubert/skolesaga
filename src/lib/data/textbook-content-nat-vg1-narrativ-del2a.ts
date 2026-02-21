/**
 * Tekstbok innhold for Naturfag VG1 - NARRATIV VERSJON DEL 2A
 * Seksjon 2: Bølger, stråling og radioaktivitet (Kapittel 2.1-2.3)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 2.1 NARRATIV: Bølger og bølgefenomener
// ============================================================================

export const CHAPTER_NAT_VG1_2_1_NARRATIV: TextbookChapter = {
  id: 'nat-vg1-2-1-narrativ',
  courseId: 'nat-vg1',
  chapterNumber: '2.1',
  title: 'Bølger og bølgefenomener',
  subtitle: 'Narrativ versjon',
  description:
    'Fra steiner i stille vann til jordskjelv som ryster kontinenter -- oppdag hvordan bølger bærer energi gjennom universet uten å flytte en eneste partikkel permanent.',
  estimatedMinutes: 40,
  competenceGoals: ['utforske og beskrive noen sentrale bølgefenomener'],
  linkedChapterId: 'nat-vg1-2-1',
  content: [
    {
      id: 'nat-vg1-2-1-n-intro',
      type: 'text',
      content: `## En stein i stille vann

Tenk deg en varm sommerdag ved et tjern. Vannet ligger blankt og rolig. Du plukker opp en stein og kaster den ut. I det øyeblikket steinen treffer overflaten, sprer ringer seg utover -- videre og videre, helt til de når bredden. Kanskje legger du merke til en liten kork som flyter på vannet. Den hopper opp og ned når ringene passerer, men den følger ikke med bølgen utover. Korken blir der den var.

Denne lille observasjonen forteller deg noe dypt om naturen. **En bølge er en forstyrrelse som forplanter seg gjennom et medium eller gjennom rommet.** Det viktigste kjennetegnet er at bølger overfører *energi* uten å flytte *materie* permanent. Vannet beveger seg ikke fra midten av tjernet til bredden -- det er energien som reiser. Hvert vannmolekyl svinger bare litt opp og ned på plassen sin og dytter nabomolekylet videre.

Bølger er overalt. Lyden av fuglekvitter om morgenen, lyset som treffer øynene dine, jordskorpen som rister under et jordskjelv, radiobølgene som bringer deg musikk i øreproppene -- alt dette er bølger. I dette kapittelet skal vi utforske hva som kjennetegner bølger, lære å skille mellom ulike typer, og forstå den elegante sammenhengen mellom bølgelengde, frekvens og hastighet.`,
    },
    {
      id: 'nat-vg1-2-1-n-section1',
      type: 'text',
      content: `## To familier av bølger

Ikke alle bølger oppfører seg likt. Fysikere deler bølger i to hovedtyper basert på hvordan partiklene i mediet beveger seg i forhold til bølgens retning.

Den første typen kalles **tverrbølger**, eller transversale bølger. Her svinger partiklene *vinkelrett* på retningen bølgen beveger seg. Tenk deg at du holder enden av et tau og rister hånden opp og ned. En bølge løper bortover tauet, men hvert punkt på tauet beveger seg bare opp og ned. Bølger på en vannoverflate er tverrbølger. Det samme gjelder lys og andre elektromagnetiske bølger, og de såkalte S-bølgene fra jordskjelv.

Den andre typen er **lengdebølger**, eller longitudinale bølger. Her svinger partiklene *parallelt* med bølgens bevegelsesretning. Forestill deg en lang spiralfjær som du trykker sammen i den ene enden og slipper. Du ser soner med tett sammenpressede vindinger som beveger seg bortover fjæren, etterfulgt av soner der vindingene er spredt fra hverandre. Akkurat slik fungerer lyd i luft: luftmolekylene presses sammen i kompresjonssoner og spres ut i rarefaksjonssoner. Lydbølger, trykkbølger og jordskjelvenes P-bølger er alle lengdebølger.

Det finnes også et viktig skille mellom **mekaniske bølger** og **elektromagnetiske bølger**. Mekaniske bølger -- som lyd, vannbølger og jordskjelv -- trenger et medium å forplante seg gjennom. Uten luft, ingen lyd. Elektromagnetiske bølger derimot, som lys, radiobølger og røntgenstråling, kan bevege seg gjennom tomt rom. De trenger ikke noe medium i det hele tatt, og i vakuum reiser de alle med lysets hastighet: omtrent 3 ganger 10 opphøyd i 8 meter per sekund.`,
    },
    {
      id: 'nat-vg1-2-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på bølgetyper og grunnleggende bølgeegenskaper:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-2-1-n-quiz1-q0',
            task: 'Hva er det viktigste kjennetegnet ved en bølge?',
            options: [
              { id: 'a', text: 'Den flytter materie fra ett sted til et annet', isCorrect: false },
              { id: 'b', text: 'Den overfører energi uten å flytte materie permanent', isCorrect: true },
              { id: 'c', text: 'Den kan bare bevege seg gjennom luft', isCorrect: false },
              { id: 'd', text: 'Den har alltid samme hastighet uansett medium', isCorrect: false },
            ],
            solution:
              'En bølge overfører energi uten å flytte materie permanent. Tenk på korken som bare hopper opp og ned når bølgen passerer -- den følger ikke med bølgen.',
          },
          {
            id: 'nat-vg1-2-1-n-quiz1-q1',
            task: 'Hvilken type bølge er en lydbølge i luft?',
            options: [
              { id: 'a', text: 'En tverrbølge', isCorrect: false },
              { id: 'b', text: 'En elektromagnetisk bølge', isCorrect: false },
              { id: 'c', text: 'En lengdebølge', isCorrect: true },
              { id: 'd', text: 'En stående bølge', isCorrect: false },
            ],
            solution:
              'Lydbølger i luft er lengdebølger. Luftmolekylene svinger frem og tilbake i samme retning som bølgen beveger seg, og danner soner med høyt trykk (kompresjon) og lavt trykk (rarefaksjon).',
          },
          {
            id: 'nat-vg1-2-1-n-quiz1-q2',
            task: 'Hva skiller elektromagnetiske bølger fra mekaniske bølger?',
            options: [
              { id: 'a', text: 'Elektromagnetiske bølger er alltid tverrbølger', isCorrect: false },
              { id: 'b', text: 'Elektromagnetiske bølger kan bevege seg gjennom vakuum', isCorrect: true },
              { id: 'c', text: 'Mekaniske bølger har høyere hastighet', isCorrect: false },
              { id: 'd', text: 'Mekaniske bølger har kortere bølgelengde', isCorrect: false },
            ],
            solution:
              'Elektromagnetiske bølger trenger ikke noe medium og kan bevege seg gjennom vakuum. Mekaniske bølger derimot trenger et medium som luft, vann eller fast stoff for å forplante seg.',
          },
          {
            id: 'nat-vg1-2-1-n-quiz1-q3',
            task: 'Når du rister et tau opp og ned og en bølge løper bortover tauet, hva slags bølge er det?',
            options: [
              { id: 'a', text: 'En lengdebølge, fordi tauet er langt', isCorrect: false },
              { id: 'b', text: 'En mekanisk lengdebølge', isCorrect: false },
              { id: 'c', text: 'En elektromagnetisk bølge', isCorrect: false },
              { id: 'd', text: 'En tverrbølge, fordi svingningene er vinkelrett på bevegelsesretningen', isCorrect: true },
            ],
            solution:
              'Bølger på et tau er tverrbølger. Hvert punkt på tauet beveger seg opp og ned (vinkelrett), mens selve bølgen beveger seg bortover tauet.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-2-1-n-section2',
      type: 'text',
      content: `## Bølgens fingeravtrykk: bølgelengde, frekvens og amplitude

Hver bølge kan beskrives med noen få sentrale egenskaper, litt som et fingeravtrykk som gjør den unik.

**Bølgelengde** (symbolet lambda, λ) er avstanden mellom to påfølgende bølgetopper -- eller bunner, for den saks skyld. Du kan tenke på det som lengden av én komplett bølge. For lydbølger måler vi bølgelengden i meter, men for synlig lys bruker vi ofte nanometer (nm), der én nanometer er en milliarddel av en meter (10 opphøyd i minus 9 meter). Rødt lys har for eksempel en bølgelengde på omtrent 700 nm, mens blått lys ligger rundt 450 nm.

**Frekvens** (symbolet f) forteller deg hvor mange komplette svingninger bølgen gjennomfører per sekund. Enheten er hertz (Hz), oppkalt etter den tyske fysikeren Heinrich Hertz. Én hertz betyr én svingning per sekund. Vi bruker også kilohertz (kHz, tusen hertz) og megahertz (MHz, én million hertz). Kammertonen A, som orkestre stemmer etter, har en frekvens på 440 Hz -- det betyr at luftmolekylene svinger 440 ganger per sekund.

**Periode** (symbolet T) er tiden det tar for én komplett svingning, målt i sekunder. Perioden og frekvensen henger sammen på en enkel og elegant måte: T = 1/f. Hvis frekvensen er 440 Hz, er perioden 1 delt på 440, som gir omtrent 0,0023 sekunder.

**Amplitude** (symbolet A) er det maksimale utslaget fra likevektsposisjonen. Jo større amplitude, jo mer energi bærer bølgen. For lyd betyr høyere amplitude sterkere lyd. For lys betyr det sterkere lys.

Og så har vi **bølgehastigheten** (symbolet v), som forteller hvor langt bølgen beveger seg per tidsenhet, målt i meter per sekund. Hastigheten avhenger av mediet for mekaniske bølger -- lyd beveger seg for eksempel raskere i vann enn i luft.

Alt dette bindes sammen i én vakker formel: **v = f ganger λ**. Bølgehastigheten er lik frekvensen multiplisert med bølgelengden. Denne formelen gjelder for *alle* typer bølger. Hvis du kjenner to av størrelsene, kan du beregne den tredje. La oss si at NRK P1 sender radio på frekvensen 100 MHz, og radiobølger beveger seg med lysets hastighet (3 ganger 10 opphøyd i 8 meter per sekund). Da er bølgelengden lik v delt på f, altså 3 ganger 10 opphøyd i 8 delt på 1 ganger 10 opphøyd i 8, som gir 3 meter. FM-radiobølger har altså bølgelengder på noen meter -- det er derfor FM-antenner er ganske store.`,
    },
    {
      id: 'nat-vg1-2-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på bølgeegenskaper og bølgeformelen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-2-1-n-quiz2-q0',
            task: 'Hva forteller amplituden til en bølge deg?',
            options: [
              { id: 'a', text: 'Hvor lang bølgen er', isCorrect: false },
              { id: 'b', text: 'Hvor raskt bølgen beveger seg', isCorrect: false },
              { id: 'c', text: 'Hvor mange svingninger per sekund', isCorrect: false },
              { id: 'd', text: 'Hvor stor det maksimale utslaget er, og dermed intensiteten', isCorrect: true },
            ],
            solution:
              'Amplituden er det maksimale utslaget fra likevektsposisjonen. Høyere amplitude betyr sterkere lyd eller sterkere lys -- altså mer energi.',
          },
          {
            id: 'nat-vg1-2-1-n-quiz2-q1',
            task: 'En bølge har frekvens 50 Hz og bølgelengde 4 m. Hva er bølgehastigheten?',
            options: [
              { id: 'a', text: '12,5 m/s', isCorrect: false },
              { id: 'b', text: '200 m/s', isCorrect: true },
              { id: 'c', text: '54 m/s', isCorrect: false },
              { id: 'd', text: '46 m/s', isCorrect: false },
            ],
            solution:
              'Vi bruker bølgeformelen v = f ganger lambda = 50 Hz ganger 4 m = 200 m/s. Bølgen beveger seg altså med 200 meter per sekund.',
          },
          {
            id: 'nat-vg1-2-1-n-quiz2-q2',
            task: 'Hva er sammenhengen mellom periode (T) og frekvens (f)?',
            options: [
              { id: 'a', text: 'T = f ganger lambda', isCorrect: false },
              { id: 'b', text: 'T = 1/f', isCorrect: true },
              { id: 'c', text: 'T = f ganger v', isCorrect: false },
              { id: 'd', text: 'T = f + lambda', isCorrect: false },
            ],
            solution:
              'Perioden T er tiden for én svingning, og frekvensen f er antall svingninger per sekund. Sammenhengen er T = 1/f. Hvis f = 50 Hz, da er T = 1/50 = 0,02 sekunder.',
          },
          {
            id: 'nat-vg1-2-1-n-quiz2-q3',
            task: 'Lyd med frekvens 440 Hz (kammertone A) beveger seg med 340 m/s i luft. Hva er omtrent bølgelengden?',
            options: [
              { id: 'a', text: 'Ca. 0,77 m', isCorrect: true },
              { id: 'b', text: 'Ca. 7,7 m', isCorrect: false },
              { id: 'c', text: 'Ca. 150 m', isCorrect: false },
              { id: 'd', text: 'Ca. 0,077 m', isCorrect: false },
            ],
            solution:
              'lambda = v/f = 340/440 = 0,77 m. Bølgelengden til kammertonen A er altså omtrent 77 centimeter -- avstanden mellom to trykktopper i lydbølgen.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-2-1-n-section3',
      type: 'text',
      content: `## Når bølger møter verden: refleksjon, brytning, interferens og diffraksjon

Bølger gjør mye mer enn bare å reise i rette linjer. Når de møter hindringer, overganger mellom materialer, eller andre bølger, oppstår fascinerende fenomener.

**Refleksjon** er det enkleste å forstå. Når en bølge treffer en hindring, kastes den tilbake. Du kjenner dette fra ekko -- ropet ditt treffer fjellveggen og kommer tilbake til deg. Speil fungerer på samme måte med lysbølger. En viktig regel er at innfallsvinkelen alltid er lik refleksjonsvinkelen. Når lyd reflekterer fra en hard vegg, kan vi høre den som et tydelig ekko.

**Brytning** (eller refraksjon) skjer når en bølge passerer fra ett medium til et annet, for eksempel fra luft til vann. Fordi bølgehastigheten endrer seg, endrer bølgen også retning. Du har sett dette hvis du noen gang har lagt et sugerør i et glass med vann -- sugerøret ser ut som om det er knekt der det møter vannoverflaten. Det er det ikke, selvfølgelig, men lyset som kommer fra den delen av sugerøret som er under vann, brytes når det går fra vann til luft.

**Interferens** er kanskje det mest overraskende fenomenet. Når to bølger møtes, legges de sammen. Hvis to bølgetopper treffer hverandre, forsterker de hverandre -- dette kalles *konstruktiv interferens*. Hvis en topp møter en bunn, utslukker de hverandre -- *destruktiv interferens*. Støyreduserende hodetelefoner utnytter akkurat dette prinsippet. Mikrofoner på utsiden av hodetelefonene fanger opp omgivelsesstøy. Elektronikken lager en lydbølge som er nøyaktig motsatt: der originalstøyen har en topp, lager hodetelefonene en bunn, og omvendt. Resultatet er destruktiv interferens -- støyen forsvinner, og du hører nesten stillhet. Denne teknologien fungerer best for jevn, lavfrekvent støy som motorlyd i en flykabin, men dårligere for plutselige, høyfrekvente lyder som snakking.

**Diffraksjon** (bøyning) skjer når bølger passerer gjennom en åpning eller bøyer seg rundt en hindring. Effekten er mest tydelig når åpningen er omtrent på størrelse med bølgelengden. Tenk deg at du står ute i en gang og noen snakker inne i et rom med åpen dør. Du kan høre dem selv om du ikke ser dem, fordi lydbølgene bøyer seg rundt døråpningen og sprer seg utover. Dype basslyder med lang bølgelengde (opptil 17 meter) bøyer seg lett rundt hjørner, mens lyse diskanttoner med kort bølgelengde (ned til 1,7 cm) reflekteres og har vanskeligere for å bøye seg rundt hindringer. Derfor er bass «allestedsnærværende» mens diskant er mer retningsbestemt.

Til sist har vi **stående bølger** -- bølger som ser ut til å stå helt stille. De oppstår når to like bølger beveger seg i motsatt retning, for eksempel på en gitarstreng. Noen punkter (noder) står alltid stille, mens andre (buk) svinger med maksimalt utslag. Det er dette som gir instrumenter deres karakteristiske toner.`,
    },
    {
      id: 'nat-vg1-2-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på bølgefenomener:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-2-1-n-quiz3-q0',
            task: 'Hvordan fungerer støyreduserende hodetelefoner?',
            options: [
              { id: 'a', text: 'De blokkerer all lyd fysisk med tykk polstring', isCorrect: false },
              { id: 'b', text: 'De absorberer lydbølgene med et spesielt materiale', isCorrect: false },
              { id: 'c', text: 'De lager en motsatt lydbølge som utslukker støyen gjennom destruktiv interferens', isCorrect: true },
              { id: 'd', text: 'De reflekterer lyden tilbake mot kilden', isCorrect: false },
            ],
            solution:
              'Støyreduserende hodetelefoner bruker destruktiv interferens. Mikrofoner fanger opp støy, og elektronikken lager en motsatt bølge. Når topp møter bunn, utslukker de hverandre.',
          },
          {
            id: 'nat-vg1-2-1-n-quiz3-q1',
            task: 'Hvorfor ser et sugerør i et glass vann ut som om det er knekt?',
            options: [
              { id: 'a', text: 'Vannet forstørrer sugerøret', isCorrect: false },
              { id: 'b', text: 'Lyset reflekteres fra vannoverflaten', isCorrect: false },
              { id: 'c', text: 'Glasset forvrenger bildet', isCorrect: false },
              { id: 'd', text: 'Lyset brytes (endrer retning) når det går fra vann til luft', isCorrect: true },
            ],
            solution:
              'Brytning (refraksjon) skjer fordi lyset endrer hastighet når det går fra ett medium til et annet. Retningsendringen gjør at sugerøret ser knekt ut ved vannoverflaten.',
          },
          {
            id: 'nat-vg1-2-1-n-quiz3-q2',
            task: 'Hvorfor er det lettere å høre basslyder rundt et hjørne enn diskant?',
            options: [
              { id: 'a', text: 'Basslyder er kraftigere enn diskant', isCorrect: false },
              { id: 'b', text: 'Basslyder har lang bølgelengde og bøyer seg lettere rundt hindringer (diffraksjon)', isCorrect: true },
              { id: 'c', text: 'Diskant absorberes av veggen', isCorrect: false },
              { id: 'd', text: 'Basslyder reflekteres bedre fra vegger', isCorrect: false },
            ],
            solution:
              'Diffraksjon er mest effektiv når bølgelengden er på størrelse med eller større enn hindringen. Basslyder har bølgelengder opptil 17 meter og bøyer seg lett rundt hjørner. Diskanttoner har bølgelengder ned mot 1,7 cm og reflekteres i stedet.',
          },
          {
            id: 'nat-vg1-2-1-n-quiz3-q3',
            task: 'Hva bruker et ekkolodd på en båt for å måle havdybden?',
            options: [
              { id: 'a', text: 'Refleksjon av lydbølger fra havbunnen', isCorrect: true },
              { id: 'b', text: 'Brytning av lys i vannet', isCorrect: false },
              { id: 'c', text: 'Interferens mellom to bølger', isCorrect: false },
              { id: 'd', text: 'Diffraksjon av radiobølger', isCorrect: false },
            ],
            solution:
              'Et ekkolodd sender lydbølger nedover og måler tiden det tar før ekkoet kommer tilbake. Dybden beregnes med formelen avstand = (hastighet ganger tid) delt på 2, fordi lyden går ned og opp igjen.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-2-1-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du utforsket bølgenes verden -- fra den enkle steinen i tjernet til avansert teknologi som støyreduserende hodetelefoner.

Du har lært at **en bølge er en forstyrrelse som forplanter seg og overfører energi uten å flytte materie permanent**. Bølger finnes i to hovedtyper: **tverrbølger** der svingningene er vinkelrett på bevegelsesretningen (som lys, vannbølger og bølger på tau), og **lengdebølger** der svingningene er parallelle med bevegelsesretningen (som lydbølger og trykkbølger).

De viktigste bølgeegenskapene er **bølgelengde** (lambda, avstanden mellom to topper, målt i meter), **frekvens** (f, antall svingninger per sekund, målt i hertz), **periode** (T, tiden for én svingning, der T = 1/f), **amplitude** (A, maksimalt utslag fra likevekt, bestemmer intensiteten) og **bølgehastighet** (v, målt i meter per sekund).

Alt dette bindes sammen i bølgeformelen **v = f ganger lambda**, som gjelder for alle typer bølger. Mekaniske bølger trenger et medium (luft, vann, fast stoff), mens elektromagnetiske bølger kan bevege seg gjennom vakuum med lysets hastighet (c = 3 ganger 10 opphøyd i 8 m/s).

Når bølger møter verden, oppstår fenomenene **refleksjon** (bølgen kastes tilbake), **brytning** (bølgen endrer retning mellom medier), **interferens** (bølger forsterker eller utslukker hverandre), **diffraksjon** (bølger bøyer seg rundt hindringer) og **stående bølger** (bølger som ser ut til å stå stille, som på en gitarstreng).`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.2 NARRATIV: Lydbølger og akustikk
// ============================================================================

export const CHAPTER_NAT_VG1_2_2_NARRATIV: TextbookChapter = {
  id: 'nat-vg1-2-2-narrativ',
  courseId: 'nat-vg1',
  chapterNumber: '2.2',
  title: 'Lydbølger og akustikk',
  subtitle: 'Narrativ versjon',
  description:
    'Bli med inn i lydens verden -- fra stemmebåndenes vibrasjoner til flaggermusens ultralyd, og oppdag hvorfor ingen kan høre deg rope i verdensrommet.',
  estimatedMinutes: 40,
  competenceGoals: ['utforske og beskrive noen sentrale bølgefenomener'],
  linkedChapterId: 'nat-vg1-2-2',
  content: [
    {
      id: 'nat-vg1-2-2-n-intro',
      type: 'text',
      content: `## En verden av lyd

Lukk øynene et øyeblikk og lytt. Kanskje hører du summing fra en vifte, en bil som passerer utenfor, eller en stemme i rommet ved siden av. Vi lever omgitt av lyder -- fra fuglekvitteret som vekker oss om morgenen til trafikken som brummer i bakgrunnen. Men hva er egentlig lyd? Hvorfor kan du høre naboen snakke gjennom veggen, men aldri ville høre et rop i verdensrommet?

**Lyd er mekaniske lengdebølger** -- trykkbølger som forplanter seg gjennom et medium. I motsetning til lys, som er elektromagnetisk stråling og kan reise gjennom tomt rom, trenger lyd noe materielt å bevege seg gjennom: luft, vann, eller fast stoff. I verdensrommet er det nesten ingen molekyler, og derfor er det fullstendig stille der ute. Filmscener med eksplosjoner i rommet som bråker og smeller? Ren fiksjon -- i virkeligheten ville alt være lydløst.

I dette kapittelet skal vi dykke dypt inn i lydens fascinerende verden. Vi skal forstå hvordan lyd oppstår og forplanter seg, hvorfor noen toner er dype og andre lyse, hva desibel egentlig betyr, og hvorfor stemmen din høres sprø ut hvis du puster inn helium.`,
    },
    {
      id: 'nat-vg1-2-2-n-section1',
      type: 'text',
      content: `## Fra vibrasjon til opplevelse

For at du skal høre noe, må tre ting skje. Først må noe vibrere -- en *lydkilde*. Det kan være gitarstrengen som svinger, stemmebåndene dine som vibrerer, eller membranen i en høyttaler som beveger seg raskt frem og tilbake. Når dette objektet beveger seg utover, presser det luftmolekylene foran seg sammen. Det dannes en sone med høyt trykk, kalt **kompresjon**. Når objektet deretter beveger seg tilbake, oppstår en sone med lavt trykk, kalt **rarefaksjon**. Disse trykksonene forplanter seg utover i luften som en bølge.

Så treffer trykkbølgen øret ditt. **Trommehinnen** -- en tynn membran dypt inne i øregangen -- begynner å vibrere i takt med trykkendringene. Tre små bein (hammer, ambolt og stigbøyle) forsterker vibrasjonene og sender dem videre til **sneglehuset**, der tusenvis av bittesmå hårceller omdanner bevegelsen til elektriske signaler. Disse signalene sendes gjennom hørselsnerven til hjernen, som tolker dem som lyd.

Lyd er altså en lengdebølge fordi luftmolekylene svinger frem og tilbake *i samme retning* som bølgen beveger seg. De presses sammen og spres ut langs bølgens retning, akkurat som vindingene i en spiralfjær.

En viktig konsekvens av at lyd er en mekanisk bølge, er at den **ikke kan forplante seg i vakuum**. Uten luftmolekyler -- ingen trykkbølger. Uten trykkbølger -- ingen lyd. I verdensrommet, der det nesten ikke finnes molekyler, er det derfor fullstendig stille.`,
    },
    {
      id: 'nat-vg1-2-2-n-section2',
      type: 'text',
      content: `## Tonehøyde, lydstyrke og klangfarge

Hva er det som gjør at en fløyte høres annerledes ut enn en kontrabass, selv om begge spiller samme tone? Og hva betyr det egentlig når noen sier at en konsert var på 105 desibel? La oss se på de tre egenskapene som til sammen definerer hvordan vi opplever lyd.

**Tonehøyde** bestemmes av *frekvensen*. Dype toner (bass) har lav frekvens -- en kontrabass eller torden ligger i området 20 til 200 Hz. Vanlige toner som tale og de fleste instrumenter ligger mellom 200 og 2000 Hz. Lyse toner (diskant) som en fløyte eller fuglekvitter har høy frekvens, fra 2000 opptil 20 000 Hz. Mennesker kan normalt høre frekvenser mellom 20 Hz og 20 000 Hz, men denne evnen svekkes med alderen, spesielt for de høye frekvensene.

**Lydstyrke** bestemmes av *amplituden* og måles i **desibel (dB)** -- en logaritmisk skala. Det betyr at forholdet mellom tallene ikke er jevnt: hver økning på 10 dB oppleves som en *dobling* av lydstyrken. Høreterskelen (den svakeste lyden du kan oppfatte) er 0 dB. Et stille rom ligger på omtrent 30 dB. Normal samtale er rundt 60 dB. Tung trafikk når 85 dB, og det er grensen der langvarig eksponering begynner å utgjøre en risiko for hørselen. En konsert kan nå 100 dB, og et fly som tar av bråker med 120 dB -- nok til å forårsake smerte. Ved 140 dB, som et skudd, kan hørselsskade oppstå umiddelbart.

**Klangfarge** (timbre) er det som gjør at vi kan skille en fiolin fra en fløyte selv om de spiller nøyaktig samme tone med samme lydstyrke. Klangfargen bestemmes av **overtoner** -- tilleggsfrekvenser som er multipla av grunntonen. Hvert instrument produserer sin egen unike blanding av overtoner, og det er dette som gir instrumenter deres karakteristiske lyd.`,
    },
    {
      id: 'nat-vg1-2-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på lydegenskaper:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-2-2-n-quiz1-q0',
            task: 'Hvorfor kan du ikke høre lyd i verdensrommet?',
            options: [
              { id: 'a', text: 'Fordi temperaturen er for lav', isCorrect: false },
              { id: 'b', text: 'Fordi det nesten ikke finnes molekyler som kan overføre trykkbølgene', isCorrect: true },
              { id: 'c', text: 'Fordi lydbølgene beveger seg for sakte i vakuum', isCorrect: false },
              { id: 'd', text: 'Fordi øret ikke fungerer uten tyngdekraft', isCorrect: false },
            ],
            solution:
              'Lyd er en mekanisk bølge som trenger et medium (luft, vann, fast stoff) for å forplante seg. I verdensrommet er det nesten ingen molekyler, og uten medium -- ingen lyd.',
          },
          {
            id: 'nat-vg1-2-2-n-quiz1-q1',
            task: 'En konsert har lydnivå 105 dB, og grensen for langvarig eksponering er 85 dB. Hvor mye sterkere oppleves konserten?',
            options: [
              { id: 'a', text: '20 ganger sterkere', isCorrect: false },
              { id: 'b', text: '2 ganger sterkere', isCorrect: false },
              { id: 'c', text: '4 ganger sterkere', isCorrect: true },
              { id: 'd', text: '100 ganger sterkere', isCorrect: false },
            ],
            solution:
              'Forskjellen er 105 minus 85 = 20 dB. Hver 10 dB oppleves som dobling, så 20 dB = 2 ganger 2 = 4 ganger sterkere opplevd lyd.',
          },
          {
            id: 'nat-vg1-2-2-n-quiz1-q2',
            task: 'Hva bestemmer tonehøyden til en lyd?',
            options: [
              { id: 'a', text: 'Amplituden', isCorrect: false },
              { id: 'b', text: 'Bølgehastigheten', isCorrect: false },
              { id: 'c', text: 'Overtonene', isCorrect: false },
              { id: 'd', text: 'Frekvensen', isCorrect: true },
            ],
            solution:
              'Tonehøyden bestemmes av frekvensen. Lav frekvens gir dyp tone (bass), og høy frekvens gir lys tone (diskant). Mennesker hører normalt mellom 20 Hz og 20 000 Hz.',
          },
          {
            id: 'nat-vg1-2-2-n-quiz1-q3',
            task: 'Hva gjør at en fiolin og en fløyte høres forskjellig ut selv om de spiller samme tone?',
            options: [
              { id: 'a', text: 'Forskjellig frekvens', isCorrect: false },
              { id: 'b', text: 'Forskjellig amplitude', isCorrect: false },
              { id: 'c', text: 'Forskjellig klangfarge på grunn av ulike overtoner', isCorrect: true },
              { id: 'd', text: 'Forskjellig bølgehastighet', isCorrect: false },
            ],
            solution:
              'Klangfarge (timbre) bestemmes av overtoner -- tilleggsfrekvenser som er multipla av grunntonen. Hvert instrument produserer sin egen unike blanding av overtoner, noe som gir den karakteristiske lyden.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-2-2-n-section3',
      type: 'text',
      content: `## Lydens reisehastighet

Har du noen gang sett et lyn flamme over himmelen og deretter ventet i spenning på tordensmellet? Lynet og tordenen oppstår på nøyaktig samme tidspunkt, men du ser lynet først fordi lys beveger seg nesten umiddelbart (300 000 km per sekund), mens lyd beveger seg mye saktere -- omtrent 343 meter per sekund i luft ved 20 grader. Det gir en hendig tommelfingerregel: del antall sekunder mellom lyn og torden på 3, og du får omtrent avstanden i kilometer. Ser du lynet og hører tordenen 4,5 sekunder senere? Da er lynet omtrent 1,5 km unna.

Men lydhastigheten varierer dramatisk med mediet. I luft ved 0 grader er den 331 m/s, og den øker med omtrent 0,6 m/s for hver grad temperaturøkning. I helium, som er mye lettere enn luft, er lydhastigheten hele 970 m/s -- nesten tre ganger så rask. Det er nettopp derfor stemmen din høres så lys ut når du puster inn helium: stemmebåndene dine vibrerer med samme frekvens som vanlig, men de høyere resonansforholdene i munn- og halshulen gjør at overtonene forskyves oppover. Morsomt nok gir innånding av den tunge gassen svovelheksafluorid den motsatte effekten -- en dyp «monsterstemme».

I væsker er lyden enda raskere. Ferskvann fører lyd med omtrent 1480 m/s, og sjøvann med rundt 1530 m/s. I faste stoffer går det raskest av alt: stål overfører lyd med hele 5960 m/s, og aluminium med 6320 m/s. Grunnen er enkel -- i faste stoffer sitter molekylene tett og er sterkt bundet til hverandre, slik at vibrasjoner overføres svært effektivt. I gasser er molekylene langt fra hverandre og beveger seg tilfeldig, så det tar lenger tid for energien å forplante seg.

Dette forklarer det gamle westernfilm-trikset der folk legger øret mot jernbaneskinnene for å høre om et tog nærmer seg. Lyd gjennom stålskinnene (5960 m/s) reiser omtrent 17 ganger raskere enn gjennom luften (343 m/s), så du vil høre toget gjennom skinnene lenge før lyden gjennom luften når deg. Men gjør aldri dette i virkeligheten -- det er livsfarlig å oppholde seg på jernbanespor!`,
    },
    {
      id: 'nat-vg1-2-2-n-section4',
      type: 'text',
      content: `## Utenfor det hørbare: ultralyd og infralyd

Det menneskelige øret oppfatter bare et smalt vindu av alle mulige lydfrekvenser -- fra 20 Hz til 20 000 Hz. Men naturen og teknologien bruker lyd langt utenfor dette området.

**Infralyd** er lyd med frekvens under 20 Hz -- for dypt til at vi kan høre det, men vi kan noen ganger *føle* det som vibrasjoner i kroppen. Elefanter kommuniserer med infralyd som kan reise kilometervis gjennom bakken og luften. Jordskjelv produserer kraftig infralyd. Noen subwoofer-systemer genererer infralyd for å gi ekstra bass du føler mer enn hører.

**Ultralyd** er lyd med frekvens over 20 000 Hz -- for lyst for menneskelig hørsel, men ikke for alle dyr. Flaggermus er mestere i ultralyd: de sender ut signaler med frekvenser opptil 100 000 Hz og lytter etter ekkoet for å navigere i mørket og fange insekter -- en teknikk kalt **ekkolokalisering**. Delfiner bruker frekvenser opptil 150 000 Hz på lignende vis. Hunder kan høre opptil omtrent 40 000 Hz, noe som forklarer hvorfor hundeplystrer som virker «stille» for oss, fungerer utmerket for dem.

Mennesker har funnet mange bruksområder for ultralyd. **Medisinsk ultralyd** bruker frekvenser mellom 2 og 18 MHz for å ta bilder av fostre og indre organer -- trygt fordi det bare er lydbølger, ikke ioniserende stråling som røntgen. **Ekkolodd** på båter bruker 20 til 200 kHz for å måle havdybde og finne fiskestimer. **Ultralydrensing** bruker 20 til 40 kHz for å løsne smuss fra gjenstander -- alt fra smykker til kirurgisk utstyr. Kort bølgelengde er nøkkelen her: med 50 kHz i luft blir bølgelengden bare 6,8 mm, noe som gjør det mulig å oppdage og reflektere fra svært små objekter.

Øret vårt kan ikke oppfatte ultralyd fordi strukturene i øret -- trommehinnen, beinene, og hårcellene i sneglehuset -- rett og slett ikke klarer å vibrere raskt nok til å registrere så høye frekvenser.`,
    },
    {
      id: 'nat-vg1-2-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på lydhastighet, ultralyd og infralyd:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-2-2-n-quiz2-q0',
            task: 'Du ser et lyn og hører tordenen 6 sekunder senere. Omtrent hvor langt unna var lynet?',
            options: [
              { id: 'a', text: 'Omtrent 6 km', isCorrect: false },
              { id: 'b', text: 'Omtrent 2 km', isCorrect: true },
              { id: 'c', text: 'Omtrent 18 km', isCorrect: false },
              { id: 'd', text: 'Omtrent 0,6 km', isCorrect: false },
            ],
            solution:
              'Tommelfingerregelen: del antall sekunder på 3 for å få kilometere. 6/3 = 2 km. Mer nøyaktig: 343 m/s ganger 6 s = 2058 m, altså omtrent 2 km.',
          },
          {
            id: 'nat-vg1-2-2-n-quiz2-q1',
            task: 'I hvilket medium beveger lyd seg raskest?',
            options: [
              { id: 'a', text: 'Luft', isCorrect: false },
              { id: 'b', text: 'Vann', isCorrect: false },
              { id: 'c', text: 'Stål', isCorrect: true },
              { id: 'd', text: 'Helium', isCorrect: false },
            ],
            solution:
              'Lyd beveger seg raskest i faste stoffer fordi molekylene sitter tett og er sterkt bundet. I stål er lydhastigheten 5960 m/s, mot 1480 m/s i vann og 343 m/s i luft.',
          },
          {
            id: 'nat-vg1-2-2-n-quiz2-q2',
            task: 'Hvorfor brukes ultralyd fremfor røntgen til å undersøke fostre?',
            options: [
              { id: 'a', text: 'Ultralyd gir bedre bildeoppløsning', isCorrect: false },
              { id: 'b', text: 'Ultralyd er billigere', isCorrect: false },
              { id: 'c', text: 'Ultralyd er ikke ioniserende stråling og skader ikke DNA', isCorrect: true },
              { id: 'd', text: 'Røntgen kan ikke ta bilder gjennom vev', isCorrect: false },
            ],
            solution:
              'Ultralyd er bare lydbølger som reflekteres fra vevet -- det er ikke ioniserende stråling. Røntgen er ioniserende og kan skade DNA. Derfor brukes ultralyd rutinemessig for å overvåke svangerskap.',
          },
          {
            id: 'nat-vg1-2-2-n-quiz2-q3',
            task: 'Hvorfor høres stemmen lys ut når du puster inn helium?',
            options: [
              { id: 'a', text: 'Stemmebåndene vibrerer raskere i helium', isCorrect: false },
              { id: 'b', text: 'Helium gjør luftrøret smalere', isCorrect: false },
              { id: 'c', text: 'Lydhastigheten i helium er nesten tre ganger høyere, noe som endrer resonansforholdene', isCorrect: true },
              { id: 'd', text: 'Helium absorberer de dype frekvensene', isCorrect: false },
            ],
            solution:
              'Lydhastigheten i helium (970 m/s) er nesten tre ganger høyere enn i luft (343 m/s). Stemmebåndene vibrerer med samme frekvens, men resonansforholdene i munnen og halsen endres slik at overtonene forskyves oppover. Stemmen høres derfor lysere ut.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-2-2-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du utforsket lydens verden -- fra vibrasjonene i en gitarstreng til flaggermusens ekkolokalisering.

Du har lært at **lyd er mekaniske lengdebølger (trykkbølger)** som trenger et medium for å forplante seg. En lydkilde vibrerer og skaper vekslende soner med høyt trykk (kompresjon) og lavt trykk (rarefaksjon) som forplanter seg utover. Trommehinnen i øret oppfatter disse trykkendringene, og hjernen tolker signalene som lyd. I vakuum -- som i verdensrommet -- kan lyd ikke forplante seg.

**Tonehøyde** bestemmes av frekvensen (lav frekvens = dyp tone, høy frekvens = lys tone). **Lydstyrke** bestemmes av amplituden og måles i **desibel (dB)** på en logaritmisk skala der +10 dB oppleves som dobling. Langvarig eksponering over 85 dB kan gi permanent hørselsskade. **Klangfarge** bestemmes av overtoner og gjør at vi kan skille mellom ulike instrumenter.

**Lydhastigheten** varierer med mediet: i luft ved 20 grader er den 343 m/s, i vann rundt 1480 m/s, og i stål hele 5960 m/s. Lyd beveger seg raskere i faste stoffer der molekylene sitter tett. Høyere temperatur gir også høyere lydhastighet.

Det **hørbare området** for mennesker er 20 Hz til 20 000 Hz. Under 20 Hz kalles **infralyd** (brukt av elefanter, produsert av jordskjelv). Over 20 000 Hz kalles **ultralyd** (brukt av flaggermus og delfiner, og i medisinsk avbildning, ekkolodd og ultralydrensing). Medisinsk ultralyd (2-18 MHz) er tryggere enn røntgen fordi det er lydbølger, ikke ioniserende stråling.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.3 NARRATIV: Det elektromagnetiske spekteret
// ============================================================================

export const CHAPTER_NAT_VG1_2_3_NARRATIV: TextbookChapter = {
  id: 'nat-vg1-2-3-narrativ',
  courseId: 'nat-vg1',
  chapterNumber: '2.3',
  title: 'Det elektromagnetiske spekteret',
  subtitle: 'Narrativ versjon',
  description:
    'Fra radiobølgene som bringer deg musikk til gammastrålene fra eksploderende stjerner -- en reise gjennom hele det elektromagnetiske spekteret og dets innvirkning på livene våre.',
  estimatedMinutes: 40,
  competenceGoals: [
    'utforske og beskrive elektromagnetisk og ioniserende stråling, og vurdere informasjon om stråling og helseeffekter',
  ],
  linkedChapterId: 'nat-vg1-2-3',
  content: [
    {
      id: 'nat-vg1-2-3-n-intro',
      type: 'text',
      content: `## Mer enn øyet kan se

Akkurat nå, der du sitter, er du badet i stråling. Radiobølger fra nærliggende sendere passerer gjennom kroppen din. WiFi-signaler svever gjennom rommet. Infrarød stråling fra varme gjenstander rundt deg treffer huden din. Synlig lys fra vinduet eller lampen over deg strømmer inn gjennom øynene. Og et svakt drys av kosmisk stråling fra verdensrommet trenger gjennom taket over hodet ditt.

Alt dette er **elektromagnetisk stråling** -- bølger bestående av oscillerende elektriske og magnetiske felt som forplanter seg gjennom rommet. Det vi kaller «lys» er bare et smalt bånd i et enormt spekter. Forestill deg at du har et piano med tusenvis av tangenter. Det synlige lyset -- alt du kan se med øynene -- tilsvarer bare én eneste oktav. Resten av tastene representerer stråling som er helt usynlig for oss, men som likevel spiller en enorm rolle i livene våre.

Det som gjør elektromagnetisk stråling så spesiell, er at den i motsetning til lyd ikke trenger noe medium. Den kan bevege seg gjennom tomt rom, gjennom vakuumet mellom stjernene. Og i vakuum har all elektromagnetisk stråling nøyaktig samme hastighet: **lyshastigheten c**, omtrent 3 ganger 10 opphøyd i 8 meter per sekund. Det eneste som skiller radiobølger fra røntgenstråling er bølgelengde og frekvens -- og dermed energi.`,
    },
    {
      id: 'nat-vg1-2-3-n-section1',
      type: 'text',
      content: `## Bølger, fotoner og energi

Elektromagnetisk stråling har en merkelig dobbelnatur som fysikere kaller **bølge-partikkel-dualitet**. Noen ganger oppfører den seg som bølger -- den kan bøyes, brytes og interferere, akkurat som vannbølger. Andre ganger oppfører den seg som en strøm av partikler kalt **fotoner** -- små pakker av energi som sendes ut og absorberes én om gangen.

Alle typer elektromagnetisk stråling deler noen grunnleggende egenskaper. De beveger seg alle med **lyshastigheten** (c = 3 ganger 10 opphøyd i 8 m/s) i vakuum. De trenger ikke noe medium. Og de bærer energi.

Det som skiller de ulike typene fra hverandre, er sammenhengen mellom tre størrelser: **bølgelengde** (lambda), **frekvens** (f) og **energi** (E). Bølgeformelen **c = f ganger lambda** forteller oss at siden lyshastigheten er konstant, betyr høyere frekvens automatisk kortere bølgelengde, og omvendt. Energien til et foton er gitt av formelen **E = h ganger f**, der h er Plancks konstant (6,626 ganger 10 opphøyd i minus 34 joule-sekund). Høyere frekvens betyr altså mer energi per foton.

Denne sammenhengen har enorme konsekvenser. Radiobølger med lange bølgelengder og lav frekvens har svært lite energi per foton -- de er helt ufarlige. I den andre enden av spekteret har gammastråling ekstremt kort bølgelengde, ekstremt høy frekvens og enorm energi -- nok til å trenge gjennom materie og rive elektroner løs fra atomer. Samme type fenomen, men med vilt forskjellig virkning.`,
    },
    {
      id: 'nat-vg1-2-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på elektromagnetisk stråling og energi:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-2-3-n-quiz1-q0',
            task: 'Hva har alle typer elektromagnetisk stråling til felles?',
            options: [
              { id: 'a', text: 'De har alle samme bølgelengde', isCorrect: false },
              { id: 'b', text: 'De trenger alle et medium for å forplante seg', isCorrect: false },
              { id: 'c', text: 'De beveger seg alle med lyshastigheten i vakuum', isCorrect: true },
              { id: 'd', text: 'De er alle ioniserende', isCorrect: false },
            ],
            solution:
              'All elektromagnetisk stråling beveger seg med lyshastigheten c i vakuum -- omtrent 3 ganger 10 opphøyd i 8 m/s. De skilles av bølgelengde, frekvens og energi.',
          },
          {
            id: 'nat-vg1-2-3-n-quiz1-q1',
            task: 'Hva skjer med energien til et foton når frekvensen øker?',
            options: [
              { id: 'a', text: 'Energien avtar', isCorrect: false },
              { id: 'b', text: 'Energien forblir uendret', isCorrect: false },
              { id: 'c', text: 'Energien øker', isCorrect: true },
              { id: 'd', text: 'Det avhenger av bølgelengden', isCorrect: false },
            ],
            solution:
              'Energien til et foton er gitt av E = h ganger f. Når frekvensen øker, øker energien proporsjonalt. Høyere frekvens betyr kortere bølgelengde og mer energirike fotoner.',
          },
          {
            id: 'nat-vg1-2-3-n-quiz1-q2',
            task: 'Siden lyshastigheten er konstant for all EM-stråling i vakuum, hva betyr det at en stråling har høy frekvens?',
            options: [
              { id: 'a', text: 'Den har lang bølgelengde', isCorrect: false },
              { id: 'b', text: 'Den har kort bølgelengde', isCorrect: true },
              { id: 'c', text: 'Den beveger seg raskere enn lyset', isCorrect: false },
              { id: 'd', text: 'Den trenger et medium for å forplante seg', isCorrect: false },
            ],
            solution:
              'Siden c = f ganger lambda er konstant, betyr høyere frekvens automatisk kortere bølgelengde. Radiobølger har lang bølgelengde og lav frekvens, mens gammastråling har ekstremt kort bølgelengde og høy frekvens.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-2-3-n-section2',
      type: 'text',
      content: `## En reise gjennom spekteret

La oss ta en reise gjennom det elektromagnetiske spekteret, fra de lengste bølgene til de korteste.

Vi starter med **radiobølger**, som har bølgelengder fra flere kilometer ned til noen centimeter. De brukes til radio, TV, mobiltelefoni og WiFi. FM-radio på 100 MHz har for eksempel en bølgelengde på 3 meter. Radiobølger er helt ufarlige -- de har så lite energi per foton at de ikke kan påvirke molekyler i kroppen din.

Neste stopp er **mikrobølger**, med bølgelengder fra centimeter ned til millimeter. Mikrobølgeovnen din bruker bølger på 2,45 GHz (bølgelengde ca. 12 cm) som får vannmolekyler i maten til å vibrere raskt, og dermed varme opp maten. Radar, 5G-mobilnett og Bluetooth bruker også mikrobølger.

Så kommer **infrarød stråling** (IR), med bølgelengder fra omtrent 1 mm ned til 700 nm -- rett under det røde lyset vi kan se. Alle varme gjenstander sender ut infrarød stråling; jo varmere, jo mer og kortere bølgelengde. Fjernkontrollen din bruker nær-infrarød, varmekameraer detekterer infrarød stråling fra kroppen din (som har en temperatur på omtrent 37 grader), og terrassevarmere gir varme via infrarøde stråler. Fiberoptiske kabler bruker ofte nær-infrarødt lys for å overføre data.

Nå kommer vi til det smale båndet vi faktisk kan se: **synlig lys**, fra omtrent 700 nm (rødt) til 400 nm (fiolett). Hvitt lys er en blanding av alle disse bølgelengdene. Når hvitt lys passerer gjennom et prisme, splittes det opp i regnbuens farger fordi ulike bølgelengder brytes ulikt. Fargene vi ser på gjenstander oppstår fordi gjenstandene absorberer noen bølgelengder og reflekterer andre -- et rødt eple absorberer blått og grønt lys, men reflekterer rødt.

Har du noen gang lurt på hvorfor himmelen er blå og solnedganger røde? Fenomenet kalles **Rayleigh-spredning**. Kortere bølgelengder (blått lys) spres mye mer av luftmolekylene enn lange bølgelengder (rødt lys). På dagtid spres blått lys i alle retninger, og himmelen ser blå ut. Ved solnedgang må lyset gjennom mye mer atmosfære, slik at nesten alt blått spres bort -- bare det røde og oransje lyset når øynene dine.`,
    },
    {
      id: 'nat-vg1-2-3-n-section3',
      type: 'text',
      content: `## Den usynlige fare: UV, røntgen og gammastråling

Hinsides det synlige lyset begynner strålingen å bli mer energirik -- og potensielt farligere.

**Ultrafiolett stråling** (UV) har bølgelengder fra 400 nm ned til omtrent 10 nm. Den deles gjerne inn i UV-A (315-400 nm), UV-B (280-315 nm) og UV-C (100-280 nm). UV-A og UV-B fra solen er det som gir deg solbrenthet og brun hud. UV-stråling brukes også til desinfeksjon -- UV-C dreper bakterier ved å skade DNA-et deres. UV-stråling er på grensen mellom ikke-ioniserende og ioniserende: UV-A er i hovedsak ikke-ioniserende, mens UV-C er klart ioniserende og kan skade DNA direkte.

**Røntgenstråling** har bølgelengder fra omtrent 10 nm ned til 0,01 nm og svært høy energi. Det er dette som gjør den nyttig i medisinsk bildetaking: røntgenstråler trenger gjennom bløtvev, men absorberes av bein. Resultatet er et skyggebilde som viser skjelettet. Et røntgenfoton har omtrent 5400 ganger mer energi enn et foton av grønt lys -- det er derfor røntgen kan skade celler, og man skal begrense antall røntgenbilder.

**Gammastråling** har de korteste bølgelengdene (under 0,01 nm) og den høyeste energien. Den oppstår ved radioaktivt henfall og i kraftige kosmiske hendelser. I medisinsk sammenheng brukes gammastråling til kreftbehandling: fokuserte gammastråler kan drepe kreftceller.

Her kommer vi til det viktige skillet mellom **ioniserende** og **ikke-ioniserende stråling**. Ioniserende stråling -- UV-C, røntgen og gammastråling -- har nok energi til å slå løs elektroner fra atomer. Dette kan skade DNA i cellene og øke risikoen for kreft. Ikke-ioniserende stråling -- radiobølger, mikrobølger, infrarød, synlig lys og UV-A -- har ikke nok energi til dette. Det betyr ikke at ikke-ioniserende stråling er helt ufarlig (mikrobølger kan varme opp vev, UV-B gir solbrenthet), men den gir ikke direkte DNA-skade på samme måte.`,
    },
    {
      id: 'nat-vg1-2-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på det elektromagnetiske spekteret:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-2-3-n-quiz2-q0',
            task: 'Ranger disse EM-strålingstypene fra lavest til høyest energi: synlig lys, gammastråling, radiobølger, røntgen.',
            options: [
              { id: 'a', text: 'Gammastråling, røntgen, synlig lys, radiobølger', isCorrect: false },
              { id: 'b', text: 'Radiobølger, synlig lys, røntgen, gammastråling', isCorrect: true },
              { id: 'c', text: 'Synlig lys, radiobølger, gammastråling, røntgen', isCorrect: false },
              { id: 'd', text: 'Røntgen, gammastråling, radiobølger, synlig lys', isCorrect: false },
            ],
            solution:
              'Fra lavest til høyest energi: radiobølger (lang bølgelengde, lav frekvens) til gammastråling (kort bølgelengde, høy frekvens). Huskeregel: jo kortere bølgelengde, jo høyere energi.',
          },
          {
            id: 'nat-vg1-2-3-n-quiz2-q1',
            task: 'Hvorfor er himmelen blå?',
            options: [
              { id: 'a', text: 'Fordi havet reflekterer blått lys oppover', isCorrect: false },
              { id: 'b', text: 'Fordi ozonlaget absorberer alt annet lys enn blått', isCorrect: false },
              { id: 'c', text: 'Fordi blått lys spres mer enn rødt lys av luftmolekyler (Rayleigh-spredning)', isCorrect: true },
              { id: 'd', text: 'Fordi solen sender ut mest blått lys', isCorrect: false },
            ],
            solution:
              'Rayleigh-spredning gjør at korte bølgelengder (blått lys) spres mye mer enn lange bølgelengder (rødt lys) av luftmolekyler. Det spredte blå lyset kommer fra alle retninger, og himmelen ser blå ut.',
          },
          {
            id: 'nat-vg1-2-3-n-quiz2-q2',
            task: 'Hva gjør ioniserende stråling farlig?',
            options: [
              { id: 'a', text: 'Den varmer opp kroppen', isCorrect: false },
              { id: 'b', text: 'Den har nok energi til å slå løs elektroner fra atomer og dermed skade DNA', isCorrect: true },
              { id: 'c', text: 'Den beveger seg raskere enn lyset', isCorrect: false },
              { id: 'd', text: 'Den trenger gjennom klær', isCorrect: false },
            ],
            solution:
              'Ioniserende stråling (UV-C, røntgen, gammastråling) har nok energi til å slå elektroner løs fra atomer. Dette kan skade DNA i celler og øke risikoen for kreft.',
          },
          {
            id: 'nat-vg1-2-3-n-quiz2-q3',
            task: 'Mobiltelefoner bruker stråling i mikrobølge-/radiofrekvensområdet. Er dette ioniserende stråling?',
            options: [
              { id: 'a', text: 'Ja, all stråling fra elektronikk er ioniserende', isCorrect: false },
              { id: 'b', text: 'Ja, fordi mikrobølger har høy frekvens', isCorrect: false },
              { id: 'c', text: 'Nei, mobilen sender ut ikke-ioniserende stråling med altfor lav fotonenergi til å skade DNA', isCorrect: true },
              { id: 'd', text: 'Det kommer an på hvor nær du holder telefonen', isCorrect: false },
            ],
            solution:
              'Mobilstråling er ikke-ioniserende. Fotonene har energi som er millioner av ganger lavere enn ioniserende stråling. Omfattende forskning har ikke funnet noen sammenheng med kreft. WHO klassifiserer det som \"mulig kreftfremkallende\" (gruppe 2B), samme kategori som syltet grønnsaker -- det betyr bare at det ikke er nok bevis til å utelukke en sammenheng helt.',
          },
          {
            id: 'nat-vg1-2-3-n-quiz2-q4',
            task: 'Hvilken type EM-stråling bruker en mikrobølgeovn for å varme opp mat?',
            options: [
              { id: 'a', text: 'Infrarød stråling', isCorrect: false },
              { id: 'b', text: 'Røntgenstråling', isCorrect: false },
              { id: 'c', text: 'Ultrafiolett stråling', isCorrect: false },
              { id: 'd', text: 'Mikrobølger som får vannmolekyler til å vibrere', isCorrect: true },
            ],
            solution:
              'Mikrobølgeovnen bruker mikrobølger på 2,45 GHz. Disse bølgene får vannmolekylene i maten til å vibrere raskt, noe som genererer varme. Ovnen er trygg fordi mikrobølgene er innelukket bak en metallskjerm.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-2-3-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du reist gjennom hele det elektromagnetiske spekteret -- fra radiobølgene som bringer musikk til ørene dine, til gammastrålene som brukes i kreftbehandling.

Du har lært at **elektromagnetisk stråling** er bølger av oscillerende elektriske og magnetiske felt som beveger seg med **lyshastigheten** (c = 3 ganger 10 opphøyd i 8 m/s) i vakuum. Den trenger ikke noe medium og viser **bølge-partikkel-dualitet** -- den oppfører seg både som bølger og som partikler (fotoner). Sammenhengen **c = f ganger lambda** betyr at høyere frekvens gir kortere bølgelengde, og energiformelen **E = h ganger f** forteller at kortere bølgelengde betyr høyere energi per foton.

**Det elektromagnetiske spekteret** spenner fra radiobølger (lang bølgelengde, lav energi) via mikrobølger, infrarød stråling, synlig lys (det smale båndet fra 400 til 700 nm som øynene våre kan oppfatte) og ultrafiolett, til røntgen og gammastråling (kort bølgelengde, høy energi). Hvitt lys er en blanding av alle synlige bølgelengder, og fargene i regnbuen -- fra rødt (700 nm) til fiolett (400 nm) -- oppstår når lys splittes av et prisme. Gjenstander får farge ved å absorbere noen bølgelengder og reflektere andre.

Det viktigste skillet i spekteret er mellom **ioniserende stråling** (UV-C, røntgen, gammastråling) som har nok energi til å slå løs elektroner fra atomer og dermed kan skade DNA, og **ikke-ioniserende stråling** (radiobølger, mikrobølger, infrarød, synlig lys, UV-A) som ikke har denne evnen. Mobilstråling, WiFi og 5G er alle ikke-ioniserende og har fotonenergi som er millioner av ganger lavere enn UV-stråling.`,
    },
  ],
  exercises: [],
};

export const NAT_VG1_NARRATIV_DEL2A_CHAPTERS = [
  CHAPTER_NAT_VG1_2_1_NARRATIV,
  CHAPTER_NAT_VG1_2_2_NARRATIV,
  CHAPTER_NAT_VG1_2_3_NARRATIV,
];
