/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Filosofi og etikk (VG2/VG3) - Del 3
 * Seksjon 3: Etikk og moral
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.1: Hva er etikk og moral?
// ============================================================================

const CHAPTER_FILOSOFI_ETIKK_3_1: TextbookChapter = {
  id: 'fil-3-1',
  chapter: 3.1,
  title: 'Hva er etikk og moral?',
  subject: 'Filosofi og etikk',
  level: 'VG2/VG3',
  readingTime: '20 min',
  content: [
    {
      type: 'text',
      id: 'fil-3-1-intro',
      content: `Når vi står overfor vanskelige valg – om vi skal si sannheten selv om det sårer noen, om vi skal gripe inn når vi ser urett, om vi skal prioritere egeninteresse eller fellesskapets beste – da beveger vi oss inn i etikkens domene. Etikk handler om hvordan vi bør leve, om hva som er rett og galt, godt og ondt. Men hva mener vi egentlig når vi bruker disse begrepene? Og hva er forskjellen mellom etikk og moral?`,
    },
    {
      type: 'text',
      id: 'fil-3-1-skille',
      content: `**Etikk og moral – et viktig skille**

I dagligspråket brukes ofte ordene "etikk" og "moral" om hverandre, men i filosofien skiller vi mellom dem. **Moral** viser til de konkrete normene, verdiene og handlingsmønstrene som faktisk eksisterer i et samfunn eller hos en gruppe mennesker. Det er moralen som sier at vi ikke skal lyve, stjele eller skade andre. Moralen er det levde livet med alle sine uskrevne og skrevne regler.

**Etikk** er derimot den filosofiske refleksjonen over moralen. Etikk stiller spørsmål ved de moralske normene: Hvorfor skal vi ikke lyve? Er det alltid galt å lyve, eller finnes det unntak? Hva gjør en handling god eller ond? Etikken tar et skritt tilbake og undersøker selve grunnlaget for våre moralske vurderinger.`,
    },
    {
      type: 'example',
      id: 'fil-3-1-eks-1',
      title: 'Eksempel: Løgn for å redde liv',
      content: `Du skjuler en person som blir forfulgt av en voldelig gjeng. Gjengen banker på døren og spør om du har sett vedkommende.

**Moral**: De fleste moralske systemer sier at det er galt å lyve.

**Etikk**: Bør du likevel lyve i denne situasjonen? Veier plikten til å redde liv tyngre enn plikten til å si sannheten? Hvilke prinsipper skal vi bruke for å vurdere dette dilemmaet?`,
    },
    {
      type: 'text',
      id: 'fil-3-1-deskriptiv',
      content: `**Deskriptiv og normativ etikk**

Innenfor etikken skiller vi mellom to hovedtilnærminger. **Deskriptiv etikk** beskriver og forklarer faktiske moralske oppfatninger og praksiser. Den undersøker hva folk mener er rett og galt, uten selv å ta stilling til om disse oppfatningene er gode eller dårlige. Dette er en empirisk tilnærming som kan bruke sosiologi, antropologi og psykologi.

**Normativ etikk** går lenger – den forsøker å fastslå hva som faktisk er rett og galt. Den gir normer for hvordan vi bør handle. Når en filosof argumenterer for at vi har plikt til å hjelpe andre, eller at handlingens konsekvenser er det som teller moralsk, driver han eller hun normativ etikk.`,
    },
    {
      type: 'text',
      id: 'fil-3-1-metaetikk',
      content: `**Metaetikk – etikkens grunnlag**

På et enda mer grunnleggende nivå finner vi **metaetikken**. Metaetikk handler ikke om hvilke handlinger som er gode eller onde, men om selve naturen til moralske utsagn. Når jeg sier "drap er galt", hva slags type påstand er det? Er det en objektiv sannhet om verden, eller er det bare et uttrykk for mine følelser?

Metaetikken diskuterer blant annet:
- Er moralske verdier objektive (finnes uavhengig av mennesker) eller subjektive?
- Kan moralske utsagn være sanne eller falske?
- Hva er sammenhengen mellom moralske vurderinger og motivasjon?
- Kan vi ha moralsk kunnskap, og hvordan kan vi i så fall oppnå den?`,
    },
    {
      type: 'text',
      id: 'fil-3-1-posisjon',
      content: `To viktige metaetiske posisjoner er **realisme** og **antirealisme**. Moralsk realisme hevder at det finnes objektive moralske sannheter – at "drap er galt" er sant uavhengig av hva noen måtte mene om det. Moralsk antirealisme benekter dette og mener at moralske vurderinger enten er subjektive følelsesuttrykk, kulturelle konstruksjoner, eller rent språklige fenomener uten referanse til objektive fakta.`,
    },
    {
      type: 'example',
      id: 'fil-3-1-eks-2',
      title: 'Eksempel: "Tortur er galt"',
      content: `**Deskriptiv etikk**: I de fleste samfunn i dag mener folk at tortur er galt.

**Normativ etikk**: Tortur er galt fordi det bryter med menneskets verdighet og påfører ekstrem lidelse.

**Metaetikk**: Når vi sier at tortur er galt, refererer vi da til en objektiv moralsk sannhet, eller uttrykker vi bare vår sterke motvilje mot tortur?`,
    },
    {
      type: 'text',
      id: 'fil-3-1-nivaa',
      content: `**Tre nivåer av moralsk refleksjon**

Vi kan oppsummere de tre nivåene slik:

1. **Moral**: Konkrete normer og handlinger ("Ikke lyv", "Hjelp andre")
2. **Normativ etikk**: Prinsipper for hva som er rett og galt ("Handlinger er gode hvis de maksimerer lykke")
3. **Metaetikk**: Analyse av moralens natur ("Er moralske påstander objektive sannheter?")

Når vi i hverdagen diskuterer moralske spørsmål, beveger vi oss ofte mellom disse nivåene uten å være helt bevisste på det. Det å bli klar over hvilket nivå vi diskuterer på, kan bidra til å gjøre etiske diskusjoner mer presise og fruktbare.`,
    },
    {
      type: 'text',
      id: 'fil-3-1-hvorfor',
      content: `**Hvorfor trenger vi etikk?**

En kan spørre: Hvorfor skal vi drive med etikk? Er det ikke nok at vi har lover og sosiale normer? Svaret er at moralen alltid står overfor nye utfordringer. Teknologiske fremskritt, endrede samfunnsforhold og nye dilemmaer krever at vi reflekterer på nytt. Er det greit å manipulere menneskers gener? Hvordan bør vi behandle kunstig intelligens? Har vi moralske forpliktelser overfor fremtidige generasjoner?

Etikken gir oss redskaper til å tenke systematisk og kritisk om slike spørsmål. Den hjelper oss å se sammenhenger, oppdage inkonsekvenser i vår egen tenkning, og utvikle begrunnede standpunkter.`,
    },
  ],
  exercises: [
    {
      type: 'multiple-choice',
      id: 'fil-3-1-oppg-1',
      question: 'Hva er hovedforskjellen mellom etikk og moral?',
      options: [
        'Etikk handler om lover, moral handler om verdier',
        'Etikk er filosofisk refleksjon over moral, moral er levde normer',
        'Etikk er objektiv, moral er subjektiv',
        'Etikk er universell, moral er kulturell',
      ],
      correctAnswer: 1,
      explanation: 'Moral viser til de konkrete normene og verdiene som faktisk eksisterer, mens etikk er den filosofiske refleksjonen over disse normene.',
    },
    {
      type: 'classic',
      id: 'fil-3-1-oppg-2',
      question: 'Forklar forskjellen mellom deskriptiv og normativ etikk. Gi et eksempel på en deskriptiv påstand og en normativ påstand om samme tema.',
      hint: 'Deskriptiv beskriver hva folk faktisk mener, normativ tar stilling til hva som bør være.',
    },
    {
      type: 'multiple-choice',
      id: 'fil-3-1-oppg-3',
      question: 'Hvilket spørsmål tilhører metaetikken?',
      options: [
        'Er abort moralsk riktig?',
        'Hvilke handlinger maksimerer lykke?',
        'Er moralske påstander objektive sannheter eller subjektive uttrykk?',
        'Bør vi hjelpe mennesker i nød?',
      ],
      correctAnswer: 2,
      explanation: 'Metaetikk handler om moralens natur og moralske påstanders status, ikke om konkrete moralske spørsmål.',
    },
    {
      type: 'classic',
      id: 'fil-3-1-oppg-4',
      question: 'Er du moralsk realist eller antirealist? Begrunn ditt syn med minst to argumenter.',
      hint: 'Moralsk realisme: Moralske sannheter finnes objektivt. Antirealisme: Moral er subjektivt eller konstruert.',
    },
    {
      type: 'classic',
      id: 'fil-3-1-oppg-5',
      question: 'Diskuter om det finnes situasjoner der det er moralsk riktig å lyve. Analyser dette på alle tre nivåer (moral, normativ etikk, metaetikk).',
      hint: 'Vurder både konkrete eksempler, generelle prinsipper, og hva slags påstander du egentlig kommer med.',
    },
    // --- Samleoppgaver ---
    {
      type: 'classic',
      id: 'fil-3-1-oppg-6',
      question: 'Hvordan kan etisk refleksjon hjelpe oss med å møte nye moralske utfordringer som kunstig intelligens og genteknologi? Bruk eksempler.',
      hint: 'Tenk på hvordan etikkens verktøy kan brukes til å analysere og ta stilling til nye spørsmål.',
    },
    {
      type: 'classic',
      id: 'fil-3-1-oppg-7',
      question: 'Velg en aktuell moralsk konflikt fra samfunnsdebatten. Analyser den ved å skille mellom deskriptive og normative påstander, og drøft hvilke metaetiske spørsmål som kan være relevante.',
      hint: 'Finn en konkret sak (klima, dyrevelferd, migrasjon etc.) og bruk etikkens verktøykasse.',
    },
  ],
};

