/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Helsearbeiderfaget VG3 - Del 4: Rehabilitering, psykisk helse og rus
 *
 * Kapittel 4.1-4.6
 * Dekker LK20 kompetansemål for helsearbeiderfaget VG3
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 4: Rehabilitering, psykisk helse og rus
// ============================================================================

// ----------------------------------------------------------------------------
// 4.1 Rehabilitering og habilitering
// ----------------------------------------------------------------------------

export const CHAPTER_HOV3_4_1: TextbookChapter = {
  id: 'hov3-4-1',
  courseId: 'helseoppvekst-vg3',
  chapterNumber: '4.1',
  title: 'Rehabilitering og habilitering',
  description: 'Rehabiliteringsprosessen, habilitering, individuell plan, tverrfaglig samarbeid.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå forskjellen mellom rehabilitering og habilitering',
    'bidra i rehabiliteringsprosesser med fokus på brukermedvirkning',
    'samarbeide tverrfaglig om individuell plan og målsetting',
  ],
  keyTerms: [
    { term: 'Rehabilitering', definition: 'Tidsavgrensede, planlagte prosesser med klare mål og virkemidler, der flere aktører samarbeider om å gi nødvendig bistand til brukerens egen innsats for å oppnå best mulig funksjons- og mestringsevne.' },
    { term: 'Habilitering', definition: 'Tilsvarende prosesser som rehabilitering, men rettet mot personer med medfødte eller tidlig ervervede funksjonsnedsettelser som trenger bistand til å utvikle og opprettholde funksjonsevne.' },
    { term: 'Individuell plan', definition: 'Et verktøy og en rettighet for personer med behov for langvarige og koordinerte helse- og omsorgstjenester. Planen skal sikre helhetlig og koordinert oppfølging.' },
    { term: 'Tverrfaglig samarbeid', definition: 'Samarbeid mellom fagpersoner fra ulike yrkesgrupper som arbeider mot felles mål for brukeren, der hver faggruppe bidrar med sin spesifikke kompetanse.' },
  ],
  content: [
    {
      id: 'hov3-4-1-intro',
      type: 'text',
      content: `## Rehabilitering og habilitering

Rehabilitering og habilitering handler om å hjelpe mennesker til å gjenvinne eller utvikle funksjonsevne og mestringsevne etter sykdom, skade eller ved funksjonsnedsettelse. Som helsefagarbeider har du en viktig rolle i disse prosessene.

**Rehabilitering** retter seg mot personer som har mistet funksjon de tidligere har hatt, for eksempel etter hjerneslag, hoftebrudd eller alvorlig sykdom. Målet er å gjenvinne mest mulig av den tapte funksjonen.

**Habilitering** retter seg mot personer med medfødte eller tidlig ervervede funksjonsnedsettelser, som utviklingshemming eller cerebral parese. Målet er å utvikle nye ferdigheter og opprettholde funksjonsevne.

Begge prosessene bygger på brukerens egen innsats, med støtte fra et tverrfaglig team. Det er brukeren som er hovedaktøren i sin egen rehabilitering.`,
    },
    {
      id: 'hov3-4-1-def-1',
      type: 'definition',
      title: 'Rehabiliteringsprosessen',
      content: `**Rehabilitering** er definert i forskrift om habilitering, rehabilitering og koordinator som tidsavgrensede, planlagte prosesser med klare mål.

**Sentrale prinsipper:**
- **Brukermedvirkning** - brukeren setter egne mål og deltar aktivt
- **Tverrfaglighet** - flere faggrupper samarbeider koordinert
- **Helhetlig tilnærming** - fysiske, psykiske og sosiale behov ivaretas
- **Målrettet arbeid** - konkrete, realistiske mål med evalueringspunkter

**Faser i rehabiliteringen:**
1. **Kartlegging** - funksjonsnivå, ressurser, ønsker og mål
2. **Målsetting** - brukeren definerer mål med støtte fra teamet
3. **Planlegging** - tiltak, ansvar og tidsplan fastsettes
4. **Gjennomføring** - brukeren trener og øver med veiledning
5. **Evaluering** - vurdere fremgang og justere tiltak ved behov`,
    },
    {
      id: 'hov3-4-1-def-2',
      type: 'definition',
      title: 'Individuell plan og koordinator',
      content: `**Individuell plan (IP)** er en rettighet for alle med behov for langvarige og koordinerte tjenester. Planen eies av brukeren og skal sikre helhetlig oppfølging.

**Planen skal inneholde:**
- Brukerens mål og ønsker
- Oversikt over tiltak og tjenester
- Ansvarlig for hvert tiltak
- Tidsplan og evalueringspunkter

**Koordinatoren:**
- Sikrer samordning mellom tjenestene
- Er brukerens faste kontaktperson
- Innkaller til ansvarsgruppemøter
- Sørger for at planen oppdateres

Som helsefagarbeider bidrar du med observasjoner, gjennomfører tiltak i det daglige, og rapporterer om brukerens funksjon og fremgang til teamet.`,
    },
    {
      id: 'hov3-4-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Rehabilitering** handler om å gjenvinne tapt funksjon etter sykdom eller skade
- **Habilitering** handler om å utvikle funksjon hos personer med medfødte funksjonsnedsettelser
- Brukeren er hovedaktør i sin egen rehabiliteringsprosess
- **Individuell plan** er en rettighet som sikrer koordinert oppfølging
- Tverrfaglig samarbeid er avgjørende for gode rehabiliteringsresultater
- Helsefagarbeideren bidrar med daglig oppfølging, observasjon og motivasjon`,
    },
  ],
  exercises: [
    {
      id: 'hov3-4-1-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er den viktigste forskjellen mellom rehabilitering og habilitering?',
      options: [
        { id: 'a', text: 'Rehabilitering gjelder gjenvinning av tapt funksjon, habilitering gjelder utvikling av funksjon ved medfødte tilstander', isCorrect: true },
        { id: 'b', text: 'Rehabilitering skjer på sykehus, habilitering skjer hjemme', isCorrect: false },
        { id: 'c', text: 'Rehabilitering er for eldre, habilitering er for barn', isCorrect: false },
        { id: 'd', text: 'Rehabilitering er kortsiktig, habilitering er langsiktig', isCorrect: false },
      ],
      solution: 'Rehabilitering retter seg mot personer som har mistet funksjon de tidligere har hatt (f.eks. etter hjerneslag), mens habilitering retter seg mot personer med medfødte eller tidlig ervervede funksjonsnedsettelser som trenger å utvikle nye ferdigheter.',
    },
    {
      id: 'hov3-4-1-ex-2',
      type: 'classic',
      difficulty: 'medium',
      task: 'En bruker har hatt hjerneslag og er lammet i venstre side. Beskriv hvordan du som helsefagarbeider kan bidra i rehabiliteringen i det daglige.',
      solution: 'Som helsefagarbeider kan du bidra ved å: 1) Oppmuntre brukeren til å bruke den affiserte siden aktivt i daglige gjøremål, f.eks. ved å legge ting på venstre side. 2) Hjelpe brukeren med øvelser som fysioterapeuten har lagt opp. 3) Tilrettelegge for at brukeren gjør mest mulig selv ved stell og påkledning. 4) Motivere og gi positiv tilbakemelding ved fremgang. 5) Observere og rapportere endringer i funksjon. 6) Samarbeide med fysioterapeut, ergoterapeut og sykepleier om felles mål.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-4-1-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvem har rett til individuell plan?',
      options: [
        { id: 'a', text: 'Alle med behov for langvarige og koordinerte helse- og omsorgstjenester', isCorrect: true },
        { id: 'b', text: 'Bare personer med utviklingshemming', isCorrect: false },
        { id: 'c', text: 'Bare personer over 67 år som bor i institusjon', isCorrect: false },
        { id: 'd', text: 'Bare personer som er innlagt på sykehus', isCorrect: false },
      ],
      solution: 'Retten til individuell plan er lovfestet i pasient- og brukerrettighetsloven og gjelder alle som har behov for langvarige og koordinerte helse- og omsorgstjenester, uavhengig av alder, diagnose eller bosted.',
    },
    {
      id: 'hov3-4-1-ex-4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva som menes med at brukeren er «hovedaktør» i sin egen rehabilitering, og hvorfor dette er viktig.',
      solution: 'At brukeren er hovedaktør betyr at rehabiliteringen tar utgangspunkt i brukerens egne mål, ønsker og motivasjon. Det er brukeren som definerer hva som er viktig å mestre, og som gjør den daglige innsatsen med trening og øving. Fagpersonene er støttespillere som tilrettelegger, veileder og motiverer. Dette er viktig fordi: 1) Brukeren kjenner sitt eget liv best. 2) Egenmotivasjon gir bedre resultater enn ytre press. 3) Brukermedvirkning er en lovfestet rettighet. 4) Det fremmer empowerment og mestringstro.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};

// ----------------------------------------------------------------------------
// 4.2 Hverdagsmestring og ADL
// ----------------------------------------------------------------------------

export const CHAPTER_HOV3_4_2: TextbookChapter = {
  id: 'hov3-4-2',
  courseId: 'helseoppvekst-vg3',
  chapterNumber: '4.2',
  title: 'Hverdagsmestring og ADL',
  description: 'Aktiviteter i dagliglivet, hverdagsrehabilitering, kartleggingsverktøy.',
  estimatedMinutes: 50,
  competenceGoals: [
    'kartlegge brukerens funksjonsnivå knyttet til daglige aktiviteter',
    'tilrettelegge for hverdagsmestring og selvstendighet',
    'bruke ADL-kartlegging som verktøy i rehabilitering',
  ],
  keyTerms: [
    { term: 'ADL', definition: 'Activities of Daily Living - dagliglivets aktiviteter som personlig hygiene, påkledning, matlaging, spising og forflytning. Deles i PADL (personlig ADL) og IADL (instrumentell ADL).' },
    { term: 'PADL', definition: 'Personlig ADL - grunnleggende egenomsorg som å vaske seg, kle seg, spise og gå på toalettet.' },
    { term: 'IADL', definition: 'Instrumentell ADL - mer sammensatte aktiviteter som matlaging, handling, husarbeid, økonomi og bruk av telefon/teknologi.' },
    { term: 'Hverdagsrehabilitering', definition: 'En tidsavgrenset rehabiliteringsform som foregår i brukerens hjem og nærmiljø, med fokus på å gjenvinne mestring av hverdagsaktiviteter.' },
    { term: 'Kartleggingsverktøy', definition: 'Standardiserte verktøy som brukes for å vurdere brukerens funksjonsnivå, for eksempel Barthel ADL-indeks eller IPLOS.' },
  ],
  content: [
    {
      id: 'hov3-4-2-intro',
      type: 'text',
      content: `## Hverdagsmestring og ADL

Hverdagsmestring handler om å klare dagliglivets aktiviteter mest mulig selvstendig. For mange brukere i helse- og omsorgstjenesten er det nettopp de hverdagslige aktivitetene som betyr mest for livskvaliteten: å kunne dusje selv, lage seg frokost eller gå tur i nabolaget.

**ADL** (Activities of Daily Living) er et sentralt begrep som deler dagliglivets aktiviteter i to nivåer:

- **PADL (personlig ADL):** Grunnleggende egenomsorg som hygiene, påkledning, spising og toalettbesøk
- **IADL (instrumentell ADL):** Mer komplekse aktiviteter som matlaging, husarbeid, handling, økonomistyring og transport

Helsefagarbeiderens oppgave er å kartlegge brukerens funksjonsnivå og tilrettelegge for at brukeren kan mestre mest mulig selv, fremfor å overta oppgavene.`,
    },
    {
      id: 'hov3-4-2-def-1',
      type: 'definition',
      title: 'Hverdagsrehabilitering',
      content: `**Hverdagsrehabilitering** er en tidsavgrenset, intensiv rehabiliteringsform som foregår i brukerens eget hjem og nærmiljø.

**Kjennetegn:**
- Brukeren setter egne mål for hva hun/han vil mestre
- Treningen skjer i brukerens egne omgivelser med kjente gjenstander
- Et tverrfaglig team med ergoterapeut, fysioterapeut og helsefagarbeider samarbeider
- Helsefagarbeideren gjennomfører daglig trening etter oppsatt program
- Typisk varighet: 4-12 uker

**Hva spør vi brukeren?**
«Hva er viktig for deg?» - dette spørsmålet er kjernen i hverdagsrehabilitering. Svaret danner grunnlaget for mål og tiltak.

**Eksempel:** En eldre kvinne sier at det viktigste for henne er å kunne gå til butikken og handle selv. Da rettes treningen mot gangfunksjon, balanse og utholdenhet.`,
    },
    {
      id: 'hov3-4-2-def-2',
      type: 'definition',
      title: 'ADL-kartlegging',
      content: `**ADL-kartlegging** er systematisk vurdering av brukerens funksjonsnivå i daglige aktiviteter.

**Barthel ADL-indeks** er et mye brukt verktøy som vurderer:
- Spising, forflytning, personlig hygiene
- Toalettbesøk, bading/dusjing
- Gangfunksjon, trapper
- Påkledning, kontinens (blære og tarm)

Skåren gir et bilde av selvstendighetsgrad fra 0 (helt avhengig) til 100 (helt selvstendig).

**IPLOS** (Individbasert pleie- og omsorgsstatistikk) brukes i kommunene for å kartlegge bistandsbehov og dokumentere funksjonsnivå.

**Viktig for helsefagarbeideren:**
- Observer hva brukeren faktisk gjør, ikke bare hva du tror
- Kartlegg både det brukeren mestrer og det som er vanskelig
- Gjenta kartlegging jevnlig for å fange opp endringer`,
    },
    {
      id: 'hov3-4-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **ADL** deles i PADL (personlig) og IADL (instrumentell) og dekker alle dagliglivets aktiviteter
- **Hverdagsrehabilitering** er intensiv trening i hjemmet med fokus på brukerens egne mål
- Spørsmålet «Hva er viktig for deg?» er utgangspunktet for hverdagsrehabilitering
- **Kartleggingsverktøy** som Barthel-indeks og IPLOS brukes for å vurdere funksjonsnivå
- Helsefagarbeideren skal tilrettelegge for mestring, ikke overta oppgavene`,
    },
  ],
  exercises: [
    {
      id: 'hov3-4-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er forskjellen mellom PADL og IADL?',
      options: [
        { id: 'a', text: 'PADL er grunnleggende egenomsorg som hygiene og påkledning, IADL er mer sammensatte aktiviteter som matlaging og handling', isCorrect: true },
        { id: 'b', text: 'PADL er fysiske aktiviteter, IADL er psykiske aktiviteter', isCorrect: false },
        { id: 'c', text: 'PADL er aktiviteter man gjør alene, IADL er aktiviteter man gjør med andre', isCorrect: false },
        { id: 'd', text: 'PADL gjelder barn, IADL gjelder voksne', isCorrect: false },
      ],
      solution: 'PADL (personlig ADL) omfatter grunnleggende egenomsorgsaktiviteter som personlig hygiene, påkledning, spising og toalettbesøk. IADL (instrumentell ADL) omfatter mer sammensatte aktiviteter som krever høyere kognitiv funksjon, som matlaging, husarbeid, handling, økonomistyring og bruk av transport.',
    },
    {
      id: 'hov3-4-2-ex-2',
      type: 'classic',
      difficulty: 'medium',
      task: 'En bruker sier: «Det viktigste for meg er å kunne lage middag til barnebarna mine igjen.» Beskriv hvordan du som helsefagarbeider kan tilrettelegge for dette gjennom hverdagsrehabilitering.',
      solution: 'Tilrettelegging kan innebære: 1) Kartlegge hva brukeren trenger for å lage middag - stå ved kjøkkenbenken, løfte gryter, skjære grønnsaker osv. 2) Identifisere begrensninger sammen med ergoterapeut - f.eks. redusert kraft, balanse eller utholdenhet. 3) Trene gradvis på deloppgaver - starte med enkle retter sittende ved kjøkkenbordet. 4) Tilrettelegge med hjelpemidler - sklisikker matte, ergonomiske kniver, arbeidsstol. 5) Øke krav gradvis - fra å smøre brødskiver til å lage enkle middagsretter. 6) Evaluere jevnlig og justere mål og tiltak.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-4-2-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er det sentrale spørsmålet i hverdagsrehabilitering?',
      options: [
        { id: 'a', text: '«Hva er viktig for deg?»', isCorrect: true },
        { id: 'b', text: '«Hva er diagnosen din?»', isCorrect: false },
        { id: 'c', text: '«Hva trenger du hjelp til?»', isCorrect: false },
        { id: 'd', text: '«Hva sier legen din?»', isCorrect: false },
      ],
      solution: 'Spørsmålet «Hva er viktig for deg?» er kjernen i hverdagsrehabilitering. Det sikrer at rehabiliteringen tar utgangspunkt i brukerens egne mål og ønsker, ikke i hva helsepersonell mener er viktigst. Dette fremmer motivasjon og eierskap til prosessen.',
    },
  ],
};

