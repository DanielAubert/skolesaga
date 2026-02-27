/**
 * Norsk 10. klasse - Narrative versjoner Del 7 (Kapittel 9.1-9.6)
 *
 * Engasjerende, fortellende versjoner av kapitlene optimalisert for lesing/lytting.
 * Hver narrativ versjon linker tilbake til originalkapittelet via linkedChapterId.
 *
 * Hovedfil: textbook-content-norsk-10-narrativ.ts
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 9.1 NARRATIV: Multimodale tekster — Teori og analyse
// ============================================================================

export const CHAPTER_NORSK_10_9_1_NARRATIV: TextbookChapter = {
  id: 'norsk-10-9-1-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '9.1',
  title: 'Multimodale tekster — Teori og analyse',
  subtitle: 'Narrativ versjon',
  description: 'Forstå hvordan tekst, bilde, lyd og design samarbeider for å skape mening i alt du leser og ser.',
  estimatedMinutes: 40,
  competenceGoals: [
    'lese og analysere sammensatte tekster og vurdere hvordan ulike modaliteter spiller sammen',
    'bruke fagspråk til å beskrive samspillet mellom ulike uttrykksmåter i sammensatte tekster',
  ],
  linkedChapterId: 'norsk-10-9-1',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-10-9-1-n-intro',
      type: 'text',
      content: `## Mer enn bare ord

Åpne telefonen din. Se på en hvilken som helst app. Hva ser du? Farger, ikoner, tekst i ulike størrelser, bilder, kanskje en video som spiller automatisk. Nå lukk øynene og tenk: Hva om alt dette bare var ren tekst? Ingen farger, ingen bilder, ingen design. Bare svarte bokstaver på hvit bakgrunn. Ville du forstått det like godt? Ville du brukt appen like mye?

Svaret er nei. Vi lever i en verden der ren tekst nesten ikke eksisterer lenger. Nesten alt vi møter, fra nettsider til lærebøker, fra reklame til nyhetsartikler, bruker flere uttrykksmåter samtidig. Tekst, bilder, farger, typografi, layout, lyd, video, animasjon. Alle disse elementene jobber sammen for å skape mening. En tekst som kombinerer flere slike uttrykksmåter, kalles en multimodal tekst.

Begrepet semiotikk er nøkkelen til å forstå hvordan dette fungerer. Semiotikk er læren om tegn og hvordan de skaper mening. Alt kan være et tegn: et ord, et bilde, en farge, en lyd, en gest. Et rødt trafikklys betyr «stopp» ikke fordi det er noe iboende «stopp-aktig» ved fargen rød, men fordi vi som samfunn har blitt enige om den betydningen.

I dette kapittelet skal du lære å analysere multimodale tekster systematisk. Du skal forstå begrepene semiotisk ressurs, affordans og visuell grammatikk, og du skal kunne bruke dem til å forklare hvordan tekster skaper mening.`,
    },

    // ========== SEKSJON 1: Semiotiske ressurser og affordans ==========
    {
      id: 'norsk-10-9-1-n-section1',
      type: 'text',
      content: `## Semiotiske ressurser — Byggesteinene i mening

En semiotisk ressurs er ethvert middel som brukes til å kommunisere mening. Tekst er en semiotisk ressurs. Det samme er bilder, farger, typografi, layout, lyd og gester. Når du lager en PowerPoint-presentasjon, bruker du flere semiotiske ressurser samtidig: teksten på slidene, bildene du velger, fargene i designet, skrifttypene, og kanskje lyden av stemmen din når du presenterer.

Hvert av disse elementene har sin egen affordans, det vil si sine egne muligheter og begrensninger for hva det kan uttrykke. Tekst er for eksempel veldig god til å formidle abstrakte ideer, argumenter og nyanser. Men tekst er dårlig til å vise hvordan noe ser ut. Et bilde derimot kan vise et ansiktsuttrykk på et øyeblikk, noe som ville krevd mange ord å beskrive. Men bildet kan ikke si «på den andre siden» eller «imidlertid». Hver modalitet har sin styrke.

Visuell grammatikk er et begrep utviklet av forskerne Gunther Kress og Theo van Leeuwen. Det beskriver et system for hvordan bilder skaper mening gjennom komposisjon, farge, vinkler og avstand. Akkurat som skriftlig grammatikk har regler for hvordan ord settes sammen til setninger, har visuell grammatikk regler for hvordan visuelle elementer organiseres for å kommunisere.

Et eksempel: I vestlig kultur leser vi fra venstre mot høyre. Derfor plasseres det kjente og gitte gjerne til venstre i en komposisjon, mens det nye og viktige plasseres til høyre. Det som er plassert øverst, forbindes ofte med det ideelle, mens det nederst forbindes med det reelle og konkrete. Og sentrale elementer oppfattes som viktigere enn elementer i periferien.

Når du analyserer en multimodal tekst, spør deg selv: Hvilke semiotiske ressurser er brukt? Hva er affordansen til hver av dem? Og hvordan spiller de sammen for å skape en helhetlig mening?`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-10-9-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på semiotikk og multimodalitet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-9-1-n-quiz1-q0',
            task: 'Hva er en semiotisk ressurs?',
            options: [
              { id: 'a', text: 'En kilde til informasjon om tegn og symboler', isCorrect: false },
              { id: 'b', text: 'Ethvert middel som brukes til å kommunisere mening, som tekst, bilde eller farge', isCorrect: true },
              { id: 'c', text: 'Et synonym for et skriftlig dokument', isCorrect: false },
              { id: 'd', text: 'En økonomisk ressurs som brukes til å lage reklame', isCorrect: false },
            ],
            solution: 'En semiotisk ressurs er ethvert middel som brukes til å skape mening: tekst, bilder, farger, lyd, typografi, layout, gester og mange andre.',
          },
          {
            id: 'norsk-10-9-1-n-quiz1-q1',
            task: 'Hva betyr affordans i multimodal teori?',
            options: [
              { id: 'a', text: 'Prisen på å produsere en tekst', isCorrect: false },
              { id: 'b', text: 'Mulighetene og begrensningene en bestemt modalitet har for å uttrykke mening', isCorrect: true },
              { id: 'c', text: 'Antall modaliteter i en tekst', isCorrect: false },
              { id: 'd', text: 'Kvaliteten på en multimodal tekst', isCorrect: false },
            ],
            solution: 'Affordans handler om hva en modalitet er god til og hva den ikke kan gjøre. Tekst er god til abstrakte ideer, bilder er gode til å vise utseende, lyd er god til å skape stemning.',
          },
          {
            id: 'norsk-10-9-1-n-quiz1-q2',
            task: 'I visuell grammatikk: Hva betyr det at noe er plassert øverst i en komposisjon?',
            options: [
              { id: 'a', text: 'At det er minst viktig', isCorrect: false },
              { id: 'b', text: 'At det representerer det ideelle eller overordnede', isCorrect: true },
              { id: 'c', text: 'At det ble laget først', isCorrect: false },
              { id: 'd', text: 'At det er en overskrift', isCorrect: false },
            ],
            solution: 'I visuell grammatikk forbindes det øverste med det ideelle, drømmen eller løftet. Det nederste forbindes med det reelle og konkrete. Denne fordelingen brukes mye i reklame.',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Analyse i praksis ==========
    {
      id: 'norsk-10-9-1-n-section2',
      type: 'text',
      content: `## Å analysere en multimodal tekst — Steg for steg

Nå vet du hva semiotiske ressurser, affordans og visuell grammatikk er. Men hvordan bruker du dette i praksis? Her er en enkel fremgangsmåte du kan følge.

Start med å kartlegge modalitetene. Hvilke uttrykksmåter er brukt? Tekst, bilde, farge, typografi, layout, lyd, video? List opp alle du finner.

Deretter undersøker du hva hver modalitet bidrar med. Hva sier teksten? Hva viser bildene? Hvilken stemning skaper fargene? Hvilke assosiasjoner gir typografien? Husk at hver modalitet har sin affordans.

Så ser du på samspillet mellom modalitetene. Forskere bruker begrepet intersemiotisk relasjon for å beskrive hvordan ulike modaliteter forholder seg til hverandre. Noen ganger utfyller de hverandre: teksten forklarer det bildet viser. Andre ganger forsterker de hverandre: en dramatisk overskrift kombinert med et dramatisk bilde dobler effekten. Og noen ganger kan de motsi hverandre, for eksempel når en reklame viser glade mennesker mens den lille teksten nederst advarer om alvorlige bivirkninger.

Til slutt vurderer du helheten. Hva er hovedbudskapet i teksten? Hvem er målgruppen? Hva er formålet? Og fungerer teksten godt? Er det koherens, altså indre sammenheng, mellom de ulike elementene? Eller spriker det?

Denne fremgangsmåten fungerer på alt fra forsiden av en nettavis til en musikkvideos esteistikk. Jo mer du øver, jo bedre blir du til å se de bevisste valgene som ligger bak tilsynelatende tilfeldige tekster.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-10-9-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på multimodal analyse:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-9-1-n-quiz2-q0',
            task: 'Hva er en intersemiotisk relasjon?',
            options: [
              { id: 'a', text: 'Forholdet mellom ulike tekster', isCorrect: false },
              { id: 'b', text: 'Forholdet mellom ulike modaliteter i en tekst', isCorrect: true },
              { id: 'c', text: 'Forholdet mellom avsender og mottaker', isCorrect: false },
              { id: 'd', text: 'Forholdet mellom to semiotiske teorier', isCorrect: false },
            ],
            solution: 'En intersemiotisk relasjon beskriver hvordan ulike modaliteter forholder seg til hverandre: de kan utfylle, forsterke eller motsi hverandre.',
          },
          {
            id: 'norsk-10-9-1-n-quiz2-q1',
            task: 'Hva betyr koherens i en multimodal tekst?',
            options: [
              { id: 'a', text: 'At teksten bruker mange ulike modaliteter', isCorrect: false },
              { id: 'b', text: 'At alle elementene i teksten henger logisk og estetisk sammen', isCorrect: true },
              { id: 'c', text: 'At teksten er skrevet av en profesjonell', isCorrect: false },
              { id: 'd', text: 'At teksten er kort og konsis', isCorrect: false },
            ],
            solution: 'Koherens handler om indre sammenheng. I en koherent multimodal tekst støtter alle elementer det samme budskapet og skaper en helhetlig opplevelse.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-9-1-n-summary',
      type: 'text',
      content: `## Oppsummering: Se det usynlige

**Multimodale tekster** kombinerer flere uttrykksmåter (modaliteter) for å skape mening. De er overalt i vår digitale hverdag.

**Semiotikk** er læren om tegn og meningsskaping. **Semiotiske ressurser** er alle midlene vi bruker for å kommunisere.

**Affordans** beskriver hva en modalitet er god til og hva den ikke kan gjøre.

**Visuell grammatikk** er et system for å analysere hvordan bilder skaper mening gjennom plassering, farge, vinkel og komposisjon.

**Intersemiotiske relasjoner** beskriver samspillet mellom ulike modaliteter. De kan utfylle, forsterke eller motsi hverandre.

**Koherens** er den indre sammenhengen i en tekst, der alle elementer støtter helheten.

**Nøkkelbegreper:** Multimodalitet, semiotikk, semiotisk ressurs, affordans, visuell grammatikk, intersemiotisk relasjon, koherens.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9.2 NARRATIV: Filmanalyse
// ============================================================================

export const CHAPTER_NORSK_10_9_2_NARRATIV: TextbookChapter = {
  id: 'norsk-10-9-2-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '9.2',
  title: 'Filmanalyse',
  subtitle: 'Narrativ versjon',
  description: 'Lær å se det du vanligvis ikke legger merke til: hvordan kameravinkler, klipping og mise-en-scene skaper mening i film.',
  estimatedMinutes: 40,
  competenceGoals: [
    'analysere og tolke film og andre sammensatte tekster med fagbegreper',
    'reflektere over hvordan filmskapere bruker virkemidler for å påvirke mottakeren',
  ],
  linkedChapterId: 'norsk-10-9-2',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-10-9-2-n-intro',
      type: 'text',
      content: `## Hvorfor gråter du i kino?

Du har sikkert opplevd det: Du sitter i en mørk kinosal, og plutselig renner tårene. Eller hjertet hamrer. Eller du holder pusten. Filmen har grepet tak i deg på en måte som føles nesten fysisk. Men har du noen gang stoppet opp og spurt deg selv: Hvordan fikk de meg til å føle dette?

Svaret er filmspråk. Akkurat som en forfatter bruker ord, setninger og avsnitt for å bygge en historie, bruker en filmskaper bilder, lyder, klipping og kamerabevegelser. Og akkurat som du kan analysere en tekst for å forstå hvordan den virker, kan du analysere en film.

Filmanalyse handler ikke om å «ødelegge» filmopplevelsen. Tvert imot. Når du forstår hvordan film fungerer, setter du enda mer pris på gode filmer. Du ser det du aldri så før: det bevisste valget av kameravinkel, den subtile bruken av musikk, den nøye planlagte klippingen som bygger spenning. Du går fra å være en passiv seer til en aktiv leser av filmens språk.`,
    },

    // ========== SEKSJON 1: Kameravinkler og mise-en-scene ==========
    {
      id: 'norsk-10-9-2-n-section1',
      type: 'text',
      content: `## Kameraets makt

Kameraet er filmens øye, og den som kontrollerer kameraet, kontrollerer hva du ser og hvordan du oppfatter det. Kameravinkel, bildeutsnitt og kamerabevegelse er tre av de viktigste verktøyene en filmskaper har.

Kameravinkelen forteller deg mye om maktforholdet mellom karakterene. Et froskeperspektiv, der kameraet ser opp på en person, gjør personen stor og mektig. Et fugleperspektiv, der kameraet ser ned, gjør personen liten og sårbar. Og et normalvinkelbilde, der kameraet er i øyenhøyde, skaper et inntrykk av likeverd mellom seeren og karakteren.

Bildeutsnittet bestemmer hvor nært du er. Et totalbilde viser hele personen og omgivelsene, og brukes ofte for å etablere en scene. Et halvnært bilde viser personen fra livet og opp, og er det vanligste utsnittet i dialogscener. Et nært bilde viser bare ansiktet og gir deg tilgang til karakterens følelser. Og et ultranært bilde, der bare øynene eller munnen fyller skjermen, skaper intimitet eller ubehag.

Mise-en-scene er et fransk uttrykk som betyr «det som er satt i scene». Det omfatter alt du ser i filmbildet: skuespillernes plassering og bevegelser, kulisser og rekvisitter, belysning og farger, kostymer og sminke. Ingenting i en god film er tilfeldig. Hvis en karakter er kledd i mørke farger, er det et bevisst valg. Hvis et rom er opplyst med kaldt blått lys, sender det et signal om stemning.

Belysningen forteller deg ofte mer enn dialogen. Varmt lys skaper trygghet og intimitet. Kaldt lys skaper distanse og uhygge. Sterke skygger skaper dramatikk og mystikk. Og kontrasten mellom lys og mørke i et ansikt kan symbolisere en karakter som er splittet mellom godt og ondt.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-10-9-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på filmspråk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-9-2-n-quiz1-q0',
            task: 'Hva formidler et froskeperspektiv vanligvis?',
            options: [
              { id: 'a', text: 'At personen er liten og sårbar', isCorrect: false },
              { id: 'b', text: 'At personen er mektig og dominerende', isCorrect: true },
              { id: 'c', text: 'At personen er morsom', isCorrect: false },
              { id: 'd', text: 'At scenen er romantisk', isCorrect: false },
            ],
            solution: 'Froskeperspektiv betyr at kameraet ser opp på personen, noe som gjør vedkommende stor og mektig i bildet. Det brukes ofte for å vise autoritet eller makt.',
          },
          {
            id: 'norsk-10-9-2-n-quiz1-q1',
            task: 'Hva omfatter mise-en-scene?',
            options: [
              { id: 'a', text: 'Bare skuespillernes dialoger', isCorrect: false },
              { id: 'b', text: 'Alt som er synlig i filmbildet: skuespillere, kulisser, belysning, kostymer', isCorrect: true },
              { id: 'c', text: 'Bare musikken i filmen', isCorrect: false },
              { id: 'd', text: 'Regissørens instruksjoner til skuespillerne', isCorrect: false },
            ],
            solution: 'Mise-en-scene (det som er satt i scene) omfatter alt du ser i filmbildet: skuespillernes plassering, kulisser, rekvisitter, belysning, farger og kostymer.',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Klipping og lyd ==========
    {
      id: 'norsk-10-9-2-n-section2',
      type: 'text',
      content: `## Klipping — Filmens usynlige kunst

Klipping er kanskje det mest undervurderte virkemiddelet i film. God klipping er usynlig. Du merker den ikke. Dårlig klipping hopper i øynene. Men det er klippingen som skaper tempo, bygger spenning, styrer oppmerksomheten din og knytter scener sammen til en sammenhengende fortelling.

Den mest grunnleggende klippeteknikken er klipp-motklipp, der kameraet veksler mellom to personer i en dialog. Du ser den som snakker, deretter den som lytter, og tilbake igjen. Denne teknikken er så vanlig at du ikke tenker over den, men den er avgjørende for å skape illusjonen av en naturlig samtale.

Parallellklipping betyr at filmen kutter mellom to eller flere handlinger som skjer samtidig. Dette brukes ofte i spenningsscener: vi ser helten som løper mot bygningen, og vi ser bomben som tikker inne i bygningen. Klippingen veksler raskere og raskere mellom de to, og spenningen øker.

Jumpcut er et klipp der vi hopper fremover i tid innenfor samme scene. Det kan skape en følelse av rastløshet eller desorientering, og brukes ofte i kunstfilm eller for å vise at en karakter er forvirret.

Lyden i film er like viktig som bildet, selv om vi ofte glemmer den. Filmmusikken styrer følelsene dine: den forteller deg når du skal være redd, når du skal være trist, og når du skal føle håp. Lydeffekter bygger opp verdenen: trafikkstøy, fuglesang, drypende vann. Og stillhet kan være det mest kraftfulle virkemiddelet av alle. Når lyden plutselig forsvinner, merker du det umiddelbart.

Diegetisk lyd er lyd som eksisterer innenfor filmens verden, lyd som karakterene kan høre: en bil som starter, en telefon som ringer. Ikke-diegetisk lyd er lyd lagt over filmen, som filmmusikk eller en fortellerstemme. Forskjellen er viktig for analysen.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-10-9-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på klipping og lyd:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-9-2-n-quiz2-q0',
            task: 'Hva er parallellklipping?',
            options: [
              { id: 'a', text: 'Å klippe filmen i to deler', isCorrect: false },
              { id: 'b', text: 'Å veksle mellom to eller flere handlinger som skjer samtidig', isCorrect: true },
              { id: 'c', text: 'Å vise to scener side om side på skjermen', isCorrect: false },
              { id: 'd', text: 'Å bruke to kameraer til å filme samme scene', isCorrect: false },
            ],
            solution: 'Parallellklipping veksler mellom to eller flere samtidige handlinger. Det brukes ofte i spenningsscener for å bygge opp mot et klimaks.',
          },
          {
            id: 'norsk-10-9-2-n-quiz2-q1',
            task: 'Hva er forskjellen mellom diegetisk og ikke-diegetisk lyd?',
            options: [
              { id: 'a', text: 'Diegetisk lyd er høyere enn ikke-diegetisk', isCorrect: false },
              { id: 'b', text: 'Diegetisk lyd eksisterer i filmens verden, ikke-diegetisk lyd er lagt over', isCorrect: true },
              { id: 'c', text: 'Diegetisk lyd er naturlig, ikke-diegetisk er kunstig', isCorrect: false },
              { id: 'd', text: 'Diegetisk lyd brukes i dokumentarer, ikke-diegetisk i spillefilm', isCorrect: false },
            ],
            solution: 'Diegetisk lyd hører hjemme i filmens verden (karakterene kan høre den). Ikke-diegetisk lyd er lagt over filmen (f.eks. filmmusikk eller fortellerstemme).',
          },
          {
            id: 'norsk-10-9-2-n-quiz2-q2',
            task: 'Hvorfor kan stillhet være et kraftfullt virkemiddel i film?',
            options: [
              { id: 'a', text: 'Fordi det sparer penger å ikke bruke musikk', isCorrect: false },
              { id: 'b', text: 'Fordi det gjør filmen kortere', isCorrect: false },
              { id: 'c', text: 'Fordi det skaper kontrast og trekker oppmerksomheten til bildet', isCorrect: true },
              { id: 'd', text: 'Fordi det er mer realistisk enn musikk', isCorrect: false },
            ],
            solution: 'Stillhet skaper kontrast til lyd og trekker oppmerksomheten til det visuelle. Den kan signalisere sjokk, spenning eller emosjonell intensitet.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-9-2-n-summary',
      type: 'text',
      content: `## Oppsummering: Se filmen bak filmen

**Kameravinkler** kommuniserer maktforhold: froskeperspektiv (makt), fugleperspektiv (sårbarhet), normalvinkel (likeverd).

**Bildeutsnitt** styrer nærhet: totalbilde (kontekst), halvnært (dialog), nært (følelser), ultranært (intensitet).

**Mise-en-scene** er alt synlig i bildet: skuespillere, kulisser, belysning, kostymer, farger. Ingenting er tilfeldig.

**Klipping** skaper tempo og sammenheng. Klipp-motklipp, parallellklipping og jumpcut er viktige teknikker.

**Lyd** styrer følelser. Diegetisk lyd eksisterer i filmens verden, ikke-diegetisk lyd er lagt over. Stillhet kan være det mest kraftfulle virkemiddelet.

**Nøkkelbegreper:** Kameravinkel, froskeperspektiv, fugleperspektiv, mise-en-scene, klipping, parallellklipping, diegetisk lyd, filmmusikk.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9.3 NARRATIV: Tegneserier og grafiske noveller
// ============================================================================

export const CHAPTER_NORSK_10_9_3_NARRATIV: TextbookChapter = {
  id: 'norsk-10-9-3-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '9.3',
  title: 'Tegneserier og grafiske noveller',
  subtitle: 'Narrativ versjon',
  description: 'Oppdag tegneseriens unike språk og hvordan ruter, overganger og visuell fortelling skaper mening.',
  estimatedMinutes: 40,
  competenceGoals: [
    'lese og analysere sammensatte tekster og vurdere hvordan ulike modaliteter spiller sammen',
    'forstå tegneseriens virkemidler og analysere grafiske fortellinger',
  ],
  linkedChapterId: 'norsk-10-9-3',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-10-9-3-n-intro',
      type: 'text',
      content: `## Ikke bare for barn

Det var en gang da tegneserier ble sett på som useriøs underholdning for barn. Donald Duck, Pondus, Nemi. Morsomt, men ikke noe å ta seriøst. Den tiden er forbi. I dag regnes grafiske noveller som en av de mest spennende kunstformene som finnes. Maus av Art Spiegelman, som forteller historien om Holocaust gjennom tegninger der jøder er mus og nazister er katter, vant Pulitzer-prisen. Persepolis av Marjane Satrapi, om å vokse opp under den iranske revolusjonen, regnes som et litterært mesterverk.

Tegneserien er faktisk et av de eldste mediene vi har. Hulemaleriene i Lascaux i Frankrike, over 17 000 år gamle, forteller historier gjennom bilder i sekvens. Egyptiske hieroglyfer, middelalderens Bayeux-teppet, japanske tresnitt, alle bruker den samme grunnleggende teknikken: å fortelle en historie gjennom bilder satt i rekkefølge.

Men tegneserien er mer enn bare bilder etter hverandre. Den har et eget sofistikert språk med egne regler og konvensjoner. Ruter, marger, snakkebobler, lydord, bevegelseslinjer og visuelle metaforer skaper sammen et unikt uttrykk som verken tekst, film eller bildekunst kan kopiere. For å forstå og analysere tegneserier trenger du å kjenne dette språket.`,
    },

    // ========== SEKSJON 1: Rutenes språk ==========
    {
      id: 'norsk-10-9-3-n-section1',
      type: 'text',
      content: `## Rutenes språk — Tid, rom og fortelling

Det mest grunnleggende elementet i en tegneserie er ruten, den innrammede bildeflaten som inneholder et øyeblikk av historien. Men ruten er mye mer enn bare en ramme. Dens størrelse, form og plassering kommuniserer mening.

En stor rute signaliserer at øyeblikket er viktig. Den ber deg stoppe opp og ta inn det som skjer. En liten rute formidler det hverdagslige, det som passerer raskt. En rute uten ramme, et såkalt utfallende bilde, antyder at øyeblikket strekker seg ut over grensene, at det er noe grenseløst eller uendelig ved det.

Mellom rutene finnes det som tegneserieforskeren Scott McCloud kaller «the gutter», altså mellomrommet. Og det er her noe magisk skjer. I mellomrommet mellom to ruter fyller hjernen din inn det som mangler. Du ser en hånd som løfter en kniv i en rute, og i neste rute hører du et skrik. Hjernen din konstruerer automatisk handlingen som skjer mellom de to rutene. McCloud kaller dette «closure», og det er en av tegneseriens mest kraftfulle mekanismer. Leseren er ikke bare en passiv mottaker, men en aktiv medskapare av historien.

Snakkeboblene har sin egen grammatikk. En vanlig snakkeboble med jevn omriss signaliserer normal tale. En takket boble signaliserer rop eller sinne. En boble med skyer eller bobler signaliserer tanker. En firkant med pekeren utenfor bildet signaliserer en fortellerstemme. Og typografien inne i boblen kan variere for å vise volum, følelse og intensitet.

Lydord, også kalt onomatopoetika, er ord som etterligner lyder: BANG, SPLASH, KRASJ. I tegneserier er de ofte tegnet som en del av bildet, med egen typografi og farger som forsterker opplevelsen av lyden visuelt.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-10-9-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på tegneseriens virkemidler:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-9-3-n-quiz1-q0',
            task: 'Hva er «closure» i tegneseriesammenheng (Scott McCloud)?',
            options: [
              { id: 'a', text: 'At en tegneserie har en avslutning', isCorrect: false },
              { id: 'b', text: 'At leseren fyller inn handling som skjer mellom rutene', isCorrect: true },
              { id: 'c', text: 'At rutene er lukket med en ramme', isCorrect: false },
              { id: 'd', text: 'At snakkeboblene er lukket', isCorrect: false },
            ],
            solution: 'Closure er leserens mentale prosess der hjernen automatisk fyller inn handlingen mellom to ruter. Det gjør leseren til en aktiv medskapare av historien.',
          },
          {
            id: 'norsk-10-9-3-n-quiz1-q1',
            task: 'Hva signaliserer en snakkeboble med takket omriss?',
            options: [
              { id: 'a', text: 'At personen hvisker', isCorrect: false },
              { id: 'b', text: 'At personen tenker', isCorrect: false },
              { id: 'c', text: 'At personen roper eller er sint', isCorrect: true },
              { id: 'd', text: 'At personen snakker i telefonen', isCorrect: false },
            ],
            solution: 'En takket snakkeboble (med ujevne kanter) signaliserer vanligvis rop, sinne eller kraftig stemmebruk. Den visuelle formen forsterker innholdet.',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Visuell fortelling ==========
    {
      id: 'norsk-10-9-3-n-section2',
      type: 'text',
      content: `## Visuell fortelling — Når bilder gjør det ord ikke kan

Tegneserien har noen unike styrker som skiller den fra andre medier. En av dem er evnen til å kombinere det konkrete og det abstrakte i samme bilde. En tegner kan vise en realistisk person som står i et abstrakt landskap av følelser. Hjerter, lynnedslag, spiraler over hodet, alle er visuelle metaforer som vi umiddelbart forstår uten at noen trenger å forklare dem.

Grafiske noveller utnytter disse mulighetene til fulle. En grafisk novelle er en lengre, sammenhengende fortelling i tegneserieformat. I motsetning til en tradisjonell tegneserie med korte striper eller episoder, forteller den grafiske novellen en hel historie med dyp karakterutvikling, komplekse temaer og kunstnerisk ambisjon.

Stilen i tegningen er også et virkemiddel. En realistisk tegnestil signaliserer alvor og troverdighet. En karikert, forenklet stil kan skape humor eller gjøre det lettere for leseren å identifisere seg med karakteren. McCloud har pekt på at jo mer forenklet en figur er, jo lettere er det for leseren å «se seg selv» i den. Det er en av grunnene til at mange av verdens mest populære tegneseriefigurer har svært enkle ansikter.

Fargebruk er et annet viktig virkemiddel. Mange grafiske noveller bruker et begrenset fargepalett for å skape stemning. Maus er tegnet i svart-hvitt for å understreke alvoret i historien. Persepolis bruker samme teknikk. Andre grafiske noveller bruker farger ekspressivt, der fargevalget forsterker følelsene i scenen.

Neste gang du leser en tegneserie eller grafisk novelle, prøv å legge merke til alle disse valgene. Rutestørrelse, tegnestil, farger, snakkebobler, mellomrom. Alt er bevisst, alt kommuniserer noe.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-10-9-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på grafiske noveller:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-9-3-n-quiz2-q0',
            task: 'Hva skiller en grafisk novelle fra en vanlig tegneserie?',
            options: [
              { id: 'a', text: 'En grafisk novelle er alltid i farger', isCorrect: false },
              { id: 'b', text: 'En grafisk novelle er en lengre, sammenhengende fortelling med kunstnerisk ambisjon', isCorrect: true },
              { id: 'c', text: 'En grafisk novelle har ingen snakkebobler', isCorrect: false },
              { id: 'd', text: 'Det er ingen forskjell', isCorrect: false },
            ],
            solution: 'En grafisk novelle skiller seg fra en vanlig tegneserie ved å være en lengre, sammenhengende fortelling med dyp karakterutvikling, komplekse temaer og kunstnerisk ambisjon.',
          },
          {
            id: 'norsk-10-9-3-n-quiz2-q1',
            task: 'Ifølge Scott McCloud: Hvorfor er forenklede tegneseriefigurer ofte mer engasjerende?',
            options: [
              { id: 'a', text: 'Fordi de er raskere å tegne', isCorrect: false },
              { id: 'b', text: 'Fordi de er morsommere enn realistiske figurer', isCorrect: false },
              { id: 'c', text: 'Fordi det er lettere for leseren å identifisere seg med en forenklet figur', isCorrect: true },
              { id: 'd', text: 'Fordi barn foretrekker enkel kunst', isCorrect: false },
            ],
            solution: 'McCloud argumenterer for at en forenklet figur fungerer som et «tomt skall» som leseren kan fylle med seg selv. Jo mer abstrakt figuren er, jo lettere er identifikasjonen.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-9-3-n-summary',
      type: 'text',
      content: `## Oppsummering: Bildenes fortellerkraft

**Tegneserier** har et eget sofistikert språk med ruter, snakkebobler, lydord og visuelle metaforer.

**Ruten** er det grunnleggende elementet. Størrelse, form og plassering kommuniserer mening.

**Closure** er leserens prosess med å fylle inn handling mellom rutene. Leseren er en aktiv medskapare av historien.

**Grafiske noveller** er lengre, sammenhengende fortellinger i tegneserieformat med kunstnerisk ambisjon.

**Tegnestil og farger** er bevisste virkemidler. Realistisk stil signaliserer alvor, forenklet stil inviterer til identifikasjon.

**Nøkkelbegreper:** Rute, margin, closure, snakkeboble, lydord, grafisk novelle, visuell metafor, tegnestil.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9.4 NARRATIV: Digital fortelling og podcasting
// ============================================================================

export const CHAPTER_NORSK_10_9_4_NARRATIV: TextbookChapter = {
  id: 'norsk-10-9-4-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '9.4',
  title: 'Digital fortelling og podcasting',
  subtitle: 'Narrativ versjon',
  description: 'Lær kunsten å fortelle historier med lyd, bilde og teknologi i den digitale tidsalderen.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke digitale verktøy til å produsere sammensatte tekster',
    'utforske og reflektere over ulike former for digital fortelling',
  ],
  linkedChapterId: 'norsk-10-9-4',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-10-9-4-n-intro',
      type: 'text',
      content: `## Alle er fortellere nå

For bare tjue år siden trengte du et filmstudio for å lage en film, et trykkeri for å publisere en bok, og en radiostasjon for å sende en sending. I dag trenger du bare en telefon. Verktøyene for å fortelle historier er blitt demokratisert. Alle kan lage en podkast, en kort dokumentar, en digital fortelling eller en animasjon, og publisere den for hele verden.

Digital fortelling er et samlebegrep for fortellinger som bruker digitale verktøy og medier. Det kan være en kort video der bilder og fortellerstemme forteller en personlig historie. Det kan være en podkast-episode der intervjuer, musikk og lydeffekter skaper en engasjerende lytte­opplevelse. Det kan være en interaktiv nettfortelling der leseren klikker seg gjennom historien. Fellesnevneren er at digital teknologi brukes til å kombinere ulike uttrykksformer.

Podkasting har eksplodert de siste årene. Fra hobbyprosjekter i garasjer til profesjonelle produksjoner med millioner av lyttere. Podkaster dekker alt fra sann krim til vitenskapelig formidling, fra politisk debatt til personlige historier. Og for deg som elev er podkasting en utmerket måte å øve på formidling, fordi du må tenke nøye gjennom hvordan du bruker stemmen, strukturerer fortellingen og engasjerer lytteren.`,
    },

    // ========== SEKSJON 1: Fortellerteknikk ==========
    {
      id: 'norsk-10-9-4-n-section1',
      type: 'text',
      content: `## Fortellerteknikk i lyd og bilde

Uansett om du lager en podkast, en kort film eller en digital fortelling, gjelder de samme grunnleggende prinsippene for god fortelling. Du trenger en hook, altså noe som fanger oppmerksomheten med en gang. Du trenger en struktur som holder lytteren eller seeren engasjert gjennom hele fortellingen. Og du trenger en avslutning som gir en følelse av helhet.

I podkasting er stemmen ditt viktigste verktøy. Variasjon i tempo, volum og toneleie holder lytteren interessert. Pauser er like viktige som ord. En velplassert pause etter en dramatisk setning lar informasjonen synke inn og skaper spenning for det som kommer neste.

Lyddesign er den usynlige kunsten som skiller en god podkast fra en middelmådig. Det handler om mer enn bare god lydkvalitet. Det handler om bevisst bruk av musikk, lydeffekter og romklang for å skape stemning og understreke fortellingens temaer. En podkast om havet kan bruke bølgelyder i bakgrunnen. En podkast om kriminalitet kan bruke mørk, spenningsfull musikk. Og noen ganger er fraværet av bakgrunnslyd det mest effektive: ren stemme, uten noe annet, skaper en intim, direkte forbindelse med lytteren.

I digital fortelling med bilder er det viktig å tenke på samspillet mellom visuelt og verbalt. Ikke si det bildet allerede viser. Bruk fortellerstemmen til å legge til informasjon som bildet ikke kan formidle: følelser, tanker, kontekst, refleksjoner. La bildene og ordene utfylle hverandre, ikke gjenta hverandre.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-10-9-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på digital fortelling:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-9-4-n-quiz1-q0',
            task: 'Hva er en «hook» i fortellerteknikk?',
            options: [
              { id: 'a', text: 'Avslutningen som oppsummerer historien', isCorrect: false },
              { id: 'b', text: 'Noe som fanger oppmerksomheten helt i starten', isCorrect: true },
              { id: 'c', text: 'Et verktøy for å redigere lyd', isCorrect: false },
              { id: 'd', text: 'En type mikrofon for podkasting', isCorrect: false },
            ],
            solution: 'En hook (krok) er det som fanger lytterens eller seerens oppmerksomhet helt i starten. Det kan være et spørsmål, en overraskende påstand eller et dramatisk lydklipp.',
          },
          {
            id: 'norsk-10-9-4-n-quiz1-q1',
            task: 'Hva er lyddesign i podkasting?',
            options: [
              { id: 'a', text: 'Å kjøpe dyrt lydutstyr', isCorrect: false },
              { id: 'b', text: 'Bevisst bruk av musikk, lydeffekter og romklang for å skape stemning', isCorrect: true },
              { id: 'c', text: 'Å snakke med pen stemme', isCorrect: false },
              { id: 'd', text: 'Å fjerne all bakgrunnsstøy', isCorrect: false },
            ],
            solution: 'Lyddesign handler om bevisst bruk av musikalske og lydmessige elementer for å forsterke fortellingen og skape den riktige stemningen for lytteren.',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Produksjon i praksis ==========
    {
      id: 'norsk-10-9-4-n-section2',
      type: 'text',
      content: `## Fra ide til ferdig produkt

Å lage en god digital fortelling eller podkast krever planlegging. Mange nybegynnere gjør feilen med å bare starte opptak uten en plan, og resultatet blir rotete og uengasjerende. Her er en enkel prosess du kan følge.

Planleggingsfasen er den viktigste. Bestem deg for hva historien din handler om og hvem målgruppen er. Lag en disposisjon eller et manus. For en podkast trenger du ikke et ord-for-ord-manus, men du bør ha en oversikt over hovedpoengene, rekkefølgen og overgangene. For en digital fortelling med bilder bør du lage et storyboard, en visuell plan som viser hvilke bilder som hører til hvilken del av fortellingen.

I produksjonsfasen gjør du opptakene. For podkast trenger du en god mikrofon (smarttelefonen din kan fungere i en knipe), et stille rom og kanskje en enkel redigeringsprogramvare. For digital fortelling trenger du bilder (egne fotos, arkivbilder, tegninger) og en måte å kombinere dem med fortellerstemme.

Etterarbeidet er der magien skjer. Her klipper du bort det som ikke fungerer, legger til musikk og lydeffekter, justerer volumet og tempoet, og finpusser overgangene. Gode fortellere vet at etterarbeidet ofte tar like lang tid som selve opptaket, noen ganger mer.

Til slutt publiserer du. Podkaster kan publiseres på plattformer som Spotify og Apple Podcasts. Digitale fortellinger kan deles på YouTube, Vimeo eller skolens egen plattform. Og husk: det trenger ikke være perfekt. Det viktigste er at du forteller en historie som betyr noe for deg, på en måte som engasjerer andre.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-10-9-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på produksjon:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-9-4-n-quiz2-q0',
            task: 'Hva er et storyboard?',
            options: [
              { id: 'a', text: 'En type brettstykke brukt til å filme på', isCorrect: false },
              { id: 'b', text: 'En visuell plan som viser hvilke bilder som hører til hvilken del av fortellingen', isCorrect: true },
              { id: 'c', text: 'En programvare for å redigere lyd', isCorrect: false },
              { id: 'd', text: 'En liste over historier man vil fortelle', isCorrect: false },
            ],
            solution: 'Et storyboard er en visuell plan med tegninger eller bilder som viser sekvensen av scener i en fortelling. Det er et viktig planleggingsverktøy for film og digital fortelling.',
          },
          {
            id: 'norsk-10-9-4-n-quiz2-q1',
            task: 'Hvilken fase i produksjonen er ofte den mest tidkrevende?',
            options: [
              { id: 'a', text: 'Planlegging', isCorrect: false },
              { id: 'b', text: 'Opptak', isCorrect: false },
              { id: 'c', text: 'Etterarbeid (redigering)', isCorrect: true },
              { id: 'd', text: 'Publisering', isCorrect: false },
            ],
            solution: 'Etterarbeidet tar ofte like lang tid som, eller lenger enn, opptaket. Her klipper du, legger til musikk, justerer lyd og finpusser fortellingen.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-9-4-n-summary',
      type: 'text',
      content: `## Oppsummering: Fortell din historie

**Digital fortelling** bruker digitale verktøy til å kombinere tekst, bilde, lyd og video til engasjerende fortellinger.

**Podkasting** er lydbasert fortelling der stemme, musikk og lydeffekter skaper engasjement. God lyddesign er avgjørende.

**Fortellerteknikk** krever en hook, en god struktur og en meningsfull avslutning. Pauser er like viktige som ord.

**Produksjonsprosessen** består av planlegging (disposisjon/manus/storyboard), produksjon (opptak) og etterarbeid (redigering).

**Alle kan fortelle.** Med en telefon og kreativitet kan du skape fortellinger som engasjerer og beveger.

**Nøkkelbegreper:** Digital fortelling, podkasting, lyddesign, hook, storyboard, fortellerteknikk, etterarbeid.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9.5 NARRATIV: Adaptasjon — Fra bok til film
// ============================================================================

export const CHAPTER_NORSK_10_9_5_NARRATIV: TextbookChapter = {
  id: 'norsk-10-9-5-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '9.5',
  title: 'Adaptasjon — Fra bok til film',
  subtitle: 'Narrativ versjon',
  description: 'Forstå hva som skjer når en historie overføres fra ett medium til et annet, og hvorfor filmen aldri er «like god som boken».',
  estimatedMinutes: 40,
  competenceGoals: [
    'sammenligne tekster i ulike medier og vurdere hvordan overføringen påvirker innholdet',
    'reflektere over muligheter og begrensninger i ulike medier',
  ],
  linkedChapterId: 'norsk-10-9-5',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-10-9-5-n-intro',
      type: 'text',
      content: `## «Boken var bedre»

Du har sikkert hørt det, kanskje til og med sagt det selv. Noen har lest en bok og elsket den, og så sett filmversjonen og blitt skuffet. «De kuttet favorittscenen min!» «Karakteren ser ikke ut slik jeg forestilte meg!» «Boken var mye bedre.»

Men er det rettferdig å sammenligne en bok og en film på den måten? Det er som å sammenligne et maleri med en sang bare fordi begge handler om kjærlighet. En bok og en film er fundamentalt forskjellige medier med forskjellige styrker og begrensninger. Når en historie overføres fra ett medium til et annet, gjennomgår den en forvandling. Noe må legges til, noe må fjernes, og noe må forandres. Denne prosessen kalles adaptasjon, eller medieoverføring.

Adaptasjon er overalt. Harry Potter ble bok, film, teater og dataspill. Romeo og Julie har vært teaterstykke, opera, ballett, film (mange ganger), og til og med en Baz Luhrmann-film med skyting og hawaískjorter. Hver adaptasjon skaper noe nytt fordi hvert medium har sin egen logikk, sine egne affordanser. Og det er nettopp dette som gjør adaptasjon så interessant å studere.`,
    },

    // ========== SEKSJON 1: Medieoverføring ==========
    {
      id: 'norsk-10-9-5-n-section1',
      type: 'text',
      content: `## Hva endrer seg når mediet endres?

Når en bok blir til film, skjer det en rekke nødvendige forandringer. Noen er praktiske, andre er kunstneriske.

Den mest åpenbare utfordringen er tid. En bok på 400 sider kan gi deg timer med leseopplevelse. En film varer vanligvis to timer. Det betyr at mye av bokens innhold må kuttes. Sekundære karakterer forsvinner, sidehandlinger strykes, og komplekse indre monologer må erstattes med visuelle uttrykk. Dette er uunngåelig og er ikke et tegn på at filmskaperen har mislyktes. Det er en konsekvens av mediets affordans.

Indre liv er en annen stor utfordring. Boken kan gi deg direkte tilgang til en karakters tanker. Du kan lese nøyaktig hva hovedpersonen tenker og føler. Film har ikke den muligheten, i hvert fall ikke uten å ty til fortellerstemme, som ofte oppfattes som en svak løsning. I stedet må filmskaperen vise følelsene gjennom skuespillerens ansiktsuttrykk, kroppsspråk, kameravinkler og musikk.

Men filmen har også styrker som boken mangler. Bildet kan kommunisere enorme mengder informasjon på et øyeblikk. En enkelt filminnstilling av en karakter som står alene i et tomt rom, forteller deg umiddelbart om ensomhet, uten et eneste ord. Musikk kan skape følelser som ord ikke kan fange. Og skuespillerens fysiske tilstedeværelse gir karakteren en konkrethet som bokens beskrivelser aldri helt kan matche.

Dermed er det ikke slik at boken er «bedre» enn filmen eller omvendt. De er forskjellige uttrykk av den samme historien, og begge har kvaliteter som det andre mangler.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-10-9-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på adaptasjon:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-9-5-n-quiz1-q0',
            task: 'Hvorfor må innhold kuttes når en bok blir til film?',
            options: [
              { id: 'a', text: 'Fordi filmskapere er late', isCorrect: false },
              { id: 'b', text: 'Fordi film har begrenset tid, vanligvis rundt to timer', isCorrect: true },
              { id: 'c', text: 'Fordi publikum ikke liker lange filmer', isCorrect: false },
              { id: 'd', text: 'Fordi det er for dyrt å filme alt', isCorrect: false },
            ],
            solution: 'Film er et tidsbasert medium med typisk to timers varighet. En bok på 400 sider inneholder langt mer innhold enn det er plass til i en film, så mye må nødvendigvis kuttes.',
          },
          {
            id: 'norsk-10-9-5-n-quiz1-q1',
            task: 'Hva er en stor utfordring med å vise karakterers indre tanker i film?',
            options: [
              { id: 'a', text: 'Skuespillere kan ikke tenke overbevisende', isCorrect: false },
              { id: 'b', text: 'Film har ikke direkte tilgang til karakterers tanker, slik boken har', isCorrect: true },
              { id: 'c', text: 'Tanker er ikke viktige i film', isCorrect: false },
              { id: 'd', text: 'Det er umulig å vise følelser visuelt', isCorrect: false },
            ],
            solution: 'Boken kan gi direkte tilgang til en karakters tanker. Film må vise følelser indirekte gjennom skuespill, kameravinkler, musikk og andre visuelle virkemidler.',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Analysere adaptasjoner ==========
    {
      id: 'norsk-10-9-5-n-section2',
      type: 'text',
      content: `## Sammenligning som analysemetode

Å sammenligne en bok med filmadaptasjonen er en av de mest givende øvelsene du kan gjøre i norskfaget. Det tvinger deg til å tenke om hva som er unikt for hvert medium og hvordan de ulike affordansene former fortellingen.

Når du gjør en slik sammenligning, bør du ikke bare lete etter hva som er likt og ulikt. Du bør stille spørsmålet: Hvorfor er det ulikt? Hva er det ved filmen som medium som krevde denne endringen? For eksempel: Hvis boken har en fortellerstemme i første person og filmen ikke har det, er grunnen kanskje at filmskaperen ønsket å vise i stedet for å fortelle.

Se på disse aspektene når du sammenligner: Hva er kuttet fra boken, og hva er lagt til? Hvordan er karakterene visuelt realisert, matcher de bokens beskrivelser? Hvordan erstattes bokens indre monologer? Hvilken rolle spiller musikken? Hvordan er tempoet endret? Og ikke minst: Endrer adaptasjonen tematikken? Noen ganger legger en film vekt på helt andre temaer enn boken, selv om handlingen er den samme.

Et interessant begrep er troskap, altså i hvilken grad filmen er «tro» mot boken. Noen mener at en god adaptasjon bør være så tro som mulig. Andre mener at de beste adaptasjonene er de som tar seg friheter og bruker filmens unike muligheter til å skape noe nytt. Det finnes ikke noe objektivt svar, men debatten er verdifull.

Husk at adaptasjon også kan gå andre veien. Filmer kan bli bøker, spill kan bli filmer, podkaster kan bli TV-serier. I vår tids medielandskap flyter historier fritt mellom medier, og hver overføring skaper nye versjoner og nye muligheter.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-10-9-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på adaptasjonsanalyse:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-9-5-n-quiz2-q0',
            task: 'Hva bør du spørre deg når du finner forskjeller mellom bok og film?',
            options: [
              { id: 'a', text: '«Hvem sin feil er dette?»', isCorrect: false },
              { id: 'b', text: '«Hvorfor krevde filmen som medium denne endringen?»', isCorrect: true },
              { id: 'c', text: '«Var regissøren dårlig?»', isCorrect: false },
              { id: 'd', text: '«Burde de ha laget en lengre film?»', isCorrect: false },
            ],
            solution: 'Det viktigste spørsmålet er hvorfor endringen ble gjort, ikke om den er «riktig» eller «feil». Forskjeller mellom bok og film skyldes ofte mediets ulike affordanser.',
          },
          {
            id: 'norsk-10-9-5-n-quiz2-q1',
            task: 'Hva betyr «troskap» i adaptasjonssammenheng?',
            options: [
              { id: 'a', text: 'At filmskaperen er lojal mot filmselskapets ønsker', isCorrect: false },
              { id: 'b', text: 'I hvilken grad filmen holder seg tett til bokens innhold og ånd', isCorrect: true },
              { id: 'c', text: 'At skuespillerne ligner bokens beskrivelser', isCorrect: false },
              { id: 'd', text: 'At filmen har samme tittel som boken', isCorrect: false },
            ],
            solution: 'Troskap handler om i hvilken grad adaptasjonen følger originalverkets handling, karakterer, tematikk og ånd. Det er en sentral debatt i adaptasjonsteori.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-9-5-n-summary',
      type: 'text',
      content: `## Oppsummering: Historier i transformasjon

**Adaptasjon** er prosessen der en historie overføres fra ett medium til et annet. Endringer er uunngåelige og ofte nødvendige.

**Medieoverføring** krever at innhold kuttes, legges til eller endres på grunn av forskjeller i affordans mellom mediene.

**Bok vs. film:** Boken gir tilgang til indre tanker; filmen viser gjennom bilde, lyd og skuespill. Begge har unike styrker.

**Troskap** er et omdiskutert begrep. Noen mener adaptasjoner bør være tro mot originalen, andre verdsetter kreativ frihet.

**Sammenligning** av bok og film er en verdifull analysemetode som tvinger deg til å reflektere over hva som er unikt for hvert medium.

**Nøkkelbegreper:** Adaptasjon, medieoverføring, affordans, troskap, sammenligning, visuell realisering.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9.6 NARRATIV: Gaming og interaktiv fortelling
// ============================================================================

export const CHAPTER_NORSK_10_9_6_NARRATIV: TextbookChapter = {
  id: 'norsk-10-9-6-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '9.6',
  title: 'Gaming og interaktiv fortelling',
  subtitle: 'Narrativ versjon',
  description: 'Utforsk dataspill som fortellermedium og forstå hvordan spillerens valg skaper en helt ny type historiefortelling.',
  estimatedMinutes: 40,
  competenceGoals: [
    'utforske og vurdere hvordan digitale medier skaper nye former for fortelling',
    'reflektere kritisk over dataspill som kulturuttrykk og fortellermedium',
  ],
  linkedChapterId: 'norsk-10-9-6',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-10-9-6-n-intro',
      type: 'text',
      content: `## Du er helten

I en bok bestemmer forfatteren hva som skjer. I en film bestemmer regissøren. Men i et dataspill? I et dataspill bestemmer du. Du velger hvilken vei du tar, hvem du snakker med, hvem du redder og hvem du ofrer. Historien former seg etter dine valg. Og det forandrer alt vi vet om historiefortelling.

Dataspill er det 21. århundrets mest dominerende kulturform. Spillbransjen omsetter for mer enn film- og musikkbransjen til sammen. Milliarder av mennesker spiller. Og spillene har utviklet seg fra enkle prikker på en skjerm til komplekse verdener med dype historier, troverdige karakterer og etiske dilemmaer som kan føles like reelle som de du møter i virkelige livet.

Likevel blir dataspill ofte oversett som kulturuttrykk og fortellermedium. Mange voksne tenker fremdeles på spill som «bare underholdning» eller, enda verre, som noe skadelig. Men akkurat som romanen, teaterscenen og filmlerretet, er dataspillets skjerm et sted der historier utfolder seg, der temaer utforskes og der vi som mennesker kan reflektere over oss selv og verden. Det unike med spill er at du ikke bare observerer historien. Du lever den.`,
    },

    // ========== SEKSJON 1: Valgbaserte narrativ ==========
    {
      id: 'norsk-10-9-6-n-section1',
      type: 'text',
      content: `## Når valget er ditt — Interaktive narrativ

Det som gjør dataspill unikt som fortellermedium, er interaktivitet. I bøker og filmer er du en passiv mottaker. I spill er du en aktiv deltaker. Denne forskjellen har dype konsekvenser for hvordan historier fortelles og oppleves.

Valgbaserte narrativ er spill der spillerens valg former historien. Spill som Life is Strange, Detroit: Become Human og The Witcher 3 gir deg valg som har reelle konsekvenser. Redder du den ene personen, dør kanskje en annen. Sier du sannheten, vinner du tillit, men mister en alliert. Historien forgrener seg basert på det du gjør, og du kan ende opp med en av mange mulige slutninger.

Denne typen fortelling skaper et helt spesielt engasjement. Fordi du har ansvaret for konsekvensene, føler du valgene sterkere. Et moralsk dilemma i et spill kan føles mer intenst enn i en film fordi det er du som må trykke på knappen. Forskning viser at spillere kan føle ekte skyld, anger og stolthet basert på valgene de tar i spill.

Men interaktivitet byr også på fortellermessige utfordringer. Forfatteren av et lineært narrativ kan kontrollere nøyaktig hva leseren eller seeren opplever. Spillskaperen må planlegge for hundrevis av mulige stier gjennom historien. Dette krever enorm planlegging og innebærer at noen stier vil være bedre utviklet enn andre.

Det finnes også spill som bruker linearitet bevisst. The Last of Us og God of War forteller i stor grad lineære historier, men bruker spillmediet til å skape en opplevelse som er annerledes enn en film. Du løper, kjemper og utforsker som karakteren, og denne fysiske involveringen skaper en dypere forbindelse til historien enn passiv observasjon.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-10-9-6-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-6-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på gaming som fortellermedium:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-9-6-n-quiz1-q0',
            task: 'Hva gjør dataspill unikt som fortellermedium?',
            options: [
              { id: 'a', text: 'Bedre grafikk enn film', isCorrect: false },
              { id: 'b', text: 'Interaktivitet — spilleren er en aktiv deltaker som former historien', isCorrect: true },
              { id: 'c', text: 'Lengre historier enn bøker', isCorrect: false },
              { id: 'd', text: 'Bedre skuespillere enn teater', isCorrect: false },
            ],
            solution: 'Interaktivitet er det som gjør spill unikt. I motsetning til bøker og film, der du er passiv mottaker, er du i spill en aktiv deltaker som påvirker historiens gang.',
          },
          {
            id: 'norsk-10-9-6-n-quiz1-q1',
            task: 'Hva er et valgbasert narrativ?',
            options: [
              { id: 'a', text: 'Et spill der du velger karakter i starten', isCorrect: false },
              { id: 'b', text: 'Et spill der spillerens valg former historien og kan gi ulike slutninger', isCorrect: true },
              { id: 'c', text: 'Et spill med valgfri rekkefølge på banene', isCorrect: false },
              { id: 'd', text: 'Et spill uten handling', isCorrect: false },
            ],
            solution: 'I et valgbasert narrativ påvirker spillerens valg handlingen. Historien forgrener seg, og du kan ende opp med forskjellige slutninger basert på hva du gjør.',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Spillkritikk og kulturell verdi ==========
    {
      id: 'norsk-10-9-6-n-section2',
      type: 'text',
      content: `## Spillkritikk — Å analysere spill som tekst

Akkurat som du kan analysere en bok, en film eller en tegneserie, kan du analysere et dataspill. Spillkritikk er det å undersøke et spill systematisk med fokus på dets fortelling, virkemidler, tematikk og kulturelle kontekst.

Når du analyserer et spill som tekst, kan du se på flere lag. Det narrative laget handler om historien: Hva er plottet? Hvem er karakterene? Hva er temaene? Hvilke konflikter driver handlingen? Det ludiske laget, altså spillmekanikken, handler om reglene: Hva kan spilleren gjøre? Hva belønnes? Hva straffes? Disse to lagene samspiller ofte. I et spill der du spiller en krigssoldat, kan spillmekanikken forsterke temaene om vold og konsekvenser ved å gjøre kamphandlingene ubehagelige i stedet for glamorøse.

Det estetiske laget handler om det visuelle, det auditive og det atmosfæriske. Kunststilen, musikken, lyddesignen og verdensbyggingen skaper sammen en opplevelse som er mer enn summen av delene. Et spill som Journey bruker minimal dialog men fantastisk musikk og visuell design for å skape en dyp emosjonell opplevelse.

Dataspill reiser også viktige spørsmål om representasjon. Hvem er hovedpersonene? Hvilke perspektiver representeres? Spillverdenen er historisk blitt kritisert for å mangle mangfold, men dette er i rask endring. Spill som The Last of Us Part II og Celeste har blitt rost for å presentere komplekse karakterer som representerer ulike identiteter og erfaringer.

Å utvikle et kritisk blikk på spill er like viktig som å utvikle det for bøker og film. Spill er en av vår tids viktigste kulturuttrykk, og evnen til å analysere dem er en verdifull kompetanse.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-10-9-6-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-9-6-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på spillkritikk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-9-6-n-quiz2-q0',
            task: 'Hva er det «ludiske laget» i et dataspill?',
            options: [
              { id: 'a', text: 'Historien og karakterene', isCorrect: false },
              { id: 'b', text: 'Grafikken og musikken', isCorrect: false },
              { id: 'c', text: 'Spillmekanikken og reglene for hva spilleren kan gjøre', isCorrect: true },
              { id: 'd', text: 'Flerspillerdelen av spillet', isCorrect: false },
            ],
            solution: 'Det ludiske laget (fra latin ludus = spill) handler om spillets mekanikk: regler, belønningssystemer og muligheter for spillerhandling.',
          },
          {
            id: 'norsk-10-9-6-n-quiz2-q1',
            task: 'Hvorfor er representasjon i spill et viktig diskusjonstema?',
            options: [
              { id: 'a', text: 'Fordi spill er den mest populære kulturformen og påvirker hvordan vi ser verden', isCorrect: true },
              { id: 'b', text: 'Fordi det er lovpålagt å ha mangfold i spill', isCorrect: false },
              { id: 'c', text: 'Fordi spill er det eneste mediet som mangler mangfold', isCorrect: false },
              { id: 'd', text: 'Fordi det gjør spillene mer lønnsomme', isCorrect: false },
            ],
            solution: 'Dataspill er den mest dominerende kulturformen og spilles av milliarder. Hvem som representeres og hvordan, påvirker holdninger og selvbilde hos en enorm mengde mennesker.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-9-6-n-summary',
      type: 'text',
      content: `## Oppsummering: Spill er fortelling

**Dataspill** er det 21. århundrets dominerende kulturform og fortjener seriøs analyse som fortellermedium.

**Interaktivitet** er det som gjør spill unikt: spilleren er en aktiv deltaker som former historien.

**Valgbaserte narrativ** lar spillerens valg påvirke handlingen og utfallet, noe som skaper dypere engasjement.

**Spillkritikk** analyserer spill gjennom tre lag: det narrative (historien), det ludiske (mekanikken) og det estetiske (design og lyd).

**Representasjon** i spill er et viktig kulturelt spørsmål fordi mediet når milliarder av mennesker.

**Nøkkelbegreper:** Interaktivitet, valgbasert narrativ, spillmekanikk, det ludiske laget, spillkritikk, representasjon, verdensbygging.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const NORSK_10_NARRATIV_DEL7_CHAPTERS = [
  CHAPTER_NORSK_10_9_1_NARRATIV,
  CHAPTER_NORSK_10_9_2_NARRATIV,
  CHAPTER_NORSK_10_9_3_NARRATIV,
  CHAPTER_NORSK_10_9_4_NARRATIV,
  CHAPTER_NORSK_10_9_5_NARRATIV,
  CHAPTER_NORSK_10_9_6_NARRATIV,
];