// ============================================================================
// Kapittel 3.2: Pliktetikk – Kant
// ============================================================================

const CHAPTER_FILOSOFI_ETIKK_3_2: TextbookChapter = {
  id: 'fil-3-2',
  chapter: 3.2,
  title: 'Pliktetikk – Kant',
  subject: 'Filosofi og etikk',
  level: 'VG2/VG3',
  readingTime: '25 min',
  content: [
    {
      type: 'text',
      id: 'fil-3-2-intro',
      content: `Immanuel Kant (1724–1804) utviklet en av de mest innflytelsesrike etiske teoriene i filosofihistorien. I motsetning til etiske teorier som vurderer handlinger ut fra deres konsekvenser, mener Kant at det moralske ved en handling ligger i selve handlingen og intensjonen bak den. En handling er god hvis den gjøres av plikt, ut fra respekt for den moralske loven. Dette kalles pliktetikk eller deontologisk etikk.`,
    },
    {
      type: 'text',
      id: 'fil-3-2-god-vilje',
      content: `**Den gode vilje**

Kant begynner sin moralfilosofi med en radikal påstand: Det eneste som er ubetinget godt, er en god vilje. Intelligens, mot, rikdom – alle slike egenskaper kan brukes til onde formål. Men en god vilje er god i seg selv, uavhengig av hva den oppnår.

En god vilje er en vilje som handler av plikt, ikke bare i samsvar med plikt. Hvis du hjelper noen fordi det gir deg god samvittighet, eller fordi du forventer noe tilbake, handler du i samsvar med plikt, men ikke av plikt. Kun når du handler fordi du erkjenner at det er riktig – uavhengig av følelser eller fordeler – handler du virkelig moralsk.`,
    },
    {
      type: 'example',
      id: 'fil-3-2-eks-1',
      title: 'Eksempel: Å hjelpe en eldre over gaten',
      content: `**Handling i samsvar med plikt**: Du hjelper en eldre over gaten fordi du liker å føle deg som et godt menneske, eller fordi andre ser på.

**Handling av plikt**: Du hjelper fordi du erkjenner at det er riktig å hjelpe andre som trenger det, uavhengig av hva du føler eller hvem som ser.

Kun den andre handlingen har ekte moralsk verdi ifølge Kant.`,
    },
    {
      type: 'text',
      id: 'fil-3-2-kategorisk',
      content: `**Det kategoriske imperativ**

Men hvordan vet vi hva plikten vår er? Kant formulerer dette gjennom det han kaller det kategoriske imperativ – et absolutt moralsk bud som gjelder uavhengig av våre ønsker og mål. Han gir flere formuleringer av dette imperativet, og de to viktigste er:

**1. Universaliseringsformuleringen**: "Handle bare etter den maksime du samtidig kan ville skal bli en allmenn lov."

Med andre ord: Før du handler, spør deg selv om regelen (maksimen) bak handlingen din kan gjelde for alle mennesker i alle situasjoner. Hvis alle handlet slik, ville verden da fungere?`,
    },
    {
      type: 'example',
      id: 'fil-3-2-eks-2',
      title: 'Eksempel: Løgn og universalisering',
      content: `Du vurderer å lyve for å komme deg ut av en vanskelig situasjon. Maksimen blir: "Når det gagner meg, er det greit å lyve."

**Universaliseringstest**: Hva hvis alle alltid løy når det gagnet dem? Da ville ingen stole på hverandre, og selve konseptet "løfte" ville miste sin mening. Løgn undergraver de betingelsene som gjør løgn mulig i utgangspunktet.

Konklusjon: Maksimen kan ikke universaliseres, derfor er det galt å lyve.`,
    },
    {
      type: 'text',
      id: 'fil-3-2-menneskeformulering',
      content: `**2. Menneskeformuleringen**: "Handle slik at du alltid bruker menneskeheten, både i din egen person og i enhver annen persons person, samtidig som mål og aldri bare som middel."

Denne formuleringen understreker menneskets verdighet. Hver person har iboende verdi og må behandles med respekt. Vi kan ikke bruke andre mennesker som rene redskaper for våre egne mål. Det betyr ikke at vi aldri kan "bruke" andre – når du handler i en butikk, bruker du ekspedienten som middel til å få varer. Men du må samtidig respektere vedkommende som et verdifullt menneske.`,
    },
    {
      type: 'example',
      id: 'fil-3-2-eks-3',
      title: 'Eksempel: Utnyttelse vs. samarbeid',
      content: `**Utnyttelse**: Du lover en kollega fremtidig hjelp (uten å mene det) for å få vedkommende til å gjøre noe for deg nå. Her bruker du personen bare som middel.

**Respektfull samhandling**: Du ber om hjelp og tilbyr gjengjeld fordi begge parter gagner. Dere bruker hverandre som middel, men også som mål – med gjensidig respekt.`,
    },
    {
      type: 'text',
      id: 'fil-3-2-autonomi',
      content: `**Autonomi og fornuft**

Sentralt i Kants etikk er begrepet autonomi – selvlovgivning. Mennesket er ikke bare underlagt moralske lover, det er selv opphav til dem gjennom sin fornuft. Når vi handler av plikt, følger vi ikke en ytre autoritet, men den loven vi selv erkjenner som fornuftig.

Dette gir mennesket en unik verdighet. Vi er ikke bare dyr styrt av instinkter og lyster, men rasjonelle vesener som kan stå imot tilbøyeligheter og handle ut fra prinsipper. Denne rasjonaliteten er kjernen i menneskets moralske verdi.`,
    },
    {
      type: 'text',
      id: 'fil-3-2-absolutt',
      content: `**Absolutte plikter og kritikk**

Kants pliktetikk er kategorisk – pliktene gjelder uten unntak. Det finnes ingen situasjoner der det er moralsk riktig å lyve, ifølge Kant, selv ikke for å redde et liv. Dette har møtt sterk kritikk. Virker det ikke uholdbart å si at man skal fortelle morderen sannheten om hvor offeret er?

Kant svarer at vi ikke kan vite konsekvensene av våre handlinger med sikkerhet. Kanskje offeret har rømt i mellomtiden. Men hvis vi begynner å gjøre unntak fra moralske prinsipper, undergraver vi selve moralens fundament. Universelle prinsipper krever absolutt overholdelse.`,
    },
    {
      type: 'text',
      id: 'fil-3-2-kritikk',
      content: `Kritikere mener dette er rigiditet som ikke tar hensyn til situasjonens kompleksitet. Andre innvendinger mot Kant inkluderer:

- **Konflikterende plikter**: Hva når to plikter kolliderer? Hvis jeg har plikt til både å si sannheten og beskytte uskyldige, hvordan løser jeg det?
- **Formalistisk**: Kants etikk fokuserer på handling og intensjon, men sier lite om karakterutvikling og dyder.
- **Utydelige maksimer**: Hvordan formulerer vi presist maksimen for en handling? Ulike formuleringer kan gi ulike konklusjoner ved universaliseringstesten.

Til tross for disse innvendingene har Kants etikk hatt enorm innflytelse, særlig gjennom sitt fokus på menneskeverd, autonomi og viktigheten av prinsipper.`,
    },
  ],
  exercises: [
    {
      type: 'multiple-choice',
      id: 'fil-3-2-oppg-1',
      question: 'Hva mener Kant er det eneste ubetinget gode?',
      options: [
        'Lykke',
        'En god vilje',
        'Fornuft',
        'Dyd',
      ],
      correctAnswer: 1,
      explanation: 'Kant mener at det eneste som er ubetinget godt er en god vilje – en vilje som handler av plikt.',
    },
    {
      type: 'classic',
      id: 'fil-3-2-oppg-2',
      question: 'Forklar forskjellen mellom å handle "av plikt" og "i samsvar med plikt". Hvorfor er denne forskjellen viktig for Kant?',
      hint: 'Tenk på motivasjonen bak handlingen.',
    },
    {
      type: 'multiple-choice',
      id: 'fil-3-2-oppg-3',
      question: 'Hva er kjernen i universaliseringsformuleringen av det kategoriske imperativ?',
      options: [
        'Handle slik at du maksimerer lykke',
        'Handle slik at regelen for handlingen din kan gjelde for alle',
        'Handle slik at du alltid følger dine følelser',
        'Handle slik at konsekvensene blir best mulig',
      ],
      correctAnswer: 1,
      explanation: 'Universaliseringsformuleringen krever at maksimen for handlingen må kunne gjelde som en allmenn lov.',
    },
    {
      type: 'classic',
      id: 'fil-3-2-oppg-4',
      question: 'Bruk universaliseringstesten på følgende maksime: "Når jeg trenger penger, er det greit å låne uten intensjon om å betale tilbake." Hva blir konklusjonen?',
      hint: 'Hva skjer hvis alle handler slik? Vil systemet med lån fungere?',
    },
    {
      type: 'classic',
      id: 'fil-3-2-oppg-5',
      question: 'Forklar menneskeformuleringen av det kategoriske imperativ. Gi et eksempel på en handling som bruker andre bare som middel, og et eksempel på en handling som respekterer andre som mål i seg selv.',
      hint: 'Tenk på forskjellen mellom manipulasjon og respektfull samhandling.',
    },
    // --- Samleoppgaver ---
    {
      type: 'classic',
      id: 'fil-3-2-oppg-6',
      question: 'Diskuter det klassiske dilemmaet: En morder banker på døren og spør hvor vennen din er. Vennen din gjemmer seg inne hos deg. Skal du si sannheten? Hva ville Kant svart, og er du enig?',
      hint: 'Vurder både Kants syn på absolutte plikter og mulige innvendinger mot dette.',
    },
    {
      type: 'classic',
      id: 'fil-3-2-oppg-7',
      question: 'Evaluer Kants pliktetikk: Hva er de største styrkene og svakhetene ved denne teorien? Argumenter for ditt syn.',
      hint: 'Styrker kan være menneskeverd, prinsipper, autonomi. Svakheter kan være rigiditet, konflikterende plikter.',
    },
  ],
};

