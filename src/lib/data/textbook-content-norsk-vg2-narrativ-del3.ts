/**
 * Norsk VG2 - Narrative versjoner Del 3 (Kapittel 3.1-3.12)
 * Romantikken og nasjonalromantikken
 *
 * Engasjerende, fortellende versjoner av kapitlene optimalisert for lesing/lytting.
 * Hver narrativ versjon linker tilbake til originalkapittelet via linkedChapterId.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 3.1 NARRATIV: Romantikkens ideer og impulser
// ============================================================================

export const CHAPTER_NORSK_VG2_3_1_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-3-1-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '3.1',
  title: 'Romantikkens ideer og impulser',
  subtitle: 'Narrativ versjon',
  description: 'Oppdag hvordan en kulturell revolusjon snudde opp ned på alt Europa trodde det visste om kunst, natur og mennesket.',
  estimatedMinutes: 40,
  competenceGoals: [
    'utforske tekster fra romantikken og nasjonalromantikken',
    'lese og tolke tekster fra 1500-1850 i kulturhistorisk kontekst',
  ],
  linkedChapterId: 'norsk-vg2-3-1',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg2-3-1-n-intro',
      type: 'text',
      content: `## Da hjertet tok makten fra hjernen

Tenk deg at du lever i Europa rundt 1800. I over hundre ar har fornuften vart det fineste mennesket har. Filosofene har forklart universet som en stor maskin, og vitenskapen har avmystifisert naturen. Alt kan males, veies og forklares. Folelsene? De er bare forstyrrelser som hindrer klar tenkning.

Men sa skjer noe. Unge diktere begynner a sporre: Er fornuften virkelig nok? Kan vi virkelig forsta kjarligheten gjennom matematikk? Kan vi forklare skjonnheten i en solnedgang med fysiske lover? Hva med lengselen vi foler nar vi ser ut over havet, eller gyset vi kjenner i en dyp skog?

Velkommen til romantikken - en av de mest dramatiske kulturelle omveltningene i europeisk historie. I dette kapittelet skal vi utforske hvordan en hel generasjon satte folelsene i hoysetet, gjenoppdaget naturen som noe hellig, og skapte kunstverk som fortsatt berorer oss i dag. Vi skal forstå hvorfor dette skjedde akkurat da, og hvorfor ideene fortsatt lever med oss.`,
    },

    // ========== SEKSJON 1: Reaksjonen mot fornuften ==========
    {
      id: 'norsk-vg2-3-1-n-section1',
      type: 'text',
      content: `## Reaksjonen mot fornuften

La oss forst forsta hva romantikerne reagerte mot. Opplysningstiden, som hadde dominert europeisk kultur gjennom 1700-tallet, trodde på fornuftens allmakt. Filosof som Voltaire og Kant mente at mennesket kunne lose alle problemer gjennom rasjonell tenkning. Kirken og tradisjonen skulle erstattes av vitenskap og fornuft.

Dette ga store fremskritt. Menneskerettighetene ble formulert. Vitenskapen blomstret. Men for mange foltes det som om noe viktig gikk tapt. Opplysningsfilosofene så naturen som en mekanisme - en stor klokke skapt av en hormaker-gud som sa hadde trukket seg tilbake. De så mennesket som primart fornuftig - folelsene var noe som matte temmes og kontrolleres.

Romantikerne ville ha noe annet. De ville ha mening, ikke bare forklaring. De ville ha undring, ikke bare kunnskap. De ville ha en verden der naturen var levende og mystisk, ikke bare en samling atomer. Og de ville ha et menneskesyn der folelsene var like viktige som fornuften - kanskje viktigere.

Den franske revolusjonen i 1789 var bade inspirasjon og advarsel. Pa den ene siden viste den at forandring var mulig. Pa den andre siden endte den i blodige massakrer, og mange lurte pa om fornuftens prosjekt hadde gatt for langt.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg2-3-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva var romantikkens hovedkritikk av opplysningstiden?',
        options: [
          { id: 'a', text: 'At opplysningstiden hadde for stor respekt for religionen', isCorrect: false },
          { id: 'b', text: 'At fornuften alene ikke kunne gi mening til livet og forsta hele mennesket', isCorrect: true },
          { id: 'c', text: 'At vitenskapen utviklet seg for sakte', isCorrect: false },
          { id: 'd', text: 'At opplysningstiden var for opptatt av natur og folelser', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Romantikerne mente at opplysningstidens vekt pa fornuft og vitenskap oversa viktige sider ved mennesket - folelser, fantasi, lengsel og opplevelsen av mening. De ville ha en helhetlig forstaelse som omfattet bade hode og hjerte.',
      },
    },

    // ========== SEKSJON 2: Romantikkens kjerneideer ==========
    {
      id: 'norsk-vg2-3-1-n-section2',
      type: 'text',
      content: `## Romantikkens kjerneideer

Sa hva satte romantikerne i stedet? Her er de viktigste ideene som preget bevegelsen:

Folelse over fornuft. For romantikerne var folelsene ikke noe som skulle kontrolleres, men noe som skulle lyttes til. Dikteren foler for han tenker, og denne folelsen gir tilgang til sannheter fornuften ikke kan na. Kjarligheten, lengselen, sorgen - alt dette er kilder til innsikt, ikke bare forstyrrelser.

Naturen som andelig kraft. For romantikerne var naturen ikke bare materie a utforske vitenskapelig. Den var levende, besjelet, full av mening. I fjellet, skogen og havet kunne mennesket mote noe hellig. Mange romantikere var panteister - de trodde at Gud var til stede i alt i naturen, ikke bare i kirken.

Det nasjonale. Romantikerne utviklet ideen om at hvert folk har sin egen "and" - pa tysk Volksgeist. Denne folkesanden kommer til uttrykk i spraket, eventyrene, folkevisene og tradisjonene. A samle og dyrke dette stoffet ble sett som en hellig oppgave.

Geniet. Dikteren er ikke bare en handverker som folger klassiske regler. Han er et geni som skaper noe helt nytt, inspirert av indre krefter og naturopplevelser. Geniet star over konvensjoner og skaper sine egne lover.

Til slutt - den romantiske lengselen, pa tysk kalt Sehnsucht. Dette er en dyp lengsel etter noe uoppnaelig - det fjerne, det tapte, det ideelle. Romantikeren lengter alltid mot noe som ligger utenfor rekkevidde.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg2-3-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva betyr det tyske begrepet "Sehnsucht"?',
        options: [
          { id: 'a', text: 'Geniet som skaper noe nytt', isCorrect: false },
          { id: 'b', text: 'Et folks unike kulturelle identitet', isCorrect: false },
          { id: 'c', text: 'En dyp lengsel etter noe uoppnaelig', isCorrect: true },
          { id: 'd', text: 'Naturens besjeling og andelige kraft', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Sehnsucht er et sentralt romantisk begrep som beskriver den dype lengselen etter noe som ligger utenfor rekkevidde - enten det er en tapt tid, et fjernt sted, eller et ideal man aldri kan na. Denne lengselen preger mye romantisk diktning.',
      },
    },

    // ========== SEKSJON 3: Det sublime og det mystiske ==========
    {
      id: 'norsk-vg2-3-1-n-section3',
      type: 'text',
      content: `## Det sublime og det mystiske

Et av romantikkens viktigste begreper er det sublime. Forestill deg at du star ved kanten av et veldig stup og ser ut over et uendelig fjelllandskap. Eller at du befinner deg ute pa havet under en rasende storm. Du foler deg liten, naesten forsvinnende - men samtidig opplever du noe overveldende stort. En blanding av frykt og henrykkelse.

Dette er det sublime. Filosofen Edmund Burke og senere Immanuel Kant utviklet begrepet, men romantikerne gjorde det til et sentralt tema i kunsten. Det sublime er naturopplevelser som overgår var fatteevne - fjellmassiver, voldsomme fosser, stormfulle hav. I motet med det sublime blir vi minnet om var litenhet, men ogsa om at vi er del av noe uendelig stort.

Romantikerne var ogsa fascinert av "nattsiden" - det mørke, mystiske og ubevisste. Mens opplysningstiden ville ha alt i lys, utforsket romantikerne drommer, eventyr, overtro og det irrasjonelle. Ruiner og middelalderen ble populare motiver - de representerte en mystisk fortid som sto i kontrast til modernitetens klarhet.

Eventyr og folketro ble samlet inn og verdsatt. Ikke bare som underholdning, men som uttrykk for folkets dypeste visdom. I eventyrene levde det overnaturlige - troll, hulder, nisser - og for romantikerne var dette ikke bare overtro, men glimp av en virkelighet fornuften ikke kunne fange.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg2-3-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hvilket av folgende er det beste eksempelet pa en sublim naturopplevelse?',
        options: [
          { id: 'a', text: 'En rolig spasertur i en vakker hage', isCorrect: false },
          { id: 'b', text: 'A se en nydelig solnedgang over en innsjø', isCorrect: false },
          { id: 'c', text: 'A sta ved foten av en veldig foss som bruser og dundrere', isCorrect: true },
          { id: 'd', text: 'A nyte et maltid med venner utendors', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Det sublime handler om naturopplevelser som overgår var fatteevne og vekker bade frykt og henrykkelse. En mektig foss som far deg til a fole deg liten, men samtidig fylles av undring, er et klassisk eksempel pa det sublime.',
      },
    },

    // ========== SEKSJON 4: Romantiske motiver ==========
    {
      id: 'norsk-vg2-3-1-n-section4',
      type: 'text',
      content: `## Romantiske motiver

Visse motiver gar igjen i romantisk kunst og litteratur. A kjenne dem hjelper oss a forsta epoken:

Den ville naturen. Fjell, skoger, stormer, hav - alt det utemmet og ukontrollert. I motsetning til opplysningstidens ordnede hager, sokte romantikerne det rå og opprinnelige.

Ruiner og middelalder. Forfalne slott og klostre representerte en mystisk fortid, en tid for modernitetens avfortrylling av verden. Middelalderen ble idealisert som en tid da mennesket levde i pakt med tro og tradisjon.

Lengsel og melankoli. Den vanemodi folelelsen av a savne noe - kanskje barndommen, kanskje et tapt paradis, kanskje noe man aldri har hatt. Denne lengselen er sot, naesten behagelig i sin smerte.

Kjaerlighet og dod. Romantikken elsket de store, intense folelsene. Kjaerlighet sa sterk at den kan dode. Dod sa vakker at den kan elske. Romeo og Julie ble et romantisk ideal.

Eventyr og folketro. Det overnaturlige, det magiske, det som ikke kan forklares. Romantikerne samlet eventyr og sagn som uttrykk for folkets sjel.

Det ensomme geniet. Dikteren som vandrer alene i naturen, uforstaatt av samtiden, men i kontakt med dypere sannheter. Ofte i konflikt med samfunnet, alltid i pakt med sin indre stemme.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg2-3-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvorfor var romantikerne fascinert av ruiner og middelalderen?',
        options: [
          { id: 'a', text: 'Fordi de ville gjenreise de gamle bygningene', isCorrect: false },
          { id: 'b', text: 'Fordi ruinene var billige a male', isCorrect: false },
          { id: 'c', text: 'Fordi de representerte en mystisk fortid for modernitetens avfortrylling', isCorrect: true },
          { id: 'd', text: 'Fordi middelalderen var en tid med stor vitenskapelig fremgang', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Romantikerne idealiserte middelalderen som en mystisk tid da mennesket levde i pakt med tro, tradisjon og natur. Ruinene symboliserte denne tapte verden - vakker i sin forfallne tilstand, full av hemmeligheter og lengsel.',
      },
    },

    // ========== SEKSJON 5: Romantikken i Norge ==========
    {
      id: 'norsk-vg2-3-1-n-section5',
      type: 'text',
      content: `## Romantikken i Norge

I Norge kom romantikken pa et sarlig gunstig tidspunkt. I 1814 fikk landet sin egen grunnlov og losrev seg fra Danmark etter 400 ars union. Plotselig var Norge en egen nasjon - men hva var egentlig norsk? Hvem var vi?

Romantikkens ideer om folkesand og nasjonal egenart ga et perfekt rammeverk for a svare pa disse sporsmålene. Hvis hvert folk har sin egen and uttrykt i sprak og kultur, da matte nordmenn finne og dyrke det spesifikt norske. Dermed ble nasjonalromantikken fodt - en sarpget norsk variant av europeisk romantikk.

Henrik Wergeland (1808-1845) ble den store romantikeren som ville bygge norsk kultur fra bunnen av. Han skrev eksplosive, visjonare dikt fulle av naturbilder og frihetstrang. Han kjempet for folkeopplysning og mot urettferdighet. For Wergeland var dikteren en fakkel som lyste opp morket.

Johan Sebastian Welhaven (1807-1873) representerte en annen type romantikk - mer dempet, mer formelt perfekt, mer orientert mot europeisk tradisjon. Striden mellom Wergeland og Welhaven ble Norges viktigste kulturdebatt i dette arhundret.

Romantikken i Norge varte omtrent fra 1814 til 1850, og gikk deretter over i nasjonalromantikken som fortsatte å dyrke det norske, men etter hvert med mer realistiske toner.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg2-3-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvorfor passet romantikkens ideer sarlig godt for Norge pa 1800-tallet?',
        options: [
          { id: 'a', text: 'Fordi Norge hadde Europas beste universiteter', isCorrect: false },
          { id: 'b', text: 'Fordi Norge nylig hadde blitt selvstendig og trengte a definere sin nasjonale identitet', isCorrect: true },
          { id: 'c', text: 'Fordi Norge hadde den sterkeste okonomien i Norden', isCorrect: false },
          { id: 'd', text: 'Fordi nordmenn aldri hadde interessert seg for folelser for', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Etter 1814 trengte Norge a bygge en nasjonal identitet. Romantikkens ideer om folkesand og nasjonal egenart ga et perfekt rammeverk for dette arbeidet. A samle eventyr, folkeviser og dyrke det norske ble en del av nasjonsbyggingsprosjektet.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg2-3-1-n-summary',
      type: 'text',
      content: `## Oppsummering: Romantikkens revolusjon

Vi har nå gjennomgatt en av historiens mest betydningsfulle kulturelle omveltninger. Her er det viktigste a huske:

**Romantikken som reaksjon:**
Romantikken var en reaksjon mot opplysningstidens rasjonalisme. Der opplysningstiden vektla fornuft og vitenskap, fremhevet romantikerne folelser, fantasi og det irrasjonelle.

**Kjerneideene:**
Folelse over fornuft - dikteren foler for han tenker. Naturen som besjelet og hellig - ikke bare materie. Det nasjonale - hver folkeand har sitt unike uttrykk. Geniet som original skaper. Sehnsucht - lengselen etter det uoppnaelige.

**Det sublime:**
Naturopplevelser som overgår var fatteevne - fjell, fosser, stormer - og vekker bade frykt og henrykkelse.

**Romantiske motiver:**
Vill natur, ruiner og middelalder, lengsel og melankoli, kjaerlighet og dod, eventyr og folketro, det ensomme geniet.

**Romantikken i Norge:**
Kom ca. 1814-1850, nart knyttet til nasjonsbyggingen. Wergeland og Welhaven var de to store motpolene.

**Nokkelord:**
Romantikk, Sehnsucht, det sublime, folkesand (Volksgeist), besjelet natur, panteisme, geni, nasjonalromantikk.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.2 NARRATIV: Henrik Wergeland
// ============================================================================

export const CHAPTER_NORSK_VG2_3_2_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-3-2-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '3.2',
  title: 'Henrik Wergeland - dikter og agitator',
  subtitle: 'Narrativ versjon',
  description: 'Mot den unge mannen som ble Norges nasjonaldikter - en vulkan av et menneske som brant for frihet, rettferdighet og livets skjonnhet.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske tekster fra romantikken og nasjonalromantikken',
    'lese og tolke tekster fra 1500-1850 i kulturhistorisk kontekst',
    'analysere og tolke tekster med bruk av fagbegreper',
    'reflektere over hvordan tekster framstiller moter mellom ulike kulturer og perspektiver',
  ],
  linkedChapterId: 'norsk-vg2-3-2',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg2-3-2-n-intro',
      type: 'text',
      content: `## En flamme som fortarte seg selv

Forestill deg en ung mann med ville lokker og brennende oyne. Han stormer gjennom Christianias gater, dikter i det ene oyeblikket, holder flammende taler i det neste. Han kjenner ingen grenser - verken for sin begeistring eller sin indignasjon. Han kan skrive et dikt om vårens skjonnhet om morgenen og holde et rasende forsvar for jodenes rettigheter om kvelden.

Henrik Wergeland levde bare 37 ar, men i dette korte livet skapte han et forfatterskap sa enormt at det fyller mange bokhyller. Han kjempet for saker som var upopulare i hans samtid. Han elsket med en intensitet som sjokkerte de veloppdragene. Og han dode ung, men uovervunnet, med et dikt til en blomst pa leppene.

I dette kapittelet skal vi mote Norges mest lidenskapelige dikter. Vi skal forsta hvorfor han fortsatt regnes som nasjonaldikteren var, og hvorfor diktene hans - skrevet for nasten 200 ar siden - fortsatt kan bevierne oss.`,
    },

    // ========== SEKSJON 1: Et liv i brann ==========
    {
      id: 'norsk-vg2-3-2-n-section1',
      type: 'text',
      content: `## Et liv i brann

Henrik Wergeland ble fodt i Kristiansand i 1808, sonn av presten Nicolai Wergeland. Faren var en av Eidsvollmennene som hadde utformet Grunnloven i 1814 - et faktum som preget sunnens politiske bevissthet fra barndommen av. Familien flyttet til Eidsvoll, der Henrik vokste opp i skyggen av nasjonens fodsel.

Allerede som ung viste Henrik et uvanlig temperament. Han var eksplosiv, generøs og uberegnelig. Når han elsket noe, elsket han det med hele seg. Når han hatet noe, kjempet han mot det til siste andedrag. Denne intensiteten gjorde ham til en omstridt skikkelse i samtiden - noen tilba ham, andre foraktet ham.

Han studerte teologi, men det var aldri meningen at han skulle bli prest. Litteraturen og samfunnsengasjementet trakk sterkere. I 1830, bare 22 ar gammel, publiserte han det ambisiose verket "Skabelsen, Mennesket og Messias" - et visjonart dikt som skulle skildre hele menneskehetens historie. Kritikerne var delte, men ingen kunne nekte for at her var et talent utenom det vanlige.

Wergelands liv ble preget av kamper - mot fattigdom, mot fordommer, mot kulturelle fiender. Han giftet seg med Amalie Sofie Bekkevold, og ekteskapet ble lykkelig til tross for stadige pengeproblemer. Han grunnla bladet "For Arbeidsklassen" der han skrev om praktiske emner for vanlige folk. Han mente at kunnskap var veien til frihet.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg2-3-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva het Henrik Wergelands far, og hva var hans rolle i norsk historie?',
        options: [
          { id: 'a', text: 'Johan Wergeland, en kjent maler', isCorrect: false },
          { id: 'b', text: 'Nicolai Wergeland, en av Eidsvollmennene som utformet Grunnloven', isCorrect: true },
          { id: 'c', text: 'Christian Wergeland, en kjent komponist', isCorrect: false },
          { id: 'd', text: 'Peter Wergeland, en stortingspresident', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Nicolai Wergeland var prest og en av mennene som utformet Grunnloven på Eidsvoll i 1814. Farens politiske engasjement og 1814-idealene preget Henrik fra barndommen av og ga ham en sterk bevissthet om demokrati og frihet.',
      },
    },

    // ========== SEKSJON 2: Kulturstriden med Welhaven ==========
    {
      id: 'norsk-vg2-3-2-n-section2',
      type: 'text',
      content: `## Kulturstriden med Welhaven

Den storste konflikten i Wergelands liv var striden med Johan Sebastian Welhaven. De to dikterne ble symboler for to helt ulike syn pa hva norsk kultur skulle vare.

Wergeland - og hans tilhengere, kalt "patriotene" - mente at Norge matte bryte fullstendig med dansk kulturarv. Det nye landet trengte en kultur bygget nedenfra, fra bondefolket, fra dialektene, fra det genuint norske. For Wergeland var entusiasme viktigere enn formell dyktighet. Han ville ha liv og kraft i diktningen, selv om det gikk på bekostning av polert form.

Welhaven - og "intelligenspartiet" - mente at Norge ikke kunne stenge seg inne. Den unge nasjonen trengte europeisk dannelse og kulturtradisjon. Kvalitet var viktigere enn mengde. Dikteren skulle vare kunstner, ikke agitator.

Striden brot for alvor ut i 1830 da Welhaven kritiserte Wergelands diktning for formloshet og overdrivelse. Wergeland svarte med personangrep, og konflikten eskalerte. I 1834 skrev Welhaven diktet "Norges Damring" der han spottet det han kalte tom patriotisme. Diktet utloste raseri, og det kom nesten til handgripeligheter mellom de to leirene.

I ettertid ser vi at begge hadde viktige poenger. Norge trengte bade Wergelands folkelighet og energi, og Welhavens kvalitetskrav. Men i samtiden var striden bitter og personlig.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg2-3-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva var kjernen i kulturstriden mellom Wergeland og Welhaven?',
        options: [
          { id: 'a', text: 'Hvem som var den beste dikteren teknisk sett', isCorrect: false },
          { id: 'b', text: 'Hvorvidt norsk kultur skulle bryte med Danmark eller bevare europeisk dannelse', isCorrect: true },
          { id: 'c', text: 'Hvem som skulle fa publisere i de store avisene', isCorrect: false },
          { id: 'd', text: 'Religiose sporsmal om Bibelen', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Striden handlet om Norges kulturelle retning. Wergeland ville bygge noe genuint norsk fra bondekultur og dialekter. Welhaven mente Norge trengte europeisk tradisjon og kvalitetskrav. Begge hadde viktige poenger, men i samtiden var konflikten bitter.',
      },
    },

    // ========== SEKSJON 3: Wergelands stil og virkemidler ==========
    {
      id: 'norsk-vg2-3-2-n-section3',
      type: 'text',
      content: `## Wergelands stil og virkemidler

Hvordan skriver Wergeland? Hva gjor diktene hans sa sarpreret?

Det forste du merker er intensiteten. Wergeland skriver med en energi som kan virke overveldende. Der andre diktere antyder, roper Wergeland ut. Der andre demper, forsterker han. Utropstegnene florerer, gjentakelsene hamrer, bildene eksploderer.

Ta naturen. For Wergeland er ikke naturen bare vakker - den er besjelet og levende. Solen "smiler", bekken "synger", blomstene "danser". Dette kalles besjeling eller personifikasjon, og Wergeland bruker det i nesten hvert dikt. Naturen deltar aktivt i dikterens folelsesliv.

Symbolene er ogsa viktige. Lys betyr sannhet og opplysning - motsetningen er morke, uvitenhet og undertrykkelse. Wergeland ser seg selv som en "fakkel" som lyser i morket. Flammen er et annet sentralt symbol - dikteren brenner, fortarer seg selv, gir varme men kan ogsa slukne. Blomster symboliserer livets skjonnhet og skjorhet. Fuglen symboliserer sjelen, friheten, lengselen etter a heve seg over det jordiske.

Det som gjor Wergeland unik er kombinasjonen av personlig intensitet og politisk engasjement. Han skiller ikke mellom poesi og kamp. Diktet er et vapen for rettferdighet, ikke bare et kunstverk a beundre. Denne holdningen preger alt han skriver.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg2-3-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva er besjeling (personifikasjon) i Wergelands diktning?',
        options: [
          { id: 'a', text: 'At dikteren beskriver seg selv som et dyr', isCorrect: false },
          { id: 'b', text: 'At naturen far menneskelige egenskaper - solen smiler, bekken synger', isCorrect: true },
          { id: 'c', text: 'At alle karakterene i diktet er basert pa virkelige personer', isCorrect: false },
          { id: 'd', text: 'At diktet handler om en persons liv', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Besjeling betyr a gi naturen menneskelige egenskaper - solen smiler, bekken synger, treet sukker. Dette er et sentralt virkemiddel hos Wergeland fordi det gjor naturen levende og meningsfull, ikke bare som bakgrunn men som aktiv deltaker.',
      },
    },

    // ========== SEKSJON 4: Kampen for jodenes rettigheter ==========
    {
      id: 'norsk-vg2-3-2-n-section4',
      type: 'text',
      content: `## Kampen for jodenes rettigheter

En av Wergelands viktigste kamper var for jodenes rett til a komme inn i Norge. Grunnloven av 1814 - den samme som faren hadde vart med a skrive - inneholdt en paragraf som forbod joder adgang til landet. For Wergeland var dette en skam.

Han argumenterte i Stortinget, han skrev i avisene, og han brukte diktningen. I 1842 kom diktet "Joden", der han lar en jode tale sin egen sak: "Hvad Ondt har jeg da gjort?" spor joden. "Jeg var jo ei tilstede!" Han kan ikke straffes for noe hans forfedre gjorde for to tusen ar siden.

Wergeland bruker diktet til a vise at jodene tror pa samme Gud, ber til samme Fader, haper pa samme Himmel. Ved a la joden selv tale, skaper han empati. Leseren tvinges til a se saken fra den forfulgtes synsvinkel.

Kampen var tung. Mange motarbeidet ham. Men Wergeland ga aldri opp. Han fortsatte a kjempe selv nar han ble syk og visste at doden narmet seg. Jodeparagrafen ble opphevet forst i 1851 - seks ar etter hans dod. Men det var Wergelands utholdende arbeid som hadde endret opinionen.

Denne kampen viser noe viktig om Wergeland: Han var ikke bare romantiker og nasjonaldikter. Han var ogsa humanist og menneskerettighetsforkjemper. For ham handlet diktningen til syvende og sist om menneskelig verdighet.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg2-3-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Nar ble jodeparagrafen i Grunnloven opphevet?',
        options: [
          { id: 'a', text: 'I 1842, etter at Wergeland publiserte diktet "Joden"', isCorrect: false },
          { id: 'b', text: 'I 1845, aret Wergeland dode', isCorrect: false },
          { id: 'c', text: 'I 1851, seks ar etter Wergelands dod', isCorrect: true },
          { id: 'd', text: 'I 1814, da Grunnloven ble skrevet', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Jodeparagrafen ble opphevet forst i 1851, seks ar etter Wergelands dod. Han ga aldri opp kampen selv om han ikke fikk oppleve seieren. Hans utholdende arbeid bidro til a endre opinionen.',
      },
    },

    // ========== SEKSJON 5: De siste diktene ==========
    {
      id: 'norsk-vg2-3-2-n-section5',
      type: 'text',
      content: `## De siste diktene

I 1845 la Wergeland pa dodsleiet, tart av tuberkulose. Bare 37 ar gammel visste han at slutten narmet seg. Men selv nå fortsatte han a skrive.

"Til min Gyldenlak" ble skrevet til en liten gul blomst i vinduskarmen. Diktet er blant de vakreste i norsk litteratur. Blomsten spirer opp mens dikteren synker ned. Den skinner som solen mens han gar mot morket. Den dufter sodt mens han har "en Pest".

Men diktet er ikke bittert. Wergeland klager ikke. Han feirer livet gjennom blomsten, og ber den sta igjen som et minne om ham som "elsked Alt, hvad Livet narer". Det er en overraskende aksept av doden - en ro som kontrasterer sterkt med den eksplosive energien i hans tidligere dikt.

"Den engelske Lods" fra samme ar er et lengre dikt som ogsa ble skrevet i doden skygge. Her reflekterer Wergeland over livet, doden og hapet.

12. juli 1845 dode Henrik Wergeland. Han ble begravd pa Var Frelsers gravlund i Oslo, der graven fortsatt kan besoikes. Hver 17. mai legges blomster pa graven som en paminnerelse om hans betydning for nasjonen.

Wergeland brant ut som flammen han ofte sammenlignet seg med. Men lyset han tente lever videre.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg2-3-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva symboliserer gyldenlakken i Wergelands siste dikt "Til min Gyldenlak"?',
        options: [
          { id: 'a', text: 'Wergelands politiske kamper', isCorrect: false },
          { id: 'b', text: 'Doden og forgjengeligheten', isCorrect: false },
          { id: 'c', text: 'Livet som fortsetter selv nar dikteren dor', isCorrect: true },
          { id: 'd', text: 'Den norske naturen', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Gyldenlakken symboliserer livet som fortsetter selv nar dikteren dor. Blomsten spirer opp mens Wergeland synker ned - den blir et "Livets Tegn i Dodens Kammer". Diktet viser aksept av doden og kjaerlighet til livet.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg2-3-2-n-summary',
      type: 'text',
      content: `## Oppsummering: Wergeland - mer enn en dikter

Henrik Wergeland var mye pa en gang: dikter, agitator, folkeopplyser, humanist. Her er det viktigste a huske:

**Biografiske fakta:**
Fodt 1808 i Kristiansand, sonn av Eidsvollmannen Nicolai Wergeland. Dode av tuberkulose i 1845, bare 37 ar gammel.

**Forfatterskap:**
Enormt og variert - fra det visjonare diktet "Skabelsen, Mennesket og Messias" (1830) til de stille dodsleiediektene "Til min Gyldenlak" og "Den engelske Lods" (1845). Folkeopplysningsbladet "For Arbeidsklassen".

**Kulturstriden:**
Ledet "patriotene" i striden med Welhaven og "intelligenspartiet". Wergeland ville bygge norsk kultur fra bunnen, fra folket. Welhaven ville bevare europeisk tradisjon.

**Stil og virkemidler:**
Intensitet, eksplosiv energi, besjeling av naturen, symbolbruk (lys, flamme, blomst, fugl). Naturen som livskraft. Diktet som vapen for rettferdighet.

**Menneskerettighetsforkjemper:**
Kjempet for jodenes rettigheter til tross for motstand. Paragrafen ble opphevet forst etter hans dod.

**Nokkelord:**
Besjeling, romantisk geni, nasjonaldikter, folkeopplysning, jodeparagrafen, kulturstriden.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.3 NARRATIV: Johan Sebastian Welhaven
// ============================================================================

export const CHAPTER_NORSK_VG2_3_3_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-3-3-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '3.3',
  title: 'Johan Sebastian Welhaven - dikteren og kritikeren',
  subtitle: 'Narrativ versjon',
  description: 'Mot den stille motvekten til Wergelands storm - en mester i form og stemning som viste at kvalitet ogsa er en verdi.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske tekster fra romantikken og nasjonalromantikken',
    'lese og tolke tekster fra 1500-1850 i kulturhistorisk kontekst',
    'analysere og tolke tekster med bruk av fagbegreper',
  ],
  linkedChapterId: 'norsk-vg2-3-3',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg2-3-3-n-intro',
      type: 'text',
      content: `## Den stille innsjoen

Hvis Henrik Wergeland var en vulkan - eksploderende, uforutsigbar, full av ild - sa var Johan Sebastian Welhaven en stille innsjø. Under overflaten skjuler seg dyp, men utenfra ser man bare rolig refleksjon. Han roper ikke, han hvisker. Han argumenterer ikke, han antyder.

I lang tid har Welhaven statt i Wergelands skygge. Han ble motstanderen som "tapte" kulturstriden, den kjølige kritikeren som ikke forsto det varme norske hjertet. Men dette er en forenkling. Welhaven var en mesterlig dikter som skapte noen av de vakreste stemningsbildene i norsk litteratur. Og han hadde viktige poenger om kvalitet og form som Norge trengte a høre.

I dette kapittelet skal vi mote Welhaven på hans egne premisser. Vi skal lese diktene hans, forstå hans standpunkter, og oppdage at Norges litteratur trengte bade vulkanen og innsjoen.`,
    },

    // ========== SEKSJON 1: Et liv i dannelse ==========
    {
      id: 'norsk-vg2-3-3-n-section1',
      type: 'text',
      content: `## Et liv i dannelse

Johan Sebastian Welhaven ble fodt i Bergen i 1807, bare ett ar for Wergeland. Faren var prest, og familien hadde sterke band til dansk kultur og europeisk dannelse. Der Wergeland vokste opp i skyggen av Eidsvoll og nasjonal frihetskamp, vokste Welhaven opp med boker, kunst og konversasjon.

I 1825 begynte han a studere i Christiania. Han markerte seg raskt som en talentfull poet med et uvanlig ore for sprak og form. Der andre studenter kastet seg ut i debatten med mas og glode, holdt Welhaven avstand og observerte. Han var aldri typen som stormet barrikadene.

I 1840 ble han utnevnt til lektor, og i 1846 til professor i filosofi ved universitetet. Hans hjem ble et sentrum for byens kulturelle elite - et sted der man diskuterte litteratur og kunst over te og kaker, langt fra gatenes brak.

Welhaven giftet seg med Josephine Bidoulac, og ekteskapet var lykkelig. Han levet et roligere liv enn Wergeland, med fewer dramatiske konfrontasjoner men ogsa minde flammende oye-blikk. Han dode i 1873, nesten 30 ar etter sin store motstander.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg2-3-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvor ble Johan Sebastian Welhaven fodt?',
        options: [
          { id: 'a', text: 'Kristiansand', isCorrect: false },
          { id: 'b', text: 'Eidsvoll', isCorrect: false },
          { id: 'c', text: 'Bergen', isCorrect: true },
          { id: 'd', text: 'Christiania (Oslo)', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Welhaven ble fodt i Bergen i 1807. Han vokste opp i et dannet miljo med sterke band til europeisk kultur, noe som preget hans senere standpunkter i kulturstriden med Wergeland.',
      },
    },

    // ========== SEKSJON 2: Norges Damring - skandalediktet ==========
    {
      id: 'norsk-vg2-3-3-n-section2',
      type: 'text',
      content: `## Norges Damring - skandalediktet

I 1834 skrev Welhaven diktet som skulle gjore ham beryktet: "Norges Damring". Det er et langt dikt der han kritiserer det han oppfattet som tom patriotisme og kulturell selvtilfredshet.

Diktet begynner vakkert og romantisk: "Hvad er det for en Susen / I Norges gamle Gran?" Leser forventer et hyllestdikt til fedrelandet. Men så kommer vendingen: "Ak nei! Det er kun vilde Ord / Og tomme Drikke-Sange".

Welhaven angriper det han kaller "Stumperne" - patrioter som skryter av Norge uten a ha skapt noe av verdi. Det er "Fjas og Skraal og Skrig / Fra dem, som ikke kjender sig". Med andre ord: folk som roper høyt om norskhet uten a forsta hva det betyr.

Reaksjonen var eksplosiv. Welhaven ble angrepet fysisk, utskjelt i aviser, og utfrosset fra patriotiske kretser. For mange var diktet et svik mot fedrelandet.

Men hadde han et poeng? Welhaven mente ja. Han hevdet ikke at Norge var darlig, men at nasjonalisme uten substans er tom. Å rope om norskhet er ikke det samme som å skape norsk kultur. Norge trengte kvalitet, ikke bare entusiasme.

I dag kan vi se at begge sider hadde rett - og feil. Wergeland-leirens entusiasme var nødvendig for å bygge nasjonal selvtillit. Men Welhavens krav om kvalitet var ogsa nodvendig for å gjøre norsk kultur respektert.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg2-3-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva var Welhavens hovedkritikk i "Norges Damring"?',
        options: [
          { id: 'a', text: 'At norsk natur var stygg', isCorrect: false },
          { id: 'b', text: 'At patriotismen var overfladisk og manglet kulturell substans', isCorrect: true },
          { id: 'c', text: 'At Norge burde bli dansk igjen', isCorrect: false },
          { id: 'd', text: 'At Wergeland var en darlig dikter', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Welhaven kritiserte det han så som tom patriotisme - folk som ropte hoyt om norskhet uten å skape noe av verdi. Han mente Norge trengte kvalitet og dannelse, ikke bare nasjonalistisk selvskryt.',
      },
    },

    // ========== SEKSJON 3: Welhavens poetikk ==========
    {
      id: 'norsk-vg2-3-3-n-section3',
      type: 'text',
      content: `## Welhavens poetikk

Hvis Wergeland skriver med hjertets blod, skriver Welhaven med en finslepen penn. Hans dikt er teknisk briljante - rim, rytme og komposisjon er alltid perfekte. Der Wergeland noen ganger ofrer form for innhold, ville Welhaven aldri gjøre det.

Han tilhorer en mer klassisistisk retning innen romantikken. Diktet skal være et gjennomarbeidet kunstverk, ikke et spontant utbrudd. Underdrivelse er bedre enn overdrivelse. Det som antydes kan treffe dypere enn det som ropes ut.

Welhavens beste dikt er stemningsbilder. Ta "Lokkende Toner": En dal i Norden, en mystisk hytte, en kvinne som synger i ensomhet. Sangen er full av smerte, men naar aldri ut - "Hytten var lukket for Gud". Det er vakkert, det er vondt, og det forklares aldri helt. Leseren ma selv fylle ut meningen.

Eller ta "Dalen": "Her ligger Dalen, halvmork og stille". Naturen er fredelig, men dikter-jegets hjerte finner ikke fred. Kontrasten mellom ytre ro og indre uro er hele diktet. Ikke et ord for mye, ikke et bilde for sterkt.

Dette er Welhavens styrke: det dempede, det subtile, det som ligger mellom linjene. Han maler ikke med bred pensel som Wergeland - han tegner med blyant, presist og nennsomt.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg2-3-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva kjennetegner Welhavens diktstil sammenlignet med Wergelands?',
        options: [
          { id: 'a', text: 'Mer kaotisk og eksplosiv', isCorrect: false },
          { id: 'b', text: 'Mer folkelig og direkte', isCorrect: false },
          { id: 'c', text: 'Mer formelt presist, dempet og antydende', isCorrect: true },
          { id: 'd', text: 'Mer humoristisk og satirisk', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Welhavens dikt er teknisk perfekte med dempet stemning og subtil antydning. Der Wergeland roper ut, hvisker Welhaven. Der Wergeland er eksplosiv, er Welhaven kontrollert. Begge tilnarminger har sin verdi.',
      },
    },

    // ========== SEKSJON 4: Naturlyrikken ==========
    {
      id: 'norsk-vg2-3-3-n-section4',
      type: 'text',
      content: `## Naturlyrikken

Bade Wergeland og Welhaven skrev om naturen, men pa helt ulike mater. For Wergeland er naturen livskraft, bevegelse, feiring. For Welhaven er naturen speil og ramme for indre liv.

I Welhavens dikt er naturen ofte stillere, mer melankolsk. Den speiler dikterens sinnsstemning, eller - like ofte - star i kontrast til den. Naturen er vakker og fredelig, men dikteren finner ikke fred. Denne kontrasten er et sentralt virkemiddel.

"Lokkende Toner" er et godt eksempel. Dalen er vakker med tindrede snø og rislende bekker. Men fra hytten kommer toner av smerte. Naturens skjonnhet forsterker menneskets isolasjon. Landskapet er ikke likegyldig - det er naermest smertelig i sin uoppnaelige fred.

Welhavens natur er ogsa preget av det mystiske. Hytten som aldri apnes, tonene som aldri nar ut, dalen man aldri kan vende tilbake til - alt dette gir en fornemmelse av at virkeligheten har lag vi ikke kan na.

Denne tilnarmingen til natur er ogsa romantisk, men pa en annen mate enn Wergelands. Det er den tyske romantikernes melankoli, Sehnsucht-en, som preger Welhaven - ikke Wergelands naturjubel.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg2-3-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvordan bruker Welhaven naturen i diktet "Dalen"?',
        options: [
          { id: 'a', text: 'Som feiring av livets kraft', isCorrect: false },
          { id: 'b', text: 'Som politisk symbol', isCorrect: false },
          { id: 'c', text: 'Som kontrast til dikterens indre uro - naturen har fred, hjertet har det ikke', isCorrect: true },
          { id: 'd', text: 'Som humoristisk kulisse', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'I "Dalen" er naturen stille og fredelig, men dikter-jegets hjerte finner ikke denne freden. Kontrasten mellom ytre ro og indre uro er selve diktet - naturen viser fram det sjelen mangler.',
      },
    },

    // ========== SEKSJON 5: Welhavens betydning ==========
    {
      id: 'norsk-vg2-3-3-n-section5',
      type: 'text',
      content: `## Welhavens betydning

Det er lett a avfeie Welhaven som "taperen" i kulturstriden. Men dette er en forenkling. Hans bidrag til norsk litteratur og kulturliv var betydelig:

Som kritiker hevet han nivået på norsk litteraturdebatt. Han insisterte på kvalitet og form, og tvang dikterne til å skjerpe seg. Dette var nødvendig for at norsk litteratur skulle bli respektert internasjonalt.

Som professor pavirket han generasjoner av studenter. Hans forelesninger om estetikk og filosofi formet smaken hos mange som senere ble viktige kulturpersonligheter.

Som dikter skapte han stemningslyrikk som fortsatt leses med glede. "Lokkende Toner" og andre dikt er mesterverk i sin sjanger - stille, subtile, dype.

Som motpol til Wergeland tvang han frem en nødvendig debatt. Uten Welhavens kritikk hadde kanskje norsk kultur blitt mer selvtilfreds og mindre kvalitetsbevisst.

I dag ser vi at Norge trengte bade Wergeland og Welhaven. Wergelands energi og folkelighet, Welhavens kvalitetskrav og europeiske perspektiv. Sammen skapte de grunnlaget for en moden norsk litteratur.

Spor ikke hvem som "vant". Spor hva hver av dem bidro med. Da ser du at begge var nodvendige.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg2-3-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvorfor er det en forenkling a si at Wergeland "vant" kulturstriden?',
        options: [
          { id: 'a', text: 'Fordi Welhaven faktisk vant alle debattene', isCorrect: false },
          { id: 'b', text: 'Fordi norsk kultur trengte bade Wergelands folkelighet og Welhavens kvalitetskrav', isCorrect: true },
          { id: 'c', text: 'Fordi ingen av dem hadde rett', isCorrect: false },
          { id: 'd', text: 'Fordi striden aldri ble avsluttet', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Norsk litteratur etter striden kombinerer bade Wergelands og Welhavens bidrag. Ibsen, Bjornson og andre hadde bade folkelig forankring og formal ambisjon. Begge perspektivene var nodvendige - det er derfor det er feil å kare en vinner.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg2-3-3-n-summary',
      type: 'text',
      content: `## Oppsummering: Welhaven - motvekten Norge trengte

Johan Sebastian Welhaven var mer enn bare Wergelands motstander. Han var en viktig dikter og kulturpersonlighet i sin egen rett. Her er det viktigste a huske:

**Biografiske fakta:**
Fodt Bergen 1807, dode 1873. Professor i filosofi fra 1846. Gift med Josephine Bidoulac.

**Hovedverk:**
"Norges Damring" (1834) - det kontroversielle diktet som kritiserte tom patriotisme. "Digte" (1839), "Nyere Digte" (1845), "Halvhundrede Digte" (1848) - samlinger med hans beste lyrikk.

**Kulturstriden:**
Ledet "intelligenspartiet" mot Wergelands "patrioter". Mente Norge trengte europeisk dannelse og kvalitetskrav, ikke bare nasjonal begeistring.

**Stil og virkemidler:**
Formell presisjon, teknisk briljans. Dempet stemning, subtil antydning. Naturen som speil for indre liv, ofte i kontrast. Melankoli og lengsel.

**Betydning:**
Hevet nivået på norsk litteraturkritikk. Pavirket generasjoner som professor. Skapte varig stemningslyrikk. Ga Norge det kvalitetskravet det trengte.

**Nokkelord:**
Klassisisme innen romantikken, stemningslyrikk, "Norges Damring", kulturstriden, kvalitet vs. entusiasme.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.4 NARRATIV: Romantisk lyrikk og naturopplevelse
// ============================================================================

export const CHAPTER_NORSK_VG2_3_4_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-3-4-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '3.4',
  title: 'Romantisk lyrikk og naturopplevelse',
  subtitle: 'Narrativ versjon',
  description: 'Utforsk hvordan romantikkens diktere forvandlet fjell, skoger og bekker til speil for menneskesjelen.',
  estimatedMinutes: 40,
  competenceGoals: [
    'utforske tekster fra romantikken og nasjonalromantikken',
    'analysere og tolke tekster med bruk av fagbegreper',
    'lese og tolke tekster fra 1500-1850 i kulturhistorisk kontekst',
  ],
  linkedChapterId: 'norsk-vg2-3-4',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg2-3-4-n-intro',
      type: 'text',
      content: `## Når naturen taler til sjelen

Tenk på forrige gang du sto på en fjelltopp og så utover landskapet. Eller satt ved en bekk og horte vannet risle. Eller gikk gjennom en skog i skumringen. Hva folte du?

For romantikkens diktere var slike oyeblikk ikke bare vakre - de var hellige. Naturen var ikke bare kulisser for menneskelivet. Den var besjelet, levende, full av mening. I motet med fjell og skog kunne dikteren finne svar pa livets storste sporsmal.

I dette kapittelet skal vi utforske romantisk naturlyrikk. Vi skal se hvordan diktere som Wergeland og Welhaven skildret naturen, og hva naturbildene deres betydde. Vi skal lare noen viktige begreper og virkemidler, og vi skal prove a forstå hvorfor romantikernes natursyn fortsatt berorer oss.`,
    },

    // ========== SEKSJON 1: Romantikkens natursyn ==========
    {
      id: 'norsk-vg2-3-4-n-section1',
      type: 'text',
      content: `## Romantikkens natursyn

For a forstå romantisk naturlyrikk ma vi forst forstå romantikkens natursyn. Det skiller seg radikalt fra bade opplysningstidens og vår tids forstaelse.

Opplysningstiden hadde sett naturen som en maskin - en komplisert mekanisme som kunne forstaes gjennom vitenskap. Naturen var nyttig, den var interessant, men den var ikke hellig. For romantikerne var dette et fattig syn. De så naturen som besjelet - full av liv og and. Trerne, fjellene, elvene var ikke bare materie. De var deltakere i et kosmisk drama.

Naturen var ogsa et speil for menneskesjelen. Nar dikteren var glad, blomstret naturen rundt ham. Nar han sorget, grât himmelen. Dette kalles korrespondanse - en sammenheng mellom det indre og det ytre. Dikteren og naturen horer sammen.

For mange romantikere var naturen hellig i bokstavelig forstand. De var panteister - de trodde at Gud var til stede i alt, ikke bare i kirken. A vandre i naturen var en form for gudstjeneste. Fjelltoppen var et alter.

I Norge fikk naturen en ekstra dimensjon: den ble nasjonal. De norske fjellene, fjordene og fossene ble symboler pa norsk folkekarakter. Landskapet hadde formet oss, og vi hørte hjemme i det.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg2-3-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva menes med at romantikerne så naturen som "besjelet"?',
        options: [
          { id: 'a', text: 'At naturen var skapt av mennesker', isCorrect: false },
          { id: 'b', text: 'At naturen hadde liv og and, ikke bare var død materie', isCorrect: true },
          { id: 'c', text: 'At naturen var farlig og truende', isCorrect: false },
          { id: 'd', text: 'At naturen kunne forklares vitenskapelig', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'A se naturen som besjelet betyr å tro at den har liv og and utover det rent materielle. For romantikerne var naturen ikke bare atomer og molekyler, men full av mening, folelse og guddommelighet.',
      },
    },

    // ========== SEKSJON 2: Naturmotiver i romantikken ==========
    {
      id: 'norsk-vg2-3-4-n-section2',
      type: 'text',
      content: `## Naturmotiver i romantikken

Visse naturbilder går igjen i romantisk diktning. A kjenne dem hjelper oss a forstå hva dikterne vil uttrykke:

Fjell og høyder. Fjellet symboliserer det opphoyede - nærhet til himmelen, frihet fra hverdagens trivialiteter. A bestige fjellet er en åndelig reise. Fra toppen ser dikteren livet i perspektiv. Fjellenes majestet minner om det sublime - naturens overveldende storhet.

Skogen. Skogen er mysteriumets sted. Her truer det ukjente, men her kan man ogsa finne seg selv. Eventyrets skog er full av farer og under. Den dype skogen representerer det ubevisste, det som ligger under overflaten av var bevisste forstand.

Vannet. Sjøer, bekker, fosser - alt dette er symboler for livets strom, folelsenes dyp, fornyelse og renselse. Men vannet er ogsa farlig. Drukningsdoden er et vanlig motiv. Det dype vannet lokker og truer samtidig.

Kveld og natt. Skumringen og natten er tid for refleksjon, drom og lengsel. Manelys og stjerner inspirerer til metafysiske tanker. Morket skjuler, men det avslorer ogsa - ting som synet ikke fanger i dagslyset.

Årstidene. Vår er fornyelse, ungdom, hap. Sommer er fylde og modenhet. Host er vemod og aldring. Vinter er dod, men ogsa renselse og hvile for ny var.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg2-3-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva symboliserer fjellet ofte i romantisk diktning?',
        options: [
          { id: 'a', text: 'Fare og dod', isCorrect: false },
          { id: 'b', text: 'Det opphøyde, frihet, nærhet til himmelen', isCorrect: true },
          { id: 'c', text: 'Ensomhet og isolasjon', isCorrect: false },
          { id: 'd', text: 'Fattigdom og strev', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Fjellet symboliserer det opphøyde - bade i konkret og overfort betydning. Fra fjelltoppen ser man livet i perspektiv, man er nærmere himmelen, og man er fri fra hverdagens begrensninger. A bestige fjellet er en andelig reise.',
      },
    },

    // ========== SEKSJON 3: Virkemidler i naturlyrikken ==========
    {
      id: 'norsk-vg2-3-4-n-section3',
      type: 'text',
      content: `## Virkemidler i naturlyrikken

For a skrive om naturen pa en mate som berorer, bruker romantikerne særegne virkemidler:

Besjeling (personifikasjon). Naturen får menneskelige egenskaper. Vinden sukker, fjellet troner, bekken hvisker, solen smiler. Dette gjor naturen levende og meningsfull. Den deltar i diktet, den er ikke bare bakgrunn.

Symbolikk. Naturmotiver betyr mer enn seg selv. Solnedgangen symboliserer dod, varen symboliserer hap, stormen symboliserer indre kamp. Denne doble betydningen gir diktene dybde.

Synestesi. Sanseinntrykk blandes. Farger "klinger", lyder "skinner". Dette skaper uvanlige, poetiske bilder som utvider opplevelsen. "Morke klanger" sier noe som ikke kan sies pa annen mate.

Kontraster. Lys og morke, storm og stille, hoyde og dyp settes mot hverandre. Disse kontrastene skaper spenning og fremhever mening. Dikteren som finner ro i en stormfull natt - kontrasten sier noe om styrke.

Musikalitet. Lyden av språket speiler naturens lyder. Allitterasjon som "susen i skogen" etterligner vindens sus. Onomatopoetikon som "risling" og "brus" gjor naturen horbar i diktet.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg2-3-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva er synestesi i diktning?',
        options: [
          { id: 'a', text: 'A sammenligne to ting med ordet "som"', isCorrect: false },
          { id: 'b', text: 'A gi naturen menneskelige egenskaper', isCorrect: false },
          { id: 'c', text: 'A blande sanseinntrykk - farger "klinger", lyder "skinner"', isCorrect: true },
          { id: 'd', text: 'A bruke bokstavrim i diktet', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Synestesi er nar sanseinntrykk blandes - man beskriver ett sanseinntrykk med ord fra en annen sans. "Morke klanger" (lyd beskrevet med farge) eller "lyse toner" (lyd beskrevet med lys) er eksempler.',
      },
    },

    // ========== SEKSJON 4: Wergeland vs. Welhaven - to tilnærminger ==========
    {
      id: 'norsk-vg2-3-4-n-section4',
      type: 'text',
      content: `## Wergeland vs. Welhaven - to tilnarminger

Bade Wergeland og Welhaven skrev naturlyrikk, men pa helt ulike mater. A sammenligne dem viser bredden i romantisk naturopplevelse.

Wergelands natur er dynamisk og livskraftig. I "Til Foraaret" eksploderer varen: "Vaar! Vaar! Vaar! Alt er Vaar!" Fuglene synger, bekkene larmer, skovene rorer seg. Alt er bevegelse, energi, feiring. Dikteren er ikke observator - han deltar i vårfesten. Han oppfordrer leseren: "Menneske! Glad dig!"

Welhavens natur er stillere, mer melankolsk. I "Dalen" er landskapet fredelig, men dikterens hjerte finner ikke fred. Kontrasten mellom ytre ro og indre uro er selve diktet. I "Lokkende Toner" er dalen vakker, men huset er lukket, og sangen når aldri ut. Welhavens natur speiler tap og lengsel, ikke triumph.

Begge tilnarminger er romantiske. Begge ser naturen som besjelet og meningsfull. Men der Wergeland finner bekreftelse i naturen, finner Welhaven kontrast. Der Wergeland feirer, sorger Welhaven. Sammen viser de at romantisk naturopplevelse rommer bade jubel og vemod.

Dette er ikke et sporsmal om hvem som er "best". Begge bidrar til var forstaelse av hvordan mennesket kan forholde seg til naturen.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg2-3-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva er hovedforskjellen mellom Wergelands og Welhavens naturlyrikk?',
        options: [
          { id: 'a', text: 'Wergeland skriver om norsk natur, Welhaven om dansk', isCorrect: false },
          { id: 'b', text: 'Wergeland feirer og deltar, Welhaven kontrasterer og reflekterer', isCorrect: true },
          { id: 'c', text: 'Wergeland skriver prosa, Welhaven skriver dikt', isCorrect: false },
          { id: 'd', text: 'De skriver om helt ulike naturtyper', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Wergelands natur er dynamisk og bekreftende - dikteren deltar i varfesten og oppfordrer leseren til glede. Welhavens natur er stillere og ofte i kontrast til dikterens indre - naturen har fred, hjertet har det ikke.',
      },
    },

    // ========== SEKSJON 5: Naturlyrikken i dag ==========
    {
      id: 'norsk-vg2-3-4-n-section5',
      type: 'text',
      content: `## Naturlyrikken i dag

Romantikernes natursyn har satt dype spor. Fremdeles skriver diktere om naturen, og mange av bildene og motivene stammer fra romantikken. Fjellturer, skogsvandringer, solnedganger - alt dette fortsetter a inspirere.

Men forholdet til naturen har ogsa endret seg. I dag er naturlyrikken ofte preget av miljøbekymring. Klimakrisen kaster en skygge over var naturopplevelse. Der romantikerne kunne feire naturens evige fornyelse, spor vi om varen vil komme slik den pleide.

Likevel har romantikernes natursyn noe a lare oss. Deres arefrykt for naturen, deres opplevelse av den som meningsfull og hellig, kan motivere til handling. Hvis naturen bare er ressurser, kan vi utnytte den til den er tom. Hvis naturen er besjelet og vi er en del av den, ma vi ta vare pa den.

Kanskje trenger vi en ny romantikk - en som kombinerer vitenskapelig forstaelse med romantisk ærefrykt. En som ser at naturen bade kan forklares og oppleves, bade utforskes og tilbes.

Nar du neste gang star pa en fjelltopp eller sitter ved en bekk, prov a se med romantikernes oyne. Hva sier naturen til deg? Hva foler du?`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg2-3-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva kan romantikernes natursyn bidra med i dagens klimakrise?',
        options: [
          { id: 'a', text: 'Ingenting - deres syn er utdatert', isCorrect: false },
          { id: 'b', text: 'Vitenskapelige losninger pa miljoproblemer', isCorrect: false },
          { id: 'c', text: 'Arefrykt for naturen som kan motivere til å beskytte den', isCorrect: true },
          { id: 'd', text: 'Politiske strategier for a redusere utslipp', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Romantikernes ærefrykt for naturen og opplevelse av den som hellig kan motivere til handling. Hvis vi bare ser naturen som ressurser, kan vi utnytte den til den er tom. Hvis vi foler oss som del av naturen, vil vi ta vare pa den.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg2-3-4-n-summary',
      type: 'text',
      content: `## Oppsummering: Naturens sprak

Romantisk naturlyrikk er mer enn vakre beskrivelser. Den uttrykker et helt syn pa virkeligheten. Her er det viktigste a huske:

**Romantikkens natursyn:**
Naturen er besjelet, ikke bare materie. Den speiler menneskesjelen (korrespondanse). Den er hellig (panteisme). I Norge ble den ogsa nasjonal.

**Naturmotiver:**
Fjell = det ophøyde, frihet. Skog = mysterium, det ubevisste. Vann = livets strom, fare. Kveld/natt = refleksjon, lengsel. Arstider = livets faser.

**Virkemidler:**
Besjeling - naturen far menneskelige egenskaper. Symbolikk - naturmotiver betyr mer enn seg selv. Synestesi - sanser blandes. Kontraster - lys/morke, storm/stille. Musikalitet - spräkets lyd speiler naturen.

**Wergeland vs. Welhaven:**
Wergeland: dynamisk, feirende, deltakende. Welhaven: stille, melankolsk, kontrasterende. Begge er romantiske, begge er verdifulle.

**Arven:**
Romantikkens naturlyrikk lever videre, men er ogsa utfordret av miljøkrisen. Kanskje trenger vi deres arefrykt mer enn noensinne.

**Nokkelord:**
Besjelet natur, panteisme, korrespondanse, det sublime, besjeling (personifikasjon), synestesi, symbolikk.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.5 NARRATIV: Nasjonalromantikken
// ============================================================================

export const CHAPTER_NORSK_VG2_3_5_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-3-5-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '3.5',
  title: 'Nasjonalromantikken',
  subtitle: 'Narrativ versjon',
  description: 'Oppdag hvordan Norge etter 1814 jaktet på sin egen identitet gjennom eventyr, folkeviser og bondekultur.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske tekster fra romantikken og nasjonalromantikken',
    'gjøre rede for historisk bakgrunn for språksituasjonen i Norge',
  ],
  linkedChapterId: 'norsk-vg2-3-5',
  content: [
    {
      id: 'norsk-vg2-3-5-n-intro',
      type: 'text',
      content: `## Jakten på det norske

Forestill deg at du våkner en morgen og oppdager at landet ditt plutselig er fritt. I 400 år har dere vært styrt av et annet folk. Deres skriftspråk er fremmed. Deres kultur har vært undertrykt. Og nå - plutselig - er dere en egen nasjon.

Men hvem er dere egentlig? Hva er det som gjør dere til et folk?

Dette var situasjonen for nordmenn i 1814. Norge hadde fått sin grunnlov og løsrevet seg fra Danmark. Men den nye nasjonen manglet noe vesentlig: en tydelig identitet. Hva var egentlig norsk? Hvordan skilte vi oss fra danskene og svenskene?

Svaret ble nasjonalromantikken - en kulturell bevegelse som satte seg fore å finne og dyrke det spesifikt norske. I dette kapittelet skal vi utforske hvordan dette prosjektet utfoldet seg, hvilke skatter det avdekket, og hvilke problemer det skapte.`,
    },
    {
      id: 'norsk-vg2-3-5-n-section1',
      type: 'text',
      content: `## Innsamlingsprosjektet

Nasjonalromantikerne hadde en klar strategi: De skulle ut i bygdene og finne det ekte Norge. De trodde at bondekulturen hadde bevart noe opprinnelig som var gått tapt i byene og blant de dannede. Bøndene snakket fortsatt norske dialekter. De fortalte eventyr og sang folkeviser som hadde gått i arv gjennom generasjoner. De hadde drakter, skikker og tradisjoner som var genuint norske.

Unge menn med notatblokker dro ut på vandring gjennom dalene. De banket på dører i avsidesliggende grender. De satte seg ned hos gamle koner og lyttet til fortellinger. De skrev ned hver setning, hvert uttrykk, hver melodi.

Peter Christen Asbjørnsen og Jørgen Moe samlet eventyr. Magnus Brostrup Landstad samlet folkeviser. Ivar Aasen samlet dialekter. Kunstnerne Johan Christian Dahl, Adolph Tidemand og Hans Gude malte norske landskaper og bondeliv.

Dette var ikke bare nostalgisk romantikk. Det var et politisk prosjekt. Ved å bevise at Norge hadde en rik og særegen kultur, legitimerte man nasjonen. Vi var ikke bare en dansk provins. Vi var et eget folk med egen ånd.`,
    },
    {
      id: 'norsk-vg2-3-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvorfor reiste nasjonalromantikerne ut til bygdene?',
        options: [
          { id: 'a', text: 'For å selge bøker til bøndene', isCorrect: false },
          { id: 'b', text: 'For å finne og samle inn det de mente var ekte norsk kultur', isCorrect: true },
          { id: 'c', text: 'For å lære bøndene å lese og skrive', isCorrect: false },
          { id: 'd', text: 'For å flykte fra bylivet', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Nasjonalromantikerne mente at bondekulturen hadde bevart det opprinnelig norske som var gått tapt i byene. Ved å samle eventyr, folkeviser og dialekter ville de dokumentere og bevare denne kulturen, og samtidig bevise at Norge hadde en egen nasjonal identitet.',
      },
    },
    {
      id: 'norsk-vg2-3-5-n-section2',
      type: 'text',
      content: `## Bonden som ideal

For nasjonalromantikerne ble bonden selve symbolet på det norske. Men hvem var egentlig denne bonden?

I nasjonalromantisk fremstilling var den norske bonden fri og selvstendig. Han levde i pakt med naturen på sin egen gård. Han hadde bevart gammel visdom og eldgamle tradisjoner. Han var sterk, taus og ærlig - en representant for det opprinnelige Norge fra før dansketiden.

Dette bildet var delvis sant. Bondekulturen hadde faktisk bevart mye - dialekter, eventyr, musikk, håndverk. Men bildet var også sterkt idealisert. Den virkelige norske bonden på 1800-tallet var ofte fattig. Mange var husmenn uten egen jord. Livet var hardt, preget av slit og usikkerhet. Barnedødeligheten var høy. Sult var en reell trussel.

Nasjonalromantikerne valgte å se bort fra dette. De skapte et glansbilde der bonden var bærer av nasjonal visdom, ikke offer for sosial urettferdighet. Kvinner, tjenestefolk og fattigfolk forsvant ofte fra fortellingen.

Dette paradokset er viktig å forstå: Nasjonalromantikken avdekket virkelige kulturskatter, men den konstruerte også et idealisert bilde av fortiden. Det "ekte norske" var delvis en oppfinnelse.`,
    },
    {
      id: 'norsk-vg2-3-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva var problematisk med nasjonalromantikernes idealisering av bonden?',
        options: [
          { id: 'a', text: 'De ignorerte at bøndene kunne lese og skrive', isCorrect: false },
          { id: 'b', text: 'De overså fattigdom, urettferdighet og kvinners situasjon', isCorrect: true },
          { id: 'c', text: 'De var for kritiske til bondekulturen', isCorrect: false },
          { id: 'd', text: 'De mente at bøndene var mindre intelligente', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Nasjonalromantikerne skapte et glansbilde av bondekulturen og ignorerte fattigdom, husmannsvesenet og kvinners vanskelige situasjon. Det "ekte norske" ble delvis en konstruksjon som utelot de delene av virkeligheten som ikke passet inn.',
      },
    },
    {
      id: 'norsk-vg2-3-5-n-section3',
      type: 'text',
      content: `## Kunsten som nasjonsbygger

Nasjonalromantikken var ikke bare litteratur - den preget all kunst. Og kunsten ble et mektig verktøy for nasjonsbygging.

I malerkunsten skapte Johan Christian Dahl storslåtte bilder av norske fjorder og fjell. Tidemand og Gude malte det berømte "Brudeferd i Hardanger" (1848) - et ikonisk bilde av festkledde bønder i båt på en majestetisk fjord. Disse maleriene viste verden at Norge var vakkert, unikt og verdt å være stolt av.

I musikken hentet Edvard Grieg melodier fra folkemusikken og gjorde dem til kunstmusikk. Hans "Peer Gynt"-suite med "Morgenstemning" og "I Dovregubbens hall" er fortsatt blant verdens mest kjente klassiske stykker. Grieg komponerte bevisst "norsk" - og lyktes så godt at musikken hans har blitt synonymt med Norge.

I arkitekturen ble stavkirkene gjenoppdaget som nasjonale skatter. "Dragestilen" hentet motiver fra vikingtid og middelalder. Bygninger fikk ornamenter som signaliserte norsk identitet.

Alt dette skapte en felles referanseramme. Når nordmenn så Tidemands bondebryllup, hørte Griegs musikk eller besøkte en stavkirke, følte de seg som del av noe større - et folk med felles kultur og historie.`,
    },
    {
      id: 'norsk-vg2-3-5-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-5-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hvilket maleri fra 1848 regnes som et ikon for norsk nasjonalromantikk?',
        options: [
          { id: 'a', text: '"Skrik" av Edvard Munch', isCorrect: false },
          { id: 'b', text: '"Brudeferd i Hardanger" av Tidemand og Gude', isCorrect: true },
          { id: 'c', text: '"Vinternatt i Rondane" av Harald Sohlberg', isCorrect: false },
          { id: 'd', text: '"Birkebeinerne" av Knud Bergslien', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: '"Brudeferd i Hardanger" (1848) av Adolph Tidemand og Hans Gude viser festkledde bønder i båt på en majestetisk fjord. Det kombinerer nasjonalromantikkens to hovedmotiver - bondekulturen og den storslåtte naturen - og ble et symbol på norsk identitet.',
      },
    },
    {
      id: 'norsk-vg2-3-5-n-section4',
      type: 'text',
      content: `## Det konstruerte og det ekte

Her er et viktig spørsmål: Hvis nasjonalromantikerne delvis konstruerte "det norske", betyr det at det er falskt?

Nei, ikke nødvendigvis. Alle nasjoner konstruerer sin identitet. Det finnes ikke et "rent" norsk som lå der og ventet på å bli oppdaget. Nasjonal identitet skapes gjennom bevisste valg - hvilke fortellinger vi forteller, hvilke symboler vi bruker, hvilke tradisjoner vi fremhever.

Nasjonalromantikerne valgte ut visse elementer: Bondekulturen, naturen, middelalderen, folkeeventyrene. De ga disse elementene symbolsk betydning. Og gjennom denne prosessen skapte de noe reelt - en felles norsk identitet som nordmenn fortsatt forholder seg til.

Bunaden er et godt eksempel. De fleste bunader slik vi kjenner dem i dag, er rekonstruksjoner fra 1800- og 1900-tallet. De bygger på fragmenter og bilder av eldre folkedrakter, men er ofte nyere enn vi tror. Likevel er bunaden blitt et ekte og meningsfullt symbol på norsk identitet. Det at den er "konstruert" gjør den ikke mindre ekte som kulturfenomen.

Poenget er ikke å avsløre nasjonalromantikken som "falsk", men å forstå prosessen. Når vi vet hvordan nasjonal identitet skapes, kan vi stille kritiske spørsmål: Hvem ble inkludert? Hvem ble ekskludert? Hvilke stemmer fikk tale, og hvilke ble tiet?`,
    },
    {
      id: 'norsk-vg2-3-5-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-5-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva betyr det at bunaden er "konstruert"?',
        options: [
          { id: 'a', text: 'At bunaden er maskinprodusert i fabrikker', isCorrect: false },
          { id: 'b', text: 'At bunaden er rekonstruert og standardisert, ofte basert på fragmenter', isCorrect: true },
          { id: 'c', text: 'At bunaden ikke er ekte norsk', isCorrect: false },
          { id: 'd', text: 'At bunaden ble innført ved lov', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Bunader slik vi kjenner dem er ofte rekonstruksjoner fra 1800- og 1900-tallet, basert på fragmenter og bilder av eldre folkedrakter. Dette gjør dem ikke "falske" - de har blitt ekte kulturfenomener. Men det viser at tradisjoner skapes og formes bevisst.',
      },
    },
    {
      id: 'norsk-vg2-3-5-n-section5',
      type: 'text',
      content: `## Arven etter nasjonalromantikken

Nasjonalromantikken lever videre i dag på måter vi knapt tenker over.

17. mai-feiringen med tog, flagg og bunader er nasjonalromantikk i praksis. Friluftslivet som norsk identitetsmarkør - "ut på tur, aldri sur" - har røtter i romantikkens naturbeundring. Stoltheten over fjorder og fjell, dialektene, mattradisjoner som brunost og fårikål - alt dette er arv fra 1800-tallets nasjonsbygging.

Turistnæringen selger fortsatt Norge med nasjonalromantiske bilder: Fjorder, fjell, vikinger, tradisjoner. Reklamene lover "det ekte Norge" - akkurat som nasjonalromantikerne søkte det autentiske for 200 år siden.

Men arven har også problematiske sider. Når noen snakker om "norske verdier" eller "ekte norsk kultur", bruker de ofte nasjonalromantisk tankegods. Dette kan virke ekskluderende i et flerkulturelt samfunn. Hvem "passer" i bildet av det norske som ble skapt på 1800-tallet?

Å forstå nasjonalromantikken hjelper oss å se både styrken og begrensningene i norsk selvforståelse. Vi kan feire den rike kulturarven den ga oss, samtidig som vi stiller kritiske spørsmål om hvem som ble inkludert - og hvem som ble utelatt.`,
    },
    {
      id: 'norsk-vg2-3-5-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-5-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvorfor kan nasjonalromantisk tankegods være problematisk i dag?',
        options: [
          { id: 'a', text: 'Fordi det er utdatert og kjedelig', isCorrect: false },
          { id: 'b', text: 'Fordi det kan virke ekskluderende i et flerkulturelt samfunn', isCorrect: true },
          { id: 'c', text: 'Fordi det er for dyrt å vedlikeholde tradisjonene', isCorrect: false },
          { id: 'd', text: 'Fordi unge ikke er interessert i historie', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Nasjonalromantikken definerte "det norske" på en måte som ikke inkluderte alle. Når noen i dag snakker om "ekte norsk kultur", kan det ekskludere mennesker med annen bakgrunn. Det er viktig å forstå denne arven kritisk i et flerkulturelt Norge.',
      },
    },
    {
      id: 'norsk-vg2-3-5-n-summary',
      type: 'text',
      content: `## Oppsummering: Nasjonalromantikkens doble arv

Nasjonalromantikken var et avgjørende kapittel i norsk kulturhistorie. Her er det viktigste å huske:

**Bakgrunn:**
Norge ble selvstendig i 1814 og trengte en nasjonal identitet. Nasjonalromantikerne søkte denne i bondekulturen, naturen og folkelige tradisjoner.

**Innsamlingsprosjektet:**
Asbjørnsen og Moe samlet eventyr. Landstad samlet folkeviser. Aasen samlet dialekter. Kunstnere malte nasjonale motiver. Grieg komponerte "norsk" musikk.

**Bonden som symbol:**
Bonden ble idealisert som bærer av det ekte norske. Men dette bildet var forenklet og overså fattigdom og urettferdighet.

**Konstruksjon og ekthet:**
Nasjonalromantikken både avdekket og konstruerte "det norske". Alle nasjoner skaper sin identitet gjennom bevisste valg. Det gjør ikke identiteten mindre reell.

**Arven i dag:**
17. mai, bunader, friluftsliv, naturstolthet - alt dette er nasjonalromantisk arv. Men arven kan også virke ekskluderende i et flerkulturelt samfunn.

**Nøkkelord:**
Nasjonalromantikk, nasjonsbygging, innsamling, bondekultur, konstruert tradisjon, kulturarv.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.6 NARRATIV: Asbjørnsen og Moe
// ============================================================================

export const CHAPTER_NORSK_VG2_3_6_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-3-6-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '3.6',
  title: 'Asbjørnsen og Moe',
  subtitle: 'Narrativ versjon',
  description: 'Møt de to vennene som ga Norge sine eventyr og skapte Askeladden som nasjonalhelt.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske tekster fra romantikken og nasjonalromantikken',
    'analysere og tolke tekster med bruk av fagbegreper',
  ],
  linkedChapterId: 'norsk-vg2-3-6',
  content: [
    {
      id: 'norsk-vg2-3-6-n-intro',
      type: 'text',
      content: `## Det var en gang...

Med disse ordene begynner utallige norske eventyr. Ordene bringer oss til en verden der troll bor i berg, prinsesser venter på frelse, og den yngste broren - han som alle undervurderer - alltid vinner til slutt.

Men visste du at disse eventyrene nesten gikk tapt? At de bare fantes i hodene til gamle fortellere rundt om i bygdene, og at de ville dødd med dem hvis ikke to unge menn hadde bestemt seg for å skrive dem ned?

Peter Christen Asbjørnsen og Jørgen Moe var barndomsvenner som delte en lidenskap: De ville redde de norske folkeeventyrene fra glemselen. Fra 1830-tallet og utover reiste de gjennom Norge og samlet fortellinger fra folkemunne. Resultatet ble "Norske Folkeeventyr" - en samling som forandret norsk kultur for alltid.

I dette kapittelet skal vi møte de to eventyrsamlerne, utforske eventyrenes verden, og forstå hvorfor en figur som Askeladden har blitt så viktig for norsk selvforståelse.`,
    },
    {
      id: 'norsk-vg2-3-6-n-section1',
      type: 'text',
      content: `## To venner på eventyrjakt

Peter Christen Asbjørnsen (1812-1885) og Jørgen Moe (1813-1882) møttes som unge gutter og ble venner for livet. De delte en fascinasjon for fortellinger og en overbevisning om at de norske folkeeventyrene var en skatt som måtte bevares.

Asbjørnsen var naturviter og eventyrer. Han reiste rundt i Norge, ofte til fots, og oppsøkte folk i avsidesliggende bygder. Han var god til å få folk i tale, til å lytte tålmodig mens gamle koner fortalte sine historier. Han noterte ned hver detalj - ikke bare handlingen, men også ordene, uttrykkene, rytmen i fortellingen.

Moe var prest og dikter. Han hadde et finere øre for språkets musikk. Når de to bearbeidet eventyrene sammen, bidro Moe med litterær finesse mens Asbjørnsen sikret autentisiteten.

For de skrev ikke bare ned eventyrene ordrett. De bearbeidet dem. De skapte en eventyrstil som kombinerte muntlig fortellertone med litterær kunst. Språket var folkelig, men flytende. Humoren var grov, men hjertelig. Detaljene var levende og konkrete.

Denne stilen ble normgivende for norsk prosa. Når du leser en norsk novelle eller roman i dag, kan du høre ekko av Asbjørnsen og Moes fortellerstemme.`,
    },
    {
      id: 'norsk-vg2-3-6-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-6-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva var Asbjørnsens og Moes viktigste bidrag til eventyrsamlingen?',
        options: [
          { id: 'a', text: 'Asbjørnsen diktet eventyrene, Moe illustrerte dem', isCorrect: false },
          { id: 'b', text: 'Asbjørnsen samlet autentisk stoff, Moe tilførte litterær finesse', isCorrect: true },
          { id: 'c', text: 'Moe reiste og samlet, Asbjørnsen skrev ut', isCorrect: false },
          { id: 'd', text: 'De jobbet helt uavhengig av hverandre', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Asbjørnsen var den som reiste mest og samlet fortellinger fra folkemunne. Han sikret at stoffet var autentisk. Moe hadde et finere litterært øre og bidro til å forme den karakteristiske eventyrstilen. Sammen skapte de noe unikt.',
      },
    },
    {
      id: 'norsk-vg2-3-6-n-section2',
      type: 'text',
      content: `## Eventyrenes verden

Hva er egentlig et folkeeventyr? Det er en fortelling som har levd i muntlig tradisjon, fortalt fra generasjon til generasjon. Ingen vet hvem som diktet dem først - de tilhører fellesskapet.

Folkeeventyrene har faste strukturer. De begynner med "Det var en gang..." og slutter med "Snipp, snapp, snute, så var eventyret ute". Ting skjer tre ganger - tre brødre, tre oppgaver, tre forsøk. De to første mislykkes, det tredje lykkes. Det er hjelpere og motstandere, prøvelser og belønninger, og alltid en lykkelig slutt.

De norske folkeeventyrene deles inn i typer: Undereventyr har overnaturlige elementer - troll, drager, magiske gjenstander. Dyreeventyr har dyr som hovedpersoner, og de handler ofte om list og svik. Skjemteeventyr er humoristiske og handler om hverdagslige situasjoner som blir absurde.

Felles for alle er at de formidler verdier. Ikke gjennom moralprekener, men gjennom handling. Den som er modig, nysgjerrig og hjelpsom, vinner. Den som er grådig, hovmodig og grusom, taper. Disse verdiene sitter dypt i norsk kultur - formidlet gjennom generasjoner av eventyrfortelling.`,
    },
    {
      id: 'norsk-vg2-3-6-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-6-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva er "tretallets lov" i folkeeventyrene?',
        options: [
          { id: 'a', text: 'At eventyrene alltid handler om tre troll', isCorrect: false },
          { id: 'b', text: 'At viktige elementer gjentas tre ganger - tre brødre, tre oppgaver', isCorrect: true },
          { id: 'c', text: 'At eventyrene tar tre timer å fortelle', isCorrect: false },
          { id: 'd', text: 'At man må lese hvert eventyr tre ganger', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Tretallets lov er et fast mønster i folkeeventyr: Det er tre brødre (der den yngste vinner), tre oppgaver, tre forsøk. De to første mislykkes, det tredje lykkes. Dette mønsteret bygger spenning og gjør eventyrene lette å huske.',
      },
    },
    {
      id: 'norsk-vg2-3-6-n-section3',
      type: 'text',
      content: `## Askeladden - den norske helten

Ingen eventyrfigur er mer norsk enn Askeladden. Han er den yngste av tre brødre, og han sitter ved peisen og roter i asken mens de eldre brødrene gjør "viktigere" ting. Alle undervurderer ham - Per og Pål ser på ham med forakt, foreldrene sukker oppgitt.

Men når oppgavene skal løses, er det Askeladden som lykkes. Ikke fordi han er sterkest eller klokest i tradisjonell forstand, men fordi han har andre egenskaper: Han er nysgjerrig - han stopper og undersøker ting andre går forbi. Han er hjelpsom - han deler maten sin med dem han møter. Han er oppfinnsom - han finner løsninger andre ikke ser.

Tenk på det: Den norske nasjonalhelten er ikke en krigerkonge eller en mektig helt. Det er en underdog, en ingen, en som starter med ingenting og vinner gjennom kløkt og godt hjerte.

Dette sier noe viktig om norske verdier. I Askeladden-eventyrene er det ikke styrke eller status som teller, men karakter. Den lille mannen kan slå den mektige. Listen er bedre enn sverdkraft. Og det nytter ikke å være hovmodig - de arrogante brødrene taper alltid.

Disse verdiene - egalitet, list over styrke, å hjelpe dem man møter - har blitt en del av norsk selvforståelse. Askeladden er oss.`,
    },
    {
      id: 'norsk-vg2-3-6-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-6-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hvilke egenskaper gjør at Askeladden vinner?',
        options: [
          { id: 'a', text: 'Fysisk styrke og mot i kamp', isCorrect: false },
          { id: 'b', text: 'Rikdom og høy sosial status', isCorrect: false },
          { id: 'c', text: 'Nysgjerrighet, hjelpsomhet og oppfinnsomhet', isCorrect: true },
          { id: 'd', text: 'Utdanning og boklig lærdom', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Askeladden vinner ikke gjennom styrke eller status, men gjennom personlige egenskaper: Han er nysgjerrig og stopper for å undersøke ting. Han er hjelpsom og deler med dem han møter. Han er oppfinnsom og finner løsninger andre ikke ser.',
      },
    },
    {
      id: 'norsk-vg2-3-6-n-section4',
      type: 'text',
      content: `## Bearbeidelse og autentisitet

Her er et viktig spørsmål: Hvor "ekte" er Asbjørnsen og Moes eventyr?

De samlet inn muntlige fortellinger, men de bearbeidet dem betydelig. Språket ble jevnet ut. Grovheter ble fjernet. Forskjellige versjoner ble slått sammen til én. Det som ble trykket i bøkene, var ikke ordrett det fortellerene sa - det var en litterær bearbeidelse.

Er dette problematisk? Ja og nei.

På den ene siden mistet vi noe autentisk. De muntlige fortellingene var springende, ujevne, fulle av digresjoner og lokale referanser. Hver forteller hadde sin egen stil. Alt dette ble glattet ut.

På den andre siden skapte Asbjørnsen og Moe noe nytt og verdifullt. Deres eventyrstil ble normgivende for norsk prosa. Uten bearbeidelsen ville eventyrene kanskje ikke blitt lest og elsket av generasjoner. De ville forblitt lokale kuriositeter, ikke nasjonal kulturarv.

Dessuten: All muntlig tradisjon endrer seg. Hver gang et eventyr ble fortalt, ble det litt annerledes. Det fantes aldri én "original" versjon. Asbjørnsen og Moe skapte én versjon blant mange - men den versjonen ble den vi alle kjenner.`,
    },
    {
      id: 'norsk-vg2-3-6-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-6-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvorfor bearbeidet Asbjørnsen og Moe eventyrene de samlet?',
        options: [
          { id: 'a', text: 'Fordi de mente de muntlige versjonene var for kjedelige', isCorrect: false },
          { id: 'b', text: 'For å skape litterær kvalitet og en lesbar, sammenhengende stil', isCorrect: true },
          { id: 'c', text: 'Fordi de ikke forsto dialektene', isCorrect: false },
          { id: 'd', text: 'For å gjøre eventyrene kortere og billigere å trykke', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Muntlige fortellinger er ofte springende og ujevne. Asbjørnsen og Moe bearbeidet stoffet for å skape litterær kvalitet - en flytende, lesbar stil som kunne trykkes og spres. Denne stilen ble normgivende for norsk prosa.',
      },
    },
    {
      id: 'norsk-vg2-3-6-n-section5',
      type: 'text',
      content: `## Eventyrenes betydning i dag

Folkeeventyrene lever fortsatt. De leses for barn, de filmatiseres, de refereres til i dagligtale. "Askeladden som kappåt med trollet" ble storfilm i 2017. "Bukkene Bruse" er blant de første fortellingene norske barn møter.

Men eventyrene har også blitt utfordret. Kritikere påpeker at kjønnsrollene er stereotypiske - prinsessen venter passivt på å bli reddet, guttene er handlende helter. Trollene er alltid onde og dumme. Noen eventyr har voldelige eller makabre elementer som moderne foreldre reagerer på.

Samtidig argumenterer forsvarerne for at eventyrene har dypere verdier. De lærer barn at det finnes rettferdighet i verden - at den gode vinner til slutt. De gir trygge rammer for å utforske farlige følelser - redsel for troll, sjalusi mellom søsken. Og de er rett og slett gode fortellinger, med spenning, humor og overraskelser.

Kanskje det viktigste er at eventyrene gir oss et felles referansepunkt. Når vi sier "Snipp, snapp, snute" eller refererer til Askeladden, bruker vi en kulturell forkortelse som de fleste nordmenn forstår. Eventyrene binder oss sammen som et folk - akkurat som Asbjørnsen og Moe håpet for nesten 200 år siden.`,
    },
    {
      id: 'norsk-vg2-3-6-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-6-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva er eventyrenes viktigste funksjon i dag?',
        options: [
          { id: 'a', text: 'Å lære barn å lese og skrive', isCorrect: false },
          { id: 'b', text: 'Å gi trygge rammer for å utforske følelser og skape felles referanser', isCorrect: true },
          { id: 'c', text: 'Å bevare gamle dialekter', isCorrect: false },
          { id: 'd', text: 'Å erstatte moderne underholdning', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Eventyrene gir barn trygge rammer for å utforske vanskelige følelser som frykt og sjalusi. De lærer at rettferdighet seirer. Og de skaper felles kulturelle referanser som binder nordmenn sammen - et fellesskap av fortellinger.',
      },
    },
    {
      id: 'norsk-vg2-3-6-n-summary',
      type: 'text',
      content: `## Oppsummering: Eventyrets kraft

Asbjørnsen og Moe ga Norge noe uvurderlig - en samling fortellinger som har formet norsk kultur og identitet. Her er det viktigste å huske:

**Innsamlingsarbeidet:**
Fra 1830-tallet samlet Asbjørnsen og Moe eventyr fra muntlig tradisjon. De reiste i bygdene og skrev ned det folk fortalte.

**Eventyrstilen:**
De bearbeidet stoffet til en litterær stil som kombinerte folkelig tone med kunstnerisk kvalitet. Denne stilen ble normgivende for norsk prosa.

**Eventyrstrukturen:**
Faste mønstre: "Det var en gang...", tretallets lov, hjelpere og motstandere, lykkelig slutt. Typer: undereventyr, dyreeventyr, skjemteeventyr.

**Askeladden:**
Den norske nasjonalhelten - underdog som vinner gjennom kløkt, nysgjerrighet og godhjertethet. Uttrykker norske verdier som egalitet og list over styrke.

**Bearbeidelse:**
Eventyrene er bearbeidet, ikke ordrett nedskrevet. Dette skapte litterær kvalitet, men endret også det muntlige stoffet.

**Arven:**
Eventyrene lever videre som barnelitteratur, film og kulturelle referanser. De binder oss sammen som et folk.

**Nøkkelord:**
Folkeeventyr, muntlig tradisjon, eventyrstil, Askeladden, tretallets lov, bearbeidelse.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.7 NARRATIV: Ivar Aasen og landsmålet
// ============================================================================

export const CHAPTER_NORSK_VG2_3_7_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-3-7-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '3.7',
  title: 'Ivar Aasen og landsmålet',
  subtitle: 'Narrativ versjon',
  description: 'Møt bondesønnen som skapte et helt nytt skriftspråk og forandret Norge for alltid.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gjøre rede for historisk bakgrunn for språksituasjonen i Norge',
    'bruke fagspråk til å beskrive særtrekk ved norsk sammenlignet med svensk, dansk og norrønt',
  ],
  linkedChapterId: 'norsk-vg2-3-7',
  content: [
    {
      id: 'norsk-vg2-3-7-n-intro',
      type: 'text',
      content: `## Mannen som skapte et språk

Tenk deg at du er en fattig bondesønn fra Sunnmøre. Du har knapt gått på skole, men du har et øre for språk som overgår alt professorer kan lære. Du hører at folk snakker annerledes enn de skriver, at språket i bøkene er fremmed, at ditt eget morsmål regnes som mindreverdig.

Hva gjør du? Du bestemmer deg for å skape et nytt skriftspråk. Alene. Fra bunnen av.

Dette er historien om Ivar Aasen (1813-1896), en av de mest enestående skikkelsene i norsk historie. Med minimal formell utdanning, men med genial språkbegavelse, vandret han gjennom Norge, samlet dialekter, og konstruerte det som i dag heter nynorsk.

I dette kapittelet skal vi følge Aasens reise - fra den lille gården på Sunnmøre til plassen i språkhistorien. Vi skal forstå hvorfor han gjorde det han gjorde, hvordan han gjorde det, og hvorfor det fortsatt betyr noe.`,
    },
    {
      id: 'norsk-vg2-3-7-n-section1',
      type: 'text',
      content: `## Fra bondegutt til språkforsker

Ivar Aasen vokste opp på en liten gård i Ørsta på Sunnmøre. Foreldrene døde tidlig, og han måtte klare seg selv. Han hadde bare noen få års skolegang, men leste alt han kom over. Og han hørte. Han hørte hvordan folk snakket - de rytmene, ordene, bøyningene som gjorde sunnmørsdialekten til noe unikt.

På den tiden var all offisiell skriving på dansk. Det var språket i kirken, i skolen, i bøkene. Men det var ikke språket folk snakket. Mellom det skrevne og det talte gapte en avgrunn.

For Aasen var dette mer enn et praktisk problem. Det var et spørsmål om verdighet. Hvorfor skulle norske bønder måtte skrive på et fremmed språk? Hvorfor skulle deres egen tale regnes som simpel og ukultivert?

I 1842 fikk Aasen stipend til å reise rundt i Norge og samle dialekter. Det ble begynnelsen på et livsverk. Med notatbok og utrettelig nysgjerrighet vandret han fra bygd til bygd. Han snakket med bønder, fiskere, tjenestefolk. Han skrev ned ord, bøyningsformer, uttale. Han sammenlignet dialektene med hverandre og med det gamle norrøne språket.`,
    },
    {
      id: 'norsk-vg2-3-7-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-7-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvorfor var språksituasjonen i Norge et problem for folk som Aasen?',
        options: [
          { id: 'a', text: 'Fordi det var for mange dialekter å lære', isCorrect: false },
          { id: 'b', text: 'Fordi skriftspråket (dansk) var fremmed for vanlige folk', isCorrect: true },
          { id: 'c', text: 'Fordi ingen kunne lese og skrive', isCorrect: false },
          { id: 'd', text: 'Fordi Norge ikke hadde noen litteratur', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'I 1814 var skriftspråket i Norge dansk - et språk som var fremmed for de fleste nordmenn, særlig på bygdene. Folk snakket norske dialekter, men måtte skrive på et språk de opplevde som fremmed. For Aasen var dette et spørsmål om verdighet og nasjonal identitet.',
      },
    },
    {
      id: 'norsk-vg2-3-7-n-section2',
      type: 'text',
      content: `## Vitenskapelig metode

Det som gjør Aasens arbeid så imponerende, er metoden. Han var ikke bare en drømmer med en visjon - han var en vitenskapsmann som samlet data, analyserte mønstre, og bygde teori på empiri.

Aasen reiste systematisk gjennom landet. Han dekket mesteparten av Sør-Norge, fra kyst til innland. Overalt noterte han det folk sa. Han laget ordlister, grammatikkoversikter, uttalenotater. Materialet vokste til tusenvis av sider.

Deretter sammenlignet han. Han så at visse trekk gikk igjen i mange dialekter, mens andre var lokale særheter. Han fant at de dialektene som lå lengst fra byene - særlig på Vestlandet og i dalene - hadde bevart mest fra det gamle norrøne språket.

Ut fra dette konstruerte han landsmålet. Han laget en "normalform" - et skriftspråk som ikke var noen bestemt dialekt, men som bygde på fellestrekkene i de mest opprinnelige dialektene. Forbindelsen til norrønt ga språket historisk legitimitet.

I 1848 publiserte han "Det norske Folkesprogs Grammatik" og i 1850 "Ordbog over det norske Folkesprog". Disse verkene var banebrytende. Aldri før hadde noen beskrevet norske dialekter så grundig og systematisk.`,
    },
    {
      id: 'norsk-vg2-3-7-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-7-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hvilket prinsipp la Aasen til grunn for landsmålet?',
        options: [
          { id: 'a', text: 'At det skulle ligne mest mulig på svensk', isCorrect: false },
          { id: 'b', text: 'At det skulle bygge på dialektene som hadde bevart mest fra norrønt', isCorrect: true },
          { id: 'c', text: 'At det skulle baseres på dialekten i Christiania', isCorrect: false },
          { id: 'd', text: 'At det skulle være identisk med dansk', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Aasen prioriterte de dialektene som hadde bevart mest fra det gamle norrøne språket - særlig vestnorske og midtnorske dialekter. Forbindelsen til norrønt ga landsmålet historisk legitimitet og viste at norsk var et eget språk med lang historie, ikke bare en forringet form for dansk.',
      },
    },
    {
      id: 'norsk-vg2-3-7-n-section3',
      type: 'text',
      content: `## Dikteren Aasen

Aasen var ikke bare språkforsker - han var også dikter. Og dette var viktig. Ved å skrive dikt på landsmålet, beviste han at det nye språket var mer enn en vitenskapelig konstruksjon. Det var et fullverdig litterært språk.

Hans mest kjente dikt er "Nordmannen" (1863), som senere ble satt til melodi og ble en uoffisiell nasjonalsang:

"Mellom bakkar og berg ut med havet / heve nordmannen fenget sin heim, / der han sjølv heve tuftene gravat / og sett sjølv sine hus oppå deim."

Diktet beskriver nordmannen som en fri bonde som lever i pakt med naturen - det nasjonalromantiske idealet i poetisk form. Språket er landsmål, men tilgjengelig og vakkert.

Motstanderne av landsmål hevdet at det var et "kunstig" språk som ingen snakket. Aasens dikt var svaret: Se, dette språket kan synge. Det kan uttrykke følelser, skjønnhet, nasjonal stolthet. Det er ikke et laboratorieprodukt - det er levende poesi.

Denne kombinasjonen av vitenskap og kunst er typisk for Aasen. Han var systematiker og drømmer på én gang, forskeren som også var dikter.`,
    },
    {
      id: 'norsk-vg2-3-7-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-7-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hvorfor var det viktig at Aasen også skrev dikt?',
        options: [
          { id: 'a', text: 'Fordi han trengte penger fra bokutgivelser', isCorrect: false },
          { id: 'b', text: 'Fordi det beviste at landsmålet var et fullverdig litterært språk', isCorrect: true },
          { id: 'c', text: 'Fordi han ikke likte å skrive grammatikk', isCorrect: false },
          { id: 'd', text: 'Fordi dikterne Wergeland og Welhaven ba ham om det', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Motstanderne hevdet at landsmålet var "kunstig" og ubrukelig. Ved å skrive vakre dikt på landsmålet, beviste Aasen at det var et fullverdig språk som kunne uttrykke poesi, følelser og nasjonal identitet. "Nordmannen" ble en uoffisiell nasjonalsang.',
      },
    },
    {
      id: 'norsk-vg2-3-7-n-section4',
      type: 'text',
      content: `## Aasen mot Knudsen

Aasen var ikke den eneste som ville fornorske skriftspråket. Læreren Knud Knudsen (1812-1895) hadde en helt annen strategi.

Knudsen mente at løsningen var å gradvis fornorske det danske skriftspråket. Man kunne endre skrivemåten slik at den nærmet seg norsk uttale. Man kunne innføre norske ord der de fantes. Slik kunne man bevare kontinuiteten med det eksisterende skriftspråket mens man langsomt gjorde det mer norsk.

De to strategiene hadde ulike fordeler og ulemper:

Aasens vei ga et språk med sterk nasjonal identitet og historiske røtter til norrønt. Men det krevde at folk lærte noe nytt fra bunnen av.

Knudsens vei bygde på det folk allerede brukte og var enklere å innføre. Men resultatet beholdt mye dansk og manglet den samme historiske forankringen.

Norge endte opp med begge. Aasens landsmål ble til nynorsk. Knudsens fornorskede dansk ble til bokmål. I dag har vi to offisielle skriftspråk - et unikt fenomen i verden.`,
    },
    {
      id: 'norsk-vg2-3-7-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-7-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva var forskjellen mellom Aasens og Knudsens strategi?',
        options: [
          { id: 'a', text: 'Aasen ville beholde dansk, Knudsen ville lage nytt språk', isCorrect: false },
          { id: 'b', text: 'Aasen ville bygge nytt fra dialektene, Knudsen ville gradvis fornorske dansk', isCorrect: true },
          { id: 'c', text: 'Aasen fokuserte på tale, Knudsen på skrift', isCorrect: false },
          { id: 'd', text: 'Det var ingen forskjell - de samarbeidet', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Aasen ville bygge et helt nytt skriftspråk fra bunnen av, basert på dialektene. Knudsen ville ta utgangspunkt i det eksisterende dansk-norske skriftspråket og gradvis fornorske det. Begge strategier ble fulgt, og Norge fikk to skriftspråk: nynorsk (fra Aasen) og bokmål (fra Knudsen).',
      },
    },
    {
      id: 'norsk-vg2-3-7-n-section5',
      type: 'text',
      content: `## Aasens arv

Ivar Aasen døde i 1896, over 80 år gammel. Han rakk å se landsmålet bli et av Norges to offisielle skriftspråk (jamstillingsvedtaket 1885), men de store seirene - og konfliktene - kom senere.

Gjennom 1900-tallet fortsatte språkstriden. Det ble forsøk på å smelte de to språkene sammen til "samnorsk", noe som møtte voldsom motstand fra begge sider. I dag har vi akseptert at Norge har to skriftspråk, og debatten har roet seg - selv om sidemålsspørsmålet fortsatt vekker følelser.

Aasens betydning er vanskelig å overvurdere. Han ga Norge et språk som var genuint norsk, med røtter i folkemålet og i historien. Han viste at dialektene ikke var "simpelt bondespråk", men en rik kulturarv verdt å bevare. Han inspirerte målrørsla, som kjempet for nynorsk gjennom hele 1900-tallet.

Og kanskje viktigst: Han ga nordmenn en bevissthet om språk som få andre folk har. Vi diskuterer språk, krangler om språk, bryr oss om språk. Den dialekttoleransen Norge er kjent for - at folk kan bruke dialekt i nesten alle sammenhenger - har røtter i Aasens arbeid.

Bondesønnen fra Sunnmøre forandret hvordan nordmenn tenker om sitt eget språk. Det er en ganske utrolig prestasjon.`,
    },
    {
      id: 'norsk-vg2-3-7-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-7-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva er kanskje Aasens viktigste arv i dag?',
        options: [
          { id: 'a', text: 'At alle nordmenn skriver nynorsk', isCorrect: false },
          { id: 'b', text: 'At nordmenn har stor bevissthet om språk og toleranse for dialekter', isCorrect: true },
          { id: 'c', text: 'At det ikke lenger finnes språkdebatt i Norge', isCorrect: false },
          { id: 'd', text: 'At dansk er blitt forbudt i Norge', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Aasens viktigste arv er kanskje ikke nynorsk i seg selv, men den språkbevisstheten han skapte. Nordmenn diskuterer og bryr seg om språk på en måte som er uvanlig. Dialekttoleransen - at folk kan bruke dialekt i nesten alle sammenhenger - har røtter i Aasens arbeid for folkemålets verdighet.',
      },
    },
    {
      id: 'norsk-vg2-3-7-n-summary',
      type: 'text',
      content: `## Oppsummering: Mannen som skapte et språk

Ivar Aasen er en av de mest enestående skikkelsene i norsk historie. Her er det viktigste å huske:

**Bakgrunn:**
Fattig bondesønn fra Sunnmøre, selvlært språkgeni. Så at skriftspråket (dansk) var fremmed for folk, og bestemte seg for å gjøre noe med det.

**Metoden:**
Vitenskapelig innsamling av dialekter over hele landet. Systematisk sammenligning. Konstruksjon av en "normalform" basert på de dialektene som hadde bevart mest fra norrønt.

**Hovedverker:**
"Det norske Folkesprogs Grammatik" (1848), "Ordbog over det norske Folkesprog" (1850). Diktet "Nordmannen" (1863).

**Aasen vs. Knudsen:**
To strategier: Aasen ville bygge nytt fra dialektene. Knudsen ville gradvis fornorske dansk. Norge fikk begge: nynorsk og bokmål.

**Betydning:**
Ga Norge et genuint norsk skriftspråk. Viste at dialektene var verdifulle. Skapte språkbevissthet og dialekttoleranse som fortsatt preger Norge.

**Nøkkelord:**
Landsmål, nynorsk, dialekter, norrønt, jamstillingsvedtaket, språkbevissthet.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.8 NARRATIV: Folkeviser
// ============================================================================

export const CHAPTER_NORSK_VG2_3_8_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-3-8-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '3.8',
  title: 'Folkeviser',
  subtitle: 'Narrativ versjon',
  description: 'Lytt til stemmene fra middelalderen - ballader om kjærlighet, død og møter med det overnaturlige.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske tekster fra romantikken og nasjonalromantikken',
    'lese norrøne tekster i oversettelse og sammenligne med nyere tekster',
    'analysere og tolke tekster med bruk av fagbegreper',
  ],
  linkedChapterId: 'norsk-vg2-3-8',
  content: [
    {
      id: 'norsk-vg2-3-8-n-intro',
      type: 'text',
      content: `## Stemmer fra fortiden

I mørke vinterkvelder, mens stormen ulte utenfor, samlet folk seg rundt ilden. Noen tok fram hardingfela. Og så begynte sangene - de gamle visene som hadde gått fra munn til munn i hundrevis av år.

Folkeviser. Ballader. Fortellinger sunget i vers, med melodi og refreng. De handlet om riddere og prinsesser, om troll og bergtaking, om kjærlighet så sterk at den kunne drepe, om død så vakker at den kunne elske.

Disse visene er kanskje Norges eldste litteratur som fortsatt lever. De ble skapt i middelalderen, kanskje så tidlig som 1100-tallet, og de overlevde i muntlig tradisjon helt til 1800-tallet, da samlere som Magnus Brostrup Landstad reddet dem fra glemselen.

I dette kapittelet skal vi lytte til disse stemmene fra fortiden. Vi skal høre om Draumkvedet og Margit Hjukse, om overnaturlige møter og menneskelig lengsel. Og vi skal forstå hvorfor disse visene fortsatt berører oss.`,
    },
    {
      id: 'norsk-vg2-3-8-n-section1',
      type: 'text',
      content: `## Hva er en folkevise?

En folkevise er ikke bare et dikt - det er en sang. Den ble ikke skrevet for å leses stille, men for å fremføres med melodi, ofte med dans. Og den ble ikke diktet av en navngitt forfatter, men tilhørte fellesskapet.

Folkeviser har en karakteristisk form. De er delt inn i strofer, ofte fire linjer i hver. Etter hver strofe kommer et omkved - et refreng som gjentas. Omkvedet kan virke underlig, nesten meningsløst: "- for de soli kjem -" eller "- å vi sòm elska upp i Lilja -". Men det skaper stemning, gir pusterom, og binder visen sammen.

Innholdet er dramatisk. Folkeviser forteller historier - om kjærlighet og svik, om helter og troll, om død og etterliv. De hopper rett inn i handlingen uten forklaring. De fokuserer på høydepunktene og dropper det trivielle. Denne "dramatiske konsentrasjonen" gjør visene intense og spennende.

Og de bruker formler. Visse vendinger går igjen: "Han sadlet sin gangare grå", "Tidlig om morgonen". Dette er ikke manglende fantasi - det er mnemoteknikk. Formlene hjalp sangeren å huske viser som kunne ha titalls strofer.`,
    },
    {
      id: 'norsk-vg2-3-8-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-8-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva er et "omkved" i en folkevise?',
        options: [
          { id: 'a', text: 'Tittelen på visen', isCorrect: false },
          { id: 'b', text: 'Et refreng som gjentas etter hver strofe', isCorrect: true },
          { id: 'c', text: 'Det siste verset i visen', isCorrect: false },
          { id: 'd', text: 'En forklaring av handlingen', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Omkved (refreng) er en fast del som gjentas etter hver strofe. Det kan være naturbilder, nonsens-linjer eller tematiske kommentarer. Omkvedet skaper stemning, gir pusterom mellom strofene, og hjelper sangeren å huske visen.',
      },
    },
    {
      id: 'norsk-vg2-3-8-n-section2',
      type: 'text',
      content: `## Draumkvedet - mesterstykket

Blant alle norske folkeviser rager én over de andre: Draumkvedet. Dette er ikke bare en vakker ballade - det er visjonsdiktning på høyeste nivå, sammenlignet med Dantes "Den guddommelige komedie" i folkeviseform.

Visen forteller om Olav Åsteson som legger seg til å sove julekvelden og ikke våkner før trettendagen - tretten dager senere. I søvnen reiser han til de dødes rike. Han ser himmel og helvete, møter engler og demoner, vitner dommedag.

Når han våkner, forteller han om det han har sett:

"Eg hev vakje uti trettan nættar / og sovi meg so lang ei svevn, / eg hev vori i himmerik / og dult hjå bånine små."

Det som gjør Draumkvedet unikt, er blandingen av norrøn og kristen mytologi. Her møter vi Gjallarbrua fra norrøn tro side om side med kristent frelsebudskap. Førkristne skikkelser som Grutte Gråskjegg opptrer sammen med engler. Visen viser hvordan gammel og ny tro levde sammen i folkelig bevissthet.

Draumkvedet ble samlet fra tradisjonsbærere i Telemark på 1800-tallet. Forskerne antar at det kan stamme helt fra 1200-tallet. I over 600 år hadde det levd i folkemunne, overlevert fra sang til sang.`,
    },
    {
      id: 'norsk-vg2-3-8-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-8-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva gjør Draumkvedet så unikt?',
        options: [
          { id: 'a', text: 'Det er det korteste av alle folkeviser', isCorrect: false },
          { id: 'b', text: 'Det blander norrøn og kristen mytologi i visjonsdiktning', isCorrect: true },
          { id: 'c', text: 'Det handler bare om kjærlighet', isCorrect: false },
          { id: 'd', text: 'Det ble skrevet på dansk', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Draumkvedet er unikt fordi det er visjonsdiktning - en reise til de dødes rike - som blander norrøne elementer (Gjallarbrua, Grutte Gråskjegg) med kristne (himmel, helvete, dommedag). Denne blandingen viser hvordan gammel og ny tro levde sammen i folkelig bevissthet.',
      },
    },
    {
      id: 'norsk-vg2-3-8-n-section3',
      type: 'text',
      content: `## Trollviser - møter med det overnaturlige

En av de mest fascinerende kategoriene av folkeviser er trollvisene. De handler om møter mellom mennesker og overnaturlige vesener - troll, bergtatte, nøkken, huldra. Og de berører noe dypt i oss: frykten for - og dragningen mot - det ukjente.

"Margit Hjukse" er en klassisk trollvise. Margit sitter og arbeider. Plutselig åpner berget seg, og ut rir en vakker ung mann. Han frister henne til å følge med inn i berget:

"Berget det let seg upp sò vidt, / der reid so fager ein svein der ut."

Bergmannen er forførende. Han rider en stolt hest, han binder den ved den grønne linden - symbolet på kjærlighet og møtested. Han tilbyr Margit rikdom, skjønnhet, evig ungdom. Men prisen er å forlate menneskeverdenen for alltid.

Trollvisene handler om grenser. Grensen mellom det kjente og det ukjente, det trygge og det farlige, det daglige og det magiske. De advarer: Vær forsiktig med det forlokkende. Men de uttrykker også en lengsel: Kanskje finnes det en annen verden, vakrere enn vår?`,
    },
    {
      id: 'norsk-vg2-3-8-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-8-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva handler trollvisene om på et dypere plan?',
        options: [
          { id: 'a', text: 'Hvordan man dreper troll', isCorrect: false },
          { id: 'b', text: 'Grenser mellom det kjente og ukjente, fristelse og fare', isCorrect: true },
          { id: 'c', text: 'Bare underholdning uten dypere mening', isCorrect: false },
          { id: 'd', text: 'Vitenskapelige forklaringer på naturfenomener', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Trollvisene handler om grenser - mellom menneske- og trollverden, mellom det trygge og farlige, mellom det daglige og magiske. De advarer mot det forlokkende, men uttrykker også en lengsel mot noe annet og vakrere.',
      },
    },
    {
      id: 'norsk-vg2-3-8-n-section4',
      type: 'text',
      content: `## Innsamlingen - redningsmenn og tradisjonsbærere

Folkeviser levde i minnet. De ble ikke skrevet ned, men sunget fra generasjon til generasjon. Dette betydde at de kunne forsvinne - når de siste som husket dem døde, var visene tapt for alltid.

På 1800-tallet begynte samlere å innse dette. Magnus Brostrup Landstad (1802-1880) var den viktigste. Han reiste i Telemark og andre bygder, oppsøkte gamle mennesker som fortsatt husket visene, og skrev ned det de sang. I 1853 ga han ut "Norske Folkeviser" - en samling på over hundre ballader.

Men de egentlige heltene var tradisjonsbærerne - de anonyme bøndene og tjenestefolkene som hadde holdt visene levende. Noen av dem, som Anne Aasen fra Telemark, kunne dusinvis av viser utenat. Uten dem hadde vi ingenting å samle.

Innsamlingen kom i siste liten. Mange tradisjonsbærere var gamle. Industrialiseringen og moderniseringen forandret bygdelivet. Radioen og grammofonen erstattet den lokale sangtradisjonen. Hadde samlerne ventet enda noen tiår, ville mye vært tapt.

Slik er folkevisesamlingen et kulturelt redningsarbeid. Den bevarte noe uvurderlig - stemmer fra en verden som var i ferd med å forsvinne.`,
    },
    {
      id: 'norsk-vg2-3-8-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-8-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvem var den viktigste samleren av norske folkeviser?',
        options: [
          { id: 'a', text: 'Henrik Wergeland', isCorrect: false },
          { id: 'b', text: 'Peter Christen Asbjørnsen', isCorrect: false },
          { id: 'c', text: 'Magnus Brostrup Landstad', isCorrect: true },
          { id: 'd', text: 'Ivar Aasen', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Magnus Brostrup Landstad (1802-1880) ga ut "Norske Folkeviser" i 1853 - den viktigste samlingen av norske folkeviser. Han reiste i Telemark og andre bygder og skrev ned visene som tradisjonsbærerne husket. Uten hans arbeid hadde mange viser gått tapt.',
      },
    },
    {
      id: 'norsk-vg2-3-8-n-section5',
      type: 'text',
      content: `## Folkeviser i dag

Lever folkevisene fortsatt? Ja og nei.

Få synger dem hjemme ved peisen lenger. Den muntlige tradisjonen som holdt dem levende i 600 år, er brutt. De fleste kjenner ikke melodiene, ikke tekstene, ikke konteksten.

Men visene har fått nytt liv i andre former. Artister som Gåte og Wardruna bruker folkevisetradisjonen i moderne musikk. Sinikka Langeland og Odd Nordstoga synger gamle viser for nye publikum. Draumkvedet fremføres fortsatt i Telemark hver jul.

Akademikere forsker på visene og utgir kritiske utgaver. Skoleverket inkluderer dem i pensum. Festivaler og kulturarrangementer holder tradisjonen synlig.

Og kanskje viktigst: Temaene i folkevisene er universelle. Kjærlighet og tap, fristelse og fall, møtet med det ukjente - dette berører oss fortsatt. Folkevisene ga form til følelser vi alle kjenner.

Så selv om vi ikke lenger synger dem ved peisen, lever folkevisene videre. De er en del av vår kulturelle hukommelse, en bro til forfedrene, en påminnelse om at mennesker alltid har fortalt historier for å forstå verden og seg selv.`,
    },
    {
      id: 'norsk-vg2-3-8-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-8-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvordan lever folkevisene videre i dag?',
        options: [
          { id: 'a', text: 'De synges fortsatt ved alle norske peiser', isCorrect: false },
          { id: 'b', text: 'Gjennom moderne artister, akademisk forskning og kulturarrangementer', isCorrect: true },
          { id: 'c', text: 'De er helt glemt og har ingen betydning', isCorrect: false },
          { id: 'd', text: 'Bare gjennom Hollywood-filmer', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Den muntlige tradisjonen er brutt, men folkevisene lever videre på nye måter: Artister som Gåte og Wardruna bruker dem i moderne musikk. Akademikere forsker på dem. Festivaler holder tradisjonen synlig. Og de universelle temaene - kjærlighet, tap, det ukjente - berører oss fortsatt.',
      },
    },
    {
      id: 'norsk-vg2-3-8-n-summary',
      type: 'text',
      content: `## Oppsummering: Sangene som overlevde

Folkeviser er Norges eldste levende litteratur. Her er det viktigste å huske:

**Hva er en folkevise?**
Fortellende sanger fra middelalderen, overlevert muntlig. Strofer med omkved (refreng), dramatisk handling, faste formler.

**Typer:**
Ridderballader (adelskap, kjærlighet), kjempeviser (helter mot troll), trollviser (møter med overnaturlige), historiske viser (virkelige hendelser).

**Draumkvedet:**
Mesterstykket - en visjonsdiktning om reise til de dødes rike. Blander norrøn og kristen mytologi. Kanskje fra 1200-tallet.

**Trollviser:**
Handler om grenser mellom menneske- og trollverden. Advarer og lokker samtidig. "Margit Hjukse" er klassisk eksempel.

**Innsamlingen:**
Landstad samlet viser fra tradisjonsbærere på 1800-tallet. Redningsmenn som bevarte noe uvurderlig i siste liten.

**I dag:**
Den muntlige tradisjonen er brutt, men visene lever videre gjennom moderne artister, forskning og kulturarrangementer.

**Nøkkelord:**
Folkevise, ballade, omkved, tradisjonsbærer, Draumkvedet, trollvise, Landstad.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.9 NARRATIV: Språkdebatten på 1800-tallet
// ============================================================================

export const CHAPTER_NORSK_VG2_3_9_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-3-9-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '3.9',
  title: 'Språkdebatten på 1800-tallet',
  subtitle: 'Narrativ versjon',
  description: 'Dykk ned i Norges lengste kulturkamp - striden om hva som er ekte norsk språk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gjøre rede for historisk bakgrunn for språksituasjonen i Norge',
    'reflektere over språklige varianter i Norge og holdninger til dem',
  ],
  linkedChapterId: 'norsk-vg2-3-9',
  content: [
    {
      id: 'norsk-vg2-3-9-n-intro',
      type: 'text',
      content: `## Norges lengste krangel

Ingen annen strid har vart så lenge eller engasjert så mange i Norge som språkstriden. Den begynte på 1800-tallet og pågår fortsatt - om enn i mildere former. Generasjoner har kranglet om hva som er "ekte" norsk, hvilke ord som bør brukes, og om sidemål skal være obligatorisk.

Hvorfor betyr språk så mye for oss? Fordi språk handler om mer enn kommunikasjon. Det handler om identitet. Hvem er vi? Hvor kommer vi fra? Hvem tilhører vi? Språk er en måte å svare på disse spørsmålene.

I dette kapittelet skal vi dykke inn i språkstridens historie. Vi skal forstå hvorfor den oppsto, hvorfor den ble så intens, og hvorfor den fortsatt preger Norge. For å forstå dagens språksituasjon, må vi først forstå fortiden.`,
    },
    {
      id: 'norsk-vg2-3-9-n-section1',
      type: 'text',
      content: `## Utgangspunktet: Et land uten eget skriftspråk

I 1814 ble Norge selvstendig etter 400 år under dansk styre. Men én ting hadde ikke endret seg: Skriftspråket var fortsatt dansk. All offisiell kommunikasjon, alle lover, alle bøker - alt var på dansk.

Var dette et problem? Det kommer an på hvem du spør.

For de dannede i byene var det kanskje ikke så ille. De snakket allerede et språk som lå nær dansken - en "dannet dagligtale" med dansk ordforråd og norsk uttale. For dem var overgangen mellom tale og skrift ganske glidende.

Men for bøndene på bygdene var det annerledes. De snakket norske dialekter som skilte seg kraftig fra dansk. For dem var skriftspråket fremmed - nesten et annet språk. Å lære å skrive betydde å lære noe helt nytt, ikke bare å skrive ned det man sa.

Dette skapte en kløft. Mellom by og land. Mellom elite og folk. Mellom dem som behersket skriftspråket og dem som ikke gjorde det. Og denne kløften ble utgangspunktet for språkstriden.`,
    },
    {
      id: 'norsk-vg2-3-9-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-9-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvorfor var det danske skriftspråket et problem for bøndene?',
        options: [
          { id: 'a', text: 'Fordi de ikke kunne lese i det hele tatt', isCorrect: false },
          { id: 'b', text: 'Fordi det lå langt fra dialektene deres - skrift og tale var svært forskjellig', isCorrect: true },
          { id: 'c', text: 'Fordi dansk var vanskeligere enn andre språk', isCorrect: false },
          { id: 'd', text: 'Fordi de foretrakk å skrive på svensk', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'For bøndene på bygdene var det danske skriftspråket nesten et fremmed språk. De snakket norske dialekter som skilte seg kraftig fra dansk. Å lære å skrive betydde å lære noe helt nytt, ikke bare å skrive ned det man allerede sa.',
      },
    },
    {
      id: 'norsk-vg2-3-9-n-section2',
      type: 'text',
      content: `## To veier - to verdener

Som vi så i kapittelet om Ivar Aasen, fantes det to hovedstrategier for å løse språkproblemet:

Aasens vei var radikal. Han ville bygge et helt nytt skriftspråk fra bunnen av, basert på dialektene. Resultatet - landsmålet - var genuint norsk, med røtter i norrønt, men det var også nytt og ukjent for alle.

Knudsens vei var gradvis. Han ville ta utgangspunkt i det danske skriftspråket og langsomt fornorske det. Resultatet beholdt kontinuiteten med tradisjonen, men det beholdt også mye dansk.

Disse to strategiene ble til to leirer, to identiteter, to verdensbilder.

Landsmålsfolkene - ofte kalt målfolk - var gjerne fra bygdene, fra Vestlandet og dalene. De støttet Venstre-bevegelsen og bondeopprøret mot embetsmannsstaten. For dem handlet språk om demokrati: Folkets språk mot elitens. De så dansken som et fremmedspråk påtvunget av dansk overherredømme.

Riksmålsfolkene var gjerne fra byene, fra overklassen og borgerskapet. De støttet mer konservative krefter. For dem handlet språk om kultur: Kontinuitet med europeisk tradisjon. De så landsmålet som kunstig og primitivt.

Slik ble språkstriden også en klassekamp, en geografisk konflikt, en strid om Norges retning.`,
    },
    {
      id: 'norsk-vg2-3-9-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-9-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hvorfor ble språkstriden også en klassekamp?',
        options: [
          { id: 'a', text: 'Fordi språk ikke betyr noe', isCorrect: false },
          { id: 'b', text: 'Fordi de to leirene representerte ulike sosiale grupper og verdensbilder', isCorrect: true },
          { id: 'c', text: 'Fordi alle var enige om målet, bare ikke metoden', isCorrect: false },
          { id: 'd', text: 'Fordi striden egentlig handlet om penger', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Landsmålsfolk var ofte fra bygdene og støttet demokratiske reformer. Riksmålsfolk var ofte fra byene og overklassen. De to språksynene ble knyttet til ulike sosiale grupper, ulik geografi og ulike politiske syn - språk ble et symbol på dypere konflikter.',
      },
    },
    {
      id: 'norsk-vg2-3-9-n-section3',
      type: 'text',
      content: `## Høydepunktene i striden

Språkstriden hadde mange dramatiske høydepunkter:

1885 kom jamstillingsvedtaket: Stortinget vedtok at landsmål og riksmål var likestilte offisielle språk. Dette var en seier for målrørsla, men det var også begynnelsen på en ny konflikt - nå skulle de to språkene leve side om side.

1907, 1917 og 1938 kom store rettskrivningsreformer som forsøkte å nærme de to språkene til hverandre. Tanken om "samnorsk" - at de to språkene gradvis skulle smelte sammen til ett - dominerte språkpolitikken. Begge språk fikk såkalte "tilnærmingsformer" som skulle gjøre dem likere.

1938-reformen var den mest radikale. Den innførte former som mange oppfattet som påtvunget og unaturlige. Bøker ble skrevet med ord folk ikke kjente igjen. Motstanden vokste.

På 1950-tallet eksploderte konflikten. Foreldre i Oslo nektet å godta skolebøker med samnorske former. Det ble arrangert aksjoner, underskriftskampanjer, til og med bokbål. "Foreldreaksjonen mot samnorsk" ble en massebevegelse.

Resultatet? Samnorsktanken ble gradvis forlatt. I dag har vi akseptert at Norge har to skriftspråk, og at de ikke kommer til å smelte sammen.`,
    },
    {
      id: 'norsk-vg2-3-9-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-9-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva var "samnorsk"?',
        options: [
          { id: 'a', text: 'Et tredje norsk språk ved siden av nynorsk og bokmål', isCorrect: false },
          { id: 'b', text: 'Tanken om at de to skriftspråkene gradvis skulle smelte sammen til ett', isCorrect: true },
          { id: 'c', text: 'Et forslag om å gå tilbake til norrønt', isCorrect: false },
          { id: 'd', text: 'Et dialektord for "samme"', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Samnorsk var tanken om at bokmål og nynorsk gradvis skulle nærme seg hverandre og til slutt smelte sammen til ett språk. Dette dominerte norsk språkpolitikk fra ca. 1917 til 1970, men mislyktes på grunn av voldsom motstand fra begge sider.',
      },
    },
    {
      id: 'norsk-vg2-3-9-n-section4',
      type: 'text',
      content: `## Argumentene som fortsatt brukes

Språkdebatten har alltid vært full av sterke argumenter og følelser. Mange av argumentene fra 1800-tallet brukes fortsatt i dag:

For nynorsk sies det: Det er det ekte norske språket, med røtter i folkemålet og norrønt. Det gir verdighet til dialektene. Det representerer en demokratisk tradisjon. Å lære nynorsk gir språklig rikdom og kulturell forståelse.

Mot nynorsk sies det: Det er kunstig konstruert, ikke naturlig vokst. Det brukes av få. Det er upraktisk å ha to skriftspråk. Sidemålsundervisningen tar tid fra viktigere ting.

For bokmål sies det: Det er det mest brukte, det praktiske valget. Det har kontinuitet med litterær tradisjon. Det er det naturlige skriftspråket for de fleste.

Mot bokmål sies det: Det er fortsatt for dansk. Det representerer overklassen og byene. Det mangler den historiske forankringen nynorsk har.

Legg merke til at argumentene handler om mer enn praktiske hensyn. De handler om identitet, historie, rettferdighet. Det er derfor debatten blir så følelsesladet. Når noen kritiserer "ditt" språk, føles det som et angrep på deg selv.`,
    },
    {
      id: 'norsk-vg2-3-9-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-9-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvorfor blir språkdebatten så følelsesladet?',
        options: [
          { id: 'a', text: 'Fordi nordmenn liker å krangle', isCorrect: false },
          { id: 'b', text: 'Fordi språk handler om identitet, ikke bare praktiske hensyn', isCorrect: true },
          { id: 'c', text: 'Fordi det er mye penger involvert', isCorrect: false },
          { id: 'd', text: 'Fordi politikerne gjør det til et problem', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Språk handler om mer enn kommunikasjon - det handler om hvem vi er, hvor vi kommer fra, hvem vi tilhører. Når noen kritiserer "ditt" språk, kan det føles som et angrep på din identitet. Derfor blir debatter om språk så intense.',
      },
    },
    {
      id: 'norsk-vg2-3-9-n-section5',
      type: 'text',
      content: `## Situasjonen i dag

I dag har språkstriden roet seg, men den er ikke over. Her er noen nøkkeltall:

Nynorsk er hovedmål for ca. 12% av elevene i grunnskolen. Andelen har sunket over tid. Nynorsk er sterkest på Vestlandet og i enkelte dalstrøk.

Bokmål er hovedmål for ca. 88% av elevene og dominerer i medier, næringsliv og offentlighet.

Sidemål er fortsatt obligatorisk i skolen, men under kontinuerlig debatt. Jevnlig kommer forslag om å gjøre det valgfritt.

Dialekttoleransen er høy. Nordmenn kan bruke dialekt i nesten alle sammenhenger - noe som er uvanlig i mange land. Dette er kanskje språkstridens viktigste arv.

Språkrådet overvåker begge skriftspråk og gir anbefalinger, men har begrenset makt.

Hva vil fremtiden bringe? Ingen vet. Nynorsken er under press, men har engasjerte forsvarere. Dialektene blomstrer, men møter også standardisering. Engelsk påvirker begge skriftspråk. Språket endrer seg alltid - spørsmålet er hvem som får styre retningen.`,
    },
    {
      id: 'norsk-vg2-3-9-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-9-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva er kanskje språkstridens viktigste arv?',
        options: [
          { id: 'a', text: 'At alle nordmenn skriver likt', isCorrect: false },
          { id: 'b', text: 'At Norge har svært høy toleranse for dialektbruk', isCorrect: true },
          { id: 'c', text: 'At det ikke lenger finnes språkdebatt', isCorrect: false },
          { id: 'd', text: 'At nynorsk har blitt dominerende', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Nordmenn kan bruke dialekt i nesten alle sammenhenger - noe som er uvanlig i mange land. Denne dialekttoleransen har røtter i språkstridens kamp for folkemålets verdighet. Uansett hva man mener om nynorsk og bokmål, er dette en verdifull arv.',
      },
    },
    {
      id: 'norsk-vg2-3-9-n-summary',
      type: 'text',
      content: `## Oppsummering: Språk og identitet

Språkstriden er Norges lengste kulturkamp. Her er det viktigste å huske:

**Bakgrunnen:**
I 1814 var skriftspråket dansk. For bønder på bygdene var det fremmed. En kløft oppsto mellom dem som behersket skriftspråket og dem som ikke gjorde det.

**To strategier:**
Aasen ville bygge nytt fra dialektene (landsmål/nynorsk). Knudsen ville gradvis fornorske dansk (riksmål/bokmål). Begge ble fulgt - Norge fikk to språk.

**Mer enn språk:**
Striden ble klassekamp, geografisk konflikt og strid om nasjonal retning. By mot land. Elite mot folk.

**Høydepunkter:**
Jamstillingsvedtaket (1885), reformene (1907, 1917, 1938), foreldreaksjonen mot samnorsk (1950-tallet). Samnorsktanken mislyktes.

**I dag:**
Nynorsk: ca. 12% hovedmål. Bokmål dominerer. Sidemål debatteres. Dialekttoleransen er høy.

**Arven:**
Språkbevissthet og dialekttoleranse. To skriftspråk og mange dialekter gir et rikt språklig repertoar.

**Nøkkelord:**
Språkstrid, landsmål, riksmål, jamstillingsvedtaket, samnorsk, sidemål, dialekttoleranse.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.10 NARRATIV: Romantikkens etterliv
// ============================================================================

export const CHAPTER_NORSK_VG2_3_10_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-3-10-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '3.10',
  title: 'Romantikkens etterliv',
  subtitle: 'Narrativ versjon',
  description: 'Se hvordan romantikkens ideer lever videre i 17. mai-feiring, friluftsliv og moderne populærkultur.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske tekster fra romantikken og nasjonalromantikken',
    'sammenligne tekster fra ulike tider og vurdere hvordan de forholder seg til hverandre',
    'reflektere over hvordan tekster framstiller møter mellom ulike kulturer eller kulturelle tradisjoner',
  ],
  linkedChapterId: 'norsk-vg2-3-10',
  content: [
    {
      id: 'norsk-vg2-3-10-n-intro',
      type: 'text',
      content: `## De lever fortsatt

Romantikken er over. Den varte fra ca. 1800 til 1850, og verden har forandret seg radikalt siden da. Vi har elektrisitet, internett, romfart. Romantikernes verden av hestevogner og gårdsliv virker fjern.

Men romantikerne lever fortsatt. Ikke som personer, selvfølgelig, men som ideer. Hver gang du tar på deg bunaden 17. mai, føler du romantikkens pust. Hver gang du går tur i fjellet og kjenner "den gode følelsen", tenker du romantiske tanker. Hver gang du ser en naturfilm og føler ærefrykt, opplever du det sublime.

Romantikkens ideer har blitt så selvfølgelige at vi knapt legger merke til dem. De er blitt en del av luften vi puster. I dette kapittelet skal vi gjøre dem synlige igjen. Vi skal se hvordan romantikken former moderne kultur - fra 17. mai til Game of Thrones, fra turistreklame til miljøbevegelsen.`,
    },
    {
      id: 'norsk-vg2-3-10-n-section1',
      type: 'text',
      content: `## 17. mai - romantikk i praksis

17. mai-feiringen er nasjonalromantikk omsatt til handling. Tenk på elementene: Barnetog gjennom gatene. Flagg som vaier. Bunader i alle farger. Taler om frihet og fedreland. Sanger om Norge. Is og pølser og gledesrus.

Alt dette har røtter i romantikken. Ideen om at vi er et folk med felles historie. Troen på at denne historien er verdt å feire. Symbolene - flagget, bunaden, sangen - som binder oss sammen.

Henrik Wergeland var sentral i å forme 17. mai-feiringen. Fra 1820-tallet arbeidet han for barnetogene. Han mente at barna var nasjonens fremtid, og at de skulle lære å elske fedrelandet gjennom festlig markering.

Interessant nok var feiringen lenge omstridt. De konservative mente at folkelige feiringer var farlige og upassende. Først utover 1800-tallet ble 17. mai den samlende nasjonaldagen vi kjenner i dag.

I dag feirer vi uten å tenke på historien. Men hver gang vi heiser flagget eller går i tog, fortsetter vi en romantisk tradisjon som begynte for over 200 år siden.`,
    },
    {
      id: 'norsk-vg2-3-10-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-10-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvem var sentral i å forme 17. mai-feiringen med barnetog?',
        options: [
          { id: 'a', text: 'Johan Sebastian Welhaven', isCorrect: false },
          { id: 'b', text: 'Henrik Wergeland', isCorrect: true },
          { id: 'c', text: 'Ivar Aasen', isCorrect: false },
          { id: 'd', text: 'Edvard Grieg', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Henrik Wergeland arbeidet fra 1820-tallet for å gjøre 17. mai til en folkelig fest med barnetog. Han mente at barna var nasjonens fremtid og at de skulle lære å elske fedrelandet gjennom festlig markering. Feiringen var lenge omstridt før den ble den samlende nasjonaldagen vi kjenner.',
      },
    },
    {
      id: 'norsk-vg2-3-10-n-section2',
      type: 'text',
      content: `## Friluftsliv - å gå seg inn i romantikken

"Ut på tur, aldri sur." Dette mottoet oppsummerer en nasjonal ideologi som har dype romantiske røtter. Ideen om at nordmenn elsker uteliv, at vi hører hjemme i naturen, at en skitur eller fjellvandring gjør oss til bedre mennesker - alt dette kommer fra romantikken.

Fridtjof Nansen ble et nasjonalikon delvis fordi han kombinerte vitenskapelig ekspedisjon med romantisk naturopplevelse. Han var polarhelten som også skrev poetisk om naturens storhet. Hans bilder av ski over Grønland og is mot horisonten ble symboler på norsk identitet.

I dag er friluftslivet institusjonalisert. Allemannsretten gir alle tilgang til naturen. Den Norske Turistforening (DNT) vedlikeholder turstier og hytter over hele landet. Hyttekultur er nærmest en nasjonal religion.

Men legg merke til de romantiske elementene: Vi søker til naturen for å "finne oss selv", for å komme bort fra stresset i hverdagen, for å oppleve noe "ekte". Dette er romantikkens naturlengsel i moderne drakt. Fjellet er fortsatt et åndelig sted, selv for oss som ikke tror på romantikkens panteisme.`,
    },
    {
      id: 'norsk-vg2-3-10-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-10-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hvilke romantiske ideer ligger bak friluftslivsidealet?',
        options: [
          { id: 'a', text: 'At naturen er farlig og bør unngås', isCorrect: false },
          { id: 'b', text: 'At vi finner oss selv i naturen, bort fra hverdagens stress', isCorrect: true },
          { id: 'c', text: 'At friluftsliv er god mosjon', isCorrect: false },
          { id: 'd', text: 'At vi bør bo i byer', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Friluftslivsidealet bygger på romantiske ideer om at naturen er en kilde til åndelig fornyelse. Vi søker til fjellet for å "finne oss selv", for å oppleve noe "ekte" i motsetning til hverdagens stress. Dette er romantikkens naturlengsel i moderne drakt.',
      },
    },
    {
      id: 'norsk-vg2-3-10-n-section3',
      type: 'text',
      content: `## Fantasy og middelalderromantikk

Hvis du liker Ringenes Herre, Game of Thrones eller Skyrim, liker du romantikk. Fantasy-sjangeren er kanskje den tydeligste arven fra romantikken i moderne populærkultur.

J.R.R. Tolkien, skaperen av Midgard, var dypt inspirert av romantikken og norrøn litteratur. Hans elverspråk bygger på norrøne mønstre. Landskapene hans minner om romantiske naturmalerier. Historien hans handler om kamp mellom godt og ondt, om helter som reiser gjennom vill natur, om en fortid som er vakrere enn nåtiden.

Det samme gjelder Game of Thrones/A Song of Ice and Fire. Middelalderske slott, drager, magi, ridderære - alt dette er romantiske motiver. Seriens mørke tone legger til noe nytt, men grunnstrukturen er romantisk.

Og tenk på all norrøn mytologi i populærkulturen: Marvel's Thor, God of War-spillene, Vikings-serien. Vi er fascinert av vikingtiden - delvis fordi romantikerne lærte oss å være det. De skapte myten om vikingen som fri, modig og i pakt med naturen.

Kanskje appellerer fantasy fordi den tilbyr noe vår moderne verden mangler: mening, eventyr, storslåtte landskap, tydelige verdier. Dette er moderne Sehnsucht - lengsel etter en annen verden.`,
    },
    {
      id: 'norsk-vg2-3-10-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-10-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hvorfor kan fantasy-sjangeren kalles romantikkens arv?',
        options: [
          { id: 'a', text: 'Fordi fantasy-forfattere bare kopierer romantiske tekster', isCorrect: false },
          { id: 'b', text: 'Fordi sjangeren bruker romantiske motiver som middelalder, natur og kamp mellom godt og ondt', isCorrect: true },
          { id: 'c', text: 'Fordi fantasy er gammeldags', isCorrect: false },
          { id: 'd', text: 'Fordi romantikerne oppfant drager', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Fantasy-sjangeren bruker romantiske motiver: middelaldernostalgi, vill natur, kampen mellom godt og ondt, helter på reise. Tolkien var direkte inspirert av romantikken og norrøn litteratur. Sjangerens popularitet kan ses som moderne Sehnsucht - lengsel etter en annen, mer meningsfull verden.',
      },
    },
    {
      id: 'norsk-vg2-3-10-n-section4',
      type: 'text',
      content: `## Turistreklame - romantikk til salgs

"Opplev det ekte Norge." Denne typen budskap fra turistnæringen er ren nasjonalromantikk. La oss analysere hva som ligger i det:

"Det ekte" antyder at det finnes noe autentisk og opprinnelig som moderne liv har ødelagt. Dette er en romantisk idé - at sivilisasjonen er fordervet, men at naturen og tradisjonen bevarer noe rent.

"Norge" presenteres som fjorder, fjell, nordlys - det sublime landskapet som romantikerne feiret. Byene er fraværende. Det moderne Norge med olje, industri og innvandring finnes ikke.

Bildene viser ofte mennesker i natur, gjerne med tradisjonelle elementer: en rød hytte, en gammel kirke, kanskje til og med en bunad. Fortiden og naturen smelter sammen til et bilde av tidløst norsk.

Er dette problematisk? Det kommer an på perspektivet. På den ene siden er det god reklame som lokker turister. På den andre siden forsterker det et forenklet bilde av Norge som ekskluderer det moderne og flerkulturelle.

Poenget her er ikke å fordømme turistreklamen, men å gjenkjenne den romantiske arven. Når vi selger Norge med fjorder og fjell, fortsetter vi et prosjekt som begynte på 1800-tallet.`,
    },
    {
      id: 'norsk-vg2-3-10-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-10-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva er problematisk med å markedsføre Norge med bare fjorder og fjell?',
        options: [
          { id: 'a', text: 'At fjordene ikke er vakre nok', isCorrect: false },
          { id: 'b', text: 'At det ekskluderer det moderne og flerkulturelle Norge', isCorrect: true },
          { id: 'c', text: 'At det er for dyrt å fotografere', isCorrect: false },
          { id: 'd', text: 'At turistene ikke liker natur', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Når Norge markedsføres bare med fjorder, fjell og tradisjoner, utelates det moderne Norge med byer, industri og mangfold. Bildet som skapes er nasjonalromantisk - vakkert, men forenklet. Det kan virke ekskluderende for dem som ikke passer inn i dette bildet.',
      },
    },
    {
      id: 'norsk-vg2-3-10-n-section5',
      type: 'text',
      content: `## Kritisk blikk på arven

Romantikkens etterliv er ikke bare positivt. Vi må også se de problematiske sidene:

Nasjonalromantikken definerte "det norske" på en måte som ekskluderte mange. Byer, samer, romanifolk, innvandrere - alle falt utenfor det bildet som ble skapt. Når noen i dag snakker om "norske verdier" eller "ekte norsk kultur", bruker de ofte denne ekskluderende arven.

Idealiseringen av fortiden kan gjøre oss blinde for nåtidens problemer. Nostalgi er behagelig, men den kan hindre oss i å se virkeligheten klart. Bøndene på 1800-tallet levde ikke i et idyllisk paradis - de var fattige og ufrie.

Romantiseringen av naturen kan bli problematisk når den brukes til å skyve folk vekk fra verneområder, eller når den overser at mennesker alltid har påvirket naturen.

Men romantikkens arv har også positive sider. Ærefrykten for naturen kan motivere miljøvern. Fellesskapsfølelsen kan binde folk sammen. Kulturarven gir oss røtter i en rotløs verden.

Kanskje det viktigste er å være bevisst. Å vite at mye av det vi tar for gitt - 17. mai, friluftslivet, naturbildene - er arv fra romantikken. Og å spørre: Hvem inkluderes? Hvem ekskluderes? Hva idealiseres, og hva overses?`,
    },
    {
      id: 'norsk-vg2-3-10-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-10-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvorfor er det viktig å være bevisst om romantikkens arv?',
        options: [
          { id: 'a', text: 'For å kunne fordømme alt som er gammelt', isCorrect: false },
          { id: 'b', text: 'For å se både de positive og problematiske sidene ved arven', isCorrect: true },
          { id: 'c', text: 'For å kunne ignorere historien', isCorrect: false },
          { id: 'd', text: 'For å slutte å feire 17. mai', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Bevissthet om romantikkens arv hjelper oss å se både det positive (fellesskap, naturrespekt) og det problematiske (ekskludering, idealisering). Vi kan feire kulturarven og stille kritiske spørsmål samtidig. Hvem inkluderes? Hvem ekskluderes?',
      },
    },
    {
      id: 'norsk-vg2-3-10-n-summary',
      type: 'text',
      content: `## Oppsummering: De lever fortsatt

Romantikkens ideer har blitt en del av vår kulturelle luft. Her er det viktigste å huske:

**17. mai:**
Nasjonalromantikk i praksis. Flagg, bunader, taler om fedreland. Wergeland var sentral i å forme feiringen.

**Friluftsliv:**
Romantisk naturlengsel i moderne drakt. "Ut på tur, aldri sur." Naturen som kilde til selvfinning og fornyelse.

**Fantasy:**
Romantikkens motiver i populærkultur. Middelaldernostalgi, vill natur, kamp mellom godt og ondt. Tolkien, Game of Thrones, norrøn mytologi.

**Turistreklame:**
"Det ekte Norge" selges med fjorder og fjell. Romantisk nasjonalisme som markedsføringsstrategi.

**Kritisk blikk:**
Romantikkens arv har problematiske sider: ekskludering, idealisering, nostalgi som hindrer endring. Men også positive: naturrespekt, fellesskap, kulturelle røtter.

**Bevissthet:**
Det viktigste er å være bevisst. Se arven, verdsett den, men still kritiske spørsmål: Hvem inkluderes? Hvem ekskluderes?

**Nøkkelord:**
Romantikkens etterliv, nasjonalsymboler, friluftsliv, fantasy, turistreklame, kritisk bevissthet.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.11 NARRATIV: Litterær analyse - modeller og metoder
// ============================================================================

export const CHAPTER_NORSK_VG2_3_11_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-3-11-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '3.11',
  title: 'Litterær analyse - modeller og metoder',
  subtitle: 'Narrativ versjon',
  description: 'Lær å knekke tekstenes koder med SVIRP-modellen og andre analyseverktøy.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke fagspråk og kunnskap om litterære virkemidler i analyse av tekster',
    'lese og tolke tekster fra romantikken i kulturhistorisk kontekst',
    'utforske og reflektere over hvordan tekster fra romantikken framstiller menneske, natur og samfunn',
  ],
  linkedChapterId: 'norsk-vg2-3-11',
  content: [
    {
      id: 'norsk-vg2-3-11-n-intro',
      type: 'text',
      content: `## Tekstens hemmeligheter

Har du noen gang lest et dikt og tenkt: "Dette er fint, men jeg skjønner ikke helt hva det betyr"? Eller sittet i en norsktime og lurt på hvordan andre finner all denne meningen i noen få linjer tekst?

Litterær analyse er ikke magi. Det er en ferdighet som kan læres. Og som alle ferdigheter handler det om å ha de riktige verktøyene og vite hvordan man bruker dem.

I dette kapittelet skal vi åpne verktøykassen. Vi skal lære om SVIRP-modellen - et enkelt system for å analysere alle typer tekster. Vi skal se på spesifikke teknikker for å analysere dikt og prosa. Og vi skal øve på å gå fra løse inntrykk til begrunnet tolkning.

For det viktigste i litterær analyse er ikke å ha "riktig" svar. Det viktigste er å kunne begrunne det du mener, med bevis fra teksten. La oss lære hvordan.`,
    },
    {
      id: 'norsk-vg2-3-11-n-section1',
      type: 'text',
      content: `## SVIRP - din beste venn

SVIRP er en analysemodell som fungerer på alle tekster. Bokstavene står for:

S - Sjanger: Hva slags tekst er dette? Dikt, novelle, essay, tale? Sjangeren skaper forventninger. Et dikt leses annerledes enn en avisartikkel.

V - Virkemidler: Hvilke grep bruker forfatteren? Metaforer, gjentakelser, kontraster, rim? Virkemidler er forfatterens verktøy for å skape effekt.

I - Innhold: Hva handler teksten om? Både på overflaten (handlingen) og dypere (temaet). Hva er de viktigste motivene?

R - Relasjon/kontekst: Når og hvor ble teksten skrevet? Av hvem? Til hvem? Hvordan påvirker dette forståelsen?

P - Personlig tolkning: Hva betyr teksten? For deg og generelt. Hva er budskapet? Er teksten fortsatt relevant?

SVIRP er ikke en tvangstrøye. Du trenger ikke følge den slavisk. Men den sikrer at du dekker alle viktige aspekter og ikke bare hopper til det første du tenker på.`,
    },
    {
      id: 'norsk-vg2-3-11-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-11-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva står bokstavene i SVIRP for?',
        options: [
          { id: 'a', text: 'Stemning, Vers, Inspirasjon, Rim, Prosa', isCorrect: false },
          { id: 'b', text: 'Sjanger, Virkemidler, Innhold, Relasjon/kontekst, Personlig tolkning', isCorrect: true },
          { id: 'c', text: 'Symbol, Verdi, Ironi, Retorikk, Poesi', isCorrect: false },
          { id: 'd', text: 'Struktur, Vinkel, Idé, Rytme, Perspektiv', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'SVIRP står for Sjanger, Virkemidler, Innhold, Relasjon/kontekst og Personlig tolkning. Dette er en systematisk analysemodell som sikrer at du dekker alle viktige aspekter ved en tekst.',
      },
    },
    {
      id: 'norsk-vg2-3-11-n-section2',
      type: 'text',
      content: `## Virkemidler - mer enn en liste

Den vanligste feilen i litterær analyse er å liste opp virkemidler uten å forklare effekten. "Diktet inneholder metaforer og allitterasjon" sier ingenting interessant. Spørsmålet er: Hva gjør disse virkemidlene med teksten?

La oss ta et eksempel. I Wergelands "Til Foraaret" finner vi linjen: "Og mit Hierte slaaer og banker, / Og dets vilde glade Tanker / Vrimle alt som en Bi-Stok ud!"

Her er en simile: Tankene sammenlignes med en biskverm som svermer ut. Men hva er effekten? Jo, bildet viser at dikterens tanker er mange, ukontrollerbare, fulle av liv og energi - akkurat som bier om våren. Similen uttrykker vårkjensla på en måte som abstrakte ord ikke kunne.

Slik bør du alltid tenke: Ikke bare "hva er dette virkemiddelet", men "hva gjør det med teksten og leseren".

Noen spørsmål å stille:
- Hvorfor valgte forfatteren akkurat dette bildet?
- Hva hadde gått tapt om virkemiddelet var borte?
- Hvordan støtter virkemiddelet tekstens tema?`,
    },
    {
      id: 'norsk-vg2-3-11-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-11-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva er den vanligste feilen når man analyserer virkemidler?',
        options: [
          { id: 'a', text: 'Å finne for få virkemidler', isCorrect: false },
          { id: 'b', text: 'Å bruke feil fagtermer', isCorrect: false },
          { id: 'c', text: 'Å liste opp virkemidler uten å forklare effekten', isCorrect: true },
          { id: 'd', text: 'Å lese teksten for mange ganger', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Å bare si at "teksten inneholder metaforer" er ikke analyse - det er oppramsing. Det viktige er å forklare EFFEKTEN: Hva gjør metaforen med leseren? Hvordan støtter den tekstens tema? Hvorfor valgte forfatteren akkurat dette bildet?',
      },
    },
    {
      id: 'norsk-vg2-3-11-n-section3',
      type: 'text',
      content: `## Kontekst - teksten i sin tid

Ingen tekst eksisterer i et vakuum. For å forstå tekster fra romantikken må vi vite noe om tiden de ble skrevet i.

Tenk på Wergelands dikt om våren. Hvis vi bare leser ordene, ser vi naturglede. Men hvis vi vet at Wergeland skrev i en tid da Norge var en ung nasjon som søkte sin identitet, at naturen ble et symbol på det norske, at romantikerne trodde på besjelet natur - da får diktet flere lag.

Kontekst inkluderer:
- Historisk kontekst: Hva skjedde i verden da teksten ble skrevet?
- Kulturell kontekst: Hvilke ideer og verdier preget tiden?
- Forfatterens bakgrunn: Hvem var denne personen? Hva kjempet hen for?
- Sjangertradisjonen: Hvordan forholder teksten seg til sin sjanger?

Men pass på: Kontekst skal belyse teksten, ikke erstatte den. Du skal ikke skrive et essay om romantikken som tilfeldigvis nevner et dikt. Du skal bruke konteksten til å forstå diktet bedre.`,
    },
    {
      id: 'norsk-vg2-3-11-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-11-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hvorfor er kontekst viktig i litterær analyse?',
        options: [
          { id: 'a', text: 'Fordi læreren liker å høre om historie', isCorrect: false },
          { id: 'b', text: 'Fordi tekster får nye betydningslag når vi forstår tiden de ble skrevet i', isCorrect: true },
          { id: 'c', text: 'Fordi kontekst erstatter tekstanalyse', isCorrect: false },
          { id: 'd', text: 'Fordi eldre tekster ikke kan forstås uten kontekst', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Kontekst belyser teksten og gir den nye betydningslag. Når vi vet at Wergeland skrev under nasjonsbyggingen, forstår vi naturlyrikken hans annerledes. Men kontekst skal belyse teksten, ikke erstatte den.',
      },
    },
    {
      id: 'norsk-vg2-3-11-n-section4',
      type: 'text',
      content: `## Fra notater til tekst

Du har lest diktet, fylt ut SVIRP-skjemaet, funnet virkemidler og kontekst. Nå skal du skrive. Men hvordan?

Det viktigste: Du trenger et hovedpoeng. Hva er det viktigste du vil si om teksten? Dette blir din tese, påstanden du argumenterer for gjennom hele analysen.

Dårlig: "Jeg skal analysere Wergelands 'Til Foraaret'."
Bedre: "I 'Til Foraaret' uttrykker Wergeland romantikkens naturglede gjennom en eksplosiv stil som speiler vårens livskraft."

Den andre setningen gir deg en retning. Alt du skriver skal støtte denne påstanden.

Deretter: Velg ut. Du har sikkert funnet mange virkemidler og observasjoner. Du kan ikke ha med alt. Velg det som støtter hovedpoenget ditt.

Og til slutt: Sitater som bevis. Hver gang du påstår noe om teksten, vis det med et sitat. "Wergeland bruker gjentakelse for å skape intensitet, som i 'Vaaren, Vaaren, Vaaren kommer!'"`,
    },
    {
      id: 'norsk-vg2-3-11-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-11-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva er det viktigste når du skal skrive en litterær analyse?',
        options: [
          { id: 'a', text: 'Å ha med flest mulig virkemidler', isCorrect: false },
          { id: 'b', text: 'Å skrive lengst mulig', isCorrect: false },
          { id: 'c', text: 'Å ha et tydelig hovedpoeng som du argumenterer for', isCorrect: true },
          { id: 'd', text: 'Å kopiere lærerens eksempelanalyse', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'En god litterær analyse har et tydelig hovedpoeng - en tese som du argumenterer for gjennom hele teksten. Alt du skriver skal støtte denne påstanden, og du bruker sitater fra teksten som bevis.',
      },
    },
    {
      id: 'norsk-vg2-3-11-n-section5',
      type: 'text',
      content: `## Vanlige feil - og hvordan unngå dem

La oss se på noen feller du bør unngå:

Feil 1: Bare oppramsing. "Diktet har metaforer, allitterasjon og gjentakelser." Løsning: Forklar alltid effekten.

Feil 2: Bare parafrase. Du gjenforteller handlingen uten å analysere. "Diktet handler om at våren kommer og dikteren er glad." Løsning: Gå dypere - hva betyr dette? Hvordan skapes effekten?

Feil 3: Løse påstander. "Wergeland var veldig glad i naturen." Løsning: Bevis med sitater. Hvor i teksten ser vi dette?

Feil 4: Kontekst uten tekst. Du skriver om romantikken generelt, men glemmer det konkrete diktet. Løsning: Koble alltid konteksten til spesifikke elementer i teksten.

Feil 5: "Jeg synes" uten begrunnelse. "Jeg synes dette er et fint dikt." Løsning: Forklar hvorfor. Hva gjør det fint? Pek på konkrete elementer.

Merk: Det er lov å ha en personlig mening. Men i en litterær analyse må meningen begrunnes i teksten. Din lesning er gyldig så lenge du kan vise til bevis.`,
    },
    {
      id: 'norsk-vg2-3-11-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-11-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvordan begrunner du en tolkning i litterær analyse?',
        options: [
          { id: 'a', text: 'Ved å si at læreren sa det', isCorrect: false },
          { id: 'b', text: 'Ved å peke på konkrete elementer og sitater i teksten', isCorrect: true },
          { id: 'c', text: 'Ved å gjenta påstanden mange ganger', isCorrect: false },
          { id: 'd', text: 'Ved å skrive at "alle vet" dette', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'I litterær analyse begrunner du tolkningen din ved å peke på konkrete elementer i teksten - sitater, virkemidler, strukturelle trekk. Din lesning er gyldig så lenge du kan vise til bevis i teksten.',
      },
    },
    {
      id: 'norsk-vg2-3-11-n-summary',
      type: 'text',
      content: `## Oppsummering: Tekstens hemmeligheter avslørt

Litterær analyse er en ferdighet som kan læres. Her er det viktigste å huske:

**SVIRP-modellen:**
S - Sjanger, V - Virkemidler, I - Innhold, R - Relasjon/kontekst, P - Personlig tolkning. Bruk den som sjekkliste, ikke tvangstrøye.

**Virkemidler:**
Ikke bare list opp - forklar effekten. Hva gjør virkemiddelet med teksten og leseren?

**Kontekst:**
Tekster får nye betydningslag når vi forstår tiden de ble skrevet i. Men kontekst skal belyse teksten, ikke erstatte den.

**Hovedpoeng:**
Ha en tydelig tese som du argumenterer for. Velg ut det som støtter hovedpoenget.

**Sitater som bevis:**
Hver gang du påstår noe om teksten, vis det med et sitat.

**Vanlige feil:**
Unngå ren oppramsing, parafrase, løse påstander, kontekst uten tekst, ubegrunnet "jeg synes".

**Nøkkelord:**
SVIRP, virkemidler, kontekst, tese, effekt, begrunnelse, sitat som bevis.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.12 NARRATIV: Litterær debatt og rollespill
// ============================================================================

export const CHAPTER_NORSK_VG2_3_12_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-3-12-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '3.12',
  title: 'Litterær debatt og rollespill',
  subtitle: 'Narrativ versjon',
  description: 'Lev deg inn i fortidens konflikter - bli Wergeland, Welhaven eller Aasen for en dag.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske tekster fra romantikken og nasjonalromantikken',
    'sammenligne tekster fra ulike tider og vurdere hvordan de forholder seg til hverandre',
    'bruke fagspråk og kunnskap om retorikk i samtaler og diskusjoner om norskfaglige emner',
    'skrive kreative tekster med utgangspunkt i tekster fra ulike tider',
  ],
  linkedChapterId: 'norsk-vg2-3-12',
  content: [
    {
      id: 'norsk-vg2-3-12-n-intro',
      type: 'text',
      content: `## Bli en del av historien

Litteraturhistorie kan virke som noe dødt og fjernt - navn og årstall å memorere, tekster skrevet av folk som levde for lenge siden. Men hva om du kunne tre inn i historien? Hva om du kunne bli Wergeland i en opphetet debatt med Welhaven? Eller forsvare landsmålet som Ivar Aasen?

I dette kapittelet inviterer vi deg til å gjøre nettopp det. Gjennom debatt og rollespill skal du leve deg inn i de store konfliktene fra 1800-tallet. Du skal argumentere for standpunkter du kanskje ikke deler, se saker fra flere sider, og oppdage at historiens aktører var levende mennesker med genuine overbevisninger.

Dette er ikke bare gøy (selv om det er det også). Det er en måte å forstå på. Når du må argumentere som Welhaven, forstår du plutselig hvorfor hans synspunkter ga mening for ham. Når du må forsvare landsmålet, oppdager du styrken i Aasens argumenter. Litteraturhistorien blir levende.`,
    },
    {
      id: 'norsk-vg2-3-12-n-section1',
      type: 'text',
      content: `## Dikterstriden: Wergeland mot Welhaven

La oss starte med den mest intense kulturstriden i Norges unge historie: Dikterstriden mellom Henrik Wergeland og Johan Sebastian Welhaven.

Tenk deg Christiania i 1830-årene. Byen summer av debatt. På den ene siden står Wergeland - eksploderende, lidenskapelig, folkelig. Han vil bryte med alt dansk og bygge en genuint norsk kultur. På den andre siden står Welhaven - dempet, ironisk, kultivert. Han vil bevare båndene til europeisk tradisjon.

De to leirene - "patriotene" og "intelligenspartiet" - kranglet i aviser, på kafeer, i salongene. Det ble personlig. Welhaven angrep Wergelands diktning som formløs og overdreven. Wergeland svarte med personlige stikk. Det var nesten dueller.

Men hva handlet striden egentlig om? La oss se på kjernesprøsmålene:

1. Skal Norge skape en helt ny kultur, eller bygge videre på europeisk arv?
2. Er litteraturens oppgave å oppdra folket, eller å være vakker kunst?
3. Hva er viktigst: kraft og følelse, eller form og harmoni?
4. Skal vi dyrke det særnorske, eller det allmennmenneskelige?

Ingen av disse spørsmålene har enkle svar. Begge sider hadde poenger. Og det er nettopp det som gjør striden interessant å gå inn i.`,
    },
    {
      id: 'norsk-vg2-3-12-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-12-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva var kjernen i dikterstriden mellom Wergeland og Welhaven?',
        options: [
          { id: 'a', text: 'Hvem som var den beste dikteren teknisk sett', isCorrect: false },
          { id: 'b', text: 'Om norsk kultur skulle bryte med Europa eller bygge på europeisk arv', isCorrect: true },
          { id: 'c', text: 'Hvem som skulle bli professor ved universitetet', isCorrect: false },
          { id: 'd', text: 'Om dikt skulle skrives på vers eller prosa', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Dikterstriden handlet om Norges kulturelle retning. Wergeland ville bryte med dansk/europeisk arv og skape noe genuint norsk. Welhaven mente Norge trengte europeisk dannelse og kvalitetskrav. Striden handlet om nasjonens identitet, ikke bare om litteratur.',
      },
    },
    {
      id: 'norsk-vg2-3-12-n-section2',
      type: 'text',
      content: `## Språkstriden: Aasen mot Knudsen

En annen stor konflikt var språkstriden. Også her sto to visjoner mot hverandre.

Ivar Aasen ville bygge et helt nytt skriftspråk fra dialektene. Han argumenterte: Det danske skriftspråket er fremmed for det norske folket. Bare et språk fra folkemålet kan være ekte norsk. Å skrive på dansk er å være en slave.

Knud Knudsen ville fornorske dansken gradvis. Han argumenterte: Det danske skriftspråket har vært i bruk i 400 år og er innarbeidet. Gradvis endring er tryggere enn revolusjon. Vi kan bevare det beste fra tradisjonen mens vi gjør det mer norsk.

Hvem hadde rett? Det er lett å si begge i etterkant - vi fikk jo begge språkene. Men på 1800-tallet var dette et genuint valg. Folk måtte ta stilling. Og argumentene de brukte sier mye om verdiene de hadde.

Legg merke til hvordan språkargumentene også handler om identitet, demokrati og makt. Hvem skal definere hva som er "ekte norsk"? Folket eller eliten? Bygda eller byen? Fortiden eller nåtiden?`,
    },
    {
      id: 'norsk-vg2-3-12-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-12-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hvilket argument brukte Aasen for landsmålet?',
        options: [
          { id: 'a', text: 'At dansk var lettere å lære', isCorrect: false },
          { id: 'b', text: 'At det danske skriftspråket var fremmed for det norske folket', isCorrect: true },
          { id: 'c', text: 'At landsmål var billigere å trykke', isCorrect: false },
          { id: 'd', text: 'At europeisk kultur var verdiløs', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Aasens hovedargument var at det danske skriftspråket var fremmed for vanlige nordmenn. Folk snakket dialekter, men måtte skrive på et språk de ikke kjente. For Aasen handlet dette om verdighet og frihet - "å skrive i et fremmed Sprog er at være en Slave".',
      },
    },
    {
      id: 'norsk-vg2-3-12-n-section3',
      type: 'text',
      content: `## Rollespill: Hvordan gjør du det?

Nå kommer det morsomme: Å faktisk spille disse rollene. Her er noen tips:

Først, gjør research. Du kan ikke spille Wergeland uten å vite noe om ham. Hva trodde han på? Hvordan snakket han? Hvilke argumenter brukte han?

Deretter, lev deg inn. Prøv å forstå hvorfor denne personen mente det hen mente. Ikke bare lær argumentene utenat - føl dem. Hvorfor ga dette mening i denne tiden?

Bruk tidens språk. Wergeland ville ikke sagt "basically" eller "liksom". Han ville brukt høystemte formuleringer, kanskje litt overdrevne etter vår smak. Men det var stilen.

Vær tro mot standpunktet. Selv om du personlig er uenig, skal du forsvare rollen din. Det er nettopp dette som gir innsikt - å måtte argumentere for noe du kanskje ikke tror på.

Noen rollespill-scenarioer:
1. Wergeland og Welhaven debatterer norsk litteraturs fremtid
2. Aasen forsvarer landsmålet mot en kritiker
3. En kvinne på 1700-tallet argumenterer for at kvinner bør få publisere
4. Snorre forklarer hvordan han skriver sagaer`,
    },
    {
      id: 'norsk-vg2-3-12-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-12-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva er det viktigste når du gjør litterært rollespill?',
        options: [
          { id: 'a', text: 'Å bare lese opp sitater fra læreboken', isCorrect: false },
          { id: 'b', text: 'Å leve deg inn i personen og forstå hvorfor hen mente det hen mente', isCorrect: true },
          { id: 'c', text: 'Å bruke moderne slang for å gjøre det morsomt', isCorrect: false },
          { id: 'd', text: 'Å alltid være enig med rollen din', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Det viktigste i rollespill er innlevelse - å prøve å forstå hvorfor denne personen mente det hen mente. Det gir deg innsikt i historiske perspektiver og lærer deg å se saker fra flere sider, selv når du personlig er uenig.',
      },
    },
    {
      id: 'norsk-vg2-3-12-n-section4',
      type: 'text',
      content: `## Debatt: Argumentere for og imot

Debatt er en annen måte å utforske stoffet på. Her handler det ikke om å spille en historisk person, men om å argumentere for et standpunkt - gjerne et du ikke selv deler.

Noen debatt-påstander å prøve:

"Wergeland var en bedre dikter enn Welhaven." - Eller var han det? Hva legger vi i "bedre"? Kan man i det hele tatt sammenligne så forskjellige diktere?

"Nasjonalromantikken var et nødvendig prosjekt for et nytt land." - Eller var den ekskluderende og idealiserende fra starten?

"Vi bør fjerne sidemålsundervisningen." - Eller er den avgjørende for kulturell forståelse og språklig rikdom?

"Romantikkens naturideal er mer relevant i dag enn noensinne." - Eller er det utdatert nostalgi som hindrer handling?

Når du debatterer, husk: Målet er ikke å "vinne", men å utforske. De beste debattene er de der begge sider lærer noe nytt. Lytt til motargumentene. Kanskje de har et poeng?`,
    },
    {
      id: 'norsk-vg2-3-12-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-12-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva er målet med litterær debatt?',
        options: [
          { id: 'a', text: 'Å bevise at du har rett', isCorrect: false },
          { id: 'b', text: 'Å knuse motstanderen med argumenter', isCorrect: false },
          { id: 'c', text: 'Å utforske ulike perspektiver og lære noe nytt', isCorrect: true },
          { id: 'd', text: 'Å gjenta det læreren sa', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Målet med litterær debatt er ikke å "vinne", men å utforske. Gjennom å argumentere for ulike standpunkter lærer du å se saker fra flere sider. De beste debattene er de der begge sider lærer noe nytt.',
      },
    },
    {
      id: 'norsk-vg2-3-12-n-section5',
      type: 'text',
      content: `## Hvorfor dette er viktig

Du lurer kanskje: Hvorfor skal jeg late som jeg er Wergeland? Hva lærer jeg av det?

For det første: Du husker bedre. Aktiv deltakelse fester seg i minnet på en annen måte enn passiv lesing. Etter å ha "vært" Wergeland i en debatt, glemmer du ham ikke så lett.

For det andre: Du forstår dypere. Å måtte argumentere tvinger deg til å virkelig forstå standpunktet. Du kan ikke spille rollen uten å skjønne logikken bak.

For det tredje: Du ser flere sider. Når du må forsvare noe du er uenig i, oppdager du at motstanderne hadde poenger. Verden blir mer nyansert.

For det fjerde: Du øver på viktige ferdigheter. Å argumentere, lytte, improvisere, ta et perspektiv - alt dette er verdifullt langt utenfor norsktimen.

Og for det femte: Det er gøy. Litteraturhistorien blir levende når du kan tre inn i den. Plutselig er dette ikke bare navn i en bok - det er mennesker du "kjenner".`,
    },
    {
      id: 'norsk-vg2-3-12-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-12-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva lærer du av å argumentere for et standpunkt du er uenig i?',
        options: [
          { id: 'a', text: 'Ingenting - det er bortkastet tid', isCorrect: false },
          { id: 'b', text: 'Å se at motstanderne ofte hadde gode poenger', isCorrect: true },
          { id: 'c', text: 'At du alltid har rett', isCorrect: false },
          { id: 'd', text: 'At alle meninger er like gode', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Når du må forsvare et standpunkt du er uenig i, oppdager du ofte at det har gode poenger. Verden blir mer nyansert. Du forstår at historiens konflikter handlet om genuine uenigheter mellom mennesker med gode intensjoner, ikke bare mellom "riktige" og "gale".',
      },
    },
    {
      id: 'norsk-vg2-3-12-n-summary',
      type: 'text',
      content: `## Oppsummering: Bli en del av historien

Debatt og rollespill gjør litteraturhistorien levende. Her er det viktigste å huske:

**Dikterstriden:**
Wergeland mot Welhaven. Bryte med Europa vs. bygge på europeisk arv. Folkelig kraft vs. kultivert form. Begge hadde poenger.

**Språkstriden:**
Aasen mot Knudsen. Nytt språk fra dialektene vs. gradvis fornorsking av dansk. Handler om identitet, demokrati og makt.

**Rollespill:**
Gjør research, lev deg inn, bruk tidens språk, vær tro mot standpunktet. Innsikten kommer av å føle argumentene, ikke bare lære dem utenat.

**Debatt:**
Målet er å utforske, ikke å "vinne". Lytt til motargumentene. De beste debattene er de der begge sider lærer noe.

**Hvorfor:**
Du husker bedre, forstår dypere, ser flere sider, øver viktige ferdigheter - og det er gøy. Litteraturhistorien blir levende.

**Nøkkelord:**
Dikterstriden, språkstriden, rollespill, debatt, innlevelse, perspektivtaking.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT-ARRAY
// ============================================================================

export const NORSK_VG2_NARRATIV_DEL3_CHAPTERS = [
  CHAPTER_NORSK_VG2_3_1_NARRATIV,
  CHAPTER_NORSK_VG2_3_2_NARRATIV,
  CHAPTER_NORSK_VG2_3_3_NARRATIV,
  CHAPTER_NORSK_VG2_3_4_NARRATIV,
  CHAPTER_NORSK_VG2_3_5_NARRATIV,
  CHAPTER_NORSK_VG2_3_6_NARRATIV,
  CHAPTER_NORSK_VG2_3_7_NARRATIV,
  CHAPTER_NORSK_VG2_3_8_NARRATIV,
  CHAPTER_NORSK_VG2_3_9_NARRATIV,
  CHAPTER_NORSK_VG2_3_10_NARRATIV,
  CHAPTER_NORSK_VG2_3_11_NARRATIV,
  CHAPTER_NORSK_VG2_3_12_NARRATIV,
];
