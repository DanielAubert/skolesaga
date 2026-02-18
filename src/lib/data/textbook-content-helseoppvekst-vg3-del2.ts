/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Helsearbeiderfaget VG3 - Del 2: Helsekompetanse og helsefremmende arbeid
 *
 * Kapittel 2.1-2.6
 * Dekker LK20 kompetansemål for helsearbeiderfaget VG3
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 2: Helsekompetanse og helsefremmende arbeid
// ============================================================================

// ----------------------------------------------------------------------------
// 2.1 Helsekompetanse og helsepedagogikk
// ----------------------------------------------------------------------------

export const CHAPTER_HOV3_2_1: TextbookChapter = {
  id: 'hov3-2-1',
  courseId: 'helseoppvekst-vg3',
  chapterNumber: '2.1',
  title: 'Helsekompetanse og helsepedagogikk',
  description: 'Helselitterasitet, helsepedagogiske metoder, empowerment.',
  estimatedMinutes: 55,
  competenceGoals: [
    'anvende helsepedagogiske metoder i veiledning og opplæring av brukere',
    'tilpasse helseinformasjon til brukerens helsekompetanse',
    'fremme empowerment og mestring hos brukere og pårørende',
  ],
  keyTerms: [
    { term: 'Helsekompetanse', definition: 'Personers evne til å finne, forstå, vurdere og anvende helseinformasjon for å ta gode beslutninger om egen helse.' },
    { term: 'Helselitterasitet', definition: 'Evnen til å lese, forstå og bruke helseinformasjon i hverdagen, inkludert forståelse av medisinsk språk og helsetjenestens organisering.' },
    { term: 'Helsepedagogikk', definition: 'Læren om hvordan man kan tilrettelegge for læring og mestring knyttet til helse og sykdom.' },
    { term: 'Empowerment', definition: 'En prosess der mennesker oppnår større kontroll over beslutninger og handlinger som påvirker egen helse og livssituasjon.' },
    { term: 'Motiverende intervju', definition: 'En samtalemetode som hjelper mennesker å finne sin egen motivasjon for endring gjennom åpne spørsmål, bekreftelse, refleksjon og oppsummering.' },
  ],
  content: [
    {
      id: 'hov3-2-1-intro',
      type: 'text',
      content: `## Helsekompetanse og helsepedagogikk

Som helsefagarbeider er du ikke bare en som utfører praktiske oppgaver. Du er også en viktig veileder og pedagog som hjelper brukere og pårørende med å forstå og håndtere sin helsesituasjon.

Helsekompetanse handler om personers evne til å:

- **Finne** relevant helseinformasjon fra pålitelige kilder
- **Forstå** informasjonen og hva den betyr for dem
- **Vurdere** kvaliteten og relevansen av informasjonen
- **Anvende** informasjonen i egne valg og handlinger

Mange brukere i helsetjenesten har lav helsekompetanse. Forskning viser at opptil en tredjedel av den norske befolkningen har utfordringer med å forstå helseinformasjon. Dette kan føre til feilbruk av medisiner, manglende oppfølging av behandling, og dårligere helseutfall.

Som helsefagarbeider må du tilpasse kommunikasjonen til den enkeltes forutsetninger og bruke helsepedagogiske metoder for å fremme forståelse og mestring.`,
    },
    {
      id: 'hov3-2-1-def-1',
      type: 'definition',
      title: 'Helsekompetanse og helselitterasitet',
      content: `**Helsekompetanse** (health literacy) er et begrep som beskriver personers evne til å navigere i helsesystemet og ta informerte beslutninger om egen helse.

Helsekompetanse har flere nivåer:

**1. Funksjonell helsekompetanse** - grunnleggende evne til å lese og forstå helseinformasjon
**2. Interaktiv helsekompetanse** - evne til å delta aktivt i dialog med helsepersonell og anvende informasjon i nye situasjoner
**3. Kritisk helsekompetanse** - evne til å kritisk vurdere helseinformasjon og ta selvstendige beslutninger

**Faktorer som påvirker helsekompetanse:**
- Utdanningsnivå og leseferdigheter
- Alder og kognitiv funksjon
- Språk og kulturell bakgrunn
- Helsestatus og sykdomsbilde
- Tidligere erfaringer med helsetjenesten
- Tilgang til informasjon og teknologi`,
    },
    {
      id: 'hov3-2-1-example-1',
      type: 'example',
      title: 'Tilpassing av helseinformasjon',
      problem: 'Du skal forklare en eldre bruker med lav utdanning hvordan hun skal bruke en ny inhalasjonsmedikament mot KOLS. Brukeren har aldri brukt inhalator før og virker usikker.',
      solution: `**Helsepedagogisk tilnærming:**

1. **Kartlegg forkunnskaper:** Spør hva brukeren vet om KOLS og medisinene sine fra før
2. **Bruk enkelt språk:** Unngå medisinske faguttrykk. Si «pustespray» i stedet for «inhalasjonsmedikament»
3. **Vis og forklar:** Demonstrer bruk av inhalatoren steg for steg
4. **La brukeren prøve selv:** Veiled mens brukeren øver under tilsyn
5. **Begrens informasjonsmengden:** Fokuser på det viktigste - hvordan bruke den, og når
6. **Bruk teach-back:** Be brukeren forklare tilbake med egne ord hvordan hun skal bruke inhalatoren
7. **Gi skriftlig støtte:** Enkel, illustrert bruksanvisning med store bokstaver
8. **Planlegg oppfølging:** Avtal en ny gjennomgang etter noen dager

Teach-back-metoden er spesielt viktig: «Kan du vise meg hvordan du vil bruke pustesprayen hjemme?»`,
    },
    {
      id: 'hov3-2-1-def-2',
      type: 'definition',
      title: 'Helsepedagogiske metoder',
      content: `**Helsepedagogikk** handler om å tilrettelegge for læring og mestring i helserelaterte situasjoner.

**Viktige helsepedagogiske prinsipper:**

**1. Brukertilpasning** - tilpass informasjon og metode til brukerens forutsetninger, behov og ønsker

**2. Mestringsforventning** - styrk brukerens tro på at han/hun kan mestre situasjonen (self-efficacy)

**3. Aktiv deltakelse** - brukeren lærer best ved å være aktiv i læringsprosessen, ikke passiv mottaker

**4. Relevans** - knytt informasjonen til brukerens hverdag og konkrete situasjoner

**5. Teach-back** - be brukeren gjenfortelle med egne ord for å sikre forståelse

**Sentrale metoder:**
- **Motiverende intervju (MI)** - samtalemetode som styrker indre motivasjon
- **Veiledningssamtalen** - strukturert samtale med fokus på brukerens mål
- **Gruppebasert opplæring** - læring gjennom fellesskap og erfaringsdeling
- **Lærings- og mestringssentre** - tverrfaglige tilbud for pasienter og pårørende`,
    },
    {
      id: 'hov3-2-1-example-2',
      type: 'example',
      title: 'Motiverende intervju i praksis',
      problem: 'En bruker med type 2-diabetes vet at han bør trene mer og spise sunnere, men klarer ikke å endre vanene sine. Han sier: «Jeg vet at jeg burde gjøre noe, men jeg orker ikke.»',
      solution: `**Motiverende intervju (MI) - steg for steg:**

**1. Åpne spørsmål:**
«Hva tenker du selv om sammenhengen mellom kosthold, aktivitet og diabetesen din?»

**2. Bekreftelse:**
«Det at du vet hva som er viktig, og at du tenker på det, viser at du bryr deg om helsen din.»

**3. Refleksjon:**
«Du sier at du orker ikke. Det høres ut som det er noe som hindrer deg. Kan du fortelle mer om det?»

**4. Oppsummering:**
«La meg se om jeg har forstått riktig: Du vet at endringer ville vært bra for deg, men hverdagen gjør det vanskelig. Samtidig merker du at du bekymrer deg mer for helsen. Stemmer det?»

**5. Utforske endringssnakk:**
«Hvis du skulle gjøre én liten endring som du tror du ville klart, hva ville det vært?»

**Viktig:** Ikke fortell brukeren hva han bør gjøre. Hjelp ham å finne sin egen motivasjon.`,
    },
    {
      id: 'hov3-2-1-def-3',
      type: 'definition',
      title: 'Empowerment',
      content: `**Empowerment** (myndiggjøring) er en prosess der mennesker oppnår større kontroll over egen livssituasjon og helse.

**Kjennetegn ved empowerment:**
- Brukeren er ekspert på eget liv
- Helsepersonell er støttespiller, ikke ekspert som bestemmer
- Fokus på ressurser og muligheter, ikke begrensninger
- Brukeren setter egne mål og definerer hva som er viktig
- Makt og ansvar deles mellom bruker og helsepersonell

**Slik fremmer du empowerment:**
- Lytt aktivt og ta brukerens perspektiv på alvor
- Gi informasjon som grunnlag for egne valg, ikke instrukser
- Støtt brukerens egne mestringsstrategier
- Anerkjenn brukerens kompetanse og erfaringer
- Unngå å skape avhengighet av hjelpeapparatet
- Tilrettelegg for at brukeren kan ta mest mulig ansvar selv

**Empowerment er ikke det samme som å overlate brukeren til seg selv.** Det handler om å styrke brukerens evne og tro på at han/hun kan mestre, med den støtten som trengs.`,
    },
    {
      id: 'hov3-2-1-example-3',
      type: 'example',
      title: 'Empowerment i hjemmetjenesten',
      problem: 'Du jobber i hjemmetjenesten og besøker Astrid (74) som har hatt et lårhalsbrudd. Astrid er redd for å falle igjen og vil at du skal gjøre alt for henne - lage mat, rydde, vaske seg.',
      solution: `**Empowerment-tilnærming:**

**1. Anerkjenn følelsene:**
«Jeg forstår at du er redd for å falle igjen. Det er helt naturlig etter det du har vært gjennom.»

**2. Kartlegg ressurser:**
Hva klarte Astrid før bruddet? Hva klarer hun nå med tilrettelegging? Hva motiverer henne?

**3. Sett mål sammen:**
«Hva er viktig for deg å klare selv? Hva ville du ønsket at du kunne gjøre om en måned?»

**4. Tilrettelegg for mestring:**
- Start med små, trygge oppgaver (f.eks. smøre brødskiver sittende)
- Sørg for riktige hjelpemidler (gåstol, sklimatte, gripetang)
- Vær til stede som trygghet mens Astrid øver
- Følg henne ved forflytning med støtte

**5. Ros mestring:**
«Se der - du klarte å lage kaffen selv i dag! Hvordan føles det?»

**6. Gradvis opptrapping:**
Bygg på suksesser - fra enkle til mer krevende oppgaver

Målet er at Astrid gradvis gjenvinner tillit til egen kropp og fungerer så selvstendig som mulig.`,
    },
    {
      id: 'hov3-2-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

Helsekompetanse og helsepedagogikk er sentrale temaer for helsefagarbeidere:

- **Helsekompetanse** handler om personers evne til å finne, forstå, vurdere og anvende helseinformasjon
- **Helselitterasitet** finnes på tre nivåer: funksjonell, interaktiv og kritisk
- **Helsepedagogikk** gir deg verktøy for å tilrettelegge for læring og mestring
- **Teach-back** er en enkel og effektiv metode for å sikre at brukeren har forstått
- **Motiverende intervju** hjelper brukere å finne sin egen motivasjon for endring
- **Empowerment** handler om å styrke brukerens kontroll over eget liv og helse

Som helsefagarbeider er det ditt ansvar å tilpasse kommunikasjonen til den enkeltes forutsetninger og bruke pedagogiske metoder som fremmer mestring og selvstendighet.`,
    },
  ],
  exercises: [
    {
      id: 'hov3-2-1-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva menes med helsekompetanse (health literacy)?',
      options: [
        { id: 'a', text: 'Personers evne til å finne, forstå, vurdere og anvende helseinformasjon for å ta gode beslutninger om egen helse', isCorrect: true },
        { id: 'b', text: 'Helsepersonells faglige kompetanse innen medisin og behandling', isCorrect: false },
        { id: 'c', text: 'Evnen til å lese medisinske tidsskrifter på engelsk', isCorrect: false },
        { id: 'd', text: 'Kunnskap om helsetjenestens økonomiske rammebetingelser', isCorrect: false },
      ],
      solution: 'Helsekompetanse handler om den enkeltes evne til å navigere i helsesystemet, forstå helseinformasjon og bruke denne kunnskapen til å ta gode beslutninger om egen helse. Det er altså brukerens kompetanse, ikke helsepersonellets fagkompetanse.',
    },
    {
      id: 'hov3-2-1-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er teach-back-metoden?',
      options: [
        { id: 'a', text: 'En metode der brukeren gjenforteller med egne ord for å sikre at informasjonen er forstått', isCorrect: true },
        { id: 'b', text: 'En undervisningsmetode der brukeren leser fra en lærebok', isCorrect: false },
        { id: 'c', text: 'En metode der helsepersonell gjentar informasjonen flere ganger', isCorrect: false },
        { id: 'd', text: 'En metode der pårørende lærer opp brukeren hjemme', isCorrect: false },
      ],
      solution: 'Teach-back er en kommunikasjonsmetode der du ber brukeren forklare tilbake med egne ord hva han/hun har forstått. Dette er et effektivt verktøy for å avdekke misforståelser og sikre at viktig helseinformasjon er riktig oppfattet.',
    },
    {
      id: 'hov3-2-1-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilke fire elementer kjennetegner motiverende intervju (MI)?',
      options: [
        { id: 'a', text: 'Åpne spørsmål, bekreftelse, refleksjon og oppsummering', isCorrect: true },
        { id: 'b', text: 'Informasjon, instruksjon, kontroll og evaluering', isCorrect: false },
        { id: 'c', text: 'Diagnose, behandlingsplan, gjennomføring og oppfølging', isCorrect: false },
        { id: 'd', text: 'Kartlegging, vurdering, tiltak og dokumentasjon', isCorrect: false },
      ],
      solution: 'Motiverende intervju bygger på fire grunnleggende elementer: åpne spørsmål (utforsker brukerens tanker), bekreftelse (anerkjenner brukerens styrker), refleksjon (speiler tilbake det brukeren sier) og oppsummering (samler trådene). Disse kalles ofte OARS (Open questions, Affirmations, Reflections, Summaries).',
    },
    {
      id: 'hov3-2-1-ex-4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar begrepet empowerment og gi et konkret eksempel på hvordan du som helsefagarbeider kan fremme empowerment hos en bruker.',
      solution: 'Empowerment (myndiggjøring) er en prosess der brukeren oppnår større kontroll over beslutninger og handlinger som påvirker eget liv og helse. Det handler om å styrke brukerens tro på egen mestring, ikke om å overlate brukeren til seg selv. Eksempel: En bruker med nydiagnostisert diabetes type 2 skal lære å måle blodsukker. I stedet for bare å måle for brukeren, lærer du brukeren å gjøre det selv. Du viser teknikken, lar brukeren prøve under veiledning, og gir positiv tilbakemelding. Sammen lager dere en plan der brukeren gradvis tar over ansvaret for egne målinger. Du spør brukeren hva som er viktigst for henne å mestre, og tilpasser opplæringen etter det.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-2-1-ex-5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv hvordan du ville tilpasset helseinformasjon til en bruker med lav helsekompetanse. Gi minst tre konkrete tiltak.',
      solution: 'Tilpasning av helseinformasjon til brukere med lav helsekompetanse kan gjøres gjennom: 1) Bruk enkelt, hverdagslig språk - si «blodtrykksmedisinen din» i stedet for «antihypertensiva». 2) Begrens informasjonsmengden - gi bare den viktigste informasjonen først, og bygg på etter hvert. 3) Bruk visuell støtte - bilder, illustrasjoner, fargekodet medisinoversikt. 4) Demonstrer og la brukeren øve - praktisk øving er mer effektivt enn muntlig forklaring alene. 5) Bruk teach-back - be brukeren forklare med egne ord for å sjekke forståelsen. 6) Gi skriftlig materiale med enkel tekst og store bokstaver. 7) Planlegg oppfølgingssamtaler for å repetere og bygge videre.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-2-1-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er den viktigste forskjellen mellom empowerment-tilnærmingen og en tradisjonell ekspertmodell i helsetjenesten?',
      options: [
        { id: 'a', text: 'I empowerment er brukeren ekspert på eget liv og setter egne mål, mens i ekspertmodellen bestemmer helsepersonell hva som er best', isCorrect: true },
        { id: 'b', text: 'Empowerment brukes bare for unge brukere, ekspertmodellen for eldre', isCorrect: false },
        { id: 'c', text: 'Empowerment handler om fysisk trening, ekspertmodellen om medisinsk behandling', isCorrect: false },
        { id: 'd', text: 'Det er ingen vesentlig forskjell, begrepene beskriver det samme', isCorrect: false },
      ],
      solution: 'Den avgjørende forskjellen er maktbalansen. I ekspertmodellen er det helsepersonell som definerer problemet, setter mål og bestemmer tiltak. Brukeren er passiv mottaker. I empowerment-tilnærmingen er brukeren ekspert på eget liv, setter egne mål og tar aktiv del i beslutninger. Helsepersonell er støttespiller og tilrettelegger, ikke autoritet som bestemmer.',
    },
  ],
};

// ----------------------------------------------------------------------------
// 2.2 Livskvalitet gjennom livsløpet
// ----------------------------------------------------------------------------

export const CHAPTER_HOV3_2_2: TextbookChapter = {
  id: 'hov3-2-2',
  courseId: 'helseoppvekst-vg3',
  chapterNumber: '2.2',
  title: 'Livskvalitet gjennom livsløpet',
  description: 'Trivsel, mestring, livskvalitet i alle livsfaser.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå hva som påvirker livskvalitet i ulike livsfaser',
    'tilrettelegge for trivsel og mestring i helse- og omsorgstjenesten',
    'vurdere sammenhengen mellom fysisk, psykisk og sosial helse',
  ],
  keyTerms: [
    { term: 'Livskvalitet', definition: 'En persons subjektive opplevelse av tilfredshet med livet, inkludert fysiske, psykiske, sosiale og eksistensielle dimensjoner.' },
    { term: 'Mestring', definition: 'Evnen til å håndtere utfordringer, stress og sykdom på en måte som ivaretar helse og velvære.' },
    { term: 'Salutogenese', definition: 'En tilnærming som fokuserer på hva som fremmer helse og mestring, i motsetning til patogenese som fokuserer på sykdomsårsaker.' },
    { term: 'Opplevelse av sammenheng', definition: 'Aaron Antonovskys begrep (OAS/SOC) som beskriver evnen til å oppleve tilværelsen som begripelig, håndterbar og meningsfull.' },
    { term: 'Livsløpsperspektiv', definition: 'En tilnærming som ser menneskets utvikling og helse i sammenheng med de ulike livsfasene fra fødsel til død.' },
  ],
  content: [
    {
      id: 'hov3-2-2-intro',
      type: 'text',
      content: `## Livskvalitet gjennom livsløpet

Livskvalitet er et sentralt mål i helse- og omsorgstjenestene. Men hva er egentlig livskvalitet? Og hvem bestemmer hva som gir god livskvalitet?

Livskvalitet er subjektivt - det er den enkeltes egen opplevelse som teller. For noen betyr livskvalitet å kunne gå tur i naturen, for andre er det å ha gode relasjoner, og for noen handler det om å klare seg mest mulig selv i hverdagen.

Som helsefagarbeider er det viktig å forstå at:

- **Livskvalitet er individuelt** - du kan ikke definere hva som er god livskvalitet for en annen person
- **Livskvalitet endrer seg** gjennom livsløpet og med endret helsesituasjon
- **Sykdom betyr ikke automatisk dårlig livskvalitet** - mange lever gode liv med kronisk sykdom
- **Trivsel og mestring** er sentrale faktorer for livskvalitet
- **Alle livsfaser** har sine muligheter og utfordringer

Din rolle som helsefagarbeider er å legge til rette for at brukeren kan oppleve best mulig livskvalitet, uavhengig av helsesituasjon og livsfase.`,
    },
    {
      id: 'hov3-2-2-def-1',
      type: 'definition',
      title: 'Livskvalitet - dimensjoner',
      content: `**Livskvalitet** har flere dimensjoner som alle bidrar til den totale opplevelsen:

**1. Fysisk dimensjon**
Fysisk helse, smertefrihet, funksjonsevne, søvn, energi og evne til daglige aktiviteter.

**2. Psykisk dimensjon**
Psykisk velvære, selvfølelse, følelsesmessig balanse, fravær av angst og depresjon.

**3. Sosial dimensjon**
Relasjoner til familie og venner, sosial tilhørighet, opplevelse av å være verdsatt, meningsfulle roller.

**4. Eksistensiell dimensjon**
Opplevelse av mening, verdighet, håp, åndelige og religiøse behov.

**WHO definerer livskvalitet som:**
«Individers oppfatning av sin posisjon i livet sett i sammenheng med den kultur og det verdisystem de lever i, i forhold til deres mål, forventninger, standarder og bekymringer.»

Alle dimensjonene henger sammen. Kroniske smerter (fysisk) kan føre til isolasjon (sosialt), som kan gi depresjon (psykisk), som kan utfordre opplevelsen av mening (eksistensielt).`,
    },
    {
      id: 'hov3-2-2-def-2',
      type: 'definition',
      title: 'Salutogenese og opplevelse av sammenheng',
      content: `**Salutogenese** er en tilnærming utviklet av Aaron Antonovsky som spør: «Hva fremmer helse?» - i motsetning til den tradisjonelle tilnærmingen som spør: «Hva forårsaker sykdom?» (patogenese).

Antonovskys hovedbegrep er **opplevelse av sammenheng** (OAS), som består av tre komponenter:

**1. Begripelighet** - evnen til å forstå det som skjer
Brukeren forstår sin situasjon, diagnose og behandling. Verden oppleves som ordnet og forutsigbar, ikke kaotisk.

**2. Håndterbarhet** - troen på at man har ressurser til å håndtere situasjonen
Brukeren opplever å ha tilstrekkelige ressurser - egne eller tilgjengelige - til å møte utfordringene.

**3. Meningsfullhet** - opplevelsen av at livet er verdt innsatsen
Brukeren opplever at det er verdt å engasjere seg, at utfordringene har mening.

**For deg som helsefagarbeider betyr dette:**
- Gi god informasjon slik at brukeren forstår situasjonen (begripelighet)
- Tilrettelegg for at brukeren opplever mestring (håndterbarhet)
- Hjelp brukeren å finne mening og motivasjon (meningsfullhet)`,
    },
    {
      id: 'hov3-2-2-example-1',
      type: 'example',
      title: 'Livskvalitet ved kronisk sykdom',
      problem: 'Hans (68) har fått diagnosen Parkinsons sykdom. Han er redd og trist. Han sier: «Nå er livet mitt over. Jeg kommer bare til å bli dårligere og dårligere.»',
      solution: `**Salutogen tilnærming - styrke opplevelse av sammenheng:**

**Begripelighet:**
- Gi Hans god informasjon om sykdommen, hva han kan forvente, og hvilke behandlingsmuligheter som finnes
- Informer om at sykdomsforløpet varierer og at mange lever gode liv med Parkinsons i mange år
- Tilby samtale med lege og sykepleier som kan svare på spørsmål

**Håndterbarhet:**
- Kartlegg Hans sine ressurser - hva er han glad i, hva mestrer han?
- Informer om tilgjengelig hjelp: fysioterapi, ergoterapi, hjelpemidler, støttegrupper
- Introduser Parkinson-foreningen som kan gi støtte og fellesskap
- Lag en plan sammen med Hans for hvordan han kan holde seg aktiv

**Meningsfullhet:**
- Spør Hans om hva som gir ham glede og mening i livet
- Hjelp ham å se at han fortsatt kan leve et meningsfullt liv
- Fokuser på hva han kan, ikke bare det han etter hvert vil miste
- Anerkjenn sorgen hans, men gi håp

Målet er at Hans opplever at situasjonen er forståelig, håndterbar og meningsfull.`,
    },
    {
      id: 'hov3-2-2-example-2',
      type: 'example',
      title: 'Mestring i ulike livsfaser',
      problem: 'Du jobber i hjemmetjenesten og har brukere i ulike livsfaser - fra unge voksne med funksjonsnedsettelse til eldre med sammensatte helseproblemer. Hvordan kan du tilrettelegge for mestring i ulike aldersgrupper?',
      solution: `**Mestring tilpasset livsfase:**

**Unge voksne (18-30 år):**
- Fokus på selvstendighet, utdanning og sosial deltakelse
- Tilrettelegg for at brukeren kan leve mest mulig likt jevnaldrende
- Bruk teknologi og digitale hjelpemidler som brukeren er komfortabel med
- Vektlegg brukerens egne mål og drømmer

**Voksne (30-65 år):**
- Fokus på å opprettholde roller (arbeid, familieliv, sosiale nettverk)
- Tilrettelegg for balanse mellom hverdagsforpliktelser og egenomsorg
- Støtt opp under mestringsfølelse i rollen som forelder, partner eller arbeidstaker
- Hjelp med å finne praktiske løsninger for hverdagsutfordringer

**Eldre (65+ år):**
- Fokus på å bevare funksjonsevne og selvstendighet lengst mulig
- Tilrettelegg for aktiviteter som gir mening og glede
- Forebygg ensomhet gjennom sosiale aktiviteter
- Respekter at eldre har levd et langt liv med mye erfaring og kompetanse
- Vær oppmerksom på tap (ektefelle, venner, helse) og behov for å bearbeide sorg`,
    },
    {
      id: 'hov3-2-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

Livskvalitet gjennom livsløpet er et sentralt tema i helse- og oppvekstfag:

- **Livskvalitet er subjektivt** og består av fysiske, psykiske, sosiale og eksistensielle dimensjoner
- **Salutogenese** fokuserer på hva som fremmer helse, ikke bare hva som forårsaker sykdom
- **Opplevelse av sammenheng** (begripelighet, håndterbarhet, meningsfullhet) er avgjørende for mestring
- **Mestring** handler om å håndtere utfordringer på en måte som ivaretar helse og velvære
- **Livsfaser** har ulike utfordringer og behov for tilrettelegging
- **Sykdom betyr ikke automatisk dårlig livskvalitet** - med riktig støtte kan brukere oppleve god livskvalitet

Din jobb er å se hele mennesket, ikke bare diagnosen, og legge til rette for best mulig livskvalitet i den situasjonen brukeren er i.`,
    },
  ],
  exercises: [
    {
      id: 'hov3-2-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilke fire dimensjoner inngår i begrepet livskvalitet?',
      options: [
        { id: 'a', text: 'Fysisk, psykisk, sosial og eksistensiell dimensjon', isCorrect: true },
        { id: 'b', text: 'Medisinsk, teknisk, økonomisk og juridisk dimensjon', isCorrect: false },
        { id: 'c', text: 'Biologisk, kjemisk, fysisk og matematisk dimensjon', isCorrect: false },
        { id: 'd', text: 'Individuell, familiær, samfunnsmessig og global dimensjon', isCorrect: false },
      ],
      solution: 'Livskvalitet har fire sentrale dimensjoner: fysisk (helse, funksjon, smerter), psykisk (velvære, selvfølelse), sosial (relasjoner, tilhørighet) og eksistensiell (mening, verdighet, håp). Alle dimensjonene henger sammen og påvirker hverandre.',
    },
    {
      id: 'hov3-2-2-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er de tre komponentene i Antonovskys begrep «opplevelse av sammenheng» (OAS)?',
      options: [
        { id: 'a', text: 'Begripelighet, håndterbarhet og meningsfullhet', isCorrect: true },
        { id: 'b', text: 'Helse, funksjon og deltakelse', isCorrect: false },
        { id: 'c', text: 'Kunnskap, ferdigheter og holdninger', isCorrect: false },
        { id: 'd', text: 'Forebygging, behandling og rehabilitering', isCorrect: false },
      ],
      solution: 'Antonovskys opplevelse av sammenheng (OAS/SOC) består av begripelighet (å forstå det som skjer), håndterbarhet (troen på at man har ressurser til å håndtere situasjonen) og meningsfullhet (opplevelsen av at livet er verdt innsatsen). Jo sterkere OAS, desto bedre evne til å mestre utfordringer.',
    },
    {
      id: 'hov3-2-2-ex-3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom salutogenese og patogenese, og beskriv hvordan en salutogen tilnærming kan brukes i praksis.',
      solution: 'Patogenese fokuserer på hva som forårsaker sykdom og søker å fjerne risikofaktorer. Salutogenese, utviklet av Aaron Antonovsky, fokuserer på hva som fremmer helse og mestring. I stedet for å spørre «Hva gjør deg syk?» spør salutogenesen «Hva holder deg frisk?». I praksis betyr dette: Når du møter en bruker med kronisk sykdom, fokuserer du ikke bare på sykdommen og begrensningene, men også på brukerens ressurser, styrker og mestringsstrategier. Du kartlegger hva som gir brukeren glede og mening, og tilrettelegger for aktiviteter som styrker disse faktorene. Du hjelper brukeren å forstå situasjonen (begripelighet), oppleve at den er håndterbar, og finne mening i hverdagen.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-2-2-ex-4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Gi eksempler på hvordan du som helsefagarbeider kan tilrettelegge for god livskvalitet hos en eldre beboer på sykehjem.',
      solution: 'Tilrettelegging for livskvalitet hos eldre på sykehjem kan gjøres gjennom alle fire dimensjoner: **Fysisk:** Tilpasset fysisk aktivitet (turgåing, sitteøvelser), god smertebehandling, næringsrik kost tilpasset ønsker. **Psykisk:** Gi valgmuligheter i hverdagen (klesvalg, måltidstidspunkt), respektere rutiner fra livet utenfor, aktiv lytting, tilby meningsfulle aktiviteter. **Sosialt:** Legge til rette for samvær med medbeboere og besøk fra familie, invitere til felles aktiviteter, hjelpe med å opprettholde kontakt via telefon eller videochat. **Eksistensielt:** Vise interesse for beboerens livshistorie, respektere åndelige behov, tilby samtale med prest eller samtalepartner, la beboeren føle seg verdsatt og sett.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-2-2-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvorfor er det viktig at helsefagarbeidere forstår at livskvalitet er subjektivt?',
      options: [
        { id: 'a', text: 'Fordi det er brukeren selv som definerer hva som er god livskvalitet for seg, og helsefagarbeidere må tilpasse tjenestene etter brukerens egne verdier og ønsker', isCorrect: true },
        { id: 'b', text: 'Fordi helsefagarbeidere ikke trenger å bry seg om livskvalitet så lenge den medisinske behandlingen er god', isCorrect: false },
        { id: 'c', text: 'Fordi subjektiv livskvalitet ikke kan påvirkes av helsetjenester', isCorrect: false },
        { id: 'd', text: 'Fordi alle mennesker opplever livskvalitet på nøyaktig samme måte', isCorrect: false },
      ],
      solution: 'At livskvalitet er subjektivt betyr at det er den enkeltes egen opplevelse som er avgjørende. To personer med samme diagnose kan ha helt ulik opplevelse av livskvalitet. En helsefagarbeider kan ikke definere for andre hva som er et godt liv. Derfor må man alltid spørre brukeren hva som er viktig for ham/henne, og tilpasse tjenestene deretter.',
    },
  ],
};