// ============================================================================
// Kapittel 3.3: Konsekvensetikk – utilitarisme
// ============================================================================

const CHAPTER_FILOSOFI_ETIKK_3_3: TextbookChapter = {
  id: 'fil-3-3',
  chapter: 3.3,
  title: 'Konsekvensetikk – utilitarisme',
  subject: 'Filosofi og etikk',
  level: 'VG2/VG3',
  readingTime: '25 min',
  content: [
    {
      type: 'text',
      id: 'fil-3-3-intro',
      content: `Mens Kant fokuserer på plikter og intensjoner, vurderer konsekvensetikken handlinger ut fra deres resultater. Den mest kjente formen for konsekvensetikk er utilitarismen, utviklet av Jeremy Bentham (1748–1832) og John Stuart Mill (1806–1873). Utilitarismens grunnprinsipp er enkelt: En handling er god i den grad den maksimerer lykke eller velvære, og reduserer lidelse. Det er konsekvensene som teller, ikke intensjonen eller handlingens natur i seg selv.`,
    },
    {
      type: 'text',
      id: 'fil-3-3-bentham',
      content: `**Bentham: Lyst og smerte**

Jeremy Bentham var opptatt av å skape et rasjonelt grunnlag for moral og lovgivning. Han formulerte det utilitaristiske prinsippet slik: "Den største lykke for det største antall." Lykke identifiserte han med nytelse (pleasure) og fravær av smerte. Mennesket er, ifølge Bentham, styrt av to herskere: lyst og smerte. All atferd kan forklares ut fra ønsket om å oppnå lyst og unngå smerte.

En handling er riktig hvis den produserer mer lykke (nytelse) enn ulykke (smerte), når vi regner sammen alle som påvirkes. Bentham mente til og med at vi kunne utvikle en "hedonistisk kalkulus" – en måte å beregne den totale mengden lykke og lidelse en handling forårsaker, basert på faktorer som intensitet, varighet, sikkerhet og omfang.`,
    },
    {
      type: 'example',
      id: 'fil-3-3-eks-1',
      title: 'Eksempel: Benthams hedonistiske kalkulus',
      content: `Du vurderer om du skal donere 1000 kroner til veldedighet eller bruke dem på en konsertbillett til deg selv.

**Konserten**: Gir deg 10 enheter lykke i noen timer.

**Veldedighet**: Gir kanskje 50 mennesker 1 enhet lykke hver (mat, medisin). Totalt: 50 enheter lykke.

**Konklusjon**: Ifølge den hedonistiske kalkulasjonen er veldedigheten det riktige valget, fordi den produserer mer total lykke.`,
    },
    {
      type: 'text',
      id: 'fil-3-3-mill',
      content: `**Mill: Kvalitative forskjeller**

John Stuart Mill var elev av Benthams venn og fortsatte utilitarismens utvikling, men med viktige modifikasjoner. Mill avviste Benthams rene kvantitative tilnærming. Det er ikke bare mengden lykke som teller, mente Mill, men også kvaliteten.

Mill skilte mellom "høyere" og "lavere" nytelser. Intellektuelle og moralske nytelser (poesi, kunnskap, dyd) er kvalitativt bedre enn rent fysiske nytelser (mat, drikke, sex). Det er "bedre å være et ulykksalig menneske enn en lykkelig gris; bedre å være en misfornøyd Sokrates enn en fornøyd dust."`,
    },
    {
      type: 'text',
      id: 'fil-3-3-mill-kompetent',
      content: `Men hvordan avgjør vi hvilke nytelser som er bedre? Mill foreslår en "kompetent dommers" standard: De som har erfart begge typer nytelser, er kvalifisert til å bedømme. Og ifølge Mill vil de som har smakt både høye og lave nytelser, foretrekke de høye.

Mills modifikasjon har møtt kritikk. Hvem bestemmer hva som er "høyere" nytelser? Virker det ikke elitistisk å si at noen former for lykke er bedre enn andre? Bentham ville sagt at hvis folk faktisk foretrekker "lavere" nytelser, så er det deres lykke som teller.`,
    },
    {
      type: 'text',
      id: 'fil-3-3-handling-regel',
      content: `**Handlingsutilitarisme vs. regelutilitarisme**

Utilitarismen har utviklet seg i flere retninger. **Handlingsutilitarisme** vurderer hver enkelt handling direkte: Hva vil maksimere lykke i denne konkrete situasjonen? Dette kan føre til kontroversielle konklusjoner. Hvis tortur av én terrorist kan redde tusen liv, tilsier handlingsutilitarismen at det er riktig.

**Regelutilitarisme** handler derimot om å følge regler som generelt maksimerer lykke. Vi skal ikke evaluere hver enkelt handling, men følge regler som "ikke løg", "ikke tortur", "hold løfter" – fordi hvis alle følger disse reglene, maksimeres den totale lykken i samfunnet. Dette gir mer stabile og forutsigbare moralske standarder.`,
    },
    {
      type: 'example',
      id: 'fil-3-3-eks-2',
      title: 'Eksempel: Løftebrudd og lykke',
      content: `Du har lovet å hjelpe en venn med flytting på lørdag. Fredag får du tilbud om en flott tur som vil gjøre deg veldig lykkelig. Vennen vil klare flyttingen alene, men bli litt skuffet.

**Handlingsutilitarisme**: Beregn lykke i denne spesifikke situasjonen. Hvis din lykke ved turen overgår vennens skuffelse, bryt løftet.

**Regelutilitarisme**: Følg regelen "hold løfter", fordi hvis alle bryter løfter når det passer dem, vil tilliten i samfunnet bryte sammen, og total lykke reduseres på lang sikt.`,
    },
    {
      type: 'text',
      id: 'fil-3-3-styrker',
      content: `**Styrker ved utilitarismen**

Utilitarismen har flere tiltalende egenskaper:

- **Intuitivt plausibel**: Det virker rimelig at konsekvenser betyr noe moralsk. Hvis to handlinger er identiske bortsett fra at den ene fører til mer lidelse, virker det galt å velge den.
- **Impariell**: Alles lykke teller likt. Utilitarismen er demokratisk og universell.
- **Praktisk anvendbar**: Den gir klare retningslinjer for moralske og politiske beslutninger. Helse-, velferds- og utdanningspolitikk kan evalueres ut fra om de øker total velvære.
- **Fremtidsorientert**: Den fokuserer på å skape en bedre verden, ikke bare på å følge regler.`,
    },
    {
      type: 'text',
      id: 'fil-3-3-kritikk',
      content: `**Kritikk av utilitarismen**

Til tross for sin popularitet har utilitarismen møtt betydelig kritikk:

**1. Rettferdighet og individuelle rettigheter**: Utilitarismen kan rettferdiggjøre urettferdige handlinger hvis de maksimerer total lykke. Klassisk kritikk: Hvis tortur av én uskyldig ville gjøre mange andre lykkelige (gjennom falsk trygghet), ville det være riktig ifølge utilitarismen. Dette strider mot vår intuisjon om individuelle rettigheter.

**2. Krevende moral**: Hvis vi virkelig skal maksimere lykke, burde de fleste av oss gi bort mesteparten av vår formue til de fattigste. Utilitarismen kan virke altfor krevende.

**3. Umålbar lykke**: Hvordan måler og sammenligner vi lykke mellom individer? Er din lykke ved en god middag sammenlignbar med min lykke ved en god bok? Bentham og Mills forsøk på å kvantifisere lykke virker problematisk.

**4. Fremtidskunnskap**: Vi kjenner sjelden alle konsekvenser av våre handlinger. Hvordan skal vi handle basert på noe vi ikke kan vite sikkert?`,
    },
    {
      type: 'example',
      id: 'fil-3-3-eks-3',
      title: 'Eksempel: Trolley-problemet',
      content: `En vogn er på vei mot fem personer som vil dø. Du kan vri en spak og lede vognen over på et sidespor der én person vil dø. Hva gjør du?

**Utilitaristisk analyse**: 1 død er bedre enn 5 døde. Du bør vri spaken.

**Variant (bro-eksempelet)**: Samme scenario, men nå kan du bare stoppe vognen ved å dytte en stor person foran den, som vil dø men stoppe vognen. De fleste mener dette er galt, selv om konsekvensen er lik (1 dør, 5 reddes).

Dette viser at vi ikke alltid vurderer handlinger rent konsekvensielt – måten noe skjer på synes også å ha moralsk betydning.`,
    },
  ],
  exercises: [
    {
      type: 'multiple-choice',
      id: 'fil-3-3-oppg-1',
      question: 'Hva er kjerneprinsippet i utilitarismen?',
      options: [
        'Handle alltid etter universelle prinsipper',
        'Maksimer lykke og minimer lidelse for flest mulig',
        'Utvikle gode karaktertrekk',
        'Følg naturloven',
      ],
      correctAnswer: 1,
      explanation: 'Utilitarismen handler om å produsere den største lykken for det største antallet.',
    },
    {
      type: 'classic',
      id: 'fil-3-3-oppg-2',
      question: 'Forklar Benthams hedonistiske kalkulus. Hva er styrker og svakheter ved å forsøke å beregne lykke på denne måten?',
      hint: 'Tenk på om lykke virkelig kan kvantifiseres og sammenlignes mellom personer.',
    },
    {
      type: 'multiple-choice',
      id: 'fil-3-3-oppg-3',
      question: 'Hva er hovedforskjellen mellom Bentham og Mill?',
      options: [
        'Bentham fokuserer på kvantitet av lykke, Mill også på kvalitet',
        'Bentham er regelutilitarist, Mill er handlingsutilitarist',
        'Bentham mener bare intellektuelle nytelser teller',
        'Mill avviser at konsekvenser betyr noe',
      ],
      correctAnswer: 0,
      explanation: 'Mill introduserte skillet mellom høyere og lavere nytelser – kvalitative forskjeller i lykke.',
    },
    {
      type: 'classic',
      id: 'fil-3-3-oppg-4',
      question: 'Forklar forskjellen mellom handlingsutilitarisme og regelutilitarisme. Hvilket syn mener du er mest holdbart, og hvorfor?',
      hint: 'Tenk på styrker og svakheter ved begge tilnærmingene.',
    },
    {
      type: 'classic',
      id: 'fil-3-3-oppg-5',
      question: 'Drøft trolley-problemet: Er det moralsk riktig å ofre én person for å redde fem? Svar ut fra et utilitaristisk perspektiv, og vurder om dette svaret stemmer med din moralske intuisjon.',
      hint: 'Konsekvensen er lik (1 død vs 5 døde), men føles det likt å aktivt drepe vs. å la noen dø?',
    },
    // --- Samleoppgaver ---
    {
      type: 'classic',
      id: 'fil-3-3-oppg-6',
      question: 'Diskuter følgende kritikk av utilitarismen: "Hvis tortur av én uskyldig kunne gjøre millioner lykkelige, måtte utilitarismen si at det er riktig. Dette viser at teorien er fundamentalt feil." Er dette en rimelig kritikk?',
      hint: 'Vurder både handlingsutilitarisme og regelutilitarisme, og spørsmål om rettferdighet.',
    },
    {
      type: 'classic',
      id: 'fil-3-3-oppg-7',
      question: 'Sammenlign Kants pliktetikk og utilitarismen. Hva er de viktigste forskjellene? Hvilken teori mener du gir det beste grunnlaget for moral, og hvorfor?',
      hint: 'Tenk på intensjon vs. konsekvens, absolutte prinsipper vs. fleksibilitet, individets rettigheter vs. total lykke.',
    },
  ],
};

