/**
 * Norsk VG3 - Narrative versjoner Del 5 (Kapittel 3.1-3.9: Etterkrigslitteratur)
 *
 * Engasjerende, fortellende versjoner av kapitlene om etterkrigslitteraturen,
 * optimalisert for lesing/lytting.
 * Hver narrativ versjon linker tilbake til originalkapittelet via linkedChapterId.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 3.1 NARRATIV: Eksistensiell tematikk
// ============================================================================

export const CHAPTER_NORSK_VG3_3_1_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-3-1-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '3.1',
  title: 'Eksistensiell tematikk',
  subtitle: 'Narrativ versjon',
  description: 'Opplev hvordan krigens gru fikk en hel generasjon til a stille livets store sporsmal - og hvordan litteraturen ble arenaen for eksistensiell soking.',
  estimatedMinutes: 35,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
  ],
  linkedChapterId: 'norsk-vg3-3-1',
  content: [
    {
      id: 'norsk-vg3-3-1-n-intro',
      type: 'text',
      content: `## Nar verden mistet mening

Forestill deg Paris i 1945. Krigen er over. Gatene som for noen maneder siden var fylt av tyske soldater, er na fulle av mennesker som feirer freden. Men bak gleden ligger noe annet - en dyp uro, et svart hull av sporsmal.

Hvordan kunne dette skje? Hvordan kunne siviliserte nasjoner begaa Holocaust? Hvordan kunne vitenskapen som skulle gjore livet bedre, skape atombomben? Og hvis Gud finnes - hvor var han da seks millioner mennesker ble myrdet?

I en kjeller pa venstre-bredden av Seinen sitter en gruppe intellektuelle og diskuterer. Blant dem er Jean-Paul Sartre, en liten mann med skjeve oyne og en sigarett i munnen. Han sier noe som vil forandre hvordan en hel generasjon tenker: "Mennesket er domt til a vaere fritt."

Domt til frihet. Det later som en selvmotsigelse. Men for eksistensialistene var det nettopp dette som var menneskets situasjon: Vi er kastet inn i en verden uten gitte svar, uten forutbestemt mening. Vi maa skape oss selv gjennom valgene vi tar. Og med den friheten folger et knusende ansvar.

Dette er eksistensialismen - den filosofien som skulle prege litteraturen i tiaarene etter krigen.`,
    },
    {
      id: 'norsk-vg3-3-1-n-section1',
      type: 'text',
      content: `## Filosofien som vokste fra ruinene

La oss forstaa hvor eksistensialismen kom fra. Den vokste ikke frem i et vakuum - den var et svar paa noe.

For krigen hadde Europa levd med store fortellinger om fremskritt. Vitenskapen ville lose alle problemer. Sivilisasjonen ville gjore mennesket bedre. Historien beveget seg fremover, mot lysere tider.

Saa kom krigen og knuste alt. Gasskamrene. Bombene. Millioner av dode. Plutselig virket alle de store fortellingene som loegn. Fremskrittet hadde fort til Auschwitz. Sivilisasjonen hadde vist sitt sanne ansikt.

I dette tomrommet vokste eksistensialismen frem. Den sa: Vi kan ikke stole paa de gamle svarene. Vi maa begynne fra bunnen av. Og bunnen er dette: Du eksisterer. Du er her. Hva skal du gjore med det?

Jean-Paul Sartre formulerte det slik: "Eksistensen kommer for essensen." Det betyr at du ikke er skapt med en forutbestemt natur eller oppgave. Du er ikke som en kniv, som er laget for aa skjaere. Du er forst - og saa maa du bestemme hva du skal vaere.

Albert Camus, en annen sentral tenker, fokuserte paa det absurde - gapet mellom menneskets lengsel etter mening og universites tause likegyldighet. I "Myten om Sisyfos" sammenligner han menneskets situasjon med Sisyfos, som maa rulle en stein opp en bakke for all evighet, bare for aa se den rulle ned igjen. Likevel konkluderer Camus: "Vi maa forestille oss Sisyfos lykkelig." Opproret mot meningsloosheten er selv meningsfullt.`,
    },
    {
      id: 'norsk-vg3-3-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-3-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva menes med at "eksistensen kommer for essensen"?',
        options: [
          { id: 'a', text: 'At mennesket maa eksistere for aa kunne tenke', isCorrect: false },
          { id: 'b', text: 'At vi forst eksisterer, og saa skaper vi oss selv gjennom valg', isCorrect: true },
          { id: 'c', text: 'At eksistens er viktigere enn vaeren', isCorrect: false },
          { id: 'd', text: 'At det essensielle alltid kommer etter det eksisterende', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Sartres formulering betyr at mennesket ikke er skapt med en forutbestemt natur eller oppgave. Vi eksisterer forst, og gjennom valgene vi tar, skaper vi hvem vi er. Dette er kjernen i eksistensialistisk tenkning.',
      },
    },
    {
      id: 'norsk-vg3-3-1-n-section2',
      type: 'text',
      content: `## Angst, frihet og ansvar

Eksistensialismen er ikke en behagelig filosofi. Den tilbyr ingen troest, ingen ferdige svar. I stedet konfronterer den oss med noe skremmende: Vi er helt og fullt ansvarlige for livene vaare.

Tenk paa det. Hvis det ikke finnes noen Gud som har planlagt livet ditt, ingen skjebne som styrer deg, ingen menneskelig natur som bestemmer hva du maa gjore - da er du alene med valgene dine. Og hvert valg former hvem du er.

Denne innsikten skaper det eksistensialistene kalte angst. Ikke angst for noe bestemt, men en dypere uro - en svimmelhet overfor tilvaerelsens apne muligheter. Kierkegaard, en forloeper for eksistensialismen, kalte det "angstens svimmelhet" - folelsen av aa staa ved kanten av en avgrunn av frihet.

Men friheten har en pris: ansvaret. Du kan ikke skylde paa andre. Du kan ikke si "jeg matte" eller "slik er jeg bare". Sartre var nadeloes: "Mennesket er fullt og helt ansvarlig for det det er."

Dette gjelder ogsaa i ekstreme situasjoner. Under okkupasjonen matte mange velge: Samarbeide med fienden eller gjore motstand? Eksistensialismen sa: Du velger. Og du maa leve med konsekvensene.

Simone de Beauvoir, Sartres partner og selv en stor tenker, utvidet denne analysen til kvinners situasjon. I "Det annet kjonn" viste hun hvordan kvinner var blitt definert av menn - og oppfordret dem til aa ta ansvar for sin egen frihet.`,
    },
    {
      id: 'norsk-vg3-3-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-3-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva mente Sartre med at mennesket er "domt til aa vaere fritt"?',
        options: [
          { id: 'a', text: 'At frihet er en straff for mennesket', isCorrect: false },
          { id: 'b', text: 'At vi ikke kan unnslippe ansvaret for valgene vaare', isCorrect: true },
          { id: 'c', text: 'At samfunnet tvinger oss til aa vaere frie', isCorrect: false },
          { id: 'd', text: 'At friheten er en domstol som doemmer oss', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Nar Sartre sier vi er "domt til frihet", mener han at vi ikke kan unnslippe ansvaret. Selv nar vi proever aa flykte fra valg, er det et valg. Friheten er uunngaelig - og med den folger det fulle ansvaret for hvem vi blir.',
      },
    },
    {
      id: 'norsk-vg3-3-1-n-section3',
      type: 'text',
      content: `## Eksistensialismen i litteraturen

Filosofien fant sitt naturlige hjem i litteraturen. Romanene og dramaene kunne vise - ikke bare forklare - hva det vil si aa leve som et fritt, ansvarlig menneske i en meningsloes verden.

Albert Camus' "Den fremmede" (1942) er et mesterverk i eksistensialistisk litteratur. Hovedpersonen Meursault lever i en tilstand av likegyldighet. Han reagerer ikke som han "bor" nar moren doer. Han dreper en mann naermest tilfeldig. Og nar han skal henrettes, nekter han aa angre eller aa soeke troest i religion.

Meursault er fremmed - fremmed for samfunnets forventninger, fremmed for de folelsene han "burde" ha. Men i sin fremmedhet er han ogsaa aerlig. Han nekter aa lyve, aa late som om livet har en mening det ikke har.

Sartres drama "For lukkede doerer" (1944) gir oss den beroemte setningen: "Helvete er de andre." Tre personer er stengt inne i et rom for evig tid. Deres straff er ikke fysisk tortur, men aa vaere utsatt for hverandres blikk, hverandres domme, for alltid.

Simone de Beauvoirs romaner utforsket kvinners kamp for frihet og autentisitet. I "Gjesten" (1943) ser vi hvordan relasjoner kan bli fangenskap - og hvordan frigjoeringen krever smertefulle valg.

Felles for disse verkene er fokuset paa valget, paa ansvaret, paa konfrontasjonen med meningsloesheten. Litteraturen ble et laboratorium for eksistensiell utforskning.`,
    },
    {
      id: 'norsk-vg3-3-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-3-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva representerer Meursault i Camus\' "Den fremmede"?',
        options: [
          { id: 'a', text: 'Den ideelle eksistensialistiske helten', isCorrect: false },
          { id: 'b', text: 'Et menneske som er fremmed for samfunnets konvensjoner og forventninger', isCorrect: true },
          { id: 'c', text: 'En psykisk syk person som trenger behandling', isCorrect: false },
          { id: 'd', text: 'En typisk franskmann paa 1940-tallet', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Meursault er fremmed for samfunnets forventninger om hvordan man skal foele og oppfoere seg. Han nekter aa spille med paa de sosiale spillene, aa late som han foeler noe han ikke foeler. Dette gjoer ham til en trussel for samfunnet - men ogsaa til en aerlig karakter.',
      },
    },
    {
      id: 'norsk-vg3-3-1-n-section4',
      type: 'text',
      content: `## Eksistensialismen i Norge

Ogsaa i Norge gjorde eksistensialismen inntrykk paa forfatterne. Men nordmennene tok filosofien paa sin egen maate - ofte mer poetisk, mer knyttet til natur og landskap.

Tarjei Vesaas lot seg inspirere av eksistensialismen, men skapte sitt eget uttrykk. I romanene hans moeter vi ensomme mennesker som strever med kommunikasjon, med tilhoorighet, med livets grunnleggende sporsmal. Mattis i "Fuglane" er en outsider som soeker mening i en verden som ikke forstaar ham.

Jens Bjorneboe var mer direkte pavirket av fransk eksistensialisme. Hans boeker konfronterer ondskapen og ansvaret. I "Bestialitetens historie" spoer han: Hvordan kan mennesker begaa slike grusomheter? Og hva er vaart ansvar for aa forhindre dem?

Men den norske varianten hadde sine saertrekk. Mens de franske eksistensialistene ofte skrev om bymennesker i kafeer, skrev nordmennene om mennesker i naturen - ved havet, i fjellene, paa gardene. Ensomheten ble konkret: den fysiske avstanden, de lange vintrene, stillheten.

Ogsaa i lyrikken finner vi eksistensielle temaer. Olav H. Hauges enkle, dype dikt handler om livet og doeden, om oeyeblikkene av mening midt i meningsloesheten. Rolf Jacobsens dikt om det moderne livet baeerer paa den samme uroen: Hva betyr det aa vaere menneske i en verden av maskiner og fart?`,
    },
    {
      id: 'norsk-vg3-3-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-3-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvordan skilte norsk eksistensialistisk litteratur seg fra den franske?',
        options: [
          { id: 'a', text: 'Den var mer optimistisk og troende', isCorrect: false },
          { id: 'b', text: 'Den var mer poetisk og knyttet til natur og landskap', isCorrect: true },
          { id: 'c', text: 'Den avviste eksistensialismen helt', isCorrect: false },
          { id: 'd', text: 'Den fokuserte bare paa politiske sporsmal', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Mens fransk eksistensialisme ofte utspilte seg i byer og kafeer, tok norske forfattere som Vesaas eksistensielle temaer inn i naturen og landskapet. Ensomheten ble konkret i fysisk avstand og stillhet. Stilen var ofte mer poetisk enn filosofisk.',
      },
    },
    {
      id: 'norsk-vg3-3-1-n-section5',
      type: 'text',
      content: `## Eksistensialismens arv

Eksistensialismen som bevisst filosofisk bevegelise ebbet ut paa 1960-tallet. Andre stromninger - strukturalisme, postmodernisme - tok over den intellektuelle scenen. Men de eksistensielle spoersmaalene forsvant ikke.

I dag lever eksistensialistiske temaer videre i litteraturen. Nar Jon Fosse skriver om mennesker som venter, som famler etter kontakt, som konfronteres med doeden - da er han i dialog med eksistensialistene. Nar Karl Ove Knausgaard grubler over sin egen eksistens i tusener av sider - da gjoer han det Sartre og Camus ba oss gjore: aa ta vaar egen tilvaerelse paa alvor.

Kanskje er eksistensialismens stoerste arv nettopp dette: at vi ikke lenger kan late som om de store sporsmaalene har enkle svar. Vi kan ikke gjemme oss bak religion, tradisjon eller ideologi. Vi maa selv staa ansikt til ansikt med tilvaerelsens usikkerhet.

Det er skremmende. Men det er ogsaa frigjorende. For hvis ingenting er forutbestemt, betyr det at alt er mulig. Hvis du ikke har en gitt natur, kan du skape deg selv paa nytt. Hvis livet ikke har en iboende mening, kan du gi det den meningen du velger.

Som Camus sa: Kampen mot toppunktet er i seg selv nok til aa fylle et menneskehjerte. Vi maa forestille oss Sisyfos lykkelig.`,
    },
    {
      id: 'norsk-vg3-3-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-3-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva er eksistensialismens viktigste arv i litteraturen?',
        options: [
          { id: 'a', text: 'At alle romaner maa handle om filosofi', isCorrect: false },
          { id: 'b', text: 'At forfattere ikke lenger kan late som de store sporsmaalene har enkle svar', isCorrect: true },
          { id: 'c', text: 'At litteraturen skal vaere pessimistisk og morsk', isCorrect: false },
          { id: 'd', text: 'At bare fransk litteratur er verdt aa lese', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Eksistensialismens stoerste arv er at litteraturen ikke lenger kan tilby enkle svar eller troest. Forfattere maa ta de store sporsmaalene paa alvor - om mening, frihet, doed og ansvar - uten aa ty til ferdiglagde loesninger.',
      },
    },
    {
      id: 'norsk-vg3-3-1-n-summary',
      type: 'text',
      content: `## Oppsummering

**Eksistensialismen** vokste frem etter andre verdenskrig som et svar paa krigens grusomheter og de store fortellingenes sammenbrudd.

**Sentrale tenkere:**
- Jean-Paul Sartre: "Eksistensen for essensen", frihet og ansvar
- Albert Camus: Det absurde og opproret
- Simone de Beauvoir: Eksistensialistisk feminisme

**Hovedtanker:**
- Mennesket er ikke skapt med en forutbestemt natur
- Vi skaper oss selv gjennom valgene vaare
- Med friheten folger fullt ansvar
- Angst er en grunnleggende reaksjon paa tilvaerelsens aapenhet
- Autentisitet betyr aa leve ekte, ikke etter andres forventninger

**I litteraturen:**
- Camus: "Den fremmede", "Pesten"
- Sartre: "Kvalmen", "For lukkede doerer"
- Beauvoir: "Det annet kjonn", "Gjesten"

**I Norge:**
- Tarjei Vesaas: Poetisk, naturknyttet eksistensialisme
- Jens Bjorneboe: Konfrontasjon med ondskapen
- Mer knyttet til natur og landskap enn den franske

**Arv:** Litteraturen kan ikke lenger tilby enkle svar - den maa ta de store sporsmaalene paa alvor.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.2 NARRATIV: Tarjei Vesaas
// ============================================================================

export const CHAPTER_NORSK_VG3_3_2_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-3-2-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '3.2',
  title: 'Tarjei Vesaas',
  subtitle: 'Narrativ versjon',
  description: 'Moeet Norges stoerste modernist - bonden fra Telemark som skapte et poetisk univers av ensomhet, lengsel og det usagte.',
  estimatedMinutes: 40,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
    'skrive litteraere analyser og sammenligninger',
  ],
  linkedChapterId: 'norsk-vg3-3-2',
  content: [
    {
      id: 'norsk-vg3-3-2-n-intro',
      type: 'text',
      content: `## Fuglen som trakk over garden

Det er tidlig morgen i Vinje i Telemark. Taaken ligger tungt over vatnet. Paa garden Midtboe staar en mann og ser opp mot himmelen. Han venter paa noe - et tegn, kanskje. Saa hoerer han det: det saeregnee foeyet til en rugde som trekker over. I det oeyeblikket foeler han seg sett, bekreftet, levende.

Denne mannen er Tarjei Vesaas, og denne opplevelsen - det plutselige oeyeblikket av kontakt med noe stoerre - gjennomsyrer hele hans forfatterskap.

Vesaas er en gaate. Han var bonde hele livet, bundet til jorden og arstidene. Likevel skapte han noen av de mest poetiske og universelle verkene i norsk litteratur. Han skrev paa nynorsk om mennesker i Telemark, men temaene hans er tidloese: ensomhet, laengsel, kommunikasjonens umulighet, grensen mellom liv og doed.

Nar du leser Vesaas, traer du inn i en verden der naturen ikke bare er kulisse - den er medspiller. Vatnet, fuglene, skoegen, arstidene - alt speiler menneskesinnet. Og under den enkle overflaten - de korte setningene, de hverdagslige ordene - ligger dybder som tar pusten fra deg.`,
    },
    {
      id: 'norsk-vg3-3-2-n-section1',
      type: 'text',
      content: `## Bonden som ble verdenspoet

Tarjei Vesaas ble foedt 20. august 1897 i Vinje i Telemark. Han vokste opp paa garden Midtboe, som hadde vaert i familien i generasjoner. Her levde han hele livet - bortsett fra noen ungdomsaar med reiser og studier.

Det kan virke paradoksalt: Hvordan kunne en mann som knapt forlot dalen sin, skrive litteratur som beveeger lesere over hele verden? Men kanskje var det nettopp dette som ga Vesaas hans styrke. Han gravde dypt der han stod. Han kjente hver stein, hvert tre, hver arstid paa garden. Og gjennom det lokale fant han det universelle.

I 1934 giftet han seg med Halldis Moren, som selv var dikter. De fikk et ekteskap som var baade kreativt partnerskap og livslang kjaerlighet. Halldis skrev senere om Tarjei med dyp beundring og varme.

Vesaas begynte aa skrive tidlig, og debuterte i 1923. De foerste boekene var realistiske bondeskildringer - gode, men ikke uvanlige for sin tid. Det var foerst paa 1930- og 40-tallet at han fant sin egen stemme. Romanene ble mer symbolske, mer poetiske. Han beveget seg bort fra tradisjonell realisme og mot noe nytt - en norsk modernisme paa sine egne premisser.

Det var i de siste tiaarene av forfatterskapet - fra 1950-tallet og utover - at Vesaas skapte sine mesterverk: "Fuglane" (1957), "Is-slottet" (1963), "Bruene" (1966). Disse romanene er skrevet med en enkelhet som skjuler enorm kunstnerisk raffinement.`,
    },
    {
      id: 'norsk-vg3-3-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-3-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvor levde Tarjei Vesaas det meste av livet sitt?',
        options: [
          { id: 'a', text: 'I Oslo, der han var del av det litteraere miljoeeet', isCorrect: false },
          { id: 'b', text: 'Paa garden Midtboe i Vinje, Telemark', isCorrect: true },
          { id: 'c', text: 'I utlandet, som de fleste modernister', isCorrect: false },
          { id: 'd', text: 'I Bergen, naer universitetet', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Vesaas levde nesten hele livet paa garden Midtboe i Vinje i Telemark. Dette ga ham en dyp tilknytning til naturen og landskapet som preger hele forfatterskapet. Han fant det universelle gjennom det lokale.',
      },
    },
    {
      id: 'norsk-vg3-3-2-n-section2',
      type: 'text',
      content: `## Fuglane - en roman om aa vaere annerledes

"Fuglane" (1957) regnes av mange som Vesaas' mesterverk. Det er en roman som er saa enkel at den nesten virker primitiv - og saa dyp at den har gitt opphav til utallige tolkninger.

Mattis er en mann i trettiaarene som bor med soesteren Hege i et lite hus ved et vatn. Han er "tufs" - det lokale ordet for en som er utviklingshemmet, enkel, annerledes. Han faar ikke til aa arbeide som andre. Han forstaar ikke de sosiale kodene. Han lever i sin egen verden.

Men hvilken verden! Gjennom Mattis' oyne ser vi naturen med en intensitet som er nesten overveldende. Hver fugl, hver blome, hvert vindpust er ladet med mening. Nar en rugde begynner aa trekke over huset, blir det et tegn - et bevis paa at Mattis har verdi, at han er sett av noe stoerre.

Saa kommer Joergen, en skogsarbeider. Han og Hege forelsker seg. Plutselig er Mattis' verden truet. Han er ikke lenger alene med soesteren. Han foeler seg utenfor, overfloedig.

Romanen ender tragisk. Mattis ror ut paa vatnet og velter baaten med vilje. Han drukner. Men slutten er ikke entydig - det er noe nesten fredfullt over den, som om Mattis endelig har funnet ro.

"Fuglane" er en roman om ensomhet, om aa vaere annerledes, om lengselen etter tilhoerighet. Men den er ogsaa en roman om skjoennheten i verden - skjoennheten som de "normale" ofte er for travle til aa se.`,
    },
    {
      id: 'norsk-vg3-3-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-3-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva symboliserer rugdetrekket i "Fuglane"?',
        options: [
          { id: 'a', text: 'At vaaren kommer og vinteren er over', isCorrect: false },
          { id: 'b', text: 'At Mattis har verdi og er sett - et tegn paa tilhoerighet', isCorrect: true },
          { id: 'c', text: 'At Hege snart vil forlate ham', isCorrect: false },
          { id: 'd', text: 'At garden gaar med overskudd', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Rugdetrekket over huset blir for Mattis et tegn paa at han har verdi, at han er sett av noe stoerre. Det bekrefter hans plass i verden. Nar fuglen ikke kommer tilbake, oppleves det som et tap av mening.',
      },
    },
    {
      id: 'norsk-vg3-3-2-n-section3',
      type: 'text',
      content: `## Is-slottet - om vennskap og tap

"Is-slottet" (1963) er kanskje Vesaas' mest kjente roman internasjonalt. Den har blitt oversatt til mange spraak og filmatisert. Det er en fortelling om to jenter, Siss og Unn, og et vennskap som knapt faar begynne foer det tar slutt.

Siss er trygg, populaer, del av fellesskapet. Unn er den nye i klassen, gaatefull og tilbaketrukket. Hun bor hos tanten sin - foreldrene er doede. Det er noe ved Unn som fascinerer Siss, noe hun ikke kan sette ord paa.

En kveld kommer Siss paa besoek til Unn. De to jentene sitter paa rommet og ser paa hverandre. Det skjer noe mellom dem - en intimitet, en forbindelse. Hva det er, forblir usagt. Kanskje er det forelskelse, kanskje er det noe annet. Vesaas lar det forbli aaapent.

Neste dag forsvinner Unn. Hun har gaatt inn i et is-slott - en frossen foss med huler og ganger av is. Hun gaar seg vill. Hun fryser i hjel.

Resten av romanen handler om Siss' sorg og om hele bygdas bearbeiding av tapet. Siss bærer paa en hemmelighet - oeyeblikket paa rommet - som hun ikke kan dele med noen.

Is-slottet selv er et av litteraturens mest kraftfulle symboler. Det er vakkert og farlig. Det lokker og det dreper. Det representerer alt det vi lengter mot men ikke kan naa - det forbudte, det usagte, det som ligger hinsides det trygge.`,
    },
    {
      id: 'norsk-vg3-3-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-3-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva symboliserer is-slottet i romanen?',
        options: [
          { id: 'a', text: 'Vinteren og kulden i Telemark', isCorrect: false },
          { id: 'b', text: 'Det vakre og farlige - det vi lengter mot men ikke kan naa', isCorrect: true },
          { id: 'c', text: 'Unns fattigdom og utenforskap', isCorrect: false },
          { id: 'd', text: 'De voksnes uforstand', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Is-slottet representerer det vakre og farlige - det som lokker oss mot det ukjente, det forbudte, det usagte. Det er et bilde paa alt vi lengter mot men ikke kan naa, og paa faren i aa folge denne lengselen.',
      },
    },
    {
      id: 'norsk-vg3-3-2-n-section4',
      type: 'text',
      content: `## Vesaas' poetiske stil

Hva er det med Vesaas' spraak som gjoer det saa spesielt? La oss se naermere paa teknikken.

For det foerste er det enkelheten. Vesaas bruker korte setninger, enkle ord, hverdagslig spraak. Det er ingen oppblaaast litterær stil, ingen akademisk jargon. Han skriver som om han snakker til naboen over gjerdet.

Men under enkelheten ligger dybde. Vesaas velger hvert ord med omhu. Setningene er fulle av pauser, av det usagte. Det som ikke staar der, er like viktig som det som staar.

For det andre er det bildene. Vesaas er en mester i aa la naturen speile sjelen. Nar Mattis foeler seg glad, skinner sola. Nar is-slottet lokker Unn, lokker det ogsaa noe i henne selv. Landskapet er aldri bare kulisse - det er medspiller, motstander, speil.

For det tredje er det rytmen. Vesaas' prosa har en musikalsk kvalitet. Setningene foelger naturlige pust. Gjentagelser skaper en nesten hypnotisk effekt. Les hoyt fra Vesaas, og du hoerer det: en stemme som bærer.

For det fjerde er det det usagte. Vesaas overlater mye til leseren. Han forklarer ikke, han moraliserer ikke, han konkluderer ikke. I stedet gir han oss bilder, oeyeblikk, situasjoner - og lar oss selv finne meningen.

Denne stilen - enkel, poetisk, full av det usagte - er Vesaas' signatur. Den er unik i norsk litteratur og har pavirket generasjoner av forfattere.`,
    },
    {
      id: 'norsk-vg3-3-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-3-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva kjennetegner Vesaas\' litteraere stil?',
        options: [
          { id: 'a', text: 'Lange, kompliserte setninger og avansert spraak', isCorrect: false },
          { id: 'b', text: 'Enkelt spraak, poetiske bilder og mye usagt', isCorrect: true },
          { id: 'c', text: 'Politiske budskap og direkte tale til leseren', isCorrect: false },
          { id: 'd', text: 'Vitenskapelig presis beskrivelse av naturfenomener', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Vesaas\' stil kjennetegnes av enkelt spraak og korte setninger, poetiske naturbilder som speiler sjelen, rytmisk prosa, og mye usagt som leseren selv maa tolke. Denne tilsynelatende enkelheten skjuler stor kunstnerisk raffinement.',
      },
    },
    {
      id: 'norsk-vg3-3-2-n-section5',
      type: 'text',
      content: `## Vesaas' betydning

Tarjei Vesaas doede 15. mars 1970. Han naaadde aldri aa vinne Nobelprisen, selv om han var nominert flere ganger. Men hans betydning for norsk og internasjonal litteratur er ubestridelig.

For det foerste viste han at modernisme ikke maa vaere urban og intellektuell. Vesaas skapte en norsk modernisme forankret i natur og landskap, i det enkle livet. Han beviste at en bonde fra Telemark kunne skrive like banebrytende litteratur som forfattere i Paris eller New York.

For det andre ga han stemme til de stemmeloese. Mattis, Unn, alle de ensomme og annerledes - gjennom Vesaas fikk de verdighet og skjoennhet. Han viste at et "enkelt" menneskes liv kan romme like mye dybde som en filosofs.

For det tredje fornyet han det nynorske skriftspraaket. Vesaas beviste at nynorsk kunne baere avansert, moderne litteratur. Han var en inspirasjon for generasjoner av nynorskforfattere.

I dag leses Vesaas over hele verden. Romanene hans er oversatt til mange spraak. "Is-slottet" er pensum i mange land. Og nye lesere oppdager ham stadig - tiltrukkete av den merkelige, stille skjoennheten i prosaen hans.

Kanskje er det slik med Vesaas som med rugden over Mattis' tak: Man maa stoppe opp, vaere stille, lytte. Og da hoerer man noe - en stemme fra dalen i Telemark som snakker til noe i oss alle.`,
    },
    {
      id: 'norsk-vg3-3-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-3-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva er Vesaas\' stoerste bidrag til norsk litteratur?',
        options: [
          { id: 'a', text: 'At han innfoerte fransk eksistensialisme til Norge', isCorrect: false },
          { id: 'b', text: 'At han skapte en norsk modernisme forankret i natur og det enkle liv', isCorrect: true },
          { id: 'c', text: 'At han grunnla nynorsken som skriftspraak', isCorrect: false },
          { id: 'd', text: 'At han vant Nobelprisen for Norge', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Vesaas skapte en unik norsk modernisme som ikke fulgte den urbane, intellektuelle tradisjonen fra Europa. Han forankret modernismen i norsk natur og landskap, i det enkle livet, og ga stemme til de ensomme og annerledes.',
      },
    },
    {
      id: 'norsk-vg3-3-2-n-summary',
      type: 'text',
      content: `## Oppsummering

**Tarjei Vesaas (1897-1970)** regnes som Norges fremste modernistiske forfatter.

**Liv:**
- Foedt og levde i Vinje, Telemark
- Bonde paa garden Midtboe hele livet
- Gift med dikteren Halldis Moren Vesaas
- Skrev paa nynorsk

**Hovedverk:**
- "Fuglane" (1957) - om Mattis og rugdetrekket
- "Is-slottet" (1963) - om Siss og Unn
- "Bruene" (1966)
- "Baaten om kvelden" (1968)

**Tematikk:**
- Ensomhet og laengsel etter tilhoerighet
- Kommunikasjonens vanskelighet
- Grensen mellom liv og doed
- Annerledeshet og utenforskap
- Naturens symbolske kraft

**Stil:**
- Enkelt spraak med stor dybde
- Poetiske naturbilder
- Rytmisk prosa
- Det usagte er like viktig som det sagte
- Naturen som speil for sjelen

**Betydning:**
- Skapte en norsk modernisme forankret i natur
- Ga stemme til de stemmeloese
- Fornyet det nynorske skriftspraaket
- Internasjonalt anerkjent`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.3 NARRATIV: Jens Bjorneboe
// ============================================================================

export const CHAPTER_NORSK_VG3_3_3_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-3-3-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '3.3',
  title: 'Jens Bjorneboe',
  subtitle: 'Narrativ versjon',
  description: 'Moeet opproereren som vaaget aa se ondskapen i oeynene - og som betalte dyrt for sin kompromissloeshet.',
  estimatedMinutes: 40,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
    'skrive litteraere analyser og sammenligninger',
  ],
  linkedChapterId: 'norsk-vg3-3-3',
  content: [
    {
      id: 'norsk-vg3-3-3-n-intro',
      type: 'text',
      content: `## Mannen som sa det ingen ville hoere

9. mai 1976 tok Jens Bjorneboe sitt eget liv. Han var 55 aar gammel.

Nyheten rystet det norske kulturlivet. Her var en mann som i aarti etter aarti hadde kaempet - mot skolesystemet, mot fengselsvesenet, mot doedstraffen, mot all den organiserte brutaliteten mennesket paafoerer hverandre. Og naa hadde han gitt opp.

Eller hadde han det? Kanskje var det heller slik at Bjorneboe hadde sett for mye, kaempet for lenge, baaret for tungt. Han hadde brukt hele sitt forfatterskap paa aa konfrontere ondskapen - og ondskapen hadde vist seg bunnloes.

Jens Bjorneboe var norsk litteraturs store opproerer. Han skrev romaner som fikk folk til aa kvekkes av ubehag. Han holdt foredrag der han anklaget det norske samfunnet for hykleri. Han nektet aa tie selv naar det kostet ham venner, jobb og sinnsro.

I dag staar boekene hans som et testament - ikke bare over hans eget liv, men over menneskehetens morkeste sider. De er ubehagelige aa lese. Men de er naermest umulige aa glemme.`,
    },
    {
      id: 'norsk-vg3-3-3-n-section1',
      type: 'text',
      content: `## Fra Kristiansand til Tyskland - og tilbake

Jens Ingvald Bjorneboe ble foedt 9. oktober 1920 i Kristiansand. Familien var velstaende - faren drev rederi. Men rikdommen ga ikke trygghet. Hjemmet var preget av spenninger, og Jens viste tidlig tegn paa det som skulle foelge ham hele livet: en intens sensitivitet, en uro som aldri fant ro.

Som ung mann reiste han til Tyskland for aa studere malerkunst. Det var tidlig 1930-tall, og nazismen var i ferd med aa ta over. Bjorneboe saa fascismen paa naert hold - flaggene, paradene, hatefulle talene. Han saa hvordan et helt folk lot seg forfoere av en ondskap klaedd i ideologi.

Denne opplevelsen preget ham for alltid. Han kom hjem med en innsikt som forfulgte ham: Ondskapen er ikke fremmed. Den finnes i alle samfunn, i alle mennesker. Den trenger bare de rette omstendighetene for aa blomstre.

Etter krigen arbeidet Bjorneboe som laerer ved steinerskolen paa Nesodden. Han trodde paa utdanning, paa muligheten for aa forme gode mennesker. Men han saa ogsaa skolesystemets brutalitet - hvordan det knuste de som var annerledes, som ikke passet inn.

Erfaringene fra skolen ble grunnlaget for hans debutroman "Jonas" (1955). Det var starten paa et forfatterskap som aldri sluttet aa provosere.`,
    },
    {
      id: 'norsk-vg3-3-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-3-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvilken erfaring preget Bjorneboes forfatterskap mest?',
        options: [
          { id: 'a', text: 'Hans tid som sjoeemann', isCorrect: false },
          { id: 'b', text: 'Opplevelsen av fascismen i Tyskland paa 1930-tallet', isCorrect: true },
          { id: 'c', text: 'Hans studier i filosofi ved universitetet', isCorrect: false },
          { id: 'd', text: 'Hans karriere som journalist', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Bjorneboe opplevde nazismens fremvekst paa naert hold da han studerte i Tyskland paa 1930-tallet. Denne erfaringen preget hele hans forfatterskap - saerlig interessen for hvordan ondskap kan bli systematisk og akseptert i et samfunn.',
      },
    },
    {
      id: 'norsk-vg3-3-3-n-section2',
      type: 'text',
      content: `## Jonas - et rop fra et saaret barn

"Jonas" (1955) handler om en sensitiv gutt som ikke passer inn i skolesystemet. Han er kunstnerisk begavet, han tenker annerledes, han foeler dypere. For dette blir han straffet.

Laererne forstaar ham ikke. Medelevene mobber ham. Systemet er laget for aa produsere like mennesker, og Jonas er ulikt. Romanen foelger hans lidelseshistorie gjennom skolen - en historie som ender i tragedie.

Det som gjoer "Jonas" saa kraftfull, er at den ikke bare er en sentimentalt historie om et stakkars barn. Den er et anklage mot et system. Bjorneboe spoer: Hva slags samfunn skaper en skole som bryter ned dem som er annerledes? Hva sier det om oss at vi tolererer dette?

Romanen skapte debatt. Mange kjoente seg igjen - de hadde selv vaert Jonas, eller de hadde sett ham i klassen sin. Andre reagerte med sinne: Var dette rettferdig kritikk, eller bare overdrivelse og selvmedlidenhet?

Debatten var typisk for Bjorneboes forfatterskap. Han greide aldri aa skrive noe som lot folk vaere likegyldige. Boekene hans krevde en reaksjon - enten begeistret tilslutning eller sint avvisning.

"Jonas" var bare begynnelsen. I aarene som fulgte, skulle Bjorneboe ta for seg stadig moerkere temaer.`,
    },
    {
      id: 'norsk-vg3-3-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-3-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva er hovedtemaet i "Jonas"?',
        options: [
          { id: 'a', text: 'En gutts vei til suksess gjennom hard arbeid', isCorrect: false },
          { id: 'b', text: 'Kritikk av et skolesystem som knuser annerledeshet', isCorrect: true },
          { id: 'c', text: 'En forsvarstal for tradisjonell undervisning', isCorrect: false },
          { id: 'd', text: 'En morsom skildring av livet paa en norsk skole', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: '"Jonas" er en skarp kritikk av skolesystemets manglende evne til aa ta vare paa dem som er annerledes. Gjennom Jonas\' lidelseshistorie anklager Bjorneboe et system som krever konformitet og straffer individualitet.',
      },
    },
    {
      id: 'norsk-vg3-3-3-n-section3',
      type: 'text',
      content: `## Bestialitetens historie - aa stirre inn i avgrunnen

Mellom 1966 og 1973 skrev Bjorneboe sitt hovedverk: trilogien "Bestialitetens historie". De tre bindene - "Frihetens oeyeblikk", "Kruttaarnet" og "Stillheten" - er blant de mest ubehagelige boekene i norsk litteratur. De er ogsaa blant de viktigste.

Fortelleren er en boeddel - en som har utfoert henrettelser og tortur gjennom historien. Han beretter om inkvisisjonen og hekseprosessene, om kolonialismen og slaveriet, om Holocaust og moderne tortur. Historien blir en katalog over menneskets kapasitet for organisert grusomhet.

Det er ikke lett lesning. Bjorneboe skildrer volden direkte, uten aa pynte paa den. Leseren tvinges til aa se det vi helst vil glemme. Men det er nettopp poenget: Vi maa se. Vi maa vite. For bare slik kan vi haape aa forhindre at det skjer igjen.

Men kan vi det? Bjorneboe blir stadig mer pessimistisk gjennom trilogien. Ondskapen synes uutryddelig. Den skifter form, men forsvinner aldri. For hver krig som tar slutt, begynner en ny. For hvert regime som faller, reiser et annet seg.

Og boeddelen selv? Han er ikke et monster. Han er et vanlig menneske som gjoer en jobb. Det er kanskje det mest skremmende av alt: At de som utfoerer ondskapen, ofte er helt alminnelige mennesker som bare "foelger ordre".`,
    },
    {
      id: 'norsk-vg3-3-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-3-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva er det mest skremmende med boeddel-figuren i "Bestialitetens historie"?',
        options: [
          { id: 'a', text: 'At han er et psykopat med glede av vold', isCorrect: false },
          { id: 'b', text: 'At han er et vanlig menneske som bare gjoer en jobb', isCorrect: true },
          { id: 'c', text: 'At han angrer dypt paa det han har gjort', isCorrect: false },
          { id: 'd', text: 'At han er en historisk person vi kan identifisere', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Boeddelen er ikke et monster, men et helt vanlig menneske. Dette er Bjorneboes mest skremmende innsikt: De som utfoerer historiens grusomheter er ofte alminnelige folk som "bare foelger ordre". Ondskapen krever ikke ondskap i den enkelte.',
      },
    },
    {
      id: 'norsk-vg3-3-3-n-section4',
      type: 'text',
      content: `## Bjorneboe som debattant og samfunnskritiker

Bjorneboe begrenset seg ikke til skjoennlitteratur. Han var ogsaa en uredd debattant som tok opp kontroversielle temaer - ofte til stor irritasjon for det etablerte Norge.

Han kaempet mot fengselsvesenet, som han mente var basert paa hevn snarere enn rehabilitering. Han skrev om narkotikapolitikk lenge foer det var stuerent. Han forsvarte ytringsfrihet, ogsaa for synspunkter han selv var uenig i.

Saerlig engasjert var han i kampen mot doedstraffen. For Bjorneboe var det statslig drap - det mest systematiske uttrykket for den volden han hadde skrevet om i trilogien. At siviliserte stater fortsatt henrettet mennesker, var for ham beviset paa at barbariet levde videre.

Men Bjorneboe var ingen enkel motstander. Han var ogsaa vanskelig - kranglete, kompromissloes, noen ganger selvrettferdig. Han hadde faa naere venner og mange fiender. Alkoholen, som han kaempet med hele livet, gjorde ham ikke enklere aa omgaas.

Likevel: Det var noe ved Bjorneboes kompromissloeshet som var viktig. Han nektet aa tie om ting andre fant for ubehagelige aa snakke om. Han tok konsekvensene av sine meninger, selv naar det kostet ham. I en tid da mange intellektuelle valgte det trygge, valgte Bjorneboe det rette - slik han saa det.`,
    },
    {
      id: 'norsk-vg3-3-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-3-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvilke saker engasjerte Bjorneboe seg mest i?',
        options: [
          { id: 'a', text: 'Naeringslivspolitikk og skattereform', isCorrect: false },
          { id: 'b', text: 'Fengselsvesenet, narkotikapolitikk og doedstraff', isCorrect: true },
          { id: 'c', text: 'Idrettspolitikk og kultursponsing', isCorrect: false },
          { id: 'd', text: 'Militaert forsvar og sikkerhetspolitikk', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Bjorneboe engasjerte seg sterkt i humanitaere sporsmal som fengselsvesenet (som han mente var basert paa hevn), narkotikapolitikk, og kampen mot doedstraffen. Han var opptatt av hvordan samfunnet behandlet de svakeste.',
      },
    },
    {
      id: 'norsk-vg3-3-3-n-section5',
      type: 'text',
      content: `## Arven etter Bjorneboe

Hvordan skal vi lese Bjorneboe i dag? Det er et sporsmaal som fortsatt diskuteres.

Noen mener han var for pessimistisk, for morsk, for opptatt av det negative. De vil ha litteratur som gir haap, ikke bare mismot. Andre mener at nettopp hans aeerlighet om menneskets morkeste sider gjoer ham viktig - kanskje viktigere naa enn noen gang.

For la oss vaere aerlige: De problemene Bjorneboe skrev om, har ikke forsvunnet. Det finnes fortsatt tortur i verden. Det finnes fortsatt folkemord. Det finnes fortsatt mennesker som "bare foelger ordre" mens de begaar grusomheter.

Kanskje er det nettopp derfor vi trenger forfattere som Bjorneboe. Ikke for aa derimere oss, men for aa holde oss vaakne. For aa minne oss paa hva mennesket er i stand til - paa godt og vondt.

Bjorneboe selv var ikke uten haap. Midt i det morkeste skrev han ogsaa om motstand, om mennesker som nektet aa delta i ondskapen, om den lille gode gjerningen som kan redde et liv. Haapet finnes - men det krever at vi holder oynene aapne, at vi nekter aa se bort.

Det var det Bjorneboe proevde aa laere oss. Og det er kanskje hans stoerste gave til norsk litteratur: motet til aa se, selv naar det gjoer vondt.`,
    },
    {
      id: 'norsk-vg3-3-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-3-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva er Bjorneboes viktigste bidrag til norsk litteratur?',
        options: [
          { id: 'a', text: 'At han innfoerte humoristisk litteratur', isCorrect: false },
          { id: 'b', text: 'Motet til aa konfrontere ondskapen og det ubehagelige', isCorrect: true },
          { id: 'c', text: 'At han fornyet det norske spraaket', isCorrect: false },
          { id: 'd', text: 'At han grunnla en ny litteraer skole', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Bjorneboes stoerste bidrag er motet til aa konfrontere menneskehetens morkeste sider - ondskapen, volden, undertrykkelsen. Han nektet aa se bort og tvang leserne til aa gjore det samme. Denne kompromissloesheten gjoer ham fortsatt relevant.',
      },
    },
    {
      id: 'norsk-vg3-3-3-n-summary',
      type: 'text',
      content: `## Oppsummering

**Jens Bjorneboe (1920-1976)** var en av norsk litteraturs mest kompromissloese forfattere.

**Liv:**
- Foedt i Kristiansand, studerte i Tyskland paa 1930-tallet
- Saa fascismen paa naert hold
- Laerer ved steinerskolen
- Kaempet med alkoholisme og depresjoner
- Tok sitt eget liv 9. mai 1976

**Hovedverk:**
- "Jonas" (1955) - kritikk av skolesystemet
- "Under en haardere himmel" (1957) - om nazismen
- "Bestialitetens historie" (trilogi, 1966-1973):
  - "Frihetens oeyeblikk" (1966)
  - "Kruttaarnet" (1969)
  - "Stillheten" (1973)
- "Haiene" (1974)

**Tematikk:**
- Menneskets kapasitet for ondskap
- Kritikk av undertrykkende systemer
- Fengselsvesen, doedstraff, tortur
- Individets ansvar i ondskap
- Motstand og humanitet

**Stil:**
- Direkte, provoserende
- Ironi og sarkasme
- Blanding av dokumentarisk og skjoennlitteraert
- Aldri noytral - alltid engasjert

**Betydning:**
En uredd stemme som nektet aa tie om det ubehagelige. Fortsatt aktuell i en verden der ondskapen ikke har forsvunnet.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.4 NARRATIV: Kvinnestemmer: Torborg Nedreaas
// ============================================================================

export const CHAPTER_NORSK_VG3_3_4_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-3-4-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '3.4',
  title: 'Kvinnestemmer: Torborg Nedreaas',
  subtitle: 'Narrativ versjon',
  description: 'Moeet forfatteren som ga stemme til kvinnene som historien hadde glemt - og som skapte en av norsk litteraturs mest uforglemmelige karakterer.',
  estimatedMinutes: 35,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
  ],
  linkedChapterId: 'norsk-vg3-3-4',
  content: [
    {
      id: 'norsk-vg3-3-4-n-intro',
      type: 'text',
      content: `## En stemme fra skyggene

Bergen, tidlig 1900-tall. I de trange smauene bor de fattige. Arbeiderfamilier, syersker, fiskekoner, alle de som holder byen i gang uten aa bli sett.

Blant dem vokser en jente opp. Hun heter Herdis. Hun er fattig, men hun er intelligent. Hun droemmer om musikk, om kunst, om et annet liv. Men veiene ut av fattigdommen er faa - saerlig for en jente.

Herdis er en fiktiv karakter, skapt av forfatteren Torborg Nedreaas. Men hun representerer tusener av virkelige kvinner - kvinner hvis historier aldri ble fortalt, hvis droemmer aldri ble hoert.

Med Herdis-romanene ga Nedreaas disse kvinnene en stemme. Hun viste at et "lite" liv i en bakgate i Bergen kunne romme like mye drama, like mye skjoennhet, like mye smerte som noe stort historisk epos.`,
    },
    {
      id: 'norsk-vg3-3-4-n-section1',
      type: 'text',
      content: `## Forfatteren fra Bergen

Torborg Nedreaas ble foedt 13. november 1906 i Bergen. Hun debuterte sent, i 1945, med novellesamlingen "Bak skapet staar oeksene". Da var hun naesten 40 aar gammel.

Gjennombruddet kom med "Trylleglasset" i 1950, men det var Herdis-romanene som gjorde henne til en klassiker: "Musikk fra en blaa broenn" (1960) og "Ved neste nymaane" (1971).

Nedreaas var politisk engasjert hele livet. Hun tilhoerte den radikale venstresiden, og klasseperspektivet er alltid til stede i boekene hennes. Men hun var aldri propagandistisk. Politikken er vevd inn i livene til karakterene.`,
    },
    {
      id: 'norsk-vg3-3-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-3-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Naar debuterte Torborg Nedreaas som forfatter?',
        options: [
          { id: 'a', text: 'Som 20-aaring', isCorrect: false },
          { id: 'b', text: 'I 1945, naesten 40 aar gammel', isCorrect: true },
          { id: 'c', text: 'Som 60-aaring', isCorrect: false },
          { id: 'd', text: 'Under krigen, med motstandslitteratur', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Nedreaas debuterte sent, i 1945, da hun var naesten 40 aar gammel.',
      },
    },
    {
      id: 'norsk-vg3-3-4-n-section2',
      type: 'text',
      content: `## Herdis - et liv i motbakke

Herdis er en fattig jente i Bergen tidlig paa 1900-tallet. Hun har talent - hun kan synge, hun foeler musikken. Men veien til kunsten er stengt for fattige jenter.

Romanen foelger hennes kamp mot fattigdommen og kjoennets begrensninger. Det er ikke en solskinnshistorie. Nedreaas forskjoenner ingenting. Men vi ser ogsaa styrken hennes - viljen til aa ikke gi opp.

Herdis er ikke et offer. Hun er en kaemper. Hun nekter aa la omstendighetene definere hvem hun er.`,
    },
    {
      id: 'norsk-vg3-3-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-3-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva kjennetegner Herdis som karakter?',
        options: [
          { id: 'a', text: 'Hun er passiv og aksepterer sin skjebne', isCorrect: false },
          { id: 'b', text: 'Hun er intelligent og kaemper mot fattigdom og kjoennsbegrensninger', isCorrect: true },
          { id: 'c', text: 'Hun er rik og privilegert', isCorrect: false },
          { id: 'd', text: 'Hun er likegyldig til kunst', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Herdis kaemper paa to fronter: mot fattigdommen og mot kjoennets begrensninger.',
      },
    },
    {
      id: 'norsk-vg3-3-4-n-section3',
      type: 'text',
      content: `## Nedreaas stil - det psykologisk presise

Hva gjoer Nedreaas til en stor forfatter? Det er den psykologiske presisjonen.

Hun skriver om hverdagens smaa dramaer med en innsikt som gjoer at vi kjenner oss igjen. En fornaeermelse som sitter i hele dagen. Gleden over en uventet kompliment. Skammen over aa ikke ha raad.

Spraaket hennes er enkelt og direkte, men aldri banalt. Hun skriver taett paa karakterene sine, ofte i fri indirekte stil.`,
    },
    {
      id: 'norsk-vg3-3-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-3-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva kjennetegner Nedreaas litteraere stil?',
        options: [
          { id: 'a', text: 'Poetisk, symbolrik prosa', isCorrect: false },
          { id: 'b', text: 'Psykologisk presis skildring av hverdagens dramaer', isCorrect: true },
          { id: 'c', text: 'Eksperimentell modernisme', isCorrect: false },
          { id: 'd', text: 'Politiske taler', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Nedreaas stoerste styrke er den psykologiske presisjonen.',
      },
    },
    {
      id: 'norsk-vg3-3-4-n-section4',
      type: 'text',
      content: `## Andre kvinnestemmer

Nedreaas var ikke alene. Etterkrigslitteraturen fikk flere sterke kvinnelige forfatterstemmer.

Ebba Haslund skrev om kvinner i mellomsjiktet og det borgerlige ekteskapets klaustrofobi. Herbjorg Wassmo ga stemme til kvinner i Nord-Norge. Liv Koltzoew utforsket det moderne kvinnelivet med skarp analyse. Cecilie Loeveid braakte eksperimentell form inn i kvinnelitteraturen.

Alle disse forfatterne utvidet litteraturen og viste at kvinners liv var verdt aa skrive om.`,
    },
    {
      id: 'norsk-vg3-3-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-3-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva bidro de kvinnelige etterkrigsforfatterne med?',
        options: [
          { id: 'a', text: 'De innfoerte kriminalromanen', isCorrect: false },
          { id: 'b', text: 'De viste at kvinners liv var verdt aa skrive om som hovedtema', isCorrect: true },
          { id: 'c', text: 'De skrev bare om overklassen', isCorrect: false },
          { id: 'd', text: 'De avviste all tidligere litteratur', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'De kvinnelige etterkrigsforfatterne viste at kvinners liv var verdt aa skrive om.',
      },
    },
    {
      id: 'norsk-vg3-3-4-n-section5',
      type: 'text',
      content: `## Hvorfor lese Nedreaas i dag?

Herdis kamp er ikke over. Fortsatt finnes det mennesker som kaemper mot fattigdom. Fortsatt finnes det kvinner som maa velge mellom droemmer og forventninger.

Nedreaas laerer oss aa se disse menneskene. Hun minner oss om at bak hver statistikk finnes individer med droemmer, haap og verdighet.

Kanskje er det det viktigste Nedreaas laerer oss: At selv i de trangeste omstendighetene finnes det rom for skjoennhet, for musikk, for haap.`,
    },
    {
      id: 'norsk-vg3-3-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-3-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvorfor er Nedreaas fortsatt relevant i dag?',
        options: [
          { id: 'a', text: 'Fordi hun skrev science fiction', isCorrect: false },
          { id: 'b', text: 'Fordi kampen mot fattigdom og begrensede muligheter fortsatt finnes', isCorrect: true },
          { id: 'c', text: 'Fordi hun forutsa internett', isCorrect: false },
          { id: 'd', text: 'Fordi hun er den eneste norske forfatteren', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Nedreaas er fortsatt relevant fordi temaene hennes lever videre.',
      },
    },
    {
      id: 'norsk-vg3-3-4-n-summary',
      type: 'text',
      content: `## Oppsummering

**Torborg Nedreaas (1906-1987)** var en av de viktigste kvinnelige forfatterne i norsk etterkrigslitteratur.

**Hovedverk:** "Musikk fra en blaa broenn" (1960), "Ved neste nymaane" (1971)

**Herdis-karakteren:** Fattig, intelligent jente som kaemper mot fattigdom og kjoennsbegrensninger

**Stil:** Psykologisk presisjon, enkelt spraak, klasseperspektiv

**Andre kvinnestemmer:** Ebba Haslund, Herbjorg Wassmo, Liv Koltzoew, Cecilie Loeveid`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.5 NARRATIV: Samtidslitteratur 1970-i dag
// ============================================================================

export const CHAPTER_NORSK_VG3_3_5_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-3-5-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '3.5',
  title: 'Samtidslitteratur 1970-i dag',
  subtitle: 'Narrativ versjon',
  description: 'Foelg den norske litteraturen fra 1970-tallets politiske oppvaakening til dagens mangfoldige stemmer.',
  estimatedMinutes: 35,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
  ],
  linkedChapterId: 'norsk-vg3-3-5',
  content: [
    { id: 'norsk-vg3-3-5-n-intro', type: 'text', content: `## Femti aar med forandring

1970: Vietnam-krigen raser, studentene demonstrerer, litteraturen skal forandre verden. 2020: Internett har forandret alt, forfattere konkurrerer med TikTok. Mellom disse punktene ligger en rik historie om politisk engasjement, postmodernistisk lek, autofisjon og nye stemmer.` },
    { id: 'norsk-vg3-3-5-n-section1', type: 'text', content: `## 1970-tallet: Litteraturen som vaapen

Profil-bevegelsen samlet unge radikale forfattere. Dag Solstad gikk fra eksperimentell modernisme til politisk engasjert realisme. Kvinnelitteraturen blomstret med Bjorg Vik og Gerd Brantenberg. Litteraturen skulle tjene revolusjonen - men mot slutten av tiaaret begynte mange aa tvile.` },
    { id: 'norsk-vg3-3-5-n-quiz1', type: 'exercise', exercise: { id: 'norsk-vg3-3-5-n-quiz1', number: 'Quiz 1', type: 'multiple-choice', task: 'Hva kjennetegnet 1970-tallets litteratur?', options: [{ id: 'a', text: 'Flukt fra virkeligheten', isCorrect: false }, { id: 'b', text: 'Politisk engasjement og revolusjonaer litteratur', isCorrect: true }, { id: 'c', text: 'Tilbakevending til romantikken', isCorrect: false }, { id: 'd', text: 'Bare underholdning', isCorrect: false }], correctAnswer: 'b', solution: '1970-tallet var preget av politisk engasjement.' } },
    { id: 'norsk-vg3-3-5-n-section2', type: 'text', content: `## 1980-90-tallet: Postmodernisme

De store fortellingene mistet kraft. Jan Kjaaerstad lekte med identitet og sannhet i Jonas Wergeland-trilogien. Dag Solstad skrev selvreflekterende romaner. Erlend Loe debuterte med ironi og minimalisme. Litteraturen skulle stille spoersmaal, ikke forkynne.` },
    { id: 'norsk-vg3-3-5-n-quiz2', type: 'exercise', exercise: { id: 'norsk-vg3-3-5-n-quiz2', number: 'Quiz 2', type: 'multiple-choice', task: 'Hva kjennetegnet postmodernismen?', options: [{ id: 'a', text: 'Politisk propaganda', isCorrect: false }, { id: 'b', text: 'Ironi og skepsis til sannhetskrav', isCorrect: true }, { id: 'c', text: 'Romantiske idealer', isCorrect: false }, { id: 'd', text: 'Streng realisme', isCorrect: false }], correctAnswer: 'b', solution: 'Postmodernismen braakte ironi og skepsis.' } },
    { id: 'norsk-vg3-3-5-n-section3', type: 'text', content: `## 2000-tallet: Knausgaard og autofisjon

Karl Ove Knausgaard skapte en sensasjon med "Min kamp" (2009-2011) - seks bind om sitt eget liv. Autofiskjonen visket ut grensen mellom fiksjon og virkelighet. Noen kalte det narcissisme, andre radikal aerlighet.` },
    { id: 'norsk-vg3-3-5-n-quiz3', type: 'exercise', exercise: { id: 'norsk-vg3-3-5-n-quiz3', number: 'Quiz 3', type: 'multiple-choice', task: 'Hva er autofisjon?', options: [{ id: 'a', text: 'Romaner skrevet av roboter', isCorrect: false }, { id: 'b', text: 'Litteratur som blander selvbiografi og fiksjon', isCorrect: true }, { id: 'c', text: 'Boeeker om biler', isCorrect: false }, { id: 'd', text: 'Science fiction', isCorrect: false }], correctAnswer: 'b', solution: 'Autofisjon blander selvbiografi og fiksjon.' } },
    { id: 'norsk-vg3-3-5-n-section4', type: 'text', content: `## Jon Fosse - Nobelprisen 2023

Jon Fosse fikk Nobelprisen "for hans nyskapande dramatikk og prosa som gjev stemme til det usigelege". Hans langsomme, repetitive stil gir stemme til stillheten og det usagte. "Septologien" er skrevet som en uendelig lang setning.` },
    { id: 'norsk-vg3-3-5-n-quiz4', type: 'exercise', exercise: { id: 'norsk-vg3-3-5-n-quiz4', number: 'Quiz 4', type: 'multiple-choice', task: 'Hvorfor fikk Fosse Nobelprisen?', options: [{ id: 'a', text: 'For kriminalromaner', isCorrect: false }, { id: 'b', text: 'For aa gi stemme til det usigelige', isCorrect: true }, { id: 'c', text: 'For politiske debattboeeker', isCorrect: false }, { id: 'd', text: 'For oversettelser', isCorrect: false }], correctAnswer: 'b', solution: 'Fosse skriver om det som ikke kan uttrykkes direkte.' } },
    { id: 'norsk-vg3-3-5-n-section5', type: 'text', content: `## Mangfold i dag

Norsk litteratur er mer mangfoldig enn noen gang. Nye stemmer har kommet til - Zeshan Shakar, Maria Navarro Skaranger, samiske forfattere. Sjangermangfoldet har oekt. Litteraturen forandrer seg med samfunnet, men fortsetter aa utforske hva det vil si aa vaere menneske.` },
    { id: 'norsk-vg3-3-5-n-quiz5', type: 'exercise', exercise: { id: 'norsk-vg3-3-5-n-quiz5', number: 'Quiz 5', type: 'multiple-choice', task: 'Hva kjennetegner norsk litteratur i dag?', options: [{ id: 'a', text: 'Dominert av en stil', isCorrect: false }, { id: 'b', text: 'Stoerre mangfold i stemmer og sjangre', isCorrect: true }, { id: 'c', text: 'Har sluttet aa utvikle seg', isCorrect: false }, { id: 'd', text: 'Bare menn fra Oslo', isCorrect: false }], correctAnswer: 'b', solution: 'Norsk litteratur i dag er mer mangfoldig enn noen gang.' } },
    { id: 'norsk-vg3-3-5-n-summary', type: 'text', content: `## Oppsummering

**1970-tallet:** Politisk litteratur, Profil-bevegelsen, kvinnelitteratur
**1980-90-tallet:** Postmodernisme, Kjaaerstad, Solstad, Loe
**2000-tallet:** Autofisjon, Knausgaard
**2020-tallet:** Jon Fosses Nobelpris, flerkulturelle stemmer, mangfold` },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.6 NARRATIV: Postmodernisme og metafisjon
// ============================================================================

export const CHAPTER_NORSK_VG3_3_6_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-3-6-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '3.6',
  title: 'Postmodernisme og metafisjon',
  subtitle: 'Narrativ versjon',
  description: 'Oppdag litteraturen som leker med seg selv - der ingenting er helt som det ser ut, og sannheten er et sporsmal.',
  estimatedMinutes: 35,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
  ],
  linkedChapterId: 'norsk-vg3-3-6',
  content: [
    { id: 'norsk-vg3-3-6-n-intro', type: 'text', content: `## Naar litteraturen ser seg i speilet

Forestill deg en roman der fortelleren plutselig stopper opp og sier: "Vent litt. Hvorfor tror du egentlig paa det jeg forteller deg? Jeg finner jo bare paa alt sammen."

Dette er postmodernisme - litteratur som reflekterer over seg selv som litteratur. Som bryter illusjonen. Som spoer: Hva er egentlig en fortelling? Hva er sannhet? Kan vi stole paa noe?

Paa 1980-tallet kom postmodernismen for alvor til Norge. Den braakte med seg lek, ironi og en grunnleggende skepsis til alle store fortellinger.` },
    { id: 'norsk-vg3-3-6-n-section1', type: 'text', content: `## Kjennetegn ved postmodernismen

Postmodernismen avviser universelle sannheter. Den leker med sjangergrenser. Den er full av referanser til andre tekster - intertekstualitet. Og den bruker metafisjon: tekster som reflekterer over seg selv.

Mens modernismen soekte mening i fragmentene, aksepterer postmodernismen meningsloesheten - ofte med et ironisk smil. Alvoret er erstattet av lek.` },
    { id: 'norsk-vg3-3-6-n-quiz1', type: 'exercise', exercise: { id: 'norsk-vg3-3-6-n-quiz1', number: 'Quiz 1', type: 'multiple-choice', task: 'Hva er metafisjon?', options: [{ id: 'a', text: 'Fiksjon om metafysikk', isCorrect: false }, { id: 'b', text: 'Fiksjon som reflekterer over seg selv som fiksjon', isCorrect: true }, { id: 'c', text: 'Svenske krimromaner', isCorrect: false }, { id: 'd', text: 'Historiske romaner', isCorrect: false }], correctAnswer: 'b', solution: 'Metafisjon er fiksjon som reflekterer over seg selv.' } },
    { id: 'norsk-vg3-3-6-n-section2', type: 'text', content: `## Jan Kjaaerstad - mesteren

Jan Kjaaerstad er Norges fremste postmodernist. Jonas Wergeland-trilogien (1993-1999) forteller samme manns liv fra mange vinkler. Ingen versjon er "sann".

Romanene er fulle av referanser til litteratur, populaerkultur, vitenskap. De spoer: Hva er identitet? Er det mulig aa fange et helt menneske i en fortelling?` },
    { id: 'norsk-vg3-3-6-n-quiz2', type: 'exercise', exercise: { id: 'norsk-vg3-3-6-n-quiz2', number: 'Quiz 2', type: 'multiple-choice', task: 'Hva kjennetegner Kjaaerstads romaner?', options: [{ id: 'a', text: 'Enkle historier med tydelig moral', isCorrect: false }, { id: 'b', text: 'Multiperspektivisme, intertekstualitet og metafisjon', isCorrect: true }, { id: 'c', text: 'Bare realistiske skildringer', isCorrect: false }, { id: 'd', text: 'Korte noveller', isCorrect: false }], correctAnswer: 'b', solution: 'Kjaaerstad bruker multiperspektivisme, intertekstualitet og metafisjon.' } },
    { id: 'norsk-vg3-3-6-n-section3', type: 'text', content: `## Intertekstualitet - tekstenes vev

Intertekstualitet betyr at tekster forholder seg til andre tekster - gjennom sitater, allusjoner, pastisj, parodi. Julia Kristeva sa: "Teksten er et vev av sitater."

Postmodernister bruker intertekstualitet bevisst. De blander hoey og lav kultur, sjangre, epoker. Alt er allerede skrevet - kunsten er aa sette det sammen paa nye maater.` },
    { id: 'norsk-vg3-3-6-n-quiz3', type: 'exercise', exercise: { id: 'norsk-vg3-3-6-n-quiz3', number: 'Quiz 3', type: 'multiple-choice', task: 'Hva er intertekstualitet?', options: [{ id: 'a', text: 'Tekster paa flere spraak', isCorrect: false }, { id: 'b', text: 'At tekster forholder seg til andre tekster', isCorrect: true }, { id: 'c', text: 'Tekster som handler om internett', isCorrect: false }, { id: 'd', text: 'Tekster mellom kapitlene', isCorrect: false }], correctAnswer: 'b', solution: 'Intertekstualitet betyr at tekster forholder seg til andre tekster.' } },
    { id: 'norsk-vg3-3-6-n-section4', type: 'text', content: `## Skepsis til store fortellinger

Postmodernismen avviser de store fortellingene - marxismen, fremskrittsoptimismen, religionene. Den sier: Det finnes ikke een sannhet, bare perspektiver. Det finnes ikke en riktig maate aa leve paa.

Dette kan virke befriende - eller skremmende. Uten store fortellinger, hva har vi igjen? Postmodernismen svarer ofte med ironi og lek: Hvis alt er relativt, kan vi like gjerne ha det goy.` },
    { id: 'norsk-vg3-3-6-n-quiz4', type: 'exercise', exercise: { id: 'norsk-vg3-3-6-n-quiz4', number: 'Quiz 4', type: 'multiple-choice', task: 'Hva menes med "skepsis til store fortellinger"?', options: [{ id: 'a', text: 'At lange romaner er kjedelige', isCorrect: false }, { id: 'b', text: 'Avvisning av universelle sannheter og ideologier', isCorrect: true }, { id: 'c', text: 'At forfattere ikke liker eventyr', isCorrect: false }, { id: 'd', text: 'At historieundervisning er unodvendig', isCorrect: false }], correctAnswer: 'b', solution: 'Postmodernismen avviser universelle sannheter og ideologier.' } },
    { id: 'norsk-vg3-3-6-n-section5', type: 'text', content: `## Postmodernismens arv

Postmodernismen som bevegelse har ebbet ut, men dens teknikker lever videre. Ironi, intertekstualitet og metafisjon er naa standard verktoy for forfattere.

Kanskje har vi alle blitt postmoderne - skeptiske til store sannheter, vant til aa se verden fra flere perspektiver samtidig, bevisste paa at alle fortellinger er konstruksjoner.` },
    { id: 'norsk-vg3-3-6-n-quiz5', type: 'exercise', exercise: { id: 'norsk-vg3-3-6-n-quiz5', number: 'Quiz 5', type: 'multiple-choice', task: 'Hva er postmodernismens viktigste arv?', options: [{ id: 'a', text: 'At alle maa skrive politisk', isCorrect: false }, { id: 'b', text: 'Bevissthet om at fortellinger er konstruksjoner', isCorrect: true }, { id: 'c', text: 'At bare norske forfattere teller', isCorrect: false }, { id: 'd', text: 'At litteratur skal vaere kjedelig', isCorrect: false }], correctAnswer: 'b', solution: 'Postmodernismen ga oss bevissthet om at alle fortellinger er konstruksjoner.' } },
    { id: 'norsk-vg3-3-6-n-summary', type: 'text', content: `## Oppsummering

**Postmodernismen** er preget av skepsis til store fortellinger, lek med konvensjoner, intertekstualitet og metafisjon.

**Kjennetegn:** Ironi, multiperspektivisme, blanding av sjangre, teksten reflekterer over seg selv

**I Norge:** Jan Kjaaerstad (Jonas Wergeland-trilogien), Dag Solstad, Erlend Loe

**Arv:** Bevissthet om at alle fortellinger er konstruksjoner` },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.7 NARRATIV: Jan Kjaaerstad og Dag Solstad
// ============================================================================

export const CHAPTER_NORSK_VG3_3_7_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-3-7-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '3.7',
  title: 'Jan Kjaaerstad og Dag Solstad',
  subtitle: 'Narrativ versjon',
  description: 'Moeet to giganter i norsk samtidslitteratur - den lekne konstruktoeren og den grublende selvreflekteren.',
  estimatedMinutes: 35,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
    'skrive litteraere analyser og sammenligninger',
  ],
  linkedChapterId: 'norsk-vg3-3-7',
  content: [
    { id: 'norsk-vg3-3-7-n-intro', type: 'text', content: `## To mestere, to veier

Dag Solstad og Jan Kjaaerstad er to av de viktigste forfatterne i norsk samtidslitteratur. Begge er intellektuelle, begge eksperimenterer, begge har preget den litteraere debatten i tiaar. Men de er ogsaa svaaert forskjellige.

Solstad er den selvreflekterende, den som grubler over sin egen posisjon, som tviler. Kjaaerstad er den ambisioese konstruktoeren, den som bygger komplekse litteraere verdener med presisjon og lek.` },
    { id: 'norsk-vg3-3-7-n-section1', type: 'text', content: `## Dag Solstad - fra revolusjon til tvil

Dag Solstad (f. 1941) har vaert forfatter i over femti aar. Han gikk fra eksperimentell modernisme via politisk ml-litteratur til selvreflekterende romaner.

Paa 70-tallet var han overbevist revolusjonaer. "Arild Asnes, 1970" handler om en intellektuell som proever aa bli kommunist. Paa 80-tallet kom tvilen: "Roman 1987" handler om en forfatter som skriver en roman og tviler paa alt.

Solstads stil er umiskjennelig: lange, buktende setninger, intellektuell refleksjon, ironi og alvor i blanding.` },
    { id: 'norsk-vg3-3-7-n-quiz1', type: 'exercise', exercise: { id: 'norsk-vg3-3-7-n-quiz1', number: 'Quiz 1', type: 'multiple-choice', task: 'Hvordan utviklet Solstads forfatterskap seg?', options: [{ id: 'a', text: 'Fra krim til fantasy', isCorrect: false }, { id: 'b', text: 'Fra politisk engasjement til selvrefleksjon og tvil', isCorrect: true }, { id: 'c', text: 'Fra lyrikk til drama', isCorrect: false }, { id: 'd', text: 'Han skrev alltid det samme', isCorrect: false }], correctAnswer: 'b', solution: 'Solstad gikk fra politisk engasjement til selvrefleksjon og tvil.' } },
    { id: 'norsk-vg3-3-7-n-section2', type: 'text', content: `## "Genanse og verdighet" - et midtlivsdrama

I "Genanse og verdighet" (1994) moeter vi Elias Rukla, en 50 aar gammel norsklaerer som en dag tar av seg buksene foran elevene og gaar hjem.

Romanen er en refleksjon over dette oeyeblikket - og over et helt liv. Rukla representerer en generasjon som har mistet troen paa sine idealer. Han foeler seg fremmedgjort fra arbeidet, ekteskapet, seg selv.

Solstad utforsker skammens psykologi med presisjon. Det er vondt aa lese - og umulig aa legge fra seg.` },
    { id: 'norsk-vg3-3-7-n-quiz2', type: 'exercise', exercise: { id: 'norsk-vg3-3-7-n-quiz2', number: 'Quiz 2', type: 'multiple-choice', task: 'Hva handler "Genanse og verdighet" om?', options: [{ id: 'a', text: 'En ungdoms oppvekst', isCorrect: false }, { id: 'b', text: 'En laerers midtlivskrise og refleksjon over livet', isCorrect: true }, { id: 'c', text: 'En detektivhistorie', isCorrect: false }, { id: 'd', text: 'En historisk roman', isCorrect: false }], correctAnswer: 'b', solution: 'Romanen handler om en laerers midtlivskrise og refleksjon over livet.' } },
    { id: 'norsk-vg3-3-7-n-section3', type: 'text', content: `## Jan Kjaaerstad - den ambisioese konstruktoeren

Jan Kjaaerstad (f. 1953) er kanskje den mest ambisioese norske romanforfatteren. Hans verk er preget av intellektuell lek og storslaaatte konstruksjoner.

Jonas Wergeland-trilogien (1993-1999) forteller et manns liv fra tre ulike vinkler. Romanene er fulle av referanser, strukturelle eksperimenter og tematisk kompleksitet. De spoer: Hva er identitet? Hva er sannhet?

Kjaaerstad krever mye av leseren, men belonenner innsatsen.` },
    { id: 'norsk-vg3-3-7-n-quiz3', type: 'exercise', exercise: { id: 'norsk-vg3-3-7-n-quiz3', number: 'Quiz 3', type: 'multiple-choice', task: 'Hva kjennetegner Kjaaerstads romaner?', options: [{ id: 'a', text: 'Enkle, korte fortellinger', isCorrect: false }, { id: 'b', text: 'Ambisioese konstruksjoner og intellektuell lek', isCorrect: true }, { id: 'c', text: 'Bare realistiske skildringer', isCorrect: false }, { id: 'd', text: 'Kun lyrikk', isCorrect: false }], correctAnswer: 'b', solution: 'Kjaaerstads romaner er preget av ambisioese konstruksjoner og intellektuell lek.' } },
    { id: 'norsk-vg3-3-7-n-section4', type: 'text', content: `## Sammenligning: To tilnaerminger

Begge er postmodernistiske og intellektuelle. Begge er sentrale i norsk litteraturdebatt. Men:

Solstad er mer personlig og selvutleverende. Han skriver om tvilen, skammen, usikkerheten. Spraaket buker seg og graver i sinnet.

Kjaaerstad er mer konstruerende og leken. Han bygger komplekse verdener og inviterer leseren inn i spillet. Spraaket er presist og virtuost.` },
    { id: 'norsk-vg3-3-7-n-quiz4', type: 'exercise', exercise: { id: 'norsk-vg3-3-7-n-quiz4', number: 'Quiz 4', type: 'multiple-choice', task: 'Hva skiller Solstad og Kjaaerstad?', options: [{ id: 'a', text: 'Solstad skriver kun lyrikk', isCorrect: false }, { id: 'b', text: 'Solstad er mer selvutleverende, Kjaaerstad mer konstruerende', isCorrect: true }, { id: 'c', text: 'Kjaaerstad skriver bare korte noveller', isCorrect: false }, { id: 'd', text: 'De er helt like', isCorrect: false }], correctAnswer: 'b', solution: 'Solstad er mer personlig og selvutleverende, Kjaaerstad mer konstruerende og leken.' } },
    { id: 'norsk-vg3-3-7-n-section5', type: 'text', content: `## Betydning

Baade Solstad og Kjaaerstad har pavirket norsk litteratur dypt. De har vist at romanen kan vaere intellektuelt ambisioes uten aa miste kontakten med leseren.

De representerer ogsaa en tradisjon der forfatteren er offentlig intellektuell - en som deltar i debatten, som tar standpunkt, som mener noe om samfunnet.

I en tid da litteraturen kanskje er marginalisert, minner de oss om hva romanen kan vaere.` },
    { id: 'norsk-vg3-3-7-n-quiz5', type: 'exercise', exercise: { id: 'norsk-vg3-3-7-n-quiz5', number: 'Quiz 5', type: 'multiple-choice', task: 'Hva har Solstad og Kjaaerstad felles?', options: [{ id: 'a', text: 'De skriver kun krim', isCorrect: false }, { id: 'b', text: 'De er begge intellektuelle og sentrale i litteraturdebatten', isCorrect: true }, { id: 'c', text: 'De bor begge i Bergen', isCorrect: false }, { id: 'd', text: 'De skriver kun paa nynorsk', isCorrect: false }], correctAnswer: 'b', solution: 'Begge er intellektuelle forfattere som er sentrale i den norske litteraturdebatten.' } },
    { id: 'norsk-vg3-3-7-n-summary', type: 'text', content: `## Oppsummering

**Dag Solstad (f. 1941):** Fra politisk engasjement til selvrefleksjon. Lange setninger, tvil, skam. Hovedverk: "Genanse og verdighet" (1994).

**Jan Kjaaerstad (f. 1953):** Ambisioese konstruksjoner, intellektuell lek. Hovedverk: Jonas Wergeland-trilogien (1993-1999).

**Felles:** Begge er intellektuelle, postmodernistiske, sentrale i litteraturdebatten.
**Forskjell:** Solstad er selvutleverende, Kjaaerstad er konstruerende.` },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.8 NARRATIV: Karl Ove Knausgaard
// ============================================================================

export const CHAPTER_NORSK_VG3_3_8_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-3-8-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '3.8',
  title: 'Karl Ove Knausgaard',
  subtitle: 'Narrativ versjon',
  description: 'Moeet mannen som skrev tusenvis av sider om bleier og frokostblanding - og forandret litteraturen.',
  estimatedMinutes: 35,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
    'skrive litteraere analyser og sammenligninger',
  ],
  linkedChapterId: 'norsk-vg3-3-8',
  content: [
    { id: 'norsk-vg3-3-8-n-intro', type: 'text', content: `## Mannen som skrev alt

I 2009 begynte Karl Ove Knausgaard aa gi ut "Min kamp" - en seksbinds roman om sitt eget liv. Seks bind. Over 3500 sider. Om aa vaere barn, ungdom, voksen. Om farens doed. Om ekteskapet. Om aa skifte bleier.

Folk leste - i millioner. De leste om Knausgaards morgener, hans irritasjoner, hans skam. Kritikerne var forvirret: Er dette litteratur eller bare bekjennelse? Narcissisme eller radikal aerlighet?

Uansett hva man mener: Knausgaard forandret noe. Han viste at det hverdagslige kunne baere et helt forfatterskap.` },
    { id: 'norsk-vg3-3-8-n-section1', type: 'text', content: `## "Min kamp" - prosjektet

Karl Ove Knausgaard (f. 1968) debuterte i 1998, men det var "Min kamp" som gjorde ham til internasjonal stjerne.

De seks bindene foelger hans liv fra barndom til naaatid. Han bruker ekte navn - paa seg selv, familien, venner. Han skriver om farens alkoholisme og doed. Om ekteskapet. Om barna. Ingenting er for privat.

Stilen er detaljert, langsom, dvelende. Knausgaard beskriver tennissko og frokostblanding med samme intensitet som de store foelelsene.` },
    { id: 'norsk-vg3-3-8-n-quiz1', type: 'exercise', exercise: { id: 'norsk-vg3-3-8-n-quiz1', number: 'Quiz 1', type: 'multiple-choice', task: 'Hva handler "Min kamp" om?', options: [{ id: 'a', text: 'Andre verdenskrig', isCorrect: false }, { id: 'b', text: 'Knausgaards eget liv fra barndom til naaatid', isCorrect: true }, { id: 'c', text: 'Livet i Oslo paa 1800-tallet', isCorrect: false }, { id: 'd', text: 'En fiktiv families historie', isCorrect: false }], correctAnswer: 'b', solution: '"Min kamp" handler om Knausgaards eget liv fra barndom til naaatid.' } },
    { id: 'norsk-vg3-3-8-n-section2', type: 'text', content: `## Autofisjon - fakta eller fiksjon?

Knausgaard kaller "Min kamp" roman, men det leser som selvbiografi. Dette er autofisjon - litteratur som blander fakta og fiksjon, der forfatteren bruker sitt eget liv som materiale.

Men hvor sant er det? Knausgaard former minnene litteraert. Han velger hva som skal med, hva som skal utelates. Er det da fortsatt sannhet?

Kanskje er spoersmaalet feil stilt. Kanskje er poenget at grensen mellom fiksjon og virkelighet er umulig aa trekke - i litteraturen som i livet.` },
    { id: 'norsk-vg3-3-8-n-quiz2', type: 'exercise', exercise: { id: 'norsk-vg3-3-8-n-quiz2', number: 'Quiz 2', type: 'multiple-choice', task: 'Hva er autofisjon?', options: [{ id: 'a', text: 'Fiksjon skrevet av datamaskiner', isCorrect: false }, { id: 'b', text: 'Litteratur som blander selvbiografi og fiksjon', isCorrect: true }, { id: 'c', text: 'Romaner om biler', isCorrect: false }, { id: 'd', text: 'Historiske dokumenter', isCorrect: false }], correctAnswer: 'b', solution: 'Autofisjon blander selvbiografi og fiksjon.' } },
    { id: 'norsk-vg3-3-8-n-section3', type: 'text', content: `## Kontroverser og etikk

"Min kamp" skapte ogsaa problemer. Knausgaard skrev om virkelige mennesker uten aa spoerre dem foerst. Onkelen hans saksoeekte. Ekskona protesterte.

Dette reiste viktige spoersmaal: Har forfatteren rett til aa bruke andres liv som materiale? Hvor gaar grensen mellom kunstnerisk frihet og personvern?

Knausgaard selv hevdet at aerligheten var nodvendig - at bare slik kunne litteraturen vaere sann. Men ikke alle var enige.` },
    { id: 'norsk-vg3-3-8-n-quiz3', type: 'exercise', exercise: { id: 'norsk-vg3-3-8-n-quiz3', number: 'Quiz 3', type: 'multiple-choice', task: 'Hvilket etisk sporsmaal reiser autofiksjonen?', options: [{ id: 'a', text: 'Om man kan skrive paa dialekt', isCorrect: false }, { id: 'b', text: 'Om forfatteren har rett til aa skrive om andre uten samtykke', isCorrect: true }, { id: 'c', text: 'Om boeeker bor vaere gratis', isCorrect: false }, { id: 'd', text: 'Om det finnes for mange forfattere', isCorrect: false }], correctAnswer: 'b', solution: 'Autofiksjonen reiser sporsmaal om retten til aa skrive om andre uten samtykke.' } },
    { id: 'norsk-vg3-3-8-n-section4', type: 'text', content: `## Hvorfor leste folk?

Hva var det ved "Min kamp" som traff saa mange? Kanskje gjenkaennelsen - Knausgaard skriver om erfaringer vi alle har: barndom, foreldre, kjaerlighet, skam.

Kanskje lengselen etter autentisitet i en iscenesatt verden. I sosiale mediers tid, der alle kuraterer sitt image, var det befriende med Knausgaards skamloese selvutlevering.

Eller kanskje bare den gode, gammeldagse fortellerkunsten: Knausgaard kan holde paa leseren, selv naar han skriver om aa rydde i farens dodsbo i hundrevis av sider.` },
    { id: 'norsk-vg3-3-8-n-quiz4', type: 'exercise', exercise: { id: 'norsk-vg3-3-8-n-quiz4', number: 'Quiz 4', type: 'multiple-choice', task: 'Hvorfor ble "Min kamp" saa populaer?', options: [{ id: 'a', text: 'Fordi den var veldig kort', isCorrect: false }, { id: 'b', text: 'Gjenkaennelse, lengsel etter autentisitet, og god fortellerteknikk', isCorrect: true }, { id: 'c', text: 'Fordi den var gratis', isCorrect: false }, { id: 'd', text: 'Fordi den handlet om krim', isCorrect: false }], correctAnswer: 'b', solution: 'Suksessen skyldes gjenkaennelse, lengsel etter autentisitet, og god fortellerteknikk.' } },
    { id: 'norsk-vg3-3-8-n-section5', type: 'text', content: `## Arven etter Knausgaard

Knausgaard aapnet en dor. Etter "Min kamp" har mange forfattere brukt egne liv som materiale. Autofiksjonen har blitt en dominerende tendens.

Men kanskje viktigere: Han viste at det hverdagslige kunne vaere stort nok. At en frokost, et barns graat, et uoppvasket kjoekken kunne baere litteraer tyngde.

Det er en demokratisering av litteraturen. Du trenger ikke store hendelser for aa ha en historie verdt aa fortelle. Du trenger bare evnen til aa se.` },
    { id: 'norsk-vg3-3-8-n-quiz5', type: 'exercise', exercise: { id: 'norsk-vg3-3-8-n-quiz5', number: 'Quiz 5', type: 'multiple-choice', task: 'Hva er Knausgaards viktigste bidrag?', options: [{ id: 'a', text: 'At han innfoerte krimsjangeren', isCorrect: false }, { id: 'b', text: 'At han viste at det hverdagslige kunne baere stor litteratur', isCorrect: true }, { id: 'c', text: 'At han grunnla nynorsken', isCorrect: false }, { id: 'd', text: 'At han vant Nobelprisen', isCorrect: false }], correctAnswer: 'b', solution: 'Knausgaard viste at det hverdagslige kunne baere stor litteratur.' } },
    { id: 'norsk-vg3-3-8-n-summary', type: 'text', content: `## Oppsummering

**Karl Ove Knausgaard (f. 1968)** skapte internasjonal sensasjon med "Min kamp" (2009-2011).

**Autofisjon:** Blander selvbiografi og fiksjon. Bruker ekte navn og hendelser.

**Stil:** Detaljert, langsom, dvelende. Det hverdagslige faar litteraer tyngde.

**Kontroverser:** Etiske sporsmaal om aa skrive om andre uten samtykke.

**Betydning:** Aapnet for autofiksjonen som hovedtendens. Demokratiserte litteraturen.` },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.9 NARRATIV: Mangfoldige stemmer i norsk litteratur
// ============================================================================

export const CHAPTER_NORSK_VG3_3_9_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-3-9-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '3.9',
  title: 'Mangfoldige stemmer i norsk litteratur',
  subtitle: 'Narrativ versjon',
  description: 'Moeet de nye stemmene som utvider hva norsk litteratur kan vaere - fra Groruddalen til Finnmark.',
  estimatedMinutes: 35,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'reflektere over mangfold i litteraturen',
  ],
  linkedChapterId: 'norsk-vg3-3-9',
  content: [
    { id: 'norsk-vg3-3-9-n-intro', type: 'text', content: `## Nye stemmer, nye historier

Hva er norsk litteratur? For ikke lenge siden ville svaret vaert opplagt: boeker skrevet av norske forfattere, om norske erfaringer, paa norsk.

Men hva naar "norsk" ikke lenger er saa enkelt? Naar forfattere har roetter i Pakistan og Somalia, i Kurdistan og Vietnam? Naar de vokste opp paa Groruddalen eller Toeyen, med ett bein i Norge og ett i en annen kultur?

De siste aarene har nye stemmer kommet til i norsk litteratur. De bringer med seg nye erfaringer, nye spraak, nye maater aa vaere norsk paa. Og de utvider hva norsk litteratur kan handle om.` },
    { id: 'norsk-vg3-3-9-n-section1', type: 'text', content: `## Flerkulturelle forfattere

Maria Navarro Skaranger debuterte i 2015 med "Alle utlendinger har lukka gardiner". Romanen handler om ungdom paa Romsaas og er skrevet i et spraak som reflekterer hvordan de faktisk snakker - med innslag av urdu, engelsk og slang.

Zeshan Shakar fikk gjennombrudd med "Tante Ulrikkes vei" (2017). Romanen foelger to venner fra Stovner - Jamal og Mo - og veksler mellom deres perspektiver. Den ene dropper ut, den andre tar utdanning. Romanen viser forskjells-Norge innenfra.

Sumaya Jirde Ali skriver lyrikk om identitet og tilhoerighet. Roda Ahmed skriver romaner om somalisk-norsk erfaring.` },
    { id: 'norsk-vg3-3-9-n-quiz1', type: 'exercise', exercise: { id: 'norsk-vg3-3-9-n-quiz1', number: 'Quiz 1', type: 'multiple-choice', task: 'Hva handler "Tante Ulrikkes vei" om?', options: [{ id: 'a', text: 'En tante som bor i en vei', isCorrect: false }, { id: 'b', text: 'To venner fra Stovner med ulike livsloep', isCorrect: true }, { id: 'c', text: 'Historien om Oslo', isCorrect: false }, { id: 'd', text: 'En familie paa landet', isCorrect: false }], correctAnswer: 'b', solution: 'Romanen handler om to venner fra Stovner med ulike livsloep.' } },
    { id: 'norsk-vg3-3-9-n-section2', type: 'text', content: `## Spraaklig fornyelse

Mange flerkulturelle forfattere bruker et spraak som reflekterer hvordan folk faktisk snakker. Det betyr kodeskifte - bytte mellom spraak midt i en setning. Det betyr slang og uttrykk fra innvandrermiljoeer.

Dette er ikke "daarlig norsk". Det er spraaklig mangfold. Og det viser at det norske spraaket lever, utvikler seg, tar opp i seg nye impulser.

For noen lesere kan dette vaere uvant. Men det aapner ogsaa nye muligheter - nye rytmer, nye uttrykk, nye maater aa skildre virkeligheten paa.` },
    { id: 'norsk-vg3-3-9-n-quiz2', type: 'exercise', exercise: { id: 'norsk-vg3-3-9-n-quiz2', number: 'Quiz 2', type: 'multiple-choice', task: 'Hva er kodeskifte?', options: [{ id: 'a', text: 'Aa skrive i kode', isCorrect: false }, { id: 'b', text: 'Aa bytte mellom spraak midt i en setning', isCorrect: true }, { id: 'c', text: 'Aa bruke hemmelig spraak', isCorrect: false }, { id: 'd', text: 'Aa oversette fra ett spraak til et annet', isCorrect: false }], correctAnswer: 'b', solution: 'Kodeskifte er aa bytte mellom spraak midt i en setning.' } },
    { id: 'norsk-vg3-3-9-n-section3', type: 'text', content: `## Samisk litteratur

Ogsaa samiske forfattere har fatt stoerre plass i norsk litteratur. Nils-Aslak Valkeapaeae var en pioner som skrev paa samisk og ble internasjonalt anerkjent.

Sigbjoern Skaaden skriver romaner som utforsker samisk identitet i moetet med det moderne Norge. Han stiller sporsmaal om tilhoerighet, spraak og kulturell overlevelse.

Den samiske litteraturen minner oss om at Norge aldri har vaert en enhetlig kultur. Mangfoldet har alltid vaert der - det er bare naa det faar mer plass.` },
    { id: 'norsk-vg3-3-9-n-quiz3', type: 'exercise', exercise: { id: 'norsk-vg3-3-9-n-quiz3', number: 'Quiz 3', type: 'multiple-choice', task: 'Hvorfor er samisk litteratur viktig?', options: [{ id: 'a', text: 'Den minner oss om at Norge aldri har vaert en enhetlig kultur', isCorrect: true }, { id: 'b', text: 'Den er skrevet paa engelsk', isCorrect: false }, { id: 'c', text: 'Den handler bare om reinsdyr', isCorrect: false }, { id: 'd', text: 'Den er uvesentlig', isCorrect: false }], correctAnswer: 'a', solution: 'Samisk litteratur minner oss om at Norge aldri har vaert en enhetlig kultur.' } },
    { id: 'norsk-vg3-3-9-n-section4', type: 'text', content: `## Nye temaer

De nye stemmene bringer ogsaa nye temaer til litteraturen. Erfaringen av aa leve mellom kulturer. Rasisme og fordommer. Klassereiser og sosial mobilitet. Generasjonskonflikter mellom foreldre som innvandret og barn som vokste opp her.

Dette er temaer som angaar mange nordmenn - ikke bare de med innvandrerbakgrunn. For hvem er egentlig "norsk"? Hva betyr tilhoerighet? Hvordan lever vi sammen i et samfunn med mange kulturer?

Litteraturen gir ikke ferdige svar. Men den gir oss muligheten til aa se verden gjennom andre oyne - og kanskje forstaa litt mer.` },
    { id: 'norsk-vg3-3-9-n-quiz4', type: 'exercise', exercise: { id: 'norsk-vg3-3-9-n-quiz4', number: 'Quiz 4', type: 'multiple-choice', task: 'Hvilke temaer bringer de nye stemmene til litteraturen?', options: [{ id: 'a', text: 'Bare historiske temaer', isCorrect: false }, { id: 'b', text: 'Aa leve mellom kulturer, rasisme, identitet og tilhoerighet', isCorrect: true }, { id: 'c', text: 'Bare natur og landskap', isCorrect: false }, { id: 'd', text: 'Bare kjaerlighetshistorier', isCorrect: false }], correctAnswer: 'b', solution: 'De nye stemmene skriver om aa leve mellom kulturer, rasisme, identitet og tilhoerighet.' } },
    { id: 'norsk-vg3-3-9-n-section5', type: 'text', content: `## Fremtiden

Norsk litteratur i dag er mer mangfoldig enn noen gang. Og dette er bare begynnelsen. Ettersom Norge blir mer mangfoldig, vil ogsaa litteraturen bli det.

Noen er bekymret for at dette truer "norsk" litteratur. Men kanskje er det motsatte sant: Mangfoldet beriker litteraturen, gir den nye impulser, nye perspektiver, nye historier.

Det som gjoer litteratur god, er ikke hvor forfatteren kommer fra. Det er evnen til aa skildre menneskelivet - med all dets kompleksitet - paa en maate som beveeger og beriker leseren.` },
    { id: 'norsk-vg3-3-9-n-quiz5', type: 'exercise', exercise: { id: 'norsk-vg3-3-9-n-quiz5', number: 'Quiz 5', type: 'multiple-choice', task: 'Hva tilforer mangfoldet norsk litteratur?', options: [{ id: 'a', text: 'Ingenting nytt', isCorrect: false }, { id: 'b', text: 'Nye impulser, perspektiver og historier', isCorrect: true }, { id: 'c', text: 'Bare forvirring', isCorrect: false }, { id: 'd', text: 'Doaarligere kvalitet', isCorrect: false }], correctAnswer: 'b', solution: 'Mangfoldet beriker litteraturen med nye impulser, perspektiver og historier.' } },
    { id: 'norsk-vg3-3-9-n-summary', type: 'text', content: `## Oppsummering

**Flerkulturelle stemmer** i norsk litteratur inkluderer:
- Maria Navarro Skaranger: "Alle utlendinger har lukka gardiner"
- Zeshan Shakar: "Tante Ulrikkes vei"
- Sumaya Jirde Ali: Lyrikk om identitet
- Roda Ahmed: Somalisk-norsk erfaring

**Samisk litteratur:** Nils-Aslak Valkeapaeae, Sigbjoern Skaaden

**Nye temaer:** Aa leve mellom kulturer, rasisme, identitet, tilhoerighet

**Spraaklig fornyelse:** Kodeskifte, slang, nye uttrykk

**Betydning:** Mangfoldet beriker litteraturen med nye perspektiver og historier.` },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const NORSK_VG3_NARRATIV_DEL5_CHAPTERS = [
  CHAPTER_NORSK_VG3_3_1_NARRATIV,
  CHAPTER_NORSK_VG3_3_2_NARRATIV,
  CHAPTER_NORSK_VG3_3_3_NARRATIV,
  CHAPTER_NORSK_VG3_3_4_NARRATIV,
  CHAPTER_NORSK_VG3_3_5_NARRATIV,
  CHAPTER_NORSK_VG3_3_6_NARRATIV,
  CHAPTER_NORSK_VG3_3_7_NARRATIV,
  CHAPTER_NORSK_VG3_3_8_NARRATIV,
  CHAPTER_NORSK_VG3_3_9_NARRATIV,
];