// ----------------------------------------------------------------------------
// 2.3 Bruker- og pasientmedvirkning
// ----------------------------------------------------------------------------

export const CHAPTER_HOV3_2_3: TextbookChapter = {
  id: 'hov3-2-3',
  courseId: 'helseoppvekst-vg3',
  chapterNumber: '2.3',
  title: 'Bruker- og pasientmedvirkning',
  description: 'Brukermedvirkning i praksis, samvalg, individuell plan.',
  estimatedMinutes: 50,
  competenceGoals: [
    'legge til rette for brukermedvirkning på individ- og systemnivå',
    'anvende samvalg som metode i samarbeid med brukere',
    'forstå og bidra til arbeidet med individuell plan',
  ],
  keyTerms: [
    { term: 'Brukermedvirkning', definition: 'Brukerens rett til å delta aktivt i beslutninger om eget tjenestetilbud, behandling og oppfølging.' },
    { term: 'Samvalg', definition: 'En prosess der helsepersonell og bruker sammen tar beslutninger om behandling og tiltak basert på fagkunnskap og brukerens verdier og preferanser.' },
    { term: 'Individuell plan', definition: 'Et verktøy for samordning av tjenester til brukere med behov for langvarige og koordinerte tjenester, der brukerens mål står sentralt.' },
    { term: 'Samtykkekompetanse', definition: 'Evnen til å forstå informasjon om egen helsesituasjon og ta kompetente beslutninger om behandling og tjenester.' },
  ],
  content: [
    {
      id: 'hov3-2-3-intro',
      type: 'text',
      content: `## Bruker- og pasientmedvirkning

Brukermedvirkning er en lovfestet rettighet i norsk helselovgivning. Det betyr at brukere og pasienter har rett til å delta aktivt i beslutninger som angår dem.

Brukermedvirkning handler om mer enn å spørre brukeren hva de ønsker. Det handler om en grunnleggende holdning der brukeren anerkjennes som ekspert på eget liv og egen opplevelse.

Brukermedvirkning foregår på flere nivåer:

- **Individnivå:** Brukeren deltar i beslutninger om eget tjenestetilbud og behandling
- **Tjenestenivå:** Brukere involveres i utforming og evaluering av tjenestene
- **Systemnivå:** Brukerorganisasjoner deltar i politikkutforming og planlegging

For deg som helsefagarbeider er det primært brukermedvirkning på individnivå du jobber med i det daglige. Det innebærer at brukeren skal ha reell innflytelse, ikke bare bli «hørt» uten at det får konsekvenser.`,
    },
    {
      id: 'hov3-2-3-def-1',
      type: 'definition',
      title: 'Brukermedvirkning - lovgrunnlag og prinsipper',
      content: `**Brukermedvirkning** er lovfestet i flere lover:

- **Pasient- og brukerrettighetsloven** § 3-1: Rett til medvirkning
- **Helse- og omsorgstjenesteloven** § 3-10: Brukermedvirkning
- **Psykisk helsevernloven:** Brukerens rett til medvirkning i behandlingen

**Sentrale prinsipper:**
- Brukeren har rett til å medvirke ved gjennomføring av helse- og omsorgstjenester
- Medvirkningen skal tilpasses brukerens evne til å gi og motta informasjon
- Brukeren har rett til informasjon som er nødvendig for å delta i valg
- Barn har rett til å bli hørt, med økende medvirkning med alder

**Forutsetninger for reell brukermedvirkning:**
- Tilstrekkelig og tilpasset informasjon
- Tid til å stille spørsmål og vurdere alternativer
- Trygghet til å si sin mening, også når den avviker fra helsepersonellets anbefaling
- Respekt for brukerens valg, selv når helsepersonell er uenig`,
    },
    {
      id: 'hov3-2-3-def-2',
      type: 'definition',
      title: 'Samvalg',
      content: `**Samvalg** (shared decision-making) er en prosess der helsepersonell og bruker sammen kommer frem til den best mulige beslutningen.

**Samvalg har tre steg:**

**1. Invitasjon til samvalg**
Helsepersonell inviterer brukeren til å delta i beslutningen: «Det finnes flere alternativer her, og jeg ønsker at vi tar denne beslutningen sammen.»

**2. Informasjonsutveksling**
- Helsepersonell deler fagkunnskap om alternativer, fordeler og ulemper
- Brukeren deler sine verdier, preferanser og bekymringer
- Begge parter bidrar med viktig informasjon

**3. Felles beslutning**
Sammen vurderer man alternativene opp mot brukerens verdier og ønsker, og enes om et valg.

**Samvalg er ikke det samme som å overlate valget til brukeren.** Det er et partnerskap der helsepersonellets fagkunnskap og brukerens verdier og erfaringer vektes likt.

**Samvalg er spesielt viktig når:**
- Det finnes flere behandlingsalternativer
- Alternativene har ulike fordeler og ulemper
- Brukerens verdier er avgjørende for hva som er det beste valget`,
    },
    {
      id: 'hov3-2-3-example-1',
      type: 'example',
      title: 'Samvalg i praksis',
      problem: 'Marie (45) har kroniske ryggsmerter og diskuterer behandlingsalternativer med helseteamet. Alternativene er: 1) Smertelindrende medisiner, 2) Fysioterapi og treningsprogram, 3) Operasjon. Marie er usikker på hva hun skal velge.',
      solution: `**Samvalgsprosessen:**

**Steg 1: Invitasjon**
«Marie, det finnes flere veier videre her, og ingen av dem er opplagt best for alle. Jeg ønsker at vi finner ut hva som passer best for deg.»

**Steg 2: Informasjonsutveksling**

*Fagkunnskap:*
- Medisiner kan gi rask smertelindring, men har bivirkninger og løser ikke årsaken
- Fysioterapi er dokumentert effektivt på sikt, men krever innsats over tid
- Operasjon gir raskest resultat, men har risiko for komplikasjoner

*Maries verdier:*
- Hun ønsker å unngå medisinavhengighet
- Hun er villig til å jobbe hardt hvis det hjelper
- Hun er redd for operasjon
- Hun trenger å fungere i jobben sin

**Steg 3: Felles beslutning**
Basert på Maries verdier (vil unngå medisiner, villig til egeninnsats, redd for operasjon) bestemmer de sammen at et intensivt fysioterapiprogram er første valg, med en evaluering etter 3 måneder.`,
    },
    {
      id: 'hov3-2-3-def-3',
      type: 'definition',
      title: 'Individuell plan (IP)',
      content: `**Individuell plan** (IP) er et lovfestet verktøy for brukere med behov for langvarige og koordinerte helse- og omsorgstjenester.

**Formål med individuell plan:**
- Sikre at brukeren får et helhetlig og koordinert tjenestetilbud
- Sette brukerens egne mål i sentrum
- Avklare ansvarsfordeling mellom tjenesteyterne
- Styrke samhandling mellom brukeren, pårørende og tjenesteyterne

**Hvem har rett til individuell plan?**
Brukere med behov for langvarige og koordinerte tjenester fra to eller flere instanser.

**Innholdet i en individuell plan:**
- Brukerens mål og ønsker
- Oversikt over tiltak og tjenester
- Hvem som er ansvarlig for hva
- Tidsplan for oppfølging og evaluering
- Navn på koordinator

**Koordinatorens rolle:**
- Sikre at planen utarbeides og oppdateres
- Koordinere samarbeidet mellom tjenesteyterne
- Være brukerens faste kontaktperson
- Innkalle til samarbeidsmøter

**Brukeren skal medvirke aktivt** i utarbeidelsen av planen. Det er brukerens plan, ikke tjenestenes plan.`,
    },
    {
      id: 'hov3-2-3-example-2',
      type: 'example',
      title: 'Individuell plan i praksis',
      problem: 'Tobias (23) har en psykisk utviklingshemming og bor i en leilighet med tilknyttet personalbase. Han mottar tjenester fra flere instanser og trenger bedre koordinering.',
      solution: `**Utarbeidelse av individuell plan:**

**Tobias sine mål (i hans egne ord):**
1. «Jeg vil jobbe i butikken tre dager i uken»
2. «Jeg vil lære å ta bussen selv»
3. «Jeg vil trene på treningsstudioet»

**Deltakere i planarbeidet:**
- Tobias (bruker)
- Foreldre (pårørende)
- Primærkontakt fra bolig (koordinator)
- Veileder fra arbeidsplassen
- Fysioterapeut
- Fastlege

**Tiltak og ansvar:**
| Mål | Tiltak | Ansvarlig | Frist |
|-----|--------|-----------|-------|
| Jobbe i butikk | Tilrettelegging av arbeidsoppgaver | Arbeidsveileder | Løpende |
| Ta bussen | Trening på bussrute med personal | Primærkontakt | 3 mnd |
| Trene | Tilpasset treningsprogram | Fysioterapeut | 1 mnd |

**Evaluering:** Samarbeidsmøte hver 3. måned med alle involverte.

Tobias er aktivt med og godkjenner planen. Hans stemme veier tyngst - det er hans plan.`,
    },
    {
      id: 'hov3-2-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

Bruker- og pasientmedvirkning er en grunnleggende rettighet og verdi i helsetjenesten:

- **Brukermedvirkning** er lovfestet og foregår på individ-, tjeneste- og systemnivå
- **Samvalg** er en metode der helsepersonell og bruker sammen tar beslutninger basert på fagkunnskap og brukerens verdier
- **Individuell plan** er et verktøy for koordinering av tjenester der brukerens mål står sentralt
- **Samtykkekompetanse** er en forutsetning for at brukeren kan ta informerte valg
- **Reell medvirkning** krever tilpasset informasjon, tid, trygghet og respekt

Som helsefagarbeider har du en viktig rolle i å fremme brukermedvirkning i det daglige arbeidet, ved å lytte til brukeren, informere godt og involvere brukeren i beslutninger.`,
    },
  ],
  exercises: [
    {
      id: 'hov3-2-3-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'På hvilke nivåer foregår brukermedvirkning?',
      options: [
        { id: 'a', text: 'Individnivå, tjenestenivå og systemnivå', isCorrect: true },
        { id: 'b', text: 'Kommunalt nivå, fylkeskommunalt nivå og statlig nivå', isCorrect: false },
        { id: 'c', text: 'Grunnivå, mellomnivå og toppnivå', isCorrect: false },
        { id: 'd', text: 'Personlig nivå, profesjonelt nivå og akademisk nivå', isCorrect: false },
      ],
      solution: 'Brukermedvirkning foregår på tre nivåer: individnivå (brukeren medvirker i egne tjenester), tjenestenivå (brukere involveres i utforming av tjenestene) og systemnivå (brukerorganisasjoner deltar i politikkutforming). For helsefagarbeidere er individnivået det mest dagligdagse.',
    },
    {
      id: 'hov3-2-3-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er de tre stegene i samvalgsprosessen?',
      options: [
        { id: 'a', text: 'Invitasjon til samvalg, informasjonsutveksling og felles beslutning', isCorrect: true },
        { id: 'b', text: 'Kartlegging, diagnose og behandlingsplan', isCorrect: false },
        { id: 'c', text: 'Vurdering, tiltak og evaluering', isCorrect: false },
        { id: 'd', text: 'Informasjon, samtykke og gjennomføring', isCorrect: false },
      ],
      solution: 'Samvalg består av tre steg: 1) Invitasjon - helsepersonell inviterer brukeren til å delta i beslutningen, 2) Informasjonsutveksling - fagkunnskap og brukerens verdier deles, 3) Felles beslutning - sammen vurderer man alternativene og enes om et valg.',
    },
    {
      id: 'hov3-2-3-ex-3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva en individuell plan (IP) er, hvem som har rett til den, og hva som er koordinatorens rolle.',
      solution: 'En individuell plan (IP) er et lovfestet verktøy for brukere med behov for langvarige og koordinerte tjenester fra to eller flere instanser. Planen skal sikre at brukeren får et helhetlig tjenestetilbud der brukerens egne mål står i sentrum. Innholdet omfatter brukerens mål, oversikt over tiltak og tjenester, ansvarsfordeling og tidsplan for evaluering. Koordinatoren er brukerens faste kontaktperson som sørger for at planen utarbeides og oppdateres, koordinerer samarbeidet mellom de ulike tjenesteyterne, og innkaller til samarbeidsmøter. Brukeren skal medvirke aktivt i utarbeidelsen - det er brukerens plan.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-2-3-ex-4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv en situasjon der samvalg ville vært spesielt nyttig, og forklar hvordan du ville gjennomført samvalgsprosessen.',
      solution: 'Eksempel: En eldre bruker med artrose i kneet kan velge mellom smertestillende medikamenter, fysioterapi eller kneprotese. Samvalg er nyttig her fordi alle alternativene har ulike fordeler og ulemper, og brukerens verdier er avgjørende. Gjennomføring: 1) Invitasjon: «Vi har flere muligheter, og jeg ønsker at vi finner den beste løsningen for deg.» 2) Informasjonsutveksling: Legen forklarer fordeler og ulemper med hvert alternativ. Brukeren forteller at hun er redd for operasjon, men trenger smertelindring for å kunne gå tur med barnebarna. 3) Felles beslutning: Basert på brukerens ønske om å unngå operasjon og behovet for smertelindring, bestemmer de sammen å starte med en kombinasjon av fysioterapi og skånsomme medikamenter, med evaluering etter 8 uker.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-2-3-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er den viktigste forskjellen mellom samvalg og at brukeren bestemmer alene?',
      options: [
        { id: 'a', text: 'Samvalg er et partnerskap der fagkunnskap og brukerens verdier vektes likt, mens å la brukeren bestemme alene mangler den faglige dimensjonen', isCorrect: true },
        { id: 'b', text: 'Det er ingen forskjell - samvalg betyr at brukeren bestemmer selv', isCorrect: false },
        { id: 'c', text: 'Samvalg tar lengre tid, men resultatet er det samme', isCorrect: false },
        { id: 'd', text: 'Samvalg brukes bare ved alvorlig sykdom, ellers bestemmer brukeren selv', isCorrect: false },
      ],
      solution: 'Samvalg er et partnerskap der helsepersonell bidrar med fagkunnskap om alternativer, fordeler og risikoer, mens brukeren bidrar med sine verdier, preferanser og livssituasjon. Sammen kommer de frem til den beste beslutningen. Å overlate valget helt til brukeren (informert valg) mangler den faglige dimensjonen og kan føre til at brukeren tar beslutninger uten tilstrekkelig forståelse av konsekvensene.',
    },
  ],
};

// ----------------------------------------------------------------------------
// 2.4 Aktivitet, kosthold og ernæring
// ----------------------------------------------------------------------------

export const CHAPTER_HOV3_2_4: TextbookChapter = {
  id: 'hov3-2-4',
  courseId: 'helseoppvekst-vg3',
  chapterNumber: '2.4',
  title: 'Aktivitet, kosthold og ernæring',
  description: 'Fysisk aktivitet, ernæring for ulike grupper, kostholdsplanlegging.',
  estimatedMinutes: 55,
  competenceGoals: [
    'veilede brukere om sammenhengen mellom fysisk aktivitet, kosthold og helse',
    'tilrettelegge for tilpasset fysisk aktivitet for ulike brukergrupper',
    'vurdere ernæringsstatus og iverksette forebyggende tiltak mot underernæring',
  ],
  keyTerms: [
    { term: 'Ernæringsstatus', definition: 'En persons tilstand med hensyn til inntak, opptak og utnyttelse av næringsstoffer, samt kroppens sammensetning og funksjon.' },
    { term: 'Underernæring', definition: 'En tilstand der kroppen ikke får tilstrekkelig energi og næringsstoffer til å opprettholde normal funksjon og helse.' },
    { term: 'BMI', definition: 'Body Mass Index - et mål på forholdet mellom kroppsvekt og høyde som brukes til å vurdere vektstatus (kg/m²).' },
    { term: 'Helsedirektoratets kostråd', definition: 'Nasjonale anbefalinger for kosthold og fysisk aktivitet som er basert på den beste tilgjengelige forskningen.' },
    { term: 'Ernæringsscreening', definition: 'En systematisk kartlegging av en persons risiko for underernæring, for eksempel ved bruk av verktøyet MNA (Mini Nutritional Assessment).' },
  ],
  content: [
    {
      id: 'hov3-2-4-intro',
      type: 'text',
      content: `## Aktivitet, kosthold og ernæring

Fysisk aktivitet og riktig ernæring er to av de viktigste faktorene for god helse gjennom hele livsløpet. Som helsefagarbeider har du en sentral rolle i å veilede, motivere og tilrettelegge for gode kost- og aktivitetsvaner hos brukerne dine.

Betydningen av kosthold og aktivitet gjelder alle aldersgrupper og helsetilstander:

- **Forebygging:** Riktig kosthold og fysisk aktivitet forebygger livsstilssykdommer som diabetes, hjerte-karsykdom og overvekt
- **Behandling:** Kosthold og aktivitet er viktige deler av behandlingen ved mange sykdommer
- **Rehabilitering:** Etter sykdom og skade er tilpasset aktivitet og ernæring avgjørende for god rehabilitering
- **Livskvalitet:** Aktivitet og godt kosthold bidrar til bedre humør, søvn, energi og generell livskvalitet

Underernæring er et stort problem blant eldre i helsetjenesten. Forskning viser at opptil 45 % av eldre på sykehjem er underernært eller i risiko for underernæring. Som helsefagarbeider må du kunne gjenkjenne risikoen og sette inn tiltak.`,
    },
    {
      id: 'hov3-2-4-def-1',
      type: 'definition',
      title: 'Fysisk aktivitet - anbefalinger og tilpasning',
      content: `**Helsedirektoratets anbefalinger for voksne:**

- Minst 150 minutter moderat intensitet per uke (f.eks. rask gåing) eller 75 minutter høy intensitet
- Muskelstyrkeøvelser minst to ganger per uke
- Redusere stillesitting og bryte opp lange perioder med inaktivitet

**For eldre (65+) anbefales i tillegg:**
- Balansetrening for å forebygge fall
- Funksjonell trening som styrker evnen til daglige aktiviteter

**Tilpasning av fysisk aktivitet:**

Aktiviteten skal alltid tilpasses brukerens helsetilstand, funksjonsnivå og ønsker:

**Ved hjerte-karsykdom:** Moderat intensitet, unngå overbelastning, samråd med lege
**Ved diabetes:** Regelmessig aktivitet som bidrar til blodsukkerkontroll
**Ved KOLS:** Pusteøvelser, tilpasset utholdenhet og styrketrening
**Ved demens:** Enkle, kjente aktiviteter, turgåing, musikk og bevegelse
**Ved funksjonsnedsettelse:** Tilpassede øvelser, bruk av hjelpemidler, kreative løsninger

**Husk:** Noe aktivitet er alltid bedre enn ingen aktivitet. Start med det brukeren mestrer og bygg derfra.`,
    },
    {
      id: 'hov3-2-4-example-1',
      type: 'example',
      title: 'Tilrettelegging for fysisk aktivitet på sykehjem',
      problem: 'Du jobber på et sykehjem og mange av beboerne sitter stille store deler av dagen. Ledelsen ønsker at dere skal tilrettelegge for mer fysisk aktivitet. Hvordan kan du bidra?',
      solution: `**Tiltak for økt fysisk aktivitet:**

**Hverdagsaktivitet:**
- La beboerne gjøre mest mulig selv under morgenstellet (mestring + aktivitet)
- Oppfordre til å gå til spisesalen i stedet for å bruke rullestol
- La beboere som kan, delta i enkle huslige gjøremål (dekke bord, brette tøy)

**Organiserte aktiviteter:**
- Daglig sitteøvelser i fellesarealet (10-15 min)
- Ukentlig stolgymnastikk med musikk
- Turgåing i hagen med personal
- Ballong- eller ballaktiviteter

**Individuelt tilpasset:**
- Kartlegg hva beboeren likte å gjøre tidligere
- Tilpass aktiviteten til funksjonsnivå og interesser
- Sett realistiske mål sammen med beboeren
- Dokumenter aktivitet i tiltaksplanen

**Sikkerhetstenking:**
- Vurder fallrisiko før aktivitet
- Ha hjelpemidler tilgjengelig
- Start forsiktig og øk gradvis
- Kjenn til beboerens medisiner og helsetilstand

**Motivasjon:** Bruk sosiale aktiviteter - fellesskap motiverer mer enn trening alene.`,
    },
    {
      id: 'hov3-2-4-def-2',
      type: 'definition',
      title: 'Ernæring og ernæringsbehov',
      content: `**Ernæring** handler om næringsstoffene kroppen trenger for å fungere optimalt.

**Makronæringsstoffer:**
- **Karbohydrater:** Kroppens viktigste energikilde (45-60 % av energiinntaket)
- **Proteiner:** Bygger og reparerer muskler og vev (10-20 % av energiinntaket)
- **Fett:** Energi, cellemembraner, opptak av fettløselige vitaminer (25-40 % av energiinntaket)

**Mikronæringsstoffer:** Vitaminer og mineraler i små mengder, men livsviktige for kroppens funksjoner.

**Væske:** Anbefalt inntak er ca. 1,5-2 liter per dag for voksne.

**Særlige ernæringsbehov i helsetjenesten:**

**Eldre:**
- Økt behov for protein og vitamin D
- Redusert appetitt og smaksopplevelse
- Risiko for dehydrering

**Ved sår og skader:**
- Økt behov for protein, vitamin C og sink for sårtilheling

**Ved underernæring:**
- Næringstett kost med mange måltider
- Næringsdrikker som supplement
- Følg opp vekt og matinntak systematisk`,
    },
    {
      id: 'hov3-2-4-example-2',
      type: 'example',
      title: 'Ernæringsscreening og tiltak',
      problem: 'Borghild (87) bor på sykehjem. Du legger merke til at hun spiser lite og har gått ned 3 kilo den siste måneden. Hun sier at maten ikke smaker godt og at hun ikke er sulten.',
      solution: `**Systematisk ernæringsoppfølging:**

**1. Ernæringsscreening:**
- Bruk et screeningverktøy som MNA (Mini Nutritional Assessment)
- Registrer vekt, høyde, BMI
- Dokumenter vektnedgang over tid (3 kg på 1 måned er bekymringsfullt)
- Vurder matinntak - spiser Borghild opp måltidene?

**2. Kartlegg årsaker:**
- Tannproblemer eller sår i munnen?
- Medisiner som påvirker appetitt eller smak?
- Depresjon eller sorg?
- Svelgevansker?
- Mistrivsel med maten (type, konsistens, presentasjon)?
- Sosial situasjon under måltidene - spiser hun alene?

**3. Tiltak:**
- Tilby mat som Borghild liker og er vant til
- Gi små, hyppige måltider (6 per dag) med høyt næringsinnhold
- Berik maten med fløte, smør, olje for ekstra kalorier
- Tilby næringsdrikker mellom måltidene
- Sørg for trivelig måltidsmiljø (pent dekket bord, selskap)
- Vurder konsistenstilpasning hvis svelgevansker
- Meld fra til sykepleier og lege

**4. Oppfølging:**
- Vei Borghild ukentlig og dokumenter
- Registrer matinntak i noen dager
- Evaluer tiltakene etter 2 uker`,
    },
    {
      id: 'hov3-2-4-def-3',
      type: 'definition',
      title: 'Kostholdsplanlegging for ulike grupper',
      content: `**Kostholdsplanlegging** innebærer å tilrettelegge for at brukere får dekket sine ernæringsbehov.

**Helsedirektoratets kostråd:**
- Spis minst 5 porsjoner grønnsaker, frukt og bær daglig
- Velg grove kornprodukter
- Spis fisk 2-3 ganger i uken
- Velg magre meieriprodukter
- Begrens rødt kjøtt og bearbeidede kjøttprodukter
- Velg matoljer og myk margarin
- Begrens mat og drikke med mye sukker og salt

**Tilpasning til ulike brukergrupper:**

**Diabetes:** Jevnt fordelte måltider, begrens raske karbohydrater, fokus på fiber og fullkorn
**Hjerte-karsykdom:** Begrens salt og mettet fett, spis mye fisk, frukt og grønnsaker
**Nyresykdom:** Begrens protein, kalium og fosfor (etter legens anvisning)
**Dysfagi (svelgevansker):** Konsistenstilpasset kost - moset, findelt eller tyntflytende
**Allergier/intoleranser:** Unngå allergener, sikre at ernæringsbehov dekkes med alternativer

**Kulturelle hensyn:** Respekter kostholdstradisjoner knyttet til religion og kultur (halal, kosher, vegetarisme).`,
    },
    {
      id: 'hov3-2-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

Aktivitet, kosthold og ernæring er sentrale temaer for helsefagarbeidere:

- **Fysisk aktivitet** skal tilpasses brukerens helsetilstand, funksjonsnivå og ønsker
- **Hverdagsaktivitet** er viktig - la brukeren gjøre mest mulig selv
- **Underernæring** er et alvorlig og utbredt problem, særlig blant eldre i helsetjenesten
- **Ernæringsscreening** skal gjennomføres systematisk for å avdekke risiko
- **Kostholdsplanlegging** må tilpasses brukerens sykdom, behov og kulturelle bakgrunn
- **Måltidsmiljø** har stor betydning for matinntak og trivsel

Som helsefagarbeider har du et ansvar for å observere, tilrettelegge og melde fra når du ser tegn til mangelfullt kosthold eller inaktivitet hos brukerne dine.`,
    },
  ],
  exercises: [
    {
      id: 'hov3-2-4-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er Helsedirektoratets anbefaling for fysisk aktivitet for voksne per uke?',
      options: [
        { id: 'a', text: 'Minst 150 minutter moderat intensitet eller 75 minutter høy intensitet', isCorrect: true },
        { id: 'b', text: 'Minst 60 minutter høy intensitet daglig', isCorrect: false },
        { id: 'c', text: 'Minst 30 minutter lett aktivitet tre ganger per uke', isCorrect: false },
        { id: 'd', text: 'Minst 300 minutter moderat intensitet daglig', isCorrect: false },
      ],
      solution: 'Helsedirektoratet anbefaler minst 150 minutter moderat intensitet (som rask gåing) eller 75 minutter høy intensitet per uke for voksne. I tillegg anbefales muskelstyrkeøvelser minst to ganger per uke.',
    },
    {
      id: 'hov3-2-4-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er ernæringsscreening?',
      options: [
        { id: 'a', text: 'En systematisk kartlegging av en persons risiko for underernæring', isCorrect: true },
        { id: 'b', text: 'En blodprøve som måler alle vitaminer og mineraler', isCorrect: false },
        { id: 'c', text: 'En kostholdsplan laget av ernæringsfysiolog', isCorrect: false },
        { id: 'd', text: 'En matdagbok som brukeren fører selv', isCorrect: false },
      ],
      solution: 'Ernæringsscreening er en systematisk kartlegging av en persons risiko for underernæring. Den gjøres ved hjelp av validerte verktøy som MNA (Mini Nutritional Assessment) og inkluderer vurdering av vekt, vektendring, matinntak og helsetilstand.',
    },
    {
      id: 'hov3-2-4-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilke næringsstoffer har eldre et økt behov for?',
      options: [
        { id: 'a', text: 'Protein og vitamin D', isCorrect: true },
        { id: 'b', text: 'Karbohydrater og jern', isCorrect: false },
        { id: 'c', text: 'Fett og kalsium', isCorrect: false },
        { id: 'd', text: 'Sukker og salt', isCorrect: false },
      ],
      solution: 'Eldre har økt behov for protein (for å motvirke muskeltap) og vitamin D (fordi de er mindre ute i sollys og kroppen produserer mindre vitamin D med alderen). Mange eldre har også risiko for dehydrering og trenger påminnelse om å drikke tilstrekkelig.',
    },
    {
      id: 'hov3-2-4-ex-4',
      type: 'classic',
      difficulty: 'medium',
      task: 'En eldre beboer på sykehjem har gått ned 4 kilo den siste måneden. Beskriv hvordan du ville kartlagt situasjonen og hvilke tiltak du ville foreslått.',
      solution: 'Kartlegging: 1) Gjennomfør ernæringsscreening med verktøy som MNA - vurder BMI, vektnedgang, matinntak. 2) Sjekk om beboeren har tann-/munnproblemer eller svelgevansker. 3) Vurder om medisiner kan påvirke appetitt. 4) Sjekk om det kan være depresjon, sorg eller mistrivsel. 5) Observer matinntaket ved måltidene i noen dager. Tiltak: 1) Tilby mat beboeren liker, i små porsjoner, opptil 6 måltider daglig. 2) Berik maten med smør, fløte eller olje for ekstra kalorier. 3) Tilby næringsdrikker mellom måltidene. 4) Sørg for trivelig måltidsmiljø med selskap. 5) Vei beboeren ukentlig og dokumenter. 6) Meld fra til sykepleier og lege slik at videre utredning kan gjøres.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-2-4-ex-5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv hvordan du kan tilrettelegge for fysisk aktivitet hos en eldre beboer med begynnende demens.',
      solution: 'Tilrettelegging for fysisk aktivitet ved demens: 1) Bruk kjente aktiviteter som beboeren likte tidligere (f.eks. gåturer, dans, hagearbeid). 2) Gi enkle, korte instruksjoner og vis heller enn å forklare. 3) Gjør aktiviteten sosial - gå sammen, gjør øvelser i gruppe. 4) Bruk musikk som motivasjon under aktiviteten. 5) Ha en fast rutine for aktiviteten - regelmessighet gir trygghet. 6) Start med korte økter (10-15 min) og øk gradvis. 7) Tilpass intensiteten til dagsformen - noen dager er bedre enn andre. 8) Sørg for sikkerhet - vurder fallrisiko, bruk riktig fottøy, gå på trygge stier. 9) Gi positiv tilbakemelding og ros mestring. 10) Dokumenter aktiviteten i tiltaksplanen.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-2-4-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvorfor er underernæring et spesielt stort problem blant eldre i helsetjenesten?',
      options: [
        { id: 'a', text: 'Fordi eldre ofte har redusert appetitt, endret smaksopplevelse, sykdommer som påvirker matinntak, og medisinbivirkninger som kan hemme appetitt', isCorrect: true },
        { id: 'b', text: 'Fordi eldre har lavere energibehov og derfor ikke trenger like mye mat', isCorrect: false },
        { id: 'c', text: 'Fordi helsetjenesten alltid serverer dårlig mat', isCorrect: false },
        { id: 'd', text: 'Fordi eldre bevisst velger å spise lite for å spare penger', isCorrect: false },
      ],
      solution: 'Underernæring blant eldre skyldes en kombinasjon av fysiologiske, medisinske og sosiale faktorer: redusert appetitt og smaksopplevelse med alderen, sykdommer som påvirker matinntak og næringsopptak, medisiner som gir kvalme eller endret smak, tannproblemer, svelgevansker, depresjon, ensomhet og kognitiv svikt. Forskning viser at opptil 45 % av eldre på sykehjem er underernært eller i risiko for det.',
    },
  ],
};

