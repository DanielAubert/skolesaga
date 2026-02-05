/**
 * Norsk VG3 - Narrative versjoner Del 2 (Kapittel 1.4-1.8)
 *
 * Engasjerende, fortellende versjoner av kapitlene om det moderne gjennombruddet,
 * optimalisert for lesing/lytting.
 * Hver narrativ versjon linker tilbake til originalkapittelet via linkedChapterId.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1.4 NARRATIV: Bjornstjerne Bjornson
// ============================================================================

export const CHAPTER_NORSK_VG3_1_4_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-1-4-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '1.4',
  title: 'Bjornstjerne Bjornson',
  subtitle: 'Narrativ versjon',
  description: 'Mot Norges ukronte konge - dikteren, taleren og forkjemperen som skrev nasjonalsangen og rystet Europa.',
  estimatedMinutes: 40,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
    'reflektere over hvordan litteraturen speiler og pavirker samfunnet',
  ],
  linkedChapterId: 'norsk-vg3-1-4',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg3-1-4-n-intro',
      type: 'text',
      content: `## Norges ukronte konge

Forestill deg et Norge i oppbruddstemning. Det er midten av 1800-tallet, og nasjonen sokes etter sin identitet, etter sin stemme. Inn pa scenen trer en mann med lokker som en love og en rost som fyller de storste saler. Han heter Bjornstjerne Bjornson, og han skal bli den mest elsket - og mest omstridte - kulturpersonligheten i norsk historie.

Bjornson var alt pa en gang: dikter og dramatiker, avisredaktor og folketaler, agitator og fredsforkjemper. Der Ibsen trakk seg tilbake til eksil og skrev i stillhet, kastet Bjornson seg ut i offentligheten med alt han hadde. Han reiste land og strand rundt, holdt foredrag, skrev ledere, engasjerte seg i enhver sak han mente var viktig.

Folk flotet til ham. Nar Bjornson talte, lyttet nasjonen. Nar han tok standpunkt, ble det debatt. Nar han skrev, ble ordene sunget av hele folket - for det var han som ga oss «Ja, vi elsker dette landet».

Men hvem var egentlig denne mannen som ble kalt «Norges ukronte konge»? Og hvorfor er det Ibsen, ikke Bjornson, som huskes best i dag?`,
    },

    // ========== SEKSJON 1: Oppvekst og gjennombrudd ==========
    {
      id: 'norsk-vg3-1-4-n-section1',
      type: 'text',
      content: `## Fra prestegard til nasjonalscene

Bjornstjerne Martinius Bjornson ble fodt 8. desember 1832 i Kvikne i Osterdalen. Faren var prest, og da Bjornstjerne var fem ar, flyttet familien til Nesset i Romsdal. Her, omgitt av fjell og fjord, vokste gutten opp med norsk natur og norske sagn i blodet.

Allerede som ung student i Kristiania viste Bjornson en usedvanlig karisma. Han var hoyropt, selvsikker og hadde en naturlig evne til a trekke folk til seg. Raskt ble han en sentral figur i byens intellektuelle kretser. Her var en mann som ville noe, som brant for noe.

Gjennombruddet kom med bondefortellingene pa 1850-tallet. «Synnove Solbakken» i 1857, «Arne» i 1858, «En glad Gut» i 1860 - disse korte romanene skildret norsk bondeland med en varme og poesi som traff leserne midt i hjertet. Her var det norske landskapet, de norske verdiene, den norske karakteren - idealisert og poetisk, men ogsa gjenkjennelig.

Bondefortellingene ble enormt populaere, bade i Norge og i utlandet. De ble oversatt til mange sprak og bidro til a forme bildet av Norge som en nasjon av frie, stolte bonder i et majestetisk landskap. Bjornson hadde gitt nordmenn et speil a se seg selv i - og bildet var smigrende.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg3-1-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva kjennetegnet Bjornsons bondefortellinger?',
        options: [
          { id: 'a', text: 'Realistiske skildringer av bondens harde liv', isCorrect: false },
          { id: 'b', text: 'Idealiserte skildringer av norsk bondeland med varme og poesi', isCorrect: true },
          { id: 'c', text: 'Satiriske angrep pa bondekulturen', isCorrect: false },
          { id: 'd', text: 'Historiske fortellinger fra middelalderen', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Bjornsons bondefortellinger som «Synnove Solbakken» og «Arne» var idealiserte, poetiske skildringer av norsk bondeland. De var populaere nasjonalromantiske verk som bidro til a forme det norske selvbildet.',
      },
    },

    // ========== SEKSJON 2: Dramatikeren og samfunnsdebattanten ==========
    {
      id: 'norsk-vg3-1-4-n-section2',
      type: 'text',
      content: `## Fra romantikk til samfunnskritikk

Men Bjornson var ikke en mann som sto stille. Pa 1860-tallet skrev han historiske dramaer med stolte nasjonale temaer. Sa kom det moderne gjennombruddet, og Bjornson lot seg rive med. Han forsto at tiden krevde en ny type litteratur - en som tok opp virkelighetens problemer.

Med «En fallit» i 1875 skrev han et drama om okonomisk krise og moralsk ansvar. Stykket var et frontalangrep pa borgerskapets hykleri - de fine fasadene som skjulte rad og ruin. Samme ar kom «Redaktoren», om pressens makt og ansvar. Bjornson visste hva han snakket om - han hadde selv vaert avisredaktor.

«En hanske» fra 1883 ble kanskje hans mest omstridte stykke. Her krevde den unge kvinnen Svava at samme moralske standard skulle gjelde for menn som for kvinner. Da hun oppdaget at forloveden hennes hadde hatt et forhold for han traff henne, kastet hun hansken i ansiktet hans og brot forlovelsen. Publikum var i oppr. Var dette rimelig? Var dette rettferdig?

Bjornson mente ja. Han var en ihuga forkjemper for kvinners rettigheter, lenge for det var stuerent. Han talte for likestilling, for utdanning for kvinner, for deres rett til a bestemme over egne liv. I dette var han pa linje med Ibsen - men der Ibsen stilte sporsmmlene, ga Bjornson gjerne svarene ogsa.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg3-1-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva handler dramaet «En hanske» om?',
        options: [
          { id: 'a', text: 'En ridder som kjemper i duell med en hanske', isCorrect: false },
          { id: 'b', text: 'En kvinne som krever lik moralsk standard for begge kjonn', isCorrect: true },
          { id: 'c', text: 'En bokser som mister karrieren', isCorrect: false },
          { id: 'd', text: 'En aristokrat som mister formuen sin', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'I «En hanske» krever Svava at menn skal holdes til samme moralske standard som kvinner. Nar hun oppdager forlovedets fortid, bryter hun forlovelsen - et kontroversielt standpunkt som skapte voldsom debatt.',
      },
    },

    // ========== SEKSJON 3: Folketaleren ==========
    {
      id: 'norsk-vg3-1-4-n-section3',
      type: 'text',
      content: `## En stemme som nidde massene

Det som virkelig skilte Bjornson fra andre forfattere, var hans rolle som offentlig person. Han var ikke bare en forfatter som skrev boker - han var en nasjonal lederskikkelse som mente noe om alt og sa det hoyt.

Bjornson reiste uopphldelig. Han holdt foredrag i byer og bygder, i kirker og forsamlingshus. Nar Bjornson kom til byen, var det en begivenhet. Folk strommet til for a hore ham - denne bjornen av en mann med den rungende stemmen og de flammende ordene.

Han engasjerte seg i unionsopplosningen med Sverige lenge for den ble en realitet. Han agiterte for republikanisme - ja, han mente faktisk at Norge burde vaere en republikk, selv om han ogsa skrev nasjonalsangen som hyller «kongenes aett». Han kjempet for religios fritenkning og mot kirkens makt over folks tanker.

Men Bjornsons engasjement strakte seg langt utover Norges grenser. Da den franske offiseren Alfred Dreyfus ble urettmessig domt for spionasje - et justismord preget av antisemittisme - kastet Bjornson seg inn i kampen for hans frikjennelse. Han skrev artikler, holdt taler, og ble en internasjonal rost for rettferdighet. Dette var ikke en sak som angikk Norge - men det angikk Bjornson, fordi det angikk menneskehetens verdighet.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg3-1-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hvilken internasjonal sak engasjerte Bjornson seg sterkt i?',
        options: [
          { id: 'a', text: 'Den amerikanske borgerkrigen', isCorrect: false },
          { id: 'b', text: 'Dreyfus-saken i Frankrike', isCorrect: true },
          { id: 'c', text: 'Den irske uavhengighetskampen', isCorrect: false },
          { id: 'd', text: 'Den russiske revolusjonen', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Bjornson engasjerte seg sterkt i Dreyfus-saken, der den franske offiseren Alfred Dreyfus ble urettmessig domt for spionasje. Bjornson kjempet for hans frikjennelse og ble en internasjonal stemme for rettferdighet.',
      },
    },

    // ========== SEKSJON 4: Nobelprisen og nasjonalsangen ==========
    {
      id: 'norsk-vg3-1-4-n-section4',
      type: 'text',
      content: `## Hoydepunkter og arv

I 1903 fikk Bjornson en annerkjennelse som bekreftet hans posisjon: Nobelprisen i litteratur. Han var den forste nordmannen som mottok denne utmerkelsen - tildelt «som en hyllest til hans edle, storslaane og allsidige diktervirke».

Men det er kanskje et annet verk som har gjort Bjornson udodelig i norske hjerter. I 1859, midt i bondefortellingenes glanstid, skrev han teksten til «Ja, vi elsker dette landet». Melodien kom senere, av Rikard Nordraak. Sammen skapte de Norges nasjonalsang - et dikt som synges ved hver 17. mai-feiring, ved hver idrettsseier, ved hvert oyeblikk av nasjonal samling.

Det er en underlig ironi at republikaneren Bjornson skrev en sang som hyller «kongenes aett». Men kanskje var det nettopp dette som kjennetegnet ham: evnen til a favne det nasjonale folelseslivet, selv nar det ikke passet helt med hans politiske overbevisninger.

Bjornson dode i Paris 26. april 1910. Begravelsen i Kristiania ble en nasjonal begivenhet. Hele byen var pa beina. Kongen fulgte kisten. Nasjonen sorget over sin ukronte konge.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg3-1-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva var spesielt med Bjornsons Nobelpris?',
        options: [
          { id: 'a', text: 'Han var den yngste vinneren noensinne', isCorrect: false },
          { id: 'b', text: 'Han var den forste nordmannen som fikk Nobelprisen', isCorrect: true },
          { id: 'c', text: 'Han nektet a ta imot prisen', isCorrect: false },
          { id: 'd', text: 'Han delte prisen med Ibsen', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Bjornson var den forste nordmannen som mottok Nobelprisen i litteratur (1903). Prisen ble tildelt for hans «edle, storslaane og allsidige diktervirke».',
      },
    },

    // ========== SEKSJON 5: Bjornson vs. Ibsen ==========
    {
      id: 'norsk-vg3-1-4-n-section5',
      type: 'text',
      content: `## To veier til udodelighet

Bjornson og Ibsen var venner, rivaler og motpoler pa samme tid. De beundret hverandre, men de var ogsa grunnleggende forskjellige.

Ibsen trakk seg tilbake fra verden. Han levde i eksil, skrev i stillhet, lot verkene tale for seg. Han stilte sporsmal, men ga sjelden svar. Hans dramaer er flertydige, aapne for tolkning, psykologisk dype.

Bjornson kastet seg inn i verden. Han talte, agiterte, tok standpunkt. Han ville forandre samfunnet - ikke bare skildre det. Hans dramaer er ofte mer direkte, mer «agitatoriske». Budskapet er tydeligere, kanskje for tydelig for kunstens egen del.

I samtiden var Bjornson den storre. Han var nasjonalhelten, folkets dikter, den ukronte kongen. Men i ettertiden er det Ibsen som har vunnet. Hans stykker spilles over hele verden, mens Bjornsons dramaer sjelden settes opp utenfor Norge.

Hvorfor? Kanskje fordi det som var aktuelt, ble datert. Bjornsons agitasjon for spesifikke saker mistet sin kraft nar sakene var avgjort. Ibsens universelle sporsmal om frihet, sannhet og identitet er like aktuelle i dag som for 150 ar siden.

Likevel: Hver gang nordmenn reiser seg og synger «Ja, vi elsker dette landet», lever Bjornson videre. Og det er kanskje den storste udodeligheten av alle.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg3-1-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvorfor regnes Ibsen som den «storre» forfatteren i dag?',
        options: [
          { id: 'a', text: 'Fordi han skrev flere boker enn Bjornson', isCorrect: false },
          { id: 'b', text: 'Fordi Bjornsons agitasjon ble datert, mens Ibsens universelle temaer er tidlose', isCorrect: true },
          { id: 'c', text: 'Fordi Ibsen var mer populaer i samtiden', isCorrect: false },
          { id: 'd', text: 'Fordi Bjornson aldri fikk internasjonal anerkjennelse', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Ibsens stykker handler om universelle temaer som frihet, sannhet og identitet - sporsmal som er like aktuelle i dag. Bjornsons mer direkte agitasjon for spesifikke samtidige saker mistet kraft nar sakene ble avgjort.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg3-1-4-n-summary',
      type: 'text',
      content: `## Oppsummering

**Bjornstjerne Bjornson (1832-1910)** var «Norges ukronte konge» - dikter, dramatiker, taler og samfunnsdebattant.

**Livsveien:**
- Fodt i Kvikne, oppvokst i Romsdal
- Gjennombrudd med bondefortellingene pa 1850-tallet
- Fra nasjonalromantikk til samfunnskritikk
- Utrattelig folketaler og debattant
- Forste nordmann med Nobelprisen (1903)

**Hovedverk:**
- *Synnove Solbakken* (1857) - bondefortelling
- *En fallit* (1875) - samfunnsdrama
- *En hanske* (1883) - om dobbeltmoral
- «Ja, vi elsker» (1859) - nasjonalsangen

**Engasjement:**
- Kvinnesak og likestilling
- Unionsopplosningen
- Religios fritenkning
- Dreyfus-saken

**Sammenligning med Ibsen:**
- Bjornson: Direkte, agitatorisk, offentlig engasjert
- Ibsen: Tilbaketrukket, flertydig, psykologisk dyp
- Ibsens universelle temaer har holdt seg bedre

**Arven:**
- Nasjonalsangen synges fortsatt
- Bidro til norsk nasjonsbygging
- En av «de fire store» i norsk litteratur`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.5 NARRATIV: Alexander Kielland og Jonas Lie
// ============================================================================

export const CHAPTER_NORSK_VG3_1_5_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-1-5-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '1.5',
  title: 'Alexander Kielland og Jonas Lie',
  subtitle: 'Narrativ versjon',
  description: 'Mot de to prosamesterne - den elegante satirikeren fra Stavanger og den poetiske psykologen fra nord.',
  estimatedMinutes: 40,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
    'skrive litteraere analyser og sammenligninger',
  ],
  linkedChapterId: 'norsk-vg3-1-5',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg3-1-5-n-intro',
      type: 'text',
      content: `## Prosaskunstens mestere

Nar vi snakker om det moderne gjennombruddet, er det lett a glemme at Ibsen og Bjornson primert var dramatikere. De skrev for teatret, for scenen, for det talte ord. Men hva med prosaen - romanene og novellene som kunne leses i stillhet, hjemme ved lampen?

Her trader to andre forfattere frem: Alexander Kielland og Jonas Lie. Sammen med Ibsen og Bjornson utgjor de «de fire store» i norsk litteraturhistorie. Men der Ibsen rystet verden med sine dramaer og Bjornson trollbandt massene med sine taler, arbeidet Kielland og Lie i et stillere register. De skrev boker som ble lest - og lest og lest.

Kielland var satirikeren, den elegante dissekoren av borgerskapets hykleri. Med noen fa, velvalgte ord kunne han avsløre en hel samfunnsklasses tomhet. Lie var psykologen, den varsomme utforskeren av det indre livet. Han skrev om familier, om kvinner, om de uuttalte konfliktene som ulmer under overflaten.

Sammen representerer de to vidt forskjellige mater a skrive realistisk prosa pa. La oss mote dem begge.`,
    },

    // ========== SEKSJON 1: Alexander Kielland - elegansen ==========
    {
      id: 'norsk-vg3-1-5-n-section1',
      type: 'text',
      content: `## Mannen som ikke trengte a skrive

Alexander Lange Kielland ble fodt 18. februar 1849 i Stavanger, i en av byens mektigste kjopmmansfamilier. Han vokste opp med alt: rikdom, status, utdanning. Han ble jurist, arbeidet som advokat, og kunne ha levd et behagelig liv som velstaende borger.

Men Kielland valgte pennen. Ikke fordi han matte, men fordi han ville. Og det er kanskje nettopp denne friheten som preger hans forfatterskap. Kielland skrev ikke for a overleve - han skrev for a avsløre.

Hans forste novellesamling, «Novelletter» fra 1879, viste med en gang hva han kunne. Novellen «Karen» ble et mesterverk i miniatyr - historien om en fattig tjenestepike som blir forfort, gravid og forlatt, og som til slutt tar livet av barnet sitt og blir henrettet. Kielland forteller det nesten uten a heve stemmen. Han moraliserer ikke. Han bare viser frem - og lar ironien gjore resten.

For det er ironien som er Kiellands varemerke. Han skriver med en elegant distanse, en tilsynelatende kjolig tone som bare gjor kritikken desto skarpere. Nar han skildrer borgerskapets middagsselskaper og kirkelige fromhet, aner vi hele tiden spottten under overflaten. Se her, sier Kielland, se pa disse menneskene som tror de er sa respektable. Se hva de egentlig er.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg3-1-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva kjennetegner Alexander Kiellands stil?',
        options: [
          { id: 'a', text: 'Heftig, folelsesladet og direkte moralisering', isCorrect: false },
          { id: 'b', text: 'Elegant ironi og tilbakeholdt kritikk', isCorrect: true },
          { id: 'c', text: 'Poetisk romantikk og naturskildringer', isCorrect: false },
          { id: 'd', text: 'Kaldere, vitenskapelig distanse', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Kielland var kjent for sin elegante, ironiske stil. Han kritiserte samfunnet uten a heve stemmen - ironien og den tilsynelatende kjolige tonen gjorde kritikken desto skarpere.',
      },
    },

    // ========== SEKSJON 2: Kiellands hovedverk ==========
    {
      id: 'norsk-vg3-1-5-n-section2',
      type: 'text',
      content: `## Angrep pa samfunnsstottene

Kiellands romaner er frontalangrep pa det borgerlige samfunnets soller. «Garman & Worse» fra 1880 skildrer handelshusenes verden i en sjoby - rikdommen, maktspillet, den religiose hykleriet som holder det hele sammen. Her ser vi pietismen brukt som kontrollmekanisme, overklassens moralske dobbelthet.

«Gift» fra 1883 gikk enda lenger. Romanen er et angrep pa det stive latinskolesystemet - den puggbaserte, livlofje utdanningen som kvelte elevenes kreativitet og nysgjerrighet. Hovedpersonen Marius dor - bokstavelig talt - av skolen. Han pugger og pugger til hjernen bryter sammen. Tittelen «Gift» er flertydig: det handler bade om giftinformasjon elevene ma svelge, og om det drepende systemet.

Men Kielland var ikke bare samfunnskritiker. Han hadde ogsa et varmt hjerte for de undertrykte - for tjenestepikene, for arbeiderne, for de fattige som ble knust av systemet. I novellen «Karen» og i romanene «Arbeidsfolk» og «Skipper Worse» viser han hvordan samfunnets ofre ikke har noen sjanse mot de mektiges hykleri.

Kielland endte sin karriere som borgermester i Stavanger - en ironisk skjebne for mannen som hadde brukt livet pa a kritisere borgerlige institusjoner. Men kanskje var det nettopp hans bakgrunn som ga ham innsikt. Han kjente systemet fra innsiden.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg3-1-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva kritiserer Kielland i romanen «Gift»?',
        options: [
          { id: 'a', text: 'Giftige industribedrifter', isCorrect: false },
          { id: 'b', text: 'Latinskolesystemets pugg og livsfornektelse', isCorrect: true },
          { id: 'c', text: 'Giftmord i overklassen', isCorrect: false },
          { id: 'd', text: 'Forgiftningen av naturen', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: '«Gift» er et angrep pa det stive latinskolesystemet der elever matte pugge livslos latinsk grammatikk. Tittelen spiller pa bade giftinformasjonen elevene ma svelge og det dodelige systemet.',
      },
    },

    // ========== SEKSJON 3: Jonas Lie - psykologen ==========
    {
      id: 'norsk-vg3-1-5-n-section3',
      type: 'text',
      content: `## Fra Tromsm til det indre liv

Jonas Lie ble fodt 6. november 1833 i Hokksund, men vokste opp i Tromso. Det var i nord, under nordlyset og morkretiden, at fantasien hans ble formet. Eventyrene, sagaene, folketroen - alt dette skulle sette sitt preg pa det han skrev.

Som Kielland var Lie utdannet jurist. Men der Kielland aldri trengte a tjene penger pa skrivingen, ble Lie forfatter fordi han matte. Forretningsvirksomheten hans gikk konkurs, og litteraturen ble hans vei ut av okonomisk krise.

Det er noe passende i dette. Der Kielland skrev fra en posisjon av overflod og kunne tillate seg a vaere satirisk, skrev Lie fra erfaringen av tap og kamp. Hans forfatterskap er varmere, mer empatisk, mer interessert i det indre livet enn i samfunnskritikk.

Lies spesialitet var familien - ikke som institusjon a kritisere, men som arena for psykologisk drama. Han forsto at de storste konfliktene ofte utspiller seg mellom mennesker som elsker hverandre, i det stille, i det uuttalte. Hans romaner utforsker det som ligger under overflaten av tilsynelatende harmoniske familieliv.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg3-1-5-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-5-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva var Jonas Lies hovedtema i forfatterskapet?',
        options: [
          { id: 'a', text: 'Satiriske angrep pa borgerskapet', isCorrect: false },
          { id: 'b', text: 'Historiske dramaer fra vikingtiden', isCorrect: false },
          { id: 'c', text: 'Familie, psykologi og det indre liv', isCorrect: true },
          { id: 'd', text: 'Naturalistiske skildringer av fattigdom', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Lie var opptatt av familien som psykologisk arena. Han utforsket det indre livet, de uuttalte konfliktene mellom mennesker som elsker hverandre, og det som ligger under overflaten av tilsynelatende harmoniske familieliv.',
      },
    },

    // ========== SEKSJON 4: Lies hovedverk ==========
    {
      id: 'norsk-vg3-1-5-n-section4',
      type: 'text',
      content: `## Familier i skyggen

«Familien paa Gilje» fra 1883 er kanskje Lies mest kjente roman. Her folger vi en embetsmannsfamilie pa landsbygda gjennom flere tiar. Fokus ligger pa dotrene - deres drommer, deres begrensninger, deres valg.

Inger-Johanna, den eldste, drommer om noe mer enn a bli gift og bo pa landet. Men mulighetene er fa. Hun ender i et fornuftsekteskap som gir trygghet, men ikke lykke. Thinka er mer opporsk, men ogsa hun ma tilpasse seg. Og under det hele ligger morens stille selvoppofrelse.

Lie skriver ikke med Kiellands satiriske brodd. Han moraliserer ikke, han dommer ikke. Han bare viser - med varme og forstaelse - hvordan samfunnets forventninger former menneskers liv. Sarlig kvinners liv.

I sine siste ar skrev Lie «Trold»-fortellingene - en serie underlige historier der realismen blandes med mystikk og folketro. Her kommer barndommen i Tromso tilbake: trollene, de overnaturlige kreftene, det som lurere i morket. Disse fortellingene er noe av det mest saerpreget i norsk litteratur - ogsa noe av det mest forsomte.

Lie dode i 1908, to ar for Bjornson. Han var aldri sa beramt som de andre av «de fire store», men hans psykologiske realisme peker fremover mot det 20. arhundrets litteratur.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg3-1-5-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-5-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva handler «Familien paa Gilje» om?',
        options: [
          { id: 'a', text: 'En bondefamilie som kjemper mot fattigdom', isCorrect: false },
          { id: 'b', text: 'En embetsmannsfamilie og dotrenes begrensede muligheter', isCorrect: true },
          { id: 'c', text: 'En fabrikkeierfamilie i industrialiseringens tid', isCorrect: false },
          { id: 'd', text: 'En fiskerfamilie i Nord-Norge', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: '«Familien paa Gilje» folger en embetsmannsfamilie pa landsbygda med fokus pa dotrenes drommer og begrensede muligheter. Romanen viser med varme hvordan samfunnets forventninger former kvinners liv.',
      },
    },

    // ========== SEKSJON 5: To veier til realismen ==========
    {
      id: 'norsk-vg3-1-5-n-section5',
      type: 'text',
      content: `## Satirikeren og psykologen

Kielland og Lie representerer to vidt forskjellige mater a skrive realistisk prosa pa. Kielland angriper utenfra - han dissekerer samfunnet med ironiens skalpell, avslorer hykleriet, krever forandring. Lie utforsker innenfra - han soker a forsta menneskene, folelsene, de indre konfliktene.

Begge skrev om virkeligheten. Begge tok opp aktuelle temaer. Men der Kielland spor: «Hva er galt med dette samfunnet?», spor Lie: «Hva gjor dette samfunnet med menneskene som lever i det?»

I ettertiden har Kielland vaert den mer leste av de to. Hans romaner er lettere tilgjengelige, satiren mer underholdende. Men Lies psykologiske innsikt var pa mange mater mer nyskapende. Han anto det som Sigmund Freud og psykoanalysen skulle utforske noen tiir senere - det ubevisste, det fortrengte, det som ligger under overflaten.

Sammen fyller de ut bildet av det moderne gjennombruddet. Uten Kielland og Lie ville «de fire store» bare vaert «de to store» - og norsk litteraturhistorie ville vaert fattigere.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg3-1-5-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-5-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva er hovedforskjellen mellom Kielland og Lie?',
        options: [
          { id: 'a', text: 'Kielland skrev drama, Lie skrev romaner', isCorrect: false },
          { id: 'b', text: 'Kielland var satiriker som kritiserte utenfra, Lie var psykolog som utforsket innenfra', isCorrect: true },
          { id: 'c', text: 'Kielland var optimist, Lie var pessimist', isCorrect: false },
          { id: 'd', text: 'Kielland skrev pa nynorsk, Lie pa bokmal', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Kielland angrep samfunnet utenfra med ironi og satire, mens Lie utforsket det indre livet og psykologien. Kielland spurte hva som var galt med samfunnet; Lie spurte hva samfunnet gjorde med menneskene.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg3-1-5-n-summary',
      type: 'text',
      content: `## Oppsummering

**«De fire store»** i norsk litteratur inkluderer to prosaikere: Alexander Kielland og Jonas Lie.

**Alexander Kielland (1849-1906):**
- Fra velstaende kjopmmannsfamilie i Stavanger
- Elegant, ironisk stil
- Satiriske angrep pa borgerskapets hykleri
- Hovedverk: «Garman & Worse», «Gift», «Karen»
- Sympati med de undertrykte

**Jonas Lie (1833-1908):**
- Oppvokst i Tromso, preget av nordnorsk kultur
- Psykologisk realisme med varme
- Fokus pa familie og kvinners livssituasjon
- Hovedverk: «Familien paa Gilje», «Trold»
- Kombinerte realisme med mystikk

**Sammenligning:**
- Kielland: Satiriker som kritiserer samfunnet utenfra
- Lie: Psykolog som utforsker det indre livet

**Felles bidrag:**
- Begge tok opp aktuelle samfunnstemaer
- Begge skrev om kvinners situasjon
- Sammen med Ibsen og Bjornson utgjor de gjennombruddets fire soller`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.6 NARRATIV: Amalie Skram og kvinneperspektivet
// ============================================================================

export const CHAPTER_NORSK_VG3_1_6_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-1-6-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '1.6',
  title: 'Amalie Skram og kvinneperspektivet',
  subtitle: 'Narrativ versjon',
  description: 'Mot kvinnen som skrev det ingen andre turte - om ekteskap, galskap og kampen for a bli hort.',
  estimatedMinutes: 40,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
    'skrive litteraere analyser og sammenligninger',
  ],
  linkedChapterId: 'norsk-vg3-1-6',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg3-1-6-n-intro',
      type: 'text',
      content: `## Stemmen som brot tausheten

Det er 1895, og en kvinne skriver febrilsk i sin leilighet i Kobenhavn. Hun har nettopp opplevd noe forferdelig - innleggelse pa lukket psykiatrisk avdeling mot sin vilje. Legene kalte henne hysterisk. Ektemannen signerte papirene. Ingen lyttet til hennes protester.

Na skal hun fortelle verden hva som virkelig skjedde.

Kvinnen heter Amalie Skram, og boken hun skriver - «Professor Hieronimus» - skal avsløre psykiatriens maktmisbruk pa en mate som rystet samtiden. Men dette er bare ett kapittel i et forfatterskap som tok opp tabuene alle andre vek unna: tvungne ekteskap, kvinners seksualitet, galskap, klasse og skam.

Amalie Skram var ikke en av «de fire store». Hun var ikke en mann, og hun skrev ikke det publikum ville hore. Men i dag anerkjennes hun som en av periodens viktigste forfattere - kanskje den modigste av dem alle.

For Skram skrev ikke bare om problemer. Hun skrev fra sin egen kropp, sitt eget liv, sin egen smerte. Og det hun avslørte, var sannheter det borgerlige samfunnet helst ville holde skjult.`,
    },

    // ========== SEKSJON 1: Et liv i lenker ==========
    {
      id: 'norsk-vg3-1-6-n-section1',
      type: 'text',
      content: `## Fra Bergens overklasse til livets skyggeside

Amalie Alver ble fodt 22. august 1846 i Bergen, i en velstaende familie. Tilvaerrelsen burde vaert trygg og behagelig. Men allerede som 17-aring ble livet hennes snudd pa hodet: Hun ble giftet bort til sjokapteinen Bernt Ulrik August Muller.

Ekteskapet var en katastrofe. Muller var eldre, dominerende, og Amalie var bare et barn. Hun fulgte ham pa lange sjoreiser, isolert og ensom. Depresjonen kom snikende. Hun folte seg fanget i et liv hun aldri hadde valgt.

Forst i 1882, etter nesten tjue ars ulykke, klarte hun a fa skilsmisse. Det var en skam i samtiden - en kvinne som forlot ektemannen. Men for Amalie var det frigjoring.

To ar senere giftet hun seg pa nytt, med den danske forfatteren Erik Skram. Dette ekteskapet var lykkeligere, men ogsa preget av hennes psykiske slitenhet. Og i 1894 kom den hendelsen som skulle forandre alt: Erik fikk henne innlagt pa lukket avdeling pa Kommunehospitalet i Kobenhavn.

Amalie protesterte. Hun mente hun ikke var gal, bare utslitt og deprimert. Men ingen horte pa henne. Legene bestemte. Ektemannen hadde makt. En kvinnes stemme talte ikke.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg3-1-6-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-6-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva preget Amalie Skrams forste ekteskap?',
        options: [
          { id: 'a', text: 'Det var et lykkelig kjaeerlighetsekteskap', isCorrect: false },
          { id: 'b', text: 'Hun ble giftet bort som 17-aring til en eldre sjokaptein', isCorrect: true },
          { id: 'c', text: 'Hun valgte selv ektemannen mot familiens vilje', isCorrect: false },
          { id: 'd', text: 'Det varte bare i noen fa ar', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Amalie ble giftet bort som 17-aring til den eldre sjokapteinen Muller. Ekteskapet var ulykkelig, preget av isolasjon og depresjon. Hun fikk endelig skilsmisse i 1882 etter nesten tjue ar.',
      },
    },

    // ========== SEKSJON 2: Naturalismens mester ==========
    {
      id: 'norsk-vg3-1-6-n-section2',
      type: 'text',
      content: `## Arv, miljo og skjebne

Amalie Skram regnes som Norges fremste naturalist. Men hva betyr det egentlig?

Naturalismen var en litteraer retning som tok realismen enda lenger. Der realistene ville skildre virkeligheten slik den var, ville naturalistene ogsa forklare den - gjennom vitenskapelige teorier om arv og miljo. Mennesket var ikke fritt. Det var et produkt av genene det hadde arvet og omgivelsene det vokste opp i.

Skrams hovedverk «Hellemyrsfolket» (1887-1898) er et mesterverk i denne tradisjonen. Over fire bind - «Sjur Gabriel», «To Venner», «S.G. Myre» og «Afkom» - folger vi en slekt gjennom flere generasjoner. Og vi ser hvordan negative egenskaper gar i arv, hvordan fattigdom forer til fattigdom, hvordan det ikke finnes noen vei ut.

Det er morkt stoff. Alkoholisme, vold, moralsk forfall. Skram forskjonner ingenting. Hun viser frem mennesker som er fanget av krefter de ikke kan kontrollere - og et samfunn som lar dem synke dypere og dypere.

Men bak den nokokterne fremstillingen ligger en dyp sympati. Skram dommer ikke sine karakterer. Hun viser at de er ofre - ikke bare for sine egne svakheter, men for et samfunn som gir dem ingen sjanse.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg3-1-6-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-6-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva er hovedtemaet i «Hellemyrsfolket»?',
        options: [
          { id: 'a', text: 'En lykkelig bondefamilies oppstigning', isCorrect: false },
          { id: 'b', text: 'Hvordan arv og miljo bestemmer menneskers skjebne gjennom generasjoner', isCorrect: true },
          { id: 'c', text: 'En kjaeerlighetshistorie mellom to unge mennesker', isCorrect: false },
          { id: 'd', text: 'Kampen for norsk uavhengighet', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: '«Hellemyrsfolket» er et naturalistisk verk som viser hvordan negative egenskaper - alkoholisme, fattigdom, moralsk forfall - gar i arv gjennom generasjoner. Det er en dyster skildring av determinismens jerngrep.',
      },
    },

    // ========== SEKSJON 3: Kvinnekroppen og tabuen ==========
    {
      id: 'norsk-vg3-1-6-n-section3',
      type: 'text',
      content: `## Det ingen andre turte skrive

Men det som virkelig skilte Amalie Skram fra andre forfattere, var hennes aeerlighet om kvinners liv - de sidene som ikke ble snakket om i pene selskaper.

I romanen «Constance Ring» (1885) skildret hun noe som knapt fantes i litteraturen for: en kvinnes seksuelle oppvakning, og hennes rett til egne folelser. Constance er gift med en mann hun ikke elsker. Hun vekkes til liv av en annen - men oppdager at samfunnet ikke gir henne lov til a folge sine egne behov.

«Lucie» (1888) gikk enda lenger. Her er hovedpersonen en kvinne som aktivt soker kjaeerlighet og seksualitet - noe som var uhort for en «respektabel» kvinne. Romanen ble skandale.

Skram skrev ogsa om barnefodsel, om moderskap, om kroppen i alle dens faser. Hun skrev om det a vaere fanget i et ekteskap, a bli behandlet som en eiendel, a ikke ha kontroll over sitt eget liv.

Dette var ikke bare litteratur. Det var personlig erfaring, omskapt til kunst. Skram visste hva det ville si a bli fratatt sin stemme, sin kropp, sin frihet. Og hun nektet a tie.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg3-1-6-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-6-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hvorfor var Skrams romaner sjokkerende for samtiden?',
        options: [
          { id: 'a', text: 'Hun skrev pa dialekt', isCorrect: false },
          { id: 'b', text: 'Hun skrev aerlig om kvinners seksualitet og kropp', isCorrect: true },
          { id: 'c', text: 'Hun kritiserte kongehuset', isCorrect: false },
          { id: 'd', text: 'Hun brukte et for avansert sprak', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Skram skrev aepent om tabuemner som kvinners seksualitet, kroppslige opplevelser og rett til egne folelser. Dette var sjokkerende i en tid da slike temaer ikke ble diskutert, langt mindre skrevet om i litteraturen.',
      },
    },

    // ========== SEKSJON 4: Psykiatriens maktmisbruk ==========
    {
      id: 'norsk-vg3-1-6-n-section4',
      type: 'text',
      content: `## Kampen mot Professor Hieronimus

I 1894 opplevde Amalie Skram noe som skulle bli utgangspunktet for hennes mest personlige verk. Utslitt og deprimert lot hun seg overtale til a bli innlagt - men det som skulle vaere hvile, ble et mareritt.

Pa den lukkede avdelingen mistet hun alle rettigheter. Legene - representert av den autoritaere «Professor Hieronimus» - behandlet henne som et objekt, ikke som et menneske. Hennes protester ble tolket som symptomer pa sykdom. Jo mer hun kjempet, desto mer «gal» virket hun.

Etter utskrivningen gjorde Skram noe modig: Hun skrev bade «Professor Hieronimus» og oppfolgeren «Paa St. Jorgen» (begge 1895), der hun avslørte hva som forgikk bak de lukkede dorene. Hun viste hvordan psykiatrien kunne brukes som maktmiddel - sarlig mot kvinner.

Diagnosen «hysteri» ble ofte brukt for a ugyldiggjore kvinners opplevelser. Var du opprort? Hysterisk. Protesterte du mot urettferdighet? Hysterisk. Pa denne maten kunne menns makt over kvinner opprettholdes - med medisinens velsignelse.

Skrams boker bidro til debatt om psykiatriens metoder. De ga stemme til de stemmelase. Og de minner oss om at kampen for a bli trodd og hort er en kamp som fortsatt pages.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg3-1-6-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-6-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva avslorer Skram i «Professor Hieronimus»?',
        options: [
          { id: 'a', text: 'Korrupsjon i universitetsverden', isCorrect: false },
          { id: 'b', text: 'Psykiatriens maktmisbruk, saerlig mot kvinner', isCorrect: true },
          { id: 'c', text: 'Legers heltemodige innsats', isCorrect: false },
          { id: 'd', text: 'Den moderne medisinens fremskritt', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Basert pa egne opplevelser avslörte Skram hvordan psykiatrien kunne brukes som maktmiddel mot kvinner. Diagnosen «hysteri» ugyldiggjorde kvinners protester, og legene hadde total makt over pasientene.',
      },
    },

    // ========== SEKSJON 5: Arven etter Amalie ==========
    {
      id: 'norsk-vg3-1-6-n-section5',
      type: 'text',
      content: `## Den forsomte mesteren

Amalie Skram dode 15. mars 1905 i Kobenhavn, bare 58 ar gammel. Hun hadde skrevet seg tom, levd seg tom.

I sin egen tid var hun respektert, men ogsa kontroversiell. Stoffet var for morkt, for aerlig, for ubehagelig. Hun passet ikke inn i de pene litteraere sirkler der «de fire store» ble feiret.

Men i ettertiden har anerkjennelsen kommet. I dag regnes Skram som en av periodens viktigste forfattere - kanskje den viktigste av de kvinnelige stemmene i det moderne gjennombruddet. Hennes aeerlighet om kvinners liv, hennes kompromisslase naturalisme, hennes mot til a skrive om det ingen andre turte - alt dette gjor henne aktuell fremdeles.

Hun var ikke alene. Camilla Collett hadde banet veien med «Amtmandens Dotre» allerede i 1854. Aasta Hansteen og Magdalene Thoresen bidro med sine stemmer. Men Skram gikk lengst. Hun blottla seg, hun tok kostnadene, hun nektet a tie.

Nar vi leser henne i dag, minner hun oss om hvor mye som sto pa spill for kvinner som ville skrive sin egen sannhet. Og hun minner oss om at litteraturen kan vaere et vaapen - mot makt, mot taushet, mot glemsel.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg3-1-6-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-6-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvordan vurderes Amalie Skram i dag?',
        options: [
          { id: 'a', text: 'Hun er fortsatt lite anerkjent', isCorrect: false },
          { id: 'b', text: 'Hun regnes som en av periodens viktigste forfattere', isCorrect: true },
          { id: 'c', text: 'Hun huskes bare for en roman', isCorrect: false },
          { id: 'd', text: 'Hun er populaer i utlandet, men ukjent i Norge', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'I dag anerkjennes Amalie Skram som en av det moderne gjennombruddets viktigste forfattere. Hennes aeerlighet om tabuemner og hennes kompromisslase naturalisme gjor henne fortsatt aktuell.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg3-1-6-n-summary',
      type: 'text',
      content: `## Oppsummering

**Amalie Skram (1846-1905)** var Norges fremste naturalist og en kompromisslos stemme for kvinners erfaringer.

**Livet:**
- Fodt i Bergen i velstaende familie
- Giftet bort som 17-aring til ulykkelig ekteskap
- Skilsmisse i 1882, ny gift med Erik Skram
- Innlagt pa psykiatrisk avdeling 1894
- Dode utslitt i Kobenhavn 1905

**Hovedverk:**
- *Hellemyrsfolket* (1887-1898) - naturalistisk slektsroman
- *Constance Ring* (1885) - kvinnelig seksualitet
- *Professor Hieronimus* (1895) - psykiatriens maktmisbruk

**Temaer:**
- Arv og miljo som skjebne
- Kvinners begrensede handlingsrom
- Seksualitet og kropp
- Galskap og makt

**Betydning:**
- Norges fremste naturalist
- Skrev aerlig om tabuemner
- Ga stemme til de stemmelase
- Anerkjent som en av periodens viktigste forfattere

**Andre kvinnelige stemmer:**
- Camilla Collett - forloperen
- Aasta Hansteen - kvinnesaksforkjemper
- Magdalene Thoresen - dramatiker`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.7 NARRATIV: Naturalismens kjennetegn
// ============================================================================

export const CHAPTER_NORSK_VG3_1_7_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-1-7-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '1.7',
  title: 'Naturalismens kjennetegn',
  subtitle: 'Narrativ versjon',
  description: 'Opplev naturalismen - den litteraere retningen som ville gjore romanen til vitenskap og mennesket til forskningsobjekt.',
  estimatedMinutes: 40,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
  ],
  linkedChapterId: 'norsk-vg3-1-7',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg3-1-7-n-intro',
      type: 'text',
      content: `## Romanen som laboratorium

Forestill deg en forfatter som arbeider som en vitenskapsmann. Han studerer sine karakterer slik en biolog studerer organismer. Han plasserer dem i kontrollerte omgivelser og observerer hvordan de reagerer. Han dokumenterer alt med kjoolig presisjon.

Dette var Emile Zolas visjon for litteraturen. I 1880 publiserte den franske forfatteren essayet «Den eksperimentelle roman», der han la frem et radikalt program: Romanen skulle bli vitenskap.

Naturalismen var fodt - en litteraer retning som tok realismen enda lenger. Der realistene ville skildre virkeligheten slik den var, ville naturalistene ogsa forklare den. De ville vise hvordan arv og miljo bestemmer menneskers liv, hvordan biologiske og sosiale krefter former skjebner.

Det var en dyster visjon. Mennesket var ikke fritt, mente naturalistene. Det var et produkt av genene det hadde arvet og omgivelsene det vokste opp i. Tragedien var ikke noe som kunne unngaas - den var forutbestemt.

Men bak morket la ogsa en kritikk: Hvis samfunnet former mennesker til elendighet, ma samfunnet forandres. Naturalismen var ikke bare litteratur - den var et politisk vapen.`,
    },

    // ========== SEKSJON 1: Zola og det naturalistiske programmet ==========
    {
      id: 'norsk-vg3-1-7-n-section1',
      type: 'text',
      content: `## Mesteren fra Paris

Emile Zola (1840-1902) var naturalismens fremste teoretiker og praktiker. Som ung mann arbeidet han som journalist og kritiker i Paris, midt i en tid preget av store vitenskapelige oppdagelser. Darwin hadde nettopp publisert sin evolusjonslare. Filosofer som Hippolyte Taine hevdet at all kultur kunne forklares ut fra rase, miljo og historisk oyeblikk.

Zola sugde til seg disse ideene og omsatte dem til litteratur. Hans viktigste verk er «Les Rougon-Macquart» - en massiv romansyklus i tjue bind som folger en slekt gjennom flere generasjoner under det franske keiserdommet. Gjennom denne slekten viste Zola hvordan arvelige egenskaper - bade fysiske og psykiske - gar i arv og former menneskers skjebner.

Zola drev grundig research. For a skrive om gruvearbeidere i «Germinal» (1885) reiste han selv ned i gruvene og observerte arbeidsforholdene. For a skrive om prostituerte i «Nana» (1880) studerte han Parisunderverdenens liv. Alt skulle vaere dokumentarisk, vitenskapelig, sant.

Men Zola var mer enn en kald observator. Under den kjoolige overflaten ulmet et brennende engasjement. Da den jodiske offiseren Alfred Dreyfus ble urettmessig domt for spionasje, skrev Zola det berammte aapne brevet «J'accuse» - en anklage mot det franske rettsvesenet som ristet hele nasjonen.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg3-1-7-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-7-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva var Zolas ideal for romanen?',
        options: [
          { id: 'a', text: 'At den skulle underholde og begeistre leseren', isCorrect: false },
          { id: 'b', text: 'At den skulle fungere som et vitenskapelig eksperiment', isCorrect: true },
          { id: 'c', text: 'At den skulle formidle religiose sannheter', isCorrect: false },
          { id: 'd', text: 'At den skulle vaere sa kort og konsis som mulig', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'I «Den eksperimentelle roman» argumenterte Zola for at romanen skulle vaere som et vitenskapelig eksperiment - forfatteren plasserer karakterer med bestemte arvelige egenskaper i bestemte miljoer og observerer utfallet.',
      },
    },

    // ========== SEKSJON 2: Filosofisk grunnlag ==========
    {
      id: 'norsk-vg3-1-7-n-section2',
      type: 'text',
      content: `## Vitenskapen som fundament

Naturalismen hvilte pa et filosofisk fundament bygget av samtidens vitenskapelige teorier. La oss se naermere pa de viktigste ideene.

**Determinismen** er laeren om at alt som skjer, har en arsak. Ingenting er tilfeldig. Ogsaa menneskers handlinger er arsaksbestemt - de folger av gener, oppvekst, omgivelser. Fri vilje er i beste fall en illusjon, i verste fall en logn vi forteller oss selv.

**Positivismen** hevdet at bare det som kan observeres og maales, har virkelig gyldighet. Spekulasjoner om sjelen, om Gud, om det overnaturlige - alt dette var meningslose. Vitenskapen var den eneste veien til sannhet.

**Darwinismen** hadde nettopp rystet verden. Mennesket var ikke skapt i Guds bilde - det var et dyr blant andre dyr, et produkt av evolusjon. Kampen for tilvaerrelsen preget ikke bare naturen, men ogsa det sosiale livet. De sterkeste overlevde.

**Materialismen** fulgte av dette. Virkeligheten var materiell. Bevisstheten var bare et biprodukt av hjernen. Det fantes ingen sjel, ingen adelig, ikke noe hoeyere enn stoffet.

Disse ideene dannet grunnlaget for naturalismens litteraere program. Forfatteren skulle vaere som en vitenskapsmann: observere, dokumentere, forklare. Ikke doomme, ikke moralisere, ikke tro. Bare se.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg3-1-7-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-7-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva er determinisme?',
        options: [
          { id: 'a', text: 'Troen pa at mennesket har fri vilje', isCorrect: false },
          { id: 'b', text: 'Laeren om at alt som skjer er arsaksbestemt', isCorrect: true },
          { id: 'c', text: 'En religioas filosofi', isCorrect: false },
          { id: 'd', text: 'Troen pa at tilfeldigheter styrer livet', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Determinismen hevder at alle hendelser, inkludert menneskelige handlinger, er bestemt av foregaende arsaker. I naturalismen betyr dette at menneskers skjebner er bestemt av arv og miljo.',
      },
    },

    // ========== SEKSJON 3: Litteraere kjennetegn ==========
    {
      id: 'norsk-vg3-1-7-n-section3',
      type: 'text',
      content: `## Naturalismens verktoy

Naturalismens filosofi fikk konkrete litteraere konsekvenser. Her er de viktigste kjennetegnene pa naturalistisk litteratur.

**Stoffet** var ofte morkt. Der realistene fortsatt kunne skildre borgerlige saloner og dannede samtaler, sokte naturalistene seg til samfunnets skyggeside. Fattigkvarterer, bordeller, gruver, fengsler. Alkoholisme, prostitusjon, sykdom, kriminalitet. Alt det polerte borgerskapet ville lukke oyyne for.

**Stilen** var objektiv og tilbakeholdt. Forfatteren moraliserte ikke. Han bare observerte og rapporterte, som en vitenskapsmann som dokumenterer et eksperiment. Denne tilsynelatende kjooligheten kunne gjore virkningen desto sterkere - leseren matte selv dra konklusjonene.

**Karakterene** var produkter av arv og miljo. De hadde begrenset handlingsrom. Deres skjebne var pa mange mater gitt fra starten. Vi ser dem kjempe mot krefter de ikke kan kontrollere - og tape.

**Handlingen** fulgte ofte en nedadgaende kurve. Karakterene begynner kanskje med noe hap, men synker gradvis dypere. Forsook pa a bryte ut mislykkes. Tragedien er uunngaelig.

**Miljoobeskrivelsene** var detaljerte og dokumentariske. Zola og hans etterfolgere drev grundig research. De ville at leseren skulle se, hoore, lukte fattigdommens og elendigheten.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg3-1-7-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-7-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva kjennetegner naturalistiske karakterer?',
        options: [
          { id: 'a', text: 'De har stor handlefrihet og skaper sin egen skjebne', isCorrect: false },
          { id: 'b', text: 'De er idealiserte helter og heltinner', isCorrect: false },
          { id: 'c', text: 'De er produkter av arv og miljo med begrenset handlingsrom', isCorrect: true },
          { id: 'd', text: 'De er symbolske figurer uten psykologisk dybde', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'I naturalistisk litteratur er karakterene determinerte - fanget av sin arv og sitt miljo. De har lite handlingsrom, og deres skjebne er pa mange mater gitt fra starten.',
      },
    },

    // ========== SEKSJON 4: Naturalismen i praksis ==========
    {
      id: 'norsk-vg3-1-7-n-section4',
      type: 'text',
      content: `## Germinal - et mesterverk

La oss se naermere pa Zolas roman «Germinal» (1885), kanskje naturalismens fremste verk.

Handlingen utspiller seg i en gruveby i Nord-Frankrike. Hovedpersonen Etienne Lantier kommer til byen pa leting etter arbeid. Han far jobb i gruven og opplever arbeiderens elendige kar pa neart hold: de lange dagene under jorden, de farlige forholdene, den kummerlige loannen, familiene som sulter.

Etienne blir bevisstgjort. Han leser sosialisme, agiterer blant arbeiderne, leder til slutt en streik. Streiken ender i tragedie - vold, dood, nederlag. Etienne overlever, men ingenting er egentlig forandret.

Her ser vi naturalismens program i praksis. Etienne er et produkt av sin slekt - han tilhoorer Rougon-Macquart-familien og baerer pa en arvelig tilboyelighet til vold. Miljoet - gruven, fattigdommen - former ham videre. Han prooever a kjempe mot systemet, men systemet er sterkere.

Likevel er «Germinal» ikke bare morkt. Tittelen refererer til varenens spiringsmaaned i den revolusjonaere kalenderen. Froene som saaes, vil kanskje spire en gang. Haapet lever under asken.

Zola viser oss elendigheten - men han viser oss ogsa at elendigheten har arsaker. Og det som har arsaker, kan forandres.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg3-1-7-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-7-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva handler Zolas «Germinal» om?',
        options: [
          { id: 'a', text: 'Et aristokratisk kjaeerlighetsforhold', isCorrect: false },
          { id: 'b', text: 'Gruvearbeidere og en mislykket streik', isCorrect: true },
          { id: 'c', text: 'En leges kamp mot epidemi', isCorrect: false },
          { id: 'd', text: 'En kunstners liv i Paris', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: '«Germinal» skildrer gruvearbeidernes elendige kar i Nord-Frankrike og en streik som ender i tragedie. Det er et kraftig angrep pa kapitalismen og et naturalistisk mesterverk.',
      },
    },

    // ========== SEKSJON 5: Kritikk og arv ==========
    {
      id: 'norsk-vg3-1-7-n-section5',
      type: 'text',
      content: `## Morket og lyset

Naturalismen ble heftig kritisert i samtiden. Konservative kritikere mente den dvaelte ved det stygge og ubehagelige. De anklaget forfatterne for pessimisme, for a redusere mennesket til et dyr, for a undergrave moral og religion.

Og kritikken traff pa noen punkter. Naturalismens determinisme var forenklet. Vi vet i dag at forholdet mellom gener og miljo er langt mer komplekst enn datidens teorier antok. Mennesker har mer handlingsrom enn naturalistene mente.

Men naturalistene hadde ogsa rett i mye. De avsloorte sosiale forhold som borgerskapet helst ville ignorere. De viste at fattigdom og elendighet ikke var individuelle svakheter, men resultater av undertrykkende strukturer. De krevde forandring - ikke gjennom moralisering, men gjennom a vise virkeligheten slik den var.

Naturalismen som bevegelse varte ikke lenge. Allerede pa 1890-tallet begynte nye retninger - symbolismen, nyromantikken - a ta over. Men naturalismens innflytelse lever videre. Den sosiale romanen, reportasjelitteraturen, den kompromisslase realismen i moderne litteratur - alt dette star i gjeld til Zola og hans etterfolgere.

Og sporsmaalet de stilte, er fortsatt aktuelt: I hvilken grad er vi frie? I hvilken grad er vi formet av krefter vi ikke kontrollerer? Det er et sporsmal som aldri blir ferdig besvart.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg3-1-7-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-7-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvorfor ble naturalismen kritisert?',
        options: [
          { id: 'a', text: 'Den var for optimistisk og idealistisk', isCorrect: false },
          { id: 'b', text: 'Den fokuserte for mye pa overklassen', isCorrect: false },
          { id: 'c', text: 'Den dvaelte ved det morke og reduserte mennesket til et dyr', isCorrect: true },
          { id: 'd', text: 'Den var for religioos og moralsk', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Kritikere mente naturalismen var for pessimistisk, at den dvaelte ved det stygge og ubehagelige, og at den reduserte mennesket til et dyr styrt av drifter og arv uten fri vilje.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg3-1-7-n-summary',
      type: 'text',
      content: `## Oppsummering

**Naturalismen** var en litteraer retning fra 1870-tallet som radikaliserte realismen.

**Grunnlegger:** Emile Zola (1840-1902) og essayet «Den eksperimentelle roman» (1880)

**Filosofisk grunnlag:**
- **Determinisme:** Alt er arsaksbestemt
- **Positivisme:** Bare det observerbare er gyldig
- **Darwinisme:** Mennesket som biologisk vesen
- **Materialisme:** Virkeligheten er stofflig

**Litteraere kjennetegn:**
- Morkt stoff (fattigdom, sykdom, kriminalitet)
- Objektiv, tilbakeholdt stil
- Determinerte karakterer
- Nedadgaende handling
- Detaljerte miljoobeskrivelser

**Sentrale forfattere:**
- Emile Zola (Frankrike)
- August Strindberg (Sverige)
- Herman Bang (Danmark)
- Amalie Skram (Norge)

**Kritikk:**
- For pessimistisk
- For opptatt av det stygge
- Forenklet menneskesyn

**Arv:**
- Bidro til sosial bevissthet
- Pavirket moderne sosialrealisme
- Stilte grunnleggende sporsmal om frihet og skjebne`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.8 NARRATIV: Determinisme og arv/miljo
// ============================================================================

export const CHAPTER_NORSK_VG3_1_8_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-1-8-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '1.8',
  title: 'Determinisme og arv/miljo',
  subtitle: 'Narrativ versjon',
  description: 'Utforsk det naturalistiske menneskesynet - er vi frie, eller er vi fanget av gener og oppvekst?',
  estimatedMinutes: 40,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
  ],
  linkedChapterId: 'norsk-vg3-1-8',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg3-1-8-n-intro',
      type: 'text',
      content: `## Fanget i jernkjeder

Forestill deg et menneske som prooever a lope, men som er lenket til veggen. Uansett hvor hardt det anstrenger seg, kommer det ikke lenger enn kjedene tillater. Det kan droomme om frihet, tro pa frihet, kanskje til og med foole seg fritt - men i virkeligheten er det bundet.

Slik forsto naturalistene menneskets situasjon. Vi tror vi velger selv, men i virkeligheten er vi fanget - av genene vi har arvet fra foreldre og besteforeldre, av miljoet vi vokste opp i, av krefter vi ikke kan se og knapt kan forstaa.

Dette er determinismen: laeren om at alt som skjer, har en arsak. Ogsaa dine tanker, dine foooelser, dine valg - alt er bestemt av noe som kom foor. Du er et produkt, ikke en skaper.

Det var et morkt syn pa mennesket. Men naturalistene mente det var det sanne synet - vitenskapens syn. Og for a forandre verden, matte man foorst forsta den slik den virkelig var.

I dette kapittelet skal vi utforske hva determinismen egentlig innebar, hvordan den preget litteraturen, og hvilke sporsmal den reiste som fortsatt er aktuelle i dag.`,
    },

    // ========== SEKSJON 1: Vitenskapens nye verden ==========
    {
      id: 'norsk-vg3-1-8-n-section1',
      type: 'text',
      content: `## Da mennesket ble et dyr

Naturalismens determinisme vokste ut av en vitenskapelig revolusjon. Pa noen faa tiar hadde nye oppdagelser snudd verdensbilde pa hodet.

Charles Darwin (1809-1882) publiserte «Artenes opprinnelse» i 1859. Budskapet var rystende: Mennesket var ikke skapt i Guds bilde. Det var et dyr, utviklet gjennom millioner av ar med evolusjon. Det som skilte oss fra apene, var bare gradsforskjeller. Vi var underlagt de samme naturlovene som alle andre skapninger.

Den franske filosofen Hippolyte Taine (1828-1893) utviklet dette videre. Han hevdet at alle kulturelle fenomener - kunst, litteratur, historie - kunne forklares ut fra tre faktorer: rase (arvelige egenskaper), miljo (fysiske og sosiale omgivelser) og oyeblikk (den historiske situasjonen). Mennesket var et produkt av disse kreftene, like sikkert som en kjemisk reaksjon folgjer av blandingen av stoffer.

Fysiologen Claude Bernard (1813-1878) demonstrerte hvordan vitenskapelig metode kunne anvendes pa biologiske fenomener. Kroppen var en maskin. Den fulgte lovmessigheter som kunne avdekkes gjennom eksperimenter.

Zola tok Bernard som forbilde. Hvis kroppen kunne studeres vitenskapelig, hvorfor ikke ogsa sjelen? Forfatteren skulle vaere som fysiologen - plassere mennesker i kontrollerte omgivelser og observere hvordan de reagerte.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg3-1-8-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-8-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva var Darwins hovedbudskap?',
        options: [
          { id: 'a', text: 'At mennesket er skapt i Guds bilde', isCorrect: false },
          { id: 'b', text: 'At mennesket er et dyr utviklet gjennom evolusjon', isCorrect: true },
          { id: 'c', text: 'At mennesket har ubegrenset fri vilje', isCorrect: false },
          { id: 'd', text: 'At bare de intelligente overlever', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Darwin viste at mennesket ikke var skapt av Gud, men utviklet gjennom evolusjon. Vi er et dyr blant andre dyr, underlagt de samme naturlovene. Dette rystet fundamentalt datidens verdensbilde.',
      },
    },

    // ========== SEKSJON 2: Arv - blodet som taler ==========
    {
      id: 'norsk-vg3-1-8-n-section2',
      type: 'text',
      content: `## Det som gaar i arv

For naturalismene var arv en skjebnetung kraft. Du kunne ikke unnslippe genene dine - de fulgte deg gjennom livet som en skygge.

Men hva mente de egentlig med arv? Datidens forstaelse var primitiv sammenlignet med vare dagers genetikk. De trodde at langt flere egenskaper gikk i arv enn vi vet i dag - ikke bare fysiske trekk, men ogsa personlighet, tilboyeligheter, til og med moral.

**Degenerasjonslaren** var sarlig innflytelsesrik. Teorien hevdet at familier og samfunn kunne «degenerere» over generasjoner. Negative egenskaper ble forsterket, ikke svekket. Alkoholisme kunne fore til galskap, som igjen kunne fore til kriminalitet og moralsk forfall. Nedgangen var uunngaelig.

I Zolas «Les Rougon-Macquart» ser vi dette i praksis. Slekten barer pa arvelig belastning som manifesterer seg ulikt i hver generasjon - hos noen som alkoholisme, hos andre som galskap, hos enda andre som voldelig temperament. Arven forfoolger dem alle.

Amalie Skrams «Hellemyrsfolket» viser det samme i norsk kontekst. Sjur Gabriels svakheter gaar i arv til soonnene, forsterket av fattigdom og elendighet. Det finnes ingen vei ut av sirkelen.

Vi vet i dag at dette var uvitenskapelig. Alkoholisme er ikke arvelig pa den maten de trodde. Personlighet formes av bade gener og miljo pa komplekse mater. Men i samtiden var det anerkjent vitenskap - og det preget litteraturen dypt.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg3-1-8-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-8-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva var degenerasjonslaren?',
        options: [
          { id: 'a', text: 'En teori om at familier stadig forbedres over generasjoner', isCorrect: false },
          { id: 'b', text: 'En teori om at negative egenskaper forsterkes gjennom arv', isCorrect: true },
          { id: 'c', text: 'En teori om at alle mennesker er like', isCorrect: false },
          { id: 'd', text: 'En teori om at miljo er viktigere enn arv', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Degenerasjonslaren hevdet at familier kunne «degenerere» over generasjoner - at negative egenskaper som alkoholisme og galskap ble forsterket gjennom arv. Teorien er i dag fullstendig avvist.',
      },
    },

    // ========== SEKSJON 3: Miljo - omgivelsenes makt ==========
    {
      id: 'norsk-vg3-1-8-n-section3',
      type: 'text',
      content: `## Verden som former oss

Ved siden av arven sto miljoet - de fysiske og sosiale omgivelsene som former mennesket fra vugge til grav.

Naturalismens forfattere var naersynte observatoorer av miljo. De drev research, besokte arbeidsplasser og fattigkvarterer, dokumenterte forholdene med journalistisk grundighet. For a skildre gruvearbeidere dro Zola selv ned i gruvene. For a skildre byens underverden vandret han i gatene om natten.

Miljoet omfattet alt: Den sosiale klassen du ble fodt inn i. De okonomiske forholdene som bestemte om du fikk mat pa bordet. Geografien - by eller land, nord eller sor. Familien - kaerlige foreldre eller fraverende. Arbeidsplassen - trygt kontor eller farlig fabrikk.

Og miljoet var pa mange mater enda mer bestemmende enn arven. For selv om du arvet daarlige gener, kunne kanskje et godt miljo kompensere. Men hvis miljoet var elendig, hadde du ingen sjanse. Fattigdommen dro deg ned, holdt deg nede, ga deg ingen muligheter til a reise deg.

I naturalistisk litteratur ser vi ofte mennesker som prooever a bryte ut av sitt miljo. De kjemper, strever, droommer om noe bedre. Men igjen og igjen mislykkes de. Miljoets gravitasjon er for sterk. De synker tilbake til der de startet - eller enda lenger ned.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg3-1-8-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-8-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hvorfor var grundig research viktig for naturalistene?',
        options: [
          { id: 'a', text: 'For a faa ideeer til fantastiske historier', isCorrect: false },
          { id: 'b', text: 'For a dokumentere miljoene nooyaktig', isCorrect: true },
          { id: 'c', text: 'For a fa tilgang til hemmelige arkiver', isCorrect: false },
          { id: 'd', text: 'For a imponere kritikerne', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Naturalistene ville at miljooskildringene skulle vaere dokumentarisk nooyaktige. De drev derfor grundig research - besokte arbeidsplasser, fattigkvarterer og andre miljoer de ville skildre.',
      },
    },

    // ========== SEKSJON 4: Konsekvenser for litteraturen ==========
    {
      id: 'norsk-vg3-1-8-n-section4',
      type: 'text',
      content: `## Skjebner i fritt fall

Det deterministiske menneskesynet fikk dramatiske konsekvenser for hvordan naturalistene skrev.

**Karakterene** hadde lite handlingsrom. Fra starten av romanen kan vi ofte ane hvordan det vil ende. Arv og miljo har allerede lagt sporene. Personene kan streve og kaempe, men banen er satt. De er som tog pa skinner.

**Handlingen** fulgte typisk en nedadgaaende kurve. Personene starter kanskje med noe hap, noe liv. Men gradvis trekkes de ned. Beslutning fooerer til beslutning, ulykke til ulykke. Hver gang de prooever a reise seg, faller de hardere tilbake. Til slutt ligger de i grooeften.

**Tonen** var kjooelig, observerende. Forfatteren holdt seg tilbake fra a doomme eller moralisere. Han rapporterte bare hva han sa - som en vitenskapsmann som dokumenterer et eksperiment. Denne kjooligheten kunne gjore virkningen sterkere. Leseren matte selv reagere, selv doomme.

**Utfallet** var nesten alltid tragisk. Ikke romantisk-tragisk, med edle helter som falt i kamp. Men hverdagens tragedie - langsom nedbrytning, tap av hap, dood uten mening. Det var det brutale livets realitet, strippet for forskjoonende fortellinger.

Og likevel - nettopp ved a vise denne virkeligheten, anklaget naturalistene samfunnet som tillot det. De sa: Se her. Se hva som skjer med mennesker under disse forholdene. Er dette akseptabelt?`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg3-1-8-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-8-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvordan ender typisk en naturalistisk roman?',
        options: [
          { id: 'a', text: 'Med lykkelig bryllup og forsoning', isCorrect: false },
          { id: 'b', text: 'Med helten som seirer over ondskapen', isCorrect: false },
          { id: 'c', text: 'Med tragisk undergang etter gradvis nedgang', isCorrect: true },
          { id: 'd', text: 'Med aapen slutt der leseren bestemmer', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Naturalistiske romaner fooolger typisk en nedadgaaende kurve der karakterene gradvis synker dypere og ender i tragedie. Forsook pa a bryte ut mislykkes, og utfallet er nesten alltid morkt.',
      },
    },

    // ========== SEKSJON 5: Arven og aktualiteten ==========
    {
      id: 'norsk-vg3-1-8-n-section5',
      type: 'text',
      content: `## Er vi frie?

Naturalismens determinisme var overdrevet. Vi vet i dag at mennesker har storre handlingsrom enn naturalistene mente. Gener er ikke skjebne. Miljo kan overvinnes. Mennesker forandrer seg, vokser, bryter ut av mornstre.

Men naturalistene traff ogsa pa noe viktig. Vi er ikke helt frie. Oppveksten preger oss. Sosial klasse pavirker mulighetene vare. Traumer setter spor. Den som er fodt inn i fattigdom, har det vanskeligere enn den som er fodt inn i rikdom. Dette er ikke determinisme - men det er heller ikke ubegrenset frihet.

Moderne vitenskap viser at forholdet mellom gener og miljo er komplekst. Epigenetikk - laeren om hvordan miljo pavirker genenes uttrykk - viser at arv og miljo ikke kan skilles skarpt. Nevroplastisitet viser at hjernen fortsetter a forandre seg gjennom livet. Vi er verken fullt ut determinerte eller fullt ut frie.

Naturalistene stilte sporsmaal vi fortsatt strever med: Hvor mye er valg, og hvor mye er skjebne? Hvor mye ansvar kan vi legge pa individet, og hvor mye pa samfunnet? Hvis mennesker er formet av omgivelsene, hvem har da skylden naaer ting gaar galt?

Disse sporsmalene lever videre - i filosofien, i jussen, i den offentlige debatten om kriminalitet og straff, ulikhet og muligheter. Naturalismen ga ikke svarene. Men den formulerte sporsmaalene med en klarhet vi fortsatt kan laere av.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg3-1-8-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-8-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva viser moderne vitenskap om arv og miljo?',
        options: [
          { id: 'a', text: 'At naturalistenes syn var helt riktig', isCorrect: false },
          { id: 'b', text: 'At mennesket er fullstendig fritt', isCorrect: false },
          { id: 'c', text: 'At forholdet mellom gener og miljo er komplekst', isCorrect: true },
          { id: 'd', text: 'At bare miljo betyr noe, ikke gener', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Moderne vitenskap viser at forholdet mellom arv og miljo er mer komplekst enn naturalistene antok. Epigenetikk og nevroplastisitet viser at vi er verken fullt determinerte eller fullt frie.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg3-1-8-n-summary',
      type: 'text',
      content: `## Oppsummering

**Determinismen** i naturalismen hevdet at menneskers liv er bestemt av arv og miljo.

**Vitenskapelig bakgrunn:**
- Darwin: Mennesket som evolusjonert dyr
- Taine: Rase, miljo og oyeblikk forklarer alt
- Bernard: Vitenskapelig metode pa biologi

**Arv i naturalismen:**
- Genetiske egenskaper fra foreldre
- Degenerasjonslaren: Negative egenskaper forsterkes
- «Daarlig blod» som gaar i arv

**Miljo i naturalismen:**
- Sosial klasse og ookonomi
- Geografi og fysiske omgivelser
- Familie og oppvekst

**Litteraere konsekvenser:**
- Karakterer med lite handlingsrom
- Nedadgaaende handlingskurve
- Kjoolig, observerende tone
- Tragiske utfall

**Moderne perspektiv:**
- Naturalismens determinisme var overdrevet
- Men arv og miljo pavirker oss
- Sporsmaalene om frihet og ansvar er fortsatt aktuelle

**Aktualitet:**
- Debatter om straff og rehabilitering
- Sporsmal om sosial ulikhet
- Forholdet mellom individ og samfunn`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const NORSK_VG3_NARRATIV_DEL2_CHAPTERS = [
  CHAPTER_NORSK_VG3_1_4_NARRATIV,
  CHAPTER_NORSK_VG3_1_5_NARRATIV,
  CHAPTER_NORSK_VG3_1_6_NARRATIV,
  CHAPTER_NORSK_VG3_1_7_NARRATIV,
  CHAPTER_NORSK_VG3_1_8_NARRATIV,
];
