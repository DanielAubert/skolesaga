/**
 * Norsk VG3 - Narrative versjoner Del 7 (Kapittel 5.1-5.6, 6.1-6.3)
 *
 * Engasjerende, fortellende versjoner av kapitlene om språk og språkhistorie,
 * optimalisert for lesing/lytting.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 5.1 NARRATIV: Språk og identitet
// ============================================================================

export const CHAPTER_NORSK_VG3_5_1_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-5-1-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '5.1',
  title: 'Språk og identitet',
  subtitle: 'Narrativ versjon',
  description: 'Oppdag hvordan språket former hvem vi er - fra dialekt til tospråklighet.',
  estimatedMinutes: 30,
  competenceGoals: [
    'forklare endringer i norsk talemål i dag',
    'reflektere over hva språk betyr for identitet',
  ],
  linkedChapterId: 'norsk-vg3-5-1',
  content: [
    {
      id: 'norsk-vg3-5-1-n-intro',
      type: 'text',
      content: `## Språket som speil

Tenk deg at du møter noen for første gang. De sier bare noen få ord, og allerede har du dannet deg et bilde av dem. Kommer de fra Oslo? Fra Bergen? Fra en liten bygd i Nord-Norge? Er de unge eller eldre? Utdannede eller ikke?

Språket avslører oss. Det forteller verden hvem vi er - eller hvem vi vil være. Det er en av de mest intime delene av identiteten vår.

I Norge har forholdet til språk alltid vært spesielt. Vi er et lite land med to offisielle skriftspråk, hundrevis av dialekter, og en lang historie med språklig strid. Få steder i verden er språk så tett knyttet til identitet, politikk og følelser som her.`,
    },
    {
      id: 'norsk-vg3-5-1-n-section1',
      type: 'text',
      content: `## Dialekt - hvem er jeg?

For mange nordmenn er dialekten det mest personlige uttrykket for hvem de er. Den knytter oss til et sted, til en historie, til et fellesskap. Når du hører noen snakke din dialekt langt hjemmefra, kjenner du et umiddelbart bånd.

Norge er unikt i Europa når det gjelder dialekttoleranse. I de fleste land forventes det at man snakker standardspråk i offentlige sammenhenger. I Norge kan du høre dialekt i Stortinget, på NRK, i rettssalen. Dette sier noe om verdiene våre: Vi verdsetter mangfold og autentisitet.

Men dialektene er under press. Unge mennesker snakker ofte annerledes enn besteforeldrene sine. Dialektene nærmer seg hverandre, særlig i retning av regionale sentrumsformer. Gamle særtrekk forsvinner.

Er dette et tap? Mange mener det. Dialektene bærer med seg kunnskap, historie og identitet som går tapt når de forsvinner. Andre ser det som naturlig utvikling - språk forandrer seg alltid.`,
    },
    {
      id: 'norsk-vg3-5-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-5-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på dialekt og identitet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-5-1-n-quiz1-q0',
            task: 'Hvorfor er Norge spesielt når det gjelder dialektbruk?',
            options: [
              { id: 'a', text: 'Norge har færre dialekter enn andre land', isCorrect: false },
              { id: 'b', text: 'Dialekt aksepteres i offentlige sammenhenger som Stortinget og TV', isCorrect: true },
              { id: 'c', text: 'Alle må snakke standardspråk i formelle situasjoner', isCorrect: false },
              { id: 'd', text: 'Dialektene er beskyttet ved lov mot endring', isCorrect: false },
            ],
            solution: 'Norge er unikt i Europa fordi dialekt aksepteres i offentlige sammenhenger som Stortinget, NRK og rettssalen. I de fleste andre land forventes standardspråk i formelle situasjoner.',
          },
          {
            id: 'norsk-vg3-5-1-n-quiz1-q1',
            task: 'Hva skjer med mange norske dialekter i dag?',
            options: [
              { id: 'a', text: 'De blir mer ulike hverandre enn før', isCorrect: false },
              { id: 'b', text: 'De er helt uforandret fra middelalderen', isCorrect: false },
              { id: 'c', text: 'De nærmer seg hverandre, særlig mot regionale sentrumsformer', isCorrect: true },
              { id: 'd', text: 'De forsvinner helt og erstattes av engelsk', isCorrect: false },
            ],
            solution: 'Dialektene nærmer seg hverandre, særlig i retning av regionale sentrumsformer. Unge snakker ofte annerledes enn besteforeldrene sine, og gamle særtrekk forsvinner gradvis.',
          },
          {
            id: 'norsk-vg3-5-1-n-quiz1-q2',
            task: 'Hva menes med at språket «avslører oss»?',
            options: [
              { id: 'a', text: 'At vi alltid snakker sant', isCorrect: false },
              { id: 'b', text: 'At folk kan høre hemmelighetene våre', isCorrect: false },
              { id: 'c', text: 'At språket forteller andre hvor vi kommer fra og hvem vi er', isCorrect: true },
              { id: 'd', text: 'At vi ikke klarer å skjule hva vi mener', isCorrect: false },
            ],
            solution: 'Språket forteller verden hvem vi er og hvor vi kommer fra. Allerede etter noen få ord danner folk seg et bilde av bakgrunnen vår basert på dialekt, ordvalg og uttale.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-5-1-n-section2',
      type: 'text',
      content: `## Språk og makt

Språk er ikke nøytralt. Det er knyttet til makt. Hvem bestemmer hva som er "riktig" norsk? Hvem blir hørt, og hvem blir oversett?

Gjennom historien har visse språkformer hatt høyere status enn andre. Dansk-norsk - forløperen til bokmål - var overklassens språk. Dialektene og landsmål/nynorsk var knyttet til bygdefolk og arbeidere.

Denne historien preger oss fortsatt. Enkelte dialekter oppfattes som "finere" enn andre. Oslo vest-dialekt gir andre assosiasjoner enn nordnorsk. Er dette rettferdig? Nei. Men det er virkelig.

Språkforskere snakker om **språklig kapital** - verdien språket ditt har i samfunnet. Hvis du snakker "riktig", får du fortrinn. Hvis du snakker "feil", møter du hindringer.

Dette betyr ikke at vi skal slutte å snakke dialekt. Tvert imot - bevissthet om språklig makt kan hjelpe oss å utfordre den. Mangfold er en styrke, ikke en svakhet.`,
    },
    {
      id: 'norsk-vg3-5-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-5-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på språk og makt:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-5-1-n-quiz2-q0',
            task: 'Hva menes med "språklig kapital"?',
            options: [
              { id: 'a', text: 'Hvor mange språk du kan', isCorrect: false },
              { id: 'b', text: 'Hvor mye penger det koster å lære et språk', isCorrect: false },
              { id: 'c', text: 'Verdien og statusen språkformen din har i samfunnet', isCorrect: true },
              { id: 'd', text: 'Hvor gammelt et språk er', isCorrect: false },
            ],
            solution: 'Språklig kapital handler om verdien og statusen språkformen din har i samfunnet. Visse dialekter og språkformer gir høyere status og flere muligheter enn andre.',
          },
          {
            id: 'norsk-vg3-5-1-n-quiz2-q1',
            task: 'Hvilket språk hadde høyest status i Norge historisk sett?',
            options: [
              { id: 'a', text: 'Nynorsk og dialektene', isCorrect: false },
              { id: 'b', text: 'Samisk og kvensk', isCorrect: false },
              { id: 'c', text: 'Dansk-norsk, overklassens språk', isCorrect: true },
              { id: 'd', text: 'Engelsk fra handelsnettverk', isCorrect: false },
            ],
            solution: 'Dansk-norsk, forløperen til bokmål, var overklassens og embetsmennenes språk og hadde høyest status. Dialektene og landsmål/nynorsk var knyttet til bygdefolk og arbeidere.',
          },
          {
            id: 'norsk-vg3-5-1-n-quiz2-q2',
            task: 'Hva kan bevissthet om språklig makt hjelpe oss med?',
            options: [
              { id: 'a', text: 'Å unngå å snakke dialekt', isCorrect: false },
              { id: 'b', text: 'Å utfordre urettferdige språklige hierarkier', isCorrect: true },
              { id: 'c', text: 'Å lære standardspråk raskere', isCorrect: false },
              { id: 'd', text: 'Å slutte å bry oss om språk', isCorrect: false },
            ],
            solution: 'Bevissthet om språklig makt kan hjelpe oss å utfordre urettferdige hierarkier der visse språkformer gir fortrinn. Mangfold er en styrke, og alle dialekter og språkformer har verdi.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-5-1-n-section3',
      type: 'text',
      content: `## Flerspråklighet i moderne Norge

Norge har aldri vært et enspråklig land. Samiske språk har vært her lenger enn norsk. Kvensk, romani og romanés har lange tradisjoner. Og i dag snakkes det over 200 språk i norske klasserom.

For mange barn i Norge er flerspråklighet hverdagen. De snakker ett språk hjemme, et annet på skolen, kanskje et tredje med besteforeldrene. Dette er ikke et problem - det er en ressurs.

Forskning viser at flerspråklige barn utvikler bedre evne til å se ting fra ulike perspektiver, til å fokusere, til å forstå språk som system. Hjernen blir mer fleksibel.

Men flerspråklighet møter også motstand. Noen ser på minoritetsspråk som en trussel mot norsk. Andre mener at barn "forvirres" av flere språk. Forskningen støtter ikke disse bekymringene. Tvert imot - jo flere språk, desto bedre.

Det viktige er at alle språkene verdsettes. Et barn som får høre at morsmålet deres er "feil" eller "unødvendig", mister en del av seg selv. Et barn som får støtte på alle sine språk, blomstrer.`,
    },
    {
      id: 'norsk-vg3-5-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-5-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på flerspråklighet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-5-1-n-quiz3-q0',
            task: 'Hva viser forskning om flerspråklige barn?',
            options: [
              { id: 'a', text: 'De blir forvirret av flere språk', isCorrect: false },
              { id: 'b', text: 'De lærer norsk dårligere enn andre', isCorrect: false },
              { id: 'c', text: 'De utvikler bedre kognitiv fleksibilitet', isCorrect: true },
              { id: 'd', text: 'De bør bare snakke ett språk hjemme', isCorrect: false },
            ],
            solution: 'Forskning viser at flerspråklige barn utvikler bedre kognitiv fleksibilitet, evne til perspektivtaking og forståelse av språk som system. Hjernen blir mer fleksibel av å håndtere flere språk.',
          },
          {
            id: 'norsk-vg3-5-1-n-quiz3-q1',
            task: 'Hvilke minoritetsspråk har lang tradisjon i Norge?',
            options: [
              { id: 'a', text: 'Kun engelsk og tysk', isCorrect: false },
              { id: 'b', text: 'Samisk, kvensk, romani og romanés', isCorrect: true },
              { id: 'c', text: 'Bare samisk og finsk', isCorrect: false },
              { id: 'd', text: 'Ingen, Norge var enspråklig før innvandring', isCorrect: false },
            ],
            solution: 'Norge har aldri vært enspråklig. Samiske språk har vært her lenger enn norsk, og kvensk, romani og romanés har lange tradisjoner i landet.',
          },
          {
            id: 'norsk-vg3-5-1-n-quiz3-q2',
            task: 'Hva er viktig for flerspråklige barns utvikling?',
            options: [
              { id: 'a', text: 'At de slutter med morsmålet så tidlig som mulig', isCorrect: false },
              { id: 'b', text: 'At de bare snakker norsk på skolen', isCorrect: false },
              { id: 'c', text: 'At de bare bruker ett språk om gangen', isCorrect: false },
              { id: 'd', text: 'At alle språkene deres verdsettes og støttes', isCorrect: true },
            ],
            solution: 'Et barn som får støtte på alle sine språk, blomstrer. Å høre at morsmålet er «feil» eller «unødvendig» gjør at barnet mister en del av seg selv.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-5-1-n-section4',
      type: 'text',
      content: `## Språkendring - trussel eller mulighet?

Språk forandrer seg. Det har alltid gjort det, og det vil alltid gjøre det. Spørsmålet er hvordan vi forholder oss til endringene.

Mange bekymrer seg for "språkforfall". Ungdommen snakker "kebabnorsk". Engelske ord invaderer norsk. Dialektene forsvinner. Er norsk i fare?

Sannheten er mer nyansert. Ja, språket forandrer seg - men det betyr ikke at det forfaller. Det utvikler seg. Nye ord kommer til fordi vi trenger dem. Gammel grammatikk forenkles fordi den er unødvendig komplisert.

**Språkkontakt** er en naturlig del av språkhistorien. Norsk har alltid tatt opp lånord - fra tysk, dansk, engelsk og andre språk. Det gjør språket rikere, ikke fattigere.

Det som er viktig, er at vi holder norsk levende og brukbart på alle samfunnsområder. At vi fortsetter å skrive bøker, synge sanger, gjøre vitenskap på norsk. Så lenge norsk er et fullverdig språk, trenger vi ikke bekymre oss.`,
    },
    {
      id: 'norsk-vg3-5-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-5-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på språkendring:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-5-1-n-quiz4-q0',
            task: 'Hva er "domenetap" i språksammenheng?',
            options: [
              { id: 'a', text: 'At et ord får ny betydning', isCorrect: false },
              { id: 'b', text: 'At et språk slutter å brukes på visse samfunnsområder', isCorrect: true },
              { id: 'c', text: 'At en dialekt dør ut', isCorrect: false },
              { id: 'd', text: 'At grammatikken forenkles', isCorrect: false },
            ],
            solution: 'Domenetap betyr at et språk slutter å brukes på visse samfunnsområder, for eksempel vitenskap eller teknologi. Dette kan være problematisk fordi det begrenser språkets bruksområde.',
          },
          {
            id: 'norsk-vg3-5-1-n-quiz4-q1',
            task: 'Hva menes med «språkkontakt»?',
            options: [
              { id: 'a', text: 'At språkforskere møtes på konferanser', isCorrect: false },
              { id: 'b', text: 'At man lærer et nytt språk på skolen', isCorrect: false },
              { id: 'c', text: 'At språk påvirker hverandre gjennom kontakt mellom folk', isCorrect: true },
              { id: 'd', text: 'At to dialekter blir helt like', isCorrect: false },
            ],
            solution: 'Språkkontakt er en naturlig del av språkhistorien der språk påvirker hverandre. Norsk har alltid tatt opp lånord fra tysk, dansk, engelsk og andre språk, noe som gjør språket rikere.',
          },
          {
            id: 'norsk-vg3-5-1-n-quiz4-q2',
            task: 'Hvorfor er det viktig å holde norsk i bruk på alle samfunnsområder?',
            options: [
              { id: 'a', text: 'Fordi lånord ødelegger grammatikken', isCorrect: false },
              { id: 'b', text: 'For å hindre at norsk mister funksjon som fullverdig språk', isCorrect: true },
              { id: 'c', text: 'Fordi engelsk er et dårligere språk', isCorrect: false },
              { id: 'd', text: 'Fordi alle land bør ha bare ett språk', isCorrect: false },
            ],
            solution: 'Så lenge norsk brukes på alle samfunnsområder -- vitenskap, litteratur, politikk -- forblir det et fullverdig språk. Domenetap kan true dette, men lånord i seg selv er ikke et problem.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-5-1-n-section5',
      type: 'text',
      content: `## Språk og framtid

Hvordan vil norsk se ut om 100 år? Ingen vet. Men vi kan påvirke utviklingen.

De valgene vi gjør i dag - hvilke ord vi bruker, hvordan vi snakker med barna våre, hva vi leser og skriver - former språkets framtid. Språket er ikke noe som bare skjer med oss. Det er noe vi skaper sammen.

Kanskje vil dialektene bli likere hverandre. Kanskje vil forskjellen mellom bokmål og nynorsk viskes ut. Kanskje vil norsk ta opp enda flere engelske ord. Eller kanskje vil vi se en motreaksjon - en fornyet interesse for det tradisjonelle.

Det viktigste er at vi holder språket levende. At vi snakker det, skriver det, synger det, krangler om det. Et språk som ingen bryr seg om, dør. Et språk som folk elsker og kjemper for, lever.

Ditt språk er din arv og din gave til framtiden. Bruk det bevisst.`,
    },
    {
      id: 'norsk-vg3-5-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-5-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på språk og framtid:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-5-1-n-quiz5-q0',
            task: 'Hva er det viktigste for å holde et språk levende?',
            options: [
              { id: 'a', text: 'At det aldri endrer seg', isCorrect: false },
              { id: 'b', text: 'At myndighetene bestemmer alle regler', isCorrect: false },
              { id: 'c', text: 'At folk bruker det aktivt på alle områder av livet', isCorrect: true },
              { id: 'd', text: 'At det ikke tar opp lånord', isCorrect: false },
            ],
            solution: 'Et språk holdes levende ved at folk bruker det aktivt - snakker det, skriver det, synger det, bruker det i vitenskap og kunst. Språk som ingen bryr seg om, dør ut.',
          },
          {
            id: 'norsk-vg3-5-1-n-quiz5-q1',
            task: 'Hva sier teksten om framtiden for norske dialekter?',
            options: [
              { id: 'a', text: 'De vil garantert forsvinne innen 50 år', isCorrect: false },
              { id: 'b', text: 'De vil bli helt like hverandre', isCorrect: false },
              { id: 'c', text: 'Ingen vet sikkert, men vi kan påvirke utviklingen', isCorrect: true },
              { id: 'd', text: 'De vil gå tilbake til norrøne former', isCorrect: false },
            ],
            solution: 'Ingen vet hvordan norsk vil se ut om 100 år. Kanskje blir dialektene likere, kanskje kommer en motreaksjon. De valgene vi gjør i dag former språkets framtid.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-5-1-n-summary',
      type: 'text',
      content: `## Oppsummering

**Språk og identitet:**
- Språket avslører hvem vi er og hvor vi kommer fra
- Dialekten er en viktig del av identiteten for mange nordmenn
- Norge er unikt med høy toleranse for dialektbruk i offentligheten

**Språk og makt:**
- Visse språkformer har høyere status enn andre
- "Språklig kapital" beskriver verdien språket ditt har i samfunnet
- Bevissthet om språklig makt kan utfordre urettferdighet

**Flerspråklighet:**
- Norge har alltid hatt flere språk (samisk, kvensk, romani)
- Over 200 språk snakkes i norske klasserom i dag
- Forskning viser at flerspråklighet er en kognitiv fordel

**Språkendring:**
- Språk forandrer seg naturlig over tid
- Lånord og forenkling er ikke "forfall"
- "Domenetap" kan være en trussel hvis norsk slutter å brukes på viktige områder

**Framtiden:**
- Språkets framtid formes av valgene vi gjør i dag
- Et språk som brukes aktivt, lever videre`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.1 NARRATIV: Fra urnordisk til norrønt
// ============================================================================

export const CHAPTER_NORSK_VG3_6_1_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-6-1-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '6.1',
  title: 'Fra urnordisk til norrønt',
  subtitle: 'Narrativ versjon',
  description: 'Reis tilbake i tid og oppdag røttene til språket ditt - fra de første runene til vikingenes norrønt.',
  estimatedMinutes: 35,
  competenceGoals: [
    'gjøre rede for utviklingen av norsk språk fra urnordisk til norrønt',
    'sammenligne særtrekk ved norsk med minst ett annet språk',
  ],
  linkedChapterId: 'norsk-vg3-6-1',
  content: [
    {
      id: 'norsk-vg3-6-1-n-intro',
      type: 'text',
      content: `## Stemmer fra fortiden

Forestill deg at du står foran en stor steinblokk i et norsk skogholt. Steinen er dekket av merkelige tegn - rette streker risset inn i overflaten. Tegnene ble hugget der for nesten 2000 år siden, av noen som ville at budskapet deres skulle vare evig.

Dette er runene - det eldste skriftsystemet i Norden. Og språket de ble skrevet på, er stamfaren til det norske språket du snakker i dag.

Å lese disse runene er som å høre stemmer fra fortiden. De forteller om helter og konger, om magiske formler og hverdagslige beskjeder. Og de avslører hvordan språket vårt har forandret seg gjennom århundrene - fra det kompliserte urnordiske til det norrøne språket vikingene snakket.`,
    },
    {
      id: 'norsk-vg3-6-1-n-section1',
      type: 'text',
      content: `## Røttene - det indoeuropeiske urspråket

Før vi dykker ned i urnordisk, må vi gå enda lenger tilbake. Det norske språket tilhører den germanske språkfamilien, som igjen er en gren av den enorme indoeuropeiske språkfamilien.

For kanskje 5000-6000 år siden, et sted på steppene nord for Svartehavet, levde et folk som snakket et språk vi kaller urindoeuropeisk. Fra dette ene språket stammer de fleste språkene i Europa og store deler av Asia: norsk og svensk, engelsk og tysk, russisk og polsk, gresk og latin, hindi og persisk.

Slektskapet kan fortsatt høres i de mest grunnleggende ordene:
- Norsk "mor" - engelsk "mother" - tysk "Mutter" - latin "mater"
- Norsk "tre" - engelsk "three" - tysk "drei" - latin "tres"
- Norsk "natt" - engelsk "night" - tysk "Nacht" - latin "nox"

Rundt 500 f.Kr. skilte den germanske grenen seg ut. Og fra germansk utviklet det seg etter hvert til nordgermansk - forløperen til de skandinaviske språkene.`,
    },
    {
      id: 'norsk-vg3-6-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-6-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på språkfamilien:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-6-1-n-quiz1-q0',
            task: 'Hvilken språkfamilie tilhører norsk?',
            options: [
              { id: 'a', text: 'Den romanske språkfamilien', isCorrect: false },
              { id: 'b', text: 'Den slaviske språkfamilien', isCorrect: false },
              { id: 'c', text: 'Den germanske grenen av den indoeuropeiske språkfamilien', isCorrect: true },
              { id: 'd', text: 'Den finsk-ugriske språkfamilien', isCorrect: false },
            ],
            solution: 'Norsk tilhører den germanske språkfamilien, som er en gren av den indoeuropeiske språkfamilien. Andre germanske språk er svensk, dansk, tysk, nederlandsk og engelsk.',
          },
          {
            id: 'norsk-vg3-6-1-n-quiz1-q1',
            task: 'Hvordan kan vi se slektskapet mellom norsk og andre indoeuropeiske språk?',
            options: [
              { id: 'a', text: 'Alle har eksakt lik grammatikk', isCorrect: false },
              { id: 'b', text: 'Grunnleggende ord som «mor», «tre» og «natt» ligner på tvers av språkene', isCorrect: true },
              { id: 'c', text: 'Alle bruker det latinske alfabetet', isCorrect: false },
              { id: 'd', text: 'De har alle like mange vokaler', isCorrect: false },
            ],
            solution: 'Slektskapet vises i grunnleggende ord: norsk «mor» ligner engelsk «mother», tysk «Mutter» og latin «mater». Disse likhetene i basisordforrådet bekrefter felles opphav.',
          },
          {
            id: 'norsk-vg3-6-1-n-quiz1-q2',
            task: 'Når skilte den germanske grenen seg ut fra de andre indoeuropeiske språkene?',
            options: [
              { id: 'a', text: 'For ca. 1000 år siden', isCorrect: false },
              { id: 'b', text: 'Rundt 500 f.Kr.', isCorrect: true },
              { id: 'c', text: 'I middelalderen', isCorrect: false },
              { id: 'd', text: 'For ca. 10 000 år siden', isCorrect: false },
            ],
            solution: 'Den germanske grenen skilte seg ut rundt 500 f.Kr. Fra germansk utviklet det seg etter hvert til nordgermansk, som er forløperen til de skandinaviske språkene.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-6-1-n-section2',
      type: 'text',
      content: `## Urnordisk - det første nordiske språket

Mellom år 200 og 700 e.Kr. snakket folk i Skandinavia det vi kaller **urnordisk**. Dette er den eldste formen for nordisk språk vi har dokumentert.

På denne tiden var det ikke noe skille mellom norsk, svensk og dansk. En person fra det som nå er Norge, kunne uten problemer forstå en fra det som nå er Sverige. Det var i praksis ett språk for hele Skandinavia.

Vi kjenner urnordisk fra runeinnskrifter. Og når vi leser dem, merker vi at språket var ganske annerledes enn moderne norsk. Det var mer komplisert, med flere kasus og lengre ord.

Ta ordet for "gjest". På urnordisk het det "gastiz" - med endelsen -iz som markerte at det var subjekt i setningen. På moderne norsk sier vi bare "gjest". Endelsen har forsvunnet, og vi bruker ordstilling i stedet for å vise hvem som gjør hva.

Denne forenklingen skjedde ikke over natten. Det tok flere hundre år.`,
    },
    {
      id: 'norsk-vg3-6-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-6-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på urnordisk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-6-1-n-quiz2-q0',
            task: 'Hva kjennetegnet urnordisk sammenlignet med moderne norsk?',
            options: [
              { id: 'a', text: 'Det var enklere grammatikk med færre bøyninger', isCorrect: false },
              { id: 'b', text: 'Det var mer komplisert med flere kasus og lengre ord', isCorrect: true },
              { id: 'c', text: 'Det var helt likt moderne norsk', isCorrect: false },
              { id: 'd', text: 'Det hadde flere lånord fra engelsk', isCorrect: false },
            ],
            solution: 'Urnordisk var mer komplisert enn moderne norsk, med flere kasus og lengre ord. For eksempel het «gjest» «gastiz» på urnordisk, med endelsen -iz som markerte subjekt.',
          },
          {
            id: 'norsk-vg3-6-1-n-quiz2-q1',
            task: 'I hvilken periode ble urnordisk snakket?',
            options: [
              { id: 'a', text: 'Fra ca. 200 til 700 e.Kr.', isCorrect: true },
              { id: 'b', text: 'Fra 1000 f.Kr. til år 0', isCorrect: false },
              { id: 'c', text: 'Fra 700 til 1300 e.Kr.', isCorrect: false },
              { id: 'd', text: 'Fra 1300 til 1600 e.Kr.', isCorrect: false },
            ],
            solution: 'Urnordisk ble snakket mellom ca. 200 og 700 e.Kr. i hele Skandinavia. Det var felles for hele regionen -- det fantes ikke noe skille mellom norsk, svensk og dansk ennå.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-6-1-n-section3',
      type: 'text',
      content: `## Runene - Nordens første skrift

Runene er magiske. Ikke bare fordi de ser mystiske ut, men fordi de åpner et vindu inn i en verden som ellers ville vært tapt for oss.

Den eldste runerekken kalles **futharken**, oppkalt etter de seks første runene: f-u-þ-a-r-k. Den hadde 24 tegn, og hver rune hadde både en lydverdi og et navn med symbolsk betydning.

Runen ᚠ (f) het "fehu" og betydde "fe, rikdom". Runen ᚦ (þ) het "þurisaz" og betydde "troll" eller "jotun". Runen ᛏ (t) het "Tiwaz" etter krigsguden Ty.

De eldste runeinnskriftene fra Norge er korte - ofte bare et navn eller noen få ord. **Øvre Stabu-spydspissen** fra ca. 180 e.Kr. har innskriften "raunijaz", som kanskje betyr "prøveren" eller "den erfarne". **Tunestenen** fra ca. 400 e.Kr. er lengre og mer komplisert.

Runene ble brukt til mange formål: til å markere eiendom, til å minnes de døde, til magiske formler, til hverdagslige beskjeder. De var ikke bare for prester og konger - alle som kunne, brukte dem.`,
    },
    {
      id: 'norsk-vg3-6-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-6-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på runene:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-6-1-n-quiz3-q0',
            task: 'Hva var «futharken»?',
            options: [
              { id: 'a', text: 'En norrøn gud', isCorrect: false },
              { id: 'b', text: 'Den eldste runerekken med 24 tegn', isCorrect: true },
              { id: 'c', text: 'En type vikingskip', isCorrect: false },
              { id: 'd', text: 'Et urnordisk dikt', isCorrect: false },
            ],
            solution: 'Futharken var den eldste runerekken, oppkalt etter de seks første runene: f-u-þ-a-r-k. Den hadde 24 tegn, og hver rune hadde både en lydverdi og et navn med symbolsk betydning.',
          },
          {
            id: 'norsk-vg3-6-1-n-quiz3-q1',
            task: 'Hva ble runene brukt til?',
            options: [
              { id: 'a', text: 'Bare til religiøse formål av prester', isCorrect: false },
              { id: 'b', text: 'Bare til å skrive lover og kongebrev', isCorrect: false },
              { id: 'c', text: 'Mange formål: eiendomsmarkering, minne, magi og hverdagsbeskjeder', isCorrect: true },
              { id: 'd', text: 'Bare til dekorasjon på smykker', isCorrect: false },
            ],
            solution: 'Runene ble brukt til mange formål: å markere eiendom, minnes de døde, magiske formler og hverdagslige beskjeder. De var ikke forbeholdt en elite -- alle som kunne, brukte dem.',
          },
          {
            id: 'norsk-vg3-6-1-n-quiz3-q2',
            task: 'Hva er spesielt med runenes navn?',
            options: [
              { id: 'a', text: 'De er oppkalt etter norske konger', isCorrect: false },
              { id: 'b', text: 'De har bare lydverdi uten egen betydning', isCorrect: false },
              { id: 'c', text: 'Hver rune hadde både en lydverdi og et navn med symbolsk betydning', isCorrect: true },
              { id: 'd', text: 'Navnene er hentet fra det greske alfabetet', isCorrect: false },
            ],
            solution: 'Hver rune hadde både en lydverdi og et symbolsk navn. For eksempel het runen ᚠ (f) «fehu» og betydde «fe, rikdom», mens ᚦ (þ) het «þurisaz» og betydde «troll».',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-6-1-n-section4',
      type: 'text',
      content: `## Synkopetiden - da ordene krympet

Mellom år 500 og 700 skjedde noe dramatisk med det nordiske språket. Ordene krympet.

Denne perioden kalles **synkopetiden**, fordi trykksvake vokaler falt bort (synkope = bortfall av lyd). Det som før var lange, kompliserte ord, ble kortere og mer kompakte.

"HaþuwulfaR" (et mannsnavn som betyr "kampulven") ble til "Hálfr".
"Gastiz" (gjest) ble til "gestr".
"Hariwulfaz" (hærulven) ble til "Herjólfr".

Disse endringene hadde store konsekvenser. Når vokalene forsvant, ble konsonantene presset sammen. Nye og uvante konsonantforbindelser oppsto. Og vokalene som sto igjen, ble påvirket av vokalene som hadde forsvunnet - det vi kaller **omlyd**.

Omlyden er grunnen til at vi sier "mann" i entall, men "menn" i flertall. Den opprinnelige flertallsendelsen -iz påvirket a-en slik at den ble til e, før endelsen selv forsvant.

Synkopetiden markerer overgangen fra urnordisk til norrønt. Rundt år 700 var transformasjonen fullført.`,
    },
    {
      id: 'norsk-vg3-6-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-6-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på synkopetiden:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-6-1-n-quiz4-q0',
            task: 'Hva skjedde i synkopetiden?',
            options: [
              { id: 'a', text: 'Ordene ble lengre og mer kompliserte', isCorrect: false },
              { id: 'b', text: 'Trykksvake vokaler falt bort og ordene ble kortere', isCorrect: true },
              { id: 'c', text: 'Runene ble oppfunnet', isCorrect: false },
              { id: 'd', text: 'Norsk og svensk ble identiske', isCorrect: false },
            ],
            solution: 'I synkopetiden (500-700 e.Kr.) falt trykksvake vokaler bort, og ordene ble kortere. For eksempel ble «gastiz» til «gestr». Dette markerer overgangen fra urnordisk til norrønt.',
          },
          {
            id: 'norsk-vg3-6-1-n-quiz4-q1',
            task: 'Hva er «omlyd», og hvordan ser vi det i moderne norsk?',
            options: [
              { id: 'a', text: 'Det er en type rim i norrøn poesi', isCorrect: false },
              { id: 'b', text: 'Det er når en vokal endres på grunn av en vokal i neste stavelse, som mann/menn', isCorrect: true },
              { id: 'c', text: 'Det er når konsonanter bytter plass i et ord', isCorrect: false },
              { id: 'd', text: 'Det er et annet ord for dialektendring', isCorrect: false },
            ],
            solution: 'Omlyd oppsto når en vokal ble påvirket av en vokal i neste stavelse. Flertallsendelsen -iz påvirket a-en i «mann» slik at den ble til e, som gir «menn» i flertall.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-6-1-n-section5',
      type: 'text',
      content: `## Norrønt - vikingenes språk

Rundt år 700 var transformasjonen fullført. Urnordisk hadde blitt til **norrønt** - språket vikingene snakket.

Norrønt var fortsatt ganske likt over hele Skandinavia, men forskjeller begynte å vise seg. **Vestnordisk** (Norge og Island) utviklet seg i én retning, **østnordisk** (Sverige og Danmark) i en annen. Dette var de første spirene til de moderne skandinaviske språkene.

Det norrøne språket ble spredt over enorme områder. Vikingene tok det med seg til Island, Grønland, Færøyene, De britiske øyer, Normandie - til og med til Amerika, 500 år før Columbus.

På Island ble norrønt bevart i en særlig ren form. Der ble sagaene skrevet ned - Njåls saga, Egils saga, Heimskringla. Disse tekstene er uvurderlige kilder til det norrøne språket og den norrøne kulturen.

Faktisk er islandsk i dag så likt det norrøne språket at islendinger kan lese 800 år gamle sagaer uten store problemer. Norsk har endret seg mye mer. Men sporene av norrønt finnes overalt i moderne norsk - i ordforrådet, i grammatikken, i stedsnavnene.`,
    },
    {
      id: 'norsk-vg3-6-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-6-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på norrønt:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-6-1-n-quiz5-q0',
            task: 'Hvilket moderne språk har bevart mest av det norrøne språket?',
            options: [
              { id: 'a', text: 'Norsk', isCorrect: false },
              { id: 'b', text: 'Svensk', isCorrect: false },
              { id: 'c', text: 'Islandsk', isCorrect: true },
              { id: 'd', text: 'Dansk', isCorrect: false },
            ],
            solution: 'Islandsk har bevart mest av det norrøne språket fordi Island var isolert og språket endret seg lite. Islendinger kan fortsatt lese 800 år gamle sagaer uten store problemer.',
          },
          {
            id: 'norsk-vg3-6-1-n-quiz5-q1',
            task: 'Hva var forskjellen mellom vestnordisk og østnordisk?',
            options: [
              { id: 'a', text: 'Vestnordisk ble til norsk og islandsk, østnordisk ble til svensk og dansk', isCorrect: true },
              { id: 'b', text: 'Vestnordisk forsvant helt, østnordisk overlevde', isCorrect: false },
              { id: 'c', text: 'De var helt identiske språk med ulike navn', isCorrect: false },
              { id: 'd', text: 'Vestnordisk brukte runer, østnordisk brukte det latinske alfabetet', isCorrect: false },
            ],
            solution: 'Vestnordisk (Norge og Island) og østnordisk (Sverige og Danmark) utviklet seg i ulike retninger fra norrønt. Dette var de første spirene til de moderne skandinaviske språkene.',
          },
          {
            id: 'norsk-vg3-6-1-n-quiz5-q2',
            task: 'Hvorfor er de norrøne sagaene viktige for oss i dag?',
            options: [
              { id: 'a', text: 'Fordi de inneholder oppskrifter på vikingmat', isCorrect: false },
              { id: 'b', text: 'Fordi de er uvurderlige kilder til norrønt språk og kultur', isCorrect: true },
              { id: 'c', text: 'Fordi de ble skrevet på moderne norsk', isCorrect: false },
              { id: 'd', text: 'Fordi de er Norges eldste lovtekster', isCorrect: false },
            ],
            solution: 'Sagaene som ble skrevet ned på Island er uvurderlige kilder til det norrøne språket og den norrøne kulturen. Verk som Njåls saga, Egils saga og Heimskringla gir oss innsikt i vikingenes verden.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-6-1-n-summary',
      type: 'text',
      content: `## Oppsummering

**Språkfamilien:**
- Norsk tilhører den germanske grenen av den indoeuropeiske språkfamilien
- Slektskap med engelsk, tysk, latin og mange andre språk

**Urnordisk (ca. 200-700 e.Kr.):**
- Eldste dokumenterte nordiske språk
- Felles for hele Skandinavia
- Komplisert grammatikk med mange kasus
- Kjent fra runeinnskrifter

**Runene:**
- Nordens eldste skriftsystem
- Futharken: den eldste runerekken med 24 tegn
- Brukt til mange formål: markering, minne, magi, kommunikasjon

**Synkopetiden (500-700 e.Kr.):**
- Trykksvake vokaler falt bort
- Ordene ble kortere
- Omlyd oppsto (mann → menn)
- Markerer overgangen til norrønt

**Norrønt (fra ca. 700):**
- Vikingenes språk
- Vestnordisk (Norge, Island) vs. østnordisk (Sverige, Danmark)
- Bevart best på Island
- Grunnlaget for moderne skandinaviske språk`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.3 NARRATIV: De to norske skriftspråkene
// ============================================================================

export const CHAPTER_NORSK_VG3_6_3_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-6-3-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '6.3',
  title: 'De to norske skriftspråkene',
  subtitle: 'Narrativ versjon',
  description: 'Historien om hvordan Norge fikk to skriftspråk - og hvorfor vi fortsatt har dem.',
  estimatedMinutes: 35,
  competenceGoals: [
    'gjøre rede for utviklingen av de to norske skriftspråkene',
    'drøfte utfordringer og muligheter i det norske språksamfunnet i dag',
  ],
  linkedChapterId: 'norsk-vg3-6-3',
  content: [
    {
      id: 'norsk-vg3-6-3-n-intro',
      type: 'text',
      content: `## Et land med to skriftspråk

Norge er et lite land med en stor språklig særegenhet: Vi har to offisielle skriftspråk, bokmål og nynorsk. Begge er norsk, begge er likestilte ved lov, og begge undervises i skolen.

Hvordan havnet vi her? Hvorfor nøyde vi oss ikke med ett skriftspråk som de fleste andre land? Svaret ligger i en dramatisk historie om nasjonsbygging, identitet og kamp - en kamp som på mange måter fortsatt pågår.

For å forstå denne historien må vi tilbake til 1814, da Norge brøt løs fra 400 år under dansk styre. Vi var endelig et fritt land. Men hva med språket? Det vi skrev, var dansk. Det vi snakket, var norsk. Gapet mellom tale og skrift var enormt.`,
    },
    {
      id: 'norsk-vg3-6-3-n-section1',
      type: 'text',
      content: `## Arven etter dansketiden

I 1814 hadde det norske skriftspråket vært dansk i 400 år. All offentlig forvaltning, all boktrykking, all høyere utdanning hadde foregått på dansk. De som kunne lese og skrive, skrev dansk.

Men folk snakket ikke dansk. De snakket sine lokale dialekter - dialekter som hadde utviklet seg fra norrønt gjennom middelalderen, ofte i helt andre retninger enn dansk.

Gapet var stort. En bonde fra Telemark snakket helt annerledes enn han skrev. Ja, mange kunne knapt skrive i det hele tatt - skriftspråket tilhørte overklassen, embetsmennene, byborgerne.

Spørsmålet etter 1814 var: Hva gjør vi med dette? Skal vi fortsette å skrive dansk? Skal vi fornorske det danske? Eller skal vi bygge et helt nytt skriftspråk på dialektene?

Svaret ble: begge deler. Og dermed var grunnlaget lagt for den norske språkstriden.`,
    },
    {
      id: 'norsk-vg3-6-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-6-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på arven etter dansketiden:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-6-3-n-quiz1-q0',
            task: 'Hvorfor var det et gap mellom tale og skrift i Norge i 1814?',
            options: [
              { id: 'a', text: 'Fordi folk snakket svensk', isCorrect: false },
              { id: 'b', text: 'Fordi skriftspråket var dansk etter 400 år i union', isCorrect: true },
              { id: 'c', text: 'Fordi ingen kunne lese eller skrive', isCorrect: false },
              { id: 'd', text: 'Fordi dialektene var forbudt', isCorrect: false },
            ],
            solution: 'Etter 400 år i union med Danmark var skriftspråket i Norge dansk, mens folk snakket sine lokale norske dialekter. Dette skapte et stort gap mellom tale og skrift.',
          },
          {
            id: 'norsk-vg3-6-3-n-quiz1-q1',
            task: 'Hvem brukte skriftspråket (dansk) i Norge før 1814?',
            options: [
              { id: 'a', text: 'Alle nordmenn kunne lese og skrive dansk', isCorrect: false },
              { id: 'b', text: 'Bare utenlandske diplomater', isCorrect: false },
              { id: 'c', text: 'Overklassen, embetsmenn og byborgere', isCorrect: true },
              { id: 'd', text: 'Bare prester og munker', isCorrect: false },
            ],
            solution: 'Skriftspråket tilhørte overklassen, embetsmennene og byborgerne. Mange bønder kunne knapt skrive -- skriftspråket var knyttet til makt og utdanning.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-6-3-n-section2',
      type: 'text',
      content: `## To veier, to menn

To menn kom til å forme det norske språklandskapet: Ivar Aasen og Knud Knudsen. De hadde samme mål - et ekte norsk skriftspråk - men de valgte helt forskjellige veier.

**Ivar Aasen (1813-1896)** var en bondesønn fra Ørsta på Sunnmøre. Han var selvlært, genial og besatt av dialekter. På 1840-tallet reiste han rundt i hele Norge og kartla dialektene systematisk - et enormt arbeid utført uten statlige midler eller akademisk støtte.

Aasen fant at de norske dialektene hadde felles trekk som skilte dem fra dansk. Basert på disse trekkene konstruerte han et nytt skriftspråk: **landsmål**, senere kalt nynorsk. Det var ikke noen bestemt dialekt, men en sammensmelting av det mest typisk norske fra dialektene - et språk som skulle tilhøre hele folket.

**Knud Knudsen (1812-1895)** var lærer og språkforsker fra Tvedestrand. Han mente at veien til et norsk skriftspråk gikk gjennom gradvis fornorsking av det eksisterende dansk-norske skriftspråket. Man skulle ta utgangspunkt i "den dannede dagligtale" - slik utdannede folk i byene faktisk snakket.

Knudsens linje førte til det vi i dag kaller **bokmål**: et språk som har røtter i dansk, men som gjennom mange reformer er blitt fornorsket.`,
    },
    {
      id: 'norsk-vg3-6-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-6-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på Aasen og Knudsen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-6-3-n-quiz2-q0',
            task: 'Hva var forskjellen mellom Ivar Aasens og Knud Knudsens tilnærming?',
            options: [
              { id: 'a', text: 'Aasen ville beholde dansk, Knudsen ville ha nynorsk', isCorrect: false },
              { id: 'b', text: 'Aasen bygde nytt språk på dialektene, Knudsen fornorsket dansk', isCorrect: true },
              { id: 'c', text: 'Begge ville ha ett felles skriftspråk', isCorrect: false },
              { id: 'd', text: 'Aasen ville ha svensk, Knudsen ville ha dansk', isCorrect: false },
            ],
            solution: 'Ivar Aasen konstruerte et nytt skriftspråk basert på de norske dialektene (landsmål/nynorsk), mens Knud Knudsen ville gradvis fornorske det eksisterende dansk-norske skriftspråket (som ble til bokmål).',
          },
          {
            id: 'norsk-vg3-6-3-n-quiz2-q1',
            task: 'Hvordan arbeidet Ivar Aasen med å skape landsmål?',
            options: [
              { id: 'a', text: 'Han kopierte svensk skriftspråk', isCorrect: false },
              { id: 'b', text: 'Han reiste rundt i Norge og kartla dialektene systematisk', isCorrect: true },
              { id: 'c', text: 'Han oversatte danske tekster til norsk', isCorrect: false },
              { id: 'd', text: 'Han brukte bare dialekten fra Sunnmøre', isCorrect: false },
            ],
            solution: 'Aasen reiste rundt i hele Norge på 1840-tallet og kartla dialektene systematisk. Basert på felles trekk i dialektene konstruerte han landsmål som en sammensmelting av det mest typisk norske.',
          },
          {
            id: 'norsk-vg3-6-3-n-quiz2-q2',
            task: 'Hva mente Knud Knudsen med «den dannede dagligtale»?',
            options: [
              { id: 'a', text: 'Slik bønder snakket i dagliglivet', isCorrect: false },
              { id: 'b', text: 'Slik utdannede folk i byene faktisk snakket', isCorrect: true },
              { id: 'c', text: 'Slik det ble snakket i Danmark', isCorrect: false },
              { id: 'd', text: 'Slik barn lærte å snakke på skolen', isCorrect: false },
            ],
            solution: 'Knudsen ville ta utgangspunkt i «den dannede dagligtale» -- slik utdannede folk i byene faktisk snakket. Ved å gradvis fornorske dette språket ville man komme til et genuint norsk skriftspråk.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-6-3-n-section3',
      type: 'text',
      content: `## Hundre års språkstrid

Det som fulgte var over hundre år med intens språkstrid. Språkspørsmålet ble ikke bare et lingvistisk anliggende - det ble politikk, identitet, kultur.

På den ene siden sto landsmål/nynorsk, støttet av bønder, bygdefolk, radikalere, nasjonalister. For dem representerte nynorsk det ekte Norge - folkets språk mot overklassens.

På den andre siden sto riksmål/bokmål, støttet av byborgerskapet, konservative, de som så på det dannede by-språket som naturlig standard.

Stortinget vedtok reform etter reform. I 1885 ble landsmål og dansk-norsk (det som ble bokmål) likestilte. I 1907 fikk vi en stor bokmålsreform. I 1917 og 1938 kom radikale reformer som skulle nærme de to språkene til hverandre - drømmen var ett felles norsk språk kalt "samnorsk".

Men samnorsk-prosjektet mislyktes. Motstanden var for sterk, fra begge sider. I dag har vi gitt opp tanken om å smelte språkene sammen. Vi har to skriftspråk, og de lever side om side.`,
    },
    {
      id: 'norsk-vg3-6-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-6-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på språkstriden:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-6-3-n-quiz3-q0',
            task: 'Hva var «samnorsk»?',
            options: [
              { id: 'a', text: 'Et tredje norsk skriftspråk som ble innført i 1950', isCorrect: false },
              { id: 'b', text: 'Et forsøk på å smelte bokmål og nynorsk sammen til ett språk', isCorrect: true },
              { id: 'c', text: 'Det opprinnelige navnet på nynorsk', isCorrect: false },
              { id: 'd', text: 'Et dansk-norsk blandingsspråk', isCorrect: false },
            ],
            solution: 'Samnorsk var et prosjekt som skulle smelte bokmål og nynorsk sammen til ett felles norsk skriftspråk. Reformene i 1917 og 1938 var forsøk på dette, men prosjektet mislyktes.',
          },
          {
            id: 'norsk-vg3-6-3-n-quiz3-q1',
            task: 'Når ble landsmål og dansk-norsk likestilte som skriftspråk?',
            options: [
              { id: 'a', text: 'I 1814 da Norge ble selvstendig', isCorrect: false },
              { id: 'b', text: 'I 1850 da Aasen ga ut grammatikken', isCorrect: false },
              { id: 'c', text: 'I 1885 ved stortingsvedtak', isCorrect: true },
              { id: 'd', text: 'I 1917 ved den store rettskrivningsreformen', isCorrect: false },
            ],
            solution: 'Stortinget vedtok i 1885 at landsmål og dansk-norsk (det som ble bokmål) var likestilte skriftspråk. Dette var et viktig skritt i den norske språkhistorien.',
          },
          {
            id: 'norsk-vg3-6-3-n-quiz3-q2',
            task: 'Hvorfor mislyktes samnorsk-prosjektet?',
            options: [
              { id: 'a', text: 'Fordi ingen politikere støttet det', isCorrect: false },
              { id: 'b', text: 'Fordi motstanden var for sterk fra begge sider', isCorrect: true },
              { id: 'c', text: 'Fordi det var for dyrt å gjennomføre', isCorrect: false },
              { id: 'd', text: 'Fordi det aldri ble forsøkt', isCorrect: false },
            ],
            solution: 'Samnorsk-prosjektet mislyktes fordi motstanden var for sterk fra begge sider. Verken tilhengere av riksmål/bokmål eller landsmål/nynorsk ønsket å gi opp sitt språk.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-6-3-n-section4',
      type: 'text',
      content: `## Situasjonen i dag

I dag bruker omtrent 85% av nordmenn bokmål som sitt hovedmål, og omtrent 15% bruker nynorsk. Men alle nordmenn må lære begge språkene på skolen - hovedmål og sidemål.

Nynorsk er sterkest på Vestlandet og i fjellbygdene. Bokmål dominerer i byene og på Østlandet. Men grensene er ikke absolutte - det finnes nynorskkommuner i nord og bokmålskommuner i vest.

Begge språkene er sikret ved lov. Statsorganer må bruke begge. NRK må ha minst 25% nynorsk. Elever har rett til lærebøker på sitt språk.

Likevel føler mange nynorskbrukere seg under press. Det er vanskelig å være nynorskbruker i en bokmålsdominert verden. Noen kommuner og fylker har gått over fra nynorsk til bokmål. Andre kjemper iherdig for å bevare nynorsken.

Debatten er ikke over. Bør vi fortsatt ha sidemålsundervisning? Bør staten bruke ressurser på å støtte nynorsk? Eller bør vi bare la "markedet" bestemme? Svarene avhenger av hva vi mener språk er - bare et kommunikasjonsverktøy, eller en del av identiteten og kulturarven vår.`,
    },
    {
      id: 'norsk-vg3-6-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-6-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på situasjonen i dag:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-6-3-n-quiz4-q0',
            task: 'Omtrent hvor stor andel av nordmenn bruker nynorsk som hovedmål?',
            options: [
              { id: 'a', text: 'Omtrent 50%', isCorrect: false },
              { id: 'b', text: 'Omtrent 30%', isCorrect: false },
              { id: 'c', text: 'Omtrent 15%', isCorrect: true },
              { id: 'd', text: 'Under 5%', isCorrect: false },
            ],
            solution: 'Omtrent 15% av nordmenn bruker nynorsk som hovedmål, mens ca. 85% bruker bokmål. Nynorsk er sterkest på Vestlandet og i fjellbygdene.',
          },
          {
            id: 'norsk-vg3-6-3-n-quiz4-q1',
            task: 'Hvor er nynorsk sterkest i dag?',
            options: [
              { id: 'a', text: 'I Oslo og andre store byer', isCorrect: false },
              { id: 'b', text: 'På Østlandet og i Nord-Norge', isCorrect: false },
              { id: 'c', text: 'På Vestlandet og i fjellbygdene', isCorrect: true },
              { id: 'd', text: 'Jevnt fordelt over hele landet', isCorrect: false },
            ],
            solution: 'Nynorsk er sterkest på Vestlandet og i fjellbygdene. Bokmål dominerer i byene og på Østlandet, men grensene er ikke absolutte.',
          },
          {
            id: 'norsk-vg3-6-3-n-quiz4-q2',
            task: 'Hvilket krav stilles til NRK angående nynorsk?',
            options: [
              { id: 'a', text: 'NRK trenger ikke bruke nynorsk i det hele tatt', isCorrect: false },
              { id: 'b', text: 'NRK må ha minst 25% nynorsk', isCorrect: true },
              { id: 'c', text: 'NRK må sende 50% på nynorsk', isCorrect: false },
              { id: 'd', text: 'NRK må bare bruke nynorsk i nyheter', isCorrect: false },
            ],
            solution: 'NRK må ha minst 25% nynorsk i sine sendinger. Begge språkene er sikret ved lov, og statsorganer er pålagt å bruke begge.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-6-3-n-section5',
      type: 'text',
      content: `## Rikdom eller problem?

Er det å ha to skriftspråk en rikdom eller et problem? Svaret avhenger av perspektivet.

For noen er to skriftspråk upraktisk og dyrt. Det krever ressurser å produsere alt i to versjoner. Elevene må lære sidemål i tillegg til hovedmål. Byråkratiet blir mer komplisert.

For andre er tospråkligheten en kulturell rikdom. Den tvinger oss til å tenke over språk, til å være bevisste på ord og uttrykk. Den gir oss to måter å uttrykke oss på. Den bevarer båndene til dialektene og til den norrøne arven.

Det er også et demokratispørsmål. Nynorsk ble skapt for å gi vanlige folk et skriftspråk de kjente seg igjen i. Å avskaffe nynorsk ville være å si at den kampen var feil, at dialektene ikke fortjener et skriftspråk.

Kanskje er svaret ikke enten/eller, men både/og. Ja, to skriftspråk er krevende. Men det er også en del av det som gjør Norge til Norge.

Ivar Aasen skrev en gang: "Det gjeld ikkje um å gjera det norske til dansk; det gjeld um å gjera det danske til norsk." Kampen om språket handler om hvem vi er og hvem vi vil være. Den er ikke over ennå.`,
    },
    {
      id: 'norsk-vg3-6-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-6-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på debatten om to skriftspråk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-6-3-n-quiz5-q0',
            task: 'Hvilket argument brukes ofte FOR å beholde to skriftspråk?',
            options: [
              { id: 'a', text: 'Det er billigere enn å ha ett språk', isCorrect: false },
              { id: 'b', text: 'Det er en kulturell rikdom som bevarer båndene til dialekter og historie', isCorrect: true },
              { id: 'c', text: 'Alle land har to skriftspråk', isCorrect: false },
              { id: 'd', text: 'Elevene lærer bedre med to språk', isCorrect: false },
            ],
            solution: 'Tilhengere argumenterer med kulturell rikdom, bevaring av bånd til dialektene og den norrøne arven, og demokratisk verdi ved å gi alle et skriftspråk de kjenner seg igjen i.',
          },
          {
            id: 'norsk-vg3-6-3-n-quiz5-q1',
            task: 'Hvilket argument brukes MOT å ha to skriftspråk?',
            options: [
              { id: 'a', text: 'At nynorsk er et farlig språk', isCorrect: false },
              { id: 'b', text: 'At bokmål er mer korrekt enn nynorsk', isCorrect: false },
              { id: 'c', text: 'At det er upraktisk og ressurskrevende', isCorrect: true },
              { id: 'd', text: 'At det bryter med europeiske regler', isCorrect: false },
            ],
            solution: 'Kritikere mener at to skriftspråk er upraktisk og dyrt. Det krever ressurser å produsere alt i to versjoner, og elevene må lære sidemål i tillegg til hovedmål.',
          },
          {
            id: 'norsk-vg3-6-3-n-quiz5-q2',
            task: 'Hvorfor ble nynorsk opprinnelig skapt, ifølge teksten?',
            options: [
              { id: 'a', text: 'For å gjøre det lettere å lære dansk', isCorrect: false },
              { id: 'b', text: 'For å skape et språk for akademikere', isCorrect: false },
              { id: 'c', text: 'For å gi vanlige folk et skriftspråk de kjente seg igjen i', isCorrect: true },
              { id: 'd', text: 'For å erstatte samisk som minoritetsspråk', isCorrect: false },
            ],
            solution: 'Nynorsk ble skapt for å gi vanlige folk et skriftspråk de kjente seg igjen i. Å avskaffe nynorsk ville innebære å si at denne demokratiske kampen var feil.',
          },
        ],
      },
    },
    {
      id: 'norsk-vg3-6-3-n-summary',
      type: 'text',
      content: `## Oppsummering

**Bakgrunnen:**
- Etter 400 år i union med Danmark var skriftspråket dansk
- Folk snakket norske dialekter, men skrev dansk
- Stort gap mellom tale og skrift

**To veier:**
- **Ivar Aasen:** Skapte landsmål (nynorsk) basert på dialektene
- **Knud Knudsen:** Ville fornorske dansk-norsk (som ble bokmål)

**Språkstriden:**
- Over 100 år med intense debatter og reformer
- Samnorsk-prosjektet forsøkte å smelte språkene, men mislyktes
- Reformer i 1907, 1917, 1938 og senere

**Situasjonen i dag:**
- Ca. 85% bruker bokmål, ca. 15% bruker nynorsk
- Begge er offisielle og likestilte ved lov
- Sidemålsundervisning for alle
- Fortsatt debatt om framtiden

**Argumenter:**
- MOT to språk: Upraktisk, dyrt, komplisert
- FOR to språk: Kulturell rikdom, demokratisk verdi, bevaring av arv`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const NORSK_VG3_NARRATIV_DEL7_CHAPTERS = [
  CHAPTER_NORSK_VG3_5_1_NARRATIV,
  CHAPTER_NORSK_VG3_6_1_NARRATIV,
  CHAPTER_NORSK_VG3_6_3_NARRATIV,
];
