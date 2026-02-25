/**
 * Naturfag 10 - Narrativ versjon DEL 5B
 * Seksjon 5: Kroppen - Livsstil og helse (5.5), Rusmidler og avhengighet (5.6)
 *
 * Engasjerende fortellende format optimalisert for lesing/lytting på mobil
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 5.5 NARRATIV: Livsstil og helse
// ============================================================================

export const CHAPTER_NATURFAG_10_5_5_NARRATIV: TextbookChapter = {
  id: 'naturfag-10-5-5-narrativ',
  courseId: 'naturfag-10',
  chapterNumber: '5.5',
  title: 'Livsstil og helse',
  subtitle: 'Narrativ versjon',
  description:
    'Oppdag hvordan hverdagslige valg om mat, trening og søvn påvirker hele kroppen din, fra hjernens funksjon til immunforsvarets styrke, og lær hvorfor livsstilssykdommer er blant vår tids største helseutfordringer.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forklare sammenhengen mellom livsstil og helse',
    'beskrive næringsstoffenes betydning for kroppen',
    'forklare hvorfor fysisk aktivitet og søvn er viktig for helsen',
    'kjenne til livsstilssykdommer og hvordan de kan forebygges',
  ],
  linkedChapterId: 'naturfag-10-5-5',
  content: [
    {
      id: 'naturfag-10-5-5-n-intro',
      type: 'text',
      content: `## Hvert valg teller

Tenk deg at kroppen din er som en avansert maskin. Nervesystemet er ledningsnettet, hormonsystemet er termostaten, og immunforsvaret er alarmsystemet. Du har allerede lært om alle tre. Men her kommer det avgjørende spørsmålet: Hva bestemmer om denne maskinen går som en drøm eller sliter seg i stykker?

Svaret er overraskende enkelt. Det handler om livsstil, altså de valgene du tar hver eneste dag. Hva du spiser til frokost. Om du går eller kjører til skolen. Hvor mange timer du sover. Selv om det kanskje ikke føles som det akkurat nå, former disse små hverdagsvalgene helsen din på måter som varer et helt liv.

Verdens helseorganisasjon, WHO, definerer helse som en tilstand av fullstendig fysisk, psykisk og sosialt velvære, og ikke bare fravær av sykdom. Det betyr at helse handler om mye mer enn å unngå å bli syk. Det handler om å ha det bra, i kroppen, i hodet og med mennesker rundt deg. Noen ting kan vi ikke styre, som gener og alder. Men kosthold, aktivitet, søvn og stresshåndtering er faktorer vi kan påvirke, og de har enorm betydning.`,
    },
    {
      id: 'naturfag-10-5-5-n-section1',
      type: 'text',
      content: `## Næringsstoffene kroppen trenger

Kroppen din er en kjemisk fabrikk som kjører døgnet rundt, og den trenger råvarer. Disse råvarene kaller vi næringsstoffer, og det finnes seks hovedgrupper du bør kjenne til.

Karbohydrater er kroppens viktigste energikilde. Du finner dem i brød, pasta, ris, poteter og frukt. Hvert gram karbohydrater gir deg 17 kilojoule med energi. Proteiner er byggematerialene som reparerer og bygger celler, muskler, hud og hår. Kjøtt, fisk, egg, bønner og nøtter er gode proteinkilder. De gir også 17 kilojoule per gram. Fett er det mest energirike næringsstoffet med hele 38 kilojoule per gram, altså mer enn dobbelt så mye som karbohydrater. Fett fungerer som energilager, bygger cellemembraner og hjelper kroppen med å transportere vitaminer. Gode fettkilder er olje, nøtter og fet fisk.

I tillegg trenger du vitaminer og mineraler som regulerer prosessene i kroppen. Vitamin C styrker immunforsvaret, kalsium gir sterke bein, og jern er nødvendig for oksygentransport. Vann er livsviktig for å transportere stoffer og regulere kroppstemperaturen. Og kostfiber fra fullkorn, frukt og grønnsaker sørger for god fordøyelse.

Helsedirektoratet anbefaler at vi spiser variert, med minst fem porsjoner frukt og grønnsaker om dagen, velger fullkorn, spiser fisk to til tre ganger i uken, og begrenser sukker, salt og mettet fett.`,
    },
    {
      id: 'naturfag-10-5-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-5-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på næringsstoffer og kosthold:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-5-5-n-quiz1-q0',
            task: 'Hvilket næringsstoff gir mest energi per gram?',
            options: [
              { id: 'a', text: 'Karbohydrater', isCorrect: false },
              { id: 'b', text: 'Proteiner', isCorrect: false },
              { id: 'c', text: 'Fett', isCorrect: true },
              { id: 'd', text: 'Vitaminer', isCorrect: false },
            ],
            solution:
              'Fett gir 38 kJ per gram, mens karbohydrater og proteiner gir 17 kJ per gram. Vitaminer gir ingen energi i det hele tatt, men er viktige for å regulere kroppens prosesser.',
          },
          {
            id: 'naturfag-10-5-5-n-quiz1-q1',
            task: 'Hvor mange porsjoner frukt og grønnsaker anbefaler Helsedirektoratet daglig?',
            options: [
              { id: 'a', text: '3 om dagen', isCorrect: false },
              { id: 'b', text: '5 om dagen', isCorrect: true },
              { id: 'c', text: '7 om dagen', isCorrect: false },
              { id: 'd', text: '10 om dagen', isCorrect: false },
            ],
            solution:
              'Helsedirektoratets anbefaling er minst 5 porsjoner frukt og grønnsaker hver dag. De inneholder viktige vitaminer, mineraler, kostfiber og antioksidanter som styrker helsen og reduserer risiko for hjerte-kar-sykdommer og diabetes type 2.',
          },
          {
            id: 'naturfag-10-5-5-n-quiz1-q2',
            task: 'Hva er energibalanse?',
            options: [
              { id: 'a', text: 'At kroppen alltid har overskudd av energi', isCorrect: false },
              { id: 'b', text: 'Forholdet mellom energi inn og energi ut', isCorrect: true },
              { id: 'c', text: 'At man kun spiser karbohydrater', isCorrect: false },
              { id: 'd', text: 'At man trener minst 60 minutter daglig', isCorrect: false },
            ],
            solution:
              'Energibalanse handler om forholdet mellom energi inn (mat og drikke) og energi ut (grunnforbrenning pluss fysisk aktivitet). Hvis energi inn er lik energi ut, holder vekten seg stabil. Positiv energibalanse over tid fører til vektøkning, mens negativ energibalanse fører til vektnedgang.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-5-5-n-section2',
      type: 'text',
      content: `## Fysisk aktivitet og hva den gjør med kroppen

Helsedirektoratet anbefaler at ungdom er fysisk aktive minst 60 minutter hver dag, med variert aktivitet som inkluderer både kondisjon og styrke. Det kan høres mye ut, men det handler ikke bare om organisert trening. Å gå til skolen, sykle, danse eller leke utendørs teller også.

Når du trener, skjer det en hel rekke ting i kroppen. Hjertet slår raskere og pumper mer blod, du puster fortere for å få inn mer oksygen, og musklene får økt blodtilførsel. Kroppen svetter for å kjøle seg ned, og hjernen frigjør endorfiner, som ofte kalles lykkehormoner, fordi de gir en følelse av velvære.

De langsiktige effektene av regelmessig trening er imponerende. Hjertet blir sterkere og mer effektivt. Lungene tar opp mer oksygen. Musklene og beinene styrkes. Kondisjonen forbedres, og risikoen for livsstilssykdommer synker markant. Men de fysiske effektene er bare halve historien.

Fysisk aktivitet har nemlig kraftige effekter på psykisk helse også. Trening reduserer stresshormoner, gir bedre humør gjennom endorfinproduksjon, øker konsentrasjonsevnen og bygger selvtillit gjennom mestring. Forskning viser at regelmessig trening kan være like effektivt som medisiner mot mild til moderat depresjon. I tillegg gir idrett og aktivitet sosiale fordeler som nye venner, samarbeid og tilhørighet.`,
    },
    {
      id: 'naturfag-10-5-5-n-section3',
      type: 'text',
      content: `## Søvn: Kroppens reparasjonsverksted

Mens du sover, jobber kroppen på høygir. Hjernen behandler og lagrer informasjon fra dagen, flytter viktige opplevelser fra korttidsminne til langtidsminne, og tømmer ut avfallsstoffer. Kroppen reparerer skadede celler, bygger muskler og produserer veksthormon, noe som er spesielt viktig når du er ungdom. Immunforsvaret styrkes, og følelser og opplevelser bearbeides.

Ungdom mellom 13 og 18 år trenger 8 til 10 timer søvn per natt. Likevel sover mange ungdommer altfor lite. Konsekvensene merkes fort: trøtthet, dårlig konsentrasjon, irritabilitet, svekket hukommelse og økt risiko for ulykker. Over tid kan kronisk søvnmangel svekke immunforsvaret, øke risikoen for overvekt, diabetes og depresjon, og gi dårligere skoleprestasjoner.

Søvnen er organisert i sykluser på omtrent 90 minutter. Hver syklus går gjennom lett søvn, moderat søvn, dyp søvn og REM-søvn. I dyp søvn reparerer kroppen celler og produserer veksthormon. I REM-søvn, der hjernen er svært aktiv og vi drømmer, bearbeides læring og hukommelse. Tidlig på natten dominerer dyp søvn, mens REM-søvn øker mot morgenen. Derfor er det viktig å sove hele natten.

Et stort problem for ungdom er skjermbruk om kvelden. Blått lys fra mobiler og nettbrett hemmer produksjonen av melatonin, søvnhormonet. Tips for god søvn inkluderer faste rutiner, å legge bort mobilen minst en time før sengetid, å ha et mørkt og stille soverom, og å unngå koffein sent på kvelden.`,
    },
    {
      id: 'naturfag-10-5-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-5-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på fysisk aktivitet og søvn:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-5-5-n-quiz2-q0',
            task: 'Hvor mange minutter fysisk aktivitet anbefales daglig for ungdom?',
            options: [
              { id: 'a', text: '20 minutter', isCorrect: false },
              { id: 'b', text: '30 minutter', isCorrect: false },
              { id: 'c', text: '60 minutter', isCorrect: true },
              { id: 'd', text: '120 minutter', isCorrect: false },
            ],
            solution:
              'Helsedirektoratet anbefaler minst 60 minutter fysisk aktivitet daglig for ungdom. Aktiviteten bør være variert og inkludere både kondisjonstrening og styrketrening. All bevegelse teller, også gange, sykling og lek.',
          },
          {
            id: 'naturfag-10-5-5-n-quiz2-q1',
            task: 'Hva er endorfiner?',
            options: [
              { id: 'a', text: 'Hormoner som gjør deg trøtt', isCorrect: false },
              { id: 'b', text: 'Kroppens naturlige lykkehormoner som frigjøres under fysisk aktivitet', isCorrect: true },
              { id: 'c', text: 'Stoffer som bryter ned muskelvev', isCorrect: false },
              { id: 'd', text: 'Vitaminer som finnes i frukt', isCorrect: false },
            ],
            solution:
              'Endorfiner er kroppens naturlige lykkehormoner som frigjøres under fysisk aktivitet. De gir en følelse av velvære og glede, og bidrar til bedre humør. Effekten merkes allerede etter 20 til 30 minutters aktivitet.',
          },
          {
            id: 'naturfag-10-5-5-n-quiz2-q2',
            task: 'Hvorfor gjør skjermbruk om kvelden det vanskeligere å sovne?',
            options: [
              { id: 'a', text: 'Fordi skjermer sender ut infrarødt lys som varmer hjernen', isCorrect: false },
              { id: 'b', text: 'Fordi blått lys fra skjermer hemmer produksjonen av søvnhormonet melatonin', isCorrect: true },
              { id: 'c', text: 'Fordi skjermer bruker opp oksygenet i rommet', isCorrect: false },
              { id: 'd', text: 'Fordi all lyd fra skjermer forstyrrer hørselen', isCorrect: false },
            ],
            solution:
              'Blått lys fra mobiler, nettbrett og dataskjermer hemmer produksjonen av melatonin, som er søvnhormonet. Melatonin forteller kroppen at det er natt og tid for å sove. Når melatoninproduksjonen hemmes, tror kroppen det fortsatt er dag, og det blir vanskeligere å sovne.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-5-5-n-section4',
      type: 'text',
      content: `## Mental helse: Like viktig som fysisk helse

Mental helse handler om hvordan vi tenker, føler og har det. God mental helse betyr at du føler deg trygg og glad, kan håndtere stress, har god selvfølelse og gode relasjoner til mennesker rundt deg. Dårlig mental helse kan vise seg som vedvarende tristhet, angst, vansker med å håndtere hverdagen, isolering fra andre, søvnproblemer og lite energi.

Stress er noe alle opplever. Litt stress kan faktisk være bra fordi det motiverer oss til innsats. Men for mye stress over tid er skadelig og kan gi hodepine, mageproblemer, søvnvansker og konsentrasjonsvansker. Angst er en sterkere form for frykt eller bekymring som kan oppstå i spesielle situasjoner eller være mer generell. Depresjon er mer enn å være trist, det er en sykdom som påvirker tanker, følelser og atferd, og som kan behandles med terapi og eventuelt medisiner.

Hvis du eller noen du kjenner sliter, finnes det hjelp. Du kan snakke med foreldre, en lærer eller helsesykepleier på skolen. Profesjonell hjelp er tilgjengelig gjennom fastlegen, helsestasjon for ungdom, eller psykolog. Barnevakten kan nås på telefon 116 111, og Mental Helse Hjelpetelefon har nummer 116 123. Å søke hjelp er et tegn på styrke, ikke svakhet.`,
    },
    {
      id: 'naturfag-10-5-5-n-section5',
      type: 'text',
      content: `## Livsstilssykdommer: Når hverdagsvalg gir store konsekvenser

Livsstilssykdommer er sykdommer som i stor grad skyldes hvordan vi lever. De viktigste risikofaktorene er usunt kosthold, for lite fysisk aktivitet, røyking, stort alkoholforbruk og overvekt. La oss se på de vanligste.

Hjerte-kar-sykdommer rammer hjertet og blodårene. Hjerteinfarkt og hjerneslag er alvorlige eksempler. Årsakene inkluderer høyt kolesterol, høyt blodtrykk, røyking, fedme og inaktivitet. Diabetes type 2 oppstår når kroppen ikke klarer å regulere blodsukkeret ordentlig fordi cellene reagerer dårlig på insulin. Overvekt, usunt kosthold og lite fysisk aktivitet er hovedårsakene. Det er viktig å skille dette fra diabetes type 1, som skyldes at kroppen ikke lager insulin og ikke kan forebygges med livsstil. KOLS, kronisk obstruktiv lungesykdom, er en varig lungesykdom som gir pustevansker. Omtrent 85 prosent av alle tilfeller skyldes røyking.

Den gode nyheten er at de fleste livsstilssykdommer kan forebygges. Sunt kosthold med mye frukt, grønnsaker og fullkorn. Minst 60 minutter fysisk aktivitet daglig. Å ikke røyke. Begrenset alkohol. God søvn på 8 til 10 timer for ungdom. Og god stresshåndtering. Små, daglige valg har stor betydning over tid. Ved å leve sunt kan du forebygge de fleste livsstilssykdommer og leve et lengre, friskere liv.`,
    },
    {
      id: 'naturfag-10-5-5-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-5-5-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på mental helse og livsstilssykdommer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-5-5-n-quiz3-q0',
            task: 'Hvilken av disse sykdommene er IKKE en typisk livsstilssykdom?',
            options: [
              { id: 'a', text: 'Diabetes type 1', isCorrect: true },
              { id: 'b', text: 'Diabetes type 2', isCorrect: false },
              { id: 'c', text: 'KOLS', isCorrect: false },
              { id: 'd', text: 'Hjerte-kar-sykdommer', isCorrect: false },
            ],
            solution:
              'Diabetes type 1 er ikke en livsstilssykdom. Den skyldes at kroppen ikke produserer insulin, og kan ikke forebygges med livsstil. Diabetes type 2, KOLS og hjerte-kar-sykdommer er derimot typiske livsstilssykdommer som i stor grad kan forebygges med sunne valg.',
          },
          {
            id: 'naturfag-10-5-5-n-quiz3-q1',
            task: 'Hva er hovedårsaken til KOLS?',
            options: [
              { id: 'a', text: 'Lite fysisk aktivitet', isCorrect: false },
              { id: 'b', text: 'Usunt kosthold', isCorrect: false },
              { id: 'c', text: 'Røyking', isCorrect: true },
              { id: 'd', text: 'Søvnmangel', isCorrect: false },
            ],
            solution:
              'Røyking er hovedårsaken til KOLS (kronisk obstruktiv lungesykdom). Omtrent 85 prosent av alle tilfeller skyldes røyking. KOLS gir varig skade på lungene med trangere luftveier og ødelagte lungeblærer, noe som fører til pustevansker.',
          },
          {
            id: 'naturfag-10-5-5-n-quiz3-q2',
            task: 'Hva kjennetegner positiv energibalanse over lang tid?',
            options: [
              { id: 'a', text: 'Du får mer energi og blir mer aktiv', isCorrect: false },
              { id: 'b', text: 'Du spiser mer enn kroppen forbrenner, noe som fører til vektøkning', isCorrect: true },
              { id: 'c', text: 'Kroppen bruker mer energi enn den får og vekten synker', isCorrect: false },
              { id: 'd', text: 'Energi inn og energi ut er i balanse', isCorrect: false },
            ],
            solution:
              'Positiv energibalanse betyr at energi inn er større enn energi ut. Kroppen får altså mer energi enn den bruker, og overskuddsenergien lagres som fett. Over tid fører dette til vektøkning og økt risiko for livsstilssykdommer som diabetes type 2 og hjerte-kar-sykdommer.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-5-5-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi sett at helse er mye mer enn fravær av sykdom. WHO definerer helse som fullstendig fysisk, psykisk og sosialt velvære. Livsstilen vår, de daglige valgene vi tar, har enorm påvirkning på alle tre dimensjonene.

Kroppen trenger seks hovedgrupper av næringsstoffer: karbohydrater som hovedenergikilde med 17 kJ per gram, proteiner som byggemateriale med 17 kJ per gram, fett som energilager med hele 38 kJ per gram, vitaminer og mineraler som regulerer prosesser, vann for transport og temperaturregulering, og kostfiber for god fordøyelse.

Fysisk aktivitet på minst 60 minutter daglig styrker hjerte, lunger, muskler og bein, forebygger overvekt, frigjør endorfiner som bedrer humøret, og reduserer stress og angst. Søvn på 8 til 10 timer per natt er nødvendig for at hjernen skal behandle informasjon, kroppen skal reparere seg og immunforsvaret skal holdes sterkt. Blått lys fra skjermer hemmer melatonin og bør unngås før sengetid.

Mental helse er like viktig som fysisk helse. Stress, angst og depresjon er vanlige plager som kan behandles, og det finnes hjelp å få. De viktigste livsstilssykdommene, hjerte-kar-sykdommer, diabetes type 2, fedme og KOLS, kan i stor grad forebygges gjennom sunne livsstilsvalg. Små daglige valg utgjør til sammen en stor forskjell for helsen din.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.6 NARRATIV: Rusmidler og avhengighet
// ============================================================================

export const CHAPTER_NATURFAG_10_5_6_NARRATIV: TextbookChapter = {
  id: 'naturfag-10-5-6-narrativ',
  courseId: 'naturfag-10',
  chapterNumber: '5.6',
  title: 'Rusmidler og avhengighet',
  subtitle: 'Narrativ versjon',
  description:
    'Forstå hvordan rusmidler, legemidler, doping og miljøgifter påvirker nervesystemet og hormonsystemet, fra koffeinkoppen om morgenen til de farligste narkotiske stoffene, og lær hvorfor ungdommens hjerne er ekstra sårbar.',
  estimatedMinutes: 55,
  competenceGoals: [
    'sammenligne nervesystemet og hormonsystemet og beskrive hvordan rusmidler, legemidler, miljøgifter og doping påvirker signalsystemene',
  ],
  linkedChapterId: 'naturfag-10-5-6',
  content: [
    {
      id: 'naturfag-10-5-6-n-intro',
      type: 'text',
      content: `## Stoffer som endrer hjernen

Kroppen din har to store kommunikasjonssystemer. Nervesystemet sender raske elektriske signaler og bruker kjemiske signalstoffer kalt nevrotransmittere i synapsene mellom nerveceller. Hormonsystemet sender langsommere kjemiske signaler gjennom blodbanen. Begge systemene kan påvirkes av stoffer utenfra, noen på nyttige måter, andre på farlige.

Når du tar en smertestillende tablett for hodepine, bruker du et legemiddel som demper smertesignaler i hjernen på en kontrollert måte. Men mange andre stoffer kan også gripe inn i signaloverføringen, med helt andre konsekvenser. Rusmidler forstyrrer hjernens naturlige belønningssystem. Dopingmidler roter til hormonsystemets nøye avstemte tilbakekoblingsmekanismer. Og miljøgifter kan etterligne kroppens egne hormoner og skape forstyrrelser som varer i generasjoner.

I dette kapittelet skal vi utforske hvordan alle disse stoffene virker, fra den daglige kaffekoppen til de farligste narkotiske stoffene. Nøkkelen til å forstå alt dette er nevrotransmittere og reseptorer, de kjemiske budbringerne og mottakerne som styrer all kommunikasjon i hjernen din.`,
    },
    {
      id: 'naturfag-10-5-6-n-section1',
      type: 'text',
      content: `## Psykoaktive stoffer og hvordan de påvirker hjernen

Et psykoaktivt stoff er et stoff som påvirker hjernen og endrer hvordan vi tenker, føler eller oppfører oss. De virker ved å endre signaloverføringen mellom nerveceller. Koffein, alkohol, nikotin, cannabis og mange legemidler er alle psykoaktive stoffer.

For å forstå hvordan de virker, må vi huske hva som skjer i en synapse. Nervecellen frigjør nevrotransmittere i synapsespalten. Disse binder seg til reseptorer på neste nervecelle og sender signalet videre, eller hemmer det. Psykoaktive stoffer kan gripe inn i denne prosessen på fire hovedmåter. De kan etterligne nevrotransmittere og binde seg til de samme reseptorene, slik THC i cannabis ligner på kroppens egne endocannabinoider. De kan øke mengden nevrotransmittere ved å hindre at de fjernes fra synapsespalten, slik kokain blokkerer gjenopptaket av dopamin. De kan hemme frigjøring av nevrotransmittere og svekke signalet, slik alkohol gjør i deler av hjernen. Eller de kan blokkere reseptorer uten å aktivere dem, slik nalokson blokkerer opioidreseptorer.

De viktigste nevrotransmitterne å kjenne til er dopamin, som styrer belønning og motivasjon, serotonin som påvirker humør og søvn, GABA som demper nerveaktivitet og gir ro, noradrenalin som styrer oppmerksomhet, og endorfiner som gir smertelindring og velvære.`,
    },
    {
      id: 'naturfag-10-5-6-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-5-6-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på psykoaktive stoffer og nevrotransmittere:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-5-6-n-quiz1-q0',
            task: 'Hva er den viktigste forskjellen mellom stimulerende og dempende stoffer?',
            options: [
              { id: 'a', text: 'Stimulerende stoffer øker aktiviteten i nervesystemet, mens dempende stoffer senker den', isCorrect: true },
              { id: 'b', text: 'Stimulerende stoffer er lovlige, mens dempende stoffer er ulovlige', isCorrect: false },
              { id: 'c', text: 'Stimulerende stoffer gir avhengighet, mens dempende stoffer ikke gjør det', isCorrect: false },
              { id: 'd', text: 'Stimulerende stoffer virker på hormoner, mens dempende stoffer virker på nerver', isCorrect: false },
            ],
            solution:
              'Stimulerende stoffer som koffein og amfetamin øker signaloverføringen i nervesystemet og gjør deg mer aktiv og våken. Dempende stoffer som alkohol og opioider reduserer signaloverføringen og gjør deg roligere og trøttere. Lovlighet har ingenting med virkning å gjøre, og begge typer kan gi avhengighet.',
          },
          {
            id: 'naturfag-10-5-6-n-quiz1-q1',
            task: 'Hvordan virker koffein på nervesystemet?',
            options: [
              { id: 'a', text: 'Det øker produksjonen av GABA i hjernen', isCorrect: false },
              { id: 'b', text: 'Det blokkerer adenosinreseptorer slik at tretthetssignalet hemmes', isCorrect: true },
              { id: 'c', text: 'Det frigjør store mengder serotonin i synapsene', isCorrect: false },
              { id: 'd', text: 'Det ødelegger nervecellene slik at de slutter å sende signaler', isCorrect: false },
            ],
            solution:
              'Koffein blokkerer adenosinreseptorer i hjernen. Adenosin er et stoff som bygger seg opp gjennom dagen og gjør deg trøtt. Koffein ligner på adenosin og binder seg til reseptorene, men aktiverer dem ikke. Dermed blokkeres tretthetssignalet, og du føler deg mer våken.',
          },
          {
            id: 'naturfag-10-5-6-n-quiz1-q2',
            task: 'Hva betyr toleranse?',
            options: [
              { id: 'a', text: 'At man ikke tåler et stoff i det hele tatt', isCorrect: false },
              { id: 'b', text: 'At kroppen venner seg til et stoff og man trenger mer for samme virkning', isCorrect: true },
              { id: 'c', text: 'At man er immun mot bivirkninger av et stoff', isCorrect: false },
              { id: 'd', text: 'At man har sluttet å bruke et stoff', isCorrect: false },
            ],
            solution:
              'Toleranse betyr at kroppen venner seg til et stoff slik at man trenger stadig høyere doser for å oppnå samme virkning. Hjernen tilpasser seg ved å produsere færre reseptorer eller mindre av sine egne nevrotransmittere. Toleranse er ofte et forvarsel om avhengighet.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-5-6-n-section2',
      type: 'text',
      content: `## Legemidler: Stoffer som brukes riktig

Legemidler skiller seg fra rusmidler ved at de er utviklet gjennom vitenskapelig forskning og har gjennomgått strenge tester for å dokumentere virkning og sikkerhet. De påvirker kjemiske prosesser i kroppen på en kontrollert måte.

Smertestillende som paracetamol virker i hjernen og demper smertesignaler ved å hemme produksjonen av prostaglandiner. Ibuprofen hemmer enzymet COX som produserer stoffer som gir smerte, betennelse og feber. Opioider som morfin binder seg til opioidreseptorer i hjernen og blokkerer smertesignaler svært effektivt, men kan gi avhengighet.

Antibiotika dreper eller hemmer veksten av bakterier. De virker bare mot bakterier, ikke mot virus. Derfor hjelper ikke antibiotika mot forkjølelse eller influensa. Antibiotikaresistens er et alvorlig og voksende problem. Når antibiotika brukes feil, overlever de bakteriene som tilfeldig har mutasjoner som gir motstandskraft, gjennom naturlig utvalg. Disse resistente bakteriene formerer seg, og infeksjoner som før var lette å behandle, kan bli livstruende.

Alle legemidler kan ha bivirkninger, altså uønskede virkninger. Det er viktig å følge doseringen, ikke kombinere legemidler uten å sjekke med lege, alltid fullføre antibiotikakurer, og aldri dele reseptbelagte legemidler med andre.`,
    },
    {
      id: 'naturfag-10-5-6-n-section3',
      type: 'text',
      content: `## Alkohol: Hjernens bremser svikter

Alkohol, eller etanol, er et dempende rusmiddel. Det senker aktiviteten i hjernen gjennom en dobbel mekanisme: Alkohol forsterker virkningen av den dempende nevrotransmitteren GABA, slik at nervesignaler dempes kraftig. Samtidig blokkerer det glutamatreseptorer, som er hjernens viktigste stimulerende system. I tillegg øker alkohol frigjøringen av dopamin i belønningssenteret, noe som gir en følelse av velvære og gjør alkohol vanedannende.

Promille måler alkoholkonsentrasjon i blodet. Ved 0,2 til 0,5 promille er du lett avslappet med noe nedsatt reaksjonsevne. Ved 1,0 til 1,5 er du tydelig beruset, ustø og utydelig. Over 3,0 promille er livstruende fordi pustesenteret i hjernen kan hemmes. Leveren bryter ned alkohol med enzymet alkoholdehydrogenase med en hastighet på bare 0,1 til 0,15 promille per time. Det hjelper ikke å drikke kaffe eller ta kald dusj.

Langsiktig alkoholbruk kan gi leverskader fra fettlever til skrumplever, hjerneskade med tap av nerveceller, økt kreftrisiko, hjerte-kar-sykdommer og psykiske plager. Men alkohol er spesielt farlig for ungdom. Hjernen er ikke ferdig utviklet før rundt 25 års alder, og spesielt pannelappen som styrer dømmekraft og impulskontroll modnes sent. Alkohol kan skade den utviklende hjernen permanent, og jo tidligere man begynner å drikke, desto større er risikoen for å utvikle avhengighet.`,
    },
    {
      id: 'naturfag-10-5-6-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-5-6-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på legemidler og alkohol:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-5-6-n-quiz2-q0',
            task: 'Hvorfor virker ikke antibiotika mot forkjølelse?',
            options: [
              { id: 'a', text: 'Fordi forkjølelse forårsakes av virus, og antibiotika virker bare mot bakterier', isCorrect: true },
              { id: 'b', text: 'Fordi forkjølelsesviruset er resistent mot all antibiotika', isCorrect: false },
              { id: 'c', text: 'Fordi antibiotika bare virker i magen', isCorrect: false },
              { id: 'd', text: 'Fordi forkjølelsesviruset er for stort for antibiotika', isCorrect: false },
            ],
            solution:
              'Antibiotika virker ved å angripe strukturer som er unike for bakterier, som celleveggen eller ribosomene. Virus har ikke disse strukturene og er ikke levende celler. Forkjølelse og influensa skyldes virus, så her må immunforsvaret gjøre jobben selv.',
          },
          {
            id: 'naturfag-10-5-6-n-quiz2-q1',
            task: 'Hvorfor er alkohol klassifisert som et dempende rusmiddel?',
            options: [
              { id: 'a', text: 'Fordi det gjør folk triste', isCorrect: false },
              { id: 'b', text: 'Fordi det senker kroppstemperaturen', isCorrect: false },
              { id: 'c', text: 'Fordi det forsterker GABA og hemmer glutamat, noe som senker nerveaktiviteten', isCorrect: true },
              { id: 'd', text: 'Fordi det demper immunforsvaret', isCorrect: false },
            ],
            solution:
              'Klassifiseringen handler om virkningen på nervesystemets aktivitet. Alkohol forsterker den dempende nevrotransmitteren GABA og hemmer den stimulerende nevrotransmitteren glutamat. Selv om noen opplever å bli mer løsslupne av alkohol, skyldes dette at hemningssentrene i pannelappen dempes, ikke at nervesystemet aktiveres.',
          },
          {
            id: 'naturfag-10-5-6-n-quiz2-q2',
            task: 'Hvorfor er alkohol ekstra skadelig for ungdom?',
            options: [
              { id: 'a', text: 'Fordi ungdom alltid drikker mer enn voksne', isCorrect: false },
              { id: 'b', text: 'Fordi ungdommens hjerne er under utvikling og ekstra sårbar for skade', isCorrect: true },
              { id: 'c', text: 'Fordi ungdom ikke har lever til å bryte ned alkohol', isCorrect: false },
              { id: 'd', text: 'Fordi alkohol bare påvirker unge mennesker', isCorrect: false },
            ],
            solution:
              'Hjernen er ikke ferdig utviklet før rundt 25 års alder. Spesielt pannelappen, som styrer dømmekraft, planlegging og impulskontroll, modnes sent. Alkohol kan skade den utviklende hjernen permanent, og ungdom som begynner å drikke tidlig har 4 til 5 ganger høyere risiko for å utvikle avhengighet.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-5-6-n-section4',
      type: 'text',
      content: `## Tobakk og nikotin: Avhengighetens grep

Nikotin er det psykoaktive stoffet i tobakk, og det er et av de mest avhengighetsskapende stoffene vi kjenner. Nikotin binder seg til nikotinerge acetylkolinreseptorer i hjernen, de reseptorene som normalt brukes av nevrotransmitteren acetylkolin. Denne bindingen utløser frigjøring av dopamin i hjernens belønningssenter, noe som gir en kortvarig følelse av velvære, ro og skjerpet oppmerksomhet. Effekten er kortvarig, bare noen minutter, og hjernen vil raskt ha mer. Avhengighet kan utvikles etter bare noen ukers bruk.

Sigaretter inneholder over 7000 kjemiske stoffer, hvorav minst 70 er kreftfremkallende. Tjærestoffer legger seg i lungene, karbonmonoksid binder seg sterkere til hemoglobin enn oksygen slik at blodet frakter mindre oksygen, og andre giftstoffer skader flimmerhårene i luftveiene. Røyking er årsak til omtrent 85 prosent av all lungekreft og er hovedårsaken til KOLS.

Snus gir samme nikotinavhengighet som sigaretter, men innebærer lavere risiko for lungesykdom fordi det ikke er forbrenning. Den kan likevel gi skader i munnhulen og økt risiko for kreft. E-sigaretter er relativt nye, og langtidsvirkningene er usikre. De inneholder vanligvis nikotin og gir samme avhengighet. Søte smaker gjør e-sigaretter attraktive for unge, og mange prøver dem uten å forstå at de inneholder nikotin.`,
    },
    {
      id: 'naturfag-10-5-6-n-section5',
      type: 'text',
      content: `## Narkotiske stoffer: Fra cannabis til opioider

Cannabis er det mest brukte illegale rusmiddelet i verden. Virkestoffet THC ligner på kroppens egne endocannabinoider og binder seg til cannabinoidreseptorer i hjernen. THC gir en avslappet, euforisk følelse, endret tidsoppfatning og nedsatt korttidshukommelse. For ungdom er cannabis spesielt farlig fordi regelmessig bruk i ung alder kan gi varig nedsatt hukommelse og konsentrasjon, økt risiko for angst, depresjon og psykose, og omtrent 9 prosent av brukere utvikler avhengighet.

Amfetamin og kokain er stimulerende stoffer som kraftig øker mengden dopamin, noradrenalin og serotonin i synapsene. Kokain gjør dette ved å blokkere gjenopptaket av dopamin, slik at dopamin hoper seg opp og stimulerer reseptorene gjentatte ganger. Begge stoffene gir intens eufori, men også alvorlig helserisiko inkludert hjerteinfarkt, psykose og sterk avhengighet.

Opioider som heroin, morfin og fentanyl binder seg til opioidreseptorer, de samme reseptorene som kroppens egne smertestillende endorfiner. De hemmer smertesignaler og gir kraftig velvære, men er svært avhengighetsskapende med rask toleranseutvikling. Fentanyl er 50 til 100 ganger sterkere enn morfin, og overdose kan føre til pustestopp og død. Hallusinogene stoffer som LSD og psilocybin binder seg til serotoninreseptorer og forstyrrer sanseinntrykk og virkelighetsoppfatning.`,
    },
    {
      id: 'naturfag-10-5-6-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-5-6-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på tobakk og narkotiske stoffer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-5-6-n-quiz3-q0',
            task: 'Hvordan gir nikotin en følelse av velvære?',
            options: [
              { id: 'a', text: 'Det øker oksygentilførselen til hjernen', isCorrect: false },
              { id: 'b', text: 'Det binder seg til acetylkolinreseptorer og utløser dopaminfrigjøring i belønningssenteret', isCorrect: true },
              { id: 'c', text: 'Det blokkerer smertesignaler i ryggmargen', isCorrect: false },
              { id: 'd', text: 'Det øker produksjonen av røde blodceller', isCorrect: false },
            ],
            solution:
              'Nikotin etterligner nevrotransmitteren acetylkolin og binder seg til nikotinerge reseptorer i hjernen. Denne bindingen utløser frigjøring av dopamin i hjernens belønningssenter. Dopamin gir en følelse av tilfredshet og velvære, og det er denne mekanismen som gjør nikotin så avhengighetsskapende.',
          },
          {
            id: 'naturfag-10-5-6-n-quiz3-q1',
            task: 'Hvordan virker kokain på nevrotransmittere i hjernen?',
            options: [
              { id: 'a', text: 'Det blokkerer gjenopptak av dopamin slik at dopamin hoper seg opp i synapsespalten', isCorrect: true },
              { id: 'b', text: 'Det etterligner serotonin og binder seg til serotoninreseptorer', isCorrect: false },
              { id: 'c', text: 'Det ødelegger nevrotransmittere slik at signalene stoppes', isCorrect: false },
              { id: 'd', text: 'Det øker produksjonen av GABA og demper nervesystemet', isCorrect: false },
            ],
            solution:
              'Kokain blokkerer transportproteinene som normalt tar dopamin tilbake fra synapsespalten (gjenopptak). Dopamin kan dermed ikke fjernes og hoper seg opp. Dette gir en unormalt sterk og langvarig dopaminsignal som oppleves som intens eufori. Denne kraftige dopamineffekten er det som gjør kokain svært avhengighetsskapende.',
          },
          {
            id: 'naturfag-10-5-6-n-quiz3-q2',
            task: 'Hvorfor er opioider som heroin spesielt farlige med tanke på overdose?',
            options: [
              { id: 'a', text: 'Fordi de øker hjertefrekvensen til farlige nivåer', isCorrect: false },
              { id: 'b', text: 'Fordi de gir hallusinasjoner som kan føre til ulykker', isCorrect: false },
              { id: 'c', text: 'Fordi de hemmer pustesenteret i hjernen, noe som kan føre til pustestopp', isCorrect: true },
              { id: 'd', text: 'Fordi de gjør blodet for tykt til å sirkulere', isCorrect: false },
            ],
            solution:
              'Opioider binder seg til opioidreseptorer i hjernen og ryggmargen. Ved overdose hemmes pustesenteret i hjernestammen så kraftig at pusten kan stoppe helt. Fentanyl er 50 til 100 ganger sterkere enn morfin, noe som gjør overdosefaren særlig høy. Nalokson er et motgift-legemiddel som blokkerer opioidreseptorene og kan redde liv ved overdose.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-5-6-n-section6',
      type: 'text',
      content: `## Doping: Når hormonsystemet manipuleres

Doping handler om å bruke forbudte stoffer for å øke fysisk prestasjon. Mens rusmidler primært påvirker nervesystemet, griper dopingmidler inn i hormonsystemet. Hormoner er kjemiske signalstoffer som fraktes i blodet og regulerer vekst, stoffskifte og reproduksjon.

Anabole androgene steroider er syntetiske varianter av kjønnshormonet testosteron. De øker proteinsyntesen i muskelceller og gir raskere muskeloppbygning. Men kroppen har en elegant reguleringsmekanisme kalt negativ tilbakekobling: Når nivået av testosteron er høyt nok, sender hypotalamus og hypofysen signal om å redusere produksjonen. Når man tilfører syntetisk testosteron, tolker kroppen det som unormalt høye nivåer og stopper sin egen produksjon. Testiklene krymper fordi de ikke lenger stimuleres. Når personen slutter med steroider, har kroppen svært lav egenproduksjon, og det kan ta måneder eller år å normalisere seg, om det i det hele tatt skjer.

EPO er et hormon som øker produksjonen av røde blodceller og dermed oksygentransporten. Risikoen er at blodet blir for tykt, noe som kan gi blodpropp, hjerneslag og hjerteinfarkt. Veksthormon stimulerer cellevekst og kan gi abnormal vekst av hender, føtter og organer. Doping er forbudt i organisert idrett og ulovlig i Norge uten resept. WADA koordinerer kampen mot doping internasjonalt.`,
    },
    {
      id: 'naturfag-10-5-6-n-section7',
      type: 'text',
      content: `## Miljøgifter: Usynlige trusler i naturen

Miljøgifter er stoffer fra menneskelig aktivitet som er skadelige for levende organismer, brytes svært langsomt ned i naturen, og kan hope seg opp i næringskjeder. Mange av dem kan forstyrre kroppens signalsystemer.

To nøkkelbegreper er bioakkumulering og biomagnifikasjon. Bioakkumulering betyr at en organisme tar opp en miljøgift som lagres i kroppen uten å brytes ned, slik at konsentrasjonen øker over tid. Biomagnifikasjon betyr at konsentrasjonen øker for hvert ledd i næringskjeden. Et rovdyr spiser mange byttedyr og akkumulerer giftstoffene fra alle. Toppredatorer som ørn, isbjørn, stor rovfisk og mennesker ender derfor med de høyeste konsentrasjonene.

Tungmetaller som kvikksølv, bly og kadmium skader nervesystemet, spesielt hos barn og fostre. PCB, som har vært forbudt siden 1980-tallet, brytes så sakte ned at det fortsatt finnes overalt og kan forstyrre hormonsystemet ved å etterligne østrogen. PFAS, kalt evighetskjemikalier, brukes i vannavstøtende klær og non-stick-belegg og brytes nesten ikke ned.

Hormonforstyrrende stoffer er spesielt bekymringsfulle. De kan etterligne kroppens egne hormoner og binde seg til hormonreseptorer, blokkere reseptorer slik at ekte hormoner ikke virker, eller forstyrre enzymer som produserer eller bryter ned hormoner. Konsekvensene kan være forstyrrelser i reproduksjon, endret kjønnsutvikling, og økt kreftrisiko. DDTs effekt på rovfugler, der eggeskallene ble så tynne at de knuste under ruging, er et klassisk eksempel på biomagnifikasjon og hormonforstyrrende effekter.`,
    },
    {
      id: 'naturfag-10-5-6-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-5-6-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på doping og miljøgifter:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-5-6-n-quiz4-q0',
            task: 'Hvorfor krymper testiklene hos menn som bruker anabole steroider?',
            options: [
              { id: 'a', text: 'Fordi steroidene er giftige og ødelegger cellene direkte', isCorrect: false },
              { id: 'b', text: 'Fordi negativ tilbakekobling stopper kroppens egen testosteronproduksjon', isCorrect: true },
              { id: 'c', text: 'Fordi musklene bruker opp alt testosteronet', isCorrect: false },
              { id: 'd', text: 'Fordi steroidene inneholder østrogen', isCorrect: false },
            ],
            solution:
              'Når syntetisk testosteron tilføres, registrerer hypotalamus de høye nivåene og reduserer GnRH-produksjonen. Hypofysen produserer da mindre LH og FSH, som testiklene trenger for å fungere. Uten stimulering stopper testiklene å jobbe og krymper. Det er altså kroppens egen tilbakekoblingsmekanisme som skrur dem av.',
          },
          {
            id: 'naturfag-10-5-6-n-quiz4-q1',
            task: 'Hva er biomagnifikasjon?',
            options: [
              { id: 'a', text: 'At giftstoffer brytes raskere ned i naturen over tid', isCorrect: false },
              { id: 'b', text: 'At konsentrasjonen av en miljøgift øker for hvert ledd i næringskjeden', isCorrect: true },
              { id: 'c', text: 'At organismer utvikler motstandskraft mot miljøgifter', isCorrect: false },
              { id: 'd', text: 'At miljøgifter gjør organismer større', isCorrect: false },
            ],
            solution:
              'Biomagnifikasjon betyr at konsentrasjonen av en miljøgift øker for hvert ledd oppover i næringskjeden. Et rovdyr spiser mange byttedyr og akkumulerer giftstoffene fra alle. Derfor har toppredatorer som ørn, isbjørn og stor rovfisk de høyeste konsentrasjonene, selv om mengden i vannet eller luften er svært lav.',
          },
          {
            id: 'naturfag-10-5-6-n-quiz4-q2',
            task: 'Hvordan kan en hormonforstyrrende miljøgift påvirke kroppen?',
            options: [
              { id: 'a', text: 'Den kan etterligne kroppens egne hormoner og binde seg til hormonreseptorer', isCorrect: true },
              { id: 'b', text: 'Den ødelegger hormonkjertlene slik at de ikke kan produsere hormoner', isCorrect: false },
              { id: 'c', text: 'Den hindrer nerveceller fra å sende elektriske signaler', isCorrect: false },
              { id: 'd', text: 'Den gjør at kroppen produserer for mange hvite blodceller', isCorrect: false },
            ],
            solution:
              'Hormonforstyrrende miljøgifter kan etterligne kroppens egne hormoner ved å ha en lignende molekylstruktur. De binder seg til hormonreseptorer og aktiverer dem, slik at cellen reagerer som om den fikk et ekte hormonsignal. For eksempel kan PCB etterligne østrogen. Andre miljøgifter kan blokkere reseptorer eller forstyrre enzymer som lager hormoner.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-5-6-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket hvordan ulike stoffer påvirker kroppens to signalsystemer, nervesystemet og hormonsystemet. Psykoaktive stoffer virker ved å endre signaloverføringen mellom nerveceller. De kan etterligne nevrotransmittere, øke mengden av dem, hemme frigjøring, eller blokkere reseptorer.

Legemidler er stoffer som er testet og godkjent for kontrollert påvirkning av kroppen, mens rusmidler forstyrrer hjernens belønningssystem og kan føre til toleranse og avhengighet. Alkohol er et dempende stoff som forsterker GABA og hemmer glutamat, og er ekstra farlig for ungdom fordi hjernen er under utvikling. Nikotin binder seg til acetylkolinreseptorer og utløser dopaminfrigjøring, og avhengighet kan utvikles etter bare noen ukers bruk.

Narkotiske stoffer som cannabis, kokain og heroin påvirker ulike nevrotransmittersystemer med alvorlige helsekonsekvenser. Doping forstyrrer hormonsystemets tilbakekoblingsmekanismer, som når anabole steroider fører til at kroppen stopper sin egen testosteronproduksjon.

Miljøgifter bioakkumulerer i organismer og biomagnifiserer i næringskjeder, og noen kan etterligne kroppens egne hormoner og forstyrre hormonsystemet. Den viktigste lærdommen er at ungdommens hjerne er ekstra sårbar for alle disse stoffene, og at kunnskap om hvordan de virker er det beste grunnlaget for å ta informerte og gode valg.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport av alle narrative kapitler i DEL 5B
// ============================================================================

export const NATURFAG_10_NARRATIV_DEL5B_CHAPTERS = [
  CHAPTER_NATURFAG_10_5_5_NARRATIV,
  CHAPTER_NATURFAG_10_5_6_NARRATIV,
];