// ----------------------------------------------------------------------------
// 2.5 Frivillige organisasjoner og helsefremmende tiltak
// ----------------------------------------------------------------------------

export const CHAPTER_HOV3_2_5: TextbookChapter = {
  id: 'hov3-2-5',
  courseId: 'helseoppvekst-vg3',
  chapterNumber: '2.5',
  title: 'Frivillige organisasjoner og helsefremmende tiltak',
  description: 'Samarbeid med frivillige, helsefremmende tiltak.',
  estimatedMinutes: 45,
  competenceGoals: [
    'samarbeide med frivillige organisasjoner og aktører i det helsefremmende arbeidet',
    'planlegge og gjennomføre helsefremmende tiltak i samarbeid med brukere',
    'forstå frivillighetens rolle i helse- og omsorgstjenestene',
  ],
  keyTerms: [
    { term: 'Helsefremmende arbeid', definition: 'Tiltak som styrker folks helse og trivsel ved å fokusere på ressurser og positive faktorer, ikke bare fravær av sykdom.' },
    { term: 'Frivillig arbeid', definition: 'Ulønnet innsats som utføres av enkeltpersoner eller organisasjoner til beste for andre eller samfunnet.' },
    { term: 'Folkehelsearbeid', definition: 'Samfunnets samlede innsats for å fremme helse, forebygge sykdom og utjevne sosiale helseforskjeller.' },
    { term: 'Samskaping', definition: 'En arbeidsform der offentlige tjenester og frivillige aktører sammen utvikler og gjennomfører tiltak for bedre helse og velferd.' },
  ],
  content: [
    {
      id: 'hov3-2-5-intro',
      type: 'text',
      content: `## Frivillige organisasjoner og helsefremmende tiltak

Helsefremmende arbeid handler om mer enn å behandle sykdom. Det handler om å skape betingelser som gjør det mulig for mennesker å leve gode og meningsfulle liv.

I Norge har frivillige organisasjoner en lang tradisjon for å bidra til helse og velferd. Frivilligheten er en viktig del av det norske velferdssamfunnet og utgjør et nødvendig supplement til de offentlige tjenestene.

Som helsefagarbeider bør du kjenne til:

- **Hva helsefremmende arbeid innebærer** og hvorfor det er viktig
- **Hvilke frivillige organisasjoner** som finnes i ditt nærområde
- **Hvordan du kan samarbeide** med frivillige til beste for brukerne
- **Forskjellen mellom helsefremmende arbeid og forebygging**

Helsefremmende arbeid fokuserer på det positive - hva som styrker helse og trivsel. Forebygging fokuserer på å hindre at sykdom oppstår eller forverres. Begge er viktige, men de har ulik innfallsvinkel.`,
    },
    {
      id: 'hov3-2-5-def-1',
      type: 'definition',
      title: 'Helsefremmende arbeid og folkehelsearbeid',
      content: `**Helsefremmende arbeid** bygger på Ottawa-charteret (WHO, 1986) som definerer det som «prosessen som setter folk i stand til å øke kontroll over og forbedre sin helse».

**Fem strategier fra Ottawa-charteret:**
1. **Bygge en sunn offentlig politikk** - helse i alle politikkområder
2. **Skape støttende miljøer** - fysiske og sosiale omgivelser som fremmer helse
3. **Styrke lokalmiljøets handlingsmuligheter** - involvere lokalsamfunnet
4. **Utvikle personlige ferdigheter** - helseopplysning og mestringsevne
5. **Reorientere helsetjenestene** - fra sykdomsbehandling mot helsefremmende arbeid

**Folkehelsearbeid** er samfunnets samlede innsats for å:
- Fremme befolkningens helse og trivsel
- Forebygge psykisk og fysisk sykdom, skade eller lidelse
- Utjevne sosiale helseforskjeller

**Folkehelseloven** (2012) pålegger kommunene ansvar for folkehelsearbeid. Dette inkluderer å ha oversikt over helsetilstanden og samarbeide med frivillige organisasjoner.`,
    },
    {
      id: 'hov3-2-5-def-2',
      type: 'definition',
      title: 'Frivillige organisasjoner i helse- og omsorgstjenesten',
      content: `**Frivillige organisasjoner** spiller en viktig rolle i det norske helse- og velferdsarbeidet.

**Eksempler på frivillige organisasjoner innen helse:**
- **Røde Kors** - besøkstjeneste, aktiviteter for eldre, flyktningehjelp
- **Norske Kvinners Sanitetsforening** - demensarbeid, ensomhetsbekjempelse
- **Kirkens Bymisjon** - lavterskeltilbud, rusomsorg, psykisk helse
- **Mental Helse** - brukerorganisasjon for psykisk helse
- **Nasjonalforeningen for folkehelsen** - demensforening, hjerte-lungforening
- **Kreftforeningen** - pasientstøtte, rådgivning, forskning
- **Frivilligsentralene** - lokale møteplasser og aktivitetstilbud

**Hva kan frivillige bidra med?**
- Sosial kontakt og fellesskap (besøkstjeneste, aktiviteter)
- Praktisk hjelp (handlehjelp, kjøring, følgetjeneste)
- Kompetanse og erfaringsdeling (likepersonsarbeid)
- Kulturelle og sosiale aktiviteter
- Interessepolitisk arbeid og brukermedvirkning

**Viktig å huske:**
Frivillige erstatter ikke profesjonelle helsearbeidere. De utfyller og beriker tjenestetilbudet. Frivillige skal ikke utføre helsefaglige oppgaver.`,
    },
    {
      id: 'hov3-2-5-example-1',
      type: 'example',
      title: 'Samarbeid med frivillige på sykehjem',
      problem: 'Du jobber på et sykehjem der mange beboere er ensomme. Hvordan kan du tilrettelegge for samarbeid med frivillige organisasjoner for å bedre beboernes livskvalitet?',
      solution: `**Plan for samarbeid med frivillige:**

**1. Kartlegg behov:**
- Hvilke beboere ønsker mer sosial kontakt?
- Hvilke aktiviteter savner beboerne?
- Når på dagen er behovet størst?

**2. Kontakt frivillige organisasjoner:**
- Røde Kors besøkstjeneste - frivillige som besøker ensomme beboere
- Sanitetsforeningen - trivselsaktiviteter og fellesskap
- Frivilligsentralen - lokale frivillige med ulik kompetanse
- Musikkgrupper, dyreklubber, barnehagebarn

**3. Tilrettelegg for samarbeidet:**
- Gi frivillige en god mottakelse og informasjon om avdelingen
- Avklar roller - hva frivillige kan og ikke kan gjøre
- Sørg for at frivillige kjenner til taushetsplikt
- Lag en plan for regelmessige aktiviteter

**4. Eksempler på aktiviteter:**
- Ukentlig sangstund med frivillige musikere
- Besøksvenn som kommer fast hver uke
- Lesegruppe drevet av frivillige
- Turgruppe med frivillige følgere
- Barnehagebarn på besøk for generasjonsmøte

**5. Evaluer og følg opp:**
- Spør beboerne om de trives med tilbudene
- Gi frivillige tilbakemelding og anerkjennelse
- Juster tilbudet etter behov`,
    },
    {
      id: 'hov3-2-5-example-2',
      type: 'example',
      title: 'Helsefremmende tiltak i hjemmetjenesten',
      problem: 'Du jobber i hjemmetjenesten og ser at flere av brukerne er isolerte og inaktive. Hvordan kan du bidra til helsefremmende tiltak?',
      solution: `**Helsefremmende tiltak for hjemmeboende:**

**Kartlegg ressurser i nærmiljøet:**
- Frivilligsentralen - tilbyr ofte aktiviteter, handletjeneste og sosiale treff
- Eldresenter eller aktivitetssenter i kommunen
- Demensforeningen - tilbud for personer med demens og pårørende
- Kirken/moskeen/synagogen - fellesskap og sosiale aktiviteter

**Tiltak på individnivå:**
- Informer brukerne om tilbudene som finnes
- Hjelp med å ta kontakt (ringe, følge første gang)
- Motiver brukere til å prøve nye aktiviteter
- Tilrettelegg for at brukeren kan delta (transport, hjelpemidler)

**Tiltak på gruppenivå:**
- Foreslå turgruppe for hjemmeboende brukere
- Initier matlagingsgruppe eller kafe-treff
- Samarbeid med fysioterapeut om trimgruppe

**Dokumenter og meld fra:**
- Hvis du ser at mange brukere har samme behov, meld dette videre til leder
- Foreslå samarbeid med frivillige organisasjoner
- Del gode erfaringer med kolleger

**Husk:** Ditt engasjement kan gjøre en stor forskjell. Å koble en ensom bruker med en besøksvenn kan forandre hverdagen.`,
    },
    {
      id: 'hov3-2-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

Frivillige organisasjoner og helsefremmende tiltak er viktige deler av helsetjenesten:

- **Helsefremmende arbeid** fokuserer på å styrke helse og trivsel, ikke bare behandle sykdom
- **Ottawa-charteret** gir fem strategier for helsefremmende arbeid
- **Frivillige organisasjoner** utfyller og beriker de offentlige tjenestene
- **Samarbeid med frivillige** krever god tilrettelegging, avklarte roller og gjensidig respekt
- **Folkehelseloven** pålegger kommunene ansvar for folkehelsearbeid
- **Frivillige erstatter ikke profesjonelle**, men gir verdifulle bidrag til livskvalitet

Som helsefagarbeider bør du kjenne til frivillige tilbud i ditt nærområde og aktivt koble brukere med relevante tilbud.`,
    },
  ],
  exercises: [
    {
      id: 'hov3-2-5-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er helsefremmende arbeid?',
      options: [
        { id: 'a', text: 'Tiltak som styrker folks helse og trivsel ved å fokusere på ressurser og positive faktorer', isCorrect: true },
        { id: 'b', text: 'Behandling av sykdommer på sykehus', isCorrect: false },
        { id: 'c', text: 'Vaksinering av hele befolkningen', isCorrect: false },
        { id: 'd', text: 'Utdanning av helsepersonell', isCorrect: false },
      ],
      solution: 'Helsefremmende arbeid handler om å styrke folks helse og trivsel gjennom å fokusere på ressurser og positive faktorer. Det bygger på Ottawa-charteret (WHO, 1986) som definerer det som prosessen som setter folk i stand til å øke kontroll over og forbedre sin helse.',
    },
    {
      id: 'hov3-2-5-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er den viktigste forskjellen mellom helsefremmende arbeid og forebygging?',
      options: [
        { id: 'a', text: 'Helsefremmende arbeid fokuserer på hva som styrker helse, forebygging fokuserer på å hindre sykdom', isCorrect: true },
        { id: 'b', text: 'Helsefremmende arbeid er billigere enn forebygging', isCorrect: false },
        { id: 'c', text: 'Helsefremmende arbeid gjøres av frivillige, forebygging av helsepersonell', isCorrect: false },
        { id: 'd', text: 'Det er ingen forskjell mellom helsefremmende arbeid og forebygging', isCorrect: false },
      ],
      solution: 'Helsefremmende arbeid har en salutogen tilnærming - det fokuserer på hva som fremmer og styrker helse (positive faktorer, ressurser, mestring). Forebygging har en patogen tilnærming - det fokuserer på å hindre at sykdom oppstår eller forverres (risikofaktorer). Begge er viktige, men de har ulik innfallsvinkel.',
    },
    {
      id: 'hov3-2-5-ex-3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv hvordan du som helsefagarbeider kan samarbeide med frivillige organisasjoner for å bedre livskvaliteten til brukere som er ensomme.',
      solution: 'Samarbeid med frivillige organisasjoner: 1) Kartlegg brukerens behov og ønsker - hva slags sosial kontakt ønsker brukeren? 2) Finn relevante frivillige tilbud i nærmiljøet, for eksempel Røde Kors besøkstjeneste, frivilligsentralen eller eldresenteret. 3) Hjelp brukeren med å ta kontakt - ring sammen, følg til første møte, eller inviter frivillige til brukeren. 4) Avklar roller og grenser - frivillige utfører ikke helsefaglige oppgaver, men gir sosial kontakt og fellesskap. 5) Sørg for at frivillige er informert om taushetsplikt. 6) Følg opp - spør brukeren om tilbudet fungerer, og juster ved behov. 7) Dokumenter tiltaket i tiltaksplanen og evaluer effekten.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-2-5-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilke oppgaver bør frivillige IKKE utføre i helse- og omsorgstjenesten?',
      options: [
        { id: 'a', text: 'Helsefaglige oppgaver som medikamenthåndtering, stell og behandling', isCorrect: true },
        { id: 'b', text: 'Besøk og sosiale aktiviteter med brukere', isCorrect: false },
        { id: 'c', text: 'Følge brukere på tur eller til arrangementer', isCorrect: false },
        { id: 'd', text: 'Lese høyt eller spille spill med beboere', isCorrect: false },
      ],
      solution: 'Frivillige skal ikke utføre helsefaglige oppgaver som medikamenthåndtering, personlig stell, sårbehandling eller andre oppgaver som krever helsefaglig kompetanse. De kan derimot bidra med sosial kontakt, aktiviteter, praktisk hjelp, følgetjeneste og andre oppgaver som beriker hverdagen til brukerne uten å kreve faglig kompetanse.',
    },
  ],
};

// ----------------------------------------------------------------------------
// 2.6 Forebygging av smitte og infeksjoner
// ----------------------------------------------------------------------------

export const CHAPTER_HOV3_2_6: TextbookChapter = {
  id: 'hov3-2-6',
  courseId: 'helseoppvekst-vg3',
  chapterNumber: '2.6',
  title: 'Forebygging av smitte og infeksjoner',
  description: 'Avansert smittevern, isoleringsregimer, antibiotikaresistens.',
  estimatedMinutes: 55,
  competenceGoals: [
    'anvende smittevernprosedyrer og basale smittevernrutiner i yrkesutøvelsen',
    'forstå og gjennomføre isoleringsregimer korrekt',
    'forstå problemet med antibiotikaresistens og bidra til riktig antibiotikabruk',
  ],
  keyTerms: [
    { term: 'Basale smittevernrutiner', definition: 'Grunnleggende rutiner som skal følges i all pasientkontakt for å forebygge smitte, uavhengig av om infeksjon er kjent.' },
    { term: 'Isoleringsregimer', definition: 'Spesielle smitteverntiltak som iverksettes ved kjent eller mistenkt smittsom sykdom, tilpasset smittemåte.' },
    { term: 'Antibiotikaresistens', definition: 'Bakteriers evne til å motstå virkningen av antibiotika, noe som gjør infeksjoner vanskeligere å behandle.' },
    { term: 'MRSA', definition: 'Meticillinresistente gule stafylokokker - bakterier som er resistente mot flere typer antibiotika og kan gi alvorlige infeksjoner.' },
    { term: 'Smittekjeden', definition: 'Den kjeden av faktorer som må være til stede for at en infeksjon skal oppstå: smittestoff, smittekilde, smittevei, inngangsport og mottaker.' },
  ],
  content: [
    {
      id: 'hov3-2-6-intro',
      type: 'text',
      content: `## Forebygging av smitte og infeksjoner

Smittevern er en av de viktigste oppgavene for helsepersonell. Helsetjenesteassosierte infeksjoner (HAI) rammer tusenvis av pasienter hvert år og kan føre til forlenget sykdom, komplikasjoner og i verste fall død.

Som helsefagarbeider er du i frontlinjen for smittevern. Du har daglig, nær kontakt med brukere og er dermed både en potensiell smittespreder og en nøkkelperson i forebygging.

Smittevern handler om å:

- **Forebygge** at infeksjoner oppstår
- **Begrense** spredning av smittsomme sykdommer
- **Beskytte** brukere, pårørende, kolleger og deg selv
- **Bidra til** ansvarlig antibiotikabruk for å motvirke resistens

De basale smittevernrutinene er grunnmuren i alt smittevern. De skal følges i ALL kontakt med brukere, uavhengig av om det foreligger kjent infeksjon. I tillegg kommer spesielle isoleringsregimer ved kjent eller mistenkt smittsom sykdom.`,
    },
    {
      id: 'hov3-2-6-def-1',
      type: 'definition',
      title: 'Smittekjeden',
      content: `**Smittekjeden** beskriver de faktorene som må være til stede for at en infeksjon skal oppstå:

**1. Smittestoff (mikroorganisme)**
Bakterier, virus, sopp eller parasitter som kan forårsake sykdom.

**2. Smittekilde (reservoar)**
Der smittestoffet lever og formerer seg - mennesker, dyr, mat, vann, overflater.

**3. Smittevei (utgang og transport)**
Hvordan smittestoffet overføres:
- **Kontaktsmitte** - direkte (hud-til-hud) eller indirekte (via gjenstander)
- **Dråpesmitte** - via dråper fra hoste/nys (rekkevidde ca. 1-2 meter)
- **Luftbåren smitte** - via aerosoler som kan sveve lenge i luften
- **Fekal-oral smitte** - fra avføring til munn via forurenset mat/vann
- **Blodsmitte** - via blod eller kroppsvæsker

**4. Inngangsport**
Der smittestoffet kommer inn i kroppen - sår, slimhinner, luftveier, mage-tarm.

**5. Mottaker**
En person som er mottakelig for infeksjonen. Risikofaktorer: svekket immunforsvar, alder, sykdom, sår.

**Smittevern handler om å bryte minst ett ledd i smittekjeden.**`,
    },
    {
      id: 'hov3-2-6-def-2',
      type: 'definition',
      title: 'Basale smittevernrutiner',
      content: `**Basale smittevernrutiner** er de grunnleggende tiltakene som skal følges i ALL pasientkontakt:

**1. Håndhygiene - det viktigste enkelttiltaket**
- Hånddesinfeksjon med alkoholbasert middel (minst 20 sek)
- Håndvask med såpe og vann ved synlig skitne hender (minst 40 sek)
- Når: før og etter pasientkontakt, før rene/aseptiske prosedyrer, etter eksponering for kroppsvæsker, etter kontakt med pasientens omgivelser

**2. Bruk av personlig beskyttelsesutstyr (PPE)**
- **Hansker** - ved kontakt med blod, kroppsvæsker, slimhinner, skadet hud
- **Frakk/forkle** - ved fare for søl og sprut
- **Munnbind** - ved fare for dråpesmitte
- **Øyebeskyttelse** - ved fare for sprut i øynene

**3. Hoste- og nysehygiene**
- Host/nys i papir eller albuekroken, ikke hånden
- Kast papir i avfallsboks umiddelbart
- Utfør håndhygiene etterpå

**4. Trygg håndtering av skarpe gjenstander**
- Kast brukte kanyler direkte i kanyleavfallsboks
- Aldri sett hetten tilbake på kanylen

**5. Renhold og desinfeksjon**
- Rengjør og desinfiser utstyr og overflater mellom pasienter
- Følg lokale renholdsplaner og prosedyrer`,
    },
    {
      id: 'hov3-2-6-example-1',
      type: 'example',
      title: 'Korrekt håndhygiene',
      problem: 'Du skal inn til en beboer for å hjelpe med morgenstellet. Beskriv når og hvordan du utfører håndhygiene.',
      solution: `**Håndhygiene i praksis - morgenstellet:**

**Før du går inn:**
- Desinfiser hendene med alkoholbasert hånddesinfeksjon (minst 20 sek)

**Under stellet:**
- Ta på hansker før du berører sår eller slimhinner
- Bytt hansker mellom «skitne» og «rene» oppgaver (f.eks. mellom intimvask og ansiktsvask)
- Desinfiser hendene mellom hanskebyttene

**Etter stellet:**
- Ta av hansker og desinfiser hendene
- Desinfiser hendene etter å ha ryddet brukt utstyr

**Korrekt teknikk for hånddesinfeksjon:**
1. Påfør rikelig mengde (3-5 ml) i den ene håndflatens grop
2. Gni håndflate mot håndflate
3. Gni høyre håndflate over venstre håndbak og omvendt
4. Gni håndflate mot håndflate med fletede fingre
5. Gni baksiden av fingrene mot motsatt håndflate
6. Gni rundt tomler
7. Gni fingertuppene i håndflaten
8. Fortsett til hendene er tørre (ca. 20 sek)

**Husk:** Håndhygiene er det mest effektive enkelttiltaket for å forebygge smittespredning.`,
    },
    {
      id: 'hov3-2-6-def-3',
      type: 'definition',
      title: 'Isoleringsregimer',
      content: `**Isoleringsregimer** er tilleggstiltak som iverksettes ved kjent eller mistenkt smittsom sykdom, i tillegg til basale smittevernrutiner.

**Kontaktisolering:**
Brukes ved sykdommer som smitter via direkte eller indirekte kontakt (f.eks. MRSA, VRE, norovirus).
- Enerom med eget toalett
- Hansker og beskyttelsesfrakk ved all kontakt
- Eget utstyr på rommet
- Grundig renhold og desinfeksjon

**Dråpeisolering:**
Brukes ved sykdommer som smitter via dråper (f.eks. influensa, RS-virus).
- Enerom (dør kan stå åpen)
- Munnbind innen 1-2 meters avstand
- Hansker og frakk ved nær kontakt

**Luftsmitteisolering:**
Brukes ved sykdommer med luftbåren smitte (f.eks. tuberkulose, meslinger, vannkopper).
- Enerom med undertrykksventilasjon (luften suges ut)
- Åndedrettsvern (FFP3-maske) ved all inngang
- Dør skal holdes lukket

**Beskyttende isolering (omvendt isolering):**
Brukes for å beskytte brukere med alvorlig svekket immunforsvar.
- Enerom
- Streng håndhygiene
- Begrens antall besøkende
- Ingen syke besøkende eller personale`,
    },
    {
      id: 'hov3-2-6-example-2',
      type: 'example',
      title: 'MRSA-isolering i praksis',
      problem: 'En beboer på sykehjemmet har fått påvist MRSA (meticillinresistente gule stafylokokker). Beboeren er kontaktisolert. Beskriv hvordan du gjennomfører morgenstellet.',
      solution: `**Morgenstellet ved kontaktisolering (MRSA):**

**Forberedelse utenfor rommet:**
1. Les prosedyren for kontaktisolering
2. Forbered alt utstyr du trenger (slik at du slipper å gå ut og inn)
3. Utfør håndhygiene

**Inn på rommet:**
4. Ta på beskyttelsesfrakk (skal dekke armer og overkropp)
5. Ta på hansker
6. Gjennomfør morgenstellet som vanlig, med god omsorg
7. Bruk utstyr som er dedikert til rommet (blodtrykksapparat, termometer)

**Etter stellet:**
8. Kast engangsutstyr i avfallsboks på rommet
9. Ta av hansker og kast dem
10. Ta av frakken - rull den med utside inn og kast i riktig beholder
11. Utfør grundig håndhygiene
12. Gå ut av rommet

**Viktig å huske:**
- Begrens trafikk inn og ut av rommet
- Alt skittentøy legges i egen pose og merkes
- Avfall håndteres som smittefarlig avfall
- Rengjøring med desinfeksjon etter prosedyre
- Informer beboeren om tiltakene og hvorfor de er nødvendige
- Vær bevisst på at isolering kan oppleves belastende - gi ekstra sosial oppmerksomhet`,
    },
    {
      id: 'hov3-2-6-def-4',
      type: 'definition',
      title: 'Antibiotikaresistens',
      content: `**Antibiotikaresistens** er en av verdens største helsetrusler. Det betyr at bakterier utvikler evne til å motstå antibiotika, slik at medisiner som tidligere virket, ikke lenger har effekt.

**Hvorfor oppstår antibiotikaresistens?**
- Overforbruk av antibiotika i human- og veterinærmedisin
- Feilbruk (for kort kur, unødvendig forskrivning)
- Spredning av resistente bakterier i helseinstitusjoner
- Mangel på nye antibiotika

**Konsekvenser av antibiotikaresistens:**
- Infeksjoner blir vanskeligere å behandle
- Lengre sykdomsforløp og økt sykelighet
- Flere dødsfall av infeksjoner som tidligere var enkle å behandle
- Økte kostnader for helsetjenesten

**Resistente bakterier du bør kjenne:**
- **MRSA** - Meticillinresistente gule stafylokokker
- **VRE** - Vankomycinresistente enterokokker
- **ESBL** - Bakterier som produserer bredspektrede betalaktamaser

**Hva kan du gjøre som helsefagarbeider?**
- Følg basale smittevernrutiner nøye
- Aldri be om antibiotika til deg selv uten legens vurdering
- Informer brukere om å fullføre antibiotikakurer som er foreskrevet
- Meld fra ved mistanke om resistente bakterier
- Støtt opp under nasjonale kampanjer mot antibiotikaresistens`,
    },
    {
      id: 'hov3-2-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

Forebygging av smitte og infeksjoner er en grunnleggende del av helsefagarbeiderens ansvar:

- **Smittekjeden** beskriver fem ledd som må være til stede for at infeksjon oppstår - bryt ett ledd og smitte forebygges
- **Basale smittevernrutiner** er grunnmuren i alt smittevern og skal følges i all pasientkontakt
- **Håndhygiene** er det viktigste enkelttiltaket for å forebygge smittespredning
- **Isoleringsregimer** (kontakt, dråpe, luft, beskyttende) er tilleggstiltak ved kjent eller mistenkt smitte
- **Antibiotikaresistens** er en alvorlig global helsetrussel som krever ansvarlig antibiotikabruk og godt smittevern
- **Du som helsefagarbeider** er i frontlinjen for smittevern - din praksis har direkte konsekvenser for brukernes sikkerhet

Godt smittevern handler om kunnskap, rutiner og holdninger. Det krever at du alltid følger prosedyrer, selv når det er travelt, og at du tør å si fra når du ser brudd på smittevernrutinene.`,
    },
  ],
  exercises: [
    {
      id: 'hov3-2-6-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er det viktigste enkelttiltaket for å forebygge smittespredning i helsetjenesten?',
      options: [
        { id: 'a', text: 'Håndhygiene', isCorrect: true },
        { id: 'b', text: 'Bruk av munnbind', isCorrect: false },
        { id: 'c', text: 'Vaksinering av alt helsepersonell', isCorrect: false },
        { id: 'd', text: 'Isolering av alle pasienter', isCorrect: false },
      ],
      solution: 'Håndhygiene er det mest effektive og viktigste enkelttiltaket for å forebygge smittespredning i helsetjenesten. God håndhygiene, enten med alkoholbasert hånddesinfeksjon eller håndvask med såpe og vann, fjerner smittestoffer fra hendene og bryter smittekjeden.',
    },
    {
      id: 'hov3-2-6-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilke fem ledd utgjør smittekjeden?',
      options: [
        { id: 'a', text: 'Smittestoff, smittekilde, smittevei, inngangsport og mottaker', isCorrect: true },
        { id: 'b', text: 'Bakterie, virus, sopp, parasitt og prion', isCorrect: false },
        { id: 'c', text: 'Hoste, nys, berøring, blod og luft', isCorrect: false },
        { id: 'd', text: 'Hansker, frakk, munnbind, visir og hette', isCorrect: false },
      ],
      solution: 'Smittekjeden består av smittestoff (mikroorganismen), smittekilde (der smittestoffet lever), smittevei (hvordan det overføres), inngangsport (der det kommer inn i kroppen) og mottaker (personen som kan bli infisert). Alle fem leddene må være til stede for at infeksjon skal oppstå.',
    },
    {
      id: 'hov3-2-6-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er den viktigste forskjellen mellom kontaktisolering og luftsmitteisolering?',
      options: [
        { id: 'a', text: 'Kontaktisolering krever hansker og frakk ved kontakt, luftsmitteisolering krever åndedrettsvern (FFP3) og undertrykksventilasjon', isCorrect: true },
        { id: 'b', text: 'Kontaktisolering brukes bare for barn, luftsmitteisolering for voksne', isCorrect: false },
        { id: 'c', text: 'Kontaktisolering er strengere enn luftsmitteisolering', isCorrect: false },
        { id: 'd', text: 'Det er ingen vesentlig forskjell mellom de to regimene', isCorrect: false },
      ],
      solution: 'Kontaktisolering brukes ved sykdommer som smitter via direkte eller indirekte kontakt (MRSA, norovirus) og krever hansker og frakk ved kontakt. Luftsmitteisolering brukes ved sykdommer som sprer seg via aerosoler i luften (tuberkulose, meslinger) og krever i tillegg åndedrettsvern (FFP3-maske) og enerom med undertrykksventilasjon der luften suges ut.',
    },
    {
      id: 'hov3-2-6-ex-4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva antibiotikaresistens er, hvorfor det er et problem, og hva du som helsefagarbeider kan gjøre for å motvirke det.',
      solution: 'Antibiotikaresistens betyr at bakterier utvikler evne til å motstå antibiotika, slik at medisiner som tidligere virket, ikke lenger har effekt. Det er et alvorlig problem fordi infeksjoner blir vanskeligere å behandle, sykdomsforløp blir lengre, og flere kan dø av infeksjoner som tidligere var enkle å behandle. WHO regner det som en av de største helsetruslene globalt. Som helsefagarbeider kan du bidre ved å: 1) Følge basale smittevernrutiner nøye for å hindre spredning av resistente bakterier. 2) Utføre korrekt håndhygiene ved all pasientkontakt. 3) Følge isoleringsregimer ved påvist resistente bakterier. 4) Informere brukere om å fullføre antibiotikakurer som foreskrevet. 5) Aldri be om antibiotika uten at legen vurderer det nødvendig. 6) Melde fra ved mistanke om resistente bakterier.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-2-6-ex-5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv steg for steg hvordan du ville gjennomført et stell hos en beboer som er kontaktisolert på grunn av norovirus.',
      solution: 'Stell ved kontaktisolering (norovirus): 1) Forberedelse: Les prosedyren, samle alt utstyr du trenger på en tralle (unngå å gå ut og inn), utfør håndhygiene. 2) På rommet: Ta på langskaftet beskyttelsesfrakk som dekker klærne, ta på hansker. 3) Gjennomfør stellet med god omsorg - snakk med beboeren, forklar hva du gjør. Norovirus smitter fekal-oralt, vær ekstra nøye med hygiene etter toalettbesøk og bleierens. 4) Etter stellet: Kast engangsutstyr i avfallsboks på rommet (smittefarlig avfall). Ta av hansker og kast. Ta av frakken riktig - rull med utsiden inn og kast. 5) Utfør grundig håndhygiene - ved norovirus er HÅNDVASK med såpe og vann anbefalt (alkohol dreper ikke norovirus like effektivt). 6) Tørk av overflater og utstyr med klorholdige desinfeksjonsmidler. 7) Dokumenter stellet.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-2-6-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvorfor skal basale smittevernrutiner følges i ALL pasientkontakt, også når det ikke foreligger kjent infeksjon?',
      options: [
        { id: 'a', text: 'Fordi mange infeksjoner kan smitte før symptomer viser seg, og fordi vi ikke alltid vet om en bruker er smittebærer', isCorrect: true },
        { id: 'b', text: 'Fordi det er lovpålagt å bruke hansker ved all kontakt', isCorrect: false },
        { id: 'c', text: 'Fordi det er enklere for personalet å ha samme rutine for alle', isCorrect: false },
        { id: 'd', text: 'Fordi alle pasienter i helsetjenesten per definisjon er smittsomme', isCorrect: false },
      ],
      solution: 'Basale smittevernrutiner skal følges alltid fordi mange infeksjoner er smittsomme før symptomer viser seg (inkubasjonstid), noen personer er asymptomatiske bærere av smittsomme mikroorganismer, det er ikke alltid kjent hvilken infeksjonsstatus en bruker har, og basale rutiner beskytter også helsepersonell mot smitte de selv kan bli utsatt for. Ved å følge basale rutiner konsekvent unngår man å ta risiko basert på antakelser.',
    },
  ],
};

// ============================================================================
// Eksport av alle kapitler
// ============================================================================

export const HELSEOPPVEKST_VG3_DEL2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_HOV3_2_1,
  CHAPTER_HOV3_2_2,
  CHAPTER_HOV3_2_3,
  CHAPTER_HOV3_2_4,
  CHAPTER_HOV3_2_5,
  CHAPTER_HOV3_2_6,
];
