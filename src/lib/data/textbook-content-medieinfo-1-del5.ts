/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Medie- og informasjonskunnskap 1 (VG2) - Del 5: Reklame og markedsføring
 *
 * Kapittel 5.1–5.5: Reklamens funksjoner, målgrupper og segmentering, merkevarebygging,
 * digital markedsføring, etikk i reklame.
 *
 * LK20-kompetansemål:
 * - analysere reklame og markedsføring i ulike medier og drøfte virkemidler og påvirkningsstrategier
 * - drøfte etiske problemstillinger knyttet til medieinnhold og markedsføring
 * - gjøre rede for hvordan sosiale medier brukes til markedsføring og påvirkning
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 5.1: Reklamens funksjoner
// ============================================================================

export const CHAPTER_MEDIEINFO_1_5_1: TextbookChapter = {
  id: 'medieinfo-1-5-1',
  courseId: 'medieinfo-1',
  chapterNumber: '5.1',
  title: 'Reklamens funksjoner',
  description: 'En innføring i reklame som kommunikasjonsform, AIDA-modellen og reklamens historiske utvikling. Du lærer hvordan reklame fungerer og hvilke virkemidler som brukes for å påvirke mottakeren.',
  estimatedMinutes: 22,
  competenceGoals: ['analysere reklame og markedsføring i ulike medier og drøfte virkemidler og påvirkningsstrategier'],
  content: [
    {
      id: 'mi-5-1-intro',
      type: 'text',
      content: `## Reklame som kommunikasjon

Reklame omgir oss overalt. Vi møter den på mobilen, på bussen, i sosiale medier og midt i TV-serien vi ser på. Men hva er egentlig reklame, og hvordan virker den? Reklame er en form for betalt kommunikasjon der en avsender forsøker å påvirke mottakeren til å handle, tenke eller føle noe bestemt.

I dette kapittelet skal du lære:
- Hva reklame er og hvilke funksjoner den har
- Hvordan AIDA-modellen beskriver reklamens påvirkning
- Viktige trekk i reklamens historiske utvikling
- Virkemidler som brukes i reklame`,
    },
    {
      id: 'mi-5-1-def-1',
      type: 'definition',
      title: 'Reklame',
      content: `**Reklame** er betalt, ikke-personlig kommunikasjon fra en identifiserbar avsender som har til hensikt å informere om, påvirke holdninger til eller selge et produkt, en tjeneste eller en idé. Reklame skiller seg fra redaksjonelt innhold ved at avsenderen betaler for plassen eller tiden budskapet tar.`,
    },
    {
      id: 'mi-5-1-text-1',
      type: 'text',
      content: `### Reklamens funksjoner

Reklame fyller flere funksjoner i samfunnet:

**1. Informasjonsfunksjonen**
- Gjør forbrukere kjent med nye produkter og tjenester
- Forteller om egenskaper, priser og tilgjengelighet
- Hjelper forbrukere med å ta informerte valg

**2. Overtalelsesfunksjonen**
- Overtaler mottakeren til å velge et bestemt produkt fremfor konkurrentenes
- Skaper behov og ønsker som mottakeren kanskje ikke hadde fra før
- Bygger positive følelser rundt en merkevare

**3. Påminnelsesfunksjonen**
- Holder merkevaren synlig og relevant i mottakerens bevissthet
- Forsterker lojalitet hos eksisterende kunder
- Minner forbrukere på sesongvarer og kommende tilbud

**4. Samfunnsfunksjonen**
- Finansierer medieinnhold (aviser, TV, nettsider)
- Reflekterer og påvirker kulturelle verdier og trender
- Kan brukes til holdningskampanjer (f.eks. trafikksikkerhet)`,
    },
    {
      id: 'mi-5-1-def-2',
      type: 'definition',
      title: 'AIDA-modellen',
      content: `**AIDA-modellen** beskriver fire trinn en mottaker ideelt sett gjennomgår i møte med reklame: **A**ttention (oppmerksomhet) – reklamen fanger blikket, **I**nterest (interesse) – mottakeren ønsker å vite mer, **D**esire (ønske) – mottakeren utvikler et ønske om produktet, og **A**ction (handling) – mottakeren kjøper eller handler. Modellen ble utviklet av E. St. Elmo Lewis allerede i 1898.`,
    },
    {
      id: 'mi-5-1-example-1',
      type: 'example',
      title: 'AIDA i praksis: En Instagram-annonse',
      problem: 'Hvordan kan vi identifisere AIDA-trinnene i en Instagram-annonse for trådløse hodetelefoner?',
      solution: `**Attention:** Et fargerikt bilde med en kjent artist som har hodetelefonene på seg, stikker seg ut i feeden.

**Interest:** Teksten forteller om lydkvalitet, støydemping og 30 timers batteritid.

**Desire:** En kort video viser artisten som bruker hodetelefonene i ulike situasjoner – på trening, på bussen, i studio. Underteksten sier «Musikken din fortjener dette».

**Action:** En «Kjøp nå»-knapp med tilbudet «20 % avslag denne uken» oppfordrer til umiddelbar handling.

Hvert element i annonsen er designet for å føre mottakeren ett steg nærmere et kjøp.`,
    },
    {
      id: 'mi-5-1-text-2',
      type: 'text',
      content: `### Reklamens historie – fra avisannonser til algoritmer

**1800-tallet:** De første trykte reklamene dukket opp i aviser og på plakater. Budskapet var enkelt og informativt.

**Tidlig 1900-tall:** Reklamebransjen vokste frem med profesjonelle reklamebyråer. Psykologiske virkemidler ble tatt i bruk for å appellere til følelser.

**1950–1970-tallet:** TV-reklamen revolusjonerte bransjen. «Mad Men»-æraen innledet kreativ reklame med sterke slagord og visuell fortelling.

**1990–2000-tallet:** Internett åpnet for interaktiv reklame, bannerannonser og e-postmarkedsføring.

**2010-tallet og fremover:** Sosiale medier, influensermarkedsføring og algoritmestyrt annonsering har endret spillereglene fullstendig. I dag kan reklame tilpasses den enkelte mottaker i sanntid.`,
    },
    {
      id: 'mi-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi-5-1-ex-1',
        number: '5.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva står bokstavene i AIDA-modellen for?',
        options: [
          { id: 'a', text: 'Attention, Interest, Desire, Action', isCorrect: true },
          { id: 'b', text: 'Attract, Inform, Deliver, Analyze', isCorrect: false },
          { id: 'c', text: 'Awareness, Involvement, Decision, Acquisition', isCorrect: false },
          { id: 'd', text: 'Appeal, Impact, Demand, Agreement', isCorrect: false },
        ],
        solution: 'AIDA står for Attention (oppmerksomhet), Interest (interesse), Desire (ønske) og Action (handling). Modellen beskriver de fire trinnene en mottaker gjennomgår i møte med reklame.',
      },
    },
    {
      id: 'mi-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi-5-1-ex-2',
        number: '5.1.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom reklamens informasjonsfunksjon og overtalelsesfunksjon. Gi et eksempel på hver.',
        hints: ['Tenk på hva som er hovedhensikten med hvert budskap'],
        solution: 'Informasjonsfunksjonen handler om å gi saklig informasjon om produktet, for eksempel en dagligvarebutikk som opplyser om ukens tilbud med priser og varer. Overtalelsesfunksjonen handler om å overbevise mottakeren om at akkurat dette produktet er best, for eksempel en parfymereklame som skaper en stemning av luksus og attraktivitet for å få mottakeren til å ønske seg produktet.',
      },
    },
    {
      id: 'mi-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi-5-1-ex-3',
        number: '5.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg en reklame du nylig har sett (på nett, TV eller i sosiale medier). Analyser den ved hjelp av AIDA-modellen. Forklar hvordan reklamen forsøker å føre deg gjennom hvert av de fire trinnene.',
        solution: 'Elevens svar vil variere. Et godt svar identifiserer tydelig alle fire AIDA-trinn i den valgte reklamen: hva som fanger oppmerksomheten (bilde, overskrift, lyd), hva som skaper interesse (informasjon, påstander), hva som vekker ønske (følelser, identifikasjon), og hva som oppfordrer til handling (CTA-knapp, tilbud, frist).',
      },
    },
    {
      id: 'mi-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi-5-1-ex-4',
        number: '5.1.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Reklame finansierer store deler av medieinnholdet vi konsumerer daglig. Drøft fordeler og ulemper ved at medier er avhengige av reklameinntekter.',
        hints: ['Tenk på redaksjonell uavhengighet og gratis innhold'],
        solution: 'Fordeler: Forbrukere får tilgang til gratis innhold (nettaviser, YouTube, sosiale medier), mediene får inntekter til å produsere journalistikk og underholdning, og annonsører når ut til kundene sine. Ulemper: Mediene kan bli påvirket av annonsørene og unngå kritisk journalistikk om dem, innholdet kan tilpasses for å generere klikk fremfor kvalitet (clickbait), og brukernes persondata samles inn og brukes til målrettet reklame uten at mange er klar over omfanget.',
      },
    },
    {
      id: 'mi-5-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi-5-1-ex-5',
        number: '5.1.5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av reklamens funksjoner handler om å holde merkevaren synlig i mottakerens bevissthet?',
        options: [
          { id: 'a', text: 'Informasjonsfunksjonen', isCorrect: false },
          { id: 'b', text: 'Overtalelsesfunksjonen', isCorrect: false },
          { id: 'c', text: 'Påminnelsesfunksjonen', isCorrect: true },
          { id: 'd', text: 'Samfunnsfunksjonen', isCorrect: false },
        ],
        solution: 'Påminnelsesfunksjonen handler om å holde merkevaren synlig og relevant i mottakerens bevissthet. Coca-Cola er et klassisk eksempel – de trenger ikke informere om at brus finnes, men minner oss stadig om merkevaren.',
      },
    },
    {
      id: 'mi-5-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Reklame** er betalt kommunikasjon fra en identifiserbar avsender med hensikt å påvirke
- Reklame har fire funksjoner: **informasjon, overtalelse, påminnelse og samfunnsfunksjon**
- **AIDA-modellen** beskriver trinnene Attention, Interest, Desire og Action
- Reklamen har utviklet seg fra trykte annonser til **algoritmebasert, personalisert annonsering**

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Reklame | Betalt, ikke-personlig kommunikasjon fra en identifiserbar avsender |
| AIDA-modellen | Attention, Interest, Desire, Action – fire trinn i reklamepåvirkning |
| Informasjonsfunksjonen | Reklame som opplyser om produkter og tjenester |
| Overtalelsesfunksjonen | Reklame som overbeviser om å velge et bestemt produkt |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Reklame', definition: 'Betalt, ikke-personlig kommunikasjon fra en identifiserbar avsender som skal informere om eller selge noe' },
    { term: 'AIDA-modellen', definition: 'Modell som beskriver fire trinn i reklamepåvirkning: Attention, Interest, Desire, Action' },
    { term: 'Informasjonsfunksjonen', definition: 'Reklamens funksjon som gir forbrukere saklig informasjon om produkter' },
    { term: 'Overtalelsesfunksjonen', definition: 'Reklamens funksjon som overtaler mottakeren til å velge et bestemt produkt' },
    { term: 'Påminnelsesfunksjonen', definition: 'Reklamens funksjon som holder merkevaren synlig i mottakerens bevissthet' },
  ],
};

