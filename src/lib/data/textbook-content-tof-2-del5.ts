/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Teknologi og forskningslære 2 VG3
 * Seksjon 5: Teknologi, etikk og samfunn (Kapittel 5.1–5.7)
 * Denne filen inneholder kapittel 5.1–5.7.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 5.1: Teknologietikk
// ============================================================================

export const CHAPTER_TOF_2_5_1: TextbookChapter = {
  id: 'tof-2-5-1',
  courseId: 'tof-2',
  chapterNumber: '5.1',
  title: 'Teknologietikk',
  description: 'Etiske rammeverk, ansvarlig innovasjon og teknologivurdering.',
  estimatedMinutes: 25,
  competenceGoals: [
    'drøfte etiske problemstillinger knyttet til teknologiutvikling',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof2-5-1-intro',
      type: 'text',
      content: `## Teknologietikk

Teknologi er aldri nøytral. Hver gang vi utvikler, implementerer eller tar i bruk en ny teknologi, gjør vi valg som påvirker mennesker, samfunn og natur. **Teknologietikk** handler om å reflektere systematisk over disse valgene — hvem som drar nytte, hvem som bærer kostnadene, og hvilke verdier som bygges inn i teknologiske systemer.

I Teknologi og forskningslære 1 lærte du om grunnleggende etiske aspekter ved forskning. Nå skal vi gå dypere: vi skal anvende etiske rammeverk direkte på teknologiske problemstillinger, forstå hvem som bærer ansvaret for teknologiens konsekvenser, og utforske spenningen mellom teknologisk fremskritt og etisk ansvarlighet.

Spørsmål som «Bør vi utvikle autonome våpen?», «Hvem er ansvarlig når en selvkjørende bil tar feil avgjørelse?» og «Er det riktig å patentere genredigerte organismer?» krever mer enn teknisk kompetanse — de krever etisk refleksjon.`,
    },

    // --- BLOKK 1: Etiske rammeverk ---
    {
      id: 'tof2-5-1-def-1',
      type: 'definition',
      title: 'Teknologietikk',
      content: `**Teknologietikk** er den grenen av etikken som systematisk undersøker moralske spørsmål knyttet til utvikling, bruk og konsekvenser av teknologi. Sentrale spørsmål inkluderer:

- Hvilke **verdier** bygges inn i teknologien?
- Hvem **drar nytte** og hvem **rammes**?
- Hvem har **ansvar** når teknologi forårsaker skade?
- Hva er teknologiens **langsiktige konsekvenser** for individ og samfunn?

Teknologietikk trekker på etablerte etiske rammeverk — konsekvensetikk, pliktetikk og dydsetikk — men anvender dem på spesifikke teknologiske kontekster.`,
    },
    {
      id: 'tof2-5-1-text-1',
      type: 'text',
      content: `### Tre etiske rammeverk

For å analysere teknologiske dilemmaer bruker vi tre klassiske etiske rammeverk, som hver gir ulike perspektiver på hva som er riktig handling:

**1. Konsekvensetikk (utilitarisme)**
En handling er moralsk riktig dersom den fører til **mest mulig lykke for flest mulig**. Konsekvensetikk vurderer handlinger utelukkende ut fra deres resultater. I en teknologisk kontekst betyr det at en teknologi er etisk forsvarlig dersom den samlede nytten overstiger de samlede kostnadene.

*Styrke:* Gir et konkret verktøy for avveininger — vi kan veie fordeler mot ulemper.
*Svakhet:* Det kan rettferdiggjøre urettferdige handlinger mot enkeltpersoner eller minoriteter hvis det «tjener flertallet».

**2. Pliktetikk (deontologisk etikk)**
En handling er moralsk riktig dersom den følger universelle **moralske plikter** — uavhengig av konsekvensene. Filosofen Immanuel Kant formulerte det kategoriske imperativ: «Handle bare etter den maksime som du samtidig kan ville skal bli en allmenn lov.» I teknologien betyr dette at visse handlinger er galt uansett resultat — for eksempel å krenke privatlivet, selv om det gir nyttig informasjon.

*Styrke:* Beskytter individuelle rettigheter og menneskeverd.
*Svakhet:* Kan være rigid og gi lite veiledning når plikter kolliderer.

**3. Dydsetikk**
Fokuserer på **karakteregenskaper** hos den som handler, snarere enn på regler eller konsekvenser. En teknolog bør utvise dyder som ansvarlighet, ærlighet, rettferdighet og empati. Dydsetikk spør: «Hva slags teknologer — og hva slags samfunn — ønsker vi å være?»

*Styrke:* Gir et helhetlig perspektiv som omfatter motivasjon, kultur og profesjonell identitet.
*Svakhet:* Gir ikke alltid klare svar på konkrete dilemmaer.`,
    },
    {
      id: 'tof2-5-1-example-1',
      type: 'example',
      title: 'Eksempel: Selvkjørende biler og etiske rammeverk',
      problem: 'En selvkjørende bil oppdager at den ikke kan unngå en ulykke. Den kan enten svinge til venstre (og skade føreren) eller fortsette rett fram (og skade en fotgjenger). Hvordan vurderer de tre etiske rammeverkene denne situasjonen?',
      solution: `**Konsekvensetikk:** Beregn den samlede skaden for begge alternativene. Hvis fotgjengeren er et barn og føreren er en voksen med bilbelte, vil en utilitarist kanskje argumentere for å beskytte barnet — minst mulig total skade. Men hvem definerer «skadeverdi»?

**Pliktetikk:** Det er en plikt å ikke aktivt skade uskyldige mennesker. Å svinge for å skade føreren kan ses som å bruke føreren som middel for å redde fotgjengeren — noe Kant ville avvist. Pliktetikk kan argumentere for at bilen ikke skal «velge» å ofre noen aktivt.

**Dydsetikk:** Spør hva en ansvarlig og empatisk teknolog ville programmert. Vektlegger åpenhet om bilens algoritmer, ydmykhet om begrensninger, og at systemet aldri skal diskriminere basert på alder, kjønn eller sosial status.

Ingen av rammeverkene gir et enkelt svar — men sammen belyser de ulike dimensjoner av problemet og gjør diskusjonen rikere.`,
    },
    {
      id: 'tof2-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof2-5-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilket etisk rammeverk vurderer en handling primært ut fra dens konsekvenser?',
        options: [
          { id: 'a', text: 'Pliktetikk', isCorrect: false },
          { id: 'b', text: 'Dydsetikk', isCorrect: false },
          { id: 'c', text: 'Konsekvensetikk (utilitarisme)', isCorrect: true },
          { id: 'd', text: 'Kontraktsetikk', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Konsekvensetikk (utilitarisme) vurderer handlinger utelukkende ut fra deres resultater — altså konsekvensene. Pliktetikk (A) vurderer om handlingen følger universelle plikter uavhengig av konsekvensene. Dydsetikk (B) fokuserer på aktørens karakteregenskaper. Kontraktsetikk (D) er basert på samfunnskontrakter og gjensidig avtale.',
      },
    },

    // --- BLOKK 2: Teknologivurdering og ansvarlig innovasjon ---
    {
      id: 'tof2-5-1-text-2',
      type: 'text',
      content: `### Teknologivurdering (Technology Assessment)

**Teknologivurdering** er en systematisk prosess der man kartlegger de mulige konsekvensene av en ny teknologi *før* den tas i bruk bredt. Målet er å gi beslutningstakere — politikere, bedriftsledere, ingeniører — et bedre grunnlag for å vurdere om og hvordan teknologien bør implementeres.

En teknologivurdering undersøker typisk:

- **Teknisk ytelse:** Fungerer teknologien som den skal?
- **Økonomiske konsekvenser:** Hvem vinner og taper økonomisk?
- **Sosiale konsekvenser:** Hvordan påvirkes hverdagsliv, arbeid, helse og relasjoner?
- **Miljøkonsekvenser:** Hva er klimaavtrykket, ressursforbruket og avfallsproblemet?
- **Etiske konsekvenser:** Hvilke verdier og rettigheter berøres?
- **Politiske konsekvenser:** Hvem får makt, og hvem mister den?

I Norge har **Teknologirådet** (opprettet i 1999) som oppgave å gjøre teknologivurderinger og rådgi Stortinget og offentligheten.`,
    },
    {
      id: 'tof2-5-1-def-2',
      type: 'definition',
      title: 'Ansvarlig innovasjon (Responsible Research and Innovation, RRI)',
      content: `**Ansvarlig innovasjon** er en tilnærming der forsknings- og innovasjonsprosessen utformes slik at samfunnet aktivt involveres i å definere ønskede mål og akseptable risikoer. EU har definert fire nøkkelprinsipper for RRI:

1. **Forutsigbarhet (Anticipation):** Tenk fremover om mulige konsekvenser og risikoer.
2. **Refleksjon (Reflexivity):** Vær bevisst egne forutsetninger og begrensninger.
3. **Inklusjon (Inclusion):** Involver interessenter — også de som rammes — i beslutninger.
4. **Responsivitet (Responsiveness):** Vær villig til å endre kurs basert på ny innsikt.

Ansvarlig innovasjon handler ikke om å stoppe fremskritt, men om å styre det i en retning som ivaretar både nytte og menneskeverd.`,
    },
    {
      id: 'tof2-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof2-5-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er hovedformålet med teknologivurdering (Technology Assessment)?',
        options: [
          { id: 'a', text: 'Å stoppe all ny teknologi som kan ha negative konsekvenser', isCorrect: false },
          { id: 'b', text: 'Å kartlegge mulige konsekvenser av ny teknologi før bred implementering', isCorrect: true },
          { id: 'c', text: 'Å sikre at teknologien gir mest mulig profitt for utviklerne', isCorrect: false },
          { id: 'd', text: 'Å erstatte politiske beslutninger med tekniske analyser', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Teknologivurdering handler om å systematisk kartlegge mulige konsekvenser — tekniske, økonomiske, sosiale, miljømessige og etiske — for å gi beslutningstakere et bedre grunnlag. Det handler ikke om å stoppe teknologi (A), maksimere profitt (C) eller erstatte politikk (D).',
      },
    },

    // --- BLOKK 3: Føre-var-prinsippet ---
    {
      id: 'tof2-5-1-text-3',
      type: 'text',
      content: `### Føre-var-prinsippet

**Føre-var-prinsippet** er et sentralt prinsipp i miljørett og teknologietikk. Det sier at dersom en handling eller et produkt kan forårsake alvorlig eller irreversibel skade, skal mangel på vitenskapelig sikkerhet **ikke** brukes som grunn til å utsette tiltak for å forebygge skaden.

Med andre ord: når det er rimelig grunn til bekymring for at noe kan være farlig, bør vi handle forsiktig — selv om vi ikke har fullstendig bevis.

Føre-var-prinsippet er nedfelt i:
- **Rio-erklæringen** (1992, FN) — prinsipp 15
- **EUs traktater** — artikkel 191(2) i Lisboa-traktaten
- **Norsk miljølovgivning** — naturmangfoldloven § 9

**Anvendelse på teknologi:**
Eksempler der føre-var-prinsippet har vært aktuelt:
- **Genmodifiserte organismer (GMO):** EU har en restriktiv tilnærming basert på føre-var, mens USA har en mer liberal linje.
- **5G-nettverk:** Bekymringer om stråling har utløst debatter, selv om forskningen hittil ikke har påvist helsefare ved tillatte nivåer.
- **Kunstig intelligens:** Bør vi begrense AI-systemer som kan ta autonome beslutninger med alvorlige konsekvenser?

Kritikere mener føre-var-prinsippet kan hemme innovasjon, mens tilhengere argumenterer for at det beskytter mot irreversibel skade.`,
    },
    {
      id: 'tof2-5-1-note-1',
      type: 'note',
      title: 'Ansvarsfordelingen i teknologiutvikling',
      content: `Hvem bærer ansvaret når teknologi forårsaker skade? Ansvaret er ofte fordelt på flere nivåer:

- **Utviklerne:** Ingeniører og programmerere som lager teknologien.
- **Bedriftene:** Selskapene som finansierer og markedsfører produktet.
- **Myndighetene:** Reguleringsorganer som godkjenner og overvåker teknologien.
- **Brukerne:** De som tar teknologien i bruk — noen ganger på utilsiktede måter.

I praksis oppstår et **ansvarsgap** når alle peker på hverandre. Ansvarlig innovasjon krever at alle aktører tar sin del av ansvaret, og at det finnes tydelige mekanismer for ansvarliggjøring.`,
    },
    {
      id: 'tof2-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof2-5-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar føre-var-prinsippet med egne ord, og gi et konkret eksempel på en teknologisk situasjon der prinsippet bør anvendes. Begrunn hvorfor.',
        hints: ['Tenk på en teknologi der konsekvensene er usikre, men potensielt alvorlige og vanskelige å reversere.'],
        solution: 'Føre-var-prinsippet betyr at vi bør handle forsiktig og iverksette forebyggende tiltak når det er rimelig grunn til å tro at noe kan forårsake alvorlig skade — selv om vi mangler fullstendig vitenskapelig bevis.\n\nEksempel: Utslipp av mikroplast fra syntetiske tekstiler. Vi vet ennå ikke fullt ut hvordan mikroplast påvirker mennesker og økosystemer på lang sikt, men det finnes økende evidens for at det akkumuleres i næringskjeder. Føre-var-prinsippet tilsier at vi bør iverksette tiltak (f.eks. filtre i vaskemaskiner, regulering av tekstilproduksjon) nå, i stedet for å vente til skaden er fullstendig dokumentert — fordi skaden kan være irreversibel.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- BLOKK 4: Teknologideterminisme vs. sosialkonstruktivisme ---
    {
      id: 'tof2-5-1-text-4',
      type: 'text',
      content: `### Teknologideterminisme vs. sosialkonstruktivisme

Hvordan vi forstår forholdet mellom teknologi og samfunn, påvirker hvordan vi tenker om etisk ansvar. To motstridende perspektiver dominerer debatten:

**Teknologideterminisme** hevder at teknologisk utvikling følger sin egen indre logikk og at samfunnet må tilpasse seg. I dette perspektivet «driver» teknologien samfunnsendringer — internett forandret kommunikasjon, bilen forandret byplanlegging, smarttelefonen forandret sosiale relasjoner. Teknologien ses som en autonom kraft som vi i begrenset grad kan styre.

*Implikasjoner for etikk:* Hvis teknologien er determinerende, er det begrenset rom for etisk påvirkning — vi kan bare tilpasse oss.

**Sosialkonstruktivisme** hevder det motsatte: teknologi formes av sosiale, økonomiske og politiske valg. Teknologier har ikke én forutbestemt utviklingsbane — de utformes gjennom forhandlinger mellom ulike aktører med ulike interesser. Internett kunne blitt designet annerledes, bilen kunne blitt regulert strengere, smarttelefonen kunne fått andre funksjoner.

*Implikasjoner for etikk:* Hvis teknologien formes av mennesker, har vi ansvar for å forme den i tråd med etiske verdier.

De fleste teknologiforskere i dag inntar en **mellomposisjon**: teknologi og samfunn påvirker hverandre gjensidig (co-construction). Teknologien legger rammer for hva som er mulig, men mennesker bestemmer innenfor disse rammene.`,
    },
    {
      id: 'tof2-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof2-5-1-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvilken påstand passer best med et teknologideterministisk perspektiv?',
        options: [
          { id: 'a', text: 'Samfunnet kan velge å regulere og styre teknologisk utvikling', isCorrect: false },
          { id: 'b', text: 'Teknologisk utvikling følger sin egen logikk og former samfunnet', isCorrect: true },
          { id: 'c', text: 'Teknologi er et resultat av sosiale forhandlinger mellom aktører', isCorrect: false },
          { id: 'd', text: 'Etiske valg er viktigere enn teknisk ytelse', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Teknologideterminisme hevder at teknologien følger sin egen indre logikk og driver samfunnsendringer — samfunnet tilpasser seg teknologien, ikke omvendt. Svaralternativ A og C representerer sosialkonstruktivistiske perspektiver, mens D er en normativ påstand som ikke spesifikt tilhører noen av posisjonene.',
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof2-5-1-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **Teknologietikk** undersøker moralske spørsmål knyttet til utvikling, bruk og konsekvenser av teknologi.
- Tre etiske rammeverk gir ulike perspektiver: **konsekvensetikk** (beste resultat), **pliktetikk** (universelle regler), **dydsetikk** (karakter og verdier).
- **Teknologivurdering** kartlegger systematisk konsekvenser av ny teknologi — tekniske, økonomiske, sosiale, miljømessige og etiske.
- **Ansvarlig innovasjon** involverer samfunnet i å definere mål og akseptable risikoer: forutsigbarhet, refleksjon, inklusjon og responsivitet.
- **Føre-var-prinsippet** sier at usikkerhet ikke skal brukes som grunn til å unnlate tiltak mot potensiell alvorlig skade.
- Debatten mellom **teknologideterminisme** og **sosialkonstruktivisme** handler om hvorvidt teknologien former samfunnet eller omvendt — de fleste inntar en mellomposisjon.`,
    },

    // --- Samleoppgave ---
    {
      id: 'tof2-5-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof2-5-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg en aktuell teknologi (for eksempel genredigering med CRISPR, ansiktsgjenkjenning eller autonome droner). Analyser teknologien fra alle tre etiske rammeverk (konsekvensetikk, pliktetikk og dydsetikk). Drøft hvem som bærer ansvaret for eventuelle negative konsekvenser, og vurder om føre-var-prinsippet bør anvendes.',
        hints: ['Strukturer svaret etter de tre rammeverkene, og husk å diskutere ansvar på flere nivåer: utviklere, bedrifter, myndigheter og brukere.'],
        solution: 'Eksempel med ansiktsgjenkjenning:\n\n**Konsekvensetikk:** Fordeler inkluderer økt sikkerhet, raskere identifisering av kriminelle, og effektivisering av passering. Ulemper inkluderer masseovervåkning, krenkelse av privatliv, og diskrimi­nering (systemene fungerer dårligere for mørkhudede). En utilitaristisk analyse veier disse mot hverandre — og kan konkludere ulikt avhengig av kontekst.\n\n**Pliktetikk:** Vi har en plikt til å respektere menneskers privatliv og autonomi. Masseovervåkning uten samtykke krenker dette, uansett nytte. Kant ville argumentert for at å bruke personers ansikt uten samtykke behandler dem som middel, ikke mål.\n\n**Dydsetikk:** En ansvarlig teknolog bør utvise ydmykhet (systemet er feilbarlig), rettferdighet (sikre at det ikke diskriminerer) og transparens (åpenhet om hvordan det brukes).\n\n**Ansvar:** Utviklerne har ansvar for å teste for skjevheter. Bedriftene for å ikke selge til autoritære regimer. Myndighetene for å regulere bruken. Brukerne for å kreve innsyn.\n\n**Føre-var:** Ja — ukritisk utrulling av ansiktsgjenkjenning i offentlige rom bør begrenses inntil vi forstår de langsiktige konsekvensene for demokrati og privatliv bedre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.2: Personvern og overvåkning
// ============================================================================

export const CHAPTER_TOF_2_5_2: TextbookChapter = {
  id: 'tof-2-5-2',
  courseId: 'tof-2',
  chapterNumber: '5.2',
  title: 'Personvern og overvåkning',
  description: 'GDPR, masseovervåkning, ansiktsgjenkjenning og personvern i AI-alderen.',
  estimatedMinutes: 25,
  competenceGoals: [
    'drøfte personvern og overvåkning i lys av teknologisk utvikling',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof2-5-2-intro',
      type: 'text',
      content: `## Personvern og overvåkning

Personvern er en grunnleggende menneskerettighet. Artikkel 12 i FNs menneskerettighetserklæring slår fast at ingen skal utsettes for vilkårlig innblanding i privatliv, familie, hjem eller korrespondanse. Likevel har den digitale revolusjonen skapt helt nye muligheter for innsamling, lagring og analyse av personopplysninger — muligheter som utfordrer personvernet på måter som var utenkelige for noen tiår siden.

Hvert søk du gjør, hver melding du sender, hvert steg du tar med telefonen i lommen, genererer data. Disse dataene samles inn av teknologiselskaper, myndigheter og tredjeparter. Spørsmålet er ikke lenger *om* vi overvåkes, men *i hvilken grad*, *av hvem*, og *med hvilke konsekvenser*.

I dette kapitlet skal vi utforske det juridiske rammeverket for personvern (GDPR), diskutere masseovervåkning og dens implikasjoner, og vurdere nye utfordringer som ansiktsgjenkjenning og AI-basert profilering.`,
    },

    // --- BLOKK 1: GDPR ---
    {
      id: 'tof2-5-2-def-1',
      type: 'definition',
      title: 'GDPR (General Data Protection Regulation)',
      content: `**GDPR** (General Data Protection Regulation) er EUs personvernforordning, gjeldende fra 25. mai 2018. I Norge er den implementert gjennom personopplysningsloven. GDPR regulerer behandling av personopplysninger og gir enkeltpersoner sterke rettigheter:

**Grunnprinsipper:**
- **Lovlighet, rettferdighet og åpenhet:** Behandling av persondata krever gyldig rettsgrunnlag.
- **Formålsbegrensning:** Data skal bare brukes til det formålet de ble samlet inn for.
- **Dataminimering:** Ikke samle inn mer data enn nødvendig.
- **Riktighet:** Dataene skal være korrekte og oppdaterte.
- **Lagringsbegrensning:** Data skal ikke lagres lenger enn nødvendig.
- **Integritet og konfidensialitet:** Data skal beskyttes mot uautorisert tilgang.

**Individuelle rettigheter:**
- Rett til **innsyn** i egne data
- Rett til **retting** av feilaktige data
- Rett til **sletting** («retten til å bli glemt»)
- Rett til **dataportabilitet** (flytte data til annen tjeneste)
- Rett til å **protestere** mot automatiserte beslutninger`,
    },
    {
      id: 'tof2-5-2-text-1',
      type: 'text',
      content: `### Samtykke og rettsgrunnlag

For at en virksomhet skal kunne behandle personopplysninger lovlig, trenger den et **rettsgrunnlag**. GDPR definerer seks mulige rettsgrunnlag, hvorav **samtykke** er det mest kjente:

**Samtykke** må være:
- **Frivillig:** Personen skal ikke presses til å gi samtykke.
- **Spesifikt:** Samtykket skal gjelde et konkret formål.
- **Informert:** Personen skal vite nøyaktig hva de samtykker til.
- **Utvetydig:** Samtykke krever en aktiv handling (ikke forhåndsavkryssede bokser).

Andre rettsgrunnlag inkluderer oppfyllelse av kontrakt, rettslig forpliktelse, vitale interesser, allmennhetens interesse og berettiget interesse.

I praksis er det store utfordringer med samtykke: de fleste klikker «Godta alle» på informasjonskapsler uten å lese vilkårene. Forskere kaller dette **samtykkeillusjonen** — formelt gyldig samtykke som reelt sett er meningsløst fordi brukeren ikke forstår hva de samtykker til.`,
    },
    {
      id: 'tof2-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof2-5-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilket av følgende er IKKE et krav til gyldig samtykke under GDPR?',
        options: [
          { id: 'a', text: 'Samtykket skal være frivillig', isCorrect: false },
          { id: 'b', text: 'Samtykket kan gis ved å ikke protestere (stilltiende samtykke)', isCorrect: true },
          { id: 'c', text: 'Samtykket skal gjelde et spesifikt formål', isCorrect: false },
          { id: 'd', text: 'Personen skal være informert om hva samtykket innebærer', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Under GDPR krever samtykke en aktiv, utvetydig handling — for eksempel å krysse av en boks. Stilltiende samtykke (passivt samtykke ved ikke å protestere) er ikke gyldig. De andre alternativene — frivillighet (A), spesifikt formål (C) og informert samtykke (D) — er alle reelle krav under GDPR.',
      },
    },

    // --- BLOKK 2: Masseovervåkning ---
    {
      id: 'tof2-5-2-text-2',
      type: 'text',
      content: `### Masseovervåkning: Snowden-avsløringene og deres ettervirkninger

I juni 2013 lekket den amerikanske etterretningsanalytikeren **Edward Snowden** tusenvis av hemmelige dokumenter fra NSA (National Security Agency). Dokumentene avslørte en global masseovervåkning av enestående omfang:

**PRISM:** Et program der NSA fikk direkte tilgang til data fra teknologiselskaper som Google, Facebook, Apple og Microsoft — inkludert e-post, meldinger, bilder og videosamtaler.

**XKeyscore:** Et søkeverktøy som lot NSA-analytikere søke i nesten all internett-trafikk i sanntid — uten forhåndsgodkjenning fra domstol.

**Tempora:** Et britisk program (GCHQ) som avlyttet undersjøiske fiberoptiske kabler og lagret all trafikk i opptil 30 dager.

Avsløringene utløste en global debatt om forholdet mellom nasjonal sikkerhet og individets rett til privatliv.

**Norsk kontekst:**
I 2020 vedtok Stortinget **E-tjenesteloven** (etterretningstjenesteloven), som gir Etterretningstjenesten rett til å overvåke digital kommunikasjon som krysser den norske grensen — såkalt «tilrettelagt innhenting». Kritikere kaller det en norsk masseovervåkningslov. Domstolskontroll og strenge vilkår er bygget inn, men debatten om proporsjonalitet fortsetter.

Spenningen mellom sikkerhet og frihet er et av teknologietikkens mest grunnleggende dilemmaer: hvor mye overvåkning er akseptabelt for å beskytte oss?`,
    },
    {
      id: 'tof2-5-2-example-1',
      type: 'example',
      title: 'Eksempel: «Ingenting å skjule»-argumentet',
      problem: '«Jeg har ingenting å skjule, så overvåkning er ikke et problem for meg.» Vurder dette argumentet kritisk.',
      solution: `Argumentet «ingenting å skjule» er blant de vanligste i overvåkningsdebatten, men det har alvorlige svakheter:

**1. Personvern handler ikke om å skjule noe galt.** Det handler om retten til et privat rom — akkurat som vi lukker baderomsdøra uten å gjøre noe ulovlig.

**2. Maktasymmetri:** Overvåkning skaper en ubalanse der staten eller selskaper vet alt om deg, men du vet svært lite om dem. Denne asymmetrien kan misbrukes — også i demokratier.

**3. Nedkjølingseffekten (chilling effect):** Mennesker endrer adferd når de vet de overvåkes. Journalister, aktivister og varslere tør ikke kommunisere fritt. Dette truer ytringsfriheten og demokratiet.

**4. Du definerer ikke selv hva som er «noe å skjule».** Det bestemmes av makthaverne. Hva som er akseptabelt i dag, kan bli kriminalisert i morgen — og dataene finnes allerede.

**5. Kollektivt ansvar:** Selv om du ikke trenger personvern, gjør sårbare grupper det — journalister, menneskerettighetsaktivister, minoriteter. Personvern er en kollektiv verdi, ikke bare individuell.`,
    },
    {
      id: 'tof2-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof2-5-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva ble avslørt gjennom Snowden-lekkasjene i 2013?',
        options: [
          { id: 'a', text: 'At teknologiselskaper solgte brukerdata til kriminelle', isCorrect: false },
          { id: 'b', text: 'At NSA drev global masseovervåkning av digital kommunikasjon', isCorrect: true },
          { id: 'c', text: 'At Kina hadde hacket alle vestlige regjeringer', isCorrect: false },
          { id: 'd', text: 'At GDPR ble brutt av alle EU-land', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Edward Snowden avslørte at NSA (National Security Agency) drev en global masseovervåkning gjennom programmer som PRISM, XKeyscore og samarbeid med britiske GCHQ (Tempora). Overvåkningen omfattet e-post, meldinger, telefondata og internett-trafikk fra millioner av mennesker over hele verden — ofte uten domstolskontroll.',
      },
    },

    // --- BLOKK 3: Ansiktsgjenkjenning ---
    {
      id: 'tof2-5-2-text-3',
      type: 'text',
      content: `### Ansiktsgjenkjenning: teknologi og etikk

**Ansiktsgjenkjenning** bruker maskinlæring til å identifisere eller verifisere en person basert på et bilde eller videostrøm av ansiktet. Teknologien har utviklet seg dramatisk de siste årene og brukes i dag i alt fra opplåsing av mobiltelefoner til politivirksomhet.

**Hvordan virker det?**
1. Et bilde eller videobilde fanges opp.
2. Algoritmen lokaliserer ansiktet og identifiserer **ansiktspunkter** (øyne, nese, munn, kjeveform).
3. Ansiktet konverteres til en **matematisk representasjon** (en vektor med 128–512 tall).
4. Vektoren sammenlignes med en database for å finne treff.

**Bruksområder:**
- Grensekontroll og passverifikasjon
- Overvåkning av offentlige steder (Kina, Russland)
- Opplåsing av enheter (Face ID)
- Identifisering av savnede personer
- Markedsføring og kundeanalyse

**Etiske utfordringer:**
- **Skjevheter:** Studier viser at ansiktsgjenkjenning fungerer betydelig dårligere for kvinner med mørk hud enn for hvite menn. En studie fra MIT (2018) fant feilrater på opptil 34,7 % for mørkhudede kvinner, mot 0,8 % for lyshudede menn.
- **Masseovervåkning:** I Kina brukes ansiktsgjenkjenning for sosial overvåkning i stor skala, inkludert overvåkning av uigurene i Xinjiang.
- **Samtykke:** Ansikter scannes ofte uten at personen vet det eller har samtykket.
- **Feilidentifisering:** Feilaktige treff kan føre til arrestasjon av uskyldige. Flere slike tilfeller er dokumentert i USA.

EU har foreslått forbud mot sanntids ansiktsgjenkjenning i offentlige rom i sin AI Act, med unntak for alvorlig kriminalitet.`,
    },
    {
      id: 'tof2-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof2-5-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva dataminimering og formålsbegrensning betyr i GDPR-sammenheng. Gi et eksempel på en situasjon der en virksomhet bryter begge disse prinsippene.',
        hints: ['Tenk på et konkret tilfelle der en bedrift samler inn mer informasjon enn nødvendig og bruker den til noe annet enn det opprinnelige formålet.'],
        solution: '**Dataminimering** betyr at man bare skal samle inn personopplysninger som er nødvendige for det spesifikke formålet. Man skal ikke «samle for sikkerhets skyld» eller «fordi det kan bli nyttig senere».\n\n**Formålsbegrensning** betyr at personopplysninger bare skal brukes til det formålet de ble samlet inn for. Man kan ikke gjenbruke data til helt andre formål uten nytt rettsgrunnlag.\n\nEksempel: En treningsapp ber om tilgang til GPS-posisjon for å registrere løperuter (formål: treningsregistrering). Appen samler samtidig inn data om hvilke butikker brukeren besøker, helsedata fra telefonsensorer og kontaktlisten — langt mer enn nødvendig (brudd på dataminimering). Deretter selger appen posisjonshistorikken til et reklamefirma for målrettet markedsføring (brudd på formålsbegrensning — brukeren samtykket til treningsregistrering, ikke reklame).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- BLOKK 4: Personvern i AI-alderen ---
    {
      id: 'tof2-5-2-text-4',
      type: 'text',
      content: `### Personvern i AI-alderen

Kunstig intelligens skaper fundamentalt nye utfordringer for personvernet. Mens tradisjonell databehandling håndterer eksplisitt innsamlede opplysninger, kan AI **utlede** sensitiv informasjon fra tilsynelatende harmløse data:

**Inferensproblematikken:**
- Basert på Facebook-likerklikk kan algoritmer forutsi seksuell legning, politisk overbevisning, rusmiddelbruk og personlighetstrekk med høy nøyaktighet.
- Stemmemønstre i telefonsamtaler kan avsløre depresjon.
- Bevegelsesmønstre fra mobiltelefonen kan identifisere en person selv uten GPS — basert på akselerometer og gyroskop.

Dette utfordrer GDPR, som er bygget rundt beskyttelse av *innsamlede* personopplysninger. Når AI kan *utlede* sensitiv informasjon fra ikke-sensitiv data, hva slags data er da «personopplysninger»?

**Profilering og automatiserte beslutninger:**
GDPR gir rett til å ikke bli underlagt «utelukkende automatiserte beslutninger» som har «vesentlige rettsvirkninger» (artikkel 22). Men hva betyr dette i praksis? Er en algoritme som bestemmer om du får lån, blir innkalt til jobbintervju, eller får forsikring til akseptabel pris — en «automatisert beslutning med vesentlig rettsvirkning»?

**Veien videre:**
Personverndebatten beveger seg nå mot spørsmål om **datamakt** — hvem kontrollerer dataene, hvem profitterer på dem, og hvordan kan enkeltpersoner og demokratiske institusjoner gjenvinne kontroll i en verden der data er den nye oljen.`,
    },
    {
      id: 'tof2-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof2-5-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva menes med «inferensproblematikken» i AI og personvern?',
        options: [
          { id: 'a', text: 'At AI-systemer samler inn for mye data om brukerne', isCorrect: false },
          { id: 'b', text: 'At AI kan utlede sensitiv informasjon fra tilsynelatende harmløse data', isCorrect: true },
          { id: 'c', text: 'At AI-systemer har dårlig datakvalitet', isCorrect: false },
          { id: 'd', text: 'At folk gir for mye samtykke til databehandling', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Inferensproblematikken handler om at AI-algoritmer kan utlede (inferere) sensitiv informasjon — som seksuell legning, politisk overbevisning eller helsetilstand — fra tilsynelatende harmløse data som likerklikk, bevegelsesmønstre eller handlehistorikk. Dette utfordrer tradisjonelle personvernregler som fokuserer på beskyttelse av eksplisitt innsamlede data.',
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof2-5-2-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **GDPR** gir sterke rettigheter til enkeltpersoner: innsyn, retting, sletting og dataportabilitet. Grunnprinsipper inkluderer dataminimering, formålsbegrensning og krav om gyldig samtykke.
- **Masseovervåkning** ble avslørt i stor skala gjennom Snowden-lekkasjene i 2013. I Norge gir E-tjenesteloven rett til «tilrettelagt innhenting» av digital kommunikasjon.
- **Ansiktsgjenkjenning** reiser etiske utfordringer knyttet til skjevheter, masseovervåkning, samtykke og feilidentifisering.
- **Inferensproblematikken** viser at AI kan utlede sensitiv informasjon fra harmløse data, noe som utfordrer tradisjonelle personvernrammer.
- Personverndebatten beveger seg mot spørsmål om **datamakt** — hvem kontrollerer dataene og profitterer på dem.`,
    },

    // --- Samleoppgave ---
    {
      id: 'tof2-5-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof2-5-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft påstanden: «Personvern er en luksus vi ikke har råd til i kampen mot terrorisme.» Bruk minst to etiske rammeverk (fra kapittel 5.1) og trekk inn konkrete eksempler fra Snowden-avsløringene, GDPR og/eller ansiktsgjenkjenning.',
        hints: ['Vurder argumenter både for og mot, og bruk konsekvensetikk og pliktetikk for å belyse begge sider. Avslutt med din egen vurdering.'],
        solution: '**Konsekvensetikk for overvåkning:** Masseovervåkning kan potensielt forebygge terrorangrep, noe som sparer liv — altså stor nytte for mange. PRISM-programmet hevdes å ha bidratt til å avdekke terrorplaner.\n\n**Konsekvensetikk mot overvåkning:** Snowden-avsløringene viste at masseinnnsamling av data sjelden fører til konkrete resultater i terrorbekjempelse. Nedkjølingseffekten på ytringsfrihet, journalistikk og politisk aktivisme er en stor samfunnskostnad. Masseovervåkning skaper mistillit mellom borgere og stat.\n\n**Pliktetikk mot overvåkning:** Vi har en plikt til å respektere individets privatliv og verdighet. Å overvåke alle for å fange noen få behandler hele befolkningen som potensielle mistenkte — som middel, ikke mål. GDPR bygger på pliktetiske prinsipper om individuelle rettigheter.\n\n**Pliktetikk for sikkerhet:** Staten har en plikt til å beskytte borgernes sikkerhet, noe som kan begrunne målrettet overvåkning med domstolskontroll.\n\n**Konklusjon:** Personvern er ikke en luksus — det er en forutsetning for demokrati. Målrettet overvåkning med rettslig kontroll er legitim; masseovervåkning uten proporsjonalitet undergraver de verdiene vi skal beskytte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.3: AI-etikk og algoritmisk rettferdighet
// ============================================================================

export const CHAPTER_TOF_2_5_3: TextbookChapter = {
  id: 'tof-2-5-3',
  courseId: 'tof-2',
  chapterNumber: '5.3',
  title: 'AI-etikk og algoritmisk rettferdighet',
  description: 'Skjevheter i AI, algoritmisk diskriminering, transparens og EU AI Act.',
  estimatedMinutes: 25,
  competenceGoals: [
    'vurdere etiske problemstillinger knyttet til kunstig intelligens',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof2-5-3-intro',
      type: 'text',
      content: `## AI-etikk og algoritmisk rettferdighet

Kunstig intelligens gjør stadig flere avgjørelser som påvirker menneskers liv: hvem som får lån, hvem som kalles inn til jobbintervju, hvem som stoppes av politiet, og hvem som får medisinsk behandling. Disse algoritmene er ofte presentert som objektive og nøytrale — men det er de ikke.

Algoritmer lærer fra historiske data, og historiske data gjenspeiler historisk urettferdighet. Når en ansettelsesalgoritme trenes på data fra et selskap som historisk har foretrukket menn, vil algoritmen lære å foretrekke menn. Når et politisystem trenes på data fra områder der politivirksomheten allerede var konsentrert, vil det forutsi mer kriminalitet i nettopp disse områdene.

AI-etikk handler om å identifisere, forstå og motvirke disse problemene — og om å sikre at algoritmer som påvirker menneskeliv, er rettferdige, transparente og ansvarliggjorte.`,
    },

    // --- BLOKK 1: Skjevheter i AI ---
    {
      id: 'tof2-5-3-def-1',
      type: 'definition',
      title: 'Algoritmisk skjevhet (Algorithmic Bias)',
      content: `**Algoritmisk skjevhet** oppstår når et AI-system systematisk produserer resultater som er urettferdige for bestemte grupper. Skjevheter kan oppstå på flere steder i AI-utviklingsprosessen:

1. **Dataskjevhet (Data Bias):** Treningsdataene gjenspeiler eksisterende urettferdighet eller er urepresentative. Eksempel: Et ansiktsgjenkjenningssystem trent hovedsakelig på lyshudede ansikter vil fungere dårlig for mørkhudede.

2. **Utvelgelsesskjevhet (Selection Bias):** Hvem som er med i datasettet, er ikke tilfeldig. Eksempel: Helseforskning basert primært på data fra menn gir algoritmer som fungerer dårligere for kvinner.

3. **Forsterkende tilbakekoblinger (Feedback Loops):** Algoritmens output påvirker fremtidige treningsdata, noe som forsterker opprinnelige skjevheter. Eksempel: Prediktiv politivirksomhet sender mer politi til bestemte nabolag → flere arrestasjoner der → data viser «mer kriminalitet» → enda mer politi.

4. **Målskjevhet (Target Variable Bias):** Hva vi ber algoritmen forutsi, kan i seg selv være skjevt. Eksempel: Å forutsi «sannsynlighet for gjentatt arrestasjon» er ikke det samme som å forutsi «sannsynlighet for å begå ny kriminalitet», fordi noen grupper arresteres oftere for samme handling.`,
    },
    {
      id: 'tof2-5-3-text-1',
      type: 'text',
      content: `### Feedback-loops: Når algoritmer forsterker urettferdighet

Tilbakekoblingssløyfer (feedback loops) er spesielt farlige fordi de kan gjøre skjevheter selvforsterkende. La oss se på et konkret eksempel:

**PredPol (prediktiv politivirksomhet):**
PredPol var et system brukt av politiet i flere amerikanske byer for å forutsi hvor og når forbrytelser ville skje. Systemet analyserte historiske kriminalitetsdata og markerte «hotspots» på kartet.

Problemet: Historiske kriminalitetsdata gjenspeiler ikke bare *hvor kriminalitet skjer*, men *hvor politiet patruljerer*. Områder med mer patruljering har flere registrerte lovbrudd — ikke nødvendigvis mer faktisk kriminalitet.

Syklusen ble:
1. Politi konsentrerer patruljer i område X (historisk «hot spot»)
2. Flere lovbrudd registreres i område X
3. Algoritmen forutser enda mer kriminalitet i område X
4. Politi sender enda flere patruljer til område X
5. Tilbake til steg 2...

Resultatet var at algoritmen systematisk rettet politiressurser mot fattige minoritetsområder, uavhengig av den faktiske kriminalitetsfordelingen.

Lignende feedback-loops finnes i:
- **Kredittscoring:** Mennesker i fattige områder nektes kreditt → de kan ikke bygge kreditthistorikk → algoritmen scorer dem lavere → de nektes igjen.
- **Ansettelse:** Algoritmen lærer at kandidater fra prestisjefylte universiteter klarer seg best → de ansettes → de lykkes (med bedre ressurser) → algoritmen bekreftes.`,
    },
    {
      id: 'tof2-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof2-5-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er en feedback-loop i sammenheng med algoritmisk skjevhet?',
        options: [
          { id: 'a', text: 'At brukere gir tilbakemelding til utviklerne om feil i systemet', isCorrect: false },
          { id: 'b', text: 'At algoritmens resultater påvirker fremtidige treningsdata og forsterker opprinnelige skjevheter', isCorrect: true },
          { id: 'c', text: 'At algoritmen korrigerer sine egne feil over tid', isCorrect: false },
          { id: 'd', text: 'At datasettet oppdateres jevnlig med ny informasjon', isCorrect: false },
        ],
        solution: 'Riktig svar er B. En feedback-loop i AI-sammenheng oppstår når algoritmens output (f.eks. «send politi til område X») påvirker fremtidige data (flere arrestasjoner i område X), som igjen forsterker algoritmens opprinnelige mønster. Det er altså en selvforsterkende syklus der skjevheter blir verre over tid, ikke bedre.',
      },
    },

    // --- BLOKK 2: Algoritmisk diskriminering ---
    {
      id: 'tof2-5-3-text-2',
      type: 'text',
      content: `### Algoritmisk diskriminering: tre hovedområder

Algoritmisk diskriminering manifesterer seg i mange samfunnsområder. Vi ser på tre sentrale eksempler:

**1. Ansettelse**
Amazon utviklet i 2014 et AI-system for å automatisere screening av jobbsøknader. Systemet ble trent på historiske ansettelsesdata fra de siste ti årene. Fordi teknologibransjen historisk har vært dominert av menn, lærte algoritmen å nedprioritere kandidater med indikasjoner på kvinnelig kjønn — som «women's chess club» i CV-en, eller at de hadde gått på et rent kvinneuniversitet. Amazon skrottet systemet i 2017 da skjevheten ble oppdaget.

**2. Rettsvesen (COMPAS)**
I USA brukes algoritmen **COMPAS** (Correctional Offender Management Profiling for Alternative Sanctions) for å beregne sannsynligheten for at en person begår nye lovbrudd. En undersøkelse av ProPublica (2016) viste at systemet var dobbelt så sannsynlig til å feilaktig klassifisere svarte tiltalte som høyrisiko sammenlignet med hvite tiltalte — og omvendt feilaktig klassifisere hvite tiltalte som lavrisiko.

**3. Kreditt og forsikring**
Kredittvurderingsalgoritmer kan diskriminere basert på bosted, kjøpemønstre og sosiale forbindelser — såkalte **proxy-variabler** for rase og sosioøkonomisk status. Selv om algoritmen ikke direkte bruker etnisitet, kan postnummer fungere som en stedfortreder fordi bostedsmønstre gjenspeiler historisk segregering.

Felles for alle eksemplene: diskrimineringen er *systemisk* og *usynlig* — den er innbakt i algoritmen, ikke resultatet av bevisst ondsinnethet.`,
    },
    {
      id: 'tof2-5-3-example-1',
      type: 'example',
      title: 'Eksempel: Proxy-variabler og indirekte diskriminering',
      problem: 'En bank bruker en AI-algoritme for kredittvurdering som ikke inkluderer etnisitet som variabel. Likevel får søkere fra visse postnumre systematisk dårligere kredittscore. Forklar hvorfor dette kan utgjøre diskriminering.',
      solution: `Selv om algoritmen ikke direkte bruker etnisitet, kan **postnummer fungere som en proxy-variabel** (stedfortreder) for etnisitet og sosioøkonomisk bakgrunn. Dette skyldes historisk bostedssegregering:

1. Mange land har en historie med segregering — frivillig og tvungen — som har ført til at minoritetsgrupper er overrepresentert i visse områder.
2. Disse områdene har ofte lavere eiendomsverdier, færre bankfilialer, og høyere historiske misligholdsrater — ikke nødvendigvis fordi beboerne er dårligere betalere, men fordi de har hatt dårligere tilgang til økonomiske ressurser.
3. Algoritmen fanger opp denne korrelasjonen og bruker postnummer som en sterk prediktor for kredittrisiko.
4. Resultatet er at individer fra disse områdene systematisk nektes kreditt eller får dårligere betingelser — uavhengig av deres faktiske betalingsevne.

Dette er **indirekte diskriminering**: en tilsynelatende nøytral praksis som i praksis rammer bestemte grupper uforholdsmessig. GDPR forbyr automatiserte beslutninger med vesentlige konsekvenser, og likestillingsloven forbyr indirekte diskriminering.`,
    },
    {
      id: 'tof2-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof2-5-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'ProPublicas undersøkelse av COMPAS-algoritmen i 2016 viste at:',
        options: [
          { id: 'a', text: 'Algoritmen ga like resultater uavhengig av etnisitet', isCorrect: false },
          { id: 'b', text: 'Svarte tiltalte ble dobbelt så ofte feilaktig klassifisert som høyrisiko', isCorrect: true },
          { id: 'c', text: 'Algoritmen var mer nøyaktig enn menneskelige dommere', isCorrect: false },
          { id: 'd', text: 'Algoritmen kun diskriminerte basert på kjønn, ikke etnisitet', isCorrect: false },
        ],
        solution: 'Riktig svar er B. ProPublica-analysen viste at COMPAS hadde en systematisk skjevhet der svarte tiltalte var omtrent dobbelt så sannsynlige til å bli feilaktig klassifisert som høyrisiko (falsk positiv), mens hvite tiltalte var mer sannsynlige til å bli feilaktig klassifisert som lavrisiko (falsk negativ). Dette skjedde selv om algoritmen ikke eksplisitt brukte rase som variabel.',
      },
    },

    // --- BLOKK 3: Transparens og forklarbarhet (XAI) ---
    {
      id: 'tof2-5-3-text-3',
      type: 'text',
      content: `### Transparens og forklarbar AI (Explainable AI, XAI)

Et sentralt problem med moderne AI-systemer er at de ofte er **«svarte bokser»** — selv utviklerne forstår ikke fullt ut hvorfor algoritmen tar en bestemt beslutning. Et dypt nevralt nettverk med millioner av parametere kan gi svært nøyaktige resultater, men forklaringen på *hvorfor* et bestemt resultat ble gitt, er ofte utilgjengelig.

**Hvorfor er forklarbarhet viktig?**
- **Tillit:** Mennesker stoler mer på beslutninger de forstår.
- **Ansvarliggjøring:** Uten forklarbarhet er det umulig å identifisere og korrigere skjevheter.
- **Rettssikkerhet:** Når en algoritme avslår et lån eller anbefaler fengsling, har den berørte rett til å vite hvorfor.
- **GDPR-krav:** GDPR gir rett til «meningsfulle opplysninger om logikken som ligger til grunn» for automatiserte beslutninger (artikkel 13–15).

**XAI-tilnærminger:**
Forklarbar AI (Explainable AI, XAI) er et forskningsfelt som utvikler metoder for å gjøre AI-beslutninger forståelige for mennesker:

- **LIME (Local Interpretable Model-agnostic Explanations):** Forklarer enkeltbeslutninger ved å vise hvilke input-variabler som var viktigst.
- **SHAP (SHapley Additive exPlanations):** Beregner bidraget til hver variabel basert på spillteori.
- **Oppmerksomhetsvisualisering:** For bildegjenkjenning — viser hvilke deler av bildet algoritmen «ser på».

Utfordringen er at forklarbarhet ofte kommer på bekostning av nøyaktighet: de mest forklarbare modellene (enkle regler, beslutningstrær) er ofte mindre nøyaktige enn de minst forklarbare (dype nevrale nettverk). Dette er kjent som **avveiningen mellom nøyaktighet og forklarbarhet**.`,
    },
    {
      id: 'tof2-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof2-5-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva som menes med at AI-systemer er «svarte bokser», og drøft hvorfor forklarbarhet (XAI) er viktig. Gi minst to konkrete eksempler på situasjoner der manglende forklarbarhet kan ha alvorlige konsekvenser.',
        hints: ['Tenk på situasjoner der en algoritme tar beslutninger som påvirker menneskers liv direkte — helse, rettsvesen, økonomi.'],
        solution: 'AI-systemer er «svarte bokser» fordi de ofte bruker komplekse modeller (f.eks. dype nevrale nettverk) der sammenhengen mellom input og output er ugjennomtrengelig — selv for utviklerne. Man vet hva som går inn og hva som kommer ut, men ikke *hvorfor* et bestemt resultat ble gitt.\n\nForklarbarhet er viktig fordi:\n- Det er en forutsetning for tillit og aksept\n- Det muliggjør feilsøking og korrigering av skjevheter\n- Det er et krav for rettssikkerhet og demokratisk kontroll\n- GDPR krever det ved automatiserte beslutninger\n\nEksempel 1: En pasient nektes behandling av et AI-system uten forklaring. Legen kan ikke overprøve beslutningen fordi den er uforklarlig. Pasienten kan ikke klage fordi grunnlaget er uklart.\n\nEksempel 2: En COMPAS-lignende algoritme anbefaler at en person dømmes strengere. Forsvareren kan ikke utfordre grunnlaget fordi algoritmen er en svart boks. Rettssikkerheten svekkes fundamentalt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- BLOKK 4: EU AI Act og deepfakes ---
    {
      id: 'tof2-5-3-text-4',
      type: 'text',
      content: `### EU AI Act: Verdens første AI-lov

**EU AI Act** (vedtatt i 2024) er verdens første helhetlige lovgivning for kunstig intelligens. Loven klassifiserer AI-systemer etter **risiko** og stiller krav som øker med risikonivået:

**Uakseptabel risiko (forbudt):**
- Sosial poenggivning (social scoring) av borgere
- Manipulasjon av sårbare grupper
- Sanntids ansiktsgjenkjenning i offentlige rom (med noen unntak)
- Emosjonell gjenkjenning på arbeidsplasser og i skoler

**Høy risiko (strenge krav):**
- AI i kritisk infrastruktur (energi, transport)
- AI i utdanning (opptak, vurdering)
- AI i ansettelse og arbeidsliv
- AI i rettshåndhevelse og grensekontroll
- AI i helsevesen og medisinsk utstyr

Krav for høyrisiko-AI inkluderer risikovurdering, datakvalitetskrav, menneskelig tilsyn, transparens og dokumentasjon.

**Begrenset risiko (informasjonskrav):**
- Chatbots og generativ AI: brukere skal informeres om at de kommuniserer med AI
- AI-generert innhold: skal merkes som AI-generert

**Minimal risiko (ingen krav):**
- Spam-filtre, AI i dataspill, anbefalingssystemer`,
    },
    {
      id: 'tof2-5-3-text-5',
      type: 'text',
      content: `### Deepfakes og desinformasjon

**Deepfakes** er AI-generert media — video, lyd eller bilder — der en person tilsynelatende sier eller gjør noe de aldri har sagt eller gjort. Teknologien bruker dype nevrale nettverk (generative adversarial networks, GANs, eller diffusjonsmodeller) til å lage svært realistisk falskt innhold.

**Anvendelser:**
- **Politisk desinformasjon:** Falske videoer av politikere som sier kontroversielle ting.
- **Svindel:** Falsk stemme av en direktør som instruerer en ansatt om å overføre penger.
- **Ikke-samtykkende pornografi:** Falske intime bilder/videoer av virkelige personer — det mest utbredte misbruket.
- **Underholdning og satire:** Også noen legitime bruksområder i film og humor.

**Utfordringer:**
- **Deteksjon blir vanskeligere:** Deepfakes blir stadig mer realistiske, og deteksjonsverktøy henger etter.
- **Liar's dividend:** Selv ekte video kan avfeies som deepfake — «det er bare AI». Dette undergraver tillit til all visuell evidens.
- **Skalerbarhet:** Med generativ AI kan tusenvis av falske bilder og videoer produseres på minutter.

**Tiltak:**
EU AI Act krever merking av AI-generert innhold. Plattformer som Meta og YouTube jobber med deteksjonsteknologi. Men den teknologiske kappløpet mellom generering og deteksjon er vanskelig å vinne.`,
    },
    {
      id: 'tof2-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof2-5-3-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Ifølge EU AI Act, hvilken risikoklasse tilhører et AI-system som brukes til sosial poenggivning (social scoring) av borgere?',
        options: [
          { id: 'a', text: 'Minimal risiko', isCorrect: false },
          { id: 'b', text: 'Begrenset risiko', isCorrect: false },
          { id: 'c', text: 'Høy risiko', isCorrect: false },
          { id: 'd', text: 'Uakseptabel risiko (forbudt)', isCorrect: true },
        ],
        solution: 'Riktig svar er D. Sosial poenggivning (social scoring) av borgere — der staten eller selskaper gir borgere en «sosial score» basert på adferd, med konsekvenser for rettigheter og tjenester — er klassifisert som uakseptabel risiko under EU AI Act og er derfor forbudt. Kinas «sosiale kredittsystem» er det mest kjente eksempelet på et slikt system.',
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof2-5-3-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **Algoritmisk skjevhet** oppstår når AI systematisk produserer urettferdige resultater — gjennom dataskjevhet, utvelgelsesskjevhet, feedback-loops eller målskjevhet.
- **Algoritmisk diskriminering** manifesterer seg i ansettelse (Amazon), rettsvesen (COMPAS), kreditt (proxy-variabler) og andre områder der algoritmer påvirker menneskeliv.
- **Transparens og forklarbarhet (XAI)** er nødvendig for tillit, feilretting, rettssikkerhet og GDPR-overholdelse. LIME og SHAP er sentrale XAI-metoder.
- **EU AI Act** er verdens første helhetlige AI-lov, med fire risikoklasser fra uakseptabel (forbudt) til minimal risiko.
- **Deepfakes** er AI-generert falskt media som truer demokrati, personlig integritet og tillit til visuell evidens.`,
    },

    // --- Samleoppgave ---
    {
      id: 'tof2-5-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof2-5-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Tenk deg at du er rådgiver for en norsk kommune som vurderer å ta i bruk et AI-system for å prioritere søknader om sosialhjelp. Systemet har vist seg å være mer «effektivt» enn manuell saksbehandling, men det er en svart boks. Drøft fordeler og ulemper, identifiser minst tre etiske utfordringer, og gi en anbefaling med begrunnelse.',
        hints: ['Tenk på skjevheter, forklarbarhet, rettssikkerhet, GDPR og EU AI Act. Hvem rammes hvis algoritmen tar feil?'],
        solution: '**Fordeler:** Raskere saksbehandling, mer konsistente vurderinger, frigjøring av ressurser til komplekse saker.\n\n**Ulemper og etiske utfordringer:**\n\n1. **Skjevheter:** Treningsdata kan gjenspeile historisk diskriminering — f.eks. at innvandrere eller enslige mødre systematisk har fått avslag. Algoritmen kan reprodusere dette mønsteret.\n\n2. **Manglende forklarbarhet:** En svart boks betyr at verken saksbehandler, klageinstans eller søker kan forstå hvorfor et avslag ble gitt. Dette er problematisk for rettssikkerhet og GDPR artikkel 22.\n\n3. **Menneskelig verdighet:** Sosialhjelp handler om mennesker i sårbare situasjoner. Å overlate disse vurderingene til en algoritme reduserer menneskelig empati og kontekstuell forståelse.\n\n4. **EU AI Act:** Et slikt system vil sannsynligvis klassifiseres som høyrisiko-AI, med krav om transparens, menneskelig tilsyn og risikovurdering.\n\n**Anbefaling:** AI kan brukes som beslutningsstøtte — til å prioritere og flagge saker — men den endelige beslutningen bør alltid tas av en menneskelig saksbehandler. Systemet bør revideres regelmessig for skjevheter, og søkere må informeres om at AI er involvert og ha rett til å klage til et menneske.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.4: Bærekraftig teknologiutvikling
// ============================================================================

export const CHAPTER_TOF_2_5_4: TextbookChapter = {
  id: 'tof-2-5-4',
  courseId: 'tof-2',
  chapterNumber: '5.4',
  title: 'Bærekraftig teknologiutvikling',
  description: 'Grønn teknologi, sirkulær økonomi, teknologiens klimaavtrykk og livsløpsanalyse.',
  estimatedMinutes: 25,
  competenceGoals: [
    'vurdere teknologiens rolle i bærekraftig utvikling',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof2-5-4-intro',
      type: 'text',
      content: `## Bærekraftig teknologiutvikling

Teknologi presenteres ofte som løsningen på klimakrisen — fornybar energi, elbiler, karbonfangst og grønt hydrogen. Men teknologi har også et betydelig klimaavtrykk i seg selv: datasentre bruker enorme mengder energi, produksjon av elektronikk krever sjeldne jordarter utvunnet under tvilsomme forhold, og e-avfall er en voksende global utfordring.

Bærekraftig teknologiutvikling handler om å utvikle og bruke teknologi slik at den bidrar til — snarere enn undergraver — en bærekraftig fremtid. Det krever at vi ser på hele **livsløpet** til en teknologi: fra utvinning av råmaterialer, gjennom produksjon og bruk, til avhending og resirkulering.

I dette kapitlet utforsker vi grønn teknologi, sirkulær økonomi, teknologiens klimaavtrykk og verktøy for å vurdere teknologiens totale miljøpåvirkning.`,
    },

    // --- BLOKK 1: Grønn teknologi ---
    {
      id: 'tof2-5-4-text-1',
      type: 'text',
      content: `### Grønn teknologi: fornybar energi og hydrogen

**Grønn teknologi** refererer til teknologier som reduserer menneskelig miljøpåvirkning, enten ved å erstatte forurensende alternativer eller ved å gjøre eksisterende prosesser mer effektive.

**Fornybar energi:**
De viktigste fornybare energikildene er sol, vind, vann og bioenergi. Utviklingen har vært dramatisk:
- **Solceller:** Prisen har falt med over 99 % siden 1976 og med ca. 90 % bare det siste tiåret. Solenergi er nå den billigste energikilden i store deler av verden.
- **Vindkraft:** Onshore vindkraft er konkurransedyktig med fossile brensler i mange markeder. Offshore vindkraft er under rask utvikling, inkludert flytende havvind — der Norge er en teknologileder.
- **Vannkraft:** Norge dekker over 90 % av sitt kraftbehov med vannkraft, men globalt er potensialet for ny vannkraft begrenset av miljøhensyn (elvedelta, fiskevandring).

**Hydrogen:**
Hydrogen kan produseres på ulike måter, med ulik klimapåvirkning:
- **Grønt hydrogen:** Produsert ved elektrolyse av vann med fornybar energi — klimanøytralt.
- **Blått hydrogen:** Produsert fra naturgass med karbonfangst og -lagring (CCS).
- **Grått hydrogen:** Produsert fra naturgass uten CCS — den vanligste og mest forurensende metoden.

Hydrogen har potensial som energibærer for tungtransport, skipsfart og industri — sektorer som er vanskelige å elektrifisere direkte. Utfordringer inkluderer høy produksjonskostnad, lagring og distribusjon.`,
    },
    {
      id: 'tof2-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof2-5-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom grønt og grått hydrogen?',
        options: [
          { id: 'a', text: 'Grønt hydrogen er dyrere å transportere enn grått hydrogen', isCorrect: false },
          { id: 'b', text: 'Grønt hydrogen produseres med fornybar energi, grått med naturgass uten karbonfangst', isCorrect: true },
          { id: 'c', text: 'Grønt hydrogen brukes i industrien, grått hydrogen i transport', isCorrect: false },
          { id: 'd', text: 'Grått hydrogen er fargekodet grått for å vise at det er eksperimentelt', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Grønt hydrogen produseres ved elektrolyse av vann med strøm fra fornybare energikilder — prosessen er klimanøytral. Grått hydrogen produseres fra naturgass (metan) gjennom dampereformering uten karbonfangst, noe som slipper ut betydelige mengder CO₂. Blått hydrogen er mellomvarianten: naturgass med karbonfangst.',
      },
    },

    // --- BLOKK 2: Sirkulær økonomi ---
    {
      id: 'tof2-5-4-def-1',
      type: 'definition',
      title: 'Sirkulær økonomi',
      content: `**Sirkulær økonomi** er et økonomisk system der produkter, materialer og ressurser holdes i omløp så lenge som mulig, i motsetning til den tradisjonelle **lineære økonomien** (ta-bruk-kast).

Kjerneprinsippene i sirkulær økonomi:

1. **Design for holdbarhet:** Produkter designes for å vare, repareres og oppgraderes.
2. **Design for demontering:** Produkter designes slik at materialene enkelt kan separeres og gjenvinnes.
3. **Cradle-to-cradle:** Materialer skal enten være biologiske (kan komposteres) eller tekniske (kan resirkuleres i det uendelige) — aldri blandet på en måte som gjør gjenvinning umulig.
4. **Produkt som tjeneste:** Bedrifter eier produktet og selger bruken (f.eks. leasing av lys i stedet for salg av lyspærer).
5. **Industriell symbiose:** Avfall fra én industri brukes som råmateriale for en annen.

EU har vedtatt en handlingsplan for sirkulær økonomi som påvirker alt fra emballasje og tekstiler til elektronikk og batterier.`,
    },
    {
      id: 'tof2-5-4-text-2',
      type: 'text',
      content: `### Cradle-to-cradle-prinsippet

**Cradle-to-cradle** (vugge-til-vugge) ble utviklet av kjemikeren Michael Braungart og arkitekten William McDonough. Konseptet snur den tradisjonelle tilnærmingen «cradle-to-grave» (vugge-til-grav) på hodet:

I stedet for å minimere skade (gjøre ting «mindre dårlig»), handler cradle-to-cradle om å **designe ting som er positivt gode** — produkter som etter endt bruk kan gå inn i nye produktsykluser uten tap av kvalitet.

**To materialsykluser:**
1. **Biologisk syklus:** Materialer som kan brytes ned biologisk og gi næring til naturen — som bomull, tre, eller bionedbrytbar plast.
2. **Teknisk syklus:** Materialer som metaller, glass og visse plasttyper som kan resirkuleres gjentatte ganger uten kvalitetstap.

Problemet oppstår når disse syklusene blandes: en t-skjorte i bomull-polyester-blanding kan verken komposteres (polyester) eller resirkuleres effektivt (bomullen forstyrrer). Moderne elektronikk er spesielt problematisk: en smarttelefon inneholder over 60 ulike grunnstoffer, mange limt og loddet sammen på måter som gjør separasjon nesten umulig.

Cradle-to-cradle-sertifisering vurderer produkter på fem kriterier: materialehelse, materialgjenvinning, fornybar energi, vannforvaltning og sosial rettferdighet.`,
    },
    {
      id: 'tof2-5-4-example-1',
      type: 'example',
      title: 'Eksempel: Lineær vs. sirkulær mobiltelefon',
      problem: 'Sammenlign livsløpet til en mobiltelefon i en lineær og en sirkulær økonomi.',
      solution: `**Lineær økonomi (dagens modell):**
1. **Utvinning:** Sjeldne jordarter utvinnes i Kongo og Kina, kobolt utvinnes under farlige forhold.
2. **Produksjon:** Komponenter produseres i Asia med stort energiforbruk.
3. **Bruk:** Telefonen brukes i gjennomsnittlig 2–3 år.
4. **Kast:** Telefonen kastes. Kun en liten andel av materialene gjenvinnes. Mye ender som e-avfall i utviklingsland.

**Sirkulær økonomi (fremtidens modell):**
1. **Design:** Telefonen designes modulært — skjerm, batteri, kamera og prosessor kan byttes individuelt (som Fairphone).
2. **Materialvalg:** Resirkulerte og etisk utvunnede materialer prioriteres.
3. **Bruk:** Telefonen oppgraderes gjennom modulbytte, ikke totalutskiftning. Levetid: 5–7 år.
4. **Retur:** Telefonen returneres til produsenten, som demonterer den og bruker materialene i nye produkter.
5. **Ingen avfall:** Alle materialer går inn i nye sykluser.

Fairphone er et nederlandsk selskap som produserer modulære smarttelefoner med fokus på rettferdig handel og reparerbarhet — et konkret eksempel på sirkulær tenkning i praksis.`,
    },
    {
      id: 'tof2-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof2-5-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er kjernen i cradle-to-cradle-prinsippet?',
        options: [
          { id: 'a', text: 'At produkter skal gjenvinnes minst én gang før de kastes', isCorrect: false },
          { id: 'b', text: 'At materialer etter endt bruk kan gå inn i nye sykluser uten kvalitetstap', isCorrect: true },
          { id: 'c', text: 'At produksjonen skal bruke minst mulig energi', isCorrect: false },
          { id: 'd', text: 'At alle produkter skal lages av biologisk nedbrytbare materialer', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Cradle-to-cradle handler om at materialer — enten biologiske eller tekniske — skal kunne gå inn i nye produktsykluser etter endt bruk uten tap av kvalitet. Det handler ikke bare om å gjenvinne én gang (A), minimere energi (C) eller bruke kun biologiske materialer (D) — men om et helt designfilosofisk skifte der avfall elimineres ved design.',
      },
    },

    // --- BLOKK 3: Teknologiens klimaavtrykk ---
    {
      id: 'tof2-5-4-text-3',
      type: 'text',
      content: `### Teknologiens klimaavtrykk

Mens teknologi ofte fremstilles som en del av klimaløsningen, har den digitale industrien i seg selv et betydelig og voksende klimaavtrykk:

**Datasentre:**
- Datasentre bruker om lag 1–2 % av verdens totale elektrisitet — like mye som hele flyindustrien.
- Trening av én stor AI-modell kan generere CO₂-utslipp tilsvarende fem bilers totale levetidsutslipp.
- Datasentre krever enorme mengder vann til kjøling — et stort datasenter kan bruke like mye vann som en by med 50 000 innbyggere.
- Norges rike tilgang på fornybar energi gjør landet attraktivt for datasentre, men debatten om arealbruk og kraftbalanse er økende.

**E-avfall (elektronisk avfall):**
- Verden genererte over 60 millioner tonn e-avfall i 2022 — og mengden vokser med 3–4 % årlig.
- Kun ca. 20 % av e-avfall samles inn og resirkuleres formelt. Resten ender på fyllinger eller eksporteres ulovlig til utviklingsland.
- E-avfall inneholder giftige stoffer som bly, kvikksølv og kadmium, samt verdifulle materialer som gull, sølv og palladium.

**Sjeldne jordarter:**
- Moderne elektronikk er avhengig av sjeldne jordarter — 17 grunnstoffer som brukes i alt fra smarttelefoner til vindturbiner og elbilbatterier.
- Utvinning er konsentrert i Kina (ca. 60 % av verdens produksjon) og foregår ofte med store miljøskader: forgiftning av grunnvann, radioaktivt avfall og ødeleggelse av landbruksjord.
- Kobolt, brukt i litium-ion-batterier, utvinnes delvis gjennom barnearbeid i Den demokratiske republikken Kongo.

Den digitale industrien står overfor et paradoks: den teknologien som skal hjelpe oss å løse klimakrisen, bidrar selv til den.`,
    },
    {
      id: 'tof2-5-4-note-1',
      type: 'note',
      title: 'Jevons paradoks og rebound-effekten',
      content: `**Jevons paradoks** (oppkalt etter økonomen William Stanley Jevons, 1865) beskriver et motintuitivt fenomen: når teknologisk effektivisering gjør en ressurs billigere å bruke, øker totalforbruket ofte i stedet for å synke.

Eksempler:
- Mer energieffektive biler gjør det billigere å kjøre → folk kjører mer.
- Energieffektive datasentre senker kostnaden per beregning → etterspørselen etter beregningskraft eksploderer (AI, streaming, krypto).
- Mer effektive LED-pærer → folk installerer mer belysning.

Denne **rebound-effekten** betyr at teknologisk effektivisering alene ikke er nok til å sikre bærekraft. Strukturelle endringer i forbruksmønstre, politisk regulering og økonomiske insentiver er like nødvendige.`,
    },
    {
      id: 'tof2-5-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof2-5-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv tre ulike måter teknologi bidrar til klimaavtrykk (datasentre, e-avfall, sjeldne jordarter). For hvert punkt, forklar problemet og foreslå et tiltak som kan redusere påvirkningen.',
        hints: ['Tenk på hele livsløpet — fra produksjon til avhending. Hvilke tiltak er teknologiske, og hvilke krever politisk regulering?'],
        solution: '**1. Datasentre:** Bruker 1–2 % av verdens elektrisitet og store mengder kjølevann. Tiltak: Plassere datasentre i land med fornybar energi (som Norge), utvikle mer energieffektive prosessorer, bruke spillvarme til fjernvarme.\n\n**2. E-avfall:** Over 60 millioner tonn årlig, kun 20 % resirkuleres. Inneholder giftstoffer og verdifulle materialer. Tiltak: Innføre produsentansvar (produsenter må ta tilbake produkter), designe for demontering og reparerbarhet, forby eksport av e-avfall til utviklingsland.\n\n**3. Sjeldne jordarter:** Utvinning forårsaker miljøskader og menneskerettighetsbrudd. Konsentrert i Kina og Kongo. Tiltak: Utvikle resirkuleringsteknologi for sjeldne jordarter (i dag gjenvinnes under 1 %), diversifisere leverandørkjeder, forske på alternativer, innføre sporbarhetskrav i leverandørkjeden (supply chain due diligence).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- BLOKK 4: Livsløpsanalyse og FNs bærekraftsmål ---
    {
      id: 'tof2-5-4-def-2',
      type: 'definition',
      title: 'Livsløpsanalyse (LCA)',
      content: `**Livsløpsanalyse (Life Cycle Assessment, LCA)** er en systematisk metode for å vurdere miljøpåvirkningen av et produkt, en prosess eller en tjeneste gjennom hele livsløpet — fra «vugge til grav»:

**De fire fasene i LCA (ISO 14040/14044):**

1. **Mål og omfang:** Definer hva som undersøkes, systemgrenser og funksjonell enhet (f.eks. «1 kWh strøm levert til nettet» eller «transport av 1 person 1 km»).

2. **Livsløpsinventar (LCI):** Kartlegg alle input (råmaterialer, energi, vann) og output (utslipp, avfall, produkter) i alle faser: råmaterialutvinning → produksjon → distribusjon → bruk → avhending.

3. **Konsekvensanalyse (LCIA):** Vurder miljøpåvirkningen i kategorier som klimaendring (kg CO₂-ekvivalenter), forsuring, overgjødsling, ozonnedbrytning, ressursuttømming og humantoksisitet.

4. **Tolkning:** Analyser resultatene, identifiser de mest betydningsfulle miljøpåvirkningene, og gi anbefalinger.

LCA brukes til å sammenligne alternativer — for eksempel: er en elbil mer miljøvennlig enn en fossilbil over hele livsløpet? Svaret avhenger av strømkilde, batteriproduksjon, kjørelengde og resirkulering.`,
    },
    {
      id: 'tof2-5-4-text-4',
      type: 'text',
      content: `### FNs bærekraftsmål og teknologi

FNs 17 bærekraftsmål (Sustainable Development Goals, SDGs), vedtatt i 2015, utgjør en global handlingsplan for bærekraftig utvikling frem til 2030. Teknologi spiller en avgjørende rolle for å nå mange av disse målene — men kan også undergrave dem:

**Teknologi som løsning:**
- **Mål 7 (Ren energi):** Fornybar energiteknologi er avgjørende for å erstatte fossil energi.
- **Mål 9 (Industri, innovasjon og infrastruktur):** Teknologisk innovasjon driver økonomisk utvikling og bærekraftig industrialisering.
- **Mål 13 (Klimahandling):** Karbonfangst, energieffektivisering og klimamodellering med AI bidrar til klimatilpasning.
- **Mål 3 (God helse):** Medisinsk teknologi, telemedisin og AI-diagnostikk forbedrer helsetilbudet globalt.

**Teknologi som problem:**
- **Mål 12 (Ansvarlig forbruk og produksjon):** Planlagt foreldelse, e-avfall og reklamealgoritmer driver overforbruk.
- **Mål 10 (Mindre ulikhet):** Det digitale skillet (digital divide) forsterker ulikhet mellom og innenfor land. De som mangler tilgang til teknologi og digital kompetanse, faller bak.
- **Mål 15 (Livet på land):** Utvinning av sjeldne jordarter ødelegger økosystemer.
- **Mål 16 (Fred, rettferdighet og sterke institusjoner):** Desinformasjon, overvåkning og autonome våpensystemer truer demokrati og fred.

Poenget er at teknologi aldri er entydig positiv eller negativ for bærekraft — det avhenger av *hvordan* den utvikles, *hvem* som kontrollerer den, og *hvilke verdier* som bygges inn. Bærekraftig teknologiutvikling krever helhetlig tenkning som integrerer miljø, økonomi og sosial rettferdighet.`,
    },
    {
      id: 'tof2-5-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof2-5-4-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva er det viktigste formålet med en livsløpsanalyse (LCA)?',
        options: [
          { id: 'a', text: 'Å beregne produksjonskostnaden for et produkt', isCorrect: false },
          { id: 'b', text: 'Å vurdere miljøpåvirkningen gjennom hele produktets livsløp', isCorrect: true },
          { id: 'c', text: 'Å måle kvaliteten på et ferdig produkt', isCorrect: false },
          { id: 'd', text: 'Å teste sikkerheten til et produkt under bruk', isCorrect: false },
        ],
        solution: 'Riktig svar er B. En livsløpsanalyse (LCA) er en systematisk metode for å vurdere miljøpåvirkningen av et produkt gjennom hele livsløpet — fra råmaterialutvinning via produksjon og bruk til avhending. Målet er å identifisere hvor i livsløpet miljøpåvirkningen er størst, og sammenligne alternativer. Det handler ikke om produksjonskostnad (A), produktkvalitet (C) eller sikkerhetstesting (D).',
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof2-5-4-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **Grønn teknologi** omfatter fornybar energi (sol, vind, vann), hydrogen (grønt, blått, grått) og andre teknologier som reduserer miljøpåvirkning.
- **Sirkulær økonomi** erstatter «ta-bruk-kast» med lukkede materialsykluser. **Cradle-to-cradle** er et designprinsipp der materialer kan gjenbrukes i det uendelige.
- **Teknologiens klimaavtrykk** er betydelig: datasentre bruker 1–2 % av verdens strøm, e-avfall vokser med 3–4 % årlig, og utvinning av sjeldne jordarter medfører store miljø- og menneskerettighetsproblemer.
- **Jevons paradoks** viser at effektivisering alene ikke er nok — totalforbruket kan øke når det blir billigere å bruke en ressurs.
- **Livsløpsanalyse (LCA)** er en standardisert metode for å vurdere miljøpåvirkning fra vugge til grav.
- **FNs bærekraftsmål** berøres av teknologi på komplekse måter — teknologi er både del av løsningen og del av problemet.`,
    },

    // --- Samleoppgave ---
    {
      id: 'tof2-5-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof2-5-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjennomfør en forenklet livsløpsanalyse av en elbil sammenlignet med en fossilbil. Identifiser de viktigste miljøpåvirkningene i hver fase (råmaterialer, produksjon, bruk, avhending). Vurder om elbilen er «grønnere» totalt sett, og diskuter under hvilke forutsetninger svaret endres. Bruk også begrepet Jevons paradoks i drøftingen.',
        hints: ['Tenk på batteriproduksjon (litium, kobolt), energikilder for lading, kjørelengde som påvirker break-even, og hva som skjer med batteriene etter endt bruk. Hvordan kan Jevons paradoks påvirke bildet?'],
        solution: '**Råmaterialer:** Elbilen krever litium, kobolt, nikkel og sjeldne jordarter for batteri og motor — utvinning med betydelig miljø- og sosial belastning. Fossilbilen krever stål og olje — med egne utfordringer, men kjente materialer.\n\n**Produksjon:** Batteriproduksjon er energiintensiv og gir høyere CO₂-utslipp ved produksjon enn fossilbiler. En elbil «starter med et underskudd».\n\n**Bruk:** Her er elbilens store fordel. Med ren energi (som norsk vannkraft) er utslippene nær null. Med kull-basert strøm (som i deler av Kina) er fordelen mye mindre. Etter typisk 30 000–50 000 km innhenter elbilen fossilbilens produksjonsunderskudd — avhengig av strømkilde.\n\n**Avhending:** Elbilbatterier kan gjenbrukes som energilagring og deretter resirkuleres. Resirkuleringsteknologien er under utvikling — i dag gjenvinnes ca. 50 % av batteriets verdi.\n\n**Totalvurdering:** Med ren energi og lang levetid er elbilen klart grønnere. Med fossil strøm og kort levetid er fordelen marginal. Svaret avhenger av strømkilde, kjørelengde, produksjonsland og batteriresirkulering.\n\n**Jevons paradoks:** Billigere kjøring (elektrisitet er billigere enn bensin) kan føre til at folk kjører mer, får flere biler, eller velger større biler. Uten endring i transportpolitikk og forbruksmønstre kan effektiviseringsgevinsten spises opp av økt bilbruk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.5: Digital transformasjon og arbeidsliv
// ============================================================================

export const CHAPTER_TOF_2_5_5: TextbookChapter = {
  id: 'tof-2-5-5',
  courseId: 'tof-2',
  chapterNumber: '5.5',
  title: 'Digital transformasjon og arbeidsliv',
  description: 'Automatisering, nye yrker, digital kompetanse og omstilling.',
  estimatedMinutes: 25,
  competenceGoals: [
    'drøfte teknologi og arbeidsliv',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof2-5-5-intro',
      type: 'text',
      content: `## Digital transformasjon og arbeidsliv

Teknologisk utvikling har alltid endret arbeidslivet — fra dampmaskinens revolusjon av fabrikkindustrien til samlebåndets standardisering av masseproduksjon. Men tempoet i dagens digitale transformasjon er historisk: kunstig intelligens, robotikk, skyteknologi og automatisering endrer ikke bare *hvordan* vi jobber, men *hva* vi jobber med og *hvem* som trenger å jobbe.

Den fjerde industrielle revolusjonen — karakterisert av sammensmeltingen av digitale, fysiske og biologiske teknologier — reiser fundamentale spørsmål: Hvilke yrker forsvinner? Hvilke nye yrker oppstår? Hva slags kompetanse trenger fremtidens arbeidstakere? Og hvordan sikrer vi en rettferdig omstilling der gevinstene ikke bare tilfaller de som allerede har mest?

I dette kapitlet utforsker vi automatiseringens påvirkning på ulike sektorer, fremveksten av nye yrkesroller, betydningen av digital kompetanse, og de politiske og samfunnsmessige utfordringene knyttet til omstilling.`,
    },

    // --- BLOKK 1: Digital transformasjon ---
    {
      id: 'tof2-5-5-text-1',
      type: 'text',
      content: `### Hva er digital transformasjon?

**Digital transformasjon** refererer til den grunnleggende endringen av hvordan organisasjoner opererer og leverer verdi gjennom bruk av digital teknologi. Det handler ikke bare om å digitalisere eksisterende prosesser (som å gå fra papirskjema til nettskjema), men om å tenke fundamentalt nytt om forretningsmodeller, arbeidsprosesser og verdiforslag.

**Tre nivåer av digitalisering:**

1. **Digitisering:** Å konvertere analog informasjon til digital form. Eksempel: Skanne papirdokumenter til PDF.
2. **Digitalisering:** Å bruke digital teknologi til å endre arbeidsprosesser. Eksempel: Et sykehus som innfører elektronisk pasientjournal, slik at leger kan dele informasjon på tvers av avdelinger i sanntid.
3. **Digital transformasjon:** Å bruke teknologi til å fundamentalt endre forretningsmodell og verdiskaping. Eksempel: Netflix gikk fra DVD-utleie per post til en global strømmetjeneste — og deretter til å bli et av verdens største produksjonsselskaper for film og TV.

**Nøkkelteknologier i digital transformasjon:**
- **Kunstig intelligens (AI):** Automatiserer beslutninger, genererer innhold, og analyserer store datamengder.
- **Skyteknologi (cloud computing):** Gjør det mulig for bedrifter å skalere uten egen infrastruktur.
- **Tingenes internett (IoT):** Kobler fysiske objekter til nett — fra industrielle sensorer til smarthjem.
- **Stordataanalyse (big data analytics):** Utleder innsikt fra massive datasett for å drive beslutninger.
- **Blokkjede (blockchain):** Muliggjør desentralisert tillit og sporbarhet i leverandørkjeder.

Digital transformasjon er ikke bare et teknologisk spørsmål — det er et organisatorisk, kulturelt og strategisk skifte som påvirker hele samfunnet.`,
    },
    {
      id: 'tof2-5-5-def-1',
      type: 'definition',
      title: 'Digital transformasjon',
      content: `**Digital transformasjon** er den grunnleggende endringen av hvordan organisasjoner skaper og leverer verdi gjennom integrering av digital teknologi i alle deler av virksomheten. Det innebærer ikke bare ny teknologi, men også nye måter å tenke, organisere og lede på.

Skillet mellom **digitisering** (analog → digital), **digitalisering** (nye prosesser med digital teknologi) og **digital transformasjon** (fundamentalt ny verdiskaping) er sentralt for å forstå utviklingens ulike nivåer.`,
    },
    {
      id: 'tof2-5-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof2-5-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva skiller digital transformasjon fra digitalisering?',
        options: [
          { id: 'a', text: 'Digital transformasjon handler om å kjøpe nyere datamaskiner', isCorrect: false },
          { id: 'b', text: 'Digital transformasjon innebærer fundamentalt nye forretningsmodeller, ikke bare nye prosesser', isCorrect: true },
          { id: 'c', text: 'Digitalisering er mer omfattende enn digital transformasjon', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell — begrepene brukes synonymt', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Digitalisering handler om å bruke digital teknologi til å forbedre eksisterende arbeidsprosesser — for eksempel å innføre elektronisk journalføring i helsevesenet. Digital transformasjon går et steg lenger og innebærer at teknologien fundamentalt endrer forretningsmodell og verdiskaping — som da Netflix gikk fra DVD-utleie til global strømmetjeneste. Det handler ikke bare om nye verktøy (A), digitalisering er et delnivå (C), og begrepene er ikke synonyme (D).',
      },
    },

    // --- BLOKK 2: Automatisering ---
    {
      id: 'tof2-5-5-text-2',
      type: 'text',
      content: `### Automatisering: hvilke jobber er truet?

**Automatisering** innebærer at maskiner, roboter eller programvare overtar oppgaver som tidligere ble utført av mennesker. Den pågående bølgen av automatisering skiller seg fra tidligere ved at den ikke bare rammer rutinepregede manuelle oppgaver, men i økende grad også kognitive oppgaver — takket være fremskritt innen kunstig intelligens.

**Tre kategorier av automatiserbarhet:**

1. **Høy automatiseringsrisiko (over 70 % av oppgavene kan automatiseres):**
   - Kassamedarbeidere, lagerarbeidere, dataregistrerere, sjåfører, bankfunksjonærer, regnskapsførere (rutineoppgaver).
   - Kjennetegn: Oppgavene er repetitive, regelbaserte og forutsigbare.

2. **Middels automatiseringsrisiko (30–70 %):**
   - Saksbehandlere, laboratorieteknikere, journalister (standardrapportering), grafiske designere.
   - Kjennetegn: Deler av jobben kan automatiseres, men det kreves fortsatt menneskelig vurdering for andre deler.

3. **Lav automatiseringsrisiko (under 30 %):**
   - Sykepleiere, psykologer, lærere, sosialarbeidere, forskere, kreative kunstnere, ledere.
   - Kjennetegn: Oppgavene krever empati, kreativitet, kompleks problemløsning, mellommenneskelig interaksjon eller fysisk tilpasningsevne i uforutsigbare miljøer.

**McKinsey Global Institute** (2023) estimerte at generativ AI kan automatisere oppgaver tilsvarende 300 millioner fulltidsjobber globalt — men presiserte at dette ikke betyr at 300 millioner mennesker mister jobben. Ofte automatiseres *deler* av en jobb, og nye oppgaver legges til.

**Polarisering av arbeidsmarkedet:**
Et bekymringsfullt mønster er at automatisering fjerner «midtsjiktet» av arbeidsmarkedet — godt betalte rutinebaserte jobber i industri og administrasjon — mens det skapes jobber i toppen (høykvalifiserte, godt betalte) og bunnen (lavkvalifiserte servicejobber med lav lønn). Dette bidrar til økende økonomisk ulikhet.`,
    },
    {
      id: 'tof2-5-5-example-1',
      type: 'example',
      title: 'Eksempel: Automatisering i norsk lakseindustri',
      problem: 'Hvordan har automatisering endret norsk lakseindustri, og hvilke konsekvenser har det hatt?',
      solution: `**Bakgrunn:** Norsk lakseoppdrett er en av landets viktigste eksportnæringer (verdi ca. 120 milliarder kroner årlig). Industrien har gjennomgått en dramatisk digital transformasjon.

**Automatisering i praksis:**
- **Fôringsautomater:** Sensorer måler laksens appetitt i sanntid og doserer fôr automatisk — reduserer fôrspill med 10–20 % og avlaster manuelle fôringsoperatører.
- **Kameraovervåkning med AI:** Undervannsskameraer med maskinlæring identifiserer lakselus, sykdom og fiskeatferd — erstatter manuell inspeksjon.
- **Autonome servicefaretøy:** Droner og ubemannede båter inspiserer merder og ankersystemer.
- **Slakteri-roboter:** Moderne slakterier er nærmest helautomatiserte — med roboter som slakter, filetar og pakker laks med minimal menneskelig involvering.

**Konsekvenser:**
- **Produktivitetsøkning:** Produksjonen har økt dramatisk med færre ansatte per tonn.
- **Kompetanseendring:** Behovet har skiftet fra ufaglærte operatører til dataingeniører, AI-spesialister og tekniske vedlikeholdsfolk.
- **Distriktspåvirkning:** Mange oppdrettsanlegg ligger i små kystsamfunn. Når jobbene som forsvinner er ufaglærte og de nye krever høyere utdanning, kan lokalsamfunn tape arbeidsplasser uten å vinne nye.
- **HMS-forbedring:** Farlige oppgaver (som å dykke under merdene) utføres nå av ROV-er (fjernstyrte undervannsfarkoster).

Lakseindustrien illustrerer både mulighetene og utfordringene ved automatisering i norsk kontekst.`,
    },
    {
      id: 'tof2-5-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof2-5-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva kjennetegner yrker med høy automatiseringsrisiko?',
        options: [
          { id: 'a', text: 'Oppgavene krever sterk emosjonell intelligens og empati', isCorrect: false },
          { id: 'b', text: 'Oppgavene er repetitive, regelbaserte og forutsigbare', isCorrect: true },
          { id: 'c', text: 'Yrkene finnes bare i privat sektor', isCorrect: false },
          { id: 'd', text: 'De krever formell høyere utdanning på masternivå', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Yrker med høy automatiseringsrisiko kjennetegnes av at oppgavene er repetitive, regelbaserte og forutsigbare — som dataregistrering, kassaarbeid og enkel regnskapsføring. Disse oppgavene kan enkelt kodifiseres i algoritmer. Yrker som krever empati (A), som sykepleiere og psykologer, har lav automatiseringsrisiko. Automatiseringsrisiko avhenger av oppgavenes natur, ikke sektortilhørighet (C) eller utdanningskrav (D).',
      },
    },

    // --- BLOKK 3: Fremtidens arbeidsliv og kompetanse ---
    {
      id: 'tof2-5-5-text-3',
      type: 'text',
      content: `### Nye yrker og fremtidens kompetansebehov

Mens automatisering fjerner noen yrker, skaper den også helt nye. Historisk har teknologiske revolusjoner alltid skapt flere jobber enn de har fjernet — men overgangen er smertefull for de som rammes.

**Nye yrkesroller skapt av digital transformasjon:**
- **AI-trener:** Trener og finjusterer AI-modeller, kuraterer treningsdata, tester for skjevheter.
- **Prompt engineer:** Spesialist i å formulere effektive instruksjoner til store språkmodeller.
- **Dataetiker / AI-etiker:** Vurderer etiske implikasjoner av algoritmiske systemer.
- **Digital tvillingspesialist:** Bygger og vedlikeholder digitale kopier av fysiske systemer for simulering.
- **Cybersikkerhetsspesialist:** Beskytter organisasjoner mot stadig mer sofistikerte digitale trusler.
- **Bærekraftsteknolog:** Kombinerer teknologikompetanse med kunnskap om miljø og bærekraft.
- **UX-forsker:** Forsker på brukeratferd for å designe bedre digitale tjenester.
- **Robotkoordinator:** Styrer samarbeidet mellom mennesker og roboter i produksjon og logistikk.

**World Economic Forum (2023)** identifiserte de viktigste kompetansene for fremtidens arbeidsliv:

1. **Analytisk tenkning og innovasjon** — evnen til å analysere komplekse problemer og tenke kreativt.
2. **Aktiv læring og læringsstrategier** — evnen til å lære kontinuerlig gjennom hele karrieren.
3. **Kompleks problemløsning** — å håndtere problemer som ikke har standardsvar.
4. **Kritisk tenkning og analyse** — å vurdere informasjon kritisk og identifisere sammenhenger.
5. **Kreativitet, originalitet og initiativ** — det mennesker fortsatt gjør bedre enn maskiner.
6. **Teknologisk kompetanse** — å bruke, forstå og vurdere digital teknologi.
7. **Resiliens, stresstoleranse og fleksibilitet** — å tilpasse seg endring og usikkerhet.

Fellesnevneren er at **«lære å lære»** er den viktigste kompetansen — fordi den spesifikke kunnskapen som trengs, vil endre seg raskere enn noen gang.`,
    },
    {
      id: 'tof2-5-5-def-2',
      type: 'definition',
      title: 'Livslang læring',
      content: `**Livslang læring** (engelsk: *lifelong learning*) er prinsippet om at læring ikke slutter med formell utdanning, men fortsetter gjennom hele livet. I konteksten av digital transformasjon innebærer det at arbeidstakere kontinuerlig må oppdatere sine ferdigheter for å holde tritt med teknologisk utvikling.

Relaterte begreper:
- **Omskolering (reskilling):** Å lære helt nye ferdigheter for en ny yrkesrolle — f.eks. en fabrikarbeider som omskoleres til dataanalytiker.
- **Oppskillering (upskilling):** Å bygge videre på eksisterende kompetanse med nye ferdigheter — f.eks. en regnskapsfører som lærer seg å bruke AI-baserte analyseverktøy.
- **Mikrokredentialer:** Kortere, målrettede sertifiseringer som dokumenterer spesifikke ferdigheter — et alternativ til fulle grader.`,
    },
    {
      id: 'tof2-5-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof2-5-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg et yrke du kjenner til (f.eks. lærer, sykepleier, elektriker, journalist, advokat) og analyser hvordan digital transformasjon og AI kan endre dette yrket de neste 10–15 årene. Beskriv: (a) hvilke oppgaver som kan automatiseres, (b) hvilke nye oppgaver som kan oppstå, (c) hvilken kompetanse som blir viktigere, og (d) om yrket totalt sett styrkes eller svekkes.',
        hints: ['Tenk på skillet mellom rutineoppgaver og oppgaver som krever menneskelig vurdering. Hvilke deler av yrket handler om empati, kreativitet eller uforutsigbare situasjoner?'],
        solution: '**Eksempel: Lærer**\n\n**(a) Oppgaver som kan automatiseres:**\n- Retting av standardiserte prøver og oppgaver (allerede mulig med AI).\n- Generering av øvingsoppgaver tilpasset elevens nivå (adaptiv læring).\n- Administrativ dokumentasjon, rapportering og fraværsføring.\n- Oversettelse og tilpasning av læremidler til ulike språk.\n\n**(b) Nye oppgaver som kan oppstå:**\n- Kuratere og kvalitetssikre AI-generert læringsinnhold.\n- Veilede elever i kritisk vurdering av AI-generert informasjon.\n- Designe læringsløp som kombinerer menneskelig og AI-basert undervisning.\n- Undervise i digital etikk og kildekritikk.\n\n**(c) Kompetanse som blir viktigere:**\n- Relasjonskompetanse og empati — det som gjør en lærer uerstattelig.\n- Faglig dybdekunnskap for å vurdere AI-generert innhold kritisk.\n- Digital kompetanse og evne til å bruke AI som pedagogisk verktøy.\n- Veiledningskompetanse — å hjelpe elever med selvregulert læring.\n\n**(d) Totalvurdering:**\nLæreryrket styrkes snarere enn svekkes — men det endres betydelig. Rutineoppgaver automatiseres, og læreren frigjøres til det som virkelig teller: relasjonsbygging, motivasjon, tilpasset oppfølging og dannelse. Lærere som omfavner teknologien og bruker den som verktøy, vil bli mer effektive. Lærere som kun formidler fakta som elevene kan finne med AI, vil oppleve at rollen utfordres.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- BLOKK 4: Rettferdig omstilling ---
    {
      id: 'tof2-5-5-text-4',
      type: 'text',
      content: `### Rettferdig omstilling: hvem bærer kostnadene?

Digital transformasjon skaper enorm verdiskaping — men gevinstene fordeles ujevnt. Mens teknologiselskapene og høykvalifiserte arbeidstakere høster store gevinster, risikerer andre å bli hengende etter. **Rettferdig omstilling** (*just transition*) handler om å sikre at kostnadene ved teknologisk endring ikke bæres uforholdsmessig av sårbare grupper.

**Ulikhetsdrivende mekanismer:**
- **Kompetansegap:** De med høy utdanning tilpasser seg lettere enn de med lav utdanning. Ufaglærte arbeidere i automatiseringsutsatte bransjer er mest sårbare.
- **Geografisk ulikhet:** Teknologiindustrien konsentreres i urbane sentre, mens distriktene mister arbeidsplasser. I Norge ser vi dette i forholdet mellom Oslo-regionen og resten av landet.
- **Alder:** Eldre arbeidstakere har ofte mindre digital kompetanse og kortere tid til å «tjene inn» investering i omskolering.
- **Kjønn:** Kvinner er overrepresentert i noen av de mest automatiseringstruede yrkene (kontorarbeid, regnskap), men underrepresentert i teknologisektoren.
- **Det digitale skillet:** Ikke alle har lik tilgang til digital infrastruktur, utstyr og opplæring — dette gjelder både innenfor og mellom land.

**Politiske virkemidler for rettferdig omstilling:**
- **Omskolering og etterutdanning:** Gratis eller subsidiert tilgang til livslang læring, mikrokredentialer og yrkesrettet utdanning.
- **Universell grunninntekt (UBI):** Garantert minsteinntekt for alle borgere — debattert som mulig svar på teknologisk arbeidsledighet. Finland gjennomførte et UBI-eksperiment (2017–2018) med blandede resultater.
- **Beskatning av automatisering:** «Robotskatt» — å skattlegge bedrifter som erstatter arbeidere med maskiner, for å finansiere omstillingstiltak. Bill Gates har argumentert for dette.
- **Regional næringspolitikk:** Målrettede investeringer i distriktene for å skape nye arbeidsplasser.
- **Styrkede arbeidstakerrettigheter:** Fagforeningenes rolle i å forhandle om teknologiinnføring og sikre ansattes medvirkning.

Den norske modellen — med sterk fagbevegelse, trepartssamarbeid og velferdsstat — gir Norge et bedre utgangspunkt enn mange andre land for å håndtere digital omstilling. Men også Norge står overfor betydelige utfordringer, særlig knyttet til oljeindustriens omstilling og distriktenes fremtid.`,
    },
    {
      id: 'tof2-5-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof2-5-5-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva innebærer begrepet «rettferdig omstilling» i forbindelse med digital transformasjon?',
        options: [
          { id: 'a', text: 'At alle teknologiselskaper betaler like mye skatt', isCorrect: false },
          { id: 'b', text: 'At kostnadene ved teknologisk endring ikke bæres uforholdsmessig av sårbare grupper', isCorrect: true },
          { id: 'c', text: 'At automatisering innføres like raskt i alle sektorer', isCorrect: false },
          { id: 'd', text: 'At alle arbeidstakere bytter jobb hvert femte år', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Rettferdig omstilling (just transition) handler om å sikre at kostnadene ved teknologisk endring — som arbeidsplasser som forsvinner, kompetanse som utdateres og lokalsamfunn som mister næringsgrunnlag — ikke bæres uforholdsmessig av de mest sårbare gruppene. Det innebærer politiske tiltak som omskolering, inntektssikring og regional næringspolitikk. Det handler ikke om lik skatt (A), like rask innføring (C) eller tvungent jobbskifte (D).',
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof2-5-5-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **Digital transformasjon** er den grunnleggende endringen av verdiskaping gjennom digital teknologi — fra digitisering (analog → digital) via digitalisering (nye prosesser) til full transformasjon (nye forretningsmodeller).
- **Automatisering** truer først og fremst repetitive, regelbaserte yrker, men generativ AI utvider automatiseringen til kognitive oppgaver. Arbeidsmarkedet polariseres mellom høy- og lavkvalifiserte jobber.
- **Nye yrkesroller** oppstår: AI-trener, prompt engineer, dataetiker, cybersikkerhetsspesialist og bærekraftsteknolog er eksempler.
- **Livslang læring** er nøkkelen til omstilling — omskolering, oppskillering og mikrokredentialer blir stadig viktigere.
- **Rettferdig omstilling** handler om at kostnadene ved teknologisk endring ikke skal bæres uforholdsmessig av sårbare grupper — det krever aktiv politikk, fra omskolering til debatter om universell grunninntekt og robotskatt.
- **Den norske modellen** med trepartssamarbeid og sterk velferdsstat gir et godt utgangspunkt, men er ikke immun mot utfordringene.`,
    },

    // --- Samleoppgave ---
    {
      id: 'tof2-5-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof2-5-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Tenk deg at et norsk distriktssamfunn med 3 000 innbyggere har en fiskeforedlingsfabrikk som viktigste arbeidsgiver (150 ansatte). Fabrikken planlegger å automatisere 80 % av produksjonen, noe som vil redusere arbeidsstokken til 40 personer. Du er engasjert som rådgiver for kommunen. Skriv et notat der du (a) analyserer konsekvensene for lokalsamfunnet, (b) vurderer minst tre konkrete tiltak for rettferdig omstilling, og (c) drøfter fordeler og ulemper ved hvert tiltak.',
        hints: ['Tenk på ringvirkninger: hva skjer med lokale butikker, skolen og helsetjenester når 110 personer mister jobben? Hvilke kompetanser har de som mister jobben, og hva kan de omskoleres til? Hva er kommunens og statens rolle?'],
        solution: '**A. Konsekvenser for lokalsamfunnet:**\n\n- **Direkte:** 110 personer mister jobben — ca. 7 % av innbyggerne, men en mye høyere andel av den yrkesaktive befolkningen.\n- **Ringvirkninger:** Reduserte inntekter fører til lavere kjøpekraft, som rammer butikker, servicenæring og det lokale næringslivet. Skatteinnebærer synker for kommunen.\n- **Fraflytting:** Uten alternative arbeidsplasser vil mange flytte, noe som truer skoler, helsetjenester og det sosiale fellesskapet.\n- **Psykososiale konsekvenser:** Arbeidsledighet rammer selvfølelse, psykisk helse og sosial tilhørighet.\n\n**B. Tre tiltak for rettferdig omstilling:**\n\n**1. Omskoleringsprogram:**\n*Fordeler:* Gir arbeiderne ny kompetanse og nye muligheter. Kan rettes mot lokale behov — f.eks. havbruksteknologi, fornybar energi eller helsearbeid.\n*Ulemper:* Tar tid (1–3 år), ikke alle har forutsetninger eller motivasjon for omskolering, og det må finnes jobber å omskolere til.\n\n**2. Tiltrekke ny næring:**\n*Fordeler:* Kan erstatte tapte arbeidsplasser permanent. Datacenter, turisme, akvakulturteknologi eller fornybar energi kan være aktuelle.\n*Ulemper:* Krever investeringer, infrastruktur (bredbånd, transport) og tid. Ingen garanti for suksess — mange distriktssatsinger mislykkes.\n\n**3. Overgangsstøtte og gradvis omstilling:**\n*Fordeler:* Forhandle med fabrikken om gradvis automatisering over 3–5 år, med avgangsordninger, sluttvederlag og støtte til dem som vil starte egen virksomhet. Gir tid til tilpasning.\n*Ulemper:* Kan forsinke fabrikkens konkurranseevne, og risikerer å forlenge usikkerheten i stedet for å løse den.\n\n**C. Drøfting:**\nIngen enkelttiltak er tilstrekkelig — en kombinasjon er nødvendig. Den norske modellen med trepartssamarbeid (fagforening, arbeidsgiver, stat) gir et godt rammeverk. Staten bør bidra med midler til omstilling gjennom NAV og regionale utviklingsmidler. Kommunen bør aktivt tilrettelegge for ny næring. Og fagforeningen bør forhandle om ansattes medvirkning i automatiseringsprosessen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.6: Teknologivurdering
// ============================================================================

export const CHAPTER_TOF_2_5_6: TextbookChapter = {
  id: 'tof-2-5-6',
  courseId: 'tof-2',
  chapterNumber: '5.6',
  title: 'Teknologivurdering',
  description: 'Technology Assessment, konsekvensutredning og interessenter.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjennomføre teknologivurdering',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof2-5-6-intro',
      type: 'text',
      content: `## Teknologivurdering

Ny teknologi innføres ofte med løfter om effektivitet, komfort og fremskritt — men konsekvensene er sjelden entydige. 5G-nettverk gir raskere internett, men reiser spørsmål om stråling, overvåkning og digital ulikhet. Ansiktsgjenkjenning kan fange kriminelle, men truer personvernet til millioner. Genredigering kan utrydde sykdommer, men åpner døren for «designerbabyer».

**Teknologivurdering** (*Technology Assessment*, TA) er den systematiske prosessen med å analysere en teknologis potensielle konsekvenser — positive og negative, tilsiktede og utilsiktede, kort- og langsiktige — *før* den innføres bredt. Formålet er å gi beslutningstakere, myndigheter og samfunnet et kunnskapsgrunnlag for å håndtere teknologisk endring på en klok og demokratisk måte.

Til forskjell fra ren teknisk evaluering, som spør «virker teknologien?», spør teknologivurdering: «Bør vi bruke denne teknologien? Under hvilke betingelser? Med hvilke forholdsregler? Og hvem berøres?»

I dette kapitlet utforsker vi metoder for teknologivurdering, interessentanalyse, konsekvensutredning og den norske Teknologirådet-modellen.`,
    },

    // --- BLOKK 1: Hva er Technology Assessment ---
    {
      id: 'tof2-5-6-text-1',
      type: 'text',
      content: `### Technology Assessment: historie og metoder

**Historisk bakgrunn:**
Technology Assessment (TA) oppsto som fagfelt i USA på 1960- og 70-tallet, da Kongressen innså at teknologisk utvikling hadde konsekvenser som verken markedet eller tradisjonell politikk fanget opp. I 1972 ble **Office of Technology Assessment (OTA)** opprettet for å gi Kongressen uavhengige analyser av teknologiske spørsmål — fra atomkraft til genteknologi. OTA ble lagt ned i 1995, men modellen inspirerte lignende institusjoner i Europa.

I Europa er TA-tradisjonen sterkere enn i USA. **European Parliamentary Technology Assessment (EPTA)** koordinerer TA-institusjoner i over 20 land. I Norge er **Teknologirådet** (opprettet 1999) det sentrale organet for teknologivurdering — et uavhengig rådgivende organ som gir Storting og regjering råd om teknologispørsmål.

**Tre hovedtilnærminger til TA:**

1. **Klassisk TA (ekspertdrevet):**
   - Eksperter analyserer teknologiens konsekvenser basert på vitenskapelig kunnskap.
   - Styrke: Grundig, faglig solid analyse.
   - Svakhet: Kan overse verdivalg og hverdagskonsekvenser som eksperter ikke har erfaring med.

2. **Deltakende TA (participatory TA):**
   - Berørte parter — borgere, brukere, interessegrupper — involveres aktivt i vurderingsprosessen.
   - Metoder: Borgerpaneler (*citizen panels*), konsensuskonferanser, scenarioverksteder, høringer.
   - Styrke: Demokratisk forankring, fanger opp verdier og bekymringer.
   - Svakhet: Tidkrevende, risiko for at sterke stemmer dominerer.

3. **Konstruktiv TA (CTA):**
   - Teknologivurdering integreres direkte i utviklingsprosessen, slik at innsiktene påvirker designet *mens* teknologien utvikles — ikke bare *etter*.
   - Styrke: Proaktiv, kan forme teknologien før den er ferdig.
   - Svakhet: Krever tett samarbeid mellom utviklere og samfunnsforskere.

Teknologirådet i Norge kombinerer alle tre tilnærmingene, avhengig av tema. For eksempel har de gjennomført borgerpaneler om bioteknologi, ekspertrapporter om AI, og konstruktive prosesser om autonome kjøretøy.`,
    },
    {
      id: 'tof2-5-6-def-1',
      type: 'definition',
      title: 'Teknologivurdering (Technology Assessment)',
      content: `**Teknologivurdering (Technology Assessment, TA)** er den systematiske, helhetlige analysen av en teknologis potensielle konsekvenser — miljømessige, sosiale, økonomiske, etiske og politiske — med formål å informere demokratisk beslutningstaking.

TA skiller seg fra vanlig teknisk evaluering ved å:
- Vurdere *utilsiktede* konsekvenser, ikke bare tilsiktede.
- Inkludere etiske og sosiale dimensjoner, ikke bare tekniske.
- Involvere berørte parter, ikke bare eksperter.
- Være fremtidsrettet og scenariobasert, ikke bare retrospektiv.

TA er verken for eller mot teknologi — det er et verktøy for informerte valg.`,
    },
    {
      id: 'tof2-5-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof2-5-6-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er hovedformålet med teknologivurdering (Technology Assessment)?',
        options: [
          { id: 'a', text: 'Å bevise at ny teknologi er trygg slik at den kan selges raskere', isCorrect: false },
          { id: 'b', text: 'Å systematisk analysere en teknologis konsekvenser for å informere beslutningstaking', isCorrect: true },
          { id: 'c', text: 'Å stoppe innføringen av teknologi som kan ha negative konsekvenser', isCorrect: false },
          { id: 'd', text: 'Å rangere teknologier etter lønnsomhet for næringslivet', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Teknologivurdering handler om å systematisk analysere potensielle konsekvenser — positive og negative, tilsiktede og utilsiktede — for å gi beslutningstakere et informert grunnlag. Det handler ikke om å bevise at teknologi er trygg for markedsføring (A), om å stoppe teknologi generelt (C), eller om å rangere etter lønnsomhet (D). TA er nøytralt — det gir innsikt, ikke konklusjoner om ja eller nei.',
      },
    },

    // --- BLOKK 2: Konsekvensutredning ---
    {
      id: 'tof2-5-6-text-2',
      type: 'text',
      content: `### Konsekvensutredning: dimensjoner og metoder

En sentral del av teknologivurdering er **konsekvensutredning** — den systematiske kartleggingen av hva som kan skje når en teknologi innføres. En grundig konsekvensutredning ser på flere dimensjoner:

**Seks dimensjoner i en konsekvensutredning:**

1. **Miljømessige konsekvenser:**
   - Energiforbruk, utslipp, ressursbruk, avfall, påvirkning av biologisk mangfold.
   - Metode: Livsløpsanalyse (LCA), miljørisikovurdering.

2. **Sosiale konsekvenser:**
   - Arbeidsplasser, helse, sikkerhet, livskvalitet, sosial ulikhet, tilgang og digital inkludering.
   - Metode: Sosial konsekvensanalyse (SIA), brukerundersøkelser, fokusgrupper.

3. **Økonomiske konsekvenser:**
   - Kostnader, inntekter, produktivitet, markedsendringer, fordeling av økonomiske gevinster.
   - Metode: Kost-nytte-analyse, samfunnsøkonomisk analyse.

4. **Etiske konsekvenser:**
   - Personvern, autonomi, rettferdighet, verdighet, maktforskyvning.
   - Metode: Etisk analyse, verdisensitiv design (VSD).

5. **Politiske og juridiske konsekvenser:**
   - Reguleringsutfordringer, maktbalanse, demokrati, overvåkning, suverenitet.
   - Metode: Juridisk analyse, politisk scenariobygging.

6. **Kulturelle konsekvenser:**
   - Endring av normer, verdier, adferdsmønstre, kommunikasjon og mellommenneskelige relasjoner.
   - Metode: Kulturanalyse, antropologisk feltarbeid.

**Tilsiktede vs. utilsiktede konsekvenser:**

Et nøkkelaspekt ved konsekvensutredning er å identifisere **utilsiktede konsekvenser** — virkninger som ingen planla eller forutså:
- Sosiale medier ble designet for å koble mennesker sammen, men har bidratt til polarisering, ensomhet og mental helseproblematikk.
- Billig flyreise demokratiserte turisme, men skapte masseturisme som ødelegger lokale kulturer og miljøer.
- Smarttelefonen ga alle tilgang til informasjon, men skapte avhengighet, søvnproblemer og oppmerksomhetskrise.

Gode konsekvensutredninger bruker **scenariometodikk** — å konstruere flere mulige fremtider (best case, worst case, mest sannsynlig) — for å fange opp bredden av mulige utfall.`,
    },
    {
      id: 'tof2-5-6-example-1',
      type: 'example',
      title: 'Eksempel: Konsekvensutredning av autonome kjøretøy',
      problem: 'Gjennomfør en forenklet konsekvensutredning av selvkjørende biler langs de seks dimensjonene.',
      solution: `**1. Miljømessige konsekvenser:**
- *Positiv:* Optimalisert kjøremønster kan redusere energiforbruk med 10–30 %. Elektriske autonome kjøretøy kombinerer to miljøfordeler.
- *Negativ:* Økt bilbruk (Jevons paradoks) kan oppveie effektiviseringsgevinsten. Produksjon av sensorer og datakraft har eget klimaavtrykk.

**2. Sosiale konsekvenser:**
- *Positiv:* Økt mobilitet for eldre, funksjonshemmede og barn. Potensielt færre trafikkulykker (90 % skyldes menneskelig feil).
- *Negativ:* Millioner av sjåfører (lastebil, taxi, buss) mister jobben. Personvernbekymringer — bilene samler kontinuerlig data om passasjerer og omgivelser.

**3. Økonomiske konsekvenser:**
- *Positiv:* Enorme effektiviseringsgevinster i transport og logistikk. Nye forretningsmodeller (mobility-as-a-service).
- *Negativ:* Massiv arbeidsledighet i transportsektoren. Konsentrasjon av verdiskaping hos teknologiselskaper.

**4. Etiske konsekvenser:**
- «Trolley-problemet»: Hvordan skal bilen programmeres til å velge i uunngåelige ulykkessituasjoner? Hvem har ansvaret når en selvkjørende bil forårsaker en ulykke — eieren, produsenten eller programmereren?

**5. Politiske/juridiske konsekvenser:**
- Behov for nytt regelverk for ansvar, forsikring og sertifisering. Internasjonale standarder vs. nasjonale regler.

**6. Kulturelle konsekvenser:**
- Bilen som symbol på frihet og selvstendighet endres fundamentalt. «Bilkultur» kan forsvinne.`,
    },
    {
      id: 'tof2-5-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof2-5-6-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg en av følgende teknologier: (a) ansiktsgjenkjenning i det offentlige rom, (b) genredigering (CRISPR), (c) kryptovaluta. Gjennomfør en forenklet konsekvensutredning langs minst fire av de seks dimensjonene (miljø, sosial, økonomi, etikk, politikk/jus, kultur).',
        hints: ['For hver dimensjon, identifiser både positive og negative konsekvenser. Tenk spesielt på utilsiktede konsekvenser. Hvem tjener på teknologien, og hvem bærer risikoen?'],
        solution: '**Eksempel: Ansiktsgjenkjenning i det offentlige rom**\n\n**Sosiale konsekvenser:**\n- *Positiv:* Kan identifisere savnede barn, etterlyste kriminelle og terrormistenkte. Kan effektivisere grensekontroll.\n- *Negativ:* Masseovervåkning uten samtykke. Forskning viser at systemene har høyere feilrate for mørkhudede og kvinner — risiko for systematisk diskriminering.\n\n**Etiske konsekvenser:**\n- Grunnleggende personverntrussel: Å gå på gata uten å bli identifisert er et implisitt aspekt av personlig frihet. Ansiktsgjenkjenning fjerner anonymitet i det offentlige rom.\n- Maktasymmetri: Staten ser borgerne, men borgerne ser ikke staten.\n\n**Politiske/juridiske konsekvenser:**\n- EU har strengere regulering enn USA og Kina. EU AI Act klassifiserer masseovervåking med ansiktsgjenkjenning som uakseptabel risiko.\n- Kinas bruk av ansiktsgjenkjenning til å overvåke uigurer er et eksempel på teknologien brukt til undertrykkelse.\n\n**Kulturelle konsekvenser:**\n- «Chilling effect»: Vissheten om overvåkning endrer adferd — folk sensurerer seg selv, unngår demonstrasjoner, eller endrer bevegelsesmønstre. Dette undergraver demokratisk deltakelse og ytringsfrihet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- BLOKK 3: Interessentanalyse ---
    {
      id: 'tof2-5-6-text-3',
      type: 'text',
      content: `### Interessentanalyse: hvem påvirkes, og hvem har makt?

En avgjørende del av enhver teknologivurdering er å kartlegge **interessenter** (*stakeholders*) — alle individer, grupper eller organisasjoner som påvirkes av eller har innflytelse over teknologien.

**Metode for interessentanalyse:**

**Steg 1: Identifisere interessenter**
Kartlegg alle som berøres — direkte eller indirekte:
- **Brukere:** De som bruker teknologien direkte (f.eks. sjåfører av autonome biler).
- **Berørte ikke-brukere:** De som påvirkes uten å bruke teknologien selv (f.eks. fotgjengere i trafikk med autonome biler).
- **Utviklere:** De som designer, bygger og selger teknologien.
- **Regulatorer:** Myndigheter og tilsyn som setter rammebetingelsene.
- **Finansiører:** Investorer og eiere med økonomiske interesser.
- **Sivilsamfunnet:** NGO-er, medier, forskere, aktivister.
- **Fremtidige generasjoner:** De som arver konsekvensene av dagens valg.

**Steg 2: Kartlegg interesser og påvirkning**
For hver interessent: Hva er deres interesser? Hvor mye innflytelse har de? Hvem taper, og hvem vinner?

En vanlig metode er å plassere interessenter i et **makt/interesse-rutenett:**
- **Høy makt, høy interesse:** Nøkkelspillere som må engasjeres aktivt (f.eks. myndigheter, teknologiselskaper).
- **Høy makt, lav interesse:** Aktører som må holdes tilfredse (f.eks. store investorer).
- **Lav makt, høy interesse:** Grupper som må gis stemme (f.eks. berørte borgere, pasientgrupper).
- **Lav makt, lav interesse:** Overvåkes, men krever mindre oppmerksomhet.

**Steg 3: Identifiser konflikter og maktasymmetrier**
Teknologivurdering avslører ofte at de med mest makt (teknologiselskaper, myndigheter) har andre interesser enn de mest berørte (borgere, arbeidstakere, sårbare grupper). Å synliggjøre disse maktasymmetriene er en av teknologivurderingens viktigste funksjoner.

**Steg 4: Foreslå tiltak for inkludering**
Hvordan kan de med lav makt men høy interesse få reell innflytelse? Eksempler: borgerpaneler, offentlige høringer, representasjon i styringsgrupper, transparenskrav.`,
    },
    {
      id: 'tof2-5-6-def-2',
      type: 'definition',
      title: 'Interessent (stakeholder)',
      content: `En **interessent** (*stakeholder*) er enhver person, gruppe eller organisasjon som kan påvirke eller bli påvirket av en teknologi, et prosjekt eller en beslutning.

**Direkte interessenter** berøres umiddelbart av teknologien (brukere, ansatte, pasienter).
**Indirekte interessenter** berøres gjennom ringvirkninger (lokalsamfunn, skattebetalere, fremtidige generasjoner).

I teknologivurdering er det avgjørende å identifisere interessenter som *mangler stemme* — grupper som berøres sterkt, men som ikke har makt eller ressurser til å delta i beslutningsprosesser (f.eks. barn, minoriteter, fremtidige generasjoner, eller borgere i utviklingsland som påvirkes av vestlig teknologieksport).`,
    },
    {
      id: 'tof2-5-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof2-5-6-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'I en interessentanalyse av et nytt AI-basert diagnosesystem for sykehus — hvilken gruppe har typisk «lav makt, høy interesse»?',
        options: [
          { id: 'a', text: 'Teknologiselskapet som utvikler systemet', isCorrect: false },
          { id: 'b', text: 'Helsedepartementet', isCorrect: false },
          { id: 'c', text: 'Pasientene som diagnostiseres av systemet', isCorrect: true },
          { id: 'd', text: 'Investorene i teknologiselskapet', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Pasientene er de som har mest å vinne eller tape på et AI-diagnosesystem — feil diagnose kan ha livsfarlige konsekvenser. Likevel har enkelpasienter liten makt over beslutningen om å innføre systemet. De er klassiske «lav makt, høy interesse»-interessenter som må gis stemme gjennom pasientorganisasjoner, høringer og brukerrepresentasjon. Teknologiselskapet (A) og investorer (D) har høy makt, og Helsedepartementet (B) har høy makt som regulator.',
      },
    },

    // --- BLOKK 4: Teknologirådet og praktisk TA ---
    {
      id: 'tof2-5-6-text-4',
      type: 'text',
      content: `### Teknologirådet og praktisk TA i Norge

**Teknologirådet** er Norges nasjonale organ for teknologivurdering, opprettet i 1999. Det er et uavhengig, rådgivende organ under Kommunal- og distriktsdepartementet. Teknologirådets oppgaver:

- **Rådgivning:** Gir Storting og regjering faglig funderte råd om teknologispørsmål.
- **Folkeopplysning:** Arrangerer offentlige debatter, publiserer rapporter og driver formidling.
- **Deltakelse:** Gjennomfører borgerpaneler og konsensuskonferanser for demokratisk forankring.

**Eksempler på Teknologirådets arbeid:**
- **AI i offentlig sektor:** Anbefalinger om bruk av algoritmer i velferdstjenester, med krav om transparens og menneskelig tilsyn.
- **Bioteknologi:** Borgerpanel om genmodifisert mat, assistert befruktning og genterapi.
- **Personvern og overvåkning:** Utredning av ansiktsgjenkjenning, digitale vaksinasjonspass og digital identitet.
- **Autonome kjøretøy:** Scenarioanalyser og anbefalinger for norsk transportpolitikk.

**Gjennomføre en forenklet teknologivurdering:**

En strukturert teknologivurdering kan følge denne malen:

1. **Definer teknologien:** Hva er det? Hvordan fungerer det? Hvilket modenhetsnivå har det?
2. **Kartlegg interessenter:** Hvem berøres? Hvem har makt? Hvem mangler stemme?
3. **Konsekvensutredning:** Analyser konsekvenser langs de seks dimensjonene (miljø, sosial, økonomi, etikk, politikk/jus, kultur).
4. **Scenarioanalyse:** Hva skjer i best case, worst case og mest sannsynlig scenario?
5. **Alternativvurdering:** Finnes det alternative teknologier eller tilnærminger? Hva er konsekvensene av å *ikke* innføre teknologien?
6. **Anbefalinger:** Hvilke tiltak bør iverksettes — regulering, forskning, pilotprosjekter, etiske retningslinjer?
7. **Oppfølging:** Hvordan bør teknologien overvåkes over tid?

Denne malen kan brukes på alt fra et skolens innkjøp av AI-verktøy til nasjonale beslutninger om 5G-utbygging eller karbonfangst.`,
    },
    {
      id: 'tof2-5-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof2-5-6-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva er Teknologirådets rolle i Norge?',
        options: [
          { id: 'a', text: 'Å godkjenne eller avslå ny teknologi før den tas i bruk', isCorrect: false },
          { id: 'b', text: 'Å gi uavhengige, faglige råd om teknologispørsmål til Storting og regjering', isCorrect: true },
          { id: 'c', text: 'Å håndheve teknologilovgivning og gi bøter til selskaper', isCorrect: false },
          { id: 'd', text: 'Å utvikle norsk teknologi for eksport', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Teknologirådet er et uavhengig, rådgivende organ som gir Storting og regjering faglig funderte råd om teknologispørsmål. Det har ingen myndighet til å godkjenne eller forby teknologi (A), det håndhever ikke lovgivning (C), og det utvikler ikke teknologi (D). Teknologirådet driver også folkeopplysning og gjennomfører deltakende prosesser som borgerpaneler.',
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof2-5-6-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **Teknologivurdering (Technology Assessment, TA)** er den systematiske analysen av en teknologis konsekvenser — miljømessige, sosiale, økonomiske, etiske, politiske og kulturelle — for å informere demokratisk beslutningstaking.
- **Tre TA-tilnærminger:** Klassisk (ekspertdrevet), deltakende (borgerinvolvering) og konstruktiv (integrert i utviklingsprosessen).
- **Konsekvensutredning** analyserer seks dimensjoner: miljø, sosial, økonomi, etikk, politikk/jus og kultur. Utilsiktede konsekvenser er ofte de viktigste å fange opp.
- **Interessentanalyse** kartlegger hvem som berøres og hvem som har makt. Makt/interesse-rutenettet avslører hvem som trenger en sterkere stemme.
- **Teknologirådet** er Norges uavhengige organ for teknologivurdering og gir råd til Storting og regjering gjennom ekspertanalyser, borgerpaneler og folkeopplysning.
- En strukturert TA-mal (teknologi → interessenter → konsekvenser → scenarier → alternativer → anbefalinger → oppfølging) kan brukes på alle teknologivurderinger.`,
    },

    // --- Samleoppgave ---
    {
      id: 'tof2-5-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof2-5-6-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjennomfør en forenklet teknologivurdering av bruk av ChatGPT og lignende KI-verktøy i norsk videregående skole. Bruk den strukturerte malen: (1) definer teknologien, (2) kartlegg minst fem interessenter og plasser dem i makt/interesse-rutenettet, (3) vurder konsekvenser langs minst fire dimensjoner, (4) skisser to scenarier (best case og worst case), og (5) gi tre konkrete anbefalinger.',
        hints: ['Interessenter kan inkludere elever, lærere, foreldre, skoleeiere, teknologiselskaper, eksamensansvarlige og fremtidens arbeidsgivere. Tenk på læringseffekt, juks, personvern, digital ulikhet og kritisk tenkning.'],
        solution: '**1. Teknologien:**\nChatGPT og lignende generative AI-verktøy (Claude, Gemini, Copilot) er store språkmodeller som kan generere tekst, svare på spørsmål, skrive kode, oppsummere tekster og løse oppgaver. De er gratis eller billige tilgjengelig for alle med internett.\n\n**2. Interessenter:**\n- **Elever** (lav makt, høy interesse): De mest berørte — verktøyet endrer hvordan de lærer, skriver og vurderes.\n- **Lærere** (middels makt, høy interesse): Må tilpasse undervisning, vurdering og oppfølging.\n- **Skoleeiere/kommuner** (høy makt, middels interesse): Bestemmer politikk og investering.\n- **Utdanningsdirektoratet** (høy makt, middels interesse): Setter rammeverk for eksamen og vurdering.\n- **Teknologiselskapene** (høy makt, lav interesse i norsk skole spesifikt): Utvikler verktøyene, men har liten interesse i skolepolitikk.\n\n**3. Konsekvenser:**\n- *Sosial:* Kan forverre digital ulikhet hvis noen elever har bedre tilgang/kompetanse. Kan redusere skriveferdigheter og kritisk tenkning.\n- *Etisk:* Plagiat og juks utfordrer vurderingssystemet fundamentalt. Hvem «eier» en tekst skrevet med AI-hjelp?\n- *Politisk/juridisk:* Eksamenssystemet må reformeres — tradisjonelle hjemmeoppgaver mister mening. Personvern: elevdata kan lekke til amerikanske selskaper.\n- *Kulturell:* Kan endre forholdet til kunnskap — fra «å vite» til «å finne». Risiko for passivitet og overfladisk læring.\n\n**4. Scenarier:**\n- *Best case:* AI brukes som læringsverktøy — elever lærer å bruke det kritisk, lærere tilpasser vurderingsformer, og elever utvikler dypere forståelse fordi de kan fokusere på analyse og kreativitet.\n- *Worst case:* Elever outsourcer all tenkning til AI, lærere klarer ikke å tilpasse seg, vurderingssystemet kollapser, og en generasjon går ut av skolen med svakere grunnleggende ferdigheter.\n\n**5. Anbefalinger:**\n1. Integrer AI-kompetanse i læreplanen — lær elever å bruke AI kritisk, ikke forby det.\n2. Reformer vurderingsformer — mer muntlig, mer prosessbasert, mer problembasert — og mindre hjemmeoppgaver.\n3. Gi lærere etterutdanning i AI — de trenger kompetanse for å veilede elever og tilpasse undervisning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.7: Ansvarlig innovasjon
// ============================================================================

export const CHAPTER_TOF_2_5_7: TextbookChapter = {
  id: 'tof-2-5-7',
  courseId: 'tof-2',
  chapterNumber: '5.7',
  title: 'Ansvarlig innovasjon',
  description: 'RRI-rammeverket, inkludering, refleksivitet og respons.',
  estimatedMinutes: 25,
  competenceGoals: [
    'anvende RRI-prinsippene',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof2-5-7-intro',
      type: 'text',
      content: `## Ansvarlig innovasjon

Innovasjon drives tradisjonelt av markedskrefter, teknologiske muligheter og konkurransefordeler — men hvem tar ansvar for konsekvensene? Da Facebook lanserte nyhetsstrømmen, tenkte ingen på at algoritmen ville polarisere samfunnet. Da Uber revolusjonerte transport, var konsekvensene for sjåførenes arbeidsvilkår ikke en del av designprosessen. Da CRISPR-teknologien ble utviklet, var det forskerne selv som måtte rope varsku om etiske grenser.

**Ansvarlig innovasjon** (*Responsible Research and Innovation*, RRI) er et rammeverk som krever at etiske, sosiale og miljømessige hensyn integreres i hele innovasjonsprosessen — fra idé til implementering — og ikke bare vurderes i etterkant. RRI ble utviklet som del av EUs forsknings- og innovasjonspolitikk (Horisont 2020 og Horisont Europa) og har blitt et sentralt begrep i europeisk teknologipolitikk.

Kjernen i RRI er enkel: innovasjon skal ikke bare være teknisk vellykket og økonomisk lønnsom — den skal også være **etisk akseptabel**, **sosialt ønskelig** og **bærekraftig**. I dette kapitlet utforsker vi RRI-rammeverkets fire dimensjoner, konkrete verktøy for ansvarlig innovasjon, og hvordan rammeverket kan anvendes i praksis.`,
    },

    // --- BLOKK 1: RRI-rammeverket ---
    {
      id: 'tof2-5-7-text-1',
      type: 'text',
      content: `### RRI-rammeverket: fire dimensjoner

Responsible Research and Innovation (RRI) ble formalisert av den britiske forskeren Jack Stilgoe og kollegaer i 2013. Rammeverket bygger på fire sentrale dimensjoner — ofte kalt «AIRR»:

**1. Anticipation (Forventning)**
Å aktivt forsøke å forutse konsekvenser — tilsiktede og utilsiktede — av forskning og innovasjon, *før* de materialiserer seg.

- Hva kan gå galt? Hvem kan skades? Hvilke utilsiktede bruksområder er mulige?
- Metoder: Scenarioanalyse, horisontskanning, «red team»-øvelser, pre-mortem-analyse.
- Eksempel: Forskere som utvikler ansiktsgjenkjenning bør *på forhånd* vurdere misbrukspotensial for overvåkning, selv om deres intensjon er medisinsk diagnostikk.

**2. Inclusiveness (Inkludering)**
Å inkludere et bredt spekter av stemmer — ikke bare eksperter og investorer — i innovasjonsprosessen.

- Hvem berøres? Er de representert? Har de reell innflytelse?
- Metoder: Borgerpaneler, brukermedvirkning, mangfoldig sammensetning av forskningsteam, konsultasjon med berørte grupper.
- Eksempel: Når et farmasiselskap utvikler en vaksine for bruk i Afrika, bør afrikanske helsearbeidere, pasienter og lokalsamfunn involveres i designprosessen — ikke bare vestlige forskere.

**3. Reflexivity (Refleksivitet)**
Å kontinuerlig reflektere over egne antakelser, verdier, blindsoner og maktposisjoner.

- Hvilke verdier bygger vi inn i teknologien? Hvem er «vi», og hvem er utelatt? Tar vi noe for gitt?
- Metoder: Etisk revisjon, ekstern evaluering, tverrfaglige team, «devil's advocate»-roller.
- Eksempel: Et AI-team som utvikler et rekrutteringsverktøy bør reflektere over: Gjenspeiler treningsdataene våre et representativt arbeidsliv, eller reproduserer de historiske skjevheter?

**4. Responsiveness (Respons)**
Å være villig og i stand til å endre kurs basert på ny kunnskap, tilbakemeldinger og endrede omstendigheter.

- Er vi villige til å stoppe, justere eller skrote innovasjonen hvis konsekvensene viser seg å være uakseptable?
- Metoder: Iterativ utvikling, smidig styring, «kill switches», regulatorisk tilpasning, tilbaketrekkingsmekanismer.
- Eksempel: Da det viste seg at TikToks algoritme eksponerte barn for skadelig innhold, burde selskapet respondert raskt med endringer — men økonomiske insentiver arbeidet mot dette.

Samlet utgjør AIRR et rammeverk for innovasjon som tar konsekvenser på alvor — ikke som ettertanke, men som integrert del av prosessen.`,
    },
    {
      id: 'tof2-5-7-def-1',
      type: 'definition',
      title: 'Responsible Research and Innovation (RRI)',
      content: `**Responsible Research and Innovation (RRI)** er et rammeverk for å sikre at forskning og innovasjon gjennomføres på en etisk, inkluderende og bærekraftig måte.

De fire dimensjonene (AIRR):
- **Anticipation (Forventning):** Forutse konsekvenser før de oppstår.
- **Inclusiveness (Inkludering):** Involvere alle berørte parter.
- **Reflexivity (Refleksivitet):** Reflektere over egne verdier, antakelser og blindsoner.
- **Responsiveness (Respons):** Endre kurs når ny kunnskap tilsier det.

RRI krever at innovasjonen ikke bare er teknisk vellykket og økonomisk lønnsom, men også **etisk akseptabel**, **sosialt ønskelig** og **miljømessig bærekraftig**.`,
    },
    {
      id: 'tof2-5-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof2-5-7-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken av de fire RRI-dimensjonene handler om å endre kurs når konsekvensene viser seg å være uakseptable?',
        options: [
          { id: 'a', text: 'Anticipation (Forventning)', isCorrect: false },
          { id: 'b', text: 'Inclusiveness (Inkludering)', isCorrect: false },
          { id: 'c', text: 'Reflexivity (Refleksivitet)', isCorrect: false },
          { id: 'd', text: 'Responsiveness (Respons)', isCorrect: true },
        ],
        solution: 'Riktig svar er D. Responsiveness (Respons) handler om evnen og viljen til å endre kurs — stoppe, justere eller skrote en innovasjon — basert på ny kunnskap, tilbakemeldinger og endrede omstendigheter. Anticipation (A) handler om å forutse konsekvenser på forhånd. Inclusiveness (B) handler om å inkludere berørte parter. Reflexivity (C) handler om å reflektere over egne verdier og antakelser.',
      },
    },

    // --- BLOKK 2: EUs RRI-pilarer ---
    {
      id: 'tof2-5-7-text-2',
      type: 'text',
      content: `### EUs seks RRI-pilarer

I tillegg til AIRR-dimensjonene har EU konkretisert RRI gjennom seks «pilarer» som utgjør den praktiske politikken:

**1. Åpen tilgang (Open Access)**
Forskningsresultater finansiert av fellesskapet bør være fritt tilgjengelig — ikke innelåst bak betalingsmurer hos kommersielle forlag.
- EU krever Open Access-publisering for all forskning finansiert gjennom Horisont Europa.
- Åpen forskning fremmer reproduserbarhet, etterprøvbarhet og demokratisering av kunnskap.

**2. Etikk (Ethics)**
All forskning og innovasjon skal følge etiske prinsipper og overholde gjeldende lovverk.
- Forskningsetiske komiteer vurderer prosjekter med mennesker, dyr eller sensitive data.
- Etisk refleksjon skal integreres gjennom hele prosjektet, ikke bare som en «sjekkliste» i starten.

**3. Likestilling (Gender Equality)**
Forskning og innovasjon skal fremme likestilling — både i hvem som forsker, og i hva som forskes på.
- Kjønnsperspektiv i forskningen: Medisinske studier har historisk fokusert på menn, med farlige konsekvenser for kvinners helse.
- Kjønnsbalanse i forskerteam: Mangfold gir bedre forskning.

**4. Styringsmodeller (Governance)**
Myndighetene skal utvikle regulatoriske rammeverk som balanserer innovasjon og ansvar.
- EU AI Act, GDPR og den digitale tjenesteforordningen (DSA) er eksempler.
- Regulering skal være evidensbasert, proporsjonell og adaptiv.

**5. Samfunnsengasjement (Public Engagement)**
Borgere og sivilsamfunn skal ha reell innflytelse på forsknings- og innovasjonsprioriteter.
- Borgerpaneler, offentlige høringer, medborgerskap i forskning (*citizen science*).
- Hensikten er demokratisk forankring: forskning skal tjene samfunnet, ikke bare forskere og næringsliv.

**6. Realfagsutdanning (Science Education)**
Styrking av realfagsutdanning og vitenskapelig allmenndannelse — slik at borgere kan delta informert i debatter om teknologi og vitenskap.
- Kritisk tenkning, kildekritikk og teknologiforståelse som del av allmenndannelsen.

Disse pilarene viser at RRI ikke bare er et akademisk rammeverk, men en praktisk politikk som påvirker hvordan forskning finansieres, reguleres og kommuniseres i Europa.`,
    },
    {
      id: 'tof2-5-7-example-1',
      type: 'example',
      title: 'Eksempel: RRI i praksis — utvikling av et AI-diagnosesystem',
      problem: 'Et norsk helseforetak ønsker å utvikle et AI-system for tidlig diagnostisering av hudkreft basert på bilder. Vis hvordan RRI-rammeverket kan anvendes gjennom utviklingsprosessen.',
      solution: `**Anticipation (Forventning):**
Teamet gjennomfører en scenarioanalyse *før* utviklingen starter:
- *Hva kan gå galt?* Systemet kan ha lavere treffsikkerhet på mørke hudtyper (dokumentert problem med eksisterende systemer). Feil diagnose kan føre til forsinket behandling (falsk negativ) eller unødvendig angst og inngrep (falsk positiv).
- *Utilsiktet bruk?* Systemet kan brukes uten kvalifisert medisinsk tilsyn, eller pasienter kan bruke det som erstatning for legebesøk.
- *Tiltak:* Red team-øvelse med leger, pasienter og etikere for å identifisere risikoer.

**Inclusiveness (Inkludering):**
- Pasientgrupper — inkludert minoriteter og eldre — involveres i designprosessen gjennom brukermedvirkning.
- Treningsdata kurateres aktivt for å sikre representasjon av alle hudtyper, alder og kjønn.
- Hudleger fra ulike regioner og spesialiteter bidrar med fagkunnskap.

**Reflexivity (Refleksivitet):**
- Teamet reflekterer over: «Hvem er 'vi'? Er teamet mangfoldig nok? Tar vi for gitt at AI-diagnose er bedre enn menneskelig diagnose?»
- Ekstern etisk revisjon gjennomføres halvårlig.
- Teamet dokumenterer aktivt sine antakelser og blindsoner.

**Responsiveness (Respons):**
- Systemet lanseres som pilotprosjekt med klare suksesskriterier og «kill criteria» — forhold som fører til at prosjektet stanses.
- Kontinuerlig monitorering av treffsikkerhet på tvers av demografiske grupper.
- Dersom systemet viser skjevheter (f.eks. lavere nøyaktighet for mørke hudtyper), stoppes utrullingen til problemet er løst.
- Pasienter informeres alltid om at AI er involvert og har rett til menneskelig vurdering.

Dette eksempelet viser at RRI ikke bremser innovasjon — det gjør innovasjonen *bedre* og mer tillitvekkende.`,
    },
    {
      id: 'tof2-5-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof2-5-7-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvilken av EUs RRI-pilarer handler om at forskningsresultater finansiert av fellesskapet bør være fritt tilgjengelig?',
        options: [
          { id: 'a', text: 'Etikk (Ethics)', isCorrect: false },
          { id: 'b', text: 'Åpen tilgang (Open Access)', isCorrect: true },
          { id: 'c', text: 'Samfunnsengasjement (Public Engagement)', isCorrect: false },
          { id: 'd', text: 'Likestilling (Gender Equality)', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Åpen tilgang (Open Access) er RRI-pilaren som krever at forskningsresultater finansiert av offentlige midler skal være fritt tilgjengelig for alle — ikke innelåst bak betalingsmurer. EU krever Open Access-publisering for forskning finansiert gjennom Horisont Europa. Etikk (A) handler om etiske prinsipper i forskning, Samfunnsengasjement (C) om borgerinnflytelse, og Likestilling (D) om kjønnsperspektiv i forskning.',
      },
    },

    // --- BLOKK 3: Verktøy og metoder ---
    {
      id: 'tof2-5-7-text-3',
      type: 'text',
      content: `### Verktøy for ansvarlig innovasjon

RRI-rammeverket er abstrakt — men det finnes konkrete verktøy og metoder for å omsette prinsippene i praksis:

**1. Etisk konsekvensanalyse (Ethical Impact Assessment, EIA)**
En systematisk prosess for å identifisere, vurdere og håndtere etiske konsekvenser av et prosjekt eller en teknologi. Ligner på miljøkonsekvensanalyse, men fokuserer på etiske dimensjoner som personvern, rettferdighet, autonomi og verdighet.

**2. Verdisensitiv design (Value Sensitive Design, VSD)**
En designmetodologi der menneskelige verdier — som personvern, tillit, rettferdighet og autonomi — systematisk integreres i teknologidesign fra starten.
- Utviklet av Batya Friedman ved University of Washington.
- Tre faser: Konseptuell analyse (identifiser verdier), empirisk undersøkelse (forstå brukernes verdier), teknisk analyse (bygg verdiene inn i designet).

**3. Ethics by Design**
Inspirert av «Privacy by Design» (som er lovpålagt gjennom GDPR): Etikk bygges inn i systemet fra starten, ikke boltes på i etterkant.
- Eksempel: Et AI-system designes med innebygd forklarbarhet (XAI), slik at brukerne alltid kan forstå hvorfor en beslutning ble tatt.

**4. Teknologisk føre-var-prinsipp**
Inspirert av miljørettens føre-var-prinsipp: Når det er rimelig grunn til å anta at en teknologi kan medføre alvorlig skade, bør forsiktighet utvises selv om vitenskapelig usikkerhet foreligger.
- Eksempel: EUs midlertidige forbud mot visse typer AI-systemer (som sosial poenggivning) er en anvendelse av føre-var-prinsippet.

**5. Red teaming**
En metode hentet fra militærstrategi og cybersikkerhet: Et dedikert team («red team») får i oppgave å prøve å misbruke, bryte eller utnytte teknologien — for å avdekke sårbarheter og misbrukspotensial *før* lansering.
- Brukes i dag av store AI-selskaper som OpenAI, Anthropic og Google DeepMind for å teste AI-modeller for skadelig output.

**6. Etiske retningslinjer og koder**
Mange bransjer og organisasjoner har utviklet etiske retningslinjer for teknologiutvikling:
- IEEE Ethically Aligned Design
- EUs retningslinjer for pålitelig AI (Trustworthy AI)
- ACMs etiske retningslinjer for datavitere
- Asilomar AI-prinsippene

Utfordringen med retningslinjer er implementering — det er stor avstand mellom å *ha* etiske retningslinjer og å *følge* dem i praksis, spesielt når de kolliderer med økonomiske insentiver.`,
    },
    {
      id: 'tof2-5-7-def-2',
      type: 'definition',
      title: 'Verdisensitiv design (VSD)',
      content: `**Verdisensitiv design (Value Sensitive Design, VSD)** er en designmetodologi som systematisk integrerer menneskelige verdier — som personvern, tillit, rettferdighet, autonomi og verdighet — i utvikling av teknologi.

VSD følger tre faser:
1. **Konseptuell analyse:** Identifiser relevante verdier og interessenter.
2. **Empirisk undersøkelse:** Forstå hvordan brukere og berørte parter opplever og prioriterer disse verdiene.
3. **Teknisk analyse:** Oversett verdiene til konkrete designbeslutninger.

VSD står i kontrast til tradisjonell teknologiutvikling der funksjonalitet og effektivitet prioriteres, og etikk behandles som en ettertanke.`,
    },
    {
      id: 'tof2-5-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof2-5-7-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du er del av et team som utvikler en helse-app som bruker AI til å gi kostholds- og treningsråd basert på brukernes helsedata. Bruk verdisensitiv design (VSD) og gå gjennom de tre fasene: (a) Identifiser minst fire relevante verdier, (b) beskriv hvordan du ville undersøkt brukernes holdning til disse verdiene, og (c) foreslå minst tre konkrete designbeslutninger som ivaretar verdiene.',
        hints: ['Tenk på verdier som personvern, helse, autonomi, inkludering og tillit. Hvordan ville du samlet inn brukernes perspektiv? Hvilke konkrete funksjoner i appen kan gjenspeile verdiene?'],
        solution: '**(a) Relevante verdier:**\n\n1. **Personvern:** Helsedata er svært sensitiv. Brukerne må ha kontroll over hvem som ser dataene.\n2. **Autonomi:** Brukerne skal selv ta beslutninger om helse — appen skal gi råd, ikke kommandere.\n3. **Inkludering:** Appen må fungere for alle — uavhengig av alder, funksjonsevne, språk, kultur og økonomi.\n4. **Tillit:** Brukerne må kunne stole på at rådene er vitenskapelig funderte og ikke påvirket av kommersielle interesser.\n5. **Helse/sikkerhet:** Appen må ikke gi råd som kan skade — f.eks. farlige dietter eller overtrening.\n\n**(b) Empirisk undersøkelse:**\n- Brukerintervjuer med et mangfoldig utvalg (ulike alder, bakgrunn, helsetilstander) om hva som er viktigst for dem i en helse-app.\n- Fokusgrupper med kronisk syke, eldre og personer med spiseforstyrrelser — sårbare grupper.\n- Spørreundersøkelser om holdninger til deling av helsedata.\n- Analyse av klager og negativ tilbakemelding på eksisterende helse-apper.\n\n**(c) Konkrete designbeslutninger:**\n1. **Data-minimalisme:** Appen samler bare inn data som er strengt nødvendig, lagrer lokalt når mulig, og gir brukeren full kontroll over deling og sletting (personvern).\n2. **Rådgivende modus:** Appen presenterer forslag med begrunnelse, men lar brukeren alltid velge selv. Aldri skambasert språk som «du burde» eller «du har feilet» (autonomi).\n3. **Mangfoldige profiler:** Appen tilpasser seg ulike behov — fra kulturspesifikke kostholdsalternativer til tilpasning for funksjonsnedsettelser og høy kontrast/stor tekst for eldre (inkludering).\n4. **Kildetransparens:** Alle råd lenker til vitenskapelig dokumentasjon. Tydelig markering av hva som er evidensbasert og hva som er generelle anbefalinger (tillit).\n5. **Varslingssystem:** Appen flagrer potensielt skadelig atferd (f.eks. ekstremt lavt kaloriinntak) og anbefaler brukeren å kontakte lege (helse/sikkerhet).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- BLOKK 4: Kritikk og utfordringer ---
    {
      id: 'tof2-5-7-text-4',
      type: 'text',
      content: `### Kritikk og utfordringer med RRI

RRI er et ambisiøst rammeverk, men det er ikke uten kritikk og begrensninger:

**1. «Ethics washing» (etikkvask)**
Den alvorligste kritikken er at RRI kan brukes som en PR-øvelse — selskaper vedtar etiske retningslinjer og snakker om «ansvarlig innovasjon», men uten reell endring i praksis. Google etablerte et AI-etikkråd i 2019, som ble oppløst etter bare en uke. Meta har hatt etiske retningslinjer i årevis, men har gjentatte ganger prioritert engasjement og annonseinntekter over brukernes velferd.

**2. Spenningen mellom hastighet og ansvar**
I et globalt, konkurransedrevet teknologimarked er det et reelt dilemma: De som tar seg tid til å vurdere konsekvenser grundig, risikerer å tape markedsandeler mot mindre ansvarlige aktører. «Move fast and break things» (Facebooks gamle motto) vinner ofte over «beveg deg forsiktig og bygg ting riktig». RRI må derfor støttes av regulering — frivillige rammeverk er ikke tilstrekkelig.

**3. Hvem definerer «ansvarlig»?**
Begrepet «ansvarlig innovasjon» er ikke nøytralt. Hva som anses som ansvarlig, avhenger av verdier, kultur og maktposisjoner. For et teknologiselskap betyr «ansvarlig» kanskje å følge lovverket. For en menneskerettighetsorganisasjon betyr det kanskje å gå langt utover lovens minimumskrav. For en borger i et autoritært regime betyr det kanskje å ikke utvikle overvåkningsteknologi i det hele tatt.

**4. Global ulikhet**
RRI er primært et europeisk rammeverk. Land som Kina, USA, India og Russland har ulike tilnærminger til innovasjon, regulering og ansvar. Dersom Europa regulerer strengt mens andre ikke gjør det, kan innovasjonen flytte til mindre regulerte markeder — en form for «regulatorisk arbitrasje». RRI må derfor kombineres med internasjonal samordning.

**5. Innovasjon under usikkerhet**
En grunnleggende utfordring er at konsekvensene av radikalt ny teknologi *ikke kan forutses fullt ut*. Ingen kunne på 1990-tallet forutse at internett ville muliggjøre sosiale medier, som igjen ville påvirke demokratiske valg. RRI krever at vi gjør vårt beste for å forutse — men ydmykhet overfor det uforutsigbare er like viktig.

**Veien videre:**
Til tross for utfordringene representerer RRI et viktig skifte: fra innovasjon som kun vurderes på teknisk og økonomisk suksess, til innovasjon som også vurderes på samfunnsmessig og etisk kvalitet. For at rammeverket skal ha reell virkning, må det støttes av sterk regulering, transparente institusjoner og en kultur der etikk ikke er en «nice to have», men en forutsetning.`,
    },
    {
      id: 'tof2-5-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof2-5-7-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva innebærer begrepet «ethics washing» i forbindelse med RRI?',
        options: [
          { id: 'a', text: 'At etiske retningslinjer vaskes jevnlig for å holde dem oppdaterte', isCorrect: false },
          { id: 'b', text: 'At organisasjoner bruker etiske retningslinjer som PR uten reell endring i praksis', isCorrect: true },
          { id: 'c', text: 'At etikk fjernes fra innovasjonsprosessen for å spare tid', isCorrect: false },
          { id: 'd', text: 'At myndigheter pålegger urimelig strenge etiske krav', isCorrect: false },
        ],
        solution: 'Riktig svar er B. «Ethics washing» (etikkvask) er et fenomen der organisasjoner vedtar etiske retningslinjer, snakker om ansvarlig innovasjon og markedsfører seg som etiske — men uten å gjennomføre reelle endringer i praksis. Det er parallelt til «greenwashing» (grønnvasking) i miljøsammenheng. Eksempler inkluderer Googles kortlivede AI-etikkråd og Metas etiske retningslinjer som gjentatte ganger har blitt tilsidesatt for profittinteresser. Det handler ikke om oppdatering av retningslinjer (A), fjerning av etikk (C) eller strenge myndighetskrav (D).',
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof2-5-7-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **Ansvarlig innovasjon (RRI)** er et rammeverk for å integrere etiske, sosiale og miljømessige hensyn i hele innovasjonsprosessen — fra idé til implementering.
- **AIRR-dimensjonene:** Anticipation (forutse konsekvenser), Inclusiveness (inkludere berørte parter), Reflexivity (reflektere over egne verdier og blindsoner) og Responsiveness (endre kurs når nødvendig).
- **EUs seks RRI-pilarer:** Åpen tilgang, etikk, likestilling, styringsmodeller, samfunnsengasjement og realfagsutdanning — konkretiserer RRI i politikk.
- **Verktøy:** Etisk konsekvensanalyse (EIA), verdisensitiv design (VSD), Ethics by Design, føre-var-prinsippet, red teaming og etiske retningslinjer.
- **Utfordringer:** Ethics washing, spenning mellom hastighet og ansvar, global ulikhet i regulering, og den grunnleggende usikkerheten ved radikalt ny teknologi.
- RRI er ikke et alternativ til regulering — det er et *supplement* som krever støtte fra sterk lovgivning, transparente institusjoner og en innovasjonskultur der etikk er integrert, ikke påklistret.`,
    },

    // --- Samleoppgave ---
    {
      id: 'tof2-5-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof2-5-7-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et teknologiselskap ønsker å lansere en app som bruker ansiktsgjenkjenning til å «lese» elevers emosjonelle tilstand i klasserommet — for å gi læreren tilbakemelding om hvem som er engasjert, frustrert eller uinteressert. Anvend alle fire AIRR-dimensjonene i en kritisk analyse av prosjektet. For hver dimensjon: (a) beskriv hva den innebærer i dette tilfellet, (b) identifiser minst to konkrete problemer, og (c) foreslå tiltak. Avslutt med en samlet anbefaling: bør prosjektet gjennomføres, og i så fall under hvilke betingelser?',
        hints: ['Tenk på personvern for barn, algoritmisk nøyaktighet for emosjonsgjenkjenning, maktforholdet mellom lærer og elev, og hvem som tjener på dataene. Forskning viser at AI-basert emosjonsgjenkjenning har lav vitenskapelig validitet.'],
        solution: '**Anticipation (Forventning):**\n*(a) Hva kan gå galt?*\n*(b) Problemer:*\n1. Vitenskapelig validitet: Forskning (bl.a. Barrett et al., 2019) viser at ansiktsuttrykk *ikke* er pålitelige indikatorer for indre emosjonell tilstand — samsvar mellom uttrykk og opplevelse er kulturelt betinget og individuelt variabelt. Systemet risikerer å diagnostisere feil.\n2. Misbrukspotensial: Data om elevers «emosjonelle tilstand» kan brukes til rangeringer, disiplinering eller profiling — langt utover opprinnelig intensjon.\n*(c) Tiltak:* Krev uavhengig vitenskapelig validering før lansering. Gjennomfør red team-øvelse for å kartlegge misbruksscenarier.\n\n**Inclusiveness (Inkludering):**\n*(b) Problemer:*\n1. Elever — de mest berørte — er ikke involvert i designprosessen. Barn har begrenset samtykkekompetanse.\n2. Kulturell skjevhet: Emosjonsuttrykk varierer mellom kulturer og nevrotyper — systemet kan systematisk feiltolke elever med autismespekterdiagnose eller elever med annen kulturell bakgrunn.\n*(c) Tiltak:* Involver elever, foreldre, pedagoger og spesialpedagoger i designprosessen. Test på mangfoldig populasjon.\n\n**Reflexivity (Refleksivitet):**\n*(b) Problemer:*\n1. Antakelsen om at «engasjement» er synlig i ansiktet er ikke vitenskapelig robust — stille, kontemplative elever kan feiltolkes som uinteresserte.\n2. Maktasymmetri: Hvem overvåker hvem? Elevene overvåkes, men har ingen innflytelse på systemet. Lærerne får data, men er det lærerne eller teknologiselskapet som kontrollerer dataene?\n*(c) Tiltak:* Teamet bør reflektere over: «Ville *vi* ønsket dette systemet da *vi* var elever?» Ekstern etisk revisjon.\n\n**Responsiveness (Respons):**\n*(b) Problemer:*\n1. Når systemet først er innført, skaper det avhengighet og forventninger som gjør det vanskelig å trekke tilbake.\n2. Økonomiske insentiver: Selskapet har interesse av å utvide, ikke begrense, bruken av dataene.\n*(c) Tiltak:* Innbygg klare «kill criteria» — betingelser for å stanse prosjektet. Gi skoler full kontroll over data og rett til å avvikle.\n\n**Samlet anbefaling:**\nProsjektet bør *ikke* gjennomføres i sin nåværende form. Den vitenskapelige basisen for emosjonsgjenkjenning er for svak, personvernkostnadene for barn er for høye, og maktasymmetrien mellom et teknologiselskap og mindreårige elever er uakseptabel. Dersom konseptet skal utforskes videre, bør det skje som et strengt regulert forskningsprosjekt — med uavhengig etisk vurdering, aktivt samtykke fra foresatte, og med anonymiserte, aggregerte data som aldri kobles til enkeltelever.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport alle kapitler i Seksjon 5
// ============================================================================

export const TOF_2_DEL5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TOF_2_5_1,
  CHAPTER_TOF_2_5_2,
  CHAPTER_TOF_2_5_3,
  CHAPTER_TOF_2_5_4,
  CHAPTER_TOF_2_5_5,
  CHAPTER_TOF_2_5_6,
  CHAPTER_TOF_2_5_7,
];
