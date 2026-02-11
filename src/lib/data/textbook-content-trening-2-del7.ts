/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Treningslære 2 (VG3) - Seksjon 7: Mental trening
 * 5 delkapitler (7.1-7.5)
 *
 * Dekker LK20-kompetansemål for treningslære 2
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 7.1: Idrettspsykologi
// ============================================================================

export const CHAPTER_TRENING_2_7_1: TextbookChapter = {
  id: 'trening-2-7-1',
  courseId: 'trening-2',
  chapterNumber: '7.1',
  title: 'Idrettspsykologi',
  description: 'Motivasjon, selvtillit og mestringstro (self-efficacy) som grunnlag for idrettslige prestasjoner.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjere rede for sentrale begreper innen idrettspsykologi',
    'forklare sammenhengen mellom motivasjon, selvtillit og prestasjon',
    'drøfte betydningen av mestringstro for utvikling og prestasjon i idrett',
  ],
  content: [
    {
      id: 'tr2-7-1-intro',
      type: 'text',
      content: `Idrettspsykologi handler om hvordan psykologiske faktorer påvirker prestasjon, trivsel og utvikling i idrett. Selv om fysisk trening, teknikk og taktikk er grunnleggende, er det ofte de mentale ferdighetene som skiller utøvere på samme fysiske nivå. En utøver som er motivert, har tro på egne ferdigheter og håndterer press, vil over tid prestere bedre enn en utøver som mangler disse egenskapene. Mental trening er derfor en like viktig del av treningsarbeidet som den fysiske treningen.`,
    },
    {
      id: 'tr2-7-1-def-idrettspsykologi',
      type: 'definition',
      title: 'Idrettspsykologi',
      content: 'Idrettspsykologi er studiet av hvordan psykologiske faktorer påvirker deltakelse og prestasjon i idrett og fysisk aktivitet, og hvordan deltakelse i idrett påvirker psykologiske og fysiske faktorer. Fagfeltet omfatter blant annet motivasjon, mestringstro, konsentrasjon, spenningsregulering og mental trening.',
    },
    {
      id: 'tr2-7-1-text-motivasjon',
      type: 'text',
      title: 'Motivasjon i idrett',
      content: `Motivasjon er drivkraften bak all frivillig atferd og avgjør retning, intensitet og varighet av innsatsen. I idretten er motivasjon helt sentralt for at utøvere skal opprettholde treningsarbeidet over tid.

**Indre motivasjon:**
- Drevet av glede, interesse og tilfredsstillelse ved selve aktiviteten
- Utøveren trener fordi det er gøy, spennende og givende i seg selv
- Gir mer vedvarende engasjement og bedre psykisk velvære
- Eksempel: En svømmer som elsker følelsen av å gli gjennom vannet

**Ytre motivasjon:**
- Drevet av eksterne belønninger eller konsekvenser
- Kan være medaljer, penger, ros, status eller frykt for straff
- Kan være effektiv på kort sikt, men er mer sårbar over tid
- Eksempel: En utøver som trener hovedsakelig for å vinne premier

**Selvbestemmelsesteorien (Deci og Ryan):**
Ifølge selvbestemmelsesteorien har mennesker tre grunnleggende psykologiske behov som må dekkes for å opprettholde indre motivasjon:
- **Autonomi:** Følelsen av å ha valgfrihet og medbestemmelse i egen trening
- **Kompetanse:** Følelsen av å mestre oppgaver og oppleve fremgang
- **Tilhørighet:** Følelsen av å høre til i en gruppe og bli verdsatt

Når disse behovene dekkes i trenings- og konkurransemiljøet, øker den indre motivasjonen. Når de undergraves — for eksempel av en autoritær trener som ikke gir utøveren medbestemmelse — kan motivasjonen synke.`,
    },
    {
      id: 'tr2-7-1-def-mestringsorientering',
      type: 'definition',
      title: 'Mestringsorientering vs. prestasjonsorientering',
      content: 'Mestringsorientering innebærer at utøveren måler suksess ut fra egen utvikling og innsats. Prestasjonsorientering innebærer at utøveren måler suksess ut fra resultat sammenlignet med andre. Forskning viser at mestringsorientering er forbundet med mer vedvarende motivasjon, bedre trivsel og lavere frafall i idretten.',
    },
    {
      id: 'tr2-7-1-text-selvtillit',
      type: 'text',
      title: 'Selvtillit i idrettssammenheng',
      content: `Selvtillit i idrett handler om utøverens generelle tro på egne evner og verdi som idrettsutøver. Høy selvtillit er forbundet med bedre prestasjoner, mer positive tanker, høyere innsats og bedre evne til å håndtere motgang.

**Kjennetegn på utøvere med høy selvtillit:**
- Setter seg utfordrende, men realistiske mål
- Oppfatter vanskelige situasjoner som utfordringer, ikke trusler
- Gir ikke opp ved motgang, men øker innsatsen
- Tolker nervøsitet som noe positivt og energigivende

**Kjennetegn på utøvere med lav selvtillit:**
- Unngår utfordringer og setter for lave mål
- Tviler på egne ferdigheter i pressede situasjoner
- Gir lett opp ved motgang og fokuserer på feil
- Tolker nervøsitet som tegn på at de ikke mestrer situasjonen

**Hvordan bygge selvtillit:**
- Oppleve mestring gjennom trening og konkurranse
- Få konstruktiv tilbakemelding fra trener og medutøvere
- Fokusere på prosess og utvikling fremfor bare resultat
- Bruke mentale teknikker som visualisering og positiv selvsnakk`,
    },
    {
      id: 'tr2-7-1-text-self-efficacy',
      type: 'text',
      title: 'Mestringstro (self-efficacy)',
      content: `Mestringstro (self-efficacy) er et begrep utviklet av psykologen Albert Bandura. Det handler om en persons tro på sin egen evne til å gjennomføre en spesifikk oppgave i en bestemt situasjon. Mestringstro skiller seg fra generell selvtillit ved at den er situasjonsspesifikk.

En fotballspiller kan for eksempel ha høy mestringstro for straffespark, men lav mestringstro for heading. Mestringstro påvirker hvilke mål vi setter oss, hvor mye innsats vi legger inn, og hvor lenge vi holder ut ved motgang.

**Banduras fire kilder til mestringstro:**

**1. Mestringserfaringer (den viktigste kilden):**
Tidligere suksess med lignende oppgaver er den sterkeste kilden til mestringstro. Gjentatte positive erfaringer bygger sterk mestringstro, mens gjentatt mislykking svekker den.

**2. Vikarierende erfaringer (modellæring):**
Å se andre som ligner en selv lykkes med en oppgave, styrker troen på at man selv kan klare det. Rollemodeller og lagkamerater som mestrer utfordringer, fungerer som viktige forbilder.

**3. Verbal overtalelse:**
Oppmuntring, støtte og konstruktiv tilbakemelding fra trenere, foreldre og medutøvere kan styrke mestringstro. Effekten er størst når kilden oppfattes som troverdig og kompetent.

**4. Fysiologisk og emosjonell tilstand:**
Hvordan utøveren tolker egne kroppslige reaksjoner påvirker mestringstro. Høy puls og svetting kan tolkes som tegn på at man er klar og skjerpet (styrker mestringstro) eller som tegn på angst og manglende kontroll (svekker mestringstro).`,
    },
    {
      id: 'tr2-7-1-example-1',
      type: 'example',
      title: 'Mestringstro i praksis',
      content: `En håndballspiller skal ta et avgjørende straffekast i sluttsekundene av en kamp. Hun har trent på straffekast hundrevis av ganger og har god statistikk (mestringserfaringer). Lagvenninnen hennes scoret nettopp fra en vanskelig vinkel (vikarierende erfaring). Treneren nikker rolig og sier «Du klarer dette» (verbal overtalelse). Hun kjenner at hjertet slår fort, men tolker det som at kroppen er klar til å prestere (positiv tolkning av fysiologisk tilstand). Alle fire kildene til mestringstro er til stede, og hun har stor tro på at hun vil score. Denne troen gjør at hun er avslappet i kastet og gjennomfører teknikken presist. Høy mestringstro fører til bedre prestasjon.`,
    },
    {
      id: 'tr2-7-1-note-1',
      type: 'note',
      title: 'Mestringstro er ikke det samme som overtro',
      content: 'Mestringstro er basert på reelle erfaringer og kompetanse, ikke urealistisk optimisme. En utøver med høy mestringstro har en nøktern vurdering av egne ferdigheter basert på trening og erfaring. Urealistisk høy tro på egne evner kan tvert imot føre til underprestering fordi utøveren ikke forbereder seg godt nok.',
    },
    {
      id: 'tr2-7-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr2-7-1-ex-1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilke tre grunnleggende behov beskriver selvbestemmelsesteorien til Deci og Ryan?',
        options: [
          { id: 'a', text: 'Autonomi, kompetanse og tilhørighet', isCorrect: true },
          { id: 'b', text: 'Styrke, utholdenhet og hurtighet', isCorrect: false },
          { id: 'c', text: 'Motivasjon, selvtillit og mestringstro', isCorrect: false },
          { id: 'd', text: 'Belønning, anerkjennelse og status', isCorrect: false },
        ],
        solution: 'Selvbestemmelsesteorien peker på tre grunnleggende psykologiske behov: autonomi (opplevelse av valgfrihet), kompetanse (opplevelse av mestring) og tilhørighet (opplevelse av sosial tilknytning). Når disse behovene dekkes, øker den indre motivasjonen.',
      },
    },
    {
      id: 'tr2-7-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr2-7-1-ex-2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Ifølge Bandura: Hva er den viktigste kilden til mestringstro (self-efficacy)?',
        options: [
          { id: 'a', text: 'Mestringserfaringer — tidligere suksess med lignende oppgaver', isCorrect: true },
          { id: 'b', text: 'Verbal overtalelse — ros og oppmuntring fra andre', isCorrect: false },
          { id: 'c', text: 'Vikarierende erfaringer — å se andre lykkes', isCorrect: false },
          { id: 'd', text: 'Fysiologisk tilstand — å føle seg rolig og avslappet', isCorrect: false },
        ],
        solution: 'Bandura fremhever mestringserfaringer som den sterkeste kilden til mestringstro. Direkte erfaring med å lykkes i lignende situasjoner gir den mest robuste troen på egne ferdigheter. De andre kildene (vikarierende erfaringer, verbal overtalelse og fysiologisk tilstand) er også viktige, men har svakere effekt alene.',
      },
    },
    {
      id: 'tr2-7-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr2-7-1-ex-3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom indre og ytre motivasjon. Gi eksempler fra idretten og drøft hvilken type motivasjon som er mest gunstig for langsiktig utvikling som utøver.',
        solution: 'Indre motivasjon drives av glede, nysgjerrighet og tilfredsstillelse ved selve aktiviteten — for eksempel en langrennsløper som trener fordi hun elsker å gå på ski og kjenner mestringsfølelsen ved å forbedre teknikken. Ytre motivasjon drives av eksterne belønninger som medaljer, penger, ros eller frykt for kritikk — for eksempel en utøver som trener primært for å vinne premier. Forskning viser at indre motivasjon er mest gunstig for langsiktig utvikling. Indre motiverte utøvere har mer vedvarende engasjement, opplever mer glede i treningen, håndterer motgang bedre og har lavere risiko for frafall. Ytre motivasjon kan fungere godt på kort sikt og kan supplere indre motivasjon, men hvis treningen bare drives av ytre belønninger, er motivasjonen sårbar — den kan forsvinne hvis belønningene uteblir. Det ideelle er en kombinasjon der indre motivasjon er grunnlaget, supplert av sunne ytre motivasjonsfaktorer som støtte fra treningsmiljøet.',
      },
    },
    {
      id: 'tr2-7-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr2-7-1-ex-4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv Banduras fire kilder til mestringstro og gi konkrete eksempler på hvordan en trener kan styrke en utøvers mestringstro gjennom hver av disse kildene.',
        solution: 'De fire kildene er: 1) Mestringserfaringer: Treneren kan legge opp treningen slik at utøveren opplever gradvis mestring — for eksempel ved å starte med oppgaver utøveren behersker og øke vanskelighetsgraden stegvis. 2) Vikarierende erfaringer: Treneren kan la utøveren observere lagkamerater eller forbilder som mestrer lignende oppgaver. Videoanalyse av vellykkede prestasjoner fra andre utøvere på samme nivå kan også brukes. 3) Verbal overtalelse: Treneren gir konkret og troverdig positiv tilbakemelding — for eksempel «Du har trent hardt på dette i tre uker, og jeg ser tydelig fremgang i teknikken din». Generell ros som «du er flink» er mindre effektivt enn konkret og spesifikk tilbakemelding. 4) Fysiologisk og emosjonell tilstand: Treneren kan lære utøveren å tolke nervøsitet som noe positivt og normalt. For eksempel kan treneren si «Sommerfugler i magen betyr at kroppen din gjør seg klar til å prestere». Avspenningsøvelser og pusteøvelser kan også brukes for å regulere fysiologisk aktivering.',
      },
    },
    {
      id: 'tr2-7-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr2-7-1-ex-5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft sammenhengen mellom motivasjonsklima, mestringstro og prestasjon. Hvordan kan et mestringsorientert klima styrke utøvernes mestringstro sammenlignet med et prestasjonsorientert klima?',
        solution: 'I et mestringsorientert klima legges det vekt på individuell utvikling, innsats og læring. Feil ses som en naturlig del av utviklingen, og fremgang måles ut fra egne forbedringer. Dette klimaet styrker mestringstro gjennom flere mekanismer: Utøverne opplever flere mestringserfaringer fordi suksess defineres bredt (ikke bare seier). De tør å prøve nye ting uten frykt for å bli vurdert negativt. Positiv tilbakemelding er knyttet til innsats og utvikling, ikke bare resultater. I et prestasjonsorientert klima er fokuset på å vinne og å være best. Feil straffes eller kritiseres, og rangering mellom utøvere er synlig. Dette svekker mestringstro hos alle unntatt de aller beste, fordi flertallet opplever å komme til kort. Utøvere med lav mestringstro i et prestasjonsorientert klima kan utvikle prestasjonsangst, unngåelsesatferd og lavere innsats — de beskytter selvfølelsen ved å ikke prøve fullt ut. Forskning viser at mestringsorienterte miljøer gir høyere indre motivasjon, bedre mestringstro, mer utholdenhet ved motgang og lavere frafall. Trenere bør derfor bevisst skape et klima der utvikling, innsats og prosess verdsettes høyt.',
      },
    },
    {
      id: 'tr2-7-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr2-7-1-ex-6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En ung utøver har mistet motivasjonen etter en sesong med mange skader og dårlige resultater. Bruk selvbestemmelsesteorien og Banduras teori om mestringstro til å analysere situasjonen og foreslå konkrete tiltak for å gjenoppbygge motivasjonen.',
        solution: 'Analyse med selvbestemmelsesteorien: Skader kan ha svekket alle tre grunnleggende behov. Autonomi: Utøveren har kanskje opplevd lite kontroll over situasjonen — skader, rehabplaner og resultater styrt av andre. Kompetanse: Gjentatte dårlige resultater og redusert funksjonsnivå etter skade har svekket opplevelsen av mestring. Tilhørighet: Fravær fra treningsgruppa under skadeperioder kan ha svekket følelsen av tilhørighet. Analyse med Banduras teori: Mestringstro er svekket gjennom negative mestringserfaringer (dårlige resultater) og muligens negative fysiologiske og emosjonelle tilstander (smerter, frustrasjon, angst for ny skade). Konkrete tiltak: 1) Autonomi — gi utøveren medbestemmelse i treningsplanen. La henne velge mellom ulike øvelser og sette egne delmål. 2) Kompetanse — legg opp treningen med gradvis progresjon og oppgaver som gir mestringserfaringer. Start på et nivå utøveren behersker trygt og bygg derfra. Feir små fremskritt. 3) Tilhørighet — sikre at utøveren er integrert i treningsgruppa, også under rehab. Gi lagkamerater en rolle i støtten. 4) Mestringstro — bruk visualisering av tidligere vellykkede prestasjoner. La utøveren se videoer av egen suksess fra før skadene. Gi konkret, troverdig positiv tilbakemelding ved fremgang. Lær utøveren å tolke kroppslige signaler positivt igjen. Prosessen tar tid, og utøveren må oppleve at forbedringen er reell og stabil før full mestringstro gjenoppbygges.',
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 7.2: Visualisering og mental forestilling
// ============================================================================

export const CHAPTER_TRENING_2_7_2: TextbookChapter = {
  id: 'trening-2-7-2',
  courseId: 'trening-2',
  chapterNumber: '7.2',
  title: 'Visualisering og mental forestilling',
  description: 'PETTLEP-modellen, indre og ytre perspektiv, og bruk av mental forestilling for prestasjonsforbedring.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forklare hva visualisering og mental forestilling innebærer',
    'gjere rede for PETTLEP-modellen og dens betydning for effektiv visualisering',
    'drøfte forskjellen mellom indre og ytre perspektiv i mental forestilling',
  ],
  content: [
    {
      id: 'tr2-7-2-intro',
      type: 'text',
      content: `Visualisering, eller mental forestilling, er en av de mest dokumenterte mentale teknikkene i idrettspsykologien. Det innebærer at utøveren bruker sansene til å skape eller gjenskape en opplevelse i hodet — uten at bevegelsen faktisk utføres. Hjernen aktiverer mange av de samme nevrale banene under forestilling som under fysisk utførelse, noe som betyr at mental trening kan forsterke nevrale forbindelser og forbedre teknisk utførelse. Teknikken brukes av toppidrettsutøvere over hele verden som et supplement til fysisk trening.`,
    },
    {
      id: 'tr2-7-2-def-visualisering',
      type: 'definition',
      title: 'Visualisering (mental forestilling)',
      content: 'Visualisering er en systematisk mental teknikk der utøveren bruker alle sanser til å forestille seg utførelse av en idrettslig handling. Effektiv visualisering involverer ikke bare synet, men også følelser, lyder, kroppslige fornemmelser og til og med lukt. Målet er å skape en så levende og realistisk forestilling som mulig.',
    },
    {
      id: 'tr2-7-2-text-funksjoner',
      type: 'text',
      title: 'Funksjoner av visualisering',
      content: `Forskning viser at mental forestilling kan brukes til flere formål i idretten:

**Kognitiv spesifikk funksjon:**
Utøveren forestiller seg spesifikke tekniske ferdigheter — for eksempel en turner som mentalt gjennomgår en øvelse element for element. Dette styrker nevrale baner og forbedrer teknisk presisjon.

**Kognitiv generell funksjon:**
Utøveren forestiller seg taktiske valg og strategier — for eksempel en fotballspiller som gjennomgår ulike spillsituasjoner mentalt. Dette forbedrer beslutningsevnen under kamp.

**Motivasjonell spesifikk funksjon:**
Utøveren ser for seg oppnåelse av konkrete mål — for eksempel å stå på pallen etter et mesterskap. Dette styrker motivasjonen og målrettetheten.

**Motivasjonell generell funksjon — mestring:**
Utøveren forestiller seg at han håndterer utfordrende situasjoner med ro og kontroll. For eksempel å se for seg at man presterer bra til tross for dårlige forhold eller sterke motstandere. Dette styrker mestringstro og mental hardførhet.

**Motivasjonell generell funksjon — aktivering:**
Utøveren bruker forestilling for å regulere spenningsnivået — enten for å roe seg ned eller for å øke aktiveringen før konkurranse.`,
    },
    {
      id: 'tr2-7-2-text-perspektiv',
      type: 'text',
      title: 'Indre og ytre perspektiv',
      content: `Ved visualisering kan utøveren velge mellom to perspektiver:

**Indre perspektiv (førsteperson):**
Utøveren ser situasjonen gjennom egne øyne, som om vedkommende faktisk utfører handlingen. Synsfeltet er det samme som under reell utførelse. For eksempel ser en skihopper bakken komme nærmere og kjenner vinden i ansiktet. Indre perspektiv gir sterkere aktivering av motoriske områder i hjernen og er ofte mest effektivt for å forbedre teknisk utførelse.

**Ytre perspektiv (tredjeperson):**
Utøveren ser seg selv utenfra, som om vedkommende ser en video av seg selv. For eksempel ser en svømmer seg selv fra tribunen under en konkurranse. Ytre perspektiv kan være nyttig for å jobbe med kroppsholdning, bevegelsesmønster og posisjonering. Mange utøvere synes dette perspektivet er lettere å bruke i starten.

**Hva er best?**
Forskningen viser at indre perspektiv generelt gir sterkere effekt på prestasjon fordi det skaper en mer realistisk sensorisk opplevelse. Likevel kan det optimale perspektivet variere mellom utøvere og situasjoner. Mange toppidrettsutøvere veksler mellom perspektivene. Det viktigste er at forestillingen er levende og detaljert, uavhengig av perspektiv.`,
    },
    {
      id: 'tr2-7-2-def-pettlep',
      type: 'definition',
      title: 'PETTLEP-modellen',
      content: 'PETTLEP-modellen er et rammeverk for effektiv visualisering utviklet av Holmes og Collins (2001). Modellen identifiserer syv elementer som gjør mental forestilling mer virkningsfull: Physical (fysisk), Environment (omgivelser), Task (oppgave), Timing (tid), Learning (læring), Emotion (følelser) og Perspective (perspektiv). Jo mer forestillingen ligner den virkelige situasjonen på alle disse dimensjonene, desto større effekt har den.',
    },
    {
      id: 'tr2-7-2-text-pettlep-detalj',
      type: 'text',
      title: 'De syv elementene i PETTLEP',
      content: `**P — Physical (fysisk):**
Utøveren bør innta samme fysiske posisjon som under utførelse. En skihopper bør stå oppreist og bøye seg fremover, en tennisspiller bør holde racketen. Å inkludere fysiske bevegelser gjør forestillingen mer realistisk.

**E — Environment (omgivelser):**
Forestillingen bør inkludere omgivelsene der prestasjonen skal skje. Bruk bilder, videoer eller besøk arenaen for å gjøre miljøet levende. Lukt, lyder og temperatur bør inkluderes.

**T — Task (oppgave):**
Innholdet i forestillingen må tilpasses utøverens ferdighetsnivå. En nybegynner bør fokusere på grunnleggende tekniske elementer, mens en erfaren utøver kan inkludere mer komplekse bevegelsesmønstre og taktiske valg.

**T — Timing (tid):**
Forestillingen bør skje i sanntidshastighet. Å gjennomføre bevegelsen mentalt i sakte film kan være nyttig for å lære nye ferdigheter, men for prestasjonsforbedring bør hastigheten gjenspeile virkeligheten.

**L — Learning (læring):**
Forestillingen bør justeres etter hvert som utøveren utvikler seg. Det som var riktig å fokusere på for tre måneder siden, er kanskje ikke like relevant nå. Regelmessig oppdatering av det mentale bildet er viktig.

**E — Emotion (følelser):**
Inkluder følelser som er relevante for situasjonen — spenningen før start, gleden ved å lykkes, roen ved å ha kontroll. Følelser forsterker de nevrale sporene og gjør forestillingen mer effektiv.

**P — Perspective (perspektiv):**
Velg mellom indre og ytre perspektiv avhengig av formålet. Indre perspektiv er vanligvis best for teknisk trening, mens ytre perspektiv kan brukes for å jobbe med bevegelsesform.`,
    },
    {
      id: 'tr2-7-2-example-1',
      type: 'example',
      title: 'PETTLEP-basert visualisering for en friidrettsutøver',
      content: `En høydehopper bruker PETTLEP-modellen for å forberede seg til en konkurranse: Physical — Hun står ved siden av matten med piggsko på føttene og kjenner vekten av kroppen. Environment — Hun forestiller seg den spesifikke arenaen med tribuner, gressmatte og overliggeren. Task — Hun fokuserer på hele tilløpet med kurvebevegelsen, satsen og Fosbury Flop-teknikken. Timing — Forestillingen tar like lang tid som et ekte hopp (ca. 6 sekunder tilløp + hopp). Learning — Denne uken fokuserer hun spesielt på armsvingen i satsen, som hun har jobbet med i trening. Emotion — Hun forestiller seg spenningen i kroppen, konsentrasjonen i tilløpet og gleden ved å passere overliggeren. Perspective — Hun bruker indre perspektiv og ser overliggeren komme nærmere mens hun løper.`,
    },
    {
      id: 'tr2-7-2-note-1',
      type: 'note',
      title: 'Visualisering krever trening',
      content: 'Evnen til å skape levende mentale bilder varierer mellom personer og kan trenes opp. Utøvere som er nye med visualisering, bør starte med enkle forestillinger (for eksempel å se for seg en ball i ulike farger) og gradvis øke kompleksiteten. Det anbefales å øve 10-15 minutter daglig for å utvikle ferdighetene. Over tid blir forestillingene mer levende og detaljerte.',
    },
    {
      id: 'tr2-7-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr2-7-2-ex-1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva står bokstavene i PETTLEP-modellen for?',
        options: [
          { id: 'a', text: 'Physical, Environment, Task, Timing, Learning, Emotion, Perspective', isCorrect: true },
          { id: 'b', text: 'Practice, Effort, Training, Technique, Learning, Endurance, Performance', isCorrect: false },
          { id: 'c', text: 'Physical, Energy, Task, Training, Level, Emotion, Practice', isCorrect: false },
          { id: 'd', text: 'Preparation, Environment, Technique, Timing, Level, Evaluation, Perspective', isCorrect: false },
        ],
        solution: 'PETTLEP-modellen ble utviklet av Holmes og Collins og inneholder syv elementer: Physical (fysisk), Environment (omgivelser), Task (oppgave), Timing (tid), Learning (læring), Emotion (følelser) og Perspective (perspektiv). Disse elementene skal gjøre visualiseringen så realistisk som mulig.',
      },
    },
    {
      id: 'tr2-7-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr2-7-2-ex-2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kjennetegner det indre perspektivet ved visualisering?',
        options: [
          { id: 'a', text: 'Utøveren ser situasjonen gjennom egne øyne, som om man utfører handlingen selv', isCorrect: true },
          { id: 'b', text: 'Utøveren ser seg selv utenfra, som på en video', isCorrect: false },
          { id: 'c', text: 'Utøveren fokuserer utelukkende på indre følelser og tanker', isCorrect: false },
          { id: 'd', text: 'Utøveren holder øynene lukket og tenker på ingenting', isCorrect: false },
        ],
        solution: 'Indre perspektiv (førstepersonperspektiv) innebærer at utøveren ser situasjonen gjennom egne øyne, akkurat som under faktisk utførelse. Synsfeltet er det naturlige, og utøveren ser omgivelsene slik de ville vært i virkeligheten. Dette perspektivet gir sterkere aktivering av motoriske hjerneområder og er ofte mest effektivt for teknisk trening.',
      },
    },
    {
      id: 'tr2-7-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr2-7-2-ex-3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom indre og ytre perspektiv i visualisering. Gi eksempler på situasjoner der hvert perspektiv kan være mest hensiktsmessig.',
        solution: 'Indre perspektiv (førsteperson) betyr at utøveren ser situasjonen gjennom egne øyne og opplever den som om den skjer i sanntid. Utøveren kjenner også kroppslige fornemmelser som tyngde, fart og balanse. Ytre perspektiv (tredjeperson) betyr at utøveren ser seg selv utenfra, som om vedkommende ser en video av egen prestasjon. Indre perspektiv er mest hensiktsmessig ved teknisk trening der det er viktig å oppleve bevegelsen innenfra — for eksempel en gymnast som skal automatisere en salto og trenger å kjenne rotasjonsfølelsen. Det er også nyttig for å bygge mestringstro fordi den sensoriske opplevelsen blir sterk. Ytre perspektiv er mest hensiktsmessig når utøveren skal jobbe med kroppsholdning og bevegelsesform — for eksempel en sprinter som vil forbedre løpsstilen og trenger å se kroppen sin utenfra. Det kan også brukes i taktisk trening der utøveren trenger oversikt over posisjoner på banen.',
      },
    },
    {
      id: 'tr2-7-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr2-7-2-ex-4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg en idrett du kjenner godt. Beskriv hvordan du ville brukt alle syv elementene i PETTLEP-modellen for å lage en visualiseringsøkt for en utøver i denne idretten.',
        solution: 'Eksempel med fotball (straffe): Physical — Utøveren står med fotballsko på kunstgress, holder ballen i hendene og plasserer den på straffemerket. Kroppen er oppreist, hodet er hevet. Environment — Utøveren forestiller seg den spesifikke banen med tribunene (fulle eller tomme avhengig av situasjonen), flomlysene, lyden av publikum eller stillheten. Lukten av gress. Task — Hele sekvensen fra plassering av ballen, tilløpet (tre skritt), kontaktpunktet på ballen, retningsvalget og oppfølgingen av skuddet. Tilpasset utøverens nivå. Timing — Forestillingen tar 5-7 sekunder fra plassering til skuddet treffer nettet, tilsvarende virkeligheten. Learning — Denne perioden jobber utøveren spesielt med å velge retning sent (les keeperen) og ikke avsløre skuddretningen med kroppsspråket. Emotion — Kjenner presset, spenningen i kroppen, pulsøkningen, bestemtheten. Kjenner gleden og lettelsen når ballen går i mål. Perspective — Indre perspektiv: ser ballen på merket, ser keeperen, kjenner gresset under skoene, ser nettet bak keeperen.',
      },
    },
    {
      id: 'tr2-7-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr2-7-2-ex-5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft følgende påstand: «Visualisering er bare nyttig for erfarne utøvere. Nybegynnere har ikke nok erfaring til å lage realistiske mentale bilder, og bør derfor fokusere utelukkende på fysisk trening.» Er du enig eller uenig? Begrunn svaret.',
        solution: 'Denne påstanden inneholder et kjernepunkt, men er for kategorisk. Det er riktig at erfarne utøvere ofte har nytte av mer detaljert visualisering fordi de har et rikt bevegelsesrepertoar å bygge forestillingene på. Deres mestringserfaringer gir mer realistisk innhold til visualiseringen. Men det betyr ikke at nybegynnere ikke har nytte av teknikken. For nybegynnere kan visualisering brukes annerledes: De kan se for seg korrekt utførelse basert på demonstrasjoner (vikarierende erfaringer) og dermed bygge et mentalt bilde av målet. Forskning viser at kombinasjonen av fysisk trening og visualisering gir raskere læring enn fysisk trening alene, også for nybegynnere. PETTLEP-modellens L-element (Learning) adresserer nettopp dette: innholdet skal tilpasses utøverens nivå. En nybegynner kan fokusere på grove bevegelsesmønstre, mens eksperten finpusser detaljer. Dessuten kan motivasjonell forestilling (å se for seg mestring og utvikling) styrke motivasjon og mestringstro uavhengig av ferdighetsnivå. Konklusjonen er at visualisering er nyttig på alle nivåer, men innholdet og fokuset bør tilpasses. Nybegynnere bør selvsagt prioritere fysisk trening, men supplering med visualisering kan akselerere læringen.',
      },
    },
    {
      id: 'tr2-7-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr2-7-2-ex-6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En utøver rapporterer at visualisering ikke fungerer for henne. Hun sier at bildene er uklare, at hun blir distrahert, og at hun ikke føler at det har noen effekt. Med utgangspunkt i PETTLEP-modellen og det du vet om visualisering: Hva kan årsakene være, og hvilke konkrete tiltak vil du foreslå?',
        solution: 'Mulige årsaker og tiltak basert på PETTLEP: 1) Physical — Utøveren sitter kanskje stille i en stol uten å inkludere kroppen. Tiltak: Inkluder fysiske bevegelser som ligner den virkelige utførelsen. Stå opp, hold i utstyret, innta startposisjon. 2) Environment — Forestillingen mangler kanskje miljødetaljer. Tiltak: Se videoer eller bilder av arenaen. Besøk stedet. Bruk lyder fra miljøet (publikumsstøy via hodetelefoner). 3) Task — Oppgaven er kanskje for kompleks eller for enkel for nivået. Tiltak: Tilpass innholdet. Start med enkle, avgrensede sekvenser og bygg opp. 4) Timing — Hun bruker kanskje for lang tid eller for kort tid sammenlignet med virkeligheten. Tiltak: Bruk tidtaking for å sikre sanntidstempo. 5) Learning — Innholdet er kanskje utdatert eller ikke relevant for det hun jobber med nå. Tiltak: Oppdater forestillingen til å reflektere det aktuelle treningsfokuset. 6) Emotion — Hun inkluderer kanskje ikke følelser. Tiltak: Be henne huske en spesifikk god prestasjon og gjenskape følelsene — spenning, glede, kontroll. 7) Perspective — Hun bruker kanskje feil perspektiv. Tiltak: Prøv begge og se hva som er mest naturlig. Generelt: Hun kan ha for høye forventninger for tidlig. Visualiseringsevne trenes opp gradvis. Start med 2-3 minutter med enkle forestillinger (for eksempel å gå gjennom oppvarmingen mentalt) og øk kompleksiteten over tid. Unngå distrahere ved å velge et rolig sted. Det kan ta 4-8 uker med regelmessig trening før teknikken oppleves effektiv.',
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 7.3: Spenningsregulering
// ============================================================================

export const CHAPTER_TRENING_2_7_3: TextbookChapter = {
  id: 'trening-2-7-3',
  courseId: 'trening-2',
  chapterNumber: '7.3',
  title: 'Spenningsregulering',
  description: 'Aktivering, avspenning, prestasjonsangst og sammenhengen mellom spenningsnivå og prestasjon.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forklare sammenhengen mellom aktivering og prestasjon',
    'gjere rede for teknikker for spenningsregulering i idrett',
    'drøfte prestasjonsangst og dens innvirkning på idrettslige prestasjoner',
  ],
  content: [
    {
      id: 'tr2-7-3-intro',
      type: 'text',
      content: `Spenningsnivået — eller graden av fysiologisk og psykologisk aktivering — har stor innvirkning på idrettsprestasjoner. For lav aktivering kan føre til sløvhet og manglende konsentrasjon, mens for høy aktivering kan føre til muskelspenninger, konsentrasjonsproblemer og angst. Effektiv spenningsregulering handler om å finne og opprettholde det optimale aktiveringsnivået for den aktuelle idretten og situasjonen.`,
    },
    {
      id: 'tr2-7-3-def-aktivering',
      type: 'definition',
      title: 'Aktivering (arousal)',
      content: 'Aktivering (arousal) er en generell tilstand av fysiologisk og psykologisk beredskap i kroppen. Aktivering varierer langs et kontinuum fra dyp søvn (lav aktivering) til ekstrem opphisselse eller panikk (svært høy aktivering). I idrettssammenheng handler det om å finne det nivået av aktivering som gir best mulige prestasjonsforhold.',
    },
    {
      id: 'tr2-7-3-text-omvendt-u',
      type: 'text',
      title: 'Den omvendte U-hypotesen (Yerkes-Dodson)',
      content: `Den omvendte U-hypotesen, også kjent som Yerkes-Dodson-loven, beskriver sammenhengen mellom aktivering og prestasjon som en omvendt U-formet kurve:

**Lav aktivering:**
- Utøveren er sløv, ukonsentrert og mangler skjerpelse
- Reaksjonstiden er lang og bevegelsene er trege
- Prestasjonen er under potensialet

**Optimal aktivering:**
- Utøveren er fokusert, skjerpet og klar
- Bevegelsene er presise og effektive
- Prestasjonen er på sitt beste

**For høy aktivering:**
- Utøveren er overaktivert, spent og nervøs
- Musklene er stramme, bevegelsene blir stive
- Oppmerksomhetsfeltet snevres inn (tunnelsyn)
- Prestasjonen faller

**Viktig nyansering:**
Det optimale aktiveringsnivået varierer mellom idretter:
- **Finmotoriske idretter** (skyting, golf, bueskyting) krever relativt lavt aktiveringsnivå for presisjon
- **Grovmotoriske idretter** (styrkeløft, sprint, kast) tåler og trenger høyere aktivering
- **Lagspill og teknisk-taktiske idretter** trenger moderat aktivering for å kombinere presisjon med intensitet`,
    },
    {
      id: 'tr2-7-3-text-katastrofemodellen',
      type: 'text',
      title: 'Katastrofemodellen',
      content: `Fazey og Hardy foreslo katastrofemodellen som et alternativ til den omvendte U-hypotesen. Denne modellen tar hensyn til at kognitiv angst (bekymring) påvirker sammenhengen mellom aktivering og prestasjon:

**Når kognitiv angst er lav:**
Sammenhengen mellom aktivering og prestasjon følger den omvendte U-kurven. Prestasjonen stiger gradvis med økende aktivering til optimalt nivå, og synker deretter gradvis.

**Når kognitiv angst er høy:**
Ved et visst nivå av fysiologisk aktivering kan prestasjonen plutselig kollapse dramatisk — som å falle av en klippe. Dette er «katastrofen». Utøveren går fra god prestasjon til svært dårlig prestasjon uten gradvis forverring.

**Praktisk betydning:**
En utøver som er nervøs og bekymret (høy kognitiv angst) er mye mer sårbar for plutselige prestasjonsfall enn en utøver som er fysisk aktivert men mentalt rolig. Derfor er det ikke nok å regulere den fysiske aktiveringen — utøveren må også håndtere bekymringsfulle tanker.`,
    },
    {
      id: 'tr2-7-3-def-prestasjonsangst',
      type: 'definition',
      title: 'Prestasjonsangst',
      content: 'Prestasjonsangst er en negativ emosjonell reaksjon på situasjoner der utøveren opplever at prestasjonen vurderes. Den har to komponenter: kognitiv angst (bekymring, negative tanker, tvil) og somatisk angst (kroppslige symptomer som hjertebank, svetting, skjelving, sommerfugler i magen). Begge komponentene påvirker prestasjon, men på ulike måter.',
    },
    {
      id: 'tr2-7-3-text-prestasjonsangst',
      type: 'text',
      title: 'Kognitiv og somatisk angst',
      content: `**Kognitiv angst (bekymring):**
- Negative tanker om egen prestasjon: «Hva om jeg ikke klarer dette?»
- Konsentrasjonsproblemer fordi tankene kretser rundt mulige negative utfall
- Frykt for å skuffe andre (trenere, foreldre, lagkamerater)
- Tvil på egne ferdigheter i pressede situasjoner
- Har en vedvarende negativ effekt på prestasjon

**Somatisk angst (kroppslige reaksjoner):**
- Økt hjertefrekvens og blodtrykk
- Svetting, skjelving, tørr munn
- Sommerfugler i magen, kvalme
- Muskelspenninger, uro i kroppen
- Påvirker prestasjon mest i starten av konkurransen og avtar vanligvis etter hvert

**Retningsmodellen (Jones, 1995):**
Det er ikke angstens intensitet som avgjør effekten, men hvordan utøveren tolker den. To utøvere kan ha like sterke symptomer, men den ene tolker dem som hemmende («Jeg er så nervøs, dette kommer til å gå dårlig»), mens den andre tolker dem som fremmende («Kroppen min er klar, dette er energi jeg kan bruke»). Utøvere med høy mestringstro tolker oftere angstsymptomene som fremmende.`,
    },
    {
      id: 'tr2-7-3-text-avspenning',
      type: 'text',
      title: 'Teknikker for å senke aktiveringen',
      content: `Når utøveren er for aktivert eller opplever prestasjonsangst, kan følgende teknikker brukes:

**Diafragmatisk pusting (mageputsing):**
- Pust langsomt inn gjennom nesen (4 sekunder), fyll magen med luft
- Hold pusten kort (1-2 sekunder)
- Pust langsomt ut gjennom munnen (6-8 sekunder)
- Gjenta 5-10 ganger
- Aktiverer det parasympatiske nervesystemet og senker hjertefrekvens og blodtrykk

**Progressiv muskelavspenning (Jacobson):**
- Utøveren spenner en muskelgruppe i 5-7 sekunder og slipper deretter i 20-30 sekunder
- Gjennomgår systematisk hele kroppen (hender, armer, skuldre, nakke, ansikt, bryst, mage, rygg, bein, føtter)
- Lærer utøveren å kjenne forskjellen mellom spent og avspent muskulatur
- Reduserer både muskulær spenning og mental uro

**Mindfulness og kroppsskanning:**
- Utøveren retter oppmerksomheten mot kroppen her og nå uten å dømme
- Observerer spenninger, pust og fornemmelser uten å prøve å endre dem
- Reduserer kognitiv angst ved å bryte syklusen av bekymringsfulle tanker

**Selvsnakk:**
- Erstatt negative tanker med nøytrale eller positive utsagn
- Eksempler: «Jeg har trent for dette», «En ting om gangen», «Fokus på det jeg kan kontrollere»`,
    },
    {
      id: 'tr2-7-3-text-psyking',
      type: 'text',
      title: 'Teknikker for å øke aktiveringen',
      content: `Noen ganger trenger utøvere å øke aktiveringsnivået — for eksempel på tidlige morgenkonkurranser, i innledende runder eller ved lavintensitetstrening:

**Energisk musikk:**
Musikk med høyt tempo og kraftig lyd kan øke hjertefrekvensen og aktiveringsnivået. Mange utøvere bruker musikk som en del av oppvarmingsrutinen.

**Aktiverende selvsnakk:**
Bruk av korte, energiske fraser: «La oss gjøre dette!», «Nå gir jeg alt!», «Jeg er klar!»

**Dynamisk oppvarming:**
Fysisk aktivitet med høy intensitet i korte intervaller øker den fysiologiske aktiveringen naturlig.

**Visualisering av energigivende situasjoner:**
Utøveren ser for seg en situasjon der han eller hun var svært motivert og presterte godt, og gjenskaper følelsene fra den situasjonen.

**Pusteøvelser med kort, kraftig utpust:**
Korte, kraftige utpust kombinert med kroppsbevegelser kan øke aktiveringsnivået raskt.`,
    },
    {
      id: 'tr2-7-3-example-1',
      type: 'example',
      title: 'Spenningsregulering i praksis',
      content: `En tennisspiller er for nervøs mellom settene i en viktig kamp. Hendene skjelver og hun sliter med å slappe av mellom poengene. Hun bruker følgende strategi mellom settene: 1) Diafragmatisk pusting — fire dype pust for å aktivere det parasympatiske nervesystemet og senke hjertefrekvensen. 2) Progressiv avspenning — spenner og slipper hendene og underarmene for å redusere skjelvingen. 3) Selvsnakk — erstatter tanken «Jeg må vinne dette settet» med «En ball om gangen, fokus på teknikken». 4) Kort visualisering — ser for seg to-tre vellykkede slag hun gjennomførte tidligere i kampen. Etter 2-3 minutter merker hun at skjelvingen avtar og at hun føler seg mer fokusert. Aktiveringsnivået er fremdeles høyt (det skal det være i en kamp), men angstkomponenten er redusert.`,
    },
    {
      id: 'tr2-7-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr2-7-3-ex-1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Ifølge den omvendte U-hypotesen (Yerkes-Dodson): Hva skjer med prestasjonen når aktiveringsnivået blir for høyt?',
        options: [
          { id: 'a', text: 'Prestasjonen synker fordi utøveren blir overaktivert og mister presisjon', isCorrect: true },
          { id: 'b', text: 'Prestasjonen fortsetter å øke fordi høy aktivering alltid er positivt', isCorrect: false },
          { id: 'c', text: 'Prestasjonen forblir uendret fordi utøvere tilpasser seg automatisk', isCorrect: false },
          { id: 'd', text: 'Prestasjonen avhenger utelukkende av fysisk form, ikke aktivering', isCorrect: false },
        ],
        solution: 'Den omvendte U-hypotesen beskriver at prestasjonen øker med stigende aktivering opp til et optimalt punkt, men deretter synker prestasjonen hvis aktiveringen fortsetter å øke. For høy aktivering fører til muskelspenninger, innsnevret oppmerksomhet (tunnelsyn) og redusert presisjon.',
      },
    },
    {
      id: 'tr2-7-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr2-7-3-ex-2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er de to komponentene i prestasjonsangst?',
        options: [
          { id: 'a', text: 'Kognitiv angst (bekymring/negative tanker) og somatisk angst (kroppslige symptomer)', isCorrect: true },
          { id: 'b', text: 'Indre angst og ytre angst', isCorrect: false },
          { id: 'c', text: 'Fysisk angst og teknisk angst', isCorrect: false },
          { id: 'd', text: 'Treningsangst og konkurranseangst', isCorrect: false },
        ],
        solution: 'Prestasjonsangst deles inn i kognitiv angst, som omfatter bekymringsfulle tanker, tvil og negative forventninger, og somatisk angst, som omfatter kroppslige reaksjoner som hjertebank, svetting og muskelspenninger. Kognitiv angst har en vedvarende negativ effekt, mens somatisk angst ofte avtar etter at aktiviteten er i gang.',
      },
    },
    {
      id: 'tr2-7-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr2-7-3-ex-3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign den omvendte U-hypotesen og katastrofemodellen. Hva er den viktigste forskjellen mellom dem, og hvilken modell gir etter din mening en bedre beskrivelse av virkeligheten? Begrunn svaret.',
        solution: 'Den omvendte U-hypotesen (Yerkes-Dodson) beskriver en jevn, gradvis sammenheng mellom aktivering og prestasjon: prestasjonen øker med aktivering opp til et optimalt punkt og synker deretter gradvis på den andre siden av kurven. Katastrofemodellen (Fazey og Hardy) tar hensyn til kognitiv angst og viser at prestasjonsnedsettelsen ikke alltid er gradvis. Når kognitiv angst er høy, kan prestasjonen plutselig kollapse dramatisk ved et visst aktiveringsnivå — en «katastrofe». Den viktigste forskjellen er altså at katastrofemodellen inkluderer bekymring som en modererende variabel og predikerer plutselige prestasjonssammenbrudd. Katastrofemodellen gir trolig en bedre beskrivelse av virkeligheten i konkurranseidrett fordi vi ofte ser eksempler på at utøvere «choker» — de går fra å prestere godt til å prestere svært dårlig uten gradvis forverring. Dette stemmer bedre med katastrofemodellen enn med den gradvise nedgangen i den omvendte U-hypotesen. For eksempel kan en golfspiller lede komfortabelt, bli nervøs på de siste hullene (kognitiv angst), og plutselig kollapse totalt.',
      },
    },
    {
      id: 'tr2-7-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr2-7-3-ex-4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv to teknikker for å senke aktiveringsnivået og to teknikker for å øke det. Forklar i hvilke situasjoner hver teknikk kan være hensiktsmessig.',
        solution: 'Teknikker for å senke aktivering: 1) Diafragmatisk pusting — langsom innpust gjennom nesen (4 sek) og lang utpust gjennom munnen (6-8 sek). Aktiverer det parasympatiske nervesystemet og senker hjertefrekvens. Hensiktsmessig mellom setter i tennis, mellom hopp i skihopp, eller ved straffekast der presisjon er avgjørende. 2) Progressiv muskelavspenning — systematisk spenning og avspenning av muskelgrupper. Gir utøveren økt bevissthet om muskelspenninger og evne til å slippe dem. Hensiktsmessig for en skytter som kjenner skjelving i hendene, eller en gymnast med stivhet i skuldre og nakke før en øvelse. Teknikker for å øke aktivering: 1) Energisk musikk — musikk med høyt tempo og kraftig lyd øker hjertefrekvens og mental skjerpelse. Hensiktsmessig som del av oppvarming før styrkeløft, sprint eller kamp — aktiviteter som krever eksplosivitet og maksimal innsats. 2) Aktiverende selvsnakk — korte, energiske fraser som øker mental beredskap. Hensiktsmessig når utøveren er sløv eller undermotivert, for eksempel tidlig i en turnering, i innledende runder, eller på en tidlig morgentrening der energinivået er lavt.',
      },
    },
    {
      id: 'tr2-7-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr2-7-3-ex-5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar retningsmodellen til Jones (1995) og drøft hvordan en utøver kan lære seg å tolke angstsymptomer som fremmende i stedet for hemmende. Bruk Banduras teori om mestringstro i drøftingen.',
        solution: 'Retningsmodellen til Jones hevder at det ikke er intensiteten av angstsymptomer som avgjør virkningen på prestasjon, men utøverens tolkning av symptomene. To utøvere kan oppleve like sterke symptomer (hjertebank, sommerfugler, svetting), men utøveren som tolker dette som «kroppen gjør seg klar» (fremmende retning) vil prestere bedre enn utøveren som tolker det som «jeg er for nervøs, dette klarer jeg ikke» (hemmende retning). Mestringstro er en nøkkelfaktor for tolkningsretningen. Utøvere med høy mestringstro har erfaring med å prestere godt selv når de er nervøse. De har lært at symptomene er en naturlig del av konkurransesituasjonen og at de kan prestere til tross for — eller til og med på grunn av — dem. Utøvere med lav mestringstro mangler denne erfaringsbasen og tolker de samme symptomene som bevis på at de ikke mestrer situasjonen. For å lære en utøver å tolke symptomene som fremmende kan følgende tiltak brukes: 1) Bygge mestringstro gjennom Banduras fire kilder — særlig mestringserfaringer der utøveren presterer godt i pressede situasjoner. Start med moderat press og øk gradvis. 2) Normalisering — treneren forklarer at nervøsitet er normalt og at toppidrettsutøvere opplever de samme symptomene. 3) Reattribuering — lær utøveren å erstatte tolkninger: fra «Jeg er nervøs» til «Kroppen min er klar». Øv på dette systematisk i treningssituasjoner. 4) Eksponering — utsett utøveren gradvis for prestasjonssituasjoner slik at symptomene blir kjente og mindre truende. Over tid vil gjentatte positive erfaringer med å prestere under press automatisk endre tolkningsretningen fra hemmende til fremmende.',
      },
    },
    {
      id: 'tr2-7-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr2-7-3-ex-6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en plan for spenningsregulering for en utøver i en valgfri idrett. Planen skal inneholde: kartlegging av optimalt aktiveringsnivå, teknikker for ulike situasjoner (før, under og etter konkurranse), og strategi for å håndtere prestasjonsangst. Begrunn valgene dine.',
        solution: 'Plan for spenningsregulering — bueskyting: Kartlegging av optimalt aktiveringsnivå: Bueskyting er en finmotorisk presisjonssport som krever lav til moderat aktivering. For høy aktivering gir skjelving, stivhet i fingre og skulder, og redusert presisjon. Optimalt nivå er en tilstand av rolig fokus — skjerpet men avslappet. Teknikker FØR konkurranse: 1) Progressiv muskelavspenning 30 minutter før start — gjennomgang av skuldre, armer og hender for å eliminere spenninger. 2) Diafragmatisk pusting i oppvarmingsrommet — 3 runder med 10 pust for å senke puls og aktiveringsnivå. 3) Rolig musikk i høretelefoner under oppvarming for å blokkere forstyrrende stimuli. 4) Kort visualisering av vellykkede skudd med fokus på følelsen av kontroll og presisjon. Teknikker UNDER konkurranse: 1) Mellom hvert skudd: ett dypt åndedrag (4-6-pusteøvelse) for å nullstille. 2) Fokusord — for eksempel «myk» for å minne om avslappet utløsning. 3) Rutine mellom hvert skudd: senk buen, pust, visualiser neste skudd, løft buen. Rutinen forhindrer at tankene vandrer. 4) Hvis kognitiv angst oppstår: «parkering» — skyv tanken bevisst bort til en mental parkeringsplass og gå tilbake til rutinen. Teknikker ETTER konkurranse: 1) Kroppsskanning for å identifisere muskulære spenninger som har bygget seg opp. 2) Refleksjon — hva fungerte, hva kan forbedres. 3) Debriefing med trener med fokus på prosess, ikke bare resultat. Strategi for prestasjonsangst: Kognitiv angst håndteres gjennom normalisering (nervøsitet er normalt i bueskyting), prosessfokus (fokus på teknikk, ikke plassering) og reattribuering (tolke hjertebank som skjerpelse, ikke trussel). Somatisk angst håndteres gjennom pusteøvelser og muskelavspenning. Langsiktig arbeid med mestringstro gjennom gradvis eksponering for prestsituasjoner i trening.',
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 7.4: Konsentrasjon og fokus
// ============================================================================

export const CHAPTER_TRENING_2_7_4: TextbookChapter = {
  id: 'trening-2-7-4',
  courseId: 'trening-2',
  chapterNumber: '7.4',
  title: 'Konsentrasjon og fokus',
  description: 'Oppmerksomhetsstiler, distrasjoner, fokuseringsstrategier og prestasjonsrutiner i idrett.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjere rede for ulike oppmerksomhetsstiler og deres betydning for idrettsprestasjoner',
    'forklare hvordan distrasjoner påvirker konsentrasjon og prestasjon',
    'drøfte bruk av rutiner og fokusstrategier for å opprettholde konsentrasjon',
  ],
  content: [
    {
      id: 'tr2-7-4-intro',
      type: 'text',
      content: `Konsentrasjon er evnen til å rette og opprettholde oppmerksomheten mot de oppgaverelevante stimuliene i en gitt situasjon. I idrett betyr dette å fokusere på det som er viktig for prestasjonen og filtrere bort det som er irrelevant. En fotballspiller som lytter til ropene fra tribunen i stedet for å følge med på medspillernes bevegelser, vil prestere dårligere enn en som retter all oppmerksomhet mot spillet. Konsentrasjon er ikke en fast egenskap, men en ferdighet som kan trenes og forbedres systematisk.`,
    },
    {
      id: 'tr2-7-4-def-konsentrasjon',
      type: 'definition',
      title: 'Konsentrasjon i idrett',
      content: 'Konsentrasjon i idrettssammenheng defineres som evnen til å fokusere oppmerksomheten på oppgaverelevante stimuli og opprettholde dette fokuset over tid, samtidig som irrelevante stimuli ignoreres. Effektiv konsentrasjon innebærer også evnen til å skifte fokus raskt når situasjonen krever det.',
    },
    {
      id: 'tr2-7-4-text-nideffer',
      type: 'text',
      title: 'Nideffers oppmerksomhetsstiler',
      content: `Robert Nideffer utviklet en modell for oppmerksomhetsstiler basert på to dimensjoner: bredde (bred vs. smal) og retning (intern vs. ekstern). Dette gir fire ulike oppmerksomhetsstiler:

**1. Bred-ekstern:**
- Fokus rettet utover mot mange stimuli samtidig
- Brukes til å lese spillsituasjoner og scanne omgivelsene
- Eksempel: En basketballspiller som vurderer posisjoneringen til alle medspillere og motstandere før en pasning
- Viktig i: Lagspill, kampsport, motorsport

**2. Smal-ekstern:**
- Fokus rettet utover mot ett spesifikt punkt eller objekt
- Brukes til presisjonsoppgaver der et ytre mål er i sentrum
- Eksempel: En golfspiller som fokuserer på ballen like før svingen
- Viktig i: Skyting, bueskyting, dart, straffespark

**3. Bred-intern:**
- Fokus rettet innover med bred oppmerksomhet
- Brukes til analyse, planlegging og taktiske beslutninger
- Eksempel: En trener som analyserer motstanderens spillemønster og legger en plan
- Viktig i: Strategisk planlegging, analyse mellom perioder

**4. Smal-intern:**
- Fokus rettet innover mot en spesifikk indre opplevelse
- Brukes til kroppslig bevissthet, mental repetisjon og pusteøvelser
- Eksempel: En langrennsløper som fokuserer på pustingen og frasparket
- Viktig i: Utholdenhetsidrett, teknikk-fokus, avspenning

**Effektiv prestasjon krever evnen til å skifte mellom disse stilene etter behov.** En tennisspiller må veksle mellom bred-ekstern (lese motstanderens posisjon), smal-ekstern (fokusere på ballen), bred-intern (vurdere taktikk) og smal-intern (kjenne kroppens bevegelsesmønster) i løpet av sekunder.`,
    },
    {
      id: 'tr2-7-4-text-distrasjoner',
      type: 'text',
      title: 'Distrasjoner',
      content: `Distrasjoner er stimuli som trekker oppmerksomheten bort fra det som er relevant for prestasjonen. Vi skiller mellom ytre og indre distrasjoner:

**Ytre distrasjoner:**
- Publikumsstøy, tilrop og piping
- Værforhold (vind, regn, kulde)
- Motstanderens oppførsel eller forsøk på forstyrring
- Medieoppmerksomhet, kameraer og journalister
- Uventede hendelser (tekniske problemer, forsinkelser)

**Indre distrasjoner:**
- Negative tanker og selvkritikk («Jeg bommet igjen, dette går dårlig»)
- Bekymringer om resultat og konsekvenser
- Tanker om fortiden (tidligere feil) eller fremtiden (hva om jeg taper?)
- Tretthet og smerter som fanger oppmerksomheten
- Irrelevante tanker (hva skal jeg spise etterpå?)

**Indre distrasjoner er ofte mer ødeleggende enn ytre distrasjoner** fordi de er vanskeligere å kontrollere og fordi utøveren ikke alltid er klar over dem. En utøver kan lære seg å ignorere bråk fra tribunen, men det er vanskeligere å stoppe en strøm av negative tanker.`,
    },
    {
      id: 'tr2-7-4-text-strategier',
      type: 'text',
      title: 'Strategier for å opprettholde konsentrasjon',
      content: `**Prestasjonsrutiner:**
En prestasjonsrutine er en fast, innøvd sekvens av tanker og handlinger som utøveren gjennomfører før en prestasjon. Rutiner gir forutsigbarhet, reduserer angst og hjelper utøveren å fokusere.

Eksempler:
- En basketballspiller dribbler ballen tre ganger, puster dypt og fokuserer på ringen før et frikast
- En friidrettsutøver gjennomfører et bestemt sett med øvelser i garderoben, lytter til musikk og gjør en kort visualisering før hvert løp
- En tennisspiller stusser ballen et bestemt antall ganger før en serve

Rutinen bør være enkel, konsistent og meningsfull for utøveren.

**Fokusord og triggere:**
Et fokusord er et kort ord eller uttrykk som utøveren bruker for å styre oppmerksomheten tilbake til oppgaven. For eksempel: «her og nå», «neste ball», «slipp», «lett». Fokusord fungerer som en mental knapp som nullstiller oppmerksomheten.

**Parkeringsteknikken:**
Når distraherende tanker oppstår, «parkerer» utøveren tanken mentalt — som å legge den i en skuff som kan åpnes senere. Utøveren anerkjenner at tanken finnes, men velger bevisst å rette oppmerksomheten tilbake til oppgaven.

**Simuleringstrening:**
Utøveren trener under forhold som ligner konkurransesituasjonen, inkludert forstyrrelser. For eksempel kan en skytter trene med tilskuerstøy i bakgrunnen, eller en fotballspiller trene straffespark med lagkamerater som roper.

**Oppgavefokus vs. resultatfokus:**
Utøvere som fokuserer på prosessen (hva skal jeg gjøre nå?) presterer generelt bedre enn utøvere som fokuserer på resultatet (vinner jeg?). Oppgavefokus gir konkrete handlingsalternativer, mens resultatfokus ofte skaper angst.`,
    },
    {
      id: 'tr2-7-4-example-1',
      type: 'example',
      title: 'Konsentrasjonsskift i en basketballkamp',
      content: `En basketballspiller mottar ballen nær trepoenglinjen med 5 sekunder igjen av perioden. I løpet av disse sekundene gjør hun følgende oppmerksomhetsskift: Bred-ekstern — hun scanner banen raskt og ser at en medspiller er fri under kurven, men også at to forsvarere dekker pasningslinjen. Bred-intern — hun vurderer alternativene: passe til medspilleren (risikabelt), dribbe forbi (lite tid), eller skyte tre-poengeren (åpent skudd). Hun velger å skyte. Smal-ekstern — hun fokuserer blikket på ringen, filtrerer ut all annen visuell informasjon. Smal-intern — hun kjenner fotfestet, balansen og utløsningspunktet for skuddet. Hun slipper ballen med riktig bue og rotasjon. Hele sekvensen tar under 2 sekunder og illustrerer hvor raskt effektive utøvere skifter mellom oppmerksomhetsstiler.`,
    },
    {
      id: 'tr2-7-4-note-1',
      type: 'note',
      title: 'Flow-tilstanden',
      content: 'Noen ganger opplever utøvere en tilstand der konsentrasjonen er total, handlinger og tanker flyter uanstrengt, og prestasjonen føles automatisk. Dette kalles flow (Csikszentmihalyi). Flow oppstår vanligvis når utfordringene balanserer ferdighetsnivået, målene er klare, tilbakemeldingen er umiddelbar, og utøveren er fullt konsentrert. Flow kan ikke tvinges frem, men de riktige forholdene kan legges til rette gjennom mental trening, gode rutiner og fokus på prosess fremfor resultat.',
    },
    {
      id: 'tr2-7-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr2-7-4-ex-1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken oppmerksomhetsstil bruker en basketballspiller som scanner banen for å finne en fri medspiller?',
        options: [
          { id: 'a', text: 'Bred-ekstern', isCorrect: true },
          { id: 'b', text: 'Smal-ekstern', isCorrect: false },
          { id: 'c', text: 'Bred-intern', isCorrect: false },
          { id: 'd', text: 'Smal-intern', isCorrect: false },
        ],
        solution: 'Bred-ekstern oppmerksomhet innebærer å rette fokus utover mot mange stimuli samtidig. Når en basketballspiller scanner banen for å se medspillere, motstandere og åpne rom, bruker vedkommende bred-ekstern oppmerksomhet. Fokuset er eksternt (rettet mot omgivelsene) og bredt (tar inn mange informasjonskilder samtidig).',
      },
    },
    {
      id: 'tr2-7-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr2-7-4-ex-2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en prestasjonsrutine?',
        options: [
          { id: 'a', text: 'En fast, innøvd sekvens av tanker og handlinger som utøveren gjennomfører før en prestasjon', isCorrect: true },
          { id: 'b', text: 'En treningsplan som beskriver hvilke øvelser som skal gjennomføres', isCorrect: false },
          { id: 'c', text: 'En overtroisk handling som utøveren tror gir flaks', isCorrect: false },
          { id: 'd', text: 'En rutine som treneren bestemmer for hele laget', isCorrect: false },
        ],
        solution: 'En prestasjonsrutine er en bevisst, innøvd sekvens av mentale og fysiske handlinger som utøveren gjennomfører konsekvent før en prestasjon. Formålet er å skape forutsigbarhet, redusere angst og rette oppmerksomheten mot det som er relevant. Rutiner er individuelle og bør være meningsfulle for utøveren — de er ikke overtro, men et verktøy for konsentrasjon.',
      },
    },
    {
      id: 'tr2-7-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr2-7-4-ex-3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv Nideffers fire oppmerksomhetsstiler og gi eksempler fra idretten for hver. Forklar hvorfor evnen til å skifte mellom stilene er viktig.',
        solution: 'Nideffers fire oppmerksomhetsstiler er: 1) Bred-ekstern — fokus rettet utover mot mange stimuli. Eksempel: En ishockeyspiller som leser spillet og vurderer medspillernes og motstandernes posisjoner. 2) Smal-ekstern — fokus rettet utover mot ett spesifikt punkt. Eksempel: En bueskytter som fokuserer på sentrum av blinken. 3) Bred-intern — fokus rettet innover med bred oppmerksomhet, brukes til analyse og planlegging. Eksempel: En triatlonutøver som under svømmingen vurderer den overordnede taktikken for resten av løpet. 4) Smal-intern — fokus rettet innover mot en spesifikk fornemmelse. Eksempel: En vektløfter som fokuserer på spenningen i kjernemuskulaturen under et løft. Evnen til å skifte er viktig fordi ulike faser av en idrettslig prestasjon krever ulike oppmerksomhetsstiler. I løpet av få sekunder kan en utøver trenge å gå fra bred scanning til smal fokus til indre analyse. En utøver som «henger fast» i feil stil — for eksempel en keeper som fortsatt analyserer (bred-intern) når skuddet kommer (bør være smal-ekstern) — vil prestere dårligere. Trening i oppmerksomhetsskifte er derfor en viktig del av mental trening.',
      },
    },
    {
      id: 'tr2-7-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr2-7-4-ex-4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom ytre og indre distrasjoner. Hvilken type er vanligvis mest skadelig for prestasjonen, og hvilke strategier kan brukes for å håndtere dem?',
        solution: 'Ytre distrasjoner er forstyrrelser fra omgivelsene — publikumsstøy, værforhold, motstanderens oppførsel, medier. Indre distrasjoner er forstyrrelser som oppstår i utøverens eget hode — negative tanker, bekymring, selvkritikk, tanker om fortid eller fremtid. Indre distrasjoner er vanligvis mest skadelig fordi de er vanskeligere å kontrollere, alltid til stede (man kan ikke «gå bort» fra egne tanker), og fordi de ofte skaper en ond sirkel: en negativ tanke fører til dårlig prestasjon, som fører til flere negative tanker. Strategier for å håndtere ytre distrasjoner: Simuleringstrening (trene under realistiske forstyrrelser), faste rutiner som gir forutsigbarhet, bruk av hodetelefoner/musikk for å blokkere lyd. Strategier for å håndtere indre distrasjoner: Parkeringsteknikken (anerkjenn tanken og legg den til side), fokusord for å styre oppmerksomheten tilbake, prosessfokus i stedet for resultatfokus, mindfulness-trening for å bli bedre til å observere tanker uten å la seg rive med.',
      },
    },
    {
      id: 'tr2-7-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr2-7-4-ex-5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Design en prestasjonsrutine for en utøver i en valgfri idrett. Begrunn hvert element i rutinen med utgangspunkt i teori om oppmerksomhet, spenningsregulering og mestringstro.',
        solution: 'Prestasjonsrutine for en spydkaster — 60 sekunder før kastet: Steg 1 (10 sek) — Posisjonering og pusting: Utøveren tar plass i tilløpsfeltet og gjennomfører 3 dype pust (diafragmatisk pusting). Begrunnelse: Regulerer aktiveringsnivået til optimalt nivå (Yerkes-Dodson), reduserer somatisk angst. Steg 2 (10 sek) — Visualisering: Med lukkede øyne forestiller utøveren seg hele kastet i indre perspektiv — tilløp, kast og spydet som flyr. PETTLEP-basert med fokus på timing, følelser og teknikk. Begrunnelse: Aktiverer nevrale baner for bevegelsen, styrker mestringstro gjennom mental repetisjon av suksess. Steg 3 (10 sek) — Fokusord og selvsnakk: Utøveren gjentar fokusordene «eksplosiv — lang» for seg selv. Begrunnelse: Retter oppmerksomheten mot de to viktigste tekniske elementene og blokkerer distraherende tanker. Smal-intern oppmerksomhet. Steg 4 (5 sek) — Ytre fokuspunkt: Utøveren retter blikket mot et fast punkt i enden av kastfeltet. Begrunnelse: Skifter til smal-ekstern oppmerksomhet, som er den relevante stilen i startfasen av tilløpet. Steg 5 (25 sek) — Utførelse: Utøveren starter tilløpet med fokus på rytme og akselerasjon. All oppmerksomhet er rettet mot bevegelsesutførelsen. Begrunnelse: Prosessfokus fremfor resultatfokus. Automatisert bevegelse etter mental forberedelse. Hele rutinen er konsistent, gjennomførbar under konkurranseforhold, og inneholder elementer fra spenningsregulering, visualisering, konsentrasjon og mestringstro.',
      },
    },
    {
      id: 'tr2-7-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr2-7-4-ex-6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft begrepet flow i relasjon til konsentrasjon og mental trening. Hva kjennetegner flow-tilstanden, hvilke forhold fremmer den, og kan mental trening øke sannsynligheten for at flow oppstår?',
        solution: 'Flow (Csikszentmihalyi) er en psykologisk tilstand kjennetegnet av: total konsentrasjon om oppgaven, sammensmeltning av handling og bevissthet (bevegelsene føles automatiske), tap av selvbevissthet (utøveren tenker ikke på seg selv), forvrengt tidsopplevelse, indre motivasjon (aktiviteten er belønning i seg selv), og opplevelse av kontroll. Forhold som fremmer flow: 1) Balanse mellom utfordring og ferdighet — oppgaven er utfordrende nok til å kreve full innsats, men ikke så vanskelig at den skaper angst. 2) Klare mål — utøveren vet hva som skal gjøres. 3) Umiddelbar tilbakemelding — utøveren merker straks om handlingen var vellykket. 4) Fravær av forstyrrende tanker — indre distrasjoner som bekymring og selvkritikk er fraværende. Mental trening kan øke sannsynligheten for flow på flere måter: Konsentrasjonstrening (fokusord, rutiner, oppmerksomhetsskifte) styrker evnen til å opprettholde oppgavefokus, som er en forutsetning for flow. Spenningsregulering hjelper utøveren å oppnå optimalt aktiveringsnivå, noe som støtter flow. Mestringstro gjør at utøveren tolker utfordringer positivt og føler seg kompetent, noe som støtter balansen mellom utfordring og ferdighet. Visualisering kan hjelpe utøveren å «øve» på opplevelsen av flow. Flow kan likevel ikke garanteres eller fremtvinges — det er en spontan tilstand. Mental trening legger til rette for at de riktige forholdene er til stede, men flow oppstår som et biprodukt av fullstendig engasjement, ikke som et direkte resultat av vilje.',
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 7.5: Målsetting og mental treningsplan
// ============================================================================

export const CHAPTER_TRENING_2_7_5: TextbookChapter = {
  id: 'trening-2-7-5',
  courseId: 'trening-2',
  chapterNumber: '7.5',
  title: 'Målsetting og mental treningsplan',
  description: 'SMART-mål, prosess- og resultatmål, og utforming av en helhetlig mental treningsplan.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forklare prinsipper for effektiv målsetting i idrett',
    'gjere rede for forskjellen mellom prosessmål, prestasjonsmål og resultatmål',
    'utarbeide en mental treningsplan med utgangspunkt i idrettspsykologisk teori',
  ],
  content: [
    {
      id: 'tr2-7-5-intro',
      type: 'text',
      content: `Målsetting er et av de mest grunnleggende verktøyene i mental trening. Forskning viser konsistent at utøvere som setter seg spesifikke, utfordrende mål, presterer bedre enn utøvere som ikke har klare mål eller som bare setter seg vage mål som «å gjøre mitt beste». Effektiv målsetting gir retning, øker motivasjonen, styrker selvtilliten ved måloppnåelse og gjør det mulig å evaluere fremgang. I dette kapittelet ser vi på prinsipper for målsetting og hvordan de ulike mentale ferdighetene kan samles i en helhetlig treningsplan.`,
    },
    {
      id: 'tr2-7-5-def-måltyper',
      type: 'definition',
      title: 'Tre typer mål',
      content: 'I idrettspsykologien skiller vi mellom tre typer mål: Resultatmål handler om et endelig utfall, som å vinne en kamp eller komme topp 3 (påvirkes av motstanderne). Prestasjonsmål handler om å oppnå en bestemt standard, uavhengig av andre, som å løpe 100 meter på under 11,5 sekunder. Prosessmål handler om spesifikke handlinger utøveren skal fokusere på underveis, som å holde albuen høyt i svømmingen eller lande med bøyde knær i hoppet.',
    },
    {
      id: 'tr2-7-5-text-måltyper',
      type: 'text',
      title: 'Resultatmål, prestasjonsmål og prosessmål',
      content: `**Resultatmål:**
- Knyttet til et ønsket utfall: vinne kampen, ta medalje, rykke opp
- Gir sterk motivasjon og retning
- Ulempe: Utøveren har ikke full kontroll — resultatet avhenger også av motstanderne
- Kan skape angst hvis fokuset blir for sterkt på utfallet
- Eksempel: «Jeg skal vinne kretsmesterskapet i kulestøt»

**Prestasjonsmål:**
- Knyttet til en personlig standard som utøveren kan kontrollere
- Uavhengig av motstandernes prestasjoner
- Gir mer opplevd kontroll og mindre angst enn resultatmål
- Eksempel: «Jeg skal støte kula over 12 meter i neste konkurranse»

**Prosessmål:**
- Knyttet til spesifikke tekniske, taktiske eller mentale handlinger
- Gir utøveren full kontroll — fokus på det som kan styres her og nå
- Mest effektive for å forbedre prestasjon under kamp/konkurranse
- Eksempel: «Jeg skal fokusere på å holde skulderen lav og akselerere gjennom kastet»

**Optimal bruk:**
De beste resultatene oppnås ved å kombinere alle tre måltyper. Resultatmål gir langsiktig motivasjon og retning. Prestasjonsmål gir konkrete delmål underveis. Prosessmål gir fokus i trenings- og konkurranseøyeblikket. Forskning viser at utøvere som bruker alle tre, presterer bedre enn utøvere som kun bruker resultatmål.`,
    },
    {
      id: 'tr2-7-5-def-smart',
      type: 'definition',
      title: 'SMART-mål',
      content: 'SMART er et rammeverk for å formulere effektive mål. Bokstavene står for: Spesifikt (målet er konkret og tydelig), Målbart (det er mulig å måle om målet er nådd), Ambisiøst/oppnåelig (målet er utfordrende men realistisk), Relevant (målet er meningsfullt for utøveren og knyttet til overordnede mål), og Tidsbestemt (det er satt en tidsfrist for når målet skal være nådd).',
    },
    {
      id: 'tr2-7-5-text-smart',
      type: 'text',
      title: 'SMART-prinsippene i praksis',
      content: `**S — Spesifikt:**
Mål bør være konkrete og presise. «Bli bedre i svømming» er for vagt. «Forbedre 100 m fri-tiden med 2 sekunder» er spesifikt.

**M — Målbart:**
Det må være mulig å konstatere om målet er nådd. Tid, avstand, poeng eller antall vellykkede forsøk er eksempler på målbare kriterier.

**A — Ambisiøst (men oppnåelig):**
Målet bør være utfordrende nok til å motivere, men ikke så urealistisk at det virker uoppnåelig. Et mål som er for lett gir ikke motivasjon, mens et mål som er for vanskelig kan gi resignasjon.

**R — Relevant:**
Målet må oppleves som viktig og meningsfullt for utøveren selv. Mål som er pålagt utenfra uten at utøveren har eierskap, gir lavere motivasjon. Målet bør også henge sammen med den overordnede utviklingsplanen.

**T — Tidsbestemt:**
En klar tidsfrist skaper fremdrift og gjør det mulig å evaluere. «Innen sesongslutt», «innen 1. mars» eller «i løpet av de neste 8 ukene» er eksempler.

**Eksempel på et SMART-mål:**
«Jeg skal forbedre personlig rekord på 400 meter hekk fra 58,3 til 57,5 sekunder innen NM i august, ved å fokusere på hekketeknikk og løpsrytme mellom hekkene i treningsperioden mars-juli.»`,
    },
    {
      id: 'tr2-7-5-text-fallgruver',
      type: 'text',
      title: 'Vanlige fallgruver ved målsetting',
      content: `**For mange mål:**
Utøvere som setter seg for mange mål samtidig, risikerer å miste oversikten og fokuset. Det anbefales å ha 2-3 aktive mål om gangen.

**Bare resultatmål:**
Hvis utøveren kun fokuserer på sluttresultatet (for eksempel å vinne), kan det skape angst og følelse av manglende kontroll. Prosess- og prestasjonsmål bør alltid supplere resultatmål.

**Manglende evaluering:**
Mål som settes men aldri evalueres, mister sin motiverende kraft. Regelmessig gjennomgang og justering av mål er avgjørende.

**For lave mål:**
Mål som er for enkle å nå, gir ikke utvikling og skaper ikke nødvendig innsats. Utfordrende mål aktiverer mer fokusert atferd.

**Ufleksibilitet:**
Mål bør justeres hvis forholdene endrer seg — for eksempel ved skade, sykdom eller endret treningsbelastning. Et rigid mål som ikke lenger er realistisk, kan demotivere.

**Mangel på eierskap:**
Mål som treneren setter uten at utøveren er involvert, gir svakere motivasjon. Utøveren bør ha aktiv medvirkning i målsettingsprosessen (knyttet til autonomi i selvbestemmelsesteorien).`,
    },
    {
      id: 'tr2-7-5-text-mental-plan',
      type: 'text',
      title: 'Utforming av en mental treningsplan',
      content: `En mental treningsplan samler de ulike mentale ferdighetene vi har gjennomgått i denne seksjonen til et helhetlig program. Planen bør være individuelt tilpasset, integrert med den fysiske treningen og evalueres jevnlig.

**Steg 1: Kartlegging**
Start med å identifisere utøverens mentale styrker og svakheter. Hva fungerer allerede godt? Hvor er det størst forbedringspotensial? Bruk samtaler, observasjon og eventuelt kartleggingsverktøy.

**Steg 2: Målsetting**
Sett SMART-mål for de mentale ferdighetene som skal utvikles. Eksempel: «Jeg skal gjennomføre visualisering av konkurranse 4 ganger i uken i 10 minutter i de neste 8 ukene.»

**Steg 3: Velg teknikker**
Velg teknikker som adresserer de identifiserte utviklingsområdene:
- Lav mestringstro → mestringserfaringer, visualisering, positiv selvsnakk
- Prestasjonsangst → spenningsregulering, pusteøvelser, reattribuering
- Konsentrasjonsproblemer → fokusord, rutiner, oppmerksomhetstrening
- Motivasjonsproblemer → autonomistøtte, mestringsorientering, relevant målsetting

**Steg 4: Integrer med fysisk trening**
Mental trening bør ikke bare være en separat aktivitet, men integreres i den daglige treningen. Bruk visualisering som del av oppvarming, fokusord under øvelser, prestasjonsrutiner i teknikktrening.

**Steg 5: Planlegg frekvens og varighet**
Regelmessighet er viktigere enn varighet. 10-15 minutter daglig mental trening er mer effektivt enn en lang økt i uken.

**Steg 6: Evaluering og justering**
Evaluer planen jevnlig (for eksempel hver 4. uke). Hva fungerer? Hva bør endres? Er målene fremdeles relevante? Juster planen basert på erfaringer og utvikling.`,
    },
    {
      id: 'tr2-7-5-example-1',
      type: 'example',
      title: 'Mental treningsplan for en svømmer',
      content: `Kartlegging: En 17 år gammel svømmer har god fysisk form og teknikk, men presterer dårligere i konkurranse enn i trening. Hun rapporterer om nervøsitet, negative tanker og manglende konsentrasjon i konkurranser.

Målsetting (SMART):
- Resultatmål: Kvalifisere meg til junior-NM innen mai (under 1:04 på 100 m fri)
- Prestasjonsmål: Svømme konkurranser innenfor 1 sekund av treningstidene innen mars
- Prosessmål: Gjennomføre prestasjonsrutine før hvert løp og bruke fokusord under svømming

Mental treningsplan (8 uker):
- Daglig (5 min): Visualisering av vellykket konkurransestart med PETTLEP-elementer
- 3 ganger per uke (10 min): Progressiv muskelavspenning etter trening
- Hver trening: Øve på prestasjonsrutine (3 dype pust, visualisering av start, fokusord «glid-driv»)
- Ukentlig: Simuleringstrening — svømme «konkurranser» med lagkamerater som heier/bråker
- Hver 2. uke: Samtale med trener om mental fremgang og justering av planen

Evaluering etter 4 uker viste at visualiseringen hadde god effekt, mens avspenningen trengte mer tid. Planen ble justert med økt fokus på pusteøvelser før start.`,
    },
    {
      id: 'tr2-7-5-note-1',
      type: 'note',
      title: 'Mental trening er langsiktig arbeid',
      content: 'Mental trening gir sjelden umiddelbare resultater. Akkurat som fysisk trening krever det regelmessig øvelse over tid for å se effekt. Utøvere som forventer store endringer etter noen dager, kan bli skuffet. Forskning viser at det tar typisk 4-8 uker med regelmessig mental trening for å oppleve merkbare forbedringer. Tålmodighet og konsistens er nøkkelord.',
    },
    {
      id: 'tr2-7-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr2-7-5-ex-1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva står SMART for i målsettingssammenheng?',
        options: [
          { id: 'a', text: 'Spesifikt, Målbart, Ambisiøst, Relevant, Tidsbestemt', isCorrect: true },
          { id: 'b', text: 'Strategisk, Motiverende, Aktivt, Resultatorientert, Treningsbasert', isCorrect: false },
          { id: 'c', text: 'Systematisk, Mentalt, Analytisk, Realistisk, Teknisk', isCorrect: false },
          { id: 'd', text: 'Strukturert, Målrettet, Ambisjonsbasert, Regelmessig, Tilpasset', isCorrect: false },
        ],
        solution: 'SMART-rammeverket sikrer at mål er effektive ved å være: Spesifikt (konkret og tydelig), Målbart (mulig å konstatere om målet er nådd), Ambisiøst men oppnåelig (utfordrende men realistisk), Relevant (meningsfullt og knyttet til overordnede mål), og Tidsbestemt (med en klar tidsfrist).',
      },
    },
    {
      id: 'tr2-7-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr2-7-5-ex-2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken type mål har utøveren mest kontroll over?',
        options: [
          { id: 'a', text: 'Prosessmål — fokus på spesifikke handlinger og teknikk', isCorrect: true },
          { id: 'b', text: 'Resultatmål — fokus på å vinne eller komme topp 3', isCorrect: false },
          { id: 'c', text: 'Prestasjonsmål — fokus på å slå personlig rekord', isCorrect: false },
          { id: 'd', text: 'Alle måltyper gir like mye kontroll', isCorrect: false },
        ],
        solution: 'Prosessmål gir mest kontroll fordi de handler om spesifikke handlinger utøveren kan styre — for eksempel «hold skuldrene lave» eller «fokuser på pustingen». Resultatmål (vinne, medalje) avhenger av motstanderne og gir minst kontroll. Prestasjonsmål (personlig rekord, bestemt tid) gir middels kontroll — utøveren styrer egen prestasjon, men eksterne faktorer som vær og bane kan påvirke.',
      },
    },
    {
      id: 'tr2-7-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr2-7-5-ex-3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom resultatmål, prestasjonsmål og prosessmål. Gi eksempler fra idretten og beskriv hvorfor en kombinasjon av alle tre er anbefalt.',
        solution: 'Resultatmål handler om det endelige utfallet — å vinne, ta medalje, rykke opp. Eksempel: «Vinne seriefinalen i volleyball.» Gir sterk motivasjon, men utøveren har begrenset kontroll fordi resultatet også avhenger av motstanderne. Prestasjonsmål handler om å nå en bestemt personlig standard. Eksempel: «Hoppe 1,85 m i høyde innen mai.» Gir mer kontroll enn resultatmål fordi standarden er uavhengig av andre. Prosessmål handler om spesifikke handlinger under trening og konkurranse. Eksempel: «Fokusere på armsvingen i satsen ved hvert hopp.» Gir full kontroll og direkte handlingsveiledning. Kombinasjonen anbefales fordi: Resultatmål gir retning og langsiktig driv — de gjør at utøveren vet hvor han eller hun vil. Prestasjonsmål gir konkrete milepæler som utøveren kan evaluere og som viser fremgang. Prosessmål gir daglig fokus og handlingsretning — de sier hva utøveren skal gjøre akkurat nå for å nærme seg de to andre måltypene. Utøvere som bare har resultatmål, kan oppleve angst og hjelpeløshet. Prosess- og prestasjonsmål gir utøveren kontroll og opplevd mestring underveis.',
      },
    },
    {
      id: 'tr2-7-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr2-7-5-ex-4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Formuler tre SMART-mål (ett resultatmål, ett prestasjonsmål og ett prosessmål) for en utøver i en valgfri idrett. Forklar hvordan hvert mål oppfyller SMART-kriteriene.',
        solution: 'Idrett: Friidrett — 400 meter. Resultatmål: «Kvalifisere meg til U20-NM på 400 meter (kravet er 51,00 sek) innen kvalifiseringsfristen 1. juni.» S: Konkret — kvalifisering til et bestemt mesterskap. M: Målbart — kravet er 51,00 sek. A: Utfordrende men oppnåelig basert på nåværende nivå (52,1 sek). R: Meningsfullt for utøverens utvikling. T: Innen 1. juni. Prestasjonsmål: «Senke personlig rekord fra 52,1 til 51,5 sekunder i løpet av vintersesongen (januar-mars), målt i innendørskonkurranser.» S: Konkret tidsforbedring. M: Tid kan måles nøyaktig. A: 0,6 sek forbedring er realistisk over 3 måneder. R: Direkte knyttet til resultatmålet. T: Januar-mars. Prosessmål: «Gjennomføre 3 spenningsregulerings-økter per uke (pusteøvelser og visualisering av optimalt løp) i de neste 8 ukene, og bruke prestasjonsrutine før hvert konkurranseløp.» S: Definert innhold og hyppighet. M: Kan sjekkes av med treningsdagbok. A: 3 ganger per uke er gjennomførbart. R: Adresserer utøverens svakhet (nervøsitet i konkurranser). T: De neste 8 ukene.',
      },
    },
    {
      id: 'tr2-7-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr2-7-5-ex-5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en helhetlig mental treningsplan for en utøver i en valgfri idrett. Planen skal inneholde kartlegging, SMART-mål, valg av teknikker (fra hele seksjon 7), integrering med fysisk trening, og plan for evaluering. Begrunn alle valg med teori.',
        solution: 'Mental treningsplan for en 18 år gammel alpinist: Kartlegging: Utøveren har god teknikk og fysisk form. Utfordringer: 1) Presterer dårlig i konkurranser med mye publikum (prestasjonsangst). 2) Mister konsentrasjonen etter feil i løpet (indre distrasjoner). 3) Har mistet noe motivasjon etter en skuffende sesong. SMART-mål: Resultatmål — Topp 10 i junior-NM i storslalåm innen mars. Prestasjonsmål — Ligge innenfor 2 % av beste treningstid i konkurranser (nå er gapet 4-5 %). Prosessmål — Bruke prestasjonsrutine i starthuset og fokusord mellom portene i alle treningsløp og konkurranser. Teknikker og begrunnelse: 1) Mestringstro (kap 7.1): Bygge mestringstro gjennom gradvis eksponering for konkurranselignende press i trening. Start med simulerte løp uten publikum, deretter med lagkamerater som tilskuere, til slutt med foreldre/venner. Teoretisk begrunnelse: Mestringserfaringer er den sterkeste kilden til self-efficacy (Bandura). 2) Visualisering (kap 7.2): Daglig PETTLEP-visualisering (10 min). Stå med piggsko (Physical), forestill seg konkurransebakken (Environment), fokuser på svinger og linjevalg (Task), sanntidshastighet (Timing), oppdater etter treningserfaringer (Learning), inkluder spenning og mestring (Emotion), indre perspektiv (Perspective). 3) Spenningsregulering (kap 7.3): Diafragmatisk pusting i starthuset (3 pust, 4-6-rytme) for å senke somatisk angst. Reattribuering av nervøsitet — øve på å tolke sommerfugler og høy puls som «klar for start» i stedet for «nervøs». Begrunnelse: Jones retningsmodell — tolkning av symptomene avgjør effekten. 4) Konsentrasjon (kap 7.4): Prestasjonsrutine i starthuset: pust, visualiser de 3 første svingene, fokusord «angrip». Parkeringsteknikk etter feil i løpet — fjern tanken om feilen og fokuser på neste port. Simuleringstrening med forstyrrelser (lyd, tilrop). 5) Målsetting (kap 7.5): Prosessmål for hver treningsøkt og konkurranse. Treningsdagbok med mental evaluering. Integrering med fysisk trening: Visualisering er del av oppvarming (5 min). Prestasjonsrutine øves i hvert treningsløp. Pusteøvelser gjennomføres i starthuset. Simuleringstrening en gang per uke. Mental evaluering er del av treningsdagboken. Evaluering: Uke 1-4: Fokus på å etablere rutiner. Evaluering av om teknikkene oppleves nyttige. Uke 5-8: Øke intensiteten i simuleringstrening. Evaluere om prestasjongapet mellom trening og konkurranse minsker. Uke 9-12: Full integrering. Evaluere mot prestasjonsmålet (innenfor 2 % av treningstid). Justere planen basert på erfaringer. Hele planen bygger på selvbestemmelsesteorien ved å gi utøveren medbestemmelse i utformingen, mestringsopplevelser gjennom gradvis utvikling, og tilhørighet gjennom samarbeid med trener og lagkamerater.',
      },
    },
    {
      id: 'tr2-7-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr2-7-5-ex-6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft følgende situasjon: Et håndballag har som eneste mål å vinne serien. Etter å ha tapt tre kamper på rad, er motivasjonen og selvtilliten på laget svært lav. Med utgangspunkt i det du har lært om målsetting, motivasjon, mestringstro og mental trening — analyser hva som har gått galt og lag en plan for å snu situasjonen.',
        solution: 'Analyse av problemet: Lagets eneste mål er et resultatmål (vinne serien) — noe de ikke har full kontroll over. Etter tre tap oppleves dette målet som uoppnåelig, noe som svekker motivasjonen og mestringstro. Uten prosess- og prestasjonsmål har laget ikke noe å fokusere på som gir opplevelse av fremgang til tross for tapene. I tillegg er motivasjonen trolig påvirket: Kompetansebehovet er truet (de opplever ikke mestring), og kanskje også tilhørighetsbehovet (konflikter kan oppstå etter gjentatte tap). Hva har gått galt: 1) Ensidig resultatfokus uten støttende prosess- og prestasjonsmål. 2) Manglende strategi for å håndtere motgang mentalt. 3) Sannsynligvis et prestasjonsorientert klima der feil og tap sees som nederlag, ikke læringsmuligheter. Plan for å snu situasjonen: 1) Omdefiner suksess — innfør prestasjonsmål og prosessmål i tillegg til resultatmålet. Eksempel prestasjonsmål: «Score minst 25 mål per kamp» (uavhengig av motstander). Eksempel prosessmål: «Gjennomføre forsvarspresset i minst 80 % av motstanderens angrep.» Evaluering etter kamp bør inkludere disse målene, ikke bare seier/tap. 2) Bygg mestringstro — fokuser på det laget gjør bra, selv i tapte kamper. Bruk video for å vise vellykkede spillsekvenser. Tren på situasjoner i treningen der laget opplever mestring (Banduras mestringserfaringer). 3) Skap et mestringsorientert klima — fokuser på utvikling og innsats. Feir fremgang på prosess- og prestasjonsmål. Reduser fokuset på tabellen og resultater i daglig kommunikasjon. 4) Mental trening for laget: Lagets prestasjonsrutine før kamp (felles visualisering, slagord, energibygging). Individuelle fokusord for hver spiller. Parkeringsteknikk for å håndtere feil under kamp. 5) Målsetting fremover: Kortsiktig SMART-mål for neste kamp (konkret og oppnåelig). Mellomlansiktig SMART-mål for de neste 5 kampene. Opprettholde det langsiktige resultatmålet, men supplere med kontrollerbare mål. 6) Kommunikasjon: Trener-spiller-samtaler for å gjenopprette tillit og gi medbestemmelse (autonomi). Fokuser på hva spillerne kan kontrollere. Normaliser motgang som en del av utvikling. Denne planen bruker selvbestemmelsesteorien (gjenopprette autonomi, kompetanse, tilhørighet), Banduras mestringstro (bygge gjennom positive erfaringer), målsettingsteori (kombinere tre måltyper), og praktiske mentale teknikker (rutiner, fokusord, visualisering) for å skape en helhetlig snuoperasjon.',
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const TRENING_2_DEL7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TRENING_2_7_1,
  CHAPTER_TRENING_2_7_2,
  CHAPTER_TRENING_2_7_3,
  CHAPTER_TRENING_2_7_4,
  CHAPTER_TRENING_2_7_5,
];