// ============================================================================
// Kapittel 5.2: Målgrupper og segmentering
// ============================================================================

export const CHAPTER_MEDIEINFO_1_5_2: TextbookChapter = {
  id: 'medieinfo-1-5-2',
  courseId: 'medieinfo-1',
  chapterNumber: '5.2',
  title: 'Målgrupper og segmentering',
  description: 'En gjennomgang av målgruppeanalyse, segmenteringskriterier og forbrukerkultur. Du lærer hvordan annonsører identifiserer og tilpasser budskap til spesifikke målgrupper.',
  estimatedMinutes: 24,
  competenceGoals: ['analysere reklame og markedsføring i ulike medier og drøfte virkemidler og påvirkningsstrategier'],
  content: [
    {
      id: 'mi-5-2-intro',
      type: 'text',
      content: `## Hvem snakker reklamen til?

Ingen reklame henvender seg til «alle». Annonsører bruker enorme ressurser på å finne ut hvem de vil nå, og hvordan de kan tilpasse budskapet akkurat til denne gruppen. Å kjenne målgruppen sin er nøkkelen til effektiv kommunikasjon.

I dette kapittelet skal du lære:
- Hva en målgruppe er og hvorfor målgruppeanalyse er viktig
- Ulike kriterier for segmentering
- Hva forbrukerkultur betyr for markedsføring
- Hvordan digitale verktøy brukes til å identifisere målgrupper`,
    },
    {
      id: 'mi-5-2-def-1',
      type: 'definition',
      title: 'Målgruppe',
      content: `En **målgruppe** er den gruppen mennesker en avsender ønsker å nå med et budskap. Målgruppen defineres ut fra kjennetegn som gjør at disse personene har størst sannsynlighet for å være interessert i produktet, tjenesten eller budskapet. Presis målgruppeforståelse gjør kommunikasjonen mer effektiv.`,
    },
    {
      id: 'mi-5-2-text-1',
      type: 'text',
      content: `### Hvorfor er målgruppeanalyse viktig?

En reklame som treffer alle, treffer egentlig ingen. Ved å kjenne målgruppen kan annonsøren:

- **Tilpasse budskapet** – bruke språk, bilder og argumenter som resonnerer med akkurat denne gruppen
- **Velge riktige kanaler** – annonsere der målgruppen faktisk er (TikTok for unge, LinkedIn for yrkesaktive)
- **Spare penger** – unngå å betale for å nå mennesker som aldri vil kjøpe produktet
- **Skape relevans** – mottakere som føler at reklamen «snakker til dem» er mer mottakelige

En produsent av barnemat vil ikke annonsere i et bilblad. En luksusklokke-merkevare vil ikke annonsere på en ungdomsapp. Målgruppeforståelse styrer alle valg.`,
    },
    {
      id: 'mi-5-2-def-2',
      type: 'definition',
      title: 'Segmentering',
      content: `**Segmentering** er prosessen med å dele et marked inn i mindre, homogene grupper (segmenter) basert på felles kjennetegn. Hvert segment består av forbrukere med lignende behov, verdier eller atferd, slik at markedsføringen kan skreddersys til hver gruppe.`,
    },
    {
      id: 'mi-5-2-text-2',
      type: 'text',
      content: `### Segmenteringskriterier

Markedet kan segmenteres etter ulike kriterier:

**Demografiske kriterier:**
- Alder, kjønn, inntekt, utdanning
- Familiesituasjon (enslig, par, barnefamilie)
- Yrke og stilling

**Geografiske kriterier:**
- Land, region, by vs. bygd
- Klima og lokale forhold
- Kulturelle forskjeller mellom områder

**Psykografiske kriterier:**
- Livsstil og interesser
- Verdier og holdninger
- Personlighetstyper

**Atferdsbaserte kriterier:**
- Kjøpsvaner og lojalitet
- Bruksfrekvens (storforbrukere vs. sjeldne kjøpere)
- Anledninger (hverdagskjøp, gave, sesong)

Moderne digital markedsføring kombinerer gjerne flere kriterier for å lage svært presise målgrupper.`,
    },
    {
      id: 'mi-5-2-example-1',
      type: 'example',
      title: 'Segmentering i praksis: En sportskjede',
      problem: 'Hvordan kan en sportskjede segmentere markedet sitt for å selge løpesko?',
      solution: `Sportskjeden kan identifisere flere segmenter:

**Segment 1: «Seriøse løpere»**
- Demografisk: 25–45 år, middels til høy inntekt
- Psykografisk: Konkurranseorienterte, opptatt av prestasjon
- Atferd: Trener 4–6 ganger i uken, bytter sko ofte
- Budskap: Fokus på teknologi, lav vekt og personlige rekorder

**Segment 2: «Mosjonister»**
- Demografisk: 30–60 år, varierende inntekt
- Psykografisk: Helsebevisste, ønsker å holde seg i form
- Atferd: Trener 2–3 ganger i uken
- Budskap: Fokus på komfort, demping og skadeforebygging

**Segment 3: «Trendsettere»**
- Demografisk: 16–25 år
- Psykografisk: Motebevisste, opptatt av merkevarer
- Atferd: Bruker sko like mye til hverdags som trening
- Budskap: Fokus på design, farger og anerkjente merker

Hvert segment får tilpasset reklame, kanaler og produktutvalg.`,
    },
    {
      id: 'mi-5-2-text-3',
      type: 'text',
      content: `### Forbrukerkultur

**Forbrukerkultur** beskriver et samfunn der kjøp og forbruk av varer og tjenester er en sentral del av identiteten og livsstilen. Vi kjøper ikke bare ting fordi vi trenger dem – vi kjøper dem for å uttrykke hvem vi er, tilhøre en gruppe eller vise status.

Reklamen spiller en aktiv rolle i forbrukerkulturen:
- Den knytter produkter til følelser, identitet og drømmer
- Den skaper behov for stadig nye ting (planlagt foreldelse, trender)
- Den definerer hva som er «normalt» og ønskelig
- Den utnytter sosial sammenligning: «Andre har det – bør ikke du også?»

For å forstå reklame kritisk er det viktig å være bevisst på hvordan forbrukerkulturen påvirker oss alle.`,
    },
    {
      id: 'mi-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi-5-2-ex-1',
        number: '5.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket av disse er et psykografisk segmenteringskriterium?',
        options: [
          { id: 'a', text: 'Alder', isCorrect: false },
          { id: 'b', text: 'Bosted', isCorrect: false },
          { id: 'c', text: 'Livsstil og verdier', isCorrect: true },
          { id: 'd', text: 'Kjøpshyppighet', isCorrect: false },
        ],
        solution: 'Livsstil og verdier er psykografiske kriterier. Alder er demografisk, bosted er geografisk, og kjøpshyppighet er atferdsbasert.',
      },
    },
    {
      id: 'mi-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi-5-2-ex-2',
        number: '5.2.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du skal lage en kampanje for et nytt energidrikk-merke. Beskriv målgruppen din ved hjelp av minst tre ulike segmenteringskriterier.',
        hints: ['Bruk demografiske, psykografiske og atferdsbaserte kriterier'],
        solution: 'Eksempel: Demografisk – unge voksne 18–30 år, studenter eller i tidlig karriere. Psykografisk – aktive, sosiale og prestasjonsorienterte, med interesse for trening eller gaming. Atferdsbasert – kjøper energidrikk minst ukentlig, ofte i tilknytning til trening, lange studieøkter eller gaming. Geografisk kan også brukes – fokus på byer med universiteter og treningsmiljøer.',
      },
    },
    {
      id: 'mi-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi-5-2-ex-3',
        number: '5.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gi to eksempler på hvordan forbrukerkulturen gjør at vi kjøper ting vi egentlig ikke trenger. Forklar hvordan reklame bidrar til dette.',
        solution: 'Eksempel 1: Ny smarttelefon hvert år – reklamen presenterer små oppgraderinger som revolusjonerende og får eldre modeller til å virke utdaterte, selv om de fortsatt fungerer utmerket. Eksempel 2: Merkeklær – reklamen knytter identitet og sosial tilhørighet til bestemte merker, slik at vi betaler mye mer for klær med synlig logo enn for tilsvarende kvalitet uten merke. Reklamen skaper et behov for status og tilhørighet gjennom forbruk.',
      },
    },
    {
      id: 'mi-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi-5-2-ex-4',
        number: '5.2.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvorfor bruker annonsører segmentering?',
        options: [
          { id: 'a', text: 'For å nå flest mulig med samme budskap', isCorrect: false },
          { id: 'b', text: 'For å tilpasse budskapet til grupper med like behov og øke relevansen', isCorrect: true },
          { id: 'c', text: 'Fordi loven krever at reklame er segmentert', isCorrect: false },
          { id: 'd', text: 'For å gjøre reklamen billigere å produsere', isCorrect: false },
        ],
        solution: 'Segmentering handler om å dele markedet i grupper med like behov, slik at budskapet kan tilpasses og bli mer relevant for mottakeren. Relevant reklame gir bedre effekt og mindre bortkastede annonsekroner.',
      },
    },
    {
      id: 'mi-5-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi-5-2-ex-5',
        number: '5.2.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Diskuter påstanden: «Moderne digital annonsering kjenner deg bedre enn du kjenner deg selv.» Hva menes med dette, og hvilke konsekvenser kan det ha for personvernet?',
        hints: ['Tenk på sporing, cookies og algoritmebasert annonsering'],
        solution: 'Påstanden handler om at digitale plattformer samler enorme mengder data om vår atferd – hva vi søker etter, hva vi klikker på, hvor lenge vi ser på noe, hvilke steder vi besøker. Algoritmene kan forutsi ønsker og behov vi kanskje ikke er bevisste på selv. Konsekvenser for personvernet: manglende kontroll over egne data, filterbobler der man bare ser innhold som forsterker eksisterende holdninger, manipulering av kjøpsbeslutninger, og risiko for at sensitive opplysninger havner på avveie.',
      },
    },
    {
      id: 'mi-5-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- En **målgruppe** er den gruppen mennesker avsenderen ønsker å nå
- **Segmentering** deler markedet inn etter demografiske, geografiske, psykografiske og atferdsbaserte kriterier
- **Forbrukerkultur** gjør at vi bruker forbruk til å uttrykke identitet og tilhørighet
- Digital teknologi gjør det mulig å lage **svært presise målgrupper** basert på data

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Målgruppe | Gruppen mennesker en avsender ønsker å nå |
| Segmentering | Å dele markedet i grupper med like kjennetegn |
| Psykografisk | Segmentering basert på livsstil, verdier og holdninger |
| Forbrukerkultur | Samfunn der forbruk er sentralt for identitet |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Målgruppe', definition: 'Gruppen mennesker en avsender ønsker å nå med sitt budskap' },
    { term: 'Segmentering', definition: 'Å dele markedet inn i mindre, homogene grupper basert på felles kjennetegn' },
    { term: 'Demografisk segmentering', definition: 'Segmentering basert på alder, kjønn, inntekt, utdanning og familiesituasjon' },
    { term: 'Psykografisk segmentering', definition: 'Segmentering basert på livsstil, verdier, holdninger og personlighet' },
    { term: 'Forbrukerkultur', definition: 'Samfunn der kjøp og forbruk av varer er sentralt for identitet og livsstil' },
  ],
};

