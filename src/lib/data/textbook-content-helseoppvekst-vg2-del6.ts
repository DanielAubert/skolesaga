/**
 * Helse- og oppvekstfag VG2 - Del 6: Psykisk helse og rus
 * Kapittel 6.1-6.6
 *
 * Dekker LK20 kompetansemål:
 * - gjøre rede for psykisk helse og vanlige psykiske lidelser
 * - drøfte årsaker til og konsekvenser av rusmisbruk
 * - kommunisere profesjonelt og relasjonsbyggende
 * - beskrive forebyggende og helsefremmende tiltak
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 6.1: Psykisk helse og uhelse
// ============================================================================

export const CHAPTER_HOV2_6_1: TextbookChapter = {
  id: 'hov2-6-1',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '6.1',
  title: 'Psykisk helse og uhelse',
  description: 'En innføring i psykisk helse, vanlige psykiske lidelser, forskjellen mellom psykisk helse og psykisk uhelse, og recovery som tilnærming i behandling og oppfølging.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjøre rede for psykisk helse og vanlige psykiske lidelser',
  ],
  content: [
    {
      id: 'hov2-6-1-intro',
      type: 'text',
      content: `## Psykisk helse – mer enn fravær av sykdom

Psykisk helse angår alle mennesker og er en viktig del av den totale helsen. God psykisk helse handler om å ha det bra med seg selv, mestre hverdagens utfordringer og kunne bidra i fellesskapet. Som helsefagarbeider vil du møte mange mennesker med ulike psykiske utfordringer, og din kompetanse er avgjørende for god omsorg.

I dette kapittelet lærer du:
- Hva psykisk helse og psykisk uhelse innebærer
- Vanlige psykiske lidelser i befolkningen
- Recovery som tilnærming
- Helsefagarbeiderens rolle i psykisk helsearbeid`,
    },
    {
      id: 'hov2-6-1-def-1',
      type: 'definition',
      title: 'Psykisk helse',
      content: `**Psykisk helse** er en tilstand av velvære der individet kan realisere sine egne evner, håndtere normale stressbelastninger i livet, arbeide produktivt og bidra til samfunnet (WHO). Psykisk helse er ikke bare fravær av psykisk sykdom, men omfatter også følelsesmessig, psykologisk og sosial velvære.`,
    },
    {
      id: 'hov2-6-1-text-1',
      type: 'text',
      content: `### Psykisk helse, psykiske plager og psykiske lidelser

Det er viktig å skille mellom ulike nivåer av psykisk helse:

**Psykisk helse**
- Alle har psykisk helse, akkurat som alle har fysisk helse
- God psykisk helse handler om å ha det bra med seg selv og andre
- Påvirkes av biologiske, psykologiske og sosiale faktorer

**Psykiske plager**
- Tilstander som oppleves belastende, men som ikke nødvendigvis oppfyller kriteriene for en diagnose
- Vanlige eksempler: søvnproblemer, uro, nedstemthet, bekymring
- De fleste opplever psykiske plager i perioder av livet
- Kan gå over av seg selv eller med enkel støtte

**Psykiske lidelser**
- Tilstander som oppfyller kriteriene for en diagnose i diagnosesystemene (ICD-11 eller DSM-5)
- Medfører betydelig nedsatt funksjon i hverdagen
- Krever ofte behandling fra helsevesenet
- Eksempler: depresjon, angstlidelser, schizofreni, bipolar lidelse

**Forekomst i Norge:**
- Omtrent 1 av 5 voksne har en psykisk lidelse til enhver tid
- Angst og depresjon er de vanligste psykiske lidelsene
- Psykiske lidelser er den ledende årsaken til uførhet blant unge`,
    },
    {
      id: 'hov2-6-1-def-2',
      type: 'definition',
      title: 'Recovery',
      content: `**Recovery** (bedringsprosess) er en personlig prosess der den enkelte gjenvinner kontroll over eget liv, mening og håp, uavhengig av om symptomene forsvinner helt. Recovery handler ikke nødvendigvis om helbredelse, men om å leve et meningsfullt og tilfredsstillende liv til tross for psykiske utfordringer. Sentrale elementer er **håp**, **identitet**, **mening** og **empowerment**.`,
    },
    {
      id: 'hov2-6-1-text-2',
      type: 'text',
      content: `### Recovery – en ny tilnærming

Recovery-orientert tilnærming har revolusjonert psykisk helsearbeid de siste tiårene. I stedet for å fokusere kun på symptomer og diagnoser, rettes oppmerksomheten mot personens styrker, ressurser og ønsker for sitt eget liv.

**De fem dimensjonene i recovery (CHIME):**

**1. Connectedness (tilhørighet)**
- Sosial støtte og meningsfulle relasjoner
- Tilhørighet til grupper og samfunnet
- Støtte fra likepersoner (peer support)

**2. Hope (håp)**
- Tro på at endring er mulig
- Motivasjon og optimisme for fremtiden
- Positive rollemodeller

**3. Identity (identitet)**
- Gjenoppbygge en positiv identitet
- Ikke defineres av diagnosen
- Overvinne stigma og selvstigma

**4. Meaning (mening)**
- Finne mening i livet og i erfaringene
- Meningsfulle aktiviteter og roller
- Sosial deltakelse og arbeid

**5. Empowerment (myndiggjøring)**
- Ta ansvar for eget liv
- Medvirkning i egen behandling
- Kontroll over egne valg`,
    },
    {
      id: 'hov2-6-1-text-3',
      type: 'text',
      content: `### Helsefagarbeiderens rolle i psykisk helsearbeid

Som helsefagarbeider har du en viktig rolle i å fremme psykisk helse og støtte personer med psykiske utfordringer:

**Observasjon og rapportering**
- Observer endringer i atferd, humør og funksjonsnivå
- Vær oppmerksom på tegn på psykisk uhelse: tilbaketrekning, søvnproblemer, appetittendring, uro
- Rapporter observasjoner til sykepleier eller annet fagpersonell

**Daglig omsorg og støtte**
- Bidra til meningsfulle aktiviteter og sosial deltakelse
- Støtte ADL-funksjoner (aktiviteter i dagliglivet)
- Skape trygghet og forutsigbarhet i hverdagen

**Holdninger og verdier**
- Møte alle med respekt og verdighet
- Unngå stigmatisering og fordommer
- Se personen bak diagnosen
- Ha et recovery-orientert perspektiv`,
    },
    {
      id: 'hov2-6-1-tip-1',
      type: 'tip',
      title: 'Salutogenese og mestring',
      content: `Aaron Antonovskys teori om **salutogenese** fokuserer på hva som fremmer helse, i stedet for hva som forårsaker sykdom. Han introduserte begrepet **opplevelse av sammenheng** (OAS), som består av tre komponenter: **begripelighet** (forstå det som skjer), **håndterbarhet** (ha ressurser til å mestre) og **meningsfullhet** (oppleve at det er verdt innsatsen). Sterk opplevelse av sammenheng er forbundet med bedre psykisk helse.`,
    },
    {
      id: 'hov2-6-1-example-1',
      type: 'example',
      title: 'Eksempel: Recovery i praksis',
      content: `**Situasjon**: Marte, 34 år, har levd med depresjon i flere år. Hun bor i en kommunal bolig og får oppfølging fra psykisk helseteam. Du er helsefagarbeider i teamet.

**Recovery-orientert tilnærming:**
- Du spør Marte hva som er viktig for henne, ikke bare hva som er i veien
- Marte forteller at hun savner å male – hun var en dyktig kunstner før hun ble syk
- Sammen lager dere en plan for at Marte kan begynne på et malekurs i nærmiljøet
- Du hjelper henne med praktiske ting som påmelding og transport de første gangene
- Du støtter henne når hun opplever motgang og er engstelig for å møte nye mennesker
- Etter noen måneder har Marte fått nye venner på kurset og opplever mer mening i hverdagen

**Konklusjon**: Ved å ta utgangspunkt i Martes egne ønsker og styrker, støtter du hennes recovery-prosess. Selv om depresjonen ikke forsvinner helt, opplever Marte økt livskvalitet og mestring.`,
    },
    {
      id: 'hov2-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-6-1-ex-1',
        number: '6.1.1',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom psykiske plager og psykiske lidelser?',
        options: [
          { id: 'a', text: 'Psykiske plager og psykiske lidelser er det samme', isCorrect: false },
          { id: 'b', text: 'Psykiske plager er belastende tilstander som ikke nødvendigvis oppfyller diagnosekrav, mens psykiske lidelser oppfyller diagnosekrav', isCorrect: true },
          { id: 'c', text: 'Psykiske plager er mer alvorlige enn psykiske lidelser', isCorrect: false },
          { id: 'd', text: 'Psykiske plager krever alltid behandling, mens psykiske lidelser går over av seg selv', isCorrect: false },
        ],
        solution: 'Psykiske plager er tilstander som oppleves belastende, men som ikke nødvendigvis oppfyller kriteriene for en diagnose. Psykiske lidelser derimot oppfyller diagnosekravene i ICD-11 eller DSM-5 og medfører betydelig nedsatt funksjon i hverdagen. De fleste opplever psykiske plager i perioder uten å ha en psykisk lidelse.',
      },
    },
    {
      id: 'hov2-6-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-6-1-ex-2',
        number: '6.1.2',
        type: 'multiple-choice',
        task: 'Hva er kjernen i recovery-begrepet?',
        options: [
          { id: 'a', text: 'At alle psykiske lidelser kan helbredes fullstendig', isCorrect: false },
          { id: 'b', text: 'At man må bli symptomfri for å ha god livskvalitet', isCorrect: false },
          { id: 'c', text: 'En personlig prosess der man gjenvinner kontroll, mening og håp i eget liv', isCorrect: true },
          { id: 'd', text: 'At medisinsk behandling alltid er nødvendig', isCorrect: false },
        ],
        solution: 'Recovery handler om en personlig prosess der den enkelte gjenvinner kontroll over eget liv, mening og håp – uavhengig av om symptomene forsvinner helt. Det handler ikke nødvendigvis om helbredelse, men om å leve et meningsfullt liv til tross for psykiske utfordringer.',
      },
    },
    {
      id: 'hov2-6-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-6-1-ex-3',
        number: '6.1.3',
        type: 'classic',
        task: 'Forklar de fem dimensjonene i CHIME-modellen for recovery med egne ord.',
        solution: 'CHIME-modellen beskriver fem sentrale dimensjoner i recovery: 1) Connectedness (tilhørighet) – å ha meningsfulle relasjoner og sosial støtte. 2) Hope (håp) – å tro på at endring er mulig og ha motivasjon for fremtiden. 3) Identity (identitet) – å gjenoppbygge en positiv selvforståelse uten å defineres av diagnosen. 4) Meaning (mening) – å finne mening i livet gjennom aktiviteter, roller og deltakelse. 5) Empowerment (myndiggjøring) – å ta ansvar for eget liv og ha medvirkning i egen behandling.',
      },
    },
    {
      id: 'hov2-6-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-6-1-ex-4',
        number: '6.1.4',
        type: 'classic',
        task: 'Hva menes med Antonovskys begrep «opplevelse av sammenheng», og hvordan henger det sammen med psykisk helse?',
        solution: 'Opplevelse av sammenheng (OAS) består av tre komponenter: begripelighet (evnen til å forstå det som skjer), håndterbarhet (at man har ressurser til å mestre situasjoner) og meningsfullhet (at livet oppleves som verdt innsatsen). Mennesker med sterk opplevelse av sammenheng mestrer stress og motgang bedre, noe som er forbundet med bedre psykisk helse. Helsefagarbeidere kan støtte opplevelse av sammenheng ved å gi informasjon, hjelpe med mestring og bidra til meningsfulle aktiviteter.',
      },
    },
    {
      id: 'hov2-6-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'hov2-6-1-ex-5',
        number: '6.1.5',
        type: 'classic',
        task: 'Beskriv tre konkrete ting en helsefagarbeider kan gjøre for å støtte en persons recovery-prosess.',
        solution: '1) Ta utgangspunkt i personens egne ønsker og mål – spør hva som er viktig for dem, ikke bare hva som er i veien. 2) Støtte sosial deltakelse – hjelpe personen med å delta i aktiviteter og opprettholde relasjoner, for eksempel ved å følge til fritidsaktiviteter. 3) Fremme mestring og selvstendighet – la personen gjøre mest mulig selv og støtte gradvis økning av ansvar, fremfor å ta over oppgaver.',
      },
    },
    {
      id: 'hov2-6-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'hov2-6-1-ex-6',
        number: '6.1.6',
        type: 'multiple-choice',
        task: 'Omtrent hvor stor andel av den voksne befolkningen i Norge har en psykisk lidelse til enhver tid?',
        options: [
          { id: 'a', text: 'Ca. 1 av 20', isCorrect: false },
          { id: 'b', text: 'Ca. 1 av 10', isCorrect: false },
          { id: 'c', text: 'Ca. 1 av 5', isCorrect: true },
          { id: 'd', text: 'Ca. 1 av 2', isCorrect: false },
        ],
        solution: 'Omtrent 1 av 5 voksne i Norge (ca. 20 %) har en psykisk lidelse til enhver tid. Angst og depresjon er de vanligste psykiske lidelsene. Psykiske lidelser er også den ledende årsaken til uførhet blant unge.',
      },
    },
    {
      id: 'hov2-6-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Psykisk helse** er mer enn fravær av sykdom – det handler om velvære og mestring
- **Psykiske plager** er vanlige og trenger ikke alltid behandling, mens **psykiske lidelser** oppfyller diagnosekrav
- **Recovery** handler om å gjenvinne kontroll, mening og håp i eget liv
- **CHIME-modellen** beskriver fem dimensjoner i recovery: tilhørighet, håp, identitet, mening og myndiggjøring
- Helsefagarbeideren spiller en viktig rolle i å **observere**, **støtte** og **fremme** psykisk helse

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Psykisk helse | Tilstand av velvære der man kan realisere evner og håndtere stress |
| Psykisk lidelse | Tilstand som oppfyller diagnosekrav og gir nedsatt funksjon |
| Recovery | Personlig prosess mot et meningsfullt liv tross psykiske utfordringer |
| Salutogenese | Teori om hva som fremmer helse |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Psykisk helse', definition: 'Tilstand av velvære der man realiserer egne evner, håndterer stress og bidrar til samfunnet' },
    { term: 'Psykisk lidelse', definition: 'Tilstand som oppfyller diagnosekrav og medfører betydelig nedsatt funksjon' },
    { term: 'Recovery', definition: 'Personlig prosess der man gjenvinner kontroll, mening og håp uavhengig av symptomfrihet' },
    { term: 'Salutogenese', definition: 'Teori som fokuserer på hva som fremmer helse, utviklet av Antonovsky' },
    { term: 'Opplevelse av sammenheng', definition: 'Begripelighet, håndterbarhet og meningsfullhet – sentrale faktorer for mestring' },
  ],
};

// ============================================================================
// Kapittel 6.2: Angstlidelser og stemningslidelser
// ============================================================================

export const CHAPTER_HOV2_6_2: TextbookChapter = {
  id: 'hov2-6-2',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '6.2',
  title: 'Angstlidelser og stemningslidelser',
  description: 'En grundig gjennomgang av angstlidelser, depresjon og bipolar lidelse – symptomer, årsaker, behandlingsformer og helsefagarbeiderens rolle i oppfølgingen.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjøre rede for psykisk helse og vanlige psykiske lidelser',
  ],
  content: [
    {
      id: 'hov2-6-2-intro',
      type: 'text',
      content: `## Angst og stemningslidelser – de vanligste psykiske lidelsene

Angstlidelser og stemningslidelser er de mest utbredte psykiske lidelsene i Norge og resten av verden. Mange mennesker opplever disse tilstandene i løpet av livet, og som helsefagarbeider er det viktig å kjenne symptomene, forstå behandlingsformene og vite hvordan du kan støtte den som er rammet.

I dette kapittelet lærer du:
- Ulike typer angstlidelser og deres symptomer
- Depresjon – symptomer, årsaker og behandling
- Bipolar lidelse og kjennetegn
- Behandlingsformer og helsefagarbeiderens rolle`,
    },
    {
      id: 'hov2-6-2-def-1',
      type: 'definition',
      title: 'Angst',
      content: `**Angst** er en sterk følelse av frykt, uro eller bekymring som kan oppstå uten en reell trussel. Mens normal frykt er en nyttig reaksjon på fare, er angst kjennetegnet ved at reaksjonen er **uforholdsmessig sterk** i forhold til situasjonen, **vedvarende** over tid og **funksjonsnedsettende** i hverdagen. Angst ledsages ofte av fysiske symptomer som hjertebank, svetting, skjelving og pustebesvær.`,
    },
    {
      id: 'hov2-6-2-text-1',
      type: 'text',
      content: `### Ulike typer angstlidelser

**Generalisert angstlidelse (GAD)**
- Vedvarende og overdreven bekymring for mange ulike ting
- Uro, anspenthet, konsentrasjonsvansker og søvnproblemer
- Bekymringene er vanskelige å kontrollere
- Ofte fysiske symptomer som muskelspenninger og hodepine

**Panikklidelse**
- Gjentatte, uventede panikkfall med intens frykt
- Fysiske symptomer: hjertebank, brystsmerter, pustebesvær, svimmelhet
- Frykt for å dø eller «miste kontrollen»
- Kan utvikle unngåelsesatferd (agorafobi)

**Sosial angst**
- Intens frykt for sosiale situasjoner der man kan bli vurdert av andre
- Rødming, skjelving, kvalme i sosiale sammenhenger
- Unngåelse av sosiale situasjoner begrenser livsutfoldelsen
- En av de vanligste angstlidelsene blant unge

**Spesifikke fobier**
- Intens frykt for bestemte objekter eller situasjoner
- Eksempler: edderkopper, høyder, sprøyter, flyreiser
- Unngåelse er det vanligste mestringsforsøket
- Godt behandlingsresultat med eksponeringsterapi

**Posttraumatisk stresslidelse (PTSD)**
- Oppstår etter traumatiske hendelser
- Gjenopplevelser (flashbacks), mareritt, unngåelse
- Økt vaktsomhet og skvettenhet
- Kan oppstå etter ulykker, vold, overgrep eller krig`,
    },
    {
      id: 'hov2-6-2-def-2',
      type: 'definition',
      title: 'Depresjon',
      content: `**Depresjon** (depressiv lidelse) er en stemningslidelse kjennetegnet ved vedvarende **nedstemthet**, **tap av interesse og glede**, og **energiløshet** som varer i minst to uker. Andre symptomer inkluderer søvnforstyrrelser, appetittendring, konsentrasjonsvansker, skyldfølelse, verdiløshetsfølelse og i alvorlige tilfeller tanker om død og selvmord. Depresjon kan være mild, moderat eller alvorlig.`,
    },
    {
      id: 'hov2-6-2-text-2',
      type: 'text',
      content: `### Stemningslidelser

**Depresjon – symptomer og årsaker**

Kjernesymptomer (minst to av tre må være til stede):
- Nedstemthet det meste av dagen, nesten daglig
- Tap av interesse eller glede for aktiviteter
- Redusert energi og økt tretthet

Tilleggssymptomer:
- Søvnforstyrrelser (for mye eller for lite søvn)
- Appetitt- og vektendring
- Konsentrasjonsvansker og beslutningsvegring
- Skyldfølelse og verdiløshetsfølelse
- Psykomotorisk hemming eller agitasjon
- Tanker om død og selvmord

**Årsaker til depresjon:**
- Biologiske faktorer: arv, ubalanse i signalstoffene serotonin og noradrenalin
- Psykologiske faktorer: negative tankemønstre, tap, traumer
- Sosiale faktorer: ensomhet, konflikter, arbeidsledighet, fattigdom
- Ofte en kombinasjon av flere faktorer (biopsykososial modell)

**Bipolar lidelse**

Bipolar lidelse kjennetegnes av veksling mellom perioder med depresjon og perioder med **mani** eller **hypomani**:

**Maniske episoder:**
- Oppstemthet, overdreven energi og aktivitet
- Redusert søvnbehov, taleflom, tankeflukt
- Storhetstanker og nedsatt dømmekraft
- Kan foreta impulsive handlinger (f.eks. storshopping, risikofylte valg)

**Bipolar type I**: Minst én manisk episode
**Bipolar type II**: Hypomaniske episoder (mildere mani) og depressive episoder`,
    },
    {
      id: 'hov2-6-2-text-3',
      type: 'text',
      content: `### Behandling av angst og stemningslidelser

**Psykoterapi**
- **Kognitiv atferdsterapi (KAT)**: Mest dokumentert effektiv for angst og depresjon. Fokuserer på sammenhengen mellom tanker, følelser og atferd
- **Eksponeringsterapi**: Gradvis eksponering for det som utløser angst, spesielt effektivt ved fobier
- **Metakognitiv terapi**: Fokuserer på hvordan man forholder seg til egne tanker
- **Psykodynamisk terapi**: Utforsker ubevisste konflikter og tidlige erfaringer

**Medikamentell behandling**
- **SSRI** (selektive serotonin-reopptakshemmere): Førstevalg ved angst og depresjon (f.eks. sertralin, escitalopram)
- **SNRI** (serotonin- og noradrenalin-reopptakshemmere): Alternativ ved manglende effekt av SSRI
- **Stemningsstabiliserende** (litium, valproat): Brukes ved bipolar lidelse
- **Benzodiazepiner**: Korttidsbruk ved akutt angst, vanedannende

**Andre behandlingsformer**
- Fysisk aktivitet har dokumentert effekt ved mild til moderat depresjon
- Lysterapi ved vinterdepresjon (SAD)
- Elektrokonvulsiv terapi (ECT) ved alvorlig, behandlingsresistent depresjon
- Selvhjelp og psykoedukasjon`,
    },
    {
      id: 'hov2-6-2-tip-1',
      type: 'tip',
      title: 'Selvmordsfare – viktig kunnskap',
      content: `Depresjon er den viktigste risikofaktoren for selvmord. Tegn som bør tas alvorlig: direkte eller indirekte utsagn om å ikke ville leve, tilbaketrekning, plutselig ro etter en vanskelig periode, og å gi bort eiendeler. Som helsefagarbeider skal du **aldri** ignorere selvmordsytringer. Spør direkte og omsorgsfullt: «Tenker du på å ta livet ditt?» Det å spørre øker ikke risikoen – det viser at du bryr deg. Kontakt sykepleier eller lege umiddelbart ved bekymring.`,
    },
    {
      id: 'hov2-6-2-example-1',
      type: 'example',
      title: 'Eksempel: Støtte ved angst i hverdagen',
      content: `**Situasjon**: Jonas, 22 år, bor i en bemannet bolig og har sosial angst. Han har sluttet å gå i butikken og unngår fellesarealet. Du er helsefagarbeider i boligen.

**Tilnærming:**
- Du snakker rolig med Jonas og anerkjenner at angsten er vanskelig
- Dere lager sammen en trinnvis plan: først handle på nett, deretter gå til butikken på stille tidspunkter, og gradvis øke utfordringene
- Du tilbyr å bli med ham de første gangene og støtter ham uten å presse
- Dere avtaler at Jonas selv bestemmer tempoet
- Når Jonas mestrer en situasjon, gir du positiv tilbakemelding
- Du rapporterer fremgang og utfordringer til det tverrfaglige teamet

**Konklusjon**: Ved å kombinere anerkjennelse, gradvis eksponering og støtte, hjelper du Jonas med å utfordre angsten i et trygt tempo. Du erstatter ikke terapeuten, men er en viktig støttespiller i hverdagen.`,
    },
    {
      id: 'hov2-6-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-6-2-ex-1',
        number: '6.2.1',
        type: 'multiple-choice',
        task: 'Hvilke er de tre kjernesymptomene ved depresjon?',
        options: [
          { id: 'a', text: 'Hjertebank, svetting og skjelving', isCorrect: false },
          { id: 'b', text: 'Nedstemthet, tap av interesse/glede og energiløshet', isCorrect: true },
          { id: 'c', text: 'Storhetstanker, taleflom og redusert søvnbehov', isCorrect: false },
          { id: 'd', text: 'Hallusinasjoner, vrangforestillinger og tankeforstyrrelser', isCorrect: false },
        ],
        solution: 'De tre kjernesymptomene ved depresjon er nedstemthet det meste av dagen, tap av interesse eller glede for aktiviteter, og redusert energi/økt tretthet. Minst to av tre kjernesymptomer må være til stede i minst to uker for at diagnosen kan stilles.',
      },
    },
    {
      id: 'hov2-6-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-6-2-ex-2',
        number: '6.2.2',
        type: 'classic',
        task: 'Beskriv forskjellene mellom generalisert angstlidelse, panikklidelse og sosial angst.',
        solution: 'Generalisert angstlidelse (GAD) kjennetegnes av vedvarende bekymring for mange ulike ting, med uro, anspenthet og søvnproblemer. Panikklidelse innebærer gjentatte, uventede panikkfall med intens frykt og sterke fysiske symptomer som hjertebank og pustebesvær. Sosial angst er intens frykt for sosiale situasjoner der man kan bli vurdert av andre, med unngåelse av sosiale sammenhenger. Alle er angstlidelser, men de skiller seg i hva som utløser angsten og hvordan den viser seg.',
      },
    },
    {
      id: 'hov2-6-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-6-2-ex-3',
        number: '6.2.3',
        type: 'multiple-choice',
        task: 'Hva kjennetegner en manisk episode ved bipolar lidelse?',
        options: [
          { id: 'a', text: 'Vedvarende nedstemthet og energiløshet', isCorrect: false },
          { id: 'b', text: 'Oppstemthet, overdreven energi, redusert søvnbehov og nedsatt dømmekraft', isCorrect: true },
          { id: 'c', text: 'Hallusinasjoner og vrangforestillinger', isCorrect: false },
          { id: 'd', text: 'Intens frykt for sosiale situasjoner', isCorrect: false },
        ],
        solution: 'En manisk episode kjennetegnes av oppstemthet eller irritabilitet, overdreven energi og aktivitet, redusert søvnbehov, taleflom, tankeflukt, storhetstanker og nedsatt dømmekraft. Personen kan foreta impulsive handlinger som storshopping eller risikofylte valg.',
      },
    },
    {
      id: 'hov2-6-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-6-2-ex-4',
        number: '6.2.4',
        type: 'classic',
        task: 'Nevn tre ulike behandlingsformer for depresjon og forklar kort hvordan de virker.',
        solution: '1) Kognitiv atferdsterapi (KAT) – hjelper personen å identifisere og endre negative tankemønstre som opprettholder depresjonen. 2) SSRI-medikamenter – øker tilgjengeligheten av serotonin i hjernen, noe som bedrer stemningsleiet over tid (tar 2-4 uker). 3) Fysisk aktivitet – har dokumentert effekt ved mild til moderat depresjon, trolig gjennom økt frigjøring av endorfiner og bedret selvfølelse.',
      },
    },
    {
      id: 'hov2-6-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'hov2-6-2-ex-5',
        number: '6.2.5',
        type: 'classic',
        task: 'En beboer sier: «Jeg ser ikke noe poeng i å leve lenger.» Hva gjør du som helsefagarbeider?',
        solution: 'Du tar utsagnet alvorlig og viser omsorg. Spør direkte og rolig: «Tenker du på å ta livet ditt?» – det å spørre øker ikke risikoen. Lytt aktivt uten å bagatellisere. Ikke la personen være alene. Kontakt sykepleier eller lege umiddelbart for videre vurdering og tiltak. Dokumenter hendelsen. Det viktigste er å ikke ignorere slike utsagn, men å vise at du bryr deg og sørge for at personen får profesjonell hjelp.',
      },
    },
    {
      id: 'hov2-6-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Angstlidelser** omfatter generalisert angst, panikklidelse, sosial angst, fobier og PTSD
- **Depresjon** kjennetegnes av nedstemthet, tap av interesse og energiløshet i minst to uker
- **Bipolar lidelse** innebærer veksling mellom depressive og maniske/hypomaniske episoder
- **Behandling** inkluderer psykoterapi (spesielt KAT), medikamenter (SSRI) og fysisk aktivitet
- **Selvmordsfare** skal alltid tas alvorlig – spør direkte og kontakt fagpersonell

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Angst | Uforholdsmessig sterk frykt uten reell trussel |
| Depresjon | Vedvarende nedstemthet med tap av interesse og energi |
| Bipolar lidelse | Veksling mellom depresjon og mani/hypomani |
| Kognitiv atferdsterapi | Terapiform som endrer negative tankemønstre |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Angst', definition: 'Uforholdsmessig sterk frykt, uro eller bekymring som er vedvarende og funksjonsnedsettende' },
    { term: 'Depresjon', definition: 'Stemningslidelse med nedstemthet, tap av interesse og energiløshet i minst to uker' },
    { term: 'Bipolar lidelse', definition: 'Stemningslidelse med veksling mellom depressive og maniske eller hypomaniske episoder' },
    { term: 'Kognitiv atferdsterapi', definition: 'Terapiform som fokuserer på sammenhengen mellom tanker, følelser og atferd' },
    { term: 'SSRI', definition: 'Selektive serotonin-reopptakshemmere – førstevalg ved behandling av angst og depresjon' },
  ],
};

// ============================================================================
// Kapittel 6.3: Psykoser og schizofreni
// ============================================================================

export const CHAPTER_HOV2_6_3: TextbookChapter = {
  id: 'hov2-6-3',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '6.3',
  title: 'Psykoser og schizofreni',
  description: 'En innføring i psykotiske tilstander og schizofreni – symptomer, årsaker, vrangforestillinger, hallusinasjoner og helsefagarbeiderens rolle i oppfølgingen.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjøre rede for psykisk helse og vanlige psykiske lidelser',
  ],
  content: [
    {
      id: 'hov2-6-3-intro',
      type: 'text',
      content: `## Psykoser – når virkelighetsoppfatningen endres

Psykose er en alvorlig psykisk tilstand der personens virkelighetsoppfatning er betydelig endret. For den som opplever en psykose, er opplevelsene helt virkelige, noe som gjør tilstanden svært skremmende. Som helsefagarbeider er det viktig å forstå hva psykose innebærer og hvordan du best kan møte personen som er rammet.

I dette kapittelet lærer du:
- Hva psykose er og hvordan det oppleves
- Schizofreni – den mest kjente psykotiske lidelsen
- Positive og negative symptomer
- Behandling og helsefagarbeiderens rolle`,
    },
    {
      id: 'hov2-6-3-def-1',
      type: 'definition',
      title: 'Psykose',
      content: `En **psykose** er en tilstand der personen har en **endret virkelighetsoppfatning**. Kjennetegnene er **hallusinasjoner** (sanseopplevelser uten ytre stimuli, f.eks. å høre stemmer), **vrangforestillinger** (feilaktige overbevisninger som ikke lar seg korrigere) og **tankeforstyrrelser** (ulogisk eller usammenhengende tenkning). Psykose kan oppstå ved flere tilstander, inkludert schizofreni, bipolar lidelse, rusmisbruk og alvorlig depresjon.`,
    },
    {
      id: 'hov2-6-3-text-1',
      type: 'text',
      content: `### Symptomer ved psykose

Symptomene ved psykose deles tradisjonelt i **positive** og **negative** symptomer:

**Positive symptomer** (noe som kommer i tillegg til normal opplevelse):

**Hallusinasjoner:**
- Hørselshallusinasjoner er vanligst – å høre stemmer som andre ikke hører
- Stemmene kan være kommenterende, befalende eller kritiske
- Synshallusinasjoner – å se ting som ikke er der
- Kan også forekomme i andre sanser: berøring, lukt, smak

**Vrangforestillinger:**
- Forfølgelsesforestillinger – troen på at noen er ute etter en
- Storhetsforestillinger – troen på at man har spesielle evner eller status
- Referanseideer – troen på at TV, radio eller fremmede sender spesielle meldinger
- Påvirkningsforestillinger – troen på at tankene styres av andre

**Tankeforstyrrelser:**
- Ulogisk og usammenhengende tale
- Tankeblokk – tankene stopper plutselig opp
- Løse assosiasjoner – hopper mellom urelaterte emner

**Negative symptomer** (noe som trekkes fra normal funksjon):
- Apati og manglende motivasjon
- Sosial tilbaketrekning
- Fattig følelsesuttrykk (flat affekt)
- Redusert taleinitiativ
- Manglende evne til å oppleve glede (anhedoni)`,
    },
    {
      id: 'hov2-6-3-def-2',
      type: 'definition',
      title: 'Schizofreni',
      content: `**Schizofreni** er en alvorlig psykisk lidelse som kjennetegnes av gjentatte eller vedvarende psykotiske episoder med hallusinasjoner, vrangforestillinger og tankeforstyrrelser, i tillegg til negative symptomer og kognitiv svikt. Schizofreni rammer ca. 1 % av befolkningen og debuterer vanligvis i ung voksen alder (18–30 år). Årsaken er sammensatt og inkluderer genetiske, nevrologiske og miljømessige faktorer.`,
    },
    {
      id: 'hov2-6-3-text-2',
      type: 'text',
      content: `### Schizofreni – forløp og årsaker

**Sykdomsforløp:**
- **Prodromalfasen**: Gradvis endring i funksjon og atferd før den første psykotiske episoden – kan vare måneder til år
- **Akuttfasen**: Aktive psykotiske symptomer som hallusinasjoner og vrangforestillinger
- **Stabiliseringsfasen**: Symptomene avtar, men personen er sårbar for tilbakefall
- **Stabil fase**: Noen oppnår god funksjon, mens andre har vedvarende negative symptomer

**Årsaker (stress-sårbarhetsmodellen):**
- **Genetisk sårbarhet**: Risikoen øker med nære familiemedlemmer med schizofreni
- **Nevrobiologiske faktorer**: Forstyrret dopaminbalanse i hjernen
- **Miljøfaktorer**: Komplikasjoner i svangerskap/fødsel, oppvekstbetingelser
- **Utløsende faktorer**: Stress, rusbruk (spesielt cannabis i ung alder), traumatiske hendelser
- Sykdommen oppstår når stressbelastningen overstiger sårbarhetsgrensen

**Prognose:**
- Ca. 25 % blir helt friske eller nesten friske
- Ca. 50 % har periodevis forverring med tilfredsstillende funksjon mellom episodene
- Ca. 25 % har et mer alvorlig forløp med vedvarende symptomer
- Tidlig oppdagelse og behandling bedrer prognosen betydelig`,
    },
    {
      id: 'hov2-6-3-text-3',
      type: 'text',
      content: `### Behandling av psykoser og schizofreni

**Medikamentell behandling**
- **Antipsykotika** er grunnsteinen i behandlingen
- Blokkerer dopaminreseptorer og reduserer positive symptomer
- Første generasjon (typiske): klorpromazin, haloperidol – mer bivirkninger
- Andre generasjon (atypiske): olanzapin, risperidon, quetiapin – færre motoriske bivirkninger
- Viktige bivirkninger: vektøkning, tretthet, metabolsk syndrom, motoriske forstyrrelser

**Psykososial behandling**
- Kognitiv terapi tilpasset psykose
- Familiearbeid og psykoedukasjon
- Sosial ferdighetstrening
- Arbeid og aktivitetstilbud (IPS – Individual Placement and Support)
- Støttet bolig og hverdagsmestring

**Helsefagarbeiderens rolle:**
- Bygge trygge relasjoner med tålmodighet og respekt
- Observer og rapporter endringer i symptomer og funksjon
- Støtte medikamentetterlevelse uten å presse
- Hjelpe med daglige aktiviteter og struktur
- Aldri diskuter eller argumenter mot vrangforestillinger – anerkjenn opplevelsen uten å bekrefte innholdet`,
    },
    {
      id: 'hov2-6-3-tip-1',
      type: 'tip',
      title: 'Møte personer med psykose',
      content: `Når du møter en person med psykotiske symptomer: Vær rolig og trygg. Snakk enkelt og tydelig. Unngå å argumentere mot vrangforestillinger – si heller «Jeg forstår at du opplever det slik, det høres vanskelig ut.» Ikke spill med på hallusinasjonene, men avvis dem heller ikke. Reduser stimuli i omgivelsene. Sørg for egen sikkerhet og tilkall hjelp dersom situasjonen oppleves truende. Husk at personen som regel er mer redd enn du er.`,
    },
    {
      id: 'hov2-6-3-example-1',
      type: 'example',
      title: 'Eksempel: Oppfølging av person med schizofreni',
      content: `**Situasjon**: Erik, 28 år, har schizofreni og bor i en bemannet bolig. Han har vært stabil i flere måneder med antipsykotisk medisin. De siste dagene har du lagt merke til at han har trukket seg tilbake, slutter å dusje og sover lite. Han virker urolig og mumler for seg selv.

**Hva du gjør:**
- Du nærmer deg Erik rolig og viser at du bryr deg: «Hei Erik, jeg ser at du ikke har det så bra. Vil du prate litt?»
- Erik forteller at stemmene har kommet tilbake og at de sier stygge ting om ham
- Du lytter uten å avvise opplevelsen: «Det høres veldig ubehagelig ut. Jeg er her for deg.»
- Du rapporterer observasjonene til sykepleier umiddelbart – endringene kan tyde på tilbakefall
- Du hjelper Erik med å opprettholde struktur: mat, drikke, hvile
- Du dokumenterer observasjonene nøye

**Konklusjon**: Tidlig oppdagelse av tilbakefallstegn og rask rapportering kan forebygge en fullstendig psykotisk episode. Din daglige kontakt gjør deg til en nøkkelperson i å oppdage endringer.`,
    },
    {
      id: 'hov2-6-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-6-3-ex-1',
        number: '6.3.1',
        type: 'multiple-choice',
        task: 'Hva er en hallusinasjon?',
        options: [
          { id: 'a', text: 'En feilaktig overbevisning som ikke lar seg korrigere', isCorrect: false },
          { id: 'b', text: 'En sanseopplevelse uten ytre stimuli', isCorrect: true },
          { id: 'c', text: 'En ulogisk tankerekke', isCorrect: false },
          { id: 'd', text: 'En plutselig stemningsendring', isCorrect: false },
        ],
        solution: 'En hallusinasjon er en sanseopplevelse uten ytre stimuli – personen hører, ser, kjenner, lukter eller smaker noe som ikke er der i virkeligheten. Hørselshallusinasjoner (å høre stemmer) er den vanligste formen ved schizofreni. Vrangforestillinger derimot er feilaktige overbevisninger.',
      },
    },
    {
      id: 'hov2-6-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-6-3-ex-2',
        number: '6.3.2',
        type: 'classic',
        task: 'Forklar forskjellen mellom positive og negative symptomer ved schizofreni og gi eksempler.',
        solution: 'Positive symptomer er noe som kommer i tillegg til normal opplevelse: hallusinasjoner (f.eks. å høre stemmer), vrangforestillinger (f.eks. forfølgelsesideer) og tankeforstyrrelser (usammenhengende tale). Negative symptomer er noe som trekkes fra normal funksjon: apati, sosial tilbaketrekning, fattig følelsesuttrykk, redusert taleinitiativ og manglende evne til å oppleve glede. Negative symptomer er ofte vanskeligere å behandle og kan ha større innvirkning på daglig funksjon.',
      },
    },
    {
      id: 'hov2-6-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-6-3-ex-3',
        number: '6.3.3',
        type: 'multiple-choice',
        task: 'Hva bør du gjøre dersom en beboer forteller om vrangforestillinger?',
        options: [
          { id: 'a', text: 'Argumentere mot og forklare at det ikke stemmer', isCorrect: false },
          { id: 'b', text: 'Spille med og late som du ser det samme', isCorrect: false },
          { id: 'c', text: 'Anerkjenne opplevelsen uten å bekrefte innholdet', isCorrect: true },
          { id: 'd', text: 'Ignorere det som sies og snakke om noe annet', isCorrect: false },
        ],
        solution: 'Du bør anerkjenne personens opplevelse uten å bekrefte innholdet i vrangforestillingen. Si f.eks.: «Jeg forstår at du opplever det slik, det høres vanskelig ut.» Å argumentere mot skaper konflikt og utrygghet. Å spille med forsterker forestillingen. Å ignorere det viser manglende respekt.',
      },
    },
    {
      id: 'hov2-6-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-6-3-ex-4',
        number: '6.3.4',
        type: 'classic',
        task: 'Forklar stress-sårbarhetsmodellen og hvordan den forklarer utvikling av schizofreni.',
        solution: 'Stress-sårbarhetsmodellen forklarer at schizofreni oppstår gjennom en kombinasjon av medfødt sårbarhet og ytre stressbelastning. Noen mennesker har en genetisk og/eller nevrobiologisk sårbarhet som gjør dem mer utsatt. Når stressbelastningen (f.eks. rusbruk, traumer, sosiale belastninger) overstiger personens tålegrense, kan psykotiske symptomer utløses. Modellen forklarer hvorfor ikke alle med genetisk risiko utvikler schizofreni, og hvorfor stress alene ikke er nok.',
      },
    },
    {
      id: 'hov2-6-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'hov2-6-3-ex-5',
        number: '6.3.5',
        type: 'classic',
        task: 'Beskriv tre tegn på mulig tilbakefall hos en person med schizofreni som du bør rapportere videre.',
        solution: 'Tre tegn på mulig tilbakefall: 1) Sosial tilbaketrekning – personen trekker seg tilbake fra fellesskap og aktiviteter de vanligvis deltar i. 2) Endret søvnmønster og egenomsorg – slutter å dusje, kle seg eller sover svært lite. 3) Uro og uvanlig atferd – snakker med seg selv, virker paranoid eller mistenker at noen er ute etter dem. Tidlig rapportering til sykepleier eller lege er avgjørende for å kunne forebygge en fullstendig psykotisk episode.',
      },
    },
    {
      id: 'hov2-6-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Psykose** innebærer endret virkelighetsoppfatning med hallusinasjoner, vrangforestillinger og tankeforstyrrelser
- **Schizofreni** er den mest kjente psykotiske lidelsen og rammer ca. 1 % av befolkningen
- Symptomene deles i **positive** (hallusinasjoner, vrangforestillinger) og **negative** (apati, tilbaketrekning)
- **Antipsykotika** er grunnsteinen i medikamentell behandling
- Helsefagarbeideren er viktig for å oppdage **tilbakefallstegn** og bygge **trygge relasjoner**

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Psykose | Tilstand med endret virkelighetsoppfatning |
| Hallusinasjon | Sanseopplevelse uten ytre stimuli |
| Vrangforestilling | Feilaktig overbevisning som ikke lar seg korrigere |
| Schizofreni | Alvorlig psykisk lidelse med gjentatte psykotiske episoder |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Psykose', definition: 'Tilstand med endret virkelighetsoppfatning, hallusinasjoner og vrangforestillinger' },
    { term: 'Hallusinasjon', definition: 'Sanseopplevelse uten ytre stimuli – å høre, se eller kjenne noe som ikke er der' },
    { term: 'Vrangforestilling', definition: 'Feilaktig overbevisning som ikke lar seg korrigere med logiske argumenter' },
    { term: 'Schizofreni', definition: 'Alvorlig psykisk lidelse med gjentatte psykotiske episoder og negative symptomer' },
    { term: 'Stress-sårbarhetsmodellen', definition: 'Modell som forklarer psykose som samspill mellom genetisk sårbarhet og ytre stress' },
  ],
};

// ============================================================================
// Kapittel 6.4: Rus og avhengighet
// ============================================================================

export const CHAPTER_HOV2_6_4: TextbookChapter = {
  id: 'hov2-6-4',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '6.4',
  title: 'Rus og avhengighet',
  description: 'En grundig gjennomgang av rusmidler, avhengighetsutvikling, behandlingsformer og skadereduksjon. Lær om de vanligste rusmidlene og hvordan helsefagarbeidere kan bidra i rusarbeid.',
  estimatedMinutes: 55,
  competenceGoals: [
    'drøfte årsaker til og konsekvenser av rusmisbruk',
  ],
  content: [
    {
      id: 'hov2-6-4-intro',
      type: 'text',
      content: `## Rus og avhengighet – et sammensatt problem

Rusmiddelbruk er et utbredt fenomen i samfunnet, fra lovlig bruk av alkohol til illegal bruk av narkotika. For noen utvikler rusbruken seg til avhengighet, med alvorlige konsekvenser for helse, relasjoner og livskvalitet. Som helsefagarbeider vil du møte personer med rusproblemer i mange ulike sammenhenger.

I dette kapittelet lærer du:
- De vanligste rusmidlene og deres virkninger
- Hvordan avhengighet utvikles
- Behandling og rehabilitering
- Skadereduksjon som strategi`,
    },
    {
      id: 'hov2-6-4-def-1',
      type: 'definition',
      title: 'Avhengighet',
      content: `**Avhengighet** (ruslidelse) er en kronisk tilstand kjennetegnet ved **tvangsmessig bruk** av et rusmiddel til tross for negative konsekvenser. Avhengighet innebærer **toleranseutvikling** (behov for økt dose for samme effekt), **abstinenssymptomer** ved seponering, **tap av kontroll** over bruken, og at rusmidlet får en stadig mer **sentral plass** i livet. Avhengighet regnes i dag som en hjernesykdom med sammensatte årsaker.`,
    },
    {
      id: 'hov2-6-4-text-1',
      type: 'text',
      content: `### De vanligste rusmidlene

**Alkohol**
- Det mest utbredte rusmiddelet i Norge
- Virker dempende på sentralnervesystemet
- Gir avslapping, hemningsløshet og nedsatt dømmekraft
- Langvarig overforbruk kan gi leverskade, hjerneskade og avhengighet
- Abstinens kan være livstruende (kramper, delirium tremens)

**Cannabis (marihuana og hasj)**
- Det vanligste illegale rusmiddelet
- Virker avslappende, kan gi endret tidsopplevelse og sansning
- Kan utløse psykose, spesielt hos sårbare og unge
- Gir psykisk avhengighet, men sjelden alvorlig fysisk abstinens
- Kan hemme hjerneutvikling ved bruk i ungdomsårene

**Amfetamin og metamfetamin**
- Sentralstimulerende midler som gir økt energi og eufori
- Øker dopamin- og noradrenalinnivåene i hjernen
- Gir søvnløshet, appetittløshet og økt puls/blodtrykk
- Kan utløse amfetaminpsykose ved langvarig bruk
- Sterk avhengighetsutvikling

**Opioider (heroin, morfin, oksykodon)**
- Sterkt smertestillende og euforiserende
- Høy risiko for avhengighet og overdose
- Overdose gir pustestans – kan være dødelig
- Nalokson (Nyxoid) er motgift ved overdose
- Legemiddelassistert rehabilitering (LAR) med metadon eller buprenorfin

**Benzodiazepiner (Sobril, Vival, Rivotril)**
- Angstdempende og beroligende
- Vanedannende ved langvarig bruk
- Farlig i kombinasjon med alkohol og opioider
- Abstinens kan gi kramper og angst

**Kokain**
- Sentralstimulerende med kortvarig, intens rus
- Gir eufori, energi og storhetsfølelse
- Høy avhengighetsrisiko, spesielt for crack-kokain
- Kan gi hjerteinfarkt og hjerneslag`,
    },
    {
      id: 'hov2-6-4-def-2',
      type: 'definition',
      title: 'Skadereduksjon',
      content: `**Skadereduksjon** (harm reduction) er en tilnærming som har som mål å **redusere de negative konsekvensene** av rusmiddelbruk, uten å nødvendigvis kreve full rusfrihet. Eksempler på skadereduksjonstiltak er sprøyterom, utdeling av rene sprøyter, nalokson-program, legemiddelassistert rehabilitering (LAR) og lavterskel helsetilbud. Skadereduksjon anerkjenner at rusfrihet ikke alltid er et realistisk mål, og prioriterer å bevare liv og helse.`,
    },
    {
      id: 'hov2-6-4-text-2',
      type: 'text',
      content: `### Avhengighetsutvikling

**Faser i avhengighetsutvikling:**

**1. Eksperimentering**
- Prøver rusmiddelet av nysgjerrighet, sosialt press eller for å håndtere vanskeligheter
- Ikke alle som eksperimenterer utvikler avhengighet

**2. Regelmessig bruk**
- Bruken blir mer systematisk og forutsigbar
- Kan begynne å bruke rusmiddelet for å håndtere stress eller ubehag

**3. Risikobruk**
- Bruken får negative konsekvenser (jobb, skole, relasjoner, helse)
- Toleranseutvikling – trenger mer for å oppnå samme effekt
- Begynnende tap av kontroll

**4. Avhengighet**
- Tvangsmessig bruk tross negative konsekvenser
- Abstinenssymptomer ved forsøk på å slutte
- Rusmiddelet dominerer hverdagen
- Ofte rusrelaterte helse- og sosiale problemer

**Risikofaktorer for avhengighet:**
- Genetisk sårbarhet (arv forklarer ca. 40–60 % av risikoen)
- Tidlig russtart
- Psykiske lidelser (selvmedisinering)
- Traumer og belastende oppvekst
- Sosial eksklusjon og mangel på tilhørighet
- Lett tilgang til rusmidler`,
    },
    {
      id: 'hov2-6-4-text-3',
      type: 'text',
      content: `### Behandling og rehabilitering

**Tverrfaglig spesialisert rusbehandling (TSB)**
- Rett til vurdering og behandling i spesialisthelsetjenesten
- Poliklinisk behandling, dagbehandling eller døgnbehandling
- Avrusning under medisinsk tilsyn

**Legemiddelassistert rehabilitering (LAR)**
- Behandling av opioidavhengighet med metadon eller buprenorfin (Subutex/Suboxone)
- Stabiliserer og forebygger overdose og illegal rusbruk
- Kombineres med psykososial oppfølging
- Krav om regelmessige kontroller og urinprøver

**Psykososial behandling**
- Motiverende intervju (MI) – styrker personens egen motivasjon for endring
- Kognitiv atferdsterapi
- Tilbakefallsforebygging
- Nettverksarbeid og familiebehandling
- Selvhjelpsgrupper (AA, NA)

**Kommunale tjenester**
- Oppfølging i bolig og arbeid
- Lavterskeltilbud som væresteder og oppsøkende tjenester
- Ansvarsgrupper og individuell plan
- Koordinering mellom spesialist- og kommunehelsetjeneste

**Skadereduksjonstiltak:**
- Sprøytebytte og utdeling av rent brukerutstyr
- Naloksonprogram – opplæring i bruk av motgift ved overdose
- Brukerrom (sprøyterom) der injisering kan skje under tilsyn
- Lavterskel helsetilbud med helsesykepleier`,
    },
    {
      id: 'hov2-6-4-tip-1',
      type: 'tip',
      title: 'Dobbeltdiagnose – rus og psykisk lidelse',
      content: `Mange personer med ruslidelse har samtidig en psykisk lidelse (dobbeltdiagnose). Rusen kan være et forsøk på å dempe psykiske symptomer (selvmedisinering), eller rusbruken kan utløse psykisk sykdom. Behandlingen bør være **integrert** – det vil si at begge tilstander behandles samtidig og i sammenheng. Som helsefagarbeider er det viktig å se hele mennesket, ikke bare rusproblematikken.`,
    },
    {
      id: 'hov2-6-4-example-1',
      type: 'example',
      title: 'Eksempel: Skadereduksjon i praksis',
      content: `**Situasjon**: Stig, 45 år, har vært opioidavhengig i over 20 år. Han er i LAR-behandling med buprenorfin, men har fortsatt perioder med tilleggsrus. Du jobber på et lavterskeltilbud i kommunen.

**Skadereduksjonstilnærming:**
- Du møter Stig med respekt og uten fordømmelse, uavhengig av om han ruser seg
- Du sørger for at han har tilgang til rent brukerutstyr for å forebygge smitte
- Du har gitt Stig opplæring i bruk av nalokson nesespray (Nyxoid) – han bærer alltid en med seg
- Du hjelper Stig med praktiske ting: legetime, NAV-søknader, matutlevering
- Du snakker med Stig om hans egne mål – han ønsker å få mer kontakt med sønnen sin
- Dere jobber sammen med en plan for å stabilisere hverdagen hans

**Konklusjon**: Selv om Stig ikke er rusfri, bidrar skadereduksjonstiltakene til å bevare hans helse og verdighet. Naloksonopplæringen kan redde livet hans ved en overdose. Relasjonen du bygger gjør at Stig har tillit til hjelpeapparatet.`,
    },
    {
      id: 'hov2-6-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-6-4-ex-1',
        number: '6.4.1',
        type: 'multiple-choice',
        task: 'Hva kjennetegner avhengighet?',
        options: [
          { id: 'a', text: 'At man har prøvd et rusmiddel en gang', isCorrect: false },
          { id: 'b', text: 'Tvangsmessig bruk tross negative konsekvenser, toleranse og abstinenssymptomer', isCorrect: true },
          { id: 'c', text: 'At man drikker alkohol på fester', isCorrect: false },
          { id: 'd', text: 'At man bruker smertestillende etter operasjon', isCorrect: false },
        ],
        solution: 'Avhengighet kjennetegnes av tvangsmessig bruk av et rusmiddel til tross for negative konsekvenser, toleranseutvikling (behov for økt dose), abstinenssymptomer ved forsøk på å slutte, og at rusmiddelet får en stadig mer sentral plass i livet.',
      },
    },
    {
      id: 'hov2-6-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-6-4-ex-2',
        number: '6.4.2',
        type: 'classic',
        task: 'Beskriv de fire fasene i avhengighetsutvikling.',
        solution: '1) Eksperimentering – prøver rusmiddelet av nysgjerrighet eller sosialt press. 2) Regelmessig bruk – bruken blir mer systematisk, kan begynne å bruke for å håndtere stress. 3) Risikobruk – bruken gir negative konsekvenser, toleranseutvikling og begynnende tap av kontroll. 4) Avhengighet – tvangsmessig bruk tross negative konsekvenser, abstinenssymptomer og rusmiddelet dominerer hverdagen.',
      },
    },
    {
      id: 'hov2-6-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-6-4-ex-3',
        number: '6.4.3',
        type: 'multiple-choice',
        task: 'Hva er skadereduksjon?',
        options: [
          { id: 'a', text: 'En behandling som krever umiddelbar rusfrihet', isCorrect: false },
          { id: 'b', text: 'En tilnærming som fokuserer på å redusere negative konsekvenser av rusbruk', isCorrect: true },
          { id: 'c', text: 'En straff for rusbruk', isCorrect: false },
          { id: 'd', text: 'En metode for å hindre all tilgang til rusmidler', isCorrect: false },
        ],
        solution: 'Skadereduksjon er en tilnærming som har som mål å redusere de negative konsekvensene av rusbruk, uten å nødvendigvis kreve full rusfrihet. Eksempler er sprøytebytte, naloksonprogram, LAR og lavterskel helsetilbud. Tilnærmingen anerkjenner at rusfrihet ikke alltid er et realistisk mål.',
      },
    },
    {
      id: 'hov2-6-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-6-4-ex-4',
        number: '6.4.4',
        type: 'classic',
        task: 'Hva er LAR, og hvordan virker denne behandlingsformen?',
        solution: 'LAR (legemiddelassistert rehabilitering) er behandling av opioidavhengighet med metadon eller buprenorfin. Disse legemidlene binder seg til de samme reseptorene som heroin, men gir en stabil, jevn effekt uten den intense rusen. LAR stabiliserer pasienten, forebygger overdose og reduserer illegal rusbruk. Behandlingen kombineres med psykososial oppfølging og krever regelmessige kontroller.',
      },
    },
    {
      id: 'hov2-6-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'hov2-6-4-ex-5',
        number: '6.4.5',
        type: 'multiple-choice',
        task: 'Hvilket rusmiddel er mest utbredt i Norge?',
        options: [
          { id: 'a', text: 'Cannabis', isCorrect: false },
          { id: 'b', text: 'Amfetamin', isCorrect: false },
          { id: 'c', text: 'Alkohol', isCorrect: true },
          { id: 'd', text: 'Kokain', isCorrect: false },
        ],
        solution: 'Alkohol er det mest utbredte rusmiddelet i Norge. Det virker dempende på sentralnervesystemet og kan gi avslapping og hemningsløshet. Langvarig overforbruk kan føre til leverskade, hjerneskade og avhengighet. Alkoholabstinens kan i alvorlige tilfeller være livstruende.',
      },
    },
    {
      id: 'hov2-6-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'hov2-6-4-ex-6',
        number: '6.4.6',
        type: 'classic',
        task: 'Drøft begrepet «dobbeltdiagnose» og forklar hvorfor integrert behandling er viktig.',
        solution: 'Dobbeltdiagnose betyr at en person har både en ruslidelse og en psykisk lidelse samtidig. Det er vanlig at rusbruk starter som selvmedisinering mot psykiske symptomer, eller at langvarig rusbruk utløser psykisk sykdom. Integrert behandling – der begge tilstander behandles samtidig – er viktig fordi de påvirker hverandre gjensidig. Å behandle bare den ene tilstanden gir ofte dårlige resultater, da den ubehandlede tilstanden kan forverre den andre.',
      },
    },
    {
      id: 'hov2-6-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- De vanligste **rusmidlene** inkluderer alkohol, cannabis, amfetamin, opioider, benzodiazepiner og kokain
- **Avhengighet** utvikles gradvis gjennom eksperimentering, regelmessig bruk, risikobruk og avhengighet
- **LAR** er viktig behandling ved opioidavhengighet med metadon eller buprenorfin
- **Skadereduksjon** fokuserer på å redusere negative konsekvenser uten å kreve rusfrihet
- **Dobbeltdiagnose** krever integrert behandling av rus og psykisk lidelse

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Avhengighet | Tvangsmessig rusbruk med toleranse og abstinenssymptomer |
| Skadereduksjon | Tilnærming som reduserer negative konsekvenser av rusbruk |
| LAR | Legemiddelassistert rehabilitering med metadon eller buprenorfin |
| Dobbeltdiagnose | Samtidig ruslidelse og psykisk lidelse |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Avhengighet', definition: 'Tvangsmessig bruk av rusmiddel med toleranse, abstinens og tap av kontroll' },
    { term: 'Toleranse', definition: 'Behov for økt dose av et rusmiddel for å oppnå samme effekt' },
    { term: 'Skadereduksjon', definition: 'Tilnærming som reduserer negative konsekvenser av rusbruk uten å kreve rusfrihet' },
    { term: 'LAR', definition: 'Legemiddelassistert rehabilitering – behandling av opioidavhengighet med substitusjonslegemidler' },
    { term: 'Dobbeltdiagnose', definition: 'Samtidig ruslidelse og psykisk lidelse som krever integrert behandling' },
  ],
};

// ============================================================================
// Kapittel 6.5: Kommunikasjon og relasjonskompetanse
// ============================================================================

export const CHAPTER_HOV2_6_5: TextbookChapter = {
  id: 'hov2-6-5',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '6.5',
  title: 'Kommunikasjon og relasjonskompetanse',
  description: 'En grundig innføring i kommunikasjonsteknikker, empati, aktiv lytting og relasjonsbygging i møte med personer med psykiske utfordringer og ruslidelser.',
  estimatedMinutes: 50,
  competenceGoals: [
    'kommunisere profesjonelt og relasjonsbyggende',
  ],
  content: [
    {
      id: 'hov2-6-5-intro',
      type: 'text',
      content: `## Kommunikasjon – helsefagarbeiderens viktigste verktøy

God kommunikasjon er selve grunnlaget for alt helse- og omsorgsarbeid. I møte med mennesker som har psykiske utfordringer eller ruslidelser, er kommunikasjonsferdighetene dine ekstra viktige. Hvordan du snakker, lytter og forholder deg til andre mennesker, kan gjøre en avgjørende forskjell for deres opplevelse av trygghet og verdighet.

I dette kapittelet lærer du:
- Profesjonell kommunikasjon i helsearbeid
- Aktiv lytting og empati
- Motiverende intervju (MI)
- Relasjonsbygging og terapeutisk allianse`,
    },
    {
      id: 'hov2-6-5-def-1',
      type: 'definition',
      title: 'Relasjonskompetanse',
      content: `**Relasjonskompetanse** er evnen til å etablere, vedlikeholde og avslutte relasjoner på en profesjonell og ivaretakende måte. Det innebærer å kunne **skape tillit**, **vise respekt**, **kommunisere tydelig** og **regulere egne følelser** i møte med andre mennesker. I helse- og omsorgsarbeid er relasjonskompetanse avgjørende for å bygge en **terapeutisk allianse** – et samarbeid basert på tillit, respekt og felles mål.`,
    },
    {
      id: 'hov2-6-5-text-1',
      type: 'text',
      content: `### Profesjonell kommunikasjon

Profesjonell kommunikasjon skiller seg fra hverdagskommunikasjon ved at den har et **bevisst formål** og tar hensyn til den andres behov:

**Verbal kommunikasjon:**
- Bruk et enkelt og tydelig språk
- Tilpass språket til mottakerens nivå og tilstand
- Still åpne spørsmål: «Hvordan har du det i dag?» fremfor «Har du det bra?»
- Unngå fagsjargong som kan forvirre
- Gi informasjon i passende mengder

**Nonverbal kommunikasjon:**
- Kroppsspråk utgjør en stor del av kommunikasjonen
- Øyekontakt viser interesse og oppmerksomhet
- Ansiktsuttrykk bør samsvare med det du sier
- Kroppsholdning – åpen og vendt mot personen
- Stemmebruk – tone, tempo og volum påvirker budskapet
- Berøring kan trøste, men krev alltid samtykke

**Aktiv lytting – mer enn å høre:**
- **Gi full oppmerksomhet** – legg bort telefon og andre distraksjoner
- **Speile følelser**: «Det høres ut som du er frustrert»
- **Parafrasere**: Gjenta med egne ord for å vise at du forstår
- **Stille utdypende spørsmål**: «Kan du fortelle mer om det?»
- **Tåle stillhet**: Gi rom for at personen kan tenke og formulere seg
- **Oppsummere**: «Så det du sier er at...»`,
    },
    {
      id: 'hov2-6-5-def-2',
      type: 'definition',
      title: 'Empati',
      content: `**Empati** er evnen til å **sette seg inn i en annen persons opplevelse** og formidle denne forståelsen tilbake. Empati handler ikke om å føle det samme som den andre (det er sympati), men om å forstå den andres perspektiv og kommunisere denne forståelsen. I helse- og omsorgsarbeid er empatisk kommunikasjon knyttet til bedre behandlingsresultater, økt tillit og større tilfredshet hos pasienter og brukere.`,
    },
    {
      id: 'hov2-6-5-text-2',
      type: 'text',
      content: `### Motiverende intervju (MI)

**Motiverende intervju** er en samtalemetode som styrker personens egen motivasjon for endring. Metoden ble utviklet for rusbehandling, men brukes nå bredt i helse- og omsorgsarbeid.

**Grunnholdninger i MI:**
- **Partnerskap**: Dere er likeverdige samarbeidspartnere
- **Aksept**: Anerkjenne personens autonomi og verdi
- **Medfølelse**: Ha personens beste som utgangspunkt
- **Fremkalling**: Få frem personens egne argumenter for endring

**Teknikker i MI (BEAS):**

**Bekreftelse**
- Anerkjenn personens styrker og anstrengelser
- «Jeg ser at du jobber hardt med dette»

**Åpne spørsmål**
- Inviter til refleksjon og utforsking
- «Hva tenker du selv om situasjonen?»

**Refleksjon (speiling)**
- Gjenta eller reformuler det personen sier
- «Det høres ut som du er delt – en del av deg vil slutte, men en annen del synes det er vanskelig»

**Oppsummering**
- Samle trådene og sjekk at du har forstått
- «La meg oppsummere det du har fortalt...»

**Endringssnakk:**
- Lytt etter og styrk utsagn som peker mot endring
- «Ønske»: «Jeg skulle ønske jeg var friskere»
- «Evne»: «Jeg tror jeg kunne klare det»
- «Grunner»: «Barna mine fortjener en edru far»
- «Behov»: «Jeg må gjøre noe med dette»`,
    },
    {
      id: 'hov2-6-5-text-3',
      type: 'text',
      content: `### Relasjonsbygging i psykisk helsearbeid

Å bygge gode relasjoner med personer som har psykiske utfordringer krever bevissthet og ferdigheter:

**Terapeutisk allianse:**
- Enighet om mål for samarbeidet
- Enighet om metoder og oppgaver
- Emosjonelt bånd bygget på tillit og respekt
- Forskning viser at alliansen er viktigere for utfallet enn valg av behandlingsmetode

**Tillit og trygghet:**
- Vær pålitelig – hold det du lover
- Vær forutsigbar i atferd og tilgjengelighet
- Vær ærlig, også når det er ubehagelig
- Respekter taushetsplikten

**Grensesetting:**
- Profesjonelle grenser beskytter både deg og pasienten
- Skille mellom å bry seg og å bli for personlig involvert
- Vær bevisst på maktforholdet i relasjonen
- Søk veiledning når du er usikker

**Kulturell kompetanse:**
- Vær nysgjerrig og respektfull overfor ulike kulturer
- Unngå stereotyper og generaliseringer
- Bruk tolk ved språkbarrierer
- Forstå at psykisk helse oppleves og uttrykkes ulikt i ulike kulturer`,
    },
    {
      id: 'hov2-6-5-tip-1',
      type: 'tip',
      title: 'Egenomsorg og veiledning',
      content: `Arbeid med mennesker i vanskelige livssituasjoner kan være emosjonelt belastende. Det er viktig å ta vare på din egen psykiske helse. Bruk faglig veiledning for å bearbeide vanskelige opplevelser. Snakk med kollegaer om utfordrende situasjoner (innenfor taushetspliktens rammer). Sett grenser for deg selv. Ivareta egne behov for søvn, fysisk aktivitet og sosialt liv. Å ta vare på deg selv gjør deg til en bedre helsefagarbeider.`,
    },
    {
      id: 'hov2-6-5-example-1',
      type: 'example',
      title: 'Eksempel: Motiverende intervju i praksis',
      content: `**Situasjon**: Line, 30 år, har vært innlagt for rusbehandling tre ganger. Hun er nå tilbake i kommunal bolig og har begynt å ruse seg igjen. Du er helsefagarbeider og har en samtale med henne.

**MI-tilnærming:**
- Du: «Hei Line, godt å se deg. Hvordan har du det?» (åpent spørsmål)
- Line: «Jeg har driti meg ut igjen. Dere gir vel opp meg snart.»
- Du: «Du er skuffet over deg selv, og kanskje redd for at vi skal gi deg opp.» (refleksjon)
- Line: «Ja... jeg ville ikke ruse meg, men det bare skjedde.»
- Du: «En del av deg vil noe annet enn rus.» (styrker endringssnakk)
- Line: «Ja, jeg vil jo være en god mor for Emma.»
- Du: «Emma er viktig for deg, og du ønsker å være der for henne. Det er en sterk motivasjon.» (bekreftelse)
- Line: «Men jeg vet ikke om jeg klarer det.»
- Du: «Du har klart det før – du var rusfri i fem måneder etter forrige behandling. Hva hjalp deg den gangen?» (fremkaller mestringserfaring)

**Konklusjon**: Ved å bruke MI-teknikker møter du Line uten fordømmelse og styrker hennes egen motivasjon. Du fokuserer på styrker og mestringserfaring i stedet for å moralisere.`,
    },
    {
      id: 'hov2-6-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-6-5-ex-1',
        number: '6.5.1',
        type: 'multiple-choice',
        task: 'Hva er aktiv lytting?',
        options: [
          { id: 'a', text: 'Å gi råd og løsninger mens personen snakker', isCorrect: false },
          { id: 'b', text: 'Å lytte med full oppmerksomhet, speile følelser, parafrasere og stille utdypende spørsmål', isCorrect: true },
          { id: 'c', text: 'Å høre etter det du er enig i', isCorrect: false },
          { id: 'd', text: 'Å ta notater mens personen snakker', isCorrect: false },
        ],
        solution: 'Aktiv lytting innebærer å gi full oppmerksomhet, speile følelser («Det høres ut som du er frustrert»), parafrasere med egne ord, stille utdypende spørsmål, tåle stillhet og oppsummere. Det handler om å vise den andre at du virkelig forstår, ikke bare hører ordene.',
      },
    },
    {
      id: 'hov2-6-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-6-5-ex-2',
        number: '6.5.2',
        type: 'classic',
        task: 'Forklar forskjellen mellom empati og sympati, og hvorfor empati er viktigere i profesjonell kommunikasjon.',
        solution: 'Empati er evnen til å sette seg inn i en annen persons opplevelse og formidle denne forståelsen tilbake – du forstår den andres perspektiv. Sympati er å føle det samme som den andre – du føler med. I profesjonell kommunikasjon er empati viktigere fordi det gir deg mulighet til å forstå uten å miste din profesjonelle rolle. Sympati kan føre til at du blir overveldet av egne følelser og ikke klarer å hjelpe effektivt.',
      },
    },
    {
      id: 'hov2-6-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-6-5-ex-3',
        number: '6.5.3',
        type: 'multiple-choice',
        task: 'Hvilke er de fire grunnholdningene i motiverende intervju?',
        options: [
          { id: 'a', text: 'Diagnostisering, behandling, oppfølging og evaluering', isCorrect: false },
          { id: 'b', text: 'Partnerskap, aksept, medfølelse og fremkalling', isCorrect: true },
          { id: 'c', text: 'Konfrontering, korrigering, belæring og veiledning', isCorrect: false },
          { id: 'd', text: 'Observasjon, dokumentasjon, rapportering og tiltak', isCorrect: false },
        ],
        solution: 'De fire grunnholdningene i motiverende intervju (MI) er: partnerskap (likeverdig samarbeid), aksept (anerkjenne personens autonomi og verdi), medfølelse (ha personens beste som utgangspunkt) og fremkalling (få frem personens egne argumenter for endring).',
      },
    },
    {
      id: 'hov2-6-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-6-5-ex-4',
        number: '6.5.4',
        type: 'classic',
        task: 'Gi tre eksempler på nonverbal kommunikasjon og forklar hvordan disse påvirker samtalen.',
        solution: '1) Øyekontakt – viser interesse og oppmerksomhet, men for mye kan oppleves intenst. Tilpass øyekontakten kulturelt og individuelt. 2) Kroppsholdning – en åpen holdning vendt mot personen signaliserer at du er tilgjengelig og interessert, mens kryssede armer kan oppfattes som avvisende. 3) Stemmebruk – en rolig og varm tone skaper trygghet, mens en hastig eller irritert stemme kan øke uro og utrygghet hos personen.',
      },
    },
    {
      id: 'hov2-6-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'hov2-6-5-ex-5',
        number: '6.5.5',
        type: 'classic',
        task: 'En bruker sier: «Det er ingen vits i å snakke med dere. Dere forstår ikke uansett.» Hvordan vil du svare med bruk av MI-teknikker?',
        solution: 'Bruk refleksjon og bekreftelse: «Du opplever at vi ikke forstår deg, og det er frustrerende. Det er viktig for meg å forstå hvordan du har det.» (refleksjon). Deretter et åpent spørsmål: «Kan du fortelle meg hva du tenker vi burde forstå bedre?» Dette viser at du tar personens opplevelse på alvor uten å bli defensiv, og inviterer til videre dialog. Unngå å argumentere mot eller overbevise – det vil forsterke motstand.',
      },
    },
    {
      id: 'hov2-6-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Profesjonell kommunikasjon** er bevisst og tar hensyn til den andres behov
- **Aktiv lytting** innebærer å speile, parafrasere, stille åpne spørsmål og tåle stillhet
- **Empati** er å forstå den andres perspektiv og formidle forståelsen tilbake
- **Motiverende intervju** styrker personens egen motivasjon for endring gjennom partnerskap og aksept
- **Relasjonsbygging** krever tillit, pålitelighet og bevissthet om profesjonelle grenser

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Relasjonskompetanse | Evnen til å etablere og vedlikeholde profesjonelle relasjoner |
| Aktiv lytting | Lytting med speiling, parafrasering og utdypende spørsmål |
| Empati | Evnen til å forstå den andres perspektiv og formidle det |
| Motiverende intervju | Samtalemetode som styrker egen motivasjon for endring |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Relasjonskompetanse', definition: 'Evnen til å etablere, vedlikeholde og avslutte relasjoner på en profesjonell måte' },
    { term: 'Aktiv lytting', definition: 'Å lytte med full oppmerksomhet, speile følelser, parafrasere og stille utdypende spørsmål' },
    { term: 'Empati', definition: 'Evnen til å sette seg inn i en annen persons opplevelse og formidle forståelsen' },
    { term: 'Motiverende intervju', definition: 'Samtalemetode som styrker personens egen motivasjon for endring' },
    { term: 'Terapeutisk allianse', definition: 'Samarbeid mellom hjelper og bruker basert på tillit, respekt og felles mål' },
  ],
};

// ============================================================================
// Kapittel 6.6: Forebygging av psykisk uhelse
// ============================================================================

export const CHAPTER_HOV2_6_6: TextbookChapter = {
  id: 'hov2-6-6',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '6.6',
  title: 'Forebygging av psykisk uhelse',
  description: 'En innføring i forebygging av psykisk uhelse, tidlig intervensjon, mestringstrategier og nettverksarbeid. Lær hvordan helsefagarbeidere kan bidra til å fremme psykisk helse.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive forebyggende og helsefremmende tiltak',
  ],
  content: [
    {
      id: 'hov2-6-6-intro',
      type: 'text',
      content: `## Forebygging – bedre enn behandling

Forebygging av psykisk uhelse er et av de viktigste satsingsområdene i norsk helsepolitikk. Det er både menneskelig og samfunnsøkonomisk lønnsomt å forebygge psykiske problemer fremfor å behandle dem etter at de har oppstått. Som helsefagarbeider har du en unik posisjon til å drive forebyggende arbeid i hverdagskontakten med brukere og pasienter.

I dette kapittelet lærer du:
- Ulike nivåer av forebygging
- Tidlig intervensjon og varselsignaler
- Mestringstrategier og beskyttelsesfaktorer
- Nettverksarbeid og tverrfaglig samarbeid`,
    },
    {
      id: 'hov2-6-6-def-1',
      type: 'definition',
      title: 'Forebygging',
      content: `**Forebygging** (prevensjon) i psykisk helsearbeid handler om tiltak som skal forhindre at psykiske plager og lidelser oppstår eller forverres. Forebygging deles inn i tre nivåer: **universell forebygging** (rettet mot hele befolkningen), **selektiv forebygging** (rettet mot risikogrupper) og **indikert forebygging** (rettet mot personer med begynnende symptomer). Forebygging skiller seg fra **helsefremmende arbeid**, som fokuserer på å styrke faktorer som fremmer god helse.`,
    },
    {
      id: 'hov2-6-6-text-1',
      type: 'text',
      content: `### Tre nivåer av forebygging

**Universell forebygging (for alle)**
- Tiltak rettet mot hele befolkningen eller store grupper
- Mål: Styrke psykisk helse og redusere risikofaktorer generelt
- Eksempler:
  - Undervisning om psykisk helse i skolen
  - Kampanjer mot stigmatisering
  - Tilrettelegging for fysisk aktivitet og fritidstilbud
  - Gode oppvekstvilkår og trygge nærmiljøer
  - Arbeidslivstiltak mot mobbing og stress

**Selektiv forebygging (for risikogrupper)**
- Tiltak rettet mot grupper med forhøyet risiko
- Mål: Redusere risikoen for at sårbare utvikler psykiske lidelser
- Eksempler:
  - Støtte til barn av foreldre med psykisk sykdom eller rus
  - Tiltak for ensomme eldre
  - Oppfølging av flyktninger og asylsøkere
  - Tilbud til ungdom som faller utenfor skole og arbeid
  - Helsestasjon for ungdom

**Indikert forebygging (for personer med begynnende symptomer)**
- Tiltak rettet mot personer som viser tegn på psykiske plager
- Mål: Forhindre at plagene utvikler seg til lidelser
- Eksempler:
  - Lavterskel samtaletilbud
  - Kurs i mestring av angst og depresjon
  - Rask psykisk helsehjelp
  - Tidlig intervensjon ved førstegangspsykose (TIPS)
  - Individuell oppfølging og kriseintervensjon`,
    },
    {
      id: 'hov2-6-6-def-2',
      type: 'definition',
      title: 'Beskyttelsesfaktorer',
      content: `**Beskyttelsesfaktorer** er forhold som reduserer risikoen for å utvikle psykiske plager og lidelser, selv om man er utsatt for risikofaktorer. De viktigste beskyttelsesfaktorene inkluderer **sosial støtte og tilhørighet**, **gode mestringsferdigheter**, **positiv selvfølelse**, **trygg tilknytning**, **meningsfull aktivitet** og **fysisk helse**. Forebyggende arbeid handler i stor grad om å styrke beskyttelsesfaktorer.`,
    },
    {
      id: 'hov2-6-6-text-2',
      type: 'text',
      content: `### Mestringstrategier og beskyttelsesfaktorer

**Risikofaktorer for psykisk uhelse:**
- Genetisk sårbarhet og familiehistorikk
- Traumer, overgrep og omsorgssvikt
- Ensomhet og sosial isolasjon
- Mobbing og utenforskap
- Fattigdom og dårlige levekår
- Rusmisbruk
- Kronisk sykdom og smerte
- Store livshendelser og tap

**Mestringstrategier som fremmer psykisk helse:**

**Problemfokusert mestring:**
- Identifisere problemet og jobbe aktivt med å løse det
- Søke informasjon og råd
- Lage handlingsplaner

**Emosjonsfokusert mestring:**
- Bearbeide følelser gjennom samtale, skriving eller kreative uttrykk
- Avspenning, mindfulness og pusteteknikker
- Aksept av det som ikke kan endres

**Sosial mestring:**
- Søke støtte fra venner, familie og nettverk
- Dele opplevelser og følelser med trygge personer
- Delta i fellesskap og grupper

**Praktiske tiltak for god psykisk helse:**
- Regelmessig fysisk aktivitet (minst 30 minutter daglig)
- Tilstrekkelig søvn (7–9 timer for voksne)
- Sunt kosthold med regelmessige måltider
- Begrense alkohol og unngå rusmidler
- Sosiale relasjoner og tilhørighet
- Meningsfull aktivitet – arbeid, hobby eller frivillighet
- Tid i naturen og kontakt med dyr
- Balanse mellom aktivitet og hvile`,
    },
    {
      id: 'hov2-6-6-text-3',
      type: 'text',
      content: `### Nettverksarbeid og tverrfaglig samarbeid

**Nettverksarbeid:**
Sosiale nettverk er avgjørende for psykisk helse. Helsefagarbeidere kan bidra til nettverksarbeid på flere måter:

- **Kartlegging av nettverk**: Bruk nettverkskart for å visualisere personens relasjoner
- **Styrke eksisterende nettverk**: Hjelpe med å opprettholde kontakt med familie og venner
- **Bygge nye nettverk**: Koble personen til aktiviteter, grupper og frivillige organisasjoner
- **Involvere nettverk i behandling**: Pårørendesamarbeid og nettverksmøter

**Tverrfaglig samarbeid:**
Forebyggende psykisk helsearbeid krever samarbeid på tvers av faggrupper og tjenester:

- **Individuell plan (IP)**: Lovfestet rett for personer med behov for langvarige og koordinerte tjenester
- **Ansvarsgruppe**: Fast gruppe av fagpersoner og bruker som samarbeider om oppfølging
- **Koordinator**: En person som koordinerer tjenestene og sikrer sammenheng
- **Samarbeidspartnere**: Fastlege, psykolog, NAV, skole, barnevern, frivillige organisasjoner

**Helsefagarbeiderens forebyggende rolle:**
- Observer endringer i funksjon og psykisk tilstand hos brukere
- Legg til rette for meningsfulle aktiviteter og sosial deltakelse
- Bidra til struktur og forutsigbarhet i hverdagen
- Gi informasjon om tilgjengelige hjelpetilbud
- Vær en trygg og stabil relasjon for sårbare personer
- Involver pårørende og nettverk i samarbeid med bruker`,
    },
    {
      id: 'hov2-6-6-tip-1',
      type: 'tip',
      title: 'Lavterskeltilbud i kommunen',
      content: `De fleste kommuner har lavterskeltilbud for psykisk helse som ikke krever henvisning. **Rask psykisk helsehjelp** tilbyr korttids kognitiv terapi for mild til moderat angst og depresjon. **Helsestasjon for ungdom** gir gratis helsehjelp til unge. **Frisklivssentraler** tilbyr kurs i mestring, kosthold og fysisk aktivitet. **Væresteder** og aktivitetssentre gir sosialt fellesskap. Kjenner du til tilbudene i din kommune, kan du hjelpe brukere med å finne riktig hjelp til riktig tid.`,
    },
    {
      id: 'hov2-6-6-example-1',
      type: 'example',
      title: 'Eksempel: Forebyggende arbeid med eldre',
      content: `**Situasjon**: Gunnar, 79 år, mistet kona for seks måneder siden. Han bor alene og får hjemmesykepleie for diabetes. Du merker at Gunnar har blitt mer stille, spiser dårlig og sier at han ikke ser poenget med noe lenger.

**Forebyggende tilnærming:**
- Du tar deg tid til å prate med Gunnar og lytter til hans sorg og ensomhet
- Du rapporterer observasjonene til sykepleier – endringene kan tyde på begynnende depresjon
- Du foreslår at Gunnar kan delta på eldresenterets aktiviteter – det er en turgruppe som møtes to ganger i uken
- Du tar kontakt med frivillighetssentralen som kan tilby en besøksvenn
- Du snakker med Gunnars datter om situasjonen (med Gunnars samtykke) slik at familien kan følge opp
- Du hjelper Gunnar med å opprettholde daglige rutiner: faste måltider, hygiene, korte turer

**Konklusjon**: Gjennom tidlig oppdagelse, nettverksbygging og hverdagsstøtte bidrar du til å forebygge at Gunnars sorg og ensomhet utvikler seg til en depresjon. Din daglige kontakt gir deg unik mulighet til å fange opp endringer.`,
    },
    {
      id: 'hov2-6-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-6-6-ex-1',
        number: '6.6.1',
        type: 'multiple-choice',
        task: 'Hva er selektiv forebygging?',
        options: [
          { id: 'a', text: 'Tiltak rettet mot hele befolkningen', isCorrect: false },
          { id: 'b', text: 'Tiltak rettet mot grupper med forhøyet risiko', isCorrect: true },
          { id: 'c', text: 'Tiltak rettet mot personer som allerede er syke', isCorrect: false },
          { id: 'd', text: 'Tiltak rettet mot helsepersonell', isCorrect: false },
        ],
        solution: 'Selektiv forebygging er tiltak rettet mot grupper med forhøyet risiko for å utvikle psykiske lidelser. Eksempler er støtte til barn av foreldre med psykisk sykdom, tiltak for ensomme eldre og oppfølging av flyktninger. Universell forebygging retter seg mot alle, mens indikert forebygging retter seg mot personer med begynnende symptomer.',
      },
    },
    {
      id: 'hov2-6-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-6-6-ex-2',
        number: '6.6.2',
        type: 'classic',
        task: 'Nevn fem beskyttelsesfaktorer for psykisk helse og forklar hvorfor de er viktige.',
        solution: '1) Sosial støtte og tilhørighet – gir trygghet, mening og praktisk hjelp i vanskelige tider. 2) Gode mestringsferdigheter – gjør personen i stand til å håndtere stress og motgang konstruktivt. 3) Positiv selvfølelse – styrker motstandskraften mot negative hendelser og gir tro på egne evner. 4) Meningsfull aktivitet – arbeid, hobby eller frivillighet gir struktur, identitet og sosial deltakelse. 5) Fysisk helse – regelmessig aktivitet, god søvn og kosthold påvirker hjernekjemien positivt og styrker psykisk helse.',
      },
    },
    {
      id: 'hov2-6-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-6-6-ex-3',
        number: '6.6.3',
        type: 'multiple-choice',
        task: 'Hva er en individuell plan (IP)?',
        options: [
          { id: 'a', text: 'En treningsplan for fysisk aktivitet', isCorrect: false },
          { id: 'b', text: 'En plan som legen lager alene for pasienten', isCorrect: false },
          { id: 'c', text: 'En lovfestet rett for personer med behov for langvarige og koordinerte tjenester', isCorrect: true },
          { id: 'd', text: 'En plan for medisinutdeling', isCorrect: false },
        ],
        solution: 'Individuell plan (IP) er en lovfestet rett for personer med behov for langvarige og koordinerte helse- og omsorgstjenester. Planen utarbeides i samarbeid med brukeren og involverer alle relevante tjenester. Den skal sikre at tjenestene er samordnet og at brukeren medvirker aktivt i planleggingen.',
      },
    },
    {
      id: 'hov2-6-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-6-6-ex-4',
        number: '6.6.4',
        type: 'classic',
        task: 'Forklar forskjellen mellom problemfokusert og emosjonsfokusert mestring, og gi et eksempel på hver.',
        solution: 'Problemfokusert mestring handler om å identifisere problemet og jobbe aktivt med å løse det. Eksempel: En person som opplever stress på jobb, tar kontakt med leder for å diskutere arbeidsbelastningen og finne løsninger. Emosjonsfokusert mestring handler om å bearbeide følelsene som problemet skaper. Eksempel: En person som har mistet en nær person, snakker om sorgen med en venn eller skriver dagbok for å bearbeide følelsene. Begge strategiene er nyttige, men i ulike situasjoner.',
      },
    },
    {
      id: 'hov2-6-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'hov2-6-6-ex-5',
        number: '6.6.5',
        type: 'classic',
        task: 'Beskriv tre konkrete ting en helsefagarbeider kan gjøre for å forebygge ensomhet og psykisk uhelse hos eldre som bor hjemme.',
        solution: '1) Kartlegge og styrke det sosiale nettverket – spør om familie, venner og naboer, og hjelp den eldre med å opprettholde kontakten, for eksempel via telefon eller besøk. 2) Formidle kontakt med frivillige organisasjoner – besøksvenn, eldresenter, turgrupper eller andre aktiviteter i nærmiljøet som gir sosialt fellesskap. 3) Opprettholde daglige rutiner og meningsfulle aktiviteter – hjelpe med å holde faste måltider, stimulere til korte turer, lesing eller hobbyer, og sørge for at den eldre har noe å se frem til.',
      },
    },
    {
      id: 'hov2-6-6-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- Forebygging deles i **universell**, **selektiv** og **indikert** forebygging
- **Beskyttelsesfaktorer** som sosial støtte, mestring og meningsfull aktivitet reduserer risikoen for psykisk uhelse
- **Mestringstrategier** kan være problemfokuserte, emosjonsfokuserte eller sosiale
- **Nettverksarbeid** er avgjørende for å forebygge ensomhet og fremme psykisk helse
- **Individuell plan** og **tverrfaglig samarbeid** sikrer koordinert oppfølging

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Forebygging | Tiltak som forhindrer at psykiske plager oppstår eller forverres |
| Beskyttelsesfaktorer | Forhold som reduserer risikoen for psykisk uhelse |
| Mestring | Evnen til å håndtere utfordringer og stressbelastninger |
| Individuell plan | Lovfestet rett til koordinert plan ved langvarige tjenestebehov |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Forebygging', definition: 'Tiltak som forhindrer at psykiske plager og lidelser oppstår eller forverres' },
    { term: 'Beskyttelsesfaktorer', definition: 'Forhold som reduserer risikoen for å utvikle psykisk uhelse, som sosial støtte og mestring' },
    { term: 'Mestring', definition: 'Evnen til å håndtere utfordringer gjennom problemfokuserte, emosjonsfokuserte eller sosiale strategier' },
    { term: 'Nettverksarbeid', definition: 'Kartlegging og styrking av sosiale nettverk for å fremme tilhørighet og støtte' },
    { term: 'Individuell plan', definition: 'Lovfestet rett til koordinert plan for personer med behov for langvarige tjenester' },
  ],
};

// ============================================================================
// Eksport
// ============================================================================

export const HELSEOPPVEKST_VG2_DEL6_CHAPTERS = [
  CHAPTER_HOV2_6_1,
  CHAPTER_HOV2_6_2,
  CHAPTER_HOV2_6_3,
  CHAPTER_HOV2_6_4,
  CHAPTER_HOV2_6_5,
  CHAPTER_HOV2_6_6,
];
