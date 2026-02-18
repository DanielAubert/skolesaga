/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Helsearbeiderfaget VG3 - Del 1: Profesjonalitet og etikk
 *
 * Kapittel 1.1-1.6
 * Dekker LK20 kompetansemål for helsearbeiderfaget VG3
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: Profesjonalitet og etikk
// ============================================================================

// ----------------------------------------------------------------------------
// 1.1 Profesjonell yrkesutøvelse
// ----------------------------------------------------------------------------

export const CHAPTER_HOV3_1_1: TextbookChapter = {
  id: 'hov3-1-1',
  courseId: 'helseoppvekst-vg3',
  chapterNumber: '1.1',
  title: 'Profesjonell yrkesutøvelse',
  description: 'Profesjonalitet, kompetanse og faglig skjønn i helse- og oppvekstfag.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utøve yrket profesjonelt og etisk forsvarlig',
    'reflektere over egen yrkesutøvelse og faglige utvikling',
    'anvende faglig skjønn i ulike situasjoner',
  ],
  keyTerms: [
    { term: 'Profesjonalitet', definition: 'Evnen til å utøve et yrke på en faglig forsvarlig måte basert på kunnskap, etikk og refleksjon.' },
    { term: 'Faglig skjønn', definition: 'Evnen til å vurdere og ta beslutninger i konkrete situasjoner ut fra fagkunnskap, erfaring og etisk bevissthet.' },
    { term: 'Handlingskompetanse', definition: 'Summen av kunnskaper, ferdigheter og holdninger som setter deg i stand til å handle profesjonelt.' },
    { term: 'Refleksiv praksis', definition: 'En systematisk tilnærming der yrkesutøveren reflekterer over egne handlinger for å forbedre praksis.' },
    { term: 'Kunnskapsbasert praksis', definition: 'Yrkesutøvelse som bygger på beste tilgjengelige forskning, erfaringskunnskap og brukermedvirkning.' },
  ],
  content: [
    {
      id: 'hov3-1-1-intro',
      type: 'text',
      content: `## Profesjonell yrkesutøvelse i helse- og oppvekstfag

Som helsefagarbeider er du en del av et profesjonelt fellesskap som bygger på felles verdier, kunnskap og standarder. Profesjonalitet handler ikke bare om hva du gjør, men også om hvordan du gjør det, og hvorfor.

Å være profesjonell innebærer at du:

- **Handler faglig forsvarlig** basert på oppdatert kunnskap og evidens
- **Tar ansvar** for egne beslutninger og handlinger
- **Utøver faglig skjønn** i situasjoner der standardprosedyrer ikke strekker til
- **Reflekterer systematisk** over egen praksis for å utvikle deg
- **Setter brukeren i sentrum** og tilpasser tjenestene individuelt
- **Samarbeider tverrfaglig** for å sikre helhetlige tjenester

Profesjonalitet er ikke noe du er ferdig utlært med etter endt utdanning. Det er en livslang prosess der du kontinuerlig utvikler din kompetanse gjennom teori, praksis og refleksjon.`,
    },
    {
      id: 'hov3-1-1-def-1',
      type: 'definition',
      title: 'Profesjonell kompetanse',
      content: `**Profesjonell kompetanse** er den samlede evnen til å utøve et yrke forsvarlig. Den består av fire hovedområder:

**1. Fagkompetanse** - teoretisk kunnskap og praktiske ferdigheter innen faget
**2. Sosial kompetanse** - evnen til å samhandle med brukere, pårørende og kolleger
**3. Selvkompetanse** - selvinnsikt, evne til selvregulering og personlig utvikling
**4. Etisk kompetanse** - evnen til å gjenkjenne og håndtere etiske utfordringer

Alle fire områdene er nødvendige for en helhetlig profesjonell yrkesutøvelse.`,
    },
    {
      id: 'hov3-1-1-def-2',
      type: 'definition',
      title: 'Faglig skjønn',
      content: `**Faglig skjønn** er evnen til å vurdere og ta beslutninger i konkrete situasjoner ut fra fagkunnskap, erfaring og etisk bevissthet.

Faglig skjønn er nødvendig fordi:
- Ingen situasjon er helt lik en annen
- Prosedyrer og retningslinjer kan ikke dekke alle tenkelige situasjoner
- Brukere har individuelle behov som krever tilpasning
- Noen ganger står ulike hensyn mot hverandre

Godt faglig skjønn bygger på:
- Solid fagkunnskap
- Erfaring fra lignende situasjoner
- Evne til å se helhet og sammenhenger
- Etisk refleksjon
- Kjennskap til brukerens ønsker og behov`,
    },
    {
      id: 'hov3-1-1-example-1',
      type: 'example',
      title: 'Faglig skjønn i praksis',
      problem: 'En eldre beboer på sykehjem ønsker å gå tur i hagen, men det er glatt ute. Prosedyren sier at beboere med fallrisiko ikke skal gå ut ved glatt føre. Beboeren er tydelig nedstemt og sier at frisk luft er det eneste som hjelper.',
      solution: `**Profesjonell vurdering med faglig skjønn:**

1. **Vurder risikoen:** Hvor glatt er det? Er det strødd? Hva er beboerens reelle fallrisiko?
2. **Vurder nytten:** Beboeren er nedstemt, og frisk luft kan ha stor betydning for livskvaliteten
3. **Finn kompromiss:** Kan du følge beboeren tett? Kan dere gå på strødde stier? Kan beboeren bruke rullator med brodder?
4. **Involver beboeren:** Informer om risiko og la beboeren medvirke i beslutningen
5. **Dokumenter:** Skriv ned vurderingen, tiltaket og beboerens samtykke
6. **Konsulter ved tvil:** Snakk med sykepleier hvis du er usikker

Her veier du hensynet til sikkerhet opp mot hensynet til selvbestemmelse og livskvalitet. Det er faglig skjønn i praksis.`,
    },
    {
      id: 'hov3-1-1-def-3',
      type: 'definition',
      title: 'Kunnskapsbasert praksis',
      content: `**Kunnskapsbasert praksis** (KBP) betyr at yrkesutøvelsen bygger på tre kunnskapskilder:

**1. Forskningsbasert kunnskap** - den beste tilgjengelige forskningen på området
**2. Erfaringsbasert kunnskap** - fagpersonens kliniske erfaring og kompetanse
**3. Brukerkunnskap** - brukerens egne erfaringer, ønsker og verdier

Alle tre kildene er nødvendige. Forskning alene er ikke nok fordi den ikke tar hensyn til den enkelte brukers situasjon. Erfaring alene kan føre til at utdaterte metoder opprettholdes. Brukerens ønsker alene kan gå på bekostning av faglig forsvarlighet.

Kunnskapsbasert praksis handler om å integrere alle tre kildene til den beste mulige beslutningen i den konkrete situasjonen.`,
    },
    {
      id: 'hov3-1-1-example-2',
      type: 'example',
      title: 'Kunnskapsbasert praksis i hverdagen',
      problem: 'Du jobber i hjemmetjenesten og skal hjelpe en bruker med sårstell. Du har alltid brukt en bestemt type bandasje, men kollegaen din forteller at forskning viser at en annen type gir raskere tilheling.',
      solution: `**Slik anvender du kunnskapsbasert praksis:**

1. **Forskningsbasert kunnskap:** Les deg opp på den nye forskningen. Er studien pålitelig? Gjelder funnene for denne typen sår?
2. **Erfaringsbasert kunnskap:** Hva er dine erfaringer med de ulike bandasjetypene? Hva sier sykepleier og lege?
3. **Brukerkunnskap:** Hvordan opplever brukeren de ulike bandasjene? Er det noe brukeren foretrekker?
4. **Beslutning:** Diskuter med sykepleier. Prøv den nye bandasjen hvis det er faglig forsvarlig og brukeren samtykker
5. **Evaluering:** Vurder effekten og juster behandlingen ved behov

Du viser profesjonalitet ved å holde deg oppdatert og ikke bare gjøre ting «slik vi alltid har gjort det».`,
    },
    {
      id: 'hov3-1-1-def-4',
      type: 'definition',
      title: 'Refleksiv praksis',
      content: `**Refleksiv praksis** er en systematisk tilnærming der du stopper opp og tenker gjennom erfaringer for å lære og forbedre deg.

Donald Schön skiller mellom:
- **Refleksjon-i-handling:** Å tenke mens du handler, justere tilnærmingen underveis
- **Refleksjon-over-handling:** Å tenke tilbake på det som skjedde etterpå

SMUL-modellen for refleksjon:
- **S**ituasjon: Hva skjedde?
- **M**estring: Hva mestret jeg godt?
- **U**tfordring: Hva var vanskelig?
- **L**æring: Hva tar jeg med meg videre?`,
    },
    {
      id: 'hov3-1-1-example-3',
      type: 'example',
      title: 'Refleksjon etter en utfordrende situasjon',
      problem: 'Du har hatt en vanskelig samtale med en pårørende som var sint og frustrert over tjenestene. Du følte deg usikker og klarte ikke å svare godt nok.',
      solution: `**Refleksjon med SMUL-modellen:**

**Situasjon:** Pårørende til beboer på avdeling 2 var opprørt over at moren hadde fått feil klær. Pårørende hevet stemmen og anklaget oss for å ikke bry oss.

**Mestring:** Jeg beholdt roen, lyttet uten å avbryte, og anerkjente frustrasjonen. Jeg beklaget hendelsen og lovet å undersøke saken.

**Utfordring:** Jeg klarte ikke å forklare godt nok hvorfor slike feil kan skje (underbemannet, mange beboere). Jeg ble redd for konflikten og lovet mer enn jeg kanskje burde.

**Læring:** Neste gang vil jeg:
- Lytte og anerkjenne, men også forklare rammene vi jobber under
- Ikke love mer enn jeg kan holde
- Tilby et oppfølgingsmøte der avdelingsleder deltar
- Melde avviket slik at vi kan forbedre klesmerkingssystemet`,
    },
    {
      id: 'hov3-1-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

Profesjonell yrkesutøvelse i helse- og oppvekstfag handler om å kombinere fagkunnskap, etisk bevissthet og personlig kompetanse:

- **Profesjonell kompetanse** består av fagkompetanse, sosial kompetanse, selvkompetanse og etisk kompetanse
- **Faglig skjønn** er evnen til å vurdere og beslutte i konkrete situasjoner der standardprosedyrer ikke er tilstrekkelige
- **Kunnskapsbasert praksis** bygger på forskning, erfaring og brukerkunnskap
- **Refleksiv praksis** sikrer kontinuerlig læring og faglig utvikling
- **Profesjonalitet** er en livslang utviklingsprosess, ikke et mål du når

Som helsefagarbeider har du et ansvar for å holde deg oppdatert, reflektere over praksis og alltid handle til det beste for brukeren.`,
    },
  ],
  exercises: [
    {
      id: 'hov3-1-1-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilke fire kompetanseområder utgjør profesjonell kompetanse?',
      options: [
        { id: 'a', text: 'Fagkompetanse, sosial kompetanse, selvkompetanse og etisk kompetanse', isCorrect: true },
        { id: 'b', text: 'Medisinsk kompetanse, teknisk kompetanse, digital kompetanse og språklig kompetanse', isCorrect: false },
        { id: 'c', text: 'Lederkompetanse, økonomisk kompetanse, juridisk kompetanse og digital kompetanse', isCorrect: false },
        { id: 'd', text: 'Teoretisk kompetanse, praktisk kompetanse, kreativ kompetanse og analytisk kompetanse', isCorrect: false },
      ],
      solution: 'Profesjonell kompetanse i helse- og oppvekstfag består av fagkompetanse (faglig kunnskap og ferdigheter), sosial kompetanse (samhandling med andre), selvkompetanse (selvinnsikt og selvregulering) og etisk kompetanse (håndtering av etiske utfordringer).',
    },
    {
      id: 'hov3-1-1-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva menes med faglig skjønn?',
      options: [
        { id: 'a', text: 'Evnen til å vurdere og ta beslutninger basert på fagkunnskap, erfaring og etisk bevissthet', isCorrect: true },
        { id: 'b', text: 'Evnen til å følge prosedyrer nøyaktig uten avvik', isCorrect: false },
        { id: 'c', text: 'Evnen til å ta raske beslutninger uten å tenke seg om', isCorrect: false },
        { id: 'd', text: 'Evnen til å delegere vanskelige beslutninger til andre', isCorrect: false },
      ],
      solution: 'Faglig skjønn innebærer å bruke fagkunnskap, erfaring og etisk refleksjon til å vurdere og beslutte i konkrete situasjoner, særlig når prosedyrer og retningslinjer ikke dekker alle nyanser.',
    },
    {
      id: 'hov3-1-1-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Kunnskapsbasert praksis bygger på tre kunnskapskilder. Hvilke?',
      options: [
        { id: 'a', text: 'Forskningsbasert kunnskap, erfaringsbasert kunnskap og brukerkunnskap', isCorrect: true },
        { id: 'b', text: 'Lærebøker, forelesninger og praksisveiledning', isCorrect: false },
        { id: 'c', text: 'Internett, sosiale medier og fagblader', isCorrect: false },
        { id: 'd', text: 'Lovverk, forskrifter og rundskriv', isCorrect: false },
      ],
      solution: 'Kunnskapsbasert praksis (KBP) integrerer forskningsbasert kunnskap (beste tilgjengelige forskning), erfaringsbasert kunnskap (fagpersonens erfaring) og brukerkunnskap (brukerens egne erfaringer og ønsker) for å ta gode beslutninger.',
    },
    {
      id: 'hov3-1-1-ex-4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv en situasjon der du som helsefagarbeider må bruke faglig skjønn, og forklar hvordan du ville vurdert situasjonen.',
      solution: 'Eksempel: En bruker med diabetes nekter å spise middag. Prosedyren sier at blodsukkeret må overvåkes og at brukeren skal ha regelmessige måltider. Faglig skjønn innebærer å: 1) Lytte til brukerens grunner - kanskje kvalm, smerter eller rett og slett ikke sulten. 2) Vurdere medisinsk risiko - når fikk brukeren sist insulin? Hva er blodsukkeret nå? 3) Finne alternativer - kan brukeren få noe lettere mat, frukt eller noe å drikke? 4) Respektere autonomi samtidig som du sikrer forsvarlig omsorg. 5) Dokumentere vurderingen og kontakte sykepleier ved behov.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-1-1-ex-5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Bruk SMUL-modellen til å reflektere over en virkelig eller tenkt situasjon fra helse- og oppvekstfag.',
      solution: 'En god refleksjon med SMUL-modellen bør inneholde: **Situasjon:** En konkret beskrivelse av hva som skjedde (hvem, hva, hvor, når). **Mestring:** Hva du mestret godt - for eksempel at du beholdt roen, fulgte prosedyrer, kommuniserte tydelig. **Utfordring:** Hva som var vanskelig - for eksempel usikkerhet, tidspress, kommunikasjonsproblemer. **Læring:** Hva du tar med deg - konkrete ting du vil gjøre annerledes neste gang, kunnskap du trenger å bygge opp, støtte du trenger å søke.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-1-1-ex-6',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva skiller refleksjon-i-handling fra refleksjon-over-handling ifølge Donald Schön?',
      options: [
        { id: 'a', text: 'Refleksjon-i-handling skjer mens du handler, refleksjon-over-handling skjer etterpå', isCorrect: true },
        { id: 'b', text: 'Refleksjon-i-handling er individuell, refleksjon-over-handling er i gruppe', isCorrect: false },
        { id: 'c', text: 'Refleksjon-i-handling handler om teori, refleksjon-over-handling handler om praksis', isCorrect: false },
        { id: 'd', text: 'Refleksjon-i-handling er for erfarne, refleksjon-over-handling er for studenter', isCorrect: false },
      ],
      solution: 'Donald Schön skiller mellom refleksjon-i-handling (å tenke og justere tilnærmingen mens man handler) og refleksjon-over-handling (å tenke tilbake på det som skjedde etter at situasjonen er over). Begge former for refleksjon er viktige for faglig utvikling.',
    },
  ],
};

// ----------------------------------------------------------------------------
// 1.2 Yrkesetikk og etiske dilemmaer
// ----------------------------------------------------------------------------

export const CHAPTER_HOV3_1_2: TextbookChapter = {
  id: 'hov3-1-2',
  courseId: 'helseoppvekst-vg3',
  chapterNumber: '1.2',
  title: 'Yrkesetikk og etiske dilemmaer',
  description: 'Etiske prinsipper, yrkesetikk og håndtering av etiske dilemmaer i helsetjenesten.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjøre rede for yrkesetiske retningslinjer og anvende dem i praksis',
    'identifisere og reflektere over etiske dilemmaer i yrkesutøvelsen',
    'anvende etiske prinsipper i konkrete situasjoner',
  ],
  keyTerms: [
    { term: 'Etikk', definition: 'Systematisk refleksjon over hva som er rett og galt, godt og ondt.' },
    { term: 'Yrkesetikk', definition: 'De moralske prinsippene og retningslinjene som styrer yrkesutøvelsen innenfor et fagfelt.' },
    { term: 'Etisk dilemma', definition: 'En situasjon der to eller flere etiske prinsipper eller hensyn står mot hverandre, og det ikke finnes noe åpenbart riktig svar.' },
    { term: 'Autonomi', definition: 'Retten til selvbestemmelse - brukerens rett til å ta egne valg om eget liv og helse.' },
    { term: 'Velgjørenhet', definition: 'Plikten til å handle til det beste for brukeren og fremme brukerens velferd.' },
    { term: 'Ikke-skade', definition: 'Plikten til å unngå å påføre brukeren skade eller lidelse.' },
  ],
  content: [
    {
      id: 'hov3-1-2-intro',
      type: 'text',
      content: `## Etikk i helse- og oppvekstfag

Som helsefagarbeider møter du daglig situasjoner som krever etisk refleksjon. Det kan handle om alt fra små hverdagsvalg til store dilemmaer der viktige verdier står mot hverandre.

Etikk er ikke det samme som lover og regler. Lovverket setter minimumsstandarden for hva som er akseptabelt, mens etikken stiller spørsmål om hva som er det riktige å gjøre - også når loven ikke gir klare svar.

I helsetjenesten er etisk kompetanse like viktig som faglig kunnskap. Du kan ha den beste medisinske kunnskapen i verden, men uten etisk bevissthet kan du likevel gjøre stor skade.`,
    },
    {
      id: 'hov3-1-2-def-1',
      type: 'definition',
      title: 'De fire etiske grunnprinsippene',
      content: `Beauchamp og Childress' fire etiske prinsipper danner grunnlaget for medisinsk etikk:

**1. Autonomi (selvbestemmelse)**
Brukeren har rett til å ta egne valg om eget liv og helse. Du skal informere, men respektere brukerens beslutning - også når du er uenig.

**2. Velgjørenhet (å gjøre godt)**
Du skal handle til det beste for brukeren. Alle tiltak skal ha brukerens velferd som mål.

**3. Ikke-skade**
Du skal unngå å påføre brukeren unødig skade eller lidelse. Nytten av et tiltak skal veies mot risikoen.

**4. Rettferdighet**
Ressurser og tjenester skal fordeles rettferdig. Alle skal behandles likt uavhengig av bakgrunn, status eller personlige preferanser.

Disse prinsippene kan komme i konflikt med hverandre - da oppstår et etisk dilemma.`,
    },
    {
      id: 'hov3-1-2-def-2',
      type: 'definition',
      title: 'Etisk dilemma',
      content: `Et **etisk dilemma** oppstår når to eller flere etiske prinsipper eller verdier står mot hverandre, og det ikke finnes en løsning som ivaretar alle hensyn fullt ut.

**Kjennetegn på et etisk dilemma:**
- Det finnes gode argumenter for flere handlingsalternativer
- Uansett hva du velger, vil et viktig hensyn bli satt til side
- Det er ikke et spørsmål om rett eller galt, men om hva som er det minst gale
- Beslutningen krever grundig refleksjon og avveining

**Eksempler på etiske dilemmaer:**
- Autonomi vs. sikkerhet: En bruker med demens vil gå ut alene, men risikerer å gå seg bort
- Taushetsplikt vs. pårørendes behov: Pårørende ber om informasjon brukeren ikke vil dele
- Ressursfordeling: Hvem skal få hjelp først når ressursene er knappe?`,
    },
    {
      id: 'hov3-1-2-example-1',
      type: 'example',
      title: 'Etisk dilemma: Autonomi mot sikkerhet',
      problem: 'Olav (82) bor hjemme og har hjemmesykepleie. Han har diabetes og begynnende demens. Hjemmesykepleien oppdager at han ofte glemmer å ta medisinene sine og spiser mye sukker. Datteren vil at faren skal flytte på sykehjem, men Olav vil absolutt bo hjemme.',
      solution: `**Analyse med de fire etiske prinsippene:**

**Autonomi:** Olav har rett til å bestemme selv hvor han vil bo. Han har uttrykt et klart ønske om å bo hjemme.

**Velgjørenhet:** Hva er best for Olav? Å bo hjemme gir ham livskvalitet, men mangelfull medisinering og dårlig kosthold kan gi alvorlige helseproblemer.

**Ikke-skade:** Å tvinge Olav til sykehjem kan skade ham psykisk (depresjon, tap av verdighet). Men å la ham bli hjemme med utilstrekkelig oppfølging kan skade ham fysisk.

**Rettferdighet:** Olav har rett til tilstrekkelige tjenester uansett hvor han bor.

**Mulig tilnærming:**
1. Kartlegg Olavs samtykkekompetanse - forstår han konsekvensene?
2. Vurder om hjemmetjenestene kan styrkes (dosett, hyppigere tilsyn, kostveiledning)
3. Involver Olav i samtaler om løsninger
4. Vurder velferdsteknologi (medisindispenser med alarm)
5. Hold tverrfaglig møte med lege, sykepleier og pårørende
6. Dokumenter alle vurderinger grundig`,
    },
    {
      id: 'hov3-1-2-def-3',
      type: 'definition',
      title: 'Yrkesetiske retningslinjer',
      content: `**Yrkesetiske retningslinjer** er et sett med normer og verdier som beskriver hva som forventes av yrkesutøvere innen et fagfelt.

For helse- og oppvekstfag er disse verdiene sentrale:

**Respekt for menneskeverdet** - alle mennesker har lik verdi uavhengig av bakgrunn
**Omsorg og empati** - evnen til å leve seg inn i andres situasjon og handle deretter
**Integritet** - å stå for det som er rett, selv når det er vanskelig
**Faglig forsvarlighet** - å handle innenfor sin kompetanse og søke hjelp ved behov
**Konfidensialitet** - å beskytte brukerens private informasjon
**Rettferdighet** - å behandle alle likt og uten diskriminering`,
    },
    {
      id: 'hov3-1-2-example-2',
      type: 'example',
      title: 'Etisk refleksjonsmodell',
      problem: 'Du trenger et systematisk verktøy for å analysere etiske dilemmaer i praksis.',
      solution: `**SME-modellen for etisk refleksjon:**

**Steg 1: Beskriv situasjonen**
- Hva er problemet?
- Hvem er involvert?
- Hvilke fakta kjenner vi?

**Steg 2: Identifiser verdier og prinsipper**
- Hvilke etiske prinsipper er berørt?
- Hvilke verdier står mot hverandre?
- Hva sier lovverket?
- Hva sier yrkesetiske retningslinjer?

**Steg 3: Vurder handlingsalternativer**
- Hvilke alternativer finnes?
- Hva er konsekvensene av hvert alternativ?
- Hvilke prinsipper støtter/utfordrer hvert alternativ?

**Steg 4: Ta en beslutning**
- Hvilket alternativ ivaretar flest hensyn best mulig?
- Kan du forsvare beslutningen faglig og etisk?
- Er brukeren involvert i beslutningen?

**Steg 5: Evaluer**
- Var beslutningen god?
- Hva kan du lære til neste gang?`,
    },
    {
      id: 'hov3-1-2-example-3',
      type: 'example',
      title: 'Hverdagsetikk i praksis',
      problem: 'Du har dårlig tid på morgenvakten og skal hjelpe flere beboere med morgenstellet. En beboer vil gjøre så mye som mulig selv, men det tar mye lengre tid.',
      solution: `**Etisk analyse:**

Det er fristende å «gjøre det selv» for å spare tid, men dette reiser viktige etiske spørsmål:

**Autonomi:** Beboeren har rett til å gjøre ting selv og opprettholde sin selvstendighet.
**Velgjørenhet:** Å la beboeren gjøre ting selv er positivt for funksjonsnivå og verdighet.
**Ikke-skade:** Å overta for beboeren kan svekke funksjonsevnen over tid (lært hjelpeløshet).

**Profesjonell tilnærming:**
- Gi beboeren tid til å gjøre det hun kan selv
- Tilrettelegg for mestring (riktige hjelpemidler, god tid)
- Prioriter mellom oppgaver - hva er viktigst akkurat nå?
- Kommuniser tidspress til leder og dokumenter behovet for tilstrekkelig bemanning
- Husk: Det er ikke etisk forsvarlig å alltid ofre kvalitet for effektivitet`,
    },
    {
      id: 'hov3-1-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

Etisk kompetanse er en grunnleggende del av profesjonell yrkesutøvelse:

- **De fire etiske prinsippene** (autonomi, velgjørenhet, ikke-skade, rettferdighet) gir et rammeverk for etisk refleksjon
- **Etiske dilemmaer** oppstår når prinsipper og verdier står mot hverandre
- **Yrkesetiske retningslinjer** gir veiledning for profesjonell handling
- **Systematisk etisk refleksjon** (SME-modellen) hjelper deg å analysere vanskelige situasjoner
- **Hverdagsetikk** handler om de små valgene du tar i det daglige arbeidet
- Etisk kompetanse utvikles gjennom refleksjon, dialog og erfaring`,
    },
  ],
  exercises: [
    {
      id: 'hov3-1-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilke er de fire etiske grunnprinsippene i medisinsk etikk (Beauchamp og Childress)?',
      options: [
        { id: 'a', text: 'Autonomi, velgjørenhet, ikke-skade og rettferdighet', isCorrect: true },
        { id: 'b', text: 'Omsorg, respekt, ansvar og lojalitet', isCorrect: false },
        { id: 'c', text: 'Konfidensialitet, integritet, tillit og nøytralitet', isCorrect: false },
        { id: 'd', text: 'Ærlighet, pålitelighet, empati og kompetanse', isCorrect: false },
      ],
      solution: 'De fire etiske grunnprinsippene er autonomi (selvbestemmelse), velgjørenhet (å gjøre godt), ikke-skade (unngå skade) og rettferdighet (lik behandling). Disse danner grunnlaget for etisk refleksjon i helsetjenesten.',
    },
    {
      id: 'hov3-1-2-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva kjennetegner et etisk dilemma?',
      options: [
        { id: 'a', text: 'To eller flere etiske prinsipper står mot hverandre, og det finnes ikke noe åpenbart riktig svar', isCorrect: true },
        { id: 'b', text: 'En situasjon der lovverket gir et klart svar', isCorrect: false },
        { id: 'c', text: 'En situasjon der du vet hva som er riktig, men ikke tør gjøre det', isCorrect: false },
        { id: 'd', text: 'En situasjon der alle er enige om hva som bør gjøres', isCorrect: false },
      ],
      solution: 'Et etisk dilemma oppstår når ulike etiske prinsipper eller verdier trekker i forskjellige retninger, og ingen løsning ivaretar alle hensyn fullt ut. Det krever grundig refleksjon og avveining.',
    },
    {
      id: 'hov3-1-2-ex-3',
      type: 'classic',
      difficulty: 'medium',
      task: 'En bruker med kreft nekter videre behandling. Pårørende insisterer på at behandlingen må fortsette. Analyser dette dilemmaet med de fire etiske prinsippene.',
      solution: '**Autonomi:** Brukeren har rett til å nekte behandling dersom vedkommende har samtykkekompetanse og er informert om konsekvensene. **Velgjørenhet:** Pårørende mener at behandlingen er det beste for brukeren. Helsepersonell må vurdere om videre behandling faktisk vil bedre livskvaliteten. **Ikke-skade:** Behandlingen kan ha alvorlige bivirkninger som reduserer livskvaliteten. Å tvinge noen til behandling de ikke ønsker, kan også påføre psykisk skade. **Rettferdighet:** Brukerens rett til å bestemme over eget liv skal gjelde uavhengig av pårørendes meninger. **Konklusjon:** Dersom brukeren har samtykkekompetanse, må brukerens valg respekteres. Helsepersonellets rolle er å sikre at brukeren er godt informert, og å støtte både bruker og pårørende gjennom prosessen.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-1-2-ex-4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv hva som menes med hverdagsetikk i helse- og oppvekstfag, og gi to eksempler.',
      solution: 'Hverdagsetikk handler om de etiske valgene vi tar i det daglige arbeidet, ofte uten å tenke over at de er etiske valg. Eksempler: 1) Du banker på døren før du går inn til en beboer, selv om du har nøkkel. Dette ivaretar beboerens verdighet og privatliv. 2) Du lar en bruker med funksjonsnedsettelse bruke lang tid på å kle på seg selv, i stedet for å gjøre det for vedkommende. Dette respekterer autonomi og fremmer mestring, selv om det tar lengre tid. Hverdagsetikken handler om å se mennesket bak diagnosen og behandle alle med respekt og verdighet i hver enkelt situasjon.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-1-2-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er forskjellen mellom etikk og lovverk?',
      options: [
        { id: 'a', text: 'Lovverket setter minimumsstandarden, etikken stiller spørsmål om hva som er det riktige å gjøre også utover loven', isCorrect: true },
        { id: 'b', text: 'Etikk og lovverk er det samme - begge sier hva som er rett og galt', isCorrect: false },
        { id: 'c', text: 'Lovverket er viktigere enn etikken i helsetjenesten', isCorrect: false },
        { id: 'd', text: 'Etikken gjelder bare for leger, lovverket gjelder for alle', isCorrect: false },
      ],
      solution: 'Lovverket angir minimumsstandarden for akseptabel atferd og kan håndheves med sanksjoner. Etikken går dypere og stiller spørsmål om hva som er det rette å gjøre - også i situasjoner der loven ikke gir klare svar. Noe kan være lovlig, men likevel etisk problematisk.',
    },
    {
      id: 'hov3-1-2-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilket etisk prinsipp er mest relevant når du vurderer om det er forsvarlig å la en bruker med nedsatt kognitiv funksjon ta egne risikofylte valg?',
      options: [
        { id: 'a', text: 'Autonomi sett opp mot velgjørenhet og ikke-skade', isCorrect: true },
        { id: 'b', text: 'Bare rettferdighetsprinsippet', isCorrect: false },
        { id: 'c', text: 'Bare ikke-skade-prinsippet', isCorrect: false },
        { id: 'd', text: 'Bare velgjørenhetsprinsippet', isCorrect: false },
      ],
      solution: 'Denne situasjonen er et klassisk eksempel på spenningen mellom autonomi (retten til å ta egne valg) og velgjørenhet/ikke-skade (plikten til å beskytte brukeren). Vurderingen avhenger av brukerens samtykkekompetanse og risikoens alvorlighetsgrad. Det er sjelden bare ett prinsipp som er relevant - etiske dilemmaer handler nettopp om avveining mellom flere prinsipper.',
    },
  ],
};