// ============================================================================
// Kapittel 5.3: Merkevarebygging
// ============================================================================

export const CHAPTER_MEDIEINFO_1_5_3: TextbookChapter = {
  id: 'medieinfo-1-5-3',
  courseId: 'medieinfo-1',
  chapterNumber: '5.3',
  title: 'Merkevarebygging',
  description: 'En innføring i merkeverdi, merkevareidentitet og posisjonering. Du lærer hva som gjør en merkevare sterk og hvordan bedrifter bygger og vedlikeholder merkevarer over tid.',
  estimatedMinutes: 22,
  competenceGoals: ['analysere reklame og markedsføring i ulike medier og drøfte virkemidler og påvirkningsstrategier'],
  content: [
    {
      id: 'mi-5-3-intro',
      type: 'text',
      content: `## Mer enn bare et navn

Hvorfor betaler noen tre ganger så mye for en Nike-sko som for en tilsvarende sko uten logo? Svaret ligger i merkevarebygging. En sterk merkevare skaper tillit, gjenkjennelse og følelsesmessig tilknytning som går langt utover selve produktet.

I dette kapittelet skal du lære:
- Hva en merkevare er og hva som skaper merkeverdi
- De viktigste elementene i merkevareidentitet
- Hvordan posisjonering skiller en merkevare fra konkurrentene
- Eksempler på sterk og svak merkevarebygging`,
    },
    {
      id: 'mi-5-3-def-1',
      type: 'definition',
      title: 'Merkevare',
      content: `En **merkevare** (eng. brand) er mer enn et navn eller en logo. Det er summen av alle assosiasjoner, opplevelser og følelser som en forbruker knytter til et produkt, en tjeneste eller en bedrift. Merkevaren finnes i mottakerens bevissthet – det er det mentale bildet forbrukeren har.`,
    },
    {
      id: 'mi-5-3-text-1',
      type: 'text',
      content: `### Merkeverdi – hvorfor merkevarer er verdifulle

**Merkeverdi** (eng. brand equity) er den ekstra verdien en merkevare tilfører et produkt utover selve produktets fysiske egenskaper. Merkeverdi bygges opp over tid gjennom:

**Merkekjennskap:**
- Forbrukere kjenner igjen merkevaren
- «Top of mind» – merket dukker opp først når du tenker på en produktkategori
- Eksempel: Tenker du «cola», tenker de fleste Coca-Cola

**Merkeassosiasjoner:**
- Hvilke tanker og følelser knyttes til merket?
- Positive assosiasjoner: kvalitet, innovasjon, miljøbevissthet, moro
- Negative assosiasjoner kan være vanskelige å kvitte seg med

**Opplevd kvalitet:**
- Forbrukerens subjektive vurdering av produktets kvalitet
- Behøver ikke samsvare med objektiv kvalitet
- Påvirkes sterkt av merkevarebygging

**Merkelojalitet:**
- Kunder som velger samme merke gang etter gang
- De mest lojale kundene er villige til å betale mer
- Lojale kunder anbefaler merket til andre`,
    },
    {
      id: 'mi-5-3-def-2',
      type: 'definition',
      title: 'Merkevareidentitet',
      content: `**Merkevareidentitet** er det bildet bedriften bevisst forsøker å skape av merkevaren. Den består av visuelle elementer (logo, farger, typografi), verbal identitet (tone of voice, slagord), verdier og personlighet. Merkevareidentiteten er avsenderens intensjon – mens merkevarens image er det mottakeren faktisk oppfatter.`,
    },
    {
      id: 'mi-5-3-text-2',
      type: 'text',
      content: `### Elementene i merkevareidentitet

**Visuell identitet:**
- Logo og symboler (Apples eple, Nikes swoosh)
- Fargepalett (Coca-Cola-rødt, Starbucks-grønt)
- Typografi og designstil
- Emballasje og produktdesign

**Verbal identitet:**
- Merkevarenavn og slagord
- Tone of voice: Hvordan merket «snakker» (formelt, lekent, inspirerende)
- Nøkkelbudskap og historier

**Verdier og personlighet:**
- Hva står merkevaren for? (bærekraft, innovasjon, tradisjon)
- Hvis merket var en person – hvem ville det vært?
- Patagonia = «miljøbevisst eventyr», Apple = «kreativ innovatør»

**Opplevelser:**
- Kundeservice og kjøpsopplevelse
- Butikkdesign og nettside
- Unboxing og førstegangsmøte med produktet`,
    },
    {
      id: 'mi-5-3-example-1',
      type: 'example',
      title: 'Posisjonering: Pepsi vs. Coca-Cola',
      problem: 'Hvordan har Pepsi forsøkt å posisjonere seg forskjellig fra Coca-Cola?',
      solution: `**Coca-Cola** har posisjonert seg rundt nostalgi, tradisjon og fellesskap. Slagordet «Taste the Feeling» knytter merket til gode øyeblikk og samvær. Julemannen, isbjørner og familiescener er sentrale elementer.

**Pepsi** har bevisst posisjonert seg som det unge, friske alternativet. «The Choice of a New Generation» var et historisk slagord. Pepsi har brukt popkultur-ikoner som Michael Jackson, Beyoncé og moderne influensere.

**Posisjoneringsforskjellen:**
- Coca-Cola = tradisjon, autentisitet, «den originale»
- Pepsi = ungdom, energi, utfordrer-rollen

Dette viser at to tilnærmet like produkter kan oppleves som helt forskjellige gjennom bevisst posisjonering. Posisjonering handler om å erobre en tydelig plass i forbrukerens bevissthet.`,
    },
    {
      id: 'mi-5-3-tip-1',
      type: 'tip',
      title: 'Konsistens er nøkkelen',
      content: `De sterkeste merkevarene er konsistente over tid. Alle kontaktpunkter – fra reklame til kundeservice, fra emballasje til sosiale medier – kommuniserer det samme. Når merkevareidentiteten spriker, mister forbrukeren tillit.`,
    },
    {
      id: 'mi-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi-5-3-ex-1',
        number: '5.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er merkeverdi (brand equity)?',
        options: [
          { id: 'a', text: 'Prisen på produktet i butikken', isCorrect: false },
          { id: 'b', text: 'Den ekstra verdien en merkevare tilfører et produkt utover fysiske egenskaper', isCorrect: true },
          { id: 'c', text: 'Aksjekursen til selskapet som eier merkevaren', isCorrect: false },
          { id: 'd', text: 'Produksjonskostnadene for merkevaren', isCorrect: false },
        ],
        solution: 'Merkeverdi er den ekstra verdien merkevaren tilfører utover produktets fysiske egenskaper. Det er grunnen til at kunder er villige til å betale mer for et merkeprodukt enn et tilsvarende produkt uten kjent merke.',
      },
    },
    {
      id: 'mi-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi-5-3-ex-2',
        number: '5.3.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg en merkevare du kjenner godt. Beskriv merkevareidentiteten ved å gjøre rede for: a) visuell identitet, b) verbal identitet og tone of voice, c) verdier og personlighet.',
        hints: ['Tenk på logo, farger, slagord, og hva merket «står for»'],
        solution: 'Eksempel med Apple: a) Visuell identitet: Minimalistisk eple-logo, ren hvit/grå designstil, mye luft og enkle linjer. b) Verbal identitet: «Think Different» som historisk slagord, enkel og inspirerende tone, korte setninger. c) Verdier: Innovasjon, kreativitet, enkelhet og kvalitet. Personlighet: En kreativ, fremtidsrettet person som setter design og brukeropplevelse i sentrum.',
      },
    },
    {
      id: 'mi-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi-5-3-ex-3',
        number: '5.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom merkevareidentitet og merkevarens image. Hvorfor er det ikke alltid samsvar mellom disse to?',
        solution: 'Merkevareidentitet er det bildet bedriften bevisst forsøker å skape – avsenderens intensjon. Merkevarens image er det mottakeren faktisk oppfatter og assosierer med merket. Disse kan avvike fordi forbrukere tolker budskap forskjellig, har egne erfaringer med merket, påvirkes av andres meninger eller medieoppslag, og fordi bedriften ikke alltid lykkes med å kommunisere identiteten konsistent.',
      },
    },
    {
      id: 'mi-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi-5-3-ex-4',
        number: '5.3.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg to konkurrerende merkevarer (f.eks. Adidas og Nike, Samsung og Apple, eller Rema og Meny). Analyser hvordan de har posisjonert seg forskjellig fra hverandre. Hva er de viktigste forskjellene i posisjonering?',
        solution: 'Eksempel med Nike og Adidas: Nike posisjonerer seg rundt individuell prestasjon, «Just Do It»-mentaliteten og eliteidrett med toppatleter. Adidas posisjonerer seg mer rundt kreativitet, gatekultur og mangfold med «Impossible Is Nothing». Nike vektlegger innovasjon og personlig overskridelse, mens Adidas kobler sport og mote tettere sammen. Begge selger sportsklær, men appellerer til ulike sider av kundens identitet.',
      },
    },
    {
      id: 'mi-5-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi-5-3-ex-5',
        number: '5.3.5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva inngår IKKE som en del av en merkevares visuelle identitet?',
        options: [
          { id: 'a', text: 'Logo og symboler', isCorrect: false },
          { id: 'b', text: 'Fargepalett', isCorrect: false },
          { id: 'c', text: 'Tone of voice', isCorrect: true },
          { id: 'd', text: 'Emballasjedesign', isCorrect: false },
        ],
        solution: 'Tone of voice er en del av den verbale identiteten, ikke den visuelle. Logo, farger og emballasje er alle visuelle elementer.',
      },
    },
    {
      id: 'mi-5-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- En **merkevare** er summen av assosiasjoner, opplevelser og følelser forbrukeren knytter til et produkt
- **Merkeverdi** bygges gjennom kjennskap, assosiasjoner, opplevd kvalitet og lojalitet
- **Merkevareidentitet** er avsenderens bevisste bilde, mens **image** er mottakerens oppfatning
- **Posisjonering** handler om å erobre en tydelig plass i forbrukerens bevissthet

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Merkevare | Summen av assosiasjoner og følelser knyttet til et produkt |
| Merkeverdi | Den ekstra verdien merkevaren tilfører utover produktets egenskaper |
| Merkevareidentitet | Bedriftens bevisste bilde av merkevaren |
| Posisjonering | Å erobre en tydelig plass i forbrukerens bevissthet |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Merkevare', definition: 'Summen av assosiasjoner, opplevelser og følelser forbrukeren knytter til et produkt eller en bedrift' },
    { term: 'Merkeverdi', definition: 'Den ekstra verdien en merkevare tilfører et produkt utover fysiske egenskaper' },
    { term: 'Merkevareidentitet', definition: 'Bedriftens bevisste bilde av merkevaren gjennom visuelle, verbale og verdimessige elementer' },
    { term: 'Posisjonering', definition: 'Å erobre en tydelig og differensiert plass i forbrukerens bevissthet' },
    { term: 'Merkelojalitet', definition: 'At kunder velger samme merke gjentatte ganger og er villige til å betale mer for det' },
  ],
};

