/**
 * Norsk VG3 - Narrative versjoner Del 8 (Kapittel 7.1-7.3 og 8.1-8.4)
 *
 * Engasjerende, fortellende versjoner av kapitlene om samtidsforfattere og analyse,
 * optimalisert for lesing/lytting.
 * Hver narrativ versjon linker tilbake til originalkapittelet via linkedChapterId.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 7.1 NARRATIV: Jon Fosse - Nobelprisen 2023
// ============================================================================

export const CHAPTER_NORSK_VG3_7_1_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-7-1-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '7.1',
  title: 'Jon Fosse - Nobelprisen 2023',
  subtitle: 'Narrativ versjon',
  description: 'Møt Norges fjerde nobelprisvinner i litteratur - mannen som gir røst til det uutsigelige gjennom stillhet, pauser og gjentakelser.',
  estimatedMinutes: 40,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
    'reflektere over hvordan litteraturen speiler og påvirker samfunnet',
  ],
  linkedChapterId: 'norsk-vg3-7-1',
  content: [
    {
      id: 'norsk-vg3-7-1-n-intro',
      type: 'text',
      content: `## En telefon fra Stockholm

Det er 5. oktober 2023. Jon Fosse sitter i leiligheten sin i Oslo da telefonen ringer. På den andre enden er en stemme fra Svenska Akademien. Budskapet er enkelt, men overveldende: Han har vunnet Nobelprisen i litteratur.

Fosse blir den fjerde nordmannen noensinne som mottar denne æren, etter Bjørnstjerne Bjørnson i 1903, Knut Hamsun i 1920 og Sigrid Undset i 1928. Det er nesten hundre år siden forrige gang.

Begrunnelsen fra Akademien lyder: «for hans nyskapande skodespel og prosa som gjev røyst til det usegjelege». Det uutsigelige. Det som ikke kan sies med vanlige ord, men som Fosse likevel får frem - gjennom stillheten mellom ordene, gjennom gjentakelsene, gjennom det som nesten blir sagt, men ikke helt.

For mange nordmenn er dette øyeblikket en overraskelse. Fosse har vært en kjent forfatter i litterære kretser i årtier, en av verdens mest spilte dramatikere. Men for det brede publikum er han fremdeles litt av en gåte - en forfatter som skriver på nynorsk, om ensomhet og stillhet, i et språk som kan virke fremmed og utilgjengelig.

La oss bli bedre kjent med denne mannen og hans unike forfatterskap.`,
    },
    {
      id: 'norsk-vg3-7-1-n-section1',
      type: 'text',
      content: `## Fra Hardangerfjorden til verdensscenen

Jon Olav Fosse ble født 29. september 1959 i Haugesund, men det er landskapet i Strandebarm i Hardanger som har formet ham som forfatter. Her, ved fjorden, mellom de bratte fjellene og det stille vannet, vokste han opp.

Dette landskapet gjennomsyrer alt Fosse skriver. Fjorden dukker opp i drama etter drama, roman etter roman. Det er ikke bare et bakteppe - det er nesten en egen karakter. Vannet som ligger der, svart og dypt. Fjellene som rammer inn horisonten. Den overveldende stillheten som kan føles både fredelig og truende.

Som ung studerte Fosse litteraturvitenskap ved Universitetet i Bergen. Han debuterte i 1983 med romanen «Raudt, svart», en eksperimentell tekst som allerede viste hans interesse for å utforske språkets grenser. Men det var ikke prosa som skulle gjøre ham verdensberømt.

Det store gjennombruddet kom med teateret. I 1994 ble stykket «Og aldri skal vi skiljast» satt opp. Dette var noe helt nytt i norsk dramatikk - et stykke nesten uten handling i tradisjonell forstand, der det meste foregår i pausene mellom ordene.

Kritikerne var usikre. Noen syntes det var kjedelig og repetitivt. Men andre så noe helt spesielt: En ny stemme i europeisk teater, en forfatter som turte å være langsom i en stadig raskere verden.`,
    },
    {
      id: 'norsk-vg3-7-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-7-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på Fosses bakgrunn:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-7-1-n-quiz1-q0',
            task: 'Hvilket landskap har særlig preget Jon Fosses forfatterskap?',
            options: [
              { id: 'a', text: 'Oslofjorden og bylivet', isCorrect: false },
              { id: 'b', text: 'Hardangerfjorden og Vestlandsnaturen', isCorrect: true },
              { id: 'c', text: 'Nordlandskysten og fiskermiljøet', isCorrect: false },
              { id: 'd', text: 'Østerdalen og skoglandskapet', isCorrect: false },
            ],
            solution: 'Fosse vokste opp i Strandebarm i Hardanger, og dette landskapet -- fjorden, fjellene, stillheten -- gjennomsyrer hele hans forfatterskap.',
          },
          {
            id: 'norsk-vg3-7-1-n-quiz1-q1',
            task: 'Hvilket teaterstykke ga Fosse sitt store gjennombrudd?',
            options: [
              { id: 'a', text: '«Raudt, svart» (1983)', isCorrect: false },
              { id: 'b', text: '«Eg er vinden» (2007)', isCorrect: false },
              { id: 'c', text: '«Og aldri skal vi skiljast» (1994)', isCorrect: true },
              { id: 'd', text: '«Nokon kjem til å komme» (1999)', isCorrect: false },
            ],
            solution: 'Gjennombruddet kom med «Og aldri skal vi skiljast» i 1994. Dette var noe helt nytt i norsk dramatikk -- et stykke nesten uten handling der det meste foregår i pausene mellom ordene.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-7-1-n-section2',
      type: 'text',
      content: `## Fosse-stilen: Når mindre er mer

Hvordan kjenne igjen en tekst av Jon Fosse? Det er faktisk ganske enkelt. Stil deg et språk som er det motsatte av alt vi vanligvis forbinder med god skriving: Korte, ufullstendige setninger. Gjentakelser av samme ord og fraser, om og om igjen. Lange pauser. Og nesten ingen handling.

La oss se på et typisk eksempel fra dramaet «Nokon kjem til å komme»:

*Ho ser på han*
*Pause*
*Han ser ned*
*Pause*
*HO: Kvifor seier du ikkje noko*
*Pause*
*HAN: Eg veit ikkje kva eg skal seie*

På overflaten er dette nesten ingenting. To mennesker som ikke klarer å snakke sammen. Men det er nettopp i dette «nesten ingenting» at Fosse finner sitt stoff. Ensomheten mellom mennesker som er sammen. Ordene som ikke strekker til. Stillheten som fylles av alt det usagte.

Gjentakelsene, som kan virke irriterende ved første lesning, har en musikalsk funksjon. De skaper rytme, bygger opp intensitet, lar ordene synke inn. Det er nesten som et mantra, en meditasjon.

Kritikerne har sammenlignet Fosse med Samuel Beckett, den irske dramatikeren som skrev «Mens vi venter på Godot». Begge utforsker eksistensiell ensomhet og kommunikasjonens sammenbrudd. Men der Beckett ofte er absurd og humoristisk, er Fosse mer alvorlig, mer poetisk, mer rotfestet i et konkret landskap.`,
    },
    {
      id: 'norsk-vg3-7-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-7-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på Fosse-stilen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-7-1-n-quiz2-q0',
            task: 'Hva kjennetegner «Fosse-stilen»?',
            options: [
              { id: 'a', text: 'Lange, kompliserte setninger med mange adjektiver', isCorrect: false },
              { id: 'b', text: 'Korte setninger, gjentakelser, pauser og lite handling', isCorrect: true },
              { id: 'c', text: 'Actionfylte scener med mye dialog', isCorrect: false },
              { id: 'd', text: 'Humoristiske dialoger med ordspill', isCorrect: false },
            ],
            solution: 'Fosse-stilen kjennetegnes av minimalistisk språk med korte, ofte ufullstendige setninger, mange pauser, gjentakelser av ord og fraser, og lite ytre handling.',
          },
          {
            id: 'norsk-vg3-7-1-n-quiz2-q1',
            task: 'Hvilken funksjon har gjentakelsene i Fosses tekster?',
            options: [
              { id: 'a', text: 'De fyller ut teksten slik at den blir lengre', isCorrect: false },
              { id: 'b', text: 'De skaper rytme, bygger intensitet og lar ordene synke inn', isCorrect: true },
              { id: 'c', text: 'De er tilfeldige skrivefeil som aldri ble rettet', isCorrect: false },
              { id: 'd', text: 'De er ment som humor for å underholde leseren', isCorrect: false },
            ],
            solution: 'Gjentakelsene har en musikalsk funksjon: de skaper rytme, bygger opp intensitet og lar ordene synke inn. Det er nesten som et mantra, en meditasjon.',
          },
          {
            id: 'norsk-vg3-7-1-n-quiz2-q2',
            task: 'Hvilken dramatiker sammenlignes Fosse ofte med?',
            options: [
              { id: 'a', text: 'William Shakespeare', isCorrect: false },
              { id: 'b', text: 'August Strindberg', isCorrect: false },
              { id: 'c', text: 'Samuel Beckett', isCorrect: true },
              { id: 'd', text: 'Bertolt Brecht', isCorrect: false },
            ],
            solution: 'Fosse sammenlignes ofte med Samuel Beckett, som skrev «Mens vi venter på Godot». Begge utforsker eksistensiell ensomhet og kommunikasjonens sammenbrudd, men Fosse er mer poetisk og rotfestet i et konkret landskap.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-7-1-n-section3',
      type: 'text',
      content: `## Septologien: En setning på 1200 sider

I 2019 begynte Fosse å utgi det som skulle bli hans magnum opus: «Septologien». Dette er et prosaverk i tre bind som til sammen utgjør syv «bøker» - derav navnet. Totalt er det over 1200 sider.

Men her er det virkelig spesielle: Hele verket er skrevet i én lang, ubrutt setning. Ingen punktum fra første til siste side. Bare kommaer og «og» som binder alt sammen i en endeløs strøm av bevissthet.

Hovedpersonen er maleren Asle, som bor alene i et gammelt hus ved en fjord. En dag møter han en annen mann - også en maler, også ved navn Asle. Denne andre Asle er alkoholiker, på vei mot undergangen. Er han en virkelig person, eller et speilbilde av hvem hovedpersonen kunne blitt?

Gjennom tusenvis av sider kretser tankene rundt kunst, tro, kjærlighet, tap og død. Det er meditativt, repetitivt, hypnotisk. Mange lesere gir opp etter noen sider. Men de som holder ut, opplever noe helt spesielt: En følelse av å synke ned i en annen bevissthet, en annen rytme, en annen måte å være i verden på.

Her er et lite smakebite på stilen: «og eg tenkjer at eg må slutte å drikke, tenkjer eg, og eg ser mot vindauget og eg ser på den svarte fjorden og eg tenkjer at det er kveld no...»

«Septologien» handler også om tro. I 2013 konverterte Fosse til katolisismen, og denne troen gjennomsyrer verket. Det er ikke forkynnende, men mystisk - troen som et anker i en kaotisk tilværelse, bønnen som struktur i en fragmentert verden.`,
    },
    {
      id: 'norsk-vg3-7-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-7-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på Septologien:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-7-1-n-quiz3-q0',
            task: 'Hva er spesielt med formen i «Septologien»?',
            options: [
              { id: 'a', text: 'Den er skrevet som et tradisjonelt drama med dialoger', isCorrect: false },
              { id: 'b', text: 'Den er skrevet i dikt med strenge rimskjemaer', isCorrect: false },
              { id: 'c', text: 'Hele verket er skrevet som én lang, ubrutt setning', isCorrect: true },
              { id: 'd', text: 'Den veksler mellom syv forskjellige fortellerstemmer', isCorrect: false },
            ],
            solution: '«Septologien» er skrevet uten et eneste punktum -- hele verket på over 1200 sider er én lang setning der kommaer og «og» erstatter punktum.',
          },
          {
            id: 'norsk-vg3-7-1-n-quiz3-q1',
            task: 'Hva handler «Septologien» om?',
            options: [
              { id: 'a', text: 'En maler som bor alene ved en fjord og møter et speilbilde av seg selv', isCorrect: true },
              { id: 'b', text: 'Syv vikingkonger som kjemper om Norge', isCorrect: false },
              { id: 'c', text: 'Et ektepar som reiser gjennom Europa', isCorrect: false },
              { id: 'd', text: 'En skole der syv elever opplever drama', isCorrect: false },
            ],
            solution: 'Hovedpersonen er maleren Asle, som bor alene ved en fjord. Han møter en annen maler, også ved navn Asle, som er alkoholiker. Verket kretser rundt kunst, tro, kjærlighet, tap og død.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-7-1-n-section4',
      type: 'text',
      content: `## Fosse og Ibsen: To norske giganter

Det er nesten umulig å snakke om Jon Fosse uten å sammenligne ham med Henrik Ibsen. Begge har revolusjonert teateret i sin tid. Begge har vunnet internasjonal anerkjennelse som få andre norske forfattere. Begge utforsker det som skjer mellom mennesker når kommunikasjonen svikter.

Men likhetene stopper der. Ibsen driver handlingen fremover med nye avsløringer, hemmeligheter som kommer for dagen, konflikter som kulminerer. Hos Fosse skjer det nesten ingenting - i hvert fall ikke ytre. Spenningen ligger ikke i hva som vil bli avslørt, men i selve tilstanden av å være menneske.

Der Ibsen bruker mange ord for å avdekke sannheten, bruker Fosse få ord for å antyde det uutsigelige. Der Ibsen bygger mot katastrofe, skaper Fosse stillstand. Der Ibsen kritiserer samfunnet, utforsker Fosse eksistensen.

Man kan si at Ibsen er den ytre dramatikeren - han viser oss samfunnet og dets konflikter. Fosse er den indre dramatikeren - han viser oss sjelen og dens ensomhet.

At Norge har fostret begge disse giganterne, er bemerkelsesverdig. Et lite land i utkanten av Europa har gitt verden to av dens viktigste dramatikere. Fra Ibsens realistiske stuer til Fosses minimalistiske scener strekker det seg en linje av norsk teater som har påvirket hele verden.`,
    },
    {
      id: 'norsk-vg3-7-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-7-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på Fosse og Ibsen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-7-1-n-quiz4-q0',
            task: 'Hva er hovedforskjellen mellom Ibsens og Fosses dramatikk?',
            options: [
              { id: 'a', text: 'Ibsen skrev komedier, Fosse skriver tragedier', isCorrect: false },
              { id: 'b', text: 'Ibsen er plotdrevet med avsløringer, Fosse er stemningsdrevet med stillstand', isCorrect: true },
              { id: 'c', text: 'Ibsen skrev på nynorsk, Fosse skriver på bokmål', isCorrect: false },
              { id: 'd', text: 'Ibsen skrev for teater, Fosse skriver bare romaner', isCorrect: false },
            ],
            solution: 'Ibsen driver handlingen fremover med hemmeligheter og avsløringer mot et klimaks, mens Fosse fokuserer på stemning og tilstand.',
          },
          {
            id: 'norsk-vg3-7-1-n-quiz4-q1',
            task: 'Man kan si at Ibsen er den ytre dramatikeren og Fosse er den indre. Hva betyr det?',
            options: [
              { id: 'a', text: 'Ibsen skriver utendørsscener, Fosse skriver innendørsscener', isCorrect: false },
              { id: 'b', text: 'Ibsen viser samfunnet og dets konflikter, Fosse viser sjelen og dens ensomhet', isCorrect: true },
              { id: 'c', text: 'Ibsen er mer berømt internasjonalt enn Fosse', isCorrect: false },
              { id: 'd', text: 'Ibsen skriver lengre stykker enn Fosse', isCorrect: false },
            ],
            solution: 'Ibsen er den ytre dramatikeren som kritiserer samfunnet og viser konflikter. Fosse er den indre dramatikeren som utforsker eksistensen, sjelen og ensomheten.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-7-1-n-section5',
      type: 'text',
      content: `## Nynorsk som kunstnerisk valg

Jon Fosse skriver konsekvent på nynorsk. Dette er ikke bare et språkpolitisk valg - det er et kunstnerisk grep som er sentralt for hans forfatterskap.

Fosse har selv forklart at nynorsk gir ham en nødvendig avstand til hverdagsspråket. Når man skriver på et språk som er litt fremmed, litt annerledes enn det man snakker til daglig, blir det lettere å skape noe nytt. Ordene blir ikke selvfølgelige. Man må tenke over hvert eneste ord.

Nynorsken har også en klang som passer Fosses prosjekt. Det er et språk som er nærmere dialektene, nærmere naturen, nærmere det arkaiske. Når Fosse skriver «eg» i stedet for «jeg», «kvifor» i stedet for «hvorfor», skaper det en stemning som er annerledes enn bokmål ville gitt.

Nobelprisens begrunnelse var skrevet på nynorsk: «for hans nyskapande skodespel og prosa som gjev røyst til det usegjelege». Dette var en anerkjennelse ikke bare av Fosse, men av nynorsk som litterært språk på høyeste nivå.

Hva er egentlig «det usegjelege» - det uutsigelige - som Fosse gir røst til? Det er det som ligger under ordene. Ensomheten vi alle bærer på. Lengselen etter kontakt som aldri helt blir oppfylt. Frykten for døden. Det hellige i hverdagen. Alt dette som vanlige ord ikke kan fange, men som Fosse likevel får frem - gjennom stillheten, pausene, gjentakelsene, det minimalistiske språket som peker mot noe større enn seg selv.`,
    },
    {
      id: 'norsk-vg3-7-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-7-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på Fosse og nynorsk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-7-1-n-quiz5-q0',
            task: 'Hvorfor skriver Jon Fosse på nynorsk?',
            options: [
              { id: 'a', text: 'Fordi han er pålagt det av forlaget sitt', isCorrect: false },
              { id: 'b', text: 'Fordi nynorsk gir avstand til hverdagsspråket og gjør det lettere å skape noe nytt', isCorrect: true },
              { id: 'c', text: 'Fordi nynorsk er lettere å oversette til andre språk', isCorrect: false },
              { id: 'd', text: 'Fordi han ikke kan bokmål', isCorrect: false },
            ],
            solution: 'Fosse har forklart at nynorsk gir ham nødvendig avstand til hverdagsspråket. Når språket er litt fremmed, må man tenke over hvert ord.',
          },
          {
            id: 'norsk-vg3-7-1-n-quiz5-q1',
            task: 'Hva var Nobelprisens begrunnelse for Fosse?',
            options: [
              { id: 'a', text: '«For hans sterke samfunnskritikk og politiske engasjement»', isCorrect: false },
              { id: 'b', text: '«For hans nyskapande skodespel og prosa som gjev røyst til det usegjelege»', isCorrect: true },
              { id: 'c', text: '«For hans store bidrag til kriminallitteraturen»', isCorrect: false },
              { id: 'd', text: '«For hans historiske romaner om vikingtiden»', isCorrect: false },
            ],
            solution: 'Begrunnelsen var «for hans nyskapande skodespel og prosa som gjev røyst til det usegjelege» -- det uutsigelige som Fosse får frem gjennom stillheten, pausene og gjentakelsene.',
          },
          {
            id: 'norsk-vg3-7-1-n-quiz5-q2',
            task: 'Hva er «det usegjelege» som Fosse gir røst til?',
            options: [
              { id: 'a', text: 'Politiske hemmeligheter som staten skjuler', isCorrect: false },
              { id: 'b', text: 'Ting som er forbudt å si i Norge', isCorrect: false },
              { id: 'c', text: 'Ensomhet, lengsel, frykt og det hellige som vanlige ord ikke fanger', isCorrect: true },
              { id: 'd', text: 'Historiske hendelser som er glemt', isCorrect: false },
            ],
            solution: 'Det uutsigelige er det som ligger under ordene: ensomheten vi alle bærer på, lengselen etter kontakt, frykten for døden, det hellige i hverdagen -- alt som vanlige ord ikke kan fange.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-7-1-n-summary',
      type: 'text',
      content: `## Oppsummering

**Jon Fosse (f. 1959)** mottok Nobelprisen i litteratur i 2023 - Norges fjerde nobelprisvinner etter Bjørnson, Hamsun og Undset.

**Bakgrunn:**
- Født i Haugesund, oppvokst i Strandebarm, Hardanger
- Debuterte med romanen «Raudt, svart» (1983)
- Gjennombrudd som dramatiker med «Og aldri skal vi skiljast» (1994)
- Konverterte til katolisismen i 2013

**Fosse-stilen:**
- Minimalistisk språk med korte, ofte ufullstendige setninger
- Mange pauser og gjentakelser
- Lite ytre handling - fokus på tilstander
- Musikalsk rytme og meditativ stemning

**Viktige verk:**
- Dramaer: «Nokon kjem til å komme», «Eg er vinden»
- Prosa: «Septologien» (2019-2021) - skrevet som én lang setning

**Temaer:**
- Ensomhet og lengsel etter kontakt
- Det uutsigelige - det som ikke kan sies med ord
- Tro og mystikk
- Forholdet mellom kunst og liv

**Nynorsk:** Fosse skriver konsekvent på nynorsk, som gir avstand til hverdagsspråket og skaper en særegen stemning.

**Nobelprisens begrunnelse:** «for hans nyskapande skodespel og prosa som gjev røyst til det usegjelege»`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.2 NARRATIV: Karl Ove Knausgård
// ============================================================================

export const CHAPTER_NORSK_VG3_7_2_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-7-2-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '7.2',
  title: 'Karl Ove Knausgård',
  subtitle: 'Narrativ versjon',
  description: 'Møt forfatteren som sjokkerte verden ved å skrive 3600 sider om sitt eget liv - og skapte en helt ny litterær sjanger.',
  estimatedMinutes: 35,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'reflektere over hvordan litteraturen speiler og påvirker samfunnet',
    'skrive litterære analyser og sammenligninger',
  ],
  linkedChapterId: 'norsk-vg3-7-2',
  content: [
    {
      id: 'norsk-vg3-7-2-n-intro',
      type: 'text',
      content: `## 3600 sider om å skifte bleier

I 2009 skjedde noe merkelig i norsk litteratur. En forfatter ved navn Karl Ove Knausgård utga første bind av et verk som het «Min kamp». Det var en roman - eller var det? - om hans eget liv. Ikke de store hendelsene, de dramatiske øyeblikkene. Nei, det handlet om hverdagen: Å skifte bleier. Å handle brød. Å rydde opp etter sin døde far. Å føle skam over småting.

Folk ristet på hodet. Hvem ville lese om slikt? Hvem brydde seg om en middelaldrende manns kamp med bleier og bagateller?

Svaret viste seg å være: Nesten alle.

«Min kamp» ble en sensasjon. Først i Norge, der den solgte hundretusener av eksemplarer. Så i resten av verden. I USA ble Knausgård omtalt som en litterær rockestjerne. Kritikere kalte verket et mesterverk. Andre kalte det navlebeskuende selvopptatthet. Debatten raste.

Over seks bind og 3600 sider skildret Knausgård sitt eget liv i detalj så intim at leserne følte de kjente ham bedre enn sine egne venner. Og spørsmålene hopet seg opp: Var dette litteratur eller bare en enorm dagbok? Hadde han rett til å utlevere familie og venner? Og hvorfor i all verden kalte han verket «Min kamp» - den samme tittelen som Hitlers bok?`,
    },
    {
      id: 'norsk-vg3-7-2-n-section1',
      type: 'text',
      content: `## Hvem er Karl Ove Knausgård?

Karl Ove Knausgård ble født 6. desember 1968 i Oslo, men vokste opp på Tromøya utenfor Arendal og senere i Kristiansand. Faren var lærer, en autoritær og etter hvert alkoholisert mann som skulle bli en sentral skikkelse i sønnens forfatterskap.

Knausgård debuterte i 1998 med romanen «Ute av verden», som fikk Kritikerprisen - den høyest rangerte litterære prisen for debutanter i Norge. Han var tydelig et talent. Men de neste romanene solgte bare middels, og Knausgård følte seg fanget i en litterær blindgate.

Så bestemte han seg for noe radikalt. Han skulle slutte å dikte. Han skulle skrive om sitt eget liv, akkurat slik det var. Ingen filter. Ingen forskjønnelse. Ingen anonymisering av personene rundt ham.

Resultatet ble «Min kamp». Første bind handler om farens død og ryddingen av barndomshjemmet, fullt av tomflasker og forfall. De følgende bindene tar oss gjennom ungdom, tidlig voksenliv, første ekteskap, skilsmisse, nytt ekteskap, barn, og selve skriveprosessen.

Knausgård bruker ekte navn på virkelige mennesker. Hans ekskone, hans nåværende kone, hans bror, onkler, venner - alle er der med fullt navn. Flere av dem reagerte sterkt. Onkelen vurderte søksmål. Ekshustruen ga intervjuer om hvor vondt det var å bli utlevert.`,
    },
    {
      id: 'norsk-vg3-7-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-7-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på Knausgårds bakgrunn:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-7-2-n-quiz1-q0',
            task: 'Hvor mange bind og sider utgjør Knausgårds «Min kamp»?',
            options: [
              { id: 'a', text: 'Tre bind og 1200 sider', isCorrect: false },
              { id: 'b', text: 'Seks bind og 3600 sider', isCorrect: true },
              { id: 'c', text: 'Fire bind og 2000 sider', isCorrect: false },
              { id: 'd', text: 'Ti bind og 5000 sider', isCorrect: false },
            ],
            solution: '«Min kamp» består av seks bind med til sammen over 3600 sider. Verket ble utgitt mellom 2009 og 2011.',
          },
          {
            id: 'norsk-vg3-7-2-n-quiz1-q1',
            task: 'Hva var spesielt kontroversielt med «Min kamp»?',
            options: [
              { id: 'a', text: 'At den var skrevet på nynorsk', isCorrect: false },
              { id: 'b', text: 'At Knausgård brukte ekte navn på virkelige mennesker', isCorrect: true },
              { id: 'c', text: 'At den inneholdt politiske påstander', isCorrect: false },
              { id: 'd', text: 'At den var for kort og overfladisk', isCorrect: false },
            ],
            solution: 'Knausgård brukte ekte navn på virkelige mennesker -- ekskone, nåværende kone, bror, onkler, venner. Flere reagerte sterkt, og onkelen vurderte søksmål.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-7-2-n-section2',
      type: 'text',
      content: `## Virkelighetslitteratur: En ny sjanger?

Det Knausgård gjorde, hadde selvsagt blitt gjort før. Selvbiografier og memoarer er en eldgammel sjanger. Men «Min kamp» var noe annet. Det var ikke bare en fortelling om forfatterens liv - det var litteratur som brukte virkeligheten som råmateriale, men formet den med romanens virkemidler.

Dette kalles nå ofte «virkelighetslitteratur» eller «autofiksjon». Grensen mellom selvbiografi og roman viskes ut. Forfatteren er hovedperson, hendelsene er (stort sett) virkelige, men teksten er likevel litterært formet - strukturert, rytmisk, med bevisste valg av hva som inkluderes og hvordan det fortelles.

Knausgård var ikke alene om dette. Den franske forfatteren Annie Ernaux, som vant Nobelprisen i 2022, hadde skrevet lignende verk i årtier. Tomas Espedal i Norge utforsket samme terreng. Men det var Knausgård som virkelig satte sjangeren på kartet, særlig internasjonalt.

Det radikale med «Min kamp» er kombinasjonen av ekstrem ærlighet og tilsynelatende trivialitet. Knausgård skriver om sine egne feigheter, sine små skammer, sine mislyktheter som far og ektemann. Han skriver om hvor lang tid det tar å koke egg, om følelsen av å stå i en matbutikk. Alt dette som vanligvis redigeres bort fra en livsfortelling, beholder han.

Og merkelig nok: Det er nettopp i denne trivialiteten at universaliteten ligger. Lesere over hele verden kjenner seg igjen i disse små øyeblikkene av skam og kjedsomhet, selv om detaljene i deres liv er helt annerledes.`,
    },
    {
      id: 'norsk-vg3-7-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-7-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på virkelighetslitteratur:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-7-2-n-quiz2-q0',
            task: 'Hva kjennetegner «virkelighetslitteratur» som sjanger?',
            options: [
              { id: 'a', text: 'Helt oppdiktede hendelser presentert som sanne', isCorrect: false },
              { id: 'b', text: 'Faktabasert sakprosa uten litterære virkemidler', isCorrect: false },
              { id: 'c', text: 'Forfatterens eget liv som materiale, formet med litterære virkemidler', isCorrect: true },
              { id: 'd', text: 'Historiske romaner basert på arkivmateriale', isCorrect: false },
            ],
            solution: 'Virkelighetslitteratur (autofiksjon) bruker forfatterens eget liv som materiale, men former det med romanens virkemidler.',
          },
          {
            id: 'norsk-vg3-7-2-n-quiz2-q1',
            task: 'Hvilken annen nobelprisvinner hadde jobbet med lignende sjanger som Knausgård?',
            options: [
              { id: 'a', text: 'Jon Fosse', isCorrect: false },
              { id: 'b', text: 'Annie Ernaux', isCorrect: true },
              { id: 'c', text: 'Toni Morrison', isCorrect: false },
              { id: 'd', text: 'Gabriel García Márquez', isCorrect: false },
            ],
            solution: 'Annie Ernaux, som vant Nobelprisen i 2022, hadde skrevet lignende selvbiografiske verk i årtier. Knausgård satte imidlertid sjangeren for alvor på det internasjonale kartet.',
          },
          {
            id: 'norsk-vg3-7-2-n-quiz2-q2',
            task: 'Hvorfor kjenner lesere over hele verden seg igjen i Knausgårds beskrivelser av trivielle hverdagsdetaljer?',
            options: [
              { id: 'a', text: 'Fordi alle har opplevd akkurat det samme som ham', isCorrect: false },
              { id: 'b', text: 'Fordi de små øyeblikkene av skam og kjedsomhet er universelle', isCorrect: true },
              { id: 'c', text: 'Fordi han skriver om et veldig eksotisk liv', isCorrect: false },
              { id: 'd', text: 'Fordi bøkene er oversatt til veldig mange språk', isCorrect: false },
            ],
            solution: 'Nettopp i trivialiteten ligger universaliteten. Lesere over hele verden kjenner seg igjen i de små øyeblikkene av skam og kjedsomhet, selv om detaljene i deres liv er helt annerledes.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-7-2-n-section3',
      type: 'text',
      content: `## Kontroversene: Tittelen og utleveringen

To aspekter ved «Min kamp» skapte særlig debatt. Det første var tittelen. «Min kamp» - «Mein Kampf» på tysk - er også tittelen på Adolf Hitlers bok. Var dette en provokasjon? En dårlig spøk? Eller noe mer?

Knausgård har forklart at tittelen er ment ironisk. Hans «kamp» handler ikke om verdensherredømme, men om hverdagen: kampen med bleier, med skriveblokkeringer, med sin egen utilstrekkelighet. Det er også en kamp med selve skrivingen - kampen for å finne ordene, for å være ærlig, for å skape noe som betyr noe.

I det sjette og siste bindet konfronterer Knausgård tittelen direkte. Han skriver et langt essay om Hitler og nazismen, om ondskap og ideologi. Det er som om han til slutt må forholde seg til den elefanten i rommet han selv har plassert der.

Den andre kontroversen handlet om etikk. Har forfatteren rett til å utlevere andre mennesker - familie, venner, ekspartnere - uten deres samtykke? Flere av de omtalte i boken reagerte sterkt. Knausgårds onkel truet med søksmål. Hans første kone ga intervjuer om hvor vondt det var å bli skildret.

Knausgård selv har erkjent at dette er problematisk. Men han har også forsvart seg: All litteratur bruker virkeligheten. Han skriver fra sitt eget perspektiv, om sitt eget liv. De andre har sine historier, som de kan fortelle selv.

Debatten om dette er ikke avsluttet. Den berører fundamentale spørsmål om kunstens frihet versus privatlivets vern.`,
    },
    {
      id: 'norsk-vg3-7-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-7-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på kontroversene:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-7-2-n-quiz3-q0',
            task: 'Hvorfor er tittelen «Min kamp» kontroversiell?',
            options: [
              { id: 'a', text: 'Fordi den plagierer en annen norsk forfatters verk', isCorrect: false },
              { id: 'b', text: 'Fordi den er den samme tittelen som Hitlers bok', isCorrect: true },
              { id: 'c', text: 'Fordi den avslører hemmelig militær informasjon', isCorrect: false },
              { id: 'd', text: 'Fordi den bryter med norske opphavsrettslover', isCorrect: false },
            ],
            solution: '«Min kamp» er også tittelen på Adolf Hitlers «Mein Kampf». Knausgård har forklart at tittelen er ment ironisk -- hans kamp handler om hverdagen.',
          },
          {
            id: 'norsk-vg3-7-2-n-quiz3-q1',
            task: 'Hvordan forholder Knausgård seg til tittelen «Min kamp» i det siste bindet?',
            options: [
              { id: 'a', text: 'Han ignorerer koblingen helt', isCorrect: false },
              { id: 'b', text: 'Han skriver et langt essay om Hitler og nazismen', isCorrect: true },
              { id: 'c', text: 'Han endrer tittelen til noe annet', isCorrect: false },
              { id: 'd', text: 'Han beklager valget av tittel', isCorrect: false },
            ],
            solution: 'I det sjette og siste bindet konfronterer Knausgård tittelen direkte ved å skrive et langt essay om Hitler og nazismen, ondskap og ideologi.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-7-2-n-section4',
      type: 'text',
      content: `## Åpningen: «For hjertet er livet enkelt»

La oss se nærmere på hvordan «Min kamp» begynner. Første setning i første bind lyder:

«For hjertet er livet enkelt: det slår så lenge det kan. Så stanser det.»

Dette er ikke en tilfeldig åpning. Knausgård begynner ikke med seg selv, ikke med barndommen, ikke med en dramatisk scene. Han begynner med døden. Med hjertets enkle biologi. Med det faktum at vi alle skal dø.

Første bind handler om farens død. Men denne åpningen løfter blikket: Alt det detaljerte, hverdagslige, trivielle som skal komme - bleieskift og brødhyller og smålig irritasjon - alt dette står i relieff mot dødens visshet.

Det er en bevisst strategi. Ved å begynne med det mest fundamentale - liv og død - gir Knausgård leseren en ramme for å forstå hvorfor det hverdagslige betyr noe. Nettopp fordi vi skal dø, betyr de små øyeblikkene noe. Nettopp fordi livet er begrenset, er det verdt å skildre i detalj.

Denne spenningen mellom det trivielle og det eksistensielle går gjennom hele verket. Knausgård kan bruke ti sider på å beskrive hvordan han steker egg, og så plutselig slå over i refleksjoner over kunstens vesen eller dødens realitet. Det er denne vekslingen som gjør «Min kamp» til mer enn en dagbok.`,
    },
    {
      id: 'norsk-vg3-7-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-7-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på åpningen og temaer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-7-2-n-quiz4-q0',
            task: 'Hva handler første bind av «Min kamp» hovedsakelig om?',
            options: [
              { id: 'a', text: 'Knausgårds barndom og ungdomstid', isCorrect: false },
              { id: 'b', text: 'Hans tid som student i Bergen', isCorrect: false },
              { id: 'c', text: 'Farens død og ryddingen av barndomshjemmet', isCorrect: true },
              { id: 'd', text: 'Hans liv som småbarnsfar i Sverige', isCorrect: false },
            ],
            solution: 'Første bind handler primært om farens død og ryddingen av barndomshjemmet, fylt med tomflasker og forfall. Døden rammer inn hele verket.',
          },
          {
            id: 'norsk-vg3-7-2-n-quiz4-q1',
            task: 'Hva er åpningssetningen i «Min kamp» ment å oppnå?',
            options: [
              { id: 'a', text: 'Å sjokkere leseren med en voldelig scene', isCorrect: false },
              { id: 'b', text: 'Å gi en ramme der døden gjør de trivielle detaljene meningsfulle', isCorrect: true },
              { id: 'c', text: 'Å presentere Knausgårds politiske synspunkter', isCorrect: false },
              { id: 'd', text: 'Å fortelle en morsom anekdote', isCorrect: false },
            ],
            solution: 'Ved å begynne med «For hjertet er livet enkelt: det slår så lenge det kan» løfter Knausgård blikket til det mest fundamentale -- liv og død. Nettopp fordi vi skal dø, betyr de små øyeblikkene noe.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-7-2-n-section5',
      type: 'text',
      content: `## Arven etter Knausgård

«Min kamp» har fått enorm innflytelse på samtidslitteraturen. En hel generasjon forfattere har begynt å utforske det selvbiografiske mer åpent, mer detaljert, mer skamløst.

I Norge har forfattere som Vigdis Hjorth utforsket familiekonflikter med lignende ærlighet. Internasjonalt har Ben Lerner, Rachel Cusk og mange andre arbeidet i samme terreng. «Virkelighetslitteratur» er blitt et etablert begrep.

Men Knausgård har også fått kritikk. Noen mener at han er selvopptatt, at han utnytter andre menneskers liv for egen gevinst. Andre mener at sjangeren i seg selv er problematisk - at den utvisker skillet mellom offentlig og privat på en usunn måte.

Uansett hva man mener, er det vanskelig å benekte Knausgårds betydning. Han har vist at det tilsynelatende trivielle kan bli universelt, at ærlighet kan være en litterær metode, at hverdagen er verdt å skildre i detalj.

«Min kamp» stiller også spørsmål som strekker seg utover litteraturen: Hvor går grensen for hva vi kan fortelle om andre? I en tid med sosiale medier og stadig mer offentlige privatliv, er dette spørsmål vi alle må forholde oss til.

Neste gang du leser en selvbiografisk roman eller ser en influencer dele intime detaljer fra livet sitt, kan du tenke på Knausgård. Han åpnet en dør - og det er ikke sikkert den noensinne kan lukkes igjen.`,
    },
    {
      id: 'norsk-vg3-7-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-7-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på arven etter Knausgård:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-7-2-n-quiz5-q0',
            task: 'Hvilken betydning har «Min kamp» hatt for litteraturen?',
            options: [
              { id: 'a', text: 'Den avsluttet interessen for selvbiografisk litteratur', isCorrect: false },
              { id: 'b', text: 'Den inspirerte en hel generasjon forfattere til å utforske virkelighetslitteratur', isCorrect: true },
              { id: 'c', text: 'Den førte til forbud mot å bruke ekte navn i romaner', isCorrect: false },
              { id: 'd', text: 'Den hadde minimal innflytelse utenfor Norge', isCorrect: false },
            ],
            solution: '«Min kamp» inspirerte mange forfattere til å utforske selvbiografisk litteratur og bidro til å etablere virkelighetslitteratur som anerkjent sjanger.',
          },
          {
            id: 'norsk-vg3-7-2-n-quiz5-q1',
            task: 'Hvilke spørsmål reiser «Min kamp» om grensen mellom offentlig og privat?',
            options: [
              { id: 'a', text: 'Om forfattere bør betale skatt av sine bøker', isCorrect: false },
              { id: 'b', text: 'Om hvor langt kunstens frihet rekker versus privatlivets vern', isCorrect: true },
              { id: 'c', text: 'Om bøker bør selges i butikk eller på nett', isCorrect: false },
              { id: 'd', text: 'Om alle bør lese mer selvbiografi', isCorrect: false },
            ],
            solution: '«Min kamp» reiser fundamentale spørsmål om kunstens frihet versus privatlivets vern: Har forfatteren rett til å utlevere andre mennesker -- familie, venner, ekspartnere -- uten samtykke?',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-7-2-n-summary',
      type: 'text',
      content: `## Oppsummering

**Karl Ove Knausgård (f. 1968)** er en av samtidens mest innflytelsesrike norske forfattere.

**Hovedverk: «Min kamp» (2009-2011)**
- Seks bind, over 3600 sider
- Selvbiografisk roman om forfatterens eget liv
- Bruker ekte navn på virkelige mennesker
- Internasjonal bestselger og litterært fenomen

**Virkelighetslitteratur (autofiksjon):**
- Forfatterens liv som materiale
- Formet med litterære virkemidler
- Grensen mellom roman og selvbiografi viskes ut
- Andre forfattere: Annie Ernaux, Tomas Espedal

**Kontroverser:**
- Tittelen «Min kamp» (samme som Hitlers bok)
- Utlevering av familie og venner uten samtykke
- Etiske spørsmål om privatlivets grenser

**Kjennetegn ved stilen:**
- Ekstrem detaljrikdom i hverdagsskildringer
- Veksling mellom trivielle detaljer og eksistensielle refleksjoner
- Åpenhet om egne feil og skammer
- Døden som ramme for livsfortellingen

**Betydning:**
- Inspirerte en generasjon forfattere
- Satte virkelighetslitteratur på kartet
- Utfordret grensene mellom offentlig og privat`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.3 NARRATIV: Mangfoldige stemmer i norsk litteratur
// ============================================================================

export const CHAPTER_NORSK_VG3_7_3_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-7-3-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '7.3',
  title: 'Mangfoldige stemmer i norsk litteratur',
  subtitle: 'Narrativ versjon',
  description: 'Opplev hvordan nye stemmer og perspektiver beriker norsk litteratur - fra Stovner til Hardanger, fra kebabnorsk til samisk.',
  estimatedMinutes: 35,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'reflektere over mangfold i litteraturen',
    'reflektere over hvordan litteraturen speiler og påvirker samfunnet',
  ],
  linkedChapterId: 'norsk-vg3-7-3',
  content: [
    {
      id: 'norsk-vg3-7-3-n-intro',
      type: 'text',
      content: `## To gutter fra Stovner

På Stovner i Oslo vokser to gutter opp side om side. De går på samme skole, henger i de samme gatene, kjenner de samme folkene. Men de velger vidt forskjellige veier.

Mo jobber hardt på skolen. Han tilpasser seg, lærer seg å snakke «ordentlig» norsk, får gode karakterer, kommer inn på økonomistudiet. Han blir alt foreldrene hans drømte om da de kom til Norge.

Jamal gir blaffen. Han føler seg utenfor uansett, så hvorfor late som? Han snakker kebabnorsk, henger med gutta, havner i trøbbel. Til slutt ender han i fengsel.

Dette er utgangspunktet for Zeshan Shakars roman «Tante Ulrikkes vei» fra 2017 - en av de viktigste norske romanene i nyere tid. Gjennom Mo og Jamals historier utforsker Shakar hva det vil si å vokse opp mellom to kulturer, og de umulige valgene mange unge med innvandrerbakgrunn står overfor.

Romanen er bare ett eksempel på hvordan norsk litteratur har blitt rikere og mer mangfoldig de siste tiårene. Nye stemmer og nye perspektiver har kommet til, og de forteller historier som ikke har blitt fortalt før.`,
    },
    {
      id: 'norsk-vg3-7-3-n-section1',
      type: 'text',
      content: `## Flerkulturell litteratur: Nye perspektiver

Fra 1990-tallet har forfattere med innvandrerbakgrunn fått en stadig viktigere plass i norsk litteratur. De bringer med seg erfaringer og perspektiver som utfordrer og beriker det litterære landskapet.

Maria Navarro Skaranger debuterte i 2015 med «Alle utlendinger har lukka gardiner». Hun skriver om Oslo øst med humor og varme, på et språk som blander norsk med det som gjerne kalles kebabnorsk. Romanen hennes viste at flerkulturelle erfaringer kunne formidles med litterær kvalitet og bred appell.

Sumaya Jirde Ali er poet og skriver om å være ung, muslimsk og norsk. Diktet hennes «Brev til min bror» om å miste broren til ekstremisme, vakte stor oppsikt. Hun viser at lyrikk kan ta opp brennaktuelle temaer og nå ut til et ungt publikum.

Gulraiz Sharif debuterte med «Hør her'a!» i 2020, en roman fortalt av en gutt som prøver å forstå hvorfor storesøsteren har begynt å bruke hijab. Romanen tar opp identitet, familie og tilhørighet med humor og alvor.

Disse forfatterne skriver ikke bare «om» innvandring eller flerkulturelle erfaringer - de skriver fra innsiden av disse erfaringene. De viser at det finnes mange måter å være norsk på, og at «norsk litteratur» kan romme langt mer enn den tradisjonelt har gjort.`,
    },
    {
      id: 'norsk-vg3-7-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-7-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på flerkulturell litteratur:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-7-3-n-quiz1-q0',
            task: 'Hva handler Zeshan Shakars «Tante Ulrikkes vei» om?',
            options: [
              { id: 'a', text: 'En familie som flytter fra Pakistan til Norge', isCorrect: false },
              { id: 'b', text: 'To gutter fra Stovner som velger ulike veier i livet', isCorrect: true },
              { id: 'c', text: 'En lærer som jobber på en flerkulturell skole', isCorrect: false },
              { id: 'd', text: 'Norsk migrasjonshistorie fra 1960-tallet', isCorrect: false },
            ],
            solution: '«Tante Ulrikkes vei» handler om Mo og Jamal, to gutter fra Stovner som vokser opp side om side men velger helt forskjellige veier.',
          },
          {
            id: 'norsk-vg3-7-3-n-quiz1-q1',
            task: 'Hvem debuterte med «Alle utlendinger har lukka gardiner»?',
            options: [
              { id: 'a', text: 'Zeshan Shakar', isCorrect: false },
              { id: 'b', text: 'Gulraiz Sharif', isCorrect: false },
              { id: 'c', text: 'Maria Navarro Skaranger', isCorrect: true },
              { id: 'd', text: 'Sumaya Jirde Ali', isCorrect: false },
            ],
            solution: 'Maria Navarro Skaranger debuterte i 2015 med «Alle utlendinger har lukka gardiner». Hun skriver om Oslo øst med humor og varme, på et språk som blander norsk med kebabnorsk.',
          },
          {
            id: 'norsk-vg3-7-3-n-quiz1-q2',
            task: 'Hva er felles for de nye flerkulturelle forfatterne?',
            options: [
              { id: 'a', text: 'De skriver alle på nynorsk', isCorrect: false },
              { id: 'b', text: 'De skriver fra innsiden av flerkulturelle erfaringer', isCorrect: true },
              { id: 'c', text: 'De bor alle utenfor Norge', isCorrect: false },
              { id: 'd', text: 'De skriver bare barnebøker', isCorrect: false },
            ],
            solution: 'Disse forfatterne skriver ikke bare «om» flerkulturelle erfaringer -- de skriver fra innsiden. De viser at det finnes mange måter å være norsk på.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-7-3-n-section2',
      type: 'text',
      content: `## Språket som handling

Et av de mest slående trekkene ved mye flerkulturell litteratur er språket. Ikke bare hva som fortelles, men hvordan det fortelles.

I «Tante Ulrikkes vei» bruker Shakar to helt forskjellige språkstiler for de to hovedpersonene. Mo skriver formelt, «korrekt» norsk - det språket han har lært at han må mestre for å lykkes. Jamal skriver muntlig, med slang, forkortelser og kebabnorsk-uttrykk.

Dette er ikke bare en stilistisk lek. Språket viser oss hvem karakterene er og hvilket prosjekt de har. Mos «korrekte» språk viser at han prøver å bli akseptert ved å bli lik majoriteten. Jamals språk viser motstand - han nekter å late som han er noe annet enn det han er.

Maria Navarro Skaranger gjør noe lignende. Hun skriver på en måte som blander standard norsk med flerkulturell slang, og skaper dermed et litterært språk som speiler hvordan mange faktisk snakker.

Dette reiser interessante spørsmål: Hva er «godt» norsk? Hvem bestemmer det? Og hva sier det om et samfunn når noen språkformer anses som mer verdifulle enn andre?

Ved å bruke flerkulturelt språk i litteraturen, utfordrer disse forfatterne språklige hierarkier. De viser at alle måter å snakke på kan bære litterær kvalitet.`,
    },
    {
      id: 'norsk-vg3-7-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-7-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på språket som handling:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-7-3-n-quiz2-q0',
            task: 'Hvordan bruker Zeshan Shakar språk til å karakterisere Mo og Jamal?',
            options: [
              { id: 'a', text: 'Begge skriver på formelt bokmål', isCorrect: false },
              { id: 'b', text: 'Mo skriver formelt norsk, Jamal skriver muntlig med slang', isCorrect: true },
              { id: 'c', text: 'Begge skriver på nynorsk', isCorrect: false },
              { id: 'd', text: 'Mo skriver på urdu, Jamal på norsk', isCorrect: false },
            ],
            solution: 'Mo skriver formelt «korrekt» norsk fordi han prøver å bli akseptert. Jamal skriver muntlig med slang og kebabnorsk fordi han nekter å tilpasse seg.',
          },
          {
            id: 'norsk-vg3-7-3-n-quiz2-q1',
            task: 'Hva utfordrer forfatterne ved å bruke flerkulturelt språk i litteraturen?',
            options: [
              { id: 'a', text: 'De utfordrer grammatikkreglene i norsk', isCorrect: false },
              { id: 'b', text: 'De utfordrer språklige hierarkier som sier at noen språkformer er bedre enn andre', isCorrect: true },
              { id: 'c', text: 'De utfordrer forlagenes regler for rettskriving', isCorrect: false },
              { id: 'd', text: 'De utfordrer skolen til å slutte med norskundervisning', isCorrect: false },
            ],
            solution: 'Ved å bruke flerkulturelt språk i litteraturen utfordrer forfatterne språklige hierarkier. De viser at alle måter å snakke på kan bære litterær kvalitet.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-7-3-n-section3',
      type: 'text',
      content: `## Skeiv litteratur og andre perspektiver

Mangfold i litteraturen handler ikke bare om etnisitet. De siste tiårene har også LHBTQ+-perspektiver fått større plass i norsk litteratur.

Forfattere som Edy Poppy og Lars Ramslie har skrevet åpent om skeive erfaringer. Gunnhild Øyehaug utforsker kjønn og identitet i sine tekster. Disse forfatterne bidrar til å synliggjøre erfaringer som lenge var usynlige eller tabubelagte i litteraturen.

Klasseperspektiv har også fått fornyet oppmerksomhet. Forfattere som Olaug Nilssen skriver om bygde-Norge og de marginaliserte, om mennesker som faller utenfor det polerte bybildet som ofte dominerer litteraturen.

Og så har vi urfolksperspektivet. Samisk litteratur har fått økt oppmerksomhet de siste årene. Forfattere som Rawdna Carita Eira skriver om samiske erfaringer - både historiske, som fornorskningens traumer, og samtidige, som kampen for revitalisering av samisk kultur og språk.

Alt dette bidrar til et rikere litteraturbilde. Når flere stemmer får plass, får vi flere historier. Og når flere historier fortelles, forstår vi verden - og hverandre - bedre.`,
    },
    {
      id: 'norsk-vg3-7-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-7-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på mangfold i litteraturen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-7-3-n-quiz3-q0',
            task: 'Hvilke typer mangfold i litteraturen omtales i kapittelet?',
            options: [
              { id: 'a', text: 'Bare etnisk mangfold', isCorrect: false },
              { id: 'b', text: 'Bare kjønnsidentitet og seksualitet', isCorrect: false },
              { id: 'c', text: 'Flerkulturelt, skeivt, klasseperspektiv og urfolksperspektiv', isCorrect: true },
              { id: 'd', text: 'Bare geografisk mangfold mellom by og land', isCorrect: false },
            ],
            solution: 'Mangfold i litteraturen omfatter mange dimensjoner: flerkulturelle erfaringer, LHBTQ+-perspektiver, klasseperspektiv og urfolksperspektiv (samisk litteratur).',
          },
          {
            id: 'norsk-vg3-7-3-n-quiz3-q1',
            task: 'Hvem skriver om samiske erfaringer, inkludert fornorskningens traumer?',
            options: [
              { id: 'a', text: 'Maria Navarro Skaranger', isCorrect: false },
              { id: 'b', text: 'Olaug Nilssen', isCorrect: false },
              { id: 'c', text: 'Rawdna Carita Eira', isCorrect: true },
              { id: 'd', text: 'Gulraiz Sharif', isCorrect: false },
            ],
            solution: 'Rawdna Carita Eira skriver om samiske erfaringer, både historiske som fornorskningens traumer og samtidige som kampen for revitalisering av samisk kultur og språk.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-7-3-n-section4',
      type: 'text',
      content: `## Hvorfor mangfold betyr noe

Noen vil kanskje spørre: Hvorfor er dette viktig? Er det ikke kvaliteten på litteraturen som teller, uavhengig av hvem som har skrevet den?

Jo, kvalitet er viktig. Men her er poenget: Når litteraturen bare forteller noen historier og ikke andre, går vi glipp av noe. Vi går glipp av perspektiver som kunne utvidet vår forståelse. Vi går glipp av lesere som ikke finner seg selv i bøkene. Og vi går glipp av den rikdommen som oppstår når ulike stemmer møtes.

Tenk på det slik: I generasjoner var norsk litteratur dominert av hvite, middelaldrende menn fra middelklassen. De skrev ofte godt, mange av dem var genier. Men de kunne bare skrive fra sitt eget perspektiv. De kunne ikke fortelle historien til en jente fra Stovner, eller en samisk reindriftsutøver, eller en homofil ungdom i bygde-Norge.

Når disse stemmene nå får plass, blir litteraturen rikere. Ikke fordi mangfold i seg selv er et kvalitetskriterium, men fordi flere perspektiver gir flere muligheter for gjenkjennelse, forståelse og innsikt.

For lesere med minoritetsbakgrunn kan det å finne seg selv i litteraturen være en kraftfull opplevelse. Og for lesere fra majoriteten kan det å lese andre perspektiver utvide horisonten og bygge empati.`,
    },
    {
      id: 'norsk-vg3-7-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-7-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på hvorfor mangfold betyr noe:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-7-3-n-quiz4-q0',
            task: 'Hvorfor er mangfold i litteraturen viktig?',
            options: [
              { id: 'a', text: 'Fordi minoritetsforfattere automatisk skriver bedre', isCorrect: false },
              { id: 'b', text: 'Fordi det gir flere perspektiver, gjenkjennelse og utvidet forståelse', isCorrect: true },
              { id: 'c', text: 'Fordi det er lovpålagt å ha mangfold i litteraturen', isCorrect: false },
              { id: 'd', text: 'Fordi tradisjonell litteratur ikke lenger er relevant', isCorrect: false },
            ],
            solution: 'Mangfold gir flere perspektiver og historier, lar flere lesere finne seg selv i bøkene, og utvider alle leseres forståelse og empati.',
          },
          {
            id: 'norsk-vg3-7-3-n-quiz4-q1',
            task: 'Hva kan det å finne seg selv i litteraturen bety for lesere med minoritetsbakgrunn?',
            options: [
              { id: 'a', text: 'Det har ingen spesiell betydning', isCorrect: false },
              { id: 'b', text: 'Det gjør at de leser raskere', isCorrect: false },
              { id: 'c', text: 'Det er en kraftfull opplevelse av anerkjennelse', isCorrect: true },
              { id: 'd', text: 'Det gjør at de slutter å lese annen litteratur', isCorrect: false },
            ],
            solution: 'For lesere med minoritetsbakgrunn kan det å finne seg selv i litteraturen være en kraftfull opplevelse. For lesere fra majoriteten kan det å lese andre perspektiver utvide horisonten og bygge empati.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-7-3-n-section5',
      type: 'text',
      content: `## Debatter og utfordringer

Mangfold i litteraturen er ikke uten kontroverser. Flere debatter pågår:

Hvem kan skrive om hvem? Kan en hvit forfatter skrive overbevisende fra perspektivet til en person med annen bakgrunn? Noen mener at såkalt «egen erfaring» er nødvendig for autentisitet. Andre mener at fantasien ikke skal ha grenser, og at gode forfattere kan sette seg inn i hvem som helst.

Er betegnelsen «flerkulturell litteratur» begrensende? Noen forfattere med innvandrerbakgrunn opplever at de blir satt i bås, at de forventes å skrive om «sin bakgrunn» i stedet for å bare være forfattere. De vil ikke reduseres til representanter for en gruppe.

Hva med kvalitet versus representasjon? Noen frykter at fokus på mangfold kan føre til at bøker blir utgitt fordi forfatteren har «riktig» bakgrunn, ikke fordi bøkene er gode. Andre mener at dette er en falsk motsetning - at talentfulle forfattere finnes i alle grupper.

Disse debattene har ingen enkle svar. Men de er viktige å ha, fordi de tvinger oss til å tenke gjennom hva vi mener med litteratur, kvalitet og representasjon.

Det som er sikkert, er at norsk litteratur i dag er mer mangfoldig enn noen gang før. Og at dette mangfoldet har gitt oss bøker, perspektiver og stemmer vi ellers ville vært uten.`,
    },
    {
      id: 'norsk-vg3-7-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-7-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på debatter om mangfold:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-7-3-n-quiz5-q0',
            task: 'Hvilken debatt om mangfold i litteraturen nevnes i teksten?',
            options: [
              { id: 'a', text: 'Om forfattere bør få statsstøtte', isCorrect: false },
              { id: 'b', text: 'Om hvem som kan skrive overbevisende fra ulike perspektiver', isCorrect: true },
              { id: 'c', text: 'Om alle bøker bør oversettes til nynorsk', isCorrect: false },
              { id: 'd', text: 'Om digitale bøker bør erstattes av papirbøker', isCorrect: false },
            ],
            solution: 'En sentral debatt handler om hvem som kan skrive om hvem -- om en forfatter må ha personlig erfaring for å skrive autentisk fra et visst perspektiv.',
          },
          {
            id: 'norsk-vg3-7-3-n-quiz5-q1',
            task: 'Hvorfor opplever noen forfattere med innvandrerbakgrunn betegnelsen «flerkulturell litteratur» som begrensende?',
            options: [
              { id: 'a', text: 'Fordi de ikke liker ordet «flerkultur»', isCorrect: false },
              { id: 'b', text: 'Fordi de forventes å bare skrive om sin bakgrunn i stedet for å være forfattere', isCorrect: true },
              { id: 'c', text: 'Fordi det betyr at de får lavere honorar', isCorrect: false },
              { id: 'd', text: 'Fordi bøkene deres ikke selges like godt', isCorrect: false },
            ],
            solution: 'Noen forfattere opplever at de settes i bås og forventes å skrive om «sin bakgrunn». De vil ikke reduseres til representanter for en gruppe, men være forfattere på egne premisser.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-7-3-n-summary',
      type: 'text',
      content: `## Oppsummering

**Mangfold i norsk litteratur** har økt betydelig de siste tiårene, med nye stemmer og perspektiver.

**Flerkulturell litteratur:**
- Zeshan Shakar: «Tante Ulrikkes vei» (2017)
- Maria Navarro Skaranger: «Alle utlendinger har lukka gardiner» (2015)
- Sumaya Jirde Ali: Lyrikk om ung, muslimsk, norsk erfaring
- Gulraiz Sharif: «Hør her'a!» (2020)

**Språk som virkemiddel:**
- Bruk av kebabnorsk og flerspråklig slang
- Språket viser karakterens identitet og prosjekt
- Utfordrer språklige hierarkier

**Andre perspektiver:**
- LHBTQ+-litteratur (Edy Poppy, Lars Ramslie, Gunnhild Øyehaug)
- Klasseperspektiv (Olaug Nilssen)
- Samisk litteratur (Rawdna Carita Eira)

**Hvorfor mangfold betyr noe:**
- Flere perspektiver og historier
- Gjenkjennelse for flere lesere
- Utvidet forståelse og empati

**Debatter:**
- Hvem kan skrive om hvem?
- Er «flerkulturell litteratur» en begrensende kategori?
- Kvalitet versus representasjon`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.1 NARRATIV: Retorisk analyse
// ============================================================================

export const CHAPTER_NORSK_VG3_8_1_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-8-1-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '8.1',
  title: 'Retorisk analyse',
  subtitle: 'Narrativ versjon',
  description: 'Lær kunsten å gjennomskue overtalelse - fra Aristoteles til Greta Thunberg og moderne influencere.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke metaspråk i skriftlig og muntlig analyse av tekster',
    'analysere retoriske virkemidler i mediespråk',
    'skrive retoriske analyser av sakprosa',
  ],
  linkedChapterId: 'norsk-vg3-8-1',
  content: [
    {
      id: 'norsk-vg3-8-1-n-intro',
      type: 'text',
      content: `## «How dare you!»

September 2019. FNs klimatoppmøte i New York. En 16 år gammel svensk jente går opp på talerstolen. Verdens mektigste ledere sitter i salen. Greta Thunberg ser ut over forsamlingen, og så eksploderer hun:

«How dare you! You have stolen my dreams and my childhood with your empty words.»

Ordene treffer som slag. Thunbergs stemme skjelver av sinne. Ansiktet er fortrukket. «People are suffering. People are dying. Entire ecosystems are collapsing. We are in the beginning of a mass extinction, and all you can talk about is money and fairy tales of eternal economic growth. How dare you!»

Klippet går viralt. Millioner ser det. Noen blir rørt til tårer. Andre blir provosert og sinte. Men nesten ingen forblir uberørt.

Hva var det som gjorde denne talen så kraftfull? Var det bare at Thunberg var sint - eller var det noe mer? Var det retorisk mesterskap på spill?

Velkommen til retorikken: Kunsten å overbevise. Kunsten å bruke ord, følelser og troverdighet til å påvirke andre. En kunst som ble utviklet i antikkens Hellas, og som er mer relevant enn noensinne i vår tid av reklame, politisk kommunikasjon og sosiale medier.`,
    },
    {
      id: 'norsk-vg3-8-1-n-section1',
      type: 'text',
      content: `## Aristoteles og de tre appellformene

For over 2300 år siden satte den greske filosofen Aristoteles seg ned for å analysere overtalelsens kunst. Hva er det som gjør at noen taler fungerer, mens andre faller flatt? Hva er hemmeligheten bak effektiv kommunikasjon?

Aristoteles kom frem til at det finnes tre hovedmåter å overbevise på. Han kalte dem etos, patos og logos.

**Etos** handler om troverdighet. Vi lar oss lettere overtale av noen vi stoler på, noen vi oppfatter som kompetente og ærlige. Når en lege gir deg helseråd, lytter du - fordi legen har etos. Når en tilfeldig person på gata gir deg samme råd, er du mer skeptisk.

**Patos** handler om følelser. Mennesker er ikke bare rasjonelle vesener. Vi drives av glede, frykt, sinne, medfølelse, stolthet. Den som kan vekke følelser, kan påvirke handlinger. Reklame bruker patos konstant - den viser deg ikke bare et produkt, den viser deg en følelse.

**Logos** handler om fornuft og logikk. Fakta, statistikk, logiske resonnementer. «Ifølge forskning...» «Tallene viser at...» «Hvis A, så B, og derfor C.» Logos appellerer til den tenkende delen av oss.

De mest effektive talene kombinerer alle tre. Ren logos kan virke kald og kjedelig. Ren patos kan virke manipulerende. Ren etos holder ikke hvis du ikke har noe å si. Men sammen skaper de overbevisningskraft.`,
    },
    {
      id: 'norsk-vg3-8-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på appellformene:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-8-1-n-quiz1-q0',
            task: 'Hva appellerer til følelsene våre?',
            options: [
              { id: 'a', text: 'Etos', isCorrect: false },
              { id: 'b', text: 'Patos', isCorrect: true },
              { id: 'c', text: 'Logos', isCorrect: false },
              { id: 'd', text: 'Kairos', isCorrect: false },
            ],
            solution: 'Patos er appellen til følelser. Den vekker glede, frykt, sinne, medfølelse eller andre følelser hos mottakeren.',
          },
          {
            id: 'norsk-vg3-8-1-n-quiz1-q1',
            task: 'Hva handler etos om?',
            options: [
              { id: 'a', text: 'Logiske argumenter og statistikk', isCorrect: false },
              { id: 'b', text: 'Følelser og stemning', isCorrect: false },
              { id: 'c', text: 'Avsenderens troverdighet', isCorrect: true },
              { id: 'd', text: 'Tidspunktet for kommunikasjonen', isCorrect: false },
            ],
            solution: 'Etos handler om avsenderens troverdighet. Vi lar oss lettere overtale av noen vi stoler på og oppfatter som kompetente og ærlige.',
          },
          {
            id: 'norsk-vg3-8-1-n-quiz1-q2',
            task: 'Hvorfor er det mest effektivt å kombinere alle tre appellformene?',
            options: [
              { id: 'a', text: 'Fordi det gjør talen lengre', isCorrect: false },
              { id: 'b', text: 'Fordi ren logos virker kald, ren patos manipulerende, og ren etos utilstrekkelig', isCorrect: true },
              { id: 'c', text: 'Fordi Aristoteles sa det', isCorrect: false },
              { id: 'd', text: 'Fordi det gir en bedre karakter på eksamen', isCorrect: false },
            ],
            solution: 'De mest effektive talene kombinerer alle tre. Ren logos kan virke kald, ren patos kan virke manipulerende, og ren etos holder ikke alene. Sammen skaper de overbevisningskraft.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-8-1-n-section2',
      type: 'text',
      content: `## Greta Thunberg under lupen

La oss gå tilbake til Greta Thunbergs tale og analysere den med Aristoteles' verktøy.

**Etos:** Hvorfor har en 16-åring troverdighet når hun snakker til verdensledere? Fordi hun representerer fremtiden. Hun er den generasjonen som vil arve klimakrisen. Hun har også bygget etos gjennom handling - skolestrekken som startet alt, oppofrelsene hun har gjort. Hennes unge alder, som normalt ville svekket troverdigheten, blir i stedet en styrke: Hun har ingen skjult agenda, ingen økonomiske interesser. Hun er bare et barn som er redd for fremtiden.

**Patos:** Her dominerer talen. «How dare you!» er rent følelsesutbrudd. «You have stolen my dreams and my childhood» vekker medfølelse og skyldfølelse. «People are suffering. People are dying.» - korte, hamrende setninger som bygger intensitet. Ordvalgene er sterke: «stolen», «suffering», «dying», «mass extinction». Dette er ikke nøktern informasjon - dette er følelsenes språk.

**Logos:** Talen har også logos, selv om den er underordnet. «We are in the beginning of a mass extinction» er et vitenskapelig faktum. Kontrasten mellom dette alvoret og ledernes fokus på «money and fairy tales of eternal economic growth» er et logisk argument: Dere snakker om feil ting.

Det er kombinasjonen som gjør talen så effektiv. Thunbergs ungdom og autentisitet (etos) gir henne rett til å uttrykke raseri (patos) over en situasjon som er objektivt alvorlig (logos).`,
    },
    {
      id: 'norsk-vg3-8-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på Thunberg-analysen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-8-1-n-quiz2-q0',
            task: 'Hvilken appellform dominerer i Greta Thunbergs FN-tale?',
            options: [
              { id: 'a', text: 'Logos -- hun bruker mest statistikk og fakta', isCorrect: false },
              { id: 'b', text: 'Etos -- hun fokuserer på sin egen troverdighet', isCorrect: false },
              { id: 'c', text: 'Patos -- hun appellerer sterkt til følelser som sinne og frykt', isCorrect: true },
              { id: 'd', text: 'Alle tre er like dominerende', isCorrect: false },
            ],
            solution: 'Thunbergs tale domineres av patos. «How dare you!» og sterke ord som «stolen», «suffering», «dying» vekker sinne, frykt og skyldfølelse.',
          },
          {
            id: 'norsk-vg3-8-1-n-quiz2-q1',
            task: 'Hvorfor fungerer Thunbergs unge alder som etos i talen?',
            options: [
              { id: 'a', text: 'Fordi unge mennesker er smartere enn voksne', isCorrect: false },
              { id: 'b', text: 'Fordi hun representerer fremtiden og har ingen skjult agenda', isCorrect: true },
              { id: 'c', text: 'Fordi hun er ekspert på klimavitenskap', isCorrect: false },
              { id: 'd', text: 'Fordi hun er kjendis fra sosiale medier', isCorrect: false },
            ],
            solution: 'Thunbergs unge alder gir henne troverdighet fordi hun representerer generasjonen som arver klimakrisen. Hun har ingen økonomiske interesser eller skjult agenda -- hun er bare et barn som er redd for fremtiden.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-8-1-n-section3',
      type: 'text',
      content: `## Retoriske virkemidler: Språkets verktøykasse

Retorikere har gjennom historien utviklet en hel verktøykasse med språklige grep. Her er noen av de viktigste:

**Gjentakelse (repetisjon):** Å gjenta ord eller fraser for effekt. «How dare you!» gjentas i Thunbergs tale. Martin Luther King gjentok «I have a dream» åtte ganger. Gjentakelse hamrer budskapet inn og skaper rytme.

**Anafor:** En spesiell form for gjentakelse der samme ord står i begynnelsen av flere setninger. «People are suffering. People are dying.» Anaforen skaper en hamrende rytme og bygger intensitet.

**Trikolon:** Tredeling for rytme og vekt. «Folket, av folket, for folket» (Lincoln). Tre elementer føles komplett og balansert.

**Retorisk spørsmål:** Et spørsmål som ikke forventer svar, men får mottakeren til å tenke. «Hvor lenge skal vi akseptere dette?» Spørsmålet tvinger tilhøreren til å svare i sitt eget hode.

**Kontrast (antitese):** Motsetninger satt opp mot hverandre. «Et lite skritt for et menneske, et stort sprang for menneskeheten.» Kontrasten gjør begge sider tydeligere.

**Metafor:** Å beskrive noe som noe annet. «Samfunnet er en organisme.» Metaforer gjør abstrakte ideer konkrete og forståelige.

Når du analyserer en tekst retorisk, se etter disse virkemidlene. De er ikke bare pynt - de er verktøy for overtalelse.`,
    },
    {
      id: 'norsk-vg3-8-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på retoriske virkemidler:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-8-1-n-quiz3-q0',
            task: 'Hva er en anafor?',
            options: [
              { id: 'a', text: 'Et spørsmål som ikke forventer svar', isCorrect: false },
              { id: 'b', text: 'Samme ord gjentatt i begynnelsen av flere setninger', isCorrect: true },
              { id: 'c', text: 'En sammenligning mellom to ulike ting', isCorrect: false },
              { id: 'd', text: 'En overdrivelse for å skape effekt', isCorrect: false },
            ],
            solution: 'Anafor er gjentakelse av samme ord i begynnelsen av flere setninger. Martin Luther Kings «I have a dream...» er et klassisk eksempel.',
          },
          {
            id: 'norsk-vg3-8-1-n-quiz3-q1',
            task: 'Hva er et trikolon?',
            options: [
              { id: 'a', text: 'En sammenligning av tre tekster', isCorrect: false },
              { id: 'b', text: 'En tredeling for rytme og vekt', isCorrect: true },
              { id: 'c', text: 'Et dikt med tre strofer', isCorrect: false },
              { id: 'd', text: 'En tale med tre hoveddeler', isCorrect: false },
            ],
            solution: 'Trikolon er en tredeling brukt for rytme og vekt. «Folket, av folket, for folket» (Lincoln) er et eksempel. Tre elementer føles komplett og balansert.',
          },
          {
            id: 'norsk-vg3-8-1-n-quiz3-q2',
            task: 'Hva er et retorisk spørsmål?',
            options: [
              { id: 'a', text: 'Et spørsmål som stilles av retorikklærere', isCorrect: false },
              { id: 'b', text: 'Et spørsmål du må svare på skriftlig', isCorrect: false },
              { id: 'c', text: 'Et spørsmål som ikke forventer svar, men får mottakeren til å tenke', isCorrect: true },
              { id: 'd', text: 'Et spørsmål som har flere riktige svar', isCorrect: false },
            ],
            solution: 'Et retorisk spørsmål forventer ikke svar, men tvinger tilhøreren til å svare i sitt eget hode. «Hvor lenge skal vi akseptere dette?» er et eksempel.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-8-1-n-section4',
      type: 'text',
      content: `## Den retoriske situasjonen

En tale som fungerer perfekt i én situasjon, kan falle helt flatt i en annen. Derfor er det viktig å forstå den retoriske situasjonen - konteksten teksten oppstår i.

**Hvem er avsenderen?** Hvem snakker, og hvilken posisjon har de? En politiker, en ekspert, en vanlig borger? Hvilken troverdighet har de fra før?

**Hvem er mottakeren?** Hvem snakkes det til? Hva vet avsenderen om mottakerne? Hvordan tilpasses budskapet?

**Hva er budskapet?** Hva er hovedpåstanden? Hva prøver avsenderen å oppnå?

**Hva er konteksten?** Når og hvor oppstår teksten? Hva er den aktuelle situasjonen? Hva krever et svar?

**Kairos** er et viktig begrep her - det rette øyeblikket. Timing er alt i retorikk. Greta Thunbergs tale kom etter en sommer med skogbranner og klimademonstrasjoner. Øyeblikket var riktig. Samme tale fem år tidligere hadde kanskje ikke fått samme gjennomslagskraft.

Når du analyserer en tekst, start alltid med den retoriske situasjonen. Hvem snakker til hvem, om hva, i hvilken kontekst? Først når du forstår dette, kan du vurdere om de retoriske valgene er effektive.`,
    },
    {
      id: 'norsk-vg3-8-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på den retoriske situasjonen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-8-1-n-quiz4-q0',
            task: 'Hva betyr «kairos» i retorisk sammenheng?',
            options: [
              { id: 'a', text: 'Avsenderens troverdighet', isCorrect: false },
              { id: 'b', text: 'Det rette øyeblikket for budskapet', isCorrect: true },
              { id: 'c', text: 'Mottakerens forventninger', isCorrect: false },
              { id: 'd', text: 'Tekstens logiske oppbygging', isCorrect: false },
            ],
            solution: 'Kairos handler om timing -- det rette øyeblikket. God retorikk krever at avsenderen forstår og utnytter øyeblikket.',
          },
          {
            id: 'norsk-vg3-8-1-n-quiz4-q1',
            task: 'Hvilke elementer inngår i den retoriske situasjonen?',
            options: [
              { id: 'a', text: 'Bare avsender og mottaker', isCorrect: false },
              { id: 'b', text: 'Avsender, mottaker, budskap, kontekst og kairos', isCorrect: true },
              { id: 'c', text: 'Bare etos, patos og logos', isCorrect: false },
              { id: 'd', text: 'Bare tidspunkt og sted', isCorrect: false },
            ],
            solution: 'Den retoriske situasjonen omfatter hvem som snakker (avsender), hvem det snakkes til (mottaker), hva som sies (budskap), omstendighetene (kontekst) og timing (kairos).',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-8-1-n-section5',
      type: 'text',
      content: `## Retorikk i hverdagen

Du møter retorikk overalt, hver eneste dag. Reklamen som lover at dette produktet vil gjøre deg lykkelig. Politikeren som vil ha din stemme. Influenceren som anbefaler et produkt. Nyhetskommentatoren som mener sterkt om det som skjer.

Å forstå retorikk gjør deg til en mer kritisk mottaker. Når du ser en reklame, kan du spørre: Hvilken følelse prøver de å vekke i meg? Hvilken autoritet påberoper de seg? Hva er det logiske argumentet - og holder det vann?

Det betyr ikke at all overtalelse er manipulasjon. Gode argumenter fortjener å bli hørt. Men du bør være bevisst på hvordan de fremføres - og hvorfor de virker på deg.

Å forstå retorikk gjør deg også til en bedre avsender. Når du skal argumentere for noe - i en stil, i et debattinnlegg, i en jobbsøknad - kan du tenke bevisst over de tre appellformene. Hvordan bygger jeg troverdighet? Hvilke følelser vil jeg vekke? Hva er mine sterkeste logiske argumenter?

Retorikken ble utviklet i demokratiets vugge, antikkens Athen, der borgerne måtte kunne argumentere offentlig for sine synspunkter. I vår tid, der vi alle kan være avsendere gjennom sosiale medier, er denne kunsten mer relevant enn noensinne.`,
    },
    {
      id: 'norsk-vg3-8-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på retorikk i hverdagen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-8-1-n-quiz5-q0',
            task: 'Hvorfor er det nyttig å kunne retorisk analyse?',
            options: [
              { id: 'a', text: 'Bare for å kunne kritisere andres argumenter', isCorrect: false },
              { id: 'b', text: 'Bare for å kunne manipulere andre', isCorrect: false },
              { id: 'c', text: 'For å være kritisk mottaker og bedre avsender', isCorrect: true },
              { id: 'd', text: 'Bare for å bestå eksamen i norsk', isCorrect: false },
            ],
            solution: 'Retorisk analyse gjør deg til en mer kritisk mottaker og en bedre avsender. Det handler om bevissthet og kompetanse i kommunikasjon.',
          },
          {
            id: 'norsk-vg3-8-1-n-quiz5-q1',
            task: 'Hvor ble retorikken som fag opprinnelig utviklet?',
            options: [
              { id: 'a', text: 'I det moderne USA', isCorrect: false },
              { id: 'b', text: 'I middelalderens Europa', isCorrect: false },
              { id: 'c', text: 'I antikkens Hellas (Athen)', isCorrect: true },
              { id: 'd', text: 'I det gamle Egypt', isCorrect: false },
            ],
            solution: 'Retorikken ble utviklet i demokratiets vugge, antikkens Athen, der borgerne måtte kunne argumentere offentlig for sine synspunkter.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-8-1-n-summary',
      type: 'text',
      content: `## Oppsummering

**Retorikk** er kunsten å overbevise - utviklet i antikkens Hellas og mer relevant enn noensinne.

**De tre appellformene (Aristoteles):**
- **Etos:** Troverdighet - hvem er avsenderen?
- **Patos:** Følelser - hva føler mottakeren?
- **Logos:** Fornuft - hva er argumentene?

**Den retoriske situasjonen:**
- Avsender (hvem snakker?)
- Mottaker (hvem snakkes det til?)
- Budskap (hva er hovedpåstanden?)
- Kontekst (når og hvor?)
- Kairos (det rette øyeblikket)

**Viktige retoriske virkemidler:**
- Gjentakelse og anafor
- Trikolon (tredeling)
- Retorisk spørsmål
- Kontrast (antitese)
- Metafor

**Analyse av Greta Thunbergs tale:**
- Etos: Ungdom som representerer fremtiden
- Patos (dominerende): «How dare you!», sterke følelsesord
- Logos: Vitenskapelige fakta om klimakrisen
- Kairos: Perfekt timing etter klimademonstrasjoner

**Hvorfor lære retorikk:**
- Bli kritisk mottaker av budskap
- Bli bedre avsender selv`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.2 NARRATIV: Essay og kreativ sakprosa
// ============================================================================

export const CHAPTER_NORSK_VG3_8_2_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-8-2-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '8.2',
  title: 'Essay og kreativ sakprosa',
  subtitle: 'Narrativ versjon',
  description: 'Oppdag essayet - sjangeren der du får tenke høyt, vandre mellom det personlige og det allmenne, og finne din egen stemme.',
  estimatedMinutes: 35,
  competenceGoals: [
    'skrive fagartikler, litterære tolkninger og andre sakprosatekster med faglig innhold og utforskende tilnærming',
    'skrive essay som utforsker tekster',
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
  ],
  linkedChapterId: 'norsk-vg3-8-2',
  content: [
    {
      id: 'norsk-vg3-8-2-n-intro',
      type: 'text',
      content: `## «Jeg er selv innholdet i min bok»

Frankrike, 1580. En middelaldrende adelsmann har trukket seg tilbake til slottet sitt for å tenke og skrive. Han heter Michel de Montaigne, og han holder på med noe ingen har gjort før: Han skriver om seg selv.

Ikke et selvskryt eller en heltefortelling. Nei, Montaigne skriver om sine tvil, sine vaner, sin frykt for døden, sin fascinasjon for andre kulturer, sine tanker om vennskapets vesen. Han vandrer fra tema til tema, lar tankene følge hverandre, kommer ikke alltid til en konklusjon.

Han kaller disse tekstene «essais» - forsøk. Det er nettopp det de er: forsøk på å forstå seg selv og verden, uten å late som om han har alle svarene.

«Jeg er selv innholdet i min bok,» skriver Montaigne. Det var en radikal påstand i en tid der forfattere skulle skrive om Gud, konger og store begivenheter. Hvem brydde seg om hva en tilbaketrukket adelsmann tenkte om hverdagslige ting?

Svaret viste seg å være: Mange. Montaignes essays ble lest og beundret, kopiert og etterlignet. Han hadde oppfunnet en helt ny sjanger - en sjanger der det personlige blir universelt, der tanken får vandre fritt, der ærlighet om egne svakheter blir styrke.

Essayet lever fortsatt, over 400 år senere.`,
    },
    {
      id: 'norsk-vg3-8-2-n-section1',
      type: 'text',
      content: `## Hva er egentlig et essay?

Ordet «essay» kommer fra det franske «essayer» - å forsøke, å prøve. Og det er akkurat det sjangeren handler om: Et forsøk på å forstå noe, uten å late som om du har alle svarene.

Et essay er ikke en fagartikkel som skal bevise en tese. Det er ikke en rapport som skal oppsummere fakta. Det er heller ikke ren selvbiografi. Et essay er noe midt imellom - en tekst der du tenker høyt, utforsker et tema, lar tankene vandre.

Her er noen kjennetegn:

**Personlig stemme.** I et essay hører vi forfatterens stemme tydelig. «Jeg» er til stede. Egne erfaringer, tanker og følelser er med. Dette skiller essayet fra den «objektive» fagartikkelen.

**Utforskende holdning.** Et essay prøver ikke å bevise at forfatteren har rett. Det utforsker, stiller spørsmål, vender og snur på ting. Ofte ender essayet med flere spørsmål enn svar.

**Litterær form.** Essayet bruker litterære virkemidler - metaforer, bilder, fortellinger. Det er ikke bare innholdet som teller, men også hvordan det er skrevet.

**Veksling mellom det nære og det fjerne.** Et godt essay veksler mellom personlig erfaring og allmenne refleksjoner, mellom det konkrete øyeblikket og de store spørsmålene.

Du kjenner sikkert igjen denne formen fra podkaster, nyhetsbrev og blogger du liker. Den personlige stemmen som deler tanker og erfaringer. Det er essayets ånd, i nye former.`,
    },
    {
      id: 'norsk-vg3-8-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på essaysjangeren:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-8-2-n-quiz1-q0',
            task: 'Hva betyr ordet «essay»?',
            options: [
              { id: 'a', text: 'Et bevis eller en demonstrasjon', isCorrect: false },
              { id: 'b', text: 'Et forsøk eller en prøve', isCorrect: true },
              { id: 'c', text: 'En fortelling eller historie', isCorrect: false },
              { id: 'd', text: 'En rapport eller oppsummering', isCorrect: false },
            ],
            solution: '«Essay» kommer fra det franske «essayer» som betyr å forsøke eller prøve. Det er et forsøk på forståelse.',
          },
          {
            id: 'norsk-vg3-8-2-n-quiz1-q1',
            task: 'Hvem regnes som oppfinneren av essaysjangeren?',
            options: [
              { id: 'a', text: 'Aristoteles', isCorrect: false },
              { id: 'b', text: 'Michel de Montaigne', isCorrect: true },
              { id: 'c', text: 'Jens Bjørneboe', isCorrect: false },
              { id: 'd', text: 'Dag Solstad', isCorrect: false },
            ],
            solution: 'Michel de Montaigne regnes som oppfinneren av essayet. I 1580 ga han ut sine «essais» -- forsøk på å forstå seg selv og verden.',
          },
          {
            id: 'norsk-vg3-8-2-n-quiz1-q2',
            task: 'Hva skiller essayet fra en fagartikkel?',
            options: [
              { id: 'a', text: 'Essayet er lengre', isCorrect: false },
              { id: 'b', text: 'Essayet har en personlig stemme og utforskende holdning', isCorrect: true },
              { id: 'c', text: 'Essayet bruker bare fakta', isCorrect: false },
              { id: 'd', text: 'Essayet har alltid fotnoter', isCorrect: false },
            ],
            solution: 'Essayet har en tydelig personlig stemme og utforskende holdning. I motsetning til en fagartikkel, prøver ikke essayet å bevise en tese -- det utforsker, stiller spørsmål og viser tvil.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-8-2-n-section2',
      type: 'text',
      content: `## Norske essayister: Fra Bjørneboe til Ravatn

Norge har en rik essaytradisjon. La oss møte noen av de viktigste stemmene.

**Jens Bjørneboe (1920-1976)** var kanskje Norges mest kompromissløse essayist. Han skrev med raseri og indignasjon om fengselsvesenet, psykiatrien, dødsstraffen, norsk selvtilfredshet. Hans essays er polemiske - han tar stilling, han angriper, han provoserer. Men de er også dypt kunnskapsrike og personlig engasjerte.

Et typisk Bjørneboe-sitat: «Norge er et land der folk blir sinnssyke av å bo.» Det er overdrevet, urettferdig, provoserende - og likevel treffer det noe. Det er essayets privilegium: å kunne overdrive for å få frem et poeng.

**Dag Solstad (f. 1941)** har skrevet intellektuelle essays om kunst, politikk og litteratur. Hans essays er mer reflekterende enn Bjørneboes, mindre polemiske, men like personlige. Solstad tenker høyt om det han leser og ser, og lar leseren være med på tankeprosessen.

**Agnes Ravatn (f. 1983)** representerer en nyere generasjon. Hun skriver personlige essays om hverdagslivet - om å være mor, om sosial angst, om det absurde i det normale. Med humor og selvkritikk utforsker hun de små tingene som viser seg å handle om de store.

Felles for alle disse er den personlige stemmen. De gjemmer seg ikke bak objektivitet. De sier «jeg», de deler tvil og usikkerhet, de lar oss inn i tankeprosessen.`,
    },
    {
      id: 'norsk-vg3-8-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på norske essayister:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-8-2-n-quiz2-q0',
            task: 'Hva kjennetegnet Jens Bjørneboes essays?',
            options: [
              { id: 'a', text: 'De var nøytrale og objektive', isCorrect: false },
              { id: 'b', text: 'De var polemiske og engasjerte, ofte med raseri og kritikk', isCorrect: true },
              { id: 'c', text: 'De handlet bare om litteratur og kunst', isCorrect: false },
              { id: 'd', text: 'De var korte og humoristiske', isCorrect: false },
            ],
            solution: 'Bjørneboe skrev med raseri og indignasjon. Hans essays var polemiske -- han tok stilling og angrep urettferdige systemer.',
          },
          {
            id: 'norsk-vg3-8-2-n-quiz2-q1',
            task: 'Hva kjennetegner Agnes Ravatn som essayist?',
            options: [
              { id: 'a', text: 'Hun skriver bare om politikk', isCorrect: false },
              { id: 'b', text: 'Hun skriver personlige essays om hverdagslivet med humor og selvkritikk', isCorrect: true },
              { id: 'c', text: 'Hun skriver bare om vitenskap', isCorrect: false },
              { id: 'd', text: 'Hun skriver kun på nynorsk om vestlandsnaturen', isCorrect: false },
            ],
            solution: 'Agnes Ravatn skriver personlige essays om hverdagslivet -- om å være mor, om sosial angst, om det absurde i det normale. Med humor og selvkritikk utforsker hun de små tingene.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-8-2-n-section3',
      type: 'text',
      content: `## Kreativ sakprosa: Når fakta blir litteratur

Essayet er del av en større familie: kreativ sakprosa. Dette er tekster som er faktabaserte, men skrevet med litterære virkemidler. Grensen mellom sakprosa og skjønnlitteratur viskes ut.

Tenk på Åsne Seierstads «Bokhandleren i Kabul». Det er en dokumentarisk bok om en virkelig familie i Afghanistan. Men den er skrevet som en roman, med scener, dialoger, karakterutvikling. Er det journalistikk eller litteratur? Svaret er: Begge deler.

Eller Morten Strøksnes' «Havboka», om å fiske håkjerring i nord. Det er naturvitenskap, historie, filosofi og personlig fortelling vevd sammen. Strøksnes forteller om havet, men også om seg selv, om vennskapet med fiskeren, om livets store spørsmål.

Karl Ove Knausgårds essays (utenfor «Min kamp») er også eksempler. Han skriver om kunst og litteratur, men alltid med seg selv som utgangspunkt. Det personlige og det allmenne flettes sammen.

Kreativ sakprosa har gjort sakprosa mer tilgjengelig og engasjerende. Den viser at faglig innhold ikke trenger å være kjedelig, at fakta kan formidles med skjønnhet og personlighet.`,
    },
    {
      id: 'norsk-vg3-8-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på kreativ sakprosa:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-8-2-n-quiz3-q0',
            task: 'Hva er kreativ sakprosa?',
            options: [
              { id: 'a', text: 'Oppdiktede historier presentert som sanne', isCorrect: false },
              { id: 'b', text: 'Faktabaserte tekster skrevet med litterære virkemidler', isCorrect: true },
              { id: 'c', text: 'Fagartikler med fotnoter og kildeliste', isCorrect: false },
              { id: 'd', text: 'Kun essays skrevet av kjente forfattere', isCorrect: false },
            ],
            solution: 'Kreativ sakprosa er faktabaserte tekster som bruker litterære virkemidler -- scener, dialoger, metaforer, personlig stemme.',
          },
          {
            id: 'norsk-vg3-8-2-n-quiz3-q1',
            task: 'Hvilket eksempel på kreativ sakprosa nevnes i teksten?',
            options: [
              { id: 'a', text: 'Jon Fosses «Septologien»', isCorrect: false },
              { id: 'b', text: 'Knausgårds «Min kamp»', isCorrect: false },
              { id: 'c', text: 'Åsne Seierstads «Bokhandleren i Kabul»', isCorrect: true },
              { id: 'd', text: 'Bjørnsons «Ja, vi elsker»', isCorrect: false },
            ],
            solution: 'Åsne Seierstads «Bokhandleren i Kabul» er et eksempel på kreativ sakprosa. Det er dokumentarisk om en virkelig familie i Afghanistan, men skrevet som en roman med scener og dialoger.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-8-2-n-section4',
      type: 'text',
      content: `## Hvordan skrive et essay

Nå skal du kanskje skrive essay selv. Her er noen tips.

**Start personlig.** Begynn med en erfaring, en observasjon, et øyeblikk. Ikke en abstrakt definisjon eller en generell påstand. «Jeg satt på trikken da jeg la merke til...» «Forrige uke sa noen noe som fikk meg til å tenke...» Det konkrete utgangspunktet trekker leseren inn.

**Tenk høyt.** I et essay får du lov til å være usikker. Bruk formuleringer som «kanskje», «jeg lurer på», «det slår meg». Vis tankeprosessen, ikke bare konklusjonen.

**Veksle mellom nivåer.** Gå fra det personlige til det allmenne og tilbake. Fra den konkrete hendelsen på trikken til refleksjoner om ensomhet i storbyen, så tilbake til en ny personlig observasjon.

**Bruk litterære virkemidler.** Metaforer, sammenligninger, konkrete bilder. Variasjon i setningslengde. Kanskje et lite fortellende parti. Essayet er litteratur, ikke rapport.

**La det være åpent.** Du trenger ikke konkludere endelig. Et godt essay åpner for videre tenkning. Avslutt gjerne med et spørsmål eller et bilde som blir hengende.

Og viktigst av alt: Finn din egen stemme. Essayet handler om deg - dine tanker, dine erfaringer, din måte å se verden på. Det er ingen fasit på hvordan du skal være.`,
    },
    {
      id: 'norsk-vg3-8-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på å skrive essay:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-8-2-n-quiz4-q0',
            task: 'Hvordan bør et essay typisk begynne?',
            options: [
              { id: 'a', text: 'Med en abstrakt definisjon av temaet', isCorrect: false },
              { id: 'b', text: 'Med en personlig erfaring eller konkret observasjon', isCorrect: true },
              { id: 'c', text: 'Med en liste over hovedpunktene', isCorrect: false },
              { id: 'd', text: 'Med en direkte konklusjon', isCorrect: false },
            ],
            solution: 'Et essay bør begynne konkret og personlig -- med en erfaring, en observasjon, et øyeblikk. Dette trekker leseren inn.',
          },
          {
            id: 'norsk-vg3-8-2-n-quiz4-q1',
            task: 'Hva betyr det å «veksle mellom nivåer» i et essay?',
            options: [
              { id: 'a', text: 'Å bytte mellom nynorsk og bokmål', isCorrect: false },
              { id: 'b', text: 'Å gå fra personlig erfaring til allmenne refleksjoner og tilbake', isCorrect: true },
              { id: 'c', text: 'Å variere mellom korte og lange avsnitt', isCorrect: false },
              { id: 'd', text: 'Å skifte mellom ulike emner uten sammenheng', isCorrect: false },
            ],
            solution: 'Å veksle mellom nivåer betyr å gå fra det personlige til det allmenne og tilbake. Fra den konkrete hendelsen til refleksjoner om de store spørsmålene, og så tilbake til en ny personlig observasjon.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-8-2-n-section5',
      type: 'text',
      content: `## Essayet i dag: Fra papir til podkast

Essayet lever videre, men i stadig nye former. Det du hører i din favorittpodkast - den personlige stemmen som reflekterer over et tema, som deler erfaringer og stiller spørsmål - er ofte essayets ånd i lydform.

Nyhetsbrev som Substack har gitt en ny arena for essayister. Forfattere skriver direkte til leserne, uten forlagets filter, med en personlig og utforskende stil.

Sosiale medier har på mange måter demokratisert essayet. Alle kan dele sine tanker og refleksjoner. Kvaliteten varierer voldsomt, men formen er gjenkjennelig: «Jeg opplevde noe i dag som fikk meg til å tenke...»

Samtidig reiser dette spørsmål. Blir skillet mellom offentlig og privat for utydelig? Er all denne personlige delingen sunn? Montaigne skrev for ettertiden, i et tårn på slottet sitt. Vi skriver for likes, i sanntid.

Men noe har essayet som andre sjangre mangler: Ærligheten om at vi ikke vet alt. Motet til å tenke høyt, til å prøve og feile, til å vise frem tvilen i stedet for å gjemme den bak en fasade av sikkerhet.

I en tid med raske meninger og skråsikkerhet er kanskje essayets utforskende holdning viktigere enn noensinne.`,
    },
    {
      id: 'norsk-vg3-8-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på essayet i dag:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-8-2-n-quiz5-q0',
            task: 'Hva er essayets særlige styrke i dagens medievirkelighet?',
            options: [
              { id: 'a', text: 'At det gir sikre svar på kompliserte spørsmål', isCorrect: false },
              { id: 'b', text: 'At det er kort og lett å dele på sosiale medier', isCorrect: false },
              { id: 'c', text: 'At det tillater utforskning og tvil i en tid med raske meninger', isCorrect: true },
              { id: 'd', text: 'At det ikke krever noen personlig involvering', isCorrect: false },
            ],
            solution: 'I en tid med raske meninger tilbyr essayet en utforskende holdning som anerkjenner tvil og usikkerhet.',
          },
          {
            id: 'norsk-vg3-8-2-n-quiz5-q1',
            task: 'I hvilke nye former lever essayet videre i dag?',
            options: [
              { id: 'a', text: 'Bare i trykte aviser og tidsskrifter', isCorrect: false },
              { id: 'b', text: 'I podkaster, nyhetsbrev og sosiale medier', isCorrect: true },
              { id: 'c', text: 'Essayet er en utdødd sjanger', isCorrect: false },
              { id: 'd', text: 'Bare i akademiske tidsskrifter', isCorrect: false },
            ],
            solution: 'Essayet lever videre i podkaster, nyhetsbrev (som Substack) og sosiale medier. Den personlige stemmen som reflekterer over et tema er essayets ånd i nye former.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-8-2-n-summary',
      type: 'text',
      content: `## Oppsummering

**Essayet** er en sjanger oppfunnet av Michel de Montaigne i 1580 - «forsøk» på å forstå seg selv og verden.

**Kjennetegn ved essayet:**
- Personlig stemme («jeg» er til stede)
- Utforskende holdning (spørsmål, ikke bare svar)
- Litterær form (metaforer, bilder, fortelling)
- Veksling mellom det personlige og allmenne

**Norske essayister:**
- Jens Bjørneboe: Polemisk, engasjert, rasende
- Dag Solstad: Intellektuell, reflekterende
- Agnes Ravatn: Personlig, humoristisk, hverdagsnær

**Kreativ sakprosa:**
- Faktabasert, men litterært formet
- Eksempler: Åsne Seierstad, Morten Strøksnes
- Visker ut grensen mellom journalistikk og litteratur

**Tips til essayskriving:**
- Start personlig og konkret
- Tenk høyt, vis tvilen
- Veksle mellom nært og fjernt
- Bruk litterære virkemidler
- La det være åpent

**Essayet i dag:** Lever videre i podkaster, nyhetsbrev og sosiale medier - den personlige stemmen som reflekterer og utforsker.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.3 NARRATIV: Litterær analyse og tolkning
// ============================================================================

export const CHAPTER_NORSK_VG3_8_3_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-8-3-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '8.3',
  title: 'Litterær analyse og tolkning',
  subtitle: 'Narrativ versjon',
  description: 'Lær å lese tekster som en detektiv - oppdag hvordan litterære verktøy hjelper deg å forstå hva tekstene egentlig betyr.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke metaspråk i skriftlig og muntlig analyse av tekster',
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'skrive litterære analyser og sammenligninger',
  ],
  linkedChapterId: 'norsk-vg3-8-3',
  content: [
    {
      id: 'norsk-vg3-8-3-n-intro',
      type: 'text',
      content: `## Et dikt som åpner seg

La oss begynne med noe konkret. Her er et dikt av Olav H. Hauge:

*Det er den draumen me ber på*
*at noko vidunderleg skal skje,*
*at det må skje -*
*at tidi skal opna seg*
*at hjarta skal opna seg*
*at dører skal opna seg*
*at berget skal opna seg*
*at kjeldor skal springa -*
*at draumen skal opna seg,*
*at me ei morgonstund skal glida inn*
*på ein våg me ikkje har visst um.*

Les det en gang til. Kanskje høyt. Hva føler du? Hva tenker du?

Ved første lesning kjenner de fleste noe - en slags lengsel, et håp. Men hva er det egentlig som skjer i diktet? Hvorfor virker det som det gjør?

Det er her litterær analyse kommer inn. Analyse er ikke det motsatte av opplevelse - det er en måte å fordype opplevelsen på. Når vi forstår hvordan et dikt virker, forstår vi det bedre. Og vi kan forklare til andre hvorfor det berører oss.

Velkommen til litterær analyse: kunsten å lese nøye, å stille gode spørsmål, og å finne svar i tekstens egne detaljer.`,
    },
    {
      id: 'norsk-vg3-8-3-n-section1',
      type: 'text',
      content: `## Analyse versus tolkning

Før vi går videre, la oss skille mellom to ting som henger tett sammen, men som ikke er det samme.

**Analyse** er å undersøke tekstens bestanddeler. Hvordan er diktet bygget opp? Hvilke virkemidler brukes? Hva slags forteller har novellen? Analyse er relativt «objektivt» - vi kan bli enige om at diktet har seks vers, at det bruker anafor, at fortelleren i romanen er upålitelig.

**Tolkning** er å foreslå hva teksten betyr. Hva handler diktet «egentlig» om? Hva vil forfatteren si oss? Tolkning er mer subjektivt - ulike lesere kan tolke ulikt. Men gode tolkninger er ikke vilkårlige. De må begrunnes i analysen.

Tenk på det som et isfjell. Analysen er den synlige delen - det vi kan påpeke i teksten. Tolkningen er den usynlige delen - den dypere meningen vi utleder fra det vi ser.

La oss gå tilbake til Hauges dikt. En analyse vil påpeke at diktet bruker anafor («at ... skal opna seg»), at det er skrevet på nynorsk, at det beveger seg fra abstrakt (tid) til konkret (berg, kilder) og tilbake til abstrakt (draumen), at det ender med et bilde av en båt som glir inn i en ukjent vik.

En tolkning vil si noe om hva dette betyr: Diktet uttrykker menneskelig lengsel etter forandring og åpenhet. Det handler om håp - kanskje religiøst, kanskje eksistensielt.`,
    },
    {
      id: 'norsk-vg3-8-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på analyse og tolkning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-8-3-n-quiz1-q0',
            task: 'Hva er forskjellen mellom analyse og tolkning?',
            options: [
              { id: 'a', text: 'Analyse er for eksperter, tolkning er for alle', isCorrect: false },
              { id: 'b', text: 'Analyse undersøker tekstens bestanddeler, tolkning foreslår hva teksten betyr', isCorrect: true },
              { id: 'c', text: 'Analyse er objektiv, tolkning er alltid feil', isCorrect: false },
              { id: 'd', text: 'Det er ingen forskjell, begrepene betyr det samme', isCorrect: false },
            ],
            solution: 'Analyse undersøker form, virkemidler og struktur. Tolkning foreslår hva teksten betyr. Gode tolkninger begrunnes i analysen.',
          },
          {
            id: 'norsk-vg3-8-3-n-quiz1-q1',
            task: 'Hva menes med «isfjell-metaforen» for analyse og tolkning?',
            options: [
              { id: 'a', text: 'At man bare bør lese tekster om isfjell', isCorrect: false },
              { id: 'b', text: 'At analysen er den synlige delen, tolkningen er den dypere meningen under', isCorrect: true },
              { id: 'c', text: 'At tekster er kalde og vanskelige', isCorrect: false },
              { id: 'd', text: 'At man bør lese i kaldt vær', isCorrect: false },
            ],
            solution: 'Analysen er den synlige delen av isfjellet -- det vi kan påpeke konkret i teksten. Tolkningen er den usynlige delen -- den dypere meningen vi utleder fra det vi ser.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-8-3-n-section2',
      type: 'text',
      content: `## Verktøykassen: Begreper for lyrikk

For å analysere godt, trenger du et fagspråk - begreper som lar deg peke presist på det du ser. Her er noen viktige begreper for lyrikk:

**Form og struktur:**
- **Strofe:** Et vers-avsnitt, adskilt med blank linje
- **Vers:** En enkelt linje i diktet
- **Rim:** Lydlikhet mellom ord (enderim: «dag/sag», bokstavrim/allitterasjon: «bekken ble borte i bjørka»)
- **Rytme:** Mønsteret av trykk og toner

**Bildespråk:**
- **Metafor:** Å beskrive noe som noe annet («livet er en reise»)
- **Sammenligning (simile):** Som metafor, men med «som» eller «lik» («livet er som en reise»)
- **Personifikasjon:** Å gi menneskelige egenskaper til noe ikke-menneskelig («trærne danset»)
- **Symbol:** Et konkret fenomen som representerer noe abstrakt

**Lydlige virkemidler:**
- **Allitterasjon:** Gjentagelse av konsonantlyd i starten av ord
- **Assonans:** Gjentagelse av vokallyd
- **Onomatopoetikon:** Lydmalende ord («susing», «klirr»)

**Andre virkemidler:**
- **Anafor:** Gjentagelse av samme ord i starten av flere verselinjer
- **Kontrast:** Motsetninger satt opp mot hverandre
- **Gjentakelse:** Ord eller fraser som gjentas for effekt

I Hauges dikt er anaforen («at ... skal opna seg») det tydeligste virkemiddelet. Den skaper rytme, bygger intensitet, og viser at åpningen må skje på mange nivåer.`,
    },
    {
      id: 'norsk-vg3-8-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på lyrikkbegreper:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-8-3-n-quiz2-q0',
            task: 'Hva er en metafor?',
            options: [
              { id: 'a', text: 'En overdrivelse for effekt', isCorrect: false },
              { id: 'b', text: 'Å beskrive noe som noe annet uten å bruke «som»', isCorrect: true },
              { id: 'c', text: 'En lydmalende beskrivelse', isCorrect: false },
              { id: 'd', text: 'Gjentakelse av samme ord', isCorrect: false },
            ],
            solution: 'En metafor beskriver noe som noe annet uten sammenligningsord. «Livet er en reise» er en metafor.',
          },
          {
            id: 'norsk-vg3-8-3-n-quiz2-q1',
            task: 'Hva er forskjellen mellom en metafor og en sammenligning (simile)?',
            options: [
              { id: 'a', text: 'En metafor er lengre enn en sammenligning', isCorrect: false },
              { id: 'b', text: 'En sammenligning bruker «som» eller «lik», en metafor gjør det ikke', isCorrect: true },
              { id: 'c', text: 'En metafor er alltid mer poetisk', isCorrect: false },
              { id: 'd', text: 'Det er ingen forskjell', isCorrect: false },
            ],
            solution: 'En sammenligning bruker «som» eller «lik» (livet er som en reise), mens en metafor sier det direkte (livet er en reise). Begge er former for bildespråk.',
          },
          {
            id: 'norsk-vg3-8-3-n-quiz2-q2',
            task: 'Hva er personifikasjon?',
            options: [
              { id: 'a', text: 'Å beskrive en person svært detaljert', isCorrect: false },
              { id: 'b', text: 'Å gi menneskelige egenskaper til noe ikke-menneskelig', isCorrect: true },
              { id: 'c', text: 'Å sitere en berømt person', isCorrect: false },
              { id: 'd', text: 'Å skrive i førsteperson', isCorrect: false },
            ],
            solution: 'Personifikasjon er å gi menneskelige egenskaper til noe ikke-menneskelig. «Trærne danset» er et eksempel der trærne tillegges menneskelig handling.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-8-3-n-section3',
      type: 'text',
      content: `## Verktøykassen: Begreper for prosa

Når du analyserer romaner og noveller, trenger du andre begreper:

**Fortellerstemme:** Hvem forteller historien?
- **Førstepersonsforteller:** «Jeg» - vi ser verden gjennom én persons øyne
- **Tredjepersonsforteller:** «Han/hun» - kan være allvitende eller begrenset
- **Upålitelig forteller:** En forteller vi ikke kan stole helt på

**Synsvinkel:** Hvem ser vi hendelsene gjennom? Dette er ikke det samme som fortellerstemme - en tredjepersonsforteller kan velge å bare vise oss én persons tanker.

**Tid og struktur:**
- **Kronologisk:** Hendelsene fortelles i rekkefølge
- **Tilbakeblikk (analepse):** Hopp tilbake i tid
- **Frempek (prolepse):** Hint om hva som skal skje
- **In medias res:** Begynner midt i handlingen

**Karakterer:**
- **Runde karakterer:** Komplekse, utvikler seg gjennom historien
- **Flate karakterer:** Enkle, statiske, ofte bipersoner
- **Protagonist:** Hovedpersonen
- **Antagonist:** Motspilleren

**Motiv og tema:**
- **Motiv:** Konkrete elementer som gjentas (f.eks. reisemotivet, hagemotivet)
- **Tema:** Det abstrakte emnet teksten handler om (f.eks. kjærlighet, død, frihet)

Når Ibsen i «Et dukkehjem» lar juletræet visne parallelt med at Noras ekteskap faller sammen, er det et motiv som underbygger temaet.`,
    },
    {
      id: 'norsk-vg3-8-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på prosabegreper:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-8-3-n-quiz3-q0',
            task: 'Hva er en upålitelig forteller?',
            options: [
              { id: 'a', text: 'En forteller som lyver til de andre karakterene', isCorrect: false },
              { id: 'b', text: 'En forfatter som ikke har gjort research', isCorrect: false },
              { id: 'c', text: 'En forteller vi som lesere ikke kan stole helt på', isCorrect: true },
              { id: 'd', text: 'En biperson som forteller historien', isCorrect: false },
            ],
            solution: 'En upålitelig forteller er en fortellerstemme leseren ikke helt kan stole på. Vi må lese kritisk og «mellom linjene».',
          },
          {
            id: 'norsk-vg3-8-3-n-quiz3-q1',
            task: 'Hva betyr «in medias res»?',
            options: [
              { id: 'a', text: 'At fortellingen er skrevet i dagbokform', isCorrect: false },
              { id: 'b', text: 'At fortellingen begynner midt i handlingen', isCorrect: true },
              { id: 'c', text: 'At fortellingen er kronologisk', isCorrect: false },
              { id: 'd', text: 'At fortellingen har flere fortellere', isCorrect: false },
            ],
            solution: 'In medias res betyr «midt i tingene» og beskriver en fortelling som begynner midt i handlingen, i stedet for å starte fra begynnelsen.',
          },
          {
            id: 'norsk-vg3-8-3-n-quiz3-q2',
            task: 'Hva er forskjellen mellom motiv og tema?',
            options: [
              { id: 'a', text: 'De betyr akkurat det samme', isCorrect: false },
              { id: 'b', text: 'Motiv er konkrete elementer som gjentas, tema er det abstrakte emnet', isCorrect: true },
              { id: 'c', text: 'Motiv handler om karakterene, tema om handlingen', isCorrect: false },
              { id: 'd', text: 'Motiv er bare for lyrikk, tema er bare for prosa', isCorrect: false },
            ],
            solution: 'Motiv er konkrete elementer som gjentas i teksten (f.eks. reisemotivet). Tema er det abstrakte emnet teksten handler om (f.eks. kjærlighet, død, frihet).',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-8-3-n-section4',
      type: 'text',
      content: `## Den hermeneutiske sirkelen

Her er et viktig konsept for all teksttolkning: Den hermeneutiske sirkelen.

Tenk deg at du leser en roman. For å forstå en enkelt setning, må du forstå avsnittet den står i. For å forstå avsnittet, må du forstå kapitlet. For å forstå kapitlet, må du forstå hele boken. Men for å forstå hele boken, må du forstå de enkelte setningene.

Du går i sirkel: Fra del til helhet, og fra helhet tilbake til del. Hver gang du leser på nytt, forstår du mer, fordi du nå kjenner helheten bedre.

Det samme gjelder for et dikt. Når du leser Hauges dikt første gang, forstår du kanskje ikke helt hva «ein våg me ikkje har visst um» betyr. Men når du har lest hele diktet, forstår du at det handler om det ukjente, det nye, det som venter. Da gir avslutningen mer mening. Og når du leser diktet på nytt, forstår du starten bedre - fordi du nå vet hvor det går.

Den hermeneutiske sirkelen forteller oss at tolkning er en prosess. Du blir aldri «ferdig» med å tolke en tekst. Hver lesning gir ny innsikt.

Det betyr også at gode tolkninger er åpne for revisjon. Hvis du oppdager noe i teksten som motsvarer tolkningen din, må du justere.`,
    },
    {
      id: 'norsk-vg3-8-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på den hermeneutiske sirkelen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-8-3-n-quiz4-q0',
            task: 'Hva er den hermeneutiske sirkelen?',
            options: [
              { id: 'a', text: 'En type plotstruktur der slutten leder tilbake til starten', isCorrect: false },
              { id: 'b', text: 'Bevegelsen mellom del og helhet i tolkning', isCorrect: true },
              { id: 'c', text: 'En metode for å finne forfatterens intensjon', isCorrect: false },
              { id: 'd', text: 'En type gjentakelse i lyrikk', isCorrect: false },
            ],
            solution: 'Den hermeneutiske sirkelen beskriver hvordan vi forstår deler gjennom helheten, og helheten gjennom delene.',
          },
          {
            id: 'norsk-vg3-8-3-n-quiz4-q1',
            task: 'Hva betyr det at tolkning er en prosess?',
            options: [
              { id: 'a', text: 'At man alltid tolker feil første gang', isCorrect: false },
              { id: 'b', text: 'At man blir aldri ferdig med å tolke -- hver lesning gir ny innsikt', isCorrect: true },
              { id: 'c', text: 'At tolkning tar lang tid og er kjedelig', isCorrect: false },
              { id: 'd', text: 'At bare eksperter kan tolke tekster riktig', isCorrect: false },
            ],
            solution: 'Tolkning er en prosess fordi vi aldri blir «ferdig» med å tolke en tekst. Hver ny lesning gir ny innsikt, og gode tolkninger er åpne for revisjon.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-8-3-n-section5',
      type: 'text',
      content: `## Slik skriver du en litterær analyse

Nå som du har verktøyene, la oss se på hvordan du strukturerer en analyse.

**1. Innledning**
Presenter teksten kort: Tittel, forfatter, sjanger, utgivelsesår. Gi et hint om hva du vil argumentere for (din tese).

**2. Kort handlingsreferat (for prosa)**
Oppsummer handlingen i noen få setninger. Ikke gjenfortell alt - bare det som er nødvendig for analysen din.

**3. Analyse av form og virkemidler**
Her bruker du fagbegrepene. Hvilke virkemidler ser du? Gi konkrete eksempler fra teksten (sitater). Forklar hvilken effekt virkemidlene har.

**4. Tematisk tolkning**
Hva handler teksten «egentlig» om? Koble form og innhold - hvordan støtter virkemidlene temaet?

**5. Kontekstualisering (valgfritt)**
Historisk kontekst, forfatterens situasjon, sammenligning med andre tekster.

**6. Avslutning**
Oppsummer hovedpoengene. Kanskje en vurdering av tekstens betydning eller kvalitet.

Det viktigste: Begrunn påstandene dine med tekstens egne detaljer. Ikke si «diktet handler om håp» uten å vise til hva i diktet som gir deg dette inntrykket. Sitér, analyser, tolk - i den rekkefølgen.`,
    },
    {
      id: 'norsk-vg3-8-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på å skrive analyse:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-8-3-n-quiz5-q0',
            task: 'Hva er det viktigste prinsippet i en god litterær analyse?',
            options: [
              { id: 'a', text: 'Å vise at du har lest mange andre bøker', isCorrect: false },
              { id: 'b', text: 'Å begrunne tolkningene med tekstens egne detaljer', isCorrect: true },
              { id: 'c', text: 'Å være enig med forfatterens meninger', isCorrect: false },
              { id: 'd', text: 'Å skrive så langt som mulig', isCorrect: false },
            ],
            solution: 'Begrunn alltid tolkningene med tekstens egne detaljer. Sitér, analyser, tolk -- i den rekkefølgen.',
          },
          {
            id: 'norsk-vg3-8-3-n-quiz5-q1',
            task: 'Hva bør komme først i en litterær analyse?',
            options: [
              { id: 'a', text: 'En lang personlig mening om teksten', isCorrect: false },
              { id: 'b', text: 'Innledning med presentasjon av teksten og en tese', isCorrect: true },
              { id: 'c', text: 'Et langt sitat fra teksten', isCorrect: false },
              { id: 'd', text: 'En sammenligning med en annen tekst', isCorrect: false },
            ],
            solution: 'En litterær analyse bør begynne med en innledning der du presenterer teksten kort (tittel, forfatter, sjanger, år) og gir et hint om hva du vil argumentere for (din tese).',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-8-3-n-summary',
      type: 'text',
      content: `## Oppsummering

**Litterær analyse** handler om å forstå hvordan tekster skaper mening.

**Analyse vs. tolkning:**
- Analyse: Undersøke tekstens bestanddeler (form, virkemidler)
- Tolkning: Foreslå hva teksten betyr
- Gode tolkninger begrunnes i analysen

**Viktige begreper for lyrikk:**
- Form: Strofe, vers, rim, rytme
- Bildespråk: Metafor, sammenligning, personifikasjon, symbol
- Lydlige virkemidler: Allitterasjon, assonans
- Andre: Anafor, kontrast, gjentakelse

**Viktige begreper for prosa:**
- Fortellerstemme: Første-/tredjeperson, upålitelig
- Synsvinkel: Hvem ser vi gjennom?
- Tid: Kronologi, tilbakeblikk, frempek
- Karakterer: Runde/flate, protagonist/antagonist
- Motiv og tema

**Den hermeneutiske sirkelen:**
- Bevegelse mellom del og helhet
- Tolkning er en prosess, ikke et endelig svar

**Struktur for analyse:**
1. Innledning med tese
2. Kort handlingsreferat
3. Analyse av virkemidler
4. Tematisk tolkning
5. Kontekstualisering
6. Avslutning

**Hovedprinsipp:** Begrunn tolkninger med tekstens egne detaljer!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.4 NARRATIV: Eksamensforberedelse
// ============================================================================

export const CHAPTER_NORSK_VG3_8_4_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-8-4-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '8.4',
  title: 'Eksamensforberedelse',
  subtitle: 'Narrativ versjon',
  description: 'Praktiske strategier for skriftlig og muntlig eksamen i norsk - fra tidsplanlegging til å takle nervene.',
  estimatedMinutes: 35,
  competenceGoals: [
    'skrive fagartikler, litterære tolkninger og andre sakprosatekster med faglig innhold og utforskende tilnærming',
    'bruke fagkunnskap i muntlige presentasjoner',
    'mestre formkrav i hovedmål og sidemål',
  ],
  linkedChapterId: 'norsk-vg3-8-4',
  content: [
    {
      id: 'norsk-vg3-8-4-n-intro',
      type: 'text',
      content: `## Eksamensdagen nærmer seg

Det er tidlig morgen. Du sitter i et stort rom med mange andre elever. Foran deg ligger et ark med oppgaver du aldri har sett før. Du har fem timer. Hva gjør du?

Norskeksamen kan virke skremmende. Det er mye stoff, mange sjangre å mestre, hovedmål og sidemål å holde styr på. Men med god forberedelse og en klar strategi kan du møte eksamen med selvtillit.

I dette kapittelet skal vi se på praktiske tips og strategier - ikke bare for hva du skal kunne, men for hvordan du bruker tiden, hvordan du strukturerer svarene, og hvordan du håndterer stress.

For la oss være ærlige: Eksamen handler ikke bare om kunnskap. Det handler også om å prestere under press, å formidle det du kan på en klar og overbevisende måte, og å håndtere nervøsiteten som følger med.

La oss begynne med det mest praktiske: Hva møter du egentlig på eksamensdagen?`,
    },
    {
      id: 'norsk-vg3-8-4-n-section1',
      type: 'text',
      content: `## Skriftlig eksamen: Hva venter deg

Den skriftlige norskeksamenen i VG3 varer i fem timer. Den består vanligvis av to hoveddeler:

**Kortsvar:** Her får du flere kortere oppgaver. Du skal kanskje analysere et dikt, sammenligne to tekstutdrag, forklare et begrep, eller drøfte et utsagn kort. Kortsvarene tester om du kan bruke fagbegreper presist og besvare konkrete spørsmål.

**Langsvar:** Her skal du skrive én lengre, sammenhengende tekst. Det kan være en litterær tolkning av en hel novelle eller et drama, en drøftende tekst der du diskuterer et tema, et essay, eller en resonnerende tekst om et emne.

Du skal skrive på både hovedmål og sidemål. Vanligvis er én av delene på sidemålet.

**Tidsbruk er nøkkelen.** Med fem timer og flere oppgaver må du planlegge godt. En grov fordeling kan være:
- Les oppgavene og planlegg: 20-30 minutter
- Kortsvar: ca. 2 timer
- Langsvar: ca. 2-2,5 timer
- Gjennomlesing og korrektur: 30 minutter

Men dette er fleksibelt. Noen bruker mer tid på planlegging, andre på gjennomlesing. Finn det som fungerer for deg ved å øve på forhånd.`,
    },
    {
      id: 'norsk-vg3-8-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på skriftlig eksamen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-8-4-n-quiz1-q0',
            task: 'Hvor lang tid har du på skriftlig norskeksamen i VG3?',
            options: [
              { id: 'a', text: '3 timer', isCorrect: false },
              { id: 'b', text: '4 timer', isCorrect: false },
              { id: 'c', text: '5 timer', isCorrect: true },
              { id: 'd', text: '6 timer', isCorrect: false },
            ],
            solution: 'Skriftlig eksamen i norsk VG3 varer i 5 timer. Du skal besvare både kortsvar og langsvar.',
          },
          {
            id: 'norsk-vg3-8-4-n-quiz1-q1',
            task: 'Hva består den skriftlige norskeksamenen vanligvis av?',
            options: [
              { id: 'a', text: 'Bare en lang tekst', isCorrect: false },
              { id: 'b', text: 'Kortsvar og langsvar, på hovedmål og sidemål', isCorrect: true },
              { id: 'c', text: 'Bare flervalgsoppgaver', isCorrect: false },
              { id: 'd', text: 'En muntlig og en skriftlig del', isCorrect: false },
            ],
            solution: 'Eksamen består vanligvis av kortsvar (kortere oppgaver som tester fagbegreper) og langsvar (lengre sammenhengende tekst), på både hovedmål og sidemål.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-8-4-n-section2',
      type: 'text',
      content: `## Ulike oppgavetyper og hvordan takle dem

La oss se på de vanligste oppgavetypene og hva som kreves.

**Litterær tolkning:**
Du får en tekst - et dikt, en novelle, et utdrag - og skal analysere og tolke den. Bruk strukturen vi lærte tidligere: Innledning med tese, kort referat hvis relevant, analyse av virkemidler, tematisk tolkning, avslutning. Husk å sitere fra teksten og begrunne tolkningene dine.

**Drøftende tekst:**
Du får et utsagn eller en problemstilling og skal diskutere den. Her er strukturen viktig: Innledning med problemstilling, argumenter for og mot (med eksempler fra tekster eller samfunnet), din egen vurdering, avslutning. Vis at du ser flere sider av saken før du konkluderer.

**Essay:**
Friere form, men du trenger fortsatt en rød tråd. Start personlig, tenk høyt, veksle mellom det konkrete og det allmenne. Bruk litterære virkemidler. Essays bedømmes etter evne til refleksjon og skriftlig stil, ikke bare innhold.

**Sammenligning:**
Du får to tekster og skal sammenligne dem. Finn både likheter og forskjeller. Du kan strukturere enten tekst for tekst eller aspekt for aspekt. Ha en tydelig tese om forholdet mellom tekstene.

For alle oppgaver gjelder: Les oppgaven nøye! Svar på det du blir spurt om, ikke noe annet. Mange taper poeng fordi de skriver om ting oppgaven ikke spurte om.`,
    },
    {
      id: 'norsk-vg3-8-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på oppgavetyper:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-8-4-n-quiz2-q0',
            task: 'Hva er det viktigste å gjøre før du begynner å skrive på eksamen?',
            options: [
              { id: 'a', text: 'Begynne å skrive så fort som mulig for å spare tid', isCorrect: false },
              { id: 'b', text: 'Lese oppgaven nøye og planlegge svaret', isCorrect: true },
              { id: 'c', text: 'Skrive en lang innledning', isCorrect: false },
              { id: 'd', text: 'Se hva de andre elevene gjør', isCorrect: false },
            ],
            solution: 'Les oppgaven nøye og bruk tid på å planlegge. Mange taper poeng fordi de svarer på noe annet enn det oppgaven spør om.',
          },
          {
            id: 'norsk-vg3-8-4-n-quiz2-q1',
            task: 'Hva kjennetegner en drøftende tekst?',
            options: [
              { id: 'a', text: 'Man forteller bare sin egen mening', isCorrect: false },
              { id: 'b', text: 'Man diskuterer argumenter for og mot før man konkluderer', isCorrect: true },
              { id: 'c', text: 'Man gjenforteller en tekst uten egne kommentarer', isCorrect: false },
              { id: 'd', text: 'Man skriver et personlig brev til læreren', isCorrect: false },
            ],
            solution: 'I en drøftende tekst presenterer du argumenter for og mot med eksempler, viser at du ser flere sider av saken, og gir din egen vurdering med begrunnelse.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-8-4-n-section3',
      type: 'text',
      content: `## Sidemålet: Tips for å mestre det

For mange er sidemålet den største utfordringen. Her er noen konkrete tips:

**Bruk ordbok aktivt.** Du har lov til å bruke ordbok på eksamen. Slå opp ord du er usikker på. Det tar tid, men det er bedre enn å skrive feil.

**Kjenn de vanligste feilene.** Er du bokmålsbruker som skriver nynorsk? Pass på: infinitiv (å skrive, ikke å skriva), bøying av verb (eg skriv, du skriv, han skriv), pronomen (eg/me/dei). Er du nynorskbruker som skriver bokmål? Pass på: endelser (-ene, -et), kj-lyden, dobbel konsonant.

**Øv på forhånd.** Skriv tekstmeldinger på sidemålet. Les aviser på sidemålet. Jo mer du eksponerer deg, desto mer naturlig blir det.

**Les gjennom ekstra nøye.** Sett av tid på slutten til å lese sidemålsteksten din. Les gjerne høyt (i hodet) - da hører du feil lettere.

**Ikke stress.** Sensorene vet at sidemål er krevende. De forventer ikke perfeksjon. Fokuser på å kommunisere klart, selv om noen bøyingsfeil sniker seg inn.

Husk: Sidemål er en del av den totale vurderingen, men ikke alt. En tekst med noen språkfeil, men godt innhold og god struktur, kan fortsatt få god karakter.`,
    },
    {
      id: 'norsk-vg3-8-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på sidemål:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-8-4-n-quiz3-q0',
            task: 'Hva er det beste rådet for sidemålsskriving på eksamen?',
            options: [
              { id: 'a', text: 'Unngå å bruke ordbok fordi det tar for lang tid', isCorrect: false },
              { id: 'b', text: 'Skrive på hovedmålet og oversette etterpå', isCorrect: false },
              { id: 'c', text: 'Bruke ordbok aktivt og sette av tid til gjennomlesing', isCorrect: true },
              { id: 'd', text: 'Skrive så kort som mulig for å unngå feil', isCorrect: false },
            ],
            solution: 'Bruk ordbok aktivt og sett av tid på slutten til å lese gjennom sidemålsteksten nøye.',
          },
          {
            id: 'norsk-vg3-8-4-n-quiz3-q1',
            task: 'Hva bør du vite om sensorenes holdning til sidemålsfeil?',
            options: [
              { id: 'a', text: 'Hver eneste feil trekker mye i karakter', isCorrect: false },
              { id: 'b', text: 'Sensorene vet at sidemål er krevende og forventer ikke perfeksjon', isCorrect: true },
              { id: 'c', text: 'Sensorene bryr seg ikke om språkfeil i det hele tatt', isCorrect: false },
              { id: 'd', text: 'Sidemål teller ikke i den endelige karakteren', isCorrect: false },
            ],
            solution: 'Sensorene vet at sidemål er krevende. En tekst med noen språkfeil, men godt innhold og god struktur, kan fortsatt få god karakter. Fokuser på klar kommunikasjon.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-8-4-n-section4',
      type: 'text',
      content: `## Muntlig eksamen: Forberedelse og gjennomføring

Muntlig eksamen er annerledes. Du får vanligvis 24-48 timer til å forberede deg på et tema eller en tekst. Så presenterer du i ca. 10 minutter, før sensorene stiller spørsmål i ca. 20 minutter.

**Forberedelsestiden:**
Bruk tiden godt. Les teksten/temaet grundig. Lag en disposisjon for presentasjonen din. Forbered eksempler du kan bruke. Tenk på mulige oppfølgingsspørsmål. Øv på å presentere - gjerne for familie eller venner.

**Presentasjonen:**
Strukturer tydelig: Innledning (hva skal du snakke om), hoveddel (2-3 hovedpunkter), avslutning (oppsummering). Snakk tydelig og ikke for fort. Se på sensorene. Bruk notater, men ikke les fra dem.

**Samtalen:**
Her kan alt skje. Lytt nøye til spørsmålene. Det er lov å tenke før du svarer - stillhet er bedre enn vrøvl. Hvis du ikke forstår et spørsmål, be om presisering. Hvis du ikke vet svaret, si det ærlig og prøv likevel å vise hva du kan.

**Nervøsitet:**
Alle er nervøse. Det er normalt. Pust dypt. Husk at sensorene vil at du skal lykkes - de er ikke ute etter å ta deg. Og husk: Du har forberedt deg. Du kan mer enn du tror.`,
    },
    {
      id: 'norsk-vg3-8-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på muntlig eksamen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-8-4-n-quiz4-q0',
            task: 'Hva bør du gjøre hvis du ikke forstår et spørsmål på muntlig eksamen?',
            options: [
              { id: 'a', text: 'Late som du forstår og svare på noe annet', isCorrect: false },
              { id: 'b', text: 'Be om at spørsmålet presiseres eller omformuleres', isCorrect: true },
              { id: 'c', text: 'Si at du ikke kan svare og vente på neste spørsmål', isCorrect: false },
              { id: 'd', text: 'Gjenta spørsmålet sakte til du forstår det', isCorrect: false },
            ],
            solution: 'Det er helt greit å be om presisering. Sensorene foretrekker det fremfor at du svarer på feil spørsmål.',
          },
          {
            id: 'norsk-vg3-8-4-n-quiz4-q1',
            task: 'Hvordan bør du strukturere en muntlig presentasjon?',
            options: [
              { id: 'a', text: 'Snakk fritt uten noen plan', isCorrect: false },
              { id: 'b', text: 'Les alt fra notatene dine', isCorrect: false },
              { id: 'c', text: 'Innledning, 2-3 hovedpunkter, oppsummering', isCorrect: true },
              { id: 'd', text: 'Start med konklusjonen og jobb bakover', isCorrect: false },
            ],
            solution: 'Strukturer tydelig: innledning (hva du skal snakke om), hoveddel (2-3 hovedpunkter) og avslutning (oppsummering). Bruk notater, men ikke les fra dem.',
          },
          {
            id: 'norsk-vg3-8-4-n-quiz4-q2',
            task: 'Hva er det viktigste å huske om nervøsitet på eksamen?',
            options: [
              { id: 'a', text: 'At du ikke bør være nervøs, det betyr at du er dårlig forberedt', isCorrect: false },
              { id: 'b', text: 'At alle er nervøse og sensorene vil at du skal lykkes', isCorrect: true },
              { id: 'c', text: 'At du må skjule nervøsiteten for enhver pris', isCorrect: false },
              { id: 'd', text: 'At du bør ta medisiner mot nervøsitet', isCorrect: false },
            ],
            solution: 'Alle er nervøse, og det er normalt. Sensorene er ikke ute etter å ta deg -- de vil at du skal lykkes. Pust dypt og husk at du har forberedt deg.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-8-4-n-section5',
      type: 'text',
      content: `## De siste dagene før eksamen

Eksamen nærmer seg. Hva gjør du nå?

**Repeter, ikke kram.** Å lære nye ting natten før eksamen fungerer dårlig. Fokuser på å repetere det du allerede kan. Gå gjennom notater, se på tidligere prøver, frisk opp sentrale begreper.

**Øv på skrivingen.** Skriv øvingsoppgaver under tidspress. Det trener deg på å disponere tiden og på å skrive under press.

**Ta vare på deg selv.** Søvn er viktigere enn siste pugg. Spis ordentlig. Ta pauser. Fysisk aktivitet hjelper mot stress.

**Forbered det praktiske.** Ha alt klart kvelden før: Skrivesaker, ordbok, legitimasjon, mat og drikke. Stress om praktiske ting tar energi fra selve eksamen.

**På eksamensdagen:** Stå opp i god tid. Spis frokost. Kom tidlig. Og husk: Dette er bare én prøve blant mange. Det definerer ikke hvem du er eller hva du kan oppnå i livet.

**Lykke til!**

Du har forberedt deg. Du har verktøyene. Nå handler det bare om å vise hva du kan. Ta én oppgave av gangen, fokuser på det du holder på med, og stol på deg selv.`,
    },
    {
      id: 'norsk-vg3-8-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på eksamensforberedelse:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-8-4-n-quiz5-q0',
            task: 'Hva er det beste rådet for dagene rett før eksamen?',
            options: [
              { id: 'a', text: 'Lese alt pensum på nytt fra start', isCorrect: false },
              { id: 'b', text: 'Repetere det du kan, sove godt og ta vare på deg selv', isCorrect: true },
              { id: 'c', text: 'Øve hele natten for å huske mest mulig', isCorrect: false },
              { id: 'd', text: 'Unngå all repetisjon for å spare energi', isCorrect: false },
            ],
            solution: 'Repeter det du allerede kan, sov godt og spis ordentlig. Søvn er viktigere enn siste pugg.',
          },
          {
            id: 'norsk-vg3-8-4-n-quiz5-q1',
            task: 'Hvorfor bør du øve på å skrive under tidspress før eksamen?',
            options: [
              { id: 'a', text: 'Fordi læreren krever det', isCorrect: false },
              { id: 'b', text: 'For å trene på å disponere tiden og skrive under press', isCorrect: true },
              { id: 'c', text: 'Fordi det er den eneste måten å lære på', isCorrect: false },
              { id: 'd', text: 'For å rekke over alt pensum', isCorrect: false },
            ],
            solution: 'Å skrive øvingsoppgaver under tidspress trener deg på å disponere tiden riktig og på å prestere under press -- ferdigheter som er like viktige som fagkunnskapen.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-8-4-n-summary',
      type: 'text',
      content: `## Oppsummering

**Skriftlig eksamen:**
- Varer 5 timer
- Kortsvar + langsvar
- Hovedmål og sidemål
- Planlegg tiden godt (les, skriv, les gjennom)

**Oppgavetyper:**
- Litterær tolkning: Analyser og tolk med belegg
- Drøftende tekst: Argumenter for og mot, konkluder
- Essay: Personlig stemme, utforskende
- Sammenligning: Likheter og forskjeller, tydelig tese

**Les oppgaven nøye!** Svar på det du blir spurt om.

**Sidemål:**
- Bruk ordbok aktivt
- Kjenn de vanligste feilene
- Les gjennom ekstra nøye
- Fokuser på kommunikasjon

**Muntlig eksamen:**
- Forberedelsestid: Planlegg, øv, tenk på spørsmål
- Presentasjon: Strukturert, tydelig, med øyekontakt
- Samtale: Lytt, tenk, vær ærlig om det du ikke vet

**Før eksamen:**
- Repeter, ikke kram
- Sov godt, spis ordentlig
- Ha alt praktisk klart
- Stol på deg selv

**Lykke til!**`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const NORSK_VG3_NARRATIV_DEL8_CHAPTERS = [
  CHAPTER_NORSK_VG3_7_1_NARRATIV,
  CHAPTER_NORSK_VG3_7_2_NARRATIV,
  CHAPTER_NORSK_VG3_7_3_NARRATIV,
  CHAPTER_NORSK_VG3_8_1_NARRATIV,
  CHAPTER_NORSK_VG3_8_2_NARRATIV,
  CHAPTER_NORSK_VG3_8_3_NARRATIV,
  CHAPTER_NORSK_VG3_8_4_NARRATIV,
];