// ----------------------------------------------------------------------------
// 1.3 Taushetsplikt og personvern
// ----------------------------------------------------------------------------

export const CHAPTER_HOV3_1_3: TextbookChapter = {
  id: 'hov3-1-3',
  courseId: 'helseoppvekst-vg3',
  chapterNumber: '1.3',
  title: 'Taushetsplikt og personvern',
  description: 'GDPR, digital dømmekraft og taushetspliktens grenser i helsetjenesten.',
  estimatedMinutes: 50,
  competenceGoals: [
    'ivareta taushetsplikt og personvern i yrkesutøvelsen',
    'forstå reglene for behandling av helseopplysninger',
    'utøve digital dømmekraft i arbeidet',
  ],
  keyTerms: [
    { term: 'Taushetsplikt', definition: 'Lovpålagt plikt til ikke å dele opplysninger om brukeres personlige forhold med uvedkommende.' },
    { term: 'GDPR', definition: 'EUs personvernforordning (General Data Protection Regulation) som regulerer behandling av personopplysninger.' },
    { term: 'Helseopplysninger', definition: 'Personopplysninger om en persons helseforhold, inkludert fysisk og psykisk helse, som regnes som sensitive opplysninger.' },
    { term: 'Digital dømmekraft', definition: 'Evnen til å vurdere og handle etisk forsvarlig ved bruk av digitale verktøy og sosiale medier i arbeidet.' },
  ],
  content: [
    {
      id: 'hov3-1-3-intro',
      type: 'text',
      content: `## Taushetsplikt i helse- og oppvekstfag

Taushetsplikten er en av de mest grunnleggende pliktene for helsepersonell. Den er avgjørende for tillitsforholdet mellom bruker og hjelper. Uten tillit til at informasjonen er trygg, vil brukere holde tilbake viktig informasjon som kan påvirke behandlingen.

Taushetsplikten er lovfestet i flere lover:
- **Helsepersonelloven** §§ 21-25
- **Forvaltningsloven** §§ 13-13f
- **Pasientjournalloven**
- **Personopplysningsloven/GDPR**

Taushetsplikten gjelder ikke bare mens du er på jobb - den gjelder også etter at du har sluttet i jobben, og den gjelder overfor alle, inkludert familie, venner og andre helsearbeidere som ikke har tjenstlig behov.`,
    },
    {
      id: 'hov3-1-3-def-1',
      type: 'definition',
      title: 'Taushetspliktens omfang',
      content: `**Taushetsplikten** dekker alle opplysninger om brukerens personlige forhold:

- Helseopplysninger (diagnoser, behandling, prognose)
- Personlige opplysninger (familieforhold, økonomi, livsstil)
- Selve det at personen er bruker av tjenesten
- Opplysninger du får gjennom arbeidet, uavhengig av kilden

**Unntak fra taushetsplikten:**
- Samtykke fra brukeren
- Opplysningsplikt til barnevernet ved mistanke om omsorgssvikt
- Avvergingsplikt ved fare for alvorlig skade
- Nødvendig informasjonsdeling for forsvarlig behandling
- Opplysninger til tilsynsmyndigheter`,
    },
    {
      id: 'hov3-1-3-example-1',
      type: 'example',
      title: 'Taushetsplikt i hverdagen',
      problem: 'Du treffer en nabo på butikken som spør: «Jeg så at ambulansen var hos gamle Kari i går. Hva skjedde? Er hun okay?»',
      solution: `**Korrekt håndtering:**

Du kan verken bekrefte eller avkrefte at Kari har vært i kontakt med helsetjenesten. Et profesjonelt svar kan være:

«Det kan jeg dessverre ikke si noe om. Hvis du er bekymret for Kari, kan du ringe henne direkte eller besøke henne.»

**Hvorfor er dette viktig?**
- Selv å bekrefte at noen er bruker av tjenesten, er brudd på taushetsplikten
- Du vet ikke hva Kari ønsker at naboen skal vite
- Det kan virke ufarlig, men informasjon sprer seg raskt i et nærmiljø
- Brukere må kunne stole på at helsepersonell holder tett`,
    },
    {
      id: 'hov3-1-3-def-2',
      type: 'definition',
      title: 'GDPR og helseopplysninger',
      content: `**GDPR** (General Data Protection Regulation) er EUs personvernforordning som gjelder i Norge gjennom personopplysningsloven.

**Hovedprinsipper i GDPR:**
- **Lovlighet:** Behandling av personopplysninger må ha et rettslig grunnlag
- **Formålsbegrensning:** Opplysninger skal bare brukes til det formålet de er samlet inn for
- **Dataminimering:** Bare nødvendige opplysninger skal samles inn
- **Riktighet:** Opplysningene skal være korrekte og oppdaterte
- **Lagringsbegrensning:** Opplysninger skal ikke lagres lenger enn nødvendig
- **Integritet og konfidensialitet:** Opplysningene skal beskyttes mot uautorisert tilgang

**Helseopplysninger er «særlige kategorier»** under GDPR og krever ekstra beskyttelse. Behandling av helseopplysninger krever et spesifikt rettslig grunnlag, som for eksempel helsepersonelloven.`,
    },
    {
      id: 'hov3-1-3-example-2',
      type: 'example',
      title: 'Digital dømmekraft',
      problem: 'Du har hatt en spesielt fin dag på jobb og vil dele opplevelsen i sosiale medier. Du tenker å skrive: «Hadde den fineste stunden med en beboer i dag. Hun er 92 år og fortalte de mest utrolige historiene fra krigen.»',
      solution: `**Hvorfor er dette problematisk?**

Selv om du ikke nevner navn, kan informasjonen gjøre brukeren identifiserbar:
- Alder, kjønn og avdeling/arbeidsplass kan identifisere personen
- Kombinasjon av detaljer gjør identifisering lettere
- Du bekrefter indirekte at personen er bruker av tjenesten

**Regler for sosiale medier i helsesektoren:**
- Del aldri informasjon som kan identifisere brukere
- Ta aldri bilder eller video av brukere uten samtykke
- Diskuter aldri konkrete situasjoner fra jobb på sosiale medier
- Vær varsom med å «sjekke inn» på arbeidsplass
- Husk at arbeidsgiveren kan ha egne retningslinjer

**Alternativ:** Du kan dele at du har hatt en god dag på jobb uten å gi noen detaljer om brukere eller situasjoner.`,
    },
    {
      id: 'hov3-1-3-def-3',
      type: 'definition',
      title: 'Informasjonssikkerhet',
      content: `**Informasjonssikkerhet** handler om å beskytte opplysninger mot uautorisert tilgang, endring eller tap.

**Tre grunnprinsipper:**
- **Konfidensialitet:** Bare autoriserte personer har tilgang
- **Integritet:** Informasjonen er korrekt og fullstendig
- **Tilgjengelighet:** Informasjonen er tilgjengelig når den trengs

**Praktiske tiltak:**
- Logg alltid ut av datasystemer når du forlater arbeidsstasjonen
- Del aldri passord med andre
- Sørg for at papirdokumenter er sikret
- Vær varsom med samtaler i åpne rom
- Bruk kun godkjente kommunikasjonskanaler for sensitiv informasjon`,
    },
    {
      id: 'hov3-1-3-example-3',
      type: 'example',
      title: 'Brudd på taushetsplikten - konsekvenser',
      problem: 'En helsefagarbeider slår opp i journalen til en nabo for å se hva som feiler vedkommende. Hva er konsekvensene?',
      solution: `**Juridiske konsekvenser:**
- Brudd på helsepersonelloven § 21 (taushetsplikt)
- Kan medføre advarsel fra Statsforvalteren
- Kan medføre tap av autorisasjon i alvorlige tilfeller
- Kan medføre straffeansvar (bøter eller fengsel)

**Arbeidsrettslige konsekvenser:**
- Kan gi grunnlag for oppsigelse
- Kan gi grunnlag for avskjed (umiddelbar oppsigelse) i alvorlige tilfeller

**Alle oppslag i journal logges.** Arbeidsgiver kan når som helst kontrollere hvem som har sett i hvilke journaler. Uautoriserte oppslag oppdages.

**Husk:** Nysgjerrighet er aldri et tjenstlig behov.`,
    },
    {
      id: 'hov3-1-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

Taushetsplikt og personvern er fundamentale verdier i helsetjenesten:

- **Taushetsplikten** er lovfestet og gjelder alle opplysninger om brukerens personlige forhold
- **GDPR** stiller strenge krav til behandling av personopplysninger, særlig helseopplysninger
- **Digital dømmekraft** handler om å være bevisst på hva du deler digitalt om arbeidet ditt
- **Informasjonssikkerhet** krever at du beskytter sensitiv informasjon i det daglige
- Brudd på taushetsplikten kan få alvorlige juridiske og arbeidsrettslige konsekvenser
- Taushetsplikten har noen viktige unntak, som opplysningsplikt til barnevernet`,
    },
  ],
  exercises: [
    {
      id: 'hov3-1-3-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken lov er den viktigste for helsepersonells taushetsplikt?',
      options: [
        { id: 'a', text: 'Helsepersonelloven', isCorrect: true },
        { id: 'b', text: 'Arbeidsmiljøloven', isCorrect: false },
        { id: 'c', text: 'Opplæringsloven', isCorrect: false },
        { id: 'd', text: 'Straffeloven', isCorrect: false },
      ],
      solution: 'Helsepersonelloven §§ 21-25 regulerer helsepersonells taushetsplikt. Loven gjelder for alt helsepersonell, inkludert helsefagarbeidere.',
    },
    {
      id: 'hov3-1-3-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'I hvilken situasjon har du plikt til å bryte taushetsplikten?',
      options: [
        { id: 'a', text: 'Ved mistanke om omsorgssvikt av barn', isCorrect: true },
        { id: 'b', text: 'Når pårørende spør om brukerens helsetilstand', isCorrect: false },
        { id: 'c', text: 'Når politiet ber om generell informasjon', isCorrect: false },
        { id: 'd', text: 'Når kollegaer er nysgjerrige på en bruker', isCorrect: false },
      ],
      solution: 'Opplysningsplikten til barnevernet er et lovpålagt unntak fra taushetsplikten. Ved mistanke om omsorgssvikt av barn er du pliktig til å melde fra, uavhengig av taushetsplikten. Dette er regulert i helsepersonelloven § 33.',
    },
    {
      id: 'hov3-1-3-ex-3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva GDPR er og hvorfor det er spesielt viktig i helsetjenesten.',
      solution: 'GDPR er EUs personvernforordning som regulerer behandling av personopplysninger. I helsetjenesten er GDPR spesielt viktig fordi helseopplysninger regnes som «særlige kategorier» av personopplysninger som krever ekstra beskyttelse. Helsetjenesten behandler store mengder sensitiv informasjon daglig, og konsekvensene av lekkasjer kan være svært alvorlige for den enkelte. GDPR stiller krav til lovlig grunnlag for behandling, dataminimering, riktighet, lagringsbegrensning og informasjonssikkerhet. Helsetjenesten må ha gode systemer for tilgangskontroll, logging og opplæring for å etterleve GDPR.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-1-3-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva menes med digital dømmekraft i helsetjenesten?',
      options: [
        { id: 'a', text: 'Evnen til å vurdere og handle etisk forsvarlig ved bruk av digitale verktøy og sosiale medier i arbeidet', isCorrect: true },
        { id: 'b', text: 'Evnen til å bruke datamaskiner og elektroniske journalsystemer', isCorrect: false },
        { id: 'c', text: 'Evnen til å vurdere om digitale helsetjenester er bedre enn tradisjonelle', isCorrect: false },
        { id: 'd', text: 'Evnen til å lære seg nye digitale verktøy raskt', isCorrect: false },
      ],
      solution: 'Digital dømmekraft handler om bevisst og etisk bruk av digitale verktøy. I helsetjenesten innebærer dette å aldri dele informasjon som kan identifisere brukere på sosiale medier, aldri ta bilder uten samtykke, og være bevisst på hva man deler digitalt om arbeidssituasjoner.',
    },
    {
      id: 'hov3-1-3-ex-5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Gi tre konkrete eksempler på situasjoner der taushetsplikten kan komme i konflikt med andre hensyn, og forklar hvordan du ville håndtert dem.',
      solution: '1) **Pårørende ber om informasjon:** Ektefellen til en innlagt pasient ringer og vil vite hvordan det går. Løsning: Spør pasienten om samtykke til å dele informasjon med pårørende. Uten samtykke kan du ikke gi opplysninger, men du kan oppfordre pårørende til å snakke direkte med pasienten. 2) **Bekymring for barn:** Du oppdager blåmerker på et barn du jobber med. Løsning: Her har du opplysningsplikt til barnevernet som går foran taushetsplikten. Du melder bekymring selv om foreldrene ikke ønsker det. 3) **Kollega spør om en bruker:** En kollega fra en annen avdeling spør om en bruker du kjenner. Løsning: Vurder om kollegaen har tjenstlig behov for informasjonen. Kun de som er direkte involvert i brukerens behandling, skal ha tilgang til opplysninger.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};

// ----------------------------------------------------------------------------
// 1.4 Makt og tvang i helsetjenesten
// ----------------------------------------------------------------------------

export const CHAPTER_HOV3_1_4: TextbookChapter = {
  id: 'hov3-1-4',
  courseId: 'helseoppvekst-vg3',
  chapterNumber: '1.4',
  title: 'Makt og tvang i helsetjenesten',
  description: 'Tvang, samtykkekompetanse og maktforhold mellom hjelper og bruker.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå maktforhold i hjelper-bruker-relasjonen',
    'gjøre rede for regler om tvang og samtykkekompetanse',
    'forebygge unødvendig bruk av tvang',
  ],
  keyTerms: [
    { term: 'Makt', definition: 'Evnen til å påvirke andre menneskers handlinger, tanker eller livssituasjon, bevisst eller ubevisst.' },
    { term: 'Tvang', definition: 'Tiltak som gjennomføres mot en persons vilje, eller tiltak personen ikke har gitt gyldig samtykke til.' },
    { term: 'Samtykkekompetanse', definition: 'Evnen til å forstå informasjon om egen helsetilstand og ta gyldige beslutninger om egen behandling.' },
    { term: 'Paternalisme', definition: 'Å handle på vegne av en annen person «for deres eget beste», uten å spørre om deres mening.' },
  ],
  content: [
    {
      id: 'hov3-1-4-intro',
      type: 'text',
      content: `## Makt i hjelper-bruker-relasjonen

I enhver relasjon mellom hjelper og bruker finnes det en maktasymmetri. Som helsefagarbeider har du makt over brukere på flere måter:

**Definisjonsmakt:** Du er med på å definere hva som er brukerens problem og behov
**Kunnskapsmakt:** Du har fagkunnskap brukeren mangler
**Systemisk makt:** Du representerer et system med regler og ressurser
**Relasjonell makt:** Brukeren er ofte avhengig av deg for å få dekket grunnleggende behov

Denne makten er ikke nødvendigvis negativ - den er en forutsetning for å kunne hjelpe. Men den kan misbrukes, bevisst eller ubevisst, og det er ditt ansvar som profesjonell å være bevisst på maktforholdet og bruke makten ansvarlig.`,
    },
    {
      id: 'hov3-1-4-def-1',
      type: 'definition',
      title: 'Maktmisbruk og ubevisst maktbruk',
      content: `**Maktmisbruk** i helsetjenesten kan være åpenlyst eller subtilt:

**Åpenlys maktmisbruk:**
- Å snakke nedlatende til brukere
- Å true med konsekvenser hvis brukeren ikke gjør som du sier
- Å nekte tjenester som straff for uønsket atferd
- Fysisk tvang uten lovhjemmel

**Ubevisst maktbruk:**
- Å ta beslutninger for brukeren uten å spørre
- Å tilpasse tjenestene etter personalet, ikke brukeren
- Å snakke over hodet på brukeren
- Å bagatellisere brukerens ønsker og klager
- Å la egne fordommer påvirke tjenestene

**Kjennetegn på ansvarlig maktbruk:**
- Bevissthet om egen maktposisjon
- Åpenhet og transparens i beslutninger
- Involvering av brukeren
- Dokumentasjon av vurderinger`,
    },
    {
      id: 'hov3-1-4-example-1',
      type: 'example',
      title: 'Skjult maktbruk i hverdagen',
      problem: 'Du jobber på et bofellesskap og planlegger ukens aktiviteter. Du velger aktiviteter du synes er bra for beboerne uten å spørre dem hva de ønsker.',
      solution: `**Analyse av maktbruk:**

Dette er et eksempel på ubevisst maktbruk. Selv om intensjonen er god, tar du fra beboerne muligheten til å påvirke sin egen hverdag.

**Slik kan du gjøre det bedre:**
1. Spør beboerne hva de ønsker å gjøre
2. Presenter valgmuligheter de kan velge mellom
3. La beboerne være med på å planlegge
4. Respekter at noen kanskje ikke vil delta
5. Varier aktivitetene slik at alles interesser ivaretas

**Husk:** Brukermedvirkning er ikke bare et prinsipp - det er en rettighet. Selv små valg i hverdagen (hva man vil ha til frokost, når man vil stå opp, hvilke klær man vil ha på) er viktige for opplevelsen av selvbestemmelse og verdighet.`,
    },
    {
      id: 'hov3-1-4-def-2',
      type: 'definition',
      title: 'Samtykkekompetanse',
      content: `**Samtykkekompetanse** er evnen til å forstå informasjonen som er relevant for en beslutning om helsehjelp, og til å anvende denne informasjonen i en beslutningsprosess.

**Vurdering av samtykkekompetanse:**
Pasient- og brukerrettighetsloven § 4-3 slår fast at samtykkekompetanse kan bortfalle helt eller delvis dersom brukeren åpenbart ikke er i stand til å forstå hva samtykket omfatter.

**Viktige prinsipper:**
- Samtykkekompetanse skal alltid presumeres (antas) til det motsatte er påvist
- Den vurderes for hver enkelt beslutning - man kan ha samtykkekompetanse for noen valg, men ikke andre
- Det er legen eller den som er ansvarlig for helsehjelpen, som formelt vurderer samtykkekompetanse
- Manglende samtykkekompetanse åpner for tvang under strenge vilkår, regulert i pasient- og brukerrettighetsloven kapittel 4A`,
    },
    {
      id: 'hov3-1-4-def-3',
      type: 'definition',
      title: 'Tvang i helsetjenesten',
      content: `**Tvang** er tiltak som gjennomføres mot brukerens vilje eller uten gyldig samtykke.

**Lovhjemler for tvang:**
- **Pasient- og brukerrettighetsloven kap. 4A:** Tvang overfor pasienter som mangler samtykkekompetanse og motsetter seg helsehjelp
- **Helse- og omsorgstjenesteloven kap. 9:** Tvang overfor personer med psykisk utviklingshemming
- **Psykisk helsevernloven:** Tvang i psykisk helsevern

**Vilkår for bruk av tvang (kap. 4A):**
1. Brukeren mangler samtykkekompetanse
2. Brukeren motsetter seg helsehjelpen
3. Tillitskapende tiltak er forsøkt først
4. Helsehjelpen er nødvendig for å unngå vesentlig helseskade
5. Tiltaket er forholdsmessig (nytten oppveier ulempene)

**Viktig:** Tvang er alltid siste utvei og krever grundig dokumentasjon og vedtak.`,
    },
    {
      id: 'hov3-1-4-example-2',
      type: 'example',
      title: 'Tillitskapende tiltak før tvang',
      problem: 'En beboer med demens nekter å vaske seg og har ikke dusjet på flere uker. Hygienen er blitt et problem, og det er fare for hudinfeksjon.',
      solution: `**Tillitskapende tiltak som bør prøves først:**

1. **Kartlegg årsaken:** Hvorfor nekter beboeren? Er det redsel for vann? Smerter? Utrygge omgivelser? Skamfølelse?
2. **Tilpass tilnærmingen:** Prøv ulike tidspunkter, ulike ansatte (kanskje beboeren foretrekker en bestemt person), ulike metoder (vaskeklut i stedet for dusj)
3. **Skap trygghet:** Snakk rolig, forklar hva du gjør, gi beboeren kontroll der det er mulig
4. **Bruk kjente elementer:** Favorittmusikk, kjente produkter, varmt rom
5. **Gradvis tilnærming:** Begynn med å vaske hendene, så ansiktet, og utvid gradvis
6. **Involver pårørende:** Kanskje pårørende kan bidra?

**Hvis alle tillitskapende tiltak er forsøkt uten hell:**
- Lege vurderer samtykkekompetanse
- Tverrfaglig vurdering av nødvendigheten
- Vedtak om tvang etter pasient- og brukerrettighetsloven kap. 4A
- Bruk minst inngripende tiltak
- Grundig dokumentasjon
- Informer pårørende og Statsforvalteren`,
    },
    {
      id: 'hov3-1-4-example-3',
      type: 'example',
      title: 'Paternalisme i praksis',
      problem: 'Du bestemmer at en beboer ikke skal få dessert fordi han har diabetes, uten å snakke med ham om det først.',
      solution: `**Analyse:**

Dette er et eksempel på paternalisme - å handle «for noen andres beste» uten å involvere vedkommende.

**Hvorfor er dette problematisk?**
- Beboeren har rett til informasjon og medvirkning
- Å nekte mat uten samtale er umyndiggjørende
- Beboeren kan ha samtykkekompetanse til å ta slike valg selv
- Kanskje beboeren kjenner sin diabetes godt og vet hva han tåler

**Profesjonell tilnærming:**
1. Informer beboeren om sammenhengen mellom sukker og diabetes
2. Tilby alternativer (sukkerfri dessert)
3. La beboeren selv velge, basert på informasjonen
4. Respekter valget, men dokumenter at informasjon er gitt
5. Følg opp blodsukkeret og juster tilnærmingen ved behov

**Paternalisme er ikke det samme som omsorg.** Omsorg handler om å hjelpe mennesker til å ta gode valg - ikke om å ta valgene for dem.`,
    },
    {
      id: 'hov3-1-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

Makt og tvang er sentrale temaer i helse- og oppvekstfag:

- **Maktasymmetri** er uunngåelig i hjelper-bruker-relasjonen, men makten må brukes ansvarlig
- **Maktmisbruk** kan være åpenlyst eller subtilt og ubevisst
- **Samtykkekompetanse** skal alltid presumeres og vurderes individuelt for hver beslutning
- **Tvang** er alltid siste utvei og krever lovhjemmel, grundig vurdering og dokumentasjon
- **Tillitskapende tiltak** skal alltid forsøkes før tvang
- **Paternalisme** må unngås - informer og involver brukeren i beslutninger`,
    },
  ],
  exercises: [
    {
      id: 'hov3-1-4-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva menes med samtykkekompetanse?',
      options: [
        { id: 'a', text: 'Evnen til å forstå informasjon og ta gyldige beslutninger om egen behandling', isCorrect: true },
        { id: 'b', text: 'Evnen til å signere dokumenter', isCorrect: false },
        { id: 'c', text: 'At pårørende har gitt samtykke på vegne av brukeren', isCorrect: false },
        { id: 'd', text: 'At brukeren er over 18 år', isCorrect: false },
      ],
      solution: 'Samtykkekompetanse handler om evnen til å forstå informasjon som er relevant for en beslutning, og å kunne anvende denne informasjonen. Det handler ikke bare om alder eller evnen til å signere, men om reell forståelse.',
    },
    {
      id: 'hov3-1-4-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er det første du skal prøve når en bruker uten samtykkekompetanse motsetter seg nødvendig helsehjelp?',
      options: [
        { id: 'a', text: 'Tillitskapende tiltak', isCorrect: true },
        { id: 'b', text: 'Fatte tvangsvedtak umiddelbart', isCorrect: false },
        { id: 'c', text: 'Gi opp og la brukeren være', isCorrect: false },
        { id: 'd', text: 'Ringe politiet', isCorrect: false },
      ],
      solution: 'Tillitskapende tiltak er lovens krav som første steg. Dette kan innebære å prøve ulike tilnærminger, tidspunkter, personell eller metoder. Tvang kan bare brukes dersom tillitskapende tiltak er forsøkt uten hell, og de øvrige vilkårene i loven er oppfylt.',
    },
    {
      id: 'hov3-1-4-ex-3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom omsorg og paternalisme, og gi eksempler på hver.',
      solution: '**Omsorg** handler om å hjelpe mennesker til å ta gode valg ved å informere, støtte og tilrettelegge, samtidig som man respekterer brukerens rett til selvbestemmelse. Eksempel: Du informerer en diabetespasient om helserisikoen ved sukker og tilbyr alternativer, men lar pasienten selv velge. **Paternalisme** handler om å ta valg på vegne av en annen person «for deres eget beste» uten å involvere dem. Eksempel: Du fjerner sukkeret fra bordet uten å si noe, eller nekter brukeren å gå ut fordi du mener det er for kaldt. Forskjellen ligger i graden av brukermedvirkning og respekt for autonomi.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-1-4-ex-4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Beskriv fire typer makt i hjelper-bruker-relasjonen og forklar hvordan du kan bruke makten ansvarlig.',
      solution: '**1. Definisjonsmakt:** Du er med på å definere brukerens behov og problemer. Ansvarlig bruk: Involver brukeren i kartlegging og la brukerens egen opplevelse veie tungt. **2. Kunnskapsmakt:** Du har fagkunnskap brukeren mangler. Ansvarlig bruk: Del kunnskap åpent, forklar alternativer, og anerkjenn brukerens egen kunnskap om seg selv. **3. Systemisk makt:** Du representerer et system med regler og ressurser. Ansvarlig bruk: Vær åpen om hva systemet kan og ikke kan tilby, og hjelp brukeren å navigere systemet. **4. Relasjonell makt:** Brukeren er avhengig av deg. Ansvarlig bruk: Vær bevisst på avhengighetsforholdet, ikke utnytt det, og arbeid for å styrke brukerens selvstendighet.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-1-4-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken lov regulerer bruk av tvang overfor pasienter som mangler samtykkekompetanse i den somatiske helsetjenesten?',
      options: [
        { id: 'a', text: 'Pasient- og brukerrettighetsloven kapittel 4A', isCorrect: true },
        { id: 'b', text: 'Straffeloven', isCorrect: false },
        { id: 'c', text: 'Arbeidsmiljøloven', isCorrect: false },
        { id: 'd', text: 'Kommunehelsetjenesteloven', isCorrect: false },
      ],
      solution: 'Pasient- og brukerrettighetsloven kapittel 4A regulerer bruk av tvang overfor pasienter som mangler samtykkekompetanse og motsetter seg helsehjelp i den somatiske helsetjenesten. Kapitlet stiller strenge krav til når tvang kan brukes.',
    },
  ],
};

