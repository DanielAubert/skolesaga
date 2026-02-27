/**
 * Norsk 10 - Narrativ versjon DEL 4
 * Kapittel 6.1, 6.2, 6.3, 6.4, 6.5, 6.6
 *
 * Engasjerende fortellende format optimalisert for lesing/lytting på mobil
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 6.1 NARRATIV: Retorikk
// ============================================================================

export const CHAPTER_NORSK_10_6_1_NARRATIV: TextbookChapter = {
  id: 'norsk-10-6-1-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '6.1',
  title: 'Retorikk — Kunsten å overbevise',
  subtitle: 'Narrativ versjon',
  description:
    'Oppdag retorikkens hemmeligheter: hvordan etos, patos og logos styrer alt fra politiske taler til Instagram-reklame, og hvorfor 2500 år gammel visdom er viktigere enn noensinne.',
  estimatedMinutes: 35,
  competenceGoals: [
    'bruke retoriske begreper til å analysere og vurdere argumentasjon i muntlige og skriftlige tekster',
    'gjenkjenne og beskrive retoriske virkemidler i ulike teksttyper',
    'forstå retorikkens historiske bakgrunn og dens relevans i dag',
  ],
  linkedChapterId: 'norsk-10-6-1',
  content: [
    {
      id: 'norsk-10-6-1-n-intro',
      type: 'text',
      content: `## Kunsten som styrer verden

Forestill deg at du står i en skoledebatt. Du har forberedt deg grundig med fakta, tall og eksempler. Likevel er det motstanderen som vinner. Hvorfor? Fordi hun fikk publikum til å føle noe. Hun brukte stemmen, kroppsspråket og ordvalget på en måte som traff tilhørerne midt i hjertet. Det er retorikk i praksis.

Retorikk er kunsten å overbevise, en ferdighet som har blitt studert i over 2500 år, helt siden de gamle grekerne oppdaget at den som mestrer ordene, mestrer verden. Aristoteles, Platon og Cicero viet livene sine til å forstå hvordan kommunikasjon virker. Men retorikk er ikke bare noe fra antikken. Du møter retorikk overalt: i reklame, politiske taler, YouTube-videoer, kommentarfelt og diskusjoner med venner. Hver gang noen prøver å overbevise deg om noe, bruker de retorikk.

Den retoriske situasjonen består av fem elementer: avsenderen (retor), mottakeren (publikum), budskapet, konteksten og hensikten (kairos, det rette øyeblikket). Å analysere den retoriske situasjonen er det første steget mot å forstå, og bruke, overbevisende kommunikasjon.`,
    },
    {
      id: 'norsk-10-6-1-n-section1',
      type: 'text',
      content: `## Etos, patos og logos

Aristoteles identifiserte tre måter en taler kan overbevise publikum på, kalt appellformene eller de retoriske bevismidlene. Alt overbevisende kommunikasjon bygger på en kombinasjon av disse tre.

Etos handler om avsenderens troverdighet. Du lytter mer oppmerksomt til en lege som snakker om helse enn til en tilfeldig person. Legen har faglig autoritet og kompetanse. Men etos handler også om å fremstå som ærlig, pålitelig og velmenende. Du bygger etos ved å vise kunnskap, referere til troverdige kilder, innrømme svakheter og ha god fremtoning.

Patos handler om å vekke følelser hos mottakeren. Frykt, glede, medfølelse, sinne og håp driver mennesker til handling langt mer effektivt enn logikk alene. En innsamlingsaksjon overbeviser mer med bildet av ett barn som ser rett i kameraet enn med statistikk om millioner som mangler rent vann. Du bruker patos gjennom konkrete historier, billedspråk, retoriske spørsmål og variasjon i stemmebruk.

Logos handler om argumentets logiske styrke. Er resonnementet holdbart? Er bevisene solide? Logos er grunnmuren. Du styrker logos med fakta, statistikk, forskning, logisk rekkefølge og imøtegåelse av motargumenter.

Den beste kommunikasjonen balanserer alle tre. Bare etos blir autoritært, bare patos blir følelsesladet men lite overbevisende, og bare logos blir korrekt men kjedelig. Kombinert blir de uslåelige.`,
    },
    {
      id: 'norsk-10-6-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på retorikk og appellformene:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-6-1-n-quiz1-q0',
            task: 'Hvilken appellform brukes i setningen «Ifølge tall fra SSB har klimagassutslippene økt med 3 %»?',
            options: [
              { id: 'a', text: 'Etos', isCorrect: false },
              { id: 'b', text: 'Patos', isCorrect: false },
              { id: 'c', text: 'Logos', isCorrect: true },
              { id: 'd', text: 'Kairos', isCorrect: false },
            ],
            solution:
              'Referanse til statistikk fra en offentlig kilde (SSB) er en klassisk logos-appell. Logos appellerer til fornuften gjennom fakta, tall og logisk resonnement.',
          },
          {
            id: 'norsk-10-6-1-n-quiz1-q1',
            task: '«Som sykepleier i 20 år har jeg sett hva kutt i helsebudsjettet gjør.» Hvilken appellform dominerer?',
            options: [
              { id: 'a', text: 'Etos, fordi yrkeserfaring gir troverdighet', isCorrect: true },
              { id: 'b', text: 'Patos, fordi det handler om helseproblemer', isCorrect: false },
              { id: 'c', text: 'Logos, fordi det brukes tall', isCorrect: false },
              { id: 'd', text: 'Ingen appellform brukes', isCorrect: false },
            ],
            solution:
              'Avsenderen viser til 20 års yrkeserfaring som sykepleier for å bygge troverdighet. Det er etos, appell til avsenderens karakter, kompetanse og pålitelighet.',
          },
          {
            id: 'norsk-10-6-1-n-quiz1-q2',
            task: 'Hva betyr «kairos» i retorisk sammenheng?',
            options: [
              { id: 'a', text: 'Avsenderens troverdighet', isCorrect: false },
              { id: 'b', text: 'En logisk feilslutning', isCorrect: false },
              { id: 'c', text: 'Det rette øyeblikket for å kommunisere et budskap', isCorrect: true },
              { id: 'd', text: 'Et retorisk virkemiddel som bruker gjentakelse', isCorrect: false },
            ],
            solution:
              'Kairos betyr det rette øyeblikket for å kommunisere. Tidspunktet der talen har størst virkning. En tale om klimaendringer har sterkere kairos under en klimakonferanse enn i en tilfeldig hverdagssituasjon.',
          },
        ],
      },
    },
    {
      id: 'norsk-10-6-1-n-section2',
      type: 'text',
      content: `## Retoriske virkemidler

Utover appellformene finnes en rekke retoriske virkemidler som gjør kommunikasjonen mer slagkraftig. Retoriske spørsmål er spørsmål som ikke krever svar, men som leder tilhøreren: «Er det virkelig dette vi vil?» Gjentakelse forsterker budskapet: Martin Luther King brukte «I have a dream» gjentatte ganger. Tretallsregelen, også kalt trikolon, utnytter at tre elementer virker sterkere enn to eller fire: «Vi kom, vi så, vi vant.»

Kontrast, eller antitese, setter motsetninger opp mot hverandre: «Et lite skritt for et menneske, et stort sprang for menneskeheten.» Metaforer beskriver noe ved å sammenligne det med noe helt annet: «Samfunnet står ved et veiskille.» Overdrivelse, hyperbol, gjør et poeng tydeligere: «Alle vet at dette er feil.» Ironi sier det motsatte av det du mener. Og personlig pronomen i vi-form skaper fellesskap: «Vi må stå sammen» er mer inkluderende enn «Dere må gjøre noe.»

Det antikke systemet for å forberede kommunikasjon bestod av fem faser: inventio (finne stoff), dispositio (ordne stoffet), elocutio (formulere med virkemidler), memoria (huske innholdet) og actio (fremføre med stemme og kroppsspråk). Denne modellen er like nyttig i dag som for 2500 år siden.

Husk at retorikk er et verktøy som kan brukes til å inspirere og opplyse, men også til å manipulere. Nettopp derfor er det like viktig å kunne gjennomskue retorikk som å bruke den selv.`,
    },
    {
      id: 'norsk-10-6-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på retoriske virkemidler:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-6-1-n-quiz2-q0',
            task: 'Hvilket retorisk virkemiddel er «Frihet. Likhet. Brorskap.»?',
            options: [
              { id: 'a', text: 'Retorisk spørsmål', isCorrect: false },
              { id: 'b', text: 'Tretallsregelen (trikolon)', isCorrect: true },
              { id: 'c', text: 'Kontrast (antitese)', isCorrect: false },
              { id: 'd', text: 'Overdrivelse (hyperbol)', isCorrect: false },
            ],
            solution:
              'Tre ord, tre begreper, det er et klassisk trikolon. Tretallsregelen sier at tre elementer i en opplisting virker kraftfullt og rytmisk. Det er et av de mest brukte retoriske virkemidlene gjennom historien.',
          },
          {
            id: 'norsk-10-6-1-n-quiz2-q1',
            task: 'Hva er de fem retoriske fasene fra antikken?',
            options: [
              { id: 'a', text: 'Etos, patos, logos, kairos, retorikk', isCorrect: false },
              { id: 'b', text: 'Inventio, dispositio, elocutio, memoria, actio', isCorrect: true },
              { id: 'c', text: 'Innledning, hoveddel, avslutning, oppsummering, spørsmål', isCorrect: false },
              { id: 'd', text: 'Påstand, begrunnelse, belegg, motargument, konklusjon', isCorrect: false },
            ],
            solution:
              'De fem retoriske fasene er: inventio (finne stoff), dispositio (ordne stoffet), elocutio (formulere), memoria (huske) og actio (fremføre). Denne modellen gir en systematisk tilnærming til all kommunikasjon.',
          },
        ],
      },
    },
    {
      id: 'norsk-10-6-1-n-summary',
      type: 'text',
      content: `## Oppsummering

Retorikk er kunsten å overbevise, studert i over 2500 år. Den retoriske situasjonen inkluderer avsender, mottaker, budskap, kontekst og kairos (det rette øyeblikket). De tre appellformene er etos (troverdighet), patos (følelser) og logos (logikk), og den beste kommunikasjonen kombinerer alle tre.

Retoriske virkemidler som gjentakelse, trikolon, kontrast, metafor, retoriske spørsmål og ironi gjør kommunikasjonen sterkere. De fem retoriske fasene (inventio, dispositio, elocutio, memoria, actio) gir en systematisk fremgangsmåte. Retorikk er et kraftfullt verktøy, og det er like viktig å gjennomskue det som å bruke det.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.2 NARRATIV: Argumentasjon og debatt
// ============================================================================

export const CHAPTER_NORSK_10_6_2_NARRATIV: TextbookChapter = {
  id: 'norsk-10-6-2-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '6.2',
  title: 'Argumentasjon og debatt',
  subtitle: 'Narrativ versjon',
  description:
    'Lær å bygge sterke argumenter, gjennomskue logiske feilslutninger og delta i debatter der du imponerer med klarhet og saklighet.',
  estimatedMinutes: 35,
  competenceGoals: [
    'lytte til, vurdere og bruke argumentasjon i meningsutveksling og debatt',
    'skille mellom sterke og svake argumenter og gjenkjenne logiske feilslutninger',
    'delta i faglige samtaler og debatter med saklig argumentasjon',
  ],
  linkedChapterId: 'norsk-10-6-2',
  content: [
    {
      id: 'norsk-10-6-2-n-intro',
      type: 'text',
      content: `## Kunsten å tenke klart

Du argumenterer hele tiden. Når du overbeviser foreldrene dine om å få lov til noe, når du diskuterer med venner om hvilken film som er best, og når du svarer på oppgaver i norsk. Men det er en viktig forskjell mellom å mene noe og å argumentere for det. Argumentasjon handler ikke om å ha de sterkeste meningene, men om å ha de sterkeste begrunnelsene.

Et argument består av tre deler. Påstanden er det du hevder: «Skolen bør ha leksefri tid.» Begrunnelsen er hvorfor du mener det: «Fordi forskning viser at lekser i grunnskolen har liten effekt på læring.» Og belegget er dokumentasjonen som støtter begrunnelsen: «Ifølge en metastudie av John Hattie har lekser minimal effekt for elever under 12 år.»

Et argument uten begrunnelse er bare en mening. Et argument uten belegg er bare en påstand. Først når alle tre delene er på plass, har du et sterkt argument. Jo sterkere påstanden er, desto sterkere belegg trenger den. I en debatt er det den som argumenterer best som vinner, og det handler om klarhet, saklighet og vilje til å lytte.`,
    },
    {
      id: 'norsk-10-6-2-n-section1',
      type: 'text',
      content: `## Feilslutninger: Når argumenter svikter

En logisk feilslutning er et argument som ser ut som det er logisk, men som inneholder en feil i resonnementet. De er farlige fordi de kan være veldig overbevisende, inntil du lærer å gjenkjenne dem.

Personangrep, eller ad hominem, er når du angriper personen i stedet for argumentet: «Du kan ikke uttale deg om klimaendringer, du flyr jo til Syden hvert år.» Personens oppførsel gjør ikke argumentet ugyldig. Stråmannsargument er når du forvrenger motstanderens posisjon og angriper den forvrengte versjonen. Motstanderen sier «vi bør vurdere å redusere kjøttforbruket», og du svarer «så du vil tvinge alle til å bli veganere?»

Skråplan, også kalt slippery slope, er når du hevder at en handling uunngåelig fører til en kjede av stadig verre konsekvenser uten å bevise sammenhengen. Falskt dilemma presenterer saken som om det bare finnes to muligheter: «Enten er du med oss, eller så er du mot oss.» I virkeligheten finnes det nesten alltid flere alternativer.

Appell til flertallet hevder at noe er sant fordi mange mener det: «De fleste tror på det, så det må jo stemme.» Sirkelargument gjentar påstanden uten å bevise noe: «Denne boka er bra fordi den er velskrevet.» Og feilaktig appell til autoritet bruker en kjent person som bevis selv om personen ikke har relevant kompetanse: «En kjent fotballspiller sier at dette kosttilskuddet virker.»

En god debatt følger regler: Angrip argumentet, ikke personen. Lytt til motstanderen. Innrøm svakheter i egne argumenter, det styrker faktisk troverdigheten din. Hold deg til saken. Bruk belegg. Og respekter taletiden.`,
    },
    {
      id: 'norsk-10-6-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på argumentasjon og feilslutninger:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-6-2-n-quiz1-q0',
            task: 'Hva er de tre delene i et argument?',
            options: [
              { id: 'a', text: 'Innledning, hoveddel og konklusjon', isCorrect: false },
              { id: 'b', text: 'Påstand, begrunnelse og belegg', isCorrect: true },
              { id: 'c', text: 'Etos, patos og logos', isCorrect: false },
              { id: 'd', text: 'Fakta, mening og følelse', isCorrect: false },
            ],
            solution:
              'Et argument består av påstand (det du hevder), begrunnelse (hvorfor du hevder det) og belegg (dokumentasjon som støtter begrunnelsen). Alle tre delene må være på plass for et sterkt argument.',
          },
          {
            id: 'norsk-10-6-2-n-quiz1-q1',
            task: '«Du kan ikke mene at vi bør lese mer, du leser jo aldri selv!» Hvilken feilslutning er dette?',
            options: [
              { id: 'a', text: 'Stråmannsargument', isCorrect: false },
              { id: 'b', text: 'Personangrep (ad hominem)', isCorrect: true },
              { id: 'c', text: 'Falskt dilemma', isCorrect: false },
              { id: 'd', text: 'Appell til flertallet', isCorrect: false },
            ],
            solution:
              'Dette er et personangrep (ad hominem). I stedet for å vurdere argumentet om lesing, angriper man personen. Om avsenderen leser mye eller lite, endrer ikke argumentets gyldighet.',
          },
          {
            id: 'norsk-10-6-2-n-quiz1-q2',
            task: '«Enten forbyr vi all biltrafikk, eller så godtar vi at luftforurensning dreper folk.» Hvilken feilslutning?',
            options: [
              { id: 'a', text: 'Personangrep', isCorrect: false },
              { id: 'b', text: 'Skråplan', isCorrect: false },
              { id: 'c', text: 'Falskt dilemma', isCorrect: true },
              { id: 'd', text: 'Sirkelargument', isCorrect: false },
            ],
            solution:
              'Dette er et falskt dilemma. Saken fremstilles som om det bare finnes to ekstreme muligheter. I virkeligheten finnes mange mellomløsninger som lavutslippssoner, kollektivtransport og elbilsatsing.',
          },
        ],
      },
    },
    {
      id: 'norsk-10-6-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Argumentasjon er en grunnleggende ferdighet i et demokrati. Et argument består av påstand, begrunnelse og belegg. Logiske feilslutninger som personangrep, stråmann, skråplan, falskt dilemma og appell til flertallet svekker argumentasjonen. En god debatt krever saklighet, aktiv lytting og respekt.

Sterk argumentasjon er logisk, underbygget og nyansert. Å innrømme motstanderens poenger styrker din egen troverdighet. Husk: målet med argumentasjon er ikke å vinne, men å finne sannheten.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.3 NARRATIV: Presentasjonsteknikk
// ============================================================================

export const CHAPTER_NORSK_10_6_3_NARRATIV: TextbookChapter = {
  id: 'norsk-10-6-3-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '6.3',
  title: 'Presentasjonsteknikk',
  subtitle: 'Narrativ versjon',
  description:
    'Fra nervøs til overbevisende: lær å planlegge, strukturere og holde engasjerende presentasjoner med kroppsspråk, stemme og visuelle hjelpemidler.',
  estimatedMinutes: 30,
  competenceGoals: [
    'planlegge, utforme og holde muntlige presentasjoner med relevant innhold og klar struktur',
    'bruke kroppsspråk, stemmebruk og visuelle hjelpemidler bevisst og effektivt',
    'tilpasse presentasjoner til formål, mottaker og situasjon',
  ],
  linkedChapterId: 'norsk-10-6-3',
  content: [
    {
      id: 'norsk-10-6-3-n-intro',
      type: 'text',
      content: `## Fra nervøs til overbevisende

Hjertet banker. Hendene svetter. Stemmen skjelver. Du står foran klassen og alt du ønsker er at gulvet skal åpne seg og sluke deg. Presentasjonsangst er noe av det mest vanlige blant mennesker. Mange rangerer det høyere enn frykt for edderkopper og høyder.

Men her er den gode nyheten: presentasjonsteknikk er en ferdighet, ikke et talent. Det kan læres, øves på og mestres. Steve Jobs, Brene Brown og Barack Obama var ikke naturtalenter. De øvde, planla, testet og forbedret. En god presentasjon handler ikke om å vite mest eller ha flest lysbilder. Det handler om å kommunisere tydelig, engasjere tilhørerne og gjøre innholdet levende.

Det starter med god planlegging. En presentasjon følger den samme tredelte strukturen som en god tekst. Innledningen skal fange oppmerksomheten med en krok: et spørsmål, en historie, et overraskende faktum eller et sitat. Hoveddelen bør ha to til fire hovedpunkter med tydelige overganger mellom dem, støttet av eksempler og historier. Avslutningen oppsummerer og gir et sterkt siste inntrykk.`,
    },
    {
      id: 'norsk-10-6-3-n-section1',
      type: 'text',
      content: `## Kroppsspråk, stemme og lysbilder

Kroppsspråket ditt kommuniserer like mye som ordene dine, kanskje mer. Stå stødig med begge beina på bakken. Bruk åpent kroppsspråk: ikke kryss armene, ikke stikk hendene i lommene. Se tilhørerne i øynene, ikke i gulvet eller på skjermen. Bruk hendene for å understreke poenger, men unngå nervøse bevegelser som å vippe på føttene eller leke med en penn.

Stemmen er ditt viktigste verktøy. Snakk tydelig og med nok volum til at alle hører deg. Varier tempoet: senk farten når du sier noe viktig, øk den når energien skal opp. Bruk pauser bevisst. En pause etter et viktig poeng gir tilhørerne tid til å tenke, og den viser at du har kontroll.

For lysbilder gjelder regelen «mindre er mer». Bruk stikkord og bilder, ikke fullstendige setninger. Ikke les fra lysbildene, de skal støtte det du sier, ikke erstatte det. En god tommelfingerregel er maks seks ord per punkt og maks seks punkter per lysbilde. Unngå forstyrrende animasjoner og rotete design. Husk at sensor og tilhørerne vurderer deg, ikke PowerPointen din.

Nervøsitet er normalt og faktisk nyttig fordi den gjør deg skjerpet. Pust dypt og rolig. Tenk på at tilhørerne vil at du skal lykkes. Jo mer du øver, jo tryggere blir du. Øv høyt, gjerne foran et speil eller en venn. Ta tid og juster. Det er ikke tilfeldig at de beste foredragsholderne også er de som øver mest.`,
    },
    {
      id: 'norsk-10-6-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på presentasjonsteknikk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-6-3-n-quiz1-q0',
            task: 'Hva bør innledningen i en presentasjon inneholde?',
            options: [
              { id: 'a', text: 'En lang liste over alle emnene du skal dekke', isCorrect: false },
              { id: 'b', text: 'En krok som fanger oppmerksomheten: et spørsmål, en historie eller et overraskende faktum', isCorrect: true },
              { id: 'c', text: 'En unnskyldning for at du er nervøs', isCorrect: false },
              { id: 'd', text: 'Alt det viktigste du vil si, i tilfelle du ikke rekker resten', isCorrect: false },
            ],
            solution:
              'Innledningen skal fange oppmerksomheten med en krok: et spørsmål, en historie, et overraskende faktum eller et sitat. Deretter presenterer du temaet og gir tilhørerne en grunn til å lytte.',
          },
          {
            id: 'norsk-10-6-3-n-quiz1-q1',
            task: 'Hvorfor bør du bruke pauser i en presentasjon?',
            options: [
              { id: 'a', text: 'Fordi du trenger tid til å huske hva du skal si', isCorrect: false },
              { id: 'b', text: 'Fordi pauser gir tilhørerne tid til å tenke og viser at du har kontroll', isCorrect: true },
              { id: 'c', text: 'Fordi det fyller opp tiden', isCorrect: false },
              { id: 'd', text: 'Fordi det er uhøflig å snakke for lenge sammenhengende', isCorrect: false },
            ],
            solution:
              'Bevisste pauser er et kraftig virkemiddel. En pause etter et viktig poeng gir tilhørerne tid til å absorbere informasjonen, og den signaliserer at du er trygg og har kontroll over fremføringen.',
          },
          {
            id: 'norsk-10-6-3-n-quiz1-q2',
            task: 'Hva er den viktigste regelen for lysbilder?',
            options: [
              { id: 'a', text: 'Ha så mange lysbilder som mulig', isCorrect: false },
              { id: 'b', text: 'Skriv hele manuset på lysbildene', isCorrect: false },
              { id: 'c', text: 'Mindre er mer: bruk stikkord og bilder, ikke les fra dem', isCorrect: true },
              { id: 'd', text: 'Bruk mange farger og animasjoner for å holde oppmerksomheten', isCorrect: false },
            ],
            solution:
              'Lysbilder skal støtte det du sier, ikke erstatte det. Bruk stikkord og bilder, hold det enkelt, og aldri les fra lysbildene. Tilhørerne skal lytte til deg, ikke lese fra skjermen.',
          },
        ],
      },
    },
    {
      id: 'norsk-10-6-3-n-summary',
      type: 'text',
      content: `## Oppsummering

God presentasjonsteknikk er en ferdighet som kan læres. Strukturer presentasjonen med en krok i innledningen, to til fire hovedpunkter i hoveddelen og en sterk avslutning. Bruk kroppsspråk bevisst: stå stødig, bruk åpent kroppsspråk og se tilhørerne i øynene. Varier stemmen i tempo og volum, og bruk pauser etter viktige poenger.

For lysbilder gjelder «mindre er mer»: stikkord og bilder, ikke fullstendige setninger. Nervøsitet er normalt og kan temmes med øving. Husk: presentasjonsteknikk handler om å kommunisere tydelig og engasjere, ikke om å være perfekt.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.4 NARRATIV: Samtale og lytting
// ============================================================================

export const CHAPTER_NORSK_10_6_4_NARRATIV: TextbookChapter = {
  id: 'norsk-10-6-4-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '6.4',
  title: 'Samtale og lytting',
  subtitle: 'Narrativ versjon',
  description:
    'Oppdag kraften i aktiv lytting, lær å stille gode spørsmål og mestre fagsamtalen som vurderingsform.',
  estimatedMinutes: 30,
  competenceGoals: [
    'lytte aktivt og gi konstruktive tilbakemeldinger i faglige samtaler',
    'delta i fagsamtaler med saklig argumentasjon og respekt for andres synspunkter',
    'bruke ulike spørsmålstyper bevisst for å fordype samtalen',
  ],
  linkedChapterId: 'norsk-10-6-4',
  content: [
    {
      id: 'norsk-10-6-4-n-intro',
      type: 'text',
      content: `## Den undervurderte superkraften

Vi bruker mye tid på å lære å snakke og skrive. Men hvor ofte øver vi på å lytte? Aktiv lytting er en av de mest undervurderte ferdighetene vi har. Den som lytter godt, forstår bedre, argumenterer bedre og bygger sterkere relasjoner.

I skolen møter du lytting og samtale i flere sammenhenger. Fagsamtalen er en vurderingsform der du og læreren eller en sensor diskuterer et faglig tema. Klassediskusjoner krever at du kan bygge videre på det andre sier. Og i muntlig eksamen er fagsamtalen en viktig del av vurderingen.

Aktiv lytting betyr å konsentrere seg fullt og helt om det den andre sier, uten å planlegge hva du selv skal si mens de snakker. Det betyr å vise at du lytter gjennom kroppsspråk som nikking og blikkontakt. Det betyr å stille oppfølgingsspørsmål som viser at du har forstått. Og det betyr å gjenta eller oppsummere det du har hørt: «Så det du sier er at...»`,
    },
    {
      id: 'norsk-10-6-4-n-section1',
      type: 'text',
      content: `## Spørsmålstyper og fagsamtalen

Gode spørsmål er motoren i enhver samtale. Det finnes ulike typer spørsmål som tjener ulike formål. Lukkede spørsmål har korte, faktabaserte svar: «Når ble Ibsen født?» Åpne spørsmål inviterer til refleksjon og utdyping: «Hvorfor tror du Ibsen valgte å la Nora forlate familien?» Oppfølgingsspørsmål bygger videre: «Kan du utdype hva du mener med det?» Og utfordrende spørsmål tester forståelsen: «Hva ville skjedd hvis Nora hadde blitt?»

I en fagsamtale er det viktig å vise at du kan tenke selvstendig, ikke bare gjengi det du har lest. Sensor vil typisk stille spørsmål som går dypere enn overflaten, kobler temaet til andre deler av pensum, ber deg vurdere noe kritisk eller reflektere over sammenhenger.

Noen konkrete tips for fagsamtalen: Ta deg tid til å tenke før du svarer. Det er bedre å ta noen sekunder enn å svare overfladisk. Vær ærlig hvis det er noe du er usikker på, men prøv å reflektere høyt: «Jeg er ikke helt sikker, men jeg tror det kan handle om...» Bruk fagbegreper der det passer, men forklar dem gjerne for å vise at du forstår dem. Og koble gjerne til andre ting du har lært: «Dette minner meg om det vi lærte om realismen, der...»

En god fagsamtale er ikke et forhør. Det er en dialog der begge parter bidrar. Sensor vil at du skal lykkes, og du kan bidra til det ved å lytte aktivt, svare gjennomtenkt og vise genuin interesse for stoffet.`,
    },
    {
      id: 'norsk-10-6-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på samtale og lytting:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-6-4-n-quiz1-q0',
            task: 'Hva kjennetegner aktiv lytting?',
            options: [
              { id: 'a', text: 'Å planlegge hva du skal si mens den andre snakker', isCorrect: false },
              { id: 'b', text: 'Å konsentrere seg om det den andre sier, vise det gjennom kroppsspråk og stille oppfølgingsspørsmål', isCorrect: true },
              { id: 'c', text: 'Å nikke og smile uten å egentlig høre etter', isCorrect: false },
              { id: 'd', text: 'Å vente til den andre er ferdig og deretter si det du hadde planlagt', isCorrect: false },
            ],
            solution:
              'Aktiv lytting innebærer å konsentrere seg fullt om det den andre sier, vise det gjennom kroppsspråk som nikking og blikkontakt, og stille oppfølgingsspørsmål. Det handler om å forstå, ikke bare høre.',
          },
          {
            id: 'norsk-10-6-4-n-quiz1-q1',
            task: 'Hva er forskjellen mellom et lukket og et åpent spørsmål?',
            options: [
              { id: 'a', text: 'Lukkede spørsmål har korte faktasvar, åpne spørsmål inviterer til refleksjon og utdyping', isCorrect: true },
              { id: 'b', text: 'Lukkede spørsmål er vanskelige, åpne spørsmål er lette', isCorrect: false },
              { id: 'c', text: 'Lukkede spørsmål brukes i skriftlige prøver, åpne spørsmål i muntlige', isCorrect: false },
              { id: 'd', text: 'Det er ingen forskjell', isCorrect: false },
            ],
            solution:
              'Lukkede spørsmål har korte, faktabaserte svar: «Når ble Ibsen født?» Åpne spørsmål inviterer til refleksjon: «Hvorfor tror du Ibsen lot Nora forlate familien?» I fagsamtaler er åpne spørsmål mest verdifulle.',
          },
          {
            id: 'norsk-10-6-4-n-quiz1-q2',
            task: 'Hva bør du gjøre i en fagsamtale når du er usikker på svaret?',
            options: [
              { id: 'a', text: 'Si at du ikke vet og bli stille', isCorrect: false },
              { id: 'b', text: 'Gi et raskt svar for å virke selvsikker', isCorrect: false },
              { id: 'c', text: 'Reflektere høyt og prøve å resonnere deg frem til et svar', isCorrect: true },
              { id: 'd', text: 'Skifte tema til noe du kan bedre', isCorrect: false },
            ],
            solution:
              'Å reflektere høyt viser evne til selvstendig tenkning, noe sensor verdsetter høyt. Si gjerne «Jeg er ikke helt sikker, men jeg tror det kan handle om...» og resonner deg videre derfra.',
          },
        ],
      },
    },
    {
      id: 'norsk-10-6-4-n-summary',
      type: 'text',
      content: `## Oppsummering

Aktiv lytting er en undervurdert, men avgjørende ferdighet. Det innebærer å konsentrere seg fullt, vise at du lytter gjennom kroppsspråk og stille oppfølgingsspørsmål. Gode spørsmål driver samtalen videre: lukkede spørsmål gir faktasvar, åpne spørsmål inviterer til refleksjon, og oppfølgingsspørsmål fordyper.

I fagsamtalen viser du at du kan tenke selvstendig ved å reflektere høyt, bruke fagbegreper og koble til andre deler av pensum. Husk: en god fagsamtale er en dialog, ikke et forhør, og sensor vil at du skal lykkes.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.5 NARRATIV: Taler som forandret verden
// ============================================================================

export const CHAPTER_NORSK_10_6_5_NARRATIV: TextbookChapter = {
  id: 'norsk-10-6-5-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '6.5',
  title: 'Taler som forandret verden',
  subtitle: 'Narrativ versjon',
  description:
    'Fra Martin Luther Kings drøm til Greta Thunbergs sinne: opplev de mest kraftfulle talene i historien og lær hva som gjør dem uforglemmelige.',
  estimatedMinutes: 35,
  competenceGoals: [
    'analysere historiske og samtidige taler med retoriske begreper',
    'forstå begrepet kairos og hvordan tidspunkt og kontekst påvirker en tales virkning',
    'reflektere over talers rolle i demokrati og samfunnsendring',
  ],
  linkedChapterId: 'norsk-10-6-5',
  content: [
    {
      id: 'norsk-10-6-5-n-intro',
      type: 'text',
      content: `## Ordene som endret historien

Den 28. august 1963 sto Martin Luther King Jr. foran 250 000 mennesker ved Lincoln Memorial i Washington D.C. Han hadde forberedt en tale, men midt i fremføringen la han manuset fra seg og begynte å improvisere. «I have a dream», sa han, og gjentok det igjen og igjen. Den talen forandret Amerika. Den forandret verden.

Gjennom historien har taler hatt en enorm makt. De har startet revolusjoner, inspirert millioner, avsluttet kriger og forandret hvordan vi tenker om oss selv og hverandre. Men hva er det som gjør noen taler uforglemmelige, mens andre glemmes i det øyeblikket taleren setter seg ned?

Svaret ligger i kombinasjonen av retorisk dyktighet og kairos, det rette øyeblikket. Kings tale fungerte ikke bare fordi den var vakker. Den fungerte fordi den ble holdt på riktig sted, til riktig tid, foran riktig publikum. Den traff en nerve i det amerikanske samfunnet som var modent for forandring.`,
    },
    {
      id: 'norsk-10-6-5-n-section1',
      type: 'text',
      content: `## King, Malala og Thunberg

Martin Luther Kings «I Have a Dream» er et mesterverk i retorikk. Han bruker gjentakelse som hammerslag: «I have a dream» gjentas ni ganger. Han bruker kontraster: drømmen om at barn av alle hudfarger kan leke sammen settes opp mot den brutale rasismen. Han bruker billedspråk: «the fierce urgency of now.» Og han bygger etos gjennom sin rolle som prest og borgerrettsleder, patos gjennom drømmebildene, og logos gjennom referanser til den amerikanske uavhengighetserklæringen.

I 2013 holdt Malala Yousafzai en tale for FN, bare 16 år gammel. Hun hadde overlevd et drapsforsøk fra Taliban fordi hun kjempet for jenters rett til utdanning. Talen hennes kombinerer personlig historie (etos og patos) med klare krav til verdens ledere (logos). «One child, one teacher, one book, one pen can change the world.» Trikolon og enkel klarhet gjør budskapet uforglemmelig. Hennes etos er ekstraordinær: hun snakker fra personlig erfaring om det hun kjemper for.

I 2019 sto Greta Thunberg foran FNs klimatoppmøte og sa: «How dare you?» Hun brukte bevisst kort, direkte tale og sterk patos. Sinnet hennes var autentisk og upolert, det stod i kontrast til den diplomatiske tonen publikum var vant til. Det var nettopp kairos som ga talen kraft: den ble holdt i en tid der klimakrisen dominerte nyhetsbildet og ungdom over hele verden demonstrerte.

Felles for alle disse talene er at de bruker retoriske virkemidler bevisst, at de treffer et publikum som er klart for budskapet (kairos), og at taleren har sterk etos gjennom personlig erfaring eller autoritet.`,
    },
    {
      id: 'norsk-10-6-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på historiske taler:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-6-5-n-quiz1-q0',
            task: 'Hvilket retorisk virkemiddel er mest fremtredende i Kings «I Have a Dream»-tale?',
            options: [
              { id: 'a', text: 'Ironi', isCorrect: false },
              { id: 'b', text: 'Gjentakelse', isCorrect: true },
              { id: 'c', text: 'Overdrivelse', isCorrect: false },
              { id: 'd', text: 'Sirkelargument', isCorrect: false },
            ],
            solution:
              'King gjentar «I have a dream» ni ganger gjennom talen. Gjentakelsen bygger en rullende rytme som forsterker budskapet og gjør det uforglemmelig. Det er et klassisk eksempel på repetisjon som retorisk virkemiddel.',
          },
          {
            id: 'norsk-10-6-5-n-quiz1-q1',
            task: 'Hvorfor var Greta Thunbergs «How dare you?»-tale så virkningsfull?',
            options: [
              { id: 'a', text: 'Fordi den var lang og detaljert', isCorrect: false },
              { id: 'b', text: 'Fordi den brukte mye vitenskapelig data', isCorrect: false },
              { id: 'c', text: 'Fordi sterk patos møtte riktig kairos, i en tid da klimakrisen dominerte nyhetsbildet', isCorrect: true },
              { id: 'd', text: 'Fordi hun snakket på mange forskjellige språk', isCorrect: false },
            ],
            solution:
              'Thunbergs tale var kraftfull fordi den kombinerte autentisk sinne (patos) med et perfekt tidspunkt (kairos). Den ble holdt da klimakrisen dominerte nyhetsbildet og ungdom demonstrerte over hele verden.',
          },
          {
            id: 'norsk-10-6-5-n-quiz1-q2',
            task: 'Hva har Kings, Malalas og Thunbergs taler til felles?',
            options: [
              { id: 'a', text: 'De handler alle om det samme temaet', isCorrect: false },
              { id: 'b', text: 'De bruker alle retoriske virkemidler bevisst, treffer riktig kairos og har sterk etos', isCorrect: true },
              { id: 'c', text: 'De er alle holdt i FN', isCorrect: false },
              { id: 'd', text: 'De bruker alle bare logos-argumenter', isCorrect: false },
            ],
            solution:
              'Alle tre talene bruker retoriske virkemidler bevisst, treffer et publikum som er klart for budskapet (kairos), og talerne har sterk etos gjennom personlig erfaring eller autoritet. Det er kombinasjonen som gjør dem uforglemmelige.',
          },
        ],
      },
    },
    {
      id: 'norsk-10-6-5-n-summary',
      type: 'text',
      content: `## Oppsummering

De mektigste talene i historien kombinerer retorisk dyktighet med kairos, det rette øyeblikket. Kings «I Have a Dream» bruker gjentakelse og kontraster. Malalas FN-tale kombinerer personlig historie med klare krav. Thunbergs «How dare you?» bruker autentisk sinne i en tid moden for budskapet.

Felles for dem alle er bevisst bruk av retoriske virkemidler, sterk etos gjennom personlig erfaring, og et perfekt kairos der budskapet treffer et publikum som er klart for det. Taler har makt til å forandre verden, og de lærer oss at ordene vi velger, og tidspunktet vi velger dem på, virkelig betyr noe.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.6 NARRATIV: Retorikk i sosiale medier
// ============================================================================

export const CHAPTER_NORSK_10_6_6_NARRATIV: TextbookChapter = {
  id: 'norsk-10-6-6-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '6.6',
  title: 'Retorikk i sosiale medier',
  subtitle: 'Narrativ versjon',
  description:
    'Avdekk hvordan influencere, algoritmer og plattformer bruker retoriske teknikker for å påvirke deg, og lær å gjennomskue digital retorikk.',
  estimatedMinutes: 30,
  competenceGoals: [
    'analysere retoriske virkemidler i sosiale medier og digital kommunikasjon',
    'forstå hvordan influencere og algoritmer bruker overtalelsesteknikker',
    'vise kritisk bevissthet om digital retorikk og påvirkning',
  ],
  linkedChapterId: 'norsk-10-6-6',
  content: [
    {
      id: 'norsk-10-6-6-n-intro',
      type: 'text',
      content: `## Aristoteles møter Instagram

Hva har Aristoteles og en TikTok-influencer til felles? Mer enn du tror. Begge bruker etos, patos og logos for å overbevise. Forskjellen er at influenceren gjør det i 60 sekunder med filtre og musikk, mens Aristoteles brukte timer i det athenske amfiteateret.

Sosiale medier er vår tids viktigste retoriske arena. Det er her meninger dannes, trender skapes og holdninger formes. Men det er også her manipulasjonen er mest sofistikert, fordi den er skjult bak en fasade av autentisitet og vennskap. Når en influencer sier «dette produktet forandret livet mitt» med et smil og en rabattkode, bruker hun etos (personlig anbefaling fra noen du «kjenner»), patos (følelsen av å gå glipp av noe bra) og logos (den tilsynelatende bevisførselen: «det funket for meg»). Men det er i virkeligheten betalt reklame.

Digital retorikk er retorikk tilpasset digitale plattformers egne spilleregler. Algoritmene belønner innhold som vekker sterke følelser, som gjør at sensasjonelt og polariserende innhold sprer seg raskere enn nyanserte analyser. Det er patos som vinner i algoritmenes verden.`,
    },
    {
      id: 'norsk-10-6-6-n-section1',
      type: 'text',
      content: `## Influencere, algoritmer og din kritiske sans

Influencere bygger etos gjennom parasosial interaksjon: du føler at du kjenner dem, selv om de ikke vet hvem du er. De deler hverdagen sin, viser «den ekte meg», og skaper en følelse av nærhet og tillit. Dette er ekstremt effektivt fordi vi stoler mer på anbefalinger fra noen vi føler vi kjenner, enn fra anonyme reklamer.

Men mye av det som virker spontant og autentisk, er nøye planlagt. Bilder er redigert, «spontane» videoer har manus, og produktplasseringer er betalte avtaler. Den tilsynelatende autentisiteten er i seg selv et retorisk grep. Det er konstruert etos.

Algoritmene forsterker dette. De viser deg mer av det du engasjerer deg i, som betyr at du ser mer og mer innhold fra influencere du allerede følger. Ekkokamre og filterbobler oppstår ikke bare i nyhetskonsum, men også i forbrukerkultur. Du blir eksponert for produkter og holdninger som bekrefter det du allerede er mottakelig for.

For å utvikle kritisk digital retorikk bør du stille deg noen nøkkelspørsmål: Er dette ekte anbefaling eller betalt reklame? Hvilke følelser prøver innholdet å vekke? Hva er det jeg ikke ser? Presenteres nyanser eller bare ett perspektiv? Og det viktigste: Hvorfor viser algoritmen meg akkurat dette, akkurat nå?

Husk at du også er en retorisk aktør på sosiale medier. Alt du poster, liker og deler er en form for kommunikasjon som påvirker andre. Bevissthet om digital retorikk handler ikke bare om å gjennomskue andres teknikker, men også om å reflektere over dine egne.`,
    },
    {
      id: 'norsk-10-6-6-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-6-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på retorikk i sosiale medier:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-6-6-n-quiz1-q0',
            task: 'Hva er «parasosial interaksjon»?',
            options: [
              { id: 'a', text: 'Kommunikasjon mellom to personer som kjenner hverandre godt', isCorrect: false },
              { id: 'b', text: 'Følelsen av å kjenne en offentlig person du aldri har møtt personlig', isCorrect: true },
              { id: 'c', text: 'Samarbeid mellom influencere', isCorrect: false },
              { id: 'd', text: 'En type digital mobbing', isCorrect: false },
            ],
            solution:
              'Parasosial interaksjon er fenomenet der du føler at du kjenner en influencer eller kjendis, selv om de ikke vet hvem du er. Influencere bygger denne følelsen bevisst gjennom å dele hverdagen sin og skape nærhet.',
          },
          {
            id: 'norsk-10-6-6-n-quiz1-q1',
            task: 'Hvorfor sprer sensasjonelt innhold seg raskere enn nyansert innhold på sosiale medier?',
            options: [
              { id: 'a', text: 'Fordi sensasjonelt innhold alltid er mer sant', isCorrect: false },
              { id: 'b', text: 'Fordi algoritmene belønner innhold som vekker sterke følelser', isCorrect: true },
              { id: 'c', text: 'Fordi nyansert innhold er for langt til å lese', isCorrect: false },
              { id: 'd', text: 'Fordi plattformene censurerer nyansert innhold', isCorrect: false },
            ],
            solution:
              'Algoritmer er programmert til å vise deg innhold du engasjerer deg i. Sterke følelser som sinne, frykt og begeistring genererer mer engasjement (likes, delinger, kommentarer) enn nyanser. Derfor dominerer patos i algoritmenes verden.',
          },
          {
            id: 'norsk-10-6-6-n-quiz1-q2',
            task: 'En influencer sier «dette er min ærlige mening» om et produkt, men har en rabattkode. Hvilket retorisk grep brukes?',
            options: [
              { id: 'a', text: 'Logos, fordi hun presenterer bevis', isCorrect: false },
              { id: 'b', text: 'Konstruert etos, fordi tilsynelatende autentisitet er et bevisst retorisk valg', isCorrect: true },
              { id: 'c', text: 'Kairos, fordi hun velger riktig tidspunkt', isCorrect: false },
              { id: 'd', text: 'Ingen retorisk grep, hun er bare ærlig', isCorrect: false },
            ],
            solution:
              'Når en influencer sier «min ærlige mening» mens hun har et betalt samarbeid, er den tilsynelatende autentisiteten i seg selv et retorisk grep. Det er konstruert etos: hun bygger troverdighet gjennom å virke ekte, men det er en planlagt strategi.',
          },
        ],
      },
    },
    {
      id: 'norsk-10-6-6-n-summary',
      type: 'text',
      content: `## Oppsummering

Sosiale medier er vår tids viktigste retoriske arena. Influencere bygger etos gjennom parasosial interaksjon og tilsynelatende autentisitet. Algoritmer belønner patos-tungt innhold som vekker sterke følelser, noe som gjør at sensasjonelt og polariserende innhold sprer seg raskere enn nyanser.

Kritisk digital retorikk handler om å spørre: Er dette ekte eller betalt? Hvilke følelser vekkes? Hva utelates? Hvorfor viser algoritmen meg dette? Og ikke minst: hvordan bruker jeg selv retorikk i mine digitale uttrykk? Aristoteles ville kjent seg igjen, for etos, patos og logos er like aktive på Instagram som de var i det athenske amfiteateret.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const NORSK_10_NARRATIV_DEL4_CHAPTERS = [
  CHAPTER_NORSK_10_6_1_NARRATIV,
  CHAPTER_NORSK_10_6_2_NARRATIV,
  CHAPTER_NORSK_10_6_3_NARRATIV,
  CHAPTER_NORSK_10_6_4_NARRATIV,
  CHAPTER_NORSK_10_6_5_NARRATIV,
  CHAPTER_NORSK_10_6_6_NARRATIV,
];
