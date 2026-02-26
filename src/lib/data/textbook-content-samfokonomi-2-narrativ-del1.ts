/* eslint-disable */
// @ts-nocheck
/**
 * Samfunnsøkonomi 2 (VG3) - NARRATIV VERSJON DEL 1
 * Kapittel 1.1-1.5: Makroøkonomiske modeller
 *
 * Narrativ versjon optimalisert for lesing/lytting på mobil.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1.1 NARRATIV: Makroøkonomisk tenkning
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_1_1_NARRATIV: TextbookChapter = {
  id: 'samfokonomi-2-1-1-narrativ',
  courseId: 'samfokonomi-2',
  chapterNumber: '1.1',
  title: 'Makroøkonomisk tenkning',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om det store bildet i økonomien – fra enkeltbeslutninger til hele nasjoners velstand, og hvorfor det som er bra for én person ikke alltid er bra for alle.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for sentrale makroøkonomiske begreper og sammenhenger',
    'analysere konjunkturutvikling ved hjelp av makroøkonomiske modeller',
  ],
  linkedChapterId: 'samfokonomi-2-1-1',
  content: [
    {
      id: 'samfokonomi-2-1-1-n-intro',
      type: 'text',
      content: `## Fugleperspektivet på økonomien

Tenk deg at du står midt i Karl Johans gate en travel ettermiddag. Du ser folk som handler klær, kjøper kaffe, og skynder seg til jobb. Hver eneste person tar sine egne beslutninger – hva de kjøper, hvor mye de jobber, hva de sparer. Det er mikroøkonomi: enkeltpersonenes valg.

Men hev deg nå opp over byen – som om du sitter i et fly – og se på hele Norge. Plutselig handler det ikke lenger om én persons kaffekjøp, men om *samlet konsum* for fem millioner mennesker. Ikke om én bedrifts overskudd, men om hele landets verdiskaping. Ikke om én arbeidstakers lønn, men om den totale sysselsettingen. Velkommen til **makroøkonomi** – læren om det store bildet.

Makroøkonomi stiller de virkelig store spørsmålene: Hva bestemmer om et land er rikt eller fattig? Hvorfor mister tusenvis av mennesker jobben samtidig? Hva forårsaker at prisene stiger år etter år? Og kanskje viktigst av alt – kan myndighetene gjøre noe med det?`,
    },
    {
      id: 'samfokonomi-2-1-1-n-section1',
      type: 'text',
      content: `## BNP – nasjonens temperaturmåler

Hvis du skal måle helsetilstanden til en økonomi, trenger du et tall. Det viktigste av alle slike tall er **bruttonasjonalproduktet**, forkortet BNP. Det er den samlede verdien av alle varer og tjenester som produseres i et land i løpet av ett år.

Tenk på det som summen av alt Norge lager og gjør – fra olje som pumpes opp i Nordsjøen, via laks som eksporteres til Japan, til frisøren som klipper deg. Alt telles med.

Økonomer har tre måter å måle BNP på, og det fine er at alle tre gir samme svar. **Produksjonsmetoden** summerer verdiskapingen i alle næringer. **Inntektsmetoden** summerer alle inntekter – lønn, overskudd, renter. Og **utgiftsmetoden** ser på hvem som bruker pengene: $BNP = C + I + G + (X - M)$, der C er privat konsum, I er investeringer, G er offentlig forbruk, og X minus M er nettoeksporten.

Men det finnes en viktig fallgruve: Hvis prisene stiger med ti prosent og produksjonen er uendret, ser det ut som BNP har vokst – men det har det egentlig ikke. Derfor skiller vi mellom **nominelt BNP** (i løpende priser) og **reelt BNP** (justert for prisstigning). Reelt BNP er det vi egentlig bryr oss om, fordi det viser om vi faktisk produserer mer.

BNP per innbygger brukes ofte som mål på levestandard, men det har sine begrensninger. Det fanger ikke opp hvordan inntekten er fordelt, det sier ingenting om fritid eller miljø, og det overser uformell økonomi som frivillig arbeid og omsorg i hjemmet.`,
    },
    {
      id: 'samfokonomi-2-1-1-n-section2',
      type: 'text',
      content: `## Konjunkturer – økonomiens puls

Økonomien beveger seg ikke i en rett linje oppover. Den svinger – noen ganger er det gode tider med lav ledighet og optimisme, andre ganger er det nedgangstider med oppsigelser og pessimisme. Disse svingningene kalles **konjunkturer**.

En konjunktursyklus har fire faser. Først kommer **oppgangen**, der BNP stiger, bedrifter ansetter flere og folk føler seg trygge. Så når økonomien toppen – en **høykonjunktur** – der det er press i arbeidsmarkedet og det begynner å bli vanskelig å finne nok arbeidskraft. Deretter snur det, og vi får en **nedgang** med fallende BNP og stigende ledighet. Til slutt treffer vi bunnen – en **lavkonjunktur** – før det igjen snur oppover.

Et nøkkelbegrep er **produksjonsgapet**: forskjellen mellom hva økonomien faktisk produserer og hva den *kunne* produsere ved normal kapasitetsutnyttelse. Er produksjonsgapet positivt, kjører økonomien på overtid – det er fare for overoppheting og prispress. Er det negativt, går ressurser til spille, og folk som vil jobbe finner ikke jobb.

Her kommer myndighetene inn. De har to hovedverktøy for å jevne ut svingningene. **Finanspolitikk** handler om statsbudsjettet – hva staten bruker penger på og hvor mye den krever inn i skatt. **Pengepolitikk** handler om Norges Banks styringsrente og pengemengden. I Norge har Norges Bank et inflasjonsmål på 2 prosent årlig, og renten er det viktigste virkemiddelet for å nå det målet.`,
    },
    {
      id: 'samfokonomi-2-1-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-1-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på makroøkonomiske grunnbegreper:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfokonomi-2-1-1-n-quiz1-q0',
            task: 'Hva er den korrekte formelen for BNP målt med utgiftsmetoden?',
            options: [
              { id: 'a', text: 'BNP = C + I + G + (X − M)', isCorrect: true },
              { id: 'b', text: 'BNP = C + I − G + (X − M)', isCorrect: false },
              { id: 'c', text: 'BNP = C + I + G + X + M', isCorrect: false },
              { id: 'd', text: 'BNP = C × I × G × (X − M)', isCorrect: false },
            ],
            solution: 'BNP med utgiftsmetoden er summen av privat konsum (C), bruttoinvesteringer (I), offentlig konsum (G) og nettoeksport (X − M). Alle komponentene adderes.',
          },
          {
            id: 'samfokonomi-2-1-1-n-quiz1-q1',
            task: 'Hvorfor er reelt BNP et bedre mål på økonomisk utvikling enn nominelt BNP?',
            options: [
              { id: 'a', text: 'Fordi det er enklere å beregne', isCorrect: false },
              { id: 'b', text: 'Fordi det er justert for prisstigning og viser faktisk produksjonsendring', isCorrect: true },
              { id: 'c', text: 'Fordi det tar hensyn til miljøkostnader', isCorrect: false },
              { id: 'd', text: 'Fordi det inkluderer uformell økonomi', isCorrect: false },
            ],
            solution: 'Nominelt BNP påvirkes av både produksjonsendringer og prisendringer. Reelt BNP er justert for inflasjon, slik at det bare reflekterer faktiske endringer i produksjonen.',
          },
          {
            id: 'samfokonomi-2-1-1-n-quiz1-q2',
            task: 'Hva kjennetegner en høykonjunktur?',
            options: [
              { id: 'a', text: 'Negativt produksjonsgap og høy arbeidsledighet', isCorrect: false },
              { id: 'b', text: 'Stabilt BNP uten vekst', isCorrect: false },
              { id: 'c', text: 'Positivt produksjonsgap, lav ledighet og press i arbeidsmarkedet', isCorrect: true },
              { id: 'd', text: 'Fallende eksport og stigende import', isCorrect: false },
            ],
            solution: 'I en høykonjunktur produserer økonomien over sitt potensial (positivt produksjonsgap). Det er lav arbeidsledighet, press på lønninger og priser, og fare for overoppheting.',
          },
          {
            id: 'samfokonomi-2-1-1-n-quiz1-q3',
            task: 'Hvilke to hovedverktøy har myndighetene for å påvirke konjunkturene?',
            options: [
              { id: 'a', text: 'Finanspolitikk (statsbudsjettet) og pengepolitikk (sentralbanken)', isCorrect: true },
              { id: 'b', text: 'Handelspolitikk og næringspolitikk', isCorrect: false },
              { id: 'c', text: 'Skattepolitikk og utdanningspolitikk', isCorrect: false },
              { id: 'd', text: 'Arbeidsmarkedspolitikk og miljøpolitikk', isCorrect: false },
            ],
            solution: 'Finanspolitikk styres av regjering og Storting gjennom statsbudsjettet. Pengepolitikk styres av Norges Bank gjennom styringsrenten. Sammen utgjør de hovedverktøyene for å stabilisere økonomien.',
          },
        ],
      },
    },
    {
      id: 'samfokonomi-2-1-1-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om makroøkonomiens grunnbegreper. **Makroøkonomi** ser på økonomien som helhet – i motsetning til mikroøkonomi som studerer enkeltaktører. **BNP** måler samlet verdiskaping og kan beregnes med produksjons-, inntekts- eller utgiftsmetoden. Vi skiller mellom nominelt og reelt BNP for å fange opp faktisk produksjonsendring. **Konjunkturer** er svingninger i økonomisk aktivitet gjennom oppgang, høykonjunktur, nedgang og lavkonjunktur. **Produksjonsgapet** viser om økonomien er over eller under sitt potensial. Myndighetene bruker **finanspolitikk** og **pengepolitikk** for å stabilisere økonomien.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.2 NARRATIV: Keynesiansk modell
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_1_2_NARRATIV: TextbookChapter = {
  id: 'samfokonomi-2-1-2-narrativ',
  courseId: 'samfokonomi-2',
  chapterNumber: '1.2',
  title: 'Keynesiansk modell',
  subtitle: 'Narrativ versjon',
  description: 'Historien om mannen som snudde økonomifaget på hodet – John Maynard Keynes – og hans revolusjonerende idé om at markedet ikke alltid ordner opp selv.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjøre rede for keynesiansk økonomisk teori',
    'beregne og tolke multiplikatoreffekter',
  ],
  linkedChapterId: 'samfokonomi-2-1-2',
  content: [
    {
      id: 'samfokonomi-2-1-2-n-intro',
      type: 'text',
      content: `## Da økonomifaget ble snudd på hodet

Det er 1930-tallet. Verden er midt i den verste økonomiske krisen i moderne tid – *Den store depresjonen*. Fabrikker står stille, millioner er arbeidsledige, og folk mister hjemmene sine. Den klassiske økonomiske teorien hevder at markedet vil ordne opp selv: bare vent, og prisene og lønningene vil justere seg slik at alle som vil jobbe, finner seg en jobb.

Men det skjer ikke. Krisen bare fortsetter, år etter år. Og inn på scenen trer en britisk økonom som skal forandre alt: **John Maynard Keynes**.

I 1936 publiserer Keynes sitt hovedverk, *The General Theory of Employment, Interest and Money*. Budskapet er provoserende enkelt: markedet regulerer ikke alltid seg selv. Økonomien kan bli sittende fast i en tilstand med høy arbeidsledighet – og bare staten kan dra den ut.

Keynes pekte på tre viktige innsikter. For det første: **etterspørselen styrer produksjonen** på kort sikt. Det nytter ikke at folk vil jobbe hvis ingen vil kjøpe det de lager. For det andre: **lønninger og priser er stive nedover** – de tilpasser seg ikke raskt nok til å gjenopprette likevekt. Og for det tredje: **staten må gripe inn med aktiv finanspolitikk** for å få hjulene i gang igjen.`,
    },
    {
      id: 'samfokonomi-2-1-2-n-section1',
      type: 'text',
      content: `## Konsumfunksjonen – hva gjør du med en ekstra tusenlapp?

I hjertet av Keynes' modell ligger et enkelt spørsmål: Hva gjør du hvis du plutselig får tusen kroner ekstra i inntekt? Sparer du alt, eller bruker du noe av det?

De fleste av oss bruker en del og sparer resten. Keynes uttrykte dette som **konsumfunksjonen**: $C = c_0 + c_1 \\cdot Y_d$. Her er $c_0$ det vi kaller *autonomt konsum* – det du bruker uansett, selv om inntekten din var null (kanskje du lever på sparepenger eller lån). Og $c_1$ er den **marginale konsumtilbøyeligheten** – andelen av hver ekstra krone du bruker på konsum.

Hvis $c_1$ er 0,8, betyr det at du bruker 80 øre av hver nye krone og sparer 20 øre. Denne lille parameteren har enorme konsekvenser, som vi snart skal se.

**Samlet etterspørsel** i økonomien kalles AD (Aggregate Demand), og den følger den kjente formelen: $AD = C + I + G + (X - M)$. I Keynes' modell er det etterspørselen som bestemmer produksjonen, ikke omvendt – i hvert fall så lenge det er ledig kapasitet i økonomien.`,
    },
    {
      id: 'samfokonomi-2-1-2-n-section2',
      type: 'text',
      content: `## Multiplikatoreffekten – pengens snøballeffekt

Her kommer det geniale – og kanskje mest overraskende – ved Keynes' teori. Når staten bruker én milliard kroner ekstra, vokser ikke BNP med bare én milliard. Det vokser med *mer* enn én milliard. Hvordan er det mulig?

Tenk deg at staten bygger en ny bro for 100 millioner kroner. Disse pengene går til byggearbeidere og materialeleverandører. Byggearbeiderne bruker 80 prosent av sin nye inntekt – la oss si 80 millioner – på konsum: mat, klær, underholdning. Disse 80 millionene blir inntekt for andre – butikkeiere, restauranteiere, kinodrivere – som igjen bruker 80 prosent, altså 64 millioner. Og slik fortsetter det, runde for runde.

Totalt blir effekten: $100 + 80 + 64 + 51{,}2 + \\ldots = 500$ millioner. Det er fem ganger den opprinnelige investeringen! Denne forsterkningseffekten kalles **multiplikatoreffekten**, og den enkle multiplikatoren er $m = \\frac{1}{1 - c_1}$. Med $c_1 = 0{,}8$ blir multiplikatoren $\\frac{1}{0{,}2} = 5$.

I virkeligheten er multiplikatoren mindre fordi vi har skatt og import. Med skattesats $t$ og importandel $z$ blir formelen: $m = \\frac{1}{1 - c_1(1 - t) + z}$. For Norge, med høy importandel og relativt høye skatter, er multiplikatoren trolig rundt 1,5 til 2 – altså mye lavere enn 5, men fortsatt vesentlig.`,
    },
    {
      id: 'samfokonomi-2-1-2-n-section3',
      type: 'text',
      content: `## Spareparadokset – når fornuft blir farlig

Keynes hadde enda en overraskelse: **spareparadokset**. Det høres ut som en selvmotsigelse, men det er faktisk logisk.

Tenk deg at alle i Norge plutselig blir engstelige for fremtiden og bestemmer seg for å spare mer. Hver enkelt person handler fornuftig. Men hva skjer samlet? Når alle sparer mer, faller konsumet. Når konsumet faller, selger bedrifter mindre. Når bedrifter selger mindre, kutter de produksjonen og sier opp folk. Når folk mister jobben, faller inntektene. Og med lavere inntekter kan total sparing faktisk *falle* – selv om alle prøver å spare mer.

Dette er et eksempel på det økonomer kaller en **sammensetningsfeilslutning**: det som er rasjonelt for den enkelte, er ikke nødvendigvis bra for fellesskapet. Keynes brukte dette som et av sine sterkeste argumenter for at staten må motvirke nedgangstider med økte utgifter – nettopp når folk selv trekker inn.

Men den keynesianske modellen har sine begrensninger. Den fungerer best når det er ledige ressurser i økonomien. Den overser tilbudssiden fullstendig, den tar ikke hensyn til rente- og valutakurseffekter, og i en åpen økonomi som Norge lekker mye etterspørsel ut gjennom import.`,
    },
    {
      id: 'samfokonomi-2-1-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-1-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på keynesiansk økonomi:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfokonomi-2-1-2-n-quiz1-q0',
            task: 'Hva er multiplikatoren når marginal konsumtilbøyelighet er 0,75 i en lukket økonomi uten skatt?',
            options: [
              { id: 'a', text: '3', isCorrect: false },
              { id: 'b', text: '4', isCorrect: true },
              { id: 'c', text: '0,75', isCorrect: false },
              { id: 'd', text: '1,33', isCorrect: false },
            ],
            solution: 'Multiplikatoren i en enkel modell er m = 1/(1 − c₁) = 1/(1 − 0,75) = 1/0,25 = 4. Hver krone i økte offentlige utgifter gir fire kroner økning i BNP.',
          },
          {
            id: 'samfokonomi-2-1-2-n-quiz1-q1',
            task: 'Ifølge Keynes, hva styrer produksjonen på kort sikt når det er ledig kapasitet?',
            options: [
              { id: 'a', text: 'Samlet tilbud', isCorrect: false },
              { id: 'b', text: 'Samlet etterspørsel', isCorrect: true },
              { id: 'c', text: 'Pengemengden alene', isCorrect: false },
              { id: 'd', text: 'Teknologisk utvikling', isCorrect: false },
            ],
            solution: 'I keynesiansk teori er det etterspørselen som bestemmer produksjonen på kort sikt, så lenge det er ledig kapasitet. Bedrifter produserer det markedet etterspør.',
          },
          {
            id: 'samfokonomi-2-1-2-n-quiz1-q2',
            task: 'Hva er spareparadokset?',
            options: [
              { id: 'a', text: 'At det er umulig å spare i en nedgangsperiode', isCorrect: false },
              { id: 'b', text: 'At bankene aldri tilbyr gode nok sparerenter', isCorrect: false },
              { id: 'c', text: 'At økt sparing på individnivå kan føre til lavere total sparing på samfunnsnivå', isCorrect: true },
              { id: 'd', text: 'At staten alltid sparer for mye', isCorrect: false },
            ],
            solution: 'Spareparadokset viser at når alle sparer mer, faller konsumet, som fører til lavere produksjon og inntekter. Dermed kan total sparing faktisk falle. Det er en sammensetningsfeilslutning.',
          },
          {
            id: 'samfokonomi-2-1-2-n-quiz1-q3',
            task: 'Hvorfor er multiplikatoren i virkeligheten lavere enn den enkle formelen tilsier?',
            options: [
              { id: 'a', text: 'Fordi folk aldri handler rasjonelt', isCorrect: false },
              { id: 'b', text: 'Fordi skatt og import lekker etterspørsel ut av kretsløpet', isCorrect: true },
              { id: 'c', text: 'Fordi staten alltid bruker for lite penger', isCorrect: false },
              { id: 'd', text: 'Fordi Keynes tok feil i beregningene', isCorrect: false },
            ],
            solution: 'I en åpen økonomi med skatt lekker deler av etterspørselen ut: skatt tar en del, og import betyr at noe av konsumet havner i utlandet. Formelen blir m = 1/(1 − c₁(1−t) + z), som gir en lavere multiplikator.',
          },
        ],
      },
    },
    {
      id: 'samfokonomi-2-1-2-n-summary',
      type: 'text',
      content: `## Oppsummering

John Maynard Keynes revolusjonerte makroøkonomien med tre kjernebudskap: etterspørselen styrer produksjonen på kort sikt, lønninger og priser er stive nedover, og staten må gripe inn aktivt. **Konsumfunksjonen** viser at vi bruker en fast andel av ekstra inntekt på konsum. **Multiplikatoreffekten** forklarer hvordan en økning i offentlige utgifter forsterkes gjennom økonomien. **Spareparadokset** viser at det som er rasjonelt for den enkelte, kan være skadelig for helheten. Modellen fungerer best i lavkonjunkturer med ledig kapasitet.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.3 NARRATIV: AD-AS-modellen
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_1_3_NARRATIV: TextbookChapter = {
  id: 'samfokonomi-2-1-3-narrativ',
  courseId: 'samfokonomi-2',
  chapterNumber: '1.3',
  title: 'AD-AS-modellen',
  subtitle: 'Narrativ versjon',
  description: 'Modellen som viser hvordan etterspørsel og tilbud bestemmer priser og produksjon på nasjonalt nivå – og hvorfor oljekriser skaper det verste av to verdener.',
  estimatedMinutes: 25,
  competenceGoals: [
    'bruke AD-AS-modellen til å analysere makroøkonomiske sammenhenger',
    'forklare hvordan tilbuds- og etterspørselssjokk påvirker produksjon og prisnivå',
  ],
  linkedChapterId: 'samfokonomi-2-1-3',
  content: [
    {
      id: 'samfokonomi-2-1-3-n-intro',
      type: 'text',
      content: `## Når priser møter produksjon

Den keynesianske modellen vi nettopp lærte om har en svakhet: den later som om prisnivået er konstant. I virkeligheten endrer prisene seg hele tiden, og det påvirker alt – fra folks kjøpekraft til sentralbankens rentebeslutninger.

**AD-AS-modellen** tar oss et steg videre. Den setter sammen to store krefter: samlet etterspørsel (AD – Aggregate Demand) og samlet tilbud (AS – Aggregate Supply). I et diagram med prisnivå på den vertikale aksen og reelt BNP på den horisontale, kan vi se hvordan disse kreftene bestemmer både hva landet produserer og hva prisnivået blir.

Tenk på det som et gigantisk tilbud-og-etterspørsel-diagram, men for hele økonomien i stedet for ett enkelt marked.`,
    },
    {
      id: 'samfokonomi-2-1-3-n-section1',
      type: 'text',
      content: `## AD-kurven – hvorfor faller etterspørselen når prisene stiger?

**AD-kurven** heller nedover, akkurat som en vanlig etterspørselskurve – men av helt andre grunner. Tre effekter forklarer hvorfor høyere prisnivå gir lavere samlet etterspørsel.

Den første er **formueseffekten**. Når prisnivået stiger, blir dine sparepenger verdt mindre i reell forstand. Du føler deg fattigere, og du reduserer konsumet. Den andre er **renteeffekten**. Høyere priser gjør at folk trenger mer penger til daglige transaksjoner, noe som driver renten opp. Høyere rente gjør det dyrere å låne, og investeringer faller. Den tredje er **valutakurseffekten**. Høyere rente gjør at utenlandske investorer vil kjøpe norske kroner (for å få den gode renten), noe som styrker kronen. En sterkere krone gjør norske varer dyrere for utlendinger, og eksporten faller.

AD-kurven kan **skifte** ut eller inn. Ekspansiv finanspolitikk – økte offentlige utgifter eller skattelettelser – skyver AD-kurven utover (til høyre). Kontraktiv politikk skyver den innover.`,
    },
    {
      id: 'samfokonomi-2-1-3-n-section2',
      type: 'text',
      content: `## AS-kurven – tilbudssiden har to ansikter

Tilbudssiden er mer kompleks, og vi må skille mellom kort og lang sikt.

**Kortsiktig AS (SRAS)** heller oppover. Når prisnivået stiger mens lønningene henger igjen (fordi de er fastsatt i tariffavtaler), øker profittmarginene, og bedriftene produserer mer. Denne stivheten i lønninger og priser er nøkkelen til at tilbudskurven stiger på kort sikt.

**Langsiktig AS (LRAS)** er derimot en vertikal linje. Den står som en stolpe ved det vi kaller potensiell produksjon – den mengden økonomien kan produsere når alle ressurser brukes normalt. På lang sikt tilpasses alle priser og lønninger fullt ut, og produksjonen bestemmes bare av realfaktorer: arbeidskraft, kapital og teknologi. Prisnivået spiller ingen rolle.

**Likevekten** oppstår der AD krysser AS. I krysningspunktet er både prisnivået og produksjonen bestemt. Kortsiktig likevekt kan ligge over eller under potensiell produksjon, men på lang sikt trekkes økonomien alltid tilbake mot LRAS gjennom lønns- og pristilpasninger.`,
    },
    {
      id: 'samfokonomi-2-1-3-n-section3',
      type: 'text',
      content: `## Stagflasjon – det verste av to verdener

I 1973 firedoblet OPEC-landene oljeprisen over natten. Olje var innsatsfaktor i nesten all produksjon, og konsekvensene ble dramatiske. Produksjonskostnadene eksploderte, SRAS-kurven skiftet oppover, og resultatet ble noe økonomene ikke hadde et godt svar på: **stagflasjon** – kombinasjonen av stagnasjon (lav vekst, høy ledighet) og inflasjon (stigende priser).

AD-AS-modellen viser dette problemet tydelig. Et negativt tilbudssjokk skyver SRAS oppover. I den nye likevekten er produksjonen lavere *og* prisnivået høyere. Myndighetene står overfor et dilemma: Skal de stimulere etterspørselen for å bekjempe ledigheten? Da forsterker de inflasjonen. Skal de stramme inn for å bekjempe inflasjonen? Da forverrer de resesjonen.

Et positivt tilbudssjokk – som et teknologisk gjennombrudd eller fallende energipriser – gir det motsatte: høyere produksjon *og* lavere priser. Det er det beste som kan skje for en økonomi.

Den store lærdommen fra AD-AS er at **etterspørselspolitikk** kan påvirke produksjonen på kort sikt, men bare prisnivået på lang sikt. Skal man øke potensiell produksjon permanent, kreves **tilbudspolitikk**: bedre utdanning, mer infrastruktur, økt innovasjon.`,
    },
    {
      id: 'samfokonomi-2-1-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-1-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på AD-AS-modellen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfokonomi-2-1-3-n-quiz1-q0',
            task: 'Hvorfor heller AD-kurven nedover?',
            options: [
              { id: 'a', text: 'Fordi tilbudet alltid øker når prisene stiger', isCorrect: false },
              { id: 'b', text: 'På grunn av formueseffekten, renteeffekten og valutakurseffekten', isCorrect: true },
              { id: 'c', text: 'Fordi høyere priser alltid betyr lavere kvalitet', isCorrect: false },
              { id: 'd', text: 'Fordi staten senker skattene når prisene stiger', isCorrect: false },
            ],
            solution: 'AD-kurven heller nedover på grunn av tre effekter: formueseffekten (høyere priser reduserer real formue), renteeffekten (høyere priser driver renten opp) og valutakurseffekten (høyere rente styrker valutaen og svekker eksporten).',
          },
          {
            id: 'samfokonomi-2-1-3-n-quiz1-q1',
            task: 'Hvorfor er LRAS-kurven vertikal?',
            options: [
              { id: 'a', text: 'Fordi tilbudet alltid er konstant', isCorrect: false },
              { id: 'b', text: 'Fordi alle priser og lønninger er fleksible på lang sikt, så produksjonen bestemmes bare av realfaktorer', isCorrect: true },
              { id: 'c', text: 'Fordi staten kontrollerer all produksjon', isCorrect: false },
              { id: 'd', text: 'Fordi det ikke er mulig å produsere mer', isCorrect: false },
            ],
            solution: 'På lang sikt tilpasses alle priser og lønninger fullt ut. Da bestemmes produksjonen kun av realfaktorer som arbeidskraft, kapital og teknologi – uavhengig av prisnivået. Derfor er LRAS vertikal.',
          },
          {
            id: 'samfokonomi-2-1-3-n-quiz1-q2',
            task: 'Hva kjennetegner stagflasjon?',
            options: [
              { id: 'a', text: 'Høy økonomisk vekst og lav inflasjon', isCorrect: false },
              { id: 'b', text: 'Lav inflasjon og lav arbeidsledighet', isCorrect: false },
              { id: 'c', text: 'Kombinasjonen av høy inflasjon og lav økonomisk vekst', isCorrect: true },
              { id: 'd', text: 'Deflasjon og høy økonomisk vekst', isCorrect: false },
            ],
            solution: 'Stagflasjon er kombinasjonen av stagnasjon (lav eller negativ vekst) og inflasjon (stigende priser). Det oppstår typisk ved negative tilbudssjokk, som oljeprissjokkene på 1970-tallet.',
          },
        ],
      },
    },
    {
      id: 'samfokonomi-2-1-3-n-summary',
      type: 'text',
      content: `## Oppsummering

AD-AS-modellen utvider den keynesianske analysen ved å inkludere prisnivået. **AD-kurven** heller nedover på grunn av formues-, rente- og valutakurseffekten. **Kortsiktig AS (SRAS)** stiger fordi lønninger er stive, mens **langsiktig AS (LRAS)** er vertikal ved potensiell produksjon. **Stagflasjon** oppstår ved negative tilbudssjokk og gir et vanskelig politikkdilemma. Etterspørselspolitikk virker på kort sikt, men bare tilbudspolitikk kan øke potensiell produksjon permanent.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.4 NARRATIV: IS-LM-modellen
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_1_4_NARRATIV: TextbookChapter = {
  id: 'samfokonomi-2-1-4-narrativ',
  courseId: 'samfokonomi-2',
  chapterNumber: '1.4',
  title: 'IS-LM-modellen',
  subtitle: 'Narrativ versjon',
  description: 'Historien om to markeder som danser sammen – varemarkedet og pengemarkedet – og hvorfor offentlige utgifter noen ganger fortrenger private investeringer.',
  estimatedMinutes: 25,
  competenceGoals: [
    'bruke IS-LM-modellen til å analysere virkningen av finans- og pengepolitikk',
    'forklare samspillet mellom vare- og pengemarkedet',
  ],
  linkedChapterId: 'samfokonomi-2-1-4',
  content: [
    {
      id: 'samfokonomi-2-1-4-n-intro',
      type: 'text',
      content: `## To markeder, ett svar

Hittil har vi sett på varemarkedet (den keynesianske modellen) og berørt pengemarkedet (i AD-AS). Men hva skjer når vi kobler dem sammen? Det er nettopp det **IS-LM-modellen** gjør.

Modellen ble utviklet av John Hicks i 1937 som en matematisk formalisering av Keynes' ideer. Den viser hvordan renten og produksjonen bestemmes *samtidig* av to markeder som er tett sammenvevd.

I et diagram med reelt BNP på den horisontale aksen og realrenten på den vertikale, møtes to kurver. **IS-kurven** representerer likevekt i varemarkedet – der investering er lik sparing. **LM-kurven** representerer likevekt i pengemarkedet – der etterspørselen etter penger er lik pengemengden. Der de krysser hverandre, er begge markedene i balanse samtidig.`,
    },
    {
      id: 'samfokonomi-2-1-4-n-section1',
      type: 'text',
      content: `## IS-kurven – varemarkedets stemme

**IS-kurven** forteller oss alle kombinasjoner av rente og produksjon som gir likevekt i varemarkedet. Den heller nedover, og grunnen er intuitiv: Når renten er høy, er det dyrt å låne penger. Bedrifter investerer mindre, og forbrukere kjøper færre boliger og biler. Lavere investeringer og konsum betyr lavere samlet etterspørsel, som gir lavere produksjon.

Hva kan flytte IS-kurven? Tenk på ekspansiv finanspolitikk – staten bruker mer penger. Nå er etterspørselen høyere ved ethvert rentenivå, så IS-kurven skifter utover (til høyre). Skattelettelser, økt eksport eller bedre forbrukertillit gjør det samme.

## LM-kurven – pengemarkedets stemme

**LM-kurven** viser kombinasjoner av rente og produksjon som gir likevekt i pengemarkedet. Den heller oppover: Høyere produksjon betyr flere transaksjoner, som øker etterspørselen etter penger. For å gjenopprette balanse må renten stige, slik at folk holder mindre penger for spekulasjonsformål.

Ekspansiv pengepolitikk – sentralbanken øker pengemengden eller senker styringsrenten – skifter LM-kurven nedover. Mer penger i omløp betyr at renten kan være lavere for ethvert produksjonsnivå.

I moderne sentralbankpraksis, der Norges Bank setter renten direkte, kan LM-kurven ses som en tilnærmet horisontal linje ved den fastsatte renten.`,
    },
    {
      id: 'samfokonomi-2-1-4-n-section2',
      type: 'text',
      content: `## Fortreningseffekten – når staten fortrenger det private

Her kommer et av IS-LM-modellens viktigste budskap: **fortreningseffekten** (crowding out).

Tenk deg at regjeringen vedtar en stor veiutbygging. IS-kurven skifter utover. Men nå skjer noe den enkle keynesianske modellen ikke fanget opp: Økt produksjon øker etterspørselen etter penger, som presser renten opp. Og høyere rente betyr at noen private investeringer – nye fabrikker, nye boliger – blir for dyre å gjennomføre. Offentlige utgifter *fortrenger* en del av de private investeringene.

Resultatet er at BNP-økningen blir *mindre* enn det den enkle multiplikatoren tilsier. IS-LM viser oss realiteten bak tallene.

## Likviditetsfellen – når pengepolitikk slutter å virke

Men hva skjer når renten allerede er nær null? Da havner vi i det Keynes kalte en **likviditetsfelle**. Folk er likegyldige mellom å holde penger og obligasjoner, fordi begge gir nær null avkastning. LM-kurven blir tilnærmet horisontal, og mer penger i omløp endrer ikke renten.

I en likviditetsfelle er pengepolitikk maktesløs, men finanspolitikk er ekstra effektiv – fordi det ikke er noen fortreningseffekt. Japan på 1990-tallet og mange vestlige land etter finanskrisen i 2008 opplevde nettopp dette.`,
    },
    {
      id: 'samfokonomi-2-1-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-1-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på IS-LM-modellen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfokonomi-2-1-4-n-quiz1-q0',
            task: 'Hvorfor heller IS-kurven nedover?',
            options: [
              { id: 'a', text: 'Fordi høyere rente reduserer investeringer og dermed produksjonen', isCorrect: true },
              { id: 'b', text: 'Fordi høyere produksjon øker etterspørsel etter penger', isCorrect: false },
              { id: 'c', text: 'Fordi sentralbanken senker renten når produksjonen stiger', isCorrect: false },
              { id: 'd', text: 'Fordi det er inflasjon når produksjonen stiger', isCorrect: false },
            ],
            solution: 'IS-kurven heller nedover fordi høyere rente gjør det dyrere å låne og investere, noe som reduserer samlet etterspørsel og dermed likevektsproduksjonen.',
          },
          {
            id: 'samfokonomi-2-1-4-n-quiz1-q1',
            task: 'Hva er fortreningseffekten (crowding out)?',
            options: [
              { id: 'a', text: 'At private bedrifter tar over statlige oppgaver', isCorrect: false },
              { id: 'b', text: 'At økte offentlige utgifter presser renten opp og fortrenger private investeringer', isCorrect: true },
              { id: 'c', text: 'At staten fortrenger arbeidstakere fra jobbmarkedet', isCorrect: false },
              { id: 'd', text: 'At utenlandske bedrifter tar markedsandeler fra norske', isCorrect: false },
            ],
            solution: 'Fortreningseffekten oppstår når økte offentlige utgifter øker produksjonen, som øker etterspørselen etter penger, som presser renten opp. Høyere rente gjør det dyrere for bedrifter å investere, og private investeringer fortrenges.',
          },
          {
            id: 'samfokonomi-2-1-4-n-quiz1-q2',
            task: 'I en likviditetsfelle, hva er sant om penge- og finanspolitikk?',
            options: [
              { id: 'a', text: 'Begge er like effektive', isCorrect: false },
              { id: 'b', text: 'Pengepolitikk er mest effektiv', isCorrect: false },
              { id: 'c', text: 'Pengepolitikk er ineffektiv, finanspolitikk er ekstra effektiv', isCorrect: true },
              { id: 'd', text: 'Ingen av dem virker', isCorrect: false },
            ],
            solution: 'I en likviditetsfelle er renten allerede nær null. Mer penger i omløp endrer ikke renten, så pengepolitikk er maktesløs. Finanspolitikk er derimot ekstra effektiv fordi det ikke finnes fortreningseffekt – renten stiger ikke.',
          },
        ],
      },
    },
    {
      id: 'samfokonomi-2-1-4-n-summary',
      type: 'text',
      content: `## Oppsummering

IS-LM-modellen kobler varemarkedet og pengemarkedet. **IS-kurven** viser varemarkedets likevekt og heller nedover fordi høyere rente reduserer investeringer. **LM-kurven** viser pengemarkedets likevekt og heller oppover fordi høyere produksjon øker pengeetterspørselen. **Fortreningseffekten** viser at offentlige utgifter kan fortrenge private investeringer gjennom renteøkninger. I en **likviditetsfelle** er renten nær null, pengepolitikk virker ikke, og finanspolitikk er ekstra kraftfull.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.5 NARRATIV: Økonomisk vekst
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_1_5_NARRATIV: TextbookChapter = {
  id: 'samfokonomi-2-1-5-narrativ',
  courseId: 'samfokonomi-2',
  chapterNumber: '1.5',
  title: 'Økonomisk vekst',
  subtitle: 'Narrativ versjon',
  description: 'Fra fattig til rik på en generasjon – historien om hva som driver langsiktig velstandsvekst, og hvorfor Sør-Korea gikk fra u-land til teknologigiant.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjøre rede for teorier om økonomisk vekst',
    'analysere faktorer som påvirker langsiktig vekst, inkludert humankapital og teknologi',
  ],
  linkedChapterId: 'samfokonomi-2-1-5',
  content: [
    {
      id: 'samfokonomi-2-1-5-n-intro',
      type: 'text',
      content: `## Det viktigste spørsmålet i økonomi

Hittil har vi snakket om kortsiktige svingninger – konjunkturer, renter, etterspørsel. Men nå skal vi stille det kanskje mest fundamentale spørsmålet i hele økonomifaget: **Hva bestemmer om et land er rikt eller fattig?**

Svaret handler om økonomisk vekst, og selv tilsynelatende små forskjeller i veksttakt har enorme konsekvenser over tid. Med 2 prosent årlig vekst dobles levestandarden på 35 år – i løpet av én generasjon. Med bare 1 prosent tar det 70 år. Denne rentes-rente-effekten forklarer hvorfor noen land i dag er tjue ganger rikere enn andre.

I 1960 hadde Sør-Korea omtrent samme BNP per innbygger som mange afrikanske land. I dag er det blant verdens rikeste land, med selskaper som Samsung og Hyundai som globale teknologiledere. Hva skjedde? Svaret finner vi i vekstteorien.`,
    },
    {
      id: 'samfokonomi-2-1-5-n-section1',
      type: 'text',
      content: `## Solow-modellen – maskiner alene er ikke nok

I 1956 lanserte Robert Solow en modell som skulle bli grunnsteinen i all vekstteori. **Solow-modellen** starter med en enkel produksjonsfunksjon: $Y = A \\cdot f(K, L)$, der Y er produksjon, A er teknologinivået, K er kapital (maskiner, bygninger) og L er arbeidskraft.

Modellens første store innsikt er **avtagende grensenytte av kapital**. Den første traktoren på en gård gjør en enorm forskjell. Den andre er nyttig, men ikke like revolusjonerende. Den tiende traktoren gjør knapt noe utslag. Mer kapital gir stadig mindre ekstra produksjon.

Dette fører til Solows andre innsikt: økonomien konvergerer mot en **steady state** – et stabilt langsiktig nivå der kapital per arbeider er konstant. I steady state er nye investeringer akkurat store nok til å erstatte det som slites ut og holde tritt med befolkningsveksten.

Hva om et land øker spareraten sin? Da investerer det mer, og kapital per arbeider stiger – *midlertidig*. Økonomien vokser raskere inntil den når en ny, høyere steady state. Men i den nye steady state er veksttakten tilbake på normalt nivå. Høyere sparing gir altså høyere *nivå* på BNP per innbygger, men ikke permanent høyere *veksttakt*.

Den tredje og mest berømte innsikten: **bare teknologisk fremgang driver varig vekst per innbygger**. Maskiner alene er ikke nok.`,
    },
    {
      id: 'samfokonomi-2-1-5-n-section2',
      type: 'text',
      content: `## Humankapital og endogen vekst

Men Solow-modellen etterlater et ubesvart spørsmål: Hvor kommer den teknologiske fremgangen fra? I Solows modell er den *eksogen* – den faller fra himmelen. Det er lite tilfredsstillende.

**Humankapital** – arbeidernes kunnskaper, ferdigheter og erfaring – gir en del av svaret. En utvidet versjon av produksjonsfunksjonen inkluderer humankapital: $Y = A \\cdot f(K, H, L)$. En ingeniør som kan bruke avansert utstyr effektivt er mer produktiv enn en ufaglært arbeider. En forsker som utvikler nye produkter skaper verdi langt utover sin egen lønn.

Paul Romer tok dette videre med **endogen vekstteori** i 1990. Hans kjerneidé var at kunnskap er fundamentalt forskjellig fra fysisk kapital. Den har *økende skalautbytte* – et nyttig datakurs kan brukes av tusenvis uten å miste verdi. Når en bedrift innoverer, spres kunnskapen og løfter hele økonomien. Bevisste investeringer i forskning og utvikling driver innovasjonen fremover.

Implikasjonen er revolusjonerende: Myndighetene kan faktisk påvirke den langsiktige vekstraten gjennom å investere i utdanning, støtte forskning, beskytte patenter, og holde økonomien åpen for internasjonal kunnskapsutveksling.

Sør-Koreas mirakel forklares nettopp av disse faktorene: Ekstremt høy sparerate (30–40 prosent), massiv investering i utdanning, overgang fra imitasjon til innovasjon, og gode institusjoner som beskyttet eiendomsrett og satset på eksportrettet industri.`,
    },
    {
      id: 'samfokonomi-2-1-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-1-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på økonomisk vekstteori:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfokonomi-2-1-5-n-quiz1-q0',
            task: 'I Solow-modellen, hva er den eneste kilden til varig vekst i BNP per innbygger?',
            options: [
              { id: 'a', text: 'Høyere sparerate', isCorrect: false },
              { id: 'b', text: 'Befolkningsvekst', isCorrect: false },
              { id: 'c', text: 'Mer fysisk kapital', isCorrect: false },
              { id: 'd', text: 'Teknologisk fremgang', isCorrect: true },
            ],
            solution: 'På grunn av avtagende grensenytte av kapital gir ikke mer kapital alene varig vekst. Bare teknologisk fremgang (A i produksjonsfunksjonen) kan drive varig vekst per innbygger i Solow-modellen.',
          },
          {
            id: 'samfokonomi-2-1-5-n-quiz1-q1',
            task: 'Hva skjer ifølge Solow-modellen når et land permanent øker spareraten?',
            options: [
              { id: 'a', text: 'Permanent høyere veksttakt', isCorrect: false },
              { id: 'b', text: 'Midlertidig raskere vekst, deretter permanent høyere BNP-nivå', isCorrect: true },
              { id: 'c', text: 'Ingen endring i BNP', isCorrect: false },
              { id: 'd', text: 'Permanent lavere konsum', isCorrect: false },
            ],
            solution: 'Høyere sparerate gir raskere kapitalakkumulasjon til økonomien når sin nye steady state. Da er BNP per innbygger permanent høyere, men veksttakten er tilbake på normalt nivå. Sparing påvirker nivået, ikke vekstraten.',
          },
          {
            id: 'samfokonomi-2-1-5-n-quiz1-q2',
            task: 'Hva er den viktigste forskjellen mellom Solow-modellen og endogen vekstteori?',
            options: [
              { id: 'a', text: 'Solow inkluderer kapital, endogen vekstteori gjør ikke det', isCorrect: false },
              { id: 'b', text: 'I Solow er teknologi eksogen, i endogen vekstteori er den et resultat av bevisste valg', isCorrect: true },
              { id: 'c', text: 'Endogen vekstteori gjelder bare for rike land', isCorrect: false },
              { id: 'd', text: 'De gir identiske politikkanbefalinger', isCorrect: false },
            ],
            solution: 'I Solow er teknologisk fremgang eksogen – den bare skjer. I endogen vekstteori er innovasjon et resultat av bevisste investeringer i forskning og humankapital, noe som betyr at myndighetene kan påvirke vekstraten.',
          },
          {
            id: 'samfokonomi-2-1-5-n-quiz1-q3',
            task: 'Hva menes med betinget konvergens i vekstteorien?',
            options: [
              { id: 'a', text: 'At alle land i verden automatisk blir like rike', isCorrect: false },
              { id: 'b', text: 'At konvergens bare skjer når land handler med hverandre', isCorrect: false },
              { id: 'c', text: 'At land med like fundamentale forhold konvergerer mot samme inntektsnivå', isCorrect: true },
              { id: 'd', text: 'At rike land alltid vokser raskere enn fattige', isCorrect: false },
            ],
            solution: 'Betinget konvergens betyr at land med like fundamentale forhold (sparerate, utdanningsnivå, institusjoner) konvergerer mot samme steady state. Fattigere land i denne gruppen vokser da raskere fordi de er lengre fra sin steady state.',
          },
        ],
      },
    },
    {
      id: 'samfokonomi-2-1-5-n-summary',
      type: 'text',
      content: `## Oppsummering

Økonomisk vekst er det mest fundamentale temaet i makroøkonomi. **Solow-modellen** viser at kapitalakkumulasjon har avtagende grensenytte, at økonomien konvergerer mot en steady state, og at bare teknologisk fremgang gir varig vekst. **Humankapital** – utdanning, kompetanse og helse – er en kritisk vekstfaktor. **Endogen vekstteori** forklarer teknologisk fremgang som resultat av bevisste investeringer i forskning og utvikling, noe som gir myndighetene mulighet til å påvirke den langsiktige vekstraten. Sør-Koreas vekstmirakel illustrerer hvordan sparerate, humankapital, teknologi og gode institusjoner sammen kan transformere et land på én generasjon.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samle alle kapitler
// ============================================================================

export const SAMFOKONOMI_2_NARRATIV_DEL1_CHAPTERS = [
  CHAPTER_SAMFOKONOMI_2_1_1_NARRATIV,
  CHAPTER_SAMFOKONOMI_2_1_2_NARRATIV,
  CHAPTER_SAMFOKONOMI_2_1_3_NARRATIV,
  CHAPTER_SAMFOKONOMI_2_1_4_NARRATIV,
  CHAPTER_SAMFOKONOMI_2_1_5_NARRATIV,
];