// ============================================================================
// Kapittel 3.4: Dydsetikk – Aristoteles
// ============================================================================

const CHAPTER_FILOSOFI_ETIKK_3_4: TextbookChapter = {
  id: 'fil-3-4',
  chapter: 3.4,
  title: 'Dydsetikk – Aristoteles',
  subject: 'Filosofi og etikk',
  level: 'VG2/VG3',
  readingTime: '20 min',
  content: [
    {
      type: 'text',
      id: 'fil-3-4-intro',
      content: `Både Kants pliktetikk og utilitarismen fokuserer på handlinger – hva som gjør en handling rett eller gal. Men hva om det sentrale i moralen ikke er hva vi gjør, men hva slags personer vi er? Dette er utgangspunktet for dydsetikken, som har røtter tilbake til den greske filosofen Aristoteles (384–322 f.Kr.). I stedet for å spørre "Hva bør jeg gjøre?", spør dydsetikken: "Hva slags person bør jeg være?"`,
    },
    {
      type: 'text',
      id: 'fil-3-4-eudaimonia',
      content: `**Eudaimonia – det gode liv**

Aristoteles begynner sin etikk med et teleologisk perspektiv – alle ting har et mål (telos). En knivs mål er å skjære, et øyes mål er å se. Hva er menneskets mål? Aristoteles svarer: eudaimonia, ofte oversatt som lykke eller "det gode liv". Men eudaimonia er ikke bare subjektiv tilfredsstillelse eller nytelse. Det er realisering av menneskets potensial, å blomstre som menneske.

Menneskets særpreg er fornuften. Derfor består det gode liv i å leve i samsvar med fornuften, å utvikle og utøve våre rasjonelle og moralske kapasiteter. Eudaimonia er ikke en følelse vi har av og til, men en livslang aktivitet – måten vi lever hele livet vårt på.`,
    },
    {
      type: 'text',
      id: 'fil-3-4-dyd',
      content: `**Hva er en dyd?**

Veien til eudaimonia går gjennom dyder. En **dyd** (arete) er en stabil karakter­egenskap som gjør oss i stand til å handle godt. Dyder er ikke medfødte, men noe vi utvikler gjennom praksis og vane. Vi blir modige ved å handle modig, sjenerøse ved å handle sjenerøst. Som å lære et instrument – det krever gjentakelse, øvelse og veiledning.

Aristoteles skiller mellom **intellektuelle dyder** (kunnskap, visdom, forståelse) og **moralske dyder** (mot, måtehold, sjenerøsitet, ærlighet). De moralske dydene handler om å finne den rette balansen i våre følelser og handlinger.`,
    },
    {
      type: 'text',
      id: 'fil-3-4-gylden',
      content: `**Den gylne middelvei**

Hver moralsk dyd er, ifølge Aristoteles, en middelvei mellom to laster – en mangel og en overskudd. **Mot** er middelpunktet mellom feighet (for lite mot) og dumdristighet (for mye "mot" uten fornuft). **Sjenerøsitet** ligger mellom gjerrighet og sløsing. **Beskjedenhet** ligger mellom uselhet og arroganse.

Dette betyr ikke at dyden alltid er et matematisk midtpunkt. Den gylne middelvei er relativ til situasjon og person. Hva som er modig for én person i én situasjon, kan være dumdristig for en annen. Det krever dømmekraft å finne den rette balansen.`,
    },
    {
      type: 'example',
      id: 'fil-3-4-eks-1',
      title: 'Eksempel: Sinnets dyder',
      content: `**Mangel**: Å aldri bli sint, selv når det er grunn til det (slavisk føyelighet).

**Dyd**: Rettmessig sinne – å bli sint på rett sted, rett tid, av riktig grunn, på riktig måte (f.eks. raseri mot urett).

**Overskudd**: Å være sint for ofte, for lenge, over småting (hetstøthet).

En dydsutviklet person vet når sinne er passende og vet å uttrykke det på konstruktive måter.`,
    },
    {
      type: 'text',
      id: 'fil-3-4-phronesis',
      content: `**Phronesis – praktisk visdom**

Men hvordan vet vi hva som er den gylne middelvei i en konkret situasjon? Her kommer phronesis inn – praktisk visdom eller praktisk dømmekraft. Phronesis er evnen til å se hva som er riktig å gjøre i den konkrete situasjonen, med alle dens nyanser og kompleksitet.

Phronesis kan ikke læres gjennom regler eller prinsipper alene. Det krever erfaring, modenhet og moralsk sensitivitet. Det er å vite når det er riktig å være sjenerøs og når det er riktig å si nei, når det er mot å stå imot og når det er visdom å gi seg. En person med phronesis ser hva situasjonen krever.`,
    },
    {
      type: 'text',
      id: 'fil-3-4-rolle',
      content: `**Rollemodeller og fellesskap**

Aristoteles understreker at vi ikke utvikler dyder i isolasjon. Vi lærer gjennom å observere og etterligne gode rollemodeller. Vi trenger å se mot i praksis for å forstå hva det vil si å være modig. Derfor er samfunnet vi vokser opp i, og personene vi omgås, avgjørende for vår moralske utvikling.

Videre er eudaimonia ikke noe vi oppnår alene. Mennesket er et sosialt vesen, og det gode liv inkluderer vennskap, familie og deltakelse i politisk fellesskap. Aristoteles anså vennskap som en av de viktigste komponentene i et lykkelig liv.`,
    },
    {
      type: 'example',
      id: 'fil-3-4-eks-2',
      title: 'Eksempel: Vennskap og dyd',
      content: `Aristoteles identifiserer tre typer vennskap:

1. **Nyttevennskap**: Basert på gjensidig fordel (forretnings­forbindelser).
2. **Lystbasert vennskap**: Basert på felles nytelse (fritidsvenner).
3. **Dygdsbasert vennskap**: Basert på gjensidig respekt for hverandres karakter.

Den tredje typen er den høyeste formen for vennskap. Her vil vi vennene våre vel for deres egen skyld, og vennskapet bidrar til begges moralske utvikling. Slike vennskap er sjeldne og krever tid å utvikle.`,
    },
    {
      type: 'text',
      id: 'fil-3-4-styrker',
      content: `**Styrker ved dydsetikken**

Dydsetikken har flere tiltalende sider:

- **Fokus på karakter**: Moralen handler ikke bare om enkelthandlinger, men om hvem vi er som personer over tid.
- **Kontekstsensitiv**: Phronesis tar hensyn til situasjonens kompleksitet i stedet for å følge rigide regler.
- **Psykologisk realistisk**: Vi utvikler moral gjennom vaner, følelser og fellesskap, ikke bare abstrakt resonnering.
- **Helhetlig**: Dydsetikken ser sammenhengen mellom moral og det gode liv, mellom dyd og lykke.`,
    },
    {
      type: 'text',
      id: 'fil-3-4-kritikk',
      content: `**Kritikk av dydsetikken**

Samtidig har dydsetikken møtt kritikk:

**1. Utydelige retningslinjer**: Hva er den gylne middelvei? Hva er "riktig sted" og "riktig tid"? Dydsetikken gir mindre konkrete svar enn regel- eller prinsipper baserte etikker.

**2. Kulturell relativisme**: Hvilke karakteregenskaper som regnes som dyder, varierer mellom kulturer. Aristoteles selv så ned på kvinner og slaver. Er dyder universelle eller kulturelt betingede?

**3. Konflikterende dyder**: Hva når ærlighet kommer i konflikt med vennlighet? Dydsetikken gir ikke alltid klare svar på slike dilemmaer.

**4. Phronesis som svart boks**: Å si at man trenger praktisk visdom for å handle rett, forklarer ikke helt hvordan man oppnår eller bruker denne visdommen.

Til tross for disse innvendingene har dydsetikken opplevd en renessanse i moderne etikk, særlig fordi den tar på alvor viktigheten av karakterutvikling, følelser og kontekst.`,
    },
  ],
  exercises: [
    {
      type: 'multiple-choice',
      id: 'fil-3-4-oppg-1',
      question: 'Hva er kjernen i Aristoteles\' etikk?',
      options: [
        'Vi bør følge universelle prinsipper',
        'Vi bør maksimere lykke',
        'Vi bør utvikle dyder for å oppnå eudaimonia',
        'Vi bør adlyde Guds bud',
      ],
      correctAnswer: 2,
      explanation: 'Aristoteles\' dydsetikk handler om å utvikle karakteregenskaper (dyder) som fører til det gode liv (eudaimonia).',
    },
    {
      type: 'classic',
      id: 'fil-3-4-oppg-2',
      question: 'Forklar hva Aristoteles mener med eudaimonia. Hvordan skiller dette seg fra vanlig forståelse av lykke?',
      hint: 'Tenk på forskjellen mellom subjektiv nytelse og realisering av menneskets potensial.',
    },
    {
      type: 'multiple-choice',
      id: 'fil-3-4-oppg-3',
      question: 'Hva er en dyd ifølge Aristoteles?',
      options: [
        'En medfødt egenskap',
        'En stabil karakteregenskap utviklet gjennom praksis',
        'En handling som maksimerer lykke',
        'En plikt vi må følge',
      ],
      correctAnswer: 1,
      explanation: 'Dyder er ikke medfødte, men stabile karakteregenskaper vi utvikler gjennom praksis og vane.',
    },
    {
      type: 'classic',
      id: 'fil-3-4-oppg-4',
      question: 'Forklar prinsippet om den gylne middelvei. Gi eksempler på to dyder med deres tilhørende laster (mangel og overskudd).',
      hint: 'Tenk på dyder som mot, sjenerøsitet, ærlighet, og hva som er for lite og for mye av hver.',
    },
    {
      type: 'classic',
      id: 'fil-3-4-oppg-5',
      question: 'Hva er phronesis, og hvorfor er det viktig i Aristoteles\' etikk? Hvordan skiller det seg fra teoretisk kunnskap?',
      hint: 'Phronesis er praktisk visdom – evnen til å se hva som er riktig i konkrete situasjoner.',
    },
    // --- Samleoppgaver ---
    {
      type: 'classic',
      id: 'fil-3-4-oppg-6',
      question: 'Aristoteles mener at vi utvikler dyder gjennom praksis og ved å observere rollemodeller. Reflekter over hvilke personer som har vært moralske rollemodeller for deg, og hvilke dyder du har lært av dem.',
      hint: 'Tenk på konkrete personer og hvilke karakteregenskaper de har vist.',
    },
    {
      type: 'classic',
      id: 'fil-3-4-oppg-7',
      question: 'Sammenlign dydsetikken med pliktetikken og utilitarismen. Hva er de viktigste forskjellene i fokus og tilnærming? Hvilken teori tiltaler deg mest, og hvorfor?',
      hint: 'Tenk på fokus: karakter vs. handling vs. konsekvens; universelle prinsipper vs. kontekst­sensitivitet.',
    },
  ],
};

