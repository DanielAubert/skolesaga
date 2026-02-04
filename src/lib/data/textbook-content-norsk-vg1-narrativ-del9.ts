/**
 * Norsk VG1 - Narrative versjoner Del 9 (Kapittel 8.1-8.5)
 *
 * Engasjerende, fortellende versjoner av kapitlene optimalisert for lesing/lytting.
 * Hver narrativ versjon linker tilbake til originalkapittelet via linkedChapterId.
 *
 * Temaer: Setningsanalyse, tekstbinding, rettskriving bokmal, rettskriving nynorsk, tegnsetting
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 8.1 NARRATIV: Setningsanalyse
// ============================================================================

export const CHAPTER_NORSK_VG1_8_1_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-8-1-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '8.1',
  title: 'Setningsanalyse',
  subtitle: 'Narrativ versjon',
  description: 'Bli en sprakdetektiv - lar a avslore hvordan setninger er bygd opp.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke grammatisk kunnskap til a analysere og vurdere egen og andres tekst',
    'gjore rede for setningsoppbygging og bruke dette i egen skriving',
  ],
  linkedChapterId: 'norsk-vg1-8-1',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-8-1-n-intro',
      type: 'text',
      content: `## A se gjennom sprakets rontgenbriller

Forestill deg at du har et par magiske briller. Nar du tar dem pa, kan du plutselig se gjennom ordene og oppdage strukturen som holder setningene sammen. Du ser hvordan hvert ord har sin rolle, sin funksjon, sin plass i helheten.

Dette er hva setningsanalyse handler om. Det er som a lare seg a se det usynlige skjelettet som holder spraket oppreist.

Hvorfor skal du bry deg om dette? Fordi nar du forstar hvordan setninger er bygd opp, kan du skrive bedre selv. Du kan finne feil i egne tekster. Du far et sprak for a snakke om sprak - noe som er gull verd pa eksamen. Og du far et forsprang nar du skal lare andre sprak, der grammatikken ofte er mer synlig.

I dette kapittelet skal vi sammen utforske setningens hemmeligheter. Vi skal lare oss de fem viktigste setningsleddene, og du skal bli i stand til a analysere selv ganske kompliserte setninger. Det blir litt som a lose et puslespill - nar alle brikkene faller pa plass, gir setningen plutselig perfekt mening.`,
    },

    // ========== SEKSJON 1: Verbalet - setningens hjerte ==========
    {
      id: 'norsk-vg1-8-1-n-section1',
      type: 'text',
      content: `## Verbalet - setningens bankende hjerte

La oss begynne med det viktigste leddet av alle: verbalet. Hvis setningen er en kropp, er verbalet hjertet. Uten hjerte, ingen liv. Uten verbal, ingen setning.

Verbalet forteller oss hva som skjer. Det er handlingen, tilstanden, det som binder alt sammen. I setningen "Katten sover pa sofaen" er "sover" verbalet. Det er det som forteller oss hva katten gjor.

For a finne verbalet, kan du sporr: "Hva skjer?" eller "Hva gjores?" Svaret er verbalet.

Men her kommer en liten komplikasjon: verbalet kan besta av flere ord. "Hun har alltid elsket musikk" har verbalet "har elsket". Det er hjelpeverbet "har" pluss hovedverbet "elsket" som sammen utgjor verbalet. Andre eksempler er "ble skrevet", "skal ha kommet", "vil reise".

Her er et nyttig triks: start alltid med a finne verbalet nar du skal analysere en setning. Nar du vet hva som skjer, blir det mye lettere a finne de andre leddene.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-8-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva er verbalet i setningen "Hun har alltid likt a lese boker"?',
        options: [
          { id: 'a', text: 'har likt', isCorrect: true },
          { id: 'b', text: 'a lese', isCorrect: false },
          { id: 'c', text: 'har alltid likt', isCorrect: false },
          { id: 'd', text: 'likt a lese', isCorrect: false },
        ],
        correctAnswer: 'a',
        solution: 'Verbalet er "har likt" - hjelpeverbet "har" pluss hovedverbet "likt". "a lese boker" er det hun liker, altsا objektet i setningen. "Alltid" er et adverbial som forteller om tid.',
      },
    },

    // ========== SEKSJON 2: Subjekt og objekt ==========
    {
      id: 'norsk-vg1-8-1-n-section2',
      type: 'text',
      content: `## Subjekt og objekt - hvem gjor hva med hvem?

Na som vi har funnet hjertet, la oss finne hjernen: subjektet. Subjektet er den eller det som handler eller beskrives. Det er hovedpersonen i setningens lille drama.

For a finne subjektet, spor: "Hvem eller hva + verbalet?" I setningen "Lise leser en bok" spor vi: "Hvem leser?" Svaret er "Lise". Der har du subjektet.

Noen ganger er subjektet litt lurende. "Det regner" har "det" som subjekt, selv om det ikke egentlig er noe som regner. Vi kaller dette et formelt subjekt - det er der for a fylle plassen subjektet ma ha i norske setninger.

Sa har vi objektet. Objektet er den eller det som handlingen rammer. Hvis subjektet er den som gjor noe, er objektet den som far noe gjort med seg.

For a finne direkte objekt, spor: "Hvem/hva + verbalet + subjektet?" I "Lise leser en bok" spor vi: "Lise leser hva?" Svaret er "en bok". Det er det direkte objektet.

Men det finnes ogsا indirekte objekt - den som mottar noe. I "Hun ga ham en gave" er "gave" det direkte objektet (det som gis), mens "ham" er det indirekte objektet (den som mottar). Indirekte objekt kommer vanligvis for direkte objekt.

Ikke alle setninger har objekt. "Solen skinner" har bare subjekt og verbal. Solen gjor ikke noe med noen - den bare skinner.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-8-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'I setningen "Moren ga barnet en is", hva er det indirekte objektet?',
        options: [
          { id: 'a', text: 'Moren', isCorrect: false },
          { id: 'b', text: 'barnet', isCorrect: true },
          { id: 'c', text: 'en is', isCorrect: false },
          { id: 'd', text: 'ga', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Barnet er det indirekte objektet - den som mottar noe. "En is" er det direkte objektet - det som gis. Vi kan sporr "Til hvem ga moren en is?" og svaret er "barnet".',
      },
    },

    // ========== SEKSJON 3: Adverbialer ==========
    {
      id: 'norsk-vg1-8-1-n-section3',
      type: 'text',
      content: `## Adverbialer - alle de gode detaljene

Na har vi verbal, subjekt og objekt pa plass. Men setninger handler om mer enn bare hvem som gjor hva. De handler ogsا om nar, hvor, hvordan og hvorfor. Det er her adverbialene kommer inn.

Adverbialer er som krydderet i en rett. De er ikke strengt nodvendige for at setningen skal være grammatisk korrekt, men de gjor den sa mye rikere og mer presis.

La oss se pa de ulike typene:

Tidsadverbialer svarer pa "Nar?" "I gar reiste vi til Bergen." Nar reiste dere? I gar.

Stedsadverbialer svarer pa "Hvor?" "Boken ligger pa bordet." Hvor ligger boken? Pa bordet.

Matesadverbialer svarer pa "Hvordan?" "Hun sang vakkert." Hvordan sang hun? Vakkert.

Arsaksadverbialer svarer pa "Hvorfor?" "Pa grunn av regnet ble kampen avlyst." Hvorfor ble kampen avlyst? Pa grunn av regnet.

En setning kan ha flere adverbialer. "I gar lop hun fort gjennom skogen" har bade tidsadverbial (i gar), matesadverbial (fort) og stedsadverbial (gjennom skogen).

Det finnes ogsا setningsadverbialer som modifiserer hele setningen: "Dessverre kan jeg ikke komme." "Kanskje har han rett." Disse uttrykker talerens holdning til det som sies.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-8-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'I setningen "I morgen skal vi reise til Paris", hvilke typer adverbialer finner vi?',
        options: [
          { id: 'a', text: 'Bare tidsadverbial', isCorrect: false },
          { id: 'b', text: 'Bare stedsadverbial', isCorrect: false },
          { id: 'c', text: 'Bade tidsadverbial og stedsadverbial', isCorrect: true },
          { id: 'd', text: 'Matesadverbial og stedsadverbial', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: '"I morgen" er tidsadverbial (nar skal vi reise?) og "til Paris" er stedsadverbial (hvor skal vi reise?). En setning kan ha flere adverbialer av ulike typer.',
      },
    },

    // ========== SEKSJON 4: Predikativ ==========
    {
      id: 'norsk-vg1-8-1-n-section4',
      type: 'text',
      content: `## Predikativ - nar vi beskriver subjektet

Her kommer en setningsleddtype som mange synes er vanskelig a skille fra adverbialer: predikativet. Men nar du forstar forskjellen, blir det plutselig enkelt.

Predikativet beskriver subjektet eller objektet. Det forteller oss hva noen eller noe er, blir eller virker som.

"Hun er laerer." Her er "laerer" et subjektspredikativ. Det beskriver subjektet "hun". Vi sier at hun = laerer.

"Maten smaker godt." Her er "godt" et subjektspredikativ. Det beskriver maten. Maten = godt (god).

Objektspredikativ beskriver objektet: "De kalte ham feig." Her er "feig" objektspredikativ fordi det beskriver objektet "ham". Ham = feig.

Men hva er forskjellen mellom predikativ og adverbial? La oss se pa to setninger:

"Han er rask." Her er "rask" predikativ - det beskriver hvordan han er. Han = rask.

"Han loper raskt." Her er "raskt" adverbial - det beskriver hvordan han loper, ikke hvordan han er.

Huskeregelen er: Predikativ kommer etter kopulaverb som "vare", "bli", "virke", "synes", "smaker", "foles". Disse verbene forbinder subjektet med en beskrivelse. Adverbial kommer etter handlingsverb og beskriver handlingen.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-8-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Er "flittig" predikativ eller adverbial i disse to setningene? 1) "Hun er flittig." 2) "Hun arbeider flittig."',
        options: [
          { id: 'a', text: 'Predikativ i begge', isCorrect: false },
          { id: 'b', text: 'Adverbial i begge', isCorrect: false },
          { id: 'c', text: '1) Predikativ, 2) Adverbial', isCorrect: true },
          { id: 'd', text: '1) Adverbial, 2) Predikativ', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'I setning 1 er "flittig" predikativ fordi det beskriver hvordan hun er (hun = flittig). I setning 2 er "flittig" adverbial fordi det beskriver hvordan hun arbeider, ikke hvordan hun er.',
      },
    },

    // ========== SEKSJON 5: Fullstendig setningsanalyse ==========
    {
      id: 'norsk-vg1-8-1-n-section5',
      type: 'text',
      content: `## Sette alt sammen - fullstendig setningsanalyse

Na har du alle verktoyene. La oss bruke dem sammen pa en kompleks setning:

"I gar ga laereren elevene en vanskelig oppgave pa skolen."

Steg 1: Finn verbalet. Hva skjer? "Ga" er verbalet.

Steg 2: Finn subjektet. Hvem ga? "Laereren" er subjektet.

Steg 3: Finn direkte objekt. Laereren ga hva? "En vanskelig oppgave" er direkte objekt.

Steg 4: Finn indirekte objekt. Laereren ga til hvem? "Elevene" er indirekte objekt.

Steg 5: Finn adverbialene. Nar? "I gar" er tidsadverbial. Hvor? "Pa skolen" er stedsadverbial.

Na kan vi sette opp analysen:

| I gar | ga | laereren | elevene | en vanskelig oppgave | pa skolen |
| A (tid) | V | S | IO | DO | A (sted) |

Du har na det vi kaller setningens informasjonsstruktur helt klar. Du vet hvem som gjorde hva, til hvem, nar og hvor.

Denne ferdigheten er gull verd nar du skal skrive selv. Nar du kan se strukturen i setninger, kan du variere den bevisst. Du kan velge a starte med tidsadverbialet for effekt, eller du kan omorganisere for bedre flyt. Du blir en bevisst skribent, ikke bare en som skriver pa mag.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-8-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvilken setningsledd-type svarer pa sporsmalet "Hvem/hva + verbalet?"',
        options: [
          { id: 'a', text: 'Subjekt', isCorrect: true },
          { id: 'b', text: 'Objekt', isCorrect: false },
          { id: 'c', text: 'Adverbial', isCorrect: false },
          { id: 'd', text: 'Predikativ', isCorrect: false },
        ],
        correctAnswer: 'a',
        solution: 'Subjektet finner vi ved a sporr "Hvem/hva + verbalet?". For eksempel: "Hvem leser?" Svaret er subjektet. For objekt spor vi "Hvem/hva + verbalet + subjektet?"',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-8-1-n-summary',
      type: 'text',
      content: `## Oppsummering: Dine verktoy for setningsanalyse

Du har na laert a se gjennom sprakets rontgenbriller. Her er de viktigste innsiktene:

**De fem setningsleddene:**
- Verbal (V): Setningens hjerte - hva som skjer
- Subjekt (S): Hvem eller hva som handler eller beskrives
- Objekt (DO/IO): Den eller det handlingen rammer
- Adverbial (A): Omstendighetene - tid, sted, mate, arsak
- Predikativ (P): Beskrivelse av subjekt eller objekt

**Sporreteknikkene:**
- Verbal: "Hva skjer?"
- Subjekt: "Hvem/hva + verbal?"
- Objekt: "Hvem/hva + verbal + subjekt?"
- Adverbial: "Nar? Hvor? Hvordan? Hvorfor?"
- Predikativ: "Hva er/blir subjektet/objektet?"

**Husketips:**
- Start alltid med verbalet - det gjor resten lettere
- Verbalet kan besta av flere ord (hjelpeverb + hovedverb)
- Predikativ kommer etter kopulaverb, adverbial etter handlingsverb
- En setning kan ha flere adverbialer

**Nokkelord:**
Setningsledd, verbal, subjekt, direkte objekt, indirekte objekt, adverbial, predikativ, kopulaverb.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.2 NARRATIV: Tekstbinding og sammenheng
// ============================================================================

export const CHAPTER_NORSK_VG1_8_2_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-8-2-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '8.2',
  title: 'Tekstbinding og sammenheng',
  subtitle: 'Narrativ versjon',
  description: 'Lar a sy setninger sammen til en sømløs tekst.',
  estimatedMinutes: 35,
  competenceGoals: [
    'bruke grammatisk kunnskap til a skape sammenheng i tekst',
    'vurdere og forbedre tekstbinding i egen og andres tekst',
  ],
  linkedChapterId: 'norsk-vg1-8-2',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-8-2-n-intro',
      type: 'text',
      content: `## Limet som holder teksten sammen

Tenk pa en tekst som et hus. Setningene er mursteinene, men hva holder dem sammen? Uten mørtel faller mursteiner fra hverandre. Uten tekstbinding faller setninger fra hverandre.

Du har sikkert lest tekster som "hakker" - der du ma stoppe opp og tenke "vent, hva har dette med forrige setning a gjore?" Og du har lest tekster som flyter - der du glir fra setning til setning uten a merke overgangene.

Forskjellen er tekstbinding.

Tekstbinding, eller kohesjon, er alle teknikkene vi bruker for a skape sammenheng mellom setninger og avsnitt. Det handler om a lede leseren gjennom teksten, a vise hvordan ideene henger sammen, a skape flyt.

I dette kapittelet skal vi utforske fire hovedtyper tekstbinding: konjunksjoner og subjunksjoner, referentbinding, tematisk binding og leksikalsk binding. Nar du mestrer disse, vil tekstene dine aldri hakke igjen.`,
    },

    // ========== SEKSJON 1: Konjunksjoner og subjunksjoner ==========
    {
      id: 'norsk-vg1-8-2-n-section1',
      type: 'text',
      content: `## Bindeordene - sprokets lim

De mest synlige verktoyene for tekstbinding er bindeordene. Vi deler dem i to grupper: konjunksjoner og subjunksjoner.

Konjunksjoner er de demokratiske bindeordene. De forbinder ting som er likeverdige. Tenk pa dem som et "og" mellom venner - ingen er sjefen.

De vanligste konjunksjonene er "og", "men", "eller" og "for". "Han spiste og drakk." "Hun ville ga, men han ville bli." "Vil du ha kaffe eller te?"

Men konjunksjoner gjor mer enn bare a binde ord. De viser logiske sammenhenger. "Og" legger til. "Men" viser motsetning. "Eller" gir alternativer. "For" forklarer arsak.

Subjunksjoner er de hierarkiske bindeordene. De innleder underordnede setninger - leddsetninger som ikke kan sta alene. "Fordi", "hvis", "nar", "da", "at", "selv om" - alle disse er subjunksjoner.

"Jeg grat fordi jeg var trist." Her er "fordi jeg var trist" en leddsetning som forklarer hvorfor jeg grat. Den kan ikke sta alene - "Fordi jeg var trist" er ikke en fullstendig setning.

Subjunksjoner viser ulike typer sammenhenger: tid (nar, da, mens), arsak (fordi, siden), betingelse (hvis, dersom), inrømmelse (selv om). A bruke riktig subjunksjon viser leseren nøyaktig hvordan setningene henger sammen.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-8-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva slags bindeord er "fordi"?',
        options: [
          { id: 'a', text: 'Subjunksjon (arsak)', isCorrect: true },
          { id: 'b', text: 'Konjunksjon (additiv)', isCorrect: false },
          { id: 'c', text: 'Konjunksjon (adversativ)', isCorrect: false },
          { id: 'd', text: 'Subjunksjon (betingelse)', isCorrect: false },
        ],
        correctAnswer: 'a',
        solution: '"Fordi" er en subjunksjon som innleder en arsakssetning. Den viser hvorfor noe skjer. Andre arsakssubjunksjoner er "siden" og "ettersom".',
      },
    },

    // ========== SEKSJON 2: Referentbinding ==========
    {
      id: 'norsk-vg1-8-2-n-section2',
      type: 'text',
      content: `## Referentbinding - a peke tilbake

Forestill deg at du forteller en historie om Per. Du begynner: "Per kom sent." Men na vil du fortelle mer om Per. Skal du skrive "Per var trott" i neste setning? Det blir litt klossete a gjenta navnet hele tiden.

I stedet skriver du: "Han var trott." Pronomenet "han" viser tilbake til "Per". Dette er referentbinding - a bruke ord som peker tilbake (eller fremover) til noe annet i teksten.

Den vanligste formen for referentbinding er pronomen: han, hun, de, den, det, dette, disse. "Lise kjopte en bok. Den var spennende." "Den" viser tilbake til "en bok".

Men vi kan ogsا bruke synonymer og overbegreper. "Katten løp over veien. Dyret var redd." Her er "dyret" et overbegrep for "katten".

Eller parafrasering - alternative betegnelser. "Oslo vokser. Hovedstaden trenger flere boliger." "Hovedstaden" er en annen mate a si "Oslo" pa.

Referentbinding gjor teksten mer variert og elegant. Men pass pa: referansen ma være tydelig! "Per og Ole kom. Han var sur." Hvem var sur? Per eller Ole? Uklar referanse forvirrer leseren.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-8-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva er referentbinding?',
        options: [
          { id: 'a', text: 'A bruke pronomen eller synonymer for a vise tilbake til noe nevnt tidligere', isCorrect: true },
          { id: 'b', text: 'A gjenta samme ord i hver setning', isCorrect: false },
          { id: 'c', text: 'A bruke komma mellom setninger', isCorrect: false },
          { id: 'd', text: 'A skrive lange avsnitt uten punktum', isCorrect: false },
        ],
        correctAnswer: 'a',
        solution: 'Referentbinding bruker pronomen, synonymer eller overbegreper for a vise tilbake til noe som allerede er nevnt. Det skaper sammenheng og unngår monoton gjentagelse.',
      },
    },

    // ========== SEKSJON 3: Tematisk binding ==========
    {
      id: 'norsk-vg1-8-2-n-section3',
      type: 'text',
      content: `## Tematisk binding - a holde fokus

Har du noen gang lest en tekst som hopper fra tema til tema uten at du skjønner sammenhengen? Det er tegn pa svak tematisk binding.

Tematisk binding handler om a holde fokus gjennom teksten. Hver setning har et tema (det setningen handler om) og et rema (ny informasjon om temaet). God tekst balanserer mellom kjent og ny informasjon.

Det finnes tre hovedtyper tematisk progresjon:

Konstant tema: Samme tema gjentas. "Hunden lop. Den bjeffet. Den var sulten." Her er hunden tema i alle setningene. Dette passer nar du vil holde fokus pa én ting.

Lineaer progresjon: Ny informasjon i én setning blir tema i neste. "Per motte en mann. Mannen ga ham en bok. Boken handlet om historie." Her flyter informasjonen fremover som en elv.

Overordnet tema: Flere undertemaer under ett hovedtema. "Byen har mye a by pa. Museene er gratis. Parkene er vakre. Restaurantene er gode." Her er byen det overordnede temaet, og vi utforsker ulike aspekter.

Nar du skriver, tenk bevisst pa hva som er tema i setningene dine. Det hjelper leseren a folge med.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-8-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hvilken type tematisk progresjon er dette: "Per motte en dame. Damen ga ham et brev. Brevet inneholdt en hemmelighet."',
        options: [
          { id: 'a', text: 'Konstant tema', isCorrect: false },
          { id: 'b', text: 'Lineaer progresjon', isCorrect: true },
          { id: 'c', text: 'Overordnet tema', isCorrect: false },
          { id: 'd', text: 'Ingen tematisk binding', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Dette er lineaer progresjon fordi ny informasjon i én setning (damen, brevet) blir tema i neste setning. Informasjonen flyter fremover som en kjede.',
      },
    },

    // ========== SEKSJON 4: Leksikalsk binding ==========
    {
      id: 'norsk-vg1-8-2-n-section4',
      type: 'text',
      content: `## Leksikalsk binding - ord som horer sammen

Den siste typen tekstbinding handler om selve ordvalgene. Leksikalsk binding betyr at du bruker ord som hører sammen tematisk.

Tenk pa denne teksten: "Klimaet endrer seg. Temperaturen stiger. Isen smelter. Havet stiger." Alle disse ordene horer til samme semantiske felt - de handler alle om klimaendringer. Denne ordkjeden skaper sammenheng.

Vi kan bruke flere teknikker:

Gjentagelse: Samme ord gjentas. "Miljoet er truet. Miljoet trenger beskyttelse." Enkelt og tydelig, men kan bli monotont.

Synonymer: Ord med lignende betydning. "Bilen er gammel. Kjoretoyet trenger reparasjon." Skaper variasjon.

Antonymer: Motsetninger. "Noen er rike, andre er fattige." Kontrasterer og fremhever.

Kollokasjon: Ord som ofte opptrer sammen. "Doktor - pasient - sykehus - behandling." Alle disse ordene signaliserer at vi er i en medisinsk kontekst.

God leksikalsk binding skaper et tematisk nett gjennom teksten. Leseren foler at alt hanger sammen, selv uten a tenke bevisst pa det.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-8-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvilken type leksikalsk binding er dette: "Bilen var gammel. Kjoretoyet trengte reparasjon."',
        options: [
          { id: 'a', text: 'Gjentagelse', isCorrect: false },
          { id: 'b', text: 'Synonymer', isCorrect: true },
          { id: 'c', text: 'Antonymer', isCorrect: false },
          { id: 'd', text: 'Kollokasjon', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: '"Bil" og "kjøretøy" er synonymer - ord med lignende betydning. Dette skaper variasjon i teksten samtidig som det holder tematisk fokus.',
      },
    },

    // ========== SEKSJON 5: Forbedre tekstbinding ==========
    {
      id: 'norsk-vg1-8-2-n-section5',
      type: 'text',
      content: `## Sette alt i praksis

La oss se pa hvordan svak tekstbinding kan forbedres. Her er en tekst med darlig binding:

"Skolen var er gammel. Skolen har darlige vinduer. Skolen trenger renovering. Kommunen har ikke penger."

Hva er problemet? Monoton gjentagelse av "Skolen", bra overgang til "Kommunen", ingen bindeord som viser sammenhenger.

Her er en forbedret versjon:

"Skolen var er gammel og har darlige vinduer. Den trenger derfor renovering. Dessverre har kommunen ikke penger til dette."

Hva ble gjort? Vi brukte konjunksjonen "og" for a binde sammen relaterte opplysninger. Vi brukte pronomenet "den" for referentbinding. Vi la til "derfor" for a vise arsak-virkning. Vi la til "dessverre" for a signalisere problemet. Vi la til "til dette" for a knytte tilbake.

Teksten flyter na. Leseren ledes gjennom, fra problem til behov til hindring.

Nar du skriver, les teksten hoyt. Hakker den? Da trenger den bedre binding. Varier bindemetodene - bruk bade bindeord, pronomen, synonymer og tematisk fokus. Husk: god tekstbinding er usynlig. Leseren legger ikke merke til den - de bare glir gjennom teksten.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-8-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva er det beste radet for a sjekke tekstbinding i din egen tekst?',
        options: [
          { id: 'a', text: 'Telle hvor mange "og" du har brukt', isCorrect: false },
          { id: 'b', text: 'Lese teksten hoyt og kjenne om den flyter', isCorrect: true },
          { id: 'c', text: 'Gjore alle setningene like lange', isCorrect: false },
          { id: 'd', text: 'Bruke sa mange fremmedord som mulig', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'A lese hoyt er den beste maten a oppdage hakking og darlig flyt. Der du snubler eller ma stoppe opp, trenger teksten sannsynligvis bedre binding.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-8-2-n-summary',
      type: 'text',
      content: `## Oppsummering: Dine verktoy for tekstbinding

Du har na laert a sy setninger sammen til en sammenhengende tekst. Her er hovedpunktene:

**Fire typer tekstbinding:**
- Konjunksjoner og subjunksjoner: Bindeord som viser logiske sammenhenger
- Referentbinding: Pronomen og synonymer som viser tilbake
- Tematisk binding: A holde fokus og balansere kjent/ny informasjon
- Leksikalsk binding: Ordvalg som horer sammen

**Konjunksjoner vs. subjunksjoner:**
- Konjunksjoner (og, men, eller) binder likeverdige ledd
- Subjunksjoner (fordi, hvis, nar) innleder underordnede setninger

**Tematisk progresjon:**
- Konstant tema: Samme fokus gjentas
- Lineaer: Ny info blir tema i neste setning
- Overordnet: Flere aspekter av ett hovedtema

**Praktiske tips:**
- Les hoyt for a hore om teksten flyter
- Varier bindemetodene
- Pass pa at referanser er tydelige
- God binding er usynlig

**Nokkelord:**
Tekstbinding, kohesjon, konjunksjon, subjunksjon, referentbinding, tema, rema, leksikalsk binding.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.3 NARRATIV: Rettskriving bokmal
// ============================================================================

export const CHAPTER_NORSK_VG1_8_3_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-8-3-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '8.3',
  title: 'Rettskriving bokmal',
  subtitle: 'Narrativ versjon',
  description: 'Mestre de vanligste fellene i bokmal - og imponér pa eksamen.',
  estimatedMinutes: 40,
  competenceGoals: [
    'mestre rettskriving og formverk pa bokmal',
    'bruke grammatisk kunnskap i egen skriving',
  ],
  linkedChapterId: 'norsk-vg1-8-3',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-8-3-n-intro',
      type: 'text',
      content: `## De usynlige feilene som alle ser

Du har skrevet en strålende tekst. Argumentene sitter. Strukturen er klar. Men sa oppdager sensor tre stygge rettskrivingsfeil - og plutselig virker hele teksten mindre gjennomarbeidet.

Rettskriving er som tannpuss for tekster. Det er ikke det mest spennende, men uten det legger folk merke til det. Pa feil mate.

Heldigvis er de fleste rettskrivingsfeil forutsigbare. Det er de samme fellene som fanger folk gang pa gang. Nar du kjenner dem, kan du unnga dem.

I dette kapittelet skal vi ga gjennom de vanligste feilene pa bokmal: da/nar, og/a, de/dem, sarskriving og dobbeltkonsonant. Vi skal ogsا se pa bokmålets valgfrihet - for ja, du har faktisk valg. Men du ma være konsekvent.

Nar du er ferdig med dette kapittelet, vil du ha verktoyene til a finne og rette de fleste feilene i egne tekster. Og det vil vises pa karakteren.`,
    },

    // ========== SEKSJON 1: Da eller nar? ==========
    {
      id: 'norsk-vg1-8-3-n-section1',
      type: 'text',
      content: `## Da eller nar? - tidsfellen

Dette er kanskje den vanligste feilen i norsk: a bruke "nar" i stedet for "da" om fortiden.

Regelen er enkel: "Da" brukes om fortid og engangshendelser. "Nar" brukes om natid, fremtid og gjentakelse.

"Da jeg var liten, bodde vi i Bergen." Riktig! Dette er fortid, en periode som er over.

"Nar jeg var liten, bodde vi i Bergen." Feil! Med mindre du mener at dere bor i Bergen hver gang du er liten (som ikke gir mening).

"Nar det regner, tar jeg paraply." Riktig! Dette er gjentakelse - hver gang det regner.

"Da det regnet i gar, ble jeg vat." Riktig! Dette er én bestemt hendelse i fortiden.

Huskeregelen: Tenk "dengang" for "da" og "hver gang" for "nar". Hvis du kan bytte ut med "dengang", skal du bruke "da". Hvis du kan bytte ut med "hver gang", skal du bruke "nar".

Dette er en feil som irriterer mange, særlig eldre lesere. Unngaelsen av denne feilen alene kan loft inntrykket av teksten din betraktelig.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-8-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvilken setning er riktig?',
        options: [
          { id: 'a', text: 'Nar jeg var ti ar, flyttet vi til Oslo.', isCorrect: false },
          { id: 'b', text: 'Da jeg var ti ar, flyttet vi til Oslo.', isCorrect: true },
          { id: 'c', text: 'Begge er riktige.', isCorrect: false },
          { id: 'd', text: 'Ingen av dem er riktige.', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: '"Da" er riktig fordi dette handler om fortid - en engangshendelse. Du var ti ar én gang i livet. Bruk "da" for fortid, "nar" for gjentakelse.',
      },
    },

    // ========== SEKSJON 2: Og eller a? ==========
    {
      id: 'norsk-vg1-8-3-n-section2',
      type: 'text',
      content: `## Og eller a? - infinitivfellen

En annen klassiker: a skrive "og" nar det skal være "a", eller omvendt.

"Og" er konjunksjon - det binder sammen ting. "Eple og pære." "Han og hun."

"A" er infinitivsmerke - det star foran verb i infinitiv. "A ga." "A lese." "A skrive."

Feilen oppstar fordi de uttales likt. "Jeg liker og lese" hores riktig ut, men er feil. Det skal være "Jeg liker a lese."

Her er testen: Kan du bytte ut med "for a"? Hvis ja, er det "a".

"Jeg liker (for a) lese." Gir mening! Altsا: "Jeg liker a lese."

"Eple (for a) pære." Gir ikke mening! Altsا: "Eple og pære."

En annen test: Kommer det et verb like etter? Hvis ja, er det sannsynligvis "a".

Pass spesielt pa disse konstruksjonene:
- "Jeg gikk for a handle" (ikke "for og")
- "Hun klarte a loft" (ikke "klarte og")
- "Vi bestemte oss for a reise" (ikke "for og")`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-8-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva er riktig: "Hun likte (og/a) spise is (og/a) drikke brus"?',
        options: [
          { id: 'a', text: 'og - og', isCorrect: false },
          { id: 'b', text: 'a - a', isCorrect: false },
          { id: 'c', text: 'a - og', isCorrect: true },
          { id: 'd', text: 'og - a', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: '"a spise" fordi det er infinitiv (verb). "og drikke" fordi det binder sammen to likeverdige handlinger (spise og drikke). Hun likte a spise is og drikke brus.',
      },
    },

    // ========== SEKSJON 3: De eller dem? ==========
    {
      id: 'norsk-vg1-8-3-n-section3',
      type: 'text',
      content: `## De eller dem? - pronomenfellen

"De" og "dem" forvirrer mange. Men regelen er faktisk ganske enkel nar du forstar den.

"De" er subjektsform - brukes nar pronomemet er subjekt i setningen.
"Dem" er objektsform - brukes nar pronomenet er objekt.

"De kom sent." De er subjekt - hvem kom? De.
"Jeg sa dem." Dem er objekt - hvem sa jeg? Dem.

Usikker? Her er trikset: Bytt ut med "vi" eller "oss".

"De kom sent." → "Vi kom sent." ✓ Altsا er "de" riktig.
"Jeg sa dem." → "Jeg sa oss." ✓ Altsا er "dem" riktig.

"Dem kom sent." → "Oss kom sent." ✗ Gir ikke mening! Altsا feil.
"Jeg sa de." → "Jeg sa vi." ✗ Gir ikke mening! Altsا feil.

Denne testen fungerer nesten alltid. "Vi" tilsvarer "de" (subjekt), "oss" tilsvarer "dem" (objekt).

Pass ogsa pa: "De som..." er alltid "de", ikke "dem". "De som vil, kan komme." Ikke "Dem som vil..."`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-8-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: '"Vi sa (de/dem) pa torget. (De/Dem) vinket til oss." Hva er riktig?',
        options: [
          { id: 'a', text: 'de - de', isCorrect: false },
          { id: 'b', text: 'dem - dem', isCorrect: false },
          { id: 'c', text: 'dem - De', isCorrect: true },
          { id: 'd', text: 'de - Dem', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Forste: "dem" fordi det er objekt (vi sa hvem?). Andre: "De" fordi det er subjekt (hvem vinket?). Test: "Vi sa oss" og "Vi vinket" - begge fungerer.',
      },
    },

    // ========== SEKSJON 4: Sarskriving og sammenskriving ==========
    {
      id: 'norsk-vg1-8-3-n-section4',
      type: 'text',
      content: `## Sarskriving - norskens hodepine

"Fotball kamp", "is krem", "skole sekk" - ser du hva som er feil? Disse sammensatte ordene skal skrives som ETT ord: fotballkamp, iskrem, skolesekk.

Sarskriving - a skrive sammensatte ord i to ord - er kanskje den vanligste feilen i moderne norsk. Pavirkningen fra engelsk, der sammensatte ord ofte skrives i to ord, gjor problemet verre.

Hovedregelen er klar: Sammensatte substantiv skrives i ETT ord pa norsk.

fotball + kamp = fotballkamp
is + krem = iskrem
skole + sekk = skolesekk
dorr + klokke = dørklokke

Her er en nyttig test: Kan du sette "en", "ei" eller "et" foran? "En fotballkamp" fungerer → ett ord. "En fotball kamp" fungerer ikke → feil.

MEN: Noen uttrykk SKAL skrives i to ord:
- i dag (ikke "idag")
- i morgen (ikke "imorgen")
- til slutt (ikke "tilslutt")
- i forveien (ikke "iforveien")

Dette er adverbiale uttrykk, ikke sammensatte substantiv. Test: "En i dag" gir ikke mening → to ord.

Ekstra komplisert: Noen sammensatte ord har binde-s eller binde-e:
- arbeidsdag (med s)
- barnehage (med e)

Nar du er usikker, slå opp i ordboka!`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-8-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvilken av disse er en sarskrivingsfeil?',
        options: [
          { id: 'a', text: 'fotball kamp', isCorrect: true },
          { id: 'b', text: 'i dag', isCorrect: false },
          { id: 'c', text: 'til slutt', isCorrect: false },
          { id: 'd', text: 'i forveien', isCorrect: false },
        ],
        correctAnswer: 'a',
        solution: '"fotball kamp" er feil - det skal være "fotballkamp" (ett ord). De andre er riktig skrevet som to ord fordi de er adverbiale uttrykk, ikke sammensatte substantiv.',
      },
    },

    // ========== SEKSJON 5: Dobbeltkonsonant og valgfrihet ==========
    {
      id: 'norsk-vg1-8-3-n-section5',
      type: 'text',
      content: `## Dobbeltkonsonant og bokmålets valgfrihet

Dobbeltkonsonant er en annen vanlig feilkilde. Hovedregelen er: Etter kort, trykksterk vokal kommer dobbeltkonsonant.

"takk" har kort a → dobbelt k
"tak" (pa huset) har lang a → enkel k

"satt" (fortid av sitte) har kort a → dobbelt t
"sat" er feil!

En vanlig feil er "han sat". Det skal være "han satt". Les ordet hoyt - horer du kort vokal? Da skal det være dobbeltkonsonant.

Til slutt: Bokmal har faktisk valgfrihet pa mange omrader. Du kan velge mellom:

- boka/boken, jenta/jenten (hunkjønnsendelse)
- kastet/kasta, hoppet/hoppa (fortidsendelse)
- ei/en bok (artikkel)

Det viktige er a være KONSEKVENT. Velg én stil og hold deg til den gjennom hele teksten. Ikke skriv "boka" i ett avsnitt og "boken" i neste.

Tips: Finn din stil. Liker du a-former (boka, kasta) eller e-former (boken, kastet)? Velg det som foler seg naturlig, og hold deg til det.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-8-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvilken setning har riktig rettskriving?',
        options: [
          { id: 'a', text: 'Da jeg var liten, likte jeg a lese.', isCorrect: true },
          { id: 'b', text: 'Nar jeg var liten, likte jeg og lese.', isCorrect: false },
          { id: 'c', text: 'Da jeg var liten likte jeg og lese.', isCorrect: false },
          { id: 'd', text: 'Nar jeg var liten likte jeg a lese.', isCorrect: false },
        ],
        correctAnswer: 'a',
        solution: 'A er riktig: "Da" (fortid), "a" (infinitivsmerke), komma etter leddsetningen. De andre har feil i da/nar, og/a, eller komma.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-8-3-n-summary',
      type: 'text',
      content: `## Oppsummering: Dine verktoy mot rettskrivingsfeil

Du har na laert de vanligste fellene pa bokmal. Her er sjekklisten:

**Da/nar:**
- Da = fortid, engangshendelse ("dengang")
- Nar = natid/fremtid, gjentakelse ("hver gang")

**Og/a:**
- Og = konjunksjon (binder ting sammen)
- A = infinitivsmerke (foran verb)
- Test: Kan du bytte ut med "for a"?

**De/dem:**
- De = subjekt (hvem gjor?)
- Dem = objekt (hvem rammes?)
- Test: Bytt ut med vi/oss

**Sarskriving:**
- Sammensatte substantiv = ETT ord (fotballkamp)
- Adverbiale uttrykk = to ord (i dag, til slutt)
- Test: Kan du sette "en/ei/et" foran?

**Dobbeltkonsonant:**
- Kort vokal = dobbelt konsonant (takk, satt)
- Lang vokal = enkel konsonant (tak, sat er feil)

**Valgfrihet:**
- Velg én stil (boka/boken, kastet/kasta)
- Vær konsekvent gjennom hele teksten

**Tips:** Les korrektur baklengs for a fange skrivefeil. Bruk Bokmålsordboka (ordbok.uib.no) nar du er usikker.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.4 NARRATIV: Rettskriving nynorsk
// ============================================================================

export const CHAPTER_NORSK_VG1_8_4_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-8-4-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '8.4',
  title: 'Rettskriving nynorsk',
  subtitle: 'Narrativ versjon',
  description: 'Nynorsk er ikkje bokmal med a-endingar - lar a skrive ekte nynorsk.',
  estimatedMinutes: 40,
  competenceGoals: [
    'mestre rettskriving og formverk pa nynorsk',
    'skrive tekster pa nynorsk med god sprakforing',
  ],
  linkedChapterId: 'norsk-vg1-8-4',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-8-4-n-intro',
      type: 'text',
      content: `## Nynorsk - eit eige sprak

Her kjem den store misforstainga mange har om nynorsk: At det berre er bokmal med andre endingar. "Bare bytt ut 'ikke' med 'ikkje' og 'hun' med 'ho', så er du i mal."

Nei. Nynorsk er eit eige skriftsprak med eigen grammatikk, eigne ord og eigen stil. A skrive god nynorsk krev at du tenkjer nynorsk frا fyrste stund - ikkje at du "omset" frا bokmal.

Ivar Aasen skapte landsmål (seinare nynorsk) pa 1800-talet med utgangspunkt i norske dialektar. Malet var eit skriftsprak som låg naerare folkespraaket enn det danske skriftspraket som dominerte. Denne arven lever vidare i dag.

I dette kapittelet skal du laere dei viktigaste saerrrekkja ved nynorsk: dei orda som er heilt annleis, grammatikken som skil seg ut, og dei vanlegaste bokmålsfeila du ma unnga. Nar du er ferdig, vil du kunne skrive nynorsk som faktisk er nynorsk - ikkje forkledd bokmal.`,
    },

    // ========== SEKSJON 1: Ord som er heilt annleis ==========
    {
      id: 'norsk-vg1-8-4-n-section1',
      type: 'text',
      content: `## Orda du ma kunne

Det fyrste du ma laere er at mange vanlege ord er heilt annleis pa nynorsk. Dette er ikkje valfritt - desse orda MA brukast.

La oss starte med dei mest grunnleggjande:

"Ikkje" i staden for "ikke". Dette er kanskje det viktigaste ordet a hugse. Kvar gong du skriv "ikke" pa nynorsk, lyser det som ein varsellamp.

Sporjeorda er ogsa annleis:
- kva (ikkje "hva")
- kven (ikkje "hvem")
- kvar (ikkje "hvor")
- korleis (ikkje "hvordan")
- kvifor (ikkje "hvorfor")

Pronomena skil seg ut:
- ho (ikkje "hun")
- dei (ikkje "de/dem")
- noko (ikkje "noe")
- nokon (ikkje "noen")
- mykje (ikkje "mye")

Andre viktige ord:
- berre (ikkje "bare")
- difor (ikkje "derfor")
- saman (ikkje "sammen")
- kjem (ikkje "kommer")
- gjer (ikkje "gjør")
- tek (ikkje "tar")

Desse orda er obligatoriske. Det finst ikkje val. "Ikkje", ikkje "ikke". "Kva", ikkje "hva". Alltid.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-8-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Kva er rett nynorsk for "Hun vet ikke"?',
        options: [
          { id: 'a', text: 'Ho veit ikkje', isCorrect: true },
          { id: 'b', text: 'Hun veit ikke', isCorrect: false },
          { id: 'c', text: 'Ho vet ikkje', isCorrect: false },
          { id: 'd', text: 'Hun vet ikke', isCorrect: false },
        ],
        correctAnswer: 'a',
        solution: '"Ho veit ikkje" er korrekt nynorsk. "Hun" skal vere "ho", "vet" skal vere "veit", og "ikke" skal vere "ikkje". Alle tre orda er obligatoriske nynorskformer.',
      },
    },

    // ========== SEKSJON 2: Verbboyning pa nynorsk ==========
    {
      id: 'norsk-vg1-8-4-n-section2',
      type: 'text',
      content: `## Verba - her skil nynorsk seg mest ut

Verbboyning er kanskje det omradet der nynorsk skil seg mest fra bokmal. Nokre verb har heilt andre former.

La oss ta dei viktigaste:

A kome (ikkje "komme"):
- Presens: kjem (ikkje "kommer"!)
- Preteritum: kom
- Perfektum: har kome

A ta:
- Presens: tek (ikkje "tar"!)
- Preteritum: tok
- Perfektum: har teke (ikkje "tatt")

A gjere (ikkje "gjore"):
- Presens: gjer (ikkje "gjor"!)
- Preteritum: gjorde
- Perfektum: har gjort

A sja (ikkje "se"):
- Presens: ser
- Preteritum: sag (ikkje "sa")
- Perfektum: har sett

A vere (ikkje "vaere"):
- Presens: er
- Preteritum: var
- Perfektum: har vore (ikkje "vaert")

Desse verba er veldig vanlege, sa du må kunne dei. "Kjem", ikkje "kommer". "Tek", ikkje "tar". "Gjer", ikkje "gjor". Dette er ikkje valfritt.

Elles folger nynorsk verb dei same boyningsmonstra som bokmal, men med nokre endringar i endingar. A-infinitiv (a kasta) eller e-infinitiv (a kaste) er begge tillatne - velg ein og ver konsekvent.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-8-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Kva er presensforma av "a kome" pa nynorsk?',
        options: [
          { id: 'a', text: 'kommer', isCorrect: false },
          { id: 'b', text: 'kjem', isCorrect: true },
          { id: 'c', text: 'kom', isCorrect: false },
          { id: 'd', text: 'kome', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: '"Kjem" er rett presensform av "a kome" pa nynorsk. "Kommer" er bokmal og skal aldri brukast pa nynorsk. Dette er ein obligatorisk nynorskform.',
      },
    },

    // ========== SEKSJON 3: Substantivboyning ==========
    {
      id: 'norsk-vg1-8-4-n-section3',
      type: 'text',
      content: `## Substantiva - hokjonn er obligatorisk

Pa bokmal kan du velje om du vil bruke hokjonn (ei bok - boka) eller hankonn (en bok - boken). Pa nynorsk er hokjonn obligatorisk. Alle hokjonnsord ma boyes som hokjonn.

Boyningsmonstra:

Hankonn (ein):
ein gut - guten - gutar - gutane

Hokjonn (ei):
ei bok - boka - boker - bokene
ei jente - jenta - jenter - jentene

Inkjekonn (eit):
eit hus - huset - hus - husa
eit barn - barnet - born - borna

Legg merke til fleirtalsendingane:
- Hankonn far -ar (gutar, bilar)
- Hokjonn far -er (jenter, boker)
- Inkjekonn har ofte inga ending (hus) eller -a (borna)

I bestemt form fleirtal:
- Hankonn: -ane (gutane)
- Hokjonn: -ene (jentene, bokene)
- Inkjekonn: -a (husa, borna)

Pa bokmal kan du skrive "guttene", men pa nynorsk ma det vere "gutane". Pa bokmal kan du skrive "husene", men pa nynorsk er det "husa".`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-8-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Kva er rett fleirtalsform av "gut" pa nynorsk?',
        options: [
          { id: 'a', text: 'gutar', isCorrect: true },
          { id: 'b', text: 'gutter', isCorrect: false },
          { id: 'c', text: 'gutene', isCorrect: false },
          { id: 'd', text: 'guttar', isCorrect: false },
        ],
        correctAnswer: 'a',
        solution: '"Gutar" er rett ubestemt fleirtal av "gut" pa nynorsk. Hankonnsord far typisk -ar i fleirtal. "Gutter" er bokmalform.',
      },
    },

    // ========== SEKSJON 4: Vanlege bokmaalsfeil ==========
    {
      id: 'norsk-vg1-8-4-n-section4',
      type: 'text',
      content: `## Dei vanlegaste bokmalsfeila

Her er ei sjekkliste over bokmalsord som ALDRI skal brukast pa nynorsk:

Pronomen og sporjeord:
- "ikke" → ikkje
- "hva" → kva
- "hvem" → kven
- "hvor" → kvar
- "hvordan" → korleis
- "hvorfor" → kvifor
- "hun" → ho
- "de/dem" → dei
- "noe" → noko
- "noen" → nokon
- "mye" → mykje

Verb:
- "kommer" → kjem
- "tar" → tek
- "gjor" → gjer
- "vet" → veit

Andre ord:
- "bare" → berre
- "derfor" → difor
- "sammen" → saman
- "allikevel" → likevel
- "vanskelig" → vanskeleg
- "farlig" → farleg

Nar du skriv nynorsk, ga gjennom teksten og sjekk for desse orda. Kvar einaste "ikke", "hva", "hun" eller "kommer" er ein bokmålsfeil som trekkjer ned karakteren.

Tips: Lag deg ei personleg sjekkliste med dei orda DU ofte gløymer. Ga gjennom denne for kvar nynorsktekst du skriv.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-8-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Kva er riktig nynorsk for "Hvordan har du det?"',
        options: [
          { id: 'a', text: 'Korleis har du det?', isCorrect: true },
          { id: 'b', text: 'Hvordan har du det?', isCorrect: false },
          { id: 'c', text: 'Kordan har du det?', isCorrect: false },
          { id: 'd', text: 'Koss har du det?', isCorrect: false },
        ],
        correctAnswer: 'a',
        solution: '"Korleis har du det?" er riktig nynorsk. "Hvordan" er bokmal og skal ikkje brukast pa nynorsk. "Korleis" er det einaste rette alternativet.',
      },
    },

    // ========== SEKSJON 5: A tenkje nynorsk ==========
    {
      id: 'norsk-vg1-8-4-n-section5',
      type: 'text',
      content: `## Tenkj nynorsk fra start

Det beste radet for a skrive god nynorsk er a ikkje "omsetje" fra bokmal. Tenkj nynorsk fra fyrste stund.

Nar du sit med eit bokmalshode og prover a skrive nynorsk, ender du opp med a leite etter "nynorskord" for kvart bokmalsord. Det blir tungt og feilfullt.

I staden: Prøv a tenkje tanken pa nynorsk. Korleis ville du sagt dette om du snakka dialekt? Mange dialektar ligg naerare nynorsk enn bokmal.

Les nynorsk! Jo meir du les, jo meir naturleg blir det. Framtida.no, NRK Nynorsk, Dag og Tid - det finst mykje god nynorsk der ute.

Bruk Nynorskordboka (ordbok.uib.no). Nar du er usikker pa eit ord, sla det opp. Det tek nokre sekund og kan spare deg for ein feil.

Ver konsekvent. Nynorsk har valfridom mellom a-infinitiv (a kasta) og e-infinitiv (a kaste). Velg ein og hald deg til den gjennom heile teksten.

Til slutt: Respekter spraket. Nynorsk er ikkje "vanskeleg bokmal" eller eit hinder. Det er eit rikt, levande sprak med lang tradisjon. Nar du skriv nynorsk, deltar du i ein kulturtradisjon som strekkjer seg tilbake til Ivar Aasen og fram til dagens nynorskforfattarar.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-8-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Kva betyr det a velje mellom a-infinitiv og e-infinitiv i nynorsk?',
        options: [
          { id: 'a', text: 'Du kan velje mellom "a kaste" og "a kasta", men ma vere konsekvent', isCorrect: true },
          { id: 'b', text: 'A-infinitiv er alltid feil pa nynorsk', isCorrect: false },
          { id: 'c', text: 'E-infinitiv er den einaste godkjende forma', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell mellom formene', isCorrect: false },
        ],
        correctAnswer: 'a',
        solution: 'Nynorsk har valfridom mellom a-infinitiv (a kasta) og e-infinitiv (a kaste). Begge er riktige, men du ma vere konsekvent gjennom heile teksten.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-8-4-n-summary',
      type: 'text',
      content: `## Oppsummering: Dine verktoy for nynorsk

Du har no laert dei viktigaste saertrekka ved nynorsk. Her er hovudpunkta:

**Obligatoriske nynorskord:**
- ikkje, kva, kven, kvar, korleis, kvifor
- ho, dei, noko, nokon, mykje
- berre, difor, saman

**Obligatoriske verbformer:**
- kjem (ikkje "kommer")
- tek (ikkje "tar")
- gjer (ikkje "gjor")
- veit (ikkje "vet")
- har vore (ikkje "har vaert")
- har teke (ikkje "har tatt")

**Substantivboyning:**
- Hokjonn er obligatorisk (ei bok - boka)
- Hankonn fleirtal: -ar (gutar, gutane)
- Hokjonn fleirtal: -er (jenter, jentene)
- Inkjekonn fleirtal: ofte -a (husa, borna)

**Valfridom:**
- a-infinitiv eller e-infinitiv (a kasta/a kaste)
- Ver konsekvent!

**Tips:**
- Tenkj nynorsk fra start - ikkje "omset"
- Les nynorsk jamleg
- Bruk Nynorskordboka aktivt
- Lag di eiga sjekkliste for ord du ofte gløymer`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.5 NARRATIV: Tegnsetting
// ============================================================================

export const CHAPTER_NORSK_VG1_8_5_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-8-5-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '8.5',
  title: 'Tegnsetting',
  subtitle: 'Narrativ versjon',
  description: 'Mestre komma, kolon og alle de andre smatingene som gjor teksten din profesjonell.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke korrekt tegnsetting i egne tekster',
    'vurdere og forbedre tegnsetting i andres tekster',
    'forsta sammenhengen mellom tegnsetting og tekstens mening',
  ],
  linkedChapterId: 'norsk-vg1-8-5',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-8-5-n-intro',
      type: 'text',
      content: `## De sma tegnene med stor makt

"La oss spise bestemor!"
"La oss spise, bestemor!"

Ett lite komma. Forskjellen mellom en invitasjon til middag og kannibalisme.

Tegnsetting er mer enn bare regler a folge. Det er et verktoy for a kontrollere hvordan teksten din leses. Riktig tegnsetting gjor teksten tydelig, profesjonell og lett a forsta. Feil tegnsetting kan forandre meningen helt - eller bare gjore leseren forvirret.

Det gode er at tegnsettingsreglene er ganske logiske nar du forstar dem. Og nar du forstar dem, vil du aldri se pa et komma pa samme mate igjen.

I dette kapittelet skal vi ga gjennom alle de viktige tegnene: punktum og sporsmålstegn, alle kommareglene, kolon og semikolon, tankestrek og bindestrek, og anforselstegn. Nar du er ferdig, vil du vite nøyaktig nar du skal sette det kommaet - og nar du ikke skal.`,
    },

    // ========== SEKSJON 1: Komma - hovedreglene ==========
    {
      id: 'norsk-vg1-8-5-n-section1',
      type: 'text',
      content: `## Komma - det trikse tegnet

Komma er det tegnet folk sliter mest med. Men det finnes logiske regler, og nar du kan dem, er det plutselig enkelt.

Hovedregel 1: Komma ved oppramsing.
Sett komma mellom ledd i en oppramsing: "Jeg kjopte epler, bananer, appelsiner og druer."
Men - og dette er viktig - IKKE komma foran "og" pa norsk. Dette skiller oss fra engelsk.

Hovedregel 2: Komma foran leddsetninger.
Nar en underordnet setning (leddsetning) kommer etter hovedsetningen, setter vi ofte komma foran: "Jeg kommer, hvis det ikke regner." "Han gikk hjem, fordi han var trott."

Hovedregel 3: Komma ved innskudd.
Innskutte ledd far komma pa begge sider: "Kari, som er min beste venn, kommer i morgen." "Mannen, tross alt, var en god person."

Hovedregel 4: Komma foran "og", "men", "eller" med nytt subjekt.
"Han gikk hjem, og hun ble igjen." Her er det to subjekter (han, hun), sa vi setter komma.
Men: "Han gikk hjem og la seg." Her er det samme subjekt (han), sa IKKE komma.

Hovedregel 5: Komma ved tiltale.
"Kari, kan du hjelpe meg?" "Ja, det kan jeg."`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-8-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Nar skal du sette komma foran "og"?',
        options: [
          { id: 'a', text: 'Alltid', isCorrect: false },
          { id: 'b', text: 'Aldri', isCorrect: false },
          { id: 'c', text: 'Nar det kommer en ny setning med nytt subjekt', isCorrect: true },
          { id: 'd', text: 'Bare i oppramsinger', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Komma settes foran "og" nar det kommer en ny selvstendig setning med nytt subjekt: "Han gikk hjem, og hun ble igjen." Men ikke: "Han gikk hjem og la seg." (samme subjekt)',
      },
    },

    // ========== SEKSJON 2: Komma - flere regler og vanlige feil ==========
    {
      id: 'norsk-vg1-8-5-n-section2',
      type: 'text',
      content: `## Kommafeil du ma unnga

Na som du kan hovedreglene, la oss se pa de vanligste feilene.

Feil 1: Komma mellom subjekt og verbal.
"Per, gikk hjem." FEIL! Det skal aldri være komma mellom subjekt og verbal.
"Per gikk hjem." Riktig.

Feil 2: Komma foran "og" i oppramsing.
"Epler, pærer, og bananer." FEIL pa norsk! (Selv om det er riktig pa engelsk.)
"Epler, pærer og bananer." Riktig.

Feil 3: Manglende komma foran "og" med nytt subjekt.
"Han gikk hjem og hun ble igjen." FEIL!
"Han gikk hjem, og hun ble igjen." Riktig.

Feil 4: Komma etter "men" i stedet for foran.
"Han kom men, han gikk snart." FEIL!
"Han kom, men han gikk snart." Riktig.

Feil 5: Feil ved tiltale.
"Per kom hit!" FEIL!
"Per, kom hit!" Riktig - komma markerer at du snakker til Per.

En nyttig test: Les setningen hoyt. Der du naturlig tar en liten pause, kan det være komma. Men dette er bare en hjelpende hand, ikke en regel - noen pauser er ikke komma.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-8-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hvilken setning har riktig tegnsetting?',
        options: [
          { id: 'a', text: 'Vi kjopte epler, bananer, og appelsiner.', isCorrect: false },
          { id: 'b', text: 'Vi kjopte epler, bananer og appelsiner.', isCorrect: true },
          { id: 'c', text: 'Vi kjopte epler bananer og appelsiner.', isCorrect: false },
          { id: 'd', text: 'Vi kjopte, epler, bananer og appelsiner.', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Pa norsk setter vi IKKE komma foran "og" i oppramsinger. "Vi kjopte epler, bananer og appelsiner." er korrekt.',
      },
    },

    // ========== SEKSJON 3: Kolon og semikolon ==========
    {
      id: 'norsk-vg1-8-5-n-section3',
      type: 'text',
      content: `## Kolon og semikolon - de avanserte tegnene

Kolon (:) introduserer noe. Det sier til leseren: "Na kommer noe viktig som forklarer eller utdyper det jeg nettopp sa."

Kolon brukes for oppramsing: "Jeg trenger: mel, egg og melk."

Kolon brukes for forklaring: "Han forsto én ting: dette var ikke et spill."

Kolon brukes for direkte tale: Hun sa: "Jeg kommer snart."

Kolon brukes i klokkeslett: 14:30

Semikolon (;) er det sjeldne tegnet. Det star mellom selvstendige setninger som hanger nært sammen, men der du vil markere at de horer sammen mer enn vanlige setninger.

"Han var trott; likevel fortsatte han."
"Solen skinte; fuglene sang."

Hovedforskjellen:
- Kolon sier "nemlig" eller "forklaring folger"
- Semikolon sier "og dessuten" eller "i tillegg"

Tips: Er du usikker pa semikolon? Bruk punktum i stedet. Semikolon brukes sjelden i moderne norsk, og det er aldri feil a bruke punktum.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-8-5-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-5-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hvilken setning bruker kolon korrekt?',
        options: [
          { id: 'a', text: 'Han sa: at han ville komme.', isCorrect: false },
          { id: 'b', text: 'Vi trenger: mel, egg og melk.', isCorrect: true },
          { id: 'c', text: 'Resultatet var: klart.', isCorrect: false },
          { id: 'd', text: 'Hun spurte: om jeg ville bli med.', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: '"Vi trenger: mel, egg og melk." bruker kolon korrekt - kolon foran oppramsing. De andre har feil plassering av kolon.',
      },
    },

    // ========== SEKSJON 4: Tankestrek, bindestrek og anforselstegn ==========
    {
      id: 'norsk-vg1-8-5-n-section4',
      type: 'text',
      content: `## De andre tegnene

Tankestrek (–) og bindestrek (-) er forskjellige tegn med forskjellige funksjoner.

Tankestrek er lang og markerer:
- Innskudd: "Mannen – som var ganske hoy – gikk forbi."
- Opphold i setningen: "Han ville si noe, men –"
- Mellom steder/tall: "Toget Oslo–Bergen", "2020–2025"

Bindestrek er kort og binder:
- Sammensatte ord: "IT-avdeling", "New York-tur"
- Tall i ord: "17-aring", "2-etasjes"

Husk: Ingen mellomrom rundt bindestrek, MEN mellomrom rundt tankestrek (ved innskudd).

Anforselstegn («» eller "") markerer:
- Direkte tale: Hun sa: «Jeg kommer snart.»
- Titler pa artikler og dikt: Diktet «Du ma ikke sove»
- Ord brukt ironisk: Han var en «ekspert» pa omradet.

I norsk bruker vi vanligvis «franske anforselstegn», men "engelske" er ogsa akseptert.

Apostrof (') brukes SJELDEN pa norsk:
- Ved genitiv av navn pa s: "Marx' teorier"
- Ved utelatelse i dialog: "ha'kke" (har ikke)

IKKE apostrof ved vanlig genitiv: "Karins bok" (ikke "Karin's bok")!`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-8-5-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-5-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvilken setning bruker tankestrek riktig?',
        options: [
          { id: 'a', text: 'Toget Oslo-Bergen gar kl. 10:00.', isCorrect: false },
          { id: 'b', text: 'Toget Oslo–Bergen gar kl. 10:00.', isCorrect: true },
          { id: 'c', text: 'Toget Oslo - Bergen gar kl. 10:00.', isCorrect: false },
          { id: 'd', text: 'Toget Oslo – Bergen gar kl. 10:00.', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Tankestrek (–) brukes mellom steder uten mellomrom: Oslo–Bergen. Bindestrek (-) er kortere og brukes i sammensatte ord som "IT-avdeling".',
      },
    },

    // ========== SEKSJON 5: Tegnsetting som pavirker mening ==========
    {
      id: 'norsk-vg1-8-5-n-section5',
      type: 'text',
      content: `## Nar tegnsetting forandrer alt

La oss se pa noen eksempler der tegnsetting faktisk endrer meningen:

"Studentene som ikke besto, ma ta eksamen pa nytt."
"Studentene, som ikke besto, ma ta eksamen pa nytt."

I den forste setningen er "som ikke besto" en nodvendig presisering. Bare de studentene som ikke besto ma ta eksamen. Noen besto, noen ikke.

I den andre setningen er "som ikke besto" et innskudd - tilleggsinformasjon. Her besto ingen av studentene, og alle ma ta eksamen pa nytt.

Ett komma forandrer hele bildet.

"Hun likte ikke læreren, sa han."
"Hun likte ikke, læreren sa han."

Forste: Noen (han) sier at hun ikke likte laereren.
Andre: Hun likte ikke det laereren sa om han.

Helt forskjellig mening!

Derfor er tegnsetting sa viktig. Det handler ikke bare om a folge regler - det handler om a kontrollere hva teksten din faktisk sier. Nar du mestrer tegnsetting, mestrer du kommunikasjon.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-8-5-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-5-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom "La oss spise, bestemor!" og "La oss spise bestemor!"?',
        options: [
          { id: 'a', text: 'Ingen forskjell - begge inviterer bestemor til middag', isCorrect: false },
          { id: 'b', text: 'Forste inviterer bestemor til a spise, andre foreslår å spise bestemor', isCorrect: true },
          { id: 'c', text: 'Forste er sporsmål, andre er utrop', isCorrect: false },
          { id: 'd', text: 'Det er bare en stilistisk forskjell', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Kommaet gjor hele forskjellen! Med komma snakker vi TIL bestemor og inviterer henne til a spise. Uten komma er bestemor det vi skal spise. Tegnsetting redder liv!',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-8-5-n-summary',
      type: 'text',
      content: `## Oppsummering: Dine verktoy for tegnsetting

Du har na laert a mestre de viktigste tegnsettingsreglene. Her er hovedpunktene:

**Kommareglene:**
- Komma i oppramsinger (men IKKE foran "og")
- Komma foran leddsetninger
- Komma rundt innskudd
- Komma foran "og/men/eller" med nytt subjekt
- Komma ved tiltale

**Vanlige kommafeil:**
- Aldri komma mellom subjekt og verbal
- Ikke komma foran "og" i oppramsing (norsk ≠ engelsk)
- Husk komma foran "og" med nytt subjekt

**Kolon og semikolon:**
- Kolon innleder (oppramsing, forklaring, sitat)
- Semikolon mellom naert beslektede setninger
- Usikker pa semikolon? Bruk punktum

**Andre tegn:**
- Tankestrek (–): innskudd, steder/tall
- Bindestrek (-): sammensatte ord
- Aldri apostrof i vanlig genitiv ("Karins bok")

**Hovedinnsikt:**
Tegnsetting pavirker mening. Det handler om kommunikasjon, ikke bare regler.

**Tips:** Les teksten hoyt. Der den hakker, mangler kanskje tegn. Der du puster, kan det være komma.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT AV ALLE KAPITLER
// ============================================================================

export const NORSK_VG1_NARRATIV_DEL9_CHAPTERS = [
  CHAPTER_NORSK_VG1_8_1_NARRATIV,
  CHAPTER_NORSK_VG1_8_2_NARRATIV,
  CHAPTER_NORSK_VG1_8_3_NARRATIV,
  CHAPTER_NORSK_VG1_8_4_NARRATIV,
  CHAPTER_NORSK_VG1_8_5_NARRATIV,
];