// ----------------------------------------------------------------------------
// 1.5 Kommunikasjon og relasjonskompetanse
// ----------------------------------------------------------------------------

export const CHAPTER_HOV3_1_5: TextbookChapter = {
  id: 'hov3-1-5',
  courseId: 'helseoppvekst-vg3',
  chapterNumber: '1.5',
  title: 'Kommunikasjon og relasjonskompetanse',
  description: 'Empati, kulturell kompetanse og kommunikasjon med brukere i ulike livssituasjoner.',
  estimatedMinutes: 55,
  competenceGoals: [
    'kommunisere profesjonelt med brukere, pårørende og kolleger',
    'utøve empati og relasjonskompetanse i yrkesutøvelsen',
    'tilpasse kommunikasjonen til brukerens behov og kulturelle bakgrunn',
  ],
  keyTerms: [
    { term: 'Empati', definition: 'Evnen til å forstå og leve seg inn i en annen persons opplevelser og følelser, uten å overta dem.' },
    { term: 'Relasjonskompetanse', definition: 'Evnen til å bygge og opprettholde gode relasjoner med andre mennesker i profesjonelle sammenhenger.' },
    { term: 'Aktiv lytting', definition: 'Å lytte med full oppmerksomhet, vise interesse og bekrefte at du har forstått det den andre sier.' },
    { term: 'Kulturell kompetanse', definition: 'Evnen til å forstå, kommunisere med og effektivt samhandle med mennesker fra ulike kulturer.' },
    { term: 'Nonverbal kommunikasjon', definition: 'Kommunikasjon uten ord, gjennom kroppsspråk, ansiktsuttrykk, tonefall, øyekontakt og fysisk nærhet.' },
    { term: 'Motiverende intervju', definition: 'En samtalemetode som tar utgangspunkt i personens egen motivasjon for endring.' },
  ],
  content: [
    {
      id: 'hov3-1-5-intro',
      type: 'text',
      content: `## Kommunikasjon i helse- og oppvekstfag

God kommunikasjon er kanskje den viktigste ferdigheten du har som helsefagarbeider. Gjennom kommunikasjon bygger du tillit, kartlegger behov, gir informasjon, støtter og trøster. Kommunikasjonen din påvirker direkte kvaliteten på tjenestene du yter.

I helse- og oppvekstfag møter du mennesker i sårbare situasjoner. De kan være syke, redde, ensomme, forvirrede eller frustrerte. Det stiller ekstra store krav til din kommunikasjonsevne.

Profesjonell kommunikasjon skiller seg fra hverdagskommunikasjon ved at den:
- Er bevisst og målrettet
- Setter brukerens behov i sentrum
- Er tilpasset situasjonen og mottakeren
- Bygger på faglig kunnskap om kommunikasjon
- Inkluderer evnen til å lytte like mye som å snakke`,
    },
    {
      id: 'hov3-1-5-def-1',
      type: 'definition',
      title: 'Empati',
      content: `**Empati** er evnen til å forstå og leve seg inn i en annen persons opplevelser og følelser, uten å overta dem.

**Tre nivåer av empati:**

**1. Kognitiv empati** - å forstå intellektuelt hva den andre tenker og føler
**2. Emosjonell empati** - å kjenne på den andres følelser i egen kropp
**3. Medfølelse** - å bli motivert til å hjelpe basert på forståelsen

**Empati vs. sympati:**
- **Empati:** «Jeg forstår at du har det vanskelig» (innlevelse)
- **Sympati:** «Stakkars deg!» (medlidenhet)

I profesjonell sammenheng er empati mer nyttig enn sympati. Empati holder en profesjonell avstand som gjør deg i stand til å hjelpe, mens overdreven sympati kan føre til at du blir overveldet av andres følelser.

**Empatisk utmattelse** kan oppstå hvis du ikke setter grenser. Det er viktig å ta vare på seg selv for å kunne ta vare på andre.`,
    },
    {
      id: 'hov3-1-5-def-2',
      type: 'definition',
      title: 'Aktiv lytting',
      content: `**Aktiv lytting** er en kommunikasjonsteknikk der du gir den andre din fulle oppmerksomhet og aktivt viser at du lytter og forstår.

**Teknikker for aktiv lytting:**

- **Gi oppmerksomhet:** Øyekontakt, åpent kroppsspråk, vend deg mot personen
- **Speile:** Gjenta nøkkelord eller omformulere det den andre har sagt
- **Bekrefte:** «Jeg hører hva du sier», «Det høres ut som du er...»
- **Stille åpne spørsmål:** «Hvordan opplever du det?», «Kan du fortelle mer?»
- **Tåle stillhet:** Gi den andre tid til å tenke og formulere seg
- **Oppsummere:** «Hvis jeg har forstått deg riktig, så...»

**Hva du bør unngå:**
- Avbryte
- Gi råd for tidlig
- Bagatellisere («Det går nok bra»)
- Skifte tema
- Se på klokken eller telefonen`,
    },
    {
      id: 'hov3-1-5-example-1',
      type: 'example',
      title: 'Aktiv lytting i praksis',
      problem: 'En pårørende kommer til deg og sier: «Jeg er så lei meg. Mamma kjenner meg ikke igjen lenger. Jeg vet ikke om det er noen vits å komme på besøk.»',
      solution: `**Dårlig respons (ikke aktiv lytting):**
«Ikke vær lei deg, hun har jo demens. Det er normalt. Du bør fortsette å komme, det er viktig.»

**God respons (aktiv lytting):**
«Det høres ut som det er veldig vondt for deg at mamma ikke kjenner deg igjen.» (speiling)
*Pause - la pårørende svare*
«Hvordan opplever du besøkene nå?» (åpent spørsmål)
*Lytt oppmerksomt*
«Det er helt forståelig at du kjenner på det slik. Mange pårørende opplever det samme.» (bekreftelse)
«Selv om mamma kanskje ikke kjenner deg igjen med navn, merker hun ofte trygghet og nærhet. Vil du at vi snakker mer om hvordan besøkene kan bli gode for dere begge?» (informasjon og tilbud)

**Forskjellen:** Den gode responsen anerkjenner følelsene, gir rom for å dele mer, og tilbyr videre støtte - uten å bagatellisere eller gi råd for tidlig.`,
    },
    {
      id: 'hov3-1-5-def-3',
      type: 'definition',
      title: 'Kulturell kompetanse',
      content: `**Kulturell kompetanse** er evnen til å forstå, kommunisere med og samhandle effektivt med mennesker fra ulike kulturelle bakgrunner.

**Dimensjoner av kulturell kompetanse:**

**Kulturell bevissthet** - å kjenne sine egne kulturelle verdier og fordommer
**Kulturell kunnskap** - å ha kunnskap om andre kulturer, tradisjoner og helseforståelser
**Kulturelle ferdigheter** - å kunne tilpasse kommunikasjon og tjenester
**Kulturelt ønske** - å ville lære og forstå andre kulturer

**Viktige hensyn:**
- Ulike kulturer har ulike syn på sykdom, helse og behandling
- Familiens rolle varierer mellom kulturer
- Kommunikasjonsstiler er kulturelt betinget (direkte/indirekte, kroppskontakt, øyekontakt)
- Mat, hygiene og påkledning kan ha kulturell og religiøs betydning
- Unngå stereotypier - hvert menneske er unikt

**Bruk av tolk:**
Bruk kvalifisert tolk ved behov. Bruk aldri barn eller familiemedlemmer som tolk ved sensitive samtaler.`,
    },
    {
      id: 'hov3-1-5-example-2',
      type: 'example',
      title: 'Kulturell kompetanse i praksis',
      problem: 'Du skal hjelpe en eldre kvinne fra Somalia med morgenstellet. Hun nekter å ta av seg hijab, og kollegaen din sier: «Hun må jo av med alt for å dusje.»',
      solution: `**Kulturelt kompetent tilnærming:**

1. **Forstå bakgrunnen:** Hijab kan ha dyp religiøs og kulturell betydning. For mange muslimske kvinner er det viktig å dekke seg til, spesielt i nærvær av andre.

2. **Kommuniser respektfullt:** Spør kvinnen hva hun er komfortabel med. Kanskje hun kan ha på hijab til hun er alene i dusjen?

3. **Tilpass tjenesten:**
   - Sørg for at det er en kvinnelig hjelper
   - Sikre privatlivet (lukk dør, trekk for gardin)
   - La kvinnen beholde hijab så lenge som mulig
   - Ha et håndkle klart slik at hun kan dekke seg til raskt

4. **Vær respektfull:** Anerkjenn at dette er viktig for henne, selv om du kanskje ikke forstår det fullt ut.

5. **Lær av situasjonen:** Diskuter kulturelle hensyn i teamet for å forbedre tjenestene.

**Nøkkelprinsipp:** Vi tilpasser tjenestene til brukeren, ikke omvendt.`,
    },
    {
      id: 'hov3-1-5-example-3',
      type: 'example',
      title: 'Motiverende intervju',
      problem: 'En bruker med overvekt og diabetes type 2 sier: «Jeg vet at jeg burde trene mer og spise sunnere, men jeg klarer det ikke.»',
      solution: `**Tilnærming med motiverende intervju:**

**1. Uttrykk empati:**
«Det høres ut som du er frustrert over at det er vanskelig å endre vanene, selv om du vet hva som er best for deg.»

**2. Utforsk ambivalensen:**
«Du sier at du vet du burde trene og spise sunnere. Hva tenker du selv ville vært fordelene med å gjøre noen endringer?»

**3. Rull med motstand:**
«Det er helt naturlig at endring er vanskelig. De fleste av oss strever med det. Hva tror du gjør det vanskelig for deg?»

**4. Støtt mestringstro:**
«Har du klart å gjøre endringer i livet ditt før? Hva var det som hjalp deg da?»

**5. Finn små steg:**
«Hva ville være det minste du kunne gjøre denne uken som ville være et steg i riktig retning?»

**Prinsippet:** Motivasjonen for endring skal komme fra brukeren selv. Din rolle er å hjelpe brukeren å utforske sine egne grunner for endring - ikke å fortelle hva brukeren skal gjøre.`,
    },
    {
      id: 'hov3-1-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

God kommunikasjon og relasjonskompetanse er grunnlaget for kvalitet i helsetjenesten:

- **Empati** handler om å forstå og leve seg inn i andres opplevelser, uten å overta følelsene
- **Aktiv lytting** innebærer å gi full oppmerksomhet, speile, bekrefte og stille åpne spørsmål
- **Kulturell kompetanse** krever bevissthet, kunnskap og vilje til å tilpasse tjenestene
- **Nonverbal kommunikasjon** utgjør en stor del av budskapet
- **Motiverende intervju** tar utgangspunkt i brukerens egen motivasjon
- Profesjonell kommunikasjon er bevisst, målrettet og tilpasset mottakeren`,
    },
  ],
  exercises: [
    {
      id: 'hov3-1-5-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er forskjellen mellom empati og sympati?',
      options: [
        { id: 'a', text: 'Empati er innlevelse og forståelse, sympati er medlidenhet', isCorrect: true },
        { id: 'b', text: 'Empati og sympati betyr det samme', isCorrect: false },
        { id: 'c', text: 'Sympati er mer profesjonelt enn empati', isCorrect: false },
        { id: 'd', text: 'Empati handler om å føle det samme som den andre', isCorrect: false },
      ],
      solution: 'Empati innebærer å forstå og leve seg inn i andres opplevelser uten å overta følelsene. Sympati innebærer medlidenhet og kan føre til at du blir overveldet. I profesjonell sammenheng er empati mer nyttig fordi det holder en sunn avstand som gjør deg i stand til å hjelpe.',
    },
    {
      id: 'hov3-1-5-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken av disse er en teknikk for aktiv lytting?',
      options: [
        { id: 'a', text: 'Speile og bekrefte det den andre sier', isCorrect: true },
        { id: 'b', text: 'Gi råd så raskt som mulig', isCorrect: false },
        { id: 'c', text: 'Fortelle om egne lignende erfaringer', isCorrect: false },
        { id: 'd', text: 'Stille mange ja/nei-spørsmål', isCorrect: false },
      ],
      solution: 'Speiling innebærer å gjenta nøkkelord eller omformulere det den andre har sagt. Bekreftelse innebærer å vise at du har forstått og at følelsene er gyldige. Begge teknikkene er sentrale i aktiv lytting og hjelper den andre å føle seg hørt og forstått.',
    },
    {
      id: 'hov3-1-5-ex-3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv hva kulturell kompetanse betyr i praksis for en helsefagarbeider, og gi to konkrete eksempler.',
      solution: 'Kulturell kompetanse betyr å kunne forstå, kommunisere med og gi gode tjenester til mennesker med ulik kulturell bakgrunn. I praksis handler det om å være bevisst sine egne fordommer, ha kunnskap om ulike kulturer, og tilpasse tjenestene individuelt. Eksempel 1: En bruker fra Pakistan faster under ramadan. Du tilpasser måltidene slik at brukeren får mat før soloppgang og etter solnedgang, og diskuterer med lege om medisinering kan tilpasses. Eksempel 2: En bruker fra Vietnam unngår øyekontakt. I stedet for å tolke dette som uhøflighet eller tilbaketrekning, forstår du at det kan være et tegn på respekt i brukerens kultur, og tilpasser kommunikasjonen deretter.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-1-5-ex-4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar prinsippene bak motiverende intervju og hvorfor denne tilnærmingen kan være mer effektiv enn direkte rådgivning.',
      solution: 'Motiverende intervju (MI) bygger på prinsippene om å uttrykke empati, utforske ambivalens, rulle med motstand og støtte mestringstro. Tilnærmingen tar utgangspunkt i at motivasjon for endring er mest varig når den kommer fra personen selv, ikke utenfra. MI er mer effektivt enn direkte rådgivning fordi: 1) Mennesker reagerer ofte med motstand når de føler seg presset. 2) Å oppdage egne grunner for endring gir sterkere motivasjon. 3) Metoden respekterer autonomi og unngår paternalisme. 4) Den bygger mestringstro ved å fokusere på personens ressurser. I praksis bruker du åpne spørsmål, speiling og oppsummering for å hjelpe brukeren utforske sine egne tanker og finne veien videre.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-1-5-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvorfor bør man ikke bruke barn som tolk i helsesamtaler?',
      options: [
        { id: 'a', text: 'Det er en urimelig belastning for barnet, og det kan påvirke nøyaktigheten og sensitive temaer kan ikke tas opp', isCorrect: true },
        { id: 'b', text: 'Barn kan ikke språket godt nok', isCorrect: false },
        { id: 'c', text: 'Det er bare tradisjon å bruke kvalifisert tolk', isCorrect: false },
        { id: 'd', text: 'Det er ikke lovlig', isCorrect: false },
      ],
      solution: 'Barn skal ikke brukes som tolk fordi: 1) Det er en urimelig emosjonell belastning å måtte formidle alvorlige helseopplysninger. 2) Barnet kan mangle forståelse og ordforråd for medisinske begreper. 3) Sensitive temaer (psykisk helse, seksualitet, vold) kan ikke tas opp. 4) Maktforholdet mellom foreldre og barn forstyrres. Bruk alltid kvalifisert tolk.',
    },
    {
      id: 'hov3-1-5-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er empatisk utmattelse, og hvorfor er det relevant for helsefagarbeidere?',
      options: [
        { id: 'a', text: 'En tilstand der man blir følelsesmessig utslitt av å leve seg inn i andres lidelse, og det er en risiko i omsorgsyrker', isCorrect: true },
        { id: 'b', text: 'En medisinsk diagnose som krever behandling med medisiner', isCorrect: false },
        { id: 'c', text: 'Det samme som utbrenthet og har ingen sammenheng med empati', isCorrect: false },
        { id: 'd', text: 'En sjelden tilstand som bare rammer psykologer', isCorrect: false },
      ],
      solution: 'Empatisk utmattelse (compassion fatigue) er en tilstand der man blir følelsesmessig utslitt av å leve seg inn i andres smerte og lidelse over tid. Det er spesielt relevant for helsefagarbeidere fordi de daglig møter mennesker i sårbare situasjoner. Forebygging innebærer god egenivaretakelse, grensesetting, kollegastøtte og mulighet for veiledning.',
    },
  ],
};

// ----------------------------------------------------------------------------
// 1.6 Konflikthåndtering
// ----------------------------------------------------------------------------

export const CHAPTER_HOV3_1_6: TextbookChapter = {
  id: 'hov3-1-6',
  courseId: 'helseoppvekst-vg3',
  chapterNumber: '1.6',
  title: 'Konflikthåndtering',
  description: 'Deeskalering, forebygging av konflikter og håndtering av utagerende atferd.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forebygge og håndtere konflikter i yrkesutøvelsen',
    'anvende deeskaleringsteknikker',
    'forstå årsaker til aggresjon og utagerende atferd',
  ],
  keyTerms: [
    { term: 'Konflikt', definition: 'En situasjon der to eller flere parter har motstridende interesser, behov eller verdier.' },
    { term: 'Deeskalering', definition: 'Tiltak og teknikker for å roe ned en opphisset situasjon og forhindre at den eskalerer til vold.' },
    { term: 'Utagerende atferd', definition: 'Atferd som er aggressiv, truende eller voldelig, ofte utløst av frustrasjon, redsel eller manglende evne til å kommunisere.' },
    { term: 'Lavaffektiv tilnærming', definition: 'En tilnærming til konflikthåndtering som vektlegger å holde eget stressnivå lavt for å unngå å eskalere situasjonen.' },
  ],
  content: [
    {
      id: 'hov3-1-6-intro',
      type: 'text',
      content: `## Konflikter i helse- og oppvekstfag

Konflikter er en naturlig del av arbeidet i helse- og oppvekstfag. De kan oppstå mellom deg og brukere, pårørende eller kolleger. Å kunne forebygge og håndtere konflikter er en viktig profesjonell ferdighet.

Konflikter i helsetjenesten kan skyldes:
- **Udekkede behov** - brukeren føler seg ikke hørt eller ivaretatt
- **Misforståelser** - ulik forståelse av situasjonen eller forventningene
- **Frustrasjoner** - over sykdom, tap av autonomi eller ventetid
- **Sykdom** - demens, psykisk lidelse eller smerter kan føre til utagering
- **Kulturelle forskjeller** - ulike forventninger til tjenestene
- **Pårørendes bekymring** - angst for den de er glad i

Å forstå årsaken til konflikten er nøkkelen til å håndtere den godt.`,
    },
    {
      id: 'hov3-1-6-def-1',
      type: 'definition',
      title: 'Konflikttrappen',
      content: `**Konflikttrappen** beskriver hvordan konflikter kan eskalere trinnvis:

**Trinn 1: Uenighet** - Partene er uenige, men kommuniserer saklig
**Trinn 2: Personifisering** - Det handler ikke lenger bare om saken, men om personene
**Trinn 3: Problemutvidelse** - Gamle uenigheter trekkes inn, konflikten vokser
**Trinn 4: Kommunikasjonen brytes** - Partene snakker ikke lenger med hverandre
**Trinn 5: Fiendebilder** - Den andre sees som fienden
**Trinn 6: Åpen fiendtlighet** - Trusler, trakassering eller vold

**Jo tidligere du griper inn, jo lettere er konflikten å løse.** På trinn 1-2 kan partene ofte løse det selv med god kommunikasjon. Fra trinn 3 og oppover trengs det ofte hjelp fra en tredjeperson.`,
    },
    {
      id: 'hov3-1-6-def-2',
      type: 'definition',
      title: 'Deeskalering',
      content: `**Deeskalering** er teknikker og tilnærminger for å roe ned en opphisset situasjon og forhindre at den utvikler seg til vold.

**Grunnprinsipper for deeskalering:**

**1. Hold deg rolig** - Din ro smitter. Hvis du blir stresset, eskalerer situasjonen.
**2. Lytt aktivt** - La personen uttrykke frustrasjonen sin
**3. Anerkjenn følelsene** - «Jeg ser at du er sint/frustrert/redd»
**4. Senk stressnivået** - Snakk rolig, senk stemmevolumet, beveg deg sakte
**5. Gi valgmuligheter** - «Vi kan gjøre det slik eller slik - hva foretrekker du?»
**6. Respekter personlig rom** - Stå ikke for nær, unngå å blokkere utgangen
**7. Unngå maktbruk** - Ordrer og trusler eskalerer situasjonen
**8. Tilby løsninger** - Fokuser på hva du kan gjøre, ikke hva du ikke kan`,
    },
    {
      id: 'hov3-1-6-example-1',
      type: 'example',
      title: 'Deeskalering i praksis',
      problem: 'En pårørende kommer inn på avdelingen og er svært sint. Han roper: «Moren min har ligget i flere timer uten at noen har sett til henne! Dere bryr dere ikke!»',
      solution: `**Deeskaleringsteknikker i praksis:**

**1. Hold deg rolig.** Pust dypt. Ikke ta det personlig.

**2. Anerkjenn:** «Jeg forstår at du er frustrert og bekymret for moren din. Det er naturlig.»

**3. Lytt:** «Kan du fortelle meg mer om hva som har skjedd?» La ham snakke ut uten å avbryte.

**4. Vis at du tar det på alvor:** «Det du forteller er viktig, og jeg vil gjerne finne ut hva som har skjedd.»

**5. Tilby handling:** «La meg sjekke med kollegaene mine hva som har skjedd og hva vi kan gjøre nå. Kan du vente her et øyeblikk?»

**6. Følg opp:** Kom tilbake med konkret informasjon og en plan.

**7. Dokumenter:** Skriv ned hendelsen og eventuelle tiltak.

**Hva du IKKE bør gjøre:**
- Avfeie bekymringen: «Vi har det travelt, vi gjør så godt vi kan»
- Bli defensiv: «Det stemmer ikke, vi har vært inne flere ganger»
- Heve stemmen tilbake
- Gå fra situasjonen uten å si noe`,
    },
    {
      id: 'hov3-1-6-def-3',
      type: 'definition',
      title: 'Lavaffektiv tilnærming',
      content: `**Lavaffektiv tilnærming** (Studio 3-modellen) er en metode utviklet av Andrew McDonnell for å håndtere utagerende atferd, særlig hos personer med utviklingshemming, demens eller psykiske lidelser.

**Grunnprinsipper:**

**1. Affektsmitte:** Sterke følelser smitter. Hvis du er stresset, blir brukeren mer stresset.

**2. Krav reduserer:** I en opphisset situasjon, senk kravene. Nå er det viktigere å roe ned enn å gjennomføre oppgaven.

**3. Kroppsspråk:** Åpent, avslappet kroppsspråk. Hendene synlige, sidestilt posisjon (ikke rett foran).

**4. Stemme:** Snakk rolig, lavt og sakte. Korte, enkle setninger.

**5. Unngå konfrontasjon:** Ikke utfordre, korriger eller irettesett i situasjonen. Det kan vente til personen har roet seg.

**6. Sikkerhet først:** Sørg for din egen og andres sikkerhet. Trekk deg tilbake hvis nødvendig.`,
    },
    {
      id: 'hov3-1-6-example-2',
      type: 'example',
      title: 'Utagerende atferd ved demens',
      problem: 'Du hjelper Astrid (84) med morgenstellet. Plutselig dytter hun deg bort og roper: «Gå vekk! Jeg kjenner deg ikke! Hjelp!»',
      solution: `**Lavaffektiv tilnærming:**

**1. Trekk deg tilbake** - Gi Astrid fysisk rom. Stå minst en armlengde unna.

**2. Ro deg selv ned** - Pust rolig. Astrids reaksjon handler om hennes forvirring, ikke om deg.

**3. Snakk rolig:** «Det er greit, Astrid. Du er trygg her. Jeg heter [navn], og jeg er her for å hjelpe deg.»

**4. Senk kravene:** Morgenstellet kan vente. Nå er det viktigst at Astrid føler seg trygg.

**5. Bruk kjente elementer:** Kanskje Astrid gjenkjenner favorittsangen sin, et bilde av familien, eller en bestemt gjenstand?

**6. Prøv igjen senere:** Kanskje et annet tidspunkt eller en annen tilnærming fungerer bedre.

**Forstå årsaken:**
Astrid har demens og gjenkjenner ikke deg. Hun er redd fordi en fremmed person prøver å kle av henne. Reaksjonen er forståelig og naturlig - den er ikke rettet mot deg som person.

**Forebygging:** Lær Astrids rutiner og preferanser. Kanskje hun foretrekker en bestemt ansatt, et bestemt tidspunkt, eller at ting gjøres i en bestemt rekkefølge.`,
    },
    {
      id: 'hov3-1-6-example-3',
      type: 'example',
      title: 'Forebygging av konflikter',
      problem: 'Du merker at det ofte oppstår konflikter på avdelingen, særlig rundt måltider og ved stell.',
      solution: `**Systematisk forebygging:**

**1. Kartlegg mønsteret:**
- Når oppstår konflikter? (tidspunkt, situasjon)
- Hvem er involvert?
- Hva utløser dem?

**2. Tilpass rutinene:**
- Er tidspunktet for måltider tilpasset beboernes ønsker?
- Har beboerne reelle valgmuligheter?
- Er bemanningen tilstrekkelig i kritiske perioder?

**3. Styrk kommunikasjonen:**
- Gi informasjon i god tid om hva som skal skje
- La beboerne medvirke i planlegging av egen hverdag
- Bruk tid på å bygge relasjoner

**4. Tilpass miljøet:**
- Er miljøet rolig nok? (støy, belysning, temperatur)
- Er det mulighet for tilbaketrekning?
- Er orienteringshjelpemidler tilgjengelige for de med demens?

**5. Styrk personalet:**
- Opplæring i konflikthåndtering og deeskalering
- Refleksjon i team om utfordrende situasjoner
- Gode avløsningsordninger for å forebygge utbrenthet`,
    },
    {
      id: 'hov3-1-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

Konflikthåndtering er en viktig profesjonell ferdighet i helse- og oppvekstfag:

- **Konflikter** kan ha mange årsaker - å forstå årsaken er nøkkelen til løsningen
- **Konflikttrappen** viser hvordan konflikter eskalerer, og at tidlig inngripen er viktig
- **Deeskalering** handler om å roe ned situasjonen gjennom ro, lytting og anerkjennelse
- **Lavaffektiv tilnærming** vektlegger å holde eget stressnivå lavt og senke krav
- **Utagerende atferd** ved demens eller psykisk lidelse er ofte uttrykk for utrygghet
- **Forebygging** handler om å tilpasse rutiner, miljø og kommunikasjon
- **Din egen sikkerhet** kommer alltid først`,
    },
  ],
  exercises: [
    {
      id: 'hov3-1-6-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er det viktigste prinsippet i deeskalering?',
      options: [
        { id: 'a', text: 'Hold deg rolig - din ro smitter', isCorrect: true },
        { id: 'b', text: 'Vær streng og tydelig', isCorrect: false },
        { id: 'c', text: 'Gi personen beskjed om å roe seg ned', isCorrect: false },
        { id: 'd', text: 'Tilkall hjelp umiddelbart', isCorrect: false },
      ],
      solution: 'Det viktigste prinsippet i deeskalering er å holde seg rolig selv. Følelser smitter (affektsmitte), og din ro har en dempende effekt på den opphissede personen. Å be noen «roe seg ned» virker ofte motsatt.',
    },
    {
      id: 'hov3-1-6-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er lavaffektiv tilnærming?',
      options: [
        { id: 'a', text: 'En metode som vektlegger å holde eget stressnivå lavt og senke krav for å unngå eskalering', isCorrect: true },
        { id: 'b', text: 'En metode der man ignorerer utagerende atferd helt', isCorrect: false },
        { id: 'c', text: 'En metode der man bruker fysisk makt for å kontrollere situasjonen', isCorrect: false },
        { id: 'd', text: 'En metode der man gir brukeren medisiner for å roe ned', isCorrect: false },
      ],
      solution: 'Lavaffektiv tilnærming (Studio 3-modellen) bygger på prinsippet om at sterke følelser smitter. Ved å holde eget stressnivå lavt, bruke rolig kroppsspråk og stemme, og senke krav i situasjonen, reduserer du brukerens stressnivå og forebygger eskalering.',
    },
    {
      id: 'hov3-1-6-ex-3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv konflikttrappen og forklar hvorfor det er viktig å gripe inn tidlig i en konflikt.',
      solution: 'Konflikttrappen har seks trinn: 1) Uenighet - saklig uenighet. 2) Personifisering - det handler om personene, ikke saken. 3) Problemutvidelse - gamle konflikter trekkes inn. 4) Kommunikasjonsbrudd - partene snakker ikke sammen. 5) Fiendebilder - den andre sees som fienden. 6) Åpen fiendtlighet - trusler eller vold. Det er viktig å gripe inn tidlig fordi: Jo høyere opp i trappen konflikten har nådd, desto vanskeligere er den å løse. På trinn 1-2 kan partene ofte løse konflikten selv med god kommunikasjon. Fra trinn 3 trengs ofte hjelp utenfra. Jo lenger konflikten pågår, desto mer skade gjør den på relasjoner og arbeidsmiljø.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-1-6-ex-4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En beboer med demens blir aggressiv under morgenstellet. Beskriv hvordan du ville håndtert situasjonen trinn for trinn, og forklar de faglige vurderingene bak hvert trinn.',
      solution: 'Trinn 1: Trekk meg tilbake og gi fysisk rom. Faglig vurdering: Nærkontakt kan oppleves truende for en person som er forvirret og redd. Trinn 2: Ro meg selv ned med pusteøvelser. Faglig vurdering: Affektsmitte - min ro smitter over til beboeren. Trinn 3: Snakk rolig med korte, enkle setninger: «Du er trygg. Jeg er her for å hjelpe.» Faglig vurdering: Komplekse setninger er vanskelige å prosessere for en person med demens i en stresssituasjon. Trinn 4: Senk kravene - morgenstellet kan vente. Faglig vurdering: Å insistere eskalerer situasjonen. Omsorg handler om timing. Trinn 5: Prøv kjente, trygge elementer (musikk, bilder, kjente gjenstander). Faglig vurdering: Gjenkjennelse kan redusere utrygghet. Trinn 6: Forsøk igjen etter en stund, kanskje med en annen tilnærming. Faglig vurdering: Demenssymptomer kan variere, og et annet tidspunkt eller en annen ansatt kan gjøre stor forskjell. Trinn 7: Dokumenter hendelsen og diskuter med teamet for å finne forebyggende tiltak.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-1-6-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva bør du gjøre FØRST når en pårørende blir sint og hever stemmen mot deg?',
      options: [
        { id: 'a', text: 'Lytte rolig og anerkjenne at den pårørende er frustrert', isCorrect: true },
        { id: 'b', text: 'Forklare at det er forbudt å heve stemmen', isCorrect: false },
        { id: 'c', text: 'Be den pårørende roe seg ned', isCorrect: false },
        { id: 'd', text: 'Kalle på vektere umiddelbart', isCorrect: false },
      ],
      solution: 'Å lytte rolig og anerkjenne frustrasjonen er det viktigste første steget. Det viser at du tar den pårørende på alvor og kan bidra til å dempe spenningen. Å be noen «roe seg ned» eller reagere med autoritet eskalerer ofte situasjonen ytterligere.',
    },
  ],
};

// ============================================================================
// Eksport av alle kapitler
// ============================================================================

export const HELSEOPPVEKST_VG3_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_HOV3_1_1,
  CHAPTER_HOV3_1_2,
  CHAPTER_HOV3_1_3,
  CHAPTER_HOV3_1_4,
  CHAPTER_HOV3_1_5,
  CHAPTER_HOV3_1_6,
];
