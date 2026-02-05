/**
 * Norsk VG3 - Narrative versjoner Del 1 (Kapittel 1.1-1.5)
 *
 * Engasjerende, fortellende versjoner av kapitlene om det moderne gjennombruddet,
 * optimalisert for lesing/lytting.
 * Hver narrativ versjon linker tilbake til originalkapittelet via linkedChapterId.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1.1 NARRATIV: Georg Brandes og problemdiktningen
// ============================================================================

export const CHAPTER_NORSK_VG3_1_1_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-1-1-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '1.1',
  title: 'Georg Brandes og problemdiktningen',
  subtitle: 'Narrativ versjon',
  description: 'Opplev øyeblikket da en dansk kritiker snudde opp ned på nordisk litteratur og krevde at forfattere skulle våge å ta stilling.',
  estimatedMinutes: 35,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
    'reflektere over hvordan litteraturen speiler og påvirker samfunnet',
  ],
  linkedChapterId: 'norsk-vg3-1-1',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg3-1-1-n-intro',
      type: 'text',
      content: `## En revolusjon i et auditorium

Forestill deg København i november 1871. Det er kaldt ute, og gasslyktene flimrer langs de brosteinsbelagte gatene. I et auditorium ved universitetet har en ung mann med mørkt hår og intense øyne inntatt talerstolen. Han heter Georg Brandes, og det han skal si denne kvelden, vil forandre skandinavisk litteratur for alltid.

Salen er full av studenter, forfattere og nysgjerrige borgere. Brandes ser ut over forsamlingen og begynner å snakke. Stemmen hans er klar og sikker: Den nordiske litteraturen, sier han, henger håpløst etter resten av Europa. Mens forfattere i Frankrike, England og Russland skriver om virkelige problemer, sitter skandinaviske diktere fortsatt og drømmer om trollskog og middelalderborger.

Så kommer den setningen som skulle bli et slagord for en hel generasjon: «Det, som viser, at en Litteratur i vore Dage lever, er, at den sætter Problemer under Debat.»

Litteraturen må våkne, insisterer Brandes. Den må slutte å pynte på virkeligheten og i stedet ta opp de vanskelige spørsmålene - om ekteskap, om kvinners rettigheter, om klasseforskjeller, om religion og tvang. Forfatterne må bli samfunnets samvittighet.`,
    },

    // ========== SEKSJON 1: Mannen bak revolusjonen ==========
    {
      id: 'norsk-vg3-1-1-n-section1',
      type: 'text',
      content: `## Mannen som utfordret alt

Hvem var egentlig denne Georg Brandes som våget å kritisere hele den litterære etablissementet? La oss se nærmere på mannen bak revolusjonen.

Georg Morris Cohen Brandes ble født i 1842 i København, i en jødisk familie. Han var intelligent, ambisiøs og sulten på kunnskap. Som ung student reiste han til Paris og Berlin, der han sugde til seg de nyeste ideene fra Europas intellektuelle sentre.

Det var disse reisene som åpnet øynene hans. I Frankrike møtte han **positivismen** - troen på at bare det som kan observeres og måles, har virkelig verdi. I Tyskland studerte han filosofen Hippolyte Taines teorier om at mennesker formes av arv og miljø. Han leste Charles Darwin og forsto at vitenskapen holdt på å forandre vårt syn på verden fundamentalt.

Brandes kom hjem til Skandinavia med hodet fullt av nye tanker - og med en overbevisning om at nordisk litteratur trengte en skikkelig oppvåkning. Den romantiske drømmeverdenen som nordiske forfattere fremdeles dyrket, virket plutselig så gammeldags, så virkelighetsfjernt.

Men Brandes' radikale ideer falt ikke i god jord hos alle. Konservative krefter så på ham som farlig. Han ble nektet det professoratet han fortjente ved universitetet. Kritikere kalte ham en undergravende kraft som ville rive ned samfunnets moralske grunnvoll.

Dette stoppet ham ikke. Tvert imot gjorde motstanden ham bare mer bestemt på å kjempe for sine ideer.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg3-1-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva mente Georg Brandes med at litteraturen skulle "sette problemer under debatt"?',
        options: [
          { id: 'a', text: 'Litteraturen skulle være vanskelig å forstå', isCorrect: false },
          { id: 'b', text: 'Forfattere skulle skrive om samfunnsproblemer og ta stilling', isCorrect: true },
          { id: 'c', text: 'Bøker burde handle om filosofiske paradokser', isCorrect: false },
          { id: 'd', text: 'Dikterne skulle kritisere andre forfattere', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Brandes krevde at litteraturen skulle engasjere seg i aktuelle samfunnsproblemer som kvinners rettigheter, ekteskapets institusjoner og sosial urettferdighet. Forfatterne skulle ikke bare underholde, men ta stilling og bidra til samfunnsdebatten.',
      },
    },

    // ========== SEKSJON 2: Problemdiktningen ==========
    {
      id: 'norsk-vg3-1-1-n-section2',
      type: 'text',
      content: `## Hva er egentlig problemdiktning?

La oss ta et skritt tilbake og forstå hva Brandes egentlig ba om. **Problemdiktning** er litteratur som tar opp aktuelle samfunnsproblemer og drøfter dem - ikke bare beskriver dem, men faktisk tar stilling.

Tenk på det slik: Hvis en romantisk dikter skrev om en ulykkeleg kvinne, ville han kanskje fokusere på hennes vakre tårer og tragiske skjebne. Alt ville handle om følelser og stemning. Men en problemdikter ville spørre: Hvorfor er denne kvinnen ulykkelig? Er det fordi samfunnet ikke gir henne lov til å bestemme over sitt eget liv? Er det ekteskapet som fanger henne? Er det fordi hun ikke har samme rettigheter som menn?

Problemdiktningen snudde fokuset fra det individuelle til det samfunnsmessige. Den sa: Dette handler ikke bare om én persons skjebne - det handler om et system som må forandres.

De typiske temaene i problemdiktningen var brennbare: Kvinners stilling i samfunnet og ekteskapet. Dobbeltmoralen som lot menn slippe unna med ting kvinner ble fordømt for. Klasseskillene mellom rik og fattig. Kirkens makt over folks liv. Individets kamp mot konvensjonene.

Dette var ikke ufarlig stoff. Å skrive om slike ting kunne bety sosial utestengelse, sensur eller verre. Men Brandes insisterte: Det er nettopp dette forfatterne må våge. En litteratur som ikke tar opp vanskelige spørsmål, har mistet sin betydning.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg3-1-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hvilken litterær retning reagerte problemdiktningen mot?',
        options: [
          { id: 'a', text: 'Modernismen', isCorrect: false },
          { id: 'b', text: 'Naturalismen', isCorrect: false },
          { id: 'c', text: 'Nasjonalromantikken', isCorrect: true },
          { id: 'd', text: 'Symbolismen', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Problemdiktningen var en reaksjon mot nasjonalromantikken, som Brandes mente var for opptatt av fortiden, folkeeventyr og idealiserte naturskildringer. Han ville ha litteratur som tok opp samtidige samfunnsproblemer i stedet.',
      },
    },

    // ========== SEKSJON 3: Realismen kommer ==========
    {
      id: 'norsk-vg3-1-1-n-section3',
      type: 'text',
      content: `## En ny måte å se verden på

Brandes' program var ikke bare et litterært manifest - det var forankret i en helt ny måte å forstå verden på. La oss se på de filosofiske strømningene som lå bak.

**Positivismen** var en filosofisk retning som hevdet at bare det som kan observeres og måles vitenskapelig, har gyldighet. Ingen flere spekulasjoner om det overnaturlige, ingen flere romantiske drømmerier - bare kald, hard virkelighet. Dette førte til kravet om at litteraturen skulle skildre livet slik det faktisk var, ikke slik man ønsket det skulle være.

**Darwins evolusjonslære** hadde nettopp rystet den vestlige verden. Tanken om at mennesket nedstammet fra apene, og at livet var en kamp for tilværelsen, utfordret alt folk hadde trodd. Hvis Bibelen tok feil om skapelsen, hva annet tok den feil om? Plutselig sto kirkens autoritet og hele det kristne verdensbildet på spill.

**Determinismen** bidro med ideen om at mennesker er formet av sin arv og sitt miljø. Du er ikke et fritt individ som velger din egen skjebne - du er et produkt av genene dine og omgivelsene du vokste opp i. Dette synet skulle bli sentralt i **naturalismen**, som tok realismen enda et skritt lenger og skildret mennesker som offer for biologiske og sosiale krefter de ikke kunne kontrollere.

Til sammen dannet disse ideene grunnlaget for en helt ny type litteratur - **realismen**. Forfatterne skulle være som vitenskapsmenn: observere virkeligheten objektivt, analysere samfunnet og menneskene i det, og avdekke sannheten uten forskjønnelse.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg3-1-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva var positivismens hovedtanke?',
        options: [
          { id: 'a', text: 'At følelser er viktigere enn fornuft', isCorrect: false },
          { id: 'b', text: 'At bare det som kan observeres og måles, har gyldighet', isCorrect: true },
          { id: 'c', text: 'At fortiden er viktigere enn samtiden', isCorrect: false },
          { id: 'd', text: 'At kunst bør være vakker fremfor sann', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Positivismen var en filosofisk retning som krevde vitenskapelig observasjon og fakta. Dette førte til at realismens forfattere skulle skildre virkeligheten objektivt og nøkternt, uten romantisk idealisering.',
      },
    },

    // ========== SEKSJON 4: Forfatterne tar utfordringen ==========
    {
      id: 'norsk-vg3-1-1-n-section4',
      type: 'text',
      content: `## En hel generasjon våkner

Brandes' forelesninger spredte seg som ringer i vannet. Ryktet om den radikale kritikeren nådde forfattere i hele Skandinavia, og mange lot seg inspirere.

I Norge tok en middelaldrende dramatiker notis. Henrik Ibsen hadde skrevet nasjonalromantiske versdramaer i årevis, men noe hadde begynt å ulme i ham. Brandes' ord traff ham midt i hjertet. Snart skulle han begynne å skrive de realistiske samfunnsdramaene som gjorde ham verdensberømt.

Bjørnstjerne Bjørnson, Norges nasjonaldikter, lot seg også påvirke. Han forlot de historiske fortellingene og begynte å skrive om samtiden - om religiøs tvil, om politikk, om det moderne livets utfordringer.

Alexander Kielland tok opp pennen og skrev romaner som avslørte borgerskapets hykleri og embedsstandens arroganse. Hans skarpe satire rammet hardt.

Jonas Lie skildret det norske samfunnet med psykologisk innsikt og varme, men også med et kritisk blikk på undertrykkende strukturer.

I Sverige grep August Strindberg Brandes' ideer med begge hender og drev dem til ytterligheter. Hans dramaer skulle bli enda mer kompromissløse og kontroversielle.

En hel generasjon av skandinaviske forfattere hadde våknet. De begynte å skrive litteratur som ikke bare underholdt, men som utfordret, provoserte og forandret. Brandes hadde tendt en flamme som ikke skulle slukne.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg3-1-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvilke norske forfattere lot seg inspirere av Brandes\' program?',
        options: [
          { id: 'a', text: 'Wergeland, Welhaven og Camilla Collett', isCorrect: false },
          { id: 'b', text: 'Ibsen, Bjørnson, Kielland og Lie', isCorrect: true },
          { id: 'c', text: 'Hamsun, Undset og Duun', isCorrect: false },
          { id: 'd', text: 'Vesaas, Jacobsen og Hauge', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'De "fire store" - Henrik Ibsen, Bjørnstjerne Bjørnson, Alexander Kielland og Jonas Lie - lot seg alle inspirere av Brandes og skrev litteratur som "satte problemer under debatt". De representerer det moderne gjennombruddet i norsk litteratur.',
      },
    },

    // ========== SEKSJON 5: Arven etter Brandes ==========
    {
      id: 'norsk-vg3-1-1-n-section5',
      type: 'text',
      content: `## En arv som lever videre

Det moderne gjennombruddet forandret ikke bare litteraturen - det bidro til å forandre samfunnet. Når Ibsens «Et dukkehjem» viste en kvinne som forlater mann og barn for å finne seg selv, var det ikke bare teater. Det var dynamitt kastet inn i debatten om kvinners rettigheter.

Når Kielland i «Gift» kritiserte den stivbente latinskolen, eller Bjørnson i «En handske» krevde samme moralske standard for menn og kvinner, rørte de ved ømmålige punkter i samfunnet. Litteraturen ble et verktøy for samfunnsendring.

Men kanskje det viktigste Brandes ga oss, var selve ideen om at litteraturen har et ansvar. At forfattere ikke bare kan sitte i elfenbenstårnet og skrive vakre ord - de må engasjere seg i verden rundt seg.

Dette spørsmålet er fortsatt aktuelt. Bør forfattere ta stilling til klimakrisen? Til migrasjon? Til sosial urettferdighet? Eller skal kunsten få være fri fra politiske krav?

Brandes ville sagt at en litteratur som ikke engasjerer seg, er en litteratur i ferd med å dø. Andre mener at kunstens verdi ligger nettopp i at den er fri fra nyttekrav. Debatten Brandes startet i 1871, pågår fortsatt.

Neste gang du leser en bok eller ser et teaterstykke som tar opp vanskelige spørsmål, kan du tenke på den unge kritikeren som sto i et auditorium i København for over 150 år siden og krevde at litteraturen skulle våkne. Han fikk det som han ville - og skandinavisk litteratur ble aldri den samme.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg3-1-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvorfor var Brandes\' program kontroversielt i samtiden?',
        options: [
          { id: 'a', text: 'Han skrev på dansk i stedet for norsk', isCorrect: false },
          { id: 'b', text: 'Han utfordret kirken, tradisjonelle verdier og samfunnets maktstrukturer', isCorrect: true },
          { id: 'c', text: 'Han kritiserte Shakespeare og andre klassikere', isCorrect: false },
          { id: 'd', text: 'Han mente at bare menn kunne være forfattere', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Brandes\' krav om at litteraturen skulle kritisere undertrykkende institusjoner som kirken, utfordre tradisjonelle familieverdier og avsløre dobbeltmoral, ble sett som farlig og undergravende av konservative krefter. Han ble nektet professorat og møtt med sterk motstand.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg3-1-1-n-summary',
      type: 'text',
      content: `## Oppsummering

**Det moderne gjennombruddet** (1870-1890) var en litterær revolusjon i Skandinavia, inspirert av den danske kritikeren **Georg Brandes**.

**Brandes' hovedkrav:** Litteraturen må "sette problemer under debatt" - ta opp aktuelle samfunnsproblemer og ta stilling.

**Filosofisk grunnlag:**
- **Positivismen:** Bare det observerbare har gyldighet
- **Darwinismen:** Mennesket som biologisk vesen
- **Determinismen:** Arv og miljø former mennesket

**Problemdiktningens temaer:**
- Kvinners stilling og rettigheter
- Dobbeltmoral i samfunnet
- Klasseskiller og sosial urettferdighet
- Religiøs hykleri og tvang
- Individets kamp mot konvensjonene

**Litterær retning:** Realismen - objektiv skildring av virkeligheten uten idealisering

**Påvirkning:** "De fire store" (Ibsen, Bjørnson, Kielland, Lie) og en hel generasjon skandinaviske forfattere

**Betydning:** Litteraturen ble et verktøy for samfunnsdebatt og forandring`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.2 NARRATIV: Henrik Ibsen - dramatiker og samfunnskritiker
// ============================================================================

export const CHAPTER_NORSK_VG3_1_2_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-1-2-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '1.2',
  title: 'Henrik Ibsen - dramatiker og samfunnskritiker',
  subtitle: 'Narrativ versjon',
  description: 'Møt mannen som forandret verdensteater - fra konkursrammet barndom i Skien til selvpålagt eksil og verdensberømmelse.',
  estimatedMinutes: 40,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
    'skrive litterære analyser og sammenligninger',
  ],
  linkedChapterId: 'norsk-vg3-1-2',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg3-1-2-n-intro',
      type: 'text',
      content: `## Mannen som rystet Europa

Det er høsten 1879. På teatre i København, Stockholm og Berlin setter publikum seg i setene for å se et nytt stykke av den norske dramatikeren Henrik Ibsen. Stykket heter "Et dukkehjem", og ingen aner at det de skal se, vil skape skandale over hele Europa.

Når teppet går ned etter siste akt, sitter publikum i sjokkert stillhet. En kvinne har nettopp forlatt mann og barn for å "finne seg selv". Hun har smelt døren igjen bak seg og gått ut i natten - alene.

I avisene raser debatten. Er dette moral? Kan en mor forlate barna sine? Har Ibsen blitt gal? Men for tusener av kvinner over hele Europa blir Nora Helmer et symbol på noe de knapt har våget å drømme om: frihet.

Henrik Ibsen hadde gjort det Georg Brandes ba om. Han hadde satt et problem under debatt. Og verden ville aldri bli helt den samme.

Men hvem var denne mannen som våget å ryste borgerskapets grunnvoller? Og hvordan ble en konkursrammet kjøpmannsønn fra Skien til verdens mest spilte dramatiker etter Shakespeare?`,
    },

    // ========== SEKSJON 1: Barndom og ungdom ==========
    {
      id: 'norsk-vg3-1-2-n-section1',
      type: 'text',
      content: `## Fra rikdom til skam

Henrik Johan Ibsen ble født 20. mars 1828 i Skien, som den eldste sønnen til kjøpmann Knud Ibsen og Marichen Altenburg. Familien var velstående og respektert. De bodde i et fint hus, og faren drev en blomstrende forretning.

Men da Henrik var åtte år gammel, gikk alt i stykker. Farens forretning gikk konkurs. Plutselig var familien fattig. De måtte flytte fra det fine huset til en enkel gård på landet. Naboene som før hadde hilst høflig, så nå en annen vei.

Denne opplevelsen av å falle fra sosial anseelse til skam preget Ibsen dypt. Gjennom hele livet bar han på en følelse av å være en outsider, en som ikke helt hørte til. Og i mange av dramaene hans møter vi karakterer som lever med hemmeligheter og frykt for avsløring - akkurat som hans egen familie måtte gjøre.

Som 15-åring ble Henrik sendt til Grimstad for å jobbe som apotekerlærling. Her levde han i små kår, sulten og ensom. Men han begynte å skrive - dikt først, så sitt første drama. Han drømte om å bli forfatter.

I Grimstad skjedde også noe han bar på som en hemmelighet resten av livet: Han fikk et barn med tjenestepiken Else Sophie Jensdatter. Han betalte barnebidrag i mange år, men møtte aldri sønnen. Denne hemmeligheten, denne skyldfølelsen, kan vi ane i mange av hans verker - der fortiden alltid innhenter karakterene til slutt.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg3-1-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvilken barndomsopplevelse preget Henrik Ibsen dypt?',
        options: [
          { id: 'a', text: 'At han mistet begge foreldrene som barn', isCorrect: false },
          { id: 'b', text: 'At familien flyttet fra Norge til Danmark', isCorrect: false },
          { id: 'c', text: 'At farens konkurs førte til sosial deklassering', isCorrect: true },
          { id: 'd', text: 'At han ble sendt på kostskole mot sin vilje', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Da Ibsen var åtte år, gikk farens forretning konkurs, og familien falt fra velstand til fattigdom. Denne opplevelsen av sosial skam og hemmeligheter preget Ibsen og gjenfinnes som tema i flere av hans dramaer.',
      },
    },

    // ========== SEKSJON 2: Teaterårene og eksil ==========
    {
      id: 'norsk-vg3-1-2-n-section2',
      type: 'text',
      content: `## Læregutt på teatret

I 1851 fikk Ibsen en stilling som sceneinstruktør ved Det norske Theater i Bergen. Her lærte han teaterhåndverket fra innsiden - hvordan man bygger opp en scene, hvordan man får dialogen til å fungere, hvordan man holder publikums oppmerksomhet.

Han skrev dramaer selv også, men de ble ingen store suksesser. Det var historiske stykker og nasjonalromantiske eventyr - nøyaktig den typen litteratur Brandes senere skulle kritisere. Ibsen prøvde, men hadde ikke funnet sin stemme ennå.

Etter noen år i Kristiania, preget av konflikter, skuffelser og pengekrise, tok Ibsen en dramatisk beslutning. I 1864 forlot han Norge. Han var bitter over det han opplevde som manglende forståelse og støtte fra sitt eget land.

Han skulle bli borte i 27 år.

Først bosatte han seg i Italia, senere i Tyskland. Og merkelig nok: Det var i eksil, langt fra hjemlandet, at Ibsen endelig fant sin stemme. Avstanden ga ham perspektiv. Han så Norge tydeligere utenfra enn han noensinne hadde gjort innenfra.

I Italia skrev han "Brand" og "Peer Gynt" - store versdramaer som gjorde ham berømt i Skandinavia. Men det var først da han begynte å skrive prosadramaer om samtiden - stykker som tok opp virkelige problemer i virkelige stuer - at han ble en verdensforfatter.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg3-1-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hvor lenge bodde Ibsen i selvpålagt eksil?',
        options: [
          { id: 'a', text: '10 år', isCorrect: false },
          { id: 'b', text: '15 år', isCorrect: false },
          { id: 'c', text: '27 år', isCorrect: true },
          { id: 'd', text: '35 år', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Ibsen forlot Norge i 1864 og bodde i Italia og Tyskland i 27 år før han vendte hjem i 1891. Det var i denne perioden han skrev sine mest berømte dramaer.',
      },
    },

    // ========== SEKSJON 3: De realistiske dramaene ==========
    {
      id: 'norsk-vg3-1-2-n-section3',
      type: 'text',
      content: `## Dramaer som rystet verden

Fra "Samfundets støtter" i 1877 og utover skrev Ibsen en rekke dramaer som tok opp aktuelle samfunnsproblemer. Han fulgte Brandes' oppfordring til punkt og prikke - og overgikk den.

La oss se på noen av de viktigste:

**"Et dukkehjem" (1879)** handler om Nora, som har levd hele sitt voksne liv som en "dukke" - først i farens hus, så i ektemannens. Hun har aldri fått være et selvstendig menneske. Når hun innser dette, tar hun et valg som sjokkerte samtiden: Hun forlater mann og barn for å finne seg selv.

**"Gengangere" (1881)** var enda mer kontroversielt. Her møter vi fru Alving, som har holdt opp fasaden om et respektabelt ekteskap, selv om mannen var en utsvevende dranker. Nå kommer fortiden tilbake som "gjengangere" - sønnen Osvald har arvet farens syfilis og blir gal.

**"En folkefiende" (1882)** handler om doktor Stockmann, som oppdager at byens berømte badeanstalt er forurenset. Når han prøver å varsle, blir han erklært som "folkefiende" av et samfunn som ikke vil høre sannheten.

**"Vildanden" (1884)** er kanskje Ibsens mest komplekse drama. Her stiller han spørsmålet: Er sannheten alltid god? Trenger mennesker kanskje sine "livsløgner" for å overleve?

Disse stykkene ble spilt over hele verden. Ibsen ble oversatt til alle store språk. Han ble diskutert, fordømt, hyllet og etterlignnet. Det moderne drama var født.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg3-1-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva er hovedtemaet i "Et dukkehjem"?',
        options: [
          { id: 'a', text: 'En manns kamp mot korrupsjon i næringslivet', isCorrect: false },
          { id: 'b', text: 'En kvinnes oppvåkning og kamp for selvstendighet', isCorrect: true },
          { id: 'c', text: 'En families kamp mot fattigdom', isCorrect: false },
          { id: 'd', text: 'En kunstners søken etter inspirasjon', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'I "Et dukkehjem" innser Nora at hun har levd hele livet som en "dukke" uten egen identitet - først under farens kontroll, så ektemannens. Hennes valg om å forlate familien for å finne seg selv sjokkerte samtiden og gjorde stykket til et symbol for kvinnefrigjøring.',
      },
    },

    // ========== SEKSJON 4: Ibsens tematikk ==========
    {
      id: 'norsk-vg3-1-2-n-section4',
      type: 'text',
      content: `## De store spørsmålene

Når du leser eller ser Ibsens dramaer, vil du merke at visse temaer går igjen. De er som røde tråder gjennom hele forfatterskapet.

**Sannhet og løgn** er kanskje det mest gjennomgående. Karakterene hans lever nesten alltid med hemmeligheter - løgner de forteller andre, og løgner de forteller seg selv. Og før eller siden kommer sannheten frem, med katastrofale følger.

Tenk på Nora i "Et dukkehjem", som har skjult at hun forfalsket en underskrift. Eller fru Alving i "Gengangere", som har holdt opp fasaden om et respektabelt ekteskap. Eller familien Ekdal i "Vildanden", som lever på illusjoner. Ibsen spør: Hva skjer når sannheten kommer frem? Er sannheten alltid frigjørende - eller kan den også ødelegge?

**Individ mot samfunn** er et annet hovedtema. Ibsens karakterer står ofte i konflikt med omgivelsenes forventninger og krav. Samfunnet krever konformitet, mens individet lengter etter å være seg selv. Har du rett til å realisere deg selv på bekostning av andre?

**Kvinnens stilling** utforskes i drama etter drama. Ibsens kvinner er fanget i roller de ikke har valgt - som koner, mødre, døtre. De mangler juridiske rettigheter, økonomisk selvstendighet og frihet til å bestemme over sine egne liv. Ibsen viser oss kostnaden av dette undertrykkelsessystemet.

**Dobbeltmoralen** - de ulike reglene for menn og kvinner, for offentlig og privat atferd - avslører Ibsen gang på gang. Samfunnet som dømmer andre, har selv skjeletter i skapet.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg3-1-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva menes med "dobbeltmoral" som tema hos Ibsen?',
        options: [
          { id: 'a', text: 'At karakterene har to forskjellige moralsystemer', isCorrect: false },
          { id: 'b', text: 'At samfunnet har ulike regler for menn og kvinner', isCorrect: true },
          { id: 'c', text: 'At alle mennesker er hyklerske', isCorrect: false },
          { id: 'd', text: 'At moral er relativt og forandrer seg over tid', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Ibsen avslører samfunnets dobbeltmoral - at menn og kvinner ble målt med ulike standarder. En mann kunne ha eventyr uten å miste sin anseelse, mens en kvinne ville bli utsstøtt. Ibsen kritiserte dette hykleriet i stykke etter stykke.',
      },
    },

    // ========== SEKSJON 5: Arven etter Ibsen ==========
    {
      id: 'norsk-vg3-1-2-n-section5',
      type: 'text',
      content: `## En arv som lever

Henrik Ibsen vendte hjem til Norge i 1891, som en verdensberømthet. Han fikk slag i 1900 og døde 23. mai 1906 i Kristiania.

Men dramaene hans lever videre. Ibsen er fortsatt verdens mest spilte dramatiker etter Shakespeare. Hvert år settes stykkene hans opp på scener over hele kloden - fra Tokyo til New York, fra Berlin til Buenos Aires.

Hvorfor? Fordi spørsmålene han stilte, fortsatt er aktuelle. Er du fri til å være deg selv? Hva skjer når sannheten kommer frem? Hvor går grensen mellom individets rettigheter og samfunnets krav? Kan kvinner - kan alle mennesker - leve autentiske liv, eller må vi alle spille roller?

Ibsen skapte også det moderne drama som kunstform. Hans teknikk med å avdekke fortiden gradvis gjennom dialog, hans bruk av symboler innenfor en realistisk ramme, hans komplekse karakterer - alt dette har påvirket dramatikere i generasjoner.

August Strindberg i Sverige, Anton Tsjekhov i Russland, George Bernard Shaw i England, Arthur Miller og Eugene O'Neill i USA - alle bygde videre på det Ibsen startet.

Neste gang du hører om en teateroppsetting av "Et dukkehjem" eller "Hedda Gabler", tenk på dette: Du får sjansen til å oppleve noe en mann fra Skien skapte for nesten 150 år siden - og som fortsatt har kraft til å ryste oss.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg3-1-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvordan rangeres Ibsen blant verdens dramatikere?',
        options: [
          { id: 'a', text: 'Han regnes som den mest spilte dramatikeren', isCorrect: false },
          { id: 'b', text: 'Han regnes som den nest mest spilte, etter Shakespeare', isCorrect: true },
          { id: 'c', text: 'Han er lite kjent utenfor Skandinavia', isCorrect: false },
          { id: 'd', text: 'Han regnes som den tredje mest spilte, etter Shakespeare og Molière', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Henrik Ibsen regnes som verdens mest spilte dramatiker etter William Shakespeare. Stykkene hans settes opp på scener over hele verden den dag i dag, og han anses som grunnleggeren av det moderne drama.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg3-1-2-n-summary',
      type: 'text',
      content: `## Oppsummering

**Henrik Ibsen (1828-1906)** regnes som grunnleggeren av det moderne drama og er verdens mest spilte dramatiker etter Shakespeare.

**Livsløp:**
- Barndom preget av farens konkurs og sosial skam
- Teatererfaring i Bergen og Kristiania
- Selvpålagt eksil 1864-1891 (Italia og Tyskland)
- Skrev sine viktigste verk i utlandet

**Viktige realistiske dramaer:**
- "Et dukkehjem" (1879) - Noras oppvåkning
- "Gengangere" (1881) - Fortidens synder
- "En folkefiende" (1882) - Sannhet mot samfunn
- "Vildanden" (1884) - Livsløgnens nødvendighet

**Sentrale temaer:**
- Sannhet og løgn / hemmeligheter
- Individ mot samfunn
- Kvinnens stilling
- Dobbeltmoral

**Betydning:**
- Grunnla det moderne, realistiske drama
- Påvirket dramatikere over hele verden
- Bidro til samfunnsdebatten om kvinners rettigheter
- Stykkene spilles fortsatt globalt`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.3 NARRATIV: Ibsens teknikk og symbolbruk
// ============================================================================

export const CHAPTER_NORSK_VG3_1_3_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-1-3-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '1.3',
  title: 'Ibsens teknikk og symbolbruk',
  subtitle: 'Narrativ versjon',
  description: 'Oppdag hemmelighetene bak Ibsens dramatiske mesterskap - fra den vellagede strukturen til symboler som forteller mer enn ordene.',
  estimatedMinutes: 35,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'skrive litterære analyser og sammenligninger',
    'bruke fagkunnskap i muntlige presentasjoner',
  ],
  linkedChapterId: 'norsk-vg3-1-3',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg3-1-3-n-intro',
      type: 'text',
      content: `## Mesteren bak kulissene

Du sitter i teatersalen og ser "Et dukkehjem". På scenen står et juletre pyntet med lys. Det er vakkert, festlig, fullt av løfter om glede. Men etter hvert som stykket skrider frem, begynner du å legge merke til noe: Juletræet visner. Lysene slukkes. Og parallelt med dette faller fasaden av Noras tilsynelatende lykkelige ekteskap.

Er dette en tilfeldighet? Absolutt ikke. Henrik Ibsen la ingenting til tilfeldighetene.

Ibsen var ikke bare en stor tenker og samfunnskritiker. Han var også en håndverksmmester av rang. Han brukte år på hvert eneste drama, finpusset hver replikk, plasserte hvert symbol med presisjon. Det er denne tekniske briljansen som gjør at stykkene hans fortsatt fungerer på scenen - over 140 år senere.

I dette kapittelet skal vi åpne verktøykassen og se på hva Ibsen egentlig gjør. Hvordan bygger han opp spenning? Hvordan avslører han hemmeligheter? Og hvordan får han tilsynelatende hverdagslige gjenstander til å bære hele dramaets tyngde?`,
    },

    // ========== SEKSJON 1: Den vellagede strukturen ==========
    {
      id: 'norsk-vg3-1-3-n-section1',
      type: 'text',
      content: `## Arkitekturen bak dramaet

Tenk deg at du bygger et hus. Du kan ikke bare slenge opp noen vegger og håpe på det beste. Du trenger en plan - et fundament, bærende strukturer, et tak som holder.

Ibsens dramaer er bygget med samme omhu. Han perfeksjonerte det som kalles **den vellagede strukturen**, en dramatisk arkitektur som holder publikum fanget fra første til siste replikk.

Her er byggesteinene:

**Enhet i tid, sted og handling.** Handlingen i et typisk Ibsen-drama foregår over kort tid - ofte bare 24 timer - på ett sted (gjerne en stue). Dette skaper intensitet. Det er ingen fluktmuligheter, verken for karakterene eller publikum.

**Eksposisjonen** er kunsten å gi publikum nødvendig bakgrunnsinformasjon uten at det føles som en forelesning. Ibsen vever informasjonen naturlig inn i dialogen. Når Nora og Kristine snakker sammen i starten av "Et dukkehjem", lærer vi alt vi trenger å vite om Noras fortid - men det føles som en naturlig samtale mellom gamle venner.

**Stigende spenning** holder oss i stolen. Hver akt bygger på den forrige, med økende konfliktnivå. Små avsløringer fører til større avsløringer. Presset øker. Vi aner at noe må eksplodere.

**Vendepunktet** er øyeblikket da alt snur. I "Et dukkehjem" er det når Torvald leser brevet og reagerer med sinne i stedet for kjærlighet. Noras illusjoner knuses.

**Klimaks og oppløsning** er der alt kulminerer. Døren som smeller. Sannheten som endelig er sagt. Konsekvensene som må bæres.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg3-1-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva kjennetegner "den vellagede strukturen" i Ibsens dramaer?',
        options: [
          { id: 'a', text: 'Handlingen strekker seg over mange år og flere land', isCorrect: false },
          { id: 'b', text: 'Kort tid, ett sted, og gradvis stigende spenning mot et klimaks', isCorrect: true },
          { id: 'c', text: 'Mange parallelle handlinger som aldri møtes', isCorrect: false },
          { id: 'd', text: 'Tilfeldig struktur som lar publikum velge sin egen tolkning', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Den vellagede strukturen kjennetegnes av enhet i tid og sted (ofte 24 timer i én stue), naturlig eksposisjon, stigende spenning, et tydelig vendepunkt og et kraftfullt klimaks. Denne stramme strukturen skaper intens dramatisk effekt.',
      },
    },

    // ========== SEKSJON 2: Det analytiske dramaet ==========
    {
      id: 'norsk-vg3-1-3-n-section2',
      type: 'text',
      content: `## Detektiven i stuen

Her er et paradoks: I Ibsens dramaer skjer det egentlig veldig lite - og samtidig utrolig mye.

På overflaten ser vi mennesker som snakker sammen i en stue. De diskuterer hverdagslige ting. Men under overflaten pågår noe langt mer dramatisk: Fortiden avdekkes, lag for lag, som i en kriminalroman.

Dette kalles **det analytiske dramaet**, og Ibsen var mesteren. I stedet for å vise oss hendelsene når de skjer, lar han oss se konsekvensene - og så rekonstruere hva som egentlig hendte.

Tenk på "Gengangere". Når stykket begynner, er kammerherre Alving død for lenge siden. Men gjennom samtaler mellom fru Alving, pastor Manders og sønnen Osvald, avdekkes sannheten om hvem kammerherren egentlig var. Stykke for stykke faller brikkene på plass: utsvevelsen, løgnene, sykdommen som ble overført til sønnen.

Det er som å se en detektiv løse en forbrytelse - bortsett fra at forbrytelsen skjedde for tjue år siden, og forbryteren er død.

Denne teknikken skaper en særegen spenning. Vi vet ikke hva som vil bli avslørt neste gang. Karakterene selv vet ikke hele sannheten. Og når brikken endelig faller på plass, er virkningen desto sterkere fordi vi har ventet på den.

Ibsen komprimerer tid. I stedet for å vise oss et helt liv, viser han oss det avgjørende øyeblikket - øyeblikket da alt som har ligget skjult, endelig kommer frem i lyset.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg3-1-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva er hovedtrekket ved "det analytiske dramaet"?',
        options: [
          { id: 'a', text: 'At dramaet analyserer samfunnsproblemer grundig', isCorrect: false },
          { id: 'b', text: 'At fortiden gradvis avdekkes gjennom dialog i nåtiden', isCorrect: true },
          { id: 'c', text: 'At karakterene analyserer sine egne følelser høyt', isCorrect: false },
          { id: 'd', text: 'At publikum må analysere dramaet selv uten hjelp', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'I det analytiske dramaet ligger hovedhandlingen i å avdekke fortiden. Hemmeligheter og skjulte sannheter kommer gradvis frem gjennom dialog, og spenningen ligger i å oppdage hva som egentlig har skjedd.',
      },
    },

    // ========== SEKSJON 3: Symbolenes språk ==========
    {
      id: 'norsk-vg3-1-3-n-section3',
      type: 'text',
      content: `## Når tingene snakker

Ibsens dramaer ser ut som realisme. Stuen er en virkelig stue, med møbler og gardiner og hverdagslige gjenstander. Men se nøyere. Disse gjenstandene bærer en hemmelighet: De er symboler som forteller sin egen historie.

Ta juletræet i "Et dukkehjem". I første akt er det nylig hentet inn, friskt og grønt, pyntet med lys og sløyfer. Nora danser rundt det, lykkelig og bekymringsløs. Men etter hvert som dramaet skrider frem, begynner treet å visne. I andre akt står det der med lysene brent ned og grenene hengende. Akkurat som ekteskapet - som festen - som fasaden.

Eller ta pistolene i "Hedda Gabler". General Gablers gamle pistoler henger på veggen, et minne om farens militære ære. Hedda leker med dem, truer med dem. Og til slutt... Vel, du aner kanskje hva som skjer. Pistolene representerer Heddas lengsel etter kontroll, etter en "vakker" utgang - og hennes destruktive kraft.

I "Vildanden" er vildanden selv det sentrale symbolet. Den skadeskutte fuglen som lever på loftet hos familien Ekdal, blir et bilde på Hedvig, på hele familien, på de "livsløgnene" de trenger for å overleve. Når idealist Gregers vil "jage enden ut i frisk luft", aner vi at han også vil ødelegge familien.

Det geniale med Ibsens symboler er at de fungerer på begge plan samtidig. Juletræet er et virkelig juletre. Pistolene er virkelige pistoler. Men de er også noe mer - og det er i dette "mer" at den dypere meningen ligger.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg3-1-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva symboliserer det visnende juletræet i "Et dukkehjem"?',
        options: [
          { id: 'a', text: 'At julen er over og hverdagen begynner', isCorrect: false },
          { id: 'b', text: 'At ekteskapets fasade faller sammen', isCorrect: true },
          { id: 'c', text: 'At familien har dårlig råd', isCorrect: false },
          { id: 'd', text: 'At Nora ikke passer på hjemmet sitt', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Juletræet i "Et dukkehjem" visner parallelt med at fasaden av det lykkelige ekteskapet faller sammen. Det friske, pyntede treet i første akt blir til et visnet tre med brente lys - akkurat som Noras illusjoner om ekteskapet bryter sammen.',
      },
    },

    // ========== SEKSJON 4: Undertekst og understrøm ==========
    {
      id: 'norsk-vg3-1-3-n-section4',
      type: 'text',
      content: `## Det som ikke blir sagt

Lytt nøye til en samtale mellom to mennesker. Ikke bare til ordene - men til det som ligger mellom dem. Pausene. De brå skiftene av tema. Det de nesten sier, men ikke helt.

Ibsen forsto dette instinktivt. I hans dramaer er det karakterene ikke sier, ofte viktigere enn det de sier. Dette kalles **undertekst** - det som ligger under ordenes overflate.

Se for deg en scene: Nora og hennes mann Torvald snakker om julegaver og husholdningsutgifter. På overflaten er det bare hverdagsprat. Men under overflaten føler vi at noe er galt. Nora er nervøs. Hun avbryter seg selv. Hun skifter tema brått. Vi aner at hun skjuler noe - lenge før vi vet hva.

Denne teknikken gjør dialogene utrolig rike. Hvert ord må leses på flere nivåer. Publikum blir aktive deltakere, som hele tiden prøver å tyde hva som egentlig foregår.

**Understrøm** er et beslektet begrep - den dypere tematiske strømningen som løper under handlingen. Mens karakterene snakker om hverdagslige ting, handler dramaet egentlig om de store spørsmålene: frihet, sannhet, kjærlighet, død.

Ibsen brukte også taushet bevisst. Pausene i dialogene er ikke tomrom - de er fulle av mening. Det som ikke kan sies, det som er for vanskelig å uttrykke, lever i stillheten.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg3-1-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva menes med "undertekst" i dramatisk sammenheng?',
        options: [
          { id: 'a', text: 'Teksten som vises under bildet på scenen', isCorrect: false },
          { id: 'b', text: 'Det karakterene egentlig mener, men ikke sier direkte', isCorrect: true },
          { id: 'c', text: 'Noter skuespillerne bruker under forestillingen', isCorrect: false },
          { id: 'd', text: 'Oversettelser for utenlandsk publikum', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Undertekst er det karakterene egentlig mener eller føler, men ikke sier direkte. I Ibsens dramaer snakker karakterene ofte om hverdagslige ting mens det egentlige dramaet utspiller seg mellom linjene - i det de nesten sier, pausene, og de brå skiftene av tema.',
      },
    },

    // ========== SEKSJON 5: Karakterenes kompleksitet ==========
    {
      id: 'norsk-vg3-1-3-n-section5',
      type: 'text',
      content: `## Mennesker, ikke typer

I melodramaer fra Ibsens tid var karakterene gjerne enkle typer: Den onde skurken med svart kappe. Den uskyldige heltinnen med gullhår. Den noble helten som redder dagen.

Ibsen gjorde noe radikalt annerledes. Hans karakterer er komplekse, selvmotsigende, levende - akkurat som virkelige mennesker.

Ta Torvald Helmer i "Et dukkehjem". Det ville være lett å gjøre ham til en ren skurk - den undertrykkende ektemannen. Men Ibsen viser oss også at Torvald virkelig elsker Nora, på sin måte. Han er ikke ond, bare begrenset. Han har selv vært formet av samfunnets forventninger til hvordan en mann skal være.

Eller ta Nora. Hun er ikke bare et offer. Hun har også løyet, manipulert, spilt rollen som "lerkefugl" fordi det passet henne. Hennes oppvåkning er genuin - men hun etterlater også barn som trenger en mor.

Selv "skurkene" i Ibsens univers har forståelige motiver. Sakfører Krogstad, som truer Nora med avsløring, gjør det fordi han desperat trenger jobben sin for å forsørge barna. Han er ikke ond - han er desperat.

Denne kompleksiteten gjør at vi ikke kan ta enkle standpunkt. Vi kan forstå alle karakterene, selv når vi ikke liker det de gjør. Og det gjør dramaene varig relevante: De tvinger oss til å tenke, ikke bare føle.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg3-1-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva kjennetegner karakterene i Ibsens dramaer?',
        options: [
          { id: 'a', text: 'De er enkle typer som representerer godt eller ondt', isCorrect: false },
          { id: 'b', text: 'De er alltid sympatiske og lette å like', isCorrect: false },
          { id: 'c', text: 'De er komplekse og selvmotsigende, som virkelige mennesker', isCorrect: true },
          { id: 'd', text: 'De snakker alltid i vers og opphøyd språk', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Ibsens karakterer er komplekse og selvmotsigende - akkurat som virkelige mennesker. Selv "skurkene" har forståelige motiver, og selv "heltene" har feil. Denne psykologiske realismen var banebrytende og gjør at karakterene fortsatt føles levende i dag.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg3-1-3-n-summary',
      type: 'text',
      content: `## Oppsummering

**Ibsens dramatiske teknikker:**

**Den vellagede strukturen:**
- Enhet i tid og sted (ofte 24 timer, én stue)
- Naturlig eksposisjon vevd inn i dialog
- Stigende spenning mot vendepunkt og klimaks

**Det analytiske dramaet:**
- Fortiden avdekkes gradvis gjennom nåtiden
- Hemmeligheter kommer frem lag for lag
- Spenning ligger i avsløringen, ikke i handlingen

**Symbolbruk:**
- Hverdagslige gjenstander med dypere mening
- Juletræet, pistolene, vildanden
- Fungerer på både bokstavelig og symbolsk plan

**Undertekst og understrøm:**
- Det usagte er like viktig som det sagte
- Pauser og taushet bærer mening
- Dypere tematikk under overflaten

**Komplekse karakterer:**
- Ikke typer, men levende mennesker
- Selv skurker har forståelige motiver
- Psykologisk realisme

**Viktige symboler hos Ibsen:**
- "Et dukkehjem": Juletræet, tarantellaen, dørsmellingen
- "Gengangere": Solen, regnet, barnehjemmet
- "Vildanden": Vildanden selv, loftet
- "Hedda Gabler": Pistolene, manuskriptet`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const NORSK_VG3_NARRATIV_DEL1_CHAPTERS = [
  CHAPTER_NORSK_VG3_1_1_NARRATIV,
  CHAPTER_NORSK_VG3_1_2_NARRATIV,
  CHAPTER_NORSK_VG3_1_3_NARRATIV,
];
