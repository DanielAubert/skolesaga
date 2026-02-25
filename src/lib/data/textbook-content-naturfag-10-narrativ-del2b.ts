/**
 * Naturfag 10 - Narrativ versjon DEL 2B
 * Seksjon 2: Kjemi (2.5-2.8)
 *   2.5 Massebevaring og balansering
 *   2.6 Syrer og baser
 *   2.7 Organisk kjemi I – Hydrokarboner og fossile brensler
 *   2.8 Organisk kjemi II – Alkoholer, syrer og andre organiske forbindelser
 *
 * Engasjerende fortellende format optimalisert for lesing/lytting på mobil
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 2.5 NARRATIV: Massebevaring og balansering
// ============================================================================

export const CHAPTER_NATURFAG_10_2_5_NARRATIV: TextbookChapter = {
  id: 'naturfag-10-2-5-narrativ',
  courseId: 'naturfag-10',
  chapterNumber: '2.5',
  title: 'Massebevaring og balansering',
  subtitle: 'Narrativ versjon',
  description:
    'Oppdag hvorfor masse aldri forsvinner i en kjemisk reaksjon, og lær å balansere reaksjonslikninger som en kjemiker – steg for steg.',
  estimatedMinutes: 30,
  competenceGoals: [
    'forklare loven om massebevaring og hva den betyr for kjemiske reaksjoner',
    'balansere enkle og mer komplekse reaksjonslikninger',
    'beregne masser før og etter kjemiske reaksjoner',
  ],
  linkedChapterId: 'naturfag-10-2-5',
  content: [
    {
      id: 'naturfag-10-2-5-n-intro',
      type: 'text',
      content: `## Hvor ble stearinlyset av?

Tenk deg at du tenner et stearinlys en fredagskveld og lar det brenne hele natten. Neste morgen er lyset nesten borte. Det store, flotte stearinlyset er redusert til en liten stump og en klatt smeltet voks. Hvor ble resten av lyset? Forsvant det bare sånn, opp i ingenting?

Det kan virke slik, men svaret er nei. Voksen forsvant ikke. Den ble omdannet til noe annet, nemlig karbondioksid og vanndamp, gasser som steg usynlig opp i luften mens du sov. Hvis du hadde kunnet samle opp absolutt alle gassene som ble dannet, pluss oksygenet fra luften som ble brukt opp, og veid alt sammen, ville du oppdaget noe fantastisk: den totale massen var nøyaktig den samme som da du startet.

Dette er kjernen i en av kjemiens aller viktigste lover, loven om massebevaring. Og i dette kapittelet skal vi utforske hva den betyr, hvorfor atomer aldri forsvinner, og hvordan du kan bruke koeffisienter til å balansere reaksjonslikninger slik at alt stemmer.`,
    },
    {
      id: 'naturfag-10-2-5-n-section1',
      type: 'text',
      content: `## Lavoisier og den store oppdagelsen

På slutten av 1700-tallet satt den franske kjemikeren Antoine Lavoisier i laboratoriet sitt og veide ting. Han veide stoffer før kjemiske reaksjoner, og han veide dem etter. Han var besatt av nøyaktighet. Og uansett hvilken reaksjon han studerte, fant han alltid det samme resultatet: massen før reaksjonen var lik massen etter reaksjonen.

Dette ble til loven om massebevaring, også kalt Lavoisiers lov. Den sier ganske enkelt at i en kjemisk reaksjon forsvinner ikke masse, og ny masse skapes ikke. Total masse før reaksjonen er alltid lik total masse etter reaksjonen.

Men hvorfor er det slik? Svaret ligger i atomene. I en vanlig kjemisk reaksjon kan ikke atomer forsvinne eller oppstå fra ingenting. De bare omorganiseres. Tenk på det som Lego-klosser: du kan plukke fra hverandre en Lego-bil og bygge et Lego-hus av de samme klossene. Antall klosser er det samme før og etter, du har bare satt dem sammen på en ny måte.

La oss ta et konkret eksempel. Når hydrogen reagerer med oksygen og danner vann, har vi 2 H₂ + O₂ → 2 H₂O. Før reaksjonen har vi fire hydrogenatomer og to oksygenatomer. Etter reaksjonen har vi fortsatt fire hydrogenatomer og to oksygenatomer, bare nå er de organisert i to vannmolekyler. Ingen atomer har forsvunnet, ingen har dukket opp fra løse luften. Alt er bevart.

Hvis 12 gram karbon reagerer med 32 gram oksygen, får du 44 gram karbondioksid. Regnestykket er enkelt: 12 + 32 = 44. Masse inn er lik masse ut, hver eneste gang.`,
    },
    {
      id: 'naturfag-10-2-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-2-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på loven om massebevaring:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-2-5-n-quiz1-q0',
            task: 'Hva sier loven om massebevaring?',
            options: [
              { id: 'a', text: 'Masse kan forsvinne i en kjemisk reaksjon', isCorrect: false },
              { id: 'b', text: 'Total masse før en reaksjon er lik total masse etter reaksjonen', isCorrect: true },
              { id: 'c', text: 'Nye atomer skapes i en kjemisk reaksjon', isCorrect: false },
              { id: 'd', text: 'Masse alltid øker i en kjemisk reaksjon', isCorrect: false },
            ],
            solution:
              'Loven om massebevaring sier at masse verken forsvinner eller skapes. Atomene omorganiseres, men den totale massen forblir den samme. Dette ble oppdaget av Antoine Lavoisier på 1700-tallet.',
          },
          {
            id: 'naturfag-10-2-5-n-quiz1-q1',
            task: 'Hva skjer med atomene i en kjemisk reaksjon?',
            options: [
              { id: 'a', text: 'De forsvinner', isCorrect: false },
              { id: 'b', text: 'De deles i mindre deler', isCorrect: false },
              { id: 'c', text: 'De omorganiseres til nye forbindelser', isCorrect: true },
              { id: 'd', text: 'De smelter sammen til større atomer', isCorrect: false },
            ],
            solution:
              'I en kjemisk reaksjon omorganiseres atomene. De bryter gamle bindinger og danner nye med andre atomer, men antall atomer av hvert grunnstoff er det samme før og etter. Atomene bytter bare bindingspartner.',
          },
          {
            id: 'naturfag-10-2-5-n-quiz1-q2',
            task: 'Hvis 12 g karbon reagerer med 32 g oksygen, hvor mange gram karbondioksid dannes?',
            options: [
              { id: 'a', text: '12 g', isCorrect: false },
              { id: 'b', text: '32 g', isCorrect: false },
              { id: 'c', text: '44 g', isCorrect: true },
              { id: 'd', text: '20 g', isCorrect: false },
            ],
            solution:
              'Ifølge loven om massebevaring er masse inn lik masse ut. 12 g + 32 g = 44 g karbondioksid. Ingen masse forsvinner og ingen masse oppstår fra ingenting.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-2-5-n-section2',
      type: 'text',
      content: `## Kunsten å balansere reaksjonslikninger

Nå som du vet at atomer aldri forsvinner, skjønner du kanskje hvorfor vi må ha like mange atomer av hvert grunnstoff på begge sider av en reaksjonslikning. Hvis vi skriver H₂ + O₂ → H₂O, ser vi at noe er galt: vi har to oksygenatomer til venstre, men bare ett til høyre. Det bryter loven om massebevaring.

For å fikse dette bruker vi koeffisienter, altså tall vi setter foran de kjemiske formlene. Koeffisienten ganger hele molekylet. Så 2 H₂O betyr to vannmolekyler, som til sammen inneholder fire hydrogenatomer og to oksygenatomer. Med riktige koeffisienter blir likningen 2 H₂ + O₂ → 2 H₂O, og nå stemmer alt: fire hydrogenatomer og to oksygenatomer på begge sider.

Det finnes en enkel metode for å balansere likninger. Først skriver du opp den ubalanserte likningen med riktige kjemiske formler. Så teller du antall atomer av hvert grunnstoff på begge sider. Deretter balanserer du ett grunnstoff om gangen ved å justere koeffisientene. Start gjerne med det grunnstoffet som forekommer i færrest forbindelser. Til slutt sjekker du at alt stemmer ved å telle alle atomene én gang til.

La oss prøve med forbrenning av metan, CH₄ + O₂ → CO₂ + H₂O. Karbon er allerede balansert med ett atom på hver side. Hydrogen har fire atomer til venstre og to til høyre, så vi setter 2 foran H₂O. Nå har vi fire oksygenatomer til høyre (to i CO₂ pluss to i 2 H₂O), men bare to til venstre. Vi setter 2 foran O₂. Ferdig: CH₄ + 2 O₂ → CO₂ + 2 H₂O. Et viktig poeng: du skal aldri endre indeksene i en kjemisk formel. Indeksene forteller hvilke stoffer vi har. Hvis du endrer H₂O til H₂O₂, har du endret vann til hydrogenperoksid, et helt annet stoff. Bruk bare koeffisienter.`,
    },
    {
      id: 'naturfag-10-2-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-2-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på balansering:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-2-5-n-quiz2-q0',
            task: 'I reaksjonslikningen 2 H₂ + O₂ → 2 H₂O, hva betyr tallet 2 foran H₂O?',
            options: [
              { id: 'a', text: 'Det er 2 oksygenatomer i hvert vannmolekyl', isCorrect: false },
              { id: 'b', text: 'Det dannes 2 vannmolekyler', isCorrect: true },
              { id: 'c', text: 'Vannet har dobbelt så stor masse', isCorrect: false },
              { id: 'd', text: 'Det er 2 hydrogenatomer i vann', isCorrect: false },
            ],
            solution:
              'Tallet foran en kjemisk formel er en koeffisient og forteller hvor mange molekyler som deltar. 2 H₂O betyr to vannmolekyler, som til sammen inneholder fire hydrogenatomer og to oksygenatomer.',
          },
          {
            id: 'naturfag-10-2-5-n-quiz2-q1',
            task: 'Hva er feil å gjøre når man balanserer en reaksjonslikning?',
            options: [
              { id: 'a', text: 'Sette koeffisienter foran formlene', isCorrect: false },
              { id: 'b', text: 'Endre indeksene inne i formlene', isCorrect: true },
              { id: 'c', text: 'Telle atomer på begge sider', isCorrect: false },
              { id: 'd', text: 'Sjekke svaret til slutt', isCorrect: false },
            ],
            solution:
              'Du skal aldri endre indeksene i en kjemisk formel, fordi det endrer stoffet. H₂O er vann, men H₂O₂ er hydrogenperoksid. Du skal kun bruke koeffisienter foran formlene for å balansere.',
          },
          {
            id: 'naturfag-10-2-5-n-quiz2-q2',
            task: 'Hva er den balanserte likningen for N₂ + H₂ → NH₃?',
            options: [
              { id: 'a', text: 'N₂ + 3 H₂ → 2 NH₃', isCorrect: true },
              { id: 'b', text: 'N₂ + H₂ → NH₃', isCorrect: false },
              { id: 'c', text: '2 N₂ + 3 H₂ → 2 NH₃', isCorrect: false },
              { id: 'd', text: 'N₂ + 2 H₂ → 2 NH₃', isCorrect: false },
            ],
            solution:
              'Vi har 2 nitrogenatomer til venstre, så vi trenger 2 NH₃ til høyre. Da får vi 6 hydrogenatomer til høyre, og trenger 3 H₂ til venstre. Sjekk: N = 2 på begge sider, H = 6 på begge sider. Balansert!',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-2-5-n-section3',
      type: 'text',
      content: `## Vanlige feil og masse i praksis

Nå som du kan balansere enkle likninger, la oss se på noen vanlige feller og hvordan massebevaring brukes i praksis.

Den vanligste feilen er å endre indeksene i stedet for å bruke koeffisienter. Husk: indekser forteller hvilket stoff det er, koeffisienter forteller hvor mange. En annen vanlig feil er å glemme å balansere alle grunnstoffene, ikke bare noen av dem. Og bruk alltid hele tall som koeffisienter. Hvis du ender opp med desimaler, gang alle koeffisientene med 2 for å bli kvitt dem.

Massebevaring er ikke bare teori, den er utrolig nyttig i praksis. Tenk deg at du brenner 12 gram magnesium i luft. Du vet at magnesium reagerer med oksygen og danner magnesiumoksid: 2 Mg + O₂ → 2 MgO. Molar masse for Mg er 24 g/mol og for O er 16 g/mol. Du har 12 g Mg, altså 0,5 mol. Fra likningen ser du at 2 mol Mg reagerer med 1 mol O₂, så 0,5 mol Mg reagerer med 0,25 mol O₂. Masse oksygen brukt: 0,25 mol ganger 32 g/mol er lik 8 gram. Masse magnesiumoksid dannet: 12 g pluss 8 g er lik 20 gram. Masse inn er lik masse ut.

Denne typen beregning, der du bruker balanserte likninger til å finne mengder av stoffer, kalles støkiometri. Det er et av de viktigste verktøyene en kjemiker har. Enten du skal finne ut hvor mye oksygen som trengs for å forbrenne en bestemt mengde brensel, eller hvor mye produkt du kan forvente fra en reaksjon, er det balanserte likninger og massebevaring som gir deg svaret.`,
    },
    {
      id: 'naturfag-10-2-5-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-2-5-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på masseberegninger og vanlige feil:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-2-5-n-quiz3-q0',
            task: 'Hva er den balanserte likningen for forbrenning av propan: C₃H₈ + O₂ → CO₂ + H₂O?',
            options: [
              { id: 'a', text: 'C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O', isCorrect: true },
              { id: 'b', text: 'C₃H₈ + O₂ → CO₂ + H₂O', isCorrect: false },
              { id: 'c', text: 'C₃H₈ + 3 O₂ → 3 CO₂ + 4 H₂O', isCorrect: false },
              { id: 'd', text: 'C₃H₈ + 5 O₂ → 3 CO₂ + 2 H₂O', isCorrect: false },
            ],
            solution:
              'Balanser karbon først: 3 CO₂. Så hydrogen: 4 H₂O. Tell oksygen til høyre: 6 + 4 = 10. Trenger 5 O₂ til venstre. Sjekk: C = 3, H = 8, O = 10 på begge sider.',
          },
          {
            id: 'naturfag-10-2-5-n-quiz3-q1',
            task: 'Hvis du brenner 6 g karbon (C + O₂ → CO₂), hvor mye CO₂ dannes? (Molar masse: C = 12, O₂ = 32, CO₂ = 44)',
            options: [
              { id: 'a', text: '6 g', isCorrect: false },
              { id: 'b', text: '16 g', isCorrect: false },
              { id: 'c', text: '22 g', isCorrect: true },
              { id: 'd', text: '44 g', isCorrect: false },
            ],
            solution:
              '6 g karbon er 0,5 mol. Fra likningen gir 1 mol C 1 mol CO₂. Altså 0,5 mol CO₂. Masse: 0,5 ganger 44 = 22 g. Sjekk: 6 g C + 16 g O₂ = 22 g CO₂. Massebevaring bekreftet!',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-2-5-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi lært om en av kjemiens mest grunnleggende lover: loven om massebevaring, oppdaget av Antoine Lavoisier. Den forteller oss at masse verken forsvinner eller skapes i kjemiske reaksjoner. Atomer omorganiseres, men de forsvinner aldri.

Vi har sett hvorfor dette betyr at reaksjonslikninger må balanseres: det må være like mange atomer av hvert grunnstoff på begge sider av pilen. Vi bruker koeffisienter foran de kjemiske formlene for å oppnå dette, og vi endrer aldri indeksene inne i formlene.

Fremgangsmåten er enkel: skriv den ubalanserte likningen, tell atomer, balanser ett grunnstoff om gangen, og sjekk at alt stemmer til slutt. Unngå vanlige feil som å endre indekser, glemme å balansere alle grunnstoff, eller bruke desimaltall.

Til slutt har vi sett hvordan massebevaring brukes i praksis for å beregne masser av reaktanter og produkter. Dette er grunnlaget for støkiometri, et verktøy som kjemikere bruker hver eneste dag.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.6 NARRATIV: Syrer og baser
// ============================================================================

export const CHAPTER_NATURFAG_10_2_6_NARRATIV: TextbookChapter = {
  id: 'naturfag-10-2-6-narrativ',
  courseId: 'naturfag-10',
  chapterNumber: '2.6',
  title: 'Syrer og baser',
  subtitle: 'Narrativ versjon',
  description:
    'Bli med inn i syrer og basers fascinerende verden, fra den sure sitronsaften til den glatte såpen, og oppdag hvorfor pH-verdien i blodet ditt er et spørsmål om liv og død.',
  estimatedMinutes: 35,
  competenceGoals: [
    'forklare hvordan noen stoffer kan endre egenskapene til andre stoffer og gi eksempler på hvordan dette kan utnyttes',
  ],
  linkedChapterId: 'naturfag-10-2-6',
  content: [
    {
      id: 'naturfag-10-2-6-n-intro',
      type: 'text',
      content: `## Hvorfor smaker sitron surt?

Har du noen gang bitt i en sitron? Ansiktet ditt skrukker seg, øynene knipes igjen, og du kjenner det stikkende, sure på tungen. Har du lagt merke til at såpe føles glatt og litt seig mellom fingrene? Og har du sett hva som skjer når du heller eddik over natron i kjøkkenet? Det bobler og bruser som en minivulkan!

Alle disse hverdagsfenomenene handler om det samme: syrer og baser. Disse to gruppene av stoffer er overalt rundt deg, i maten du spiser, i kroppen din, i rengjøringsmidlene under vasken, og til og med i regnet som faller fra himmelen. I dette kapittelet skal vi utforske hva syrer og baser egentlig er, hvordan pH-skalaen fungerer, hva indikatorer kan fortelle oss, og hvorfor det å blande en syre med en base gir en helt spesiell reaksjon.`,
    },
    {
      id: 'naturfag-10-2-6-n-section1',
      type: 'text',
      content: `## Syrer: Stoffene som gir fra seg H⁺

La oss starte med syrene. En syre er et stoff som gir fra seg hydrogenioner, altså H⁺, når det løses i vann. Det er disse H⁺-ionene som gir syrer deres karakteristiske egenskaper: den sure smaken, evnen til å farge blått lakmuspapir rødt, og den etsende virkningen som sterke syrer har.

Du kjenner sikkert mange syrer fra hverdagen uten å vite det. Sitronsyre gir sitrusfrukter den sure smaken. Eddiksyre er det som gjør eddik sur. Karbonsyre er den syren som finnes i brusen din og gir den de prikkende boblene. Melkesyre dannes i musklene dine når du trener hardt.

Men det finnes også sterke, farlige syrer. Saltsyre brukes i industrien og finnes faktisk i magesekken din, der den har en pH på bare 1,5 til 2. Svovelsyre finnes i bilbatterier, og salpetersyre brukes i sprengstoffproduksjon. Disse syrene er sterkt etsende og må behandles med stor forsiktighet.

Forskjellen mellom sterke og svake syrer handler om hvor mye H⁺ de avgir. Saltsyre avgir nesten alle sine H⁺-ioner i vann og er derfor en sterk syre. Eddiksyre avgir bare en liten andel av sine H⁺-ioner og er derfor en svak syre. Men vær oppmerksom: «svak syre» betyr ikke «ufarlig». Konsentrert eddiksyre kan fortsatt etse.`,
    },
    {
      id: 'naturfag-10-2-6-n-section2',
      type: 'text',
      content: `## Baser: Stoffene som tar opp H⁺

Baser er på mange måter syrenes motsetning. En base er et stoff som tar opp hydrogenioner (H⁺) når det løses i vann. Mange baser inneholder hydroksidioner (OH⁻), og det er disse som gir baser deres karakteristiske egenskaper: den såpelignende, glatte følelsen, evnen til å farge rødt lakmuspapir blått, og pH over 7.

Vanlige baser i hverdagen inkluderer ammoniakk, som brukes i rengjøringsmidler, og bakepulver, som er natriumhydrogenkarbonat. Blant de sterke basene finner vi natriumhydroksid, som også kalles lut, og som brukes i såpeproduksjon og avløpsrens. Kalsiumhydroksid brukes i mørtel og til kalking av jord.

Sterke baser er like farlige som sterke syrer. Lut er sterkt etsende og kan gi alvorlige brannskader på huden. Derfor står det advarsler på alle produkter som inneholder sterke baser, som avløpsrens og ovnsrengjøring.`,
    },
    {
      id: 'naturfag-10-2-6-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-2-6-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på syrer og baser:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-2-6-n-quiz1-q0',
            task: 'Hva kjennetegner en syre?',
            options: [
              { id: 'a', text: 'Gir fra seg H⁺-ioner i vann', isCorrect: true },
              { id: 'b', text: 'Tar opp H⁺-ioner i vann', isCorrect: false },
              { id: 'c', text: 'Har pH over 7', isCorrect: false },
              { id: 'd', text: 'Farger lakmus blått', isCorrect: false },
            ],
            solution:
              'En syre gir fra seg H⁺-ioner (hydrogenioner) når den løses i vann. Syrer har pH under 7 og farger blått lakmuspapir rødt. Baser er det motsatte: de tar opp H⁺-ioner og har pH over 7.',
          },
          {
            id: 'naturfag-10-2-6-n-quiz1-q1',
            task: 'Hvilken av disse er en sterk syre?',
            options: [
              { id: 'a', text: 'Sitronsyre i sitron', isCorrect: false },
              { id: 'b', text: 'Eddiksyre i eddik', isCorrect: false },
              { id: 'c', text: 'Saltsyre (HCl)', isCorrect: true },
              { id: 'd', text: 'Karbonsyre i brus', isCorrect: false },
            ],
            solution:
              'Saltsyre (HCl) er en sterk syre fordi den avgir nesten alle sine H⁺-ioner i vann. Sitronsyre, eddiksyre og karbonsyre er svake syrer som bare avgir en liten andel av sine H⁺-ioner.',
          },
          {
            id: 'naturfag-10-2-6-n-quiz1-q2',
            task: 'Hva føles basiske stoffer som?',
            options: [
              { id: 'a', text: 'Ru og tørre', isCorrect: false },
              { id: 'b', text: 'Glatte og såpelignende', isCorrect: true },
              { id: 'c', text: 'Sure på smak', isCorrect: false },
              { id: 'd', text: 'De kan ikke kjennes', isCorrect: false },
            ],
            solution:
              'Basiske stoffer har en karakteristisk glatt, såpelignende følelse. Dette skyldes at basene reagerer med fett i huden og danner en type såpe. Såpe er faktisk selv et basisk stoff med pH rundt 9-10.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-2-6-n-section3',
      type: 'text',
      content: `## pH-skalaen: Et tall som forteller alt

Nå trenger vi en måte å måle nøyaktig hvor surt eller basisk noe er. Til det bruker vi pH-skalaen, som går fra 0 til 14. pH står for «potentia hydrogenii», som betyr hydrogenionkonsentrasjon. Det handler altså om hvor mange H⁺-ioner som finnes i løsningen.

Regelen er enkel: pH under 7 er surt, pH lik 7 er nøytralt (som rent vann), og pH over 7 er basisk. Jo lavere pH, jo surere. Jo høyere pH, jo mer basisk. Magesaft har pH rundt 1,5, sitron har pH 2, kaffe har pH rundt 5, rent vann har pH 7, såpevann har pH 9, ammoniakk har pH 11, og lut kan ha pH opp mot 14.

Men her er noe fascinerende: pH-skalaen er logaritmisk. Det betyr at for hvert steg i pH er forskjellen ti ganger. En løsning med pH 2 er ti ganger surere enn en med pH 3, og hundre ganger surere enn en med pH 4. Magesaften din med pH 1,5 er altså nesten én million ganger surere enn blodet ditt med pH 7,4!

Og det med blodet er faktisk livsviktig. Blodet ditt må holde pH mellom 7,35 og 7,45. Hvis pH faller under 7,35, kalt acidose, fungerer enzymene dårlig og hjertet kan slå uregelmessig. Hvis pH stiger over 7,45, kalt alkalose, kan du få muskelkramper og svimmelhet. Begge tilstandene kan være livstruende. Kroppen har heldigvis buffersystemer, lunger og nyrer som jobber konstant for å holde pH-en stabil.`,
    },
    {
      id: 'naturfag-10-2-6-n-section4',
      type: 'text',
      content: `## Indikatorer og nøytralisering

Men hvordan finner du ut om noe er surt eller basisk i praksis? Her kommer indikatorer inn. En indikator er et stoff som skifter farge avhengig av pH. Lakmuspapir er den mest kjente: blått lakmuspapir blir rødt i sur løsning, og rødt lakmuspapir blir blått i basisk løsning. Huskeregelen er «surt gjør blått til rødt».

BTB, som står for bromtymolblått, er en annen vanlig indikator. Den er gul i sure løsninger, grønn i nøytrale, og blå i basiske. Universalindikator viser et helt regnbue-spekter av farger, fra rød ved lav pH via gul, grønn og blå til fiolett ved høy pH. Du kan til og med lage dine egne indikatorer: rødkål inneholder et stoff som endrer farge fra rød i syre til blå og grønn i base.

Og så har vi nøytralisering, kanskje den mest nyttige reaksjonen i hele syre-base-kjemien. Når en syre og en base blandes, reagerer H⁺-ionene fra syren med OH⁻-ionene fra basen og danner vann. De resterende ionene danner et salt. Den generelle reaksjonen er: Syre + Base → Salt + Vann.

For eksempel: HCl + NaOH → NaCl + H₂O. Saltsyre pluss natriumhydroksid gir natriumklorid, altså vanlig bordsalt, pluss vann. Nøytralisering brukes overalt: svelgetabletter nøytraliserer overskudd av magesyre, bønder kalker sur jord for å heve pH-en, og i industrien nøytraliseres sure avfallsstoffer før utslipp.`,
    },
    {
      id: 'naturfag-10-2-6-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-2-6-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på pH, indikatorer og nøytralisering:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-2-6-n-quiz2-q0',
            task: 'En løsning har pH 10. Hva slags løsning er dette?',
            options: [
              { id: 'a', text: 'Sur', isCorrect: false },
              { id: 'b', text: 'Nøytral', isCorrect: false },
              { id: 'c', text: 'Basisk', isCorrect: true },
              { id: 'd', text: 'Kan ikke avgjøres', isCorrect: false },
            ],
            solution:
              'pH over 7 betyr at løsningen er basisk. pH 10 er en tydelig basisk løsning, omtrent som ammoniakk. Nøytral er pH 7 (rent vann), og surt er alt under pH 7.',
          },
          {
            id: 'naturfag-10-2-6-n-quiz2-q1',
            task: 'Du dypper blått lakmuspapir i en løsning, og det blir rødt. Hva betyr dette?',
            options: [
              { id: 'a', text: 'Løsningen er sur', isCorrect: true },
              { id: 'b', text: 'Løsningen er basisk', isCorrect: false },
              { id: 'c', text: 'Løsningen er nøytral', isCorrect: false },
              { id: 'd', text: 'Løsningen inneholder salt', isCorrect: false },
            ],
            solution:
              'Blått lakmuspapir som blir rødt viser at løsningen er sur. Huskeregelen: «Surt gjør blått til rødt.» I basisk løsning ville rødt lakmus blitt blått, og i nøytral løsning skjer ingen fargeendring.',
          },
          {
            id: 'naturfag-10-2-6-n-quiz2-q2',
            task: 'Hva dannes alltid i en nøytraliseringsreaksjon?',
            options: [
              { id: 'a', text: 'Hydrogen og oksygen', isCorrect: false },
              { id: 'b', text: 'Salt og vann', isCorrect: true },
              { id: 'c', text: 'Karbondioksid og vann', isCorrect: false },
              { id: 'd', text: 'Bare vann', isCorrect: false },
            ],
            solution:
              'I en nøytraliseringsreaksjon reagerer syre + base og danner salt + vann. H⁺ fra syren og OH⁻ fra basen danner vann, mens de øvrige ionene danner saltet. For eksempel: HCl + NaOH → NaCl + H₂O.',
          },
          {
            id: 'naturfag-10-2-6-n-quiz2-q3',
            task: 'Du tilsetter BTB til en løsning, og den blir grønn. Hva forteller dette?',
            options: [
              { id: 'a', text: 'Løsningen er sur', isCorrect: false },
              { id: 'b', text: 'Løsningen er nøytral (pH ca. 7)', isCorrect: true },
              { id: 'c', text: 'Løsningen er basisk', isCorrect: false },
              { id: 'd', text: 'BTB fungerer ikke her', isCorrect: false },
            ],
            solution:
              'BTB (bromtymolblått) er gul i sure løsninger, grønn i nøytrale løsninger (pH ca. 7), og blå i basiske løsninger. Grønn farge betyr altså nøytral.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-2-6-n-section5',
      type: 'text',
      content: `## Syrer og baser i hverdagen og naturen

Syrer og baser finnes bokstavelig talt overalt. I kjøkkenet møter du sitronsyre i sitrusfrukter, eddiksyre i eddik, karbonsyre i brus og melkesyre i yoghurt. I rengjøringsskapet finner du sure kalkfjernere og basiske avløpsrensere. Regelen er at sure rengjøringsmidler løser opp kalk (som er basisk), mens basiske rengjøringsmidler løser opp fett.

I kroppen er syrer og baser livsviktige. Magesekken produserer saltsyre med pH 1,5 til 2, som dreper bakterier i maten og hjelper med fordøyelsen. Blodet holder pH stabilt på 7,4. Spyttet har pH rundt 6,5 til 7,5, litt basisk for å beskytte tennene mot syre fra maten.

Ute i naturen er pH også avgjørende. Naturlig regn er litt surt (pH rundt 5,6) fordi CO₂ i luften løser seg i vannet og danner karbonsyre. Men forurensning fra svovel- og nitrogenoksider kan gjøre regnet enda surere, ned mot pH 4 eller lavere. Denne sure nedbøren kan skade skog, forsure innsjøer og ødelegge kalksteinsmonumenter. Havet har pH rundt 8,1, men den synker gradvis fordi havet tar opp CO₂ fra atmosfæren. Denne havforsuring truer korallrev og skalldyr som trenger kalsiumkarbonat for å bygge skjellene sine.`,
    },
    {
      id: 'naturfag-10-2-6-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket syrer og basers verden. Vi har lært at syrer er stoffer som gir fra seg H⁺-ioner i vann og har pH under 7, mens baser tar opp H⁺-ioner og har pH over 7. Vi kjenner forskjellen mellom sterke syrer som saltsyre og svake syrer som eddiksyre.

Vi har sett hvordan pH-skalaen fungerer, fra 0 til 14, der 7 er nøytralt. Vi vet at skalaen er logaritmisk, slik at hvert steg representerer en tidobling. Vi har lært om indikatorer som lakmus, BTB og universalindikator, som skifter farge avhengig av om en løsning er sur eller basisk.

Vi har forstått nøytralisering, den viktige reaksjonen der syre pluss base gir salt pluss vann, og sett hvordan den brukes i alt fra svelgetabletter til kalking av jord. Og vi har oppdaget at syrer og baser finnes overalt: i maten, i kroppen, i rengjøringsmidler og i naturen, der fenomener som sur nedbør og havforsuring har store konsekvenser for miljøet.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.7 NARRATIV: Organisk kjemi I
// ============================================================================

export const CHAPTER_NATURFAG_10_2_7_NARRATIV: TextbookChapter = {
  id: 'naturfag-10-2-7-narrativ',
  courseId: 'naturfag-10',
  chapterNumber: '2.7',
  title: 'Organisk kjemi I – Hydrokarboner og fossile brensler',
  subtitle: 'Narrativ versjon',
  description:
    'Utforsk karbonets fantastiske evner, lær forskjellen på metan og oktan, og forstå hvorfor fossile brensler både er en velsignelse og en forbannelse for menneskeheten.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske kjemiske reaksjoner, forklare massebevaring og gjøre rede for betydningen av noen forbrenningsreaksjoner',
  ],
  linkedChapterId: 'naturfag-10-2-7',
  content: [
    {
      id: 'naturfag-10-2-7-n-intro',
      type: 'text',
      content: `## Hva har plast, bensin og DNA til felles?

Hva har plastposen i skuffen din, bensinen i bilen, maten du spiser til frokost og selve DNA-et i cellene dine til felles? Svaret er et enkelt, upretensiøst grunnstoff med bare seks protoner i kjernen: karbon.

Karbon er kanskje det mest fantastiske av alle grunnstoffene. Det danner grunnlaget for alt levende, for drivstoffet som driver sivilisasjonen vår, og for materialene vi omgir oss med. Studiet av karbonforbindelser kalles organisk kjemi, og det er et enormt felt med over 10 millioner kjente forbindelser, langt flere enn alle uorganiske forbindelser til sammen.

I dette kapittelet skal vi utforske hva som gjør karbon så spesielt, lære om de enkleste karbonforbindelsene som kalles hydrokarboner, forstå hvordan fossile brensler ble dannet og brukes, og se hva som skjer når vi brenner dem.`,
    },
    {
      id: 'naturfag-10-2-7-n-section1',
      type: 'text',
      content: `## Karbon – Lego-klossen blant grunnstoffene

Karbon har atomnummer 6, og det betyr at det har fire valenselektroner. Fire! Det høres kanskje ikke ut som noe spesielt, men det er nettopp dette tallet som gjør karbon så enestående. Hvert karbonatom kan danne fire kovalente bindinger med andre atomer. Tenk på karbon som en Lego-kloss med fire knotter. Den kan koble seg til fire andre klosser samtidig.

Dette gjør at karbonatomer kan danne lange kjeder med hundrevis av atomer, de kan lage forgreinede strukturer med sidegrener, de kan binde seg sammen i ringer, og de kan danne enkelt-, dobbelt- og trippelbindinger. Ingen andre grunnstoffer kan gjøre alt dette like godt. Det er derfor det finnes så utrolig mange forskjellige karbonforbindelser.

Navnet «organisk kjemi» kommer av at man opprinnelig trodde disse stoffene bare kunne lages av levende organismer. Men i 1828 klarte den tyske kjemikeren Friedrich Wöhler å lage urea, et organisk stoff, fra helt uorganiske utgangsstoffer i laboratoriet. Myten ble knust, men navnet ble hengende igjen.

De fleste organiske forbindelser inneholder karbon bundet til hydrogen, og mange inneholder også oksygen, nitrogen eller svovel. Men noen enkle karbonforbindelser regnes som uorganiske: karbondioksid (CO₂), karbonmonoksid (CO) og karbonater som kalsiumkarbonat (CaCO₃). En god huskeregel er at stoffer med C-H-bindinger nesten alltid er organiske.`,
    },
    {
      id: 'naturfag-10-2-7-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-2-7-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på organisk kjemi og karbon:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-2-7-n-quiz1-q0',
            task: 'Hva mener vi med organisk kjemi?',
            options: [
              { id: 'a', text: 'Kjemi som handler om forbindelser som inneholder karbon', isCorrect: true },
              { id: 'b', text: 'Kjemi som bare handler om stoffer fra levende organismer', isCorrect: false },
              { id: 'c', text: 'Kjemi som handler om metalliske grunnstoffer', isCorrect: false },
              { id: 'd', text: 'Kjemi som handler om syrer og baser', isCorrect: false },
            ],
            solution:
              'Organisk kjemi handler om forbindelser som inneholder karbon. Opprinnelig trodde man at disse bare kunne komme fra levende organismer, men Wöhler motbeviste dette i 1828. Det finnes over 10 millioner kjente organiske forbindelser.',
          },
          {
            id: 'naturfag-10-2-7-n-quiz1-q1',
            task: 'Hvorfor er karbon et så spesielt grunnstoff?',
            options: [
              { id: 'a', text: 'Det er det tyngste grunnstoffet', isCorrect: false },
              { id: 'b', text: 'Det har 4 valenselektroner og kan danne 4 bindinger, noe som gir enorm variasjon', isCorrect: true },
              { id: 'c', text: 'Det er det sjeldneste grunnstoffet på jorden', isCorrect: false },
              { id: 'd', text: 'Det kan bare finnes i levende organismer', isCorrect: false },
            ],
            solution:
              'Karbon har 4 valenselektroner og kan danne 4 kovalente bindinger. Dette gjør at karbon kan lage lange kjeder, forgreininger, ringer, og enkelt-, dobbelt- og trippelbindinger. Resultatet er over 10 millioner kjente karbonforbindelser.',
          },
          {
            id: 'naturfag-10-2-7-n-quiz1-q2',
            task: 'Hvilket av disse stoffene er uorganisk, selv om det inneholder karbon?',
            options: [
              { id: 'a', text: 'Metan (CH₄)', isCorrect: false },
              { id: 'b', text: 'Etanol (C₂H₅OH)', isCorrect: false },
              { id: 'c', text: 'Karbondioksid (CO₂)', isCorrect: true },
              { id: 'd', text: 'Glukose (C₆H₁₂O₆)', isCorrect: false },
            ],
            solution:
              'Karbondioksid (CO₂) regnes som uorganisk selv om det inneholder karbon, fordi det er en enkel karbonforbindelse uten C-H-bindinger. Andre unntak er CO, karbonater og karbider.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-2-7-n-section2',
      type: 'text',
      content: `## Alkaner, alkener og alkyner – hydrokarbon-familien

De enkleste organiske forbindelsene er hydrokarboner, stoffer som bare inneholder karbon og hydrogen. De deles inn i tre hovedgrupper basert på bindingene mellom karbonatomene.

Alkanene har bare enkeltbindinger (C-C) og kalles mettede hydrokarboner fordi hvert karbonatom er bundet til så mange hydrogenatomer som mulig. Den generelle formelen er CₙH₂ₙ₊₂. Alkanene danner en homolog rekke, der hvert neste ledd har en ekstra CH₂-gruppe. De åtte første er metan (CH₄), etan (C₂H₆), propan (C₃H₈), butan (C₄H₁₀), pentan (C₅H₁₂), heksan (C₆H₁₄), heptan (C₇H₁₆) og oktan (C₈H₁₈). Navneprefiksene met-, et-, prop-, but-, pent-, heks-, hept- og okt- angir antall karbonatomer, og endelsen -an forteller at det er et alkan.

Alkenene har minst én dobbeltbinding (C=C) og kalles umettede hydrokarboner. Formelen for alkener med én dobbeltbinding er CₙH₂ₙ, og endelsen er -en. Eten (C₂H₄) er det enkleste alkenet og brukes til å lage plast. Alkyner har minst én trippelbinding (C≡C), med formelen CₙH₂ₙ₋₂ og endelsen -yn. Etyn (C₂H₂), kjent som acetylen, brukes i sveising.

Umettede hydrokarboner er mer reaktive enn mettede fordi dobbelt- og trippelbindingene inneholder ekstra elektronpar som er lettere tilgjengelige for reaksjoner. Når eten reagerer med hydrogen, brytes dobbeltbindingen og hydrogen legges til: C₂H₄ + H₂ → C₂H₆. Eten (alken) blir til etan (alkan). Denne typen reaksjon kalles en addisjonsreaksjon.`,
    },
    {
      id: 'naturfag-10-2-7-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-2-7-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på hydrokarboner:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-2-7-n-quiz2-q0',
            task: 'Hva er den generelle formelen for alkaner?',
            options: [
              { id: 'a', text: 'CₙH₂ₙ', isCorrect: false },
              { id: 'b', text: 'CₙH₂ₙ₊₂', isCorrect: true },
              { id: 'c', text: 'CₙH₂ₙ₋₂', isCorrect: false },
              { id: 'd', text: 'CₙHₙ', isCorrect: false },
            ],
            solution:
              'Alkaner har formelen CₙH₂ₙ₊₂. Sjekk med eksempler: metan (n=1) gir CH₄, etan (n=2) gir C₂H₆, propan (n=3) gir C₃H₈. CₙH₂ₙ er for alkener, CₙH₂ₙ₋₂ er for alkyner.',
          },
          {
            id: 'naturfag-10-2-7-n-quiz2-q1',
            task: 'Hva kjennetegner et umettet hydrokarbon?',
            options: [
              { id: 'a', text: 'Det har bare enkeltbindinger mellom karbonatomene', isCorrect: false },
              { id: 'b', text: 'Det har minst én dobbeltbinding eller trippelbinding', isCorrect: true },
              { id: 'c', text: 'Det inneholder oksygen', isCorrect: false },
              { id: 'd', text: 'Det har alltid mer enn 8 karbonatomer', isCorrect: false },
            ],
            solution:
              'Umettede hydrokarboner har dobbelt- eller trippelbindinger mellom karbonatomer. Alkener har dobbeltbindinger (C=C) og alkyner har trippelbindinger (C≡C). Mettede hydrokarboner (alkaner) har bare enkeltbindinger.',
          },
          {
            id: 'naturfag-10-2-7-n-quiz2-q2',
            task: 'Hvorfor har metan (CH₄) lavere kokepunkt enn oktan (C₈H₁₈)?',
            options: [
              { id: 'a', text: 'Fordi metan er lettere', isCorrect: false },
              { id: 'b', text: 'Fordi metan har færre atomer og svakere Van der Waals-krefter mellom molekylene', isCorrect: true },
              { id: 'c', text: 'Fordi metan inneholder mer hydrogen', isCorrect: false },
              { id: 'd', text: 'Fordi metan har dobbeltbindinger', isCorrect: false },
            ],
            solution:
              'Metan er et lite molekyl med svake Van der Waals-krefter, så lite energi trengs for å gjøre det til gass (kokepunkt -162 °C). Oktan er mye større med sterkere krefter, så kokepunktet er høyere (126 °C). Jo lengre karbonkjede, jo sterkere krefter, jo høyere kokepunkt.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-2-7-n-section3',
      type: 'text',
      content: `## Fossile brensler – millioner av år med lagret solenergi

For tre hundre til fire hundre millioner år siden vokste det planter og alger i enorme mengder på jorden. Når de døde, ble restene dekket av sand og leire. Over millioner av år ble lagene presset stadig dypere ned i jordskorpen, der høyt trykk og temperatur langsomt omdannet de organiske restene til hydrokarboner. Resultatet ble det vi kaller fossile brensler: naturgass, råolje og kull.

Naturgass består hovedsakelig av metan (CH₄) og finnes i lommer i berggrunn, ofte sammen med olje. Norge er en stor produsent av naturgass fra Nordsjøen. Råolje er en kompleks blanding av hundrevis av forskjellige hydrokarboner med ulik kjedelivet. I et raffineri separeres råoljen i et destillasjonstårn der de ulike komponentene skilles etter kokepunkt: gass (C₁-C₄) stiger øverst, bensin (C₅-C₁₂) samles i midten, diesel (C₁₅-C₂₀) lenger ned, og asfalt (C₃₅+) forblir i bunnen. Kull er det mest karbonrike fossile brenselet og gir mest CO₂ per energienhet.

Fossile brensler dekker rundt 80 prosent av verdens energibehov. De har høy energitetthet, godt utbygd infrastruktur og er pålitelige. Men de har alvorlige ulemper. De er ikke-fornybare, de tar millioner av år å danne, og forbrenning av dem frigjør CO₂ som driver klimaendringer. I tillegg gir de luftforurensning, og ulykker med olje kan ødelegge marine økosystemer.`,
    },
    {
      id: 'naturfag-10-2-7-n-section4',
      type: 'text',
      content: `## Forbrenning – å frigjøre lagret solenergi

Når vi brenner fossile brensler, frigjør vi energi som opprinnelig kom fra solen for millioner av år siden. Planter fanget solenergien gjennom fotosyntese og lagret den i karbon-hydrogenbindinger. Forbrenning er rett og slett det motsatte av fotosyntese.

Ved fullstendig forbrenning, altså når det er nok oksygen, reagerer hydrokarboner med O₂ og danner karbondioksid (CO₂) og vann (H₂O). Metan brenner slik: CH₄ + 2 O₂ → CO₂ + 2 H₂O. Propan brenner slik: C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O. En blå flamme er tegn på fullstendig forbrenning.

Men ved ufullstendig forbrenning, når det er for lite oksygen, dannes farlige biprodukter. I stedet for CO₂ kan det dannes karbonmonoksid (CO) eller sot (rent karbon). Karbonmonoksid er en fargeløs, luktfri gass som binder seg til hemoglobin i blodet 200 ganger sterkere enn oksygen. Den blokkerer oksygentransporten og kan i høye konsentrasjoner være dødelig. En gul eller oransje flamme, svart røyk og sotdannelse er tegn på ufullstendig forbrenning.

For å balansere forbrenningslikninger starter du med karbon, så hydrogen, og til slutt oksygen. Og husk: loven om massebevaring gjelder alltid. Like mange atomer av hvert grunnstoff på begge sider av pilen.`,
    },
    {
      id: 'naturfag-10-2-7-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-2-7-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på fossile brensler og forbrenning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-2-7-n-quiz3-q0',
            task: 'Hvilken påstand om fossile brensler er riktig?',
            options: [
              { id: 'a', text: 'Fossile brensler er fornybare energikilder', isCorrect: false },
              { id: 'b', text: 'Fossile brensler er dannet av rester av planter og dyr over millioner av år', isCorrect: true },
              { id: 'c', text: 'Naturgass består hovedsakelig av oktan', isCorrect: false },
              { id: 'd', text: 'Kull gir mindre CO₂ enn naturgass per energienhet', isCorrect: false },
            ],
            solution:
              'Fossile brensler er dannet av organisk materiale under høyt trykk og temperatur over millioner av år. De er ikke-fornybare. Naturgass består av metan (ikke oktan), og kull gir mest CO₂ per energienhet.',
          },
          {
            id: 'naturfag-10-2-7-n-quiz3-q1',
            task: 'Hva er produktene ved fullstendig forbrenning av et hydrokarbon?',
            options: [
              { id: 'a', text: 'Karbonmonoksid (CO) og vann (H₂O)', isCorrect: false },
              { id: 'b', text: 'Karbondioksid (CO₂) og vann (H₂O)', isCorrect: true },
              { id: 'c', text: 'Karbon (C) og hydrogen (H₂)', isCorrect: false },
              { id: 'd', text: 'Karbondioksid (CO₂) og hydrogen (H₂)', isCorrect: false },
            ],
            solution:
              'Ved fullstendig forbrenning (nok oksygen) gir hydrokarboner alltid CO₂ og H₂O. Karbonmonoksid (CO) og sot (C) dannes bare ved ufullstendig forbrenning, altså når det er for lite oksygen.',
          },
          {
            id: 'naturfag-10-2-7-n-quiz3-q2',
            task: 'Hvorfor er karbonmonoksid (CO) farlig?',
            options: [
              { id: 'a', text: 'Fordi den lukter vondt', isCorrect: false },
              { id: 'b', text: 'Fordi den er brennbar og eksploderer', isCorrect: false },
              { id: 'c', text: 'Fordi den binder seg til hemoglobin og blokkerer oksygentransport i blodet', isCorrect: true },
              { id: 'd', text: 'Fordi den er sur og etser lungene', isCorrect: false },
            ],
            solution:
              'Karbonmonoksid er fargeløs og luktfri, men binder seg til hemoglobin 200 ganger sterkere enn oksygen. Den blokkerer oksygentransporten og kan gi hodepine, svimmelhet og i alvorlige tilfeller være dødelig.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-2-7-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket organisk kjemi, vitenskapen om karbonforbindelser. Vi har sett at karbons fire valenselektroner gir det en unik evne til å danne en enorm variasjon av molekyler.

Vi har lært om hydrokarboner: alkaner (bare enkeltbindinger, CₙH₂ₙ₊₂, ending -an), alkener (dobbeltbindinger, CₙH₂ₙ, ending -en) og alkyner (trippelbindinger, CₙH₂ₙ₋₂, ending -yn). De åtte første alkanene er metan, etan, propan, butan, pentan, heksan, heptan og oktan. Kokepunktet øker med kjedelivet fordi større molekyler har sterkere Van der Waals-krefter.

Vi har sett at fossile brensler, naturgass, råolje og kull, er dannet av organiske rester over millioner av år og er ikke-fornybare. Råolje separeres ved destillasjon etter kokepunkt.

Vi har forstått forskjellen mellom fullstendig forbrenning (nok O₂, gir CO₂ og H₂O) og ufullstendig forbrenning (for lite O₂, gir CO og/eller sot). Karbonmonoksid er en farlig, usynlig gass som blokkerer oksygentransporten i blodet. Og gjennom alt dette gjelder loven om massebevaring: like mange atomer av hvert grunnstoff på begge sider av reaksjonspilen.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.8 NARRATIV: Organisk kjemi II
// ============================================================================

export const CHAPTER_NATURFAG_10_2_8_NARRATIV: TextbookChapter = {
  id: 'naturfag-10-2-8-narrativ',
  courseId: 'naturfag-10',
  chapterNumber: '2.8',
  title: 'Organisk kjemi II – Alkoholer, syrer og andre organiske forbindelser',
  subtitle: 'Narrativ versjon',
  description:
    'Fra håndsprit til bananlukt og plastposer – oppdag hvordan funksjonelle grupper gir organiske stoffer helt ulike egenskaper, og forstå de biologiske molekylene som holder deg i live.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske kjemiske reaksjoner, forklare massebevaring og gjøre rede for betydningen av noen forbrenningsreaksjoner',
  ],
  linkedChapterId: 'naturfag-10-2-8',
  content: [
    {
      id: 'naturfag-10-2-8-n-intro',
      type: 'text',
      content: `## En OH-gruppe som forandrer alt

Tenk deg at du holder et molekyl av etan i den ene hånden, en fargeløs gass som koker ved minus 89 grader og nesten ikke reagerer med noe. Nå bytter du ut ett av hydrogenatomene med en liten gruppe bestående av ett oksygenatom og ett hydrogenatom, en OH-gruppe. Plutselig har du noe helt annet: etanol, en væske som koker ved 78 grader, som kan blandes med vann, som dreper bakterier, og som vi bruker i alt fra håndsprit til vin.

Hvordan kan en så liten endring gi så drastiske forskjeller? Svaret ligger i noe som kalles funksjonelle grupper. En funksjonell gruppe er en bestemt gruppe atomer i et organisk molekyl som gir det sine spesielle egenskaper. Den er som en etikett som forteller deg hva slags stoff det er og hvordan det oppfører seg. I dette kapittelet skal vi utforske de viktigste funksjonelle gruppene: hydroksylgruppen i alkoholer, karboksylgruppen i organiske syrer, og estergruppen som gir frukt den deilige lukten. Vi skal også se på de store biologiske molekylene, karbohydrater, fett og proteiner, og oppdage at polymerer finnes overalt, fra plastposen til DNA-et ditt.`,
    },
    {
      id: 'naturfag-10-2-8-n-section1',
      type: 'text',
      content: `## Alkoholer – OH-gruppens kraft

Alkoholer er organiske forbindelser der ett eller flere hydrogenatomer i et hydrokarbon er byttet ut med en hydroksylgruppe (-OH). Navnsettingen er enkel: du tar stamnavnet fra hydrokarbonkjeden og legger til endelsen -ol. Metanol har ett karbon, etanol har to, propanol har tre, og butanol har fire.

Men hva gjør OH-gruppen så spesiell? Nøkkelen er hydrogenbindinger. Oksygenatomet i OH-gruppen er sterkt elektronegativt, det tiltrekker seg elektronene i bindingen og skaper en ujevn ladningsfordeling. Dette gjør at OH-gruppen på ett molekyl kan danne en sterk tiltrekningskraft, en hydrogenbinding, med OH-gruppen på nabomolekylet. Resultatet er at alkoholer har mye høyere kokepunkt enn hydrokarboner av tilsvarende størrelse. Etan koker ved minus 89 grader, men etanol koker ved pluss 78 grader, en forskjell på 167 grader!

OH-gruppen gjør også at små alkoholer er løselige i vann, fordi OH-gruppen kan danne hydrogenbindinger med vannmolekylene. Men jo lengre karbonkjeden er, desto mer dominerer den upolare delen, og alkoholen blir mindre vannløselig.

Blant de vanligste alkoholene er metanol, som er svært giftig og kan forårsake blindhet og død, og etanol, som vi kjenner som «alkohol» i desinfeksjonsmiddel og drikkevarer. Etanol brukes også som biodrivstoff. Glyserol har tre OH-grupper og brukes i hudkrem, såpe og som en viktig del av fettmolekyler.`,
    },
    {
      id: 'naturfag-10-2-8-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-2-8-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på funksjonelle grupper og alkoholer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-2-8-n-quiz1-q0',
            task: 'Hva er en funksjonell gruppe?',
            options: [
              { id: 'a', text: 'Et helt karbonmolekyl', isCorrect: false },
              { id: 'b', text: 'En bestemt gruppe atomer som gir et organisk molekyl sine spesielle egenskaper', isCorrect: true },
              { id: 'c', text: 'Et annet navn for en kovalent binding', isCorrect: false },
              { id: 'd', text: 'En blanding av to grunnstoffer', isCorrect: false },
            ],
            solution:
              'En funksjonell gruppe er en bestemt gruppe atomer i et organisk molekyl som bestemmer stoffets egenskaper. OH-gruppen gjør et stoff til alkohol, COOH-gruppen gjør det til karboksylsyre. Den funksjonelle gruppen er molekylets «identitet».',
          },
          {
            id: 'naturfag-10-2-8-n-quiz1-q1',
            task: 'Hvorfor har etanol (78 °C) mye høyere kokepunkt enn etan (-89 °C)?',
            options: [
              { id: 'a', text: 'Fordi etanol har flere karbonatomer', isCorrect: false },
              { id: 'b', text: 'Fordi OH-gruppen danner hydrogenbindinger mellom molekylene', isCorrect: true },
              { id: 'c', text: 'Fordi etanol er tyngre', isCorrect: false },
              { id: 'd', text: 'Fordi oksygen er et tungt atom', isCorrect: false },
            ],
            solution:
              'OH-gruppen i etanol danner hydrogenbindinger mellom molekylene, som er mye sterkere enn de svake Van der Waals-kreftene mellom etan-molekyler. Sterkere intermolekylære krefter betyr høyere kokepunkt.',
          },
          {
            id: 'naturfag-10-2-8-n-quiz1-q2',
            task: 'Hvilken stoffklasse tilhører CH₃COOH?',
            options: [
              { id: 'a', text: 'Alkan', isCorrect: false },
              { id: 'b', text: 'Alkohol', isCorrect: false },
              { id: 'c', text: 'Karboksylsyre', isCorrect: true },
              { id: 'd', text: 'Ester', isCorrect: false },
            ],
            solution:
              'CH₃COOH inneholder en COOH-gruppe (karboksylgruppe), som gjør det til en karboksylsyre. Dette er eddiksyre, også kalt etansyre. Alkoholer har OH-gruppen, og alkaner har ingen funksjonell gruppe.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-2-8-n-section2',
      type: 'text',
      content: `## Karboksylsyrer og estere – fra eddiklukt til bananduft

Karboksylsyrer er organiske forbindelser med en karboksylgruppe (-COOH). Denne gruppen inneholder et karbonylatom dobbeltbundet til oksygen (C=O) og en hydroksylgruppe (O-H). Det er H-atomet i COOH som kan avgis som H⁺, og det er dette som gjør stoffet surt. Karboksylsyrer er svake syrer, de avgir bare en liten del av sine H⁺-ioner.

Du kjenner mange karboksylsyrer fra hverdagen. Maursyre (metansyre, HCOOH) finnes i maurstikk og brennesle, det er den som gjør at det svir. Eddiksyre (etansyre, CH₃COOH) gir eddik den sure smaken og skarpe lukten. Smørsyre (butansyre) dannes når smør harskner og har en forferdelig lukt. Sitronsyre finnes i sitrusfrukter og gir dem den friske, sure smaken.

Og nå kommer noe fascinerende: hvis du lar en karboksylsyre reagere med en alkohol, får du en ester og vann. Denne reaksjonen kalles esterifisering. Eddiksyre pluss etanol gir etylacetat pluss vann: CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O.

Det utrolige er at estere ofte har behagelig, fruktig lukt, selv når utgangsstoffene lukter forferdelig. Smørsyre stinker, men esteren etylbutanoat, laget av smørsyre og etanol, lukter ananas! Pentylacetat lukter banan, oktylacetat lukter appelsin, og metylbutanoat lukter eple. Det er faktisk estere som er ansvarlige for mye av den deilige lukten i moden frukt. Estere brukes også som aromastoffer i mat, i parfyme, og som løsemidler i neglelakkfjerner.`,
    },
    {
      id: 'naturfag-10-2-8-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-2-8-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på karboksylsyrer og estere:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-2-8-n-quiz2-q0',
            task: 'Hvilken funksjonell gruppe kjennetegner karboksylsyrer?',
            options: [
              { id: 'a', text: '-OH (hydroksylgruppe)', isCorrect: false },
              { id: 'b', text: '-COOH (karboksylgruppe)', isCorrect: true },
              { id: 'c', text: '-NH₂ (aminogruppe)', isCorrect: false },
              { id: 'd', text: '-CHO (aldehydgruppe)', isCorrect: false },
            ],
            solution:
              'Karboksylsyrer kjennetegnes av COOH-gruppen (karboksylgruppen). Det er H-atomet i denne gruppen som kan avgis som H⁺ og gjør stoffet surt. OH-gruppen finnes i alkoholer, og NH₂-gruppen finnes i aminosyrer.',
          },
          {
            id: 'naturfag-10-2-8-n-quiz2-q1',
            task: 'Hva dannes når en karboksylsyre reagerer med en alkohol?',
            options: [
              { id: 'a', text: 'Et salt og vann', isCorrect: false },
              { id: 'b', text: 'En ester og vann', isCorrect: true },
              { id: 'c', text: 'Et alkan og CO₂', isCorrect: false },
              { id: 'd', text: 'En base og hydrogen', isCorrect: false },
            ],
            solution:
              'Karboksylsyre + alkohol gir ester + vann. Denne reaksjonen kalles esterifisering. Merk forskjellen fra nøytralisering: syre + base gir salt + vann. Begge gir vann, men det andre produktet er forskjellig.',
          },
          {
            id: 'naturfag-10-2-8-n-quiz2-q2',
            task: 'Hvorfor har mange estere behagelig lukt, selv om utgangsstoffene kan lukte vondt?',
            options: [
              { id: 'a', text: 'Fordi estere inneholder mer karbon', isCorrect: false },
              { id: 'b', text: 'Fordi den funksjonelle gruppen endres fra COOH til COO, noe som gir helt andre egenskaper', isCorrect: true },
              { id: 'c', text: 'Fordi estere er lettere enn syrene', isCorrect: false },
              { id: 'd', text: 'Fordi luktmolekylene ødelegges i reaksjonen', isCorrect: false },
            ],
            solution:
              'Når COOH-gruppen i syren omdannes til COO-estergruppen, endres egenskapene dramatisk. Estergruppen er mindre polar, kan ikke danne like sterke hydrogenbindinger, og har helt annen lukt. Det er den funksjonelle gruppen som bestemmer egenskapene.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-2-8-n-section3',
      type: 'text',
      content: `## Karbohydrater, fett og proteiner – livets byggesteiner

Organisk kjemi handler ikke bare om kjemikalier i et laboratorium. De viktigste organiske stoffene finnes i kroppen din og i maten du spiser. La oss se på de tre makronæringsstoffene.

Karbohydrater er kroppens foretrukne energikilde. De inneholder karbon, hydrogen og oksygen, vanligvis i forholdet 1:2:1, derav navnet «karbo-hydrat» (karbon pluss vann). De enkleste karbohydratene er monosakkarider som glukose (druesukker) og fruktose (fruktsukker). To monosakkarider bundet sammen gir et disakkarid, som sukrose (vanlig sukker) eller laktose (melkesukker). Mange monosakkarider bundet i lange kjeder gir polysakkarider som stivelse (energilager i planter), glykogen (energilager i muskler og lever) og cellulose (plantefiber som vi ikke kan fordøye). Når kroppen forbrenner glukose, frigjøres energi: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + energi. Denne reaksjonen, celleånding, er det motsatte av fotosyntese.

Fett er estere av glyserol (en alkohol med tre OH-grupper) og tre fettsyrer (lange karboksylsyrer). Mettede fettsyrer har bare enkeltbindinger og er faste ved romtemperatur (som i smør), mens umettede har dobbeltbindinger og er flytende (som i olivenolje). Fett gir 38 kJ per gram, mer enn dobbelt så mye som karbohydrater (17 kJ/g). Fett fungerer som energilager, isolasjon, beskyttelse rundt organer og byggemateriale i cellemembraner.

Proteiner er lange kjeder av aminosyrer bundet sammen med peptidbindinger. Det finnes 20 forskjellige aminosyrer, og rekkefølgen bestemmer proteinets egenskaper. DNA-et ditt inneholder oppskriften. Proteiner fungerer som enzymer, byggemateriale (muskler, hud, hår), transportmolekyler (hemoglobin), antistoffer og hormoner (insulin).`,
    },
    {
      id: 'naturfag-10-2-8-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-2-8-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på biologiske makromolekyler:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-2-8-n-quiz3-q0',
            task: 'Hvilket av disse er et polysakkarid?',
            options: [
              { id: 'a', text: 'Glukose', isCorrect: false },
              { id: 'b', text: 'Sukrose', isCorrect: false },
              { id: 'c', text: 'Stivelse', isCorrect: true },
              { id: 'd', text: 'Fruktose', isCorrect: false },
            ],
            solution:
              'Stivelse er et polysakkarid, en lang kjede av mange hundre glukose-enheter. Glukose og fruktose er monosakkarider (enkle sukkerarter), og sukrose er et disakkarid (to monosakkarider bundet sammen).',
          },
          {
            id: 'naturfag-10-2-8-n-quiz3-q1',
            task: 'Hva er proteiner bygd opp av?',
            options: [
              { id: 'a', text: 'Glukose-enheter', isCorrect: false },
              { id: 'b', text: 'Fettsyrer og glyserol', isCorrect: false },
              { id: 'c', text: 'Aminosyrer', isCorrect: true },
              { id: 'd', text: 'Nukleotider', isCorrect: false },
            ],
            solution:
              'Proteiner er bygd opp av aminosyrer bundet sammen med peptidbindinger. Det finnes 20 forskjellige aminosyrer. Karbohydrater er bygd av monosakkarider, fett av glyserol og fettsyrer, og DNA av nukleotider.',
          },
          {
            id: 'naturfag-10-2-8-n-quiz3-q2',
            task: 'Hvilket makronæringsstoff gir mest energi per gram?',
            options: [
              { id: 'a', text: 'Karbohydrater', isCorrect: false },
              { id: 'b', text: 'Proteiner', isCorrect: false },
              { id: 'c', text: 'Fett', isCorrect: true },
              { id: 'd', text: 'Alle gir like mye', isCorrect: false },
            ],
            solution:
              'Fett gir 38 kJ per gram, som er mer enn dobbelt så mye som karbohydrater (17 kJ/g) og proteiner (17 kJ/g). Derfor er fett kroppens mest effektive energilager.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-2-8-n-section4',
      type: 'text',
      content: `## Polymerer – fra plastpose til DNA

Polymerer er store molekyler bygd opp av mange like eller lignende små enheter, kalt monomere, som er koblet sammen i lange kjeder. Ordet polymer kommer fra gresk: poly betyr mange, og mer betyr del.

Syntetiske polymerer, altså plast, lages vanligvis av monomere fra råolje. Polyeten er verdens mest produserte plast og brukes i plastposer og flasker. Den lages fra monomeren eten (C₂H₄): dobbeltbindingen brytes, og tusenvis av eten-molekyler kobles sammen til en lang kjede. Polypropen brukes i matbokser og tau. PVC brukes i rør og vindusrammer. Polystyren kan skummes til isopor.

Men polymerer finnes ikke bare i plast. Naturen har sine egne polymerer: cellulose (i planteceller og tre), stivelse (i poteter og ris), proteiner (i muskler og enzymer) og DNA (arvematerialet). Forskjellen er at naturlige polymerer kan brytes ned av mikroorganismer, mens syntetiske polymerer vanligvis ikke kan det.

Og det er nettopp der problemet ligger. Plast har revolusjonert hverdagen vår, men den brytes ikke ned naturlig. En plastpose kan ligge i naturen i hundrevis av år. Plast brytes gradvis ned til bittesmå biter kalt mikroplast (under 5 mm), som nå finnes overalt: i havet, i jord, i drikkevann og til og med i blodet vårt. Millioner av tonn plast havner i havet hvert år og truer marine økosystemer.

Løsningene inkluderer resirkulering, redusert forbruk av engangsplast, utvikling av bioplast laget av fornybare råstoffer, biologisk nedbrytbar plast, og opprydding i naturen. Norges pantesystem for plastflasker er et godt eksempel på at det er mulig å gjøre noe med problemet.`,
    },
    {
      id: 'naturfag-10-2-8-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-2-8-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på polymerer og miljø:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-2-8-n-quiz4-q0',
            task: 'Hva er forholdet mellom monomer og polymer?',
            options: [
              { id: 'a', text: 'De er det samme', isCorrect: false },
              { id: 'b', text: 'En monomer er den lille byggesteinen, en polymer er den lange kjeden av mange monomere', isCorrect: true },
              { id: 'c', text: 'En polymer er en liten del av en monomer', isCorrect: false },
              { id: 'd', text: 'Monomere finnes bare i naturen', isCorrect: false },
            ],
            solution:
              'En monomer er den lille byggesteinen (for eksempel eten), og en polymer er den lange kjeden som dannes når mange monomere kobles sammen (for eksempel polyeten). Tenk på det som perler (monomere) på en snor (polymer).',
          },
          {
            id: 'naturfag-10-2-8-n-quiz4-q1',
            task: 'Hvorfor er plastforurensning et så stort miljøproblem?',
            options: [
              { id: 'a', text: 'Fordi plast er giftig for mennesker ved berøring', isCorrect: false },
              { id: 'b', text: 'Fordi syntetisk plast ikke brytes ned naturlig og hoper seg opp i naturen', isCorrect: true },
              { id: 'c', text: 'Fordi plast eksploderer i sollys', isCorrect: false },
              { id: 'd', text: 'Fordi plast er svært dyrt å produsere', isCorrect: false },
            ],
            solution:
              'Syntetisk plast har sterke kovalente C-C-bindinger som mikroorganismer ikke kan bryte ned. En plastpose kan ligge i naturen i hundrevis av år og brytes gradvis ned til mikroplast som spres overalt. Det er dette som gjør plastforurensning til et så alvorlig problem.',
          },
          {
            id: 'naturfag-10-2-8-n-quiz4-q2',
            task: 'Hvilken av disse er en naturlig polymer?',
            options: [
              { id: 'a', text: 'Polyeten', isCorrect: false },
              { id: 'b', text: 'PVC', isCorrect: false },
              { id: 'c', text: 'Cellulose', isCorrect: true },
              { id: 'd', text: 'Polystyren', isCorrect: false },
            ],
            solution:
              'Cellulose er en naturlig polymer av glukose som finnes i planteceller, tre og papir. Polyeten, PVC og polystyren er syntetiske polymerer (plast) laget av monomere fra råolje.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-2-8-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket en rikere verden av organisk kjemi, utover de enkle hydrokarbonene. Vi har lært at funksjonelle grupper bestemmer et organisk stoffs egenskaper: hydroksylgruppen (-OH) gir alkoholer, karboksylgruppen (-COOH) gir karboksylsyrer, og estergruppen (-COO-) gir estere.

Vi har sett at alkoholer har høyere kokepunkt enn hydrokarboner takket være hydrogenbindinger, at karboksylsyrer er svake organiske syrer, og at estere dannes fra alkohol pluss syre og ofte har fruktig lukt.

Vi har utforsket de tre makronæringsstoffene: karbohydrater (monosakkarider, disakkarider og polysakkarider som gir kroppen energi), fett (estere av glyserol og fettsyrer som lagrer energi og bygger cellemembraner) og proteiner (kjeder av aminosyrer som fungerer som enzymer, byggemateriale og mye mer).

Til slutt har vi lært om polymerer, store molekyler av mange monomere. Syntetiske polymerer som polyeten og PVC har revolusjonert hverdagen, men skaper store miljøproblemer fordi de ikke brytes ned. Naturlige polymerer som cellulose, proteiner og DNA er livets egne byggematerialer. Kampen mot plastforurensning og mikroplast er en av vår tids store utfordringer.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const NATURFAG_10_NARRATIV_DEL2B_CHAPTERS = [
  CHAPTER_NATURFAG_10_2_5_NARRATIV,
  CHAPTER_NATURFAG_10_2_6_NARRATIV,
  CHAPTER_NATURFAG_10_2_7_NARRATIV,
  CHAPTER_NATURFAG_10_2_8_NARRATIV,
];
