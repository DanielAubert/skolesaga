/**
 * Norsk VG2 - Narrative versjoner Del 1 (Kapittel 1.1-1.5)
 *
 * Engasjerende, fortellende versjoner av kapitlene om norrøn tid og middelalder,
 * optimalisert for lesing/lytting.
 * Hver narrativ versjon linker tilbake til originalkapittelet via linkedChapterId.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1.1 NARRATIV: Innføring i norrøn tid (800-1350)
// ============================================================================

export const CHAPTER_NORSK_VG2_1_1_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-1-1-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '1.1',
  title: 'Innføring i norrøn tid (800-1350)',
  subtitle: 'Narrativ versjon',
  description: 'Reis tilbake til vikingtiden og oppdag den norrøne kulturen som la grunnlaget for vår litterære arv.',
  estimatedMinutes: 40,
  competenceGoals: [
    'lese norrøne tekster i oversettelse og sammenligne med nyere tekster',
    'bruke fagspråk til å beskrive særtrekk ved norsk sammenlignet med norrønt',
  ],
  linkedChapterId: 'norsk-vg2-1-1',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg2-1-1-n-intro',
      type: 'text',
      content: `## En reise til vikingtiden

Forestill deg at du står ved kysten av Norge en sommerdag i år 850. Havet glitrer i solen, og du ser et langskip gli inn mot land. Skipet er smykket med utskjæringer av draker og slanger, og mennene om bord bærer sverd og skjold. De kommer hjem fra et tokt til fjerne land, kanskje England eller Frankrike, med gods og fortellinger fra en verden de fleste bare har hørt om i kvad og sagn.

Dette er vikingtiden - en epoke som strekker seg fra rundt 800 til 1350, og som vi kaller den norrøne tiden. Det er en av de mest fascinerende periodene i skandinavisk historie, en tid da nordboerne seilte til alle verdenshjørner, skapte en rik litterær kultur, og la grunnlaget for språket og identiteten vi har i dag.

I dette kapittelet skal vi sammen utforske denne verdenen. Du vil møte gudene som vikingene tilbad, forstå samfunnet de levde i, og oppdage hvordan litteraturen deres har overlevd gjennom tusen år for å nå oss i dag. For vikingtiden er ikke bare historie - den lever i språket vårt, i stedsnavnene, i ordene vi bruker, og i fortellingene vi fortsatt forteller.`,
    },

    // ========== SEKSJON 1: Vikingtiden begynner ==========
    {
      id: 'norsk-vg2-1-1-n-section1',
      type: 'text',
      content: `## Da vikingene sjokkerte Europa

Den 8. juni 793 skjedde noe som sendte sjokkbølger gjennom hele det kristne Europa. Vikingskip dukket opp ved klosteret Lindisfarne på en øy utenfor kysten av Nord-England. Munkene som levde der hadde aldri sett noe lignende. Før de rakk å reagere, var kirken plyndret, skatter stjålet, og mange var drept eller tatt til fange.

Denne hendelsen markerer det vi tradisjonelt regner som begynnelsen på vikingtiden. I de påfølgende århundrene spredte vikingene seg over hele den kjente verden. De plyndret klostre i Irland og England, grunnla byer som Dublin og York, seilte nedover elvene i Russland til Konstantinopel, nådde Nord-Afrika og Middelhavet, og var de første europeerne som satte fot i Amerika - fem hundre år før Columbus.

Men vikingene var langt mer enn bare krigere og plyndrere. De var dyktige sjøfarere som bygde skip som kunne krysse verdenshavene. De var handelsmenn som skapte nettverk fra Grønland til Bagdad. De var håndverkere som laget vakre smykker og våpen. Og de var diktere som skapte en litterær tradisjon som fortsatt fascinerer oss.

Vikingtiden avsluttes tradisjonelt med slaget ved Stamford Bridge i 1066, der den norske kongen Harald Hardråde falt i forsøket på å erobre England. Men den norrøne kulturen levde videre, særlig på Island, der sagaene ble nedskrevet i de påfølgende århundrene.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg2-1-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvilken hendelse markerer tradisjonelt begynnelsen på vikingtiden?',
        options: [
          { id: 'a', text: 'Grunnleggelsen av Alltinget på Island i 930', isCorrect: false },
          { id: 'b', text: 'Slaget ved Stamford Bridge i 1066', isCorrect: false },
          { id: 'c', text: 'Angrepet på klosteret Lindisfarne i 793', isCorrect: true },
          { id: 'd', text: 'Kristningen av Norge under Olav Tryggvason', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Angrepet på klosteret Lindisfarne i 793 regnes tradisjonelt som vikingtidenes begynnelse. Dette var det første store vikingangrepet på De britiske øyer og vakte enorm oppmerksomhet i samtiden.',
      },
    },

    // ========== SEKSJON 2: Det norrøne samfunnet ==========
    {
      id: 'norsk-vg2-1-1-n-section2',
      type: 'text',
      content: `## Et samfunn bygget på ære

La oss nå tre inn i det norrøne samfunnet og se hvordan menneskene levde. Det første du ville lagt merke til er at dette var et lagdelt samfunn, men ikke like rigid som det føydale systemet i resten av Europa.

Øverst finner vi kongene og jarlene - de mektigste mennene som hersket over landområder og hadde store hirder av krigere. Under dem kom hirdmennene og hauldene, storbønder med betydelig makt og rikdom. Så hadde vi de frie bøndene, ryggraden i samfunnet, som eide sin egen jord og hadde stemmerett på tinget. Og nederst, dessverre, finner vi trellene - de ufrie som var eid av andre og måtte arbeide uten lønn.

Men det norrøne samfunnet hadde også trekk som var uvanlige for sin tid. Kvinner hadde relativt stor frihet sammenlignet med resten av Europa. De kunne eie jord, de kunne ta ut skilsmisse, og de deltok i religiøse seremonier. Volven, spåkvinnen, hadde stor autoritet i religiøse spørsmål.

I sentrum av samfunnet sto tinget - folkeforsamlingen der frie menn møttes for å avgjøre rettssaker, vedta lover og diskutere felles anliggender. Alltinget på Island, grunnlagt i 930, er faktisk verdens eldste parlament som fortsatt eksisterer. Her ser vi kimen til den demokratiske tradisjonen vi er så stolte av i dag.

Et begrep som er helt sentralt for å forstå vikingtiden er ære. Æren tilhørte ikke bare individet, men hele ætten - slekten din. Hvis noen krenket din ære, var det hele familiens ansvar å gjenopprette den, ofte gjennom hevn. Denne ærekulturen er nøkkelen til å forstå konfliktene i sagalitteraturen.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg2-1-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva var tinget i det norrøne samfunnet?',
        options: [
          { id: 'a', text: 'Et religiøst tempel for gudsdyrkelse', isCorrect: false },
          { id: 'b', text: 'En folkeforsamling for rettssaker og lovvedtak', isCorrect: true },
          { id: 'c', text: 'En handelsplass for vikingene', isCorrect: false },
          { id: 'd', text: 'Et treningsfelt for krigere', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Tinget var folkeforsamlingen der frie menn møttes for å avgjøre rettssaker, vedta lover og diskutere samfunnsspørsmål. Alltinget på Island fra 930 er verdens eldste parlament som fortsatt eksisterer.',
      },
    },

    // ========== SEKSJON 3: Gudene og verdensbildet ==========
    {
      id: 'norsk-vg2-1-1-n-section3',
      type: 'text',
      content: `## Gudenes verden

Før kristendommen kom til Skandinavia, dyrket nordboerne de norrøne gudene. Vi kaller dette ofte den norrøne mytologien, men for vikingene var det ingen myter - det var virkeligheten.

La oss møte noen av de viktigste gudene. Øverst troner Odin, allfaderen, visdomens og krigens gud. Han hersker i Valhall, hallen der de tapre krigerne samles etter døden. Odin ofret sitt ene øye for å få drikke av Mimers brønn og oppnå visdom, og han hengte seg i verdenstreet Yggdrasil i ni dager for å lære runenes hemmeligheter. Han er en gud som søker kunnskap for enhver pris.

Tor er tordenguden, den mest populære guden blant vanlige folk. Med hammeren Mjølner beskytter han menneskene mot jotnene, de kaotiske kreftene som truer verden. Når du hører tordenen rulle, er det Tor som kjører over himmelen i vognen sin.

Frøy er fruktbarhetsguden som hersker over regn, solskinn og jordas grøde. Hans søster Frøya er kjærlighets- og fruktbarhetsgudinnen, men også knyttet til krig og magi. Og så har vi Loke, den mystiske tricksterskikkelsen som er halvt gud, halvt jotun, og som stadig skaper problemer for de andre gudene.

I sentrum av det norrøne verdensbildet står Yggdrasil, verdenstreet. Dette gigantiske asketreet binder sammen de ni verdener: Åsgard der gudene bor, Midgard der vi mennesker lever, Jotunheim der jotnene holder til, og mange flere. Alt henger sammen i et stort kosmisk hele.

Det norrøne verdensbildet var preget av skjebnetro. Nornene - Urd, Verdande og Skuld - spinner skjebnens tråder, og selv gudene kan ikke unnslippe sin skjebne. Alle vet at verden en dag skal gå under i Ragnarok, den endelige kampen mellom guder og jotner. Denne bevisstheten om livets forgjengelighet preger mye av den norrøne litteraturen.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg2-1-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva er Yggdrasil i norrøn kosmologi?',
        options: [
          { id: 'a', text: 'Odins spyd som aldri bommer', isCorrect: false },
          { id: 'b', text: 'Verdenstreet som binder sammen de ni verdener', isCorrect: true },
          { id: 'c', text: 'Tors hammer som alltid kommer tilbake', isCorrect: false },
          { id: 'd', text: 'Broen mellom Åsgard og Midgard', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Yggdrasil er verdenstreet, en gigantisk ask som binder sammen alle de ni verdener i norrøn kosmologi. Det representerer sammenhengen mellom alle deler av tilværelsen.',
      },
    },

    // ========== SEKSJON 4: Fra hedendom til kristendom ==========
    {
      id: 'norsk-vg2-1-1-n-section4',
      type: 'text',
      content: `## Kristendommen kommer

Gradvis gjennom 900- og 1000-tallet skjedde en av de største forandringene i skandinavisk historie: kristningen. Kongene Olav Tryggvason og Olav Haraldsson - Olav den hellige - var sentrale i denne prosessen i Norge, og de var ikke akkurat forsiktige med metodene sine. De brente templer, knuste gudebilder, og truet med død dem som ikke ville la seg døpe.

Kristendommen medførte enorme endringer. Latin kom inn som skriftspråk for kirke og lærdom. Klostre ble etablert der munker kopierte bøker og bevarte kunnskap. Nye litterære sjangre dukket opp - helgenlegender, prekener, bibeloversettelser.

Men her kommer det paradoksale: Det var nettopp de kristne munkene som skrev ned den norrøne litteraturen vi har bevart i dag. De så verdien i å bevare forfedrenes fortellinger, selv om de handlet om hedenske guder og gamle helter. Snorre Sturluson, den mest berømte av disse forfatterne, var en kristen islending som nedtegnet mytene og sagaene med en blanding av fascinasjon og kritisk distanse.

Dette betyr at vi alltid må ha et kildekritisk blikk når vi leser norrøn litteratur. Tekstene ble skrevet ned 200-300 år etter kristningen, av forfattere med kristne verdier og perspektiver. Hva kan ha blitt endret? Hva kan ha blitt utelatt? Hva kan ha blitt lagt til? Disse spørsmålene holder forskere opptatt den dag i dag.

En ting er sikkert: Uten kristendommen og skriftkulturen den brakte med seg, ville vi visst langt mindre om vikingtiden. Det er en av historiens mange ironier.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg2-1-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvorfor er det viktig å ha et kildekritisk blikk når vi leser norrøn litteratur?',
        options: [
          { id: 'a', text: 'Fordi vikingene ikke kunne skrive', isCorrect: false },
          { id: 'b', text: 'Fordi tekstene ble skrevet av kristne forfattere lenge etter vikingtiden', isCorrect: true },
          { id: 'c', text: 'Fordi tekstene er skrevet på et språk ingen forstår', isCorrect: false },
          { id: 'd', text: 'Fordi originaltekstene er gått tapt', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'De norrøne tekstene ble skrevet ned 200-300 år etter kristningen av forfattere med kristne verdier. Vi kan ikke vite sikkert hva som er autentisk førkristent materiale, og forfatterne kan ha endret, utelatt eller tilføyd elementer.',
      },
    },

    // ========== SEKSJON 5: Litteraturens fødsel ==========
    {
      id: 'norsk-vg2-1-1-n-section5',
      type: 'text',
      content: `## Island - litteraturens øy

Hvorfor ble det akkurat Island som ble sentrum for den norrøne litteraturen? Dette er et spørsmål som har fascinert forskere i generasjoner.

Island ble befolket av nordmenn fra slutten av 800-tallet. Mange av de første nybyggerne var høvdinger som flyktet fra Harald Hårfagres forsøk på å samle Norge under én konge. De tok med seg den norrøne kulturen, språket og fortellingene.

På Island skjedde noe spesielt. Øya var isolert nok til at språket bevarte mange arkaiske trekk som forsvant på fastlandet. Samfunnet utviklet en sterk tradisjon for muntlig fortelling - lange vinterkvelden ved ildstedet ble fylt med sagaer og kvad. Og da skriftkulturen kom med kristendommen, var det et ivrig publikum som ønsket å få disse fortellingene nedskrevet.

Den islandske eliten hadde også politiske motiver. Ved å dokumentere forfedrenes bedrifter legitimerte de sin egen makt og status. Sagaene om de første landnåmsmennene viste at de nedstammet fra stolte og ærerike ætter.

Resultatet er et enestående litterært korpus. Vi har eddadiktene - mytologiske og heroiske kvad som gir oss innblikk i gudenes verden. Vi har skaldekvadene - kunstferdig hoffpoesi skrevet av navngitte diktere. Og vi har sagaene - prosafortellinger om konger, islendinger og helter fra fjern fortid.

Denne litteraturen er ikke bare viktig for norsk kulturhistorie. Den regnes som noe av verdenslitteraturens fineste. Sagaene har inspirert forfattere fra Ibsen til Tolkien, og den norrøne mytologien lever videre i alt fra Marvel-filmer til dataspill.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg2-1-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvorfor ble det meste av den norrøne litteraturen nedskrevet på Island?',
        options: [
          { id: 'a', text: 'Fordi Norge forbød all litteratur', isCorrect: false },
          { id: 'b', text: 'Fordi Island hadde bedre papir', isCorrect: false },
          { id: 'c', text: 'Fordi Island bevarte språket og hadde sterk fortellertradisjon', isCorrect: true },
          { id: 'd', text: 'Fordi alle de beste forfatterne bodde der', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Island bevarte en arkaisk form av det norrøne språket, hadde en sterk tradisjon for muntlig fortelling, og den islandske eliten ønsket å dokumentere sin historie og kultur. Kirkens skriftkultur gjorde det praktisk mulig.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg2-1-1-n-summary',
      type: 'text',
      content: `## Oppsummering: Den norrøne arven

Du har nå fått en innføring i den norrøne verden. La oss oppsummere det viktigste:

**Vikingtiden (ca. 800-1066):**
Epoken da nordboerne spredte seg over verden som sjøfarere, handelsmenn og krigere. Begynner tradisjonelt med angrepet på Lindisfarne i 793.

**Det norrøne samfunnet:**
Lagdelt samfunn med konger, jarler, frie bønder og treller. Tinget var folkeforsamlingen der viktige beslutninger ble tatt. Ære og ætt var sentrale verdier.

**Den norrøne religionen:**
Gudene Odin, Tor, Frøy, Frøya og Loke. Yggdrasil binder sammen de ni verdener. Skjebnetro preger verdensbildet, og Ragnarok venter til slutt.

**Kristningen:**
Gradvis gjennom 900- og 1000-tallet. Brakte skriftkultur, men tekstene ble skrevet av kristne forfattere - krever kildekritikk.

**Litteraturen:**
Nedskrevet på Island på 1200-1300-tallet. Omfatter eddadikt, skaldekvad og sagaer. Bygger på eldre muntlig tradisjon.

**Nøkkelbegreper:**
Norrønt, blot, ting, ættearv, skjebnetro (ørlǫg), Ragnarok, Valhall, Yggdrasil, edda, saga.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.2 NARRATIV: Eddadikt - gudedikt og heltedikt
// ============================================================================

export const CHAPTER_NORSK_VG2_1_2_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-1-2-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '1.2',
  title: 'Eddadikt - gudedikt og heltedikt',
  subtitle: 'Narrativ versjon',
  description: 'Opplev eddadiktningen - fra Voluspås kosmiske visjoner til Trymskvidas komiske forviklinger.',
  estimatedMinutes: 45,
  competenceGoals: [
    'lese norrøne tekster i oversettelse og sammenligne med nyere tekster',
    'analysere og tolke tekster med bruk av fagbegreper',
  ],
  linkedChapterId: 'norsk-vg2-1-2',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg2-1-2-n-intro',
      type: 'text',
      content: `## Stemmer fra fortiden

Tenk deg at du sitter ved et ildsted på Island en mørk vinternatt for tusen år siden. Utenfor hyler stormen, men inne er det varmt og trygt. Ved ilden sitter en gammel mann, og han begynner å tale. Stemmen hans stiger og synker i et rytmisk mønster, og ordene han sier har blitt fortalt i generasjoner før ham.

"Hør meg, alle hellige ætter," begynner han. "Store og små, Heimdalls sønner!"

Du lytter fascinert mens han forteller om verdens skapelse, om gudenes storhet og fall, om Ragnarok og den nye verden som skal reise seg fra asken. Dette er Voluspå - Volvens spådom - det kanskje viktigste diktet i norrøn litteratur.

Eddadiktene er stemmer fra fortiden som har overlevd gjennom tusen år. De ble overlevert muntlig fra generasjon til generasjon før de endelig ble nedskrevet på Island på 1200-tallet. I dette kapittelet skal du møte disse diktene, forstå hvordan de er bygget opp, og oppdage hva de forteller oss om vikingtidsmenneskenes verdensbilde og verdier.`,
    },

    // ========== SEKSJON 1: Den eldre Edda ==========
    {
      id: 'norsk-vg2-1-2-n-section1',
      type: 'text',
      content: `## Codex Regius - Kongeboka

La oss begynne med selve kilden. Det viktigste håndskriftet som inneholder eddadiktene heter Codex Regius, eller "Kongeboka" på norsk. Dette lille pergamenthåndskriftet ble trolig skrevet rundt 1270 på Island, men diktene det inneholder er langt eldre - kanskje fra 800-tallet eller enda før.

Håndskriftet inneholder 29 dikt, og de deles i to hovedgrupper. Først har vi gudediktene, som handler om de norrøne gudene, deres verden og deres skjebne. Deretter kommer heltediktene, som handler om menneskelige helter, ofte med overnaturlige elementer.

Hvordan kunne disse diktene overleve så lenge i muntlig tradisjon? Svaret ligger i formen. Eddadiktene bruker faste rytmemønstre og bokstavrim - det vi kaller allitterasjon - som gjør dem lettere å huske. Gjentakelser og faste formler hjelper dikteren å holde tråden, og dialogformen skaper dramatikk som fengsler tilhørerne.

Det viktigste versemålet kalles fornyrdislag, som betyr "det gamle versemålet". Hvert vers består av to halvlinjer som bindes sammen av bokstavrim. Hør bare:

"Hljóðs bið ek allar / helgar kindir"

Kan du høre hvordan h-lyden gjentas og binder linjene sammen? Dette er allitterasjon i praksis.

Eddadiktene ble trolig fremført ved festlige anledninger, kanskje akkompagnert av musikk. De hadde både underholdningsverdi og formidlet viktig kulturell kunnskap om gudene, heltene og verdens beskaffenhet.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg2-1-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva er Codex Regius?',
        options: [
          { id: 'a', text: 'En samling av islendingesagaer', isCorrect: false },
          { id: 'b', text: 'Snorre Sturlusons lærebok i skaldskap', isCorrect: false },
          { id: 'c', text: 'Det viktigste håndskriftet med eddadikt, fra ca. 1270', isCorrect: true },
          { id: 'd', text: 'En lovsamling fra Alltinget', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Codex Regius ("Kongeboka") er det viktigste håndskriftet med eddadikt. Det ble nedskrevet rundt 1270 på Island og inneholder 29 dikt, delt i gudedikt og heltedikt.',
      },
    },

    // ========== SEKSJON 2: Voluspå - Volvens spådom ==========
    {
      id: 'norsk-vg2-1-2-n-section2',
      type: 'text',
      content: `## Voluspå - Hele historien fra begynnelse til slutt

Hvis du bare skal lese ett eddadikt, bør det være Voluspå. Dette diktet gir oss et sammenhengende bilde av hele den norrøne kosmologien - fra verdens skapelse, gjennom gudenes historie, til Ragnarok og den nye verden som skal fødes.

Diktet er lagt i munnen på en volve - en spåkvinne med magiske evner. Odin selv har vekket henne fra de døde for å høre hennes visjon. "Hør meg, alle hellige ætter," begynner hun, og det hun forteller er intet mindre enn verdens historie.

I begynnelsen var Ginnungagap, urgapet mellom ildens verden Muspelheim og kuldens verden Niflheim. Fra dette kaoset oppsto urjotnen Yme, og fra hans kropp skapte gudene Odin, Vile og Ve hele verden. Menneskene Ask og Embla ble formet av trestammer og gitt liv av gudene.

Volven forteller om gudenes gullalder, da de bygde Åsgard og skapte skatter. Men så kommer fallet - løfter brytes, krig bryter ut, og ondskapen sprer seg. Volven ser inn i fremtiden og skildrer Ragnarok i grusomme detaljer: "Solen svartner, jord synker i havet, de blanke stjerner slukkes på himmelen."

Men så, etter ødeleggelsen, ser hun noe mer: "Hun ser oppkomme, annen gang, jord av havet, evig grønn." En ny verden stiger opp fra ruinene, renere og bedre enn den gamle. Dette er det norrøne verdensbildet - syklisk, der ødeleggelse ikke er slutten, men en overgang til noe nytt.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg2-1-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva skjer ifølge Voluspå etter Ragnarok?',
        options: [
          { id: 'a', text: 'Alt forblir ødelagt for alltid', isCorrect: false },
          { id: 'b', text: 'Gudene vender tilbake uforandret', isCorrect: false },
          { id: 'c', text: 'En ny, grønn verden stiger opp av havet', isCorrect: true },
          { id: 'd', text: 'Menneskene tar over gudenes plass', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Voluspå skildrer et syklisk verdensbilde der ødeleggelsen i Ragnarok følges av fornyelse. En ny verden stiger opp av havet, "evig grønn", og livet begynner på nytt.',
      },
    },

    // ========== SEKSJON 3: Håvamål - Livets visdom ==========
    {
      id: 'norsk-vg2-1-2-n-section3',
      type: 'text',
      content: `## Håvamål - Odins visdomsord

Mens Voluspå gir oss det kosmiske perspektivet, gir Håvamål oss det personlige. "Den høyes tale" er en samling visdomsord lagt i Odins munn - praktiske råd for hvordan man lever et godt liv i vikingtiden.

Mange av rådene handler om gjestfrihet, den viktigste sosiale dygden i det norrøne samfunnet. En gjest som kommer kald og sulten til døra skal få varme, mat og drikke. Men Odin advarer også mot å drikke for mye mjød: "Jo mer du drikker, jo mindre vet du."

Andre strofer handler om vennskap: "Unge var vi en gang, gikk våre veier alene. Rike ble vi da vi fant hverandre; mann er manns glede." Vikingene visste at livet var hardt, og at vennskap var livets største skatt.

Men de mest kjente strofene handler om døden og ettermælet. Hør dette:

"Feet dør, frender dør, en selv dør på samme vis;
ett vet jeg som aldri dør: dommen over den døde."

Og videre:

"Feet dør, frender dør, en selv dør på samme vis;
men ordets glans aldri dør for den som vinner godt ord."

Her er kjernen i det norrøne livssynet. Alt er forgjengelig - rikdom, familie, livet selv. Det eneste som varer, er ettermælet - ryktet og æren man etterlater seg. For vikingene var dette den eneste formen for udødelighet. Å leve slik at man blir husket for gode gjerninger - det var livets høyeste mål.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg2-1-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva er det eneste som aldri dør, ifølge Håvamål?',
        options: [
          { id: 'a', text: 'Gudene og deres makt', isCorrect: false },
          { id: 'b', text: 'Gull og rikdommer', isCorrect: false },
          { id: 'c', text: 'Dommen over den døde - ettermælet', isCorrect: true },
          { id: 'd', text: 'Kjærligheten mellom venner', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Håvamål lærer at alt er forgjengelig - rikdom, familie, livet selv. Men dommen over den døde, ettermælet, varer evig. For vikingene var et godt rykte den eneste formen for udødelighet.',
      },
    },

    // ========== SEKSJON 4: Trymskvida - Gudenes komiske side ==========
    {
      id: 'norsk-vg2-1-2-n-section4',
      type: 'text',
      content: `## Trymskvida - Da Tor ble brud

Ikke alle eddadiktene er alvorlige og høytidelige. Trymskvida er et av de morsomste diktene i hele samlingen, og viser at vikingene absolutt hadde sans for humor - også når det gjaldt gudene deres.

Historien begynner med en katastrofe: Tors hammer Mjølner er stjålet! Uten hammeren er Tor maktesløs, og jotnene kan angripe Åsgard. Loke sendes ut for å finne ut hva som har skjedd, og oppdager at jotnen Trym har tatt hammeren. Prisen for å gi den tilbake? Frøya som brud.

Frøya blir rasende når hun hører dette og nekter blankt. Så hva gjør gudene? De bestemmer at Tor selv må kle seg ut som Frøya og reise til Jotunheim for å hente hammeren tilbake. Den store, skjeggete tordenguden i brudekjole og slør!

Det som følger er ren komedie. Under bryllupsfesten spiser "bruden" en hel okse og drikker tre kar mjød - ikke akkurat dame-porsjon. Trym undrer seg: "Hvorfor er Frøyas øyne så voldsomt røde?" Loke, som er med som brudepike, bortforklarer det hele: "Hun har ikke sovet på åtte netter av lengsel etter deg!"

Når hammeren endelig bringes frem for å vie brudeparet, griper Tor den og slår løs på jotnene. Slik får historien en lykkelig slutt - for gudene, i alle fall.

Hva kan humorens funksjon ha vært? Kanskje gjorde latteren gudene mer menneskelige og nære. Kanskje viste den at vikingene ikke tok seg selv så høytidelig. Og kanskje var det bare godt gammeldags underholdning ved ildstedet.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg2-1-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvorfor må Tor kle seg ut som kvinne i Trymskvida?',
        options: [
          { id: 'a', text: 'For å spionere på jotnene', isCorrect: false },
          { id: 'b', text: 'For å hente hammeren sin som jotnen Trym har stjålet', isCorrect: true },
          { id: 'c', text: 'For å vinne en skjønnhetskonkurranse', isCorrect: false },
          { id: 'd', text: 'For å gjemme seg for Odin', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Jotnen Trym hadde stjålet Tors hammer og ville ha Frøya som brud i bytte. Når Frøya nekter, må Tor selv kle seg ut som brud for å lure jotnen og få hammeren tilbake.',
      },
    },

    // ========== SEKSJON 5: Heltediktene - Sigurd Fåvnesbane ==========
    {
      id: 'norsk-vg2-1-2-n-section5',
      type: 'text',
      content: `## Sigurd Fåvnesbane - Helten over alle helter

Den andre halvdelen av Codex Regius inneholder heltediktene, og den viktigste syklusen handler om Sigurd Fåvnesbane - den fremste helten i all germansk heltediktning.

Sigurd er sønn av Sigmund, som eide det magiske sverdet Gram, gitt av Odin selv. Etter farens død vokser Sigurd opp hos smeden Regin, som egger ham til å drepe draken Fåvne. Draken var en gang Regins bror, men ble forvandlet av grådighet da han la seg på en enorm skatt.

Sigurd dreper draken, og når han smaker blodet, får han plutselig evnen til å forstå fuglespråk. Fuglene advarer ham: Regin planlegger å forråde deg! Sigurd dreper smeden og tar skatten.

Så begynner den romantiske - og tragiske - delen av historien. Sigurd vekker valkyrien Brynhild fra en magisk søvn og lover henne ekteskap. Men ved kong Gjukes hoff blir han gitt en trolldomsdrikk som får ham til å glemme Brynhild. Han gifter seg i stedet med Gudrun og hjelper hennes bror Gunnar med å vinne Brynhild ved å bytte ham.

Når sannheten kommer frem, er Brynhild knust av svik. Hun presser Gunnars brødre til å drepe Sigurd. Så tar hun sitt eget liv for å følge ham i døden.

Historien om Sigurd tar opp tidløse temaer: Hva er sterkere - løfter eller kjærlighet? Kan man unnslippe sin skjebne? Hva skjer når ære og begjær kolliderer? Disse spørsmålene plaget vikingtidsmenneskene like mye som de plager oss.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg2-1-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva skjer når Sigurd smaker drakeblodet?',
        options: [
          { id: 'a', text: 'Han blir forvandlet til en drage selv', isCorrect: false },
          { id: 'b', text: 'Han får evnen til å forstå fuglespråk', isCorrect: true },
          { id: 'c', text: 'Han blir udødelig', isCorrect: false },
          { id: 'd', text: 'Han mister hukommelsen', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Når Sigurd smaker drakeblodet, får han magisk evne til å forstå fuglespråk. Fuglene advarer ham om at smeden Regin planlegger å forråde ham.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg2-1-2-n-summary',
      type: 'text',
      content: `## Oppsummering: Eddadiktenes verden

Du har nå møtt eddadiktene og deres rike verden. Her er det viktigste å huske:

**Den eldre Edda:**
Samling av 29 dikt bevart i Codex Regius fra ca. 1270. Deles i gudedikt og heltedikt. Bygger på eldre muntlig tradisjon.

**Verseform:**
Fornyrdislag er det vanligste versemålet, med to halvlinjer bundet av allitterasjon (bokstavrim). Ljodahått brukes i visdomsdiktning.

**De viktigste gudediktene:**
- Voluspå: Kosmisk visjon fra skapelse til Ragnarok og gjenfødelse
- Håvamål: Odins visdomsord om hvordan leve et godt liv
- Trymskvida: Komisk fortelling om da Tor måtte kle seg ut som brud
- Lokasenna: Loke fornærmer alle gudene

**Heltediktene:**
Handler om Sigurd Fåvnesbane og hans tragiske skjebne. Temaer: kjærlighet, svik, ære, skjebne.

**Verdensbildet:**
Syklisk - ødeleggelse følges av fornyelse. Skjebnetro - selv gudene er underlagt skjebnen. Ettermælet er det eneste som varer.

**Nøkkelbegreper:**
Edda, Codex Regius, fornyrdislag, allitterasjon, volve, Ragnarok, ettermæle, Sigurd Fåvnesbane.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.3 NARRATIV: Skaldekvad og kenninger
// ============================================================================

export const CHAPTER_NORSK_VG2_1_3_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-1-3-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '1.3',
  title: 'Skaldekvad og kenninger',
  subtitle: 'Narrativ versjon',
  description: 'Møt skaldene - vikingtidenes ordkunstnere som diktet ved kongenes hoff.',
  estimatedMinutes: 40,
  competenceGoals: [
    'lese norrøne tekster i oversettelse og sammenligne med nyere tekster',
    'bruke fagspråk til å beskrive særtrekk ved norsk sammenlignet med norrønt',
  ],
  linkedChapterId: 'norsk-vg2-1-3',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg2-1-3-n-intro',
      type: 'text',
      content: `## Ordkunstnere ved kongens bord

Forestill deg at du er på et stort gjestebud i kongens hall. Ilden flammer i ildstedet, mjøden flyter, og mennene skryter av sine bragder. Så reiser en mann seg ved kongens bord. Alle blir stille. Han begynner å fremføre et kvad, og ordene hans er så kunstferdige, så innviklede, at bare de klokeste forstår alt han sier.

Dette er skalden - vikingtidenes profesjonelle dikter. Mens eddadiktene er anonyme og forteller om guder og helter fra en fjern fortid, er skaldediktene skrevet av navngitte kunstnere om konkrete hendelser og virkelige personer.

Å være skald var en farlig kunst. Et dikt som fornærmet kongen kunne koste deg livet. Men et godt dikt kunne gi deg rikdom, ære og en plass i historien. Skaldene var kongenes propagandaministre, deres historieskrivere og deres underholdere - alt i én person.

I dette kapittelet skal du lære om skaldenes kunst, særlig deres mest karakteristiske virkemiddel: kenningen. Du skal forstå hvorfor de valgte å dikte så komplisert, og du skal møte noen av de mest berømte skaldene og deres verker.`,
    },

    // ========== SEKSJON 1: Skaldenes rolle ==========
    {
      id: 'norsk-vg2-1-3-n-section1',
      type: 'text',
      content: `## Mer enn bare diktere

Skaldene var ikke bare kunstnere. De hadde viktige samfunnsfunksjoner som gjorde dem uunnværlige ved kongenes hoff.

For det første var de hirdmenn, ofte tilknyttet kongens nærmeste krets. De fulgte kongen i krig og fred, og de fikk førstehånds kjennskap til det som skjedde. For det andre var de historieskrivere. I en kultur uten skriftlig historieskrivning var det skaldenes kvad som bevarte kongenes bedrifter for ettertiden. Et godt kvad kunne sikre at en konges ry levde videre i århundrer.

For det tredje var skaldene underholdere. Ved festlige anledninger fremførte de sine dikt til publikums begeistring - eller misnøye. Og for det fjerde kunne de fungere som diplomater. Et dikt kunne formidle budskap som ville vært farlige å si direkte.

Det mest prestisjefylte diktet en skald kunne komponere var en drapa - et langt lovkvad med refreng, gjerne 20-50 strofer, til ære for en konge eller stormann. Å lage en drapa krevde enorm dyktighet. Flokkr var en kortere form uten refreng. Og lausavisa var en enkeltstående strofe, ofte improvisert der og da som reaksjon på en bestemt situasjon.

Mange skalder er kjent ved navn. Bragi den gamle fra 800-tallet regnes som den første skalden og gav faktisk navn til diktekunsten selv - bragr. Egil Skallagrimsson var både kriger og dikter, og hans Sonatorrek er et av de mest personlige diktene i hele norrøn litteratur. Sigvat Tordsson var Olav den helliges fremste skald og kjent for sin diplomatiske bruk av diktkunsten.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg2-1-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva er en drapa?',
        options: [
          { id: 'a', text: 'En enkeltstående strofe improvisert på stedet', isCorrect: false },
          { id: 'b', text: 'Et langt lovkvad med refreng til ære for en konge', isCorrect: true },
          { id: 'c', text: 'En mytologisk fortelling om gudene', isCorrect: false },
          { id: 'd', text: 'En prosafortelling om islandske høvdinger', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'En drapa er et langt lovkvad med refreng (stev), gjerne 20-50 strofer. Det var den mest prestisjefylte formen for skaldedikt og ble komponert til ære for konger og stormenn.',
      },
    },

    // ========== SEKSJON 2: Kenningen - poetisk omskriving ==========
    {
      id: 'norsk-vg2-1-3-n-section2',
      type: 'text',
      content: `## Kenningen - skaldediktningens varemerke

Det mest karakteristiske ved skaldediktningen er bruken av kenninger - poetiske omskrivinger som erstatter vanlige ord med sammensetninger. For en moderne leser kan dette virke unødvendig komplisert, men for vikingene var det høyeste kunst.

La oss ta et enkelt eksempel. I stedet for å si "skip", kunne skalden si "havets hest". Hvorfor? Fordi skipet beveger seg over havet som en hest beveger seg over land. Sammenligningen er elegant og skaper et bilde i tilhørerens hode. Andre kenninger for skip inkluderer "bølgenes ski" og "sjøens vogn".

For kriger kunne man si "Odins tre" (mannen som det høye treet), "brynjens bærer", eller "kampens ulv". For gull var vanlige kenninger "Sifs hår" (fra myten om Loke som stjal Sifs hår og måtte erstatte det med gull), "Fåvnes leie" (draken som lå på gullskatten), eller "armens ild" (gullet som brenner på armen som en ring).

For blod kunne man si "kampens dugg", "ørnesø", eller "ulvevin" - fordi ørner og ulver drakk de falnes blod på slagmarken.

Men det stopper ikke der. Kenninger kunne bygges i flere ledd. "Havet" kunne bli til "hvalens vei". Og "skip" kunne da bli "hvalens veis hest". For å forstå slik diktning måtte du kjenne mytologien, historien og alle de konvensjonelle kenningene. Det var en eksklusiv kunst for de innvidde.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg2-1-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva betyr kenningen "havets hest"?',
        options: [
          { id: 'a', text: 'En sjøhest (mytisk vesen)', isCorrect: false },
          { id: 'b', text: 'En bølge', isCorrect: false },
          { id: 'c', text: 'Et skip', isCorrect: true },
          { id: 'd', text: 'En viking', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: '"Havets hest" er en kenning for skip. Sammenligningen bygger på at skipet beveger seg over havet som en hest beveger seg over land. Dette er et eksempel på hvordan kenninger skaper poetiske bilder.',
      },
    },

    // ========== SEKSJON 3: Drottkvætt - det krevende versemålet ==========
    {
      id: 'norsk-vg2-1-3-n-section3',
      type: 'text',
      content: `## Drottkvætt - hoffets versemål

Mens eddadiktene bruker relativt enkle versemål, er skaldediktningen langt mer komplisert. Det viktigste og mest prestisjefylte versemålet kalles drottkvætt, som betyr "hoffversemål" eller "fyrstenes versemål".

La oss se på strukturen. Hver strofe har åtte linjer, delt i to halvstrofer på fire linjer hver. Hver linje har seks stavelser, og tre av dem skal være trykksterke. Hver linje skal slutte på en trykkletter stavelse etterfulgt av en trykksvak - det vi kaller trokéavslutning.

Men det er mer. I hver halvlinje skal minst to stavelser allitterere - begynne med samme lyd. Og i tillegg skal det være innrim, som kalles hending. I oddetallslinjer skal det være skothending, der vokalene er like men konsonantene forskjellige (som "mund" og "land"). I partallslinjer skal det være aðalhending, der både vokal og etterfølgende konsonant er like (som "gull" og "full").

Forestill deg å komponere et dikt der du må oppfylle alle disse kravene samtidig, og i tillegg bruke kenninger for nesten hvert substantiv. Det krevde enorm dyktighet og lang trening. Bare de beste skaldene mestret drottkvætt fullt ut.

Hvorfor så komplisert? Kompleksiteten demonstrerte skaldisk dyktighet. Jo vanskeligere diktet var å forstå og komponere, desto mer imponerende var kunstneren. Det var også en form for kodering - bare de innvidde kunne fullt ut forstå budskapet.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg2-1-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva kjennetegner drottkvætt?',
        options: [
          { id: 'a', text: 'Enkelt versemål med fri rytme', isCorrect: false },
          { id: 'b', text: 'Komplisert versemål med 8 linjer, allitterasjon og innrim', isCorrect: true },
          { id: 'c', text: 'Prosaform uten fast rytme', isCorrect: false },
          { id: 'd', text: 'Bare to linjer per strofe', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Drottkvætt er det mest prestisjefylte versemålet i skaldediktning. Det krever 8 linjer per strofe, 6 stavelser per linje, allitterasjon og innrim (hending). Det var ekstremt krevende å mestre.',
      },
    },

    // ========== SEKSJON 4: Egil Skallagrimsson - dikteren og krigeren ==========
    {
      id: 'norsk-vg2-1-3-n-section4',
      type: 'text',
      content: `## Egil Skallagrimsson - dikteren og krigeren

Blant alle skaldene er Egil Skallagrimsson kanskje den mest fascinerende. Han levde fra rundt 910 til 990 og var både fryktinngytende kriger og følsom dikter - en kombinasjon som perfekt illustrerer det norrøne idealet.

Ifølge sagaen om ham var Egil stor, stygg og hissig fra barndommen av. Han drepte sin første mann da han var bare syv år gammel, etter å ha blitt snytt i en lek. Som voksen var han fryktet over hele Skandinavia og England, og han hadde mange fiender - inkludert den norske kongen Eirik Blodøks.

Men Egil var også en mester med ord. Da han ble tatt til fange av Eirik Blodøks i York, reddet han livet sitt ved å komponere et lovkvad til kongen på én natt. Diktet, kjent som Hovedløsningen, var så imponerende at selv hans dødsfiende lot ham gå fri.

Egils mest personlige verk er Sonatorrek - "Sønnetapet". Han diktet det etter at to av sønnene hans hadde dødd, den ene i kamp og den andre druknet. I dette diktet anklager Egil Odin direkte: "Hardt har Havets herre handlet mot meg." Det er opprørsk og rått følelsesladet - svært uvanlig i en litteratur som vanligvis holder følelser skjult bak understatement.

Men diktet ender med forsoning. Odin har tatt mye fra Egil, men han har også gitt ham diktkunsten: "Likevel har han gitt meg, ulvenes fiende, idrett uten feil, og det å gjøre meg fiender åpenbare, som lurte i vennehåm." Kunsten gjør sorgen tålelig. Selv i dyp fortvilelse finner Egil trøst i ordene.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg2-1-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvorfor er Sonatorrek et uvanlig skaldedikt?',
        options: [
          { id: 'a', text: 'Fordi det er skrevet i prosa', isCorrect: false },
          { id: 'b', text: 'Fordi det er anonymt', isCorrect: false },
          { id: 'c', text: 'Fordi det uttrykker personlig sorg og anklager Odin', isCorrect: true },
          { id: 'd', text: 'Fordi det er skrevet på latin', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Sonatorrek er uvanlig fordi det uttrykker intens personlig sorg og til og med anklager guden Odin direkte. De fleste skaldedikt handler om kongers bedrifter og holder følelser skjult.',
      },
    },

    // ========== SEKSJON 5: Kenninger i dag ==========
    {
      id: 'norsk-vg2-1-3-n-section5',
      type: 'text',
      content: `## Kenninger lever videre

Du tror kanskje at kenninger er en gammel kunstform som ikke lenger brukes. Men faktisk lever prinsippet videre i språket vårt i dag - vi bare kaller det noe annet.

Tenk på "Det hvite hus" som betegnelse på den amerikanske presidenten og hans administrasjon. Eller "jernhesten" som et gammeldags ord for lokomotiv. "Det grønne skiftet" for bærekraftig omstilling. "Nettroll" for folk som provoserer på internett. Alt dette er moderne kenninger - omskrivinger som erstatter direkte betegnelser med bilder og assosiasjoner.

Forskjellen er at de norrøne kenningene var systematiserte. Det fantes hundrevis av konvensjonelle kenninger som skaldene kunne velge mellom, og tilhørerne visste hvordan de skulle tolkes. Moderne metaforer er ofte mer individuelle og uforutsigbare.

Likevel er det en dyp sammenheng. Mennesker har alltid hatt behov for å uttrykke seg kreativt, å skape bilder med ord, å gjøre det abstrakte konkret. Skaldens "havets hest" og rapperens kreative metaforer springer fra samme kilde - lysten til å si noe vanlig på en uvanlig måte.

Kanskje kan du prøve å lage dine egne kenninger? Hva kunne være en kenning for "mobiltelefon"? "Lommens vindu til verden"? "Ordenes bærer"? "Nettets portal"? Med litt kreativitet kan du dikte som en skald.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg2-1-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvilket av disse er et eksempel på en moderne "kenning"?',
        options: [
          { id: 'a', text: '"Jeg kjøpte en ny bil"', isCorrect: false },
          { id: 'b', text: '"Det hvite hus" for den amerikanske presidenten', isCorrect: true },
          { id: 'c', text: '"Hunden løp fort"', isCorrect: false },
          { id: 'd', text: '"Det regnet i går"', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: '"Det hvite hus" brukes som omskriving for den amerikanske presidenten og hans administrasjon. Dette er en moderne parallell til den norrøne kenningen - en poetisk omskriving som erstatter en direkte betegnelse.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg2-1-3-n-summary',
      type: 'text',
      content: `## Oppsummering: Skaldenes kunst

Du har nå møtt skaldene og deres kunstferdige diktning. Her er det viktigste:

**Skaldenes rolle:**
Hirdmenn, historieskrivere, underholdere og diplomater. De navngitte dikterne som komponerte ved kongenes hoff.

**Diktformer:**
- Drapa: Langt lovkvad med refreng (stev)
- Flokkr: Kortere lovkvad uten refreng
- Lausavisa: Enkeltstående strofe, ofte improvisert

**Kenninger:**
Poetiske omskrivinger som erstatter vanlige ord. "Havets hest" = skip. "Kampens dugg" = blod. "Armens ild" = gull.

**Drottkvætt:**
Det mest prestisjefylte versemålet. 8 linjer per strofe, 6 stavelser per linje, allitterasjon og innrim. Ekstremt krevende.

**Berømte skalder:**
- Bragi den gamle: Regnes som den første skalden
- Egil Skallagrimsson: Dikter og kriger, skrev Sonatorrek
- Sigvat Tordsson: Olav den helliges hirdskald

**Nøkkelbegreper:**
Skald, drapa, flokkr, lausavisa, kenning, heiti, drottkvætt, allitterasjon, hending.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.4 NARRATIV: Sagalitteraturen
// ============================================================================

export const CHAPTER_NORSK_VG2_1_4_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-1-4-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '1.4',
  title: 'Sagalitteraturen',
  subtitle: 'Narrativ versjon',
  description: 'Oppdag sagaene - prosafortellinger som har fascinert lesere i over tusen år.',
  estimatedMinutes: 50,
  competenceGoals: [
    'lese norrøne tekster i oversettelse og sammenligne med nyere tekster',
    'analysere og tolke tekster med bruk av fagbegreper',
    'sammenligne tekster fra ulike tider og vurdere tekstenes relevans i dag',
  ],
  linkedChapterId: 'norsk-vg2-1-4',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg2-1-4-n-intro',
      type: 'text',
      content: `## Fortellinger som aldri dør

"Det var en mann som het Gunnar. Han bodde på Lidarende og var den mest vellikte mannen på Island." Slik begynner fortellingen om en av sagalitteraturens mest minnerike helter - vakker, modig, dyktig med alle våpen, og dømt til å dø av sine fiender.

Sagaene er Nordens store bidrag til verdenslitteraturen. Disse prosafortellingene, skrevet på Island i middelalderen, kombinerer dramatisk spenning med psykologisk dybde på en måte som fortsatt fascinerer lesere. De har inspirert forfattere fra Walter Scott til Tolkien, fra Ibsen til George R.R. Martin.

I dette kapittelet skal du lære hva som gjør sagaene så spesielle. Du skal forstå den unike sagastilen med dens understatement og indirekte karakterskildring. Du skal møte noen av de mest berømte sagaene og deres uforglemmelige karakterer. Og du skal se hvordan tusen år gamle fortellinger fortsatt har relevans i dag.`,
    },

    // ========== SEKSJON 1: Hva er en saga? ==========
    {
      id: 'norsk-vg2-1-4-n-section1',
      type: 'text',
      content: `## Fra munnen til pergamentet

Ordet "saga" kommer fra det norrøne verbet "segja" - å si, å fortelle. En saga er rett og slett en fortelling. Men ikke hvilken som helst fortelling. Sagaene er en helt spesiell sjanger med karakteristiske trekk.

I generasjoner ble sagaene fortalt muntlig på Island. Ved ildstedene lange vinterkvelder gjenfortalte folk historiene om forfedrene, om kongene, om heltene fra gammel tid. Fortellingene ble formet og finpusset gjennom gjentatt fremføring.

På 1200- og 1300-tallet ble disse fortellingene endelig skrevet ned. Island hadde da utviklet en skrivekultur takket være kirken, og det var et ivrig publikum som ønsket å bevare tradisjonene på pergament.

De viktigste sagasjangerne er:

Islendingesagaene handler om islendinger i "sagatiden" - perioden fra rundt 930 til 1030, da de første generasjonene bygde opp samfunnet på øya. Her finner vi Njåls saga, Egils saga, Laksdøla saga og mange flere.

Kongesagaene handler om skandinaviske, særlig norske, konger. Den mest berømte samlingen er Heimskringla, skrevet av Snorre Sturluson.

Fornaldersagaene handler om helter fra en fjern fortid, ofte med overnaturlige elementer. Hit hører Volsungesaga om Sigurd Fåvnesbane.

Samtidssagaene handler om hendelser i forfatterens egen tid, som maktkampene på 1200-tallets Island.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg2-1-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva betyr ordet "saga"?',
        options: [
          { id: 'a', text: 'En poetisk fortelling om guder', isCorrect: false },
          { id: 'b', text: 'En fortelling - fra verbet "segja" (å si)', isCorrect: true },
          { id: 'c', text: 'En lovtekst fra Alltinget', isCorrect: false },
          { id: 'd', text: 'En religiøs tekst', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Ordet "saga" kommer fra det norrøne verbet "segja" (å si, fortelle). Sagaene er prosafortellinger som først ble overlevert muntlig og senere skrevet ned på Island.',
      },
    },

    // ========== SEKSJON 2: Sagastilen ==========
    {
      id: 'norsk-vg2-1-4-n-section2',
      type: 'text',
      content: `## Kunsten å si lite og mene mye

Det som gjør sagaene unike, er stilen. Sagaforfatterne hadde en helt spesiell måte å fortelle på som skiller seg skarpt fra både samtidens europeiske litteratur og moderne romaner.

For det første er sagastilen nøktern og objektiv. Forfatteren holder seg konsekvent i bakgrunnen. Vi får aldri vite hva forfatteren mener om karakterene eller hendelsene. Det er ingen moralske kommentarer, ingen fordømmelser, ingen ros. Alt presenteres tilsynelatende nøytralt, som om forfatteren bare rapporterer det som skjedde.

For det andre bruker sagaene "show, don't tell" - vis, ikke fortell. Karakterene avslører seg gjennom sine handlinger og sin dialog, ikke gjennom forfatterens beskrivelser. Hvis noen er feig, ser vi det i det de gjør. Hvis noen er modig, viser de det i handling.

For det tredje er understatement - tilbakeholdenhet - et sentralt virkemiddel. Store følelser og dramatiske hendelser beskrives med understatement. "Han tok det tungt" kan bety dyp fortvilelse. "De skiltes, og hver syntes den andre hadde vist liten vennskap" kan bety dødsfiendskap. Ved å si lite, overlater sagaen til leseren å fylle inn følelsene.

Denne tilbakeholdenheten har en paradoksal effekt: hendelsene føles sterkere nettopp fordi de ikke utbroderes. Vi fyller inn det som mangler, og vår egen fantasi gjør arbeidet.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg2-1-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva menes med "understatement" i sagaene?',
        options: [
          { id: 'a', text: 'At forfatteren overdriver hendelser', isCorrect: false },
          { id: 'b', text: 'At store følelser og hendelser beskrives med tilbakeholdenhet', isCorrect: true },
          { id: 'c', text: 'At forfatteren kommenterer handlingen', isCorrect: false },
          { id: 'd', text: 'At dialogen er lang og detaljert', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Understatement betyr at store følelser og dramatiske hendelser beskrives med tilbakeholdenhet. "Han tok det tungt" kan bety dyp fortvilelse. Dette overlater til leseren å fylle inn følelsene.',
      },
    },

    // ========== SEKSJON 3: Gunnars død - et eksempel ==========
    {
      id: 'norsk-vg2-1-4-n-section3',
      type: 'text',
      content: `## "Fager er lidi" - Gunnars siste valg

La oss se på et av de mest berømte øyeblikkene i sagalitteraturen: Gunnar fra Lidarendes død i Njåls saga.

Gunnar har blitt dømt fredløs etter en lang feide. Han er pålagt å forlate Island i tre år, og brødrene hans følger ham til skipet. Men på veien snubler hesten, og Gunnar ser seg tilbake mot gården sin.

"Fager er lidi," sier han - vakker er lia. "Så fager har den aldri syntes meg før, med hvite åkrer og slått eng. Jeg vil ri heim igjen og ikke fare."

Brødrene prøver å overtale ham. De vet at hvis han blir, vil fiendene komme og drepe ham. Men Gunnar står fast. Han velger å dø på gården sin fremfor å leve i eksil.

Scenen er ladet med tragisk skjebne og poetisk skjønnhet. Gunnar ser døden i øynene, men velger kjærligheten til hjemstedet. Det er et øyeblikk av eksistensiell klarhet som har grepet lesere i tusen år.

Og legg merke til hvordan det fortelles. Ingen lange beskrivelser av Gunnars følelser. Bare den korte, lakoniske replikken - "Fager er lidi" - og handlingen som følger. Sagaen stoler på at vi forstår dybden i øyeblikket uten at det forklares.

Snart etter kommer fiendene. Gunnar kjemper lenge alene, men buestrengen hans ryker. Han ber kona Hallgerd om en hårstreng til å reparere buen. Hun nekter - som hevn fordi han en gang slo henne. Gunnar svarer rolig: "Enhver får gjøre seg berømt på sin egen måte. Jeg skal ikke be deg mer." Kort tid etter er han død.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg2-1-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hvorfor velger Gunnar å bli hjemme selv om han vet han vil dø?',
        options: [
          { id: 'a', text: 'Fordi han tror fiendene ikke vil komme', isCorrect: false },
          { id: 'b', text: 'Fordi skjønnheten i hjemstedet betyr mer enn livet i eksil', isCorrect: true },
          { id: 'c', text: 'Fordi han har glemt at han er dømt fredløs', isCorrect: false },
          { id: 'd', text: 'Fordi kona hans overtaler ham', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: '"Fager er lidi" - Gunnar ser gården sin i et nytt lys og velger å dø hjemme fremfor å leve i eksil. Det er et valg om verdier - kjærligheten til hjemstedet veier tyngre enn livet selv.',
      },
    },

    // ========== SEKSJON 4: Snorre Sturluson ==========
    {
      id: 'norsk-vg2-1-4-n-section4',
      type: 'text',
      content: `## Snorre Sturluson - middelalderens storforteller

Ingen snakker om norrøn litteratur uten å nevne Snorre Sturluson. Han levde fra 1179 til 1241 og er den mest berømte islandske forfatteren fra middelalderen.

Snorre var ikke bare forfatter. Han var en av Islands mektigste menn - to ganger lovsiemann på Alltinget, eier av store eiendommer, og dypt involvert i tidens politiske maktkamper. Han endte sine dager på dramatisk vis: drept i sitt eget bad av menn sendt av den norske kongen.

Men det er verkene hans vi husker. Heimskringla - "Jordskiva" - er en monumental samling sagaer om de norske kongene fra mytisk urtid til 1177. Her finner vi historien om Harald Hårfagre som lovet å ikke klippe håret før han hadde samlet Norge, om Olav den hellige og hans fall på Stiklestad, om Harald Hardråde og hans eventyrlige liv.

Snorre-Edda (Den yngre Edda) er en lærebok i skaldskap som inneholder mye mytologisk stoff. Det meste vi vet om norrøn mytologi kommer fra denne boken.

Mange forskere mener også at Snorre skrev Egils saga, om sin egen forfader Egil Skallagrimsson.

Det som gjør Snorre spesiell er hans historiesyn. Han vil forstå hvorfor ting skjedde, ikke bare hva som skjedde. Han psykologiserer kongene, forklarer deres motiver, viser årsak og virkning. "Med lov skal land bygges" - dette sitatet fra Snorres prolog uttrykker hans syn på samfunn og styring.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg2-1-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvem skrev Heimskringla?',
        options: [
          { id: 'a', text: 'Egil Skallagrimsson', isCorrect: false },
          { id: 'b', text: 'Ari den frode', isCorrect: false },
          { id: 'c', text: 'Snorre Sturluson', isCorrect: true },
          { id: 'd', text: 'Bragi den gamle', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Snorre Sturluson (1179-1241) skrev Heimskringla, en samling sagaer om de norske kongene. Han er den mest berømte islandske forfatteren fra middelalderen og skrev også Snorre-Edda.',
      },
    },

    // ========== SEKSJON 5: Sagaenes relevans i dag ==========
    {
      id: 'norsk-vg2-1-4-n-section5',
      type: 'text',
      content: `## Fra vikingtid til Game of Thrones

Tusen år er lang tid. Kan fortellinger fra middelalderen virkelig ha noe å si oss i dag?

Svaret er et rungende ja. Sagaene tar opp temaer som er like aktuelle nå som da: Hva gjør du når lojalitet til familie kolliderer med egen overbevisning? Hvordan bryter du en sirkel av vold og hevn? Hva er en ære verdt, og når blir æresbegrepet destruktivt?

Sagaenes innflytelse på moderne populærkultur er enorm. J.R.R. Tolkien, som skapte Ringenes Herre, var professor i gammelengelsk og norrønt, og hentet mye inspirasjon fra sagaene og eddaene. Dvergenes navn i Hobbiten kommer rett fra Voluspå.

TV-serien Game of Thrones deler mange trekk med sagalitteraturen: komplekse karakterer som handler ut fra forståelige motiver, konflikter som eskalerer over generasjoner, og en nådeløs vilje til å drepe hovedpersoner. George R.R. Martin har selv pekt på sagaene som inspirasjon.

Nordisk noir - den mørke krimsjangeren fra Skandinavia - deler sagaens nøkterne stil og tematikk. Den lakoniske tonen, de komplekse karakterene, den kalde naturen som speiler de kalde følelsene.

Kanskje er det nettopp sagastilen som gjør dem tidløse. Ved å ikke fortelle oss hva vi skal føle, lar de oss legge inn våre egne følelser. Ved å vise fremfor å fortelle, skaper de rom for tolkning. Ved å behandle selv de verste gjerningene med nøkternhet, tvinger de oss til å reflektere over rett og galt selv.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg2-1-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvilken moderne populærkulturell fenomen er sterkt påvirket av norrøn litteratur?',
        options: [
          { id: 'a', text: 'Reality-TV', isCorrect: false },
          { id: 'b', text: 'Tolkiens Ringenes Herre', isCorrect: true },
          { id: 'c', text: 'Komediefilmer', isCorrect: false },
          { id: 'd', text: 'Dokumentarserier', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'J.R.R. Tolkien var professor i gammelengelsk og norrønt og hentet mye inspirasjon fra sagaer og eddadikt. Dvergenes navn i Hobbiten kommer rett fra Voluspå.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg2-1-4-n-summary',
      type: 'text',
      content: `## Oppsummering: Sagalitteraturens verden

Du har nå fått et møte med sagalitteraturen. Her er det viktigste:

**Sagasjangrer:**
- Islendingesagaer: Om islendinger i sagatiden (930-1030)
- Kongesagaer: Om skandinaviske konger (Heimskringla)
- Fornaldersagaer: Om helter fra fjern fortid
- Samtidssagaer: Om forfatterens egen tid

**Sagastilen:**
- Nøktern og objektiv fortelling
- "Show, don't tell" - vis, ikke fortell
- Understatement - si lite, men mene mye
- Karakterene avsløres gjennom handling og dialog

**Snorre Sturluson:**
Middelalderens storforteller. Skrev Heimskringla og Snorre-Edda. Interessert i årsak og virkning.

**Sentrale verdier:**
Ære og skam, ættelojalitet, skjebnetro, blodhevn og forlik.

**Relevans i dag:**
Inspirert Tolkien, Game of Thrones, nordisk noir. Tidløse temaer om lojalitet, hevn og moralske dilemmaer.

**Nøkkelbegreper:**
Saga, islendingesaga, kongesaga, sagastil, understatement, "show don't tell", Heimskringla.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.5 NARRATIV: Norrønt språk og runer
// ============================================================================

export const CHAPTER_NORSK_VG2_1_5_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-1-5-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '1.5',
  title: 'Norrønt språk og runer',
  subtitle: 'Narrativ versjon',
  description: 'Utforsk det norrøne språket og runeskriften - røttene til moderne norsk.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke fagspråk til å beskrive særtrekk ved norsk sammenlignet med norrønt',
    'gjøre rede for historisk bakgrunn for språksituasjonen i Norge',
  ],
  linkedChapterId: 'norsk-vg2-1-5',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg2-1-5-n-intro',
      type: 'text',
      content: `## Språket som binder oss til vikingene

Tenk deg at du kunne reise tilbake i tid til vikingtidenes Norge. Ville du forstått hva folk sa? Ville de forstått deg?

Svaret er overraskende: delvis. Det norrøne språket som ble snakket fra rundt 700 til 1350 er direkte forgjengeren til moderne norsk. Mange ord ville du gjenkjenne - hus, skip, barn, dag. Andre ville virke fremmede. Og grammatikken? Den ville nok by på utfordringer.

I dette kapittelet skal du lære om det norrøne språket og hvordan det har utviklet seg til det norske vi snakker i dag. Du skal også møte runene - de eldste skrifttegnene i Skandinavia. For å forstå hvor norsk kommer fra, må vi tilbake til tiden da forfedrene våre risset tegn i stein og tre.

Det er en fascinerende reise. Hvert ord du sier bærer i seg spor av vikingtiden. Når du sier "onsdag", ærer du Odin. Når du sier "torsdag", ærer du Tor. Språket er en bro gjennom tiden, og nå skal vi gå over den.`,
    },

    // ========== SEKSJON 1: Norrønt - et fellesspråk ==========
    {
      id: 'norsk-vg2-1-5-n-section1',
      type: 'text',
      content: `## Da alle nordboere forsto hverandre

I vikingtiden var det norrøne språket relativt ensartet over hele Skandinavia. En nordmann, en svenske og en danske kunne forstå hverandre uten store problemer. Denne språklige enheten gjorde det mulig for vikingene å kommunisere over enorme avstander - fra Vinland i vest til Miklagard i øst.

Norrønt utviklet seg fra urnordisk, som ble snakket i Skandinavia fra ca. 200 til 700 e.Kr. Overgangen skjedde gradvis, med betydelige endringer i lydsystemet. Urnordisk kjenner vi hovedsakelig fra runeinnskrifter - korte tekster risset inn i stein og tre.

Etter hvert utviklet det seg regionale forskjeller. Vestnordisk - som ble snakket i Norge og de norrøne atlanterhavsbosetningene som Island, Færøyene og Grønland - utviklet seg i én retning. Østnordisk - i Danmark og Sverige - gikk i en annen.

Det meste av den norrøne litteraturen vi har bevart, er skrevet på Island i det vi kaller klassisk norrønt, fra perioden 1150 til 1350. Islandsk har endret seg forbløffende lite siden den tiden. En islending i dag kan faktisk lese sagaene i original uten store problemer. Det er som om vi nordmenn kunne lese tekster fra 1200-tallet rett fra pergamentet.

Hvorfor bevarte Island språket så godt? Geografisk isolasjon spilte en rolle. Men også den sterke litterære tradisjonen - islendingene var stolte av språket sitt og ønsket å bevare det.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg2-1-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvilket moderne språk ligner mest på norrønt?',
        options: [
          { id: 'a', text: 'Norsk', isCorrect: false },
          { id: 'b', text: 'Svensk', isCorrect: false },
          { id: 'c', text: 'Islandsk', isCorrect: true },
          { id: 'd', text: 'Dansk', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Islandsk har endret seg minst siden norrøn tid på grunn av geografisk isolasjon og sterk litterær tradisjon. Islendinger i dag kan lese sagaene i original uten store problemer.',
      },
    },

    // ========== SEKSJON 2: Norrøn grammatikk ==========
    {
      id: 'norsk-vg2-1-5-n-section2',
      type: 'text',
      content: `## Fire kasus og fri ordstilling

Den største forskjellen mellom norrønt og moderne norsk ligger i grammatikken. Norrønt hadde et kasussystem med fire grammatiske tilfeller - noe som i praksis har forsvunnet fra moderne norsk substantiver.

La oss ta et eksempel. Ordet for "hest" het "hestr" på norrønt. Men formen endret seg etter ordets funksjon i setningen:

Nominativ (subjekt): hestr - "Hesten løper"
Akkusativ (direkte objekt): hest - "Jeg ser hesten"
Dativ (indirekte objekt): hesti - "Jeg gir hesten mat"
Genitiv (eieform): hests - "Hestens sal"

Denne kasusendingen gjorde at ordstillingen kunne være mye friere enn i moderne norsk. Siden endelsen viste hvem som gjorde hva, trengte man ikke stole på ordrekkefølgen like mye.

"Konungr gaf drenginum sverð" - Kongen ga gutten et sverd. Her viser kasusendelsene hvem som er subjekt (konungr - nominativ), hvem som mottar (drenginum - dativ), og hva som gis (sverð - akkusativ).

I moderne norsk har vi mistet dette systemet nesten helt. Vi har fortsatt genitiv-s (Olav-s bok), og pronomenene har bevart kasus (jeg/meg, du/deg), men substantivene bøyes ikke lenger. I stedet bruker vi ordstilling og preposisjoner for å vise grammatiske forhold.

Hvorfor forsvant kasussystemet? Det skjedde gradvis gjennom lydendringer der de utrykkssvake endelsene ble svekket og falt bort. Engelsk har gjennomgått samme utvikling - gammelengelsk hadde også fire kasus.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg2-1-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hvor mange kasus hadde norrønt?',
        options: [
          { id: 'a', text: 'To (nominativ og akkusativ)', isCorrect: false },
          { id: 'b', text: 'Tre (nominativ, akkusativ og genitiv)', isCorrect: false },
          { id: 'c', text: 'Fire (nominativ, akkusativ, dativ og genitiv)', isCorrect: true },
          { id: 'd', text: 'Seks (som latin)', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Norrønt hadde fire kasus: nominativ (subjekt), akkusativ (direkte objekt), dativ (indirekte objekt) og genitiv (eieform). I moderne norsk er kasussystemet nesten helt borte fra substantivene.',
      },
    },

    // ========== SEKSJON 3: Runene ==========
    {
      id: 'norsk-vg2-1-5-n-section3',
      type: 'text',
      content: `## Runene - magiske tegn?

Før det latinske alfabetet kom til Skandinavia med kristendommen, hadde nordboerne sitt eget skriftsystem: runene. Disse tegnene, risset inn i stein, bein og tre, er de eldste skriftlige sporene vi har fra vår del av verden.

Ordet "rune" betyr trolig "hemmelighet" eller "hviske". Runene ble tillagt magisk kraft - ifølge mytene oppdaget Odin dem da han hang i verdenstreet Yggdrasil i ni dager og netter. Skalden i Håvamål forteller: "Jeg vet at jeg hang i det vindkalde treet, netter i alt ni... da ropte jeg opp runer."

Runealfabetet kalles futhark, etter de seks første tegnene: f, u, th, a, r, k. Det finnes flere varianter:

Eldre futhark (ca. 150-700 e.Kr.) hadde 24 tegn og ble brukt for urnordisk.

Yngre futhark (ca. 700-1100) hadde bare 16 tegn - merkelig nok ble alfabetet forenklet samtidig som språket ble mer komplekst. Dette var runene vikingene brukte.

Middelalderruner (ca. 1100-1500) utvidet alfabetet igjen til rundt 27 tegn, tilpasset det latinske systemet.

Hva ble runene brukt til? Minnesteiner over døde er de mest kjente - her ble det risset korte beskjeder om hvem som reiste steinen og til hvem. Men runene hadde også hverdagslig bruk. På Bryggen i Bergen er det funnet over 600 runeinnskrifter - alt fra handelsbeskjeder til kjærlighetskvad til rene skjellsord.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg2-1-5-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-5-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hvor kommer navnet "futhark" fra?',
        options: [
          { id: 'a', text: 'Det er det norrøne ordet for "alfabet"', isCorrect: false },
          { id: 'b', text: 'De seks første runene: f, u, th, a, r, k', isCorrect: true },
          { id: 'c', text: 'Navnet på guden som oppfant runene', isCorrect: false },
          { id: 'd', text: 'Stedet der de eldste runene ble funnet', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: '"Futhark" er dannet av de seks første runene i alfabetet: f, u, th (thorn), a, r, k. Det fungerer på samme måte som ordet "alfabet" er dannet av de greske bokstavene alfa og beta.',
      },
    },

    // ========== SEKSJON 4: Fra norrønt til norsk ==========
    {
      id: 'norsk-vg2-1-5-n-section4',
      type: 'text',
      content: `## Lydendringer gjennom tusen år

Veien fra norrønt til moderne norsk har gått gjennom store forandringer. Noen av de viktigste lydendringene kan du fortsatt høre spor av i dialektene våre.

Ta diftongene - doble vokallyder. Norrønt hadde diftonger som "ei", "au" og "øy". I østnorske dialekter ble disse forenklet til enkle vokaler: "sten" for "stein", "høk" for "hauk". I vestnorske dialekter ble de bevart: "stein", "hauk". Rettskrivningen vår med "stein" og "bein" gjenspeiler de dialektene som bevarte diftongene.

Endelsene ble svekket og falt bort - det vi kaller synkope. Norrønt "konungr" ble til norsk "konge". "Hestar" ble til "hester". Kasusendelsene forsvant, og med dem muligheten for fri ordstilling.

H-en foran konsonanter forsvant. Norrønt "hringr" ble til norsk "ring". "Hvalr" ble til "hval" (men vi skriver fortsatt h-en!).

Noen endringer kan vi høre i dialektforskjeller. Assimilasjon, der lyder smelter sammen, har gått ulikt langt i ulike dialekter. "Land" uttales noen steder "lan'", "barn" uttales "ban'".

Tross alle endringene er forbindelsen til norrønt fortsatt tydelig. Ord som "hus", "skip", "barn", "dag", "natt", "vann" - alle disse ville en viking gjenkjent. Språket har forandret seg, men det er det samme språket, utviklet gjennom tusen år.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg2-1-5-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-5-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva skjedde med norrønt "konungr" på veien til moderne norsk "konge"?',
        options: [
          { id: 'a', text: 'Ordet ble lånt fra tysk', isCorrect: false },
          { id: 'b', text: 'Endelsene ble svekket og falt bort (synkope)', isCorrect: true },
          { id: 'c', text: 'Ordet ble oversatt fra latin', isCorrect: false },
          { id: 'd', text: 'Ordet endret betydning fullstendig', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Endelsene i norrønt ble gradvis svekket og falt bort - dette kalles synkope. "Konungr" ble til "konge", "hestar" ble til "hester". Kasussystemet forsvant med endelsene.',
      },
    },

    // ========== SEKSJON 5: Norrøne ord i dag ==========
    {
      id: 'norsk-vg2-1-5-n-section5',
      type: 'text',
      content: `## Vikingene i hverdagsspråket ditt

Uten å tenke over det bruker du norrøne ord hver eneste dag. La oss se på noen av dem.

Ukedagene ærer de gamle gudene. Tirsdag kommer fra Tysdagr - Tys dag. Tyr var krigsguden som ofret hånden sin for å binde Fenrisulven. Onsdag er Odinsdagr - Odins dag. Torsdag er Thorsdagr - Tors dag. Fredag er Frjádagr - trolig Frøyas dag, kjærlighetsgudinnen.

Mange hverdagsord kommer rett fra norrønt med minimal endring: hus, skip, barn, mann, kone, vann, fjell, berg, dal, hav, dag, natt. Disse ordene har vært i bruk sammenhengende i over tusen år.

Noen ord har endret betydning. "Drottning" betydde opprinnelig hirdfruen, ikke nødvendigvis kongens hustru. "Karl" betydde en fri mann, ikke en gammel gubbe. "Trell" betydde en ufri person - nå bruker vi ordet mest om datamaskiner som jobber for oss.

Stedsnavn er fulle av norrøne spor. Navn som ender på "-heim" (hjem), "-vin" (eng), "-by" (gård) forteller om hvem som bodde der for tusen år siden og hva slags sted det var.

Så neste gang du sier "god torsdag", husk at du ærer Tor med hammeren. Og når du sier "hei" - vel, det er det samme lille ordet som vikingene brukte for å hilse på hverandre. Språket binder oss til fortiden på en måte ingenting annet gjør.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg2-1-5-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-5-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvilken gud hedres i navnet "onsdag"?',
        options: [
          { id: 'a', text: 'Tor', isCorrect: false },
          { id: 'b', text: 'Tyr', isCorrect: false },
          { id: 'c', text: 'Odin', isCorrect: true },
          { id: 'd', text: 'Frøy', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Onsdag kommer fra norrønt "Óðinsdagr" - Odins dag. På samme måte er tirsdag (Tyr), torsdag (Tor) og fredag (trolig Frøya) oppkalt etter norrøne guder.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg2-1-5-n-summary',
      type: 'text',
      content: `## Oppsummering: Språkets røtter

Du har nå utforsket det norrøne språket og runene. Her er det viktigste:

**Norrønt:**
Språket som ble snakket i Skandinavia ca. 700-1350. Forgjengeren til norsk, svensk, dansk, islandsk og færøysk. Relativt ensartet over hele Norden.

**Norrøn grammatikk:**
Fire kasus: nominativ, akkusativ, dativ, genitiv. Tre kjønn. Rikere bøyningssystem enn moderne norsk. Friere ordstilling.

**Runene:**
Skandinavias eldste skriftsystem. Eldre futhark (24 tegn), yngre futhark (16 tegn), middelalderruner (27 tegn). Brukt til minnesmerker, hverdagsbeskjeder og magi.

**Lydendringer:**
Synkope (bortfall av endelser), diftongforenkling (varierer i dialekter), bortfall av h foran konsonant.

**Norrøne ord i dag:**
Ukedagene (tirsdag, onsdag, torsdag, fredag). Hverdagsord (hus, skip, barn). Stedsnavn (-heim, -vin, -by).

**Nøkkelbegreper:**
Norrønt, urnordisk, futhark, kasus, synkope, allitterasjon, vestnordisk, østnordisk.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const NORSK_VG2_NARRATIV_DEL1_CHAPTERS = [
  CHAPTER_NORSK_VG2_1_1_NARRATIV,
  CHAPTER_NORSK_VG2_1_2_NARRATIV,
  CHAPTER_NORSK_VG2_1_3_NARRATIV,
  CHAPTER_NORSK_VG2_1_4_NARRATIV,
  CHAPTER_NORSK_VG2_1_5_NARRATIV,
];
