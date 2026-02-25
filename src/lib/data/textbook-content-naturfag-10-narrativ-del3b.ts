/**
 * Naturfag 10 - Narrativ versjon DEL 3B
 * Seksjon 3: Fysikk og energi (3.4-3.6)
 *
 * Engasjerende fortellende format optimalisert for lesing/lytting på mobil
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 3.4 NARRATIV: Bølger og stråling
// ============================================================================

export const CHAPTER_NATURFAG_10_3_4_NARRATIV: TextbookChapter = {
  id: 'naturfag-10-3-4-narrativ',
  courseId: 'naturfag-10',
  chapterNumber: '3.4',
  title: 'Bølger og stråling',
  subtitle: 'Narrativ versjon',
  description:
    'Opplev hvordan musikk, lys og varme alle er former for bølger, og forstå hvorfor noen typer stråling er farlige mens andre er helt trygge.',
  estimatedMinutes: 40,
  competenceGoals: [
    'forklare hvordan energi kan overføres og omformes',
    'beskrive ulike former for stråling og deres effekter',
  ],
  linkedChapterId: 'naturfag-10-3-4',
  content: [
    {
      id: 'naturfag-10-3-4-n-intro',
      type: 'text',
      content: `## Usynlige bærere av energi

Lukk øynene et øyeblikk og tenk over hva du opplever akkurat nå. Kanskje hører du musikk fra høyttalerne. Kanskje kjenner du varmen fra solen gjennom vinduet. Kanskje ser du fargene på denne skjermen. Alt dette, lyd, varme og lys, har én ting til felles: det er bølger som bærer energi gjennom rommet uten å flytte noe stoff.

Ideen er ganske oppsiktsvekkende når du tenker over den. Når du kaster en stein i et stille vann, ser du ringer som sprer seg utover. Men vannet selv flytter seg ikke fra midten til kanten. Det bare svinger opp og ned mens forstyrrelsene brer seg utover. Energien fra steinens fall reiser med bølgene, mens vannmolekylene stort sett blir der de var.

Det finnes to store familier av bølger. Mekaniske bølger trenger et stoff å reise gjennom, et medium, slik lydbølger trenger luft, vann eller fast stoff. Elektromagnetiske bølger derimot klarer seg helt fint på egen hånd og kan reise gjennom det tomme verdensrommet. Det er derfor sollyset når oss tvers gjennom millioner av kilometer med vakuum.

I dette kapittelet skal vi utforske begge familiene. Vi skal forstå hvorfor du hører musikk, se farger og kjenne varme, og vi skal oppdage hvorfor noen typer stråling er farlige mens andre er helt trygge.`,
    },
    {
      id: 'naturfag-10-3-4-n-section1',
      type: 'text',
      content: `## Bølgens tre egenskaper

Alle bølger, uansett om det er lydbølger fra en gitar, lysbølger fra solen eller vannbølger på havet, beskrives av tre grunnleggende egenskaper.

Den første er bølgelengde, som vi skriver med det greske symbolet lambda (λ). Bølgelengde er ganske enkelt avstanden mellom to påfølgende bølgetopper. Radiobølger kan ha bølgelengder på flere kilometer, mens synlig lys har bølgelengder på bare noen hundre nanometer, altså milliarddeler av en meter.

Den andre er frekvens, forkortet f. Frekvens måles i hertz (Hz) og forteller oss hvor mange bølger som passerer et gitt punkt per sekund. En dyp basstone har lav frekvens, kanskje 50 Hz, mens en skingrende fløytetone kan ligge på 4000 Hz. FM-radio sender med frekvenser rundt 100 megahertz, altså 100 millioner svingninger per sekund.

Den tredje er amplitude, som er bølgens høyde. For lyd bestemmer amplituden volumet: stor amplitude betyr høy lyd, liten amplitude betyr svak lyd. For lys bestemmer amplituden lysstyrken: stor amplitude betyr sterkt lys.

Disse tre egenskapene henger sammen gjennom en elegant formel: v = f ganger λ, altså hastighet er lik frekvens ganget med bølgelengde. Det betyr at høy frekvens gir kort bølgelengde, og lav frekvens gir lang bølgelengde, så lenge hastigheten er den samme.`,
    },
    {
      id: 'naturfag-10-3-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-3-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på bølger og bølgeegenskaper:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-3-4-n-quiz1-q0',
            task: 'Hva er det korrekte om bølger?',
            options: [
              { id: 'a', text: 'Bølger flytter masse fra ett sted til et annet', isCorrect: false },
              { id: 'b', text: 'Bølger overfører energi uten å flytte masse', isCorrect: true },
              { id: 'c', text: 'Bølger kan bare bevege seg gjennom vann', isCorrect: false },
              { id: 'd', text: 'Bølger beveger seg alltid med lysets hastighet', isCorrect: false },
            ],
            solution:
              'Bølger overfører energi uten å flytte masse. Når du kaster en stein i vann, beveger bølgene seg utover, men vannet selv går bare opp og ned. Bare elektromagnetiske bølger i vakuum beveger seg med lysets hastighet.',
          },
          {
            id: 'naturfag-10-3-4-n-quiz1-q1',
            task: 'Hva bestemmer volumet til en lyd?',
            options: [
              { id: 'a', text: 'Bølgelengden', isCorrect: false },
              { id: 'b', text: 'Frekvensen', isCorrect: false },
              { id: 'c', text: 'Amplituden', isCorrect: true },
              { id: 'd', text: 'Hastigheten', isCorrect: false },
            ],
            solution:
              'Amplituden bestemmer volumet til en lyd. Stor amplitude gir høy lyd, liten amplitude gir svak lyd. Frekvensen derimot bestemmer tonehøyden, altså om lyden er lys eller mørk.',
          },
          {
            id: 'naturfag-10-3-4-n-quiz1-q2',
            task: 'Hva skjer med bølgelengden når frekvensen øker?',
            options: [
              { id: 'a', text: 'Bølgelengden øker også', isCorrect: false },
              { id: 'b', text: 'Bølgelengden forblir uendret', isCorrect: false },
              { id: 'c', text: 'Bølgelengden blir kortere', isCorrect: true },
              { id: 'd', text: 'Bølgelengden forsvinner', isCorrect: false },
            ],
            solution:
              'Ifølge formelen v = f · λ, når hastigheten er konstant, vil høyere frekvens gi kortere bølgelengde. De er omvendt proporsjonale. Derfor har høye toner kort bølgelengde og lave toner lang bølgelengde.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-3-4-n-section2',
      type: 'text',
      content: `## Lyd: Bølger som trenger et medium

Når du snakker, vibrerer stemmeleppene dine og lager trykkbølger i luften. Disse trykkbølgene brer seg utover, treffer trommehinnene til den du snakker med, og hjernen tolker vibrasjonene som lyd. Lyd er altså mekaniske bølger, trykkvariasjoner som forplanter seg gjennom et stoff.

Det viktigste å forstå om lyd er at den trenger et medium. I vakuum, altså i tomt rom, finnes det ingen luftmolekyler som kan vibrere, og derfor kan lyd rett og slett ikke bevege seg der. Hvis du sto på månen og ropte til vennen din ti meter unna, ville vennen din ikke høre et eneste ord. Astronauter bruker radio for å kommunisere av akkurat denne grunnen.

Lydens hastighet avhenger av hva den reiser gjennom. I luft ved 20 grader Celsius beveger lyd seg med omtrent 340 meter per sekund. I vann går det mye raskere, rundt 1480 meter per sekund. I stål er hastigheten hele 5000 meter per sekund. Grunnen er enkel: jo tettere molekylene er pakket, desto raskere kan vibrasjonene overføres fra molekyl til molekyl.

Tonehøyde bestemmes av frekvensen. Høy frekvens gir høy tone, som en fløyte. Lav frekvens gir dyp tone, som en bass. Volumet bestemmes av amplituden. Stor amplitude betyr mye energi og høy lyd, liten amplitude betyr lite energi og svak lyd.`,
    },
    {
      id: 'naturfag-10-3-4-n-section3',
      type: 'text',
      content: `## Det elektromagnetiske spekteret

Nå forlater vi mekaniske bølger og entrer en verden som er langt mer mangfoldig. Elektromagnetisk stråling er bølger av elektriske og magnetiske felt som beveger seg gjennom rommet uten å trenge noe medium. I vakuum reiser alle disse bølgene med lysets hastighet: 300 millioner meter per sekund.

Det fascinerende er at synlig lys, altså det du ser med øynene, bare er en liten del av et enormt spekter. Hele det elektromagnetiske spekteret strekker seg fra radiobølger med bølgelengder på flere kilometer, via mikrobølger, infrarød stråling, synlig lys, ultrafiolett stråling og røntgenstråler, helt ned til gammastråler med bølgelengder kortere enn en atomkjerne.

Synlig lys har bølgelengder mellom omtrent 400 nanometer for fiolett og 700 nanometer for rødt. Hvitt lys er en blanding av alle regnbuens farger. Når lys treffer en gjenstand, absorberes noen bølgelengder mens andre reflekteres tilbake til øynene dine. Et rødt eple absorberer alle farger unntatt rødt, og det røde lyset spretter tilbake slik at du ser eplet som rødt.

Her er den viktigste regelen å huske: jo kortere bølgelengde, desto høyere energi. Radiobølger har lang bølgelengde og lav energi, helt ufarlige. Synlig lys er i midten. Men UV-stråling, røntgen og gammastråler har kort bølgelengde og høy energi, og de kan være farlige for kroppen din.`,
    },
    {
      id: 'naturfag-10-3-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-3-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på lyd og elektromagnetisk stråling:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-3-4-n-quiz2-q0',
            task: 'Hvorfor kan vi ikke høre lyd i verdensrommet?',
            options: [
              { id: 'a', text: 'Fordi det er for kaldt i verdensrommet', isCorrect: false },
              { id: 'b', text: 'Fordi lyd er mekaniske bølger som trenger et medium', isCorrect: true },
              { id: 'c', text: 'Fordi lydhastigheten er null i vakuum', isCorrect: false },
              { id: 'd', text: 'Fordi ørene våre ikke fungerer i verdensrommet', isCorrect: false },
            ],
            solution:
              'Lyd er trykkbølger som trenger et stoff (medium) å bevege seg gjennom. I vakuum finnes det ingen luftmolekyler eller andre partikler som kan vibrere, og derfor kan lyd ikke forplante seg der.',
          },
          {
            id: 'naturfag-10-3-4-n-quiz2-q1',
            task: 'Hvilken type stråling har kortest bølgelengde og høyest energi?',
            options: [
              { id: 'a', text: 'Radiobølger', isCorrect: false },
              { id: 'b', text: 'Synlig lys', isCorrect: false },
              { id: 'c', text: 'Infrarød stråling', isCorrect: false },
              { id: 'd', text: 'Gammastråler', isCorrect: true },
            ],
            solution:
              'Gammastråler har kortest bølgelengde av all elektromagnetisk stråling. Kortere bølgelengde betyr høyere frekvens og høyere energi. Derfor er gammastråler den mest energirike og farligste typen stråling.',
          },
          {
            id: 'naturfag-10-3-4-n-quiz2-q2',
            task: 'Hvorfor ser vi et eple som rødt?',
            options: [
              { id: 'a', text: 'Fordi eplet sender ut rødt lys', isCorrect: false },
              { id: 'b', text: 'Fordi eplet absorberer rødt lys', isCorrect: false },
              { id: 'c', text: 'Fordi eplet reflekterer rødt lys og absorberer andre farger', isCorrect: true },
              { id: 'd', text: 'Fordi øynene våre fargelegger eplet rødt', isCorrect: false },
            ],
            solution:
              'Gjenstander reflekterer noen bølgelengder av lys og absorberer andre. Et rødt eple absorberer alle farger unntatt rødt. Det røde lyset reflekteres tilbake til øynene våre, og derfor ser vi eplet som rødt.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-3-4-n-section4',
      type: 'text',
      content: `## Stråling og helse: Trygt og farlig

Ikke all stråling er farlig, og skillet går ved et viktig begrep: ioniserende stråling. Ioniserende stråling har nok energi til å rive elektroner løs fra atomer, noe som kan skade DNA-et i cellene dine. Ikke-ioniserende stråling har ikke nok energi til dette, og er trygg ved normale nivåer.

Radiobølger, mikrobølger, infrarød stråling og synlig lys er alle ikke-ioniserende. Du kan bruke WiFi, se på TV, varme mat i mikrobølgeovnen og nyte sollys uten bekymring. Infrarød stråling er det vi kjenner som varme, og du merker den fra peisen, solen og til og med fra din egen kropp.

Men så kommer den usynlige grensen. Ultrafiolett stråling fra solen begynner å bli farlig. I moderate mengder er UV-stråling nyttig fordi den hjelper kroppen din å lage D-vitamin, men for mye UV kan skade DNA i hudcellene og gi hudkreft. Beskyttelse er viktig: bruk solkrem med SPF 15 eller høyere, solbriller med UV-filter, og hold deg i skyggen mellom klokken 11 og 15 når UV-strålingen er sterkest.

Røntgenstråler brukes i medisin for å se inni kroppen, men er ioniserende og gis bare i små doser ved behov. Bleiskjold beskytter kroppen under røntgen. Gammastråler er den mest energirike typen, ekstremt farlig, og kommer fra radioaktive stoffer og verdensrommet. Tre prinsipper beskytter mot slik stråling: avstand, avskjerming med bly eller betong, og kortest mulig eksponeringstid.`,
    },
    {
      id: 'naturfag-10-3-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-3-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på stråling og helse:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-3-4-n-quiz3-q0',
            task: 'Hva er forskjellen mellom ioniserende og ikke-ioniserende stråling?',
            options: [
              { id: 'a', text: 'Ioniserende stråling er synlig, ikke-ioniserende er usynlig', isCorrect: false },
              { id: 'b', text: 'Ioniserende stråling kan skade DNA, ikke-ioniserende kan det ikke', isCorrect: true },
              { id: 'c', text: 'Ioniserende stråling er kald, ikke-ioniserende er varm', isCorrect: false },
              { id: 'd', text: 'Det er ingen reell forskjell mellom dem', isCorrect: false },
            ],
            solution:
              'Ioniserende stråling har nok energi til å rive elektroner fra atomer og kan derfor skade DNA. Dette inkluderer UV-stråling, røntgenstråler og gammastråler. Ikke-ioniserende stråling (radio, mikro, infrarød, synlig lys) har ikke nok energi til dette og er trygg ved normale nivåer.',
          },
          {
            id: 'naturfag-10-3-4-n-quiz3-q1',
            task: 'Hvorfor bør du bruke solkrem om sommeren?',
            options: [
              { id: 'a', text: 'For å beskytte mot infrarød stråling', isCorrect: false },
              { id: 'b', text: 'For å beskytte mot radiobølger', isCorrect: false },
              { id: 'c', text: 'For å beskytte mot UV-stråling som kan skade DNA og gi hudkreft', isCorrect: true },
              { id: 'd', text: 'For å beskytte mot synlig lys', isCorrect: false },
            ],
            solution:
              'Solkrem beskytter huden mot UV-stråling fra solen. UV-stråling er ioniserende og kan skade DNA i hudcellene, noe som over tid kan føre til hudkreft. Solkrem med SPF 15 eller høyere anbefales, og man bør smøre på nytt minst hver andre time.',
          },
          {
            id: 'naturfag-10-3-4-n-quiz3-q2',
            task: 'Hvilke tre prinsipper beskytter mot ioniserende stråling?',
            options: [
              { id: 'a', text: 'Avstand, avskjerming og begrenset tid', isCorrect: true },
              { id: 'b', text: 'Varme, kulde og trykk', isCorrect: false },
              { id: 'c', text: 'Fart, retning og kraft', isCorrect: false },
              { id: 'd', text: 'Masse, volum og tetthet', isCorrect: false },
            ],
            solution:
              'De tre prinsippene for strålevern er avstand (hold deg unna kilden), avskjerming (bruk bly eller betong som barriere) og tid (begrens varigheten av eksponeringen). Jo lenger unna du er, jo bedre avskjerming du har, og jo kortere tid du er eksponert, desto tryggere er du.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-3-4-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket bølgenes fascinerende verden. Vi har sett at bølger overfører energi uten å flytte masse, og at det finnes to hovedtyper: mekaniske bølger som trenger et medium, og elektromagnetiske bølger som kan reise gjennom vakuum.

Vi har lært at alle bølger beskrives av tre egenskaper: bølgelengde (avstand mellom to topper), frekvens (antall svingninger per sekund) og amplitude (bølgens høyde som bestemmer styrken). Disse henger sammen gjennom formelen v = f · λ.

Lyd er mekaniske trykkbølger som beveger seg med 340 meter per sekund i luft, raskere i vann og enda raskere i faste stoffer. Lyd kan ikke bevege seg i vakuum fordi det ikke finnes noe medium å vibrere i.

Det elektromagnetiske spekteret spenner fra radiobølger via mikrobølger, infrarød, synlig lys og UV til røntgen og gammastråler. Kortere bølgelengde betyr høyere energi. Ikke-ioniserende stråling som radio, infrarød og synlig lys er trygg, mens ioniserende stråling som UV, røntgen og gamma kan skade DNA og gi kreft. Beskyttelse mot farlig stråling handler om avstand, avskjerming og begrenset eksponeringstid.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.5 NARRATIV: Energiproduksjon og miljø
// ============================================================================

export const CHAPTER_NATURFAG_10_3_5_NARRATIV: TextbookChapter = {
  id: 'naturfag-10-3-5-narrativ',
  courseId: 'naturfag-10',
  chapterNumber: '3.5',
  title: 'Energiproduksjon og miljø',
  subtitle: 'Narrativ versjon',
  description:
    'Forstå hvordan verden skaffer seg energi, fra fossile brennstoff til fornybare kilder, og oppdage hva det koster naturen og hva framtiden krever.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive ulike energikilder og hvordan de produserer energi',
    'drøfte fordeler og ulemper ved ulike energikilder',
    'vurdere energikildenes påvirkning på miljø og klima',
  ],
  linkedChapterId: 'naturfag-10-3-5',
  content: [
    {
      id: 'naturfag-10-3-5-n-intro',
      type: 'text',
      content: `## Verdens energihunger

Hver eneste dag bruker du energi i et omfang som ville forbløffet dine oldeforeldre. Du lader mobilen, varmer huset, tar bussen til skolen, og spiser mat som har blitt fraktet hundrevis av kilometer. Men har du noen gang stoppet opp og tenkt over hvor all denne energien egentlig kommer fra, og hva den koster naturen?

Energikilder deles inn i to store grupper. Ikke-fornybare energikilder er ressurser som brukes opp og ikke kan erstattes innen overskuelig tid. Hit hører de fossile brennstoffene, altså olje, naturgass og kull, som ble dannet av døde planter og dyr over millioner av år. Kjernekraft basert på uran hører også hit, siden uranet til slutt tar slutt.

På den andre siden har vi fornybare energikilder som fornyer seg selv hele tiden: vannkraft som utnytter regnvannet som renner nedover fjellene, vindkraft som fanger vindens energi, solenergi som høster sollyset, bioenergi fra planter som vokser på kort tid, og geotermisk energi fra jordas indre varme.

I dette kapittelet skal vi se på hvordan disse energikildene fungerer, hva fordelene og ulempene er, og hva som kreves for at verden skal klare å skaffe nok energi uten å ødelegge klimaet.`,
    },
    {
      id: 'naturfag-10-3-5-n-section1',
      type: 'text',
      content: `## Fossile brennstoff: Millioner av års solenergi

De fossile brennstoffene dekker i dag over 80 prosent av verdens energibehov. Det er en enorm avhengighet. Men hva er egentlig fossile brennstoff?

Forestill deg jorda for 300 millioner år siden. Enorme skoger og hav fullt av mikroorganismer fanget solenergi gjennom fotosyntese. Når disse organismene døde, sank de til bunnen av hav og sumper, ble dekket av sedimenter, og ble utsatt for enormt trykk og høye temperaturer over millioner av år. Resultatet? Olje, naturgass og kull, som egentlig er lagret solenergi fra en fjern fortid.

Olje er et flytende brennstoff som brukes til bensin, diesel og fyringsolje. Norge er en stor oljeprodusent. Naturgass er gassformig og brukes til oppvarming og elektrisitet. Den er litt renere enn olje og kull fordi den slipper ut mindre CO₂ per energienhet. Kull er fast, brukes mye til elektrisitetsproduksjon i Asia, og er det mest forurensende fossile brennstoffet.

Når vi brenner fossile brennstoff, skjer det en forbrenningsreaksjon. Karbon reagerer med oksygen og danner karbondioksid: C + O₂ gir CO₂. Metan i naturgass reagerer slik: CH₄ + 2O₂ gir CO₂ + 2H₂O. Resultatet er alltid CO₂ som slippes ut i atmosfæren, der den fungerer som drivhusgass og bidrar til global oppvarming. Kull slipper ut 820 gram CO₂ per kilowattime, olje 650 gram og naturgass 490 gram. Til sammenligning slipper vindkraft bare ut 11 gram per kilowattime.`,
    },
    {
      id: 'naturfag-10-3-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-3-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på fossile brennstoff og energikilder:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-3-5-n-quiz1-q0',
            task: 'Hva skiller fornybare fra ikke-fornybare energikilder?',
            options: [
              { id: 'a', text: 'Fornybare er dyrere enn ikke-fornybare', isCorrect: false },
              { id: 'b', text: 'Fornybare fornyer seg naturlig, ikke-fornybare brukes opp', isCorrect: true },
              { id: 'c', text: 'Fornybare finnes bare i Norge', isCorrect: false },
              { id: 'd', text: 'Det er ingen forskjell mellom dem', isCorrect: false },
            ],
            solution:
              'Fornybare energikilder fornyer seg selv naturlig og kan ikke brukes opp, som sol, vind og vann. Ikke-fornybare energikilder tar millioner av år å danne og vil til slutt ta slutt, som fossile brennstoff og uran.',
          },
          {
            id: 'naturfag-10-3-5-n-quiz1-q1',
            task: 'Hvilket fossilt brennstoff slipper ut mest CO₂ per kilowattime?',
            options: [
              { id: 'a', text: 'Naturgass (490 g/kWh)', isCorrect: false },
              { id: 'b', text: 'Olje (650 g/kWh)', isCorrect: false },
              { id: 'c', text: 'Kull (820 g/kWh)', isCorrect: true },
              { id: 'd', text: 'Vindkraft (11 g/kWh)', isCorrect: false },
            ],
            solution:
              'Kull slipper ut 820 gram CO₂ per kilowattime, som er mest av alle energikilder. Kull består nesten bare av karbon, og all karbonen blir til CO₂ ved forbrenning. Naturgass er det reneste fossile brennstoffet med 490 g/kWh.',
          },
          {
            id: 'naturfag-10-3-5-n-quiz1-q2',
            task: 'Hva dannes når metan (CH₄) brennes?',
            options: [
              { id: 'a', text: 'Bare CO₂', isCorrect: false },
              { id: 'b', text: 'CO₂ og H₂O (vann)', isCorrect: true },
              { id: 'c', text: 'O₂ og H₂', isCorrect: false },
              { id: 'd', text: 'Bare H₂O', isCorrect: false },
            ],
            solution:
              'Forbrenning av metan gir karbondioksid og vann: CH₄ + 2O₂ → CO₂ + 2H₂O. Karbonet i metan blir til CO₂ (drivhusgass), mens hydrogen blir til vanndamp.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-3-5-n-section2',
      type: 'text',
      content: `## Vannkraft: Norges stolthet

Norge er i en unik posisjon i verden. Over 95 prosent av all elektrisitet vi bruker kommer fra vannkraft. Det er ekstremt rent og ekstremt effektivt, og det skyldes at naturen har gitt oss perfekte forhold: mye nedbør, høye fjell og dype daler.

Prinsippet bak vannkraft er elegant i sin enkelhet. Vann samles i et magasin bak en demning, høyt oppe i fjellet. Vannet har potensiell energi fordi det er høyt oppe, og denne energien kan beregnes med formelen E = mgh, altså masse ganger tyngdeakselerasjon ganger høyde. Når vannet slippes nedover gjennom rør, omdannes den potensielle energien til kinetisk energi. Vannet treffer turbinblader som begynner å rotere, og turbinen driver en generator som produserer elektrisk energi.

Norge har over 1700 vannkraftverk, og teknologien er svært effektiv med en virkningsgrad på rundt 85 til 90 prosent. Til sammenligning har kullkraftverk bare 35 til 40 prosent. Vannkraftverkene kan også reguleres raskt etter behov, noe som gjør dem ideelle som grunnlast i strømnettet.

Men vannkraft er ikke uten ulemper. Demninger endrer elveløp og landskap, fisken kan ikke vandre fritt, og tørrlagte elvestrekninger mister sitt dyreliv. For å bøte på dette bygges det fisketrapper, og det stilles krav om minstevannføring. Likevel er vannkraft en av de reneste og mest pålitelige energikildene vi har.`,
    },
    {
      id: 'naturfag-10-3-5-n-section3',
      type: 'text',
      content: `## Vindkraft, solenergi og kjernekraft

Vindkraft er en raskt voksende energikilde. Vind treffer store rotorblader som roterer og driver en generator. Kinetisk energi fra vinden omdannes til rotasjonsenergi og deretter til elektrisk energi. Vindkraft har ingen CO₂-utslipp under drift og er fornybar, men produksjonen er ustabil fordi den avhenger av at det blåser. Vindturbiner kan også påvirke fugler og flaggermus, og endrer landskapet visuelt. I Norge har vindkraften vært kontroversielt, spesielt på grunn av naturinngrep og påvirkning på reinsdrift.

Solenergi utnytter sollyset på to måter. Solceller omdanner lys direkte til elektrisitet gjennom den fotovoltaiske effekten, mens solfangere bruker solen til å varme opp vann. Solenergi er uuttømmelig og stille, uten noen utslipp under drift. Ulempen er at den bare fungerer om dagen og er avhengig av vær. I Norge er solinnstrålingen begrenset, spesielt om vinteren, men antall private hus med solceller øker stadig.

Kjernekraft produserer energi gjennom fisjon, altså splitting av uranatomer. Når et uranatom splittes, frigjøres enorm varme som brukes til å koke vann, drive turbiner og produsere elektrisitet. Kjernekraft har ingen CO₂-utslipp under drift og svært høy energitetthet, bare ett kilo uran gir like mye energi som 20 000 kilo kull. Men radioaktivt avfall er farlig i tusenvis av år, og ulykker som Tsjernobyl og Fukushima viser at risikoen er reell. Frankrike får 70 prosent av sin elektrisitet fra kjernekraft, mens Norge ikke har noen kjernekraftverk.`,
    },
    {
      id: 'naturfag-10-3-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-3-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på fornybare energikilder og miljøpåvirkning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-3-5-n-quiz2-q0',
            task: 'Hvorfor er Norge spesielt godt egnet for vannkraft?',
            options: [
              { id: 'a', text: 'Fordi det er varmt og tørt', isCorrect: false },
              { id: 'b', text: 'Fordi vi har mye nedbør, høye fjell og dype daler', isCorrect: true },
              { id: 'c', text: 'Fordi vi har mange vulkaner', isCorrect: false },
              { id: 'd', text: 'Fordi vi har flat terreng med mange elver', isCorrect: false },
            ],
            solution:
              'Norge har ideelle forhold for vannkraft: mye nedbør gir vann til magasinene, høye fjell gir stor høydeforskjell (som betyr høy potensiell energi, E = mgh), og daler gir naturlige steder for demninger. Resultatet er over 1700 vannkraftverk som produserer ca. 95% av Norges elektrisitet.',
          },
          {
            id: 'naturfag-10-3-5-n-quiz2-q1',
            task: 'Hva er energiomformingen i et vannkraftverk?',
            options: [
              { id: 'a', text: 'Kjemisk energi → Termisk energi → Elektrisk energi', isCorrect: false },
              { id: 'b', text: 'Potensiell energi → Kinetisk energi → Elektrisk energi', isCorrect: true },
              { id: 'c', text: 'Lysenergi → Elektrisk energi', isCorrect: false },
              { id: 'd', text: 'Kjerneenergi → Termisk energi → Elektrisk energi', isCorrect: false },
            ],
            solution:
              'I et vannkraftverk har vannet potensiell energi høyt oppe i magasinet (E = mgh). Når det renner ned, omdannes dette til kinetisk energi. Vannet treffer turbinblader som driver en generator, og kinetisk energi blir til elektrisk energi.',
          },
          {
            id: 'naturfag-10-3-5-n-quiz2-q2',
            task: 'Hvorfor regnes bioenergi som fornybar selv om den slipper ut CO₂?',
            options: [
              { id: 'a', text: 'Fordi CO₂ fra tre er annerledes enn fra kull', isCorrect: false },
              { id: 'b', text: 'Fordi bioenergi ikke slipper ut CO₂', isCorrect: false },
              { id: 'c', text: 'Fordi nye trær vokser opp og tar opp like mye CO₂ som ble sluppet ut', isCorrect: true },
              { id: 'd', text: 'Fordi bioenergi bare brukes i små mengder', isCorrect: false },
            ],
            solution:
              'Bioenergi er karbonnøytral i et kretsløpsperspektiv: Trær tar opp CO₂ gjennom fotosyntese mens de vokser, og slipper ut CO₂ når de brennes. Nye trær plantes og tar opp like mye CO₂. Over tid endres ikke det totale CO₂-nivået, forutsatt at ny skog plantes. Fossile brennstoff frigjør derimot karbon som har vært lagret i millioner av år.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-3-5-n-section4',
      type: 'text',
      content: `## Energiframtiden: Hva må til?

Verden står overfor en av de største utfordringene i menneskehetens historie: hvordan skal vi produsere nok energi til en voksende befolkning, samtidig som vi kutter klimagassutslippene drastisk? Svaret ligger i en kombinasjon av tiltak.

For det første må vi gjennomføre en overgang til fornybar energi. Fossile brennstoff må fases ut og erstattes av sol, vind og vannkraft. For det andre trenger vi energieffektivisering. Bedre isolasjon i hus, mer effektive apparater og smartere bruk av strøm kan redusere behovet enormt. For det tredje må vi utvikle energilagring som batterier og hydrogenproduksjon, slik at vi kan lagre overskuddsenergien fra dager med mye sol og vind til bruk på dager uten. Og for det fjerde trenger vi elektrifisering av transport og industri, altså at biler, ferger og fabrikker drives av elektrisitet i stedet for fossil energi.

Ingen enkelt energikilde er perfekt, og framtidens løsning vil trolig være en energimiks: vannkraft som stabil grunnlast, vindkraft når det blåser, solenergi om dagen, bioenergi som backup, og batterier for lagring. I Norges tilfelle er situasjonen spesiell fordi vi er både vannkraftnasjon og olje- og gassnasjon. Vi har ren energi hjemme, men eksporterer fossil energi som bidrar til klimagassutslipp i andre land.

Hva kan du gjøre? Spar energi ved å slå av lys og apparater. Gå, sykl eller ta kollektiv transport. Velg energieffektive produkter. Og del kunnskapen din om energi og klima med andre.`,
    },
    {
      id: 'naturfag-10-3-5-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-3-5-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på energiframtiden og Norges rolle:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-3-5-n-quiz3-q0',
            task: 'Hvorfor er en energimiks bedre enn å satse på bare én energikilde?',
            options: [
              { id: 'a', text: 'Fordi alle energikilder er like gode', isCorrect: false },
              { id: 'b', text: 'Fordi ulike kilder utfyller hverandre og gir stabil forsyning', isCorrect: true },
              { id: 'c', text: 'Fordi det er billigere å bygge mange ulike kraftverk', isCorrect: false },
              { id: 'd', text: 'Fordi myndighetene krever det', isCorrect: false },
            ],
            solution:
              'Ingen enkelt energikilde er perfekt. Vindkraft fungerer bare når det blåser, solenergi bare om dagen, og vannkraft avhenger av nedbør. Ved å kombinere flere kilder kan de utfylle hverandre og gi stabil forsyning døgnet rundt, året rundt.',
          },
          {
            id: 'naturfag-10-3-5-n-quiz3-q1',
            task: 'Hva er Norges store energidilemma?',
            options: [
              { id: 'a', text: 'At vi har for mye strøm', isCorrect: false },
              { id: 'b', text: 'At vi har ren energi hjemme men eksporterer fossil energi', isCorrect: true },
              { id: 'c', text: 'At vannkraften er for dyr', isCorrect: false },
              { id: 'd', text: 'At vi ikke har noen fornybare energikilder', isCorrect: false },
            ],
            solution:
              'Norge har 95% ren elektrisitet fra vannkraft hjemme, men er samtidig en stor eksportør av olje og gass. Når disse fossile brennstoffene brennes i andre land, bidrar de til CO₂-utslipp og global oppvarming. Dette skaper et etisk dilemma: bør Norge fase ut eksporten av fossil energi?',
          },
          {
            id: 'naturfag-10-3-5-n-quiz3-q2',
            task: 'Hva er hydrogen i energisammenheng?',
            options: [
              { id: 'a', text: 'En energikilde som finnes fritt i naturen', isCorrect: false },
              { id: 'b', text: 'En energibærer som må produseres ved hjelp av annen energi', isCorrect: true },
              { id: 'c', text: 'Et fossilt brennstoff', isCorrect: false },
              { id: 'd', text: 'En type solenergi', isCorrect: false },
            ],
            solution:
              'Hydrogen er en energibærer, ikke en energikilde. Det finnes ikke fritt i naturen og må produseres, for eksempel ved elektrolyse av vann. Grønn hydrogen produseres med fornybar energi og kan lagre energi for senere bruk, som et slags batteri. Eneste utslipp ved bruk er vanndamp.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-3-5-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi sett på hvordan verden skaffer seg energi og hva det koster miljøet. Energikilder deles i fornybare (sol, vind, vann, bioenergi, geotermisk) som fornyer seg naturlig, og ikke-fornybare (fossile brennstoff og kjernekraft) som brukes opp.

Fossile brennstoff dekker over 80 prosent av verdens energibehov, men slipper ut store mengder CO₂ ved forbrenning. Kull er verst med 820 gram CO₂ per kilowattime, naturgass minst forurensende blant de fossile med 490 gram. Til sammenligning slipper vindkraft bare ut 11 gram.

Vannkraft er Norges store styrke, med over 95 prosent av elektrisiteten fra over 1700 kraftverk. Virkningsgraden er svært høy, rundt 85 til 90 prosent. Vindkraft og solenergi vokser raskt, men er ustabile. Kjernekraft er pålitelig og CO₂-fri, men har utfordringer med radioaktivt avfall og sikkerhet.

Framtidens energiløsning er en kombinasjon: fornybar energi, energieffektivisering, energilagring (batterier og hydrogen) og elektrifisering. Norge står i et spesielt dilemma som både vannkraftnasjon og olje- og gassnasjon. Alle energikilder har fordeler og ulemper, og den beste løsningen er en energimiks der ulike kilder utfyller hverandre.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.6 NARRATIV: Klima og drivhuseffekten
// ============================================================================

export const CHAPTER_NATURFAG_10_3_6_NARRATIV: TextbookChapter = {
  id: 'naturfag-10-3-6-narrativ',
  courseId: 'naturfag-10',
  chapterNumber: '3.6',
  title: 'Klima og drivhuseffekten',
  subtitle: 'Narrativ versjon',
  description:
    'Forstå hvorfor jorda blir varmere, hva drivhuseffekten egentlig er, og hva vi som samfunn og enkeltpersoner kan gjøre med klimaendringene.',
  estimatedMinutes: 40,
  competenceGoals: [
    'forklare drivhuseffekten og menneskeskapte klimaendringer',
    'diskutere årsaker til og konsekvenser av klimaendringer',
    'vurdere tiltak for å redusere klimagassutslipp',
  ],
  linkedChapterId: 'naturfag-10-3-6',
  content: [
    {
      id: 'naturfag-10-3-6-n-intro',
      type: 'text',
      content: `## Planeten vår varmes opp

Jordas klima endrer seg. Det er ikke en påstand, det er et faktum. Gjennomsnittstemperaturen har steget med 1,2 grader Celsius siden 1850, de siste ti årene har vært de varmeste som noensinne er målt, og isbreene krymper raskere enn noen gang. Men for å forstå hvorfor dette skjer, må vi først forstå forskjellen mellom vær og klima.

Vær er tilstanden i atmosfæren akkurat nå eller de nærmeste dagene. At det regner i dag eller er sol i morgen, det er vær. Klima derimot er gjennomsnittet av været over minst 30 år. En god måte å tenke på det: vær er som humøret ditt akkurat nå, som kan svinge raskt. Klima er personligheten din, som endrer seg sakte over tid. At det er en kald vinterdag betyr ikke at klimaet blir kaldere. Men hvis gjennomsnittlig vintertemperatur øker over flere tiår, det er klimaendring.

I hjertet av klimaproblemet ligger et naturlig fenomen som heter drivhuseffekten. Uten den ville gjennomsnittlig temperatur på jordoverflaten være minus 18 grader, altfor kaldt for livet som vi kjenner det. Drivhuseffekten gjør jorda 33 grader varmere, til behagelige pluss 15 grader i gjennomsnitt. Men menneskelig aktivitet har forsterket denne effekten, og det er her problemene begynner.`,
    },
    {
      id: 'naturfag-10-3-6-n-section1',
      type: 'text',
      content: `## Drivhuseffekten og drivhusgassene

Slik fungerer drivhuseffekten, trinn for trinn. Solen sender kortbølget stråling, hovedsakelig synlig lys, mot jorda. Omtrent 30 prosent reflekteres tilbake til verdensrommet av skyer, is og lyse overflater. De resterende 70 prosentene absorberes av jordoverflaten, som varmes opp. Den varme overflaten sender deretter ut langbølget infrarød stråling, altså varmestråling, tilbake mot verdensrommet. Men her griper drivhusgassene inn. De absorberer mye av denne varmestrålingen og sender den i alle retninger, inkludert tilbake mot jordoverflaten. Resultatet er at jorda holder på mer varme enn den ellers ville gjort.

De viktigste drivhusgassene er vanndamp, som er den mest betydningsfulle naturlig, karbondioksid (CO₂), som er den viktigste menneskeskapte, metan (CH₄), som er 25 til 30 ganger sterkere enn CO₂ per molekyl og kommer fra husdyr, risdyrking og søppelfyllinger, lystgass (N₂O), som er rundt 300 ganger sterkere enn CO₂ og kommer fra gjødsel og industri, og fluorholdige gasser som er kunstig skapt og brukes i kjølesystemer.

CO₂ blir værende i atmosfæren i 100 til 300 år. Metan har kortere levetid, bare rundt 12 år, men er mye kraftigere per molekyl. Siden industrialiseringen har CO₂-nivået i atmosfæren økt fra 280 ppm til over 420 ppm, en økning på over 50 prosent. Det er den høyeste konsentrasjonen på minst 800 000 år.`,
    },
    {
      id: 'naturfag-10-3-6-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-3-6-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på drivhuseffekten og drivhusgasser:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-3-6-n-quiz1-q0',
            task: 'Hva er forskjellen mellom vær og klima?',
            options: [
              { id: 'a', text: 'Vær er kort sikt, klima er gjennomsnittet over minst 30 år', isCorrect: true },
              { id: 'b', text: 'Vær er varmt, klima er kaldt', isCorrect: false },
              { id: 'c', text: 'Vær er det som skjer om natten, klima om dagen', isCorrect: false },
              { id: 'd', text: 'Det er ingen forskjell', isCorrect: false },
            ],
            solution:
              'Vær beskriver atmosfærens tilstand her og nå (timer, dager), mens klima er gjennomsnittlig vær over lang tid (vanligvis 30 år eller mer). At det er kaldt én dag betyr ikke at klimaet endres, men en temperaturtrend over tiår er klimaendring.',
          },
          {
            id: 'naturfag-10-3-6-n-quiz1-q1',
            task: 'Hvor mye varmere gjør den naturlige drivhuseffekten jorda?',
            options: [
              { id: 'a', text: 'Ca. 5°C', isCorrect: false },
              { id: 'b', text: 'Ca. 15°C', isCorrect: false },
              { id: 'c', text: 'Ca. 33°C', isCorrect: true },
              { id: 'd', text: 'Ca. 100°C', isCorrect: false },
            ],
            solution:
              'Uten drivhuseffekten ville jordas gjennomsnittlig temperatur vært minus 18°C. Med drivhuseffekten er den pluss 15°C. Forskjellen er altså 33°C. Drivhuseffekten er livsnødvendig, men den forsterkede drivhuseffekten fra menneskelig aktivitet er problemet.',
          },
          {
            id: 'naturfag-10-3-6-n-quiz1-q2',
            task: 'Hvilken drivhusgass er den viktigste menneskeskapte?',
            options: [
              { id: 'a', text: 'Vanndamp (H₂O)', isCorrect: false },
              { id: 'b', text: 'Karbondioksid (CO₂)', isCorrect: true },
              { id: 'c', text: 'Nitrogen (N₂)', isCorrect: false },
              { id: 'd', text: 'Oksygen (O₂)', isCorrect: false },
            ],
            solution:
              'Karbondioksid (CO₂) er den viktigste menneskeskapte drivhusgassen. Vanndamp er viktigst naturlig, men mengden styres ikke direkte av mennesker. CO₂-nivået har økt over 50% siden industrialiseringen, hovedsakelig fra forbrenning av fossile brennstoff. Nitrogen og oksygen er ikke drivhusgasser.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-3-6-n-section2',
      type: 'text',
      content: `## Forsterket drivhuseffekt og klimaendringer

Den naturlige drivhuseffekten er en forutsetning for livet på jorda. Problemet oppstår når menneskelig aktivitet tilfører ekstra drivhusgasser i atmosfæren og forsterker effekten. Fire hovedkilder driver denne forsterkingen.

Den viktigste er forbrenning av fossile brennstoff. Kull, olje og naturgass inneholder karbon som har vært lagret under bakken i millioner av år, og når vi brenner dem frigjøres karbonet som CO₂. Transport, elektrisitetsproduksjon, oppvarming og industri er alle store bidragsytere. Den andre kilden er avskoging. Skog tar opp CO₂ gjennom fotosyntese, så når vi hugger skog, mister jorda sin evne til å absorbere CO₂. Dessuten slippes CO₂ ut når trærne brennes eller råtner. Den tredje kilden er landbruk, der husdyr som kyr og sauer produserer metan gjennom fordøyelsen, risdyrking produserer metan i oversvømte felt, og gjødsel slipper ut lystgass. Den fjerde kilden er industri, spesielt sementproduksjon og kjemisk industri.

Konsekvensene er allerede merkbare. Global temperatur har steget 1,2°C. Isbreene smelter raskere, og mange norske breer har krympet betydelig. Havnivået har steget omtrent 20 centimeter siden 1900 fordi vann utvider seg når det varmes opp og fordi is på land smelter. Ekstremvær blir vanligere: flere hetebølger, mer intense regnskyll, lengre tørkeperioder og kraftigere stormer. Korallrev bleker og dør, arter flytter nordover, og vekstsesongene endres.`,
    },
    {
      id: 'naturfag-10-3-6-n-section3',
      type: 'text',
      content: `## Tilbakekoblinger som forsterker problemet

Klimasystemet har innebygde tilbakekoblingsmekanismer som kan forsterke eller dempe endringer. De positive tilbakekoblingene, som forsterker oppvarmingen, er spesielt bekymringsfulle.

Is-albedo-tilbakekoblingen er kanskje den mest kjente. Albedo er et mål på hvor mye sollys en overflate reflekterer. Hvit is og snø reflekterer mye sollys, mens mørk jord og hav absorberer det. Når temperaturen stiger og is smelter, blottlegges mørke overflater som absorberer enda mer sollys, noe som varmer opp enda mer, som smelter enda mer is. Det er en selvforsterkende spiral. Arktis varmes opp nesten dobbelt så raskt som resten av verden på grunn av denne mekanismen.

Permafrost-tilbakekoblingen er kanskje enda skumlere. Permafrost er jord som er frossen året rundt, og den inneholder omtrent 1500 milliarder tonn karbon, nesten dobbelt så mye som hele atmosfæren. Når permafrosten tiner, begynner det organiske materialet å råtne, og prosessen slipper ut CO₂ og metan. Metan er 25 til 30 ganger sterkere som drivhusgass enn CO₂. Mer drivhusgass betyr høyere temperatur, som tiner mer permafrost, som slipper ut mer gass. Det finnes også negative tilbakekoblinger som demper endringene, for eksempel at økt CO₂ kan gi økt plantevekst som tar opp mer CO₂. Men dette er ikke nok til å kompensere for utslippene.

Det forskere frykter mest er vippepunkter: punkter der en liten ytterligere endring utløser store, irreversible endringer. Hvis Grønlands isbre smelter helt, kan den ikke gjenoppbygges selv om temperaturen synker igjen, og havnivået vil stige syv meter.`,
    },
    {
      id: 'naturfag-10-3-6-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-3-6-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på klimaendringer og tilbakekoblinger:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-3-6-n-quiz2-q0',
            task: 'Hva er den viktigste årsaken til den forsterkede drivhuseffekten?',
            options: [
              { id: 'a', text: 'Vulkanutbrudd', isCorrect: false },
              { id: 'b', text: 'Forbrenning av fossile brennstoff', isCorrect: true },
              { id: 'c', text: 'Jordas bane rundt solen endres', isCorrect: false },
              { id: 'd', text: 'Solens aktivitet øker', isCorrect: false },
            ],
            solution:
              'Forbrenning av fossile brennstoff (kull, olje, naturgass) er den viktigste årsaken til forsterket drivhuseffekt. Karbon som har vært lagret i millioner av år frigjøres som CO₂. Andre bidrag kommer fra avskoging, landbruk og industri.',
          },
          {
            id: 'naturfag-10-3-6-n-quiz2-q1',
            task: 'Hva menes med en positiv tilbakekobling i klimasammenheng?',
            options: [
              { id: 'a', text: 'Noe bra som skjer med klimaet', isCorrect: false },
              { id: 'b', text: 'En prosess som demper klimaendringene', isCorrect: false },
              { id: 'c', text: 'En prosess som forsterker den opprinnelige endringen', isCorrect: true },
              { id: 'd', text: 'En prosess som ikke påvirker klimaet', isCorrect: false },
            ],
            solution:
              'I klimavitenskap betyr positiv tilbakekobling at prosessen forsterker den opprinnelige endringen. For eksempel: oppvarming smelter is, noe som gir mer mørk overflate, som absorberer mer sollys, som gir mer oppvarming. Positiv betyr altså ikke at det er bra, tvert imot gjør det problemet verre.',
          },
          {
            id: 'naturfag-10-3-6-n-quiz2-q2',
            task: 'Hvorfor er tining av permafrost bekymringsfull?',
            options: [
              { id: 'a', text: 'Fordi det gjør veiene glatte', isCorrect: false },
              { id: 'b', text: 'Fordi det frigjør enorme mengder CO₂ og metan som forsterker oppvarmingen', isCorrect: true },
              { id: 'c', text: 'Fordi det gjør havet surere', isCorrect: false },
              { id: 'd', text: 'Fordi det blokkerer sollys', isCorrect: false },
            ],
            solution:
              'Permafrosten inneholder ca. 1500 milliarder tonn karbon. Når den tiner, råtner organisk materiale og frigjør CO₂ og metan. Metan er 25-30 ganger sterkere som drivhusgass enn CO₂. Dette skaper en positiv tilbakekobling der mer oppvarming gir mer tining som gir mer drivhusgass.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-3-6-n-section4',
      type: 'text',
      content: `## Klimatiltak: Hva kan vi gjøre?

For å begrense klimaendringene trenger vi to typer tiltak: utslippsreduksjoner som angriper årsaken, og tilpasning som hjelper oss å leve med endringene som allerede skjer.

Utslippsreduksjoner handler om å kutte utslippene av drivhusgasser. Det viktigste er overgangen fra fossil til fornybar energi. Sol, vind og vannkraft kan erstatte kull, olje og gass. Elektrifisering av transport betyr elbiler, el-busser og elektriske ferger. Energieffektivisering betyr bedre isolerte hus, LED-lys og effektive apparater. I landbruket kan vi redusere utslipp ved å spise mindre kjøtt, bruke gjødsel mer effektivt og stoppe avskoging. I industrien handler det om effektive prosesser, materialgjenvinning og karbonfangst.

Tilpasning handler om å beskytte samfunnet mot konsekvensene av de klimaendringene som allerede skjer. Det betyr flomvern mot stigende havnivå, tørkeresistente avlinger i landbruket, sterkere bygninger mot ekstremvær, og bedre varslingssystemer.

I 2015 ble nesten alle verdens land enige om Parisavtalen med mål om å holde global oppvarming godt under 2°C, helst 1,5°C, sammenlignet med førindustrielt nivå. Men med dagens politikk er vi på vei mot 2,5 til 3°C oppvarming, så mye mer må gjøres.

Ansvaret hviler på alle. Du kan spise mindre kjøtt, reise mer kollektivt, fly mindre, spare energi og resirkulere. Bedrifter kan kutte utslipp og utvikle grønn teknologi. Politikere kan innføre klimapolitikk og investere i fornybar energi. Klimaendringene er et globalt problem som krever innsats fra alle nivåer.`,
    },
    {
      id: 'naturfag-10-3-6-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-3-6-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på klimatiltak og Parisavtalen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-3-6-n-quiz3-q0',
            task: 'Hva er forskjellen mellom utslippsreduksjoner og tilpasning?',
            options: [
              { id: 'a', text: 'Utslippsreduksjoner er dyrere enn tilpasning', isCorrect: false },
              { id: 'b', text: 'Utslippsreduksjoner angriper årsaken, tilpasning håndterer konsekvensene', isCorrect: true },
              { id: 'c', text: 'Tilpasning er viktigere enn utslippsreduksjoner', isCorrect: false },
              { id: 'd', text: 'Det er to ord for det samme', isCorrect: false },
            ],
            solution:
              'Utslippsreduksjoner (mitigation) handler om å kutte utslipp for å stoppe problemet fra å bli verre, for eksempel fornybar energi og elbiler. Tilpasning (adaptation) handler om å leve med endringene som allerede skjer, for eksempel flomvern og tørkeresistente avlinger. Vi trenger begge deler.',
          },
          {
            id: 'naturfag-10-3-6-n-quiz3-q1',
            task: 'Hva er målet i Parisavtalen?',
            options: [
              { id: 'a', text: 'Å stoppe all bruk av fossil energi innen 2025', isCorrect: false },
              { id: 'b', text: 'Å holde global oppvarming godt under 2°C, helst 1,5°C', isCorrect: true },
              { id: 'c', text: 'Å fjerne all CO₂ fra atmosfæren', isCorrect: false },
              { id: 'd', text: 'Å forby biler i alle land', isCorrect: false },
            ],
            solution:
              'Parisavtalen fra 2015 har som mål å begrense global oppvarming til godt under 2°C, og helst 1,5°C, sammenlignet med førindustrielt nivå. Alle land skal sette egne utslippsmål som skjerpes hvert femte år. Med dagens politikk er vi dessverre på vei mot 2,5-3°C.',
          },
          {
            id: 'naturfag-10-3-6-n-quiz3-q2',
            task: 'Hvilket av disse er et tiltak du selv kan gjøre for å redusere klimagassutslipp?',
            options: [
              { id: 'a', text: 'Spise mer kjøtt', isCorrect: false },
              { id: 'b', text: 'Fly oftere', isCorrect: false },
              { id: 'c', text: 'Bruke mer strøm', isCorrect: false },
              { id: 'd', text: 'Sykle eller ta bussen i stedet for å bli kjørt i bil', isCorrect: true },
            ],
            solution:
              'Å sykle, gå eller ta kollektivtransport i stedet for bil reduserer CO₂-utslipp fra fossil drivstoff. Andre personlige tiltak inkluderer å spise mindre kjøtt (reduserer metan), fly mindre (fly bruker mye jetfuel), spare energi og resirkulere.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-3-6-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket klimasystemet og forstått hvorfor planeten vår varmes opp. Vær er kortsiktig, klima er langsiktig. Den naturlige drivhuseffekten gjør jorda 33 grader varmere enn den ellers ville vært, noe som er nødvendig for livet. Drivhusgasser som CO₂, metan, lystgass og vanndamp absorberer varmestråling fra jordoverflaten.

Menneskelig aktivitet har forsterket drivhuseffekten gjennom forbrenning av fossile brennstoff, avskoging, landbruk og industri. CO₂-nivået har økt over 50 prosent siden industrialiseringen. Konsekvensene er allerede tydelige: 1,2°C global oppvarming, smeltende isbreer, stigende havnivå, mer ekstremvær og endrede økosystemer.

Tilbakekoblingsmekanismer gjør klimaendringene vanskelige å stoppe. Is-albedo-effekten forsterker oppvarmingen når is smelter og mørke overflater absorberer mer sollys. Permafrost inneholder enorme mengder karbon som frigjøres ved tining. Vippepunkter kan utløse irreversible endringer.

Klimatiltak omfatter utslippsreduksjoner (fornybar energi, elbiler, mindre kjøtt, plante skog) og tilpasning (flomvern, tørkeresistente avlinger). Parisavtalen setter mål om maks 1,5 til 2°C oppvarming. Ansvaret hviler på individer, bedrifter og politikere. Klimaendringene er det største problemet vår generasjon står overfor, og handling nå er avgjørende.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport av alle narrative kapitler i DEL 3B
// ============================================================================

export const NATURFAG_10_NARRATIV_DEL3B_CHAPTERS = [
  CHAPTER_NATURFAG_10_3_4_NARRATIV,
  CHAPTER_NATURFAG_10_3_5_NARRATIV,
  CHAPTER_NATURFAG_10_3_6_NARRATIV,
];
