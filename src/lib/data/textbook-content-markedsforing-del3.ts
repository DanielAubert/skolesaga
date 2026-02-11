/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Markedsføring og ledelse 1 (VG3) - DEL 3
 * Seksjon 3: Markedsanalyse og research (Kapittel 3.1–3.5)
 *
 * LK20 kompetansemål:
 * - bruke og utvikle markedsundersøkelser for å utforske og få innsikt i markeder og målgrupper
 * - gjennomføre situasjonsanalyser som grunnlag for beslutninger
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 3.1: Hva er markedsundersøkelser?
// ============================================================================

export const CHAPTER_MARKEDSFORING_3_1: TextbookChapter = {
  id: 'markedsforing-3-1',
  courseId: 'markedsforing',
  chapterNumber: '3.1',
  title: 'Hva er markedsundersøkelser?',
  description: 'Formålet med markedsundersøkelser, forskjellen mellom primær- og sekundærdata, og trinnene i forskningsprosessen.',
  estimatedMinutes: 20,
  competenceGoals: [
    'bruke og utvikle markedsundersøkelser for å utforske og få innsikt i markeder og målgrupper',
    'gjennomføre situasjonsanalyser som grunnlag for beslutninger',
  ],
  content: [
    {
      id: 'mfl-3-1-intro',
      type: 'text',
      content: `## Hvorfor trenger bedrifter markedsundersøkelser?

Tenk deg at du skal lansere et nytt produkt. Kanskje en ny type proteinbar rettet mot unge voksne. Du tror produktet vil selge bra, men *tro* er ikke nok. Du trenger **kunnskap** om markedet før du investerer tid og penger.

Markedsundersøkelser gir bedrifter et solid beslutningsgrunnlag. I stedet for å gjette hva kundene vil ha, samler du inn data som forteller deg:
- Hvem er potensielle kunder, og hva verdsetter de?
- Hvor stort er markedet, og vokser det?
- Hva gjør konkurrentene, og hvor er det hull i tilbudet?
- Hvilken pris er kundene villige til å betale?

Uten markedsundersøkelser risikerer bedriften å utvikle produkter ingen vil ha, sette feil pris, eller velge feil distribusjonskanal.`,
    },
    {
      id: 'mfl-3-1-def-1',
      type: 'definition',
      title: 'Markedsundersøkelse',
      content: `**Markedsundersøkelse** er en systematisk prosess for å samle inn, analysere og tolke informasjon om et marked, en målgruppe eller et markedsføringsproblem.

Formålet er å redusere usikkerhet og gi bedre grunnlag for beslutninger. Markedsundersøkelser brukes blant annet til å:
- Kartlegge kundetilfredshet
- Teste nye produktideer
- Måle merkekjennskap
- Forstå kjøpsvaner og preferanser
- Vurdere effekten av markedskampanjer`,
    },
    {
      id: 'mfl-3-1-def-2',
      type: 'definition',
      title: 'Primærdata og sekundærdata',
      content: `**Primærdata** er data du samler inn selv, direkte fra kilden, for å svare på et spesifikt spørsmål. Eksempler:
- Spørreundersøkelser du sender ut til kunder
- Dybdeintervjuer med forbrukere
- Observasjoner i butikk
- Fokusgrupper du arrangerer

**Sekundærdata** er data som allerede er samlet inn av andre, til et annet formål. Eksempler:
- Statistikk fra SSB (Statistisk sentralbyrå)
- Bransjeanalyser fra konsulentselskaper
- Årsrapporter fra konkurrenter
- Forskningsartikler og offentlige rapporter

**Tommelfingerregel:** Start alltid med sekundærdata. Det er billigere og raskere. Bruk primærdata når sekundærdataene ikke gir deg svar på det spesifikke du trenger å vite.`,
    },
    {
      id: 'mfl-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Proteinbar-lansering',
      problem: 'Et norsk selskap ønsker å lansere en ny proteinbar for studenter. Hvilke sekundær- og primærdata bør de samle inn?',
      solution: `**Sekundærdata (start her):**
- Markedsrapporter for sportsernæring i Norge (f.eks. fra Nielsen eller Euromonitor)
- Statistikk fra SSB om forbruk blant unge voksne
- Konkurrentenes nettsider og prislister
- Forskning på ernæringstrender blant studenter

**Primærdata (deretter):**
- Spørreundersøkelse blant studenter om smakspreferanser og betalingsvilje
- Fokusgruppe der studenter smakstester prototyper
- Observasjon av kjøpsvaner i kantiner og nærbutikker på campus
- Dybdeintervjuer med innkjøpsansvarlige i studentkantiner

**Hvorfor denne rekkefølgen?**
Sekundærdataene gir et raskt overblikk over markedet, mens primærdataene gir den spesifikke innsikten selskapet trenger for å tilpasse produktet til målgruppen.`,
    },
    {
      id: 'mfl-3-1-text-1',
      type: 'text',
      content: `## Forskningsprosessen i markedsundersøkelser

En god markedsundersøkelse følger en strukturert prosess. Dette sikrer at dataene du samler inn faktisk er relevante og pålitelige.

### Trinn 1: Definer problemet
Hva trenger du å finne ut? Jo mer presist du formulerer problemstillingen, jo bedre undersøkelse får du. "Vi vil vite mer om kundene" er for vagt. "Vi vil finne ut hvorfor salget av produkt X har falt 15 % blant kvinner 25–35 år det siste halvåret" er mye bedre.

### Trinn 2: Utarbeid en forskningsplan
Bestem hvilke data du trenger, hvilke metoder du skal bruke, hvem som er utvalget, og hva budsjettet er. Velg mellom kvalitative og kvantitative metoder (mer om dette i neste kapittel).

### Trinn 3: Samle inn data
Gjennomfør spørreundersøkelser, intervjuer, observasjoner eller andre metoder i henhold til planen. Pass på at datainnsamlingen er systematisk og nøyaktig.

### Trinn 4: Analyser dataene
Organiser, bearbeid og tolk dataene. Se etter mønstre, sammenhenger og avvik. Bruk tabeller, grafer og statistiske verktøy.

### Trinn 5: Presenter funn og anbefalinger
Lag en rapport eller presentasjon som oppsummerer funnene og gir konkrete anbefalinger til beslutningstakerne.`,
    },
    {
      id: 'mfl-3-1-def-3',
      type: 'definition',
      title: 'Validitet og reliabilitet',
      content: `**Validitet** handler om hvorvidt undersøkelsen måler det den er ment å måle. Hvis du vil undersøke kundetilfredshet, men spørsmålene dine egentlig måler merkekjennskap, har undersøkelsen lav validitet.

**Reliabilitet** handler om påliteligheten til undersøkelsen. Hvis du gjennomfører den samme undersøkelsen to ganger under like forhold og får svært ulike resultater, er reliabiliteten lav.

**En god markedsundersøkelse har:**
- Høy validitet (måler riktig ting)
- Høy reliabilitet (gir konsistente resultater)
- Representativt utvalg (de du spør representerer hele målgruppen)
- Tilstrekkelig utvalgsstørrelse (nok respondenter til å trekke pålitelige konklusjoner)`,
    },
    {
      id: 'mfl-3-1-note-1',
      type: 'note',
      title: 'Vanlige feil i markedsundersøkelser',
      content: `Pass opp for disse fallgruvene:
- **Ledende spørsmål:** "Er du ikke enig i at produktet vårt er bra?" Spørsmålet legger opp til et bestemt svar.
- **Selvseleksjon:** Bare de mest fornøyde eller misfornøyde svarer, og resultatet blir skjevt.
- **For lite utvalg:** Du spør ti personer og trekker konklusjoner om hele Norges befolkning.
- **Bekreftelsesbias:** Du tolker dataene slik at de støtter det du allerede trodde.
- **Utdaterte sekundærdata:** Du bruker en bransjerapport fra 2015 til å forstå markedet i dag.`,
    },
    {
      id: 'mfl-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mfl-3-1-ex-1',
        number: '3.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den viktigste forskjellen mellom primærdata og sekundærdata?',
        options: [
          { id: 'a', text: 'Primærdata er samlet inn av deg selv for et bestemt formål, mens sekundærdata allerede er samlet inn av andre', isCorrect: true },
          { id: 'b', text: 'Primærdata er alltid kvantitativ, mens sekundærdata er kvalitativ', isCorrect: false },
          { id: 'c', text: 'Primærdata er billigere å skaffe enn sekundærdata', isCorrect: false },
          { id: 'd', text: 'Sekundærdata er mer pålitelig enn primærdata', isCorrect: false },
        ],
        solution: 'Primærdata er data du samler inn selv, direkte fra kilden, for å svare på et spesifikt spørsmål. Sekundærdata er data som allerede er samlet inn av andre, til et annet formål. Kostnaden og typen data varierer uavhengig av om det er primær- eller sekundærdata.',
      },
    },
    {
      id: 'mfl-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mfl-3-1-ex-2',
        number: '3.1.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvorfor bør man starte med sekundærdata før man samler inn primærdata?',
        options: [
          { id: 'a', text: 'Fordi sekundærdata alltid er mer nøyaktig', isCorrect: false },
          { id: 'b', text: 'Fordi det er billigere og raskere, og gir et overblikk som hjelper deg å planlegge primærdatainnsamlingen', isCorrect: true },
          { id: 'c', text: 'Fordi loven krever det', isCorrect: false },
          { id: 'd', text: 'Fordi primærdata ikke kan samles inn uten sekundærdata først', isCorrect: false },
        ],
        solution: 'Sekundærdata er som regel rimeligere og raskere å skaffe. De gir et overblikk over markedet og hjelper deg med å identifisere hull i eksisterende kunnskap, slik at du kan utforme mer treffsikre primærundersøkelser etterpå.',
      },
    },
    {
      id: 'mfl-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mfl-3-1-ex-3',
        number: '3.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'En nettbutikk opplever at mange kunder legger varer i handlekurven, men ikke fullfører kjøpet. Formuler en presis problemstilling for en markedsundersøkelse som kan hjelpe bedriften med å forstå dette problemet.',
        hints: ['En god problemstilling er konkret, avgrenset og målbar. Unngå vage formuleringer.'],
        solution: 'Eksempel på presis problemstilling: "Hva er de tre viktigste årsakene til at kunder i aldersgruppen 20–40 år forlater handlekurven uten å fullføre kjøpet i vår nettbutikk, og i hvilken grad påvirkes frafallet av fraktkostnader, betalingsalternativer og brukeropplevelse?" Denne problemstillingen er konkret (handlekurvfrafall), avgrenset (spesifikt aldersgruppe og nettbutikk) og peker mot målbare faktorer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mfl-3-1-ex-4',
        number: '3.1.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar begrepene validitet og reliabilitet med egne ord, og gi et eksempel der en markedsundersøkelse kan ha høy reliabilitet men lav validitet.',
        hints: ['Tenk på en undersøkelse der spørsmålene er konsistente, men ikke treffer det du faktisk vil vite'],
        solution: 'Validitet betyr at du måler det du faktisk ønsker å måle. Reliabilitet betyr at målingene gir stabile, gjentakbare resultater. Eksempel: En bedrift vil måle kundetilfredshet og spør "Hvor ofte handler du hos oss?" Spørsmålet gir konsistente svar (høy reliabilitet), men måler handlefrekvens, ikke tilfredshet (lav validitet). En kunde kan handle ofte fordi butikken ligger nær jobb, ikke fordi de er fornøyde.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mfl-3-1-ex-5',
        number: '3.1.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er det første trinnet i forskningsprosessen for en markedsundersøkelse?',
        options: [
          { id: 'a', text: 'Samle inn data', isCorrect: false },
          { id: 'b', text: 'Definere problemstillingen', isCorrect: true },
          { id: 'c', text: 'Velge metode', isCorrect: false },
          { id: 'd', text: 'Analysere sekundærdata', isCorrect: false },
        ],
        solution: 'Det første trinnet er å definere problemstillingen. Uten en klar forståelse av hva du trenger å finne ut, risikerer du å samle inn data som ikke er relevante. En presis problemstilling styrer resten av forskningsprosessen.',
      },
    },
    {
      id: 'mfl-3-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mfl-3-1-ex-6',
        number: '3.1.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du jobber i markedsavdelingen til en klesbutikkjede som vurderer å åpne nettbutikk. Lag en plan for hvilke sekundær- og primærdata du ville samlet inn, og begrunn valgene dine.',
        hints: ['Tenk på hva du kan finne ut gratis (sekundærdata) og hva du må undersøke selv (primærdata)'],
        solution: 'Sekundærdata: SSB-statistikk over netthandel i Norge (vekst, omsetning), bransjeanalyser fra Virke om klesbransjen på nett, konkurrenters nettbutikker (sortiment, priser, frakt, brukeropplevelse), rapporter om norske forbrukeres digitale kjøpsvaner. Primærdata: Spørreundersøkelse blant eksisterende kunder om deres netthandelvaner og ønsker, fokusgrupper for å teste nettbutikk-prototyper, intervjuer med netthandelseksperter om suksessfaktorer. Begrunnelse: Sekundærdataene gir raskt overblikk over markedet og trender, mens primærdataene avdekker hva akkurat våre kunder forventer og hva som kan skille oss fra konkurrentene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.2: Kvalitative og kvantitative metoder
// ============================================================================

export const CHAPTER_MARKEDSFORING_3_2: TextbookChapter = {
  id: 'markedsforing-3-2',
  courseId: 'markedsforing',
  chapterNumber: '3.2',
  title: 'Kvalitative og kvantitative metoder',
  description: 'Dybdeintervju, fokusgrupper, spørreundersøkelser og observasjon som metoder for å samle inn markedsdata.',
  estimatedMinutes: 20,
  competenceGoals: [
    'bruke og utvikle markedsundersøkelser for å utforske og få innsikt i markeder og målgrupper',
  ],
  content: [
    {
      id: 'mfl-3-2-intro',
      type: 'text',
      content: `## To hovedtilnærminger til markedsdata

Når du har definert problemstillingen og vet hva du trenger å finne ut, må du velge metode. Innenfor markedsundersøkelser skiller vi mellom to hovedtilnærminger: **kvalitative** og **kvantitative** metoder.

Tenk på det slik: Kvalitative metoder hjelper deg å forstå *hvorfor* og *hvordan*, mens kvantitative metoder hjelper deg å måle *hvor mye* og *hvor mange*.

Ofte brukes metodene i kombinasjon. Du starter kanskje med kvalitative intervjuer for å oppdage hvilke temaer som er viktige, og følger opp med en kvantitativ spørreundersøkelse for å måle utbredelsen av funnene i en større gruppe.`,
    },
    {
      id: 'mfl-3-2-def-1',
      type: 'definition',
      title: 'Kvalitative metoder',
      content: `**Kvalitative metoder** gir dybdekunnskap om holdninger, motivasjon og atferd. Dataene er i form av ord, bilder og observasjoner — ikke tall.

**Kjennetegn:**
- Få respondenter, men grundig innsikt
- Åpne spørsmål og fleksibel tilnærming
- Vanskelig å generalisere til hele populasjonen
- Egner seg for å utforske nye temaer og forstå «hvorfor»

**Vanlige kvalitative metoder:**
1. **Dybdeintervju** — én-til-én-samtale med en informant
2. **Fokusgrupper** — gruppediskusjon med 6–10 deltakere
3. **Observasjon** — se hva folk faktisk gjør (ikke bare hva de sier)
4. **Etnografisk studie** — følge forbrukere i deres naturlige miljø over tid`,
    },
    {
      id: 'mfl-3-2-def-2',
      type: 'definition',
      title: 'Kvantitative metoder',
      content: `**Kvantitative metoder** gir målbare data som kan analyseres statistisk. Dataene er i form av tall og kan fremstilles som grafer, tabeller og prosentandeler.

**Kjennetegn:**
- Mange respondenter (representativt utvalg)
- Strukturerte spørsmål med faste svaralternativer
- Resultater kan generaliseres til hele populasjonen
- Egner seg for å måle omfang, frekvens og sammenhenger

**Vanlige kvantitative metoder:**
1. **Spørreundersøkelse (survey)** — strukturert skjema sendt til mange respondenter
2. **Eksperiment** — teste effekt av endringer (f.eks. A/B-testing av nettsider)
3. **Registerdata** — analysere eksisterende tall (salgsdata, webanalyse, CRM-data)
4. **Panelundersøkelse** — spørre det samme utvalget over tid for å se utvikling`,
    },
    {
      id: 'mfl-3-2-text-1',
      type: 'text',
      content: `## Dybdeintervju

Et dybdeintervju er en lengre, ustrukturert eller semistrukturert samtale med én person. Intervjueren har en temaramme, men følger opp svarene med oppfølgingsspørsmål. Intervjuet varer gjerne 30–90 minutter.

**Når bruker vi dybdeintervju?**
- Når temaet er sensitivt (f.eks. personlig økonomi, helse)
- Når du trenger å forstå individuelle opplevelser i detalj
- Når gruppepress kan påvirke svarene (fokusgrupper kan gi «konformitetssvar»)

**Eksempel:** Et forsikringsselskap intervjuer ti kunder én og én for å forstå hvorfor de vurderer å bytte forsikringsselskap. De oppdager at det ikke primært handler om pris, men om dårlig opplevelse med skadebehandling.

## Fokusgrupper

En fokusgruppe samler 6–10 personer til en moderert diskusjon om et bestemt tema. Diskusjonen ledes av en moderator og varer gjerne 1–2 timer.

**Når bruker vi fokusgrupper?**
- Når du vil se hvordan ideer og meninger utvikler seg gjennom diskusjon
- Når du tester nye konsepter, emballasje eller reklamekampanjer
- Når gruppedynamikk kan gi ekstra innsikt

**Eksempel:** En matvareprodusent inviterer åtte forbrukere til å smaksteste og diskutere tre ulike emballasjedesign for en ny yoghurt. Gruppen avdekker at ett design gir assosiasjoner til luksus, mens et annet oppfattes som billigprodukt.`,
    },
    {
      id: 'mfl-3-2-text-2',
      type: 'text',
      content: `## Spørreundersøkelser

Spørreundersøkelser (survey) er den mest brukte kvantitative metoden i markedsforskning. Et strukturert spørreskjema sendes til et utvalg respondenter, enten digitalt, per telefon eller ansikt til ansikt.

**Gode spørreundersøkelser kjennetegnes av:**
- Klare, entydige spørsmål uten fagsjargong
- Logisk rekkefølge (fra generelt til spesifikt)
- Balanserte svaralternativer (ikke bare positive valg)
- Rimelig lengde (ikke mer enn 10–15 minutter)
- Mulighet for å ikke ha en mening ("vet ikke" / "ikke aktuelt")

**Typiske spørsmålstyper:**
- **Likert-skala:** "Hvor enig er du?" (1 = helt uenig, 5 = helt enig)
- **Flervalg:** "Hvilke av disse merkene kjenner du?" (kryss av)
- **Rangering:** "Ranger disse egenskapene fra viktigst til minst viktig"
- **Åpne spørsmål:** "Hva liker du best med produktet?" (fritekst)

## Observasjon

Observasjon innebærer at forskeren studerer faktisk atferd uten å spørre direkte. Dette gir innsikt i hva folk *gjør*, ikke bare hva de *sier* de gjør — og det er ofte en stor forskjell.

**Eksempler på observasjon i markedsforskning:**
- Studere kundestrømmer i en butikk (hvor stopper folk, hva ser de på?)
- Analysere klikkstrømmer på en nettside (heatmaps, øyesporing)
- Observere bruk av et produkt i naturlig setting (f.eks. hvordan folk bruker en app)`,
    },
    {
      id: 'mfl-3-2-example-1',
      type: 'example',
      title: 'Eksempel: Velge riktig metode',
      problem: 'En treningskjede vil forstå hvorfor medlemmer slutter etter tre måneder. Hvilke metoder bør de bruke, og i hvilken rekkefølge?',
      solution: `**Fase 1: Kvalitativ utforskning**
Gjennomfør 8–10 dybdeintervjuer med medlemmer som nylig har sluttet. Bruk åpne spørsmål for å avdekke bakenforliggende årsaker: manglende motivasjon, dårlig oppfølging, for langt å reise, endret livssituasjon?

**Fase 2: Kvantitativ måling**
Basert på funnene fra intervjuene, utform en spørreundersøkelse som sendes til alle som har sagt opp de siste 12 månedene (f.eks. 500 personer). Mål hvor utbredt de ulike årsakene er.

**Fase 3: Observasjon (supplerende)**
Observer bruksmønstre i treningssentrene: Når på døgnet er det flest som trener? Hvilke områder brukes minst? Stemmer det med det medlemmene rapporterer?

**Hvorfor denne rekkefølgen?**
Intervjuene avdekker *hva* som er viktig. Spørreundersøkelsen måler *hvor viktig* det er for mange. Observasjonen bekrefter om folk gjør det de sier de gjør.`,
    },
    {
      id: 'mfl-3-2-tip-1',
      type: 'tip',
      title: 'Kombinasjon av metoder',
      content: `I praksis gir det beste resultatet å bruke **metodetriangulering** — å kombinere flere metoder for å belyse problemstillingen fra ulike vinkler. Hvis dybdeintervjuer, spørreundersøkelser og observasjon alle peker i samme retning, kan du være mer sikker på funnene dine.`,
    },
    {
      id: 'mfl-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mfl-3-2-ex-1',
        number: '3.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken metode egner seg best når du vil forstå *hvorfor* kunder velger å handle i én butikk fremfor en annen?',
        options: [
          { id: 'a', text: 'Spørreundersøkelse med kun lukkede spørsmål', isCorrect: false },
          { id: 'b', text: 'Dybdeintervju med kunder', isCorrect: true },
          { id: 'c', text: 'Analyse av salgsstatistikk', isCorrect: false },
          { id: 'd', text: 'A/B-testing av nettsiden', isCorrect: false },
        ],
        solution: 'Dybdeintervju er en kvalitativ metode som egner seg godt til å utforske bakenforliggende årsaker og motivasjon. Lukkede spørsmål gir tall, men ikke forklaringer. Salgsstatistikk viser hva som skjer, ikke hvorfor. A/B-testing måler effekten av endringer, men forklarer ikke kundens tankeprosess.',
      },
    },
    {
      id: 'mfl-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mfl-3-2-ex-2',
        number: '3.2.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er den viktigste fordelen med observasjon som forskningsmetode?',
        options: [
          { id: 'a', text: 'Det er den billigste metoden', isCorrect: false },
          { id: 'b', text: 'Det gir statistisk generaliserbare resultater', isCorrect: false },
          { id: 'c', text: 'Du ser hva folk faktisk gjør, ikke bare hva de sier de gjør', isCorrect: true },
          { id: 'd', text: 'Det krever færrest deltakere', isCorrect: false },
        ],
        solution: 'Observasjon fanger opp faktisk atferd, som ofte avviker fra det folk rapporterer. Mennesker er ikke alltid bevisste på sine egne vaner, eller de svarer det de tror er «riktig». Observasjon avdekker denne forskjellen mellom uttalt og faktisk atferd.',
      },
    },
    {
      id: 'mfl-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mfl-3-2-ex-3',
        number: '3.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom kvalitative og kvantitative metoder. Gi et eksempel på en situasjon der du ville brukt kvalitativ metode, og en situasjon der du ville brukt kvantitativ metode.',
        hints: ['Tenk på hva slags innsikt hver metode gir, og hva slags spørsmål de besvarer'],
        solution: 'Kvalitative metoder gir dybdekunnskap om holdninger og motivasjon gjennom åpne samtaler med få respondenter. Kvantitative metoder gir målbare data gjennom strukturerte spørsmål til mange respondenter. Kvalitativt eksempel: Dybdeintervjuer med ungdom for å forstå hvorfor de foretrekker TikTok over Instagram (utforske motivasjon). Kvantitativt eksempel: Spørreundersøkelse blant 1000 nordmenn for å kartlegge hvilke sosiale medier de bruker mest og hvor mange timer per dag (måle omfang).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mfl-3-2-ex-4',
        number: '3.2.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv tre gode og tre dårlige spørsmål til en spørreundersøkelse om studenters bruk av strømmetjenester. Begrunn hvorfor de dårlige spørsmålene er problematiske.',
        hints: ['Tenk på ledende spørsmål, doble spørsmål og uklare svaralternativer'],
        solution: 'Gode spørsmål: 1) "Hvilke strømmetjenester bruker du regelmessig?" (klar, nøytral, flervalg), 2) "Hvor mange timer per uke bruker du på strømmetjenester?" (målbart, entydig), 3) "Hvor viktig er pris når du velger strømmetjeneste?" (Likert-skala 1–5). Dårlige spørsmål: 1) "Er du ikke enig i at Netflix er best?" (ledende, legger føringer), 2) "Synes du strømmetjenester er bra og rimelige?" (dobbelt spørsmål — man kan synes de er bra men dyre), 3) "Bruker du strømmetjenester mye eller lite?" (uklart — hva er mye og lite?).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mfl-3-2-ex-5',
        number: '3.2.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva menes med metodetriangulering?',
        options: [
          { id: 'a', text: 'At man bruker tre ulike spørreskjemaer', isCorrect: false },
          { id: 'b', text: 'At man kombinerer flere ulike metoder for å belyse problemstillingen fra ulike vinkler', isCorrect: true },
          { id: 'c', text: 'At man intervjuer tre ulike målgrupper', isCorrect: false },
          { id: 'd', text: 'At man analyserer dataene med tre ulike statistiske verktøy', isCorrect: false },
        ],
        solution: 'Metodetriangulering betyr at man kombinerer kvalitative og kvantitative metoder (eller flere av samme type) for å belyse problemstillingen fra ulike vinkler. Hvis flere metoder gir sammenfallende resultater, styrkes tilliten til funnene.',
      },
    },
    {
      id: 'mfl-3-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mfl-3-2-ex-6',
        number: '3.2.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En kafékjede vurderer å lansere en ny meny rettet mot helsebeviste kunder. Lag en forskningsplan som beskriver hvilke kvalitative og kvantitative metoder du ville brukt, i hvilken rekkefølge, og hva du håper å finne ut med hver metode.',
        hints: ['Start med å utforske, deretter mål omfang. Tenk på hele forskningsprosessen.'],
        solution: 'Forskningsplan: 1) Sekundærdata: Hent markedsrapporter om helsetrenden i serveringsbransjen, SSB-data om kostholdstrender, konkurrentenes helsetilbud. 2) Fokusgrupper (kvalitativt): Inviter 2 grupper á 8 helsebeviste forbrukere til å diskutere hva de ønsker seg på en kafémeny, hva «sunn» betyr for dem, og hvilke barrierer de opplever. 3) Observasjon: Studer hva kunder faktisk bestiller i kafeen i dag — stemmer det med hva de sier i fokusgruppene? 4) Spørreundersøkelse (kvantitativt): Basert på innsiktene, send spørreskjema til 500 eksisterende kunder for å måle interessen for spesifikke helsealternativer, betalingsvilje og foretrukne ingredienser. 5) A/B-test: Prøv den nye menyen i utvalgte filialer og sammenlign salg mot kontrollgruppe. Denne rekkefølgen sikrer at vi forstår markedet (sekundærdata), utforsker behov (fokusgrupper), verifiserer atferd (observasjon), kvantifiserer funn (survey) og tester i praksis (eksperiment).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.3: Situasjonsanalyse: SWOT og PESTEL
// ============================================================================

export const CHAPTER_MARKEDSFORING_3_3: TextbookChapter = {
  id: 'markedsforing-3-3',
  courseId: 'markedsforing',
  chapterNumber: '3.3',
  title: 'Situasjonsanalyse: SWOT og PESTEL',
  description: 'Intern og ekstern analyse med SWOT-matrisen og PESTEL-rammeverket som verktøy for strategisk beslutningstaking.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjennomføre situasjonsanalyser som grunnlag for beslutninger',
  ],
  content: [
    {
      id: 'mfl-3-3-intro',
      type: 'text',
      content: `## Situasjonsanalyse — å forstå hvor du står

Før en bedrift kan legge gode strategier, må den forstå sin nåværende situasjon. En **situasjonsanalyse** kartlegger bedriftens indre styrker og svakheter, og de ytre mulighetene og truslene i omgivelsene.

Tenk på det som et legebesøk for bedriften: Først stiller legen diagnosen (situasjonsanalysen), deretter kommer behandlingsplanen (strategien).

To av de mest brukte verktøyene for situasjonsanalyse er **SWOT-analysen** og **PESTEL-analysen**. De utfyller hverandre: SWOT ser på bedriften fra både innsiden og utsiden, mens PESTEL systematisk kartlegger de ytre omgivelsene.`,
    },
    {
      id: 'mfl-3-3-def-1',
      type: 'definition',
      title: 'SWOT-analyse',
      content: `**SWOT-analyse** er et strategisk verktøy som kartlegger en bedrifts situasjon gjennom fire perspektiver:

**S — Strengths (styrker)** — Interne, positive faktorer
Hva er bedriften god på? Hva er konkurransefortrinnene? Eksempler: sterkt merkenavn, lojale kunder, unik teknologi, dyktige ansatte.

**W — Weaknesses (svakheter)** — Interne, negative faktorer
Hva kan bedriften forbedre? Eksempler: utdatert teknologi, høye kostnader, svak nettilstedeværelse, liten markedsandel.

**O — Opportunities (muligheter)** — Eksterne, positive faktorer
Hvilke trender og endringer i omgivelsene kan bedriften utnytte? Eksempler: voksende marked, ny teknologi, endrede regulering, svake konkurrenter.

**T — Threats (trusler)** — Eksterne, negative faktorer
Hva i omgivelsene kan true bedriften? Eksempler: nye konkurrenter, endrede kundebehov, strengere regulering, økonomisk nedgang.

**SWOT-matrisen:**

|               | **Positive**          | **Negative**          |
|---------------|----------------------|----------------------|
| **Interne**   | Styrker (S)          | Svakheter (W)        |
| **Eksterne**  | Muligheter (O)       | Trusler (T)          |`,
    },
    {
      id: 'mfl-3-3-example-1',
      type: 'example',
      title: 'Eksempel: SWOT-analyse for en lokal bokhandel',
      problem: 'Gjennomfør en SWOT-analyse for en uavhengig bokhandel i en norsk by.',
      solution: `**Styrker (S):**
- Personlig service og kunnskapsrike ansatte
- Lokalt forankret med lojal kundekrets
- Gjennomfører forfatterarrangementer og bokklubber
- Hyggelig atmosfære som skiller seg fra netthandel

**Svakheter (W):**
- Begrenset utvalg sammenlignet med nettbokhandlere
- Høyere driftskostnader (husleie, lønn)
- Svak nettbutikk og digital markedsføring
- Liten innkjøpsvolum gir dårligere betingelser fra forlag

**Muligheter (O):**
- Voksende trend mot å «handle lokalt» og støtte lokale bedrifter
- Økt interesse for bokklubber og litteraturarrangementer
- Mulighet for å utvikle nettbutikk med lokal leveranse
- Samarbeid med skoler og bibliotek

**Trusler (T):**
- Sterk konkurranse fra Amazon, Adlibris og Ark.no
- Økende andel e-bøker og lydbøker
- Generell nedgang i boklesing i yngre aldersgrupper
- Høyere husleie i sentrumsområder`,
    },
    {
      id: 'mfl-3-3-text-1',
      type: 'text',
      content: `## Fra SWOT til strategi

En SWOT-analyse har begrenset verdi hvis den bare blir en liste. Den virkelige verdien kommer når du krysser kategoriene for å utvikle strategier:

**SO-strategi (styrker + muligheter):**
Bruk styrkene dine til å utnytte mulighetene. Eksempel for bokhandelen: Bruk den personlige servicen til å utvikle eksklusive forfatterarrangementer som trekker nye kunder.

**WO-strategi (svakheter + muligheter):**
Overkom svakheter ved å gripe muligheter. Eksempel: Bygg nettbutikk (overkom svakhet) for å nå «handle lokalt»-trenden (mulighet).

**ST-strategi (styrker + trusler):**
Bruk styrkene til å forsvare deg mot trusler. Eksempel: Bruk den personlige servicen og arrangementene til å tilby noe nettbokhandlere ikke kan matche.

**WT-strategi (svakheter + trusler):**
Minimer svakheter og unngå trusler. Eksempel: Reduser lagerkostnadene ved å satse på bestilling-på-forespørsel for nisjebøker.`,
    },
    {
      id: 'mfl-3-3-def-2',
      type: 'definition',
      title: 'PESTEL-analyse',
      content: `**PESTEL-analyse** er et rammeverk for å kartlegge de viktigste eksterne faktorene som påvirker en bedrift. Bokstavene står for:

**P — Political (politiske faktorer):**
Reguleringer, skattepolitikk, handelspolitikk, politisk stabilitet. Eksempel: Nye personvernregler (GDPR) påvirker digital markedsføring.

**E — Economic (økonomiske faktorer):**
Renter, inflasjon, arbeidsledighet, valutakurser, kjøpekraft. Eksempel: Høy inflasjon gjør at forbrukere kutter i luksusforbruk.

**S — Social (sosiale faktorer):**
Demografi, livsstil, holdninger, utdanningsnivå, kulturtrender. Eksempel: Økende helsebevissthet driver etterspørselen etter sunn mat.

**T — Technological (teknologiske faktorer):**
Innovasjon, digitalisering, automasjon, nye plattformer. Eksempel: Kunstig intelligens endrer hvordan bedrifter segmenterer og kommuniserer med kunder.

**E — Environmental (miljømessige faktorer):**
Klimaendringer, bærekraft, ressursknapphet, forurensning. Eksempel: Krav om klimanøytralitet påvirker forsyningskjeder.

**L — Legal (juridiske faktorer):**
Lover, forskrifter, forbrukerbeskyttelse, arbeidsrett. Eksempel: Markedsføringsloven regulerer hva bedrifter kan si i reklame.`,
    },
    {
      id: 'mfl-3-3-example-2',
      type: 'example',
      title: 'Eksempel: PESTEL for norsk matvarebransje',
      problem: 'Gjennomfør en PESTEL-analyse for en norsk dagligvarekjede.',
      solution: `**Politisk (P):**
- Importvern og tollbarrierer beskytter norske bønder
- Alkoholpolitikk begrenser salg i dagligvare
- Politisk debatt om matkjedenes maktkonsentrasjon

**Økonomisk (E):**
- Høy kjøpekraft i Norge gir rom for premium-produkter
- Inflasjon presser forbrukere til å bli mer prisbevisste
- Sterk krone gjør import billigere

**Sosialt (S):**
- Økende interesse for plantebasert mat og bærekraft
- Flere enmanns-husholdninger gir etterspørsel etter småpakninger
- Tidsklemma driver salg av ferdigmat og meal kits

**Teknologisk (T):**
- Netthandel med dagligvarer vokser (Oda, Kolonial)
- Selvbetjeningskasser og automatiserte varehus
- Apper for priskollekt og matsvinn (Too Good To Go)

**Miljø (E):**
- Press for å redusere matsvinn og plastemballasje
- Etterspørsel etter økologiske og kortreiste produkter
- Krav til bærekraftige forsyningskjeder

**Juridisk (L):**
- Mattrygghetsregelverket (Mattilsynet)
- Forbrukerrettighetsloven
- Regelverket for merking og markedsføring av matvarer`,
    },
    {
      id: 'mfl-3-3-note-1',
      type: 'note',
      title: 'SWOT + PESTEL = kraftig kombinasjon',
      content: `PESTEL-analysen gir innsikt i de ytre forholdene, som du kan bruke direkte i O- og T-delen av SWOT-analysen. Bruk PESTEL først for å kartlegge omgivelsene, og deretter SWOT for å koble omgivelsene til bedriftens interne situasjon. Sammen gir de et helhetlig bilde som støtter strategisk beslutningstaking.`,
    },
    {
      id: 'mfl-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mfl-3-3-ex-1',
        number: '3.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilke av følgende er en *ekstern* faktor i en SWOT-analyse?',
        options: [
          { id: 'a', text: 'Bedriftens sterke merkenavn', isCorrect: false },
          { id: 'b', text: 'Mangel på kompetanse blant ansatte', isCorrect: false },
          { id: 'c', text: 'Ny teknologi som endrer bransjen', isCorrect: true },
          { id: 'd', text: 'Bedriftens lave produksjonskostnader', isCorrect: false },
        ],
        solution: 'Ny teknologi er en ekstern faktor — den oppstår i omgivelsene utenfor bedriften. I SWOT plasseres den som en mulighet (O) eller trussel (T), avhengig av om bedriften kan utnytte den eller trues av den. De andre alternativene er interne faktorer (styrker eller svakheter).',
      },
    },
    {
      id: 'mfl-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mfl-3-3-ex-2',
        number: '3.3.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva står «S» for i PESTEL-analysen?',
        options: [
          { id: 'a', text: 'Strategisk', isCorrect: false },
          { id: 'b', text: 'Sosialt', isCorrect: true },
          { id: 'c', text: 'Strukturelt', isCorrect: false },
          { id: 'd', text: 'Systematisk', isCorrect: false },
        ],
        solution: 'S i PESTEL står for Social (sosiale faktorer), som inkluderer demografi, livsstilstrender, holdninger, kulturelle endringer og utdanningsnivå. Disse faktorene påvirker forbrukernes behov og kjøpsvaner.',
      },
    },
    {
      id: 'mfl-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mfl-3-3-ex-3',
        number: '3.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjennomfør en SWOT-analyse for en bedrift eller organisasjon du kjenner til (f.eks. skolen din, en lokal bedrift eller en kjent merkevare). Identifiser minst tre punkter i hver kategori.',
        hints: ['Husk at styrker og svakheter er interne, mens muligheter og trusler er eksterne'],
        solution: 'Eksempel for en lokal kafé: Styrker: 1) God beliggenhet i sentrum, 2) Hjemmebakte kaker som trekker kunder, 3) Hyggelig atmosfære og stamkunder. Svakheter: 1) Lite kjent utenfor nabolaget, 2) Begrenset sittekapasitet, 3) Ingen nettbestilling. Muligheter: 1) Voksende kafé-kultur i Norge, 2) Kan tilby catering til lokale bedrifter, 3) Sosiale medier for å nå nye kunder. Trusler: 1) Starbucks og Espresso House utvider, 2) Stigende råvarepriser, 3) Økende husleie i sentrum.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mfl-3-3-ex-4',
        number: '3.3.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg en bransje (f.eks. treningsbransjen, restaurantbransjen eller klesbransjen) og gjennomfør en PESTEL-analyse. For hver faktor, forklar konkret hvordan den påvirker bransjen.',
        hints: ['Vær konkret og bruk aktuelle eksempler. Ikke bare list opp generelle faktorer.'],
        solution: 'Eksempel for treningsbransjen: Politisk: Kommunale tilskudd til folkehelsetiltak kan gi muligheter, mens regulering av medlemskapsavtaler (angrerett) stiller krav. Økonomisk: Høy kjøpekraft i Norge gjør at folk bruker mer på helse, men renteøkninger kan gjøre at forbrukere kutter «luksus»-utgifter som treningsabonnement. Sosialt: Sterk helsetrend og sosiale medier driver treningsinteressen, men mental helse-fokus gjør at folk søker helhetlige løsninger (yoga, meditasjon). Teknologisk: Wearables og treningsapper utfordrer tradisjonelle sentre, men gir også mulighet for hybridtilbud. Miljø: Krav om energieffektive bygg og bærekraftig drift. Juridisk: Arbeidsmiljøloven regulerer instruktørers arbeidsforhold, og forbrukerloven beskytter medlemmers oppsigelsesrett.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-3-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mfl-3-3-ex-5',
        number: '3.3.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er formålet med en SO-strategi i SWOT-analysen?',
        options: [
          { id: 'a', text: 'Å bruke bedriftens styrker til å utnytte muligheter i omgivelsene', isCorrect: true },
          { id: 'b', text: 'Å overkomme svakheter ved å forsvare seg mot trusler', isCorrect: false },
          { id: 'c', text: 'Å minimere svakheter ved å gripe eksterne muligheter', isCorrect: false },
          { id: 'd', text: 'Å bruke styrker til å nøytralisere trusler', isCorrect: false },
        ],
        solution: 'SO-strategi (Strengths-Opportunities) handler om å bruke bedriftens interne styrker til å utnytte muligheter i de eksterne omgivelsene. Det er den mest offensive strategien. WO-strategi handler om å overkomme svakheter gjennom muligheter, ST bruker styrker mot trusler, og WT minimerer svakheter og unngår trusler.',
      },
    },
    {
      id: 'mfl-3-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mfl-3-3-ex-6',
        number: '3.3.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Bruk SWOT-analysen du laget i oppgave 3.3.3, og utvikle minst én strategi for hver kombinasjon: SO, WO, ST og WT. Forklar hvordan strategien kobler interne og eksterne faktorer.',
        hints: ['Kryss styrker/svakheter med muligheter/trusler for å finne strategier'],
        solution: 'Eksempel for lokal kafé: SO-strategi: Bruk den hyggelige atmosfæren (styrke) til å arrangere kveldsarrangementer som bokkvelder og quiz-kvelder i tråd med den voksende kafétrenden (mulighet). WO-strategi: Bruk sosiale medier (mulighet) til å bli bedre kjent utenfor nabolaget (overkom svakhet med liten kjennskap). ST-strategi: Fremhev de hjemmebakte kakene og det lokale preget (styrke) for å differensiere seg fra kjedene (trussel fra Starbucks). WT-strategi: Vurder samarbeid med lokal matlevering (reduser svakheten med begrenset kapasitet) og hold kostnadene nede for å tåle stigende husleie (trussel).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-3-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'mfl-3-3-ex-7',
        number: '3.3.7',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvor i SWOT-matrisen plasserer du at konkurrenten nettopp lanserte et svært konkurransedyktig produkt?',
        options: [
          { id: 'a', text: 'Styrker (S)', isCorrect: false },
          { id: 'b', text: 'Svakheter (W)', isCorrect: false },
          { id: 'c', text: 'Muligheter (O)', isCorrect: false },
          { id: 'd', text: 'Trusler (T)', isCorrect: true },
        ],
        solution: 'En konkurrents nye produkt er en ekstern faktor som potensielt truer bedriftens posisjon, og plasseres derfor under Trusler (T). Det er noe som skjer utenfor bedriften (eksternt) og som er negativt for bedriften.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.4: Konkurranseanalyse
// ============================================================================

export const CHAPTER_MARKEDSFORING_3_4: TextbookChapter = {
  id: 'markedsforing-3-4',
  courseId: 'markedsforing',
  chapterNumber: '3.4',
  title: 'Konkurranseanalyse',
  description: 'Porters five forces, konkurrentkartlegging og benchmarking som verktøy for å forstå konkurransesituasjonen.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjennomføre situasjonsanalyser som grunnlag for beslutninger',
  ],
  content: [
    {
      id: 'mfl-3-4-intro',
      type: 'text',
      content: `## Hvem konkurrerer du egentlig med?

De fleste bedrifter vet hvem de mest åpenbare konkurrentene er. Men konkurransebildet er ofte mer komplekst enn det virker. Netflix konkurrerer ikke bare med Disney+ og HBO — de konkurrerer med alt som tar folks tid: TikTok, gaming, podcaster og til og med søvn (Netflix' egen CEO har uttalt at søvn er deres største konkurrent).

En grundig konkurranseanalyse hjelper deg å forstå:
- Hvem du konkurrerer med (direkte og indirekte konkurrenter)
- Hvor intens konkurransen er
- Hvor truslene kommer fra
- Hva konkurrentene gjør bedre — og dårligere — enn deg
- Hvor det finnes rom for differensiering`,
    },
    {
      id: 'mfl-3-4-def-1',
      type: 'definition',
      title: 'Porters fem konkurransekrefter (five forces)',
      content: `**Porters five forces** er et rammeverk utviklet av Michael Porter for å analysere konkurranseintensiteten og attraktiviteten i en bransje. De fem kreftene er:

**1. Rivalisering mellom eksisterende aktører**
Hvor intens er konkurransen? Påvirkes av antall aktører, markedsvekst, differensiering og faste kostnader. Høy rivalisering presser marginer.

**2. Trussel fra nye aktører (inntrengere)**
Hvor lett er det for nye bedrifter å entre bransjen? Avhenger av inngangsbarrierer som kapitalverk, merkevarelojalitet, stordriftsfordeler og regulering.

**3. Trussel fra substitutter**
Finnes det alternative produkter som dekker samme behov? Eksempel: Togselskaper konkurrerer med fly, buss og bil (substitutter for transport).

**4. Leverandørenes forhandlingsmakt**
Hvor stor makt har leverandørene? Få leverandører eller unike innsatsfaktorer gir leverandørene makt til å presse prisene opp.

**5. Kundenes forhandlingsmakt**
Hvor stor makt har kundene? Mange alternativer, lav byttekostnad eller store kunder gir kundene makt til å presse prisene ned.`,
    },
    {
      id: 'mfl-3-4-example-1',
      type: 'example',
      title: 'Eksempel: Porters five forces for strømmetjenester',
      problem: 'Analyser konkurransesituasjonen for strømmetjenester (Netflix, Disney+, HBO Max) med Porters five forces.',
      solution: `**1. Rivalisering mellom eksisterende aktører: HØY**
- Mange sterke aktører (Netflix, Disney+, HBO Max, Amazon Prime, Apple TV+)
- Høye innholdskostnader krever mange abonnenter
- Priskrig med lavprispakker og kampanjetilbud
- Differensiering gjennom eksklusivt innhold

**2. Trussel fra nye aktører: MIDDELS**
- Enorme investeringer i innhold er en høy inngangsbarriere
- Men teknologigiganter (Apple, Amazon) har ressurser til å entre
- Nye nisjeaktører kan lykkes med spesialisert innhold

**3. Trussel fra substitutter: HØY**
- YouTube (gratis), TikTok, gaming, sosiale medier, podcaster
- Piratkopiering er fortsatt en utfordring
- Kino og lineær TV er tradisjonelle substitutter

**4. Leverandørenes forhandlingsmakt: MIDDELS til HØY**
- Populære skapere og skuespillere kan kreve høye honorarer
- Filmstudioer med sterke merkevarer (Disney, Warner) har makt
- Egenprodusert innhold reduserer avhengigheten av leverandører

**5. Kundenes forhandlingsmakt: HØY**
- Lav byttekostnad (si opp med et klikk)
- Mange alternativer å velge mellom
- Abonnementstretthet gjør kunder prissensitive`,
    },
    {
      id: 'mfl-3-4-text-1',
      type: 'text',
      content: `## Konkurrentkartlegging

Mens Porters five forces gir et bilde av hele bransjen, handler konkurrentkartlegging om å analysere de spesifikke konkurrentene du møter i markedet.

**Steg i konkurrentkartlegging:**

**1. Identifiser konkurrentene**
- **Direkte konkurrenter:** Tilbyr tilsvarende produkter til samme målgruppe (Pepsi vs. Coca-Cola)
- **Indirekte konkurrenter:** Dekker samme behov med et annet produkt (brus vs. juice vs. vann)
- **Potensielle konkurrenter:** Kan entre markedet i fremtiden

**2. Samle informasjon**
- Konkurrentenes nettsider, sosiale medier og reklame
- Priser og produktsortiment
- Kundevurderinger og omtaler
- Årsrapporter og finansielle data (for børsnoterte selskaper)
- Bransjemedier og nyheter

**3. Analyser styrker og svakheter**
Hva gjør de bra? Hvor er de sårbare? Bruk gjerne en sammenligningstabell.

**4. Identifiser differensieringsmuligheter**
Hva kan du gjøre som konkurrentene ikke gjør? Hvor er det hull i markedet?`,
    },
    {
      id: 'mfl-3-4-def-2',
      type: 'definition',
      title: 'Benchmarking',
      content: `**Benchmarking** er en systematisk prosess der du sammenligner din egen bedrifts prestasjoner med «best practice» — enten konkurrenter eller ledende bedrifter i andre bransjer.

**Typer benchmarking:**

- **Intern benchmarking:** Sammenligne avdelinger eller filialer innad i bedriften. Hva gjør de beste filialene annerledes?
- **Konkurransebenchmarking:** Sammenligne deg direkte med konkurrenter i samme bransje.
- **Funksjonell benchmarking:** Sammenligne en bestemt funksjon (f.eks. kundeservice) med bedrifter i andre bransjer som er ledende på dette området.
- **Generisk benchmarking:** Sammenligne grunnleggende prosesser (f.eks. logistikk) med de aller beste, uavhengig av bransje.

**Eksempel:** En norsk nettbutikk benchmarker leveringstiden sin mot Zalando (konkurrent) og Amazon (funksjonell benchmark for logistikk). De oppdager at konkurrenten leverer på 3–5 dager, mens Amazon leverer på 1–2 dager. Målet settes til 2–3 dagers leveringstid.`,
    },
    {
      id: 'mfl-3-4-text-2',
      type: 'text',
      content: `## Strategisk posisjonering

Basert på konkurranseanalysen kan bedriften velge sin posisjon i markedet. Michael Porter beskrev tre grunnleggende **generiske strategier:**

**1. Kostnadslederskap:**
Vær billigst i bransjen. Krever stordriftsfordeler, effektive prosesser og stram kostnadskontroll. Eksempel: Ryanair i flybransjen, IKEA i møbelbransjen.

**2. Differensiering:**
Tilby noe unikt som kundene verdsetter og er villige til å betale mer for. Kan være kvalitet, design, service, innovasjon eller merkevare. Eksempel: Apple (design og brukeropplevelse), Patagonia (bærekraft).

**3. Fokus (nisjestrategi):**
Konsentrer deg om et smalt segment og vær best der. Kan kombineres med kostnadslederskap eller differensiering innenfor nisjen. Eksempel: Tesla (begynte med luksus-elbiler), Bang & Olufsen (premium-lyd).

**Viktig:** Porter advarte mot å havne «midt imellom» (stuck in the middle) — verken billigst, mest unikt eller mest nisjet. Bedrifter uten en tydelig strategi risikerer å tape mot mer fokuserte konkurrenter.`,
    },
    {
      id: 'mfl-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mfl-3-4-ex-1',
        number: '3.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Ifølge Porters five forces — hva avgjør trusselen fra nye aktører i en bransje?',
        options: [
          { id: 'a', text: 'Antall eksisterende kunder i markedet', isCorrect: false },
          { id: 'b', text: 'Hvor høye inngangsbarrierene er', isCorrect: true },
          { id: 'c', text: 'Hvor mange substitutter som finnes', isCorrect: false },
          { id: 'd', text: 'Leverandørenes forhandlingsmakt', isCorrect: false },
        ],
        solution: 'Trusselen fra nye aktører avhenger av inngangsbarrierene i bransjen. Høye barrierer (f.eks. store investeringer, sterke merkevarer, streng regulering) gjør det vanskeligere for nye aktører å entre, og trusselen er lavere. Lave barrierer gjør bransjen sårbar for nye konkurrenter.',
      },
    },
    {
      id: 'mfl-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mfl-3-4-ex-2',
        number: '3.4.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken av Porters generiske strategier beskriver en bedrift som tilbyr unike produkter kundene er villige til å betale mer for?',
        options: [
          { id: 'a', text: 'Kostnadslederskap', isCorrect: false },
          { id: 'b', text: 'Differensiering', isCorrect: true },
          { id: 'c', text: 'Fokus/nisjestrategi', isCorrect: false },
          { id: 'd', text: 'Markedspenetrasjon', isCorrect: false },
        ],
        solution: 'Differensiering handler om å tilby noe unikt — enten gjennom kvalitet, design, innovasjon, service eller merkevare — som kundene verdsetter og er villige til å betale en premie for. Kostnadslederskap fokuserer på å være billigst, mens nisjestrategi handler om å betjene et smalt segment.',
      },
    },
    {
      id: 'mfl-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mfl-3-4-ex-3',
        number: '3.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg en bransje du kjenner (f.eks. hurtigmat, kleshandel eller strømming) og analyser den med Porters five forces. Vurder hver kraft som lav, middels eller høy, og begrunn.',
        hints: ['Gå gjennom alle fem kreftene systematisk. Tenk på konkrete eksempler.'],
        solution: 'Eksempel for hurtigmat i Norge: 1) Rivalisering: HØY — mange aktører (McDonald\'s, Burger King, Subway, lokale aktører), lav differensiering, priskonkurranse. 2) Nye aktører: MIDDELS — relativt lave inngangsbarrierer, men etablerte merker har stordriftsfordeler og gode beliggenheter. 3) Substitutter: HØY — ferdigmat fra butikk, hjemlevering (Wolt, Foodora), hjemmelaget mat, sunn hurtigmat. 4) Leverandørmakt: LAV — mange leverandører av råvarer, kjedene har stor innkjøpsmakt. 5) Kundemakt: HØY — mange alternativer, lav byttekostnad, prisbevisste kunder. Samlet vurdering: Bransjen er konkurranseintensiv med press fra mange kanter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mfl-3-4-ex-4',
        number: '3.4.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva benchmarking er, og gi et praktisk eksempel på hvordan en nettbutikk kan bruke konkurransebenchmarking for å forbedre sin kundeopplevelse.',
        hints: ['Tenk på konkrete ting en nettbutikk kan måle og sammenligne'],
        solution: 'Benchmarking er å systematisk sammenligne egne prestasjoner med «best practice» hos konkurrenter eller ledende bedrifter. Eksempel: En norsk nettbutikk benchmarker kundeopplevelsen mot Komplett.no og Amazon. De måler: 1) Leveringstid — selv 4 dager, Komplett 1–2 dager, Amazon 1–2 dager. Mål: Under 3 dager. 2) Returprosess — selv krever utfylling av skjema, Komplett har forhåndsbetalt returetikett, Amazon har sømløs retur. Mål: Forhåndsbetalt returetikett. 3) Kundeservice responstid — selv 24 timer, Komplett 2 timer live chat, Amazon umiddelbar chatbot. Mål: Live chat med under 5 minutters ventetid. Basert på dette setter nettbutikken konkrete forbedringsmål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-3-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mfl-3-4-ex-5',
        number: '3.4.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva advarte Michael Porter mot når det gjelder strategisk posisjonering?',
        options: [
          { id: 'a', text: 'Å velge for mange målgrupper', isCorrect: false },
          { id: 'b', text: 'Å havne «midt imellom» uten en tydelig strategi for kostnad, differensiering eller fokus', isCorrect: true },
          { id: 'c', text: 'Å bruke for mye penger på markedsundersøkelser', isCorrect: false },
          { id: 'd', text: 'Å ignorere substituttene i bransjen', isCorrect: false },
        ],
        solution: 'Porter advarte mot å bli «stuck in the middle» — å ikke ha en klar strategi. En bedrift som verken er billigst, mest differensiert eller best i en nisje, risikerer å tape mot mer fokuserte konkurrenter på alle fronter. Det er bedre å velge én tydelig strategisk retning.',
      },
    },
    {
      id: 'mfl-3-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mfl-3-4-ex-6',
        number: '3.4.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjennomfør en konkurrentkartlegging for en selvvalgt bedrift. Identifiser minst tre direkte konkurrenter, vurder deres styrker og svakheter, og foreslå hvordan bedriften kan differensiere seg.',
        hints: ['Bruk offentlig tilgjengelig informasjon: nettsider, sosiale medier, kundevurderinger, priser'],
        solution: 'Eksempel for Clas Ohlson i Norge: Direkte konkurrenter: 1) Biltema — styrke: lave priser, stort utvalg, bilrelaterte produkter. Svakhet: sparsomt interiør, begrenset nettbutikk. 2) Jula — styrke: aggressive priser, voksende kjede. Svakhet: nyere i Norge, mindre merkevarekjennskap. 3) Europris — styrke: mange butikker, lavpristilbud. Svakhet: oppfattes som «billigkjede», begrenset kvalitetssortiment. Clas Ohlsons differensieringsmuligheter: 1) Satse sterkere på smart-hjem-produkter og teknologi (ingen av konkurrentene har dette som hovedfokus). 2) Styrke nettbutikk med «click and collect» og rask levering. 3) Posisjonere seg som det kvalitetsbevisste alternativet med god rådgivning i butikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.5: Fra innsikt til beslutning
// ============================================================================

export const CHAPTER_MARKEDSFORING_3_5: TextbookChapter = {
  id: 'markedsforing-3-5',
  courseId: 'markedsforing',
  chapterNumber: '3.5',
  title: 'Fra innsikt til beslutning',
  description: 'Hvordan analysere funn fra markedsundersøkelser, trekke pålitelige konklusjoner og ta beslutninger basert på data.',
  estimatedMinutes: 20,
  competenceGoals: [
    'bruke og utvikle markedsundersøkelser for å utforske og få innsikt i markeder og målgrupper',
    'gjennomføre situasjonsanalyser som grunnlag for beslutninger',
  ],
  content: [
    {
      id: 'mfl-3-5-intro',
      type: 'text',
      content: `## Data er bare starten

Du har gjennomført markedsundersøkelser, analysert konkurrenter og laget SWOT- og PESTEL-analyser. Skrivebordene dine flyter over av data, grafer og rapporter. Men her kommer det avgjørende spørsmålet: **Hva betyr alt dette, og hva skal bedriften gjøre?**

Innsikt uten handling er verdiløs. Formålet med all markedsanalyse er å gi et bedre grunnlag for beslutninger. I dette kapittelet lærer du hvordan du går fra data via innsikt til konkrete anbefalinger og beslutninger.

**Prosessen:**
1. Organisere og strukturere data
2. Identifisere mønstre og nøkkelfunn
3. Tolke funnene i kontekst
4. Formulere innsikter
5. Utvikle anbefalinger
6. Presentere for beslutningstakere`,
    },
    {
      id: 'mfl-3-5-def-1',
      type: 'definition',
      title: 'Data, informasjon og innsikt',
      content: `Det er viktig å skille mellom tre nivåer:

**Data** er rå fakta og tall uten kontekst.
Eksempel: «43 % av respondentene svarte 'ja'.»

**Informasjon** er data som er organisert og gitt mening.
Eksempel: «43 % av kundene våre er villige til å betale mer for miljøvennlig emballasje.»

**Innsikt** er en dypere forståelse som peker mot handling.
Eksempel: «Nesten halvparten av kundene våre verdsetter bærekraft så høyt at de vil betale en premie. Ved å bytte til miljøvennlig emballasje kan vi øke betalingsviljen og differensiere oss fra konkurrentene.»

Målet med markedsanalyse er å transformere data til innsikt som driver beslutninger.`,
    },
    {
      id: 'mfl-3-5-text-1',
      type: 'text',
      content: `## Analysere funn fra undersøkelser

Når du har samlet inn data, er neste steg å finne mening i dem.

### Kvantitative data — se etter mønstre
- **Frekvensfordeling:** Hvor mange svarte hva? Hvilke svaralternativer dominerer?
- **Krysstabell:** Henger svarene sammen med alder, kjønn eller annet? Foretrekker kvinner andre egenskaper enn menn?
- **Gjennomsnitt og spredning:** Hva er gjennomsnittsscoren? Er det stor variasjon i svarene?
- **Trender over tid:** Endrer svarene seg fra tidligere undersøkelser?

### Kvalitative data — se etter temaer
- **Koding:** Les gjennom alle intervjuer og merk utsagn med kategorier (temaer)
- **Tematisk analyse:** Hvilke temaer går igjen på tvers av informanter?
- **Sitater:** Velg ut representative sitater som illustrerer viktige funn
- **Avvikende funn:** Er det noen som skiller seg ut? Disse kan gi like verdifull innsikt som hovedtrendene.

### Unngå vanlige analysefeller
- **Bekreftelsesbias:** Å bare lete etter data som bekrefter det du allerede tror
- **Korrelasjon ≠ kausalitet:** At to ting henger sammen betyr ikke at det ene forårsaker det andre
- **Overfortolkning:** Å trekke for sterke konklusjoner fra små datamengder
- **Cherry-picking:** Å kun presentere de funnene som støtter ønsket konklusjon`,
    },
    {
      id: 'mfl-3-5-text-2',
      type: 'text',
      content: `## Fra funn til anbefalinger

Gode anbefalinger er:
- **Spesifikke:** "Reduser prisen med 10 %" er bedre enn "vurder å justere prisen"
- **Handlingsrettede:** De beskriver hva bedriften konkret bør *gjøre*
- **Begrunnet:** De bygger direkte på funn fra analysen
- **Realistiske:** De tar hensyn til bedriftens ressurser og begrensninger
- **Prioriterte:** De er rangert etter forventet effekt og gjennomførbarhet

### Strukturer anbefalingene dine

**For hver anbefaling, svar på:**
1. Hva bør gjøres? (handling)
2. Hvorfor? (funn fra analysen som støtter dette)
3. For hvem? (hvilken målgruppe)
4. Når? (tidslinje)
5. Hva forventer vi? (forventet effekt)
6. Hva koster det? (ressursbehov)

### Beslutningstaking basert på data

Data gir sjelden 100 % entydige svar. Beslutningstakere må veie:
- **Dataene:** Hva forteller analysen?
- **Erfaring:** Hva vet vi fra tidligere?
- **Magefølelse:** Stemmer det med vår bransjeforståelse?
- **Risiko:** Hva er konsekvensene hvis vi tar feil?
- **Ressurser:** Har vi evnen til å gjennomføre dette?`,
    },
    {
      id: 'mfl-3-5-example-1',
      type: 'example',
      title: 'Eksempel: Fra data til beslutning',
      problem: 'En klesbutikk har gjennomført en kundeundersøkelse med 500 respondenter. Her er noen funn. Hvilke innsikter og anbefalinger kan trekkes ut?',
      solution: `**Funn fra undersøkelsen:**
- 67 % handler oftest på nettet, men 82 % foretrekker å prøve klær fysisk
- 45 % oppgir at returer er den største frustrasjonen med netthandel
- NPS (Net Promoter Score) for butikkopplevelsen er 72, men kun 38 for nettbutikken
- 58 % i aldersgruppen 18–25 ønsker «buy online, pick up in store» (BOPIS)

**Innsikter:**
1. Kundene vil ha det beste fra begge verdener — nettets bekvemmelighet og butikkens prøveopplevelse
2. Returproblemet er et stort friksjonspunkt som driver kunder bort fra nettbutikken
3. Det er et stort gap i kundetilfredshet mellom butikk og nett
4. Unge kunder etterspør en hybrid opplevelse som ikke finnes i dag

**Anbefalinger (prioritert):**
1. **Innfør BOPIS:** Kunder bestiller på nett og henter/prøver i butikk. Rask implementering, dekker behov hos 58 % av unge kunder.
2. **Forenkle returprosessen:** Gratis retur med forhåndsbetalt etikett og retur i butikk. Reduserer den største frustrasjonen.
3. **Invester i nettbutikkens brukeropplevelse:** Bedre produktbilder, størrelsesguide med AI, og kundevurderinger. Lukk NPS-gapet.`,
    },
    {
      id: 'mfl-3-5-def-2',
      type: 'definition',
      title: 'Presentasjon av analyseresultater',
      content: `En god presentasjon av markedsanalyse følger gjerne denne strukturen:

**1. Sammendrag (executive summary)**
De viktigste funnene og anbefalingene oppsummert i 1–2 sider. Mange beslutningstakere leser bare dette.

**2. Bakgrunn og problemstilling**
Hva var formålet med analysen? Hva ønsket vi å finne ut?

**3. Metode**
Hvordan ble dataene samlet inn? Utvalg, metoder, begrensninger.

**4. Funn**
Presenter nøkkelfunnene med støtte i grafer, tabeller og sitater. Organiser tematisk.

**5. Analyse og innsikter**
Hva betyr funnene? Knytt dem til bedriftens situasjon og strategi.

**6. Anbefalinger**
Konkrete, prioriterte handlingsforslag basert på analysen.

**7. Vedlegg**
Spørreskjema, detaljerte tabeller, metodebeskrivelse for de som vil gå dypere.`,
    },
    {
      id: 'mfl-3-5-note-1',
      type: 'note',
      title: 'Datadrevet vs. datainformert',
      content: `Det er en viktig forskjell mellom å være **datadrevet** og **datainformert**.

En *datadrevet* tilnærming betyr at dataene alene bestemmer hva du gjør. En *datainformert* tilnærming betyr at du bruker data som én av flere innsiktskilder, sammen med erfaring, kreativitet og bransjekunnskap.

I markedsføring er datainformert ofte best. Data kan fortelle deg hva kundene gjør, men ikke alltid hvorfor — og sjelden hva de *vil* gjøre i fremtiden. Gjennombruddsinnovasjoner som iPhone eller Airbnb ville neppe kommet ut av en spørreundersøkelse.`,
    },
    {
      id: 'mfl-3-5-tip-1',
      type: 'tip',
      title: 'Fortellerkunst med data',
      content: `De beste analysepresentasjonene forteller en historie. I stedet for å ramse opp tall, bygg en narrativ: «Vi startet med en hypotese, undersøkte dette, og oppdaget noe overraskende. Funnet peker mot en mulighet vi ikke hadde sett. Her er hva vi anbefaler — og her er hvorfor.» Mennesker husker historier bedre enn tabeller.`,
    },
    {
      id: 'mfl-3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mfl-3-5-ex-1',
        number: '3.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom data og innsikt?',
        options: [
          { id: 'a', text: 'Data er tall, innsikt er tekst', isCorrect: false },
          { id: 'b', text: 'Data er rå fakta, innsikt er en dypere forståelse som peker mot handling', isCorrect: true },
          { id: 'c', text: 'Data er kvantitativt, innsikt er kvalitativt', isCorrect: false },
          { id: 'd', text: 'Data er objektivt, innsikt er subjektivt', isCorrect: false },
        ],
        solution: 'Data er rå fakta og tall uten kontekst (f.eks. «43 % svarte ja»). Innsikt er en dypere forståelse av hva dataene betyr i kontekst, og den peker mot en konkret handling eller mulighet. Målet med analyse er å transformere data til handlingsrettede innsikter.',
      },
    },
    {
      id: 'mfl-3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mfl-3-5-ex-2',
        number: '3.5.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En undersøkelse viser at kundene som kjøper økologisk mat også trener oftere. Hva er den riktige tolkningen?',
        options: [
          { id: 'a', text: 'Å spise økologisk gjør at man trener mer', isCorrect: false },
          { id: 'b', text: 'Å trene gjør at man spiser mer økologisk', isCorrect: false },
          { id: 'c', text: 'Det er en sammenheng (korrelasjon), men vi kan ikke fastslå årsaksforhold (kausalitet) uten videre analyse', isCorrect: true },
          { id: 'd', text: 'Undersøkelsen er feil gjennomført', isCorrect: false },
        ],
        solution: 'Korrelasjon betyr ikke kausalitet. At to ting henger sammen betyr ikke at det ene forårsaker det andre. Det kan finnes en tredje faktor (f.eks. helsebevissthet) som forklarer begge. For å fastslå årsaksforhold trengs kontrollerte eksperimenter eller grundigere statistisk analyse.',
      },
    },
    {
      id: 'mfl-3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mfl-3-5-ex-3',
        number: '3.5.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom en datadrevet og en datainformert tilnærming til markedsføring. Gi et eksempel der en rent datadrevet tilnærming kan føre galt av sted.',
        hints: ['Tenk på situasjoner der data kan være misvisende eller ufullstendige'],
        solution: 'Datadrevet betyr at dataene alene bestemmer beslutningene. Datainformert betyr at data er én av flere innsiktskilder, sammen med erfaring og skjønn. Eksempel: En restaurant ser i dataene at pastasalater selger best om sommeren og kutter resten av menyen. Men dataene fanget ikke opp at den nye kokken som nettopp begynte lager fantastisk pizza som kunne blitt en hit. En datainformert tilnærming ville brukt salgsdataene som utgangspunkt, men også vurdert kokkens styrker, lokale trender og kreative muligheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mfl-3-5-ex-4',
        number: '3.5.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Her er tre funn fra en spørreundersøkelse blant gymmedlemmer: 1) 72 % synes åpningstidene er for begrensede. 2) 48 % ønsker flere gruppetimer om morgenen. 3) 65 % ville anbefalt treningssenteret til en venn. Formuler minst to handlingsrettede innsikter og konkrete anbefalinger basert på disse funnene.',
        hints: ['Koble funnene sammen og tenk på hva de betyr i sammenheng'],
        solution: 'Innsikt 1: Treningssenteret har lojale medlemmer (65 % anbefaler), men risikerer å miste dem fordi åpningstidene ikke passer. Ved å utvide åpningstidene kan senteret både beholde eksisterende medlemmer og tiltrekke nye gjennom anbefalinger. Anbefaling: Utvid åpningstidene til kl. 06–23 (eventuelt 24-timers nøkkelkorttilgang). Innsikt 2: Det er udekkede behov for morgentrening, spesielt gruppetimer. Nesten halvparten ønsker dette, noe som tyder på en målgruppe som trener før jobb. Anbefaling: Innfør 2–3 nye gruppetimer mellom kl. 06:30 og 08:00, fokuser på populære formater som spinning og yoga.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-3-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mfl-3-5-ex-5',
        number: '3.5.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er den viktigste delen av en analyserapport for travle beslutningstakere?',
        options: [
          { id: 'a', text: 'Metodebeskrivelsen', isCorrect: false },
          { id: 'b', text: 'Vedleggene med rådata', isCorrect: false },
          { id: 'c', text: 'Sammendraget (executive summary) med nøkkelfunn og anbefalinger', isCorrect: true },
          { id: 'd', text: 'Detaljerte grafer og tabeller', isCorrect: false },
        ],
        solution: 'Sammendraget (executive summary) er det viktigste for beslutningstakere fordi mange kun leser denne delen. Det skal oppsummere de viktigste funnene og gi klare anbefalinger på 1–2 sider. Detaljerte funn, metode og vedlegg er viktige for de som vil gå dypere, men beslutninger tas ofte basert på sammendraget.',
      },
    },
    {
      id: 'mfl-3-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mfl-3-5-ex-6',
        number: '3.5.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Tenk deg at du har gjennomført en fullstendig markedsanalyse for en ny app som hjelper studenter med studieteknikk. Du har SWOT, PESTEL, konkurranseanalyse og en spørreundersøkelse blant 300 studenter. Skriv et executive summary (sammendrag) på maks 200 ord som oppsummerer de viktigste funnene og gir tre prioriterte anbefalinger.',
        hints: ['Start med nøkkelfunnet, gi kontekst, og avslutt med klare anbefalinger'],
        solution: 'Eksempel på executive summary: "Vår markedsanalyse viser et betydelig markedspotensial for en studieteknikk-app blant norske studenter. 78 % av 300 spurte studenter opplever studieteknikk som et problem, men kun 12 % bruker en dedikert app i dag. Konkurrentanalysen viser at eksisterende løsninger er engelskspråklige og ikke tilpasset norsk studiekultur. PESTEL-analysen peker på digitalisering i utdanningen og økende fokus på studentvelferd som gunstige trender. SWOT-analysen identifiserer norskspråklig innhold og tilpasning til LK20/Kvalifikasjonsrammeverket som våre hovedstyrker, men begrenset budsjett og ukjent merkevare som svakheter. Anbefalinger (prioritert): 1) Lansér en MVP med fokus på repetisjonsteknikker og tidsplanlegging — de to mest etterspurte funksjonene. 2) Inngå samarbeid med 5 studentorganisasjoner for gratis distribusjon og testing i første semester. 3) Bruk freemium-modell med gratis basisfunksjoner og premium-abonnement for avanserte verktøy."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const MARKEDSFORING_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_MARKEDSFORING_3_1,
  CHAPTER_MARKEDSFORING_3_2,
  CHAPTER_MARKEDSFORING_3_3,
  CHAPTER_MARKEDSFORING_3_4,
  CHAPTER_MARKEDSFORING_3_5,
];