// ============================================================================
// Kapittel 3.5: Nærhetsetikk og omsorgsetikk
// ============================================================================

const CHAPTER_FILOSOFI_ETIKK_3_5: TextbookChapter = {
  id: 'fil-3-5',
  chapter: 3.5,
  title: 'Nærhetsetikk og omsorgsetikk',
  subject: 'Filosofi og etikk',
  level: 'VG2/VG3',
  readingTime: '20 min',
  content: [
    {
      type: 'text',
      id: 'fil-3-5-intro',
      content: `De klassiske etiske teoriene vi har sett på – pliktetikk, utilitarisme og dydsetikk – har alle vært opptatt av universelle prinsipper, rasjonalitet og imparsialitet. Men hva om moralen i sin kjerne handler om noe mer grunnleggende: vår relasjon til konkrete andre mennesker? Dette er utgangspunktet for nærhetsetikk og omsorgsetikk – to beslektede tilnærminger som utfordrer tradisjonell etikk ved å sette relasjoner, nærhet og omsorg i sentrum.`,
    },
    {
      type: 'text',
      id: 'fil-3-5-levinas',
      content: `**Levinas: Den Andres ansikt**

Den fransk-jødiske filosofen Emmanuel Levinas (1906–1995) utviklet en radikal etikk basert på møtet med den Andre. For Levinas er etikk ikke et spørsmål om å anvende prinsipper eller kalkulere konsekvenser. Etikk oppstår i det direkte møtet med et annet menneskes ansikt.

Når jeg ser den Andres ansikt, opplever jeg ikke bare et objekt, men en sårbar person som appellerer til meg. Ansiktet "taler" – det sier "Du skal ikke drepe meg", "Jeg er her". Dette er ikke en teoretisk innsikt, men en umiddelbar, før-refleksiv erfaring som plasserer et krav på meg. Jeg blir ansvarlig for den Andre før jeg velger det, før jeg reflekterer over det.`,
    },
    {
      type: 'text',
      id: 'fil-3-5-levinas-ansvar',
      content: `**Ubegrenset ansvar**

Levinas' etikk er krevende. Mitt ansvar for den Andre er ikke begrenset, ikke noe jeg kan kvitte meg med. Før jeg tenker på meg selv, før jeg beregner nytte eller søker etter prinsipper, står jeg allerede i et ansvar. Moralen er asymmetrisk – jeg kan ikke kreve like mye av den Andre som den Andre krever av meg.

Dette kan virke urimelig: Skal vi virkelig bære ubegrenset ansvar for andre? Levinas svarer at nettopp dette ansvaret er det som gjør oss mennesker. Det er når vi prøver å redusere ansvaret, gjøre det kalkulerbart og begrenset, at vi begynner å behandle andre som objekter i stedet for personer.`,
    },
    {
      type: 'example',
      id: 'fil-3-5-eks-1',
      title: 'Eksempel: Møtet med den hjemløse',
      content: `Du går forbi en hjemløs person på gaten. I et Levinas-perspektiv er dette ikke et moralsk problem du kan løse gjennom kalkulasjon ("Bør jeg gi penger eller ikke? Hva maksimerer lykke?"). Det er et direkte møte med en sårbar person hvis ansikt stiller et krav til deg.

Du kan ignorere kravet, rasjonalisere det bort, men kravet forsvinner ikke. Moralsk ansvar er ikke noe du velger – du er allerede i det, fra det øyeblikket du ser ansiktet.`,
    },
    {
      type: 'text',
      id: 'fil-3-5-omsorg',
      content: `**Omsorgsetikk: Relasjonens moral**

Omsorgsetikken, utviklet særlig av feministiske filosofer som Carol Gilligan og Nel Noddings fra 1980-tallet, deler nærhetsetikkens fokus på relasjoner, men med en noe annen tilnærming. Omsorgsetikk er en kritikk av tradisjonell etikks ensidige fokus på rettferdighet, prinsipper og autonomi.

Carol Gilligan observerte at kvinner og menn ofte tenker forskjellig om moralske spørsmål. Mens mange menn tenderer mot abstrakte prinsipper og rettferdighet, tenderer mange kvinner mot kontekst, relasjoner og omsorg. Dette, hevdet Gilligan, er ikke tegn på moralsk underlegenhet, men en annen, like verdifull moralsk stemme – **omsorgens stemme**.`,
    },
    {
      type: 'text',
      id: 'fil-3-5-noddings',
      content: `**Noddings: Omsorg som grunn­relasjon**

Nel Noddings utviklet en omsorgsetikk som setter omsorgsfull relasjon som moralens kjerne. Omsorg er ikke et prinsipp, men en praktisk relasjon mellom den som gir omsorg (caring-for) og den som mottar (cared-for). Moralske handlinger springer ut av våre naturlige omsorgsrelasjoner – relasjonene til barn, foreldre, venner – som vi deretter utvider til andre.

Noddings vektlegger **responsivitet**: Vi må være lyttende, oppmerksomme og sensitive overfor den konkrete andres behov. Ikke alle trenger det samme. Moral er ikke å anvende samme regel på alle, men å respondere på den enkelte persons situasjon og behov.`,
    },
    {
      type: 'example',
      id: 'fil-3-5-eks-2',
      title: 'Eksempel: To barn i nød',
      content: `**Rettferdighetstilnærming** (tradisjonell etikk): To barn har begge brukket armen. Rettferdighet krever at begge får samme behandling – lik tilgang til helsehjelp, samme smertestillende.

**Omsorgstilnærming**: Det ene barnet er redd og trenger trøst og nærhet. Det andre barnet er modig og vil helst bli behandlet som "tøft". Omsorg betyr å respondere på hvert barns særegne behov, ikke bare behandle dem likt.

Omsorgsetikken ser begge hensynene – rettferdighet og omsorg – som viktige, men mener omsorg ofte blir oversett i tradisjonell etikk.`,
    },
    {
      type: 'text',
      id: 'fil-3-5-kritikk-trad',
      content: `**Kritikk av tradisjonell etikk**

Nærhetsetikk og omsorgsetikk retter flere kritikker mot tradisjonell etikk:

**1. Overdreven rasjonalitet**: Etikk handler ikke bare om å resonnere, men om å føle, bry seg, være til stede for andre.

**2. Abstrakt imparsialitet**: Ideen om at vi skal behandle alle likt, uavhengig av relasjon, ignorerer at vi faktisk har særlige forpliktelser overfor de nære oss – barn, foreldre, venner.

**3. Autonomi-fokus**: Tradisjonell etikk (særlig Kant) ser mennesket som autonome, uavhengige individer. Omsorgsetikken understreker at vi er relasjonelle vesener, avhengige av hverandre fra fødsel til død.

**4. Maskulin bias**: Etikken har historisk blitt utviklet av menn og kan reflektere maskuline verdier (konkurranse, uavhengighet) på bekostning av feminine verdier (samarbeid, avhengighet).`,
    },
    {
      type: 'text',
      id: 'fil-3-5-kritikk-omsorg',
      content: `**Kritikk av omsorgsetikken**

Omsorgsetikken har også møtt innvendinger:

**1. Begrensede relasjoner**: Hvis moral er basert på omsorg, hva med de vi ikke kjenner? Har vi ikke moralske forpliktelser overfor fremmede?

**2. Urettferdighet**: Hvis vi prioriterer de nære, kan vi lett overse urettferdighet. Familielojalitet kan bli nepotisme. Omsorg uten rettferdighet kan opprettholde undertrykkelse.

**3. Kjønnsstereotyper**: Er det ikke problematisk å assosiere omsorg med kvinner? Risikerer vi å forsterke tradisjonelle kjønnsroller der kvinner "naturlig" skal være omsorgsytere?

**4. Mangel på prinsipper**: Uten generelle prinsipper, hvordan løser vi moralske konflikter? Hvordan kan vi kritisere undertrykkende praksiser i andre kulturer?

Mange omsorgsetikere svarer at omsorg og rettferdighet ikke er motsetninger, men komplementære perspektiver vi trenger begge.`,
    },
    {
      type: 'text',
      id: 'fil-3-5-bidrag',
      content: `**Nærhetsetikkens bidrag**

Til tross for kritikken har nærhetsetikk og omsorgsetikk beriket moralfilosofien betydelig:

- De minner oss om at moral ikke bare er abstrakt resonnering, men handler om konkrete møter mellom sårbare mennesker.
- De utfordrer ideen om at imparsialitet alltid er en moralsk dyd.
- De åpner for å verdsette tradisjonelt "feminine" verdier som omsorg, empati og relasjonalitet.
- De stiller spørsmål ved moralfilosofiens universalitetspretensjoner og kulturelle blindsoner.

I dag anerkjenner de fleste etikere at både rettferdighet og omsorg, både prinsipper og kontekst, både rasjonalitet og følelser, har sin plass i en fullstendig moralfilosofi.`,
    },
  ],
  exercises: [
    {
      type: 'multiple-choice',
      id: 'fil-3-5-oppg-1',
      question: 'Hva er kjernen i Levinas\' nærhetsetikk?',
      options: [
        'Vi må følge universelle prinsipper',
        'Moral oppstår i møtet med den Andres ansikt',
        'Vi må maksimere total lykke',
        'Vi må utvikle dyder',
      ],
      correctAnswer: 1,
      explanation: 'For Levinas oppstår etikk i det direkte møtet med den Andres ansikt, som stiller et krav til oss før all refleksjon.',
    },
    {
      type: 'classic',
      id: 'fil-3-5-oppg-2',
      question: 'Forklar hva Levinas mener med at ansvaret for den Andre er "ubegrenset" og "asymmetrisk". Hva er styrkene og svakhetene ved denne tanken?',
      hint: 'Tenk på hvordan dette skiller seg fra gjensidighets-basert moral.',
    },
    {
      type: 'multiple-choice',
      id: 'fil-3-5-oppg-3',
      question: 'Hva er hovedfokuset i omsorgsetikken?',
      options: [
        'Abstrakte prinsipper og rettferdighet',
        'Konsekvenser av handlinger',
        'Relasjoner, kontekst og responsivitet',
        'Autonomi og uavhengighet',
      ],
      correctAnswer: 2,
      explanation: 'Omsorgsetikken fokuserer på relasjoner, kontekst og responsivitet overfor konkrete andres behov.',
    },
    {
      type: 'classic',
      id: 'fil-3-5-oppg-4',
      question: 'Forklar forskjellen mellom en "rettferdighetstilnærming" og en "omsorgstilnærming" til moral. Gi et konkret eksempel der de to tilnærmingene ville gitt forskjellige svar.',
      hint: 'Tenk på forskjellen mellom å behandle alle likt (rettferdighet) og å respondere på individuelle behov (omsorg).',
    },
    {
      type: 'classic',
      id: 'fil-3-5-oppg-5',
      question: 'Hvilke kritikker reiser omsorgsetikken mot tradisjonell etikk (som Kant og utilitarismen)? Evaluer om disse kritikkene er berettigede.',
      hint: 'Tenk på overdreven rasjonalitet, abstrakt imparsialitet, autonomi-fokus, og mulig maskulin bias.',
    },
    // --- Samleoppgaver ---
    {
      type: 'classic',
      id: 'fil-3-5-oppg-6',
      question: 'Noen kritikere hevder at omsorgsetikken kan rettferdiggjøre urettferdighet ved å prioritere de nære. Hvordan kan omsorgsetikken svare på denne innvendingen? Kan omsorg og rettferdighet forenes?',
      hint: 'Vurder om omsorg og rettferdighet må være motsetninger eller kan være komplementære.',
    },
    {
      type: 'classic',
      id: 'fil-3-5-oppg-7',
      question: 'Reflekter over alle fem etiske tilnærmingene vi har sett på (etikk/moral-skillet, pliktetikk, konsekvensetikk, dydsetikk, nærhetsetikk/omsorgsetikk). Hvilke innsikter fra hver tilnærming mener du er viktigst? Kan de kombineres til en helhetlig moralfilosofi?',
      hint: 'Tenk på hva hver teori bidrar med, og om en kombinasjon ville være mer fullstendig enn hver enkelt teori alene.',
    },
  ],
};

// ============================================================================
// Eksport
// ============================================================================

export const FILOSOFI_ETIKK_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_FILOSOFI_ETIKK_3_1,
  CHAPTER_FILOSOFI_ETIKK_3_2,
  CHAPTER_FILOSOFI_ETIKK_3_3,
  CHAPTER_FILOSOFI_ETIKK_3_4,
  CHAPTER_FILOSOFI_ETIKK_3_5,
];
