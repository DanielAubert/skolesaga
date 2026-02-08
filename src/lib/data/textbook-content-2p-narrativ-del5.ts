/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 2P – NARRATIV VERSJON DEL 5
 * Geometri i praksis (kap 5.1–5.2) og Modellering (kap 6.1–6.2)
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * å lese og lytte til, med quiz-spørsmål for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 5.1 NARRATIV: Praktisk geometri
// ============================================================================

export const CHAPTER_2P_5_1_NARRATIV: TextbookChapter = {
  id: '2p-5-1-narrativ',
  courseId: '2p',
  chapterNumber: '5.1',
  title: 'Praktisk geometri',
  subtitle: 'Narrativ versjon',
  description:
    'En fortelling om hvordan geometri hjelper oss i hverdagen -- fra å male vegger og legge gulv til å forstå kart og modeller.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og forklare hvordan formlikhet, målestokk og egenskaper ved geometriske figurer kan brukes i beregninger og i praktisk arbeid',
  ],
  linkedChapterId: '2p-5-1',
  content: [
    {
      id: '2p-5-1-n-intro',
      type: 'text',
      content: `## Geometri overalt rundt oss

Tenk deg at du står i en tom leilighet du nettopp har overtatt. Veggene trenger maling, gulvet trenger nytt belegg, og du lurer på om sofaen din i det hele tatt får plass. Kanskje har du også en hage der du vil bygge en sandkasse eller et blomsterbed. I alle disse situasjonene trenger du geometri -- enten du vet det eller ikke.

Geometri handler om former, størrelser og romlige forhold. Det er et av de eldste områdene i matematikken. Selve ordet kommer fra gresk og betyr "jordmåling," fordi de gamle egypterne brukte geometri til å måle opp jordbruksland etter Nilens årlige oversvømmelser. I dag bruker vi geometri til alt fra å beregne hvor mye maling vi trenger til et rom, til å lese et kart eller forstå en arkitekttegning.

I dette kapittelet skal vi gå gjennom de viktigste verktøyene i praktisk geometri: areal av plane figurer, volum og overflate av romfigurer, og til slutt formlikhet og målestokk. Vi starter med det mest grunnleggende -- flater.`,
    },
    {
      id: '2p-5-1-n-section1',
      type: 'text',
      content: `## Areal -- å måle flater

La oss begynne med malerprosjektet ditt. Du står foran en vegg som er 5,2 m bred og 2,4 m høy, og veggen har et vindu som er 1,2 m bredt og 1,0 m høyt. Hvor mye maling trenger du?

For å svare på det må du beregne **areal** -- et mål på størrelsen av en flate, målt i kvadratmeter ($\\text{m}^2$), kvadratcentimeter ($\\text{cm}^2$) og så videre. Arealet av veggen er et rektangel, og formelen er enkel: $A = l \\cdot b$, altså lengde ganger bredde. Veggen har arealet $5{,}2 \\cdot 2{,}4 = 12{,}48 \\text{ m}^2$. Men du skal jo ikke male vinduet, så du trekker fra vinduets areal: $1{,}2 \\cdot 1{,}0 = 1{,}2 \\text{ m}^2$. Da får du $12{,}48 - 1{,}2 = 11{,}28 \\text{ m}^2$ som skal males. Hvis én liter maling dekker $8 \\text{ m}^2$, trenger du $11{,}28 / 8 \\approx 1{,}41$ liter, altså omtrent 1,5 liter når du runder opp.

Men rektangler er ikke den eneste formen du møter. En **trekant** har arealet $A = \\frac{g \\cdot h}{2}$, der $g$ er grunnlinjen og $h$ er høyden. En **sirkel** har arealet $A = \\pi r^2$, der $r$ er radiusen. Og et **trapes** -- en figur med to parallelle sider $a$ og $b$ og høyde $h$ -- har arealet $A = \\frac{a + b}{2} \\cdot h$. Tenk på et trapesformet hagebed med parallelle sider på 3 m og 5 m og en høyde på 2 m. Da blir arealet $\\frac{3 + 5}{2} \\cdot 2 = 4 \\cdot 2 = 8 \\text{ m}^2$.

Ofte møter du **sammensatte figurer** som ikke er én enkel form. Da deler du figuren i enklere deler, beregner arealet av hver del, og legger sammen -- eller trekker fra, slik vi gjorde med vinduet i veggen.`,
    },
    {
      id: '2p-5-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '2p-5-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Et rom har form som et rektangel med målene 4,5 m × 3,8 m. I rommet er det en sirkulær søyle med diameter 40 cm. Du skal legge gulvbelegg. Hva er arealet du må dekke (omtrent)?',
        options: [
          { id: 'a', text: '$17{,}10 \\text{ m}^2$', isCorrect: false },
          { id: 'b', text: '$16{,}97 \\text{ m}^2$', isCorrect: true },
          { id: 'c', text: '$16{,}50 \\text{ m}^2$', isCorrect: false },
          { id: 'd', text: '$17{,}23 \\text{ m}^2$', isCorrect: false },
        ],
        solution: 'Gulvareal = $4{,}5 \\cdot 3{,}8 = 17{,}10 \\text{ m}^2$. Søylens radius er $40/2 = 20$ cm $= 0{,}2$ m. Søyleareal = $\\pi \\cdot 0{,}2^2 \\approx 0{,}126 \\text{ m}^2$. Nettoareal = $17{,}10 - 0{,}126 \\approx 16{,}97 \\text{ m}^2$.',
      },
    },
    {
      id: '2p-5-1-n-section2',
      type: 'text',
      content: `## Volum -- å måle rom

Nå forlater vi flate overflater og går inn i den tredje dimensjonen. **Volum** er et mål på størrelsen av et tredimensjonalt objekt, målt i kubikkmeter ($\\text{m}^3$), kubikkcentimeter ($\\text{cm}^3$) eller liter. Det er viktig å huske at $1 \\text{ m}^3 = 1\\,000$ liter, og at $1$ liter $= 1\\,000 \\text{ cm}^3 = 1 \\text{ dm}^3$.

Forestill deg et svømmebasseng som er 25 m langt, 12,5 m bredt og har en jevn dybde på 1,8 m. Bassenget har form som et rektangulært **prisme** -- en romfigur der to parallelle, like grunnflater er forbundet med rektangler. For et rett prisme er volumformelen $V = G \\cdot h$, der $G$ er grunnflatearealet og $h$ er høyden. For bassenget blir det $V = 25 \\cdot 12{,}5 \\cdot 1{,}8 = 562{,}5 \\text{ m}^3$. Omgjort til liter: $562{,}5 \\cdot 1\\,000 = 562\\,500$ liter. Det er ganske mye vann.

En **sylinder** -- tenk på en boks eller en vannrørstump -- har volumet $V = \\pi r^2 \\cdot h$. En sylinder med radius 5 cm og høyde 20 cm gir $V = \\pi \\cdot 5^2 \\cdot 20 = 500\\pi \\approx 1\\,571 \\text{ cm}^3$. En **kjegle** -- som en iskremkjeks -- har bare en tredjedel av sylinderens volum: $V = \\frac{1}{3} \\pi r^2 \\cdot h$. Og en **kule** har volumet $V = \\frac{4}{3} \\pi r^3$. Også en **pyramide** har en tredjedel av prismet med samme grunnflate: $V = \\frac{1}{3} G \\cdot h$.

Mønsteret er verdt å merke seg: Kjegler og pyramider har alltid en tredjedel av volumet til den tilsvarende sylinderen eller prismet. Det er en vakker sammenheng som går igjen i geometrien.`,
    },
    {
      id: '2p-5-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '2p-5-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'En sylinder har radius 5 cm og høyde 20 cm. Hva er volumet?',
        options: [
          { id: 'a', text: '$200\\pi \\approx 628 \\text{ cm}^3$', isCorrect: false },
          { id: 'b', text: '$2\\,000 \\text{ cm}^3$', isCorrect: false },
          { id: 'c', text: '$500\\pi \\approx 1\\,571 \\text{ cm}^3$', isCorrect: true },
          { id: 'd', text: '$100\\pi \\approx 314 \\text{ cm}^3$', isCorrect: false },
        ],
        solution: '$V = \\pi r^2 h = \\pi \\cdot 5^2 \\cdot 20 = 500\\pi \\approx 1\\,571 \\text{ cm}^3$.',
      },
    },
    {
      id: '2p-5-1-n-section3',
      type: 'text',
      content: `## Overflate -- å pakke inn romfigurer

Noen ganger er det ikke volumet som interesserer oss, men **overflaten** -- altså det totale arealet av alle flatene på en romfigur. Tenk deg at du skal male en sylinderformet vanntank utvendig. Da trenger du ikke vite hvor mye vann tanken rommer, men hvor stort areal du må dekke med maling.

For et **rektangulært prisme** (en boks) med lengde $l$, bredde $b$ og høyde $h$ er overflaten $O = 2(lb + lh + bh)$. Det gir mening -- du har to flater av hvert par: to bunner, to langsider og to kortsider.

For en **sylinder** er overflaten $O = 2\\pi r^2 + 2\\pi r h = 2\\pi r(r + h)$. Den består av to sirkulære flater (bunn og topp) pluss den buede sideflaten. Hvis vanntanken har radius 0,6 m og høyde 1,5 m, blir overflaten $O = 2\\pi \\cdot 0{,}6 \\cdot (0{,}6 + 1{,}5) = 2\\pi \\cdot 0{,}6 \\cdot 2{,}1 = 2{,}52\\pi \\approx 7{,}92 \\text{ m}^2$. Det er altså omtrent 7,9 kvadratmeter som skal males.

En **kule** har overflaten $O = 4\\pi r^2$, og en **kjegle** (inkludert bunnen) har $O = \\pi r^2 + \\pi r s$, der $s$ er skråhøyden (sidelengden). Tenk deg en iskrem-kjeks med radius 3 cm og skråhøyde 12 cm. Den buede overflaten -- *mantelen* -- er $\\pi \\cdot 3 \\cdot 12 = 36\\pi \\approx 113{,}1 \\text{ cm}^2$. Hvis kjeksen er dekket av sjokolade utenpå, er det altså omtrent 113 kvadratcentimeter sjokolade.`,
    },
    {
      id: '2p-5-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '2p-5-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva er overflateformelen for en sylinder (inkludert bunn og topp)?',
        options: [
          { id: 'a', text: '$O = \\pi r^2 h$', isCorrect: false },
          { id: 'b', text: '$O = 2\\pi r h$', isCorrect: false },
          { id: 'c', text: '$O = 4\\pi r^2$', isCorrect: false },
          { id: 'd', text: '$O = 2\\pi r(r + h)$', isCorrect: true },
        ],
        solution: 'Overflaten av en sylinder er $O = 2\\pi r^2 + 2\\pi r h = 2\\pi r(r + h)$. De to leddene representerer de to sirkulære endene ($2\\pi r^2$) og den buede sideflaten ($2\\pi r h$).',
      },
    },
    {
      id: '2p-5-1-n-section4',
      type: 'text',
      content: `## Formlikhet og målestokk -- store og små utgaver

Har du noen gang sett en modellbil? Den ser ut nøyaktig som den virkelige bilen, bare i miniatyr. Alle proporsjonene er de samme: hjulene er like runde, panseret har samme form, dørene sitter på rett sted. Modellbilen og den virkelige bilen er **formlike** -- de har nøyaktig samme form, men ulik størrelse. Alle tilsvarende vinkler er like, og alle tilsvarende sider har samme forhold.

Det forholdet kalles **målestokk**. Hvis modellbilen er laget i målestokk 1 : 18, betyr det at alt på modellen er 18 ganger mindre enn på den virkelige bilen. En bil som er 4,5 m lang, blir til en modell på $4{,}5 / 18 = 0{,}25$ m, altså 25 cm.

Målestokk brukes overalt: på kart, arkitekttegninger og tekniske tegninger. Et kart med **målestokk 1 : 50 000** betyr at 1 cm på kartet tilsvarer 50 000 cm, altså 500 m, i virkeligheten. Så hvis du måler 8,4 cm mellom to steder på et kart med målestokk 1 : 25 000, er den virkelige avstanden $8{,}4 \\cdot 25\\,000 = 210\\,000$ cm $= 2\\,100$ m $= 2{,}1$ km.

Men her kommer noe viktig: Formlikhet påvirker mer enn bare lengder. Når du skalerer noe med et forholdstall $k$, skalerer lengdene med $k$, men *arealene* skalerer med $k^2$, og *volumene* skalerer med $k^3$. Tenk deg at en arkitekt lager en modell i målestokk 1 : 100. Byggets lengder er 100 ganger større i virkeligheten, arealet er $100^2 = 10\\,000$ ganger større, og volumet er $100^3 = 1\\,000\\,000$ ganger større. Denne sammenhengen er utrolig nyttig og dukker opp overalt i praktisk arbeid.`,
    },
    {
      id: '2p-5-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '2p-5-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'En stor og en liten kule er formlike. Den store kulen har 3 ganger så stor radius som den lille. Hvor mange ganger større er volumet til den store kulen?',
        options: [
          { id: 'a', text: '3 ganger', isCorrect: false },
          { id: 'b', text: '9 ganger', isCorrect: false },
          { id: 'c', text: '27 ganger', isCorrect: true },
          { id: 'd', text: '6 ganger', isCorrect: false },
        ],
        solution: 'Volum skalerer med $k^3$. Med $k = 3$: $3^3 = 27$. Volumet til den store kulen er 27 ganger større enn den lille.',
      },
    },
    {
      id: '2p-5-1-n-section5',
      type: 'text',
      content: `## Fra teori til praksis -- sammensatte problemer

La oss se på noen praktiske situasjoner som binder sammen alt vi har lært. Tenk deg at du skal bygge en sandkasse til barna. Sandkassen har form som et rektangulært prisme og er 2,4 m lang, 1,8 m bred og 0,30 m dyp. Først finner du volumet: $V = 2{,}4 \\cdot 1{,}8 \\cdot 0{,}30 = 1{,}296 \\text{ m}^3$. Nå vet du at sand veier omtrent 1 500 kg per kubikkmeter, så du trenger $1{,}296 \\cdot 1\\,500 = 1\\,944$ kg sand. Hvis sand selges i sekker på 25 kg, trenger du $1\\,944 / 25 = 77{,}8$, altså 78 sekker.

Eller tenk på et hustak som består av to like rektangler, hvert med mål 12 m ganger 5,5 m. Takarealet er $2 \\cdot 12 \\cdot 5{,}5 = 132 \\text{ m}^2$. Takpannene dekker 0,25 m² hver, så du trenger $132 / 0{,}25 = 528$ panner. Men du bør alltid legge til 10 prosent for svinn og kapping: $528 \\cdot 1{,}10 \\approx 581$ panner.

Legg merke til noe viktig i disse eksemplene: Matematikken er ikke vanskelig i seg selv. Det som krever øvelse er å *oversette* en virkelig situasjon til et matematisk problem. Hva er grunnflaten? Hvilken formel passer? Hva må trekkes fra? Disse spørsmålene er kjernen i praktisk geometri, og du blir bedre på dem med erfaring. Start gjerne med å tegne en skisse -- det hjelper nesten alltid.`,
    },
    {
      id: '2p-5-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '2p-5-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'En modellbil er laget i målestokk 1 : 18. Den virkelige bilen er 4,5 m lang. Hvor lang er modellen?',
        options: [
          { id: 'a', text: '81 cm', isCorrect: false },
          { id: 'b', text: '25 cm', isCorrect: true },
          { id: 'c', text: '2,5 cm', isCorrect: false },
          { id: 'd', text: '45 cm', isCorrect: false },
        ],
        solution: 'Modellens lengde = $4{,}5$ m / $18 = 0{,}25$ m $= 25$ cm.',
      },
    },
    {
      id: '2p-5-1-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket praktisk geometri gjennom hverdagslige situasjoner. Vi har sett at geometri ikke er abstrakt teori, men et verktøy du bruker hver gang du maler et rom, legger gulv eller leser et kart.

**Arealformlene** du nå kjenner er: rektangel ($l \\cdot b$), trekant ($\\frac{g \\cdot h}{2}$), sirkel ($\\pi r^2$) og trapes ($\\frac{a+b}{2} \\cdot h$). **Volumformlene** er: prisme ($G \\cdot h$), sylinder ($\\pi r^2 h$), kjegle ($\\frac{1}{3}\\pi r^2 h$), kule ($\\frac{4}{3}\\pi r^3$) og pyramide ($\\frac{1}{3}G \\cdot h$). For **overflate** husker du at det handler om å summere arealene til alle flatene, med spesialformler for sylinder ($2\\pi r(r + h)$) og kule ($4\\pi r^2$).

Til slutt lærte vi om **formlikhet og målestokk**, med den viktige sammenhengen at lengder skalerer med $k$, areal med $k^2$ og volum med $k^3$. Denne regelen dukker opp overraskende ofte i praktiske beregninger.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.2 NARRATIV: Trigonometri i praksis
// ============================================================================

export const CHAPTER_2P_5_2_NARRATIV: TextbookChapter = {
  id: '2p-5-2-narrativ',
  courseId: '2p',
  chapterNumber: '5.2',
  title: 'Trigonometri i praksis',
  subtitle: 'Narrativ versjon',
  description:
    'Historien om hvordan trekanter hjelper oss å måle det umålelige -- fra stiger mot vegger og skygger fra trær til bredden av en elv du ikke kan krysse.',
  estimatedMinutes: 40,
  competenceGoals: [
    'utforske og forklare hvordan formlikhet, målestokk og egenskaper ved geometriske figurer kan brukes i beregninger og i praktisk arbeid',
  ],
  linkedChapterId: '2p-5-2',
  content: [
    {
      id: '2p-5-2-n-intro',
      type: 'text',
      content: `## Trekantens superkrefter

Forestill deg at du står ved foten av et stort tre og lurer på hvor høyt det er. Du kan ikke klatre opp med et målebånd, og å felle treet bare for å måle det er åpenbart en dårlig idé. Men med litt trigonometri kan du finne høyden uten å forlate bakken. Alt du trenger er skyggens lengde og solens vinkel -- eller en enkel vinkelmåler og en kjent avstand.

Trigonometri er læren om trekanter, og spesielt om forholdene mellom sider og vinkler i trekanter. Ordet kommer fra gresk: *trigonon* betyr trekant og *metron* betyr mål. Det har vært brukt i tusenvis av år til landmåling, navigasjon og astronomi. I dag bruker vi trigonometri i alt fra å beregne takhelling til å måle avstander vi ikke kan nå fysisk.

I dette kapittelet starter vi med Pytagoras' setning -- en av de mest berømte formlene i matematikken. Deretter lærer vi om sinus, cosinus og tangens, som lar oss koble vinkler til sidelengder. Til slutt ser vi hvordan vi kan bruke inverse trigonometriske funksjoner til å finne ukjente vinkler.`,
    },
    {
      id: '2p-5-2-n-section1',
      type: 'text',
      content: `## Pytagoras -- en 2500 år gammel superstjerne

For over 2500 år siden formulerte den greske matematikeren Pytagoras en setning som fortsatt er en av de mest brukte i matematikken. I en **rettvinklet trekant** -- altså en trekant der én vinkel er nøyaktig 90 grader -- gjelder det at $a^2 + b^2 = c^2$, der $a$ og $b$ er de to kortere sidene (katetene) og $c$ er den lengste siden (**hypotenusen**). Hypotenusen ligger alltid overfor den rette vinkelen.

La oss se dette i praksis. Tenk deg en stige som er 5,0 m lang og lener mot en vegg. Foten av stigen står 1,5 m fra veggen. Hvor høyt opp rekker stigen? Stigen danner hypotenusen, avstanden fra veggen er én katet, og høyden opp veggen er den andre kateten. Vi setter opp: $h^2 + 1{,}5^2 = 5{,}0^2$, som gir $h^2 = 25 - 2{,}25 = 22{,}75$, altså $h = \\sqrt{22{,}75} \\approx 4{,}77$ m. Stigen rekker omtrent 4,8 m opp på veggen.

Du kan også bruke setningen "baklengs." Hvis du kjenner hypotenusen og én katet, finner du den andre: $a = \\sqrt{c^2 - b^2}$. Tenk deg at diagonalen i et rektangulært rom måler 7,2 m og rommet er 5,4 m langt. Da er bredden $b = \\sqrt{7{,}2^2 - 5{,}4^2} = \\sqrt{51{,}84 - 29{,}16} = \\sqrt{22{,}68} \\approx 4{,}76$ m.

Pytagoras-trippelet 3-4-5 er det mest kjente: $3^2 + 4^2 = 9 + 16 = 25 = 5^2$. Multipler av dette trippelet, som 6-8-10, fungerer også. Håndverkere bruker denne sammenhengen for å sjekke om et hjørne er rett vinkel: mål 3 m langs én vegg, 4 m langs den andre, og sjekk at diagonalen er 5 m.`,
    },
    {
      id: '2p-5-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '2p-5-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'En rettvinklet trekant har kateter på 6 cm og 8 cm. Hvor lang er hypotenusen?',
        options: [
          { id: 'a', text: '14 cm', isCorrect: false },
          { id: 'b', text: '10 cm', isCorrect: true },
          { id: 'c', text: '$\\sqrt{48} \\approx 6{,}9$ cm', isCorrect: false },
          { id: 'd', text: '12 cm', isCorrect: false },
        ],
        solution: '$c = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$ cm. Dette er et Pytagoras-trippel (6-8-10, som er det dobbelte av 3-4-5).',
      },
    },
    {
      id: '2p-5-2-n-section2',
      type: 'text',
      content: `## Sinus, cosinus og tangens -- de tre vennene

Pytagoras' setning er kraftig, men den har en begrensning: den sier ingenting om vinklene. Hva om du kjenner en vinkel og én side, og vil finne en annen side? Da trenger du de **trigonometriske forholdene**: sinus, cosinus og tangens.

I en rettvinklet trekant med en spiss vinkel $v$ definerer vi: $\\sin v = \\frac{\\text{motstående katet}}{\\text{hypotenus}}$, $\\cos v = \\frac{\\text{hosliggende katet}}{\\text{hypotenus}}$, og $\\tan v = \\frac{\\text{motstående katet}}{\\text{hosliggende katet}}$. En populær huskeregel er **SOH-CAH-TOA**: **S**in = **O**pposite / **H**ypotenuse, **C**os = **A**djacent / **H**ypotenuse, **T**an = **O**pposite / **A**djacent.

La oss gå tilbake til treet du ville måle. Treet kaster en skygge på 15 m langs bakken, og solens vinkel over horisonten er 38 grader. Du kjenner den hosliggende kateten (skyggen) og søker den motstående kateten (trehøyden). Da bruker du tangens: $\\tan 38° = \\frac{h}{15}$, som gir $h = 15 \\cdot \\tan 38° = 15 \\cdot 0{,}7813 \\approx 11{,}7$ m. Treet er omtrent 11,7 m høyt.

Hva om du kjenner hypotenusen og en vinkel? Hvis hypotenusen er 13 cm og vinkelen er 22 grader, er den motstående kateten $13 \\cdot \\sin 22° = 13 \\cdot 0{,}3746 \\approx 4{,}9$ cm, og den hosliggende kateten er $13 \\cdot \\cos 22° \\approx 12{,}1$ cm. Merk at det er viktig å velge riktig funksjon ut fra hvilke sider du kjenner og hvilke du søker.`,
    },
    {
      id: '2p-5-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '2p-5-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'I en rettvinklet trekant er hypotenusen 13 cm og en vinkel er 22°. Hva er lengden av den motstående kateten?',
        options: [
          { id: 'a', text: '$13 \\cdot \\cos 22° \\approx 12{,}1$ cm', isCorrect: false },
          { id: 'b', text: '$13 \\cdot \\tan 22° \\approx 5{,}3$ cm', isCorrect: false },
          { id: 'c', text: '$\\frac{13}{\\sin 22°} \\approx 34{,}7$ cm', isCorrect: false },
          { id: 'd', text: '$13 \\cdot \\sin 22° \\approx 4{,}9$ cm', isCorrect: true },
        ],
        solution: 'Motstående katet = hypotenus $\\cdot$ sin $v$ = $13 \\cdot \\sin 22° = 13 \\cdot 0{,}3746 \\approx 4{,}9$ cm. Vi bruker sinus fordi vi har hypotenusen og søker den motstående kateten (SOH).',
      },
    },
    {
      id: '2p-5-2-n-section3',
      type: 'text',
      content: `## Å finne ukjente vinkler

Til nå har vi brukt trigonometri til å finne ukjente sider. Men hva om vi kjenner sidene og vil finne en vinkel? Da bruker vi de **inverse trigonometriske funksjonene**: $\\sin^{-1}$, $\\cos^{-1}$ og $\\tan^{-1}$ (også kalt arcsin, arccos og arctan).

La oss se på et praktisk eksempel. Et saltak har en halvbredde på 5,0 m (horisontal avstand fra vegg til møne) og en høyde på 2,5 m fra takfoten til mønet. Hva er helningsvinkelen? Vi kjenner motstående katet (høyden 2,5 m) og hosliggende katet (halvbredden 5,0 m), så vi bruker tangens: $\\tan v = \\frac{2{,}5}{5{,}0} = 0{,}5$. Dermed er $v = \\tan^{-1}(0{,}5) \\approx 26{,}6°$. Taket har en helning på omtrent 27 grader.

Her er et annet eksempel som viser at trigonometri kan avsløre viktig informasjon. En rampe for rullestol er 6,0 m lang og stiger 0,5 m i høyden. Hvilken vinkel danner rampen med bakken? Vi bruker sinus: $\\sin v = \\frac{0{,}5}{6{,}0} = 0{,}0833$, som gir $v = \\sin^{-1}(0{,}0833) \\approx 4{,}78°$. Norsk Standard sier at ramper for rullestol skal ha maks stigning 1:20, som tilsvarer $\\arctan(1/20) \\approx 2{,}86°$. Rampen i eksempelet er altså for bratt -- den oppfyller ikke kravet. Slik kan trigonometri være avgjørende for tilgjengelighet og sikkerhet.`,
    },
    {
      id: '2p-5-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '2p-5-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Et saltak har halvbredde 5,0 m og mønet er 2,5 m over takfoten. Hva er helningsvinkelen til taket (omtrent)?',
        options: [
          { id: 'a', text: 'Ca. 45°', isCorrect: false },
          { id: 'b', text: 'Ca. 27°', isCorrect: true },
          { id: 'c', text: 'Ca. 60°', isCorrect: false },
          { id: 'd', text: 'Ca. 15°', isCorrect: false },
        ],
        solution: '$\\tan v = \\frac{2{,}5}{5{,}0} = 0{,}5$. $v = \\tan^{-1}(0{,}5) \\approx 26{,}6° \\approx 27°$.',
      },
    },
    {
      id: '2p-5-2-n-section4',
      type: 'text',
      content: `## Trigonometri i felten -- tårn, flaggstenger og bakker

La oss se på noen praktiske situasjoner der trigonometri virkelig viser sin styrke. Tenk deg at du står 40 m fra foten av et tårn. Du måler vinkelen opp til toppen av tårnet til 52 grader, og øynene dine er 1,7 m over bakken. Med tangens finner du at tårnet rager $40 \\cdot \\tan 52° = 40 \\cdot 1{,}2799 \\approx 51{,}2$ m over øyehøyden din. Total høyde er dermed $51{,}2 + 1{,}7 \\approx 52{,}9$ m. En viktig detalj mange glemmer: du måler fra øynenes høyde, ikke fra bakken.

Eller forestill deg en flaggstang som kaster en 12 m lang skygge. Vinkelen mellom bakken og solstrålen er 54 grader. Flaggstangens høyde er $12 \\cdot \\tan 54° = 12 \\cdot 1{,}376 \\approx 16{,}5$ m. Med Pytagoras kan du også finne lengden av selve solstrålen: $c = \\sqrt{12^2 + 16{,}5^2} = \\sqrt{144 + 272{,}25} = \\sqrt{416{,}25} \\approx 20{,}4$ m.

Trigonometri er også nyttig i naturen. Tenk at du går opp en sti og tilbakelegger 250 m langs stien. GPS-en viser at du har steget 85 m i høyden. Stigningsvinkelen finner du med sinus: $\\sin v = 85/250 = 0{,}34$, så $v = \\sin^{-1}(0{,}34) \\approx 19{,}9°$. Den horisontale avstanden er $\\sqrt{250^2 - 85^2} = \\sqrt{55\\,275} \\approx 235{,}1$ m. Du har altså gått lenger langs bakken enn du har beveget deg horisontalt -- forskjellen er nesten 15 m.`,
    },
    {
      id: '2p-5-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '2p-5-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Et tak med helningsvinkel 30° har en takflate som er 8 m lang (skrålengden fra takfot til møne). Hva er den horisontale bredden fra yttervegg til møne?',
        options: [
          { id: 'a', text: '$8 \\cdot \\sin 30° = 4$ m', isCorrect: false },
          { id: 'b', text: '$8 \\cdot \\cos 30° \\approx 6{,}93$ m', isCorrect: true },
          { id: 'c', text: '$8 \\cdot \\tan 30° \\approx 4{,}62$ m', isCorrect: false },
          { id: 'd', text: '$\\frac{8}{\\cos 30°} \\approx 9{,}24$ m', isCorrect: false },
        ],
        solution: 'Horisontal bredde er den hosliggende kateten. Hosliggende = hypotenus $\\cdot$ cos $v$ = $8 \\cdot \\cos 30° = 8 \\cdot 0{,}866 \\approx 6{,}93$ m.',
      },
    },
    {
      id: '2p-5-2-n-section5',
      type: 'text',
      content: `## Å måle det uoppnåelige -- elvebredden

En av de mest elegante bruksområdene for trigonometri er å måle avstander du ikke kan nå fysisk. Tenk deg at du står ved en elv og vil vite hvor bred den er, men du kan ikke krysse den. Her er trikset: Du plasserer deg rett overfor et tre på den andre siden -- la oss kalle det punkt A. Deretter går du 50 m langs elvebredden til punkt B. Fra B måler du vinkelen til treet (målt fra elvebredden) til 62 grader.

Nå har du en rettvinklet trekant: den rette vinkelen er ved A (fordi du sto *rett overfor* treet), vinkelen ved B er 62 grader, og siden AB er 50 m. Elvebredden er den motstående kateten sett fra vinkel B, og AB er den hosliggende kateten. Da gir tangens: $\\text{bredde} = 50 \\cdot \\tan 62° = 50 \\cdot 1{,}8807 \\approx 94$ m. Elven er omtrent 94 m bred, og du har funnet det uten å våte føttene.

Denne metoden -- å bruke en kjent avstand og en målt vinkel til å beregne en ukjent avstand -- er grunnlaget for **triangulering**, en teknikk som har vært brukt i landmåling i hundrevis av år. Det er også prinsippet bak hvordan GPS-systemer bestemmer posisjonen din, bare med satellitter i stedet for trær.

Trigonometri gir oss altså en superkraft: evnen til å finne mål vi ikke kan måle direkte. Med bare en vinkelmåler og et målebånd kan du bestemme høyden på et fjell, bredden av en fjord eller avstanden til en øy. Det er ganske imponerende for en 2500 år gammel oppdagelse.`,
    },
    {
      id: '2p-5-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '2p-5-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Huskeregelen SOH-CAH-TOA brukes til å huske de trigonometriske forholdene. Hva står "TOA" for?',
        options: [
          { id: 'a', text: 'Tan = Opposite / Adjacent (motstående katet delt på hosliggende katet)', isCorrect: true },
          { id: 'b', text: 'Tan = Over / Above (hypotenus delt på katet)', isCorrect: false },
          { id: 'c', text: 'Tan = Opposite / Angle (motstående side delt på vinkelen)', isCorrect: false },
          { id: 'd', text: 'Tan = Opposite / Area (motstående side delt på arealet)', isCorrect: false },
        ],
        solution: 'TOA står for **T**an = **O**pposite / **A**djacent, altså tangens = motstående katet delt på hosliggende katet. $\\tan v = \\frac{\\text{motstående katet}}{\\text{hosliggende katet}}$.',
      },
    },
    {
      id: '2p-5-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Trigonometri er et av de mest praktiske verktøyene i matematikken. Med noen få formler kan du finne sider og vinkler i rettvinklede trekanter, og dermed løse en mengde problemer fra den virkelige verden.

**Pytagoras' setning** ($a^2 + b^2 = c^2$) lar deg finne en ukjent side når du kjenner de to andre sidene i en rettvinklet trekant. **Sinus** ($\\sin v = \\frac{\\text{motstående}}{\\text{hypotenus}}$), **cosinus** ($\\cos v = \\frac{\\text{hosliggende}}{\\text{hypotenus}}$) og **tangens** ($\\tan v = \\frac{\\text{motstående}}{\\text{hosliggende}}$) kobler vinkler til sidelengder. De **inverse funksjonene** ($\\sin^{-1}$, $\\cos^{-1}$, $\\tan^{-1}$) lar deg finne vinkler når du kjenner sidelengdene.

Det viktigste du tar med deg er *når* du bruker hvilken funksjon. Huskeregelen SOH-CAH-TOA er din beste venn her. Og husk: trigonometri lar deg måle det du ikke kan nå -- det er trekantens superkraft.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.1 NARRATIV: Matematisk modellering
// ============================================================================

export const CHAPTER_2P_6_1_NARRATIV: TextbookChapter = {
  id: '2p-6-1-narrativ',
  courseId: '2p',
  chapterNumber: '6.1',
  title: 'Matematisk modellering',
  subtitle: 'Narrativ versjon',
  description:
    'Fortellingen om hvordan matematikk kan fange virkeligheten -- fra avfallsprognoser og bakterievekst til å forutsi hvor mye softis du selger neste sommer.',
  estimatedMinutes: 40,
  competenceGoals: [
    'forklare og bruke prosent, prosentpoeng og vekstfaktor til modellering av praktiske situasjoner med digitale verktøy',
    'utforske strategier for å løse ligninger, ligningssystemer og ulikheter og argumentere for tankemåtene sine',
  ],
  linkedChapterId: '2p-6-1',
  content: [
    {
      id: '2p-6-1-n-intro',
      type: 'text',
      content: `## Virkeligheten i tall

Du jobber i en kommune, og sjefen din spør: "Hvor mye avfall vil vi ha i 2030?" Du har tallene for 2020 og 2024, men ikke for 2030. Hvordan svarer du? Du kan ikke reise i tid. Du kan ikke gjette. Men du kan gjøre noe annet -- du kan lage en **matematisk modell**.

Matematisk modellering handler om å bruke matematikk til å beskrive, forstå og forutsi hendelser i den virkelige verden. En matematisk modell er en forenklet beskrivelse av virkeligheten uttrykt med matematisk språk -- en formel, en funksjon, en ligning. Den kan aldri gi et helt eksakt bilde av virkeligheten, men den kan gi oss nyttige svar og innsikt.

Modellering er overalt rundt oss. Meteorologer bruker matematiske modeller for å lage værmeldinger. Epidemiologer modellerer spredningen av sykdommer. Økonomer modellerer vekst og resesjon. Og du, i matematikk 2P, kan bruke modellering til å forstå alt fra befolkningsvekst til bakteriekulturer, fra strømmetjenester til softissalg.`,
    },
    {
      id: '2p-6-1-n-section1',
      type: 'text',
      content: `## Modelleringsprosessen -- fem steg til svaret

Å lage en god matematisk modell er ikke bare å sette opp en formel. Det er en prosess med fem steg, og hvert steg er like viktig.

**Steg 1: Forstå problemet.** Hva er det vi vil finne ut? Hvilke data har vi? I kommuneeksempelet vet vi at avfallsmengden var 1 200 tonn i 2020 og 1 350 tonn i 2024. Vi vil predikere mengden i 2030.

**Steg 2: Forenkle.** Virkeligheten er kompleks. Vi kan ikke ta hensyn til alt -- befolkningsendringer, resirkuleringskampanjer, nye regler. Vi velger å anta at veksten er jevn, enten lineær eller prosentvis lik.

**Steg 3: Modellere.** Nå setter vi opp selve modellen. En lineær modell gir oss en vekst per år på $\\frac{1\\,350 - 1\\,200}{4} = 37{,}5$ tonn per år, altså $f(x) = 37{,}5x + 1\\,200$ der $x$ er år etter 2020. En eksponentiell modell gir oss $g(x) = 1\\,200 \\cdot 1{,}030^x$, fordi vekstfaktoren per år er $b = (1{,}125)^{0{,}25} \\approx 1{,}030$, altså omtrent 3 prosent per år.

**Steg 4: Løse.** For 2030 ($x = 10$) gir den lineære modellen $f(10) = 37{,}5 \\cdot 10 + 1\\,200 = 1\\,575$ tonn. Den eksponentielle gir $g(10) = 1\\,200 \\cdot 1{,}030^{10} \\approx 1\\,613$ tonn.

**Steg 5: Vurdere.** Er disse svarene rimelige? For kort fremtid er forskjellen liten. Vi bør sjekke med flere datapunkter for å avgjøre hvilken modell som passer best. Og vi bør tenke over om forutsetningene er realistiske -- vil veksten virkelig fortsette i samme tempo?`,
    },
    {
      id: '2p-6-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '2p-6-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva er det viktigste siste steget i modelleringsprosessen?',
        options: [
          { id: 'a', text: 'Sette inn tall i formelen', isCorrect: false },
          { id: 'b', text: 'Tegne grafen', isCorrect: false },
          { id: 'c', text: 'Vurdere om modellen gir rimelige svar', isCorrect: true },
          { id: 'd', text: 'Samle inn så mange datapunkter som mulig', isCorrect: false },
        ],
        solution: 'Det siste og viktigste steget er å vurdere om resultatet er rimelig og om modellen faktisk passer til virkeligheten. Uten denne vurderingen vet vi ikke om svaret gir mening.',
      },
    },
    {
      id: '2p-6-1-n-section2',
      type: 'text',
      content: `## Lineær eller eksponentiell -- hvordan velge?

Nå vet du at du kan bruke enten en lineær eller en eksponentiell modell. Men hvordan avgjør du hvilken som passer best? Her er nøkkelen.

En **lineær modell** har formen $f(x) = ax + b$ og brukes når endringen per periode er **tilnærmet konstant**. Tenk fast lønnsøkning i kroner: du får 10 000 kroner mer hvert år, uansett hva du tjener fra før. Grafen er en rett linje.

En **eksponentiell modell** har formen $f(x) = a \\cdot b^x$ og brukes når endringen per periode er en **fast prosent** av nåværende verdi. Tenk rentes rente: 5 prosent av en stor sum er mer enn 5 prosent av en liten sum, så beløpet vokser raskere og raskere. Grafen er en kurve som vokser stadig brattere (eller avtar stadig saktere).

Hvordan avgjør du i praksis? Se på dataene dine. Beregn differansene mellom påfølgende verdier: er de omtrent like, er modellen lineær. Beregn forholdstallene mellom påfølgende verdier: er de omtrent like, er modellen eksponentiell. La oss ta et eksempel med en bakteriekultur: 100, 150, 225, 338, 506. Differansene er 50, 75, 113, 168 -- absolutt ikke konstante. Men forholdstallene er $150/100 = 1{,}50$, $225/150 = 1{,}50$, $338/225 = 1{,}50$, $506/338 = 1{,}50$. Alle er 1,50. Modellen er altså $f(t) = 100 \\cdot 1{,}50^t$, med 50 prosent vekst per time.

Noen ganger passer ingen av delene helt. Strømprisen for eksempel varierer sesongmessig -- høy om vinteren, lav om sommeren -- og krever en helt annen type modell, en *periodisk* modell. Det er viktig å innse at ikke alt lar seg fange med en rett linje eller en eksponentialkurve.`,
    },
    {
      id: '2p-6-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '2p-6-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'En bakteriekultur vokser fra 100 til 150 til 225 til 338 til 506. Hvilken type modell passer best?',
        options: [
          { id: 'a', text: 'Lineær, fordi verdiene øker', isCorrect: false },
          { id: 'b', text: 'Eksponentiell, fordi forholdstallene mellom påfølgende verdier er konstante ($\\approx 1{,}50$)', isCorrect: true },
          { id: 'c', text: 'Lineær, fordi differansene mellom verdiene øker jevnt', isCorrect: false },
          { id: 'd', text: 'Ingen modell passer for bakterievekst', isCorrect: false },
        ],
        solution: 'Forholdstallene mellom påfølgende verdier er alle omtrent 1,50 ($150/100 = 1{,}50$, $225/150 = 1{,}50$, osv.), noe som betyr at veksten er eksponentiell: $f(t) = 100 \\cdot 1{,}50^t$.',
      },
    },
    {
      id: '2p-6-1-n-section3',
      type: 'text',
      content: `## Praktisk modellering -- fra kopp til kommune

Matematisk modellering er ikke bare teori. La oss se på noen konkrete situasjoner og hvordan du oversetter dem til matematikk.

Du setter en kopp med vann i mikrobølgeovnen. Temperaturen øker jevnt med 15 grader Celsius per minutt, og vannet starter på 20 grader. Siden økningen er konstant, er dette en lineær modell: $T(t) = 15t + 20$, der $T$ er temperaturen og $t$ er tiden i minutter. Når blir vannet 100 grader? Vi løser: $15t + 20 = 100$, som gir $t = 80/15 \\approx 5{,}3$ minutter, altså rundt 5 minutter og 20 sekunder. Men pass på -- modellen er en forenkling. I virkeligheten vil oppvarmingen bremse når temperaturen nærmer seg kokepunktet, så den lineære modellen gir et litt for optimistisk svar.

Hva med noe mer komplekst? Tenk på en bedrift der omsetningen har vokst fra 5,0 millioner i 2019 til 6,5 millioner i 2023. En lineær modell gir stigningstall $a = (6{,}5 - 5{,}0)/4 = 0{,}375$ mill per år, altså $f(x) = 0{,}375x + 5{,}0$ (der $x = 0$ for 2019). For 2027 ($x = 8$) gir modellen $f(8) = 0{,}375 \\cdot 8 + 5{,}0 = 8{,}0$ millioner. Er det rimelig? Kanskje, hvis trenden fortsetter. Men vi har kun data for 5 år, og markedsforhold kan endre seg. Ekstrapolering fire år frem er alltid usikkert.

Hovedpoenget er at modellering handler like mye om *vurdering* som om *beregning*. En formel gir deg et tall, men det er du som må avgjøre om tallet er fornuftig.`,
    },
    {
      id: '2p-6-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '2p-6-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hvilken modell passer best for å beskrive hvordan prisen på strøm varierer gjennom et år (høy om vinteren, lav om sommeren)?',
        options: [
          { id: 'a', text: 'Lineær modell', isCorrect: false },
          { id: 'b', text: 'Eksponentiell modell', isCorrect: false },
          { id: 'c', text: 'Begge passer like godt', isCorrect: false },
          { id: 'd', text: 'Ingen av disse -- strømpris er sesongavhengig og krever en annen type modell', isCorrect: true },
        ],
        solution: 'Strømpris har sesongvariasjon (opp og ned gjennom året), som verken fanges opp av en lineær modell (jevn stigning eller synking) eller en eksponentiell modell (stadig vekst eller avtagning). Her trenger man for eksempel en periodisk modell.',
      },
    },
    {
      id: '2p-6-1-n-section4',
      type: 'text',
      content: `## Vurdere og kritisere modeller -- den viktigste ferdigheten

Enhver modell er en forenkling. Den fanger noen trekk ved virkeligheten, men aldri alt. Og jo lenger ut i fremtiden du bruker den, desto mer usikker blir den. Å *vurdere* modellen er derfor like viktig som å *sette den opp*.

Her er spørsmålene du bør stille. For det første: passer modellen til dataene? Sammenlign modellens verdier med de faktiske verdiene. Hvis avviket er stort, er modellen kanskje ikke god nok. For det andre: er modellen rimelig *utenfor* dataintervallet? Her er skillet mellom **interpolasjon** og **ekstrapolering** avgjørende. Interpolasjon betyr å beregne verdier *mellom* kjente datapunkter, og det er relativt pålitelig. Ekstrapolering betyr å beregne verdier *utenfor* kjente datapunkter, og det er mye mer usikkert.

For det tredje: hva er modellens begrensninger? Ingen modell gjelder for alltid. En eksponentiell vekstmodell for en strømmetjeneste vil til slutt spå at hele verdens befolkning abonnerer -- det er åpenbart urealistisk. For det fjerde: er forutsetningene realistiske? Når vi antar "jevn vekst," forutsetter vi at ingenting endrer seg -- ingen konkurrenter, ingen kriser, ingen teknologiske gjennombrudd. Det er sjelden tilfellet.

Tenk deg en softisbedrift med 50 000 kr i inntekt i juni 2023 og 65 000 kr i juni 2024. Når når de 100 000 kr? En lineær modell gir $x \\approx 3{,}3$ år (september 2026), en eksponentiell modell gir $x \\approx 2{,}6$ år (januar 2026). Men husk at softissalg er sesongbasert -- modellen beskriver kanskje bare junimåneder. Og 30 prosent årlig vekst er vanskelig å opprettholde over tid. *Konteksten* er alt.`,
    },
    {
      id: '2p-6-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '2p-6-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva er den viktigste forskjellen mellom interpolasjon og ekstrapolering?',
        options: [
          { id: 'a', text: 'Interpolasjon bruker lineære modeller og ekstrapolering bruker eksponentielle', isCorrect: false },
          { id: 'b', text: 'Interpolasjon beregner verdier mellom kjente data og er mer pålitelig, ekstrapolering beregner utenfor og er mer usikkert', isCorrect: true },
          { id: 'c', text: 'Det er ingen viktig forskjell -- begge gir like nøyaktige svar', isCorrect: false },
          { id: 'd', text: 'Interpolasjon er mer nøyaktig fordi den bruker flere datapunkter', isCorrect: false },
        ],
        solution: 'Interpolasjon beregner verdier innenfor kjente datapunkter og er generelt pålitelig. Ekstrapolering beregner utenfor dataområdet og er mye mer usikkert -- vi vet ikke om trenden fortsetter.',
      },
    },
    {
      id: '2p-6-1-n-section5',
      type: 'text',
      content: `## Fra elsparkesykler til befolkningsvekst

For å avslutte, la oss se på et eksempel som viser at virkeligheten ofte er mer nyansert enn modellene våre. En by registrerer antall elsparkesykler: 200 etter én måned, 520 etter tre, 1 100 etter seks, 1 600 etter ni og 1 900 etter tolv. Differansene er 320, 580, 500 og 300 -- de er ikke konstante, men ser ut til å *avta*. Forholdstallene er 2,6 -- 2,12 -- 1,45 -- 1,19, som også avtar. Verken lineær eller eksponentiell modell passer helt.

Det som skjer er noe vi ser overalt i virkeligheten: veksten flater ut. Først vokser antallet raskt, men etterhvert mettes markedet -- alle som vil ha en elsparkesykkel, har fått en. Denne typen vekst kalles **logistisk** vekst og har en S-formet kurve. Den starter eksponentielt, men bremser og nærmer seg et tak. I 2P trenger du ikke beherske logistiske modeller, men du bør *kjenne igjen* fenomenet: en vekst som avtar over tid.

Befolkningsvekst følger ofte et lignende mønster. I starten vokser en populasjon eksponentielt, men begrensede ressurser bremser veksten. Spredning av informasjon i sosiale medier starter eksponentielt, men flater ut når alle har fått nyheten. Vannstand i en beholder med jevn fylling er derimot lineær, og temperaturendring følger ofte en eksponentiell nedkjøling. Modellering handler om å gjenkjenne disse mønstrene og velge riktig verktøy for jobben.

Det viktigste du tar med deg fra dette kapittelet er at en modell alltid er en *forenkling*. Den er et kart, ikke terrenget. Og akkurat som et kart, er den nyttig så lenge du husker at den ikke viser alt.`,
    },
    {
      id: '2p-6-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '2p-6-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Antall abonnenter på en strømmetjeneste vokser med 600 nye per år fra 2023 til 2025. Hva gir en lineær modell for antall abonnenter i 2028, gitt at det var 2 000 i 2023?',
        options: [
          { id: 'a', text: '3 200', isCorrect: false },
          { id: 'b', text: '4 400', isCorrect: false },
          { id: 'c', text: '5 000', isCorrect: true },
          { id: 'd', text: '6 440', isCorrect: false },
        ],
        solution: 'Lineær modell: $f(x) = 600x + 2\\,000$ der $x$ er år etter 2023. For 2028 ($x = 5$): $f(5) = 600 \\cdot 5 + 2\\,000 = 5\\,000$.',
      },
    },
    {
      id: '2p-6-1-n-summary',
      type: 'text',
      content: `## Oppsummering

Matematisk modellering er kunsten å oversette den virkelige verden til matematikk og tilbake igjen. Det er en prosess i fem steg: forstå problemet, forenkle, modellere, løse og vurdere.

**Lineær modell** ($f(x) = ax + b$) brukes når endringen per periode er tilnærmet konstant -- sjekk om *differansene* mellom påfølgende verdier er omtrent like. **Eksponentiell modell** ($f(x) = a \\cdot b^x$) brukes når endringen er en fast prosent -- sjekk om *forholdstallene* mellom påfølgende verdier er omtrent like.

Det viktigste du tar med deg er at alle modeller er forenklinger. **Interpolasjon** (beregne verdier mellom kjente data) er pålitelig, mens **ekstrapolering** (beregne utenfor kjente data) er usikkert. Vurder alltid om modellens forutsetninger er realistiske, og husk at konteksten avgjør om svaret gir mening.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.2 NARRATIV: Digitale verktøy
// ============================================================================

export const CHAPTER_2P_6_2_NARRATIV: TextbookChapter = {
  id: '2p-6-2-narrativ',
  courseId: '2p',
  chapterNumber: '6.2',
  title: 'Digitale verktøy',
  subtitle: 'Narrativ versjon',
  description:
    'En praktisk guide til regneark, GeoGebra og diagrammer -- verktøyene som gjør matematikken levende og lar deg løse virkelige problemer.',
  estimatedMinutes: 35,
  competenceGoals: [
    'forklare og bruke prosent, prosentpoeng og vekstfaktor til modellering av praktiske situasjoner med digitale verktøy',
    'analysere og presentere funn i datasett fra lokalsamfunn og media',
  ],
  linkedChapterId: '2p-6-2',
  content: [
    {
      id: '2p-6-2-n-intro',
      type: 'text',
      content: `## Matematikk med muskler

Tenk deg at du skal sette opp en nedbetalingsplan for et lån, sammenligne to spareplaner over ti år, eller analysere strømprisene gjennom et helt år. Du *kan* gjøre alt for hånd, men det ville tatt timer og vært utsatt for regnefeil. Heldigvis finnes det verktøy som gjør jobben på sekunder -- og i matematikk 2P er det forventet at du kan bruke dem.

De to viktigste digitale verktøyene i 2P er **regneark** (som Excel eller Google Regneark) og **GeoGebra**. Regneark er utmerket for å organisere data, gjøre beregninger og lage diagrammer. GeoGebra er spesialdesignet for matematikk og er fantastisk for å plotte funksjoner, utføre regresjon og utforske geometri.

I dette kapittelet skal vi gå gjennom begge verktøyene og se hvordan de kan brukes til å løse praktiske problemer. Vi starter med regneark -- det verktøyet du mest sannsynlig allerede har brukt, selv om du kanskje ikke har utnyttet det fulle potensialet.`,
    },
    {
      id: '2p-6-2-n-section1',
      type: 'text',
      content: `## Regneark -- din personlige regnemaskin

Et regneark organiserer data i rader og kolonner, og hver rute kalles en **celle**. Cellen har en adresse -- for eksempel A1 (kolonne A, rad 1) eller B3 (kolonne B, rad 3). Kraften i regneark ligger i *formler*: du starter med et likhetstegn og skriver et uttrykk, og regnearket beregner svaret automatisk.

La oss sette opp et enkelt budsjett. Du har en inntekt på 25 000 kr i celle B1. I cellene B3 til B8 har du utgiftene dine: husleie 8 500, strøm 1 200, mat 4 000, transport 1 500, fritid 2 000 og annet 1 000. I celle B10 skriver du formelen \`=SUMMER(B3:B8)\` for å summere alle utgiftene. I B11 skriver du \`=B1-B10\` for å finne ut hva du har til overs. Og i B12 kan du skrive \`=B11/B1*100\` for å se spareprosenten din. Det geniale er at hvis du endrer ett tall -- for eksempel setter ned matbudsjettet fra 4 000 til 3 500 -- oppdateres alt automatisk.

Det er to typer **cellreferanser** du må kjenne. En **relativ referanse** som \`A1\` endrer seg når du kopierer formelen nedover (den blir \`A2\`, \`A3\` osv.). En **absolutt referanse** som \`$A$1\` forblir fast uansett hvor du kopierer den. Det er viktig å forstå forskjellen. Tenk deg at du har renten i celle B1 og vil multiplisere mange ulike beløp med denne renten. Da bruker du \`$B$1\` i formelen, så referansen til renten forblir fast mens beløpsreferansen endrer seg. Formelen \`=A1*(1+$B$1)\` i celle C1 kan kopieres nedover, og B1 peker alltid på renten mens A1 endrer seg til A2, A3 og så videre.`,
    },
    {
      id: '2p-6-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '2p-6-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'I et regneark står tallet 500 i celle A1 og tallet 0,05 i celle B1. Hva gir formelen `=A1*(1+B1)`?',
        options: [
          { id: 'a', text: '25', isCorrect: false },
          { id: 'b', text: '525', isCorrect: true },
          { id: 'c', text: '500,05', isCorrect: false },
          { id: 'd', text: '505', isCorrect: false },
        ],
        solution: '\`=A1*(1+B1)\` = $500 \\cdot (1 + 0{,}05) = 500 \\cdot 1{,}05 = 525$. Formelen beregner 500 med 5 % påslag.',
      },
    },
    {
      id: '2p-6-2-n-section2',
      type: 'text',
      content: `## GeoGebra -- matematikkens lekeplass

Mens regneark er gode til tall og tabeller, er **GeoGebra** designet spesielt for matematikk. Det er gratis, tilgjengelig på nett, og lar deg gjøre ting som ville tatt lang tid for hånd.

Det enkleste du kan gjøre i GeoGebra er å plotte en funksjon. Skriv \`f(x) = 2x + 3\` i inntastingsfeltet, og du ser umiddelbart en rett linje. Skriv \`g(x) = 100*1.05^x\`, og du ser en eksponentiell kurve. Du kan bruke kommandoen \`Nullpunkt(f)\` for å finne hvor funksjonen krysser $x$-aksen, og \`Skjæring(f, g)\` for å finne hvor to funksjoner møtes.

Men der GeoGebra virkelig skinner, er i **regresjonsanalyse**. Si at du har målt temperaturen i en kopp kaffe: 85 grader ved start, 72 etter 5 minutter, 62 etter 10, 55 etter 15, 49 etter 20 og 40 etter 30 minutter. Du legger dataene inn i GeoGebras regneark, lager en punktliste, og skriver \`RegEksp(L1)\`. GeoGebra gir deg den eksponentielle funksjonen som passer best til dataene, for eksempel $f(x) = 83{,}2 \\cdot 0{,}975^x$.

Den gir deg også en **$r^2$-verdi** -- determinasjonskoeffisienten -- som forteller hvor godt modellen passer. Verdien $r^2 = 0{,}98$ betyr at 98 prosent av variasjonen i dataene forklares av modellen. Jo nærmere 1, desto bedre. Med denne modellen kan du estimere temperaturen etter 45 minutter: $f(45) = 83{,}2 \\cdot 0{,}975^{45} \\approx 27$ grader. Lineær regresjon gjør du med \`RegLin(L1)\`.`,
    },
    {
      id: '2p-6-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '2p-6-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva betyr det at $r^2 = 0{,}98$ i en regresjonsanalyse?',
        options: [
          { id: 'a', text: 'Modellen har en feilmargin på 2 %', isCorrect: false },
          { id: 'b', text: 'Modellen passer til 98 av 100 datapunkter', isCorrect: false },
          { id: 'c', text: '98 % av variasjonen i dataene forklares av modellen', isCorrect: true },
          { id: 'd', text: 'Korrelasjonskoeffisienten er 0,98', isCorrect: false },
        ],
        solution: '$r^2 = 0{,}98$ betyr at 98 % av variasjonen i dataene kan forklares av modellen. Jo nærmere 1, desto bedre passer modellen. Korrelasjonskoeffisienten $r$ ville vært $\\sqrt{0{,}98} \\approx 0{,}99$, altså ikke helt det samme som $r^2$.',
      },
    },
    {
      id: '2p-6-2-n-section3',
      type: 'text',
      content: `## Diagrammer -- å se mønstrene

Tall i en tabell er informative, men et godt diagram kan avsløre mønstre du aldri ville sett i tallene alene. Ulike diagramtyper egner seg til ulike formål, og å velge riktig diagram er en ferdighet i seg selv.

Et **søylediagram** er perfekt for å sammenligne verdier i ulike kategorier -- for eksempel salg per måned eller karakterfordeling i en klasse. Et **linjediagram** viser utvikling over tid og er ideelt for å se trender -- for eksempel hvordan temperaturen endrer seg gjennom døgnet eller hvordan elbilsalget har utviklet seg fra 2015 til 2024. Et **sektordiagram** (eller kakediagram) viser andeler av en helhet -- for eksempel hvordan budsjettet ditt fordeler seg mellom husleie, mat og fritid.

Et **punktdiagram** (spredningsdiagram) er noe annet igjen: det viser sammenhengen mellom to variabler. Hvis du plotter antall timer studert mot eksamensresultat, kan du se om det er en sammenheng -- og legge inn en regresjonslinje. Et **histogram** viser frekvensfordelingen av data, for eksempel aldersfordelingen i en kommune.

Her er noen tips for gode diagrammer: Velg riktig type for det du vil vise. Ha tydelige aksetitler med enheter. Bruk en passende skala -- ikke start $y$-aksen midt i for å overdrive forskjeller, for det kan villede leseren. Og gi diagrammet en beskrivende tittel.

La oss ta et konkret valg. Du har tre datasett: budsjettfordeling, turistutvikling over tid, og sammenhengen mellom studietid og eksamenspoeng. Budsjettfordelingen er andeler av en helhet, altså et sektordiagram. Turistutviklingen er endring over tid, altså et linjediagram. Studietid versus poeng er to variabler du vil sammenlikne, altså et punktdiagram.`,
    },
    {
      id: '2p-6-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '2p-6-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Du vil vise hvordan salget av elbiler i Norge har utviklet seg fra 2015 til 2024. Hvilken diagramtype er best egnet?',
        options: [
          { id: 'a', text: 'Sektordiagram', isCorrect: false },
          { id: 'b', text: 'Histogram', isCorrect: false },
          { id: 'c', text: 'Linjediagram', isCorrect: true },
          { id: 'd', text: 'Boblediagram', isCorrect: false },
        ],
        solution: 'Linjediagram viser utvikling over tid og er ideelt for å se trenden i elbilsalget gjennom årene. Søylediagram kunne også fungert, men linjediagram er vanligst for tidsserier.',
      },
    },
    {
      id: '2p-6-2-n-section4',
      type: 'text',
      content: `## Problemløsning i praksis -- lån, sparing og analyse

La oss se på en større oppgave som viser hvordan regneark brukes i praksis. Du vil lage en nedbetalingsplan for et **annuitetslån** på 100 000 kr med 5 prosent årlig rente over 4 år. Først beregner du det faste terminbeløpet: $T = 100\\,000 \\cdot \\frac{0{,}05 \\cdot 1{,}05^4}{1{,}05^4 - 1} \\approx 28\\,201$ kr per år.

Deretter setter du opp regnearket. I kolonne A har du årstallet, i B restlånet ved starten av året, i C rentekostnaden (\`=B1*0,05\`), i D terminbeløpet (28 201), i E avdraget (\`=D1-C1\`), og i F restlånet ved slutten av året (\`=B1-E1\`). Neste års startbeløp (B2) er lik forrige års sluttbeløp (\`=F1\`). Regnearket viser automatisk at renten synker for hvert år mens avdragene øker -- selv om terminbeløpet er konstant.

Eller tenk at du sparer 1 000 kr i måneden til 3 prosent årlig rente. I regnearket har du månedsnummer i kolonne A, innskudd i B (1 000), saldo etter innskudd i C (gammel saldo pluss 1 000), og saldo etter rente i D (\`=C1*(1+0,0025)\`, fordi månedlig rente er $3\\%/12 = 0{,}25\\%$). Etter 12 måneder har du satt inn 12 000 kr og fått omtrent 198 kr i rente, totalt ca. 12 198 kr.

Husk at digitale verktøy er *hjelpemidler*. Regnearket gjør beregningene for deg, men du må fortsatt forstå matematikken bak for å sette opp formlene riktig og tolke resultatene. Verktøyet er bare så smart som den som bruker det.`,
    },
    {
      id: '2p-6-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '2p-6-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Du har et lån på 200 000 kr med 4 % årlig rente. Hva gir formelen `=A1*B1` hvis A1 inneholder 200 000 og B1 inneholder 0,04?',
        options: [
          { id: 'a', text: '800 kr', isCorrect: false },
          { id: 'b', text: '80 000 kr', isCorrect: false },
          { id: 'c', text: '8 000 kr', isCorrect: true },
          { id: 'd', text: '2 000 kr', isCorrect: false },
        ],
        solution: '\`=A1*B1\` = $200\\,000 \\cdot 0{,}04 = 8\\,000$ kr. Dette er rentekostnaden for det første året.',
      },
    },
    {
      id: '2p-6-2-n-section5',
      type: 'text',
      content: `## Absolutte og relative referanser -- den vanligste fellen

La oss snakke mer om et tema som forvirrer mange: forskjellen mellom absolutte og relative referanser. Det er kanskje det viktigste begrepet i regneark, fordi det avgjør om formlene dine fungerer riktig når du kopierer dem.

Tenk at du skriver formelen \`=B2*$C$1\` i celle D2 og kopierer den ned til D3, D4 og D5. Hva skjer? Den relative referansen B2 endrer seg til B3, B4 og B5 -- den følger med nedover. Men den absolutte referansen \`$C$1\` forblir \`$C$1\` i alle radene. Dollartegnene "låser" referansen på plass.

Når bruker du hva? Bruk **relativ referanse** når du vil at referansen skal flytte seg -- for eksempel når du summerer verdier i ulike rader. Bruk **absolutt referanse** når du peker på en fast verdi -- for eksempel en rente, en skattesats eller en vekstfaktor som skal brukes i alle beregningene. Mange feil i regneark kommer av at folk bruker relativ referanse der de burde brukt absolutt, slik at formelen plutselig peker på feil celle.

La oss ta et siste eksempel. Du sammenligner to spareplaner over 10 år: Plan A setter inn 500 kr i måneden til 3,5 prosent årlig rente, og Plan B setter inn 6 000 kr én gang i året til 3,8 prosent rente. Begge planene har totalt 60 000 kr i innskudd. Men resultatet er litt forskjellig -- Plan A gir ca. 71 200 kr og Plan B ca. 71 600 kr. Forskjellen er liten, men den illustrerer to motstridende effekter: Plan A setter inn pengene jevnere slik at de jobber lenger (renters rente oftere), men Plan B har høyere rente. I dette tilfellet oppveier de to effektene hverandre nesten helt. Et regneark lar deg utforske slike sammenligninger enkelt og raskt.`,
    },
    {
      id: '2p-6-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '2p-6-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Du skriver formelen `=B2*$C$1` i celle D2 og kopierer den ned til D3, D4 og D5. Hva skjer med cellreferansene?',
        options: [
          { id: 'a', text: 'Begge referansene endres til B3*C2, B4*C3 osv.', isCorrect: false },
          { id: 'b', text: 'Ingen av referansene endres', isCorrect: false },
          { id: 'c', text: 'Bare $C$1 endres, B2 forblir fast', isCorrect: false },
          { id: 'd', text: 'B2 endres til B3, B4, B5 mens $C$1 forblir $C$1 i alle radene', isCorrect: true },
        ],
        solution: 'B2 er en relativ referanse og endres til B3, B4, B5 når formelen kopieres nedover. $C$1 er en absolutt referanse (med dollartegn) og forblir fast uansett hvor formelen kopieres.',
      },
    },
    {
      id: '2p-6-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Digitale verktøy gjør det mulig å løse matematiske problemer som ville vært svært tidkrevende for hånd. Men verktøyene er bare hjelpemidler -- du må forstå matematikken for å bruke dem riktig.

I **regneark** bruker du formler (som starter med \`=\`), cellreferanser (relative som \`A1\` og absolutte som \`$A$1\`), og innebygde funksjoner som \`SUMMER\` og \`GJENNOMSNITT\`. I **GeoGebra** plotter du funksjoner, finner nullpunkter og skjæringspunkter, og utfører regresjon med kommandoer som \`RegLin\` og \`RegEksp\`. **$r^2$-verdien** forteller deg hvor godt modellen passer til dataene.

For **diagrammer** velger du type etter formål: søylediagram for sammenligning, linjediagram for utvikling over tid, sektordiagram for andeler, og punktdiagram for sammenhenger mellom to variabler. Husk at gode diagrammer har tydelige aksetitler, passende skala og en beskrivende tittel.`,
    },
  ],
  exercises: [],
};