// ----------------------------------------------------------------------------
// 4.3 Hjelpemidler og tilrettelegging
// ----------------------------------------------------------------------------

export const CHAPTER_HOV3_4_3: TextbookChapter = {
  id: 'hov3-4-3',
  courseId: 'helseoppvekst-vg3',
  chapterNumber: '4.3',
  title: 'Hjelpemidler og tilrettelegging',
  description: 'Tekniske hjelpemidler, velferdsteknologi, universell utforming, NAV Hjelpemiddelsentral.',
  estimatedMinutes: 50,
  competenceGoals: [
    'veilede brukere om aktuelle hjelpemidler og velferdsteknologi',
    'bidra til tilrettelegging av bolig og aktiviteter for økt selvstendighet',
    'kjenne til søknadsprosessen for hjelpemidler via NAV Hjelpemiddelsentral',
  ],
  keyTerms: [
    { term: 'Tekniske hjelpemidler', definition: 'Utstyr og løsninger som kompenserer for nedsatt funksjon og bidrar til økt selvstendighet, som rullestol, hørselapparat, gåstol eller gripetang.' },
    { term: 'Velferdsteknologi', definition: 'Teknologiske løsninger som bidrar til økt trygghet, sikkerhet, sosial deltakelse og mobilitet, som GPS-sporing, digitalt tilsyn, medisindispensere og trygghetsalarmer.' },
    { term: 'Universell utforming', definition: 'Utforming av produkter og omgivelser slik at de kan brukes av alle mennesker i så stor utstrekning som mulig, uten behov for tilpasning eller spesiell utforming.' },
    { term: 'NAV Hjelpemiddelsentral', definition: 'Statlig virksomhet som låner ut hjelpemidler til personer med varig funksjonsnedsettelse, og som gir rådgivning om tilrettelegging og hjelpemiddelvalg.' },
  ],
  content: [
    {
      id: 'hov3-4-3-intro',
      type: 'text',
      content: `## Hjelpemidler og tilrettelegging

Riktige hjelpemidler og god tilrettelegging kan utgjøre forskjellen mellom avhengighet og selvstendighet for mange brukere. Som helsefagarbeider må du kjenne til aktuelle hjelpemidler, kunne veilede brukere, og bidra til at hjelpemidlene brukes riktig.

**Hjelpemidler deles ofte inn etter funksjon:**

- **Forflytning:** rullestol, gåstol, rullator, krykker
- **Personlig stell:** badestol, toalettforhøyer, gripetang, strømpepåtrekker
- **Kommunikasjon:** høreapparat, forstørrelsesglass, talemaskiner
- **Kognisjon:** kalender med påminnelser, medisindispenser, tidtakere
- **Sikkerhet:** trygghetsalarm, fallsensor, GPS-sporing

Hjelpemidler for varig bruk (over to år) lånes ut gratis fra NAV Hjelpemiddelsentral. Kommunens ergoterapeut bistår med kartlegging og søknad.`,
    },
    {
      id: 'hov3-4-3-def-1',
      type: 'definition',
      title: 'Velferdsteknologi',
      content: `**Velferdsteknologi** er teknologiske løsninger som fremmer trygghet, mestring og sosial deltakelse i helse- og omsorgstjenesten.

**Kategorier:**
- **Trygghets- og sikkerhetsteknologi:** trygghetsalarm, fallsensor, komfyrvakt, døralarm, digitalt nattetilsyn
- **Kompensasjons- og velværeteknologi:** robotstøvsuger, medisindispenser, automatisk lysstyring
- **Sosial kontakt:** videokommunikasjon, sosiale roboter, nettbrett for eldre
- **Behandlings- og mestringsteknologi:** avstandsoppfølging, digitale egenrapporteringsverktøy

**Viktig ved innføring:**
- Brukeren må samtykke og forstå hva teknologien innebærer
- Opplæring er avgjørende for at teknologien tas i bruk
- Teknologi skal supplere, ikke erstatte, menneskelig kontakt
- Personvern og etiske hensyn må ivaretas`,
    },
    {
      id: 'hov3-4-3-def-2',
      type: 'definition',
      title: 'Universell utforming og tilrettelegging',
      content: `**Universell utforming** betyr at omgivelsene utformes slik at de fungerer for alle, uten behov for spesialløsninger.

**Eksempler på universell utforming:**
- Trinnfri adkomst og brede dører
- God belysning og kontrastfarger
- Ledelinjer og taktile markører
- Heis med tale og punktskrift
- Tilgjengelige toaletter

**Individuell tilrettelegging** går utover universell utforming og tilpasses den enkelte brukers behov:
- Fjerne terskler og løse tepper for å forebygge fall
- Montere støttehåndtak på bad og toalett
- Tilpasse kjøkkenhøyde for rullestolbruker
- Installere rampe eller trappeheis

Helsefagarbeideren observerer brukerens hverdag og melder fra om behov for tilrettelegging til ergoterapeut eller koordinator.`,
    },
    {
      id: 'hov3-4-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Hjelpemidler** kompenserer for nedsatt funksjon og fremmer selvstendighet
- NAV Hjelpemiddelsentral låner ut hjelpemidler ved varig behov (over to år)
- **Velferdsteknologi** gir økt trygghet og mestring, men skal supplere menneskelig kontakt
- **Universell utforming** gjør omgivelsene tilgjengelige for alle
- Individuell tilrettelegging tilpasses den enkelte brukers behov
- Helsefagarbeideren har en viktig rolle i å veilede om hjelpemidler og melde fra om tilretteleggingsbehov`,
    },
  ],
  exercises: [
    {
      id: 'hov3-4-3-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er velferdsteknologi?',
      options: [
        { id: 'a', text: 'Teknologiske løsninger som fremmer trygghet, mestring og sosial deltakelse', isCorrect: true },
        { id: 'b', text: 'Medisinsk utstyr som brukes på sykehus', isCorrect: false },
        { id: 'c', text: 'Dataprogrammer som brukes av helsepersonell til dokumentasjon', isCorrect: false },
        { id: 'd', text: 'Treningsapparater brukt i fysioterapi', isCorrect: false },
      ],
      solution: 'Velferdsteknologi er teknologiske løsninger som bidrar til økt trygghet, sikkerhet, sosial deltakelse, mobilitet og mestring. Eksempler er trygghetsalarm, digitalt tilsyn, medisindispenser og GPS-sporing.',
    },
    {
      id: 'hov3-4-3-ex-2',
      type: 'classic',
      difficulty: 'medium',
      task: 'En eldre bruker med begynnende demens bor alene hjemme. Pårørende er bekymret for sikkerheten. Foreslå aktuelle velferdsteknologiske løsninger og begrunn valgene dine.',
      solution: 'Aktuelle løsninger: 1) Trygghetsalarm - brukeren kan tilkalle hjelp ved fall eller akutt sykdom. 2) GPS-sporing - gir trygghet dersom brukeren går seg bort. 3) Komfyrvakt - slår av komfyren automatisk ved fare for brann. 4) Dørsensor/alarm - varsler pårørende eller hjemmetjenesten dersom brukeren forlater boligen om natten. 5) Medisindispenser - sikrer at medisiner tas til rett tid. 6) Digitalt tilsyn - kan erstatte fysisk nattilsyn. Alle løsninger krever samtykke, og brukeren bør delta i beslutningen. Løsningene skal gi trygghet uten å krenke brukerens verdighet og selvbestemmelse.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-4-3-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva menes med universell utforming?',
      options: [
        { id: 'a', text: 'Utforming av produkter og omgivelser slik at de kan brukes av alle mennesker uten behov for spesialtilpasning', isCorrect: true },
        { id: 'b', text: 'Spesialtilpasning av boliger for rullestolbrukere', isCorrect: false },
        { id: 'c', text: 'Utforming av medisinsk utstyr etter internasjonale standarder', isCorrect: false },
        { id: 'd', text: 'Krav til brannvern i offentlige bygninger', isCorrect: false },
      ],
      solution: 'Universell utforming betyr at produkter, bygninger og uteområder utformes slik at de kan brukes av alle i størst mulig grad, uten behov for spesialtilpasning. Dette inkluderer trinnfri adkomst, god belysning, kontrastfarger og tilgjengelige toaletter.',
    },
    {
      id: 'hov3-4-3-ex-4',
      type: 'classic',
      difficulty: 'lett',
      task: 'Gi tre eksempler på hjelpemidler som kan hjelpe en bruker med redusert håndfunksjon å klare seg mer selvstendig i daglige aktiviteter.',
      solution: 'Eksempler på hjelpemidler ved redusert håndfunksjon: 1) Gripetang - gjør det mulig å plukke opp gjenstander fra gulvet uten å bøye seg. 2) Ergonomiske bestikk med tykt grep - lettere å holde for personer med nedsatt gripestyrke. 3) Strømpepåtrekker - gjør det mulig å ta på sokker og strømper uten å bøye seg og uten behov for finmotorisk grep. Andre eksempler kan være knappekrok for å kneppe knapper, åpnehjelp for glass og bokser, eller sklisikker matte som holder tallerkenen på plass.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};

// ----------------------------------------------------------------------------
// 4.4 Psykiske lidelser og miljøarbeid
// ----------------------------------------------------------------------------

export const CHAPTER_HOV3_4_4: TextbookChapter = {
  id: 'hov3-4-4',
  courseId: 'helseoppvekst-vg3',
  chapterNumber: '4.4',
  title: 'Psykiske lidelser og miljøarbeid',
  description: 'Vanlige psykiske lidelser, miljøterapeutiske tiltak, recovery-orientert tilnærming.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjenkjenne symptomer på vanlige psykiske lidelser',
    'anvende miljøterapeutiske prinsipper i arbeid med mennesker med psykiske lidelser',
    'fremme recovery og brukermedvirkning i psykisk helsearbeid',
  ],
  keyTerms: [
    { term: 'Psykisk lidelse', definition: 'En tilstand som påvirker tanker, følelser og atferd i en grad som gir betydelig funksjonsnedsettelse og/eller subjektiv lidelse. Eksempler er depresjon, angst, bipolar lidelse og schizofreni.' },
    { term: 'Miljøterapi', definition: 'En behandlingsform der det bevisste og planlagte samspillet mellom bruker og miljøpersonale brukes som terapeutisk virkemiddel. Hverdagens aktiviteter og relasjoner er sentrale.' },
    { term: 'Recovery', definition: 'En personlig prosess der mennesker med psykiske lidelser utvikler et meningsfullt liv med håp, identitet og deltakelse, uavhengig av om symptomene forsvinner helt.' },
    { term: 'Miljøterapeutiske prinsipper', definition: 'Grunnprinsipper i miljøterapi som inkluderer struktur og forutsigbarhet, relasjon og tillit, aktivitet og deltakelse, samt grensesetting og ansvar.' },
    { term: 'Psykose', definition: 'En tilstand der personen mister kontakten med virkeligheten, med symptomer som hallusinasjoner, vrangforestillinger og desorganisert tenkning.' },
  ],
  content: [
    {
      id: 'hov3-4-4-intro',
      type: 'text',
      content: `## Psykiske lidelser og miljøarbeid

Psykiske lidelser er svært utbredt og rammer omtrent halvparten av befolkningen i løpet av livet. Som helsefagarbeider vil du møte mennesker med psykiske lidelser i alle deler av helse- og omsorgstjenesten.

**Vanlige psykiske lidelser:**

- **Depresjon:** Vedvarende nedstemthet, tap av interesse og glede, energimangel, søvnproblemer, konsentrasjonsvansker
- **Angstlidelser:** Overdreven frykt og bekymring som hemmer daglig fungering. Inkluderer generalisert angst, panikklidelse, sosial angst og fobier
- **Bipolar lidelse:** Veksling mellom perioder med depresjon og perioder med oppstemthet (mani/hypomani)
- **Psykoselidelser:** Tap av kontakt med virkeligheten, hallusinasjoner og vrangforestillinger. Schizofreni er den vanligste formen

Miljøarbeid og miljøterapi er viktige tilnærminger i arbeidet med mennesker med psykiske lidelser.`,
    },
    {
      id: 'hov3-4-4-def-1',
      type: 'definition',
      title: 'Miljøterapi',
      content: `**Miljøterapi** er en behandlingsform der hverdagens aktiviteter, rutiner og relasjoner brukes bevisst og planlagt som terapeutiske virkemidler.

**Miljøterapeutiske grunnprinsipper:**

**1. Struktur og forutsigbarhet** - faste rutiner, dagsplan, tydelige forventninger gir trygghet

**2. Relasjon og tillit** - den terapeutiske relasjonen er det viktigste verktøyet

**3. Aktivitet og deltakelse** - meningsfulle aktiviteter fremmer mestring og selvfølelse

**4. Grensesetting** - tydelige, forutsigbare grenser gir trygghet og beskyttelse

**5. Ansvar og medbestemmelse** - brukeren tar gradvis mer ansvar for eget liv

**Helsefagarbeiderens rolle:**
- Være en trygg og forutsigbar voksenperson
- Tilrettelegge for aktivitet og deltakelse
- Observere og rapportere endringer i brukerens tilstand
- Følge behandlingsplan og miljøregler konsekvent`,
    },
    {
      id: 'hov3-4-4-def-2',
      type: 'definition',
      title: 'Recovery-orientert tilnærming',
      content: `**Recovery** handler om at mennesker med psykiske lidelser kan leve meningsfulle og tilfredsstillende liv, også når symptomer vedvarer.

**CHIME-rammeverket for recovery:**

- **C - Connectedness:** Tilhørighet og sosiale relasjoner
- **H - Hope:** Håp om et godt liv og tro på endring
- **I - Identity:** En positiv identitet utover sykdomsrollen
- **M - Meaning:** Mening og formål i livet
- **E - Empowerment:** Kontroll over eget liv og egne valg

**Recovery-orientert praksis innebærer:**
- Brukeren definerer hva recovery betyr for seg
- Fokus på styrker og ressurser, ikke bare symptomer
- Helsepersonell er støttespiller, ikke ekspert på brukerens liv
- Verdien av erfaringskompetanse anerkjennes
- Håp formidles aktivt - bedring er mulig`,
    },
    {
      id: 'hov3-4-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Psykiske lidelser er svært vanlige og inkluderer depresjon, angst, bipolar lidelse og psykose
- **Miljøterapi** bruker hverdagens aktiviteter og relasjoner som terapeutiske virkemidler
- Struktur, forutsigbarhet, relasjon og aktivitet er sentrale miljøterapeutiske prinsipper
- **Recovery** handler om å leve et meningsfullt liv, ikke nødvendigvis å bli symptomfri
- CHIME-rammeverket beskriver sentrale elementer i recovery: tilhørighet, håp, identitet, mening og empowerment
- Helsefagarbeideren har en viktig rolle som trygg, forutsigbar relasjonsperson i miljøterapeutisk arbeid`,
    },
  ],
  exercises: [
    {
      id: 'hov3-4-4-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er miljøterapi?',
      options: [
        { id: 'a', text: 'En behandlingsform der hverdagens aktiviteter, rutiner og relasjoner brukes bevisst som terapeutiske virkemidler', isCorrect: true },
        { id: 'b', text: 'Behandling av psykiske lidelser med medisiner', isCorrect: false },
        { id: 'c', text: 'Terapi som foregår utendørs i naturen', isCorrect: false },
        { id: 'd', text: 'Samtalebehandling hos psykolog', isCorrect: false },
      ],
      solution: 'Miljøterapi er en behandlingsform der det bevisste og planlagte samspillet mellom bruker og personale brukes som terapeutisk virkemiddel. Hverdagens rutiner, aktiviteter og relasjoner er de sentrale verktøyene.',
    },
    {
      id: 'hov3-4-4-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva står CHIME for i recovery-rammeverket?',
      options: [
        { id: 'a', text: 'Connectedness, Hope, Identity, Meaning, Empowerment', isCorrect: true },
        { id: 'b', text: 'Care, Health, Independence, Medication, Exercise', isCorrect: false },
        { id: 'c', text: 'Communication, Healing, Integrity, Motivation, Evaluation', isCorrect: false },
        { id: 'd', text: 'Community, Happiness, Inclusion, Management, Equality', isCorrect: false },
      ],
      solution: 'CHIME-rammeverket beskriver fem sentrale elementer i recovery: Connectedness (tilhørighet), Hope (håp), Identity (identitet), Meaning (mening) og Empowerment (myndiggjøring). Disse elementene er viktige for at mennesker med psykiske lidelser skal kunne leve meningsfulle liv.',
    },
    {
      id: 'hov3-4-4-ex-3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Du jobber på en psykiatrisk avdeling og en bruker med depresjon vil ligge i sengen hele dagen. Beskriv hvordan du bruker miljøterapeutiske prinsipper for å hjelpe brukeren.',
      solution: 'Miljøterapeutisk tilnærming: 1) Relasjon - gå inn på rommet, sett deg ned, vis at du bryr deg. Ikke krev noe med en gang. 2) Struktur - referer til dagsplanen: «Nå er det frokosttid, og vi har avtalt at du prøver å komme til frokostbordet.» 3) Aktivitet - start med en liten, overkommelig oppgave. «Kanskje du kan sitte opp i sengen og ta en kopp te?» Gradvis økning. 4) Grensesetting - vær tydelig men varm: «Jeg forstår at det er tungt, men det er viktig at du ikke ligger hele dagen. La oss finne noe du kan klare.» 5) Mestring - anerkjenn det brukeren klarer: «Bra at du kom deg opp og spiste frokost i dag.» Dokumenter observasjoner og rapporter til teamet.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-4-4-ex-4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva recovery-orientert tilnærming betyr i praksis, og hvordan den skiller seg fra en tradisjonell medisinsk tilnærming til psykisk helse.',
      solution: 'Recovery-orientert tilnærming: Brukeren er ekspert på sitt eget liv. Fokus er på å leve et meningsfullt liv, ikke nødvendigvis å bli symptomfri. Styrker og ressurser vektlegges. Brukeren setter egne mål. Håp og tro på endring formidles aktivt. Erfaringskompetanse verdsettes. Tradisjonell medisinsk tilnærming: Fagpersonene er ekspertene. Fokus er på symptomreduksjon og diagnose. Begrensninger og patologi vektlegges. Fagpersonene setter behandlingsmål. Behandlingen er standardisert. Forskjellen ligger i maktbalansen - recovery gir makten tilbake til brukeren og anerkjenner at et godt liv er mulig selv med psykisk sykdom.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};

// ----------------------------------------------------------------------------
// 4.5 Rus og avhengighet
// ----------------------------------------------------------------------------

export const CHAPTER_HOV3_4_5: TextbookChapter = {
  id: 'hov3-4-5',
  courseId: 'helseoppvekst-vg3',
  chapterNumber: '4.5',
  title: 'Rus og avhengighet',
  description: 'Rusmidler, avhengighet, rusbehandling, skadereduksjon, LAR.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå hva rusmiddelavhengighet er og hvordan det påvirker fysisk og psykisk helse',
    'kjenne til ulike behandlingstilnærminger ved rusavhengighet',
    'møte mennesker med ruslidelser med respekt og uten fordommer',
  ],
  keyTerms: [
    { term: 'Rusmiddelavhengighet', definition: 'En tilstand der personen har mistet kontrollen over rusmiddelbruken og fortsetter å bruke til tross for negative konsekvenser. Kjennetegnes av toleranseutvikling, abstinens og sug.' },
    { term: 'LAR', definition: 'Legemiddelassistert rehabilitering - behandling av opioidavhengighet med substitusjonsmedisiner som metadon eller buprenorfin, kombinert med psykososial oppfølging.' },
    { term: 'Skadereduksjon', definition: 'Strategier og tiltak som har som mål å redusere de negative konsekvensene av rusmiddelbruk, uten nødvendigvis å kreve rusfrihet. Eksempler er sprøyterom og nalokson-utdeling.' },
    { term: 'Abstinens', definition: 'Fysiske og psykiske plager som oppstår når en person med avhengighet slutter å bruke rusmidlet. Symptomene varierer med type rusmiddel.' },
    { term: 'ROP-lidelse', definition: 'Samtidig ruslidelse og psykisk lidelse (rus og psykiatri). Svært vanlig og krever integrert behandling av begge tilstander.' },
  ],
  content: [
    {
      id: 'hov3-4-5-intro',
      type: 'text',
      content: `## Rus og avhengighet

Rusmiddelavhengighet er en alvorlig helsetilstand som påvirker kropp, psyke og sosial fungering. Som helsefagarbeider vil du møte mennesker med ruslidelser i ulike deler av helsetjenesten - ikke bare i rusbehandling, men også i sykehus, sykehjem og hjemmetjeneste.

**De vanligste rusmidlene i Norge:**

- **Alkohol:** Det mest brukte rusmidlet. Kan gi lever- og hjerneskader, kreft og psykiske lidelser
- **Cannabis:** Det mest brukte illegale rusmidlet. Kan utløse angst, psykose og motivasjonsproblemer
- **Opioider:** Heroin, morfin, oksykodon. Sterk fysisk avhengighet, overdoserisiko
- **Sentralstimulerende:** Amfetamin, kokain. Gir energi og eufori, men kan føre til psykose og hjerteskade
- **Benzodiazepiner:** Angstdempende medisiner som Sobril, Valium. Avhengighetsskapende ved langvarig bruk

Rusavhengighet er anerkjent som en sykdom og gir rett til behandling i spesialisthelsetjenesten (TSB - Tverrfaglig spesialisert behandling).`,
    },
    {
      id: 'hov3-4-5-def-1',
      type: 'definition',
      title: 'Avhengighet og rusbehandling',
      content: `**Avhengighet** utvikler seg gradvis og kjennetegnes av:
- **Toleranse** - trenger stadig mer for å oppnå samme virkning
- **Abstinens** - fysiske og psykiske plager ved opphold i bruken
- **Kontrollsvikt** - klarer ikke å begrense bruken
- **Sug (craving)** - intens trang til rusmidlet
- **Fortsatt bruk** - til tross for klare negative konsekvenser

**Behandlingsformer:**
- **Avrusning** - medisinsk overvåket nedtrapping av rusmidlet
- **Døgnbehandling** - opphold på behandlingsinstitusjon i uker/måneder
- **Poliklinisk behandling** - samtaler og oppfølging uten innleggelse
- **LAR** - legemiddelassistert rehabilitering ved opioidavhengighet
- **Selvhjelpsgrupper** - AA, NA og lignende nettverk

Behandling er mest effektiv når den kombinerer medisinsk, psykologisk og sosial tilnærming.`,
    },
    {
      id: 'hov3-4-5-def-2',
      type: 'definition',
      title: 'Skadereduksjon',
      content: `**Skadereduksjon** er en pragmatisk tilnærming som tar sikte på å redusere skadevirkninger av rusmiddelbruk, uten nødvendigvis å kreve total rusfrihet.

**Eksempler på skadereduksjonstiltak i Norge:**
- **Brukerrom** - overvåkede lokaler der brukere kan innta rusmidler trygt
- **Nalokson-utdeling** - nesespray som reverserer opioidoverdoser
- **Sprøyteutdeling** - forebygger smitte av hepatitt og HIV
- **Lavterskel helsetilbud** - helsetjenester uten krav om rusfrihet

**Helsefagarbeiderens holdninger:**
- Møt brukeren med respekt og verdighet, uavhengig av rusmiddelbruk
- Unngå moralisering og fordømmelse
- Forstå at avhengighet er en sykdom, ikke en moralsk svakhet
- Mange har opplevd traumer, vold eller omsorgssvikt
- Små endringer bør anerkjennes og verdsettes`,
    },
    {
      id: 'hov3-4-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Rusavhengighet er en sykdom som kjennetegnes av toleranse, abstinens, kontrollsvikt og sug
- De vanligste rusmidlene i Norge er alkohol, cannabis, opioider, sentralstimulerende og benzodiazepiner
- **LAR** gir substitusjonsbehandling ved opioidavhengighet
- **Skadereduksjon** reduserer skadevirkninger uten å kreve rusfrihet
- **ROP-lidelse** betyr samtidig ruslidelse og psykisk lidelse
- Helsefagarbeideren skal møte mennesker med ruslidelser med respekt og uten fordommer`,
    },
  ],
  exercises: [
    {
      id: 'hov3-4-5-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva kjennetegner rusmiddelavhengighet?',
      options: [
        { id: 'a', text: 'Toleranseutvikling, abstinens, kontrollsvikt og sug etter rusmidlet', isCorrect: true },
        { id: 'b', text: 'At man har prøvd et rusmiddel minst én gang', isCorrect: false },
        { id: 'c', text: 'At man drikker alkohol i helgene', isCorrect: false },
        { id: 'd', text: 'At man bruker smertestillende medisiner etter operasjon', isCorrect: false },
      ],
      solution: 'Rusmiddelavhengighet kjennetegnes av toleranseutvikling (trenger mer for samme virkning), abstinens (plager ved å slutte), kontrollsvikt (klarer ikke begrense bruken) og sug/craving (intens trang til rusmidlet). Det handler om tap av kontroll, ikke om bruk i seg selv.',
    },
    {
      id: 'hov3-4-5-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er LAR?',
      options: [
        { id: 'a', text: 'Legemiddelassistert rehabilitering - behandling av opioidavhengighet med substitusjonsmedisiner og psykososial oppfølging', isCorrect: true },
        { id: 'b', text: 'Langvarig akutt rusbehandling - intensiv avrusning over lang tid', isCorrect: false },
        { id: 'c', text: 'Lovpålagt alkoholrehabilitering - tvungen behandling av alkoholisme', isCorrect: false },
        { id: 'd', text: 'Læringsassistert rusforebygging - et opplæringsprogram for ungdom', isCorrect: false },
      ],
      solution: 'LAR (Legemiddelassistert rehabilitering) er behandling av opioidavhengighet der brukeren får substitusjonsmedisiner som metadon eller buprenorfin (Subutex/Suboxone). Medisinene demper sug og abstinens, slik at brukeren kan fokusere på rehabilitering. LAR kombineres med psykososial oppfølging.',
    },
    {
      id: 'hov3-4-5-ex-3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva skadereduksjon er og gi to eksempler på skadereduksjonstiltak i Norge.',
      solution: 'Skadereduksjon er en tilnærming som tar sikte på å redusere skadevirkningene av rusmiddelbruk, uten nødvendigvis å kreve total rusfrihet. Tilnærmingen anerkjenner at noen mennesker ikke klarer eller ønsker å slutte med rusmidler, og fokuserer derfor på å redusere helseskader og dødsfall. Eksempler: 1) Nalokson nesespray - utdeles til brukere og pårørende og kan reversere opioidoverdoser og redde liv. 2) Brukerrom/sprøyterom - overvåkede lokaler der brukere kan innta rusmidler under trygge, hygieniske forhold med helsepersonell tilgjengelig. Andre eksempler er sprøyteutdeling og lavterskel helsetilbud.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-4-5-ex-4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hvorfor er det viktig at helsefagarbeidere møter mennesker med ruslidelser uten fordommer? Reflekter over egne holdninger.',
      solution: 'Det er viktig fordi: 1) Avhengighet er en sykdom, ikke en moralsk svakhet. Hjernen endres ved langvarig rusmiddelbruk, noe som gjør det vanskelig å slutte. 2) Fordommer og stigma er barrierer for å søke hjelp. Mange unngår helsetjenester av frykt for å bli dømt. 3) Mange med ruslidelser har opplevd traumer, omsorgssvikt eller psykiske lidelser som bidrar til rusmiddelbruken. 4) En respektfull holdning bygger tillit og relasjon, som er avgjørende for god behandling. 5) Alle mennesker har rett til likeverdige helsetjenester uavhengig av livssituasjon. Egne holdninger kan bevisstgjøres gjennom refleksjon over forforståelse og eventuelle fordommer man bærer med seg.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};

// ----------------------------------------------------------------------------
// 4.6 Demens og demensomsorg
// ----------------------------------------------------------------------------

export const CHAPTER_HOV3_4_6: TextbookChapter = {
  id: 'hov3-4-6',
  courseId: 'helseoppvekst-vg3',
  chapterNumber: '4.6',
  title: 'Demens og demensomsorg',
  description: 'Demenstyper, symptomer, personsentrert omsorg, kommunikasjon og miljøtiltak.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå hva demens er og kjenne til de vanligste demenstypene',
    'anvende personsentrert omsorg i arbeid med mennesker med demens',
    'tilrettelegge miljø og kommunikasjon for mennesker med demens',
  ],
  keyTerms: [
    { term: 'Demens', definition: 'En fellesbetegnelse for flere hjernesykdommer som fører til gradvis tap av kognitive funksjoner som hukommelse, orientering, språk og dømmekraft. Alzheimers sykdom er den vanligste formen.' },
    { term: 'Personsentrert omsorg', definition: 'Tom Kitwoods tilnærming som setter personen, ikke sykdommen, i sentrum. Personen med demens skal anerkjennes som et unikt individ med egne behov, ønsker og livshistorie.' },
    { term: 'Alzheimers sykdom', definition: 'Den vanligste demensformen (60-70 % av tilfellene). Kjennetegnes av gradvis innsettende hukommelsestap, spesielt for nylige hendelser, og langsom forverring over mange år.' },
    { term: 'BPSD', definition: 'Behavioral and Psychological Symptoms of Dementia - atferdsmessige og psykologiske symptomer ved demens som uro, aggresjon, vandring, angst og vrangforestillinger.' },
    { term: 'Realitetsorientering', definition: 'Teknikk der man forsiktig hjelper personen med demens å orientere seg om tid, sted og situasjon, for eksempel ved bruk av klokker, kalendere og bilder.' },
  ],
  content: [
    {
      id: 'hov3-4-6-intro',
      type: 'text',
      content: `## Demens og demensomsorg

Demens er blant de mest utbredte sykdommene i eldreomsorgen. Over 100 000 mennesker i Norge lever med demens, og tallet øker i takt med en aldrende befolkning. Som helsefagarbeider vil du jobbe tett med mennesker med demens, enten i hjemmetjenesten, på sykehjem eller i tilrettelagte botilbud.

**De vanligste demenstypene:**

- **Alzheimers sykdom** (60-70 %): Gradvis tap av hukommelse, særlig nærhukommelse. Langsom forverring
- **Vaskulær demens** (15-20 %): Forårsaket av hjerneinfarkt eller dårlig blodtilførsel til hjernen. Ofte trinnvis forverring
- **Lewy body-demens** (10-15 %): Svingninger i oppmerksomhet, synshallusinasjoner, parkinsonisme
- **Frontotemporal demens** (5-10 %): Endringer i personlighet, atferd og språk. Rammer ofte yngre

Demens er en progressiv sykdom uten helbredende behandling, men god omsorg og tilrettelegging kan bremse funksjonstapet og ivareta livskvaliteten.`,
    },
    {
      id: 'hov3-4-6-def-1',
      type: 'definition',
      title: 'Personsentrert omsorg',
      content: `**Personsentrert omsorg** er utviklet av Tom Kitwood og setter personen med demens i sentrum, ikke sykdommen.

**Fem grunnleggende psykologiske behov hos mennesker med demens:**
1. **Trøst** - lindring av angst og uro, fysisk nærhet
2. **Tilknytning** - trygge relasjoner og bånd til andre
3. **Inkludering** - å være del av et fellesskap
4. **Beskjeftigelse** - meningsfulle aktiviteter tilpasset funksjonsnivå
5. **Identitet** - å bli sett som den personen man er, med sin livshistorie

**I praksis betyr personsentrert omsorg:**
- Kjenne brukerens livshistorie, vaner og preferanser
- Tilpasse kommunikasjon og aktiviteter individuelt
- Se atferd som uttrykk for udekkede behov, ikke bare symptomer
- Bevare brukerens verdighet og selvbestemmelse
- Involvere pårørende som viktige samarbeidspartnere`,
    },
    {
      id: 'hov3-4-6-def-2',
      type: 'definition',
      title: 'Kommunikasjon og miljøtilrettelegging',
      content: `**Kommunikasjon med personer med demens:**
- Bruk korte, enkle setninger
- Snakk rolig og tydelig, ikke for fort
- Gi tid til å svare - vent tålmodig
- Still én ting om gangen, unngå valgdilemmaer
- Bruk kroppsspråk, ansiktsuttrykk og berøring
- Ikke korrigér eller si «husker du ikke?» - det skaper uro
- Møt følelsen bak ordene, ikke bare innholdet

**Miljøtilrettelegging:**
- Stabile, forutsigbare omgivelser med faste rutiner
- God belysning, tydelig merking og kontrastfarger
- Fjerne speil som kan skape forvirring
- Tilrettelagte uteområder med sikker vandring
- Personlige gjenstander og bilder som skaper gjenkjenning
- Skjerming fra overstimulering og støy
- Tilpassede aktiviteter som musikk, reminisens og sansestimulering`,
    },
    {
      id: 'hov3-4-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Demens** er en fellesbetegnelse for hjernesykdommer som fører til gradvis tap av kognitive funksjoner
- **Alzheimers sykdom** er den vanligste formen og utgjør 60-70 % av tilfellene
- **Personsentrert omsorg** setter personen, ikke diagnosen, i sentrum
- Kitwoods fem behov er trøst, tilknytning, inkludering, beskjeftigelse og identitet
- Kommunikasjon med personer med demens krever tålmodighet, tydelighet og emosjonell tilstedeværelse
- Tilrettelagte omgivelser med forutsigbarhet, merking og skjerming fra overstimulering er viktig`,
    },
  ],
  exercises: [
    {
      id: 'hov3-4-6-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er den vanligste formen for demens?',
      options: [
        { id: 'a', text: 'Alzheimers sykdom', isCorrect: true },
        { id: 'b', text: 'Vaskulær demens', isCorrect: false },
        { id: 'c', text: 'Lewy body-demens', isCorrect: false },
        { id: 'd', text: 'Frontotemporal demens', isCorrect: false },
      ],
      solution: 'Alzheimers sykdom er den vanligste formen for demens og utgjør 60-70 % av alle demenstilfeller. Den kjennetegnes av gradvis innsettende hukommelsestap, særlig for nylige hendelser, og langsom forverring over flere år.',
    },
    {
      id: 'hov3-4-6-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilke fem psykologiske behov beskriver Tom Kitwood hos mennesker med demens?',
      options: [
        { id: 'a', text: 'Trøst, tilknytning, inkludering, beskjeftigelse og identitet', isCorrect: true },
        { id: 'b', text: 'Mat, søvn, medisiner, aktivitet og hvile', isCorrect: false },
        { id: 'c', text: 'Sikkerhet, frihet, rettferdighet, respekt og autonomi', isCorrect: false },
        { id: 'd', text: 'Fysisk helse, psykisk helse, sosialt nettverk, økonomi og bolig', isCorrect: false },
      ],
      solution: 'Tom Kitwood beskrev fem grunnleggende psykologiske behov hos mennesker med demens: trøst (lindring av angst), tilknytning (trygge relasjoner), inkludering (å være del av fellesskapet), beskjeftigelse (meningsfulle aktiviteter) og identitet (å bli sett som den personen man er).',
    },
    {
      id: 'hov3-4-6-ex-3',
      type: 'classic',
      difficulty: 'medium',
      task: 'En beboer med demens på sykehjemmet blir urolig hver ettermiddag og sier at hun må hjem for å hente barna i barnehagen. Barna hennes er voksne. Beskriv hvordan du møter denne situasjonen med personsentrert omsorg.',
      solution: 'Personsentrert tilnærming: 1) Ikke si «barna dine er voksne nå» eller «du bor jo her» - det skaper forvirring og uro. 2) Møt følelsen bak utsagnet - hun føler ansvar, omsorg og kanskje uro for barna. 3) Valider følelsen: «Du tenker på barna dine. Du har alltid vært en god mor.» 4) Avled forsiktig: «Kan du fortelle meg om barna dine? Hva likte de å gjøre?» 5) Tilby trygghet: «Barna har det bra. Skal vi gå en tur sammen?» 6) Tilrettelegg miljøet - ettermiddagsuro (sundowning) kan dempes med rolige aktiviteter, god belysning og faste rutiner. 7) Dokumenter mønsteret og diskuter med teamet for å finne gode tiltak.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-4-6-ex-4',
      type: 'classic',
      difficulty: 'lett',
      task: 'Nevn fire konkrete kommunikasjonstips som er viktige når du snakker med en person med demens.',
      solution: 'Fire viktige kommunikasjonstips: 1) Bruk korte, enkle setninger - si én ting om gangen og unngå lange forklaringer. 2) Gi god tid til å svare - det tar lenger tid å prosessere informasjon ved demens, så vent tålmodig uten å stresse. 3) Bruk kroppsspråk og ansiktsuttrykk - nonverbal kommunikasjon er ofte lettere å forstå enn ord. 4) Ikke korrigér eller si «husker du ikke?» - det skaper frustrasjon og skam. Møt personen i den virkeligheten de opplever og valider følelsene deres.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};

// ============================================================================
// Eksport av alle kapitler
// ============================================================================

export const HELSEOPPVEKST_VG3_DEL4_CHAPTERS: TextbookChapter[] = [
  CHAPTER_HOV3_4_1,
  CHAPTER_HOV3_4_2,
  CHAPTER_HOV3_4_3,
  CHAPTER_HOV3_4_4,
  CHAPTER_HOV3_4_5,
  CHAPTER_HOV3_4_6,
];
