/* eslint-disable */
// @ts-nocheck
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.1: Mangfold og identitet
// ============================================================================

export const CHAPTER_KOMKULT3_3_1: TextbookChapter = {
  id: 'komkult3-3-1',
  courseId: 'komkult-3',
  chapterNumber: '3.1',
  title: 'Mangfold og identitet',
  description: 'Utforsk forholdet mellom etnisitet, kultur og identitet. Lær om identitetskonstruksjon i flerkulturelle samfunn og hybride identiteter.',
  estimatedMinutes: 22,
  competenceGoals: [
    'analysere sammenhenger mellom etnisitet, kultur og identitet i flerkulturelle samfunn',
    'drøfte hvordan identitet konstrueres og forhandles i møte mellom kulturer',
  ],
  keyTerms: [
    { term: 'Etnisitet', definition: 'En gruppes opplevde fellesskap basert på felles opprinnelse, kultur, språk, religion eller historie.' },
    { term: 'Identitetskonstruksjon', definition: 'Prosessen der individer aktivt skaper og omskaper sin identitet i samspill med omgivelsene.' },
    { term: 'Hybride identiteter', definition: 'Identiteter som kombinerer elementer fra flere kulturer og tradisjoner til noe nytt og sammensatt.' },
    { term: 'Kulturelt mangfold', definition: 'Tilstedeværelsen av ulike kulturelle uttrykk, tradisjoner og levemåter i et samfunn.' },
    { term: 'Essensialistisk identitetsforståelse', definition: 'Synet på identitet som noe fast og uforanderlig, bestemt av opprinnelse eller biologi.' },
    { term: 'Konstruktivistisk identitetsforståelse', definition: 'Synet på identitet som noe som stadig formes og omformes i sosiale prosesser.' },
  ],
  content: [
    {
      id: 'kk3-3-1-intro',
      type: 'text',
      content: `## Mangfold og identitet i dagens samfunn

I et flerkulturelt samfunn lever mennesker med ulik kulturell, etnisk og religiøs bakgrunn side om side. Dette mangfoldet reiser grunnleggende spørsmål om identitet: Hvem er vi? Hva former oss? Kan vi tilhøre flere kulturer samtidig?

I dette kapittelet skal du lære:
- Hva etnisitet er og hvordan det skiller seg fra rase og nasjonalitet
- Hvordan identitet konstrueres i flerkulturelle samfunn
- Hva hybride identiteter innebærer og hvorfor de er stadig vanligere
- Forskjellen mellom essensialistisk og konstruktivistisk identitetsforståelse`,
    },
    {
      id: 'kk3-3-1-def-1',
      type: 'definition',
      title: 'Etnisitet',
      content: `**Etnisitet** handler om en gruppes opplevde fellesskap basert på forestillinger om felles opprinnelse, kultur, språk, religion eller historie. Det er viktig å forstå at etnisitet er en *sosial konstruksjon* — det er ikke en objektiv, biologisk kategori, men noe som skapes og opprettholdes i sosiale prosesser.

**Etnisitet skiller seg fra:**
- **Rase:** Et utdatert biologisk begrep. Moderne genetikk viser at det ikke finnes distinkte «raser» blant mennesker. Hudfarge og andre ytre trekk sier lite om genetisk variasjon.
- **Nasjonalitet:** Juridisk statsborgerskap. Man kan ha norsk statsborgerskap uten å identifisere seg som etnisk norsk, og omvendt.
- **Kultur:** Etnisitet er én dimensjon av kultur, men kultur er bredere og inkluderer verdier, normer og praksiser som deles av mange ulike etniske grupper.

Etniske grenser er flytende og kontekstavhengige. Hvem som regnes som «oss» og «dem» endrer seg over tid og varierer mellom situasjoner.`,
    },
    {
      id: 'kk3-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Etnisitet som situasjonsbestemt',
      problem: 'Hvordan kan en persons etniske identitet variere mellom ulike kontekster?',
      solution: `**Situasjon:** Amina er født i Norge med foreldre fra Somalia.

**I klasserommet i Oslo:** Amina opplever seg som «norsk» — hun snakker norsk, deler referanser med klassekameratene og har like vaner.

**På ferie i Somalia:** Amina opplever seg som «norsk-somalisk» — hun kjenner kulturen, men føler seg annerledes enn de som har vokst opp der.

**I samtale med en amerikaner:** Amina presenterer seg som «skandinavisk» — den nordiske identiteten blir viktig i en global kontekst.

**I en diskusjon om innvandring:** Amina opplever at andre definerer henne som «innvandrer» eller «somalisk», selv om hun er født i Norge.

**Poenget:** Etnisk identitet er ikke statisk — den aktiveres og vektlegges ulikt avhengig av situasjon, relasjon og kontekst. Amina har flere etniske identiteter som alle er «ekte».`,
    },
    {
      id: 'kk3-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk3-3-1-ex-1',
        number: '3.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den mest presise beskrivelsen av etnisitet?',
        options: [
          { id: 'a', text: 'En gruppes opplevde fellesskap basert på forestillinger om felles opprinnelse og kultur', isCorrect: true },
          { id: 'b', text: 'En biologisk kategori bestemt av hudfarge og gener', isCorrect: false },
          { id: 'c', text: 'Det samme som nasjonalitet og statsborgerskap', isCorrect: false },
          { id: 'd', text: 'En fast og uforanderlig egenskap man fødes med', isCorrect: false },
        ],
        hints: ['Tenk på etnisitet som noe sosialt — ikke biologisk.'],
        solution: 'Etnisitet er en sosial konstruksjon som handler om opplevd fellesskap basert på forestillinger om felles opprinnelse, kultur, språk eller historie. Det er verken biologisk bestemt eller det samme som nasjonalitet.',
      },
    },
    {
      id: 'kk3-3-1-def-2',
      type: 'definition',
      title: 'Essensialistisk vs. konstruktivistisk identitetsforståelse',
      content: `Det finnes to grunnleggende måter å forstå identitet på:

**Essensialistisk identitetsforståelse:**
- Identitet er noe fast, stabilt og uforanderlig
- Du «er» noe basert på opprinnelse, biologi eller tradisjon
- Identitet er noe du har, ikke noe du gjør
- Eksempel: «Hun er somalisk, derfor er hun slik»
- Risiko: Kan føre til stereotypisering og kategorisering

**Konstruktivistisk identitetsforståelse:**
- Identitet er noe som stadig skapes og omformes
- Du konstruerer identiteten din i samspill med omgivelsene
- Identitet er en prosess, ikke en tilstand
- Eksempel: «Hun kombinerer norske og somaliske elementer på sin egen måte»
- Styrke: Åpner for mangfold, endring og individuelle valg

Moderne identitetsforskning heller sterkt mot den konstruktivistiske forståelsen, men anerkjenner at essensialistiske forestillinger fortsatt preger hverdagstenkning.`,
    },
    {
      id: 'kk3-3-1-example-2',
      type: 'example',
      title: 'Eksempel: Hybride identiteter i praksis',
      problem: 'Hva innebærer en hybrid identitet, og hvordan kan den se ut i det norske samfunnet?',
      solution: `**Hybrid identitet** er en identitet som trekker på elementer fra flere kulturelle tradisjoner og skaper noe nytt — en tredje posisjon som ikke er «enten-eller», men «både-og».

**Eksempel — Karim (19 år, Oslo):**
- Foreldrene er fra Pakistan, Karim er født og oppvokst i Norge
- Feirer både id og jul med familien
- Hører på norsk hip-hop som blander urdu og norsk
- Faster i ramadan, men går også på fredagspils med studiekameratene sine
- Identifiserer seg som «norsk-pakistaner» — ikke helt det ene eller andre

**Eksempel — Maria (22 år, Bergen):**
- Mor er polsk, far er norsk
- Snakker polsk hjemme og norsk ellers
- Kombinerer norsk nøkternhet med polsk gjestfrihet
- Reiser til Polen hver sommer, men kaller Norge «hjem»

**Det viktige:** Hybride identiteter er ikke «halve» identiteter — de er fullverdige, kreative sammensmeltninger som beriker individets livsverden og samfunnets mangfold.`,
    },
    {
      id: 'kk3-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk3-3-1-ex-2',
        number: '3.1.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva kjennetegner en konstruktivistisk forståelse av identitet?',
        options: [
          { id: 'a', text: 'Identitet er noe som stadig skapes og omformes i sosiale prosesser', isCorrect: true },
          { id: 'b', text: 'Identitet er medfødt og bestemt av biologi og opprinnelse', isCorrect: false },
          { id: 'c', text: 'Identitet er det samme som nasjonalitet', isCorrect: false },
          { id: 'd', text: 'Alle mennesker i en kultur har identisk identitet', isCorrect: false },
        ],
        hints: ['«Konstruktivistisk» kommer fra «konstruere» — å bygge og skape.'],
        solution: 'En konstruktivistisk identitetsforståelse ser identitet som noe dynamisk som stadig formes og omformes i samspill med omgivelsene. Identitet er en prosess der individet aktivt velger, forhandler og kombinerer ulike elementer.',
      },
    },
    {
      id: 'kk3-3-1-text-1',
      type: 'text',
      content: `### Identitetsforhandling i flerkulturelle samfunn

I et flerkulturelt samfunn forhandler mennesker kontinuerlig om sin identitet. De møter forventninger fra ulike hold — familie, venner, skole, samfunn — som ikke alltid stemmer overens.

**Typiske utfordringer:**
- **Krysspress:** Ulike forventninger fra familie og venner (f.eks. om kjønnsroller, utdanningsvalg, religiøs praksis)
- **Tilhørighetskonflikter:** «Er jeg norsk nok?» «Er jeg somalisk/polsk/pakistansk nok?»
- **Stigmatisering:** Å bli redusert til én identitetsdimensjon (etnisitet) i stedet for å bli sett som et helt menneske
- **Selveksotisering:** Å overdrive sin «annerledeshet» for å oppfylle andres forventninger

**Strategier for identitetsforhandling:**
- **Kodeveksling:** Å tilpasse språk, atferd og uttrykk til ulike kontekster
- **Hybridisering:** Å skape nye kombinasjoner av kulturelle elementer
- **Motstand:** Å aktivt utfordre andres kategoriseringer
- **Seleksjon:** Å velge hvilke kulturelle elementer man ønsker å identifisere seg med`,
    },
    {
      id: 'kk3-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk3-3-1-ex-3',
        number: '3.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar begrepet «kodeveksling» og gi et konkret eksempel på hvordan en person med flerkulturell bakgrunn kan bruke kodeveksling i hverdagen.',
        hints: ['Tenk på hvordan du selv kanskje snakker annerledes med venner enn med lærere.'],
        solution: 'Kodeveksling innebærer at man tilpasser språk, atferd og kulturelle uttrykk til ulike sosiale kontekster. Eksempel: En ungdom med tyrkisk bakgrunn snakker norsk med medelever og veksler til tyrkisk hjemme, bruker slang blant venner og formelt språk i klasserommet, kler seg «vestlig» på skolen og tar på seg tradisjonelle klær under religiøse seremonier. Kodeveksling er ikke tegn på usikkerhet — det er en avansert sosial kompetanse.',
      },
    },
    {
      id: 'kk3-3-1-summary',
      type: 'text',
      content: `## Oppsummering

- **Etnisitet** er en sosial konstruksjon basert på opplevd fellesskap, ikke en biologisk kategori
- **Essensialistisk** identitetsforståelse ser identitet som fast; **konstruktivistisk** ser identitet som dynamisk og formbar
- **Hybride identiteter** kombinerer elementer fra flere kulturer og er stadig vanligere i flerkulturelle samfunn
- Mennesker **forhandler** om sin identitet i møte med ulike forventninger og kontekster
- **Kodeveksling** er en viktig strategi for å navigere mellom ulike kulturelle arenaer`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk3-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk3-3-1-ex-4',
        number: '3.1.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva innebærer en hybrid identitet?',
        options: [
          { id: 'a', text: 'En identitet som kombinerer elementer fra flere kulturer til noe nytt', isCorrect: true },
          { id: 'b', text: 'En identitet der man har mistet kontakten med sin opprinnelige kultur', isCorrect: false },
          { id: 'c', text: 'En identitet som er halvparten av to ulike kulturer', isCorrect: false },
          { id: 'd', text: 'En identitet som kun finnes hos innvandrere', isCorrect: false },
        ],
        hints: ['Tenk på «hybrid» som en kreativ sammensmeltning, ikke en halvering.'],
        solution: 'En hybrid identitet er en fullverdig identitet som trekker på og kombinerer elementer fra flere kulturelle tradisjoner. Det er ikke en «halv» identitet, men en kreativ sammensmeltning som skaper noe nytt. Hybride identiteter finnes hos alle som lever mellom kulturer.',
      },
    },
    {
      id: 'kk3-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk3-3-1-ex-5',
        number: '3.1.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hvorfor en essensialistisk identitetsforståelse kan være problematisk i et flerkulturelt samfunn. Bruk konkrete eksempler.',
        hints: ['Tenk på konsekvensene av å si at noen «er» noe fast og uforanderlig basert på bakgrunn.'],
        solution: 'En essensialistisk forståelse kan være problematisk fordi den låser mennesker i faste kategorier basert på opprinnelse. Eksempel 1: Å si «hun er muslimsk, derfor mener hun X» ignorerer individuell variasjon innenfor grupper. Eksempel 2: Å insistere på at «ekte nordmenn» er hvite og kristne ekskluderer mennesker som er født og oppvokst i Norge men har annen bakgrunn. Essensialisering kan føre til stereotypisering, diskriminering og at mennesker med sammensatte identiteter ikke blir anerkjent.',
      },
    },
    {
      id: 'kk3-3-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk3-3-1-ex-6',
        number: '3.1.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv to ulike strategier for identitetsforhandling i flerkulturelle samfunn. Gi eksempler på hver strategi.',
        hints: ['Tenk på kodeveksling, hybridisering, motstand eller seleksjon.'],
        solution: 'Strategi 1: Kodeveksling — en ungdom med vietnamesisk bakgrunn bytter mellom norsk og vietnamesisk avhengig av om hen er med venner eller familie, og tilpasser atferd og uttrykk etter konteksten. Strategi 2: Hybridisering — en musiker blander tradisjonell arabisk musikk med norsk elektronika og skaper noe helt nytt som verken er «rent» arabisk eller norsk, men en egen stil.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.2: Integrering og inkludering
// ============================================================================

export const CHAPTER_KOMKULT3_3_2: TextbookChapter = {
  id: 'komkult3-3-2',
  courseId: 'komkult-3',
  chapterNumber: '3.2',
  title: 'Integrering og inkludering',
  description: 'Lær om ulike tilnærminger til mangfoldshåndtering: assimilering, multikulturalisme og inkludering. Analyser norsk integreringspolitikk i et komparativt perspektiv.',
  estimatedMinutes: 25,
  competenceGoals: [
    'analysere ulike integreringspolitiske modeller og deres konsekvenser',
    'drøfte forskjeller mellom assimilering, multikulturalisme og inkludering',
  ],
  keyTerms: [
    { term: 'Integrering', definition: 'En gjensidig prosess der innvandrere og samfunnet tilpasser seg hverandre, med deltakelse i arbeids- og samfunnsliv.' },
    { term: 'Assimilering', definition: 'En tilnærming der minoriteter forventes å gi opp sin opprinnelige kultur og bli lik majoriteten.' },
    { term: 'Multikulturalisme', definition: 'En politisk tilnærming som anerkjenner og aktivt støtter kulturelt mangfold i samfunnet.' },
    { term: 'Inkludering', definition: 'En tilnærming som sikter mot at alle skal kunne delta likeverdig i samfunnet uavhengig av bakgrunn.' },
    { term: 'Segregering', definition: 'Fysisk eller sosial atskillelse mellom ulike grupper i et samfunn.' },
    { term: 'Parallellsamfunn', definition: 'Grupper som lever side om side uten vesentlig kontakt eller samhandling med hverandre.' },
  ],
  content: [
    {
      id: 'kk3-3-2-intro',
      type: 'text',
      content: `## Hvordan håndtere mangfold i et samfunn?

Når mennesker med ulik kulturell bakgrunn lever sammen i et samfunn, oppstår et grunnleggende spørsmål: Hvordan skal dette mangfoldet organiseres? Skal minoriteter tilpasse seg flertallet, eller skal samfunnet tilpasse seg mangfoldet?

Ulike land har valgt ulike strategier, med ulike resultater. I dette kapittelet skal du lære:
- Hva integrering betyr og hvordan det skiller seg fra assimilering
- Hovedtrekkene i multikulturalisme som politisk modell
- Hva inkludering innebærer i praksis
- Hvordan norsk integreringspolitikk har utviklet seg
- Utfordringer og muligheter i flerkulturelle samfunn`,
    },
    {
      id: 'kk3-3-2-def-1',
      type: 'definition',
      title: 'Fire tilnærminger til mangfold',
      content: `**1. Assimilering:**
Minoritetene forventes å gi opp sin opprinnelige kultur og bli lik majoriteten. Mangfold sees som et problem som bør reduseres. Historisk eksempel: Fornorskningspolitikken overfor samer og kvener.

**2. Segregering:**
Ulike grupper holdes atskilt — enten gjennom lovgivning (apartheid i Sør-Afrika) eller gjennom sosiale og økonomiske mekanismer (boligmarked, sosiale nettverk). Gruppene lever parallelt uten vesentlig kontakt.

**3. Multikulturalisme:**
Kulturelt mangfold anerkjennes og støttes aktivt. Minoritetsgrupper får rettigheter til å bevare sin kultur, sitt språk og sine tradisjoner. Canada og Australia er kjente eksempler.

**4. Integrering/inkludering:**
En gjensidig tilpasningsprosess der både minoriteter og majoritet forandrer seg. Alle skal kunne delta likeverdig i samfunnet, samtidig som kulturelt mangfold respekteres. Den norske modellen ligger nærmest denne tilnærmingen.`,
    },
    {
      id: 'kk3-3-2-example-1',
      type: 'example',
      title: 'Eksempel: Integreringsmodeller i ulike land',
      problem: 'Hvordan har ulike europeiske land tilnærmet seg integrering?',
      solution: `**Frankrike — Republikansk assimilering:**
- Alle er «franske borgere» — etnisk og religiøs tilhørighet er privat
- Forbud mot religiøse symboler i offentlige skoler (2004)
- Ideal: Et fargeblindt samfunn der alle er like
- Kritikk: Skjuler reell diskriminering, gir ikke rom for kulturelt mangfold

**Storbritannia — Multikulturalisme:**
- Historisk anerkjennelse av ulike kulturelle grupper
- Egen lovgivning mot diskriminering på bakgrunn av rase og religion
- Støtte til minoritetsorganisasjoner og morsmålsundervisning
- Kritikk: Kan føre til parallellsamfunn og manglende fellesskap

**Norge — Integreringsmodellen:**
- Introduksjonsprogram for nyankomne flyktninger
- Norskopplæring og samfunnskunnskap
- Mål om deltakelse i arbeidsliv og samfunn
- Respekt for kulturelle ulikheter innenfor felles rammer
- Kritikk: Kan i praksis ligge nærmere assimilering enn integrering`,
    },
    {
      id: 'kk3-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk3-3-2-ex-1',
        number: '3.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva skiller integrering fra assimilering?',
        options: [
          { id: 'a', text: 'Integrering er en gjensidig tilpasning, assimilering krever at minoriteter gir opp sin kultur', isCorrect: true },
          { id: 'b', text: 'Det er ingen forskjell — begrepene betyr det samme', isCorrect: false },
          { id: 'c', text: 'Assimilering er mer respektfull enn integrering', isCorrect: false },
          { id: 'd', text: 'Integrering betyr at grupper holdes atskilt', isCorrect: false },
        ],
        hints: ['Tenk på hvem som forventes å forandre seg i de to modellene.'],
        solution: 'Ved assimilering forventes minoritetene å gi opp sin kultur og bli lik majoriteten — tilpasningen er ensidig. Ved integrering er tilpasningen gjensidig: både minoriteter og majoritet forandrer seg, og kulturelt mangfold respekteres innenfor felles rammer.',
      },
    },
    {
      id: 'kk3-3-2-text-1',
      type: 'text',
      content: `### Norsk integreringspolitikk i historisk perspektiv

Norsk integreringspolitikk har gjennomgått store endringer:

**1970-tallet — «Gjestarbeider»-perioden:**
- Arbeidsinnvandring fra Pakistan, Tyrkia og Marokko
- Lite fokus på integrering — forventning om at de ville reise tilbake
- Innvandringsstopp i 1975

**1980–1990-tallet — Multikulturalisme:**
- Økt fokus på kulturelt mangfold som berikelse
- Morsmålsundervisning og støtte til minoritetsorganisasjoner
- «Fargerikt fellesskap» som ideal

**2000-tallet — Integreringsfokus:**
- Introduksjonsloven (2003): Obligatorisk program for nyankomne flyktninger
- Økt vekt på norskopplæring og arbeidsdeltakelse
- Debatt om «norske verdier» og hva som kreves for å høre til

**2010-tallet og fremover — Stramming og debatt:**
- Strengere krav til statsborgerskap (språktest, samfunnsprøve)
- Debatt om parallellsamfunn, æreskultur og sosial kontroll
- Økt bevissthet om strukturell diskriminering
- Balanse mellom respekt for mangfold og felles verdiplattform`,
    },
    {
      id: 'kk3-3-2-example-2',
      type: 'example',
      title: 'Eksempel: Inkludering i praksis',
      problem: 'Hva er forskjellen mellom integrering og inkludering, og hvordan ser inkludering ut i praksis?',
      solution: `**Integrering:** Fokuserer ofte på hva *innvandrere* må gjøre for å tilpasse seg samfunnet — lære språk, få jobb, forstå normer.

**Inkludering:** Fokuserer på hva *samfunnet* må gjøre for å gi alle like muligheter — fjerne barrierer, motarbeide diskriminering, tilrettelegge strukturer.

**Eksempler på inkludering i praksis:**
- **Arbeidslivet:** Anonyme søknader der navn ikke avsløres, slik at etnisk bakgrunn ikke påvirker innkalling til intervju
- **Skolen:** Pensum som gjenspeiler mangfoldet i elevgruppen, ikke bare majoritetskulturen
- **Boligmarkedet:** Tiltak mot diskriminering i utleiemarkedet
- **Representasjon:** Politikere, journalister og forbilder med ulike bakgrunner som gjenspeiler befolkningen
- **Språk:** Offentlig informasjon tilgjengelig på flere språk

**Poenget:** Inkludering handler om å endre strukturene, ikke bare individene.`,
    },
    {
      id: 'kk3-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk3-3-2-ex-2',
        number: '3.2.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva kjennetegner multikulturalisme som politisk modell?',
        options: [
          { id: 'a', text: 'Kulturelt mangfold anerkjennes og støttes aktivt av staten', isCorrect: true },
          { id: 'b', text: 'Minoritetene forventes å gi opp sin kultur', isCorrect: false },
          { id: 'c', text: 'Ulike grupper holdes fysisk atskilt fra hverandre', isCorrect: false },
          { id: 'd', text: 'Bare majoritetskulturen har rettigheter og beskyttelse', isCorrect: false },
        ],
        hints: ['Tenk på «multi» — mange — og at staten aktivt forholder seg til dette mangfoldet.'],
        solution: 'Multikulturalisme innebærer at staten anerkjenner kulturelt mangfold som positivt og aktivt støtter minoritetsgruppers rett til å bevare sin kultur, språk og tradisjoner. Canada og Australia er kjente eksempler på stater som har ført en multikulturalistisk politikk.',
      },
    },
    {
      id: 'kk3-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk3-3-2-ex-3',
        number: '3.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva som menes med «parallellsamfunn» og drøft hvilke faktorer som kan bidra til at parallellsamfunn oppstår.',
        hints: ['Tenk på bolig, arbeid, sosiale nettverk og språk.'],
        solution: 'Parallellsamfunn oppstår når ulike grupper lever side om side uten vesentlig kontakt eller samhandling. Faktorer: 1) Boligsegregering — minoriteter konsentreres i bestemte bydeler. 2) Språkbarrierer — manglende norskkunnskaper begrenser sosial kontakt. 3) Arbeidsmarkedets utenforskap — høy arbeidsledighet blant minoriteter. 4) Sosiale nettverk — det er trygt å holde seg til egen gruppe. 5) Diskriminering — opplevelsen av å ikke bli akseptert kan føre til tilbaketrekning.',
      },
    },
    {
      id: 'kk3-3-2-summary',
      type: 'text',
      content: `## Oppsummering

- **Assimilering** krever at minoriteter gir opp sin kultur; **multikulturalisme** anerkjenner og støtter mangfold; **integrering** bygger på gjensidig tilpasning
- **Inkludering** legger ansvaret på samfunnet — strukturer og barrierer må endres, ikke bare individer
- Norsk integreringspolitikk har utviklet seg fra gjestarbeiderperspektiv via multikulturalisme til et integrerings- og inkluderingsfokus
- **Parallellsamfunn** kan oppstå når grupper lever side om side uten kontakt
- Det finnes ingen perfekt modell — alle tilnærminger har styrker og svakheter`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk3-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk3-3-2-ex-4',
        number: '3.2.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign den franske og den norske integreringsmodellen. Diskuter styrker og svakheter ved hver modell.',
        hints: ['Tenk på hva som vektlegges i hver modell, og hva konsekvensene kan være.'],
        solution: 'Frankrike vektlegger republikansk likhet der alle er franske borgere uavhengig av bakgrunn. Styrke: Skaper formell likhet og felles identitet. Svakhet: Ignorerer reelle forskjeller og diskriminering. Norge vektlegger gjensidig tilpasning med respekt for mangfold. Styrke: Mer realistisk, anerkjenner ulikhet. Svakhet: Kan være uklart hva som kreves, og grensen mellom integrering og assimilering er uklar. Begge modellene sliter med strukturell diskriminering og utenforskap.',
      },
    },
    {
      id: 'kk3-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk3-3-2-ex-5',
        number: '3.2.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva var hovedformålet med Introduksjonsloven av 2003?',
        options: [
          { id: 'a', text: 'Å gi nyankomne flyktninger et obligatorisk program med norsk og samfunnskunnskap', isCorrect: true },
          { id: 'b', text: 'Å stenge grensene for all innvandring til Norge', isCorrect: false },
          { id: 'c', text: 'Å fjerne morsmålsundervisning i norske skoler', isCorrect: false },
          { id: 'd', text: 'Å gi alle innvandrere automatisk norsk statsborgerskap', isCorrect: false },
        ],
        solution: 'Introduksjonsloven fra 2003 innførte et obligatorisk introduksjonsprogram for nyankomne flyktninger, med norskopplæring og samfunnskunnskap. Formålet var å gi bedre forutsetninger for deltakelse i arbeids- og samfunnsliv.',
      },
    },
    {
      id: 'kk3-3-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk3-3-2-ex-6',
        number: '3.2.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gi tre konkrete eksempler på inkluderende tiltak i det norske samfunnet. Forklar hvorfor hvert tiltak er et eksempel på inkludering snarere enn assimilering.',
        hints: ['Inkludering handler om å endre strukturer, ikke bare individer.'],
        solution: '1) Anonyme jobbsøknader — endrer strukturene i rekrutteringsprosessen for å motvirke diskriminering, i stedet for å kreve at søkeren tilpasser seg. 2) Flerspråklig informasjon fra det offentlige — samfunnet tilpasser seg mangfoldet, ikke omvendt. 3) Mangfoldig representasjon i medier og lærebøker — gjør at alle kan speile seg i samfunnets kulturuttrykk. Alle tre tiltakene endrer strukturer og systemer, noe som er kjernen i inkludering.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.3: Interkulturell kommunikasjon
// ============================================================================

export const CHAPTER_KOMKULT3_3_3: TextbookChapter = {
  id: 'komkult3-3-3',
  courseId: 'komkult-3',
  chapterNumber: '3.3',
  title: 'Interkulturell kommunikasjon',
  description: 'Analyser verbal og nonverbal kommunikasjon på tvers av kulturer. Forstå hvordan kulturelle koder fører til misforståelser, og lær strategier for effektiv interkulturell kommunikasjon.',
  estimatedMinutes: 24,
  competenceGoals: [
    'analysere utfordringer og muligheter i interkulturell kommunikasjon',
    'drøfte hvordan kulturelle koder påvirker verbal og nonverbal kommunikasjon',
  ],
  keyTerms: [
    { term: 'Interkulturell kommunikasjon', definition: 'Kommunikasjon mellom mennesker med ulik kulturell bakgrunn, der forskjeller i koder og referanserammer kan påvirke forståelsen.' },
    { term: 'Kulturelle koder', definition: 'Uskrevne regler for kommunikasjon og atferd som varierer mellom kulturer.' },
    { term: 'Verbal kommunikasjon', definition: 'Kommunikasjon gjennom ord — muntlig og skriftlig.' },
    { term: 'Nonverbal kommunikasjon', definition: 'Kommunikasjon uten ord: kroppsspråk, ansiktsuttrykk, blikkontakt, avstand, stemmeleie og berøring.' },
    { term: 'Proksemikk', definition: 'Bruken av fysisk avstand i kommunikasjon, som varierer sterkt mellom kulturer.' },
    { term: 'Kulturell støy', definition: 'Forstyrrelser i kommunikasjon som skyldes kulturelle forskjeller mellom sender og mottaker.' },
  ],
  content: [
    {
      id: 'kk3-3-3-intro',
      type: 'text',
      content: `## Kommunikasjon på tvers av kulturer

Interkulturell kommunikasjon er en hverdagsrealitet i dagens globaliserte verden. Vi kommuniserer med mennesker fra andre kulturer på arbeidsplassen, i nabolaget, på reise og digitalt. Men kommunikasjon som er selvfølgelig i én kultur, kan skape forvirring i en annen.

I dette kapittelet skal du lære:
- Hvordan kulturelle koder påvirker verbal og nonverbal kommunikasjon
- Typiske misforståelser som oppstår i interkulturell kommunikasjon
- Forskjellen mellom direkte og indirekte kommunikasjonsstiler
- Strategier for mer effektiv interkulturell kommunikasjon`,
    },
    {
      id: 'kk3-3-3-def-1',
      type: 'definition',
      title: 'Kulturelle koder i kommunikasjon',
      content: `**Kulturelle koder** er de uskrevne reglene som styrer hvordan vi kommuniserer — hva som er passende å si, når, til hvem og på hvilken måte. Vi er sjelden bevisste på våre egne kulturelle koder, men blir smertelig klar over dem når vi møter andre med andre koder.

**Eksempler på kulturelle koder:**
- **Turtagning:** Hvem snakker når? Hvor lenge er det akseptabelt å pause? Er det greit å avbryte?
- **Høflighetsformer:** Tiltale (du/De), titler, omgangstone
- **Temavalg:** Hva er passende å snakke om med fremmede? (I Norge: vær og friluftsliv. I USA: jobb og barn.)
- **Følelsesuttrykk:** Hvor mye følelser er det passende å vise i ulike situasjoner?
- **Humor:** Hva er morsomt? Sarkasme, ironi og selvironi varierer sterkt.

Når to personer har ulike kulturelle koder uten å være klar over det, oppstår **kulturell støy** — forstyrrelser som vanskeliggjør kommunikasjonen.`,
    },
    {
      id: 'kk3-3-3-example-1',
      type: 'example',
      title: 'Eksempel: Kulturell støy på arbeidsplassen',
      problem: 'Hvordan kan kulturelle koder skape misforståelser mellom kolleger med ulik bakgrunn?',
      solution: `**Situasjon:** Erik (norsk) og Fatih (tyrkisk bakgrunn, oppvokst i Norge) er kolleger.

**Erik inviterer Fatih hjem på middag:**
Erik: «Vi spiser klokka seks.»
Fatih: «Takk, det hadde vært hyggelig!»

**Eriks kulturelle kode:** Invitasjon betyr at du kommer presis kl. 18.00. Man tar med seg en flaske vin. Man spiser det som serveres. Man går hjem rundt kl. 22.

**Fatihs kulturelle kode:** Man kommer litt etter avtalt tid (å komme for presis kan virke overivrig). Man tar med en gave — kanskje kaker, ikke alkohol. Man forventer at verten insisterer når man tilbyr seg å hjelpe med oppvasken.

**Mulige misforståelser:**
- Erik opplever at Fatih er «forsinket» (20 minutter)
- Fatih opplever at Erik er «kald» fordi han ikke insisterer gjentatte ganger
- Begge tolker gjennom sine egne kulturelle koder og kan feilvurdere den andres intensjoner

**Løsning:** Bevissthet om at forskjellene skyldes ulike koder — ikke uhøflighet eller dårlige intensjoner.`,
    },
    {
      id: 'kk3-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk3-3-3-ex-1',
        number: '3.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva menes med «kulturell støy» i kommunikasjon?',
        options: [
          { id: 'a', text: 'Forstyrrelser i kommunikasjon som skyldes kulturelle forskjeller mellom sender og mottaker', isCorrect: true },
          { id: 'b', text: 'At det er for mye bakgrunnsstøy i rommet', isCorrect: false },
          { id: 'c', text: 'At man snakker for høyt i en samtale', isCorrect: false },
          { id: 'd', text: 'At man bruker vanskelige ord den andre ikke forstår', isCorrect: false },
        ],
        hints: ['Tenk på «kulturell» — støyen handler om kulturforskjeller, ikke lyd.'],
        solution: 'Kulturell støy oppstår når kulturelle forskjeller mellom sender og mottaker forstyrrer kommunikasjonen. Det kan dreie seg om ulike koder for høflighet, kroppsspråk, direktehet eller humor som fører til feiltolkninger.',
      },
    },
    {
      id: 'kk3-3-3-def-2',
      type: 'definition',
      title: 'Direkte og indirekte kommunikasjonsstiler',
      content: `Kulturer varierer langs et spekter fra direkte til indirekte kommunikasjon. Dette overlapper med Edward T. Halls skille mellom lav- og høykontekstkulturer, men handler spesifikt om kommunikasjonsstil.

**Direkte kommunikasjonsstil:**
- Budskapet sies eksplisitt og tydelig
- Man sier hva man mener, uten omveier
- «Nei» betyr nei, «ja» betyr ja
- Verdsetter ærlighet og tydelighet
- Typisk for: Norge, Tyskland, Nederland, Israel

**Indirekte kommunikasjonsstil:**
- Budskapet antydes, ikke sies rett ut
- Man pakker inn budskapet for å bevare harmoni og «ansikt»
- «Ja» kan bety «kanskje» eller «jeg skal vurdere det»
- Verdsetter harmoni og relasjonsbygging
- Typisk for: Japan, Kina, mange arabiske og sørøstasiatiske kulturer

**Viktig:** Ingen stil er «bedre» enn den andre. Direkte kommunikasjon er effektiv, men kan oppleves som brutal. Indirekte kommunikasjon bevarer relasjoner, men kan oppleves som uklar.`,
    },
    {
      id: 'kk3-3-3-example-2',
      type: 'example',
      title: 'Eksempel: Nonverbal kommunikasjon og misforståelser',
      problem: 'Hvordan kan nonverbal kommunikasjon føre til interkulturelle misforståelser?',
      solution: `**Blikkontakt:**
En norsk lærer ber Ahmed (med eritreisk bakgrunn) se på henne mens hun snakker til ham. Ahmed senker blikket. Læreren tolker det som uhøflighet eller at han skjuler noe. I Ahmeds kultur er senket blikk et uttrykk for *respekt* overfor autoriteter.

**Fysisk avstand (proksemikk):**
Carlos (fra Mexico) står tett på Jonas (norsk) under en samtale. Jonas trekker seg tilbake. Carlos følger etter. Jonas opplever Carlos som «invaderende», Carlos opplever Jonas som «kald». I meksikansk kultur er normal samtale-avstand mye kortere enn i norsk kultur.

**Berøring:**
Aisha (fra Somalia) trekker hånden til seg når en mannlig kollega vil hilse med håndtrykk. Kollegaen tolker det som avvisning. For Aisha er det et uttrykk for religiøs praksis og personlig grenser.

**Felles mønster:** I alle tilfellene tolkes den andres nonverbale atferd gjennom egne kulturelle koder, noe som fører til feiltolkning av intensjoner.`,
    },
    {
      id: 'kk3-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk3-3-3-ex-2',
        number: '3.3.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er proksemikk?',
        options: [
          { id: 'a', text: 'Bruken av fysisk avstand i kommunikasjon', isCorrect: true },
          { id: 'b', text: 'Bruken av håndtrykk som hilsen', isCorrect: false },
          { id: 'c', text: 'Evnen til å lese andres kroppsspråk', isCorrect: false },
          { id: 'd', text: 'Bruken av øyekontakt i samtale', isCorrect: false },
        ],
        hints: ['«Proksemikk» kommer fra «proximity» — nærhet/avstand.'],
        solution: 'Proksemikk handler om bruken av fysisk avstand i kommunikasjon. Ulike kulturer har ulike normer for hvor nærme man står hverandre i samtale. Skandinaviske kulturer foretrekker generelt større avstand enn middelhavslandene og Latin-Amerika.',
      },
    },
    {
      id: 'kk3-3-3-text-1',
      type: 'text',
      content: `### Strategier for effektiv interkulturell kommunikasjon

Å kommunisere godt på tvers av kulturer krever bevissthet, vilje til å lære og evne til perspektivtaking. Her er noen sentrale strategier:

**1. Kulturell bevissthet:**
Bli klar over dine egne kulturelle koder og at de ikke er universelle. Still spørsmål ved det du tar for gitt.

**2. Aktiv lytting:**
Lytt ikke bare til ordene, men prøv å forstå den kulturelle konteksten bak det som sies. Vær oppmerksom på nonverbale signaler.

**3. Perspektivtaking:**
Forsøk å se situasjonen fra den andres kulturelle ståsted. Hva er logisk og naturlig fra deres perspektiv?

**4. Metakommunikasjon:**
Snakk om kommunikasjonen. «Jeg opplever at vi kanskje forstår dette litt ulikt — kan vi snakke om det?»

**5. Unngå stereotypisering:**
Kulturelle mønstre er generaliseringer — de gjelder ikke for alle individer i en kultur. Vær åpen for individuell variasjon.

**6. Toleranse for tvetydighet:**
Akseptér at du ikke alltid vil forstå alt umiddelbart. Vær tålmodig og nysgjerrig.`,
    },
    {
      id: 'kk3-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk3-3-3-ex-3',
        number: '3.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv en situasjon der direkte og indirekte kommunikasjonsstil kan føre til misforståelser. Forklar hva som går galt og hvordan det kunne vært unngått.',
        hints: ['Tenk på en situasjon der noen sier «ja» men mener «nei», eller sier «nei» og virker uhøflig.'],
        solution: 'Eksempel: En norsk prosjektleder spør en japansk kollega direkte om de rekker fristen. Den japanske kollegaen sier «vi skal gjøre vårt beste», noe som i japansk kultur betyr «det blir vanskelig/nei». Den norske lederen tolker dette som «ja» og blir overrasket når fristen ikke overholdes. Unngåelse: Lederen kunne stilt oppfølgingsspørsmål og vært oppmerksom på den indirekte stilen. Kollegaen kunne, i en interkulturell kontekst, vært tydeligere på utfordringene.',
      },
    },
    {
      id: 'kk3-3-3-summary',
      type: 'text',
      content: `## Oppsummering

- **Kulturelle koder** styrer hvordan vi kommuniserer og varierer mellom kulturer
- **Kulturell støy** oppstår når forskjeller i koder forstyrrer kommunikasjonen
- **Direkte kommunikasjon** sier budskapet eksplisitt; **indirekte kommunikasjon** antyder
- **Nonverbal kommunikasjon** (blikkontakt, avstand, berøring) tolkes ulikt på tvers av kulturer
- Effektiv interkulturell kommunikasjon krever **bevissthet**, **aktiv lytting** og **perspektivtaking**`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk3-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk3-3-3-ex-4',
        number: '3.3.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken kommunikasjonsstil verdsetter harmoni og relasjonsbygging fremfor eksplisitt tydelighet?',
        options: [
          { id: 'a', text: 'Indirekte kommunikasjonsstil', isCorrect: true },
          { id: 'b', text: 'Direkte kommunikasjonsstil', isCorrect: false },
          { id: 'c', text: 'Monokron kommunikasjonsstil', isCorrect: false },
          { id: 'd', text: 'Digital kommunikasjonsstil', isCorrect: false },
        ],
        hints: ['Tenk på hvilken stil som «pakker inn» budskapet for å bevare harmoni.'],
        solution: 'Den indirekte kommunikasjonsstilen verdsetter harmoni og relasjoner høyere enn eksplisitt tydelighet. Budskapet antydes i stedet for å sies rett ut, for å unngå å krenke eller skape ubehag. Denne stilen er typisk for mange asiatiske og arabiske kulturer.',
      },
    },
    {
      id: 'kk3-3-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk3-3-3-ex-5',
        number: '3.3.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft utfordringer og muligheter ved interkulturell kommunikasjon i et norsk arbeidsmiljø med stort kulturelt mangfold. Bruk minst to konkrete eksempler.',
        hints: ['Tenk på møtekultur, tilbakemeldingskultur, humor og sosiale arrangementer.'],
        solution: 'Utfordringer: 1) Tilbakemeldingskultur — norsk direktehet kan oppleves som krenkende av kolleger med indirekte kommunikasjonsstil. 2) Møtekultur — noen kulturer forventer hierarkisk turtagning, mens norsk arbeidskultur er egalitær. Muligheter: 1) Mangfoldet gir flere perspektiver og kreative løsninger i problemløsning. 2) Økt kulturell kompetanse gjør bedriften bedre rustet for internasjonalt samarbeid. Nøkkelen er å bygge en arbeidskultur som anerkjenner forskjellene og skaper rom for dialog.',
      },
    },
    {
      id: 'kk3-3-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk3-3-3-ex-6',
        number: '3.3.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg to av strategiene for effektiv interkulturell kommunikasjon og forklar hvordan de kan brukes i en konkret situasjon.',
        hints: ['Velg blant: kulturell bevissthet, aktiv lytting, perspektivtaking, metakommunikasjon, unngå stereotypisering, toleranse for tvetydighet.'],
        solution: 'Eksempel 1 — Aktiv lytting: I en samtale med en kollega fra Kina legger du merke til at hun sier «det kan kanskje gå» med en nølende tone. I stedet for å ta det bokstavelig, følger du opp med spørsmål: «Virker det som det er noen utfordringer?» Eksempel 2 — Metakommunikasjon: Du opplever at en ny kollega fra Eritrea unngår øyekontakt og tror først han er uinteressert. I stedet for å trekke konklusjoner, sier du: «Jeg opplever at vi kommuniserer litt ulikt. Kan vi snakke om hvordan vi best samarbeider?»',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.4: Kulturrelativisme og etnosentrisme
// ============================================================================

export const CHAPTER_KOMKULT3_3_4: TextbookChapter = {
  id: 'komkult3-3-4',
  courseId: 'komkult-3',
  chapterNumber: '3.4',
  title: 'Kulturrelativisme og etnosentrisme',
  description: 'Fordyp deg i begrepene kulturrelativisme og etnosentrisme. Analyser etiske dilemmaer og grensene for kulturrelativisme i lys av menneskerettigheter.',
  estimatedMinutes: 22,
  competenceGoals: [
    'drøfte forholdet mellom kulturrelativisme og universelle menneskerettigheter',
    'analysere etnosentrisme og dens konsekvenser i interkulturelle møter',
  ],
  keyTerms: [
    { term: 'Etnosentrisme', definition: 'Tendensen til å vurdere andre kulturer ut fra sin egen kulturs normer og verdier, med antakelsen om at ens egen kultur er overlegen.' },
    { term: 'Kulturrelativisme', definition: 'Holdningen om at kulturelle praksiser og verdier bør forstås innenfor sin egen kulturelle kontekst, ikke måles mot en ekstern standard.' },
    { term: 'Universelle menneskerettigheter', definition: 'Rettigheter som gjelder for alle mennesker uavhengig av kultur, nasjonalitet eller religion, nedfelt i FNs menneskerettighetserklæring.' },
    { term: 'Metodologisk kulturrelativisme', definition: 'En vitenskapelig tilnærming der man prøver å forstå en kultur på dens egne premisser, uten å dømme.' },
    { term: 'Moralsk kulturrelativisme', definition: 'Det filosofiske standpunktet at det ikke finnes universelle moralske standarder — alt er relativt til kulturen.' },
  ],
  content: [
    {
      id: 'kk3-3-4-intro',
      type: 'text',
      content: `## Hvordan forholder vi oss til kulturelle forskjeller?

Når vi møter kulturelle praksiser som er svært forskjellige fra våre egne, oppstår et grunnleggende spørsmål: Skal vi bedømme dem ut fra våre egne standarder, eller skal vi prøve å forstå dem på deres egne premisser? Dette spørsmålet handler om forholdet mellom etnosentrisme og kulturrelativisme.

I dette kapittelet skal du lære:
- Hva etnosentrisme er og hvordan det påvirker interkulturelle møter
- Hva kulturrelativisme innebærer som holdning og metode
- Forskjellen mellom metodologisk og moralsk kulturrelativisme
- Etiske grenser for kulturrelativisme
- Forholdet mellom kulturrelativisme og universelle menneskerettigheter`,
    },
    {
      id: 'kk3-3-4-def-1',
      type: 'definition',
      title: 'Etnosentrisme',
      content: `**Etnosentrisme** er tendensen til å bruke sin egen kultur som målestokk for å vurdere andre kulturer. Den egne kulturen oppfattes som «normal» og «riktig», mens andre kulturers praksiser vurderes som «merkelige», «primitive» eller «gale».

**Kjennetegn:**
- Man antar at egne verdier og normer er universelle
- Andre kulturer rangeres som bedre eller dårligere enn ens egen
- Man mangler bevissthet om at ens eget perspektiv er kulturelt betinget

**Former for etnosentrisme:**
- **Bevisst etnosentrisme:** Åpen nedvurdering av andre kulturer (rasisme, fremmedfrykt)
- **Ubevisst etnosentrisme:** Å ta for gitt at egne standarder er universelle uten å tenke over det
- **Velmenende etnosentrisme:** «Vi bør hjelpe dem å bli som oss» — ser sin egen kultur som et ideal andre bør strebe mot

Etnosentrisme er dypt menneskelig og finnes i alle kulturer. Det problematiske er ikke at den finnes, men at den blir ureflektert.`,
    },
    {
      id: 'kk3-3-4-example-1',
      type: 'example',
      title: 'Eksempel: Etnosentrisme i hverdagen',
      problem: 'Hvordan kan etnosentrisme komme til uttrykk i hverdagslige situasjoner?',
      solution: `**Eksempel 1 — Matvaner:**
En norsk student reagerer med avsky på at kinesisk mat kan inkludere ingredienser som kyllingføtter. «Det er ekkelt!» Men i Kina er kyllingføtter en populær delikatesse. At noe oppleves som ekkelt, handler om kulturell konvensjon — ikke om hva som er objektivt greit å spise.

**Eksempel 2 — Tidsoppfatning:**
En norsk forretningskvinne blir irritert fordi hennes brasilianske samarbeidspartner «alltid» kommer for sent til møter. I brasiliansk forretningskultur er relasjonsbygging viktigere enn klokkeslett, og presisjon har en bredere ramme.

**Eksempel 3 — Familiestruktur:**
En norsk sosialarbeider bekymrer seg for at en afghansk familie lever «for tett» — tre generasjoner under samme tak. I afghansk kultur er storfamilien en grunnleggende trygghet, og å bo separat kan oppfattes som å svikte familien.

**Felles mønster:** I alle eksemplene vurderer man den andres kultur ut fra sine egne standarder — uten å forstå logikken bak den andre kulturens praksis.`,
    },
    {
      id: 'kk3-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk3-3-4-ex-1',
        number: '3.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er etnosentrisme?',
        options: [
          { id: 'a', text: 'Tendensen til å vurdere andre kulturer ut fra sin egen kulturs standarder', isCorrect: true },
          { id: 'b', text: 'Holdningen om at alle kulturer er likeverdige', isCorrect: false },
          { id: 'c', text: 'Vitenskapelig studie av ulike etniske grupper', isCorrect: false },
          { id: 'd', text: 'En politisk ideologi om nasjonal selvbestemmelse', isCorrect: false },
        ],
        hints: ['«Etno» = folkegruppe/kultur, «sentrisme» = å sette i sentrum.'],
        solution: 'Etnosentrisme er tendensen til å bruke sin egen kultur som målestokk for å vurdere andre kulturer. Man ser sin egen kulturs verdier og normer som «normale» og universelle, og vurderer andre kulturer som avvikende.',
      },
    },
    {
      id: 'kk3-3-4-def-2',
      type: 'definition',
      title: 'Kulturrelativisme — to former',
      content: `**Kulturrelativisme** er holdningen om at kulturelle praksiser bør forstås innenfor sin egen kulturelle kontekst. Det finnes to viktige former:

**Metodologisk kulturrelativisme:**
- En *vitenskapelig tilnærming* brukt i antropologi og kulturstudier
- Man prøver å forstå en kultur på dens egne premisser — uten å dømme
- Målet er kunnskap og forståelse, ikke moralsk bedømmelse
- Eksempel: En forsker studerer et bryllupsritual for å forstå dets funksjon i kulturen, uten å vurdere om det er «riktig»
- Bred enighet om at dette er en nødvendig forskningsmetode

**Moralsk kulturrelativisme:**
- Et *filosofisk standpunkt* som hevder at det ikke finnes universelle moralske standarder
- Hva som er rett og galt er helt avhengig av kulturen
- Ingen kultur har rett til å dømme en annens moralske praksiser
- Eksempel: «Hvis barneekteskap er akseptert i en kultur, kan vi ikke fordømme det»
- Svært kontroversielt — de fleste avviser dette som et absolutt standpunkt`,
    },
    {
      id: 'kk3-3-4-example-2',
      type: 'example',
      title: 'Eksempel: Grensene for kulturrelativisme',
      problem: 'Hvor går grensen for kulturrelativisme? Finnes det praksiser som bør fordømmes uavhengig av kulturell kontekst?',
      solution: `**Tenkt scenario:** I en debatt sier noen: «Vi kan ikke fordømme tvangsekteskap — det er en del av deres kultur.»

**Kulturrelativistisk argument:**
- Ekteskapspraksiser bør forstås i sin kulturelle kontekst
- I mange kulturer er ekteskap en allianse mellom familier, ikke bare et individuelt valg
- Vestlige individualistiske normer er ikke nødvendigvis universelle

**Kritikk av absolutt kulturrelativisme:**
- FNs menneskerettighetserklæring slår fast at ekteskap krever «fritt og fullt samtykke»
- Tvangsekteskap krenker individers grunnleggende autonomi
- Mange mennesker innenfor kulturer som praktiserer tvangsekteskap, kjemper selv mot praksisen
- Å ikke kritisere kan bety å svikte de mest sårbare — ofte kvinner og barn

**Balansert posisjon:**
Vi kan *forstå* den kulturelle logikken bak en praksis (metodologisk kulturrelativisme) uten å *akseptere* at den er moralsk forsvarlig. Universelle menneskerettigheter setter grenser for hva som kan rettferdiggjøres med kulturell tradisjon.`,
    },
    {
      id: 'kk3-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk3-3-4-ex-2',
        number: '3.4.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva skiller metodologisk kulturrelativisme fra moralsk kulturrelativisme?',
        options: [
          { id: 'a', text: 'Metodologisk kulturrelativisme er en forskningsmetode, moralsk er et filosofisk standpunkt om at det ikke finnes universelle moralske standarder', isCorrect: true },
          { id: 'b', text: 'Det er ingen forskjell — begge betyr det samme', isCorrect: false },
          { id: 'c', text: 'Metodologisk kulturrelativisme fordømmer andre kulturer, moralsk gjør det ikke', isCorrect: false },
          { id: 'd', text: 'Moralsk kulturrelativisme er vitenskapelig, metodologisk er politisk', isCorrect: false },
        ],
        hints: ['Tenk på «metodologisk» som en arbeidsmetode og «moralsk» som et syn på rett og galt.'],
        solution: 'Metodologisk kulturrelativisme er en vitenskapelig tilnærming der man forsøker å forstå en kultur på dens egne premisser — uten å dømme. Moralsk kulturrelativisme er et filosofisk standpunkt som hevder at det ikke finnes universelle moralske standarder og at ingen kultur kan dømme en annen.',
      },
    },
    {
      id: 'kk3-3-4-text-1',
      type: 'text',
      content: `### Menneskerettigheter og kulturrelativisme

Forholdet mellom kulturrelativisme og universelle menneskerettigheter er en av de mest debatterte spørsmålene i kulturstudier.

**Universalistisk posisjon:**
- Menneskerettigheter gjelder for alle, uavhengig av kultur
- Individets grunnleggende rettigheter kan ikke tilsidesettes av kulturelle tradisjoner
- FNs menneskerettighetserklæring (1948) er et uttrykk for dette
- Kritikk: Kan sees som «vestlig kulturimperialisme» — ble rettighetene formulert med alle kulturers perspektiv?

**Kulturrelativistisk posisjon:**
- Menneskerettigheter er et produkt av vestlig kulturhistorie
- Andre kulturer kan ha andre verdisystemer som er like gyldige
- Å påtvinge universelle rettigheter kan være en form for etnosentrisme
- Kritikk: Kan brukes til å rettferdiggjøre overgrep mot individer

**Mellomposisjon:**
De fleste forskere i dag inntar en mellomposisjon: Grunnleggende rettigheter som retten til liv, frihet fra tortur og slaveri er universelle, men hvordan rettigheter implementeres kan variere mellom kulturer. Man kan respektere kulturelt mangfold uten å akseptere menneskerettighetsbrudd.`,
    },
    {
      id: 'kk3-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk3-3-4-ex-3',
        number: '3.4.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft påstanden: «Menneskerettighetene er universelle og gjelder uavhengig av kultur.» Presenter argumenter for og mot.',
        hints: ['Tenk på den universalistiske og den kulturrelativistiske posisjonen, samt en mulig mellomposisjon.'],
        solution: 'For: Menneskerettighetene beskytter grunnleggende verdighet og frihet som alle mennesker trenger. Uten universelle standarder har man ingen grunnlag for å kritisere overgrep. Mot: Menneskerettighetene ble formulert primært av vestlige stater og gjenspeiler vestlige verdier som individualisme. Noen kulturer vektlegger kollektive rettigheter høyere. Mellomposisjon: Kjernerettigheter som retten til liv og frihet fra tortur er universelle, men kulturell kontekst bør påvirke hvordan andre rettigheter tolkes og implementeres.',
      },
    },
    {
      id: 'kk3-3-4-summary',
      type: 'text',
      content: `## Oppsummering

- **Etnosentrisme** innebærer å vurdere andre kulturer ut fra sin egen kulturs standarder
- **Kulturrelativisme** søker å forstå kulturer på deres egne premisser
- **Metodologisk kulturrelativisme** er en forskningsmetode; **moralsk kulturrelativisme** er et filosofisk standpunkt
- Universelle **menneskerettigheter** setter grenser for hva som kan rettferdiggjøres med kulturell tradisjon
- De fleste inntar en **mellomposisjon**: grunnleggende rettigheter er universelle, men implementering kan variere kulturelt`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk3-3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk3-3-4-ex-4',
        number: '3.4.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket av disse er et eksempel på velmenende etnosentrisme?',
        options: [
          { id: 'a', text: '«Vi bør hjelpe dem å modernisere seg og bli som oss»', isCorrect: true },
          { id: 'b', text: '«Alle kulturer har noe verdifullt å bidra med»', isCorrect: false },
          { id: 'c', text: '«Vi bør prøve å forstå hvorfor de gjør det på sin måte»', isCorrect: false },
          { id: 'd', text: '«Kulturelle forskjeller beriker samfunnet»', isCorrect: false },
        ],
        hints: ['«Velmenende» betyr at intensjonen er god, men at man likevel bruker sin egen kultur som ideal.'],
        solution: 'Velmenende etnosentrisme innebærer at man, med gode intensjoner, antar at ens egen kulturs levemåte er et ideal andre bør strebe mot. «Vi bør hjelpe dem å modernisere seg og bli som oss» uttrykker dette — det er velmenende, men etnosentrisk fordi det rangerer egen kultur som overlegen.',
      },
    },
    {
      id: 'kk3-3-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk3-3-4-ex-5',
        number: '3.4.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gi et eksempel på en situasjon der etnosentrisme kan føre til konkrete negative konsekvenser i et flerkulturelt samfunn.',
        hints: ['Tenk på skole, helsevesen, arbeidsliv eller rettsvesen.'],
        solution: 'Eksempel: En helsesykepleier med etnosentrisk holdning vurderer en somalisk mors amming og barneoppdragelse etter norske standarder og melder bekymring til barnevernet fordi barnet sover i foreldrenes seng. I somalisk kultur er samsovning vanlig og anbefalt. Konsekvens: Familien mister tillit til hjelpeapparatet, opplever seg misforstått og stigmatisert. Barnevernet bruker ressurser på en «falsk alarm». Etnosentrismen fører til feilvurdering og potensielt skade for familien.',
      },
    },
    {
      id: 'kk3-3-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk3-3-4-ex-6',
        number: '3.4.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Noen hevder at kulturrelativisme kan misbrukes til å rettferdiggjøre overgrep. Drøft denne påstanden med konkrete eksempler, og forklar hvor du mener grensen bør gå.',
        hints: ['Tenk på praksiser som æresrelatert vold, kjønnslemlestelse eller innskrenkning av ytringsfrihet.'],
        solution: 'Påstanden har substans: Absolutt moralsk kulturrelativisme kan misbrukes til å avfeie kritikk av overgrep med «det er deres kultur». Eksempel: Kjønnslemlestelse utføres i noen kulturer, men forårsaker alvorlig fysisk og psykisk skade og krenker individers kroppslige integritet. Eksempel: Æresrelatert vold — å akseptere dette med kulturelle argumenter svikter ofrene. Grensedragning: Grensen bør gå ved praksiser som krenker individers grunnleggende fysiske integritet, frihet og verdighet — slik menneskerettighetene definerer dem. Man kan forstå kulturelle forklaringer uten å akseptere praksisen.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.5: Flerkulturell kompetanse
// ============================================================================

export const CHAPTER_KOMKULT3_3_5: TextbookChapter = {
  id: 'komkult3-3-5',
  courseId: 'komkult-3',
  chapterNumber: '3.5',
  title: 'Flerkulturell kompetanse',
  description: 'Utvikle din kulturelle intelligens gjennom empati, perspektivtaking og praktiske ferdigheter i flerkulturell kommunikasjon.',
  estimatedMinutes: 20,
  competenceGoals: [
    'utvikle og reflektere over egen flerkulturell kompetanse',
    'analysere praktiske strategier for kommunikasjon og samarbeid i flerkulturelle kontekster',
  ],
  keyTerms: [
    { term: 'Flerkulturell kompetanse', definition: 'Evnen til å kommunisere, samarbeide og fungere effektivt med mennesker fra ulike kulturelle bakgrunner.' },
    { term: 'Kulturell intelligens (CQ)', definition: 'Et mål på en persons evne til å fungere effektivt i kulturelt mangfoldige situasjoner, bestående av kognitive, motivasjonelle og atferdsmessige dimensjoner.' },
    { term: 'Empati', definition: 'Evnen til å sette seg inn i en annens situasjon, tanker og følelser.' },
    { term: 'Perspektivtaking', definition: 'Den kognitive evnen til å se en situasjon fra et annet ståsted enn sitt eget.' },
    { term: 'Interkulturell sensitivitet', definition: 'Evnen til å oppfatte og tolke kulturelle forskjeller på en nyansert måte.' },
  ],
  content: [
    {
      id: 'kk3-3-5-intro',
      type: 'text',
      content: `## Å bli flerkulturelt kompetent

I et stadig mer mangfoldig samfunn er flerkulturell kompetanse ikke bare en teoretisk kunnskap — det er en praktisk ferdighet som trengs i skolen, arbeidslivet, helsevesenet og hverdagen. Det handler om å kunne møte mennesker med en annen bakgrunn enn din egen på en respektfull, nysgjerrig og effektiv måte.

I dette kapittelet skal du lære:
- Hva flerkulturell kompetanse innebærer
- Dimensjonene i kulturell intelligens (CQ)
- Hvordan empati og perspektivtaking kan utvikles
- Praktiske verktøy for flerkulturell kommunikasjon og samarbeid`,
    },
    {
      id: 'kk3-3-5-def-1',
      type: 'definition',
      title: 'Kulturell intelligens (CQ)',
      content: `**Kulturell intelligens (CQ)** er et forskningsbasert mål på evnen til å fungere effektivt på tvers av kulturer. I motsetning til IQ og EQ handler CQ spesifikt om interkulturell effektivitet. CQ består av fire dimensjoner:

**1. CQ-drivkraft (motivasjon):**
Interessen og viljen til å engasjere seg med andre kulturer. Har du lyst til å lære? Er du nysgjerrig?

**2. CQ-kunnskap (kognitiv):**
Kunnskap om kulturelle normer, verdier og systemer. Forstår du hvordan andre kulturer fungerer?

**3. CQ-strategi (metakognitiv):**
Evnen til å planlegge og reflektere over interkulturelle møter. Kan du justere forventningene dine?

**4. CQ-handling (atferdsmessig):**
Evnen til å tilpasse atferden din i interkulturelle situasjoner. Kan du justere kommunikasjonsstilen din?

CQ kan trenes og utvikles gjennom erfaring, refleksjon og bevisst øvelse.`,
    },
    {
      id: 'kk3-3-5-example-1',
      type: 'example',
      title: 'Eksempel: Kulturell intelligens i praksis',
      problem: 'Hvordan ser høy kulturell intelligens ut i en konkret arbeidssituasjon?',
      solution: `**Situasjon:** Lise er prosjektleder for et team med kolleger fra Norge, India, Somalia og Polen. De skal samarbeide om et prosjekt over seks måneder.

**CQ-drivkraft:** Lise er genuint nysgjerrig på kollegenes perspektiver og motivert for å lære av mangfoldet i teamet.

**CQ-kunnskap:** Lise vet at:
- Den indiske kollegaen kan ha en mer hierarkisk forventning til lederen
- Den somaliske kollegaen kan ha en mer kollektivistisk tilnærming
- Den polske kollegaen kan ha en annen oppfatning av formalitet i arbeidssituasjoner

**CQ-strategi:** Før kickoff-møtet reflekterer Lise: «Hva tar jeg for gitt om hvordan møter bør foregå? Bør jeg strukturere samarbeidet annerledes?»

**CQ-handling:** Lise tilpasser lederstilen:
- Gir tydeligere rammer enn hun vanligvis ville gjort
- Sjekker eksplisitt at alle har forstått det samme
- Skaper rom for at kollegene kan bidra på sine egne måter
- Unngår norsk uformell humor i starten til hun kjenner kollegene bedre

**Resultat:** Teamet opplever seg respektert og inkludert, og samarbeidet fungerer bedre enn forventet.`,
    },
    {
      id: 'kk3-3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk3-3-5-ex-1',
        number: '3.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av de fire CQ-dimensjonene handler om vilje og interesse for å engasjere seg med andre kulturer?',
        options: [
          { id: 'a', text: 'CQ-drivkraft (motivasjon)', isCorrect: true },
          { id: 'b', text: 'CQ-kunnskap (kognitiv)', isCorrect: false },
          { id: 'c', text: 'CQ-strategi (metakognitiv)', isCorrect: false },
          { id: 'd', text: 'CQ-handling (atferdsmessig)', isCorrect: false },
        ],
        hints: ['Tenk på «drivkraft» — hva driver deg til å ville forstå?'],
        solution: 'CQ-drivkraft handler om motivasjonen og viljen til å engasjere seg i interkulturelle møter. Uten drivkraft hjelper det lite med kunnskap, strategi eller atferdstilpasning — du må ha interessen i bunnen.',
      },
    },
    {
      id: 'kk3-3-5-def-2',
      type: 'definition',
      title: 'Empati og perspektivtaking',
      content: `**Empati** og **perspektivtaking** er to beslektede, men ulike kompetanser som begge er sentrale for flerkulturell kompetanse:

**Empati** handler om *følelser*:
- Å føle med en annen person
- Å la seg berøre av andres opplevelser
- Emosjonell resonans — «jeg føler det du føler»
- Empati er delvis medfødt, men kan styrkes gjennom bevisst øvelse

**Perspektivtaking** handler om *kognisjon*:
- Å forstå en situasjon fra et annet ståsted
- Å tenke «hvordan ville dette sett ut fra deres perspektiv?»
- Krever kunnskap og refleksjon
- En intellektuell øvelse som supplerer empati

**Samspill:** For god interkulturell kommunikasjon trenger vi begge. Empati alene (uten kunnskap) kan føre til feilslutninger — «jeg ville følt meg krenket, altså gjør de det også.» Perspektivtaking alene (uten empati) kan bli kald og instrumentell.`,
    },
    {
      id: 'kk3-3-5-example-2',
      type: 'example',
      title: 'Eksempel: Empati vs. perspektivtaking',
      problem: 'Hva er forskjellen mellom å reagere med empati og med perspektivtaking i en interkulturell situasjon?',
      solution: `**Situasjon:** En kollega fra Afghanistan forteller at familien har arrangert et ekteskap for hans søster.

**Ren empatisk reaksjon (uten kulturell kunnskap):**
«Stakkars henne! Hun må jo velge selv!»
→ Basert på egne følelser og egen kulturell referanseramme. Vel ment, men potensielt krenkende.

**Ren perspektivtaking (uten empati):**
«Ja, jeg vet at arrangerte ekteskap er vanlig i afghansk kultur. Det er bare kulturelt betinget.»
→ Intellektuelt korrekt, men mangler personlig engasjement og medfølelse.

**Kombinert tilnærming (empati + perspektivtaking):**
«Fortell mer. Hvordan opplever du og din søster dette? Jeg vet at familien spiller en annen rolle i afghansk tradisjon enn i norsk, men jeg er nysgjerrig på hvordan det faktisk er for dere.»
→ Viser genuin interesse, respekterer kulturell kontekst og åpner for personlig opplevelse.

**Poenget:** Den beste tilnærmingen kombinerer følelsesmessig engasjement med kulturell kunnskap og nysgjerrighet.`,
    },
    {
      id: 'kk3-3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk3-3-5-ex-2',
        number: '3.5.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er den viktigste forskjellen mellom empati og perspektivtaking?',
        options: [
          { id: 'a', text: 'Empati handler om å føle med, perspektivtaking handler om å forstå fra et annet ståsted', isCorrect: true },
          { id: 'b', text: 'Empati er for profesjonelle, perspektivtaking er for alle', isCorrect: false },
          { id: 'c', text: 'Perspektivtaking er viktigere enn empati', isCorrect: false },
          { id: 'd', text: 'Empati og perspektivtaking betyr det samme', isCorrect: false },
        ],
        hints: ['Tenk på empati som hjerte (følelser) og perspektivtaking som hode (kognisjon).'],
        solution: 'Empati er en følelsesmessig kompetanse — å føle med en annen person. Perspektivtaking er en kognitiv kompetanse — å forstå en situasjon fra et annet ståsted. Begge er viktige for flerkulturell kompetanse, og de utfyller hverandre.',
      },
    },
    {
      id: 'kk3-3-5-text-1',
      type: 'text',
      content: `### Praktiske verktøy for flerkulturell kommunikasjon

Flerkulturell kompetanse er ikke bare teori — det handler om hva du *gjør* i møte med kulturelt mangfold. Her er konkrete verktøy:

**1. LEARN-modellen:**
- **L**isten (lytt): Lytt aktivt og uten å dømme
- **E**xplain (forklar): Forklar ditt eget perspektiv tydelig
- **A**cknowledge (anerkjenn): Anerkjenn forskjeller uten å bagatellisere dem
- **R**ecommend (anbefal): Foreslå løsninger som tar hensyn til begges perspektiv
- **N**egotiate (forhandl): Finn en felles vei videre

**2. Kulturell selvrefleksjon:**
Still deg regelmessig disse spørsmålene:
- Hvilke antakelser gjør jeg basert på min egen kultur?
- Hva tar jeg for gitt som «normalt»?
- Hvordan ville denne situasjonen sett ut fra den andres perspektiv?

**3. Nysgjerrige spørsmål:**
I stedet for å anta, spør:
- «Kan du fortelle meg mer om hvordan dette fungerer i din tradisjon?»
- «Hva er viktig for deg i denne situasjonen?»
- «Opplever vi dette likt, eller har vi ulike forventninger?»

Flerkulturell kompetanse er en livslang læringsprosess — ingen blir «ferdig utlært».`,
    },
    {
      id: 'kk3-3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk3-3-5-ex-3',
        number: '3.5.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk LEARN-modellen på følgende situasjon: En elev nekter å delta i svømmeundervisning fordi det strider mot familiens religiøse verdier. Beskriv hva du ville gjort i hvert steg.',
        hints: ['Gå gjennom hvert steg: Listen, Explain, Acknowledge, Recommend, Negotiate.'],
        solution: 'L (Listen): Lytt til elevens og familiens begrunnelse uten å dømme. Forstå hva bekymringen handler om. E (Explain): Forklar hvorfor svømming er en del av læreplanen og at det handler om sikkerhet og livredning. A (Acknowledge): Anerkjenn at religiøse verdier er viktige og at det kan oppleves som et dilemma. R (Recommend): Foreslå tilpasninger — f.eks. egne garderober, burkini, kjønnsdelt undervisning. N (Negotiate): Finn en løsning som ivaretar læreplankravene og samtidig respekterer familiens verdier — kanskje svømmetimer med tilpasset utstyr.',
      },
    },
    {
      id: 'kk3-3-5-summary',
      type: 'text',
      content: `## Oppsummering

- **Flerkulturell kompetanse** er evnen til å kommunisere og samarbeide effektivt med mennesker fra ulike bakgrunner
- **Kulturell intelligens (CQ)** har fire dimensjoner: drivkraft, kunnskap, strategi og handling
- **Empati** (følelse) og **perspektivtaking** (kognisjon) utfyller hverandre i interkulturelle møter
- Praktiske verktøy som **LEARN-modellen** og **kulturell selvrefleksjon** styrker flerkulturell kompetanse
- Flerkulturell kompetanse er en livslang læringsprosess som krever bevissthet, nysgjerrighet og øvelse`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk3-3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk3-3-5-ex-4',
        number: '3.5.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva står CQ for i konteksten av flerkulturell kompetanse?',
        options: [
          { id: 'a', text: 'Kulturell intelligens (Cultural Quotient)', isCorrect: true },
          { id: 'b', text: 'Kommunikasjonskvalitet (Communication Quality)', isCorrect: false },
          { id: 'c', text: 'Kulturell kvotient for quizzer (Cultural Quiz)', isCorrect: false },
          { id: 'd', text: 'Kreativ kompetanse (Creative Quotient)', isCorrect: false },
        ],
        solution: 'CQ står for Cultural Quotient — kulturell intelligens. Det er et forskningsbasert mål på en persons evne til å fungere effektivt i kulturelt mangfoldige situasjoner, med fire dimensjoner: drivkraft, kunnskap, strategi og handling.',
      },
    },
    {
      id: 'kk3-3-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk3-3-5-ex-5',
        number: '3.5.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vurder din egen flerkulturelle kompetanse ut fra de fire CQ-dimensjonene (drivkraft, kunnskap, strategi, handling). Hvilken dimensjon er din sterkeste, og hvilken ønsker du å utvikle mer? Begrunn svaret.',
        hints: ['Tenk ærlig over: Er du motivert? Har du kunnskap? Reflekterer du i forkant? Tilpasser du atferden?'],
        solution: 'Et godt svar reflekterer ærlig over egne styrker og utviklingsområder med konkrete eksempler. Eksempel: «Min sterkeste dimensjon er CQ-drivkraft — jeg er genuint nysgjerrig på andre kulturer og reiser gjerne. Min svakeste er CQ-strategi — jeg tenker sjelden gjennom interkulturelle situasjoner på forhånd. Jeg vil jobbe med å reflektere mer bevisst over mine egne antakelser før viktige møter med mennesker fra andre bakgrunner.»',
      },
    },
    {
      id: 'kk3-3-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk3-3-5-ex-6',
        number: '3.5.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvorfor flerkulturell kompetanse er viktig i arbeidslivet i dag. Gi to konkrete eksempler på yrker der denne kompetansen er spesielt viktig.',
        hints: ['Tenk på yrker der man møter mennesker med ulik bakgrunn daglig.'],
        solution: 'Flerkulturell kompetanse er viktig fordi arbeidslivet er stadig mer mangfoldig og globalisert. Ansatte må kunne samarbeide med kolleger, kunder og samarbeidspartnere med ulik kulturell bakgrunn. Eksempel 1: Helsepersonell — sykepleiere og leger møter pasienter med ulike kulturelle forventninger til helse, sykdom, kropp og død. Misforståelser kan ha alvorlige konsekvenser. Eksempel 2: Lærere — må forstå og tilrettelegge for elever med ulik bakgrunn, kommunisere med foreldre fra ulike kulturer og skape et inkluderende klassemiljø.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport av alle kapitler
// ============================================================================

export const KOMKULT3_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KOMKULT3_3_1,
  CHAPTER_KOMKULT3_3_2,
  CHAPTER_KOMKULT3_3_3,
  CHAPTER_KOMKULT3_3_4,
  CHAPTER_KOMKULT3_3_5,
];