// ============================================================================
// Kapittel 5.4: Digital markedsføring
// ============================================================================

export const CHAPTER_MEDIEINFO_1_5_4: TextbookChapter = {
  id: 'medieinfo-1-5-4',
  courseId: 'medieinfo-1',
  chapterNumber: '5.4',
  title: 'Digital markedsføring',
  description: 'En gjennomgang av innholdsmarkedsføring, influensermarkedsføring, sosiale medier-annonsering og søkemotoroptimalisering. Du lærer hvordan bedrifter bruker digitale kanaler for å nå målgrupper.',
  estimatedMinutes: 24,
  competenceGoals: [
    'gjøre rede for hvordan sosiale medier brukes til markedsføring og påvirkning',
    'analysere reklame og markedsføring i ulike medier og drøfte virkemidler og påvirkningsstrategier',
  ],
  content: [
    {
      id: 'mi-5-4-intro',
      type: 'text',
      content: `## Markedsføring i en digital verden

Digitaliseringen har snudd markedsføringsverdenen på hodet. I dag bruker nordmenn i gjennomsnitt flere timer daglig på digitale medier, og annonsørene følger etter. Digital markedsføring tilbyr noe tradisjonell reklame aldri kunne: muligheten til å måle alt, personalisere budskap og nå nøyaktig de rette menneskene.

I dette kapittelet skal du lære:
- Hva innholdsmarkedsføring er og hvordan det fungerer
- Influensernes rolle i moderne markedsføring
- Hvordan annonsering i sosiale medier fungerer
- Grunnleggende prinsipper for søkemotoroptimalisering (SEO)`,
    },
    {
      id: 'mi-5-4-def-1',
      type: 'definition',
      title: 'Innholdsmarkedsføring',
      content: `**Innholdsmarkedsføring** (eng. content marketing) er en strategisk tilnærming der man skaper og distribuerer verdifullt, relevant og konsistent innhold for å tiltrekke og beholde en definert målgruppe – og til syvende og sist drive lønnsom kundeadferd. I stedet for å «pushe» et salgsbudskap, tilbyr man innhold som mottakeren faktisk ønsker å konsumere.`,
    },
    {
      id: 'mi-5-4-text-1',
      type: 'text',
      content: `### Innholdsmarkedsføring i praksis

I stedet for å si «kjøp produktet vårt», lager man innhold som målgruppen har nytte av:

**Typiske formater:**
- Blogginnlegg og artikler
- Videoer og podkaster
- Infografikk og guider
- Nyhetsbrev og e-bøker
- Quizzer og interaktivt innhold

**Eksempler:**
- En hudpleiebutikk som publiserer artikler om hudpleierutiner
- En bank som lager videoer om privatøkonomi for unge
- En treningskjede som deler treningsopplegg på Instagram

Nøkkelen er at innholdet gir verdi til mottakeren og bygger tillit over tid. Når mottakeren en dag trenger produktet, er det denne avsenderen de husker og stoler på.`,
    },
    {
      id: 'mi-5-4-def-2',
      type: 'definition',
      title: 'Influensermarkedsføring',
      content: `**Influensermarkedsføring** er en form for markedsføring der bedrifter samarbeider med personer som har stor innflytelse i sosiale medier (influensere) for å promotere produkter eller tjenester. Influenseren fungerer som et troverdig mellomledd mellom merkevaren og målgruppen, fordi følgerne opplever anbefalingen som mer personlig enn tradisjonell reklame.`,
    },
    {
      id: 'mi-5-4-text-2',
      type: 'text',
      content: `### Influensere – typer og roller

**Mega-influensere** (1 million+ følgere):
- Kjendiser og store profiler
- Bred rekkevidde, men lavere engasjement per følger
- Dyre samarbeid

**Makro-influensere** (100 000–1 million følgere):
- Etablerte innholdsskapere med spesialisert niche
- God balanse mellom rekkevidde og engasjement

**Mikro-influensere** (10 000–100 000 følgere):
- Høyt engasjement og nær relasjon til følgere
- Oppfattes som mer autentiske og troverdige
- Ofte mest kostnadseffektive

**Nano-influensere** (1 000–10 000 følgere):
- Svært tett fellesskap og høy troverdighet
- Egnet for nisjemarkeder og lokale kampanjer

### Sosiale medier-annonsering

Plattformene tilbyr avanserte annonsesystemer:
- **Meta (Facebook/Instagram):** Detaljert målretting basert på demografi, interesser og atferd
- **TikTok Ads:** Korte videoformater med algoritmebasert distribusjon
- **Snapchat Ads:** Filtre, linser og vertikale videoannonser
- **YouTube Ads:** Pre-roll, mid-roll og bumper-annonser

Felles for alle er at annonsøren kan definere målgruppen svært presist og betale per visning, klikk eller handling.`,
    },
    {
      id: 'mi-5-4-example-1',
      type: 'example',
      title: 'SEO i praksis: Å bli funnet på Google',
      problem: 'Hvordan kan en lokal restaurant bruke SEO for å tiltrekke flere kunder?',
      solution: `**Søkemotoroptimalisering (SEO)** handler om å gjøre nettsiden din synlig når folk søker etter relevante ting.

**Restaurantens SEO-strategi:**
1. **Nøkkelord:** Identifisere hva folk søker etter – «beste restaurant Oslo», «italiensk restaurant Grünerløkka», «lunsj sentrum»
2. **Nettside-innhold:** Skrive tekster med relevante nøkkelord, tydelig meny, åpningstider og adresse
3. **Google My Business:** Opprette profil med bilder, anmeldelser og kart
4. **Teknisk SEO:** Rask nettside, mobilvenlig design, sikker tilkobling (HTTPS)
5. **Anmeldelser:** Oppfordre fornøyde gjester til å legge igjen anmeldelser på Google
6. **Lokalt innhold:** Blogginnlegg om «beste lunsjsteder på Grünerløkka» eller lignende

**Resultatet:** Når noen i nærheten søker «god lunsj», dukker restauranten opp høyt i søkeresultatene – helt gratis, uten å betale for annonsering.`,
    },
    {
      id: 'mi-5-4-note-1',
      type: 'note',
      title: 'Forskjellen mellom SEO og SEM',
      content: `**SEO** (Search Engine Optimization) er organisk synlighet – du betaler ikke per klikk, men jobber med å optimalisere nettsiden. **SEM** (Search Engine Marketing) inkluderer også betalt annonsering i søkemotorer (f.eks. Google Ads), der du betaler hver gang noen klikker på annonsen din. Begge handler om å bli synlig når folk søker.`,
    },
    {
      id: 'mi-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi-5-4-ex-1',
        number: '5.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kjennetegner innholdsmarkedsføring?',
        options: [
          { id: 'a', text: 'Man betaler for annonser i avisen', isCorrect: false },
          { id: 'b', text: 'Man lager verdifullt innhold som målgruppen ønsker å konsumere', isCorrect: true },
          { id: 'c', text: 'Man sender uoppfordret e-post til potensielle kunder', isCorrect: false },
          { id: 'd', text: 'Man kjøper følgere i sosiale medier', isCorrect: false },
        ],
        solution: 'Innholdsmarkedsføring handler om å skape verdifullt, relevant innhold som målgruppen frivillig konsumerer. I stedet for å pushe salgsbudskap, bygger man tillit over tid gjennom nyttig innhold.',
      },
    },
    {
      id: 'mi-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi-5-4-ex-2',
        number: '5.4.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvorfor mikro-influensere ofte gir bedre resultater enn mega-influensere for merkevarer. Gi minst to argumenter.',
        hints: ['Tenk på engasjement, troverdighet og pris'],
        solution: '1) Mikro-influensere har høyere engasjement – følgerne interagerer mer fordi de føler en tettere relasjon. 2) De oppfattes som mer autentiske og troverdige – anbefalingene virker som genuine tips, ikke betalt reklame. 3) De er mer kostnadseffektive – merkevaren kan samarbeide med mange mikro-influensere for prisen av én mega-influenser. 4) Følgerne har ofte spesifikke interesser som matcher merkevarens målgruppe bedre.',
      },
    },
    {
      id: 'mi-5-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi-5-4-ex-3',
        number: '5.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du driver en nettbutikk som selger bærekraftige klær. Lag en digital markedsføringsstrategi som inkluderer minst tre ulike kanaler eller metoder fra dette kapittelet.',
        solution: '1) Innholdsmarkedsføring: Blogg med artikler om bærekraftig mote, guider for å ta vare på klær og informasjon om materialvalg. 2) Influensermarkedsføring: Samarbeid med mikro-influensere innen bærekraft og mote som deler verdiene til merkevaren. 3) SEO: Optimalisere nettsiden for søkeord som «bærekraftige klær», «økologisk mote» og «etisk produksjon». 4) Instagram-annonsering: Målrettet mot miljøbevisste unge voksne med interesse for mote. 5) Nyhetsbrev: Dele nye kolleksjoner, bak-kulissene-innhold og bærekraftstips.',
      },
    },
    {
      id: 'mi-5-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi-5-4-ex-4',
        number: '5.4.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva står SEO for?',
        options: [
          { id: 'a', text: 'Social Engagement Optimization', isCorrect: false },
          { id: 'b', text: 'Search Engine Optimization', isCorrect: true },
          { id: 'c', text: 'Sales and E-commerce Operations', isCorrect: false },
          { id: 'd', text: 'Strategic Electronic Outreach', isCorrect: false },
        ],
        solution: 'SEO står for Search Engine Optimization, altså søkemotoroptimalisering. Det handler om å gjøre en nettside mer synlig i organiske søkeresultater uten å betale for annonsering.',
      },
    },
    {
      id: 'mi-5-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi-5-4-ex-5',
        number: '5.4.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft følgende påstand: «Influensermarkedsføring er mer effektiv enn tradisjonell reklame fordi folk stoler mer på personer enn på bedrifter.» Bruk argumenter for og mot.',
        hints: ['Tenk på troverdighet, interessekonflikter og rekkevidde'],
        solution: 'For: Influensere oppfattes som mer autentiske, mottakere har et personlig forhold til dem, anbefalinger virker som tips fra en venn, og engasjementet er ofte høyere. Mot: Mange gjennomskuer betalte samarbeid og mister tillit, noen influensere anbefaler produkter de ikke bruker selv, det kan mangle kvalitetskontroll, og tradisjonell reklame kan ha større rekkevidde og mer kontrollert budskap. Konklusjon: Effektiviteten avhenger av kontekst – influensermarkedsføring er mest effektiv når samarbeidet er genuint og følgerne opplever det som troverdig.',
      },
    },
    {
      id: 'mi-5-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mi-5-4-ex-6',
        number: '5.4.6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken type influenser har typisk høyest engasjementsrate?',
        options: [
          { id: 'a', text: 'Mega-influensere (1 million+ følgere)', isCorrect: false },
          { id: 'b', text: 'Makro-influensere (100 000–1 million følgere)', isCorrect: false },
          { id: 'c', text: 'Mikro-influensere (10 000–100 000 følgere)', isCorrect: false },
          { id: 'd', text: 'Nano-influensere (1 000–10 000 følgere)', isCorrect: true },
        ],
        solution: 'Nano-influensere har typisk høyest engasjementsrate fordi de har et svært tett fellesskap der følgerne opplever en personlig relasjon. Jo færre følgere, desto høyere engasjement per følger.',
      },
    },
    {
      id: 'mi-5-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Innholdsmarkedsføring** gir verdi til mottakeren i stedet for å pushe salgsbudskap
- **Influensermarkedsføring** bruker troverdige personer som mellomledd mellom merke og målgruppe
- **Sosiale medier-annonsering** tilbyr presis målretting basert på data og algoritmer
- **SEO** handler om å bli synlig i organiske søkeresultater

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Innholdsmarkedsføring | Verdiskapende innhold som tiltrekker og beholder kunder |
| Influenser | Person med innflytelse i sosiale medier som samarbeider med merkevarer |
| SEO | Search Engine Optimization – søkemotoroptimalisering |
| SEM | Search Engine Marketing – betalt annonsering i søkemotorer |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Innholdsmarkedsføring', definition: 'Strategisk tilnærming der man lager verdifullt innhold for å tiltrekke og beholde en målgruppe' },
    { term: 'Influensermarkedsføring', definition: 'Markedsføring der bedrifter samarbeider med innflytelsesrike personer i sosiale medier' },
    { term: 'SEO', definition: 'Search Engine Optimization – å optimalisere nettsider for synlighet i søkemotorer' },
    { term: 'SEM', definition: 'Search Engine Marketing – betalt annonsering i søkemotorer' },
    { term: 'Mikro-influenser', definition: 'Influenser med 10 000–100 000 følgere, kjent for høyt engasjement og troverdighet' },
  ],
};

