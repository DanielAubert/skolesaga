/**
 * Tekstbok innhold for Naturfag VG1 - NARRATIV VERSJON DEL 4A
 * Seksjon 5: Grunnleggende kjemi (Kapittel 5.1-5.6)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 5.1 NARRATIV: Grunnleggende organisk kjemi
// ============================================================================

export const CHAPTER_NAT_VG1_5_1_NARRATIV: TextbookChapter = {
  id: 'nat-vg1-5-1-narrativ',
  courseId: 'nat-vg1',
  chapterNumber: '5.1',
  title: 'Grunnleggende organisk kjemi',
  subtitle: 'Narrativ versjon',
  description:
    'Oppdag hvorfor karbon er universets mest allsidige byggestein, og hvordan ett enkelt grunnstoff kan danne over ti millioner ulike forbindelser.',
  estimatedMinutes: 40,
  competenceGoals: [
    'utforske egenskaper og reaksjoner til noen organiske og uorganiske karbonforbindelser',
  ],
  linkedChapterId: 'nat-vg1-5-1',
  content: [
    {
      id: 'nat-vg1-5-1-n-intro',
      type: 'text',
      content: `## Det ene grunnstoffet som forandret alt

Se deg rundt. Klærne du har på deg, maten du spiste til frokost, plasten i telefondekselet ditt, og til og med DNA-et i hver eneste celle i kroppen din. Alt dette har noe til felles: **karbon**. Det er et av de mest utrolige grunnstoffene i det periodiske systemet, og uten det hadde livet på jorden rett og slett ikke eksistert.

Men hva er det som gjør karbon så spesielt? Karbon har **atomnummer 6** og en **elektronkonfigurasjon på 2, 4**. Det betyr at det har fire elektroner i det ytterste skallet -- fire **valenselektroner**. Og nettopp dette tallet fire er nøkkelen til karbonets fantastiske allsidighet.

Med fire valenselektroner kan karbon danne **fire kovalente bindinger**. Det kan lage enkeltbindinger, dobbeltbindinger og trippelbindinger. Det kan binde seg til seg selv og danne **lange kjeder**, **forgreinede kjeder** og **ringer**. Og det stopper ikke der -- karbon kan også binde seg til mange andre grunnstoffer, som hydrogen, oksygen, nitrogen, svovel og halogener.

Resultatet av denne utrolige fleksibiliteten er et mangfold uten sidestykke i kjemien. Det finnes over **10 millioner kjente organiske forbindelser** -- langt flere enn alle forbindelser fra de øvrige grunnstoffene til sammen. Karbonforbindelser finnes i kroppen din som proteiner, DNA, fett og karbohydrater. De finnes i mat, klær, plast og legemidler. Og de finnes i fossile brensler som olje, gass og kull.

I dette kapittelet skal vi utforske hva som skiller organisk kjemi fra uorganisk kjemi, hvordan vi skriver formler for karbonforbindelser, og et fascinerende fenomen kalt isomeri.`,
    },
    {
      id: 'nat-vg1-5-1-n-section1',
      type: 'text',
      content: `## Organisk eller uorganisk -- hvor går grensen?

Begrepet «organisk kjemi» har en spennende historie. Opprinnelig trodde kjemikerne at organiske stoffer bare kunne lages av levende organismer -- at det fantes en mystisk «livskraft» som var nødvendig. Men i 1828 klarte den tyske kjemikeren Friedrich Wöhler å fremstille urea, et organisk stoff, fra uorganiske utgangsstoffer i laboratoriet. Livskraft-teorien falt, men navnet «organisk kjemi» ble hengende igjen.

I dag definerer vi **organisk kjemi** som kjemien til karbonforbindelser der karbon er bundet til hydrogen og ofte også til oksygen, nitrogen eller andre grunnstoffer. Organiske forbindelser har typisk **karbon-hydrogenbindinger** og/eller **karbon-karbonbindinger**. Tenk på stoffer du kjenner godt: **metan** (CH₄) er naturgass som varmer opp mange norske hjem. **Etanol** (C₂H₅OH) er alkoholen i drikkevarer og desinfeksjonsmidler. **Glukose** (C₆H₁₂O₆) er druesukkeret som gir cellene dine energi. Proteiner, fett og karbohydrater er alle organiske forbindelser.

Men ikke alle karbonforbindelser regnes som organiske. Det finnes en gruppe **uorganiske karbonforbindelser** med enklere struktur: **CO₂** (karbondioksid), som du puster ut og plantene bruker i fotosyntesen. **CO** (karbonmonoksid), den farlige gassen fra ufullstendig forbrenning. **Karbonater** som kalsiumkarbonat (CaCO₃), som finnes i kalkstein og marmor. Og **cyanider** som HCN, et ekstremt giftig stoff.

Grensen mellom organisk og uorganisk er ikke alltid krystallklar, men tommelfingerregelen er god: har forbindelsen C-H-bindinger og/eller C-C-bindinger, er den sannsynligvis organisk.`,
    },
    {
      id: 'nat-vg1-5-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-5-1-n-quiz1-q0',
            task: 'Hvor mange kovalente bindinger kan et karbonatom danne?',
            options: [
              { id: 'a', text: 'To', isCorrect: false },
              { id: 'b', text: 'Tre', isCorrect: false },
              { id: 'c', text: 'Fire', isCorrect: true },
              { id: 'd', text: 'Seks', isCorrect: false },
            ],
            solution:
              'Karbon har fire valenselektroner og kan derfor danne fire kovalente bindinger. Det er nettopp dette som gjør karbon så allsidig -- det kan koble seg til mange andre atomer samtidig.',
          },
          {
            id: 'nat-vg1-5-1-n-quiz1-q1',
            task: 'Hvilken av disse er en uorganisk karbonforbindelse?',
            options: [
              { id: 'a', text: 'Etanol (C₂H₅OH)', isCorrect: false },
              { id: 'b', text: 'Karbondioksid (CO₂)', isCorrect: true },
              { id: 'c', text: 'Metan (CH₄)', isCorrect: false },
              { id: 'd', text: 'Glukose (C₆H₁₂O₆)', isCorrect: false },
            ],
            solution:
              'Karbondioksid (CO₂) regnes som en uorganisk karbonforbindelse. Den mangler C-H-bindinger og C-C-bindinger, som er typiske for organiske forbindelser. Etanol, metan og glukose er alle organiske.',
          },
          {
            id: 'nat-vg1-5-1-n-quiz1-q2',
            task: 'Omtrent hvor mange kjente organiske forbindelser finnes det?',
            options: [
              { id: 'a', text: 'Rundt 100 000', isCorrect: false },
              { id: 'b', text: 'Rundt 1 million', isCorrect: false },
              { id: 'c', text: 'Rundt 5 millioner', isCorrect: false },
              { id: 'd', text: 'Over 10 millioner', isCorrect: true },
            ],
            solution:
              'Det finnes over 10 millioner kjente organiske forbindelser, langt flere enn forbindelsene fra alle andre grunnstoffer til sammen. Dette enorme mangfoldet skyldes karbonets unike evne til å danne fire bindinger, lange kjeder, forgreininger og ringer.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-5-1-n-section2',
      type: 'text',
      content: `## Fra molekylformel til strukturformel

Når kjemikere skal beskrive et organisk molekyl, har de flere verktøy å velge mellom. Det enkleste er **molekylformelen**, som bare forteller deg hvor mange atomer av hvert slag molekylet inneholder. For eksempel er molekylformelen for etan C₂H₆ -- to karbonatomer og seks hydrogenatomer.

Men molekylformelen forteller deg ikke hvordan atomene faktisk henger sammen. For det trenger du en **strukturformel**, som viser alle bindingene mellom atomene. I etan ser det slik ut: H₃C-CH₃, der streken mellom de to karbonatomene viser enkeltbindingen. Vil du spare plass, kan du bruke en **forkortet strukturformel**: CH₃CH₃.

Å kunne lese og forstå strukturformler er viktig, for det er strukturen som avgjør hvordan stoffet oppfører seg. Og her kommer et elegant navnsystem inn i bildet.

**IUPAC-navnsettingen** bruker prefikser som forteller deg hvor mange karbonatomer molekylet har. Disse prefiksene er som et universelt språk for kjemikere over hele verden: **met-** betyr 1 karbon, **et-** betyr 2, **prop-** betyr 3, **but-** betyr 4, **pent-** betyr 5, **heks-** betyr 6, **hept-** betyr 7, og **okt-** betyr 8. Karbonatomene kan ordne seg i **rettlinjede kjeder** (som butan: C-C-C-C), i **forgreinede kjeder** (med sidegrener), eller i **ringstrukturer** (som sykloheksan, der seks karbonatomer danner en ring).

Og dette bringer oss til et fascinerende fenomen: **isomeri**. Isomerer er molekyler som har nøyaktig **samme molekylformel**, men **ulik struktur** -- atomene er koblet sammen på forskjellige måter. Ta C₄H₁₀ som eksempel. Denne molekylformelen kan representere to helt forskjellige molekyler: **butan**, som er en rett kjede med fire karbonatomer, og **2-metylpropan**, som har tre karbonatomer i hovedkjeden med en metylgruppe som sidegren. Selv om de inneholder nøyaktig de samme atomene, har de ulike egenskaper som forskjellig kokepunkt, tetthet og reaktivitet. Jo flere karbonatomer et molekyl har, desto flere mulige isomerer finnes det.`,
    },
    {
      id: 'nat-vg1-5-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-5-1-n-quiz2-q0',
            task: 'Hva forteller en strukturformel deg som en molekylformel ikke gjør?',
            options: [
              { id: 'a', text: 'Hvor mange atomer molekylet har', isCorrect: false },
              { id: 'b', text: 'Hva stoffet heter', isCorrect: false },
              { id: 'c', text: 'Hvordan atomene er bundet til hverandre', isCorrect: true },
              { id: 'd', text: 'Kokepunktet til stoffet', isCorrect: false },
            ],
            solution:
              'En strukturformel viser hvordan atomene er bundet til hverandre, mens en molekylformel bare viser antall atomer av hvert slag. Strukturen er viktig fordi den bestemmer stoffets egenskaper.',
          },
          {
            id: 'nat-vg1-5-1-n-quiz2-q1',
            task: 'Hva betyr prefikset «prop-» i IUPAC-navnsettingen?',
            options: [
              { id: 'a', text: '2 karbonatomer', isCorrect: false },
              { id: 'b', text: '3 karbonatomer', isCorrect: true },
              { id: 'c', text: '4 karbonatomer', isCorrect: false },
              { id: 'd', text: '5 karbonatomer', isCorrect: false },
            ],
            solution:
              'Prop- betyr 3 karbonatomer. De vanligste prefiksene er met- (1), et- (2), prop- (3), but- (4), pent- (5), heks- (6), hept- (7) og okt- (8).',
          },
          {
            id: 'nat-vg1-5-1-n-quiz2-q2',
            task: 'Hva er isomerer?',
            options: [
              { id: 'a', text: 'Molekyler med ulik molekylformel men like egenskaper', isCorrect: false },
              { id: 'b', text: 'Molekyler med samme molekylformel men ulik struktur', isCorrect: true },
              { id: 'c', text: 'Atomer med samme antall protoner men ulikt antall nøytroner', isCorrect: false },
              { id: 'd', text: 'Grunnstoffer som tilhører samme gruppe i periodesystemet', isCorrect: false },
            ],
            solution:
              'Isomerer er molekyler som har nøyaktig samme molekylformel, men der atomene er koblet sammen på ulike måter (ulik struktur). For eksempel har butan og 2-metylpropan begge formelen C₄H₁₀, men ulik struktur og ulike egenskaper.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-5-1-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du oppdaget hva som gjør karbon til det mest allsidige grunnstoffet i kjemien. Med sine **fire valenselektroner** kan karbon danne fire kovalente bindinger -- enkelt-, dobbelt- og trippelbindinger -- og bygge lange kjeder, forgreinede kjeder og ringer. Dette gir opphav til over **10 millioner kjente organiske forbindelser**.

Du har lært å skille mellom **organisk kjemi** (karbonforbindelser med C-H- og C-C-bindinger, som metan, etanol og glukose) og **uorganiske karbonforbindelser** (enklere forbindelser som CO₂, CO og karbonater). Du har sett hvordan kjemikere bruker **molekylformler**, **strukturformler** og **forkortede strukturformler** for å beskrive molekyler, og du har lært **IUPAC-prefiksene** for å navngi forbindelser etter antall karbonatomer (met-, et-, prop-, but- osv.).

Til slutt har du møtt fenomenet **isomeri** -- at molekyler med nøyaktig samme molekylformel kan ha helt ulik struktur og dermed forskjellige egenskaper, som kokepunkt, tetthet og reaktivitet. Jo flere karbonatomer, desto flere mulige isomerer.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.2 NARRATIV: Hydrokarboner -- alkaner, alkener og alkyner
// ============================================================================

export const CHAPTER_NAT_VG1_5_2_NARRATIV: TextbookChapter = {
  id: 'nat-vg1-5-2-narrativ',
  courseId: 'nat-vg1',
  chapterNumber: '5.2',
  title: 'Hydrokarboner – alkaner, alkener og alkyner',
  subtitle: 'Narrativ versjon',
  description:
    'Dykk inn i hydrokarbonenes verden og oppdag forskjellen mellom mettede og umettede forbindelser -- fra den stille metangassen til den glødende sveiseflammen.',
  estimatedMinutes: 40,
  competenceGoals: [
    'utforske egenskaper og reaksjoner til noen organiske og uorganiske karbonforbindelser',
  ],
  linkedChapterId: 'nat-vg1-5-2',
  content: [
    {
      id: 'nat-vg1-5-2-n-intro',
      type: 'text',
      content: `## De enkleste karbonforbindelsene

Tenk deg de enkleste organiske forbindelsene som finnes -- molekyler som kun er bygd opp av karbon og hydrogen. Ikke noe oksygen, ikke noe nitrogen, bare de to letteste grunnstoffene i organisk kjemi. Disse forbindelsene kalles **hydrokarboner**, og de er grunnmuren i all organisk kjemi.

Hydrokarboner deles inn i tre hovedgrupper basert på hva slags bindinger som finnes mellom karbonatomene. **Alkaner** har bare enkeltbindinger (C-C) og følger den generelle formelen CₙH₂ₙ₊₂ med endelsen **-an**. **Alkener** har minst én dobbeltbinding (C=C) med formelen CₙH₂ₙ og endelsen **-en**. **Alkyner** har minst én trippelbinding (C≡C) med formelen CₙH₂ₙ₋₂ og endelsen **-yn**.

Et viktig skille går mellom **mettede** og **umettede** hydrokarboner. Alkaner er **mettede** -- alle bindingsplassene er «fylt opp» med hydrogen, og det finnes bare enkeltbindinger. Alkener og alkyner er **umettede** -- de har dobbelt- eller trippelbindinger som i prinsippet kan åpnes opp for å ta imot flere hydrogenatomer.

Denne tilsynelatende lille forskjellen i bindingstype har enorme konsekvenser for stoffenes egenskaper og reaktivitet. La oss se nærmere på hver gruppe.`,
    },
    {
      id: 'nat-vg1-5-2-n-section1',
      type: 'text',
      content: `## Alkanene -- en velordnet familie

Alkanene er den mest oversiktlige gruppen hydrokarboner. De danner det kjemikere kaller en **homolog serie** -- en serie forbindelser der hvert molekyl skiller seg fra det neste med nøyaktig én CH₂-enhet. Det er som en trapp der hvert trinn legger til ett karbonatom og to hydrogenatomer.

La oss gå gjennom de første alkanene. **Metan** (CH₄) er den enkleste, med bare ett karbonatom. Den koker ved hele -161 °C og er en gass ved romtemperatur. Du kjenner den kanskje som naturgass. **Etan** (C₂H₆) koker ved -89 °C, også en gass. **Propan** (C₃H₈) koker ved -42 °C -- den brukes i propanflasker til grilling og camping. **Butan** (C₄H₁₀) koker ved -1 °C og finnes i lightere. Legg merke til mønsteret: kokepunktet stiger for hvert ekstra karbonatom.

Når vi kommer til **pentan** (C₅H₁₂) med kokepunkt 36 °C, er vi plutselig over i væskeform ved romtemperatur. **Heksan** (C₆H₁₄) koker ved 69 °C, og **oktan** (C₈H₁₈) koker ved 126 °C -- oktan er en viktig bestanddel i bensin.

Hvorfor stiger kokepunktet så jevnt? Svaret ligger i **van der Waals-kreftene**. Større molekyler har større overflate, noe som gir sterkere van der Waals-krefter mellom molekylene. Det betyr at det trengs mer energi for å rive molekylene løs fra hverandre og få dem over i gassform. Denne trenden er vakker i sin forutsigbarhet: du kan nesten gjette kokepunktet til et alkan bare ved å telle karbonatomer.`,
    },
    {
      id: 'nat-vg1-5-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-5-2-n-quiz1-q0',
            task: 'Hva er den generelle formelen for alkaner?',
            options: [
              { id: 'a', text: 'CₙH₂ₙ', isCorrect: false },
              { id: 'b', text: 'CₙH₂ₙ₊₂', isCorrect: true },
              { id: 'c', text: 'CₙH₂ₙ₋₂', isCorrect: false },
              { id: 'd', text: 'CₙHₙ', isCorrect: false },
            ],
            solution:
              'Alkaner har den generelle formelen CₙH₂ₙ₊₂. Alle bindingsplasser er «mettet» med hydrogen, og det finnes bare enkeltbindinger mellom karbonatomene.',
          },
          {
            id: 'nat-vg1-5-2-n-quiz1-q1',
            task: 'Hvorfor øker kokepunktet med lengre karbonkjeder hos alkaner?',
            options: [
              { id: 'a', text: 'Fordi lengre kjeder danner hydrogenbindinger', isCorrect: false },
              { id: 'b', text: 'Fordi lengre kjeder er tyngre og synker raskere', isCorrect: false },
              { id: 'c', text: 'Fordi større molekyler gir sterkere van der Waals-krefter', isCorrect: true },
              { id: 'd', text: 'Fordi karbonatomene blir varmere', isCorrect: false },
            ],
            solution:
              'Større molekyler har større overflate, noe som gir sterkere van der Waals-krefter (London-krefter) mellom molekylene. Sterkere intermolekylære krefter betyr høyere kokepunkt.',
          },
          {
            id: 'nat-vg1-5-2-n-quiz1-q2',
            task: 'Hva betyr det at et hydrokarbon er «mettet»?',
            options: [
              { id: 'a', text: 'At det er løst i vann', isCorrect: false },
              { id: 'b', text: 'At det inneholder bare enkeltbindinger og maksimalt med hydrogen', isCorrect: true },
              { id: 'c', text: 'At det er en fast forbindelse ved romtemperatur', isCorrect: false },
              { id: 'd', text: 'At det har nådd sitt høyeste kokepunkt', isCorrect: false },
            ],
            solution:
              'Et mettet hydrokarbon (alkan) har bare enkeltbindinger mellom karbonatomene, og alle tilgjengelige bindingsplasser er fylt med hydrogen. Det kan ikke ta opp flere hydrogenatomer uten å bryte opp strukturen.',
          },
          {
            id: 'nat-vg1-5-2-n-quiz1-q3',
            task: 'Hva kalles serien av alkaner der hvert molekyl skiller seg med én CH₂-enhet?',
            options: [
              { id: 'a', text: 'En isomerisk serie', isCorrect: false },
              { id: 'b', text: 'En periodisk serie', isCorrect: false },
              { id: 'c', text: 'En homolog serie', isCorrect: true },
              { id: 'd', text: 'En reaktiv serie', isCorrect: false },
            ],
            solution:
              'Alkanene utgjør en homolog serie -- en serie forbindelser der hvert påfølgende molekyl skiller seg fra det forrige med nøyaktig én CH₂-enhet.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-5-2-n-section2',
      type: 'text',
      content: `## Alkener -- dobbeltbindingenes verden

Alkener har minst én **dobbeltbinding** (C=C) mellom to karbonatomer, og følger formelen CₙH₂ₙ. Dobbeltbindingen gjør dem mer reaktive enn alkaner, fordi den kan «åpnes opp» i kjemiske reaksjoner.

Det enkleste alkenet er **eten** (etylen, CH₂=CH₂). Du bruker det kanskje uten å vite det -- eten er råstoffet for **polyetylen**, en av verdens mest brukte plasttyper. Eten er faktisk også et naturlig plantehormon som får frukt til å modne. Deretter kommer **propen** (CH₃-CH=CH₂) og **buten** (C₄H₈).

Dobbeltbindingen i alkener fører til et fascinerende fenomen: **cis/trans-isomeri**. Fordi dobbeltbindingen hindrer fri rotasjon rundt bindingsaksen, kan grupper som sitter på hver side av dobbeltbindingen enten peke i samme retning eller i motsatt retning. Når like grupper sitter på **samme side**, kaller vi det en **cis-isomer**. Når de sitter på **motsatt side**, kaller vi det en **trans-isomer**. Cis- og trans-isomerer har forskjellige fysiske egenskaper som kokepunkt og smeltepunkt, selv om de har identisk molekylformel.

## Alkyner -- trippelbindingenes kraft

Alkyner tar det hele ett steg videre med minst én **trippelbinding** (C≡C), og de følger formelen CₙH₂ₙ₋₂. Det enkleste alkynet er **etyn**, bedre kjent som **acetylen** (HC≡CH). Du har kanskje sett det i bruk -- acetylen brukes i **sveiseflammer** fordi forbrenningen gir ekstremt høy temperatur.

Sammenligningen mellom de tre bindingstypene er talende: En **C-C enkeltbinding** har lengde 154 pm og styrke 347 kJ/mol. En **C=C dobbeltbinding** er kortere (134 pm) og sterkere (614 kJ/mol). En **C≡C trippelbinding** er enda kortere (120 pm) og sterkest (839 kJ/mol). Trippelbindingen gir alkyner **lineær geometri** rundt bindingen og gjør dem **svært reaktive**. Propyn (CH₃-C≡CH) er et annet eksempel.

For å avgjøre hvilken gruppe et ukjent hydrokarbon tilhører, sjekker du molekylformelen mot de generelle formlene. Har du for eksempel C₄H₈, tester du: alkan CₙH₂ₙ₊₂ gir C₄H₁₀ (nei), alken CₙH₂ₙ gir C₄H₈ (ja!). Det er et alken -- **buten**. Buten kan dessuten finnes som flere isomerer: but-1-en, but-2-en (som cis eller trans), og 2-metylpropen.`,
    },
    {
      id: 'nat-vg1-5-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-5-2-n-quiz2-q0',
            task: 'Et hydrokarbon har formelen C₃H₄. Hvilken gruppe tilhører det?',
            options: [
              { id: 'a', text: 'Alkan', isCorrect: false },
              { id: 'b', text: 'Alken', isCorrect: false },
              { id: 'c', text: 'Alkyn', isCorrect: true },
              { id: 'd', text: 'Karboksylsyre', isCorrect: false },
            ],
            solution:
              'Sjekk formlene: Alkan CₙH₂ₙ₊₂ gir C₃H₈ (nei). Alken CₙH₂ₙ gir C₃H₆ (nei). Alkyn CₙH₂ₙ₋₂ gir C₃H₄ (ja!). Det er et alkyn -- propyn.',
          },
          {
            id: 'nat-vg1-5-2-n-quiz2-q1',
            task: 'Hva brukes acetylen (etyn) til på grunn av sin høye forbrenningstemperatur?',
            options: [
              { id: 'a', text: 'Til matlaging', isCorrect: false },
              { id: 'b', text: 'Til sveising', isCorrect: true },
              { id: 'c', text: 'Til oppvarming av boliger', isCorrect: false },
              { id: 'd', text: 'Til produksjon av plast', isCorrect: false },
            ],
            solution:
              'Acetylen (etyn, HC≡CH) gir en ekstremt varm flamme ved forbrenning og brukes derfor i sveiseflammer. Trippelbindingen inneholder mye energi som frigjøres ved forbrenning.',
          },
          {
            id: 'nat-vg1-5-2-n-quiz2-q2',
            task: 'Hva er cis/trans-isomeri?',
            options: [
              { id: 'a', text: 'Isomeri der molekyler har ulikt antall karbonatomer', isCorrect: false },
              { id: 'b', text: 'Isomeri som oppstår fordi dobbeltbindingen hindrer fri rotasjon', isCorrect: true },
              { id: 'c', text: 'Isomeri mellom alkaner og alkener', isCorrect: false },
              { id: 'd', text: 'Isomeri som bare forekommer i alkyner', isCorrect: false },
            ],
            solution:
              'Cis/trans-isomeri oppstår fordi dobbeltbindingen hindrer fri rotasjon. Grupper kan dermed sitte på samme side (cis) eller motsatt side (trans) av dobbeltbindingen, noe som gir forskjellige fysiske egenskaper.',
          },
          {
            id: 'nat-vg1-5-2-n-quiz2-q3',
            task: 'Hvilken bindingstype er kortest og sterkest?',
            options: [
              { id: 'a', text: 'C-C enkeltbinding', isCorrect: false },
              { id: 'b', text: 'C=C dobbeltbinding', isCorrect: false },
              { id: 'c', text: 'C≡C trippelbinding', isCorrect: true },
              { id: 'd', text: 'Alle tre er like sterke', isCorrect: false },
            ],
            solution:
              'Trippelbindingen (C≡C) er kortest (120 pm) og sterkest (839 kJ/mol), sammenlignet med dobbeltbindingen (134 pm, 614 kJ/mol) og enkeltbindingen (154 pm, 347 kJ/mol).',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-5-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Hydrokarboner er de enkleste organiske forbindelsene, bygd opp av bare karbon og hydrogen. De deles i tre grupper: **alkaner** med enkeltbindinger (CₙH₂ₙ₊₂, endelse -an), **alkener** med minst én dobbeltbinding (CₙH₂ₙ, endelse -en), og **alkyner** med minst én trippelbinding (CₙH₂ₙ₋₂, endelse -yn).

Alkaner er **mettede** -- alle bindingsplasser er fylt med hydrogen. Kokepunktet øker med kjedens lengde fordi **van der Waals-kreftene** blir sterkere. De utgjør en **homolog serie** der hvert molekyl skiller seg med én CH₂-enhet.

Alkener og alkyner er **umettede** og mer reaktive. Alkener viser **cis/trans-isomeri** fordi dobbeltbindingen hindrer fri rotasjon. Alkyner som acetylen brukes i sveising takket være den høye forbrenningstemperaturen. Bindingslengden avtar og bindingsstyrken øker fra enkelt- via dobbelt- til trippelbinding.

For å bestemme type hydrokarbon sjekker du molekylformelen mot de generelle formlene for alkaner, alkener og alkyner.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.3 NARRATIV: Funksjonelle grupper og deres egenskaper
// ============================================================================

export const CHAPTER_NAT_VG1_5_3_NARRATIV: TextbookChapter = {
  id: 'nat-vg1-5-3-narrativ',
  courseId: 'nat-vg1',
  chapterNumber: '5.3',
  title: 'Funksjonelle grupper og deres egenskaper',
  subtitle: 'Narrativ versjon',
  description:
    'Fra lukten av vanilje til syrligheten i eddik -- oppdag hvordan små atomgrupper gir organiske stoffer helt forskjellige egenskaper og bruksområder.',
  estimatedMinutes: 40,
  competenceGoals: [
    'utforske egenskaper og reaksjoner til noen organiske og uorganiske karbonforbindelser, gi eksempler på anvendelser',
  ],
  linkedChapterId: 'nat-vg1-5-3',
  content: [
    {
      id: 'nat-vg1-5-3-n-intro',
      type: 'text',
      content: `## Det som gir stoffene personlighet

Forestill deg et helt vanlig hydrokarbonmolekyl -- en kjede av karbon- og hydrogenatomer. Det er stabilt, upolart og ganske kjedelig kjemisk sett. Men hva skjer hvis vi bytter ut ett av hydrogenatomene med en annen atomgruppe? Plutselig endrer alt seg. Stoffet kan bli en alkohol du kan drikke, en syre som smaker surt, eller et duftende stoff som minner om frukt.

Hemmeligheten ligger i **funksjonelle grupper**. En funksjonell gruppe er en bestemt atomgruppe i et organisk molekyl som gir stoffet sine karakteristiske kjemiske egenskaper. Karbonkjeden er bare «skjelettet» -- det er den funksjonelle gruppen som bestemmer hvordan stoffet oppfører seg, lukter, smaker og reagerer.

De viktigste funksjonelle gruppene du bør kjenne er: **hydroksylgruppen** (-OH) som gir alkoholer med endelse -ol, **karboksylgruppen** (-COOH) som gir karboksylsyrer med endelse -syre, **estergruppen** (-COO-) som gir estere med endelse -oat, **aminogruppen** (-NH₂) som gir aminer med endelse -amin, **aldehydgruppen** (-CHO) som gir aldehyder med endelse -al, og **ketogruppen** (-CO-) som gir ketoner med endelse -on.

Tenk på det slik: karbonkjeden er som et chassis på en bil, mens den funksjonelle gruppen er motoren som bestemmer hvordan bilen oppfører seg. Samme chassis kan gi helt ulike biler med ulike motorer. La oss se nærmere på hver av disse «motorene».`,
    },
    {
      id: 'nat-vg1-5-3-n-section1',
      type: 'text',
      content: `## Alkoholer -- den polare OH-gruppens magi

**Alkoholer** er organiske forbindelser som inneholder **hydroksylgruppen (-OH)** bundet til en karbonkjede. Navnsettingen er enkel: du tar stammnavnet fra karbonkjeden og legger til endelsen **-ol**.

Du kjenner sikkert flere alkoholer fra hverdagen. **Metanol** (CH₃OH) er den enkleste, med bare ett karbonatom. Men pass deg -- metanol er svært giftig! Selv små mengder kan gi blindhet eller død. Den brukes som løsemiddel og drivstoff, men skal aldri drikkes. **Etanol** (C₂H₅OH) er derimot den «drikkbare» alkoholen du finner i øl, vin og sprit. Den brukes også til desinfeksjon og som drivstoff. **Propan-1,2,3-triol**, bedre kjent som **glyserol**, har tre OH-grupper og brukes i kremer og matvarer.

Det som gjør alkoholer spesielle, er den polare -OH-gruppen. Denne gruppen kan danne **hydrogenbindinger** med andre molekyler, noe som har dramatisk effekt på egenskapene. Sammenlign etanol (C₂H₅OH) med etan (C₂H₆) -- de er omtrent like store molekyler, men etanol koker ved 78 °C mens etan koker ved -89 °C. Det er en forskjell på over 160 grader! Grunnen er at hydrogenbindingene mellom etanolmolekylene er mye sterkere enn de svake van der Waals-kreftene mellom etanmolekylene.

Den polare OH-gruppen gjør også korte alkoholer **løselige i vann**, fordi de kan danne hydrogenbindinger med vannmolekylene. Men her er det et viktig poeng: jo lengre den upolare karbonkjeden blir, desto mindre løselig blir alkoholen i vann. Den upolare kjeden dominerer til slutt over den polare OH-gruppen.`,
    },
    {
      id: 'nat-vg1-5-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-5-3-n-quiz1-q0',
            task: 'Hva er en funksjonell gruppe?',
            options: [
              { id: 'a', text: 'Et annet navn for karbonkjeden', isCorrect: false },
              { id: 'b', text: 'En bestemt atomgruppe som gir stoffet karakteristiske kjemiske egenskaper', isCorrect: true },
              { id: 'c', text: 'En gruppe grunnstoffer i periodesystemet', isCorrect: false },
              { id: 'd', text: 'En type kjemisk binding', isCorrect: false },
            ],
            solution:
              'En funksjonell gruppe er en bestemt atomgruppe i et organisk molekyl som gir stoffet sine karakteristiske kjemiske egenskaper. Karbonkjeden er skjelettet, mens den funksjonelle gruppen bestemmer oppførselen.',
          },
          {
            id: 'nat-vg1-5-3-n-quiz1-q1',
            task: 'Hvorfor har etanol mye høyere kokepunkt enn etan, selv om molekylene er omtrent like store?',
            options: [
              { id: 'a', text: 'Fordi etanol er tyngre', isCorrect: false },
              { id: 'b', text: 'Fordi etanol har sterkere kovalente bindinger', isCorrect: false },
              { id: 'c', text: 'Fordi etanols OH-gruppe danner hydrogenbindinger', isCorrect: true },
              { id: 'd', text: 'Fordi etan er en gass og etanol er en væske', isCorrect: false },
            ],
            solution:
              'Etanol har en polar -OH-gruppe som kan danne hydrogenbindinger med andre etanolmolekyler. Hydrogenbindinger er mye sterkere enn van der Waals-kreftene mellom etanmolekyler, og dermed trengs det mer energi for å koke etanol.',
          },
          {
            id: 'nat-vg1-5-3-n-quiz1-q2',
            task: 'Hvilken alkohol er svært giftig og kan gi blindhet?',
            options: [
              { id: 'a', text: 'Etanol', isCorrect: false },
              { id: 'b', text: 'Glyserol', isCorrect: false },
              { id: 'c', text: 'Metanol', isCorrect: true },
              { id: 'd', text: 'Propanol', isCorrect: false },
            ],
            solution:
              'Metanol (CH₃OH) er svært giftig. Selv små mengder kan gi blindhet eller død. Den brukes som løsemiddel og drivstoff, men skal aldri forveksles med etanol.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-5-3-n-section2',
      type: 'text',
      content: `## Syrer, estere og andre funksjonelle grupper

**Karboksylsyrer** inneholder **karboksylgruppen (-COOH)** og er, som navnet antyder, sure. Den enkleste er **metansyre** (HCOOH), også kalt maursyre -- den finnes faktisk i maurstikk og er grunnen til at det svir! **Etansyre** (CH₃COOH) kjenner du som **eddiksyre** -- vanlig eddik inneholder omtrent 5 % av dette stoffet. Og **sitronsyre** er det som gir sitrusfrukt den friske, sure smaken. Karboksylsyrer er **svake syrer**, som betyr at de ikke avgir alle hydrogenionene sine i vann.

Noe magisk skjer når en karboksylsyre reagerer med en alkohol: det dannes en **ester** og vann spaltes av. Denne **kondensasjonsreaksjonen** kan skrives: karboksylsyre + alkohol → ester + vann. Estere er ansvarlige for noen av de mest behagelige luktene vi kjenner. **Etylacetat** brukes som løsemiddel i neglelakkfjerner. **Etylbutanoat** lukter ananas. **Pentylacetat** lukter banan. Mange av de naturlige aromaene i frukt og bær skyldes ulike estere.

La oss også se på de tre siste funksjonelle gruppene. **Aminer** inneholder **aminogruppen (-NH₂)** og er viktige byggesteiner i aminosyrer og proteiner. Fiskelukt skyldes ofte aminer! Et eksempel er **metylamin** (CH₃NH₂).

**Aldehyder** har en **karbonylgruppe (C=O) ytterst i kjeden** (-CHO) og navngis med endelsen -al. **Metanal** (formaldehyd) brukes til konservering, og **vanillin** er et aromatisk aldehyd som gir vanilje sin karakteristiske duft.

**Ketoner** har **karbonylgruppen (C=O) inne i kjeden** (-CO-) og navngis med endelsen -on. Det mest kjente eksempelet er **propanon** (aceton), som brukes som løsemiddel -- blant annet i neglelakkfjerner.

En viktig forskjell: Aldehyder og ketoner har lavere kokepunkt enn alkoholer med tilsvarende størrelse, fordi de ikke kan danne hydrogenbindinger med seg selv (de mangler O-H-bindinger).`,
    },
    {
      id: 'nat-vg1-5-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-5-3-n-quiz2-q0',
            task: 'Hva dannes når en karboksylsyre reagerer med en alkohol?',
            options: [
              { id: 'a', text: 'Et alken og hydrogen', isCorrect: false },
              { id: 'b', text: 'En ester og vann', isCorrect: true },
              { id: 'c', text: 'Et keton og karbondioksid', isCorrect: false },
              { id: 'd', text: 'Et amin og oksygen', isCorrect: false },
            ],
            solution:
              'Når en karboksylsyre reagerer med en alkohol, dannes en ester og vann spaltes av. Denne kondensasjonsreaksjonen gir mange av de fruktaktige luktene vi kjenner.',
          },
          {
            id: 'nat-vg1-5-3-n-quiz2-q1',
            task: 'Hvilket organisk stoff er hovedbestanddelen i eddik?',
            options: [
              { id: 'a', text: 'Metansyre (maursyre)', isCorrect: false },
              { id: 'b', text: 'Sitronsyre', isCorrect: false },
              { id: 'c', text: 'Etansyre (eddiksyre)', isCorrect: true },
              { id: 'd', text: 'Etanol', isCorrect: false },
            ],
            solution:
              'Vanlig eddik inneholder omtrent 5 % etansyre (eddiksyre, CH₃COOH). Etansyre er en karboksylsyre med -COOH-gruppen.',
          },
          {
            id: 'nat-vg1-5-3-n-quiz2-q2',
            task: 'Identifiser stoffklassen til CH₃COCH₃ (propanon/aceton):',
            options: [
              { id: 'a', text: 'Alkohol', isCorrect: false },
              { id: 'b', text: 'Aldehyd', isCorrect: false },
              { id: 'c', text: 'Karboksylsyre', isCorrect: false },
              { id: 'd', text: 'Keton', isCorrect: true },
            ],
            solution:
              'Propanon (aceton, CH₃COCH₃) er et keton. Det har karbonylgruppen (C=O) inne i kjeden, ikke ytterst. Ketoner navngis med endelsen -on.',
          },
          {
            id: 'nat-vg1-5-3-n-quiz2-q3',
            task: 'Hvilken funksjonell gruppe finnes i aminosyrer og proteiner?',
            options: [
              { id: 'a', text: 'Hydroksylgruppen (-OH)', isCorrect: false },
              { id: 'b', text: 'Aminogruppen (-NH₂)', isCorrect: true },
              { id: 'c', text: 'Aldehydgruppen (-CHO)', isCorrect: false },
              { id: 'd', text: 'Estergruppen (-COO-)', isCorrect: false },
            ],
            solution:
              'Aminogruppen (-NH₂) finnes i aminer og er en viktig byggestein i aminosyrer og proteiner. Aminosyrer inneholder faktisk både en aminogruppe og en karboksylgruppe.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-5-3-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært at det er **funksjonelle grupper** som gir organiske molekyler deres karakteristiske egenskaper. Karbonkjeden er skjelettet, men den funksjonelle gruppen bestemmer oppførselen.

**Alkoholer** (-OH) har hydrogenbindinger som gir høyt kokepunkt og vannløselighet for korte kjeder. Metanol er giftig, etanol er drikkbar, og glyserol brukes i kremer. **Karboksylsyrer** (-COOH) er svake syrer som smaker surt -- eddiksyre og sitronsyre er kjente eksempler. **Estere** (-COO-) dannes ved reaksjon mellom en karboksylsyre og en alkohol i en kondensasjonsreaksjon, og gir ofte fruktaroma (ananas, banan).

**Aminer** (-NH₂) er byggesteiner i proteiner og aminosyrer. **Aldehyder** (-CHO) har karbonylgruppen ytterst i kjeden (metanal brukes til konservering, vanillin gir vaniljeduft). **Ketoner** (-CO-) har karbonylgruppen inne i kjeden (aceton brukes som løsemiddel). Aldehyder og ketoner har lavere kokepunkt enn tilsvarende alkoholer fordi de ikke kan danne hydrogenbindinger med seg selv.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.4 NARRATIV: Reaksjoner i organisk kjemi
// ============================================================================

export const CHAPTER_NAT_VG1_5_4_NARRATIV: TextbookChapter = {
  id: 'nat-vg1-5-4-narrativ',
  courseId: 'nat-vg1',
  chapterNumber: '5.4',
  title: 'Reaksjoner i organisk kjemi',
  subtitle: 'Narrativ versjon',
  description:
    'Fra flammene i en gasspeis til plasten i hverdagen -- utforsk de fem viktigste reaksjonstypene som forvandler organiske stoffer.',
  estimatedMinutes: 40,
  competenceGoals: [
    'utforske egenskaper og reaksjoner til noen organiske og uorganiske karbonforbindelser',
  ],
  linkedChapterId: 'nat-vg1-5-4',
  content: [
    {
      id: 'nat-vg1-5-4-n-intro',
      type: 'text',
      content: `## Når molekyler forandrer seg

Organiske stoffer er ikke bare stille tilskuere i verden -- de reagerer, forandrer seg og omdannes til nye stoffer i en rekke forskjellige typer kjemiske reaksjoner. Noen av disse reaksjonene skjer hele tiden rundt deg uten at du tenker over det. Når du tenner et stearinlys, skjer det en forbrenningsreaksjon. Når kroppen din bryter ned maten du spiser, skjer det en rekke organiske reaksjoner. Når plast produseres i en fabrikk, er det polymerisering som foregår.

I dette kapittelet skal vi se på de fem viktigste reaksjonstypene i organisk kjemi:

1. **Forbrenning** -- der organiske stoffer reagerer med oksygen
2. **Addisjonsreaksjoner** -- der atomer adderes over en dobbelt- eller trippelbinding
3. **Substitusjonsreaksjoner** -- der et atom eller en gruppe byttes ut med en annen
4. **Kondensasjonsreaksjoner** -- der to molekyler kobles sammen mens vann spaltes av
5. **Polymerisering** -- der mange små molekyler kobles til lange kjeder

Hver av disse reaksjonstypene har sine egne kjennetegn, og sammen dekker de det meste av hva som skjer med organiske stoffer i naturen og i industrien.`,
    },
    {
      id: 'nat-vg1-5-4-n-section1',
      type: 'text',
      content: `## Forbrenning -- energi fra organiske stoffer

**Forbrenning** er kanskje den mest kjente kjemiske reaksjonen -- et organisk stoff reagerer med oksygen (O₂) og frigjør energi. Men det er en avgjørende forskjell mellom god og dårlig forbrenning.

Ved **fullstendig forbrenning** er det nok oksygen til at alt karbon omdannes til karbondioksid (CO₂) og alt hydrogen til vann (H₂O). Ta metan som eksempel: CH₄ + 2O₂ → CO₂ + 2H₂O. Produktene er relativt ufarlige, og all den kjemiske energien frigjøres. Det er dette som skjer i en godt innstilt gassovn.

Men hva skjer når det ikke er nok oksygen? Da får vi **ufullstendig forbrenning**, og her blir ting farlig. I stedet for CO₂ dannes **karbonmonoksid (CO)** og/eller **sot (C)**. Eksempel: 2CH₄ + 3O₂ → 2CO + 4H₂O. CO er en **luktfri, fargeløs og svært giftig gass** som binder seg til hemoglobin i blodet ditt **200 ganger sterkere enn oksygen**. Det betyr at blodet mister evnen til å transportere oksygen til cellene. CO-forgiftning kan oppstå i dårlig ventilerte rom med gasskaminer, vedovner eller bilmotorer som går i en lukket garasje.

La oss se på et regneeksempel for å forstå balanseringen. For fullstendig forbrenning av propan (C₃H₈) starter vi med den ubalanserte ligningen: C₃H₈ + O₂ → CO₂ + H₂O. Vi balanserer karbon (3 CO₂), deretter hydrogen (4 H₂O), og til slutt oksygen (3×2 + 4×1 = 10 oksygenatomer, altså 5 O₂). Den balanserte ligningen blir: **C₃H₈ + 5O₂ → 3CO₂ + 4H₂O**.`,
    },
    {
      id: 'nat-vg1-5-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-5-4-n-quiz1-q0',
            task: 'Hva dannes ved fullstendig forbrenning av et hydrokarbon?',
            options: [
              { id: 'a', text: 'CO og H₂O', isCorrect: false },
              { id: 'b', text: 'CO₂ og H₂O', isCorrect: true },
              { id: 'c', text: 'CO₂ og H₂', isCorrect: false },
              { id: 'd', text: 'C og H₂O', isCorrect: false },
            ],
            solution:
              'Ved fullstendig forbrenning er det nok oksygen til at alt karbon omdannes til CO₂ og alt hydrogen til H₂O. Energi frigjøres i prosessen.',
          },
          {
            id: 'nat-vg1-5-4-n-quiz1-q1',
            task: 'Hvorfor er karbonmonoksid (CO) spesielt farlig?',
            options: [
              { id: 'a', text: 'Fordi den lukter sterkt og irriterer lungene', isCorrect: false },
              { id: 'b', text: 'Fordi den er lettantennelig og eksploderer', isCorrect: false },
              { id: 'c', text: 'Fordi den binder seg til hemoglobin 200× sterkere enn oksygen', isCorrect: true },
              { id: 'd', text: 'Fordi den løser seg i vann og danner syre', isCorrect: false },
            ],
            solution:
              'CO binder seg til hemoglobin i blodet ca. 200 ganger sterkere enn oksygen. Den er også luktfri og fargeløs, så man merker ikke at man puster den inn. Dette gjør CO til en vanlig årsak til forgiftningsdødsfall.',
          },
          {
            id: 'nat-vg1-5-4-n-quiz1-q2',
            task: 'Hva er den balanserte ligningen for fullstendig forbrenning av metan?',
            options: [
              { id: 'a', text: 'CH₄ + O₂ → CO + 2H₂O', isCorrect: false },
              { id: 'b', text: 'CH₄ + 2O₂ → CO₂ + 2H₂O', isCorrect: true },
              { id: 'c', text: 'CH₄ + O₂ → CO₂ + H₂O', isCorrect: false },
              { id: 'd', text: '2CH₄ + O₂ → 2CO₂ + 4H₂O', isCorrect: false },
            ],
            solution:
              'Den balanserte ligningen for fullstendig forbrenning av metan er CH₄ + 2O₂ → CO₂ + 2H₂O. Ett karbonmolekyl gir ett CO₂, fire hydrogen gir to H₂O, og det trengs to O₂ for å levere fire oksygenatomer.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-5-4-n-section2',
      type: 'text',
      content: `## Addisjon, substitusjon, kondensasjon og polymerisering

Utover forbrenning finnes det fire andre viktige reaksjonstyper i organisk kjemi, og de har alle sine unike trekk.

**Addisjonsreaksjoner** skjer med umettede forbindelser -- altså alkener og alkyner som har dobbelt- eller trippelbindinger. I en addisjonsreaksjon adderes atomer over bindingen, slik at den brytes opp. Et klassisk eksempel er **hydrogenering av eten**: CH₂=CH₂ + H₂ → CH₃-CH₃. Dobbeltbindingen i eten åpnes, og to hydrogenatomer legges til. Resultatet er etan, et mettet molekyl. Denne reaksjonen brukes i stor skala i industrien for å gjøre umettede fettsyrer mettede -- det er det vi kaller **herding av fett**, og det er slik margarin lages.

**Substitusjonsreaksjoner** er typisk for alkaner, som mangler dobbeltbindinger. Her erstattes et atom med et annet. Et godt eksempel er **klorering av metan**: CH₄ + Cl₂ → CH₃Cl + HCl. Et hydrogenatom i metan byttes ut med et kloratom. Alkanene trenger substitusjon fordi de ikke har dobbeltbindinger som kan åpnes for addisjon.

**Kondensasjonsreaksjoner** er det som skjer når to molekyler kobles sammen mens et lite molekyl -- vanligvis vann -- spaltes av. Du husker kanskje esterdannelse fra forrige kapittel: CH₃COOH + CH₃OH → CH₃COOCH₃ + H₂O. Eddiksyre reagerer med metanol, gir metylacetat og vann.

Den siste, og kanskje mest fascinerende, reaksjonstypen er **polymerisering** -- der mange små molekyler, kalt **monomerer**, kobles sammen til en lang kjede, en **polymer**. Det finnes to hovedtyper. Ved **addisjonspolymerisering** åpner monomerer med dobbeltbinding seg opp og kobles direkte sammen: n CH₂=CH₂ → (-CH₂-CH₂-)ₙ. Dette er hvordan **polyetylen** (PE) -- verdens vanligste plast -- lages. Andre produkter er **polypropylen** (PP) og **PVC**. Ved **kondensasjonspolymerisering** kobles monomerer sammen mens vann spaltes av i hvert trinn. Slik lages nylon og polyester, og det er også slik naturen bygger **proteiner** fra aminosyrer og **DNA** fra nukleotider.`,
    },
    {
      id: 'nat-vg1-5-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-5-4-n-quiz2-q0',
            task: 'Hva skjer i en addisjonsreaksjon?',
            options: [
              { id: 'a', text: 'Et atom byttes ut med et annet', isCorrect: false },
              { id: 'b', text: 'To molekyler kobles sammen og vann spaltes av', isCorrect: false },
              { id: 'c', text: 'Atomer adderes over en dobbelt- eller trippelbinding', isCorrect: true },
              { id: 'd', text: 'Et stort molekyl brytes ned til mindre deler', isCorrect: false },
            ],
            solution:
              'I en addisjonsreaksjon adderes atomer over en dobbelt- eller trippelbinding, slik at den brytes opp. Resultatet er et mettet molekyl. Eksempel: eten + hydrogen gir etan.',
          },
          {
            id: 'nat-vg1-5-4-n-quiz2-q1',
            task: 'Hva kalles de små molekylene som kobles sammen til en polymer?',
            options: [
              { id: 'a', text: 'Isomerer', isCorrect: false },
              { id: 'b', text: 'Katalysatorer', isCorrect: false },
              { id: 'c', text: 'Monomerer', isCorrect: true },
              { id: 'd', text: 'Funksjonelle grupper', isCorrect: false },
            ],
            solution:
              'Monomerer er de små molekylene som kobles sammen til en lang kjede (polymer) ved polymerisering. For eksempel er eten monomeren som danner polyetylen.',
          },
          {
            id: 'nat-vg1-5-4-n-quiz2-q2',
            task: 'Hvilken reaksjonstype er typisk for alkaner?',
            options: [
              { id: 'a', text: 'Addisjonsreaksjon', isCorrect: false },
              { id: 'b', text: 'Substitusjonsreaksjon', isCorrect: true },
              { id: 'c', text: 'Polymerisering', isCorrect: false },
              { id: 'd', text: 'Kondensasjonsreaksjon', isCorrect: false },
            ],
            solution:
              'Alkaner har bare enkeltbindinger og mangler dobbeltbindinger for addisjon. Derfor reagerer de via substitusjon, der et atom (f.eks. hydrogen) erstattes av et annet (f.eks. klor).',
          },
          {
            id: 'nat-vg1-5-4-n-quiz2-q3',
            task: 'Hvilken type polymerisering brukes for å lage proteiner fra aminosyrer?',
            options: [
              { id: 'a', text: 'Addisjonspolymerisering', isCorrect: false },
              { id: 'b', text: 'Kondensasjonspolymerisering', isCorrect: true },
              { id: 'c', text: 'Substitusjonspolymerisering', isCorrect: false },
              { id: 'd', text: 'Forbrenningspolymerisering', isCorrect: false },
            ],
            solution:
              'Proteiner lages ved kondensasjonspolymerisering, der aminosyrer kobles sammen mens vann spaltes av i hvert trinn. Dette er den naturlige versjonen av den samme prosessen som brukes til å lage nylon og polyester.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-5-4-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om de fem viktigste reaksjonstypene i organisk kjemi. **Forbrenning** er reaksjon med oksygen -- fullstendig forbrenning gir CO₂ og H₂O, mens ufullstendig forbrenning gir giftig CO og/eller sot. Karbonmonoksid binder seg til hemoglobin 200 ganger sterkere enn oksygen.

**Addisjonsreaksjoner** adderer atomer over dobbelt- eller trippelbindinger i umettede forbindelser. Hydrogenering av eten til etan er et eksempel, og prosessen brukes industrielt til herding av fett.

**Substitusjonsreaksjoner** erstatter et atom med et annet og er typiske for mettede alkaner. Klorering av metan (CH₄ + Cl₂ → CH₃Cl + HCl) er et klassisk eksempel.

**Kondensasjonsreaksjoner** kobler to molekyler sammen mens vann spaltes av, som ved esterdannelse.

**Polymerisering** kobler mange monomerer til lange polymerkjeder. **Addisjonspolymerisering** gir plast som polyetylen, polypropylen og PVC. **Kondensasjonspolymerisering** gir nylon, polyester, og naturlig: proteiner fra aminosyrer og DNA fra nukleotider.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.5 NARRATIV: Uorganiske karbonforbindelser
// ============================================================================

export const CHAPTER_NAT_VG1_5_5_NARRATIV: TextbookChapter = {
  id: 'nat-vg1-5-5-narrativ',
  courseId: 'nat-vg1',
  chapterNumber: '5.5',
  title: 'Uorganiske karbonforbindelser',
  subtitle: 'Narrativ versjon',
  description:
    'Møt de uorganiske slektningene til karbonforbindelsene -- fra den livsviktige CO₂ i lufta til den livsfarlige CO i en dårlig ventilert stue.',
  estimatedMinutes: 40,
  competenceGoals: [
    'utforske egenskaper og reaksjoner til noen organiske og uorganiske karbonforbindelser',
  ],
  linkedChapterId: 'nat-vg1-5-5',
  content: [
    {
      id: 'nat-vg1-5-5-n-intro',
      type: 'text',
      content: `## Karbon uten hydrogen

I forrige kapitler har vi sett at karbon danner et fantastisk mangfold av organiske forbindelser -- millioner av dem. Men det finnes også en liten, men svært viktig gruppe **uorganiske karbonforbindelser**. Disse mangler typisk de karbon-hydrogenbindingene som kjennetegner organiske molekyler, og har enklere struktur. Men de spiller avgjørende roller i naturen, i industrien og i hverdagen din.

De viktigste uorganiske karbonforbindelsene er **karbondioksid** (CO₂), **karbonmonoksid** (CO), **karbonater** (CO₃²⁻), **hydrogenkarbonater** (HCO₃⁻) og **cyanider** (CN⁻). Noen av dem er livsviktige for alt liv på jorden. Andre er dødelig farlige. Og noen er begge deler, avhengig av konsentrasjonen.

La oss starte med den mest kjente av dem alle.`,
    },
    {
      id: 'nat-vg1-5-5-n-section1',
      type: 'text',
      content: `## Karbondioksid -- livgiver og klimatrussel

**Karbondioksid (CO₂)** er en fargeløs og luktfri gass som du puster ut hver gang du trekker pusten. Den er et **lineært molekyl** med to dobbeltbindinger: O=C=O, og har en **molvekt på 44 g/mol** -- tyngre enn luft. Hvis du noen gang har sett tørris, har du sett CO₂ i fast form -- den **sublimerer** (går rett fra fast stoff til gass) ved -78,5 °C. CO₂ **løser seg i vann** og danner **karbonsyre**: CO₂ + H₂O ⇌ H₂CO₃.

CO₂ er helt sentral for livet på jorden. I **fotosyntesen** bruker planter CO₂ og vann for å bygge glukose og frigjøre oksygen: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂. I **celleåndingen** gjør levende organismer det motsatte -- de bryter ned glukose og frigjør CO₂: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O. Slik sirkulerer karbon mellom luft og liv.

Men CO₂ er også en **drivhusgass**. Den absorberer varmestråling fra jordoverflaten og sender noe av den tilbake, noe som varmer opp atmosfæren. Den naturlige drivhuseffekten er nødvendig -- uten den ville jorden vært en iskald planet. Problemet er at **menneskelig aktivitet** har økt CO₂-konsentrasjonen fra rundt **280 ppm** (deler per million) i førindustriell tid til over **420 ppm** i dag, hovedsakelig gjennom forbrenning av fossile brensler. Denne økningen forsterker drivhuseffekten og driver global oppvarming.`,
    },
    {
      id: 'nat-vg1-5-5-n-section2',
      type: 'text',
      content: `## CO -- den usynlige morderen, og cyanider

Mens CO₂ er relativt ufarlig i normale konsentrasjoner, er slektningen **karbonmonoksid (CO)** en helt annen historie. CO er en **fargeløs, luktfri og svært giftig gass** som dannes ved **ufullstendig forbrenning** -- altså når det ikke er nok oksygen til stede.

Det som gjør CO så farlig, er måten den virker på i kroppen. CO **binder seg til hemoglobin** i blodet ditt -- det proteinet som normalt transporterer oksygen fra lungene til cellene. Problemet er at CO binder seg **200 ganger sterkere** enn oksygen. Når CO tar plassen til oksygen på hemoglobinet, mister blodet evnen til å frakte oksygen. Resultatet kan være bevisstløshet og død. Og fordi CO er luktfri og fargeløs, merker du ikke at du puster den inn.

CO-forgiftning kan oppstå i dårlig ventilerte rom med gasskaminer, vedovner eller andre forbrenningskilder. **Forebygging** er avgjørende: god ventilasjon, **CO-varsler** i boligen, og regelmessig vedlikehold av ildsteder og piper. Industrielt brukes CO faktisk til produksjon av metanol og som reduksjonsmiddel, men da under kontrollerte forhold.

En annen farlig uorganisk karbonforbindelse er **cyanider** (CN⁻). **Hydrogencyanid (HCN)** er ekstremt giftig -- den blokkerer cellenes evne til å bruke oksygen, noe som gjør at cellene «kveles» selv om det er nok oksygen i blodet. Cyanider finnes i små, ufarlige mengder i bittermandelkjerner og kassava, men i konsentrert form er de dødelige. Industrielt brukes cyanider i gullutvinning og plastproduksjon.`,
    },
    {
      id: 'nat-vg1-5-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-5-5-n-quiz1-q0',
            task: 'Hva skjer når CO₂ løses i vann?',
            options: [
              { id: 'a', text: 'Det dannes oksygen', isCorrect: false },
              { id: 'b', text: 'Det dannes karbonsyre (H₂CO₃)', isCorrect: true },
              { id: 'c', text: 'Det dannes karbonmonoksid', isCorrect: false },
              { id: 'd', text: 'Vannet fordamper', isCorrect: false },
            ],
            solution:
              'Når CO₂ løses i vann, reagerer det og danner karbonsyre: CO₂ + H₂O ⇌ H₂CO₃. Dette er grunnen til at brus er syrlig -- CO₂ danner syre i vannet.',
          },
          {
            id: 'nat-vg1-5-5-n-quiz1-q1',
            task: 'Hvorfor er CO farligere enn CO₂ å puste inn?',
            options: [
              { id: 'a', text: 'Fordi CO er tyngre enn luft', isCorrect: false },
              { id: 'b', text: 'Fordi CO binder seg til hemoglobin 200× sterkere enn oksygen', isCorrect: true },
              { id: 'c', text: 'Fordi CO lukter vondt og irriterer lungene', isCorrect: false },
              { id: 'd', text: 'Fordi CO er eksplosiv', isCorrect: false },
            ],
            solution:
              'CO binder seg til hemoglobin ca. 200 ganger sterkere enn oksygen, og blokkerer dermed blodets evne til å transportere oksygen. CO er også luktfri og fargeløs, så man merker ikke forgiftningen.',
          },
          {
            id: 'nat-vg1-5-5-n-quiz1-q2',
            task: 'Omtrent hva er CO₂-konsentrasjonen i atmosfæren i dag?',
            options: [
              { id: 'a', text: 'Ca. 100 ppm', isCorrect: false },
              { id: 'b', text: 'Ca. 280 ppm', isCorrect: false },
              { id: 'c', text: 'Over 420 ppm', isCorrect: true },
              { id: 'd', text: 'Ca. 1000 ppm', isCorrect: false },
            ],
            solution:
              'CO₂-konsentrasjonen i atmosfæren har økt fra ca. 280 ppm i førindustriell tid til over 420 ppm i dag, hovedsakelig på grunn av forbrenning av fossile brensler. 280 ppm var det førindustrielle nivået.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-5-5-n-section3',
      type: 'text',
      content: `## Karbonater -- fra fjell til bruspulver

**Karbonater** er salter der **karbonationet CO₃²⁻** er bundet til et metallion. Karbonater finnes overalt i naturen og i hverdagen, og de har noen fascinerende kjemiske egenskaper.

**Kalsiumkarbonat (CaCO₃)** er en av de vanligste forbindelsene på jorden. Du finner det i **kalkstein**, **marmor**, **koraller** og **eggeskall**. Parthenontelmpelet i Athen, mange gotiske katedraler og utallige skulpturer er laget av marmor -- altså av kalsiumkarbonat. **Natriumkarbonat (Na₂CO₃)**, kalt soda, brukes i vaskemidler. Og **natriumhydrogenkarbonat (NaHCO₃)**, bedre kjent som **natron**, brukes i baking -- det er det som får kaken til å heve.

Det mest slående med karbonater er hva som skjer når de møter en syre. **Karbonater reagerer med syre og frigir CO₂-gass**: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑. Den brusende gassen som bobler opp er CO₂. Denne reaksjonen brukes som en enkel test for å finne ut om en bergart inneholder kalkstein -- drypp litt syre på den, og hvis det bobler, inneholder den karbonat.

Denne reaktiviteten har også en alvorlig side. **Sur nedbør** -- nedbør som inneholder svovelsyre (H₂SO₄) og salpetersyre (HNO₃) fra luftforurensning -- løser opp kalkstein og marmor. Det er dette som forvitrer bygninger, statuer og historiske monumenter over tid. Sur nedbør forsurer også innsjøer, noe som skader livet i vannet. **Kalking av innsjøer** -- å tilsette kalkstein -- brukes som mottiltak for å nøytralisere syren.`,
    },
    {
      id: 'nat-vg1-5-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-5-5-n-quiz2-q0',
            task: 'Hva observerer du når du drypper syre på kalkstein?',
            options: [
              { id: 'a', text: 'Kalksteinen smelter', isCorrect: false },
              { id: 'b', text: 'Det bobler fordi CO₂-gass frigis', isCorrect: true },
              { id: 'c', text: 'Kalksteinen skifter farge til rød', isCorrect: false },
              { id: 'd', text: 'Det dannes en hvit røyk', isCorrect: false },
            ],
            solution:
              'Karbonater reagerer med syrer og frigir CO₂-gass: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑. Boblingen er CO₂ som slippes ut. Dette er en enkel test for karbonat i bergarter.',
          },
          {
            id: 'nat-vg1-5-5-n-quiz2-q1',
            task: 'Hva er kalsiumkarbonat (CaCO₃) IKKE en bestanddel i?',
            options: [
              { id: 'a', text: 'Kalkstein og marmor', isCorrect: false },
              { id: 'b', text: 'Eggeskall og koraller', isCorrect: false },
              { id: 'c', text: 'Bensin og diesel', isCorrect: true },
              { id: 'd', text: 'Natron og soda (relaterte karbonater)', isCorrect: false },
            ],
            solution:
              'Kalsiumkarbonat finnes i kalkstein, marmor, koraller og eggeskall. Bensin og diesel er hydrokarboner (organiske forbindelser), ikke karbonater.',
          },
          {
            id: 'nat-vg1-5-5-n-quiz2-q2',
            task: 'Hvorfor kalkes noen innsjøer i Norge?',
            options: [
              { id: 'a', text: 'For å gjøre vannet hvitere', isCorrect: false },
              { id: 'b', text: 'For å nøytralisere sur nedbør og beskytte livet i vannet', isCorrect: true },
              { id: 'c', text: 'For å gjøre vannet hardere og bedre å drikke', isCorrect: false },
              { id: 'd', text: 'For å forhindre algevekst', isCorrect: false },
            ],
            solution:
              'Sur nedbør (fra H₂SO₄ og HNO₃) forsurer innsjøer og skader livet i vannet. Kalking -- tilsetting av kalkstein (CaCO₃) -- nøytraliserer syren og bringer pH-verdien tilbake til et nivå der fisk og andre organismer kan overleve.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-5-5-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du utforsket de viktigste uorganiske karbonforbindelsene. **Karbondioksid (CO₂)** er en lineær, luktfri gass som spiller dobbeltrolle -- den er livsviktig for fotosyntese og celleånding, men også en drivhusgass som bidrar til global oppvarming. CO₂-konsentrasjonen har steget fra 280 ppm til over 420 ppm på grunn av fossile brensler. CO₂ løses i vann og danner karbonsyre, og den sublimerer ved -78,5 °C som tørris.

**Karbonmonoksid (CO)** er en luktfri, fargeløs og svært giftig gass fra ufullstendig forbrenning. Den binder seg til hemoglobin 200 ganger sterkere enn oksygen. CO-varsler og god ventilasjon er viktig forebygging. **Cyanider (CN⁻)** er ekstremt giftige og blokkerer cellenes evne til å bruke oksygen.

**Karbonater (CO₃²⁻)** som kalsiumkarbonat finnes i kalkstein, marmor, koraller og eggeskall. De reagerer med syrer og frigir CO₂ -- noe som brukes som test for karbonat i bergarter. Sur nedbør løser opp karbonater i bygninger og forsurer innsjøer, og kalking brukes som mottiltak.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.6 NARRATIV: Karbonets kretsløp og betydning for livet
// ============================================================================

export const CHAPTER_NAT_VG1_5_6_NARRATIV: TextbookChapter = {
  id: 'nat-vg1-5-6-narrativ',
  courseId: 'nat-vg1',
  chapterNumber: '5.6',
  title: 'Karbonets kretsløp og betydning for livet',
  subtitle: 'Narrativ versjon',
  description:
    'Følg et karbonatom på en reise gjennom atmosfæren, skogene, havet og dypt ned i jordskorpen -- og forstå hvorfor alt liv er avhengig av dette ene grunnstoffet.',
  estimatedMinutes: 40,
  competenceGoals: ['gjøre rede for karbonets betydning for livet'],
  linkedChapterId: 'nat-vg1-5-6',
  content: [
    {
      id: 'nat-vg1-5-6-n-intro',
      type: 'text',
      content: `## Et atom som aldri hviler

Forestill deg ett enkelt karbonatom. Akkurat nå befinner det seg kanskje i et CO₂-molekyl høyt oppe i atmosfæren. I morgen kan det bli fanget av et blad på et tre og bygget inn i et glukosemolekyl gjennom fotosyntese. Om en uke kan det være en del av et eple som du spiser. Deretter blir det en del av kroppen din -- kanskje et protein i musklene eller en del av DNA-et ditt. Når cellene dine bruker energi, kan det frigjøres igjen som CO₂ gjennom pusten din, tilbake til atmosfæren. Eller kanskje det havner i havet, lagres i et korallrev, og til slutt ender opp som kalkstein som ligger der i millioner av år.

Dette er **karbonets kretsløp** -- den evige sirkulasjonen av karbon mellom atmosfæren, havet, levende organismer og jordskorpen. Kretsløpet drives av biologiske, kjemiske og geologiske prosesser som alle griper inn i hverandre.

**Hovedprosessene** i kretsløpet er: **Fotosyntese**, der planter tar opp CO₂ fra luften og bygger organiske molekyler (6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂). **Celleånding**, der organismer bryter ned organisk materiale og frigjør CO₂ (C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O). **Forbrenning** av fossil energi og biomasse som frigjør CO₂. **Havopptak**, der havet løser store mengder CO₂. Og **nedbrytning**, der bakterier og sopp bryter ned dødt materiale og frigjør CO₂ tilbake til atmosfæren.`,
    },
    {
      id: 'nat-vg1-5-6-n-section1',
      type: 'text',
      content: `## Hvor blir karbonet av? Korttids- og langtidslagring

Karbon lagres ikke bare på ett sted -- det finnes i enorme **reservoarer** spredt over hele jorden. Noen av disse reservoarene holder på karbonet i bare noen år, mens andre låser det inne i millioner av år.

**Korttidslagring** (år til tiår) skjer i levende organismer som biomasse, i atmosfæren som CO₂ og metan (CH₄), i jord som humus og organisk materiale, og i havet der CO₂ er oppløst.

**Langtidslagring** (millioner av år) er en helt annen historie. **Fossile brensler** -- olje, kull og naturgass -- er rester av organismer som ble begravet og omdannet under høyt trykk og temperatur over millioner av år. **Kalkstein** (CaCO₃) er dannet fra skjell og skjeletter av marine organismer som sank til bunnen av havet og ble til stein. **Permafrost** er frosset jord i arktiske områder som inneholder enorme mengder organisk karbon.

For å forstå størrelsen på disse reservoarene, la oss se på tallene i milliard tonn karbon: **atmosfæren** inneholder ca. 870, **havet** er det desidert største med ca. 38 000, **fossile brensler** utgjør ca. 4 000, **vegetasjon** har ca. 450, og **jord** inneholder ca. 2 500. Havet er altså det klart største karbonreservoaret -- det inneholder over 40 ganger mer karbon enn atmosfæren.`,
    },
    {
      id: 'nat-vg1-5-6-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-6-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-5-6-n-quiz1-q0',
            task: 'Hvilken prosess fjerner CO₂ fra atmosfæren og bygger det inn i organiske molekyler?',
            options: [
              { id: 'a', text: 'Celleånding', isCorrect: false },
              { id: 'b', text: 'Forbrenning', isCorrect: false },
              { id: 'c', text: 'Fotosyntese', isCorrect: true },
              { id: 'd', text: 'Nedbrytning', isCorrect: false },
            ],
            solution:
              'Fotosyntese tar opp CO₂ fra atmosfæren og bygger det inn i organiske molekyler (glukose) ved hjelp av solenergi: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂.',
          },
          {
            id: 'nat-vg1-5-6-n-quiz1-q1',
            task: 'Hvilket karbonreservoar er størst målt i milliard tonn karbon?',
            options: [
              { id: 'a', text: 'Atmosfæren', isCorrect: false },
              { id: 'b', text: 'Fossile brensler', isCorrect: false },
              { id: 'c', text: 'Havet', isCorrect: true },
              { id: 'd', text: 'Vegetasjon', isCorrect: false },
            ],
            solution:
              'Havet er det desidert største karbonreservoaret med ca. 38 000 milliard tonn karbon -- over 40 ganger mer enn atmosfæren (ca. 870 milliard tonn).',
          },
          {
            id: 'nat-vg1-5-6-n-quiz1-q2',
            task: 'Hva er fossile brensler?',
            options: [
              { id: 'a', text: 'Kunstig fremstilte energikilder', isCorrect: false },
              { id: 'b', text: 'Rester av organismer omdannet over millioner av år', isCorrect: true },
              { id: 'c', text: 'Mineraler som inneholder mye oksygen', isCorrect: false },
              { id: 'd', text: 'Vulkansk bergarter med høy energi', isCorrect: false },
            ],
            solution:
              'Fossile brensler (olje, kull, naturgass) er rester av organismer som ble begravet og omdannet under høyt trykk og temperatur over millioner av år. De representerer langtidslagring av karbon.',
          },
          {
            id: 'nat-vg1-5-6-n-quiz1-q3',
            task: 'Hva er sammenhengen mellom fotosyntese og celleånding i karbonkretsløpet?',
            options: [
              { id: 'a', text: 'De er helt uavhengige prosesser', isCorrect: false },
              { id: 'b', text: 'De er omvendte prosesser som sirkulerer karbon mellom luft og liv', isCorrect: true },
              { id: 'c', text: 'De skjer bare i planter', isCorrect: false },
              { id: 'd', text: 'De bruker begge opp oksygen', isCorrect: false },
            ],
            solution:
              'Fotosyntese og celleånding er omvendte prosesser. Fotosyntesen tar opp CO₂ og bygger organiske molekyler, mens celleåndingen bryter ned organiske molekyler og frigjør CO₂. Sammen sørger de for at karbon sirkulerer mellom atmosfæren og levende organismer.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-5-6-n-section2',
      type: 'text',
      content: `## Menneskets fotavtrykk i karbonkretsløpet

I millioner av år har karbonkretsløpet vært i en naturlig balanse -- omtrent like mye karbon ble tatt opp som ble frigjort. Men i løpet av de siste par hundre årene har mennesker forstyrret denne balansen dramatisk.

**Forbrenning av fossile brensler** er den største synderen. Vi henter karbon som har vært lagret i jordskorpen i millioner av år -- i form av olje, kull og gass -- og frigjør det til atmosfæren på kort tid. Ca. **36 milliarder tonn CO₂** frigjøres årlig fra fossile brensler. De naturlige prosessene (fotosyntese, havopptak) klarer rett og slett ikke å ta opp alt dette raskt nok.

**Avskoging** forsterker problemet. Skog lagrer store mengder karbon i trær og jord. Når skog hogges eller brennes, frigjøres det lagrede karbonet til atmosfæren. Dessuten fjernes den fremtidige opptakskapasiteten -- trærne som kunne ha fanget CO₂, er borte.

Det mest urovekkende er kanskje **tilbakekoblingsmekanismene** -- prosesser som forsterker oppvarmingen i en selvforsterkende spiral. **Permafrost-tining** er et skremmende eksempel: når den globale temperaturen stiger, begynner permafrosten i arktiske områder å tine. Tint permafrost frigjør metan og CO₂ som har vært frosset inne i tusenvis av år. Mer metan og CO₂ gir mer oppvarming, som gir mer tining, som gir enda mer utslipp. **Havforsuring** er et annet problem: mer CO₂ i havet gjør det surere, noe som truer koraller og skalldyr. Og **varmere hav tar opp mindre CO₂**, fordi gasser løser seg dårligere i varmt vann. Det betyr at havet gradvis mister sin evne til å fungere som karbonsluk.`,
    },
    {
      id: 'nat-vg1-5-6-n-section3',
      type: 'text',
      content: `## Hvorfor alt liv er karbonbasert

Vi har fulgt karbon gjennom atmosfæren, havet og jordskorpen. Men la oss avslutte med det mest fundamentale spørsmålet: Hvorfor er alt liv på jorden bygget på karbon?

Svaret ligger i karbonets unike kjemiske egenskaper. Med **fire bindinger** kan karbon bygge utrolig komplekse strukturer -- noe som er nødvendig for de intrikate molekylene livet krever. Karbon kan danne **stabile kjeder og ringer** som holder sammen under normale forhold. Samtidig er **C-C-bindingene** sterke nok til å holde, men ikke så sterke at de ikke kan brytes når det trengs -- for eksempel når enzymer skal bryte ned næringsstoffer.

Alle de fire typene **biologiske makromolekyler** er karbonbaserte. **Karbohydrater** som glukose, stivelse og cellulose er energikilder og strukturmaterialer. **Lipider (fett)** lagrer energi og bygger cellemembraner. **Proteiner** fungerer som enzymer, strukturer, transportmolekyler og mye mer. Og **nukleinsyrer** -- DNA og RNA -- bærer den genetiske informasjonen som gjør at livet kan videreføres fra generasjon til generasjon.

Karbonforbindelser fungerer dessuten utmerket i **vannløsninger ved moderate temperaturer**, som er nettopp de forholdene vi finner i levende celler.

Et fascinerende faktum å tenke over: **ingen kjent livsform er uavhengig av karbon**. Alt liv på jorden -- fra de minste bakteriene til de største blåhvalene, fra sopp i skogbunnen til trær som rager mot himmelen -- alt er karbonbasert. Et karbonatom i kroppen din kan ha vært en del av en dinosaur, et tre i karbontiden, eller et CO₂-molekyl i atmosfæren for millioner av år siden. Karbonets kretsløp binder alt liv sammen gjennom tid og rom.`,
    },
    {
      id: 'nat-vg1-5-6-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-6-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-5-6-n-quiz2-q0',
            task: 'Hvorfor forstyrrer forbrenning av fossile brensler karbonkretsløpet?',
            options: [
              { id: 'a', text: 'Fordi det produserer oksygen som plantene ikke trenger', isCorrect: false },
              { id: 'b', text: 'Fordi det frigjør karbon fra langtidslagre raskere enn naturen kan ta det opp', isCorrect: true },
              { id: 'c', text: 'Fordi det forbruker alt karbonet i atmosfæren', isCorrect: false },
              { id: 'd', text: 'Fordi det forhindrer fotosyntese i plantene', isCorrect: false },
            ],
            solution:
              'Fossile brensler inneholder karbon som naturen brukte millioner av år på å lagre. Når vi brenner dem, frigjøres dette karbonet som CO₂ på kort tid. Naturlige prosesser klarer ikke å ta opp alt dette raskt nok, og CO₂-konsentrasjonen i atmosfæren øker.',
          },
          {
            id: 'nat-vg1-5-6-n-quiz2-q1',
            task: 'Hva er en tilbakekoblingsmekanisme i klimasammenheng?',
            options: [
              { id: 'a', text: 'En prosess som bremser oppvarmingen', isCorrect: false },
              { id: 'b', text: 'En prosess der oppvarmingen forsterker seg selv', isCorrect: true },
              { id: 'c', text: 'En menneskeskapt teknologi for karbonfangst', isCorrect: false },
              { id: 'd', text: 'En naturlig avkjøling av havet', isCorrect: false },
            ],
            solution:
              'En tilbakekoblingsmekanisme er en selvforsterkende prosess. Eksempel: oppvarming tiner permafrost, som frigjør metan og CO₂, som gir mer oppvarming, som gir mer tining. Slike mekanismer kan akselerere klimaendringene.',
          },
          {
            id: 'nat-vg1-5-6-n-quiz2-q2',
            task: 'Hvilke fire typer biologiske makromolekyler er alle karbonbaserte?',
            options: [
              { id: 'a', text: 'Salter, mineraler, metaller og oksider', isCorrect: false },
              { id: 'b', text: 'Vann, oksygen, nitrogen og hydrogen', isCorrect: false },
              { id: 'c', text: 'Karbohydrater, lipider, proteiner og nukleinsyrer', isCorrect: true },
              { id: 'd', text: 'Karbonater, cyanider, oksider og sulfater', isCorrect: false },
            ],
            solution:
              'De fire typene biologiske makromolekyler er karbohydrater (energikilder), lipider/fett (energilagring og cellemembraner), proteiner (enzymer og strukturer) og nukleinsyrer (DNA og RNA). Alle er karbonbaserte.',
          },
          {
            id: 'nat-vg1-5-6-n-quiz2-q3',
            task: 'Omtrent hvor mange milliarder tonn CO₂ frigjøres årlig fra fossile brensler?',
            options: [
              { id: 'a', text: 'Ca. 5 milliarder tonn', isCorrect: false },
              { id: 'b', text: 'Ca. 15 milliarder tonn', isCorrect: false },
              { id: 'c', text: 'Ca. 36 milliarder tonn', isCorrect: true },
              { id: 'd', text: 'Ca. 100 milliarder tonn', isCorrect: false },
            ],
            solution:
              'Ca. 36 milliarder tonn CO₂ frigjøres årlig fra fossile brensler. De naturlige prosessene klarer ikke å ta opp alt dette, og CO₂-konsentrasjonen i atmosfæren stiger som følge.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-5-6-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du fulgt karbon på en reise gjennom naturens store kretsløp. **Karbonets kretsløp** er den konstante sirkulasjonen av karbon mellom atmosfæren, havet, levende organismer og jordskorpen, drevet av fotosyntese, celleånding, forbrenning, havopptak og nedbrytning.

Karbon lagres på kort sikt (år til tiår) i biomasse, atmosfæren, jord og hav, og på lang sikt (millioner av år) i fossile brensler, kalkstein og permafrost. **Havet** er det største reservoaret med ca. 38 000 milliard tonn karbon.

Mennesker forstyrrer kretsløpet ved å frigjøre ca. **36 milliarder tonn CO₂ årlig** fra fossile brensler -- karbon som naturen brukte millioner av år på å lagre. Avskoging forsterker problemet. **Tilbakekoblingsmekanismer** som permafrost-tining, havforsuring og redusert havopptak kan akselerere oppvarmingen.

Alt liv på jorden er **karbonbasert**. De fire typene biologiske makromolekyler -- karbohydrater, lipider, proteiner og nukleinsyrer -- er alle bygd på karbon. Karbonets evne til å danne fire stabile bindinger, lange kjeder og ringstrukturer gjør det ideelt for livets komplekse molekyler. Ingen kjent livsform er uavhengig av karbon.`,
    },
  ],
  exercises: [],
};

export const NAT_VG1_NARRATIV_DEL4A_CHAPTERS = [
  CHAPTER_NAT_VG1_5_1_NARRATIV,
  CHAPTER_NAT_VG1_5_2_NARRATIV,
  CHAPTER_NAT_VG1_5_3_NARRATIV,
  CHAPTER_NAT_VG1_5_4_NARRATIV,
  CHAPTER_NAT_VG1_5_5_NARRATIV,
  CHAPTER_NAT_VG1_5_6_NARRATIV,
];
