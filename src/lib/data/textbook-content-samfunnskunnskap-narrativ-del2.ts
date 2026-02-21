/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Samfunnskunnskap - NARRATIV VERSJON DEL 2
 * Kapittel 2.1-2.7: Identitet, kultur og mangfold (Narrativ versjon)
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * aa lese og lytte til, med quiz-spoersmaal for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 2.1 NARRATIV: Hva er identitet?
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_2_1_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-2-1-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '2.1',
  title: 'Hva er identitet?',
  subtitle: 'Narrativ versjon',
  description: 'En reise inn i spoersmaalet alle stiller seg: Hvem er jeg egentlig? Vi utforsker hvordan identitet formes av arv, kultur, valg og den digitale verden vi lever i.',
  estimatedMinutes: 25,
  competenceGoals: [
    'reflektere over hvordan identitet utvikles og formes i samspill med andre',
    'droefte sammenhengen mellom individ og fellesskap',
  ],
  linkedChapterId: 'samfunnskunnskap-2-1',
  content: [
    {
      id: 'samfunnskunnskap-2-1-n-intro',
      type: 'text',
      content: `## Hvem er du -- egentlig?

Tenk deg at du sitter paa bussen paa vei hjem fra skolen. Du har hodetelefonene paa, musikken stroemmer, og du scroller gjennom telefonen. Plutselig stopper du opp ved en melding fra en gammel barndomsvenn du ikke har snakket med paa aarevismvis. Du smiler -- og i det oeyeblikket dukker et spoersmaal opp som mennesker har stilt seg i tusenvis av aar: *Hvem er jeg egentlig?*

Er du den stille eleven i klasserommet, eller den hoeylyttede komikeren blant vennene dine? Er du datteren eller soennen som foelger familiens tradisjoner, eller er du opproereren som vil gaate sin egen vei? Er du profilen din paa Instagram, eller noe helt annet naar skjermen er slukket?

**Identitet** handler om alt dette -- og mye mer. Det er summen av hvem du oppfatter deg selv som, og hvem andre oppfatter deg som. Det er de egenskapene, verdiene, erfaringene og tilhoerighetene som gjor deg til nettopp deg.

Og her er det fascinerende: identiteten din er ikke en fast ting. Den er i stadig bevegelse. Noen deler av deg har vaert der siden du ble foedt -- genene dine, familien din, kulturen du vokste opp i. Andre deler har du valgt selv -- interessene dine, verdiene du lever etter, menneskene du omgir deg med. Identitet er som en elv: den har et fast leie, men vannet er aldri helt det samme.

I Norge i dag formes identiteten vaar av et unikt samspill. Paa den ene siden har vi tradisjonelle norske verdier som likhet, fellesskap og naerhet til naturen. Paa den andre siden lever vi i et moderne, pluralistisk samfunn der du kan definere deg gjennom alt fra lokal dialekt og tilhoerighet til bygda, til internasjonale subkulturer paa nett. Denne friheten til aa forme sin egen identitet er noe mange tar for gitt, men den er faktisk ganske ny i historisk sammenheng -- og den kommer med baade muligheter og utfordringer.`,
    },
    {
      id: 'samfunnskunnskap-2-1-n-section1',
      type: 'text',
      content: `## Identitetens mange ansikter

La oss se naermere paa de ulike sidene ved identiteten din. For identitet er ikke bare eén ting -- det er som et puslespill med mange brikker som til sammen danner et bilde av hvem du er.

**Din individuelle identitet** er det som gjor deg unik. Det er personligheten din, drommene dine, evnene dine og verdiene du baerer med deg. Kanskje du er den kreative typen som alltid tegner i margen, eller den analytiske som elsker aa lose problemer. Denne siden av deg er noe du kjenner best selv -- den indre stemmen som sier "jeg er den jeg er".

Men du lever ikke i et vakuum. **Sosial identitet** handler om alle gruppene du tilhoerer -- og det er mange flere enn du kanskje tror. Du er kanskje norsk, kanskje fra Tromsoe, kanskje muslim eller kristen, kanskje jente eller gutt, kanskje elev paa en bestemt skole. Hver av disse tilhoerighetene gir deg en bit av identiteten din. Og de pavirker hvordan andre ser deg.

Saa har vi **kulturell identitet** -- den som formes av verdiene, tradisjonene og praksisene du har vokst opp med. Kanskje du feirer jul med ribbe og risgrynsgrot, eller kanskje familien din feirer Eid med stor fest. Kanskje du har vokst opp med at alle tar av seg skoene i gangen (noe som forbauser mange utlendinger i Norge!). Disse kulturelle vanene er saa dypt forankret at du kanskje ikke engang tenker over dem -- men de er en viktig del av hvem du er.

Det finnes ogsaa noe vi kaller **situasjonell identitet**. Har du lagt merke til at du oppfoerer deg litt annerledes hjemme enn paa skolen? At du snakker annerledes med besteforeldrene dine enn med vennene dine? Det er situasjonell identitet i praksis. Du er fortsatt deg, men du tilpasser deg konteksten -- litt som en kameleont som skifter farge, men fortsatt er den samme kameleonen.

Og til slutt, i vaare dager, har vi faatt en helt ny dimensjon: **digital identitet**. Hvordan fremstiller du deg selv paa nett? Bildene du legger ut, meningene du deler, profilene du lager -- alt dette er en del av din digitale identitet. For mange unge er den digitale identiteten like viktig som den "virkelige" -- og grensen mellom de to blir stadig mer utydelig.`,
    },
    {
      id: 'samfunnskunnskap-2-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa identitetsbegrepet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-2-1-n-quiz1-q0',
            task: 'Hva mener vi med situasjonell identitet?',
            options: [
              { id: 'a', text: 'At identiteten vaar er helt fast og uforanderlig', isCorrect: false },
              { id: 'b', text: 'At vi oppfoerer oss og fremstaar litt ulikt i ulike situasjoner', isCorrect: true },
              { id: 'c', text: 'At vi bare har identitet naar vi er sammen med andre', isCorrect: false },
              { id: 'd', text: 'At identiteten vaar bestemmes av situasjonen vi ble foedt inn i', isCorrect: false },
            ],
            solution: 'Situasjonell identitet betyr at identiteten vaar kan variere i ulike kontekster. Du er kanskje annerledes hjemme enn paa skolen, eller i sosiale medier sammenlignet med det virkelige livet. Du er fortsatt deg, men du tilpasser deg omgivelsene.',
          },
          {
            id: 'samfunnskunnskap-2-1-n-quiz1-q1',
            task: 'Hva er forskjellen mellom individuell og sosial identitet?',
            options: [
              { id: 'a', text: 'Individuell identitet handler om unike egenskaper, sosial identitet om gruppetilhoerighet', isCorrect: true },
              { id: 'b', text: 'Individuell identitet er medfodt, sosial identitet er valgt', isCorrect: false },
              { id: 'c', text: 'Individuell identitet har man alene, sosial identitet har man bare med venner', isCorrect: false },
              { id: 'd', text: 'Det er ingen forskjell -- de betyr det samme', isCorrect: false },
            ],
            solution: 'Individuell identitet er de unike egenskapene som gjor deg til deg -- personlighet, verdier, droemmer. Sosial identitet handler om gruppetilhoerighet -- nasjonalitet, etnisitet, religion, kjoenn. Begge henger sammen og pavirker hverandre gjensidig.',
          },
          {
            id: 'samfunnskunnskap-2-1-n-quiz1-q2',
            task: 'Hvilke faktorer former identiteten vaar?',
            options: [
              { id: 'a', text: 'Bare genetikk og arv', isCorrect: false },
              { id: 'b', text: 'Bare egne valg og handlinger', isCorrect: false },
              { id: 'c', text: 'En kombinasjon av arv, familie, kultur, sosiale grupper, erfaringer og egne valg', isCorrect: true },
              { id: 'd', text: 'Utelukkende sosiale medier og venner', isCorrect: false },
            ],
            solution: 'Identitet formes av mange faktorer: arv og genetikk, familie og oppvekst, kultur og tradisjon, sosiale grupper, erfaringer og opplevelser, samt egne valg og handlinger. Identitet har baade stabile og foranderlige elementer.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-2-1-n-section2',
      type: 'text',
      content: `## Hvordan utvikles identitet? Teorier og perspektiver

Gjennom historien har tenkere proevd aa forstaa hvordan vi blir den vi er. La oss se paa noen viktige perspektiver.

I tradisjonelle samfunn var identitet i stor grad noe du **arvet**. Du ble foedt inn i en familie, en kultur, et yrke -- og det var det. Soennen til smeden ble smed. Datteren til bonden ble bondens kone. Tilhoerigheten og verdiene dine ble gitt av forrige generasjon, og dette ga stabilitet og kontinuitet. Du visste hvem du var, for det var allerede bestemt.

I moderne samfunn har vi faatt et helt annet syn: identitet er noe vi aktivt **skaper** og **velger**. I et individualistisk samfunn som Norge staar du friere enn noen gang til aa definere deg selv. Du kan velge utdanning, karriere, livsstil, trosretning og til og med i stor grad hvem du vil vaere. Denne friheten er fantastisk -- men den kan ogsaa vaere overveldende.

Den amerikanske sosiologen **George Herbert Mead** utviklet det vi kaller **speilingsteorien**. Tenk paa den: du ser deg selv i speilet, men det er ikke et vanlig speil -- det er andres oyne. Ifoolge Mead utvikler vi identitet ved aa speile oss i andres reaksjoner. Naar klassekameraten din ler av vitsen din, laerer du at du er morsom. Naar laereren roser oppgaven din, begynner du aa se deg selv som flink. Vi ser oss selv gjennom andres blikk, og det former hvem vi tror vi er.

Psykologen **Erik Erikson** mente at identitet utvikles gjennom **kriser** i ulike livsfaser. Ikke dramatiske kriser noodvendigvis, men perioder der vi maa ta valg og finne ut hvem vi er. Ungdomstiden er saerlig viktig -- det er da du for alvor begynner aa sporre "hvem er jeg?", uavhengig av det foreldrene dine har fortalt deg. Erikson kalte dette en identitetskrise, og han mente det var helt normalt og noodvendig.

Det de fleste er enige om i dag, er at identitet er en blanding av begge perspektiver: vi arver noe -- familie, kultur, spraak -- og vi velger noe -- verdier, interesser, venner. Begge deler former hvem vi er.`,
    },
    {
      id: 'samfunnskunnskap-2-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa teorier om identitet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-2-1-n-quiz2-q0',
            task: 'Hva gaar G.H. Meads speilingsteori ut paa?',
            options: [
              { id: 'a', text: 'At vi former identitet ved aa se oss i speilet hver morgen', isCorrect: false },
              { id: 'b', text: 'At vi utvikler identitet ved aa speile oss i andres reaksjoner paa oss', isCorrect: true },
              { id: 'c', text: 'At foreldrene vare bestemmer identiteten vaar fullstendig', isCorrect: false },
              { id: 'd', text: 'At identitet er medfodt og ikke kan endres', isCorrect: false },
            ],
            solution: 'Meads speilingsteori sier at vi utvikler identitet ved aa speile oss i andres reaksjoner. Vi ser oss selv gjennom andres oyne -- naar noen reagerer positivt paa det vi gjor, bygger det opp selvbildet vaart, og omvendt.',
          },
          {
            id: 'samfunnskunnskap-2-1-n-quiz2-q1',
            task: 'Hva mente Erik Erikson med identitetskrise?',
            options: [
              { id: 'a', text: 'En psykisk sykdom som rammer unge', isCorrect: false },
              { id: 'b', text: 'At man mister identiteten sin helt', isCorrect: false },
              { id: 'c', text: 'Perioder i livet der vi soeker aa finne ut hvem vi er, saerlig i ungdomsaarene', isCorrect: true },
              { id: 'd', text: 'At man kopierer andres identitet', isCorrect: false },
            ],
            solution: 'Erikson mente at identitet utvikles gjennom kriser i ulike livsfaser -- perioder der vi maa ta valg og finne ut hvem vi er. Ungdomstiden er saerlig viktig for identitetsutviklingen. Han saa paa dette som en normal og noedvendig del av utviklingen.',
          },
          {
            id: 'samfunnskunnskap-2-1-n-quiz2-q2',
            task: 'Hva er den viktigste forskjellen mellom det tradisjonelle og det moderne synet paa identitet?',
            options: [
              { id: 'a', text: 'Tradisjonelt syn: identitet er arvet og gitt. Moderne syn: identitet skapes og velges', isCorrect: true },
              { id: 'b', text: 'Tradisjonelt syn: identitet velges fritt. Moderne syn: identitet er bestemt av genetikk', isCorrect: false },
              { id: 'c', text: 'Det er ingen forskjell mellom de to synene', isCorrect: false },
              { id: 'd', text: 'Tradisjonelt syn fokuserer paa digital identitet, moderne syn paa kulturell', isCorrect: false },
            ],
            solution: 'I tradisjonelle samfunn ble identitet i stor grad arvet fra familie og kultur -- du fikk din plass i verden. I moderne samfunn ser vi identitet som noe vi aktivt skaper og velger. De fleste mennesker i dag har elementer av begge -- baade arvet tilhoerighet og personlige valg.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-2-1-n-section3',
      type: 'text',
      content: `## Identitet i det moderne Norge: Mellom tradisjon og frihet

La oss se paa et konkret eksempel. Tenk paa Amina, som er foedt i Norge av foreldre fra Somalia. Amina er norsk statsborger, snakker flytende norsk med bergensaksent, elsker ski og brunost -- men hun har ogsaa en somalisk kulturbakgrunn fra familien. Hun feirer baade 17. mai og Eid.

Aminas situasjon er typisk for mange unge i dagens Norge. Hun navigerer mellom ulike kulturelle forventninger: familien oensker at hun skal bevare tradisjoner, samfunnet rundt henne forventer at hun tilpasser seg. Noen dager foeler hun seg "for norsk" for familien og "for somalisk" for vennene. Andre dager opplever hun det som en rikdom aa kjenne flere kulturer.

Det finnes ikke ett "riktig" svar paa hvordan man skal forholde seg til sammensatt bakgrunn. Noen velger aa identifisere seg primaert med een kultur, andre kombinerer elementer fra begge, og begge veier er helt legitime.

Men det er ikke bare personer med innvandrerbakgrunn som opplever sammensatt identitet. Tenk paa ungdommen fra en liten bygd i Nord-Norge som flytter til Oslo for aa studere. Plutselig er dialekten hans noe folk kommenterer. Verdiene han vokste opp med -- dugnad, natur, naerhet -- mooter en urban virkelighet der individualisme og karriere staar sterkt. Ogsaa han maa navigere mellom ulike identiteter.

Sosiale medier har tilfoert enda en dimensjon. Mange unge opplever et press om aa fremstille et perfekt bilde av seg selv paa nett. Profilene vaare er kuraterte versjoner av oss selv -- vi velger de beste bildene, de kuleste aktivitetene, de smarteste meningene. Men hvem er du naar du legger ned telefonen? Gapet mellom den digitale fasaden og det autentiske selvet kan skape forvirring og usikkerhet.

Paa den andre siden gir sosiale medier ogsaa muligheter: du kan finne likesinnede, utforske ulike sider av deg selv, bygge nettverk og uttrykke deg kreativt. Det er et tveegget sverd.

I et samfunn preget av individualisering staar nordmenn friere enn noen gang til aa forme sin egen identitet. Men denne friheten kan ogsaa oppleves som et press -- kravet om aa "finne seg selv" og skape sin egen unike identitet kan vaere krevende, saerlig i ungdomsaarene. Noen ganger er det lettere naar noen forteller deg hvem du er, enn naar du maa finne det ut selv.`,
    },
    {
      id: 'samfunnskunnskap-2-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv paa identitet i det moderne Norge:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-2-1-n-quiz3-q0',
            task: 'Hvilke baade positive og negative aspekter kan sosiale medier ha for identitetsutviklingen?',
            options: [
              { id: 'a', text: 'Bare positive: man kan utforske seg selv fritt', isCorrect: false },
              { id: 'b', text: 'Bare negative: det skaper usikkerhet', isCorrect: false },
              { id: 'c', text: 'Positivt: finne likesinnede og utforske seg selv. Negativt: press om aa fremstille et perfekt bilde', isCorrect: true },
              { id: 'd', text: 'Sosiale medier pavirker ikke identitetsutviklingen', isCorrect: false },
            ],
            solution: 'Sosiale medier gir baade muligheter og utfordringer. Positivt: Du kan finne likesinnede, utforske ulike sider av deg selv og bygge nettverk. Negativt: Press om aa fremstille et perfekt bilde, sammenligning med andre, og usikkerhet om hvem man egentlig er kontra den digitale fasaden.',
          },
          {
            id: 'samfunnskunnskap-2-1-n-quiz3-q1',
            task: 'Kan det aa ha tilhoerighet til flere kulturer vaere baade positivt og negativt?',
            options: [
              { id: 'a', text: 'Nei, det er alltid berikende', isCorrect: false },
              { id: 'b', text: 'Nei, det er alltid problematisk', isCorrect: false },
              { id: 'c', text: 'Ja -- det gir tilgang til flere perspektiver, men kan ogsaa vaere krevende aa balansere', isCorrect: true },
              { id: 'd', text: 'Det avhenger utelukkende av hvilke kulturer det er snakk om', isCorrect: false },
            ],
            solution: 'Tilhoerighet til flere kulturer kan vaere positivt: tilgang til flere perspektiver, spraakkompetanse, forstaaelse for ulike kulturer. Men det kan ogsaa vaere krevende: balansere ulike forventninger, foele at man ikke passer helt inn noe sted. Opplevelsen varierer fra person til person.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-2-1-n-summary',
      type: 'text',
      content: `## Oppsummering

Vi har vaert paa en reise inn i identitetens mange dimensjoner. Her er det viktigste du tar med deg:

- **Identitetsbegrepet**: Identitet handler om hvem vi er og formes av arv, familie, kultur, sosiale grupper og egne valg. Det er baade stabilt og foranderlig.
- **Dimensjoner av identitet**: Vi har individuell identitet (det unike ved deg), sosial identitet (gruppetilhoerighet), kulturell identitet (verdier og tradisjoner), situasjonell identitet (varierer med kontekst) og digital identitet (hvordan vi fremstaar paa nett).
- **Teoretiske perspektiver**: G.H. Meads speilingsteori forteller oss at vi ser oss selv gjennom andres oyne. Eriksons identitetskriser minner oss om at det aa soeke etter hvem man er, er en normal del av livet.
- **Sammensatt identitet**: I et moderne, flerkulturelt Norge kan man ha tilhoerighet til flere kulturer og identiteter samtidig -- og den friheten vi har til aa forme oss selv er baade en gave og en utfordring.

Det viktigste aa huske er kanskje dette: identitet er ikke noe du *finner* en gang for alle. Det er noe du *skaper*, dag for dag, gjennom valgene du tar, menneskene du omgir deg med, og maaten du velger aa moete verden paa.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.2 NARRATIV: Kultur og kulturmoeter
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_2_2_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-2-2-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '2.2',
  title: 'Kultur og kulturmøter',
  subtitle: 'Narrativ versjon',
  description: 'En utforskning av hva kultur egentlig er, hvordan norsk kultur har endret seg, og hva som skjer naar ulike kulturer moetes -- paa godt og vondt.',
  estimatedMinutes: 25,
  competenceGoals: [
    'reflektere over hva kultur er og hvordan den pavirker oss',
    'droefte ulike syn paa kulturmoeter og kulturelt mangfold',
  ],
  linkedChapterId: 'samfunnskunnskap-2-2',
  content: [
    {
      id: 'samfunnskunnskap-2-2-n-intro',
      type: 'text',
      content: `## Den usynlige kraften som former oss

Forestill deg at du inviterer en utvekslingsstudent fra Japan hjem til middag. Du dekker bordet, setter frem maten og setter deg ned. Gjesten din boyer seg hoeflig, men ser forvirret ut. Ingen har sagt noen boeynn foer maten. Ingen har ventet paa at den eldste skal begynne aa spise foerst. Og hvorfor staar skoene inne i gangen?

Det du nettopp har opplevd er et **kulturmoete** -- et oeyeblikk der to ulike sett med selvfoelgeligheter kolliderer. For det er nettopp det kultur er: selvfoelgeligheter. Det er alt det vi gjor, tenker og tror uten aa tenke over det. Det er saa dypt forankret i oss at vi ikke engang legger merke til det -- foer vi moeter noen som gjor ting annerledes.

**Kultur** er et enormt begrep som favner alt vi mennesker skaper, tenker og gjor i fellesskap. Det er verdiene vaare, normene vaare, tradisjonene vaare og praksisene vaare. Det er spraaket vi snakker, maten vi spiser, hoetydene vi feirer, maaten vi hilser paa, kleskodene vaare, humoren vaar -- ja, til og med maaten vi staar i koe paa. Alt dette er kultur.

Og her er det viktige: kultur er noe vi **laerer**. Ingen blir foedt med en preferanse for lutefisk eller sushi. Vi laerer det gjennom sosialisering -- gjennom familien, skolen, vennene, mediene og samfunnet rundt oss. Kulturer er dessuten i endring over tid, selv om noen kulturtrekk er mer bestandige enn andre.`,
    },
    {
      id: 'samfunnskunnskap-2-2-n-section1',
      type: 'text',
      content: `## Norsk kultur: Fra lutefisk til sushi

La oss ta et naermere blikk paa den norske kulturen. Hva er egentlig "typisk norsk"?

Spor du besteforeldrene dine, faar du kanskje hoere om dugnad, respekt for naturen, likhetsidealet, janteloven, noeysomhet og fellesskap. Og jo -- disse verdiene er fortsatt viktige for mange nordmenn. Vi er et folk som liker aa gaa paa tur, vi stiller opp for naboen, og vi har en dyp skepsis mot folk som skryter for mye av seg selv.

Men Norge har aldri vaert saa kulturelt homogent som mange tror. Det har alltid vaert regionale forskjeller -- nordlendingen og soerlendingen har hatt ulik kultur i hundrevis av aar. Vi har hatt minoritetskulturer som den samiske i tusenvis av aar. Og norsk kultur har alltid vaert i endring.

Tenk paa hvordan norsk matkultur har forandret seg. For femti aar siden var pizza noe eksotisk. I dag er taco Norges mest populaere fredagsmiddag (et fenomen som forbauser resten av verden!). Vi spiser sushi, kebab, pad thai og curry like naturlig som vi spiser fiskekaker. Denne kulturelle utvekslingen har gjort matopplevelsen vaar rikere.

Det samme gjelder andre omraader. Norsk populaerkultur er i dag en blanding av lokalt og globalt. Unge nordmenn kan vaere like engasjert i K-pop som i norsk folkemusikk, like opptatt av NBA som av Eliteserien, og like kjent med Marvel-universet som med Asbjornsen og Moe.

I moderne tid har innvandring gjort Norge til et mer flerkulturelt samfunn. Over 200 spraak snakkes i Oslo alene. Dette mangfoldet er synlig overalt -- i matbutikken, paa skolen, paa arbeidsplassen. Noen opplever dette som berikende. Andre er bekymret for at tradisjonelle verdier utfordres. Hvordan Norge best skal haandtere kulturelt mangfold er et tema for pagaaende debatt der folk har ulike synspunkter.`,
    },
    {
      id: 'samfunnskunnskap-2-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa kulturbegrepet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-2-2-n-quiz1-q0',
            task: 'Hva omfatter begrepet kultur?',
            options: [
              { id: 'a', text: 'Bare kunst, musikk og litteratur', isCorrect: false },
              { id: 'b', text: 'Verdier, normer, tradisjoner, spraak, mat, skikker og maater aa organisere samfunnet paa', isCorrect: true },
              { id: 'c', text: 'Bare de tingene vi arver genetisk', isCorrect: false },
              { id: 'd', text: 'Utelukkende religiose praksiser', isCorrect: false },
            ],
            solution: 'Kultur er et vidt begrep som omfatter alt vi mennesker skaper, tenker og gjor i fellesskap: spraak, religion, kunst, mat, kleskoder, skikker, tradisjoner, normer, verdier og maater aa organisere samfunnet paa.',
          },
          {
            id: 'samfunnskunnskap-2-2-n-quiz1-q1',
            task: 'Hvordan tilegner vi oss kultur?',
            options: [
              { id: 'a', text: 'Vi er foedt med den -- kultur er genetisk', isCorrect: false },
              { id: 'b', text: 'Vi laerer den gjennom sosialisering -- familie, skole, venner og medier', isCorrect: true },
              { id: 'c', text: 'Vi velger fritt en kultur naar vi fyller 18', isCorrect: false },
              { id: 'd', text: 'Staten bestemmer hvilken kultur vi skal ha', isCorrect: false },
            ],
            solution: 'Kultur er noe vi laerer gjennom sosialisering. Fra vi er smaa pavirkes vi av familien, skolen, vennene, mediene og samfunnet rundt oss. Kulturer er i endring over tid, men noen trekk er mer bestandige enn andre.',
          },
          {
            id: 'samfunnskunnskap-2-2-n-quiz1-q2',
            task: 'Hva kjennetegner norsk kultur?',
            options: [
              { id: 'a', text: 'Den har alltid vaert uforanderlig og ensartet', isCorrect: false },
              { id: 'b', text: 'Den har vaert preget av likhet, natur og fellesskap, men har alltid hatt variasjon og er i stadig endring', isCorrect: true },
              { id: 'c', text: 'Den ble skapt paa 1800-tallet og har ikke endret seg siden', isCorrect: false },
              { id: 'd', text: 'Den er identisk med svensk og dansk kultur', isCorrect: false },
            ],
            solution: 'Norsk kultur er formet av geografiske forhold, historiske hendelser og verdier som likhet, fellesskap og natur. Men den har aldri vaert helt homogen -- regionale forskjeller, minoritetskulturer og stadig pavirkning utenfra har alltid vaert en del av bildet.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-2-2-n-section2',
      type: 'text',
      content: `## Naar kulturer moetes: Tre maater aa se verden paa

Naar du moeter noen fra en helt annen kultur, hvordan reagerer du? Her finnes det ulike perspektiver, og det er viktig aa kjenne til dem.

Det foerste perspektivet kalles **etnosentrisme**. Det betyr at du bruker din egen kultur som maalestokk for aa vurdere andre. Tenk paa det som aa se verden gjennom egne kulturelle briller -- og aa anta at dine briller viser det "riktige" bildet. Naar du tenker "det er jo rart at de gjor det slik", er det etnosentrisme i aksjon. Det er faktisk ganske naturlig -- vi har alle egen kultur som utgangspunkt. Men det kan bli problematisk hvis det foerer til at man ser egen kultur som overlegen og andre som mindreverdige.

Det andre perspektivet er **kulturrelativisme**. Her proever du aa forstaa andre kulturer paa deres egne premisser. I stedet for aa si "det er rart", spoer du "hvorfor gjor de det slik?". Du proever aa se verden gjennom andres briller. Dette er viktig for aa forstaa og respektere kulturelle forskjeller. Men ogsaa dette perspektivet har sine begrensninger: hvis du tar det til det ytterste, kan det bli vanskelig aa kritisere praksiser som mange ville mene er skadelige -- som for eksempel tvangsgiftemaal eller barnearbeid.

Det tredje perspektivet er **universalisme** -- troen paa at noen verdier gjelder for alle mennesker, uavhengig av kultur. Menneskerettigheter er det fremste eksempelet. Vi sier at alle mennesker har rett til liv, frihet og verdighet -- uansett hvilken kultur de tilhoerer.

De fleste vil mene at det trengs en **balansegang**: vi bor forstaa andre kulturer og respektere forskjeller, men noen verdier -- som menneskeverd og grunnleggende rettigheter -- er universelle. Noeeyaktig hvor grensen gaar, er gjenstand for debatt, og det er helt legitimt aa ha ulike syn paa dette.`,
    },
    {
      id: 'samfunnskunnskap-2-2-n-section3',
      type: 'text',
      content: `## Modeller for kulturmoeter: Hva gjor vi med mangfoldet?

Naar ulike kulturer skal leve sammen i ett samfunn, finnes det ulike modeller for hvordan det kan organiseres. La oss se paa de viktigste.

**Assimilering** betyr at minoriteter tilpasser seg majoritetskulturen fullt ut. De gir opp sin egen kultur og tar over flertallets skikker, spraak og verdier. Noen mener dette er noedvendig for aa skape samhold i et samfunn. Andre mener det er undertrykkende -- at det innebarer aa tvinne mennesker til aa gi opp en viktig del av seg selv.

**Segregering** betyr at kulturgrupper lever atskilt fra hverandre -- i egne boligomraader, med egne skoler, egne sosiale nettverk. Dette kan skje frivillig (at folk soeker til sine egne) eller patvunget (som apartheid i Sor-Afrika). De fleste ser segregering som problematisk, fordi det hindrer kontakt og forstaaelse mellom grupper.

**Integrering** er kanskje den vanligste modellen i Norge i dag. Her deltar minoriteter i samfunnet -- gaar paa skole, jobber, foelger lovene -- men beholder deler av egen kultur. Du kan vaere fullt integrert i det norske samfunnet og samtidig feire dine egne kulturelle hoytider, snakke ditt eget spraak hjemme og holde fast ved dine verdier. Det er ulike syn paa hvor mye tilpasning som kreves for at integrering skal vaere vellykket.

**Multikulturalisme** gaar et skritt videre og vektlegger at ulike kulturer skal eksistere side om side med like rettigheter. Samfunnet skal aktivt stotte kulturelt mangfold, ikke bare tolerere det. Kritikere mener dette kan skape parallellsamfunn der grupper lever ved siden av hverandre uten reell kontakt.

Hvilken modell som er best, er en paagende politisk debatt. Tenk for eksempel paa en skole med elever fra mange kulturbakgrunner. Bor skolen fokusere paa det felles -- felles verdier, felles normer, norsk kultur? Eller bor den aktivt feire mangfoldet -- markere ulike hoetider, dele kunnskap om ulike bakgrunner? De fleste soeker en middelvei, men noeeyaktig hvor den middelveien ligger, er det uenighet om.`,
    },
    {
      id: 'samfunnskunnskap-2-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa kulturperspektiver og kulturmoetemodeller:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-2-2-n-quiz2-q0',
            task: 'Hva er etnosentrisme?',
            options: [
              { id: 'a', text: 'Aa forstaa andre kulturer paa deres egne premisser', isCorrect: false },
              { id: 'b', text: 'Aa vurdere andre kulturer ut fra sin egen kultur som maalestokk', isCorrect: true },
              { id: 'c', text: 'Aa mene at alle kulturer er like gode i alle henseender', isCorrect: false },
              { id: 'd', text: 'Aa studere ulike etniske grupper vitenskapelig', isCorrect: false },
            ],
            solution: 'Etnosentrisme betyr aa vurdere andre kulturer ut fra sin egen kultur som maalestokk. Det kan foere til at man ser egen kultur som overlegen. Det er naturlig aa ha egen kultur som utgangspunkt, men bevisst etnosentrisme kan hindre forstaaelse.',
          },
          {
            id: 'samfunnskunnskap-2-2-n-quiz2-q1',
            task: 'Hva er forskjellen mellom assimilering og integrering?',
            options: [
              { id: 'a', text: 'Assimilering: full tilpasning til majoritetskulturen. Integrering: delta i samfunnet, men beholde deler av egen kultur', isCorrect: true },
              { id: 'b', text: 'De betyr det samme, bare ulike ord', isCorrect: false },
              { id: 'c', text: 'Assimilering er frivillig, integrering er patvunget', isCorrect: false },
              { id: 'd', text: 'Assimilering gjelder spraak, integrering gjelder religion', isCorrect: false },
            ],
            solution: 'Ved assimilering gir minoriteter opp sin egen kultur og tilpasser seg majoritetskulturen fullstendig. Ved integrering deltar minoriteter i samfunnet (jobb, skole, lover), men beholder deler av egen kultur. Integrering er den vanligste modellen i Norge i dag.',
          },
          {
            id: 'samfunnskunnskap-2-2-n-quiz2-q2',
            task: 'Hva er den stoerste kritikken mot multikulturalisme?',
            options: [
              { id: 'a', text: 'At den er for dyrt for staten', isCorrect: false },
              { id: 'b', text: 'At den kan skape parallellsamfunn der grupper lever ved siden av hverandre uten kontakt', isCorrect: true },
              { id: 'c', text: 'At den forbyr alle kulturelle uttrykk', isCorrect: false },
              { id: 'd', text: 'At den bare fungerer i smaa land', isCorrect: false },
            ],
            solution: 'Multikulturalisme vektlegger at ulike kulturer skal eksistere side om side med like rettigheter. Kritikere mener dette kan foere til parallellsamfunn der grupper lever atskilt uten reell kontakt og fellesskap. Tilhengere mener det fremmer respekt og mangfold.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-2-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Kultur er den usynlige kraften som former hvem vi er og hvordan vi lever. Her er de viktigste poengene fra dette kapittelet:

- **Kulturbegrepet**: Kultur omfatter verdier, normer, tradisjoner og praksiser som kjennetegner en gruppe mennesker. Det er noe vi laerer gjennom sosialisering, og det er i stadig endring.
- **Kulturelle perspektiver**: Etnosentrisme (vurdere andre fra eget staastedet), kulturrelativisme (forstaa andre paa egne premisser) og universalisme (noen verdier gjelder for alle) gir ulike utgangspunkt for aa forstaa kulturforskjeller.
- **Modeller for kulturmoeter**: Assimilering (full tilpasning), segregering (atskilt), integrering (delta men beholde noe eget) og multikulturalisme (sidestilte kulturer) representerer ulike tilnaerminger.
- **Norsk kultur i endring**: Norge har alltid vaert i kulturell utvikling, og i dag er vi et mer flerkulturelt samfunn enn noen gang. Hvordan vi best haandterer dette mangfoldet er en pagaaende og viktig debatt.

Kultur er ikke noe statisk som kan legges i en glasmonter. Det er noe levende, pustende og foranderlig -- og de kulturmoetene som skjer i Norge hver eneste dag er med paa aa forme hvem vi er som samfunn.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.3 NARRATIV: Etnisitet og nasjonalitet
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_2_3_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-2-3-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '2.3',
  title: 'Etnisitet og nasjonalitet',
  subtitle: 'Narrativ versjon',
  description: 'En utforskning av hva som skaper tilhoerighet mellom mennesker -- fra etniske roetter til nasjonalt fellesskap -- og det store spoersmaalet: hva vil det egentlig si aa vaere norsk?',
  estimatedMinutes: 25,
  competenceGoals: [
    'droefte hva som menes med etnisitet og nasjonalitet',
    'reflektere over ulike syn paa nasjonal identitet og tilhoerighet',
  ],
  linkedChapterId: 'samfunnskunnskap-2-3',
  content: [
    {
      id: 'samfunnskunnskap-2-3-n-intro',
      type: 'text',
      content: `## Hva binder oss sammen?

Tenk deg 17. mai. Tusenvis av mennesker gaar i tog gjennom Oslos gater -- barn med flagg, bunader i alle farger, musikkorps som spiller. Folk roper "hurra" og smiler til hverandre. Paa denne ene dagen foeler de seg alle som del av det samme fellesskapet, uansett bakgrunn.

Men hva er det egentlig som binder disse menneskene sammen? Er det at de har felles opphav? Felles kultur? Felles lover? Eller bare at de tilfeldigvis bor i det samme landet?

Spoersmaalene om **etnisitet** og **nasjonalitet** handler om noe av det mest grunnleggende i menneskelivet: behovet for tilhoerighet. Vi er sosiale vesener, og vi soeker fellesskap med andre. Men hvilke fellesskap vi tilhoerer, og hva som definerer disse fellesskapene, er mer komplisert enn du kanskje tror -- og det er tema for intens politisk debatt.

Norge har gaaett fra aa vaere et relativt homogent samfunn til aa bli et flerkulturelt samfunn med innbyggere fra over 200 land. I Oslo snakkes det over 200 spraak. Mange nordmenn med innvandrerbakgrunn opplever sammensatt identitet -- de er baade norske og har tilhoerighet til andre kulturer. En person kan vaere norsk statsborger, etnisk pakistansk, muslim og fotballfan av Manchester United -- alt paa en gang. Slike flerdelte identiteter er vanlige i moderne, flerkulturelle samfunn.

Men hvem "hoerer til" i Norge? Hva betyr det aa vaere norsk? Det er et spoorsmaal som engasjerer, provoserer og fascinerer -- og som folk har svart veldig ulikt paa.`,
    },
    {
      id: 'samfunnskunnskap-2-3-n-section1',
      type: 'text',
      content: `## Etnisitet: Fellesskap i fortiden

La oss begynne med **etnisitet**. Det hoeres kanskje ut som et vanskelig ord, men ideen bak er enkel: etnisitet handler om opplevd fellesskap basert paa antatt felles opphav, kultur, spraak, historie eller tradisjoner.

Legg merke til ordene "opplevd" og "antatt". For etnisitet handler ikke om biologi eller genetikk -- det handler om *foelelse* av fellesskap. Det handler om historier vi forteller oss selv om hvem "vi" er: vi som deler dette spraaket, denne historien, disse tradisjonene.

Hva kjennetegner en etnisk gruppe? Det kan vaere felles spraak eller dialekt, felles historie og minner, felles kultur og tradisjoner, foelelse av felles opphav, og ofte (men ikke alltid) felles religion. Men det er viktig aa forstaa at grensene mellom etniske grupper aldri er skarpe -- de er flytende og foranderlige.

I Norge har vi flere etniske grupper: samene er det mest kjente eksempelet -- de har bodd i nordoermraadene i tusenvis av aar og har eget spraak, egne tradisjoner og egen kultur. Vi har ogsaa kvener, romfolk, og mange grupper med bakgrunn fra andre land. Og saa har vi selvfoelgelig den "etnisk norske" majoriteten -- men selv denne gruppen er langt mer mangfoldig enn man ofte forestiller seg. En fra Bergen og en fra Finnmark har ganske ulike kulturelle tradisjoner!

Det er viktig aa huske at de fleste forskere er enige om at etnisitet ikke er biologisk bestemt. Det er sosialt konstruert -- noe som betyr at det er skapt av mennesker gjennom historie og kultur. Men det betyr ikke at det er uviktig. Tvert imot: opplevelsen av etnisk tilhoerighet er dypt meningsfull for mange mennesker.`,
    },
    {
      id: 'samfunnskunnskap-2-3-n-section2',
      type: 'text',
      content: `## Nasjon, stat og nasjonalisme

Naa beveger vi oss fra etnisitet til **nasjonalitet**. Og her maa vi begynne med aa rydde opp i noen begreper, for de brukes ofte om hverandre selv om de betyr ulike ting.

En **nasjon** er et fellesskap av mennesker som deler kultur, historie, spraak og/eller territorium. Det er et foelt fellesskap -- en foelelse av "vi". Det norske folket er en nasjon.

En **stat** er noe helt annet: det er et geografisk omraade med felles regjering og lover. Kongeriket Norge er en stat.

Ofte overlapper nasjon og stat -- derfor snakker vi om "nasjonalstater". Men ikke alltid. Kurderne er en nasjon uten egen stat. Storbritannia er en stat som inneholder flere nasjoner (England, Skottland, Wales, Nord-Irland).

**Nasjonalitet** kan bety to ulike ting: juridisk tilhoerighet (statsborgerskap) eller foelelsesmessig tilhoerighet (nasjonal identitet). Du kan ha norsk statsborgerskap uten aa foele deg norsk, og du kan foele deg norsk uten aa ha norsk pass.

Saa har vi **nasjonalisme** -- en ideologi som vektlegger nasjonen som politisk enhet. Men nasjonalisme er ikke een ting. Det finnes ulike former:

**Patriotisme** er ganske enkelt kjaerlighet til eget land og dets verdier. Aa vaere stolt av Norge paa 17. mai er patriotisme.

**Borgerlig nasjonalisme** bygger fellesskap paa felles lover, verdier og institusjoner. Her er det ikke opphavet ditt som teller, men at du slutter deg til felles demokratiske spilleregler. Alle som deler disse verdiene kan vaere en del av nasjonen.

**Etnisk nasjonalisme** bygger fellesskap paa felles opphav og kultur. Her er det tilhoerighet gjennom blod, spraak og tradisjon som definerer hvem som hoerer til.

Nasjonalisme kan skape samhold og fellesskap -- men den har historisk ogsaa vaert brukt til ekskludering og undertrykkelse. Hvordan man vurderer nasjonalisme avhenger av kontekst og verdisyn.`,
    },
    {
      id: 'samfunnskunnskap-2-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa etnisitet og nasjonalitet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-2-3-n-quiz1-q0',
            task: 'Hva er forskjellen mellom en nasjon og en stat?',
            options: [
              { id: 'a', text: 'Det er ingen forskjell -- de betyr det samme', isCorrect: false },
              { id: 'b', text: 'En nasjon er et foelt fellesskap av mennesker. En stat er et geografisk omraade med regjering og lover', isCorrect: true },
              { id: 'c', text: 'En stat er storre enn en nasjon', isCorrect: false },
              { id: 'd', text: 'En nasjon har alltid egen stat', isCorrect: false },
            ],
            solution: 'En nasjon er et fellesskap av mennesker som deler kultur, historie, spraak og/eller territorium. En stat er et geografisk omraade med felles regjering og lover. De overlapper ofte (nasjonalstater), men ikke alltid -- som kurderne som er en nasjon uten stat.',
          },
          {
            id: 'samfunnskunnskap-2-3-n-quiz1-q1',
            task: 'Hva handler etnisitet om?',
            options: [
              { id: 'a', text: 'Biologisk bestemte forskjeller mellom folkegrupper', isCorrect: false },
              { id: 'b', text: 'Opplevd fellesskap basert paa antatt felles opphav, kultur, spraak og tradisjoner', isCorrect: true },
              { id: 'c', text: 'Kun hudfarge og utseende', isCorrect: false },
              { id: 'd', text: 'Hvilket land du har statsborgerskap i', isCorrect: false },
            ],
            solution: 'Etnisitet handler om opplevd fellesskap basert paa antatt felles opphav, kultur, spraak, historie og tradisjoner. Det er ikke biologisk bestemt, men sosialt konstruert. Det er en foelelse av tilhoerighet som er dypt meningsfull for mange.',
          },
          {
            id: 'samfunnskunnskap-2-3-n-quiz1-q2',
            task: 'Hva er forskjellen mellom borgerlig og etnisk nasjonalisme?',
            options: [
              { id: 'a', text: 'Borgerlig: fellesskap basert paa felles lover og verdier. Etnisk: fellesskap basert paa opphav og kultur', isCorrect: true },
              { id: 'b', text: 'Borgerlig nasjonalisme er positiv, etnisk nasjonalisme er alltid negativ', isCorrect: false },
              { id: 'c', text: 'Det er ingen forskjell -- begge handler om kjaerlighet til landet', isCorrect: false },
              { id: 'd', text: 'Borgerlig nasjonalisme finnes bare i byene, etnisk nasjonalisme paa bygda', isCorrect: false },
            ],
            solution: 'Borgerlig nasjonalisme bygger fellesskap paa felles lover, verdier og institusjoner -- alle som deler disse kan vaere en del av nasjonen. Etnisk nasjonalisme bygger fellesskap paa felles opphav og kultur. Begge har styrker og svakheter.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-2-3-n-section3',
      type: 'text',
      content: `## Det store spoersmaalet: Hva vil det si aa vaere norsk?

Naa er vi kommet til kjernen -- det spoersmaalet som aldri slutter aa engasjere: Hva vil det egentlig si aa vaere norsk?

Det finnes flere ulike svar, og folk er genuint uenige. La oss se paa de viktigste perspektivene.

**Den juridiske definisjonen** er den enkleste: du er norsk hvis du har norsk statsborgerskap. Punktum. Alle statsborgere har like rettigheter og plikter, uavhengig av bakgrunn.

**Den kulturelle definisjonen** legger vekt paa spraak, tradisjoner, verdier og levemaate. Aa vaere norsk betyr aa snakke norsk, delta i norsk samfunnsliv, forstaa norske koder. Fra dette perspektivet kan man "bli norsk" gjennom kulturell laering og tilpasning.

**Den historisk-etniske definisjonen** vektlegger slektskap og opphav. Aa vaere norsk betyr aa ha roetter i landet over generasjoner. Fra dette perspektivet er norskhet noe du foedes inn i.

**Den verdimessige definisjonen** fokuserer paa tilslutning til grunnleggende verdier som demokrati, likhet for loven og ytringsfrihet. Aa vaere norsk betyr aa dele disse verdiene -- uansett hvor du kommer fra.

Debatten paaaar. Noen mener norskhet primaert handler om verdier og deltakelse -- at alle som bidrar til og identifiserer seg med det norske samfunnet er norske. Andre mener historisk og kulturell tilhoerighet er viktig -- at norskhet har dypere roetter enn bare et pass. Det er legitimt aa ha ulike syn paa dette.

Det de fleste er enige om, er at alle statsborgere skal behandles likt. Og kanskje kan man ogsaa enes om at spoersmaalet "hva er norsk?" ikke har ett endelig svar -- for svaret endrer seg med tiden, akkurat som Norge selv gjor det.`,
    },
    {
      id: 'samfunnskunnskap-2-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa nasjonal identitet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-2-3-n-quiz2-q0',
            task: 'Hvilke ulike perspektiver finnes paa hva det vil si aa vaere norsk?',
            options: [
              { id: 'a', text: 'Det finnes bare eett perspektiv: norsk statsborgerskap', isCorrect: false },
              { id: 'b', text: 'Juridisk (statsborgerskap), kulturell (spraak/tradisjoner), historisk (opphav) og verdimessig (demokrati/likhet)', isCorrect: true },
              { id: 'c', text: 'Bare genetisk opphav teller', isCorrect: false },
              { id: 'd', text: 'Det er helt tilfeldig og uten betydning', isCorrect: false },
            ],
            solution: 'Det finnes flere perspektiver: juridisk (statsborgerskap), kulturelt (spraak, tradisjoner, levemaate), historisk-etnisk (opphav og roetter) og verdimessig (tilslutning til demokrati og menneskerettigheter). Folk vektlegger disse ulikt, og debatten er paaende.',
          },
          {
            id: 'samfunnskunnskap-2-3-n-quiz2-q1',
            task: 'Kan en person ha flere nasjonale identiteter samtidig?',
            options: [
              { id: 'a', text: 'Nei, man kan bare tilhoere een nasjon', isCorrect: false },
              { id: 'b', text: 'Ja -- man kan identifisere seg med flere nasjoner gjennom oppvekst, familie og tilhoerighet', isCorrect: true },
              { id: 'c', text: 'Bare hvis man har dobbelt statsborgerskap', isCorrect: false },
              { id: 'd', text: 'Nei, det er forbudt i norsk lov', isCorrect: false },
            ],
            solution: 'Ja, mange opplever sammensatt nasjonal identitet. Man kan vaere norsk-pakistansk, norsk-samisk eller norsk-amerikansk. Flerdelte identiteter er vanlige i moderne, flerkulturelle samfunn og kan oppleves som baade berikende og krevende aa navigere.',
          },
          {
            id: 'samfunnskunnskap-2-3-n-quiz2-q2',
            task: 'Hvorfor regnes Norge som et flerkulturelt samfunn i dag?',
            options: [
              { id: 'a', text: 'Fordi Norge har innbyggere fra over 200 land, mange religioner og over 200 spraak i Oslo', isCorrect: true },
              { id: 'b', text: 'Fordi alle nordmenn har forskjellig kultur', isCorrect: false },
              { id: 'c', text: 'Fordi Norge ble flerkulturelt under vikingtiden', isCorrect: false },
              { id: 'd', text: 'Fordi norsk lov krever at alle skal ha forskjellig kultur', isCorrect: false },
            ],
            solution: 'Norge har innbyggere fra over 200 land, over 200 spraak snakkes i Oslo, mange religioner praktiseres, og ulike kulturelle tradisjoner feires. Eid og Diwali feires sammen med jul og paaske, og kulturarrangementer fra mange land beriker samfunnet.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-2-3-n-summary',
      type: 'text',
      content: `## Oppsummering

Vi har utforsket de store spoersmaalene om tilhoerighet og fellesskap. Her er det viktigste:

- **Etnisitet**: Opplevd fellesskap basert paa antatt felles opphav, kultur, spraak og tradisjoner. Det er sosialt konstruert, men dypt meningsfullt for mange.
- **Nasjonalitet**: Tilhoerighet til en nasjon eller stat, enten juridisk (statsborgerskap) eller foelelsesmessig (nasjonal identitet). En nasjon er et foelt fellesskap, en stat er et politisk-geografisk omraade.
- **Nasjonalisme**: Ulike former som patriotisme, borgerlig nasjonalisme og etnisk nasjonalisme har ulike styrker og svakheter. Nasjonalisme kan skape samhold, men ogsaa ekskludering.
- **Det flerkulturelle Norge**: Norge har blitt et mangfoldig samfunn der spoersmaalet om hva det vil si aa vaere norsk debatteres aktivt -- og det finnes ingen enkle svar.

Det som gjor disse spoersmaalene saa fascinerende, er at de handler om noe av det mest grunnleggende i menneskelivet: hvem er "vi"? Og hvem faar vaere med i "vi"-et? Det er spoersmaal som vil fortsette aa engasjere -- og det er nettopp den debatten som gjor et demokratisk samfunn levende.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.4 NARRATIV: Diskriminering og likestilling
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_2_4_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-2-4-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '2.4',
  title: 'Diskriminering og likestilling',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om kampen for likeverd -- fra usynlige barrierer til lovfestet beskyttelse -- og de paagaaende debattene om hvordan vi best sikrer rettferdighet for alle.',
  estimatedMinutes: 20,
  competenceGoals: [
    'droefte hva diskriminering er og hvordan den kan bekjempes',
    'reflektere over ulike perspektiver paa likestillingspolitikk',
  ],
  linkedChapterId: 'samfunnskunnskap-2-4',
  content: [
    {
      id: 'samfunnskunnskap-2-4-n-intro',
      type: 'text',
      content: `## Naar noen behandles annerledes

Tenk deg foelgende: to personer soeker paa den samme jobben. De har identisk utdanning, like mye erfaring og like gode kvalifikasjoner. Den ene heter Kari Hansen, den andre heter Fatima Ahmed. Forskning viser at Kari har storre sjanse for aa bli kalt inn til intervju -- selv om det ikke er noen faglig grunn til det.

Dette er **diskriminering** i praksis. Og selv om det kan vaere fristende aa tenke at dette er noe som bare skjer "andre steder", er det en realitet ogsaa i Norge. Diskriminering betyr aa behandle noen daarligere enn andre paa grunnlag av kjennetegn som etnisitet, kjoenn, religion, funksjonsevne, seksuell orientering eller alder.

Det er bred politisk enighet om at aapen diskriminering er galt. Alle mennesker har lik verdi -- det er et prinsipp som er forankret baade i Grunnloven og i menneskerettighetene. Like tilfeller skal behandles likt, og usaklig forskjellsbehandling er forbudt ved lov.

Men selv om prinsippet er klart, er virkeligheten mer komplisert. Diskriminering kan vaere aapenbar -- som naar noen nektes jobb paa grunn av hudfarge. Men den kan ogsaa vaere usynlig, systematisk og vanskelig aa bevise. Og det er mer debatt om hvor omfattende tiltak som trengs og hvilke loesninger som faktisk fungerer.`,
    },
    {
      id: 'samfunnskunnskap-2-4-n-section1',
      type: 'text',
      content: `## De mange ansiktene til diskriminering

Diskriminering kommer i flere former, og det er viktig aa kjenne forskjellene.

**Direkte diskriminering** er den mest synlige formen. Det er naar noen aapent behandles daarligere paa grunn av bakgrunnen sin. Tenk paa utleieren som sier "vi leier ikke ut til utlendinger" eller arbeidsgiveren som ikke ansetter kvinner i lederstillinger. Dette er ulovlig og relativt lett aa identifisere.

Men det finnes en mer snikende form: **indirekte diskriminering**. Her er reglene tilsynelatende noetrale, men de slaar ulikt ut for ulike grupper. Tenk paa en arbeidsgiver som krever "norske referanser" -- et krav som nykommere til landet naesten umulig kan oppfylle, selv om de er fullt kvalifisert for jobben. Eller et jobbkrav om at man maa vaere over 180 cm hoey -- noe som ekskluderer langt flere kvinner enn menn. Reglene ser rettferdige ut paa overflaten, men de skaper urettferdige resultater.

**Trakassering** er handlinger eller ytringer som krenker noens verdighet. Det kan vaere gjentatte kommentarer om noens bakgrunn, uoenskede vitser paa noens bekostning, eller systematisk utestengning. Dette er forbudt ved lov.

Saa finnes det **positiv saerbehandling**, ogsaa kalt kvotering -- der man gir fordeler til underrepresenterte grupper for aa oppnaa likestilling. Kjoenskvotering i bedriftsstyrer er et norsk eksempel. Her er meningene delte: er det rettferdig aa gi noen fordeler paa grunn av gruppetiloerighet? Eller er det noedvendig for aa utjevne historiske skjevheter?

En viktig distinksjon: **saklig forskjellsbehandling** kan vaere lovlig. Aa kreve norskkunnskaper til en stilling der man maa kommunisere med norske kunder, er saklig. Aa nekte noen jobb paa grunn av hudfarge er usaklig. Grensen gaar ved om forskjellsbehandlingen har en god begrunnelse.`,
    },
    {
      id: 'samfunnskunnskap-2-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa diskrimineringsbegrepet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-2-4-n-quiz1-q0',
            task: 'Hva er forskjellen mellom direkte og indirekte diskriminering?',
            options: [
              { id: 'a', text: 'Direkte er ulovlig, indirekte er lovlig', isCorrect: false },
              { id: 'b', text: 'Direkte: aapen daarligere behandling pga. bakgrunn. Indirekte: noetrale regler som slaar ulikt ut for ulike grupper', isCorrect: true },
              { id: 'c', text: 'Direkte skjer paa jobben, indirekte skjer paa skolen', isCorrect: false },
              { id: 'd', text: 'Det er ingen forskjell mellom dem', isCorrect: false },
            ],
            solution: 'Direkte diskriminering er aapen forskjellsbehandling -- som aa nekte noen jobb pga. etnisitet. Indirekte diskriminering er tilsynelatende noetrale regler som slaar ulikt ut, som krav om "norske referanser" som nykommere ikke kan oppfylle. Begge kan vaere ulovlige.',
          },
          {
            id: 'samfunnskunnskap-2-4-n-quiz1-q1',
            task: 'Hva er forskjellen mellom saklig og usaklig forskjellsbehandling?',
            options: [
              { id: 'a', text: 'All forskjellsbehandling er usaklig og ulovlig', isCorrect: false },
              { id: 'b', text: 'Saklig har god begrunnelse (f.eks. spraakkrav for relevant jobb). Usaklig mangler god grunn (f.eks. nekte jobb pga. hudfarge)', isCorrect: true },
              { id: 'c', text: 'Saklig skjer paa offentlige arbeidsplasser, usaklig i private bedrifter', isCorrect: false },
              { id: 'd', text: 'Forskjellen avhenger av hvem som klager', isCorrect: false },
            ],
            solution: 'Saklig forskjellsbehandling har en god begrunnelse og er lovlig -- for eksempel spraakkrav til stillinger der spraak er noedvendig. Usaklig forskjellsbehandling mangler god grunn og er diskriminering -- for eksempel aa nekte noen jobb paa grunn av hudfarge.',
          },
          {
            id: 'samfunnskunnskap-2-4-n-quiz1-q2',
            task: 'Hva er positiv saerbehandling (kvotering)?',
            options: [
              { id: 'a', text: 'Aa gi fordeler til de mest kvalifiserte soekerne', isCorrect: false },
              { id: 'b', text: 'Aa gi fordeler til underrepresenterte grupper for aa oppnaa likestilling', isCorrect: true },
              { id: 'c', text: 'Aa behandle alle helt likt uansett bakgrunn', isCorrect: false },
              { id: 'd', text: 'Aa ansette folk basert utelukkende paa kjoenn', isCorrect: false },
            ],
            solution: 'Positiv saerbehandling (kvotering) betyr aa gi fordeler til underrepresenterte grupper for aa utjevne skjevheter. For eksempel kjoenskvotering i bedriftsstyrer. Det er ulike syn paa om dette er et godt virkemiddel -- noen mener det er noedvendig, andre mener det er urettferdig.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-2-4-n-section2',
      type: 'text',
      content: `## Lovverket: Hvordan Norge beskytter mot diskriminering

Norge har bygget opp et solid lovverk for aa beskytte mot diskriminering. La oss se paa de viktigste delene.

**Likestillings- og diskrimineringsloven** er selve hjoeyrnesteinen. Den forbyr diskriminering paa grunn av kjoenn, etnisitet, religion, funksjonsevne, seksuell orientering og alder. Loven gjelder paa alle omraader -- i arbeidslivet, i utdanningen, paa boligmarkedet og i offentlige tjenester.

**Straffelovens paragraf 185**, ogsaa kjent som "hatytringsparagrafen", forbyr offentlige uttalelser som truer, forhaaner eller fremmer hat mot grupper. Men her beveger vi oss inn i en krevende debatt: hvor gaar grensen mellom straffbare ytringer og ytringsfrihet? Norge har valgt aa ha en slik paragraf, men det er uenighet om hvor strengt den boer praktiseres.

For aa haandheve disse lovene har vi egne institusjoner. **Likestillings- og diskrimineringsombudet (LDO)** gir veiledning om diskrimineringssaker. De kan hjelpe deg aa forstaa rettighetene dine og gi raad om hva du kan gjore. **Diskrimineringsnemnda** behandler konkrete klager paa diskriminering og kan gi oppreisning til den som har blitt utsatt for det.

Disse lovene og institusjonene eksisterer fordi vi som samfunn har bestemt at usaklig forskjellsbehandling er uakseptabelt. De er et uttrykk for verdien om at alle mennesker har lik verdi -- en verdi som det er bred enighet om i Norge.

Men lovverk alene loeser ikke alt. Studien vi begynte med -- den om Kari Hansen og Fatima Ahmed -- viser at diskriminering kan skje selv naar lovene er paa plass. Ubevisste fordommer, strukturelle barrierer og kulturelle moenstre kan vaere minst like kraftfulle som bevisst diskriminering. Og det er der den virkelige debatten staar: hvilke ytterligere tiltak trengs, og hva fungerer best?

Det finnes ulike syn paa dette. Et **liberalt perspektiv** vektlegger aa haandheve eksisterende lover og la markedet straffe diskriminerende arbeidsgivere -- uten omfattende statlig regulering. Et **aktivt likestillingsperspektiv** vil gaa lenger: anonyme jobbsoeknader, mangfoldstrening i bedrifter, aktiv rekruttering av minoriteter og kvotering i noen tilfeller. Det er enighet om at diskriminering er galt. Det er uenighet om hvilke tiltak som er mest effektive.`,
    },
    {
      id: 'samfunnskunnskap-2-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa lovverk og likestillingspolitikk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-2-4-n-quiz2-q0',
            task: 'Hvilke lover beskytter mot diskriminering i Norge?',
            options: [
              { id: 'a', text: 'Bare Grunnloven', isCorrect: false },
              { id: 'b', text: 'Likestillings- og diskrimineringsloven og straffelovens paragraf 185 (hatytringer)', isCorrect: true },
              { id: 'c', text: 'Det finnes ingen egne lover mot diskriminering', isCorrect: false },
              { id: 'd', text: 'Bare arbeidsmiljoeloven', isCorrect: false },
            ],
            solution: 'Likestillings- og diskrimineringsloven forbyr diskriminering paa grunn av kjoenn, etnisitet, religion, funksjonsevne, seksuell orientering og alder. Straffelovens paragraf 185 forbyr hatytringer. Diskrimineringsnemnda behandler klager.',
          },
          {
            id: 'samfunnskunnskap-2-4-n-quiz2-q1',
            task: 'Hva er det viktigste argumentet FOR kvotering?',
            options: [
              { id: 'a', text: 'At det er billigere for bedrifter', isCorrect: false },
              { id: 'b', text: 'At det kan utjevne historiske skjevheter, gi rollemodeller og sikre mangfold', isCorrect: true },
              { id: 'c', text: 'At det gjor det enklere aa ansette folk', isCorrect: false },
              { id: 'd', text: 'At alle EU-land krever det', isCorrect: false },
            ],
            solution: 'For kvotering: det kan utjevne historiske skjevheter, gi rollemodeller for underrepresenterte grupper og sikre mangfold. Mot kvotering: kvalifikasjoner kan oversees, det kan oppleves som urettferdig og stigmatisere de som kvoteres inn. Det er en pagaaende politisk debatt.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-2-4-n-summary',
      type: 'text',
      content: `## Oppsummering

Diskriminering er en av de stoerste utfordringene for et rettferdig samfunn. Her er det viktigste fra dette kapittelet:

- **Diskriminering**: Aa behandle noen daarligere paa grunnlag av kjennetegn som etnisitet, kjoenn, religion eller funksjonsevne. Alle mennesker har lik verdi, og usaklig forskjellsbehandling er forbudt.
- **Direkte og indirekte diskriminering**: Direkte er aapen forskjellsbehandling. Indirekte er tilsynelatende noetrale regler som slaar ulikt ut. Begge er problematiske og kan vaere ulovlige.
- **Lovverk**: Likestillings- og diskrimineringsloven og straffelovens paragraf 185 beskytter mot diskriminering og hatytringer. Likestillings- og diskrimineringsombudet og Diskrimineringsnemnda haandhever disse rettighetene.
- **Debatt om tiltak**: Det er politisk uenighet om kvotering og andre aktive likestillingstiltak -- noen mener det er noedvendig for aa utjevne skjevheter, andre mener det kan vaere urettferdig.

Kampen mot diskriminering handler ikke bare om lover -- den handler om holdninger, bevissthet og vilje til aa se virkeligheten slik den er, selv naar den er ubehagelig.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.5 NARRATIV: Urfolk og nasjonale minoriteter
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_2_5_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-2-5-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '2.5',
  title: 'Urfolk og nasjonale minoriteter',
  subtitle: 'Narrativ versjon',
  description: 'Historien om samene og Norges nasjonale minoriteter -- fra fornorskingspolitikkens morrke kapitler til kampen for anerkjennelse og forsoning.',
  estimatedMinutes: 30,
  competenceGoals: [
    'droefte samenes status som urfolk og deres rettigheter',
    'reflektere over de nasjonale minoritetenes historie og situasjon i Norge',
  ],
  linkedChapterId: 'samfunnskunnskap-2-5',
  content: [
    {
      id: 'samfunnskunnskap-2-5-n-intro',
      type: 'text',
      content: `## De som var her foerst

Forestill deg at du staar paa vidda i Finnmark en vinterdag. Rundt deg er det hvitt saa langt oeyet rekker, og det eneste du hoerer er vinden og fjerne bjeller fra en reinflokk. Denne vidda har vaert hjem for samer i tusenvis av aar -- lenge foer Norge som stat eksisterte, lenge foer nooen tegnet en grense paa et kart.

Samene er Norges **urfolk**. Det betyr at de har bodd her foer dagens statsgrenser ble trukket, og at de har opprettholdt sin egen kultur, sitt eget spraak og sine egne tradisjoner gjennom generasjoner. Men samene er ikke alene om aa ha lang historie i Norge. Fem grupper har status som **nasjonale minoriteter**: kvener/norskfinner, skogfinner, joeder, romfolk og romanifolk/tatere.

Det disse gruppene har til felles, er at de har bodd i Norge i hundrevis av aar -- og at de alle har opplevd diskriminering og undertrykkelse fra norske myndigheter. Historien om urfolk og nasjonale minoriteter i Norge er baade fascinerende og smertefull. Den rommer kulturell rikdom og stolthet, men ogsaa morrke kapitler som Norge foerst i nyere tid har begynt aa ta et oppgjor med.

Fornorskingspolitikken, tvangssterilisering av romanifolk, deportasjon av joeder under 2. verdenskrig og ekskludering av romfolk -- dette er deler av norsk historie som det er viktig aa kjenne til. Ikke for aa foele skyld, men for aa forstaa hvordan fortiden former naatiden, og for aa laere av feilene som ble gjort.

Sannhets- og forsoningskommisjonen, opprettet i 2018, har dokumentert fornorskingspolitikkens konsekvenser for samer og kvener. Kommisjonen avdekket systematisk kulturutsletting, spraakforbud og psykologiske skader som gaar i generasjoner. I dag har urfolk og nasjonale minoriteter rettigheter som skal sikre deres kultur, spraak og identitet -- blant annet gjennom ILO-konvensjon 169 og Grunnlovens paragraf 108.`,
    },
    {
      id: 'samfunnskunnskap-2-5-n-section1',
      type: 'text',
      content: `## Samene: Et folk paa tvers av grenser

La oss bli bedre kjent med samene. Det samiske omraadet -- **Saapmi** -- strekker seg over fire land: Norge, Sverige, Finland og Russland. Statsgrensene ble tegnet tvers gjennom samenes hjemland, men det samiske folket har alltid sett paa seg selv som eett folk, uavhengig av hvilken stat de tilfeldigvis bor i.

Samisk kultur er rik og mangfoldig. Det finnes ti samiske spraak, der **nordsamisk** er det mest utbredte. Spraakene er innbyrdes ganske forskjellige -- en nordsamisktalende forstaar ikke noedvendigvis soersamisk. Tradisjonelle naeringer som **reindrift**, fiske, **duodji** (haandverk), jakt og sanking har vaert baerende for samisk kultur i tusenvis av aar. I dag er mange samer ogsaa laerere, advokater, kunstnere og IT-arbeidere -- samisk identitet er ikke begrenset til tradisjonelle naeringer.

I 1989 ble **Sametinget** opprettet som et folkevalgt organ for det samiske folket. Sametinget gir uttalelser til myndighetene i saker som beroerer samer, og det forvalter ogsaa midler til samisk kultur og spraak. Det er et viktig symbol paa at Norge anerkjenner samene som urfolk med rett til selvbestemmelse i saker som angaar dem.

Men veien hit var lang og smertefull. Fra 1850-tallet til 1980-tallet foerte Norge en systematisk **fornorskingspolitikk** overfor samene. Samiske spraak ble forbudt i skolen. Barn ble sendt paa internatskoler der de ble straffet for aa snakke samisk. Samisk kultur ble sett paa som mindreverdig, og maalet var at samene skulle "bli norske". Konsekvensene var enorme: spraaktap, kulturelt tap, skam og traumer som gaar i generasjoner.

Vendepunktet kom med **Alta-saken** i 1979-1981. Norske myndigheter ville bygge ut Alta-Kautokeino-vassdraget, noe som ville ramme samiske reindriftsomraader. Samer og miljovernere protesterte med demonstrasjoner, sivil ulydighet og sultestreik. En samisk aksjon med lavvocamp foran Stortinget fikk enorm medieoppmerksomhet. Kraftverket ble til slutt bygget, men i mindre skala -- og viktigere: saken skapte et vendepunkt. Den foerte til opprettelsen av Samerettsutvalget, Sametinget, sameloven og anerkjennelse av samisk som offisielt spraak. Alta-saken var starten paa forsoning etter over hundre aar med fornorsking.`,
    },
    {
      id: 'samfunnskunnskap-2-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa samene som urfolk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-2-5-n-quiz1-q0',
            task: 'Hvorfor regnes samene som urfolk?',
            options: [
              { id: 'a', text: 'Fordi de er den stoerste minoritetsgruppen i Norge', isCorrect: false },
              { id: 'b', text: 'Fordi de har bodd i omraadet foer dagens statsgrenser og opprettholdt egen kultur', isCorrect: true },
              { id: 'c', text: 'Fordi de fikk urfolksstatus av FN i 2012', isCorrect: false },
              { id: 'd', text: 'Fordi de bor i Nord-Norge', isCorrect: false },
            ],
            solution: 'Samene regnes som urfolk fordi de har bodd i nordomraadene (Saapmi) i tusenvis av aar -- lenge foer dagens statsgrenser ble trukket -- og har opprettholdt eget spraak, egen kultur og egne tradisjoner.',
          },
          {
            id: 'samfunnskunnskap-2-5-n-quiz1-q1',
            task: 'Hva var fornorskingspolitikken?',
            options: [
              { id: 'a', text: 'Et program for aa laere nordmenn samisk kultur', isCorrect: false },
              { id: 'b', text: 'En politikk for aa assimilere samer og kvener ved aa forby spraak og kultur', isCorrect: true },
              { id: 'c', text: 'En lov som ga samer saerlige rettigheter', isCorrect: false },
              { id: 'd', text: 'Et utdanningsprogram for innvandrere', isCorrect: false },
            ],
            solution: 'Fornorskingspolitikken (ca. 1850-1980) var Norges systematiske assimileringspolitikk overfor samer og kvener. Samiske spraak ble forbudt i skolen, kulturen undertrykt, og maalet var at samene skulle "bli norske". Konsekvensene var spraaktap, kulturelt tap og generasjonstraumer.',
          },
          {
            id: 'samfunnskunnskap-2-5-n-quiz1-q2',
            task: 'Hva var Alta-sakens viktigste konsekvenser?',
            options: [
              { id: 'a', text: 'Kraftverket ble stoppet fullstendig', isCorrect: false },
              { id: 'b', text: 'Alle samer flyttet fra Finnmark', isCorrect: false },
              { id: 'c', text: 'Opprettelse av Sametinget, sameloven og anerkjennelse av samisk som offisielt spraak', isCorrect: true },
              { id: 'd', text: 'Norge forlot FN i protest', isCorrect: false },
            ],
            solution: 'Alta-saken foerte til et vendepunkt i samepolitikken. Samerettsutvalget ble opprettet, Sametinget ble etablert i 1989, sameloven ble vedtatt, og samisk ble anerkjent som offisielt spraak. Det var starten paa forsoning etter fornorskingspolitikken.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-2-5-n-section2',
      type: 'text',
      content: `## Nasjonale minoriteter: Fem historier om tilhoerighet

Ved siden av samene har Norge fem nasjonale minoriteter -- grupper med lang historie i landet som har opprettholdt egen kultur og identitet gjennom generasjoner. Hver gruppe har sin egen historie, men de deler erfaringen med diskriminering og marginalisering.

**Kvenene/norskfinnene** er etterkommere av finske innvandrere til Nord-Norge fra 1500-tallet. De snakker kvensk, et spraak som er slaekt med finsk. Under fornorskingspolitikken ble ogsaa kvenene utsatt for spraakforbud og kulturell undertrykkelse. I dag arbeides det med aa revitalisere kvensk spraak og kultur.

**Skogfinnene** er etterkommere av finner som bosatte seg i skogoemmraadene i Hedmark og Akershus paa 1600-tallet. De brakte med seg svedjebruk -- en form for jordbruk der man brant ned skog for aa dyrke jorda. Kulturen deres er i stor grad assimilert, men minnet og historien lever videre.

**Joedene** har bodd i Norge siden 1800-tallet, men moeette tidlig diskriminering. Den beryktede **joedeparagrafen** (1814-1851) nektet joeder adgang til riket -- den stod i Norges grunnlov! Under 2. verdenskrig ble 773 norske joeder deportert til utryddelsesleire. Kun 34 overlevde. Norsk politi deltok i arrestasjonene. Dette er et av de moerkeste kapitlene i norsk historie.

**Romfolk** (tidligere kalt "sigoynere") ankom Norge paa 1800-tallet. De har opplevd gjennomgaaende diskriminering og utestenging, inkludert nektet innreise under 2. verdenskrig -- noe som indirekte bidro til at mange ble offer for Holocaust.

**Romanifolket/taterne** har bodd i Norden i 500 aar. De ble utsatt for kanskje de groveste overgrepene: gjennom "taterpolitikken" ble mange tvangssterilisert, barn ble tvangsfjernet fra familier, og mange ble internert paa institusjoner. Staten proevde systematisk aa utslette deres kultur og levemaate.

Felles for alle disse gruppene er at norske myndigheter i ulike perioder aktivt proevde aa undergrave deres kultur, spraak og identitet. I dag arbeider Norge for aa rette opp denne historiske uretten gjennom anerkjennelse, unnskyldninger og forsoningsprosesser.`,
    },
    {
      id: 'samfunnskunnskap-2-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa nasjonale minoriteter:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-2-5-n-quiz2-q0',
            task: 'Hvilke fem grupper har status som nasjonale minoriteter i Norge?',
            options: [
              { id: 'a', text: 'Samer, svensker, dansker, finner og islendinger', isCorrect: false },
              { id: 'b', text: 'Kvener/norskfinner, skogfinner, joeder, romfolk og romanifolk/tatere', isCorrect: true },
              { id: 'c', text: 'Pakistanere, somaliere, polakker, litauere og svensker', isCorrect: false },
              { id: 'd', text: 'Nordlendinger, vestlendinger, soerlendinger, oestlendinger og troenderere', isCorrect: false },
            ],
            solution: 'De fem nasjonale minoritetene er kvener/norskfinner (finskaaettede i Nord-Norge), skogfinner (finner i Hedmark/Akershus), joeder, romfolk og romanifolk/tatere. Alle har lang historie i Norge og har opplevd diskriminering.',
          },
          {
            id: 'samfunnskunnskap-2-5-n-quiz2-q1',
            task: 'Hva skjedde med norske joeder under 2. verdenskrig?',
            options: [
              { id: 'a', text: 'Alle ble reddet av norske motstandsfolk', isCorrect: false },
              { id: 'b', text: '773 ble deportert til utryddelsesleire, kun 34 overlevde. Norsk politi deltok i arrestasjonene', isCorrect: true },
              { id: 'c', text: 'De flyktet til Sverige foer krigen begynte', isCorrect: false },
              { id: 'd', text: 'De ble beskyttet av norske myndigheter gjennom hele krigen', isCorrect: false },
            ],
            solution: 'Under 2. verdenskrig ble 773 norske joeder deportert til utryddelsesleire. Kun 34 overlevde. Norsk politi deltok i arrestasjonene. Joedeparagrafen (1814-1851) hadde tidligere nektet joeder adgang til riket.',
          },
          {
            id: 'samfunnskunnskap-2-5-n-quiz2-q2',
            task: 'Hvorfor er det viktig aa laere om urfolk og nasjonale minoriteters historie?',
            options: [
              { id: 'a', text: 'Det er ikke viktig -- det er bare gammel historie', isCorrect: false },
              { id: 'b', text: 'For aa forstaa Norges mangfold, laere av fortiden, motvirke diskriminering og stoette forsoning', isCorrect: true },
              { id: 'c', text: 'Bare for aa bestaa eksamen', isCorrect: false },
              { id: 'd', text: 'For aa bevise at Norge alltid har vaert et tolerant land', isCorrect: false },
            ],
            solution: 'Det er viktig fordi det hjelper oss aa forstaa Norges mangfold, laere av fortidens feil, motvirke diskriminering, respektere kulturell arv, stoette forsoningsprosesser og ta vare paa spraak og kultur for fremtiden.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-2-5-n-summary',
      type: 'text',
      content: `## Oppsummering

Vi har reist gjennom historien til de menneskene som har bodd i Norge lengst -- og som likevel har opplevd aa bli behandlet som fremmede i sitt eget land. Her er det viktigste:

- **Samene som urfolk**: Samene har bodd i Saapmi i tusenvis av aar og har saerlige rettigheter gjennom Grunnloven og ILO-konvensjonen. Sametinget representerer det samiske folket.
- **Nasjonale minoriteter**: Kvener, skogfinner, joeder, romfolk og romanifolk har lang historie i Norge og har alle opplevd diskriminering og overgrep fra norske myndigheter.
- **Fornorskingspolitikken**: Norges assimileringspolitikk (1850-1980) undertrykte samisk og kvensk spraak og kultur. Alta-saken i 1979-1981 ble vendepunktet.
- **Forsoning**: Sannhets- og forsoningskommisjonen har dokumentert historisk urett, og Norge arbeider for aa rette opp dette gjennom anerkjennelse og forsoningsprosesser.

Denne historien minner oss om at selv et demokratisk land som Norge kan begaa alvorlige overgrep mot sine egne innbyggere. Og at veien til forsoning begynner med aa anerkjenne hva som faktisk skjedde -- uten aa bortforklare eller glemme.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.6 NARRATIV: Religion og livssyn
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_2_6_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-2-6-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '2.6',
  title: 'Religion og livssyn',
  subtitle: 'Narrativ versjon',
  description: 'En utforskning av religionens plass i det norske samfunnet -- fra statskirke til livssynsmangfold -- og de vanskelige spoersmaalene om tro, frihet og fellesskap.',
  estimatedMinutes: 20,
  competenceGoals: [
    'droefte religionens plass i samfunnet',
    'reflektere over religionsfrihet og livssynsmangfold',
  ],
  linkedChapterId: 'samfunnskunnskap-2-6',
  content: [
    {
      id: 'samfunnskunnskap-2-6-n-intro',
      type: 'text',
      content: `## De store spoersmaalene

Det finnes spoersmaal som ingen vitenskap kan gi et endelig svar paa. Hva er meningen med livet? Hvordan boer vi leve? Finnes det noe stoerre enn oss selv? Hva skjer naar vi doer?

Mennesker har stilt seg disse spoersmaalene i tusenvis av aar, og svarene de har funnet -- eller ikke funnet -- har formet sivilisasjoner, skapt kunstverker, inspirert til enorm medmenneskelighet og dessverre ogsaa til forferdelige konflikter.

**Religion og livssyn** er maaten mennesker forholder seg til disse store spoersmaalene paa. Noen finner svar i troen paa Gud eller guder. Andre finner mening i humanistiske verdier uten religion. Og stadig flere svarer rett og slett: "Jeg vet ikke -- og det er greit."

I Norge har religion vaert en sentral del av samfunnet i over tusen aar. Men rollen religion spiller har endret seg dramatisk -- fra en tid da kongen bestemte hva folk skulle tro, til dagens samfunn der du fritt kan velge aa tro paa alt, noe eller ingenting.

Religion i samfunnet gir fellesskap og tilhoerighet for mange. Den former verdier og normer, markerer viktige livshendelser som foedsel, bryllup og doed, og kan inspirere til stort engasjement og hjelpearbeid. Men religion kan ogsaa skape konflikter og splittelse -- saerlig naar ulike trosretninger gjor krav paa aa ha den eneste sannheten.

Norge har gaaett fra aa vaere et religiost homogent samfunn til aa bli et livssynsmangfoldig samfunn. Og det skaper baade muligheter og utfordringer.`,
    },
    {
      id: 'samfunnskunnskap-2-6-n-section1',
      type: 'text',
      content: `## Troens landskap i Norge

Hva tror nordmenn paa i dag? Svaret er mer mangfoldig enn du kanskje tror.

**Kristendommen** er fortsatt den stoerste religionen i Norge. Den norske kirke (luthersk) har omtrent 3,6 millioner medlemmer -- men her er det viktig aa vaere nyansert. Mange av disse er medlemmer uten aa vaere praktiserende. De doeper barna sine, gifter seg i kirken og begraver sine kjaere der -- men gaar sjelden til gudstjeneste ellers. For mange er kirketilhoerighet like mye kulturell tradisjon som personlig tro. Ved siden av Den norske kirke finnes det andre kristne samfunn: Den katolske kirke, pinsemenigheter, baptister og metodister.

**Islam** er den nest stoerste religionen med omtrent 200 000 medlemmer. Moskeer finnes i de fleste stoerre byer. Norske muslimer er en mangfoldig gruppe med bakgrunn fra ulike land og med ulik praksis -- fra svart sekulaere til svart praktiserende.

**Human-Etisk Forbund** er den stoerste livssynsorganisasjonen utenfor kirken med cirka 100 000 medlemmer. De representerer et humanistisk livssyn uten religion -- et livssyn basert paa fornuft, medmenneskelighet og etikk uten referanse til det overnaturlige.

Andre religioner som buddhisme, hinduisme, sikhisme, joededom, bahaa'ii og samisk religion er ogsaa representert, om enn i mindre skala.

Og saa er det en voksende gruppe som rett og slett ikke er medlem noe sted. Tallene forteller historien: omtrent 69 prosent av befolkningen er medlem i Den norske kirke (men mange er ikke praktiserende), cirka 12 prosent tilhoerer andre tros- eller livssynssamfunn, og rundt 19 prosent er ikke medlem noe sted. Norge gjennomgaar det sosiologer kaller **sekularisering** -- en prosess der religionens rolle i samfunnet gradvis minsker.`,
    },
    {
      id: 'samfunnskunnskap-2-6-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-6-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa religion og livssyn i Norge:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-2-6-n-quiz1-q0',
            task: 'Hvilken er den stoerste livssynsorganisasjonen i Norge utenfor kirken?',
            options: [
              { id: 'a', text: 'Islamsk Raad Norge', isCorrect: false },
              { id: 'b', text: 'Human-Etisk Forbund', isCorrect: true },
              { id: 'c', text: 'Den katolske kirke', isCorrect: false },
              { id: 'd', text: 'Buddhistforbundet', isCorrect: false },
            ],
            solution: 'Human-Etisk Forbund er den stoerste livssynsorganisasjonen utenfor kirken med cirka 100 000 medlemmer. De representerer et humanistisk livssyn basert paa fornuft og medmenneskelighet, uten religion.',
          },
          {
            id: 'samfunnskunnskap-2-6-n-quiz1-q1',
            task: 'Omtrent hvor stor andel av Norges befolkning er medlem i Den norske kirke?',
            options: [
              { id: 'a', text: 'Ca. 90%', isCorrect: false },
              { id: 'b', text: 'Ca. 69%', isCorrect: true },
              { id: 'c', text: 'Ca. 40%', isCorrect: false },
              { id: 'd', text: 'Ca. 20%', isCorrect: false },
            ],
            solution: 'Omtrent 69% av befolkningen er medlem i Den norske kirke, men mange er ikke praktiserende. Ca. 12% tilhoerer andre tros- eller livssynssamfunn, og ca. 19% er ikke medlem noe sted.',
          },
          {
            id: 'samfunnskunnskap-2-6-n-quiz1-q2',
            task: 'Hva menes med sekularisering?',
            options: [
              { id: 'a', text: 'At religionen faar mer makt i samfunnet', isCorrect: false },
              { id: 'b', text: 'At alle blir ateister', isCorrect: false },
              { id: 'c', text: 'Prosessen der religionens rolle i samfunnet minsker over tid', isCorrect: true },
              { id: 'd', text: 'At staten forbyr religion', isCorrect: false },
            ],
            solution: 'Sekularisering er prosessen der religionens rolle i samfunnet gradvis minsker. Det betyr ikke at alle slutter aa tro, men at religion faar mindre innflytelse paa politikk, lovgivning og dagligliv. Norge har gjennomgaatt en tydelig sekularisering.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-2-6-n-section2',
      type: 'text',
      content: `## Stat og kirke: En lang skilsmisse

Forholdet mellom stat og religion i Norge har en lang og interessant historie.

Fra 1814 til 2012 var Norge formelt en kristen stat med **statskirke**. Det betood at Den norske kirke hadde en saerstilling -- den var en del av staten, prester var statsansatte, og kongen var kirkens overhode. Kristendommen hadde en privilegert posisjon i samfunnet.

Men i **2012** kom den store reformen. Stat og kirke ble formelt skilt. Det var som en lang skilsmisse som endelig ble gjennomfoert -- etter mange tiaar med debatt. Men "skilsmissen" var ikke total: Den norske kirke er fortsatt omtalt som "Norges folkekirke" i Grunnloven, og kongen maa fortsatt tilhoere den lutherske tro. Staten gir dessuten oekonomisk stoette til alle tros- og livssynssamfunn -- ikke bare Den norske kirke.

**Religionsfrihet** er forankret i Grunnlovens paragraf 16 og er en av de mest grunnleggende rettighetene i et demokrati. Den innebaaerer: rett til aa tro eller ikke tro, rett til aa praktisere sin religion, rett til aa skifte religion, og rett til aa uttrykke religiose meninger. Men religionsfrihet er ikke absolutt -- den maa veies mot andre rettigheter og hensyn. For eksempel kan ikke religioes praksis trumfe barns rettigheter eller andre menneskers sikkerhet.

Staten skal ideelt sett vaere **noytral** -- behandle alle tros- og livssynssamfunn likt, samtidig som den tar hensyn til religionens historiske plass i samfunnet. I praksis er denne balansen krevende og gjenstand for debatt.

Debatten om religiose plagg i offentligheten illustrerer dette godt. Boer hijab vaere tillatt overalt? Hva med paa politifolk eller dommere? Tilhengere av full frihet argumenterer med religionsfrihet og individets rett til aa bestemme over egen klesdrakt. De som oensker visse begrensninger, vektlegger at offentlige institusjoner boer vaere noytrale. Norge har i hovedsak valgt en liberal linje der religiose plagg er tillatt i skole og offentlighet, men debatten paaaar. Ulike europeiske land har valgt ulike loesninger: Frankrike forbyr religiose symboler i offentlig skole, Storbritannia har stor frihet, og Norge ligger et sted imellom.`,
    },
    {
      id: 'samfunnskunnskap-2-6-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-6-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa stat, kirke og religionsfrihet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-2-6-n-quiz2-q0',
            task: 'Hva skjedde med forholdet mellom stat og kirke i 2012?',
            options: [
              { id: 'a', text: 'Den norske kirke ble lagt ned', isCorrect: false },
              { id: 'b', text: 'Stat og kirke ble formelt skilt, men kirken er fortsatt "Norges folkekirke" i Grunnloven', isCorrect: true },
              { id: 'c', text: 'Norge ble en islamsk stat', isCorrect: false },
              { id: 'd', text: 'Alle religioner ble forbudt', isCorrect: false },
            ],
            solution: '2012-reformen skilte formelt stat og kirke. Den norske kirke er ikke lenger statskirke, men er fortsatt "Norges folkekirke" i Grunnloven. Kongen maa fortsatt vaere lutheraner. Staten stoetter alle trossamfunn oekonomisk.',
          },
          {
            id: 'samfunnskunnskap-2-6-n-quiz2-q1',
            task: 'Hva innebaaerer religionsfrihet ifoelge Grunnloven?',
            options: [
              { id: 'a', text: 'At man er fri fra all religion', isCorrect: false },
              { id: 'b', text: 'Rett til aa tro eller ikke tro, praktisere sin religion, skifte religion og uttrykke religiose meninger', isCorrect: true },
              { id: 'c', text: 'At alle maa vaere medlem i et trossamfunn', isCorrect: false },
              { id: 'd', text: 'At religion kun er tillatt i private hjem', isCorrect: false },
            ],
            solution: 'Religionsfrihet (Grunnloven paragraf 16) gir rett til aa tro eller ikke tro, praktisere sin religion, skifte religion og uttrykke religiose meninger. Men den er ikke absolutt -- den maa veies mot andre rettigheter som barns rettigheter.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-2-6-n-summary',
      type: 'text',
      content: `## Oppsummering

Religion og livssyn beroerer noe av det mest personlige i menneskelivet -- vaare dypeste overbevisninger og verdier. Her er det viktigste fra dette kapittelet:

- **Religion i Norge**: Fra et religiost homogent samfunn til livssynsmangfold med kristendom, islam, humanisme og mange andre religioner og livssyn.
- **Stat og kirke**: Den norske kirke ble formelt skilt fra staten i 2012, men er fortsatt Norges folkekirke i Grunnloven. Staten stoetter alle trossamfunn oekonomisk.
- **Religionsfrihet**: Grunnloven paragraf 16 sikrer rett til aa tro, praktisere, skifte religion og uttrykke religiose meninger -- men friheten maa balanseres mot andre rettigheter.
- **Religiost mangfold**: Skaper debatter om religiose plagg, noeytralitet i offentlige institusjoner og tilrettelegging i skolen -- debatter som ulike land loeser paa ulike maater.

I bunn og grunn handler dette kapittelet om en av de viktigste balansegangene i et demokrati: hvordan vi kan respektere hverandres dypeste overbevisninger og samtidig leve sammen i et felles samfunn.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.7 NARRATIV: Innvandring og integrering
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_2_7_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-2-7-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '2.7',
  title: 'Innvandring og integrering',
  subtitle: 'Narrativ versjon',
  description: 'Historien om hvordan innvandring forandret Norge -- fra de foerste arbeidsinnvandrerne paa 1970-tallet til dagens mangfoldige samfunn -- og de vanskelige spoersmaalene om integrering.',
  estimatedMinutes: 20,
  competenceGoals: [
    'droefte innvandring og integrering i Norge',
    'reflektere over ulike perspektiver paa innvandringspolitikk',
  ],
  linkedChapterId: 'samfunnskunnskap-2-7',
  content: [
    {
      id: 'samfunnskunnskap-2-7-n-intro',
      type: 'text',
      content: `## Et land i endring

Hvis du kunne reise tilbake i tid til Norge i 1960, ville du knapt sett et utenlandsk ansikt paa gata. Norge var et av de mest homogene landene i Europa -- nesten alle var etnisk norske, kristne og hvite. Innvandring var nesten ikke-eksisterende. Faktisk hadde Norge historisk vaert et **utvandrerland** -- hundretusenvis av nordmenn emigrerte til Amerika paa 1800- og 1900-tallet i soek etter et bedre liv.

I dag er bildet et helt annet. Omtrent **en million mennesker** i Norge har innvandrerbakgrunn -- det vil si at de enten er foedt i utlandet av to utenlandsfoedte foreldre, eller er foedt i Norge av to innvandrerforeldre. Folk fra over 200 land bor i Norge. I Oslo har omtrent 34 prosent av innbyggerne innvandrerbakgrunn. Butikkene selger mat fra hele verden, moskeene staar side om side med kirkene, og i skolegaardene hoerer du spraak fra alle verdenshjooerner.

Denne forandringen har skjedd paa bare 50 aar -- historisk sett et oeyeblikk. Og den har forandret Norge paa dyptgripende maater: oekonomisk, kulturelt og sosialt.

Men **hvorfor** kommer folk til Norge? Det finnes fire hovedgrunner: **arbeid** (saerlig fra EOES-land som Polen og Litauen), **familie** (familiegjenforening med noen som allerede bor i Norge), **flukt** (asyl og beskyttelse for mennesker som flykter fra krig og forfoelgelse), og **utdanning**.

Innvandringspolitikk er et tema der det er betydelig politisk uenighet. Ulike partier og velgere har svart ulike syn paa hvor mye innvandring Norge boer ha og hvordan integreringen boer foregaa. Dette er en av de mest engasjerende debattene i norsk politikk.`,
    },
    {
      id: 'samfunnskunnskap-2-7-n-section1',
      type: 'text',
      content: `## Fra arbeidere til flyktninger: Innvandringens boelger

La oss reise gjennom innvandringens historie til Norge -- for den forteller en fascinerende historie om et land i rask forandring.

**1970-tallet** markerte starten. Norge trengte arbeidskraft, og unge menn fra Pakistan, Tyrkia og Marokko kom for aa jobbe i industrien. De var ofte de foerste i sin familie som forlot hjemlandet, og planen var gjerne aa tjene penger og reise hjem igjen. Men mange ble. De stiftet familie, bygde moskeer og skapte smaa samfunn inni det norske samfunnet. I 1975 innfoerte Norge "innvandringsstopp" -- et vedtak som begrenset arbeidsinnvandringen. Men familiegjenforening fortsatte.

**1980- og 1990-tallet** brakte en ny type innvandring: flyktninger. Mennesker som flyktet fra krig og undertrykkelse i Vietnam, Chile, Iran, Sri Lanka og Bosnia fant beskyttelse i Norge. Boatflyktningene fra Vietnam, flyktningene fra Balkan-krigene -- disse menneskene kom ikke for aa jobbe, men for aa overleve. Norge viste solidaritet og tok imot tusenvis.

**2000-tallet** brakte enda en boelge. Da EU ble utvidet oestover i 2004, kom stor arbeidsinnvandring fra Polen, Litauen og andre oesteuropeiske land. Polske haandverkere, litauiske bygningsarbeidere -- de kom for aa jobbe i et Norge med hoeye loenninger og behov for arbeidskraft. I dag er polakker den stoerste innvandrergruppen i Norge.

**2015** ble et dramatisk aar. Flyktningkrisen brakte tusenvis av asylsoekere fra Syria, Afghanistan og Eritrea til Norges grenser. Over 30 000 soekte asyl -- et tall som rystet det norske mottakssystemet og foerte til politiske innstramminger.

Og i **2022** kom ukrainske flyktninger etter Russlands invasjon -- en ny paamisnelse om at krig og flukt kan ramme ogsaa naer Europa.

Noen viktige begreper: en **innvandrer** er en person foedt i utlandet av to utenlandsfoedte foreldre. En **norskfoedt med innvandrerforeldre** er foedt i Norge av to innvandrerforeldre. En **flyktning** er en person som har faatt beskyttelse (asyl) i et annet land.`,
    },
    {
      id: 'samfunnskunnskap-2-7-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-7-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa innvandringens historie:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-2-7-n-quiz1-q0',
            task: 'Hva kjennetegnet innvandringen til Norge paa 1970-tallet?',
            options: [
              { id: 'a', text: 'Flyktninger fra krig i Europa', isCorrect: false },
              { id: 'b', text: 'Arbeidsinnvandring fra Pakistan, Tyrkia og Marokko, etterfulgt av innvandringsstopp i 1975', isCorrect: true },
              { id: 'c', text: 'Massiv innvandring fra Sverige og Danmark', isCorrect: false },
              { id: 'd', text: 'Studenter fra USA og Storbritannia', isCorrect: false },
            ],
            solution: '1970-tallet var preget av arbeidsinnvandring fra Pakistan, Tyrkia og Marokko. Norge trengte arbeidskraft, og unge menn kom for aa jobbe i industrien. I 1975 innfoerte Norge "innvandringsstopp" som begrenset arbeidsinnvandringen.',
          },
          {
            id: 'samfunnskunnskap-2-7-n-quiz1-q1',
            task: 'Hva foerte til den store arbeidsinnvandringen paa 2000-tallet?',
            options: [
              { id: 'a', text: 'Krig i Midtoosten', isCorrect: false },
              { id: 'b', text: 'EU-utvidelsen oestover -- arbeidsinnvandring fra Polen, Litauen og andre land', isCorrect: true },
              { id: 'c', text: 'At Norge opphevet innvandringsstoppen', isCorrect: false },
              { id: 'd', text: 'Klimaendringer i Soer-Europa', isCorrect: false },
            ],
            solution: 'Da EU ble utvidet oestover i 2004, kom stor arbeidsinnvandring fra Polen, Litauen og andre oesteuropeiske land. De kom for aa jobbe i et Norge med hoeye loenninger og stort behov for arbeidskraft. Polakker er i dag den stoerste innvandrergruppen.',
          },
          {
            id: 'samfunnskunnskap-2-7-n-quiz1-q2',
            task: 'Hva er de fire hovedgrunnene til at folk innvandrer til Norge?',
            options: [
              { id: 'a', text: 'Turisme, sport, kultur og pensjon', isCorrect: false },
              { id: 'b', text: 'Arbeid, familie (gjenforening), flukt (asyl) og utdanning', isCorrect: true },
              { id: 'c', text: 'Bare arbeid og flukt', isCorrect: false },
              { id: 'd', text: 'Religion, politikk, oekonomi og vaer', isCorrect: false },
            ],
            solution: 'Folk kommer til Norge av fire hovedgrunner: arbeid (saerlig fra EOES-land), familie (familiegjenforening), flukt (asyl og beskyttelse fra krig/forfoelgelse) og utdanning. Arbeidsinnvandring er den stoerste kategorien.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-2-7-n-section2',
      type: 'text',
      content: `## Integreringsdebatten: Hvordan lever vi sammen?

Innvandring er eett tema. **Integrering** -- hvordan innvandrere og samfunnet tilpasser seg hverandre -- er et annet. Og det er her debatten virkelig blir intens.

Det finnes to hovedperspektiver. Det foerste legger **vekt paa tilpasning**: innvandrere boer tilpasse seg norsk kultur og verdier. Norskkunnskaper er avgjorende. Arbeidsdeltakelse er det viktigste. Samfunnet maa stille klare forventninger og krav. Logikken er: vi har et velfungerende samfunn med bestemte verdier, og for aa delta maa man laere seg spillereglene.

Det andre perspektivet legger **vekt paa gjensidighet**: integrering er en toveis prosess. Ikke bare innvandrerne, men ogsaa samfunnet maa tilpasse seg. Vi maa respektere kulturelle forskjeller og aktivt bekjempe diskriminering som hindrer integrering. Logikken er: det nytter ikke aa kreve at folk integrerer seg hvis doerene er stengt for dem.

Hvordan maaler vi egentlig om integreringen fungerer? De vanligste indikatorene er: **arbeidsdeltakelse og selvforsoergelse** (har du jobb og klar deg selv oekonomisk?), **spraakkunnskaper** (snakker du norsk godt nok til aa delta i samfunnet?), **utdanning** (tar du eller barna dine utdanning?), **deltakelse i samfunnslivet** (stemmer du ved valg, deltar du i frivillig arbeid?), og **tilslutning til grunnleggende verdier** (stoetter du demokrati og likestilling?).

Det er noen utfordringer de fleste er enige om: hoey arbeidsledighet i noen innvandrergrupper, spraakbarrierer som gjor det vanskelig aa delta, sosial segregering i noen boligomraader, og behov for bedre resultater paa flere omraader.

Men loesningene er det stor uenighet om. Hvor strenge krav kan stilles til innvandrere? Er det rett aa kutte i velferdsgoder for aa motivere til arbeid? Boer det vaere obligatorisk norskopplaering? Og det store spoersmaalet: hvilke krav er det rimelig aa stille for aa faa norsk statsborgerskap?

Noen mener kravene boer vaere strenge: godt norsk spraak, lang botid, selvforsoergelse og kunnskaper om norsk samfunn og verdier. Andre mener kravene boer vaere overkommelige slik at man ikke ekskluderer folk som gjerne vil bidra. De fleste er enige om at norskkunnskaper og kjennskap til samfunnet er viktig -- men noeeyaktig hvor lista skal legges, er et politisk spoersmaal der det finnes helt ulike svar.`,
    },
    {
      id: 'samfunnskunnskap-2-7-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-7-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa integrering:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-2-7-n-quiz2-q0',
            task: 'Hva er de to hovedperspektivene paa integrering?',
            options: [
              { id: 'a', text: 'Tilpasningsperspektivet (innvandrere tilpasser seg) og gjensidperspektivet (begge parter tilpasser seg)', isCorrect: true },
              { id: 'b', text: 'Det oekonomiske og det kulturelle perspektivet', isCorrect: false },
              { id: 'c', text: 'Det liberale og det konservative perspektivet', isCorrect: false },
              { id: 'd', text: 'Det positive og det negative perspektivet', isCorrect: false },
            ],
            solution: 'Det ene perspektivet vektlegger tilpasning: innvandrere boer tilpasse seg norsk kultur, laere spraak og delta i arbeidslivet. Det andre vektlegger gjensidighet: integrering er en toveis prosess der ogsaa samfunnet maa tilpasse seg og bekjempe diskriminering.',
          },
          {
            id: 'samfunnskunnskap-2-7-n-quiz2-q1',
            task: 'Hvilke faktorer maales vanligvis for aa vurdere grad av integrering?',
            options: [
              { id: 'a', text: 'Bare norskkunnskaper', isCorrect: false },
              { id: 'b', text: 'Arbeidsdeltakelse, spraakkunnskaper, utdanning, samfunnsdeltakelse og tilslutning til grunnleggende verdier', isCorrect: true },
              { id: 'c', text: 'Bare om man har norsk statsborgerskap', isCorrect: false },
              { id: 'd', text: 'Antall norske venner', isCorrect: false },
            ],
            solution: 'Vanlige indikatorer paa integrering er: arbeidsdeltakelse og selvforsoergelse, spraakkunnskaper, utdanningsnivaa, deltakelse i samfunnslivet (valg, frivillighet), sosiale nettverk og tilslutning til grunnleggende verdier som demokrati.',
          },
          {
            id: 'samfunnskunnskap-2-7-n-quiz2-q2',
            task: 'Hva kjennetegner den liberale tilnaermingen til innvandringspolitikk?',
            options: [
              { id: 'a', text: 'Stengte grenser og null innvandring', isCorrect: false },
              { id: 'b', text: 'Innvandring beriker samfunnet, aapne grenser, fokus paa rettigheter og mangfold som verdi', isCorrect: true },
              { id: 'c', text: 'Bare arbeidsinnvandring bor vaere tillatt', isCorrect: false },
              { id: 'd', text: 'Alle innvandrere maa konvertere til kristendommen', isCorrect: false },
            ],
            solution: 'Den liberale tilnaermingen mener innvandring beriker samfunnet, vektlegger aapne grenser og generoes asylpolitikk, fokuserer paa rettigheter og inkludering, og ser mangfold som en verdi. Den restriktive tilnaermingen vektlegger kontroll, tilpasning og vern om nasjonal kultur.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-2-7-n-summary',
      type: 'text',
      content: `## Oppsummering

Innvandring har forandret Norge grunnleggende paa bare 50 aar. Her er det viktigste fra dette kapittelet:

- **Innvandringens historie**: Fra arbeidsinnvandring paa 1970-tallet via flyktningboelger paa 1980-90-tallet og EU-arbeidsinnvandring paa 2000-tallet til dagens mangfoldige innvandring.
- **Ulike perspektiver**: Liberal tilnaerming vektlegger aapenhet, rettigheter og mangfold. Restriktiv tilnaerming vektlegger kontroll, tilpasning og nasjonalt samhold. De fleste befinner seg et sted imellom.
- **Integrering**: Handler om arbeidsdeltakelse, spraakkunnskaper, utdanning og deltakelse i samfunnslivet. Det er debatt om integrering primaert er innvandrernes ansvar eller en gjensidig prosess.
- **Politisk debatt**: Det er betydelig uenighet om innvandringsnivaa, krav til integrering og veien til statsborgerskap -- og denne debatten er en av de mest engasjerende i norsk politikk.

Det viktigste aa ta med seg er kanskje dette: innvandring og integrering handler om ekte mennesker -- mennesker som har forlatt alt de kjente for aa bygge et nytt liv. Uansett hvilket politisk syn man har, fortjener disse menneskene aa bli sett som individer med droemmer, frykt og haaap -- ikke bare som tall i statistikken.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport for Del 2 Narrativ
// ============================================================================

export const SAMFUNNSKUNNSKAP_NARRATIV_DEL2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMFUNNSKUNNSKAP_2_1_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_2_2_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_2_3_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_2_4_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_2_5_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_2_6_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_2_7_NARRATIV,
];