// ============================================================================
// Kapittel 5.5: Etikk i reklame
// ============================================================================

export const CHAPTER_MEDIEINFO_1_5_5: TextbookChapter = {
  id: 'medieinfo-1-5-5',
  courseId: 'medieinfo-1',
  chapterNumber: '5.5',
  title: 'Etikk i reklame',
  description: 'En gjennomgang av reklameetikk, skjult reklame, grønnvasking og markedsføringsloven. Du lærer å identifisere etiske problemstillinger i reklame og forstå lovverket som regulerer markedsføring.',
  estimatedMinutes: 22,
  competenceGoals: [
    'drøfte etiske problemstillinger knyttet til medieinnhold og markedsføring',
    'analysere reklame og markedsføring i ulike medier og drøfte virkemidler og påvirkningsstrategier',
  ],
  content: [
    {
      id: 'mi-5-5-intro',
      type: 'text',
      content: `## Grenser for påvirkning

Reklame skal selge – men betyr det at alt er lov? Reklame som lyver, manipulerer eller utnytter sårbare grupper, skader både forbrukere og tilliten til hele bransjen. Reklameetikk handler om å finne balansen mellom effektiv markedsføring og ansvarlig kommunikasjon.

I dette kapittelet skal du lære:
- Hva reklameetikk innebærer og hvorfor det er viktig
- Hva skjult reklame er og hvorfor det er problematisk
- Hva grønnvasking betyr og hvordan du avslører det
- Hovedtrekk i markedsføringsloven`,
    },
    {
      id: 'mi-5-5-def-1',
      type: 'definition',
      title: 'Reklameetikk',
      content: `**Reklameetikk** handler om moralske normer og prinsipper for hva som er akseptabel reklame. Det dreier seg om hva reklamen bør og ikke bør gjøre, uavhengig av hva loven tillater. Etiske vurderinger omfatter sannferdighet, respekt for mottakeren, unngåelse av diskriminering og ansvar for sårbare grupper som barn og unge.`,
    },
    {
      id: 'mi-5-5-text-1',
      type: 'text',
      content: `### Viktige etiske problemstillinger i reklame

**Sannferdighet og villeding:**
- Reklame skal ikke gi et uriktig bilde av produktet
- Overdrivelser er vanlig, men hvor går grensen?
- «Puffing» (uskyldig skryt) vs. villeding (usanne påstander)

**Urealistiske kroppsidealer:**
- Retusjerte bilder og uoppnåelige skjønnhetsidealer
- Norge har en egen retusjeringslov som krever merking av retusjert reklame
- Påvirkning på selvbilde og psykisk helse, særlig blant unge

**Målretting mot barn og unge:**
- Barn mangler evnen til å gjennomskue reklame
- Strengere regler for markedsføring rettet mot barn under 18 år
- Bekymring for datadrevet målretting mot mindreårige

**Stereotypier og diskriminering:**
- Reklame kan forsterke fordommer om kjønn, etnisitet og alder
- Bransjen har blitt mer bevisst, men stereotypier forekommer fortsatt`,
    },
    {
      id: 'mi-5-5-def-2',
      type: 'definition',
      title: 'Skjult reklame',
      content: `**Skjult reklame** (også kalt «native advertising» eller «sponnet innhold» når det ikke er tydelig merket) er markedsføring som er utformet slik at den ligner redaksjonelt innhold eller personlige anbefalinger. Det er problematisk fordi mottakeren ikke forstår at det er reklame, og dermed ikke setter opp det kritiske filteret vi vanligvis har mot påvirkning.`,
    },
    {
      id: 'mi-5-5-text-2',
      type: 'text',
      content: `### Skjult reklame i ulike former

**I sosiale medier:**
- Influensere som anbefaler produkter uten å opplyse om betalt samarbeid
- Produktplassering i bilder og videoer
- Virale kampanjer som ikke identifiseres som reklame

**I nettaviser:**
- Sponset innhold som ligner journalistiske artikler
- Native advertising med liten eller utydelig merking
- Annonser designet for å ligne redaksjonelt innhold

**I underholdning:**
- Produktplassering i filmer og TV-serier
- Merkevarer integrert i dataspill
- Sponsede innslag i podkaster

I Norge krever markedsføringsloven at reklame tydelig skal identifiseres som reklame. Forbrukertilsynet håndhever reglene, og brudd kan føre til advarsler og bøter.`,
    },
    {
      id: 'mi-5-5-example-1',
      type: 'example',
      title: 'Grønnvasking: Når bærekraft bare er fasade',
      problem: 'Hva er grønnvasking, og hvordan kan man avsløre det?',
      solution: `**Grønnvasking** (eng. greenwashing) er når en bedrift gir et misvisende inntrykk av å være mer miljøvennlig enn den faktisk er.

**Eksempler på grønnvasking:**
- Et flyselskap som reklamerer med at de planter trær, men ignorerer utslippene fra flyvningene
- En klesbedrift som lager en «bærekraftig» kolleksjon på 10 plagg, men fortsetter med fast fashion for resten av sortimentet
- Bruk av ord som «naturlig», «grønn» og «miljøvennlig» uten dokumentasjon

**Slik avslører du grønnvasking:**
1. **Vage påstander:** Ord som «bærekraftig» uten spesifikke tall eller mål
2. **Irrelevant informasjon:** Fremhever noe positivt som er lovpålagt eller ubetydelig
3. **Manglende dokumentasjon:** Ingen tredjeparts-sertifiseringer eller konkrete data
4. **Skjuler helheten:** Fokuserer på ett lite tiltak mens kjernevirksomheten er miljøskadelig
5. **Visuelle triks:** Grønne farger, naturbakgrunner og bladmotiver som gir et miljøvennlig inntrykk`,
    },
    {
      id: 'mi-5-5-text-3',
      type: 'text',
      content: `### Markedsføringsloven – de viktigste reglene

Markedsføringsloven regulerer markedsføring i Norge. Noen sentrale bestemmelser:

**Generelle krav:**
- Markedsføring skal ikke være villedende eller urimelig
- Reklame skal tydelig kunne identifiseres som reklame
- Sammenligningsreklame må være saklig og dokumenterbar

**Barn og unge:**
- Særlig vern mot markedsføringspåvirkning
- Forbud mot direkte kjøpsoppfordring rettet mot barn
- Strengere krav til reklame i barns medier

**Digitale regler:**
- Influensere må merke betalte samarbeid tydelig
- Retusjeringslov: Retusjert reklame må merkes
- E-postmarkedsføring krever samtykke

**Tilsyn og sanksjoner:**
- Forbrukertilsynet fører tilsyn med markedsføring
- Markedsrådet kan fatte bindende vedtak
- Brudd kan føre til tvangsmulkt og erstatningsansvar`,
    },
    {
      id: 'mi-5-5-warning-1',
      type: 'warning',
      title: 'Retusjeringsloven',
      content: `Siden 2022 har Norge hatt en retusjeringslov som krever at annonsører merker reklame der kroppen til en person er retusjert. Merkingen skal gjøre det tydelig at bildet er endret, slik at mottakerne er klar over at det de ser ikke er virkelig. Loven gjelder all kommersiell markedsføring, inkludert innlegg fra influensere.`,
    },
    {
      id: 'mi-5-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi-5-5-ex-1',
        number: '5.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er grønnvasking?',
        options: [
          { id: 'a', text: 'Å vaske produkter med miljøvennlige midler', isCorrect: false },
          { id: 'b', text: 'Å gi et misvisende inntrykk av å være mer miljøvennlig enn man er', isCorrect: true },
          { id: 'c', text: 'Å donere penger til miljøorganisasjoner', isCorrect: false },
          { id: 'd', text: 'Å bruke resirkulert emballasje', isCorrect: false },
        ],
        solution: 'Grønnvasking (greenwashing) er når en bedrift gir et misvisende inntrykk av å være mer miljøvennlig enn den faktisk er. Det kan skje gjennom vage påstander, visuelt design som gir miljøinntrykk, eller fokus på ubetydelige tiltak.',
      },
    },
    {
      id: 'mi-5-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi-5-5-ex-2',
        number: '5.5.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvorfor skjult reklame er problematisk. Gi to eksempler på skjult reklame du kan møte i hverdagen.',
        hints: ['Tenk på forskjellen mellom redaksjonelt innhold og reklame'],
        solution: 'Skjult reklame er problematisk fordi mottakeren ikke forstår at det er reklame, og dermed ikke er kritisk til budskapet. Det bryter med prinsippet om at forbrukere skal kunne skille mellom redaksjonelt innhold og kommersielt innhold. Eksempler: 1) En influenser som viser frem et produkt på Instagram uten å merke det som betalt samarbeid. 2) En artikkel i en nettavis om «de beste vinterjakkene» som egentlig er sponset av en klesbutikk, med svært liten merking.',
      },
    },
    {
      id: 'mi-5-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi-5-5-ex-3',
        number: '5.5.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva krever den norske retusjeringsloven?',
        options: [
          { id: 'a', text: 'At all retusjering av bilder er forbudt', isCorrect: false },
          { id: 'b', text: 'At reklame med retusjert kropp må merkes tydelig', isCorrect: true },
          { id: 'c', text: 'At bare profesjonelle fotografer kan retusjere bilder', isCorrect: false },
          { id: 'd', text: 'At retusjerte bilder bare kan brukes i trykte medier', isCorrect: false },
        ],
        solution: 'Retusjeringsloven krever at reklame der kroppen til en person er retusjert, tydelig merkes. Loven forbyr ikke retusjering, men krever at mottakerne informeres om at bildet er endret.',
      },
    },
    {
      id: 'mi-5-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi-5-5-ex-4',
        number: '5.5.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn eller beskriv en reklame som du mener kan være grønnvasking. Forklar hvorfor du mener det er grønnvasking, og bruk minst to av kriteriene fra kapittelet.',
        solution: 'Eksempel: Et stort motehus reklamerer med at den nye kolleksjonen er «laget med omtanke for planeten» og bruker emballasje med grønne farger og bladmotiver. Hvorfor dette kan være grønnvasking: 1) Vage påstander – «omtanke for planeten» sier ingenting konkret om hva de faktisk gjør. 2) Visuell grønnvasking – natursymboler og grønt design skaper inntrykk av miljøvennlighet. 3) Skjuler helheten – kolleksjonen utgjør kanskje 5 % av sortimentet, mens resten er fast fashion produsert i lavkostland.',
      },
    },
    {
      id: 'mi-5-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi-5-5-ex-5',
        number: '5.5.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft om det bør være strengere regler for markedsføring i sosiale medier rettet mot ungdom. Presenter argumenter for og mot strengere regulering.',
        hints: ['Tenk på personvern, psykisk helse, ytringsfrihet og næringsinteresser'],
        solution: 'For strengere regler: Unge er spesielt sårbare for reklame og sosial sammenligning, algoritmer forsterker eksponering for kommersielt innhold, datadrevet målretting gjør det mulig å utnytte usikkerhet og behov, og sosiale medier kan påvirke psykisk helse negativt. Mot strengere regler: Vanskelig å håndheve globalt, kan begrense ungdoms tilgang til gratis tjenester, risiko for overregulering som hemmer innovasjon, og foreldre bør også ha ansvar. Et balansert svar anerkjenner begge sider og kan foreslå konkrete tiltak som bedre merking, aldersverifisering og obligatorisk medieopplæring i skolen.',
      },
    },
    {
      id: 'mi-5-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mi-5-5-ex-6',
        number: '5.5.6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvem fører tilsyn med at markedsføringsloven følges i Norge?',
        options: [
          { id: 'a', text: 'Politiet', isCorrect: false },
          { id: 'b', text: 'Datatilsynet', isCorrect: false },
          { id: 'c', text: 'Forbrukertilsynet', isCorrect: true },
          { id: 'd', text: 'Stortinget', isCorrect: false },
        ],
        solution: 'Forbrukertilsynet fører tilsyn med at markedsføringsloven følges. De kan gi advarsler, fatte vedtak og ilegge tvangsmulkt ved brudd på loven.',
      },
    },
    {
      id: 'mi-5-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Reklameetikk** dreier seg om moralske prinsipper for ansvarlig markedsføring
- **Skjult reklame** er problematisk fordi mottakeren ikke vet at det er reklame
- **Grønnvasking** gir et falskt inntrykk av miljøvennlighet
- **Markedsføringsloven** og **retusjeringsloven** regulerer reklame i Norge

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Reklameetikk | Moralske normer og prinsipper for akseptabel reklame |
| Skjult reklame | Reklame utformet slik at den ligner redaksjonelt innhold |
| Grønnvasking | Å gi et misvisende inntrykk av miljøvennlighet |
| Markedsføringsloven | Norsk lov som regulerer markedsføring og reklame |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Reklameetikk', definition: 'Moralske normer og prinsipper for hva som er akseptabel reklame' },
    { term: 'Skjult reklame', definition: 'Markedsføring utformet slik at den ligner redaksjonelt innhold eller personlige anbefalinger' },
    { term: 'Grønnvasking', definition: 'Å gi et misvisende inntrykk av å være mer miljøvennlig enn man faktisk er' },
    { term: 'Markedsføringsloven', definition: 'Norsk lov som regulerer markedsføring med krav om sannferdighet og identifiserbarhet' },
    { term: 'Retusjeringsloven', definition: 'Norsk lov som krever merking av reklame der kropp er retusjert' },
  ],
};

// ============================================================================
// Eksport
// ============================================================================

export const MEDIEINFO_1_DEL5_CHAPTERS = [
  CHAPTER_MEDIEINFO_1_5_1,
  CHAPTER_MEDIEINFO_1_5_2,
  CHAPTER_MEDIEINFO_1_5_3,
  CHAPTER_MEDIEINFO_1_5_4,
  CHAPTER_MEDIEINFO_1_5_5,
];
