/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Teknologi og forskningslære 2 VG3
 *
 * Seksjon 1: Avansert forskningsmetode (Kapittel 1.1–1.7)
 * Denne filen inneholder kapittel 1.1–1.7.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1.1: Forskningsdesign og metodevalg
// ============================================================================

export const CHAPTER_TOF_2_1_1: TextbookChapter = {
  id: 'tof-2-1-1',
  courseId: 'tof-2',
  chapterNumber: '1.1',
  title: 'Forskningsdesign og metodevalg',
  description: 'Eksperimentelt, kvasi-eksperimentelt og observasjonelt design.',
  estimatedMinutes: 25,
  competenceGoals: [
    'velge egnet forskningsdesign',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof2-1-1-intro',
      type: 'text',
      content: `## Forskningsdesign og metodevalg

Ethvert forskningsprosjekt begynner med et spørsmål, men veien fra spørsmål til svar avhenger i stor grad av hvilket **forskningsdesign** vi velger. Et forskningsdesign er den overordnede planen for hvordan vi skal samle inn, måle og analysere data for å besvare forskningsspørsmålet vårt.

I Teknologi og forskningslære 1 lærte du om grunnleggende vitenskapelig metode, den hypotetisk-deduktive metoden og forskjellen mellom kvalitative og kvantitative tilnærminger. Nå skal vi gå dypere inn i de ulike typene forskningsdesign, forstå deres styrker og svakheter, og lære å velge riktig design for ulike forskningsspørsmål.

Valget av forskningsdesign er en av de viktigste avgjørelsene en forsker tar. Et feil valg kan gjøre det umulig å besvare forskningsspørsmålet, eller enda verre — gi villedende resultater.`,
    },

    // --- BLOKK 1: Hva er forskningsdesign? ---
    {
      id: 'tof2-1-1-def-1',
      type: 'definition',
      title: 'Forskningsdesign',
      content: `**Forskningsdesign** er den overordnede strategien som styrer hvordan en studie planlegges og gjennomføres. Designet bestemmer:

- **Hva** som undersøkes (variabler og enheter)
- **Hvordan** data samles inn (metode og instrument)
- **Når** data samles inn (tidsramme og målinger)
- **Hvem** som inngår i studien (utvalg og populasjon)
- **Hvorfor** vi kan trekke de konklusjonene vi gjør (kausal logikk)

Et godt forskningsdesign sikrer at resultatene er **pålitelige** (reliable) og **gyldige** (valide), og at de kan besvare forskningsspørsmålet med størst mulig sikkerhet.`,
    },
    {
      id: 'tof2-1-1-text-1',
      type: 'text',
      content: `### De tre hovedtypene forskningsdesign

I kvantitativ forskning skiller vi mellom tre hovedtyper av design, ordnet etter hvor stor kontroll forskeren har over variablene:

**1. Eksperimentelt design (ekte eksperiment)**
Forskeren **manipulerer** den uavhengige variabelen og bruker **randomisering** for å fordele deltakere til grupper. Dette gir den sterkeste grunnlaget for å påvise årsakssammenhenger.

**2. Kvasi-eksperimentelt design**
Forskeren manipulerer den uavhengige variabelen, men kan **ikke randomisere** deltakerne til grupper. Gruppene er allerede naturlig dannet — for eksempel ulike skoleklasser, avdelinger eller geografiske områder.

**3. Observasjonelt design (ikke-eksperimentelt)**
Forskeren **verken manipulerer** variabelen eller randomiserer. I stedet observeres og måles fenomener slik de naturlig forekommer. Dette inkluderer tverrsnittsstudier, kohortstudier og kasus-kontroll-studier.

Disse tre designene danner et hierarki: ekte eksperimenter gir sterkest evidens for kausalitet, mens observasjonelle studier er svakest — men ofte de eneste mulige av etiske eller praktiske grunner.`,
    },
    {
      id: 'tof2-1-1-example-1',
      type: 'example',
      title: 'Eksempel: Tre design for samme problemstilling',
      problem: 'En forsker vil undersøke om regelmessig fysisk aktivitet reduserer stressnivået hos elever. Hvordan kan dette undersøkes med hvert av de tre designtypene?',
      solution: `**Eksperimentelt design:**
Forskeren rekrutterer 100 frivillige elever og bruker loddtrekning (randomisering) til å fordele dem i to grupper: en treningsgruppe (trener 3 ganger per uke i 8 uker) og en kontrollgruppe (ingen trening). Stressnivå måles før og etter med standardiserte spørreskjemaer.

**Kvasi-eksperimentelt design:**
Forskeren bruker to eksisterende skoleklasser — én klasse får et organisert treningsprogram, den andre fortsetter som normalt. Forskeren kan ikke randomisere fordi klassene allerede er dannet. Stressnivå måles i begge klasser før og etter.

**Observasjonelt design:**
Forskeren sender ut spørreskjemaer til 500 elever og måler både treningsvaner og stressnivå på ett tidspunkt. Deretter analyseres sammenhengen statistisk. Ingen manipulasjon av treningsvaner.

Jo mer kontroll (eksperiment > kvasi > observasjon), desto sikrere kan vi si at trening *forårsaker* redusert stress, men desto dyrere og mer tidkrevende er studien.`,
    },
    {
      id: 'tof2-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof2-1-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er det viktigste kjennetegnet som skiller et ekte eksperiment fra et kvasi-eksperiment?',
        options: [
          { id: 'a', text: 'At det brukes en kontrollgruppe', isCorrect: false },
          { id: 'b', text: 'At deltakerne randomiseres til grupper', isCorrect: true },
          { id: 'c', text: 'At det brukes statistisk analyse', isCorrect: false },
          { id: 'd', text: 'At variablene er kvantifiserbare', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Det avgjørende skillet mellom ekte eksperimenter og kvasi-eksperimenter er randomisering — altså at deltakerne fordeles tilfeldig til grupper. Begge designtypene kan ha kontrollgrupper (A), bruke statistikk (C) og kvantifiserbare variabler (D), men bare ekte eksperimenter bruker randomisering for å sikre at gruppene er sammenlignbare fra start.',
      },
    },

    // --- BLOKK 2: Eksperimentelt design ---
    {
      id: 'tof2-1-1-text-2',
      type: 'text',
      content: `### Eksperimentelt design i detalj

Det eksperimentelle designet er gullstandarden i forskning når vi ønsker å påvise **årsakssammenhenger**. Tre elementer må være til stede:

**Manipulasjon:** Forskeren bestemmer hvilken behandling eller betingelse hver gruppe utsettes for. Den variabelen som manipuleres, kalles den **uavhengige variabelen** (UV). Det som måles som respons, kalles den **avhengige variabelen** (AV).

**Randomisering:** Deltakere fordeles tilfeldig til eksperiment- og kontrollgruppe. Randomisering sikrer at eventuelle forskjeller mellom gruppene ved start er tilfeldige og ikke systematiske.

**Kontroll:** Alle andre faktorer enn den uavhengige variabelen holdes så like som mulig mellom gruppene. Dette kalles å kontrollere for **konfunderende variabler** — faktorer som kan påvirke resultatet og forstyrre sammenhengen mellom UV og AV.

Når alle tre elementene er på plass, kan vi med stor sikkerhet si at en observert forskjell mellom gruppene skyldes den uavhengige variabelen, og ikke andre faktorer.`,
    },
    {
      id: 'tof2-1-1-note-1',
      type: 'note',
      title: 'Når ekte eksperimenter ikke er mulige',
      content: `Det er mange situasjoner der ekte eksperimenter er umulige eller uetiske. Vi kan ikke tilfeldig fordele mennesker til å røyke eller la være for å studere lungekreft. Vi kan ikke tvinge skoler til å bruke bestemte undervisningsmetoder. Vi kan ikke manipulere sosioøkonomisk bakgrunn. I slike tilfeller må vi bruke kvasi-eksperimentelle eller observasjonelle design, og være ekstra forsiktige med å trekke kausale slutninger.`,
    },
    {
      id: 'tof2-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof2-1-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'En forsker ønsker å undersøke om en ny gjødseltype gir høyere avling enn tradisjonell gjødsel. Hun deler 40 like store jordflekker tilfeldig i to grupper: 20 får ny gjødsel, 20 får tradisjonell gjødsel. Avlingen måles etter sesongen. Hvilket design er dette?',
        options: [
          { id: 'a', text: 'Observasjonelt design', isCorrect: false },
          { id: 'b', text: 'Kvasi-eksperimentelt design', isCorrect: false },
          { id: 'c', text: 'Eksperimentelt design (ekte eksperiment)', isCorrect: true },
          { id: 'd', text: 'Kasus-kontroll-studie', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Studien oppfyller alle tre kravene til et ekte eksperiment: (1) manipulasjon — forskeren bestemmer hvilken gjødsel som brukes, (2) randomisering — jordflekkene fordeles tilfeldig til gruppene, og (3) kontroll — gruppene er ellers like (samme størrelse, samme jordtype, osv.).',
      },
    },

    // --- BLOKK 3: Observasjonelt design ---
    {
      id: 'tof2-1-1-text-3',
      type: 'text',
      content: `### Observasjonelt design

I observasjonelle studier gjør forskeren **ingen manipulasjon** av variablene. I stedet observeres og registreres fenomener slik de naturlig forekommer. Det finnes flere typer observasjonelle design:

**Tverrsnittstudie:** Data samles inn fra en gruppe på **ett tidspunkt**. Eksempel: En spørreundersøkelse som kartlegger sammenhengen mellom søvnvaner og skoleprestasjoner blant elever akkurat nå. Enkelt og billig, men kan ikke si noe om hva som kom først (kausalitet).

**Kohortstudie:** En gruppe (kohort) følges **over tid**. Eksempel: 1000 nyfødte følges i 20 år for å se om amming i spedbarnsalderen er assosiert med helse senere i livet. Kan vise tidsrekkefølge, men er tidkrevende og dyrt.

**Kasus-kontroll-studie:** Man starter med utfallet og ser **bakover i tid**. Eksempel: Man sammenligner personer med lungekreft (kasus) med friske personer (kontroll) og undersøker om de har vært utsatt for ulike miljøfaktorer. Effektivt for sjeldne sykdommer, men sårbar for hukommelsesskjevhet (recall bias).

**Økologisk studie:** Studerer sammenhenger på **gruppenivå** i stedet for individnivå. Eksempel: Sammenhengen mellom et lands sukkerforbruk og forekomst av diabetes. Enkel, men sårbar for **økologisk feilslutning** — det som gjelder på gruppenivå trenger ikke gjelde på individnivå.`,
    },
    {
      id: 'tof2-1-1-warning-1',
      type: 'warning',
      title: 'Korrelasjon er ikke kausalitet',
      content: `Observasjonelle studier kan bare påvise **korrelasjon** (samvariasjon) mellom variabler — ikke kausalitet (årsakssammenheng). Selv om vi finner en sterk statistisk sammenheng mellom to variabler, kan sammenhengen skyldes en tredje, ukjent variabel (konfunderende variabel).

Klassisk eksempel: Iskremssalg og drukningsulykker korrelerer sterkt. Betyr det at iskrem forårsaker drukning? Nei — begge påvirkes av en tredje variabel: varmt vær.

For å styrke kausale slutninger fra observasjonelle studier bruker forskere metoder som **multivariat regresjonsanalyse**, **instrumentelle variabler** og **propensity score matching**.`,
    },
    {
      id: 'tof2-1-1-example-2',
      type: 'example',
      title: 'Eksempel: Velge riktig design',
      problem: 'En forsker vil undersøke om langvarig bruk av mobiltelefon er forbundet med hodepine. Hvorfor er et ekte eksperiment uegnet, og hvilke observasjonelle design kan brukes?',
      solution: `Et ekte eksperiment ville kreve at forskeren tilfeldig fordeler mennesker til å bruke mobiltelefon mye eller lite over lang tid. Dette er problematisk fordi:
- **Etisk:** Vi kan ikke tvinge folk til en livsstil som potensielt er skadelig
- **Praktisk:** Det er umulig å kontrollere mobilbruk over lang tid

I stedet kan observasjonelle design brukes:

**Tverrsnittstudie:** Send ut spørreskjema til 2000 personer. Kartlegg mobilbruk og hodepinefrekvens. Rask og billig, men kan ikke vise hva som kom først.

**Kohortstudie:** Følg 2000 personer i 5 år. Registrer mobilbruk og forekomst av hodepine over tid. Kan vise om høy mobilbruk *forut for* hodepine, men er dyrt.

**Kasus-kontroll-studie:** Sammenlign 200 personer med kronisk hodepine med 200 friske kontrollpersoner. Undersøk mobilbruk bakover i tid. Effektivt, men sårbart for hukommelsesskjevhet.

Valget avhenger av tid, ressurser og hvilke konfunderende variabler man kan kontrollere for.`,
    },
    {
      id: 'tof2-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof2-1-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom en tverrsnittstudie og en kohortstudie. Gi et konkret eksempel på en problemstilling som egner seg best for hvert av designene, og begrunn valget ditt.',
        hints: ['Tenk på tidsaspektet: når samles data inn? Hva kan hvert design si om årsakssammenheng?'],
        solution: 'En tverrsnittstudie samler inn data på ett tidspunkt og gir et øyeblikksbilde av sammenhengen mellom variabler. Eksempel: «Er det en sammenheng mellom sosiale medier-bruk og engstelighet blant ungdom?» Tverrsnitt egner seg her for å kartlegge omfang og sammenheng raskt.\n\nEn kohortstudie følger en gruppe over tid og kan vise tidsrekkefølge mellom eksponering og utfall. Eksempel: «Fører stillesittende arbeid til ryggproblemer over en 10-årsperiode?» Her trengs oppfølging over tid for å se om stillesitting *kommer før* ryggproblemene.\n\nHovedforskjellen er tidsaspektet: tverrsnitt gir rask oversikt, men kan ikke vise kausal retning. Kohortstudier kan vise temporal rekkefølge, men er mer tidkrevende og kostbare.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof2-1-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Forskningsdesign** er den overordnede planen for hvordan en studie gjennomføres, og bestemmer hva vi kan konkludere.
- **Eksperimentelt design** (manipulasjon + randomisering + kontroll) gir sterkest grunnlag for å påvise årsakssammenhenger.
- **Kvasi-eksperimentelt design** bruker manipulasjon uten randomisering — gruppene er allerede naturlig dannet.
- **Observasjonelt design** innebærer ingen manipulasjon og inkluderer tverrsnitt-, kohort-, kasus-kontroll- og økologiske studier.
- Det er et hierarki av evidensstyrke: ekte eksperimenter > kvasi-eksperimenter > observasjonelle studier.
- **Korrelasjon er ikke kausalitet** — observasjonelle studier kan bare påvise samvariasjon, ikke årsakssammenheng.
- Valg av design avhenger av forskningsspørsmålet, etiske hensyn, tid og ressurser.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof2-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof2-1-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En ny app hevder å forbedre konsentrasjonsevnen. Beskriv hvordan du ville designet en studie for å teste denne påstanden. Spesifiser: (a) forskningsspørsmål, (b) type design, (c) uavhengig og avhengig variabel, (d) kontrollgruppe, og (e) minst to konfunderende variabler du ville kontrollert for.',
        hints: ['Tenk på hva som er den beste måten å teste en påstand om at noe «virker» — husk randomisering og kontrollgruppe.'],
        solution: '(a) Forskningsspørsmål: Forbedrer daglig bruk av appen «Fokus» konsentrasjonsevnen hos VG3-elever over 6 uker?\n\n(b) Design: Eksperimentelt (ekte eksperiment) med randomisert kontrollgruppe.\n\n(c) Uavhengig variabel: Bruk av appen (ja/nei). Avhengig variabel: Konsentrasjonsevne målt med standardisert d2-test.\n\n(d) Kontrollgruppe: Deltakerne randomiseres til to grupper — eksperimentgruppen bruker appen 15 min daglig i 6 uker, kontrollgruppen bruker en placebo-app (uten konsentrasjonstrening) i like lang tid.\n\n(e) Konfunderende variabler: (1) Søvnmengde — registreres med søvndagbok. (2) Koffeininntak — registreres daglig. Andre: motivasjon, skjermtid utenom appen, eksamensstress.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof2-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof2-1-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En avisoverskrift sier: «Studie viser at folk som spiser frokost, presterer bedre på jobb.» Artikkelen baserer seg på en tverrsnittstudie med 5000 voksne deltakere. Drøft minst tre grunner til at vi ikke kan konkludere med at frokost *forårsaker* bedre jobbprestasjoner, og foreslå et mer egnet forskningsdesign for å styrke den kausale påstanden.',
        hints: ['Tenk på konfunderende variabler, kausal retning og begrensninger ved tverrsnittdesign.'],
        solution: 'Tre grunner til at vi ikke kan trekke kausale slutninger:\n\n1. Konfunderende variabler: Folk som spiser frokost kan ha en generelt sunnere livsstil (mer søvn, mindre stress, bedre økonomi), og det er disse faktorene som egentlig forklarer bedre jobbprestasjoner.\n\n2. Omvendt kausalitet: Kanskje det er folk som presterer godt (og har mer struktur i livet) som også har tid og overskudd til å spise frokost — altså at gode jobbprestasjoner fører til frokostspising, ikke omvendt.\n\n3. Tverrsnittdesign: Data er samlet inn på ett tidspunkt, så vi vet ikke hva som kom først. Vi kan ikke fastslå tidsrekkefølge mellom eksponering (frokost) og utfall (jobbprestasjoner).\n\nMer egnet design: Et randomisert kontrollert eksperiment der deltakere tilfeldig fordeles til å spise eller hoppe over frokost i 3 måneder, mens jobbprestasjoner måles objektivt (produksjonsdata, vurderinger fra ledere). Konfunderende variabler kontrolleres gjennom randomisering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.2: Eksperimentelt design i praksis
// ============================================================================

export const CHAPTER_TOF_2_1_2: TextbookChapter = {
  id: 'tof-2-1-2',
  courseId: 'tof-2',
  chapterNumber: '1.2',
  title: 'Eksperimentelt design i praksis',
  description: 'Randomisering, kontrollgrupper, blindtesting og replikasjon.',
  estimatedMinutes: 30,
  competenceGoals: [
    'planlegge eksperimenter',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof2-1-2-intro',
      type: 'text',
      content: `## Eksperimentelt design i praksis

I forrige kapittel lærte du om de overordnede typene forskningsdesign. Nå skal vi gå i dybden på det eksperimentelle designet — gullstandarden for å påvise årsakssammenhenger.

Å planlegge et godt eksperiment er en kunst og en vitenskap i seg selv. Det handler om å kontrollere alt som kan kontrolleres, randomisere det som ikke kan kontrolleres, og måle det som skal måles med størst mulig presisjon. Vi skal se på fire sentrale verktøy i eksperimentell forskning: **randomisering**, **kontrollgrupper**, **blindtesting** og **replikasjon**.

Disse fire verktøyene er ikke bare viktige i medisinsk forskning — de er relevante for alle naturvitenskapelige og teknologiske eksperimenter, fra å teste nye materialer til å evaluere programvare.`,
    },

    // --- BLOKK 1: Randomisering ---
    {
      id: 'tof2-1-2-def-1',
      type: 'definition',
      title: 'Randomisering',
      content: `**Randomisering** er prosessen der forsøkspersoner eller enheter fordeles tilfeldig til eksperimentgrupper. Hensikten er å sikre at gruppene er **statistisk likeverdige** ved oppstart, slik at eventuelle forskjeller i utfall kan tilskrives behandlingen — og ikke forhåndsforskjeller mellom gruppene.

Randomisering eliminerer **seleksjonsskjevhet** (selection bias) og fordeler **ukjente konfunderende variabler** jevnt mellom gruppene. Jo større utvalg, desto bedre fungerer randomisering.

Vanlige randomiseringsmetoder:
- **Enkel randomisering:** Loddtrekning, myntkast eller tilfeldighetsgenerator
- **Blokkrandomisering:** Sikrer lik gruppestørrelse etter bestemte blokker
- **Stratifisert randomisering:** Gruppene balanseres for kjente variabler (f.eks. kjønn, alder) før tilfeldig fordeling`,
    },
    {
      id: 'tof2-1-2-text-1',
      type: 'text',
      content: `### Hvorfor er randomisering så viktig?

Tenk deg at en forsker vil teste om en ny undervisningsmetode gir bedre læringsutbytte. Dersom forskeren lar elevene selv velge hvilken metode de vil prøve, kan de mest motiverte elevene samle seg i én gruppe. Da vet vi ikke om et bedre resultat skyldes metoden eller motivasjonen.

Med randomisering fordeles motiverte og umotiverte elever tilfeldig og omtrent likt i begge grupper. Da «nøytraliseres» motivasjon som konfunderende variabel.

Det samme gjelder for alle andre faktorer vi kanskje ikke engang har tenkt på — forkunnskaper, søvnvaner, kognitiv stil og så videre. Randomisering beskytter mot **både kjente og ukjente** konfunderende variabler, noe ingen annen metode klarer like godt.

### Praktiske utfordringer med randomisering

I virkeligheten er randomisering ikke alltid mulig eller uproblematisk:

- **Frafall:** Deltakere kan droppe ut underveis, spesielt fra gruppen som mottar den «minst attraktive» betingelsen.
- **Etikk:** Vi kan ikke randomisere mennesker til skadelige betingelser (f.eks. røyking).
- **Gruppedynamikk:** Deltakere kan oppdage hvilken gruppe de er i og endre atferd (kompensatorisk rivalisering eller demoralisering).
- **Små utvalg:** Med få deltakere kan tilfeldighetene gi ubalanserte grupper tross randomisering.`,
    },
    {
      id: 'tof2-1-2-example-1',
      type: 'example',
      title: 'Eksempel: Stratifisert randomisering',
      problem: 'En forsker vil teste effekten av et nytt kosttilskudd på utholdenhet hos idrettsutøvere. Utvalget består av 60 deltakere — 30 menn og 30 kvinner. Kjønn kan påvirke utholdenhet. Hvordan bør randomiseringen gjennomføres?',
      solution: `Forskeren bør bruke **stratifisert randomisering** med kjønn som stratifiseringsvariabel:

**Steg 1:** Del utvalget i to strata (lag) basert på kjønn:
- Stratum 1: 30 menn
- Stratum 2: 30 kvinner

**Steg 2:** Randomiser innenfor hvert stratum:
- Blant mennene: 15 tilfeldig til kosttilskudd-gruppen, 15 til placebo-gruppen
- Blant kvinnene: 15 tilfeldig til kosttilskudd-gruppen, 15 til placebo-gruppen

**Resultat:** Begge gruppene (kosttilskudd og placebo) inneholder nøyaktig 15 menn og 15 kvinner. Kjønn er perfekt balansert, og eventuelle kjønnsforskjeller i utholdenhet kan ikke forstyrre sammenligningen.

Hadde forskeren brukt enkel randomisering, kunne tilfeldighetene gitt 20 menn i kosttilskudd-gruppen og bare 10 i placebo-gruppen, noe som ville svekket studien.`,
    },
    {
      id: 'tof2-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof2-1-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er hovedhensikten med randomisering i et eksperiment?',
        options: [
          { id: 'a', text: 'Å sikre at utvalget er representativt for hele befolkningen', isCorrect: false },
          { id: 'b', text: 'Å eliminere behovet for en kontrollgruppe', isCorrect: false },
          { id: 'c', text: 'Å fordele kjente og ukjente konfunderende variabler jevnt mellom gruppene', isCorrect: true },
          { id: 'd', text: 'Å redusere antall deltakere som trengs i studien', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Randomisering sikrer at konfunderende variabler — både de forskeren kjenner til og de som er ukjente — fordeles tilfeldig og dermed omtrent likt mellom gruppene. Det handler ikke om representativitet for befolkningen (A), det erstatter ikke kontrollgrupper (B), og det reduserer ikke nødvendigvis utvalgsstørrelsen (D).',
      },
    },

    // --- BLOKK 2: Kontrollgrupper og blindtesting ---
    {
      id: 'tof2-1-2-text-2',
      type: 'text',
      content: `### Kontrollgrupper

En **kontrollgruppe** er en gruppe deltakere som ikke mottar den eksperimentelle behandlingen, men som ellers behandles identisk med eksperimentgruppen. Kontrollgruppen fungerer som et **sammenligningsgrunnlag**: uten den kan vi ikke vite om endringer i eksperimentgruppen skyldes behandlingen eller andre faktorer som tid, modning, eller forventningseffekter.

Det finnes ulike typer kontrollgrupper:

**Ingen-behandling-kontroll:** Kontrollgruppen mottar ingen behandling. Enklest, men deltakerne vet at de ikke behandles, noe som kan påvirke resultatet.

**Placebo-kontroll:** Kontrollgruppen mottar en virkningsløs behandling som ser ut som den ekte. I medisinske studier er dette f.eks. en sukkerpille. I teknologieksperimenter kan det være en «falsk» oppdatering uten reell endring.

**Aktiv kontroll:** Kontrollgruppen mottar en alternativ, allerede kjent behandling. Brukes når det er uetisk å gi ingen behandling — for eksempel i kreftstudier der det finnes en eksisterende behandling.

**Venteliste-kontroll:** Kontrollgruppen får behandlingen *etter* at studien er fullført. Løser etiske problemer ved å sikre at alle til slutt får tilgang.

### Blindtesting

**Blindtesting** er en metode for å redusere **forventningseffekter** — altså at deltakernes og forskernes forventninger påvirker resultatet.

**Enkelblind studie:** Deltakerne vet ikke hvilken gruppe de er i. Eliminerer placeboeffekt hos deltakerne.

**Dobbeltblind studie:** Verken deltakerne eller forskerne som gjennomfører målingene vet hvem som er i hvilken gruppe. Eliminerer både placeboeffekt og observatørskjevhet.

**Trippelblind studie:** I tillegg til deltakere og forskere vet heller ikke de som analyserer dataene hvilken gruppe som er hvilken. Svært sjelden, men gir maksimal objektivitet.`,
    },
    {
      id: 'tof2-1-2-example-2',
      type: 'example',
      title: 'Eksempel: Placeboeffekten i praksis',
      problem: 'I en studie tester man en ny smertestillende tablett. Gruppe A får den nye tabletten. Gruppe B får ingen tablett. Etter 2 timer rapporterer 70 % i gruppe A bedring, mot 30 % i gruppe B. Kan man konkludere med at tabletten virker?',
      solution: `**Nei, ikke uten videre.** Problemet er at gruppe B vet at de ikke har fått noen tablett. Forskjellen kan skyldes **placeboeffekten**: troen på at man har fått medisin kan i seg selv gi smertelindring.

For å kontrollere for dette trengs en **placebo-kontrollgruppe** som mottar en identisk, men virkningsløs tablett (sukkerpille). Studien bør dessuten være **dobbeltblind** slik at verken deltakere eller forskere vet hvem som fikk hva.

Et bedre oppsett:
- Gruppe A: Ny tablett (ekte medisin)
- Gruppe B: Placebo-tablett (sukkerpille som ser identisk ut)
- Dobbeltblind: Verken deltakere eller forskere vet hvem som fikk hva

Hvis gruppe A nå viser signifikant bedre smertelindring enn gruppe B, kan vi med større sikkerhet si at effekten skyldes den aktive ingrediensen — og ikke forventninger.`,
    },
    {
      id: 'tof2-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof2-1-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'I en dobbeltblind studie vet ikke:',
        options: [
          { id: 'a', text: 'Deltakerne hvilken gruppe de er i, men forskerne vet', isCorrect: false },
          { id: 'b', text: 'Verken deltakerne eller forskerne som gjennomfører studien hvilken gruppe deltakerne er i', isCorrect: true },
          { id: 'c', text: 'Forskerne hvilken gruppe deltakerne er i, men deltakerne vet', isCorrect: false },
          { id: 'd', text: 'Noen i hele studien — inkludert de som analyserer data — hvilken gruppe noen er i', isCorrect: false },
        ],
        solution: 'Riktig svar er B. I en dobbeltblind studie er det verken deltakerne eller forskerne som gjennomfører studien som vet hvem som er i hvilken gruppe. Alternativ A beskriver en enkelblind studie, C er uvanlig og lite nyttig, og D beskriver en trippelblind studie.',
      },
    },

    // --- BLOKK 3: Replikasjon ---
    {
      id: 'tof2-1-2-text-3',
      type: 'text',
      content: `### Replikasjon — gjentagelse av eksperimenter

**Replikasjon** betyr å gjenta et eksperiment for å se om resultatene kan reproduseres. Det er et av de mest grunnleggende prinsippene i vitenskap: et funn som bare kan oppnås én gang, er ikke særlig troverdig.

Vi skiller mellom ulike typer replikasjon:

**Direkte replikasjon:** Eksperimentet gjentas så nøyaktig som mulig — same prosedyre, materialer og betingelser. Tester om det opprinnelige funnet er pålitelig.

**Konseptuell replikasjon:** Samme hypotese testes med **andre metoder, andre deltakere eller andre betingelser**. Tester om funnet er robust og generaliserbart.

**Intern replikasjon:** Forskeren inkluderer gjentatte målinger eller flere grupper *innenfor* én studie for å sjekke konsistens.

### Replikasjonskrisen

Siden 2010-tallet har flere vitenskapsfelt opplevd en **replikasjonskrise**: mange publiserte funn lar seg ikke gjenskape. En storstilt studie publisert i 2015 forsøkte å replikere 100 psykologiske studier. Bare 36 % ga lignende resultater som originalen.

Årsakene er sammensatte:
- **Publiseringsskjevhet:** Tidsskrifter foretrekker positive og overraskende funn
- **p-hacking:** Forskere analyserer data på ulike måter til de finner et signifikant resultat
- **Små utvalg:** Gir ustabile resultater med stor tilfeldighetsvariajon
- **Dårlig dokumentasjon:** Mange studier rapporterer metoden for vagt til å kunne gjentas
- **Manglende insentiver:** Forskere belønnes for nye funn, ikke for å gjenta andres arbeid

### Løsninger

Forskningsmiljøet har innført flere tiltak:
- **Forhåndsregistrering:** Forskere registrerer hypotese, metode og analyseplan *før* datainnsamling
- **Åpen data og åpen kode:** Gjør det mulig for andre å verifisere analyser
- **Registrerte rapporter:** Tidsskrifter vurderer studier basert på metode, uavhengig av resultat
- **Større utvalg:** Krav om statistisk styrkeberegning i forkant`,
    },
    {
      id: 'tof2-1-2-tip-1',
      type: 'tip',
      title: 'Replikasjon i egne eksperimenter',
      content: `Når du gjennomfører eksperimenter i ToF 2, bør du alltid tenke på replikasjon:

1. **Dokumenter alt:** Skriv ned prosedyren så detaljert at en annen elev kan gjøre det samme
2. **Gjenta målinger:** Ta minst tre målinger av det samme og bruk gjennomsnittet
3. **Rapporter usikkerhet:** Angi standardavvik og usikkerhetsintervall
4. **Vær ærlig:** Rapporter alle resultater, også de som ikke støtter hypotesen din`,
    },
    {
      id: 'tof2-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof2-1-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom direkte replikasjon og konseptuell replikasjon. Gi et eksempel der en forsker bruker konseptuell replikasjon for å styrke et funn om at musikk påvirker konsentrasjon.',
        hints: ['Tenk på hva som endres og hva som holdes likt mellom de to typene replikasjon.'],
        solution: 'Direkte replikasjon gjengir det opprinnelige eksperimentet så nøyaktig som mulig — samme prosedyre, måleinstrumenter, betingelser og type deltakere. Konseptuell replikasjon tester den samme hypotesen, men med andre metoder, deltakere eller betingelser.\n\nEksempel: Opprinnelig studie fant at klassisk musikk forbedrer konsentrasjonen hos universitetsstudenter målt med en d2-test.\n\nKonseptuell replikasjon: En ny forsker tester om musikk forbedrer konsentrasjon, men bruker videregående elever (annen aldersgruppe), en annen type konsentrasjonstest (Stroop-test), og annen musikksjanger (lo-fi beats). Hvis funnet holder også under disse endrede betingelsene, styrkes konklusjonen om at musikk generelt påvirker konsentrasjon — det er ikke begrenset til klassisk musikk og universitetsstudenter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof2-1-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Randomisering** fordeler deltakere tilfeldig til grupper og beskytter mot kjente og ukjente konfunderende variabler. Stratifisert randomisering kan brukes for å balansere viktige variabler.
- **Kontrollgrupper** gir et sammenligningsgrunnlag. Placebo-kontroll er viktig for å kontrollere for forventningseffekter.
- **Blindtesting** (enkel-, dobbel- og trippelblind) reduserer subjektive skjevheter fra deltakere og forskere.
- **Replikasjon** innebærer å gjenta eksperimenter for å teste påliteligheten av funn. Direkte replikasjon tester reproduserbarhet, konseptuell replikasjon tester generaliserbarhet.
- **Replikasjonskrisen** har vist at mange publiserte funn ikke kan gjentas. Forhåndsregistrering, åpen data og større utvalg er viktige mottiltak.
- Et godt eksperiment kombinerer alle fire verktøyene for å gi mest mulig pålitelige resultater.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof2-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof2-1-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du skal planlegge et eksperiment for å teste om en ny type LED-lys gir bedre plantevekst enn standard lysrør. Beskriv: (a) hvordan du ville gjennomført randomisering, (b) hva slags kontrollgruppe du ville brukt, (c) om studien bør være blindet (og i så fall hvordan), og (d) hvordan du ville sikret replikerbarhet.',
        hints: ['Tenk på hva som kan fungere som «placebo» i et plantevekst-eksperiment. Er det mulig å blinde plantene?'],
        solution: '(a) Randomisering: 40 identiske tomatplanter nummereres og fordeles tilfeldig (ved loddtrekning eller tilfeldighetsgenerator) til to grupper: 20 under LED-lys og 20 under standard lysrør.\n\n(b) Kontrollgruppe: Aktiv kontroll — plantene under standard lysrør er kontrollgruppen. De får samme mengde lys (timer per dag), vann, jord og temperatur. Eneste forskjell er lyskvaliteten.\n\n(c) Blinding: Plantene kan ikke «blinges», men den som måler plantevekst (høyde, bladareal) bør ikke vite hvilken gruppe plantene tilhører (enkelblind for observatør). Merk plantene med koder i stedet for «LED» og «lysrør».\n\n(d) Replikerbarhet: Dokumenter alle parametere nøyaktig (lysintensitet i lux, bølgelengde, timer/dag, vannmengde, jordtype, romtemperatur). Mål vekst hver uke. Gjennomfør eksperimentet med minst 20 planter per gruppe for statistisk styrke. Publiser all rådata.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof2-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof2-1-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Replikasjonskrisen har vært spesielt alvorlig i psykologi og medisin. Drøft: (a) Hva er de viktigste årsakene til at publiserte funn ikke lar seg replikere? (b) Hvilke tiltak har forskningsmiljøet innført, og hvor effektive tror du de er? (c) Betyr replikasjonskrisen at vi ikke kan stole på vitenskap? Begrunn svaret ditt.',
        hints: ['Tenk på publiseringsskjevhet, p-hacking, utvalgsstørrelser og insentivstrukturer i akademia.'],
        solution: '(a) Viktigste årsaker:\n- Publiseringsskjevhet: Tidsskrifter favoriserer positive, overraskende funn. Negative resultater blir sjelden publisert, noe som gir et skjevt bilde.\n- P-hacking: Forskere analyserer data på mange måter til de finner et signifikant resultat (p < 0,05), ofte ubevisst.\n- Små utvalg: Mange studier har for få deltakere til å gi stabile resultater.\n- Manglende transparens: Metoder beskrives for vagt, og rådata deles sjelden.\n\n(b) Tiltak og effektivitet:\n- Forhåndsregistrering (f.eks. OSF): Effektivt mot p-hacking, men ikke alle følger planen.\n- Registrerte rapporter: Tidsskrifter aksepterer studier basert på metode, ikke resultat. Svært effektivt, men ennå lite utbredt.\n- Åpen data: Gjør det mulig å verifisere analyser. Bra, men krever ekstraarbeid.\n- Større utvalg: Gir mer stabile resultater, men koster mer.\n\n(c) Replikasjonskrisen betyr ikke at vitenskap er upålitelig — tvert imot viser den vitenskapens selvkorrigerende natur. At forskningsmiljøet selv avdekker og adresserer problemene er et tegn på styrke, ikke svakhet. Enkeltfunn kan være usikre, men den samlede kunnskapsbasen — der funn er replikert av flere uavhengige grupper — er robust.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.3: Kvalitative forskningsmetoder
// ============================================================================

export const CHAPTER_TOF_2_1_3: TextbookChapter = {
  id: 'tof-2-1-3',
  courseId: 'tof-2',
  chapterNumber: '1.3',
  title: 'Kvalitative forskningsmetoder',
  description: 'Intervju, observasjon, casestudie og fenomenologi.',
  estimatedMinutes: 25,
  competenceGoals: [
    'anvende kvalitative metoder',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof2-1-3-intro',
      type: 'text',
      content: `## Kvalitative forskningsmetoder

Mens kvantitativ forskning handler om å måle og telle, handler **kvalitativ forskning** om å forstå og fortolke. Kvalitative metoder brukes når vi ønsker dypere innsikt i menneskers erfaringer, opplevelser, meninger og atferd — ting som er vanskelige å fange med tall alene.

I teknologi og forskningslære er kvalitative metoder viktige for å forstå brukerbehov, evaluere teknologiske løsninger i praksis, og utforske hvordan teknologi påvirker mennesker og samfunn. Når ingeniøren vil vite om en ny app er intuitiv å bruke, eller når forskeren vil forstå hvorfor pasienter slutter å bruke et hjelpemiddel, er kvalitative metoder ofte det beste verktøyet.

I dette kapittelet skal vi se på fire sentrale kvalitative metoder: **intervju**, **observasjon**, **casestudie** og **fenomenologisk tilnærming**. Vi skal også berøre **grounded theory** som en viktig analysetilnærming.`,
    },

    // --- BLOKK 1: Kvalitativ vs. kvantitativ ---
    {
      id: 'tof2-1-3-def-1',
      type: 'definition',
      title: 'Kvalitativ forskning',
      content: `**Kvalitativ forskning** er en forskningsmetode som fokuserer på å forstå fenomener gjennom dybdeutforskning av **meninger**, **erfaringer** og **kontekst**. Data samles inn i form av ord, bilder og observasjoner — ikke tall.

Kjennetegn ved kvalitativ forskning:
- **Induktiv:** Teorier og kategorier utvikles fra dataene, ikke testet på forhånd
- **Fleksibel:** Forskningsdesignet kan tilpasses underveis
- **Kontekstuell:** Fenomener studeres i sin naturlige sammenheng
- **Fortolkende:** Forskeren tolker dataenes betydning aktivt
- **Dybde over bredde:** Få enheter studeres grundig, fremfor mange overflatisk`,
    },
    {
      id: 'tof2-1-3-text-1',
      type: 'text',
      content: `### Når bruker vi kvalitative metoder?

Kvalitative metoder er særlig egnet når vi:

1. **Utforsker et nytt felt:** Når vi vet lite om et fenomen og trenger å forstå det fra bunnen av, er åpne kvalitative tilnærminger bedre enn forhåndsdefinerte spørreskjemaer.

2. **Vil forstå «hvorfor»:** Kvantitative metoder forteller oss *at* noe skjer og *hvor ofte*, men kvalitative metoder forklarer *hvorfor* det skjer og *hvordan* det oppleves.

3. **Studerer komplekse prosesser:** Menneskelig atferd er sjelden lineær. Kvalitative metoder kan fange nyanser og kompleksitet som tall overser.

4. **Evaluerer brukeropplevelser:** I teknologiutvikling er kvalitative metoder uunnværlige for å forstå hvordan mennesker faktisk bruker og opplever teknologi.

5. **Forskningsspørsmålet krever det:** Noen spørsmål — «Hvordan opplever sykepleierstudenter overgangen til klinisk praksis?» — kan bare besvares kvalitativt.

### Kvantitativ vs. kvalitativ — komplementære tilnærminger

Det er viktig å forstå at kvalitativ og kvantitativ forskning ikke er motsetninger, men **komplementære** tilnærminger. I **mixed methods**-forskning kombineres begge for å gi et mer fullstendig bilde. For eksempel kan en forsker starte med kvalitative intervjuer for å utvikle et spørreskjema, og deretter gjennomføre en kvantitativ studie med spørreskjemaet.`,
    },
    {
      id: 'tof2-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof2-1-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken situasjon egner seg best for en kvalitativ tilnærming?',
        options: [
          { id: 'a', text: 'Måle hvor mange elever som bruker et digitalt verktøy daglig', isCorrect: false },
          { id: 'b', text: 'Forstå hvordan elever opplever overgangen til et nytt læringsverktøy', isCorrect: true },
          { id: 'c', text: 'Sammenligne gjennomsnittlig testskår mellom to undervisningsgrupper', isCorrect: false },
          { id: 'd', text: 'Beregne korrelasjonen mellom skjermtid og søvnkvalitet', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Å forstå hvordan elever *opplever* noe er et typisk kvalitativt spørsmål som krever dybde og kontekstforståelse. De andre alternativene (A, C, D) handler om å måle, telle eller beregne — typisk kvantitative tilnærminger.',
      },
    },

    // --- BLOKK 2: Intervju og observasjon ---
    {
      id: 'tof2-1-3-text-2',
      type: 'text',
      content: `### Intervju som forskningsmetode

**Forskningsintervjuet** er den mest brukte kvalitative metoden. Det er en strukturert samtale der forskeren systematisk utforsker informantens erfaringer, meninger og forståelse av et emne.

Vi skiller mellom tre typer intervju basert på grad av struktur:

**Strukturert intervju:** Alle spørsmål er forhåndsdefinert og stilles i fast rekkefølge. Gir sammenlignbare data, men lite rom for å følge opp uventede temaer.

**Semi-strukturert intervju:** Forskeren har en **intervjuguide** med hovedtemaer og nøkkelspørsmål, men kan stille oppfølgingsspørsmål og justere rekkefølgen. Det mest brukte formatet i kvalitativ forskning.

**Ustrukturert intervju:** Samtalen er fri, med kun et overordnet tema. Gir stor dybde, men er vanskelig å analysere og sammenligne.

### Gode intervjuteknikker

- **Åpne spørsmål:** «Kan du fortelle om din erfaring med...» gir rikere svar enn «Var det bra eller dårlig?»
- **Oppfølgingsspørsmål:** «Kan du si mer om det?», «Hva mente du med det?»
- **Prober:** «Mm-hm», «Interessant» — signaler om at du lytter og vil høre mer
- **Unngå ledende spørsmål:** «Synes du ikke at...» legger svaret i munnen på informanten
- **Taushet:** Gi informanten tid til å tenke — ikke fyll alle pauser

### Observasjon som forskningsmetode

**Systematisk observasjon** innebærer at forskeren studerer fenomener i deres naturlige sammenheng. Forskeren kan ha ulike roller:

**Fullstendig observatør:** Forskeren observerer uten å delta. Eksempel: Observere elever i en datalab gjennom et enveisvindu.

**Observerende deltaker:** Forskeren er til stede og deltakerne vet det, men forskeren deltar ikke aktivt. Eksempel: Forskeren sitter i klasserommet og noterer.

**Deltakende observatør:** Forskeren deltar i aktiviteten som studeres. Eksempel: Forskeren jobber som frivillig på et teknologilaboratorium og observerer samtidig.

**Fullstendig deltaker:** Forskeren er fullverdig deltaker uten at de andre vet at det forskes. Reiser etiske spørsmål om informert samtykke.`,
    },
    {
      id: 'tof2-1-3-example-1',
      type: 'example',
      title: 'Eksempel: Utforme en intervjuguide',
      problem: 'En forsker ønsker å forstå hvordan videregående elever bruker kunstig intelligens (KI) som hjelpemiddel i skolearbeid. Utform tre hovedtemaer for en semi-strukturert intervjuguide, med to eksempelspørsmål for hvert tema.',
      solution: `**Tema 1: Bruksmønster og erfaringer**
- «Kan du beskrive en typisk situasjon der du bruker KI-verktøy i skolearbeidet?»
- «Hvilke KI-verktøy bruker du, og hva bruker du dem til?»

**Tema 2: Nytte og utfordringer**
- «Hvordan opplever du at KI-verktøy påvirker din egen læring?»
- «Har du opplevd situasjoner der KI-verktøy ikke fungerte som forventet? Kan du fortelle om det?»

**Tema 3: Etikk og selvrefleksjon**
- «Hvor går grensen for deg mellom å bruke KI som hjelpemiddel og å «jukse»?»
- «Hva tenker du om at mange mener KI truer selvstendig tenkning?»

Guiden er fleksibel: forskeren kan omformulere spørsmål, stille oppfølgingsspørsmål, og hoppe over temaer som allerede er dekket. Det viktigste er at alle hovedtemaene berøres.`,
    },
    {
      id: 'tof2-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof2-1-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvilken type intervju er mest brukt i kvalitativ forskning, og hvorfor?',
        options: [
          { id: 'a', text: 'Strukturert intervju, fordi det gir sammenlignbare data', isCorrect: false },
          { id: 'b', text: 'Semi-strukturert intervju, fordi det kombinerer struktur med fleksibilitet', isCorrect: true },
          { id: 'c', text: 'Ustrukturert intervju, fordi det gir mest mulig dybde', isCorrect: false },
          { id: 'd', text: 'Fokusgruppe, fordi gruppeinteraksjon gir rikere data', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Det semi-strukturerte intervjuet er mest brukt i kvalitativ forskning fordi det gir en god balanse: intervjuguiden sikrer at viktige temaer dekkes (struktur), mens oppfølgingsspørsmål og fleksibel rekkefølge gir rom for dybde og uventede innsikter (fleksibilitet).',
      },
    },

    // --- BLOKK 3: Casestudie, fenomenologi og grounded theory ---
    {
      id: 'tof2-1-3-text-3',
      type: 'text',
      content: `### Casestudie

En **casestudie** er en dyptgående undersøkelse av et enkelt tilfelle — en person, en organisasjon, en hendelse eller et prosjekt. Casestudier bruker ofte **flere datakilder** (intervjuer, observasjoner, dokumenter, arkivdata) for å bygge en helhetlig forståelse.

Fordeler med casestudier:
- Gir svært rik og detaljert innsikt i ett fenomen
- Kan studere fenomener som er sjeldne eller unike
- Kombinerer naturlig flere metoder (triangulering)

Begrensninger:
- Vanskelig å generalisere til andre tilfeller
- Risiko for at forskeren ser det de forventer å se (bekreftelsesskjevhet)
- Tidkrevende å gjennomføre grundig

Casestudier er svært relevante i teknologiforskning. For eksempel kan en casestudie undersøke hvordan én skole implementerte et nytt digitalt læringssystem, med data fra intervjuer med lærere, observasjon av undervisning, og analyse av elevresultater.

### Fenomenologi

**Fenomenologisk forskning** har som mål å forstå den **levde erfaringen** til individer som deler et bestemt fenomen. Fenomenologen spør: «Hvordan oppleves dette fenomenet fra innsiden?»

Metoden ble utviklet av filosofen Edmund Husserl og videreutviklet av forskere som Max van Manen. Sentralt er begrepet **epoché** — å sette egne antakelser og forforståelse i parentes for å la fenomenet tre frem slik informanten opplever det.

Eksempel: En fenomenologisk studie kan undersøke hvordan det oppleves å leve med en kronisk sykdom og bruke teknologiske hjelpemidler daglig. Forskeren intervjuer 8–15 personer som deler denne erfaringen, og analyserer intervjuene for å identifisere **essensielle strukturer** — det som er felles for alle informantenes opplevelser.

### Grounded theory

**Grounded theory** er både en metode og en tilnærming til analyse. Målet er å utvikle **ny teori** direkte fra dataene, i stedet for å teste eksisterende teori. Prosessen er iterativ:

1. **Åpen koding:** Data brytes ned i begreper og kategorier
2. **Aksial koding:** Sammenhenger mellom kategoriene utforskes
3. **Selektiv koding:** En kjernekategori identifiseres som binder alt sammen
4. **Teoretisk metning:** Datainnsamling fortsetter til nye data ikke gir nye innsikter

Grounded theory er spesielt nyttig når det finnes lite eksisterende teori om et fenomen, for eksempel når ny teknologi skaper helt nye sosiale praksiser.`,
    },
    {
      id: 'tof2-1-3-example-2',
      type: 'example',
      title: 'Eksempel: Velge kvalitativ metode',
      problem: 'Tre forskere studerer bruk av 3D-printing i skolen. Forsker A vil forstå hvordan det oppleves for elever å bruke 3D-printing for første gang. Forsker B vil kartlegge hvordan én spesifikk skole har integrert 3D-printing i undervisningen. Forsker C vil utvikle en ny modell for hvordan lærere adopterer ny teknologi. Hvilken kvalitativ metode egner seg best for hver forsker?',
      solution: `**Forsker A — Fenomenologi:**
Forskningsspørsmålet handler om den *levde erfaringen* av å bruke 3D-printing for første gang. Fenomenologi er designet for å forstå hvordan et fenomen oppleves fra innsiden. Forskeren vil intervjue 10–15 elever og analysere opplevelsenes essensielle strukturer.

**Forsker B — Casestudie:**
Forskeren studerer ett spesifikt tilfelle (én skole) i dybden og ønsker en helhetlig forståelse av implementeringsprosessen. En casestudie tillater bruk av flere datakilder: intervjuer med lærere, observasjon av undervisning, analyse av skolens planer og evaluering av elevarbeider.

**Forsker C — Grounded theory:**
Forskeren ønsker å *utvikle en ny modell/teori* basert på data. Grounded theory er designet for teoriutvikling fra data. Forskeren vil intervjue mange lærere, kode dataene, og gradvis bygge en teori om teknologiadopsjon gjennom iterativ analyse.`,
    },
    {
      id: 'tof2-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof2-1-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du skal gjennomføre en kvalitativ studie om hvordan VG3-elever bruker kunstig intelligens i prosjektarbeid. Velg én kvalitativ metode (intervju, observasjon, casestudie eller fenomenologi), begrunn valget, og beskriv kort hvordan du ville gjennomført studien.',
        hints: ['Tenk på hva du egentlig vil vite: Er det opplevelsen? Prosessen? Bruken i kontekst? Velg metode som passer til spørsmålet.'],
        solution: 'Eksempelsvar med semi-strukturert intervju:\n\nJeg ville brukt semi-strukturert intervju fordi jeg ønsker å forstå elevenes egne erfaringer og refleksjoner rundt KI-bruk — noe som krever dybde og mulighet for oppfølgingsspørsmål.\n\nGjennomføring:\n1. Utvikle en intervjuguide med 4–5 hovedtemaer (bruksmønster, nytte, utfordringer, etikk, læring)\n2. Rekruttere 10–15 VG3-elever som har brukt KI i prosjektarbeid\n3. Gjennomføre individuelle intervjuer (ca. 45 min) med lydopptak\n4. Transkribere intervjuene\n5. Analysere med tematisk analyse: identifisere koder, kategorier og overordnede temaer\n6. Presentere funn med sitater som illustrerer temaene\n\nEtiske hensyn: Informert samtykke, anonymisering, frivillig deltakelse, godkjenning fra skolen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof2-1-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Kvalitativ forskning** fokuserer på å forstå meninger, erfaringer og kontekst gjennom dybdeutforskning. Den er induktiv, fleksibel og fortolkende.
- **Intervju** er den mest brukte kvalitative metoden. Det semi-strukturerte intervjuet kombinerer struktur med fleksibilitet og er standarden i kvalitativ forskning.
- **Observasjon** studerer fenomener i naturlig kontekst. Forskerens rolle varierer fra fullstendig observatør til fullstendig deltaker.
- **Casestudie** gir dyptgående innsikt i ett enkelt tilfelle gjennom bruk av flere datakilder.
- **Fenomenologi** utforsker den levde erfaringen av et fenomen og søker etter opplevelsers essensielle strukturer.
- **Grounded theory** utvikler ny teori direkte fra data gjennom iterativ koding og analyse.
- Kvalitativ og kvantitativ forskning er **komplementære** — de besvarer ulike typer spørsmål og kan kombineres i mixed methods-design.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof2-1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof2-1-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom en casestudie og en fenomenologisk studie. Bruk et konkret eksempel fra teknologifeltet for å illustrere forskjellen: ta utgangspunkt i temaet «innføring av VR-briller i naturfagundervisning» og vis hvordan de to tilnærmingene ville gitt ulike forskningsspørsmål, datainnsamling og resultater.',
        hints: ['Casestudie = ett tilfelle i dybden med mange datakilder. Fenomenologi = den levde opplevelsen av et fenomen.'],
        solution: 'Casestudie: «Hvordan har Bergset videregående skole implementert VR-briller i naturfag?»\n- Datainnsamling: Intervjuer med lærere og rektor, observasjon av undervisning med VR, analyse av skolens planer og budsjett, elevresultater før og etter, teknisk dokumentasjon.\n- Resultat: En helhetlig beskrivelse av implementeringsprosessen — beslutning, innkjøp, opplæring, praktisk bruk, utfordringer og suksessfaktorer ved denne spesifikke skolen.\n\nFenomenologi: «Hvordan opplever elever å lære naturfag gjennom VR-briller?»\n- Datainnsamling: Dybdeintervjuer med 12 elever som har brukt VR i naturfag. Fokus på den subjektive opplevelsen: følelser, engasjement, forståelse, kroppslige erfaringer.\n- Resultat: En beskrivelse av opplevelsens essensielle strukturer — for eksempel at elevene opplever «å bli dratt inn i» materien, en følelse av undring, men også svimmelhet og distrahering.\n\nHovedforskjell: Casestudien studerer implementeringsprosessen helhetlig (systemet), fenomenologien studerer den individuelle opplevelsen (personen).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof2-1-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof2-1-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft styrker og svakheter ved kvalitativ forskning sammenlignet med kvantitativ forskning. Diskuter minst to styrker og to svakheter, og vurder til slutt: Når ville du anbefalt en mixed methods-tilnærming — altså en kombinasjon av kvalitative og kvantitative metoder? Gi et konkret eksempel.',
        hints: ['Tenk på generaliserbarhet, dybde, objektivitet, subjektivitet, og komplementaritet.'],
        solution: 'Styrker ved kvalitativ forskning:\n1. Dybde og kontekst: Kvalitative metoder gir rik, nyansert forståelse av fenomener som tall ikke fanger — f.eks. hvorfor brukere forlater en app.\n2. Fleksibilitet: Designet kan tilpasses underveis. Uventede funn kan utforskes videre.\n\nSvakheter ved kvalitativ forskning:\n1. Generaliserbarhet: Funn fra 15 intervjuer kan ikke uten videre overføres til hele populasjonen.\n2. Subjektivitet: Forskerens fortolkning påvirker resultatene. To forskere kan komme til ulike konklusjoner fra samme data.\n\nMixed methods egner seg når:\n- Man trenger både bredde og dybde\n- Kvantitative funn trenger forklaring\n- Kvalitative funn trenger verifisering i større skala\n\nKonkret eksempel: En studie om digital mobbing. Fase 1 (kvalitativ): Intervjuer med 15 ungdommer for å forstå deres opplevelser og utvikle relevante spørsmål. Fase 2 (kvantitativ): Spørreskjema basert på intervjufunnene sendes til 2000 elever for å kartlegge omfang og mønstre. Fase 3 (kvalitativ): Oppfølgingsintervjuer for å forstå de mest overraskende kvantitative funnene bedre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.4: Reliabilitet, validitet og feilkilder
// ============================================================================

export const CHAPTER_TOF_2_1_4: TextbookChapter = {
  id: 'tof-2-1-4',
  courseId: 'tof-2',
  chapterNumber: '1.4',
  title: 'Reliabilitet, validitet og feilkilder',
  description: 'Systematiske og tilfeldige feil, konfunderende variabler.',
  estimatedMinutes: 25,
  competenceGoals: [
    'vurdere forskningskvalitet',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof2-1-4-intro',
      type: 'text',
      content: `## Reliabilitet, validitet og feilkilder

Uansett hvor godt et forskningsprosjekt er planlagt, vil det alltid inneholde en viss grad av usikkerhet. Spørsmålet er ikke *om* det finnes feilkilder, men *hvilke* feilkilder som er til stede, og *hvor mye* de påvirker resultatene.

To nøkkelbegreper hjelper oss med å vurdere kvaliteten på forskning: **reliabilitet** (pålitelighet) og **validitet** (gyldighet). Disse begrepene er ikke bare viktige i forskning — de er avgjørende for all kunnskapsproduksjon, fra laboratorieeksperimenter til spørreundersøkelser, fra kvalitative intervjuer til teknologiske målinger.

I dette kapittelet skal vi forstå hva reliabilitet og validitet betyr, lære å skille mellom systematiske og tilfeldige feil, og bli kjent med konfunderende variabler — den «usynlige fienden» i forskningsdesign.`,
    },

    // --- BLOKK 1: Reliabilitet ---
    {
      id: 'tof2-1-4-def-1',
      type: 'definition',
      title: 'Reliabilitet',
      content: `**Reliabilitet** (pålitelighet) handler om i hvilken grad målinger gir **konsistente og stabile resultater** når de gjentas under like betingelser.

En måling er reliabel dersom:
- Gjentatte målinger av det samme gir **tilnærmet like resultater** (test-retest-reliabilitet)
- Ulike observatører gir **like vurderinger** av det samme fenomenet (inter-rater-reliabilitet)
- Ulike deler av et måleinstrument måler **det samme** (intern konsistens)

Analogi: Tenk på en badevekt. Hvis den viser 72 kg hver gang du stiller deg på den (under like forhold), er den reliabel. Hvis den viser 72, 68, 75 og 69 kg på fire påfølgende målinger, er den ikke reliabel — selv om gjennomsnittet kanskje er riktig.`,
    },
    {
      id: 'tof2-1-4-text-1',
      type: 'text',
      content: `### Typer reliabilitet

**Test-retest-reliabilitet:** Samme test gis til de samme personene på to ulike tidspunkter. Høy korrelasjon mellom resultatene indikerer god reliabilitet. Eksempel: En konsentrasjonstest gis til 50 elever på mandag og igjen på onsdag. Hvis elevene scorer omtrent likt begge ganger, har testen god test-retest-reliabilitet.

**Inter-rater-reliabilitet:** To eller flere uavhengige bedømmere vurderer det samme materialet. Høy enighet mellom bedømmerne indikerer god reliabilitet. Eksempel: To lærere retter samme sett med essay. Hvis de gir omtrent like karakterer, er vurderingen reliabel.

**Intern konsistens:** Ulike spørsmål i et spørreskjema som måler samme begrep bør gi samsvarende svar. Måles ofte med **Cronbachs alfa** — en verdi mellom 0 og 1, der verdier over 0,7 regnes som akseptable.

### Hva truer reliabiliteten?

- **Tilfeldige feil** i måleinstrumenter (f.eks. elektronisk støy i en sensor)
- **Variasjoner i betingelser** (temperaturendringer, ulik tid på døgnet)
- **Tretthet eller motivasjonsendringer** hos deltakerne
- **Uklare instruksjoner** som tolkes ulikt
- **For få målinger** til å jevne ut tilfeldig variasjon`,
    },
    {
      id: 'tof2-1-4-example-1',
      type: 'example',
      title: 'Eksempel: Reliabilitet i et fysikkforsøk',
      problem: 'En elev måler akselerasjonen til en trille på et skråplan. Hun gjør 5 målinger og får verdiene: 2,3 m/s², 2,5 m/s², 2,4 m/s², 2,3 m/s² og 2,4 m/s². Er målingene reliable? Hva om verdiene i stedet var 2,3, 3,1, 1,8, 2,9 og 2,0 m/s²?',
      solution: `**Første datasett:** 2,3 — 2,5 — 2,4 — 2,3 — 2,4 m/s²
- Gjennomsnitt: 2,38 m/s²
- Spredning: Alle verdier ligger mellom 2,3 og 2,5 (svært liten variasjon)
- **Vurdering:** God reliabilitet. Målingene er konsistente og stabile.

**Andre datasett:** 2,3 — 3,1 — 1,8 — 2,9 — 2,0 m/s²
- Gjennomsnitt: 2,42 m/s²
- Spredning: Verdiene spriker fra 1,8 til 3,1 (stor variasjon)
- **Vurdering:** Dårlig reliabilitet. Selv om gjennomsnittet er nesten likt, er målingene inkonsistente.

Merk: Begge datasettene gir omtrent samme gjennomsnitt (~2,4), men vi kan stole mye mer på det første. Reliabilitet handler om *spredningen*, ikke gjennomsnittet.

Eleven bør undersøke årsaken til den store spredningen i det andre datasettet: kanskje trilla ble plassert ulikt, kanskje tidtakingen var upresis, eller kanskje underlaget var ujevnt.`,
    },
    {
      id: 'tof2-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof2-1-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'En forsker utvikler et spørreskjema for å måle «teknologiangst» hos eldre. Hva er den mest relevante formen for reliabilitet å teste først?',
        options: [
          { id: 'a', text: 'Test-retest-reliabilitet — gi skjemaet to ganger med en ukes mellomrom', isCorrect: false },
          { id: 'b', text: 'Inter-rater-reliabilitet — la to forskere vurdere svarene', isCorrect: false },
          { id: 'c', text: 'Intern konsistens — sjekk at spørsmålene måler samme begrep (Cronbachs alfa)', isCorrect: true },
          { id: 'd', text: 'Parallelltest-reliabilitet — lag to versjoner av skjemaet og sammenlign', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Når man utvikler et nytt spørreskjema, er det viktigste å sjekke intern konsistens — at de ulike spørsmålene faktisk måler det samme underliggende begrepet (teknologiangst). Cronbachs alfa er standardmålet for dette. Test-retest (A) er også relevant, men bør komme etter at intern konsistens er bekreftet.',
      },
    },

    // --- BLOKK 2: Validitet ---
    {
      id: 'tof2-1-4-def-2',
      type: 'definition',
      title: 'Validitet',
      content: `**Validitet** (gyldighet) handler om i hvilken grad vi faktisk **måler det vi tror vi måler**, og om vi kan trekke de **konklusjonene** vi ønsker fra resultatene.

Mens reliabilitet handler om konsistens (presisjon), handler validitet om nøyaktighet (riktighet). En måling kan være reliabel uten å være valid — som en vekt som konsekvent viser 3 kg for mye. Den er pålitelig (samme tall hver gang), men ikke gyldig (viser feil vekt).

Hovedtyper validitet:
- **Begrepsvaliditet:** Måler instrumentet det teoretiske begrepet vi ønsker å måle?
- **Intern validitet:** Kan vi slutte at X *forårsaker* Y, eller finnes det alternative forklaringer?
- **Ekstern validitet:** Kan resultatene generaliseres til andre grupper, situasjoner og tidspunkter?
- **Statistisk konklusjonsvaliditet:** Er de statistiske slutningene korrekte?`,
    },
    {
      id: 'tof2-1-4-text-2',
      type: 'text',
      content: `### Validitetstyper i detalj

**Begrepsvaliditet** (construct validity) spør om måleinstrumentet faktisk fanger det teoretiske begrepet. Eksempel: Hvis vi vil måle «kreativitet», men spørreskjemaet vårt egentlig måler «evne til å følge instruksjoner», har vi dårlig begrepsvaliditet.

Begrepsvaliditet styrkes gjennom:
- **Konvergent validitet:** Vårt mål korrelerer med andre etablerte mål på samme begrep
- **Diskriminant validitet:** Vårt mål korrelerer *ikke* med mål på andre begreper

**Intern validitet** er avgjørende for kausalforskning og spør: «Er det virkelig den uavhengige variabelen som forårsaker endringen i den avhengige variabelen?» Trusler mot intern validitet inkluderer:
- **Konfunderende variabler** (omtales under)
- **Modning:** Deltakerne endrer seg over tid uavhengig av behandling
- **Testing-effekt:** Å ta en test første gang påvirker resultatet andre gang
- **Instrumentendring:** Måleinstrumentet endres eller kalibreres annerledes over tid
- **Frafall:** Systematisk frafall av deltakere kan skjeve gruppene

**Ekstern validitet** handler om generaliserbarhet. Et eksperiment med universitetsstudenter kan ha sterk intern validitet, men svak ekstern validitet dersom resultatene ikke gjelder for andre aldersgrupper. Ekstern validitet styrkes gjennom representative utvalg, konseptuell replikasjon og forskning i naturlige settinger.

### Forholdet mellom reliabilitet og validitet

Et viktig prinsipp: **Reliabilitet er en nødvendig, men ikke tilstrekkelig betingelse for validitet.**

- En måling som **ikke** er reliabel kan **aldri** være valid (kaotiske målinger kan ikke treffe riktig)
- En måling som **er** reliabel kan likevel være **invalid** (systematisk feil — presise, men gale)
- Målet er å oppnå **både** høy reliabilitet og høy validitet`,
    },
    {
      id: 'tof2-1-4-example-2',
      type: 'example',
      title: 'Eksempel: Reliabilitet vs. validitet',
      problem: 'En forsker vil måle intelligens hos barn. Hun bruker hodestørrelse (hodeomkrets) som mål. Målingene er svært reliable — samme barn måles til 52,3 cm gang etter gang. Er målingen valid?',
      solution: `**Reliabilitet:** Ja, målingen er reliabel. Gjentatte målinger av hodestørrelse gir konsistente resultater (52,3 cm ± noen millimeter). Måleinstrumentet (målebånd) er presist og konsistent.

**Validitet:** Nei, målingen er ikke valid. Hodestørrelse er et svært dårlig mål på intelligens. Selv om det finnes en svak korrelasjon mellom hjernesstørrelse og visse kognitive mål, er hodestørrelse påvirket av mange andre faktorer (genetikk, kroppsstørrelse, alder) og fanger ikke det komplekse begrepet «intelligens».

**Konklusjon:** Dette illustrerer at reliabilitet er nødvendig, men ikke tilstrekkelig for validitet. Målingen er presis og konsistent (reliabel), men måler noe annet enn det vi ønsker (ikke valid). Et valid mål på intelligens ville kreve standardiserte kognitive tester som faktisk måler resonneringsevne, problemløsning og lignende.`,
    },
    {
      id: 'tof2-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof2-1-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er forholdet mellom reliabilitet og validitet?',
        options: [
          { id: 'a', text: 'Høy reliabilitet garanterer høy validitet', isCorrect: false },
          { id: 'b', text: 'Høy validitet krever høy reliabilitet, men ikke omvendt', isCorrect: true },
          { id: 'c', text: 'Reliabilitet og validitet er uavhengige av hverandre', isCorrect: false },
          { id: 'd', text: 'Høy validitet garanterer høy reliabilitet, men ikke omvendt', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Reliabilitet er en nødvendig, men ikke tilstrekkelig betingelse for validitet. En måling må være konsistent (reliabel) for å kunne være nøyaktig (valid), men konsistens alene sikrer ikke nøyaktighet. Man kan konsekvent måle feil ting (reliabel, men ikke valid).',
      },
    },

    // --- BLOKK 3: Feilkilder og konfunderende variabler ---
    {
      id: 'tof2-1-4-text-3',
      type: 'text',
      content: `### Systematiske og tilfeldige feil

Alle målinger inneholder feil. Vi skiller mellom to hovedtyper:

**Tilfeldige feil** (random errors) varierer tilfeldig fra måling til måling og kan gå i begge retninger. Eksempler: naturlig variasjon i reaksjonstid, elektronisk støy i sensorer, ulike avlesningsvinkler. Tilfeldige feil reduserer **reliabiliteten** og kan minskes ved å ta mange målinger og beregne gjennomsnitt.

**Systematiske feil** (systematic errors/bias) går konsekvent i **samme retning** og påvirker **validiteten**. Eksempler: en klokke som går 5 sekunder for fort, et spørreskjema med ledende spørsmål, en temperaturmåler som konsekvent viser 2 °C for mye. Systematiske feil kan **ikke** elimineres ved å ta flere målinger — de finnes i gjennomsnittet også.

| Egenskap | Tilfeldige feil | Systematiske feil |
|---|---|---|
| Retning | Tilfeldig (begge veier) | Konsekvent (én retning) |
| Effekt | Reduserer reliabilitet | Reduserer validitet |
| Løsning | Flere målinger, gjennomsnitt | Kalibrering, bedre design |
| Synlighet | Synes i spredningen | Skjult i gjennomsnittet |

### Konfunderende variabler

En **konfunderende variabel** (confounder) er en «tredjepartsvariabel» som påvirker *både* den uavhengige og den avhengige variabelen, og som dermed kan skape en **falsk sammenheng** eller skjule en ekte sammenheng mellom dem.

Konfunderende variabler er den største trusselen mot **intern validitet**. For å kontrollere for dem kan vi:

1. **Randomisering:** Fordeler alle konfunderende variabler (kjente og ukjente) tilfeldig mellom gruppene
2. **Matching:** Parer deltakere med like egenskaper i eksperiment- og kontrollgruppe
3. **Statistisk kontroll:** Inkluder konfunderen i regresjonsanalysen
4. **Blokkdesign:** Stratifiser utvalget etter konfunderen og analyser innenfor hvert stratum
5. **Holde konstant:** Hold konfunderen lik for alle grupper (f.eks. kun teste jenter)`,
    },
    {
      id: 'tof2-1-4-warning-1',
      type: 'warning',
      title: 'Skjulte konfunderende variabler',
      content: `Det mest problematiske med konfunderende variabler er at vi kanskje ikke vet at de eksisterer. En studie kan finne en sterk sammenheng mellom to variabler, men den egentlige årsaken kan være en tredje variabel forskeren aldri har tenkt på.

Eksempel: En studie finner at barn som spiser frokost, presterer bedre på skolen. Men kanskje er den egentlige konfunderen familiestabilitet — familier som spiser frokost sammen har kanskje også mer struktur, mer søvn og mer foreldreinvolvering. Bare et ekte eksperiment med randomisering kan kontrollere for *alle* konfunderende variabler, inkludert de ukjente.`,
    },
    {
      id: 'tof2-1-4-example-3',
      type: 'example',
      title: 'Eksempel: Identifisere feilkilder',
      problem: 'En elev undersøker om romtemperatur påvirker reaksjonstid. Hun tester 10 medelever om morgenen i et kaldt rom (18 °C) og de samme 10 om ettermiddagen i et varmt rom (25 °C). Reaksjonstiden er i gjennomsnitt 15 ms raskere om morgenen. Hun konkluderer med at kalde rom gir raskere reaksjonstid. Identifiser minst tre feilkilder.',
      solution: `**Feilkilde 1: Konfunderende variabel — tid på døgnet**
Målingene i kaldt rom ble gjort om morgenen, og i varmt rom om ettermiddagen. Forskjellen i reaksjonstid kan skyldes at elevene er mer opplagte om morgenen og mer trøtte etter en lang dag. Tid på døgnet og romtemperatur er **konfundert** — de varierer sammen.

**Feilkilde 2: Testing-effekt (øvingseffekt)**
Alle deltakerne ble testet to ganger — først om morgenen, deretter om ettermiddagen. Den andre målingen kan være påvirket av øving: deltakerne har lært oppgaven. Eller omvendt: de kan ha blitt lei og gjort mindre innsats.

**Feilkilde 3: Lite utvalg**
Kun 10 deltakere gir stor usikkerhet. Med så få personer kan tilfeldige variasjoner gi store utslag, og en forskjell på 15 ms er kanskje ikke statistisk signifikant.

**Bedre design:** Bruk randomisert rekkefølge (halvparten starter i kaldt rom, halvparten i varmt), test på samme tid på døgnet, bruk et større utvalg, og inkluder en hvilepause mellom målingene.`,
    },
    {
      id: 'tof2-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof2-1-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'En ny studie viser at elever som bruker digitale notatverktøy scorer 8 % høyere på prøver enn elever som bruker penn og papir. Studien er en tverrsnittstudie med 200 deltakere. Diskuter minst to konfunderende variabler som kan forklare denne sammenhengen, og foreslå et bedre forskningsdesign.',
        hints: ['Tenk på hva slags elever som velger digitale verktøy vs. penn og papir. Finnes det systematiske forskjeller mellom disse gruppene?'],
        solution: 'Konfunderende variabel 1: Sosioøkonomisk bakgrunn — elever med digitale verktøy kan komme fra familier med høyere inntekt, som også gir bedre studiebetingelser, mer tilgang til læringsressurser og høyere foreldreforventninger.\n\nKonfunderende variabel 2: Studiemotivasjon — elever som investerer tid i å lære digitale notatverktøy kan generelt være mer motiverte og engasjerte i skolearbeid, noe som i seg selv forklarer bedre resultater.\n\nAndre mulige konfundere: alder, fag, skole, tidligere prestasjoner.\n\nBedre design: Et randomisert kontrollert eksperiment der 200 elever tilfeldig fordeles til å bruke digitale notatverktøy eller penn/papir i ett semester, mens alle andre forhold holdes like (samme fag, lærer, pensum). Prøveresultater sammenlignes. Randomiseringen sikrer at motivasjon, bakgrunn osv. fordeles likt mellom gruppene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof2-1-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Reliabilitet** handler om konsistens og pålitelighet i målinger. Typer: test-retest, inter-rater og intern konsistens.
- **Validitet** handler om gyldighet — at vi måler det vi tror vi måler. Typer: begreps-, intern, ekstern og statistisk konklusjonsvaliditet.
- Reliabilitet er en **nødvendig, men ikke tilstrekkelig** betingelse for validitet.
- **Tilfeldige feil** varierer i begge retninger og reduserer reliabiliteten. Løsning: ta flere målinger.
- **Systematiske feil** (bias) går i samme retning og reduserer validiteten. Løsning: kalibrering og bedre design.
- **Konfunderende variabler** er tredjepartsvariabler som truer intern validitet ved å skape falske sammenhenger.
- Kontroll for konfunderende variabler oppnås gjennom randomisering, matching, statistisk kontroll og god forsøksplanlegging.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof2-1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof2-1-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En gruppe elever har bygget en vindmølle og vil måle effekten (watt) ved ulike vindhastigheter. De bruker en digital effektmåler og en vindmåler. Beskriv: (a) minst to mulige tilfeldige feilkilder og hvordan de kan reduseres, (b) minst én mulig systematisk feilkilde og hvordan den kan oppdages og korrigeres, og (c) hva det betyr for reliabiliteten og validiteten av resultatene.',
        hints: ['Tenk på instrumentene, omgivelsene og gjennomføringen. Hva varierer tilfeldig? Hva kan gi konsekvent feil?'],
        solution: '(a) Tilfeldige feilkilder:\n1. Vindstyrken svinger naturlig mellom målingene — selv med samme gjennomsnitt er det vindkast. Løsning: Mål over lengre perioder (f.eks. 5 minutter) og bruk gjennomsnitt. Gjenta hvert forsøk minst 3 ganger.\n2. Elektrisk støy i effektmåleren gir små variasjoner. Løsning: Bruk skjermet kabling, ta mange avlesninger, og beregn gjennomsnitt og standardavvik.\n\n(b) Systematisk feilkilde:\nVindmåleren kan vise systematisk for lav vindhastighet fordi den er plassert i le bak vindmøllen, ikke foran. Da registreres lavere vindhastighet enn det som faktisk treffer rotorbladene. Løsning: Kalibrere vindmåleren mot en referansemåler, og plassere den oppstrøms (foran) vindmøllen.\n\n(c) Reliabilitet og validitet:\n- Tilfeldige feil gir stor spredning i verdiene (lav reliabilitet), men gjennomsnittet kan likevel være riktig. Flere målinger øker reliabiliteten.\n- Den systematiske feilen i vindmålerplasseringen gjør at alle målingene undervurderer vindhastigheten. Reliabiliteten kan være god (konsistente avlesninger), men validiteten er svekket fordi den reelle sammenhengen mellom vindstyrke og effekt blir feilaktig fremstilt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof2-1-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof2-1-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Les følgende forskningssammendrag: «Vi undersøkte om bruk av sosiale medier påvirker søvnkvaliteten hos ungdom (N = 300). Deltakerne rapporterte sin daglige skjermtid og søvnkvalitet via spørreskjema. Vi fant en signifikant negativ korrelasjon (r = −0,42, p < 0,001): jo mer skjermtid, desto dårligere søvnkvalitet.» Vurder studiens reliabilitet, validitet og mulige feilkilder. Diskuter minst: (a) begrepsvaliditet, (b) intern validitet, (c) to konfunderende variabler, og (d) forslag til forbedring.',
        hints: ['Tenk på selvrapportering, kausal retning, og hva som ellers kan påvirke både skjermtid og søvn.'],
        solution: '(a) Begrepsvaliditet: Selvrapportert skjermtid er et problematisk mål. Folk underestimerer ofte sin egen skjermtid. Dessuten skiller ikke målet mellom ulike typer bruk (passiv scrolling vs. aktiv kommunikasjon) eller tidspunkt (kveld vs. dag). Søvnkvalitet via spørreskjema er subjektivt — objektive mål som aktigrafi ville styrket begrepsvaliditeten.\n\n(b) Intern validitet: Svak. Studien er en tverrsnittstudie med korrelasjonsdesign. Vi kan ikke si at skjermtid *forårsaker* dårlig søvn. Kausal retning er ukjent: kanskje sover ungdom dårlig av andre grunner og bruker sosiale medier fordi de ikke får sove.\n\n(c) Konfunderende variabler:\n1. Psykisk helse (angst/depresjon) — påvirker både økt skjermtid og redusert søvnkvalitet.\n2. Koffeininntak — ungdom som er mye på mobilen kan også drikke mer koffein, som i seg selv forstyrrer søvnen.\n\n(d) Forbedringer:\n- Bruke objektive mål: Skjermtidapper (faktisk registrert tid) og aktigrafi/søvnlogger for søvnkvalitet.\n- Gjennomføre en kohortstudie: Følge deltakerne over tid for å se om endring i skjermtid predikerer endring i søvnkvalitet.\n- Kontrollere statistisk for konfunderende variabler (psykisk helse, koffein, fysisk aktivitet) gjennom multivariat regresjonsanalyse.\n- Ideelt: Et eksperiment der deltakere randomiseres til ulik skjermtid om kvelden, med objektiv søvnmåling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.5: Forskningsetikk
// ============================================================================

export const CHAPTER_TOF_2_1_5: TextbookChapter = {
  id: 'tof-2-1-5',
  courseId: 'tof-2',
  chapterNumber: '1.5',
  title: 'Forskningsetikk',
  description: 'Etiske prinsipper, informert samtykke, personvern og vitenskapelig uredelighet.',
  estimatedMinutes: 25,
  competenceGoals: [
    'anvende forskningsetiske prinsipper',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof2-1-5-intro',
      type: 'text',
      content: `## Forskningsetikk

Forskning handler om å utvide menneskets kunnskap, men denne jakten på kunnskap kan aldri skje på bekostning av enkeltmenneskers rettigheter, verdighet eller velferd. **Forskningsetikk** er det settet av normer, prinsipper og regler som styrer hvordan forskning skal planlegges, gjennomføres og rapporteres på en moralsk forsvarlig måte.

Historien har vist oss hva som kan skje når forskning gjennomføres uten etiske rammer. Fra de grusomme eksperimentene i nazi-Tysklands konsentrasjonsleirer til Tuskegee-syfilisstudien i USA (1932–1972), der afroamerikanske menn med syfilis bevisst ble nektet behandling for at forskere kunne studere sykdomsforløpet — har brudd på forskningsetikken fått katastrofale konsekvenser.

Disse historiske overgrepene har ført til utviklingen av strenge etiske rammeverk som i dag gjelder all forskning. I dette kapittelet skal vi forstå de grunnleggende prinsippene, lære om informert samtykke og personvern, og bli kjent med hva vitenskapelig uredelighet innebærer.`,
    },

    // --- BLOKK 1: Grunnleggende prinsipper ---
    {
      id: 'tof2-1-5-def-1',
      type: 'definition',
      title: 'De tre grunnleggende forskningsetiske prinsippene',
      content: `Forskningsetikken bygger på tre overordnede prinsipper, formulert i **Belmont-rapporten** (1979):

**1. Respekt for personer (autonomi)**
Alle deltakere skal behandles som selvstendige individer med rett til å bestemme over egen deltakelse. Ingen skal tvinges eller manipuleres til å delta i forskning. Personer med redusert samtykkekompetanse (barn, kognitivt svekede) trenger ekstra beskyttelse.

**2. Velgjørenhet (nytte)**
Forskning skal tilstrebe å gjøre godt og minimere skade. Forskeren må veie den potensielle nytten av forskningen mot mulig risiko for deltakerne. Forskning som utsetter deltakere for urimelig risiko uten tilsvarende nytte, er uetisk.

**3. Rettferdighet**
Byrder og fordeler av forskning skal fordeles rettferdig. Sårbare grupper skal ikke utnyttes som forsøkspersoner bare fordi de er lettere tilgjengelige, og fordelene av forskningen bør komme alle til gode — ikke bare privilegerte grupper.`,
    },
    {
      id: 'tof2-1-5-text-1',
      type: 'text',
      content: `### Historisk bakgrunn: Fra Nürnberg til Helsinki

Moderne forskningsetikk har sine røtter i to grunnleggende dokumenter:

**Nürnberg-koden (1947)** ble formulert etter rettsoppgjøret mot nazi-leger som hadde gjennomført brutale eksperimenter på fanger. Koden slo fast ti prinsipper, der det viktigste er at **frivillig samtykke er absolutt nødvendig**. Forsøkspersonen skal ha tilstrekkelig informasjon og forståelse til å ta en opplyst beslutning, uten tvang.

**Helsinki-deklarasjonen (1964, revidert mange ganger)** er vedtatt av Verdens legeforening og gjelder medisinsk forskning med mennesker. Den utvider Nürnberg-koden og slår blant annet fast at:
- Hensynet til forsøkspersonen skal **alltid** gå foran vitenskapens og samfunnets interesser
- Forskning skal forhåndsgodkjennes av en uavhengig etisk komité
- Sårbare grupper trenger spesiell beskyttelse
- Negative resultater skal også publiseres

Disse dokumentene danner grunnlaget for all forskningsetisk regulering vi har i dag — også i Norge.`,
    },
    {
      id: 'tof2-1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof2-1-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilke tre grunnleggende prinsipper er formulert i Belmont-rapporten?',
        options: [
          { id: 'a', text: 'Pålitelighet, gyldighet og objektivitet', isCorrect: false },
          { id: 'b', text: 'Respekt for personer, velgjørenhet og rettferdighet', isCorrect: true },
          { id: 'c', text: 'Anonymitet, konfidensialitet og datasikkerhet', isCorrect: false },
          { id: 'd', text: 'Fabrikasjon, forfalskning og plagiat', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Belmont-rapporten (1979) formulerte tre grunnleggende prinsipper for forskningsetikk: (1) Respekt for personer — deltakernes autonomi og rett til selvbestemmelse, (2) Velgjørenhet — forskningen skal gjøre godt og minimere skade, og (3) Rettferdighet — byrder og fordeler av forskning skal fordeles rettferdig.',
      },
    },

    // --- BLOKK 2: Informert samtykke ---
    {
      id: 'tof2-1-5-def-2',
      type: 'definition',
      title: 'Informert samtykke',
      content: `**Informert samtykke** betyr at en forskningsdeltaker har fått tilstrekkelig informasjon om studien og frivillig har sagt ja til å delta. Et gyldig informert samtykke forutsetter:

- **Informasjon:** Deltakeren har fått forståelig informasjon om formål, metode, varighet, mulige risikoer og fordeler, og hva dataene skal brukes til.
- **Forståelse:** Deltakeren har faktisk forstått informasjonen (ikke bare lest den).
- **Frivillighet:** Beslutningen er tatt uten press, tvang eller utilbørlig påvirkning.
- **Kompetanse:** Deltakeren har evne til å gi samtykke (voksne med samtykkekompetanse).
- **Rett til å trekke seg:** Deltakeren kan når som helst trekke seg uten å oppgi grunn og uten negative konsekvenser.`,
    },
    {
      id: 'tof2-1-5-text-2',
      type: 'text',
      content: `### Når er informert samtykke nødvendig — og når kan det fravikes?

Informert samtykke er påkrevd i de aller fleste forskningsprosjekter som involverer mennesker. Men det finnes noen unntak:

**Unntak fra krav om samtykke:**
- **Registerdata:** Forskning på anonymiserte eller avidentifiserte data fra offentlige registre (f.eks. Folkeregisteret, Kreftregisteret) kan i noen tilfeller gjennomføres uten individuelt samtykke, etter godkjenning fra etisk komité.
- **Observasjon i offentlige rom:** Observasjon av atferd i åpne, offentlige situasjoner (f.eks. trafikkflyt, køatferd) krever normalt ikke samtykke.
- **Anonyme spørreskjemaer:** Dersom det er umulig å identifisere respondentene, kan samtykke anses som gitt ved at personen velger å svare.

**Spesielle hensyn:**
- **Barn og unge under 16 år:** Foreldre eller foresatte må samtykke, i tillegg til barnets egen tilslutning (assent).
- **Forskning i akuttsituasjoner:** Hvis deltakerne ikke kan gi samtykke (f.eks. bevisstløse pasienter), kreves forhåndsgodkjenning og etterfølgende samtykke.
- **Forskning med villedning (deception):** I noen psykologiske studier er det nødvendig å tilbakeholde informasjon for å unngå at deltakerne endrer atferd. Dette krever etisk godkjenning og **debriefing** etterpå.`,
    },
    {
      id: 'tof2-1-5-example-1',
      type: 'example',
      title: 'Eksempel: Informert samtykke i praksis',
      problem: 'En forsker vil undersøke stressnivået hos elever i VG3 under eksamensperioden. Studien innebærer at elevene fyller ut et spørreskjema og avgir en spyttprøve for kortisolmåling. Hva må det informerte samtykket inneholde?',
      solution: `Det informerte samtykket må inneholde:

**1. Formål:** «Vi undersøker sammenhengen mellom eksamensrelatert stress og kortisolnivå hos VG3-elever.»

**2. Hva deltakelse innebærer:** «Du fyller ut et kort spørreskjema (ca. 10 min) og avgir en spyttprøve (enkelt og smertefritt) tre ganger: før, under og etter eksamensperioden.»

**3. Risiko og ulempe:** «Deltakelse innebærer minimal risiko. Noen kan oppleve at spørsmålene om stress føles ubehagelige. Spyttprøven er ikke-invasiv.»

**4. Nytte:** «Studien vil bidra til kunnskap om eksamensstress og kan på sikt gi grunnlag for bedre støttetiltak.»

**5. Personvern:** «Alle data anonymiseres. Navneliste og data lagres adskilt. Kun forskerne har tilgang. Data slettes etter prosjektets slutt.»

**6. Frivillighet:** «Deltakelse er frivillig. Du kan trekke deg når som helst uten å oppgi grunn. Det får ingen konsekvenser for deg som elev.»

**7. Kontaktinformasjon:** Forskerens og veileders kontaktinformasjon, samt NSD/REK-referansenummer.

Siden noen deltakere kan være under 16 år, må foresatte også samtykke.`,
    },

    // --- BLOKK 3: Personvern og datasikkerhet ---
    {
      id: 'tof2-1-5-text-3',
      type: 'text',
      content: `### Personvern og datasikkerhet i forskning

Forskere som samler inn data om mennesker, må forholde seg til strenge regler for personvern. I Norge reguleres dette av **personopplysningsloven** og **EUs personvernforordning (GDPR)**.

**Personopplysninger** er enhver opplysning som kan knyttes til en enkeltperson — direkte (navn, fødselsnummer) eller indirekte (kombinasjon av alder, bosted, yrke). I forskning er det viktig å skille mellom:

**Anonymisering:** Alle koblingsmuligheter mellom data og person fjernes permanent. Anonymiserte data regnes ikke som personopplysninger og faller utenfor GDPR. Eksempel: Spørreskjemaer uten navneliste, der ingen kombinasjon av svar kan identifisere respondenten.

**Pseudonymisering:** Personopplysninger erstattes med en kode (f.eks. «Deltaker 47»), men en koblingsnøkkel gjør det mulig å koble data tilbake til personen. Pseudonymiserte data er fortsatt personopplysninger og krever full GDPR-beskyttelse. Eksempel: En forsker bruker koder, men har en låst liste som kobler koder til navn.

**NSD/SIKT:** I Norge må forskningsprosjekter som behandler personopplysninger meldes til **Sikt – Kunnskapssektorens tjenesteleverandør** (tidligere NSD). Sikt vurderer om prosjektet er i samsvar med personvernlovgivningen og gir råd om databehandling.

**Dataminimering:** Et sentralt GDPR-prinsipp er at man kun skal samle inn de personopplysningene som er **nødvendige** for formålet. Forskere skal ikke samle inn «ekstra» data «i tilfelle det blir nyttig».`,
    },
    {
      id: 'tof2-1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof2-1-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom anonymisering og pseudonymisering i forskning?',
        options: [
          { id: 'a', text: 'Anonymisering bruker koder som kan kobles tilbake til personen, mens pseudonymisering fjerner alle koblingsmuligheter permanent.', isCorrect: false },
          { id: 'b', text: 'Anonymisering fjerner alle koblingsmuligheter permanent, mens pseudonymisering bruker koder som kan kobles tilbake med en nøkkel.', isCorrect: true },
          { id: 'c', text: 'Det er ingen forskjell — begge begrepene betyr det samme.', isCorrect: false },
          { id: 'd', text: 'Anonymisering er ulovlig i forskning, mens pseudonymisering er påbudt av GDPR.', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Ved anonymisering fjernes alle koblingsmuligheter mellom data og person permanent — det er umulig å finne ut hvem dataene tilhører. Anonymiserte data regnes ikke som personopplysninger. Ved pseudonymisering erstattes identifiserende opplysninger med en kode, men det finnes en koblingsnøkkel som gjør det mulig å identifisere personen igjen. Pseudonymiserte data er fortsatt personopplysninger og omfattes av GDPR.',
      },
    },

    // --- BLOKK 4: Vitenskapelig uredelighet ---
    {
      id: 'tof2-1-5-def-3',
      type: 'definition',
      title: 'Vitenskapelig uredelighet (FFP)',
      content: `**Vitenskapelig uredelighet** er alvorlige brudd på god forskningspraksis. De tre hovedformene kalles ofte **FFP**:

**Fabrikasjon:** Å finne opp data som aldri er samlet inn. Forskeren dikter opp resultater uten å ha gjennomført eksperimentet eller studien. Eksempel: En forsker rapporterer resultater fra 500 spørreskjemaer som aldri ble sendt ut.

**Forfalskning:** Å manipulere data, utstyr eller prosesser, eller å utelate data selektivt, slik at resultatene ikke lenger representerer det som faktisk ble observert. Eksempel: En forsker fjerner datapunkter som ikke passer med hypotesen.

**Plagiat:** Å presentere andres arbeid, ideer, tekst eller data som sine egne uten tilstrekkelig kreditering. Dette gjelder også selvplagiat — å gjenbruke egne tidligere publiserte tekster uten å opplyse om det.

Alle tre former for uredelighet er brudd på forskningens tillit og kan få alvorlige konsekvenser: tilbaketrekking av publikasjoner, tap av stilling, utestengelse fra forskningsmiljøer og strafferettslige sanksjoner.`,
    },
    {
      id: 'tof2-1-5-text-4',
      type: 'text',
      content: `### Gråsoner i forskningsetikk

Mellom god praksis og klar uredelighet finnes et grått område av **tvilsomme forskningspraksiser** (questionable research practices, QRP). Disse er ikke nødvendigvis ulovlige, men de svekker forskningens kvalitet og troverdighet:

- **P-hacking:** Å analysere data på mange ulike måter til man finner et statistisk signifikant resultat, uten å rapportere alle analysene som ble forsøkt.
- **HARKing (Hypothesizing After Results are Known):** Å presentere en hypotese som ble laget etter at resultatene var kjent, som om den var formulert på forhånd.
- **Selektiv rapportering:** Å bare publisere positive funn og legge negative resultater i «skuffen» (publication bias).
- **Æreforfatterskap:** Å inkludere personer som forfattere uten at de har bidratt vesentlig til forskningen, eller å utelate personer som har bidratt.

### Forskningsetiske komiteer i Norge

I Norge finnes flere organer som ivaretar forskningsetikk:

- **REK (Regionale komiteer for medisinsk og helsefaglig forskningsetikk):** Forhåndsgodkjenner all medisinsk og helsefaglig forskning som involverer mennesker, humant biologisk materiale eller helseopplysninger.
- **NESH (Den nasjonale forskningsetiske komité for samfunnsvitenskap og humaniora):** Utarbeider retningslinjer og gir veiledning for forskning innen samfunnsvitenskap, jus og humaniora.
- **NENT (Den nasjonale forskningsetiske komité for naturvitenskap og teknologi):** Dekker naturvitenskap og teknologi.
- **Granskingsutvalget:** Behandler konkrete saker om mulig vitenskapelig uredelighet.`,
    },
    {
      id: 'tof2-1-5-example-2',
      type: 'example',
      title: 'Eksempel: Er dette uredelighet?',
      problem: 'En masterstudent gjennomfører et eksperiment og får resultater som ikke er statistisk signifikante. Veilederen foreslår å fjerne tre «avvikende» datapunkter, noe som gjør resultatet signifikant. Studenten gjør dette uten å rapportere at datapunkter ble fjernet. Er dette vitenskapelig uredelighet?',
      solution: `Dette er i en gråsone, men beveger seg mot **forfalskning**:

**Hva som er problematisk:**
- Datapunkter fjernes selektivt for å oppnå ønsket resultat — dette er en form for datamanipulasjon.
- Fjerningen rapporteres ikke, noe som betyr at leseren ikke kan vurdere om det var rimelig.
- Motivasjonen er å oppnå statistisk signifikans, ikke å korrigere for kjente feil.

**Når fjerning av datapunkter er legitimt:**
- Hvis det finnes en **forhåndsdefinert prosedyre** for å identifisere og fjerne uteliggere (f.eks. verdier > 3 standardavvik fra gjennomsnittet).
- Hvis det er en **dokumentert teknisk feil** (f.eks. utstyr som sviktet under en måling).
- Hvis fjerningen er **transparent rapportert**: «Tre datapunkter ble ekskludert fordi [...]. Analysen uten ekskludering ga [ikke-signifikant resultat].»

**Konklusjon:** Uten forhåndsdefinert begrunnelse og uten transparent rapportering, er dette en tvilsom forskningspraksis som grenser mot forfalskning. Veilederen bør også holdes ansvarlig for å ha foreslått dette.`,
    },

    // --- BLOKK 5: Etikk i dyreforsøk ---
    {
      id: 'tof2-1-5-text-5',
      type: 'text',
      content: `### Etikk i dyreforsøk: 3R-prinsippet

Forskning med dyr reiser egne etiske problemstillinger. Dyr kan ikke gi informert samtykke, og mange forskningsprosedyrer påfører dyr smerte eller ubehag. Samtidig har dyreforsøk vært avgjørende for viktige medisinske gjennombrudd, fra vaksineutvikling til forståelse av grunnleggende biologi.

For å balansere vitenskapelig nytte mot dyrevelferd, brukes **3R-prinsippet**, formulert av Russell og Burch (1959):

**Replace (erstatte):** Bruk alternativer til dyreforsøk når det er mulig. Eksempler: cellekultur, datamodeller, organoider (miniorganer dyrket i laboratoriet), in vitro-tester.

**Reduce (redusere):** Bruk så få dyr som mulig, men nok til å oppnå statistisk pålitelige resultater. God forsøksplanlegging og statistisk styrkeberegning kan redusere antallet dyr som trengs.

**Refine (forbedre):** Minimer lidelse og forbedre velferden for de dyrene som brukes. Eksempler: bedre bedøvelse, bedre oppstalling, humane endepunkter (avslutter forsøket før dyret lider unødig).

I Norge reguleres dyreforsøk av **dyrevelferdsloven** og **forsøksdyrforskriften**. Alle dyreforsøk må godkjennes av **Mattilsynet** og vurderes opp mot 3R-prinsippet. Forsøk som påfører dyr alvorlig og vedvarende smerte uten tilstrekkelig vitenskapelig begrunnelse, tillates ikke.`,
    },

    // --- Oppsummering ---
    {
      id: 'tof2-1-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Forskningsetikk** bygger på tre grunnprinsipper: respekt for personer, velgjørenhet og rettferdighet (Belmont-rapporten).
- **Nürnberg-koden** (1947) og **Helsinki-deklarasjonen** (1964) er historiske grunnlagsdokumenter for forskningsetikk.
- **Informert samtykke** krever at deltakere får tilstrekkelig informasjon, forstår den, og frivillig sier ja til deltakelse. Barn trenger foresattes samtykke.
- **Personvern** i forskning reguleres av GDPR og personopplysningsloven. Anonymisering fjerner alle koblingsmuligheter; pseudonymisering bruker koder med koblingsnøkkel.
- **Vitenskapelig uredelighet (FFP):** Fabrikasjon (oppdiktede data), forfalskning (manipulerte data) og plagiat (andres arbeid uten kreditering).
- **Tvilsomme forskningspraksiser** inkluderer p-hacking, HARKing og selektiv rapportering.
- **Forskningsetiske komiteer** i Norge: REK (medisin), NESH (samfunnsvitenskap), NENT (naturvitenskap) og Granskingsutvalget.
- **3R-prinsippet** for dyreforsøk: Replace, Reduce, Refine.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof2-1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof2-1-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du planlegger et forskningsprosjekt der du skal undersøke søvnvaner hos ungdom ved å intervjue 20 elever på din skole. Beskriv: (a) hvilken etisk komité/instans du eventuelt må kontakte, (b) hva det informerte samtykket må inneholde, (c) hvordan du vil sikre deltakernes personvern, og (d) hvilke spesielle hensyn du må ta fordi noen deltakere kan være under 16 år.',
        hints: ['Tenk på hva slags data du samler inn, hvem deltakerne er, og hvilke regler som gjelder for mindreårige i forskning.'],
        solution: '(a) Etisk instans: Siden prosjektet innebærer intervjuer med personopplysninger (alder, søvnvaner, mulig helseinformasjon), må det meldes til Sikt (tidligere NSD). Dersom intervjuene omhandler helseopplysninger i detalj, kan det også kreve vurdering fra REK. For et skoleprosjekt bør man i tillegg ha godkjenning fra rektor og lærere.\n\n(b) Informert samtykke må inneholde: formålet med studien, hva deltakelse innebærer (intervju på ca. X minutter), at deltakelse er frivillig, at man kan trekke seg når som helst, hvordan data lagres og brukes, kontaktinformasjon til ansvarlige, og at data slettes etter prosjektets slutt.\n\n(c) Personvern: Intervjuene transkriberes med pseudonymer (fiktive navn). Lydopptak lagres kryptert og separat fra navneliste. Koblingsnøkkel oppbevares utilgjengelig for andre. Ingen gjenkjennbare detaljer i rapporten. Data slettes etter prosjektslutt.\n\n(d) Deltakere under 16 år: Foresatte (foreldre/verge) må gi skriftlig samtykke i tillegg til elevens eget samtykke. Informasjonsskrivet tilpasses slik at både foresatte og elev forstår det. Man bør vurdere om noen spørsmål er spesielt sensitive for denne aldersgruppen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof2-1-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof2-1-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Les følgende scenario: En legemiddelforsker har testet et nytt smertestillende middel i et randomisert kontrollert forsøk. Resultatene viser at middelet ikke er bedre enn placebo. Legemiddelfirmaet som finansierer studien ber forskeren om å (1) ikke publisere resultatene, (2) gjennomføre nye analyser med ulike statistiske metoder til man finner en undergruppe der middelet virker, og (3) presentere denne undergruppeanalysen som hovedresultatet. Identifiser hvilke forskningsetiske prinsipper og normer som brytes, og forklar hvorfor hvert punkt er problematisk.',
        hints: ['Tenk på FFP, selektiv rapportering, p-hacking og hvem som potensielt skades.'],
        solution: '(1) Å ikke publisere negative resultater bryter med prinsippet om **åpenhet og sannferdighet** i forskning. Det bidrar til **publikasjonsskjevhet** (publication bias), der bare positive resultater er kjent. Helsinki-deklarasjonen slår fast at alle resultater, også negative, skal gjøres offentlig tilgjengelige. Pasienter og leger trenger negativ informasjon for å ta gode beslutninger — å skjule den er et brudd på prinsippet om velgjørenhet.\n\n(2) Å gjennomføre mange analyser for å finne en undergruppe der middelet tilsynelatende virker, er et klassisk eksempel på **p-hacking** og **data-dredging**. Når man tester nok undergrupper, vil man statistisk sett finne et «signifikant» resultat ved ren tilfeldighet. Dette er en form for **tvilsom forskningspraksis** som grenser mot **forfalskning**, fordi resultatene ikke representerer det eksperimentet faktisk viste.\n\n(3) Å presentere undergruppeanalysen som hovedresultatet er **forfalskning** — en form for vitenskapelig uredelighet. Den opprinnelige hypotesen ble ikke bekreftet, men dette skjules. Kombinert med HARKing (hypotesen om undergruppen formuleres etter at data er analysert) gir dette et sterkt villedende bilde. Det bryter med prinsipper om **ærlighet**, **transparens** og **respekt for personer** (pasienter kan få et middel som ikke virker).\n\nSamlet sett illustrerer scenariet problemer med **interessekonflikter** — forskeren er avhengig av industrifinansiering, noe som kan påvirke forskningens integritet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.6: Litteratursøk og kildekritikk
// ============================================================================

export const CHAPTER_TOF_2_1_6: TextbookChapter = {
  id: 'tof-2-1-6',
  courseId: 'tof-2',
  chapterNumber: '1.6',
  title: 'Litteratursøk og kildekritikk',
  description: 'Søkestrategier, vitenskapelige databaser, fagfellevurdering og referansehåndtering.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjennomføre systematisk litteratursøk og vurdere kilder kritisk',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof2-1-6-intro',
      type: 'text',
      content: `## Litteratursøk og kildekritikk

Ingen forsker arbeider i et vakuum. Ethvert forskningsprosjekt bygger på det andre forskere allerede har funnet ut. Å finne, vurdere og bruke eksisterende forskning er derfor en av de viktigste ferdighetene en forsker — eller en elev med forskningsambisjoner — kan ha.

**Litteratursøk** handler om systematisk å finne relevant forskning om et emne. **Kildekritikk** handler om å vurdere kvaliteten og troverdigheten til det man finner. Sammen utgjør disse ferdighetene grunnlaget for god forskning: Du må vite hva som allerede er kjent, hva som mangler, og hvilke kilder du kan stole på.

I en tid med informasjonsoverflod — millioner av vitenskapelige artikler publiseres hvert år — er evnen til å navigere, filtrere og vurdere informasjon viktigere enn noensinne. I dette kapittelet skal du lære å søke systematisk, finne pålitelige kilder, vurdere dem kritisk, og referere til dem korrekt.`,
    },

    // --- BLOKK 1: Søkestrategier ---
    {
      id: 'tof2-1-6-def-1',
      type: 'definition',
      title: 'Systematisk vs. usystematisk søk',
      content: `**Usystematisk søk** (eksplorativt søk): Man søker bredt og åpent for å skaffe seg en oversikt over feltet. Google, Wikipedia og pensumlitteratur er typiske utgangspunkter. Nyttig i startfasen, men gir ikke et komplett bilde.

**Systematisk søk**: En planlagt og dokumentert søkestrategi der man:
1. Definerer klare **søkeord** (nøkkeltermer) basert på forskningsspørsmålet
2. Velger relevante **databaser** å søke i
3. Bruker **boolske operatorer** for å kombinere søkeord presist
4. Dokumenterer søkeprosessen (dato, database, søkestreng, antall treff)
5. Anvender inklusjons- og eksklusjonskriterier for å velge ut relevante artikler

Et systematisk søk er **reproduserbart** — en annen forsker skal kunne gjenta søket og finne de samme resultatene.`,
    },
    {
      id: 'tof2-1-6-text-1',
      type: 'text',
      content: `### Boolske operatorer: Grunnlaget for presise søk

Boolske operatorer er logiske koblingsord som lar deg kombinere søkeord på ulike måter. De tre viktigste er:

**AND (OG):** Innsnevrer søket. Begge termene må finnes. Eksempel: *«klimaendringer AND biodiversitet»* gir kun artikler som omhandler begge temaene.

**OR (ELLER):** Utvider søket. Minst én av termene må finnes. Eksempel: *«ungdom OR tenåringer OR adolescents»* fanger opp ulike begreper for samme fenomen. Nyttig for synonymer.

**NOT (IKKE):** Ekskluderer resultater. Eksempel: *«solenergi NOT atomenergi»* fjerner artikler som omhandler atomenergi.

**Avanserte søketeknikker:**
- **Frasesøk med anførselstegn:** *«climate change»* søker etter den eksakte frasen, ikke ordene separat.
- **Trunkering med stjerne (\\*):** *miljø\\** fanger opp miljøpolitikk, miljøvern, miljøkonsekvenser osv.
- **Parenteser for gruppering:** *(stress OR angst) AND (ungdom OR elever)* — parentesene sikrer at OR-operatoren gjelder innenfor gruppen.

En god søkestrategi kombinerer disse teknikkene. Begynn bredt, vurder treffene, og innsnevre gradvis.`,
    },
    {
      id: 'tof2-1-6-example-1',
      type: 'example',
      title: 'Eksempel: Bygge en søkestreng',
      problem: 'En elev skal finne forskning om effekten av skjermbruk på søvnkvalitet hos ungdom. Lag en søkestreng ved å bruke boolske operatorer.',
      solution: `**Steg 1: Identifiser nøkkelbegrepene**
- Skjermbruk: screen time, digital media, smartphone
- Søvnkvalitet: sleep quality, insomnia, sleep disturbance
- Ungdom: adolescents, teenagers, young people

**Steg 2: Kombiner med boolske operatorer**

("screen time" OR "digital media" OR smartphone OR "social media") AND ("sleep quality" OR insomnia OR "sleep disturbance" OR "sleep duration") AND (adolescents OR teenagers OR "young people" OR youth)

**Steg 3: Tilpass til databasen**
Ulike databaser kan ha noe ulik syntaks. I PubMed kan man bruke MeSH-termer (kontrollert vokabular) for mer presise søk. I Google Scholar bruker man enklere søkestrenger.

**Resultat:** Søkestrengen fanger opp ulike formuleringer av de tre kjerneelementene og gir relevante treff om akkurat det temaet vi er interessert i.`,
    },
    {
      id: 'tof2-1-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof2-1-6-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Du søker etter forskning om «effekten av musikk på konsentrasjon hos studenter». Hvilken søkestreng er mest presis?',
        options: [
          { id: 'a', text: 'musikk konsentrasjon studenter', isCorrect: false },
          { id: 'b', text: '(music OR "background music") AND (concentration OR "cognitive performance") AND (students OR "university students")', isCorrect: true },
          { id: 'c', text: 'music NOT concentration NOT students', isCorrect: false },
          { id: 'd', text: '"music and concentration and students"', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Denne søkestrengen bruker OR for å fange synonymer innenfor hvert begrep (f.eks. music og background music), AND for å kreve at alle tre temaene er til stede, og anførselstegn for eksakte fraser. Alternativ A mangler boolske operatorer og vil gi upresise treff. Alternativ C ekskluderer det vi leter etter med NOT. Alternativ D søker etter hele setningen som én frase, noe som nesten aldri vil gi treff.',
      },
    },

    // --- BLOKK 2: Vitenskapelige databaser ---
    {
      id: 'tof2-1-6-text-2',
      type: 'text',
      content: `### Viktige vitenskapelige databaser

Ikke all informasjon man finner på nettet er likeverdig. Vitenskapelige databaser inneholder kvalitetssikret forskning og er det primære verktøyet for akademisk litteratursøk:

**Google Scholar** (scholar.google.com): Bred, tverrfaglig søkemotor for akademisk litteratur. Enkel å bruke, dekker mange fagfelt, og viser siteringer. Ulempe: Ingen kvalitetsfilter — alt som ser akademisk ut, indekseres, inkludert artikler fra rovtidsskrifter.

**PubMed** (pubmed.ncbi.nlm.nih.gov): Verdens viktigste database for biomedisinsk og helsefaglig forskning. Inneholder over 35 millioner referanser. Bruker MeSH-termer (Medical Subject Headings) for kontrollert vokabular. Særlig relevant for biologi, medisin og helsefag.

**Oria** (oria.no): Norske universitets- og høgskolebibliotekers søkesystem. Gir tilgang til bøker, tidsskrifter og artikler tilgjengelige gjennom norske fagbibliotek. Nyttig som elev/student for å finne det som er direkte tilgjengelig.

**Web of Science**: Stor tverrfaglig database med strenge kvalitetskrav for indeksering. Gir gode verktøy for siteringsanalyse og impactfaktor.

**Scopus**: Elsevier-eid tverrfaglig database. Verdens største kuraterte database for vitenskapelig litteratur.

**Fagspesifikke databaser:** ERIC (utdanning), PsycINFO (psykologi), IEEE Xplore (teknologi/ingeniørfag), arXiv (forhåndspublisering av artikler i fysikk, matematikk, informatikk).`,
    },

    // --- BLOKK 3: Fagfellevurdering ---
    {
      id: 'tof2-1-6-def-2',
      type: 'definition',
      title: 'Fagfellevurdering (peer review)',
      content: `**Fagfellevurdering** (peer review) er prosessen der vitenskapelige artikler vurderes av uavhengige eksperter (fagfeller) innenfor samme fagområde **før publisering**. Prosessen fungerer som et kvalitetsfilter:

1. Forskeren sender inn artikkelen til et vitenskapelig tidsskrift.
2. Redaktøren vurderer om artikkelen er relevant og sender den til 2–3 anonyme fagfeller.
3. Fagfellene vurderer metode, resultater, konklusjoner og presentasjon.
4. Fagfellene anbefaler: **aksepter**, **revidér og send inn på nytt** (minor/major revision), eller **avvis**.
5. Forskeren reviderer artikkelen basert på tilbakemeldingene og sender inn på nytt.
6. Prosessen kan gjentas flere ganger før artikkelen aksepteres eller endelig avvises.

Fagfellevurdering sikrer at publisert forskning holder en viss standard — men systemet er ikke ufeilbarlig.`,
    },
    {
      id: 'tof2-1-6-text-3',
      type: 'text',
      content: `### Styrker og svakheter ved fagfellevurdering

**Styrker:**
- Kvalitetskontroll: Feil i metode, analyse og konklusjoner oppdages før publisering.
- Forbedring: Konstruktiv kritikk gjør artikkelen bedre.
- Troverdighet: Fagfellevurderte artikler har høyere status og troverdighet.

**Svakheter:**
- Treghet: Prosessen tar ofte 3–12 måneder, noe som forsinker spredning av viktige funn.
- Konservatisme: Fagfeller kan avvise nyskapende forskning som utfordrer etablerte teorier.
- Skjevhet: Fagfeller kan ha personlige, faglige eller institusjonelle interesser som påvirker vurderingen (bias).
- Ingen garanti: Feil slipper gjennom — fagfeller kan ikke replikere forsøk eller kontrollere rådata.

**Pre-prints (forhåndspubliseringer):**
For å motvirke tregheten publiserer mange forskere artikler som **pre-prints** på servere som arXiv, bioRxiv og medRxiv. Pre-prints er **ikke fagfellevurdert**, men gjøres tilgjengelig umiddelbart. Under covid-19-pandemien var pre-prints avgjørende for rask informasjonsdeling, men medførte også spredning av forskning av variabel kvalitet.

### Impact factor og h-indeks

**Impact factor (IF):** Et mål på gjennomsnittlig antall siteringer per artikkel i et tidsskrift over to år. Tidsskrifter med høy impact factor (f.eks. *Nature* IF ≈ 50, *Science* IF ≈ 45) regnes som prestisjefylte. Men impact factor sier noe om tidsskriftet, **ikke om den enkelte artikkelen**.

**H-indeks:** Et mål på en enkelt forskers produktivitet og innflytelse. En forsker med h-indeks 20 har publisert minst 20 artikler som er sitert minst 20 ganger hver. Kombinerer kvantitet (antall publikasjoner) og kvalitet (antall siteringer).

Begge målene er omdiskuterte og bør brukes med forsiktighet — de favoriserer visse fagfelt og kan manipuleres.`,
    },
    {
      id: 'tof2-1-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof2-1-6-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er en pre-print?',
        options: [
          { id: 'a', text: 'En artikkel som er publisert i et tidsskrift med høy impact factor.', isCorrect: false },
          { id: 'b', text: 'En vitenskapelig artikkel som er gjort offentlig tilgjengelig før den har gjennomgått fagfellevurdering.', isCorrect: true },
          { id: 'c', text: 'Et førsteutkast av en artikkel som kun deles med medforfatterene.', isCorrect: false },
          { id: 'd', text: 'En artikkel som har blitt avvist av et tidsskrift etter fagfellevurdering.', isCorrect: false },
        ],
        solution: 'Riktig svar er B. En pre-print er en vitenskapelig artikkel som forskeren gjør offentlig tilgjengelig (f.eks. på arXiv, bioRxiv eller medRxiv) før den har gjennomgått fagfellevurdering. Pre-prints gir rask tilgang til nye funn, men har ikke gjennomgått kvalitetskontrollen som fagfellevurdering innebærer. Leseren må derfor vurdere dem ekstra kritisk.',
      },
    },

    // --- BLOKK 4: Kildekritikk ---
    {
      id: 'tof2-1-6-text-4',
      type: 'text',
      content: `### Kildekritikk: Vurdere kvalitet og troverdighet

Å finne kilder er bare halve jobben — den andre halvdelen er å vurdere om kildene er troverdige og relevante. God kildekritikk innebærer å stille systematiske spørsmål til hver kilde:

**Primærkilder vs. sekundærkilder:**
- **Primærkilde:** Den opprinnelige forskningsartikkelen eller originaldataen. Eksempel: En artikkel i *The Lancet* som rapporterer originale resultater fra en klinisk studie.
- **Sekundærkilde:** En kilde som refererer til, oppsummerer eller tolker primærkilder. Eksempel: En lærebok, en avisartikkel, en oversiktsartikkel (review).

Bruk primærkilder når det er mulig. Sekundærkilder kan forenkle, feiltolke eller utelate viktig informasjon.

**Sjekkliste for kildekritikk:**

| Kriterium | Spørsmål |
|-----------|----------|
| **Troverdighet** | Hvem er forfatteren? Hvilke kvalifikasjoner har de? Er institusjonen anerkjent? |
| **Objektivitet** | Er fremstillingen balansert? Har forfatteren interessekonflikter? Hvem har finansiert forskningen? |
| **Relevans** | Er kilden relevant for ditt forskningsspørsmål? Dekker den de aspektene du trenger? |
| **Aktualitet** | Når ble kilden publisert? Er informasjonen oppdatert? I noen felt eldes forskning raskt. |
| **Nøyaktighet** | Stemmer opplysningene overens med andre kilder? Brukes presise referanser? |
| **Fagfellevurdert?** | Er artikkelen publisert i et fagfellevurdert tidsskrift? |

### Rovtidsskrifter (predatory journals)

En voksende trussel mot vitenskapelig kvalitet er **rovtidsskrifter** — tidsskrifter som tar publiseringsavgift men uten reell fagfellevurdering. Kjennetegn:
- Aggressiv e-postmarkedsføring: «Submit your paper to our prestigious journal!»
- Urimelig rask publisering (dager i stedet for måneder)
- Ukjent eller fiktiv redaksjon
- Ingen gjennomsiktig fagfellevurderingsprosess
- Svakt eller manglende kvalitetsfilter

Beals liste og «Think. Check. Submit.»-kampanjen er verktøy for å identifisere seriøse vs. useriøse tidsskrifter.`,
    },
    {
      id: 'tof2-1-6-example-2',
      type: 'example',
      title: 'Eksempel: Kildekritisk vurdering',
      problem: 'En elev finner to kilder om effekten av vitamin D på immunforsvaret: (A) En artikkel fra 2023 i Journal of Immunology (fagfellevurdert, forfattere fra Harvard), og (B) et blogginnlegg fra en helsekostprodusent som hevder at «vitamin D kurerer alt». Hvordan bør eleven vurdere disse kildene?',
      solution: `**Kilde A — Journal of Immunology-artikkelen:**
- **Troverdighet:** Høy. Forfattere fra anerkjent institusjon. Publisert i fagfellevurdert tidsskrift med lang historie.
- **Objektivitet:** Sannsynlig høy. Akademisk tidsskrift. Men sjekk om studien er finansiert av et legemiddelfirma (disclosure-seksjonen).
- **Relevans:** Direkte relevant — omhandler vitamin D og immunforsvar.
- **Aktualitet:** God (2023).
- **Nøyaktighet:** Sannsynlig høy. Fagfellevurdert og basert på primærdata.
- **Konklusjon:** Pålitelig primærkilde som kan brukes som referanse.

**Kilde B — Blogginnlegget:**
- **Troverdighet:** Lav. Produsenten har økonomisk interesse i å fremstille vitamin D som vidundermiddel. Ingen faglige kvalifikasjoner oppgitt.
- **Objektivitet:** Svak. Tydelig kommersielt motiv. Overdrevne påstander uten nyanser.
- **Nøyaktighet:** Påstanden «kurerer alt» er uvitenskapelig — ingen enkeltsubstans kurerer alt.
- **Fagfellevurdert?** Nei — et blogginnlegg.
- **Konklusjon:** Upålitelig kilde som ikke bør brukes i et forskningsprosjekt.`,
    },

    // --- BLOKK 5: Referansehåndtering ---
    {
      id: 'tof2-1-6-text-5',
      type: 'text',
      content: `### Referansehåndtering: Gi ære der ære tilhører

Korrekt referansehåndtering er en grunnleggende akademisk ferdighet. Å referere til kilder handler om to ting: å gi **kreditering** til opphavspersoner og å gi leseren mulighet til å **etterprøve** påstandene dine.

**Sitat vs. parafrase:**
- **Direkte sitat:** Ordrett gjengivelse av en annens tekst, markert med anførselstegn og sidetall. Brukes når den eksakte formuleringen er viktig.
- **Parafrase:** Du gjengir innholdet med egne ord, men refererer til kilden. Brukes oftere enn direkte sitater i vitenskapelige tekster.

**De vanligste referansestilene:**

**APA (American Psychological Association):**
Mest brukt i samfunnsvitenskap, psykologi og utdanning. Bruker forfatter-år-systemet i teksten: *(Hansen, 2022)* eller *Hansen (2022) fant at ...*. Referanselisten ordnes alfabetisk.

**Vancouver:**
Mest brukt i medisin og naturvitenskap. Bruker nummererte referanser i teksten: *Studien viste signifikant effekt [3].*. Referanselisten ordnes etter rekkefølge i teksten.

**Referanseverktøy:**
For å holde oversikt over referanser finnes det egne verktøy:
- **Zotero** (gratis, åpen kildekode) — lagrer, organiserer og formaterer referanser automatisk. Integreres med nettleser og Word/Google Docs.
- **Mendeley** — lignende funksjonalitet, eid av Elsevier.
- **EndNote** — profesjonelt, men kostbart.

Disse verktøyene importerer referanseinformasjon direkte fra databaser og formaterer kildelisten automatisk i riktig stil. Dette sparer tid og reduserer feil.`,
    },

    // --- Oppsummering ---
    {
      id: 'tof2-1-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Systematisk søk** er en planlagt, dokumentert og reproduserbar søkestrategi — i motsetning til usystematisk googling.
- **Boolske operatorer** (AND, OR, NOT) kombinerer søkeord presist. Anførselstegn, trunkering og parenteser gir enda bedre kontroll.
- **Vitenskapelige databaser** (Google Scholar, PubMed, Oria, Web of Science) er de viktigste verktøyene for å finne kvalitetssikret forskning.
- **Fagfellevurdering** (peer review) er kvalitetskontrollen i vitenskapelig publisering — men har svakheter som treghet, konservatisme og bias.
- **Pre-prints** gir rask tilgang til forskning, men er ikke fagfellevurdert.
- **Impact factor** og **h-indeks** er mål på tidsskrifters og forskeres innflytelse, men er omdiskuterte.
- **Kildekritikk** innebærer å vurdere troverdighet, objektivitet, relevans, aktualitet og nøyaktighet systematisk.
- **Rovtidsskrifter** utgir seg for å være seriøse, men mangler reell fagfellevurdering.
- **Referansehåndtering** (APA, Vancouver) sikrer korrekt kreditering og etterprøvbarhet. Verktøy som Zotero automatiserer prosessen.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof2-1-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof2-1-6-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du skal skrive en prosjektoppgave om hvordan kunstig intelligens (AI) brukes i medisinsk diagnostikk. (a) Formuler en søkestreng med boolske operatorer for å finne relevante artikler. (b) Nevn to databaser du ville søkt i, og begrunn valget. (c) Beskriv tre kriterier du ville brukt for å vurdere om en artikkel er pålitelig nok til å inkludere i oppgaven.',
        hints: ['Tenk på synonymer for AI og diagnostikk, og hvilke databaser som er relevante for medisin og teknologi.'],
        solution: '(a) Søkestreng: ("artificial intelligence" OR "machine learning" OR "deep learning") AND ("medical diagnosis" OR "clinical diagnostics" OR "disease detection") AND (accuracy OR performance OR "clinical trial")\n\nDenne søkestrengen fanger opp ulike AI-termer, ulike formuleringer for diagnostikk, og begrenser til artikler som vurderer effektivitet.\n\n(b) Databaser:\n1. PubMed — fordi temaet er medisinsk. PubMed dekker biomedisinsk forskning bredt og har MeSH-termer for presise søk.\n2. IEEE Xplore — fordi temaet også er teknologisk. IEEE dekker ingeniørfag og informatikk der mye AI-forskning publiseres.\n\n(c) Tre kriterier for pålitelighet:\n1. Fagfellevurdert: Er artikkelen publisert i et anerkjent, fagfellevurdert tidsskrift? Sjekk at tidsskriftet ikke er et rovtidsskrift.\n2. Forfatternes bakgrunn: Har forfatterne relevant faglig kompetanse og tilhørighet til anerkjente institusjoner? Sjekk at de har publisert tidligere i feltet.\n3. Aktualitet: Er artikkelen nylig publisert? AI-feltet utvikler seg raskt, og artikler eldre enn 3–5 år kan være utdaterte. Sjekk også om resultatene er replisert av andre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof2-1-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof2-1-6-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du mottar en e-post fra et tidsskrift kalt «Global Journal of Advanced Scientific Research» som inviterer deg til å publisere din prosjektoppgave. De lover publisering innen 5 dager og krever en publiseringsavgift på 500 dollar. (a) Hvilke tegn tyder på at dette kan være et rovtidsskrift? (b) Forklar hvorfor rovtidsskrifter er problematiske for vitenskapen. (c) Beskriv hvordan du ville verifisert om tidsskriftet er seriøst.',
        hints: ['Tenk på hva som kjennetegner seriøse tidsskrifter — tidsbruk på fagfellevurdering, gjennomsiktighet, redaksjonens bakgrunn.'],
        solution: '(a) Tegn på rovtidsskrift:\n- Uoppfordret e-post med invitasjon om å publisere — seriøse tidsskrifter sender sjelden slike.\n- Urimelig rask publisering (5 dager) — seriøs fagfellevurdering tar normalt uker til måneder.\n- Vagt og altomfattende tidsskriftnavn («Global Journal of Advanced Scientific Research») — dekker tilsynelatende alt og ingenting.\n- Publiseringsavgift uten tydelig kobling til open access-modell med reell fagfellevurdering.\n\n(b) Hvorfor rovtidsskrifter er problematiske:\n- De undergraver tillit til forskning: Artikler publisert uten reell kvalitetskontroll kan inneholde feil, villedende resultater eller fabrikerte data.\n- Forskere som publiserer i rovtidsskrifter kan bygge opp en tilsynelatende imponerende publikasjonsliste uten reelle faglige bidrag.\n- Det blir vanskeligere for lesere å skille mellom pålitelig og upålitelig forskning.\n- De utnytter forskere økonomisk, særlig fra lavressursland.\n\n(c) Verifisering:\n- Søke opp tidsskriftet i Directory of Open Access Journals (DOAJ) — seriøse open access-tidsskrifter er listet her.\n- Sjekke «Think. Check. Submit.»-verktøyet.\n- Undersøke redaksjonen: Har redaktørene reell faglig bakgrunn? Finnes de på universitetssider?\n- Sjekke om tidsskriftet er indeksert i anerkjente databaser (Web of Science, Scopus, PubMed).\n- Lese noen publiserte artikler: Er kvaliteten rimelig? Ser artiklene fagfellevurderte ut?',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.7: Kritisk vurdering av forskning
// ============================================================================

export const CHAPTER_TOF_2_1_7: TextbookChapter = {
  id: 'tof-2-1-7',
  courseId: 'tof-2',
  chapterNumber: '1.7',
  title: 'Kritisk vurdering av forskning',
  description: 'IMRaD-struktur, evidenshierarkiet, metaanalyser og pseudovitenskap.',
  estimatedMinutes: 30,
  competenceGoals: [
    'vurdere vitenskapelige artikler og forskningsresultater kritisk',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof2-1-7-intro',
      type: 'text',
      content: `## Kritisk vurdering av forskning

Å lese en vitenskapelig artikkel er ikke det samme som å lese en nyhetsartikkel eller en bloggpost. Vitenskapelige artikler er tette, tekniske og følger spesifikke konvensjoner. Å kunne lese dem **kritisk** — det vil si å vurdere kvaliteten på metode, resultater og konklusjoner — er en av de mest verdifulle ferdighetene du kan utvikle som elev og fremtidig forsker.

Kritisk vurdering betyr ikke å finne feil for feilens skyld. Det betyr å stille gode spørsmål: Er metoden egnet? Støtter resultatene konklusjonene? Kan funnene generaliseres? Hva er studiens begrensninger?

I dette kapittelet skal vi lære å lese vitenskapelige artikler systematisk ved hjelp av IMRaD-strukturen, vurdere forskningsdesign og resultater, forstå evidenshierarkiet, og gjenkjenne pseudovitenskap. Etter dette kapittelet skal du kunne ta en vitenskapelig artikkel, lese den med kritisk blikk, og vurdere dens styrker og svakheter.`,
    },

    // --- BLOKK 1: IMRaD-strukturen ---
    {
      id: 'tof2-1-7-def-1',
      type: 'definition',
      title: 'IMRaD-strukturen',
      content: `**IMRaD** er den standardiserte strukturen for vitenskapelige artikler. Forkortelsen står for:

**I — Introduction (Introduksjon):** Hva er problemet? Hva vet vi allerede? Hva er forskningsspørsmålet og hypotesen? Introduksjonen gir bakgrunn, refererer til tidligere forskning, og ender med en klar problemstilling.

**M — Methods (Metode):** Hvordan ble studien gjennomført? Hvem deltok? Hvilke målinger ble gjort? Metodedelen skal være så detaljert at en annen forsker kan **replikere** studien.

**R — Results (Resultater):** Hva ble funnet? Resultatene presenteres objektivt — med tall, tabeller, figurer og statistiske analyser — uten tolkning.

**a — and**

**D — Discussion (Diskusjon):** Hva betyr resultatene? Stemmer de med hypotesen? Hvordan forholder de seg til tidligere forskning? Hva er studiens begrensninger? Diskusjonsdelen tolker resultatene, vurderer styrker og svakheter, og foreslår videre forskning.

I tillegg har de fleste artikler et **Abstract** (sammendrag) i begynnelsen og en **referanseliste** til slutt.`,
    },
    {
      id: 'tof2-1-7-text-1',
      type: 'text',
      content: `### Hvordan lese en vitenskapelig artikkel

De færreste forskere leser artikler fra begynnelse til slutt. En effektiv lesestrategi er:

**1. Les abstraktet først:** Gir en rask oversikt. Vurder om artikkelen er relevant for det du leter etter.

**2. Se på figurene og tabellene:** Figurer og tabeller oppsummerer resultatene visuelt. Prøv å forstå dem før du leser resten.

**3. Les introduksjonen:** Forstå bakgrunn, forskningsspørsmål og hypotese.

**4. Les diskusjonen:** Hva mener forfatterne at resultatene betyr? Hva innrømmer de som begrensninger?

**5. Les metodedelen:** Den mest tekniske delen. Viktig for å vurdere om metoden er egnet og om resultatene er pålitelige.

**6. Les resultatdelen i detalj:** Se etter statistiske nøkkeltall, konfidensintervaller og p-verdier. Stemmer teksten overens med figurene?

### Kritiske spørsmål til hver seksjon

**Til introduksjonen:** Er forskningsspørsmålet klart formulert? Er bakgrunnslitteraturen relevant og oppdatert?

**Til metoden:** Er forskningsdesignet egnet til å besvare forskningsspørsmålet? Er utvalget stort nok? Hvordan er variablene operasjonalisert? Er det kontrollert for konfunderende variabler?

**Til resultatene:** Er de statistiske testene riktige? Er p-verdier, konfidensintervaller og effektstørrelser rapportert? Stemmer teksten overens med tabeller og figurer?

**Til diskusjonen:** Overdriver forfatterne betydningen av resultatene? Innrømmer de begrensninger? Er alternative forklaringer vurdert?`,
    },
    {
      id: 'tof2-1-7-example-1',
      type: 'example',
      title: 'Eksempel: Vurdere en resultatseksjon',
      problem: 'En studie rapporterer: «Gjennomsnittlig blodtrykk falt fra 145 mmHg til 138 mmHg i behandlingsgruppen (p = 0,03). Vi konkluderer med at behandlingen har stor klinisk effekt.» Vurder dette utsagnet kritisk.',
      solution: `**Hva er bra:**
- P-verdien (0,03) er under det vanlige signifikansnivået (0,05), altså er resultatet statistisk signifikant.
- Endringen i blodtrykk er kvantifisert.

**Hva bør vurderes kritisk:**

1. **Statistisk signifikans er ikke det samme som klinisk signifikans:** En reduksjon på 7 mmHg er statistisk signifikant, men er den klinisk meningsfull? I blodtrykksforskning regnes en reduksjon på minst 5–10 mmHg som klinisk relevant, men det avhenger av kontekst. Forfatterne bør begrunne påstanden om «stor klinisk effekt» — 7 mmHg kan være en moderat effekt.

2. **Mangler konfidensintervall:** Vi vet ikke usikkerheten rundt estimatet. Et 95 % konfidensintervall for forskjellen kunne vært f.eks. [1, 13] mmHg — da inkluderer det verdier som kan være klinisk ubetydelige.

3. **Mangler effektstørrelse:** Cohens d eller lignende mål ville fortelle oss om effekten er liten, middels eller stor i statistisk forstand.

4. **Hva med kontrollgruppen?** Er dette forskjellen sammenlignet med placebo, eller bare en før-etter-måling? Uten kontrollgruppe kan fallet skyldes regresjon mot gjennomsnittet eller placeboeffekt.

5. **Utvalgets størrelse:** Med stort nok utvalg kan selv svært små forskjeller bli «signifikante» uten å være meningsfulle.

**Konklusjon:** Resultatet kan være lovende, men påstanden om «stor klinisk effekt» er ikke tilstrekkelig begrunnet. Konfidensintervall, effektstørrelse og sammenligning med kontrollgruppe mangler.`,
    },
    {
      id: 'tof2-1-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof2-1-7-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva står IMRaD for?',
        options: [
          { id: 'a', text: 'Information, Measurement, Research and Data', isCorrect: false },
          { id: 'b', text: 'Introduction, Methods, Results and Discussion', isCorrect: true },
          { id: 'c', text: 'Investigation, Methodology, Review and Debate', isCorrect: false },
          { id: 'd', text: 'Inquiry, Model, Replication and Demonstration', isCorrect: false },
        ],
        solution: 'Riktig svar er B. IMRaD står for Introduction (introduksjon), Methods (metode), Results (resultater) and Discussion (diskusjon). Dette er den standardiserte strukturen for vitenskapelige artikler innen naturvitenskap, medisin og mange andre fagfelt. Den lille «a» står for «and» (og).',
      },
    },

    // --- BLOKK 2: Evidenshierarkiet ---
    {
      id: 'tof2-1-7-def-2',
      type: 'definition',
      title: 'Evidenshierarkiet',
      content: `**Evidenshierarkiet** (evidenspyramiden) rangerer ulike typer forskning etter hvor sterk evidens de gir. Fra svakest til sterkest:

**Nivå 7 (bunn): Ekspertuttalelser og klinisk erfaring**
Enkeltstående meninger fra fagfolk, uten systematisk forskning bak. Lavest evidensstyrke.

**Nivå 6: Kasuistikker (case reports)**
Detaljerte beskrivelser av enkelttilfeller. Kan generere hypoteser, men kan ikke bekrefte sammenhenger.

**Nivå 5: Kasusserier (case series)**
Beskrivelse av flere liknende tilfeller. Bedre enn enkeltkasus, men mangler kontrollgruppe.

**Nivå 4: Kasus-kontroll-studier**
Sammenligner personer med et utfall (kasus) med personer uten (kontroll). Kan påvise assosiasjoner, men sårbar for skjevhet.

**Nivå 3: Kohortstudier**
Følger grupper over tid. Kan vise tidsrekkefølge, men uten randomisering kan konfunderende variabler forstyrre.

**Nivå 2: Randomiserte kontrollerte studier (RCT)**
Gullstandarden for enkeltstudier. Randomisering, kontrollgruppe og blinding gir sterk evidens for kausalitet.

**Nivå 1 (topp): Systematiske oversikter og metaanalyser**
Oppsummerer og analyserer resultater fra mange studier. Gir det mest pålitelige overordnede bildet.`,
    },
    {
      id: 'tof2-1-7-text-2',
      type: 'text',
      content: `### Systematiske oversikter og metaanalyser

Øverst i evidenshierarkiet finner vi to nært beslektede forskningstyper:

**Systematisk oversikt (systematic review):**
En systematisk oversikt identifiserer, vurderer og oppsummerer **all tilgjengelig forskning** om et spesifikt spørsmål. Prosessen er:
1. Formulere et presist forskningsspørsmål
2. Gjennomføre et systematisk litteratursøk i flere databaser
3. Velge ut studier basert på forhåndsdefinerte inklusjons- og eksklusjonskriterier
4. Vurdere kvaliteten på hver inkludert studie
5. Oppsummere resultatene narrativt

**Metaanalyse:**
En metaanalyse går et skritt videre ved å bruke **statistiske metoder** for å kombinere resultatene fra flere studier til ett samlet estimat. Ved å slå sammen data fra mange studier øker man den statistiske styrken og kan oppdage effekter som er for små til å påvises i enkeltstudier.

**Forest plot:** Et forest plot er et viktig visualiseringsverktøy i metaanalyser. Det viser resultatet fra hver enkelt studie som en prikk med et konfidensintervall, pluss det samlede estimatet (diamant) nederst. Leseren kan raskt se om studiene peker i samme retning og hvor presise estimatene er.

**Styrker ved metaanalyser:**
- Økt statistisk styrke (større samlet utvalg)
- Mer presise estimater av effektstørrelser
- Kan undersøke variasjon mellom studier (heterogenitet)
- Gir det mest pålitelige overordnede bildet

**Svakheter:**
- «Garbage in, garbage out» — hvis de inkluderte studiene er dårlige, gir metaanalysen et upålitelig resultat
- Publikasjonsskjevhet — negative studier publiseres sjeldnere og kan mangle
- Heterogenitet — studier kan være for ulike til å slås sammen meningsfullt`,
    },
    {
      id: 'tof2-1-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof2-1-7-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva står øverst i evidenshierarkiet?',
        options: [
          { id: 'a', text: 'Randomiserte kontrollerte studier (RCT)', isCorrect: false },
          { id: 'b', text: 'Ekspertuttalelser', isCorrect: false },
          { id: 'c', text: 'Kohortstudier', isCorrect: false },
          { id: 'd', text: 'Systematiske oversikter og metaanalyser', isCorrect: true },
        ],
        solution: 'Riktig svar er D. Systematiske oversikter og metaanalyser står øverst i evidenshierarkiet fordi de oppsummerer og analyserer resultater fra mange enkeltstudier, og dermed gir det mest pålitelige overordnede bildet. RCT-er (alternativ A) står på nivå 2 — de er gullstandarden for enkeltstudier, men enkeltstudier kan gi tilfeldige resultater. Ekspertuttalelser (B) står nederst i hierarkiet.',
      },
    },

    // --- BLOKK 3: Vurdere diskusjonsseksjonen ---
    {
      id: 'tof2-1-7-text-3',
      type: 'text',
      content: `### Vurdere diskusjonsseksjonen: Styrker, begrensninger og generaliserbarhet

Diskusjonsseksjonen er ofte den mest avslørende delen av en artikkel. Her tolker forfatterne resultatene sine, og det er her du som kritisk leser bør være mest oppmerksom.

**Styrker og begrensninger:**
Gode forskere innrømmer begrensninger i sin egen studie. Se etter:
- Erkjenner forfatterne svakheter i metoden (f.eks. lite utvalg, manglende blinding, selvrapporterte data)?
- Nevner de konfunderende variabler de ikke klarte å kontrollere for?
- Diskuterer de alternative forklaringer for resultatene?

En studie som hevder å ha ingen begrensninger, bør behandles med skepsis — all forskning har begrensninger.

**Generaliserbarhet (ekstern validitet):**
Kan resultatene overføres til andre populasjoner, settinger eller tidsperioder? En studie gjort på universitetsstudenter i Norge kan kanskje ikke generaliseres til eldre mennesker i andre land. Forfatterne bør diskutere hvem resultatene gjelder for.

**Overfortolkning:**
Pass på om forfatterne trekker sterkere konklusjoner enn dataene tillater:
- Påstår de kausalitet basert på en korrelasjonsstudie?
- Generaliserer de til populasjoner som ikke var representert i utvalget?
- Overdriver de den kliniske eller praktiske betydningen av små effekter?
- Bagatelliserer de begrensninger som potensielt undergraver konklusjonene?

### Interessekonflikter

Sjekk alltid om forfatterne oppgir **interessekonflikter** (conflicts of interest). Forskning finansiert av industrien (legemiddelfirmaer, teknologiselskaper) har vist seg å oftere rapportere positive resultater enn uavhengig finansiert forskning. Det betyr ikke at industrifinansiert forskning alltid er upålitelig, men det er en faktor å ha i bakhodet.`,
    },
    {
      id: 'tof2-1-7-example-2',
      type: 'example',
      title: 'Eksempel: Vurdere en studies generaliserbarhet',
      problem: 'En studie konkluderer med at «regelmessig meditasjon reduserer stressnivået hos mennesker». Studien ble gjennomført på 50 kvinnelige psykologistudenter ved ett norsk universitet, over 4 uker. Vurder generaliserbarheten.',
      solution: `**Begrensninger for generaliserbarhet:**

1. **Kjønn:** Kun kvinner deltok. Vi kan ikke anta at effekten er lik for menn. Stressrespons og mestringsstrategier kan variere mellom kjønn.

2. **Alder og livssituasjon:** Psykologistudenter er typisk unge voksne. Effekten kan være annerledes for eldre eller for mennesker i andre livssituasjoner (yrkesaktive, pensjonister).

3. **Utdanningsnivå og selvseleksjon:** Psykologistudenter kan ha større interesse for meditasjon og bedre evne til selvrefleksjon enn den generelle befolkningen. De kan også rapportere mer positivt fordi de «forstår hva som forventes».

4. **Utvalgets størrelse:** 50 deltakere er et lite utvalg. Det gir begrenset statistisk styrke og presisjon.

5. **Varighet:** 4 uker er kort tid. Vi vet ikke om effekten vedvarer over tid.

6. **Kulturell kontekst:** Norge er et velferdssamfunn med spesifikke stressfaktorer. Resultatene kan ikke nødvendigvis overføres til andre kulturer.

**Korrekt konklusjon:** «Regelmessig meditasjon over 4 uker reduserte selvrapportert stressnivå hos unge kvinnelige psykologistudenter ved ett norsk universitet.» Å generalisere til «mennesker» generelt er overfortolkning.`,
    },

    // --- BLOKK 4: Kritisk tenkning og pseudovitenskap ---
    {
      id: 'tof2-1-7-text-4',
      type: 'text',
      content: `### Kritisk tenkning og pseudovitenskap

En av de viktigste ferdighetene fra Teknologi og forskningslære er evnen til å skille **vitenskap** fra **pseudovitenskap**. Pseudovitenskap er påstander eller praksiser som presenteres som vitenskapelige, men som ikke følger vitenskapens metoder og prinsipper.

**Kjennetegn på pseudovitenskap:**

1. **Ikke falsifiserbar:** Påstandene er formulert slik at de ikke kan motbevises. Ekte vitenskap formulerer hypoteser som kan testes og potensielt avkreftes.

2. **Kirsebærplukking av bevis:** Bare støttende bevis fremheves, mens motbevis ignoreres eller bortforklares. I ekte vitenskap tas alle data med — også de som ikke støtter hypotesen.

3. **Anekdotisk bevis:** «Jeg prøvde X og ble frisk» brukes som bevis. I vitenskap kreves systematisk innsamling av data og statistisk analyse.

4. **Appell til autoritet:** «En berømt person støtter dette» brukes i stedet for empirisk evidens. Vitenskap baserer seg på data, ikke på hvem som sier noe.

5. **Konspirasjonstekning:** Når vitenskapelig evidens motsier påstandene, hevdes det at «mainstream-vitenskap skjuler sannheten».

6. **Ingen fagfellevurdering:** Påstandene publiseres ikke i fagfellevurderte tidsskrifter, men i bøker, blogger eller sosiale medier.

7. **Statiske påstander:** Pseudovitenskap endrer seg sjelden basert på ny kunnskap. Ekte vitenskap er dynamisk og selvkorrigerende.

**Eksempler på pseudovitenskap:** Homøopati (vann «husker» molekyler som har vært der), astrologi (himmellegemers posisjon påvirker personligheten), krystallhealing, flat jord-teori.`,
    },
    {
      id: 'tof2-1-7-warning-1',
      type: 'warning',
      title: 'Vitenskap er ikke perfekt — men det er den beste metoden vi har',
      content: `Det er viktig å forstå at kritisk tenkning ikke betyr å avvise all forskning eller bli kynisk. Vitenskap har begrensninger: studier kan ha feil, fagfellevurdering er ikke ufeilbarlig, og forskere er mennesker med sine egne skjevheter.

Men det vitenskapelige systemet har en innebygd **selvkorrigerende mekanisme**: feil oppdages over tid gjennom replikasjon, fagfellevurdering og åpen diskusjon. Pseudovitenskap mangler denne mekanismen.

Kritisk tenkning betyr å:
- Kreve evidens for påstander
- Vurdere kvaliteten på evidensen
- Være åpen for å endre mening når bedre evidens foreligger
- Akseptere usikkerhet og kompleksitet
- Skille mellom «vi vet ikke ennå» og «det er bevist feil»`,
    },
    {
      id: 'tof2-1-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof2-1-7-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hvilke av følgende er kjennetegn på pseudovitenskap?',
        options: [
          { id: 'a', text: 'Hypotesene er formulert slik at de kan testes og falsifiseres', isCorrect: false },
          { id: 'b', text: 'Resultatene publiseres i fagfellevurderte tidsskrifter', isCorrect: false },
          { id: 'c', text: 'Anekdotisk bevis brukes som primærkilde, og påstander kan ikke falsifiseres', isCorrect: true },
          { id: 'd', text: 'Forskningen er åpen for kritikk og endrer seg basert på ny evidens', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Pseudovitenskap kjennetegnes blant annet av at den bruker anekdotisk bevis («det virket for meg») i stedet for systematisk forskning, og at påstandene ofte er formulert slik at de ikke kan falsifiseres (motbevises). Alternativ A, B og D er kjennetegn på ekte vitenskap: falsifiserbare hypoteser, fagfellevurdering, og åpenhet for kritikk og endring.',
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof2-1-7-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **IMRaD** (Introduction, Methods, Results and Discussion) er standardstrukturen for vitenskapelige artikler.
- Les artikler strategisk: abstrakt først, deretter figurer, introduksjon, diskusjon, metode og resultater i detalj.
- Still **kritiske spørsmål** til hver del: Er metoden egnet? Støtter resultatene konklusjonene? Innrømmes begrensninger?
- **Evidenshierarkiet** rangerer forskning fra ekspertuttalelser (svakest) til systematiske oversikter og metaanalyser (sterkest).
- **Systematiske oversikter** oppsummerer all forskning om et spørsmål; **metaanalyser** kombinerer resultater statistisk.
- Vurder **generaliserbarhet**: Gjelder resultatene for den populasjonen og konteksten du er interessert i?
- Vær oppmerksom på **overfortolkning** og **interessekonflikter**.
- **Pseudovitenskap** kjennetegnes av ikke-falsifiserbare påstander, anekdotisk bevis, kirsebærplukking og fravær av fagfellevurdering.
- Kritisk tenkning betyr å kreve evidens, vurdere kvaliteten på evidensen, og være åpen for å endre mening.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof2-1-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof2-1-7-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du leser følgende forskningssammendrag: «Vi undersøkte om daglig bruk av omega-3-tilskudd forbedrer hukommelsen hos eldre (N = 40, alder 65–80). Deltakerne ble randomisert til omega-3-gruppe og placebogruppe. Etter 12 uker viste omega-3-gruppen bedre score på en hukommelsestest (p = 0,04). Vi konkluderer med at omega-3 forbedrer hukommelsen hos alle voksne.» Vurder studien kritisk ved å identifisere: (a) styrker, (b) minst tre begrensninger, og (c) om konklusjonen er berettiget.',
        hints: ['Tenk på utvalgets størrelse, generaliserbarhet, og om konklusjonen er bredere enn det dataene tillater.'],
        solution: '(a) Styrker:\n- Randomisert kontrollert design — gir mulighet for kausale slutninger.\n- Bruk av placebogruppe — kontrollerer for placeboeffekt.\n- Konkret, målbar avhengig variabel (hukommelsestest).\n\n(b) Begrensninger:\n1. Lite utvalg (N = 40, bare 20 per gruppe) — gir lav statistisk styrke. P-verdien er bare så vidt signifikant (0,04), og med så lite utvalg er resultatene ustabile.\n2. Kort varighet (12 uker) — vi vet ikke om effekten vedvarer over tid, eller om den oppstår først etter lengre tids bruk.\n3. Smal populasjon: Kun eldre 65–80 år. Resultatene kan ikke generaliseres til «alle voksne» — yngre voksne kan respondere helt annerledes.\n4. Enkelt utfallsmål: Bare én hukommelsestest er brukt. Ulike typer hukommelse (korttidshukommelse, arbeidshukommelse, episodisk hukommelse) kan påvirkes ulikt.\n5. Manglende informasjon: Er det kontrollert for kosthold, aktivitetsnivå, utdanning og eksisterende helsetilstander?\n\n(c) Konklusjonen er IKKE berettiget. Forfatterne generaliserer fra eldre 65–80 år til «alle voksne» — dette er overfortolkning. En korrekt konklusjon ville vært: «Daglig omega-3-tilskudd i 12 uker var assosiert med bedre score på én hukommelsestest hos et lite utvalg eldre (65–80 år). Større studier med lengre oppfølging er nødvendig for å bekrefte funnet.»',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof2-1-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof2-1-7-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En venn viser deg en nettside som hevder at «mobilstråling forårsaker kreft» og lenker til tre studier. Studie A er en kasus-kontroll-studie (N = 200), studie B er en metaanalyse av 15 kohortstudier, og studie C er en ekspertuttalelse fra én forsker. Studiene A og C støtter påstanden, mens studie B ikke finner noen sammenheng. (a) Ranger de tre studiene etter evidenshierarkiet og begrunn. (b) Hvilken studie bør tillegges mest vekt, og hvorfor? (c) Forklar hvorfor vennens konklusjon om kausal sammenheng kan være feil, selv om to av tre kilder «støtter» den. (d) Hvilke kjennetegn på pseudovitenskapelig argumentasjon kan du identifisere i denne situasjonen?',
        hints: ['Bruk evidenshierarkiet. Tenk på at antall studier som «støtter» noe er mindre viktig enn kvaliteten på studiene.'],
        solution: '(a) Rangering etter evidenshierarkiet (sterkest til svakest):\n1. Studie B — metaanalyse av 15 kohortstudier. Øverste nivå i hierarkiet.\n2. Studie A — kasus-kontroll-studie. Midt i hierarkiet (nivå 4). Kan påvise assosiasjoner, men er sårbar for recall bias.\n3. Studie C — ekspertuttalelse fra én forsker. Nederste nivå i hierarkiet (nivå 7). Én persons mening, uansett hvor kvalifisert.\n\n(b) Studie B (metaanalysen) bør tillegges mest vekt fordi den oppsummerer 15 kohortstudier og gir det mest pålitelige overordnede bildet. Den finner ingen sammenheng — noe som tyder på at mobilstråling sannsynligvis ikke forårsaker kreft. En metaanalyse veier tyngre enn én kasus-kontroll-studie og én ekspertuttalelse til sammen.\n\n(c) Kausal konklusjon kan være feil fordi:\n- Kasus-kontroll-studien (A) kan bare påvise assosiasjon, ikke kausalitet. Den er sårbar for recall bias (personer med kreft kan overrapportere mobilbruk). Studien alene kan ikke bevise årsakssammenheng.\n- Ekspertuttalelsen (C) er ikke empirisk evidens — det er én persons tolkning.\n- At «to av tre» studier støtter noe betyr lite når den sterkeste studien (metaanalysen) peker i motsatt retning. Kvalitet trumfer kvantitet.\n\n(d) Pseudovitenskapelig argumentasjon:\n- Kirsebærplukking: Vennen fremhever de to studiene som støtter påstanden og nedtoner den sterkeste studien som motsier den.\n- Telling av studier: Å telle 2-mot-1 er misvisende — evidenshierarkiet, ikke flertallet, bestemmer tyngden.\n- Mulig appell til autoritet: Ekspertuttalelsen brukes som tung evidens, selv om den er lavest i hierarkiet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport alle kapitler i Seksjon 1
// ============================================================================

export const TOF_2_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TOF_2_1_1,
  CHAPTER_TOF_2_1_2,
  CHAPTER_TOF_2_1_3,
  CHAPTER_TOF_2_1_4,
  CHAPTER_TOF_2_1_5,
  CHAPTER_TOF_2_1_6,
  CHAPTER_TOF_2_1_7,
];
