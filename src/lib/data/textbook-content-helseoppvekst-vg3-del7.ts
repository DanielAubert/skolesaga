/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Helsearbeiderfaget VG3 - Del 7: Samarbeid og lovverk
 *
 * Kapittel 7.1-7.3
 * Dekker LK20 kompetansemål for helsearbeiderfaget VG3
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 7: Samarbeid og lovverk
// ============================================================================

// ----------------------------------------------------------------------------
// 7.1 Tverrfaglig samarbeid
// ----------------------------------------------------------------------------

export const CHAPTER_HOV3_7_1: TextbookChapter = {
  id: 'hov3-7-1',
  courseId: 'helseoppvekst-vg3',
  chapterNumber: '7.1',
  title: 'Tverrfaglig samarbeid',
  description: 'Samarbeid med andre yrkesgrupper, pasientforløp, koordinering.',
  estimatedMinutes: 55,
  competenceGoals: [
    'samarbeide tverrfaglig for å sikre helhetlige tjenester til brukere og pasienter',
    'beskrive ulike yrkesgrupper i helse- og omsorgstjenesten og deres ansvarsområder',
    'bidra til gode pasientforløp gjennom koordinering og kommunikasjon',
  ],
  keyTerms: [
    { term: 'Tverrfaglig samarbeid', definition: 'Samarbeid mellom fagpersoner fra ulike yrkesgrupper som arbeider mot et felles mål for brukeren.' },
    { term: 'Pasientforløp', definition: 'Den samlede reisen en pasient gjør gjennom helsetjenesten, fra første kontakt til avsluttet behandling.' },
    { term: 'Koordinering', definition: 'Å samordne ulike tjenester og tiltak slik at brukeren opplever et helhetlig og sammenhengende tilbud.' },
    { term: 'Tverrprofesjonell kompetanse', definition: 'Evnen til å samarbeide effektivt med andre yrkesgrupper og forstå deres roller og bidrag.' },
    { term: 'Ansvarsgruppe', definition: 'En gruppe fagpersoner fra ulike tjenester som samarbeider om oppfølgingen av en enkelt bruker.' },
  ],
  content: [
    {
      id: 'hov3-7-1-intro',
      type: 'text',
      content: `## Tverrfaglig samarbeid i helse- og omsorgstjenesten

Moderne helse- og omsorgstjenester er komplekse, og ingen enkelt yrkesgruppe kan ivareta alle behovene til en bruker alene. Tverrfaglig samarbeid handler om at fagpersoner med ulik kompetanse arbeider sammen for å gi brukeren et helhetlig og koordinert tilbud.

Som helsefagarbeider er du en viktig del av det tverrfaglige teamet. Du er ofte den som tilbringer mest tid med brukeren i hverdagen, og dine observasjoner og vurderinger er avgjørende for at teamet skal kunne ta gode beslutninger.

Godt tverrfaglig samarbeid kjennetegnes av:

- **Felles mål** - alle jobber mot det som er best for brukeren
- **Gjensidig respekt** - alle yrkesgrupper anerkjenner hverandres kompetanse
- **God kommunikasjon** - informasjon deles effektivt og til rett tid
- **Tydelig rollefordeling** - alle vet hva som er deres ansvar og andres ansvar
- **Fleksibilitet** - evne til å tilpasse seg endrede behov og situasjoner
- **Brukermedvirkning** - brukeren er en aktiv deltaker i samarbeidet`,
    },
    {
      id: 'hov3-7-1-def-1',
      type: 'definition',
      title: 'Yrkesgrupper i det tverrfaglige teamet',
      content: `I helse- og omsorgstjenesten samarbeider mange ulike yrkesgrupper. Her er de viktigste:

**Lege** - medisinsk ansvarlig, diagnostiserer, forskriver behandling og medisinering
**Sykepleier** - koordinerer pleie, administrerer medisiner, utfører prosedyrer, veileder helsefagarbeidere
**Helsefagarbeider** - utfører daglig omsorg og pleie, observerer og rapporterer, bidrar til aktivitet og trivsel
**Fysioterapeut** - trener motorikk og funksjon, forebygger fall, rehabilitering etter skade
**Ergoterapeut** - tilpasser hjelpemidler og omgivelser, trener daglige aktiviteter, vurderer boligtilpasning
**Vernepleier** - tilrettelegger for personer med utviklingshemming, atferdsanalyse, miljøarbeid
**Sosionom** - hjelper med sosiale og økonomiske utfordringer, rettigheter, koordinering av tjenester
**Psykolog** - utredning og behandling av psykiske lidelser, veiledning til personalet
**Logoped** - behandling av språk-, tale- og svelgevansker
**Klinisk ernæringsfysiolog** - vurdering og tilrettelegging av ernæring

Helsefagarbeiderens viktigste bidrag er ofte den daglige nærheten til brukeren. Du ser endringer i tilstand, humør og funksjon som andre faggrupper ikke fanger opp.`,
    },
    {
      id: 'hov3-7-1-def-2',
      type: 'definition',
      title: 'Pasientforløp',
      content: `Et **pasientforløp** beskriver den samlede reisen en pasient gjør gjennom helsetjenesten. Det omfatter alle kontaktpunkter, overganger og tjenester pasienten mottar.

**Et typisk pasientforløp kan se slik ut:**

1. **Hendelse** - pasienten blir syk eller skadet
2. **Vurdering** - fastlege eller legevakt vurderer tilstanden
3. **Behandling** - sykehus, poliklinikk eller kommunal tjeneste behandler
4. **Overgang** - pasienten overføres mellom tjenestenivåer (f.eks. fra sykehus til kommune)
5. **Oppfølging** - hjemmetjeneste, rehabilitering eller poliklinisk kontroll
6. **Avslutning** - behandlingen avsluttes eller videreføres som varig tjeneste

**Utfordringer i pasientforløp:**
- Informasjon kan gå tapt ved overganger mellom tjenester
- Ulike IT-systemer kommuniserer ikke alltid godt
- Pasienten kan oppleve manglende sammenheng i tjenestene
- Ansvarsforhold kan være uklare i overgangsfaser

Som helsefagarbeider bidrar du til gode pasientforløp ved å dokumentere grundig, kommunisere tydelig ved vaktskifter og overganger, og melde fra om endringer i brukerens tilstand.`,
    },
    {
      id: 'hov3-7-1-example-1',
      type: 'example',
      title: 'Tverrfaglig samarbeid rundt en hjemmeboende bruker',
      problem: 'Astrid (78) har hatt hjerneslag og er utskrevet fra sykehuset til hjemmet. Hun har nedsatt funksjon i høyre arm og ben, sliter med å snakke tydelig, og er nedstemt. Hun bor alene og datteren bor i nabokommunen.',
      solution: `**Det tverrfaglige teamet rundt Astrid:**

**Fastlege:** Følger opp medisinering, henviser til spesialist ved behov, koordinerer medisinsk behandling.

**Hjemmesykepleier:** Administrerer medisiner, følger opp sår og forebygger komplikasjoner, koordinerer tjenestene.

**Helsefagarbeider (deg):** Hjelper Astrid med daglige gjøremål som personlig hygiene, måltider og påkledning. Observerer og rapporterer endringer. Motiverer til aktivitet og selvstendighet.

**Fysioterapeut:** Trener Astrid i å gjenvinne funksjon i arm og ben, forebygger fall, gir treningsprogram.

**Ergoterapeut:** Vurderer behov for hjelpemidler (gripetang, dusjstol, rullator), tilpasser boligen for bedre tilgjengelighet.

**Logoped:** Trener tale og svelgefunksjon, gir øvelser Astrid kan gjøre hjemme.

**Koordinator/sosionom:** Koordinerer tjenestene, sørger for individuell plan, informerer om rettigheter.

**Din rolle som helsefagarbeider er sentral:** Du er hos Astrid flere ganger daglig og ser hvordan hun fungerer i hverdagen. Dine observasjoner om at hun for eksempel spiser dårligere, virker mer nedstemt, eller har bedre gangfunksjon, er avgjørende for hele teamets arbeid.`,
    },
    {
      id: 'hov3-7-1-def-3',
      type: 'definition',
      title: 'Ansvarsgruppe og samarbeidsmøter',
      content: `En **ansvarsgruppe** er en gruppe fagpersoner fra ulike tjenester som samarbeider om oppfølgingen av en enkelt bruker. Ansvarsgruppen møtes regelmessig for å koordinere tiltak og sikre at brukeren får et helhetlig tilbud.

**Hvem deltar i en ansvarsgruppe?**
- Brukeren selv (og eventuelt pårørende)
- Koordinator (ofte en sykepleier eller sosionom)
- Representanter fra relevante tjenester (hjemmesykepleie, fysioterapi, fastlege m.m.)

**Ansvargruppemøtets innhold:**
- Gjennomgang av brukerens status og mål
- Evaluering av pågående tiltak - hva fungerer og hva bør justeres?
- Planlegging av nye tiltak ved endrede behov
- Avklaring av ansvarsfordeling mellom tjenestene
- Oppdatering av individuell plan

**Helsefagarbeiderens rolle i ansvarsgruppen:**
- Rapportere om brukerens hverdagsfunksjon
- Dele observasjoner om endringer i tilstand
- Bidra med forslag til tiltak basert på daglig kontakt
- Gjennomføre tiltak som blir vedtatt i møtet
- Dokumentere og følge opp avtaler`,
    },
    {
      id: 'hov3-7-1-example-2',
      type: 'example',
      title: 'Kommunikasjon ved vaktskifte',
      problem: 'Du er helsefagarbeider på et sykehjem og skal overlevere informasjon om beboerne til neste vakt. God overlevering er avgjørende for pasientsikkerheten.',
      solution: `**ISBAR-verktøyet for strukturert kommunikasjon:**

**I - Identifikasjon:** Hvem er du, og hvem snakker du om?
«Jeg er Kari, helsefagarbeider på avdeling 3. Jeg rapporterer om Olav Hansen, rom 312.»

**S - Situasjon:** Hva er situasjonen nå?
«Olav har i dag vært urolig og forvirret. Han har nektet å spise middag og har drukket lite.»

**B - Bakgrunn:** Hva er relevant bakgrunnsinformasjon?
«Olav har Alzheimers sykdom og bruker vanligvis å ha gode dager. Han har hatt urinveisinfeksjon tidligere som ga lignende symptomer.»

**A - Aktuell vurdering:** Hva tror du er problemet?
«Jeg mistenker at forvirringen og urolighen kan skyldes en ny infeksjon eller smerter.»

**R - Råd/anbefaling:** Hva foreslår du?
«Jeg anbefaler at nattevakten observerer ham nøye, tar temperatur, og at sykepleier vurderer om urinstix bør tas i morgen.»

ISBAR sikrer at viktig informasjon ikke går tapt ved vaktskifter og bidrar til gode pasientforløp.`,
    },
    {
      id: 'hov3-7-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

Tverrfaglig samarbeid er en forutsetning for gode helse- og omsorgstjenester:

- **Mange yrkesgrupper** bidrar med ulik kompetanse for å gi brukeren et helhetlig tilbud
- **Helsefagarbeideren** har en sentral rolle gjennom daglig nærhet til brukeren og viktige observasjoner
- **Pasientforløp** beskriver brukerens reise gjennom tjenestene og krever god koordinering
- **Ansvarsgrupper** sikrer strukturert samarbeid og oppfølging rundt den enkelte bruker
- **Strukturerte kommunikasjonsverktøy** som ISBAR bidrar til pasientsikkerhet ved overganger og vaktskifter
- **Brukermedvirkning** er en viktig del av det tverrfaglige samarbeidet

Godt samarbeid handler om gjensidig respekt, tydelig kommunikasjon og et felles mål om det beste for brukeren.`,
    },
  ],
  exercises: [
    {
      id: 'hov3-7-1-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva kjennetegner godt tverrfaglig samarbeid?',
      options: [
        { id: 'a', text: 'Felles mål, gjensidig respekt, god kommunikasjon og tydelig rollefordeling', isCorrect: true },
        { id: 'b', text: 'At legen bestemmer alt og de andre yrkesgruppene utfører ordrer', isCorrect: false },
        { id: 'c', text: 'At alle yrkesgrupper gjør de samme oppgavene for å sikre kvalitet', isCorrect: false },
        { id: 'd', text: 'At man unngår å involvere brukeren for å spare tid', isCorrect: false },
      ],
      solution: 'Godt tverrfaglig samarbeid kjennetegnes av felles mål for brukeren, gjensidig respekt mellom yrkesgruppene, effektiv kommunikasjon, tydelig rollefordeling, fleksibilitet og aktiv brukermedvirkning.',
    },
    {
      id: 'hov3-7-1-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er en ansvarsgruppe?',
      options: [
        { id: 'a', text: 'En gruppe fagpersoner fra ulike tjenester som samarbeider om oppfølgingen av en enkelt bruker', isCorrect: true },
        { id: 'b', text: 'En gruppe ledere som bestemmer budsjettet for avdelingen', isCorrect: false },
        { id: 'c', text: 'En gruppe pårørende som klager på tjenestene', isCorrect: false },
        { id: 'd', text: 'En gruppe studenter som jobber sammen om en oppgave', isCorrect: false },
      ],
      solution: 'En ansvarsgruppe er en tverrfaglig gruppe som koordinerer tjenestene rundt en enkelt bruker. Gruppen inkluderer brukeren selv, en koordinator og fagpersoner fra relevante tjenester, og møtes jevnlig for å sikre helhetlig oppfølging.',
    },
    {
      id: 'hov3-7-1-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva står ISBAR for i strukturert kommunikasjon?',
      options: [
        { id: 'a', text: 'Identifikasjon, Situasjon, Bakgrunn, Aktuell vurdering, Råd', isCorrect: true },
        { id: 'b', text: 'Innleggelse, Symptomer, Behandling, Analyse, Resultat', isCorrect: false },
        { id: 'c', text: 'Informasjon, Samarbeid, Beslutning, Ansvar, Rapport', isCorrect: false },
        { id: 'd', text: 'Inntak, Status, Blodprøver, Allergi, Resept', isCorrect: false },
      ],
      solution: 'ISBAR er et strukturert kommunikasjonsverktøy som står for Identifikasjon (hvem er du og hvem gjelder det), Situasjon (hva skjer nå), Bakgrunn (relevant historikk), Aktuell vurdering (din faglige vurdering) og Råd (hva du anbefaler). Verktøyet bidrar til pasientsikkerhet ved overganger.',
    },
    {
      id: 'hov3-7-1-ex-4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv helsefagarbeiderens rolle i et tverrfaglig team. Hvorfor er dine observasjoner viktige for de andre yrkesgruppene?',
      solution: 'Helsefagarbeideren har en sentral rolle i det tverrfaglige teamet fordi de ofte tilbringer mest tid med brukeren i hverdagen. Observasjoner om endringer i funksjonsnivå, humør, appetitt, søvn og allmenntilstand er avgjørende for at lege, sykepleier, fysioterapeut og andre kan ta gode beslutninger. Helsefagarbeideren gjennomfører daglig omsorg og pleie, motiverer til aktivitet, rapporterer endringer og bidrar med forslag til tiltak basert på sin unike nærhet til brukeren. Uten helsefagarbeiderens observasjoner ville teamet miste viktig informasjon som ikke fanges opp under kortere konsultasjoner.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-7-1-ex-5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv et pasientforløp for en eldre person som har brukket hoften. Hvilke yrkesgrupper er involvert i de ulike fasene, og hvilke utfordringer kan oppstå i overgangene mellom tjenestene?',
      solution: 'Et typisk pasientforløp ved hoftebrudd: 1) Hendelse og akuttfase: Pasienten faller hjemme, ambulanse tilkalles, akuttmottak vurderer og røntgen tas. Involvert: ambulansepersonell, lege, sykepleier, radiograf. 2) Operasjon og sykehusopphold: Ortopedisk operasjon, postoperativ oppfølging, tidlig mobilisering. Involvert: kirurg, anestesisykepleier, sykepleier, fysioterapeut. 3) Overgang til kommune: Utskrivelse til korttidsopphold eller hjemmet. Utfordringer: informasjonsoverføring mellom sykehus og kommune, epikrise som kommer for sent, ulike IT-systemer. 4) Rehabilitering: Opptrening av gangfunksjon, tilpasning av hjelpemidler, tilrettelegging i hjemmet. Involvert: fysioterapeut, ergoterapeut, helsefagarbeider. 5) Oppfølging: Kontroll hos lege, videre trening, forebygging av nye fall. Kritiske overganger der informasjon kan gå tapt er mellom sykehus og kommune, og mellom korttidsopphold og hjemmet.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-7-1-ex-6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Bruk ISBAR-verktøyet til å formulere en muntlig rapport om en bruker med endret tilstand til en sykepleier. Velg selv en situasjon og skriv ut hele rapporten.',
      solution: 'Eksempel på en ISBAR-rapport: I - Identifikasjon: «Hei, jeg er Jonas, helsefagarbeider på avdeling 2. Jeg ringer angående Karin Johansen på rom 205.» S - Situasjon: «Karin har i kveld blitt tiltagende forvirret og urolig. Hun kjenner meg ikke igjen og forsøker gjentatte ganger å forlate avdelingen.» B - Bakgrunn: «Karin er 85 år, har moderat demens og bor fast på avdelingen. Hun bruker vanligvis å være rolig på kveldstid. Hun hadde feber 37,8 grader ved middagstid og har spist og drukket lite i dag. Urinstix tatt forrige uke viste tegn til urinveisinfeksjon.» A - Aktuell vurdering: «Jeg er bekymret for at Karin kan ha en forverret urinveisinfeksjon. Den akutte forvirringen og urolighen skiller seg tydelig fra hennes vanlige atferd.» R - Råd: «Jeg anbefaler at du kommer og vurderer henne, tar temperatur og eventuelt ny urinstix. Bør vi kontakte legevakt dersom tilstanden forverres i løpet av natten?»',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};

// ----------------------------------------------------------------------------
// 7.2 Lovverk og forsvarlig helsehjelp
// ----------------------------------------------------------------------------

export const CHAPTER_HOV3_7_2: TextbookChapter = {
  id: 'hov3-7-2',
  courseId: 'helseoppvekst-vg3',
  chapterNumber: '7.2',
  title: 'Lovverk og forsvarlig helsehjelp',
  description: 'Helsepersonelloven, forsvarlighet, lovpålagte krav, ansvar.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjøre rede for sentrale lover og forskrifter som regulerer helse- og omsorgstjenesten',
    'forstå forsvarlighetskravet og hva det innebærer for helsefagarbeidere',
    'kjenne til meldeplikt, dokumentasjonsplikt og andre lovpålagte plikter',
  ],
  keyTerms: [
    { term: 'Helsepersonelloven', definition: 'Loven som regulerer helsepersonells plikter og rettigheter, inkludert krav til forsvarlighet, taushetsplikt og dokumentasjon.' },
    { term: 'Forsvarlighetskravet', definition: 'Kravet om at helsehjelp skal utøves i samsvar med faglig forsvarlig standard, og at helsepersonell ikke skal gå ut over sin kompetanse.' },
    { term: 'Taushetsplikt', definition: 'Plikten til å bevare taushet om pasient- og brukeropplysninger man får kjennskap til gjennom arbeidet.' },
    { term: 'Avviksmelding', definition: 'En skriftlig rapport om en uønsket hendelse eller nesten-hendelse som har oppstått i tjenesten.' },
    { term: 'Dokumentasjonsplikt', definition: 'Plikten til å nedtegne relevante og nødvendige opplysninger om helsehjelpen som ytes til den enkelte bruker.' },
  ],
  content: [
    {
      id: 'hov3-7-2-intro',
      type: 'text',
      content: `## Lovverk som rammeverk for helsehjelp

Helse- og omsorgstjenesten i Norge er regulert av et omfattende lovverk som skal sikre at brukere og pasienter får forsvarlige tjenester av god kvalitet. Som helsefagarbeider må du kjenne de viktigste lovene og forstå hva de betyr for din yrkesutøvelse.

Lovverket setter rammene for:

- **Hva du kan og ikke kan gjøre** i din yrkesrolle
- **Hvilke rettigheter brukeren har** og hvordan disse skal ivaretas
- **Hvilke plikter du har** som helsepersonell
- **Hva som skjer** dersom reglene brytes
- **Hvordan tjenestene skal organiseres** for å sikre kvalitet og sikkerhet

Lovene er ikke bare begrensninger - de er også et vern for deg som arbeidstaker. De gir deg rett til veiledning, opplæring og forsvarlige arbeidsforhold.`,
    },
    {
      id: 'hov3-7-2-def-1',
      type: 'definition',
      title: 'Sentrale lover i helse- og omsorgstjenesten',
      content: `Her er de viktigste lovene du som helsefagarbeider må kjenne:

**Helsepersonelloven (1999)**
Regulerer plikter og ansvar for alt helsepersonell, inkludert helsefagarbeidere. Omhandler forsvarlighet, taushetsplikt, dokumentasjonsplikt, meldeplikt og opplysningsplikt.

**Pasient- og brukerrettighetsloven (1999)**
Sikrer pasienters og brukeres rettigheter, herunder rett til informasjon, medvirkning, samtykke, innsyn i journal og klagerett.

**Helse- og omsorgstjenesteloven (2011)**
Pålegger kommunene ansvar for å tilby nødvendige helse- og omsorgstjenester til alle som oppholder seg i kommunen.

**Spesialisthelsetjenesteloven (1999)**
Regulerer sykehus og andre spesialiserte helsetjenester, inkludert plikter knyttet til øyeblikkelig hjelp og forsvarlig drift.

**Helsetilsynsloven (2017)**
Regulerer statlig tilsyn med helse- og omsorgstjenestene for å sikre forsvarlig drift.

**Arbeidsmiljøloven (2005)**
Sikrer trygge arbeidsforhold, inkludert rett til opplæring, vern mot belastninger og varsling av kritikkverdige forhold.`,
    },
    {
      id: 'hov3-7-2-def-2',
      type: 'definition',
      title: 'Forsvarlighetskravet',
      content: `**Forsvarlighetskravet** er det mest sentrale kravet i helsepersonelloven. Det innebærer at all helsehjelp skal ytes i samsvar med faglig forsvarlig og omsorgsfull standard.

**Hva betyr forsvarlighet i praksis?**

- Du skal **handle innenfor din kompetanse** og ikke påta deg oppgaver du ikke behersker
- Du skal **søke hjelp og veiledning** når du er usikker
- Du skal **holde deg faglig oppdatert** og følge gjeldende prosedyrer og retningslinjer
- Du skal **dokumentere** det du gjør og observerer
- Du skal **melde fra** om svikt og uønskede hendelser

**Grensene for din kompetanse:**
Helsepersonelloven § 4 slår fast at du ikke skal gå ut over din faglige kompetanse. Det betyr at:
- Du kan utføre oppgaver du har fått opplæring i og er vurdert kompetent til
- Du skal si fra dersom du får oppgaver du ikke mestrer
- Du kan delegeres oppgaver fra sykepleier eller lege, forutsatt at du har fått nødvendig opplæring
- Ansvaret for delegerte oppgaver ligger hos den som delegerer, men du har et selvstendig ansvar for å si fra hvis du ikke føler deg kompetent

**Uforsvarlig praksis kan være:**
- Å utføre prosedyrer du ikke har opplæring i
- Å unnlate å observere og rapportere endringer i brukerens tilstand
- Å ikke dokumentere helsehjelpen du gir
- Å bryte taushetsplikten uten lovlig grunn`,
    },
    {
      id: 'hov3-7-2-example-1',
      type: 'example',
      title: 'Forsvarlighetskravet i praksis',
      problem: 'Du jobber nattevakt på sykehjem. Sykepleier ringer og ber deg gi en beboer et smertestillende medikament intravenøst. Du har aldri fått opplæring i intravenøs medisinering.',
      solution: `**Forsvarlig håndtering av situasjonen:**

1. **Si tydelig fra:** «Jeg har ikke opplæring i å gi intravenøs medisinering. Det er utenfor min kompetanse.»

2. **Henvis til lovverket:** Helsepersonelloven § 4 sier at du ikke skal gå ut over din faglige kompetanse. Å gi intravenøs medisin uten opplæring er uforsvarlig.

3. **Foreslå alternativ:** «Kan beboeren få smertestillende som tablett eller stikkpille? Eller kan du komme hit og gi det intravenøst selv?»

4. **Dokumenter:** Skriv ned at du fikk forespørselen, at du avslo, og hvilken løsning dere kom fram til.

**Viktig:** Det er ikke illojalt å si nei til oppgaver du ikke har kompetanse til. Tvert imot - det er profesjonelt og forsvarlig. Helsepersonelloven beskytter deg når du handler innenfor disse rammene.

Hvis sykepleier likevel insisterer, bør du kontakte din nærmeste leder eller følge arbeidsplassens rutiner for slike situasjoner.`,
    },
    {
      id: 'hov3-7-2-def-3',
      type: 'definition',
      title: 'Taushetsplikt og opplysningsrett',
      content: `**Taushetsplikten** (helsepersonelloven §§ 21-25) er en av de viktigste pliktene du har som helsepersonell. Den beskytter brukerens rett til privatliv.

**Hva omfatter taushetsplikten?**
- Alle opplysninger om brukerens helsetilstand, diagnose og behandling
- Personlige forhold som du får kjennskap til gjennom arbeidet
- At personen i det hele tatt mottar helse- og omsorgstjenester

**Unntak fra taushetsplikten:**
- **Samtykke:** Brukeren samtykker til at opplysninger deles
- **Anonymisering:** Opplysninger deles uten identifiserbare kjennetegn
- **Samarbeidende personell:** Nødvendige opplysninger kan deles med kolleger som trenger dem for å yte forsvarlig helsehjelp
- **Nødsituasjoner:** Ved fare for liv og helse kan opplysninger gis uten samtykke
- **Opplysningsplikt:** I visse tilfeller har du plikt til å gi opplysninger, for eksempel ved mistanke om mishandling av barn

**Brudd på taushetsplikten** kan føre til:
- Disiplinærtiltak fra arbeidsgiver
- Reaksjon fra Statsforvalteren
- Straffeansvar etter helsepersonelloven`,
    },
    {
      id: 'hov3-7-2-example-2',
      type: 'example',
      title: 'Taushetsplikt i praksis',
      problem: 'Du jobber i hjemmetjenesten og møter naboen til en bruker i butikken. Naboen spør: «Hvordan går det egentlig med Kari? Jeg ser at dere er der hver dag nå. Er hun blitt dårligere?»',
      solution: `**Forsvarlig håndtering:**

1. **Du kan ikke bekrefte eller avkrefte** at Kari mottar hjemmetjenester. Selv det at en person mottar helsehjelp er taushetsbelagt.

2. **Svar vennlig men bestemt:** «Jeg forstår at du bryr deg om naboen din, men jeg kan dessverre ikke si noe om hvem jeg besøker eller hvorfor. Det er en del av taushetsplikten min.»

3. **Foreslå alternativ:** «Hvis du er bekymret for Kari, anbefaler jeg at du tar direkte kontakt med henne.»

**Andre hverdagssituasjoner der taushetsplikten gjelder:**
- Ikke snakk om brukere på bussen, i kantinen eller i sosiale sammenhenger
- Ikke la dokumenter ligge synlig i bilen
- Ikke diskuter brukere med kolleger i fellesarealer der andre kan høre
- Ikke del informasjon på sosiale medier - heller ikke uten navn
- Vær forsiktig med telefonsamtaler om brukere i det offentlige rom`,
    },
    {
      id: 'hov3-7-2-def-4',
      type: 'definition',
      title: 'Dokumentasjonsplikt og avviksmelding',
      content: `**Dokumentasjonsplikten** (helsepersonelloven §§ 39-40) pålegger helsepersonell å dokumentere all helsehjelp som ytes.

**Hva skal dokumenteres?**
- Observasjoner av brukerens tilstand
- Tiltak som er utført (stell, medisinering, ernæring m.m.)
- Endringer i brukerens tilstand
- Brukerens egne utsagn og ønsker
- Avvik fra behandlingsplanen og begrunnelse for dette

**Krav til god dokumentasjon:**
- **Nøyaktig** - beskriv det du faktisk observerer, ikke tolkninger
- **Tidsriktig** - dokumenter så snart som mulig etter hendelsen
- **Relevant** - ta med opplysninger som er nødvendige for videre oppfølging
- **Objektiv** - bruk fagspråk, unngå subjektive vurderinger uten begrunnelse

**Avviksmelding:**
En avviksmelding er en skriftlig rapport om en uønsket hendelse eller nesten-hendelse. Du har plikt til å melde avvik dersom:
- Det har skjedd en feil (feil medisin, fall, trykksår m.m.)
- En nesten-hendelse har oppstått (beboer var nær ved å falle, nesten gitt feil medisin)
- Rutiner ikke er fulgt
- Utstyr har sviktet

Avviksmeldinger handler ikke om å finne syndebukker, men om å lære av feil og forbedre tjenestene.`,
    },
    {
      id: 'hov3-7-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

Lovverket gir rammene for forsvarlig helsehjelp og beskytter både brukere og helsepersonell:

- **Helsepersonelloven** er den viktigste loven for din yrkesutøvelse og regulerer forsvarlighet, taushetsplikt og dokumentasjon
- **Forsvarlighetskravet** innebærer at du skal handle innenfor din kompetanse, søke veiledning og holde deg faglig oppdatert
- **Taushetsplikten** beskytter brukerens rett til privatliv og gjelder også utenfor arbeidstiden
- **Dokumentasjonsplikten** sikrer at viktig informasjon er tilgjengelig for videre oppfølging
- **Avviksmelding** er et verktøy for læring og kvalitetsforbedring, ikke et straffesystem
- **Pasient- og brukerrettighetsloven** sikrer brukerens rett til informasjon, medvirkning og samtykke

Som helsefagarbeider skal du kjenne lovverket godt nok til å handle forsvarlig i hverdagen og vite når du trenger å søke veiledning.`,
    },
  ],
  exercises: [
    {
      id: 'hov3-7-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva innebærer forsvarlighetskravet i helsepersonelloven?',
      options: [
        { id: 'a', text: 'At helsehjelp skal ytes i samsvar med faglig forsvarlig og omsorgsfull standard, og at man ikke skal gå ut over sin kompetanse', isCorrect: true },
        { id: 'b', text: 'At man alltid skal gjøre det brukeren ber om, uansett om det er medisinsk forsvarlig', isCorrect: false },
        { id: 'c', text: 'At man bare trenger å følge legens instrukser uten å tenke selv', isCorrect: false },
        { id: 'd', text: 'At man skal utføre alle oppgaver man blir bedt om, selv uten opplæring', isCorrect: false },
      ],
      solution: 'Forsvarlighetskravet i helsepersonelloven § 4 innebærer at all helsehjelp skal ytes faglig forsvarlig, at man skal handle innenfor sin kompetanse, søke veiledning ved usikkerhet, og si fra dersom man ikke har tilstrekkelig opplæring til å utføre en oppgave.',
    },
    {
      id: 'hov3-7-2-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'I hvilke situasjoner kan det være lov å bryte taushetsplikten?',
      options: [
        { id: 'a', text: 'Ved samtykke fra brukeren, i nødsituasjoner med fare for liv, og ved opplysningsplikt som ved mistanke om barnemishandling', isCorrect: true },
        { id: 'b', text: 'Når pårørende spør vennlig, når naboen er bekymret, eller når kolleger er nysgjerrige', isCorrect: false },
        { id: 'c', text: 'Kun når politiet ber om det med skriftlig forespørsel', isCorrect: false },
        { id: 'd', text: 'Taushetsplikten kan aldri brytes under noen omstendigheter', isCorrect: false },
      ],
      solution: 'Taushetsplikten kan fravikes i visse lovbestemte situasjoner: når brukeren samtykker, når opplysninger kan anonymiseres, ved deling med samarbeidende personell som trenger informasjonen, i nødsituasjoner med fare for liv og helse, og ved lovpålagt opplysningsplikt (for eksempel mistanke om mishandling av barn).',
    },
    {
      id: 'hov3-7-2-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er formålet med avviksmeldinger?',
      options: [
        { id: 'a', text: 'Å lære av feil og forbedre tjenestene, ikke å finne syndebukker', isCorrect: true },
        { id: 'b', text: 'Å straffe den som har gjort en feil', isCorrect: false },
        { id: 'c', text: 'Å dokumentere hvem som er ansvarlig for å gi dem sparken', isCorrect: false },
        { id: 'd', text: 'Å tilfredsstille krav fra forsikringsselskapet', isCorrect: false },
      ],
      solution: 'Avviksmeldinger er et kvalitetsforbedringsverktøy. Formålet er å identifisere svakheter i systemet, lære av feil og nesten-hendelser, og iverksette tiltak som forebygger at lignende hendelser skjer igjen. En god avvikskultur forutsetter at ansatte føler seg trygge på å melde fra uten frykt for straff.',
    },
    {
      id: 'hov3-7-2-ex-4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva du ville gjort dersom du på jobb ble bedt om å utføre en oppgave du ikke har fått opplæring i. Bruk forsvarlighetskravet i din begrunnelse.',
      solution: 'Dersom jeg ble bedt om å utføre en oppgave jeg ikke har opplæring i, ville jeg: 1) Si tydelig fra til den som ba meg, at dette er utenfor min kompetanse. 2) Vise til helsepersonelloven § 4 som sier at jeg ikke skal gå ut over min faglige kompetanse. 3) Foreslå alternative løsninger - kan noen med riktig kompetanse utføre oppgaven, eller kan jeg få nødvendig opplæring først? 4) Dokumentere hendelsen - at jeg fikk forespørselen, at jeg avslo, og hvilken løsning vi fant. 5) Hvis den som ba meg insisterer, ville jeg kontakte min nærmeste leder. Det er ikke illojalt å si nei - det er profesjonelt og i tråd med forsvarlighetskravet. Å utføre oppgaver man ikke behersker kan sette brukeren i fare og medføre ansvar for uforsvarlig yrkesutøvelse.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-7-2-ex-5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Gi tre eksempler på hverdagssituasjoner der taushetsplikten kan utfordres, og forklar hvordan du ville håndtert hver situasjon.',
      solution: 'Eksempel 1: En pårørende ringer og spør om brukerens helsetilstand. Håndtering: Sjekk om brukeren har gitt samtykke til at opplysninger kan deles med denne pårørende. Hvis ikke, forklar at du ikke kan gi opplysninger uten samtykke, og tilby å be brukeren ringe tilbake. Eksempel 2: Du treffer en venninne som spør om den eldre damen du besøker i nabolaget. Håndtering: Du kan verken bekrefte eller avkrefte at du besøker noen i nabolaget. Si vennlig at taushetsplikten hindrer deg fra å snakke om arbeidet ditt. Eksempel 3: Du sitter i personalrommet med kolleger fra en annen avdeling, og en kollega forteller om en morsom hendelse med en beboer. Håndtering: Vær bevisst på at kolleger fra andre avdelinger ikke nødvendigvis trenger denne informasjonen. Minn kollegaen på at man bør være forsiktig med å dele slike historier, og at samtaler om brukere bør foregå i lukkede møterom med relevant personell.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};

// ----------------------------------------------------------------------------
// 7.3 Samhandlingsreformen og tjenestenivåer
// ----------------------------------------------------------------------------

export const CHAPTER_HOV3_7_3: TextbookChapter = {
  id: 'hov3-7-3',
  courseId: 'helseoppvekst-vg3',
  chapterNumber: '7.3',
  title: 'Samhandlingsreformen og tjenestenivåer',
  description: 'Samhandlingsreformen, koordinering mellom tjenestenivåer, individuell plan.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjøre rede for samhandlingsreformen og dens betydning for helse- og omsorgstjenestene',
    'beskrive de ulike tjenestenivåene og samarbeidet mellom dem',
    'forstå bruken av individuell plan som koordineringsverktøy',
  ],
  keyTerms: [
    { term: 'Samhandlingsreformen', definition: 'En helsereform fra 2012 som skal sikre bedre koordinering mellom spesialisthelsetjenesten og kommunehelsetjenesten, med vekt på forebygging og tidlig innsats.' },
    { term: 'Tjenestenivåer', definition: 'Organiseringen av helsetjenesten i kommunehelsetjeneste (primærhelsetjeneste) og spesialisthelsetjeneste (sykehus og spesialiserte tjenester).' },
    { term: 'Individuell plan', definition: 'En lovfestet rett for brukere med behov for langvarige og koordinerte tjenester, som samler alle tiltak og mål i ett dokument.' },
    { term: 'Koordinator', definition: 'En fagperson som har hovedansvaret for å koordinere tjenestene til en bruker og sikre sammenheng i tilbudet.' },
    { term: 'Kommunalt akutt døgntilbud (KAD)', definition: 'Et kommunalt tilbud om døgnopphold for pasienter som trenger observasjon og behandling, men som ikke trenger innleggelse på sykehus.' },
  ],
  content: [
    {
      id: 'hov3-7-3-intro',
      type: 'text',
      content: `## Samhandlingsreformen og organisering av helsetjenesten

Samhandlingsreformen ble innført 1. januar 2012 og er en av de viktigste helsereformene i Norge de siste tiårene. Bakgrunnen var at helsetjenesten hadde utfordringer med manglende koordinering mellom sykehus og kommuner, for lite satsing på forebygging, og at mange pasienter ble liggende på sykehus lenger enn nødvendig.

Reformens hovedmål er:

- **Mer forebygging og tidlig innsats** - sette inn tiltak før sykdom utvikler seg
- **Mer behandling i kommunene** - flytte tjenester nærmere der folk bor
- **Bedre samhandling** - sikre sømløse overganger mellom tjenestenivåene
- **Pasientens behov i sentrum** - tjenestene skal tilpasses den enkelte

For deg som helsefagarbeider betyr dette at kommunene har fått et større ansvar for å behandle og følge opp pasienter som tidligere ble ivaretatt på sykehus. Dette stiller høyere krav til kompetanse i kommunehelsetjenesten.`,
    },
    {
      id: 'hov3-7-3-def-1',
      type: 'definition',
      title: 'De to tjenestenivåene',
      content: `Norsk helsetjeneste er organisert i to hovednivåer:

**1. Kommunehelsetjenesten (primærhelsetjenesten)**
Kommunene har ansvar for å tilby nødvendige helse- og omsorgstjenester til alle som oppholder seg i kommunen. Dette omfatter:
- Fastlegeordningen
- Hjemmesykepleie og hjemmetjenester
- Sykehjem og omsorgsboliger
- Helsestasjoner og skolehelsetjeneste
- Fysioterapi og ergoterapi
- Psykisk helsearbeid og rusarbeid
- Kommunalt akutt døgntilbud (KAD)
- Rehabilitering og habilitering

**2. Spesialisthelsetjenesten (sykehus)**
De regionale helseforetakene har ansvar for spesialiserte tjenester som:
- Sykehusinnleggelse og akuttbehandling
- Poliklinisk utredning og behandling
- Avansert diagnostikk (røntgen, MR, laboratorier)
- Kirurgi
- Fødetilbud
- Ambulansetjeneste
- Spesialisert rehabilitering
- Psykiatriske sykehus

**Samarbeidet mellom nivåene:**
Mange pasienter beveger seg mellom tjenestenivåene. En god overgang krever tydelige rutiner for informasjonsoverføring, varsling og oppfølging.`,
    },
    {
      id: 'hov3-7-3-def-2',
      type: 'definition',
      title: 'Samhandlingsreformens virkemidler',
      content: `Samhandlingsreformen bruker flere virkemidler for å nå sine mål:

**Kommunalt betalingsansvar for utskrivningsklare pasienter**
Kommunen må betale for pasienter som er ferdigbehandlet på sykehus men som venter på et kommunalt tilbud. Dette motiverer kommunene til å ta imot pasienter raskere.

**Lovpålagte samarbeidsavtaler**
Kommuner og helseforetak er pålagt å inngå samarbeidsavtaler som regulerer samarbeidet, inkludert:
- Rutiner for innleggelse og utskrivning
- Informasjonsoverføring
- Beredskap og akuttmedisin
- Forebygging

**Kommunalt akutt døgntilbud (KAD)**
Alle kommuner skal ha et tilbud om akutt døgnopphold for pasienter som kan behandles lokalt i stedet for å legges inn på sykehus.

**Økt satsing på forebygging**
Kommunene har fått et tydeligere ansvar for helsefremmende og forebyggende arbeid, inkludert frisklivssentraler og lærings- og mestringstilbud.

**Koordinerende enhet**
Alle kommuner skal ha en koordinerende enhet som har overordnet ansvar for individuell plan og koordinering av tjenester.`,
    },
    {
      id: 'hov3-7-3-example-1',
      type: 'example',
      title: 'Samhandling ved utskrivning fra sykehus',
      problem: 'Berit (74) har vært innlagt på sykehus etter et hjertesviktanfall. Hun er nå utskrivningsklar, men trenger oppfølging hjemme. Hvordan fungerer samhandlingen mellom sykehus og kommune?',
      solution: `**Samhandling i praksis ved utskrivning:**

**1. Varsling fra sykehus:**
Sykehuset sender melding til kommunen om at Berit er innlagt og at utskrivning planlegges. Dette skjer tidlig i oppholdet via elektronisk meldingsutveksling.

**2. Kartlegging av behov:**
Sykehuset vurderer Berits funksjonsnivå og behov etter utskrivning. Kommunen vurderer hvilke tjenester som kan tilbys.

**3. Utskrivningssamtale:**
Sykepleier på sykehuset gjennomfører en utskrivningssamtale med Berit og eventuelt pårørende. Informasjon om medisinering, kosthold, aktivitet og oppfølging gjennomgås.

**4. Elektronisk melding til kommunen:**
Sykehuset sender pleie- og omsorgsmelding (PLO-melding) med relevant informasjon om Berits tilstand, medisinering og behov.

**5. Mottak i kommunen:**
Hjemmetjenesten mottar meldingen, tildeler tjenester og planlegger oppfølging. Helsefagarbeider og sykepleier klargjør for at Berit kommer hjem.

**6. Første besøk hjemme:**
Hjemmesykepleier besøker Berit samme dag eller dagen etter utskrivning for å sikre trygg overgang.

**Helsefagarbeiderens rolle:**
- Følge opp daglig omsorg og observere Berits tilstand
- Rapportere tegn på forverring (tungpust, hevelser, vektøkning)
- Motivere til aktivitet og kostholdsendringer
- Sikre at Berit tar medisinene sine riktig`,
    },
    {
      id: 'hov3-7-3-def-3',
      type: 'definition',
      title: 'Individuell plan (IP)',
      content: `**Individuell plan (IP)** er en lovfestet rettighet for brukere med behov for langvarige og koordinerte helse- og omsorgstjenester. Retten er hjemlet i pasient- og brukerrettighetsloven § 2-5.

**Hvem har rett til individuell plan?**
- Brukere som trenger tjenester fra to eller flere tjenesteytere over tid
- Brukere med sammensatte behov som krever koordinering
- Brukere som selv ønsker en individuell plan

**Hva inneholder en individuell plan?**
- Brukerens mål og ønsker
- Oversikt over alle tjenester og tiltak
- Ansvarsfordeling mellom tjenesteytere
- Tidsplan for tiltak og evaluering
- Navn på koordinator
- Samtykke fra brukeren

**Koordinator:**
Brukere med individuell plan har rett til en koordinator - en fagperson som har hovedansvaret for å:
- Sikre samordning av tjenestene
- Være brukerens faste kontaktperson
- Innkalle til og lede ansvargruppemøter
- Sørge for at planen evalueres og oppdateres jevnlig

**Helsefagarbeiderens rolle:**
- Bidra med observasjoner og informasjon til planen
- Gjennomføre tiltak som er beskrevet i planen
- Melde fra om endringer i brukerens behov
- Delta i ansvargruppemøter ved behov`,
    },
    {
      id: 'hov3-7-3-example-2',
      type: 'example',
      title: 'Individuell plan i praksis',
      problem: 'Thomas (45) har multippel sklerose (MS) og bor hjemme med kone og to barn. Han har behov for tjenester fra flere instanser og ønsker en individuell plan.',
      solution: `**Individuell plan for Thomas:**

**Brukerens mål:**
Thomas ønsker å bo hjemme så lenge som mulig, opprettholde kontakt med venner og delta i barnas aktiviteter.

**Tjenester og tiltak:**
- **Fastlege:** Medisinsk oppfølging, resepter, henvisninger
- **Nevrolog (sykehus):** Halvårlig kontroll, justering av MS-behandling
- **Hjemmesykepleie:** Medisinering, sårstell, tilsyn
- **Helsefagarbeider:** Daglig hjelp med personlig hygiene, påkledning, måltider
- **Fysioterapeut:** Ukentlig trening, forebygge stivhet og fall
- **Ergoterapeut:** Hjelpemidler, tilpasning av bolig
- **NAV:** Arbeidsavklaring, økonomisk støtte

**Koordinator:** Sykepleier i hjemmetjenesten

**Ansvargruppemøter:** Hver 3. måned, eller oftere ved endrede behov

**Helsefagarbeiderens rolle:**
- Hjelpe Thomas med morgenrutiner og tilpasse hjelpen etter dagsform
- Observere og rapportere endringer i funksjonsnivå (styrke, balanse, utmattelse)
- Motivere Thomas til å gjøre mest mulig selv
- Gi tilbakemelding til koordinator om hvordan tiltakene fungerer`,
    },
    {
      id: 'hov3-7-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

Samhandlingsreformen og organiseringen av helsetjenesten i tjenestenivåer har stor betydning for helsefagarbeiderens arbeidshverdag:

- **Samhandlingsreformen** (2012) har ført til at kommunene har fått et større ansvar for behandling og oppfølging av pasienter
- **Helsetjenesten er organisert** i kommunehelsetjeneste og spesialisthelsetjeneste, med behov for god samhandling mellom nivåene
- **Utskrivningsklare pasienter** skal raskt overføres fra sykehus til kommunen, noe som krever gode rutiner for informasjonsoverføring
- **Kommunalt akutt døgntilbud (KAD)** gir mulighet for lokal behandling uten sykehusinnleggelse
- **Individuell plan** er en lovfestet rettighet for brukere med langvarige og koordinerte behov
- **Koordinatorrollen** sikrer at tjenestene henger sammen og at brukeren har en fast kontaktperson

Som helsefagarbeider bidrar du til god samhandling gjennom grundig dokumentasjon, tydelig kommunikasjon og aktiv deltakelse i det tverrfaglige samarbeidet.`,
    },
  ],
  exercises: [
    {
      id: 'hov3-7-3-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva var hovedmålet med samhandlingsreformen?',
      options: [
        { id: 'a', text: 'Bedre koordinering mellom tjenestenivåene, mer forebygging og mer behandling i kommunene', isCorrect: true },
        { id: 'b', text: 'Å legge ned alle sykehjem og gi all behandling på sykehus', isCorrect: false },
        { id: 'c', text: 'Å spare penger ved å kutte i helsetjenestene', isCorrect: false },
        { id: 'd', text: 'Å privatisere hele helsetjenesten', isCorrect: false },
      ],
      solution: 'Samhandlingsreformen (2012) hadde som hovedmål å sikre bedre koordinering mellom spesialisthelsetjenesten og kommunehelsetjenesten, øke satsingen på forebygging og tidlig innsats, flytte mer behandling til kommunene der folk bor, og sette pasientens behov i sentrum.',
    },
    {
      id: 'hov3-7-3-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvem har rett til individuell plan?',
      options: [
        { id: 'a', text: 'Brukere med behov for langvarige og koordinerte tjenester fra to eller flere tjenesteytere', isCorrect: true },
        { id: 'b', text: 'Kun brukere over 67 år som bor på sykehjem', isCorrect: false },
        { id: 'c', text: 'Alle som har vært innlagt på sykehus minst én gang', isCorrect: false },
        { id: 'd', text: 'Kun brukere med fysisk funksjonshemming', isCorrect: false },
      ],
      solution: 'Retten til individuell plan er hjemlet i pasient- og brukerrettighetsloven § 2-5. Den gjelder for alle brukere som har behov for langvarige og koordinerte helse- og omsorgstjenester, uavhengig av alder, diagnose eller boform. Brukeren må selv ønske en individuell plan.',
    },
    {
      id: 'hov3-7-3-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er kommunalt akutt døgntilbud (KAD)?',
      options: [
        { id: 'a', text: 'Et kommunalt tilbud om døgnopphold for pasienter som trenger observasjon og behandling, men ikke sykehusinnleggelse', isCorrect: true },
        { id: 'b', text: 'Et ambulansetilbud drevet av kommunen', isCorrect: false },
        { id: 'c', text: 'En kommunal legevakt som er åpen hele døgnet', isCorrect: false },
        { id: 'd', text: 'Et sykehus som er eid av kommunen', isCorrect: false },
      ],
      solution: 'Kommunalt akutt døgntilbud (KAD) er et tilbud som alle kommuner er pålagt å ha etter samhandlingsreformen. Det gir mulighet for døgnopphold med observasjon og behandling for pasienter som ikke trenger sykehusinnleggelse, men som trenger mer oppfølging enn det som kan gis hjemme. Typiske pasienter er eldre med forverring av kjent sykdom.',
    },
    {
      id: 'hov3-7-3-ex-4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva en koordinator gjør, og beskriv hvordan helsefagarbeideren samarbeider med koordinatoren om en bruker med individuell plan.',
      solution: 'En koordinator er en fagperson som har hovedansvaret for å samordne tjenestene til en bruker med individuell plan. Koordinatoren er brukerens faste kontaktperson, innkaller til og leder ansvargruppemøter, sørger for at planen evalueres og oppdateres, og sikrer at alle tjenesteytere kjenner sine oppgaver. Helsefagarbeideren samarbeider med koordinatoren ved å: 1) Rapportere observasjoner om brukerens funksjonsnivå, trivsel og eventuelle endringer. 2) Gi tilbakemelding på hvordan tiltakene i planen fungerer i hverdagen. 3) Melde fra om nye behov som har oppstått. 4) Delta i ansvargruppemøter og bidre med sin unike kunnskap om brukerens hverdag. 5) Gjennomføre tiltakene som er beskrevet i planen og dokumentere dette.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-7-3-ex-5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft fordeler og utfordringer med samhandlingsreformen sett fra helsefagarbeiderens perspektiv. Bruk gjerne eksempler fra praksis.',
      solution: 'Fordeler med samhandlingsreformen for helsefagarbeidere: 1) Mer varierte og faglig utfordrende oppgaver i kommunehelsetjenesten, ettersom sykere pasienter nå behandles lokalt. 2) Økt behov for kompetanse gir mulighet for faglig utvikling. 3) Brukere får tjenester nærmere der de bor, noe som kan gi bedre livskvalitet. 4) Bedre rutiner for samhandling og informasjonsoverføring gjennom lovpålagte samarbeidsavtaler. Utfordringer: 1) Kommunene mottar sykere pasienter som krever mer avansert pleie, men ressursene har ikke alltid økt tilsvarende. 2) Korte sykehusopphold betyr at pasienter skrives ut tidligere, noe som kan gi større belastning på kommunale tjenester. 3) Informasjonsoverføringen mellom tjenestenivåer fungerer ikke alltid optimalt - viktig informasjon kan gå tapt. 4) Bemanningen i kommunehelsetjenesten er ikke alltid tilstrekkelig til å ivareta de økte oppgavene. 5) Det kan være vanskelig å rekruttere nok kvalifisert personell til kommunale tjenester.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};

// ============================================================================
// Eksport av alle kapitler
// ============================================================================

export const HELSEOPPVEKST_VG3_DEL7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_HOV3_7_1,
  CHAPTER_HOV3_7_2,
  CHAPTER_HOV3_7_3,
];
